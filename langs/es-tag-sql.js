/** Shiki Language: es-tag-sql */
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
    "injectionSelector": "L:source.js -comment -string, L:source.jsx -comment -string,  L:source.js.jsx -comment -string, L:source.ts -comment -string, L:source.tsx -comment -string, L:source.rescript -comment -string",
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
    "name": "es-tag-sql",
    "patterns": [
      {
        "begin": "(?i)\\b(\\w+\\.sql)\\s*(`)",
        "beginCaptures": {
          "1": {
            "name": "variable.parameter"
          }
        },
        "end": "(`)",
        "patterns": [
          {
            "include": "source.ts#template-substitution-element"
          },
          {
            "include": "source.ts#string-character-escape"
          },
          {
            "include": "source.sql"
          },
          {
            "include": "source.plpgsql.postgres"
          },
          {
            "match": "."
          }
        ]
      },
      {
        "begin": "(?i)(\\s?\\/?\\*?\\s?(sql|inline-sql)\\s?\\*?\\/?\\s?)(`)",
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
            "include": "source.ts#string-character-escape"
          },
          {
            "include": "source.sql"
          },
          {
            "include": "source.plpgsql.postgres"
          },
          {
            "match": "."
          }
        ]
      },
      {
        "begin": "(?i)(?<=\\s|\\,|\\=|\\:|\\(|\\$\\()\\s{0,}(((\\/\\*)|(\\/\\/))\\s?(sql|inline-sql)[ ]{0,1000}\\*?\\/?)[ ]{0,1000}$",
        "beginCaptures": {
          "1": {
            "name": "comment.line"
          }
        },
        "end": "(`)",
        "patterns": [
          {
            "begin": "(\\G)",
            "end": "(`)"
          },
          {
            "include": "source.ts#template-substitution-element"
          },
          {
            "include": "source.ts#string-character-escape"
          },
          {
            "include": "source.sql"
          },
          {
            "include": "source.plpgsql.postgres"
          },
          {
            "match": "."
          }
        ]
      }
    ],
    "scopeName": "inline.es6-sql",
    "embeddedLangs": [
      "typescript",
      "sql"
    ]
  }
])