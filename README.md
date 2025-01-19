<p align="center">
  <img src="docsify.svg" alt="Docsify Logo" height="128">
</p>
<h1 align="center">Docsify Plugins</h1>
<h3 align="center">Shiki</h3>
<p align="center">by <a href="https://github.com/simochee">simochee</a></p>

[![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hw/docsify-shiki?style=flat-square)](https://www.jsdelivr.com/package/npm/docsify-shiki)
[![NPM Version](https://img.shields.io/npm/v/docsify-shiki?style=flat-square)](https://www.npmjs.com/package/docsify-shiki)
[![License](https://img.shields.io/npm/l/docsify-shiki?style=flat-square)](https://github.com/simochee/docsify-shiki/blob/main/LICENSE)
[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/simochee/docsify-shiki/release.yaml?style=flat-square)](https://github.com/simochee/docsify-shiki/actions/workflows/release.yaml)

Replace syntax highlight with [Shiki](https://github.com/shikijs/shiki).

## 📀 Setup

Insert a script tag to load the plugin script file after loading the Docsify script.

```html
<!-- IMPORTANT: config must be defined as a module -->
<script type="module">
  // import themes and languages from esm.sh
  import nord from 'https://esm.sh/@shikijs/themes@1/nord';
  import ts from 'https://esm.sh/@shikijs/langs@1/ts';
  import vue from 'https://esm.sh/@shikijs/langs@1/vue';

  window.$docsify = {
    shiki: {
      theme: nord,
      langs: [ts, vue],
    }
  };
</script>
<script src="//cdn.jsdelivr.net/npm/docsify@v4"></script>
<script type="module" src="//cdn.jsdelivr.net/npm/docsify-shiki@v1"></script>
```

## 🔧 Configuration

### theme

Specifies the Shiki theme. Use `themes` to set themes for each color schema.

```html
<script type="module">
import synthwave84 from 'https://esm.sh/@shikijs/themes@1/synthwave-84';

window.$docsify = {
  shiki: {
    theme: synthwave84,
  }
}
</script>
```

See [Shiki Document](https://shiki.style/themes) for available themes.

### themes

Specifies themes for each color schema.

See [Light/Dark Dual Themes ](https://shiki.style/guide/dual-themes) for information on how multiple themes work.

```html
<!-- Example: query-based dark theme -->
<style>
@media (prefers-color-scheme: dark) {
  .shiki,
  .shiki span {
    color: var(--shiki-dark) !important;
    background-color: var(--shiki-dark-bg) !important;
    /* Optional, if you also want font styles */
    font-style: var(--shiki-dark-font-style) !important;
    font-weight: var(--shiki-dark-font-weight) !important;
    text-decoration: var(--shiki-dark-text-decoration) !important;
  }
}
</style>
<script type="module">
import githubDark from 'https://esm.sh/@shikijs/themes@1/github-dark';
import githubLight from 'https://esm.sh/@shikijs/themes@1/github-light';

window.$docsify = {
  shiki: {
    themes: {
      dark: githubDark,
      light: githubLight
    }
  }
}
</script>
```

### langs

Specify the languages to use with Shiki.

```html
<script type="module">
import js from 'https://esm.sh/@shikijs/langs@1/js';
import md from 'https://esm.sh/@shikijs/langs@1/md';

window.$docsify = {
  shiki: {
    langs: [js, md],
  }
}
</script>
```

See [Shiki Document](https://shiki.style/languages) for available languages.

## 💻 Development

1. Clone this repository
1. Enable Corepack using `corepack enable`
1. Install dependencies using `pnpm install`
1. Run watch mode using `pnpm run watch`
1. Start server using [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
1. Insert a script tag to load the plugin script file after loading the Docsify script.

```html
<script type="module" src="http://localhost:5500"></script>
```

## 🛡️ License

MIT
