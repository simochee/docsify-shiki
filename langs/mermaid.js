/** Shiki Language: mermaid */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push([
  {
    "displayName": "Mermaid",
    "fileTypes": [],
    "injectionSelector": "L:text.html.markdown",
    "name": "mermaid",
    "patterns": [
      {
        "include": "#mermaid-code-block"
      },
      {
        "include": "#mermaid-code-block-with-attributes"
      },
      {
        "include": "#mermaid-ado-code-block"
      }
    ],
    "repository": {
      "mermaid": {
        "patterns": [
          {
            "begin": "^\\s*(architecture-beta)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.mermaid"
              }
            },
            "comment": "Architecture Diagram",
            "end": "(^|\\G)(?=\\s*[`:~]{3,}\\s*$)",
            "patterns": [
              {
                "match": "\\%%.*",
                "name": "comment"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "variable"
                  },
                  "3": {
                    "name": "punctuation.definition.typeparameters.begin.mermaid"
                  },
                  "4": {
                    "name": "string"
                  },
                  "5": {
                    "name": "keyword.control.mermaid"
                  },
                  "6": {
                    "name": "string"
                  },
                  "7": {
                    "name": "punctuation.definition.typeparameters.end.mermaid"
                  },
                  "8": {
                    "name": "punctuation.definition.typeparameters.begin.mermaid"
                  },
                  "9": {
                    "name": "string"
                  },
                  "10": {
                    "name": "punctuation.definition.typeparameters.end.mermaid"
                  },
                  "11": {
                    "name": "keyword.control.mermaid"
                  },
                  "12": {
                    "name": "variable"
                  }
                },
                "comment": "(group|service)(group id)(icon name)?(title)(in)?(parent)?",
                "match": "(?i)\\s*(group|service)\\s+([\\w-]+)\\s*(\\()?([\\w\\s-]+)?(:)?([\\w\\s-]+)?(\\))?\\s*(\\[)?([\\w\\s-]+)?\\s*(\\])?\\s*(in)?\\s*([\\w-]+)?"
              },
              {
                "captures": {
                  "1": {
                    "name": "variable"
                  },
                  "2": {
                    "name": "punctuation.definition.typeparameters.begin.mermaid"
                  },
                  "3": {
                    "name": "variable"
                  },
                  "4": {
                    "name": "punctuation.definition.typeparameters.end.mermaid"
                  },
                  "5": {
                    "name": "keyword.control.mermaid"
                  },
                  "6": {
                    "name": "entity.name.function.mermaid"
                  },
                  "7": {
                    "name": "keyword.control.mermaid"
                  },
                  "8": {
                    "name": "entity.name.function.mermaid"
                  },
                  "9": {
                    "name": "keyword.control.mermaid"
                  },
                  "10": {
                    "name": "variable"
                  },
                  "11": {
                    "name": "punctuation.definition.typeparameters.begin.mermaid"
                  },
                  "12": {
                    "name": "variable"
                  },
                  "13": {
                    "name": "punctuation.definition.typeparameters.end.mermaid"
                  }
                },
                "comment": "(service id)(group id)?:(T|B|L|R) <?-->? (T|B|L|R):(service id)(group id)?",
                "match": "(?i)\\s*([\\w-]+)\\s*(\\{)?\\s*(group)?(\\})?\\s*(:)\\s*(T|B|L|R)\\s+(<?-->?)\\s+(T|B|L|R)\\s*(:)\\s*([\\w-]+)\\s*(\\{)?\\s*(group)?(\\})?"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "variable"
                  },
                  "3": {
                    "name": "keyword.control.mermaid"
                  },
                  "4": {
                    "name": "variable"
                  }
                },
                "comment": "(junction)(junction id)(in)?(group)",
                "match": "(?i)\\s*(junction)\\s+([\\w-]+)\\s*(in)?\\s*([\\w-]+)?"
              }
            ]
          },
          {
            "begin": "^\\s*(classDiagram)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.mermaid"
              }
            },
            "comment": "Class Diagram",
            "end": "(^|\\G)(?=\\s*[`:~]{3,}\\s*$)",
            "patterns": [
              {
                "match": "\\%%.*",
                "name": "comment"
              },
              {
                "captures": {
                  "1": {
                    "name": "entity.name.type.class.mermaid"
                  },
                  "2": {
                    "name": "keyword.control.mermaid"
                  },
                  "3": {
                    "name": "keyword.control.mermaid"
                  },
                  "4": {
                    "name": "keyword.control.mermaid"
                  },
                  "5": {
                    "name": "entity.name.type.class.mermaid"
                  },
                  "6": {
                    "name": "keyword.control.mermaid"
                  },
                  "7": {
                    "name": "string"
                  }
                },
                "comment": "(class name) (\"multiplicity relationship\")? (relationship) (\"multiplicity relationship\")? (class name) :? (labelText)?",
                "match": "(?i)([\\w-]+)\\s(\"(?:\\d+|\\*|0..\\d+|1..\\d+|1..\\*)\")?\\s?(--o|--\\*|\\<--|--\\>|<\\.\\.|\\.\\.\\>|\\<\\|\\.\\.|\\.\\.\\|\\>|\\<\\|--|--\\|>|--\\*|--|\\.\\.|\\*--|o--)\\s(\"(?:\\d+|\\*|0..\\d+|1..\\d+|1..\\*)\")?\\s?([\\w-]+)\\s?(:)?\\s(.*)$"
              },
              {
                "captures": {
                  "1": {
                    "name": "entity.name.type.class.mermaid"
                  },
                  "2": {
                    "name": "keyword.control.mermaid"
                  },
                  "3": {
                    "name": "keyword.control.mermaid"
                  },
                  "4": {
                    "name": "entity.name.function.mermaid"
                  },
                  "5": {
                    "name": "punctuation.parenthesis.open.mermaid"
                  },
                  "6": {
                    "name": "storage.type.mermaid"
                  },
                  "7": {
                    "name": "punctuation.definition.typeparameters.begin.mermaid"
                  },
                  "8": {
                    "name": "storage.type.mermaid"
                  },
                  "9": {
                    "name": "punctuation.definition.typeparameters.end.mermaid"
                  },
                  "10": {
                    "name": "entity.name.variable.parameter.mermaid"
                  },
                  "11": {
                    "name": "punctuation.parenthesis.closed.mermaid"
                  },
                  "12": {
                    "name": "keyword.control.mermaid"
                  },
                  "13": {
                    "name": "storage.type.mermaid"
                  },
                  "14": {
                    "name": "punctuation.definition.typeparameters.begin.mermaid"
                  },
                  "15": {
                    "name": "storage.type.mermaid"
                  },
                  "16": {
                    "name": "punctuation.definition.typeparameters.end.mermaid"
                  }
                },
                "comment": "(class name) : (visibility)?(function)( (function param/generic param)? )(classifier)? (return/generic return)?$",
                "match": "(?i)([\\w-]+)\\s?(:)\\s([\\+~#-])?([\\w-]+)(\\()([\\w-]+)?(~)?([\\w-]+)?(~)?\\s?([\\w-]+)?(\\))([*\\$]{0,2})\\s?([\\w-]+)?(~)?([\\w-]+)?(~)?$"
              },
              {
                "captures": {
                  "1": {
                    "name": "entity.name.type.class.mermaid"
                  },
                  "2": {
                    "name": "keyword.control.mermaid"
                  },
                  "3": {
                    "name": "keyword.control.mermaid"
                  },
                  "4": {
                    "name": "storage.type.mermaid"
                  },
                  "5": {
                    "name": "punctuation.definition.typeparameters.begin.mermaid"
                  },
                  "6": {
                    "name": "storage.type.mermaid"
                  },
                  "7": {
                    "name": "punctuation.definition.typeparameters.end.mermaid"
                  },
                  "8": {
                    "name": "entity.name.variable.field.mermaid"
                  }
                },
                "comment": "(class name) : (visibility)?(datatype/generic data type) (attribute name)$",
                "match": "(?i)([\\w-]+)\\s?(:)\\s([\\+~#-])?([\\w-]+)(~)?([\\w-]+)?(~)?\\s([\\w-]+)?$"
              },
              {
                "captures": {
                  "1": {
                    "name": "punctuation.definition.typeparameters.begin.mermaid"
                  },
                  "2": {
                    "name": "storage.type.mermaid"
                  },
                  "3": {
                    "name": "punctuation.definition.typeparameters.end.mermaid"
                  },
                  "4": {
                    "name": "entity.name.type.class.mermaid"
                  }
                },
                "comment": "<<(Annotation)>> (class name)",
                "match": "(?i)(<<)([\\w-]+)(>>)\\s?([\\w-]+)?"
              },
              {
                "begin": "(?i)(class)\\s+([\\w-]+)(~)?([\\w-]+)?(~)?\\s?({)",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "entity.name.type.class.mermaid"
                  },
                  "3": {
                    "name": "punctuation.definition.typeparameters.begin.mermaid"
                  },
                  "4": {
                    "name": "storage.type.mermaid"
                  },
                  "5": {
                    "name": "punctuation.definition.typeparameters.end.mermaid"
                  },
                  "6": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "comment": "class (class name) ~?(generic type)?~? ({)",
                "end": "(})",
                "endCaptures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "patterns": [
                  {
                    "match": "\\%%.*",
                    "name": "comment"
                  },
                  {
                    "begin": "(?i)\\s([\\+~#-])?([\\w-]+)(\\()",
                    "beginCaptures": {
                      "1": {
                        "name": "keyword.control.mermaid"
                      },
                      "2": {
                        "name": "entity.name.function.mermaid"
                      },
                      "3": {
                        "name": "punctuation.parenthesis.open.mermaid"
                      }
                    },
                    "comment": "(visibility)?(function)( (function param/generic param)? )(classifier)? (return/generic return)?$",
                    "end": "(?i)(\\))([*\\$]{0,2})\\s?([\\w-]+)?(~)?([\\w-]+)?(~)?$",
                    "endCaptures": {
                      "1": {
                        "name": "punctuation.parenthesis.closed.mermaid"
                      },
                      "2": {
                        "name": "keyword.control.mermaid"
                      },
                      "3": {
                        "name": "storage.type.mermaid"
                      },
                      "4": {
                        "name": "punctuation.definition.typeparameters.begin.mermaid"
                      },
                      "5": {
                        "name": "storage.type.mermaid"
                      },
                      "6": {
                        "name": "punctuation.definition.typeparameters.end.mermaid"
                      }
                    },
                    "patterns": [
                      {
                        "captures": {
                          "1": {
                            "name": "storage.type.mermaid"
                          },
                          "2": {
                            "name": "punctuation.definition.typeparameters.begin.mermaid"
                          },
                          "3": {
                            "name": "storage.type.mermaid"
                          },
                          "4": {
                            "name": "punctuation.definition.typeparameters.end.mermaid"
                          },
                          "5": {
                            "name": "entity.name.variable.parameter.mermaid"
                          }
                        },
                        "comment": "(TBD)",
                        "match": "(?i)\\s*,?\\s*([\\w-]+)?(~)?([\\w-]+)?(~)?\\s?([\\w-]+)?"
                      }
                    ]
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.control.mermaid"
                      },
                      "2": {
                        "name": "storage.type.mermaid"
                      },
                      "3": {
                        "name": "punctuation.definition.typeparameters.begin.mermaid"
                      },
                      "4": {
                        "name": "storage.type.mermaid"
                      },
                      "5": {
                        "name": "punctuation.definition.typeparameters.end.mermaid"
                      },
                      "6": {
                        "name": "entity.name.variable.field.mermaid"
                      }
                    },
                    "comment": "(visibility)?(datatype/generic data type) (attribute name)$",
                    "match": "(?i)\\s([\\+~#-])?([\\w-]+)(~)?([\\w-]+)?(~)?\\s([\\w-]+)?$"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "punctuation.definition.typeparameters.begin.mermaid"
                      },
                      "2": {
                        "name": "storage.type.mermaid"
                      },
                      "3": {
                        "name": "punctuation.definition.typeparameters.end.mermaid"
                      },
                      "4": {
                        "name": "entity.name.type.class.mermaid"
                      }
                    },
                    "comment": "<<(Annotation)>> (class name)",
                    "match": "(?i)(<<)([\\w-]+)(>>)\\s?([\\w-]+)?"
                  }
                ]
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "entity.name.type.class.mermaid"
                  },
                  "3": {
                    "name": "punctuation.definition.typeparameters.begin.mermaid"
                  },
                  "4": {
                    "name": "storage.type.mermaid"
                  },
                  "5": {
                    "name": "punctuation.definition.typeparameters.end.mermaid"
                  }
                },
                "comment": "class (class name) ~?(generic type)?~?",
                "match": "(?i)(class)\\s+([\\w-]+)(~)?([\\w-]+)?(~)?"
              }
            ]
          },
          {
            "begin": "^\\s*(erDiagram)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.mermaid"
              }
            },
            "comment": "Entity Relationship Diagram",
            "end": "(^|\\G)(?=\\s*[`:~]{3,}\\s*$)",
            "patterns": [
              {
                "match": "\\%%.*",
                "name": "comment"
              },
              {
                "captures": {
                  "1": {
                    "name": "variable"
                  },
                  "2": {
                    "name": "keyword.control.mermaid"
                  },
                  "3": {
                    "name": "string"
                  },
                  "4": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "comment": "(entity)",
                "match": "(?i)^\\s*([\\w-]+)\\s*(\\[)?\\s*((?:[\\w-]+)|(?:\"[\\w\\s-]+\"))?\\s*(\\])?$"
              },
              {
                "begin": "(?i)\\s+([\\w-]+)\\s*(\\[)?\\s*((?:[\\w-]+)|(?:\"[\\w\\s-]+\"))?\\s*(\\])?\\s*({)",
                "beginCaptures": {
                  "1": {
                    "name": "variable"
                  },
                  "2": {
                    "name": "keyword.control.mermaid"
                  },
                  "3": {
                    "name": "string"
                  },
                  "4": {
                    "name": "keyword.control.mermaid"
                  },
                  "5": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "comment": "(entity) {",
                "end": "(})",
                "endCaptures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "storage.type.mermaid"
                      },
                      "2": {
                        "name": "variable"
                      },
                      "3": {
                        "name": "keyword.control.mermaid"
                      },
                      "4": {
                        "name": "string"
                      }
                    },
                    "comment": "(type) (name) (PK|FK)? (\"comment\")?",
                    "match": "(?i)\\s*([\\w-]+)\\s+([\\w-]+)\\s+(PK|FK)?\\s*(\"[\"\\($&%\\^/#.,?!;:*+=<>\\'\\\\\\-\\w\\s]*\")?\\s*"
                  },
                  {
                    "match": "\\%%.*",
                    "name": "comment"
                  }
                ]
              },
              {
                "captures": {
                  "1": {
                    "name": "variable"
                  },
                  "2": {
                    "name": "keyword.control.mermaid"
                  },
                  "3": {
                    "name": "variable"
                  },
                  "4": {
                    "name": "keyword.control.mermaid"
                  },
                  "5": {
                    "name": "string"
                  }
                },
                "comment": "(entity) (relationship) (entity) : (label)",
                "match": "(?i)\\s*([\\w-]+)\\s*((?:\\|o|\\|\\||}o|}\\||one or (?:zero|more|many)|zero or (?:one|more|many)|many\\((?:0|1)\\)|only one|0\\+|1\\+?)(?:..|--)(?:o\\||\\|\\||o{|\\|{|one or (?:zero|more|many)|zero or (?:one|more|many)|many\\((?:0|1)\\)|only one|0\\+|1\\+?))\\s*([\\w-]+)\\s*(:)\\s*((?:\"[\\w\\s]*\")|(?:[\\w-]+))"
              }
            ]
          },
          {
            "begin": "^\\s*(gantt)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.mermaid"
              }
            },
            "comment": "Gantt Diagram",
            "end": "(^|\\G)(?=\\s*[`:~]{3,}\\s*$)",
            "patterns": [
              {
                "match": "\\%%.*",
                "name": "comment"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "entity.name.function.mermaid"
                  }
                },
                "match": "(?i)^\\s*(dateFormat)\\s+([\\w\\-\\.]+)"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "entity.name.function.mermaid"
                  }
                },
                "match": "(?i)^\\s*(axisFormat)\\s+([\\w\\%\\/\\\\\\-\\.]+)"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "string"
                  }
                },
                "match": "(?i)(tickInterval)\\s+(([1-9][0-9]*)(millisecond|second|minute|hour|day|week|month))"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "string"
                  }
                },
                "match": "(?i)^\\s*(title)\\s+(\\s*[\"\\(\\)$&%\\^/#.,?!;:*+=<>\\'\\\\\\-\\w\\s]*)"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "string"
                  }
                },
                "match": "(?i)^\\s*(excludes)\\s+((?:[\\d\\-,\\s]+|monday|tuesday|wednesday|thursday|friday|saturday|sunday|weekends)+)"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "string"
                  }
                },
                "match": "(?i)^\\s+(todayMarker)\\s+(.*)$"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "string"
                  }
                },
                "match": "(?i)^\\s*(section)\\s+(\\s*[\"\\(\\)$&%\\^/#.,?!;:*+=<>\\'\\\\\\-\\w\\s]*)"
              },
              {
                "begin": "(?i)^\\s(.*)(:)",
                "beginCaptures": {
                  "1": {
                    "name": "string"
                  },
                  "2": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "end": "$",
                "patterns": [
                  {
                    "match": "(crit|done|active|after)",
                    "name": "entity.name.function.mermaid"
                  },
                  {
                    "match": "\\%%.*",
                    "name": "comment"
                  }
                ]
              }
            ]
          },
          {
            "begin": "^\\s*(gitGraph)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.mermaid"
              }
            },
            "comment": "Git Graph",
            "end": "(^|\\G)(?=\\s*[`:~]{3,}\\s*$)",
            "patterns": [
              {
                "match": "\\%%.*",
                "name": "comment"
              },
              {
                "begin": "(?i)^\\s*(commit)",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "comment": "commit",
                "end": "$",
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.control.mermaid"
                      },
                      "2": {
                        "name": "keyword.control.mermaid"
                      },
                      "3": {
                        "name": "string"
                      }
                    },
                    "comment": "(id)(:) (\"id\")",
                    "match": "(?i)\\s*(id)(:)\\s?(\"[^\"\\n]*\")"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.control.mermaid"
                      },
                      "2": {
                        "name": "keyword.control.mermaid"
                      },
                      "3": {
                        "name": "entity.name.function.mermaid"
                      }
                    },
                    "comment": "(type)(:) (COMMIT_TYPE)",
                    "match": "(?i)\\s*(type)(:)\\s?(NORMAL|REVERSE|HIGHLIGHT)"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.control.mermaid"
                      },
                      "2": {
                        "name": "keyword.control.mermaid"
                      },
                      "3": {
                        "name": "string"
                      }
                    },
                    "comment": "(tag)(:) (\"tag\")",
                    "match": "(?i)\\s*(tag)(:)\\s?(\"[\\($&%\\^/#.,?!;:*+=<>\\'\\\\\\-\\w\\s]*\")"
                  }
                ]
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "variable"
                  }
                },
                "comment": "(checkout) (branch-name)",
                "match": "(?i)^\\s*(checkout)\\s*([^\\s\"]*)"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "variable"
                  },
                  "3": {
                    "name": "keyword.control.mermaid"
                  },
                  "4": {
                    "name": "keyword.control.mermaid"
                  },
                  "5": {
                    "name": "constant.numeric.decimal.mermaid"
                  }
                },
                "comment": "(branch) (branch-name) (order)?(:) (number)",
                "match": "(?i)^\\s*(branch)\\s*([^\\s\"]*)\\s*(?:(order)(:)\\s?(\\d+))?"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "variable"
                  },
                  "3": {
                    "name": "keyword.control.mermaid"
                  },
                  "4": {
                    "name": "keyword.control.mermaid"
                  },
                  "5": {
                    "name": "string"
                  }
                },
                "comment": "(merge) (branch-name) (tag: \"tag-name\")?",
                "match": "(?i)^\\s*(merge)\\s*([^\\s\"]*)\\s*(?:(tag)(:)\\s?(\"[^\"\\n]*\"))?"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "keyword.control.mermaid"
                  },
                  "3": {
                    "name": "keyword.control.mermaid"
                  },
                  "4": {
                    "name": "string"
                  }
                },
                "comment": "(cherry-pick) (id)(:)(\"commit-id\")",
                "match": "(?i)^\\s*(cherry-pick)\\s+(id)(:)\\s*(\"[^\"\\n]*\")"
              }
            ]
          },
          {
            "begin": "^\\s*(graph|flowchart)\\s+([\\p{Letter}\\ 0-9]+)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.mermaid"
              },
              "2": {
                "name": "entity.name.function.mermaid"
              }
            },
            "comment": "Graph",
            "end": "(^|\\G)(?=\\s*[`:~]{3,}\\s*$)",
            "patterns": [
              {
                "match": "\\%%.*",
                "name": "comment"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "variable"
                  },
                  "3": {
                    "name": "keyword.control.mermaid"
                  },
                  "4": {
                    "name": "string"
                  },
                  "5": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "comment": "",
                "match": "(?i)^\\s*(subgraph)\\s+(\\w+)(\\[)(\"?[\\w\\s*+%=\\\\/:\\.\\-'`,&^#$!?<>]*\"?)(\\])"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "entity.name.function.mermaid"
                  }
                },
                "match": "^\\s*(subgraph)\\s+([\\p{Letter}\\ 0-9<>]+)"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "entity.name.function.mermaid"
                  }
                },
                "match": "^(?i)\\s*(direction)\\s+(RB|BT|RL|TD|LR)"
              },
              {
                "match": "\\b(end)\\b",
                "name": "keyword.control.mermaid"
              },
              {
                "begin": "(?i)(\\b(?:(?!--|==)[-\\w])+\\b\\s*)(\\(\\[|\\[\\[|\\[\\(|\\[|\\(+|\\>|\\{|\\(\\()",
                "beginCaptures": {
                  "1": {
                    "name": "variable"
                  },
                  "2": {
                    "name": "keyword.control.mermaid"
                  },
                  "3": {
                    "name": "string"
                  }
                },
                "comment": "(Entity)(Edge/Shape)(Text)(Edge/Shape)",
                "end": "(?i)(\\]\\)|\\]\\]|\\)\\]|\\]|\\)+|\\}|\\)\\))",
                "endCaptures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "patterns": [
                  {
                    "begin": "\\s*(\")",
                    "beginCaptures": {
                      "1": {
                        "name": "string"
                      }
                    },
                    "comment": "(\"multi-line text\")",
                    "end": "(\")",
                    "endCaptures": {
                      "1": {
                        "name": "string"
                      }
                    },
                    "patterns": [
                      {
                        "begin": "(?i)([^\"]*)",
                        "beginCaptures": {
                          "1": {
                            "name": "string"
                          }
                        },
                        "comment": "capture inner text between quotes",
                        "end": "(?=\")",
                        "patterns": [
                          {
                            "captures": {
                              "1": {
                                "name": "comment"
                              }
                            },
                            "match": "([^\"]*)"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "string"
                      }
                    },
                    "comment": "(single line text)",
                    "match": "(?i)\\s*([$&%\\^/#.,?!;:*+<>_\\'\\\\\\w\\s]+)"
                  }
                ]
              },
              {
                "begin": "(?i)\\s*((?:-{2,5}|={2,5})[xo>]?\\|)",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "comment": "(Graph Link)(\"Multiline text\")(Graph Link)",
                "end": "(?i)(\\|)",
                "endCaptures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "patterns": [
                  {
                    "begin": "\\s*(\")",
                    "beginCaptures": {
                      "1": {
                        "name": "string"
                      }
                    },
                    "comment": "(\"multi-line text\")",
                    "end": "(\")",
                    "endCaptures": {
                      "1": {
                        "name": "string"
                      }
                    },
                    "patterns": [
                      {
                        "begin": "(?i)([^\"]*)",
                        "beginCaptures": {
                          "1": {
                            "name": "string"
                          }
                        },
                        "comment": "capture inner text between quotes",
                        "end": "(?=\")",
                        "patterns": [
                          {
                            "captures": {
                              "1": {
                                "name": "comment"
                              }
                            },
                            "match": "([^\"]*)"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "string"
                      }
                    },
                    "comment": "(single line text)",
                    "match": "(?i)\\s*([$&%\\^/#.,?!;:*+<>_\\'\\\\\\w\\s]+)"
                  }
                ]
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "string"
                  },
                  "3": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "comment": "(Graph Link Start Arrow)(Text)(Graph Link End Arrow)",
                "match": "(?i)\\s*([xo<]?(?:-{2,5}|={2,5}|-\\.{1,3}|-\\.))((?:(?!--|==)[\\w\\s*+%=\\\\/:\\.\\-'`,\"&^#$!?<>\\[\\]])*)((?:-{2,5}|={2,5}|\\.{1,3}-|\\.-)[xo>]?)"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "comment": "(Graph Link)",
                "match": "(?i)\\s*([ox<]?(?:-.{1,3}-|-{1,3}|={1,3})[ox>]?)"
              },
              {
                "comment": "Entity",
                "match": "(\\b(?:(?!--|==)[-\\w])+\\b\\s*)",
                "name": "variable"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "variable"
                  },
                  "3": {
                    "name": "string"
                  }
                },
                "comment": "(Class)(Node(s))(ClassName)",
                "match": "(?i)\\s*(class)\\s+(\\b[-,\\w]+)\\s+(\\b\\w+\\b)"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "variable"
                  },
                  "3": {
                    "name": "string"
                  }
                },
                "comment": "(ClassDef)(ClassName)(Styles)",
                "match": "(?i)\\s*(classDef)\\s+(\\b\\w+\\b)\\s+(\\b[-,:;#\\w]+)"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "variable"
                  },
                  "3": {
                    "name": "variable"
                  },
                  "4": {
                    "name": "string"
                  }
                },
                "comment": "(Click)(Entity)(Link)?(Tooltip)",
                "match": "(?i)\\s*(click)\\s+(\\b[-\\w]+\\b\\s*)(\\b\\w+\\b)?\\s(\"*.*\")"
              }
            ]
          },
          {
            "begin": "^\\s*(pie)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.mermaid"
              }
            },
            "comment": "Pie Chart",
            "end": "(^|\\G)(?=\\s*[`:~]{3,}\\s*$)",
            "patterns": [
              {
                "match": "\\%%.*",
                "name": "comment"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "string"
                  }
                },
                "match": "(?i)^\\s*(title)\\s+(\\s*[\"\\(\\)$&%\\^/#.,?!;:*+=<>\\'\\\\\\-\\w\\s]*)"
              },
              {
                "begin": "(?i)\\s(.*)(:)",
                "beginCaptures": {
                  "1": {
                    "name": "string"
                  },
                  "2": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "end": "$",
                "patterns": [
                  {
                    "match": "\\%%.*",
                    "name": "comment"
                  }
                ]
              }
            ]
          },
          {
            "begin": "^\\s*(quadrantChart)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.mermaid"
              }
            },
            "comment": "Quadrant Chart",
            "end": "(^|\\G)(?=\\s*[`:~]{3,}\\s*$)",
            "patterns": [
              {
                "match": "\\%%.*",
                "name": "comment"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "string"
                  }
                },
                "match": "(?i)^\\s*(title)\\s*([\"\\(\\)$&%\\^/#.,?!;:*+=<>\\'\\\\\\-\\w\\s]*)"
              },
              {
                "begin": "(?i)^\\s*([xy]-axis)\\s+((?:(?!-->)[$&%/#.,?!*+=\\'\\\\\\-\\w\\s])*)",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "string"
                  }
                },
                "comment": "(x|y-axis) (text) (-->)? (text)?",
                "end": "$",
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.control.mermaid"
                      },
                      "2": {
                        "name": "string"
                      }
                    },
                    "comment": "(-->) (text)",
                    "match": "(?i)\\s*(-->)\\s*([$&%/#.,?!*+=\\'\\\\\\-\\w\\s]*)"
                  }
                ]
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "string"
                  }
                },
                "match": "(?i)^\\s*(quadrant-[1234])\\s*([\"\\(\\)$&%\\^/#.,?!;:*+=<>\\'\\\\\\-\\w\\s]*)"
              },
              {
                "captures": {
                  "1": {
                    "name": "string"
                  },
                  "2": {
                    "name": "keyword.control.mermaid"
                  },
                  "3": {
                    "name": "keyword.control.mermaid"
                  },
                  "4": {
                    "name": "constant.numeric.decimal.mermaid"
                  },
                  "5": {
                    "name": "keyword.control.mermaid"
                  },
                  "6": {
                    "name": "constant.numeric.decimal.mermaid"
                  },
                  "7": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "comment": "(text)(:) ([)(decimal)(,) (decimal)(])",
                "match": "(?i)\\s*([$&%/#.,?!*+=\\'\\\\\\-\\w\\s]*)\\s*(:)\\s*(\\[)\\s*(\\d\\.\\d+)\\s*(,)\\s*(\\d\\.\\d+)\\s*(\\])"
              }
            ]
          },
          {
            "begin": "^\\s*(requirementDiagram)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.mermaid"
              }
            },
            "comment": "Requirement Diagram",
            "end": "(^|\\G)(?=\\s*[`:~]{3,}\\s*$)",
            "patterns": [
              {
                "match": "\\%%.*",
                "name": "comment"
              },
              {
                "begin": "(?i)^\\s*((?:functional|interface|performance|physical)?requirement|designConstraint)\\s*([\"\\(\\)$&%\\^/#.,?!;:*+=<>\\'\\\\\\-\\w\\s]*)\\s*({)",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "variable"
                  },
                  "3": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "comment": "(requirement) (name) ({)",
                "end": "(?i)\\s*(})",
                "endCaptures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.control.mermaid"
                      },
                      "2": {
                        "name": "variable"
                      }
                    },
                    "comment": "(id:) (variable id)",
                    "match": "(?i)\\s*(id:)\\s*([$&%\\^/#.,?!;:*+<>_\\'\\\\\\w\\s]+)"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.control.mermaid"
                      },
                      "2": {
                        "name": "string"
                      }
                    },
                    "comment": "(text:) (text string)",
                    "match": "(?i)\\s*(text:)\\s*([$&%\\^/#.,?!;:*+<>_\\'\\\\\\w\\s]+)"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.control.mermaid"
                      },
                      "2": {
                        "name": "entity.name.function.mermaid"
                      }
                    },
                    "comment": "(risk:) (risk option)",
                    "match": "(?i)\\s*(risk:)\\s*(low|medium|high)\\s*$"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.control.mermaid"
                      },
                      "2": {
                        "name": "entity.name.function.mermaid"
                      }
                    },
                    "comment": "(verifyMethod)(:) (method)",
                    "match": "(?i)\\s*(verifymethod:)\\s*(analysis|inspection|test|demonstration)\\s*$"
                  }
                ]
              },
              {
                "begin": "(?i)^\\s*(element)\\s*([\"\\(\\)$&%\\^/#.,?!;:*+=<>\\'\\\\\\-\\w\\s]*)\\s*({)",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "variable"
                  },
                  "3": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "comment": "(element) (name) ({)",
                "end": "(?i)\\s*(})",
                "endCaptures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.control.mermaid"
                      },
                      "2": {
                        "name": "variable"
                      }
                    },
                    "comment": "(type:) (user type)",
                    "match": "(?i)\\s*(type:)\\s*([\"$&%\\^/#.,?!;:*+<>_\\'\\\\\\w\\s]+)"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.control.mermaid"
                      },
                      "2": {
                        "name": "variable"
                      }
                    },
                    "comment": "(docref:) (user ref)",
                    "match": "(?i)\\s*(docref:)\\s*([$&%\\^/#.,?!;:*+<>_\\'\\\\\\w\\s]+)"
                  }
                ]
              },
              {
                "captures": {
                  "1": {
                    "name": "variable"
                  },
                  "2": {
                    "name": "keyword.control.mermaid"
                  },
                  "3": {
                    "name": "keyword.control.mermaid"
                  },
                  "4": {
                    "name": "keyword.control.mermaid"
                  },
                  "5": {
                    "name": "variable"
                  }
                },
                "comment": "(source) (-) (type) (->) (destination)",
                "match": "(?i)^\\s*([\\w]+)\\s*(-)\\s*(contains|copies|derives|satisfies|verifies|refines|traces)\\s*(->)\\s*([\\w]+)\\s*$"
              },
              {
                "captures": {
                  "1": {
                    "name": "variable"
                  },
                  "2": {
                    "name": "keyword.control.mermaid"
                  },
                  "3": {
                    "name": "keyword.control.mermaid"
                  },
                  "4": {
                    "name": "keyword.control.mermaid"
                  },
                  "5": {
                    "name": "variable"
                  }
                },
                "comment": "(destination) (<-) (type) (-) (source)",
                "match": "(?i)^\\s*([\\w]+)\\s*(<-)\\s*(contains|copies|derives|satisfies|verifies|refines|traces)\\s*(-)\\s*([\\w]+)\\s*$"
              }
            ]
          },
          {
            "begin": "^\\s*(sequenceDiagram)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.mermaid"
              }
            },
            "comment": "Sequence Diagram",
            "end": "(^|\\G)(?=\\s*[`:~]{3,}\\s*$)",
            "patterns": [
              {
                "match": "(\\%%|#).*",
                "name": "comment"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "keyword.control.mermaid"
                  },
                  "3": {
                    "name": "string"
                  }
                },
                "comment": "(title)(title text)",
                "match": "(?i)(title)\\s*(:)?\\s+(\\s*[\"\\(\\)$&%\\^/#.,?!:*+=<>\\'\\\\\\-\\w\\s]*)"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "variable"
                  },
                  "3": {
                    "name": "keyword.control.mermaid"
                  },
                  "4": {
                    "name": "string"
                  }
                },
                "comment": "(participant)(Actor)(as)?(Label)?",
                "match": "(?i)\\s*(participant|actor)\\s+((?:(?! as )[\"\\(\\)$&%\\^/#.?!*=<>\\'\\\\\\w\\s])+)\\s*(as)?\\s([\"\\(\\)$&%\\^/#.,?!*=<>\\'\\\\\\w\\s]+)?"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "variable"
                  }
                },
                "comment": "(activate/deactivate)(Actor)",
                "match": "(?i)\\s*((?:de)?activate)\\s+(\\b[\"()$&%^/#.?!*=<>'\\\\\\w\\s]+\\b\\)?\\s*)"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "entity.name.function.mermaid"
                  },
                  "3": {
                    "name": "variable"
                  },
                  "4": {
                    "name": "keyword.control.mermaid"
                  },
                  "5": {
                    "name": "variable"
                  },
                  "6": {
                    "name": "keyword.control.mermaid"
                  },
                  "7": {
                    "name": "string"
                  }
                },
                "comment": "(Note)(direction)(Actor)(,)?(Actor)?(:)(Message)",
                "match": "(?i)\\s*(Note)\\s+((?:left|right)\\sof|over)\\s+(\\b[\"()$&%^/#.?!*=<>'\\\\\\w\\s]+\\b\\)?\\s*)(,)?(\\b[\"()$&%^/#.?!*=<>'\\\\\\w\\s]+\\b\\)?\\s*)?(:)(?:\\s+([^;#]*))?"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "string"
                  }
                },
                "comment": "(loop)(loop text)",
                "match": "(?i)\\s*(loop)(?:\\s+([^;#]*))?"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "comment": "(end)",
                "match": "\\s*(end)"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "string"
                  }
                },
                "comment": "(alt/else/option/par/and/autonumber/critical/opt)(text)",
                "match": "(?i)\\s*(alt|else|option|par|and|rect|autonumber|critical|opt)(?:\\s+([^#;]*))?$"
              },
              {
                "captures": {
                  "1": {
                    "name": "variable"
                  },
                  "2": {
                    "name": "keyword.control.mermaid"
                  },
                  "3": {
                    "name": "variable"
                  },
                  "4": {
                    "name": "keyword.control.mermaid"
                  },
                  "5": {
                    "name": "string"
                  }
                },
                "comment": "(Actor)(Arrow)(Actor)(:)(Message)",
                "match": "(?i)\\s*(\\b[\"()$&%^/#.?!*=<>'\\\\\\w\\s]+\\b\\)?)\\s*(-?-(?:\\>|x|\\))\\>?[+-]?)\\s*([\"()$&%^/#.?!*=<>'\\\\\\w\\s]+\\b\\)?)\\s*(:)\\s*([^;#]*)"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "entity.name.function.mermaid"
                  },
                  "3": {
                    "name": "string"
                  }
                },
                "comment": "(box transparent text)",
                "match": "(?i)\\s*(box)\\s+(transparent)(?:\\s+([^;#]*))?"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "string"
                  }
                },
                "comment": "(box text)",
                "match": "(?i)\\s*(box)(?:\\s+([^;#]*))?"
              }
            ]
          },
          {
            "begin": "^\\s*(stateDiagram(?:-v2)?)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.mermaid"
              }
            },
            "comment": "State Diagram",
            "end": "(^|\\G)(?=\\s*[`:~]{3,}\\s*$)",
            "patterns": [
              {
                "match": "\\%%.*",
                "name": "comment"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "comment": "}",
                "match": "\\s+(})\\s+"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "comment": "--",
                "match": "\\s+(--)\\s+"
              },
              {
                "comment": "(state)",
                "match": "^\\s*([\\w-]+)$",
                "name": "variable"
              },
              {
                "captures": {
                  "1": {
                    "name": "variable"
                  },
                  "2": {
                    "name": "keyword.control.mermaid"
                  },
                  "3": {
                    "name": "string"
                  }
                },
                "comment": "(state) : (description)",
                "match": "(?i)([\\w-]+)\\s+(:)\\s+(\\s*[-\\w\\s]+\\b)"
              },
              {
                "begin": "(?i)^\\s*(state)\\s+",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "comment": "state",
                "end": "$",
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "string"
                      },
                      "2": {
                        "name": "keyword.control.mermaid"
                      },
                      "3": {
                        "name": "variable"
                      }
                    },
                    "comment": "\"(description)\" as (state)",
                    "match": "(?i)\\s*(\"[-\\w\\s]+\\b\")\\s+(as)\\s+([\\w-]+)"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "variable"
                      },
                      "2": {
                        "name": "keyword.control.mermaid"
                      }
                    },
                    "comment": "(state name) {",
                    "match": "(?i)\\s*([\\w-]+)\\s+({)"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "variable"
                      },
                      "2": {
                        "name": "keyword.control.mermaid"
                      }
                    },
                    "comment": "(state name) <<fork|join>>",
                    "match": "(?i)\\s*([\\w-]+)\\s+(<<(?:fork|join)>>)"
                  }
                ]
              },
              {
                "begin": "(?i)([\\w-]+)\\s+(-->)",
                "beginCaptures": {
                  "1": {
                    "name": "variable"
                  },
                  "2": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "comment": "(state) -->",
                "end": "$",
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "variable"
                      },
                      "2": {
                        "name": "keyword.control.mermaid"
                      },
                      "3": {
                        "name": "string"
                      }
                    },
                    "comment": "(state) (:)? (transition text)?",
                    "match": "(?i)\\s+([\\w-]+)\\s*(:)?\\s*([^\\n:]+)?"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.control.mermaid"
                      },
                      "2": {
                        "name": "keyword.control.mermaid"
                      },
                      "3": {
                        "name": "string"
                      }
                    },
                    "comment": "[*] (:)? (transition text)?",
                    "match": "(?i)(\\[\\*\\])\\s*(:)?\\s*([^\\n:]+)?"
                  }
                ]
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "keyword.control.mermaid"
                  },
                  "3": {
                    "name": "variable"
                  },
                  "4": {
                    "name": "keyword.control.mermaid"
                  },
                  "5": {
                    "name": "string"
                  }
                },
                "comment": "[*] --> (state) (:)? (transition text)?",
                "match": "(?i)(\\[\\*\\])\\s+(-->)\\s+([\\w-]+)\\s*(:)?\\s*([^\\n:]+)?"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "variable"
                  },
                  "3": {
                    "name": "keyword.control.mermaid"
                  },
                  "4": {
                    "name": "string"
                  }
                },
                "comment": "note left|right of (state name)",
                "match": "(?i)^\\s*(note (?:left|right) of)\\s+([\\w-]+)\\s+(:)\\s*([^\\n:]+)"
              },
              {
                "begin": "(?i)^\\s*(note (?:left|right) of)\\s+([\\w-]+)(.|\\n)",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "variable"
                  }
                },
                "comment": "note left|right of (state name) (note text) end note",
                "contentName": "string",
                "end": "(?i)(end note)",
                "endCaptures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  }
                }
              }
            ]
          },
          {
            "begin": "^\\s*(journey)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.mermaid"
              }
            },
            "comment": "User Journey",
            "end": "(^|\\G)(?=\\s*[`:~]{3,}\\s*$)",
            "patterns": [
              {
                "match": "\\%%.*",
                "name": "comment"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "string"
                  }
                },
                "match": "(?i)^\\s*(title|section)\\s+(\\s*[\"\\(\\)$&%\\^/#.,?!;:*+=<>\\'\\\\\\-\\w\\s]*)"
              },
              {
                "begin": "(?i)\\s*([\"\\(\\)$&%\\^/.,?!*+=<>\\'\\\\\\-\\w\\s]*)\\s*(:)\\s*(\\d+)\\s*(:)",
                "beginCaptures": {
                  "1": {
                    "name": "string"
                  },
                  "2": {
                    "name": "keyword.control.mermaid"
                  },
                  "3": {
                    "name": "constant.numeric.decimal.mermaid"
                  },
                  "4": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "end": "$",
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "variable"
                      }
                    },
                    "comment": "(taskName)",
                    "match": "(?i)\\s*,?\\s*([^,#\\n]+)"
                  }
                ]
              }
            ]
          },
          {
            "begin": "^\\s*(xychart(?:-beta)?(?:\\s+horizontal)?)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.mermaid"
              }
            },
            "comment": "XY Chart",
            "end": "(^|\\G)(?=\\s*[`:~]{3,}\\s*$)",
            "patterns": [
              {
                "match": "\\%%.*",
                "name": "comment"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "string"
                  }
                },
                "match": "(?i)^\\s*(title)\\s+(\\s*[\"\\(\\)$&%\\^/#.,?!;:*+=<>\\'\\\\\\-\\w\\s]*)"
              },
              {
                "begin": "(?i)^\\s*(x-axis)",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "comment": "(x-axis)",
                "end": "$",
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "constant.numeric.decimal.mermaid"
                      },
                      "2": {
                        "name": "keyword.control.mermaid"
                      },
                      "3": {
                        "name": "constant.numeric.decimal.mermaid"
                      }
                    },
                    "comment": "(decimal) (-->) (decimal)",
                    "match": "(?i)\\s*([-+]?\\d+\\.?\\d*)\\s*(-->)\\s*([-+]?\\d+\\.?\\d*)"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "string"
                      }
                    },
                    "comment": "(\"text\")",
                    "match": "(?i)\\s+(\"[\\($&%\\^/#.,?!;:*+=<>\\'\\\\\\-\\w\\s]*\")"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "string"
                      }
                    },
                    "comment": "(text)",
                    "match": "(?i)\\s+([\\($&%\\^/#.,?!;:*+=<>\\'\\\\\\-\\w]*)"
                  },
                  {
                    "begin": "\\s*(\\[)",
                    "beginCaptures": {
                      "1": {
                        "name": "keyword.control.mermaid"
                      }
                    },
                    "comment": "([)(text)(,)(text)*(])",
                    "end": "\\s*(\\])",
                    "endCaptures": {
                      "1": {
                        "name": "keyword.control.mermaid"
                      }
                    },
                    "patterns": [
                      {
                        "captures": {
                          "1": {
                            "name": "constant.numeric.decimal.mermaid"
                          }
                        },
                        "comment": "(decimal)",
                        "match": "(?i)\\s*([-+]?\\d+\\.?\\d*)"
                      },
                      {
                        "captures": {
                          "1": {
                            "name": "string"
                          }
                        },
                        "comment": "(\"text\")",
                        "match": "(?i)\\s*(\"[\\($&%\\^/#.,?!;:*+=<>\\'\\\\\\-\\w\\s]*\")"
                      },
                      {
                        "captures": {
                          "1": {
                            "name": "string"
                          }
                        },
                        "comment": "(text)",
                        "match": "(?i)\\s*([\\($&%\\^/#.?!;:*+=<>\\'\\\\\\-\\w\\s]+)"
                      },
                      {
                        "captures": {
                          "1": {
                            "name": "keyword.control.mermaid"
                          }
                        },
                        "comment": "(,)",
                        "match": "(?i)\\s*(,)"
                      }
                    ]
                  }
                ]
              },
              {
                "begin": "(?i)^\\s*(y-axis)",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "comment": "(y-axis)",
                "end": "$",
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "constant.numeric.decimal.mermaid"
                      },
                      "2": {
                        "name": "keyword.control.mermaid"
                      },
                      "3": {
                        "name": "constant.numeric.decimal.mermaid"
                      }
                    },
                    "comment": "(decimal) (-->) (decimal)",
                    "match": "(?i)\\s*([-+]?\\d+\\.?\\d*)\\s*(-->)\\s*([-+]?\\d+\\.?\\d*)"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "string"
                      }
                    },
                    "comment": "(\"text\")",
                    "match": "(?i)\\s+(\"[\\($&%\\^/#.,?!;:*+=<>\\'\\\\\\-\\w\\s]*\")"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "string"
                      }
                    },
                    "comment": "(text)",
                    "match": "(?i)\\s+([\\($&%\\^/#.,?!;:*+=<>\\'\\\\\\-\\w]*)"
                  }
                ]
              },
              {
                "begin": "(?i)^\\s*(line|bar)\\s*(\\[)",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  },
                  "2": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "comment": "(line|bar) ([)(decimal)+(])",
                "end": "\\s*(\\])",
                "endCaptures": {
                  "1": {
                    "name": "keyword.control.mermaid"
                  }
                },
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "constant.numeric.decimal.mermaid"
                      }
                    },
                    "comment": "(decimal)",
                    "match": "(?i)\\s*([-+]?\\d+\\.?\\d*)"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "keyword.control.mermaid"
                      }
                    },
                    "comment": "(,)",
                    "match": "(?i)\\s*(,)"
                  }
                ]
              }
            ]
          }
        ]
      },
      "mermaid-ado-code-block": {
        "begin": "(?i)\\s*:::\\s*mermaid\\s*$",
        "contentName": "meta.embedded.block.mermaid",
        "end": "\\s*:::\\s*",
        "patterns": [
          {
            "include": "#mermaid"
          }
        ]
      },
      "mermaid-code-block": {
        "begin": "(?i)(?<=[`~])mermaid(\\s+[^`~]*)?$",
        "contentName": "meta.embedded.block.mermaid",
        "end": "(^|\\G)(?=\\s*[`~]{3,}\\s*$)",
        "patterns": [
          {
            "include": "#mermaid"
          }
        ]
      },
      "mermaid-code-block-with-attributes": {
        "begin": "(?i)(?<=[`~])\\{\\s*\\.?mermaid(\\s+[^`~]*)?$",
        "contentName": "meta.embedded.block.mermaid",
        "end": "(^|\\G)(?=\\s*[`~]{3,}\\s*$)",
        "patterns": [
          {
            "include": "#mermaid"
          }
        ]
      }
    },
    "scopeName": "markdown.mermaid.codeblock",
    "aliases": [
      "mmd"
    ]
  }
])