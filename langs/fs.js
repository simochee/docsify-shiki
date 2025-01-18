/** Shiki Language: fs */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push([
  {
    "displayName": "Markdown",
    "name": "markdown",
    "patterns": [
      {
        "include": "#frontMatter"
      },
      {
        "include": "#block"
      }
    ],
    "repository": {
      "ampersand": {
        "comment": "Markdown will convert this for us. We match it so that the HTML grammar will not mark it up as invalid.",
        "match": "&(?!([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+);)",
        "name": "meta.other.valid-ampersand.markdown"
      },
      "block": {
        "patterns": [
          {
            "include": "#separator"
          },
          {
            "include": "#heading"
          },
          {
            "include": "#blockquote"
          },
          {
            "include": "#lists"
          },
          {
            "include": "#fenced_code_block"
          },
          {
            "include": "#raw_block"
          },
          {
            "include": "#link-def"
          },
          {
            "include": "#html"
          },
          {
            "include": "#table"
          },
          {
            "include": "#paragraph"
          }
        ]
      },
      "blockquote": {
        "begin": "(^|\\G)[ ]{0,3}(>) ?",
        "captures": {
          "2": {
            "name": "punctuation.definition.quote.begin.markdown"
          }
        },
        "name": "markup.quote.markdown",
        "patterns": [
          {
            "include": "#block"
          }
        ],
        "while": "(^|\\G)\\s*(>) ?"
      },
      "bold": {
        "begin": "(?<open>(\\*\\*(?=\\w)|(?<!\\w)\\*\\*|(?<!\\w)\\b__))(?=\\S)(?=(<[^>]*+>|(?<raw>`+)([^`]|(?!(?<!`)\\k<raw>(?!`))`)*+\\k<raw>|\\\\[\\\\`*_{}\\[\\]()#.!+\\->]?+|\\[((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+\\](([ ]?\\[[^\\]]*+\\])|(\\([ \\t]*+<?(.*?)>?[ \\t]*+((?<title>['\"])(.*?)\\k<title>)?\\))))|(?!(?<=\\S)\\k<open>).)++(?<=\\S)(?=__\\b|\\*\\*)\\k<open>)",
        "captures": {
          "1": {
            "name": "punctuation.definition.bold.markdown"
          }
        },
        "end": "(?<=\\S)(\\1)",
        "name": "markup.bold.markdown",
        "patterns": [
          {
            "applyEndPatternLast": 1,
            "begin": "(?=<[^>]*?>)",
            "end": "(?<=>)",
            "patterns": [
              {
                "include": "text.html.derivative"
              }
            ]
          },
          {
            "include": "#escape"
          },
          {
            "include": "#ampersand"
          },
          {
            "include": "#bracket"
          },
          {
            "include": "#raw"
          },
          {
            "include": "#bold"
          },
          {
            "include": "#italic"
          },
          {
            "include": "#image-inline"
          },
          {
            "include": "#link-inline"
          },
          {
            "include": "#link-inet"
          },
          {
            "include": "#link-email"
          },
          {
            "include": "#image-ref"
          },
          {
            "include": "#link-ref-literal"
          },
          {
            "include": "#link-ref"
          },
          {
            "include": "#link-ref-shortcut"
          },
          {
            "include": "#strikethrough"
          }
        ]
      },
      "bracket": {
        "comment": "Markdown will convert this for us. We match it so that the HTML grammar will not mark it up as invalid.",
        "match": "<(?![a-zA-Z/?\\$!])",
        "name": "meta.other.valid-bracket.markdown"
      },
      "escape": {
        "match": "\\\\[-`*_#+.!(){}\\[\\]\\\\>]",
        "name": "constant.character.escape.markdown"
      },
      "fenced_code_block": {
        "patterns": [
          {
            "include": "#fenced_code_block_css"
          },
          {
            "include": "#fenced_code_block_basic"
          },
          {
            "include": "#fenced_code_block_ini"
          },
          {
            "include": "#fenced_code_block_java"
          },
          {
            "include": "#fenced_code_block_lua"
          },
          {
            "include": "#fenced_code_block_makefile"
          },
          {
            "include": "#fenced_code_block_perl"
          },
          {
            "include": "#fenced_code_block_r"
          },
          {
            "include": "#fenced_code_block_ruby"
          },
          {
            "include": "#fenced_code_block_php"
          },
          {
            "include": "#fenced_code_block_sql"
          },
          {
            "include": "#fenced_code_block_vs_net"
          },
          {
            "include": "#fenced_code_block_xml"
          },
          {
            "include": "#fenced_code_block_xsl"
          },
          {
            "include": "#fenced_code_block_yaml"
          },
          {
            "include": "#fenced_code_block_dosbatch"
          },
          {
            "include": "#fenced_code_block_clojure"
          },
          {
            "include": "#fenced_code_block_coffee"
          },
          {
            "include": "#fenced_code_block_c"
          },
          {
            "include": "#fenced_code_block_cpp"
          },
          {
            "include": "#fenced_code_block_diff"
          },
          {
            "include": "#fenced_code_block_dockerfile"
          },
          {
            "include": "#fenced_code_block_git_commit"
          },
          {
            "include": "#fenced_code_block_git_rebase"
          },
          {
            "include": "#fenced_code_block_go"
          },
          {
            "include": "#fenced_code_block_groovy"
          },
          {
            "include": "#fenced_code_block_pug"
          },
          {
            "include": "#fenced_code_block_js"
          },
          {
            "include": "#fenced_code_block_js_regexp"
          },
          {
            "include": "#fenced_code_block_json"
          },
          {
            "include": "#fenced_code_block_jsonc"
          },
          {
            "include": "#fenced_code_block_less"
          },
          {
            "include": "#fenced_code_block_objc"
          },
          {
            "include": "#fenced_code_block_swift"
          },
          {
            "include": "#fenced_code_block_scss"
          },
          {
            "include": "#fenced_code_block_perl6"
          },
          {
            "include": "#fenced_code_block_powershell"
          },
          {
            "include": "#fenced_code_block_python"
          },
          {
            "include": "#fenced_code_block_julia"
          },
          {
            "include": "#fenced_code_block_regexp_python"
          },
          {
            "include": "#fenced_code_block_rust"
          },
          {
            "include": "#fenced_code_block_scala"
          },
          {
            "include": "#fenced_code_block_shell"
          },
          {
            "include": "#fenced_code_block_ts"
          },
          {
            "include": "#fenced_code_block_tsx"
          },
          {
            "include": "#fenced_code_block_csharp"
          },
          {
            "include": "#fenced_code_block_fsharp"
          },
          {
            "include": "#fenced_code_block_dart"
          },
          {
            "include": "#fenced_code_block_handlebars"
          },
          {
            "include": "#fenced_code_block_markdown"
          },
          {
            "include": "#fenced_code_block_log"
          },
          {
            "include": "#fenced_code_block_erlang"
          },
          {
            "include": "#fenced_code_block_elixir"
          },
          {
            "include": "#fenced_code_block_latex"
          },
          {
            "include": "#fenced_code_block_bibtex"
          },
          {
            "include": "#fenced_code_block_twig"
          },
          {
            "include": "#fenced_code_block_unknown"
          }
        ]
      },
      "fenced_code_block_basic": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(html|htm|shtml|xhtml|inc|tmpl|tpl)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.html",
            "patterns": [
              {
                "include": "text.html.basic"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_bibtex": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(bibtex)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.bibtex",
            "patterns": [
              {
                "include": "text.bibtex"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_c": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(c|h)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.c",
            "patterns": [
              {
                "include": "source.c"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_clojure": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(clj|cljs|clojure)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.clojure",
            "patterns": [
              {
                "include": "source.clojure"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_coffee": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(coffee|Cakefile|coffee.erb)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.coffee",
            "patterns": [
              {
                "include": "source.coffee"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_cpp": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(cpp|c\\+\\+|cxx)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.cpp source.cpp",
            "patterns": [
              {
                "include": "source.cpp"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_csharp": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(cs|csharp|c#)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.csharp",
            "patterns": [
              {
                "include": "source.cs"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_css": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(css|css.erb)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.css",
            "patterns": [
              {
                "include": "source.css"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_dart": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(dart)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.dart",
            "patterns": [
              {
                "include": "source.dart"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_diff": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(patch|diff|rej)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.diff",
            "patterns": [
              {
                "include": "source.diff"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_dockerfile": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(dockerfile|Dockerfile)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.dockerfile",
            "patterns": [
              {
                "include": "source.dockerfile"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_dosbatch": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(bat|batch)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.dosbatch",
            "patterns": [
              {
                "include": "source.batchfile"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_elixir": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(elixir)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.elixir",
            "patterns": [
              {
                "include": "source.elixir"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_erlang": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(erlang)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.erlang",
            "patterns": [
              {
                "include": "source.erlang"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_fsharp": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(fs|fsharp|f#)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.fsharp",
            "patterns": [
              {
                "include": "source.fsharp"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_git_commit": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(COMMIT_EDITMSG|MERGE_MSG)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.git_commit",
            "patterns": [
              {
                "include": "text.git-commit"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_git_rebase": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(git-rebase-todo)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.git_rebase",
            "patterns": [
              {
                "include": "text.git-rebase"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_go": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(go|golang)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.go",
            "patterns": [
              {
                "include": "source.go"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_groovy": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(groovy|gvy)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.groovy",
            "patterns": [
              {
                "include": "source.groovy"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_handlebars": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(handlebars|hbs)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.handlebars",
            "patterns": [
              {
                "include": "text.html.handlebars"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_ini": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(ini|conf)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.ini",
            "patterns": [
              {
                "include": "source.ini"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_java": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(java|bsh)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.java",
            "patterns": [
              {
                "include": "source.java"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_js": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(js|jsx|javascript|es6|mjs|cjs|dataviewjs|\\{\\.js.+?\\})((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.javascript",
            "patterns": [
              {
                "include": "source.js"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_js_regexp": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(regexp)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.js_regexp",
            "patterns": [
              {
                "include": "source.js.regexp"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_json": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(json|json5|sublime-settings|sublime-menu|sublime-keymap|sublime-mousemap|sublime-theme|sublime-build|sublime-project|sublime-completions)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.json",
            "patterns": [
              {
                "include": "source.json"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_jsonc": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(jsonc)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.jsonc",
            "patterns": [
              {
                "include": "source.json.comments"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_julia": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(julia|\\{\\.julia.+?\\})((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.julia",
            "patterns": [
              {
                "include": "source.julia"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_latex": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(latex|tex)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.latex",
            "patterns": [
              {
                "include": "text.tex.latex"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_less": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(less)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.less",
            "patterns": [
              {
                "include": "source.css.less"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_log": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(log)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.log",
            "patterns": [
              {
                "include": "text.log"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_lua": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(lua)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.lua",
            "patterns": [
              {
                "include": "source.lua"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_makefile": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(Makefile|makefile|GNUmakefile|OCamlMakefile)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.makefile",
            "patterns": [
              {
                "include": "source.makefile"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_markdown": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(markdown|md)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.markdown",
            "patterns": [
              {
                "include": "text.html.markdown"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_objc": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(objectivec|objective-c|mm|objc|obj-c|m|h)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.objc",
            "patterns": [
              {
                "include": "source.objc"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_perl": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(perl|pl|pm|pod|t|PL|psgi|vcl)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.perl",
            "patterns": [
              {
                "include": "source.perl"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_perl6": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(perl6|p6|pl6|pm6|nqp)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.perl6",
            "patterns": [
              {
                "include": "source.perl.6"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_php": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(php|php3|php4|php5|phpt|phtml|aw|ctp)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.php",
            "patterns": [
              {
                "include": "text.html.basic"
              },
              {
                "include": "source.php"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_powershell": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(powershell|ps1|psm1|psd1|pwsh)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.powershell",
            "patterns": [
              {
                "include": "source.powershell"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_pug": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(jade|pug)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.pug",
            "patterns": [
              {
                "include": "text.pug"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_python": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(python|py|py3|rpy|pyw|cpy|SConstruct|Sconstruct|sconstruct|SConscript|gyp|gypi|\\{\\.python.+?\\})((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.python",
            "patterns": [
              {
                "include": "source.python"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_r": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(R|r|s|S|Rprofile|\\{\\.r.+?\\})((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.r",
            "patterns": [
              {
                "include": "source.r"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_regexp_python": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(re)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.regexp_python",
            "patterns": [
              {
                "include": "source.regexp.python"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_ruby": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(ruby|rb|rbx|rjs|Rakefile|rake|cgi|fcgi|gemspec|irbrc|Capfile|ru|prawn|Cheffile|Gemfile|Guardfile|Hobofile|Vagrantfile|Appraisals|Rantfile|Berksfile|Berksfile.lock|Thorfile|Puppetfile)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.ruby",
            "patterns": [
              {
                "include": "source.ruby"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_rust": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(rust|rs|\\{\\.rust.+?\\})((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.rust",
            "patterns": [
              {
                "include": "source.rust"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_scala": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(scala|sbt)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.scala",
            "patterns": [
              {
                "include": "source.scala"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_scss": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(scss)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.scss",
            "patterns": [
              {
                "include": "source.css.scss"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_shell": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(shell|sh|bash|zsh|bashrc|bash_profile|bash_login|profile|bash_logout|.textmate_init|\\{\\.bash.+?\\})((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.shellscript",
            "patterns": [
              {
                "include": "source.shell"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_sql": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(sql|ddl|dml)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.sql",
            "patterns": [
              {
                "include": "source.sql"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_swift": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(swift)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.swift",
            "patterns": [
              {
                "include": "source.swift"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_ts": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(typescript|ts)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.typescript",
            "patterns": [
              {
                "include": "source.ts"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_tsx": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(tsx)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.typescriptreact",
            "patterns": [
              {
                "include": "source.tsx"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_twig": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(twig)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.twig",
            "patterns": [
              {
                "include": "source.twig"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_unknown": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?=([^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown"
      },
      "fenced_code_block_vs_net": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(vb)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.vs_net",
            "patterns": [
              {
                "include": "source.asp.vb.net"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_xml": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(xml|xsd|tld|jsp|pt|cpt|dtml|rss|opml)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.xml",
            "patterns": [
              {
                "include": "text.xml"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_xsl": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(xsl|xslt)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.xsl",
            "patterns": [
              {
                "include": "text.xml.xsl"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "fenced_code_block_yaml": {
        "begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(yaml|yml)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
        "beginCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          },
          "4": {
            "name": "fenced_code.block.language.markdown"
          },
          "5": {
            "name": "fenced_code.block.language.attributes.markdown"
          }
        },
        "end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        "endCaptures": {
          "3": {
            "name": "punctuation.definition.markdown"
          }
        },
        "name": "markup.fenced_code.block.markdown",
        "patterns": [
          {
            "begin": "(^|\\G)(\\s*)(.*)",
            "contentName": "meta.embedded.block.yaml",
            "patterns": [
              {
                "include": "source.yaml"
              }
            ],
            "while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
          }
        ]
      },
      "frontMatter": {
        "applyEndPatternLast": 1,
        "begin": "\\A(?=(-{3,}))",
        "end": "^ {,3}\\1-*[ \\t]*$|^[ \\t]*\\.{3}$",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.end.frontmatter"
          }
        },
        "patterns": [
          {
            "begin": "\\A(-{3,})(.*)$",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.begin.frontmatter"
              },
              "2": {
                "name": "comment.frontmatter"
              }
            },
            "contentName": "meta.embedded.block.frontmatter",
            "patterns": [
              {
                "include": "source.yaml"
              }
            ],
            "while": "^(?! {,3}\\1-*[ \\t]*$|[ \\t]*\\.{3}$)"
          }
        ]
      },
      "heading": {
        "captures": {
          "1": {
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "punctuation.definition.heading.markdown"
                  },
                  "2": {
                    "name": "entity.name.section.markdown",
                    "patterns": [
                      {
                        "include": "#inline"
                      },
                      {
                        "include": "text.html.derivative"
                      }
                    ]
                  },
                  "3": {
                    "name": "punctuation.definition.heading.markdown"
                  }
                },
                "match": "(#{6})\\s+(.*?)(?:\\s+(#+))?\\s*$",
                "name": "heading.6.markdown"
              },
              {
                "captures": {
                  "1": {
                    "name": "punctuation.definition.heading.markdown"
                  },
                  "2": {
                    "name": "entity.name.section.markdown",
                    "patterns": [
                      {
                        "include": "#inline"
                      },
                      {
                        "include": "text.html.derivative"
                      }
                    ]
                  },
                  "3": {
                    "name": "punctuation.definition.heading.markdown"
                  }
                },
                "match": "(#{5})\\s+(.*?)(?:\\s+(#+))?\\s*$",
                "name": "heading.5.markdown"
              },
              {
                "captures": {
                  "1": {
                    "name": "punctuation.definition.heading.markdown"
                  },
                  "2": {
                    "name": "entity.name.section.markdown",
                    "patterns": [
                      {
                        "include": "#inline"
                      },
                      {
                        "include": "text.html.derivative"
                      }
                    ]
                  },
                  "3": {
                    "name": "punctuation.definition.heading.markdown"
                  }
                },
                "match": "(#{4})\\s+(.*?)(?:\\s+(#+))?\\s*$",
                "name": "heading.4.markdown"
              },
              {
                "captures": {
                  "1": {
                    "name": "punctuation.definition.heading.markdown"
                  },
                  "2": {
                    "name": "entity.name.section.markdown",
                    "patterns": [
                      {
                        "include": "#inline"
                      },
                      {
                        "include": "text.html.derivative"
                      }
                    ]
                  },
                  "3": {
                    "name": "punctuation.definition.heading.markdown"
                  }
                },
                "match": "(#{3})\\s+(.*?)(?:\\s+(#+))?\\s*$",
                "name": "heading.3.markdown"
              },
              {
                "captures": {
                  "1": {
                    "name": "punctuation.definition.heading.markdown"
                  },
                  "2": {
                    "name": "entity.name.section.markdown",
                    "patterns": [
                      {
                        "include": "#inline"
                      },
                      {
                        "include": "text.html.derivative"
                      }
                    ]
                  },
                  "3": {
                    "name": "punctuation.definition.heading.markdown"
                  }
                },
                "match": "(#{2})\\s+(.*?)(?:\\s+(#+))?\\s*$",
                "name": "heading.2.markdown"
              },
              {
                "captures": {
                  "1": {
                    "name": "punctuation.definition.heading.markdown"
                  },
                  "2": {
                    "name": "entity.name.section.markdown",
                    "patterns": [
                      {
                        "include": "#inline"
                      },
                      {
                        "include": "text.html.derivative"
                      }
                    ]
                  },
                  "3": {
                    "name": "punctuation.definition.heading.markdown"
                  }
                },
                "match": "(#{1})\\s+(.*?)(?:\\s+(#+))?\\s*$",
                "name": "heading.1.markdown"
              }
            ]
          }
        },
        "match": "(?:^|\\G)[ ]{0,3}(#{1,6}\\s+(.*?)(\\s+#{1,6})?\\s*)$",
        "name": "markup.heading.markdown"
      },
      "heading-setext": {
        "patterns": [
          {
            "match": "^(={3,})(?=[ \\t]*$\\n?)",
            "name": "markup.heading.setext.1.markdown"
          },
          {
            "match": "^(-{3,})(?=[ \\t]*$\\n?)",
            "name": "markup.heading.setext.2.markdown"
          }
        ]
      },
      "html": {
        "patterns": [
          {
            "begin": "(^|\\G)\\s*(<!--)",
            "captures": {
              "1": {
                "name": "punctuation.definition.comment.html"
              },
              "2": {
                "name": "punctuation.definition.comment.html"
              }
            },
            "end": "(-->)",
            "name": "comment.block.html"
          },
          {
            "begin": "(?i)(^|\\G)\\s*(?=<(script|style|pre)(\\s|$|>)(?!.*?</(script|style|pre)>))",
            "end": "(?i)(.*)((</)(script|style|pre)(>))",
            "endCaptures": {
              "1": {
                "patterns": [
                  {
                    "include": "text.html.derivative"
                  }
                ]
              },
              "2": {
                "name": "meta.tag.structure.$4.end.html"
              },
              "3": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "4": {
                "name": "entity.name.tag.html"
              },
              "5": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "patterns": [
              {
                "begin": "(\\s*|$)",
                "patterns": [
                  {
                    "include": "text.html.derivative"
                  }
                ],
                "while": "(?i)^(?!.*</(script|style|pre)>)"
              }
            ]
          },
          {
            "begin": "(?i)(^|\\G)\\s*(?=</?[a-zA-Z]+[^\\s/&gt;]*(\\s|$|/?>))",
            "patterns": [
              {
                "include": "text.html.derivative"
              }
            ],
            "while": "^(?!\\s*$)"
          },
          {
            "begin": "(^|\\G)\\s*(?=(<[a-zA-Z0-9\\-](/?>|\\s.*?>)|</[a-zA-Z0-9\\-]>)\\s*$)",
            "patterns": [
              {
                "include": "text.html.derivative"
              }
            ],
            "while": "^(?!\\s*$)"
          }
        ]
      },
      "image-inline": {
        "captures": {
          "1": {
            "name": "punctuation.definition.link.description.begin.markdown"
          },
          "2": {
            "name": "string.other.link.description.markdown"
          },
          "4": {
            "name": "punctuation.definition.link.description.end.markdown"
          },
          "5": {
            "name": "punctuation.definition.metadata.markdown"
          },
          "7": {
            "name": "punctuation.definition.link.markdown"
          },
          "8": {
            "name": "markup.underline.link.image.markdown"
          },
          "9": {
            "name": "punctuation.definition.link.markdown"
          },
          "10": {
            "name": "markup.underline.link.image.markdown"
          },
          "12": {
            "name": "string.other.link.description.title.markdown"
          },
          "13": {
            "name": "punctuation.definition.string.begin.markdown"
          },
          "14": {
            "name": "punctuation.definition.string.end.markdown"
          },
          "15": {
            "name": "string.other.link.description.title.markdown"
          },
          "16": {
            "name": "punctuation.definition.string.begin.markdown"
          },
          "17": {
            "name": "punctuation.definition.string.end.markdown"
          },
          "18": {
            "name": "string.other.link.description.title.markdown"
          },
          "19": {
            "name": "punctuation.definition.string.begin.markdown"
          },
          "20": {
            "name": "punctuation.definition.string.end.markdown"
          },
          "21": {
            "name": "punctuation.definition.metadata.markdown"
          }
        },
        "match": "(\\!\\[)((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+)(\\])(\\()[ \\t]*((<)((?:\\\\[<>]|[^<>\\n])*)(>)|((?<url>(?>[^\\s()]+)|\\(\\g<url>*\\))*))[ \\t]*(?:((\\().+?(\\)))|((\").+?(\"))|((').+?(')))?\\s*(\\))",
        "name": "meta.image.inline.markdown"
      },
      "image-ref": {
        "captures": {
          "1": {
            "name": "punctuation.definition.link.description.begin.markdown"
          },
          "2": {
            "name": "string.other.link.description.markdown"
          },
          "4": {
            "name": "punctuation.definition.link.description.end.markdown"
          },
          "5": {
            "name": "punctuation.definition.constant.markdown"
          },
          "6": {
            "name": "constant.other.reference.link.markdown"
          },
          "7": {
            "name": "punctuation.definition.constant.markdown"
          }
        },
        "match": "(\\!\\[)((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+)(\\])[ ]?(\\[)(.*?)(\\])",
        "name": "meta.image.reference.markdown"
      },
      "inline": {
        "patterns": [
          {
            "include": "#ampersand"
          },
          {
            "include": "#bracket"
          },
          {
            "include": "#bold"
          },
          {
            "include": "#italic"
          },
          {
            "include": "#raw"
          },
          {
            "include": "#strikethrough"
          },
          {
            "include": "#escape"
          },
          {
            "include": "#image-inline"
          },
          {
            "include": "#image-ref"
          },
          {
            "include": "#link-email"
          },
          {
            "include": "#link-inet"
          },
          {
            "include": "#link-inline"
          },
          {
            "include": "#link-ref"
          },
          {
            "include": "#link-ref-literal"
          },
          {
            "include": "#link-ref-shortcut"
          }
        ]
      },
      "italic": {
        "begin": "(?<open>(\\*(?=\\w)|(?<!\\w)\\*|(?<!\\w)\\b_))(?=\\S)(?=(<[^>]*+>|(?<raw>`+)([^`]|(?!(?<!`)\\k<raw>(?!`))`)*+\\k<raw>|\\\\[\\\\`*_{}\\[\\]()#.!+\\->]?+|\\[((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+\\](([ ]?\\[[^\\]]*+\\])|(\\([ \\t]*+<?(.*?)>?[ \\t]*+((?<title>['\"])(.*?)\\k<title>)?\\))))|\\k<open>\\k<open>|(?!(?<=\\S)\\k<open>).)++(?<=\\S)(?=_\\b|\\*)\\k<open>)",
        "captures": {
          "1": {
            "name": "punctuation.definition.italic.markdown"
          }
        },
        "end": "(?<=\\S)(\\1)((?!\\1)|(?=\\1\\1))",
        "name": "markup.italic.markdown",
        "patterns": [
          {
            "applyEndPatternLast": 1,
            "begin": "(?=<[^>]*?>)",
            "end": "(?<=>)",
            "patterns": [
              {
                "include": "text.html.derivative"
              }
            ]
          },
          {
            "include": "#escape"
          },
          {
            "include": "#ampersand"
          },
          {
            "include": "#bracket"
          },
          {
            "include": "#raw"
          },
          {
            "include": "#bold"
          },
          {
            "include": "#image-inline"
          },
          {
            "include": "#link-inline"
          },
          {
            "include": "#link-inet"
          },
          {
            "include": "#link-email"
          },
          {
            "include": "#image-ref"
          },
          {
            "include": "#link-ref-literal"
          },
          {
            "include": "#link-ref"
          },
          {
            "include": "#link-ref-shortcut"
          },
          {
            "include": "#strikethrough"
          }
        ]
      },
      "link-def": {
        "captures": {
          "1": {
            "name": "punctuation.definition.constant.markdown"
          },
          "2": {
            "name": "constant.other.reference.link.markdown"
          },
          "3": {
            "name": "punctuation.definition.constant.markdown"
          },
          "4": {
            "name": "punctuation.separator.key-value.markdown"
          },
          "5": {
            "name": "punctuation.definition.link.markdown"
          },
          "6": {
            "name": "markup.underline.link.markdown"
          },
          "7": {
            "name": "punctuation.definition.link.markdown"
          },
          "8": {
            "name": "markup.underline.link.markdown"
          },
          "9": {
            "name": "string.other.link.description.title.markdown"
          },
          "10": {
            "name": "punctuation.definition.string.begin.markdown"
          },
          "11": {
            "name": "punctuation.definition.string.end.markdown"
          },
          "12": {
            "name": "string.other.link.description.title.markdown"
          },
          "13": {
            "name": "punctuation.definition.string.begin.markdown"
          },
          "14": {
            "name": "punctuation.definition.string.end.markdown"
          },
          "15": {
            "name": "string.other.link.description.title.markdown"
          },
          "16": {
            "name": "punctuation.definition.string.begin.markdown"
          },
          "17": {
            "name": "punctuation.definition.string.end.markdown"
          }
        },
        "match": "\\s*(\\[)([^]]+?)(\\])(:)[ \\t]*(?:(<)((?:\\\\[<>]|[^<>\\n])*)(>)|(\\S+?))[ \\t]*(?:((\\().+?(\\)))|((\").+?(\"))|((').+?(')))?\\s*$",
        "name": "meta.link.reference.def.markdown"
      },
      "link-email": {
        "captures": {
          "1": {
            "name": "punctuation.definition.link.markdown"
          },
          "2": {
            "name": "markup.underline.link.markdown"
          },
          "4": {
            "name": "punctuation.definition.link.markdown"
          }
        },
        "match": "(<)((?:mailto:)?[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*)(>)",
        "name": "meta.link.email.lt-gt.markdown"
      },
      "link-inet": {
        "captures": {
          "1": {
            "name": "punctuation.definition.link.markdown"
          },
          "2": {
            "name": "markup.underline.link.markdown"
          },
          "3": {
            "name": "punctuation.definition.link.markdown"
          }
        },
        "match": "(<)((?:https?|ftp)://.*?)(>)",
        "name": "meta.link.inet.markdown"
      },
      "link-inline": {
        "captures": {
          "1": {
            "name": "punctuation.definition.link.title.begin.markdown"
          },
          "2": {
            "name": "string.other.link.title.markdown",
            "patterns": [
              {
                "include": "#raw"
              },
              {
                "include": "#bold"
              },
              {
                "include": "#italic"
              },
              {
                "include": "#strikethrough"
              },
              {
                "include": "#image-inline"
              }
            ]
          },
          "4": {
            "name": "punctuation.definition.link.title.end.markdown"
          },
          "5": {
            "name": "punctuation.definition.metadata.markdown"
          },
          "7": {
            "name": "punctuation.definition.link.markdown"
          },
          "8": {
            "name": "markup.underline.link.markdown"
          },
          "9": {
            "name": "punctuation.definition.link.markdown"
          },
          "10": {
            "name": "markup.underline.link.markdown"
          },
          "12": {
            "name": "string.other.link.description.title.markdown"
          },
          "13": {
            "name": "punctuation.definition.string.begin.markdown"
          },
          "14": {
            "name": "punctuation.definition.string.end.markdown"
          },
          "15": {
            "name": "string.other.link.description.title.markdown"
          },
          "16": {
            "name": "punctuation.definition.string.begin.markdown"
          },
          "17": {
            "name": "punctuation.definition.string.end.markdown"
          },
          "18": {
            "name": "string.other.link.description.title.markdown"
          },
          "19": {
            "name": "punctuation.definition.string.begin.markdown"
          },
          "20": {
            "name": "punctuation.definition.string.end.markdown"
          },
          "21": {
            "name": "punctuation.definition.metadata.markdown"
          }
        },
        "match": "(\\[)((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+)(\\])(\\()[ \\t]*((<)((?:\\\\[<>]|[^<>\\n])*)(>)|((?<url>(?>[^\\s()]+)|\\(\\g<url>*\\))*))[ \\t]*(?:((\\()[^()]*(\\)))|((\")[^\"]*(\"))|((')[^']*(')))?\\s*(\\))",
        "name": "meta.link.inline.markdown"
      },
      "link-ref": {
        "captures": {
          "1": {
            "name": "punctuation.definition.link.title.begin.markdown"
          },
          "2": {
            "name": "string.other.link.title.markdown",
            "patterns": [
              {
                "include": "#raw"
              },
              {
                "include": "#bold"
              },
              {
                "include": "#italic"
              },
              {
                "include": "#strikethrough"
              },
              {
                "include": "#image-inline"
              }
            ]
          },
          "4": {
            "name": "punctuation.definition.link.title.end.markdown"
          },
          "5": {
            "name": "punctuation.definition.constant.begin.markdown"
          },
          "6": {
            "name": "constant.other.reference.link.markdown"
          },
          "7": {
            "name": "punctuation.definition.constant.end.markdown"
          }
        },
        "match": "(?<![\\]\\\\])(\\[)((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+)(\\])(\\[)([^\\]]*+)(\\])",
        "name": "meta.link.reference.markdown"
      },
      "link-ref-literal": {
        "captures": {
          "1": {
            "name": "punctuation.definition.link.title.begin.markdown"
          },
          "2": {
            "name": "string.other.link.title.markdown"
          },
          "4": {
            "name": "punctuation.definition.link.title.end.markdown"
          },
          "5": {
            "name": "punctuation.definition.constant.begin.markdown"
          },
          "6": {
            "name": "punctuation.definition.constant.end.markdown"
          }
        },
        "match": "(?<![\\]\\\\])(\\[)((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+)(\\])[ ]?(\\[)(\\])",
        "name": "meta.link.reference.literal.markdown"
      },
      "link-ref-shortcut": {
        "captures": {
          "1": {
            "name": "punctuation.definition.link.title.begin.markdown"
          },
          "2": {
            "name": "string.other.link.title.markdown"
          },
          "3": {
            "name": "punctuation.definition.link.title.end.markdown"
          }
        },
        "match": "(?<![\\]\\\\])(\\[)((?:[^\\s\\[\\]\\\\]|\\\\[\\[\\]])+?)((?<!\\\\)\\])",
        "name": "meta.link.reference.markdown"
      },
      "list_paragraph": {
        "begin": "(^|\\G)(?=\\S)(?![*+->]\\s|[0-9]+\\.\\s)",
        "name": "meta.paragraph.markdown",
        "patterns": [
          {
            "include": "#inline"
          },
          {
            "include": "text.html.derivative"
          },
          {
            "include": "#heading-setext"
          }
        ],
        "while": "(^|\\G)(?!\\s*$|#|[ ]{0,3}([-*_>][ ]{2,}){3,}[ \\t]*$\\n?|[ ]{0,3}[*+->]|[ ]{0,3}[0-9]+\\.)"
      },
      "lists": {
        "patterns": [
          {
            "begin": "(^|\\G)([ ]{0,3})([*+-])([ \\t])",
            "beginCaptures": {
              "3": {
                "name": "punctuation.definition.list.begin.markdown"
              }
            },
            "comment": "Currently does not support un-indented second lines.",
            "name": "markup.list.unnumbered.markdown",
            "patterns": [
              {
                "include": "#block"
              },
              {
                "include": "#list_paragraph"
              }
            ],
            "while": "((^|\\G)([ ]{2,4}|\\t))|(^[ \\t]*$)"
          },
          {
            "begin": "(^|\\G)([ ]{0,3})([0-9]+[\\.\\)])([ \\t])",
            "beginCaptures": {
              "3": {
                "name": "punctuation.definition.list.begin.markdown"
              }
            },
            "name": "markup.list.numbered.markdown",
            "patterns": [
              {
                "include": "#block"
              },
              {
                "include": "#list_paragraph"
              }
            ],
            "while": "((^|\\G)([ ]{2,4}|\\t))|(^[ \\t]*$)"
          }
        ]
      },
      "paragraph": {
        "begin": "(^|\\G)[ ]{0,3}(?=[^ \\t\\n])",
        "name": "meta.paragraph.markdown",
        "patterns": [
          {
            "include": "#inline"
          },
          {
            "include": "text.html.derivative"
          },
          {
            "include": "#heading-setext"
          }
        ],
        "while": "(^|\\G)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=[^ \\t\\n]))"
      },
      "raw": {
        "captures": {
          "1": {
            "name": "punctuation.definition.raw.markdown"
          },
          "3": {
            "name": "punctuation.definition.raw.markdown"
          }
        },
        "match": "(`+)((?:[^`]|(?!(?<!`)\\1(?!`))`)*+)(\\1)",
        "name": "markup.inline.raw.string.markdown"
      },
      "raw_block": {
        "begin": "(^|\\G)([ ]{4}|\\t)",
        "name": "markup.raw.block.markdown",
        "while": "(^|\\G)([ ]{4}|\\t)"
      },
      "separator": {
        "match": "(^|\\G)[ ]{0,3}([\\*\\-\\_])([ ]{0,2}\\2){2,}[ \\t]*$\\n?",
        "name": "meta.separator.markdown"
      },
      "strikethrough": {
        "captures": {
          "1": {
            "name": "punctuation.definition.strikethrough.markdown"
          },
          "2": {
            "patterns": [
              {
                "applyEndPatternLast": 1,
                "begin": "(?=<[^>]*?>)",
                "end": "(?<=>)",
                "patterns": [
                  {
                    "include": "text.html.derivative"
                  }
                ]
              },
              {
                "include": "#escape"
              },
              {
                "include": "#ampersand"
              },
              {
                "include": "#bracket"
              },
              {
                "include": "#raw"
              },
              {
                "include": "#bold"
              },
              {
                "include": "#italic"
              },
              {
                "include": "#image-inline"
              },
              {
                "include": "#link-inline"
              },
              {
                "include": "#link-inet"
              },
              {
                "include": "#link-email"
              },
              {
                "include": "#image-ref"
              },
              {
                "include": "#link-ref-literal"
              },
              {
                "include": "#link-ref"
              },
              {
                "include": "#link-ref-shortcut"
              }
            ]
          },
          "3": {
            "name": "punctuation.definition.strikethrough.markdown"
          }
        },
        "match": "(?<!\\\\)(~{2,})((?:[^~]|(?!(?<![~\\\\])\\1(?!~))~)*+)(\\1)",
        "name": "markup.strikethrough.markdown"
      },
      "table": {
        "begin": "(^|\\G)(\\|)(?=[^|].+\\|\\s*$)",
        "beginCaptures": {
          "2": {
            "name": "punctuation.definition.table.markdown"
          }
        },
        "name": "markup.table.markdown",
        "patterns": [
          {
            "match": "\\|",
            "name": "punctuation.definition.table.markdown"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.separator.table.markdown"
              }
            },
            "match": "(?<=\\|)\\s*(:?-+:?)\\s*(?=\\|)"
          },
          {
            "captures": {
              "1": {
                "patterns": [
                  {
                    "include": "#inline"
                  }
                ]
              }
            },
            "match": "(?<=\\|)\\s*(?=\\S)((\\\\\\||[^|])+)(?<=\\S)\\s*(?=\\|)"
          }
        ],
        "while": "(^|\\G)(?=\\|)"
      }
    },
    "scopeName": "text.html.markdown",
    "embeddedLangs": [],
    "aliases": [
      "md"
    ],
    "embeddedLangsLazy": [
      "css",
      "html",
      "ini",
      "java",
      "lua",
      "make",
      "perl",
      "r",
      "ruby",
      "php",
      "sql",
      "vb",
      "xml",
      "xsl",
      "yaml",
      "bat",
      "clojure",
      "coffee",
      "c",
      "cpp",
      "diff",
      "docker",
      "git-commit",
      "git-rebase",
      "go",
      "groovy",
      "pug",
      "javascript",
      "json",
      "jsonc",
      "less",
      "objective-c",
      "swift",
      "scss",
      "raku",
      "powershell",
      "python",
      "julia",
      "regexp",
      "rust",
      "scala",
      "shellscript",
      "typescript",
      "tsx",
      "csharp",
      "fsharp",
      "dart",
      "handlebars",
      "log",
      "erlang",
      "elixir",
      "latex",
      "bibtex",
      "html-derivative"
    ]
  },
  {
    "displayName": "F#",
    "name": "fsharp",
    "patterns": [
      {
        "include": "#compiler_directives"
      },
      {
        "include": "#comments"
      },
      {
        "include": "#constants"
      },
      {
        "include": "#strings"
      },
      {
        "include": "#chars"
      },
      {
        "include": "#double_tick"
      },
      {
        "include": "#definition"
      },
      {
        "include": "#abstract_definition"
      },
      {
        "include": "#attributes"
      },
      {
        "include": "#modules"
      },
      {
        "include": "#anonymous_functions"
      },
      {
        "include": "#du_declaration"
      },
      {
        "include": "#record_declaration"
      },
      {
        "include": "#records"
      },
      {
        "include": "#strp_inlined"
      },
      {
        "include": "#keywords"
      },
      {
        "include": "#cexprs"
      },
      {
        "include": "#text"
      }
    ],
    "repository": {
      "abstract_definition": {
        "begin": "\\b(static\\s+)?(abstract)\\s+(member)?(\\s+\\[\\<.*\\>\\])?\\s*([_[:alpha:]0-9,\\._`\\s]+)(<)?",
        "beginCaptures": {
          "1": {
            "name": "keyword.fsharp"
          },
          "2": {
            "name": "keyword.fsharp"
          },
          "3": {
            "name": "keyword.fsharp"
          },
          "4": {
            "name": "support.function.attribute.fsharp"
          },
          "5": {
            "name": "keyword.symbol.fsharp"
          }
        },
        "end": "\\s*(with)\\b|=|$",
        "endCaptures": {
          "1": {
            "name": "keyword.fsharp"
          }
        },
        "name": "abstract.definition.fsharp",
        "patterns": [
          {
            "include": "#comments"
          },
          {
            "include": "#common_declaration"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              },
              "2": {
                "name": "variable.parameter.fsharp"
              },
              "3": {
                "name": "keyword.symbol.fsharp"
              },
              "4": {
                "name": "entity.name.type.fsharp"
              }
            },
            "match": "(\\?{0,1})([[:alpha:]0-9'`^._ ]+)\\s*(:)((?!with\\b)\\b([\\w0-9'`^._ ]+)){0,1}"
          },
          {
            "captures": {
              "1": {
                "name": "entity.name.type.fsharp"
              }
            },
            "comments": "Here we need the \\w modifier in order to check that the words isn't blacklisted",
            "match": "(?!with|get|set\\b)\\s*([\\w0-9'`^._]+)"
          },
          {
            "include": "#keywords"
          }
        ]
      },
      "anonymous_functions": {
        "patterns": [
          {
            "begin": "\\b(fun)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.fsharp"
              }
            },
            "end": "(->)",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.arrow.fsharp"
              }
            },
            "name": "function.anonymous",
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "begin": "(\\()",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.symbol.fsharp"
                  }
                },
                "end": "\\s*(?=(->))",
                "endCaptures": {
                  "1": {
                    "name": "keyword.symbol.arrow.fsharp"
                  }
                },
                "patterns": [
                  {
                    "include": "#member_declaration"
                  }
                ]
              },
              {
                "include": "#variables"
              }
            ]
          }
        ]
      },
      "anonymous_record_declaration": {
        "begin": "(\\{\\|)",
        "beginCaptures": {
          "1": {
            "name": "keyword.symbol.fsharp"
          }
        },
        "end": "(\\|\\})",
        "endCaptures": {
          "1": {
            "name": "keyword.symbol.fsharp"
          }
        },
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "match": "[[:alpha:]0-9'`^_ ]+(:)"
          },
          {
            "captures": {
              "1": {
                "name": "entity.name.type.fsharp"
              }
            },
            "match": "([[:alpha:]0-9'`^_ ]+)"
          },
          {
            "include": "#anonymous_record_declaration"
          },
          {
            "include": "#keywords"
          }
        ]
      },
      "attributes": {
        "patterns": [
          {
            "begin": "\\[\\<",
            "end": "\\>\\]|\\]",
            "name": "support.function.attribute.fsharp",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          }
        ]
      },
      "cexprs": {
        "patterns": [
          {
            "captures": {
              "0": {
                "name": "keyword.fsharp"
              }
            },
            "match": "\\b(async|seq|promise|task|maybe|asyncMaybe|controller|scope|application|pipeline)(?=\\s*\\{)",
            "name": "cexpr.fsharp"
          }
        ]
      },
      "chars": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "string.quoted.single.fsharp"
              }
            },
            "match": "('\\\\?.')",
            "name": "char.fsharp"
          }
        ]
      },
      "comments": {
        "patterns": [
          {
            "beginCaptures": {
              "1": {
                "name": "comment.block.fsharp"
              }
            },
            "match": "(\\(\\*{3}.*\\*{3}\\))",
            "name": "comment.literate.command.fsharp"
          },
          {
            "begin": "^\\s*(\\(\\*\\*(?!\\)))((?!\\*\\)).)*$",
            "beginCaptures": {
              "1": {
                "name": "comment.block.fsharp"
              }
            },
            "endCaptures": {
              "1": {
                "name": "comment.block.fsharp"
              }
            },
            "name": "comment.block.markdown.fsharp",
            "patterns": [
              {
                "include": "text.html.markdown"
              }
            ],
            "while": "^(?!\\s*(\\*)+\\)\\s*$)"
          },
          {
            "begin": "(\\(\\*(?!\\)))",
            "beginCaptures": {
              "1": {
                "name": "comment.block.fsharp"
              }
            },
            "end": "(\\*+\\))",
            "endCaptures": {
              "1": {
                "name": "comment.block.fsharp"
              }
            },
            "name": "comment.block.fsharp",
            "patterns": [
              {
                "comments": "Capture // when inside of (* *) like that the rule which capture comments starting by // is not trigger. See https://github.com/ionide/ionide-fsgrammar/issues/155",
                "match": "//",
                "name": "fast-capture.comment.line.double-slash.fsharp"
              },
              {
                "comments": "Capture (*) when inside of (* *) so that it doesn't prematurely end the comment block.",
                "match": "\\(\\*\\)",
                "name": "fast-capture.comment.line.mul-operator.fsharp"
              },
              {
                "include": "#comments"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "comment.block.fsharp"
              }
            },
            "match": "((?<!\\()(\\*)+\\))",
            "name": "comment.block.markdown.fsharp.end"
          },
          {
            "begin": "(?<![!%&+-.<=>?@^|/])///(?!/)",
            "name": "comment.line.markdown.fsharp",
            "patterns": [
              {
                "include": "text.html.markdown"
              }
            ],
            "while": "(?<![!%&+-.<=>?@^|/])///(?!/)"
          },
          {
            "match": "(?<![!%&+-.<=>?@^|/])//(.*$)",
            "name": "comment.line.double-slash.fsharp"
          }
        ]
      },
      "common_binding_definition": {
        "patterns": [
          {
            "include": "#comments"
          },
          {
            "include": "#attributes"
          },
          {
            "begin": "(:)\\s*(\\()\\s*(static member|member)",
            "beginCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              },
              "2": {
                "name": "keyword.symbol.fsharp"
              },
              "3": {
                "name": "keyword.fsharp"
              }
            },
            "comments": "SRTP syntax support",
            "end": "(\\))\\s*((?=,)|(?=\\=))",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "entity.name.type.fsharp"
                  }
                },
                "match": "(\\^[[:alpha:]0-9'._]+)"
              },
              {
                "include": "#variables"
              },
              {
                "include": "#keywords"
              }
            ]
          },
          {
            "begin": "(:)\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              },
              "2": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "end": "(\\)\\s*(([?[:alpha:]0-9'`^._ ]*)))",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              },
              "2": {
                "name": "entity.name.type.fsharp"
              }
            },
            "patterns": [
              {
                "include": "#tuple_signature"
              }
            ]
          },
          {
            "begin": "(:)\\s*(\\^[[:alpha:]0-9'._]+)\\s*(when)",
            "beginCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              },
              "2": {
                "name": "entity.name.type.fsharp"
              },
              "3": {
                "name": "keyword.fsharp"
              }
            },
            "end": "(?=:)",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "patterns": [
              {
                "match": "\\b(and|when|or)\\b",
                "name": "keyword.fsharp"
              },
              {
                "captures": {
                  "1": {
                    "name": "entity.name.type.fsharp"
                  }
                },
                "comment": "Because we first capture the keywords, we can capture what looks like a word and assume it's an entity definition",
                "match": "([[:alpha:]0-9'^._]+)"
              },
              {
                "match": "(\\(|\\))",
                "name": "keyword.symbol.fsharp"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              },
              "2": {
                "name": "entity.name.type.fsharp"
              }
            },
            "match": "(:)\\s*([?[:alpha:]0-9'`^._ ]+)"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.symbol.arrow.fsharp"
              },
              "2": {
                "name": "keyword.symbol.fsharp"
              },
              "3": {
                "name": "entity.name.type.fsharp"
              }
            },
            "match": "(->)\\s*(\\()?\\s*([?[:alpha:]0-9'`^._ ]+)*"
          },
          {
            "begin": "(\\*)\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              },
              "2": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "end": "(\\)\\s*(([?[:alpha:]0-9'`^._ ]+))*)",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              },
              "2": {
                "name": "entity.name.type.fsharp"
              }
            },
            "patterns": [
              {
                "include": "#tuple_signature"
              }
            ]
          },
          {
            "begin": "(\\*)(\\s*([?[:alpha:]0-9'`^._ ]+))*",
            "beginCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              },
              "2": {
                "name": "entity.name.type.fsharp"
              }
            },
            "end": "(?==)|(?=\\))",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "patterns": [
              {
                "include": "#tuple_signature"
              }
            ]
          },
          {
            "begin": "(<+(?![[:space:]]*\\)))",
            "beginCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "beginComment": "The group (?![[:space:]]*\\) is for protection against overload operator. static member (<)",
            "end": "((?<!:)>|\\))",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "endComment": "The group (?<!:) prevent us from stopping on :> when using SRTP synthax",
            "patterns": [
              {
                "include": "#generic_declaration"
              }
            ]
          },
          {
            "include": "#anonymous_record_declaration"
          },
          {
            "begin": "({)",
            "beginCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "end": "(})",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "patterns": [
              {
                "include": "#record_signature"
              }
            ]
          },
          {
            "include": "#definition"
          },
          {
            "include": "#variables"
          },
          {
            "include": "#keywords"
          }
        ]
      },
      "common_declaration": {
        "patterns": [
          {
            "begin": "\\s*(->)\\s*([[:alpha:]0-9'`^._ ]+)(<)",
            "beginCaptures": {
              "1": {
                "name": "keyword.symbol.arrow.fsharp"
              },
              "2": {
                "name": "entity.name.type.fsharp"
              },
              "3": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "end": "(>)",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "entity.name.type.fsharp"
                  }
                },
                "match": "([[:alpha:]0-9'`^._ ]+)"
              },
              {
                "include": "#keywords"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "keyword.symbol.arrow.fsharp"
              },
              "2": {
                "name": "entity.name.type.fsharp"
              }
            },
            "match": "\\s*(->)\\s*(?!with|get|set\\b)\\b([\\w0-9'`^._]+)"
          },
          {
            "include": "#anonymous_record_declaration"
          },
          {
            "begin": "(\\?{0,1})([[:alpha:]0-9'`^._ ]+)\\s*(:)(\\s*([?[:alpha:]0-9'`^._ ]+)(<))",
            "beginCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              },
              "2": {
                "name": "variable.parameter.fsharp"
              },
              "3": {
                "name": "keyword.symbol.fsharp"
              },
              "4": {
                "name": "keyword.symbol.fsharp"
              },
              "5": {
                "name": "entity.name.type.fsharp"
              }
            },
            "end": "(>)",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "entity.name.type.fsharp"
                  }
                },
                "match": "([[:alpha:]0-9'`^._ ]+)"
              },
              {
                "include": "#keywords"
              }
            ]
          }
        ]
      },
      "compiler_directives": {
        "patterns": [
          {
            "captures": {},
            "match": "\\s?(#if|#elif|#elseif|#else|#endif|#light|#nowarn)",
            "name": "keyword.control.directive.fsharp"
          }
        ]
      },
      "constants": {
        "patterns": [
          {
            "match": "\\(\\)",
            "name": "keyword.symbol.fsharp"
          },
          {
            "match": "\\b-?[0-9][0-9_]*((\\.(?!\\.)([0-9][0-9_]*([eE][+-]??[0-9][0-9_]*)?)?)|([eE][+-]??[0-9][0-9_]*))",
            "name": "constant.numeric.float.fsharp"
          },
          {
            "match": "\\b(-?((0(x|X)[0-9a-fA-F][0-9a-fA-F_]*)|(0(o|O)[0-7][0-7_]*)|(0(b|B)[01][01_]*)|([0-9][0-9_]*)))",
            "name": "constant.numeric.integer.nativeint.fsharp"
          },
          {
            "match": "\\b(true|false)\\b",
            "name": "constant.language.boolean.fsharp"
          },
          {
            "match": "\\b(null|void)\\b",
            "name": "constant.other.fsharp"
          }
        ]
      },
      "definition": {
        "patterns": [
          {
            "begin": "\\b(let mutable|static let mutable|static let|let inline|let|and|member val|member inline|static member inline|static member val|static member|default|member|override|let!)(\\s+rec|mutable)?(\\s+\\[\\<.*\\>\\])?\\s*(private|internal|public)?\\s+(\\[[^-=]*\\]|[_[:alpha:]]([_[:alpha:]0-9\\._]+)*|``[_[:alpha:]]([_[:alpha:]0-9\\._`\\s]+|(?<=,)\\s)*)?",
            "beginCaptures": {
              "1": {
                "name": "keyword.fsharp"
              },
              "2": {
                "name": "keyword.fsharp"
              },
              "3": {
                "name": "support.function.attribute.fsharp"
              },
              "4": {
                "name": "storage.modifier.fsharp"
              },
              "5": {
                "name": "variable.fsharp"
              }
            },
            "end": "\\s*((with\\b)|(=|\\n+=|(?<=\\=)))",
            "endCaptures": {
              "2": {
                "name": "keyword.fsharp"
              },
              "3": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "name": "binding.fsharp",
            "patterns": [
              {
                "include": "#common_binding_definition"
              }
            ]
          },
          {
            "begin": "\\b(use|use!|and|and!)\\s+(\\[[^-=]*\\]|[_[:alpha:]]([_[:alpha:]0-9\\._]+)*|``[_[:alpha:]]([_[:alpha:]0-9\\._`\\s]+|(?<=,)\\s)*)?",
            "beginCaptures": {
              "1": {
                "name": "keyword.fsharp"
              }
            },
            "end": "\\s*(=)",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "name": "binding.fsharp",
            "patterns": [
              {
                "include": "#common_binding_definition"
              }
            ]
          },
          {
            "begin": "(?<=with|and)\\s*\\b((get|set)\\s*(?=\\())(\\[[^-=]*\\]|[_[:alpha:]]([_[:alpha:]0-9\\._]+)*|``[_[:alpha:]]([_[:alpha:]0-9\\._`\\s]+|(?<=,)\\s)*)?",
            "beginCaptures": {
              "4": {
                "name": "variable.fsharp"
              }
            },
            "end": "\\s*(=|\\n+=|(?<=\\=))",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "name": "binding.fsharp",
            "patterns": [
              {
                "include": "#common_binding_definition"
              }
            ]
          },
          {
            "begin": "\\b(static val mutable|val mutable|val inline|val)(\\s+rec|mutable)?(\\s+\\[\\<.*\\>\\])?\\s*(private|internal|public)?\\s+(\\[[^-=]*\\]|[_[:alpha:]]([_[:alpha:]0-9,\\._]+)*|``[_[:alpha:]]([_[:alpha:]0-9,\\._`\\s]+|(?<=,)\\s)*)?",
            "beginCaptures": {
              "1": {
                "name": "keyword.fsharp"
              },
              "2": {
                "name": "keyword.fsharp"
              },
              "3": {
                "name": "support.function.attribute.fsharp"
              },
              "4": {
                "name": "storage.modifier.fsharp"
              },
              "5": {
                "name": "variable.fsharp"
              }
            },
            "end": "\\n$",
            "name": "binding.fsharp",
            "patterns": [
              {
                "include": "#common_binding_definition"
              }
            ]
          },
          {
            "begin": "\\b(new)\\b\\s+(\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.fsharp"
              },
              "2": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "end": "(\\))",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "name": "binding.fsharp",
            "patterns": [
              {
                "include": "#common_binding_definition"
              }
            ]
          }
        ]
      },
      "double_tick": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "string.quoted.single.fsharp"
              },
              "2": {
                "name": "variable.other.binding.fsharp"
              },
              "3": {
                "name": "string.quoted.single.fsharp"
              }
            },
            "match": "(``)([^`]*)(``)",
            "name": "variable.other.binding.fsharp"
          }
        ]
      },
      "du_declaration": {
        "patterns": [
          {
            "begin": "\\b(of)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.fsharp"
              }
            },
            "end": "$|(\\|)",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "name": "du_declaration.fsharp",
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "captures": {
                  "1": {
                    "name": "variable.parameter.fsharp"
                  },
                  "2": {
                    "name": "keyword.symbol.fsharp"
                  },
                  "3": {
                    "name": "entity.name.type.fsharp"
                  }
                },
                "match": "([[:alpha:]0-9'`<>^._]+|``[[:alpha:]0-9' <>^._]+``)\\s*(:)\\s*([[:alpha:]0-9'`<>^._]+|``[[:alpha:]0-9' <>^._]+``)"
              },
              {
                "captures": {
                  "1": {
                    "name": "entity.name.type.fsharp"
                  }
                },
                "match": "(``([[:alpha:]0-9'^._ ]+)``|[[:alpha:]0-9'`^._]+)"
              },
              {
                "include": "#anonymous_record_declaration"
              },
              {
                "include": "#keywords"
              }
            ]
          }
        ]
      },
      "generic_declaration": {
        "patterns": [
          {
            "begin": "(:)\\s*(\\()\\s*(static member|member)",
            "beginCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              },
              "2": {
                "name": "keyword.symbol.fsharp"
              },
              "3": {
                "name": "keyword.fsharp"
              }
            },
            "comments": "SRTP syntax support",
            "end": "(\\))",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "patterns": [
              {
                "begin": "(\\()",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.symbol.fsharp"
                  }
                },
                "end": "(\\))",
                "endCaptures": {
                  "1": {
                    "name": "keyword.symbol.fsharp"
                  }
                },
                "patterns": [
                  {
                    "include": "#member_declaration"
                  }
                ]
              },
              {
                "captures": {
                  "1": {
                    "name": "entity.name.type.fsharp"
                  }
                },
                "match": "(('|\\^)[[:alpha:]0-9'._]+)"
              },
              {
                "include": "#variables"
              },
              {
                "include": "#keywords"
              }
            ]
          },
          {
            "match": "\\b(private|to|public|internal|function|yield!|yield|class|exception|match|delegate|of|new|in|as|if|then|else|elif|for|begin|end|inherit|do|let\\!|return\\!|return|interface|with|abstract|enum|member|try|finally|and|when|or|use|use\\!|struct|while|mutable|assert|base|done|downcast|downto|extern|fixed|global|lazy|upcast|not)(?!')\\b",
            "name": "keyword.fsharp"
          },
          {
            "match": ":",
            "name": "keyword.symbol.fsharp"
          },
          {
            "include": "#constants"
          },
          {
            "captures": {
              "1": {
                "name": "entity.name.type.fsharp"
              }
            },
            "match": "(('|\\^)[[:alpha:]0-9'._]+)"
          },
          {
            "begin": "(<)",
            "beginCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "end": "(>)",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "entity.name.type.fsharp"
                  }
                },
                "match": "(('|\\^)[[:alpha:]0-9'._]+)"
              },
              {
                "include": "#tuple_signature"
              },
              {
                "include": "#generic_declaration"
              }
            ]
          },
          {
            "begin": "(\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "end": "(\\))",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "entity.name.type.fsharp"
                  }
                },
                "match": "(([?[:alpha:]0-9'`^._ ]+))+"
              },
              {
                "include": "#tuple_signature"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "entity.name.type.fsharp"
              }
            },
            "comments": "Here we need the \\w modifier in order to check that the words are allowed",
            "match": "(?!when|and|or\\b)\\b([\\w0-9'`^._]+)"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "comments": "Prevent captures of `|>` as a keyword when defining custom operator like `<|>`",
            "match": "(\\|)"
          },
          {
            "include": "#keywords"
          }
        ]
      },
      "keywords": {
        "patterns": [
          {
            "match": "\\b(private|public|internal)\\b",
            "name": "storage.modifier"
          },
          {
            "match": "\\b(private|to|public|internal|function|class|exception|delegate|of|new|as|begin|end|inherit|let!|interface|abstract|enum|member|and|when|or|use|use\\!|struct|mutable|assert|base|done|downcast|downto|extern|fixed|global|lazy|upcast|not)(?!')\\b",
            "name": "keyword.fsharp"
          },
          {
            "match": "\\b(match|yield|yield!|with|if|then|else|elif|for|in|return!|return|try|finally|while|do)(?!')\\b",
            "name": "keyword.control"
          },
          {
            "match": "(\\->|\\<\\-)",
            "name": "keyword.symbol.arrow.fsharp"
          },
          {
            "match": "[.?]*(&&&|\\|\\|\\||\\^\\^\\^|~~~|~\\+|~\\-|<<<|>>>|\\|>|:>|:\\?>|:|\\[|\\]|\\;|<>|=|@|\\|\\||&&|&|%|{|}|\\||_|\\.\\.|\\,|\\+|\\-|\\*|\\/|\\^|\\!|\\>|\\>\\=|\\>\\>|\\<|\\<\\=|\\(|\\)|\\<\\<)[.?]*",
            "name": "keyword.symbol.fsharp"
          }
        ]
      },
      "member_declaration": {
        "patterns": [
          {
            "include": "#comments"
          },
          {
            "include": "#common_declaration"
          },
          {
            "begin": "(:)\\s*(\\()\\s*(static member|member)",
            "beginCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              },
              "2": {
                "name": "keyword.symbol.fsharp"
              },
              "3": {
                "name": "keyword.fsharp"
              }
            },
            "comments": "SRTP syntax support",
            "end": "(\\))\\s*((?=,)|(?=\\=))",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "patterns": [
              {
                "begin": "(\\()",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.symbol.fsharp"
                  }
                },
                "end": "(\\))",
                "endCaptures": {
                  "1": {
                    "name": "keyword.symbol.fsharp"
                  }
                },
                "patterns": [
                  {
                    "include": "#member_declaration"
                  }
                ]
              },
              {
                "captures": {
                  "1": {
                    "name": "entity.name.type.fsharp"
                  }
                },
                "match": "(\\^[[:alpha:]0-9'._]+)"
              },
              {
                "include": "#variables"
              },
              {
                "include": "#keywords"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "entity.name.type.fsharp"
              }
            },
            "match": "(\\^[[:alpha:]0-9'._]+)"
          },
          {
            "match": "\\b(and|when|or)\\b",
            "name": "keyword.fsharp"
          },
          {
            "match": "(\\(|\\))",
            "name": "keyword.symbol.fsharp"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              },
              "2": {
                "name": "variable.parameter.fsharp"
              },
              "3": {
                "name": "keyword.symbol.fsharp"
              },
              "4": {
                "name": "entity.name.type.fsharp"
              }
            },
            "match": "(\\?{0,1})([[:alpha:]0-9'`^._]+|``[[:alpha:]0-9'`^:,._ ]+``)\\s*(:{0,1})(\\s*([?[:alpha:]0-9'`<>._ ]+)){0,1}"
          },
          {
            "include": "#keywords"
          }
        ]
      },
      "modules": {
        "patterns": [
          {
            "begin": "\\b(namespace global)|\\b(namespace|module)\\s*(public|internal|private|rec)?\\s+([[:alpha:]|``][[:alpha:]0-9'_. ]*)",
            "beginCaptures": {
              "1": {
                "name": "keyword.fsharp"
              },
              "2": {
                "name": "keyword.fsharp"
              },
              "3": {
                "name": "storage.modifier.fsharp"
              },
              "4": {
                "name": "entity.name.section.fsharp"
              }
            },
            "end": "(\\s?=|\\s|$)",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "name": "entity.name.section.fsharp",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "punctuation.separator.namespace-reference.fsharp"
                  },
                  "2": {
                    "name": "entity.name.section.fsharp"
                  }
                },
                "match": "(\\.)([A-Z][[:alpha:]0-9'_]*)",
                "name": "entity.name.section.fsharp"
              }
            ]
          },
          {
            "begin": "\\b(open type|open)\\s+([[:alpha:]|``][[:alpha:]0-9'_]*)(?=(\\.[A-Z][[:alpha:]0-9_]*)*)",
            "beginCaptures": {
              "1": {
                "name": "keyword.fsharp"
              },
              "2": {
                "name": "entity.name.section.fsharp"
              }
            },
            "end": "(\\s|$)",
            "name": "namespace.open.fsharp",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "punctuation.separator.namespace-reference.fsharp"
                  },
                  "2": {
                    "name": "entity.name.section.fsharp"
                  }
                },
                "match": "(\\.)([[:alpha:]][[:alpha:]0-9'_]*)",
                "name": "entity.name.section.fsharp"
              },
              {
                "include": "#comments"
              }
            ]
          },
          {
            "begin": "^\\s*(module)\\s+([A-Z][[:alpha:]0-9'_]*)\\s*(=)\\s*([A-Z][[:alpha:]0-9'_]*)",
            "beginCaptures": {
              "1": {
                "name": "keyword.fsharp"
              },
              "2": {
                "name": "entity.name.type.namespace.fsharp"
              },
              "3": {
                "name": "keyword.symbol.fsharp"
              },
              "4": {
                "name": "entity.name.section.fsharp"
              }
            },
            "end": "(\\s|$)",
            "name": "namespace.alias.fsharp",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "punctuation.separator.namespace-reference.fsharp"
                  },
                  "2": {
                    "name": "entity.name.section.fsharp"
                  }
                },
                "match": "(\\.)([A-Z][[:alpha:]0-9'_]*)",
                "name": "entity.name.section.fsharp"
              }
            ]
          }
        ]
      },
      "record_declaration": {
        "patterns": [
          {
            "begin": "(\\{)",
            "beginCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "end": "(?<=\\})",
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "begin": "(((mutable)\\s[[:alpha:]]+)|[[:alpha:]0-9'`<>^._]*)\\s*((?<!:):(?!:))\\s*",
                "beginCaptures": {
                  "3": {
                    "name": "keyword.fsharp"
                  },
                  "4": {
                    "name": "keyword.symbol.fsharp"
                  }
                },
                "end": "$|(;|\\})",
                "endCaptures": {
                  "1": {
                    "name": "keyword.symbol.fsharp"
                  }
                },
                "patterns": [
                  {
                    "include": "#comments"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "entity.name.type.fsharp"
                      }
                    },
                    "match": "([[:alpha:]0-9'`^_ ]+)"
                  },
                  {
                    "include": "#keywords"
                  }
                ]
              },
              {
                "include": "#compiler_directives"
              },
              {
                "include": "#constants"
              },
              {
                "include": "#strings"
              },
              {
                "include": "#chars"
              },
              {
                "include": "#double_tick"
              },
              {
                "include": "#definition"
              },
              {
                "include": "#attributes"
              },
              {
                "include": "#anonymous_functions"
              },
              {
                "include": "#keywords"
              },
              {
                "include": "#cexprs"
              },
              {
                "include": "#text"
              }
            ]
          }
        ]
      },
      "record_signature": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              },
              "2": {
                "name": "variable.parameter.fsharp"
              }
            },
            "match": "[[:alpha:]0-9'`^_ ]+(=)([[:alpha:]0-9'`^_ ]+)"
          },
          {
            "begin": "({)",
            "beginCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "end": "(})",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "keyword.symbol.fsharp"
                  },
                  "2": {
                    "name": "variable.parameter.fsharp"
                  }
                },
                "match": "[[:alpha:]0-9'`^_ ]+(=)([[:alpha:]0-9'`^_ ]+)"
              },
              {
                "include": "#record_signature"
              }
            ]
          },
          {
            "include": "#keywords"
          }
        ]
      },
      "records": {
        "patterns": [
          {
            "begin": "\\b(type)[\\s]+(private|internal|public)?\\s*",
            "beginCaptures": {
              "1": {
                "name": "keyword.fsharp"
              },
              "2": {
                "name": "storage.modifier.fsharp"
              }
            },
            "end": "\\s*((with)|((as)\\s+([[:alpha:]0-9']+))|(=)|[\\n=]|(\\(\\)))",
            "endCaptures": {
              "2": {
                "name": "keyword.fsharp"
              },
              "3": {
                "name": "keyword.fsharp"
              },
              "4": {
                "name": "keyword.fsharp"
              },
              "5": {
                "name": "variable.parameter.fsharp"
              },
              "6": {
                "name": "keyword.symbol.fsharp"
              },
              "7": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "name": "record.fsharp",
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "include": "#attributes"
              },
              {
                "captures": {
                  "1": {
                    "name": "entity.name.type.fsharp"
                  }
                },
                "match": "([[:alpha:]0-9'^._]+|``[[:alpha:]0-9'`^:,._ ]+``)"
              },
              {
                "begin": "(<)",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.symbol.fsharp"
                  }
                },
                "end": "((?<!:)>)",
                "endCaptures": {
                  "1": {
                    "name": "keyword.symbol.fsharp"
                  }
                },
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "entity.name.type.fsharp"
                      }
                    },
                    "match": "(('|\\^)``[[:alpha:]0-9`^:,._ ]+``|('|\\^)[[:alpha:]0-9`^:._]+)"
                  },
                  {
                    "match": "\\b(interface|with|abstract|and|when|or|not|struct|equality|comparison|unmanaged|delegate|enum)\\b",
                    "name": "keyword.fsharp"
                  },
                  {
                    "begin": "(\\()",
                    "beginCaptures": {
                      "1": {
                        "name": "keyword.symbol.fsharp"
                      }
                    },
                    "end": "(\\))",
                    "endCaptures": {
                      "1": {
                        "name": "keyword.symbol.fsharp"
                      }
                    },
                    "patterns": [
                      {
                        "captures": {
                          "1": {
                            "name": "keyword.fsharp"
                          }
                        },
                        "match": "(static member|member|new)"
                      },
                      {
                        "include": "#common_binding_definition"
                      }
                    ]
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "entity.name.type.fsharp"
                      }
                    },
                    "comments": "Here we need the \\w modifier in order to check that the words isn't blacklisted",
                    "match": "([\\w0-9'`^._]+)"
                  },
                  {
                    "include": "#keywords"
                  }
                ]
              },
              {
                "captures": {
                  "1": {
                    "name": "storage.modifier.fsharp"
                  }
                },
                "match": "\\s*(private|internal|public)"
              },
              {
                "begin": "(\\()",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.symbol.fsharp"
                  }
                },
                "end": "\\s*(?=(=)|[\\n=]|(\\(\\))|(as))",
                "endCaptures": {
                  "1": {
                    "name": "keyword.symbol.fsharp"
                  }
                },
                "patterns": [
                  {
                    "include": "#member_declaration"
                  }
                ]
              },
              {
                "include": "#keywords"
              }
            ]
          }
        ]
      },
      "string_formatter": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "keyword.format.specifier.fsharp"
              }
            },
            "match": "(%0?-?(\\d+)?((a|t)|(\\.\\d+)?(f|F|e|E|g|G|M)|(b|c|s|d|i|x|X|o|u)|(s|b|O)|(\\+?A)))",
            "name": "entity.name.type.format.specifier.fsharp"
          }
        ]
      },
      "strings": {
        "patterns": [
          {
            "begin": "(?=[^\\\\])(@\")",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.string.begin.fsharp"
              }
            },
            "end": "(\")(?!\")",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.string.end.fsharp"
              }
            },
            "name": "string.quoted.literal.fsharp",
            "patterns": [
              {
                "match": "\"(\")",
                "name": "constant.character.string.escape.fsharp"
              }
            ]
          },
          {
            "begin": "(?=[^\\\\])(\"\"\")",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.string.begin.fsharp"
              }
            },
            "end": "(\"\"\")",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.string.end.fsharp"
              }
            },
            "name": "string.quoted.triple.fsharp",
            "patterns": [
              {
                "include": "#string_formatter"
              }
            ]
          },
          {
            "begin": "(?=[^\\\\])(\")",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.string.begin.fsharp"
              }
            },
            "end": "(\")",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.string.end.fsharp"
              }
            },
            "name": "string.quoted.double.fsharp",
            "patterns": [
              {
                "match": "\\\\$[ \\t]*",
                "name": "punctuation.separator.string.ignore-eol.fsharp"
              },
              {
                "match": "\\\\(['\"\\\\abfnrtv]|([01][0-9][0-9]|2[0-4][0-9]|25[0-5])|(x[0-9a-fA-F]{2})|(u[0-9a-fA-F]{4})|(U00(0[0-9a-fA-F]|10)[0-9a-fA-F]{4}))",
                "name": "constant.character.string.escape.fsharp"
              },
              {
                "match": "\\\\(([0-9]{1,3})|(x[^\\s]{0,2})|(u[^\\s]{0,4})|(U[^\\s]{0,8})|[^\\s])",
                "name": "invalid.illegal.character.string.fsharp"
              },
              {
                "include": "#string_formatter"
              }
            ]
          }
        ]
      },
      "strp_inlined": {
        "patterns": [
          {
            "begin": "(\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "end": "(\\))",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "patterns": [
              {
                "include": "#strp_inlined_body"
              }
            ]
          }
        ]
      },
      "strp_inlined_body": {
        "patterns": [
          {
            "include": "#comments"
          },
          {
            "include": "#anonymous_functions"
          },
          {
            "captures": {
              "1": {
                "name": "entity.name.type.fsharp"
              }
            },
            "match": "(\\^[[:alpha:]0-9'._]+)"
          },
          {
            "match": "\\b(and|when|or)\\b",
            "name": "keyword.fsharp"
          },
          {
            "begin": "(\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "end": "(\\))",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "patterns": [
              {
                "include": "#strp_inlined_body"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "keyword.fsharp"
              },
              "2": {
                "name": "variable.fsharp"
              },
              "3": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "match": "(static member|member)\\s*([[:alpha:]0-9'`<>^._]+|``[[:alpha:]0-9' <>^._]+``)\\s*(:)"
          },
          {
            "include": "#compiler_directives"
          },
          {
            "include": "#constants"
          },
          {
            "include": "#strings"
          },
          {
            "include": "#chars"
          },
          {
            "include": "#double_tick"
          },
          {
            "include": "#keywords"
          },
          {
            "include": "#text"
          },
          {
            "include": "#definition"
          },
          {
            "include": "#attributes"
          },
          {
            "include": "#keywords"
          },
          {
            "include": "#cexprs"
          },
          {
            "include": "#text"
          }
        ]
      },
      "text": {
        "patterns": [
          {
            "match": "\\\\",
            "name": "text.fsharp"
          }
        ]
      },
      "tuple_signature": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "entity.name.type.fsharp"
              }
            },
            "match": "(([?[:alpha:]0-9'`^._ ]+))+"
          },
          {
            "begin": "(\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "end": "(\\))",
            "endCaptures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              }
            },
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "entity.name.type.fsharp"
                  }
                },
                "match": "(([?[:alpha:]0-9'`^._ ]+))+"
              },
              {
                "include": "#tuple_signature"
              }
            ]
          },
          {
            "include": "#keywords"
          }
        ]
      },
      "variables": {
        "patterns": [
          {
            "match": "\\(\\)",
            "name": "keyword.symbol.fsharp"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.symbol.fsharp"
              },
              "2": {
                "name": "variable.parameter.fsharp"
              }
            },
            "match": "(\\?{0,1})(``[[:alpha:]0-9'`^:,._ ]+``|(?!private|struct\\b)\\b[\\w[:alpha:]0-9'`<>^._ ]+)"
          }
        ]
      }
    },
    "scopeName": "source.fsharp",
    "embeddedLangs": [
      "markdown"
    ],
    "aliases": [
      "f#",
      "fs"
    ]
  }
])