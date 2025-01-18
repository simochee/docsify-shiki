/** Shiki Language: less */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push([
  {
    "displayName": "Less",
    "name": "less",
    "patterns": [
      {
        "include": "#comment-block"
      },
      {
        "include": "#less-namespace-accessors"
      },
      {
        "include": "#less-extend"
      },
      {
        "include": "#at-rules"
      },
      {
        "include": "#less-variable-assignment"
      },
      {
        "include": "#property-list"
      },
      {
        "include": "#selector"
      }
    ],
    "repository": {
      "angle-type": {
        "captures": {
          "1": {
            "name": "keyword.other.unit.less"
          }
        },
        "match": "(?i:[-+]?(?:(?:\\d*\\.\\d+(?:[eE](?:[-+]?\\d+))*)|(?:[-+]?\\d+))(deg|grad|rad|turn))\\b",
        "name": "constant.numeric.less"
      },
      "arbitrary-repetition": {
        "captures": {
          "1": {
            "name": "punctuation.definition.arbitrary-repetition.less"
          }
        },
        "match": "\\s*(?:(,))"
      },
      "at-charset": {
        "begin": "\\s*((@)charset\\b)\\s*",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.at-rule.charset.less"
          },
          "2": {
            "name": "punctuation.definition.keyword.less"
          }
        },
        "end": "\\s*((?=;|$))",
        "name": "meta.at-rule.charset.less",
        "patterns": [
          {
            "include": "#literal-string"
          }
        ]
      },
      "at-container": {
        "begin": "(?=\\s*@container)",
        "end": "\\s*(\\})",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.block.end.less"
          }
        },
        "patterns": [
          {
            "begin": "((@)container)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.at-rule.container.less"
              },
              "2": {
                "name": "punctuation.definition.keyword.less"
              },
              "3": {
                "name": "support.constant.container.less"
              }
            },
            "end": "(?=\\{)",
            "name": "meta.at-rule.container.less",
            "patterns": [
              {
                "begin": "\\s*(?=[^{;])",
                "end": "\\s*(?=[{;])",
                "patterns": [
                  {
                    "match": "\\b(not|and|or)\\b",
                    "name": "keyword.operator.comparison.less"
                  },
                  {
                    "begin": "\\(",
                    "beginCaptures": {
                      "0": {
                        "name": "punctuation.definition.group.begin.less"
                      }
                    },
                    "end": "\\)",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.definition.group.end.less"
                      }
                    },
                    "name": "meta.at-rule.container-query.less",
                    "patterns": [
                      {
                        "captures": {
                          "1": {
                            "name": "support.type.property-name.less"
                          }
                        },
                        "match": "\\b(aspect-ratio|block-size|height|inline-size|orientation|width)\\b",
                        "name": "support.constant.size-feature.less"
                      },
                      {
                        "match": "((<|>)=?)|=|\\/",
                        "name": "keyword.operator.comparison.less"
                      },
                      {
                        "match": ":",
                        "name": "punctuation.separator.key-value.less"
                      },
                      {
                        "match": "portrait|landscape",
                        "name": "support.constant.property-value.less"
                      },
                      {
                        "include": "#numeric-values"
                      },
                      {
                        "match": "\\/",
                        "name": "keyword.operator.arithmetic.less"
                      },
                      {
                        "include": "#var-function"
                      },
                      {
                        "include": "#less-variables"
                      },
                      {
                        "include": "#less-variable-interpolation"
                      }
                    ]
                  },
                  {
                    "include": "#style-function"
                  },
                  {
                    "match": "--|(?:-?(?:(?:[a-zA-Z_]|[\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}\\x{200D}\\x{203F}\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}])|(?:\\\\(?:\\N|[[:^xdigit:]]|[[:xdigit:]]{1,6}[\\s\\R]))))(?:(?:[-\\da-zA-Z_]|[\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}\\x{200D}\\x{203F}\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}])|(?:\\\\(?:\\N|[[:^xdigit:]]|[[:xdigit:]]{1,6}[\\s\\R])))*",
                    "name": "variable.parameter.container-name.css"
                  },
                  {
                    "include": "#arbitrary-repetition"
                  },
                  {
                    "include": "#less-variables"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\s*(\\{)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.block.begin.less"
              }
            },
            "end": "(?=\\})",
            "patterns": [
              {
                "include": "#rule-list-body"
              },
              {
                "include": "$self"
              }
            ]
          }
        ]
      },
      "at-counter-style": {
        "begin": "\\s*((@)counter-style\\b)\\s+(?:(?i:\\b(decimal|none)\\b)|(-?(?:[[_a-zA-Z][^\\x{00}-\\x{7F}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))(?:[[-\\w][^\\x{00}-\\x{7F}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))*))\\s*(?=\\{|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.at-rule.counter-style.less"
          },
          "2": {
            "name": "punctuation.definition.keyword.less"
          },
          "3": {
            "name": "invalid.illegal.counter-style-name.less"
          },
          "4": {
            "name": "entity.other.counter-style-name.css"
          }
        },
        "end": "\\s*(\\})",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.block.begin.less"
          }
        },
        "name": "meta.at-rule.counter-style.less",
        "patterns": [
          {
            "include": "#comment-block"
          },
          {
            "include": "#rule-list"
          }
        ]
      },
      "at-custom-media": {
        "begin": "(?=\\s*@custom-media\\b)",
        "end": "\\s*(?=;)",
        "name": "meta.at-rule.custom-media.less",
        "patterns": [
          {
            "captures": {
              "0": {
                "name": "punctuation.section.property-list.less"
              }
            },
            "match": "\\s*;"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.control.at-rule.custom-media.less"
              },
              "2": {
                "name": "punctuation.definition.keyword.less"
              },
              "3": {
                "name": "support.constant.custom-media.less"
              }
            },
            "match": "\\s*((@)custom-media)(?=.*?)"
          },
          {
            "include": "#media-query-list"
          }
        ]
      },
      "at-font-face": {
        "begin": "\\s*((@)font-face)\\s*(?=\\{|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.at-rule.font-face.less"
          },
          "2": {
            "name": "punctuation.definition.keyword.less"
          }
        },
        "end": "\\s*(\\})",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.block.end.less"
          }
        },
        "name": "meta.at-rule.font-face.less",
        "patterns": [
          {
            "include": "#comment-block"
          },
          {
            "include": "#rule-list"
          }
        ]
      },
      "at-import": {
        "begin": "\\s*((@)import\\b)\\s*",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.at-rule.import.less"
          },
          "2": {
            "name": "punctuation.definition.keyword.less"
          }
        },
        "end": "\\;",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.rule.less"
          }
        },
        "name": "meta.at-rule.import.less",
        "patterns": [
          {
            "include": "#url-function"
          },
          {
            "include": "#less-variables"
          },
          {
            "begin": "(?<=([\"'])|([\"']\\)))\\s*",
            "end": "\\s*(?=\\;)",
            "patterns": [
              {
                "include": "#media-query"
              }
            ]
          },
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.group.begin.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.group.less",
            "patterns": [
              {
                "match": "reference|inline|less|css|once|multiple|optional",
                "name": "constant.language.import-directive.less"
              },
              {
                "include": "#comma-delimiter"
              }
            ]
          },
          {
            "include": "#literal-string"
          }
        ]
      },
      "at-keyframes": {
        "begin": "\\s*((@)keyframes)(?=.*?\\{)",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.at-rule.keyframe.less"
          },
          "2": {
            "name": "punctuation.definition.keyword.less"
          },
          "4": {
            "name": "support.constant.keyframe.less"
          }
        },
        "end": "\\s*(\\})",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.block.end.less"
          }
        },
        "patterns": [
          {
            "begin": "\\s*(\\{)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.block.begin.less"
              }
            },
            "end": "(?=\\})",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "keyword.other.keyframe-selector.less"
                  },
                  "2": {
                    "name": "constant.numeric.less"
                  },
                  "3": {
                    "name": "keyword.other.unit.less"
                  }
                },
                "match": "\\s*(?:(from|to)|((?:\\.[0-9]+|[0-9]+(?:\\.[0-9]*)?)(%)))\\s*,?\\s*"
              },
              {
                "include": "$self"
              }
            ]
          },
          {
            "begin": "\\s*(?=[^{;])",
            "end": "\\s*(?=\\{)",
            "name": "meta.at-rule.keyframe.less",
            "patterns": [
              {
                "include": "#keyframe-name"
              },
              {
                "include": "#arbitrary-repetition"
              }
            ]
          }
        ]
      },
      "at-media": {
        "begin": "(?=\\s*@media\\b)",
        "end": "\\s*(\\})",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.block.end.less"
          }
        },
        "patterns": [
          {
            "begin": "\\s*((@)media)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.at-rule.media.less"
              },
              "2": {
                "name": "punctuation.definition.keyword.less"
              },
              "3": {
                "name": "support.constant.media.less"
              }
            },
            "end": "\\s*(?=\\{)",
            "name": "meta.at-rule.media.less",
            "patterns": [
              {
                "include": "#media-query-list"
              }
            ]
          },
          {
            "begin": "\\s*(\\{)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.block.begin.less"
              }
            },
            "end": "(?=\\})",
            "patterns": [
              {
                "include": "#rule-list-body"
              },
              {
                "include": "$self"
              }
            ]
          }
        ]
      },
      "at-namespace": {
        "begin": "\\s*((@)namespace)\\s+",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.at-rule.namespace.less"
          },
          "2": {
            "name": "punctuation.definition.keyword.less"
          }
        },
        "end": "\\;",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.rule.less"
          }
        },
        "name": "meta.at-rule.namespace.less",
        "patterns": [
          {
            "include": "#url-function"
          },
          {
            "include": "#literal-string"
          },
          {
            "match": "(-?(?:[[_a-zA-Z][^\\x{00}-\\x{7F}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))(?:[[-\\w][^\\x{00}-\\x{7F}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))*)",
            "name": "entity.name.constant.namespace-prefix.less"
          }
        ]
      },
      "at-page": {
        "captures": {
          "1": {
            "name": "keyword.control.at-rule.page.less"
          },
          "2": {
            "name": "punctuation.definition.keyword.less"
          },
          "3": {
            "name": "punctuation.definition.entity.less"
          },
          "4": {
            "name": "entity.other.attribute-name.pseudo-class.less"
          }
        },
        "match": "\\s*((@)page)\\s*(?:(:)(first|left|right))?\\s*(?=\\{|$)",
        "name": "meta.at-rule.page.less",
        "patterns": [
          {
            "include": "#comment-block"
          },
          {
            "include": "#rule-list"
          }
        ]
      },
      "at-rules": {
        "patterns": [
          {
            "include": "#at-charset"
          },
          {
            "include": "#at-container"
          },
          {
            "include": "#at-counter-style"
          },
          {
            "include": "#at-custom-media"
          },
          {
            "include": "#at-font-face"
          },
          {
            "include": "#at-media"
          },
          {
            "include": "#at-import"
          },
          {
            "include": "#at-keyframes"
          },
          {
            "include": "#at-namespace"
          },
          {
            "include": "#at-page"
          },
          {
            "include": "#at-supports"
          },
          {
            "include": "#at-viewport"
          }
        ]
      },
      "at-supports": {
        "begin": "(?=\\s*@supports\\b)",
        "end": "(?=\\s*)(\\})",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.block.end.less"
          }
        },
        "patterns": [
          {
            "begin": "\\s*((@)supports)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.at-rule.supports.less"
              },
              "2": {
                "name": "punctuation.definition.keyword.less"
              },
              "3": {
                "name": "support.constant.supports.less"
              }
            },
            "end": "\\s*(?=\\{)",
            "name": "meta.at-rule.supports.less",
            "patterns": [
              {
                "include": "#at-supports-operators"
              },
              {
                "include": "#at-supports-parens"
              }
            ]
          },
          {
            "begin": "\\s*(\\{)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.section.property-list.begin.less"
              }
            },
            "end": "(?=\\})",
            "patterns": [
              {
                "include": "#rule-list-body"
              },
              {
                "include": "$self"
              }
            ]
          }
        ]
      },
      "at-supports-operators": {
        "match": "\\b(?:and|or|not)\\b",
        "name": "keyword.operator.logic.less"
      },
      "at-supports-parens": {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.group.begin.less"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.group.end.less"
          }
        },
        "name": "meta.group.less",
        "patterns": [
          {
            "include": "#at-supports-operators"
          },
          {
            "include": "#at-supports-parens"
          },
          {
            "include": "#rule-list-body"
          }
        ]
      },
      "attr-function": {
        "begin": "\\b(attr)(?=\\()",
        "beginCaptures": {
          "1": {
            "name": "support.function.filter.less"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.group.end.less"
          }
        },
        "name": "meta.function-call.less",
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.group.begin.less"
              }
            },
            "end": "(?=\\))",
            "patterns": [
              {
                "include": "#qualified-name"
              },
              {
                "include": "#literal-string"
              },
              {
                "begin": "(-?(?:[[_a-zA-Z][^\\x{00}-\\x{7F}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))(?:[[-\\w][^\\x{00}-\\x{7F}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))*)",
                "end": "(?=\\))",
                "name": "entity.other.attribute-name.less",
                "patterns": [
                  {
                    "match": "\\b((?i:em|ex|ch|rem)|(?i:vw|vh|vmin|vmax)|(?i:cm|mm|q|in|pt|pc|px|fr)|(?i:deg|grad|rad|turn)|(?i:s|ms)|(?i:Hz|kHz)|(?i:dpi|dpcm|dppx))\\b",
                    "name": "keyword.other.unit.less"
                  },
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "include": "#property-value-constants"
                  },
                  {
                    "include": "#numeric-values"
                  }
                ]
              },
              {
                "include": "#color-values"
              }
            ]
          }
        ]
      },
      "builtin-functions": {
        "patterns": [
          {
            "include": "#attr-function"
          },
          {
            "include": "#calc-function"
          },
          {
            "include": "#color-functions"
          },
          {
            "include": "#counter-functions"
          },
          {
            "include": "#cross-fade-function"
          },
          {
            "include": "#cubic-bezier-function"
          },
          {
            "include": "#filter-function"
          },
          {
            "include": "#fit-content-function"
          },
          {
            "include": "#format-function"
          },
          {
            "include": "#gradient-functions"
          },
          {
            "include": "#grid-repeat-function"
          },
          {
            "include": "#image-function"
          },
          {
            "include": "#less-functions"
          },
          {
            "include": "#local-function"
          },
          {
            "include": "#minmax-function"
          },
          {
            "include": "#regexp-function"
          },
          {
            "include": "#shape-functions"
          },
          {
            "include": "#steps-function"
          },
          {
            "include": "#symbols-function"
          },
          {
            "include": "#transform-functions"
          },
          {
            "include": "#url-function"
          },
          {
            "include": "#var-function"
          }
        ]
      },
      "calc-function": {
        "begin": "\\b(calc)(?=\\()",
        "beginCaptures": {
          "1": {
            "name": "support.function.calc.less"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.group.end.less"
          }
        },
        "name": "meta.function-call.less",
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.group.begin.less"
              }
            },
            "end": "(?=\\))",
            "patterns": [
              {
                "include": "#less-strings"
              },
              {
                "include": "#var-function"
              },
              {
                "include": "#calc-function"
              },
              {
                "include": "#attr-function"
              },
              {
                "include": "#less-math"
              },
              {
                "include": "#relative-color"
              }
            ]
          }
        ]
      },
      "color-adjuster-operators": {
        "match": "[\\-\\+*](?=\\s+)",
        "name": "keyword.operator.less"
      },
      "color-functions": {
        "patterns": [
          {
            "begin": "\\b(rgba?)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.color.less"
              }
            },
            "comment": "rgb(), rgba()",
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#less-strings"
                  },
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#var-function"
                  },
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "include": "#value-separator"
                  },
                  {
                    "include": "#percentage-type"
                  },
                  {
                    "include": "#number-type"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(hsla|hsl|hwb|oklab|oklch|lab|lch)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.color.less"
              }
            },
            "comment": "hsla, hsl, hwb, oklab, oklch, lab, lch",
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#color-values"
                  },
                  {
                    "include": "#less-strings"
                  },
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#var-function"
                  },
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "include": "#angle-type"
                  },
                  {
                    "include": "#percentage-type"
                  },
                  {
                    "include": "#number-type"
                  },
                  {
                    "include": "#calc-function"
                  },
                  {
                    "include": "#value-separator"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(light-dark)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.color.less"
              }
            },
            "comment": "light-dark()",
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#color-values"
                  },
                  {
                    "include": "#comma-delimiter"
                  }
                ]
              }
            ]
          },
          {
            "include": "#less-color-functions"
          }
        ]
      },
      "color-values": {
        "patterns": [
          {
            "include": "#color-functions"
          },
          {
            "include": "#less-functions"
          },
          {
            "include": "#less-variables"
          },
          {
            "include": "#var-function"
          },
          {
            "match": "\\b(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)\\b",
            "name": "support.constant.color.w3c-standard-color-name.less"
          },
          {
            "match": "\\b(aliceblue|antiquewhite|aquamarine|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|gold|goldenrod|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|magenta|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rebeccapurple|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|violet|wheat|whitesmoke|yellowgreen)\\b",
            "name": "support.constant.color.w3c-extended-color-keywords.less"
          },
          {
            "match": "\\b((?i)currentColor|transparent)\\b",
            "name": "support.constant.color.w3c-special-color-keyword.less"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.constant.less"
              }
            },
            "match": "(#)(\\h{3}|\\h{4}|\\h{6}|\\h{8})\\b",
            "name": "constant.other.color.rgb-value.less"
          },
          {
            "include": "#relative-color"
          }
        ]
      },
      "comma-delimiter": {
        "captures": {
          "1": {
            "name": "punctuation.separator.less"
          }
        },
        "match": "\\s*(,)\\s*"
      },
      "comment-block": {
        "patterns": [
          {
            "begin": "/\\*",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.comment.less"
              }
            },
            "end": "\\*/",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.comment.less"
              }
            },
            "name": "comment.block.less"
          },
          {
            "include": "#comment-line"
          }
        ]
      },
      "comment-line": {
        "captures": {
          "1": {
            "name": "punctuation.definition.comment.less"
          }
        },
        "match": "(//).*$\\n?",
        "name": "comment.line.double-slash.less"
      },
      "counter-functions": {
        "patterns": [
          {
            "begin": "\\b(counter)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.filter.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#less-strings"
                  },
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#var-function"
                  },
                  {
                    "match": "(?:--(?:[[-\\w][^\\x{00}-\\x{7F}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))+|-?(?:[[_a-zA-Z][^\\x{00}-\\x{7F}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))(?:[[-\\w][^\\x{00}-\\x{7F}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))*)",
                    "name": "entity.other.counter-name.less"
                  },
                  {
                    "begin": "(?=,)",
                    "end": "(?=\\))",
                    "patterns": [
                      {
                        "include": "#comma-delimiter"
                      },
                      {
                        "match": "\\b((?xi:arabic-indic|armenian|bengali|cambodian|circle|cjk-decimal|cjk-earthly-branch|cjk-heavenly-stem|decimal-leading-zero|decimal|devanagari|disclosure-closed|disclosure-open|disc|ethiopic-numeric|georgian|gujarati|gurmukhi|hebrew|hiragana-iroha|hiragana|japanese-formal|japanese-informal|kannada|katakana-iroha|katakana|khmer|korean-hangul-formal|korean-hanja-formal|korean-hanja-informal|lao|lower-alpha|lower-armenian|lower-greek|lower-latin|lower-roman|malayalam|mongolian|myanmar|oriya|persian|simp-chinese-formal|simp-chinese-informal|square|tamil|telugu|thai|tibetan|trad-chinese-formal|trad-chinese-informal|upper-alpha|upper-armenian|upper-latin|upper-roman)|none)\\b",
                        "name": "support.constant.property-value.counter-style.less"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(counters)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.filter.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "match": "(-?(?:[[_a-zA-Z][^\\x{00}-\\x{7F}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))(?:[[-\\w][^\\x{00}-\\x{7F}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))*)",
                    "name": "entity.other.counter-name.less string.unquoted.less"
                  },
                  {
                    "begin": "(?=,)",
                    "end": "(?=\\))",
                    "patterns": [
                      {
                        "include": "#less-strings"
                      },
                      {
                        "include": "#less-variables"
                      },
                      {
                        "include": "#var-function"
                      },
                      {
                        "include": "#literal-string"
                      },
                      {
                        "include": "#comma-delimiter"
                      },
                      {
                        "match": "\\b((?xi:arabic-indic|armenian|bengali|cambodian|circle|cjk-decimal|cjk-earthly-branch|cjk-heavenly-stem|decimal-leading-zero|decimal|devanagari|disclosure-closed|disclosure-open|disc|ethiopic-numeric|georgian|gujarati|gurmukhi|hebrew|hiragana-iroha|hiragana|japanese-formal|japanese-informal|kannada|katakana-iroha|katakana|khmer|korean-hangul-formal|korean-hanja-formal|korean-hanja-informal|lao|lower-alpha|lower-armenian|lower-greek|lower-latin|lower-roman|malayalam|mongolian|myanmar|oriya|persian|simp-chinese-formal|simp-chinese-informal|square|tamil|telugu|thai|tibetan|trad-chinese-formal|trad-chinese-informal|upper-alpha|upper-armenian|upper-latin|upper-roman)|none)\\b",
                        "name": "support.constant.property-value.counter-style.less"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "cross-fade-function": {
        "patterns": [
          {
            "begin": "\\b(cross-fade)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.image.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "include": "#percentage-type"
                  },
                  {
                    "include": "#color-values"
                  },
                  {
                    "include": "#image-type"
                  },
                  {
                    "include": "#literal-string"
                  },
                  {
                    "include": "#unquoted-string"
                  }
                ]
              }
            ]
          }
        ]
      },
      "cubic-bezier-function": {
        "begin": "\\b(cubic-bezier)(\\()",
        "beginCaptures": {
          "1": {
            "name": "support.function.timing.less"
          },
          "2": {
            "name": "punctuation.definition.group.begin.less"
          }
        },
        "contentName": "meta.group.less",
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.group.end.less"
          }
        },
        "name": "meta.function-call.less",
        "patterns": [
          {
            "include": "#less-functions"
          },
          {
            "include": "#calc-function"
          },
          {
            "include": "#less-variables"
          },
          {
            "include": "#var-function"
          },
          {
            "include": "#comma-delimiter"
          },
          {
            "include": "#number-type"
          }
        ]
      },
      "custom-property-name": {
        "captures": {
          "1": {
            "name": "punctuation.definition.custom-property.less"
          },
          "2": {
            "name": "support.type.custom-property.name.less"
          }
        },
        "match": "\\s*(--)((?:[[-\\w][^\\x{00}-\\x{7F}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))+)",
        "name": "support.type.custom-property.less"
      },
      "dimensions": {
        "patterns": [
          {
            "include": "#angle-type"
          },
          {
            "include": "#frequency-type"
          },
          {
            "include": "#time-type"
          },
          {
            "include": "#percentage-type"
          },
          {
            "include": "#length-type"
          }
        ]
      },
      "filter-function": {
        "begin": "\\b(filter)(?=\\()",
        "beginCaptures": {
          "1": {
            "name": "support.function.filter.less"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.group.end.less"
          }
        },
        "name": "meta.function-call.less",
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.group.begin.less"
              }
            },
            "end": "(?=\\))",
            "name": "meta.group.less",
            "patterns": [
              {
                "include": "#comma-delimiter"
              },
              {
                "include": "#image-type"
              },
              {
                "include": "#literal-string"
              },
              {
                "include": "#filter-functions"
              }
            ]
          }
        ]
      },
      "filter-functions": {
        "patterns": [
          {
            "include": "#less-functions"
          },
          {
            "begin": "\\b(blur)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.filter.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#length-type"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(brightness|contrast|grayscale|invert|opacity|saturate|sepia)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.filter.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#percentage-type"
                  },
                  {
                    "include": "#number-type"
                  },
                  {
                    "include": "#less-functions"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(drop-shadow)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.filter.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#length-type"
                  },
                  {
                    "include": "#color-values"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(hue-rotate)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.filter.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#angle-type"
                  }
                ]
              }
            ]
          }
        ]
      },
      "fit-content-function": {
        "begin": "\\b(fit-content)(?=\\()",
        "beginCaptures": {
          "1": {
            "name": "support.function.grid.less"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.group.end.less"
          }
        },
        "name": "meta.function-call.less",
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.group.begin.less"
              }
            },
            "end": "(?=\\))",
            "patterns": [
              {
                "include": "#less-variables"
              },
              {
                "include": "#var-function"
              },
              {
                "include": "#calc-function"
              },
              {
                "include": "#percentage-type"
              },
              {
                "include": "#length-type"
              }
            ]
          }
        ]
      },
      "format-function": {
        "patterns": [
          {
            "begin": "\\b(format)(?=\\()",
            "beginCaptures": {
              "0": {
                "name": "support.function.format.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#literal-string"
                  }
                ]
              }
            ]
          }
        ]
      },
      "frequency-type": {
        "captures": {
          "1": {
            "name": "keyword.other.unit.less"
          }
        },
        "match": "(?i:[-+]?(?:(?:\\d*\\.\\d+(?:[eE](?:[-+]?\\d+))*)|(?:[-+]?\\d+))(Hz|kHz))\\b",
        "name": "constant.numeric.less"
      },
      "global-property-values": {
        "match": "\\b(?:initial|inherit|unset|revert-layer|revert)\\b",
        "name": "support.constant.property-value.less"
      },
      "gradient-functions": {
        "patterns": [
          {
            "begin": "\\b((?:repeating-)?linear-gradient)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.gradient.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#var-function"
                  },
                  {
                    "include": "#angle-type"
                  },
                  {
                    "include": "#color-values"
                  },
                  {
                    "include": "#percentage-type"
                  },
                  {
                    "include": "#length-type"
                  },
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "match": "\\bto\\b",
                    "name": "keyword.other.less"
                  },
                  {
                    "match": "\\b(top|right|bottom|left)\\b",
                    "name": "support.constant.property-value.less"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b((?:repeating-)?radial-gradient)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.gradient.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#var-function"
                  },
                  {
                    "include": "#color-values"
                  },
                  {
                    "include": "#percentage-type"
                  },
                  {
                    "include": "#length-type"
                  },
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "match": "\\b(at|circle|ellipse)\\b",
                    "name": "keyword.other.less"
                  },
                  {
                    "match": "\\b(top|right|bottom|left|center|(farthest|closest)-(corner|side))\\b",
                    "name": "support.constant.property-value.less"
                  }
                ]
              }
            ]
          }
        ]
      },
      "grid-repeat-function": {
        "begin": "\\b(repeat)(?=\\()",
        "beginCaptures": {
          "1": {
            "name": "support.function.grid.less"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.group.end.less"
          }
        },
        "name": "meta.function-call.less",
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.group.begin.less"
              }
            },
            "end": "(?=\\))",
            "patterns": [
              {
                "include": "#comma-delimiter"
              },
              {
                "include": "#var-function"
              },
              {
                "include": "#length-type"
              },
              {
                "include": "#percentage-type"
              },
              {
                "include": "#minmax-function"
              },
              {
                "include": "#integer-type"
              },
              {
                "match": "\\b(auto-(fill|fit))\\b",
                "name": "support.keyword.repetitions.less"
              },
              {
                "match": "\\b(((max|min)-content)|auto)\\b",
                "name": "support.constant.property-value.less"
              }
            ]
          }
        ]
      },
      "image-function": {
        "begin": "\\b(image)(?=\\()",
        "beginCaptures": {
          "1": {
            "name": "support.function.image.less"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.group.end.less"
          }
        },
        "name": "meta.function-call.less",
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.group.begin.less"
              }
            },
            "end": "(?=\\))",
            "patterns": [
              {
                "include": "#image-type"
              },
              {
                "include": "#literal-string"
              },
              {
                "include": "#color-values"
              },
              {
                "include": "#comma-delimiter"
              },
              {
                "include": "#unquoted-string"
              }
            ]
          }
        ]
      },
      "image-type": {
        "patterns": [
          {
            "include": "#cross-fade-function"
          },
          {
            "include": "#gradient-functions"
          },
          {
            "include": "#image-function"
          },
          {
            "include": "#url-function"
          }
        ]
      },
      "important": {
        "captures": {
          "1": {
            "name": "punctuation.separator.less"
          }
        },
        "match": "(\\!)\\s*important",
        "name": "keyword.other.important.less"
      },
      "integer-type": {
        "match": "(?:[-+]?\\d+)",
        "name": "constant.numeric.less"
      },
      "keyframe-name": {
        "begin": "\\s*(-?(?:[_a-z]|[^\\x{00}-\\x{7F}]|(?:(:?\\\\[0-9a-f]{1,6}(\\r\\n|[\\s\\t\\r\\n\\f])?)|\\\\[^\\r\\n\\f0-9a-f]))(?:[_a-z0-9-]|[^\\x{00}-\\x{7F}]|(?:(:?\\\\[0-9a-f]{1,6}(\\r\\n|[\\t\\r\\n\\f])?)|\\\\[^\\r\\n\\f0-9a-f]))*)?",
        "beginCaptures": {
          "1": {
            "name": "variable.other.constant.animation-name.less"
          }
        },
        "end": "\\s*(?:(,)|(?=[{;]))",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.arbitrary-repetition.less"
          }
        }
      },
      "length-type": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "keyword.other.unit.less"
              }
            },
            "match": "(?:[-+]?)(?:\\d+\\.\\d+|\\.?\\d+)(?:[eE][-+]?\\d+)?(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|m|q|in|pt|pc|px|fr|dpi|dpcm|dppx|x)",
            "name": "constant.numeric.less"
          },
          {
            "match": "\\b(?:[-+]?)0\\b",
            "name": "constant.numeric.less"
          }
        ]
      },
      "less-boolean-function": {
        "begin": "\\b(boolean)(?=\\()",
        "beginCaptures": {
          "1": {
            "name": "support.function.boolean.less"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.group.end.less"
          }
        },
        "name": "meta.function-call.less",
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.group.begin.less"
              }
            },
            "end": "(?=\\))",
            "patterns": [
              {
                "include": "#less-logical-comparisons"
              }
            ]
          }
        ]
      },
      "less-color-blend-functions": {
        "patterns": [
          {
            "begin": "\\b(multiply|screen|overlay|(soft|hard)light|difference|exclusion|negation|average)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.color-blend.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#var-function"
                  },
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "include": "#color-values"
                  }
                ]
              }
            ]
          }
        ]
      },
      "less-color-channel-functions": {
        "patterns": [
          {
            "begin": "\\b(hue|saturation|lightness|hsv(hue|saturation|value)|red|green|blue|alpha|luma|luminance)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.color-definition.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#color-values"
                  }
                ]
              }
            ]
          }
        ]
      },
      "less-color-definition-functions": {
        "patterns": [
          {
            "begin": "\\b(argb)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.color-definition.less"
              }
            },
            "comment": "argb()",
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#var-function"
                  },
                  {
                    "include": "#color-values"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(hsva?)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.color.less"
              }
            },
            "comment": "hsva(), hsv()",
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#integer-type"
                  },
                  {
                    "include": "#percentage-type"
                  },
                  {
                    "include": "#number-type"
                  },
                  {
                    "include": "#less-strings"
                  },
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#var-function"
                  },
                  {
                    "include": "#calc-function"
                  },
                  {
                    "include": "#comma-delimiter"
                  }
                ]
              }
            ]
          }
        ]
      },
      "less-color-functions": {
        "patterns": [
          {
            "include": "#less-color-blend-functions"
          },
          {
            "include": "#less-color-channel-functions"
          },
          {
            "include": "#less-color-definition-functions"
          },
          {
            "include": "#less-color-operation-functions"
          }
        ]
      },
      "less-color-operation-functions": {
        "patterns": [
          {
            "begin": "\\b(fade|shade|tint)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.color-operation.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#color-values"
                  },
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "include": "#percentage-type"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(spin)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.color-operation.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#color-values"
                  },
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "include": "#number-type"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(((de)?saturate)|((light|dark)en)|(fade(in|out)))(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.color-operation.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#color-values"
                  },
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "include": "#percentage-type"
                  },
                  {
                    "match": "\\brelative\\b",
                    "name": "constant.language.relative.less"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(contrast)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.color-operation.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#color-values"
                  },
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "include": "#percentage-type"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(greyscale)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.color-operation.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#color-values"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(mix)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.color-operation.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#color-values"
                  },
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "include": "#less-math"
                  },
                  {
                    "include": "#percentage-type"
                  }
                ]
              }
            ]
          }
        ]
      },
      "less-extend": {
        "begin": "(:)(extend)(?=\\()",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.entity.less"
          },
          "2": {
            "name": "entity.other.attribute-name.pseudo-class.extend.less"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.group.end.less"
          }
        },
        "name": "meta.function-call.less",
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.group.begin.less"
              }
            },
            "end": "(?=\\))",
            "patterns": [
              {
                "match": "\\ball\\b",
                "name": "constant.language.all.less"
              },
              {
                "include": "#selectors"
              }
            ]
          }
        ]
      },
      "less-functions": {
        "patterns": [
          {
            "include": "#less-boolean-function"
          },
          {
            "include": "#less-color-functions"
          },
          {
            "include": "#less-if-function"
          },
          {
            "include": "#less-list-functions"
          },
          {
            "include": "#less-math-functions"
          },
          {
            "include": "#less-misc-functions"
          },
          {
            "include": "#less-string-functions"
          },
          {
            "include": "#less-type-functions"
          }
        ]
      },
      "less-if-function": {
        "begin": "\\b(if)(?=\\()",
        "beginCaptures": {
          "1": {
            "name": "support.function.if.less"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.group.end.less"
          }
        },
        "name": "meta.function-call.less",
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.group.begin.less"
              }
            },
            "end": "(?=\\))",
            "patterns": [
              {
                "include": "#less-mixin-guards"
              },
              {
                "include": "#comma-delimiter"
              },
              {
                "include": "#property-values"
              }
            ]
          }
        ]
      },
      "less-list-functions": {
        "patterns": [
          {
            "begin": "\\b(length)(?=\\()\\b",
            "beginCaptures": {
              "1": {
                "name": "support.function.length.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#property-values"
                  },
                  {
                    "include": "#comma-delimiter"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(extract)(?=\\()\\b",
            "beginCaptures": {
              "1": {
                "name": "support.function.extract.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#property-values"
                  },
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "include": "#integer-type"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(range)(?=\\()\\b",
            "beginCaptures": {
              "1": {
                "name": "support.function.range.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#property-values"
                  },
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "include": "#integer-type"
                  }
                ]
              }
            ]
          }
        ]
      },
      "less-logical-comparisons": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "keyword.operator.logical.less"
              }
            },
            "match": "\\s*(=|((<|>)=?))\\s*"
          },
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.group.begin.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.group.less",
            "patterns": [
              {
                "include": "#less-logical-comparisons"
              }
            ]
          },
          {
            "match": "\\btrue|false\\b",
            "name": "constant.language.less"
          },
          {
            "match": ",",
            "name": "punctuation.separator.less"
          },
          {
            "include": "#property-values"
          },
          {
            "include": "#selectors"
          },
          {
            "include": "#unquoted-string"
          }
        ]
      },
      "less-math": {
        "patterns": [
          {
            "match": "[-\\+\\*\\/]",
            "name": "keyword.operator.arithmetic.less"
          },
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.group.begin.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.group.less",
            "patterns": [
              {
                "include": "#less-math"
              }
            ]
          },
          {
            "include": "#numeric-values"
          },
          {
            "include": "#less-variables"
          }
        ]
      },
      "less-math-functions": {
        "patterns": [
          {
            "begin": "\\b(ceil|floor|percentage|round|sqrt|abs|a?(sin|cos|tan))(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.math.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#numeric-values"
                  }
                ]
              }
            ]
          },
          {
            "captures": {
              "2": {
                "name": "support.function.math.less"
              },
              "3": {
                "name": "punctuation.definition.group.begin.less"
              },
              "4": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "match": "((pi)(\\()(\\)))",
            "name": "meta.function-call.less"
          },
          {
            "begin": "\\b(pow|m(od|in|ax))(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.math.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#numeric-values"
                  },
                  {
                    "include": "#comma-delimiter"
                  }
                ]
              }
            ]
          }
        ]
      },
      "less-misc-functions": {
        "patterns": [
          {
            "begin": "\\b(color)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.color.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#literal-string"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(image-(size|width|height))(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.image.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#literal-string"
                  },
                  {
                    "include": "#unquoted-string"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(convert|unit)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.convert.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#numeric-values"
                  },
                  {
                    "include": "#literal-string"
                  },
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "match": "((c|m)?m|in|p(t|c|x)|m?s|g?rad|deg|turn|%|r?em|ex|ch)",
                    "name": "keyword.other.unit.less"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(data-uri)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.data-uri.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#literal-string"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "punctuation.separator.less"
                      }
                    },
                    "match": "\\s*(?:(,))"
                  }
                ]
              }
            ]
          },
          {
            "captures": {
              "2": {
                "name": "punctuation.definition.group.begin.less"
              },
              "3": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "match": "\\b(default(\\()(\\)))\\b",
            "name": "support.function.default.less"
          },
          {
            "begin": "\\b(get-unit)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.get-unit.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#dimensions"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(svg-gradient)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.svg-gradient.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#angle-type"
                  },
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "include": "#color-values"
                  },
                  {
                    "include": "#percentage-type"
                  },
                  {
                    "include": "#length-type"
                  },
                  {
                    "match": "\\bto\\b",
                    "name": "keyword.other.less"
                  },
                  {
                    "match": "\\b(top|right|bottom|left|center)\\b",
                    "name": "support.constant.property-value.less"
                  },
                  {
                    "match": "\\b(at|circle|ellipse)\\b",
                    "name": "keyword.other.less"
                  }
                ]
              }
            ]
          }
        ]
      },
      "less-mixin-guards": {
        "patterns": [
          {
            "begin": "\\s*(and|not|or)?\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.logical.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "name": "meta.group.less",
                "patterns": [
                  {
                    "include": "#less-variable-comparison"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "meta.group.less"
                      },
                      "2": {
                        "name": "punctuation.definition.group.begin.less"
                      },
                      "3": {
                        "name": "punctuation.definition.group.end.less"
                      }
                    },
                    "match": "default((\\()(\\)))",
                    "name": "support.function.default.less"
                  },
                  {
                    "include": "#property-values"
                  },
                  {
                    "include": "#less-logical-comparisons"
                  },
                  {
                    "include": "$self"
                  }
                ]
              }
            ]
          }
        ]
      },
      "less-namespace-accessors": {
        "patterns": [
          {
            "begin": "(?=\\s*when\\b)",
            "end": "\\s*(?:(,)|(?=[{;]))",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.block.end.less"
              }
            },
            "name": "meta.conditional.guarded-namespace.less",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.conditional.less"
                  },
                  "2": {
                    "name": "punctuation.definition.keyword.less"
                  }
                },
                "match": "\\s*(when)(?=.*?)"
              },
              {
                "include": "#less-mixin-guards"
              },
              {
                "include": "#comma-delimiter"
              },
              {
                "begin": "\\s*(\\{)",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.section.property-list.begin.less"
                  }
                },
                "end": "(?=\\})",
                "name": "meta.block.less",
                "patterns": [
                  {
                    "include": "#rule-list-body"
                  }
                ]
              },
              {
                "include": "#selectors"
              }
            ]
          },
          {
            "begin": "(\\()",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.group.begin.less"
              }
            },
            "end": "(\\))",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.group.end.less"
              },
              "2": {
                "name": "punctuation.terminator.rule.less"
              }
            },
            "name": "meta.group.less",
            "patterns": [
              {
                "include": "#less-variable-assignment"
              },
              {
                "include": "#comma-delimiter"
              },
              {
                "include": "#property-values"
              },
              {
                "include": "#rule-list-body"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.terminator.rule.less"
              }
            },
            "match": "(;)|(?=[})])"
          }
        ]
      },
      "less-string-functions": {
        "patterns": [
          {
            "begin": "\\b(e(scape)?)(?=\\()\\b",
            "beginCaptures": {
              "1": {
                "name": "support.function.escape.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "include": "#literal-string"
                  },
                  {
                    "include": "#unquoted-string"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\s*(%)(?=\\()\\s*",
            "beginCaptures": {
              "1": {
                "name": "support.function.format.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "include": "#literal-string"
                  },
                  {
                    "include": "#property-values"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(replace)(?=\\()\\b",
            "beginCaptures": {
              "1": {
                "name": "support.function.replace.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "include": "#literal-string"
                  },
                  {
                    "include": "#property-values"
                  }
                ]
              }
            ]
          }
        ]
      },
      "less-strings": {
        "patterns": [
          {
            "begin": "(~)('|\")",
            "beginCaptures": {
              "1": {
                "name": "constant.character.escape.less"
              },
              "2": {
                "name": "punctuation.definition.string.begin.less"
              }
            },
            "contentName": "markup.raw.inline.less",
            "end": "('|\")|(\\n)",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.string.end.less"
              },
              "2": {
                "name": "invalid.illegal.newline.less"
              }
            },
            "name": "string.quoted.other.less",
            "patterns": [
              {
                "include": "#string-content"
              }
            ]
          }
        ]
      },
      "less-type-functions": {
        "patterns": [
          {
            "begin": "\\b(is(number|string|color|keyword|url|pixel|em|percentage|ruleset))(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.type.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#property-values"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(isunit)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.type.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#property-values"
                  },
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "match": "\\b((?i:em|ex|ch|rem)|(?i:vw|vh|vmin|vmax)|(?i:cm|mm|q|in|pt|pc|px|fr)|(?i:deg|grad|rad|turn)|(?i:s|ms)|(?i:Hz|kHz)|(?i:dpi|dpcm|dppx))\\b",
                    "name": "keyword.other.unit.less"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(isdefined)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.type.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#less-variables"
                  }
                ]
              }
            ]
          }
        ]
      },
      "less-variable-assignment": {
        "patterns": [
          {
            "begin": "(@)(-?(?:[[-\\w][^\\x{00}-\\x{7F}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))(?:[[-\\w][^\\x{00}-\\x{7F}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))*)",
            "beginCaptures": {
              "0": {
                "name": "variable.other.readwrite.less"
              },
              "1": {
                "name": "punctuation.definition.variable.less"
              },
              "2": {
                "name": "support.other.variable.less"
              }
            },
            "end": "\\s*(;|(\\.{3})|(?=\\)))",
            "endCaptures": {
              "1": {
                "name": "punctuation.terminator.rule.less"
              },
              "2": {
                "name": "keyword.operator.spread.less"
              }
            },
            "name": "meta.property-value.less",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "punctuation.separator.key-value.less"
                  },
                  "4": {
                    "name": "meta.property-value.less"
                  }
                },
                "match": "(((\\+_?)?):)([\\s\\t]*)"
              },
              {
                "include": "#property-values"
              },
              {
                "include": "#comma-delimiter"
              },
              {
                "include": "#property-list"
              },
              {
                "include": "#unquoted-string"
              }
            ]
          }
        ]
      },
      "less-variable-comparison": {
        "patterns": [
          {
            "begin": "(@{1,2})([-]?([_a-z]|[^\\x{00}-\\x{7F}]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))(?:[[-\\w][^\\x{00}-\\x{7F}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))*)",
            "beginCaptures": {
              "0": {
                "name": "variable.other.readwrite.less"
              },
              "1": {
                "name": "punctuation.definition.variable.less"
              },
              "2": {
                "name": "support.other.variable.less"
              }
            },
            "end": "\\s*(?=\\))",
            "endCaptures": {
              "1": {
                "name": "punctuation.terminator.rule.less"
              }
            },
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "keyword.operator.logical.less"
                  }
                },
                "match": "\\s*(=|((<|>)=?))\\s*"
              },
              {
                "match": "\\btrue\\b",
                "name": "constant.language.less"
              },
              {
                "include": "#property-values"
              },
              {
                "include": "#selectors"
              },
              {
                "include": "#unquoted-string"
              },
              {
                "match": ",",
                "name": "punctuation.separator.less"
              }
            ]
          }
        ]
      },
      "less-variable-interpolation": {
        "captures": {
          "1": {
            "name": "punctuation.definition.variable.less"
          },
          "2": {
            "name": "punctuation.definition.expression.less"
          },
          "3": {
            "name": "support.other.variable.less"
          },
          "4": {
            "name": "punctuation.definition.expression.less"
          }
        },
        "match": "(@)(\\{)([-\\w]+)(\\})",
        "name": "variable.other.readwrite.less"
      },
      "less-variables": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.variable.less"
              },
              "2": {
                "name": "support.other.variable.less"
              }
            },
            "match": "\\s*(@@?)([-\\w]+)",
            "name": "variable.other.readwrite.less"
          },
          {
            "include": "#less-variable-interpolation"
          }
        ]
      },
      "literal-string": {
        "patterns": [
          {
            "begin": "'",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.less"
              }
            },
            "end": "(')|(\\n)",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.string.end.less"
              },
              "2": {
                "name": "invalid.illegal.newline.less"
              }
            },
            "name": "string.quoted.single.less",
            "patterns": [
              {
                "include": "#string-content"
              }
            ]
          },
          {
            "begin": "\"",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.less"
              }
            },
            "end": "(\")|(\\n)",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.string.end.less"
              },
              "2": {
                "name": "invalid.illegal.newline.less"
              }
            },
            "name": "string.quoted.double.less",
            "patterns": [
              {
                "include": "#string-content"
              }
            ]
          },
          {
            "include": "#less-strings"
          }
        ]
      },
      "local-function": {
        "begin": "\\b(local)(?=\\()",
        "beginCaptures": {
          "0": {
            "name": "support.function.font-face.less"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.group.end.less"
          }
        },
        "name": "meta.function-call.less",
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.group.begin.less"
              }
            },
            "end": "(?=\\))",
            "patterns": [
              {
                "include": "#unquoted-string"
              }
            ]
          }
        ]
      },
      "media-query": {
        "begin": "\\s*(only|not)?\\s*(all|aural|braille|embossed|handheld|print|projection|screen|tty|tv)?",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.logic.media.less"
          },
          "2": {
            "name": "support.constant.media.less"
          }
        },
        "end": "\\s*(?:(,)|(?=[{;]))",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.arbitrary-repetition.less"
          }
        },
        "patterns": [
          {
            "include": "#less-variables"
          },
          {
            "include": "#custom-property-name"
          },
          {
            "begin": "\\s*(and)?\\s*(\\()\\s*",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.logic.media.less"
              },
              "2": {
                "name": "punctuation.definition.group.begin.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.group.less",
            "patterns": [
              {
                "begin": "(--|(?:-?(?:(?:[a-zA-Z_]|[\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}\\x{200D}\\x{203F}\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}])|(?:\\\\(?:\\N|[[:^xdigit:]]|[[:xdigit:]]{1,6}[\\s\\R]))))(?:(?:[-\\da-zA-Z_]|[\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}\\x{200D}\\x{203F}\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}])|(?:\\\\(?:\\N|[[:^xdigit:]]|[[:xdigit:]]{1,6}[\\s\\R])))*)\\s*(?=[:)])",
                "beginCaptures": {
                  "0": {
                    "name": "support.type.property-name.media.less"
                  }
                },
                "end": "(((\\+_?)?):)|(?=\\))",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.separator.key-value.less"
                  }
                }
              },
              {
                "match": "\\b(portrait|landscape|progressive|interlace)",
                "name": "support.constant.property-value.less"
              },
              {
                "captures": {
                  "1": {
                    "name": "constant.numeric.less"
                  },
                  "2": {
                    "name": "keyword.operator.arithmetic.less"
                  },
                  "3": {
                    "name": "constant.numeric.less"
                  }
                },
                "match": "\\s*(\\d+)(/)(\\d+)"
              },
              {
                "include": "#less-math"
              }
            ]
          }
        ]
      },
      "media-query-list": {
        "begin": "\\s*(?=[^{;])",
        "end": "\\s*(?=[{;])",
        "patterns": [
          {
            "include": "#media-query"
          }
        ]
      },
      "minmax-function": {
        "begin": "\\b(minmax)(?=\\()",
        "beginCaptures": {
          "1": {
            "name": "support.function.grid.less"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.group.end.less"
          }
        },
        "name": "meta.function-call.less",
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.group.begin.less"
              }
            },
            "end": "(?=\\))",
            "patterns": [
              {
                "include": "#less-variables"
              },
              {
                "include": "#var-function"
              },
              {
                "include": "#length-type"
              },
              {
                "include": "#comma-delimiter"
              },
              {
                "match": "\\b(max-content|min-content)\\b",
                "name": "support.constant.property-value.less"
              }
            ]
          }
        ]
      },
      "number-type": {
        "match": "(?:[-+]?)(?:\\d+\\.\\d+|\\.?\\d+)(?:[eE][-+]?\\d+)?",
        "name": "constant.numeric.less"
      },
      "numeric-values": {
        "patterns": [
          {
            "include": "#dimensions"
          },
          {
            "include": "#percentage-type"
          },
          {
            "include": "#number-type"
          }
        ]
      },
      "percentage-type": {
        "captures": {
          "1": {
            "name": "keyword.other.unit.less"
          }
        },
        "match": "(?:[-+]?)(?:\\d+\\.\\d+|\\.?\\d+)(?:[eE][-+]?\\d+)?(%)",
        "name": "constant.numeric.less"
      },
      "property-list": {
        "patterns": [
          {
            "begin": "(?=(?=[^;]*)\\{)",
            "end": "\\}",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.block.end.less"
              }
            },
            "patterns": [
              {
                "include": "#rule-list"
              }
            ]
          }
        ]
      },
      "property-value-constants": {
        "patterns": [
          {
            "comment": "align-content, align-items, align-self, justify-content, justify-items, justify-self",
            "match": "\\b(flex-start|flex-end|start|end|space-between|space-around|space-evenly|stretch|baseline|safe|unsafe|legacy|anchor-center|first|last|self-start|self-end)\\b",
            "name": "support.constant.property-value.less"
          },
          {
            "comment": "alignment-baseline",
            "match": "\\b(text-before-edge|before-edge|middle|central|text-after-edge|after-edge|ideographic|alphabetic|hanging|mathematical|top|center|bottom)\\b",
            "name": "support.constant.property-value.less"
          },
          {
            "include": "#global-property-values"
          },
          {
            "include": "#cubic-bezier-function"
          },
          {
            "include": "#steps-function"
          },
          {
            "comment": "animation-composition",
            "match": "\\b(?:replace|add|accumulate)\\b",
            "name": "support.constant.property-value.less"
          },
          {
            "comment": "animation-direction",
            "match": "\\b(?:normal|alternate-reverse|alternate|reverse)\\b",
            "name": "support.constant.property-value.less"
          },
          {
            "comment": "animation-fill-mode",
            "match": "\\b(?:forwards|backwards|both)\\b",
            "name": "support.constant.property-value.less"
          },
          {
            "comment": "animation-iteration-count",
            "match": "\\b(?:infinite)\\b",
            "name": "support.constant.property-value.less"
          },
          {
            "comment": "animation-play-state",
            "match": "\\b(?:running|paused)\\b",
            "name": "support.constant.property-value.less"
          },
          {
            "comment": "animation-range, animation-range-start, animation-range-end",
            "match": "\\b(?:entry-crossing|exit-crossing|entry|exit)\\b",
            "name": "support.constant.property-value.less"
          },
          {
            "comment": "animation-timing-function",
            "match": "\\b(linear|ease-in-out|ease-in|ease-out|ease|step-start|step-end)\\b",
            "name": "support.constant.property-value.less"
          },
          {
            "match": "\\b(absolute|active|add|all-petite-caps|all-small-caps|all-scroll|all|alphabetic|alpha|alternate-reverse|alternate|always|annotation|antialiased|at|autohiding-scrollbar|auto|avoid-column|avoid-page|avoid-region|avoid|background-color|background-image|background-position|background-size|background-repeat|background|backwards|balance|baseline|below|bevel|bicubic|bidi-override|blink|block-line-height|block-start|block-end|block|blur|bolder|bold|border-top-left-radius|border-top-right-radius|border-bottom-left-radius|border-bottom-right-radius|border-end-end-radius|border-end-start-radius|border-start-end-radius|border-start-start-radius|border-block-start-color|border-block-start-style|border-block-start-width|border-block-start|border-block-end-color|border-block-end-style|border-block-end-width|border-block-end|border-block-color|border-block-style|border-block-width|border-block|border-inline-start-color|border-inline-start-style|border-inline-start-width|border-inline-start|border-inline-end-color|border-inline-end-style|border-inline-end-width|border-inline-end|border-inline-color|border-inline-style|border-inline-width|border-inline|border-top-color|border-top-style|border-top-width|border-top|border-right-color|border-right-style|border-right-width|border-right|border-bottom-color|border-bottom-style|border-bottom-width|border-bottom|border-left-color|border-left-style|border-left-width|border-left|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-image|border-color|border-style|border-width|border-radius|border-collapse|border-spacing|border|both|bottom|box-shadow|box|break-all|break-word|break-spaces|brightness|butt(on)?|capitalize|central|center|char(acter-variant)?|cjk-ideographic|clip|clone|close-quote|closest-corner|closest-side|col-resize|collapse|color-stop|color-burn|color-dodge|color|column-count|column-gap|column-reverse|column-rule-color|column-rule-width|column-rule|column-width|columns|column|common-ligatures|condensed|consider-shifts|contain|content-box|contents?|contextual|contrast|cover|crisp-edges|crispEdges|crop|crosshair|cross|darken|dashed|default|dense|device-width|diagonal-fractions|difference|disabled|discard|discretionary-ligatures|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|drop-shadow|[nsew]{1,4}-resize|ease-in-out|ease-in|ease-out|ease|element|ellipsis|embed|end|EndColorStr|evenodd|exclude-ruby|exclusion|expanded|extra-condensed|extra-expanded|farthest-corner|farthest-side|farthest|fill-box|fill-opacity|fill|filter|fit-content|fixed|flat|flex-basis|flex-end|flex-grow|flex-shrink|flex-start|flexbox|flex|flip|flood-color|font-size-adjust|font-size|font-stretch|font-weight|font|forwards|from-image|from|full-width|gap|geometricPrecision|glyphs|gradient|grayscale|grid-column-gap|grid-column|grid-row-gap|grid-row|grid-gap|grid-height|grid|groove|hand|hanging|hard-light|height|help|hidden|hide|historical-forms|historical-ligatures|horizontal-tb|horizontal|hue|ideographic|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|inactive|include-ruby|infinite|inherit|initial|inline-end|inline-size|inline-start|inline-table|inline-line-height|inline-flexbox|inline-flex|inline-box|inline-block|inline|inset|inside|inter-ideograph|inter-word|intersect|invert|isolate|isolation|italic|jis(04|78|83|90)|justify-all|justify|keep-all|larger|large|last|layout|left|letter-spacing|lighten|lighter|lighting-color|linear-gradient|linearRGB|linear|line-edge|line-height|line-through|line|lining-nums|list-item|local|loose|lowercase|lr-tb|ltr|luminosity|luminance|manual|manipulation|margin-bottom|margin-box|margin-left|margin-right|margin-top|margin|marker(-offset|s)?|match-parent|mathematical|max-(content|height|lines|size|width)|medium|middle|min-(content|height|width)|miter|mixed|move|multiply|newspaper|no-change|no-clip|no-close-quote|no-open-quote|no-common-ligatures|no-discretionary-ligatures|no-historical-ligatures|no-contextual|no-drop|no-repeat|none|nonzero|normal|not-allowed|nowrap|oblique|offset-after|offset-before|offset-end|offset-start|offset|oldstyle-nums|opacity|open-quote|optimize(Legibility|Precision|Quality|Speed)|order|ordinal|ornaments|outline-color|outline-offset|outline-width|outline|outset|outside|overline|over-edge|overlay|padding(-bottom|-box|-left|-right|-top|-box)?|page|paint(ed)?|paused|pan-(x|left|right|y|up|down)|perspective-origin|petite-caps|pixelated|pointer|pinch-zoom|pretty|pre(-line|-wrap)?|preserve-3d|preserve-breaks|preserve-spaces|preserve|progid:DXImageTransform\\.Microsoft\\.(Alpha|Blur|dropshadow|gradient|Shadow)|progress|proportional-nums|proportional-width|radial-gradient|recto|region|relative|repeating-linear-gradient|repeating-radial-gradient|repeat-x|repeat-y|repeat|replaced|reset-size|reverse|revert-layer|revert|ridge|right|round|row-gap|row-resize|row-reverse|row|rtl|ruby|running|saturate|saturation|screen|scrollbar|scroll-position|scroll|separate|sepia|scale-down|semi-condensed|semi-expanded|shape-image-threshold|shape-margin|shape-outside|show|sideways-lr|sideways-rl|sideways|simplified|size|slashed-zero|slice|small-caps|smaller|small|smooth|snap|solid|soft-light|space-around|space-between|space|span|sRGB|stable|stacked-fractions|stack|startColorStr|start|static|step-end|step-start|sticky|stop-color|stop-opacity|stretch|strict|stroke-box|stroke-dasharray|stroke-dashoffset|stroke-miterlimit|stroke-opacity|stroke-width|stroke|styleset|style|stylistic|subgrid|subpixel-antialiased|subtract|super|swash|table-caption|table-cell|table-column-group|table-footer-group|table-header-group|table-row-group|table-column|table-row|table|tabular-nums|tb-rl|text((-bottom|-(decoration|emphasis)-color|-indent|-(over|under)-edge|-shadow|-size(-adjust)?|-top)|field)?|thick|thin|titling-caps|titling-case|top|touch|to|traditional|transform-origin|transform-style|transform|ultra-condensed|ultra-expanded|under-edge|underline|unicase|unset|uppercase|upright|use-glyph-orientation|use-script|verso|vertical(-align|-ideographic|-lr|-rl|-text)?|view-box|viewport-fill-opacity|viewport-fill|visibility|visibleFill|visiblePainted|visibleStroke|visible|wait|wavy|weight|whitespace|width|word-spacing|wrap-reverse|wrap-reverse|wrap|xx?-(large|small)|z-index|zero|zoom-in|zoom-out|zoom|arabic-indic|armenian|bengali|cambodian|circle|cjk-decimal|cjk-earthly-branch|cjk-heavenly-stem|decimal-leading-zero|decimal|devanagari|disclosure-closed|disclosure-open|disc|ethiopic-numeric|georgian|gujarati|gurmukhi|hebrew|hiragana-iroha|hiragana|japanese-formal|japanese-informal|kannada|katakana-iroha|katakana|khmer|korean-hangul-formal|korean-hanja-formal|korean-hanja-informal|lao|lower-alpha|lower-armenian|lower-greek|lower-latin|lower-roman|malayalam|mongolian|myanmar|oriya|persian|simp-chinese-formal|simp-chinese-informal|square|tamil|telugu|thai|tibetan|trad-chinese-formal|trad-chinese-informal|upper-alpha|upper-armenian|upper-latin|upper-roman)\\b",
            "name": "support.constant.property-value.less"
          },
          {
            "match": "\\b(sans-serif|serif|monospace|fantasy|cursive)\\b(?=\\s*[;,\\n}])",
            "name": "support.constant.font-name.less"
          }
        ]
      },
      "property-values": {
        "patterns": [
          {
            "include": "#comment-block"
          },
          {
            "include": "#builtin-functions"
          },
          {
            "include": "#color-functions"
          },
          {
            "include": "#less-functions"
          },
          {
            "include": "#less-variables"
          },
          {
            "include": "#unicode-range"
          },
          {
            "include": "#numeric-values"
          },
          {
            "include": "#color-values"
          },
          {
            "include": "#property-value-constants"
          },
          {
            "include": "#less-math"
          },
          {
            "include": "#literal-string"
          },
          {
            "include": "#comma-delimiter"
          },
          {
            "include": "#important"
          }
        ]
      },
      "pseudo-selectors": {
        "patterns": [
          {
            "begin": "(:)(dir)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.entity.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "entity.other.attribute-name.pseudo-class.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "match": "ltr|rtl",
                    "name": "variable.parameter.dir.less"
                  },
                  {
                    "include": "#less-variables"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(:)(lang)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.entity.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "entity.other.attribute-name.pseudo-class.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#literal-string"
                  },
                  {
                    "include": "#unquoted-string"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(:)(not)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.entity.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "entity.other.attribute-name.pseudo-class.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#selectors"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(:)(nth(-last)?-(child|of-type))(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.entity.less"
              },
              "2": {
                "name": "entity.other.attribute-name.pseudo-class.less"
              }
            },
            "contentName": "meta.function-call.less",
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "entity.other.attribute-name.pseudo-class.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "name": "meta.group.less",
                "patterns": [
                  {
                    "match": "\\b(even|odd)\\b",
                    "name": "keyword.other.pseudo-class.less"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.operator.arithmetic.less"
                      },
                      "2": {
                        "name": "keyword.other.unit.less"
                      },
                      "4": {
                        "name": "keyword.operator.arithmetic.less"
                      }
                    },
                    "match": "(?:([-+])?(?:\\d+)?(n)(\\s*([-+])\\s*\\d+)?|[-+]?\\s*\\d+)",
                    "name": "constant.numeric.less"
                  },
                  {
                    "include": "#less-math"
                  },
                  {
                    "include": "#less-strings"
                  },
                  {
                    "include": "#less-variable-interpolation"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(:)(host-context|host|has|is|not|where)(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.entity.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "entity.other.attribute-name.pseudo-class.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#selectors"
                  }
                ]
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.entity.less"
              },
              "2": {
                "name": "entity.other.attribute-name.pseudo-class.less"
              }
            },
            "match": "(:)(active|any-link|autofill|blank|buffering|checked|current|default|defined|disabled|empty|enabled|first-child|first-of-type|first|focus-visible|focus-within|focus|fullscreen|future|host|hover|in-range|indeterminate|invalid|last-child|last-of-type|left|local-link|link|modal|muted|only-child|only-of-type|optional|out-of-range|past|paused|picture-in-picture|placeholder-shown|playing|popover-open|read-only|read-write|required|right|root|scope|seeking|stalled|target-within|target|user-invalid|user-valid|valid|visited|volume-locked)\\b",
            "name": "meta.function-call.less"
          },
          {
            "begin": "(::?)(highlight|part|state)(?=\\s*(\\())",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.entity.less"
              }
            },
            "comment": "::highlight()",
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "entity.other.attribute-name.pseudo-element.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "match": "--|(?:-?(?:(?:[a-zA-Z_]|[\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}\\x{200D}\\x{203F}\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}])|(?:\\\\(?:\\N|[[:^xdigit:]]|[[:xdigit:]]{1,6}[\\s\\R]))))(?:(?:[-\\da-zA-Z_]|[\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}\\x{200D}\\x{203F}\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}])|(?:\\\\(?:\\N|[[:^xdigit:]]|[[:xdigit:]]{1,6}[\\s\\R])))*",
                    "name": "variable.parameter.less"
                  },
                  {
                    "include": "#less-variables"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(::?)slotted(?=\\s*(\\())",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.entity.less"
              }
            },
            "comment": "::slotted()",
            "contentName": "meta.function-call.less",
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "entity.other.attribute-name.pseudo-element.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "name": "meta.group.less",
                "patterns": [
                  {
                    "include": "#selectors"
                  }
                ]
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.entity.less"
              }
            },
            "comment": "defined pseudo-elements",
            "match": "(::?)(after|backdrop|before|cue|file-selector-button|first-letter|first-line|grammar-error|marker|placeholder|selection|spelling-error|target-text|view-transition-group|view-transition-image-pair|view-transition-new|view-transition-old|view-transition)\\b",
            "name": "entity.other.attribute-name.pseudo-element.less"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.entity.less"
              },
              "2": {
                "name": "meta.namespace.vendor-prefix.less"
              }
            },
            "comment": "other possible pseudo-elements",
            "match": "(::?)(-\\w+-)(--|(?:-?(?:(?:[a-zA-Z_]|[\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}\\x{200D}\\x{203F}\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}])|(?:\\\\(?:\\N|[[:^xdigit:]]|[[:xdigit:]]{1,6}[\\s\\R]))))(?:(?:[-\\da-zA-Z_]|[\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}\\x{200D}\\x{203F}\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}])|(?:\\\\(?:\\N|[[:^xdigit:]]|[[:xdigit:]]{1,6}[\\s\\R])))*)\\b",
            "name": "entity.other.attribute-name.pseudo-element.less"
          }
        ]
      },
      "qualified-name": {
        "captures": {
          "1": {
            "name": "entity.name.constant.less"
          },
          "2": {
            "name": "entity.name.namespace.wildcard.less"
          },
          "3": {
            "name": "punctuation.separator.namespace.less"
          }
        },
        "match": "(?:(-?(?:[[-\\w][^\\x{00}-\\x{7F}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))(?:[[_a-zA-Z][^\\x{00}-\\x{7F}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))*)|(\\*))?([|])(?!=)"
      },
      "regexp-function": {
        "begin": "\\b(regexp)(?=\\()",
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.group.end.less"
          }
        },
        "name": "support.function.regexp.less",
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.group.begin.less"
              }
            },
            "end": "(?=\\))",
            "name": "meta.function-call.less",
            "patterns": [
              {
                "include": "#literal-string"
              }
            ]
          }
        ]
      },
      "relative-color": {
        "patterns": [
          {
            "match": "from",
            "name": "keyword.other.less"
          },
          {
            "match": "\\b[hslawbch]\\b",
            "name": "keyword.other.less"
          }
        ]
      },
      "rule-list": {
        "patterns": [
          {
            "begin": "\\{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.block.begin.less"
              }
            },
            "end": "(?=\\s*\\})",
            "name": "meta.property-list.less",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "punctuation.terminator.rule.less"
                  }
                },
                "match": "\\s*(;)|(?=[})])"
              },
              {
                "include": "#rule-list-body"
              },
              {
                "include": "#less-extend"
              }
            ]
          }
        ]
      },
      "rule-list-body": {
        "patterns": [
          {
            "include": "#comment-block"
          },
          {
            "include": "#comment-line"
          },
          {
            "include": "#at-rules"
          },
          {
            "include": "#less-variable-assignment"
          },
          {
            "begin": "(?=[-\\w]*?@\\{.*\\}[-\\w]*?\\s*:[^;{(]*(?=[;})]))",
            "end": "(?=\\s*(;)|(?=[})]))",
            "patterns": [
              {
                "begin": "(?=[^\\s:])",
                "end": "(?=(((\\+_?)?):)[\\s\\t]*)",
                "name": "support.type.property-name.less",
                "patterns": [
                  {
                    "include": "#less-variable-interpolation"
                  }
                ]
              },
              {
                "begin": "(((\\+_?)?):)(?=[\\s\\t]*)",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.separator.key-value.less"
                  }
                },
                "contentName": "support.type.property-name.less",
                "end": "(?=\\s*(;)|(?=[})]))",
                "patterns": [
                  {
                    "include": "#property-values"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?=[-a-z])",
            "end": "$|(?![-a-z])",
            "patterns": [
              {
                "include": "#custom-property-name"
              },
              {
                "begin": "(-[\\w-]+?-)((?:(?:[a-zA-Z_]|[\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}\\x{200D}\\x{203F}\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}])|(?:\\\\(?:\\N|[[:^xdigit:]]|[[:xdigit:]]{1,6}[\\s\\R])))(?:(?:[-\\da-zA-Z_]|[\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}\\x{200D}\\x{203F}\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}])|(?:\\\\(?:\\N|[[:^xdigit:]]|[[:xdigit:]]{1,6}[\\s\\R])))*)\\b",
                "beginCaptures": {
                  "0": {
                    "name": "support.type.property-name.less"
                  },
                  "1": {
                    "name": "meta.namespace.vendor-prefix.less"
                  }
                },
                "comment": "vendor-prefixed properties",
                "end": "\\s*(;)|(?=[})])",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.terminator.rule.less"
                  }
                },
                "patterns": [
                  {
                    "begin": "(((\\+_?)?):)(?=[\\s\\t]*)",
                    "beginCaptures": {
                      "1": {
                        "name": "punctuation.separator.key-value.less"
                      }
                    },
                    "contentName": "meta.property-value.less",
                    "end": "(?=\\s*(;)|(?=[})]))",
                    "patterns": [
                      {
                        "include": "#property-values"
                      },
                      {
                        "match": "[\\w-]+",
                        "name": "support.constant.property-value.less"
                      }
                    ]
                  }
                ]
              },
              {
                "include": "#filter-function"
              },
              {
                "begin": "\\b(border((-(bottom|top)-(left|right))|((-(start|end)){2}))?-radius|(border-image(?!-)))\\b",
                "beginCaptures": {
                  "0": {
                    "name": "support.type.property-name.less"
                  }
                },
                "comment": "border-radius and border-image properties utilize a slash as a separator",
                "end": "\\s*(;)|(?=[})])",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.terminator.rule.less"
                  }
                },
                "patterns": [
                  {
                    "begin": "(((\\+_?)?):)(?=[\\s\\t]*)",
                    "beginCaptures": {
                      "1": {
                        "name": "punctuation.separator.key-value.less"
                      }
                    },
                    "contentName": "meta.property-value.less",
                    "end": "(?=\\s*(;)|(?=[})]))",
                    "patterns": [
                      {
                        "include": "#value-separator"
                      },
                      {
                        "include": "#property-values"
                      }
                    ]
                  }
                ]
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.other.custom-property.prefix.less"
                  },
                  "2": {
                    "name": "support.type.custom-property.name.less"
                  }
                },
                "match": "\\b(var-)(-?(?:[[-\\w][^\\x{00}-\\x{9f}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))(?:[[_a-zA-Z][^\\x{00}-\\x{9f}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))*)(?=\\s)",
                "name": "invalid.deprecated.custom-property.less"
              },
              {
                "begin": "\\bfont(-family)?(?!-)\\b",
                "beginCaptures": {
                  "0": {
                    "name": "support.type.property-name.less"
                  }
                },
                "end": "\\s*(;)|(?=[})])",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.terminator.rule.less"
                  }
                },
                "name": "meta.property-name.less",
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "punctuation.separator.key-value.less"
                      },
                      "4": {
                        "name": "meta.property-value.less"
                      }
                    },
                    "match": "(((\\+_?)?):)([\\s\\t]*)"
                  },
                  {
                    "include": "#property-values"
                  },
                  {
                    "match": "-?(?:[[_a-zA-Z][^\\x{00}-\\x{9f}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))(?:[[-\\w][^\\x{00}-\\x{9f}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))*(\\s+-?(?:[[_a-zA-Z][^\\x{00}-\\x{9f}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))(?:[[-\\w][^\\x{00}-\\x{9f}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))*)*",
                    "name": "string.unquoted.less"
                  },
                  {
                    "match": ",",
                    "name": "punctuation.separator.less"
                  }
                ]
              },
              {
                "begin": "\\banimation-timeline\\b",
                "beginCaptures": {
                  "0": {
                    "name": "support.type.property-name.less"
                  }
                },
                "end": "\\s*(;)|(?=[})])",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.terminator.rule.less"
                  }
                },
                "patterns": [
                  {
                    "begin": "(((\\+_?)?):)(?=[\\s\\t]*)",
                    "beginCaptures": {
                      "1": {
                        "name": "punctuation.separator.key-value.less"
                      }
                    },
                    "contentName": "meta.property-value.less",
                    "end": "(?=\\s*(;)|(?=[})]))",
                    "patterns": [
                      {
                        "include": "#comment-block"
                      },
                      {
                        "include": "#custom-property-name"
                      },
                      {
                        "include": "#scroll-function"
                      },
                      {
                        "include": "#view-function"
                      },
                      {
                        "include": "#property-values"
                      },
                      {
                        "include": "#less-variables"
                      },
                      {
                        "include": "#arbitrary-repetition"
                      },
                      {
                        "include": "#important"
                      }
                    ]
                  }
                ]
              },
              {
                "begin": "\\banimation(?:-name)?(?=(?:\\+_?)?:)\\b",
                "beginCaptures": {
                  "0": {
                    "name": "support.type.property-name.less"
                  }
                },
                "end": "\\s*(;)|(?=[})])",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.terminator.rule.less"
                  }
                },
                "patterns": [
                  {
                    "begin": "(((\\+_?)?):)(?=[\\s\\t]*)",
                    "beginCaptures": {
                      "1": {
                        "name": "punctuation.separator.key-value.less"
                      }
                    },
                    "contentName": "meta.property-value.less",
                    "end": "(?=\\s*(;)|(?=[})]))",
                    "patterns": [
                      {
                        "include": "#comment-block"
                      },
                      {
                        "include": "#builtin-functions"
                      },
                      {
                        "include": "#less-functions"
                      },
                      {
                        "include": "#less-variables"
                      },
                      {
                        "include": "#numeric-values"
                      },
                      {
                        "include": "#property-value-constants"
                      },
                      {
                        "match": "-?(?:[_a-zA-Z]|[^\\x{00}-\\x{7F}]|(?:(:?\\\\[0-9a-f]{1,6}(\\r\\n|[\\s\\t\\r\\n\\f])?)|\\\\[^\\r\\n\\f0-9a-f]))(?:[-_a-zA-Z0-9]|[^\\x{00}-\\x{7F}]|(?:(:?\\\\[0-9a-f]{1,6}(\\r\\n|[\\t\\r\\n\\f])?)|\\\\[^\\r\\n\\f0-9a-f]))*",
                        "name": "variable.other.constant.animation-name.less string.unquoted.less"
                      },
                      {
                        "include": "#less-math"
                      },
                      {
                        "include": "#arbitrary-repetition"
                      },
                      {
                        "include": "#important"
                      }
                    ]
                  }
                ]
              },
              {
                "begin": "\\b(transition(-(property|duration|delay|timing-function))?)\\b",
                "beginCaptures": {
                  "1": {
                    "name": "support.type.property-name.less"
                  }
                },
                "end": "\\s*(;)|(?=[})])",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.terminator.rule.less"
                  }
                },
                "patterns": [
                  {
                    "begin": "(((\\+_?)?):)(?=[\\s\\t]*)",
                    "beginCaptures": {
                      "1": {
                        "name": "punctuation.separator.key-value.less"
                      }
                    },
                    "contentName": "meta.property-value.less",
                    "end": "(?=\\s*(;)|(?=[})]))",
                    "patterns": [
                      {
                        "include": "#time-type"
                      },
                      {
                        "include": "#property-values"
                      },
                      {
                        "include": "#cubic-bezier-function"
                      },
                      {
                        "include": "#steps-function"
                      },
                      {
                        "include": "#arbitrary-repetition"
                      }
                    ]
                  }
                ]
              },
              {
                "begin": "\\b(?:backdrop-)?filter\\b",
                "beginCaptures": {
                  "0": {
                    "name": "support.type.property-name.less"
                  }
                },
                "end": "\\s*(;)|(?=[})])",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.terminator.rule.less"
                  }
                },
                "name": "meta.property-name.less",
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "punctuation.separator.key-value.less"
                      },
                      "4": {
                        "name": "meta.property-value.less"
                      }
                    },
                    "match": "(((\\+_?)?):)([\\s\\t]*)"
                  },
                  {
                    "match": "\\b(inherit|initial|unset|none)\\b",
                    "name": "meta.property-value.less"
                  },
                  {
                    "include": "#filter-functions"
                  }
                ]
              },
              {
                "begin": "\\bwill-change\\b",
                "beginCaptures": {
                  "0": {
                    "name": "support.type.property-name.less"
                  }
                },
                "end": "\\s*(;)|(?=[})])",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.terminator.rule.less"
                  }
                },
                "name": "meta.property-name.less",
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "punctuation.separator.key-value.less"
                      },
                      "4": {
                        "name": "meta.property-value.less"
                      }
                    },
                    "match": "(((\\+_?)?):)([\\s\\t]*)"
                  },
                  {
                    "match": "unset|initial|inherit|will-change|auto|scroll-position|contents",
                    "name": "invalid.illegal.property-value.less"
                  },
                  {
                    "match": "-?(?:[[-\\w][^\\x{00}-\\x{9f}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))(?:[[_a-zA-Z][^\\x{00}-\\x{9f}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))*",
                    "name": "support.constant.property-value.less"
                  },
                  {
                    "include": "#arbitrary-repetition"
                  }
                ]
              },
              {
                "begin": "\\bcounter-(increment|(re)?set)\\b",
                "beginCaptures": {
                  "0": {
                    "name": "support.type.property-name.less"
                  }
                },
                "end": "\\s*(;)|(?=[})])",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.terminator.rule.less"
                  }
                },
                "name": "meta.property-name.less",
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "punctuation.separator.key-value.less"
                      },
                      "4": {
                        "name": "meta.property-value.less"
                      }
                    },
                    "match": "(((\\+_?)?):)([\\s\\t]*)"
                  },
                  {
                    "match": "-?(?:[[-\\w][^\\x{00}-\\x{9f}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))(?:[[_a-zA-Z][^\\x{00}-\\x{9f}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))*",
                    "name": "entity.name.constant.counter-name.less"
                  },
                  {
                    "include": "#integer-type"
                  },
                  {
                    "match": "unset|initial|inherit|auto",
                    "name": "invalid.illegal.property-value.less"
                  }
                ]
              },
              {
                "begin": "\\bcontainer(?:-name)?(?=\\s*?:)",
                "end": "\\s*(;)|(?=[})])",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.terminator.rule.less"
                  }
                },
                "name": "support.type.property-name.less",
                "patterns": [
                  {
                    "begin": "(((\\+_?)?):)(?=[\\s\\t]*)",
                    "beginCaptures": {
                      "1": {
                        "name": "punctuation.separator.key-value.less"
                      }
                    },
                    "contentName": "meta.property-value.less",
                    "end": "(?=\\s*(;)|(?=[})]))",
                    "patterns": [
                      {
                        "match": "\\bdefault\\b",
                        "name": "invalid.illegal.property-value.less"
                      },
                      {
                        "include": "#global-property-values"
                      },
                      {
                        "include": "#custom-property-name"
                      },
                      {
                        "contentName": "variable.other.constant.container-name.less",
                        "match": "--|(?:-?(?:(?:[a-zA-Z_]|[\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}\\x{200D}\\x{203F}\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}])|(?:\\\\(?:\\N|[[:^xdigit:]]|[[:xdigit:]]{1,6}[\\s\\R]))))(?:(?:[-\\da-zA-Z_]|[\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}\\x{200D}\\x{203F}\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}])|(?:\\\\(?:\\N|[[:^xdigit:]]|[[:xdigit:]]{1,6}[\\s\\R])))*",
                        "name": "support.constant.property-value.less"
                      },
                      {
                        "include": "#property-values"
                      }
                    ]
                  }
                ]
              },
              {
                "match": "\\b(accent-height|align-content|align-items|align-self|alignment-baseline|all|animation-timing-function|animation-range-start|animation-range-end|animation-range|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation-composition|animation|appearance|ascent|aspect-ratio|azimuth|backface-visibility|background-size|background-repeat-y|background-repeat-x|background-repeat|background-position-y|background-position-x|background-position|background-origin|background-image|background-color|background-clip|background-blend-mode|background-attachment|background|baseline-shift|begin|bias|blend-mode|border-top-left-radius|border-top-right-radius|border-bottom-left-radius|border-bottom-right-radius|border-end-end-radius|border-end-start-radius|border-start-end-radius|border-start-start-radius|border-block-start-color|border-block-start-style|border-block-start-width|border-block-start|border-block-end-color|border-block-end-style|border-block-end-width|border-block-end|border-block-color|border-block-style|border-block-width|border-block|border-inline-start-color|border-inline-start-style|border-inline-start-width|border-inline-start|border-inline-end-color|border-inline-end-style|border-inline-end-width|border-inline-end|border-inline-color|border-inline-style|border-inline-width|border-inline|border-top-color|border-top-style|border-top-width|border-top|border-right-color|border-right-style|border-right-width|border-right|border-bottom-color|border-bottom-style|border-bottom-width|border-bottom|border-left-color|border-left-style|border-left-width|border-left|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-image|border-color|border-style|border-width|border-radius|border-collapse|border-spacing|border|bottom|box-(align|decoration-break|direction|flex|ordinal-group|orient|pack|shadow|sizing)|break-(after|before|inside)|caption-side|clear|clip-path|clip-rule|clip|color(-(interpolation(-filters)?|profile|rendering))?|columns|column-(break-before|count|fill|gap|(rule(-(color|style|width))?)|span|width)|container-name|container-type|container|contain-intrinsic-block-size|contain-intrinsic-inline-size|contain-intrinsic-height|contain-intrinsic-size|contain-intrinsic-width|contain|content|counter-(increment|reset)|cursor|[cdf][xy]|direction|display|divisor|dominant-baseline|dur|elevation|empty-cells|enable-background|end|fallback|fill(-(opacity|rule))?|filter|flex(-(align|basis|direction|flow|grow|item-align|line-pack|negative|order|pack|positive|preferred-size|shrink|wrap))?|float|flood-(color|opacity)|font-display|font-family|font-feature-settings|font-kerning|font-language-override|font-size(-adjust)?|font-smoothing|font-stretch|font-style|font-synthesis|font-variant(-(alternates|caps|east-asian|ligatures|numeric|position))?|font-weight|font|fr|((column|row)-)?gap|glyph-orientation-(horizontal|vertical)|grid-(area|gap)|grid-auto-(columns|flow|rows)|grid-(column|row)(-(end|gap|start))?|grid-template(-(areas|columns|rows))?|grid|height|hyphens|image-(orientation|rendering|resolution)|inset(-(block|inline))?(-(start|end))?|isolation|justify-content|justify-items|justify-self|kerning|left|letter-spacing|lighting-color|line-(box-contain|break|clamp|height)|list-style(-(image|position|type))?|(margin|padding)(-(bottom|left|right|top)|(-(block|inline)?(-(end|start))?))?|marker(-(end|mid|start))?|mask(-(clip||composite|image|origin|position|repeat|size|type))?|(max|min)-(height|width)|mix-blend-mode|nbsp-mode|negative|object-(fit|position)|opacity|operator|order|orphans|outline(-(color|offset|style|width))?|overflow(-((inline|block)|scrolling|wrap|x|y))?|overscroll-behavior(-block|-(inline|x|y))?|pad(ding(-(bottom|left|right|top))?)?|page(-break-(after|before|inside))?|paint-order|pause(-(after|before))?|perspective(-origin(-(x|y))?)?|pitch(-range)?|place-content|place-self|pointer-events|position|prefix|quotes|range|resize|right|rotate|scale|scroll-behavior|shape-(image-threshold|margin|outside|rendering)|size|speak(-as)?|src|stop-(color|opacity)|stroke(-(dash(array|offset)|line(cap|join)|miterlimit|opacity|width))?|suffix|symbols|system|tab-size|table-layout|tap-highlight-color|text-align(-last)?|text-decoration(-(color|line|style))?|text-emphasis(-(color|position|style))?|text-(anchor|fill-color|height|indent|justify|orientation|overflow|rendering|size-adjust|shadow|transform|underline-position|wrap)|top|touch-action|transform(-origin(-(x|y))?)|transform(-style)?|transition(-(delay|duration|property|timing-function))?|translate|unicode-(bidi|range)|user-(drag|select)|vertical-align|visibility|white-space(-collapse)?|widows|width|will-change|word-(break|spacing|wrap)|writing-mode|z-index|zoom)\\b",
                "name": "support.type.property-name.less"
              },
              {
                "match": "\\b(((contain-intrinsic|max|min)-)?(block|inline)?-size)\\b",
                "name": "support.type.property-name.less"
              },
              {
                "include": "$self"
              }
            ]
          },
          {
            "begin": "\\b((?:(?:\\+_?)?):)([\\s\\t]*)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.separator.key-value.less"
              },
              "2": {
                "name": "meta.property-value.less"
              }
            },
            "captures": {
              "1": {
                "name": "punctuation.separator.key-value.less"
              },
              "4": {
                "name": "meta.property-value.less"
              }
            },
            "contentName": "meta.property-value.less",
            "end": "\\s*(;)|(?=[})])",
            "endCaptures": {
              "1": {
                "name": "punctuation.terminator.rule.less"
              }
            },
            "patterns": [
              {
                "include": "#property-values"
              }
            ]
          },
          {
            "include": "$self"
          }
        ]
      },
      "scroll-function": {
        "begin": "\\b(scroll)(\\()",
        "beginCaptures": {
          "1": {
            "name": "support.function.scroll.less"
          },
          "2": {
            "name": "punctuation.definition.group.begin.less"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.group.end.less"
          }
        },
        "name": "meta.function-call.less",
        "patterns": [
          {
            "match": "root|nearest|self",
            "name": "support.constant.scroller.less"
          },
          {
            "match": "block|inline|x|y",
            "name": "support.constant.axis.less"
          },
          {
            "include": "#less-variables"
          },
          {
            "include": "#var-function"
          }
        ]
      },
      "selector": {
        "patterns": [
          {
            "begin": "(?=[>~+/\\.*#a-zA-Z\\[&]|(\\:{1,2}[^\\s])|@\\{)",
            "contentName": "meta.selector.less",
            "end": "(?=@(?!\\{)|[{;])",
            "patterns": [
              {
                "include": "#comment-line"
              },
              {
                "include": "#selectors"
              },
              {
                "include": "#less-namespace-accessors"
              },
              {
                "include": "#less-variable-interpolation"
              },
              {
                "include": "#important"
              }
            ]
          }
        ]
      },
      "selectors": {
        "patterns": [
          {
            "match": "\\b([a-z](?:(?:[-_a-z0-9\\x{00B7}]|\\\\\\.|[[\\x{00C0}-\\x{00D6}][\\x{00D8}-\\x{00F6}][\\x{00F8}-\\x{02FF}][\\x{0300}-\\x{037D}][\\x{037F}-\\x{1FFF}][\\x{200C}-\\x{200D}][\\x{203F}-\\x{2040}][\\x{2070}-\\x{218F}][\\x{2C00}-\\x{2FEF}][\\x{3001}-\\x{D7FF}][\\x{F900}-\\x{FDCF}][\\x{FDF0}-\\x{FFFD}][\\x{10000}-\\x{EFFFF}]]))*-(?:(?:[-_a-z0-9\\x{00B7}]|\\\\\\.|[[\\x{00C0}-\\x{00D6}][\\x{00D8}-\\x{00F6}][\\x{00F8}-\\x{02FF}][\\x{0300}-\\x{037D}][\\x{037F}-\\x{1FFF}][\\x{200C}-\\x{200D}][\\x{203F}-\\x{2040}][\\x{2070}-\\x{218F}][\\x{2C00}-\\x{2FEF}][\\x{3001}-\\x{D7FF}][\\x{F900}-\\x{FDCF}][\\x{FDF0}-\\x{FFFD}][\\x{10000}-\\x{EFFFF}]]))*)\\b",
            "name": "entity.name.tag.custom.less"
          },
          {
            "match": "\\b(a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdi|bdo|big|blockquote|body|br|button|canvas|caption|circle|cite|clipPath|code|col|colgroup|content|data|dataList|dd|defs|del|details|dfn|dialog|dir|div|dl|dt|element|ellipse|em|embed|eventsource|fieldset|figcaption|figure|filter|footer|foreignObject|form|frame|frameset|g|glyph|glyphRef|h1|h2|h3|h4|h5|h6|head|header|hgroup|hr|html|i|iframe|image|img|input|ins|isindex|kbd|keygen|label|legend|li|line|linearGradient|link|main|map|mark|marker|mask|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|path|pattern|picture|polygon|polyline|pre|progress|q|radialGradient|rect|rp|ruby|rt|rtc|s|samp|script|section|select|shadow|small|source|span|stop|strike|strong|style|sub|summary|sup|svg|switch|symbol|table|tbody|td|template|textarea|textPath|tfoot|th|thead|time|title|tr|track|tref|tspan|tt|u|ul|use|var|video|wbr|xmp)\\b",
            "name": "entity.name.tag.less"
          },
          {
            "begin": "(\\.)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.entity.less"
              }
            },
            "end": "(?![-\\w]|[^\\x{00}-\\x{9f}]|\\\\([A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9])|(\\@(?=\\{)))",
            "name": "entity.other.attribute-name.class.less",
            "patterns": [
              {
                "include": "#less-variable-interpolation"
              }
            ]
          },
          {
            "begin": "(#)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.entity.less"
              }
            },
            "end": "(?![-\\w]|[^\\x{00}-\\x{9f}]|\\\\([A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9])|(\\@(?=\\{)))",
            "name": "entity.other.attribute-name.id.less",
            "patterns": [
              {
                "include": "#less-variable-interpolation"
              }
            ]
          },
          {
            "begin": "(&)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.entity.less"
              }
            },
            "contentName": "entity.other.attribute-name.parent.less",
            "end": "(?![-\\w]|[^\\x{00}-\\x{9f}]|\\\\([A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9])|(\\@(?=\\{)))",
            "name": "entity.other.attribute-name.parent.less",
            "patterns": [
              {
                "include": "#less-variable-interpolation"
              },
              {
                "include": "#selectors"
              }
            ]
          },
          {
            "include": "#pseudo-selectors"
          },
          {
            "include": "#less-extend"
          },
          {
            "match": "(?!\\+_?:)(?:>{1,3}|[~+])(?![>~+;}])",
            "name": "punctuation.separator.combinator.less"
          },
          {
            "match": "((?:>{1,3}|[~+])){2,}",
            "name": "invalid.illegal.combinator.less"
          },
          {
            "match": "\\/deep\\/",
            "name": "invalid.illegal.combinator.less"
          },
          {
            "begin": "\\[",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.braces.begin.less"
              }
            },
            "end": "\\]",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.braces.end.less"
              }
            },
            "name": "meta.attribute-selector.less",
            "patterns": [
              {
                "include": "#less-variable-interpolation"
              },
              {
                "include": "#qualified-name"
              },
              {
                "match": "(-?(?:[[_a-zA-Z][^\\x{00}-\\x{7F}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))(?:[[-\\w][^\\x{00}-\\x{7F}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))*)",
                "name": "entity.other.attribute-name.less"
              },
              {
                "begin": "\\s*([~*|^$]?=)\\s*",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.operator.attribute-selector.less"
                  }
                },
                "end": "(?=(\\s|\\]))",
                "patterns": [
                  {
                    "include": "#less-variable-interpolation"
                  },
                  {
                    "match": "[^\\s\\]\\['\"]",
                    "name": "string.unquoted.less"
                  },
                  {
                    "include": "#literal-string"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.other.less"
                      }
                    },
                    "match": "(?:\\s+([iI]))?"
                  },
                  {
                    "match": "\\]",
                    "name": "punctuation.definition.entity.less"
                  }
                ]
              }
            ]
          },
          {
            "include": "#arbitrary-repetition"
          },
          {
            "match": "\\*",
            "name": "entity.name.tag.wildcard.less"
          }
        ]
      },
      "shape-functions": {
        "patterns": [
          {
            "begin": "\\b(rect)(?=\\()",
            "beginCaptures": {
              "0": {
                "name": "support.function.shape.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "match": "\\bauto\\b",
                    "name": "support.constant.property-value.less"
                  },
                  {
                    "include": "#length-type"
                  },
                  {
                    "include": "#comma-delimiter"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(inset)(?=\\()",
            "beginCaptures": {
              "0": {
                "name": "support.function.shape.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "match": "\\bround\\b",
                    "name": "keyword.other.less"
                  },
                  {
                    "include": "#length-type"
                  },
                  {
                    "include": "#percentage-type"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(circle|ellipse)(?=\\()",
            "beginCaptures": {
              "0": {
                "name": "support.function.shape.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "match": "\\bat\\b",
                    "name": "keyword.other.less"
                  },
                  {
                    "match": "\\b(top|right|bottom|left|center|closest-side|farthest-side)\\b",
                    "name": "support.constant.property-value.less"
                  },
                  {
                    "include": "#length-type"
                  },
                  {
                    "include": "#percentage-type"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(polygon)(?=\\()",
            "beginCaptures": {
              "0": {
                "name": "support.function.shape.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "match": "\\b(nonzero|evenodd)\\b",
                    "name": "support.constant.property-value.less"
                  },
                  {
                    "include": "#length-type"
                  },
                  {
                    "include": "#percentage-type"
                  }
                ]
              }
            ]
          }
        ]
      },
      "steps-function": {
        "begin": "\\b(steps)(\\()",
        "beginCaptures": {
          "1": {
            "name": "support.function.timing.less"
          },
          "2": {
            "name": "punctuation.definition.group.begin.less"
          }
        },
        "contentName": "meta.group.less",
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.group.end.less"
          }
        },
        "name": "meta.function-call.less",
        "patterns": [
          {
            "match": "jump-start|jump-end|jump-none|jump-both|start|end",
            "name": "support.constant.step-position.less"
          },
          {
            "include": "#comma-delimiter"
          },
          {
            "include": "#integer-type"
          },
          {
            "include": "#less-variables"
          },
          {
            "include": "#var-function"
          },
          {
            "include": "#calc-function"
          }
        ]
      },
      "string-content": {
        "patterns": [
          {
            "include": "#less-variable-interpolation"
          },
          {
            "match": "\\\\\\s*\\n",
            "name": "constant.character.escape.newline.less"
          },
          {
            "match": "\\\\(\\h{1,6}|.)",
            "name": "constant.character.escape.less"
          }
        ]
      },
      "style-function": {
        "begin": "\\b(style)(?=\\()",
        "beginCaptures": {
          "0": {
            "name": "support.function.style.less"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.group.end.less"
          }
        },
        "name": "meta.function-call.less",
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.group.begin.less"
              }
            },
            "end": "(?=\\))",
            "patterns": [
              {
                "include": "#rule-list-body"
              }
            ]
          }
        ]
      },
      "symbols-function": {
        "begin": "\\b(symbols)(?=\\()",
        "beginCaptures": {
          "1": {
            "name": "support.function.counter.less"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.group.end.less"
          }
        },
        "name": "meta.function-call.less",
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.group.begin.less"
              }
            },
            "end": "(?=\\))",
            "patterns": [
              {
                "match": "\\b(cyclic|numeric|alphabetic|symbolic|fixed)\\b",
                "name": "support.constant.symbol-type.less"
              },
              {
                "include": "#comma-delimiter"
              },
              {
                "include": "#literal-string"
              },
              {
                "include": "#image-type"
              }
            ]
          }
        ]
      },
      "time-type": {
        "captures": {
          "1": {
            "name": "keyword.other.unit.less"
          }
        },
        "match": "(?i:[-+]?(?:(?:\\d*\\.\\d+(?:[eE](?:[-+]?\\d+))*)|(?:[-+]?\\d+))(s|ms))\\b",
        "name": "constant.numeric.less"
      },
      "transform-functions": {
        "patterns": [
          {
            "begin": "\\b(matrix3d|scale3d|matrix|scale)(?=\\()",
            "beginCaptures": {
              "0": {
                "name": "support.function.transform.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "include": "#number-type"
                  },
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#var-function"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(translate(3d)?)(?=\\()",
            "beginCaptures": {
              "0": {
                "name": "support.function.transform.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "include": "#percentage-type"
                  },
                  {
                    "include": "#length-type"
                  },
                  {
                    "include": "#number-type"
                  },
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#var-function"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(translate[XY])(?=\\()",
            "beginCaptures": {
              "0": {
                "name": "support.function.transform.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#percentage-type"
                  },
                  {
                    "include": "#length-type"
                  },
                  {
                    "include": "#number-type"
                  },
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#var-function"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(rotate[XYZ]?|skew[XY])(?=\\()",
            "beginCaptures": {
              "0": {
                "name": "support.function.transform.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#angle-type"
                  },
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#calc-function"
                  },
                  {
                    "include": "#var-function"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(skew)(?=\\()",
            "beginCaptures": {
              "0": {
                "name": "support.function.transform.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "include": "#angle-type"
                  },
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#calc-function"
                  },
                  {
                    "include": "#var-function"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(translateZ|perspective)(?=\\()",
            "beginCaptures": {
              "0": {
                "name": "support.function.transform.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#length-type"
                  },
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#calc-function"
                  },
                  {
                    "include": "#var-function"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(rotate3d)(?=\\()",
            "beginCaptures": {
              "0": {
                "name": "support.function.transform.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "include": "#angle-type"
                  },
                  {
                    "include": "#number-type"
                  },
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#calc-function"
                  },
                  {
                    "include": "#var-function"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(scale[XYZ])(?=\\()",
            "beginCaptures": {
              "0": {
                "name": "support.function.transform.less"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.end.less"
              }
            },
            "name": "meta.function-call.less",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.group.begin.less"
                  }
                },
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#comma-delimiter"
                  },
                  {
                    "include": "#number-type"
                  },
                  {
                    "include": "#less-variables"
                  },
                  {
                    "include": "#calc-function"
                  },
                  {
                    "include": "#var-function"
                  }
                ]
              }
            ]
          }
        ]
      },
      "unicode-range": {
        "captures": {
          "1": {
            "name": "support.constant.unicode-range.prefix.less"
          },
          "2": {
            "name": "constant.codepoint-range.less"
          },
          "3": {
            "name": "punctuation.section.range.less"
          }
        },
        "match": "(?i)(u\\+)([0-9a-f?]{1,6}(?:(-)[0-9a-f]{1,6})?)",
        "name": "support.unicode-range.less"
      },
      "unquoted-string": {
        "match": "[^\\s'\"]",
        "name": "string.unquoted.less"
      },
      "url-function": {
        "begin": "\\b(url)(?=\\()",
        "beginCaptures": {
          "1": {
            "name": "support.function.url.less"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.group.end.less"
          }
        },
        "name": "meta.function-call.less",
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.group.begin.less"
              }
            },
            "end": "(?=\\))",
            "patterns": [
              {
                "include": "#less-variables"
              },
              {
                "include": "#literal-string"
              },
              {
                "include": "#unquoted-string"
              },
              {
                "include": "#var-function"
              }
            ]
          }
        ]
      },
      "value-separator": {
        "captures": {
          "1": {
            "name": "punctuation.separator.less"
          }
        },
        "match": "\\s*(/)\\s*"
      },
      "var-function": {
        "begin": "\\b(var)(?=\\()",
        "beginCaptures": {
          "1": {
            "name": "support.function.var.less"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.group.end.less"
          }
        },
        "name": "meta.function-call.less",
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.group.begin.less"
              }
            },
            "end": "(?=\\))",
            "patterns": [
              {
                "include": "#comma-delimiter"
              },
              {
                "include": "#custom-property-name"
              },
              {
                "include": "#less-variables"
              },
              {
                "include": "#property-values"
              }
            ]
          }
        ]
      },
      "view-function": {
        "begin": "\\b(view)(?=\\()",
        "beginCaptures": {
          "1": {
            "name": "support.function.view.less"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.group.end.less"
          }
        },
        "name": "meta.function-call.less",
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.group.begin.less"
              }
            },
            "end": "(?=\\))",
            "patterns": [
              {
                "match": "block|inline|x|y|auto",
                "name": "support.constant.property-value.less"
              },
              {
                "include": "#percentage-type"
              },
              {
                "include": "#length-type"
              },
              {
                "include": "#less-variables"
              },
              {
                "include": "#var-function"
              },
              {
                "include": "#calc-function"
              },
              {
                "include": "#arbitrary-repetition"
              }
            ]
          }
        ]
      }
    },
    "scopeName": "source.css.less"
  }
])