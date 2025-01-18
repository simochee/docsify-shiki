/** Shiki Language: es-tag-glsl */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push([
  {
    "displayName": "TypeScript",
    "name": "typescript",
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
        "name": "storage.modifier.ts"
      },
      "after-operator-block-as-object-literal": {
        "begin": "(?<!\\+\\+|--)(?<=[:=(,\\[?+!>]|^await|[^\\._$[:alnum:]]await|^return|[^\\._$[:alnum:]]return|^yield|[^\\._$[:alnum:]]yield|^throw|[^\\._$[:alnum:]]throw|^in|[^\\._$[:alnum:]]in|^of|[^\\._$[:alnum:]]of|^typeof|[^\\._$[:alnum:]]typeof|&&|\\|\\||\\*)\\s*(\\{)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.block.ts"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.block.ts"
          }
        },
        "name": "meta.objectliteral.ts",
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
            "name": "keyword.operator.rest.ts"
          },
          "2": {
            "name": "punctuation.definition.binding-pattern.array.ts"
          }
        },
        "end": "\\]",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.binding-pattern.array.ts"
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
            "name": "keyword.operator.rest.ts"
          },
          "2": {
            "name": "punctuation.definition.binding-pattern.array.ts"
          }
        },
        "end": "\\]",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.binding-pattern.array.ts"
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
            "name": "meta.brace.square.ts"
          }
        },
        "end": "\\]",
        "endCaptures": {
          "0": {
            "name": "meta.brace.square.ts"
          }
        },
        "name": "meta.array.literal.ts",
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
                "name": "storage.modifier.async.ts"
              },
              "2": {
                "name": "variable.parameter.ts"
              }
            },
            "match": "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(\\basync)\\s+)?([_$[:alpha:]][_$[:alnum:]]*)\\s*(?==>)",
            "name": "meta.arrow.ts"
          },
          {
            "begin": "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(\\basync))?((?<![})!\\]])\\s*(?=((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.async.ts"
              }
            },
            "end": "(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))",
            "name": "meta.arrow.ts",
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
                "name": "storage.type.function.arrow.ts"
              }
            },
            "end": "((?<=\\}|\\S)(?<!=>)|((?!\\{)(?=\\S)))(?!\\/[\\/\\*])",
            "name": "meta.arrow.ts",
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
            "name": "keyword.operator.type.annotation.ts"
          }
        },
        "end": "(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))",
        "name": "meta.return.type.arrow.ts",
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
        "name": "storage.modifier.async.ts"
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
            "name": "constant.language.boolean.true.ts"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))false(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "constant.language.boolean.false.ts"
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
            "captures": {
              "1": {
                "name": "meta.brace.angle.ts"
              },
              "2": {
                "name": "storage.modifier.ts"
              },
              "3": {
                "name": "meta.brace.angle.ts"
              }
            },
            "match": "\\s*(<)\\s*(const)\\s*(>)",
            "name": "cast.expr.ts"
          },
          {
            "begin": "(?:(?<!\\+\\+|--)(?<=^return|[^\\._$[:alnum:]]return|^throw|[^\\._$[:alnum:]]throw|^yield|[^\\._$[:alnum:]]yield|^await|[^\\._$[:alnum:]]await|^default|[^\\._$[:alnum:]]default|[=(,:>*?\\&\\|\\^]|[^_$[:alnum:]](?:\\+\\+|\\-\\-)|[^\\+]\\+|[^\\-]\\-))\\s*(<)(?!<?\\=)(?!\\s*$)",
            "beginCaptures": {
              "1": {
                "name": "meta.brace.angle.ts"
              }
            },
            "end": "(\\>)",
            "endCaptures": {
              "1": {
                "name": "meta.brace.angle.ts"
              }
            },
            "name": "cast.expr.ts",
            "patterns": [
              {
                "include": "#type"
              }
            ]
          },
          {
            "begin": "(?:(?<=^))\\s*(<)(?=[_$[:alpha:]][_$[:alnum:]]*\\s*>)",
            "beginCaptures": {
              "1": {
                "name": "meta.brace.angle.ts"
              }
            },
            "end": "(\\>)",
            "endCaptures": {
              "1": {
                "name": "meta.brace.angle.ts"
              }
            },
            "name": "cast.expr.ts",
            "patterns": [
              {
                "include": "#type"
              }
            ]
          }
        ]
      },
      "class-declaration": {
        "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(?:(abstract)\\s+)?\\b(class)\\b(?=\\s+|/[/*])",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.export.ts"
          },
          "2": {
            "name": "storage.modifier.ts"
          },
          "3": {
            "name": "storage.modifier.ts"
          },
          "4": {
            "name": "storage.type.class.ts"
          }
        },
        "end": "(?<=\\})",
        "name": "meta.class.ts",
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
                "name": "entity.name.type.class.ts"
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
            "name": "storage.modifier.ts"
          },
          "2": {
            "name": "storage.type.class.ts"
          }
        },
        "end": "(?<=\\})",
        "name": "meta.class.ts",
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
            "name": "punctuation.definition.block.ts"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.block.ts"
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
            "name": "storage.modifier.ts"
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
                "name": "entity.name.type.module.ts"
              },
              "2": {
                "name": "punctuation.accessor.ts"
              },
              "3": {
                "name": "punctuation.accessor.optional.ts"
              }
            },
            "match": "([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))(?=\\s*[_$[:alpha:]][_$[:alnum:]]*(\\s*\\??\\.\\s*[_$[:alpha:]][_$[:alnum:]]*)*\\s*)"
          },
          {
            "captures": {
              "1": {
                "name": "entity.other.inherited-class.ts"
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
                "name": "punctuation.definition.comment.ts"
              }
            },
            "end": "\\*/",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.comment.ts"
              }
            },
            "name": "comment.block.documentation.ts",
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
                "name": "punctuation.definition.comment.ts"
              },
              "2": {
                "name": "storage.type.internaldeclaration.ts"
              },
              "3": {
                "name": "punctuation.decorator.internaldeclaration.ts"
              }
            },
            "end": "\\*/",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.comment.ts"
              }
            },
            "name": "comment.block.ts"
          },
          {
            "begin": "(^[ \\t]+)?((//)(?:\\s*((@)internal)(?=\\s|$))?)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.whitespace.comment.leading.ts"
              },
              "2": {
                "name": "comment.line.double-slash.ts"
              },
              "3": {
                "name": "punctuation.definition.comment.ts"
              },
              "4": {
                "name": "storage.type.internaldeclaration.ts"
              },
              "5": {
                "name": "punctuation.decorator.internaldeclaration.ts"
              }
            },
            "contentName": "comment.line.double-slash.ts",
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
            "name": "keyword.control.trycatch.ts"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.control.loop.ts"
              },
              "2": {
                "name": "entity.name.label.ts"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(break|continue|goto)\\s+([_$[:alpha:]][_$[:alnum:]]*)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(break|continue|do|goto|while)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.control.loop.ts"
          },
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(return)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "beginCaptures": {
              "0": {
                "name": "keyword.control.flow.ts"
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
            "name": "keyword.control.switch.ts"
          },
          {
            "include": "#if-statement"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(else|if)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.control.conditional.ts"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(with)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.control.with.ts"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(package)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.control.ts"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(debugger)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.other.debugger.ts"
          }
        ]
      },
      "decl-block": {
        "begin": "\\{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.block.ts"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.block.ts"
          }
        },
        "name": "meta.block.ts",
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
            "name": "storage.modifier.ts"
          }
        ]
      },
      "decorator": {
        "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))\\@",
        "beginCaptures": {
          "0": {
            "name": "punctuation.decorator.ts"
          }
        },
        "end": "(?=\\s)",
        "name": "meta.decorator.ts",
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
            "name": "meta.object-binding-pattern-variable.ts",
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
            "name": "meta.array-binding-pattern-variable.ts",
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
                "name": "keyword.operator.rest.ts"
              },
              "2": {
                "name": "punctuation.definition.binding-pattern.object.ts"
              }
            },
            "end": "\\}",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.binding-pattern.object.ts"
              }
            },
            "name": "meta.parameter.object-binding-pattern.ts",
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
                "name": "keyword.operator.rest.ts"
              },
              "2": {
                "name": "punctuation.definition.binding-pattern.array.ts"
              }
            },
            "end": "\\]",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.binding-pattern.array.ts"
              }
            },
            "name": "meta.paramter.array-binding-pattern.ts",
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
            "name": "keyword.operator.rest.ts"
          },
          "2": {
            "name": "variable.parameter.ts"
          }
        },
        "match": "(?:(\\.\\.\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)"
      },
      "destructuring-variable": {
        "patterns": [
          {
            "begin": "(?<!=|:|^of|[^\\._$[:alnum:]]of|^in|[^\\._$[:alnum:]]in)\\s*(?=\\{)",
            "end": "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            "name": "meta.object-binding-pattern-variable.ts",
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
            "name": "meta.array-binding-pattern-variable.ts",
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
            "name": "keyword.operator.rest.ts"
          },
          "2": {
            "name": "meta.definition.variable.ts variable.other.readwrite.ts"
          }
        },
        "match": "(?:(\\.\\.\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)"
      },
      "destructuring-variable-rest-const": {
        "captures": {
          "1": {
            "name": "keyword.operator.rest.ts"
          },
          "2": {
            "name": "meta.definition.variable.ts variable.other.constant.ts"
          }
        },
        "match": "(?:(\\.\\.\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)"
      },
      "directives": {
        "begin": "^(///)\\s*(?=<(reference|amd-dependency|amd-module)(\\s+(path|types|no-default-lib|lib|name|resolution-mode)\\s*=\\s*((\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)))+\\s*/>\\s*$)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.comment.ts"
          }
        },
        "end": "(?=$)",
        "name": "comment.line.triple-slash.directive.ts",
        "patterns": [
          {
            "begin": "(<)(reference|amd-dependency|amd-module)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.tag.directive.ts"
              },
              "2": {
                "name": "entity.name.tag.directive.ts"
              }
            },
            "end": "/>",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.tag.directive.ts"
              }
            },
            "name": "meta.tag.ts",
            "patterns": [
              {
                "match": "path|types|no-default-lib|lib|name|resolution-mode",
                "name": "entity.other.attribute-name.directive.ts"
              },
              {
                "match": "=",
                "name": "keyword.operator.assignment.ts"
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
                    "name": "source.embedded.ts"
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
                    "name": "source.embedded.ts"
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
            "name": "keyword.control.export.ts"
          },
          "2": {
            "name": "storage.modifier.ts"
          },
          "3": {
            "name": "storage.modifier.ts"
          },
          "4": {
            "name": "storage.type.enum.ts"
          },
          "5": {
            "name": "entity.name.type.enum.ts"
          }
        },
        "end": "(?<=\\})",
        "name": "meta.enum.declaration.ts",
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "begin": "\\{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.block.ts"
              }
            },
            "end": "\\}",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.block.ts"
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
                    "name": "variable.other.enummember.ts"
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
                "name": "keyword.control.export.ts"
              },
              "2": {
                "name": "keyword.control.as.ts"
              },
              "3": {
                "name": "storage.type.namespace.ts"
              },
              "4": {
                "name": "entity.name.type.module.ts"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)\\s+(as)\\s+(namespace)\\s+([_$[:alpha:]][_$[:alnum:]]*)"
          },
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)(?:\\s+(type))?(?:(?:\\s*(=))|(?:\\s+(default)(?=\\s+)))",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.export.ts"
              },
              "2": {
                "name": "keyword.control.type.ts"
              },
              "3": {
                "name": "keyword.operator.assignment.ts"
              },
              "4": {
                "name": "keyword.control.default.ts"
              }
            },
            "end": "(?=$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",
            "name": "meta.export.default.ts",
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
                "name": "keyword.control.export.ts"
              },
              "2": {
                "name": "keyword.control.type.ts"
              }
            },
            "end": "(?=$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",
            "name": "meta.export.ts",
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
                "name": "storage.modifier.ts"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|protected|private|readonly)\\s+(?=(override|public|protected|private|readonly)\\s+)"
          },
          {
            "captures": {
              "1": {
                "name": "storage.modifier.ts"
              },
              "2": {
                "name": "keyword.operator.rest.ts"
              },
              "3": {
                "name": "entity.name.function.ts variable.language.this.ts"
              },
              "4": {
                "name": "entity.name.function.ts"
              },
              "5": {
                "name": "keyword.operator.optional.ts"
              }
            },
            "match": "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$[:alnum:]]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))"
          },
          {
            "captures": {
              "1": {
                "name": "storage.modifier.ts"
              },
              "2": {
                "name": "keyword.operator.rest.ts"
              },
              "3": {
                "name": "variable.parameter.ts variable.language.this.ts"
              },
              "4": {
                "name": "variable.parameter.ts"
              },
              "5": {
                "name": "keyword.operator.optional.ts"
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
            "name": "punctuation.separator.parameter.ts"
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
            "name": "keyword.control.flow.ts"
          },
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(yield)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?=\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*\\*)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.flow.ts"
              }
            },
            "end": "\\*",
            "endCaptures": {
              "0": {
                "name": "keyword.generator.asterisk.ts"
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
                "name": "keyword.control.flow.ts"
              },
              "2": {
                "name": "keyword.generator.asterisk.ts"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(yield)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?:\\s*(\\*))?"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))delete(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.operator.expression.delete.ts"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))in(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?!\\()",
            "name": "keyword.operator.expression.in.ts"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))of(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?!\\()",
            "name": "keyword.operator.expression.of.ts"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))instanceof(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.operator.expression.instanceof.ts"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))new(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.operator.new.ts"
          },
          {
            "include": "#typeof-operator"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))void(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.operator.expression.void.ts"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.control.as.ts"
              },
              "2": {
                "name": "storage.modifier.ts"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+(const)(?=\\s*($|[;,:})\\]]))"
          },
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(as)|(satisfies))\\s+",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.as.ts"
              },
              "2": {
                "name": "keyword.control.satisfies.ts"
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
            "name": "keyword.operator.spread.ts"
          },
          {
            "match": "\\*=|(?<!\\()/=|%=|\\+=|\\-=",
            "name": "keyword.operator.assignment.compound.ts"
          },
          {
            "match": "\\&=|\\^=|<<=|>>=|>>>=|\\|=",
            "name": "keyword.operator.assignment.compound.bitwise.ts"
          },
          {
            "match": "<<|>>>|>>",
            "name": "keyword.operator.bitwise.shift.ts"
          },
          {
            "match": "===|!==|==|!=",
            "name": "keyword.operator.comparison.ts"
          },
          {
            "match": "<=|>=|<>|<|>",
            "name": "keyword.operator.relational.ts"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.operator.logical.ts"
              },
              "2": {
                "name": "keyword.operator.assignment.compound.ts"
              },
              "3": {
                "name": "keyword.operator.arithmetic.ts"
              }
            },
            "match": "(?<=[_$[:alnum:]])(\\!)\\s*(?:(/=)|(?:(/)(?![/*])))"
          },
          {
            "match": "\\!|&&|\\|\\||\\?\\?",
            "name": "keyword.operator.logical.ts"
          },
          {
            "match": "\\&|~|\\^|\\|",
            "name": "keyword.operator.bitwise.ts"
          },
          {
            "match": "\\=",
            "name": "keyword.operator.assignment.ts"
          },
          {
            "match": "--",
            "name": "keyword.operator.decrement.ts"
          },
          {
            "match": "\\+\\+",
            "name": "keyword.operator.increment.ts"
          },
          {
            "match": "%|\\*|/|-|\\+",
            "name": "keyword.operator.arithmetic.ts"
          },
          {
            "begin": "(?<=[_$[:alnum:])\\]])\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)+(?:(/=)|(?:(/)(?![/*]))))",
            "end": "(?:(/=)|(?:(/)(?!\\*([^\\*]|(\\*[^\\/]))*\\*\\/)))",
            "endCaptures": {
              "1": {
                "name": "keyword.operator.assignment.compound.ts"
              },
              "2": {
                "name": "keyword.operator.arithmetic.ts"
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
                "name": "keyword.operator.assignment.compound.ts"
              },
              "2": {
                "name": "keyword.operator.arithmetic.ts"
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
            "name": "storage.modifier.ts"
          }
        },
        "end": "(?=\\}|;|,|$|(^(?!\\s*((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.)))(?!\\$))|(\\#?[_$[:alpha:]][_$[:alnum:]]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(?:(?:(\\?)|(\\!))\\s*)?(=|:|;|,|$))))|(?<=\\})",
        "name": "meta.field.declaration.ts",
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
                "name": "meta.definition.property.ts entity.name.function.ts"
              },
              "2": {
                "name": "keyword.operator.optional.ts"
              },
              "3": {
                "name": "keyword.operator.definiteassignment.ts"
              }
            },
            "match": "(\\#?[_$[:alpha:]][_$[:alnum:]]*)(?:(\\?)|(\\!))?(?=\\s*\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$[:alnum:]]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))"
          },
          {
            "match": "\\#?[_$[:alpha:]][_$[:alnum:]]*",
            "name": "meta.definition.property.ts variable.object.property.ts"
          },
          {
            "match": "\\?",
            "name": "keyword.operator.optional.ts"
          },
          {
            "match": "\\!",
            "name": "keyword.operator.definiteassignment.ts"
          }
        ]
      },
      "for-loop": {
        "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))for(?=((\\s+|(\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*))await)?\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)?(\\())",
        "beginCaptures": {
          "0": {
            "name": "keyword.control.loop.ts"
          }
        },
        "end": "(?<=\\))",
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "match": "await",
            "name": "keyword.control.loop.ts"
          },
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "meta.brace.round.ts"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "meta.brace.round.ts"
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
            "name": "keyword.generator.asterisk.ts"
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
                "name": "meta.function-call.ts",
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
                "name": "meta.function-call.ts",
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
            "name": "meta.function-call.ts punctuation.accessor.optional.ts"
          },
          {
            "match": "\\!",
            "name": "meta.function-call.ts keyword.operator.definiteassignment.ts"
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
            "name": "entity.name.function.ts"
          }
        ]
      },
      "function-declaration": {
        "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?(?:(async)\\s+)?(function\\b)(?:\\s*(\\*))?(?:(?:\\s+|(?<=\\*))([_$[:alpha:]][_$[:alnum:]]*))?\\s*",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.export.ts"
          },
          "2": {
            "name": "storage.modifier.ts"
          },
          "3": {
            "name": "storage.modifier.async.ts"
          },
          "4": {
            "name": "storage.type.function.ts"
          },
          "5": {
            "name": "keyword.generator.asterisk.ts"
          },
          "6": {
            "name": "meta.definition.function.ts entity.name.function.ts"
          }
        },
        "end": "(?=;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))|(?<=\\})",
        "name": "meta.function.ts",
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
            "name": "storage.modifier.async.ts"
          },
          "2": {
            "name": "storage.type.function.ts"
          },
          "3": {
            "name": "keyword.generator.asterisk.ts"
          },
          "4": {
            "name": "meta.definition.function.ts entity.name.function.ts"
          }
        },
        "end": "(?=;)|(?<=\\})",
        "name": "meta.function.expression.ts",
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
        "name": "meta.definition.function.ts entity.name.function.ts"
      },
      "function-parameters": {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.parameters.begin.ts"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.parameters.end.ts"
          }
        },
        "name": "meta.parameters.ts",
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
            "name": "punctuation.separator.parameter.ts"
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
                "name": "punctuation.accessor.ts"
              },
              "2": {
                "name": "punctuation.accessor.optional.ts"
              },
              "3": {
                "name": "entity.name.function.ts"
              }
            },
            "match": "(?:(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*)?([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.accessor.ts"
              },
              "2": {
                "name": "punctuation.accessor.optional.ts"
              },
              "3": {
                "name": "variable.other.constant.property.ts"
              }
            },
            "match": "(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(\\#?[[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.accessor.ts"
              },
              "2": {
                "name": "punctuation.accessor.optional.ts"
              },
              "3": {
                "name": "variable.other.property.ts"
              }
            },
            "match": "(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(\\#?[_$[:alpha:]][_$[:alnum:]]*)"
          },
          {
            "match": "([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])",
            "name": "variable.other.constant.ts"
          },
          {
            "match": "[_$[:alpha:]][_$[:alnum:]]*",
            "name": "variable.other.readwrite.ts"
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
                    "name": "keyword.control.conditional.ts"
                  },
                  "2": {
                    "name": "meta.brace.round.ts"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "meta.brace.round.ts"
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
                    "name": "punctuation.definition.string.begin.ts"
                  }
                },
                "end": "(/)([dgimsuvy]*)",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.string.end.ts"
                  },
                  "2": {
                    "name": "keyword.other.ts"
                  }
                },
                "name": "string.regexp.ts",
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
            "name": "keyword.control.export.ts"
          },
          "2": {
            "name": "storage.modifier.ts"
          },
          "3": {
            "name": "keyword.control.import.ts"
          },
          "4": {
            "name": "keyword.control.type.ts"
          }
        },
        "end": "(?<!^import|[^\\._$[:alnum:]]import)(?=;|$|^)",
        "name": "meta.import.ts",
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
                "name": "keyword.control.from.ts"
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
                "name": "keyword.control.export.ts"
              },
              "2": {
                "name": "storage.modifier.ts"
              },
              "3": {
                "name": "keyword.control.import.ts"
              },
              "4": {
                "name": "keyword.control.type.ts"
              },
              "5": {
                "name": "variable.other.readwrite.alias.ts"
              },
              "6": {
                "name": "keyword.operator.assignment.ts"
              },
              "7": {
                "name": "keyword.control.require.ts"
              },
              "8": {
                "name": "meta.brace.round.ts"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "meta.brace.round.ts"
              }
            },
            "name": "meta.import-equals.external.ts",
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
                "name": "keyword.control.export.ts"
              },
              "2": {
                "name": "storage.modifier.ts"
              },
              "3": {
                "name": "keyword.control.import.ts"
              },
              "4": {
                "name": "keyword.control.type.ts"
              },
              "5": {
                "name": "variable.other.readwrite.alias.ts"
              },
              "6": {
                "name": "keyword.operator.assignment.ts"
              }
            },
            "end": "(?=;|$|^)",
            "name": "meta.import-equals.internal.ts",
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
                    "name": "entity.name.type.module.ts"
                  },
                  "2": {
                    "name": "punctuation.accessor.ts"
                  },
                  "3": {
                    "name": "punctuation.accessor.optional.ts"
                  }
                },
                "match": "([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))"
              },
              {
                "match": "([_$[:alpha:]][_$[:alnum:]]*)",
                "name": "variable.other.readwrite.ts"
              }
            ]
          }
        ]
      },
      "import-export-assert-clause": {
        "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(with)|(assert))\\s*(\\{)",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.with.ts"
          },
          "2": {
            "name": "keyword.control.assert.ts"
          },
          "3": {
            "name": "punctuation.definition.block.ts"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.block.ts"
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
            "name": "meta.object-literal.key.ts"
          },
          {
            "match": ":",
            "name": "punctuation.separator.key-value.ts"
          }
        ]
      },
      "import-export-block": {
        "begin": "\\{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.block.ts"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.block.ts"
          }
        },
        "name": "meta.block.ts",
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
                "name": "keyword.control.type.ts"
              },
              "2": {
                "name": "keyword.control.default.ts"
              },
              "3": {
                "name": "constant.language.import-export-all.ts"
              },
              "4": {
                "name": "variable.other.readwrite.ts"
              },
              "5": {
                "name": "string.quoted.alias.ts"
              },
              "12": {
                "name": "keyword.control.as.ts"
              },
              "13": {
                "name": "keyword.control.default.ts"
              },
              "14": {
                "name": "variable.other.readwrite.alias.ts"
              },
              "15": {
                "name": "string.quoted.alias.ts"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(?:(\\btype)\\s+)?(?:(\\bdefault)|(\\*)|(\\b[_$[:alpha:]][_$[:alnum:]]*)|((\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))))\\s+(as)\\s+(?:(default(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|([_$[:alpha:]][_$[:alnum:]]*)|((\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)))"
          },
          {
            "include": "#punctuation-comma"
          },
          {
            "match": "\\*",
            "name": "constant.language.import-export-all.ts"
          },
          {
            "match": "\\b(default)\\b",
            "name": "keyword.control.default.ts"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.control.type.ts"
              },
              "2": {
                "name": "variable.other.readwrite.alias.ts"
              },
              "3": {
                "name": "string.quoted.alias.ts"
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
            "name": "keyword.control.from.ts"
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
            "name": "storage.modifier.ts"
          },
          "2": {
            "name": "meta.brace.square.ts"
          },
          "3": {
            "name": "variable.parameter.ts"
          }
        },
        "end": "(\\])\\s*(\\?\\s*)?|$",
        "endCaptures": {
          "1": {
            "name": "meta.brace.square.ts"
          },
          "2": {
            "name": "keyword.operator.optional.ts"
          }
        },
        "name": "meta.indexer.declaration.ts",
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
            "name": "keyword.operator.type.modifier.ts"
          },
          "2": {
            "name": "storage.modifier.ts"
          },
          "3": {
            "name": "meta.brace.square.ts"
          },
          "4": {
            "name": "entity.name.type.ts"
          },
          "5": {
            "name": "keyword.operator.expression.in.ts"
          }
        },
        "end": "(\\])([+-])?\\s*(\\?\\s*)?|$",
        "endCaptures": {
          "1": {
            "name": "meta.brace.square.ts"
          },
          "2": {
            "name": "keyword.operator.type.modifier.ts"
          },
          "3": {
            "name": "keyword.operator.optional.ts"
          }
        },
        "name": "meta.indexer.mappedtype.declaration.ts",
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "keyword.control.as.ts"
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
            "name": "keyword.operator.expression.instanceof.ts"
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
            "name": "keyword.control.export.ts"
          },
          "2": {
            "name": "storage.modifier.ts"
          },
          "3": {
            "name": "storage.modifier.ts"
          },
          "4": {
            "name": "storage.type.interface.ts"
          }
        },
        "end": "(?<=\\})",
        "name": "meta.interface.ts",
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
                "name": "entity.name.type.interface.ts"
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
      "label": {
        "patterns": [
          {
            "begin": "([_$[:alpha:]][_$[:alnum:]]*)\\s*(:)(?=\\s*\\{)",
            "beginCaptures": {
              "1": {
                "name": "entity.name.label.ts"
              },
              "2": {
                "name": "punctuation.separator.label.ts"
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
                "name": "entity.name.label.ts"
              },
              "2": {
                "name": "punctuation.separator.label.ts"
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
                "name": "storage.modifier.ts"
              },
              "2": {
                "name": "storage.modifier.ts"
              },
              "3": {
                "name": "storage.modifier.ts"
              },
              "4": {
                "name": "storage.modifier.async.ts"
              },
              "5": {
                "name": "storage.type.ts"
              }
            },
            "end": "(?=\\}|;|,|$)|(?<=\\})",
            "name": "meta.method.declaration.ts",
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
                "name": "storage.modifier.ts"
              },
              "2": {
                "name": "storage.modifier.ts"
              },
              "3": {
                "name": "storage.modifier.ts"
              },
              "4": {
                "name": "storage.modifier.async.ts"
              },
              "5": {
                "name": "keyword.operator.new.ts"
              },
              "6": {
                "name": "keyword.generator.asterisk.ts"
              }
            },
            "end": "(?=\\}|;|,|$)|(?<=\\})",
            "name": "meta.method.declaration.ts",
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
                "name": "storage.modifier.ts"
              },
              "2": {
                "name": "storage.modifier.ts"
              },
              "3": {
                "name": "storage.modifier.ts"
              },
              "4": {
                "name": "storage.modifier.async.ts"
              },
              "5": {
                "name": "storage.type.property.ts"
              },
              "6": {
                "name": "keyword.generator.asterisk.ts"
              }
            },
            "end": "(?=\\}|;|,|$)|(?<=\\})",
            "name": "meta.method.declaration.ts",
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
            "name": "meta.definition.method.ts entity.name.function.ts"
          },
          {
            "match": "\\?",
            "name": "keyword.operator.optional.ts"
          }
        ]
      },
      "namespace-declaration": {
        "begin": "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(namespace|module)\\s+(?=[_$[:alpha:]\"'`]))",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.export.ts"
          },
          "2": {
            "name": "storage.modifier.ts"
          },
          "3": {
            "name": "storage.type.namespace.ts"
          }
        },
        "end": "(?<=\\})|(?=;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",
        "name": "meta.namespace.declaration.ts",
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#string"
          },
          {
            "match": "([_$[:alpha:]][_$[:alnum:]]*)",
            "name": "entity.name.type.module.ts"
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
            "name": "keyword.operator.new.ts"
          }
        },
        "end": "(?<=\\))|(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))new(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))function((\\s+[_$[:alpha:]][_$[:alnum:]]*)|(\\s*[\\(]))))",
        "name": "new.expr.ts",
        "patterns": [
          {
            "include": "#expression"
          }
        ]
      },
      "null-literal": {
        "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))null(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        "name": "constant.language.null.ts"
      },
      "numeric-literal": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "storage.type.numeric.bigint.ts"
              }
            },
            "match": "\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$)",
            "name": "constant.numeric.hex.ts"
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.numeric.bigint.ts"
              }
            },
            "match": "\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$)",
            "name": "constant.numeric.binary.ts"
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.numeric.bigint.ts"
              }
            },
            "match": "\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$)",
            "name": "constant.numeric.octal.ts"
          },
          {
            "captures": {
              "0": {
                "name": "constant.numeric.decimal.ts"
              },
              "1": {
                "name": "meta.delimiter.decimal.period.ts"
              },
              "2": {
                "name": "storage.type.numeric.bigint.ts"
              },
              "3": {
                "name": "meta.delimiter.decimal.period.ts"
              },
              "4": {
                "name": "storage.type.numeric.bigint.ts"
              },
              "5": {
                "name": "meta.delimiter.decimal.period.ts"
              },
              "6": {
                "name": "storage.type.numeric.bigint.ts"
              },
              "7": {
                "name": "storage.type.numeric.bigint.ts"
              },
              "8": {
                "name": "meta.delimiter.decimal.period.ts"
              },
              "9": {
                "name": "storage.type.numeric.bigint.ts"
              },
              "10": {
                "name": "meta.delimiter.decimal.period.ts"
              },
              "11": {
                "name": "storage.type.numeric.bigint.ts"
              },
              "12": {
                "name": "meta.delimiter.decimal.period.ts"
              },
              "13": {
                "name": "storage.type.numeric.bigint.ts"
              },
              "14": {
                "name": "storage.type.numeric.bigint.ts"
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
            "name": "constant.language.nan.ts"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Infinity(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "constant.language.infinity.ts"
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
            "name": "punctuation.destructuring.ts"
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
            "name": "variable.object.property.ts"
          }
        ]
      },
      "object-binding-pattern": {
        "begin": "(?:(\\.\\.\\.)\\s*)?(\\{)",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.rest.ts"
          },
          "2": {
            "name": "punctuation.definition.binding-pattern.object.ts"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.binding-pattern.object.ts"
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
            "name": "keyword.operator.rest.ts"
          },
          "2": {
            "name": "punctuation.definition.binding-pattern.object.ts"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.binding-pattern.object.ts"
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
            "name": "support.class.ts"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.accessor.ts"
              },
              "2": {
                "name": "punctuation.accessor.optional.ts"
              },
              "3": {
                "name": "variable.other.constant.object.property.ts"
              },
              "4": {
                "name": "variable.other.object.property.ts"
              }
            },
            "match": "(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(?:(\\#?[[:upper:]][_$[:digit:][:upper:]]*)|(\\#?[_$[:alpha:]][_$[:alnum:]]*))(?=\\s*\\??\\.\\s*\\#?[_$[:alpha:]][_$[:alnum:]]*)"
          },
          {
            "captures": {
              "1": {
                "name": "variable.other.constant.object.ts"
              },
              "2": {
                "name": "variable.other.object.ts"
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
            "name": "punctuation.definition.block.ts"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.block.ts"
          }
        },
        "name": "meta.objectliteral.ts",
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
            "name": "storage.modifier.async.ts"
          },
          "2": {
            "name": "storage.type.property.ts"
          },
          "3": {
            "name": "keyword.generator.asterisk.ts"
          }
        },
        "end": "(?=\\}|;|,)|(?<=\\})",
        "name": "meta.method.declaration.ts",
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
                "name": "storage.modifier.async.ts"
              },
              "2": {
                "name": "storage.type.property.ts"
              },
              "3": {
                "name": "keyword.generator.asterisk.ts"
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
            "name": "meta.object.member.ts meta.object-literal.key.ts",
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
            "name": "meta.object.member.ts meta.object-literal.key.ts",
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
            "name": "meta.object.member.ts meta.object-literal.key.ts",
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
            "name": "meta.method.declaration.ts",
            "patterns": [
              {
                "include": "#function-body"
              }
            ]
          },
          {
            "captures": {
              "0": {
                "name": "meta.object-literal.key.ts"
              },
              "1": {
                "name": "constant.numeric.decimal.ts"
              }
            },
            "match": "(?![_$[:alpha:]])([[:digit:]]+)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)",
            "name": "meta.object.member.ts"
          },
          {
            "captures": {
              "0": {
                "name": "meta.object-literal.key.ts"
              },
              "1": {
                "name": "entity.name.function.ts"
              }
            },
            "match": "(?:([_$[:alpha:]][_$[:alnum:]]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:(\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/)*\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))",
            "name": "meta.object.member.ts"
          },
          {
            "captures": {
              "0": {
                "name": "meta.object-literal.key.ts"
              }
            },
            "match": "(?:[_$[:alpha:]][_$[:alnum:]]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)",
            "name": "meta.object.member.ts"
          },
          {
            "begin": "\\.\\.\\.",
            "beginCaptures": {
              "0": {
                "name": "keyword.operator.spread.ts"
              }
            },
            "end": "(?=,|\\})",
            "name": "meta.object.member.ts",
            "patterns": [
              {
                "include": "#expression"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "variable.other.readwrite.ts"
              }
            },
            "match": "([_$[:alpha:]][_$[:alnum:]]*)\\s*(?=,|\\}|$|\\/\\/|\\/\\*)",
            "name": "meta.object.member.ts"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.control.as.ts"
              },
              "2": {
                "name": "storage.modifier.ts"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+(const)(?=\\s*([,}]|$))",
            "name": "meta.object.member.ts"
          },
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(as)|(satisfies))\\s+",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.as.ts"
              },
              "2": {
                "name": "keyword.control.satisfies.ts"
              }
            },
            "end": "(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|^|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(as|satisifies)\\s+))",
            "name": "meta.object.member.ts",
            "patterns": [
              {
                "include": "#type"
              }
            ]
          },
          {
            "begin": "(?=[_$[:alpha:]][_$[:alnum:]]*\\s*=)",
            "end": "(?=,|\\}|$|\\/\\/|\\/\\*)",
            "name": "meta.object.member.ts",
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
                "name": "meta.object-literal.key.ts punctuation.separator.key-value.ts"
              }
            },
            "end": "(?=,|\\})",
            "name": "meta.object.member.ts",
            "patterns": [
              {
                "begin": "(?<=:)\\s*(async)?(?=\\s*(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)\\(\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",
                "beginCaptures": {
                  "1": {
                    "name": "storage.modifier.async.ts"
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
                        "name": "meta.brace.round.ts"
                      }
                    },
                    "end": "\\)",
                    "endCaptures": {
                      "0": {
                        "name": "meta.brace.round.ts"
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
                    "name": "storage.modifier.async.ts"
                  },
                  "2": {
                    "name": "meta.brace.round.ts"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "meta.brace.round.ts"
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
                    "name": "storage.modifier.async.ts"
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
                    "name": "meta.brace.round.ts"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "meta.brace.round.ts"
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
            "name": "keyword.operator.rest.ts"
          },
          "2": {
            "name": "punctuation.definition.binding-pattern.array.ts"
          }
        },
        "end": "\\]",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.binding-pattern.array.ts"
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
                "name": "storage.modifier.ts"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|protected|private|readonly)\\s+(?=(override|public|protected|private|readonly)\\s+)"
          },
          {
            "captures": {
              "1": {
                "name": "storage.modifier.ts"
              },
              "2": {
                "name": "keyword.operator.rest.ts"
              },
              "3": {
                "name": "entity.name.function.ts variable.language.this.ts"
              },
              "4": {
                "name": "entity.name.function.ts"
              },
              "5": {
                "name": "keyword.operator.optional.ts"
              }
            },
            "match": "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$[:alnum:]]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))"
          },
          {
            "captures": {
              "1": {
                "name": "storage.modifier.ts"
              },
              "2": {
                "name": "keyword.operator.rest.ts"
              },
              "3": {
                "name": "variable.parameter.ts variable.language.this.ts"
              },
              "4": {
                "name": "variable.parameter.ts"
              },
              "5": {
                "name": "keyword.operator.optional.ts"
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
            "name": "keyword.operator.rest.ts"
          },
          "2": {
            "name": "punctuation.definition.binding-pattern.object.ts"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.binding-pattern.object.ts"
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
                "name": "keyword.operator.type.annotation.ts"
              }
            },
            "end": "(?=[,)])|(?==[^>])",
            "name": "meta.type.annotation.ts",
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
            "name": "meta.brace.round.ts"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "meta.brace.round.ts"
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
                "name": "storage.modifier.async.ts"
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
                "name": "storage.modifier.async.ts"
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
                "name": "meta.brace.round.ts"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "meta.brace.round.ts"
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
            "name": "meta.arrow.ts meta.return.type.arrow.ts keyword.operator.type.annotation.ts"
          }
        },
        "contentName": "meta.arrow.ts meta.return.type.arrow.ts",
        "end": "(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))",
        "patterns": [
          {
            "include": "#arrow-return-type-body"
          }
        ]
      },
      "property-accessor": {
        "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(accessor|get|set)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        "name": "storage.type.property.ts"
      },
      "punctuation-accessor": {
        "captures": {
          "1": {
            "name": "punctuation.accessor.ts"
          },
          "2": {
            "name": "punctuation.accessor.optional.ts"
          }
        },
        "match": "(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))"
      },
      "punctuation-comma": {
        "match": ",",
        "name": "punctuation.separator.comma.ts"
      },
      "punctuation-semicolon": {
        "match": ";",
        "name": "punctuation.terminator.statement.ts"
      },
      "qstring-double": {
        "begin": "\"",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.ts"
          }
        },
        "end": "(\")|((?:[^\\\\\\n])$)",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.string.end.ts"
          },
          "2": {
            "name": "invalid.illegal.newline.ts"
          }
        },
        "name": "string.quoted.double.ts",
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
            "name": "punctuation.definition.string.begin.ts"
          }
        },
        "end": "(\\')|((?:[^\\\\\\n])$)",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.string.end.ts"
          },
          "2": {
            "name": "invalid.illegal.newline.ts"
          }
        },
        "name": "string.quoted.single.ts",
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
                "name": "punctuation.definition.string.begin.ts"
              }
            },
            "end": "(/)([dgimsuvy]*)",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.string.end.ts"
              },
              "2": {
                "name": "keyword.other.ts"
              }
            },
            "name": "string.regexp.ts",
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
                "name": "punctuation.definition.string.begin.ts"
              }
            },
            "end": "(/)([dgimsuvy]*)",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.string.end.ts"
              },
              "2": {
                "name": "keyword.other.ts"
              }
            },
            "name": "string.regexp.ts",
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
                "name": "keyword.operator.type.annotation.ts"
              }
            },
            "end": "(?<![:|&])(?=$|^|[{};,]|//)",
            "name": "meta.return.type.ts",
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
                "name": "keyword.operator.type.annotation.ts"
              }
            },
            "end": "(?<![:|&])((?=[{};,]|//|^\\s*$)|((?<=\\S)(?=\\s*$)))",
            "name": "meta.return.type.ts",
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
            "name": "punctuation.definition.comment.ts"
          }
        },
        "match": "\\A(#!).*(?=$)",
        "name": "comment.line.shebang.ts"
      },
      "single-line-comment-consuming-line-ending": {
        "begin": "(^[ \\t]+)?((//)(?:\\s*((@)internal)(?=\\s|$))?)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.whitespace.comment.leading.ts"
          },
          "2": {
            "name": "comment.line.double-slash.ts"
          },
          "3": {
            "name": "punctuation.definition.comment.ts"
          },
          "4": {
            "name": "storage.type.internaldeclaration.ts"
          },
          "5": {
            "name": "punctuation.decorator.internaldeclaration.ts"
          }
        },
        "contentName": "comment.line.double-slash.ts",
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
        "name": "constant.character.escape.ts"
      },
      "super-literal": {
        "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))super\\b(?!\\$)",
        "name": "variable.language.super.ts"
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
            "name": "keyword.operator.expression.import.ts"
          }
        ]
      },
      "support-objects": {
        "patterns": [
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(arguments)\\b(?!\\$)",
            "name": "variable.language.arguments.ts"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(Promise)\\b(?!\\$)",
            "name": "support.class.promise.ts"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.control.import.ts"
              },
              "2": {
                "name": "punctuation.accessor.ts"
              },
              "3": {
                "name": "punctuation.accessor.optional.ts"
              },
              "4": {
                "name": "support.variable.property.importmeta.ts"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(import)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(meta)\\b(?!\\$)"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.operator.new.ts"
              },
              "2": {
                "name": "punctuation.accessor.ts"
              },
              "3": {
                "name": "punctuation.accessor.optional.ts"
              },
              "4": {
                "name": "support.variable.property.target.ts"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(new)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(target)\\b(?!\\$)"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.accessor.ts"
              },
              "2": {
                "name": "punctuation.accessor.optional.ts"
              },
              "3": {
                "name": "support.variable.property.ts"
              },
              "4": {
                "name": "support.constant.ts"
              }
            },
            "match": "(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(?:(?:(constructor|length|prototype|__proto__)\\b(?!\\$|\\s*(<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\())|(?:(EPSILON|MAX_SAFE_INTEGER|MAX_VALUE|MIN_SAFE_INTEGER|MIN_VALUE|NEGATIVE_INFINITY|POSITIVE_INFINITY)\\b(?!\\$)))"
          },
          {
            "captures": {
              "1": {
                "name": "support.type.object.module.ts"
              },
              "2": {
                "name": "support.type.object.module.ts"
              },
              "3": {
                "name": "punctuation.accessor.ts"
              },
              "4": {
                "name": "punctuation.accessor.optional.ts"
              },
              "5": {
                "name": "support.type.object.module.ts"
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
            "name": "punctuation.definition.block.ts"
          }
        },
        "name": "switch-statement.expr.ts",
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(switch)\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.switch.ts"
              },
              "2": {
                "name": "meta.brace.round.ts"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "meta.brace.round.ts"
              }
            },
            "name": "switch-expression.expr.ts",
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
                "name": "punctuation.definition.block.ts"
              }
            },
            "end": "(?=\\})",
            "name": "switch-block.expr.ts",
            "patterns": [
              {
                "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(case|default(?=:))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.switch.ts"
                  }
                },
                "end": "(?=:)",
                "name": "case-clause.expr.ts",
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
                    "name": "case-clause.expr.ts punctuation.definition.section.case-statement.ts"
                  },
                  "2": {
                    "name": "meta.block.ts punctuation.definition.block.ts"
                  }
                },
                "contentName": "meta.block.ts",
                "end": "\\}",
                "endCaptures": {
                  "0": {
                    "name": "meta.block.ts punctuation.definition.block.ts"
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
                    "name": "case-clause.expr.ts punctuation.definition.section.case-statement.ts"
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
                "name": "entity.name.function.tagged-template.ts"
              },
              "2": {
                "name": "string.template.ts punctuation.definition.string.template.begin.ts"
              }
            },
            "contentName": "string.template.ts",
            "end": "`",
            "endCaptures": {
              "0": {
                "name": "string.template.ts punctuation.definition.string.template.end.ts"
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
                    "name": "entity.name.function.tagged-template.ts"
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
                "name": "entity.name.function.tagged-template.ts"
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
            "name": "punctuation.definition.template-expression.begin.ts"
          }
        },
        "contentName": "meta.embedded.line.ts",
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.template-expression.end.ts"
          }
        },
        "name": "meta.template.expression.ts",
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
                "name": "entity.name.function.tagged-template.ts"
              },
              "2": {
                "name": "string.template.ts punctuation.definition.string.template.begin.ts"
              }
            },
            "contentName": "string.template.ts",
            "end": "`",
            "endCaptures": {
              "0": {
                "name": "string.template.ts punctuation.definition.string.template.end.ts"
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
            "name": "punctuation.definition.template-expression.begin.ts"
          }
        },
        "contentName": "meta.embedded.line.ts",
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.template-expression.end.ts"
          }
        },
        "name": "meta.template.expression.ts",
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
            "name": "keyword.operator.ternary.ts"
          }
        },
        "end": "\\s*(:)",
        "endCaptures": {
          "1": {
            "name": "keyword.operator.ternary.ts"
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
        "name": "variable.language.this.ts"
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
                "name": "storage.modifier.ts"
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
            "name": "keyword.control.export.ts"
          },
          "2": {
            "name": "storage.modifier.ts"
          },
          "3": {
            "name": "storage.type.type.ts"
          },
          "4": {
            "name": "entity.name.type.alias.ts"
          }
        },
        "end": "(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))",
        "name": "meta.type.declaration.ts",
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
                "name": "keyword.operator.assignment.ts"
              },
              "2": {
                "name": "keyword.control.intrinsic.ts"
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
                "name": "keyword.operator.assignment.ts"
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
                "name": "keyword.operator.type.annotation.ts"
              }
            },
            "end": "(?<![:|&])(?!\\s*[|&]\\s+)((?=^|[,);\\}\\]]|//)|(?==[^>])|((?<=[\\}>\\]\\)]|[_$[:alpha:]])\\s*(?=\\{)))",
            "name": "meta.type.annotation.ts",
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
                "name": "keyword.operator.type.annotation.ts"
              }
            },
            "end": "(?<![:|&])((?=[,);\\}\\]]|\\/\\/)|(?==[^>])|(?=^\\s*$)|((?<=[\\}>\\]\\)]|[_$[:alpha:]])\\s*(?=\\{)))",
            "name": "meta.type.annotation.ts",
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
            "name": "punctuation.definition.typeparameters.begin.ts"
          }
        },
        "end": "\\>",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.typeparameters.end.ts"
          }
        },
        "name": "meta.type.parameters.ts",
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
                "name": "keyword.operator.type.ts"
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
        "name": "support.type.builtin.ts"
      },
      "type-conditional": {
        "patterns": [
          {
            "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends)\\s+",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.ts"
              }
            },
            "end": "(?<=:)",
            "patterns": [
              {
                "begin": "\\?",
                "beginCaptures": {
                  "0": {
                    "name": "keyword.operator.ternary.ts"
                  }
                },
                "end": ":",
                "endCaptures": {
                  "0": {
                    "name": "keyword.operator.ternary.ts"
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
                "name": "meta.type.constructor.ts storage.modifier.ts"
              },
              "2": {
                "name": "meta.type.constructor.ts keyword.control.new.ts"
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
                "name": "storage.modifier.ts"
              },
              "2": {
                "name": "keyword.control.new.ts"
              }
            },
            "end": "(?<=\\))",
            "name": "meta.type.constructor.ts",
            "patterns": [
              {
                "include": "#function-parameters"
              }
            ]
          },
          {
            "begin": "((?=[(]\\s*(([)])|(\\.\\.\\.)|([_$[:alnum:]]+\\s*(([:,?=])|([)]\\s*=>))))))",
            "end": "(?<=\\))",
            "name": "meta.type.function.ts",
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
                "name": "storage.type.function.arrow.ts"
              }
            },
            "end": "(?<!=>)(?<![|&])(?=[,\\]\\)\\{\\}=;>:\\?]|//|$)",
            "name": "meta.type.function.return.ts",
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
                "name": "storage.type.function.arrow.ts"
              }
            },
            "end": "(?<!=>)(?<![|&])((?=[,\\]\\)\\{\\}=;:\\?>]|//|^\\s*$)|((?<=\\S)(?=\\s*$)))",
            "name": "meta.type.function.return.ts",
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
                "name": "keyword.operator.expression.infer.ts"
              },
              "2": {
                "name": "entity.name.type.ts"
              },
              "3": {
                "name": "keyword.operator.expression.extends.ts"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(infer)\\s+([_$[:alpha:]][_$[:alnum:]]*)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))(?:\\s+(extends)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))?",
            "name": "meta.type.infer.ts"
          }
        ]
      },
      "type-name": {
        "patterns": [
          {
            "begin": "([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))\\s*(<)",
            "captures": {
              "1": {
                "name": "entity.name.type.module.ts"
              },
              "2": {
                "name": "punctuation.accessor.ts"
              },
              "3": {
                "name": "punctuation.accessor.optional.ts"
              },
              "4": {
                "name": "meta.type.parameters.ts punctuation.definition.typeparameters.begin.ts"
              }
            },
            "contentName": "meta.type.parameters.ts",
            "end": "(>)",
            "endCaptures": {
              "1": {
                "name": "meta.type.parameters.ts punctuation.definition.typeparameters.end.ts"
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
                "name": "entity.name.type.ts"
              },
              "2": {
                "name": "meta.type.parameters.ts punctuation.definition.typeparameters.begin.ts"
              }
            },
            "contentName": "meta.type.parameters.ts",
            "end": "(>)",
            "endCaptures": {
              "1": {
                "name": "meta.type.parameters.ts punctuation.definition.typeparameters.end.ts"
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
                "name": "entity.name.type.module.ts"
              },
              "2": {
                "name": "punctuation.accessor.ts"
              },
              "3": {
                "name": "punctuation.accessor.optional.ts"
              }
            },
            "match": "([_$[:alpha:]][_$[:alnum:]]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[[:digit:]])))"
          },
          {
            "match": "[_$[:alpha:]][_$[:alnum:]]*",
            "name": "entity.name.type.ts"
          }
        ]
      },
      "type-object": {
        "begin": "\\{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.block.ts"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.block.ts"
          }
        },
        "name": "meta.object.type.ts",
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
                "name": "keyword.operator.spread.ts"
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
                "name": "keyword.operator.type.ts"
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
                "name": "keyword.operator.type.ts"
              }
            },
            "end": "(?=\\S)"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))keyof(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.operator.expression.keyof.ts"
          },
          {
            "match": "(\\?|\\:)",
            "name": "keyword.operator.ternary.ts"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))import(?=\\s*\\()",
            "name": "keyword.operator.expression.import.ts"
          }
        ]
      },
      "type-parameters": {
        "begin": "(<)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.typeparameters.begin.ts"
          }
        },
        "end": "(>)",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.typeparameters.end.ts"
          }
        },
        "name": "meta.type.parameters.ts",
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends|in|out|const)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "storage.modifier.ts"
          },
          {
            "include": "#type"
          },
          {
            "include": "#punctuation-comma"
          },
          {
            "match": "(=)(?!>)",
            "name": "keyword.operator.assignment.ts"
          }
        ]
      },
      "type-paren-or-function-parameters": {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "meta.brace.round.ts"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "meta.brace.round.ts"
          }
        },
        "name": "meta.type.paren.cover.ts",
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "storage.modifier.ts"
              },
              "2": {
                "name": "keyword.operator.rest.ts"
              },
              "3": {
                "name": "entity.name.function.ts variable.language.this.ts"
              },
              "4": {
                "name": "entity.name.function.ts"
              },
              "5": {
                "name": "keyword.operator.optional.ts"
              }
            },
            "match": "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))\\s*(\\??)(?=\\s*(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$[:alnum:]]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))))"
          },
          {
            "captures": {
              "1": {
                "name": "storage.modifier.ts"
              },
              "2": {
                "name": "keyword.operator.rest.ts"
              },
              "3": {
                "name": "variable.parameter.ts variable.language.this.ts"
              },
              "4": {
                "name": "variable.parameter.ts"
              },
              "5": {
                "name": "keyword.operator.optional.ts"
              }
            },
            "match": "(?:(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))\\s*(\\??)(?=:)"
          },
          {
            "include": "#type-annotation"
          },
          {
            "match": ",",
            "name": "punctuation.separator.parameter.ts"
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
                "name": "keyword.operator.type.asserts.ts"
              },
              "2": {
                "name": "variable.parameter.ts variable.language.this.ts"
              },
              "3": {
                "name": "variable.parameter.ts"
              },
              "4": {
                "name": "keyword.operator.expression.is.ts"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(asserts)\\s+)?(?!asserts)(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))\\s(is)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.operator.type.asserts.ts"
              },
              "2": {
                "name": "variable.parameter.ts variable.language.this.ts"
              },
              "3": {
                "name": "variable.parameter.ts"
              }
            },
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(asserts)\\s+(?!is)(?:(this)|([_$[:alpha:]][_$[:alnum:]]*))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))asserts(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.operator.type.asserts.ts"
          },
          {
            "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))is(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
            "name": "keyword.operator.expression.is.ts"
          }
        ]
      },
      "type-primitive": {
        "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(string|number|bigint|boolean|symbol|any|void|never|unknown)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        "name": "support.type.primitive.ts"
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
            "name": "meta.brace.square.ts"
          }
        },
        "end": "\\]",
        "endCaptures": {
          "0": {
            "name": "meta.brace.square.ts"
          }
        },
        "name": "meta.type.tuple.ts",
        "patterns": [
          {
            "match": "\\.\\.\\.",
            "name": "keyword.operator.rest.ts"
          },
          {
            "captures": {
              "1": {
                "name": "entity.name.label.ts"
              },
              "2": {
                "name": "keyword.operator.optional.ts"
              },
              "3": {
                "name": "punctuation.separator.label.ts"
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
            "name": "keyword.operator.expression.typeof.ts"
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
        "name": "constant.language.undefined.ts"
      },
      "var-expr": {
        "patterns": [
          {
            "begin": "(?=(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))",
            "end": "(?!(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))((?=^|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))|((?<!^let|[^\\._$[:alnum:]]let|^var|[^\\._$[:alnum:]]var)(?=\\s*$)))",
            "name": "meta.var.expr.ts",
            "patterns": [
              {
                "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.export.ts"
                  },
                  "2": {
                    "name": "storage.modifier.ts"
                  },
                  "3": {
                    "name": "storage.type.ts"
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
                    "name": "punctuation.separator.comma.ts"
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
                "name": "keyword.control.export.ts"
              },
              "2": {
                "name": "storage.modifier.ts"
              },
              "3": {
                "name": "storage.type.ts"
              }
            },
            "end": "(?!(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))((?=^|;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))|((?<!^const|[^\\._$[:alnum:]]const)(?=\\s*$)))",
            "name": "meta.var.expr.ts",
            "patterns": [
              {
                "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.export.ts"
                  },
                  "2": {
                    "name": "storage.modifier.ts"
                  },
                  "3": {
                    "name": "storage.type.ts"
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
                    "name": "punctuation.separator.comma.ts"
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
                "name": "keyword.control.export.ts"
              },
              "2": {
                "name": "storage.modifier.ts"
              },
              "3": {
                "name": "storage.type.ts"
              }
            },
            "end": "(?!(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b((?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))((?=;|}|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b))|((?<!^using|[^\\._$[:alnum:]]using|^await\\s+using|[^\\._$[:alnum:]]await\\s+using)(?=\\s*$)))",
            "name": "meta.var.expr.ts",
            "patterns": [
              {
                "begin": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b((?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b))(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.export.ts"
                  },
                  "2": {
                    "name": "storage.modifier.ts"
                  },
                  "3": {
                    "name": "storage.type.ts"
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
                    "name": "punctuation.separator.comma.ts"
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
            "begin": "([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$[:alnum:]]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))",
            "beginCaptures": {
              "1": {
                "name": "meta.definition.variable.ts variable.other.constant.ts entity.name.function.ts"
              }
            },
            "end": "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",
            "name": "meta.var-single-variable.expr.ts",
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
                "name": "meta.definition.variable.ts variable.other.constant.ts"
              }
            },
            "end": "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",
            "name": "meta.var-single-variable.expr.ts",
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
            "begin": "([_$[:alpha:]][_$[:alnum:]]*)(\\!)?(?=\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$[:alnum:]]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)))|((async\\s*)?(((<\\s*$)|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$[:alpha:]][_$[:alnum:]]*\\s*:)))|((<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$[:alpha:]])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$[:alpha:]]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$[:alpha:]]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))",
            "beginCaptures": {
              "1": {
                "name": "meta.definition.variable.ts entity.name.function.ts"
              },
              "2": {
                "name": "keyword.operator.definiteassignment.ts"
              }
            },
            "end": "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",
            "name": "meta.var-single-variable.expr.ts",
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
                "name": "meta.definition.variable.ts variable.other.constant.ts"
              },
              "2": {
                "name": "keyword.operator.definiteassignment.ts"
              }
            },
            "end": "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",
            "name": "meta.var-single-variable.expr.ts",
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
                "name": "meta.definition.variable.ts variable.other.readwrite.ts"
              },
              "2": {
                "name": "keyword.operator.definiteassignment.ts"
              }
            },
            "end": "(?=$|^|[;,=}]|((?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$[:alpha:]])\\b)|var|while)\\b)))",
            "name": "meta.var-single-variable.expr.ts",
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
                "name": "keyword.operator.assignment.ts"
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
                "name": "keyword.operator.assignment.ts"
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
    "scopeName": "source.ts",
    "aliases": [
      "ts"
    ]
  },
  {
    "displayName": "C",
    "name": "c",
    "patterns": [
      {
        "include": "#preprocessor-rule-enabled"
      },
      {
        "include": "#preprocessor-rule-disabled"
      },
      {
        "include": "#preprocessor-rule-conditional"
      },
      {
        "include": "#predefined_macros"
      },
      {
        "include": "#comments"
      },
      {
        "include": "#switch_statement"
      },
      {
        "include": "#anon_pattern_1"
      },
      {
        "include": "#storage_types"
      },
      {
        "include": "#anon_pattern_2"
      },
      {
        "include": "#anon_pattern_3"
      },
      {
        "include": "#anon_pattern_4"
      },
      {
        "include": "#anon_pattern_5"
      },
      {
        "include": "#anon_pattern_6"
      },
      {
        "include": "#anon_pattern_7"
      },
      {
        "include": "#operators"
      },
      {
        "include": "#numbers"
      },
      {
        "include": "#strings"
      },
      {
        "include": "#anon_pattern_range_1"
      },
      {
        "include": "#anon_pattern_range_2"
      },
      {
        "include": "#anon_pattern_range_3"
      },
      {
        "include": "#pragma-mark"
      },
      {
        "include": "#anon_pattern_range_4"
      },
      {
        "include": "#anon_pattern_range_5"
      },
      {
        "include": "#anon_pattern_range_6"
      },
      {
        "include": "#anon_pattern_8"
      },
      {
        "include": "#anon_pattern_9"
      },
      {
        "include": "#anon_pattern_10"
      },
      {
        "include": "#anon_pattern_11"
      },
      {
        "include": "#anon_pattern_12"
      },
      {
        "include": "#anon_pattern_13"
      },
      {
        "include": "#block"
      },
      {
        "include": "#parens"
      },
      {
        "include": "#anon_pattern_range_7"
      },
      {
        "include": "#line_continuation_character"
      },
      {
        "include": "#anon_pattern_range_8"
      },
      {
        "include": "#anon_pattern_range_9"
      },
      {
        "include": "#anon_pattern_14"
      },
      {
        "include": "#anon_pattern_15"
      }
    ],
    "repository": {
      "access-method": {
        "begin": "([a-zA-Z_][a-zA-Z_0-9]*|(?<=[\\]\\)]))\\s*(?:(\\.)|(->))((?:(?:[a-zA-Z_][a-zA-Z_0-9]*)\\s*(?:(?:\\.)|(?:->)))*)\\s*([a-zA-Z_][a-zA-Z_0-9]*)(\\()",
        "beginCaptures": {
          "1": {
            "name": "variable.object.c"
          },
          "2": {
            "name": "punctuation.separator.dot-access.c"
          },
          "3": {
            "name": "punctuation.separator.pointer-access.c"
          },
          "4": {
            "patterns": [
              {
                "match": "\\.",
                "name": "punctuation.separator.dot-access.c"
              },
              {
                "match": "->",
                "name": "punctuation.separator.pointer-access.c"
              },
              {
                "match": "[a-zA-Z_][a-zA-Z_0-9]*",
                "name": "variable.object.c"
              },
              {
                "match": ".+",
                "name": "everything.else.c"
              }
            ]
          },
          "5": {
            "name": "entity.name.function.member.c"
          },
          "6": {
            "name": "punctuation.section.arguments.begin.bracket.round.function.member.c"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.function.member.c"
          }
        },
        "name": "meta.function-call.member.c",
        "patterns": [
          {
            "include": "#function-call-innards"
          }
        ]
      },
      "anon_pattern_1": {
        "match": "\\b(break|continue|do|else|for|goto|if|_Pragma|return|while)\\b",
        "name": "keyword.control.c"
      },
      "anon_pattern_10": {
        "match": "\\b(int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|int_least8_t|int_least16_t|int_least32_t|int_least64_t|uint_least8_t|uint_least16_t|uint_least32_t|uint_least64_t|int_fast8_t|int_fast16_t|int_fast32_t|int_fast64_t|uint_fast8_t|uint_fast16_t|uint_fast32_t|uint_fast64_t|intptr_t|uintptr_t|intmax_t|intmax_t|uintmax_t|uintmax_t)\\b",
        "name": "support.type.stdint.c"
      },
      "anon_pattern_11": {
        "match": "\\b(noErr|kNilOptions|kInvalidID|kVariableLengthArray)\\b",
        "name": "support.constant.mac-classic.c"
      },
      "anon_pattern_12": {
        "match": "\\b(AbsoluteTime|Boolean|Byte|ByteCount|ByteOffset|BytePtr|CompTimeValue|ConstLogicalAddress|ConstStrFileNameParam|ConstStringPtr|Duration|Fixed|FixedPtr|Float32|Float32Point|Float64|Float80|Float96|FourCharCode|Fract|FractPtr|Handle|ItemCount|LogicalAddress|OptionBits|OSErr|OSStatus|OSType|OSTypePtr|PhysicalAddress|ProcessSerialNumber|ProcessSerialNumberPtr|ProcHandle|Ptr|ResType|ResTypePtr|ShortFixed|ShortFixedPtr|SignedByte|SInt16|SInt32|SInt64|SInt8|Size|StrFileName|StringHandle|StringPtr|TimeBase|TimeRecord|TimeScale|TimeValue|TimeValue64|UInt16|UInt32|UInt64|UInt8|UniChar|UniCharCount|UniCharCountPtr|UniCharPtr|UnicodeScalarValue|UniversalProcHandle|UniversalProcPtr|UnsignedFixed|UnsignedFixedPtr|UnsignedWide|UTF16Char|UTF32Char|UTF8Char)\\b",
        "name": "support.type.mac-classic.c"
      },
      "anon_pattern_13": {
        "match": "\\b([A-Za-z0-9_]+_t)\\b",
        "name": "support.type.posix-reserved.c"
      },
      "anon_pattern_14": {
        "match": ";",
        "name": "punctuation.terminator.statement.c"
      },
      "anon_pattern_15": {
        "match": ",",
        "name": "punctuation.separator.delimiter.c"
      },
      "anon_pattern_2": {
        "match": "typedef",
        "name": "keyword.other.typedef.c"
      },
      "anon_pattern_3": {
        "match": "\\b(const|extern|register|restrict|static|volatile|inline)\\b",
        "name": "storage.modifier.c"
      },
      "anon_pattern_4": {
        "match": "\\bk[A-Z]\\w*\\b",
        "name": "constant.other.variable.mac-classic.c"
      },
      "anon_pattern_5": {
        "match": "\\bg[A-Z]\\w*\\b",
        "name": "variable.other.readwrite.global.mac-classic.c"
      },
      "anon_pattern_6": {
        "match": "\\bs[A-Z]\\w*\\b",
        "name": "variable.other.readwrite.static.mac-classic.c"
      },
      "anon_pattern_7": {
        "match": "\\b(NULL|true|false|TRUE|FALSE)\\b",
        "name": "constant.language.c"
      },
      "anon_pattern_8": {
        "match": "\\b(u_char|u_short|u_int|u_long|ushort|uint|u_quad_t|quad_t|qaddr_t|caddr_t|daddr_t|div_t|dev_t|fixpt_t|blkcnt_t|blksize_t|gid_t|in_addr_t|in_port_t|ino_t|key_t|mode_t|nlink_t|id_t|pid_t|off_t|segsz_t|swblk_t|uid_t|id_t|clock_t|size_t|ssize_t|time_t|useconds_t|suseconds_t)\\b",
        "name": "support.type.sys-types.c"
      },
      "anon_pattern_9": {
        "match": "\\b(pthread_attr_t|pthread_cond_t|pthread_condattr_t|pthread_mutex_t|pthread_mutexattr_t|pthread_once_t|pthread_rwlock_t|pthread_rwlockattr_t|pthread_t|pthread_key_t)\\b",
        "name": "support.type.pthread.c"
      },
      "anon_pattern_range_1": {
        "begin": "((?:(?:(?>\\s+)|(\\/\\*)((?>(?:[^\\*]|(?>\\*+)[^\\/])*)((?>\\*+)\\/)))+?|(?:(?:(?:(?:\\b|(?<=\\W))|(?=\\W))|\\A)|\\Z)))((#)\\s*define\\b)\\s+((?<!\\w)[a-zA-Z_]\\w*(?!\\w))(?:(\\()([^()\\\\]+)(\\)))?",
        "beginCaptures": {
          "1": {
            "patterns": [
              {
                "include": "#inline_comment"
              }
            ]
          },
          "2": {
            "name": "comment.block.c punctuation.definition.comment.begin.c"
          },
          "3": {
            "name": "comment.block.c"
          },
          "4": {
            "patterns": [
              {
                "match": "\\*\\/",
                "name": "comment.block.c punctuation.definition.comment.end.c"
              },
              {
                "match": "\\*",
                "name": "comment.block.c"
              }
            ]
          },
          "5": {
            "name": "keyword.control.directive.define.c"
          },
          "6": {
            "name": "punctuation.definition.directive.c"
          },
          "7": {
            "name": "entity.name.function.preprocessor.c"
          },
          "8": {
            "name": "punctuation.definition.parameters.begin.c"
          },
          "9": {
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "variable.parameter.preprocessor.c"
                  }
                },
                "match": "(?<=[(,])\\s*((?<!\\w)[a-zA-Z_]\\w*(?!\\w))\\s*"
              },
              {
                "match": ",",
                "name": "punctuation.separator.parameters.c"
              },
              {
                "match": "\\.\\.\\.",
                "name": "ellipses.c punctuation.vararg-ellipses.variable.parameter.preprocessor.c"
              }
            ]
          },
          "10": {
            "name": "punctuation.definition.parameters.end.c"
          }
        },
        "end": "(?<!\\\\)(?=\\n)",
        "name": "meta.preprocessor.macro.c",
        "patterns": [
          {
            "include": "#preprocessor-rule-define-line-contents"
          }
        ]
      },
      "anon_pattern_range_2": {
        "begin": "^\\s*((#)\\s*(error|warning))\\b\\s*",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.directive.diagnostic.$3.c"
          },
          "2": {
            "name": "punctuation.definition.directive.c"
          }
        },
        "end": "(?<!\\\\)(?=\\n)",
        "name": "meta.preprocessor.diagnostic.c",
        "patterns": [
          {
            "begin": "\"",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.c"
              }
            },
            "end": "\"|(?<!\\\\)(?=\\s*\\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.c"
              }
            },
            "name": "string.quoted.double.c",
            "patterns": [
              {
                "include": "#line_continuation_character"
              }
            ]
          },
          {
            "begin": "'",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.c"
              }
            },
            "end": "'|(?<!\\\\)(?=\\s*\\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.c"
              }
            },
            "name": "string.quoted.single.c",
            "patterns": [
              {
                "include": "#line_continuation_character"
              }
            ]
          },
          {
            "begin": "[^'\"]",
            "end": "(?<!\\\\)(?=\\s*\\n)",
            "name": "string.unquoted.single.c",
            "patterns": [
              {
                "include": "#line_continuation_character"
              },
              {
                "include": "#comments"
              }
            ]
          }
        ]
      },
      "anon_pattern_range_3": {
        "begin": "^\\s*((#)\\s*(include(?:_next)?|import))\\b\\s*",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.directive.$3.c"
          },
          "2": {
            "name": "punctuation.definition.directive.c"
          }
        },
        "end": "(?=(?://|/\\*))|(?<!\\\\)(?=\\n)",
        "name": "meta.preprocessor.include.c",
        "patterns": [
          {
            "include": "#line_continuation_character"
          },
          {
            "begin": "\"",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.c"
              }
            },
            "end": "\"",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.c"
              }
            },
            "name": "string.quoted.double.include.c"
          },
          {
            "begin": "<",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.c"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.c"
              }
            },
            "name": "string.quoted.other.lt-gt.include.c"
          }
        ]
      },
      "anon_pattern_range_4": {
        "begin": "^\\s*((#)\\s*line)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.directive.line.c"
          },
          "2": {
            "name": "punctuation.definition.directive.c"
          }
        },
        "end": "(?=(?://|/\\*))|(?<!\\\\)(?=\\n)",
        "name": "meta.preprocessor.c",
        "patterns": [
          {
            "include": "#strings"
          },
          {
            "include": "#numbers"
          },
          {
            "include": "#line_continuation_character"
          }
        ]
      },
      "anon_pattern_range_5": {
        "begin": "^\\s*(?:((#)\\s*undef))\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.directive.undef.c"
          },
          "2": {
            "name": "punctuation.definition.directive.c"
          }
        },
        "end": "(?=(?://|/\\*))|(?<!\\\\)(?=\\n)",
        "name": "meta.preprocessor.c",
        "patterns": [
          {
            "match": "[a-zA-Z_$][\\w$]*",
            "name": "entity.name.function.preprocessor.c"
          },
          {
            "include": "#line_continuation_character"
          }
        ]
      },
      "anon_pattern_range_6": {
        "begin": "^\\s*(?:((#)\\s*pragma))\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.directive.pragma.c"
          },
          "2": {
            "name": "punctuation.definition.directive.c"
          }
        },
        "end": "(?=(?://|/\\*))|(?<!\\\\)(?=\\n)",
        "name": "meta.preprocessor.pragma.c",
        "patterns": [
          {
            "include": "#strings"
          },
          {
            "match": "[a-zA-Z_$][\\w\\-$]*",
            "name": "entity.other.attribute-name.pragma.preprocessor.c"
          },
          {
            "include": "#numbers"
          },
          {
            "include": "#line_continuation_character"
          }
        ]
      },
      "anon_pattern_range_7": {
        "begin": "(?<!\\w)(?!\\s*(?:atomic_uint_least64_t|atomic_uint_least16_t|atomic_uint_least32_t|atomic_uint_least8_t|atomic_int_least16_t|atomic_uint_fast64_t|atomic_uint_fast32_t|atomic_int_least64_t|atomic_int_least32_t|pthread_rwlockattr_t|atomic_uint_fast16_t|pthread_mutexattr_t|atomic_int_fast16_t|atomic_uint_fast8_t|atomic_int_fast64_t|atomic_int_least8_t|atomic_int_fast32_t|atomic_int_fast8_t|pthread_condattr_t|pthread_rwlock_t|atomic_uintptr_t|atomic_ptrdiff_t|atomic_uintmax_t|atomic_intmax_t|atomic_char32_t|atomic_intptr_t|atomic_char16_t|pthread_mutex_t|pthread_cond_t|atomic_wchar_t|uint_least64_t|uint_least32_t|uint_least16_t|pthread_once_t|pthread_attr_t|uint_least8_t|int_least32_t|int_least16_t|pthread_key_t|uint_fast32_t|uint_fast64_t|uint_fast16_t|atomic_size_t|atomic_ushort|atomic_ullong|int_least64_t|atomic_ulong|int_least8_t|int_fast16_t|int_fast32_t|int_fast64_t|uint_fast8_t|memory_order|atomic_schar|atomic_uchar|atomic_short|atomic_llong|thread_local|atomic_bool|atomic_uint|atomic_long|int_fast8_t|suseconds_t|atomic_char|atomic_int|useconds_t|_Imaginary|uintmax_t|uintmax_t|in_addr_t|in_port_t|_Noreturn|blksize_t|pthread_t|uintptr_t|volatile|u_quad_t|blkcnt_t|intmax_t|intptr_t|_Complex|uint16_t|uint32_t|uint64_t|_Alignof|_Alignas|continue|unsigned|restrict|intmax_t|register|int64_t|qaddr_t|segsz_t|_Atomic|alignas|default|caddr_t|nlink_t|typedef|u_short|fixpt_t|clock_t|swblk_t|ssize_t|alignof|daddr_t|int16_t|int32_t|uint8_t|struct|mode_t|size_t|time_t|ushort|u_long|u_char|int8_t|double|signed|static|extern|inline|return|switch|xor_eq|and_eq|bitand|not_eq|sizeof|quad_t|uid_t|bitor|union|off_t|key_t|ino_t|compl|u_int|short|const|false|while|float|pid_t|break|_Bool|or_eq|div_t|dev_t|gid_t|id_t|long|case|goto|else|bool|auto|id_t|enum|uint|true|NULL|void|char|for|not|int|and|xor|do|or|if)\\s*\\()(?=[a-zA-Z_]\\w*\\s*\\()",
        "end": "(?!\\G)(?<=\\))",
        "name": "meta.function.c",
        "patterns": [
          {
            "include": "#function-innards"
          }
        ]
      },
      "anon_pattern_range_8": {
        "begin": "([a-zA-Z_][a-zA-Z_0-9]*|(?<=[\\]\\)]))?(\\[)(?!\\])",
        "beginCaptures": {
          "1": {
            "name": "variable.object.c"
          },
          "2": {
            "name": "punctuation.definition.begin.bracket.square.c"
          }
        },
        "end": "\\]",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.end.bracket.square.c"
          }
        },
        "name": "meta.bracket.square.access.c",
        "patterns": [
          {
            "include": "#function-call-innards"
          }
        ]
      },
      "anon_pattern_range_9": {
        "match": "\\[\\s*\\]",
        "name": "storage.modifier.array.bracket.square.c"
      },
      "backslash_escapes": {
        "match": "\\\\(\\\\|[abefnprtv'\"?]|[0-3][0-7]{,2}|[4-7]\\d?|x[a-fA-F0-9]{,2}|u[a-fA-F0-9]{,4}|U[a-fA-F0-9]{,8})",
        "name": "constant.character.escape.c"
      },
      "block": {
        "patterns": [
          {
            "begin": "{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.block.begin.bracket.curly.c"
              }
            },
            "end": "}|(?=\\s*#\\s*(?:elif|else|endif)\\b)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.end.bracket.curly.c"
              }
            },
            "name": "meta.block.c",
            "patterns": [
              {
                "include": "#block_innards"
              }
            ]
          }
        ]
      },
      "block_comment": {
        "patterns": [
          {
            "begin": "\\s*+(\\/\\*)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.comment.begin.c"
              }
            },
            "end": "\\*\\/",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.comment.end.c"
              }
            },
            "name": "comment.block.c"
          },
          {
            "begin": "\\s*+(\\/\\*)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.comment.begin.c"
              }
            },
            "end": "\\*\\/",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.comment.end.c"
              }
            },
            "name": "comment.block.c"
          }
        ]
      },
      "block_innards": {
        "patterns": [
          {
            "include": "#preprocessor-rule-enabled-block"
          },
          {
            "include": "#preprocessor-rule-disabled-block"
          },
          {
            "include": "#preprocessor-rule-conditional-block"
          },
          {
            "include": "#method_access"
          },
          {
            "include": "#member_access"
          },
          {
            "include": "#c_function_call"
          },
          {
            "begin": "(?:(?:(?=\\s)(?<!else|new|return)(?<=\\w)\\s+(and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|alignof|alignas)))((?:[A-Za-z_][A-Za-z0-9_]*+|::)++|(?:(?<=operator)(?:[-*&<>=+!]+|\\(\\)|\\[\\])))\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "variable.other.c"
              },
              "2": {
                "name": "punctuation.section.parens.begin.bracket.round.initialization.c"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.parens.end.bracket.round.initialization.c"
              }
            },
            "name": "meta.initialization.c",
            "patterns": [
              {
                "include": "#function-call-innards"
              }
            ]
          },
          {
            "begin": "{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.block.begin.bracket.curly.c"
              }
            },
            "end": "}|(?=\\s*#\\s*(?:elif|else|endif)\\b)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.end.bracket.curly.c"
              }
            },
            "patterns": [
              {
                "include": "#block_innards"
              }
            ]
          },
          {
            "include": "#parens-block"
          },
          {
            "include": "$self"
          }
        ]
      },
      "c_conditional_context": {
        "patterns": [
          {
            "include": "$self"
          },
          {
            "include": "#block_innards"
          }
        ]
      },
      "c_function_call": {
        "begin": "(?!(?:while|for|do|if|else|switch|catch|enumerate|return|typeid|alignof|alignas|sizeof|[cr]?iterate|and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|alignof|alignas)\\s*\\()(?=(?:[A-Za-z_][A-Za-z0-9_]*+|::)++\\s*\\(|(?:(?<=operator)(?:[-*&<>=+!]+|\\(\\)|\\[\\]))\\s*\\()",
        "end": "(?<=\\))(?!\\w)",
        "name": "meta.function-call.c",
        "patterns": [
          {
            "include": "#function-call-innards"
          }
        ]
      },
      "case_statement": {
        "begin": "((?>(?:(?:(?>(?<!\\s)\\s+)|(\\/\\*)((?>(?:[^\\*]|(?>\\*+)[^\\/])*)((?>\\*+)\\/)))+|(?:(?:(?:(?:\\b|(?<=\\W))|(?=\\W))|\\A)|\\Z))))((?<!\\w)case(?!\\w))",
        "beginCaptures": {
          "1": {
            "patterns": [
              {
                "include": "#inline_comment"
              }
            ]
          },
          "2": {
            "name": "comment.block.c punctuation.definition.comment.begin.c"
          },
          "3": {
            "name": "comment.block.c"
          },
          "4": {
            "patterns": [
              {
                "match": "\\*\\/",
                "name": "comment.block.c punctuation.definition.comment.end.c"
              },
              {
                "match": "\\*",
                "name": "comment.block.c"
              }
            ]
          },
          "5": {
            "name": "keyword.control.case.c"
          }
        },
        "end": "(:)",
        "endCaptures": {
          "1": {
            "name": "punctuation.separator.colon.case.c"
          }
        },
        "name": "meta.conditional.case.c",
        "patterns": [
          {
            "include": "#evaluation_context"
          },
          {
            "include": "#c_conditional_context"
          }
        ]
      },
      "comments": {
        "patterns": [
          {
            "patterns": [
              {
                "patterns": [
                  {
                    "begin": "(?:^)(?>\\s*)(\\/\\/[!\\/]+)",
                    "beginCaptures": {
                      "1": {
                        "name": "punctuation.definition.comment.documentation.c"
                      }
                    },
                    "end": "(?<=\\n)(?<!\\\\\\n)",
                    "name": "comment.line.double-slash.documentation.c",
                    "patterns": [
                      {
                        "include": "#line_continuation_character"
                      },
                      {
                        "match": "(?<=[\\s*!\\/])[\\\\@](?:callergraph|callgraph|else|endif|f\\$|f\\[|f\\]|hidecallergraph|hidecallgraph|hiderefby|hiderefs|hideinitializer|htmlinclude|n|nosubgrouping|private|privatesection|protected|protectedsection|public|publicsection|pure|showinitializer|showrefby|showrefs|tableofcontents|\\$|\\#|<|>|%|\"|\\.|=|::|\\||\\-\\-|\\-\\-\\-)\\b(?:\\{[^}]*\\})?",
                        "name": "storage.type.class.doxygen.c"
                      },
                      {
                        "captures": {
                          "1": {
                            "name": "storage.type.class.doxygen.c"
                          },
                          "2": {
                            "name": "markup.italic.doxygen.c"
                          }
                        },
                        "match": "((?<=[\\s*!\\/])[\\\\@](?:a|em|e))\\s+(\\S+)"
                      },
                      {
                        "captures": {
                          "1": {
                            "name": "storage.type.class.doxygen.c"
                          },
                          "2": {
                            "name": "markup.bold.doxygen.c"
                          }
                        },
                        "match": "((?<=[\\s*!\\/])[\\\\@]b)\\s+(\\S+)"
                      },
                      {
                        "captures": {
                          "1": {
                            "name": "storage.type.class.doxygen.c"
                          },
                          "2": {
                            "name": "markup.inline.raw.string.c"
                          }
                        },
                        "match": "((?<=[\\s*!\\/])[\\\\@](?:c|p))\\s+(\\S+)"
                      },
                      {
                        "match": "(?<=[\\s*!\\/])[\\\\@](?:a|anchor|b|c|cite|copybrief|copydetail|copydoc|def|dir|dontinclude|e|em|emoji|enum|example|extends|file|idlexcept|implements|include|includedoc|includelineno|latexinclude|link|memberof|namespace|p|package|ref|refitem|related|relates|relatedalso|relatesalso|verbinclude)\\b(?:\\{[^}]*\\})?",
                        "name": "storage.type.class.doxygen.c"
                      },
                      {
                        "match": "(?<=[\\s*!\\/])[\\\\@](?:addindex|addtogroup|category|class|defgroup|diafile|dotfile|elseif|fn|headerfile|if|ifnot|image|ingroup|interface|line|mainpage|mscfile|name|overload|page|property|protocol|section|skip|skipline|snippet|snippetdoc|snippetlineno|struct|subpage|subsection|subsubsection|typedef|union|until|vhdlflow|weakgroup)\\b(?:\\{[^}]*\\})?",
                        "name": "storage.type.class.doxygen.c"
                      },
                      {
                        "captures": {
                          "1": {
                            "name": "storage.type.class.doxygen.c"
                          },
                          "2": {
                            "patterns": [
                              {
                                "match": "in|out",
                                "name": "keyword.other.parameter.direction.$0.c"
                              }
                            ]
                          },
                          "3": {
                            "name": "variable.parameter.c"
                          }
                        },
                        "match": "((?<=[\\s*!\\/])[\\\\@]param)(?:\\s*\\[((?:,?\\s*(?:in|out)\\s*)+)\\])?\\s+(\\b\\w+\\b)"
                      },
                      {
                        "match": "(?<=[\\s*!\\/])[\\\\@](?:arg|attention|author|authors|brief|bug|copyright|date|deprecated|details|exception|invariant|li|note|par|paragraph|param|post|pre|remark|remarks|result|return|returns|retval|sa|see|short|since|test|throw|todo|tparam|version|warning|xrefitem)\\b(?:\\{[^}]*\\})?",
                        "name": "storage.type.class.doxygen.c"
                      },
                      {
                        "match": "(?<=[\\s*!\\/])[\\\\@](?:code|cond|docbookonly|dot|htmlonly|internal|latexonly|link|manonly|msc|parblock|rtfonly|secreflist|uml|verbatim|xmlonly|endcode|endcond|enddocbookonly|enddot|endhtmlonly|endinternal|endlatexonly|endlink|endmanonly|endmsc|endparblock|endrtfonly|endsecreflist|enduml|endverbatim|endxmlonly)\\b(?:\\{[^}]*\\})?",
                        "name": "storage.type.class.doxygen.c"
                      },
                      {
                        "match": "(?:\\b[A-Z]+:|@[a-z_]+:)",
                        "name": "storage.type.class.gtkdoc"
                      }
                    ]
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "punctuation.definition.comment.begin.documentation.c"
                      },
                      "2": {
                        "patterns": [
                          {
                            "match": "(?<=[\\s*!\\/])[\\\\@](?:callergraph|callgraph|else|endif|f\\$|f\\[|f\\]|hidecallergraph|hidecallgraph|hiderefby|hiderefs|hideinitializer|htmlinclude|n|nosubgrouping|private|privatesection|protected|protectedsection|public|publicsection|pure|showinitializer|showrefby|showrefs|tableofcontents|\\$|\\#|<|>|%|\"|\\.|=|::|\\||\\-\\-|\\-\\-\\-)\\b(?:\\{[^}]*\\})?",
                            "name": "storage.type.class.doxygen.c"
                          },
                          {
                            "captures": {
                              "1": {
                                "name": "storage.type.class.doxygen.c"
                              },
                              "2": {
                                "name": "markup.italic.doxygen.c"
                              }
                            },
                            "match": "((?<=[\\s*!\\/])[\\\\@](?:a|em|e))\\s+(\\S+)"
                          },
                          {
                            "captures": {
                              "1": {
                                "name": "storage.type.class.doxygen.c"
                              },
                              "2": {
                                "name": "markup.bold.doxygen.c"
                              }
                            },
                            "match": "((?<=[\\s*!\\/])[\\\\@]b)\\s+(\\S+)"
                          },
                          {
                            "captures": {
                              "1": {
                                "name": "storage.type.class.doxygen.c"
                              },
                              "2": {
                                "name": "markup.inline.raw.string.c"
                              }
                            },
                            "match": "((?<=[\\s*!\\/])[\\\\@](?:c|p))\\s+(\\S+)"
                          },
                          {
                            "match": "(?<=[\\s*!\\/])[\\\\@](?:a|anchor|b|c|cite|copybrief|copydetail|copydoc|def|dir|dontinclude|e|em|emoji|enum|example|extends|file|idlexcept|implements|include|includedoc|includelineno|latexinclude|link|memberof|namespace|p|package|ref|refitem|related|relates|relatedalso|relatesalso|verbinclude)\\b(?:\\{[^}]*\\})?",
                            "name": "storage.type.class.doxygen.c"
                          },
                          {
                            "match": "(?<=[\\s*!\\/])[\\\\@](?:addindex|addtogroup|category|class|defgroup|diafile|dotfile|elseif|fn|headerfile|if|ifnot|image|ingroup|interface|line|mainpage|mscfile|name|overload|page|property|protocol|section|skip|skipline|snippet|snippetdoc|snippetlineno|struct|subpage|subsection|subsubsection|typedef|union|until|vhdlflow|weakgroup)\\b(?:\\{[^}]*\\})?",
                            "name": "storage.type.class.doxygen.c"
                          },
                          {
                            "captures": {
                              "1": {
                                "name": "storage.type.class.doxygen.c"
                              },
                              "2": {
                                "patterns": [
                                  {
                                    "match": "in|out",
                                    "name": "keyword.other.parameter.direction.$0.c"
                                  }
                                ]
                              },
                              "3": {
                                "name": "variable.parameter.c"
                              }
                            },
                            "match": "((?<=[\\s*!\\/])[\\\\@]param)(?:\\s*\\[((?:,?\\s*(?:in|out)\\s*)+)\\])?\\s+(\\b\\w+\\b)"
                          },
                          {
                            "match": "(?<=[\\s*!\\/])[\\\\@](?:arg|attention|author|authors|brief|bug|copyright|date|deprecated|details|exception|invariant|li|note|par|paragraph|param|post|pre|remark|remarks|result|return|returns|retval|sa|see|short|since|test|throw|todo|tparam|version|warning|xrefitem)\\b(?:\\{[^}]*\\})?",
                            "name": "storage.type.class.doxygen.c"
                          },
                          {
                            "match": "(?<=[\\s*!\\/])[\\\\@](?:code|cond|docbookonly|dot|htmlonly|internal|latexonly|link|manonly|msc|parblock|rtfonly|secreflist|uml|verbatim|xmlonly|endcode|endcond|enddocbookonly|enddot|endhtmlonly|endinternal|endlatexonly|endlink|endmanonly|endmsc|endparblock|endrtfonly|endsecreflist|enduml|endverbatim|endxmlonly)\\b(?:\\{[^}]*\\})?",
                            "name": "storage.type.class.doxygen.c"
                          },
                          {
                            "match": "(?:\\b[A-Z]+:|@[a-z_]+:)",
                            "name": "storage.type.class.gtkdoc"
                          }
                        ]
                      },
                      "3": {
                        "name": "punctuation.definition.comment.end.documentation.c"
                      }
                    },
                    "match": "(\\/\\*[!*]+(?=\\s))(.+)([!*]*\\*\\/)",
                    "name": "comment.block.documentation.c"
                  },
                  {
                    "begin": "((?>\\s*)\\/\\*[!*]+(?:(?:\\n|$)|(?=\\s)))",
                    "beginCaptures": {
                      "1": {
                        "name": "punctuation.definition.comment.begin.documentation.c"
                      }
                    },
                    "end": "([!*]*\\*\\/)",
                    "endCaptures": {
                      "1": {
                        "name": "punctuation.definition.comment.end.documentation.c"
                      }
                    },
                    "name": "comment.block.documentation.c",
                    "patterns": [
                      {
                        "match": "(?<=[\\s*!\\/])[\\\\@](?:callergraph|callgraph|else|endif|f\\$|f\\[|f\\]|hidecallergraph|hidecallgraph|hiderefby|hiderefs|hideinitializer|htmlinclude|n|nosubgrouping|private|privatesection|protected|protectedsection|public|publicsection|pure|showinitializer|showrefby|showrefs|tableofcontents|\\$|\\#|<|>|%|\"|\\.|=|::|\\||\\-\\-|\\-\\-\\-)\\b(?:\\{[^}]*\\})?",
                        "name": "storage.type.class.doxygen.c"
                      },
                      {
                        "captures": {
                          "1": {
                            "name": "storage.type.class.doxygen.c"
                          },
                          "2": {
                            "name": "markup.italic.doxygen.c"
                          }
                        },
                        "match": "((?<=[\\s*!\\/])[\\\\@](?:a|em|e))\\s+(\\S+)"
                      },
                      {
                        "captures": {
                          "1": {
                            "name": "storage.type.class.doxygen.c"
                          },
                          "2": {
                            "name": "markup.bold.doxygen.c"
                          }
                        },
                        "match": "((?<=[\\s*!\\/])[\\\\@]b)\\s+(\\S+)"
                      },
                      {
                        "captures": {
                          "1": {
                            "name": "storage.type.class.doxygen.c"
                          },
                          "2": {
                            "name": "markup.inline.raw.string.c"
                          }
                        },
                        "match": "((?<=[\\s*!\\/])[\\\\@](?:c|p))\\s+(\\S+)"
                      },
                      {
                        "match": "(?<=[\\s*!\\/])[\\\\@](?:a|anchor|b|c|cite|copybrief|copydetail|copydoc|def|dir|dontinclude|e|em|emoji|enum|example|extends|file|idlexcept|implements|include|includedoc|includelineno|latexinclude|link|memberof|namespace|p|package|ref|refitem|related|relates|relatedalso|relatesalso|verbinclude)\\b(?:\\{[^}]*\\})?",
                        "name": "storage.type.class.doxygen.c"
                      },
                      {
                        "match": "(?<=[\\s*!\\/])[\\\\@](?:addindex|addtogroup|category|class|defgroup|diafile|dotfile|elseif|fn|headerfile|if|ifnot|image|ingroup|interface|line|mainpage|mscfile|name|overload|page|property|protocol|section|skip|skipline|snippet|snippetdoc|snippetlineno|struct|subpage|subsection|subsubsection|typedef|union|until|vhdlflow|weakgroup)\\b(?:\\{[^}]*\\})?",
                        "name": "storage.type.class.doxygen.c"
                      },
                      {
                        "captures": {
                          "1": {
                            "name": "storage.type.class.doxygen.c"
                          },
                          "2": {
                            "patterns": [
                              {
                                "match": "in|out",
                                "name": "keyword.other.parameter.direction.$0.c"
                              }
                            ]
                          },
                          "3": {
                            "name": "variable.parameter.c"
                          }
                        },
                        "match": "((?<=[\\s*!\\/])[\\\\@]param)(?:\\s*\\[((?:,?\\s*(?:in|out)\\s*)+)\\])?\\s+(\\b\\w+\\b)"
                      },
                      {
                        "match": "(?<=[\\s*!\\/])[\\\\@](?:arg|attention|author|authors|brief|bug|copyright|date|deprecated|details|exception|invariant|li|note|par|paragraph|param|post|pre|remark|remarks|result|return|returns|retval|sa|see|short|since|test|throw|todo|tparam|version|warning|xrefitem)\\b(?:\\{[^}]*\\})?",
                        "name": "storage.type.class.doxygen.c"
                      },
                      {
                        "match": "(?<=[\\s*!\\/])[\\\\@](?:code|cond|docbookonly|dot|htmlonly|internal|latexonly|link|manonly|msc|parblock|rtfonly|secreflist|uml|verbatim|xmlonly|endcode|endcond|enddocbookonly|enddot|endhtmlonly|endinternal|endlatexonly|endlink|endmanonly|endmsc|endparblock|endrtfonly|endsecreflist|enduml|endverbatim|endxmlonly)\\b(?:\\{[^}]*\\})?",
                        "name": "storage.type.class.doxygen.c"
                      },
                      {
                        "match": "(?:\\b[A-Z]+:|@[a-z_]+:)",
                        "name": "storage.type.class.gtkdoc"
                      }
                    ]
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "meta.toc-list.banner.block.c"
                      }
                    },
                    "match": "^\\/\\* =(\\s*.*?)\\s*= \\*\\/$\\n?",
                    "name": "comment.block.banner.c"
                  },
                  {
                    "begin": "(\\/\\*)",
                    "beginCaptures": {
                      "1": {
                        "name": "punctuation.definition.comment.begin.c"
                      }
                    },
                    "end": "(\\*\\/)",
                    "endCaptures": {
                      "1": {
                        "name": "punctuation.definition.comment.end.c"
                      }
                    },
                    "name": "comment.block.c"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "meta.toc-list.banner.line.c"
                      }
                    },
                    "match": "^\\/\\/ =(\\s*.*?)\\s*=$\\n?",
                    "name": "comment.line.banner.c"
                  },
                  {
                    "begin": "((?:^[ \\t]+)?)(?=\\/\\/)",
                    "beginCaptures": {
                      "1": {
                        "name": "punctuation.whitespace.comment.leading.c"
                      }
                    },
                    "end": "(?!\\G)",
                    "patterns": [
                      {
                        "begin": "(\\/\\/)",
                        "beginCaptures": {
                          "1": {
                            "name": "punctuation.definition.comment.c"
                          }
                        },
                        "end": "(?=\\n)",
                        "name": "comment.line.double-slash.c",
                        "patterns": [
                          {
                            "include": "#line_continuation_character"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "include": "#block_comment"
              },
              {
                "include": "#line_comment"
              }
            ]
          },
          {
            "include": "#block_comment"
          },
          {
            "include": "#line_comment"
          }
        ]
      },
      "default_statement": {
        "begin": "((?>(?:(?:(?>(?<!\\s)\\s+)|(\\/\\*)((?>(?:[^\\*]|(?>\\*+)[^\\/])*)((?>\\*+)\\/)))+|(?:(?:(?:(?:\\b|(?<=\\W))|(?=\\W))|\\A)|\\Z))))((?<!\\w)default(?!\\w))",
        "beginCaptures": {
          "1": {
            "patterns": [
              {
                "include": "#inline_comment"
              }
            ]
          },
          "2": {
            "name": "comment.block.c punctuation.definition.comment.begin.c"
          },
          "3": {
            "name": "comment.block.c"
          },
          "4": {
            "patterns": [
              {
                "match": "\\*\\/",
                "name": "comment.block.c punctuation.definition.comment.end.c"
              },
              {
                "match": "\\*",
                "name": "comment.block.c"
              }
            ]
          },
          "5": {
            "name": "keyword.control.default.c"
          }
        },
        "end": "(:)",
        "endCaptures": {
          "1": {
            "name": "punctuation.separator.colon.case.default.c"
          }
        },
        "name": "meta.conditional.case.c",
        "patterns": [
          {
            "include": "#evaluation_context"
          },
          {
            "include": "#c_conditional_context"
          }
        ]
      },
      "disabled": {
        "begin": "^\\s*#\\s*if(n?def)?\\b.*$",
        "end": "^\\s*#\\s*endif\\b",
        "patterns": [
          {
            "include": "#disabled"
          },
          {
            "include": "#pragma-mark"
          }
        ]
      },
      "evaluation_context": {
        "patterns": [
          {
            "include": "#function-call-innards"
          },
          {
            "include": "$self"
          }
        ]
      },
      "function-call-innards": {
        "patterns": [
          {
            "include": "#comments"
          },
          {
            "include": "#storage_types"
          },
          {
            "include": "#method_access"
          },
          {
            "include": "#member_access"
          },
          {
            "include": "#operators"
          },
          {
            "begin": "(?!(?:while|for|do|if|else|switch|catch|enumerate|return|typeid|alignof|alignas|sizeof|[cr]?iterate|and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|alignof|alignas)\\s*\\()((?:[A-Za-z_][A-Za-z0-9_]*+|::)++|(?:(?<=operator)(?:[-*&<>=+!]+|\\(\\)|\\[\\])))\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.c"
              },
              "2": {
                "name": "punctuation.section.arguments.begin.bracket.round.c"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.arguments.end.bracket.round.c"
              }
            },
            "patterns": [
              {
                "include": "#function-call-innards"
              }
            ]
          },
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.parens.begin.bracket.round.c"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.parens.end.bracket.round.c"
              }
            },
            "patterns": [
              {
                "include": "#function-call-innards"
              }
            ]
          },
          {
            "include": "#block_innards"
          }
        ]
      },
      "function-innards": {
        "patterns": [
          {
            "include": "#comments"
          },
          {
            "include": "#storage_types"
          },
          {
            "include": "#operators"
          },
          {
            "include": "#vararg_ellipses"
          },
          {
            "begin": "(?!(?:while|for|do|if|else|switch|catch|enumerate|return|typeid|alignof|alignas|sizeof|[cr]?iterate|and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|alignof|alignas)\\s*\\()((?:[A-Za-z_][A-Za-z0-9_]*+|::)++|(?:(?<=operator)(?:[-*&<>=+!]+|\\(\\)|\\[\\])))\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.c"
              },
              "2": {
                "name": "punctuation.section.parameters.begin.bracket.round.c"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.parameters.end.bracket.round.c"
              }
            },
            "name": "meta.function.definition.parameters.c",
            "patterns": [
              {
                "include": "#probably_a_parameter"
              },
              {
                "include": "#function-innards"
              }
            ]
          },
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.parens.begin.bracket.round.c"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.parens.end.bracket.round.c"
              }
            },
            "patterns": [
              {
                "include": "#function-innards"
              }
            ]
          },
          {
            "include": "$self"
          }
        ]
      },
      "inline_comment": {
        "patterns": [
          {
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "comment.block.c punctuation.definition.comment.begin.c"
                  },
                  "2": {
                    "name": "comment.block.c"
                  },
                  "3": {
                    "patterns": [
                      {
                        "match": "\\*\\/",
                        "name": "comment.block.c punctuation.definition.comment.end.c"
                      },
                      {
                        "match": "\\*",
                        "name": "comment.block.c"
                      }
                    ]
                  }
                },
                "match": "(\\/\\*)((?>(?:[^\\*]|(?>\\*+)[^\\/])*)((?>\\*+)\\/))"
              },
              {
                "captures": {
                  "1": {
                    "name": "comment.block.c punctuation.definition.comment.begin.c"
                  },
                  "2": {
                    "name": "comment.block.c"
                  },
                  "3": {
                    "patterns": [
                      {
                        "match": "\\*\\/",
                        "name": "comment.block.c punctuation.definition.comment.end.c"
                      },
                      {
                        "match": "\\*",
                        "name": "comment.block.c"
                      }
                    ]
                  }
                },
                "match": "(\\/\\*)((?:[^\\*]|(?:\\*)++[^\\/])*+((?:\\*)++\\/))"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "comment.block.c punctuation.definition.comment.begin.c"
              },
              "2": {
                "name": "comment.block.c"
              },
              "3": {
                "patterns": [
                  {
                    "match": "\\*\\/",
                    "name": "comment.block.c punctuation.definition.comment.end.c"
                  },
                  {
                    "match": "\\*",
                    "name": "comment.block.c"
                  }
                ]
              }
            },
            "match": "(\\/\\*)((?:[^\\*]|(?:\\*)++[^\\/])*+((?:\\*)++\\/))"
          }
        ]
      },
      "line_comment": {
        "patterns": [
          {
            "begin": "\\s*+(\\/\\/)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.comment.c"
              }
            },
            "end": "(?<=\\n)(?<!\\\\\\n)",
            "endCaptures": {},
            "name": "comment.line.double-slash.c",
            "patterns": [
              {
                "include": "#line_continuation_character"
              }
            ]
          },
          {
            "begin": "\\s*+(\\/\\/)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.comment.c"
              }
            },
            "end": "(?<=\\n)(?<!\\\\\\n)",
            "endCaptures": {},
            "name": "comment.line.double-slash.c",
            "patterns": [
              {
                "include": "#line_continuation_character"
              }
            ]
          }
        ]
      },
      "line_continuation_character": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "constant.character.escape.line-continuation.c"
              }
            },
            "match": "(\\\\)\\n"
          }
        ]
      },
      "member_access": {
        "captures": {
          "1": {
            "name": "variable.other.object.access.c"
          },
          "2": {
            "name": "punctuation.separator.dot-access.c"
          },
          "3": {
            "name": "punctuation.separator.pointer-access.c"
          },
          "4": {
            "patterns": [
              {
                "include": "#member_access"
              },
              {
                "include": "#method_access"
              },
              {
                "captures": {
                  "1": {
                    "name": "variable.other.object.access.c"
                  },
                  "2": {
                    "name": "punctuation.separator.dot-access.c"
                  },
                  "3": {
                    "name": "punctuation.separator.pointer-access.c"
                  }
                },
                "match": "((?:[a-zA-Z_]\\w*|(?<=\\]|\\)))\\s*)(?:((?:\\.\\*|\\.))|((?:->\\*|->)))"
              }
            ]
          },
          "5": {
            "name": "variable.other.member.c"
          }
        },
        "match": "((?:[a-zA-Z_]\\w*|(?<=\\]|\\)))\\s*)(?:((?:\\.\\*|\\.))|((?:->\\*|->)))((?:[a-zA-Z_]\\w*\\s*(?:(?:(?:\\.\\*|\\.))|(?:(?:->\\*|->)))\\s*)*)\\s*(\\b(?!(?:atomic_uint_least64_t|atomic_uint_least16_t|atomic_uint_least32_t|atomic_uint_least8_t|atomic_int_least16_t|atomic_uint_fast64_t|atomic_uint_fast32_t|atomic_int_least64_t|atomic_int_least32_t|pthread_rwlockattr_t|atomic_uint_fast16_t|pthread_mutexattr_t|atomic_int_fast16_t|atomic_uint_fast8_t|atomic_int_fast64_t|atomic_int_least8_t|atomic_int_fast32_t|atomic_int_fast8_t|pthread_condattr_t|atomic_uintptr_t|atomic_ptrdiff_t|pthread_rwlock_t|atomic_uintmax_t|pthread_mutex_t|atomic_intmax_t|atomic_intptr_t|atomic_char32_t|atomic_char16_t|pthread_attr_t|atomic_wchar_t|uint_least64_t|uint_least32_t|uint_least16_t|pthread_cond_t|pthread_once_t|uint_fast64_t|uint_fast16_t|atomic_size_t|uint_least8_t|int_least64_t|int_least32_t|int_least16_t|pthread_key_t|atomic_ullong|atomic_ushort|uint_fast32_t|atomic_schar|atomic_short|uint_fast8_t|int_fast64_t|int_fast32_t|int_fast16_t|atomic_ulong|atomic_llong|int_least8_t|atomic_uchar|memory_order|suseconds_t|int_fast8_t|atomic_bool|atomic_char|atomic_uint|atomic_long|atomic_int|useconds_t|_Imaginary|blksize_t|pthread_t|in_addr_t|uintptr_t|in_port_t|uintmax_t|uintmax_t|blkcnt_t|uint16_t|unsigned|_Complex|uint32_t|intptr_t|intmax_t|intmax_t|uint64_t|u_quad_t|int64_t|int32_t|ssize_t|caddr_t|clock_t|uint8_t|u_short|swblk_t|segsz_t|int16_t|fixpt_t|daddr_t|nlink_t|qaddr_t|size_t|time_t|mode_t|signed|quad_t|ushort|u_long|u_char|double|int8_t|ino_t|uid_t|pid_t|_Bool|float|dev_t|div_t|short|gid_t|off_t|u_int|key_t|id_t|uint|long|void|char|bool|id_t|int)\\b)[a-zA-Z_]\\w*\\b(?!\\())"
      },
      "method_access": {
        "begin": "((?:[a-zA-Z_]\\w*|(?<=\\]|\\)))\\s*)(?:((?:\\.\\*|\\.))|((?:->\\*|->)))((?:[a-zA-Z_]\\w*\\s*(?:(?:(?:\\.\\*|\\.))|(?:(?:->\\*|->)))\\s*)*)\\s*([a-zA-Z_]\\w*)(\\()",
        "beginCaptures": {
          "1": {
            "name": "variable.other.object.access.c"
          },
          "2": {
            "name": "punctuation.separator.dot-access.c"
          },
          "3": {
            "name": "punctuation.separator.pointer-access.c"
          },
          "4": {
            "patterns": [
              {
                "include": "#member_access"
              },
              {
                "include": "#method_access"
              },
              {
                "captures": {
                  "1": {
                    "name": "variable.other.object.access.c"
                  },
                  "2": {
                    "name": "punctuation.separator.dot-access.c"
                  },
                  "3": {
                    "name": "punctuation.separator.pointer-access.c"
                  }
                },
                "match": "((?:[a-zA-Z_]\\w*|(?<=\\]|\\)))\\s*)(?:((?:\\.\\*|\\.))|((?:->\\*|->)))"
              }
            ]
          },
          "5": {
            "name": "entity.name.function.member.c"
          },
          "6": {
            "name": "punctuation.section.arguments.begin.bracket.round.function.member.c"
          }
        },
        "contentName": "meta.function-call.member.c",
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "punctuation.section.arguments.end.bracket.round.function.member.c"
          }
        },
        "patterns": [
          {
            "include": "#function-call-innards"
          }
        ]
      },
      "numbers": {
        "captures": {
          "0": {
            "patterns": [
              {
                "begin": "(?=.)",
                "end": "$",
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.other.unit.hexadecimal.c"
                      },
                      "2": {
                        "name": "constant.numeric.hexadecimal.c",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric"
                          }
                        ]
                      },
                      "3": {
                        "name": "punctuation.separator.constant.numeric"
                      },
                      "4": {
                        "name": "constant.numeric.hexadecimal.c"
                      },
                      "5": {
                        "name": "constant.numeric.hexadecimal.c",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric"
                          }
                        ]
                      },
                      "6": {
                        "name": "punctuation.separator.constant.numeric"
                      },
                      "8": {
                        "name": "keyword.other.unit.exponent.hexadecimal.c"
                      },
                      "9": {
                        "name": "keyword.operator.plus.exponent.hexadecimal.c"
                      },
                      "10": {
                        "name": "keyword.operator.minus.exponent.hexadecimal.c"
                      },
                      "11": {
                        "name": "constant.numeric.exponent.hexadecimal.c",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric"
                          }
                        ]
                      },
                      "12": {
                        "name": "keyword.other.unit.suffix.floating-point.c"
                      }
                    },
                    "match": "(\\G0[xX])([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)?((?:(?<=[0-9a-fA-F])\\.|\\.(?=[0-9a-fA-F])))([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)?((?<!')([pP])(\\+?)(\\-?)((?:[0-9](?:[0-9]|(?:(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)))?([lLfF](?!\\w))?$"
                  },
                  {
                    "captures": {
                      "2": {
                        "name": "constant.numeric.decimal.c",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric"
                          }
                        ]
                      },
                      "3": {
                        "name": "punctuation.separator.constant.numeric"
                      },
                      "4": {
                        "name": "constant.numeric.decimal.point.c"
                      },
                      "5": {
                        "name": "constant.numeric.decimal.c",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric"
                          }
                        ]
                      },
                      "6": {
                        "name": "punctuation.separator.constant.numeric"
                      },
                      "8": {
                        "name": "keyword.other.unit.exponent.decimal.c"
                      },
                      "9": {
                        "name": "keyword.operator.plus.exponent.decimal.c"
                      },
                      "10": {
                        "name": "keyword.operator.minus.exponent.decimal.c"
                      },
                      "11": {
                        "name": "constant.numeric.exponent.decimal.c",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric"
                          }
                        ]
                      },
                      "12": {
                        "name": "keyword.other.unit.suffix.floating-point.c"
                      }
                    },
                    "match": "(\\G(?=[0-9.])(?!0[xXbB]))([0-9](?:[0-9]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)?((?:(?<=[0-9])\\.|\\.(?=[0-9])))([0-9](?:[0-9]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)?((?<!')([eE])(\\+?)(\\-?)((?:[0-9](?:[0-9]|(?:(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)))?([lLfF](?!\\w))?$"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.other.unit.binary.c"
                      },
                      "2": {
                        "name": "constant.numeric.binary.c",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric"
                          }
                        ]
                      },
                      "3": {
                        "name": "punctuation.separator.constant.numeric"
                      },
                      "4": {
                        "name": "keyword.other.unit.suffix.integer.c"
                      }
                    },
                    "match": "(\\G0[bB])([01](?:[01]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)((?:(?:(?:(?:(?:[uU]|[uU]ll?)|[uU]LL?)|ll?[uU]?)|LL?[uU]?)|[fF])(?!\\w))?$"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.other.unit.octal.c"
                      },
                      "2": {
                        "name": "constant.numeric.octal.c",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric"
                          }
                        ]
                      },
                      "3": {
                        "name": "punctuation.separator.constant.numeric"
                      },
                      "4": {
                        "name": "keyword.other.unit.suffix.integer.c"
                      }
                    },
                    "match": "(\\G0)((?:[0-7]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))+)((?:(?:(?:(?:(?:[uU]|[uU]ll?)|[uU]LL?)|ll?[uU]?)|LL?[uU]?)|[fF])(?!\\w))?$"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.other.unit.hexadecimal.c"
                      },
                      "2": {
                        "name": "constant.numeric.hexadecimal.c",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric"
                          }
                        ]
                      },
                      "3": {
                        "name": "punctuation.separator.constant.numeric"
                      },
                      "5": {
                        "name": "keyword.other.unit.exponent.hexadecimal.c"
                      },
                      "6": {
                        "name": "keyword.operator.plus.exponent.hexadecimal.c"
                      },
                      "7": {
                        "name": "keyword.operator.minus.exponent.hexadecimal.c"
                      },
                      "8": {
                        "name": "constant.numeric.exponent.hexadecimal.c",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric"
                          }
                        ]
                      },
                      "9": {
                        "name": "keyword.other.unit.suffix.integer.c"
                      }
                    },
                    "match": "(\\G0[xX])([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)((?<!')([pP])(\\+?)(\\-?)((?:[0-9](?:[0-9]|(?:(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)))?((?:(?:(?:(?:(?:[uU]|[uU]ll?)|[uU]LL?)|ll?[uU]?)|LL?[uU]?)|[fF])(?!\\w))?$"
                  },
                  {
                    "captures": {
                      "2": {
                        "name": "constant.numeric.decimal.c",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric"
                          }
                        ]
                      },
                      "3": {
                        "name": "punctuation.separator.constant.numeric"
                      },
                      "5": {
                        "name": "keyword.other.unit.exponent.decimal.c"
                      },
                      "6": {
                        "name": "keyword.operator.plus.exponent.decimal.c"
                      },
                      "7": {
                        "name": "keyword.operator.minus.exponent.decimal.c"
                      },
                      "8": {
                        "name": "constant.numeric.exponent.decimal.c",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric"
                          }
                        ]
                      },
                      "9": {
                        "name": "keyword.other.unit.suffix.integer.c"
                      }
                    },
                    "match": "(\\G(?=[0-9.])(?!0[xXbB]))([0-9](?:[0-9]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)((?<!')([eE])(\\+?)(\\-?)((?:[0-9](?:[0-9]|(?:(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)))?((?:(?:(?:(?:(?:[uU]|[uU]ll?)|[uU]LL?)|ll?[uU]?)|LL?[uU]?)|[fF])(?!\\w))?$"
                  },
                  {
                    "match": "(?:(?:[0-9a-zA-Z_\\.]|')|(?<=[eEpP])[+-])+",
                    "name": "invalid.illegal.constant.numeric"
                  }
                ]
              }
            ]
          }
        },
        "match": "(?<!\\w)\\.?\\d(?:(?:[0-9a-zA-Z_\\.]|')|(?<=[eEpP])[+-])*"
      },
      "operators": {
        "patterns": [
          {
            "match": "(?<![\\w$])(sizeof)(?![\\w$])",
            "name": "keyword.operator.sizeof.c"
          },
          {
            "match": "--",
            "name": "keyword.operator.decrement.c"
          },
          {
            "match": "\\+\\+",
            "name": "keyword.operator.increment.c"
          },
          {
            "match": "%=|\\+=|-=|\\*=|(?<!\\()/=",
            "name": "keyword.operator.assignment.compound.c"
          },
          {
            "match": "&=|\\^=|<<=|>>=|\\|=",
            "name": "keyword.operator.assignment.compound.bitwise.c"
          },
          {
            "match": "<<|>>",
            "name": "keyword.operator.bitwise.shift.c"
          },
          {
            "match": "!=|<=|>=|==|<|>",
            "name": "keyword.operator.comparison.c"
          },
          {
            "match": "&&|!|\\|\\|",
            "name": "keyword.operator.logical.c"
          },
          {
            "match": "&|\\||\\^|~",
            "name": "keyword.operator.c"
          },
          {
            "match": "=",
            "name": "keyword.operator.assignment.c"
          },
          {
            "match": "%|\\*|/|-|\\+",
            "name": "keyword.operator.c"
          },
          {
            "begin": "(\\?)",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.ternary.c"
              }
            },
            "end": "(:)",
            "endCaptures": {
              "1": {
                "name": "keyword.operator.ternary.c"
              }
            },
            "patterns": [
              {
                "include": "#function-call-innards"
              },
              {
                "include": "$self"
              }
            ]
          }
        ]
      },
      "parens": {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.parens.begin.bracket.round.c"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.parens.end.bracket.round.c"
          }
        },
        "name": "meta.parens.c",
        "patterns": [
          {
            "include": "$self"
          }
        ]
      },
      "parens-block": {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.parens.begin.bracket.round.c"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.parens.end.bracket.round.c"
          }
        },
        "name": "meta.parens.block.c",
        "patterns": [
          {
            "include": "#block_innards"
          },
          {
            "match": "(?-mix:(?<!:):(?!:))",
            "name": "punctuation.range-based.c"
          }
        ]
      },
      "pragma-mark": {
        "captures": {
          "1": {
            "name": "meta.preprocessor.pragma.c"
          },
          "2": {
            "name": "keyword.control.directive.pragma.pragma-mark.c"
          },
          "3": {
            "name": "punctuation.definition.directive.c"
          },
          "4": {
            "name": "entity.name.tag.pragma-mark.c"
          }
        },
        "match": "^\\s*(((#)\\s*pragma\\s+mark)\\s+(.*))",
        "name": "meta.section.c"
      },
      "predefined_macros": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "entity.name.other.preprocessor.macro.predefined.$1.c"
              }
            },
            "match": "\\b(__cplusplus|__DATE__|__FILE__|__LINE__|__STDC__|__STDC_HOSTED__|__STDC_NO_COMPLEX__|__STDC_VERSION__|__STDCPP_THREADS__|__TIME__|NDEBUG|__OBJC__|__ASSEMBLER__|__ATOM__|__AVX__|__AVX2__|_CHAR_UNSIGNED|__CLR_VER|_CONTROL_FLOW_GUARD|__COUNTER__|__cplusplus_cli|__cplusplus_winrt|_CPPRTTI|_CPPUNWIND|_DEBUG|_DLL|__FUNCDNAME__|__FUNCSIG__|__FUNCTION__|_INTEGRAL_MAX_BITS|__INTELLISENSE__|_ISO_VOLATILE|_KERNEL_MODE|_M_AMD64|_M_ARM|_M_ARM_ARMV7VE|_M_ARM_FP|_M_ARM64|_M_CEE|_M_CEE_PURE|_M_CEE_SAFE|_M_FP_EXCEPT|_M_FP_FAST|_M_FP_PRECISE|_M_FP_STRICT|_M_IX86|_M_IX86_FP|_M_X64|_MANAGED|_MSC_BUILD|_MSC_EXTENSIONS|_MSC_FULL_VER|_MSC_VER|_MSVC_LANG|__MSVC_RUNTIME_CHECKS|_MT|_NATIVE_WCHAR_T_DEFINED|_OPENMP|_PREFAST|__TIMESTAMP__|_VC_NO_DEFAULTLIB|_WCHAR_T_DEFINED|_WIN32|_WIN64|_WINRT_DLL|_ATL_VER|_MFC_VER|__GFORTRAN__|__GNUC__|__GNUC_MINOR__|__GNUC_PATCHLEVEL__|__GNUG__|__STRICT_ANSI__|__BASE_FILE__|__INCLUDE_LEVEL__|__ELF__|__VERSION__|__OPTIMIZE__|__OPTIMIZE_SIZE__|__NO_INLINE__|__GNUC_STDC_INLINE__|__CHAR_UNSIGNED__|__WCHAR_UNSIGNED__|__REGISTER_PREFIX__|__REGISTER_PREFIX__|__SIZE_TYPE__|__PTRDIFF_TYPE__|__WCHAR_TYPE__|__WINT_TYPE__|__INTMAX_TYPE__|__UINTMAX_TYPE__|__SIG_ATOMIC_TYPE__|__INT8_TYPE__|__INT16_TYPE__|__INT32_TYPE__|__INT64_TYPE__|__UINT8_TYPE__|__UINT16_TYPE__|__UINT32_TYPE__|__UINT64_TYPE__|__INT_LEAST8_TYPE__|__INT_LEAST16_TYPE__|__INT_LEAST32_TYPE__|__INT_LEAST64_TYPE__|__UINT_LEAST8_TYPE__|__UINT_LEAST16_TYPE__|__UINT_LEAST32_TYPE__|__UINT_LEAST64_TYPE__|__INT_FAST8_TYPE__|__INT_FAST16_TYPE__|__INT_FAST32_TYPE__|__INT_FAST64_TYPE__|__UINT_FAST8_TYPE__|__UINT_FAST16_TYPE__|__UINT_FAST32_TYPE__|__UINT_FAST64_TYPE__|__INTPTR_TYPE__|__UINTPTR_TYPE__|__CHAR_BIT__|__SCHAR_MAX__|__WCHAR_MAX__|__SHRT_MAX__|__INT_MAX__|__LONG_MAX__|__LONG_LONG_MAX__|__WINT_MAX__|__SIZE_MAX__|__PTRDIFF_MAX__|__INTMAX_MAX__|__UINTMAX_MAX__|__SIG_ATOMIC_MAX__|__INT8_MAX__|__INT16_MAX__|__INT32_MAX__|__INT64_MAX__|__UINT8_MAX__|__UINT16_MAX__|__UINT32_MAX__|__UINT64_MAX__|__INT_LEAST8_MAX__|__INT_LEAST16_MAX__|__INT_LEAST32_MAX__|__INT_LEAST64_MAX__|__UINT_LEAST8_MAX__|__UINT_LEAST16_MAX__|__UINT_LEAST32_MAX__|__UINT_LEAST64_MAX__|__INT_FAST8_MAX__|__INT_FAST16_MAX__|__INT_FAST32_MAX__|__INT_FAST64_MAX__|__UINT_FAST8_MAX__|__UINT_FAST16_MAX__|__UINT_FAST32_MAX__|__UINT_FAST64_MAX__|__INTPTR_MAX__|__UINTPTR_MAX__|__WCHAR_MIN__|__WINT_MIN__|__SIG_ATOMIC_MIN__|__SCHAR_WIDTH__|__SHRT_WIDTH__|__INT_WIDTH__|__LONG_WIDTH__|__LONG_LONG_WIDTH__|__PTRDIFF_WIDTH__|__SIG_ATOMIC_WIDTH__|__SIZE_WIDTH__|__WCHAR_WIDTH__|__WINT_WIDTH__|__INT_LEAST8_WIDTH__|__INT_LEAST16_WIDTH__|__INT_LEAST32_WIDTH__|__INT_LEAST64_WIDTH__|__INT_FAST8_WIDTH__|__INT_FAST16_WIDTH__|__INT_FAST32_WIDTH__|__INT_FAST64_WIDTH__|__INTPTR_WIDTH__|__INTMAX_WIDTH__|__SIZEOF_INT__|__SIZEOF_LONG__|__SIZEOF_LONG_LONG__|__SIZEOF_SHORT__|__SIZEOF_POINTER__|__SIZEOF_FLOAT__|__SIZEOF_DOUBLE__|__SIZEOF_LONG_DOUBLE__|__SIZEOF_SIZE_T__|__SIZEOF_WCHAR_T__|__SIZEOF_WINT_T__|__SIZEOF_PTRDIFF_T__|__BYTE_ORDER__|__ORDER_LITTLE_ENDIAN__|__ORDER_BIG_ENDIAN__|__ORDER_PDP_ENDIAN__|__FLOAT_WORD_ORDER__|__DEPRECATED|__EXCEPTIONS|__GXX_RTTI|__USING_SJLJ_EXCEPTIONS__|__GXX_EXPERIMENTAL_CXX0X__|__GXX_WEAK__|__NEXT_RUNTIME__|__LP64__|_LP64|__SSP__|__SSP_ALL__|__SSP_STRONG__|__SSP_EXPLICIT__|__SANITIZE_ADDRESS__|__SANITIZE_THREAD__|__GCC_HAVE_SYNC_COMPARE_AND_SWAP_1|__GCC_HAVE_SYNC_COMPARE_AND_SWAP_2|__GCC_HAVE_SYNC_COMPARE_AND_SWAP_4|__GCC_HAVE_SYNC_COMPARE_AND_SWAP_8|__GCC_HAVE_SYNC_COMPARE_AND_SWAP_16|__HAVE_SPECULATION_SAFE_VALUE|__GCC_HAVE_DWARF2_CFI_ASM|__FP_FAST_FMA|__FP_FAST_FMAF|__FP_FAST_FMAL|__FP_FAST_FMAF16|__FP_FAST_FMAF32|__FP_FAST_FMAF64|__FP_FAST_FMAF128|__FP_FAST_FMAF32X|__FP_FAST_FMAF64X|__FP_FAST_FMAF128X|__GCC_IEC_559|__GCC_IEC_559_COMPLEX|__NO_MATH_ERRNO__|__has_builtin|__has_feature|__has_extension|__has_cpp_attribute|__has_c_attribute|__has_attribute|__has_declspec_attribute|__is_identifier|__has_include|__has_include_next|__has_warning|__BASE_FILE__|__FILE_NAME__|__clang__|__clang_major__|__clang_minor__|__clang_patchlevel__|__clang_version__|__fp16|_Float16)\\b"
          },
          {
            "match": "\\b__([A-Z_]+)__\\b",
            "name": "entity.name.other.preprocessor.macro.predefined.probably.$1.c"
          }
        ]
      },
      "preprocessor-rule-conditional": {
        "patterns": [
          {
            "begin": "^\\s*((#)\\s*if(?:n?def)?\\b)",
            "beginCaptures": {
              "0": {
                "name": "meta.preprocessor.c"
              },
              "1": {
                "name": "keyword.control.directive.conditional.c"
              },
              "2": {
                "name": "punctuation.definition.directive.c"
              }
            },
            "end": "^\\s*((#)\\s*endif\\b)",
            "endCaptures": {
              "0": {
                "name": "meta.preprocessor.c"
              },
              "1": {
                "name": "keyword.control.directive.conditional.c"
              },
              "2": {
                "name": "punctuation.definition.directive.c"
              }
            },
            "patterns": [
              {
                "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                "name": "meta.preprocessor.c",
                "patterns": [
                  {
                    "include": "#preprocessor-rule-conditional-line"
                  }
                ]
              },
              {
                "include": "#preprocessor-rule-enabled-elif"
              },
              {
                "include": "#preprocessor-rule-enabled-else"
              },
              {
                "include": "#preprocessor-rule-disabled-elif"
              },
              {
                "begin": "^\\s*((#)\\s*elif\\b)",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.directive.conditional.c"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.c"
                  }
                },
                "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                "name": "meta.preprocessor.c",
                "patterns": [
                  {
                    "include": "#preprocessor-rule-conditional-line"
                  }
                ]
              },
              {
                "include": "$self"
              }
            ]
          },
          {
            "captures": {
              "0": {
                "name": "invalid.illegal.stray-$1.c"
              }
            },
            "match": "^\\s*#\\s*(else|elif|endif)\\b"
          }
        ]
      },
      "preprocessor-rule-conditional-block": {
        "patterns": [
          {
            "begin": "^\\s*((#)\\s*if(?:n?def)?\\b)",
            "beginCaptures": {
              "0": {
                "name": "meta.preprocessor.c"
              },
              "1": {
                "name": "keyword.control.directive.conditional.c"
              },
              "2": {
                "name": "punctuation.definition.directive.c"
              }
            },
            "end": "^\\s*((#)\\s*endif\\b)",
            "endCaptures": {
              "0": {
                "name": "meta.preprocessor.c"
              },
              "1": {
                "name": "keyword.control.directive.conditional.c"
              },
              "2": {
                "name": "punctuation.definition.directive.c"
              }
            },
            "patterns": [
              {
                "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                "name": "meta.preprocessor.c",
                "patterns": [
                  {
                    "include": "#preprocessor-rule-conditional-line"
                  }
                ]
              },
              {
                "include": "#preprocessor-rule-enabled-elif-block"
              },
              {
                "include": "#preprocessor-rule-enabled-else-block"
              },
              {
                "include": "#preprocessor-rule-disabled-elif"
              },
              {
                "begin": "^\\s*((#)\\s*elif\\b)",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.directive.conditional.c"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.c"
                  }
                },
                "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                "name": "meta.preprocessor.c",
                "patterns": [
                  {
                    "include": "#preprocessor-rule-conditional-line"
                  }
                ]
              },
              {
                "include": "#block_innards"
              }
            ]
          },
          {
            "captures": {
              "0": {
                "name": "invalid.illegal.stray-$1.c"
              }
            },
            "match": "^\\s*#\\s*(else|elif|endif)\\b"
          }
        ]
      },
      "preprocessor-rule-conditional-line": {
        "patterns": [
          {
            "match": "(?:\\bdefined\\b\\s*$)|(?:\\bdefined\\b(?=\\s*\\(*\\s*(?:(?!defined\\b)[a-zA-Z_$][\\w$]*\\b)\\s*\\)*\\s*(?:\\n|//|/\\*|\\?|\\:|&&|\\|\\||\\\\\\s*\\n)))",
            "name": "keyword.control.directive.conditional.c"
          },
          {
            "match": "\\bdefined\\b",
            "name": "invalid.illegal.macro-name.c"
          },
          {
            "include": "#comments"
          },
          {
            "include": "#strings"
          },
          {
            "include": "#numbers"
          },
          {
            "begin": "\\?",
            "beginCaptures": {
              "0": {
                "name": "keyword.operator.ternary.c"
              }
            },
            "end": ":",
            "endCaptures": {
              "0": {
                "name": "keyword.operator.ternary.c"
              }
            },
            "patterns": [
              {
                "include": "#preprocessor-rule-conditional-line"
              }
            ]
          },
          {
            "include": "#operators"
          },
          {
            "match": "\\b(NULL|true|false|TRUE|FALSE)\\b",
            "name": "constant.language.c"
          },
          {
            "match": "[a-zA-Z_$][\\w$]*",
            "name": "entity.name.function.preprocessor.c"
          },
          {
            "include": "#line_continuation_character"
          },
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.parens.begin.bracket.round.c"
              }
            },
            "end": "\\)|(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.parens.end.bracket.round.c"
              }
            },
            "patterns": [
              {
                "include": "#preprocessor-rule-conditional-line"
              }
            ]
          }
        ]
      },
      "preprocessor-rule-define-line-blocks": {
        "patterns": [
          {
            "begin": "{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.block.begin.bracket.curly.c"
              }
            },
            "end": "}|(?=\\s*#\\s*(?:elif|else|endif)\\b)|(?<!\\\\)(?=\\s*\\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.end.bracket.curly.c"
              }
            },
            "patterns": [
              {
                "include": "#preprocessor-rule-define-line-blocks"
              },
              {
                "include": "#preprocessor-rule-define-line-contents"
              }
            ]
          },
          {
            "include": "#preprocessor-rule-define-line-contents"
          }
        ]
      },
      "preprocessor-rule-define-line-contents": {
        "patterns": [
          {
            "include": "#vararg_ellipses"
          },
          {
            "begin": "{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.block.begin.bracket.curly.c"
              }
            },
            "end": "}|(?=\\s*#\\s*(?:elif|else|endif)\\b)|(?<!\\\\)(?=\\s*\\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.end.bracket.curly.c"
              }
            },
            "name": "meta.block.c",
            "patterns": [
              {
                "include": "#preprocessor-rule-define-line-blocks"
              }
            ]
          },
          {
            "match": "\\(",
            "name": "punctuation.section.parens.begin.bracket.round.c"
          },
          {
            "match": "\\)",
            "name": "punctuation.section.parens.end.bracket.round.c"
          },
          {
            "begin": "(?!(?:while|for|do|if|else|switch|catch|enumerate|return|typeid|alignof|alignas|sizeof|[cr]?iterate|and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|alignof|alignas|asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|long|short|signed|struct|typedef|union|unsigned|void)\\s*\\()(?=(?:[A-Za-z_][A-Za-z0-9_]*+|::)++\\s*\\(|(?:(?<=operator)(?:[-*&<>=+!]+|\\(\\)|\\[\\]))\\s*\\()",
            "end": "(?<=\\))(?!\\w)|(?<!\\\\)(?=\\s*\\n)",
            "name": "meta.function.c",
            "patterns": [
              {
                "include": "#preprocessor-rule-define-line-functions"
              }
            ]
          },
          {
            "begin": "\"",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.c"
              }
            },
            "end": "\"|(?<!\\\\)(?=\\s*\\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.c"
              }
            },
            "name": "string.quoted.double.c",
            "patterns": [
              {
                "include": "#string_escaped_char"
              },
              {
                "include": "#string_placeholder"
              },
              {
                "include": "#line_continuation_character"
              }
            ]
          },
          {
            "begin": "'",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.c"
              }
            },
            "end": "'|(?<!\\\\)(?=\\s*\\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.c"
              }
            },
            "name": "string.quoted.single.c",
            "patterns": [
              {
                "include": "#string_escaped_char"
              },
              {
                "include": "#line_continuation_character"
              }
            ]
          },
          {
            "include": "#method_access"
          },
          {
            "include": "#member_access"
          },
          {
            "include": "$self"
          }
        ]
      },
      "preprocessor-rule-define-line-functions": {
        "patterns": [
          {
            "include": "#comments"
          },
          {
            "include": "#storage_types"
          },
          {
            "include": "#vararg_ellipses"
          },
          {
            "include": "#method_access"
          },
          {
            "include": "#member_access"
          },
          {
            "include": "#operators"
          },
          {
            "begin": "(?!(?:while|for|do|if|else|switch|catch|enumerate|return|typeid|alignof|alignas|sizeof|[cr]?iterate|and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|alignof|alignas)\\s*\\()((?:[A-Za-z_][A-Za-z0-9_]*+|::)++|(?:(?<=operator)(?:[-*&<>=+!]+|\\(\\)|\\[\\])))\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.c"
              },
              "2": {
                "name": "punctuation.section.arguments.begin.bracket.round.c"
              }
            },
            "end": "(\\))|(?<!\\\\)(?=\\s*\\n)",
            "endCaptures": {
              "1": {
                "name": "punctuation.section.arguments.end.bracket.round.c"
              }
            },
            "patterns": [
              {
                "include": "#preprocessor-rule-define-line-functions"
              }
            ]
          },
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.parens.begin.bracket.round.c"
              }
            },
            "end": "(\\))|(?<!\\\\)(?=\\s*\\n)",
            "endCaptures": {
              "1": {
                "name": "punctuation.section.parens.end.bracket.round.c"
              }
            },
            "patterns": [
              {
                "include": "#preprocessor-rule-define-line-functions"
              }
            ]
          },
          {
            "include": "#preprocessor-rule-define-line-contents"
          }
        ]
      },
      "preprocessor-rule-disabled": {
        "patterns": [
          {
            "begin": "^\\s*((#)\\s*if\\b)(?=\\s*\\(*\\b0+\\b\\)*\\s*(?:$|//|/\\*))",
            "beginCaptures": {
              "0": {
                "name": "meta.preprocessor.c"
              },
              "1": {
                "name": "keyword.control.directive.conditional.c"
              },
              "2": {
                "name": "punctuation.definition.directive.c"
              }
            },
            "end": "^\\s*((#)\\s*endif\\b)",
            "endCaptures": {
              "0": {
                "name": "meta.preprocessor.c"
              },
              "1": {
                "name": "keyword.control.directive.conditional.c"
              },
              "2": {
                "name": "punctuation.definition.directive.c"
              }
            },
            "patterns": [
              {
                "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?=\\n)",
                "name": "meta.preprocessor.c",
                "patterns": [
                  {
                    "include": "#preprocessor-rule-conditional-line"
                  }
                ]
              },
              {
                "include": "#comments"
              },
              {
                "include": "#preprocessor-rule-enabled-elif"
              },
              {
                "include": "#preprocessor-rule-enabled-else"
              },
              {
                "include": "#preprocessor-rule-disabled-elif"
              },
              {
                "begin": "^\\s*((#)\\s*elif\\b)",
                "beginCaptures": {
                  "0": {
                    "name": "meta.preprocessor.c"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.c"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.c"
                  }
                },
                "end": "(?=^\\s*((#)\\s*(?:elif|else|endif)\\b))",
                "patterns": [
                  {
                    "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                    "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                    "name": "meta.preprocessor.c",
                    "patterns": [
                      {
                        "include": "#preprocessor-rule-conditional-line"
                      }
                    ]
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "\\n",
                "contentName": "comment.block.preprocessor.if-branch.c",
                "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                "patterns": [
                  {
                    "include": "#disabled"
                  },
                  {
                    "include": "#pragma-mark"
                  }
                ]
              }
            ]
          }
        ]
      },
      "preprocessor-rule-disabled-block": {
        "patterns": [
          {
            "begin": "^\\s*((#)\\s*if\\b)(?=\\s*\\(*\\b0+\\b\\)*\\s*(?:$|//|/\\*))",
            "beginCaptures": {
              "0": {
                "name": "meta.preprocessor.c"
              },
              "1": {
                "name": "keyword.control.directive.conditional.c"
              },
              "2": {
                "name": "punctuation.definition.directive.c"
              }
            },
            "end": "^\\s*((#)\\s*endif\\b)",
            "endCaptures": {
              "0": {
                "name": "meta.preprocessor.c"
              },
              "1": {
                "name": "keyword.control.directive.conditional.c"
              },
              "2": {
                "name": "punctuation.definition.directive.c"
              }
            },
            "patterns": [
              {
                "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?=\\n)",
                "name": "meta.preprocessor.c",
                "patterns": [
                  {
                    "include": "#preprocessor-rule-conditional-line"
                  }
                ]
              },
              {
                "include": "#comments"
              },
              {
                "include": "#preprocessor-rule-enabled-elif-block"
              },
              {
                "include": "#preprocessor-rule-enabled-else-block"
              },
              {
                "include": "#preprocessor-rule-disabled-elif"
              },
              {
                "begin": "^\\s*((#)\\s*elif\\b)",
                "beginCaptures": {
                  "0": {
                    "name": "meta.preprocessor.c"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.c"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.c"
                  }
                },
                "end": "(?=^\\s*((#)\\s*(?:elif|else|endif)\\b))",
                "patterns": [
                  {
                    "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                    "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                    "name": "meta.preprocessor.c",
                    "patterns": [
                      {
                        "include": "#preprocessor-rule-conditional-line"
                      }
                    ]
                  },
                  {
                    "include": "#block_innards"
                  }
                ]
              },
              {
                "begin": "\\n",
                "contentName": "comment.block.preprocessor.if-branch.in-block.c",
                "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                "patterns": [
                  {
                    "include": "#disabled"
                  },
                  {
                    "include": "#pragma-mark"
                  }
                ]
              }
            ]
          }
        ]
      },
      "preprocessor-rule-disabled-elif": {
        "begin": "^\\s*((#)\\s*elif\\b)(?=\\s*\\(*\\b0+\\b\\)*\\s*(?:$|//|/\\*))",
        "beginCaptures": {
          "0": {
            "name": "meta.preprocessor.c"
          },
          "1": {
            "name": "keyword.control.directive.conditional.c"
          },
          "2": {
            "name": "punctuation.definition.directive.c"
          }
        },
        "end": "(?=^\\s*((#)\\s*(?:elif|else|endif)\\b))",
        "patterns": [
          {
            "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
            "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
            "name": "meta.preprocessor.c",
            "patterns": [
              {
                "include": "#preprocessor-rule-conditional-line"
              }
            ]
          },
          {
            "include": "#comments"
          },
          {
            "begin": "\\n",
            "contentName": "comment.block.preprocessor.elif-branch.c",
            "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
            "patterns": [
              {
                "include": "#disabled"
              },
              {
                "include": "#pragma-mark"
              }
            ]
          }
        ]
      },
      "preprocessor-rule-enabled": {
        "patterns": [
          {
            "begin": "^\\s*((#)\\s*if\\b)(?=\\s*\\(*\\b0*1\\b\\)*\\s*(?:$|//|/\\*))",
            "beginCaptures": {
              "0": {
                "name": "meta.preprocessor.c"
              },
              "1": {
                "name": "keyword.control.directive.conditional.c"
              },
              "2": {
                "name": "punctuation.definition.directive.c"
              },
              "3": {
                "name": "constant.numeric.preprocessor.c"
              }
            },
            "end": "^\\s*((#)\\s*endif\\b)",
            "endCaptures": {
              "0": {
                "name": "meta.preprocessor.c"
              },
              "1": {
                "name": "keyword.control.directive.conditional.c"
              },
              "2": {
                "name": "punctuation.definition.directive.c"
              }
            },
            "patterns": [
              {
                "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?=\\n)",
                "name": "meta.preprocessor.c",
                "patterns": [
                  {
                    "include": "#preprocessor-rule-conditional-line"
                  }
                ]
              },
              {
                "include": "#comments"
              },
              {
                "begin": "^\\s*((#)\\s*else\\b)",
                "beginCaptures": {
                  "0": {
                    "name": "meta.preprocessor.c"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.c"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.c"
                  }
                },
                "contentName": "comment.block.preprocessor.else-branch.c",
                "end": "(?=^\\s*((#)\\s*endif\\b))",
                "patterns": [
                  {
                    "include": "#disabled"
                  },
                  {
                    "include": "#pragma-mark"
                  }
                ]
              },
              {
                "begin": "^\\s*((#)\\s*elif\\b)",
                "beginCaptures": {
                  "0": {
                    "name": "meta.preprocessor.c"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.c"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.c"
                  }
                },
                "contentName": "comment.block.preprocessor.if-branch.c",
                "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                "patterns": [
                  {
                    "include": "#disabled"
                  },
                  {
                    "include": "#pragma-mark"
                  }
                ]
              },
              {
                "begin": "\\n",
                "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
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
      "preprocessor-rule-enabled-block": {
        "patterns": [
          {
            "begin": "^\\s*((#)\\s*if\\b)(?=\\s*\\(*\\b0*1\\b\\)*\\s*(?:$|//|/\\*))",
            "beginCaptures": {
              "0": {
                "name": "meta.preprocessor.c"
              },
              "1": {
                "name": "keyword.control.directive.conditional.c"
              },
              "2": {
                "name": "punctuation.definition.directive.c"
              }
            },
            "end": "^\\s*((#)\\s*endif\\b)",
            "endCaptures": {
              "0": {
                "name": "meta.preprocessor.c"
              },
              "1": {
                "name": "keyword.control.directive.conditional.c"
              },
              "2": {
                "name": "punctuation.definition.directive.c"
              }
            },
            "patterns": [
              {
                "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?=\\n)",
                "name": "meta.preprocessor.c",
                "patterns": [
                  {
                    "include": "#preprocessor-rule-conditional-line"
                  }
                ]
              },
              {
                "include": "#comments"
              },
              {
                "begin": "^\\s*((#)\\s*else\\b)",
                "beginCaptures": {
                  "0": {
                    "name": "meta.preprocessor.c"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.c"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.c"
                  }
                },
                "contentName": "comment.block.preprocessor.else-branch.in-block.c",
                "end": "(?=^\\s*((#)\\s*endif\\b))",
                "patterns": [
                  {
                    "include": "#disabled"
                  },
                  {
                    "include": "#pragma-mark"
                  }
                ]
              },
              {
                "begin": "^\\s*((#)\\s*elif\\b)",
                "beginCaptures": {
                  "0": {
                    "name": "meta.preprocessor.c"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.c"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.c"
                  }
                },
                "contentName": "comment.block.preprocessor.if-branch.in-block.c",
                "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                "patterns": [
                  {
                    "include": "#disabled"
                  },
                  {
                    "include": "#pragma-mark"
                  }
                ]
              },
              {
                "begin": "\\n",
                "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                "patterns": [
                  {
                    "include": "#block_innards"
                  }
                ]
              }
            ]
          }
        ]
      },
      "preprocessor-rule-enabled-elif": {
        "begin": "^\\s*((#)\\s*elif\\b)(?=\\s*\\(*\\b0*1\\b\\)*\\s*(?:$|//|/\\*))",
        "beginCaptures": {
          "0": {
            "name": "meta.preprocessor.c"
          },
          "1": {
            "name": "keyword.control.directive.conditional.c"
          },
          "2": {
            "name": "punctuation.definition.directive.c"
          }
        },
        "end": "(?=^\\s*((#)\\s*endif\\b))",
        "patterns": [
          {
            "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
            "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
            "name": "meta.preprocessor.c",
            "patterns": [
              {
                "include": "#preprocessor-rule-conditional-line"
              }
            ]
          },
          {
            "include": "#comments"
          },
          {
            "begin": "\\n",
            "end": "(?=^\\s*((#)\\s*(?:endif)\\b))",
            "patterns": [
              {
                "begin": "^\\s*((#)\\s*(else)\\b)",
                "beginCaptures": {
                  "0": {
                    "name": "meta.preprocessor.c"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.c"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.c"
                  }
                },
                "contentName": "comment.block.preprocessor.elif-branch.c",
                "end": "(?=^\\s*((#)\\s*endif\\b))",
                "patterns": [
                  {
                    "include": "#disabled"
                  },
                  {
                    "include": "#pragma-mark"
                  }
                ]
              },
              {
                "begin": "^\\s*((#)\\s*(elif)\\b)",
                "beginCaptures": {
                  "0": {
                    "name": "meta.preprocessor.c"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.c"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.c"
                  }
                },
                "contentName": "comment.block.preprocessor.elif-branch.c",
                "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                "patterns": [
                  {
                    "include": "#disabled"
                  },
                  {
                    "include": "#pragma-mark"
                  }
                ]
              },
              {
                "include": "$self"
              }
            ]
          }
        ]
      },
      "preprocessor-rule-enabled-elif-block": {
        "begin": "^\\s*((#)\\s*elif\\b)(?=\\s*\\(*\\b0*1\\b\\)*\\s*(?:$|//|/\\*))",
        "beginCaptures": {
          "0": {
            "name": "meta.preprocessor.c"
          },
          "1": {
            "name": "keyword.control.directive.conditional.c"
          },
          "2": {
            "name": "punctuation.definition.directive.c"
          }
        },
        "end": "(?=^\\s*((#)\\s*endif\\b))",
        "patterns": [
          {
            "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
            "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
            "name": "meta.preprocessor.c",
            "patterns": [
              {
                "include": "#preprocessor-rule-conditional-line"
              }
            ]
          },
          {
            "include": "#comments"
          },
          {
            "begin": "\\n",
            "end": "(?=^\\s*((#)\\s*(?:endif)\\b))",
            "patterns": [
              {
                "begin": "^\\s*((#)\\s*(else)\\b)",
                "beginCaptures": {
                  "0": {
                    "name": "meta.preprocessor.c"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.c"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.c"
                  }
                },
                "contentName": "comment.block.preprocessor.elif-branch.in-block.c",
                "end": "(?=^\\s*((#)\\s*endif\\b))",
                "patterns": [
                  {
                    "include": "#disabled"
                  },
                  {
                    "include": "#pragma-mark"
                  }
                ]
              },
              {
                "begin": "^\\s*((#)\\s*(elif)\\b)",
                "beginCaptures": {
                  "0": {
                    "name": "meta.preprocessor.c"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.c"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.c"
                  }
                },
                "contentName": "comment.block.preprocessor.elif-branch.c",
                "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                "patterns": [
                  {
                    "include": "#disabled"
                  },
                  {
                    "include": "#pragma-mark"
                  }
                ]
              },
              {
                "include": "#block_innards"
              }
            ]
          }
        ]
      },
      "preprocessor-rule-enabled-else": {
        "begin": "^\\s*((#)\\s*else\\b)",
        "beginCaptures": {
          "0": {
            "name": "meta.preprocessor.c"
          },
          "1": {
            "name": "keyword.control.directive.conditional.c"
          },
          "2": {
            "name": "punctuation.definition.directive.c"
          }
        },
        "end": "(?=^\\s*((#)\\s*endif\\b))",
        "patterns": [
          {
            "include": "$self"
          }
        ]
      },
      "preprocessor-rule-enabled-else-block": {
        "begin": "^\\s*((#)\\s*else\\b)",
        "beginCaptures": {
          "0": {
            "name": "meta.preprocessor.c"
          },
          "1": {
            "name": "keyword.control.directive.conditional.c"
          },
          "2": {
            "name": "punctuation.definition.directive.c"
          }
        },
        "end": "(?=^\\s*((#)\\s*endif\\b))",
        "patterns": [
          {
            "include": "#block_innards"
          }
        ]
      },
      "probably_a_parameter": {
        "captures": {
          "1": {
            "name": "variable.parameter.probably.c"
          }
        },
        "match": "(?<=(?:[a-zA-Z_0-9] |[&*>\\]\\)]))\\s*([a-zA-Z_]\\w*)\\s*(?=(?:\\[\\]\\s*)?(?:,|\\)))"
      },
      "static_assert": {
        "begin": "((?>(?:(?:(?>(?<!\\s)\\s+)|(\\/\\*)((?>(?:[^\\*]|(?>\\*+)[^\\/])*)((?>\\*+)\\/)))+|(?:(?:(?:(?:\\b|(?<=\\W))|(?=\\W))|\\A)|\\Z))))((?<!\\w)static_assert|_Static_assert(?!\\w))((?>(?:(?:(?>(?<!\\s)\\s+)|(\\/\\*)((?>(?:[^\\*]|(?>\\*+)[^\\/])*)((?>\\*+)\\/)))+|(?:(?:(?:(?:\\b|(?<=\\W))|(?=\\W))|\\A)|\\Z))))(\\()",
        "beginCaptures": {
          "1": {
            "patterns": [
              {
                "include": "#inline_comment"
              }
            ]
          },
          "2": {
            "name": "comment.block.c punctuation.definition.comment.begin.c"
          },
          "3": {
            "name": "comment.block.c"
          },
          "4": {
            "patterns": [
              {
                "match": "\\*\\/",
                "name": "comment.block.c punctuation.definition.comment.end.c"
              },
              {
                "match": "\\*",
                "name": "comment.block.c"
              }
            ]
          },
          "5": {
            "name": "keyword.other.static_assert.c"
          },
          "6": {
            "patterns": [
              {
                "include": "#inline_comment"
              }
            ]
          },
          "7": {
            "name": "comment.block.c punctuation.definition.comment.begin.c"
          },
          "8": {
            "name": "comment.block.c"
          },
          "9": {
            "patterns": [
              {
                "match": "\\*\\/",
                "name": "comment.block.c punctuation.definition.comment.end.c"
              },
              {
                "match": "\\*",
                "name": "comment.block.c"
              }
            ]
          },
          "10": {
            "name": "punctuation.section.arguments.begin.bracket.round.static_assert.c"
          }
        },
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "punctuation.section.arguments.end.bracket.round.static_assert.c"
          }
        },
        "patterns": [
          {
            "begin": "(,)\\s*(?=(?:L|u8|u|U\\s*\\\")?)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.separator.delimiter.comma.c"
              }
            },
            "end": "(?=\\))",
            "name": "meta.static_assert.message.c",
            "patterns": [
              {
                "include": "#string_context"
              }
            ]
          },
          {
            "include": "#evaluation_context"
          }
        ]
      },
      "storage_types": {
        "patterns": [
          {
            "match": "(?-mix:(?<!\\w)(?:unsigned|signed|double|_Bool|short|float|long|void|char|bool|int)(?!\\w))",
            "name": "storage.type.built-in.primitive.c"
          },
          {
            "match": "(?-mix:(?<!\\w)(?:atomic_uint_least64_t|atomic_uint_least16_t|atomic_uint_least32_t|pthread_rwlockattr_t|atomic_uint_fast64_t|atomic_uint_fast32_t|atomic_uint_fast16_t|atomic_int_least64_t|atomic_int_least32_t|atomic_int_least16_t|atomic_uint_least8_t|atomic_uint_fast8_t|atomic_int_least8_t|atomic_int_fast16_t|pthread_mutexattr_t|atomic_int_fast32_t|atomic_int_fast64_t|atomic_int_fast8_t|pthread_condattr_t|atomic_ptrdiff_t|pthread_rwlock_t|atomic_uintptr_t|atomic_uintmax_t|atomic_intmax_t|atomic_intptr_t|atomic_char32_t|atomic_char16_t|pthread_mutex_t|pthread_cond_t|atomic_wchar_t|uint_least64_t|uint_least32_t|uint_least16_t|pthread_once_t|pthread_attr_t|int_least32_t|pthread_key_t|int_least16_t|int_least64_t|uint_least8_t|uint_fast16_t|uint_fast32_t|uint_fast64_t|atomic_ushort|atomic_ullong|atomic_size_t|int_fast16_t|int_fast64_t|uint_fast8_t|atomic_short|atomic_uchar|atomic_schar|int_least8_t|memory_order|atomic_llong|atomic_ulong|int_fast32_t|atomic_long|atomic_uint|atomic_char|int_fast8_t|suseconds_t|atomic_bool|atomic_int|_Imaginary|useconds_t|in_port_t|uintmax_t|uintmax_t|pthread_t|blksize_t|in_addr_t|uintptr_t|blkcnt_t|uint16_t|uint32_t|uint64_t|u_quad_t|_Complex|intptr_t|intmax_t|intmax_t|segsz_t|u_short|nlink_t|uint8_t|int64_t|int32_t|int16_t|fixpt_t|daddr_t|caddr_t|qaddr_t|ssize_t|clock_t|swblk_t|u_long|mode_t|int8_t|time_t|ushort|u_char|quad_t|size_t|pid_t|gid_t|uid_t|dev_t|div_t|off_t|u_int|key_t|ino_t|uint|id_t|id_t)(?!\\w))",
            "name": "storage.type.built-in.c"
          },
          {
            "match": "(?-mix:\\b(enum|struct|union)\\b)",
            "name": "storage.type.$1.c"
          },
          {
            "begin": "(\\b(?:__asm__|asm)\\b)\\s*((?:volatile)?)",
            "beginCaptures": {
              "1": {
                "name": "storage.type.asm.c"
              },
              "2": {
                "name": "storage.modifier.c"
              }
            },
            "end": "(?!\\G)",
            "name": "meta.asm.c",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "patterns": [
                      {
                        "include": "#inline_comment"
                      }
                    ]
                  },
                  "2": {
                    "name": "comment.block.c punctuation.definition.comment.begin.c"
                  },
                  "3": {
                    "name": "comment.block.c"
                  },
                  "4": {
                    "patterns": [
                      {
                        "match": "\\*\\/",
                        "name": "comment.block.c punctuation.definition.comment.end.c"
                      },
                      {
                        "match": "\\*",
                        "name": "comment.block.c"
                      }
                    ]
                  }
                },
                "match": "(?:^)((?:(?:(?>\\s+)|(\\/\\*)((?>(?:[^\\*]|(?>\\*+)[^\\/])*)((?>\\*+)\\/)))+?|(?:(?:(?:(?:\\b|(?<=\\W))|(?=\\W))|\\A)|\\Z)))(?:\\n|$)"
              },
              {
                "include": "#comments"
              },
              {
                "begin": "(((?:(?:(?>\\s+)|(\\/\\*)((?>(?:[^\\*]|(?>\\*+)[^\\/])*)((?>\\*+)\\/)))+?|(?:(?:(?:(?:\\b|(?<=\\W))|(?=\\W))|\\A)|\\Z)))\\()",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.section.parens.begin.bracket.round.assembly.c"
                  },
                  "2": {
                    "patterns": [
                      {
                        "include": "#inline_comment"
                      }
                    ]
                  },
                  "3": {
                    "name": "comment.block.c punctuation.definition.comment.begin.c"
                  },
                  "4": {
                    "name": "comment.block.c"
                  },
                  "5": {
                    "patterns": [
                      {
                        "match": "\\*\\/",
                        "name": "comment.block.c punctuation.definition.comment.end.c"
                      },
                      {
                        "match": "\\*",
                        "name": "comment.block.c"
                      }
                    ]
                  }
                },
                "end": "(\\))",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.section.parens.end.bracket.round.assembly.c"
                  }
                },
                "patterns": [
                  {
                    "begin": "(R?)(\")",
                    "beginCaptures": {
                      "1": {
                        "name": "meta.encoding.c"
                      },
                      "2": {
                        "name": "punctuation.definition.string.begin.assembly.c"
                      }
                    },
                    "contentName": "meta.embedded.assembly.c",
                    "end": "(\")",
                    "endCaptures": {
                      "1": {
                        "name": "punctuation.definition.string.end.assembly.c"
                      }
                    },
                    "name": "string.quoted.double.c",
                    "patterns": [
                      {
                        "include": "source.asm"
                      },
                      {
                        "include": "source.x86"
                      },
                      {
                        "include": "source.x86_64"
                      },
                      {
                        "include": "source.arm"
                      },
                      {
                        "include": "#backslash_escapes"
                      },
                      {
                        "include": "#string_escaped_char"
                      }
                    ]
                  },
                  {
                    "begin": "(\\()",
                    "beginCaptures": {
                      "1": {
                        "name": "punctuation.section.parens.begin.bracket.round.assembly.inner.c"
                      }
                    },
                    "end": "(\\))",
                    "endCaptures": {
                      "1": {
                        "name": "punctuation.section.parens.end.bracket.round.assembly.inner.c"
                      }
                    },
                    "patterns": [
                      {
                        "include": "#evaluation_context"
                      }
                    ]
                  },
                  {
                    "captures": {
                      "1": {
                        "patterns": [
                          {
                            "include": "#inline_comment"
                          }
                        ]
                      },
                      "2": {
                        "name": "comment.block.c punctuation.definition.comment.begin.c"
                      },
                      "3": {
                        "name": "comment.block.c"
                      },
                      "4": {
                        "patterns": [
                          {
                            "match": "\\*\\/",
                            "name": "comment.block.c punctuation.definition.comment.end.c"
                          },
                          {
                            "match": "\\*",
                            "name": "comment.block.c"
                          }
                        ]
                      },
                      "5": {
                        "name": "variable.other.asm.label.c"
                      },
                      "6": {
                        "patterns": [
                          {
                            "include": "#inline_comment"
                          }
                        ]
                      },
                      "7": {
                        "name": "comment.block.c punctuation.definition.comment.begin.c"
                      },
                      "8": {
                        "name": "comment.block.c"
                      },
                      "9": {
                        "patterns": [
                          {
                            "match": "\\*\\/",
                            "name": "comment.block.c punctuation.definition.comment.end.c"
                          },
                          {
                            "match": "\\*",
                            "name": "comment.block.c"
                          }
                        ]
                      }
                    },
                    "match": "\\[((?:(?:(?>\\s+)|(\\/\\*)((?>(?:[^\\*]|(?>\\*+)[^\\/])*)((?>\\*+)\\/)))+?|(?:(?:(?:(?:\\b|(?<=\\W))|(?=\\W))|\\A)|\\Z)))([a-zA-Z_]\\w*)((?:(?:(?>\\s+)|(\\/\\*)((?>(?:[^\\*]|(?>\\*+)[^\\/])*)((?>\\*+)\\/)))+?|(?:(?:(?:(?:\\b|(?<=\\W))|(?=\\W))|\\A)|\\Z)))\\]"
                  },
                  {
                    "match": ":",
                    "name": "punctuation.separator.delimiter.colon.assembly.c"
                  },
                  {
                    "include": "#comments"
                  }
                ]
              }
            ]
          }
        ]
      },
      "string_escaped_char": {
        "patterns": [
          {
            "match": "\\\\(\\\\|[abefnprtv'\"?]|[0-3]\\d{,2}|[4-7]\\d?|x[a-fA-F0-9]{,2}|u[a-fA-F0-9]{,4}|U[a-fA-F0-9]{,8})",
            "name": "constant.character.escape.c"
          },
          {
            "match": "\\\\.",
            "name": "invalid.illegal.unknown-escape.c"
          }
        ]
      },
      "string_placeholder": {
        "patterns": [
          {
            "match": "%(\\d+\\$)?[#0\\- +']*[,;:_]?((-?\\d+)|\\*(-?\\d+\\$)?)?(\\.((-?\\d+)|\\*(-?\\d+\\$)?)?)?(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?[diouxXDOUeEfFgGaACcSspn%]",
            "name": "constant.other.placeholder.c"
          },
          {
            "captures": {
              "1": {
                "name": "invalid.illegal.placeholder.c"
              }
            },
            "match": "(%)(?!\"\\s*(PRI|SCN))"
          }
        ]
      },
      "strings": {
        "patterns": [
          {
            "begin": "\"",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.c"
              }
            },
            "end": "\"",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.c"
              }
            },
            "name": "string.quoted.double.c",
            "patterns": [
              {
                "include": "#string_escaped_char"
              },
              {
                "include": "#string_placeholder"
              },
              {
                "include": "#line_continuation_character"
              }
            ]
          },
          {
            "begin": "'",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.c"
              }
            },
            "end": "'",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.c"
              }
            },
            "name": "string.quoted.single.c",
            "patterns": [
              {
                "include": "#string_escaped_char"
              },
              {
                "include": "#line_continuation_character"
              }
            ]
          }
        ]
      },
      "switch_conditional_parentheses": {
        "begin": "((?>(?:(?:(?>(?<!\\s)\\s+)|(\\/\\*)((?>(?:[^\\*]|(?>\\*+)[^\\/])*)((?>\\*+)\\/)))+|(?:(?:(?:(?:\\b|(?<=\\W))|(?=\\W))|\\A)|\\Z))))(\\()",
        "beginCaptures": {
          "1": {
            "patterns": [
              {
                "include": "#inline_comment"
              }
            ]
          },
          "2": {
            "name": "comment.block.c punctuation.definition.comment.begin.c"
          },
          "3": {
            "name": "comment.block.c"
          },
          "4": {
            "patterns": [
              {
                "match": "\\*\\/",
                "name": "comment.block.c punctuation.definition.comment.end.c"
              },
              {
                "match": "\\*",
                "name": "comment.block.c"
              }
            ]
          },
          "5": {
            "name": "punctuation.section.parens.begin.bracket.round.conditional.switch.c"
          }
        },
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "punctuation.section.parens.end.bracket.round.conditional.switch.c"
          }
        },
        "name": "meta.conditional.switch.c",
        "patterns": [
          {
            "include": "#evaluation_context"
          },
          {
            "include": "#c_conditional_context"
          }
        ]
      },
      "switch_statement": {
        "begin": "(((?>(?:(?:(?>(?<!\\s)\\s+)|(\\/\\*)((?>(?:[^\\*]|(?>\\*+)[^\\/])*)((?>\\*+)\\/)))+|(?:(?:(?:(?:\\b|(?<=\\W))|(?=\\W))|\\A)|\\Z))))((?<!\\w)switch(?!\\w)))",
        "beginCaptures": {
          "1": {
            "name": "meta.head.switch.c"
          },
          "2": {
            "patterns": [
              {
                "include": "#inline_comment"
              }
            ]
          },
          "3": {
            "name": "comment.block.c punctuation.definition.comment.begin.c"
          },
          "4": {
            "name": "comment.block.c"
          },
          "5": {
            "patterns": [
              {
                "match": "\\*\\/",
                "name": "comment.block.c punctuation.definition.comment.end.c"
              },
              {
                "match": "\\*",
                "name": "comment.block.c"
              }
            ]
          },
          "6": {
            "name": "keyword.control.switch.c"
          }
        },
        "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))",
        "name": "meta.block.switch.c",
        "patterns": [
          {
            "begin": "\\G ?",
            "end": "((?:\\{|<%|\\?\\?<|(?=;)))",
            "endCaptures": {
              "1": {
                "name": "punctuation.section.block.begin.bracket.curly.switch.c"
              }
            },
            "name": "meta.head.switch.c",
            "patterns": [
              {
                "include": "#switch_conditional_parentheses"
              },
              {
                "include": "$self"
              }
            ]
          },
          {
            "begin": "(?<=\\{|<%|\\?\\?<)",
            "end": "(\\}|%>|\\?\\?>)",
            "endCaptures": {
              "1": {
                "name": "punctuation.section.block.end.bracket.curly.switch.c"
              }
            },
            "name": "meta.body.switch.c",
            "patterns": [
              {
                "include": "#default_statement"
              },
              {
                "include": "#case_statement"
              },
              {
                "include": "$self"
              },
              {
                "include": "#block_innards"
              }
            ]
          },
          {
            "begin": "(?<=\\}|%>|\\?\\?>)[\\s\\n]*",
            "end": "[\\s\\n]*(?=;)",
            "name": "meta.tail.switch.c",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          }
        ]
      },
      "vararg_ellipses": {
        "match": "(?<!\\.)\\.\\.\\.(?!\\.)",
        "name": "punctuation.vararg-ellipses.c"
      }
    },
    "scopeName": "source.c"
  },
  {
    "displayName": "GLSL",
    "fileTypes": [
      "vs",
      "fs",
      "gs",
      "vsh",
      "fsh",
      "gsh",
      "vshader",
      "fshader",
      "gshader",
      "vert",
      "frag",
      "geom",
      "f.glsl",
      "v.glsl",
      "g.glsl"
    ],
    "foldingStartMarker": "/\\*\\*|\\{\\s*$",
    "foldingStopMarker": "\\*\\*/|^\\s*\\}",
    "name": "glsl",
    "patterns": [
      {
        "match": "\\b(break|case|continue|default|discard|do|else|for|if|return|switch|while)\\b",
        "name": "keyword.control.glsl"
      },
      {
        "match": "\\b(void|bool|int|uint|float|vec2|vec3|vec4|bvec2|bvec3|bvec4|ivec2|ivec2|ivec3|uvec2|uvec2|uvec3|mat2|mat3|mat4|mat2x2|mat2x3|mat2x4|mat3x2|mat3x3|mat3x4|mat4x2|mat4x3|mat4x4|sampler[1|2|3]D|samplerCube|sampler2DRect|sampler[1|2]DShadow|sampler2DRectShadow|sampler[1|2]DArray|sampler[1|2]DArrayShadow|samplerBuffer|sampler2DMS|sampler2DMSArray|struct|isampler[1|2|3]D|isamplerCube|isampler2DRect|isampler[1|2]DArray|isamplerBuffer|isampler2DMS|isampler2DMSArray|usampler[1|2|3]D|usamplerCube|usampler2DRect|usampler[1|2]DArray|usamplerBuffer|usampler2DMS|usampler2DMSArray)\\b",
        "name": "storage.type.glsl"
      },
      {
        "match": "\\b(attribute|centroid|const|flat|in|inout|invariant|noperspective|out|smooth|uniform|varying)\\b",
        "name": "storage.modifier.glsl"
      },
      {
        "match": "\\b(gl_BackColor|gl_BackLightModelProduct|gl_BackLightProduct|gl_BackMaterial|gl_BackSecondaryColor|gl_ClipDistance|gl_ClipPlane|gl_ClipVertex|gl_Color|gl_DepthRange|gl_DepthRangeParameters|gl_EyePlaneQ|gl_EyePlaneR|gl_EyePlaneS|gl_EyePlaneT|gl_Fog|gl_FogCoord|gl_FogFragCoord|gl_FogParameters|gl_FragColor|gl_FragCoord|gl_FragDat|gl_FragDept|gl_FrontColor|gl_FrontFacing|gl_FrontLightModelProduct|gl_FrontLightProduct|gl_FrontMaterial|gl_FrontSecondaryColor|gl_InstanceID|gl_Layer|gl_LightModel|gl_LightModelParameters|gl_LightModelProducts|gl_LightProducts|gl_LightSource|gl_LightSourceParameters|gl_MaterialParameters|gl_ModelViewMatrix|gl_ModelViewMatrixInverse|gl_ModelViewMatrixInverseTranspose|gl_ModelViewMatrixTranspose|gl_ModelViewProjectionMatrix|gl_ModelViewProjectionMatrixInverse|gl_ModelViewProjectionMatrixInverseTranspose|gl_ModelViewProjectionMatrixTranspose|gl_MultiTexCoord[0-7]|gl_Normal|gl_NormalMatrix|gl_NormalScale|gl_ObjectPlaneQ|gl_ObjectPlaneR|gl_ObjectPlaneS|gl_ObjectPlaneT|gl_Point|gl_PointCoord|gl_PointParameters|gl_PointSize|gl_Position|gl_PrimitiveIDIn|gl_ProjectionMatrix|gl_ProjectionMatrixInverse|gl_ProjectionMatrixInverseTranspose|gl_ProjectionMatrixTranspose|gl_SecondaryColor|gl_TexCoord|gl_TextureEnvColor|gl_TextureMatrix|gl_TextureMatrixInverse|gl_TextureMatrixInverseTranspose|gl_TextureMatrixTranspose|gl_Vertex|gl_VertexIDh)\\b",
        "name": "support.variable.glsl"
      },
      {
        "match": "\\b(gl_MaxClipPlanes|gl_MaxCombinedTextureImageUnits|gl_MaxDrawBuffers|gl_MaxFragmentUniformComponents|gl_MaxLights|gl_MaxTextureCoords|gl_MaxTextureImageUnits|gl_MaxTextureUnits|gl_MaxVaryingFloats|gl_MaxVertexAttribs|gl_MaxVertexTextureImageUnits|gl_MaxVertexUniformComponents)\\b",
        "name": "support.constant.glsl"
      },
      {
        "match": "\\b(abs|acos|all|any|asin|atan|ceil|clamp|cos|cross|degrees|dFdx|dFdy|distance|dot|equal|exp|exp2|faceforward|floor|fract|ftransform|fwidth|greaterThan|greaterThanEqual|inversesqrt|length|lessThan|lessThanEqual|log|log2|matrixCompMult|max|min|mix|mod|noise[1-4]|normalize|not|notEqual|outerProduct|pow|radians|reflect|refract|shadow1D|shadow1DLod|shadow1DProj|shadow1DProjLod|shadow2D|shadow2DLod|shadow2DProj|shadow2DProjLod|sign|sin|smoothstep|sqrt|step|tan|texture1D|texture1DLod|texture1DProj|texture1DProjLod|texture2D|texture2DLod|texture2DProj|texture2DProjLod|texture3D|texture3DLod|texture3DProj|texture3DProjLod|textureCube|textureCubeLod|transpose)\\b",
        "name": "support.function.glsl"
      },
      {
        "match": "\\b(asm|double|enum|extern|goto|inline|long|short|sizeof|static|typedef|union|unsigned|volatile)\\b",
        "name": "invalid.illegal.glsl"
      },
      {
        "include": "source.c"
      }
    ],
    "scopeName": "source.glsl",
    "embeddedLangs": [
      "c"
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
    "fileTypes": [
      "js",
      "jsx",
      "ts",
      "tsx",
      "html",
      "vue",
      "svelte",
      "php",
      "res"
    ],
    "injectTo": [
      "source.ts",
      "source.js"
    ],
    "injectionSelector": "L:source.js -comment -string, L:source.js -comment -string, L:source.jsx -comment -string,  L:source.js.jsx -comment -string, L:source.ts -comment -string, L:source.tsx -comment -string, L:source.rescript -comment -string",
    "injections": {
      "L:source": {
        "patterns": [
          {
            "match": "<",
            "name": "invalid.illegal.bad-angle-bracket.html"
          }
        ]
      }
    },
    "name": "es-tag-glsl",
    "patterns": [
      {
        "begin": "(?i)(\\s?\\/\\*\\s?(glsl|inline-glsl)\\s?\\*\\/\\s?)(`)",
        "beginCaptures": {
          "1": {
            "name": "comment.block"
          }
        },
        "end": "(`)",
        "patterns": [
          {
            "include": "source.ts#template-substitution-element"
          },
          {
            "include": "source.glsl"
          },
          {
            "include": "inline.es6-htmlx#template"
          }
        ]
      },
      {
        "begin": "(?i)(\\s*(glsl|inline-glsl))(`)",
        "beginCaptures": {
          "1": {
            "name": "comment.block"
          }
        },
        "end": "(`)",
        "patterns": [
          {
            "include": "source.ts#template-substitution-element"
          },
          {
            "include": "source.glsl"
          },
          {
            "include": "inline.es6-htmlx#template"
          },
          {
            "include": "string.quoted.other.template.js"
          }
        ]
      },
      {
        "begin": "(?i)(?<=\\s|\\,|\\=|\\:|\\(|\\$\\()\\s{0,}(((\\/\\*)|(\\/\\/))\\s?(glsl|inline-glsl)[ ]{0,1000}\\*?\\/?)[ ]{0,1000}$",
        "beginCaptures": {
          "1": {
            "name": "comment.line"
          }
        },
        "end": "(`).*",
        "patterns": [
          {
            "begin": "(\\G)",
            "end": "(`)"
          },
          {
            "include": "source.ts#template-substitution-element"
          },
          {
            "include": "source.glsl"
          }
        ]
      },
      {
        "begin": "(\\${)",
        "beginCaptures": {
          "1": {
            "name": "entity.name.tag"
          }
        },
        "end": "(})",
        "endCaptures": {
          "1": {
            "name": "entity.name.tag"
          }
        },
        "patterns": [
          {
            "include": "source.ts#template-substitution-element"
          },
          {
            "include": "source.js"
          }
        ]
      }
    ],
    "scopeName": "inline.es6-glsl",
    "embeddedLangs": [
      "typescript",
      "glsl",
      "javascript"
    ]
  }
])