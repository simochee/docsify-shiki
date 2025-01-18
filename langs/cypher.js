/** Shiki Language: cypher */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push([
  {
    "displayName": "Cypher",
    "fileTypes": [
      "cql",
      "cyp",
      "cypher"
    ],
    "name": "cypher",
    "patterns": [
      {
        "include": "#comments"
      },
      {
        "include": "#constants"
      },
      {
        "include": "#keywords"
      },
      {
        "include": "#functions"
      },
      {
        "include": "#path-patterns"
      },
      {
        "include": "#operators"
      },
      {
        "include": "#identifiers"
      },
      {
        "include": "#properties_literal"
      },
      {
        "include": "#numbers"
      },
      {
        "include": "#strings"
      }
    ],
    "repository": {
      "comments": {
        "patterns": [
          {
            "match": "//.*$\\n?",
            "name": "comment.line.double-slash.cypher"
          }
        ]
      },
      "constants": {
        "patterns": [
          {
            "match": "(?i)\\bTRUE|FALSE\\b",
            "name": "constant.language.bool.cypher"
          },
          {
            "match": "(?i)\\bNULL\\b",
            "name": "constant.language.missing.cypher"
          }
        ]
      },
      "functions": {
        "patterns": [
          {
            "comment": "List of Cypher built-in functions from http://docs.neo4j.org/chunked/milestone/query-function.html",
            "match": "(?i)\\b((NOT)(?=\\s*\\()|IS\\s+NULL|IS\\s+NOT\\s+NULL)",
            "name": "keyword.control.function.boolean.cypher"
          },
          {
            "comment": "List of Cypher built-in functions from http://docs.neo4j.org/chunked/milestone/query-function.html",
            "match": "(?i)\\b(ALL|ANY|NONE|SINGLE)(?=\\s*\\()",
            "name": "support.function.predicate.cypher"
          },
          {
            "comment": "List of Cypher built-in functions from http://docs.neo4j.org/chunked/milestone/query-function.html",
            "match": "(?i)\\b(LENGTH|TYPE|ID|COALESCE|HEAD|LAST|TIMESTAMP|STARTNODE|ENDNODE|TOINT|TOFLOAT)(?=\\s*\\()",
            "name": "support.function.scalar.cypher"
          },
          {
            "comment": "List of Cypher built-in functions from http://docs.neo4j.org/chunked/milestone/query-function.html",
            "match": "(?i)\\b(NODES|RELATIONSHIPS|LABELS|EXTRACT|FILTER|TAIL|RANGE|REDUCE)(?=\\s*\\()",
            "name": "support.function.collection.cypher"
          },
          {
            "comment": "List of Cypher built-in functions from http://docs.neo4j.org/chunked/milestone/query-function.html",
            "match": "(?i)\\b(ABS|ACOS|ASIN|ATAN|ATAN2|COS|COT|DEGREES|E|EXP|FLOOR|HAVERSIN|LOG|LOG10|PI|RADIANS|RAND|ROUND|SIGN|SIN|SQRT|TAN)(?=\\s*\\()",
            "name": "support.function.math.cypher"
          },
          {
            "comment": "List of Cypher built-in functions from http://docs.neo4j.org/chunked/milestone/query-function.html",
            "match": "(?i)\\b(COUNT|sum|avg|max|min|stdev|stdevp|percentileDisc|percentileCont|collect)(?=\\s*\\()",
            "name": "support.function.aggregation.cypher"
          },
          {
            "comment": "List of Cypher built-in functions from http://docs.neo4j.org/chunked/milestone/query-function.html",
            "match": "(?i)\\b(STR|REPLACE|SUBSTRING|LEFT|RIGHT|LTRIM|RTRIM|TRIM|LOWER|UPPER|SPLIT)(?=\\s*\\()",
            "name": "support.function.string.cypher"
          }
        ]
      },
      "identifiers": {
        "patterns": [
          {
            "match": "`.+?`",
            "name": "variable.other.quoted-identifier.cypher"
          },
          {
            "match": "[\\p{L}_][\\p{L}0-9_]*",
            "name": "variable.other.identifier.cypher"
          }
        ]
      },
      "keywords": {
        "patterns": [
          {
            "match": "(?i)\\b(START|MATCH|WHERE|RETURN|UNION|FOREACH|WITH|AS|LIMIT|SKIP|UNWIND|HAS|DISTINCT|OPTIONAL\\\\s+MATCH|ORDER\\s+BY|CALL|YIELD)\\b",
            "name": "keyword.control.clause.cypher"
          },
          {
            "match": "(?i)\\b(ELSE|END|THEN|CASE|WHEN)\\b",
            "name": "keyword.control.case.cypher"
          },
          {
            "match": "(?i)\\b(FIELDTERMINATOR|USING\\s+PERIODIC\\s+COMMIT|HEADERS|LOAD\\s+CSV|FROM)\\b",
            "name": "keyword.data.import.cypher"
          },
          {
            "match": "(?i)\\b(USING\\s+INDEX|CREATE\\s+INDEX\\s+ON|DROP\\s+INDEX\\s+ON|CREATE\\s+CONSTRAINT\\s+ON|DROP\\s+CONSTRAINT\\s+ON)\\b",
            "name": "keyword.other.indexes.cypher"
          },
          {
            "match": "(?i)\\b(MERGE|DELETE|SET|REMOVE|ON\\s+CREATE|ON\\s+MATCH|CREATE\\s+UNIQUE|CREATE)\\b",
            "name": "keyword.data.definition.cypher"
          },
          {
            "match": "(?i)\\b(DESC|ASC)\\b",
            "name": "keyword.other.order.cypher"
          },
          {
            "begin": "(?i)\\b(node|relationship|rel)((:)([\\p{L}_-][\\p{L}0-9_]*))?(?=\\s*\\()",
            "beginCaptures": {
              "1": {
                "name": "support.class.starting-functions-point.cypher"
              },
              "2": {
                "name": "keyword.control.index-seperator.cypher"
              },
              "3": {
                "name": "keyword.control.index-seperator.cypher"
              },
              "4": {
                "name": "support.class.index.cypher"
              }
            },
            "end": "\\)",
            "name": "source.starting-functions.cypher",
            "patterns": [
              {
                "match": "((?:`.+?`)|(?:[\\p{L}_][\\p{L}0-9_]*))",
                "name": "variable.parameter.relationship-name.cypher"
              },
              {
                "match": "(\\*)",
                "name": "keyword.control.starting-function-params.cypher"
              },
              {
                "include": "#comments"
              },
              {
                "include": "#numbers"
              },
              {
                "include": "#strings"
              }
            ]
          }
        ]
      },
      "numbers": {
        "patterns": [
          {
            "match": "\\b\\d+(\\.\\d+)?\\b",
            "name": "constant.numeric.cypher"
          }
        ]
      },
      "operators": {
        "patterns": [
          {
            "match": "(\\+|\\-|\\/|\\*|\\%|\\?|!)",
            "name": "keyword.operator.math.cypher"
          },
          {
            "match": "(<=|=>|<>|<|>|=~|=)",
            "name": "keyword.operator.compare.cypher"
          },
          {
            "match": "(?i)\\b(OR|AND|XOR|IS)\\b",
            "name": "keyword.operator.logical.cypher"
          },
          {
            "match": "(?i)\\b(IN)\\b",
            "name": "keyword.operator.in.cypher"
          }
        ]
      },
      "path-patterns": {
        "patterns": [
          {
            "match": "(<--|-->|--)",
            "name": "support.function.relationship-pattern.cypher"
          },
          {
            "begin": "(<-|-)(\\[)",
            "beginCaptures": {
              "1": {
                "name": "support.function.relationship-pattern-start.cypher"
              },
              "2": {
                "name": "keyword.operator.relationship-pattern-start.cypher"
              }
            },
            "end": "(])(->|-)",
            "endCaptures": {
              "1": {
                "name": "keyword.operator.relationship-pattern-end.cypher"
              },
              "2": {
                "name": "support.function.relationship-pattern-end.cypher"
              }
            },
            "name": "path-pattern.cypher",
            "patterns": [
              {
                "include": "#identifiers"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.operator.relationship-type-start.cypher"
                  },
                  "2": {
                    "name": "entity.name.class.relationship.type.cypher"
                  }
                },
                "match": "(:)((?:`.+?`)|(?:[\\p{L}_][\\p{L}0-9_]*))",
                "name": "entity.name.class.relationship-type.cypher"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.type.operator.relationship-type-or.cypher"
                  },
                  "2": {
                    "name": "entity.name.class.relationship.type-or.cypher"
                  }
                },
                "match": "(\\|)(\\s*)((?:`.+?`)|(?:[\\p{L}_][\\p{L}0-9_]*))",
                "name": "entity.name.class.relationship-type-ored.cypher"
              },
              {
                "match": "(?:\\?\\*|\\?|\\*)\\s*(?:\\d+\\s*(?:\\.\\.\\s*\\d+)?)?",
                "name": "support.function.relationship-pattern.quant.cypher"
              },
              {
                "include": "#properties_literal"
              }
            ]
          }
        ]
      },
      "properties_literal": {
        "patterns": [
          {
            "begin": "{",
            "beginCaptures": {
              "0": {
                "name": "keyword.control.properties_literal.cypher"
              }
            },
            "end": "}",
            "endCaptures": {
              "0": {
                "name": "keyword.control.properties_literal.cypher"
              }
            },
            "name": "source.cypher",
            "patterns": [
              {
                "match": ":|,",
                "name": "keyword.control.properties_literal.seperator.cypher"
              },
              {
                "include": "#comments"
              },
              {
                "include": "#constants"
              },
              {
                "include": "#functions"
              },
              {
                "include": "#operators"
              },
              {
                "include": "#identifiers"
              },
              {
                "include": "#numbers"
              },
              {
                "include": "#strings"
              }
            ]
          }
        ]
      },
      "string_escape": {
        "captures": {
          "2": {
            "name": "string.quoted.double.cypher"
          }
        },
        "match": "(\\\\\\\\|\\\\[tbnrf])|(\\\\'|\\\\\")",
        "name": "constant.character.escape.cypher"
      },
      "strings": {
        "patterns": [
          {
            "begin": "'",
            "end": "'",
            "name": "string.quoted.single.cypher",
            "patterns": [
              {
                "include": "#string_escape"
              }
            ]
          },
          {
            "begin": "\"",
            "end": "\"",
            "name": "string.quoted.double.cypher",
            "patterns": [
              {
                "include": "#string_escape"
              }
            ]
          }
        ]
      }
    },
    "scopeName": "source.cypher",
    "aliases": [
      "cql"
    ]
  }
])