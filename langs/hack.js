/** Shiki Language: hack */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push([
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
    "displayName": "HTML",
    "injections": {
      "R:text.html - (comment.block, text.html meta.embedded, meta.tag.*.*.html, meta.tag.*.*.*.html, meta.tag.*.*.*.*.html)": {
        "comment": "Uses R: to ensure this matches after any other injections.",
        "patterns": [
          {
            "match": "<",
            "name": "invalid.illegal.bad-angle-bracket.html"
          }
        ]
      }
    },
    "name": "html",
    "patterns": [
      {
        "include": "#xml-processing"
      },
      {
        "include": "#comment"
      },
      {
        "include": "#doctype"
      },
      {
        "include": "#cdata"
      },
      {
        "include": "#tags-valid"
      },
      {
        "include": "#tags-invalid"
      },
      {
        "include": "#entities"
      }
    ],
    "repository": {
      "attribute": {
        "patterns": [
          {
            "begin": "(s(hape|cope|t(ep|art)|ize(s)?|p(ellcheck|an)|elected|lot|andbox|rc(set|doc|lang)?)|h(ttp-equiv|i(dden|gh)|e(ight|aders)|ref(lang)?)|n(o(nce|validate|module)|ame)|c(h(ecked|arset)|ite|o(nt(ent(editable)?|rols)|ords|l(s(pan)?|or))|lass|rossorigin)|t(ype(mustmatch)?|itle|a(rget|bindex)|ranslate)|i(s(map)?|n(tegrity|putmode)|tem(scope|type|id|prop|ref)|d)|op(timum|en)|d(i(sabled|r(name)?)|ownload|e(coding|f(er|ault))|at(etime|a)|raggable)|usemap|p(ing|oster|la(ysinline|ceholder)|attern|reload)|enctype|value|kind|for(m(novalidate|target|enctype|action|method)?)?|w(idth|rap)|l(ist|o(op|w)|a(ng|bel))|a(s(ync)?|c(ce(sskey|pt(-charset)?)|tion)|uto(c(omplete|apitalize)|play|focus)|l(t|low(usermedia|paymentrequest|fullscreen))|bbr)|r(ows(pan)?|e(versed|quired|ferrerpolicy|l|adonly))|m(in(length)?|u(ted|ltiple)|e(thod|dia)|a(nifest|x(length)?)))(?![\\w:-])",
            "beginCaptures": {
              "0": {
                "name": "entity.other.attribute-name.html"
              }
            },
            "comment": "HTML5 attributes, not event handlers",
            "end": "(?=\\s*+[^=\\s])",
            "name": "meta.attribute.$1.html",
            "patterns": [
              {
                "include": "#attribute-interior"
              }
            ]
          },
          {
            "begin": "style(?![\\w:-])",
            "beginCaptures": {
              "0": {
                "name": "entity.other.attribute-name.html"
              }
            },
            "comment": "HTML5 style attribute",
            "end": "(?=\\s*+[^=\\s])",
            "name": "meta.attribute.style.html",
            "patterns": [
              {
                "begin": "=",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.separator.key-value.html"
                  }
                },
                "end": "(?<=[^\\s=])(?!\\s*=)|(?=/?>)",
                "patterns": [
                  {
                    "begin": "(?=[^\\s=<>`/]|/(?!>))",
                    "end": "(?!\\G)",
                    "name": "meta.embedded.line.css",
                    "patterns": [
                      {
                        "captures": {
                          "0": {
                            "name": "source.css"
                          }
                        },
                        "match": "([^\\s\"'=<>`/]|/(?!>))+",
                        "name": "string.unquoted.html"
                      },
                      {
                        "begin": "\"",
                        "beginCaptures": {
                          "0": {
                            "name": "punctuation.definition.string.begin.html"
                          }
                        },
                        "contentName": "source.css",
                        "end": "(\")",
                        "endCaptures": {
                          "0": {
                            "name": "punctuation.definition.string.end.html"
                          },
                          "1": {
                            "name": "source.css"
                          }
                        },
                        "name": "string.quoted.double.html",
                        "patterns": [
                          {
                            "include": "#entities"
                          }
                        ]
                      },
                      {
                        "begin": "'",
                        "beginCaptures": {
                          "0": {
                            "name": "punctuation.definition.string.begin.html"
                          }
                        },
                        "contentName": "source.css",
                        "end": "(')",
                        "endCaptures": {
                          "0": {
                            "name": "punctuation.definition.string.end.html"
                          },
                          "1": {
                            "name": "source.css"
                          }
                        },
                        "name": "string.quoted.single.html",
                        "patterns": [
                          {
                            "include": "#entities"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "match": "=",
                    "name": "invalid.illegal.unexpected-equals-sign.html"
                  }
                ]
              }
            ]
          },
          {
            "begin": "on(s(croll|t(orage|alled)|u(spend|bmit)|e(curitypolicyviolation|ek(ing|ed)|lect))|hashchange|c(hange|o(ntextmenu|py)|u(t|echange)|l(ick|ose)|an(cel|play(through)?))|t(imeupdate|oggle)|in(put|valid)|o(nline|ffline)|d(urationchange|r(op|ag(start|over|e(n(ter|d)|xit)|leave)?)|blclick)|un(handledrejection|load)|p(opstate|lay(ing)?|a(ste|use|ge(show|hide))|rogress)|e(nded|rror|mptied)|volumechange|key(down|up|press)|focus|w(heel|aiting)|l(oad(start|e(nd|d(data|metadata)))?|anguagechange)|a(uxclick|fterprint|bort)|r(e(s(ize|et)|jectionhandled)|atechange)|m(ouse(o(ut|ver)|down|up|enter|leave|move)|essage(error)?)|b(efore(unload|print)|lur))(?![\\w:-])",
            "beginCaptures": {
              "0": {
                "name": "entity.other.attribute-name.html"
              }
            },
            "comment": "HTML5 attributes, event handlers",
            "end": "(?=\\s*+[^=\\s])",
            "name": "meta.attribute.event-handler.$1.html",
            "patterns": [
              {
                "begin": "=",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.separator.key-value.html"
                  }
                },
                "end": "(?<=[^\\s=])(?!\\s*=)|(?=/?>)",
                "patterns": [
                  {
                    "begin": "(?=[^\\s=<>`/]|/(?!>))",
                    "end": "(?!\\G)",
                    "name": "meta.embedded.line.js",
                    "patterns": [
                      {
                        "captures": {
                          "0": {
                            "name": "source.js"
                          },
                          "1": {
                            "patterns": [
                              {
                                "include": "source.js"
                              }
                            ]
                          }
                        },
                        "match": "(([^\\s\"'=<>`/]|/(?!>))+)",
                        "name": "string.unquoted.html"
                      },
                      {
                        "begin": "\"",
                        "beginCaptures": {
                          "0": {
                            "name": "punctuation.definition.string.begin.html"
                          }
                        },
                        "contentName": "source.js",
                        "end": "(\")",
                        "endCaptures": {
                          "0": {
                            "name": "punctuation.definition.string.end.html"
                          },
                          "1": {
                            "name": "source.js"
                          }
                        },
                        "name": "string.quoted.double.html",
                        "patterns": [
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
                            "match": "([^\\n\"/]|/(?![/*]))+"
                          },
                          {
                            "begin": "//",
                            "beginCaptures": {
                              "0": {
                                "name": "punctuation.definition.comment.js"
                              }
                            },
                            "end": "(?=\")|\\n",
                            "name": "comment.line.double-slash.js"
                          },
                          {
                            "begin": "/\\*",
                            "beginCaptures": {
                              "0": {
                                "name": "punctuation.definition.comment.begin.js"
                              }
                            },
                            "end": "(?=\")|\\*/",
                            "endCaptures": {
                              "0": {
                                "name": "punctuation.definition.comment.end.js"
                              }
                            },
                            "name": "comment.block.js"
                          }
                        ]
                      },
                      {
                        "begin": "'",
                        "beginCaptures": {
                          "0": {
                            "name": "punctuation.definition.string.begin.html"
                          }
                        },
                        "contentName": "source.js",
                        "end": "(')",
                        "endCaptures": {
                          "0": {
                            "name": "punctuation.definition.string.end.html"
                          },
                          "1": {
                            "name": "source.js"
                          }
                        },
                        "name": "string.quoted.single.html",
                        "patterns": [
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
                            "match": "([^\\n'/]|/(?![/*]))+"
                          },
                          {
                            "begin": "//",
                            "beginCaptures": {
                              "0": {
                                "name": "punctuation.definition.comment.js"
                              }
                            },
                            "end": "(?=')|\\n",
                            "name": "comment.line.double-slash.js"
                          },
                          {
                            "begin": "/\\*",
                            "beginCaptures": {
                              "0": {
                                "name": "punctuation.definition.comment.begin.js"
                              }
                            },
                            "end": "(?=')|\\*/",
                            "endCaptures": {
                              "0": {
                                "name": "punctuation.definition.comment.end.js"
                              }
                            },
                            "name": "comment.block.js"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "match": "=",
                    "name": "invalid.illegal.unexpected-equals-sign.html"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(data-[a-z\\-]+)(?![\\w:-])",
            "beginCaptures": {
              "0": {
                "name": "entity.other.attribute-name.html"
              }
            },
            "comment": "HTML5 attributes, data-*",
            "end": "(?=\\s*+[^=\\s])",
            "name": "meta.attribute.data-x.$1.html",
            "patterns": [
              {
                "include": "#attribute-interior"
              }
            ]
          },
          {
            "begin": "(align|bgcolor|border)(?![\\w:-])",
            "beginCaptures": {
              "0": {
                "name": "invalid.deprecated.entity.other.attribute-name.html"
              }
            },
            "comment": "HTML attributes, deprecated",
            "end": "(?=\\s*+[^=\\s])",
            "name": "meta.attribute.$1.html",
            "patterns": [
              {
                "include": "#attribute-interior"
              }
            ]
          },
          {
            "begin": "([^\\x{0020}\"'<>/=\\x{0000}-\\x{001F}\\x{007F}-\\x{009F}\\x{FDD0}-\\x{FDEF}\\x{FFFE}\\x{FFFF}\\x{1FFFE}\\x{1FFFF}\\x{2FFFE}\\x{2FFFF}\\x{3FFFE}\\x{3FFFF}\\x{4FFFE}\\x{4FFFF}\\x{5FFFE}\\x{5FFFF}\\x{6FFFE}\\x{6FFFF}\\x{7FFFE}\\x{7FFFF}\\x{8FFFE}\\x{8FFFF}\\x{9FFFE}\\x{9FFFF}\\x{AFFFE}\\x{AFFFF}\\x{BFFFE}\\x{BFFFF}\\x{CFFFE}\\x{CFFFF}\\x{DFFFE}\\x{DFFFF}\\x{EFFFE}\\x{EFFFF}\\x{FFFFE}\\x{FFFFF}\\x{10FFFE}\\x{10FFFF}]+)",
            "beginCaptures": {
              "0": {
                "name": "entity.other.attribute-name.html"
              }
            },
            "comment": "Anything else that is valid",
            "end": "(?=\\s*+[^=\\s])",
            "name": "meta.attribute.unrecognized.$1.html",
            "patterns": [
              {
                "include": "#attribute-interior"
              }
            ]
          },
          {
            "match": "[^\\s>]+",
            "name": "invalid.illegal.character-not-allowed-here.html"
          }
        ]
      },
      "attribute-interior": {
        "patterns": [
          {
            "begin": "=",
            "beginCaptures": {
              "0": {
                "name": "punctuation.separator.key-value.html"
              }
            },
            "end": "(?<=[^\\s=])(?!\\s*=)|(?=/?>)",
            "patterns": [
              {
                "match": "([^\\s\"'=<>`/]|/(?!>))+",
                "name": "string.unquoted.html"
              },
              {
                "begin": "\"",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.html"
                  }
                },
                "end": "\"",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.html"
                  }
                },
                "name": "string.quoted.double.html",
                "patterns": [
                  {
                    "include": "#entities"
                  }
                ]
              },
              {
                "begin": "'",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.html"
                  }
                },
                "end": "'",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.html"
                  }
                },
                "name": "string.quoted.single.html",
                "patterns": [
                  {
                    "include": "#entities"
                  }
                ]
              },
              {
                "match": "=",
                "name": "invalid.illegal.unexpected-equals-sign.html"
              }
            ]
          }
        ]
      },
      "cdata": {
        "begin": "<!\\[CDATA\\[",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.tag.begin.html"
          }
        },
        "contentName": "string.other.inline-data.html",
        "end": "]]>",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.tag.end.html"
          }
        },
        "name": "meta.tag.metadata.cdata.html"
      },
      "comment": {
        "begin": "<!--",
        "captures": {
          "0": {
            "name": "punctuation.definition.comment.html"
          }
        },
        "end": "-->",
        "name": "comment.block.html",
        "patterns": [
          {
            "match": "\\G-?>",
            "name": "invalid.illegal.characters-not-allowed-here.html"
          },
          {
            "match": "<!--(?!>)|<!-(?=-->)",
            "name": "invalid.illegal.characters-not-allowed-here.html"
          },
          {
            "match": "--!>",
            "name": "invalid.illegal.characters-not-allowed-here.html"
          }
        ]
      },
      "core-minus-invalid": {
        "comment": "This should be the root pattern array includes minus #tags-invalid",
        "patterns": [
          {
            "include": "#xml-processing"
          },
          {
            "include": "#comment"
          },
          {
            "include": "#doctype"
          },
          {
            "include": "#cdata"
          },
          {
            "include": "#tags-valid"
          },
          {
            "include": "#entities"
          }
        ]
      },
      "doctype": {
        "begin": "<!(?=(?i:DOCTYPE\\s))",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.tag.begin.html"
          }
        },
        "end": ">",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.tag.end.html"
          }
        },
        "name": "meta.tag.metadata.doctype.html",
        "patterns": [
          {
            "match": "\\G(?i:DOCTYPE)",
            "name": "entity.name.tag.html"
          },
          {
            "begin": "\"",
            "end": "\"",
            "name": "string.quoted.double.html"
          },
          {
            "match": "[^\\s>]+",
            "name": "entity.other.attribute-name.html"
          }
        ]
      },
      "entities": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.entity.html"
              },
              "912": {
                "name": "punctuation.definition.entity.html"
              }
            },
            "comment": "Yes this is a bit ridiculous, there are quite a lot of these",
            "match": "(&)(?=[a-zA-Z])((a(s(ymp(eq)?|cr|t)|n(d(slope|d|v|and)?|g(s(t|ph)|zarr|e|le|rt(vb(d)?)?|msd(a(h|c|d|e|f|a|g|b))?)?)|c(y|irc|d|ute|E)?|tilde|o(pf|gon)|uml|p(id|os|prox(eq)?|e|E|acir)?|elig|f(r)?|w(conint|int)|l(pha|e(ph|fsym))|acute|ring|grave|m(p|a(cr|lg))|breve)|A(s(sign|cr)|nd|MP|c(y|irc)|tilde|o(pf|gon)|uml|pplyFunction|fr|Elig|lpha|acute|ring|grave|macr|breve))|(B(scr|cy|opf|umpeq|e(cause|ta|rnoullis)|fr|a(ckslash|r(v|wed))|reve)|b(s(cr|im(e)?|ol(hsub|b)?|emi)|n(ot|e(quiv)?)|c(y|ong)|ig(s(tar|qcup)|c(irc|up|ap)|triangle(down|up)|o(times|dot|plus)|uplus|vee|wedge)|o(t(tom)?|pf|wtie|x(h(d|u|D|U)?|times|H(d|u|D|U)?|d(R|l|r|L)|u(R|l|r|L)|plus|D(R|l|r|L)|v(R|h|H|l|r|L)?|U(R|l|r|L)|V(R|h|H|l|r|L)?|minus|box))|Not|dquo|u(ll(et)?|mp(e(q)?|E)?)|prime|e(caus(e)?|t(h|ween|a)|psi|rnou|mptyv)|karow|fr|l(ock|k(1(2|4)|34)|a(nk|ck(square|triangle(down|left|right)?|lozenge)))|a(ck(sim(eq)?|cong|prime|epsilon)|r(vee|wed(ge)?))|r(eve|vbar)|brk(tbrk)?))|(c(s(cr|u(p(e)?|b(e)?))|h(cy|i|eck(mark)?)|ylcty|c(irc|ups(sm)?|edil|a(ps|ron))|tdot|ir(scir|c(eq|le(d(R|circ|S|dash|ast)|arrow(left|right)))?|e|fnint|E|mid)?|o(n(int|g(dot)?)|p(y(sr)?|f|rod)|lon(e(q)?)?|m(p(fn|le(xes|ment))?|ma(t)?))|dot|u(darr(l|r)|p(s|c(up|ap)|or|dot|brcap)?|e(sc|pr)|vee|wed|larr(p)?|r(vearrow(left|right)|ly(eq(succ|prec)|vee|wedge)|arr(m)?|ren))|e(nt(erdot)?|dil|mptyv)|fr|w(conint|int)|lubs(uit)?|a(cute|p(s|c(up|ap)|dot|and|brcup)?|r(on|et))|r(oss|arr))|C(scr|hi|c(irc|onint|edil|aron)|ircle(Minus|Times|Dot|Plus)|Hcy|o(n(tourIntegral|int|gruent)|unterClockwiseContourIntegral|p(f|roduct)|lon(e)?)|dot|up(Cap)?|OPY|e(nterDot|dilla)|fr|lo(seCurly(DoubleQuote|Quote)|ckwiseContourIntegral)|a(yleys|cute|p(italDifferentialD)?)|ross))|(d(s(c(y|r)|trok|ol)|har(l|r)|c(y|aron)|t(dot|ri(f)?)|i(sin|e|v(ide(ontimes)?|onx)?|am(s|ond(suit)?)?|gamma)|Har|z(cy|igrarr)|o(t(square|plus|eq(dot)?|minus)?|ublebarwedge|pf|wn(harpoon(left|right)|downarrows|arrow)|llar)|d(otseq|a(rr|gger))?|u(har|arr)|jcy|e(lta|g|mptyv)|f(isht|r)|wangle|lc(orn|rop)|a(sh(v)?|leth|rr|gger)|r(c(orn|rop)|bkarow)|b(karow|lac)|Arr)|D(s(cr|trok)|c(y|aron)|Scy|i(fferentialD|a(critical(Grave|Tilde|Do(t|ubleAcute)|Acute)|mond))|o(t(Dot|Equal)?|uble(Right(Tee|Arrow)|ContourIntegral|Do(t|wnArrow)|Up(DownArrow|Arrow)|VerticalBar|L(ong(RightArrow|Left(RightArrow|Arrow))|eft(RightArrow|Tee|Arrow)))|pf|wn(Right(TeeVector|Vector(Bar)?)|Breve|Tee(Arrow)?|arrow|Left(RightVector|TeeVector|Vector(Bar)?)|Arrow(Bar|UpArrow)?))|Zcy|el(ta)?|D(otrahd)?|Jcy|fr|a(shv|rr|gger)))|(e(s(cr|im|dot)|n(sp|g)|c(y|ir(c)?|olon|aron)|t(h|a)|o(pf|gon)|dot|u(ro|ml)|p(si(v|lon)?|lus|ar(sl)?)|e|D(ot|Dot)|q(s(im|lant(less|gtr))|c(irc|olon)|u(iv(DD)?|est|als)|vparsl)|f(Dot|r)|l(s(dot)?|inters|l)?|a(ster|cute)|r(Dot|arr)|g(s(dot)?|rave)?|x(cl|ist|p(onentiale|ectation))|m(sp(1(3|4))?|pty(set|v)?|acr))|E(s(cr|im)|c(y|irc|aron)|ta|o(pf|gon)|NG|dot|uml|TH|psilon|qu(ilibrium|al(Tilde)?)|fr|lement|acute|grave|x(ists|ponentialE)|m(pty(SmallSquare|VerySmallSquare)|acr)))|(f(scr|nof|cy|ilig|o(pf|r(k(v)?|all))|jlig|partint|emale|f(ilig|l(ig|lig)|r)|l(tns|lig|at)|allingdotseq|r(own|a(sl|c(1(2|8|3|4|5|6)|78|2(3|5)|3(8|4|5)|45|5(8|6)))))|F(scr|cy|illed(SmallSquare|VerySmallSquare)|o(uriertrf|pf|rAll)|fr))|(G(scr|c(y|irc|edil)|t|opf|dot|T|Jcy|fr|amma(d)?|reater(Greater|SlantEqual|Tilde|Equal(Less)?|FullEqual|Less)|g|breve)|g(s(cr|im(e|l)?)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|irc)|t(c(c|ir)|dot|quest|lPar|r(sim|dot|eq(qless|less)|less|a(pprox|rr)))?|imel|opf|dot|jcy|e(s(cc|dot(o(l)?)?|l(es)?)?|q(slant|q)?|l)?|v(nE|ertneqq)|fr|E(l)?|l(j|E|a)?|a(cute|p|mma(d)?)|rave|g(g)?|breve))|(h(s(cr|trok|lash)|y(phen|bull)|circ|o(ok(leftarrow|rightarrow)|pf|arr|rbar|mtht)|e(llip|arts(uit)?|rcon)|ks(earow|warow)|fr|a(irsp|lf|r(dcy|r(cir|w)?)|milt)|bar|Arr)|H(s(cr|trok)|circ|ilbertSpace|o(pf|rizontalLine)|ump(DownHump|Equal)|fr|a(cek|t)|ARDcy))|(i(s(cr|in(s(v)?|dot|v|E)?)|n(care|t(cal|prod|e(rcal|gers)|larhk)?|odot|fin(tie)?)?|c(y|irc)?|t(ilde)?|i(nfin|i(nt|int)|ota)?|o(cy|ta|pf|gon)|u(kcy|ml)|jlig|prod|e(cy|xcl)|quest|f(f|r)|acute|grave|m(of|ped|a(cr|th|g(part|e|line))))|I(scr|n(t(e(rsection|gral))?|visible(Comma|Times))|c(y|irc)|tilde|o(ta|pf|gon)|dot|u(kcy|ml)|Ocy|Jlig|fr|Ecy|acute|grave|m(plies|a(cr|ginaryI))?))|(j(s(cr|ercy)|c(y|irc)|opf|ukcy|fr|math)|J(s(cr|ercy)|c(y|irc)|opf|ukcy|fr))|(k(scr|hcy|c(y|edil)|opf|jcy|fr|appa(v)?|green)|K(scr|c(y|edil)|Hcy|opf|Jcy|fr|appa))|(l(s(h|cr|trok|im(e|g)?|q(uo(r)?|b)|aquo)|h(ar(d|u(l)?)|blk)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|ub|e(il|dil)|aron)|Barr|t(hree|c(c|ir)|imes|dot|quest|larr|r(i(e|f)?|Par))?|Har|o(ng(left(arrow|rightarrow)|rightarrow|mapsto)|times|z(enge|f)?|oparrow(left|right)|p(f|lus|ar)|w(ast|bar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|r(dhar|ushar))|ur(dshar|uhar)|jcy|par(lt)?|e(s(s(sim|dot|eq(qgtr|gtr)|approx|gtr)|cc|dot(o(r)?)?|g(es)?)?|q(slant|q)?|ft(harpoon(down|up)|threetimes|leftarrows|arrow(tail)?|right(squigarrow|harpoons|arrow(s)?))|g)?|v(nE|ertneqq)|f(isht|loor|r)|E(g)?|l(hard|corner|tri|arr)?|a(ng(d|le)?|cute|t(e(s)?|ail)?|p|emptyv|quo|rr(sim|hk|tl|pl|fs|lp|b(fs)?)?|gran|mbda)|r(har(d)?|corner|tri|arr|m)|g(E)?|m(idot|oust(ache)?)|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr))|L(s(h|cr|trok)|c(y|edil|aron)|t|o(ng(RightArrow|left(arrow|rightarrow)|rightarrow|Left(RightArrow|Arrow))|pf|wer(RightArrow|LeftArrow))|T|e(ss(Greater|SlantEqual|Tilde|EqualGreater|FullEqual|Less)|ft(Right(Vector|Arrow)|Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|rightarrow|Floor|A(ngleBracket|rrow(RightArrow|Bar)?)))|Jcy|fr|l(eftarrow)?|a(ng|cute|placetrf|rr|mbda)|midot))|(M(scr|cy|inusPlus|opf|u|e(diumSpace|llintrf)|fr|ap)|m(s(cr|tpos)|ho|nplus|c(y|omma)|i(nus(d(u)?|b)?|cro|d(cir|dot|ast)?)|o(dels|pf)|dash|u(ltimap|map)?|p|easuredangle|DDot|fr|l(cp|dr)|a(cr|p(sto(down|up|left)?)?|l(t(ese)?|e)|rker)))|(n(s(hort(parallel|mid)|c(cue|e|r)?|im(e(q)?)?|u(cc(eq)?|p(set(eq(q)?)?|e|E)?|b(set(eq(q)?)?|e|E)?)|par|qsu(pe|be)|mid)|Rightarrow|h(par|arr|Arr)|G(t(v)?|g)|c(y|ong(dot)?|up|edil|a(p|ron))|t(ilde|lg|riangle(left(eq)?|right(eq)?)|gl)|i(s(d)?|v)?|o(t(ni(v(c|a|b))?|in(dot|v(c|a|b)|E)?)?|pf)|dash|u(m(sp|ero)?)?|jcy|p(olint|ar(sl|t|allel)?|r(cue|e(c(eq)?)?)?)|e(s(im|ear)|dot|quiv|ar(hk|r(ow)?)|xist(s)?|Arr)?|v(sim|infin|Harr|dash|Dash|l(t(rie)?|e|Arr)|ap|r(trie|Arr)|g(t|e))|fr|w(near|ar(hk|r(ow)?)|Arr)|V(dash|Dash)|l(sim|t(ri(e)?)?|dr|e(s(s)?|q(slant|q)?|ft(arrow|rightarrow))?|E|arr|Arr)|a(ng|cute|tur(al(s)?)?|p(id|os|prox|E)?|bla)|r(tri(e)?|ightarrow|arr(c|w)?|Arr)|g(sim|t(r)?|e(s|q(slant|q)?)?|E)|mid|L(t(v)?|eft(arrow|rightarrow)|l)|b(sp|ump(e)?))|N(scr|c(y|edil|aron)|tilde|o(nBreakingSpace|Break|t(R(ightTriangle(Bar|Equal)?|everseElement)|Greater(Greater|SlantEqual|Tilde|Equal|FullEqual|Less)?|S(u(cceeds(SlantEqual|Tilde|Equal)?|perset(Equal)?|bset(Equal)?)|quareSu(perset(Equal)?|bset(Equal)?))|Hump(DownHump|Equal)|Nested(GreaterGreater|LessLess)|C(ongruent|upCap)|Tilde(Tilde|Equal|FullEqual)?|DoubleVerticalBar|Precedes(SlantEqual|Equal)?|E(qual(Tilde)?|lement|xists)|VerticalBar|Le(ss(Greater|SlantEqual|Tilde|Equal|Less)?|ftTriangle(Bar|Equal)?))?|pf)|u|e(sted(GreaterGreater|LessLess)|wLine|gative(MediumSpace|Thi(nSpace|ckSpace)|VeryThinSpace))|Jcy|fr|acute))|(o(s(cr|ol|lash)|h(m|bar)|c(y|ir(c)?)|ti(lde|mes(as)?)|S|int|opf|d(sold|iv|ot|ash|blac)|uml|p(erp|lus|ar)|elig|vbar|f(cir|r)|l(c(ir|ross)|t|ine|arr)|a(st|cute)|r(slope|igof|or|d(er(of)?|f|m)?|v|arr)?|g(t|on|rave)|m(i(nus|cron|d)|ega|acr))|O(s(cr|lash)|c(y|irc)|ti(lde|mes)|opf|dblac|uml|penCurly(DoubleQuote|Quote)|ver(B(ar|rac(e|ket))|Parenthesis)|fr|Elig|acute|r|grave|m(icron|ega|acr)))|(p(s(cr|i)|h(i(v)?|one|mmat)|cy|i(tchfork|v)?|o(intint|und|pf)|uncsp|er(cnt|tenk|iod|p|mil)|fr|l(us(sim|cir|two|d(o|u)|e|acir|mn|b)?|an(ck(h)?|kv))|ar(s(im|l)|t|a(llel)?)?|r(sim|n(sim|E|ap)|cue|ime(s)?|o(d|p(to)?|f(surf|line|alar))|urel|e(c(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?)?|E|ap)?|m)|P(s(cr|i)|hi|cy|i|o(incareplane|pf)|fr|lusMinus|artialD|r(ime|o(duct|portion(al)?)|ecedes(SlantEqual|Tilde|Equal)?)?))|(q(scr|int|opf|u(ot|est(eq)?|at(int|ernions))|prime|fr)|Q(scr|opf|UOT|fr))|(R(s(h|cr)|ho|c(y|edil|aron)|Barr|ight(Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|Floor|A(ngleBracket|rrow(Bar|LeftArrow)?))|o(undImplies|pf)|uleDelayed|e(verse(UpEquilibrium|E(quilibrium|lement)))?|fr|EG|a(ng|cute|rr(tl)?)|rightarrow)|r(s(h|cr|q(uo(r)?|b)|aquo)|h(o(v)?|ar(d|u(l)?))|nmid|c(y|ub|e(il|dil)|aron)|Barr|t(hree|imes|ri(e|f|ltri)?)|i(singdotseq|ng|ght(squigarrow|harpoon(down|up)|threetimes|left(harpoons|arrows)|arrow(tail)?|rightarrows))|Har|o(times|p(f|lus|ar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|ldhar)|uluhar|p(polint|ar(gt)?)|e(ct|al(s|ine|part)?|g)|f(isht|loor|r)|l(har|arr|m)|a(ng(d|e|le)?|c(ute|e)|t(io(nals)?|ail)|dic|emptyv|quo|rr(sim|hk|c|tl|pl|fs|w|lp|ap|b(fs)?)?)|rarr|x|moust(ache)?|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr)))|(s(s(cr|tarf|etmn|mile)|h(y|c(hcy|y)|ort(parallel|mid)|arp)|c(sim|y|n(sim|E|ap)|cue|irc|polint|e(dil)?|E|a(p|ron))?|t(ar(f)?|r(ns|aight(phi|epsilon)))|i(gma(v|f)?|m(ne|dot|plus|e(q)?|l(E)?|rarr|g(E)?)?)|zlig|o(pf|ftcy|l(b(ar)?)?)|dot(e|b)?|u(ng|cc(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?|p(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|hs(ol|ub)|1|n(e|E)|2|d(sub|ot)|3|plus|e(dot)?|E|larr|mult)?|m|b(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|n(e|E)|dot|plus|e(dot)?|E|rarr|mult)?)|pa(des(uit)?|r)|e(swar|ct|tm(n|inus)|ar(hk|r(ow)?)|xt|mi|Arr)|q(su(p(set(eq)?|e)?|b(set(eq)?|e)?)|c(up(s)?|ap(s)?)|u(f|ar(e|f))?)|fr(own)?|w(nwar|ar(hk|r(ow)?)|Arr)|larr|acute|rarr|m(t(e(s)?)?|i(d|le)|eparsl|a(shp|llsetminus))|bquo)|S(scr|hort(RightArrow|DownArrow|UpArrow|LeftArrow)|c(y|irc|edil|aron)?|tar|igma|H(cy|CHcy)|opf|u(c(hThat|ceeds(SlantEqual|Tilde|Equal)?)|p(set|erset(Equal)?)?|m|b(set(Equal)?)?)|OFTcy|q(uare(Su(perset(Equal)?|bset(Equal)?)|Intersection|Union)?|rt)|fr|acute|mallCircle))|(t(s(hcy|c(y|r)|trok)|h(i(nsp|ck(sim|approx))|orn|e(ta(sym|v)?|re(4|fore))|k(sim|ap))|c(y|edil|aron)|i(nt|lde|mes(d|b(ar)?)?)|o(sa|p(cir|f(ork)?|bot)?|ea)|dot|prime|elrec|fr|w(ixt|ohead(leftarrow|rightarrow))|a(u|rget)|r(i(sb|time|dot|plus|e|angle(down|q|left(eq)?|right(eq)?)?|minus)|pezium|ade)|brk)|T(s(cr|trok)|RADE|h(i(nSpace|ckSpace)|e(ta|refore))|c(y|edil|aron)|S(cy|Hcy)|ilde(Tilde|Equal|FullEqual)?|HORN|opf|fr|a(u|b)|ripleDot))|(u(scr|h(ar(l|r)|blk)|c(y|irc)|t(ilde|dot|ri(f)?)|Har|o(pf|gon)|d(har|arr|blac)|u(arr|ml)|p(si(h|lon)?|harpoon(left|right)|downarrow|uparrows|lus|arrow)|f(isht|r)|wangle|l(c(orn(er)?|rop)|tri)|a(cute|rr)|r(c(orn(er)?|rop)|tri|ing)|grave|m(l|acr)|br(cy|eve)|Arr)|U(scr|n(ion(Plus)?|der(B(ar|rac(e|ket))|Parenthesis))|c(y|irc)|tilde|o(pf|gon)|dblac|uml|p(si(lon)?|downarrow|Tee(Arrow)?|per(RightArrow|LeftArrow)|DownArrow|Equilibrium|arrow|Arrow(Bar|DownArrow)?)|fr|a(cute|rr(ocir)?)|ring|grave|macr|br(cy|eve)))|(v(s(cr|u(pn(e|E)|bn(e|E)))|nsu(p|b)|cy|Bar(v)?|zigzag|opf|dash|prop|e(e(eq|bar)?|llip|r(t|bar))|Dash|fr|ltri|a(ngrt|r(s(igma|u(psetneq(q)?|bsetneq(q)?))|nothing|t(heta|riangle(left|right))|p(hi|i|ropto)|epsilon|kappa|r(ho)?))|rtri|Arr)|V(scr|cy|opf|dash(l)?|e(e|r(yThinSpace|t(ical(Bar|Separator|Tilde|Line))?|bar))|Dash|vdash|fr|bar))|(w(scr|circ|opf|p|e(ierp|d(ge(q)?|bar))|fr|r(eath)?)|W(scr|circ|opf|edge|fr))|(X(scr|i|opf|fr)|x(s(cr|qcup)|h(arr|Arr)|nis|c(irc|up|ap)|i|o(time|dot|p(f|lus))|dtri|u(tri|plus)|vee|fr|wedge|l(arr|Arr)|r(arr|Arr)|map))|(y(scr|c(y|irc)|icy|opf|u(cy|ml)|en|fr|ac(y|ute))|Y(scr|c(y|irc)|opf|uml|Icy|Ucy|fr|acute|Acy))|(z(scr|hcy|c(y|aron)|igrarr|opf|dot|e(ta|etrf)|fr|w(nj|j)|acute)|Z(scr|c(y|aron)|Hcy|opf|dot|e(ta|roWidthSpace)|fr|acute)))(;)",
            "name": "constant.character.entity.named.$2.html"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.entity.html"
              },
              "3": {
                "name": "punctuation.definition.entity.html"
              }
            },
            "match": "(&)#[0-9]+(;)",
            "name": "constant.character.entity.numeric.decimal.html"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.entity.html"
              },
              "3": {
                "name": "punctuation.definition.entity.html"
              }
            },
            "match": "(&)#[xX][0-9a-fA-F]+(;)",
            "name": "constant.character.entity.numeric.hexadecimal.html"
          },
          {
            "match": "&(?=[a-zA-Z0-9]+;)",
            "name": "invalid.illegal.ambiguous-ampersand.html"
          }
        ]
      },
      "math": {
        "patterns": [
          {
            "begin": "(?i)(<)(math)(?=\\s|/?>)(?:(([^\"'>]|\"[^\"]*\"|'[^']*')*)(>))?",
            "beginCaptures": {
              "0": {
                "name": "meta.tag.structure.$2.start.html"
              },
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              },
              "3": {
                "patterns": [
                  {
                    "include": "#attribute"
                  }
                ]
              },
              "5": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "end": "(?i)(</)(\\2)\\s*(>)",
            "endCaptures": {
              "0": {
                "name": "meta.tag.structure.$2.end.html"
              },
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              },
              "3": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.element.structure.$2.html",
            "patterns": [
              {
                "begin": "(?<!>)\\G",
                "end": ">",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "name": "meta.tag.structure.start.html",
                "patterns": [
                  {
                    "include": "#attribute"
                  }
                ]
              },
              {
                "include": "#tags"
              }
            ]
          }
        ],
        "repository": {
          "attribute": {
            "patterns": [
              {
                "begin": "(s(hift|ymmetric|cript(sizemultiplier|level|minsize)|t(ackalign|retchy)|ide|u(pscriptshift|bscriptshift)|e(parator(s)?|lection)|rc)|h(eight|ref)|n(otation|umalign)|c(haralign|olumn(spa(n|cing)|width|lines|align)|lose|rossout)|i(n(dent(shift(first|last)?|target|align(first|last)?)|fixlinebreakstyle)|d)|o(pen|verflow)|d(i(splay(style)?|r)|e(nomalign|cimalpoint|pth))|position|e(dge|qual(columns|rows))|voffset|f(orm|ence|rame(spacing)?)|width|l(space|ine(thickness|leading|break(style|multchar)?)|o(ngdivstyle|cation)|ength|quote|argeop)|a(c(cent(under)?|tiontype)|l(t(text|img(-(height|valign|width))?)|ign(mentscope)?))|r(space|ow(spa(n|cing)|lines|align)|quote)|groupalign|x(link:href|mlns)|m(in(size|labelspacing)|ovablelimits|a(th(size|color|variant|background)|xsize))|bevelled)(?![\\w:-])",
                "beginCaptures": {
                  "0": {
                    "name": "entity.other.attribute-name.html"
                  }
                },
                "end": "(?=\\s*+[^=\\s])",
                "name": "meta.attribute.$1.html",
                "patterns": [
                  {
                    "include": "#attribute-interior"
                  }
                ]
              },
              {
                "begin": "([^\\x{0020}\"'<>/=\\x{0000}-\\x{001F}\\x{007F}-\\x{009F}\\x{FDD0}-\\x{FDEF}\\x{FFFE}\\x{FFFF}\\x{1FFFE}\\x{1FFFF}\\x{2FFFE}\\x{2FFFF}\\x{3FFFE}\\x{3FFFF}\\x{4FFFE}\\x{4FFFF}\\x{5FFFE}\\x{5FFFF}\\x{6FFFE}\\x{6FFFF}\\x{7FFFE}\\x{7FFFF}\\x{8FFFE}\\x{8FFFF}\\x{9FFFE}\\x{9FFFF}\\x{AFFFE}\\x{AFFFF}\\x{BFFFE}\\x{BFFFF}\\x{CFFFE}\\x{CFFFF}\\x{DFFFE}\\x{DFFFF}\\x{EFFFE}\\x{EFFFF}\\x{FFFFE}\\x{FFFFF}\\x{10FFFE}\\x{10FFFF}]+)",
                "beginCaptures": {
                  "0": {
                    "name": "entity.other.attribute-name.html"
                  }
                },
                "comment": "Anything else that is valid",
                "end": "(?=\\s*+[^=\\s])",
                "name": "meta.attribute.unrecognized.$1.html",
                "patterns": [
                  {
                    "include": "#attribute-interior"
                  }
                ]
              },
              {
                "match": "[^\\s>]+",
                "name": "invalid.illegal.character-not-allowed-here.html"
              }
            ]
          },
          "tags": {
            "patterns": [
              {
                "include": "#comment"
              },
              {
                "include": "#cdata"
              },
              {
                "captures": {
                  "0": {
                    "name": "meta.tag.structure.math.$2.void.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  "5": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "match": "(?i)(<)(annotation|annotation-xml|semantics|menclose|merror|mfenced|mfrac|mpadded|mphantom|mroot|mrow|msqrt|mstyle|mmultiscripts|mover|mprescripts|msub|msubsup|msup|munder|munderover|none|mlabeledtr|mtable|mtd|mtr|mlongdiv|mscarries|mscarry|msgroup|msline|msrow|mstack|maction)(?=\\s|/?>)(?:(([^\"'>]|\"[^\"]*\"|'[^']*')*)(/>))",
                "name": "meta.element.structure.math.$2.html"
              },
              {
                "begin": "(?i)(<)(annotation|annotation-xml|semantics|menclose|merror|mfenced|mfrac|mpadded|mphantom|mroot|mrow|msqrt|mstyle|mmultiscripts|mover|mprescripts|msub|msubsup|msup|munder|munderover|none|mlabeledtr|mtable|mtd|mtr|mlongdiv|mscarries|mscarry|msgroup|msline|msrow|mstack|maction)(?=\\s|/?>)(?:(([^\"'>]|\"[^\"]*\"|'[^']*')*)(>))?",
                "beginCaptures": {
                  "0": {
                    "name": "meta.tag.structure.math.$2.start.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  "5": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "end": "(?i)(</)(\\2)\\s*(>)|(/>)|(?=</\\w+)",
                "endCaptures": {
                  "0": {
                    "name": "meta.tag.structure.math.$2.end.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "name": "punctuation.definition.tag.end.html"
                  },
                  "4": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "name": "meta.element.structure.math.$2.html",
                "patterns": [
                  {
                    "begin": "(?<!>)\\G",
                    "end": "(?=/>)|>",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.definition.tag.end.html"
                      }
                    },
                    "name": "meta.tag.structure.start.html",
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  {
                    "include": "#tags"
                  }
                ]
              },
              {
                "captures": {
                  "0": {
                    "name": "meta.tag.inline.math.$2.void.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  "5": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "match": "(?i)(<)(mi|mn|mo|ms|mspace|mtext|maligngroup|malignmark)(?=\\s|/?>)(?:(([^\"'>]|\"[^\"]*\"|'[^']*')*)(/>))",
                "name": "meta.element.inline.math.$2.html"
              },
              {
                "begin": "(?i)(<)(mi|mn|mo|ms|mspace|mtext|maligngroup|malignmark)(?=\\s|/?>)(?:(([^\"'>]|\"[^\"]*\"|'[^']*')*)(>))?",
                "beginCaptures": {
                  "0": {
                    "name": "meta.tag.inline.math.$2.start.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  "5": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "end": "(?i)(</)(\\2)\\s*(>)|(/>)|(?=</\\w+)",
                "endCaptures": {
                  "0": {
                    "name": "meta.tag.inline.math.$2.end.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "name": "punctuation.definition.tag.end.html"
                  },
                  "4": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "name": "meta.element.inline.math.$2.html",
                "patterns": [
                  {
                    "begin": "(?<!>)\\G",
                    "end": "(?=/>)|>",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.definition.tag.end.html"
                      }
                    },
                    "name": "meta.tag.inline.start.html",
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  {
                    "include": "#tags"
                  }
                ]
              },
              {
                "captures": {
                  "0": {
                    "name": "meta.tag.object.math.$2.void.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  "5": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "match": "(?i)(<)(mglyph)(?=\\s|/?>)(?:(([^\"'>]|\"[^\"]*\"|'[^']*')*)(/>))",
                "name": "meta.element.object.math.$2.html"
              },
              {
                "begin": "(?i)(<)(mglyph)(?=\\s|/?>)(?:(([^\"'>]|\"[^\"]*\"|'[^']*')*)(>))?",
                "beginCaptures": {
                  "0": {
                    "name": "meta.tag.object.math.$2.start.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  "5": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "end": "(?i)(</)(\\2)\\s*(>)|(/>)|(?=</\\w+)",
                "endCaptures": {
                  "0": {
                    "name": "meta.tag.object.math.$2.end.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "name": "punctuation.definition.tag.end.html"
                  },
                  "4": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "name": "meta.element.object.math.$2.html",
                "patterns": [
                  {
                    "begin": "(?<!>)\\G",
                    "end": "(?=/>)|>",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.definition.tag.end.html"
                      }
                    },
                    "name": "meta.tag.object.start.html",
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  {
                    "include": "#tags"
                  }
                ]
              },
              {
                "captures": {
                  "0": {
                    "name": "meta.tag.other.invalid.void.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "name": "invalid.illegal.unrecognized-tag.html"
                  },
                  "4": {
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  "6": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "match": "(?i)(<)(([\\w:]+))(?=\\s|/?>)(?:(([^\"'>]|\"[^\"]*\"|'[^']*')*)(/>))",
                "name": "meta.element.other.invalid.html"
              },
              {
                "begin": "(?i)(<)((\\w[^\\s>]*))(?=\\s|/?>)(?:(([^\"'>]|\"[^\"]*\"|'[^']*')*)(>))?",
                "beginCaptures": {
                  "0": {
                    "name": "meta.tag.other.invalid.start.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "name": "invalid.illegal.unrecognized-tag.html"
                  },
                  "4": {
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  "6": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "end": "(?i)(</)((\\2))\\s*(>)|(/>)|(?=</\\w+)",
                "endCaptures": {
                  "0": {
                    "name": "meta.tag.other.invalid.end.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "name": "invalid.illegal.unrecognized-tag.html"
                  },
                  "4": {
                    "name": "punctuation.definition.tag.end.html"
                  },
                  "5": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "name": "meta.element.other.invalid.html",
                "patterns": [
                  {
                    "begin": "(?<!>)\\G",
                    "end": "(?=/>)|>",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.definition.tag.end.html"
                      }
                    },
                    "name": "meta.tag.other.invalid.start.html",
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  {
                    "include": "#tags"
                  }
                ]
              },
              {
                "include": "#tags-invalid"
              }
            ]
          }
        }
      },
      "svg": {
        "patterns": [
          {
            "begin": "(?i)(<)(svg)(?=\\s|/?>)(?:(([^\"'>]|\"[^\"]*\"|'[^']*')*)(>))?",
            "beginCaptures": {
              "0": {
                "name": "meta.tag.structure.$2.start.html"
              },
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              },
              "3": {
                "patterns": [
                  {
                    "include": "#attribute"
                  }
                ]
              },
              "5": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "end": "(?i)(</)(\\2)\\s*(>)",
            "endCaptures": {
              "0": {
                "name": "meta.tag.structure.$2.end.html"
              },
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              },
              "3": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.element.structure.$2.html",
            "patterns": [
              {
                "begin": "(?<!>)\\G",
                "end": ">",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "name": "meta.tag.structure.start.html",
                "patterns": [
                  {
                    "include": "#attribute"
                  }
                ]
              },
              {
                "include": "#tags"
              }
            ]
          }
        ],
        "repository": {
          "attribute": {
            "patterns": [
              {
                "begin": "(s(hape-rendering|ystemLanguage|cale|t(yle|itchTiles|op-(color|opacity)|dDeviation|em(h|v)|artOffset|r(i(ng|kethrough-(thickness|position))|oke(-(opacity|dash(offset|array)|width|line(cap|join)|miterlimit))?))|urfaceScale|p(e(cular(Constant|Exponent)|ed)|acing|readMethod)|eed|lope)|h(oriz-(origin-x|adv-x)|eight|anging|ref(lang)?)|y(1|2|ChannelSelector)?|n(umOctaves|ame)|c(y|o(ntentS(criptType|tyleType)|lor(-(interpolation(-filters)?|profile|rendering))?)|ursor|l(ip(-(path|rule)|PathUnits)?|ass)|a(p-height|lcMode)|x)|t(ype|o|ext(-(decoration|anchor|rendering)|Length)|a(rget(X|Y)?|b(index|leValues))|ransform)|i(n(tercept|2)?|d(eographic)?|mage-rendering)|z(oomAndPan)?|o(p(erator|acity)|ver(flow|line-(thickness|position))|ffset|r(i(ent(ation)?|gin)|der))|d(y|i(splay|visor|ffuseConstant|rection)|ominant-baseline|ur|e(scent|celerate)|x)?|u(1|n(i(code(-(range|bidi))?|ts-per-em)|derline-(thickness|position))|2)|p(ing|oint(s(At(X|Y|Z))?|er-events)|a(nose-1|t(h(Length)?|tern(ContentUnits|Transform|Units))|int-order)|r(imitiveUnits|eserveA(spectRatio|lpha)))|e(n(d|able-background)|dgeMode|levation|x(ternalResourcesRequired|ponent))|v(i(sibility|ew(Box|Target))|-(hanging|ideographic|alphabetic|mathematical)|e(ctor-effect|r(sion|t-(origin-(y|x)|adv-y)))|alues)|k(1|2|3|e(y(Splines|Times|Points)|rn(ing|el(Matrix|UnitLength)))|4)?|f(y|il(ter(Res|Units)?|l(-(opacity|rule))?)|o(nt-(s(t(yle|retch)|ize(-adjust)?)|variant|family|weight)|rmat)|lood-(color|opacity)|r(om)?|x)|w(idth(s)?|ord-spacing|riting-mode)|l(i(ghting-color|mitingConeAngle)|ocal|e(ngthAdjust|tter-spacing)|ang)|a(scent|cc(umulate|ent-height)|ttribute(Name|Type)|zimuth|dditive|utoReverse|l(ignment-baseline|phabetic|lowReorder)|rabic-form|mplitude)|r(y|otate|e(s(tart|ult)|ndering-intent|peat(Count|Dur)|quired(Extensions|Features)|f(X|Y|errerPolicy)|l)|adius|x)?|g(1|2|lyph(Ref|-(name|orientation-(horizontal|vertical)))|radient(Transform|Units))|x(1|2|ChannelSelector|-height|link:(show|href|t(ype|itle)|a(ctuate|rcrole)|role)|ml:(space|lang|base))?|m(in|ode|e(thod|dia)|a(sk(ContentUnits|Units)?|thematical|rker(Height|-(start|end|mid)|Units|Width)|x))|b(y|ias|egin|ase(Profile|line-shift|Frequency)|box))(?![\\w:-])",
                "beginCaptures": {
                  "0": {
                    "name": "entity.other.attribute-name.html"
                  }
                },
                "end": "(?=\\s*+[^=\\s])",
                "name": "meta.attribute.$1.html",
                "patterns": [
                  {
                    "include": "#attribute-interior"
                  }
                ]
              },
              {
                "begin": "([^\\x{0020}\"'<>/=\\x{0000}-\\x{001F}\\x{007F}-\\x{009F}\\x{FDD0}-\\x{FDEF}\\x{FFFE}\\x{FFFF}\\x{1FFFE}\\x{1FFFF}\\x{2FFFE}\\x{2FFFF}\\x{3FFFE}\\x{3FFFF}\\x{4FFFE}\\x{4FFFF}\\x{5FFFE}\\x{5FFFF}\\x{6FFFE}\\x{6FFFF}\\x{7FFFE}\\x{7FFFF}\\x{8FFFE}\\x{8FFFF}\\x{9FFFE}\\x{9FFFF}\\x{AFFFE}\\x{AFFFF}\\x{BFFFE}\\x{BFFFF}\\x{CFFFE}\\x{CFFFF}\\x{DFFFE}\\x{DFFFF}\\x{EFFFE}\\x{EFFFF}\\x{FFFFE}\\x{FFFFF}\\x{10FFFE}\\x{10FFFF}]+)",
                "beginCaptures": {
                  "0": {
                    "name": "entity.other.attribute-name.html"
                  }
                },
                "comment": "Anything else that is valid",
                "end": "(?=\\s*+[^=\\s])",
                "name": "meta.attribute.unrecognized.$1.html",
                "patterns": [
                  {
                    "include": "#attribute-interior"
                  }
                ]
              },
              {
                "match": "[^\\s>]+",
                "name": "invalid.illegal.character-not-allowed-here.html"
              }
            ]
          },
          "tags": {
            "patterns": [
              {
                "include": "#comment"
              },
              {
                "include": "#cdata"
              },
              {
                "captures": {
                  "0": {
                    "name": "meta.tag.metadata.svg.$2.void.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  "5": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "match": "(?i)(<)(color-profile|desc|metadata|script|style|title)(?=\\s|/?>)(?:(([^\"'>]|\"[^\"]*\"|'[^']*')*)(/>))",
                "name": "meta.element.metadata.svg.$2.html"
              },
              {
                "begin": "(?i)(<)(color-profile|desc|metadata|script|style|title)(?=\\s|/?>)(?:(([^\"'>]|\"[^\"]*\"|'[^']*')*)(>))?",
                "beginCaptures": {
                  "0": {
                    "name": "meta.tag.metadata.svg.$2.start.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  "5": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "end": "(?i)(</)(\\2)\\s*(>)|(/>)|(?=</\\w+)",
                "endCaptures": {
                  "0": {
                    "name": "meta.tag.metadata.svg.$2.end.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "name": "punctuation.definition.tag.end.html"
                  },
                  "4": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "name": "meta.element.metadata.svg.$2.html",
                "patterns": [
                  {
                    "begin": "(?<!>)\\G",
                    "end": "(?=/>)|>",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.definition.tag.end.html"
                      }
                    },
                    "name": "meta.tag.metadata.start.html",
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  {
                    "include": "#tags"
                  }
                ]
              },
              {
                "captures": {
                  "0": {
                    "name": "meta.tag.structure.svg.$2.void.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  "5": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "match": "(?i)(<)(animateMotion|clipPath|defs|feComponentTransfer|feDiffuseLighting|feMerge|feSpecularLighting|filter|g|hatch|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|pattern|radialGradient|switch|text|textPath)(?=\\s|/?>)(?:(([^\"'>]|\"[^\"]*\"|'[^']*')*)(/>))",
                "name": "meta.element.structure.svg.$2.html"
              },
              {
                "begin": "(?i)(<)(animateMotion|clipPath|defs|feComponentTransfer|feDiffuseLighting|feMerge|feSpecularLighting|filter|g|hatch|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|pattern|radialGradient|switch|text|textPath)(?=\\s|/?>)(?:(([^\"'>]|\"[^\"]*\"|'[^']*')*)(>))?",
                "beginCaptures": {
                  "0": {
                    "name": "meta.tag.structure.svg.$2.start.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  "5": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "end": "(?i)(</)(\\2)\\s*(>)|(/>)|(?=</\\w+)",
                "endCaptures": {
                  "0": {
                    "name": "meta.tag.structure.svg.$2.end.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "name": "punctuation.definition.tag.end.html"
                  },
                  "4": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "name": "meta.element.structure.svg.$2.html",
                "patterns": [
                  {
                    "begin": "(?<!>)\\G",
                    "end": "(?=/>)|>",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.definition.tag.end.html"
                      }
                    },
                    "name": "meta.tag.structure.start.html",
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  {
                    "include": "#tags"
                  }
                ]
              },
              {
                "captures": {
                  "0": {
                    "name": "meta.tag.inline.svg.$2.void.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  "5": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "match": "(?i)(<)(a|animate|discard|feBlend|feColorMatrix|feComposite|feConvolveMatrix|feDisplacementMap|feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur|feMergeNode|feMorphology|feOffset|fePointLight|feSpotLight|feTile|feTurbulence|hatchPath|mpath|set|solidcolor|stop|tspan)(?=\\s|/?>)(?:(([^\"'>]|\"[^\"]*\"|'[^']*')*)(/>))",
                "name": "meta.element.inline.svg.$2.html"
              },
              {
                "begin": "(?i)(<)(a|animate|discard|feBlend|feColorMatrix|feComposite|feConvolveMatrix|feDisplacementMap|feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur|feMergeNode|feMorphology|feOffset|fePointLight|feSpotLight|feTile|feTurbulence|hatchPath|mpath|set|solidcolor|stop|tspan)(?=\\s|/?>)(?:(([^\"'>]|\"[^\"]*\"|'[^']*')*)(>))?",
                "beginCaptures": {
                  "0": {
                    "name": "meta.tag.inline.svg.$2.start.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  "5": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "end": "(?i)(</)(\\2)\\s*(>)|(/>)|(?=</\\w+)",
                "endCaptures": {
                  "0": {
                    "name": "meta.tag.inline.svg.$2.end.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "name": "punctuation.definition.tag.end.html"
                  },
                  "4": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "name": "meta.element.inline.svg.$2.html",
                "patterns": [
                  {
                    "begin": "(?<!>)\\G",
                    "end": "(?=/>)|>",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.definition.tag.end.html"
                      }
                    },
                    "name": "meta.tag.inline.start.html",
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  {
                    "include": "#tags"
                  }
                ]
              },
              {
                "captures": {
                  "0": {
                    "name": "meta.tag.object.svg.$2.void.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  "5": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "match": "(?i)(<)(circle|ellipse|feImage|foreignObject|image|line|path|polygon|polyline|rect|symbol|use|view)(?=\\s|/?>)(?:(([^\"'>]|\"[^\"]*\"|'[^']*')*)(/>))",
                "name": "meta.element.object.svg.$2.html"
              },
              {
                "begin": "(?i)(<)(a|circle|ellipse|feImage|foreignObject|image|line|path|polygon|polyline|rect|symbol|use|view)(?=\\s|/?>)(?:(([^\"'>]|\"[^\"]*\"|'[^']*')*)(>))?",
                "beginCaptures": {
                  "0": {
                    "name": "meta.tag.object.svg.$2.start.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  "5": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "end": "(?i)(</)(\\2)\\s*(>)|(/>)|(?=</\\w+)",
                "endCaptures": {
                  "0": {
                    "name": "meta.tag.object.svg.$2.end.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "name": "punctuation.definition.tag.end.html"
                  },
                  "4": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "name": "meta.element.object.svg.$2.html",
                "patterns": [
                  {
                    "begin": "(?<!>)\\G",
                    "end": "(?=/>)|>",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.definition.tag.end.html"
                      }
                    },
                    "name": "meta.tag.object.start.html",
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  {
                    "include": "#tags"
                  }
                ]
              },
              {
                "captures": {
                  "0": {
                    "name": "meta.tag.other.svg.$2.void.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "name": "invalid.deprecated.html"
                  },
                  "4": {
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  "6": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "match": "(?i)(<)((altGlyph|altGlyphDef|altGlyphItem|animateColor|animateTransform|cursor|font|font-face|font-face-format|font-face-name|font-face-src|font-face-uri|glyph|glyphRef|hkern|missing-glyph|tref|vkern))(?=\\s|/?>)(?:(([^\"'>]|\"[^\"]*\"|'[^']*')*)(/>))",
                "name": "meta.element.other.svg.$2.html"
              },
              {
                "begin": "(?i)(<)((altGlyph|altGlyphDef|altGlyphItem|animateColor|animateTransform|cursor|font|font-face|font-face-format|font-face-name|font-face-src|font-face-uri|glyph|glyphRef|hkern|missing-glyph|tref|vkern))(?=\\s|/?>)(?:(([^\"'>]|\"[^\"]*\"|'[^']*')*)(>))?",
                "beginCaptures": {
                  "0": {
                    "name": "meta.tag.other.svg.$2.start.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "name": "invalid.deprecated.html"
                  },
                  "4": {
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  "6": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "end": "(?i)(</)((\\2))\\s*(>)|(/>)|(?=</\\w+)",
                "endCaptures": {
                  "0": {
                    "name": "meta.tag.other.svg.$2.end.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "name": "invalid.deprecated.html"
                  },
                  "4": {
                    "name": "punctuation.definition.tag.end.html"
                  },
                  "5": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "name": "meta.element.other.svg.$2.html",
                "patterns": [
                  {
                    "begin": "(?<!>)\\G",
                    "end": "(?=/>)|>",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.definition.tag.end.html"
                      }
                    },
                    "name": "meta.tag.other.start.html",
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  {
                    "include": "#tags"
                  }
                ]
              },
              {
                "captures": {
                  "0": {
                    "name": "meta.tag.other.invalid.void.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "name": "invalid.illegal.unrecognized-tag.html"
                  },
                  "4": {
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  "6": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "match": "(?i)(<)(([\\w:]+))(?=\\s|/?>)(?:(([^\"'>]|\"[^\"]*\"|'[^']*')*)(/>))",
                "name": "meta.element.other.invalid.html"
              },
              {
                "begin": "(?i)(<)((\\w[^\\s>]*))(?=\\s|/?>)(?:(([^\"'>]|\"[^\"]*\"|'[^']*')*)(>))?",
                "beginCaptures": {
                  "0": {
                    "name": "meta.tag.other.invalid.start.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "name": "invalid.illegal.unrecognized-tag.html"
                  },
                  "4": {
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  "6": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "end": "(?i)(</)((\\2))\\s*(>)|(/>)|(?=</\\w+)",
                "endCaptures": {
                  "0": {
                    "name": "meta.tag.other.invalid.end.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "name": "invalid.illegal.unrecognized-tag.html"
                  },
                  "4": {
                    "name": "punctuation.definition.tag.end.html"
                  },
                  "5": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "name": "meta.element.other.invalid.html",
                "patterns": [
                  {
                    "begin": "(?<!>)\\G",
                    "end": "(?=/>)|>",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.definition.tag.end.html"
                      }
                    },
                    "name": "meta.tag.other.invalid.start.html",
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  {
                    "include": "#tags"
                  }
                ]
              },
              {
                "include": "#tags-invalid"
              }
            ]
          }
        }
      },
      "tags-invalid": {
        "patterns": [
          {
            "begin": "(</?)((\\w[^\\s>]*))(?<!/)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              },
              "3": {
                "name": "invalid.illegal.unrecognized-tag.html"
              }
            },
            "end": "((?: ?/)?>)",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.other.$2.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          }
        ]
      },
      "tags-valid": {
        "patterns": [
          {
            "begin": "(^[ \\t]+)?(?=<(?i:style)\\b(?!-))",
            "beginCaptures": {
              "1": {
                "name": "punctuation.whitespace.embedded.leading.html"
              }
            },
            "end": "(?!\\G)([ \\t]*$\\n?)?",
            "endCaptures": {
              "1": {
                "name": "punctuation.whitespace.embedded.trailing.html"
              }
            },
            "patterns": [
              {
                "begin": "(?i)(<)(style)(?=\\s|/?>)",
                "beginCaptures": {
                  "0": {
                    "name": "meta.tag.metadata.style.start.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  }
                },
                "end": "(?i)((<)/)(style)\\s*(>)",
                "endCaptures": {
                  "0": {
                    "name": "meta.tag.metadata.style.end.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "source.css-ignored-vscode"
                  },
                  "3": {
                    "name": "entity.name.tag.html"
                  },
                  "4": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "name": "meta.embedded.block.html",
                "patterns": [
                  {
                    "begin": "\\G",
                    "captures": {
                      "1": {
                        "name": "punctuation.definition.tag.end.html"
                      }
                    },
                    "end": "(>)",
                    "name": "meta.tag.metadata.style.start.html",
                    "patterns": [
                      {
                        "include": "#attribute"
                      }
                    ]
                  },
                  {
                    "begin": "(?!\\G)",
                    "end": "(?=</(?i:style))",
                    "name": "source.css",
                    "patterns": [
                      {
                        "include": "source.css"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "begin": "(^[ \\t]+)?(?=<(?i:script)\\b(?!-))",
            "beginCaptures": {
              "1": {
                "name": "punctuation.whitespace.embedded.leading.html"
              }
            },
            "end": "(?!\\G)([ \\t]*$\\n?)?",
            "endCaptures": {
              "1": {
                "name": "punctuation.whitespace.embedded.trailing.html"
              }
            },
            "patterns": [
              {
                "begin": "(<)((?i:script))\\b",
                "beginCaptures": {
                  "0": {
                    "name": "meta.tag.metadata.script.start.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  }
                },
                "end": "(/)((?i:script))(>)",
                "endCaptures": {
                  "0": {
                    "name": "meta.tag.metadata.script.end.html"
                  },
                  "1": {
                    "name": "punctuation.definition.tag.begin.html"
                  },
                  "2": {
                    "name": "entity.name.tag.html"
                  },
                  "3": {
                    "name": "punctuation.definition.tag.end.html"
                  }
                },
                "name": "meta.embedded.block.html",
                "patterns": [
                  {
                    "begin": "\\G",
                    "end": "(?=/)",
                    "patterns": [
                      {
                        "begin": "(>)",
                        "beginCaptures": {
                          "0": {
                            "name": "meta.tag.metadata.script.start.html"
                          },
                          "1": {
                            "name": "punctuation.definition.tag.end.html"
                          }
                        },
                        "end": "((<))(?=/(?i:script))",
                        "endCaptures": {
                          "0": {
                            "name": "meta.tag.metadata.script.end.html"
                          },
                          "1": {
                            "name": "punctuation.definition.tag.begin.html"
                          },
                          "2": {
                            "name": "source.js-ignored-vscode"
                          }
                        },
                        "patterns": [
                          {
                            "begin": "\\G",
                            "end": "(?=</(?i:script))",
                            "name": "source.js",
                            "patterns": [
                              {
                                "begin": "(^[ \\t]+)?(?=//)",
                                "beginCaptures": {
                                  "1": {
                                    "name": "punctuation.whitespace.comment.leading.js"
                                  }
                                },
                                "end": "(?!\\G)",
                                "patterns": [
                                  {
                                    "begin": "//",
                                    "beginCaptures": {
                                      "0": {
                                        "name": "punctuation.definition.comment.js"
                                      }
                                    },
                                    "end": "(?=</script)|\\n",
                                    "name": "comment.line.double-slash.js"
                                  }
                                ]
                              },
                              {
                                "begin": "/\\*",
                                "captures": {
                                  "0": {
                                    "name": "punctuation.definition.comment.js"
                                  }
                                },
                                "end": "\\*/|(?=</script)",
                                "name": "comment.block.js"
                              },
                              {
                                "include": "source.js"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "begin": "\\G",
                        "end": "(?ix:\n\t\t\t\t\t\t\t\t\t\t\t\t(?=>\t\t\t\t\t\t\t\t\t\t\t# Tag without type attribute\n\t\t\t\t\t\t\t\t\t\t\t\t  | type(?=[\\s=])\n\t\t\t\t\t\t\t\t\t\t\t\t  \t(?!\\s*=\\s*\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t''\t\t\t\t\t\t\t\t# Empty\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  | \"\"\t\t\t\t\t\t\t\t\t#   Values\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  | ('|\"|)\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext/\t\t\t\t\t\t\t# Text mime-types\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tjavascript(1\\.[0-5])?\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  | x-javascript\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  | jscript\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  | livescript\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  | (x-)?ecmascript\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  | babel\t\t\t\t\t\t# Javascript variant currently\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t#   recognized as such\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  \t)\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  | application/\t\t\t\t\t# Application mime-types\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  \t(\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(x-)?javascript\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  | (x-)?ecmascript\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  | module\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  \t)\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[\\s\"'>]\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t)",
                        "name": "meta.tag.metadata.script.start.html",
                        "patterns": [
                          {
                            "include": "#attribute"
                          }
                        ]
                      },
                      {
                        "begin": "(?ix:\n\t\t\t\t\t\t\t\t\t\t\t\t(?=\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype\\s*=\\s*\n\t\t\t\t\t\t\t\t\t\t\t\t\t('|\"|)\n\t\t\t\t\t\t\t\t\t\t\t\t\ttext/\n\t\t\t\t\t\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tx-handlebars\n\t\t\t\t\t\t\t\t\t\t\t\t\t  | (x-(handlebars-)?|ng-)?template\n\t\t\t\t\t\t\t\t\t\t\t\t\t  | html\n\t\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t\t\t[\\s\"'>]\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t)",
                        "end": "((<))(?=/(?i:script))",
                        "endCaptures": {
                          "0": {
                            "name": "meta.tag.metadata.script.end.html"
                          },
                          "1": {
                            "name": "punctuation.definition.tag.begin.html"
                          },
                          "2": {
                            "name": "text.html.basic"
                          }
                        },
                        "patterns": [
                          {
                            "begin": "\\G",
                            "end": "(>)",
                            "endCaptures": {
                              "1": {
                                "name": "punctuation.definition.tag.end.html"
                              }
                            },
                            "name": "meta.tag.metadata.script.start.html",
                            "patterns": [
                              {
                                "include": "#attribute"
                              }
                            ]
                          },
                          {
                            "begin": "(?!\\G)",
                            "end": "(?=</(?i:script))",
                            "name": "text.html.basic",
                            "patterns": [
                              {
                                "include": "text.html.basic"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "begin": "(?=(?i:type))",
                        "end": "(<)(?=/(?i:script))",
                        "endCaptures": {
                          "0": {
                            "name": "meta.tag.metadata.script.end.html"
                          },
                          "1": {
                            "name": "punctuation.definition.tag.begin.html"
                          }
                        },
                        "patterns": [
                          {
                            "begin": "\\G",
                            "end": "(>)",
                            "endCaptures": {
                              "1": {
                                "name": "punctuation.definition.tag.end.html"
                              }
                            },
                            "name": "meta.tag.metadata.script.start.html",
                            "patterns": [
                              {
                                "include": "#attribute"
                              }
                            ]
                          },
                          {
                            "begin": "(?!\\G)",
                            "end": "(?=</(?i:script))",
                            "name": "source.unknown"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?i)(<)(base|link|meta)(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              }
            },
            "end": "/?>",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.metadata.$2.void.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "begin": "(?i)(<)(noscript|title)(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.metadata.$2.start.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "begin": "(?i)(</)(noscript|title)(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.metadata.$2.end.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "begin": "(?i)(<)(col|hr|input)(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              }
            },
            "end": "/?>",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.structure.$2.void.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "begin": "(?i)(<)(address|article|aside|blockquote|body|button|caption|colgroup|datalist|dd|details|dialog|div|dl|dt|fieldset|figcaption|figure|footer|form|head|header|hgroup|html|h[1-6]|label|legend|li|main|map|menu|meter|nav|ol|optgroup|option|output|p|pre|progress|section|select|slot|summary|table|tbody|td|template|textarea|tfoot|th|thead|tr|ul)(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.structure.$2.start.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "begin": "(?i)(</)(address|article|aside|blockquote|body|button|caption|colgroup|datalist|dd|details|dialog|div|dl|dt|fieldset|figcaption|figure|footer|form|head|header|hgroup|html|h[1-6]|label|legend|li|main|map|menu|meter|nav|ol|optgroup|option|output|p|pre|progress|section|select|slot|summary|table|tbody|td|template|textarea|tfoot|th|thead|tr|ul)(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.structure.$2.end.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "begin": "(?i)(<)(area|br|wbr)(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              }
            },
            "end": "/?>",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.inline.$2.void.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "begin": "(?i)(<)(a|abbr|b|bdi|bdo|cite|code|data|del|dfn|em|i|ins|kbd|mark|q|rp|rt|ruby|s|samp|small|span|strong|sub|sup|time|u|var)(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.inline.$2.start.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "begin": "(?i)(</)(a|abbr|b|bdi|bdo|cite|code|data|del|dfn|em|i|ins|kbd|mark|q|rp|rt|ruby|s|samp|small|span|strong|sub|sup|time|u|var)(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.inline.$2.end.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "begin": "(?i)(<)(embed|img|param|source|track)(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              }
            },
            "end": "/?>",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.object.$2.void.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "begin": "(?i)(<)(audio|canvas|iframe|object|picture|video)(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.object.$2.start.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "begin": "(?i)(</)(audio|canvas|iframe|object|picture|video)(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.object.$2.end.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "begin": "(?i)(<)((basefont|isindex))(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              },
              "3": {
                "name": "invalid.deprecated.html"
              }
            },
            "end": "/?>",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.metadata.$2.void.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "begin": "(?i)(<)((center|frameset|noembed|noframes))(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              },
              "3": {
                "name": "invalid.deprecated.html"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.structure.$2.start.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "begin": "(?i)(</)((center|frameset|noembed|noframes))(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              },
              "3": {
                "name": "invalid.deprecated.html"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.structure.$2.end.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "begin": "(?i)(<)((acronym|big|blink|font|strike|tt|xmp))(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              },
              "3": {
                "name": "invalid.deprecated.html"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.inline.$2.start.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "begin": "(?i)(</)((acronym|big|blink|font|strike|tt|xmp))(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              },
              "3": {
                "name": "invalid.deprecated.html"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.inline.$2.end.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "begin": "(?i)(<)((frame))(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              },
              "3": {
                "name": "invalid.deprecated.html"
              }
            },
            "end": "/?>",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.object.$2.void.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "begin": "(?i)(<)((applet))(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              },
              "3": {
                "name": "invalid.deprecated.html"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.object.$2.start.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "begin": "(?i)(</)((applet))(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              },
              "3": {
                "name": "invalid.deprecated.html"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.object.$2.end.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "begin": "(?i)(<)((dir|keygen|listing|menuitem|plaintext|spacer))(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              },
              "3": {
                "name": "invalid.illegal.no-longer-supported.html"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.other.$2.start.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "begin": "(?i)(</)((dir|keygen|listing|menuitem|plaintext|spacer))(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              },
              "3": {
                "name": "invalid.illegal.no-longer-supported.html"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.other.$2.end.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "include": "#math"
          },
          {
            "include": "#svg"
          },
          {
            "begin": "(<)([a-zA-Z][.0-9_a-zA-Z\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}-\\x{200D}\\x{203F}-\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}]*-[\\-.0-9_a-zA-Z\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}-\\x{200D}\\x{203F}-\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}]*)(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              }
            },
            "end": "/?>",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.custom.start.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          },
          {
            "begin": "(</)([a-zA-Z][.0-9_a-zA-Z\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}-\\x{200D}\\x{203F}-\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}]*-[\\-.0-9_a-zA-Z\\x{00B7}\\x{00C0}-\\x{00D6}\\x{00D8}-\\x{00F6}\\x{00F8}-\\x{037D}\\x{037F}-\\x{1FFF}\\x{200C}-\\x{200D}\\x{203F}-\\x{2040}\\x{2070}-\\x{218F}\\x{2C00}-\\x{2FEF}\\x{3001}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFFD}\\x{10000}-\\x{EFFFF}]*)(?=\\s|/?>)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.begin.html"
              },
              "2": {
                "name": "entity.name.tag.html"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.end.html"
              }
            },
            "name": "meta.tag.custom.end.html",
            "patterns": [
              {
                "include": "#attribute"
              }
            ]
          }
        ]
      },
      "xml-processing": {
        "begin": "(<\\?)(xml)",
        "captures": {
          "1": {
            "name": "punctuation.definition.tag.html"
          },
          "2": {
            "name": "entity.name.tag.html"
          }
        },
        "end": "(\\?>)",
        "name": "meta.tag.metadata.processing.xml.html",
        "patterns": [
          {
            "include": "#attribute"
          }
        ]
      }
    },
    "scopeName": "text.html.basic",
    "embeddedLangs": [
      "javascript",
      "css"
    ]
  },
  {
    "displayName": "SQL",
    "name": "sql",
    "patterns": [
      {
        "match": "((?<!@)@)\\b(\\w+)\\b",
        "name": "text.variable"
      },
      {
        "match": "(\\[)[^\\]]*(\\])",
        "name": "text.bracketed"
      },
      {
        "include": "#comments"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.other.create.sql"
          },
          "2": {
            "name": "keyword.other.sql"
          },
          "5": {
            "name": "entity.name.function.sql"
          }
        },
        "match": "(?i:^\\s*(create(?:\\s+or\\s+replace)?)\\s+(aggregate|conversion|database|domain|function|group|(unique\\s+)?index|language|operator class|operator|rule|schema|sequence|table|tablespace|trigger|type|user|view)\\s+)(['\"`]?)(\\w+)\\4",
        "name": "meta.create.sql"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.other.create.sql"
          },
          "2": {
            "name": "keyword.other.sql"
          }
        },
        "match": "(?i:^\\s*(drop)\\s+(aggregate|conversion|database|domain|function|group|index|language|operator class|operator|rule|schema|sequence|table|tablespace|trigger|type|user|view))",
        "name": "meta.drop.sql"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.other.create.sql"
          },
          "2": {
            "name": "keyword.other.table.sql"
          },
          "3": {
            "name": "entity.name.function.sql"
          },
          "4": {
            "name": "keyword.other.cascade.sql"
          }
        },
        "match": "(?i:\\s*(drop)\\s+(table)\\s+(\\w+)(\\s+cascade)?\\b)",
        "name": "meta.drop.sql"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.other.create.sql"
          },
          "2": {
            "name": "keyword.other.table.sql"
          }
        },
        "match": "(?i:^\\s*(alter)\\s+(aggregate|conversion|database|domain|function|group|index|language|operator class|operator|proc(edure)?|rule|schema|sequence|table|tablespace|trigger|type|user|view)\\s+)",
        "name": "meta.alter.sql"
      },
      {
        "captures": {
          "1": {
            "name": "storage.type.sql"
          },
          "2": {
            "name": "storage.type.sql"
          },
          "3": {
            "name": "constant.numeric.sql"
          },
          "4": {
            "name": "storage.type.sql"
          },
          "5": {
            "name": "constant.numeric.sql"
          },
          "6": {
            "name": "storage.type.sql"
          },
          "7": {
            "name": "constant.numeric.sql"
          },
          "8": {
            "name": "constant.numeric.sql"
          },
          "9": {
            "name": "storage.type.sql"
          },
          "10": {
            "name": "constant.numeric.sql"
          },
          "11": {
            "name": "storage.type.sql"
          },
          "12": {
            "name": "storage.type.sql"
          },
          "13": {
            "name": "storage.type.sql"
          },
          "14": {
            "name": "constant.numeric.sql"
          },
          "15": {
            "name": "storage.type.sql"
          }
        },
        "match": "(?xi)\n\n\t\t\t\t# normal stuff, capture 1\n\t\t\t\t \\b(bigint|bigserial|bit|boolean|box|bytea|cidr|circle|date|double\\sprecision|inet|int|integer|line|lseg|macaddr|money|oid|path|point|polygon|real|serial|smallint|sysdate|text)\\b\n\n\t\t\t\t# numeric suffix, capture 2 + 3i\n\t\t\t\t|\\b(bit\\svarying|character\\s(?:varying)?|tinyint|var\\schar|float|interval)\\((\\d+)\\)\n\n\t\t\t\t# optional numeric suffix, capture 4 + 5i\n\t\t\t\t|\\b(char|number|varchar\\d?)\\b(?:\\((\\d+)\\))?\n\n\t\t\t\t# special case, capture 6 + 7i + 8i\n\t\t\t\t|\\b(numeric|decimal)\\b(?:\\((\\d+),(\\d+)\\))?\n\n\t\t\t\t# special case, captures 9, 10i, 11\n\t\t\t\t|\\b(times?)\\b(?:\\((\\d+)\\))?(\\swith(?:out)?\\stime\\szone\\b)?\n\n\t\t\t\t# special case, captures 12, 13, 14i, 15\n\t\t\t\t|\\b(timestamp)(?:(s|tz))?\\b(?:\\((\\d+)\\))?(\\s(with|without)\\stime\\szone\\b)?\n\n\t\t\t"
      },
      {
        "match": "(?i:\\b((?:primary|foreign)\\s+key|references|on\\sdelete(\\s+cascade)?|nocheck|check|constraint|collate|default)\\b)",
        "name": "storage.modifier.sql"
      },
      {
        "match": "\\b\\d+\\b",
        "name": "constant.numeric.sql"
      },
      {
        "match": "(?i:\\b(select(\\s+(all|distinct))?|insert\\s+(ignore\\s+)?into|update|delete|from|set|where|group\\s+by|or|like|and|union(\\s+all)?|having|order\\s+by|limit|cross\\s+join|join|straight_join|(inner|(left|right|full)(\\s+outer)?)\\s+join|natural(\\s+(inner|(left|right|full)(\\s+outer)?))?\\s+join)\\b)",
        "name": "keyword.other.DML.sql"
      },
      {
        "match": "(?i:\\b(on|off|((is\\s+)?not\\s+)?null)\\b)",
        "name": "keyword.other.DDL.create.II.sql"
      },
      {
        "match": "(?i:\\bvalues\\b)",
        "name": "keyword.other.DML.II.sql"
      },
      {
        "match": "(?i:\\b(begin(\\s+work)?|start\\s+transaction|commit(\\s+work)?|rollback(\\s+work)?)\\b)",
        "name": "keyword.other.LUW.sql"
      },
      {
        "match": "(?i:\\b(grant(\\swith\\sgrant\\soption)?|revoke)\\b)",
        "name": "keyword.other.authorization.sql"
      },
      {
        "match": "(?i:\\bin\\b)",
        "name": "keyword.other.data-integrity.sql"
      },
      {
        "match": "(?i:^\\s*(comment\\s+on\\s+(table|column|aggregate|constraint|database|domain|function|index|operator|rule|schema|sequence|trigger|type|view))\\s+.*?\\s+(is)\\s+)",
        "name": "keyword.other.object-comments.sql"
      },
      {
        "match": "(?i)\\bAS\\b",
        "name": "keyword.other.alias.sql"
      },
      {
        "match": "(?i)\\b(DESC|ASC)\\b",
        "name": "keyword.other.order.sql"
      },
      {
        "match": "\\*",
        "name": "keyword.operator.star.sql"
      },
      {
        "match": "[!<>]?=|<>|<|>",
        "name": "keyword.operator.comparison.sql"
      },
      {
        "match": "-|\\+|/",
        "name": "keyword.operator.math.sql"
      },
      {
        "match": "\\|\\|",
        "name": "keyword.operator.concatenator.sql"
      },
      {
        "captures": {
          "1": {
            "name": "support.function.aggregate.sql"
          }
        },
        "match": "(?i)\\b(approx_count_distinct|approx_percentile_cont|approx_percentile_disc|avg|checksum_agg|count|count_big|group|grouping|grouping_id|max|min|sum|stdev|stdevp|var|varp)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.analytic.sql"
          }
        },
        "match": "(?i)\\b(cume_dist|first_value|lag|last_value|lead|percent_rank|percentile_cont|percentile_disc)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.bitmanipulation.sql"
          }
        },
        "match": "(?i)\\b(bit_count|get_bit|left_shift|right_shift|set_bit)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.conversion.sql"
          }
        },
        "match": "(?i)\\b(cast|convert|parse|try_cast|try_convert|try_parse)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.collation.sql"
          }
        },
        "match": "(?i)\\b(collationproperty|tertiary_weights)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.cryptographic.sql"
          }
        },
        "match": "(?i)\\b(asymkey_id|asymkeyproperty|certproperty|cert_id|crypt_gen_random|decryptbyasymkey|decryptbycert|decryptbykey|decryptbykeyautoasymkey|decryptbykeyautocert|decryptbypassphrase|encryptbyasymkey|encryptbycert|encryptbykey|encryptbypassphrase|hashbytes|is_objectsigned|key_guid|key_id|key_name|signbyasymkey|signbycert|symkeyproperty|verifysignedbycert|verifysignedbyasymkey)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.cursor.sql"
          }
        },
        "match": "(?i)\\b(cursor_status)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.datetime.sql"
          }
        },
        "match": "(?i)\\b(sysdatetime|sysdatetimeoffset|sysutcdatetime|current_time(stamp)?|getdate|getutcdate|datename|datepart|day|month|year|datefromparts|datetime2fromparts|datetimefromparts|datetimeoffsetfromparts|smalldatetimefromparts|timefromparts|datediff|dateadd|datetrunc|eomonth|switchoffset|todatetimeoffset|isdate|date_bucket)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.datatype.sql"
          }
        },
        "match": "(?i)\\b(datalength|ident_current|ident_incr|ident_seed|identity|sql_variant_property)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.expression.sql"
          }
        },
        "match": "(?i)\\b(coalesce|nullif)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.globalvar.sql"
          }
        },
        "match": "(?<!@)@@(?i)\\b(cursor_rows|connections|cpu_busy|datefirst|dbts|error|fetch_status|identity|idle|io_busy|langid|language|lock_timeout|max_connections|max_precision|nestlevel|options|packet_errors|pack_received|pack_sent|procid|remserver|rowcount|servername|servicename|spid|textsize|timeticks|total_errors|total_read|total_write|trancount|version)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.json.sql"
          }
        },
        "match": "(?i)\\b(json|isjson|json_object|json_array|json_value|json_query|json_modify|json_path_exists)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.logical.sql"
          }
        },
        "match": "(?i)\\b(choose|iif|greatest|least)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.mathematical.sql"
          }
        },
        "match": "(?i)\\b(abs|acos|asin|atan|atn2|ceiling|cos|cot|degrees|exp|floor|log|log10|pi|power|radians|rand|round|sign|sin|sqrt|square|tan)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.metadata.sql"
          }
        },
        "match": "(?i)\\b(app_name|applock_mode|applock_test|assemblyproperty|col_length|col_name|columnproperty|database_principal_id|databasepropertyex|db_id|db_name|file_id|file_idex|file_name|filegroup_id|filegroup_name|filegroupproperty|fileproperty|fulltextcatalogproperty|fulltextserviceproperty|index_col|indexkey_property|indexproperty|object_definition|object_id|object_name|object_schema_name|objectproperty|objectpropertyex|original_db_name|parsename|schema_id|schema_name|scope_identity|serverproperty|stats_date|type_id|type_name|typeproperty)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.ranking.sql"
          }
        },
        "match": "(?i)\\b(rank|dense_rank|ntile|row_number)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.rowset.sql"
          }
        },
        "match": "(?i)\\b(generate_series|opendatasource|openjson|openrowset|openquery|openxml|predict|string_split)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.security.sql"
          }
        },
        "match": "(?i)\\b(certencoded|certprivatekey|current_user|database_principal_id|has_perms_by_name|is_member|is_rolemember|is_srvrolemember|original_login|permissions|pwdcompare|pwdencrypt|schema_id|schema_name|session_user|suser_id|suser_sid|suser_sname|system_user|suser_name|user_id|user_name)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.string.sql"
          }
        },
        "match": "(?i)\\b(ascii|char|charindex|concat|difference|format|left|len|lower|ltrim|nchar|nodes|patindex|quotename|replace|replicate|reverse|right|rtrim|soundex|space|str|string_agg|string_escape|string_split|stuff|substring|translate|trim|unicode|upper)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.system.sql"
          }
        },
        "match": "(?i)\\b(binary_checksum|checksum|compress|connectionproperty|context_info|current_request_id|current_transaction_id|decompress|error_line|error_message|error_number|error_procedure|error_severity|error_state|formatmessage|get_filestream_transaction_context|getansinull|host_id|host_name|isnull|isnumeric|min_active_rowversion|newid|newsequentialid|rowcount_big|session_context|session_id|xact_state)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.textimage.sql"
          }
        },
        "match": "(?i)\\b(patindex|textptr|textvalid)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "constant.other.database-name.sql"
          },
          "2": {
            "name": "constant.other.table-name.sql"
          }
        },
        "match": "(\\w+?)\\.(\\w+)"
      },
      {
        "include": "#strings"
      },
      {
        "include": "#regexps"
      },
      {
        "match": "\\b(?i)(abort|abort_after_wait|absent|absolute|accent_sensitivity|acceptable_cursopt|acp|action|activation|add|address|admin|aes_128|aes_192|aes_256|affinity|after|aggregate|algorithm|all_constraints|all_errormsgs|all_indexes|all_levels|all_results|allow_connections|allow_dup_row|allow_encrypted_value_modifications|allow_page_locks|allow_row_locks|allow_snapshot_isolation|alter|altercolumn|always|anonymous|ansi_defaults|ansi_null_default|ansi_null_dflt_off|ansi_null_dflt_on|ansi_nulls|ansi_padding|ansi_warnings|appdomain|append|application|apply|arithabort|arithignore|array|assembly|asymmetric|asynchronous_commit|at|atan2|atomic|attach|attach_force_rebuild_log|attach_rebuild_log|audit|auth_realm|authentication|auto|auto_cleanup|auto_close|auto_create_statistics|auto_drop|auto_shrink|auto_update_statistics|auto_update_statistics_async|automated_backup_preference|automatic|autopilot|availability|availability_mode|backup|backup_priority|base64|basic|batches|batchsize|before|between|bigint|binary|binding|bit|block|blockers|blocksize|bmk|both|break|broker|broker_instance|bucket_count|buffer|buffercount|bulk_logged|by|call|caller|card|case|catalog|catch|cert|certificate|change_retention|change_tracking|change_tracking_context|changes|char|character|character_set|check_expiration|check_policy|checkconstraints|checkindex|checkpoint|checksum|cleanup_policy|clear|clear_port|close|clustered|codepage|collection|column_encryption_key|column_master_key|columnstore|columnstore_archive|colv_80_to_100|colv_100_to_80|commit_differential_base|committed|compatibility_level|compress_all_row_groups|compression|compression_delay|concat_null_yields_null|concatenate|configuration|connect|connection|containment|continue|continue_after_error|contract|contract_name|control|conversation|conversation_group_id|conversation_handle|copy|copy_only|count_rows|counter|create(\\\\s+or\\\\s+alter)?|credential|cross|cryptographic|cryptographic_provider|cube|cursor|cursor_close_on_commit|cursor_default|data|data_compression|data_flush_interval_seconds|data_mirroring|data_purity|data_source|database|database_name|database_snapshot|datafiletype|date_correlation_optimization|date|datefirst|dateformat|date_format|datetime|datetime2|datetimeoffset|day(s)?|db_chaining|dbid|dbidexec|dbo_only|deadlock_priority|deallocate|dec|decimal|declare|decrypt|decrypt_a|decryption|default_database|default_fulltext_language|default_language|default_logon_domain|default_schema|definition|delay|delayed_durability|delimitedtext|density_vector|dependent|des|description|desired_state|desx|differential|digest|disable|disable_broker|disable_def_cnst_chk|disabled|disk|distinct|distributed|distribution|drop|drop_existing|dts_buffers|dump|durability|dynamic|edition|elements|else|emergency|empty|enable|enable_broker|enabled|encoding|encrypted|encrypted_value|encryption|encryption_type|end|endpoint|endpoint_url|enhancedintegrity|entry|error_broker_conversations|errorfile|estimateonly|event|except|exec|executable|execute|exists|expand|expiredate|expiry_date|explicit|external|external_access|failover|failover_mode|failure_condition_level|fast|fast_forward|fastfirstrow|federated_service_account|fetch|field_terminator|fieldterminator|file|filelistonly|filegroup|filegrowth|filename|filestream|filestream_log|filestream_on|filetable|file_format|filter|first_row|fips_flagger|fire_triggers|first|firstrow|float|flush_interval_seconds|fmtonly|following|for|force|force_failover_allow_data_loss|force_service_allow_data_loss|forced|forceplan|formatfile|format_options|format_type|formsof|forward_only|free_cursors|free_exec_context|fullscan|fulltext|fulltextall|fulltextkey|function|generated|get|geography|geometry|global|go|goto|governor|guid|hadoop|hardening|hash|hashed|header_limit|headeronly|health_check_timeout|hidden|hierarchyid|histogram|histogram_steps|hits_cursors|hits_exec_context|hour(s)?|http|identity|identity_value|if|ifnull|ignore|ignore_constraints|ignore_dup_key|ignore_dup_row|ignore_triggers|image|immediate|implicit_transactions|include|include_null_values|incremental|index|inflectional|init|initiator|insensitive|insert|instead|int|integer|integrated|intersect|intermediate|interval_length_minutes|into|inuse_cursors|inuse_exec_context|io|is|isabout|iso_week|isolation|job_tracker_location|json|keep|keep_nulls|keep_replication|keepdefaults|keepfixed|keepidentity|keepnulls|kerberos|key|key_path|key_source|key_store_provider_name|keyset|kill|kilobytes_per_batch|labelonly|langid|language|last|lastrow|leading|legacy_cardinality_estimation|length|level|lifetime|lineage_80_to_100|lineage_100_to_80|listener_ip|listener_port|load|loadhistory|lob_compaction|local|local_service_name|locate|location|lock_escalation|lock_timeout|lockres|log|login|login_type|loop|manual|mark_in_use_for_removal|masked|master|match|matched|max_queue_readers|max_duration|max_outstanding_io_per_volume|maxdop|maxerrors|maxlength|maxtransfersize|max_plans_per_query|max_storage_size_mb|mediadescription|medianame|mediapassword|memogroup|memory_optimized|merge|message|message_forward_size|message_forwarding|microsecond|millisecond|minute(s)?|mirror_address|misses_cursors|misses_exec_context|mixed|modify|money|month|move|multi_user|must_change|name|namespace|nanosecond|native|native_compilation|nchar|ncharacter|nested_triggers|never|new_account|new_broker|newname|next|no|no_browsetable|no_checksum|no_compression|no_infomsgs|no_triggers|no_truncate|nocount|noexec|noexpand|noformat|noinit|nolock|nonatomic|nonclustered|nondurable|none|norecompute|norecovery|noreset|norewind|noskip|not|notification|nounload|now|nowait|ntext|ntlm|nulls|numeric|numeric_roundabort|nvarchar|object|objid|oem|offline|old_account|online|operation_mode|open|openjson|optimistic|option|orc|out|outer|output|over|override|owner|ownership|pad_index|page|page_checksum|page_verify|pagecount|paglock|param|parameter_sniffing|parameter_type_expansion|parameterization|parquet|parseonly|partial|partition|partner|password|path|pause|percentage|permission_set|persisted|period|physical_only|plan_forcing_mode|policy|pool|population|ports|preceding|precision|predicate|presume_abort|primary|primary_role|print|prior|priority |priority_level|private|proc(edure)?|procedure_name|profile|provider|quarter|query_capture_mode|query_governor_cost_limit|query_optimizer_hotfixes|query_store|queue|quoted_identifier|raiserror|range|raw|rcfile|rc2|rc4|rc4_128|rdbms|read_committed_snapshot|read|read_only|read_write|readcommitted|readcommittedlock|readonly|readpast|readuncommitted|readwrite|real|rebuild|receive|recmodel_70backcomp|recompile|reconfigure|recovery|recursive|recursive_triggers|redo_queue|reject_sample_value|reject_type|reject_value|relative|remote|remote_data_archive|remote_proc_transactions|remote_service_name|remove|removed_cursors|removed_exec_context|reorganize|repeat|repeatable|repeatableread|replace|replica|replicated|replnick_100_to_80|replnickarray_80_to_100|replnickarray_100_to_80|required|required_cursopt|resample|reset|resource|resource_manager_location|respect|restart|restore|restricted_user|resume|retaindays|retention|return|revert|rewind|rewindonly|returns|robust|role|rollup|root|round_robin|route|row|rowdump|rowguidcol|rowlock|row_terminator|rows|rows_per_batch|rowsets_only|rowterminator|rowversion|rsa_1024|rsa_2048|rsa_3072|rsa_4096|rsa_512|safe|safety|sample|save|scalar|schema|schemabinding|scoped|scroll|scroll_locks|sddl|second|secexpr|seconds|secondary|secondary_only|secondary_role|secret|security|securityaudit|selective|self|send|sent|sequence|serde_method|serializable|server|service|service_broker|service_name|service_objective|session_timeout|session|sessions|seterror|setopts|sets|shard_map_manager|shard_map_name|sharded|shared_memory|shortest_path|show_statistics|showplan_all|showplan_text|showplan_xml|showplan_xml_with_recompile|shrinkdb|shutdown|sid|signature|simple|single_blob|single_clob|single_nclob|single_user|singleton|site|size|size_based_cleanup_mode|skip|smalldatetime|smallint|smallmoney|snapshot|snapshot_import|snapshotrestorephase|soap|softnuma|sort_in_tempdb|sorted_data|sorted_data_reorg|spatial|sql|sql_bigint|sql_binary|sql_bit|sql_char|sql_date|sql_decimal|sql_double|sql_float|sql_guid|sql_handle|sql_longvarbinary|sql_longvarchar|sql_numeric|sql_real|sql_smallint|sql_time|sql_timestamp|sql_tinyint|sql_tsi_day|sql_tsi_frac_second|sql_tsi_hour|sql_tsi_minute|sql_tsi_month|sql_tsi_quarter|sql_tsi_second|sql_tsi_week|sql_tsi_year|sql_type_date|sql_type_time|sql_type_timestamp|sql_varbinary|sql_varchar|sql_variant|sql_wchar|sql_wlongvarchar|ssl|ssl_port|standard|standby|start|start_date|started|stat_header|state|statement|static|statistics|statistics_incremental|statistics_norecompute|statistics_only|statman|stats|stats_stream|status|stop|stop_on_error|stopat|stopatmark|stopbeforemark|stoplist|stopped|string_delimiter|subject|supplemental_logging|supported|suspend|symmetric|synchronous_commit|synonym|sysname|system|system_time|system_versioning|table|tableresults|tablock|tablockx|take|tape|target|target_index|target_partition|target_recovery_time|tcp|temporal_history_retention|text|textimage_on|then|thesaurus|throw|time|timeout|timestamp|tinyint|to|top|torn_page_detection|track_columns_updated|trailing|tran|transaction|transfer|transform_noise_words|triple_des|triple_des_3key|truncate|trustworthy|try|tsql|two_digit_year_cutoff|type|type_desc|type_warning|tzoffset|uid|unbounded|uncommitted|unique|uniqueidentifier|unlimited|unload|unlock|unsafe|updlock|url|use|useplan|useroptions|use_type_default|using|utcdatetime|valid_xml|validation|value|values|varbinary|varchar|verbose|verifyonly|version|view_metadata|virtual_device|visiblity|wait_at_low_priority|waitfor|webmethod|week|weekday|weight|well_formed_xml|when|while|widechar|widechar_ansi|widenative|window|windows|with|within|within group|witness|without|without_array_wrapper|workload|wsdl|xact_abort|xlock|xml|xmlschema|xquery|xsinil|year|zone)\\b",
        "name": "keyword.other.sql"
      },
      {
        "captures": {
          "1": {
            "name": "punctuation.section.scope.begin.sql"
          },
          "2": {
            "name": "punctuation.section.scope.end.sql"
          }
        },
        "comment": "Allow for special ↩ behavior",
        "match": "(\\()(\\))",
        "name": "meta.block.sql"
      }
    ],
    "repository": {
      "comment-block": {
        "begin": "/\\*",
        "captures": {
          "0": {
            "name": "punctuation.definition.comment.sql"
          }
        },
        "end": "\\*/",
        "name": "comment.block",
        "patterns": [
          {
            "include": "#comment-block"
          }
        ]
      },
      "comments": {
        "patterns": [
          {
            "begin": "(^[ \\t]+)?(?=--)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.whitespace.comment.leading.sql"
              }
            },
            "end": "(?!\\G)",
            "patterns": [
              {
                "begin": "--",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.comment.sql"
                  }
                },
                "end": "\\n",
                "name": "comment.line.double-dash.sql"
              }
            ]
          },
          {
            "begin": "(^[ \\t]+)?(?=#)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.whitespace.comment.leading.sql"
              }
            },
            "end": "(?!\\G)",
            "patterns": []
          },
          {
            "include": "#comment-block"
          }
        ]
      },
      "regexps": {
        "patterns": [
          {
            "begin": "/(?=\\S.*/)",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.sql"
              }
            },
            "end": "/",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.sql"
              }
            },
            "name": "string.regexp.sql",
            "patterns": [
              {
                "include": "#string_interpolation"
              },
              {
                "match": "\\\\/",
                "name": "constant.character.escape.slash.sql"
              }
            ]
          },
          {
            "begin": "%r\\{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.sql"
              }
            },
            "comment": "We should probably handle nested bracket pairs!?! -- Allan",
            "end": "\\}",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.sql"
              }
            },
            "name": "string.regexp.modr.sql",
            "patterns": [
              {
                "include": "#string_interpolation"
              }
            ]
          }
        ]
      },
      "string_escape": {
        "match": "\\\\.",
        "name": "constant.character.escape.sql"
      },
      "string_interpolation": {
        "captures": {
          "1": {
            "name": "punctuation.definition.string.begin.sql"
          },
          "3": {
            "name": "punctuation.definition.string.end.sql"
          }
        },
        "match": "(#\\{)([^\\}]*)(\\})",
        "name": "string.interpolated.sql"
      },
      "strings": {
        "patterns": [
          {
            "captures": {
              "2": {
                "name": "punctuation.definition.string.begin.sql"
              },
              "3": {
                "name": "punctuation.definition.string.end.sql"
              }
            },
            "comment": "this is faster than the next begin/end rule since sub-pattern will match till end-of-line and SQL files tend to have very long lines.",
            "match": "(N)?(')[^']*(')",
            "name": "string.quoted.single.sql"
          },
          {
            "begin": "'",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.sql"
              }
            },
            "end": "'",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.sql"
              }
            },
            "name": "string.quoted.single.sql",
            "patterns": [
              {
                "include": "#string_escape"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.string.begin.sql"
              },
              "2": {
                "name": "punctuation.definition.string.end.sql"
              }
            },
            "comment": "this is faster than the next begin/end rule since sub-pattern will match till end-of-line and SQL files tend to have very long lines.",
            "match": "(`)[^`\\\\]*(`)",
            "name": "string.quoted.other.backtick.sql"
          },
          {
            "begin": "`",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.sql"
              }
            },
            "end": "`",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.sql"
              }
            },
            "name": "string.quoted.other.backtick.sql",
            "patterns": [
              {
                "include": "#string_escape"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.string.begin.sql"
              },
              "2": {
                "name": "punctuation.definition.string.end.sql"
              }
            },
            "comment": "this is faster than the next begin/end rule since sub-pattern will match till end-of-line and SQL files tend to have very long lines.",
            "match": "(\")[^\"#]*(\")",
            "name": "string.quoted.double.sql"
          },
          {
            "begin": "\"",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.sql"
              }
            },
            "end": "\"",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.sql"
              }
            },
            "name": "string.quoted.double.sql",
            "patterns": [
              {
                "include": "#string_interpolation"
              }
            ]
          },
          {
            "begin": "%\\{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.sql"
              }
            },
            "end": "\\}",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.sql"
              }
            },
            "name": "string.other.quoted.brackets.sql",
            "patterns": [
              {
                "include": "#string_interpolation"
              }
            ]
          }
        ]
      }
    },
    "scopeName": "source.sql"
  },
  {
    "displayName": "Hack",
    "fileTypes": [
      "hh",
      "php",
      "hack"
    ],
    "foldingStartMarker": "(/\\*|\\{\\s*$|<<<HTML)",
    "foldingStopMarker": "(\\*/|^\\s*\\}|^HTML;)",
    "name": "hack",
    "patterns": [
      {
        "include": "text.html.basic"
      },
      {
        "include": "#language"
      }
    ],
    "repository": {
      "attributes": {
        "patterns": [
          {
            "begin": "(<<)(?!<)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.attributes.php"
              }
            },
            "end": "(>>)",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.attributes.php"
              }
            },
            "name": "meta.attributes.php",
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "match": "([A-Za-z_][A-Za-z0-9_]*)",
                "name": "entity.other.attribute-name.php"
              },
              {
                "begin": "(\\()",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.definition.parameters.begin.php"
                  }
                },
                "end": "(\\))",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.parameters.end.php"
                  }
                },
                "patterns": [
                  {
                    "include": "#language"
                  }
                ]
              }
            ]
          }
        ]
      },
      "class-builtin": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.separator.inheritance.php"
              }
            },
            "match": "(?i)(\\\\)?\\b(st(dClass|reamWrapper)|R(RD(Graph|Creator|Updater)|untimeException|e(sourceBundle|cursive(RegexIterator|Ca(chingIterator|llbackFilterIterator)|TreeIterator|Iterator(Iterator)?|DirectoryIterator|FilterIterator|ArrayIterator)|flect(ion(Method|Class|ZendExtension|Object|P(arameter|roperty)|Extension|Function(Abstract)?)?|or)|gexIterator)|angeException)|G(ender\\Gender|lobIterator|magick(Draw|Pixel)?)|X(sltProcessor|ML(Reader|Writer)|SLTProcessor)|M(ysqlndUh(Connection|PreparedStatement)|ongo(Re(sultException|gex)|Grid(fsFile|FS(Cursor|File)?)|BinData|C(o(de|llection)|ursor(Exception)?|lient)|Timestamp|I(nt(32|64)|d)|D(B(Ref)?|ate)|Pool|Log)?|u(tex|ltipleIterator)|e(ssageFormatter|mcache(d)?))|Bad(MethodCallException|FunctionCallException)|tidy(Node)?|S(tackable|impleXML(Iterator|Element)|oap(Server|Header|Client|Param|Var|Fault)|NMP|CA(_(SoapProxy|LocalProxy))?|p(hinxClient|oofchecker|l(M(inHeap|axHeap)|S(tack|ubject)|Heap|T(ype|empFileObject)|Ob(server|jectStorage)|DoublyLinkedList|PriorityQueue|Enum|Queue|Fi(le(Info|Object)|xedArray)))|e(ssionHandler(Interface)?|ekableIterator|rializable)|DO_(Model_(ReflectionDataObject|Type|Property)|Sequence|D(ata(Object|Factory)|AS_(Relational|XML(_Document)?|Setting|ChangeSummary|Data(Object|Factory)))|Exception|List)|wish(Result(s)?|Search)?|VM(Model)?|QLite(Result|3(Result|Stmt)?|Database|Unbuffered)|AM(Message|Connection))|H(ttp(Re(sponse|quest(Pool)?)|Message|InflateStream|DeflateStream|QueryString)|aru(Image|Outline|D(oc|estination)|Page|Encoder|Font|Annotation))|Yaf_(R(oute(_(Re(write|gex)|Map|S(tatic|imple|upervar)|Interface)|r)|e(sponse_Abstract|quest_(Simple|Http|Abstract)|gistry))|Session|Con(troller_Abstract|fig_(Simple|Ini|Abstract))|Dispatcher|Plugin_Abstract|Exception|View_(Simple|Interface)|Loader|A(ction_Abstract|pplication))|N(o(RewindIterator|rmalizer)|umberFormatter)|C(o(nd|untable|llator)|a(chingIterator|llbackFilterIterator))|T(hread|okyoTyrant(Table|Iterator|Query)?|ra(nsliterator|versable))|I(n(tlDateFormatter|validArgumentException|finiteIterator)|terator(Iterator|Aggregate)?|magick(Draw|Pixel(Iterator)?)?)|php_user_filter|ZipArchive|O(CI-(Collection|Lob)|ut(erIterator|Of(RangeException|BoundsException))|verflowException)|D(irectory(Iterator)?|omainException|OM(XPath|N(ode(list)?|amedNodeMap)|C(haracterData|omment|dataSection)|Text|Implementation|Document(Fragment)?|ProcessingInstruction|E(ntityReference|lement)|Attr)|ate(Time(Zone)?|Interval|Period))|Un(derflowException|expectedValueException)|JsonSerializable|finfo|P(har(Data|FileInfo)?|DO(Statement)?|arentIterator)|E(v(S(tat|ignal)|Ch(ild|eck)|Timer|I(o|dle)|P(eriodic|repare)|Embed|Fork|Watcher|Loop)?|rrorException|xception|mptyIterator)|V(8Js(Exception)?|arnish(Stat|Log|Admin))|KTaglib_(MPEG_(File|AudioProperties)|Tag|ID3v2_(Tag|Frame|AttachedPictureFrame))|QuickHash(StringIntHash|Int(S(tringHash|et)|Hash))|Fil(terIterator|esystemIterator)|mysqli(_(stmt|driver|warning|result))?|W(orker|eak(Map|ref))|L(imitIterator|o(cale|gicException)|ua(Closure)?|engthException|apack)|A(MQP(C(hannel|onnection)|E(nvelope|xchange)|Queue)|ppendIterator|PCIterator|rray(Iterator|Object|Access)))\\b",
            "name": "support.class.builtin.php"
          }
        ]
      },
      "class-name": {
        "patterns": [
          {
            "begin": "(?i)(?=\\\\?[a-z_0-9]+\\\\)",
            "end": "(?i)([a-z_][a-z_0-9]*)?(?=[^a-z0-9_\\\\])",
            "endCaptures": {
              "1": {
                "name": "support.class.php"
              }
            },
            "patterns": [
              {
                "include": "#namespace"
              }
            ]
          },
          {
            "include": "#class-builtin"
          },
          {
            "begin": "(?=[\\\\a-zA-Z_])",
            "end": "(?i)([a-z_][a-z_0-9]*)?(?=[^a-z0-9_\\\\])",
            "endCaptures": {
              "1": {
                "name": "support.class.php"
              }
            },
            "patterns": [
              {
                "include": "#namespace"
              }
            ]
          }
        ]
      },
      "comments": {
        "patterns": [
          {
            "begin": "/\\*\\*(?:#@\\+)?\\s*$",
            "captures": {
              "0": {
                "name": "punctuation.definition.comment.php"
              }
            },
            "comment": "This now only highlights a docblock if the first line contains only /**\n- this is to stop highlighting everything as invalid when people do comment banners with /******** ...\n- Now matches /**#@+ too - used for docblock templates:\n  http://manual.phpdoc.org/HTMLframesConverter/default/phpDocumentor/tutorial_phpDocumentor.howto.pkg.html#basics.docblocktemplate",
            "end": "\\*/",
            "name": "comment.block.documentation.phpdoc.php",
            "patterns": [
              {
                "include": "#php_doc"
              }
            ]
          },
          {
            "begin": "/\\*",
            "captures": {
              "0": {
                "name": "punctuation.definition.comment.php"
              }
            },
            "end": "\\*/",
            "name": "comment.block.php"
          },
          {
            "begin": "(^[ \\t]+)?(?=//)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.whitespace.comment.leading.php"
              }
            },
            "end": "(?!\\G)",
            "patterns": [
              {
                "begin": "//",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.comment.php"
                  }
                },
                "end": "\\n|(?=\\?>)",
                "name": "comment.line.double-slash.php"
              }
            ]
          }
        ]
      },
      "constants": {
        "patterns": [
          {
            "begin": "(?xi)\n(?=\n  (\n    (\\\\[a-z_][a-z_0-9]*\\\\[a-z_][a-z_0-9\\\\]*)\n    |\n    ([a-z_][a-z_0-9]*\\\\[a-z_][a-z_0-9\\\\]*)\n  )\n  [^a-z_0-9\\\\]\n)",
            "end": "(?i)([a-z_][a-z_0-9]*)?(?=[^a-z0-9_\\\\])",
            "endCaptures": {
              "1": {
                "name": "constant.other.php"
              }
            },
            "patterns": [
              {
                "include": "#namespace"
              }
            ]
          },
          {
            "begin": "(?=\\\\?[a-zA-Z_\\x{7f}-\\x{ff}])",
            "end": "(?=[^\\\\a-zA-Z_\\x{7f}-\\x{ff}])",
            "patterns": [
              {
                "match": "(?i)\\b(TRUE|FALSE|NULL|__(FILE|DIR|FUNCTION|CLASS|METHOD|LINE|NAMESPACE)__)\\b",
                "name": "constant.language.php"
              },
              {
                "captures": {
                  "1": {
                    "name": "punctuation.separator.inheritance.php"
                  }
                },
                "match": "(\\\\)?\\b(STD(IN|OUT|ERR)|ZEND_(THREAD_SAFE|DEBUG_BUILD)|DEFAULT_INCLUDE_PATH|P(HP_(R(OUND_HALF_(ODD|DOWN|UP|EVEN)|ELEASE_VERSION)|M(INOR_VERSION|A(XPATHLEN|JOR_VERSION))|BINDIR|S(HLIB_SUFFIX|YSCONFDIR|API)|CONFIG_FILE_(SCAN_DIR|PATH)|INT_(MAX|SIZE)|ZTS|O(S|UTPUT_HANDLER_(START|CONT|END))|D(EBUG|ATADIR)|URL_(SCHEME|HOST|USER|P(ORT|A(SS|TH))|QUERY|FRAGMENT)|PREFIX|E(XT(RA_VERSION|ENSION_DIR)|OL)|VERSION(_ID)?|WINDOWS_(NT_(SERVER|DOMAIN_CONTROLLER|WORKSTATION)|VERSION_(M(INOR|AJOR)|BUILD|S(UITEMASK|P_M(INOR|AJOR))|P(RODUCTTYPE|LATFORM)))|L(IBDIR|OCALSTATEDIR))|EAR_(INSTALL_DIR|EXTENSION_DIR))|E_(RECOVERABLE_ERROR|STRICT|NOTICE|CO(RE_(ERROR|WARNING)|MPILE_(ERROR|WARNING))|DEPRECATED|USER_(NOTICE|DEPRECATED|ERROR|WARNING)|PARSE|ERROR|WARNING|ALL))\\b",
                "name": "support.constant.core.php"
              },
              {
                "captures": {
                  "1": {
                    "name": "punctuation.separator.inheritance.php"
                  }
                },
                "match": "(\\\\)?\\b(RADIXCHAR|GROUPING|M(_(1_PI|SQRT(1_2|2|3|PI)|2_(SQRTPI|PI)|PI(_(2|4))?|E(ULER)?|L(N(10|2|PI)|OG(10E|2E)))|ON_(GROUPING|1(1|2|0)?|7|2|8|THOUSANDS_SEP|3|DECIMAL_POINT|9|4|5|6))|S(TR_PAD_(RIGHT|BOTH|LEFT)|ORT_(REGULAR|STRING|NUMERIC|DESC|LOCALE_STRING|ASC)|EEK_(SET|CUR|END))|H(TML_(SPECIALCHARS|ENTITIES)|ASH_HMAC)|YES(STR|EXPR)|N(_(S(IGN_POSN|EP_BY_SPACE)|CS_PRECEDES)|O(STR|EXPR)|EGATIVE_SIGN|AN)|C(R(YPT_(MD5|BLOWFISH|S(HA(256|512)|TD_DES|ALT_LENGTH)|EXT_DES)|NCYSTR|EDITS_(G(ROUP|ENERAL)|MODULES|SAPI|DOCS|QA|FULLPAGE|ALL))|HAR_MAX|O(NNECTION_(NORMAL|TIMEOUT|ABORTED)|DESET|UNT_(RECURSIVE|NORMAL))|URRENCY_SYMBOL|ASE_(UPPER|LOWER))|__COMPILER_HALT_OFFSET__|T(HOUS(EP|ANDS_SEP)|_FMT(_AMPM)?)|IN(T_(CURR_SYMBOL|FRAC_DIGITS)|I_(S(YSTEM|CANNER_(RAW|NORMAL))|USER|PERDIR|ALL)|F(O_(GENERAL|MODULES|C(REDITS|ONFIGURATION)|ENVIRONMENT|VARIABLES|LICENSE|ALL))?)|D(_(T_FMT|FMT)|IRECTORY_SEPARATOR|ECIMAL_POINT|A(Y_(1|7|2|3|4|5|6)|TE_(R(SS|FC(1(123|036)|2822|8(22|50)|3339))|COOKIE|ISO8601|W3C|ATOM)))|UPLOAD_ERR_(NO_(TMP_DIR|FILE)|CANT_WRITE|INI_SIZE|OK|PARTIAL|EXTENSION|FORM_SIZE)|P(M_STR|_(S(IGN_POSN|EP_BY_SPACE)|CS_PRECEDES)|OSITIVE_SIGN|ATH(_SEPARATOR|INFO_(BASENAME|DIRNAME|EXTENSION|FILENAME)))|E(RA(_(YEAR|T_FMT|D_(T_FMT|FMT)))?|XTR_(REFS|SKIP|IF_EXISTS|OVERWRITE|PREFIX_(SAME|I(NVALID|F_EXISTS)|ALL))|NT_(NOQUOTES|COMPAT|IGNORE|QUOTES))|FRAC_DIGITS|L(C_(M(ONETARY|ESSAGES)|NUMERIC|C(TYPE|OLLATE)|TIME|ALL)|O(G_(MAIL|SYSLOG|N(O(TICE|WAIT)|DELAY|EWS)|C(R(IT|ON)|ONS)|INFO|ODELAY|D(EBUG|AEMON)|U(SER|UCP)|P(ID|ERROR)|E(RR|MERG)|KERN|WARNING|L(OCAL(1|7|2|3|4|5|0|6)|PR)|A(UTH(PRIV)?|LERT))|CK_(SH|NB|UN|EX)))|A(M_STR|B(MON_(1(1|2|0)?|7|2|8|3|9|4|5|6)|DAY_(1|7|2|3|4|5|6))|SSERT_(BAIL|CALLBACK|QUIET_EVAL|WARNING|ACTIVE)|LT_DIGITS))\\b",
                "name": "support.constant.std.php"
              },
              {
                "captures": {
                  "1": {
                    "name": "punctuation.separator.inheritance.php"
                  }
                },
                "match": "(\\\\)?\\b(GLOB_(MARK|BRACE|NO(SORT|CHECK|ESCAPE)|ONLYDIR|ERR|AVAILABLE_FLAGS)|XML_(SAX_IMPL|HTML_DOCUMENT_NODE|N(OTATION_NODE|AMESPACE_DECL_NODE)|C(OMMENT_NODE|DATA_SECTION_NODE)|TEXT_NODE|OPTION_(SKIP_(TAGSTART|WHITE)|CASE_FOLDING|TARGET_ENCODING)|D(TD_NODE|OCUMENT_(NODE|TYPE_NODE|FRAG_NODE))|PI_NODE|E(RROR_(RECURSIVE_ENTITY_REF|MISPLACED_XML_PI|B(INARY_ENTITY_REF|AD_CHAR_REF)|SYNTAX|NO(NE|_(MEMORY|ELEMENTS))|TAG_MISMATCH|IN(CORRECT_ENCODING|VALID_TOKEN)|DUPLICATE_ATTRIBUTE|UN(CLOSED_(CDATA_SECTION|TOKEN)|DEFINED_ENTITY|KNOWN_ENCODING)|JUNK_AFTER_DOC_ELEMENT|PAR(TIAL_CHAR|AM_ENTITY_REF)|EXTERNAL_ENTITY_HANDLING|A(SYNC_ENTITY|TTRIBUTE_EXTERNAL_ENTITY_REF))|NTITY_(REF_NODE|NODE|DECL_NODE)|LEMENT_(NODE|DECL_NODE))|LOCAL_NAMESPACE|ATTRIBUTE_(N(MTOKEN(S)?|O(TATION|DE))|CDATA|ID(REF(S)?)?|DECL_NODE|EN(TITY|UMERATION)))|M(HASH_(RIPEMD(1(28|60)|256|320)|GOST|MD(2|4|5)|S(HA(1|2(24|56)|384|512)|NEFRU256)|HAVAL(1(28|92|60)|2(24|56))|CRC32(B)?|TIGER(1(28|60))?|WHIRLPOOL|ADLER32)|YSQL(_(BOTH|NUM|CLIENT_(SSL|COMPRESS|I(GNORE_SPACE|NTERACTIVE))|ASSOC)|I_(RE(PORT_(STRICT|INDEX|OFF|ERROR|ALL)|FRESH_(GRANT|MASTER|BACKUP_LOG|S(TATUS|LAVE)|HOSTS|T(HREADS|ABLES)|LOG)|AD_DEFAULT_(GROUP|FILE))|GROUP_FLAG|MULTIPLE_KEY_FLAG|B(INARY_FLAG|OTH|LOB_FLAG)|S(T(MT_ATTR_(CURSOR_TYPE|UPDATE_MAX_LENGTH|PREFETCH_ROWS)|ORE_RESULT)|E(RVER_QUERY_(NO_(GOOD_INDEX_USED|INDEX_USED)|WAS_SLOW)|T_(CHARSET_NAME|FLAG)))|N(O(_D(EFAULT_VALUE_FLAG|ATA)|T_NULL_FLAG)|UM(_FLAG)?)|C(URSOR_TYPE_(READ_ONLY|SCROLLABLE|NO_CURSOR|FOR_UPDATE)|LIENT_(SSL|NO_SCHEMA|COMPRESS|I(GNORE_SPACE|NTERACTIVE)|FOUND_ROWS))|T(YPE_(GEOMETRY|MEDIUM_BLOB|B(IT|LOB)|S(HORT|TRING|ET)|YEAR|N(ULL|EWD(ECIMAL|ATE))|CHAR|TI(ME(STAMP)?|NY(_BLOB)?)|INT(24|ERVAL)|D(OUBLE|ECIMAL|ATE(TIME)?)|ENUM|VAR_STRING|FLOAT|LONG(_BLOB|LONG)?)|IMESTAMP_FLAG)|INIT_COMMAND|ZEROFILL_FLAG|O(N_UPDATE_NOW_FLAG|PT_(NET_(READ_BUFFER_SIZE|CMD_BUFFER_SIZE)|CONNECT_TIMEOUT|INT_AND_FLOAT_NATIVE|LOCAL_INFILE))|D(EBUG_TRACE_ENABLED|ATA_TRUNCATED)|U(SE_RESULT|N(SIGNED_FLAG|IQUE_KEY_FLAG))|P(RI_KEY_FLAG|ART_KEY_FLAG)|ENUM_FLAG|A(S(SOC|YNC)|UTO_INCREMENT_FLAG)))|CRYPT_(R(C(2|6)|IJNDAEL_(1(28|92)|256)|AND)|GOST|XTEA|M(ODE_(STREAM|NOFB|C(BC|FB)|OFB|ECB)|ARS)|BLOWFISH(_COMPAT)?|S(ERPENT|KIPJACK|AFER(128|PLUS|64))|C(RYPT|AST_(128|256))|T(RIPLEDES|HREEWAY|WOFISH)|IDEA|3DES|DE(S|CRYPT|V_(RANDOM|URANDOM))|PANAMA|EN(CRYPT|IGNA)|WAKE|LOKI97|ARCFOUR(_IV)?))|S(TREAM_(REPORT_ERRORS|M(UST_SEEK|KDIR_RECURSIVE)|BUFFER_(NONE|FULL|LINE)|S(HUT_(RD(WR)?|WR)|OCK_(R(DM|AW)|S(TREAM|EQPACKET)|DGRAM)|ERVER_(BIND|LISTEN))|NOTIFY_(RE(SOLVE|DIRECTED)|MIME_TYPE_IS|SEVERITY_(INFO|ERR|WARN)|CO(MPLETED|NNECT)|PROGRESS|F(ILE_SIZE_IS|AILURE)|AUTH_RE(SULT|QUIRED))|C(RYPTO_METHOD_(SSLv(2(_(SERVER|CLIENT)|3_(SERVER|CLIENT))|3_(SERVER|CLIENT))|TLS_(SERVER|CLIENT))|LIENT_(CONNECT|PERSISTENT|ASYNC_CONNECT)|AST_(FOR_SELECT|AS_STREAM))|I(GNORE_URL|S_URL|PPROTO_(RAW|TCP|I(CMP|P)|UDP))|O(OB|PTION_(READ_(BUFFER|TIMEOUT)|BLOCKING|WRITE_BUFFER))|U(RL_STAT_(QUIET|LINK)|SE_PATH)|P(EEK|F_(INET(6)?|UNIX))|ENFORCE_SAFE_MODE|FILTER_(READ|WRITE|ALL))|UNFUNCS_RET_(STRING|TIMESTAMP|DOUBLE)|QLITE(_(R(OW|EADONLY)|MIS(MATCH|USE)|B(OTH|USY)|SCHEMA|N(O(MEM|T(FOUND|ADB)|LFS)|UM)|C(O(RRUPT|NSTRAINT)|ANTOPEN)|TOOBIG|I(NTER(RUPT|NAL)|OERR)|OK|DONE|P(ROTOCOL|ERM)|E(RROR|MPTY)|F(ORMAT|ULL)|LOCKED|A(BORT|SSOC|UTH))|3_(B(OTH|LOB)|NU(M|LL)|TEXT|INTEGER|OPEN_(READ(ONLY|WRITE)|CREATE)|FLOAT|ASSOC)))|CURL(M(SG_DONE|_(BAD_(HANDLE|EASY_HANDLE)|CALL_MULTI_PERFORM|INTERNAL_ERROR|O(UT_OF_MEMORY|K)))|SSH_AUTH_(HOST|NONE|DEFAULT|P(UBLICKEY|ASSWORD)|KEYBOARD)|CLOSEPOLICY_(SLOWEST|CALLBACK|OLDEST|LEAST_(RECENTLY_USED|TRAFFIC))|_(HTTP_VERSION_(1_(1|0)|NONE)|NETRC_(REQUIRED|IGNORED|OPTIONAL)|TIMECOND_(IF(MODSINCE|UNMODSINCE)|LASTMOD)|IPRESOLVE_(V(4|6)|WHATEVER)|VERSION_(SSL|IPV6|KERBEROS4|LIBZ))|INFO_(RE(DIRECT_(COUNT|TIME)|QUEST_SIZE)|S(SL_VERIFYRESULT|TARTTRANSFER_TIME|IZE_(DOWNLOAD|UPLOAD)|PEED_(DOWNLOAD|UPLOAD))|H(TTP_CODE|EADER_(SIZE|OUT))|NAMELOOKUP_TIME|C(ON(NECT_TIME|TENT_(TYPE|LENGTH_(DOWNLOAD|UPLOAD)))|ERTINFO)|TOTAL_TIME|PR(IVATE|ETRANSFER_TIME)|EFFECTIVE_URL|FILETIME)|OPT_(R(E(SUME_FROM|TURNTRANSFER|DIR_PROTOCOLS|FERER|AD(DATA|FUNCTION))|AN(GE|DOM_FILE))|MAX(REDIRS|CONNECTS)|B(INARYTRANSFER|UFFERSIZE)|S(S(H_(HOST_PUBLIC_KEY_MD5|P(RIVATE_KEYFILE|UBLIC_KEYFILE)|AUTH_TYPES)|L(CERT(TYPE|PASSWD)?|_(CIPHER_LIST|VERIFY(HOST|PEER))|ENGINE(_DEFAULT)?|VERSION|KEY(TYPE|PASSWD)?))|TDERR)|H(TTP(GET|HEADER|200ALIASES|_VERSION|PROXYTUNNEL|AUTH)|EADER(FUNCTION)?)|N(O(BODY|SIGNAL|PROGRESS)|ETRC)|C(RLF|O(NNECTTIMEOUT(_MS)?|OKIE(SESSION|JAR|FILE)?)|USTOMREQUEST|ERTINFO|LOSEPOLICY|A(INFO|PATH))|T(RANSFERTEXT|CP_NODELAY|IME(CONDITION|OUT(_MS)?|VALUE))|I(N(TERFACE|FILE(SIZE)?)|PRESOLVE)|DNS_(CACHE_TIMEOUT|USE_GLOBAL_CACHE)|U(RL|SER(PWD|AGENT)|NRESTRICTED_AUTH|PLOAD)|P(R(IVATE|O(GRESSFUNCTION|XY(TYPE|USERPWD|PORT|AUTH)?|TOCOLS))|O(RT|ST(REDIR|QUOTE|FIELDS)?)|UT)|E(GDSOCKET|NCODING)|VERBOSE|K(RB4LEVEL|EYPASSWD)|QUOTE|F(RESH_CONNECT|TP(SSLAUTH|_(S(SL|KIP_PASV_IP)|CREATE_MISSING_DIRS|USE_EP(RT|SV)|FILEMETHOD)|PORT|LISTONLY|APPEND)|ILE(TIME)?|O(RBID_REUSE|LLOWLOCATION)|AILONERROR)|WRITE(HEADER|FUNCTION)|LOW_SPEED_(TIME|LIMIT)|AUTOREFERER)|PRO(XY_(SOCKS(4|5)|HTTP)|TO_(S(CP|FTP)|HTTP(S)?|T(ELNET|FTP)|DICT|F(TP(S)?|ILE)|LDAP(S)?|ALL))|E_(RE(CV_ERROR|AD_ERROR)|GOT_NOTHING|MALFORMAT_USER|BAD_(C(ONTENT_ENCODING|ALLING_ORDER)|PASSWORD_ENTERED|FUNCTION_ARGUMENT)|S(S(H|L_(C(IPHER|ONNECT_ERROR|ERTPROBLEM|ACERT)|PEER_CERTIFICATE|ENGINE_(SETFAILED|NOTFOUND)))|HARE_IN_USE|END_ERROR)|HTTP_(RANGE_ERROR|NOT_FOUND|PO(RT_FAILED|ST_ERROR))|COULDNT_(RESOLVE_(HOST|PROXY)|CONNECT)|T(OO_MANY_REDIRECTS|ELNET_OPTION_SYNTAX)|O(BSOLETE|UT_OF_MEMORY|PERATION_TIMEOUTED|K)|U(RL_MALFORMAT(_USER)?|N(SUPPORTED_PROTOCOL|KNOWN_TELNET_OPTION))|PARTIAL_FILE|F(TP_(BAD_DOWNLOAD_RESUME|SSL_FAILED|C(OULDNT_(RETR_FILE|GET_SIZE|S(TOR_FILE|ET_(BINARY|ASCII))|USE_REST)|ANT_(RECONNECT|GET_HOST))|USER_PASSWORD_INCORRECT|PORT_FAILED|QUOTE_ERROR|W(RITE_ERROR|EIRD_(SERVER_REPLY|227_FORMAT|USER_REPLY|PAS(S_REPLY|V_REPLY)))|ACCESS_DENIED)|ILE(SIZE_EXCEEDED|_COULDNT_READ_FILE)|UNCTION_NOT_FOUND|AILED_INIT)|WRITE_ERROR|L(IBRARY_NOT_FOUND|DAP_(SEARCH_FAILED|CANNOT_BIND|INVALID_URL))|ABORTED_BY_CALLBACK)|VERSION_NOW|FTP(METHOD_(MULTICWD|SINGLECWD|NOCWD)|SSL_(NONE|CONTROL|TRY|ALL)|AUTH_(SSL|TLS|DEFAULT))|AUTH_(GSSNEGOTIATE|BASIC|NTLM|DIGEST|ANY(SAFE)?))|I(MAGETYPE_(GIF|XBM|BMP|SWF|COUNT|TIFF_(MM|II)|I(CO|FF)|UNKNOWN|J(B2|P(X|2|C|EG(2000)?))|P(SD|NG)|WBMP)|NPUT_(REQUEST|GET|SE(RVER|SSION)|COOKIE|POST|ENV)|CONV_(MIME_DECODE_(STRICT|CONTINUE_ON_ERROR)|IMPL|VERSION))|D(NS_(MX|S(RV|OA)|HINFO|N(S|APTR)|CNAME|TXT|PTR|A(NY|LL|AAA|6)?)|OM(STRING_SIZE_ERR|_(SYNTAX_ERR|HIERARCHY_REQUEST_ERR|N(O(_(MODIFICATION_ALLOWED_ERR|DATA_ALLOWED_ERR)|T_(SUPPORTED_ERR|FOUND_ERR))|AMESPACE_ERR)|IN(DEX_SIZE_ERR|USE_ATTRIBUTE_ERR|VALID_(MODIFICATION_ERR|STATE_ERR|CHARACTER_ERR|ACCESS_ERR))|PHP_ERR|VALIDATION_ERR|WRONG_DOCUMENT_ERR)))|JSON_(HEX_(TAG|QUOT|A(MP|POS))|NUMERIC_CHECK|ERROR_(S(YNTAX|TATE_MISMATCH)|NONE|CTRL_CHAR|DEPTH|UTF8)|FORCE_OBJECT)|P(REG_(RECURSION_LIMIT_ERROR|GREP_INVERT|BA(CKTRACK_LIMIT_ERROR|D_UTF8_(OFFSET_ERROR|ERROR))|S(PLIT_(NO_EMPTY|OFFSET_CAPTURE|DELIM_CAPTURE)|ET_ORDER)|NO_ERROR|INTERNAL_ERROR|OFFSET_CAPTURE|PATTERN_ORDER)|SFS_(PASS_ON|ERR_FATAL|F(EED_ME|LAG_(NORMAL|FLUSH_(CLOSE|INC))))|CRE_VERSION|OSIX_(R_OK|X_OK|S_IF(REG|BLK|SOCK|CHR|IFO)|F_OK|W_OK))|F(NM_(NOESCAPE|CASEFOLD|P(ERIOD|ATHNAME))|IL(TER_(REQUIRE_(SCALAR|ARRAY)|SANITIZE_(MAGIC_QUOTES|S(TRI(NG|PPED)|PECIAL_CHARS)|NUMBER_(INT|FLOAT)|URL|E(MAIL|NCODED)|FULL_SPECIAL_CHARS)|NULL_ON_FAILURE|CALLBACK|DEFAULT|UNSAFE_RAW|VALIDATE_(REGEXP|BOOLEAN|I(NT|P)|URL|EMAIL|FLOAT)|F(ORCE_ARRAY|LAG_(S(CHEME_REQUIRED|TRIP_(BACKTICK|HIGH|LOW))|HOST_REQUIRED|NO(NE|_(RES_RANGE|PRIV_RANGE|ENCODE_QUOTES))|IPV(4|6)|PATH_REQUIRED|E(MPTY_STRING_NULL|NCODE_(HIGH|LOW|AMP))|QUERY_REQUIRED|ALLOW_(SCIENTIFIC|HEX|THOUSAND|OCTAL|FRACTION))))|E(_(BINARY|SKIP_EMPTY_LINES|NO_DEFAULT_CONTEXT|TEXT|IGNORE_NEW_LINES|USE_INCLUDE_PATH|APPEND)|INFO_(RAW|MIME(_(TYPE|ENCODING))?|SYMLINK|NONE|CONTINUE|DEVICES|PRESERVE_ATIME)))|ORCE_(GZIP|DEFLATE))|LIBXML_(XINCLUDE|N(SCLEAN|O(XMLDECL|BLANKS|NET|CDATA|E(RROR|MPTYTAG|NT)|WARNING))|COMPACT|D(TD(VALID|LOAD|ATTR)|OTTED_VERSION)|PARSEHUGE|ERR_(NONE|ERROR|FATAL|WARNING)|VERSION|LOADED_VERSION))\\b",
                "name": "support.constant.ext.php"
              },
              {
                "captures": {
                  "1": {
                    "name": "punctuation.separator.inheritance.php"
                  }
                },
                "match": "(\\\\)?\\bT_(RE(TURN|QUIRE(_ONCE)?)|G(OTO|LOBAL)|XOR_EQUAL|M(INUS_EQUAL|OD_EQUAL|UL_EQUAL|ETHOD_C|L_COMMENT)|B(REAK|OOL(_CAST|EAN_(OR|AND))|AD_CHARACTER)|S(R(_EQUAL)?|T(RING(_(CAST|VARNAME))?|A(RT_HEREDOC|TIC))|WITCH|L(_EQUAL)?)|HALT_COMPILER|N(S_(SEPARATOR|C)|UM_STRING|EW|AMESPACE)|C(HARACTER|O(MMENT|N(ST(ANT_ENCAPSED_STRING)?|CAT_EQUAL|TINUE))|URLY_OPEN|L(O(SE_TAG|NE)|ASS(_C)?)|A(SE|TCH))|T(RY|HROW)|I(MPLEMENTS|S(SET|_(GREATER_OR_EQUAL|SMALLER_OR_EQUAL|NOT_(IDENTICAL|EQUAL)|IDENTICAL|EQUAL))|N(STANCEOF|C(LUDE(_ONCE)?)?|T(_CAST|ERFACE)|LINE_HTML)|F)|O(R_EQUAL|BJECT_(CAST|OPERATOR)|PEN_TAG(_WITH_ECHO)?|LD_FUNCTION)|D(NUMBER|I(R|V_EQUAL)|O(C_COMMENT|UBLE_(C(OLON|AST)|ARROW)|LLAR_OPEN_CURLY_BRACES)?|E(C(LARE)?|FAULT))|U(SE|NSET(_CAST)?)|P(R(I(NT|VATE)|OTECTED)|UBLIC|LUS_EQUAL|AAMAYIM_NEKUDOTAYIM)|E(X(TENDS|IT)|MPTY|N(CAPSED_AND_WHITESPACE|D(SWITCH|_HEREDOC|IF|DECLARE|FOR(EACH)?|WHILE))|CHO|VAL|LSE(IF)?)|VAR(IABLE)?|F(I(NAL|LE)|OR(EACH)?|UNC(_C|TION))|WHI(TESPACE|LE)|L(NUMBER|I(ST|NE)|OGICAL_(XOR|OR|AND))|A(RRAY(_CAST)?|BSTRACT|S|ND_EQUAL))\\b",
                "name": "support.constant.parser-token.php"
              },
              {
                "comment": "In PHP, any identifier which is not a variable is taken to be a constant.\nHowever, if there is no constant defined with the given name then a notice\nis generated and the constant is assumed to have the value of its name.",
                "match": "[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*",
                "name": "constant.other.php"
              }
            ]
          }
        ]
      },
      "function-arguments": {
        "patterns": [
          {
            "include": "#comments"
          },
          {
            "include": "#attributes"
          },
          {
            "include": "#type-annotation"
          },
          {
            "begin": "(?xi)((\\$+)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)  # The variable name",
            "beginCaptures": {
              "1": {
                "name": "variable.other.php"
              },
              "2": {
                "name": "punctuation.definition.variable.php"
              }
            },
            "end": "(?xi)\n\\s*(?=,|\\)|$) # A closing parentheses (end of argument list) or a comma",
            "patterns": [
              {
                "begin": "(=)",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.operator.assignment.php"
                  }
                },
                "end": "(?=,|\\))",
                "patterns": [
                  {
                    "include": "#language"
                  }
                ]
              }
            ]
          }
        ]
      },
      "function-call": {
        "patterns": [
          {
            "begin": "(?i)(?=\\\\?[a-z_0-9\\\\]+\\\\[a-z_][a-z0-9_]*\\s*\\()",
            "comment": "Functions in a user-defined namespace (overrides any built-ins)",
            "end": "(?=\\s*\\()",
            "patterns": [
              {
                "include": "#user-function-call"
              }
            ]
          },
          {
            "match": "(?i)\\b(print|echo)\\b",
            "name": "support.function.construct.php"
          },
          {
            "begin": "(?i)(\\\\)?(?=\\b[a-z_][a-z_0-9]*\\s*\\()",
            "beginCaptures": {
              "1": {
                "name": "punctuation.separator.inheritance.php"
              }
            },
            "comment": "Root namespace function calls (built-in or user)",
            "end": "(?=\\s*\\()",
            "patterns": [
              {
                "match": "(?i)\\b(isset|unset|e(val|mpty)|list)(?=\\s*\\()",
                "name": "support.function.construct.php"
              },
              {
                "include": "#support"
              },
              {
                "include": "#user-function-call"
              }
            ]
          }
        ]
      },
      "function-return-type": {
        "patterns": [
          {
            "begin": "(:)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.type.php"
              }
            },
            "end": "(?=[{;])",
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "include": "#type-annotation"
              },
              {
                "include": "#class-name"
              }
            ]
          }
        ]
      },
      "generics": {
        "patterns": [
          {
            "begin": "(<)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.generics.php"
              }
            },
            "end": "(>)",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.generics.php"
              }
            },
            "name": "meta.generics.php",
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "include": "#generics"
              },
              {
                "match": "([-+])?([A-Za-z_][A-Za-z0-9_]*)(?:\\s+(as|super)\\s+([A-Za-z_][A-Za-z0-9_]*))?",
                "name": "support.type.php"
              },
              {
                "include": "#type-annotation"
              }
            ]
          }
        ]
      },
      "heredoc": {
        "patterns": [
          {
            "begin": "<<<\\s*(\"?)([a-zA-Z_]+[a-zA-Z0-9_]*)(\\1)\\s*$",
            "beginCaptures": {
              "2": {
                "name": "keyword.operator.heredoc.php"
              }
            },
            "end": "^(\\2)(?=;?$)",
            "endCaptures": {
              "1": {
                "name": "keyword.operator.heredoc.php"
              }
            },
            "name": "string.unquoted.heredoc.php",
            "patterns": [
              {
                "include": "#interpolation"
              }
            ]
          },
          {
            "begin": "<<<\\s*('?)([a-zA-Z_]+[a-zA-Z0-9_]*)(\\1)\\s*$",
            "beginCaptures": {
              "2": {
                "name": "keyword.operator.heredoc.php"
              }
            },
            "end": "^(\\2)(?=;?$)",
            "endCaptures": {
              "1": {
                "name": "keyword.operator.heredoc.php"
              }
            },
            "name": "string.unquoted.heredoc.nowdoc.php"
          }
        ]
      },
      "implements": {
        "patterns": [
          {
            "begin": "(?i)(implements)\\s+",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.implements.php"
              }
            },
            "end": "(?i)(?=[;{])",
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "begin": "(?i)(?=[a-z0-9_\\\\]+)",
                "contentName": "meta.other.inherited-class.php",
                "end": "(?i)(?:\\s*(?:,|(?=[^a-z0-9_\\\\\\s]))\\s*)",
                "patterns": [
                  {
                    "begin": "(?i)(?=\\\\?[a-z_0-9]+\\\\)",
                    "end": "(?i)([a-z_][a-z_0-9]*)?(?=[^a-z0-9_\\\\])",
                    "endCaptures": {
                      "1": {
                        "name": "entity.other.inherited-class.php"
                      }
                    },
                    "patterns": [
                      {
                        "include": "#namespace"
                      }
                    ]
                  },
                  {
                    "include": "#class-builtin"
                  },
                  {
                    "include": "#namespace"
                  },
                  {
                    "match": "(?i)[a-z_][a-z_0-9]*",
                    "name": "entity.other.inherited-class.php"
                  }
                ]
              }
            ]
          }
        ]
      },
      "instantiation": {
        "begin": "(?i)(new)\\s+",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.new.php"
          }
        },
        "end": "(?i)(?=[^$a-z0-9_\\\\])",
        "patterns": [
          {
            "match": "(parent|static|self)(?=[^a-z0-9_])",
            "name": "support.type.php"
          },
          {
            "include": "#class-name"
          },
          {
            "include": "#variable-name"
          }
        ]
      },
      "interface": {
        "begin": "^(?i)\\s*(?:(public|internal)\\s+)?(interface)\\b",
        "beginCaptures": {
          "1": {
            "name": "storage.modifier.php"
          },
          "2": {
            "name": "storage.type.interface.php"
          }
        },
        "end": "(?=[;{])",
        "name": "meta.interface.php",
        "patterns": [
          {
            "include": "#comments"
          },
          {
            "captures": {
              "1": {
                "name": "storage.modifier.extends.php"
              }
            },
            "match": "\\b(extends)\\b"
          },
          {
            "include": "#generics"
          },
          {
            "include": "#namespace"
          },
          {
            "match": "(?i)[a-z0-9_]+",
            "name": "entity.name.type.class.php"
          }
        ]
      },
      "interpolation": {
        "comment": "http://www.php.net/manual/en/language.types.string.php#language.types.string.parsing",
        "patterns": [
          {
            "comment": "Interpolating octal values e.g. \\01 or \\07.",
            "match": "\\\\[0-7]{1,3}",
            "name": "constant.numeric.octal.php"
          },
          {
            "comment": "Interpolating hex values e.g. \\x1 or \\xFF.",
            "match": "\\\\x[0-9A-Fa-f]{1,2}",
            "name": "constant.numeric.hex.php"
          },
          {
            "comment": "Escaped characters in double-quoted strings e.g. \\n or \\t.",
            "match": "\\\\[nrt\\\\\\$\\\"]",
            "name": "constant.character.escape.php"
          },
          {
            "comment": "Interpolating expressions in double-quoted strings with {} e.g. {$x->y->z[0][1]}.",
            "match": "(\\{\\$.*?\\})",
            "name": "variable.other.php"
          },
          {
            "comment": "Interpolating simple variables, e.g. $x, $x->y, $x[z] but not $x->y->z.",
            "match": "(\\$[a-zA-Z_][a-zA-Z0-9_]*((->[a-zA-Z_][a-zA-Z0-9_]*)|(\\[[a-zA-Z0-9_]+\\]))?)",
            "name": "variable.other.php"
          }
        ]
      },
      "invoke-call": {
        "captures": {
          "1": {
            "name": "punctuation.definition.variable.php"
          },
          "2": {
            "name": "variable.other.php"
          }
        },
        "match": "(?i)(\\$+)([a-z_][a-z_0-9]*)(?=\\s*\\()",
        "name": "meta.function-call.invoke.php"
      },
      "language": {
        "patterns": [
          {
            "include": "#comments"
          },
          {
            "begin": "(?=^\\s*<<)",
            "end": "(?<=>>)",
            "patterns": [
              {
                "include": "#attributes"
              }
            ]
          },
          {
            "include": "#xhp"
          },
          {
            "include": "#interface"
          },
          {
            "begin": "(?xi)\n^\\s*\n(?:(module)\\s*)?(type|newtype)\n\\s+\n([a-z0-9_]+)",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.php"
              },
              "2": {
                "name": "storage.type.typedecl.php"
              },
              "3": {
                "name": "entity.name.type.typedecl.php"
              }
            },
            "end": "(;)",
            "endCaptures": {
              "1": {
                "name": "punctuation.termination.expression.php"
              }
            },
            "name": "meta.typedecl.php",
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "include": "#generics"
              },
              {
                "match": "(=)",
                "name": "keyword.operator.assignment.php"
              },
              {
                "include": "#type-annotation"
              }
            ]
          },
          {
            "begin": "(?i)^\\s*(?:(public|internal)\\s+)?(enum)\\s+(class)\\s+([a-z0-9_]+)\\s*:?",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.php"
              },
              "2": {
                "name": "storage.modifier.php"
              },
              "3": {
                "name": "storage.type.class.enum.php"
              },
              "4": {
                "name": "entity.name.type.class.enum.php"
              }
            },
            "end": "(?=[{])",
            "name": "meta.class.enum.php",
            "patterns": [
              {
                "match": "\\b(extends)\\b",
                "name": "storage.modifier.extends.php"
              },
              {
                "include": "#type-annotation"
              }
            ]
          },
          {
            "begin": "(?i)^\\s*(?:(public|internal)\\s+)?(enum)\\s+([a-z0-9_]+)\\s*:?",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.php"
              },
              "2": {
                "name": "storage.type.enum.php"
              },
              "3": {
                "name": "entity.name.type.enum.php"
              }
            },
            "end": "\\{",
            "name": "meta.enum.php",
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "include": "#type-annotation"
              }
            ]
          },
          {
            "begin": "(?i)^\\s*(?:(public|internal)\\s+)?(trait)\\s+([a-z0-9_]+)\\s*",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.php"
              },
              "2": {
                "name": "storage.type.trait.php"
              },
              "3": {
                "name": "entity.name.type.class.php"
              }
            },
            "end": "(?=[{])",
            "name": "meta.trait.php",
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "include": "#generics"
              },
              {
                "include": "#implements"
              }
            ]
          },
          {
            "begin": "^\\s*(new)\\s+(module)\\s+([A-Za-z0-9_\\.]+)\\b",
            "beginCaptures": {
              "1": {
                "name": "storage.type.module.php"
              },
              "2": {
                "name": "storage.type.module.php"
              },
              "3": {
                "name": "entity.name.type.module.php"
              }
            },
            "end": "(?=[{])",
            "name": "meta.module.php",
            "patterns": [
              {
                "include": "#comments"
              }
            ]
          },
          {
            "begin": "^\\s*(module)\\s+([A-Za-z0-9_\\.]+)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.other.module.php"
              },
              "2": {
                "name": "entity.name.type.module.php"
              }
            },
            "end": "$|(?=[\\s;])",
            "name": "meta.use.module.php",
            "patterns": [
              {
                "include": "#comments"
              }
            ]
          },
          {
            "begin": "(?i)(?:^\\s*|\\s*)(namespace)\\b\\s+(?=([a-z0-9_\\\\]*\\s*($|[;{]|(\\/[\\/*])))|$)",
            "beginCaptures": {
              "1": {
                "name": "keyword.other.namespace.php"
              }
            },
            "contentName": "entity.name.type.namespace.php",
            "end": "(?i)(?=\\s*$|[^a-z0-9_\\\\])",
            "name": "meta.namespace.php",
            "patterns": [
              {
                "match": "\\\\",
                "name": "punctuation.separator.inheritance.php"
              }
            ]
          },
          {
            "begin": "(?i)\\s*\\b(use)\\s+",
            "beginCaptures": {
              "1": {
                "name": "keyword.other.use.php"
              }
            },
            "end": "(?=;|(?:^\\s*$))",
            "name": "meta.use.php",
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "begin": "(?i)\\s*(?=[a-z_0-9\\\\])",
                "end": "(?xi)\n(?:\n  (?:\\s*(as)\\b\\s*([a-z_0-9]*)\\s*(?=,|;|$))|\n  (?=,|;|$)\n)",
                "endCaptures": {
                  "1": {
                    "name": "keyword.other.use-as.php"
                  },
                  "2": {
                    "name": "support.other.namespace.use-as.php"
                  }
                },
                "patterns": [
                  {
                    "include": "#class-builtin"
                  },
                  {
                    "begin": "(?i)\\s*(?=[\\\\a-z_0-9])",
                    "end": "$|(?=[\\s,;])",
                    "name": "support.other.namespace.use.php",
                    "patterns": [
                      {
                        "match": "\\\\",
                        "name": "punctuation.separator.inheritance.php"
                      }
                    ]
                  }
                ]
              },
              {
                "match": "\\s*,\\s*"
              }
            ]
          },
          {
            "begin": "(?i)^\\s*((?:(?:final|abstract|public|internal)\\s+)*)(class)\\s+([a-z0-9_]+)\\s*",
            "beginCaptures": {
              "1": {
                "patterns": [
                  {
                    "match": "final|abstract|public|internal",
                    "name": "storage.modifier.php"
                  }
                ]
              },
              "2": {
                "name": "storage.type.class.php"
              },
              "3": {
                "name": "entity.name.type.class.php"
              }
            },
            "end": "(?=[;{])",
            "name": "meta.class.php",
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "include": "#generics"
              },
              {
                "include": "#implements"
              },
              {
                "begin": "(?i)(extends)\\s+",
                "beginCaptures": {
                  "1": {
                    "name": "storage.modifier.extends.php"
                  }
                },
                "contentName": "meta.other.inherited-class.php",
                "end": "(?i)(?=[^a-z_0-9\\\\])",
                "patterns": [
                  {
                    "begin": "(?i)(?=\\\\?[a-z_0-9]+\\\\)",
                    "end": "(?i)([a-z_][a-z_0-9]*)?(?=[^a-z0-9_\\\\])",
                    "endCaptures": {
                      "1": {
                        "name": "entity.other.inherited-class.php"
                      }
                    },
                    "patterns": [
                      {
                        "include": "#namespace"
                      }
                    ]
                  },
                  {
                    "include": "#class-builtin"
                  },
                  {
                    "include": "#namespace"
                  },
                  {
                    "match": "(?i)[a-z_][a-z_0-9]*",
                    "name": "entity.other.inherited-class.php"
                  }
                ]
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "keyword.control.php"
              }
            },
            "match": "\\s*\\b(await|break|c(ase|ontinue)|concurrent|default|do|else|for(each)?|if|return|switch|use|while)\\b"
          },
          {
            "begin": "(?i)\\b((?:require|include)(?:_once)?)\\b\\s*",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.import.include.php"
              }
            },
            "end": "(?=\\s|;|$)",
            "name": "meta.include.php",
            "patterns": [
              {
                "include": "#language"
              }
            ]
          },
          {
            "begin": "\\b(catch)\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.exception.catch.php"
              },
              "2": {
                "name": "punctuation.definition.parameters.begin.bracket.round.php"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.parameters.end.bracket.round.php"
              }
            },
            "name": "meta.catch.php",
            "patterns": [
              {
                "include": "#namespace"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.exception.php"
                  },
                  "2": {
                    "patterns": [
                      {
                        "match": "(?i)[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*",
                        "name": "support.class.exception.php"
                      },
                      {
                        "match": "\\|",
                        "name": "punctuation.separator.delimiter.php"
                      }
                    ]
                  },
                  "3": {
                    "name": "variable.other.php"
                  },
                  "4": {
                    "name": "punctuation.definition.variable.php"
                  }
                },
                "match": "(?xi)\n([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)                 # Exception class\n((?:\\s*\\|\\s*[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)*) # Optional additional exception classes\n\\s*\n((\\$+)[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)           # Variable"
              }
            ]
          },
          {
            "match": "\\b(catch|try|throw|exception|finally)\\b",
            "name": "keyword.control.exception.php"
          },
          {
            "begin": "(?i)\\s*(?:(public|internal)\\s+)?(function)\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.php"
              },
              "2": {
                "name": "storage.type.function.php"
              }
            },
            "end": "\\{|\\)",
            "name": "meta.function.closure.php",
            "patterns": [
              {
                "begin": "(\\()",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.definition.parameters.begin.php"
                  }
                },
                "contentName": "meta.function.arguments.php",
                "end": "(\\))",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.parameters.end.php"
                  }
                },
                "patterns": [
                  {
                    "include": "#function-arguments"
                  }
                ]
              },
              {
                "begin": "(?i)(use)\\s*(\\()",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.other.function.use.php"
                  },
                  "2": {
                    "name": "punctuation.definition.parameters.begin.php"
                  }
                },
                "end": "(\\))",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.parameters.end.php"
                  }
                },
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "storage.modifier.reference.php"
                      },
                      "2": {
                        "name": "variable.other.php"
                      },
                      "3": {
                        "name": "punctuation.definition.variable.php"
                      }
                    },
                    "match": "(?:\\s*(&))?\\s*((\\$+)[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)\\s*(?=,|\\))",
                    "name": "meta.function.closure.use.php"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\s*((?:(?:final|abstract|public|private|protected|internal|static|async)\\s+)*)(function)(?:\\s+)(?:(__(?:call|construct|destruct|get|set|isset|unset|tostring|clone|set_state|sleep|wakeup|autoload|invoke|callStatic|dispose|disposeAsync)(?=[^a-zA-Z0-9_\\x{7f}-\\x{ff}]))|([a-zA-Z0-9_]+))",
            "beginCaptures": {
              "1": {
                "patterns": [
                  {
                    "match": "final|abstract|public|private|protected|internal|static|async",
                    "name": "storage.modifier.php"
                  }
                ]
              },
              "2": {
                "name": "storage.type.function.php"
              },
              "3": {
                "name": "support.function.magic.php"
              },
              "4": {
                "name": "entity.name.function.php"
              },
              "5": {
                "name": "meta.function.generics.php"
              }
            },
            "end": "(?=[{;])",
            "name": "meta.function.php",
            "patterns": [
              {
                "include": "#generics"
              },
              {
                "begin": "(\\()",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.definition.parameters.begin.php"
                  }
                },
                "contentName": "meta.function.arguments.php",
                "end": "(?=\\))",
                "patterns": [
                  {
                    "include": "#function-arguments"
                  }
                ]
              },
              {
                "begin": "(\\))",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.definition.parameters.end.php"
                  }
                },
                "end": "(?=[{;])",
                "patterns": [
                  {
                    "include": "#function-return-type"
                  }
                ]
              }
            ]
          },
          {
            "include": "#invoke-call"
          },
          {
            "begin": "(?xi)\n\\s*\n  (?=\n    [a-z_0-9$\\\\]+(::)\n    (?:\n      ([a-z_][a-z_0-9]*)\\s*\\(\n      |\n      ((\\$+)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)\n      |\n      ([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)\n    )?\n  )",
            "end": "(::)(?:([A-Za-z_][A-Za-z_0-9]*)\\s*\\(|((\\$+)[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)|([a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*))?",
            "endCaptures": {
              "1": {
                "name": "keyword.operator.class.php"
              },
              "2": {
                "name": "meta.function-call.static.php"
              },
              "3": {
                "name": "variable.other.class.php"
              },
              "4": {
                "name": "punctuation.definition.variable.php"
              },
              "5": {
                "name": "constant.other.class.php"
              }
            },
            "patterns": [
              {
                "match": "(self|static|parent)\\b",
                "name": "support.type.php"
              },
              {
                "include": "#class-name"
              },
              {
                "include": "#variable-name"
              }
            ]
          },
          {
            "include": "#variables"
          },
          {
            "include": "#strings"
          },
          {
            "captures": {
              "1": {
                "name": "support.function.construct.php"
              },
              "2": {
                "name": "punctuation.definition.array.begin.php"
              },
              "3": {
                "name": "punctuation.definition.array.end.php"
              }
            },
            "match": "(array)(\\()(\\))",
            "name": "meta.array.empty.php"
          },
          {
            "begin": "(array)(\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.construct.php"
              },
              "2": {
                "name": "punctuation.definition.array.begin.php"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.array.end.php"
              }
            },
            "name": "meta.array.php",
            "patterns": [
              {
                "include": "#language"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "support.type.php"
              }
            },
            "match": "(?i)\\s*\\(\\s*(array|real|double|float|int(eger)?|bool(ean)?|string|object|binary|unset|arraykey|nonnull|dict|vec|keyset)\\s*\\)"
          },
          {
            "match": "(?i)\\b(array|real|double|float|int(eger)?|bool(ean)?|string|class|clone|var|function|interface|trait|parent|self|object|arraykey|nonnull|dict|vec|keyset)\\b",
            "name": "support.type.php"
          },
          {
            "match": "(?i)\\b(global|abstract|const|extends|implements|final|p(r(ivate|otected)|ublic)|internal|static)\\b",
            "name": "storage.modifier.php"
          },
          {
            "include": "#object"
          },
          {
            "match": ";",
            "name": "punctuation.terminator.expression.php"
          },
          {
            "include": "#heredoc"
          },
          {
            "match": "\\.=?",
            "name": "keyword.operator.string.php"
          },
          {
            "match": "=>",
            "name": "keyword.operator.key.php"
          },
          {
            "match": "==>",
            "name": "keyword.operator.lambda.php"
          },
          {
            "match": "\\|>",
            "name": "keyword.operator.pipe.php"
          },
          {
            "match": "(!==|!=|===|==)",
            "name": "keyword.operator.comparison.php"
          },
          {
            "match": "=|\\+=|\\-=|\\*=|/=|%=|&=|\\|=|\\^=|<<=|>>=",
            "name": "keyword.operator.assignment.php"
          },
          {
            "match": "(<=|>=|<|>)",
            "name": "keyword.operator.comparison.php"
          },
          {
            "match": "(\\-\\-|\\+\\+)",
            "name": "keyword.operator.increment-decrement.php"
          },
          {
            "match": "(\\-|\\+|\\*|/|%)",
            "name": "keyword.operator.arithmetic.php"
          },
          {
            "match": "(!|&&|\\|\\|)",
            "name": "keyword.operator.logical.php"
          },
          {
            "begin": "(?i)\\b(as|is)\\b\\s+(?=[\\\\$a-z_])",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.type.php"
              }
            },
            "end": "(?=[^\\\\$A-Za-z_0-9])",
            "patterns": [
              {
                "include": "#class-name"
              },
              {
                "include": "#variable-name"
              }
            ]
          },
          {
            "match": "(?i)\\b(is|as)\\b",
            "name": "keyword.operator.type.php"
          },
          {
            "include": "#function-call"
          },
          {
            "match": "<<|>>|~|\\^|&|\\|",
            "name": "keyword.operator.bitwise.php"
          },
          {
            "include": "#numbers"
          },
          {
            "include": "#instantiation"
          },
          {
            "begin": "\\[",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.array.begin.php"
              }
            },
            "end": "\\]",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.array.end.php"
              }
            },
            "patterns": [
              {
                "include": "#language"
              }
            ]
          },
          {
            "include": "#literal-collections"
          },
          {
            "begin": "\\{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.scope.begin.php"
              }
            },
            "end": "\\}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.scope.end.php"
              }
            },
            "patterns": [
              {
                "include": "#language"
              }
            ]
          },
          {
            "include": "#constants"
          }
        ]
      },
      "literal-collections": {
        "patterns": [
          {
            "begin": "(Vector|ImmVector|Set|ImmSet|Map|ImmMap|Pair)\\s*({)",
            "beginCaptures": {
              "1": {
                "name": "support.class.php"
              },
              "2": {
                "name": "punctuation.section.array.begin.php"
              }
            },
            "end": "(})",
            "endCaptures": {
              "1": {
                "name": "punctuation.section.array.end.php"
              }
            },
            "name": "meta.collection.literal.php",
            "patterns": [
              {
                "include": "#language"
              }
            ]
          }
        ]
      },
      "namespace": {
        "begin": "(?i)((namespace)|[a-z0-9_]+)?(\\\\)(?=.*?[^a-z_0-9\\\\])",
        "beginCaptures": {
          "1": {
            "name": "entity.name.type.namespace.php"
          },
          "3": {
            "name": "punctuation.separator.inheritance.php"
          }
        },
        "end": "(?i)(?=[a-z0-9_]*[^a-z0-9_\\\\])",
        "name": "support.other.namespace.php",
        "patterns": [
          {
            "match": "(?i)[a-z0-9_]+(?=\\\\)",
            "name": "entity.name.type.namespace.php"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.separator.inheritance.php"
              }
            },
            "match": "(?i)(\\\\)"
          }
        ]
      },
      "numbers": {
        "match": "\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)\\b",
        "name": "constant.numeric.php"
      },
      "object": {
        "patterns": [
          {
            "begin": "(->)(\\$?\\{)",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.class.php"
              },
              "2": {
                "name": "punctuation.definition.variable.php"
              }
            },
            "end": "(\\})",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.variable.php"
              }
            },
            "patterns": [
              {
                "include": "#language"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "keyword.operator.class.php"
              },
              "2": {
                "name": "meta.function-call.object.php"
              },
              "3": {
                "name": "variable.other.property.php"
              },
              "4": {
                "name": "punctuation.definition.variable.php"
              }
            },
            "match": "(->)(?:([A-Za-z_][A-Za-z_0-9]*)\\s*\\(|((\\$+)?[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*))?"
          }
        ]
      },
      "parameter-default-types": {
        "patterns": [
          {
            "include": "#strings"
          },
          {
            "include": "#numbers"
          },
          {
            "include": "#variables"
          },
          {
            "match": "=>",
            "name": "keyword.operator.key.php"
          },
          {
            "match": "=",
            "name": "keyword.operator.assignment.php"
          },
          {
            "include": "#instantiation"
          },
          {
            "begin": "(?xi)\n\\s*\n(?=\n  [a-z_0-9\\\\]+(::)\n  ([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)?\n)",
            "end": "(?i)(::)([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)?",
            "endCaptures": {
              "1": {
                "name": "keyword.operator.class.php"
              },
              "2": {
                "name": "constant.other.class.php"
              }
            },
            "patterns": [
              {
                "include": "#class-name"
              }
            ]
          },
          {
            "include": "#constants"
          }
        ]
      },
      "php_doc": {
        "patterns": [
          {
            "comment": "PHPDocumentor only recognises lines with an asterisk as the first non-whitespaces character",
            "match": "^(?!\\s*\\*).*$\\n?",
            "name": "invalid.illegal.missing-asterisk.phpdoc.php"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.other.phpdoc.php"
              },
              "3": {
                "name": "storage.modifier.php"
              },
              "4": {
                "name": "invalid.illegal.wrong-access-type.phpdoc.php"
              }
            },
            "match": "^\\s*\\*\\s*(@access)\\s+((public|private|protected|internal)|(.+))\\s*$"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.other.phpdoc.php"
              },
              "2": {
                "name": "markup.underline.link.php"
              }
            },
            "match": "(@xlink)\\s+(.+)\\s*$"
          },
          {
            "match": "\\@(a(bstract|uthor)|c(ategory|opyright)|example|global|internal|li(cense|nk)|pa(ckage|ram)|return|s(ee|ince|tatic|ubpackage)|t(hrows|odo)|v(ar|ersion)|uses|deprecated|final|ignore)\\b",
            "name": "keyword.other.phpdoc.php"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.other.phpdoc.php"
              }
            },
            "match": "\\{(@(link)).+?\\}",
            "name": "meta.tag.inline.phpdoc.php"
          }
        ]
      },
      "regex-double-quoted": {
        "begin": "(?<=re)\"/(?=(\\\\.|[^\"/])++/[imsxeADSUXu]*\")",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.php"
          }
        },
        "end": "(/)([imsxeADSUXu]*)(\")",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.php"
          }
        },
        "name": "string.regexp.double-quoted.php",
        "patterns": [
          {
            "comment": "Escaped from the regexp – there can also be 2 backslashes (since 1 will escape the first)",
            "match": "(\\\\){1,2}[.$^\\[\\]{}]",
            "name": "constant.character.escape.regex.php"
          },
          {
            "include": "#interpolation"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.arbitrary-repetition.php"
              },
              "3": {
                "name": "punctuation.definition.arbitrary-repetition.php"
              }
            },
            "match": "(\\{)\\d+(,\\d+)?(\\})",
            "name": "string.regexp.arbitrary-repetition.php"
          },
          {
            "begin": "\\[(?:\\^?\\])?",
            "captures": {
              "0": {
                "name": "punctuation.definition.character-class.php"
              }
            },
            "end": "\\]",
            "name": "string.regexp.character-class.php",
            "patterns": [
              {
                "include": "#interpolation"
              }
            ]
          },
          {
            "match": "[$^+*]",
            "name": "keyword.operator.regexp.php"
          }
        ]
      },
      "regex-single-quoted": {
        "begin": "(?<=re)'/(?=(\\\\.|[^'/])++/[imsxeADSUXu]*')",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.php"
          }
        },
        "end": "(/)([imsxeADSUXu]*)(')",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.php"
          }
        },
        "name": "string.regexp.single-quoted.php",
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.arbitrary-repetition.php"
              },
              "3": {
                "name": "punctuation.definition.arbitrary-repetition.php"
              }
            },
            "match": "(\\{)\\d+(,\\d+)?(\\})",
            "name": "string.regexp.arbitrary-repetition.php"
          },
          {
            "comment": "Escaped from the regexp – there can also be 2 backslashes (since 1 will escape the first)",
            "match": "(\\\\){1,2}[.$^\\[\\]{}]",
            "name": "constant.character.escape.regex.php"
          },
          {
            "comment": "Escaped from the PHP string – there can also be 2 backslashes (since 1 will escape the first)",
            "match": "\\\\{1,2}[\\\\']",
            "name": "constant.character.escape.php"
          },
          {
            "begin": "\\[(?:\\^?\\])?",
            "captures": {
              "0": {
                "name": "punctuation.definition.character-class.php"
              }
            },
            "end": "\\]",
            "name": "string.regexp.character-class.php",
            "patterns": [
              {
                "match": "\\\\[\\\\'\\[\\]]",
                "name": "constant.character.escape.php"
              }
            ]
          },
          {
            "match": "[$^+*]",
            "name": "keyword.operator.regexp.php"
          }
        ]
      },
      "sql-string-double-quoted": {
        "begin": "\"\\s*(?=(SELECT|INSERT|UPDATE|DELETE|CREATE|REPLACE|ALTER)\\b)",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.php"
          }
        },
        "contentName": "source.sql.embedded.php",
        "end": "\"",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.php"
          }
        },
        "name": "string.quoted.double.sql.php",
        "patterns": [
          {
            "comment": "Open parens cause the next escaped character to not be captured as an\nescape character. Example: $x = \"SELECT (\")\";",
            "match": "\\(",
            "name": "punctuation.definition.parameters.begin.bracket.round.php"
          },
          {
            "match": "#(\\\\\"|[^\"])*(?=\"|$\\n?)",
            "name": "comment.line.number-sign.sql"
          },
          {
            "match": "--(\\\\\"|[^\"])*(?=\"|$\\n?)",
            "name": "comment.line.double-dash.sql"
          },
          {
            "match": "\\\\[\\\\\"`']",
            "name": "constant.character.escape.php"
          },
          {
            "comment": "Unclosed strings must be captured to avoid them eating the remainder of the PHP script\nSample case: $sql = \"SELECT * FROM bar WHERE foo = '\" . $variable . \"'\"",
            "match": "'(?=((\\\\')|[^'\"])*(\"|$))",
            "name": "string.quoted.single.unclosed.sql"
          },
          {
            "comment": "Unclosed strings must be captured to avoid them eating the remainder of the PHP script\nSample case: $sql = \"SELECT * FROM bar WHERE foo = '\" . $variable . \"'\"",
            "match": "`(?=((\\\\`)|[^`\"])*(\"|$))",
            "name": "string.quoted.other.backtick.unclosed.sql"
          },
          {
            "begin": "'",
            "end": "'",
            "name": "string.quoted.single.sql",
            "patterns": [
              {
                "include": "#interpolation"
              }
            ]
          },
          {
            "begin": "`",
            "end": "`",
            "name": "string.quoted.other.backtick.sql",
            "patterns": [
              {
                "include": "#interpolation"
              }
            ]
          },
          {
            "include": "#interpolation"
          },
          {
            "include": "source.sql"
          }
        ]
      },
      "sql-string-single-quoted": {
        "begin": "'\\s*(?=(SELECT|INSERT|UPDATE|DELETE|CREATE|REPLACE|ALTER)\\b)",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.php"
          }
        },
        "contentName": "source.sql.embedded.php",
        "end": "'",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.php"
          }
        },
        "name": "string.quoted.single.sql.php",
        "patterns": [
          {
            "comment": "Open parens cause the next escaped character to not be captured as an\nescape character. Example: $x = 'SELECT (')';",
            "match": "\\(",
            "name": "punctuation.definition.parameters.begin.bracket.round.php"
          },
          {
            "match": "#(\\\\'|[^'])*(?='|$\\n?)",
            "name": "comment.line.number-sign.sql"
          },
          {
            "match": "--(\\\\'|[^'])*(?='|$\\n?)",
            "name": "comment.line.double-dash.sql"
          },
          {
            "match": "\\\\[\\\\'`\"]",
            "name": "constant.character.escape.php"
          },
          {
            "comment": "Unclosed strings must be captured to avoid them eating the remainder of the PHP script\nSample case: $sql = \"SELECT * FROM bar WHERE foo = '\" . $variable . \"'\"",
            "match": "`(?=((\\\\`)|[^`'])*('|$))",
            "name": "string.quoted.other.backtick.unclosed.sql"
          },
          {
            "comment": "Unclosed strings must be captured to avoid them eating the remainder of the PHP script\nSample case: $sql = \"SELECT * FROM bar WHERE foo = '\" . $variable . \"'\"",
            "match": "\"(?=((\\\\\")|[^\"'])*('|$))",
            "name": "string.quoted.double.unclosed.sql"
          },
          {
            "include": "source.sql"
          }
        ]
      },
      "string-double-quoted": {
        "begin": "\"",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.php"
          }
        },
        "comment": "This contentName is just to allow the usage of “select scope” to select the string contents first, then the string with quotes",
        "contentName": "meta.string-contents.quoted.double.php",
        "end": "\"",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.php"
          }
        },
        "name": "string.quoted.double.php",
        "patterns": [
          {
            "include": "#interpolation"
          }
        ]
      },
      "string-single-quoted": {
        "begin": "'",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.php"
          }
        },
        "contentName": "meta.string-contents.quoted.single.php",
        "end": "'",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.php"
          }
        },
        "name": "string.quoted.single.php",
        "patterns": [
          {
            "match": "\\\\[\\\\']",
            "name": "constant.character.escape.php"
          }
        ]
      },
      "strings": {
        "patterns": [
          {
            "include": "#regex-double-quoted"
          },
          {
            "include": "#sql-string-double-quoted"
          },
          {
            "include": "#string-double-quoted"
          },
          {
            "include": "#regex-single-quoted"
          },
          {
            "include": "#sql-string-single-quoted"
          },
          {
            "include": "#string-single-quoted"
          }
        ]
      },
      "support": {
        "patterns": [
          {
            "match": "(?i)\\bapc_(s(tore|ma_info)|c(ompile_file|lear_cache|a(s|che_info))|inc|de(c|fine_constants|lete(_file)?)|exists|fetch|load_constants|add|bin_(dump(file)?|load(file)?))\\b",
            "name": "support.function.apc.php"
          },
          {
            "match": "(?i)\\b(s(huffle|izeof|ort)|n(ext|at(sort|casesort))|c(o(unt|mpact)|urrent)|in_array|u(sort|ksort|asort)|p(os|rev)|e(nd|ach|xtract)|k(sort|ey|rsort)|list|a(sort|r(sort|ray(_(s(hift|um|plice|earch|lice)|c(h(unk|ange_key_case)|o(unt_values|mbine))|intersect(_(u(key|assoc)|key|assoc))?|diff(_(u(key|assoc)|key|assoc))?|u(n(shift|ique)|intersect(_(uassoc|assoc))?|diff(_(uassoc|assoc))?)|p(op|ush|ad|roduct)|values|key(s|_exists)|f(il(ter|l(_keys)?)|lip)|walk(_recursive)?|r(e(duce|place(_recursive)?|verse)|and)|m(ultisort|erge(_recursive)?|ap)))?))|r(sort|eset|ange))\\b",
            "name": "support.function.array.php"
          },
          {
            "match": "(?i)\\b(s(how_source|ys_getloadavg|leep)|highlight_(string|file)|con(stant|nection_(status|timeout|aborted))|time_(sleep_until|nanosleep)|ignore_user_abort|d(ie|efine(d)?)|u(sleep|n(iqid|pack))|__halt_compiler|p(hp_(strip_whitespace|check_syntax)|ack)|e(val|xit)|get_browser)\\b",
            "name": "support.function.basic_functions.php"
          },
          {
            "match": "(?i)\\bbc(s(cale|ub|qrt)|comp|div|pow(mod)?|add|m(od|ul))\\b",
            "name": "support.function.bcmath.php"
          },
          {
            "match": "(?i)\\bbz(c(ompress|lose)|open|decompress|err(str|no|or)|flush|write|read)\\b",
            "name": "support.function.bz2.php"
          },
          {
            "match": "(?i)\\b(GregorianToJD|cal_(to_jd|info|days_in_month|from_jd)|unixtojd|jdto(unix|jewish)|easter_da(ys|te)|J(ulianToJD|ewishToJD|D(MonthName|To(Gregorian|Julian|French)|DayOfWeek))|FrenchToJD)\\b",
            "name": "support.function.calendar.php"
          },
          {
            "match": "(?i)\\b(c(lass_(exists|alias)|all_user_method(_array)?)|trait_exists|i(s_(subclass_of|a)|nterface_exists)|__autoload|property_exists|get_(c(lass(_(vars|methods))?|alled_class)|object_vars|declared_(classes|traits|interfaces)|parent_class)|method_exists)\\b",
            "name": "support.function.classobj.php"
          },
          {
            "match": "(?i)\\b(com_(set|create_guid|i(senum|nvoke)|pr(int_typeinfo|op(set|put|get))|event_sink|load(_typelib)?|addref|release|get(_active_object)?|message_pump)|variant_(s(ub|et(_type)?)|n(ot|eg)|c(a(st|t)|mp)|i(nt|div|mp)|or|d(iv|ate_(to_timestamp|from_timestamp))|pow|eqv|fix|a(nd|dd|bs)|round|get_type|xor|m(od|ul)))\\b",
            "name": "support.function.com.php"
          },
          {
            "match": "(?i)\\bctype_(space|cntrl|digit|upper|p(unct|rint)|lower|al(num|pha)|graph|xdigit)\\b",
            "name": "support.function.ctype.php"
          },
          {
            "match": "(?i)\\bcurl_(setopt(_array)?|c(opy_handle|lose)|init|e(rr(no|or)|xec)|version|getinfo|multi_(select|close|in(it|fo_read)|exec|add_handle|remove_handle|getcontent))\\b",
            "name": "support.function.curl.php"
          },
          {
            "match": "(?i)\\b(str(totime|ptime|ftime)|checkdate|time(zone_(name_(from_abbr|get)|transitions_get|identifiers_list|o(pen|ffset_get)|version_get|location_get|abbreviations_list))?|idate|date(_(su(n(set|_info|rise)|b)|create(_from_format)?|time(stamp_(set|get)|zone_(set|get)|_set)|i(sodate_set|nterval_(create_from_date_string|format))|offset_get|d(iff|efault_timezone_(set|get)|ate_set)|parse(_from_format)?|format|add|get_last_errors|modify))?|localtime|g(et(timeofday|date)|m(strftime|date|mktime))|m(icrotime|ktime))\\b",
            "name": "support.function.datetime.php"
          },
          {
            "match": "(?i)\\bdba_(sync|handlers|nextkey|close|insert|op(timize|en)|delete|popen|exists|key_split|f(irstkey|etch)|list|replace)\\b",
            "name": "support.function.dba.php"
          },
          {
            "match": "(?i)\\bdbx_(sort|c(o(nnect|mpare)|lose)|e(scape_string|rror)|query|fetch_row)\\b",
            "name": "support.function.dbx.php"
          },
          {
            "match": "(?i)\\b(scandir|c(h(dir|root)|losedir)|opendir|dir|re(winddir|addir)|getcwd)\\b",
            "name": "support.function.dir.php"
          },
          {
            "match": "(?i)\\bdotnet_load\\b",
            "name": "support.function.dotnet.php"
          },
          {
            "match": "(?i)\\beio_(s(y(nc(_file_range|fs)?|mlink)|tat(vfs)?|e(ndfile|t_m(in_parallel|ax_(idle|p(oll_(time|reqs)|arallel)))|ek))|n(threads|op|pending|re(qs|ady))|c(h(own|mod)|ustom|lose|ancel)|truncate|init|open|dup2|u(nlink|time)|poll|event_loop|f(s(ync|tat(vfs)?)|ch(own|mod)|truncate|datasync|utime|allocate)|write|l(stat|ink)|r(e(name|a(d(dir|link|ahead)?|lpath))|mdir)|g(et_(event_stream|last_error)|rp(_(cancel|limit|add))?)|mk(nod|dir)|busy)\\b",
            "name": "support.function.eio.php"
          },
          {
            "match": "(?i)\\benchant_(dict_(s(tore_replacement|uggest)|check|is_in_session|describe|quick_check|add_to_(session|personal)|get_error)|broker_(set_ordering|init|d(ict_exists|escribe)|free(_dict)?|list_dicts|request_(dict|pwl_dict)|get_error))\\b",
            "name": "support.function.enchant.php"
          },
          {
            "match": "(?i)\\b(s(plit(i)?|ql_regcase)|ereg(i(_replace)?|_replace)?)\\b",
            "name": "support.function.ereg.php"
          },
          {
            "match": "(?i)\\b(set_e(rror_handler|xception_handler)|trigger_error|debug_(print_backtrace|backtrace)|user_error|error_(log|reporting|get_last)|restore_e(rror_handler|xception_handler))\\b",
            "name": "support.function.errorfunc.php"
          },
          {
            "match": "(?i)\\b(s(hell_exec|ystem)|p(assthru|roc_(nice|close|terminate|open|get_status))|e(scapeshell(cmd|arg)|xec))\\b",
            "name": "support.function.exec.php"
          },
          {
            "match": "(?i)\\b(exif_(t(humbnail|agname)|imagetype|read_data)|read_exif_data)\\b",
            "name": "support.function.exif.php"
          },
          {
            "match": "(?i)\\b(s(ymlink|tat|et_file_buffer)|c(h(own|grp|mod)|opy|learstatcache)|t(ouch|empnam|mpfile)|is_(dir|uploaded_file|executable|file|writ(eable|able)|link|readable)|d(i(sk(_(total_space|free_space)|freespace)|rname)|elete)|u(nlink|mask)|p(close|open|a(thinfo|rse_ini_(string|file)))|f(s(canf|tat|eek)|nmatch|close|t(ell|runcate)|ile(size|ctime|type|inode|owner|_(put_contents|exists|get_contents)|perms|atime|group|mtime)?|open|p(ut(s|csv)|assthru)|eof|flush|write|lock|read|get(s(s)?|c(sv)?))|l(stat|ch(own|grp)|ink(info)?)|r(e(name|wind|a(d(file|link)|lpath(_cache_(size|get))?))|mdir)|glob|m(ove_uploaded_file|kdir)|basename)\\b",
            "name": "support.function.file.php"
          },
          {
            "match": "(?i)\\b(finfo_(set_flags|close|open|file|buffer)|mime_content_type)\\b",
            "name": "support.function.fileinfo.php"
          },
          {
            "match": "(?i)\\bfilter_(has_var|i(nput(_array)?|d)|var(_array)?|list)\\b",
            "name": "support.function.filter.php"
          },
          {
            "match": "(?i)\\b(c(all_user_func(_array)?|reate_function)|unregister_tick_function|f(orward_static_call(_array)?|unc(tion_exists|_(num_args|get_arg(s)?)))|register_(shutdown_function|tick_function)|get_defined_functions)\\b",
            "name": "support.function.funchand.php"
          },
          {
            "match": "(?i)\\b(ngettext|textdomain|d(ngettext|c(ngettext|gettext)|gettext)|gettext|bind(textdomain|_textdomain_codeset))\\b",
            "name": "support.function.gettext.php"
          },
          {
            "match": "(?i)\\bgmp_(s(can(1|0)|trval|ign|ub|etbit|qrt(rem)?)|hamdist|ne(g|xtprime)|c(om|lrbit|mp)|testbit|in(tval|it|vert)|or|div(_(q(r)?|r)|exact)?|jacobi|p(o(pcount|w(m)?)|erfect_square|rob_prime)|fact|legendre|a(nd|dd|bs)|random|gcd(ext)?|xor|m(od|ul))\\b",
            "name": "support.function.gmp.php"
          },
          {
            "match": "(?i)\\bhash(_(hmac(_file)?|copy|init|update(_(stream|file))?|pbkdf2|fi(nal|le)|algos))?\\b",
            "name": "support.function.hash.php"
          },
          {
            "match": "(?i)\\b(http_(s(upport|end_(st(atus|ream)|content_(type|disposition)|data|file|last_modified))|head|negotiate_(c(harset|ontent_type)|language)|c(hunked_decode|ache_(etag|last_modified))|throttle|inflate|d(eflate|ate)|p(ost_(data|fields)|ut_(stream|data|file)|ersistent_handles_(c(ount|lean)|ident)|arse_(headers|cookie|params|message))|re(direct|quest(_(method_(name|unregister|exists|register)|body_encode))?)|get(_request_(headers|body(_stream)?))?|match_(etag|request_header|modified)|build_(str|cookie|url))|ob_(inflatehandler|deflatehandler|etaghandler))\\b",
            "name": "support.function.http.php"
          },
          {
            "match": "(?i)\\b(iconv(_(s(tr(pos|len|rpos)|ubstr|et_encoding)|get_encoding|mime_(decode(_headers)?|encode)))?|ob_iconv_handler)\\b",
            "name": "support.function.iconv.php"
          },
          {
            "match": "(?i)\\biis_(s(t(op_serv(ice|er)|art_serv(ice|er))|et_(s(cript_map|erver_rights)|dir_security|app_settings))|add_server|remove_server|get_(s(cript_map|erv(ice_state|er_(rights|by_(comment|path))))|dir_security))\\b",
            "name": "support.function.iisfunc.php"
          },
          {
            "match": "(?i)\\b(i(ptc(parse|embed)|mage(s(y|tring(up)?|et(style|t(hickness|ile)|pixel|brush)|avealpha|x)|c(har(up)?|o(nvolution|py(res(ized|ampled)|merge(gray)?)?|lor(s(total|et|forindex)|closest(hwb|alpha)?|transparent|deallocate|exact(alpha)?|a(t|llocate(alpha)?)|resolve(alpha)?|match))|reate(truecolor|from(string|jpeg|png|wbmp|g(if|d(2(part)?)?)|x(pm|bm)))?)|t(ypes|tf(text|bbox)|ruecolortopalette)|i(struecolor|nterlace)|2wbmp|d(estroy|ashedline)|jpeg|_type_to_(extension|mime_type)|p(s(slantfont|text|e(ncodefont|xtendfont)|freefont|loadfont|bbox)|ng|olygon|alettecopy)|ellipse|f(t(text|bbox)|il(ter|l(toborder|ed(polygon|ellipse|arc|rectangle))?)|ont(height|width))|wbmp|l(ine|oadfont|ayereffect)|a(ntialias|lphablending|rc)|r(otate|ectangle)|g(if|d(2)?|ammacorrect|rab(screen|window))|xbm))|jpeg2wbmp|png2wbmp|g(d_info|etimagesize(fromstring)?))\\b",
            "name": "support.function.image.php"
          },
          {
            "match": "(?i)\\b(s(ys_get_temp_dir|et_(time_limit|include_path|magic_quotes_runtime))|ini_(set|alter|restore|get(_all)?)|zend_(thread_id|version|logo_guid)|dl|p(hp(credits|info|_(sapi_name|ini_(scanned_files|loaded_file)|uname|logo_guid)|version)|utenv)|extension_loaded|version_compare|assert(_options)?|restore_include_path|g(c_(collect_cycles|disable|enable(d)?)|et(opt|_(c(urrent_user|fg_var)|include(d_files|_path)|defined_constants|extension_funcs|loaded_extensions|required_files|magic_quotes_(runtime|gpc))|env|lastmod|rusage|my(inode|uid|pid|gid)))|m(emory_get_(usage|peak_usage)|a(in|gic_quotes_runtime)))\\b",
            "name": "support.function.info.php"
          },
          {
            "match": "(?i)\\bibase_(se(t_event_handler|rv(ice_(detach|attach)|er_info))|n(um_(params|fields)|ame_result)|c(o(nnect|mmit(_ret)?)|lose)|trans|d(elete_user|rop_db|b_info)|p(connect|aram_info|repare)|e(rr(code|msg)|xecute)|query|f(ield_info|etch_(object|assoc|row)|ree_(event_handler|query|result))|wait_event|a(dd_user|ffected_rows)|r(ollback(_ret)?|estore)|gen_id|m(odify_user|aintain_db)|b(lob_(c(lose|ancel|reate)|i(nfo|mport)|open|echo|add|get)|ackup))\\b",
            "name": "support.function.interbase.php"
          },
          {
            "match": "(?i)\\b(n(ormalizer_(normalize|is_normalized)|umfmt_(set_(symbol|text_attribute|pattern|attribute)|create|parse(_currency)?|format(_currency)?|get_(symbol|text_attribute|pattern|error_(code|message)|locale|attribute)))|collator_(s(ort(_with_sort_keys)?|et_(strength|attribute))|c(ompare|reate)|asort|get_(s(trength|ort_key)|error_(code|message)|locale|attribute))|transliterator_(create(_(inverse|from_rules))?|transliterate|list_ids|get_error_(code|message))|i(ntl_(is_failure|error_name|get_error_(code|message))|dn_to_(u(nicode|tf8)|ascii))|datefmt_(set_(calendar|timezone(_id)?|pattern|lenient)|create|is_lenient|parse|format(_object)?|localtime|get_(calendar(_object)?|time(type|zone(_id)?)|datetype|pattern|error_(code|message)|locale))|locale_(set_default|compose|parse|filter_matches|lookup|accept_from_http|get_(script|d(isplay_(script|name|variant|language|region)|efault)|primary_language|keywords|all_variants|region))|resourcebundle_(c(ount|reate)|locales|get(_error_(code|message))?)|grapheme_(s(tr(str|i(str|pos)|pos|len|r(ipos|pos))|ubstr)|extract)|msgfmt_(set_pattern|create|parse(_message)?|format(_message)?|get_(pattern|error_(code|message)|locale)))\\b",
            "name": "support.function.intl.php"
          },
          {
            "match": "(?i)\\bjson_(decode|encode|last_error)\\b",
            "name": "support.function.json.php"
          },
          {
            "match": "(?i)\\bldap_(s(tart_tls|ort|e(t_(option|rebind_proc)|arch)|asl_bind)|next_(entry|attribute|reference)|c(o(n(nect|trol_paged_result(_response)?)|unt_entries|mpare)|lose)|t61_to_8859|d(n2ufn|elete)|8859_to_t61|unbind|parse_re(sult|ference)|e(rr(no|2str|or)|xplode_dn)|f(irst_(entry|attribute|reference)|ree_result)|list|add|re(name|ad)|get_(option|dn|entries|values(_len)?|attributes)|mod(ify|_(del|add|replace))|bind)\\b",
            "name": "support.function.ldap.php"
          },
          {
            "match": "(?i)\\blibxml_(set_(streams_context|external_entity_loader)|clear_errors|disable_entity_loader|use_internal_errors|get_(errors|last_error))\\b",
            "name": "support.function.libxml.php"
          },
          {
            "match": "(?i)\\b(ezmlm_hash|mail)\\b",
            "name": "support.function.mail.php"
          },
          {
            "match": "(?i)\\b(s(in(h)?|qrt|rand)|h(ypot|exdec)|c(os(h)?|eil)|tan(h)?|is_(nan|infinite|finite)|octdec|de(c(hex|oct|bin)|g2rad)|p(i|ow)|exp(m1)?|f(loor|mod)|l(cg_value|og(1(p|0))?)|a(sin(h)?|cos(h)?|tan(h|2)?|bs)|r(ound|a(nd|d2deg))|getrandmax|m(t_(srand|rand|getrandmax)|in|ax)|b(indec|ase_convert))\\b",
            "name": "support.function.math.php"
          },
          {
            "match": "(?i)\\bmb_(s(tr(str|cut|to(upper|lower)|i(str|pos|mwidth)|pos|width|len|r(chr|i(chr|pos)|pos))|ubst(itute_character|r(_count)?)|plit|end_mail)|http_(input|output)|c(heck_encoding|onvert_(case|encoding|variables|kana))|internal_encoding|output_handler|de(code_(numericentity|mimeheader)|tect_(order|encoding))|p(arse_str|referred_mime_name)|e(ncod(ing_aliases|e_(numericentity|mimeheader))|reg(i(_replace)?|_(search(_(setpos|init|pos|regs|get(pos|regs)))?|replace(_callback)?|match))?)|l(ist_encodings|anguage)|regex_(set_options|encoding)|get_info)\\b",
            "name": "support.function.mbstring.php"
          },
          {
            "match": "(?i)\\bm(crypt_(c(fb|reate_iv|bc)|ofb|decrypt|e(nc(_(self_test|is_block_(algorithm(_mode)?|mode)|get_(supported_key_sizes|iv_size|key_size|algorithms_name|modes_name|block_size))|rypt)|cb)|list_(algorithms|modes)|ge(neric(_(init|deinit|end))?|t_(cipher_name|iv_size|key_size|block_size))|module_(self_test|close|is_block_(algorithm(_mode)?|mode)|open|get_(supported_key_sizes|algo_(key_size|block_size))))|decrypt_generic)\\b",
            "name": "support.function.mcrypt.php"
          },
          {
            "match": "(?i)\\bmemcache_debug\\b",
            "name": "support.function.memcache.php"
          },
          {
            "match": "(?i)\\bmhash(_(count|keygen_s2k|get_(hash_name|block_size)))?\\b",
            "name": "support.function.mhash.php"
          },
          {
            "match": "(?i)\\bbson_(decode|encode)\\b",
            "name": "support.function.mongo.php"
          },
          {
            "match": "(?i)\\bmysql_(s(tat|e(t_charset|lect_db))|num_(fields|rows)|c(onnect|l(ient_encoding|ose)|reate_db)|t(hread_id|ablename)|in(sert_id|fo)|d(ata_seek|rop_db|b_(name|query))|unbuffered_query|p(connect|ing)|e(scape_string|rr(no|or))|query|f(ield_(seek|name|t(ype|able)|flags|len)|etch_(object|field|lengths|a(ssoc|rray)|row)|ree_result)|list_(tables|dbs|processes|fields)|affected_rows|re(sult|al_escape_string)|get_(server_info|host_info|client_info|proto_info))\\b",
            "name": "support.function.mysql.php"
          },
          {
            "match": "(?i)\\bmysqli_(s(sl_set|t(ore_result|at|mt_(s(tore_result|end_long_data)|next_result|close|init|data_seek|prepare|execute|f(etch|ree_result)|attr_(set|get)|res(ult_metadata|et)|get_(warnings|result)|more_results|bind_(param|result)))|e(nd_(query|long_data)|t_(charset|opt|local_infile_(handler|default))|lect_db)|lave_query)|next_result|c(ha(nge_user|racter_set_name)|o(nnect|mmit)|l(ient_encoding|ose))|thread_safe|init|options|d(isable_r(pl_parse|eads_from_master)|ump_debug_info|ebug|ata_seek)|use_result|p(ing|oll|aram_count|repare)|e(scape_string|nable_r(pl_parse|eads_from_master)|xecute|mbedded_server_(start|end))|kill|query|f(ield_seek|etch(_(object|field(s|_direct)?|a(ssoc|ll|rray)|row))?|ree_result)|autocommit|r(ollback|pl_(p(arse_enabled|robe)|query_type)|e(port|fresh|a(p_async_query|l_(connect|escape_string|query))))|get_(c(harset|onnection_stats|lient_(stats|info|version)|ache_stats)|warnings|metadata)|m(ore_results|ulti_query|aster_query)|bind_(param|result))\\b",
            "name": "support.function.mysqli.php"
          },
          {
            "match": "(?i)\\bmysqlnd_memcache_(set|get_config)\\b",
            "name": "support.function.mysqlnd-memcache.php"
          },
          {
            "match": "(?i)\\bmysqlnd_ms_(set_(user_pick_server|qos)|query_is_select|get_(stats|last_(used_connection|gtid))|match_wild)\\b",
            "name": "support.function.mysqlnd-ms.php"
          },
          {
            "match": "(?i)\\bmysqlnd_qc_(set_(storage_handler|cache_condition|is_select|user_handlers)|clear_cache|get_(normalized_query_trace_log|c(ore_stats|ache_info)|query_trace_log|available_handlers))\\b",
            "name": "support.function.mysqlnd-qc.php"
          },
          {
            "match": "(?i)\\bmysqlnd_uh_(set_(statement_proxy|connection_proxy)|convert_to_mysqlnd)\\b",
            "name": "support.function.mysqlnd-uh.php"
          },
          {
            "match": "(?i)\\b(s(yslog|ocket_(set_(timeout|blocking)|get_status)|et(cookie|rawcookie))|h(ttp_response_code|eader(s_(sent|list)|_re(gister_callback|move))?)|c(heckdnsrr|loselog)|i(net_(ntop|pton)|p2long)|openlog|d(ns_(check_record|get_(record|mx))|efine_syslog_variables)|pfsockopen|fsockopen|long2ip|get(servby(name|port)|host(name|by(name(l)?|addr))|protobyn(umber|ame)|mxrr))\\b",
            "name": "support.function.network.php"
          },
          {
            "match": "(?i)\\bnsapi_(virtual|re(sponse_headers|quest_headers))\\b",
            "name": "support.function.nsapi.php"
          },
          {
            "match": "(?i)\\b(deaggregate|aggregat(ion_info|e(_(info|properties(_by_(list|regexp))?|methods(_by_(list|regexp))?))?))\\b",
            "name": "support.function.objaggregation.php"
          },
          {
            "match": "(?i)\\boci(s(tatementtype|e(tprefetch|rverversion)|avelob(file)?)|n(umcols|ew(c(ollection|ursor)|descriptor)|logon)|c(o(l(umn(s(cale|ize)|name|type(raw)?|isnull|precision)|l(size|trim|a(ssign(elem)?|ppend)|getelem|max))|mmit)|loselob|ancel)|internaldebug|definebyname|_(s(tatement_type|e(t_(client_i(nfo|dentifier)|prefetch|edition|action|module_name)|rver_version))|n(um_(fields|rows)|ew_(c(o(nnect|llection)|ursor)|descriptor))|c(o(nnect|mmit)|l(ient_version|ose)|ancel)|internal_debug|define_by_name|p(connect|a(ssword_change|rse))|e(rror|xecute)|f(ield_(s(cale|ize)|name|type(_raw)?|is_null|precision)|etch(_(object|a(ssoc|ll|rray)|row))?|ree_(statement|descriptor))|lob_(copy|is_equal)|r(ollback|esult)|bind_(array_by_name|by_name))|p(logon|arse)|e(rror|xecute)|f(etch(statement|into)?|ree(statement|c(ollection|ursor)|desc))|write(temporarylob|lobtofile)|lo(adlob|go(n|ff))|r(o(wcount|llback)|esult)|bindbyname)\\b",
            "name": "support.function.oci8.php"
          },
          {
            "match": "(?i)\\bopenssl_(s(ign|eal)|c(sr_(sign|new|export(_to_file)?|get_(subject|public_key))|ipher_iv_length)|open|d(h_compute_key|igest|ecrypt)|p(ublic_(decrypt|encrypt)|k(cs(12_(export(_to_file)?|read)|7_(sign|decrypt|encrypt|verify))|ey_(new|export(_to_file)?|free|get_(details|p(ublic|rivate))))|rivate_(decrypt|encrypt))|e(ncrypt|rror_string)|verify|free_key|random_pseudo_bytes|get_(cipher_methods|p(ublickey|rivatekey)|md_methods)|x509_(check(_private_key|purpose)|parse|export(_to_file)?|free|read))\\b",
            "name": "support.function.openssl.php"
          },
          {
            "match": "(?i)\\b(o(utput_(add_rewrite_var|reset_rewrite_vars)|b_(start|clean|implicit_flush|end_(clean|flush)|flush|list_handlers|g(zhandler|et_(status|c(ontents|lean)|flush|le(ngth|vel)))))|flush)\\b",
            "name": "support.function.output.php"
          },
          {
            "match": "(?i)\\bpassword_(hash|needs_rehash|verify|get_info)\\b",
            "name": "support.function.password.php"
          },
          {
            "match": "(?i)\\bpcntl_(s(ig(nal(_dispatch)?|timedwait|procmask|waitinfo)|etpriority)|exec|fork|w(stopsig|termsig|if(s(topped|ignaled)|exited)|exitstatus|ait(pid)?)|alarm|getpriority)\\b",
            "name": "support.function.pcntl.php"
          },
          {
            "match": "(?i)\\bpg_(se(nd_(prepare|execute|query(_params)?)|t_(client_encoding|error_verbosity)|lect)|host|num_(fields|rows)|c(o(n(nect(ion_(status|reset|busy))?|vert)|py_(to|from))|l(ient_encoding|ose)|ancel_query)|t(ty|ra(nsaction_status|ce))|insert|options|d(elete|bname)|u(n(trace|escape_bytea)|pdate)|p(connect|ing|ort|ut_line|arameter_status|repare)|e(scape_(string|identifier|literal|bytea)|nd_copy|xecute)|version|query(_params)?|f(ield_(size|n(um|ame)|t(ype(_oid)?|able)|is_null|prtlen)|etch_(object|a(ssoc|ll(_columns)?|rray)|r(ow|esult))|ree_result)|l(o_(seek|c(lose|reate)|tell|import|open|unlink|export|write|read(_all)?)|ast_(notice|oid|error))|affected_rows|result_(s(tatus|eek)|error(_field)?)|get_(notify|pid|result)|meta_data)\\b",
            "name": "support.function.pgsql.php"
          },
          {
            "match": "(?i)\\b(virtual|apache_(setenv|note|child_terminate|lookup_uri|re(s(ponse_headers|et_timeout)|quest_headers)|get(_(version|modules)|env))|getallheaders)\\b",
            "name": "support.function.php_apache.php"
          },
          {
            "match": "(?i)\\bdom_import_simplexml\\b",
            "name": "support.function.php_dom.php"
          },
          {
            "match": "(?i)\\bftp_(s(sl_connect|ystype|i(te|ze)|et_option)|n(list|b_(continue|put|f(put|get)|get))|c(h(dir|mod)|onnect|dup|lose)|delete|p(ut|wd|asv)|exec|quit|f(put|get)|login|alloc|r(ename|aw(list)?|mdir)|get(_option)?|m(dtm|kdir))\\b",
            "name": "support.function.php_ftp.php"
          },
          {
            "match": "(?i)\\bimap_(s(can(mailbox)?|tatus|ort|ubscribe|e(t(_quota|flag_full|acl)|arch)|avebody)|header(s|info)?|num_(recent|msg)|c(heck|l(ose|earflag_full)|reate(mailbox)?)|t(hread|imeout)|open|delete(mailbox)?|8bit|u(n(subscribe|delete)|tf(7_(decode|encode)|8)|id)|ping|e(rrors|xpunge)|qprint|fetch(structure|header|text|_overview|mime|body)|l(sub|ist(s(can|ubscribed)|mailbox)?|ast_error)|a(ppend|lerts)|r(e(name(mailbox)?|open)|fc822_(parse_(headers|adrlist)|write_address))|g(c|et(subscribed|_quota(root)?|acl|mailboxes))|m(sgno|ime_header_decode|ail(_(co(py|mpose)|move)|boxmsginfo)?)|b(inary|ody(struct)?|ase64))\\b",
            "name": "support.function.php_imap.php"
          },
          {
            "match": "(?i)\\bmssql_(select_db|n(um_(fields|rows)|ext_result)|c(onnect|lose)|init|data_seek|pconnect|execute|query|f(ield_(seek|name|type|length)|etch_(object|field|a(ssoc|rray)|row|batch)|ree_(statement|result))|r(ows_affected|esult)|g(uid_string|et_last_message)|min_(error_severity|message_severity)|bind)\\b",
            "name": "support.function.php_mssql.php"
          },
          {
            "match": "(?i)\\bodbc_(s(tatistics|pecialcolumns|etoption)|n(um_(fields|rows)|ext_result)|c(o(nnect|lumn(s|privileges)|mmit)|ursor|lose(_all)?)|table(s|privileges)|d(o|ata_source)|p(connect|r(imarykeys|ocedure(s|columns)|epare))|e(rror(msg)?|xec(ute)?)|f(ield_(scale|n(um|ame)|type|precision|len)|oreignkeys|etch_(into|object|array|row)|ree_result)|longreadlen|autocommit|r(ollback|esult(_all)?)|gettypeinfo|binmode)\\b",
            "name": "support.function.php_odbc.php"
          },
          {
            "match": "(?i)\\bpreg_(split|quote|filter|last_error|replace(_callback)?|grep|match(_all)?)\\b",
            "name": "support.function.php_pcre.php"
          },
          {
            "match": "(?i)\\b(spl_(classes|object_hash|autoload(_(call|unregister|extensions|functions|register))?)|class_(implements|uses|parents)|iterator_(count|to_array|apply))\\b",
            "name": "support.function.php_spl.php"
          },
          {
            "match": "(?i)\\bzip_(close|open|entry_(name|c(ompress(ionmethod|edsize)|lose)|open|filesize|read)|read)\\b",
            "name": "support.function.php_zip.php"
          },
          {
            "match": "(?i)\\bposix_(s(trerror|et(sid|uid|pgid|e(uid|gid)|gid))|ctermid|t(tyname|imes)|i(satty|nitgroups)|uname|errno|kill|access|get(sid|cwd|uid|_last_error|p(id|pid|w(nam|uid)|g(id|rp))|e(uid|gid)|login|rlimit|g(id|r(nam|oups|gid)))|mk(nod|fifo))\\b",
            "name": "support.function.posix.php"
          },
          {
            "match": "(?i)\\bset(threadtitle|proctitle)\\b",
            "name": "support.function.proctitle.php"
          },
          {
            "match": "(?i)\\bpspell_(s(tore_replacement|uggest|ave_wordlist)|new(_(config|personal))?|c(heck|onfig_(save_repl|create|ignore|d(ict_dir|ata_dir)|personal|r(untogether|epl)|mode)|lear_session)|add_to_(session|personal))\\b",
            "name": "support.function.pspell.php"
          },
          {
            "match": "(?i)\\breadline(_(c(ompletion_function|lear_history|allback_(handler_(install|remove)|read_char))|info|on_new_line|write_history|list_history|add_history|re(display|ad_history)))?\\b",
            "name": "support.function.readline.php"
          },
          {
            "match": "(?i)\\brecode(_(string|file))?\\b",
            "name": "support.function.recode.php"
          },
          {
            "match": "(?i)\\brrd_(create|tune|info|update|error|version|f(irst|etch)|last(update)?|restore|graph|xport)\\b",
            "name": "support.function.rrd.php"
          },
          {
            "match": "(?i)\\b(s(hm_(has_var|detach|put_var|attach|remove(_var)?|get_var)|em_(acquire|re(lease|move)|get))|ftok|msg_(s(tat_queue|e(nd|t_queue))|queue_exists|re(ceive|move_queue)|get_queue))\\b",
            "name": "support.function.sem.php"
          },
          {
            "match": "(?i)\\bsession_(s(ta(tus|rt)|et_(save_handler|cookie_params)|ave_path)|name|c(ommit|ache_(expire|limiter))|i(s_registered|d)|de(stroy|code)|un(set|register)|encode|write_close|reg(ister(_shutdown)?|enerate_id)|get_cookie_params|module_name)\\b",
            "name": "support.function.session.php"
          },
          {
            "match": "(?i)\\bshmop_(size|close|open|delete|write|read)\\b",
            "name": "support.function.shmop.php"
          },
          {
            "match": "(?i)\\bsimplexml_(import_dom|load_(string|file))\\b",
            "name": "support.function.simplexml.php"
          },
          {
            "match": "(?i)\\bsnmp(set|2_(set|walk|real_walk|get(next)?)|_(set_(oid_(numeric_print|output_format)|enum_print|valueretrieval|quick_print)|read_mib|get_(valueretrieval|quick_print))|3_(set|walk|real_walk|get(next)?)|walk(oid)?|realwalk|get(next)?)\\b",
            "name": "support.function.snmp.php"
          },
          {
            "match": "(?i)\\b(is_soap_fault|use_soap_error_handler)\\b",
            "name": "support.function.soap.php"
          },
          {
            "match": "(?i)\\bsocket_(s(hutdown|trerror|e(nd(to)?|t_(nonblock|option|block)|lect))|c(onnect|l(ose|ear_error)|reate(_(pair|listen))?)|import_stream|write|l(isten|ast_error)|accept|re(cv(from)?|ad)|get(sockname|_option|peername)|bind)\\b",
            "name": "support.function.sockets.php"
          },
          {
            "match": "(?i)\\bsqlite_(s(ingle_query|eek)|has_(prev|more)|n(um_(fields|rows)|ext)|c(hanges|olumn|urrent|lose|reate_(function|aggregate))|open|u(nbuffered_query|df_(decode_binary|encode_binary))|p(open|rev)|e(scape_string|rror_string|xec)|valid|key|query|f(ield_name|etch_(s(tring|ingle)|column_types|object|a(ll|rray))|actory)|l(ib(encoding|version)|ast_(insert_rowid|error))|array_query|rewind|busy_timeout)\\b",
            "name": "support.function.sqlite.php"
          },
          {
            "match": "(?i)\\bsqlsrv_(se(nd_stream_data|rver_info)|has_rows|n(um_(fields|rows)|ext_result)|c(o(n(nect|figure)|mmit)|l(ient_info|ose)|ancel)|prepare|e(rrors|xecute)|query|f(ield_metadata|etch(_(object|array))?|ree_stmt)|ro(ws_affected|llback)|get_(config|field)|begin_transaction)\\b",
            "name": "support.function.sqlsrv.php"
          },
          {
            "match": "(?i)\\bstats_(s(ta(ndard_deviation|t_(noncentral_t|correlation|in(nerproduct|dependent_t)|p(owersum|ercentile|aired_t)|gennch|binomial_coef))|kew)|harmonic_mean|c(ovariance|df_(n(oncentral_(chisquare|f)|egative_binomial)|c(hisquare|auchy)|t|uniform|poisson|exponential|f|weibull|l(ogistic|aplace)|gamma|b(inomial|eta)))|den(s_(n(ormal|egative_binomial)|c(hisquare|auchy)|t|pmf_(hypergeometric|poisson|binomial)|exponential|f|weibull|l(ogistic|aplace)|gamma|beta)|_uniform)|variance|kurtosis|absolute_deviation|rand_(setall|phrase_to_seeds|ranf|ge(n_(no(ncen(tral_(t|f)|ral_chisquare)|rmal)|chisquare|t|i(nt|uniform|poisson|binomial(_negative)?)|exponential|f(uniform)?|gamma|beta)|t_seeds)))\\b",
            "name": "support.function.stats.php"
          },
          {
            "match": "(?i)\\bs(tream_(s(ocket_(s(hutdown|e(ndto|rver))|client|pair|enable_crypto|accept|recvfrom|get_name)|upports_lock|e(t_(chunk_size|timeout|write_buffer|read_buffer|blocking)|lect))|notification_callback|co(ntext_(set_(option|default|params)|create|get_(options|default|params))|py_to_stream)|is_local|encoding|filter_(prepend|append|re(gister|move))|wrapper_(unregister|re(store|gister))|re(solve_include_path|gister_wrapper)|get_(contents|transports|filters|wrappers|line|meta_data)|bucket_(new|prepend|append|make_writeable))|et_socket_blocking)\\b",
            "name": "support.function.streamsfuncs.php"
          },
          {
            "match": "(?i)\\b(s(scanf|ha1(_file)?|tr(s(tr|pn)|n(c(asecmp|mp)|atc(asecmp|mp))|c(spn|hr|oll|asecmp|mp)|t(o(upper|k|lower)|r)|i(str|p(slashes|cslashes|os|_tags))|_(s(huffle|plit)|ireplace|pad|word_count|r(ot13|ep(eat|lace))|getcsv)|p(os|brk)|len|r(chr|ipos|pos|ev))|imilar_text|oundex|ubstr(_(co(unt|mpare)|replace))?|printf|etlocale)|h(tml(specialchars(_decode)?|_entity_decode|entities)|e(x2bin|brev(c)?))|n(umber_format|l(2br|_langinfo))|c(h(op|unk_split|r)|o(nvert_(cyr_string|uu(decode|encode))|unt_chars)|r(ypt|c32))|trim|implode|ord|uc(first|words)|join|p(arse_str|rint(f)?)|e(cho|xplode)|v(sprintf|printf|fprintf)|quote(d_printable_(decode|encode)|meta)|fprintf|wordwrap|l(cfirst|trim|ocaleconv|evenshtein)|add(slashes|cslashes)|rtrim|get_html_translation_table|m(oney_format|d5(_file)?|etaphone)|bin2hex)\\b",
            "name": "support.function.string.php"
          },
          {
            "match": "(?i)\\bsybase_(se(t_message_handler|lect_db)|num_(fields|rows)|c(onnect|lose)|d(eadlock_retry_count|ata_seek)|unbuffered_query|pconnect|query|f(ield_seek|etch_(object|field|a(ssoc|rray)|row)|ree_result)|affected_rows|result|get_last_message|min_(server_severity|client_severity|error_severity|message_severity))\\b",
            "name": "support.function.sybase.php"
          },
          {
            "match": "(?i)\\b(taint|is_tainted|untaint)\\b",
            "name": "support.function.taint.php"
          },
          {
            "match": "(?i)\\b(tidy_(s(et(opt|_encoding)|ave_config)|c(onfig_count|lean_repair)|is_x(html|ml)|diagnose|parse_(string|file)|error_count|warning_count|load_config|access_count|re(set_config|pair_(string|file))|get(opt|_(status|h(tml(_ver)?|ead)|config|o(utput|pt_doc)|r(oot|elease)|body)))|ob_tidyhandler)\\b",
            "name": "support.function.tidy.php"
          },
          {
            "match": "(?i)\\btoken_(name|get_all)\\b",
            "name": "support.function.tokenizer.php"
          },
          {
            "match": "(?i)\\btrader_(s(t(och(f|rsi)?|ddev)|in(h)?|u(m|b)|et_(compat|unstable_period)|qrt|ar(ext)?|ma)|ht_(sine|trend(line|mode)|dcp(hase|eriod)|phasor)|natr|c(ci|o(s(h)?|rrel)|dl(s(ho(otingstar|rtline)|t(icksandwich|alledpattern)|pinningtop|eparatinglines)|h(i(kkake(mod)?|ghwave)|omingpigeon|a(ngingman|rami(cross)?|mmer))|c(o(ncealbabyswall|unterattack)|losingmarubozu)|t(hrusting|a(sukigap|kuri)|ristar)|i(n(neck|vertedhammer)|dentical3crows)|2crows|onneck|d(oji(star)?|arkcloudcover|ragonflydoji)|u(nique3river|psidegap2crows)|3(starsinsouth|inside|outside|whitesoldiers|linestrike|blackcrows)|piercing|e(ngulfing|vening(star|dojistar))|kicking(bylength)?|l(ongl(ine|eggeddoji)|adderbottom)|a(dvanceblock|bandonedbaby)|ri(sefall3methods|ckshawman)|g(apsidesidewhite|ravestonedoji)|xsidegap3methods|m(orning(star|dojistar)|a(t(hold|chinglow)|rubozu))|b(elthold|reakaway))|eil|mo)|t(sf|ypprice|3|ema|an(h)?|r(i(x|ma)|ange))|obv|d(iv|ema|x)|ultosc|p(po|lus_d(i|m))|e(rrno|xp|ma)|var|kama|floor|w(clprice|illr|ma)|l(n|inearreg(_(slope|intercept|angle))?|og10)|a(sin|cos|t(an|r)|d(osc|d|x(r)?)?|po|vgprice|roon(osc)?)|r(si|oc(p|r(100)?)?)|get_(compat|unstable_period)|m(i(n(index|us_d(i|m)|max(index)?)?|dp(oint|rice))|om|ult|edprice|fi|a(cd(ext|fix)?|vp|x(index)?|ma)?)|b(op|eta|bands))\\b",
            "name": "support.function.trader.php"
          },
          {
            "match": "(?i)\\b(http_build_query|url(decode|encode)|parse_url|rawurl(decode|encode)|get_(headers|meta_tags)|base64_(decode|encode))\\b",
            "name": "support.function.url.php"
          },
          {
            "match": "(?i)\\b(s(trval|e(ttype|rialize))|i(s(set|_(s(calar|tring)|nu(ll|meric)|callable|int(eger)?|object|double|float|long|array|re(source|al)|bool|arraykey|nonnull|dict|vec|keyset))|ntval|mport_request_variables)|d(oubleval|ebug_zval_dump)|unse(t|rialize)|print_r|empty|var_(dump|export)|floatval|get(type|_(defined_vars|resource_type))|boolval)\\b",
            "name": "support.function.var.php"
          },
          {
            "match": "(?i)\\bwddx_(serialize_va(lue|rs)|deserialize|packet_(start|end)|add_vars)\\b",
            "name": "support.function.wddx.php"
          },
          {
            "match": "(?i)\\bxhprof_(sample_(disable|enable)|disable|enable)\\b",
            "name": "support.function.xhprof.php"
          },
          {
            "match": "(?i)\\b(utf8_(decode|encode)|xml_(set_(start_namespace_decl_handler|notation_decl_handler|character_data_handler|object|default_handler|unparsed_entity_decl_handler|processing_instruction_handler|e(nd_namespace_decl_handler|lement_handler|xternal_entity_ref_handler))|parse(_into_struct|r_(set_option|create(_ns)?|free|get_option))?|error_string|get_(current_(column_number|line_number|byte_index)|error_code)))\\b",
            "name": "support.function.xml.php"
          },
          {
            "match": "(?i)\\bxmlrpc_(se(t_type|rver_(c(all_method|reate)|destroy|add_introspection_data|register_(introspection_callback|method)))|is_fault|decode(_request)?|parse_method_descriptions|encode(_request)?|get_type)\\b",
            "name": "support.function.xmlrpc.php"
          },
          {
            "match": "(?i)\\bxmlwriter_(s(tart_(c(omment|data)|d(td(_(e(ntity|lement)|attlist))?|ocument)|pi|element(_ns)?|attribute(_ns)?)|et_indent(_string)?)|text|o(utput_memory|pen_(uri|memory))|end_(c(omment|data)|d(td(_(e(ntity|lement)|attlist))?|ocument)|pi|element|attribute)|f(ull_end_element|lush)|write_(c(omment|data)|dtd(_(e(ntity|lement)|attlist))?|pi|element(_ns)?|attribute(_ns)?|raw))\\b",
            "name": "support.function.xmlwriter.php"
          },
          {
            "match": "(?i)\\bxslt_(set(opt|_(s(cheme_handler(s)?|ax_handler(s)?)|object|e(ncoding|rror_handler)|log|base))|create|process|err(no|or)|free|getopt|backend_(name|info|version))\\b",
            "name": "support.function.xslt.php"
          },
          {
            "match": "(?i)\\b(zlib_(decode|encode|get_coding_type)|readgzfile|gz(seek|c(ompress|lose)|tell|inflate|open|de(code|flate)|uncompress|p(uts|assthru)|e(ncode|of)|file|write|re(wind|ad)|get(s(s)?|c)))\\b",
            "name": "support.function.zlib.php"
          },
          {
            "match": "(?i)\\bis_int(eger)?\\b",
            "name": "support.function.alias.php"
          }
        ]
      },
      "type-annotation": {
        "name": "support.type.php",
        "patterns": [
          {
            "match": "\\b(?:bool|int|float|string|resource|mixed|arraykey|nonnull|dict|vec|keyset)\\b",
            "name": "support.type.php"
          },
          {
            "begin": "([A-Za-z_][A-Za-z0-9_]*)<",
            "beginCaptures": {
              "1": {
                "name": "support.class.php"
              }
            },
            "end": ">",
            "patterns": [
              {
                "include": "#type-annotation"
              }
            ]
          },
          {
            "begin": "(shape\\()",
            "end": "((,|\\.\\.\\.)?\\s*\\))",
            "endCaptures": {
              "1": {
                "name": "keyword.operator.key.php"
              }
            },
            "name": "storage.type.shape.php",
            "patterns": [
              {
                "include": "#type-annotation"
              },
              {
                "include": "#strings"
              },
              {
                "include": "#constants"
              }
            ]
          },
          {
            "begin": "\\(",
            "end": "\\)",
            "patterns": [
              {
                "include": "#type-annotation"
              }
            ]
          },
          {
            "include": "#class-name"
          },
          {
            "include": "#comments"
          }
        ]
      },
      "user-function-call": {
        "begin": "(?i)(?=[a-z_0-9\\\\]*[a-z_][a-z0-9_]*\\s*\\()",
        "end": "(?i)[a-z_][a-z_0-9]*(?=\\s*\\()",
        "endCaptures": {
          "0": {
            "name": "entity.name.function.php"
          }
        },
        "name": "meta.function-call.php",
        "patterns": [
          {
            "include": "#namespace"
          }
        ]
      },
      "var_basic": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.variable.php"
              }
            },
            "match": "(\\$+)[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*?\\b",
            "name": "variable.other.php"
          }
        ]
      },
      "var_global": {
        "captures": {
          "1": {
            "name": "punctuation.definition.variable.php"
          }
        },
        "match": "(\\$)((_(COOKIE|FILES|GET|POST|REQUEST))|arg(v|c))\\b",
        "name": "variable.other.global.php"
      },
      "var_global_safer": {
        "captures": {
          "1": {
            "name": "punctuation.definition.variable.php"
          }
        },
        "match": "(\\$)((GLOBALS|_(ENV|SERVER|SESSION)))",
        "name": "variable.other.global.safer.php"
      },
      "variable-name": {
        "patterns": [
          {
            "include": "#var_global"
          },
          {
            "include": "#var_global_safer"
          },
          {
            "captures": {
              "1": {
                "name": "variable.other.php"
              },
              "2": {
                "name": "punctuation.definition.variable.php"
              },
              "4": {
                "name": "keyword.operator.class.php"
              },
              "5": {
                "name": "variable.other.property.php"
              },
              "6": {
                "name": "punctuation.section.array.begin.php"
              },
              "7": {
                "name": "constant.numeric.index.php"
              },
              "8": {
                "name": "variable.other.index.php"
              },
              "9": {
                "name": "punctuation.definition.variable.php"
              },
              "10": {
                "name": "string.unquoted.index.php"
              },
              "11": {
                "name": "punctuation.section.array.end.php"
              }
            },
            "comment": "Simple syntax: $foo, $foo[0], $foo[$bar], $foo->bar",
            "match": "((\\$)(?<name>[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*))(?:(->)(\\g<name>)|(\\[)(?:(\\d+)|((\\$)\\g<name>)|(\\w+))(\\]))?"
          },
          {
            "captures": {
              "1": {
                "name": "variable.other.php"
              },
              "2": {
                "name": "punctuation.definition.variable.php"
              },
              "4": {
                "name": "punctuation.definition.variable.php"
              }
            },
            "comment": "Simple syntax with braces: \"foo${bar}baz\"",
            "match": "((\\$\\{)(?<name>[a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)(\\}))"
          }
        ]
      },
      "variables": {
        "patterns": [
          {
            "include": "#var_global"
          },
          {
            "include": "#var_global_safer"
          },
          {
            "include": "#var_basic"
          },
          {
            "begin": "(\\$\\{)(?=.*?\\})",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.variable.php"
              }
            },
            "end": "(\\})",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.variable.php"
              }
            },
            "patterns": [
              {
                "include": "#language"
              }
            ]
          }
        ]
      },
      "xhp": {
        "comment": "Avoid < operator expressions as best we can using Zertosh's regex",
        "patterns": [
          {
            "applyEndPatternLast": 1,
            "begin": "(?<=\\(|\\{|\\[|,|&&|\\|\\||\\?|:|=|=>|\\Wreturn|^return|^)\\s*(?=<[_\\p{L}])",
            "contentName": "source.xhp",
            "end": "(?=.)",
            "patterns": [
              {
                "include": "#xhp-tag-element-name"
              }
            ]
          }
        ]
      },
      "xhp-assignment": {
        "patterns": [
          {
            "comment": "look for attribute assignment",
            "match": "=(?=\\s*(?:'|\"|{|/\\*|<|//|\\n))",
            "name": "keyword.operator.assignment.xhp"
          }
        ]
      },
      "xhp-attribute-name": {
        "patterns": [
          {
            "captures": {
              "0": {
                "name": "entity.other.attribute-name.xhp"
              }
            },
            "comment": "look for attribute name",
            "match": "(?<!\\S)([_\\p{L}](?:[\\p{L}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Nl}\\p{Pc}-](?<!\\.\\.))*+)(?<!\\.)(?=//|/\\*|=|\\s|>|/>)"
          }
        ]
      },
      "xhp-entities": {
        "patterns": [
          {
            "captures": {
              "0": {
                "name": "constant.character.entity.xhp"
              },
              "1": {
                "name": "punctuation.definition.entity.xhp"
              },
              "2": {
                "name": "entity.name.tag.html.xhp"
              },
              "3": {
                "name": "punctuation.definition.entity.xhp"
              }
            },
            "comment": "Embeded HTML entities &blah",
            "match": "(&)([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+)(;)"
          },
          {
            "comment": "Entity with & and invalid name",
            "match": "&\\S*;",
            "name": "invalid.illegal.bad-ampersand.xhp"
          }
        ]
      },
      "xhp-evaluated-code": {
        "begin": "{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.embedded.begin.xhp"
          }
        },
        "contentName": "source.php.xhp",
        "end": "}",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.embedded.end.xhp"
          }
        },
        "name": "meta.embedded.expression.php",
        "patterns": [
          {
            "include": "#language"
          }
        ]
      },
      "xhp-html-comments": {
        "begin": "<!--",
        "captures": {
          "0": {
            "name": "punctuation.definition.comment.html"
          }
        },
        "end": "--\\s*>",
        "name": "comment.block.html",
        "patterns": [
          {
            "match": "--(?!-*\\s*>)",
            "name": "invalid.illegal.bad-comments-or-CDATA.html"
          }
        ]
      },
      "xhp-string-double-quoted": {
        "begin": "\"",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.xhp"
          }
        },
        "end": "\"(?<!\\\\\")",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.xhp"
          }
        },
        "name": "string.quoted.double.php",
        "patterns": [
          {
            "include": "#xhp-entities"
          }
        ]
      },
      "xhp-string-single-quoted": {
        "begin": "'",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.xhp"
          }
        },
        "end": "'(?<!\\\\')",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.xhp"
          }
        },
        "name": "string.quoted.single.php",
        "patterns": [
          {
            "include": "#xhp-entities"
          }
        ]
      },
      "xhp-tag-attributes": {
        "patterns": [
          {
            "include": "#xhp-attribute-name"
          },
          {
            "include": "#xhp-assignment"
          },
          {
            "include": "#xhp-string-double-quoted"
          },
          {
            "include": "#xhp-string-single-quoted"
          },
          {
            "include": "#xhp-evaluated-code"
          },
          {
            "include": "#xhp-tag-element-name"
          },
          {
            "include": "#comments"
          }
        ]
      },
      "xhp-tag-element-name": {
        "patterns": [
          {
            "begin": "\\s*(<)([_\\p{L}](?:[:\\p{L}\\p{Mn}\\p{Mc}\\p{Nd}\\p{Nl}\\p{Pc}-])*+)(?=[/>\\s])(?<![\\:])",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.xhp"
              },
              "2": {
                "name": "entity.name.tag.open.xhp"
              }
            },
            "comment": "Tags that end > are trapped in #xhp-tag-termination",
            "end": "\\s*(?<=</)(\\2)(>)|(/>)|((?<=</)[\\S ]*?)>",
            "endCaptures": {
              "1": {
                "name": "entity.name.tag.close.xhp"
              },
              "2": {
                "name": "punctuation.definition.tag.xhp"
              },
              "3": {
                "name": "punctuation.definition.tag.xhp"
              },
              "4": {
                "name": "invalid.illegal.termination.xhp"
              }
            },
            "patterns": [
              {
                "include": "#xhp-tag-termination"
              },
              {
                "include": "#xhp-html-comments"
              },
              {
                "include": "#xhp-tag-attributes"
              }
            ]
          }
        ]
      },
      "xhp-tag-termination": {
        "patterns": [
          {
            "begin": "(?<!--)(>)",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.tag.xhp"
              },
              "1": {
                "name": "XHPStartTagEnd"
              }
            },
            "comment": "uses non consuming search for </ in </tag>",
            "end": "(</)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.xhp"
              },
              "1": {
                "name": "XHPEndTagStart"
              }
            },
            "patterns": [
              {
                "include": "#xhp-evaluated-code"
              },
              {
                "include": "#xhp-entities"
              },
              {
                "include": "#xhp-html-comments"
              },
              {
                "include": "#xhp-tag-element-name"
              }
            ]
          }
        ]
      }
    },
    "scopeName": "source.hack",
    "embeddedLangs": [
      "html",
      "sql"
    ]
  }
])