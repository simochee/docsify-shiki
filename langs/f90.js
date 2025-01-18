/** Shiki Language: f90 */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push([
  {
    "displayName": "Fortran (Free Form)",
    "fileTypes": [
      "f90",
      "F90",
      "f95",
      "F95",
      "f03",
      "F03",
      "f08",
      "F08",
      "f18",
      "F18",
      "fpp",
      "FPP",
      ".pf",
      ".PF"
    ],
    "firstLineMatch": "(?i)-[*]- mode: fortran free -[*]-",
    "injections": {
      "source.fortran.free - ( string | comment | meta.preprocessor )": {
        "patterns": [
          {
            "include": "#line-continuation-operator"
          },
          {
            "include": "#preprocessor"
          }
        ]
      },
      "string.quoted.double.fortran": {
        "patterns": [
          {
            "include": "#string-line-continuation-operator"
          }
        ]
      },
      "string.quoted.single.fortran": {
        "patterns": [
          {
            "include": "#string-line-continuation-operator"
          }
        ]
      }
    },
    "name": "fortran-free-form",
    "patterns": [
      {
        "include": "#preprocessor"
      },
      {
        "include": "#comments"
      },
      {
        "include": "#constants"
      },
      {
        "include": "#operators"
      },
      {
        "include": "#array-constructor"
      },
      {
        "include": "#parentheses"
      },
      {
        "include": "#include-statement"
      },
      {
        "include": "#import-statement"
      },
      {
        "include": "#block-data-definition"
      },
      {
        "include": "#function-definition"
      },
      {
        "include": "#module-definition"
      },
      {
        "include": "#program-definition"
      },
      {
        "include": "#submodule-definition"
      },
      {
        "include": "#subroutine-definition"
      },
      {
        "include": "#procedure-definition"
      },
      {
        "include": "#derived-type-definition"
      },
      {
        "include": "#enum-block-construct"
      },
      {
        "include": "#interface-block-constructs"
      },
      {
        "include": "#procedure-specification-statement"
      },
      {
        "include": "#type-specification-statements"
      },
      {
        "include": "#specification-statements"
      },
      {
        "include": "#control-constructs"
      },
      {
        "include": "#control-statements"
      },
      {
        "include": "#execution-statements"
      },
      {
        "include": "#intrinsic-functions"
      },
      {
        "include": "#variable"
      }
    ],
    "repository": {
      "IO-item-list": {
        "begin": "(?i)(?=\\s*[a-z0-9\"'])",
        "comment": "Name list.",
        "contentName": "meta.name-list.fortran",
        "end": "(?=[\\);!\\n])",
        "patterns": [
          {
            "include": "#constants"
          },
          {
            "include": "#operators"
          },
          {
            "include": "#intrinsic-functions"
          },
          {
            "include": "#array-constructor"
          },
          {
            "include": "#parentheses"
          },
          {
            "include": "#brackets"
          },
          {
            "include": "#assignment-keyword"
          },
          {
            "include": "#operator-keyword"
          },
          {
            "include": "#variable"
          }
        ]
      },
      "IO-keywords": {
        "begin": "(?i)\\G\\s*\\b(?:(read)|(write))\\s*(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.generic-spec.read.fortran"
          },
          "2": {
            "name": "keyword.control.generic-spec.write.fortran"
          },
          "3": {
            "name": "punctuation.parentheses.left.fortran"
          }
        },
        "comment": "IO generic specification.",
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "punctuation.parentheses.right.fortran"
          }
        },
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "keyword.control.generic-spec.formatted.fortran"
              },
              "2": {
                "name": "keyword.control.generic-spec.unformatted.fortran"
              }
            },
            "match": "(?i)\\G\\s*\\b(?:(formatted)|(unformatted))\\b"
          },
          {
            "include": "#invalid-word"
          }
        ]
      },
      "IO-statements": {
        "patterns": [
          {
            "begin": "(?ix)\\b(?:(backspace)|(close)|(endfile)|(format)|(inquire)|(open)|(read)|(rewind)|(write))\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.backspace.fortran"
              },
              "2": {
                "name": "keyword.control.close.fortran"
              },
              "3": {
                "name": "keyword.control.endfile.fortran"
              },
              "4": {
                "name": "keyword.control.format.fortran"
              },
              "5": {
                "name": "keyword.control.inquire.fortran"
              },
              "6": {
                "name": "keyword.control.open.fortran"
              },
              "7": {
                "name": "keyword.control.read.fortran"
              },
              "8": {
                "name": "keyword.control.rewind.fortran"
              },
              "9": {
                "name": "keyword.control.write.fortran"
              },
              "10": {
                "name": "punctuation.parentheses.left.fortran"
              }
            },
            "comment": "Introduced in the Fortran 1977 standard.",
            "end": "(?=[;!\\n])",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "name": "meta.statement.IO.fortran",
            "patterns": [
              {
                "include": "#parentheses-dummy-variables"
              },
              {
                "include": "#IO-item-list"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "keyword.control.backspace.fortran"
              },
              "2": {
                "name": "keyword.control.endfile.fortran"
              },
              "3": {
                "name": "keyword.control.format.fortran"
              },
              "4": {
                "name": "keyword.control.print.fortran"
              },
              "5": {
                "name": "keyword.control.read.fortran"
              },
              "6": {
                "name": "keyword.control.rewind.fortran"
              }
            },
            "comment": "Introduced in the Fortran 1977 standard.",
            "match": "(?i)\\b(?:(backspace)|(endfile)|(format)|(print)|(read)|(rewind))\\b"
          },
          {
            "begin": "(?i)\\b(?:(flush)|(wait))\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.flush.fortran"
              },
              "2": {
                "name": "keyword.control.wait.fortran"
              },
              "3": {
                "name": "punctuation.parentheses.left.fortran"
              }
            },
            "comment": "Introduced in the Fortran 2003 standard.",
            "end": "(?<!\\G)",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#parentheses-dummy-variables"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "keyword.control.flush.fortran"
              }
            },
            "comment": "Introduced in the Fortran 2003 standard.",
            "match": "(?i)\\b(flush)\\b"
          }
        ]
      },
      "abstract-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.fortran.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2003 standard.",
        "match": "(?i)\\G\\s*\\b(abstract)\\b"
      },
      "abstract-interface-block-construct": {
        "begin": "(?i)\\b(abstract)\\s+(interface)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.attribute.fortran.modern"
          },
          "2": {
            "name": "keyword.control.interface.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2003 standard.",
        "end": "(?i)\\b(end\\s*interface)\\b",
        "endCaptures": {
          "1": {
            "name": "keyword.control.endinterface.fortran.modern"
          }
        },
        "name": "meta.interface.abstract.fortran",
        "patterns": [
          {
            "include": "$base"
          }
        ]
      },
      "access-attribute": {
        "patterns": [
          {
            "include": "#private-attribute"
          },
          {
            "include": "#public-attribute"
          }
        ]
      },
      "allocatable-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.allocatable.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1990 standard.",
        "match": "(?i)\\s*\\b(allocatable)\\b"
      },
      "allocate-statement": {
        "begin": "(?i)\\b(allocate)\\s*(?=\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.allocate.fortran"
          },
          "2": {
            "name": "punctuation.parentheses.left.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1990 standard.",
        "end": "(?<!\\G)",
        "endCaptures": {
          "1": {
            "name": "punctuation.parentheses.right.fortran"
          }
        },
        "name": "meta.statement.allocate.fortran",
        "patterns": [
          {
            "include": "#parentheses-dummy-variables"
          }
        ]
      },
      "arithmetic-operators": {
        "captures": {
          "1": {
            "name": "keyword.operator.subtraction.fortran"
          },
          "2": {
            "name": "keyword.operator.addition.fortran"
          },
          "3": {
            "name": "keyword.operator.division.fortran"
          },
          "4": {
            "name": "keyword.operator.power.fortran"
          },
          "5": {
            "name": "keyword.operator.multiplication.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1977 standard.",
        "match": "(\\-)|(\\+)|\\/(?!\\/|\\=|\\\\)|(\\*\\*)|(\\*)"
      },
      "array-constructor": {
        "begin": "(?=\\s*(\\[|\\(\\/))",
        "end": "(?<!\\G)",
        "name": "meta.contructor.array",
        "patterns": [
          {
            "include": "#brackets"
          },
          {
            "begin": "\\s*(\\(\\/)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.bracket.left.fortran"
              }
            },
            "end": "(\\/\\))",
            "endCaptures": {
              "1": {
                "name": "punctuation.bracket.left.fortran"
              }
            },
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "include": "#constants"
              },
              {
                "include": "#operators"
              },
              {
                "include": "#array-constructor"
              },
              {
                "include": "#parentheses"
              },
              {
                "include": "#intrinsic-functions"
              },
              {
                "include": "#variable"
              }
            ]
          }
        ]
      },
      "assign-statement": {
        "patterns": [
          {
            "begin": "(?i)\\b(assign)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.assign.fortran"
              }
            },
            "comment": "Introduced in the Fortran 1977 standard.",
            "end": "(?=[;!\\n])",
            "name": "meta.statement.control.assign.fortran",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.to.fortran"
                  }
                },
                "match": "(?i)\\s*\\b(to)\\b"
              },
              {
                "include": "$base"
              }
            ]
          }
        ]
      },
      "assignment-keyword": {
        "begin": "(?i)\\G\\s*\\b(assignment)\\s*(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.generic-spec.assignment.fortran"
          },
          "2": {
            "name": "punctuation.parentheses.left.fortran"
          }
        },
        "comment": "Assignment generic specification.",
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "punctuation.parentheses.right.fortran"
          }
        },
        "patterns": [
          {
            "include": "#assignment-operator"
          },
          {
            "include": "#invalid-word"
          }
        ]
      },
      "assignment-operator": {
        "comment": "Introduced in the Fortran 1977 standard.",
        "match": "(?<!\\/|\\=|\\<|\\>)(\\=)(?!\\=|\\>)",
        "name": "keyword.operator.assignment.fortran"
      },
      "associate-construct": {
        "begin": "(?i)\\b(associate)\\b(?=\\s*\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.associate.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2003 standard.",
        "contentName": "meta.block.associate.fortran",
        "end": "(?i)\\b(end\\s*associate)\\b",
        "endCaptures": {
          "1": {
            "name": "keyword.control.endassociate.fortran"
          }
        },
        "patterns": [
          {
            "include": "$base"
          }
        ]
      },
      "asynchronous-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.asynchronous.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2003 standard.",
        "match": "(?i)\\G\\s*\\b(asynchronous)\\b"
      },
      "attribute-specification-statement": {
        "begin": "(?ix)(?=\\b(?:allocatable|asynchronous|contiguous |external|intrinsic|optional|parameter|pointer|private|protected|public|save|target|value|volatile)\\b |(bind|dimension|intent)\\s*\\( |(codimension)\\s*\\[)",
        "end": "(?=[;!\\n])",
        "name": "meta.statement.attribute-specification.fortran",
        "patterns": [
          {
            "include": "#access-attribute"
          },
          {
            "include": "#allocatable-attribute"
          },
          {
            "include": "#asynchronous-attribute"
          },
          {
            "include": "#codimension-attribute"
          },
          {
            "include": "#contiguous-attribute"
          },
          {
            "include": "#dimension-attribute"
          },
          {
            "include": "#external-attribute"
          },
          {
            "include": "#intent-attribute"
          },
          {
            "include": "#intrinsic-attribute"
          },
          {
            "include": "#language-binding-attribute"
          },
          {
            "include": "#optional-attribute"
          },
          {
            "include": "#parameter-attribute"
          },
          {
            "include": "#pointer-attribute"
          },
          {
            "include": "#protected-attribute"
          },
          {
            "include": "#save-attribute"
          },
          {
            "include": "#target-attribute"
          },
          {
            "include": "#value-attribute"
          },
          {
            "include": "#volatile-attribute"
          },
          {
            "begin": "(?=\\s*::)",
            "comment": "Attribute list.",
            "contentName": "meta.attribute-list.normal.fortran",
            "end": "(::)|(?=[;!\\n])",
            "endCaptures": {
              "1": {
                "name": "keyword.operator.double-colon.fortran"
              }
            },
            "patterns": [
              {
                "include": "#invalid-word"
              }
            ]
          },
          {
            "include": "#name-list"
          }
        ]
      },
      "block-construct": {
        "begin": "(?i)\\b(block)\\b(?!\\s*\\bdata\\b)",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.associate.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2008 standard.",
        "contentName": "meta.block.block.fortran",
        "end": "(?i)\\b(end\\s*block)\\b",
        "endCaptures": {
          "1": {
            "name": "keyword.control.endassociate.fortran"
          }
        },
        "patterns": [
          {
            "include": "$base"
          }
        ]
      },
      "block-data-definition": {
        "begin": "(?i)\\b(block\\s*data)\\b(?:\\s+([a-z]\\w*)\\b)?",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.block-data.fortran"
          },
          "2": {
            "name": "entity.name.block-data.fortran"
          }
        },
        "end": "(?ix)\\b(?:(end\\s*block\\s*data)(?:\\s+(\\2))?|(end))\\b (?:\\s*(\\S((?!\\n).)*))?",
        "endCaptures": {
          "1": {
            "name": "keyword.control.end-block-data.fortran"
          },
          "2": {
            "name": "entity.name.block-data.fortran"
          },
          "3": {
            "name": "keyword.control.end-block-data.fortran"
          },
          "4": {
            "name": "invalid.error.block-data-definition.fortran"
          }
        },
        "name": "meta.block-data.fortran",
        "patterns": [
          {
            "include": "$base"
          }
        ]
      },
      "brackets": {
        "begin": "\\s*(\\[)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.bracket.left.fortran"
          }
        },
        "end": "(\\])",
        "endCaptures": {
          "1": {
            "name": "punctuation.bracket.left.fortran"
          }
        },
        "patterns": [
          {
            "include": "#comments"
          },
          {
            "include": "#constants"
          },
          {
            "include": "#operators"
          },
          {
            "include": "#array-constructor"
          },
          {
            "include": "#parentheses"
          },
          {
            "include": "#intrinsic-functions"
          },
          {
            "include": "#variable"
          }
        ]
      },
      "call-statement": {
        "patterns": [
          {
            "begin": "(?i)\\s*\\b(call)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.call.fortran"
              }
            },
            "comment": "Introduced in the Fortran 1977 standard.",
            "end": "(?=[;!\\n])",
            "name": "meta.statement.control.call.fortran",
            "patterns": [
              {
                "begin": "(?ix)\\G\\s*([a-z]\\w*)(%)([a-z]\\w*)\\b\\s*(?=\\()",
                "beginCaptures": {
                  "1": {
                    "name": "variable.other.fortran"
                  },
                  "2": {
                    "name": "keyword.accessor.fortran"
                  },
                  "3": {
                    "name": "entity.name.function.subroutine.fortran"
                  }
                },
                "comment": "type-bound subroutines",
                "end": "(?<!\\G)",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.parentheses.right.fortran"
                  }
                },
                "patterns": [
                  {
                    "include": "#parentheses-dummy-variables"
                  }
                ]
              },
              {
                "include": "#intrinsic-subroutines"
              },
              {
                "begin": "(?i)\\G\\s*\\b([a-z]\\w*)\\s*(?=\\()",
                "beginCaptures": {
                  "1": {
                    "name": "entity.name.function.subroutine.fortran"
                  },
                  "2": {
                    "name": "punctuation.parentheses.left.fortran"
                  }
                },
                "comment": "User defined subroutine.",
                "end": "(?<!\\G)",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.parentheses.right.fortran"
                  }
                },
                "patterns": [
                  {
                    "include": "#parentheses-dummy-variables"
                  }
                ]
              },
              {
                "captures": {
                  "1": {
                    "name": "entity.name.function.subroutine.fortran"
                  }
                },
                "comment": "User defined subroutine.",
                "match": "(?i)\\G\\s*\\b([a-z]\\w*)\\b(?=\\s*[;!\\n])"
              },
              {
                "include": "$base"
              }
            ]
          }
        ]
      },
      "character-type": {
        "comment": "Introduced in the Fortran 1977 standard.",
        "patterns": [
          {
            "begin": "(?i)\\b(character)\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "storage.type.character.fortran"
              },
              "2": {
                "name": "punctuation.parentheses.left.fortran"
              }
            },
            "contentName": "meta.type-spec.fortran",
            "end": "(?<!\\G)",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#parentheses-dummy-variables"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.character.fortran"
              },
              "2": {
                "name": "keyword.operator.multiplication.fortran"
              },
              "3": {
                "name": "constant.numeric.fortran"
              }
            },
            "match": "(?i)\\b(character)\\b(?:\\s*(\\*)\\s*(\\d*))?"
          }
        ]
      },
      "codimension-attribute": {
        "begin": "(?i)\\G\\s*\\b(codimension)(?=\\s*\\[)",
        "beginCaptures": {
          "1": {
            "name": "storage.modifier.codimension.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2008 standard.",
        "end": "(?<!\\G)",
        "patterns": [
          {
            "include": "#brackets"
          }
        ]
      },
      "comments": {
        "begin": "!",
        "end": "(?=\\n)",
        "name": "comment.line.fortran"
      },
      "common-statement": {
        "begin": "(?i)\\b(common)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.common.fortran"
          }
        },
        "end": "(?=[;!\\n])",
        "patterns": [
          {
            "include": "$base"
          }
        ]
      },
      "concurrent-attribute": {
        "begin": "(?i)\\G\\s*\\b(concurrent)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.while.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2003 standard.",
        "end": "(?=[;!\\n])",
        "patterns": [
          {
            "include": "#parentheses"
          },
          {
            "include": "#invalid-word"
          }
        ]
      },
      "constants": {
        "patterns": [
          {
            "include": "#logical-constant"
          },
          {
            "include": "#numeric-constant"
          },
          {
            "include": "#string-constant"
          }
        ]
      },
      "contiguous-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.contigous.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2008 standard.",
        "match": "(?i)\\G\\s*\\b(contiguous)\\b"
      },
      "continue-statement": {
        "patterns": [
          {
            "begin": "(?i)\\s*\\b(continue)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.continue.fortran"
              }
            },
            "comment": "Introduced in the Fortran 1977 standard.",
            "end": "(?=[;!\\n])",
            "name": "meta.statement.control.continue.fortran",
            "patterns": [
              {
                "include": "#invalid-character"
              }
            ]
          }
        ]
      },
      "control-constructs": {
        "patterns": [
          {
            "include": "#named-control-constructs"
          },
          {
            "include": "#unnamed-control-constructs"
          }
        ]
      },
      "control-statements": {
        "comment": "Statements controlling the flow of the program",
        "patterns": [
          {
            "include": "#assign-statement"
          },
          {
            "include": "#call-statement"
          },
          {
            "include": "#continue-statement"
          },
          {
            "include": "#cycle-statement"
          },
          {
            "include": "#entry-statement"
          },
          {
            "include": "#error-stop-statement"
          },
          {
            "include": "#exit-statement"
          },
          {
            "include": "#goto-statement"
          },
          {
            "include": "#pause-statement"
          },
          {
            "include": "#return-statement"
          },
          {
            "include": "#stop-statement"
          },
          {
            "include": "#where-statement"
          },
          {
            "include": "#image-control-statement"
          }
        ]
      },
      "cpp-numeric-constant": {
        "captures": {
          "0": {
            "patterns": [
              {
                "begin": "(?=.)",
                "beginCaptures": {},
                "end": "$",
                "endCaptures": {},
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.other.unit.hexadecimal.cpp"
                      },
                      "2": {
                        "name": "constant.numeric.hexadecimal.cpp",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric.cpp"
                          }
                        ]
                      },
                      "3": {
                        "name": "punctuation.separator.constant.numeric.cpp"
                      },
                      "4": {
                        "name": "constant.numeric.hexadecimal.cpp"
                      },
                      "5": {
                        "name": "constant.numeric.hexadecimal.cpp",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric.cpp"
                          }
                        ]
                      },
                      "6": {
                        "name": "punctuation.separator.constant.numeric.cpp"
                      },
                      "7": {
                        "name": "keyword.other.unit.exponent.hexadecimal.cpp"
                      },
                      "8": {
                        "name": "keyword.operator.plus.exponent.hexadecimal.cpp"
                      },
                      "9": {
                        "name": "keyword.operator.minus.exponent.hexadecimal.cpp"
                      },
                      "10": {
                        "name": "constant.numeric.exponent.hexadecimal.cpp",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric.cpp"
                          }
                        ]
                      },
                      "11": {
                        "name": "keyword.other.unit.suffix.floating-point.cpp"
                      },
                      "12": {
                        "name": "keyword.other.unit.user-defined.cpp"
                      }
                    },
                    "match": "(\\G0[xX])([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)?((?:(?<=[0-9a-fA-F])\\.|\\.(?=[0-9a-fA-F])))([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)?(?:(?<!')([pP])((?:\\+)?)((?:\\-)?)([0-9](?:[0-9]|(?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))*))?([lLfF](?!\\w))?((?:\\w(?<![0-9a-fA-FpP])\\w*)?$)"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "constant.numeric.decimal.cpp",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric.cpp"
                          }
                        ]
                      },
                      "2": {
                        "name": "punctuation.separator.constant.numeric.cpp"
                      },
                      "3": {
                        "name": "constant.numeric.decimal.point.cpp"
                      },
                      "4": {
                        "name": "constant.numeric.decimal.cpp",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric.cpp"
                          }
                        ]
                      },
                      "5": {
                        "name": "punctuation.separator.constant.numeric.cpp"
                      },
                      "6": {
                        "name": "keyword.other.unit.exponent.decimal.cpp"
                      },
                      "7": {
                        "name": "keyword.operator.plus.exponent.decimal.cpp"
                      },
                      "8": {
                        "name": "keyword.operator.minus.exponent.decimal.cpp"
                      },
                      "9": {
                        "name": "constant.numeric.exponent.decimal.cpp",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric.cpp"
                          }
                        ]
                      },
                      "10": {
                        "name": "keyword.other.unit.suffix.floating-point.cpp"
                      },
                      "11": {
                        "name": "keyword.other.unit.user-defined.cpp"
                      }
                    },
                    "match": "\\G(?=[0-9.])(?!0[xXbB])([0-9](?:[0-9]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)?((?:(?<=[0-9])\\.|\\.(?=[0-9])))([0-9](?:[0-9]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)?(?:(?<!')([eE])((?:\\+)?)((?:\\-)?)([0-9](?:[0-9]|(?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))*))?([lLfF](?!\\w))?((?:\\w(?<![0-9eE])\\w*)?$)"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.other.unit.binary.cpp"
                      },
                      "2": {
                        "name": "constant.numeric.binary.cpp",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric.cpp"
                          }
                        ]
                      },
                      "3": {
                        "name": "punctuation.separator.constant.numeric.cpp"
                      },
                      "4": {
                        "name": "keyword.other.unit.suffix.integer.cpp"
                      },
                      "5": {
                        "name": "keyword.other.unit.user-defined.cpp"
                      }
                    },
                    "match": "(\\G0[bB])([01](?:[01]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)((?:[uU]|(?:[uU]ll?)|(?:[uU]LL?)|(?:ll?[uU]?)|(?:LL?[uU]?)|[fF])(?!\\w))?((?:\\w(?<![0-9])\\w*)?$)"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.other.unit.octal.cpp"
                      },
                      "2": {
                        "name": "constant.numeric.octal.cpp",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric.cpp"
                          }
                        ]
                      },
                      "3": {
                        "name": "punctuation.separator.constant.numeric.cpp"
                      },
                      "4": {
                        "name": "keyword.other.unit.suffix.integer.cpp"
                      },
                      "5": {
                        "name": "keyword.other.unit.user-defined.cpp"
                      }
                    },
                    "match": "(\\G0)((?:[0-7]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))+)((?:[uU]|(?:[uU]ll?)|(?:[uU]LL?)|(?:ll?[uU]?)|(?:LL?[uU]?)|[fF])(?!\\w))?((?:\\w(?<![0-9])\\w*)?$)"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.other.unit.hexadecimal.cpp"
                      },
                      "2": {
                        "name": "constant.numeric.hexadecimal.cpp",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric.cpp"
                          }
                        ]
                      },
                      "3": {
                        "name": "punctuation.separator.constant.numeric.cpp"
                      },
                      "4": {
                        "name": "keyword.other.unit.exponent.hexadecimal.cpp"
                      },
                      "5": {
                        "name": "keyword.operator.plus.exponent.hexadecimal.cpp"
                      },
                      "6": {
                        "name": "keyword.operator.minus.exponent.hexadecimal.cpp"
                      },
                      "7": {
                        "name": "constant.numeric.exponent.hexadecimal.cpp",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric.cpp"
                          }
                        ]
                      },
                      "8": {
                        "name": "keyword.other.unit.suffix.integer.cpp"
                      },
                      "9": {
                        "name": "keyword.other.unit.user-defined.cpp"
                      }
                    },
                    "match": "(\\G0[xX])([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)(?:(?<!')([pP])((?:\\+)?)((?:\\-)?)([0-9](?:[0-9]|(?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))*))?((?:[uU]|(?:[uU]ll?)|(?:[uU]LL?)|(?:ll?[uU]?)|(?:LL?[uU]?)|[fF])(?!\\w))?((?:\\w(?<![0-9a-fA-FpP])\\w*)?$)"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "constant.numeric.decimal.cpp",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric.cpp"
                          }
                        ]
                      },
                      "2": {
                        "name": "punctuation.separator.constant.numeric.cpp"
                      },
                      "3": {
                        "name": "keyword.other.unit.exponent.decimal.cpp"
                      },
                      "4": {
                        "name": "keyword.operator.plus.exponent.decimal.cpp"
                      },
                      "5": {
                        "name": "keyword.operator.minus.exponent.decimal.cpp"
                      },
                      "6": {
                        "name": "constant.numeric.exponent.decimal.cpp",
                        "patterns": [
                          {
                            "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                            "name": "punctuation.separator.constant.numeric.cpp"
                          }
                        ]
                      },
                      "7": {
                        "name": "keyword.other.unit.suffix.integer.cpp"
                      },
                      "8": {
                        "name": "keyword.other.unit.user-defined.cpp"
                      }
                    },
                    "match": "\\G(?=[0-9.])(?!0[xXbB])([0-9](?:[0-9]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)(?:(?<!')([eE])((?:\\+)?)((?:\\-)?)([0-9](?:[0-9]|(?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))*))?((?:[uU]|(?:[uU]ll?)|(?:[uU]LL?)|(?:ll?[uU]?)|(?:LL?[uU]?)|[fF])(?!\\w))?((?:\\w(?<![0-9eE])\\w*)?$)"
                  },
                  {
                    "match": "(?:(?:[0-9a-zA-Z_\\.]|')|(?<=[eEpP])[+-])+",
                    "name": "invalid.illegal.constant.numeric.cpp"
                  }
                ]
              }
            ]
          }
        },
        "match": "(?<!\\w)\\.?\\d(?:(?:[0-9a-zA-Z_\\.]|')|(?<=[eEpP])[+-])*"
      },
      "critical-construct": {
        "begin": "(?i)\\b(critical)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.associate.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2008 standard.",
        "contentName": "meta.block.critical.fortran",
        "end": "(?i)\\b(end\\s*critical)\\b",
        "endCaptures": {
          "1": {
            "name": "keyword.control.endassociate.fortran"
          }
        },
        "patterns": [
          {
            "include": "$base"
          }
        ]
      },
      "cycle-statement": {
        "patterns": [
          {
            "begin": "(?i)\\s*\\b(cycle)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.cycle.fortran"
              }
            },
            "comment": "Introduced in the Fortran 1990 standard.",
            "end": "(?=[;!\\n])",
            "name": "meta.statement.control.fortran",
            "patterns": []
          }
        ]
      },
      "data-statement": {
        "begin": "(?i)\\b(data)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.data.fortran"
          }
        },
        "end": "(?=[;!\\n])",
        "patterns": [
          {
            "include": "$base"
          }
        ]
      },
      "deallocate-statement": {
        "begin": "(?i)\\b(deallocate)\\s*(?=\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.deallocate.fortran"
          },
          "2": {
            "name": "punctuation.parentheses.left.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1990 standard.",
        "end": "(?<!\\G)",
        "endCaptures": {
          "1": {
            "name": "punctuation.parentheses.right.fortran"
          }
        },
        "name": "meta.statement.deallocate.fortran",
        "patterns": [
          {
            "include": "#parentheses-dummy-variables"
          }
        ]
      },
      "deferred-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.deferred.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2003 standard.",
        "match": "(?i)\\s*\\b(deferred)\\b"
      },
      "derived-type": {
        "begin": "(?i)\\b(?:(class)|(type))\\s*(\\()\\s*(([a-z]\\w*)|\\*)",
        "beginCaptures": {
          "1": {
            "name": "storage.type.class.fortran"
          },
          "2": {
            "name": "storage.type.type.fortran"
          },
          "3": {
            "name": "punctuation.parentheses.left.fortran"
          },
          "4": {
            "name": "entity.name.type.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1995 standard.",
        "contentName": "meta.type-spec.fortran",
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "punctuation.parentheses.right.fortran"
          }
        },
        "name": "meta.specification.type.derived.fortran",
        "patterns": [
          {
            "include": "#parentheses-dummy-variables"
          }
        ]
      },
      "derived-type-component-attribute-specification": {
        "begin": "(?i)(?=\\s*\\b(?:private|sequence)\\b)",
        "comment": "Introduced in the Fortran 1995 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.statement.attribute-specification.fortran",
        "patterns": [
          {
            "include": "#access-attribute"
          },
          {
            "include": "#sequence-attribute"
          },
          {
            "include": "#invalid-character"
          }
        ]
      },
      "derived-type-component-parameter-specification": {
        "captures": {
          "1": {
            "name": "storage.type.integer.fortran"
          },
          "2": {
            "name": "punctuation.comma.fortran"
          },
          "3": {
            "name": "keyword.other.attribute.derived-type.parameter.fortran"
          },
          "4": {
            "name": "keyword.operator.double-colon.fortran"
          },
          "5": {
            "name": "entity.name.derived-type.parameter.fortran"
          }
        },
        "comment": "Derived type parameter.",
        "match": "(?ix)\\b(integer)\\s*(,)\\s*(kind|len)\\s*(?:(::)\\s*([a-z]\\w*)?)?\\s*(?=[;!\\n])"
      },
      "derived-type-component-procedure-specification": {
        "begin": "(?i)(?=\\b(?:procedure)\\b)",
        "comment": "Introduced in the Fortran 2003 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.specification.procedure.fortran",
        "patterns": [
          {
            "include": "#procedure-type"
          },
          {
            "begin": "(?=\\s*(,|::|\\())",
            "comment": "Attribute list.",
            "contentName": "meta.attribute-list.derived-type-component-procedure.fortran",
            "end": "(::)|(?=[;!\\n])",
            "endCaptures": {
              "1": {
                "name": "keyword.operator.double-colon.fortran"
              }
            },
            "patterns": [
              {
                "begin": "(,)",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.comma.fortran"
                  }
                },
                "end": "(?=::|[,;!\\n])",
                "patterns": [
                  {
                    "include": "#access-attribute"
                  },
                  {
                    "include": "#pass-attribute"
                  },
                  {
                    "include": "#nopass-attribute"
                  },
                  {
                    "include": "#invalid-word"
                  },
                  {
                    "include": "#pointer-attribute"
                  }
                ]
              }
            ]
          },
          {
            "include": "#procedure-name-list"
          }
        ]
      },
      "derived-type-component-type-specification": {
        "begin": "(?ix)(?=\\b(?:character|class|complex|double\\s*precision|double\\s*complex|integer|logical|real|type)\\b(?![^:'\";!\\n]*\\bfunction\\b))",
        "comment": "Introduced in the Fortran 1995 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.specification.derived-type.fortran",
        "patterns": [
          {
            "include": "#types"
          },
          {
            "include": "#line-continuation-operator"
          },
          {
            "begin": "(?=\\s*(,|::))",
            "comment": "Attribute list.",
            "contentName": "meta.attribute-list.derived-type-component-type.fortran",
            "end": "(::)|(?=[;!\\n])",
            "endCaptures": {
              "1": {
                "name": "keyword.operator.double-colon.fortran"
              }
            },
            "patterns": [
              {
                "begin": "(,)",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.comma.fortran"
                  }
                },
                "end": "(?=::|[,;!\\n])",
                "patterns": [
                  {
                    "include": "#access-attribute"
                  },
                  {
                    "include": "#allocatable-attribute"
                  },
                  {
                    "include": "#codimension-attribute"
                  },
                  {
                    "include": "#contiguous-attribute"
                  },
                  {
                    "include": "#dimension-attribute"
                  },
                  {
                    "include": "#pointer-attribute"
                  },
                  {
                    "include": "#invalid-word"
                  }
                ]
              }
            ]
          },
          {
            "include": "#name-list"
          }
        ]
      },
      "derived-type-contains-attribute-specification": {
        "begin": "(?i)(?=\\b(?:private)\\b)",
        "comment": "Introduced in the Fortran 1995 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.statement.attribute-specification.fortran",
        "patterns": [
          {
            "include": "#access-attribute"
          },
          {
            "include": "#invalid-character"
          }
        ]
      },
      "derived-type-contains-final-procedure-specification": {
        "begin": "(?i)\\b(final)\\b",
        "beginCaptures": {
          "1": {
            "name": "storage.type.final-procedure.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2003 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.specification.procedure.final.fortran",
        "patterns": [
          {
            "begin": "(?=\\s*(::))",
            "comment": "Attribute list.",
            "end": "(::)|(?=[;!\\n])",
            "endCaptures": {
              "1": {
                "name": "keyword.operator.double-colon.fortran"
              }
            },
            "name": "meta.attribute-list.derived-type-contains-final-procedure.fortran",
            "patterns": [
              {
                "include": "#invalid-word"
              }
            ]
          },
          {
            "include": "#procedure-name"
          }
        ]
      },
      "derived-type-contains-generic-procedure-specification": {
        "begin": "(?i)\\b(generic)\\b",
        "beginCaptures": {
          "1": {
            "name": "storage.type.procedure.generic.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2003 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.specification.procedure.generic.fortran",
        "patterns": [
          {
            "begin": "(?=\\s*(,|::|\\())",
            "comment": "Attribute list.",
            "contentName": "meta.attribute-list.derived-type-contains-generic-procedure.fortran",
            "end": "(::)|(?=[;!\\n])",
            "endCaptures": {
              "1": {
                "name": "keyword.operator.double-colon.fortran"
              }
            },
            "patterns": [
              {
                "begin": "(,)|^|(?<=&)",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.comma.fortran"
                  }
                },
                "end": "(?=::|[,&;!\\n])",
                "patterns": [
                  {
                    "include": "#access-attribute"
                  },
                  {
                    "include": "#invalid-word"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?=\\s*[a-z])",
            "comment": "Name list.",
            "contentName": "meta.name-list.fortran",
            "end": "(?=[;!\\n])",
            "patterns": [
              {
                "include": "#IO-keywords"
              },
              {
                "include": "#assignment-keyword"
              },
              {
                "include": "#operator-keyword"
              },
              {
                "include": "#procedure-name"
              },
              {
                "include": "#pointer-operators"
              }
            ]
          }
        ]
      },
      "derived-type-contains-procedure-specification": {
        "begin": "(?i)(?=\\b(?:procedure)\\b)",
        "comment": "Introduced in the Fortran 2003 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.specification.procedure.fortran",
        "patterns": [
          {
            "include": "#procedure-type"
          },
          {
            "begin": "(?=\\s*(,|::|\\())",
            "comment": "Attribute list.",
            "contentName": "meta.attribute-list.derived-type-contains-procedure.fortran",
            "end": "(::)|(?=[;!\\n])",
            "endCaptures": {
              "1": {
                "name": "keyword.operator.double-colon.fortran"
              }
            },
            "patterns": [
              {
                "begin": "(,)|^|(?<=&)",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.comma.fortran"
                  }
                },
                "end": "(?=::|[,&;!\\n])",
                "name": "meta.something.fortran",
                "patterns": [
                  {
                    "include": "#access-attribute"
                  },
                  {
                    "include": "#deferred-attribute"
                  },
                  {
                    "include": "#non-overridable-attribute"
                  },
                  {
                    "include": "#nopass-attribute"
                  },
                  {
                    "include": "#pass-attribute"
                  },
                  {
                    "include": "#invalid-word"
                  }
                ]
              }
            ]
          },
          {
            "include": "#procedure-name-list"
          }
        ]
      },
      "derived-type-definition": {
        "begin": "(?i)\\b(type)\\b(?!\\s*(\\(|is\\b|\\=))",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.type.fortran"
          }
        },
        "end": "(?=[;!\\n])",
        "name": "meta.derived-type.definition.fortran",
        "patterns": [
          {
            "begin": "\\G(?=\\s*(,|::))",
            "comment": "Attribute list.",
            "contentName": "meta.attribute-list.derived-type.fortran",
            "end": "(::)|(?=[;!\\n])",
            "endCaptures": {
              "1": {
                "name": "keyword.operator.double-colon.fortran"
              }
            },
            "patterns": [
              {
                "begin": "(,)",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.comma.fortran"
                  }
                },
                "end": "(?=::|[,;!\\n])",
                "patterns": [
                  {
                    "include": "#access-attribute"
                  },
                  {
                    "include": "#abstract-attribute"
                  },
                  {
                    "include": "#language-binding-attribute"
                  },
                  {
                    "include": "#extends-attribute"
                  },
                  {
                    "include": "#invalid-word"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?i)\\s*\\b([a-z]\\w*)\\b",
            "beginCaptures": {
              "1": {
                "name": "entity.name.type.fortran"
              }
            },
            "end": "(?i)(?:^|(?<=;))\\s*(end\\s*type)(?:\\s+(?:(\\1)|(\\w+)))?\\b",
            "endCaptures": {
              "1": {
                "name": "keyword.control.endtype.fortran"
              },
              "2": {
                "name": "entity.name.type.fortran"
              },
              "3": {
                "name": "invalid.error.derived-type.fortran"
              }
            },
            "patterns": [
              {
                "include": "#dummy-variable-list"
              },
              {
                "include": "#comments"
              },
              {
                "begin": "(?i)^(?!\\s*\\b(?:contains|end\\s*type)\\b)",
                "comment": "Derived type specification block.",
                "end": "(?i)^(?=\\s*\\b(?:contains|end\\s*type)\\b)",
                "name": "meta.block.specification.derived-type.fortran",
                "patterns": [
                  {
                    "include": "#comments"
                  },
                  {
                    "include": "#derived-type-component-attribute-specification"
                  },
                  {
                    "include": "#derived-type-component-parameter-specification"
                  },
                  {
                    "include": "#derived-type-component-procedure-specification"
                  },
                  {
                    "include": "#derived-type-component-type-specification"
                  }
                ]
              },
              {
                "begin": "(?i)\\b(contains)\\b",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.contains.fortran"
                  }
                },
                "comment": "Derived type contains block.",
                "end": "(?i)(?=\\s*end\\s*type\\b)",
                "name": "meta.block.contains.fortran",
                "patterns": [
                  {
                    "include": "#comments"
                  },
                  {
                    "include": "#derived-type-contains-attribute-specification"
                  },
                  {
                    "include": "#derived-type-contains-final-procedure-specification"
                  },
                  {
                    "include": "#derived-type-contains-generic-procedure-specification"
                  },
                  {
                    "include": "#derived-type-contains-procedure-specification"
                  }
                ]
              }
            ]
          }
        ]
      },
      "derived-type-operators": {
        "captures": {
          "1": {
            "name": "keyword.other.selector.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1995 standard.",
        "match": "\\s*(\\%)"
      },
      "dimension-attribute": {
        "begin": "(?i)\\s*\\b(dimension)(?=\\s*\\()",
        "beginCaptures": {
          "1": {
            "name": "storage.modifier.dimension.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1977 standard.",
        "end": "(?<!\\G)",
        "patterns": [
          {
            "include": "#parentheses-dummy-variables"
          }
        ]
      },
      "do-construct": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "keyword.control.enddo.fortran"
              }
            },
            "match": "(?i)\\b(end\\s*do)\\b"
          },
          {
            "begin": "(?i)\\b(do)\\s+(\\d{1,5})",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.do.fortran"
              },
              "2": {
                "name": "constant.numeric.fortran"
              }
            },
            "comment": "Introduced in the Fortran 1977 standard.",
            "end": "(?i)(?:^|(?<=;))(?=\\s*\\b\\2\\b)",
            "name": "meta.do.labeled.fortran",
            "patterns": [
              {
                "begin": "(?i)\\G(?:\\s*(,)|(?!\\s*[;!\\n]))",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.comma.fortran"
                  }
                },
                "comment": "Loop control.",
                "end": "(?=[;!\\n])",
                "patterns": [
                  {
                    "include": "#concurrent-attribute"
                  },
                  {
                    "include": "#while-attribute"
                  },
                  {
                    "include": "$base"
                  }
                ]
              },
              {
                "include": "$base"
              }
            ]
          },
          {
            "begin": "(?i)\\b(do)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.do.fortran"
              }
            },
            "comment": "Introduced in the Fortran 1995 standard.",
            "end": "(?i)\\b(?:(continue)|(end\\s*do))\\b",
            "endCaptures": {
              "1": {
                "name": "keyword.control.continue.fortran"
              },
              "2": {
                "name": "keyword.control.enddo.fortran"
              }
            },
            "name": "meta.block.do.unlabeled.fortran",
            "patterns": [
              {
                "begin": "(?i)\\G(?:\\s*(,)|(?!\\s*[;!\\n]))",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.comma.fortran"
                  }
                },
                "comment": "Loop control.",
                "end": "(?=[;!\\n])",
                "name": "meta.loop-control.fortran",
                "patterns": [
                  {
                    "include": "#concurrent-attribute"
                  },
                  {
                    "include": "#while-attribute"
                  },
                  {
                    "include": "$base"
                  }
                ]
              },
              {
                "begin": "(?i)(?!\\s*\\b(continue|end\\s*do)\\b)",
                "comment": "Loop body.",
                "end": "(?i)(?=\\s*\\b(continue|end\\s*do)\\b)",
                "patterns": [
                  {
                    "include": "$base"
                  }
                ]
              }
            ]
          }
        ]
      },
      "dummy-variable": {
        "captures": {
          "1": {
            "name": "variable.parameter.fortran"
          }
        },
        "comment": "dummy variable",
        "match": "(?i)(?:^|(?<=[&,\\(]))\\s*([a-z]\\w*)"
      },
      "dummy-variable-list": {
        "begin": "\\G\\s*(\\()",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.parameters.begin.fortran"
          }
        },
        "end": "\\)|(?=\\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.parameters.end.fortran"
          }
        },
        "name": "meta.dummy-variable-list",
        "patterns": [
          {
            "include": "#dummy-variable"
          }
        ]
      },
      "elemental-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.elemental.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1990 standard.",
        "match": "(?i)\\s*\\b(elemental)\\b"
      },
      "entry-statement": {
        "patterns": [
          {
            "begin": "(?i)\\s*\\b(entry)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.entry.fortran"
              }
            },
            "comment": "Introduced in the Fortran 1977 standard.",
            "end": "(?=[;!\\n])",
            "name": "meta.statement.control.entry.fortran",
            "patterns": [
              {
                "begin": "(?i)\\s*\\b([a-z]\\w*)\\b",
                "beginCaptures": {
                  "1": {
                    "name": "entity.name.function.entry.fortran"
                  }
                },
                "end": "(?=[;!\\n])",
                "patterns": [
                  {
                    "include": "#dummy-variable-list"
                  },
                  {
                    "include": "#result-statement"
                  },
                  {
                    "include": "#language-binding-attribute"
                  }
                ]
              }
            ]
          }
        ]
      },
      "enum-block-construct": {
        "begin": "(?i)\\b(enum)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.enum.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2003 standard.",
        "end": "(?i)\\b(end\\s*enum)\\b",
        "endCaptures": {
          "1": {
            "name": "keyword.control.end-enum.fortran"
          }
        },
        "name": "meta.enum.fortran",
        "patterns": [
          {
            "begin": "\\G\\s*(,)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.comma.fortran"
              }
            },
            "end": "(?=[;!\\n])",
            "patterns": [
              {
                "include": "#language-binding-attribute"
              },
              {
                "include": "#invalid-word"
              }
            ]
          },
          {
            "begin": "(?i)(?!\\s*\\b(end\\s*enum)\\b)",
            "end": "(?i)(?=\\b(end\\s*enum)\\b)",
            "name": "meta.block.specification.enum.fortran",
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "begin": "(?ix)\\b(enumerator)\\b",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.other.enumerator.fortran"
                  }
                },
                "end": "(?=[;!\\n])",
                "name": "meta.statement.enumerator-specification.fortran",
                "patterns": [
                  {
                    "begin": "(?=\\s*(,|::))",
                    "comment": "Attribute list.",
                    "contentName": "meta.attribute-list.enum.fortran",
                    "end": "(::)|(?=[;!\\n])",
                    "endCaptures": {
                      "1": {
                        "name": "keyword.operator.double-colon.fortran"
                      }
                    },
                    "patterns": [
                      {
                        "include": "#invalid-word"
                      }
                    ]
                  },
                  {
                    "include": "#comments"
                  },
                  {
                    "include": "#name-list"
                  }
                ]
              }
            ]
          }
        ]
      },
      "equivalence-statement": {
        "begin": "(?i)\\b(equivalence)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.common.fortran"
          }
        },
        "end": "(?=[;!\\n])",
        "patterns": [
          {
            "begin": "(?:\\G|(,))",
            "beginCaptures": {
              "1": {
                "name": "puntuation.comma.fortran"
              }
            },
            "end": "(?=[,;!\\n])",
            "patterns": [
              {
                "include": "#parentheses-dummy-variables"
              }
            ]
          }
        ]
      },
      "error-stop-statement": {
        "begin": "(?i)\\s*\\b(error\\s+stop)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.errorstop.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2008 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.statement.control.errorstop.fortran",
        "patterns": [
          {
            "include": "#constants"
          },
          {
            "include": "#string-operators"
          },
          {
            "include": "#variable"
          },
          {
            "include": "#invalid-character"
          }
        ]
      },
      "event-statement": {
        "begin": "(?i)\\b(event post|event wait)\\s*(?=\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.event.fortran"
          },
          "2": {
            "name": "punctuation.parentheses.left.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2018 standard.",
        "end": "(?<!\\G)",
        "endCaptures": {
          "1": {
            "name": "punctuation.parentheses.right.fortran"
          }
        },
        "name": "meta.statement.event.fortran",
        "patterns": [
          {
            "include": "#parentheses-dummy-variables"
          }
        ]
      },
      "execution-statements": {
        "patterns": [
          {
            "include": "#allocate-statement"
          },
          {
            "include": "#deallocate-statement"
          },
          {
            "include": "#IO-statements"
          },
          {
            "include": "#nullify-statement"
          }
        ]
      },
      "exit-statement": {
        "begin": "(?i)\\s*\\b(exit)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.exit.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1990 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.statement.control.exit.fortran",
        "patterns": []
      },
      "explicit-interface-block-construct": {
        "begin": "(?i)\\b(interface)\\b(?=\\s*[;!\\n])",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.interface.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1990 standard.",
        "end": "(?i)\\b(end\\s*interface)\\b",
        "endCaptures": {
          "1": {
            "name": "keyword.control.endinterface.fortran.modern"
          }
        },
        "name": "meta.interface.explicit.fortran",
        "patterns": [
          {
            "include": "$base"
          }
        ]
      },
      "extends-attribute": {
        "begin": "(?i)\\s*\\b(extends)\\s*\\(",
        "beginCaptures": {
          "1": {
            "name": "storage.modifier.extends.fortran"
          }
        },
        "end": "(?:\\)|(?=\\n))",
        "patterns": [
          {
            "match": "(?i)\\s*\\b([a-z]\\w*)\\b",
            "name": "entity.name.type.fortran"
          }
        ]
      },
      "external-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.external.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1977 standard.",
        "match": "(?i)\\s*\\b(external)\\b"
      },
      "fail-image-statement": {
        "captures": {
          "1": {
            "name": "keyword.control.fail-image.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2018 standard.",
        "match": "\\b(fail image)\\b",
        "name": "meta.statement.fail-image.fortran"
      },
      "forall-construct": {
        "applyEndPatternLast": 1,
        "begin": "(?i)\\b(forall)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.forall.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1995 standard.",
        "end": "(?<!\\G)",
        "patterns": [
          {
            "begin": "(?i)\\G(?!\\s*[;!\\n])",
            "comment": "Loop control.",
            "end": "(?<!\\G)",
            "name": "meta.loop-control.fortran",
            "patterns": [
              {
                "include": "#parentheses"
              },
              {
                "include": "#invalid-word"
              }
            ]
          },
          {
            "begin": "(?<=\\))(?=\\s*[;!\\n])",
            "end": "(?i)\\b(end\\s*forall)\\b",
            "endCaptures": {
              "1": {
                "name": "keyword.control.endforall.fortran"
              }
            },
            "name": "meta.block.forall.fortran",
            "patterns": [
              {
                "include": "$base"
              }
            ]
          },
          {
            "begin": "(?i)(?<=\\))(?!\\s*[;!\\n])",
            "end": "\\n",
            "name": "meta.statement.control.forall.fortran",
            "patterns": [
              {
                "include": "$base"
              }
            ]
          }
        ]
      },
      "form-team-statement": {
        "begin": "(?i)\\b(form team)\\s*(?=\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.form-team.fortran"
          },
          "2": {
            "name": "punctuation.parentheses.left.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2018 standard.",
        "end": "(?<!\\G)",
        "endCaptures": {
          "1": {
            "name": "punctuation.parentheses.right.fortran"
          }
        },
        "name": "meta.statement.form-team.fortran",
        "patterns": [
          {
            "include": "#parentheses-dummy-variables"
          }
        ]
      },
      "function-definition": {
        "begin": "(?i)(?=([^:'\";!\\n](?!\\bend)(?!\\bsubroutine\\b))*\\bfunction\\b)",
        "comment": "Function program unit. Introduced in the Fortran 1977 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.function.fortran",
        "patterns": [
          {
            "begin": "(?i)(?=\\G\\s*(?!\\bfunction\\b))",
            "comment": "Function attribute list.",
            "end": "(?i)(?=\\bfunction\\b)",
            "name": "meta.attribute-list.function.fortran",
            "patterns": [
              {
                "include": "#elemental-attribute"
              },
              {
                "include": "#module-attribute"
              },
              {
                "include": "#pure-attribute"
              },
              {
                "include": "#recursive-attribute"
              },
              {
                "include": "#types"
              },
              {
                "include": "#invalid-word"
              }
            ]
          },
          {
            "begin": "(?i)\\b(function)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.other.function.fortran"
              }
            },
            "comment": "Captures the function keyword",
            "end": "(?=[;!\\n])",
            "patterns": [
              {
                "begin": "(?i)\\G\\s*\\b([a-z]\\w*)\\b",
                "beginCaptures": {
                  "1": {
                    "name": "entity.name.function.fortran"
                  }
                },
                "comment": "Function body.",
                "end": "(?ix)\\s*\\b(?:(end\\s*function)(?:\\s+([a-z_]\\w*))?|(end))\\b \\s*([^;!\\n]+)?(?=[;!\\n])",
                "endCaptures": {
                  "1": {
                    "name": "keyword.other.endfunction.fortran"
                  },
                  "2": {
                    "name": "entity.name.function.fortran"
                  },
                  "3": {
                    "name": "keyword.other.endfunction.fortran"
                  },
                  "4": {
                    "name": "invalid.error.function.fortran"
                  }
                },
                "patterns": [
                  {
                    "begin": "\\G(?!\\s*[;!\\n])",
                    "comment": "Rest of the first line in function construct.",
                    "end": "(?=[;!\\n])",
                    "name": "meta.function.first-line.fortran",
                    "patterns": [
                      {
                        "include": "#dummy-variable-list"
                      },
                      {
                        "include": "#result-statement"
                      },
                      {
                        "include": "#language-binding-attribute"
                      }
                    ]
                  },
                  {
                    "begin": "(?i)(?!\\b(?:end\\s*[;!\\n]|end\\s*function\\b))",
                    "comment": "Specification and execution block.",
                    "end": "(?i)(?=\\b(?:end\\s*[;!\\n]|end\\s*function\\b))",
                    "name": "meta.block.specification.function.fortran",
                    "patterns": [
                      {
                        "begin": "(?i)\\b(contains)\\b",
                        "beginCaptures": {
                          "1": {
                            "name": "keyword.control.contains.fortran"
                          }
                        },
                        "comment": "Contains block.",
                        "end": "(?i)(?=(?:end\\s*[;!\\n]|end\\s*function\\b))",
                        "name": "meta.block.contains.fortran",
                        "patterns": [
                          {
                            "include": "$base"
                          }
                        ]
                      },
                      {
                        "include": "$base"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "generic-interface-block-construct": {
        "begin": "(?i)\\b(interface)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.interface.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1990 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.interface.generic.fortran",
        "patterns": [
          {
            "begin": "(?ix)\\G\\s*\\b(assignment)\\s* (\\()\\s*(?:(\\=)|(\\S.*))\\s*(\\))",
            "beginCaptures": {
              "1": {
                "name": "keyword.other.assignment.fortran"
              },
              "2": {
                "name": "punctuation.parentheses.left.fortran"
              },
              "3": {
                "name": "keyword.operator.assignment.fortran"
              },
              "4": {
                "name": "invalid.error.generic-interface.fortran"
              },
              "5": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "comment": "Assignment generic interface.",
            "end": "(?ix)\\b(end\\s*interface)\\b (?:\\s*\\b(\\1)\\b\\s*(\\()\\s*(?:(\\3)|(\\S.*))\\s*(\\)))?",
            "endCaptures": {
              "1": {
                "name": "keyword.control.endinterface.fortran"
              },
              "2": {
                "name": "keyword.other.assignment.fortran"
              },
              "3": {
                "name": "punctuation.parentheses.left.fortran"
              },
              "4": {
                "name": "keyword.operator.assignment.fortran"
              },
              "5": {
                "name": "invalid.error.generic-interface-end.fortran"
              },
              "6": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#interface-procedure-statement"
              },
              {
                "include": "$base"
              }
            ]
          },
          {
            "begin": "(?ix)\\G\\s*\\b(operator)\\s* (\\()\\s*(?: (\\.[a-z]+\\.|\\=\\=|\\/\\=|\\>\\=|\\>|\\<|\\<\\=|\\-|\\+|\\/|\\/\\/|\\*\\*|\\*) |(\\S.*) )\\s*(\\))",
            "beginCaptures": {
              "1": {
                "name": "keyword.other.operator.fortran"
              },
              "2": {
                "name": "punctuation.parentheses.left.fortran"
              },
              "3": {
                "name": "keyword.operator.fortran"
              },
              "4": {
                "name": "invalid.error.generic-interface-block-op.fortran"
              },
              "5": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "comment": "Operator generic interface.",
            "end": "(?ix)\\b(end\\s*interface)\\b (?:\\s*\\b(\\1)\\b\\s*(\\()\\s*(?:(\\3)|(\\S.*))\\s*(\\)))?",
            "endCaptures": {
              "1": {
                "name": "keyword.control.endinterface.fortran"
              },
              "2": {
                "name": "keyword.other.operator.fortran"
              },
              "3": {
                "name": "punctuation.parentheses.left.fortran"
              },
              "4": {
                "name": "keyword.operator.fortran"
              },
              "5": {
                "name": "invalid.error.generic-interface-block-op-end.fortran"
              },
              "6": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#interface-procedure-statement"
              },
              {
                "include": "$base"
              }
            ]
          },
          {
            "begin": "(?ix)\\G\\s*\\b(?:(read)|(write))\\s* (\\()\\s*(?:(formatted)|(unformatted)|(\\S.*))\\s*(\\))",
            "beginCaptures": {
              "1": {
                "name": "keyword.other.read.fortran"
              },
              "2": {
                "name": "keyword.other.write.fortran"
              },
              "3": {
                "name": "punctuation.parentheses.left.fortran"
              },
              "4": {
                "name": "keyword.other.formatted.fortran"
              },
              "5": {
                "name": "keyword.other.unformatted.fortran"
              },
              "6": {
                "name": "invalid.error.generic-interface-block.fortran"
              },
              "7": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "comment": "Read/Write generic interface.",
            "end": "(?ix)\\b(end\\s*interface)\\b(?:\\s*\\b(?:(\\2)|(\\3))\\b\\s* (\\()\\s*(?:(\\4)|(\\5)|(\\S.*))\\s*(\\)))?",
            "endCaptures": {
              "1": {
                "name": "keyword.control.endinterface.fortran"
              },
              "2": {
                "name": "keyword.other.read.fortran"
              },
              "3": {
                "name": "keyword.other.write.fortran"
              },
              "4": {
                "name": "punctuation.parentheses.left.fortran"
              },
              "5": {
                "name": "keyword.other.formatted.fortran"
              },
              "6": {
                "name": "keyword.other.unformatted.fortran"
              },
              "7": {
                "name": "invalid.error.generic-interface-block-end.fortran"
              },
              "8": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#interface-procedure-statement"
              },
              {
                "include": "$base"
              }
            ]
          },
          {
            "begin": "(?i)\\G\\s*\\b([a-z]\\w*)\\b",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.fortran"
              }
            },
            "comment": "Generic interface.",
            "end": "(?i)\\b(end\\s*interface)\\b(?:\\s*\\b(\\1)\\b)?",
            "endCaptures": {
              "1": {
                "name": "keyword.control.endinterface.fortran"
              },
              "2": {
                "name": "entity.name.function.fortran"
              }
            },
            "patterns": [
              {
                "include": "#interface-procedure-statement"
              },
              {
                "include": "$base"
              }
            ]
          }
        ]
      },
      "goto-statement": {
        "begin": "(?i)\\s*\\b(go\\s*to)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.goto.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1977 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.statement.control.goto.fortran",
        "patterns": [
          {
            "include": "$base"
          }
        ]
      },
      "if-construct": {
        "patterns": [
          {
            "begin": "(?i)\\b(if)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.if.fortran"
              }
            },
            "end": "(?=[;!\\n])",
            "patterns": [
              {
                "include": "#logical-control-expression"
              },
              {
                "begin": "(?i)\\s*\\b(then)\\b",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.then.fortran"
                  }
                },
                "contentName": "meta.block.if.fortran",
                "end": "(?i)\\b(end\\s*if)\\b",
                "endCaptures": {
                  "1": {
                    "name": "keyword.control.endif.fortran"
                  }
                },
                "patterns": [
                  {
                    "begin": "(?i)\\b(else\\s*if)\\b",
                    "beginCaptures": {
                      "1": {
                        "name": "keyword.control.elseif.fortran"
                      }
                    },
                    "comment": "else if statement",
                    "end": "(?=[;!\\n])",
                    "patterns": [
                      {
                        "include": "#parentheses"
                      },
                      {
                        "captures": {
                          "1": {
                            "name": "keyword.control.then.fortran"
                          },
                          "2": {
                            "name": "meta.label.elseif.fortran"
                          }
                        },
                        "comment": "capture the label if present",
                        "match": "(?i)\\b(then)\\b(\\s*[a-z]\\w*)?"
                      },
                      {
                        "include": "#invalid-word"
                      }
                    ]
                  },
                  {
                    "begin": "(?i)\\b(else)\\b",
                    "beginCaptures": {
                      "1": {
                        "name": "keyword.control.else.fortran"
                      }
                    },
                    "comment": "else block",
                    "end": "(?i)(?=\\b(end\\s*if)\\b)",
                    "patterns": [
                      {
                        "begin": "(?!(\\s*(;|!|\\n)))",
                        "comment": "rest of else line",
                        "end": "(?=[;!\\n])",
                        "patterns": [
                          {
                            "captures": {
                              "1": {
                                "name": "meta.label.else.fortran"
                              },
                              "2": {
                                "name": "invalid.error.label.else.fortran"
                              }
                            },
                            "comment": "capture the label if present",
                            "match": "\\s*([a-z]\\w*)?\\s*\\b(\\w*)\\b"
                          },
                          {
                            "include": "#invalid-word"
                          }
                        ]
                      },
                      {
                        "begin": "(?i)(?!\\b(end\\s*if)\\b)",
                        "end": "(?i)(?=\\b(end\\s*if)\\b)",
                        "patterns": [
                          {
                            "include": "$base"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "include": "$base"
                  }
                ]
              },
              {
                "begin": "(?i)(?=\\s*[a-z])",
                "end": "(?=[;!\\n])",
                "name": "meta.statement.control.if.fortran",
                "patterns": [
                  {
                    "include": "$base"
                  }
                ]
              }
            ]
          }
        ]
      },
      "image-control-statement": {
        "patterns": [
          {
            "include": "#sync-all-statement"
          },
          {
            "include": "#sync-statement"
          },
          {
            "include": "#event-statement"
          },
          {
            "include": "#form-team-statement"
          },
          {
            "include": "#fail-image-statement"
          }
        ]
      },
      "implicit-statement": {
        "begin": "(?i)\\b(implicit)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.implicit.fortran"
          }
        },
        "end": "(?=[;!\\n])",
        "name": "meta.statement.implicit.fortran",
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "keyword.other.none.fortran"
              }
            },
            "match": "(?i)\\s*\\b(none)\\b"
          },
          {
            "include": "$base"
          }
        ]
      },
      "import-statement": {
        "begin": "(?i)\\b(import)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.include.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1990 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.statement.include.fortran",
        "patterns": [
          {
            "begin": "(?i)\\G\\s*(?:(::)|(?=[a-z]))",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.double-colon.fortran"
              }
            },
            "end": "(?=[;!\\n])",
            "patterns": [
              {
                "include": "#name-list"
              }
            ]
          },
          {
            "begin": "\\G\\s*(,)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.comma.fortran"
              }
            },
            "end": "(?=[;!\\n])",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "keyword.other.all.fortran"
                  }
                },
                "match": "(?i)\\G\\s*\\b(all)\\b"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.other.none.fortran"
                  }
                },
                "match": "(?i)\\G\\s*\\b(none)\\b"
              },
              {
                "begin": "(?i)\\G\\s*\\b(only)\\s*(:)",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.other.only.fortran"
                  },
                  "2": {
                    "name": "keyword.other.colon.fortran"
                  }
                },
                "end": "(?=[;!\\n])",
                "patterns": [
                  {
                    "include": "#name-list"
                  }
                ]
              },
              {
                "include": "#invalid-word"
              }
            ]
          }
        ]
      },
      "include-statement": {
        "begin": "(?i)\\b(include)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.include.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1990 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.statement.include.fortran",
        "patterns": [
          {
            "include": "#string-constant"
          },
          {
            "include": "#invalid-character"
          }
        ]
      },
      "intent-attribute": {
        "begin": "(?i)\\s*\\b(intent)\\s*(\\()",
        "beginCaptures": {
          "1": {
            "name": "storage.modifier.intent.fortran"
          },
          "2": {
            "name": "punctuation.parentheses.left.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1990 standard.",
        "end": "(\\))|(?=[;!\\n])",
        "endCaptures": {
          "1": {
            "name": "punctuation.parentheses.left.fortran"
          }
        },
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "storage.modifier.intent.in-out.fortran"
              },
              "2": {
                "name": "storage.modifier.intent.in.fortran"
              },
              "3": {
                "name": "storage.modifier.intent.out.fortran"
              }
            },
            "match": "(?i)\\b(?:(in\\s*out)|(in)|(out))\\b"
          },
          {
            "include": "#invalid-word"
          }
        ]
      },
      "interface-block-constructs": {
        "patterns": [
          {
            "include": "#abstract-interface-block-construct"
          },
          {
            "include": "#explicit-interface-block-construct"
          },
          {
            "include": "#generic-interface-block-construct"
          }
        ]
      },
      "interface-procedure-statement": {
        "begin": "(?i)(?=[^'\";!\\n]*\\bprocedure\\b)",
        "comment": "Introduced in the Fortran 1990 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.statement.procedure.fortran",
        "patterns": [
          {
            "begin": "(?i)(?=\\G\\s*(?!\\bprocedure\\b))",
            "comment": "Attribute list.",
            "end": "(?i)(?=\\bprocedure\\b)",
            "name": "meta.attribute-list.interface.fortran",
            "patterns": [
              {
                "include": "#module-attribute"
              },
              {
                "include": "#invalid-word"
              }
            ]
          },
          {
            "begin": "(?i)\\s*\\b(procedure)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.other.procedure.fortran"
              }
            },
            "comment": "Procedure statement.",
            "end": "(?=[;!\\n])",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "keyword.operator.double-colon.fortran"
                  }
                },
                "match": "\\G\\s*(::)"
              },
              {
                "include": "#procedure-name-list"
              }
            ]
          }
        ]
      },
      "intrinsic-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.intrinsic.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1977 standard.",
        "match": "(?i)\\s*\\b(intrinsic)\\b"
      },
      "intrinsic-functions": {
        "patterns": [
          {
            "begin": "(?ix)\\b(acosh|asinh|atanh|bge|bgt|ble|blt|dshiftl|dshiftr| findloc|hypot|iall|iany|image_index|iparity|is_contiguous|lcobound| leadz|mask[lr]|merge_bits|norm2|num_images|parity|popcnt|poppar| shift[alr]|storage_size|this_image|trailz|ucobound)\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.intrinsic.fortran"
              },
              "2": {
                "name": "punctuation.parentheses.left.fortran"
              }
            },
            "comment": "Intrinsic functions introduced in the Fortran 2008 standard.",
            "end": "(?<!\\G)",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#parentheses-dummy-variables"
              }
            ]
          },
          {
            "begin": "(?ix)\\b(bessel_[jy][01n]|erf(c(_scaled)?)?|gamma|log_gamma)\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.intrinsic.fortran"
              },
              "2": {
                "name": "punctuation.parentheses.left.fortran"
              }
            },
            "comment": "Functions accessable through the intrinsic FORTRAN_SPECIAL_FUNCTIONS module. Introduced in the Fortran 2008 standard.",
            "end": "(?<!\\G)",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#parentheses-dummy-variables"
              }
            ]
          },
          {
            "begin": "(?ix)\\b(command_argument_count|extends_type_of|is_iostat_end| is_iostat_eor|new_line|same_type_as|selected_char_kind)\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.intrinsic.fortran"
              },
              "2": {
                "name": "punctuation.parentheses.left.fortran"
              }
            },
            "comment": "Intrinsic functions introduced in the Fortran 2003 standard.",
            "end": "(?<!\\G)",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#parentheses-dummy-variables"
              }
            ]
          },
          {
            "begin": "(?ix)\\b(ieee_( class|copy_sign|is_(finite|nan|negative|normal)|logb|next_after|rem| rint|scalb|selected_real_kind| support_(datatype|denormal|divide|inf|io|nan|rounding|sqrt|standard|underflow_control)| unordered|value))\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.intrinsic.fortran"
              },
              "2": {
                "name": "punctuation.parentheses.left.fortran"
              }
            },
            "comment": "Functions accessable through the intrinsic IEEE_ARITHMETIC module. Introduced in the Fortran 2003 standard.",
            "end": "(?<!\\G)",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#parentheses-dummy-variables"
              }
            ]
          },
          {
            "begin": "(?ix)\\b(ieee_support_(flag|halting))\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.intrinsic.fortran"
              },
              "2": {
                "name": "punctuation.parentheses.left.fortran"
              }
            },
            "comment": "Functions accessable through the intrinsic IEEE_EXCEPTIONS module. Introduced in the Fortran 2003 standard.",
            "end": "(?<!\\G)",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#parentheses-dummy-variables"
              }
            ]
          },
          {
            "begin": "(?ix)\\b(c_(associated|funloc|loc|sizeof))\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.intrinsic.fortran"
              }
            },
            "comment": "Functions accessable through the intrinsic ISO_C_BINDING module. Introduced in the Fortran 2003 standard.",
            "end": "(?<!\\G)",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#parentheses-dummy-variables"
              }
            ]
          },
          {
            "begin": "(?ix)\\b(compiler_(options|version))\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.intrinsic.fortran"
              },
              "2": {
                "name": "punctuation.parentheses.left.fortran"
              }
            },
            "comment": "Functions accessable through the intrinsic ISO_FORTRAN_ENV module. Introduced in the Fortran 2003 standard.",
            "end": "(?<!\\G)",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#parentheses-dummy-variables"
              }
            ]
          },
          {
            "begin": "(?ix)\\b(null)\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.intrinsic.fortran"
              },
              "2": {
                "name": "punctuation.parentheses.left.fortran"
              }
            },
            "comment": "Intrinsic functions introduced in the Fortran 1995 standard.",
            "end": "(?<!\\G)",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#parentheses-dummy-variables"
              }
            ]
          },
          {
            "begin": "(?ix)\\b(achar|adjustl|adjustr|all|allocated|associated|any|bit_size|btest|ceiling|count|cshift|digits|dot_product|eoshift|epsilon|exponent|floor|fraction|huge|iachar|iand|ibclr|ibits|ibset|ieor|ior|ishftc?| kind|lbound|len_trim|logical|matmul|maxexponent|maxloc|maxval|merge|minexponent|minloc|minval|modulo|nearest|not|pack|precision|present|product|radix|range|repeat|reshape|rrspacing|scale|scan|selected_(int|real)_kind|set_exponent|shape|size|spacing|spread|sum|tiny|transfer|transpose|trim|ubound|unpack|verify)\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.intrinsic.fortran"
              },
              "2": {
                "name": "punctuation.parentheses.left.fortran"
              }
            },
            "comment": "Intrinsic functions introduced in the Fortran 1990 standard.",
            "end": "(?<!\\G)",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#parentheses-dummy-variables"
              }
            ]
          },
          {
            "begin": "(?ix)\\b([icd]?abs|acos|[ad]int|[ad]nint|aimag|amax[01]| amin[01]|d?asin|d?atan|d?atan2|char|conjg|[cd]?cos|d?cosh|cmplx|dble| i?dim|dmax1|dmin1|dprod|[cd]?exp|float|ichar|idint|ifix|index|int|len| lge|lgt|lle|llt|[acd]?log|[ad]?log10|max[01]?|min[01]?|[ad]?mod| (id)?nint|real|[di]?sign|[cd]?sin|d?sinh|sngl|[cd]?sqrt|d?tan|d?tanh) \\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "support.function.intrinsic.fortran"
              },
              "2": {
                "name": "punctuation.parentheses.left.fortran"
              }
            },
            "comment": "Intrinsic functions introduced in the Fortran 1977 standard.",
            "end": "(?<!\\G)",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#parentheses-dummy-variables"
              }
            ]
          }
        ]
      },
      "intrinsic-subroutines": {
        "patterns": [
          {
            "begin": "(?ix)\\G\\s*\\b(date_and_time|mvbits|random_number|random_seed| system_clock)\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.subroutine.fortran"
              },
              "2": {
                "name": "punctuation.parentheses.left.fortran"
              }
            },
            "comment": "Intrinsic subroutines introduced in the Fortran 1990 standard.",
            "end": "(?<!\\G)",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#parentheses-dummy-variables"
              }
            ]
          },
          {
            "begin": "(?i)\\G\\s*\\b(cpu_time)\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.subroutine.fortran"
              },
              "2": {
                "name": "punctuation.parentheses.left.fortran"
              }
            },
            "comment": "Intrinsic subroutines introduced in the Fortran 1995 standard.",
            "end": "(?<!\\G)",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#parentheses-dummy-variables"
              }
            ]
          },
          {
            "begin": "(?i)\\G\\s*\\b(ieee_(get|set)_(rounding|underflow)_mode)\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.subroutine.fortran"
              },
              "2": {
                "name": "punctuation.parentheses.left.fortran"
              }
            },
            "comment": "Subroutines accessable through the intrinsic IEEE_ARITHMETIC module. Introduced in the Fortran 2003 standard.",
            "end": "(?<!\\G)",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#parentheses-dummy-variables"
              }
            ]
          },
          {
            "begin": "(?i)\\G\\s*\\b(ieee_(get|set)_(flag|halting_mode|status))\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.subroutine.fortran"
              },
              "2": {
                "name": "punctuation.parentheses.left.fortran"
              }
            },
            "comment": "Subroutines accessable through the intrinsic IEEE_EXCEPTIONS module. Introduced in the Fortran 2003 standard.",
            "end": "(?<!\\G)",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#parentheses-dummy-variables"
              }
            ]
          },
          {
            "begin": "(?i)\\G\\s*\\b(c_f_(pointer|procpointer))\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.subroutine.fortran"
              },
              "2": {
                "name": "punctuation.parentheses.left.fortran"
              }
            },
            "comment": "Subroutines accessable through the intrinsic ISO_C_BINDING module. Introduced in the Fortran 2003 standard.",
            "end": "(?<!\\G)",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#parentheses-dummy-variables"
              }
            ]
          },
          {
            "begin": "(?ix)\\G\\s*\\b(execute_command_line|get_command| get_command_argument|get_environment_variable|move_alloc)\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.subroutine.fortran"
              },
              "2": {
                "name": "punctuation.parentheses.left.fortran"
              }
            },
            "comment": "Intrinsic subroutines introduced in the Fortran 2008 standard.",
            "end": "(?<!\\G)",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#parentheses-dummy-variables"
              }
            ]
          }
        ]
      },
      "invalid-character": {
        "match": "(?i)[^\\s;!\\n]+",
        "name": "invalid.error.character.fortran"
      },
      "invalid-word": {
        "match": "(?i)\\b\\w+\\b",
        "name": "invalid.error.word.fortran"
      },
      "language-binding-attribute": {
        "begin": "(?i)\\s*\\b(bind)\\s*\\(",
        "beginCaptures": {
          "1": {
            "name": "storage.modifier.bind.fortran"
          }
        },
        "comment": "Introduced in Fortran 2003 standard.",
        "end": "(?:\\)|(?=\\n))",
        "patterns": [
          {
            "match": "(?i)\\b(c)\\b",
            "name": "variable.parameter.fortran"
          },
          {
            "include": "#dummy-variable"
          },
          {
            "include": "$base"
          }
        ]
      },
      "line-continuation-operator": {
        "comment": "Operator that allows a line to be continued on the next line.",
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "keyword.operator.line-continuation.fortran"
              }
            },
            "match": "(?:^|(?<=;))\\s*(&)"
          },
          {
            "begin": "\\s*(&)",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.line-continuation.fortran"
              }
            },
            "contentName": "meta.line-continuation.fortran",
            "end": "(?i)^(?:\\s*(&))?",
            "endCaptures": {
              "1": {
                "name": "keyword.operator.line-continuation.fortran"
              }
            },
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "match": "\\S[^!]*",
                "name": "invalid.error.line-cont.fortran"
              }
            ]
          }
        ]
      },
      "logical-constant": {
        "captures": {
          "1": {
            "name": "constant.language.logical.false.fortran"
          },
          "2": {
            "name": "constant.language.logical.true.fortran"
          }
        },
        "comment": "Logical constants",
        "match": "(?i)\\s*(?:(\\.false\\.)|(\\.true\\.))"
      },
      "logical-control-expression": {
        "begin": "\\G(?=\\s*\\()",
        "end": "(?<!\\G)",
        "name": "meta.expression.control.logical.fortran",
        "patterns": [
          {
            "include": "#parentheses"
          }
        ]
      },
      "logical-operators": {
        "patterns": [
          {
            "comment": "Introduced in the Fortran 1977 standard.",
            "match": "(?ix)(\\s*\\.(and|eq|eqv|le|lt|ge|gt|ne|neqv|not|or)\\.)",
            "name": "keyword.logical.fortran"
          },
          {
            "comment": "Introduced in the Fortran 1990 standard.",
            "match": "(\\=\\=|\\/\\=|\\>\\=|(?<!\\=)\\>|\\<\\=|\\<)",
            "name": "keyword.logical.fortran.modern"
          }
        ]
      },
      "logical-type": {
        "comment": "Introduced in the Fortran 1977 standard.",
        "patterns": [
          {
            "begin": "(?i)\\b(logical)\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "storage.type.logical.fortran"
              },
              "2": {
                "name": "punctuation.parentheses.left.fortran"
              }
            },
            "contentName": "meta.type-spec.fortran",
            "end": "(?<!\\G)",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#parentheses-dummy-variables"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.character.fortran"
              },
              "2": {
                "name": "keyword.operator.multiplication.fortran"
              },
              "3": {
                "name": "constant.numeric.fortran"
              }
            },
            "match": "(?i)\\b(logical)\\b(?:\\s*(\\*)\\s*(\\d*))?"
          }
        ]
      },
      "module-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.module.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1990 standard.",
        "match": "(?ix)\\s*\\b(module)\\b(?=\\s*(?:[;!\\n]| [^'\";!\\n]*\\b(?:function|procedure|subroutine)\\b))"
      },
      "module-definition": {
        "begin": "(?ix)(?=\\b(module)\\b)(?![^'\";!\\n]* \\b(?:function|procedure|subroutine)\\b)",
        "comment": "Introduced in the Fortran 1990 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.module.fortran",
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "keyword.other.program.fortran"
              }
            },
            "match": "(?i)\\G\\s*\\b(module)\\b"
          },
          {
            "applyEndPatternLast": 1,
            "begin": "(?i)\\s*\\b([a-z]\\w*)\\b",
            "beginCaptures": {
              "1": {
                "name": "entity.name.class.module.fortran"
              }
            },
            "comment": "Module body.",
            "end": "(?ix)\\b(?:(end\\s*module)(?:\\s+([a-z_]\\w*))?|(end))\\b \\s*([^;!\\n]+)?(?=[;!\\n])",
            "endCaptures": {
              "1": {
                "name": "keyword.other.endmodule.fortran"
              },
              "2": {
                "name": "entity.name.class.module.fortran"
              },
              "3": {
                "name": "keyword.other.endmodule.fortran"
              },
              "4": {
                "name": "invalid.error.module-definition.fortran"
              }
            },
            "patterns": [
              {
                "begin": "\\G",
                "comment": "Module specification block.",
                "end": "(?i)(?=\\b(?:end\\s*[;!\\n]|end\\s*module\\b))",
                "name": "meta.block.specification.module.fortran",
                "patterns": [
                  {
                    "begin": "(?i)\\b(contains)\\b",
                    "beginCaptures": {
                      "1": {
                        "name": "keyword.control.contains.fortran"
                      }
                    },
                    "comment": "Module contains block.",
                    "end": "(?i)(?=\\s*(?:end\\s*[;!\\n]|end\\s*module\\b))",
                    "name": "meta.block.contains.fortran",
                    "patterns": [
                      {
                        "include": "$base"
                      }
                    ]
                  },
                  {
                    "include": "$base"
                  }
                ]
              }
            ]
          }
        ]
      },
      "name-list": {
        "begin": "(?i)(?=\\s*[a-z])",
        "comment": "Name list.",
        "contentName": "meta.name-list.fortran",
        "end": "(?=[\\);!\\n])",
        "patterns": [
          {
            "include": "#constants"
          },
          {
            "include": "#operators"
          },
          {
            "include": "#intrinsic-functions"
          },
          {
            "include": "#array-constructor"
          },
          {
            "include": "#parentheses"
          },
          {
            "include": "#brackets"
          },
          {
            "include": "#assignment-keyword"
          },
          {
            "include": "#operator-keyword"
          },
          {
            "include": "#variable"
          }
        ]
      },
      "named-control-constructs": {
        "applyEndPatternLast": 1,
        "begin": "(?ix)([a-z]\\w*)\\s*(:)(?=\\s*(?:associate|block(?!\\s*data)|critical|do|forall|if|select\\s*case|select\\s*type|select\\s*rank|where)\\b)",
        "comment": "Introduced in the Fortran 1990 standard.",
        "contentName": "meta.named-construct.fortran.modern",
        "end": "(?i)(?!\\s*\\b(?:associate|block(?!\\s*data)|critical|do|forall|if|select\\s*case|select\\s*type|select\\s*rank|where)\\b)(?:\\b(\\1)\\b)?([^\\s;!\\n]*?)?(?=\\s*[;!\\n])",
        "endCaptures": {
          "1": {
            "name": "meta.label.end.name.fortran"
          },
          "2": {
            "name": "invalid.error.named-control-constructs.fortran.modern"
          }
        },
        "patterns": [
          {
            "include": "#unnamed-control-constructs"
          }
        ]
      },
      "namelist-statement": {
        "begin": "(?i)\\b(namelist)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.namelist.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1990 standard.",
        "end": "(?=[;!\\n])",
        "patterns": [
          {
            "include": "$base"
          }
        ]
      },
      "non-intrinsic-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.non-intrinsic.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1990 standard.",
        "match": "(?i)\\s*\\b(non_intrinsic)\\b"
      },
      "non-overridable-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.non-overridable.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2003 standard.",
        "match": "(?i)\\s*\\b(non_overridable)\\b"
      },
      "nopass-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.nopass.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2003 standard.",
        "match": "(?i)\\s*\\b(nopass)\\b"
      },
      "nullify-statement": {
        "begin": "(?i)\\b(nullify)\\s*(?=\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.nullify.fortran"
          },
          "2": {
            "name": "punctuation.parentheses.left.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1990 standard.",
        "end": "(?<!\\G)",
        "endCaptures": {
          "1": {
            "name": "punctuation.parentheses.right.fortran"
          }
        },
        "name": "meta.statement.nullify.fortran",
        "patterns": [
          {
            "include": "#parentheses-dummy-variables"
          }
        ]
      },
      "numeric-constant": {
        "comment": "Numeric constants",
        "match": "(?ix)[\\+\\-]?(\\b\\d+\\.?\\d*|\\.\\d+) (_\\w+|d[\\+\\-]?\\d+|e[\\+\\-]?\\d+(_\\w+)?)?(?![a-z_])",
        "name": "constant.numeric.fortran"
      },
      "numeric-type": {
        "comment": "Introduced in the Fortran 1977 standard.",
        "patterns": [
          {
            "begin": "(?i)\\b(?:(complex)|(double\\s*precision)|(double\\s*complex)|(integer)|(real))\\s*(?=\\()",
            "beginCaptures": {
              "1": {
                "name": "storage.type.complex.fortran"
              },
              "2": {
                "name": "storage.type.double.fortran"
              },
              "3": {
                "name": "storage.type.doublecomplex.fortran"
              },
              "4": {
                "name": "storage.type.integer.fortran"
              },
              "5": {
                "name": "storage.type.real.fortran"
              },
              "6": {
                "name": "punctuation.parentheses.left.fortran"
              }
            },
            "contentName": "meta.type-spec.fortran",
            "end": "(?<!\\G)",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#parentheses-dummy-variables"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.complex.fortran"
              },
              "2": {
                "name": "storage.type.double.fortran"
              },
              "3": {
                "name": "storage.type.doublecomplex.fortran"
              },
              "4": {
                "name": "storage.type.integer.fortran"
              },
              "5": {
                "name": "storage.type.real.fortran"
              },
              "6": {
                "name": "storage.type.dimension.fortran"
              },
              "7": {
                "name": "keyword.operator.multiplication.fortran"
              },
              "8": {
                "name": "constant.numeric.fortran"
              }
            },
            "match": "(?ix)\\b(?:(complex)|(double\\s*precision)|(double\\s*complex)|(integer)|(real)|(dimension))\\b(?:\\s*(\\*)\\s*(\\d*))?"
          }
        ]
      },
      "operator-keyword": {
        "begin": "(?i)\\s*\\b(operator)\\s*(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.generic-spec.operator.fortran"
          },
          "2": {
            "name": "punctuation.parentheses.left.fortran"
          }
        },
        "comment": "Operator generic specification.",
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "punctuation.parentheses.right.fortran"
          }
        },
        "patterns": [
          {
            "include": "#arithmetic-operators"
          },
          {
            "include": "#logical-operators"
          },
          {
            "include": "#user-defined-operators"
          },
          {
            "include": "#invalid-word"
          }
        ]
      },
      "operators": {
        "patterns": [
          {
            "include": "#arithmetic-operators"
          },
          {
            "include": "#assignment-operator"
          },
          {
            "include": "#derived-type-operators"
          },
          {
            "include": "#logical-operators"
          },
          {
            "include": "#pointer-operators"
          },
          {
            "include": "#string-operators"
          },
          {
            "include": "#user-defined-operators"
          }
        ]
      },
      "optional-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.optional.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1990 standard.",
        "match": "(?i)\\s*\\b(optional)\\b"
      },
      "parameter-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.parameter.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1977 standard.",
        "match": "(?i)\\s*\\b(parameter)\\b"
      },
      "parentheses": {
        "begin": "\\s*(\\()",
        "beginCaptures": {
          "1": {
            "name": "punctuation.parentheses.left.fortran"
          }
        },
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "punctuation.parentheses.right.fortran"
          }
        },
        "patterns": [
          {
            "include": "#comments"
          },
          {
            "include": "#constants"
          },
          {
            "include": "#operators"
          },
          {
            "include": "#array-constructor"
          },
          {
            "include": "#parentheses"
          },
          {
            "include": "#intrinsic-functions"
          },
          {
            "include": "#variable"
          }
        ]
      },
      "parentheses-dummy-variables": {
        "begin": "\\s*(\\()",
        "beginCaptures": {
          "1": {
            "name": "punctuation.parentheses.left.fortran"
          }
        },
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "punctuation.parentheses.right.fortran"
          }
        },
        "patterns": [
          {
            "include": "#procedure-call-dummy-variable"
          },
          {
            "include": "#comments"
          },
          {
            "include": "#constants"
          },
          {
            "include": "#operators"
          },
          {
            "include": "#array-constructor"
          },
          {
            "include": "#parentheses"
          },
          {
            "include": "#intrinsic-functions"
          },
          {
            "include": "#variable"
          }
        ]
      },
      "pass-attribute": {
        "comment": "Introduced in the Fortran 2003 standard.",
        "patterns": [
          {
            "begin": "(?i)\\s*\\b(pass)\\s*\\(",
            "beginCaptures": {
              "1": {
                "name": "storage.modifier.pass.fortran"
              }
            },
            "comment": "Pass attribute with argument.",
            "end": "\\)|(?=\\n)",
            "patterns": []
          },
          {
            "captures": {
              "1": {
                "name": "storage.modifier.pass.fortran"
              }
            },
            "comment": "Pass attribute without argument.",
            "match": "(?i)\\s*\\b(pass)\\b"
          }
        ]
      },
      "pause-statement": {
        "begin": "(?i)\\s*\\b(pause)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.pause.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1977 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.statement.control.pause.fortran",
        "patterns": [
          {
            "include": "#constants"
          },
          {
            "include": "#invalid-character"
          }
        ]
      },
      "pointer-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.pointer.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1990 standard.",
        "match": "(?i)\\s*\\b(pointer)\\b"
      },
      "pointer-operators": {
        "comment": "Introduced in the Fortran 1990 standard.",
        "match": "(\\=\\>)",
        "name": "keyword.other.point.fortran"
      },
      "preprocessor": {
        "begin": "^\\s*(#:?)",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.preprocessor.indicator.fortran"
          }
        },
        "end": "\\n",
        "name": "meta.preprocessor",
        "patterns": [
          {
            "include": "#preprocessor-if-construct"
          },
          {
            "include": "#preprocessor-statements"
          }
        ]
      },
      "preprocessor-arithmetic-operators": {
        "captures": {
          "1": {
            "name": "keyword.operator.subtraction.fortran"
          },
          "2": {
            "name": "keyword.operator.addition.fortran"
          },
          "3": {
            "name": "keyword.operator.division.fortran"
          },
          "4": {
            "name": "keyword.operator.multiplication.fortran"
          }
        },
        "comment": "division regex is different than in main fortran",
        "match": "(\\-)|(\\+)|(\\/)|(\\*)"
      },
      "preprocessor-assignment-operator": {
        "comment": "assignments with = are not allowed",
        "match": "(?<!\\=)(\\=)(?!\\=)",
        "name": "keyword.operator.assignment.preprocessor.fortran"
      },
      "preprocessor-comments": {
        "begin": "/\\*",
        "end": "\\*/",
        "name": "comment.preprocessor"
      },
      "preprocessor-constants": {
        "patterns": [
          {
            "include": "#cpp-numeric-constant"
          },
          {
            "include": "#preprocessor-string-constant"
          }
        ]
      },
      "preprocessor-define-statement": {
        "begin": "(?i)\\G\\s*\\b(define)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.preprocessor.define.fortran"
          }
        },
        "end": "(?=\\n)",
        "name": "meta.preprocessor.macro.fortran",
        "patterns": [
          {
            "include": "#preprocessor-comments"
          },
          {
            "include": "#preprocessor-constants"
          },
          {
            "include": "#preprocessor-line-continuation-operator"
          }
        ]
      },
      "preprocessor-defined-function": {
        "captures": {
          "1": {
            "name": "keyword.control.preprocessor.defined.fortran"
          }
        },
        "match": "(?i)\\b(defined)\\b"
      },
      "preprocessor-error-statement": {
        "begin": "(?i)\\G\\s*(error)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.preprocessor.error.fortran"
          }
        },
        "end": "(?=\\n)",
        "name": "meta.preprocessor.macro.fortran",
        "patterns": [
          {
            "include": "#preprocessor-comments"
          },
          {
            "include": "#preprocessor-string-constant"
          },
          {
            "include": "#preprocessor-line-continuation-operator"
          }
        ]
      },
      "preprocessor-if-construct": {
        "patterns": [
          {
            "begin": "(?i)\\G\\s*\\b(if)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.preprocessor.if.fortran"
              }
            },
            "end": "(?=\\n)",
            "name": "meta.preprocessor.conditional.fortran",
            "patterns": [
              {
                "include": "#preprocessor-comments"
              },
              {
                "include": "#cpp-numeric-constant"
              },
              {
                "include": "#preprocessor-logical-operators"
              },
              {
                "include": "#preprocessor-arithmetic-operators"
              },
              {
                "include": "#preprocessor-defined-function"
              },
              {
                "include": "#preprocessor-line-continuation-operator"
              }
            ]
          },
          {
            "begin": "(?i)\\G\\s*\\b(ifdef)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.preprocessor.ifdef.fortran"
              }
            },
            "end": "(?=\\n)",
            "patterns": [
              {
                "include": "#preprocessor-comments"
              },
              {
                "include": "#cpp-numeric-constant"
              },
              {
                "include": "#preprocessor-logical-operators"
              },
              {
                "include": "#preprocessor-arithmetic-operators"
              },
              {
                "include": "#preprocessor-line-continuation-operator"
              }
            ]
          },
          {
            "begin": "(?i)\\G\\s*\\b(ifndef)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.preprocessor.ifndef.fortran"
              }
            },
            "end": "(?=\\n)",
            "patterns": [
              {
                "include": "#preprocessor-comments"
              },
              {
                "include": "#cpp-numeric-constant"
              },
              {
                "include": "#preprocessor-logical-operators"
              },
              {
                "include": "#preprocessor-arithmetic-operators"
              },
              {
                "include": "#preprocessor-line-continuation-operator"
              }
            ]
          },
          {
            "begin": "(?i)\\G\\s*\\b(else)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.preprocessor.else.fortran"
              }
            },
            "end": "(?=\\n)",
            "patterns": [
              {
                "include": "#preprocessor-comments"
              },
              {
                "include": "#cpp-numeric-constant"
              }
            ]
          },
          {
            "begin": "(?i)\\G\\s*\\b(elif)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.preprocessor.elif.fortran"
              }
            },
            "end": "(?=\\n)",
            "patterns": [
              {
                "include": "#preprocessor-comments"
              },
              {
                "include": "#cpp-numeric-constant"
              },
              {
                "include": "#preprocessor-logical-operators"
              },
              {
                "include": "#preprocessor-arithmetic-operators"
              },
              {
                "include": "#preprocessor-defined-function"
              },
              {
                "include": "#preprocessor-line-continuation-operator"
              }
            ]
          },
          {
            "begin": "(?i)\\G\\s*\\b(endif)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.preprocessor.endif.fortran"
              }
            },
            "end": "(?=\\n)",
            "patterns": [
              {
                "include": "#preprocessor-comments"
              }
            ]
          }
        ]
      },
      "preprocessor-include-statement": {
        "begin": "(?i)\\G\\s*(include)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.preprocessor.include.fortran"
          }
        },
        "end": "(?=\\n)",
        "name": "meta.preprocessor.include.fortran",
        "patterns": [
          {
            "include": "#preprocessor-comments"
          },
          {
            "include": "#preprocessor-string-constant"
          },
          {
            "begin": "<",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.preprocessor.fortran"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.preprocessor.fortran"
              }
            },
            "name": "string.quoted.other.lt-gt.include.preprocessor.fortran"
          },
          {
            "include": "#line-continuation-operator"
          }
        ]
      },
      "preprocessor-line-continuation-operator": {
        "begin": "\\s*(\\\\)",
        "beginCaptures": {
          "1": {
            "name": "constant.character.escape.line-continuation.preprocessor.fortran"
          }
        },
        "end": "(?i)^"
      },
      "preprocessor-logical-operators": {
        "captures": {
          "1": {
            "name": "keyword.operator.logical.preprocessor.and.fortran"
          },
          "2": {
            "name": "keyword.operator.logical.preprocessor.equals.fortran"
          },
          "3": {
            "name": "keyword.operator.logical.preprocessor.not_equals.fortran"
          },
          "4": {
            "name": "keyword.operator.logical.preprocessor.or.fortran"
          },
          "5": {
            "name": "keyword.operator.logical.preprocessor.less_eq.fortran"
          },
          "6": {
            "name": "keyword.operator.logical.preprocessor.more_eq.fortran"
          },
          "7": {
            "name": "keyword.operator.logical.preprocessor.less.fortran"
          },
          "8": {
            "name": "keyword.operator.logical.preprocessor.more.fortran"
          },
          "9": {
            "name": "keyword.operator.logical.preprocessor.complementary.fortran"
          },
          "10": {
            "name": "keyword.operator.logical.preprocessor.xor.fortran"
          },
          "11": {
            "name": "keyword.operator.logical.preprocessor.bitand.fortran"
          },
          "12": {
            "name": "keyword.operator.logical.preprocessor.not.fortran"
          },
          "13": {
            "name": "keyword.operator.logical.preprocessor.bitor.fortran"
          }
        },
        "comment": "and:&&, bitand:&, or:||, bitor:|, not eq:!=, not:!, xor:^, compl:~",
        "match": "(&&)|(==)|(\\!=)|(\\|\\|)|(\\<\\=)|(\\>=)|(\\<)|(\\>)|(~)|(\\^)|(&)|(\\!)|(\\|)",
        "name": "keyword.operator.logical.preprocessor.fortran"
      },
      "preprocessor-operators": {
        "patterns": [
          {
            "include": "#preprocessor-line-continuation-operator"
          },
          {
            "include": "#preprocessor-logical-operators"
          },
          {
            "include": "#preprocessor-arithmetic-operators"
          }
        ]
      },
      "preprocessor-pragma-statement": {
        "begin": "(?i)\\G\\s*\\b(pragma)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.preprocessor.pragma.fortran"
          }
        },
        "end": "(?=\\n)",
        "name": "meta.preprocessor.pragma.fortran",
        "patterns": [
          {
            "include": "#preprocessor-comments"
          },
          {
            "include": "#preprocessor-string-constant"
          }
        ]
      },
      "preprocessor-statements": {
        "patterns": [
          {
            "include": "#preprocessor-define-statement"
          },
          {
            "include": "#preprocessor-error-statement"
          },
          {
            "include": "#preprocessor-include-statement"
          },
          {
            "include": "#preprocessor-preprocessor-pragma-statement"
          },
          {
            "include": "#preprocessor-undefine-statement"
          }
        ]
      },
      "preprocessor-string-constant": {
        "patterns": [
          {
            "begin": "\"",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.preprocessor.fortran"
              }
            },
            "comment": "Double quote string",
            "end": "\"",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.preprocessor.fortran"
              }
            },
            "name": "string.quoted.double.include.preprocessor.fortran"
          },
          {
            "begin": "'",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.preprocessor.fortran"
              }
            },
            "comment": "Single quote string",
            "end": "'",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.preprocessor.fortran"
              }
            },
            "name": "string.quoted.single.include.preprocessor.fortran"
          }
        ]
      },
      "preprocessor-undefine-statement": {
        "begin": "(?i)\\G\\s*\\b(undef)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.preprocessor.undef.fortran"
          }
        },
        "end": "(?=\\n)",
        "name": "meta.preprocessor.undef.fortran",
        "patterns": [
          {
            "include": "#preprocessor-comments"
          },
          {
            "include": "#preprocessor-line-continuation-operator"
          }
        ]
      },
      "private-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.private.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1990 standard.",
        "match": "(?i)\\s*\\b(private)\\b"
      },
      "procedure-call-dummy-variable": {
        "match": "(?i)\\s*([a-z]\\w*)(?=\\s*\\=)(?!\\s*\\=\\=)",
        "name": "variable.parameter.dummy-variable.fortran.modern"
      },
      "procedure-definition": {
        "begin": "(?i)(?=[^'\";!\\n]*\\bmodule\\s+procedure\\b)",
        "comment": "Procedure program unit. Introduced in the Fortran 2008 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.procedure.fortran",
        "patterns": [
          {
            "begin": "(?i)\\s*\\b(module\\s+procedure)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.other.procedure.fortran"
              }
            },
            "end": "(?=[;!\\n])",
            "patterns": [
              {
                "begin": "(?i)\\G\\s*\\b([a-z]\\w*)\\b",
                "beginCaptures": {
                  "1": {
                    "name": "entity.name.function.procedure.fortran"
                  }
                },
                "comment": "Procedure body.",
                "end": "(?ix)\\s*\\b(?:(end\\s*procedure)(?:\\s+([a-z_]\\w*))?|(end))\\b \\s*([^;!\\n]+)?(?=[;!\\n])",
                "endCaptures": {
                  "1": {
                    "name": "keyword.other.endprocedure.fortran"
                  },
                  "2": {
                    "name": "entity.name.function.procedure.fortran"
                  },
                  "3": {
                    "name": "keyword.other.endprocedure.fortran"
                  },
                  "4": {
                    "name": "invalid.error.procedure-definition.fortran"
                  }
                },
                "patterns": [
                  {
                    "begin": "\\G(?!\\s*[;!\\n])",
                    "comment": "Rest of the first line in procedure construct - should be empty.",
                    "end": "(?=[;!\\n])",
                    "name": "meta.first-line.fortran",
                    "patterns": [
                      {
                        "include": "#invalid-character"
                      }
                    ]
                  },
                  {
                    "begin": "(?i)(?!\\s*(?:contains\\b|end\\s*[;!\\n]|end\\s*procedure\\b))",
                    "comment": "Specification and execution block.",
                    "end": "(?i)(?=\\s*(?:contains\\b|end\\s*[;!\\n]|end\\s*procedure\\b))",
                    "name": "meta.block.specification.procedure.fortran",
                    "patterns": [
                      {
                        "include": "$self"
                      }
                    ]
                  },
                  {
                    "begin": "(?i)\\s*(contains)\\b",
                    "beginCaptures": {
                      "1": {
                        "name": "keyword.control.contains.fortran"
                      }
                    },
                    "comment": "Contains block.",
                    "end": "(?i)(?=\\s*(?:end\\s*[;!\\n]|end\\s*procedure\\b))",
                    "name": "meta.block.contains.fortran",
                    "patterns": [
                      {
                        "include": "$self"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "procedure-name": {
        "captures": {
          "1": {
            "name": "entity.name.function.procedure.fortran"
          }
        },
        "comment": "Procedure name.",
        "match": "(?i)\\s*\\b([a-z]\\w*)\\b"
      },
      "procedure-name-list": {
        "begin": "(?i)(?=\\s*[a-z])",
        "comment": "Name list.",
        "contentName": "meta.name-list.fortran",
        "end": "(?=[;!\\n])",
        "patterns": [
          {
            "begin": "(?!\\s*\\n)",
            "end": "(,)|(?=[!;\\n])",
            "endCaptures": {
              "1": {
                "name": "punctuation.comma.fortran"
              }
            },
            "patterns": [
              {
                "include": "#procedure-name"
              },
              {
                "include": "#pointer-operators"
              }
            ]
          }
        ]
      },
      "procedure-specification-statement": {
        "begin": "(?i)(?=\\b(?:procedure)\\b)",
        "comment": "Introduced in the Fortran 2003 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.specification.procedure.fortran",
        "patterns": [
          {
            "include": "#procedure-type"
          },
          {
            "begin": "(?=\\s*(,|::|\\())",
            "comment": "Attribute list.",
            "contentName": "meta.attribute-list.procedure.fortran",
            "end": "(::)|(?=[;!\\n])",
            "endCaptures": {
              "1": {
                "name": "keyword.operator.double-colon.fortran"
              }
            },
            "patterns": [
              {
                "begin": "(,)|^|(?<=&)",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.comma.fortran"
                  }
                },
                "end": "(?=::|[,&;!\\n])",
                "patterns": [
                  {
                    "include": "#access-attribute"
                  },
                  {
                    "include": "#intent-attribute"
                  },
                  {
                    "include": "#optional-attribute"
                  },
                  {
                    "include": "#pointer-attribute"
                  },
                  {
                    "include": "#protected-attribute"
                  },
                  {
                    "include": "#save-attribute"
                  },
                  {
                    "include": "#invalid-word"
                  }
                ]
              }
            ]
          },
          {
            "include": "#procedure-name-list"
          }
        ]
      },
      "procedure-type": {
        "comment": "Introduced in the Fortran ???? standard.",
        "patterns": [
          {
            "begin": "(?i)\\b(procedure)\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "storage.type.procedure.fortran"
              },
              "2": {
                "name": "punctuation.parentheses.left.fortran"
              }
            },
            "contentName": "meta.type-spec.fortran",
            "end": "(\\))",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.right.fortran"
              }
            },
            "patterns": [
              {
                "include": "#types"
              },
              {
                "include": "#procedure-name"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.procedure.fortran"
              }
            },
            "match": "(?i)\\b(procedure)\\b"
          }
        ]
      },
      "program-definition": {
        "begin": "(?i)(?=\\b(program)\\b)",
        "comment": "Introduced in the Fortran 1977 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.program.fortran",
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "keyword.control.program.fortran"
              }
            },
            "match": "(?i)\\G\\s*\\b(program)\\b"
          },
          {
            "applyEndPatternLast": 1,
            "begin": "(?i)\\s*\\b([a-z]\\w*)\\b",
            "beginCaptures": {
              "1": {
                "name": "entity.name.program.fortran"
              }
            },
            "comment": "Program body.",
            "end": "(?ix)\\b(?:(end\\s*program)(?:\\s+([a-z_]\\w*))?|(end))\\b\\s*([^;!\\n]+)?(?=[;!\\n])",
            "endCaptures": {
              "1": {
                "name": "keyword.control.endprogram.fortran"
              },
              "2": {
                "name": "entity.name.program.fortran"
              },
              "3": {
                "name": "keyword.control.endprogram.fortran"
              },
              "4": {
                "name": "invalid.error.program-definition.fortran"
              }
            },
            "patterns": [
              {
                "begin": "\\G",
                "comment": "Program specification block.",
                "end": "(?i)(?=\\b(?:end\\s*[;!\\n]|end\\s*program\\b))",
                "name": "meta.block.specification.program.fortran",
                "patterns": [
                  {
                    "begin": "(?i)\\b(contains)\\b",
                    "beginCaptures": {
                      "1": {
                        "name": "keyword.control.contains.fortran"
                      }
                    },
                    "comment": "Program contains block.",
                    "end": "(?i)(?=(?:end\\s*[;!\\n]|end\\s*program\\b))",
                    "name": "meta.block.contains.fortran",
                    "patterns": [
                      {
                        "include": "$base"
                      }
                    ]
                  },
                  {
                    "include": "$base"
                  }
                ]
              }
            ]
          }
        ]
      },
      "protected-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.protected.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2003 standard.",
        "match": "(?i)\\s*\\b(protected)\\b"
      },
      "public-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.public.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1990 standard.",
        "match": "(?i)\\s*\\b(public)\\b"
      },
      "pure-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.impure.fortran"
          },
          "2": {
            "name": "storage.modifier.pure.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1995 standard.",
        "match": "(?i)\\s*\\b(?:(impure)|(pure))\\b"
      },
      "recursive-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.non_recursive.fortran"
          },
          "2": {
            "name": "storage.modifier.recursive.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1977 standard.",
        "match": "(?i)\\s*\\b(?:(non_recursive)|(recursive))\\b"
      },
      "result-statement": {
        "begin": "(?i)\\s*\\b(result)\\s*(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.result.fortran"
          },
          "2": {
            "name": "punctuation.parentheses.left.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1990 standard.",
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "punctuation.parentheses.right.fortran"
          }
        },
        "patterns": [
          {
            "include": "#dummy-variable"
          }
        ]
      },
      "return-statement": {
        "begin": "(?i)\\s*\\b(return)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.return.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1977 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.statement.control.return.fortran",
        "patterns": [
          {
            "include": "#invalid-character"
          }
        ]
      },
      "save-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.save.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1977 standard.",
        "match": "(?i)\\s*\\b(save)\\b"
      },
      "select-case-construct": {
        "begin": "(?i)\\b(select\\s*case)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.selectcase.fortran"
          }
        },
        "comment": "Select case construct. Introduced in the Fortran 1990 standard.",
        "end": "(?i)\\b(end\\s*select)\\b",
        "endCaptures": {
          "1": {
            "name": "keyword.control.endselect.fortran"
          }
        },
        "name": "meta.block.select.case.fortran",
        "patterns": [
          {
            "include": "#parentheses"
          },
          {
            "begin": "(?i)\\b(case)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.case.fortran"
              }
            },
            "end": "(?i)(?=[;!\\n])",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.default.fortran"
                  }
                },
                "match": "(?i)\\G\\s*\\b(default)\\b"
              },
              {
                "include": "#parentheses"
              },
              {
                "include": "#invalid-word"
              }
            ]
          },
          {
            "include": "$base"
          }
        ]
      },
      "select-rank-construct": {
        "begin": "(?i)\\b(select\\s*rank)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.selectrank.fortran"
          }
        },
        "comment": "Select rank construct. Introduced in the Fortran 2008 standard.",
        "end": "(?i)\\b(end\\s*select)\\b",
        "endCaptures": {
          "1": {
            "name": "keyword.control.endselect.fortran"
          }
        },
        "name": "meta.block.select.rank.fortran",
        "patterns": [
          {
            "include": "#parentheses"
          },
          {
            "begin": "(?i)\\b(rank)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.rank.fortran"
              }
            },
            "end": "(?i)(?=[;!\\n])",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.default.fortran"
                  }
                },
                "match": "(?i)\\G\\s*\\b(default)\\b"
              },
              {
                "include": "#parentheses"
              },
              {
                "include": "#invalid-word"
              }
            ]
          },
          {
            "include": "$base"
          }
        ]
      },
      "select-type-construct": {
        "begin": "(?i)\\b(select\\s*type)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.selecttype.fortran"
          }
        },
        "comment": "Select type construct. Introduced in the Fortran 2003 standard.",
        "end": "(?i)\\b(end\\s*select)\\b",
        "endCaptures": {
          "1": {
            "name": "keyword.control.endselect.fortran"
          }
        },
        "name": "meta.block.select.type.fortran",
        "patterns": [
          {
            "include": "#parentheses"
          },
          {
            "begin": "(?i)\\b(?:(class)|(type))\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.class.fortran"
              },
              "2": {
                "name": "keyword.control.type.fortran"
              }
            },
            "end": "(?i)(?=[;!\\n])",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.default.fortran"
                  }
                },
                "match": "(?i)\\G\\s*\\b(default)\\b"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.is.fortran"
                  }
                },
                "match": "(?i)\\G\\s*\\b(is)\\b"
              },
              {
                "include": "#parentheses"
              },
              {
                "include": "#invalid-word"
              }
            ]
          },
          {
            "include": "$base"
          }
        ]
      },
      "sequence-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.sequence.fortran"
          }
        },
        "comment": "Introduced in the Fortran 20?? standard.",
        "match": "(?i)\\s*\\b(sequence)\\b"
      },
      "specification-statements": {
        "patterns": [
          {
            "include": "#attribute-specification-statement"
          },
          {
            "include": "#common-statement"
          },
          {
            "include": "#data-statement"
          },
          {
            "include": "#equivalence-statement"
          },
          {
            "include": "#implicit-statement"
          },
          {
            "include": "#namelist-statement"
          },
          {
            "include": "#use-statement"
          }
        ]
      },
      "stop-statement": {
        "begin": "(?i)\\s*\\b(stop)\\b(?:\\s*\\b([a-z]\\w*)\\b)?",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.stop.fortran"
          },
          "2": {
            "name": "meta.label.stop.stop"
          }
        },
        "comment": "Introduced in the Fortran 1977 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.statement.control.stop.fortran",
        "patterns": [
          {
            "include": "#constants"
          },
          {
            "include": "#string-operators"
          },
          {
            "include": "#invalid-character"
          }
        ]
      },
      "string-constant": {
        "comment": "Introduced in the Fortran 1977 standard.",
        "patterns": [
          {
            "applyEndPatternLast": 1,
            "begin": "'",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.fortran"
              }
            },
            "comment": "String",
            "end": "'",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.fortran"
              }
            },
            "name": "string.quoted.single.fortran",
            "patterns": [
              {
                "match": "''",
                "name": "constant.character.escape.apostrophe.fortran"
              }
            ]
          },
          {
            "applyEndPatternLast": 1,
            "begin": "\"",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.fortran"
              }
            },
            "comment": "String",
            "end": "\"",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.fortran"
              }
            },
            "name": "string.quoted.double.fortran",
            "patterns": [
              {
                "match": "\"\"",
                "name": "constant.character.escape.quote.fortran"
              }
            ]
          }
        ]
      },
      "string-line-continuation-operator": {
        "begin": "(&)(?=\\s*\\n)",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.line-continuation.fortran"
          }
        },
        "comment": "Operator that allows a line to be continued on the next line.",
        "end": "(?i)^(?:(?=\\s*[^\\s!&])|\\s*(&))",
        "endCaptures": {
          "1": {
            "name": "keyword.operator.line-continuation.fortran"
          }
        },
        "patterns": [
          {
            "include": "#comments"
          },
          {
            "match": "\\S.*",
            "name": "invalid.error.string-line-cont.fortran"
          }
        ]
      },
      "string-operators": {
        "comment": "Introduced in the Fortran 19?? standard.",
        "match": "(\\/\\/)",
        "name": "keyword.other.concatination.fortran"
      },
      "submodule-definition": {
        "begin": "(?i)(?=\\b(submodule)\\s*\\()",
        "comment": "Introduced in the Fortran 2008 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.submodule.fortran",
        "patterns": [
          {
            "begin": "(?i)\\G\\s*\\b(submodule)\\s*(\\()\\s*(\\w+)",
            "beginCaptures": {
              "1": {
                "name": "keyword.other.submodule.fortran"
              },
              "2": {
                "name": "punctuation.parentheses.left.fortran"
              },
              "3": {
                "name": "entity.name.class.submodule.fortran"
              }
            },
            "end": "(\\))",
            "endCaptures": {
              "1": {
                "name": "punctuation.parentheses.left.fortran"
              }
            },
            "patterns": []
          },
          {
            "applyEndPatternLast": 1,
            "begin": "(?i)\\s*\\b([a-z]\\w*)\\b",
            "beginCaptures": {
              "1": {
                "name": "entity.name.module.submodule.fortran"
              }
            },
            "comment": "Submodule body.",
            "end": "(?ix)\\s*\\b(?:(end\\s*submodule)(?:\\s+([a-z_]\\w*))?|(end))\\b \\s*([^;!\\n]+)?(?=[;!\\n])",
            "endCaptures": {
              "1": {
                "name": "keyword.other.endsubmodule.fortran"
              },
              "2": {
                "name": "entity.name.module.submodule.fortran"
              },
              "3": {
                "name": "keyword.other.endsubmodule.fortran"
              },
              "4": {
                "name": "invalid.error.submodule.fortran"
              }
            },
            "patterns": [
              {
                "begin": "\\G",
                "comment": "Submodule specification block.",
                "end": "(?i)(?=\\b(?:end\\s*[;!\\n]|end\\s*submodule\\b))",
                "name": "meta.block.specification.submodule.fortran",
                "patterns": [
                  {
                    "begin": "(?i)\\b(contains)\\b",
                    "beginCaptures": {
                      "1": {
                        "name": "keyword.control.contains.fortran"
                      }
                    },
                    "comment": "Submodule contains block.",
                    "end": "(?i)(?=\\s*(?:end\\s*[;!\\n]|end\\s*submodule\\b))",
                    "name": "meta.block.contains.fortran",
                    "patterns": [
                      {
                        "include": "$base"
                      }
                    ]
                  },
                  {
                    "include": "$base"
                  }
                ]
              }
            ]
          }
        ]
      },
      "subroutine-definition": {
        "begin": "(?i)(?=([^:'\";!\\n](?!\\bend))*\\bsubroutine\\b)",
        "comment": "Subroutine program unit. Introduced in the Fortran 1977 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.subroutine.fortran",
        "patterns": [
          {
            "begin": "(?i)(?=\\G\\s*(?!\\bsubroutine\\b))",
            "comment": "Attribute list.",
            "end": "(?i)(?=\\bsubroutine\\b)",
            "name": "meta.attribute-list.subroutine.fortran",
            "patterns": [
              {
                "include": "#elemental-attribute"
              },
              {
                "include": "#module-attribute"
              },
              {
                "include": "#pure-attribute"
              },
              {
                "include": "#recursive-attribute"
              },
              {
                "include": "#invalid-word"
              }
            ]
          },
          {
            "begin": "(?i)\\s*\\b(subroutine)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.other.subroutine.fortran"
              }
            },
            "end": "(?=[;!\\n])",
            "patterns": [
              {
                "begin": "(?i)\\G\\s*\\b([a-z]\\w*)\\b",
                "beginCaptures": {
                  "1": {
                    "name": "entity.name.function.subroutine.fortran"
                  }
                },
                "comment": "Subroutine body.",
                "end": "(?ix)\\b(?:(end\\s*subroutine)(?:\\s+([a-z_]\\w*))?|(end))\\b \\s*([^;!\\n]+)?(?=[;!\\n])",
                "endCaptures": {
                  "1": {
                    "name": "keyword.other.endsubroutine.fortran"
                  },
                  "2": {
                    "name": "entity.name.function.subroutine.fortran"
                  },
                  "3": {
                    "name": "keyword.other.endsubroutine.fortran"
                  },
                  "4": {
                    "name": "invalid.error.subroutine.fortran"
                  }
                },
                "patterns": [
                  {
                    "begin": "\\G(?!\\s*[;!\\n])",
                    "comment": "Rest of the first line in subroutine construct.",
                    "end": "(?=[;!\\n])",
                    "name": "meta.first-line.fortran",
                    "patterns": [
                      {
                        "include": "#dummy-variable-list"
                      },
                      {
                        "include": "#language-binding-attribute"
                      }
                    ]
                  },
                  {
                    "begin": "(?i)(?!\\b(?:end\\s*[;!\\n]|end\\s*subroutine\\b))",
                    "comment": "Specification and execution block.",
                    "end": "(?i)(?=\\b(?:end\\s*[;!\\n]|end\\s*subroutine\\b))",
                    "name": "meta.block.specification.subroutine.fortran",
                    "patterns": [
                      {
                        "begin": "(?i)\\b(contains)\\b",
                        "beginCaptures": {
                          "1": {
                            "name": "keyword.control.contains.fortran"
                          }
                        },
                        "comment": "Contains block.",
                        "end": "(?i)(?=(?:end\\s*[;!\\n]|end\\s*subroutine\\b))",
                        "name": "meta.block.contains.fortran",
                        "patterns": [
                          {
                            "include": "$base"
                          }
                        ]
                      },
                      {
                        "include": "$base"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "sync-all-statement": {
        "begin": "(?i)\\b(sync all|sync memory)(\\s*(?=\\())?",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.sync-all-memory.fortran"
          },
          "2": {
            "name": "punctuation.parentheses.left.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2018 standard.",
        "end": "(?<!\\G)",
        "endCaptures": {
          "1": {
            "name": "punctuation.parentheses.right.fortran"
          }
        },
        "name": "meta.statement.sync-all-memory.fortran",
        "patterns": [
          {
            "include": "#parentheses-dummy-variables"
          }
        ]
      },
      "sync-statement": {
        "begin": "(?i)\\b(sync images|sync team)\\s*(?=\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.sync-images-team.fortran"
          },
          "2": {
            "name": "punctuation.parentheses.left.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2018 standard.",
        "end": "(?<!\\G)",
        "endCaptures": {
          "1": {
            "name": "punctuation.parentheses.right.fortran"
          }
        },
        "name": "meta.statement.sync-images-team.fortran",
        "patterns": [
          {
            "include": "#parentheses-dummy-variables"
          }
        ]
      },
      "target-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.target.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1990 standard.",
        "match": "(?i)\\s*\\b(target)\\b"
      },
      "type-specification-statements": {
        "begin": "(?ix)(?=\\b(?:character|class|complex|double\\s*precision|double\\s*complex|integer|logical|real|type|dimension)\\b(?![^'\";!\\n:]*\\bfunction\\b))",
        "comment": "Supported types for function and escape :: if function is used as a variable name (which is bad practice).",
        "end": "(?=[\\);!\\n])",
        "name": "meta.specification.type.fortran",
        "patterns": [
          {
            "include": "#types"
          },
          {
            "begin": "(?=\\s*(,|::))",
            "comment": "Attribute list.",
            "contentName": "meta.attribute-list.type-specification-statements.fortran",
            "end": "(::)|(?=[;!\\n])",
            "endCaptures": {
              "1": {
                "name": "keyword.operator.double-colon.fortran"
              }
            },
            "patterns": [
              {
                "begin": "(,)|^|(?<=&)",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.comma.fortran"
                  }
                },
                "end": "(?=::|[,&;!\\n])",
                "patterns": [
                  {
                    "include": "#access-attribute"
                  },
                  {
                    "include": "#allocatable-attribute"
                  },
                  {
                    "include": "#asynchronous-attribute"
                  },
                  {
                    "include": "#codimension-attribute"
                  },
                  {
                    "include": "#contiguous-attribute"
                  },
                  {
                    "include": "#dimension-attribute"
                  },
                  {
                    "include": "#external-attribute"
                  },
                  {
                    "include": "#intent-attribute"
                  },
                  {
                    "include": "#intrinsic-attribute"
                  },
                  {
                    "include": "#language-binding-attribute"
                  },
                  {
                    "include": "#optional-attribute"
                  },
                  {
                    "include": "#parameter-attribute"
                  },
                  {
                    "include": "#pointer-attribute"
                  },
                  {
                    "include": "#protected-attribute"
                  },
                  {
                    "include": "#save-attribute"
                  },
                  {
                    "include": "#target-attribute"
                  },
                  {
                    "include": "#value-attribute"
                  },
                  {
                    "include": "#volatile-attribute"
                  },
                  {
                    "include": "#invalid-word"
                  }
                ]
              }
            ]
          },
          {
            "include": "#name-list"
          }
        ]
      },
      "types": {
        "patterns": [
          {
            "include": "#character-type"
          },
          {
            "include": "#derived-type"
          },
          {
            "include": "#logical-type"
          },
          {
            "include": "#numeric-type"
          }
        ]
      },
      "unnamed-control-constructs": {
        "patterns": [
          {
            "include": "#associate-construct"
          },
          {
            "include": "#block-construct"
          },
          {
            "include": "#critical-construct"
          },
          {
            "include": "#do-construct"
          },
          {
            "include": "#forall-construct"
          },
          {
            "include": "#if-construct"
          },
          {
            "include": "#select-case-construct"
          },
          {
            "include": "#select-type-construct"
          },
          {
            "include": "#select-rank-construct"
          },
          {
            "include": "#where-construct"
          }
        ]
      },
      "use-statement": {
        "begin": "(?i)\\b(use)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.use.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1990 standard.",
        "end": "(?=[;!\\n])",
        "name": "meta.statement.use.fortran",
        "patterns": [
          {
            "begin": "(?=\\s*(,|::|\\())",
            "comment": "Attribute list.",
            "contentName": "meta.attribute-list.namelist.fortran",
            "end": "(::)|(?=[;!\\n])",
            "endCaptures": {
              "1": {
                "name": "keyword.operator.double-colon.fortran"
              }
            },
            "patterns": [
              {
                "begin": "(,)",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.comma.fortran"
                  }
                },
                "end": "(?=::|[,;!\\n])",
                "patterns": [
                  {
                    "include": "#intrinsic-attribute"
                  },
                  {
                    "include": "#non-intrinsic-attribute"
                  },
                  {
                    "include": "#invalid-word"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?i)\\s*\\b([a-z]\\w*)\\b",
            "beginCaptures": {
              "1": {
                "name": "entity.name.class.module.fortran"
              }
            },
            "end": "(?=[;!\\n])",
            "patterns": [
              {
                "begin": "(,)",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.comma.fortran"
                  }
                },
                "end": "(?=::|[;!\\n])",
                "patterns": [
                  {
                    "begin": "(?i)\\s*\\b(only\\s*:)",
                    "beginCaptures": {
                      "1": {
                        "name": "keyword.control.only.fortran"
                      }
                    },
                    "end": "(?=[;!\\n])",
                    "patterns": [
                      {
                        "include": "#operator-keyword"
                      },
                      {
                        "include": "$base"
                      }
                    ]
                  },
                  {
                    "begin": "(?i)(?=\\s*[a-z])",
                    "contentName": "meta.name-list.fortran",
                    "end": "(?=[;!\\n])",
                    "patterns": [
                      {
                        "include": "#operator-keyword"
                      },
                      {
                        "include": "$base"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "user-defined-operators": {
        "captures": {
          "1": {
            "name": "keyword.operator.user-defined.fortran"
          }
        },
        "match": "(?i)\\s*(\\.[a-z]+\\.)"
      },
      "value-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.value.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2003 standard.",
        "match": "(?i)\\s*\\b(value)\\b"
      },
      "variable": {
        "applyEndPatternLast": 1,
        "begin": "(?i)\\b(?=[a-z])",
        "end": "(?<!\\G)",
        "name": "meta.parameter.fortran",
        "patterns": [
          {
            "include": "#brackets"
          },
          {
            "include": "#derived-type-operators"
          },
          {
            "include": "#parentheses-dummy-variables"
          },
          {
            "include": "#word"
          }
        ]
      },
      "volatile-attribute": {
        "captures": {
          "1": {
            "name": "storage.modifier.volatile.fortran"
          }
        },
        "comment": "Introduced in the Fortran 2003 standard.",
        "match": "(?i)\\s*\\b(volatile)\\b"
      },
      "where-construct": {
        "patterns": [
          {
            "applyEndPatternLast": 1,
            "begin": "(?i)\\b(where)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.where.fortran"
              }
            },
            "comment": "Introduced in the Fortran 1990 standard.",
            "end": "(?<!\\G)",
            "patterns": [
              {
                "include": "#logical-control-expression"
              },
              {
                "begin": "(?<=\\))(?=\\s*[;!\\n])",
                "end": "(?i)\\b(end\\s*where)\\b",
                "endCaptures": {
                  "1": {
                    "name": "keyword.control.endwhere.fortran"
                  }
                },
                "name": "meta.block.where.fortran",
                "patterns": [
                  {
                    "begin": "(?i)\\s*\\b(else\\s*where)\\b",
                    "beginCaptures": {
                      "1": {
                        "name": "keyword.control.elsewhere.fortran"
                      }
                    },
                    "end": "(?=[;!\\n])",
                    "patterns": [
                      {
                        "include": "#parentheses"
                      },
                      {
                        "include": "#invalid-word"
                      }
                    ]
                  },
                  {
                    "include": "$base"
                  }
                ]
              },
              {
                "begin": "(?i)(?<=\\))(?!\\s*[;!\\n])",
                "end": "\\n",
                "name": "meta.statement.control.where.fortran",
                "patterns": [
                  {
                    "include": "$base"
                  }
                ]
              }
            ]
          }
        ]
      },
      "while-attribute": {
        "begin": "(?i)\\G\\s*\\b(while)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.while.fortran"
          }
        },
        "comment": "Introduced in the Fortran 1995 standard.",
        "end": "(?=[;!\\n])",
        "patterns": [
          {
            "include": "#parentheses"
          },
          {
            "include": "#invalid-word"
          }
        ]
      },
      "word": {
        "patterns": [
          {
            "match": "(?i)(?:\\G|(?<=\\%))\\s*\\b([a-z]\\w*)\\b"
          }
        ]
      }
    },
    "scopeName": "source.fortran.free",
    "aliases": [
      "f90",
      "f95",
      "f03",
      "f08",
      "f18"
    ]
  }
])