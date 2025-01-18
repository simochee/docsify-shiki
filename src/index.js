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

		const codeRenderer = (code, lang) => {
			try {
				return shiki.codeToHtml(code, { lang, theme: "nord" });
			} catch {
				return code;
			}
		};

		if (Docsify.util.isFn(vm.config.markdown)) {
			const rawMarkdown = vm.config.markdown;
			vm.config.markdown = (marked, renderer) => {
				const extended = rawMarkdown?.(marked, renderer);

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
			const codeRenderer = vm.config?.markdown?.renderer?.code;
			vm.config.markdown ||= {};
			vm.config.markdown.renderer ||= {};
			vm.config.markdown.renderer.code = (content, lang) => {
				const code = codeRenderer?.(content, lang) || content;

				return codeRenderer(code, lang);
			};
		}
	});
};

$docsify.plugins = [].concat(install, $docsify.plugins);
