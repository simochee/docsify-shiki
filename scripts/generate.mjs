#!/usr/bin/env node
import { mkdir, rm, writeFile } from "node:fs/promises";
import { languageAliasNames, languageNames } from "@shikijs/langs";
import { themeNames } from "@shikijs/themes";

// cleanups
await rm(new URL("../langs", import.meta.url), { recursive: true });
await rm(new URL("../themes", import.meta.url), { recursive: true });

// create directories
await mkdir(new URL("../langs", import.meta.url));
await mkdir(new URL("../themes", import.meta.url));

// generate language files
for (const languageName of [...languageNames, ...languageAliasNames]) {
	const { default: language } = await import(`@shikijs/langs/${languageName}`);

	const code = `/** Shiki Language: ${languageName} */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push(${JSON.stringify(language, null, 2)})`;

	await writeFile(
		new URL(`../langs/${languageName}.js`, import.meta.url),
		code,
	);
}

// generate theme files
for (const themeName of themeNames) {
	const { default: theme } = await import(`@shikijs/themes/${themeName}`);

	const code = `/** Shiki Theme: ${themeName} */
$docsify.shiki ||= {};
$docsify.shiki.themes ||= [];
$docsify.shiki.themes.push(${JSON.stringify(theme, null, 2)})`;

	await writeFile(new URL(`../themes/${themeName}.js`, import.meta.url), code);
}
