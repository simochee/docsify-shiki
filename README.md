<p align="center">
  <img src="docsify.svg" alt="Docsify Logo" height="128">
</p>
<h1 align="center">Docsify Plugins</h1>
<h3 align="center">Shiki</h3>
<p align="center">by <a href="https://github.com/simochee">simochee</a></p>

[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/docsify-shiki/badge)](https://www.jsdelivr.com/package/npm/docsify-shiki)
[![npm version](https://badge.fury.io/js/docsify-shiki.svg)](https://badge.fury.io/js/docsify-shiki)
[![License](https://img.shields.io/npm/l/docsify-shiki)](https://github.com/simochee/docsify-shiki/blob/main/LICENSE)

Replace syntax highlight with [Shiki](https://github.com/shikijs/shiki).

## 📀 Setup

Insert a script tag to load the plugin script file after loading the Docsify script.

```html
<script>
  window.$docsify = {};
</script>
<script src="//cdn.jsdelivr.net/npm/docsify@v4"></script>
<!-- Themes -->
<script type="module" src="//cdn.jsdelivr.net/npm/docsify-shiki@v1/themes/nord.js"></script>
<!-- Languages -->
<script type="module" src="//cdn.jsdelivr.net/npm/docsify-shiki@v1/langs/javascript.js"></script>
<script type="module" src="//cdn.jsdelivr.net/npm/docsify-shiki@v1/langs/markdown.js"></script>
<!-- Plugin -->
<script type="module" src="//cdn.jsdelivr.net/npm/docsify-shiki@v1"></script>
```

## 💻 Development

1. Clone this repository
1. Enable Corepack using `corepack enable`
1. Install dependencies using `pnpm install`
1. Run watch mode using `pnpm run watch`
1. Start server using [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
1. Insert a script tag to load the plugin script file after loading the Docsify script.

```html
<script src="http://localhost:5500"></script>
```

## 🛡️ License

MIT
