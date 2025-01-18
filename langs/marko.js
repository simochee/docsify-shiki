/** Shiki Language: marko */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push([
  {
    "displayName": "CSS",
    "name": "css",
    "patterns": [
      {
        "include": "#comment-block"
      },
      {
        "include": "#escapes"
      },
      {
        "include": "#combinators"
      },
      {
        "include": "#selector"
      },
      {
        "include": "#at-rules"
      },
      {
        "include": "#rule-list"
      }
    ],
    "repository": {
      "at-rules": {
        "patterns": [
          {
            "begin": "\\A(?:\\xEF\\xBB\\xBF)?(?i:(?=\\s*@charset\\b))",
            "end": ";|(?=$)",
            "endCaptures": {
              "0": {
                "name": "punctuation.terminator.rule.css"
              }
            },
            "name": "meta.at-rule.charset.css",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "invalid.illegal.not-lowercase.charset.css"
                  },
                  "2": {
                    "name": "invalid.illegal.leading-whitespace.charset.css"
                  },
                  "3": {
                    "name": "invalid.illegal.no-whitespace.charset.css"
                  },
                  "4": {
                    "name": "invalid.illegal.whitespace.charset.css"
                  },
                  "5": {
                    "name": "invalid.illegal.not-double-quoted.charset.css"
                  },
                  "6": {
                    "name": "invalid.illegal.unclosed-string.charset.css"
                  },
                  "7": {
                    "name": "invalid.illegal.unexpected-characters.charset.css"
                  }
                },
                "match": "\\G((?!@charset)@\\w+)|\\G(\\s+)|(@charset\\S[^;]*)|(?<=@charset)(\\x20{2,}|\\t+)|(?<=@charset\\x20)([^\";]+)|(\"[^\"]+$)|(?<=\")([^;]+)"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.at-rule.charset.css"
                  },
                  "2": {
                    "name": "punctuation.definition.keyword.css"
                  }
                },
                "match": "((@)charset)(?=\\s)"
              },
              {
                "begin": "\"",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.css"
                  }
                },
                "end": "\"|$",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.css"
                  }
                },
                "name": "string.quoted.double.css",
                "patterns": [
                  {
                    "begin": "(?:\\G|^)(?=(?:[^\"])+$)",
                    "end": "$",
                    "name": "invalid.illegal.unclosed.string.css"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?i)((@)import)(?:\\s+|$|(?=['\"]|/\\*))",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.at-rule.import.css"
              },
              "2": {
                "name": "punctuation.definition.keyword.css"
              }
            },
            "end": ";",
            "endCaptures": {
              "0": {
                "name": "punctuation.terminator.rule.css"
              }
            },
            "name": "meta.at-rule.import.css",
            "patterns": [
              {
                "begin": "\\G\\s*(?=/\\*)",
                "end": "(?<=\\*/)\\s*",
                "patterns": [
                  {
                    "include": "#comment-block"
                  }
                ]
              },
              {
                "include": "#string"
              },
              {
                "include": "#url"
              },
              {
                "include": "#media-query-list"
              }
            ]
          },
          {
            "begin": "(?i)((@)font-face)(?=\\s*|{|/\\*|$)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.at-rule.font-face.css"
              },
              "2": {
                "name": "punctuation.definition.keyword.css"
              }
            },
            "end": "(?!\\G)",
            "name": "meta.at-rule.font-face.css",
            "patterns": [
              {
                "include": "#comment-block"
              },
              {
                "include": "#escapes"
              },
              {
                "include": "#rule-list"
              }
            ]
          },
          {
            "begin": "(?i)(@)page(?=[\\s:{]|/\\*|$)",
            "captures": {
              "0": {
                "name": "keyword.control.at-rule.page.css"
              },
              "1": {
                "name": "punctuation.definition.keyword.css"
              }
            },
            "end": "(?=\\s*($|[:{;]))",
            "name": "meta.at-rule.page.css",
            "patterns": [
              {
                "include": "#rule-list"
              }
            ]
          },
          {
            "begin": "(?i)(?=@media(\\s|\\(|/\\*|$))",
            "end": "(?<=})(?!\\G)",
            "patterns": [
              {
                "begin": "(?i)\\G(@)media",
                "beginCaptures": {
                  "0": {
                    "name": "keyword.control.at-rule.media.css"
                  },
                  "1": {
                    "name": "punctuation.definition.keyword.css"
                  }
                },
                "end": "(?=\\s*[{;])",
                "name": "meta.at-rule.media.header.css",
                "patterns": [
                  {
                    "include": "#media-query-list"
                  }
                ]
              },
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.media.begin.bracket.curly.css"
                  }
                },
                "end": "}",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.media.end.bracket.curly.css"
                  }
                },
                "name": "meta.at-rule.media.body.css",
                "patterns": [
                  {
                    "include": "$self"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?i)(?=@counter-style([\\s'\"{;]|/\\*|$))",
            "end": "(?<=})(?!\\G)",
            "patterns": [
              {
                "begin": "(?i)\\G(@)counter-style",
                "beginCaptures": {
                  "0": {
                    "name": "keyword.control.at-rule.counter-style.css"
                  },
                  "1": {
                    "name": "punctuation.definition.keyword.css"
                  }
                },
                "end": "(?=\\s*{)",
                "name": "meta.at-rule.counter-style.header.css",
                "patterns": [
                  {
                    "include": "#comment-block"
                  },
                  {
                    "include": "#escapes"
                  },
                  {
                    "captures": {
                      "0": {
                        "patterns": [
                          {
                            "include": "#escapes"
                          }
                        ]
                      }
                    },
                    "match": "(?:[-a-zA-Z_]|[^\\x00-\\x7F])(?:[-a-zA-Z0-9_]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))*",
                    "name": "variable.parameter.style-name.css"
                  }
                ]
              },
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.property-list.begin.bracket.curly.css"
                  }
                },
                "end": "}",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.property-list.end.bracket.curly.css"
                  }
                },
                "name": "meta.at-rule.counter-style.body.css",
                "patterns": [
                  {
                    "include": "#comment-block"
                  },
                  {
                    "include": "#escapes"
                  },
                  {
                    "include": "#rule-list-innards"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?i)(?=@document([\\s'\"{;]|/\\*|$))",
            "end": "(?<=})(?!\\G)",
            "patterns": [
              {
                "begin": "(?i)\\G(@)document",
                "beginCaptures": {
                  "0": {
                    "name": "keyword.control.at-rule.document.css"
                  },
                  "1": {
                    "name": "punctuation.definition.keyword.css"
                  }
                },
                "end": "(?=\\s*[{;])",
                "name": "meta.at-rule.document.header.css",
                "patterns": [
                  {
                    "begin": "(?i)(?<![\\w-])(url-prefix|domain|regexp)(\\()",
                    "beginCaptures": {
                      "1": {
                        "name": "support.function.document-rule.css"
                      },
                      "2": {
                        "name": "punctuation.section.function.begin.bracket.round.css"
                      }
                    },
                    "end": "\\)",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.section.function.end.bracket.round.css"
                      }
                    },
                    "name": "meta.function.document-rule.css",
                    "patterns": [
                      {
                        "include": "#string"
                      },
                      {
                        "include": "#comment-block"
                      },
                      {
                        "include": "#escapes"
                      },
                      {
                        "match": "[^'\")\\s]+",
                        "name": "variable.parameter.document-rule.css"
                      }
                    ]
                  },
                  {
                    "include": "#url"
                  },
                  {
                    "include": "#commas"
                  },
                  {
                    "include": "#comment-block"
                  },
                  {
                    "include": "#escapes"
                  }
                ]
              },
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.document.begin.bracket.curly.css"
                  }
                },
                "end": "}",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.document.end.bracket.curly.css"
                  }
                },
                "name": "meta.at-rule.document.body.css",
                "patterns": [
                  {
                    "include": "$self"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?i)(?=@(?:-(?:webkit|moz|o|ms)-)?keyframes([\\s'\"{;]|/\\*|$))",
            "end": "(?<=})(?!\\G)",
            "patterns": [
              {
                "begin": "(?i)\\G(@)(?:-(?:webkit|moz|o|ms)-)?keyframes",
                "beginCaptures": {
                  "0": {
                    "name": "keyword.control.at-rule.keyframes.css"
                  },
                  "1": {
                    "name": "punctuation.definition.keyword.css"
                  }
                },
                "end": "(?=\\s*{)",
                "name": "meta.at-rule.keyframes.header.css",
                "patterns": [
                  {
                    "include": "#comment-block"
                  },
                  {
                    "include": "#escapes"
                  },
                  {
                    "captures": {
                      "0": {
                        "patterns": [
                          {
                            "include": "#escapes"
                          }
                        ]
                      }
                    },
                    "match": "(?:[-a-zA-Z_]|[^\\x00-\\x7F])(?:[-a-zA-Z0-9_]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))*",
                    "name": "variable.parameter.keyframe-list.css"
                  }
                ]
              },
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.keyframes.begin.bracket.curly.css"
                  }
                },
                "end": "}",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.keyframes.end.bracket.curly.css"
                  }
                },
                "name": "meta.at-rule.keyframes.body.css",
                "patterns": [
                  {
                    "include": "#comment-block"
                  },
                  {
                    "include": "#escapes"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "entity.other.keyframe-offset.css"
                      },
                      "2": {
                        "name": "entity.other.keyframe-offset.percentage.css"
                      }
                    },
                    "match": "(?xi)\n(?<![\\w-]) (from|to) (?![\\w-])         # Keywords for 0% | 100%\n|\n([-+]?(?:\\d+(?:\\.\\d+)?|\\.\\d+)%)     # Percentile value"
                  },
                  {
                    "include": "#rule-list"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?i)(?=@supports(\\s|\\(|/\\*|$))",
            "end": "(?<=})(?!\\G)|(?=;)",
            "patterns": [
              {
                "begin": "(?i)\\G(@)supports",
                "beginCaptures": {
                  "0": {
                    "name": "keyword.control.at-rule.supports.css"
                  },
                  "1": {
                    "name": "punctuation.definition.keyword.css"
                  }
                },
                "end": "(?=\\s*[{;])",
                "name": "meta.at-rule.supports.header.css",
                "patterns": [
                  {
                    "include": "#feature-query-operators"
                  },
                  {
                    "include": "#feature-query"
                  },
                  {
                    "include": "#comment-block"
                  },
                  {
                    "include": "#escapes"
                  }
                ]
              },
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.supports.begin.bracket.curly.css"
                  }
                },
                "end": "}",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.supports.end.bracket.curly.css"
                  }
                },
                "name": "meta.at-rule.supports.body.css",
                "patterns": [
                  {
                    "include": "$self"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?i)((@)(-(ms|o)-)?viewport)(?=[\\s'\"{;]|/\\*|$)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.at-rule.viewport.css"
              },
              "2": {
                "name": "punctuation.definition.keyword.css"
              }
            },
            "end": "(?=\\s*[@{;])",
            "name": "meta.at-rule.viewport.css",
            "patterns": [
              {
                "include": "#comment-block"
              },
              {
                "include": "#escapes"
              }
            ]
          },
          {
            "begin": "(?i)((@)font-feature-values)(?=[\\s'\"{;]|/\\*|$)\\s*",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.at-rule.font-feature-values.css"
              },
              "2": {
                "name": "punctuation.definition.keyword.css"
              }
            },
            "contentName": "variable.parameter.font-name.css",
            "end": "(?=\\s*[@{;])",
            "name": "meta.at-rule.font-features.css",
            "patterns": [
              {
                "include": "#comment-block"
              },
              {
                "include": "#escapes"
              }
            ]
          },
          {
            "include": "#font-features"
          },
          {
            "begin": "(?i)((@)namespace)(?=[\\s'\";]|/\\*|$)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.at-rule.namespace.css"
              },
              "2": {
                "name": "punctuation.definition.keyword.css"
              }
            },
            "end": ";|(?=[@{])",
            "endCaptures": {
              "0": {
                "name": "punctuation.terminator.rule.css"
              }
            },
            "name": "meta.at-rule.namespace.css",
            "patterns": [
              {
                "include": "#url"
              },
              {
                "captures": {
                  "1": {
                    "patterns": [
                      {
                        "include": "#comment-block"
                      }
                    ]
                  },
                  "2": {
                    "name": "entity.name.function.namespace-prefix.css",
                    "patterns": [
                      {
                        "include": "#escapes"
                      }
                    ]
                  }
                },
                "match": "(?xi)\n(?:\\G|^|(?<=\\s))\n(?=\n  (?<=\\s|^)                             # Starts with whitespace\n  (?:[-a-zA-Z_]|[^\\x00-\\x7F])          # Then a valid identifier character\n  |\n  \\s*                                   # Possible adjoining whitespace\n  /\\*(?:[^*]|\\*[^/])*\\*/              # Injected comment\n)\n(.*?)                                    # Grouped to embed #comment-block\n(\n  (?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter\n  (?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier\n    |\\\\(?:[0-9a-fA-F]{1,6}|.)\n  )*\n)"
              },
              {
                "include": "#comment-block"
              },
              {
                "include": "#escapes"
              },
              {
                "include": "#string"
              }
            ]
          },
          {
            "begin": "(?i)(?=@[\\w-]+[^;]+;s*$)",
            "end": "(?<=;)(?!\\G)",
            "patterns": [
              {
                "begin": "(?i)\\G(@)[\\w-]+",
                "beginCaptures": {
                  "0": {
                    "name": "keyword.control.at-rule.css"
                  },
                  "1": {
                    "name": "punctuation.definition.keyword.css"
                  }
                },
                "end": ";",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.terminator.rule.css"
                  }
                },
                "name": "meta.at-rule.header.css"
              }
            ]
          },
          {
            "begin": "(?i)(?=@[\\w-]+(\\s|\\(|{|/\\*|$))",
            "end": "(?<=})(?!\\G)",
            "patterns": [
              {
                "begin": "(?i)\\G(@)[\\w-]+",
                "beginCaptures": {
                  "0": {
                    "name": "keyword.control.at-rule.css"
                  },
                  "1": {
                    "name": "punctuation.definition.keyword.css"
                  }
                },
                "end": "(?=\\s*[{;])",
                "name": "meta.at-rule.header.css"
              },
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.begin.bracket.curly.css"
                  }
                },
                "end": "}",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.end.bracket.curly.css"
                  }
                },
                "name": "meta.at-rule.body.css",
                "patterns": [
                  {
                    "include": "$self"
                  }
                ]
              }
            ]
          }
        ]
      },
      "color-keywords": {
        "patterns": [
          {
            "match": "(?i)(?<![\\w-])(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)(?![\\w-])",
            "name": "support.constant.color.w3c-standard-color-name.css"
          },
          {
            "match": "(?xi) (?<![\\w-])\n(aliceblue|antiquewhite|aquamarine|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood\n|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan\n|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange\n|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise\n|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen\n|gainsboro|ghostwhite|gold|goldenrod|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki\n|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow\n|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray\n|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|magenta|mediumaquamarine|mediumblue\n|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise\n|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered\n|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum\n|powderblue|rebeccapurple|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell\n|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato\n|transparent|turquoise|violet|wheat|whitesmoke|yellowgreen)\n(?![\\w-])",
            "name": "support.constant.color.w3c-extended-color-name.css"
          },
          {
            "match": "(?i)(?<![\\w-])currentColor(?![\\w-])",
            "name": "support.constant.color.current.css"
          },
          {
            "match": "(?xi) (?<![\\w-])\n(ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow\n|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption\n|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow\n|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText)\n(?![\\w-])",
            "name": "invalid.deprecated.color.system.css"
          }
        ]
      },
      "combinators": {
        "patterns": [
          {
            "match": "/deep/|>>>",
            "name": "invalid.deprecated.combinator.css"
          },
          {
            "match": ">>|>|\\+|~",
            "name": "keyword.operator.combinator.css"
          }
        ]
      },
      "commas": {
        "match": ",",
        "name": "punctuation.separator.list.comma.css"
      },
      "comment-block": {
        "begin": "/\\*",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.comment.begin.css"
          }
        },
        "end": "\\*/",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.comment.end.css"
          }
        },
        "name": "comment.block.css"
      },
      "escapes": {
        "patterns": [
          {
            "match": "\\\\[0-9a-fA-F]{1,6}",
            "name": "constant.character.escape.codepoint.css"
          },
          {
            "begin": "\\\\$\\s*",
            "end": "^(?<!\\G)",
            "name": "constant.character.escape.newline.css"
          },
          {
            "match": "\\\\.",
            "name": "constant.character.escape.css"
          }
        ]
      },
      "feature-query": {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.condition.begin.bracket.round.css"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.condition.end.bracket.round.css"
          }
        },
        "name": "meta.feature-query.css",
        "patterns": [
          {
            "include": "#feature-query-operators"
          },
          {
            "include": "#feature-query"
          }
        ]
      },
      "feature-query-operators": {
        "patterns": [
          {
            "match": "(?i)(?<=[\\s()]|^|\\*/)(and|not|or)(?=[\\s()]|/\\*|$)",
            "name": "keyword.operator.logical.feature.$1.css"
          },
          {
            "include": "#rule-list-innards"
          }
        ]
      },
      "font-features": {
        "begin": "(?xi)\n((@)(annotation|character-variant|ornaments|styleset|stylistic|swash))\n(?=[\\s@'\"{;]|/\\*|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.at-rule.${3:/downcase}.css"
          },
          "2": {
            "name": "punctuation.definition.keyword.css"
          }
        },
        "end": "(?<=})",
        "name": "meta.at-rule.${3:/downcase}.css",
        "patterns": [
          {
            "begin": "{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.property-list.begin.bracket.curly.css"
              }
            },
            "end": "}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.property-list.end.bracket.curly.css"
              }
            },
            "name": "meta.property-list.font-feature.css",
            "patterns": [
              {
                "captures": {
                  "0": {
                    "patterns": [
                      {
                        "include": "#escapes"
                      }
                    ]
                  }
                },
                "match": "(?:[-a-zA-Z_]|[^\\x00-\\x7F])(?:[-a-zA-Z0-9_]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))*",
                "name": "variable.font-feature.css"
              },
              {
                "include": "#rule-list-innards"
              }
            ]
          }
        ]
      },
      "functional-pseudo-classes": {
        "patterns": [
          {
            "begin": "(?i)((:)dir)(\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.other.attribute-name.pseudo-class.css"
              },
              "2": {
                "name": "punctuation.definition.entity.css"
              },
              "3": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "patterns": [
              {
                "include": "#comment-block"
              },
              {
                "include": "#escapes"
              },
              {
                "match": "(?i)(?<![\\w-])(ltr|rtl)(?![\\w-])",
                "name": "support.constant.text-direction.css"
              },
              {
                "include": "#property-values"
              }
            ]
          },
          {
            "begin": "(?i)((:)lang)(\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.other.attribute-name.pseudo-class.css"
              },
              "2": {
                "name": "punctuation.definition.entity.css"
              },
              "3": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "patterns": [
              {
                "match": "(?<=[(,\\s])[a-zA-Z]+(-[a-zA-Z0-9]*|\\\\(?:[0-9a-fA-F]{1,6}|.))*(?=[),\\s])",
                "name": "support.constant.language-range.css"
              },
              {
                "begin": "\"",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.css"
                  }
                },
                "end": "\"",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.css"
                  }
                },
                "name": "string.quoted.double.css",
                "patterns": [
                  {
                    "include": "#escapes"
                  },
                  {
                    "match": "(?<=[\"\\s])[a-zA-Z*]+(-[a-zA-Z0-9*]*)*(?=[\"\\s])",
                    "name": "support.constant.language-range.css"
                  }
                ]
              },
              {
                "begin": "'",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.css"
                  }
                },
                "end": "'",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.css"
                  }
                },
                "name": "string.quoted.single.css",
                "patterns": [
                  {
                    "include": "#escapes"
                  },
                  {
                    "match": "(?<=['\\s])[a-zA-Z*]+(-[a-zA-Z0-9*]*)*(?=['\\s])",
                    "name": "support.constant.language-range.css"
                  }
                ]
              },
              {
                "include": "#commas"
              }
            ]
          },
          {
            "begin": "(?i)((:)(?:not|has|matches|where|is))(\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.other.attribute-name.pseudo-class.css"
              },
              "2": {
                "name": "punctuation.definition.entity.css"
              },
              "3": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "patterns": [
              {
                "include": "#selector-innards"
              }
            ]
          },
          {
            "begin": "(?i)((:)nth-(?:last-)?(?:child|of-type))(\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.other.attribute-name.pseudo-class.css"
              },
              "2": {
                "name": "punctuation.definition.entity.css"
              },
              "3": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "patterns": [
              {
                "match": "(?i)[+-]?(\\d+n?|n)(\\s*[+-]\\s*\\d+)?",
                "name": "constant.numeric.css"
              },
              {
                "match": "(?i)even|odd",
                "name": "support.constant.parity.css"
              }
            ]
          }
        ]
      },
      "functions": {
        "patterns": [
          {
            "begin": "(?i)(?<![\\w-])(calc)(\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.calc.css"
              },
              "2": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "name": "meta.function.calc.css",
            "patterns": [
              {
                "match": "[*/]|(?<=\\s|^)[-+](?=\\s|$)",
                "name": "keyword.operator.arithmetic.css"
              },
              {
                "include": "#property-values"
              }
            ]
          },
          {
            "begin": "(?i)(?<![\\w-])(rgba?|rgb|hsla?|hsl|hwb|lab|oklab|lch|oklch|color)(\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.misc.css"
              },
              "2": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "name": "meta.function.color.css",
            "patterns": [
              {
                "include": "#property-values"
              }
            ]
          },
          {
            "begin": "(?xi) (?<![\\w-])\n(\n  (?:-webkit-|-moz-|-o-)?    # Accept prefixed/historical variants\n  (?:repeating-)?            # \"Repeating\"-type gradient\n  (?:linear|radial|conic)    # Shape\n  -gradient\n)\n(\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.gradient.css"
              },
              "2": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "name": "meta.function.gradient.css",
            "patterns": [
              {
                "match": "(?i)(?<![\\w-])(from|to|at|in|hue)(?![\\w-])",
                "name": "keyword.operator.gradient.css"
              },
              {
                "include": "#property-values"
              }
            ]
          },
          {
            "begin": "(?i)(?<![\\w-])(-webkit-gradient)(\\()",
            "beginCaptures": {
              "1": {
                "name": "invalid.deprecated.gradient.function.css"
              },
              "2": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "name": "meta.function.gradient.invalid.deprecated.gradient.css",
            "patterns": [
              {
                "begin": "(?i)(?<![\\w-])(from|to|color-stop)(\\()",
                "beginCaptures": {
                  "1": {
                    "name": "invalid.deprecated.function.css"
                  },
                  "2": {
                    "name": "punctuation.section.function.begin.bracket.round.css"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.function.end.bracket.round.css"
                  }
                },
                "patterns": [
                  {
                    "include": "#property-values"
                  }
                ]
              },
              {
                "include": "#property-values"
              }
            ]
          },
          {
            "begin": "(?xi) (?<![\\w-])\n(annotation|attr|blur|brightness|character-variant|clamp|contrast|counters?\n|cross-fade|drop-shadow|element|fit-content|format|grayscale|hue-rotate|color-mix\n|image-set|invert|local|max|min|minmax|opacity|ornaments|repeat|saturate|sepia\n|styleset|stylistic|swash|symbols\n|cos|sin|tan|acos|asin|atan|atan2|hypot|sqrt|pow|log|exp|abs|sign)\n(\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.misc.css"
              },
              "2": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "name": "meta.function.misc.css",
            "patterns": [
              {
                "match": "(?i)(?<=[,\\s\"]|\\*/|^)\\d+x(?=[\\s,\"')]|/\\*|$)",
                "name": "constant.numeric.other.density.css"
              },
              {
                "include": "#property-values"
              },
              {
                "match": "[^'\"),\\s]+",
                "name": "variable.parameter.misc.css"
              }
            ]
          },
          {
            "begin": "(?i)(?<![\\w-])(circle|ellipse|inset|polygon|rect)(\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.shape.css"
              },
              "2": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "name": "meta.function.shape.css",
            "patterns": [
              {
                "match": "(?i)(?<=\\s|^|\\*/)(at|round)(?=\\s|/\\*|$)",
                "name": "keyword.operator.shape.css"
              },
              {
                "include": "#property-values"
              }
            ]
          },
          {
            "begin": "(?i)(?<![\\w-])(cubic-bezier|steps)(\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.timing-function.css"
              },
              "2": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "name": "meta.function.timing-function.css",
            "patterns": [
              {
                "match": "(?i)(?<![\\w-])(start|end)(?=\\s*\\)|$)",
                "name": "support.constant.step-direction.css"
              },
              {
                "include": "#property-values"
              }
            ]
          },
          {
            "begin": "(?xi) (?<![\\w-])\n( (?:translate|scale|rotate)(?:[XYZ]|3D)?\n| matrix(?:3D)?\n| skew[XY]?\n| perspective\n)\n(\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.transform.css"
              },
              "2": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "patterns": [
              {
                "include": "#property-values"
              }
            ]
          },
          {
            "include": "#url"
          },
          {
            "begin": "(?i)(?<![\\w-])(var)(\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.misc.css"
              },
              "2": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "name": "meta.function.variable.css",
            "patterns": [
              {
                "match": "--(?:[-a-zA-Z_]|[^\\x00-\\x7F])(?:[-a-zA-Z0-9_]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))*",
                "name": "variable.argument.css"
              },
              {
                "include": "#property-values"
              }
            ]
          }
        ]
      },
      "media-feature-keywords": {
        "match": "(?xi)\n(?<=^|\\s|:|\\*/)\n(?: portrait                  # Orientation\n  | landscape\n  | progressive               # Scan types\n  | interlace\n  | fullscreen                # Display modes\n  | standalone\n  | minimal-ui\n  | browser\n  | hover\n)\n(?=\\s|\\)|$)",
        "name": "support.constant.property-value.css"
      },
      "media-features": {
        "captures": {
          "1": {
            "name": "support.type.property-name.media.css"
          },
          "2": {
            "name": "support.type.property-name.media.css"
          },
          "3": {
            "name": "support.type.vendored.property-name.media.css"
          }
        },
        "match": "(?xi)\n(?<=^|\\s|\\(|\\*/)           # Preceded by whitespace, bracket or comment\n(?:\n  # Standardised features\n  (\n    (?:min-|max-)?            # Range features\n    (?: height\n      | width\n      | aspect-ratio\n      | color\n      | color-index\n      | monochrome\n      | resolution\n    )\n    | grid                    # Discrete features\n    | scan\n    | orientation\n    | display-mode\n    | hover\n  )\n  |\n  # Deprecated features\n  (\n    (?:min-|max-)?            # Deprecated in Media Queries 4\n    device-\n    (?: height\n      | width\n      | aspect-ratio\n    )\n  )\n  |\n  # Vendor extensions\n  (\n    (?:\n      # Spec-compliant syntax\n      [-_]\n      (?: webkit              # Webkit/Blink\n        | apple|khtml         # Webkit aliases\n        | epub                # ePub3\n        | moz                 # Gecko\n        | ms                  # Microsoft\n        | o                   # Presto (pre-Opera 15)\n        | xv|ah|rim|atsc|     # Less common vendors\n          hp|tc|wap|ro\n      )\n      |\n      # Non-standard prefixes\n      (?: mso                 # Microsoft Office\n        | prince              # YesLogic\n      )\n    )\n    -\n    [\\w-]+                   # Feature name\n    (?=                       # Terminates correctly\n      \\s*                    # Possible whitespace\n      (?:                     # Possible injected comment\n        /\\*\n        (?:[^*]|\\*[^/])*\n        \\*/\n      )?\n      \\s*\n      [:)]                    # Ends with a colon or closed bracket\n    )\n  )\n)\n(?=\\s|$|[><:=]|\\)|/\\*)     # Terminates cleanly"
      },
      "media-query": {
        "begin": "\\G",
        "end": "(?=\\s*[{;])",
        "patterns": [
          {
            "include": "#comment-block"
          },
          {
            "include": "#escapes"
          },
          {
            "include": "#media-types"
          },
          {
            "match": "(?i)(?<=\\s|^|,|\\*/)(only|not)(?=\\s|{|/\\*|$)",
            "name": "keyword.operator.logical.$1.media.css"
          },
          {
            "match": "(?i)(?<=\\s|^|\\*/|\\))and(?=\\s|/\\*|$)",
            "name": "keyword.operator.logical.and.media.css"
          },
          {
            "match": ",(?:(?:\\s*,)+|(?=\\s*[;){]))",
            "name": "invalid.illegal.comma.css"
          },
          {
            "include": "#commas"
          },
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.parameters.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.parameters.end.bracket.round.css"
              }
            },
            "patterns": [
              {
                "include": "#media-features"
              },
              {
                "include": "#media-feature-keywords"
              },
              {
                "match": ":",
                "name": "punctuation.separator.key-value.css"
              },
              {
                "match": ">=|<=|=|<|>",
                "name": "keyword.operator.comparison.css"
              },
              {
                "captures": {
                  "1": {
                    "name": "constant.numeric.css"
                  },
                  "2": {
                    "name": "keyword.operator.arithmetic.css"
                  },
                  "3": {
                    "name": "constant.numeric.css"
                  }
                },
                "match": "(\\d+)\\s*(/)\\s*(\\d+)",
                "name": "meta.ratio.css"
              },
              {
                "include": "#numeric-values"
              },
              {
                "include": "#comment-block"
              }
            ]
          }
        ]
      },
      "media-query-list": {
        "begin": "(?=\\s*[^{;])",
        "end": "(?=\\s*[{;])",
        "patterns": [
          {
            "include": "#media-query"
          }
        ]
      },
      "media-types": {
        "captures": {
          "1": {
            "name": "support.constant.media.css"
          },
          "2": {
            "name": "invalid.deprecated.constant.media.css"
          }
        },
        "match": "(?xi)\n(?<=^|\\s|,|\\*/)\n(?:\n  # Valid media types\n  (all|print|screen|speech)\n  |\n  # Deprecated in Media Queries 4: http://dev.w3.org/csswg/mediaqueries/#media-types\n  (aural|braille|embossed|handheld|projection|tty|tv)\n)\n(?=$|[{,\\s;]|/\\*)"
      },
      "numeric-values": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.constant.css"
              }
            },
            "match": "(#)(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\\b",
            "name": "constant.other.color.rgb-value.hex.css"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.other.unit.percentage.css"
              },
              "2": {
                "name": "keyword.other.unit.${2:/downcase}.css"
              }
            },
            "match": "(?xi) (?<![\\w-])\n[-+]?                               # Sign indicator\n\n(?:                                 # Numerals\n    [0-9]+ (?:\\.[0-9]+)?           # Integer/float with leading digits\n  | \\.[0-9]+                       # Float without leading digits\n)\n\n(?:                                 # Scientific notation\n  (?<=[0-9])                        # Exponent must follow a digit\n  E                                 # Exponent indicator\n  [-+]?                             # Possible sign indicator\n  [0-9]+                            # Exponent value\n)?\n\n(?:                                 # Possible unit for data-type:\n  (%)                               # - Percentage\n  | ( deg|grad|rad|turn             # - Angle\n    | Hz|kHz                        # - Frequency\n    | ch|cm|em|ex|fr|in|mm|mozmm|   # - Length\n      pc|pt|px|q|rem|rch|rex|rlh|\n      ic|ric|rcap|vh|vw|vb|vi|svh|\n      svw|svb|svi|dvh|dvw|dvb|dvi|\n      lvh|lvw|lvb|lvi|vmax|vmin|\n      cqw|cqi|cqh|cqb|cqmin|cqmax\n    | dpi|dpcm|dppx                 # - Resolution\n    | s|ms                          # - Time\n    )\n  \\b                               # Boundary checking intentionally lax to\n)?                                  # facilitate embedding in CSS-like grammars",
            "name": "constant.numeric.css"
          }
        ]
      },
      "property-keywords": {
        "patterns": [
          {
            "match": "(?xi) (?<![\\w-])\n(above|absolute|active|add|additive|after-edge|alias|all|all-petite-caps|all-scroll|all-small-caps|alpha|alphabetic|alternate|alternate-reverse\n|always|antialiased|auto|auto-fill|auto-fit|auto-pos|available|avoid|avoid-column|avoid-page|avoid-region|backwards|balance|baseline|before-edge|below|bevel\n|bidi-override|blink|block|block-axis|block-start|block-end|bold|bolder|border|border-box|both|bottom|bottom-outside|break-all|break-word|bullets\n|butt|capitalize|caption|cell|center|central|char|circle|clip|clone|close-quote|closest-corner|closest-side|col-resize|collapse|color|color-burn\n|color-dodge|column|column-reverse|common-ligatures|compact|condensed|contain|content|content-box|contents|context-menu|contextual|copy|cover\n|crisp-edges|crispEdges|crosshair|cyclic|dark|darken|dashed|decimal|default|dense|diagonal-fractions|difference|digits|disabled|disc|discretionary-ligatures\n|distribute|distribute-all-lines|distribute-letter|distribute-space|dot|dotted|double|double-circle|downleft|downright|e-resize|each-line|ease|ease-in\n|ease-in-out|ease-out|economy|ellipse|ellipsis|embed|end|evenodd|ew-resize|exact|exclude|exclusion|expanded|extends|extra-condensed|extra-expanded\n|fallback|farthest-corner|farthest-side|fill|fill-available|fill-box|filled|fit-content|fixed|flat|flex|flex-end|flex-start|flip|flow-root|forwards|freeze\n|from-image|full-width|geometricPrecision|georgian|grab|grabbing|grayscale|grid|groove|hand|hanging|hard-light|help|hidden|hide\n|historical-forms|historical-ligatures|horizontal|horizontal-tb|hue|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space\n|ideographic|inactive|infinite|inherit|initial|inline|inline-axis|inline-block|inline-end|inline-flex|inline-grid|inline-list-item|inline-start\n|inline-table|inset|inside|inter-character|inter-ideograph|inter-word|intersect|invert|isolate|isolate-override|italic|jis04|jis78|jis83\n|jis90|justify|justify-all|kannada|keep-all|landscape|large|larger|left|light|lighten|lighter|line|line-edge|line-through|linear|linearRGB\n|lining-nums|list-item|local|loose|lowercase|lr|lr-tb|ltr|luminance|luminosity|main-size|mandatory|manipulation|manual|margin-box|match-parent\n|match-source|mathematical|max-content|medium|menu|message-box|middle|min-content|miter|mixed|move|multiply|n-resize|narrower|ne-resize\n|nearest-neighbor|nesw-resize|newspaper|no-change|no-clip|no-close-quote|no-common-ligatures|no-contextual|no-discretionary-ligatures\n|no-drop|no-historical-ligatures|no-open-quote|no-repeat|none|nonzero|normal|not-allowed|nowrap|ns-resize|numbers|numeric|nw-resize|nwse-resize\n|oblique|oldstyle-nums|open|open-quote|optimizeLegibility|optimizeQuality|optimizeSpeed|optional|ordinal|outset|outside|over|overlay|overline|padding\n|padding-box|page|painted|pan-down|pan-left|pan-right|pan-up|pan-x|pan-y|paused|petite-caps|pixelated|plaintext|pointer|portrait|pre|pre-line\n|pre-wrap|preserve-3d|progress|progressive|proportional-nums|proportional-width|proximity|radial|recto|region|relative|remove|repeat|repeat-[xy]\n|reset-size|reverse|revert|ridge|right|rl|rl-tb|round|row|row-resize|row-reverse|row-severse|rtl|ruby|ruby-base|ruby-base-container|ruby-text\n|ruby-text-container|run-in|running|s-resize|saturation|scale-down|screen|scroll|scroll-position|se-resize|semi-condensed|semi-expanded|separate\n|sesame|show|sideways|sideways-left|sideways-lr|sideways-right|sideways-rl|simplified|slashed-zero|slice|small|small-caps|small-caption|smaller\n|smooth|soft-light|solid|space|space-around|space-between|space-evenly|spell-out|square|sRGB|stacked-fractions|start|static|status-bar|swap\n|step-end|step-start|sticky|stretch|strict|stroke|stroke-box|style|sub|subgrid|subpixel-antialiased|subtract|super|sw-resize|symbolic|table\n|table-caption|table-cell|table-column|table-column-group|table-footer-group|table-header-group|table-row|table-row-group|tabular-nums|tb|tb-rl\n|text|text-after-edge|text-before-edge|text-bottom|text-top|thick|thin|titling-caps|top|top-outside|touch|traditional|transparent|triangle\n|ultra-condensed|ultra-expanded|under|underline|unicase|unset|upleft|uppercase|upright|use-glyph-orientation|use-script|verso|vertical\n|vertical-ideographic|vertical-lr|vertical-rl|vertical-text|view-box|visible|visibleFill|visiblePainted|visibleStroke|w-resize|wait|wavy\n|weight|whitespace|wider|words|wrap|wrap-reverse|x|x-large|x-small|xx-large|xx-small|y|zero|zoom-in|zoom-out)\n(?![\\w-])",
            "name": "support.constant.property-value.css"
          },
          {
            "match": "(?xi) (?<![\\w-])\n(arabic-indic|armenian|bengali|cambodian|circle|cjk-decimal|cjk-earthly-branch|cjk-heavenly-stem|cjk-ideographic\n|decimal|decimal-leading-zero|devanagari|disc|disclosure-closed|disclosure-open|ethiopic-halehame-am\n|ethiopic-halehame-ti-e[rt]|ethiopic-numeric|georgian|gujarati|gurmukhi|hangul|hangul-consonant|hebrew\n|hiragana|hiragana-iroha|japanese-formal|japanese-informal|kannada|katakana|katakana-iroha|khmer\n|korean-hangul-formal|korean-hanja-formal|korean-hanja-informal|lao|lower-alpha|lower-armenian|lower-greek\n|lower-latin|lower-roman|malayalam|mongolian|myanmar|oriya|persian|simp-chinese-formal|simp-chinese-informal\n|square|tamil|telugu|thai|tibetan|trad-chinese-formal|trad-chinese-informal|upper-alpha|upper-armenian\n|upper-latin|upper-roman|urdu)\n(?![\\w-])",
            "name": "support.constant.property-value.list-style-type.css"
          },
          {
            "match": "(?<![\\w-])(?i:-(?:ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)|(?:mso|prince))-[a-zA-Z-]+",
            "name": "support.constant.vendored.property-value.css"
          },
          {
            "match": "(?<![\\w-])(?i:arial|century|comic|courier|garamond|georgia|helvetica|impact|lucida|symbol|system-ui|system|tahoma|times|trebuchet|ui-monospace|ui-rounded|ui-sans-serif|ui-serif|utopia|verdana|webdings|sans-serif|serif|monospace)(?![\\w-])",
            "name": "support.constant.font-name.css"
          }
        ]
      },
      "property-names": {
        "patterns": [
          {
            "match": "(?xi) (?<![\\w-])\n(?:\n  # Standard CSS\n  accent-color|additive-symbols|align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration\n  | animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|aspect-ratio|backdrop-filter\n  | backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image\n  | background-origin|background-position|background-position-[xy]|background-repeat|background-size|bleed|block-size|border\n  | border-block-end|border-block-end-color|border-block-end-style|border-block-end-width|border-block-start|border-block-start-color\n  | border-block-start-style|border-block-start-width|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius\n  | border-bottom-style|border-bottom-width|border-collapse|border-color|border-end-end-radius|border-end-start-radius|border-image\n  | border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-inline-end\n  | border-inline-end-color|border-inline-end-style|border-inline-end-width|border-inline-start|border-inline-start-color\n  | border-inline-start-style|border-inline-start-width|border-left|border-left-color|border-left-style|border-left-width\n  | border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-start-end-radius\n  | border-start-start-radius|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style\n  | border-top-width|border-width|bottom|box-decoration-break|box-shadow|box-sizing|break-after|break-before|break-inside|caption-side\n  | caret-color|clear|clip|clip-path|clip-rule|color|color-adjust|color-interpolation-filters|color-scheme|column-count|column-fill|column-gap\n  | column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|contain|container|container-name|container-type|content|counter-increment\n  | counter-reset|cursor|direction|display|empty-cells|enable-background|fallback|fill|fill-opacity|fill-rule|filter|flex|flex-basis\n  | flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|flood-color|flood-opacity|font|font-display|font-family\n  | font-feature-settings|font-kerning|font-language-override|font-optical-sizing|font-size|font-size-adjust|font-stretch\n  | font-style|font-synthesis|font-variant|font-variant-alternates|font-variant-caps|font-variant-east-asian|font-variant-ligatures\n  | font-variant-numeric|font-variant-position|font-variation-settings|font-weight|gap|glyph-orientation-horizontal|glyph-orientation-vertical\n  | grid|grid-area|grid-auto-columns|grid-auto-flow|grid-auto-rows|grid-column|grid-column-end|grid-column-gap|grid-column-start\n  | grid-gap|grid-row|grid-row-end|grid-row-gap|grid-row-start|grid-template|grid-template-areas|grid-template-columns|grid-template-rows\n  | hanging-punctuation|height|hyphens|image-orientation|image-rendering|image-resolution|ime-mode|initial-letter|initial-letter-align\n  | inline-size|inset|inset-block|inset-block-end|inset-block-start|inset-inline|inset-inline-end|inset-inline-start|isolation\n  | justify-content|justify-items|justify-self|kerning|left|letter-spacing|lighting-color|line-break|line-clamp|line-height|list-style\n  | list-style-image|list-style-position|list-style-type|margin|margin-block|margin-block-end|margin-block-start|margin-bottom|margin-inline|margin-inline-end|margin-inline-start\n  | margin-left|margin-right|margin-top|marker-end|marker-mid|marker-start|marks|mask|mask-border|mask-border-mode|mask-border-outset\n  | mask-border-repeat|mask-border-slice|mask-border-source|mask-border-width|mask-clip|mask-composite|mask-image|mask-mode\n  | mask-origin|mask-position|mask-repeat|mask-size|mask-type|max-block-size|max-height|max-inline-size|max-lines|max-width\n  | max-zoom|min-block-size|min-height|min-inline-size|min-width|min-zoom|mix-blend-mode|negative|object-fit|object-position\n  | offset|offset-anchor|offset-distance|offset-path|offset-position|offset-rotation|opacity|order|orientation|orphans\n  | outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-anchor|overflow-block|overflow-inline\n  | overflow-wrap|overflow-[xy]|overscroll-behavior|overscroll-behavior-block|overscroll-behavior-inline|overscroll-behavior-[xy]\n  | pad|padding|padding-block|padding-block-end|padding-block-start|padding-bottom|padding-inline|padding-inline-end|padding-inline-start|padding-left\n  | padding-right|padding-top|page-break-after|page-break-before|page-break-inside|paint-order|perspective|perspective-origin\n  | place-content|place-items|place-self|pointer-events|position|prefix|quotes|range|resize|right|rotate|row-gap|ruby-align\n  | ruby-merge|ruby-position|scale|scroll-behavior|scroll-margin|scroll-margin-block|scroll-margin-block-end|scroll-margin-block-start\n  | scroll-margin-bottom|scroll-margin-inline|scroll-margin-inline-end|scroll-margin-inline-start|scroll-margin-left|scroll-margin-right\n  | scroll-margin-top|scroll-padding|scroll-padding-block|scroll-padding-block-end|scroll-padding-block-start|scroll-padding-bottom\n  | scroll-padding-inline|scroll-padding-inline-end|scroll-padding-inline-start|scroll-padding-left|scroll-padding-right\n  | scroll-padding-top|scroll-snap-align|scroll-snap-coordinate|scroll-snap-destination|scroll-snap-stop|scroll-snap-type\n  | scrollbar-color|scrollbar-gutter|scrollbar-width|shape-image-threshold|shape-margin|shape-outside|shape-rendering|size\n  | speak-as|src|stop-color|stop-opacity|stroke|stroke-dasharray|stroke-dashoffset|stroke-linecap|stroke-linejoin|stroke-miterlimit\n  | stroke-opacity|stroke-width|suffix|symbols|system|tab-size|table-layout|text-align|text-align-last|text-anchor|text-combine-upright\n  | text-decoration|text-decoration-color|text-decoration-line|text-decoration-skip|text-decoration-skip-ink|text-decoration-style|text-decoration-thickness\n  | text-emphasis|text-emphasis-color|text-emphasis-position|text-emphasis-style|text-indent|text-justify|text-orientation\n  | text-overflow|text-rendering|text-shadow|text-size-adjust|text-transform|text-underline-offset|text-underline-position|top|touch-action|transform\n  | transform-box|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function\n  | translate|unicode-bidi|unicode-range|user-select|user-zoom|vertical-align|visibility|white-space|widows|width|will-change\n  | word-break|word-spacing|word-wrap|writing-mode|z-index|zoom\n\n  # SVG attributes\n  | alignment-baseline|baseline-shift|clip-rule|color-interpolation|color-interpolation-filters|color-profile\n  | color-rendering|cx|cy|dominant-baseline|enable-background|fill|fill-opacity|fill-rule|flood-color|flood-opacity\n  | glyph-orientation-horizontal|glyph-orientation-vertical|height|kerning|lighting-color|marker-end|marker-mid\n  | marker-start|r|rx|ry|shape-rendering|stop-color|stop-opacity|stroke|stroke-dasharray|stroke-dashoffset|stroke-linecap\n  | stroke-linejoin|stroke-miterlimit|stroke-opacity|stroke-width|text-anchor|width|x|y\n\n  # Not listed on MDN; presumably deprecated\n  | adjust|after|align|align-last|alignment|alignment-adjust|appearance|attachment|azimuth|background-break\n  | balance|baseline|before|bidi|binding|bookmark|bookmark-label|bookmark-level|bookmark-target|border-length\n  | bottom-color|bottom-left-radius|bottom-right-radius|bottom-style|bottom-width|box|box-align|box-direction\n  | box-flex|box-flex-group|box-lines|box-ordinal-group|box-orient|box-pack|break|character|collapse|column\n  | column-break-after|column-break-before|count|counter|crop|cue|cue-after|cue-before|decoration|decoration-break\n  | delay|display-model|display-role|down|drop|drop-initial-after-adjust|drop-initial-after-align|drop-initial-before-adjust\n  | drop-initial-before-align|drop-initial-size|drop-initial-value|duration|elevation|emphasis|family|fit|fit-position\n  | flex-group|float-offset|gap|grid-columns|grid-rows|hanging-punctuation|header|hyphenate|hyphenate-after|hyphenate-before\n  | hyphenate-character|hyphenate-lines|hyphenate-resource|icon|image|increment|indent|index|initial-after-adjust\n  | initial-after-align|initial-before-adjust|initial-before-align|initial-size|initial-value|inline-box-align|iteration-count\n  | justify|label|left-color|left-style|left-width|length|level|line|line-stacking|line-stacking-ruby|line-stacking-shift\n  | line-stacking-strategy|lines|list|mark|mark-after|mark-before|marks|marquee|marquee-direction|marquee-play-count|marquee-speed\n  | marquee-style|max|min|model|move-to|name|nav|nav-down|nav-index|nav-left|nav-right|nav-up|new|numeral|offset|ordinal-group\n  | orient|origin|overflow-style|overhang|pack|page|page-policy|pause|pause-after|pause-before|phonemes|pitch|pitch-range\n  | play-count|play-during|play-state|point|presentation|presentation-level|profile|property|punctuation|punctuation-trim\n  | radius|rate|rendering-intent|repeat|replace|reset|resolution|resource|respond-to|rest|rest-after|rest-before|richness\n  | right-color|right-style|right-width|role|rotation|rotation-point|rows|ruby|ruby-overhang|ruby-span|rule|rule-color\n  | rule-style|rule-width|shadow|size|size-adjust|sizing|space|space-collapse|spacing|span|speak|speak-header|speak-numeral\n  | speak-punctuation|speech|speech-rate|speed|stacking|stacking-ruby|stacking-shift|stacking-strategy|stress|stretch\n  | string-set|style|style-image|style-position|style-type|target|target-name|target-new|target-position|text|text-height\n  | text-justify|text-outline|text-replace|text-wrap|timing-function|top-color|top-left-radius|top-right-radius|top-style\n  | top-width|trim|unicode|up|user-select|variant|voice|voice-balance|voice-duration|voice-family|voice-pitch|voice-pitch-range\n  | voice-rate|voice-stress|voice-volume|volume|weight|white|white-space-collapse|word|wrap\n)\n(?![\\w-])",
            "name": "support.type.property-name.css"
          },
          {
            "match": "(?<![\\w-])(?i:-(?:ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)|(?:mso|prince))-[a-zA-Z-]+",
            "name": "support.type.vendored.property-name.css"
          }
        ]
      },
      "property-values": {
        "patterns": [
          {
            "include": "#commas"
          },
          {
            "include": "#comment-block"
          },
          {
            "include": "#escapes"
          },
          {
            "include": "#functions"
          },
          {
            "include": "#property-keywords"
          },
          {
            "include": "#unicode-range"
          },
          {
            "include": "#numeric-values"
          },
          {
            "include": "#color-keywords"
          },
          {
            "include": "#string"
          },
          {
            "match": "!\\s*important(?![\\w-])",
            "name": "keyword.other.important.css"
          }
        ]
      },
      "pseudo-classes": {
        "captures": {
          "1": {
            "name": "punctuation.definition.entity.css"
          },
          "2": {
            "name": "invalid.illegal.colon.css"
          }
        },
        "match": "(?xi)\n(:)(:*)\n(?: active|any-link|checked|default|disabled|empty|enabled|first\n  | (?:first|last|only)-(?:child|of-type)|focus|focus-visible|focus-within|fullscreen|host|hover\n  | in-range|indeterminate|invalid|left|link|optional|out-of-range\n  | read-only|read-write|required|right|root|scope|target|unresolved\n  | valid|visited\n)(?![\\w-]|\\s*[;}])",
        "name": "entity.other.attribute-name.pseudo-class.css"
      },
      "pseudo-elements": {
        "captures": {
          "1": {
            "name": "punctuation.definition.entity.css"
          },
          "2": {
            "name": "punctuation.definition.entity.css"
          }
        },
        "match": "(?xi)\n(?:\n  (::?)                       # Elements using both : and :: notation\n  (?: after\n    | before\n    | first-letter\n    | first-line\n    | (?:-(?:ah|apple|atsc|epub|hp|khtml|moz\n            |ms|o|rim|ro|tc|wap|webkit|xv)\n        | (?:mso|prince))\n      -[a-z-]+\n  )\n  |\n  (::)                        # Double-colon only\n  (?: backdrop\n    | content\n    | grammar-error\n    | marker\n    | placeholder\n    | selection\n    | shadow\n    | spelling-error\n  )\n)\n(?![\\w-]|\\s*[;}])",
        "name": "entity.other.attribute-name.pseudo-element.css"
      },
      "rule-list": {
        "begin": "{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.property-list.begin.bracket.curly.css"
          }
        },
        "end": "}",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.property-list.end.bracket.curly.css"
          }
        },
        "name": "meta.property-list.css",
        "patterns": [
          {
            "include": "#rule-list-innards"
          }
        ]
      },
      "rule-list-innards": {
        "patterns": [
          {
            "include": "#comment-block"
          },
          {
            "include": "#escapes"
          },
          {
            "include": "#font-features"
          },
          {
            "match": "(?<![\\w-])--(?:[-a-zA-Z_]|[^\\x00-\\x7F])(?:[-a-zA-Z0-9_]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))*",
            "name": "variable.css"
          },
          {
            "begin": "(?<![-a-zA-Z])(?=[-a-zA-Z])",
            "end": "$|(?![-a-zA-Z])",
            "name": "meta.property-name.css",
            "patterns": [
              {
                "include": "#property-names"
              }
            ]
          },
          {
            "begin": "(:)\\s*",
            "beginCaptures": {
              "1": {
                "name": "punctuation.separator.key-value.css"
              }
            },
            "contentName": "meta.property-value.css",
            "end": "\\s*(;)|\\s*(?=}|\\))",
            "endCaptures": {
              "1": {
                "name": "punctuation.terminator.rule.css"
              }
            },
            "patterns": [
              {
                "include": "#comment-block"
              },
              {
                "include": "#property-values"
              }
            ]
          },
          {
            "match": ";",
            "name": "punctuation.terminator.rule.css"
          }
        ]
      },
      "selector": {
        "begin": "(?=(?:\\|)?(?:[-\\[:.*\\#a-zA-Z_]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.)))",
        "end": "(?=\\s*[/@{)])",
        "name": "meta.selector.css",
        "patterns": [
          {
            "include": "#selector-innards"
          }
        ]
      },
      "selector-innards": {
        "patterns": [
          {
            "include": "#comment-block"
          },
          {
            "include": "#commas"
          },
          {
            "include": "#escapes"
          },
          {
            "include": "#combinators"
          },
          {
            "captures": {
              "1": {
                "name": "entity.other.namespace-prefix.css"
              },
              "2": {
                "name": "punctuation.separator.css"
              }
            },
            "match": "(?:^|(?<=[\\s,(};]))(?![-\\w*]+\\|(?![-\\[:.*\\#a-zA-Z_]|[^\\x00-\\x7F]))((?:[-a-zA-Z_]|[^\\x00-\\x7F])(?:[-a-zA-Z0-9_]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))*|\\*)?(\\|)"
          },
          {
            "include": "#tag-names"
          },
          {
            "match": "\\*",
            "name": "entity.name.tag.wildcard.css"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.entity.css"
              },
              "2": {
                "patterns": [
                  {
                    "include": "#escapes"
                  }
                ]
              }
            },
            "match": "(?<![@\\w-])([.\\#])((?:-?[0-9]|-(?=$|[\\s,.\\#)\\[:{>+~|]|/\\*)|(?:[-a-zA-Z_0-9]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))*(?:[!\"'%&(*;<?@^`|\\]}]|/(?!\\*))+)(?:[-a-zA-Z_0-9]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))*)",
            "name": "invalid.illegal.bad-identifier.css"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.entity.css"
              },
              "2": {
                "patterns": [
                  {
                    "include": "#escapes"
                  }
                ]
              }
            },
            "match": "(\\.)((?:[-a-zA-Z_0-9]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+)(?=$|[\\s,.\\#)\\[:{>+~|]|/\\*)",
            "name": "entity.other.attribute-name.class.css"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.entity.css"
              },
              "2": {
                "patterns": [
                  {
                    "include": "#escapes"
                  }
                ]
              }
            },
            "match": "(\\#)(-?(?![0-9])(?:[-a-zA-Z0-9_]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+)(?=$|[\\s,.\\#)\\[:{>+~|]|/\\*)",
            "name": "entity.other.attribute-name.id.css"
          },
          {
            "begin": "\\[",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.entity.begin.bracket.square.css"
              }
            },
            "end": "\\]",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.entity.end.bracket.square.css"
              }
            },
            "name": "meta.attribute-selector.css",
            "patterns": [
              {
                "include": "#comment-block"
              },
              {
                "include": "#string"
              },
              {
                "captures": {
                  "1": {
                    "name": "storage.modifier.ignore-case.css"
                  }
                },
                "match": "(?<=[\"'\\s]|^|\\*/)\\s*([iI])\\s*(?=[\\s\\]]|/\\*|$)"
              },
              {
                "captures": {
                  "1": {
                    "name": "string.unquoted.attribute-value.css",
                    "patterns": [
                      {
                        "include": "#escapes"
                      }
                    ]
                  }
                },
                "match": "(?<==)\\s*((?!/\\*)(?:[^\\\\\"'\\s\\]]|\\\\.)+)"
              },
              {
                "include": "#escapes"
              },
              {
                "match": "[~|^$*]?=",
                "name": "keyword.operator.pattern.css"
              },
              {
                "match": "\\|",
                "name": "punctuation.separator.css"
              },
              {
                "captures": {
                  "1": {
                    "name": "entity.other.namespace-prefix.css",
                    "patterns": [
                      {
                        "include": "#escapes"
                      }
                    ]
                  }
                },
                "match": "(-?(?!\\d)(?:[\\w-]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+|\\*)(?=\\|(?!\\s|=|$|\\])(?:-?(?!\\d)|[\\\\\\w-]|[^\\x00-\\x7F]))"
              },
              {
                "captures": {
                  "1": {
                    "name": "entity.other.attribute-name.css",
                    "patterns": [
                      {
                        "include": "#escapes"
                      }
                    ]
                  }
                },
                "match": "(-?(?!\\d)(?>[\\w-]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+)\\s*(?=[~|^\\]$*=]|/\\*)"
              }
            ]
          },
          {
            "include": "#pseudo-classes"
          },
          {
            "include": "#pseudo-elements"
          },
          {
            "include": "#functional-pseudo-classes"
          },
          {
            "match": "(?<![@\\w-])(?=[a-z]\\w*-)(?:(?![A-Z])[\\w-])+(?![(\\w-])",
            "name": "entity.name.tag.custom.css"
          }
        ]
      },
      "string": {
        "patterns": [
          {
            "begin": "\"",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.css"
              }
            },
            "end": "\"|(?<!\\\\)(?=$|\\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.css"
              }
            },
            "name": "string.quoted.double.css",
            "patterns": [
              {
                "begin": "(?:\\G|^)(?=(?:[^\\\\\"]|\\\\.)+$)",
                "end": "$",
                "name": "invalid.illegal.unclosed.string.css",
                "patterns": [
                  {
                    "include": "#escapes"
                  }
                ]
              },
              {
                "include": "#escapes"
              }
            ]
          },
          {
            "begin": "'",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.css"
              }
            },
            "end": "'|(?<!\\\\)(?=$|\\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.css"
              }
            },
            "name": "string.quoted.single.css",
            "patterns": [
              {
                "begin": "(?:\\G|^)(?=(?:[^\\\\']|\\\\.)+$)",
                "end": "$",
                "name": "invalid.illegal.unclosed.string.css",
                "patterns": [
                  {
                    "include": "#escapes"
                  }
                ]
              },
              {
                "include": "#escapes"
              }
            ]
          }
        ]
      },
      "tag-names": {
        "match": "(?xi) (?<![\\w:-])\n(?:\n    # HTML\n    a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdi|bdo|bgsound\n  | big|blink|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|command\n  | content|data|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|element|em|embed|fieldset\n  | figcaption|figure|font|footer|form|frame|frameset|h[1-6]|head|header|hgroup|hr|html|i\n  | iframe|image|img|input|ins|isindex|kbd|keygen|label|legend|li|link|listing|main|map|mark\n  | marquee|math|menu|menuitem|meta|meter|multicol|nav|nextid|nobr|noembed|noframes|noscript\n  | object|ol|optgroup|option|output|p|param|picture|plaintext|pre|progress|q|rb|rp|rt|rtc\n  | ruby|s|samp|script|section|select|shadow|slot|small|source|spacer|span|strike|strong\n  | style|sub|summary|sup|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr\n  | track|tt|u|ul|var|video|wbr|xmp\n\n  # SVG\n  | altGlyph|altGlyphDef|altGlyphItem|animate|animateColor|animateMotion|animateTransform\n  | circle|clipPath|color-profile|cursor|defs|desc|discard|ellipse|feBlend|feColorMatrix\n  | feComponentTransfer|feComposite|feConvolveMatrix|feDiffuseLighting|feDisplacementMap\n  | feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur\n  | feImage|feMerge|feMergeNode|feMorphology|feOffset|fePointLight|feSpecularLighting\n  | feSpotLight|feTile|feTurbulence|filter|font-face|font-face-format|font-face-name\n  | font-face-src|font-face-uri|foreignObject|g|glyph|glyphRef|hatch|hatchpath|hkern\n  | line|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|metadata\n  | missing-glyph|mpath|path|pattern|polygon|polyline|radialGradient|rect|set|solidcolor\n  | stop|svg|switch|symbol|text|textPath|tref|tspan|use|view|vkern\n\n  # MathML\n  | annotation|annotation-xml|maction|maligngroup|malignmark|math|menclose|merror|mfenced\n  | mfrac|mglyph|mi|mlabeledtr|mlongdiv|mmultiscripts|mn|mo|mover|mpadded|mphantom|mroot\n  | mrow|ms|mscarries|mscarry|msgroup|msline|mspace|msqrt|msrow|mstack|mstyle|msub|msubsup\n  | msup|mtable|mtd|mtext|mtr|munder|munderover|semantics\n)\n(?=[+~>\\s,.\\#|){:\\[]|/\\*|$)",
        "name": "entity.name.tag.css"
      },
      "unicode-range": {
        "captures": {
          "0": {
            "name": "constant.other.unicode-range.css"
          },
          "1": {
            "name": "punctuation.separator.dash.unicode-range.css"
          }
        },
        "match": "(?<![\\w-])[Uu]\\+[0-9A-Fa-f?]{1,6}(?:(-)[0-9A-Fa-f]{1,6})?(?![\\w-])"
      },
      "url": {
        "begin": "(?i)(?<![\\w@-])(url)(\\()",
        "beginCaptures": {
          "1": {
            "name": "support.function.url.css"
          },
          "2": {
            "name": "punctuation.section.function.begin.bracket.round.css"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.function.end.bracket.round.css"
          }
        },
        "name": "meta.function.url.css",
        "patterns": [
          {
            "match": "[^'\")\\s]+",
            "name": "variable.parameter.url.css"
          },
          {
            "include": "#string"
          },
          {
            "include": "#comment-block"
          },
          {
            "include": "#escapes"
          }
        ]
      }
    },
    "scopeName": "source.css"
  },
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
  },
  {
    "displayName": "CSS",
    "name": "css",
    "patterns": [
      {
        "include": "#comment-block"
      },
      {
        "include": "#escapes"
      },
      {
        "include": "#combinators"
      },
      {
        "include": "#selector"
      },
      {
        "include": "#at-rules"
      },
      {
        "include": "#rule-list"
      }
    ],
    "repository": {
      "at-rules": {
        "patterns": [
          {
            "begin": "\\A(?:\\xEF\\xBB\\xBF)?(?i:(?=\\s*@charset\\b))",
            "end": ";|(?=$)",
            "endCaptures": {
              "0": {
                "name": "punctuation.terminator.rule.css"
              }
            },
            "name": "meta.at-rule.charset.css",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "invalid.illegal.not-lowercase.charset.css"
                  },
                  "2": {
                    "name": "invalid.illegal.leading-whitespace.charset.css"
                  },
                  "3": {
                    "name": "invalid.illegal.no-whitespace.charset.css"
                  },
                  "4": {
                    "name": "invalid.illegal.whitespace.charset.css"
                  },
                  "5": {
                    "name": "invalid.illegal.not-double-quoted.charset.css"
                  },
                  "6": {
                    "name": "invalid.illegal.unclosed-string.charset.css"
                  },
                  "7": {
                    "name": "invalid.illegal.unexpected-characters.charset.css"
                  }
                },
                "match": "\\G((?!@charset)@\\w+)|\\G(\\s+)|(@charset\\S[^;]*)|(?<=@charset)(\\x20{2,}|\\t+)|(?<=@charset\\x20)([^\";]+)|(\"[^\"]+$)|(?<=\")([^;]+)"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.at-rule.charset.css"
                  },
                  "2": {
                    "name": "punctuation.definition.keyword.css"
                  }
                },
                "match": "((@)charset)(?=\\s)"
              },
              {
                "begin": "\"",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.css"
                  }
                },
                "end": "\"|$",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.css"
                  }
                },
                "name": "string.quoted.double.css",
                "patterns": [
                  {
                    "begin": "(?:\\G|^)(?=(?:[^\"])+$)",
                    "end": "$",
                    "name": "invalid.illegal.unclosed.string.css"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?i)((@)import)(?:\\s+|$|(?=['\"]|/\\*))",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.at-rule.import.css"
              },
              "2": {
                "name": "punctuation.definition.keyword.css"
              }
            },
            "end": ";",
            "endCaptures": {
              "0": {
                "name": "punctuation.terminator.rule.css"
              }
            },
            "name": "meta.at-rule.import.css",
            "patterns": [
              {
                "begin": "\\G\\s*(?=/\\*)",
                "end": "(?<=\\*/)\\s*",
                "patterns": [
                  {
                    "include": "#comment-block"
                  }
                ]
              },
              {
                "include": "#string"
              },
              {
                "include": "#url"
              },
              {
                "include": "#media-query-list"
              }
            ]
          },
          {
            "begin": "(?i)((@)font-face)(?=\\s*|{|/\\*|$)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.at-rule.font-face.css"
              },
              "2": {
                "name": "punctuation.definition.keyword.css"
              }
            },
            "end": "(?!\\G)",
            "name": "meta.at-rule.font-face.css",
            "patterns": [
              {
                "include": "#comment-block"
              },
              {
                "include": "#escapes"
              },
              {
                "include": "#rule-list"
              }
            ]
          },
          {
            "begin": "(?i)(@)page(?=[\\s:{]|/\\*|$)",
            "captures": {
              "0": {
                "name": "keyword.control.at-rule.page.css"
              },
              "1": {
                "name": "punctuation.definition.keyword.css"
              }
            },
            "end": "(?=\\s*($|[:{;]))",
            "name": "meta.at-rule.page.css",
            "patterns": [
              {
                "include": "#rule-list"
              }
            ]
          },
          {
            "begin": "(?i)(?=@media(\\s|\\(|/\\*|$))",
            "end": "(?<=})(?!\\G)",
            "patterns": [
              {
                "begin": "(?i)\\G(@)media",
                "beginCaptures": {
                  "0": {
                    "name": "keyword.control.at-rule.media.css"
                  },
                  "1": {
                    "name": "punctuation.definition.keyword.css"
                  }
                },
                "end": "(?=\\s*[{;])",
                "name": "meta.at-rule.media.header.css",
                "patterns": [
                  {
                    "include": "#media-query-list"
                  }
                ]
              },
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.media.begin.bracket.curly.css"
                  }
                },
                "end": "}",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.media.end.bracket.curly.css"
                  }
                },
                "name": "meta.at-rule.media.body.css",
                "patterns": [
                  {
                    "include": "$self"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?i)(?=@counter-style([\\s'\"{;]|/\\*|$))",
            "end": "(?<=})(?!\\G)",
            "patterns": [
              {
                "begin": "(?i)\\G(@)counter-style",
                "beginCaptures": {
                  "0": {
                    "name": "keyword.control.at-rule.counter-style.css"
                  },
                  "1": {
                    "name": "punctuation.definition.keyword.css"
                  }
                },
                "end": "(?=\\s*{)",
                "name": "meta.at-rule.counter-style.header.css",
                "patterns": [
                  {
                    "include": "#comment-block"
                  },
                  {
                    "include": "#escapes"
                  },
                  {
                    "captures": {
                      "0": {
                        "patterns": [
                          {
                            "include": "#escapes"
                          }
                        ]
                      }
                    },
                    "match": "(?:[-a-zA-Z_]|[^\\x00-\\x7F])(?:[-a-zA-Z0-9_]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))*",
                    "name": "variable.parameter.style-name.css"
                  }
                ]
              },
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.property-list.begin.bracket.curly.css"
                  }
                },
                "end": "}",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.property-list.end.bracket.curly.css"
                  }
                },
                "name": "meta.at-rule.counter-style.body.css",
                "patterns": [
                  {
                    "include": "#comment-block"
                  },
                  {
                    "include": "#escapes"
                  },
                  {
                    "include": "#rule-list-innards"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?i)(?=@document([\\s'\"{;]|/\\*|$))",
            "end": "(?<=})(?!\\G)",
            "patterns": [
              {
                "begin": "(?i)\\G(@)document",
                "beginCaptures": {
                  "0": {
                    "name": "keyword.control.at-rule.document.css"
                  },
                  "1": {
                    "name": "punctuation.definition.keyword.css"
                  }
                },
                "end": "(?=\\s*[{;])",
                "name": "meta.at-rule.document.header.css",
                "patterns": [
                  {
                    "begin": "(?i)(?<![\\w-])(url-prefix|domain|regexp)(\\()",
                    "beginCaptures": {
                      "1": {
                        "name": "support.function.document-rule.css"
                      },
                      "2": {
                        "name": "punctuation.section.function.begin.bracket.round.css"
                      }
                    },
                    "end": "\\)",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.section.function.end.bracket.round.css"
                      }
                    },
                    "name": "meta.function.document-rule.css",
                    "patterns": [
                      {
                        "include": "#string"
                      },
                      {
                        "include": "#comment-block"
                      },
                      {
                        "include": "#escapes"
                      },
                      {
                        "match": "[^'\")\\s]+",
                        "name": "variable.parameter.document-rule.css"
                      }
                    ]
                  },
                  {
                    "include": "#url"
                  },
                  {
                    "include": "#commas"
                  },
                  {
                    "include": "#comment-block"
                  },
                  {
                    "include": "#escapes"
                  }
                ]
              },
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.document.begin.bracket.curly.css"
                  }
                },
                "end": "}",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.document.end.bracket.curly.css"
                  }
                },
                "name": "meta.at-rule.document.body.css",
                "patterns": [
                  {
                    "include": "$self"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?i)(?=@(?:-(?:webkit|moz|o|ms)-)?keyframes([\\s'\"{;]|/\\*|$))",
            "end": "(?<=})(?!\\G)",
            "patterns": [
              {
                "begin": "(?i)\\G(@)(?:-(?:webkit|moz|o|ms)-)?keyframes",
                "beginCaptures": {
                  "0": {
                    "name": "keyword.control.at-rule.keyframes.css"
                  },
                  "1": {
                    "name": "punctuation.definition.keyword.css"
                  }
                },
                "end": "(?=\\s*{)",
                "name": "meta.at-rule.keyframes.header.css",
                "patterns": [
                  {
                    "include": "#comment-block"
                  },
                  {
                    "include": "#escapes"
                  },
                  {
                    "captures": {
                      "0": {
                        "patterns": [
                          {
                            "include": "#escapes"
                          }
                        ]
                      }
                    },
                    "match": "(?:[-a-zA-Z_]|[^\\x00-\\x7F])(?:[-a-zA-Z0-9_]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))*",
                    "name": "variable.parameter.keyframe-list.css"
                  }
                ]
              },
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.keyframes.begin.bracket.curly.css"
                  }
                },
                "end": "}",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.keyframes.end.bracket.curly.css"
                  }
                },
                "name": "meta.at-rule.keyframes.body.css",
                "patterns": [
                  {
                    "include": "#comment-block"
                  },
                  {
                    "include": "#escapes"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "entity.other.keyframe-offset.css"
                      },
                      "2": {
                        "name": "entity.other.keyframe-offset.percentage.css"
                      }
                    },
                    "match": "(?xi)\n(?<![\\w-]) (from|to) (?![\\w-])         # Keywords for 0% | 100%\n|\n([-+]?(?:\\d+(?:\\.\\d+)?|\\.\\d+)%)     # Percentile value"
                  },
                  {
                    "include": "#rule-list"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?i)(?=@supports(\\s|\\(|/\\*|$))",
            "end": "(?<=})(?!\\G)|(?=;)",
            "patterns": [
              {
                "begin": "(?i)\\G(@)supports",
                "beginCaptures": {
                  "0": {
                    "name": "keyword.control.at-rule.supports.css"
                  },
                  "1": {
                    "name": "punctuation.definition.keyword.css"
                  }
                },
                "end": "(?=\\s*[{;])",
                "name": "meta.at-rule.supports.header.css",
                "patterns": [
                  {
                    "include": "#feature-query-operators"
                  },
                  {
                    "include": "#feature-query"
                  },
                  {
                    "include": "#comment-block"
                  },
                  {
                    "include": "#escapes"
                  }
                ]
              },
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.supports.begin.bracket.curly.css"
                  }
                },
                "end": "}",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.supports.end.bracket.curly.css"
                  }
                },
                "name": "meta.at-rule.supports.body.css",
                "patterns": [
                  {
                    "include": "$self"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?i)((@)(-(ms|o)-)?viewport)(?=[\\s'\"{;]|/\\*|$)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.at-rule.viewport.css"
              },
              "2": {
                "name": "punctuation.definition.keyword.css"
              }
            },
            "end": "(?=\\s*[@{;])",
            "name": "meta.at-rule.viewport.css",
            "patterns": [
              {
                "include": "#comment-block"
              },
              {
                "include": "#escapes"
              }
            ]
          },
          {
            "begin": "(?i)((@)font-feature-values)(?=[\\s'\"{;]|/\\*|$)\\s*",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.at-rule.font-feature-values.css"
              },
              "2": {
                "name": "punctuation.definition.keyword.css"
              }
            },
            "contentName": "variable.parameter.font-name.css",
            "end": "(?=\\s*[@{;])",
            "name": "meta.at-rule.font-features.css",
            "patterns": [
              {
                "include": "#comment-block"
              },
              {
                "include": "#escapes"
              }
            ]
          },
          {
            "include": "#font-features"
          },
          {
            "begin": "(?i)((@)namespace)(?=[\\s'\";]|/\\*|$)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.at-rule.namespace.css"
              },
              "2": {
                "name": "punctuation.definition.keyword.css"
              }
            },
            "end": ";|(?=[@{])",
            "endCaptures": {
              "0": {
                "name": "punctuation.terminator.rule.css"
              }
            },
            "name": "meta.at-rule.namespace.css",
            "patterns": [
              {
                "include": "#url"
              },
              {
                "captures": {
                  "1": {
                    "patterns": [
                      {
                        "include": "#comment-block"
                      }
                    ]
                  },
                  "2": {
                    "name": "entity.name.function.namespace-prefix.css",
                    "patterns": [
                      {
                        "include": "#escapes"
                      }
                    ]
                  }
                },
                "match": "(?xi)\n(?:\\G|^|(?<=\\s))\n(?=\n  (?<=\\s|^)                             # Starts with whitespace\n  (?:[-a-zA-Z_]|[^\\x00-\\x7F])          # Then a valid identifier character\n  |\n  \\s*                                   # Possible adjoining whitespace\n  /\\*(?:[^*]|\\*[^/])*\\*/              # Injected comment\n)\n(.*?)                                    # Grouped to embed #comment-block\n(\n  (?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter\n  (?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier\n    |\\\\(?:[0-9a-fA-F]{1,6}|.)\n  )*\n)"
              },
              {
                "include": "#comment-block"
              },
              {
                "include": "#escapes"
              },
              {
                "include": "#string"
              }
            ]
          },
          {
            "begin": "(?i)(?=@[\\w-]+[^;]+;s*$)",
            "end": "(?<=;)(?!\\G)",
            "patterns": [
              {
                "begin": "(?i)\\G(@)[\\w-]+",
                "beginCaptures": {
                  "0": {
                    "name": "keyword.control.at-rule.css"
                  },
                  "1": {
                    "name": "punctuation.definition.keyword.css"
                  }
                },
                "end": ";",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.terminator.rule.css"
                  }
                },
                "name": "meta.at-rule.header.css"
              }
            ]
          },
          {
            "begin": "(?i)(?=@[\\w-]+(\\s|\\(|{|/\\*|$))",
            "end": "(?<=})(?!\\G)",
            "patterns": [
              {
                "begin": "(?i)\\G(@)[\\w-]+",
                "beginCaptures": {
                  "0": {
                    "name": "keyword.control.at-rule.css"
                  },
                  "1": {
                    "name": "punctuation.definition.keyword.css"
                  }
                },
                "end": "(?=\\s*[{;])",
                "name": "meta.at-rule.header.css"
              },
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.begin.bracket.curly.css"
                  }
                },
                "end": "}",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.end.bracket.curly.css"
                  }
                },
                "name": "meta.at-rule.body.css",
                "patterns": [
                  {
                    "include": "$self"
                  }
                ]
              }
            ]
          }
        ]
      },
      "color-keywords": {
        "patterns": [
          {
            "match": "(?i)(?<![\\w-])(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)(?![\\w-])",
            "name": "support.constant.color.w3c-standard-color-name.css"
          },
          {
            "match": "(?xi) (?<![\\w-])\n(aliceblue|antiquewhite|aquamarine|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood\n|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan\n|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange\n|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise\n|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen\n|gainsboro|ghostwhite|gold|goldenrod|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki\n|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow\n|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray\n|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|magenta|mediumaquamarine|mediumblue\n|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise\n|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered\n|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum\n|powderblue|rebeccapurple|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell\n|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato\n|transparent|turquoise|violet|wheat|whitesmoke|yellowgreen)\n(?![\\w-])",
            "name": "support.constant.color.w3c-extended-color-name.css"
          },
          {
            "match": "(?i)(?<![\\w-])currentColor(?![\\w-])",
            "name": "support.constant.color.current.css"
          },
          {
            "match": "(?xi) (?<![\\w-])\n(ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow\n|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption\n|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow\n|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText)\n(?![\\w-])",
            "name": "invalid.deprecated.color.system.css"
          }
        ]
      },
      "combinators": {
        "patterns": [
          {
            "match": "/deep/|>>>",
            "name": "invalid.deprecated.combinator.css"
          },
          {
            "match": ">>|>|\\+|~",
            "name": "keyword.operator.combinator.css"
          }
        ]
      },
      "commas": {
        "match": ",",
        "name": "punctuation.separator.list.comma.css"
      },
      "comment-block": {
        "begin": "/\\*",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.comment.begin.css"
          }
        },
        "end": "\\*/",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.comment.end.css"
          }
        },
        "name": "comment.block.css"
      },
      "escapes": {
        "patterns": [
          {
            "match": "\\\\[0-9a-fA-F]{1,6}",
            "name": "constant.character.escape.codepoint.css"
          },
          {
            "begin": "\\\\$\\s*",
            "end": "^(?<!\\G)",
            "name": "constant.character.escape.newline.css"
          },
          {
            "match": "\\\\.",
            "name": "constant.character.escape.css"
          }
        ]
      },
      "feature-query": {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.condition.begin.bracket.round.css"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.condition.end.bracket.round.css"
          }
        },
        "name": "meta.feature-query.css",
        "patterns": [
          {
            "include": "#feature-query-operators"
          },
          {
            "include": "#feature-query"
          }
        ]
      },
      "feature-query-operators": {
        "patterns": [
          {
            "match": "(?i)(?<=[\\s()]|^|\\*/)(and|not|or)(?=[\\s()]|/\\*|$)",
            "name": "keyword.operator.logical.feature.$1.css"
          },
          {
            "include": "#rule-list-innards"
          }
        ]
      },
      "font-features": {
        "begin": "(?xi)\n((@)(annotation|character-variant|ornaments|styleset|stylistic|swash))\n(?=[\\s@'\"{;]|/\\*|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.at-rule.${3:/downcase}.css"
          },
          "2": {
            "name": "punctuation.definition.keyword.css"
          }
        },
        "end": "(?<=})",
        "name": "meta.at-rule.${3:/downcase}.css",
        "patterns": [
          {
            "begin": "{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.property-list.begin.bracket.curly.css"
              }
            },
            "end": "}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.property-list.end.bracket.curly.css"
              }
            },
            "name": "meta.property-list.font-feature.css",
            "patterns": [
              {
                "captures": {
                  "0": {
                    "patterns": [
                      {
                        "include": "#escapes"
                      }
                    ]
                  }
                },
                "match": "(?:[-a-zA-Z_]|[^\\x00-\\x7F])(?:[-a-zA-Z0-9_]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))*",
                "name": "variable.font-feature.css"
              },
              {
                "include": "#rule-list-innards"
              }
            ]
          }
        ]
      },
      "functional-pseudo-classes": {
        "patterns": [
          {
            "begin": "(?i)((:)dir)(\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.other.attribute-name.pseudo-class.css"
              },
              "2": {
                "name": "punctuation.definition.entity.css"
              },
              "3": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "patterns": [
              {
                "include": "#comment-block"
              },
              {
                "include": "#escapes"
              },
              {
                "match": "(?i)(?<![\\w-])(ltr|rtl)(?![\\w-])",
                "name": "support.constant.text-direction.css"
              },
              {
                "include": "#property-values"
              }
            ]
          },
          {
            "begin": "(?i)((:)lang)(\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.other.attribute-name.pseudo-class.css"
              },
              "2": {
                "name": "punctuation.definition.entity.css"
              },
              "3": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "patterns": [
              {
                "match": "(?<=[(,\\s])[a-zA-Z]+(-[a-zA-Z0-9]*|\\\\(?:[0-9a-fA-F]{1,6}|.))*(?=[),\\s])",
                "name": "support.constant.language-range.css"
              },
              {
                "begin": "\"",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.css"
                  }
                },
                "end": "\"",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.css"
                  }
                },
                "name": "string.quoted.double.css",
                "patterns": [
                  {
                    "include": "#escapes"
                  },
                  {
                    "match": "(?<=[\"\\s])[a-zA-Z*]+(-[a-zA-Z0-9*]*)*(?=[\"\\s])",
                    "name": "support.constant.language-range.css"
                  }
                ]
              },
              {
                "begin": "'",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.css"
                  }
                },
                "end": "'",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.css"
                  }
                },
                "name": "string.quoted.single.css",
                "patterns": [
                  {
                    "include": "#escapes"
                  },
                  {
                    "match": "(?<=['\\s])[a-zA-Z*]+(-[a-zA-Z0-9*]*)*(?=['\\s])",
                    "name": "support.constant.language-range.css"
                  }
                ]
              },
              {
                "include": "#commas"
              }
            ]
          },
          {
            "begin": "(?i)((:)(?:not|has|matches|where|is))(\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.other.attribute-name.pseudo-class.css"
              },
              "2": {
                "name": "punctuation.definition.entity.css"
              },
              "3": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "patterns": [
              {
                "include": "#selector-innards"
              }
            ]
          },
          {
            "begin": "(?i)((:)nth-(?:last-)?(?:child|of-type))(\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.other.attribute-name.pseudo-class.css"
              },
              "2": {
                "name": "punctuation.definition.entity.css"
              },
              "3": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "patterns": [
              {
                "match": "(?i)[+-]?(\\d+n?|n)(\\s*[+-]\\s*\\d+)?",
                "name": "constant.numeric.css"
              },
              {
                "match": "(?i)even|odd",
                "name": "support.constant.parity.css"
              }
            ]
          }
        ]
      },
      "functions": {
        "patterns": [
          {
            "begin": "(?i)(?<![\\w-])(calc)(\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.calc.css"
              },
              "2": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "name": "meta.function.calc.css",
            "patterns": [
              {
                "match": "[*/]|(?<=\\s|^)[-+](?=\\s|$)",
                "name": "keyword.operator.arithmetic.css"
              },
              {
                "include": "#property-values"
              }
            ]
          },
          {
            "begin": "(?i)(?<![\\w-])(rgba?|rgb|hsla?|hsl|hwb|lab|oklab|lch|oklch|color)(\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.misc.css"
              },
              "2": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "name": "meta.function.color.css",
            "patterns": [
              {
                "include": "#property-values"
              }
            ]
          },
          {
            "begin": "(?xi) (?<![\\w-])\n(\n  (?:-webkit-|-moz-|-o-)?    # Accept prefixed/historical variants\n  (?:repeating-)?            # \"Repeating\"-type gradient\n  (?:linear|radial|conic)    # Shape\n  -gradient\n)\n(\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.gradient.css"
              },
              "2": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "name": "meta.function.gradient.css",
            "patterns": [
              {
                "match": "(?i)(?<![\\w-])(from|to|at|in|hue)(?![\\w-])",
                "name": "keyword.operator.gradient.css"
              },
              {
                "include": "#property-values"
              }
            ]
          },
          {
            "begin": "(?i)(?<![\\w-])(-webkit-gradient)(\\()",
            "beginCaptures": {
              "1": {
                "name": "invalid.deprecated.gradient.function.css"
              },
              "2": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "name": "meta.function.gradient.invalid.deprecated.gradient.css",
            "patterns": [
              {
                "begin": "(?i)(?<![\\w-])(from|to|color-stop)(\\()",
                "beginCaptures": {
                  "1": {
                    "name": "invalid.deprecated.function.css"
                  },
                  "2": {
                    "name": "punctuation.section.function.begin.bracket.round.css"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.function.end.bracket.round.css"
                  }
                },
                "patterns": [
                  {
                    "include": "#property-values"
                  }
                ]
              },
              {
                "include": "#property-values"
              }
            ]
          },
          {
            "begin": "(?xi) (?<![\\w-])\n(annotation|attr|blur|brightness|character-variant|clamp|contrast|counters?\n|cross-fade|drop-shadow|element|fit-content|format|grayscale|hue-rotate|color-mix\n|image-set|invert|local|max|min|minmax|opacity|ornaments|repeat|saturate|sepia\n|styleset|stylistic|swash|symbols\n|cos|sin|tan|acos|asin|atan|atan2|hypot|sqrt|pow|log|exp|abs|sign)\n(\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.misc.css"
              },
              "2": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "name": "meta.function.misc.css",
            "patterns": [
              {
                "match": "(?i)(?<=[,\\s\"]|\\*/|^)\\d+x(?=[\\s,\"')]|/\\*|$)",
                "name": "constant.numeric.other.density.css"
              },
              {
                "include": "#property-values"
              },
              {
                "match": "[^'\"),\\s]+",
                "name": "variable.parameter.misc.css"
              }
            ]
          },
          {
            "begin": "(?i)(?<![\\w-])(circle|ellipse|inset|polygon|rect)(\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.shape.css"
              },
              "2": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "name": "meta.function.shape.css",
            "patterns": [
              {
                "match": "(?i)(?<=\\s|^|\\*/)(at|round)(?=\\s|/\\*|$)",
                "name": "keyword.operator.shape.css"
              },
              {
                "include": "#property-values"
              }
            ]
          },
          {
            "begin": "(?i)(?<![\\w-])(cubic-bezier|steps)(\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.timing-function.css"
              },
              "2": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "name": "meta.function.timing-function.css",
            "patterns": [
              {
                "match": "(?i)(?<![\\w-])(start|end)(?=\\s*\\)|$)",
                "name": "support.constant.step-direction.css"
              },
              {
                "include": "#property-values"
              }
            ]
          },
          {
            "begin": "(?xi) (?<![\\w-])\n( (?:translate|scale|rotate)(?:[XYZ]|3D)?\n| matrix(?:3D)?\n| skew[XY]?\n| perspective\n)\n(\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.transform.css"
              },
              "2": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "patterns": [
              {
                "include": "#property-values"
              }
            ]
          },
          {
            "include": "#url"
          },
          {
            "begin": "(?i)(?<![\\w-])(var)(\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.misc.css"
              },
              "2": {
                "name": "punctuation.section.function.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.function.end.bracket.round.css"
              }
            },
            "name": "meta.function.variable.css",
            "patterns": [
              {
                "match": "--(?:[-a-zA-Z_]|[^\\x00-\\x7F])(?:[-a-zA-Z0-9_]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))*",
                "name": "variable.argument.css"
              },
              {
                "include": "#property-values"
              }
            ]
          }
        ]
      },
      "media-feature-keywords": {
        "match": "(?xi)\n(?<=^|\\s|:|\\*/)\n(?: portrait                  # Orientation\n  | landscape\n  | progressive               # Scan types\n  | interlace\n  | fullscreen                # Display modes\n  | standalone\n  | minimal-ui\n  | browser\n  | hover\n)\n(?=\\s|\\)|$)",
        "name": "support.constant.property-value.css"
      },
      "media-features": {
        "captures": {
          "1": {
            "name": "support.type.property-name.media.css"
          },
          "2": {
            "name": "support.type.property-name.media.css"
          },
          "3": {
            "name": "support.type.vendored.property-name.media.css"
          }
        },
        "match": "(?xi)\n(?<=^|\\s|\\(|\\*/)           # Preceded by whitespace, bracket or comment\n(?:\n  # Standardised features\n  (\n    (?:min-|max-)?            # Range features\n    (?: height\n      | width\n      | aspect-ratio\n      | color\n      | color-index\n      | monochrome\n      | resolution\n    )\n    | grid                    # Discrete features\n    | scan\n    | orientation\n    | display-mode\n    | hover\n  )\n  |\n  # Deprecated features\n  (\n    (?:min-|max-)?            # Deprecated in Media Queries 4\n    device-\n    (?: height\n      | width\n      | aspect-ratio\n    )\n  )\n  |\n  # Vendor extensions\n  (\n    (?:\n      # Spec-compliant syntax\n      [-_]\n      (?: webkit              # Webkit/Blink\n        | apple|khtml         # Webkit aliases\n        | epub                # ePub3\n        | moz                 # Gecko\n        | ms                  # Microsoft\n        | o                   # Presto (pre-Opera 15)\n        | xv|ah|rim|atsc|     # Less common vendors\n          hp|tc|wap|ro\n      )\n      |\n      # Non-standard prefixes\n      (?: mso                 # Microsoft Office\n        | prince              # YesLogic\n      )\n    )\n    -\n    [\\w-]+                   # Feature name\n    (?=                       # Terminates correctly\n      \\s*                    # Possible whitespace\n      (?:                     # Possible injected comment\n        /\\*\n        (?:[^*]|\\*[^/])*\n        \\*/\n      )?\n      \\s*\n      [:)]                    # Ends with a colon or closed bracket\n    )\n  )\n)\n(?=\\s|$|[><:=]|\\)|/\\*)     # Terminates cleanly"
      },
      "media-query": {
        "begin": "\\G",
        "end": "(?=\\s*[{;])",
        "patterns": [
          {
            "include": "#comment-block"
          },
          {
            "include": "#escapes"
          },
          {
            "include": "#media-types"
          },
          {
            "match": "(?i)(?<=\\s|^|,|\\*/)(only|not)(?=\\s|{|/\\*|$)",
            "name": "keyword.operator.logical.$1.media.css"
          },
          {
            "match": "(?i)(?<=\\s|^|\\*/|\\))and(?=\\s|/\\*|$)",
            "name": "keyword.operator.logical.and.media.css"
          },
          {
            "match": ",(?:(?:\\s*,)+|(?=\\s*[;){]))",
            "name": "invalid.illegal.comma.css"
          },
          {
            "include": "#commas"
          },
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.parameters.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.parameters.end.bracket.round.css"
              }
            },
            "patterns": [
              {
                "include": "#media-features"
              },
              {
                "include": "#media-feature-keywords"
              },
              {
                "match": ":",
                "name": "punctuation.separator.key-value.css"
              },
              {
                "match": ">=|<=|=|<|>",
                "name": "keyword.operator.comparison.css"
              },
              {
                "captures": {
                  "1": {
                    "name": "constant.numeric.css"
                  },
                  "2": {
                    "name": "keyword.operator.arithmetic.css"
                  },
                  "3": {
                    "name": "constant.numeric.css"
                  }
                },
                "match": "(\\d+)\\s*(/)\\s*(\\d+)",
                "name": "meta.ratio.css"
              },
              {
                "include": "#numeric-values"
              },
              {
                "include": "#comment-block"
              }
            ]
          }
        ]
      },
      "media-query-list": {
        "begin": "(?=\\s*[^{;])",
        "end": "(?=\\s*[{;])",
        "patterns": [
          {
            "include": "#media-query"
          }
        ]
      },
      "media-types": {
        "captures": {
          "1": {
            "name": "support.constant.media.css"
          },
          "2": {
            "name": "invalid.deprecated.constant.media.css"
          }
        },
        "match": "(?xi)\n(?<=^|\\s|,|\\*/)\n(?:\n  # Valid media types\n  (all|print|screen|speech)\n  |\n  # Deprecated in Media Queries 4: http://dev.w3.org/csswg/mediaqueries/#media-types\n  (aural|braille|embossed|handheld|projection|tty|tv)\n)\n(?=$|[{,\\s;]|/\\*)"
      },
      "numeric-values": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.constant.css"
              }
            },
            "match": "(#)(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\\b",
            "name": "constant.other.color.rgb-value.hex.css"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.other.unit.percentage.css"
              },
              "2": {
                "name": "keyword.other.unit.${2:/downcase}.css"
              }
            },
            "match": "(?xi) (?<![\\w-])\n[-+]?                               # Sign indicator\n\n(?:                                 # Numerals\n    [0-9]+ (?:\\.[0-9]+)?           # Integer/float with leading digits\n  | \\.[0-9]+                       # Float without leading digits\n)\n\n(?:                                 # Scientific notation\n  (?<=[0-9])                        # Exponent must follow a digit\n  E                                 # Exponent indicator\n  [-+]?                             # Possible sign indicator\n  [0-9]+                            # Exponent value\n)?\n\n(?:                                 # Possible unit for data-type:\n  (%)                               # - Percentage\n  | ( deg|grad|rad|turn             # - Angle\n    | Hz|kHz                        # - Frequency\n    | ch|cm|em|ex|fr|in|mm|mozmm|   # - Length\n      pc|pt|px|q|rem|rch|rex|rlh|\n      ic|ric|rcap|vh|vw|vb|vi|svh|\n      svw|svb|svi|dvh|dvw|dvb|dvi|\n      lvh|lvw|lvb|lvi|vmax|vmin|\n      cqw|cqi|cqh|cqb|cqmin|cqmax\n    | dpi|dpcm|dppx                 # - Resolution\n    | s|ms                          # - Time\n    )\n  \\b                               # Boundary checking intentionally lax to\n)?                                  # facilitate embedding in CSS-like grammars",
            "name": "constant.numeric.css"
          }
        ]
      },
      "property-keywords": {
        "patterns": [
          {
            "match": "(?xi) (?<![\\w-])\n(above|absolute|active|add|additive|after-edge|alias|all|all-petite-caps|all-scroll|all-small-caps|alpha|alphabetic|alternate|alternate-reverse\n|always|antialiased|auto|auto-fill|auto-fit|auto-pos|available|avoid|avoid-column|avoid-page|avoid-region|backwards|balance|baseline|before-edge|below|bevel\n|bidi-override|blink|block|block-axis|block-start|block-end|bold|bolder|border|border-box|both|bottom|bottom-outside|break-all|break-word|bullets\n|butt|capitalize|caption|cell|center|central|char|circle|clip|clone|close-quote|closest-corner|closest-side|col-resize|collapse|color|color-burn\n|color-dodge|column|column-reverse|common-ligatures|compact|condensed|contain|content|content-box|contents|context-menu|contextual|copy|cover\n|crisp-edges|crispEdges|crosshair|cyclic|dark|darken|dashed|decimal|default|dense|diagonal-fractions|difference|digits|disabled|disc|discretionary-ligatures\n|distribute|distribute-all-lines|distribute-letter|distribute-space|dot|dotted|double|double-circle|downleft|downright|e-resize|each-line|ease|ease-in\n|ease-in-out|ease-out|economy|ellipse|ellipsis|embed|end|evenodd|ew-resize|exact|exclude|exclusion|expanded|extends|extra-condensed|extra-expanded\n|fallback|farthest-corner|farthest-side|fill|fill-available|fill-box|filled|fit-content|fixed|flat|flex|flex-end|flex-start|flip|flow-root|forwards|freeze\n|from-image|full-width|geometricPrecision|georgian|grab|grabbing|grayscale|grid|groove|hand|hanging|hard-light|help|hidden|hide\n|historical-forms|historical-ligatures|horizontal|horizontal-tb|hue|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space\n|ideographic|inactive|infinite|inherit|initial|inline|inline-axis|inline-block|inline-end|inline-flex|inline-grid|inline-list-item|inline-start\n|inline-table|inset|inside|inter-character|inter-ideograph|inter-word|intersect|invert|isolate|isolate-override|italic|jis04|jis78|jis83\n|jis90|justify|justify-all|kannada|keep-all|landscape|large|larger|left|light|lighten|lighter|line|line-edge|line-through|linear|linearRGB\n|lining-nums|list-item|local|loose|lowercase|lr|lr-tb|ltr|luminance|luminosity|main-size|mandatory|manipulation|manual|margin-box|match-parent\n|match-source|mathematical|max-content|medium|menu|message-box|middle|min-content|miter|mixed|move|multiply|n-resize|narrower|ne-resize\n|nearest-neighbor|nesw-resize|newspaper|no-change|no-clip|no-close-quote|no-common-ligatures|no-contextual|no-discretionary-ligatures\n|no-drop|no-historical-ligatures|no-open-quote|no-repeat|none|nonzero|normal|not-allowed|nowrap|ns-resize|numbers|numeric|nw-resize|nwse-resize\n|oblique|oldstyle-nums|open|open-quote|optimizeLegibility|optimizeQuality|optimizeSpeed|optional|ordinal|outset|outside|over|overlay|overline|padding\n|padding-box|page|painted|pan-down|pan-left|pan-right|pan-up|pan-x|pan-y|paused|petite-caps|pixelated|plaintext|pointer|portrait|pre|pre-line\n|pre-wrap|preserve-3d|progress|progressive|proportional-nums|proportional-width|proximity|radial|recto|region|relative|remove|repeat|repeat-[xy]\n|reset-size|reverse|revert|ridge|right|rl|rl-tb|round|row|row-resize|row-reverse|row-severse|rtl|ruby|ruby-base|ruby-base-container|ruby-text\n|ruby-text-container|run-in|running|s-resize|saturation|scale-down|screen|scroll|scroll-position|se-resize|semi-condensed|semi-expanded|separate\n|sesame|show|sideways|sideways-left|sideways-lr|sideways-right|sideways-rl|simplified|slashed-zero|slice|small|small-caps|small-caption|smaller\n|smooth|soft-light|solid|space|space-around|space-between|space-evenly|spell-out|square|sRGB|stacked-fractions|start|static|status-bar|swap\n|step-end|step-start|sticky|stretch|strict|stroke|stroke-box|style|sub|subgrid|subpixel-antialiased|subtract|super|sw-resize|symbolic|table\n|table-caption|table-cell|table-column|table-column-group|table-footer-group|table-header-group|table-row|table-row-group|tabular-nums|tb|tb-rl\n|text|text-after-edge|text-before-edge|text-bottom|text-top|thick|thin|titling-caps|top|top-outside|touch|traditional|transparent|triangle\n|ultra-condensed|ultra-expanded|under|underline|unicase|unset|upleft|uppercase|upright|use-glyph-orientation|use-script|verso|vertical\n|vertical-ideographic|vertical-lr|vertical-rl|vertical-text|view-box|visible|visibleFill|visiblePainted|visibleStroke|w-resize|wait|wavy\n|weight|whitespace|wider|words|wrap|wrap-reverse|x|x-large|x-small|xx-large|xx-small|y|zero|zoom-in|zoom-out)\n(?![\\w-])",
            "name": "support.constant.property-value.css"
          },
          {
            "match": "(?xi) (?<![\\w-])\n(arabic-indic|armenian|bengali|cambodian|circle|cjk-decimal|cjk-earthly-branch|cjk-heavenly-stem|cjk-ideographic\n|decimal|decimal-leading-zero|devanagari|disc|disclosure-closed|disclosure-open|ethiopic-halehame-am\n|ethiopic-halehame-ti-e[rt]|ethiopic-numeric|georgian|gujarati|gurmukhi|hangul|hangul-consonant|hebrew\n|hiragana|hiragana-iroha|japanese-formal|japanese-informal|kannada|katakana|katakana-iroha|khmer\n|korean-hangul-formal|korean-hanja-formal|korean-hanja-informal|lao|lower-alpha|lower-armenian|lower-greek\n|lower-latin|lower-roman|malayalam|mongolian|myanmar|oriya|persian|simp-chinese-formal|simp-chinese-informal\n|square|tamil|telugu|thai|tibetan|trad-chinese-formal|trad-chinese-informal|upper-alpha|upper-armenian\n|upper-latin|upper-roman|urdu)\n(?![\\w-])",
            "name": "support.constant.property-value.list-style-type.css"
          },
          {
            "match": "(?<![\\w-])(?i:-(?:ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)|(?:mso|prince))-[a-zA-Z-]+",
            "name": "support.constant.vendored.property-value.css"
          },
          {
            "match": "(?<![\\w-])(?i:arial|century|comic|courier|garamond|georgia|helvetica|impact|lucida|symbol|system-ui|system|tahoma|times|trebuchet|ui-monospace|ui-rounded|ui-sans-serif|ui-serif|utopia|verdana|webdings|sans-serif|serif|monospace)(?![\\w-])",
            "name": "support.constant.font-name.css"
          }
        ]
      },
      "property-names": {
        "patterns": [
          {
            "match": "(?xi) (?<![\\w-])\n(?:\n  # Standard CSS\n  accent-color|additive-symbols|align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration\n  | animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|aspect-ratio|backdrop-filter\n  | backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image\n  | background-origin|background-position|background-position-[xy]|background-repeat|background-size|bleed|block-size|border\n  | border-block-end|border-block-end-color|border-block-end-style|border-block-end-width|border-block-start|border-block-start-color\n  | border-block-start-style|border-block-start-width|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius\n  | border-bottom-style|border-bottom-width|border-collapse|border-color|border-end-end-radius|border-end-start-radius|border-image\n  | border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-inline-end\n  | border-inline-end-color|border-inline-end-style|border-inline-end-width|border-inline-start|border-inline-start-color\n  | border-inline-start-style|border-inline-start-width|border-left|border-left-color|border-left-style|border-left-width\n  | border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-start-end-radius\n  | border-start-start-radius|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style\n  | border-top-width|border-width|bottom|box-decoration-break|box-shadow|box-sizing|break-after|break-before|break-inside|caption-side\n  | caret-color|clear|clip|clip-path|clip-rule|color|color-adjust|color-interpolation-filters|color-scheme|column-count|column-fill|column-gap\n  | column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|contain|container|container-name|container-type|content|counter-increment\n  | counter-reset|cursor|direction|display|empty-cells|enable-background|fallback|fill|fill-opacity|fill-rule|filter|flex|flex-basis\n  | flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|flood-color|flood-opacity|font|font-display|font-family\n  | font-feature-settings|font-kerning|font-language-override|font-optical-sizing|font-size|font-size-adjust|font-stretch\n  | font-style|font-synthesis|font-variant|font-variant-alternates|font-variant-caps|font-variant-east-asian|font-variant-ligatures\n  | font-variant-numeric|font-variant-position|font-variation-settings|font-weight|gap|glyph-orientation-horizontal|glyph-orientation-vertical\n  | grid|grid-area|grid-auto-columns|grid-auto-flow|grid-auto-rows|grid-column|grid-column-end|grid-column-gap|grid-column-start\n  | grid-gap|grid-row|grid-row-end|grid-row-gap|grid-row-start|grid-template|grid-template-areas|grid-template-columns|grid-template-rows\n  | hanging-punctuation|height|hyphens|image-orientation|image-rendering|image-resolution|ime-mode|initial-letter|initial-letter-align\n  | inline-size|inset|inset-block|inset-block-end|inset-block-start|inset-inline|inset-inline-end|inset-inline-start|isolation\n  | justify-content|justify-items|justify-self|kerning|left|letter-spacing|lighting-color|line-break|line-clamp|line-height|list-style\n  | list-style-image|list-style-position|list-style-type|margin|margin-block|margin-block-end|margin-block-start|margin-bottom|margin-inline|margin-inline-end|margin-inline-start\n  | margin-left|margin-right|margin-top|marker-end|marker-mid|marker-start|marks|mask|mask-border|mask-border-mode|mask-border-outset\n  | mask-border-repeat|mask-border-slice|mask-border-source|mask-border-width|mask-clip|mask-composite|mask-image|mask-mode\n  | mask-origin|mask-position|mask-repeat|mask-size|mask-type|max-block-size|max-height|max-inline-size|max-lines|max-width\n  | max-zoom|min-block-size|min-height|min-inline-size|min-width|min-zoom|mix-blend-mode|negative|object-fit|object-position\n  | offset|offset-anchor|offset-distance|offset-path|offset-position|offset-rotation|opacity|order|orientation|orphans\n  | outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-anchor|overflow-block|overflow-inline\n  | overflow-wrap|overflow-[xy]|overscroll-behavior|overscroll-behavior-block|overscroll-behavior-inline|overscroll-behavior-[xy]\n  | pad|padding|padding-block|padding-block-end|padding-block-start|padding-bottom|padding-inline|padding-inline-end|padding-inline-start|padding-left\n  | padding-right|padding-top|page-break-after|page-break-before|page-break-inside|paint-order|perspective|perspective-origin\n  | place-content|place-items|place-self|pointer-events|position|prefix|quotes|range|resize|right|rotate|row-gap|ruby-align\n  | ruby-merge|ruby-position|scale|scroll-behavior|scroll-margin|scroll-margin-block|scroll-margin-block-end|scroll-margin-block-start\n  | scroll-margin-bottom|scroll-margin-inline|scroll-margin-inline-end|scroll-margin-inline-start|scroll-margin-left|scroll-margin-right\n  | scroll-margin-top|scroll-padding|scroll-padding-block|scroll-padding-block-end|scroll-padding-block-start|scroll-padding-bottom\n  | scroll-padding-inline|scroll-padding-inline-end|scroll-padding-inline-start|scroll-padding-left|scroll-padding-right\n  | scroll-padding-top|scroll-snap-align|scroll-snap-coordinate|scroll-snap-destination|scroll-snap-stop|scroll-snap-type\n  | scrollbar-color|scrollbar-gutter|scrollbar-width|shape-image-threshold|shape-margin|shape-outside|shape-rendering|size\n  | speak-as|src|stop-color|stop-opacity|stroke|stroke-dasharray|stroke-dashoffset|stroke-linecap|stroke-linejoin|stroke-miterlimit\n  | stroke-opacity|stroke-width|suffix|symbols|system|tab-size|table-layout|text-align|text-align-last|text-anchor|text-combine-upright\n  | text-decoration|text-decoration-color|text-decoration-line|text-decoration-skip|text-decoration-skip-ink|text-decoration-style|text-decoration-thickness\n  | text-emphasis|text-emphasis-color|text-emphasis-position|text-emphasis-style|text-indent|text-justify|text-orientation\n  | text-overflow|text-rendering|text-shadow|text-size-adjust|text-transform|text-underline-offset|text-underline-position|top|touch-action|transform\n  | transform-box|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function\n  | translate|unicode-bidi|unicode-range|user-select|user-zoom|vertical-align|visibility|white-space|widows|width|will-change\n  | word-break|word-spacing|word-wrap|writing-mode|z-index|zoom\n\n  # SVG attributes\n  | alignment-baseline|baseline-shift|clip-rule|color-interpolation|color-interpolation-filters|color-profile\n  | color-rendering|cx|cy|dominant-baseline|enable-background|fill|fill-opacity|fill-rule|flood-color|flood-opacity\n  | glyph-orientation-horizontal|glyph-orientation-vertical|height|kerning|lighting-color|marker-end|marker-mid\n  | marker-start|r|rx|ry|shape-rendering|stop-color|stop-opacity|stroke|stroke-dasharray|stroke-dashoffset|stroke-linecap\n  | stroke-linejoin|stroke-miterlimit|stroke-opacity|stroke-width|text-anchor|width|x|y\n\n  # Not listed on MDN; presumably deprecated\n  | adjust|after|align|align-last|alignment|alignment-adjust|appearance|attachment|azimuth|background-break\n  | balance|baseline|before|bidi|binding|bookmark|bookmark-label|bookmark-level|bookmark-target|border-length\n  | bottom-color|bottom-left-radius|bottom-right-radius|bottom-style|bottom-width|box|box-align|box-direction\n  | box-flex|box-flex-group|box-lines|box-ordinal-group|box-orient|box-pack|break|character|collapse|column\n  | column-break-after|column-break-before|count|counter|crop|cue|cue-after|cue-before|decoration|decoration-break\n  | delay|display-model|display-role|down|drop|drop-initial-after-adjust|drop-initial-after-align|drop-initial-before-adjust\n  | drop-initial-before-align|drop-initial-size|drop-initial-value|duration|elevation|emphasis|family|fit|fit-position\n  | flex-group|float-offset|gap|grid-columns|grid-rows|hanging-punctuation|header|hyphenate|hyphenate-after|hyphenate-before\n  | hyphenate-character|hyphenate-lines|hyphenate-resource|icon|image|increment|indent|index|initial-after-adjust\n  | initial-after-align|initial-before-adjust|initial-before-align|initial-size|initial-value|inline-box-align|iteration-count\n  | justify|label|left-color|left-style|left-width|length|level|line|line-stacking|line-stacking-ruby|line-stacking-shift\n  | line-stacking-strategy|lines|list|mark|mark-after|mark-before|marks|marquee|marquee-direction|marquee-play-count|marquee-speed\n  | marquee-style|max|min|model|move-to|name|nav|nav-down|nav-index|nav-left|nav-right|nav-up|new|numeral|offset|ordinal-group\n  | orient|origin|overflow-style|overhang|pack|page|page-policy|pause|pause-after|pause-before|phonemes|pitch|pitch-range\n  | play-count|play-during|play-state|point|presentation|presentation-level|profile|property|punctuation|punctuation-trim\n  | radius|rate|rendering-intent|repeat|replace|reset|resolution|resource|respond-to|rest|rest-after|rest-before|richness\n  | right-color|right-style|right-width|role|rotation|rotation-point|rows|ruby|ruby-overhang|ruby-span|rule|rule-color\n  | rule-style|rule-width|shadow|size|size-adjust|sizing|space|space-collapse|spacing|span|speak|speak-header|speak-numeral\n  | speak-punctuation|speech|speech-rate|speed|stacking|stacking-ruby|stacking-shift|stacking-strategy|stress|stretch\n  | string-set|style|style-image|style-position|style-type|target|target-name|target-new|target-position|text|text-height\n  | text-justify|text-outline|text-replace|text-wrap|timing-function|top-color|top-left-radius|top-right-radius|top-style\n  | top-width|trim|unicode|up|user-select|variant|voice|voice-balance|voice-duration|voice-family|voice-pitch|voice-pitch-range\n  | voice-rate|voice-stress|voice-volume|volume|weight|white|white-space-collapse|word|wrap\n)\n(?![\\w-])",
            "name": "support.type.property-name.css"
          },
          {
            "match": "(?<![\\w-])(?i:-(?:ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)|(?:mso|prince))-[a-zA-Z-]+",
            "name": "support.type.vendored.property-name.css"
          }
        ]
      },
      "property-values": {
        "patterns": [
          {
            "include": "#commas"
          },
          {
            "include": "#comment-block"
          },
          {
            "include": "#escapes"
          },
          {
            "include": "#functions"
          },
          {
            "include": "#property-keywords"
          },
          {
            "include": "#unicode-range"
          },
          {
            "include": "#numeric-values"
          },
          {
            "include": "#color-keywords"
          },
          {
            "include": "#string"
          },
          {
            "match": "!\\s*important(?![\\w-])",
            "name": "keyword.other.important.css"
          }
        ]
      },
      "pseudo-classes": {
        "captures": {
          "1": {
            "name": "punctuation.definition.entity.css"
          },
          "2": {
            "name": "invalid.illegal.colon.css"
          }
        },
        "match": "(?xi)\n(:)(:*)\n(?: active|any-link|checked|default|disabled|empty|enabled|first\n  | (?:first|last|only)-(?:child|of-type)|focus|focus-visible|focus-within|fullscreen|host|hover\n  | in-range|indeterminate|invalid|left|link|optional|out-of-range\n  | read-only|read-write|required|right|root|scope|target|unresolved\n  | valid|visited\n)(?![\\w-]|\\s*[;}])",
        "name": "entity.other.attribute-name.pseudo-class.css"
      },
      "pseudo-elements": {
        "captures": {
          "1": {
            "name": "punctuation.definition.entity.css"
          },
          "2": {
            "name": "punctuation.definition.entity.css"
          }
        },
        "match": "(?xi)\n(?:\n  (::?)                       # Elements using both : and :: notation\n  (?: after\n    | before\n    | first-letter\n    | first-line\n    | (?:-(?:ah|apple|atsc|epub|hp|khtml|moz\n            |ms|o|rim|ro|tc|wap|webkit|xv)\n        | (?:mso|prince))\n      -[a-z-]+\n  )\n  |\n  (::)                        # Double-colon only\n  (?: backdrop\n    | content\n    | grammar-error\n    | marker\n    | placeholder\n    | selection\n    | shadow\n    | spelling-error\n  )\n)\n(?![\\w-]|\\s*[;}])",
        "name": "entity.other.attribute-name.pseudo-element.css"
      },
      "rule-list": {
        "begin": "{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.property-list.begin.bracket.curly.css"
          }
        },
        "end": "}",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.property-list.end.bracket.curly.css"
          }
        },
        "name": "meta.property-list.css",
        "patterns": [
          {
            "include": "#rule-list-innards"
          }
        ]
      },
      "rule-list-innards": {
        "patterns": [
          {
            "include": "#comment-block"
          },
          {
            "include": "#escapes"
          },
          {
            "include": "#font-features"
          },
          {
            "match": "(?<![\\w-])--(?:[-a-zA-Z_]|[^\\x00-\\x7F])(?:[-a-zA-Z0-9_]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))*",
            "name": "variable.css"
          },
          {
            "begin": "(?<![-a-zA-Z])(?=[-a-zA-Z])",
            "end": "$|(?![-a-zA-Z])",
            "name": "meta.property-name.css",
            "patterns": [
              {
                "include": "#property-names"
              }
            ]
          },
          {
            "begin": "(:)\\s*",
            "beginCaptures": {
              "1": {
                "name": "punctuation.separator.key-value.css"
              }
            },
            "contentName": "meta.property-value.css",
            "end": "\\s*(;)|\\s*(?=}|\\))",
            "endCaptures": {
              "1": {
                "name": "punctuation.terminator.rule.css"
              }
            },
            "patterns": [
              {
                "include": "#comment-block"
              },
              {
                "include": "#property-values"
              }
            ]
          },
          {
            "match": ";",
            "name": "punctuation.terminator.rule.css"
          }
        ]
      },
      "selector": {
        "begin": "(?=(?:\\|)?(?:[-\\[:.*\\#a-zA-Z_]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.)))",
        "end": "(?=\\s*[/@{)])",
        "name": "meta.selector.css",
        "patterns": [
          {
            "include": "#selector-innards"
          }
        ]
      },
      "selector-innards": {
        "patterns": [
          {
            "include": "#comment-block"
          },
          {
            "include": "#commas"
          },
          {
            "include": "#escapes"
          },
          {
            "include": "#combinators"
          },
          {
            "captures": {
              "1": {
                "name": "entity.other.namespace-prefix.css"
              },
              "2": {
                "name": "punctuation.separator.css"
              }
            },
            "match": "(?:^|(?<=[\\s,(};]))(?![-\\w*]+\\|(?![-\\[:.*\\#a-zA-Z_]|[^\\x00-\\x7F]))((?:[-a-zA-Z_]|[^\\x00-\\x7F])(?:[-a-zA-Z0-9_]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))*|\\*)?(\\|)"
          },
          {
            "include": "#tag-names"
          },
          {
            "match": "\\*",
            "name": "entity.name.tag.wildcard.css"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.entity.css"
              },
              "2": {
                "patterns": [
                  {
                    "include": "#escapes"
                  }
                ]
              }
            },
            "match": "(?<![@\\w-])([.\\#])((?:-?[0-9]|-(?=$|[\\s,.\\#)\\[:{>+~|]|/\\*)|(?:[-a-zA-Z_0-9]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))*(?:[!\"'%&(*;<?@^`|\\]}]|/(?!\\*))+)(?:[-a-zA-Z_0-9]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))*)",
            "name": "invalid.illegal.bad-identifier.css"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.entity.css"
              },
              "2": {
                "patterns": [
                  {
                    "include": "#escapes"
                  }
                ]
              }
            },
            "match": "(\\.)((?:[-a-zA-Z_0-9]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+)(?=$|[\\s,.\\#)\\[:{>+~|]|/\\*)",
            "name": "entity.other.attribute-name.class.css"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.entity.css"
              },
              "2": {
                "patterns": [
                  {
                    "include": "#escapes"
                  }
                ]
              }
            },
            "match": "(\\#)(-?(?![0-9])(?:[-a-zA-Z0-9_]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+)(?=$|[\\s,.\\#)\\[:{>+~|]|/\\*)",
            "name": "entity.other.attribute-name.id.css"
          },
          {
            "begin": "\\[",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.entity.begin.bracket.square.css"
              }
            },
            "end": "\\]",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.entity.end.bracket.square.css"
              }
            },
            "name": "meta.attribute-selector.css",
            "patterns": [
              {
                "include": "#comment-block"
              },
              {
                "include": "#string"
              },
              {
                "captures": {
                  "1": {
                    "name": "storage.modifier.ignore-case.css"
                  }
                },
                "match": "(?<=[\"'\\s]|^|\\*/)\\s*([iI])\\s*(?=[\\s\\]]|/\\*|$)"
              },
              {
                "captures": {
                  "1": {
                    "name": "string.unquoted.attribute-value.css",
                    "patterns": [
                      {
                        "include": "#escapes"
                      }
                    ]
                  }
                },
                "match": "(?<==)\\s*((?!/\\*)(?:[^\\\\\"'\\s\\]]|\\\\.)+)"
              },
              {
                "include": "#escapes"
              },
              {
                "match": "[~|^$*]?=",
                "name": "keyword.operator.pattern.css"
              },
              {
                "match": "\\|",
                "name": "punctuation.separator.css"
              },
              {
                "captures": {
                  "1": {
                    "name": "entity.other.namespace-prefix.css",
                    "patterns": [
                      {
                        "include": "#escapes"
                      }
                    ]
                  }
                },
                "match": "(-?(?!\\d)(?:[\\w-]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+|\\*)(?=\\|(?!\\s|=|$|\\])(?:-?(?!\\d)|[\\\\\\w-]|[^\\x00-\\x7F]))"
              },
              {
                "captures": {
                  "1": {
                    "name": "entity.other.attribute-name.css",
                    "patterns": [
                      {
                        "include": "#escapes"
                      }
                    ]
                  }
                },
                "match": "(-?(?!\\d)(?>[\\w-]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+)\\s*(?=[~|^\\]$*=]|/\\*)"
              }
            ]
          },
          {
            "include": "#pseudo-classes"
          },
          {
            "include": "#pseudo-elements"
          },
          {
            "include": "#functional-pseudo-classes"
          },
          {
            "match": "(?<![@\\w-])(?=[a-z]\\w*-)(?:(?![A-Z])[\\w-])+(?![(\\w-])",
            "name": "entity.name.tag.custom.css"
          }
        ]
      },
      "string": {
        "patterns": [
          {
            "begin": "\"",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.css"
              }
            },
            "end": "\"|(?<!\\\\)(?=$|\\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.css"
              }
            },
            "name": "string.quoted.double.css",
            "patterns": [
              {
                "begin": "(?:\\G|^)(?=(?:[^\\\\\"]|\\\\.)+$)",
                "end": "$",
                "name": "invalid.illegal.unclosed.string.css",
                "patterns": [
                  {
                    "include": "#escapes"
                  }
                ]
              },
              {
                "include": "#escapes"
              }
            ]
          },
          {
            "begin": "'",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.css"
              }
            },
            "end": "'|(?<!\\\\)(?=$|\\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.css"
              }
            },
            "name": "string.quoted.single.css",
            "patterns": [
              {
                "begin": "(?:\\G|^)(?=(?:[^\\\\']|\\\\.)+$)",
                "end": "$",
                "name": "invalid.illegal.unclosed.string.css",
                "patterns": [
                  {
                    "include": "#escapes"
                  }
                ]
              },
              {
                "include": "#escapes"
              }
            ]
          }
        ]
      },
      "tag-names": {
        "match": "(?xi) (?<![\\w:-])\n(?:\n    # HTML\n    a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdi|bdo|bgsound\n  | big|blink|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|command\n  | content|data|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|element|em|embed|fieldset\n  | figcaption|figure|font|footer|form|frame|frameset|h[1-6]|head|header|hgroup|hr|html|i\n  | iframe|image|img|input|ins|isindex|kbd|keygen|label|legend|li|link|listing|main|map|mark\n  | marquee|math|menu|menuitem|meta|meter|multicol|nav|nextid|nobr|noembed|noframes|noscript\n  | object|ol|optgroup|option|output|p|param|picture|plaintext|pre|progress|q|rb|rp|rt|rtc\n  | ruby|s|samp|script|section|select|shadow|slot|small|source|spacer|span|strike|strong\n  | style|sub|summary|sup|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr\n  | track|tt|u|ul|var|video|wbr|xmp\n\n  # SVG\n  | altGlyph|altGlyphDef|altGlyphItem|animate|animateColor|animateMotion|animateTransform\n  | circle|clipPath|color-profile|cursor|defs|desc|discard|ellipse|feBlend|feColorMatrix\n  | feComponentTransfer|feComposite|feConvolveMatrix|feDiffuseLighting|feDisplacementMap\n  | feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur\n  | feImage|feMerge|feMergeNode|feMorphology|feOffset|fePointLight|feSpecularLighting\n  | feSpotLight|feTile|feTurbulence|filter|font-face|font-face-format|font-face-name\n  | font-face-src|font-face-uri|foreignObject|g|glyph|glyphRef|hatch|hatchpath|hkern\n  | line|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|metadata\n  | missing-glyph|mpath|path|pattern|polygon|polyline|radialGradient|rect|set|solidcolor\n  | stop|svg|switch|symbol|text|textPath|tref|tspan|use|view|vkern\n\n  # MathML\n  | annotation|annotation-xml|maction|maligngroup|malignmark|math|menclose|merror|mfenced\n  | mfrac|mglyph|mi|mlabeledtr|mlongdiv|mmultiscripts|mn|mo|mover|mpadded|mphantom|mroot\n  | mrow|ms|mscarries|mscarry|msgroup|msline|mspace|msqrt|msrow|mstack|mstyle|msub|msubsup\n  | msup|mtable|mtd|mtext|mtr|munder|munderover|semantics\n)\n(?=[+~>\\s,.\\#|){:\\[]|/\\*|$)",
        "name": "entity.name.tag.css"
      },
      "unicode-range": {
        "captures": {
          "0": {
            "name": "constant.other.unicode-range.css"
          },
          "1": {
            "name": "punctuation.separator.dash.unicode-range.css"
          }
        },
        "match": "(?<![\\w-])[Uu]\\+[0-9A-Fa-f?]{1,6}(?:(-)[0-9A-Fa-f]{1,6})?(?![\\w-])"
      },
      "url": {
        "begin": "(?i)(?<![\\w@-])(url)(\\()",
        "beginCaptures": {
          "1": {
            "name": "support.function.url.css"
          },
          "2": {
            "name": "punctuation.section.function.begin.bracket.round.css"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.function.end.bracket.round.css"
          }
        },
        "name": "meta.function.url.css",
        "patterns": [
          {
            "match": "[^'\")\\s]+",
            "name": "variable.parameter.url.css"
          },
          {
            "include": "#string"
          },
          {
            "include": "#comment-block"
          },
          {
            "include": "#escapes"
          }
        ]
      }
    },
    "scopeName": "source.css"
  },
  {
    "displayName": "SCSS",
    "name": "scss",
    "patterns": [
      {
        "include": "#variable_setting"
      },
      {
        "include": "#at_rule_forward"
      },
      {
        "include": "#at_rule_use"
      },
      {
        "include": "#at_rule_include"
      },
      {
        "include": "#at_rule_import"
      },
      {
        "include": "#general"
      },
      {
        "include": "#flow_control"
      },
      {
        "include": "#rules"
      },
      {
        "include": "#property_list"
      },
      {
        "include": "#at_rule_mixin"
      },
      {
        "include": "#at_rule_media"
      },
      {
        "include": "#at_rule_function"
      },
      {
        "include": "#at_rule_charset"
      },
      {
        "include": "#at_rule_option"
      },
      {
        "include": "#at_rule_namespace"
      },
      {
        "include": "#at_rule_fontface"
      },
      {
        "include": "#at_rule_page"
      },
      {
        "include": "#at_rule_keyframes"
      },
      {
        "include": "#at_rule_at_root"
      },
      {
        "include": "#at_rule_supports"
      },
      {
        "match": ";",
        "name": "punctuation.terminator.rule.css"
      }
    ],
    "repository": {
      "at_rule_at_root": {
        "begin": "\\s*((@)(at-root))(\\s+|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.at-rule.at-root.scss"
          },
          "2": {
            "name": "punctuation.definition.keyword.scss"
          }
        },
        "end": "\\s*(?={)",
        "name": "meta.at-rule.at-root.scss",
        "patterns": [
          {
            "include": "#function_attributes"
          },
          {
            "include": "#functions"
          },
          {
            "include": "#selectors"
          }
        ]
      },
      "at_rule_charset": {
        "begin": "\\s*((@)charset\\b)\\s*",
        "captures": {
          "1": {
            "name": "keyword.control.at-rule.charset.scss"
          },
          "2": {
            "name": "punctuation.definition.keyword.scss"
          }
        },
        "end": "\\s*((?=;|$))",
        "name": "meta.at-rule.charset.scss",
        "patterns": [
          {
            "include": "#variable"
          },
          {
            "include": "#string_single"
          },
          {
            "include": "#string_double"
          }
        ]
      },
      "at_rule_content": {
        "begin": "\\s*((@)content\\b)\\s*",
        "captures": {
          "1": {
            "name": "keyword.control.content.scss"
          }
        },
        "end": "\\s*((?=;))",
        "name": "meta.content.scss",
        "patterns": [
          {
            "include": "#variable"
          },
          {
            "include": "#selectors"
          },
          {
            "include": "#property_values"
          }
        ]
      },
      "at_rule_each": {
        "begin": "\\s*((@)each\\b)\\s*",
        "captures": {
          "1": {
            "name": "keyword.control.each.scss"
          },
          "2": {
            "name": "punctuation.definition.keyword.scss"
          }
        },
        "end": "\\s*((?=}))",
        "name": "meta.at-rule.each.scss",
        "patterns": [
          {
            "match": "\\b(in|,)\\b",
            "name": "keyword.control.operator"
          },
          {
            "include": "#variable"
          },
          {
            "include": "#property_values"
          },
          {
            "include": "$self"
          }
        ]
      },
      "at_rule_else": {
        "begin": "\\s*((@)else(\\s*(if)?))\\s*",
        "captures": {
          "1": {
            "name": "keyword.control.else.scss"
          },
          "2": {
            "name": "punctuation.definition.keyword.scss"
          }
        },
        "end": "\\s*(?={)",
        "name": "meta.at-rule.else.scss",
        "patterns": [
          {
            "include": "#conditional_operators"
          },
          {
            "include": "#variable"
          },
          {
            "include": "#property_values"
          }
        ]
      },
      "at_rule_extend": {
        "begin": "\\s*((@)extend\\b)\\s*",
        "captures": {
          "1": {
            "name": "keyword.control.at-rule.extend.scss"
          },
          "2": {
            "name": "punctuation.definition.keyword.scss"
          }
        },
        "end": "\\s*(?=;)",
        "name": "meta.at-rule.extend.scss",
        "patterns": [
          {
            "include": "#variable"
          },
          {
            "include": "#selectors"
          },
          {
            "include": "#property_values"
          }
        ]
      },
      "at_rule_fontface": {
        "patterns": [
          {
            "begin": "^\\s*((@)font-face\\b)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.at-rule.fontface.scss"
              },
              "2": {
                "name": "punctuation.definition.keyword.scss"
              }
            },
            "end": "\\s*(?={)",
            "name": "meta.at-rule.fontface.scss",
            "patterns": [
              {
                "include": "#function_attributes"
              }
            ]
          }
        ]
      },
      "at_rule_for": {
        "begin": "\\s*((@)for\\b)\\s*",
        "captures": {
          "1": {
            "name": "keyword.control.for.scss"
          },
          "2": {
            "name": "punctuation.definition.keyword.scss"
          }
        },
        "end": "\\s*(?={)",
        "name": "meta.at-rule.for.scss",
        "patterns": [
          {
            "match": "(==|!=|<=|>=|<|>|from|to|through)",
            "name": "keyword.control.operator"
          },
          {
            "include": "#variable"
          },
          {
            "include": "#property_values"
          },
          {
            "include": "$self"
          }
        ]
      },
      "at_rule_forward": {
        "begin": "\\s*((@)forward\\b)\\s*",
        "captures": {
          "1": {
            "name": "keyword.control.at-rule.forward.scss"
          },
          "2": {
            "name": "punctuation.definition.keyword.scss"
          }
        },
        "end": "\\s*(?=;)",
        "name": "meta.at-rule.forward.scss",
        "patterns": [
          {
            "match": "\\b(as|hide|show)\\b",
            "name": "keyword.control.operator"
          },
          {
            "captures": {
              "1": {
                "name": "entity.other.attribute-name.module.scss"
              },
              "2": {
                "name": "punctuation.definition.wildcard.scss"
              }
            },
            "match": "\\b([\\w-]+)(\\*)"
          },
          {
            "match": "\\b[\\w-]+\\b",
            "name": "entity.name.function.scss"
          },
          {
            "include": "#variable"
          },
          {
            "include": "#string_single"
          },
          {
            "include": "#string_double"
          },
          {
            "include": "#comment_line"
          },
          {
            "include": "#comment_block"
          }
        ]
      },
      "at_rule_function": {
        "patterns": [
          {
            "begin": "\\s*((@)function\\b)\\s*",
            "captures": {
              "1": {
                "name": "keyword.control.at-rule.function.scss"
              },
              "2": {
                "name": "punctuation.definition.keyword.scss"
              },
              "3": {
                "name": "entity.name.function.scss"
              }
            },
            "end": "\\s*(?={)",
            "name": "meta.at-rule.function.scss",
            "patterns": [
              {
                "include": "#function_attributes"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "keyword.control.at-rule.function.scss"
              },
              "2": {
                "name": "punctuation.definition.keyword.scss"
              },
              "3": {
                "name": "entity.name.function.scss"
              }
            },
            "match": "\\s*((@)function\\b)\\s*",
            "name": "meta.at-rule.function.scss"
          }
        ]
      },
      "at_rule_if": {
        "begin": "\\s*((@)if\\b)\\s*",
        "captures": {
          "1": {
            "name": "keyword.control.if.scss"
          },
          "2": {
            "name": "punctuation.definition.keyword.scss"
          }
        },
        "end": "\\s*(?={)",
        "name": "meta.at-rule.if.scss",
        "patterns": [
          {
            "include": "#conditional_operators"
          },
          {
            "include": "#variable"
          },
          {
            "include": "#property_values"
          }
        ]
      },
      "at_rule_import": {
        "begin": "\\s*((@)import\\b)\\s*",
        "captures": {
          "1": {
            "name": "keyword.control.at-rule.import.scss"
          },
          "2": {
            "name": "punctuation.definition.keyword.scss"
          }
        },
        "end": "\\s*((?=;)|(?=}))",
        "name": "meta.at-rule.import.scss",
        "patterns": [
          {
            "include": "#variable"
          },
          {
            "include": "#string_single"
          },
          {
            "include": "#string_double"
          },
          {
            "include": "#functions"
          },
          {
            "include": "#comment_line"
          }
        ]
      },
      "at_rule_include": {
        "patterns": [
          {
            "begin": "(?<=@include)\\s+(?:([\\w-]+)\\s*(\\.))?([\\w-]+)\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "variable.scss"
              },
              "2": {
                "name": "punctuation.access.module.scss"
              },
              "3": {
                "name": "entity.name.function.scss"
              },
              "4": {
                "name": "punctuation.definition.parameters.begin.bracket.round.scss"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.parameters.end.bracket.round.scss"
              }
            },
            "name": "meta.at-rule.include.scss",
            "patterns": [
              {
                "include": "#function_attributes"
              }
            ]
          },
          {
            "captures": {
              "0": {
                "name": "meta.at-rule.include.scss"
              },
              "1": {
                "name": "variable.scss"
              },
              "2": {
                "name": "punctuation.access.module.scss"
              },
              "3": {
                "name": "entity.name.function.scss"
              }
            },
            "match": "(?<=@include)\\s+(?:([\\w-]+)\\s*(\\.))?([\\w-]+)"
          },
          {
            "captures": {
              "0": {
                "name": "meta.at-rule.include.scss"
              },
              "1": {
                "name": "keyword.control.at-rule.include.scss"
              },
              "2": {
                "name": "punctuation.definition.keyword.scss"
              }
            },
            "match": "((@)include)\\b"
          }
        ]
      },
      "at_rule_keyframes": {
        "begin": "(?<=^|\\s)(@)(?:-(?:webkit|moz)-)?keyframes\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.control.at-rule.keyframes.scss"
          },
          "1": {
            "name": "punctuation.definition.keyword.scss"
          }
        },
        "end": "(?<=})",
        "name": "meta.at-rule.keyframes.scss",
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "entity.name.function.scss"
              }
            },
            "match": "(?<=@keyframes)\\s+((?:[_A-Za-z][-\\w]|-[_A-Za-z])[-\\w]*)"
          },
          {
            "begin": "(?<=@keyframes)\\s+(\")",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.string.begin.scss"
              }
            },
            "contentName": "entity.name.function.scss",
            "end": "\"",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.scss"
              }
            },
            "name": "string.quoted.double.scss",
            "patterns": [
              {
                "match": "\\\\(\\h{1,6}|.)",
                "name": "constant.character.escape.scss"
              },
              {
                "include": "#interpolation"
              }
            ]
          },
          {
            "begin": "(?<=@keyframes)\\s+(')",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.string.begin.scss"
              }
            },
            "contentName": "entity.name.function.scss",
            "end": "'",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.scss"
              }
            },
            "name": "string.quoted.single.scss",
            "patterns": [
              {
                "match": "\\\\(\\h{1,6}|.)",
                "name": "constant.character.escape.scss"
              },
              {
                "include": "#interpolation"
              }
            ]
          },
          {
            "begin": "{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.keyframes.begin.scss"
              }
            },
            "end": "}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.keyframes.end.scss"
              }
            },
            "patterns": [
              {
                "match": "\\b(?:(?:100|[1-9]\\d|\\d)%|from|to)(?=\\s*{)",
                "name": "entity.other.attribute-name.scss"
              },
              {
                "include": "#flow_control"
              },
              {
                "include": "#interpolation"
              },
              {
                "include": "#property_list"
              },
              {
                "include": "#rules"
              }
            ]
          }
        ]
      },
      "at_rule_media": {
        "patterns": [
          {
            "begin": "^\\s*((@)media)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.at-rule.media.scss"
              },
              "2": {
                "name": "punctuation.definition.keyword.scss"
              }
            },
            "end": "\\s*(?={)",
            "name": "meta.at-rule.media.scss",
            "patterns": [
              {
                "include": "#comment_docblock"
              },
              {
                "include": "#comment_block"
              },
              {
                "include": "#comment_line"
              },
              {
                "match": "\\b(only)\\b",
                "name": "keyword.control.operator.css.scss"
              },
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.media-query.begin.bracket.round.scss"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.media-query.end.bracket.round.scss"
                  }
                },
                "name": "meta.property-list.media-query.scss",
                "patterns": [
                  {
                    "begin": "(?<![-a-z])(?=[-a-z])",
                    "end": "$|(?![-a-z])",
                    "name": "meta.property-name.media-query.scss",
                    "patterns": [
                      {
                        "include": "source.css#media-features"
                      },
                      {
                        "include": "source.css#property-names"
                      }
                    ]
                  },
                  {
                    "begin": "(:)\\s*(?!(\\s*{))",
                    "beginCaptures": {
                      "1": {
                        "name": "punctuation.separator.key-value.scss"
                      }
                    },
                    "contentName": "meta.property-value.media-query.scss",
                    "end": "\\s*(;|(?=}|\\)))",
                    "endCaptures": {
                      "1": {
                        "name": "punctuation.terminator.rule.scss"
                      }
                    },
                    "patterns": [
                      {
                        "include": "#general"
                      },
                      {
                        "include": "#property_values"
                      }
                    ]
                  }
                ]
              },
              {
                "include": "#variable"
              },
              {
                "include": "#conditional_operators"
              },
              {
                "include": "source.css#media-types"
              }
            ]
          }
        ]
      },
      "at_rule_mixin": {
        "patterns": [
          {
            "begin": "(?<=@mixin)\\s+([\\w-]+)\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.scss"
              },
              "2": {
                "name": "punctuation.definition.parameters.begin.bracket.round.scss"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.parameters.end.bracket.round.scss"
              }
            },
            "name": "meta.at-rule.mixin.scss",
            "patterns": [
              {
                "include": "#function_attributes"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "entity.name.function.scss"
              }
            },
            "match": "(?<=@mixin)\\s+([\\w-]+)",
            "name": "meta.at-rule.mixin.scss"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.control.at-rule.mixin.scss"
              },
              "2": {
                "name": "punctuation.definition.keyword.scss"
              }
            },
            "match": "((@)mixin)\\b",
            "name": "meta.at-rule.mixin.scss"
          }
        ]
      },
      "at_rule_namespace": {
        "patterns": [
          {
            "begin": "(?<=@namespace)\\s+(?=url)",
            "end": "(?=;|$)",
            "name": "meta.at-rule.namespace.scss",
            "patterns": [
              {
                "include": "#property_values"
              },
              {
                "include": "#string_single"
              },
              {
                "include": "#string_double"
              }
            ]
          },
          {
            "begin": "(?<=@namespace)\\s+([\\w-]*)",
            "captures": {
              "1": {
                "name": "entity.name.namespace-prefix.scss"
              }
            },
            "end": "(?=;|$)",
            "name": "meta.at-rule.namespace.scss",
            "patterns": [
              {
                "include": "#variables"
              },
              {
                "include": "#property_values"
              },
              {
                "include": "#string_single"
              },
              {
                "include": "#string_double"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "keyword.control.at-rule.namespace.scss"
              },
              "2": {
                "name": "punctuation.definition.keyword.scss"
              }
            },
            "match": "((@)namespace)\\b",
            "name": "meta.at-rule.namespace.scss"
          }
        ]
      },
      "at_rule_option": {
        "captures": {
          "1": {
            "name": "keyword.control.at-rule.charset.scss"
          },
          "2": {
            "name": "punctuation.definition.keyword.scss"
          }
        },
        "match": "^\\s*((@)option\\b)\\s*",
        "name": "meta.at-rule.option.scss"
      },
      "at_rule_page": {
        "patterns": [
          {
            "begin": "^\\s*((@)page)(?=:|\\s)\\s*([-:\\w]*)",
            "captures": {
              "1": {
                "name": "keyword.control.at-rule.page.scss"
              },
              "2": {
                "name": "punctuation.definition.keyword.scss"
              },
              "3": {
                "name": "entity.name.function.scss"
              }
            },
            "end": "\\s*(?={)",
            "name": "meta.at-rule.page.scss"
          }
        ]
      },
      "at_rule_return": {
        "begin": "\\s*((@)(return)\\b)",
        "captures": {
          "1": {
            "name": "keyword.control.return.scss"
          },
          "2": {
            "name": "punctuation.definition.keyword.scss"
          }
        },
        "end": "\\s*((?=;))",
        "name": "meta.at-rule.return.scss",
        "patterns": [
          {
            "include": "#variable"
          },
          {
            "include": "#property_values"
          }
        ]
      },
      "at_rule_supports": {
        "begin": "(?<=^|\\s)(@)supports\\b",
        "captures": {
          "0": {
            "name": "keyword.control.at-rule.supports.scss"
          },
          "1": {
            "name": "punctuation.definition.keyword.scss"
          }
        },
        "end": "(?={)|$",
        "name": "meta.at-rule.supports.scss",
        "patterns": [
          {
            "include": "#logical_operators"
          },
          {
            "include": "#properties"
          },
          {
            "match": "\\(",
            "name": "punctuation.definition.condition.begin.bracket.round.scss"
          },
          {
            "match": "\\)",
            "name": "punctuation.definition.condition.end.bracket.round.scss"
          }
        ]
      },
      "at_rule_use": {
        "begin": "\\s*((@)use\\b)\\s*",
        "captures": {
          "1": {
            "name": "keyword.control.at-rule.use.scss"
          },
          "2": {
            "name": "punctuation.definition.keyword.scss"
          }
        },
        "end": "\\s*(?=;)",
        "name": "meta.at-rule.use.scss",
        "patterns": [
          {
            "match": "\\b(as|with)\\b",
            "name": "keyword.control.operator"
          },
          {
            "match": "\\b[\\w-]+\\b",
            "name": "variable.scss"
          },
          {
            "match": "\\*",
            "name": "variable.language.expanded-namespace.scss"
          },
          {
            "include": "#string_single"
          },
          {
            "include": "#string_double"
          },
          {
            "include": "#comment_line"
          },
          {
            "include": "#comment_block"
          },
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.parameters.begin.bracket.round.scss"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.parameters.end.bracket.round.scss"
              }
            },
            "patterns": [
              {
                "include": "#function_attributes"
              }
            ]
          }
        ]
      },
      "at_rule_warn": {
        "begin": "\\s*((@)(warn|debug|error)\\b)\\s*",
        "captures": {
          "1": {
            "name": "keyword.control.warn.scss"
          },
          "2": {
            "name": "punctuation.definition.keyword.scss"
          }
        },
        "end": "\\s*(?=;)",
        "name": "meta.at-rule.warn.scss",
        "patterns": [
          {
            "include": "#variable"
          },
          {
            "include": "#string_double"
          },
          {
            "include": "#string_single"
          }
        ]
      },
      "at_rule_while": {
        "begin": "\\s*((@)while\\b)\\s*",
        "captures": {
          "1": {
            "name": "keyword.control.while.scss"
          },
          "2": {
            "name": "punctuation.definition.keyword.scss"
          }
        },
        "end": "\\s*(?=})",
        "name": "meta.at-rule.while.scss",
        "patterns": [
          {
            "include": "#conditional_operators"
          },
          {
            "include": "#variable"
          },
          {
            "include": "#property_values"
          },
          {
            "include": "$self"
          }
        ]
      },
      "comment_block": {
        "begin": "/\\*",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.comment.scss"
          }
        },
        "end": "\\*/",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.comment.scss"
          }
        },
        "name": "comment.block.scss"
      },
      "comment_docblock": {
        "begin": "///",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.comment.scss"
          }
        },
        "end": "(?=$)",
        "name": "comment.block.documentation.scss",
        "patterns": [
          {
            "include": "source.sassdoc"
          }
        ]
      },
      "comment_line": {
        "begin": "//",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.comment.scss"
          }
        },
        "end": "\\n",
        "name": "comment.line.scss"
      },
      "comparison_operators": {
        "match": "==|!=|<=|>=|<|>",
        "name": "keyword.operator.comparison.scss"
      },
      "conditional_operators": {
        "patterns": [
          {
            "include": "#comparison_operators"
          },
          {
            "include": "#logical_operators"
          }
        ]
      },
      "constant_default": {
        "match": "!default",
        "name": "keyword.other.default.scss"
      },
      "constant_functions": {
        "begin": "(?:([\\w-]+)(\\.))?([\\w-]+)(\\()",
        "beginCaptures": {
          "1": {
            "name": "variable.scss"
          },
          "2": {
            "name": "punctuation.access.module.scss"
          },
          "3": {
            "name": "support.function.misc.scss"
          },
          "4": {
            "name": "punctuation.section.function.scss"
          }
        },
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "punctuation.section.function.scss"
          }
        },
        "patterns": [
          {
            "include": "#parameters"
          }
        ]
      },
      "constant_important": {
        "match": "!important",
        "name": "keyword.other.important.scss"
      },
      "constant_mathematical_symbols": {
        "match": "\\b(\\+|-|\\*|/)\\b",
        "name": "support.constant.mathematical-symbols.scss"
      },
      "constant_optional": {
        "match": "!optional",
        "name": "keyword.other.optional.scss"
      },
      "constant_sass_functions": {
        "begin": "(headings|stylesheet-url|rgba?|hsla?|ie-hex-str|red|green|blue|alpha|opacity|hue|saturation|lightness|prefixed|prefix|-moz|-svg|-css2|-pie|-webkit|-ms|font-(?:files|url)|grid-image|image-(?:width|height|url|color)|sprites?|sprite-(?:map|map-name|file|url|position)|inline-(?:font-files|image)|opposite-position|grad-point|grad-end-position|color-stops|color-stops-in-percentages|grad-color-stops|(?:radial|linear)-(?:gradient|svg-gradient)|opacify|fade-?in|transparentize|fade-?out|lighten|darken|saturate|desaturate|grayscale|adjust-(?:hue|lightness|saturation|color)|scale-(?:lightness|saturation|color)|change-color|spin|complement|invert|mix|-compass-(?:list|space-list|slice|nth|list-size)|blank|compact|nth|first-value-of|join|length|append|nest|append-selector|headers|enumerate|range|percentage|unitless|unit|if|type-of|comparable|elements-of-type|quote|unquote|escape|e|sin|cos|tan|abs|round|ceil|floor|pi|translate(?:X|Y))(\\()",
        "beginCaptures": {
          "1": {
            "name": "support.function.misc.scss"
          },
          "2": {
            "name": "punctuation.section.function.scss"
          }
        },
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "punctuation.section.function.scss"
          }
        },
        "patterns": [
          {
            "include": "#parameters"
          }
        ]
      },
      "flow_control": {
        "patterns": [
          {
            "include": "#at_rule_if"
          },
          {
            "include": "#at_rule_else"
          },
          {
            "include": "#at_rule_warn"
          },
          {
            "include": "#at_rule_for"
          },
          {
            "include": "#at_rule_while"
          },
          {
            "include": "#at_rule_each"
          },
          {
            "include": "#at_rule_return"
          }
        ]
      },
      "function_attributes": {
        "patterns": [
          {
            "match": ":",
            "name": "punctuation.separator.key-value.scss"
          },
          {
            "include": "#general"
          },
          {
            "include": "#property_values"
          },
          {
            "match": "[={}\\?;@]",
            "name": "invalid.illegal.scss"
          }
        ]
      },
      "functions": {
        "patterns": [
          {
            "begin": "([\\w-]{1,})(\\()\\s*",
            "beginCaptures": {
              "1": {
                "name": "support.function.misc.scss"
              },
              "2": {
                "name": "punctuation.section.function.scss"
              }
            },
            "end": "(\\))",
            "endCaptures": {
              "1": {
                "name": "punctuation.section.function.scss"
              }
            },
            "patterns": [
              {
                "include": "#parameters"
              }
            ]
          },
          {
            "match": "([\\w-]{1,})",
            "name": "support.function.misc.scss"
          }
        ]
      },
      "general": {
        "patterns": [
          {
            "include": "#variable"
          },
          {
            "include": "#comment_docblock"
          },
          {
            "include": "#comment_block"
          },
          {
            "include": "#comment_line"
          }
        ]
      },
      "interpolation": {
        "begin": "#{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.interpolation.begin.bracket.curly.scss"
          }
        },
        "end": "}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.interpolation.end.bracket.curly.scss"
          }
        },
        "name": "variable.interpolation.scss",
        "patterns": [
          {
            "include": "#variable"
          },
          {
            "include": "#property_values"
          }
        ]
      },
      "logical_operators": {
        "match": "\\b(not|or|and)\\b",
        "name": "keyword.operator.logical.scss"
      },
      "map": {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.map.begin.bracket.round.scss"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.map.end.bracket.round.scss"
          }
        },
        "name": "meta.definition.variable.map.scss",
        "patterns": [
          {
            "include": "#comment_docblock"
          },
          {
            "include": "#comment_block"
          },
          {
            "include": "#comment_line"
          },
          {
            "captures": {
              "1": {
                "name": "support.type.map.key.scss"
              },
              "2": {
                "name": "punctuation.separator.key-value.scss"
              }
            },
            "match": "\\b([\\w-]+)\\s*(:)"
          },
          {
            "match": ",",
            "name": "punctuation.separator.delimiter.scss"
          },
          {
            "include": "#map"
          },
          {
            "include": "#variable"
          },
          {
            "include": "#property_values"
          }
        ]
      },
      "operators": {
        "match": "[-+*/](?!\\s*[-+*/])",
        "name": "keyword.operator.css"
      },
      "parameters": {
        "patterns": [
          {
            "include": "#variable"
          },
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.begin.bracket.round.scss"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.end.bracket.round.scss"
              }
            },
            "patterns": [
              {
                "include": "#function_attributes"
              }
            ]
          },
          {
            "include": "#property_values"
          },
          {
            "include": "#comment_block"
          },
          {
            "match": "[^'\",) \\t]+",
            "name": "variable.parameter.url.scss"
          },
          {
            "match": ",",
            "name": "punctuation.separator.delimiter.scss"
          }
        ]
      },
      "parent_selector_suffix": {
        "captures": {
          "1": {
            "name": "punctuation.definition.entity.css"
          },
          "2": {
            "patterns": [
              {
                "include": "#interpolation"
              },
              {
                "match": "\\\\([0-9a-fA-F]{1,6}|.)",
                "name": "constant.character.escape.scss"
              },
              {
                "match": "\\$|}",
                "name": "invalid.illegal.identifier.scss"
              }
            ]
          }
        },
        "match": "(?<=&)((?:[-a-zA-Z_0-9]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.)|\\#\\{|\\$|})+)(?=$|[\\s,.\\#)\\[:{>+~|]|/\\*)",
        "name": "entity.other.attribute-name.parent-selector-suffix.css"
      },
      "properties": {
        "patterns": [
          {
            "begin": "(?<![-a-z])(?=[-a-z])",
            "end": "$|(?![-a-z])",
            "name": "meta.property-name.scss",
            "patterns": [
              {
                "include": "source.css#property-names"
              },
              {
                "include": "#at_rule_include"
              }
            ]
          },
          {
            "begin": "(:)\\s*(?!(\\s*{))",
            "beginCaptures": {
              "1": {
                "name": "punctuation.separator.key-value.scss"
              }
            },
            "contentName": "meta.property-value.scss",
            "end": "\\s*(;|(?=}|\\)))",
            "endCaptures": {
              "1": {
                "name": "punctuation.terminator.rule.scss"
              }
            },
            "patterns": [
              {
                "include": "#general"
              },
              {
                "include": "#property_values"
              }
            ]
          }
        ]
      },
      "property_list": {
        "begin": "{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.property-list.begin.bracket.curly.scss"
          }
        },
        "end": "}",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.property-list.end.bracket.curly.scss"
          }
        },
        "name": "meta.property-list.scss",
        "patterns": [
          {
            "include": "#flow_control"
          },
          {
            "include": "#rules"
          },
          {
            "include": "#properties"
          },
          {
            "include": "$self"
          }
        ]
      },
      "property_values": {
        "patterns": [
          {
            "include": "#string_single"
          },
          {
            "include": "#string_double"
          },
          {
            "include": "#constant_functions"
          },
          {
            "include": "#constant_sass_functions"
          },
          {
            "include": "#constant_important"
          },
          {
            "include": "#constant_default"
          },
          {
            "include": "#constant_optional"
          },
          {
            "include": "source.css#numeric-values"
          },
          {
            "include": "source.css#property-keywords"
          },
          {
            "include": "source.css#color-keywords"
          },
          {
            "include": "source.css#property-names"
          },
          {
            "include": "#constant_mathematical_symbols"
          },
          {
            "include": "#operators"
          },
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.begin.bracket.round.scss"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.end.bracket.round.scss"
              }
            },
            "patterns": [
              {
                "include": "#general"
              },
              {
                "include": "#property_values"
              }
            ]
          }
        ]
      },
      "rules": {
        "patterns": [
          {
            "include": "#general"
          },
          {
            "include": "#at_rule_extend"
          },
          {
            "include": "#at_rule_content"
          },
          {
            "include": "#at_rule_include"
          },
          {
            "include": "#at_rule_media"
          },
          {
            "include": "#selectors"
          }
        ]
      },
      "selector_attribute": {
        "captures": {
          "1": {
            "name": "punctuation.definition.attribute-selector.begin.bracket.square.scss"
          },
          "2": {
            "name": "entity.other.attribute-name.attribute.scss",
            "patterns": [
              {
                "include": "#interpolation"
              },
              {
                "match": "\\\\([0-9a-fA-F]{1,6}|.)",
                "name": "constant.character.escape.scss"
              },
              {
                "match": "\\$|}",
                "name": "invalid.illegal.scss"
              }
            ]
          },
          "3": {
            "name": "keyword.operator.scss"
          },
          "4": {
            "name": "string.unquoted.attribute-value.scss",
            "patterns": [
              {
                "include": "#interpolation"
              },
              {
                "match": "\\\\([0-9a-fA-F]{1,6}|.)",
                "name": "constant.character.escape.scss"
              },
              {
                "match": "\\$|}",
                "name": "invalid.illegal.scss"
              }
            ]
          },
          "5": {
            "name": "string.quoted.double.attribute-value.scss"
          },
          "6": {
            "name": "punctuation.definition.string.begin.scss"
          },
          "7": {
            "patterns": [
              {
                "include": "#interpolation"
              },
              {
                "match": "\\\\([0-9a-fA-F]{1,6}|.)",
                "name": "constant.character.escape.scss"
              },
              {
                "match": "\\$|}",
                "name": "invalid.illegal.scss"
              }
            ]
          },
          "8": {
            "name": "punctuation.definition.string.end.scss"
          },
          "9": {
            "name": "string.quoted.single.attribute-value.scss"
          },
          "10": {
            "name": "punctuation.definition.string.begin.scss"
          },
          "11": {
            "patterns": [
              {
                "include": "#interpolation"
              },
              {
                "match": "\\\\([0-9a-fA-F]{1,6}|.)",
                "name": "constant.character.escape.scss"
              },
              {
                "match": "\\$|}",
                "name": "invalid.illegal.scss"
              }
            ]
          },
          "12": {
            "name": "punctuation.definition.string.end.scss"
          },
          "13": {
            "name": "punctuation.definition.attribute-selector.end.bracket.square.scss"
          }
        },
        "match": "(?xi)\n(\\[)\n\\s*\n(\n  (?:\n    [-a-zA-Z_0-9]|[^\\x00-\\x7F]       # Valid identifier characters\n    | \\\\(?:[0-9a-fA-F]{1,6}|.)       # Escape sequence\n    | \\#\\{                           # Interpolation (escaped to avoid Coffeelint errors)\n    | \\.?\\$                          # Possible start of interpolation variable\n    | }                                # Possible end of interpolation\n  )+?\n)\n(?:\n  \\s*([~|^$*]?=)\\s*\n  (?:\n    (\n      (?:\n        [-a-zA-Z_0-9]|[^\\x00-\\x7F]       # Valid identifier characters\n        | \\\\(?:[0-9a-fA-F]{1,6}|.)       # Escape sequence\n        | \\#\\{                           # Interpolation (escaped to avoid Coffeelint errors)\n        | \\.?\\$                          # Possible start of interpolation variable\n        | }                                # Possible end of interpolation\n      )+\n    )\n    |\n    ((\")(.*?)(\"))\n    |\n    ((')(.*?)('))\n  )\n)?\n\\s*\n(\\])",
        "name": "meta.attribute-selector.scss"
      },
      "selector_class": {
        "captures": {
          "1": {
            "name": "punctuation.definition.entity.css"
          },
          "2": {
            "patterns": [
              {
                "include": "#interpolation"
              },
              {
                "match": "\\\\([0-9a-fA-F]{1,6}|.)",
                "name": "constant.character.escape.scss"
              },
              {
                "match": "\\$|}",
                "name": "invalid.illegal.scss"
              }
            ]
          }
        },
        "match": "(\\.)((?:[-a-zA-Z_0-9]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.)|\\#\\{|\\.?\\$|})+)(?=$|[\\s,\\#)\\[:{>+~|]|\\.[^$]|/\\*|;)",
        "name": "entity.other.attribute-name.class.css"
      },
      "selector_custom": {
        "match": "\\b([a-zA-Z0-9]+(-[a-zA-Z0-9]+)+)(?=\\.|\\s++[^:]|\\s*[,\\[{]|:(link|visited|hover|active|focus|target|lang|disabled|enabled|checked|indeterminate|root|nth-(child|last-child|of-type|last-of-type)|first-child|last-child|first-of-type|last-of-type|only-child|only-of-type|empty|not|valid|invalid)(\\([0-9A-Za-z]*\\))?)",
        "name": "entity.name.tag.custom.scss"
      },
      "selector_id": {
        "captures": {
          "1": {
            "name": "punctuation.definition.entity.css"
          },
          "2": {
            "patterns": [
              {
                "include": "#interpolation"
              },
              {
                "match": "\\\\([0-9a-fA-F]{1,6}|.)",
                "name": "constant.character.escape.scss"
              },
              {
                "match": "\\$|}",
                "name": "invalid.illegal.identifier.scss"
              }
            ]
          }
        },
        "match": "(\\#)((?:[-a-zA-Z_0-9]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.)|\\#\\{|\\.?\\$|})+)(?=$|[\\s,\\#)\\[:{>+~|]|\\.[^$]|/\\*)",
        "name": "entity.other.attribute-name.id.css"
      },
      "selector_placeholder": {
        "captures": {
          "1": {
            "name": "punctuation.definition.entity.css"
          },
          "2": {
            "patterns": [
              {
                "include": "#interpolation"
              },
              {
                "match": "\\\\([0-9a-fA-F]{1,6}|.)",
                "name": "constant.character.escape.scss"
              },
              {
                "match": "\\$|}",
                "name": "invalid.illegal.identifier.scss"
              }
            ]
          }
        },
        "match": "(%)((?:[-a-zA-Z_0-9]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.)|\\#\\{|\\.\\$|\\$|})+)(?=;|$|[\\s,\\#)\\[:{>+~|]|\\.[^$]|/\\*)",
        "name": "entity.other.attribute-name.placeholder.css"
      },
      "selector_pseudo_class": {
        "patterns": [
          {
            "begin": "((:)\\bnth-(?:child|last-child|of-type|last-of-type))(\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.other.attribute-name.pseudo-class.css"
              },
              "2": {
                "name": "punctuation.definition.entity.css"
              },
              "3": {
                "name": "punctuation.definition.pseudo-class.begin.bracket.round.css"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.pseudo-class.end.bracket.round.css"
              }
            },
            "patterns": [
              {
                "include": "#interpolation"
              },
              {
                "match": "\\d+",
                "name": "constant.numeric.css"
              },
              {
                "match": "(?<=\\d)n\\b|\\b(n|even|odd)\\b",
                "name": "constant.other.scss"
              },
              {
                "match": "\\w+",
                "name": "invalid.illegal.scss"
              }
            ]
          },
          {
            "include": "source.css#pseudo-classes"
          },
          {
            "include": "source.css#pseudo-elements"
          },
          {
            "include": "source.css#functional-pseudo-classes"
          }
        ]
      },
      "selectors": {
        "patterns": [
          {
            "include": "source.css#tag-names"
          },
          {
            "include": "#selector_custom"
          },
          {
            "include": "#selector_class"
          },
          {
            "include": "#selector_id"
          },
          {
            "include": "#selector_pseudo_class"
          },
          {
            "include": "#tag_wildcard"
          },
          {
            "include": "#tag_parent_reference"
          },
          {
            "include": "source.css#pseudo-elements"
          },
          {
            "include": "#selector_attribute"
          },
          {
            "include": "#selector_placeholder"
          },
          {
            "include": "#parent_selector_suffix"
          }
        ]
      },
      "string_double": {
        "begin": "\"",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.scss"
          }
        },
        "end": "\"",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.scss"
          }
        },
        "name": "string.quoted.double.scss",
        "patterns": [
          {
            "match": "\\\\(\\h{1,6}|.)",
            "name": "constant.character.escape.scss"
          },
          {
            "include": "#interpolation"
          }
        ]
      },
      "string_single": {
        "begin": "'",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.scss"
          }
        },
        "end": "'",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.scss"
          }
        },
        "name": "string.quoted.single.scss",
        "patterns": [
          {
            "match": "\\\\(\\h{1,6}|.)",
            "name": "constant.character.escape.scss"
          },
          {
            "include": "#interpolation"
          }
        ]
      },
      "tag_parent_reference": {
        "match": "&",
        "name": "entity.name.tag.reference.scss"
      },
      "tag_wildcard": {
        "match": "\\*",
        "name": "entity.name.tag.wildcard.scss"
      },
      "variable": {
        "patterns": [
          {
            "include": "#variables"
          },
          {
            "include": "#interpolation"
          }
        ]
      },
      "variable_setting": {
        "begin": "(?=\\$[\\w-]+\\s*:)",
        "contentName": "meta.definition.variable.scss",
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.rule.scss"
          }
        },
        "patterns": [
          {
            "match": "\\$[\\w-]+(?=\\s*:)",
            "name": "variable.scss"
          },
          {
            "begin": ":",
            "beginCaptures": {
              "0": {
                "name": "punctuation.separator.key-value.scss"
              }
            },
            "end": "(?=;)",
            "patterns": [
              {
                "include": "#comment_docblock"
              },
              {
                "include": "#comment_block"
              },
              {
                "include": "#comment_line"
              },
              {
                "include": "#map"
              },
              {
                "include": "#property_values"
              },
              {
                "include": "#variable"
              },
              {
                "match": ",",
                "name": "punctuation.separator.delimiter.scss"
              }
            ]
          }
        ]
      },
      "variables": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "variable.scss"
              },
              "2": {
                "name": "punctuation.access.module.scss"
              },
              "3": {
                "name": "variable.scss"
              }
            },
            "match": "\\b([\\w-]+)(\\.)(\\$[\\w-]+)\\b"
          },
          {
            "match": "(\\$|\\-\\-)[A-Za-z0-9_-]+\\b",
            "name": "variable.scss"
          }
        ]
      }
    },
    "scopeName": "source.css.scss",
    "embeddedLangs": [
      "css"
    ]
  },
  {
    "displayName": "JavaScript",
    "name": "javascript",
    "patterns": [
      {
        "include": "#directives"
      },
      {
        "include": "#statements"
      },
      {
        "include": "#shebang"
      }
    ],
    "repository": {
      "access-modifier": {
        "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(abstract|declare|override|public|protected|private|readonly|static)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        "name": "storage.modifier.js"
      },
      "after-operator-block-as-object-literal": {
        "begin": "(?<!\\+\\+|--)(?<=[:=(,\\[?+!>]|^await|[^\\._$[:alnum:]]await|^return|[^\\._$[:alnum:]]return|^yield|[^\\._$[:alnum:]]yield|^throw|[^\\._$[:alnum:]]throw|^in|[^\\._$[:alnum:]]in|^of|[^\\._$[:alnum:]]of|^typeof|[^\\._$[:alnum:]]typeof|&&|\\|\\||\\*)\\s*(\\{)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.block.js"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.block.js"
          }
        },
        "name": "meta.objectliteral.js",
        "patterns": [
          {
            "include": "#object-member"
          }
        ]
      },
      "array-binding-pattern": {
        "begin": "(?:(\\.\\.\\.)\\s*)?(\\[)",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.rest.js"
          },
          "2": {
            "name": "punctuation.definition.binding-pattern.array.js"
          }
        },
        "end": "\\]",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.binding-pattern.array.js"
          }
        },
        "patterns": [
          {
            "include": "#binding-element"
          },
          {
            "include": "#punctuation-comma"
          }
        ]
      },
      "array-binding-pattern-const": {
        "begin": "(?:(\\.\\.\\.)\\s*)?(\\[)",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.rest.js"
          },
          "2": {
            "name": "punctuation.definition.binding-pattern.array.js"
          }
        },
        "end": "\\]",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.binding-pattern.array.js"
          }
        },
        "patterns": [
          {
            "include": "#binding-element-const"
          },
          {
            "include": "#punctuation-comma"
          }
        ]
      },
      "array-literal": {
        "begin": "\\s*(\\[)",
        "beginCaptures": {
          "1": {
            "name": "meta.brace.square.js"
          }
        },
        "end": "\\]",
        "endCaptures": {
          "0": {
            "name": "meta.brace.square.js"
          }
        },
        "name": "meta.array.literal.js",
        "patterns": [
          {
            "include": "#expression"
          },
          {
            "include": "#punctuation-comma"
          }
        ]
      },
      "arrow-function": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "storage.modifier.async.js"
              },
              "2": {
                "name": "variable.parameter.js"
              }
            },
            "match": "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(\\basync)\\s+)?([_$[:alpha:]][_$[:alnum:]]*)\\s*(?==>)",
            "name": "meta.arrow.js"
          },
          {
            "begin": "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(\\basync))?((?<![})!\\]])\\s*(?=((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|([<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.async.js"
              }
            },
            "end": "(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))",
            "name": "meta.arrow.js",
            "patterns": [
              {
                "include": "#comment"
              },
              {
                "include": "#type-parameters"
              },
              {
                "include": "#function-parameters"
              },
              {
                "include": "#arrow-return-type"
              },
              {
                "include": "#possibly-arrow-return-type"
              }
            ]
          },
          {
            "begin": "=>",
            "beginCaptures": {
              "0": {
                "name": "storage.type.function.arrow.js"
              }
            },
            "end": "((?<=\\}|\\S)(?<!=>)|((?!\\{)(?=\\S)))(?!\\/[\\/\\*])",
            "name": "meta.arrow.js",
            "patterns": [
              {
                "include": "#single-line-comment-consuming-line-ending"
              },
              {
                "include": "#decl-block"
              },
              {
                "include": "#expression"
              }
            ]
          }
        ]
      },
      "arrow-return-type": {
        "begin": "(?<=\\))\\s*(:)",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.type.annotation.js"
          }
        },
        "end": "(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))",
        "name": "meta.return.type.arrow.js",
        "patterns": [
          {
            "include": "#arrow-return-type-body"
          }
        ]
      },
      "arrow-return-type-body": {
        "patterns": [
          {
            "begin": "(?<=[:])(?=\\s*\\{)",
            "end": "(?<=\\})",
            "patterns": [
              {
                "include": "#type-object"
              }
            ]
          },
          {
            "include": "#type-predicate-operator"
          },
          {
            "include": "#type"
          }
        ]
      },
      "async-modifier": {
        "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(async)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        "name": "storage.modifier.async.js"
      },
      "binding-element": {
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#string"
          },
          {
            "include": "#numeric-literal"
          },
          {
            "include": "#regex"
          },
          {
            "include": "#object-binding-pattern"
          },
          {
            "include": "#array-binding-pattern"
          },
          {
            "include": "#destructuring-variable-rest"
          },
          {
            "include": "#variable-initializer"
          }
        ]
      },
      "binding-element-const": {
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#string"
          },
          {
            "include": "#numeric-literal"
          },
          {
            "include": "#regex"
          },
          {
            "include": "#object-binding-pattern-const"
          },
          {
            "include": "#array-binding-pattern-const"
          },
          {
            "include": "#destructuring-variable-rest-const"
          },
          {
            "include": "#variable-initializer"
          }
        ]
      },
      "boolean-literal": {
        "patterns": [
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))true(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "constant.language.boolean.true.js"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))false(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "constant.language.boolean.false.js"
          }
        ]
      },
      "brackets": {
        "patterns": [
          {
            "begin": "{",
            "end": "}|(?=\\*/)",
            "patterns": [
              {
                "include": "#brackets"
              }
            ]
          },
          {
            "begin": "\\[",
            "end": "\\]|(?=\\*/)",
            "patterns": [
              {
                "include": "#brackets"
              }
            ]
          }
        ]
      },
      "cast": {
        "patterns": [
          {
            "include": "#jsx"
          }
        ]
      },
      "class-declaration": {
        "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(?:(abstract)\\s+)?\\b(class)\\b(?=\\s+|/[/*])",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.export.js"
          },
          "2": {
            "name": "storage.modifier.js"
          },
          "3": {
            "name": "storage.modifier.js"
          },
          "4": {
            "name": "storage.type.class.js"
          }
        },
        "end": "(?<=\\})",
        "name": "meta.class.js",
        "patterns": [
          {
            "include": "#class-declaration-or-expression-patterns"
          }
        ]
      },
      "class-declaration-or-expression-patterns": {
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#class-or-interface-heritage"
          },
          {
            "captures": {
              "0": {
                "name": "entity.name.type.class.js"
              }
            },
            "match": "[_$[:alpha:]][_$[:alnum:]]*"
          },
          {
            "include": "#type-parameters"
          },
          {
            "include": "#class-or-interface-body"
          }
        ]
      },
      "class-expression": {
        "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(class)\\b(?=\\s+|[<{]|\\/[\\/*])",
        "beginCaptures": {
          "1": {
            "name": "storage.modifier.js"
          },
          "2": {
            "name": "storage.type.class.js"
          }
        },
        "end": "(?<=\\})",
        "name": "meta.class.js",
        "patterns": [
          {
            "include": "#class-declaration-or-expression-patterns"
          }
        ]
      },
      "class-or-interface-body": {
        "begin": "\\{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.block.js"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.block.js"
          }
        },
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#decorator"
          },
          {
            "begin": "(?<=:)\\s*",
            "end": "(?=\\s|[;),}\\]:\\-\\+]|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",
            "patterns": [
              {
                "include": "#expression"
              }
            ]
          },
          {
            "include": "#method-declaration"
          },
          {
            "include": "#indexer-declaration"
          },
          {
            "include": "#field-declaration"
          },
          {
            "include": "#string"
          },
          {
            "include": "#type-annotation"
          },
          {
            "include": "#variable-initializer"
          },
          {
            "include": "#access-modifier"
          },
          {
            "include": "#property-accessor"
          },
          {
            "include": "#async-modifier"
          },
          {
            "include": "#after-operator-block-as-object-literal"
          },
          {
            "include": "#decl-block"
          },
          {
            "include": "#expression"
          },
          {
            "include": "#punctuation-comma"
          },
          {
            "include": "#punctuation-semicolon"
          }
        ]
      },
      "class-or-interface-heritage": {
        "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(extends|implements)\\b)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        "beginCaptures": {
          "1": {
            "name": "storage.modifier.js"
          }
        },
        "end": "(?=\\{)",
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#class-or-interface-heritage"
          },
          {
            "include": "#type-parameters"
          },
          {
            "include": "#expressionWithoutIdentifiers"
          },
          {
            "captures": {
              "1": {
                "name": "entity.name.type.module.js"
              },
              "2": {
                "name": "punctuation.accessor.js"
              },
              "3": {
                "name": "punctuation.accessor.optional.js"
              }
            },
            "match": "([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))(?=\\s*[_$[:alpha:]][_$[:alnum:]]*(\\s*\\??\\.\\s*[_$[:alpha:]][_$[:alnum:]]*)*\\s*)"
          },
          {
            "captures": {
              "1": {
                "name": "entity.other.inherited-class.js"
              }
            },
            "match": "([_$[:alpha:]][_$[:alnum:]]*)"
          },
          {
            "include": "#expressionPunctuations"
          }
        ]
      },
      "comment": {
        "patterns": [
          {
            "begin": "/\\*\\*(?!/)",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.comment.js"
              }
            },
            "end": "\\*/",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.comment.js"
              }
            },
            "name": "comment.block.documentation.js",
            "patterns": [
              {
                "include": "#docblock"
              }
            ]
          },
          {
            "begin": "(/\\*)(?:\\s*((@)internal)(?=\\s|(\\*/)))?",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.comment.js"
              },
              "2": {
                "name": "storage.type.internaldeclaration.js"
              },
              "3": {
                "name": "punctuation.decorator.internaldeclaration.js"
              }
            },
            "end": "\\*/",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.comment.js"
              }
            },
            "name": "comment.block.js"
          },
          {
            "begin": "(^[ \\t]+)?((//)(?:\\s*((@)internal)(?=\\s|$))?)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.whitespace.comment.leading.js"
              },
              "2": {
                "name": "comment.line.double-slash.js"
              },
              "3": {
                "name": "punctuation.definition.comment.js"
              },
              "4": {
                "name": "storage.type.internaldeclaration.js"
              },
              "5": {
                "name": "punctuation.decorator.internaldeclaration.js"
              }
            },
            "contentName": "comment.line.double-slash.js",
            "end": "(?=$)"
          }
        ]
      },
      "control-statement": {
        "patterns": [
          {
            "include": "#switch-statement"
          },
          {
            "include": "#for-loop"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(catch|finally|throw|try)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.control.trycatch.js"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.control.loop.js"
              },
              "2": {
                "name": "entity.name.label.js"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(break|continue|goto)\\s+([_$[:alpha:]][_$[:alnum:]]*)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(break|continue|do|goto|while)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.control.loop.js"
          },
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(return)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "beginCaptures": {
              "0": {
                "name": "keyword.control.flow.js"
              }
            },
            "end": "(?=[;}]|$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",
            "patterns": [
              {
                "include": "#expression"
              }
            ]
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(case|default|switch)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.control.switch.js"
          },
          {
            "include": "#if-statement"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(else|if)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.control.conditional.js"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(with)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.control.with.js"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(package)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.control.js"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(debugger)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.other.debugger.js"
          }
        ]
      },
      "decl-block": {
        "begin": "\\{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.block.js"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.block.js"
          }
        },
        "name": "meta.block.js",
        "patterns": [
          {
            "include": "#statements"
          }
        ]
      },
      "declaration": {
        "patterns": [
          {
            "include": "#decorator"
          },
          {
            "include": "#var-expr"
          },
          {
            "include": "#function-declaration"
          },
          {
            "include": "#class-declaration"
          },
          {
            "include": "#interface-declaration"
          },
          {
            "include": "#enum-declaration"
          },
          {
            "include": "#namespace-declaration"
          },
          {
            "include": "#type-alias-declaration"
          },
          {
            "include": "#import-equals-declaration"
          },
          {
            "include": "#import-declaration"
          },
          {
            "include": "#export-declaration"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(declare|export)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "storage.modifier.js"
          }
        ]
      },
      "decorator": {
        "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))\\@",
        "beginCaptures": {
          "0": {
            "name": "punctuation.decorator.js"
          }
        },
        "end": "(?=\\s)",
        "name": "meta.decorator.js",
        "patterns": [
          {
            "include": "#expression"
          }
        ]
      },
      "destructuring-const": {
        "patterns": [
          {
            "begin": "(?<!=|:|^of|[^\\._$[:alnum:]]of|^in|[^\\._$[:alnum:]]in)\\s*(?=\\{)",
            "end": "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            "name": "meta.object-binding-pattern-variable.js",
            "patterns": [
              {
                "include": "#object-binding-pattern-const"
              },
              {
                "include": "#type-annotation"
              },
              {
                "include": "#comment"
              }
            ]
          },
          {
            "begin": "(?<!=|:|^of|[^\\._$[:alnum:]]of|^in|[^\\._$[:alnum:]]in)\\s*(?=\\[)",
            "end": "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            "name": "meta.array-binding-pattern-variable.js",
            "patterns": [
              {
                "include": "#array-binding-pattern-const"
              },
              {
                "include": "#type-annotation"
              },
              {
                "include": "#comment"
              }
            ]
          }
        ]
      },
      "destructuring-parameter": {
        "patterns": [
          {
            "begin": "(?<!=|:)\\s*(?:(\\.\\.\\.)\\s*)?(\\{)",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.rest.js"
              },
              "2": {
                "name": "punctuation.definition.binding-pattern.object.js"
              }
            },
            "end": "\\}",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.binding-pattern.object.js"
              }
            },
            "name": "meta.parameter.object-binding-pattern.js",
            "patterns": [
              {
                "include": "#parameter-object-binding-element"
              }
            ]
          },
          {
            "begin": "(?<!=|:)\\s*(?:(\\.\\.\\.)\\s*)?(\\[)",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.rest.js"
              },
              "2": {
                "name": "punctuation.definition.binding-pattern.array.js"
              }
            },
            "end": "\\]",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.binding-pattern.array.js"
              }
            },
            "name": "meta.paramter.array-binding-pattern.js",
            "patterns": [
              {
                "include": "#parameter-binding-element"
              },
              {
                "include": "#punctuation-comma"
              }
            ]
          }
        ]
      },
      "destructuring-parameter-rest": {
        "captures": {
          "1": {
            "name": "keyword.operator.rest.js"
          },
          "2": {
            "name": "variable.parameter.js"
          }
        },
        "match": "(?:(\\.\\.\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)"
      },
      "destructuring-variable": {
        "patterns": [
          {
            "begin": "(?<!=|:|^of|[^\\._$[:alnum:]]of|^in|[^\\._$[:alnum:]]in)\\s*(?=\\{)",
            "end": "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            "name": "meta.object-binding-pattern-variable.js",
            "patterns": [
              {
                "include": "#object-binding-pattern"
              },
              {
                "include": "#type-annotation"
              },
              {
                "include": "#comment"
              }
            ]
          },
          {
            "begin": "(?<!=|:|^of|[^\\._$[:alnum:]]of|^in|[^\\._$[:alnum:]]in)\\s*(?=\\[)",
            "end": "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            "name": "meta.array-binding-pattern-variable.js",
            "patterns": [
              {
                "include": "#array-binding-pattern"
              },
              {
                "include": "#type-annotation"
              },
              {
                "include": "#comment"
              }
            ]
          }
        ]
      },
      "destructuring-variable-rest": {
        "captures": {
          "1": {
            "name": "keyword.operator.rest.js"
          },
          "2": {
            "name": "meta.definition.variable.js variable.other.readwrite.js"
          }
        },
        "match": "(?:(\\.\\.\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)"
      },
      "destructuring-variable-rest-const": {
        "captures": {
          "1": {
            "name": "keyword.operator.rest.js"
          },
          "2": {
            "name": "meta.definition.variable.js variable.other.constant.js"
          }
        },
        "match": "(?:(\\.\\.\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)"
      },
      "directives": {
        "begin": "^(///)\\s*(?=<(reference|amd-dependency|amd-module)(\\s+(path|types|no-default-lib|lib|name|resolution-mode)\\s*=\\s*((\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)))+\\s*/>\\s*$)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.comment.js"
          }
        },
        "end": "(?=$)",
        "name": "comment.line.triple-slash.directive.js",
        "patterns": [
          {
            "begin": "(<)(reference|amd-dependency|amd-module)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.directive.js"
              },
              "2": {
                "name": "entity.name.tag.directive.js"
              }
            },
            "end": "/>",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.directive.js"
              }
            },
            "name": "meta.tag.js",
            "patterns": [
              {
                "match": "path|types|no-default-lib|lib|name|resolution-mode",
                "name": "entity.other.attribute-name.directive.js"
              },
              {
                "match": "=",
                "name": "keyword.operator.assignment.js"
              },
              {
                "include": "#string"
              }
            ]
          }
        ]
      },
      "docblock": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "storage.type.class.jsdoc"
              },
              "2": {
                "name": "punctuation.definition.block.tag.jsdoc"
              },
              "3": {
                "name": "constant.language.access-type.jsdoc"
              }
            },
            "match": "((@)(?:access|api))\\s+(private|protected|public)\\b"
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.class.jsdoc"
              },
              "2": {
                "name": "punctuation.definition.block.tag.jsdoc"
              },
              "3": {
                "name": "entity.name.type.instance.jsdoc"
              },
              "4": {
                "name": "punctuation.definition.bracket.angle.begin.jsdoc"
              },
              "5": {
                "name": "constant.other.email.link.underline.jsdoc"
              },
              "6": {
                "name": "punctuation.definition.bracket.angle.end.jsdoc"
              }
            },
            "match": "((@)author)\\s+([^@\\s<>*/](?:[^@<>*/]|\\*[^/])*)(?:\\s*(<)([^>\\s]+)(>))?"
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.class.jsdoc"
              },
              "2": {
                "name": "punctuation.definition.block.tag.jsdoc"
              },
              "3": {
                "name": "entity.name.type.instance.jsdoc"
              },
              "4": {
                "name": "keyword.operator.control.jsdoc"
              },
              "5": {
                "name": "entity.name.type.instance.jsdoc"
              }
            },
            "match": "((@)borrows)\\s+((?:[^@\\s*/]|\\*[^/])+)\\s+(as)\\s+((?:[^@\\s*/]|\\*[^/])+)"
          },
          {
            "begin": "((@)example)\\s+",
            "beginCaptures": {
              "1": {
                "name": "storage.type.class.jsdoc"
              },
              "2": {
                "name": "punctuation.definition.block.tag.jsdoc"
              }
            },
            "end": "(?=@|\\*/)",
            "name": "meta.example.jsdoc",
            "patterns": [
              {
                "match": "^\\s\\*\\s+"
              },
              {
                "begin": "\\G(<)caption(>)",
                "beginCaptures": {
                  "0": {
                    "name": "entity.name.tag.inline.jsdoc"
                  },
                  "1": {
                    "name": "punctuation.definition.bracket.angle.begin.jsdoc"
                  },
                  "2": {
                    "name": "punctuation.definition.bracket.angle.end.jsdoc"
                  }
                },
                "contentName": "constant.other.description.jsdoc",
                "end": "(</)caption(>)|(?=\\*/)",
                "endCaptures": {
                  "0": {
                    "name": "entity.name.tag.inline.jsdoc"
                  },
                  "1": {
                    "name": "punctuation.definition.bracket.angle.begin.jsdoc"
                  },
                  "2": {
                    "name": "punctuation.definition.bracket.angle.end.jsdoc"
                  }
                }
              },
              {
                "captures": {
                  "0": {
                    "name": "source.embedded.js"
                  }
                },
                "match": "[^\\s@*](?:[^*]|\\*[^/])*"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.class.jsdoc"
              },
              "2": {
                "name": "punctuation.definition.block.tag.jsdoc"
              },
              "3": {
                "name": "constant.language.symbol-type.jsdoc"
              }
            },
            "match": "((@)kind)\\s+(class|constant|event|external|file|function|member|mixin|module|namespace|typedef)\\b"
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.class.jsdoc"
              },
              "2": {
                "name": "punctuation.definition.block.tag.jsdoc"
              },
              "3": {
                "name": "variable.other.link.underline.jsdoc"
              },
              "4": {
                "name": "entity.name.type.instance.jsdoc"
              }
            },
            "match": "((@)see)\\s+(?:((?=https?://)(?:[^\\s*]|\\*[^/])+)|((?!https?://|(?:\\[[^\\[\\]]*\\])?{@(?:link|linkcode|linkplain|tutorial)\\b)(?:[^@\\s*/]|\\*[^/])+))"
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.class.jsdoc"
              },
              "2": {
                "name": "punctuation.definition.block.tag.jsdoc"
              },
              "3": {
                "name": "variable.other.jsdoc"
              }
            },
            "match": "((@)template)\\s+([A-Za-z_$][\\w$.\\[\\]]*(?:\\s*,\\s*[A-Za-z_$][\\w$.\\[\\]]*)*)"
          },
          {
            "begin": "((@)template)\\s+(?={)",
            "beginCaptures": {
              "1": {
                "name": "storage.type.class.jsdoc"
              },
              "2": {
                "name": "punctuation.definition.block.tag.jsdoc"
              }
            },
            "end": "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
            "patterns": [
              {
                "include": "#jsdoctype"
              },
              {
                "match": "([A-Za-z_$][\\w$.\\[\\]]*)",
                "name": "variable.other.jsdoc"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.class.jsdoc"
              },
              "2": {
                "name": "punctuation.definition.block.tag.jsdoc"
              },
              "3": {
                "name": "variable.other.jsdoc"
              }
            },
            "match": "((@)(?:arg|argument|const|constant|member|namespace|param|var))\\s+([A-Za-z_$][\\w$.\\[\\]]*)"
          },
          {
            "begin": "((@)typedef)\\s+(?={)",
            "beginCaptures": {
              "1": {
                "name": "storage.type.class.jsdoc"
              },
              "2": {
                "name": "punctuation.definition.block.tag.jsdoc"
              }
            },
            "end": "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
            "patterns": [
              {
                "include": "#jsdoctype"
              },
              {
                "match": "(?:[^@\\s*/]|\\*[^/])+",
                "name": "entity.name.type.instance.jsdoc"
              }
            ]
          },
          {
            "begin": "((@)(?:arg|argument|const|constant|member|namespace|param|prop|property|var))\\s+(?={)",
            "beginCaptures": {
              "1": {
                "name": "storage.type.class.jsdoc"
              },
              "2": {
                "name": "punctuation.definition.block.tag.jsdoc"
              }
            },
            "end": "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
            "patterns": [
              {
                "include": "#jsdoctype"
              },
              {
                "match": "([A-Za-z_$][\\w$.\\[\\]]*)",
                "name": "variable.other.jsdoc"
              },
              {
                "captures": {
                  "1": {
                    "name": "punctuation.definition.optional-value.begin.bracket.square.jsdoc"
                  },
                  "2": {
                    "name": "keyword.operator.assignment.jsdoc"
                  },
                  "3": {
                    "name": "source.embedded.js"
                  },
                  "4": {
                    "name": "punctuation.definition.optional-value.end.bracket.square.jsdoc"
                  },
                  "5": {
                    "name": "invalid.illegal.syntax.jsdoc"
                  }
                },
                "match": "(\\[)\\s*[\\w$]+(?:(?:\\[\\])?\\.[\\w$]+)*(?:\\s*(=)\\s*((?>\"(?:(?:\\*(?!/))|(?:\\\\(?!\"))|[^*\\\\])*?\"|'(?:(?:\\*(?!/))|(?:\\\\(?!'))|[^*\\\\])*?'|\\[(?:(?:\\*(?!/))|[^*])*?\\]|(?:(?:\\*(?!/))|\\s(?!\\s*\\])|\\[.*?(?:\\]|(?=\\*/))|[^*\\s\\[\\]])*)*))?\\s*(?:(\\])((?:[^*\\s]|\\*[^\\s/])+)?|(?=\\*/))",
                "name": "variable.other.jsdoc"
              }
            ]
          },
          {
            "begin": "((@)(?:define|enum|exception|export|extends|lends|implements|modifies|namespace|private|protected|returns?|satisfies|suppress|this|throws|type|yields?))\\s+(?={)",
            "beginCaptures": {
              "1": {
                "name": "storage.type.class.jsdoc"
              },
              "2": {
                "name": "punctuation.definition.block.tag.jsdoc"
              }
            },
            "end": "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
            "patterns": [
              {
                "include": "#jsdoctype"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.class.jsdoc"
              },
              "2": {
                "name": "punctuation.definition.block.tag.jsdoc"
              },
              "3": {
                "name": "entity.name.type.instance.jsdoc"
              }
            },
            "match": "((@)(?:alias|augments|callback|constructs|emits|event|fires|exports?|extends|external|function|func|host|lends|listens|interface|memberof!?|method|module|mixes|mixin|name|requires|see|this|typedef|uses))\\s+((?:[^{}@\\s*]|\\*[^/])+)"
          },
          {
            "begin": "((@)(?:default(?:value)?|license|version))\\s+(([''\"]))",
            "beginCaptures": {
              "1": {
                "name": "storage.type.class.jsdoc"
              },
              "2": {
                "name": "punctuation.definition.block.tag.jsdoc"
              },
              "3": {
                "name": "variable.other.jsdoc"
              },
              "4": {
                "name": "punctuation.definition.string.begin.jsdoc"
              }
            },
            "contentName": "variable.other.jsdoc",
            "end": "(\\3)|(?=$|\\*/)",
            "endCaptures": {
              "0": {
                "name": "variable.other.jsdoc"
              },
              "1": {
                "name": "punctuation.definition.string.end.jsdoc"
              }
            }
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.class.jsdoc"
              },
              "2": {
                "name": "punctuation.definition.block.tag.jsdoc"
              },
              "3": {
                "name": "variable.other.jsdoc"
              }
            },
            "match": "((@)(?:default(?:value)?|license|tutorial|variation|version))\\s+([^\\s*]+)"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.block.tag.jsdoc"
              }
            },
            "match": "(@)(?:abstract|access|alias|api|arg|argument|async|attribute|augments|author|beta|borrows|bubbles|callback|chainable|class|classdesc|code|config|const|constant|constructor|constructs|copyright|default|defaultvalue|define|deprecated|desc|description|dict|emits|enum|event|example|exception|exports?|extends|extension(?:_?for)?|external|externs|file|fileoverview|final|fires|for|func|function|generator|global|hideconstructor|host|ignore|implements|implicitCast|inherit[Dd]oc|inner|instance|interface|internal|kind|lends|license|listens|main|member|memberof!?|method|mixes|mixins?|modifies|module|name|namespace|noalias|nocollapse|nocompile|nosideeffects|override|overview|package|param|polymer(?:Behavior)?|preserve|private|prop|property|protected|public|read[Oo]nly|record|require[ds]|returns?|see|since|static|struct|submodule|summary|suppress|template|this|throws|todo|tutorial|type|typedef|unrestricted|uses|var|variation|version|virtual|writeOnce|yields?)\\b",
            "name": "storage.type.class.jsdoc"
          },
          {
            "include": "#inline-tags"
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.class.jsdoc"
              },
              "2": {
                "name": "punctuation.definition.block.tag.jsdoc"
              }
            },
            "match": "((@)(?:[_$[:alpha:]][_$[:alnum:]]*))(?=\\s+)"
          }
        ]
      },
      "enum-declaration": {
        "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?(?:\\b(const)\\s+)?\\b(enum)\\s+([_$[:alpha:]][_$[:alnum:]]*)",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.export.js"
          },
          "2": {
            "name": "storage.modifier.js"
          },
          "3": {
            "name": "storage.modifier.js"
          },
          "4": {
            "name": "storage.type.enum.js"
          },
          "5": {
            "name": "entity.name.type.enum.js"
          }
        },
        "end": "(?<=\\})",
        "name": "meta.enum.declaration.js",
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "begin": "\\{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.block.js"
              }
            },
            "end": "\\}",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.block.js"
              }
            },
            "patterns": [
              {
                "include": "#comment"
              },
              {
                "begin": "([_$[:alpha:]][_$[:alnum:]]*)",
                "beginCaptures": {
                  "0": {
                    "name": "variable.other.enummember.js"
                  }
                },
                "end": "(?=,|\\}|$)",
                "patterns": [
                  {
                    "include": "#comment"
                  },
                  {
                    "include": "#variable-initializer"
                  }
                ]
              },
              {
                "begin": "(?=((\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\])))",
                "end": "(?=,|\\}|$)",
                "patterns": [
                  {
                    "include": "#string"
                  },
                  {
                    "include": "#array-literal"
                  },
                  {
                    "include": "#comment"
                  },
                  {
                    "include": "#variable-initializer"
                  }
                ]
              },
              {
                "include": "#punctuation-comma"
              }
            ]
          }
        ]
      },
      "export-declaration": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "keyword.control.export.js"
              },
              "2": {
                "name": "keyword.control.as.js"
              },
              "3": {
                "name": "storage.type.namespace.js"
              },
              "4": {
                "name": "entity.name.type.module.js"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)\\s+(as)\\s+(namespace)\\s+([_$[:alpha:]][_$[:alnum:]]*)"
          },
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)(?:\\s+(type))?(?:(?:\\s*(=))|(?:\\s+(default)(?=\\s+)))",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.export.js"
              },
              "2": {
                "name": "keyword.control.type.js"
              },
              "3": {
                "name": "keyword.operator.assignment.js"
              },
              "4": {
                "name": "keyword.control.default.js"
              }
            },
            "end": "(?=$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",
            "name": "meta.export.default.js",
            "patterns": [
              {
                "include": "#interface-declaration"
              },
              {
                "include": "#expression"
              }
            ]
          },
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)(?:\\s+(type))?\\b(?!(\\$)|(\\s*:))((?=\\s*[\\{*])|((?=\\s*[_$[:alpha:]][_$[:alnum:]]*(\\s|,))(?!\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.export.js"
              },
              "2": {
                "name": "keyword.control.type.js"
              }
            },
            "end": "(?=$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",
            "name": "meta.export.js",
            "patterns": [
              {
                "include": "#import-export-declaration"
              }
            ]
          }
        ]
      },
      "expression": {
        "patterns": [
          {
            "include": "#expressionWithoutIdentifiers"
          },
          {
            "include": "#identifiers"
          },
          {
            "include": "#expressionPunctuations"
          }
        ]
      },
      "expression-inside-possibly-arrow-parens": {
        "patterns": [
          {
            "include": "#expressionWithoutIdentifiers"
          },
          {
            "include": "#comment"
          },
          {
            "include": "#string"
          },
          {
            "include": "#decorator"
          },
          {
            "include": "#destructuring-parameter"
          },
          {
            "captures": {
              "1": {
                "name": "storage.modifier.js"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|protected|private|readonly)\\s+(?=(override|public|protected|private|readonly)\\s+)"
          },
          {
            "captures": {
              "1": {
                "name": "storage.modifier.js"
              },
              "2": {
                "name": "keyword.operator.rest.js"
              },
              "3": {
                "name": "entity.name.function.js variable.language.this.js"
              },
              "4": {
                "name": "entity.name.function.js"
              },
              "5": {
                "name": "keyword.operator.optional.js"
              }
            },
            "match": "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|([<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$[:alnum:]]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|([<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))"
          },
          {
            "captures": {
              "1": {
                "name": "storage.modifier.js"
              },
              "2": {
                "name": "keyword.operator.rest.js"
              },
              "3": {
                "name": "variable.parameter.js variable.language.this.js"
              },
              "4": {
                "name": "variable.parameter.js"
              },
              "5": {
                "name": "keyword.operator.optional.js"
              }
            },
            "match": "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*[:,]|$)"
          },
          {
            "include": "#type-annotation"
          },
          {
            "include": "#variable-initializer"
          },
          {
            "match": ",",
            "name": "punctuation.separator.parameter.js"
          },
          {
            "include": "#identifiers"
          },
          {
            "include": "#expressionPunctuations"
          }
        ]
      },
      "expression-operators": {
        "patterns": [
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(await)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.control.flow.js"
          },
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(yield)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?=\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*\\*)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.flow.js"
              }
            },
            "end": "\\*",
            "endCaptures": {
              "0": {
                "name": "keyword.generator.asterisk.js"
              }
            },
            "patterns": [
              {
                "include": "#comment"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "keyword.control.flow.js"
              },
              "2": {
                "name": "keyword.generator.asterisk.js"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(yield)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?:\\s*(\\*))?"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))delete(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.operator.expression.delete.js"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))in(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?!\\()",
            "name": "keyword.operator.expression.in.js"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))of(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?!\\()",
            "name": "keyword.operator.expression.of.js"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))instanceof(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.operator.expression.instanceof.js"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))new(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.operator.new.js"
          },
          {
            "include": "#typeof-operator"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))void(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.operator.expression.void.js"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.control.as.js"
              },
              "2": {
                "name": "storage.modifier.js"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+(const)(?=\\s*($|[;,:})\\]]))"
          },
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(as)|(satisfies))\\s+",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.as.js"
              },
              "2": {
                "name": "keyword.control.satisfies.js"
              }
            },
            "end": "(?=^|[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as|satisfies)\\s+)|(\\s+\\<))",
            "patterns": [
              {
                "include": "#type"
              }
            ]
          },
          {
            "match": "\\.\\.\\.",
            "name": "keyword.operator.spread.js"
          },
          {
            "match": "\\*=|(?<!\\()/=|%=|\\+=|\\-=",
            "name": "keyword.operator.assignment.compound.js"
          },
          {
            "match": "\\&=|\\^=|<<=|>>=|>>>=|\\|=",
            "name": "keyword.operator.assignment.compound.bitwise.js"
          },
          {
            "match": "<<|>>>|>>",
            "name": "keyword.operator.bitwise.shift.js"
          },
          {
            "match": "===|!==|==|!=",
            "name": "keyword.operator.comparison.js"
          },
          {
            "match": "<=|>=|<>|<|>",
            "name": "keyword.operator.relational.js"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.operator.logical.js"
              },
              "2": {
                "name": "keyword.operator.assignment.compound.js"
              },
              "3": {
                "name": "keyword.operator.arithmetic.js"
              }
            },
            "match": "(?<=[_$[:alnum:]])(\\!)\\s*(?:(/=)|(?:(/)(?![/*])))"
          },
          {
            "match": "\\!|&&|\\|\\||\\?\\?",
            "name": "keyword.operator.logical.js"
          },
          {
            "match": "\\&|~|\\^|\\|",
            "name": "keyword.operator.bitwise.js"
          },
          {
            "match": "\\=",
            "name": "keyword.operator.assignment.js"
          },
          {
            "match": "--",
            "name": "keyword.operator.decrement.js"
          },
          {
            "match": "\\+\\+",
            "name": "keyword.operator.increment.js"
          },
          {
            "match": "%|\\*|/|-|\\+",
            "name": "keyword.operator.arithmetic.js"
          },
          {
            "begin": "(?<=[_$[:alnum:])\\]])\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)+(?:(/=)|(?:(/)(?![/*]))))",
            "end": "(?:(/=)|(?:(/)(?!\\*([^\\*]|(\\*[^\\/]))*\\*\\/)))",
            "endCaptures": {
              "1": {
                "name": "keyword.operator.assignment.compound.js"
              },
              "2": {
                "name": "keyword.operator.arithmetic.js"
              }
            },
            "patterns": [
              {
                "include": "#comment"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "keyword.operator.assignment.compound.js"
              },
              "2": {
                "name": "keyword.operator.arithmetic.js"
              }
            },
            "match": "(?<=[_$[:alnum:])\\]])\\s*(?:(/=)|(?:(/)(?![/*])))"
          }
        ]
      },
      "expressionPunctuations": {
        "patterns": [
          {
            "include": "#punctuation-comma"
          },
          {
            "include": "#punctuation-accessor"
          }
        ]
      },
      "expressionWithoutIdentifiers": {
        "patterns": [
          {
            "include": "#jsx"
          },
          {
            "include": "#string"
          },
          {
            "include": "#regex"
          },
          {
            "include": "#comment"
          },
          {
            "include": "#function-expression"
          },
          {
            "include": "#class-expression"
          },
          {
            "include": "#arrow-function"
          },
          {
            "include": "#paren-expression-possibly-arrow"
          },
          {
            "include": "#cast"
          },
          {
            "include": "#ternary-expression"
          },
          {
            "include": "#new-expr"
          },
          {
            "include": "#instanceof-expr"
          },
          {
            "include": "#object-literal"
          },
          {
            "include": "#expression-operators"
          },
          {
            "include": "#function-call"
          },
          {
            "include": "#literal"
          },
          {
            "include": "#support-objects"
          },
          {
            "include": "#paren-expression"
          }
        ]
      },
      "field-declaration": {
        "begin": "(?<!\\()(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)\\s+)?(?=\\s*((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.)))(?!\\$))|(\\#?[_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(?:(?:(\\?)|(\\!))\\s*)?(=|:|;|,|\\}|$))",
        "beginCaptures": {
          "1": {
            "name": "storage.modifier.js"
          }
        },
        "end": "(?=\\}|;|,|$|(^(?!\\s*((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.)))(?!\\$))|(\\#?[_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(?:(?:(\\?)|(\\!))\\s*)?(=|:|;|,|$))))|(?<=\\})",
        "name": "meta.field.declaration.js",
        "patterns": [
          {
            "include": "#variable-initializer"
          },
          {
            "include": "#type-annotation"
          },
          {
            "include": "#string"
          },
          {
            "include": "#array-literal"
          },
          {
            "include": "#numeric-literal"
          },
          {
            "include": "#comment"
          },
          {
            "captures": {
              "1": {
                "name": "meta.definition.property.js entity.name.function.js"
              },
              "2": {
                "name": "keyword.operator.optional.js"
              },
              "3": {
                "name": "keyword.operator.definiteassignment.js"
              }
            },
            "match": "(\\#?[_$[:alpha:]][_$[:alnum:]]*)(?:(\\?)|(\\!))?(?=\\s*\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|([<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$[:alnum:]]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|([<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))"
          },
          {
            "match": "\\#?[_$[:alpha:]][_$[:alnum:]]*",
            "name": "meta.definition.property.js variable.object.property.js"
          },
          {
            "match": "\\?",
            "name": "keyword.operator.optional.js"
          },
          {
            "match": "\\!",
            "name": "keyword.operator.definiteassignment.js"
          }
        ]
      },
      "for-loop": {
        "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))for(?=((\\s+|(\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*))await)?\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)?(\\())",
        "beginCaptures": {
          "0": {
            "name": "keyword.control.loop.js"
          }
        },
        "end": "(?<=\\))",
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "match": "await",
            "name": "keyword.control.loop.js"
          },
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "meta.brace.round.js"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "meta.brace.round.js"
              }
            },
            "patterns": [
              {
                "include": "#var-expr"
              },
              {
                "include": "#expression"
              },
              {
                "include": "#punctuation-semicolon"
              }
            ]
          }
        ]
      },
      "function-body": {
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#type-parameters"
          },
          {
            "include": "#function-parameters"
          },
          {
            "include": "#return-type"
          },
          {
            "include": "#type-function-return-type"
          },
          {
            "include": "#decl-block"
          },
          {
            "match": "\\*",
            "name": "keyword.generator.asterisk.js"
          }
        ]
      },
      "function-call": {
        "patterns": [
          {
            "begin": "(?=(((([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))|(?<=[\\)]))\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())",
            "end": "(?<=\\))(?!(((([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))|(?<=[\\)]))\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())",
            "patterns": [
              {
                "begin": "(?=(([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))",
                "end": "(?=\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())",
                "name": "meta.function-call.js",
                "patterns": [
                  {
                    "include": "#function-call-target"
                  }
                ]
              },
              {
                "include": "#comment"
              },
              {
                "include": "#function-call-optionals"
              },
              {
                "include": "#type-arguments"
              },
              {
                "include": "#paren-expression"
              }
            ]
          },
          {
            "begin": "(?=(((([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))|(?<=[\\)]))(<\\s*[\\{\\[\\(]\\s*$))",
            "end": "(?<=\\>)(?!(((([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))|(?<=[\\)]))(<\\s*[\\{\\[\\(]\\s*$))",
            "patterns": [
              {
                "begin": "(?=(([_$[:alpha:]][_$[:alnum:]]*)(\\s*\\??\\.\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*))*)|(\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*))",
                "end": "(?=(<\\s*[\\{\\[\\(]\\s*$))",
                "name": "meta.function-call.js",
                "patterns": [
                  {
                    "include": "#function-call-target"
                  }
                ]
              },
              {
                "include": "#comment"
              },
              {
                "include": "#function-call-optionals"
              },
              {
                "include": "#type-arguments"
              }
            ]
          }
        ]
      },
      "function-call-optionals": {
        "patterns": [
          {
            "match": "\\?\\.",
            "name": "meta.function-call.js punctuation.accessor.optional.js"
          },
          {
            "match": "\\!",
            "name": "meta.function-call.js keyword.operator.definiteassignment.js"
          }
        ]
      },
      "function-call-target": {
        "patterns": [
          {
            "include": "#support-function-call-identifiers"
          },
          {
            "match": "(\\#?[_$[:alpha:]][_$[:alnum:]]*)",
            "name": "entity.name.function.js"
          }
        ]
      },
      "function-declaration": {
        "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?(?:(async)\\s+)?(function\\b)(?:\\s*(\\*))?(?:(?:\\s+|(?<=\\*))([_$[:alpha:]][_$[:alnum:]]*))?\\s*",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.export.js"
          },
          "2": {
            "name": "storage.modifier.js"
          },
          "3": {
            "name": "storage.modifier.async.js"
          },
          "4": {
            "name": "storage.type.function.js"
          },
          "5": {
            "name": "keyword.generator.asterisk.js"
          },
          "6": {
            "name": "meta.definition.function.js entity.name.function.js"
          }
        },
        "end": "(?=;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))|(?<=\\})",
        "name": "meta.function.js",
        "patterns": [
          {
            "include": "#function-name"
          },
          {
            "include": "#function-body"
          }
        ]
      },
      "function-expression": {
        "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(async)\\s+)?(function\\b)(?:\\s*(\\*))?(?:(?:\\s+|(?<=\\*))([_$[:alpha:]][_$[:alnum:]]*))?\\s*",
        "beginCaptures": {
          "1": {
            "name": "storage.modifier.async.js"
          },
          "2": {
            "name": "storage.type.function.js"
          },
          "3": {
            "name": "keyword.generator.asterisk.js"
          },
          "4": {
            "name": "meta.definition.function.js entity.name.function.js"
          }
        },
        "end": "(?=;)|(?<=\\})",
        "name": "meta.function.expression.js",
        "patterns": [
          {
            "include": "#function-name"
          },
          {
            "include": "#single-line-comment-consuming-line-ending"
          },
          {
            "include": "#function-body"
          }
        ]
      },
      "function-name": {
        "match": "[_$[:alpha:]][_$[:alnum:]]*",
        "name": "meta.definition.function.js entity.name.function.js"
      },
      "function-parameters": {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.parameters.begin.js"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.parameters.end.js"
          }
        },
        "name": "meta.parameters.js",
        "patterns": [
          {
            "include": "#function-parameters-body"
          }
        ]
      },
      "function-parameters-body": {
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#string"
          },
          {
            "include": "#decorator"
          },
          {
            "include": "#destructuring-parameter"
          },
          {
            "include": "#parameter-name"
          },
          {
            "include": "#parameter-type-annotation"
          },
          {
            "include": "#variable-initializer"
          },
          {
            "match": ",",
            "name": "punctuation.separator.parameter.js"
          }
        ]
      },
      "identifiers": {
        "patterns": [
          {
            "include": "#object-identifiers"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.accessor.js"
              },
              "2": {
                "name": "punctuation.accessor.optional.js"
              },
              "3": {
                "name": "entity.name.function.js"
              }
            },
            "match": "(?:(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*)?([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|([<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.accessor.js"
              },
              "2": {
                "name": "punctuation.accessor.optional.js"
              },
              "3": {
                "name": "variable.other.constant.property.js"
              }
            },
            "match": "(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(\\#?[[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.accessor.js"
              },
              "2": {
                "name": "punctuation.accessor.optional.js"
              },
              "3": {
                "name": "variable.other.property.js"
              }
            },
            "match": "(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*)"
          },
          {
            "match": "([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])",
            "name": "variable.other.constant.js"
          },
          {
            "match": "[_$[:alpha:]][_$[:alnum:]]*",
            "name": "variable.other.readwrite.js"
          }
        ]
      },
      "if-statement": {
        "patterns": [
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?=\\bif\\s*(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))\\s*(?!\\{))",
            "end": "(?=;|$|\\})",
            "patterns": [
              {
                "include": "#comment"
              },
              {
                "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(if)\\s*(\\()",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.conditional.js"
                  },
                  "2": {
                    "name": "meta.brace.round.js"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "meta.brace.round.js"
                  }
                },
                "patterns": [
                  {
                    "include": "#expression"
                  }
                ]
              },
              {
                "begin": "(?<=\\))\\s*\\/(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)*\\])+\\/([dgimsuvy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.js"
                  }
                },
                "end": "(/)([dgimsuvy]*)",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.string.end.js"
                  },
                  "2": {
                    "name": "keyword.other.js"
                  }
                },
                "name": "string.regexp.js",
                "patterns": [
                  {
                    "include": "#regexp"
                  }
                ]
              },
              {
                "include": "#statements"
              }
            ]
          }
        ]
      },
      "import-declaration": {
        "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type)(?!\\s+from))?(?!\\s*[:\\(])(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.export.js"
          },
          "2": {
            "name": "storage.modifier.js"
          },
          "3": {
            "name": "keyword.control.import.js"
          },
          "4": {
            "name": "keyword.control.type.js"
          }
        },
        "end": "(?<!^import|[^\\._$[:alnum:]]import)(?=;|$|^)",
        "name": "meta.import.js",
        "patterns": [
          {
            "include": "#single-line-comment-consuming-line-ending"
          },
          {
            "include": "#comment"
          },
          {
            "include": "#string"
          },
          {
            "begin": "(?<=^import|[^\\._$[:alnum:]]import)(?!\\s*[\"'])",
            "end": "\\bfrom\\b",
            "endCaptures": {
              "0": {
                "name": "keyword.control.from.js"
              }
            },
            "patterns": [
              {
                "include": "#import-export-declaration"
              }
            ]
          },
          {
            "include": "#import-export-declaration"
          }
        ]
      },
      "import-equals-declaration": {
        "patterns": [
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type))?\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*(=)\\s*(require)\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.export.js"
              },
              "2": {
                "name": "storage.modifier.js"
              },
              "3": {
                "name": "keyword.control.import.js"
              },
              "4": {
                "name": "keyword.control.type.js"
              },
              "5": {
                "name": "variable.other.readwrite.alias.js"
              },
              "6": {
                "name": "keyword.operator.assignment.js"
              },
              "7": {
                "name": "keyword.control.require.js"
              },
              "8": {
                "name": "meta.brace.round.js"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "meta.brace.round.js"
              }
            },
            "name": "meta.import-equals.external.js",
            "patterns": [
              {
                "include": "#comment"
              },
              {
                "include": "#string"
              }
            ]
          },
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type))?\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*(=)\\s*(?!require\\b)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.export.js"
              },
              "2": {
                "name": "storage.modifier.js"
              },
              "3": {
                "name": "keyword.control.import.js"
              },
              "4": {
                "name": "keyword.control.type.js"
              },
              "5": {
                "name": "variable.other.readwrite.alias.js"
              },
              "6": {
                "name": "keyword.operator.assignment.js"
              }
            },
            "end": "(?=;|$|^)",
            "name": "meta.import-equals.internal.js",
            "patterns": [
              {
                "include": "#single-line-comment-consuming-line-ending"
              },
              {
                "include": "#comment"
              },
              {
                "captures": {
                  "1": {
                    "name": "entity.name.type.module.js"
                  },
                  "2": {
                    "name": "punctuation.accessor.js"
                  },
                  "3": {
                    "name": "punctuation.accessor.optional.js"
                  }
                },
                "match": "([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))"
              },
              {
                "match": "([_$[:alpha:]][_$[:alnum:]]*)",
                "name": "variable.other.readwrite.js"
              }
            ]
          }
        ]
      },
      "import-export-assert-clause": {
        "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(with)|(assert))\\s*(\\{)",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.with.js"
          },
          "2": {
            "name": "keyword.control.assert.js"
          },
          "3": {
            "name": "punctuation.definition.block.js"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.block.js"
          }
        },
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#string"
          },
          {
            "match": "(?:[_$[:alpha:]][_$[:alnum:]]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)",
            "name": "meta.object-literal.key.js"
          },
          {
            "match": ":",
            "name": "punctuation.separator.key-value.js"
          }
        ]
      },
      "import-export-block": {
        "begin": "\\{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.block.js"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.block.js"
          }
        },
        "name": "meta.block.js",
        "patterns": [
          {
            "include": "#import-export-clause"
          }
        ]
      },
      "import-export-clause": {
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.control.type.js"
              },
              "2": {
                "name": "keyword.control.default.js"
              },
              "3": {
                "name": "constant.language.import-export-all.js"
              },
              "4": {
                "name": "variable.other.readwrite.js"
              },
              "5": {
                "name": "string.quoted.alias.js"
              },
              "12": {
                "name": "keyword.control.as.js"
              },
              "13": {
                "name": "keyword.control.default.js"
              },
              "14": {
                "name": "variable.other.readwrite.alias.js"
              },
              "15": {
                "name": "string.quoted.alias.js"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(?:(\\btype)\\s+)?(?:(\\bdefault)|(\\*)|(\\b[_$[:alpha:]][_$[:alnum:]]*)|((\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))))\\s+(as)\\s+(?:(default(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|([_$[:alpha:]][_$[:alnum:]]*)|((\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)))"
          },
          {
            "include": "#punctuation-comma"
          },
          {
            "match": "\\*",
            "name": "constant.language.import-export-all.js"
          },
          {
            "match": "\\b(default)\\b",
            "name": "keyword.control.default.js"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.control.type.js"
              },
              "2": {
                "name": "variable.other.readwrite.alias.js"
              },
              "3": {
                "name": "string.quoted.alias.js"
              }
            },
            "match": "(?:(\\btype)\\s+)?(?:([_$[:alpha:]][_$[:alnum:]]*)|((\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)))"
          }
        ]
      },
      "import-export-declaration": {
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#string"
          },
          {
            "include": "#import-export-block"
          },
          {
            "match": "\\bfrom\\b",
            "name": "keyword.control.from.js"
          },
          {
            "include": "#import-export-assert-clause"
          },
          {
            "include": "#import-export-clause"
          }
        ]
      },
      "indexer-declaration": {
        "begin": "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)\\s*)?\\s*(\\[)\\s*([_$[:alpha:]][_$[:alnum:]]*)\\s*(?=:)",
        "beginCaptures": {
          "1": {
            "name": "storage.modifier.js"
          },
          "2": {
            "name": "meta.brace.square.js"
          },
          "3": {
            "name": "variable.parameter.js"
          }
        },
        "end": "(\\])\\s*(\\?\\s*)?|$",
        "endCaptures": {
          "1": {
            "name": "meta.brace.square.js"
          },
          "2": {
            "name": "keyword.operator.optional.js"
          }
        },
        "name": "meta.indexer.declaration.js",
        "patterns": [
          {
            "include": "#type-annotation"
          }
        ]
      },
      "indexer-mapped-type-declaration": {
        "begin": "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))([+-])?(readonly)\\s*)?\\s*(\\[)\\s*([_$[:alpha:]][_$[:alnum:]]*)\\s+(in)\\s+",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.type.modifier.js"
          },
          "2": {
            "name": "storage.modifier.js"
          },
          "3": {
            "name": "meta.brace.square.js"
          },
          "4": {
            "name": "entity.name.type.js"
          },
          "5": {
            "name": "keyword.operator.expression.in.js"
          }
        },
        "end": "(\\])([+-])?\\s*(\\?\\s*)?|$",
        "endCaptures": {
          "1": {
            "name": "meta.brace.square.js"
          },
          "2": {
            "name": "keyword.operator.type.modifier.js"
          },
          "3": {
            "name": "keyword.operator.optional.js"
          }
        },
        "name": "meta.indexer.mappedtype.declaration.js",
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "keyword.control.as.js"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+"
          },
          {
            "include": "#type"
          }
        ]
      },
      "inline-tags": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.bracket.square.begin.jsdoc"
              },
              "2": {
                "name": "punctuation.definition.bracket.square.end.jsdoc"
              }
            },
            "match": "(\\[)[^\\]]+(\\])(?={@(?:link|linkcode|linkplain|tutorial))",
            "name": "constant.other.description.jsdoc"
          },
          {
            "begin": "({)((@)(?:link(?:code|plain)?|tutorial))\\s*",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.bracket.curly.begin.jsdoc"
              },
              "2": {
                "name": "storage.type.class.jsdoc"
              },
              "3": {
                "name": "punctuation.definition.inline.tag.jsdoc"
              }
            },
            "end": "}|(?=\\*/)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.bracket.curly.end.jsdoc"
              }
            },
            "name": "entity.name.type.instance.jsdoc",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "variable.other.link.underline.jsdoc"
                  },
                  "2": {
                    "name": "punctuation.separator.pipe.jsdoc"
                  }
                },
                "match": "\\G((?=https?://)(?:[^|}\\s*]|\\*[/])+)(\\|)?"
              },
              {
                "captures": {
                  "1": {
                    "name": "variable.other.description.jsdoc"
                  },
                  "2": {
                    "name": "punctuation.separator.pipe.jsdoc"
                  }
                },
                "match": "\\G((?:[^{}@\\s|*]|\\*[^/])+)(\\|)?"
              }
            ]
          }
        ]
      },
      "instanceof-expr": {
        "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(instanceof)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.expression.instanceof.js"
          }
        },
        "end": "(?<=\\))|(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|(===|!==|==|!=)|(([\\&\\~\\^\\|]\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s+instanceof(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))function((\\s+[_$[:alpha:]][_$[:alnum:]]*)|(\\s*[\\(]))))",
        "patterns": [
          {
            "include": "#type"
          }
        ]
      },
      "interface-declaration": {
        "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(?:(abstract)\\s+)?\\b(interface)\\b(?=\\s+|/[/*])",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.export.js"
          },
          "2": {
            "name": "storage.modifier.js"
          },
          "3": {
            "name": "storage.modifier.js"
          },
          "4": {
            "name": "storage.type.interface.js"
          }
        },
        "end": "(?<=\\})",
        "name": "meta.interface.js",
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#class-or-interface-heritage"
          },
          {
            "captures": {
              "0": {
                "name": "entity.name.type.interface.js"
              }
            },
            "match": "[_$[:alpha:]][_$[:alnum:]]*"
          },
          {
            "include": "#type-parameters"
          },
          {
            "include": "#class-or-interface-body"
          }
        ]
      },
      "jsdoctype": {
        "patterns": [
          {
            "begin": "\\G({)",
            "beginCaptures": {
              "0": {
                "name": "entity.name.type.instance.jsdoc"
              },
              "1": {
                "name": "punctuation.definition.bracket.curly.begin.jsdoc"
              }
            },
            "contentName": "entity.name.type.instance.jsdoc",
            "end": "((}))\\s*|(?=\\*/)",
            "endCaptures": {
              "1": {
                "name": "entity.name.type.instance.jsdoc"
              },
              "2": {
                "name": "punctuation.definition.bracket.curly.end.jsdoc"
              }
            },
            "patterns": [
              {
                "include": "#brackets"
              }
            ]
          }
        ]
      },
      "jsx": {
        "patterns": [
          {
            "include": "#jsx-tag-without-attributes-in-expression"
          },
          {
            "include": "#jsx-tag-in-expression"
          }
        ]
      },
      "jsx-children": {
        "patterns": [
          {
            "include": "#jsx-tag-without-attributes"
          },
          {
            "include": "#jsx-tag"
          },
          {
            "include": "#jsx-evaluated-code"
          },
          {
            "include": "#jsx-entities"
          }
        ]
      },
      "jsx-entities": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.entity.js"
              },
              "3": {
                "name": "punctuation.definition.entity.js"
              }
            },
            "match": "(&)([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+)(;)",
            "name": "constant.character.entity.js"
          }
        ]
      },
      "jsx-evaluated-code": {
        "begin": "\\{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.embedded.begin.js"
          }
        },
        "contentName": "meta.embedded.expression.js",
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.embedded.end.js"
          }
        },
        "patterns": [
          {
            "include": "#expression"
          }
        ]
      },
      "jsx-string-double-quoted": {
        "begin": "\"",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.js"
          }
        },
        "end": "\"",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.js"
          }
        },
        "name": "string.quoted.double.js",
        "patterns": [
          {
            "include": "#jsx-entities"
          }
        ]
      },
      "jsx-string-single-quoted": {
        "begin": "'",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.js"
          }
        },
        "end": "'",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.js"
          }
        },
        "name": "string.quoted.single.js",
        "patterns": [
          {
            "include": "#jsx-entities"
          }
        ]
      },
      "jsx-tag": {
        "begin": "(?=(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>))",
        "end": "(/>)|(?:(</)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>))",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.tag.end.js"
          },
          "2": {
            "name": "punctuation.definition.tag.begin.js"
          },
          "3": {
            "name": "entity.name.tag.namespace.js"
          },
          "4": {
            "name": "punctuation.separator.namespace.js"
          },
          "5": {
            "name": "entity.name.tag.js"
          },
          "6": {
            "name": "support.class.component.js"
          },
          "7": {
            "name": "punctuation.definition.tag.end.js"
          }
        },
        "name": "meta.tag.js",
        "patterns": [
          {
            "begin": "(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.js"
              },
              "2": {
                "name": "entity.name.tag.namespace.js"
              },
              "3": {
                "name": "punctuation.separator.namespace.js"
              },
              "4": {
                "name": "entity.name.tag.js"
              },
              "5": {
                "name": "support.class.component.js"
              }
            },
            "end": "(?=[/]?>)",
            "patterns": [
              {
                "include": "#comment"
              },
              {
                "include": "#type-arguments"
              },
              {
                "include": "#jsx-tag-attributes"
              }
            ]
          },
          {
            "begin": "(>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.end.js"
              }
            },
            "contentName": "meta.jsx.children.js",
            "end": "(?=</)",
            "patterns": [
              {
                "include": "#jsx-children"
              }
            ]
          }
        ]
      },
      "jsx-tag-attribute-assignment": {
        "match": "=(?=\\s*(?:'|\"|{|/\\*|//|\\n))",
        "name": "keyword.operator.assignment.js"
      },
      "jsx-tag-attribute-name": {
        "captures": {
          "1": {
            "name": "entity.other.attribute-name.namespace.js"
          },
          "2": {
            "name": "punctuation.separator.namespace.js"
          },
          "3": {
            "name": "entity.other.attribute-name.js"
          }
        },
        "match": "\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(:))?([_$[:alpha:]][-_$[:alnum:]]*)(?=\\s|=|/?>|/\\*|//)"
      },
      "jsx-tag-attributes": {
        "begin": "\\s+",
        "end": "(?=[/]?>)",
        "name": "meta.tag.attributes.js",
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#jsx-tag-attribute-name"
          },
          {
            "include": "#jsx-tag-attribute-assignment"
          },
          {
            "include": "#jsx-string-double-quoted"
          },
          {
            "include": "#jsx-string-single-quoted"
          },
          {
            "include": "#jsx-evaluated-code"
          },
          {
            "include": "#jsx-tag-attributes-illegal"
          }
        ]
      },
      "jsx-tag-attributes-illegal": {
        "match": "\\S+",
        "name": "invalid.illegal.attribute.js"
      },
      "jsx-tag-in-expression": {
        "begin": "(?<!\\+\\+|--)(?<=[({\\[,?=>:*]|&&|\\|\\||\\?|\\*\\/|^await|[^\\._$[:alnum:]]await|^return|[^\\._$[:alnum:]]return|^default|[^\\._$[:alnum:]]default|^yield|[^\\._$[:alnum:]]yield|^)\\s*(?!<\\s*[_$[:alpha:]][_$[:alnum:]]*((\\s+extends\\s+[^=>])|,))(?=(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>))",
        "end": "(?!(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>))",
        "patterns": [
          {
            "include": "#jsx-tag"
          }
        ]
      },
      "jsx-tag-without-attributes": {
        "begin": "(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.tag.begin.js"
          },
          "2": {
            "name": "entity.name.tag.namespace.js"
          },
          "3": {
            "name": "punctuation.separator.namespace.js"
          },
          "4": {
            "name": "entity.name.tag.js"
          },
          "5": {
            "name": "support.class.component.js"
          },
          "6": {
            "name": "punctuation.definition.tag.end.js"
          }
        },
        "contentName": "meta.jsx.children.js",
        "end": "(</)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>)",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.tag.begin.js"
          },
          "2": {
            "name": "entity.name.tag.namespace.js"
          },
          "3": {
            "name": "punctuation.separator.namespace.js"
          },
          "4": {
            "name": "entity.name.tag.js"
          },
          "5": {
            "name": "support.class.component.js"
          },
          "6": {
            "name": "punctuation.definition.tag.end.js"
          }
        },
        "name": "meta.tag.without-attributes.js",
        "patterns": [
          {
            "include": "#jsx-children"
          }
        ]
      },
      "jsx-tag-without-attributes-in-expression": {
        "begin": "(?<!\\+\\+|--)(?<=[({\\[,?=>:*]|&&|\\|\\||\\?|\\*\\/|^await|[^\\._$[:alnum:]]await|^return|[^\\._$[:alnum:]]return|^default|[^\\._$[:alnum:]]default|^yield|[^\\._$[:alnum:]]yield|^)\\s*(?=(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>))",
        "end": "(?!(<)\\s*(?:([_$[:alpha:]][-_$[:alnum:].]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$[:alpha:]][-_$[:alnum:].]*))(?<!\\.|-))?\\s*(>))",
        "patterns": [
          {
            "include": "#jsx-tag-without-attributes"
          }
        ]
      },
      "label": {
        "patterns": [
          {
            "begin": "([_$[:alpha:]][_$[:alnum:]]*)\\s*(:)(?=\\s*\\{)",
            "beginCaptures": {
              "1": {
                "name": "entity.name.label.js"
              },
              "2": {
                "name": "punctuation.separator.label.js"
              }
            },
            "end": "(?<=\\})",
            "patterns": [
              {
                "include": "#decl-block"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "entity.name.label.js"
              },
              "2": {
                "name": "punctuation.separator.label.js"
              }
            },
            "match": "([_$[:alpha:]][_$[:alnum:]]*)\\s*(:)"
          }
        ]
      },
      "literal": {
        "patterns": [
          {
            "include": "#numeric-literal"
          },
          {
            "include": "#boolean-literal"
          },
          {
            "include": "#null-literal"
          },
          {
            "include": "#undefined-literal"
          },
          {
            "include": "#numericConstant-literal"
          },
          {
            "include": "#array-literal"
          },
          {
            "include": "#this-literal"
          },
          {
            "include": "#super-literal"
          }
        ]
      },
      "method-declaration": {
        "patterns": [
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?\\s*\\b(constructor)\\b(?!:)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.js"
              },
              "2": {
                "name": "storage.modifier.js"
              },
              "3": {
                "name": "storage.modifier.js"
              },
              "4": {
                "name": "storage.modifier.async.js"
              },
              "5": {
                "name": "storage.type.js"
              }
            },
            "end": "(?=\\}|;|,|$)|(?<=\\})",
            "name": "meta.method.declaration.js",
            "patterns": [
              {
                "include": "#method-declaration-name"
              },
              {
                "include": "#function-body"
              }
            ]
          },
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?(?:(?:\\s*\\b(new)\\b(?!:)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|(?:(\\*)\\s*)?)(?=\\s*((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.js"
              },
              "2": {
                "name": "storage.modifier.js"
              },
              "3": {
                "name": "storage.modifier.js"
              },
              "4": {
                "name": "storage.modifier.async.js"
              },
              "5": {
                "name": "keyword.operator.new.js"
              },
              "6": {
                "name": "keyword.generator.asterisk.js"
              }
            },
            "end": "(?=\\}|;|,|$)|(?<=\\})",
            "name": "meta.method.declaration.js",
            "patterns": [
              {
                "include": "#method-declaration-name"
              },
              {
                "include": "#function-body"
              }
            ]
          },
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.js"
              },
              "2": {
                "name": "storage.modifier.js"
              },
              "3": {
                "name": "storage.modifier.js"
              },
              "4": {
                "name": "storage.modifier.async.js"
              },
              "5": {
                "name": "storage.type.property.js"
              },
              "6": {
                "name": "keyword.generator.asterisk.js"
              }
            },
            "end": "(?=\\}|;|,|$)|(?<=\\})",
            "name": "meta.method.declaration.js",
            "patterns": [
              {
                "include": "#method-declaration-name"
              },
              {
                "include": "#function-body"
              }
            ]
          }
        ]
      },
      "method-declaration-name": {
        "begin": "(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??)\\s*[\\(\\<])",
        "end": "(?=\\(|\\<)",
        "patterns": [
          {
            "include": "#string"
          },
          {
            "include": "#array-literal"
          },
          {
            "include": "#numeric-literal"
          },
          {
            "match": "[_$[:alpha:]][_$[:alnum:]]*",
            "name": "meta.definition.method.js entity.name.function.js"
          },
          {
            "match": "\\?",
            "name": "keyword.operator.optional.js"
          }
        ]
      },
      "namespace-declaration": {
        "begin": "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(namespace|module)\\s+(?=[_$[:alpha:]\"'`]))",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.export.js"
          },
          "2": {
            "name": "storage.modifier.js"
          },
          "3": {
            "name": "storage.type.namespace.js"
          }
        },
        "end": "(?<=\\})|(?=;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",
        "name": "meta.namespace.declaration.js",
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#string"
          },
          {
            "match": "([_$[:alpha:]][_$[:alnum:]]*)",
            "name": "entity.name.type.module.js"
          },
          {
            "include": "#punctuation-accessor"
          },
          {
            "include": "#decl-block"
          }
        ]
      },
      "new-expr": {
        "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(new)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.new.js"
          }
        },
        "end": "(?<=\\))|(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))new(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))function((\\s+[_$[:alpha:]][_$[:alnum:]]*)|(\\s*[\\(]))))",
        "name": "new.expr.js",
        "patterns": [
          {
            "include": "#expression"
          }
        ]
      },
      "null-literal": {
        "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))null(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        "name": "constant.language.null.js"
      },
      "numeric-literal": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "storage.type.numeric.bigint.js"
              }
            },
            "match": "\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$)",
            "name": "constant.numeric.hex.js"
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.numeric.bigint.js"
              }
            },
            "match": "\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$)",
            "name": "constant.numeric.binary.js"
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.numeric.bigint.js"
              }
            },
            "match": "\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$)",
            "name": "constant.numeric.octal.js"
          },
          {
            "captures": {
              "0": {
                "name": "constant.numeric.decimal.js"
              },
              "1": {
                "name": "meta.delimiter.decimal.period.js"
              },
              "2": {
                "name": "storage.type.numeric.bigint.js"
              },
              "3": {
                "name": "meta.delimiter.decimal.period.js"
              },
              "4": {
                "name": "storage.type.numeric.bigint.js"
              },
              "5": {
                "name": "meta.delimiter.decimal.period.js"
              },
              "6": {
                "name": "storage.type.numeric.bigint.js"
              },
              "7": {
                "name": "storage.type.numeric.bigint.js"
              },
              "8": {
                "name": "meta.delimiter.decimal.period.js"
              },
              "9": {
                "name": "storage.type.numeric.bigint.js"
              },
              "10": {
                "name": "meta.delimiter.decimal.period.js"
              },
              "11": {
                "name": "storage.type.numeric.bigint.js"
              },
              "12": {
                "name": "meta.delimiter.decimal.period.js"
              },
              "13": {
                "name": "storage.type.numeric.bigint.js"
              },
              "14": {
                "name": "storage.type.numeric.bigint.js"
              }
            },
            "match": "(?<!\\$)(?:(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.)))(?!\\$)"
          }
        ]
      },
      "numericConstant-literal": {
        "patterns": [
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))NaN(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "constant.language.nan.js"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Infinity(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "constant.language.infinity.js"
          }
        ]
      },
      "object-binding-element": {
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "begin": "(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))",
            "end": "(?=,|\\})",
            "patterns": [
              {
                "include": "#object-binding-element-propertyName"
              },
              {
                "include": "#binding-element"
              }
            ]
          },
          {
            "include": "#object-binding-pattern"
          },
          {
            "include": "#destructuring-variable-rest"
          },
          {
            "include": "#variable-initializer"
          },
          {
            "include": "#punctuation-comma"
          }
        ]
      },
      "object-binding-element-const": {
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "begin": "(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))",
            "end": "(?=,|\\})",
            "patterns": [
              {
                "include": "#object-binding-element-propertyName"
              },
              {
                "include": "#binding-element-const"
              }
            ]
          },
          {
            "include": "#object-binding-pattern-const"
          },
          {
            "include": "#destructuring-variable-rest-const"
          },
          {
            "include": "#variable-initializer"
          },
          {
            "include": "#punctuation-comma"
          }
        ]
      },
      "object-binding-element-propertyName": {
        "begin": "(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))",
        "end": "(:)",
        "endCaptures": {
          "0": {
            "name": "punctuation.destructuring.js"
          }
        },
        "patterns": [
          {
            "include": "#string"
          },
          {
            "include": "#array-literal"
          },
          {
            "include": "#numeric-literal"
          },
          {
            "match": "([_$[:alpha:]][_$[:alnum:]]*)",
            "name": "variable.object.property.js"
          }
        ]
      },
      "object-binding-pattern": {
        "begin": "(?:(\\.\\.\\.)\\s*)?(\\{)",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.rest.js"
          },
          "2": {
            "name": "punctuation.definition.binding-pattern.object.js"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.binding-pattern.object.js"
          }
        },
        "patterns": [
          {
            "include": "#object-binding-element"
          }
        ]
      },
      "object-binding-pattern-const": {
        "begin": "(?:(\\.\\.\\.)\\s*)?(\\{)",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.rest.js"
          },
          "2": {
            "name": "punctuation.definition.binding-pattern.object.js"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.binding-pattern.object.js"
          }
        },
        "patterns": [
          {
            "include": "#object-binding-element-const"
          }
        ]
      },
      "object-identifiers": {
        "patterns": [
          {
            "match": "([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*\\??\\.\\s*prototype\\b(?!\\$))",
            "name": "support.class.js"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.accessor.js"
              },
              "2": {
                "name": "punctuation.accessor.optional.js"
              },
              "3": {
                "name": "variable.other.constant.object.property.js"
              },
              "4": {
                "name": "variable.other.object.property.js"
              }
            },
            "match": "(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(?:(\\#?[[:upper:]][_$[:digit:][:upper:]]*)|(\\#?[_$[:alpha:]][_$[:alnum:]]*))(?=\\s*\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*)"
          },
          {
            "captures": {
              "1": {
                "name": "variable.other.constant.object.js"
              },
              "2": {
                "name": "variable.other.object.js"
              }
            },
            "match": "(?:([[:upper:]][_$[:digit:][:upper:]]*)|([_$[:alpha:]][_$[:alnum:]]*))(?=\\s*\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*)"
          }
        ]
      },
      "object-literal": {
        "begin": "\\{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.block.js"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.block.js"
          }
        },
        "name": "meta.objectliteral.js",
        "patterns": [
          {
            "include": "#object-member"
          }
        ]
      },
      "object-literal-method-declaration": {
        "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])",
        "beginCaptures": {
          "1": {
            "name": "storage.modifier.async.js"
          },
          "2": {
            "name": "storage.type.property.js"
          },
          "3": {
            "name": "keyword.generator.asterisk.js"
          }
        },
        "end": "(?=\\}|;|,)|(?<=\\})",
        "name": "meta.method.declaration.js",
        "patterns": [
          {
            "include": "#method-declaration-name"
          },
          {
            "include": "#function-body"
          },
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.async.js"
              },
              "2": {
                "name": "storage.type.property.js"
              },
              "3": {
                "name": "keyword.generator.asterisk.js"
              }
            },
            "end": "(?=\\(|\\<)",
            "patterns": [
              {
                "include": "#method-declaration-name"
              }
            ]
          }
        ]
      },
      "object-member": {
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#object-literal-method-declaration"
          },
          {
            "begin": "(?=\\[)",
            "end": "(?=:)|((?<=[\\]])(?=\\s*[\\(\\<]))",
            "name": "meta.object.member.js meta.object-literal.key.js",
            "patterns": [
              {
                "include": "#comment"
              },
              {
                "include": "#array-literal"
              }
            ]
          },
          {
            "begin": "(?=[\\'\\\"\\`])",
            "end": "(?=:)|((?<=[\\'\\\"\\`])(?=((\\s*[\\(\\<,}])|(\\s+(as|satisifies)\\s+))))",
            "name": "meta.object.member.js meta.object-literal.key.js",
            "patterns": [
              {
                "include": "#comment"
              },
              {
                "include": "#string"
              }
            ]
          },
          {
            "begin": "(?=(\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.)))(?!\\$)))",
            "end": "(?=:)|(?=\\s*([\\(\\<,}])|(\\s+as|satisifies\\s+))",
            "name": "meta.object.member.js meta.object-literal.key.js",
            "patterns": [
              {
                "include": "#comment"
              },
              {
                "include": "#numeric-literal"
              }
            ]
          },
          {
            "begin": "(?<=[\\]\\'\\\"\\`])(?=\\s*[\\(\\<])",
            "end": "(?=\\}|;|,)|(?<=\\})",
            "name": "meta.method.declaration.js",
            "patterns": [
              {
                "include": "#function-body"
              }
            ]
          },
          {
            "captures": {
              "0": {
                "name": "meta.object-literal.key.js"
              },
              "1": {
                "name": "constant.numeric.decimal.js"
              }
            },
            "match": "(?![_$[:alpha:]])([[:digit:]]+)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)",
            "name": "meta.object.member.js"
          },
          {
            "captures": {
              "0": {
                "name": "meta.object-literal.key.js"
              },
              "1": {
                "name": "entity.name.function.js"
              }
            },
            "match": "(?:([_$[:alpha:]][_$[:alnum:]]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:(\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/)*\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|([<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))",
            "name": "meta.object.member.js"
          },
          {
            "captures": {
              "0": {
                "name": "meta.object-literal.key.js"
              }
            },
            "match": "(?:[_$[:alpha:]][_$[:alnum:]]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)",
            "name": "meta.object.member.js"
          },
          {
            "begin": "\\.\\.\\.",
            "beginCaptures": {
              "0": {
                "name": "keyword.operator.spread.js"
              }
            },
            "end": "(?=,|\\})",
            "name": "meta.object.member.js",
            "patterns": [
              {
                "include": "#expression"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "variable.other.readwrite.js"
              }
            },
            "match": "([_$[:alpha:]][_$[:alnum:]]*)\\s*(?=,|\\}|$|\\/\\/|\\/\\*)",
            "name": "meta.object.member.js"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.control.as.js"
              },
              "2": {
                "name": "storage.modifier.js"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+(const)(?=\\s*([,}]|$))",
            "name": "meta.object.member.js"
          },
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(as)|(satisfies))\\s+",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.as.js"
              },
              "2": {
                "name": "keyword.control.satisfies.js"
              }
            },
            "end": "(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|^|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as|satisifies)\\s+))",
            "name": "meta.object.member.js",
            "patterns": [
              {
                "include": "#type"
              }
            ]
          },
          {
            "begin": "(?=[_$[:alpha:]][_$[:alnum:]]*\\s*=)",
            "end": "(?=,|\\}|$|\\/\\/|\\/\\*)",
            "name": "meta.object.member.js",
            "patterns": [
              {
                "include": "#expression"
              }
            ]
          },
          {
            "begin": ":",
            "beginCaptures": {
              "0": {
                "name": "meta.object-literal.key.js punctuation.separator.key-value.js"
              }
            },
            "end": "(?=,|\\})",
            "name": "meta.object.member.js",
            "patterns": [
              {
                "begin": "(?<=:)\\s*(async)?(?=\\s*(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)\\(\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",
                "beginCaptures": {
                  "1": {
                    "name": "storage.modifier.async.js"
                  }
                },
                "end": "(?<=\\))",
                "patterns": [
                  {
                    "include": "#type-parameters"
                  },
                  {
                    "begin": "\\(",
                    "beginCaptures": {
                      "0": {
                        "name": "meta.brace.round.js"
                      }
                    },
                    "end": "\\)",
                    "endCaptures": {
                      "0": {
                        "name": "meta.brace.round.js"
                      }
                    },
                    "patterns": [
                      {
                        "include": "#expression-inside-possibly-arrow-parens"
                      }
                    ]
                  }
                ]
              },
              {
                "begin": "(?<=:)\\s*(async)?\\s*(\\()(?=\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",
                "beginCaptures": {
                  "1": {
                    "name": "storage.modifier.async.js"
                  },
                  "2": {
                    "name": "meta.brace.round.js"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "meta.brace.round.js"
                  }
                },
                "patterns": [
                  {
                    "include": "#expression-inside-possibly-arrow-parens"
                  }
                ]
              },
              {
                "begin": "(?<=:)\\s*(async)?\\s*(?=\\<\\s*$)",
                "beginCaptures": {
                  "1": {
                    "name": "storage.modifier.async.js"
                  }
                },
                "end": "(?<=\\>)",
                "patterns": [
                  {
                    "include": "#type-parameters"
                  }
                ]
              },
              {
                "begin": "(?<=\\>)\\s*(\\()(?=\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",
                "beginCaptures": {
                  "1": {
                    "name": "meta.brace.round.js"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "meta.brace.round.js"
                  }
                },
                "patterns": [
                  {
                    "include": "#expression-inside-possibly-arrow-parens"
                  }
                ]
              },
              {
                "include": "#possibly-arrow-return-type"
              },
              {
                "include": "#expression"
              }
            ]
          },
          {
            "include": "#punctuation-comma"
          },
          {
            "include": "#decl-block"
          }
        ]
      },
      "parameter-array-binding-pattern": {
        "begin": "(?:(\\.\\.\\.)\\s*)?(\\[)",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.rest.js"
          },
          "2": {
            "name": "punctuation.definition.binding-pattern.array.js"
          }
        },
        "end": "\\]",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.binding-pattern.array.js"
          }
        },
        "patterns": [
          {
            "include": "#parameter-binding-element"
          },
          {
            "include": "#punctuation-comma"
          }
        ]
      },
      "parameter-binding-element": {
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#string"
          },
          {
            "include": "#numeric-literal"
          },
          {
            "include": "#regex"
          },
          {
            "include": "#parameter-object-binding-pattern"
          },
          {
            "include": "#parameter-array-binding-pattern"
          },
          {
            "include": "#destructuring-parameter-rest"
          },
          {
            "include": "#variable-initializer"
          }
        ]
      },
      "parameter-name": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "storage.modifier.js"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|protected|private|readonly)\\s+(?=(override|public|protected|private|readonly)\\s+)"
          },
          {
            "captures": {
              "1": {
                "name": "storage.modifier.js"
              },
              "2": {
                "name": "keyword.operator.rest.js"
              },
              "3": {
                "name": "entity.name.function.js variable.language.this.js"
              },
              "4": {
                "name": "entity.name.function.js"
              },
              "5": {
                "name": "keyword.operator.optional.js"
              }
            },
            "match": "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|([<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$[:alnum:]]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|([<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))"
          },
          {
            "captures": {
              "1": {
                "name": "storage.modifier.js"
              },
              "2": {
                "name": "keyword.operator.rest.js"
              },
              "3": {
                "name": "variable.parameter.js variable.language.this.js"
              },
              "4": {
                "name": "variable.parameter.js"
              },
              "5": {
                "name": "keyword.operator.optional.js"
              }
            },
            "match": "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)"
          }
        ]
      },
      "parameter-object-binding-element": {
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "begin": "(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))",
            "end": "(?=,|\\})",
            "patterns": [
              {
                "include": "#object-binding-element-propertyName"
              },
              {
                "include": "#parameter-binding-element"
              },
              {
                "include": "#paren-expression"
              }
            ]
          },
          {
            "include": "#parameter-object-binding-pattern"
          },
          {
            "include": "#destructuring-parameter-rest"
          },
          {
            "include": "#variable-initializer"
          },
          {
            "include": "#punctuation-comma"
          }
        ]
      },
      "parameter-object-binding-pattern": {
        "begin": "(?:(\\.\\.\\.)\\s*)?(\\{)",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.rest.js"
          },
          "2": {
            "name": "punctuation.definition.binding-pattern.object.js"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.binding-pattern.object.js"
          }
        },
        "patterns": [
          {
            "include": "#parameter-object-binding-element"
          }
        ]
      },
      "parameter-type-annotation": {
        "patterns": [
          {
            "begin": "(:)",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.type.annotation.js"
              }
            },
            "end": "(?=[,)])|(?==[^>])",
            "name": "meta.type.annotation.js",
            "patterns": [
              {
                "include": "#type"
              }
            ]
          }
        ]
      },
      "paren-expression": {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "meta.brace.round.js"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "meta.brace.round.js"
          }
        },
        "patterns": [
          {
            "include": "#expression"
          }
        ]
      },
      "paren-expression-possibly-arrow": {
        "patterns": [
          {
            "begin": "(?<=[(=,])\\s*(async)?(?=\\s*((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?\\(\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.async.js"
              }
            },
            "end": "(?<=\\))",
            "patterns": [
              {
                "include": "#paren-expression-possibly-arrow-with-typeparameters"
              }
            ]
          },
          {
            "begin": "(?<=[(=,]|=>|^return|[^\\._$[:alnum:]]return)\\s*(async)?(?=\\s*((((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?\\()|(<)|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)))\\s*$)",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.async.js"
              }
            },
            "end": "(?<=\\))",
            "patterns": [
              {
                "include": "#paren-expression-possibly-arrow-with-typeparameters"
              }
            ]
          },
          {
            "include": "#possibly-arrow-return-type"
          }
        ]
      },
      "paren-expression-possibly-arrow-with-typeparameters": {
        "patterns": [
          {
            "include": "#type-parameters"
          },
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "meta.brace.round.js"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "meta.brace.round.js"
              }
            },
            "patterns": [
              {
                "include": "#expression-inside-possibly-arrow-parens"
              }
            ]
          }
        ]
      },
      "possibly-arrow-return-type": {
        "begin": "(?<=\\)|^)\\s*(:)(?=\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*=>)",
        "beginCaptures": {
          "1": {
            "name": "meta.arrow.js meta.return.type.arrow.js keyword.operator.type.annotation.js"
          }
        },
        "contentName": "meta.arrow.js meta.return.type.arrow.js",
        "end": "(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))",
        "patterns": [
          {
            "include": "#arrow-return-type-body"
          }
        ]
      },
      "property-accessor": {
        "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(accessor|get|set)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        "name": "storage.type.property.js"
      },
      "punctuation-accessor": {
        "captures": {
          "1": {
            "name": "punctuation.accessor.js"
          },
          "2": {
            "name": "punctuation.accessor.optional.js"
          }
        },
        "match": "(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))"
      },
      "punctuation-comma": {
        "match": ",",
        "name": "punctuation.separator.comma.js"
      },
      "punctuation-semicolon": {
        "match": ";",
        "name": "punctuation.terminator.statement.js"
      },
      "qstring-double": {
        "begin": "\"",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.js"
          }
        },
        "end": "(\")|((?:[^\\\\\\n])$)",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.string.end.js"
          },
          "2": {
            "name": "invalid.illegal.newline.js"
          }
        },
        "name": "string.quoted.double.js",
        "patterns": [
          {
            "include": "#string-character-escape"
          }
        ]
      },
      "qstring-single": {
        "begin": "'",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.js"
          }
        },
        "end": "(\\')|((?:[^\\\\\\n])$)",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.string.end.js"
          },
          "2": {
            "name": "invalid.illegal.newline.js"
          }
        },
        "name": "string.quoted.single.js",
        "patterns": [
          {
            "include": "#string-character-escape"
          }
        ]
      },
      "regex": {
        "patterns": [
          {
            "begin": "(?<!\\+\\+|--|})(?<=[=(:,\\[?+!]|^return|[^\\._$[:alnum:]]return|^case|[^\\._$[:alnum:]]case|=>|&&|\\|\\||\\*\\/)\\s*(\\/)(?![\\/*])(?=(?:[^\\/\\\\\\[\\()]|\\\\.|\\[([^\\]\\\\]|\\\\.)+\\]|\\(([^\\)\\\\]|\\\\.)+\\))+\\/([dgimsuvy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.string.begin.js"
              }
            },
            "end": "(/)([dgimsuvy]*)",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.string.end.js"
              },
              "2": {
                "name": "keyword.other.js"
              }
            },
            "name": "string.regexp.js",
            "patterns": [
              {
                "include": "#regexp"
              }
            ]
          },
          {
            "begin": "((?<![_$[:alnum:])\\]]|\\+\\+|--|}|\\*\\/)|((?<=^return|[^\\._$[:alnum:]]return|^case|[^\\._$[:alnum:]]case))\\s*)\\/(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)*\\])+\\/([dgimsuvy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.js"
              }
            },
            "end": "(/)([dgimsuvy]*)",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.string.end.js"
              },
              "2": {
                "name": "keyword.other.js"
              }
            },
            "name": "string.regexp.js",
            "patterns": [
              {
                "include": "#regexp"
              }
            ]
          }
        ]
      },
      "regex-character-class": {
        "patterns": [
          {
            "match": "\\\\[wWsSdDtrnvf]|\\.",
            "name": "constant.other.character-class.regexp"
          },
          {
            "match": "\\\\([0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4})",
            "name": "constant.character.numeric.regexp"
          },
          {
            "match": "\\\\c[A-Z]",
            "name": "constant.character.control.regexp"
          },
          {
            "match": "\\\\.",
            "name": "constant.character.escape.backslash.regexp"
          }
        ]
      },
      "regexp": {
        "patterns": [
          {
            "match": "\\\\[bB]|\\^|\\$",
            "name": "keyword.control.anchor.regexp"
          },
          {
            "captures": {
              "0": {
                "name": "keyword.other.back-reference.regexp"
              },
              "1": {
                "name": "variable.other.regexp"
              }
            },
            "match": "\\\\[1-9]\\d*|\\\\k<([a-zA-Z_$][\\w$]*)>"
          },
          {
            "match": "[?+*]|\\{(\\d+,\\d+|\\d+,|,\\d+|\\d+)\\}\\??",
            "name": "keyword.operator.quantifier.regexp"
          },
          {
            "match": "\\|",
            "name": "keyword.operator.or.regexp"
          },
          {
            "begin": "(\\()((\\?=)|(\\?!)|(\\?<=)|(\\?<!))",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.group.regexp"
              },
              "2": {
                "name": "punctuation.definition.group.assertion.regexp"
              },
              "3": {
                "name": "meta.assertion.look-ahead.regexp"
              },
              "4": {
                "name": "meta.assertion.negative-look-ahead.regexp"
              },
              "5": {
                "name": "meta.assertion.look-behind.regexp"
              },
              "6": {
                "name": "meta.assertion.negative-look-behind.regexp"
              }
            },
            "end": "(\\))",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.group.regexp"
              }
            },
            "name": "meta.group.assertion.regexp",
            "patterns": [
              {
                "include": "#regexp"
              }
            ]
          },
          {
            "begin": "\\((?:(\\?:)|(?:\\?<([a-zA-Z_$][\\w$]*)>))?",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.group.regexp"
              },
              "1": {
                "name": "punctuation.definition.group.no-capture.regexp"
              },
              "2": {
                "name": "variable.other.regexp"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.group.regexp"
              }
            },
            "name": "meta.group.regexp",
            "patterns": [
              {
                "include": "#regexp"
              }
            ]
          },
          {
            "begin": "(\\[)(\\^)?",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.character-class.regexp"
              },
              "2": {
                "name": "keyword.operator.negation.regexp"
              }
            },
            "end": "(\\])",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.character-class.regexp"
              }
            },
            "name": "constant.other.character-class.set.regexp",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "constant.character.numeric.regexp"
                  },
                  "2": {
                    "name": "constant.character.control.regexp"
                  },
                  "3": {
                    "name": "constant.character.escape.backslash.regexp"
                  },
                  "4": {
                    "name": "constant.character.numeric.regexp"
                  },
                  "5": {
                    "name": "constant.character.control.regexp"
                  },
                  "6": {
                    "name": "constant.character.escape.backslash.regexp"
                  }
                },
                "match": "(?:.|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))\\-(?:[^\\]\\\\]|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))",
                "name": "constant.other.character-class.range.regexp"
              },
              {
                "include": "#regex-character-class"
              }
            ]
          },
          {
            "include": "#regex-character-class"
          }
        ]
      },
      "return-type": {
        "patterns": [
          {
            "begin": "(?<=\\))\\s*(:)(?=\\s*\\S)",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.type.annotation.js"
              }
            },
            "end": "(?<![:|&])(?=$|^|[{};,]|//)",
            "name": "meta.return.type.js",
            "patterns": [
              {
                "include": "#return-type-core"
              }
            ]
          },
          {
            "begin": "(?<=\\))\\s*(:)",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.type.annotation.js"
              }
            },
            "end": "(?<![:|&])((?=[{};,]|//|^\\s*$)|((?<=\\S)(?=\\s*$)))",
            "name": "meta.return.type.js",
            "patterns": [
              {
                "include": "#return-type-core"
              }
            ]
          }
        ]
      },
      "return-type-core": {
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "begin": "(?<=[:|&])(?=\\s*\\{)",
            "end": "(?<=\\})",
            "patterns": [
              {
                "include": "#type-object"
              }
            ]
          },
          {
            "include": "#type-predicate-operator"
          },
          {
            "include": "#type"
          }
        ]
      },
      "shebang": {
        "captures": {
          "1": {
            "name": "punctuation.definition.comment.js"
          }
        },
        "match": "\\A(#!).*(?=$)",
        "name": "comment.line.shebang.js"
      },
      "single-line-comment-consuming-line-ending": {
        "begin": "(^[ \\t]+)?((//)(?:\\s*((@)internal)(?=\\s|$))?)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.whitespace.comment.leading.js"
          },
          "2": {
            "name": "comment.line.double-slash.js"
          },
          "3": {
            "name": "punctuation.definition.comment.js"
          },
          "4": {
            "name": "storage.type.internaldeclaration.js"
          },
          "5": {
            "name": "punctuation.decorator.internaldeclaration.js"
          }
        },
        "contentName": "comment.line.double-slash.js",
        "end": "(?=^)"
      },
      "statements": {
        "patterns": [
          {
            "include": "#declaration"
          },
          {
            "include": "#control-statement"
          },
          {
            "include": "#after-operator-block-as-object-literal"
          },
          {
            "include": "#decl-block"
          },
          {
            "include": "#label"
          },
          {
            "include": "#expression"
          },
          {
            "include": "#punctuation-semicolon"
          },
          {
            "include": "#string"
          },
          {
            "include": "#comment"
          }
        ]
      },
      "string": {
        "patterns": [
          {
            "include": "#qstring-single"
          },
          {
            "include": "#qstring-double"
          },
          {
            "include": "#template"
          }
        ]
      },
      "string-character-escape": {
        "match": "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|u\\{[0-9A-Fa-f]+\\}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)",
        "name": "constant.character.escape.js"
      },
      "super-literal": {
        "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))super\\b(?!\\$)",
        "name": "variable.language.super.js"
      },
      "support-function-call-identifiers": {
        "patterns": [
          {
            "include": "#literal"
          },
          {
            "include": "#support-objects"
          },
          {
            "include": "#object-identifiers"
          },
          {
            "include": "#punctuation-accessor"
          },
          {
            "match": "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))import(?=\\s*[\\(]\\s*[\\\"\\'\\`]))",
            "name": "keyword.operator.expression.import.js"
          }
        ]
      },
      "support-objects": {
        "patterns": [
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(arguments)\\b(?!\\$)",
            "name": "variable.language.arguments.js"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(Promise)\\b(?!\\$)",
            "name": "support.class.promise.js"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.control.import.js"
              },
              "2": {
                "name": "punctuation.accessor.js"
              },
              "3": {
                "name": "punctuation.accessor.optional.js"
              },
              "4": {
                "name": "support.variable.property.importmeta.js"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(import)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(meta)\\b(?!\\$)"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.operator.new.js"
              },
              "2": {
                "name": "punctuation.accessor.js"
              },
              "3": {
                "name": "punctuation.accessor.optional.js"
              },
              "4": {
                "name": "support.variable.property.target.js"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(new)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(target)\\b(?!\\$)"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.accessor.js"
              },
              "2": {
                "name": "punctuation.accessor.optional.js"
              },
              "3": {
                "name": "support.variable.property.js"
              },
              "4": {
                "name": "support.constant.js"
              }
            },
            "match": "(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(?:(?:(constructor|length|prototype|__proto__)\\b(?!\\$|\\s*(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\())|(?:(EPSILON|MAX_SAFE_INTEGER|MAX_VALUE|MIN_SAFE_INTEGER|MIN_VALUE|NEGATIVE_INFINITY|POSITIVE_INFINITY)\\b(?!\\$)))"
          },
          {
            "captures": {
              "1": {
                "name": "support.type.object.module.js"
              },
              "2": {
                "name": "support.type.object.module.js"
              },
              "3": {
                "name": "punctuation.accessor.js"
              },
              "4": {
                "name": "punctuation.accessor.optional.js"
              },
              "5": {
                "name": "support.type.object.module.js"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(exports)|(module)(?:(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))(exports|id|filename|loaded|parent|children))?)\\b(?!\\$)"
          }
        ]
      },
      "switch-statement": {
        "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?=\\bswitch\\s*\\()",
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.block.js"
          }
        },
        "name": "switch-statement.expr.js",
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(switch)\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.switch.js"
              },
              "2": {
                "name": "meta.brace.round.js"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "meta.brace.round.js"
              }
            },
            "name": "switch-expression.expr.js",
            "patterns": [
              {
                "include": "#expression"
              }
            ]
          },
          {
            "begin": "\\{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.block.js"
              }
            },
            "end": "(?=\\})",
            "name": "switch-block.expr.js",
            "patterns": [
              {
                "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(case|default(?=:))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.switch.js"
                  }
                },
                "end": "(?=:)",
                "name": "case-clause.expr.js",
                "patterns": [
                  {
                    "include": "#expression"
                  }
                ]
              },
              {
                "begin": "(:)\\s*(\\{)",
                "beginCaptures": {
                  "1": {
                    "name": "case-clause.expr.js punctuation.definition.section.case-statement.js"
                  },
                  "2": {
                    "name": "meta.block.js punctuation.definition.block.js"
                  }
                },
                "contentName": "meta.block.js",
                "end": "\\}",
                "endCaptures": {
                  "0": {
                    "name": "meta.block.js punctuation.definition.block.js"
                  }
                },
                "patterns": [
                  {
                    "include": "#statements"
                  }
                ]
              },
              {
                "captures": {
                  "0": {
                    "name": "case-clause.expr.js punctuation.definition.section.case-statement.js"
                  }
                },
                "match": "(:)"
              },
              {
                "include": "#statements"
              }
            ]
          }
        ]
      },
      "template": {
        "patterns": [
          {
            "include": "#template-call"
          },
          {
            "begin": "([_$[:alpha:]][_$[:alnum:]]*)?(`)",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.tagged-template.js"
              },
              "2": {
                "name": "string.template.js punctuation.definition.string.template.begin.js"
              }
            },
            "contentName": "string.template.js",
            "end": "`",
            "endCaptures": {
              "0": {
                "name": "string.template.js punctuation.definition.string.template.end.js"
              }
            },
            "patterns": [
              {
                "include": "#template-substitution-element"
              },
              {
                "include": "#string-character-escape"
              }
            ]
          }
        ]
      },
      "template-call": {
        "patterns": [
          {
            "begin": "(?=(([_$[:alpha:]][_$[:alnum:]]*\\s*\\??\\.\\s*)*|(\\??\\.\\s*)?)([_$[:alpha:]][_$[:alnum:]]*)(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?`)",
            "end": "(?=`)",
            "patterns": [
              {
                "begin": "(?=(([_$[:alpha:]][_$[:alnum:]]*\\s*\\??\\.\\s*)*|(\\??\\.\\s*)?)([_$[:alpha:]][_$[:alnum:]]*))",
                "end": "(?=(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?`)",
                "patterns": [
                  {
                    "include": "#support-function-call-identifiers"
                  },
                  {
                    "match": "([_$[:alpha:]][_$[:alnum:]]*)",
                    "name": "entity.name.function.tagged-template.js"
                  }
                ]
              },
              {
                "include": "#type-arguments"
              }
            ]
          },
          {
            "begin": "([_$[:alpha:]][_$[:alnum:]]*)?\\s*(?=(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$[:alpha:]][_$[:alnum:]]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)`)",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.tagged-template.js"
              }
            },
            "end": "(?=`)",
            "patterns": [
              {
                "include": "#type-arguments"
              }
            ]
          }
        ]
      },
      "template-substitution-element": {
        "begin": "\\$\\{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.template-expression.begin.js"
          }
        },
        "contentName": "meta.embedded.line.js",
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.template-expression.end.js"
          }
        },
        "name": "meta.template.expression.js",
        "patterns": [
          {
            "include": "#expression"
          }
        ]
      },
      "template-type": {
        "patterns": [
          {
            "include": "#template-call"
          },
          {
            "begin": "([_$[:alpha:]][_$[:alnum:]]*)?(`)",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.tagged-template.js"
              },
              "2": {
                "name": "string.template.js punctuation.definition.string.template.begin.js"
              }
            },
            "contentName": "string.template.js",
            "end": "`",
            "endCaptures": {
              "0": {
                "name": "string.template.js punctuation.definition.string.template.end.js"
              }
            },
            "patterns": [
              {
                "include": "#template-type-substitution-element"
              },
              {
                "include": "#string-character-escape"
              }
            ]
          }
        ]
      },
      "template-type-substitution-element": {
        "begin": "\\$\\{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.template-expression.begin.js"
          }
        },
        "contentName": "meta.embedded.line.js",
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.template-expression.end.js"
          }
        },
        "name": "meta.template.expression.js",
        "patterns": [
          {
            "include": "#type"
          }
        ]
      },
      "ternary-expression": {
        "begin": "(?!\\?\\.\\s*[^[:digit:]])(\\?)(?!\\?)",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.ternary.js"
          }
        },
        "end": "\\s*(:)",
        "endCaptures": {
          "1": {
            "name": "keyword.operator.ternary.js"
          }
        },
        "patterns": [
          {
            "include": "#expression"
          }
        ]
      },
      "this-literal": {
        "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))this\\b(?!\\$)",
        "name": "variable.language.this.js"
      },
      "type": {
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#type-string"
          },
          {
            "include": "#numeric-literal"
          },
          {
            "include": "#type-primitive"
          },
          {
            "include": "#type-builtin-literals"
          },
          {
            "include": "#type-parameters"
          },
          {
            "include": "#type-tuple"
          },
          {
            "include": "#type-object"
          },
          {
            "include": "#type-operators"
          },
          {
            "include": "#type-conditional"
          },
          {
            "include": "#type-fn-type-parameters"
          },
          {
            "include": "#type-paren-or-function-parameters"
          },
          {
            "include": "#type-function-return-type"
          },
          {
            "captures": {
              "1": {
                "name": "storage.modifier.js"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*"
          },
          {
            "include": "#type-name"
          }
        ]
      },
      "type-alias-declaration": {
        "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(type)\\b\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.export.js"
          },
          "2": {
            "name": "storage.modifier.js"
          },
          "3": {
            "name": "storage.type.type.js"
          },
          "4": {
            "name": "entity.name.type.alias.js"
          }
        },
        "end": "(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",
        "name": "meta.type.declaration.js",
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#type-parameters"
          },
          {
            "begin": "(=)\\s*(intrinsic)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.assignment.js"
              },
              "2": {
                "name": "keyword.control.intrinsic.js"
              }
            },
            "end": "(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",
            "patterns": [
              {
                "include": "#type"
              }
            ]
          },
          {
            "begin": "(=)\\s*",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.assignment.js"
              }
            },
            "end": "(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",
            "patterns": [
              {
                "include": "#type"
              }
            ]
          }
        ]
      },
      "type-annotation": {
        "patterns": [
          {
            "begin": "(:)(?=\\s*\\S)",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.type.annotation.js"
              }
            },
            "end": "(?<![:|&])(?!\\s*[|&]\\s+)((?=^|[,);\\}\\]]|//)|(?==[^>])|((?<=[\\}>\\]\\)]|[_$[:alpha:]])\\s*(?=\\{)))",
            "name": "meta.type.annotation.js",
            "patterns": [
              {
                "include": "#type"
              }
            ]
          },
          {
            "begin": "(:)",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.type.annotation.js"
              }
            },
            "end": "(?<![:|&])((?=[,);\\}\\]]|\\/\\/)|(?==[^>])|(?=^\\s*$)|((?<=[\\}>\\]\\)]|[_$[:alpha:]])\\s*(?=\\{)))",
            "name": "meta.type.annotation.js",
            "patterns": [
              {
                "include": "#type"
              }
            ]
          }
        ]
      },
      "type-arguments": {
        "begin": "\\<",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.typeparameters.begin.js"
          }
        },
        "end": "\\>",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.typeparameters.end.js"
          }
        },
        "name": "meta.type.parameters.js",
        "patterns": [
          {
            "include": "#type-arguments-body"
          }
        ]
      },
      "type-arguments-body": {
        "patterns": [
          {
            "captures": {
              "0": {
                "name": "keyword.operator.type.js"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(_)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            "include": "#type"
          },
          {
            "include": "#punctuation-comma"
          }
        ]
      },
      "type-builtin-literals": {
        "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(this|true|false|undefined|null|object)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        "name": "support.type.builtin.js"
      },
      "type-conditional": {
        "patterns": [
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends)\\s+",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.js"
              }
            },
            "end": "(?<=:)",
            "patterns": [
              {
                "begin": "\\?",
                "beginCaptures": {
                  "0": {
                    "name": "keyword.operator.ternary.js"
                  }
                },
                "end": ":",
                "endCaptures": {
                  "0": {
                    "name": "keyword.operator.ternary.js"
                  }
                },
                "patterns": [
                  {
                    "include": "#type"
                  }
                ]
              },
              {
                "include": "#type"
              }
            ]
          }
        ]
      },
      "type-fn-type-parameters": {
        "patterns": [
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(new)\\b(?=\\s*\\<)",
            "beginCaptures": {
              "1": {
                "name": "meta.type.constructor.js storage.modifier.js"
              },
              "2": {
                "name": "meta.type.constructor.js keyword.control.new.js"
              }
            },
            "end": "(?<=>)",
            "patterns": [
              {
                "include": "#comment"
              },
              {
                "include": "#type-parameters"
              }
            ]
          },
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(new)\\b\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.js"
              },
              "2": {
                "name": "keyword.control.new.js"
              }
            },
            "end": "(?<=\\))",
            "name": "meta.type.constructor.js",
            "patterns": [
              {
                "include": "#function-parameters"
              }
            ]
          },
          {
            "begin": "((?=[(]\\s*(([)])|(\\.\\.\\.)|([_$[:alnum:]]+\\s*(([:,?=])|([)]\\s*=>))))))",
            "end": "(?<=\\))",
            "name": "meta.type.function.js",
            "patterns": [
              {
                "include": "#function-parameters"
              }
            ]
          }
        ]
      },
      "type-function-return-type": {
        "patterns": [
          {
            "begin": "(=>)(?=\\s*\\S)",
            "beginCaptures": {
              "1": {
                "name": "storage.type.function.arrow.js"
              }
            },
            "end": "(?<!=>)(?<![|&])(?=[,\\]\\)\\{\\}=;>:\\?]|//|$)",
            "name": "meta.type.function.return.js",
            "patterns": [
              {
                "include": "#type-function-return-type-core"
              }
            ]
          },
          {
            "begin": "=>",
            "beginCaptures": {
              "0": {
                "name": "storage.type.function.arrow.js"
              }
            },
            "end": "(?<!=>)(?<![|&])((?=[,\\]\\)\\{\\}=;:\\?>]|//|^\\s*$)|((?<=\\S)(?=\\s*$)))",
            "name": "meta.type.function.return.js",
            "patterns": [
              {
                "include": "#type-function-return-type-core"
              }
            ]
          }
        ]
      },
      "type-function-return-type-core": {
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "begin": "(?<==>)(?=\\s*\\{)",
            "end": "(?<=\\})",
            "patterns": [
              {
                "include": "#type-object"
              }
            ]
          },
          {
            "include": "#type-predicate-operator"
          },
          {
            "include": "#type"
          }
        ]
      },
      "type-infer": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "keyword.operator.expression.infer.js"
              },
              "2": {
                "name": "entity.name.type.js"
              },
              "3": {
                "name": "keyword.operator.expression.extends.js"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(infer)\\s+([_$[:alpha:]][_$[:alnum:]]*)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?:\\s+(extends)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))?",
            "name": "meta.type.infer.js"
          }
        ]
      },
      "type-name": {
        "patterns": [
          {
            "begin": "([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(<)",
            "captures": {
              "1": {
                "name": "entity.name.type.module.js"
              },
              "2": {
                "name": "punctuation.accessor.js"
              },
              "3": {
                "name": "punctuation.accessor.optional.js"
              },
              "4": {
                "name": "meta.type.parameters.js punctuation.definition.typeparameters.begin.js"
              }
            },
            "contentName": "meta.type.parameters.js",
            "end": "(>)",
            "endCaptures": {
              "1": {
                "name": "meta.type.parameters.js punctuation.definition.typeparameters.end.js"
              }
            },
            "patterns": [
              {
                "include": "#type-arguments-body"
              }
            ]
          },
          {
            "begin": "([_$[:alpha:]][_$[:alnum:]]*)\\s*(<)",
            "beginCaptures": {
              "1": {
                "name": "entity.name.type.js"
              },
              "2": {
                "name": "meta.type.parameters.js punctuation.definition.typeparameters.begin.js"
              }
            },
            "contentName": "meta.type.parameters.js",
            "end": "(>)",
            "endCaptures": {
              "1": {
                "name": "meta.type.parameters.js punctuation.definition.typeparameters.end.js"
              }
            },
            "patterns": [
              {
                "include": "#type-arguments-body"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "entity.name.type.module.js"
              },
              "2": {
                "name": "punctuation.accessor.js"
              },
              "3": {
                "name": "punctuation.accessor.optional.js"
              }
            },
            "match": "([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))"
          },
          {
            "match": "[_$[:alpha:]][_$[:alnum:]]*",
            "name": "entity.name.type.js"
          }
        ]
      },
      "type-object": {
        "begin": "\\{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.block.js"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.block.js"
          }
        },
        "name": "meta.object.type.js",
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#method-declaration"
          },
          {
            "include": "#indexer-declaration"
          },
          {
            "include": "#indexer-mapped-type-declaration"
          },
          {
            "include": "#field-declaration"
          },
          {
            "include": "#type-annotation"
          },
          {
            "begin": "\\.\\.\\.",
            "beginCaptures": {
              "0": {
                "name": "keyword.operator.spread.js"
              }
            },
            "end": "(?=\\}|;|,|$)|(?<=\\})",
            "patterns": [
              {
                "include": "#type"
              }
            ]
          },
          {
            "include": "#punctuation-comma"
          },
          {
            "include": "#punctuation-semicolon"
          },
          {
            "include": "#type"
          }
        ]
      },
      "type-operators": {
        "patterns": [
          {
            "include": "#typeof-operator"
          },
          {
            "include": "#type-infer"
          },
          {
            "begin": "([&|])(?=\\s*\\{)",
            "beginCaptures": {
              "0": {
                "name": "keyword.operator.type.js"
              }
            },
            "end": "(?<=\\})",
            "patterns": [
              {
                "include": "#type-object"
              }
            ]
          },
          {
            "begin": "[&|]",
            "beginCaptures": {
              "0": {
                "name": "keyword.operator.type.js"
              }
            },
            "end": "(?=\\S)"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))keyof(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.operator.expression.keyof.js"
          },
          {
            "match": "(\\?|\\:)",
            "name": "keyword.operator.ternary.js"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))import(?=\\s*\\()",
            "name": "keyword.operator.expression.import.js"
          }
        ]
      },
      "type-parameters": {
        "begin": "(<)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.typeparameters.begin.js"
          }
        },
        "end": "(>)",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.typeparameters.end.js"
          }
        },
        "name": "meta.type.parameters.js",
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends|in|out|const)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "storage.modifier.js"
          },
          {
            "include": "#type"
          },
          {
            "include": "#punctuation-comma"
          },
          {
            "match": "(=)(?!>)",
            "name": "keyword.operator.assignment.js"
          }
        ]
      },
      "type-paren-or-function-parameters": {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "meta.brace.round.js"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "meta.brace.round.js"
          }
        },
        "name": "meta.type.paren.cover.js",
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "storage.modifier.js"
              },
              "2": {
                "name": "keyword.operator.rest.js"
              },
              "3": {
                "name": "entity.name.function.js variable.language.this.js"
              },
              "4": {
                "name": "entity.name.function.js"
              },
              "5": {
                "name": "keyword.operator.optional.js"
              }
            },
            "match": "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))\\s*(\\??)(?=\\s*(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$[:alnum:]]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))))"
          },
          {
            "captures": {
              "1": {
                "name": "storage.modifier.js"
              },
              "2": {
                "name": "keyword.operator.rest.js"
              },
              "3": {
                "name": "variable.parameter.js variable.language.this.js"
              },
              "4": {
                "name": "variable.parameter.js"
              },
              "5": {
                "name": "keyword.operator.optional.js"
              }
            },
            "match": "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))\\s*(\\??)(?=:)"
          },
          {
            "include": "#type-annotation"
          },
          {
            "match": ",",
            "name": "punctuation.separator.parameter.js"
          },
          {
            "include": "#type"
          }
        ]
      },
      "type-predicate-operator": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "keyword.operator.type.asserts.js"
              },
              "2": {
                "name": "variable.parameter.js variable.language.this.js"
              },
              "3": {
                "name": "variable.parameter.js"
              },
              "4": {
                "name": "keyword.operator.expression.is.js"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(asserts)\\s+)?(?!asserts)(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))\\s(is)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.operator.type.asserts.js"
              },
              "2": {
                "name": "variable.parameter.js variable.language.this.js"
              },
              "3": {
                "name": "variable.parameter.js"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(asserts)\\s+(?!is)(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))asserts(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.operator.type.asserts.js"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))is(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.operator.expression.is.js"
          }
        ]
      },
      "type-primitive": {
        "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(string|number|bigint|boolean|symbol|any|void|never|unknown)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        "name": "support.type.primitive.js"
      },
      "type-string": {
        "patterns": [
          {
            "include": "#qstring-single"
          },
          {
            "include": "#qstring-double"
          },
          {
            "include": "#template-type"
          }
        ]
      },
      "type-tuple": {
        "begin": "\\[",
        "beginCaptures": {
          "0": {
            "name": "meta.brace.square.js"
          }
        },
        "end": "\\]",
        "endCaptures": {
          "0": {
            "name": "meta.brace.square.js"
          }
        },
        "name": "meta.type.tuple.js",
        "patterns": [
          {
            "match": "\\.\\.\\.",
            "name": "keyword.operator.rest.js"
          },
          {
            "captures": {
              "1": {
                "name": "entity.name.label.js"
              },
              "2": {
                "name": "keyword.operator.optional.js"
              },
              "3": {
                "name": "punctuation.separator.label.js"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))([_$[:alpha:]][_$[:alnum:]]*)\\s*(\\?)?\\s*(:)"
          },
          {
            "include": "#type"
          },
          {
            "include": "#punctuation-comma"
          }
        ]
      },
      "typeof-operator": {
        "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))typeof(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        "beginCaptures": {
          "0": {
            "name": "keyword.operator.expression.typeof.js"
          }
        },
        "end": "(?=[,);}\\]=>:&|{\\?]|(extends\\s+)|$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",
        "patterns": [
          {
            "include": "#type-arguments"
          },
          {
            "include": "#expression"
          }
        ]
      },
      "undefined-literal": {
        "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))undefined(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        "name": "constant.language.undefined.js"
      },
      "var-expr": {
        "patterns": [
          {
            "begin": "(?=(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))",
            "end": "(?!(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))((?=^|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))|((?<!^let|[^\\._$[:alnum:]]let|^var|[^\\._$[:alnum:]]var)(?=\\s*$)))",
            "name": "meta.var.expr.js",
            "patterns": [
              {
                "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.export.js"
                  },
                  "2": {
                    "name": "storage.modifier.js"
                  },
                  "3": {
                    "name": "storage.type.js"
                  }
                },
                "end": "(?=\\S)"
              },
              {
                "include": "#destructuring-variable"
              },
              {
                "include": "#var-single-variable"
              },
              {
                "include": "#variable-initializer"
              },
              {
                "include": "#comment"
              },
              {
                "begin": "(,)\\s*(?=$|\\/\\/)",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.separator.comma.js"
                  }
                },
                "end": "(?<!,)(((?==|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))",
                "patterns": [
                  {
                    "include": "#single-line-comment-consuming-line-ending"
                  },
                  {
                    "include": "#comment"
                  },
                  {
                    "include": "#destructuring-variable"
                  },
                  {
                    "include": "#var-single-variable"
                  },
                  {
                    "include": "#punctuation-comma"
                  }
                ]
              },
              {
                "include": "#punctuation-comma"
              }
            ]
          },
          {
            "begin": "(?=(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.export.js"
              },
              "2": {
                "name": "storage.modifier.js"
              },
              "3": {
                "name": "storage.type.js"
              }
            },
            "end": "(?!(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))((?=^|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))|((?<!^const|[^\\._$[:alnum:]]const)(?=\\s*$)))",
            "name": "meta.var.expr.js",
            "patterns": [
              {
                "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.export.js"
                  },
                  "2": {
                    "name": "storage.modifier.js"
                  },
                  "3": {
                    "name": "storage.type.js"
                  }
                },
                "end": "(?=\\S)"
              },
              {
                "include": "#destructuring-const"
              },
              {
                "include": "#var-single-const"
              },
              {
                "include": "#variable-initializer"
              },
              {
                "include": "#comment"
              },
              {
                "begin": "(,)\\s*(?=$|\\/\\/)",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.separator.comma.js"
                  }
                },
                "end": "(?<!,)(((?==|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))",
                "patterns": [
                  {
                    "include": "#single-line-comment-consuming-line-ending"
                  },
                  {
                    "include": "#comment"
                  },
                  {
                    "include": "#destructuring-const"
                  },
                  {
                    "include": "#var-single-const"
                  },
                  {
                    "include": "#punctuation-comma"
                  }
                ]
              },
              {
                "include": "#punctuation-comma"
              }
            ]
          },
          {
            "begin": "(?=(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b((?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.export.js"
              },
              "2": {
                "name": "storage.modifier.js"
              },
              "3": {
                "name": "storage.type.js"
              }
            },
            "end": "(?!(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b((?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))((?=;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))|((?<!^using|[^\\._$[:alnum:]]using|^await\\s+using|[^\\._$[:alnum:]]await\\s+using)(?=\\s*$)))",
            "name": "meta.var.expr.js",
            "patterns": [
              {
                "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b((?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.export.js"
                  },
                  "2": {
                    "name": "storage.modifier.js"
                  },
                  "3": {
                    "name": "storage.type.js"
                  }
                },
                "end": "(?=\\S)"
              },
              {
                "include": "#var-single-const"
              },
              {
                "include": "#variable-initializer"
              },
              {
                "include": "#comment"
              },
              {
                "begin": "(,)\\s*((?!\\S)|(?=\\/\\/))",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.separator.comma.js"
                  }
                },
                "end": "(?<!,)(((?==|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))",
                "patterns": [
                  {
                    "include": "#single-line-comment-consuming-line-ending"
                  },
                  {
                    "include": "#comment"
                  },
                  {
                    "include": "#var-single-const"
                  },
                  {
                    "include": "#punctuation-comma"
                  }
                ]
              },
              {
                "include": "#punctuation-comma"
              }
            ]
          }
        ]
      },
      "var-single-const": {
        "patterns": [
          {
            "begin": "([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|([<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$[:alnum:]]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|([<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))",
            "beginCaptures": {
              "1": {
                "name": "meta.definition.variable.js variable.other.constant.js entity.name.function.js"
              }
            },
            "end": "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",
            "name": "meta.var-single-variable.expr.js",
            "patterns": [
              {
                "include": "#var-single-variable-type-annotation"
              }
            ]
          },
          {
            "begin": "([_$[:alpha:]][_$[:alnum:]]*)",
            "beginCaptures": {
              "1": {
                "name": "meta.definition.variable.js variable.other.constant.js"
              }
            },
            "end": "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",
            "name": "meta.var-single-variable.expr.js",
            "patterns": [
              {
                "include": "#var-single-variable-type-annotation"
              }
            ]
          }
        ]
      },
      "var-single-variable": {
        "patterns": [
          {
            "begin": "([_$[:alpha:]][_$[:alnum:]]*)(\\!)?(?=\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|([<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$[:alnum:]]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|([<]\\s*[_$[:alpha:]][_$[:alnum:]]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))",
            "beginCaptures": {
              "1": {
                "name": "meta.definition.variable.js entity.name.function.js"
              },
              "2": {
                "name": "keyword.operator.definiteassignment.js"
              }
            },
            "end": "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",
            "name": "meta.var-single-variable.expr.js",
            "patterns": [
              {
                "include": "#var-single-variable-type-annotation"
              }
            ]
          },
          {
            "begin": "([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])(\\!)?",
            "beginCaptures": {
              "1": {
                "name": "meta.definition.variable.js variable.other.constant.js"
              },
              "2": {
                "name": "keyword.operator.definiteassignment.js"
              }
            },
            "end": "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",
            "name": "meta.var-single-variable.expr.js",
            "patterns": [
              {
                "include": "#var-single-variable-type-annotation"
              }
            ]
          },
          {
            "begin": "([_$[:alpha:]][_$[:alnum:]]*)(\\!)?",
            "beginCaptures": {
              "1": {
                "name": "meta.definition.variable.js variable.other.readwrite.js"
              },
              "2": {
                "name": "keyword.operator.definiteassignment.js"
              }
            },
            "end": "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",
            "name": "meta.var-single-variable.expr.js",
            "patterns": [
              {
                "include": "#var-single-variable-type-annotation"
              }
            ]
          }
        ]
      },
      "var-single-variable-type-annotation": {
        "patterns": [
          {
            "include": "#type-annotation"
          },
          {
            "include": "#string"
          },
          {
            "include": "#comment"
          }
        ]
      },
      "variable-initializer": {
        "patterns": [
          {
            "begin": "(?<!=|!)(=)(?!=)(?=\\s*\\S)(?!\\s*.*=>\\s*$)",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.assignment.js"
              }
            },
            "end": "(?=$|^|[,);}\\]]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            "patterns": [
              {
                "include": "#expression"
              }
            ]
          },
          {
            "begin": "(?<!=|!)(=)(?!=)",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.assignment.js"
              }
            },
            "end": "(?=[,);}\\]]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))|(?=^\\s*$)|(?<![\\|\\&\\+\\-\\*\\/])(?<=\\S)(?<!=)(?=\\s*$)",
            "patterns": [
              {
                "include": "#expression"
              }
            ]
          }
        ]
      }
    },
    "scopeName": "source.js",
    "aliases": [
      "js"
    ]
  },
  {
    "displayName": "Marko",
    "fileTypes": [
      "marko"
    ],
    "name": "marko",
    "patterns": [
      {
        "begin": "^\\s*(style)\\s+(\\{)",
        "beginCaptures": {
          "1": {
            "name": "storage.type.marko.css"
          },
          "2": {
            "name": "punctuation.section.scope.begin.marko.css"
          }
        },
        "comment": "CSS style block, eg: style { color: green }",
        "contentName": "source.css",
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.scope.end.marko.css"
          }
        },
        "name": "meta.embedded.css",
        "patterns": [
          {
            "include": "source.css"
          }
        ]
      },
      {
        "begin": "^\\s*(style)\\.(less)\\s+(\\{)",
        "beginCaptures": {
          "1": {
            "name": "storage.type.marko.css"
          },
          "2": {
            "name": "storage.modifier.marko.css"
          },
          "3": {
            "name": "punctuation.section.scope.begin.marko.css"
          }
        },
        "comment": "Less style block, eg: style.less { color: green }",
        "contentName": "source.less",
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.scope.end.marko.css"
          }
        },
        "name": "meta.embedded.less",
        "patterns": [
          {
            "include": "source.css.less"
          }
        ]
      },
      {
        "begin": "^\\s*(style)\\.(scss)\\s+(\\{)",
        "beginCaptures": {
          "1": {
            "name": "storage.type.marko.css"
          },
          "2": {
            "name": "storage.modifier.marko.css"
          },
          "3": {
            "name": "punctuation.section.scope.begin.marko.css"
          }
        },
        "comment": "SCSS style block, eg: style.scss { color: green }",
        "contentName": "source.scss",
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.scope.end.marko.css"
          }
        },
        "name": "meta.embedded.scss",
        "patterns": [
          {
            "include": "source.css.scss"
          }
        ]
      },
      {
        "begin": "^\\s*(?:(static )|(?=(?:class|import|export) ))",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.static.marko"
          }
        },
        "comment": "Top level blocks parsed as JavaScript",
        "contentName": "source.js",
        "end": "(?=\\n|$)",
        "name": "meta.embedded.js",
        "patterns": [
          {
            "include": "#javascript-statement"
          }
        ]
      },
      {
        "include": "#content-concise-mode"
      }
    ],
    "repository": {
      "attrs": {
        "patterns": [
          {
            "applyEndPatternLast": 1,
            "begin": "(?:\\s+|,)(?:(key|on[a-zA-Z0-9_$-]+|[a-zA-Z0-9_$]+Change|no-update(?:-body)?(?:-if)?)|([a-zA-Z0-9_$][a-zA-Z0-9_$-]*))(:[a-zA-Z0-9_$][a-zA-Z0-9_$-]*)?",
            "beginCaptures": {
              "1": {
                "name": "support.type.attribute-name.marko"
              },
              "2": {
                "name": "entity.other.attribute-name.marko"
              },
              "3": {
                "name": "support.function.attribute-name.marko"
              }
            },
            "comment": "Attribute with optional value",
            "end": "(?=.|$)",
            "name": "meta.marko-attribute",
            "patterns": [
              {
                "include": "#html-args-or-method"
              },
              {
                "applyEndPatternLast": 1,
                "begin": "\\s*(:?=)\\s*",
                "beginCaptures": {
                  "1": {
                    "patterns": [
                      {
                        "include": "source.js"
                      }
                    ]
                  }
                },
                "comment": "Attribute value",
                "contentName": "source.js",
                "end": "(?=.|$)",
                "name": "meta.embedded.js",
                "patterns": [
                  {
                    "include": "#javascript-expression"
                  }
                ]
              }
            ]
          },
          {
            "applyEndPatternLast": 1,
            "begin": "(?:\\s+|,)\\.\\.\\.",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.spread.marko"
              }
            },
            "comment": "A ...spread attribute",
            "contentName": "source.js",
            "end": "(?=.|$)",
            "name": "meta.marko-spread-attribute",
            "patterns": [
              {
                "include": "#javascript-expression"
              }
            ]
          },
          {
            "begin": "\\s*(,(?!,))",
            "captures": {
              "1": {
                "patterns": [
                  {
                    "include": "source.js"
                  }
                ]
              }
            },
            "comment": "Consume any whitespace after a comma",
            "end": "(?!\\S)"
          },
          {
            "include": "#javascript-comment-multiline"
          },
          {
            "include": "#invalid"
          }
        ]
      },
      "concise-html-block": {
        "begin": "\\s*(--+)\\s*$",
        "beginCaptures": {
          "2": {
            "name": "punctuation.section.scope.begin.marko"
          }
        },
        "comment": "--- HTML block within concise mode content. ---",
        "end": "\\1",
        "endCaptures": {
          "1": {
            "name": "punctuation.section.scope.end.marko"
          }
        },
        "name": "meta.section.marko-html-block",
        "patterns": [
          {
            "include": "#content-html-mode"
          }
        ]
      },
      "concise-html-line": {
        "captures": {
          "1": {
            "name": "punctuation.section.scope.begin.marko"
          },
          "2": {
            "patterns": [
              {
                "include": "#html-comments"
              },
              {
                "include": "#tag-html"
              },
              {
                "match": "\\\\.",
                "name": "string"
              },
              {
                "include": "#placeholder"
              },
              {
                "match": ".+?",
                "name": "string"
              }
            ]
          }
        },
        "comment": "-- HTML line within concise mode content. (content-html-mode w/o scriptlet)",
        "match": "\\s*(--+)(?=\\s+\\S)(.*$)",
        "name": "meta.section.marko-html-line"
      },
      "concise-open-tag-content": {
        "patterns": [
          {
            "include": "#tag-before-attrs"
          },
          {
            "begin": "\\s*\\[",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.scope.begin.marko"
              }
            },
            "end": "]",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.scope.end.marko"
              }
            },
            "patterns": [
              {
                "include": "#attrs"
              },
              {
                "include": "#invalid"
              }
            ]
          },
          {
            "begin": "(?!^)(?= )",
            "end": "(?=--)|(?<!,)(?=\\n)",
            "patterns": [
              {
                "include": "#attrs"
              },
              {
                "include": "#invalid"
              }
            ]
          }
        ]
      },
      "concise-script-block": {
        "begin": "(\\s+)(--+)\\s*$",
        "beginCaptures": {
          "2": {
            "name": "punctuation.section.scope.begin.marko"
          }
        },
        "comment": "--- Embedded concise script content block. ---",
        "end": "(\\2)|(?=^(?!\\1)\\s*\\S)",
        "endCaptures": {
          "1": {
            "name": "punctuation.section.scope.end.marko"
          }
        },
        "name": "meta.section.marko-script-block",
        "patterns": [
          {
            "include": "#content-embedded-script"
          }
        ]
      },
      "concise-script-line": {
        "applyEndPatternLast": 1,
        "begin": "\\s*(--+)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.section.scope.begin.marko"
          }
        },
        "comment": "-- Embedded concise script content line.",
        "end": "$",
        "name": "meta.section.marko-script-line",
        "patterns": [
          {
            "include": "#content-embedded-script"
          }
        ]
      },
      "concise-style-block": {
        "begin": "(\\s+)(--+)\\s*$",
        "beginCaptures": {
          "2": {
            "name": "punctuation.section.scope.begin.marko"
          }
        },
        "comment": "--- Embedded concise style content block. ---",
        "contentName": "source.css",
        "end": "(\\2)|(?=^(?!\\1)\\s*\\S)",
        "endCaptures": {
          "1": {
            "name": "punctuation.section.scope.end.marko"
          }
        },
        "name": "meta.section.marko-style-block",
        "patterns": [
          {
            "include": "#content-embedded-style"
          }
        ]
      },
      "concise-style-block-less": {
        "begin": "(\\s+)(--+)\\s*$",
        "beginCaptures": {
          "2": {
            "name": "punctuation.section.scope.begin.marko"
          }
        },
        "comment": "--- Embedded concise style content block. ---",
        "contentName": "source.less",
        "end": "(\\2)|(?=^(?!\\1)\\s*\\S)",
        "endCaptures": {
          "1": {
            "name": "punctuation.section.scope.end.marko"
          }
        },
        "name": "meta.section.marko-style-block",
        "patterns": [
          {
            "include": "#content-embedded-style-less"
          }
        ]
      },
      "concise-style-block-scss": {
        "begin": "(\\s+)(--+)\\s*$",
        "beginCaptures": {
          "2": {
            "name": "punctuation.section.scope.begin.marko"
          }
        },
        "comment": "--- Embedded concise style content block. ---",
        "contentName": "source.scss",
        "end": "(\\2)|(?=^(?!\\1)\\s*\\S)",
        "endCaptures": {
          "1": {
            "name": "punctuation.section.scope.end.marko"
          }
        },
        "name": "meta.section.marko-style-block",
        "patterns": [
          {
            "include": "#content-embedded-style-scss"
          }
        ]
      },
      "concise-style-line": {
        "applyEndPatternLast": 1,
        "begin": "\\s*(--+)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.section.scope.begin.marko"
          }
        },
        "comment": "-- Embedded concise style content line.",
        "contentName": "source.css",
        "end": "$",
        "name": "meta.section.marko-style-line",
        "patterns": [
          {
            "include": "#content-embedded-style"
          }
        ]
      },
      "concise-style-line-less": {
        "applyEndPatternLast": 1,
        "begin": "\\s*(--+)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.section.scope.begin.marko"
          }
        },
        "comment": "-- Embedded concise style content line.",
        "contentName": "source.less",
        "end": "$",
        "name": "meta.section.marko-style-line",
        "patterns": [
          {
            "include": "#content-embedded-style-less"
          }
        ]
      },
      "concise-style-line-scss": {
        "applyEndPatternLast": 1,
        "begin": "\\s*(--+)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.section.scope.begin.marko"
          }
        },
        "comment": "-- Embedded concise style content line.",
        "contentName": "source.scss",
        "end": "$",
        "name": "meta.section.marko-style-line",
        "patterns": [
          {
            "include": "#content-embedded-style-scss"
          }
        ]
      },
      "content-concise-mode": {
        "comment": "Concise mode content block.",
        "name": "meta.marko-concise-content",
        "patterns": [
          {
            "include": "#scriptlet"
          },
          {
            "include": "#javascript-comments"
          },
          {
            "include": "#html-comments"
          },
          {
            "include": "#concise-html-block"
          },
          {
            "include": "#concise-html-line"
          },
          {
            "include": "#tag-html"
          },
          {
            "comment": "A concise html tag.",
            "patterns": [
              {
                "begin": "^(\\s*)(?=style\\.less\\b)",
                "comment": "Concise style tag less",
                "patterns": [
                  {
                    "include": "#concise-open-tag-content"
                  },
                  {
                    "include": "#concise-style-block-less"
                  },
                  {
                    "include": "#concise-style-line-less"
                  }
                ],
                "while": "(?=^\\1\\s+(\\S|$))"
              },
              {
                "begin": "^(\\s*)(?=style\\.scss\\b)",
                "comment": "Concise style tag scss",
                "patterns": [
                  {
                    "include": "#concise-open-tag-content"
                  },
                  {
                    "include": "#concise-style-block-scss"
                  },
                  {
                    "include": "#concise-style-line-scss"
                  }
                ],
                "while": "(?=^\\1\\s+(\\S|$))"
              },
              {
                "begin": "^(\\s*)(?=style\\b)",
                "comment": "Concise style tag",
                "patterns": [
                  {
                    "include": "#concise-open-tag-content"
                  },
                  {
                    "include": "#concise-style-block"
                  },
                  {
                    "include": "#concise-style-line"
                  }
                ],
                "while": "(?=^\\1\\s+(\\S|$))"
              },
              {
                "begin": "^(\\s*)(?=script\\b)",
                "comment": "Concise script tag",
                "patterns": [
                  {
                    "include": "#concise-open-tag-content"
                  },
                  {
                    "include": "#concise-script-block"
                  },
                  {
                    "include": "#concise-script-line"
                  }
                ],
                "while": "(?=^\\1\\s+(\\S|$))"
              },
              {
                "begin": "^(\\s*)(?=[a-zA-Z0-9_$@])",
                "comment": "Normal concise tag",
                "patterns": [
                  {
                    "include": "#concise-open-tag-content"
                  },
                  {
                    "include": "#content-concise-mode"
                  }
                ],
                "while": "(?=^\\1\\s+(\\S|$))"
              }
            ]
          },
          {
            "include": "#invalid"
          }
        ]
      },
      "content-embedded-script": {
        "name": "meta.embedded.js",
        "patterns": [
          {
            "include": "#placeholder"
          },
          {
            "include": "source.js"
          }
        ]
      },
      "content-embedded-style": {
        "name": "meta.embedded.css",
        "patterns": [
          {
            "include": "#placeholder"
          },
          {
            "include": "source.css"
          }
        ]
      },
      "content-embedded-style-less": {
        "name": "meta.embedded.css.less",
        "patterns": [
          {
            "include": "#placeholder"
          },
          {
            "include": "source.css.less"
          }
        ]
      },
      "content-embedded-style-scss": {
        "name": "meta.embedded.css.scss",
        "patterns": [
          {
            "include": "#placeholder"
          },
          {
            "include": "source.css.scss"
          }
        ]
      },
      "content-html-mode": {
        "comment": "HTML mode content block.",
        "patterns": [
          {
            "include": "#scriptlet"
          },
          {
            "include": "#html-comments"
          },
          {
            "include": "#tag-html"
          },
          {
            "match": "\\\\.",
            "name": "string"
          },
          {
            "include": "#placeholder"
          },
          {
            "match": ".+?",
            "name": "string"
          }
        ]
      },
      "html-args-or-method": {
        "patterns": [
          {
            "include": "#javascript-args"
          },
          {
            "begin": "(?<=\\))\\s*(?=\\{)",
            "comment": "Attribute method shorthand following parens",
            "contentName": "source.js",
            "end": "(?<=\\})",
            "name": "meta.embedded.js",
            "patterns": [
              {
                "include": "source.js"
              }
            ]
          }
        ]
      },
      "html-comments": {
        "patterns": [
          {
            "begin": "\\s*(<!(--)?)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.comment.marko"
              }
            },
            "comment": "HTML comments, doctypes & cdata",
            "end": "\\2>",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.comment.marko"
              }
            },
            "name": "comment.block.marko"
          },
          {
            "begin": "\\s*(<html-comment>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.comment.marko"
              }
            },
            "comment": "Preserved HTML comment tag",
            "end": "</html-comment>",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.comment.marko"
              }
            },
            "name": "comment.block.marko"
          }
        ]
      },
      "invalid": {
        "match": "[^\\s]",
        "name": "invalid.illegal.character-not-allowed-here.marko"
      },
      "javascript-args": {
        "begin": "(?=\\()",
        "comment": "Javascript style arguments",
        "contentName": "source.js",
        "end": "(?<=\\))",
        "name": "meta.embedded.js",
        "patterns": [
          {
            "include": "source.js"
          }
        ]
      },
      "javascript-comment-line": {
        "captures": {
          "0": {
            "patterns": [
              {
                "include": "source.js"
              }
            ]
          }
        },
        "comment": "JavaScript // single line comment",
        "contentName": "source.js",
        "match": "\\s*//.*$"
      },
      "javascript-comment-multiline": {
        "begin": "\\s*(?=/\\*)",
        "comment": "JavaScript /* block comment */",
        "contentName": "source.js",
        "end": "(?<=\\*/)",
        "patterns": [
          {
            "include": "source.js"
          }
        ]
      },
      "javascript-comments": {
        "patterns": [
          {
            "include": "#javascript-comment-multiline"
          },
          {
            "include": "#javascript-comment-line"
          }
        ]
      },
      "javascript-enclosed": {
        "comment": "Matches JavaScript content and ensures enclosed blocks are matched.",
        "patterns": [
          {
            "include": "#javascript-comments"
          },
          {
            "include": "#javascript-args"
          },
          {
            "begin": "(?={)",
            "end": "(?<=})",
            "patterns": [
              {
                "include": "source.js"
              }
            ]
          },
          {
            "begin": "(?=\\[)",
            "end": "(?<=])",
            "patterns": [
              {
                "include": "source.js"
              }
            ]
          },
          {
            "begin": "(?=\")",
            "end": "(?<=\")",
            "patterns": [
              {
                "include": "source.js"
              }
            ]
          },
          {
            "begin": "(?=')",
            "end": "(?<=')",
            "patterns": [
              {
                "include": "source.js"
              }
            ]
          },
          {
            "begin": "(?=`)",
            "end": "(?<=`)",
            "patterns": [
              {
                "include": "source.js"
              }
            ]
          },
          {
            "begin": "/(?!<[\\]})A-Z0-9.<%]\\s*/)(?!/?>|$)",
            "captures": {
              "0": {
                "name": "string.regexp.js"
              }
            },
            "contentName": "source.js",
            "end": "/[gimsuy]*",
            "patterns": [
              {
                "include": "source.js#regexp"
              },
              {
                "include": "source.js"
              }
            ]
          },
          {
            "begin": "\\s*(?:(?:\\b(?:new|typeof|instanceof|in)\\b)|\\&\\&|\\|\\||[\\^|&]|[!=]=|[!=]==|<|<[=<]|=>|[?:]|[-+*%](?!-))",
            "captures": {
              "0": {
                "patterns": [
                  {
                    "include": "source.js"
                  }
                ]
              }
            },
            "end": "(?=\\S)"
          }
        ]
      },
      "javascript-expression": {
        "patterns": [
          {
            "include": "#javascript-enclosed"
          },
          {
            "captures": {
              "0": {
                "patterns": [
                  {
                    "include": "source.js"
                  }
                ]
              }
            },
            "comment": "Match identifiers and member expressions",
            "match": "[0-9a-zA-Z$_.]+"
          }
        ]
      },
      "javascript-statement": {
        "patterns": [
          {
            "include": "#javascript-enclosed"
          },
          {
            "include": "source.js"
          }
        ]
      },
      "open-tag-content": {
        "patterns": [
          {
            "include": "#tag-before-attrs"
          },
          {
            "begin": "(?= )",
            "comment": "Attributes begin after the first space within the tag name",
            "end": "(?=/?>)",
            "patterns": [
              {
                "include": "#attrs"
              }
            ]
          }
        ]
      },
      "placeholder": {
        "begin": "\\$!?{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.template-expression.begin.js"
          }
        },
        "comment": "${ } placeholder",
        "contentName": "source.js",
        "end": "}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.template-expression.end.js"
          }
        },
        "patterns": [
          {
            "include": "source.js"
          }
        ]
      },
      "scriptlet": {
        "begin": "^\\s*(\\$)\\s+",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.scriptlet.marko"
          }
        },
        "comment": "An inline JavaScript scriptlet.",
        "contentName": "source.js",
        "end": "$",
        "name": "meta.embedded.js",
        "patterns": [
          {
            "include": "#javascript-statement"
          }
        ]
      },
      "tag-before-attrs": {
        "comment": "Everything in a tag before the attributes content",
        "patterns": [
          {
            "include": "#tag-name"
          },
          {
            "comment": "Shorthand class or ID attribute",
            "match": "[#.][a-zA-Z0-9_$][a-zA-Z0-9_$-]*",
            "name": "entity.other.attribute-name.marko"
          },
          {
            "begin": "/(?!/)",
            "beginCaptures": {
              "0": {
                "name": "punctuation.separator.key-value.marko"
              }
            },
            "comment": "Variable for a tag",
            "contentName": "source.js",
            "end": "(?=:?\\=|\\s|>|$|\\||\\(|/)",
            "name": "meta.embedded.js",
            "patterns": [
              {
                "comment": "Match identifiers",
                "match": "[a-zA-Z$_][0-9a-zA-Z$_]*",
                "name": "variable.other.constant.object.js"
              },
              {
                "include": "source.js#object-binding-pattern"
              },
              {
                "include": "source.js#array-binding-pattern"
              },
              {
                "include": "source.js#var-single-variable"
              },
              {
                "include": "#javascript-expression"
              }
            ]
          },
          {
            "applyEndPatternLast": 1,
            "begin": "\\s*(:?=)\\s*",
            "beginCaptures": {
              "1": {
                "patterns": [
                  {
                    "include": "source.js"
                  }
                ]
              }
            },
            "comment": "Default attribute value",
            "contentName": "source.js",
            "end": "(?=.|$)",
            "name": "meta.embedded.js",
            "patterns": [
              {
                "include": "#javascript-expression"
              }
            ]
          },
          {
            "begin": "\\|",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.scope.begin.marko"
              }
            },
            "comment": "Parameters for a tag",
            "end": "\\|",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.scope.end.marko"
              }
            },
            "patterns": [
              {
                "include": "source.js#function-parameters-body"
              },
              {
                "include": "source.js"
              }
            ]
          },
          {
            "include": "#html-args-or-method"
          }
        ]
      },
      "tag-html": {
        "comment": "Matches an HTML tag and its contents",
        "patterns": [
          {
            "begin": "\\s*(<)(?=(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)\\b)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.end.marko"
              }
            },
            "comment": "HTML void elements",
            "end": "/?>",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.marko"
              }
            },
            "patterns": [
              {
                "include": "#open-tag-content"
              }
            ]
          },
          {
            "begin": "\\s*(<)(?=style\\.less\\b)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.marko"
              }
            },
            "comment": "HTML style tag with less",
            "end": "/>|(?<=\\>)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.marko"
              }
            },
            "patterns": [
              {
                "include": "#open-tag-content"
              },
              {
                "begin": ">",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.tag.end.marko"
                  }
                },
                "comment": "Style body content",
                "contentName": "source.less",
                "end": "\\s*(</)(style)?(>)",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.tag.end.marko"
                  },
                  "2": {
                    "patterns": [
                      {
                        "include": "#tag-name"
                      }
                    ]
                  },
                  "3": {
                    "name": "punctuation.definition.tag.end.marko"
                  }
                },
                "patterns": [
                  {
                    "include": "#content-embedded-style-less"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\s*(<)(?=style\\.scss\\b)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.marko"
              }
            },
            "comment": "HTML style tag with scss",
            "end": "/>|(?<=\\>)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.marko"
              }
            },
            "patterns": [
              {
                "include": "#open-tag-content"
              },
              {
                "begin": ">",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.tag.end.marko"
                  }
                },
                "comment": "Style body content",
                "contentName": "source.less",
                "end": "\\s*(</)(style)?(>)",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.tag.end.marko"
                  },
                  "2": {
                    "patterns": [
                      {
                        "include": "#tag-name"
                      }
                    ]
                  },
                  "3": {
                    "name": "punctuation.definition.tag.end.marko"
                  }
                },
                "patterns": [
                  {
                    "include": "#content-embedded-style-scss"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\s*(<)(?=style\\b)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.marko"
              }
            },
            "comment": "HTML style tag",
            "end": "/>|(?<=\\>)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.marko"
              }
            },
            "patterns": [
              {
                "include": "#open-tag-content"
              },
              {
                "begin": ">",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.tag.end.marko"
                  }
                },
                "comment": "Style body content",
                "contentName": "source.css",
                "end": "\\s*(</)(style)?(>)",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.tag.end.marko"
                  },
                  "2": {
                    "patterns": [
                      {
                        "include": "#tag-name"
                      }
                    ]
                  },
                  "3": {
                    "name": "punctuation.definition.tag.end.marko"
                  }
                },
                "patterns": [
                  {
                    "include": "#content-embedded-style"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\s*(<)(?=script\\b)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.marko"
              }
            },
            "comment": "HTML script tag",
            "end": "/>|(?<=\\>)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.marko"
              }
            },
            "patterns": [
              {
                "include": "#open-tag-content"
              },
              {
                "begin": ">",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.tag.end.marko"
                  }
                },
                "comment": "Script body content",
                "contentName": "source.js",
                "end": "\\s*(</)(script)?(>)",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.tag.end.marko"
                  },
                  "2": {
                    "patterns": [
                      {
                        "include": "#tag-name"
                      }
                    ]
                  },
                  "3": {
                    "name": "punctuation.definition.tag.end.marko"
                  }
                },
                "patterns": [
                  {
                    "include": "#content-embedded-script"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\s*(<)(?=[a-zA-Z0-9_$@])",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.marko"
              }
            },
            "comment": "HTML normal tag",
            "end": "/>|(?<=\\>)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.marko"
              }
            },
            "patterns": [
              {
                "include": "#open-tag-content"
              },
              {
                "begin": ">",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.tag.end.marko"
                  }
                },
                "comment": "Body content",
                "end": "\\s*(</)([a-zA-Z0-9_$:@-]+)?(.*?)(>)",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.tag.end.marko"
                  },
                  "2": {
                    "patterns": [
                      {
                        "include": "#tag-name"
                      }
                    ]
                  },
                  "3": {
                    "patterns": [
                      {
                        "include": "#invalid"
                      }
                    ]
                  },
                  "4": {
                    "name": "punctuation.definition.tag.end.marko"
                  }
                },
                "patterns": [
                  {
                    "include": "#content-html-mode"
                  }
                ]
              }
            ]
          }
        ]
      },
      "tag-name": {
        "patterns": [
          {
            "begin": "\\${",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.template-expression.begin.js"
              }
            },
            "comment": "Dynamic tag.",
            "end": "}",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.template-expression.end.js"
              }
            },
            "patterns": [
              {
                "include": "source.js"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "entity.name.tag.marko"
              },
              "2": {
                "name": "storage.type.marko.css"
              },
              "3": {
                "patterns": [
                  {
                    "comment": "Core tag.",
                    "match": "(attrs|return|import)(?=\\b)",
                    "name": "support.type.builtin.marko"
                  },
                  {
                    "comment": "Core tag.",
                    "match": "(for|if|while|else-if|else|macro|tag|await|let|const|effect|set|get|id|lifecycle)(?=\\b)",
                    "name": "support.function.marko"
                  },
                  {
                    "comment": "Attribute tag.",
                    "match": "@.+",
                    "name": "entity.other.attribute-name.marko"
                  },
                  {
                    "comment": "Native or userland tag.",
                    "match": ".+",
                    "name": "entity.name.tag.marko"
                  }
                ]
              }
            },
            "match": "(style)\\.([a-zA-Z0-9$_-]+(?:\\.[a-zA-Z0-9$_-]+)*)|([a-zA-Z0-9_$@][a-zA-Z0-9_$@:-]*)"
          }
        ]
      }
    },
    "scopeName": "text.marko",
    "embeddedLangs": [
      "css",
      "less",
      "scss",
      "javascript"
    ]
  }
])