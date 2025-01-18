/** Shiki Language: hxml */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push([
  {
    "displayName": "Haxe",
    "fileTypes": [
      "hx",
      "dump"
    ],
    "name": "haxe",
    "patterns": [
      {
        "include": "#all"
      }
    ],
    "repository": {
      "abstract": {
        "begin": "(?=abstract\\s+[A-Z])",
        "end": "(?<=\\})|(;)",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.hx"
          }
        },
        "name": "meta.abstract.hx",
        "patterns": [
          {
            "include": "#abstract-name"
          },
          {
            "include": "#abstract-name-post"
          },
          {
            "include": "#abstract-block"
          }
        ]
      },
      "abstract-block": {
        "begin": "(?<=\\{)",
        "end": "(\\})",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.block.end.hx"
          }
        },
        "name": "meta.block.hx",
        "patterns": [
          {
            "include": "#method"
          },
          {
            "include": "#modifiers"
          },
          {
            "include": "#variable"
          },
          {
            "include": "#block"
          },
          {
            "include": "#block-contents"
          }
        ]
      },
      "abstract-name": {
        "begin": "\\b(abstract)\\b",
        "beginCaptures": {
          "1": {
            "name": "storage.type.class.hx"
          }
        },
        "end": "([_A-Za-z]\\w*)",
        "endCaptures": {
          "1": {
            "name": "entity.name.type.class.hx"
          }
        },
        "patterns": [
          {
            "include": "#global"
          }
        ]
      },
      "abstract-name-post": {
        "begin": "(?<=\\w)",
        "end": "([\\{;])",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.block.begin.hx"
          }
        },
        "patterns": [
          {
            "include": "#global"
          },
          {
            "match": "\\b(from|to)\\b",
            "name": "keyword.other.hx"
          },
          {
            "include": "#type"
          },
          {
            "match": "[\\(\\)]",
            "name": "punctuation.definition.other.hx"
          }
        ]
      },
      "accessor-method": {
        "patterns": [
          {
            "match": "\\b(get|set)_[_A-Za-z]\\w*\\b",
            "name": "entity.name.function.hx"
          }
        ]
      },
      "all": {
        "patterns": [
          {
            "include": "#global"
          },
          {
            "include": "#package"
          },
          {
            "include": "#import"
          },
          {
            "include": "#using"
          },
          {
            "match": "\\b(final)\\b(?=\\s+(class|interface|extern|private)\\b)",
            "name": "storage.modifier.hx"
          },
          {
            "include": "#abstract"
          },
          {
            "include": "#class"
          },
          {
            "include": "#enum"
          },
          {
            "include": "#interface"
          },
          {
            "include": "#typedef"
          },
          {
            "include": "#block"
          },
          {
            "include": "#block-contents"
          }
        ]
      },
      "array": {
        "begin": "\\[",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.array.begin.hx"
          }
        },
        "end": "\\]",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.array.end.hx"
          }
        },
        "name": "meta.array.literal.hx",
        "patterns": [
          {
            "include": "#block"
          },
          {
            "include": "#block-contents"
          }
        ]
      },
      "arrow-function": {
        "begin": "(\\()(?=[^(]*?\\)\\s*->)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.parameters.begin.hx"
          }
        },
        "end": "(\\))\\s*(->)",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.parameters.end.hx"
          },
          "2": {
            "name": "storage.type.function.arrow.hx"
          }
        },
        "name": "meta.method.arrow.hx",
        "patterns": [
          {
            "include": "#arrow-function-parameter"
          }
        ]
      },
      "arrow-function-parameter": {
        "begin": "(?<=\\(|,)",
        "end": "(?=\\)|,)",
        "patterns": [
          {
            "include": "#parameter-name"
          },
          {
            "include": "#arrow-function-parameter-type-hint"
          },
          {
            "include": "#parameter-assign"
          },
          {
            "include": "#punctuation-comma"
          },
          {
            "include": "#global"
          }
        ]
      },
      "arrow-function-parameter-type-hint": {
        "begin": ":",
        "beginCaptures": {
          "0": {
            "name": "keyword.operator.type.annotation.hx"
          }
        },
        "end": "(?=\\)|,|=)",
        "patterns": [
          {
            "include": "#type"
          }
        ]
      },
      "block": {
        "begin": "\\{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.block.begin.hx"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.block.end.hx"
          }
        },
        "patterns": [
          {
            "include": "#block"
          },
          {
            "include": "#block-contents"
          }
        ]
      },
      "block-contents": {
        "patterns": [
          {
            "include": "#global"
          },
          {
            "include": "#regex"
          },
          {
            "include": "#array"
          },
          {
            "include": "#constants"
          },
          {
            "include": "#strings"
          },
          {
            "include": "#metadata"
          },
          {
            "include": "#method"
          },
          {
            "include": "#variable"
          },
          {
            "include": "#modifiers"
          },
          {
            "include": "#new-expr"
          },
          {
            "include": "#for-loop"
          },
          {
            "include": "#keywords"
          },
          {
            "include": "#arrow-function"
          },
          {
            "include": "#method-call"
          },
          {
            "include": "#enum-constructor-call"
          },
          {
            "include": "#punctuation-braces"
          },
          {
            "include": "#macro-reification"
          },
          {
            "include": "#operators"
          },
          {
            "include": "#operator-assignment"
          },
          {
            "include": "#punctuation-terminator"
          },
          {
            "include": "#punctuation-comma"
          },
          {
            "include": "#punctuation-accessor"
          },
          {
            "include": "#identifiers"
          }
        ]
      },
      "class": {
        "begin": "(?=class)",
        "end": "(?<=\\})|(;)",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.hx"
          }
        },
        "name": "meta.class.hx",
        "patterns": [
          {
            "include": "#class-name"
          },
          {
            "include": "#class-name-post"
          },
          {
            "include": "#class-block"
          }
        ]
      },
      "class-block": {
        "begin": "(?<=\\{)",
        "end": "(\\})",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.block.end.hx"
          }
        },
        "name": "meta.block.hx",
        "patterns": [
          {
            "include": "#method"
          },
          {
            "include": "#modifiers"
          },
          {
            "include": "#variable"
          },
          {
            "include": "#block"
          },
          {
            "include": "#block-contents"
          }
        ]
      },
      "class-name": {
        "begin": "\\b(class)\\b",
        "beginCaptures": {
          "1": {
            "name": "storage.type.class.hx"
          }
        },
        "end": "([_A-Za-z]\\w*)",
        "endCaptures": {
          "1": {
            "name": "entity.name.type.class.hx"
          }
        },
        "name": "meta.class.identifier.hx",
        "patterns": [
          {
            "include": "#global"
          }
        ]
      },
      "class-name-post": {
        "begin": "(?<=\\w)",
        "end": "([\\{;])",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.block.begin.hx"
          }
        },
        "patterns": [
          {
            "include": "#modifiers-inheritance"
          },
          {
            "include": "#type"
          }
        ]
      },
      "comments": {
        "patterns": [
          {
            "begin": "/\\*\\*(?!/)",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.comment.hx"
              }
            },
            "end": "\\*/",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.comment.hx"
              }
            },
            "name": "comment.block.documentation.hx",
            "patterns": [
              {
                "include": "#javadoc-tags"
              }
            ]
          },
          {
            "begin": "/\\*",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.comment.hx"
              }
            },
            "end": "\\*/",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.comment.hx"
              }
            },
            "name": "comment.block.hx",
            "patterns": [
              {
                "include": "#javadoc-tags"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.comment.hx"
              }
            },
            "match": "(//).*$\\n?",
            "name": "comment.line.double-slash.hx"
          }
        ]
      },
      "conditional-compilation": {
        "patterns": [
          {
            "captures": {
              "0": {
                "name": "punctuation.definition.tag"
              }
            },
            "match": "((#(if|elseif))[\\s!]+([a-zA-Z_][a-zA-Z0-9_]*(\\.[a-zA-Z_][a-zA-Z0-9_]*)*)(?=\\s|/\\*|//))"
          },
          {
            "begin": "((#(if|elseif))[\\s!]*)(?=\\()",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.tag"
              }
            },
            "end": "(?<=\\)|\\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag"
              }
            },
            "name": "punctuation.definition.tag",
            "patterns": [
              {
                "include": "#conditional-compilation-parens"
              }
            ]
          },
          {
            "match": "(#(end|else|error|line))",
            "name": "punctuation.definition.tag"
          },
          {
            "match": "(#([a-zA-Z0-9_]*))\\s",
            "name": "punctuation.definition.tag"
          }
        ]
      },
      "conditional-compilation-parens": {
        "begin": "\\(",
        "end": "\\)",
        "patterns": [
          {
            "include": "#conditional-compilation-parens"
          }
        ]
      },
      "constant-name": {
        "match": "\\b([_A-Z][_A-Z0-9]*)\\b",
        "name": "variable.other.hx"
      },
      "constants": {
        "patterns": [
          {
            "match": "\\b(true|false|null)\\b",
            "name": "constant.language.hx"
          },
          {
            "captures": {
              "0": {
                "name": "constant.numeric.hex.hx"
              },
              "1": {
                "name": "constant.numeric.suffix.hx"
              }
            },
            "match": "\\b(?:0[xX][0-9a-fA-F][_0-9a-fA-F]*([iu][0-9][0-9_]*)?)\\b"
          },
          {
            "captures": {
              "0": {
                "name": "constant.numeric.bin.hx"
              },
              "1": {
                "name": "constant.numeric.suffix.hx"
              }
            },
            "match": "\\b(?:0[bB][01][_01]*([iu][0-9][0-9_]*)?)\\b"
          },
          {
            "captures": {
              "0": {
                "name": "constant.numeric.decimal.hx"
              },
              "1": {
                "name": "meta.delimiter.decimal.period.hx"
              },
              "2": {
                "name": "constant.numeric.suffix.hx"
              },
              "3": {
                "name": "meta.delimiter.decimal.period.hx"
              },
              "4": {
                "name": "constant.numeric.suffix.hx"
              },
              "5": {
                "name": "meta.delimiter.decimal.period.hx"
              },
              "6": {
                "name": "constant.numeric.suffix.hx"
              },
              "7": {
                "name": "constant.numeric.suffix.hx"
              },
              "8": {
                "name": "meta.delimiter.decimal.period.hx"
              },
              "9": {
                "name": "constant.numeric.suffix.hx"
              },
              "10": {
                "name": "meta.delimiter.decimal.period.hx"
              },
              "11": {
                "name": "constant.numeric.suffix.hx"
              },
              "12": {
                "name": "meta.delimiter.decimal.period.hx"
              },
              "13": {
                "name": "constant.numeric.suffix.hx"
              },
              "14": {
                "name": "constant.numeric.suffix.hx"
              }
            },
            "match": "(?<!\\$)(?:(?:\\b[0-9][0-9_]*(\\.)[0-9_]+[eE][+-]?[0-9_]+([fiu][0-9][0-9_]*)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9_]+([fiu][0-9][0-9_]*)?\\b)|(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9_]+([fiu][0-9][0-9_]*)?\\b)|(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*([fiu][0-9][0-9_]*)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[0-9_]+([fiu][0-9][0-9_]*)?\\b)|(?:\\b[0-9][0-9_]*(\\.)(?!\\.)(?:\\B|([fiu][0-9][0-9_]*)\\b))|(?:\\B(\\.)[0-9][0-9_]*([fiu][0-9][0-9_]*)?\\b)|(?:\\b[0-9][0-9_]*([fiu][0-9][0-9_]*)?\\b))(?!\\$)"
          }
        ]
      },
      "enum": {
        "begin": "(?=enum\\s+[A-Z])",
        "end": "(?<=\\})|(;)",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.hx"
          }
        },
        "name": "meta.enum.hx",
        "patterns": [
          {
            "include": "#enum-name"
          },
          {
            "include": "#enum-name-post"
          },
          {
            "include": "#enum-block"
          }
        ]
      },
      "enum-block": {
        "begin": "(?<=\\{)",
        "end": "(\\})",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.block.end.hx"
          }
        },
        "name": "meta.block.hx",
        "patterns": [
          {
            "include": "#global"
          },
          {
            "include": "#metadata"
          },
          {
            "include": "#parameters"
          },
          {
            "include": "#identifiers"
          }
        ]
      },
      "enum-constructor-call": {
        "begin": "\\b(?<!\\.)((_*[a-z]\\w*\\.)*)(_*[A-Z]\\w*)(?:(\\.)(_*[A-Z]\\w*[a-z]\\w*))*\\s*(\\()",
        "beginCaptures": {
          "1": {
            "name": "support.package.hx"
          },
          "3": {
            "name": "entity.name.type.hx"
          },
          "4": {
            "name": "support.package.hx"
          },
          "5": {
            "name": "entity.name.type.hx"
          },
          "6": {
            "name": "meta.brace.round.hx"
          }
        },
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "meta.brace.round.hx"
          }
        },
        "patterns": [
          {
            "include": "#block"
          },
          {
            "include": "#block-contents"
          }
        ]
      },
      "enum-name": {
        "begin": "\\b(enum)\\b",
        "beginCaptures": {
          "1": {
            "name": "storage.type.class.hx"
          }
        },
        "end": "([_A-Za-z]\\w*)",
        "endCaptures": {
          "1": {
            "name": "entity.name.type.class.hx"
          }
        },
        "patterns": [
          {
            "include": "#global"
          }
        ]
      },
      "enum-name-post": {
        "begin": "(?<=\\w)",
        "end": "([\\{;])",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.block.begin.hx"
          }
        },
        "patterns": [
          {
            "include": "#type"
          }
        ]
      },
      "for-loop": {
        "begin": "\\b(for)\\b\\s*(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.flow-control.hx"
          },
          "2": {
            "name": "meta.brace.round.hx"
          }
        },
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "meta.brace.round.hx"
          }
        },
        "patterns": [
          {
            "match": "\\b(in)\\b",
            "name": "keyword.other.in.hx"
          },
          {
            "include": "#block"
          },
          {
            "include": "#block-contents"
          }
        ]
      },
      "function-type": {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.parameters.begin.hx"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.parameters.end.hx"
          }
        },
        "patterns": [
          {
            "include": "#function-type-parameter"
          }
        ]
      },
      "function-type-parameter": {
        "begin": "(?<=\\(|,)",
        "end": "(?=\\)|,)",
        "patterns": [
          {
            "include": "#global"
          },
          {
            "include": "#metadata"
          },
          {
            "include": "#operator-optional"
          },
          {
            "include": "#punctuation-comma"
          },
          {
            "include": "#function-type-parameter-name"
          },
          {
            "include": "#function-type-parameter-type-hint"
          },
          {
            "include": "#parameter-assign"
          },
          {
            "include": "#type"
          },
          {
            "include": "#global"
          }
        ]
      },
      "function-type-parameter-name": {
        "captures": {
          "1": {
            "name": "variable.parameter.hx"
          }
        },
        "match": "([_a-zA-Z]\\w*)(?=\\s*:)"
      },
      "function-type-parameter-type-hint": {
        "begin": ":",
        "beginCaptures": {
          "0": {
            "name": "keyword.operator.type.annotation.hx"
          }
        },
        "end": "(?=\\)|,|=)",
        "patterns": [
          {
            "include": "#type"
          }
        ]
      },
      "global": {
        "patterns": [
          {
            "include": "#comments"
          },
          {
            "include": "#conditional-compilation"
          }
        ]
      },
      "identifier-name": {
        "match": "\\b([_A-Za-z]\\w*)\\b",
        "name": "variable.other.hx"
      },
      "identifiers": {
        "patterns": [
          {
            "include": "#constant-name"
          },
          {
            "include": "#type-name"
          },
          {
            "include": "#identifier-name"
          }
        ]
      },
      "import": {
        "begin": "import\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.control.import.hx"
          }
        },
        "end": "$|(;)",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.hx"
          }
        },
        "patterns": [
          {
            "include": "#type-path"
          },
          {
            "match": "\\b(as)\\b",
            "name": "keyword.control.as.hx"
          },
          {
            "match": "\\b(in)\\b",
            "name": "keyword.control.in.hx"
          },
          {
            "match": "\\*",
            "name": "constant.language.import-all.hx"
          },
          {
            "match": "\\b([_A-Za-z]\\w*)\\b(?=\\s*(as|in|$|(;)))",
            "name": "variable.other.hxt"
          },
          {
            "include": "#type-path-package-name"
          }
        ]
      },
      "interface": {
        "begin": "(?=interface)",
        "end": "(?<=\\})|(;)",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.hx"
          }
        },
        "name": "meta.interface.hx",
        "patterns": [
          {
            "include": "#interface-name"
          },
          {
            "include": "#interface-name-post"
          },
          {
            "include": "#interface-block"
          }
        ]
      },
      "interface-block": {
        "begin": "(?<=\\{)",
        "end": "(\\})",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.block.end.hx"
          }
        },
        "name": "meta.block.hx",
        "patterns": [
          {
            "include": "#method"
          },
          {
            "include": "#variable"
          },
          {
            "include": "#block"
          },
          {
            "include": "#block-contents"
          }
        ]
      },
      "interface-name": {
        "begin": "\\b(interface)\\b",
        "beginCaptures": {
          "1": {
            "name": "storage.type.class.hx"
          }
        },
        "end": "([_A-Za-z]\\w*)",
        "endCaptures": {
          "1": {
            "name": "entity.name.type.class.hx"
          }
        },
        "patterns": [
          {
            "include": "#global"
          }
        ]
      },
      "interface-name-post": {
        "begin": "(?<=\\w)",
        "end": "([\\{;])",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.block.begin.hx"
          }
        },
        "patterns": [
          {
            "include": "#global"
          },
          {
            "include": "#modifiers-inheritance"
          },
          {
            "include": "#type"
          }
        ]
      },
      "javadoc-tags": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "storage.type.class.javadoc"
              },
              "2": {
                "name": "variable.other.javadoc"
              }
            },
            "match": "(@(?:param|exception|throws|event))\\s+([_A-Za-z]\\w*)\\s+"
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.class.javadoc"
              },
              "2": {
                "name": "constant.numeric.javadoc"
              }
            },
            "match": "(@since)\\s+([\\w\\.-]+)\\s+"
          },
          {
            "captures": {
              "0": {
                "name": "storage.type.class.javadoc"
              }
            },
            "match": "@(param|exception|throws|deprecated|returns?|since|default|see|event)"
          }
        ]
      },
      "keywords": {
        "patterns": [
          {
            "begin": "(?<=trace|$type|if|while|for|super)\\s*(\\()",
            "beginCaptures": {
              "2": {
                "name": "meta.brace.round.hx"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "meta.brace.round.hx"
              }
            },
            "patterns": [
              {
                "include": "#block-contents"
              }
            ]
          },
          {
            "begin": "(?<=catch)\\s*(\\()",
            "beginCaptures": {
              "2": {
                "name": "meta.brace.round.hx"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "meta.brace.round.hx"
              }
            },
            "patterns": [
              {
                "include": "#block-contents"
              },
              {
                "include": "#type-check"
              }
            ]
          },
          {
            "begin": "(?<=cast)\\s*(\\()",
            "beginCaptures": {
              "2": {
                "name": "meta.brace.round.hx"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "meta.brace.round.hx"
              }
            },
            "patterns": [
              {
                "begin": "(?=,)",
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#type"
                  }
                ]
              },
              {
                "include": "#block-contents"
              }
            ]
          },
          {
            "match": "\\b(try|catch|throw)\\b",
            "name": "keyword.control.catch-exception.hx"
          },
          {
            "begin": "\\b(case|default)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.flow-control.hx"
              }
            },
            "end": ":|(?=if)|$",
            "patterns": [
              {
                "include": "#global"
              },
              {
                "include": "#metadata"
              },
              {
                "captures": {
                  "1": {
                    "name": "storage.type.variable.hx"
                  },
                  "2": {
                    "name": "variable.other.hx"
                  }
                },
                "match": "\\b(var|final)\\b\\s*([_a-zA-Z]\\w*)\\b"
              },
              {
                "include": "#array"
              },
              {
                "include": "#constants"
              },
              {
                "include": "#strings"
              },
              {
                "match": "\\(",
                "name": "meta.brace.round.hx"
              },
              {
                "match": "\\)",
                "name": "meta.brace.round.hx"
              },
              {
                "include": "#macro-reification"
              },
              {
                "match": "=>",
                "name": "keyword.operator.extractor.hx"
              },
              {
                "include": "#operator-assignment"
              },
              {
                "include": "#punctuation-comma"
              },
              {
                "include": "#keywords"
              },
              {
                "include": "#method-call"
              },
              {
                "include": "#identifiers"
              }
            ]
          },
          {
            "match": "\\b(if|else|return|do|while|for|break|continue|switch|case|default)\\b",
            "name": "keyword.control.flow-control.hx"
          },
          {
            "match": "\\b(cast|untyped)\\b",
            "name": "keyword.other.untyped.hx"
          },
          {
            "match": "\\btrace\\b",
            "name": "keyword.other.trace.hx"
          },
          {
            "match": "\\$type\\b",
            "name": "keyword.other.type.hx"
          },
          {
            "match": "\\__(global|this)__\\b",
            "name": "keyword.other.untyped-property.hx"
          },
          {
            "match": "\\b(this|super)\\b",
            "name": "variable.language.hx"
          },
          {
            "match": "\\bnew\\b",
            "name": "keyword.operator.new.hx"
          },
          {
            "match": "\\b(abstract|class|enum|interface|typedef)\\b",
            "name": "storage.type.hx"
          },
          {
            "match": "->",
            "name": "storage.type.function.arrow.hx"
          },
          {
            "include": "#modifiers"
          },
          {
            "include": "#modifiers-inheritance"
          }
        ]
      },
      "keywords-accessor": {
        "match": "\\b(default|get|set|dynamic|never|null)\\b",
        "name": "storage.type.property.hx"
      },
      "macro-reification": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.reification.hx"
              },
              "2": {
                "name": "keyword.reification.hx"
              }
            },
            "match": "(\\$)([eabipv])\\{"
          },
          {
            "captures": {
              "2": {
                "name": "punctuation.definition.reification.hx"
              },
              "3": {
                "name": "variable.reification.hx"
              }
            },
            "match": "((\\$)([a-zA-Z]*))"
          }
        ]
      },
      "metadata": {
        "patterns": [
          {
            "begin": "(@)(:(abi|abstract|access|allow|analyzer|annotation|arrayAccess|astSource|autoBuild|bind|bitmap|bridgeProperties|build|buildXml|bypassAccessor|callable|classCode|commutative|compilerGenerated|const|coreApi|coreType|cppFileCode|cppInclude|cppNamespaceCode|cs.assemblyMeta|cs.assemblyStrict|cs.using|dce|debug|decl|delegate|depend|deprecated|eager|enum|event|expose|extern|file|fileXml|final|fixed|flash.property|font|forward.new|forward.variance|forward|forwardStatics|from|functionCode|functionTailCode|generic|genericBuild|genericClassPerMethod|getter|hack|headerClassCode|headerCode|headerInclude|headerNamespaceCode|hlNative|hxGen|ifFeature|include|inheritDoc|inline|internal|isVar|java.native|javaCanonical|jsRequire|jvm.synthetic|keep|keepInit|keepSub|luaDotMethod|luaRequire|macro|markup|mergeBlock|multiReturn|multiType|native|nativeChildren|nativeGen|nativeProperty|nativeStaticExtension|noClosure|noCompletion|noDebug|noDoc|noImportGlobal|noPrivateAccess|noStack|noUsing|nonVirtual|notNull|nullSafety|objc|objcProtocol|op|optional|overload|persistent|phpClassConst|phpGlobal|phpMagic|phpNoConstructor|pos|private|privateAccess|property|protected|publicFields|pure|pythonImport|readOnly|remove|require|resolve|rtti|runtimeValue|scalar|selfCall|semantics|setter|sound|sourceFile|stackOnly|strict|struct|structAccess|structInit|suppressWarnings|templatedCall|throws|to|transient|transitive|unifyMinDynamic|unreflective|unsafe|using|void|volatile)\\b)\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "punctuation.metadata.hx"
              },
              "2": {
                "name": "storage.modifier.metadata.hx"
              },
              "3": {
                "name": "meta.brace.round.hx"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "meta.brace.round.hx"
              }
            },
            "patterns": [
              {
                "include": "#block-contents"
              }
            ]
          },
          {
            "captures": {
              "2": {
                "name": "punctuation.metadata.hx"
              },
              "3": {
                "name": "storage.modifier.metadata.hx"
              }
            },
            "match": "((@)(:(abi|abstract|access|allow|analyzer|annotation|arrayAccess|astSource|autoBuild|bind|bitmap|bridgeProperties|build|buildXml|bypassAccessor|callable|classCode|commutative|compilerGenerated|const|coreApi|coreType|cppFileCode|cppInclude|cppNamespaceCode|cs.assemblyMeta|cs.assemblyStrict|cs.using|dce|debug|decl|delegate|depend|deprecated|eager|enum|event|expose|extern|file|fileXml|final|fixed|flash.property|font|forward.new|forward.variance|forward|forwardStatics|from|functionCode|functionTailCode|generic|genericBuild|genericClassPerMethod|getter|hack|headerClassCode|headerCode|headerInclude|headerNamespaceCode|hlNative|hxGen|ifFeature|include|inheritDoc|inline|internal|isVar|java.native|javaCanonical|jsRequire|jvm.synthetic|keep|keepInit|keepSub|luaDotMethod|luaRequire|macro|markup|mergeBlock|multiReturn|multiType|native|nativeChildren|nativeGen|nativeProperty|nativeStaticExtension|noClosure|noCompletion|noDebug|noDoc|noImportGlobal|noPrivateAccess|noStack|noUsing|nonVirtual|notNull|nullSafety|objc|objcProtocol|op|optional|overload|persistent|phpClassConst|phpGlobal|phpMagic|phpNoConstructor|pos|private|privateAccess|property|protected|publicFields|pure|pythonImport|readOnly|remove|require|resolve|rtti|runtimeValue|scalar|selfCall|semantics|setter|sound|sourceFile|stackOnly|strict|struct|structAccess|structInit|suppressWarnings|templatedCall|throws|to|transient|transitive|unifyMinDynamic|unreflective|unsafe|using|void|volatile)\\b))"
          },
          {
            "begin": "(@)(:?[a-zA-Z_]*)\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "punctuation.metadata.hx"
              },
              "2": {
                "name": "variable.metadata.hx"
              },
              "3": {
                "name": "meta.brace.round.hx"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "meta.brace.round.hx"
              }
            },
            "patterns": [
              {
                "include": "#block-contents"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.metadata.hx"
              },
              "2": {
                "name": "variable.metadata.hx"
              },
              "3": {
                "name": "variable.metadata.hx"
              },
              "4": {
                "name": "punctuation.accessor.hx"
              },
              "5": {
                "name": "variable.metadata.hx"
              }
            },
            "match": "(@)(:?)([a-zA-Z_]*(\\.))*([a-zA-Z_]*)?"
          }
        ]
      },
      "method": {
        "begin": "(?=\\bfunction\\b)",
        "end": "(?<=[\\};])",
        "name": "meta.method.hx",
        "patterns": [
          {
            "include": "#macro-reification"
          },
          {
            "include": "#method-name"
          },
          {
            "include": "#method-name-post"
          },
          {
            "include": "#method-block"
          }
        ]
      },
      "method-block": {
        "begin": "(?<=\\{)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.block.begin.hx"
          }
        },
        "end": "(\\})",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.block.end.hx"
          }
        },
        "name": "meta.method.block.hx",
        "patterns": [
          {
            "include": "#block"
          },
          {
            "include": "#block-contents"
          }
        ]
      },
      "method-call": {
        "begin": "\\b(?:(__(?:addressOf|as|call|checked|cpp|cs|define_feature|delete|feature|field|fixed|foreach|forin|has_next|hkeys|in|int|is|java|js|keys|lock|lua|lua_table|new|php|physeq|prefix|ptr|resources|rethrow|set|setfield|sizeof|type|typeof|unprotect|unsafe|valueOf|var|vector|vmem_get|vmem_set|vmem_sign|instanceof|strict_eq|strict_neq)__)|([_a-z]\\w*))\\s*(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.untyped-function.hx"
          },
          "2": {
            "name": "entity.name.function.hx"
          },
          "3": {
            "name": "meta.brace.round.hx"
          }
        },
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "meta.brace.round.hx"
          }
        },
        "patterns": [
          {
            "include": "#block"
          },
          {
            "include": "#block-contents"
          }
        ]
      },
      "method-name": {
        "begin": "\\b(function)\\b\\s*\\b(?:(new)|([_A-Za-z]\\w*))?\\b",
        "beginCaptures": {
          "1": {
            "name": "storage.type.function.hx"
          },
          "2": {
            "name": "storage.type.hx"
          },
          "3": {
            "name": "entity.name.function.hx"
          }
        },
        "end": "(?=$|\\()",
        "patterns": [
          {
            "include": "#macro-reification"
          },
          {
            "include": "#type-parameters"
          }
        ]
      },
      "method-name-post": {
        "begin": "(?<=[\\w\\s>])",
        "end": "(\\{)|(;)",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.block.begin.hx"
          },
          "2": {
            "name": "punctuation.terminator.hx"
          }
        },
        "patterns": [
          {
            "include": "#parameters"
          },
          {
            "include": "#method-return-type-hint"
          },
          {
            "include": "#block"
          },
          {
            "include": "#block-contents"
          }
        ]
      },
      "method-return-type-hint": {
        "begin": "(?<=\\))\\s*(:)",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.type.annotation.hx"
          }
        },
        "end": "(?=\\{|;|[a-z0-9])",
        "patterns": [
          {
            "include": "#type"
          }
        ]
      },
      "modifiers": {
        "patterns": [
          {
            "match": "\\b(enum)\\b",
            "name": "storage.type.class"
          },
          {
            "match": "\\b(public|private|static|dynamic|inline|macro|extern|override|overload|abstract)\\b",
            "name": "storage.modifier.hx"
          },
          {
            "match": "\\b(final)\\b(?=\\s+(public|private|static|dynamic|inline|macro|extern|override|overload|abstract|function))",
            "name": "storage.modifier.hx"
          }
        ]
      },
      "modifiers-inheritance": {
        "match": "\\b(implements|extends)\\b",
        "name": "storage.modifier.hx"
      },
      "new-expr": {
        "begin": "(?<!\\.)\\b(new)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.new.hx"
          }
        },
        "end": "(?=$|\\()",
        "name": "new.expr.hx",
        "patterns": [
          {
            "include": "#type"
          }
        ]
      },
      "operator-assignment": {
        "match": "(=)",
        "name": "keyword.operator.assignment.hx"
      },
      "operator-optional": {
        "match": "(\\?)(?!\\s)",
        "name": "keyword.operator.optional.hx"
      },
      "operator-type-hint": {
        "match": "(:)",
        "name": "keyword.operator.type.annotation.hx"
      },
      "operators": {
        "patterns": [
          {
            "match": "(&&|\\|\\|)",
            "name": "keyword.operator.logical.hx"
          },
          {
            "match": "(~|&|\\||\\^|>>>|<<|>>)",
            "name": "keyword.operator.bitwise.hx"
          },
          {
            "match": "(==|!=|<=|>=|<|>)",
            "name": "keyword.operator.comparison.hx"
          },
          {
            "match": "(!)",
            "name": "keyword.operator.logical.hx"
          },
          {
            "match": "(\\-\\-|\\+\\+)",
            "name": "keyword.operator.increment-decrement.hx"
          },
          {
            "match": "(\\-|\\+|\\*|\\/|%)",
            "name": "keyword.operator.arithmetic.hx"
          },
          {
            "match": "\\.\\.\\.",
            "name": "keyword.operator.intiterator.hx"
          },
          {
            "match": "=>",
            "name": "keyword.operator.arrow.hx"
          },
          {
            "match": "\\?\\?",
            "name": "keyword.operator.nullcoalescing.hx"
          },
          {
            "match": "\\?\\.",
            "name": "keyword.operator.safenavigation.hx"
          },
          {
            "match": "\\bis\\b(?!\\()",
            "name": "keyword.other.hx"
          },
          {
            "begin": "\\?",
            "beginCaptures": {
              "0": {
                "name": "keyword.operator.ternary.hx"
              }
            },
            "end": ":",
            "endCaptures": {
              "0": {
                "name": "keyword.operator.ternary.hx"
              }
            },
            "patterns": [
              {
                "include": "#block-contents"
              }
            ]
          }
        ]
      },
      "package": {
        "begin": "package\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.other.package.hx"
          }
        },
        "end": "$|(;)",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.hx"
          }
        },
        "patterns": [
          {
            "include": "#type-path"
          },
          {
            "include": "#type-path-package-name"
          }
        ]
      },
      "parameter": {
        "begin": "(?<=\\(|,)",
        "end": "(?=\\)(?!\\s*->)|,)",
        "patterns": [
          {
            "include": "#parameter-name"
          },
          {
            "include": "#parameter-type-hint"
          },
          {
            "include": "#parameter-assign"
          },
          {
            "include": "#punctuation-comma"
          },
          {
            "include": "#global"
          }
        ]
      },
      "parameter-assign": {
        "begin": "=",
        "beginCaptures": {
          "0": {
            "name": "keyword.operator.assignment.hx"
          }
        },
        "end": "(?=\\)|,)",
        "patterns": [
          {
            "include": "#block"
          },
          {
            "include": "#block-contents"
          }
        ]
      },
      "parameter-name": {
        "begin": "(?<=\\(|,)",
        "end": "([_a-zA-Z]\\w*)",
        "endCaptures": {
          "1": {
            "name": "variable.parameter.hx"
          }
        },
        "patterns": [
          {
            "include": "#global"
          },
          {
            "include": "#metadata"
          },
          {
            "include": "#operator-optional"
          }
        ]
      },
      "parameter-type-hint": {
        "begin": ":",
        "beginCaptures": {
          "0": {
            "name": "keyword.operator.type.annotation.hx"
          }
        },
        "end": "(?=\\)(?!\\s*->)|,|=)",
        "patterns": [
          {
            "include": "#type"
          }
        ]
      },
      "parameters": {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.parameters.begin.hx"
          }
        },
        "end": "\\s*(\\)(?!\\s*->))",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.parameters.end.hx"
          }
        },
        "name": "meta.parameters.hx",
        "patterns": [
          {
            "include": "#parameter"
          }
        ]
      },
      "punctuation-accessor": {
        "match": "\\.",
        "name": "punctuation.accessor.hx"
      },
      "punctuation-braces": {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "meta.brace.round.hx"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "meta.brace.round.hx"
          }
        },
        "patterns": [
          {
            "include": "#keywords"
          },
          {
            "include": "#block"
          },
          {
            "include": "#block-contents"
          },
          {
            "include": "#type-check"
          }
        ]
      },
      "punctuation-comma": {
        "match": ",",
        "name": "punctuation.separator.comma.hx"
      },
      "punctuation-terminator": {
        "match": ";",
        "name": "punctuation.terminator.hx"
      },
      "regex": {
        "begin": "(~/)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.string.begin.hx"
          }
        },
        "end": "(/)([gimsu]*)",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.string.end.hx"
          },
          "2": {
            "name": "keyword.other.hx"
          }
        },
        "name": "string.regexp.hx",
        "patterns": [
          {
            "include": "#regexp"
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
            "match": "\\\\([0-7]{3}|x\\h\\h|u\\h\\h\\h\\h)",
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
            "match": "\\\\[1-9]\\d*",
            "name": "keyword.other.back-reference.regexp"
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
            "begin": "(\\()((\\?=)|(\\?!))",
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
            "begin": "\\((\\?:)?",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.group.regexp"
              },
              "1": {
                "name": "punctuation.definition.group.capture.regexp"
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
                "match": "(?:.|(\\\\(?:[0-7]{3}|x\\h\\h|u\\h\\h\\h\\h))|(\\\\c[A-Z])|(\\\\.))\\-(?:[^\\]\\\\]|(\\\\(?:[0-7]{3}|x\\h\\h|u\\h\\h\\h\\h))|(\\\\c[A-Z])|(\\\\.))",
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
      "string-escape-sequences": {
        "patterns": [
          {
            "match": "\\\\[0-3][0-9]{2}",
            "name": "constant.character.escape.hx"
          },
          {
            "match": "\\\\x[0-9A-Fa-f]{2}",
            "name": "constant.character.escape.hx"
          },
          {
            "match": "\\\\u[0-9]{4}",
            "name": "constant.character.escape.hx"
          },
          {
            "match": "\\\\u\\{[0-9A-Fa-f]{1,}\\}",
            "name": "constant.character.escape.hx"
          },
          {
            "match": "\\\\[nrt\"'\\\\]",
            "name": "constant.character.escape.hx"
          },
          {
            "match": "\\\\.",
            "name": "invalid.escape.sequence.hx"
          }
        ]
      },
      "strings": {
        "patterns": [
          {
            "begin": "\"",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.hx"
              }
            },
            "end": "\"",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.hx"
              }
            },
            "name": "string.quoted.double.hx",
            "patterns": [
              {
                "include": "#string-escape-sequences"
              }
            ]
          },
          {
            "begin": "(')",
            "beginCaptures": {
              "0": {
                "name": "string.quoted.single.hx"
              },
              "1": {
                "name": "punctuation.definition.string.begin.hx"
              }
            },
            "end": "(')",
            "endCaptures": {
              "0": {
                "name": "string.quoted.single.hx"
              },
              "1": {
                "name": "punctuation.definition.string.end.hx"
              }
            },
            "patterns": [
              {
                "begin": "\\$(?=\\$)",
                "beginCaptures": {
                  "0": {
                    "name": "constant.character.escape.hx"
                  }
                },
                "end": "\\$",
                "endCaptures": {
                  "0": {
                    "name": "constant.character.escape.hx"
                  }
                },
                "name": "string.quoted.single.hx"
              },
              {
                "include": "#string-escape-sequences"
              },
              {
                "begin": "(\\${)",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.block.begin.hx"
                  }
                },
                "end": "(})",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.block.end.hx"
                  }
                },
                "patterns": [
                  {
                    "include": "#block-contents"
                  }
                ]
              },
              {
                "captures": {
                  "1": {
                    "name": "punctuation.definition.block.begin.hx"
                  },
                  "2": {
                    "name": "variable.other.hx"
                  }
                },
                "match": "(\\$)([_a-zA-Z]\\w*)"
              },
              {
                "match": "",
                "name": "constant.character.escape.hx"
              },
              {
                "match": ".",
                "name": "string.quoted.single.hx"
              }
            ]
          }
        ]
      },
      "type": {
        "patterns": [
          {
            "include": "#global"
          },
          {
            "include": "#macro-reification"
          },
          {
            "include": "#type-name"
          },
          {
            "include": "#type-parameters"
          },
          {
            "match": "->",
            "name": "keyword.operator.type.function.hx"
          },
          {
            "match": "&",
            "name": "keyword.operator.type.intersection.hx"
          },
          {
            "match": "\\?(?=\\s*[_A-Z])",
            "name": "keyword.operator.optional"
          },
          {
            "match": "\\?(?!\\s*[_A-Z])",
            "name": "punctuation.definition.tag"
          },
          {
            "begin": "(\\{)",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.block.begin.hx"
              }
            },
            "end": "(?<=\\})",
            "patterns": [
              {
                "include": "#typedef-block"
              }
            ]
          },
          {
            "include": "#function-type"
          }
        ]
      },
      "type-check": {
        "begin": "(?<!macro)(?=:)",
        "end": "(?=\\))",
        "patterns": [
          {
            "include": "#operator-type-hint"
          },
          {
            "include": "#type"
          }
        ]
      },
      "type-name": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "support.class.builtin.hx"
              },
              "2": {
                "name": "support.package.hx"
              },
              "3": {
                "name": "entity.name.type.hx"
              }
            },
            "match": "\\b(Any|Array|ArrayAccess|Bool|Class|Date|DateTools|Dynamic|Enum|EnumValue|EReg|Float|IMap|Int|IntIterator|Iterable|Iterator|KeyValueIterator|KeyValueIterable|Lambda|List|ListIterator|ListNode|Map|Math|Null|Reflect|Single|Std|String|StringBuf|StringTools|Sys|Type|UInt|UnicodeString|ValueType|Void|Xml|XmlType)(?:(\\.)(_*[A-Z]\\w*[a-z]\\w*))*\\b"
          },
          {
            "captures": {
              "1": {
                "name": "support.package.hx"
              },
              "3": {
                "name": "entity.name.type.hx"
              },
              "4": {
                "name": "support.package.hx"
              },
              "5": {
                "name": "entity.name.type.hx"
              }
            },
            "match": "\\b(?<![^.]\\.)((_*[a-z]\\w*\\.)*)(_*[A-Z]\\w*)(?:(\\.)(_*[A-Z]\\w*[a-z]\\w*))*\\b"
          }
        ]
      },
      "type-parameter-constraint-new": {
        "match": ":",
        "name": "keyword.operator.type.annotation.hxt"
      },
      "type-parameter-constraint-old": {
        "begin": "(:)\\s*(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.type.annotation.hx"
          },
          "2": {
            "name": "punctuation.definition.constraint.begin.hx"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.constraint.end.hx"
          }
        },
        "patterns": [
          {
            "include": "#type"
          },
          {
            "include": "#punctuation-comma"
          }
        ]
      },
      "type-parameters": {
        "begin": "(<)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.typeparameters.begin.hx"
          }
        },
        "end": "(?=$)|(>)",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.typeparameters.end.hx"
          }
        },
        "name": "meta.type-parameters.hx",
        "patterns": [
          {
            "include": "#type"
          },
          {
            "include": "#type-parameter-constraint-old"
          },
          {
            "include": "#type-parameter-constraint-new"
          },
          {
            "include": "#global"
          },
          {
            "include": "#regex"
          },
          {
            "include": "#array"
          },
          {
            "include": "#constants"
          },
          {
            "include": "#strings"
          },
          {
            "include": "#metadata"
          },
          {
            "include": "#punctuation-comma"
          }
        ]
      },
      "type-path": {
        "patterns": [
          {
            "include": "#global"
          },
          {
            "include": "#punctuation-accessor"
          },
          {
            "include": "#type-path-type-name"
          }
        ]
      },
      "type-path-package-name": {
        "match": "\\b([_A-Za-z]\\w*)\\b",
        "name": "support.package.hx"
      },
      "type-path-type-name": {
        "match": "\\b(_*[A-Z]\\w*)\\b",
        "name": "entity.name.type.hx"
      },
      "typedef": {
        "begin": "(?=typedef)",
        "end": "(?<=\\})|(;)",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.hx"
          }
        },
        "name": "meta.typedef.hx",
        "patterns": [
          {
            "include": "#typedef-name"
          },
          {
            "include": "#typedef-name-post"
          },
          {
            "include": "#typedef-block"
          }
        ]
      },
      "typedef-block": {
        "begin": "(?<=\\{)",
        "end": "(\\})",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.block.end.hx"
          }
        },
        "name": "meta.block.hx",
        "patterns": [
          {
            "include": "#global"
          },
          {
            "include": "#metadata"
          },
          {
            "include": "#method"
          },
          {
            "include": "#variable"
          },
          {
            "include": "#modifiers"
          },
          {
            "include": "#punctuation-comma"
          },
          {
            "include": "#operator-optional"
          },
          {
            "include": "#typedef-extension"
          },
          {
            "include": "#typedef-simple-field-type-hint"
          },
          {
            "include": "#identifier-name"
          },
          {
            "include": "#strings"
          }
        ]
      },
      "typedef-extension": {
        "begin": ">",
        "end": ",|$",
        "patterns": [
          {
            "include": "#type"
          }
        ]
      },
      "typedef-name": {
        "begin": "\\b(typedef)\\b",
        "beginCaptures": {
          "1": {
            "name": "storage.type.class.hx"
          }
        },
        "end": "([_A-Za-z]\\w*)",
        "endCaptures": {
          "1": {
            "name": "entity.name.type.class.hx"
          }
        },
        "patterns": [
          {
            "include": "#global"
          }
        ]
      },
      "typedef-name-post": {
        "begin": "(?<=\\w)",
        "end": "(\\{)|(?=;)",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.block.begin.hx"
          }
        },
        "patterns": [
          {
            "include": "#global"
          },
          {
            "include": "#punctuation-brackets"
          },
          {
            "include": "#punctuation-separator"
          },
          {
            "include": "#operator-assignment"
          },
          {
            "include": "#type"
          }
        ]
      },
      "typedef-simple-field-type-hint": {
        "begin": ":",
        "beginCaptures": {
          "0": {
            "name": "keyword.operator.type.annotation.hx"
          }
        },
        "end": "(?=\\}|,|;)",
        "patterns": [
          {
            "include": "#type"
          }
        ]
      },
      "using": {
        "begin": "using\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.other.using.hx"
          }
        },
        "end": "$|(;)",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.hx"
          }
        },
        "patterns": [
          {
            "include": "#type-path"
          },
          {
            "include": "#type-path-package-name"
          }
        ]
      },
      "variable": {
        "begin": "(?=\\b(var|final)\\b)",
        "end": "(?=$)|(;)",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.hx"
          }
        },
        "patterns": [
          {
            "include": "#variable-name"
          },
          {
            "include": "#variable-name-next"
          },
          {
            "include": "#variable-assign"
          },
          {
            "include": "#variable-name-post"
          }
        ]
      },
      "variable-accessors": {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.parameters.begin.hx"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.parameters.end.hx"
          }
        },
        "name": "meta.parameters.hx",
        "patterns": [
          {
            "include": "#global"
          },
          {
            "include": "#keywords-accessor"
          },
          {
            "include": "#accessor-method"
          },
          {
            "include": "#punctuation-comma"
          }
        ]
      },
      "variable-assign": {
        "begin": "=",
        "beginCaptures": {
          "0": {
            "name": "keyword.operator.assignment.hx"
          }
        },
        "end": "(?=;|,)",
        "patterns": [
          {
            "include": "#block"
          },
          {
            "include": "#block-contents"
          }
        ]
      },
      "variable-name": {
        "begin": "\\b(var|final)\\b",
        "beginCaptures": {
          "1": {
            "name": "storage.type.variable.hx"
          }
        },
        "end": "(?=$)|([_a-zA-Z]\\w*)",
        "endCaptures": {
          "1": {
            "name": "variable.other.hx"
          }
        },
        "patterns": [
          {
            "include": "#operator-optional"
          }
        ]
      },
      "variable-name-next": {
        "begin": ",",
        "beginCaptures": {
          "0": {
            "name": "punctuation.separator.comma.hx"
          }
        },
        "end": "([_a-zA-Z]\\w*)",
        "endCaptures": {
          "1": {
            "name": "variable.other.hx"
          }
        },
        "patterns": [
          {
            "include": "#global"
          }
        ]
      },
      "variable-name-post": {
        "begin": "(?<=\\w)",
        "end": "(?=;)|(?==)",
        "patterns": [
          {
            "include": "#variable-accessors"
          },
          {
            "include": "#variable-type-hint"
          },
          {
            "include": "#block-contents"
          }
        ]
      },
      "variable-type-hint": {
        "begin": ":",
        "beginCaptures": {
          "0": {
            "name": "keyword.operator.type.annotation.hx"
          }
        },
        "end": "(?=$|;|,|=)",
        "patterns": [
          {
            "include": "#type"
          }
        ]
      }
    },
    "scopeName": "source.hx"
  },
  {
    "displayName": "HXML",
    "fileTypes": [
      "hxml"
    ],
    "foldingStartMarker": "--next",
    "foldingStopMarker": "\\n\\n",
    "name": "hxml",
    "patterns": [
      {
        "captures": {
          "1": {
            "name": "punctuation.definition.comment.hxml"
          }
        },
        "match": "(#).*$\\n?",
        "name": "comment.line.number-sign.hxml"
      },
      {
        "begin": "(?<!\\w)(--macro)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.hxml"
          }
        },
        "end": "\\n",
        "patterns": [
          {
            "include": "source.hx#block-contents"
          }
        ]
      },
      {
        "captures": {
          "1": {
            "name": "keyword.other.hxml"
          },
          "2": {
            "name": "support.package.hx"
          },
          "4": {
            "name": "entity.name.type.hx"
          }
        },
        "match": "(?<!\\w)(-m|-main|--main|--run)\\b\\s*\\b(?:(([a-z][a-zA-Z0-9]*\\.)*)(_*[A-Z]\\w*))?\\b"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.other.hxml"
          }
        },
        "match": "(?<!\\w)(-cppia|-cpp?|-js|-as3|-swf-(header|version|lib(-extern)?)|-swf9?|-neko|-python|-php|-cs|-java-lib|-java|-xml|-lua|-hl|-x|-lib|-D|-resource|-exclude|-version|-v|-debug|-prompt|-cmd|-dce\\s+(std|full|no)?|--flash-strict|--no-traces|--flash-use-stage|--neko-source|--gen-hx-classes|-net-lib|-net-std|-c-arg|--each|--next|--display|--no-output|--times|--no-inline|--no-opt|--php-front|--php-lib|--php-prefix|--remap|--help-defines|--help-metas|-help|--help|-java|-cs|--js-modern|--interp|--eval|--dce|--wait|--connect|--cwd|--run).*$"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.other.hxml"
          }
        },
        "match": "(?<!\\w)(--js(on)?|--lua|--swf-(header|version|lib(-extern)?)|--swf|--as3|--neko|--php|--cppia|--cpp|--cppia|--cs|--java-lib(-extern)?|--java|--jvm|--python|--hl|-p|--class-path|-L|--library|--define|-r|--resource|--cmd|-C|--verbose|--debug|--prompt|--xml|--json|--net-lib|--net-std|--c-arg|--version|--haxelib-global|-h|--main|--server-connect|--server-listen).*$"
      }
    ],
    "scopeName": "source.hxml",
    "embeddedLangs": [
      "haxe"
    ]
  }
])