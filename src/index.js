import { createHighlighterCoreSync } from "https://esm.sh/shiki@1/core";
import { createJavaScriptRegexEngine } from "https://esm.sh/shiki@1/engine/javascript";
import { overrideCss } from "./css";

/** プラグインをインストール */
const install = (hook, vm) => {
	hook.init(() => {
		const configThemes =
			(typeof vm.config?.shiki?.themes === "object" &&
				vm.config.shiki.themes) ||
			{};

		/** @type {import('@shikijs/types').HighlighterCore} */
		const shiki = createHighlighterCoreSync({
			themes: [
				// shiki.themes の値を配列に変換して追加
				...Object.values(configThemes),
				// shiki.theme で指定された値を追加
				vm.config?.shiki?.theme,
			],
			langs: vm.config?.shiki?.langs ?? [],
			engine: createJavaScriptRegexEngine(),
		});

		const getOptions = (lang, displayName = lang) => {
			const options = {
				theme: vm.config?.shiki?.theme?.name,
				lang,
				transformers: [
					{
						code(node) {
							this.addClassToHast(node, `lang-${lang}`);
						},
						pre(node) {
							node.properties["data-lang"] = displayName;
						},
					},
				],
			};

			if (Object.keys(configThemes).length > 0) {
				options.themes = Object.fromEntries(
					Object.entries(configThemes).map(([key, theme]) => [
						key,
						theme?.name,
					]),
				);
			}

			return options;
		};

		/**
		 * Shiki でコードブロックを描画する
		 * @param {string} code コード
		 * @param {string} lang 言語
		 */
		const shikiRenderer = (code, lang) => {
			try {
				const language = shiki.getLanguage(lang);
				const name = language?.name ?? lang;
				const displayName = language?._grammar.displayName ?? lang;

				return shiki.codeToHtml(code, getOptions(name, displayName));
			} catch (err) {
				console.warn("[shiki]", err);

				try {
					// 言語が見つからない場合はハイライトなしで描画する
					return shiki.codeToHtml(code, getOptions("text", lang));
				} catch (err) {
					console.warn("[shiki]", err);

					// さらにエラーになった場合はそのまま描画する
					const $pre = document.createElement("pre");
					const $code = document.createElement("code");

					$pre.dataset.lang = lang;
					$code.classList.add(`lang-${lang}`);

					$code.textContent = code;

					$pre.appendChild($code);

					return $pre.outerHTML;
				}
			}
		};

		if (Docsify.util.isFn(vm.config.markdown)) {
			const rawMarkdown = vm.config.markdown;
			vm.config.markdown = function (marked, renderer) {
				const extended = rawMarkdown?.apply(this, [marked, renderer]);

				extended.use({
					renderer: {
						code(content, lang) {
							return shikiRenderer(content, lang);
						},
					},
				});

				return extended;
			};
		} else {
			const code = vm.config?.markdown?.renderer?.code;
			vm.config.markdown ||= {};
			vm.config.markdown.renderer ||= {};
			vm.config.markdown.renderer.code = function (content, lang) {
				this.origin.code = (code, lang) => shikiRenderer(code, lang);

				return (
					code?.apply(this, [content, lang]) ?? this.origin.code(content, lang)
				);
			};
		}
	});

	hook.mounted(() => {
		overrideCss();
	});
};

$docsify.plugins = [].concat(install, $docsify.plugins);
