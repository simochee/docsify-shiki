/** Shiki Language: vue-directives */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push([
  {
    "fileTypes": [],
    "injectTo": [
      "source.vue",
      "text.html.markdown",
      "text.html.derivative",
      "text.pug"
    ],
    "injectionSelector": "L:meta.tag -meta.attribute -meta.ng-binding -entity.name.tag.pug -attribute_value -source.tsx -source.js.jsx, L:meta.element -meta.attribute",
    "name": "vue-directives",
    "patterns": [
      {
        "include": "source.vue#vue-directives"
      }
    ],
    "scopeName": "vue.directives"
  }
])