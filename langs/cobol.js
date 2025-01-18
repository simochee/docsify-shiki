/** Shiki Language: cobol */
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
    "displayName": "Java",
    "name": "java",
    "patterns": [
      {
        "begin": "\\b(package)\\b\\s*",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.package.java"
          }
        },
        "contentName": "storage.modifier.package.java",
        "end": "\\s*(;)",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.java"
          }
        },
        "name": "meta.package.java",
        "patterns": [
          {
            "include": "#comments"
          },
          {
            "match": "(?<=\\.)\\s*\\.|\\.(?=\\s*;)",
            "name": "invalid.illegal.character_not_allowed_here.java"
          },
          {
            "match": "(?<!_)_(?=\\s*(\\.|;))|\\b\\d+|-+",
            "name": "invalid.illegal.character_not_allowed_here.java"
          },
          {
            "match": "[A-Z]+",
            "name": "invalid.deprecated.package_name_not_lowercase.java"
          },
          {
            "match": "\\b(?<!\\$)(abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|non-sealed|package|permits|private|protected|public|return|sealed|short|static|strictfp|super|switch|syncronized|this|throw|throws|transient|try|void|volatile|while|yield|true|false|null)\\b",
            "name": "invalid.illegal.character_not_allowed_here.java"
          },
          {
            "match": "\\.",
            "name": "punctuation.separator.java"
          }
        ]
      },
      {
        "begin": "\\b(import)\\b\\s*\\b(static)?\\b\\s",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.import.java"
          },
          "2": {
            "name": "storage.modifier.java"
          }
        },
        "contentName": "storage.modifier.import.java",
        "end": "\\s*(;)",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.java"
          }
        },
        "name": "meta.import.java",
        "patterns": [
          {
            "include": "#comments"
          },
          {
            "match": "(?<=\\.)\\s*\\.|\\.(?=\\s*;)",
            "name": "invalid.illegal.character_not_allowed_here.java"
          },
          {
            "match": "(?<!\\.)\\s*\\*",
            "name": "invalid.illegal.character_not_allowed_here.java"
          },
          {
            "match": "(?<!_)_(?=\\s*(\\.|;))|\\b\\d+|-+",
            "name": "invalid.illegal.character_not_allowed_here.java"
          },
          {
            "match": "\\b(?<!\\$)(abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|non-sealed|package|permits|private|protected|public|return|sealed|short|static|strictfp|super|switch|syncronized|this|throw|throws|transient|try|void|volatile|while|yield|true|false|null)\\b",
            "name": "invalid.illegal.character_not_allowed_here.java"
          },
          {
            "match": "\\.",
            "name": "punctuation.separator.java"
          },
          {
            "match": "\\*",
            "name": "variable.language.wildcard.java"
          }
        ]
      },
      {
        "include": "#comments-javadoc"
      },
      {
        "include": "#code"
      },
      {
        "include": "#module"
      }
    ],
    "repository": {
      "all-types": {
        "patterns": [
          {
            "include": "#primitive-arrays"
          },
          {
            "include": "#primitive-types"
          },
          {
            "include": "#object-types"
          }
        ]
      },
      "annotations": {
        "patterns": [
          {
            "begin": "((@)\\s*([^\\s(]+))(\\()",
            "beginCaptures": {
              "2": {
                "name": "punctuation.definition.annotation.java"
              },
              "3": {
                "name": "storage.type.annotation.java"
              },
              "4": {
                "name": "punctuation.definition.annotation-arguments.begin.bracket.round.java"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.annotation-arguments.end.bracket.round.java"
              }
            },
            "name": "meta.declaration.annotation.java",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "constant.other.key.java"
                  },
                  "2": {
                    "name": "keyword.operator.assignment.java"
                  }
                },
                "match": "(\\w*)\\s*(=)"
              },
              {
                "include": "#code"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.annotation.java"
              },
              "2": {
                "name": "storage.modifier.java"
              },
              "3": {
                "name": "storage.type.annotation.java"
              },
              "5": {
                "name": "punctuation.definition.annotation.java"
              },
              "6": {
                "name": "storage.type.annotation.java"
              }
            },
            "match": "(@)(interface)\\s+(\\w*)|((@)\\s*(\\w+))",
            "name": "meta.declaration.annotation.java"
          }
        ]
      },
      "anonymous-block-and-instance-initializer": {
        "begin": "{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.java"
          }
        },
        "end": "}",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.java"
          }
        },
        "patterns": [
          {
            "include": "#code"
          }
        ]
      },
      "anonymous-classes-and-new": {
        "begin": "\\bnew\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.control.new.java"
          }
        },
        "end": "(?=;|\\)|\\]|\\.|,|\\?|:|}|\\+|\\-|\\*|\\/(?!\\/|\\*)|%|!|&|\\||\\^|=)",
        "patterns": [
          {
            "include": "#comments"
          },
          {
            "include": "#function-call"
          },
          {
            "include": "#all-types"
          },
          {
            "begin": "(?<=\\))",
            "end": "(?=;|\\)|\\]|\\.|,|\\?|:|}|\\+|\\-|\\*|\\/(?!\\/|\\*)|%|!|&|\\||\\^|=)",
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.inner-class.begin.bracket.curly.java"
                  }
                },
                "end": "}",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.inner-class.end.bracket.curly.java"
                  }
                },
                "name": "meta.inner-class.java",
                "patterns": [
                  {
                    "include": "#class-body"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?<=\\])",
            "end": "(?=;|\\)|\\]|\\.|,|\\?|:|}|\\+|\\-|\\*|\\/(?!\\/|\\*)|%|!|&|\\||\\^|=)",
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.array-initializer.begin.bracket.curly.java"
                  }
                },
                "end": "}",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.array-initializer.end.bracket.curly.java"
                  }
                },
                "name": "meta.array-initializer.java",
                "patterns": [
                  {
                    "include": "#code"
                  }
                ]
              }
            ]
          },
          {
            "include": "#parens"
          }
        ]
      },
      "assertions": {
        "patterns": [
          {
            "begin": "\\b(assert)\\s",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.assert.java"
              }
            },
            "end": "$",
            "name": "meta.declaration.assertion.java",
            "patterns": [
              {
                "match": ":",
                "name": "keyword.operator.assert.expression-separator.java"
              },
              {
                "include": "#code"
              }
            ]
          }
        ]
      },
      "class": {
        "begin": "(?=\\w?[\\w\\s-]*\\b(?:class|(?<!@)interface|enum)\\s+[\\w$]+)",
        "end": "}",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.class.end.bracket.curly.java"
          }
        },
        "name": "meta.class.java",
        "patterns": [
          {
            "include": "#storage-modifiers"
          },
          {
            "include": "#generics"
          },
          {
            "include": "#comments"
          },
          {
            "captures": {
              "1": {
                "name": "storage.modifier.java"
              },
              "2": {
                "name": "entity.name.type.class.java"
              }
            },
            "match": "(class|(?<!@)interface|enum)\\s+([\\w$]+)",
            "name": "meta.class.identifier.java"
          },
          {
            "begin": "extends",
            "beginCaptures": {
              "0": {
                "name": "storage.modifier.extends.java"
              }
            },
            "end": "(?={|implements|permits)",
            "name": "meta.definition.class.inherited.classes.java",
            "patterns": [
              {
                "include": "#object-types-inherited"
              },
              {
                "include": "#comments"
              }
            ]
          },
          {
            "begin": "(implements)\\s",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.implements.java"
              }
            },
            "end": "(?=\\s*extends|permits|\\{)",
            "name": "meta.definition.class.implemented.interfaces.java",
            "patterns": [
              {
                "include": "#object-types-inherited"
              },
              {
                "include": "#comments"
              }
            ]
          },
          {
            "begin": "(permits)\\s",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.permits.java"
              }
            },
            "end": "(?=\\s*extends|implements|\\{)",
            "name": "meta.definition.class.permits.classes.java",
            "patterns": [
              {
                "include": "#object-types-inherited"
              },
              {
                "include": "#comments"
              }
            ]
          },
          {
            "begin": "{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.class.begin.bracket.curly.java"
              }
            },
            "contentName": "meta.class.body.java",
            "end": "(?=})",
            "patterns": [
              {
                "include": "#class-body"
              }
            ]
          }
        ]
      },
      "class-body": {
        "patterns": [
          {
            "include": "#comments-javadoc"
          },
          {
            "include": "#comments"
          },
          {
            "include": "#enums"
          },
          {
            "include": "#class"
          },
          {
            "include": "#generics"
          },
          {
            "include": "#static-initializer"
          },
          {
            "include": "#class-fields-and-methods"
          },
          {
            "include": "#annotations"
          },
          {
            "include": "#storage-modifiers"
          },
          {
            "include": "#member-variables"
          },
          {
            "include": "#code"
          }
        ]
      },
      "class-fields-and-methods": {
        "patterns": [
          {
            "begin": "(?=\\=)",
            "end": "(?=;)",
            "patterns": [
              {
                "include": "#code"
              }
            ]
          },
          {
            "include": "#methods"
          }
        ]
      },
      "code": {
        "patterns": [
          {
            "include": "#annotations"
          },
          {
            "include": "#comments"
          },
          {
            "include": "#enums"
          },
          {
            "include": "#class"
          },
          {
            "include": "#record"
          },
          {
            "include": "#anonymous-block-and-instance-initializer"
          },
          {
            "include": "#try-catch-finally"
          },
          {
            "include": "#assertions"
          },
          {
            "include": "#parens"
          },
          {
            "include": "#constants-and-special-vars"
          },
          {
            "include": "#numbers"
          },
          {
            "include": "#anonymous-classes-and-new"
          },
          {
            "include": "#lambda-expression"
          },
          {
            "include": "#keywords"
          },
          {
            "include": "#storage-modifiers"
          },
          {
            "include": "#method-call"
          },
          {
            "include": "#function-call"
          },
          {
            "include": "#variables"
          },
          {
            "include": "#variables-local"
          },
          {
            "include": "#objects"
          },
          {
            "include": "#properties"
          },
          {
            "include": "#strings"
          },
          {
            "include": "#all-types"
          },
          {
            "match": ",",
            "name": "punctuation.separator.delimiter.java"
          },
          {
            "match": "\\.",
            "name": "punctuation.separator.period.java"
          },
          {
            "match": ";",
            "name": "punctuation.terminator.java"
          }
        ]
      },
      "comments": {
        "patterns": [
          {
            "captures": {
              "0": {
                "name": "punctuation.definition.comment.java"
              }
            },
            "match": "/\\*\\*/",
            "name": "comment.block.empty.java"
          },
          {
            "include": "#comments-inline"
          }
        ]
      },
      "comments-inline": {
        "patterns": [
          {
            "begin": "/\\*",
            "captures": {
              "0": {
                "name": "punctuation.definition.comment.java"
              }
            },
            "end": "\\*/",
            "name": "comment.block.java"
          },
          {
            "begin": "(^[ \\t]+)?(?=//)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.whitespace.comment.leading.java"
              }
            },
            "end": "(?!\\G)",
            "patterns": [
              {
                "begin": "//",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.comment.java"
                  }
                },
                "end": "\\n",
                "name": "comment.line.double-slash.java"
              }
            ]
          }
        ]
      },
      "comments-javadoc": {
        "patterns": [
          {
            "begin": "^\\s*(/\\*\\*)(?!/)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.comment.java"
              }
            },
            "end": "\\*/",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.comment.java"
              }
            },
            "name": "comment.block.javadoc.java",
            "patterns": [
              {
                "match": "@(author|deprecated|return|see|serial|since|version)\\b",
                "name": "keyword.other.documentation.javadoc.java"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.other.documentation.javadoc.java"
                  },
                  "2": {
                    "name": "variable.parameter.java"
                  }
                },
                "match": "(@param)\\s+(\\S+)"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.other.documentation.javadoc.java"
                  },
                  "2": {
                    "name": "entity.name.type.class.java"
                  }
                },
                "match": "(@(?:exception|throws))\\s+(\\S+)"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.other.documentation.javadoc.java"
                  },
                  "2": {
                    "name": "entity.name.type.class.java"
                  },
                  "3": {
                    "name": "variable.parameter.java"
                  }
                },
                "match": "{(@link)\\s+(\\S+)?#([\\w$]+\\s*\\([^\\(\\)]*\\)).*?}"
              }
            ]
          }
        ]
      },
      "constants-and-special-vars": {
        "patterns": [
          {
            "match": "\\b(true|false|null)\\b",
            "name": "constant.language.java"
          },
          {
            "match": "\\bthis\\b",
            "name": "variable.language.this.java"
          },
          {
            "match": "\\bsuper\\b",
            "name": "variable.language.java"
          }
        ]
      },
      "enums": {
        "begin": "^\\s*([\\w\\s]*)(enum)\\s+(\\w+)",
        "beginCaptures": {
          "1": {
            "patterns": [
              {
                "include": "#storage-modifiers"
              }
            ]
          },
          "2": {
            "name": "storage.modifier.java"
          },
          "3": {
            "name": "entity.name.type.enum.java"
          }
        },
        "end": "}",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.enum.end.bracket.curly.java"
          }
        },
        "name": "meta.enum.java",
        "patterns": [
          {
            "begin": "\\b(extends)\\b",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.extends.java"
              }
            },
            "end": "(?={|\\bimplements\\b)",
            "name": "meta.definition.class.inherited.classes.java",
            "patterns": [
              {
                "include": "#object-types-inherited"
              },
              {
                "include": "#comments"
              }
            ]
          },
          {
            "begin": "\\b(implements)\\b",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.implements.java"
              }
            },
            "end": "(?={|\\bextends\\b)",
            "name": "meta.definition.class.implemented.interfaces.java",
            "patterns": [
              {
                "include": "#object-types-inherited"
              },
              {
                "include": "#comments"
              }
            ]
          },
          {
            "begin": "{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.enum.begin.bracket.curly.java"
              }
            },
            "end": "(?=})",
            "patterns": [
              {
                "begin": "(?<={)",
                "end": "(?=;|})",
                "patterns": [
                  {
                    "include": "#comments-javadoc"
                  },
                  {
                    "include": "#comments"
                  },
                  {
                    "begin": "\\b(\\w+)\\b",
                    "beginCaptures": {
                      "1": {
                        "name": "constant.other.enum.java"
                      }
                    },
                    "end": "(,)|(?=;|})",
                    "endCaptures": {
                      "1": {
                        "name": "punctuation.separator.delimiter.java"
                      }
                    },
                    "patterns": [
                      {
                        "include": "#comments-javadoc"
                      },
                      {
                        "include": "#comments"
                      },
                      {
                        "begin": "\\(",
                        "beginCaptures": {
                          "0": {
                            "name": "punctuation.bracket.round.java"
                          }
                        },
                        "end": "\\)",
                        "endCaptures": {
                          "0": {
                            "name": "punctuation.bracket.round.java"
                          }
                        },
                        "patterns": [
                          {
                            "include": "#code"
                          }
                        ]
                      },
                      {
                        "begin": "{",
                        "beginCaptures": {
                          "0": {
                            "name": "punctuation.bracket.curly.java"
                          }
                        },
                        "end": "}",
                        "endCaptures": {
                          "0": {
                            "name": "punctuation.bracket.curly.java"
                          }
                        },
                        "patterns": [
                          {
                            "include": "#class-body"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "include": "#class-body"
              }
            ]
          }
        ]
      },
      "function-call": {
        "begin": "([A-Za-z_$][\\w$]*)\\s*(\\()",
        "beginCaptures": {
          "1": {
            "name": "entity.name.function.java"
          },
          "2": {
            "name": "punctuation.definition.parameters.begin.bracket.round.java"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.parameters.end.bracket.round.java"
          }
        },
        "name": "meta.function-call.java",
        "patterns": [
          {
            "include": "#code"
          }
        ]
      },
      "generics": {
        "begin": "<",
        "beginCaptures": {
          "0": {
            "name": "punctuation.bracket.angle.java"
          }
        },
        "end": ">",
        "endCaptures": {
          "0": {
            "name": "punctuation.bracket.angle.java"
          }
        },
        "patterns": [
          {
            "match": "\\b(extends|super)\\b",
            "name": "storage.modifier.$1.java"
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.java"
              }
            },
            "match": "(?<!\\.)([a-zA-Z$_][a-zA-Z0-9$_]*)(?=\\s*<)"
          },
          {
            "include": "#primitive-arrays"
          },
          {
            "match": "[a-zA-Z$_][a-zA-Z0-9$_]*",
            "name": "storage.type.generic.java"
          },
          {
            "match": "\\?",
            "name": "storage.type.generic.wildcard.java"
          },
          {
            "match": "&",
            "name": "punctuation.separator.types.java"
          },
          {
            "match": ",",
            "name": "punctuation.separator.delimiter.java"
          },
          {
            "match": "\\.",
            "name": "punctuation.separator.period.java"
          },
          {
            "include": "#parens"
          },
          {
            "include": "#generics"
          },
          {
            "include": "#comments"
          }
        ]
      },
      "keywords": {
        "patterns": [
          {
            "match": "\\bthrow\\b",
            "name": "keyword.control.throw.java"
          },
          {
            "match": "\\?|:",
            "name": "keyword.control.ternary.java"
          },
          {
            "match": "\\b(return|yield|break|case|continue|default|do|while|for|switch|if|else)\\b",
            "name": "keyword.control.java"
          },
          {
            "match": "\\b(instanceof)\\b",
            "name": "keyword.operator.instanceof.java"
          },
          {
            "match": "(<<|>>>?|~|\\^)",
            "name": "keyword.operator.bitwise.java"
          },
          {
            "match": "((&|\\^|\\||<<|>>>?)=)",
            "name": "keyword.operator.assignment.bitwise.java"
          },
          {
            "match": "(===?|!=|<=|>=|<>|<|>)",
            "name": "keyword.operator.comparison.java"
          },
          {
            "match": "([+*/%-]=)",
            "name": "keyword.operator.assignment.arithmetic.java"
          },
          {
            "match": "(=)",
            "name": "keyword.operator.assignment.java"
          },
          {
            "match": "(\\-\\-|\\+\\+)",
            "name": "keyword.operator.increment-decrement.java"
          },
          {
            "match": "(\\-|\\+|\\*|\\/|%)",
            "name": "keyword.operator.arithmetic.java"
          },
          {
            "match": "(!|&&|\\|\\|)",
            "name": "keyword.operator.logical.java"
          },
          {
            "match": "(\\||&)",
            "name": "keyword.operator.bitwise.java"
          },
          {
            "match": "\\b(const|goto)\\b",
            "name": "keyword.reserved.java"
          }
        ]
      },
      "lambda-expression": {
        "patterns": [
          {
            "match": "->",
            "name": "storage.type.function.arrow.java"
          }
        ]
      },
      "member-variables": {
        "begin": "(?=private|protected|public|native|synchronized|abstract|threadsafe|transient|static|final)",
        "end": "(?=\\=|;)",
        "patterns": [
          {
            "include": "#storage-modifiers"
          },
          {
            "include": "#variables"
          },
          {
            "include": "#primitive-arrays"
          },
          {
            "include": "#object-types"
          }
        ]
      },
      "method-call": {
        "begin": "(\\.)\\s*([A-Za-z_$][\\w$]*)\\s*(\\()",
        "beginCaptures": {
          "1": {
            "name": "punctuation.separator.period.java"
          },
          "2": {
            "name": "entity.name.function.java"
          },
          "3": {
            "name": "punctuation.definition.parameters.begin.bracket.round.java"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.parameters.end.bracket.round.java"
          }
        },
        "name": "meta.method-call.java",
        "patterns": [
          {
            "include": "#code"
          }
        ]
      },
      "methods": {
        "begin": "(?!new)(?=[\\w<].*\\s+)(?=([^=/]|/(?!/))+\\()",
        "end": "(})|(?=;)",
        "endCaptures": {
          "1": {
            "name": "punctuation.section.method.end.bracket.curly.java"
          }
        },
        "name": "meta.method.java",
        "patterns": [
          {
            "include": "#storage-modifiers"
          },
          {
            "begin": "(\\w+)\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.java"
              },
              "2": {
                "name": "punctuation.definition.parameters.begin.bracket.round.java"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.parameters.end.bracket.round.java"
              }
            },
            "name": "meta.method.identifier.java",
            "patterns": [
              {
                "include": "#parameters"
              },
              {
                "include": "#parens"
              },
              {
                "include": "#comments"
              }
            ]
          },
          {
            "include": "#generics"
          },
          {
            "begin": "(?=\\w.*\\s+\\w+\\s*\\()",
            "end": "(?=\\s+\\w+\\s*\\()",
            "name": "meta.method.return-type.java",
            "patterns": [
              {
                "include": "#all-types"
              },
              {
                "include": "#parens"
              },
              {
                "include": "#comments"
              }
            ]
          },
          {
            "include": "#throws"
          },
          {
            "begin": "{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.method.begin.bracket.curly.java"
              }
            },
            "contentName": "meta.method.body.java",
            "end": "(?=})",
            "patterns": [
              {
                "include": "#code"
              }
            ]
          },
          {
            "include": "#comments"
          }
        ]
      },
      "module": {
        "begin": "((open)\\s)?(module)\\s+(\\w+)",
        "beginCaptures": {
          "1": {
            "name": "storage.modifier.java"
          },
          "3": {
            "name": "storage.modifier.java"
          },
          "4": {
            "name": "entity.name.type.module.java"
          }
        },
        "end": "}",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.module.end.bracket.curly.java"
          }
        },
        "name": "meta.module.java",
        "patterns": [
          {
            "begin": "{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.module.begin.bracket.curly.java"
              }
            },
            "contentName": "meta.module.body.java",
            "end": "(?=})",
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "include": "#comments-javadoc"
              },
              {
                "match": "\\b(requires|transitive|exports|opens|to|uses|provides|with)\\b",
                "name": "keyword.module.java"
              }
            ]
          }
        ]
      },
      "numbers": {
        "patterns": [
          {
            "match": "\\b(?<!\\$)0(x|X)((?<!\\.)[0-9a-fA-F]([0-9a-fA-F_]*[0-9a-fA-F])?[Ll]?(?!\\.)|([0-9a-fA-F]([0-9a-fA-F_]*[0-9a-fA-F])?\\.?|([0-9a-fA-F]([0-9a-fA-F_]*[0-9a-fA-F])?)?\\.[0-9a-fA-F]([0-9a-fA-F_]*[0-9a-fA-F])?)[Pp][+-]?[0-9]([0-9_]*[0-9])?[FfDd]?)\\b(?!\\$)",
            "name": "constant.numeric.hex.java"
          },
          {
            "match": "\\b(?<!\\$)0(b|B)[01]([01_]*[01])?[Ll]?\\b(?!\\$)",
            "name": "constant.numeric.binary.java"
          },
          {
            "match": "\\b(?<!\\$)0[0-7]([0-7_]*[0-7])?[Ll]?\\b(?!\\$)",
            "name": "constant.numeric.octal.java"
          },
          {
            "match": "(?<!\\$)(\\b[0-9]([0-9_]*[0-9])?\\.\\B(?!\\.)|\\b[0-9]([0-9_]*[0-9])?\\.([Ee][+-]?[0-9]([0-9_]*[0-9])?)[FfDd]?\\b|\\b[0-9]([0-9_]*[0-9])?\\.([Ee][+-]?[0-9]([0-9_]*[0-9])?)?[FfDd]\\b|\\b[0-9]([0-9_]*[0-9])?\\.([0-9]([0-9_]*[0-9])?)([Ee][+-]?[0-9]([0-9_]*[0-9])?)?[FfDd]?\\b|(?<!\\.)\\B\\.[0-9]([0-9_]*[0-9])?([Ee][+-]?[0-9]([0-9_]*[0-9])?)?[FfDd]?\\b|\\b[0-9]([0-9_]*[0-9])?([Ee][+-]?[0-9]([0-9_]*[0-9])?)[FfDd]?\\b|\\b[0-9]([0-9_]*[0-9])?([Ee][+-]?[0-9]([0-9_]*[0-9])?)?[FfDd]\\b|\\b(0|[1-9]([0-9_]*[0-9])?)(?!\\.)[Ll]?\\b)(?!\\$)",
            "name": "constant.numeric.decimal.java"
          }
        ]
      },
      "object-types": {
        "patterns": [
          {
            "include": "#generics"
          },
          {
            "begin": "\\b((?:[A-Za-z_]\\w*\\s*\\.\\s*)*)([A-Z_]\\w*)\\s*(?=\\[)",
            "beginCaptures": {
              "1": {
                "patterns": [
                  {
                    "match": "[A-Za-z_]\\w*",
                    "name": "storage.type.java"
                  },
                  {
                    "match": "\\.",
                    "name": "punctuation.separator.period.java"
                  }
                ]
              },
              "2": {
                "name": "storage.type.object.array.java"
              }
            },
            "end": "(?!\\s*\\[)",
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "include": "#parens"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "patterns": [
                  {
                    "match": "[A-Za-z_]\\w*",
                    "name": "storage.type.java"
                  },
                  {
                    "match": "\\.",
                    "name": "punctuation.separator.period.java"
                  }
                ]
              }
            },
            "match": "\\b((?:[A-Za-z_]\\w*\\s*\\.\\s*)*[A-Z_]\\w*)\\s*(?=<)"
          },
          {
            "captures": {
              "1": {
                "patterns": [
                  {
                    "match": "[A-Za-z_]\\w*",
                    "name": "storage.type.java"
                  },
                  {
                    "match": "\\.",
                    "name": "punctuation.separator.period.java"
                  }
                ]
              }
            },
            "match": "\\b((?:[A-Za-z_]\\w*\\s*\\.\\s*)*[A-Z_]\\w*)\\b((?=\\s*[A-Za-z$_\\n])|(?=\\s*\\.\\.\\.))"
          }
        ]
      },
      "object-types-inherited": {
        "patterns": [
          {
            "include": "#generics"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.separator.period.java"
              }
            },
            "match": "\\b(?:[A-Z]\\w*\\s*(\\.)\\s*)*[A-Z]\\w*\\b",
            "name": "entity.other.inherited-class.java"
          },
          {
            "match": ",",
            "name": "punctuation.separator.delimiter.java"
          }
        ]
      },
      "objects": {
        "match": "(?<![\\w$])[a-zA-Z_$][\\w$]*(?=\\s*\\.\\s*[\\w$]+)",
        "name": "variable.other.object.java"
      },
      "parameters": {
        "patterns": [
          {
            "match": "\\bfinal\\b",
            "name": "storage.modifier.java"
          },
          {
            "include": "#annotations"
          },
          {
            "include": "#all-types"
          },
          {
            "include": "#strings"
          },
          {
            "match": "\\w+",
            "name": "variable.parameter.java"
          },
          {
            "match": ",",
            "name": "punctuation.separator.delimiter.java"
          },
          {
            "match": "\\.\\.\\.",
            "name": "punctuation.definition.parameters.varargs.java"
          }
        ]
      },
      "parens": {
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.bracket.round.java"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.bracket.round.java"
              }
            },
            "patterns": [
              {
                "include": "#code"
              }
            ]
          },
          {
            "begin": "\\[",
            "beginCaptures": {
              "0": {
                "name": "punctuation.bracket.square.java"
              }
            },
            "end": "\\]",
            "endCaptures": {
              "0": {
                "name": "punctuation.bracket.square.java"
              }
            },
            "patterns": [
              {
                "include": "#code"
              }
            ]
          },
          {
            "begin": "{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.bracket.curly.java"
              }
            },
            "end": "}",
            "endCaptures": {
              "0": {
                "name": "punctuation.bracket.curly.java"
              }
            },
            "patterns": [
              {
                "include": "#code"
              }
            ]
          }
        ]
      },
      "primitive-arrays": {
        "patterns": [
          {
            "begin": "\\b(void|boolean|byte|char|short|int|float|long|double)\\b\\s*(?=\\[)",
            "beginCaptures": {
              "1": {
                "name": "storage.type.primitive.array.java"
              }
            },
            "end": "(?!\\s*\\[)",
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "include": "#parens"
              }
            ]
          }
        ]
      },
      "primitive-types": {
        "match": "\\b(void|boolean|byte|char|short|int|float|long|double)\\b",
        "name": "storage.type.primitive.java"
      },
      "properties": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.separator.period.java"
              },
              "2": {
                "name": "keyword.control.new.java"
              }
            },
            "match": "(\\.)\\s*(new)"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.separator.period.java"
              },
              "2": {
                "name": "variable.other.object.property.java"
              }
            },
            "match": "(\\.)\\s*([a-zA-Z_$][\\w$]*)(?=\\s*\\.\\s*[a-zA-Z_$][\\w$]*)"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.separator.period.java"
              },
              "2": {
                "name": "variable.other.object.property.java"
              }
            },
            "match": "(\\.)\\s*([a-zA-Z_$][\\w$]*)"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.separator.period.java"
              },
              "2": {
                "name": "invalid.illegal.identifier.java"
              }
            },
            "match": "(\\.)\\s*([0-9][\\w$]*)"
          }
        ]
      },
      "record": {
        "begin": "(?=\\w?[\\w\\s]*\\b(?:record)\\s+[\\w$]+)",
        "end": "}",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.class.end.bracket.curly.java"
          }
        },
        "name": "meta.record.java",
        "patterns": [
          {
            "include": "#storage-modifiers"
          },
          {
            "include": "#generics"
          },
          {
            "include": "#comments"
          },
          {
            "begin": "(record)\\s+([\\w$]+)(<[\\w$]+>)?(\\()",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.java"
              },
              "2": {
                "name": "entity.name.type.record.java"
              },
              "3": {
                "patterns": [
                  {
                    "include": "#generics"
                  }
                ]
              },
              "4": {
                "name": "punctuation.definition.parameters.begin.bracket.round.java"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.parameters.end.bracket.round.java"
              }
            },
            "name": "meta.record.identifier.java",
            "patterns": [
              {
                "include": "#code"
              }
            ]
          },
          {
            "begin": "(implements)\\s",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.implements.java"
              }
            },
            "end": "(?=\\s*\\{)",
            "name": "meta.definition.class.implemented.interfaces.java",
            "patterns": [
              {
                "include": "#object-types-inherited"
              },
              {
                "include": "#comments"
              }
            ]
          },
          {
            "include": "#record-body"
          }
        ]
      },
      "record-body": {
        "begin": "{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.class.begin.bracket.curly.java"
          }
        },
        "end": "(?=})",
        "name": "meta.record.body.java",
        "patterns": [
          {
            "include": "#record-constructor"
          },
          {
            "include": "#class-body"
          }
        ]
      },
      "record-constructor": {
        "begin": "(?!new)(?=[\\w<].*\\s+)(?=([^\\(=/]|/(?!/))+(?={))",
        "end": "(})|(?=;)",
        "endCaptures": {
          "1": {
            "name": "punctuation.section.method.end.bracket.curly.java"
          }
        },
        "name": "meta.method.java",
        "patterns": [
          {
            "include": "#storage-modifiers"
          },
          {
            "begin": "(\\w+)",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.java"
              }
            },
            "end": "(?=\\s*{)",
            "name": "meta.method.identifier.java",
            "patterns": [
              {
                "include": "#comments"
              }
            ]
          },
          {
            "include": "#comments"
          },
          {
            "begin": "{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.method.begin.bracket.curly.java"
              }
            },
            "contentName": "meta.method.body.java",
            "end": "(?=})",
            "patterns": [
              {
                "include": "#code"
              }
            ]
          }
        ]
      },
      "static-initializer": {
        "patterns": [
          {
            "include": "#anonymous-block-and-instance-initializer"
          },
          {
            "match": "static",
            "name": "storage.modifier.java"
          }
        ]
      },
      "storage-modifiers": {
        "match": "\\b(public|private|protected|static|final|native|synchronized|abstract|threadsafe|transient|volatile|default|strictfp|sealed|non-sealed)\\b",
        "name": "storage.modifier.java"
      },
      "strings": {
        "patterns": [
          {
            "begin": "\"\"\"",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.java"
              }
            },
            "end": "\"\"\"",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.java"
              }
            },
            "name": "string.quoted.triple.java",
            "patterns": [
              {
                "match": "(\\\\\"\"\")(?!\")|(\\\\.)",
                "name": "constant.character.escape.java"
              }
            ]
          },
          {
            "begin": "\"",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.java"
              }
            },
            "end": "\"",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.java"
              }
            },
            "name": "string.quoted.double.java",
            "patterns": [
              {
                "match": "\\\\.",
                "name": "constant.character.escape.java"
              }
            ]
          },
          {
            "begin": "'",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.java"
              }
            },
            "end": "'",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.java"
              }
            },
            "name": "string.quoted.single.java",
            "patterns": [
              {
                "match": "\\\\.",
                "name": "constant.character.escape.java"
              }
            ]
          }
        ]
      },
      "throws": {
        "begin": "throws",
        "beginCaptures": {
          "0": {
            "name": "storage.modifier.java"
          }
        },
        "end": "(?={|;)",
        "name": "meta.throwables.java",
        "patterns": [
          {
            "match": ",",
            "name": "punctuation.separator.delimiter.java"
          },
          {
            "match": "[a-zA-Z$_][\\.a-zA-Z0-9$_]*",
            "name": "storage.type.java"
          },
          {
            "include": "#comments"
          }
        ]
      },
      "try-catch-finally": {
        "patterns": [
          {
            "begin": "\\btry\\b",
            "beginCaptures": {
              "0": {
                "name": "keyword.control.try.java"
              }
            },
            "end": "}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.try.end.bracket.curly.java"
              }
            },
            "name": "meta.try.java",
            "patterns": [
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.try.resources.begin.bracket.round.java"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.try.resources.end.bracket.round.java"
                  }
                },
                "name": "meta.try.resources.java",
                "patterns": [
                  {
                    "include": "#code"
                  }
                ]
              },
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.try.begin.bracket.curly.java"
                  }
                },
                "contentName": "meta.try.body.java",
                "end": "(?=})",
                "patterns": [
                  {
                    "include": "#code"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(catch)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.catch.java"
              }
            },
            "end": "}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.catch.end.bracket.curly.java"
              }
            },
            "name": "meta.catch.java",
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.parameters.begin.bracket.round.java"
                  }
                },
                "contentName": "meta.catch.parameters.java",
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.parameters.end.bracket.round.java"
                  }
                },
                "patterns": [
                  {
                    "include": "#comments"
                  },
                  {
                    "include": "#storage-modifiers"
                  },
                  {
                    "begin": "[a-zA-Z$_][\\.a-zA-Z0-9$_]*",
                    "beginCaptures": {
                      "0": {
                        "name": "storage.type.java"
                      }
                    },
                    "end": "(\\|)|(?=\\))",
                    "endCaptures": {
                      "1": {
                        "name": "punctuation.catch.separator.java"
                      }
                    },
                    "patterns": [
                      {
                        "include": "#comments"
                      },
                      {
                        "captures": {
                          "0": {
                            "name": "variable.parameter.java"
                          }
                        },
                        "match": "\\w+"
                      }
                    ]
                  }
                ]
              },
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.catch.begin.bracket.curly.java"
                  }
                },
                "contentName": "meta.catch.body.java",
                "end": "(?=})",
                "patterns": [
                  {
                    "include": "#code"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\bfinally\\b",
            "beginCaptures": {
              "0": {
                "name": "keyword.control.finally.java"
              }
            },
            "end": "}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.finally.end.bracket.curly.java"
              }
            },
            "name": "meta.finally.java",
            "patterns": [
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.finally.begin.bracket.curly.java"
                  }
                },
                "contentName": "meta.finally.body.java",
                "end": "(?=})",
                "patterns": [
                  {
                    "include": "#code"
                  }
                ]
              }
            ]
          }
        ]
      },
      "variables": {
        "begin": "(?=\\b((void|boolean|byte|char|short|int|float|long|double)|(?>(\\w+\\.)*[A-Z_]+\\w*))\\b\\s*(<[\\w<>,\\.?\\s\\[\\]]*>)?\\s*((\\[\\])*)?\\s+[A-Za-z_$][\\w$]*([\\w\\[\\],$][\\w\\[\\],\\s]*)?\\s*(=|:|;))",
        "end": "(?=\\=|:|;)",
        "name": "meta.definition.variable.java",
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "variable.other.definition.java"
              }
            },
            "match": "([A-Za-z$_][\\w$]*)(?=\\s*(\\[\\])*\\s*(;|:|=|,))"
          },
          {
            "include": "#all-types"
          },
          {
            "include": "#code"
          }
        ]
      },
      "variables-local": {
        "begin": "(?=\\b(var)\\b\\s+[A-Za-z_$][\\w$]*\\s*(=|:|;))",
        "end": "(?=\\=|:|;)",
        "name": "meta.definition.variable.local.java",
        "patterns": [
          {
            "match": "\\bvar\\b",
            "name": "storage.type.local.java"
          },
          {
            "captures": {
              "1": {
                "name": "variable.other.definition.java"
              }
            },
            "match": "([A-Za-z$_][\\w$]*)(?=\\s*(\\[\\])*\\s*(=|:|;))"
          },
          {
            "include": "#code"
          }
        ]
      }
    },
    "scopeName": "source.java"
  },
  {
    "displayName": "COBOL",
    "fileTypes": [
      "ccp",
      "scbl",
      "cobol",
      "cbl",
      "cblle",
      "cblsrce",
      "cblcpy",
      "lks",
      "pdv",
      "cpy",
      "copybook",
      "cobcopy",
      "fd",
      "sel",
      "scb",
      "scbl",
      "sqlcblle",
      "cob",
      "dds",
      "def",
      "src",
      "ss",
      "wks",
      "bib",
      "pco"
    ],
    "name": "cobol",
    "patterns": [
      {
        "match": "(^[ \\*][ \\*][ \\*][ \\*][ \\*][ \\*])([dD]\\s.*$)",
        "name": "token.info-token.cobol"
      },
      {
        "captures": {
          "1": {
            "name": "constant.numeric.cobol"
          },
          "2": {
            "name": "comment.line.cobol.newpage"
          }
        },
        "match": "(^[ \\*][ \\*][ \\*][ \\*][ \\*][ \\*])(\\/.*$)"
      },
      {
        "captures": {
          "1": {
            "name": "constant.numeric.cobol"
          },
          "2": {
            "name": "comment.line.cobol.fixed"
          }
        },
        "match": "(^[ \\*][ \\*][ \\*][ \\*][ \\*][ \\*])(\\*.*$)"
      },
      {
        "captures": {
          "1": {
            "name": "constant.numeric.cobol"
          },
          "2": {
            "name": "comment.line.cobol.newpage"
          }
        },
        "match": "(^[0-9\\s][0-9\\s][0-9\\s][0-9\\s][0-9\\s][0-9\\s])(\\/.*$)"
      },
      {
        "match": "^[0-9\\s][0-9\\s][0-9\\s][0-9\\s][0-9\\s][0-9\\s]$",
        "name": "constant.numeric.cobol"
      },
      {
        "captures": {
          "1": {
            "name": "constant.numeric.cobol"
          },
          "2": {
            "name": "comment.line.cobol.fixed"
          }
        },
        "match": "(^[0-9\\s][0-9\\s][0-9\\s][0-9\\s][0-9\\s][0-9\\s])(\\*.*$)"
      },
      {
        "captures": {
          "1": {
            "name": "constant.cobol"
          },
          "2": {
            "name": "comment.line.cobol.fixed"
          }
        },
        "match": "(^[0-9a-zA-Z\\s\\$#%\\.@\\- ][0-9a-zA-Z\\s\\$#%\\.@\\- ][0-9a-zA-Z\\s\\$#%\\.@\\- ][0-9a-zA-Z\\s\\$#%\\.@\\- ][0-9a-zA-Z\\s\\$#%\\.@\\- ][0-9a-zA-Z\\s\\$#%\\.@\\- ])(\\*.*$)"
      },
      {
        "captures": {
          "1": {
            "name": "constant.numeric.cobol"
          },
          "2": {
            "name": "variable.other.constant"
          }
        },
        "match": "^\\s+(78)\\s+([0-9a-zA-Z][a-zA-Z\\-0-9_]+)"
      },
      {
        "captures": {
          "1": {
            "name": "constant.numeric.cobol"
          },
          "2": {
            "name": "variable.other.constant"
          },
          "3": {
            "name": "keyword.identifers.cobol"
          }
        },
        "match": "^\\s+([0-9]+)\\s+([0-9a-zA-Z][a-zA-Z\\-0-9_]+)\\s+((?i:constant))"
      },
      {
        "captures": {
          "1": {
            "name": "constant.cobol"
          },
          "2": {
            "name": "comment.line.cobol.newpage"
          }
        },
        "match": "(^[0-9a-zA-Z\\s\\$#%\\.@][0-9a-zA-Z\\s\\$#%\\.@][0-9a-zA-Z\\s\\$#%\\.@][0-9a-zA-Z\\s\\$#%\\.@][0-9a-zA-Z\\s\\$#%\\.@][0-9a-zA-Z\\s\\$#%\\.@])(\\/.*$)"
      },
      {
        "match": "^\\*.*$",
        "name": "comment.line.cobol.fixed"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.control.directive.conditional.cobol"
          },
          "2": {
            "name": "entity.name.function.preprocessor.cobol"
          },
          "3": {
            "name": "entity.name.function.cobol"
          },
          "4": {
            "name": "keyword.control.directive.conditional.cobol"
          }
        },
        "match": "((?:^|\\s+)(?i:\\$set)\\s+)((?i:constant)\\s+)([0-9a-zA-Z][a-zA-Z\\-0-9]+\\s*)([a-zA-Z\\-0-9]*)"
      },
      {
        "captures": {
          "1": {
            "name": "entity.name.function.preprocessor.cobol"
          },
          "2": {
            "name": "storage.modifier.import.cobol"
          },
          "3": {
            "name": "punctuation.begin.bracket.round.cobol"
          },
          "4": {
            "name": "string.quoted.other.cobol"
          },
          "5": {
            "name": "punctuation.end.bracket.round.cobol"
          }
        },
        "match": "((?i:\\$\\s*set\\s+)(ilusing)(\\()(.*)(\\)))"
      },
      {
        "captures": {
          "1": {
            "name": "entity.name.function.preprocessor.cobol"
          },
          "2": {
            "name": "storage.modifier.import.cobol"
          },
          "3": {
            "name": "punctuation.definition.string.begin.cobol"
          },
          "4": {
            "name": "string.quoted.other.cobol"
          },
          "5": {
            "name": "punctuation.definition.string.begin.cobol"
          }
        },
        "match": "((?i:\\$\\s*set\\s+)(ilusing)(\")(.*)(\"))"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.control.directive.conditional.cobol"
          },
          "2": {
            "name": "entity.name.function.preprocessor.cobol"
          },
          "3": {
            "name": "punctuation.definition.string.begin.cobol"
          },
          "4": {
            "name": "string.quoted.other.cobol"
          },
          "5": {
            "name": "punctuation.definition.string.begin.cobol"
          }
        },
        "match": "((?i:\\$set))\\s+(\\w+)\\s*(\")(\\w*)(\")"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.control.directive.conditional.cobol"
          },
          "2": {
            "name": "entity.name.function.preprocessor.cobol"
          },
          "3": {
            "name": "punctuation.begin.bracket.round.cobol"
          },
          "4": {
            "name": "string.quoted.other.cobol"
          },
          "5": {
            "name": "punctuation.end.bracket.round.cobol"
          }
        },
        "match": "((?i:\\$set))\\s+(\\w+)\\s*(\\()(.*)(\\))"
      },
      {
        "captures": {
          "0": {
            "name": "keyword.control.directive.conditional.cobol"
          },
          "1": {
            "name": "invalid.illegal.directive"
          },
          "2": {
            "name": "comment.line.set.cobol"
          }
        },
        "match": "(?:^|\\s+)(?i:\\$\\s*set\\s)((?i:01SHUFFLE|64KPARA|64KSECT|AUXOPT|CHIP|DATALIT|EANIM|EXPANDDATA|FIXING|FLAG-CHIP|MASM|MODEL|OPTSIZE|OPTSPEED|PARAS|PROTMODE|REGPARM|SEGCROSS|SEGSIZE|SIGNCOMPARE|SMALLDD|TABLESEGCROSS|TRICKLECHECK|\\s)+).*$"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.control.directive.cobol"
          },
          "2": {
            "name": "entity.other.attribute-name.preprocessor.cobol"
          }
        },
        "match": "(\\$region|\\$end-region)(.*$)"
      },
      {
        "begin": "\\$(?i:doc)(.*$)",
        "end": "\\$(?i:end-doc)(.*$)",
        "name": "invalid.illegal.iscobol"
      },
      {
        "match": ">>\\s*(?i:turn|page|listing|leap-seconds|d)\\s+.*$",
        "name": "invalid.illegal.meta.preprocessor.cobolit"
      },
      {
        "match": "(?i:substitute-case|substitute)\\s+",
        "name": "invalid.illegal.functions.cobolit"
      },
      {
        "captures": {
          "1": {
            "name": "invalid.illegal.keyword.control.directive.conditional.cobol"
          },
          "2": {
            "name": "invalid.illegal.entity.name.function.preprocessor.cobol"
          },
          "3": {
            "name": "invalid.illegal.entity.name.function.preprocessor.cobol"
          }
        },
        "match": "((((>>|\\$)[\\s]*)(?i:elif))(.*$))"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.control.directive.conditional.cobol"
          },
          "2": {
            "name": "entity.name.function.preprocessor.cobol"
          },
          "3": {
            "name": "entity.name.function.preprocessor.cobol"
          }
        },
        "match": "((((>>|\\$)[\\s]*)(?i:if|else|elif|end-if|end-evaluate|end|define|evaluate|when|display|call-convention|set))(.*$))"
      },
      {
        "captures": {
          "1": {
            "name": "comment.line.scantoken.cobol"
          },
          "2": {
            "name": "keyword.cobol"
          },
          "3": {
            "name": "string.cobol"
          }
        },
        "match": "(\\*>)\\s+(@[0-9a-zA-Z][a-zA-Z\\-0-9]+)\\s+(.*$)"
      },
      {
        "match": "(\\*>.*$)",
        "name": "comment.line.modern"
      },
      {
        "match": "(>>.*)$",
        "name": "strong comment.line.set.acucobol"
      },
      {
        "match": "([nNuU][xX]|[hHxX])'\\h*'",
        "name": "constant.numeric.integer.hexadecimal.cobol"
      },
      {
        "match": "([nNuU][xX]|[hHxX])'.*'",
        "name": "invalid.illegal.hexadecimal.cobol"
      },
      {
        "match": "([nNuU][xX]|[hHxX])\"\\h*\"",
        "name": "constant.numeric.integer.hexadecimal.cobol"
      },
      {
        "match": "([nNuU][xX]|[hHxX])\".*\"",
        "name": "invalid.illegal.hexadecimal.cobol"
      },
      {
        "match": "[bB]\"[0-1]\"",
        "name": "constant.numeric.integer.boolean.cobol"
      },
      {
        "match": "[bB]'[0-1]'",
        "name": "constant.numeric.integer.boolean.cobol"
      },
      {
        "match": "[oO]\"[0-7]*\"",
        "name": "constant.numeric.integer.octal.cobol"
      },
      {
        "match": "[oO]\".*\"",
        "name": "invalid.illegal.octal.cobol"
      },
      {
        "match": "(#)([0-9a-zA-Z][a-zA-Z\\-0-9]+)",
        "name": "meta.symbol.cobol.forced"
      },
      {
        "begin": "((?<![-_a-zA-Z0-9()-])(?i:installation|author|source-computer|object-computer|date-written|security|date-compiled)(\\.|$))",
        "beginCaptures": {
          "0": {
            "name": "keyword.identifiers.cobol"
          }
        },
        "end": "(?=((?<![-_])(?i:remarks|author|date-written|source-computer|object-computer|installation|date-compiled|special-names|security|environment\\s+division|data\\s+division|working-storage\\s+section|input-output\\s+section|linkage\\s+section|procedure\\s+division|local-storage\\s+section)|^[ \\*][ \\*][ \\*][ \\*][ \\*][ \\*]\\*.*$|^\\+$))",
        "name": "comment.block.cobol.remark",
        "patterns": [
          {
            "match": "(^[0-9 ][0-9 ][0-9 ][0-9 ][0-9 ][0-9 ])",
            "name": "constant.numeric.cobol"
          }
        ]
      },
      {
        "captures": {
          "1": {
            "name": "keyword.start.bracket.cobol"
          },
          "2": {
            "name": "constant.numeric.cobol"
          },
          "3": {
            "name": "keyword.end.bracket.cobol"
          }
        },
        "comment": "simple numerics in () and []",
        "match": "(?<=(\\(|\\[))((\\-\\+)*\\s*[0-9 ,\\.\\+\\-\\*\\/]+)(?=(\\)|\\]))",
        "name": "constant.numeric.cobol"
      },
      {
        "include": "#number-complex-constant"
      },
      {
        "include": "#number-simple-constant"
      },
      {
        "match": "(?<![-_])(?i:true|false|null|nulls)(?![0-9A-Za-z_-])",
        "name": "constant.language.cobol"
      },
      {
        "match": "(?<![-_])(?i:zeroes|alphabetic-lower|alphabetic-upper|alphanumeric-edited|alphabetic|alphabet|alphanumeric|zeros|zeros|zero|spaces|space|quotes|quote|low-values|low-value|high-values|high-value)(?=\\s+|\\.|,|\\))",
        "name": "constant.language.figurative.cobol"
      },
      {
        "begin": "(?i:exec\\s+sqlims|exec\\s+sql)",
        "contentName": "meta.embedded.block.openesql",
        "end": "(?i:end\\-exec)",
        "name": "keyword.verb.cobol",
        "patterns": [
          {
            "match": "(^\\s*\\*.*)$",
            "name": "comment.line.sql"
          },
          {
            "match": "(--.*$)",
            "name": "comment.line.sql"
          },
          {
            "match": "(\\*>.*$)",
            "name": "comment.line.modern"
          },
          {
            "match": "(\\:([0-9a-zA-Z\\-_])*)",
            "name": "variable.cobol"
          },
          {
            "include": "source.openesql"
          }
        ]
      },
      {
        "begin": "(?i:exec\\s+cics)",
        "contentName": "meta.embedded.block.cics",
        "end": "(?i:end\\-exec)",
        "name": "keyword.verb.cobol",
        "patterns": [
          {
            "match": "(\\()",
            "name": "meta.symbol.cobol"
          },
          {
            "include": "#cics-keywords"
          },
          {
            "include": "#string-double-quoted-constant"
          },
          {
            "include": "#string-quoted-constant"
          },
          {
            "include": "#number-complex-constant"
          },
          {
            "include": "#number-simple-constant"
          },
          {
            "match": "([a-zA-Z-0-9_]*[a-zA-Z0-9]|([#]?[0-9a-zA-Z]+[a-zA-Z-0-9_]*[a-zA-Z0-9]))",
            "name": "variable.cobol"
          }
        ]
      },
      {
        "begin": "(?i:exec\\s+dli)",
        "contentName": "meta.embedded.block.dli",
        "end": "(?i:end\\-exec)",
        "name": "keyword.verb.cobol",
        "patterns": [
          {
            "match": "(\\()",
            "name": "meta.symbol.cobol"
          },
          {
            "include": "#dli-keywords"
          },
          {
            "include": "#dli-options"
          },
          {
            "include": "#string-double-quoted-constant"
          },
          {
            "include": "#string-quoted-constant"
          },
          {
            "include": "#number-complex-constant"
          },
          {
            "include": "#number-simple-constant"
          },
          {
            "match": "([a-zA-Z-0-9_]*[a-zA-Z0-9]|([#]?[0-9a-zA-Z]+[a-zA-Z-0-9_]*[a-zA-Z0-9]))",
            "name": "variable.cobol"
          }
        ]
      },
      {
        "begin": "(?i:exec\\s+sqlims)",
        "contentName": "meta.embedded.block.openesql",
        "end": "(?i:end\\-exec)",
        "name": "keyword.verb.cobol",
        "patterns": [
          {
            "match": "(\\*>.*$)",
            "name": "comment.line.modern"
          },
          {
            "match": "(\\:([a-zA-Z\\-])*)",
            "name": "variable.cobol"
          },
          {
            "include": "source.openesql"
          }
        ]
      },
      {
        "begin": "(?i:exec\\s+ado)",
        "contentName": "meta.embedded.block.openesql",
        "end": "(?i:end\\-exec)",
        "name": "keyword.verb.cobol",
        "patterns": [
          {
            "match": "(--.*$)",
            "name": "comment.line.sql"
          },
          {
            "match": "(\\*>.*$)",
            "name": "comment.line.modern"
          },
          {
            "match": "(\\:([a-zA-Z\\-])*)",
            "name": "variable.cobol"
          },
          {
            "include": "source.openesql"
          }
        ]
      },
      {
        "begin": "(?i:exec\\s+html)",
        "contentName": "meta.embedded.block.html",
        "end": "(?i:end\\-exec)",
        "name": "keyword.verb.cobol",
        "patterns": [
          {
            "include": "text.html.basic"
          }
        ]
      },
      {
        "begin": "(?i:exec\\s+java)",
        "contentName": "meta.embedded.block.java",
        "end": "(?i:end\\-exec)",
        "name": "keyword.verb.cobol",
        "patterns": [
          {
            "include": "source.java"
          }
        ]
      },
      {
        "captures": {
          "1": {
            "name": "punctuation.definition.string.begin.cobol"
          },
          "2": {
            "name": "support.function.cobol"
          },
          "3": {
            "name": "punctuation.definition.string.end.cobol"
          }
        },
        "match": "(\")(CBL_.*)(\")"
      },
      {
        "captures": {
          "1": {
            "name": "punctuation.definition.string.begin.cobol"
          },
          "2": {
            "name": "support.function.cobol"
          },
          "3": {
            "name": "punctuation.definition.string.end.cobol"
          }
        },
        "match": "(\")(PC_.*)(\")"
      },
      {
        "begin": "\"",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cobol"
          }
        },
        "end": "(\"|$)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.cobol"
          }
        },
        "name": "string.quoted.double.cobol"
      },
      {
        "captures": {
          "1": {
            "name": "punctuation.definition.string.begin.cobol"
          },
          "2": {
            "name": "support.function.cobol"
          },
          "3": {
            "name": "punctuation.definition.string.end.cobol"
          }
        },
        "match": "(\\')(CBL_.*)(\\')"
      },
      {
        "captures": {
          "1": {
            "name": "punctuation.definition.string.begin.cobol"
          },
          "2": {
            "name": "support.function.cobol"
          },
          "3": {
            "name": "punctuation.definition.string.end.cobol"
          }
        },
        "match": "(\\')(PC_.*)(\\')"
      },
      {
        "begin": "'",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cobol"
          }
        },
        "end": "('|$)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.cobol"
          }
        },
        "name": "string.quoted.single.cobol"
      },
      {
        "begin": "(?<![\\-\\w])[gGzZ]\"",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cobol"
          }
        },
        "end": "(\"|$)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.cobol"
          }
        },
        "name": "string.quoted.double.cobol"
      },
      {
        "begin": "(?<![\\-\\w])[gGzZ]'",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cobol"
          }
        },
        "end": "'",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.cobol"
          }
        },
        "name": "string.quoted.single.cobol"
      },
      {
        "begin": "(?<![\\-\\w])[gGnN]\"",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cobol"
          }
        },
        "end": "(\"|$)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.cobol"
          }
        },
        "name": "string.quoted.double.cobol"
      },
      {
        "begin": "(?<![\\-\\w])[gGnN]'",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cobol"
          }
        },
        "end": "'",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.cobol"
          }
        },
        "name": "string.quoted.single.cobol"
      },
      {
        "begin": "(?<![\\-\\w])[uU]\"",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cobol"
          }
        },
        "end": "(\"|$)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.cobol"
          }
        },
        "name": "string.quoted.utf8.double.cobol"
      },
      {
        "begin": "(?<![\\-\\w])[uU]'",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cobol"
          }
        },
        "end": "'",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.cobol"
          }
        },
        "name": "string.quoted.utf8.single.cobol"
      },
      {
        "match": "(?<![-_])(?i:id\\s+division|identification\\s+division|identification|id|property-id|getter|setter|entry|function-id|end\\s+attribute|attribute|interface-id|indexer-id|factory|ctl|class-control|options|environment\\s+division|environment-name|environment-value|environment|configuration\\s+section|configuration|decimal-point\\s+is|decimal-point|console\\s+is|call-convention|special-names|cursor\\s+is|update|picture\\s+symbol|currency\\s+sign|currency|repository|input-output\\s+section|input-output|file\\s+section|file-control|select|optional|i-o-control|data\\s+division|working-storage\\s+section|working-storage|section|local-storage|linkage\\s+section|linkage|communication|report|screen\\s+section|object-storage|object\\s+section|class-object|fd|rd|cd|sd|printing|procedure\\s+division|procedure|division|references|debugging|end\\s+declaratives|declaratives|end\\s+static|end\\s+factory|end\\s+class-object|based-storage|size|font|national-edited|national)(?![0-9A-Za-z_-])",
        "name": "keyword.identifiers.cobol"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.verb.cobol"
          },
          "2": {
            "name": "entity.name.function.cobol"
          }
        },
        "match": "(?<![-_])((?i:valuetype-id|operator-id|method-id|method|property-id|attribute-id|enum-id|iterator-id|class-id|program-id|operator-id|end\\s+program|end\\s+valuetype|extension))[\\.]*[\\s]+([a-zA-Z0-9_-]*)"
      },
      {
        "match": "(?<![-_])(?i:implements|inherits|constraints|constrain)(?=\\s|\\.)",
        "name": "keyword.verb.cobol"
      },
      {
        "match": "(?<![-_])(?i:end\\s+enum|end\\s+interface|end\\s+class|end\\s+property|end\\s+method|end\\s+object|end\\s+iterator|end\\s+function|end\\s+operator|end\\s+program|end\\s+indexer|create|reset|instance|delegate|end-delegate|delegate-id|declare|exception-object|as|stop\\s+iterator|stop\\s+run|stop)(?=\\s|\\.|,|\\))",
        "name": "keyword.identifiers.cobol"
      },
      {
        "match": "\\s+(?i:attach\\s+method|attach\\s+del|attach|detach\\s+del|detach\\s+method|detach|method|del)(?=\\s|\\.|$)",
        "name": "keyword.identifiers.cobol"
      },
      {
        "match": "\\s+(?i:sync\\s+(?i:on))(?=\\s|\\.)",
        "name": "keyword.other.sync.cobol"
      },
      {
        "match": "\\s+(?i:try|finally|catch|end-try|throw)(?=\\s|\\.|$)",
        "name": "keyword.control.catch-exception.cobol"
      },
      {
        "match": "(?<![-_])(?i:select|use|thru|varying|giving|remainder|tallying|through|until|execute|returning|using|chaining|yielding|\\+\\+include|copy|replace)(?=\\s)",
        "name": "keyword.otherverb.cobol"
      },
      {
        "match": "(?i:dynamic)\\s+(?i:length)(?=\\s|\\.)",
        "name": "storage.type.dynamiclength.cobol"
      },
      {
        "match": "(?<![-_])(?i:assign|external|prototype|organization|organisation|indexed|column|plus|line\\*s*sequential|sequential|access|dynamic|relative|label|block|contains|standard|records|record\\s+key|record|is|alternate|duplicates|reel|tape|terminal|disk\\sfilename|disk|disc|recording\\smode|mode|random)(?=\\s|\\.)",
        "name": "keyword.identifers.cobol"
      },
      {
        "match": "(?<![-_])(?i:max|min|integer-of-date|integer-of-day|integer-part|integer|date-to-yyyymmdd|year-to-yyyy|day-to-yyyyddd|exp|exception-file|exception-location|exception-statement|exception-status|e|variance|integer-of-date|rem|pi|factorial|sqrt|log10|fraction-part|mean|exp|log|char|day-of-integer|date-of-integer|exp10|atan|integer-part|tan|sin|cos|midrange|addr|acos|asin|annuity|present-value|integer-of-day|ord-max|ord-min|ord|random|integer-of-date|sum|standard-deviation|median|reverse|abs|upper-case|lower-case|char-national|numval|mod|range|length|locale-date|locale-time-from-seconds|locale-time|seconds-past-midnight|stored-char-length|seconds-from-formatted-time|seconds-past-midnight|trim|length-an|numval-c|current-date|national-of|display-of|when-compiled|integer-of-boolean|combined-datetime|concatenate)(?=\\s|\\.|\\(|\\))",
        "name": "support.function.cobol"
      },
      {
        "captures": {
          "0": {
            "name": "support.function.cics.cobol"
          },
          "1": {
            "name": "punctuation.definition.string.end.cobol"
          },
          "2": {
            "name": "keyword.identifers.cobol"
          },
          "3": {
            "name": "punctuation.definition.string.end.cobol"
          }
        },
        "match": "(?<![-_])(?i:DFHRESP|DFHVALUE)(\\s*\\(\\s*)([a-zA-Z]*)(\\s*\\))"
      },
      {
        "match": "(?<![-_])(?i:function)(?=\\s|\\.)",
        "name": "keyword.verb.cobol"
      },
      {
        "match": "(?<![-_])(?i:end-accept|end-add|end-sync|end-compute|end-delete|end-display|end-divide|end-set|end-multiply|end-of-page|end-read|end-receive|end-return|end-rewrite|end-search|end-start|end-string|end-subtract|end-unstring|end-write|program|class|interface|enum|interface)(?![0-9A-Za-z_-])",
        "name": "keyword.verb.cobol"
      },
      {
        "match": "(?<![-_])(?:by value|by reference|by content|property-value)(?![0-9A-Za-z_-])",
        "name": "keyword.other.cobol"
      },
      {
        "match": "(?<![-_])(?i:attr-string|automatic|auto-skip|footing|next|group|indicate|source|control|full|required|of|input|output|i-o|extend|file|error|exception|overflow|goto|off|on|proceed|procedures|procedure|through|invalid|data|normal|eop|returning|to|for|giving|into|by|params|remainder|also|numeric|free|depending|converting|replacing|after|before|all|leading|first|recursive|initialized|global|common|initial|resident|reference|content|are\\sstandard|are|renames|like|format\\stime|values|omitted|value|constant|ascending|descending|key|retry|until|varying|with|no|advancing|up|down|uccurs|ignore\\s+lock|lock|length|delimited|count|delimiter|redefines|from\\s+console|from\\s+command-line|from\\s+user\\s+name|from\\s+day\\s+yyyyddd|from\\s+day|from\\s+time|from\\s+day-of-week|from\\s+escape|from\\s+day\\s+yyyyddd|from\\s+date\\s+yyyymmdd|from\\s+date|from|raising|crt\\s+status|status|class|upon\\s+crt|upon|lines|columns|step|linage|auto|line|position|col|reports|code-set|reporting|arithmetic|localize|program|class|interface|in|at\\s+end|page|name)(?![0-9A-Za-z_-])",
        "name": "keyword.identifers.cobol"
      },
      {
        "captures": {
          "0": {
            "name": "keyword.verb.cobol"
          },
          "1": {
            "name": "storage.type.cobol"
          }
        },
        "comment": "type ssss ",
        "match": "(?<![-_])(?i:type|new)\\s+([a-zA-Z][a-zA-Z0-9\\$\\-\\._]*|[a-zA-Z])(?=\\.$)"
      },
      {
        "match": "(?<![-_])(?i:string)(?=\\s+value|\\.)",
        "name": "storage.type.cobol"
      },
      {
        "match": "(?<![-_])(?i:bit|byte|binary-char|binary-char-unsigned|binary-short|binary-short-unsigned|binary.long|binary-c-long|binary-long-unsigned|binary-long|binary-double|binary-double-unsigned|float-short|float-extended|float-long|bit|condition-value|characters|character\\s+type|character|comma|crt|decimal|object\\+sreference|object-reference|object|list|dictionary|unsigned)(?=\\s|\\.|,|\\]|\\[)",
        "name": "storage.type.cobol"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.other.verb.cobol"
          },
          "2": {
            "name": "meta.symbol.cobol"
          }
        },
        "comment": "operator-id ssss ",
        "match": "(operator-id\\s+[+\\-\\*\\/])",
        "name": "keyword.operator-id.cobol"
      },
      {
        "captures": {
          "1": {
            "name": "punctuation.accessor.cobol.b3"
          },
          "2": {
            "name": "entity.name.function.b3"
          }
        },
        "comment": " ::.. ",
        "match": "(?i:self)(\\:\\:)([0-9a-zA-Z_\\-\\.]*)(?=\\.$)"
      },
      {
        "captures": {
          "1": {
            "name": "punctuation.accessor.cobol"
          },
          "2": {
            "name": "entity.name.function.cobol"
          }
        },
        "comment": " ::.. ",
        "match": "(\\:\\:)([0-9a-zA-Z_\\-\\.]*)"
      },
      {
        "captures": {
          "0": {
            "name": "keyword.verb.cobol.aa"
          },
          "1": {
            "name": "storage.type.cobol.bb"
          }
        },
        "match": "(?<![-_])(?i:type)\\s+([0-9a-zA-Z\\.]*)"
      },
      {
        "match": "(?<![-_])(?i:if|else|end-if|exit\\s+iterator|exit\\s+program|exit\\s+method|evaluate|end-evaluate|exit\\s+perform|perform|end-perform|when\\s+other|when|continue|call|end-call|chain|end-chain|invoke|end\\s+invoke|go\\s+to|go|sort|merge|use|xml|parse|stop\\s+run|goback\\s+returning|goback|raise|exit\\s+function|exit\\sparagraph|await)(?![0-9A-Za-z_-])",
        "name": "keyword.control.cobol"
      },
      {
        "captures": {
          "1": {
            "name": "storage.type.picture10.cobol"
          },
          "2": {
            "name": "constant.numeric.cobol"
          },
          "3": {
            "name": "storage.type.picture10.cobol"
          },
          "4": {
            "name": "constant.numeric.cobol"
          }
        },
        "match": "(?<![-_])((?i:picture\\s+is|picture|pic\\s+is|pic)\\s+[-+sS\\*$09aAbBxXuUpPnNzZ/,.]*)\\(([0-9]*)\\)([vV][-+sS\\*$09aAbBxXuUpPnNzZ/,\\.]*)\\(([0-9]*)\\)[-|+]"
      },
      {
        "captures": {
          "1": {
            "name": "storage.type.picture9.cobol"
          },
          "2": {
            "name": "constant.numeric.cobol"
          },
          "3": {
            "name": "storage.type.picture9.cobol"
          },
          "4": {
            "name": "constant.numeric.cobol"
          }
        },
        "match": "(?<![-_])((?i:picture\\s+is|picture|pic\\s+is|pic)\\s+[-+sS\\*$09aAbBxXuUpPnNzZ/,.]*)\\(([0-9]*)\\)([vV][-+sS\\*$09aAbBxXuUpPnNzZ/,\\.]*)\\(([0-9]*)\\)"
      },
      {
        "captures": {
          "1": {
            "name": "storage.type.picture8.cobol"
          },
          "2": {
            "name": "constant.numeric.cobol"
          },
          "3": {
            "name": "storage.type.picture8.cobol"
          }
        },
        "match": "(?<![-_])((?i:picture\\s+is|picture|pic\\s+is|pic)\\s+[-+sS\\*$09aAbBxXuUpPnNzZ/,.]*)\\(([0-9]*)\\)([vV\\.][-+s\\*$09aAbBsSnNxXuUzZ/,]*[0-9\\.()])*"
      },
      {
        "match": "(?<![-_])(?i:picture\\s+is|picture|pic\\s+is|pic)\\s+[-+sS\\*$09aAbBsSnpPNxXuUzZ/,.]*\\([0-9]*\\)[Vv\\.][-+s\\*0$9aAbBsSnNxpPxXuUzZ/,]*",
        "name": "storage.type.picture7.cobol"
      },
      {
        "match": "(?<![-_])(?i:picture\\s+is|picture|pic\\s+is|pic)\\s+[-+sS\\*$09aAbBsSnpPNxXuUzZ/,.]*\\([0-9]*\\)[-+s\\*0$9aAbBsSnNxpPxXuUzZ/,]*[Vv\\.][-+s\\*0$9aAbBsSnNxpPxXuUzZ/,]*",
        "name": "storage.type.picture6.cobol"
      },
      {
        "captures": {
          "1": {
            "name": "storage.type.picture5.cobol"
          },
          "2": {
            "name": "constant.numeric.cobol"
          }
        },
        "match": "(?<![-_])((?i:picture\\s+is|picture|pic\\s+is|pic)\\s+[-+sS\\*$09aAbBsSnpPNxuUXzZ/,.]*)\\(([0-9]*)\\)[-+s\\*0$9aAbBsSnNxpPxXuUzZ/,]*"
      },
      {
        "match": "(?<![-_])(?i:picture\\s+is|picture|pic\\s+is|pic)\\s+[-+sS\\*$09aAbBsSnpNNxXuUzZ/,.]*\\([0-9]*\\)",
        "name": "storage.type.picture4.cobol"
      },
      {
        "match": "(?<![-_])(?i:picture\\s+is|picture|pic\\s+is|pic)\\s+[sS]?[9aAbBsSnNxXuUzZ]*[Vv][9aAxbXuUzZ]*\\([0-9]*\\)",
        "name": "storage.type.picture3.cobol"
      },
      {
        "match": "(?<![-_])(?i:picture\\s+is|picture|pic\\s+is|pic)\\s+[sS]?[9aAbBsSnNxXuUzZ]*[Vv][9aAxbXuUzZ]*",
        "name": "storage.type.picture2.cobol"
      },
      {
        "match": "(?<![-_])(?i:picture\\s+is|picture|pic\\s+is|pic)\\s+[-+\\*$9aAbBsSnpPNxXuUzZ/,.vV]*",
        "name": "storage.type.picture1.cobol"
      },
      {
        "captures": {
          "1": {
            "name": "invalid.illegal.keyword.verb.acu.cobol"
          },
          "2": {
            "name": "invalid.illegal.constant.numeric.integer"
          }
        },
        "match": "((?<![-_])(?i:binary|computational-4|comp-4|computational-5|comp-5))\\(([0-9]*)\\)"
      },
      {
        "match": "(?i:cblt-x1-compx-const|cblt-x2-compx-const|cblt-x4-compx-const|cblt-alphanum-const|cblt-x9-compx|cblt-x8-compx|cblt-x8-comp5|cblt-x4-compx|cblt-x4-comp5|cblt-x2-compx|cblt-x2-comp5|cblt-x1-compx|cblt-x1-comp5|cblt-x1|cblt-vfile-status|cblt-vfile-handle|cblt-sx8-comp5|cblt-sx4-comp5|cblt-sx2-comp5|cblt-sx1-comp5|cblt-subsys-params|cblt-splitjoin-buf|cblt-screen-position|cblt-rtncode|cblt-request-context|cblt-reqhand-service-info|cblt-reqhand-service-funcs|cblt-reqhand-response|cblt-reqhand-funcs|cblt-prog-info-params|cblt-prog-info-arg-info|cblt-printer-properties|cblt-printer-name|cblt-printer-info|cblt-printer-default|cblt-ppointer|cblt-pointer|cblt-os-ssize|cblt-os-size|cblt-os-offset|cblt-os-info-params|cblt-os-flags|cblt-node-name|cblt-nls-msg-params|cblt-nls-msg-number-pair|cblt-nls-msg-ins-struct|cblt-nls-msg-buffer|cblt-mouse-shape|cblt-mouse-rect|cblt-mouse-pos|cblt-mouse-event|cblt-mem-validate-param|cblt-idp-exit-service-funcs|cblt-idp-exit-info|cblt-HWND|cblt-HINSTANCE|cblt-get-scr-line-draw-buffer|cblt-get-scr-graphics-buffer|cblt-generic-attr-value|cblt-generic-attr-rgb-values|cblt-generic-attr-information|cblt-file-status|cblt-fileexist-buf|cblt-exit-params|cblt-exit-info-params|cblt-cancel-proc-params|cblt-bytestream-handle|cblt-alphanum)",
        "name": "support.function.cbltypes.cobol"
      },
      {
        "match": "(?<![-_])(?i:computational-1|comp-1|computational-2|comp-2|computational-3|comp-3|computational-4|comp-4|computational-x|comp-x|computational-5|comp-5|computational-6|comp-6|computational-n|comp-n|packed-decimal|index|float|double|signed-short|unsigned-short|signed-int|unsigned-int|signed-long|unsigned-long|comp|computational|group-usage|usage\\sis\\sdisplay|usage\\sis\\sfont|usage\\s+display|binary|mutex-pointer|data-pointer|thread-pointer|sempahore-pointer|event-pointer|program-pointer|procedure-pointer|pointer|window|subwindow|control-type|thread|menu|variant|layout-manager|occurs|typedef|any|times|display\\s+blank\\s+when|blank\\s+when|blank\\s+screen|blank|usage\\sis|is\\spartial|usage|justified|just|right|signed|trailing\\s+separate|sign|seperate|sql)(?=\\s|\\.|\\))",
        "name": "storage.type.picture.cobol"
      },
      {
        "match": "(?i:byte-length)\\s+[0-9]+",
        "name": "storage.type.length.cobol"
      },
      {
        "match": "(?<![-_])(?i:accept|add|address|allocate|cancel|close|commit|compute|continue|delete|disable|display|bell|divide|eject|enable|enter|evaluate|exhibit|named|exit|free|generate|go\\s+to|initialize\\sonly|initialize|initiate|inspect|merge|end-set|set|end-invoke|invoke\\s+run|invoke|move|corresponding|corr|multiply|otherwise|open|sharing|sort-merge|purge|ready|read|kept|receive|release|return|rewrite|rounded|rollback|search|send|sort|collating\\s+sequence|collating|start|service|subtract|suppress|terminate|then|unlock|string|unstring|validate|write|next|statement|sentence)(?![0-9A-Za-z_-])",
        "name": "keyword.verb.cobol"
      },
      {
        "match": "(?<![-_])(?i:thread-local)(?![0-9A-Za-z_-])",
        "name": "keyword.verb.cobol"
      },
      {
        "match": "(\\s+|^)(?i:foreground-color|background-color|prompt|underline|reverse-video|no-echo|highlight|blink)(?![0-9A-Za-z_-])",
        "name": "keyword.screens.cobol"
      },
      {
        "match": "(\\s+|^)(?i:bold|high|lowlight|low|background-high|background-low|background-standard)(?![0-9A-Za-z_-])",
        "name": "invalid.illegal.screens.acu.cobol"
      },
      {
        "match": "(?<![-_])(?i:internal|public|protected|final|private|static|new|abstract|override|readonly|property|async-void|async-value|async)(?=\\s|\\.)",
        "name": "storage.modifier.cobol"
      },
      {
        "match": "=|<|>|<=|>=|<>|\\+|\\-|\\*|\\/|(?<![-_])(?i:b-and|b-or|b-xor|b-exor|b-not|b-left|b-right|and|or|equals|equal|greater\\s+than|less\\s+than|greater)(?![0-9A-Za-z_-])",
        "name": "keyword.operator.cobol"
      },
      {
        "match": "(?i:not\\s+at\\s+end)(?![0-9A-Za-z_-])",
        "name": "keyword.verb.cobol"
      },
      {
        "match": "(?<![-_])(?i:not)(?![0-9A-Za-z_-])",
        "name": "keyword.operator.cobol"
      },
      {
        "match": "(?<![-_])(?i:sysout-flush|sysin|stderr|stdout|csp|stdin|sysipt|sysout|sysprint|syslist|syslst|printer|syserr|console|c01|c02|c03|c04|c05|c06|c07|c08|c09|c10|c11|c12|formfeed|switch-0|switch-10|switch-11|switch-12|switch-13|switch-13|switch-14|switch-15|switch-1|switch-2|switch-3|switch-4|switch-5|switch-6|switch-7|switch-8|switch-9|sw0|sw11|sw12|sw13|sw14|sw15|sw1|sw2|sw3|sw4|sw5|sw6|sw7|sw8|sw9|sw10|lc_all|lc_collate|lc_ctype|lc_messages|lc_monetary|lc_numeric|lc_time|ucs-4|utf-8|utf-16)(?![0-9A-Za-z_-])",
        "name": "support.type.cobol"
      },
      {
        "match": "(?<![-_])(?i:end-xml|processing.*procedure|xml\\sparse|xml|xml-information|xml-text|xml-schemal|xml-declaration)(?![0-9A-Za-z_-])",
        "name": "keyword.xml.cobol"
      },
      {
        "match": "(?<![-_])(?i:json\\s+generate|json|end-json|name\\sof)(?![0-9A-Za-z_-])",
        "name": "keyword.json.cobol"
      },
      {
        "match": "(?<![-_])(?i:modify|inquire|tab|title|event|center|label-offset|cell|help-id|cells|push-button|radio-button|page-layout-screen|entry-field|list-box|label|default-font|id|no-tab|unsorted|color|height|width|bind|thread|erase|modeless|scroll|system|menu|title-bar|wrap|destroy|resizeable|user-gray|large-font|newline|3-d|data-columns|display-columns|alignment|separation|cursor-frame-width|divider-color|drag-color|heading-color|heading-divider-color|num-rows|record-data|tiled-headings|vpadding|centered-headings|column-headings|self-act|cancel-button|vscroll|report-composer|clsid|primary-interface|active-x-control|default-interface|default-source|auto-minimize|auto-resize|resource|engraved|initial-state|frame|acuactivexcontrol|activex-res|grid|box|message|namespace|class-name|module|constructor|version|strong|culture|method|handle|exception-value|read-only|dividers|graphical|indexed|termination-value|permanent|boxed|visible|centered|record-position|convert)(?=\\s|\\.|,|;|$)",
        "name": "invalid.illegal.acu.cobol"
      },
      {
        "match": "(?<![-_])(?i:actual|auto|automatic|based-storage|complex|connect|contained|core-index|db-access-control-key|db-data-name|db-exception|db-record-name|db-set-name|db-status|dead-lock|endcobol|end-disable|end-enable|end-send|end-transceive|eos|file-limits|file-limit|formatted|sort-status|usage-mode)(?=\\s|\\.|,|;|$)",
        "name": "invalid.illegal.netcobol.cobol"
      },
      {
        "match": "(?<![-_])(?i:System-Info|Terminal-Info)(?![0-9A-Za-z_-])",
        "name": "support.type.cobol.acu strong"
      },
      {
        "match": "(?<![-_])(?i:alter)(?=\\s|\\.)",
        "name": "invalid.illegal.cobol"
      },
      {
        "match": "(?<![-_])(?i:apply|areas|area|clock-units|code|com-reg|controls|dbcs|destination|detail|display-1|ending|every|insert|kanjikey|last|left|less|limits|limit|memory|metaclass|modules|more-labels|multiple|native_binary|native|negative|number|numeric-edited|other|padding|password|pf|ph|postive|processing|queue|recording|reload|removal|rerun|reserve|reserved|rewind|segment-limit|segment|separate|sequence|skip1|skip2|skip3|standard-1|standard-2|sub-queue-1|sub-queue-2|sub-queue-3|sum|symbolic|synchronized|sync|table|test|text|than|top|trace|trailing|unit|words|write-only|at|basis|beginning|bottom|cbl|cf|ch|de|positive|egcs|egi|emi|end|reversed|rf|rh|run|same|order|heading|esi)(?![0-9A-Za-z_-])",
        "name": "keyword.ibmreserved.cobol"
      },
      {
        "match": "(?<![-_])(?i:active-class|aligned|anycase|boolean|cols|col|condition|ec|eo|system-default|function-pointer)(?![0-9A-Za-z_-])",
        "name": "strong keyword.potential.reserved.cobol"
      },
      {
        "match": "(?i:filler)",
        "name": "keyword.filler.cobol"
      },
      {
        "match": "(?<![-_])(?i:address-of|date|day-of-week|day|debug-content|debug-item|debug-line|debug-item|debug-sub-1|debug-sub-2|debug-sub-3|shift-in|shift-out|sort-control|sort-core-size|sort-file-size|sort-message|sort-return|sort-mode-size|sort-return|tally|time|when-compiled|line-counter|page-counter|return-code|linage-counter|debug-line|debug-name|debug-contents|json-code|json-status|xml-code|xml-event|xml-information|xml-namespace-prefix|xml-namespace|xml-nnamespace-repfix|xml-nnamespace|xml-ntext|jnienvptr|igy-javaiop-call-exception)(?![0-9A-Za-z_-])",
        "name": "variable.language"
      },
      {
        "match": "(?<![-_])(?i:shortint1|shortint2|shortint3|shortint4|shortint5|shortint6|shortint7|longint1|longint2|longint3|longint4|longint5|longint6|bigint1|bigint2|blob-locator|clob-locator|dbclob-locator|dbclob-file|blob-file|clob-file|clob|dbclob|blob|varbinary|long-varbinary|time-record|timestamp-record|timestamp-offset-record|timestamp-offset|timestamp|rowid|xml|long-varchar)(?=\\s|\\.|\\)|\\()",
        "name": "storage.type.sql.picture.cobol"
      },
      {
        "match": "(?<![-_])(?i:self)",
        "name": "keyword.other.self.cobol"
      },
      {
        "match": "(?<![-_])(?i:super)",
        "name": "keyword.other.super.cobol"
      },
      {
        "match": "(^[0-9][0-9][0-9][0-9][0-9][0-9])",
        "name": "constant.numeric.cobol"
      },
      {
        "captures": {
          "1": {
            "name": "meta.symbol.cobol"
          },
          "2": {
            "name": "constant.numeric.integer"
          },
          "3": {
            "name": "meta.symbol.cobol"
          },
          "4": {
            "name": "constant.numeric.integer"
          },
          "5": {
            "name": "meta.symbol.cobol"
          }
        },
        "match": "(\\()([0-9]*)(:)([0-9]*)(\\))"
      },
      {
        "match": "([a-zA-Z-0-9_]*[a-zA-Z0-9]|([#]?[0-9a-zA-Z]+[a-zA-Z-0-9_]*[a-zA-Z0-9]))",
        "name": "meta.symbol.cobol"
      }
    ],
    "repository": {
      "cics-keywords": {
        "match": "(?<![\\-\\w])(?i:abcode|abdump|abend|abort|abprogram|abstime|accum|acee|acqactivity|acqprocess|acquactivity|action|activity|activityid|actpartn|add|address|after|aid|alarm|all|allocate|alter|alternate|altscrnht|altscrnwd|and|anykey|aplkybd|apltext|applid|as|asa|asis|asktime|asraintrpt|asrakey|asrapsw|asraregs|asraspc|asrastg|assign|asynchronous|at|attach|attachid|attributes|authenticate|autopage|auxiliary|base64|basicauth|below|bif|binary|bit|bodycharset|bookmark|brdata|brdatalength|brexit|bridge|browsetoken|btrans|buffer|build|burgeability|caddrlength|cancel|card|cbuff|ccsid|certificate|change|changetime|channel|char|characterset|check|chunkend|chunking|chunkno|chunkyes|cicsdatakey|ciphers|class|clear|cliconvert|client|clientaddr|clientaddrnu|clientconv|clientname|clntaddr6nu|clntipfamily|close|closestatus|clrpartn|cmdsec|cnamelength|cnotcompl|codepage|color|commarea|commonname|commonnamlen|comparemax|comparemin|complete|composite|compstatus|condition|confirm|confirmation|connect|consistent|console|container|contexttype|control|convdata|converse|convertst|converttime|convid|copy|counter|country|countrylen|create|critical|ctlchar|current|cursor|cwa|cwaleng|data|data1|data2|datalength|datalenth|dataonly|datapointer|dataset|datastr|datatoxml|datatype|datcontainer|date|dateform|datesep|datestring|day|daycount|dayofmonth|dayofweek|dayofyear|days|daysleft|day-of-week|dcounter|ddmmyy|ddmmyyyy|debkey|debrec|debug-contents|debug-item|debug-line|debug-name|debug-sub-1|debug-sub-2|debug-sub-3|deedit|default|define|defresp|defscrnht|defscrnwd|delay|delete|deleteq|delimiter|deq|destcount|destid|destidleng|detail|detaillength|dfhresp|dfhvalue|digest|digesttype|disconnect|docdelete|docsize|docstatus|doctoken|document|ds3270|dsscs|dump|dumpcode|dumpid|duprec|ecaddr|ecblist|eib|elemname|elemnamelen|elemns|elemnslen|end|endactivity|endbr|endbrowse|endfile|endoutput|enq|enter|entry|entryname|eoc|eods|eprfield|eprfrom|eprinto|eprlength|eprset|eprtype|equal|erase|eraseaup|error|errterm|esmreason|esmresp|event|eventtype|eventual|ewasupp|exception|expect|expirytime|extds|external|extract|facility|facilitytokn|false|faultactlen|faultactor|faultcode|faultcodelen|faultcodestr|faultstring|faultstrlen|fci|fct|field|file|firestatus|flength|fmh|fmhparm|for|force|formattime|formfeed|formfield|free|freekb|freemain|from|fromactivity|fromccsid|fromchannel|fromcodepage|fromdoc|fromflength|fromlength|fromprocess|frset|fulldate|function|gchars|gcodes|gds|generic|get|getmain|getnext|gmmi|groupid|gtec|gteq|handle|head|header|hex|high-value|high-values|hilight|hold|honeom|host|hostcodepage|hostlength|hosttype|hours|httpheader|httpmethod|httprnum|httpversion|httpvnum|ignore|immediate|in|increment|initimg|initparm|initparmlen|inpartn|input|inputevent|inputmsg|inputmsglen|inquire|insert|integer|interval|into|intoccsid|intocodepage|invalidcount|invite|invmpsz|invoke|invokingprog|invpartn|invreq|issue|issuer|item|iutype|journalname|jtypeid|jusfirst|juslast|justify|katakana|keep|keylength|keynumber|l40|l64|l80|label|langinuse|languagecode|last|lastusetime|ldc|ldcmnem|ldcnum|leavekb|length|lengthlist|level|lightpen|linage-counter|line|lineaddr|line-counter|link|list|listlength|llid|load|locality|localitylen|logmessage|logmode|logonlogmode|logonmsg|low-value|low-values|luname|main|map|mapcolumn|mapfail|mapheight|mapline|maponly|mapped|mappingdev|mapset|mapwidth|massinsert|maxdatalen|maxflength|maximum|maxlength|maxlifetime|maxproclen|mcc|mediatype|message|messageid|metadata|metadatalen|method|methodlength|milliseconds|minimum|minutes|mmddyy|mmddyyyy|mode|modename|monitor|month|monthofyear|move|msr|msrcontrol|name|namelength|natlang|natlanginuse|netname|newpassword|newphrase|newphraselen|next|nexttransid|nleom|noautopage|nocc|nocheck|nocliconvert|noclose|nodata|node|nodocdelete|nodump|noedit|noflush|nohandle|noinconvert|none|nooutconert|noqueue|noquiesce|nosrvconvert|nosuspend|note|notpurgeable|notruncate|nowait|nscontainer|null|nulls|numciphers|numevents|numitems|numrec|numroutes|numsegments|numtab|of|oidcard|on|opclass|open|operation|operator|operid|operkeys|operpurge|opid|opsecurity|options|or|orgabcode|organization|organizatlen|orgunit|orgunitlen|outdescr|outline|outpartn|output|owner|pa1|pa2|pa3|page|pagenum|page-counter|paging|parse|partn|partner|partnfail|partnpage|partns|partnset|pass|passbk|password|passwordlen|path|pathlength|pct|pf1|pf10|pf11|pf12|pf13|pf14|pf15|pf16|pf17|pf18|pf19|pf2|pf20|pf21|pf22|pf23|pf24|pf3|pf4|pf5|pf6|pf7|pf8|pf9|pfxleng|phrase|phraselen|piplength|piplist|point|pool|pop|portnumber|portnumnu|post|ppt|predicate|prefix|prepare|princonvid|prinsysid|print|priority|privacy|process|processtype|proclength|procname|profile|program|protect|ps|punch|purge|purgeable|push|put|qname|query|queryparm|querystring|querystrlen|queue|quote|quotes|random|rba|rbn|rdatt|read|readnext|readprev|readq|reattach|receive|receiver|recfm|record|recordlen|recordlength|reduce|refparms|refparmslen|relatesindex|relatestype|relatesuri|release|remove|repeatable|repetable|replace|reply|replylength|reqid|requesttype|resclass|reset|resetbr|resid|residlength|resource|resp|resp2|ressec|restart|restype|result|resume|retain|retcode|retcord|retriece|retrieve|return|returnprog|return-code|rewind|rewrite|ridfld|role|rolelength|rollback|route|routecodes|rprocess|rresource|rrn|rtermid|rtransid|run|saddrlength|scheme|schemename|scope|scopelen|scrnht|scrnwd|seconds|security|segmentlist|send|sender|serialnum|serialnumlen|server|serveraddr|serveraddrnu|serverconv|servername|service|session|sesstoken|set|shared|shift-in|shift-out|sigdata|signal|signoff|signon|sit|snamelength|soapfault|sort-control|sort-core-size|sort-file-size|sort-message|sort-mode-size|sort-return|sosi|space|spaces|spoolclose|spoolopen|spoolread|spoolwrite|srvconvert|srvraddr6nu|srvripfamily|ssltype|start|startbr|startbrowse|startcode|state|statelen|stationid|status|statuscode|statuslen|statustext|storage|strfield|stringformat|subaddr|subcodelen|subcodestr|subevent|subevent1|subevent2|subevent3|subevent4|subevent5|subevent6|subevent7|subevent8|sum|suspend|suspstatus|symbol|symbollist|synchronous|synclevel|synconreturn|syncpoint|sysid|tables|tally|task|taskpriority|tcpip|tcpipservice|tct|tctua|tctualeng|td|tellerid|template|termcode|termid|terminal|termpriority|test|text|textkybd|textlength|textprint|time|timeout|timer|timesep|title|to|toactivity|tochannel|tocontainer|toflength|token|tolength|toprocess|trace|tracenum|trailer|tranpriority|transaction|transform|transid|trigger|trt|true|ts|twa|twaleng|type|typename|typenamelen|typens|typenslen|unattend|uncommitted|unescaped|unexpin|unlock|until|uow|update|uri|urimap|url|urllength|userdatakey|userid|username|usernamelen|userpriority|using|validation|value|valuelength|verify|versionlen|volume|volumeleng|wait|waitcics|web|when-compiled|wpmedia1|wpmedia2|wpmedia3|wpmedia4|wrap|write|writeq|wsacontext|wsaepr|xctl|xmlcontainer|xmltodata|xmltransform|xrba|year|yyddd|yyddmm|yymmdd|yyyyddd|yyyyddmm|yyyymmdd|zero|zeroes|zeros)(?![\\-\\w])",
        "name": "keyword.verb.cics"
      },
      "dli-keywords": {
        "match": "(?<![\\-\\w])(?i:accept|chkp|deq|dlet|gnp|gn|gu|isrt|load|log|pos|query|refresh|repl|retrieve|rolb|roll|rols|schd|sets|setu|symchkp|term|xrst)(?![\\-\\w])",
        "name": "keyword.verb.dli"
      },
      "dli-options": {
        "match": "(?<![\\-\\w])(?i:statusgroup|checkpoint|chkp|id|lockclass|segment|info|where|from|using|keyfeedback|feedbacklen|variable|first|last|current|seglength|offset|locked|movenext|getfirst|set|setcond|setzero|setparent|fieldlength|keys|maxlength|length[0-9]*|area[0-9]*|psc|pcs|pcb|sysserve|into)(?![\\-\\w])",
        "name": "keyword.other.dli"
      },
      "number-complex-constant": {
        "match": "(\\-|\\+)?((([0-9]+(\\.[0-9]+))|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)([LlFfUuDd]|UL|ul)?(?=\\s|\\.$|,|\\))",
        "name": "constant.numeric.cobol"
      },
      "number-simple-constant": {
        "match": "(\\-|\\+)?([0-9]+)(?=\\s|\\.$|,|\\))",
        "name": "constant.numeric.cobol"
      },
      "string-double-quoted-constant": {
        "begin": "\"",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cobol"
          }
        },
        "end": "(\"|$)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.cobol"
          }
        }
      },
      "string-quoted-constant": {
        "begin": "'",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cobol"
          }
        },
        "end": "('|$)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.cobol"
          }
        },
        "name": "string.quoted.single.cobol"
      }
    },
    "scopeName": "source.cobol",
    "embeddedLangs": [
      "html",
      "java"
    ]
  }
])