import { createHighlighterCoreSync } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

/** プラグインをインストール */
const install = (hook, vm) => {
	hook.init(() => {
		const shiki = createHighlighterCoreSync({
			themes: vm.config?.shiki?.themes,
			langs: vm.config?.shiki?.langs,
			engine: createJavaScriptRegexEngine(),
		});

		const theme = vm.config.shiki?.themes?.[0]?.name;

		const codeRenderer = (code, lang) => {
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
							return codeRenderer(content, lang);
						},
					},
				});

				return extended;
			};
		} else {
			const defaultCode = vm.config?.markdown?.renderer?.code;
			vm.config.markdown ||= {};
			vm.config.markdown.renderer ||= {};
			vm.config.markdown.renderer.code = function (content, lang) {
				this.origin.code = codeRenderer;

				return (
					defaultCode?.apply(this, [content, lang]) ??
					this.origin.code(content, lang)
				);
			};
		}
	});

	hook.mounted(() => {
		const style = document.createElement("style");
		style.innerHTML = `
			.markdown-section pre.shiki > code {
				background: none;
			}
		`;
		document.head.appendChild(style);
	});
};

$docsify.plugins = [].concat(install, $docsify.plugins);
