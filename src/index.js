import { createHighlighterCoreSync } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
import { overrideCss } from "./css";

/** プラグインをインストール */
const install = (hook, vm) => {
	hook.init(() => {
		const themes = vm.config?.shiki?.themes ?? [];
		const langs = vm.config?.shiki?.langs ?? [];
		const shiki = createHighlighterCoreSync({
			themes,
			langs,
			engine: createJavaScriptRegexEngine(),
		});

		// themes の最初をデフォルトとして使う
		// TODO: ユーザーがテーマを選択できるようにする
		const theme = themes[0]?.name;

		/**
		 * Shiki でコードブロックを描画する
		 * @param {string} code コード
		 * @param {string} lang 言語
		 */
		const shikiRenderer = (code, lang) => {
			try {
				const language = shiki.getLanguage(lang);

				return shiki.codeToHtml(code, {
					lang,
					theme,
					transformers: [
						{
							code(node) {
								this.addClassToHast(
									node,
									`lang-${language?._grammar.name ?? lang}`,
								);
							},
							pre(node) {
								node.properties["data-lang"] =
									language?._grammar.displayName ?? lang;
							},
						},
					],
				});
			} catch (err) {
				console.warn("[shiki]", err);

				// 言語が見つからない場合はハイライトなしで描画する
				return shiki.codeToHtml(code, {
					lang: "text",
					theme,
					transformers: [
						{
							code(node) {
								this.addClassToHast(node, "lang-text");
							},
							pre(node) {
								node.properties["data-lang"] = "Plain Text";
							},
						},
					],
				});
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
