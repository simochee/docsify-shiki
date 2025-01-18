/** Shiki Language: cpp-macro */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push([
  {
    "displayName": "RegExp",
    "fileTypes": [
      "re"
    ],
    "name": "regexp",
    "patterns": [
      {
        "include": "#regexp-expression"
      }
    ],
    "repository": {
      "codetags": {
        "captures": {
          "1": {
            "name": "keyword.codetag.notation.python"
          }
        },
        "match": "(?:\\b(NOTE|XXX|HACK|FIXME|BUG|TODO)\\b)"
      },
      "fregexp-base-expression": {
        "patterns": [
          {
            "include": "#fregexp-quantifier"
          },
          {
            "include": "#fstring-formatting-braces"
          },
          {
            "match": "\\{.*?\\}"
          },
          {
            "include": "#regexp-base-common"
          }
        ]
      },
      "fregexp-quantifier": {
        "match": "\\{\\{(\\d+|\\d+,(\\d+)?|,\\d+)\\}\\}",
        "name": "keyword.operator.quantifier.regexp"
      },
      "fstring-formatting-braces": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "constant.character.format.placeholder.other.python"
              },
              "2": {
                "name": "invalid.illegal.brace.python"
              },
              "3": {
                "name": "constant.character.format.placeholder.other.python"
              }
            },
            "comment": "empty braces are illegal",
            "match": "({)(\\s*?)(})"
          },
          {
            "match": "({{|}})",
            "name": "constant.character.escape.python"
          }
        ]
      },
      "regexp-backreference": {
        "captures": {
          "1": {
            "name": "support.other.parenthesis.regexp punctuation.parenthesis.backreference.named.begin.regexp"
          },
          "2": {
            "name": "entity.name.tag.named.backreference.regexp"
          },
          "3": {
            "name": "support.other.parenthesis.regexp punctuation.parenthesis.backreference.named.end.regexp"
          }
        },
        "match": "(\\()(\\?P=\\w+(?:\\s+[[:alnum:]]+)?)(\\))",
        "name": "meta.backreference.named.regexp"
      },
      "regexp-backreference-number": {
        "captures": {
          "1": {
            "name": "entity.name.tag.backreference.regexp"
          }
        },
        "match": "(\\\\[1-9]\\d?)",
        "name": "meta.backreference.regexp"
      },
      "regexp-base-common": {
        "patterns": [
          {
            "match": "\\.",
            "name": "support.other.match.any.regexp"
          },
          {
            "match": "\\^",
            "name": "support.other.match.begin.regexp"
          },
          {
            "match": "\\$",
            "name": "support.other.match.end.regexp"
          },
          {
            "match": "[+*?]\\??",
            "name": "keyword.operator.quantifier.regexp"
          },
          {
            "match": "\\|",
            "name": "keyword.operator.disjunction.regexp"
          },
          {
            "include": "#regexp-escape-sequence"
          }
        ]
      },
      "regexp-base-expression": {
        "patterns": [
          {
            "include": "#regexp-quantifier"
          },
          {
            "include": "#regexp-base-common"
          }
        ]
      },
      "regexp-character-set": {
        "patterns": [
          {
            "match": "\\[\\^?\\](?!.*?\\])"
          },
          {
            "begin": "(\\[)(\\^)?(\\])?",
            "beginCaptures": {
              "1": {
                "name": "punctuation.character.set.begin.regexp constant.other.set.regexp"
              },
              "2": {
                "name": "keyword.operator.negation.regexp"
              },
              "3": {
                "name": "constant.character.set.regexp"
              }
            },
            "end": "(\\])",
            "endCaptures": {
              "1": {
                "name": "punctuation.character.set.end.regexp constant.other.set.regexp"
              },
              "2": {
                "name": "invalid.illegal.newline.python"
              }
            },
            "name": "meta.character.set.regexp",
            "patterns": [
              {
                "include": "#regexp-charecter-set-escapes"
              },
              {
                "match": "[^\\n]",
                "name": "constant.character.set.regexp"
              }
            ]
          }
        ]
      },
      "regexp-charecter-set-escapes": {
        "patterns": [
          {
            "match": "\\\\[abfnrtv\\\\]",
            "name": "constant.character.escape.regexp"
          },
          {
            "include": "#regexp-escape-special"
          },
          {
            "match": "\\\\([0-7]{1,3})",
            "name": "constant.character.escape.regexp"
          },
          {
            "include": "#regexp-escape-character"
          },
          {
            "include": "#regexp-escape-unicode"
          },
          {
            "include": "#regexp-escape-catchall"
          }
        ]
      },
      "regexp-comments": {
        "begin": "\\(\\?#",
        "beginCaptures": {
          "0": {
            "name": "punctuation.comment.begin.regexp"
          }
        },
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "punctuation.comment.end.regexp"
          },
          "2": {
            "name": "invalid.illegal.newline.python"
          }
        },
        "name": "comment.regexp",
        "patterns": [
          {
            "include": "#codetags"
          }
        ]
      },
      "regexp-conditional": {
        "begin": "(\\()\\?\\((\\w+(?:\\s+[[:alnum:]]+)?|\\d+)\\)",
        "beginCaptures": {
          "0": {
            "name": "keyword.operator.conditional.regexp"
          },
          "1": {
            "name": "punctuation.parenthesis.conditional.begin.regexp"
          }
        },
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp"
          },
          "2": {
            "name": "invalid.illegal.newline.python"
          }
        },
        "patterns": [
          {
            "include": "#regexp-expression"
          }
        ]
      },
      "regexp-escape-catchall": {
        "match": "\\\\(.|\\n)",
        "name": "constant.character.escape.regexp"
      },
      "regexp-escape-character": {
        "match": "\\\\(x[0-9A-Fa-f]{2}|0[0-7]{1,2}|[0-7]{3})",
        "name": "constant.character.escape.regexp"
      },
      "regexp-escape-sequence": {
        "patterns": [
          {
            "include": "#regexp-escape-special"
          },
          {
            "include": "#regexp-escape-character"
          },
          {
            "include": "#regexp-escape-unicode"
          },
          {
            "include": "#regexp-backreference-number"
          },
          {
            "include": "#regexp-escape-catchall"
          }
        ]
      },
      "regexp-escape-special": {
        "match": "\\\\([AbBdDsSwWZ])",
        "name": "support.other.escape.special.regexp"
      },
      "regexp-escape-unicode": {
        "match": "\\\\(u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})",
        "name": "constant.character.unicode.regexp"
      },
      "regexp-expression": {
        "patterns": [
          {
            "include": "#regexp-base-expression"
          },
          {
            "include": "#regexp-character-set"
          },
          {
            "include": "#regexp-comments"
          },
          {
            "include": "#regexp-flags"
          },
          {
            "include": "#regexp-named-group"
          },
          {
            "include": "#regexp-backreference"
          },
          {
            "include": "#regexp-lookahead"
          },
          {
            "include": "#regexp-lookahead-negative"
          },
          {
            "include": "#regexp-lookbehind"
          },
          {
            "include": "#regexp-lookbehind-negative"
          },
          {
            "include": "#regexp-conditional"
          },
          {
            "include": "#regexp-parentheses-non-capturing"
          },
          {
            "include": "#regexp-parentheses"
          }
        ]
      },
      "regexp-flags": {
        "match": "\\(\\?[aiLmsux]+\\)",
        "name": "storage.modifier.flag.regexp"
      },
      "regexp-lookahead": {
        "begin": "(\\()\\?=",
        "beginCaptures": {
          "0": {
            "name": "keyword.operator.lookahead.regexp"
          },
          "1": {
            "name": "punctuation.parenthesis.lookahead.begin.regexp"
          }
        },
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp"
          },
          "2": {
            "name": "invalid.illegal.newline.python"
          }
        },
        "patterns": [
          {
            "include": "#regexp-expression"
          }
        ]
      },
      "regexp-lookahead-negative": {
        "begin": "(\\()\\?!",
        "beginCaptures": {
          "0": {
            "name": "keyword.operator.lookahead.negative.regexp"
          },
          "1": {
            "name": "punctuation.parenthesis.lookahead.begin.regexp"
          }
        },
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp"
          },
          "2": {
            "name": "invalid.illegal.newline.python"
          }
        },
        "patterns": [
          {
            "include": "#regexp-expression"
          }
        ]
      },
      "regexp-lookbehind": {
        "begin": "(\\()\\?<=",
        "beginCaptures": {
          "0": {
            "name": "keyword.operator.lookbehind.regexp"
          },
          "1": {
            "name": "punctuation.parenthesis.lookbehind.begin.regexp"
          }
        },
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp"
          },
          "2": {
            "name": "invalid.illegal.newline.python"
          }
        },
        "patterns": [
          {
            "include": "#regexp-expression"
          }
        ]
      },
      "regexp-lookbehind-negative": {
        "begin": "(\\()\\?<!",
        "beginCaptures": {
          "0": {
            "name": "keyword.operator.lookbehind.negative.regexp"
          },
          "1": {
            "name": "punctuation.parenthesis.lookbehind.begin.regexp"
          }
        },
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp"
          },
          "2": {
            "name": "invalid.illegal.newline.python"
          }
        },
        "patterns": [
          {
            "include": "#regexp-expression"
          }
        ]
      },
      "regexp-named-group": {
        "begin": "(\\()(\\?P<\\w+(?:\\s+[[:alnum:]]+)?>)",
        "beginCaptures": {
          "1": {
            "name": "support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp"
          },
          "2": {
            "name": "entity.name.tag.named.group.regexp"
          }
        },
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp"
          },
          "2": {
            "name": "invalid.illegal.newline.python"
          }
        },
        "name": "meta.named.regexp",
        "patterns": [
          {
            "include": "#regexp-expression"
          }
        ]
      },
      "regexp-parentheses": {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp"
          }
        },
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "support.other.parenthesis.regexp punctuation.parenthesis.end.regexp"
          },
          "2": {
            "name": "invalid.illegal.newline.python"
          }
        },
        "patterns": [
          {
            "include": "#regexp-expression"
          }
        ]
      },
      "regexp-parentheses-non-capturing": {
        "begin": "\\(\\?:",
        "beginCaptures": {
          "0": {
            "name": "support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp"
          }
        },
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp"
          },
          "2": {
            "name": "invalid.illegal.newline.python"
          }
        },
        "patterns": [
          {
            "include": "#regexp-expression"
          }
        ]
      },
      "regexp-quantifier": {
        "match": "\\{(\\d+|\\d+,(\\d+)?|,\\d+)\\}",
        "name": "keyword.operator.quantifier.regexp"
      }
    },
    "scopeName": "source.regexp.python",
    "aliases": [
      "regex"
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
    "displayName": "C++",
    "name": "cpp-macro",
    "patterns": [
      {
        "include": "#ever_present_context"
      },
      {
        "include": "#constructor_root"
      },
      {
        "include": "#destructor_root"
      },
      {
        "include": "#function_definition"
      },
      {
        "include": "#operator_overload"
      },
      {
        "include": "#using_namespace"
      },
      {
        "include": "source.cpp#type_alias"
      },
      {
        "include": "source.cpp#using_name"
      },
      {
        "include": "source.cpp#namespace_alias"
      },
      {
        "include": "#namespace_block"
      },
      {
        "include": "#extern_block"
      },
      {
        "include": "#typedef_class"
      },
      {
        "include": "#typedef_struct"
      },
      {
        "include": "#typedef_union"
      },
      {
        "include": "source.cpp#misc_keywords"
      },
      {
        "include": "source.cpp#standard_declares"
      },
      {
        "include": "#class_block"
      },
      {
        "include": "#struct_block"
      },
      {
        "include": "#union_block"
      },
      {
        "include": "#enum_block"
      },
      {
        "include": "source.cpp#template_isolated_definition"
      },
      {
        "include": "#template_definition"
      },
      {
        "include": "source.cpp#template_explicit_instantiation"
      },
      {
        "include": "source.cpp#access_control_keywords"
      },
      {
        "include": "#block"
      },
      {
        "include": "#static_assert"
      },
      {
        "include": "#assembly"
      },
      {
        "include": "#function_pointer"
      },
      {
        "include": "#evaluation_context"
      }
    ],
    "repository": {
      "alignas_attribute": {
        "begin": "alignas\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.attribute.begin.cpp"
          }
        },
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.attribute.end.cpp"
          }
        },
        "name": "support.other.attribute.cpp",
        "patterns": [
          {
            "include": "#attributes_context"
          },
          {
            "begin": "\\(",
            "beginCaptures": {},
            "end": "\\)|(?=(?<!\\\\)\n)",
            "endCaptures": {},
            "patterns": [
              {
                "include": "#attributes_context"
              },
              {
                "include": "#string_context"
              },
              {
                "include": "#ever_present_context"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "keyword.other.using.directive.cpp"
              },
              "2": {
                "name": "entity.name.namespace.cpp"
              }
            },
            "match": "(using)\\s+((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))"
          },
          {
            "match": ",",
            "name": "punctuation.separator.attribute.cpp"
          },
          {
            "match": ":",
            "name": "punctuation.accessor.attribute.cpp"
          },
          {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)(?=::)",
            "name": "entity.name.namespace.cpp"
          },
          {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.other.attribute.$0.cpp"
          },
          {
            "include": "source.cpp#number_literal"
          },
          {
            "include": "#ever_present_context"
          }
        ]
      },
      "alignas_operator": {
        "begin": "((?<!\\w)alignas(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.functionlike.cpp keyword.operator.alignas.cpp"
          },
          "2": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "name": "punctuation.section.arguments.begin.bracket.round.operator.alignas.cpp"
          }
        },
        "contentName": "meta.arguments.operator.alignas",
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.operator.alignas.cpp"
          }
        },
        "patterns": [
          {
            "include": "#evaluation_context"
          }
        ]
      },
      "alignof_operator": {
        "begin": "((?<!\\w)alignof(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.functionlike.cpp keyword.operator.alignof.cpp"
          },
          "2": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "name": "punctuation.section.arguments.begin.bracket.round.operator.alignof.cpp"
          }
        },
        "contentName": "meta.arguments.operator.alignof",
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.operator.alignof.cpp"
          }
        },
        "patterns": [
          {
            "include": "#evaluation_context"
          }
        ]
      },
      "assembly": {
        "begin": "(\\b(?:__asm__|asm)\\b)(?:\\s+)?((?:volatile)?)",
        "beginCaptures": {
          "1": {
            "name": "storage.type.asm.cpp"
          },
          "2": {
            "name": "storage.modifier.cpp"
          }
        },
        "end": "(?!\\G)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.asm.cpp",
        "patterns": [
          {
            "captures": {
              "1": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:\\n|$)"
          },
          {
            "include": "#comments"
          },
          {
            "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.parens.begin.bracket.round.assembly.cpp"
              },
              "1": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "end": "\\)|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.parens.end.bracket.round.assembly.cpp"
              }
            },
            "patterns": [
              {
                "begin": "(R?)(\")",
                "beginCaptures": {
                  "1": {
                    "name": "meta.encoding.cpp"
                  },
                  "2": {
                    "name": "punctuation.definition.string.begin.assembly.cpp"
                  }
                },
                "contentName": "meta.embedded.assembly",
                "end": "\"|(?=(?<!\\\\)\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.assembly.cpp"
                  }
                },
                "name": "string.quoted.double.cpp",
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
                    "include": "source.cpp#backslash_escapes"
                  },
                  {
                    "include": "#string_escaped_char"
                  }
                ]
              },
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.parens.begin.bracket.round.assembly.inner.cpp"
                  }
                },
                "end": "\\)|(?=(?<!\\\\)\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.parens.end.bracket.round.assembly.inner.cpp"
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
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "2": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "3": {
                    "name": "comment.block.cpp"
                  },
                  "4": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  },
                  "5": {
                    "name": "variable.other.asm.label.cpp"
                  },
                  "6": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "7": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "8": {
                    "name": "comment.block.cpp"
                  },
                  "9": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  }
                },
                "match": "\\[((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))\\]"
              },
              {
                "match": ":",
                "name": "punctuation.separator.delimiter.colon.assembly.cpp"
              },
              {
                "include": "#comments"
              }
            ]
          }
        ]
      },
      "attributes_context": {
        "patterns": [
          {
            "include": "#cpp_attributes"
          },
          {
            "include": "#gcc_attributes"
          },
          {
            "include": "#ms_attributes"
          },
          {
            "include": "#alignas_attribute"
          }
        ]
      },
      "block": {
        "begin": "{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.cpp"
          }
        },
        "end": "}|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.cpp"
          }
        },
        "name": "meta.block.cpp",
        "patterns": [
          {
            "include": "#function_body_context"
          }
        ]
      },
      "block_comment": {
        "begin": "\\s*+(\\/\\*)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.comment.begin.cpp"
          }
        },
        "end": "\\*\\/|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.comment.end.cpp"
          }
        },
        "name": "comment.block.cpp"
      },
      "builtin_storage_type_initilizer": {
        "begin": "\\s*+(?<!\\w)(?:(?:(?:((?:(?:unsigned)|(?:wchar_t)|(?:double)|(?:signed)|(?:short)|(?:float)|(?:auto)|(?:void)|(?:long)|(?:char)|(?:bool)|(?:int)))|((?:(?:uint_least32_t)|(?:uint_least64_t)|(?:uint_least16_t)|(?:uint_fast64_t)|(?:uint_least8_t)|(?:int_least64_t)|(?:int_least32_t)|(?:int_least16_t)|(?:uint_fast16_t)|(?:uint_fast32_t)|(?:int_least8_t)|(?:int_fast16_t)|(?:int_fast32_t)|(?:int_fast64_t)|(?:uint_fast8_t)|(?:int_fast8_t)|(?:suseconds_t)|(?:useconds_t)|(?:uintmax_t)|(?:uintmax_t)|(?:in_port_t)|(?:uintmax_t)|(?:in_addr_t)|(?:blksize_t)|(?:uintptr_t)|(?:intmax_t)|(?:intptr_t)|(?:blkcnt_t)|(?:intmax_t)|(?:u_quad_t)|(?:uint16_t)|(?:uint32_t)|(?:uint64_t)|(?:ssize_t)|(?:fixpt_t)|(?:qaddr_t)|(?:u_short)|(?:int16_t)|(?:int32_t)|(?:int64_t)|(?:uint8_t)|(?:daddr_t)|(?:caddr_t)|(?:swblk_t)|(?:clock_t)|(?:segsz_t)|(?:nlink_t)|(?:time_t)|(?:u_long)|(?:ushort)|(?:quad_t)|(?:mode_t)|(?:size_t)|(?:u_char)|(?:int8_t)|(?:u_int)|(?:uid_t)|(?:off_t)|(?:pid_t)|(?:gid_t)|(?:dev_t)|(?:div_t)|(?:key_t)|(?:ino_t)|(?:id_t)|(?:id_t)|(?:uint))))|((?:(?:pthread_rwlockattr_t)|(?:pthread_mutexattr_t)|(?:pthread_condattr_t)|(?:pthread_rwlock_t)|(?:pthread_mutex_t)|(?:pthread_cond_t)|(?:pthread_attr_t)|(?:pthread_once_t)|(?:pthread_key_t)|(?:pthread_t))))|([a-zA-Z_]\\w*_t))(?!\\w)\\s*+(?<!\\w)(\\()",
        "beginCaptures": {
          "1": {
            "name": "storage.type.primitive.cpp storage.type.built-in.primitive.cpp"
          },
          "2": {
            "name": "storage.type.cpp storage.type.built-in.cpp"
          },
          "3": {
            "name": "support.type.posix-reserved.pthread.cpp support.type.built-in.posix-reserved.pthread.cpp"
          },
          "4": {
            "name": "support.type.posix-reserved.cpp support.type.built-in.posix-reserved.cpp"
          },
          "5": {
            "name": "punctuation.section.arguments.begin.bracket.round.initializer.cpp"
          }
        },
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.initializer.cpp"
          }
        },
        "patterns": [
          {
            "include": "#evaluation_context"
          }
        ]
      },
      "case_statement": {
        "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)case(?!\\w))",
        "beginCaptures": {
          "1": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "5": {
            "name": "keyword.control.case.cpp"
          }
        },
        "end": ":|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.separator.colon.case.cpp"
          }
        },
        "name": "meta.conditional.case.cpp",
        "patterns": [
          {
            "include": "#evaluation_context"
          }
        ]
      },
      "class_block": {
        "begin": "((?<!\\w)class(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?={)|(?:((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*+)?(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(:(?!:)))?)",
        "beginCaptures": {
          "0": {
            "name": "meta.head.class.cpp"
          },
          "1": {
            "name": "storage.type.$1.cpp"
          },
          "2": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "patterns": [
              {
                "include": "#attributes_context"
              },
              {
                "include": "source.cpp#number_literal"
              }
            ]
          },
          "7": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "9": {
            "name": "comment.block.cpp"
          },
          "10": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "11": {
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "storage.type.modifier.final.cpp"
                  },
                  "2": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "3": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "4": {
                    "name": "comment.block.cpp"
                  },
                  "5": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  }
                },
                "match": "((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))"
              },
              {
                "captures": {
                  "1": {
                    "name": "entity.name.type.class.cpp"
                  },
                  "2": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "3": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "4": {
                    "name": "comment.block.cpp"
                  },
                  "5": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  },
                  "6": {
                    "name": "storage.type.modifier.final.cpp"
                  },
                  "7": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "8": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "9": {
                    "name": "comment.block.cpp"
                  },
                  "10": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  }
                },
                "match": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=:|{|$)"
              },
              {
                "match": "DLLEXPORT",
                "name": "entity.name.other.preprocessor.macro.predefined.DLLEXPORT.cpp"
              },
              {
                "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
                "name": "entity.name.other.preprocessor.macro.predefined.probably.$0.cpp"
              }
            ]
          },
          "12": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "13": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "14": {
            "name": "comment.block.cpp"
          },
          "15": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "16": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "17": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "18": {
            "name": "comment.block.cpp"
          },
          "19": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "20": {
            "name": "punctuation.separator.colon.inheritance.cpp"
          }
        },
        "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.statement.cpp"
          },
          "2": {
            "name": "punctuation.terminator.statement.cpp"
          }
        },
        "name": "meta.block.class.cpp",
        "patterns": [
          {
            "begin": "\\G ?",
            "beginCaptures": {},
            "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.begin.bracket.curly.class.cpp"
              }
            },
            "name": "meta.head.class.cpp",
            "patterns": [
              {
                "include": "#ever_present_context"
              },
              {
                "include": "#inheritance_context"
              },
              {
                "include": "#template_call_range"
              }
            ]
          },
          {
            "begin": "(?<=\\{|<%|\\?\\?<)",
            "beginCaptures": {},
            "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.end.bracket.curly.class.cpp"
              }
            },
            "name": "meta.body.class.cpp",
            "patterns": [
              {
                "include": "#function_pointer"
              },
              {
                "include": "#static_assert"
              },
              {
                "include": "#constructor_inline"
              },
              {
                "include": "#destructor_inline"
              },
              {
                "include": "$self"
              }
            ]
          },
          {
            "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
            "beginCaptures": {},
            "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
            "endCaptures": {},
            "name": "meta.tail.class.cpp",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          }
        ]
      },
      "comments": {
        "patterns": [
          {
            "begin": "^(?:\\s+)?+(\\/\\/[!\\/]+)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.comment.documentation.cpp"
              }
            },
            "end": "(?<=\\n)(?<!\\\\\\n)|(?=(?<!\\\\)\n)",
            "endCaptures": {},
            "name": "comment.line.double-slash.documentation.cpp",
            "patterns": [
              {
                "include": "source.cpp#line_continuation_character"
              },
              {
                "match": "(?<=[\\s*!\\/])[\\\\@](?:callergraph|callgraph|else|endif|f\\$|f\\[|f\\]|hidecallergraph|hidecallgraph|hiderefby|hiderefs|hideinitializer|htmlinclude|n|nosubgrouping|private|privatesection|protected|protectedsection|public|publicsection|pure|showinitializer|showrefby|showrefs|tableofcontents|\\$|\\#|<|>|%|\"|\\.|=|::|\\||\\-\\-|\\-\\-\\-)\\b(?:\\{[^}]*\\})?",
                "name": "storage.type.class.doxygen.cpp"
              },
              {
                "captures": {
                  "1": {
                    "name": "storage.type.class.doxygen.cpp"
                  },
                  "2": {
                    "name": "markup.italic.doxygen.cpp"
                  }
                },
                "match": "((?<=[\\s*!\\/])[\\\\@](?:a|em|e))\\s+(\\S+)"
              },
              {
                "captures": {
                  "1": {
                    "name": "storage.type.class.doxygen.cpp"
                  },
                  "2": {
                    "name": "markup.bold.doxygen.cpp"
                  }
                },
                "match": "((?<=[\\s*!\\/])[\\\\@]b)\\s+(\\S+)"
              },
              {
                "captures": {
                  "1": {
                    "name": "storage.type.class.doxygen.cpp"
                  },
                  "2": {
                    "name": "markup.inline.raw.string.cpp"
                  }
                },
                "match": "((?<=[\\s*!\\/])[\\\\@](?:c|p))\\s+(\\S+)"
              },
              {
                "match": "(?<=[\\s*!\\/])[\\\\@](?:a|anchor|b|c|cite|copybrief|copydetail|copydoc|def|dir|dontinclude|e|em|emoji|enum|example|extends|file|idlexcept|implements|include|includedoc|includelineno|latexinclude|link|memberof|namespace|p|package|ref|refitem|related|relates|relatedalso|relatesalso|verbinclude)\\b(?:\\{[^}]*\\})?",
                "name": "storage.type.class.doxygen.cpp"
              },
              {
                "match": "(?<=[\\s*!\\/])[\\\\@](?:addindex|addtogroup|category|class|defgroup|diafile|dotfile|elseif|fn|headerfile|if|ifnot|image|ingroup|interface|line|mainpage|mscfile|name|overload|page|property|protocol|section|skip|skipline|snippet|snippetdoc|snippetlineno|struct|subpage|subsection|subsubsection|typedef|union|until|vhdlflow|weakgroup)\\b(?:\\{[^}]*\\})?",
                "name": "storage.type.class.doxygen.cpp"
              },
              {
                "captures": {
                  "1": {
                    "name": "storage.type.class.doxygen.cpp"
                  },
                  "2": {
                    "patterns": [
                      {
                        "match": "in|out",
                        "name": "keyword.other.parameter.direction.$0.cpp"
                      }
                    ]
                  },
                  "3": {
                    "patterns": [
                      {
                        "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                        "name": "variable.parameter.cpp"
                      },
                      {
                        "match": ",",
                        "name": "punctuation.cpp"
                      }
                    ]
                  },
                  "4": {
                    "name": "variable.parameter.cpp"
                  },
                  "5": {
                    "name": "punctuation.cpp"
                  },
                  "6": {
                    "name": "variable.parameter.cpp"
                  }
                },
                "match": "((?<=[\\s*!\\/])[\\\\@]param)(?:\\s*\\[((?:,?(?:\\s+)?(?:in|out)(?:\\s+)?)+)\\])?(\\s+((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(?:(,)(?:\\s+)?((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)))*)"
              },
              {
                "match": "(?<=[\\s*!\\/])[\\\\@](?:arg|attention|author|authors|brief|bug|copyright|date|deprecated|details|exception|invariant|li|note|par|paragraph|param|post|pre|remark|remarks|result|return|returns|retval|sa|see|short|since|test|throw|throws|todo|tparam|version|warning|xrefitem)\\b(?:\\{[^}]*\\})?",
                "name": "storage.type.class.doxygen.cpp"
              },
              {
                "match": "(?<=[\\s*!\\/])[\\\\@](?:code|cond|docbookonly|dot|htmlonly|internal|latexonly|link|manonly|msc|parblock|rtfonly|secreflist|startuml|verbatim|xmlonly|endcode|endcond|enddocbookonly|enddot|endhtmlonly|endinternal|endlatexonly|endlink|endmanonly|endmsc|endparblock|endrtfonly|endsecreflist|enduml|endverbatim|endxmlonly)\\b(?:\\{[^}]*\\})?",
                "name": "storage.type.class.doxygen.cpp"
              },
              {
                "match": "(?:\\b[A-Z]+:|@[a-z_]+:)",
                "name": "storage.type.class.gtkdoc.cpp"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.comment.begin.documentation.cpp"
              },
              "2": {
                "patterns": [
                  {
                    "match": "(?<=[\\s*!\\/])[\\\\@](?:callergraph|callgraph|else|endif|f\\$|f\\[|f\\]|hidecallergraph|hidecallgraph|hiderefby|hiderefs|hideinitializer|htmlinclude|n|nosubgrouping|private|privatesection|protected|protectedsection|public|publicsection|pure|showinitializer|showrefby|showrefs|tableofcontents|\\$|\\#|<|>|%|\"|\\.|=|::|\\||\\-\\-|\\-\\-\\-)\\b(?:\\{[^}]*\\})?",
                    "name": "storage.type.class.doxygen.cpp"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "storage.type.class.doxygen.cpp"
                      },
                      "2": {
                        "name": "markup.italic.doxygen.cpp"
                      }
                    },
                    "match": "((?<=[\\s*!\\/])[\\\\@](?:a|em|e))\\s+(\\S+)"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "storage.type.class.doxygen.cpp"
                      },
                      "2": {
                        "name": "markup.bold.doxygen.cpp"
                      }
                    },
                    "match": "((?<=[\\s*!\\/])[\\\\@]b)\\s+(\\S+)"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "storage.type.class.doxygen.cpp"
                      },
                      "2": {
                        "name": "markup.inline.raw.string.cpp"
                      }
                    },
                    "match": "((?<=[\\s*!\\/])[\\\\@](?:c|p))\\s+(\\S+)"
                  },
                  {
                    "match": "(?<=[\\s*!\\/])[\\\\@](?:a|anchor|b|c|cite|copybrief|copydetail|copydoc|def|dir|dontinclude|e|em|emoji|enum|example|extends|file|idlexcept|implements|include|includedoc|includelineno|latexinclude|link|memberof|namespace|p|package|ref|refitem|related|relates|relatedalso|relatesalso|verbinclude)\\b(?:\\{[^}]*\\})?",
                    "name": "storage.type.class.doxygen.cpp"
                  },
                  {
                    "match": "(?<=[\\s*!\\/])[\\\\@](?:addindex|addtogroup|category|class|defgroup|diafile|dotfile|elseif|fn|headerfile|if|ifnot|image|ingroup|interface|line|mainpage|mscfile|name|overload|page|property|protocol|section|skip|skipline|snippet|snippetdoc|snippetlineno|struct|subpage|subsection|subsubsection|typedef|union|until|vhdlflow|weakgroup)\\b(?:\\{[^}]*\\})?",
                    "name": "storage.type.class.doxygen.cpp"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "storage.type.class.doxygen.cpp"
                      },
                      "2": {
                        "patterns": [
                          {
                            "match": "in|out",
                            "name": "keyword.other.parameter.direction.$0.cpp"
                          }
                        ]
                      },
                      "3": {
                        "patterns": [
                          {
                            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                            "name": "variable.parameter.cpp"
                          },
                          {
                            "match": ",",
                            "name": "punctuation.cpp"
                          }
                        ]
                      },
                      "4": {
                        "name": "variable.parameter.cpp"
                      },
                      "5": {
                        "name": "punctuation.cpp"
                      },
                      "6": {
                        "name": "variable.parameter.cpp"
                      }
                    },
                    "match": "((?<=[\\s*!\\/])[\\\\@]param)(?:\\s*\\[((?:,?(?:\\s+)?(?:in|out)(?:\\s+)?)+)\\])?(\\s+((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(?:(,)(?:\\s+)?((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)))*)"
                  },
                  {
                    "match": "(?<=[\\s*!\\/])[\\\\@](?:arg|attention|author|authors|brief|bug|copyright|date|deprecated|details|exception|invariant|li|note|par|paragraph|param|post|pre|remark|remarks|result|return|returns|retval|sa|see|short|since|test|throw|throws|todo|tparam|version|warning|xrefitem)\\b(?:\\{[^}]*\\})?",
                    "name": "storage.type.class.doxygen.cpp"
                  },
                  {
                    "match": "(?<=[\\s*!\\/])[\\\\@](?:code|cond|docbookonly|dot|htmlonly|internal|latexonly|link|manonly|msc|parblock|rtfonly|secreflist|startuml|verbatim|xmlonly|endcode|endcond|enddocbookonly|enddot|endhtmlonly|endinternal|endlatexonly|endlink|endmanonly|endmsc|endparblock|endrtfonly|endsecreflist|enduml|endverbatim|endxmlonly)\\b(?:\\{[^}]*\\})?",
                    "name": "storage.type.class.doxygen.cpp"
                  },
                  {
                    "match": "(?:\\b[A-Z]+:|@[a-z_]+:)",
                    "name": "storage.type.class.gtkdoc.cpp"
                  }
                ]
              },
              "3": {
                "name": "punctuation.definition.comment.end.documentation.cpp"
              }
            },
            "match": "(\\/\\*[!*]+(?=\\s))(.+)([!*]*\\*\\/)",
            "name": "comment.block.documentation.cpp"
          },
          {
            "begin": "(?:\\s+)?+\\/\\*[!*]+(?:(?:\\n|$)|(?=\\s))",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.comment.begin.documentation.cpp"
              }
            },
            "end": "[!*]*\\*\\/|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.comment.end.documentation.cpp"
              }
            },
            "name": "comment.block.documentation.cpp",
            "patterns": [
              {
                "match": "(?<=[\\s*!\\/])[\\\\@](?:callergraph|callgraph|else|endif|f\\$|f\\[|f\\]|hidecallergraph|hidecallgraph|hiderefby|hiderefs|hideinitializer|htmlinclude|n|nosubgrouping|private|privatesection|protected|protectedsection|public|publicsection|pure|showinitializer|showrefby|showrefs|tableofcontents|\\$|\\#|<|>|%|\"|\\.|=|::|\\||\\-\\-|\\-\\-\\-)\\b(?:\\{[^}]*\\})?",
                "name": "storage.type.class.doxygen.cpp"
              },
              {
                "captures": {
                  "1": {
                    "name": "storage.type.class.doxygen.cpp"
                  },
                  "2": {
                    "name": "markup.italic.doxygen.cpp"
                  }
                },
                "match": "((?<=[\\s*!\\/])[\\\\@](?:a|em|e))\\s+(\\S+)"
              },
              {
                "captures": {
                  "1": {
                    "name": "storage.type.class.doxygen.cpp"
                  },
                  "2": {
                    "name": "markup.bold.doxygen.cpp"
                  }
                },
                "match": "((?<=[\\s*!\\/])[\\\\@]b)\\s+(\\S+)"
              },
              {
                "captures": {
                  "1": {
                    "name": "storage.type.class.doxygen.cpp"
                  },
                  "2": {
                    "name": "markup.inline.raw.string.cpp"
                  }
                },
                "match": "((?<=[\\s*!\\/])[\\\\@](?:c|p))\\s+(\\S+)"
              },
              {
                "match": "(?<=[\\s*!\\/])[\\\\@](?:a|anchor|b|c|cite|copybrief|copydetail|copydoc|def|dir|dontinclude|e|em|emoji|enum|example|extends|file|idlexcept|implements|include|includedoc|includelineno|latexinclude|link|memberof|namespace|p|package|ref|refitem|related|relates|relatedalso|relatesalso|verbinclude)\\b(?:\\{[^}]*\\})?",
                "name": "storage.type.class.doxygen.cpp"
              },
              {
                "match": "(?<=[\\s*!\\/])[\\\\@](?:addindex|addtogroup|category|class|defgroup|diafile|dotfile|elseif|fn|headerfile|if|ifnot|image|ingroup|interface|line|mainpage|mscfile|name|overload|page|property|protocol|section|skip|skipline|snippet|snippetdoc|snippetlineno|struct|subpage|subsection|subsubsection|typedef|union|until|vhdlflow|weakgroup)\\b(?:\\{[^}]*\\})?",
                "name": "storage.type.class.doxygen.cpp"
              },
              {
                "captures": {
                  "1": {
                    "name": "storage.type.class.doxygen.cpp"
                  },
                  "2": {
                    "patterns": [
                      {
                        "match": "in|out",
                        "name": "keyword.other.parameter.direction.$0.cpp"
                      }
                    ]
                  },
                  "3": {
                    "patterns": [
                      {
                        "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                        "name": "variable.parameter.cpp"
                      },
                      {
                        "match": ",",
                        "name": "punctuation.cpp"
                      }
                    ]
                  },
                  "4": {
                    "name": "variable.parameter.cpp"
                  },
                  "5": {
                    "name": "punctuation.cpp"
                  },
                  "6": {
                    "name": "variable.parameter.cpp"
                  }
                },
                "match": "((?<=[\\s*!\\/])[\\\\@]param)(?:\\s*\\[((?:,?(?:\\s+)?(?:in|out)(?:\\s+)?)+)\\])?(\\s+((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(?:(,)(?:\\s+)?((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)))*)"
              },
              {
                "match": "(?<=[\\s*!\\/])[\\\\@](?:arg|attention|author|authors|brief|bug|copyright|date|deprecated|details|exception|invariant|li|note|par|paragraph|param|post|pre|remark|remarks|result|return|returns|retval|sa|see|short|since|test|throw|throws|todo|tparam|version|warning|xrefitem)\\b(?:\\{[^}]*\\})?",
                "name": "storage.type.class.doxygen.cpp"
              },
              {
                "match": "(?<=[\\s*!\\/])[\\\\@](?:code|cond|docbookonly|dot|htmlonly|internal|latexonly|link|manonly|msc|parblock|rtfonly|secreflist|startuml|verbatim|xmlonly|endcode|endcond|enddocbookonly|enddot|endhtmlonly|endinternal|endlatexonly|endlink|endmanonly|endmsc|endparblock|endrtfonly|endsecreflist|enduml|endverbatim|endxmlonly)\\b(?:\\{[^}]*\\})?",
                "name": "storage.type.class.doxygen.cpp"
              },
              {
                "match": "(?:\\b[A-Z]+:|@[a-z_]+:)",
                "name": "storage.type.class.gtkdoc.cpp"
              }
            ]
          },
          {
            "include": "source.cpp#emacs_file_banner"
          },
          {
            "include": "#block_comment"
          },
          {
            "include": "#line_comment"
          },
          {
            "include": "source.cpp#invalid_comment_end"
          }
        ]
      },
      "constructor_inline": {
        "begin": "^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:(?:(?:constexpr)|(?:consteval)|(?:explicit)|(?:mutable)|(?:virtual)|(?:inline)|(?:friend))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*)((?:__cdecl|__clrcall|__stdcall|__fastcall|__thiscall|__vectorcall)?)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)(?=\\())",
        "beginCaptures": {
          "0": {
            "name": "meta.head.function.definition.special.constructor.cpp"
          },
          "1": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "5": {
            "patterns": [
              {
                "include": "source.cpp#functional_specifiers_pre_parameters"
              }
            ]
          },
          "6": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "7": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "8": {
            "name": "comment.block.cpp"
          },
          "9": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "10": {
            "name": "storage.type.modifier.calling-convention.cpp"
          },
          "11": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "12": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "13": {
            "name": "comment.block.cpp"
          },
          "14": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "15": {
            "name": "entity.name.function.constructor.cpp entity.name.function.definition.special.constructor.cpp"
          }
        },
        "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.function.definition.special.constructor.cpp",
        "patterns": [
          {
            "begin": "\\G ?",
            "beginCaptures": {},
            "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.begin.bracket.curly.function.definition.special.constructor.cpp"
              }
            },
            "name": "meta.head.function.definition.special.constructor.cpp",
            "patterns": [
              {
                "include": "#ever_present_context"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.operator.assignment.cpp"
                  },
                  "2": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "3": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "4": {
                    "name": "comment.block.cpp"
                  },
                  "5": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  },
                  "6": {
                    "name": "keyword.other.default.function.cpp keyword.other.default.constructor.cpp"
                  },
                  "7": {
                    "name": "keyword.other.delete.function.cpp keyword.other.delete.constructor.cpp"
                  }
                },
                "match": "(\\=)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(default)|(delete))"
              },
              {
                "include": "source.cpp#functional_specifiers_pre_parameters"
              },
              {
                "begin": ":",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.separator.initializers.cpp"
                  }
                },
                "end": "(?=\\{)|(?=(?<!\\\\)\n)",
                "endCaptures": {},
                "patterns": [
                  {
                    "begin": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<3>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)\\s*+)?(\\()",
                    "beginCaptures": {
                      "1": {
                        "name": "entity.name.function.call.initializer.cpp"
                      },
                      "2": {
                        "name": "meta.template.call.cpp",
                        "patterns": [
                          {
                            "include": "#template_call_range"
                          }
                        ]
                      },
                      "3": {},
                      "4": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "5": {
                        "name": "comment.block.cpp"
                      },
                      "6": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      },
                      "7": {
                        "name": "punctuation.section.arguments.begin.bracket.round.function.call.initializer.cpp"
                      }
                    },
                    "contentName": "meta.parameter.initialization",
                    "end": "\\)|(?=(?<!\\\\)\n)",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.section.arguments.end.bracket.round.function.call.initializer.cpp"
                      }
                    },
                    "patterns": [
                      {
                        "include": "#evaluation_context"
                      }
                    ]
                  },
                  {
                    "begin": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(\\{)",
                    "beginCaptures": {
                      "1": {
                        "name": "entity.name.function.call.initializer.cpp"
                      },
                      "2": {
                        "name": "punctuation.section.arguments.begin.bracket.round.function.call.initializer.cpp"
                      }
                    },
                    "contentName": "meta.parameter.initialization",
                    "end": "\\}|(?=(?<!\\\\)\n)",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.section.arguments.end.bracket.round.function.call.initializer.cpp"
                      }
                    },
                    "patterns": [
                      {
                        "include": "#evaluation_context"
                      }
                    ]
                  },
                  {
                    "match": ",",
                    "name": "punctuation.separator.delimiter.comma.cpp"
                  },
                  {
                    "include": "#comments"
                  }
                ]
              },
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.parameters.begin.bracket.round.special.constructor.cpp"
                  }
                },
                "contentName": "meta.function.definition.parameters.special.constructor",
                "end": "\\)|(?=(?<!\\\\)\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.parameters.end.bracket.round.special.constructor.cpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#function_parameter_context"
                  },
                  {
                    "include": "#evaluation_context"
                  }
                ]
              },
              {
                "include": "source.cpp#qualifiers_and_specifiers_post_parameters"
              },
              {
                "include": "$self"
              }
            ]
          },
          {
            "begin": "(?<=\\{|<%|\\?\\?<)",
            "beginCaptures": {},
            "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.end.bracket.curly.function.definition.special.constructor.cpp"
              }
            },
            "name": "meta.body.function.definition.special.constructor.cpp",
            "patterns": [
              {
                "include": "#function_body_context"
              }
            ]
          },
          {
            "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
            "beginCaptures": {},
            "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
            "endCaptures": {},
            "name": "meta.tail.function.definition.special.constructor.cpp",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          }
        ]
      },
      "constructor_root": {
        "begin": "\\s*+((?:__cdecl|__clrcall|__stdcall|__fastcall|__thiscall|__vectorcall)?)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<8>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)(((?>(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))::((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:\\10)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\())",
        "beginCaptures": {
          "0": {
            "name": "meta.head.function.definition.special.constructor.cpp"
          },
          "1": {
            "name": "storage.type.modifier.calling-convention.cpp"
          },
          "2": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "patterns": [
              {
                "match": "::",
                "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.constructor.cpp"
              },
              {
                "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                "name": "entity.name.scope-resolution.constructor.cpp"
              },
              {
                "include": "#template_call_range"
              }
            ]
          },
          "7": {
            "patterns": [
              {
                "include": "#template_call_range"
              }
            ]
          },
          "8": {},
          "9": {
            "patterns": [
              {
                "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?=:)",
                "name": "entity.name.type.constructor.cpp"
              },
              {
                "match": "(?<=:)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
                "name": "entity.name.function.definition.special.constructor.cpp"
              },
              {
                "match": "::",
                "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.constructor.cpp"
              }
            ]
          },
          "10": {},
          "11": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "12": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "13": {
            "name": "comment.block.cpp"
          },
          "14": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "15": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "16": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "17": {
            "name": "comment.block.cpp"
          },
          "18": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "19": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "20": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "21": {
            "name": "comment.block.cpp"
          },
          "22": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.function.definition.special.constructor.cpp",
        "patterns": [
          {
            "begin": "\\G ?",
            "beginCaptures": {},
            "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.begin.bracket.curly.function.definition.special.constructor.cpp"
              }
            },
            "name": "meta.head.function.definition.special.constructor.cpp",
            "patterns": [
              {
                "include": "#ever_present_context"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.operator.assignment.cpp"
                  },
                  "2": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "3": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "4": {
                    "name": "comment.block.cpp"
                  },
                  "5": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  },
                  "6": {
                    "name": "keyword.other.default.function.cpp keyword.other.default.constructor.cpp"
                  },
                  "7": {
                    "name": "keyword.other.delete.function.cpp keyword.other.delete.constructor.cpp"
                  }
                },
                "match": "(\\=)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(default)|(delete))"
              },
              {
                "include": "source.cpp#functional_specifiers_pre_parameters"
              },
              {
                "begin": ":",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.separator.initializers.cpp"
                  }
                },
                "end": "(?=\\{)|(?=(?<!\\\\)\n)",
                "endCaptures": {},
                "patterns": [
                  {
                    "begin": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<3>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)\\s*+)?(\\()",
                    "beginCaptures": {
                      "1": {
                        "name": "entity.name.function.call.initializer.cpp"
                      },
                      "2": {
                        "name": "meta.template.call.cpp",
                        "patterns": [
                          {
                            "include": "#template_call_range"
                          }
                        ]
                      },
                      "3": {},
                      "4": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "5": {
                        "name": "comment.block.cpp"
                      },
                      "6": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      },
                      "7": {
                        "name": "punctuation.section.arguments.begin.bracket.round.function.call.initializer.cpp"
                      }
                    },
                    "contentName": "meta.parameter.initialization",
                    "end": "\\)|(?=(?<!\\\\)\n)",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.section.arguments.end.bracket.round.function.call.initializer.cpp"
                      }
                    },
                    "patterns": [
                      {
                        "include": "#evaluation_context"
                      }
                    ]
                  },
                  {
                    "begin": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(\\{)",
                    "beginCaptures": {
                      "1": {
                        "name": "entity.name.function.call.initializer.cpp"
                      },
                      "2": {
                        "name": "punctuation.section.arguments.begin.bracket.round.function.call.initializer.cpp"
                      }
                    },
                    "contentName": "meta.parameter.initialization",
                    "end": "\\}|(?=(?<!\\\\)\n)",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.section.arguments.end.bracket.round.function.call.initializer.cpp"
                      }
                    },
                    "patterns": [
                      {
                        "include": "#evaluation_context"
                      }
                    ]
                  },
                  {
                    "match": ",",
                    "name": "punctuation.separator.delimiter.comma.cpp"
                  },
                  {
                    "include": "#comments"
                  }
                ]
              },
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.parameters.begin.bracket.round.special.constructor.cpp"
                  }
                },
                "contentName": "meta.function.definition.parameters.special.constructor",
                "end": "\\)|(?=(?<!\\\\)\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.parameters.end.bracket.round.special.constructor.cpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#function_parameter_context"
                  },
                  {
                    "include": "#evaluation_context"
                  }
                ]
              },
              {
                "include": "source.cpp#qualifiers_and_specifiers_post_parameters"
              },
              {
                "include": "$self"
              }
            ]
          },
          {
            "begin": "(?<=\\{|<%|\\?\\?<)",
            "beginCaptures": {},
            "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.end.bracket.curly.function.definition.special.constructor.cpp"
              }
            },
            "name": "meta.body.function.definition.special.constructor.cpp",
            "patterns": [
              {
                "include": "#function_body_context"
              }
            ]
          },
          {
            "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
            "beginCaptures": {},
            "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
            "endCaptures": {},
            "name": "meta.tail.function.definition.special.constructor.cpp",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          }
        ]
      },
      "cpp_attributes": {
        "begin": "\\[\\[",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.attribute.begin.cpp"
          }
        },
        "end": "\\]\\]|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.attribute.end.cpp"
          }
        },
        "name": "support.other.attribute.cpp",
        "patterns": [
          {
            "include": "#attributes_context"
          },
          {
            "begin": "\\(",
            "beginCaptures": {},
            "end": "\\)|(?=(?<!\\\\)\n)",
            "endCaptures": {},
            "patterns": [
              {
                "include": "#attributes_context"
              },
              {
                "include": "#string_context"
              },
              {
                "include": "#ever_present_context"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "keyword.other.using.directive.cpp"
              },
              "2": {
                "name": "entity.name.namespace.cpp"
              }
            },
            "match": "(using)\\s+((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))"
          },
          {
            "match": ",",
            "name": "punctuation.separator.attribute.cpp"
          },
          {
            "match": ":",
            "name": "punctuation.accessor.attribute.cpp"
          },
          {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)(?=::)",
            "name": "entity.name.namespace.cpp"
          },
          {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.other.attribute.$0.cpp"
          },
          {
            "include": "source.cpp#number_literal"
          },
          {
            "include": "#ever_present_context"
          }
        ]
      },
      "curly_initializer": {
        "begin": "(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\{)",
        "beginCaptures": {
          "1": {
            "name": "meta.qualified_type.cpp",
            "patterns": [
              {
                "match": "::",
                "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
              },
              {
                "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
                "name": "storage.type.$0.cpp"
              },
              {
                "include": "#attributes_context"
              },
              {
                "include": "#storage_types"
              },
              {
                "include": "source.cpp#number_literal"
              },
              {
                "include": "#string_context"
              },
              {
                "include": "source.cpp#comma"
              },
              {
                "include": "source.cpp#scope_resolution_inner_generated"
              },
              {
                "begin": "<",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
                  }
                },
                "end": ">|(?=(?<!\\\\)\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.angle-brackets.end.template.call.cpp"
                  }
                },
                "name": "meta.template.call.cpp",
                "patterns": [
                  {
                    "include": "#template_call_context"
                  }
                ]
              },
              {
                "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
                "name": "entity.name.type.cpp"
              }
            ]
          },
          "2": {
            "patterns": [
              {
                "include": "#attributes_context"
              },
              {
                "include": "source.cpp#number_literal"
              }
            ]
          },
          "3": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "5": {
            "name": "comment.block.cpp"
          },
          "6": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "7": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "9": {
            "name": "comment.block.cpp"
          },
          "10": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "11": {
            "patterns": [
              {
                "match": "::",
                "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
              },
              {
                "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                "name": "entity.name.scope-resolution.type.cpp"
              },
              {
                "include": "#template_call_range"
              }
            ]
          },
          "12": {
            "patterns": [
              {
                "include": "#template_call_range"
              }
            ]
          },
          "13": {},
          "14": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "15": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "16": {
            "name": "comment.block.cpp"
          },
          "17": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "18": {},
          "19": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "20": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "21": {
            "name": "comment.block.cpp"
          },
          "22": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "23": {
            "name": "punctuation.section.arguments.begin.bracket.curly.initializer.cpp"
          }
        },
        "end": "\\}|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.curly.initializer.cpp"
          }
        },
        "name": "meta.initialization.cpp",
        "patterns": [
          {
            "include": "#evaluation_context"
          },
          {
            "include": "source.cpp#comma"
          }
        ]
      },
      "decltype": {
        "begin": "((?<!\\w)decltype(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.functionlike.cpp keyword.other.decltype.cpp storage.type.decltype.cpp"
          },
          "2": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "name": "punctuation.section.arguments.begin.bracket.round.decltype.cpp"
          }
        },
        "contentName": "meta.arguments.decltype",
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.decltype.cpp"
          }
        },
        "patterns": [
          {
            "include": "#evaluation_context"
          }
        ]
      },
      "decltype_specifier": {
        "begin": "((?<!\\w)decltype(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.functionlike.cpp keyword.other.decltype.cpp storage.type.decltype.cpp"
          },
          "2": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "name": "punctuation.section.arguments.begin.bracket.round.decltype.cpp"
          }
        },
        "contentName": "meta.arguments.decltype",
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.decltype.cpp"
          }
        },
        "patterns": [
          {
            "include": "#evaluation_context"
          }
        ]
      },
      "default_statement": {
        "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)default(?!\\w))",
        "beginCaptures": {
          "1": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "5": {
            "name": "keyword.control.default.cpp"
          }
        },
        "end": ":|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.separator.colon.case.default.cpp"
          }
        },
        "name": "meta.conditional.case.cpp",
        "patterns": [
          {
            "include": "#evaluation_context"
          }
        ]
      },
      "destructor_inline": {
        "begin": "^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:__cdecl|__clrcall|__stdcall|__fastcall|__thiscall|__vectorcall)?)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:(?:(?:constexpr)|(?:consteval)|(?:explicit)|(?:mutable)|(?:virtual)|(?:inline)|(?:friend))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*)(~(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)(?=\\())",
        "beginCaptures": {
          "0": {
            "name": "meta.head.function.definition.special.member.destructor.cpp"
          },
          "1": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "5": {
            "name": "storage.type.modifier.calling-convention.cpp"
          },
          "6": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "7": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "8": {
            "name": "comment.block.cpp"
          },
          "9": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "10": {
            "patterns": [
              {
                "include": "source.cpp#functional_specifiers_pre_parameters"
              }
            ]
          },
          "11": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "12": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "13": {
            "name": "comment.block.cpp"
          },
          "14": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "15": {
            "name": "entity.name.function.destructor.cpp entity.name.function.definition.special.member.destructor.cpp"
          }
        },
        "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.function.definition.special.member.destructor.cpp",
        "patterns": [
          {
            "begin": "\\G ?",
            "beginCaptures": {},
            "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.begin.bracket.curly.function.definition.special.member.destructor.cpp"
              }
            },
            "name": "meta.head.function.definition.special.member.destructor.cpp",
            "patterns": [
              {
                "include": "#ever_present_context"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.operator.assignment.cpp"
                  },
                  "2": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "3": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "4": {
                    "name": "comment.block.cpp"
                  },
                  "5": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  },
                  "6": {
                    "name": "keyword.other.default.function.cpp keyword.other.default.constructor.cpp keyword.other.default.destructor.cpp"
                  },
                  "7": {
                    "name": "keyword.other.delete.function.cpp keyword.other.delete.constructor.cpp keyword.other.delete.destructor.cpp"
                  }
                },
                "match": "(\\=)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(default)|(delete))"
              },
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.parameters.begin.bracket.round.special.member.destructor.cpp"
                  }
                },
                "contentName": "meta.function.definition.parameters.special.member.destructor",
                "end": "\\)|(?=(?<!\\\\)\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.parameters.end.bracket.round.special.member.destructor.cpp"
                  }
                },
                "patterns": []
              },
              {
                "include": "source.cpp#qualifiers_and_specifiers_post_parameters"
              },
              {
                "include": "$self"
              }
            ]
          },
          {
            "begin": "(?<=\\{|<%|\\?\\?<)",
            "beginCaptures": {},
            "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.end.bracket.curly.function.definition.special.member.destructor.cpp"
              }
            },
            "name": "meta.body.function.definition.special.member.destructor.cpp",
            "patterns": [
              {
                "include": "#function_body_context"
              }
            ]
          },
          {
            "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
            "beginCaptures": {},
            "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
            "endCaptures": {},
            "name": "meta.tail.function.definition.special.member.destructor.cpp",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          }
        ]
      },
      "destructor_root": {
        "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:__cdecl|__clrcall|__stdcall|__fastcall|__thiscall|__vectorcall)?)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<12>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)(((?>(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))::((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))~(?:\\14)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\())",
        "beginCaptures": {
          "0": {
            "name": "meta.head.function.definition.special.member.destructor.cpp"
          },
          "1": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "5": {
            "name": "storage.type.modifier.calling-convention.cpp"
          },
          "6": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "7": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "8": {
            "name": "comment.block.cpp"
          },
          "9": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "10": {
            "patterns": [
              {
                "match": "::",
                "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.destructor.cpp"
              },
              {
                "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                "name": "entity.name.scope-resolution.destructor.cpp"
              },
              {
                "include": "#template_call_range"
              }
            ]
          },
          "11": {
            "patterns": [
              {
                "include": "#template_call_range"
              }
            ]
          },
          "12": {},
          "13": {
            "patterns": [
              {
                "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?=:)",
                "name": "entity.name.type.destructor.cpp"
              },
              {
                "match": "(?<=:)~(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
                "name": "entity.name.function.definition.special.member.destructor.cpp"
              },
              {
                "match": "::",
                "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.destructor.cpp"
              }
            ]
          },
          "14": {},
          "15": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "16": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "17": {
            "name": "comment.block.cpp"
          },
          "18": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "19": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "20": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "21": {
            "name": "comment.block.cpp"
          },
          "22": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "23": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "24": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "25": {
            "name": "comment.block.cpp"
          },
          "26": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.function.definition.special.member.destructor.cpp",
        "patterns": [
          {
            "begin": "\\G ?",
            "beginCaptures": {},
            "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.begin.bracket.curly.function.definition.special.member.destructor.cpp"
              }
            },
            "name": "meta.head.function.definition.special.member.destructor.cpp",
            "patterns": [
              {
                "include": "#ever_present_context"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.operator.assignment.cpp"
                  },
                  "2": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "3": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "4": {
                    "name": "comment.block.cpp"
                  },
                  "5": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  },
                  "6": {
                    "name": "keyword.other.default.function.cpp keyword.other.default.constructor.cpp keyword.other.default.destructor.cpp"
                  },
                  "7": {
                    "name": "keyword.other.delete.function.cpp keyword.other.delete.constructor.cpp keyword.other.delete.destructor.cpp"
                  }
                },
                "match": "(\\=)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(default)|(delete))"
              },
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.parameters.begin.bracket.round.special.member.destructor.cpp"
                  }
                },
                "contentName": "meta.function.definition.parameters.special.member.destructor",
                "end": "\\)|(?=(?<!\\\\)\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.parameters.end.bracket.round.special.member.destructor.cpp"
                  }
                },
                "patterns": []
              },
              {
                "include": "source.cpp#qualifiers_and_specifiers_post_parameters"
              },
              {
                "include": "$self"
              }
            ]
          },
          {
            "begin": "(?<=\\{|<%|\\?\\?<)",
            "beginCaptures": {},
            "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.end.bracket.curly.function.definition.special.member.destructor.cpp"
              }
            },
            "name": "meta.body.function.definition.special.member.destructor.cpp",
            "patterns": [
              {
                "include": "#function_body_context"
              }
            ]
          },
          {
            "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
            "beginCaptures": {},
            "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
            "endCaptures": {},
            "name": "meta.tail.function.definition.special.member.destructor.cpp",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          }
        ]
      },
      "diagnostic": {
        "begin": "(^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(#)(?:\\s+)?((?:error|warning)))\\b(?:\\s+)?",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.directive.diagnostic.$7.cpp"
          },
          "2": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "name": "punctuation.definition.directive.cpp"
          },
          "7": {}
        },
        "end": "(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$))|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.preprocessor.diagnostic.$reference(directive).cpp",
        "patterns": [
          {
            "include": "#comments"
          },
          {
            "begin": "\"",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.cpp"
              }
            },
            "end": "(?:(\")|(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$)))|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.string.end.cpp"
              }
            },
            "name": "string.quoted.double.cpp",
            "patterns": [
              {
                "include": "source.cpp#line_continuation_character"
              }
            ]
          },
          {
            "begin": "'",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.cpp"
              }
            },
            "end": "(?:(')|(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$)))|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.string.end.cpp"
              }
            },
            "name": "string.quoted.single.cpp",
            "patterns": [
              {
                "include": "source.cpp#line_continuation_character"
              }
            ]
          },
          {
            "begin": "[^'\"]",
            "beginCaptures": {},
            "end": "(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$))|(?=(?<!\\\\)\n)",
            "endCaptures": {},
            "name": "string.unquoted.cpp",
            "patterns": [
              {
                "include": "source.cpp#line_continuation_character"
              },
              {
                "include": "#comments"
              }
            ]
          }
        ]
      },
      "enum_block": {
        "begin": "((?<!\\w)enum(?!\\w))(?:\\s+(class|struct))?(?:(?:\\s+|((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\))))|(?={))(?:\\s+)?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))?)(?:(?:\\s+)?(:)(?:\\s+)?(?:((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<12>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)((?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))\\s*+(((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<12>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)\\s*+)?(::))?(?:\\s+)?((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)))?",
        "beginCaptures": {
          "0": {
            "name": "meta.head.enum.cpp"
          },
          "1": {
            "name": "storage.type.enum.cpp"
          },
          "2": {
            "name": "storage.type.enum.enum-key.$2.cpp"
          },
          "3": {
            "patterns": [
              {
                "include": "#attributes_context"
              },
              {
                "include": "source.cpp#number_literal"
              }
            ]
          },
          "4": {
            "name": "entity.name.type.enum.cpp"
          },
          "5": {
            "name": "punctuation.separator.colon.type-specifier.cpp"
          },
          "6": {
            "patterns": [
              {
                "include": "source.cpp#scope_resolution_inner_generated"
              }
            ]
          },
          "7": {
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
          },
          "8": {
            "patterns": [
              {
                "include": "#template_call_range"
              }
            ]
          },
          "9": {},
          "10": {
            "name": "entity.name.scope-resolution.cpp"
          },
          "11": {
            "name": "meta.template.call.cpp",
            "patterns": [
              {
                "include": "#template_call_range"
              }
            ]
          },
          "12": {},
          "13": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "14": {
            "name": "comment.block.cpp"
          },
          "15": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "16": {
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
          },
          "17": {
            "name": "storage.type.integral.$17.cpp"
          }
        },
        "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.statement.cpp"
          },
          "2": {
            "name": "punctuation.terminator.statement.cpp"
          }
        },
        "name": "meta.block.enum.cpp",
        "patterns": [
          {
            "begin": "\\G ?",
            "beginCaptures": {},
            "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.begin.bracket.curly.enum.cpp"
              }
            },
            "name": "meta.head.enum.cpp",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          },
          {
            "begin": "(?<=\\{|<%|\\?\\?<)",
            "beginCaptures": {},
            "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.end.bracket.curly.enum.cpp"
              }
            },
            "name": "meta.body.enum.cpp",
            "patterns": [
              {
                "include": "#ever_present_context"
              },
              {
                "include": "source.cpp#enumerator_list"
              },
              {
                "include": "#comments"
              },
              {
                "include": "source.cpp#comma"
              },
              {
                "include": "source.cpp#semicolon"
              }
            ]
          },
          {
            "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
            "beginCaptures": {},
            "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
            "endCaptures": {},
            "name": "meta.tail.enum.cpp",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          }
        ]
      },
      "evaluation_context": {
        "patterns": [
          {
            "include": "#ever_present_context"
          },
          {
            "include": "#string_context"
          },
          {
            "include": "source.cpp#number_literal"
          },
          {
            "include": "#method_access"
          },
          {
            "include": "source.cpp#member_access"
          },
          {
            "include": "source.cpp#predefined_macros"
          },
          {
            "include": "#operators"
          },
          {
            "include": "source.cpp#memory_operators"
          },
          {
            "include": "source.cpp#wordlike_operators"
          },
          {
            "include": "source.cpp#type_casting_operators"
          },
          {
            "include": "source.cpp#control_flow_keywords"
          },
          {
            "include": "source.cpp#exception_keywords"
          },
          {
            "include": "source.cpp#the_this_keyword"
          },
          {
            "include": "source.cpp#language_constants"
          },
          {
            "include": "#builtin_storage_type_initilizer"
          },
          {
            "include": "source.cpp#qualifiers_and_specifiers_post_parameters"
          },
          {
            "include": "source.cpp#functional_specifiers_pre_parameters"
          },
          {
            "include": "#storage_types"
          },
          {
            "include": "#lambdas"
          },
          {
            "include": "#attributes_context"
          },
          {
            "include": "#parentheses"
          },
          {
            "include": "#function_call"
          },
          {
            "include": "source.cpp#scope_resolution_inner_generated"
          },
          {
            "include": "#square_brackets"
          },
          {
            "include": "source.cpp#semicolon"
          },
          {
            "include": "source.cpp#comma"
          }
        ]
      },
      "ever_present_context": {
        "patterns": [
          {
            "include": "source.cpp#pragma_mark"
          },
          {
            "include": "#pragma"
          },
          {
            "include": "source.cpp#include"
          },
          {
            "include": "#line"
          },
          {
            "include": "#diagnostic"
          },
          {
            "include": "source.cpp#undef"
          },
          {
            "include": "#preprocessor_conditional_range"
          },
          {
            "include": "source.cpp#single_line_macro"
          },
          {
            "include": "#macro"
          },
          {
            "include": "source.cpp#preprocessor_conditional_standalone"
          },
          {
            "include": "source.cpp#macro_argument"
          },
          {
            "include": "#comments"
          },
          {
            "include": "source.cpp#line_continuation_character"
          }
        ]
      },
      "extern_block": {
        "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(extern)(?=\\s*\\\")",
        "beginCaptures": {
          "0": {
            "name": "meta.head.extern.cpp"
          },
          "1": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "5": {
            "name": "storage.type.extern.cpp"
          }
        },
        "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.statement.cpp"
          },
          "2": {
            "name": "punctuation.terminator.statement.cpp"
          }
        },
        "name": "meta.block.extern.cpp",
        "patterns": [
          {
            "begin": "\\G ?",
            "beginCaptures": {},
            "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.begin.bracket.curly.extern.cpp"
              }
            },
            "name": "meta.head.extern.cpp",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          },
          {
            "begin": "(?<=\\{|<%|\\?\\?<)",
            "beginCaptures": {},
            "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.end.bracket.curly.extern.cpp"
              }
            },
            "name": "meta.body.extern.cpp",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          },
          {
            "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
            "beginCaptures": {},
            "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
            "endCaptures": {},
            "name": "meta.tail.extern.cpp",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          },
          {
            "include": "$self"
          }
        ]
      },
      "function_body_context": {
        "patterns": [
          {
            "include": "#ever_present_context"
          },
          {
            "include": "#using_namespace"
          },
          {
            "include": "source.cpp#type_alias"
          },
          {
            "include": "source.cpp#using_name"
          },
          {
            "include": "source.cpp#namespace_alias"
          },
          {
            "include": "#typedef_class"
          },
          {
            "include": "#typedef_struct"
          },
          {
            "include": "#typedef_union"
          },
          {
            "include": "source.cpp#misc_keywords"
          },
          {
            "include": "source.cpp#standard_declares"
          },
          {
            "include": "#class_block"
          },
          {
            "include": "#struct_block"
          },
          {
            "include": "#union_block"
          },
          {
            "include": "#enum_block"
          },
          {
            "include": "source.cpp#access_control_keywords"
          },
          {
            "include": "#block"
          },
          {
            "include": "#static_assert"
          },
          {
            "include": "#assembly"
          },
          {
            "include": "#function_pointer"
          },
          {
            "include": "#switch_statement"
          },
          {
            "include": "source.cpp#goto_statement"
          },
          {
            "include": "#evaluation_context"
          },
          {
            "include": "source.cpp#label"
          }
        ]
      },
      "function_call": {
        "begin": "((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<11>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)\\b(?<!\\Wreinterpret_cast|^reinterpret_cast|\\Watomic_noexcept|^atomic_noexcept|\\Wuint_least16_t|^uint_least16_t|\\Wuint_least32_t|^uint_least32_t|\\Wuint_least64_t|^uint_least64_t|\\Watomic_cancel|^atomic_cancel|\\Watomic_commit|^atomic_commit|\\Wuint_least8_t|^uint_least8_t|\\Wuint_fast16_t|^uint_fast16_t|\\Wuint_fast32_t|^uint_fast32_t|\\Wint_least16_t|^int_least16_t|\\Wint_least32_t|^int_least32_t|\\Wint_least64_t|^int_least64_t|\\Wuint_fast64_t|^uint_fast64_t|\\Wthread_local|^thread_local|\\Wint_fast16_t|^int_fast16_t|\\Wint_fast32_t|^int_fast32_t|\\Wint_fast64_t|^int_fast64_t|\\Wsynchronized|^synchronized|\\Wuint_fast8_t|^uint_fast8_t|\\Wdynamic_cast|^dynamic_cast|\\Wint_least8_t|^int_least8_t|\\Wint_fast8_t|^int_fast8_t|\\Wstatic_cast|^static_cast|\\Wsuseconds_t|^suseconds_t|\\Wconst_cast|^const_cast|\\Wuseconds_t|^useconds_t|\\Wconstinit|^constinit|\\Wco_return|^co_return|\\Wuintmax_t|^uintmax_t|\\Wuintmax_t|^uintmax_t|\\Wuintmax_t|^uintmax_t|\\Wconstexpr|^constexpr|\\Wconsteval|^consteval|\\Wconstexpr|^constexpr|\\Wconstexpr|^constexpr|\\Wconsteval|^consteval|\\Wprotected|^protected|\\Wnamespace|^namespace|\\Wblksize_t|^blksize_t|\\Wco_return|^co_return|\\Win_addr_t|^in_addr_t|\\Win_port_t|^in_port_t|\\Wuintptr_t|^uintptr_t|\\Wtemplate|^template|\\Wnoexcept|^noexcept|\\Wnoexcept|^noexcept|\\Wcontinue|^continue|\\Wco_await|^co_await|\\Wco_yield|^co_yield|\\Wunsigned|^unsigned|\\Wu_quad_t|^u_quad_t|\\Wblkcnt_t|^blkcnt_t|\\Wuint16_t|^uint16_t|\\Wuint32_t|^uint32_t|\\Wuint64_t|^uint64_t|\\Wintptr_t|^intptr_t|\\Wintmax_t|^intmax_t|\\Wintmax_t|^intmax_t|\\Wvolatile|^volatile|\\Wregister|^register|\\Wrestrict|^restrict|\\Wexplicit|^explicit|\\Wvolatile|^volatile|\\Wnoexcept|^noexcept|\\Woperator|^operator|\\Wdecltype|^decltype|\\Wtypename|^typename|\\Wrequires|^requires|\\Wco_await|^co_await|\\Wco_yield|^co_yield|\\Wreflexpr|^reflexpr|\\Wswblk_t|^swblk_t|\\Wvirtual|^virtual|\\Wssize_t|^ssize_t|\\Wconcept|^concept|\\Wmutable|^mutable|\\Wfixpt_t|^fixpt_t|\\Wint16_t|^int16_t|\\Wint32_t|^int32_t|\\Wint64_t|^int64_t|\\Wuint8_t|^uint8_t|\\Wtypedef|^typedef|\\Wdaddr_t|^daddr_t|\\Wcaddr_t|^caddr_t|\\Wqaddr_t|^qaddr_t|\\Wdefault|^default|\\Wnlink_t|^nlink_t|\\Wsegsz_t|^segsz_t|\\Wu_short|^u_short|\\Wwchar_t|^wchar_t|\\Wprivate|^private|\\W__asm__|^__asm__|\\Walignas|^alignas|\\Walignof|^alignof|\\Wmutable|^mutable|\\Wnullptr|^nullptr|\\Wclock_t|^clock_t|\\Wmode_t|^mode_t|\\Wpublic|^public|\\Wsize_t|^size_t|\\Wdouble|^double|\\Wquad_t|^quad_t|\\Wstatic|^static|\\Wtime_t|^time_t|\\Wmodule|^module|\\Wimport|^import|\\Wexport|^export|\\Wextern|^extern|\\Winline|^inline|\\Wxor_eq|^xor_eq|\\Wand_eq|^and_eq|\\Wreturn|^return|\\Wfriend|^friend|\\Wnot_eq|^not_eq|\\Wsigned|^signed|\\Wstruct|^struct|\\Wint8_t|^int8_t|\\Wushort|^ushort|\\Wswitch|^switch|\\Wu_long|^u_long|\\Wtypeid|^typeid|\\Wu_char|^u_char|\\Wsizeof|^sizeof|\\Wbitand|^bitand|\\Wdelete|^delete|\\Wino_t|^ino_t|\\Wkey_t|^key_t|\\Wpid_t|^pid_t|\\Woff_t|^off_t|\\Wuid_t|^uid_t|\\Wshort|^short|\\Wbreak|^break|\\Wcatch|^catch|\\Wcompl|^compl|\\Wwhile|^while|\\Wfalse|^false|\\Wclass|^class|\\Wunion|^union|\\Wconst|^const|\\Wor_eq|^or_eq|\\Wconst|^const|\\Wthrow|^throw|\\Wbitor|^bitor|\\Wu_int|^u_int|\\Wusing|^using|\\Wdiv_t|^div_t|\\Wdev_t|^dev_t|\\Wgid_t|^gid_t|\\Wfloat|^float|\\Wlong|^long|\\Wgoto|^goto|\\Wuint|^uint|\\Wid_t|^id_t|\\Wcase|^case|\\Wauto|^auto|\\Wvoid|^void|\\Wenum|^enum|\\Wtrue|^true|\\Wchar|^char|\\Wid_t|^id_t|\\WNULL|^NULL|\\Wthis|^this|\\Wbool|^bool|\\Welse|^else|\\Wfor|^for|\\Wnew|^new|\\Wnot|^not|\\Wxor|^xor|\\Wand|^and|\\Wasm|^asm|\\Wint|^int|\\Wtry|^try|\\Wdo|^do|\\Wif|^if|\\Wor|^or)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<11>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)\\s*+)?(\\()",
        "beginCaptures": {
          "1": {
            "patterns": [
              {
                "include": "source.cpp#scope_resolution_function_call_inner_generated"
              }
            ]
          },
          "2": {
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.function.call.cpp"
          },
          "3": {
            "patterns": [
              {
                "include": "#template_call_range"
              }
            ]
          },
          "4": {},
          "5": {
            "name": "entity.name.function.call.cpp"
          },
          "6": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "7": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "8": {
            "name": "comment.block.cpp"
          },
          "9": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "10": {
            "name": "meta.template.call.cpp",
            "patterns": [
              {
                "include": "#template_call_range"
              }
            ]
          },
          "11": {},
          "12": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "13": {
            "name": "comment.block.cpp"
          },
          "14": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "15": {
            "name": "punctuation.section.arguments.begin.bracket.round.function.call.cpp"
          }
        },
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.function.call.cpp"
          }
        },
        "patterns": [
          {
            "include": "#evaluation_context"
          }
        ]
      },
      "function_definition": {
        "begin": "(?:(?:^|\\G|(?<=;|\\}))|(?<=>|\\*\\/))\\s*+(?:((?<!\\w)template(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:((?<!\\w)(?:(?:(?:constexpr)|(?:consteval)|(?:explicit)|(?:mutable)|(?:virtual)|(?:inline)|(?:friend))|(?:(?:thread_local)|(?:volatile)|(?:register)|(?:restrict)|(?:static)|(?:extern)|(?:const)))(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*)(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<52>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<52>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:__cdecl|__clrcall|__stdcall|__fastcall|__thiscall|__vectorcall)?)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<52>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)\\b(?<!\\Wreinterpret_cast|^reinterpret_cast|\\Watomic_noexcept|^atomic_noexcept|\\Wuint_least16_t|^uint_least16_t|\\Wuint_least32_t|^uint_least32_t|\\Wuint_least64_t|^uint_least64_t|\\Watomic_cancel|^atomic_cancel|\\Watomic_commit|^atomic_commit|\\Wuint_least8_t|^uint_least8_t|\\Wuint_fast16_t|^uint_fast16_t|\\Wuint_fast32_t|^uint_fast32_t|\\Wint_least16_t|^int_least16_t|\\Wint_least32_t|^int_least32_t|\\Wint_least64_t|^int_least64_t|\\Wuint_fast64_t|^uint_fast64_t|\\Wthread_local|^thread_local|\\Wint_fast16_t|^int_fast16_t|\\Wint_fast32_t|^int_fast32_t|\\Wint_fast64_t|^int_fast64_t|\\Wsynchronized|^synchronized|\\Wuint_fast8_t|^uint_fast8_t|\\Wdynamic_cast|^dynamic_cast|\\Wint_least8_t|^int_least8_t|\\Wint_fast8_t|^int_fast8_t|\\Wstatic_cast|^static_cast|\\Wsuseconds_t|^suseconds_t|\\Wconst_cast|^const_cast|\\Wuseconds_t|^useconds_t|\\Wconstinit|^constinit|\\Wco_return|^co_return|\\Wuintmax_t|^uintmax_t|\\Wuintmax_t|^uintmax_t|\\Wuintmax_t|^uintmax_t|\\Wconstexpr|^constexpr|\\Wconsteval|^consteval|\\Wconstexpr|^constexpr|\\Wconstexpr|^constexpr|\\Wconsteval|^consteval|\\Wprotected|^protected|\\Wnamespace|^namespace|\\Wblksize_t|^blksize_t|\\Wco_return|^co_return|\\Win_addr_t|^in_addr_t|\\Win_port_t|^in_port_t|\\Wuintptr_t|^uintptr_t|\\Wtemplate|^template|\\Wnoexcept|^noexcept|\\Wnoexcept|^noexcept|\\Wcontinue|^continue|\\Wco_await|^co_await|\\Wco_yield|^co_yield|\\Wunsigned|^unsigned|\\Wu_quad_t|^u_quad_t|\\Wblkcnt_t|^blkcnt_t|\\Wuint16_t|^uint16_t|\\Wuint32_t|^uint32_t|\\Wuint64_t|^uint64_t|\\Wintptr_t|^intptr_t|\\Wintmax_t|^intmax_t|\\Wintmax_t|^intmax_t|\\Wvolatile|^volatile|\\Wregister|^register|\\Wrestrict|^restrict|\\Wexplicit|^explicit|\\Wvolatile|^volatile|\\Wnoexcept|^noexcept|\\Woperator|^operator|\\Wdecltype|^decltype|\\Wtypename|^typename|\\Wrequires|^requires|\\Wco_await|^co_await|\\Wco_yield|^co_yield|\\Wreflexpr|^reflexpr|\\Wswblk_t|^swblk_t|\\Wvirtual|^virtual|\\Wssize_t|^ssize_t|\\Wconcept|^concept|\\Wmutable|^mutable|\\Wfixpt_t|^fixpt_t|\\Wint16_t|^int16_t|\\Wint32_t|^int32_t|\\Wint64_t|^int64_t|\\Wuint8_t|^uint8_t|\\Wtypedef|^typedef|\\Wdaddr_t|^daddr_t|\\Wcaddr_t|^caddr_t|\\Wqaddr_t|^qaddr_t|\\Wdefault|^default|\\Wnlink_t|^nlink_t|\\Wsegsz_t|^segsz_t|\\Wu_short|^u_short|\\Wwchar_t|^wchar_t|\\Wprivate|^private|\\W__asm__|^__asm__|\\Walignas|^alignas|\\Walignof|^alignof|\\Wmutable|^mutable|\\Wnullptr|^nullptr|\\Wclock_t|^clock_t|\\Wmode_t|^mode_t|\\Wpublic|^public|\\Wsize_t|^size_t|\\Wdouble|^double|\\Wquad_t|^quad_t|\\Wstatic|^static|\\Wtime_t|^time_t|\\Wmodule|^module|\\Wimport|^import|\\Wexport|^export|\\Wextern|^extern|\\Winline|^inline|\\Wxor_eq|^xor_eq|\\Wand_eq|^and_eq|\\Wreturn|^return|\\Wfriend|^friend|\\Wnot_eq|^not_eq|\\Wsigned|^signed|\\Wstruct|^struct|\\Wint8_t|^int8_t|\\Wushort|^ushort|\\Wswitch|^switch|\\Wu_long|^u_long|\\Wtypeid|^typeid|\\Wu_char|^u_char|\\Wsizeof|^sizeof|\\Wbitand|^bitand|\\Wdelete|^delete|\\Wino_t|^ino_t|\\Wkey_t|^key_t|\\Wpid_t|^pid_t|\\Woff_t|^off_t|\\Wuid_t|^uid_t|\\Wshort|^short|\\Wbreak|^break|\\Wcatch|^catch|\\Wcompl|^compl|\\Wwhile|^while|\\Wfalse|^false|\\Wclass|^class|\\Wunion|^union|\\Wconst|^const|\\Wor_eq|^or_eq|\\Wconst|^const|\\Wthrow|^throw|\\Wbitor|^bitor|\\Wu_int|^u_int|\\Wusing|^using|\\Wdiv_t|^div_t|\\Wdev_t|^dev_t|\\Wgid_t|^gid_t|\\Wfloat|^float|\\Wlong|^long|\\Wgoto|^goto|\\Wuint|^uint|\\Wid_t|^id_t|\\Wcase|^case|\\Wauto|^auto|\\Wvoid|^void|\\Wenum|^enum|\\Wtrue|^true|\\Wchar|^char|\\Wid_t|^id_t|\\WNULL|^NULL|\\Wthis|^this|\\Wbool|^bool|\\Welse|^else|\\Wfor|^for|\\Wnew|^new|\\Wnot|^not|\\Wxor|^xor|\\Wand|^and|\\Wasm|^asm|\\Wint|^int|\\Wtry|^try|\\Wdo|^do|\\Wif|^if|\\Wor|^or)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\()",
        "beginCaptures": {
          "0": {
            "name": "meta.head.function.definition.cpp"
          },
          "1": {
            "name": "storage.type.template.cpp"
          },
          "2": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "patterns": [
              {
                "include": "#attributes_context"
              },
              {
                "include": "source.cpp#number_literal"
              }
            ]
          },
          "7": {
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "storage.modifier.$1.cpp"
                  },
                  "2": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "3": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "4": {
                    "name": "comment.block.cpp"
                  },
                  "5": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  }
                },
                "match": "((?<!\\w)(?:(?:(?:constexpr)|(?:consteval)|(?:explicit)|(?:mutable)|(?:virtual)|(?:inline)|(?:friend))|(?:(?:thread_local)|(?:volatile)|(?:register)|(?:restrict)|(?:static)|(?:extern)|(?:const)))(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))"
              }
            ]
          },
          "8": {
            "name": "storage.modifier.$8.cpp"
          },
          "9": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "10": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "11": {
            "name": "comment.block.cpp"
          },
          "12": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "13": {
            "name": "meta.qualified_type.cpp",
            "patterns": [
              {
                "match": "::",
                "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
              },
              {
                "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
                "name": "storage.type.$0.cpp"
              },
              {
                "include": "#attributes_context"
              },
              {
                "include": "#storage_types"
              },
              {
                "include": "source.cpp#number_literal"
              },
              {
                "include": "#string_context"
              },
              {
                "include": "source.cpp#comma"
              },
              {
                "include": "source.cpp#scope_resolution_inner_generated"
              },
              {
                "begin": "<",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
                  }
                },
                "end": ">|(?=(?<!\\\\)\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.angle-brackets.end.template.call.cpp"
                  }
                },
                "name": "meta.template.call.cpp",
                "patterns": [
                  {
                    "include": "#template_call_context"
                  }
                ]
              },
              {
                "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
                "name": "entity.name.type.cpp"
              }
            ]
          },
          "14": {
            "patterns": [
              {
                "include": "#attributes_context"
              },
              {
                "include": "source.cpp#number_literal"
              }
            ]
          },
          "15": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "16": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "17": {
            "name": "comment.block.cpp"
          },
          "18": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "19": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "20": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "21": {
            "name": "comment.block.cpp"
          },
          "22": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "23": {
            "patterns": [
              {
                "match": "::",
                "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
              },
              {
                "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                "name": "entity.name.scope-resolution.type.cpp"
              },
              {
                "include": "#template_call_range"
              }
            ]
          },
          "24": {
            "patterns": [
              {
                "include": "#template_call_range"
              }
            ]
          },
          "25": {},
          "26": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "27": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "28": {
            "name": "comment.block.cpp"
          },
          "29": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "30": {},
          "31": {
            "patterns": [
              {
                "match": "\\*",
                "name": "storage.modifier.pointer.cpp"
              },
              {
                "captures": {
                  "1": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "2": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "3": {
                    "name": "comment.block.cpp"
                  },
                  "4": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  }
                },
                "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
                "name": "invalid.illegal.reference-type.cpp"
              },
              {
                "match": "\\&",
                "name": "storage.modifier.reference.cpp"
              }
            ]
          },
          "32": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "33": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "34": {
            "name": "comment.block.cpp"
          },
          "35": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "36": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "37": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "38": {
            "name": "comment.block.cpp"
          },
          "39": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "40": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "41": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "42": {
            "name": "comment.block.cpp"
          },
          "43": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "44": {
            "name": "storage.type.modifier.calling-convention.cpp"
          },
          "45": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "46": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "47": {
            "name": "comment.block.cpp"
          },
          "48": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "49": {
            "patterns": [
              {
                "include": "source.cpp#scope_resolution_function_definition_inner_generated"
              }
            ]
          },
          "50": {
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.function.definition.cpp"
          },
          "51": {
            "patterns": [
              {
                "include": "#template_call_range"
              }
            ]
          },
          "52": {},
          "53": {
            "name": "entity.name.function.definition.cpp"
          },
          "54": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "55": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "56": {
            "name": "comment.block.cpp"
          },
          "57": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.function.definition.cpp",
        "patterns": [
          {
            "begin": "\\G ?",
            "beginCaptures": {},
            "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.begin.bracket.curly.function.definition.cpp"
              }
            },
            "name": "meta.head.function.definition.cpp",
            "patterns": [
              {
                "include": "#ever_present_context"
              },
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.parameters.begin.bracket.round.cpp"
                  }
                },
                "contentName": "meta.function.definition.parameters",
                "end": "\\)|(?=(?<!\\\\)\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.parameters.end.bracket.round.cpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#ever_present_context"
                  },
                  {
                    "include": "#parameter_or_maybe_value"
                  },
                  {
                    "include": "source.cpp#comma"
                  },
                  {
                    "include": "#evaluation_context"
                  }
                ]
              },
              {
                "captures": {
                  "1": {
                    "name": "punctuation.definition.function.return-type.cpp"
                  },
                  "2": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "3": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "4": {
                    "name": "comment.block.cpp"
                  },
                  "5": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  },
                  "6": {
                    "name": "meta.qualified_type.cpp",
                    "patterns": [
                      {
                        "match": "::",
                        "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
                      },
                      {
                        "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
                        "name": "storage.type.$0.cpp"
                      },
                      {
                        "include": "#attributes_context"
                      },
                      {
                        "include": "#storage_types"
                      },
                      {
                        "include": "source.cpp#number_literal"
                      },
                      {
                        "include": "#string_context"
                      },
                      {
                        "include": "source.cpp#comma"
                      },
                      {
                        "include": "source.cpp#scope_resolution_inner_generated"
                      },
                      {
                        "begin": "<",
                        "beginCaptures": {
                          "0": {
                            "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
                          }
                        },
                        "end": ">|(?=(?<!\\\\)\n)",
                        "endCaptures": {
                          "0": {
                            "name": "punctuation.section.angle-brackets.end.template.call.cpp"
                          }
                        },
                        "name": "meta.template.call.cpp",
                        "patterns": [
                          {
                            "include": "#template_call_context"
                          }
                        ]
                      },
                      {
                        "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
                        "name": "entity.name.type.cpp"
                      }
                    ]
                  },
                  "7": {
                    "patterns": [
                      {
                        "include": "#attributes_context"
                      },
                      {
                        "include": "source.cpp#number_literal"
                      }
                    ]
                  },
                  "8": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "9": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "10": {
                    "name": "comment.block.cpp"
                  },
                  "11": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  },
                  "12": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "13": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "14": {
                    "name": "comment.block.cpp"
                  },
                  "15": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  },
                  "16": {
                    "patterns": [
                      {
                        "match": "::",
                        "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
                      },
                      {
                        "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                        "name": "entity.name.scope-resolution.type.cpp"
                      },
                      {
                        "include": "#template_call_range"
                      }
                    ]
                  },
                  "17": {
                    "patterns": [
                      {
                        "include": "#template_call_range"
                      }
                    ]
                  },
                  "18": {},
                  "19": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "20": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "21": {
                    "name": "comment.block.cpp"
                  },
                  "22": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  },
                  "23": {}
                },
                "match": "(?<=^|\\))(?:\\s+)?(->)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<23>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<23>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))"
              },
              {
                "include": "$self"
              }
            ]
          },
          {
            "begin": "(?<=\\{|<%|\\?\\?<)",
            "beginCaptures": {},
            "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.end.bracket.curly.function.definition.cpp"
              }
            },
            "name": "meta.body.function.definition.cpp",
            "patterns": [
              {
                "include": "#function_body_context"
              }
            ]
          },
          {
            "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
            "beginCaptures": {},
            "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
            "endCaptures": {},
            "name": "meta.tail.function.definition.cpp",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          }
        ]
      },
      "function_parameter_context": {
        "patterns": [
          {
            "include": "#ever_present_context"
          },
          {
            "include": "#parameter"
          },
          {
            "include": "source.cpp#comma"
          }
        ]
      },
      "function_pointer": {
        "begin": "(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()(\\*)(?:\\s+)?((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)?)(?:\\s+)?(?:(\\[)(\\w*)(\\])(?:\\s+)?)*(\\))(?:\\s+)?(\\()",
        "beginCaptures": {
          "1": {
            "name": "meta.qualified_type.cpp",
            "patterns": [
              {
                "match": "::",
                "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
              },
              {
                "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
                "name": "storage.type.$0.cpp"
              },
              {
                "include": "#attributes_context"
              },
              {
                "include": "#storage_types"
              },
              {
                "include": "source.cpp#number_literal"
              },
              {
                "include": "#string_context"
              },
              {
                "include": "source.cpp#comma"
              },
              {
                "include": "source.cpp#scope_resolution_inner_generated"
              },
              {
                "begin": "<",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
                  }
                },
                "end": ">|(?=(?<!\\\\)\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.angle-brackets.end.template.call.cpp"
                  }
                },
                "name": "meta.template.call.cpp",
                "patterns": [
                  {
                    "include": "#template_call_context"
                  }
                ]
              },
              {
                "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
                "name": "entity.name.type.cpp"
              }
            ]
          },
          "2": {
            "patterns": [
              {
                "include": "#attributes_context"
              },
              {
                "include": "source.cpp#number_literal"
              }
            ]
          },
          "3": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "5": {
            "name": "comment.block.cpp"
          },
          "6": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "7": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "9": {
            "name": "comment.block.cpp"
          },
          "10": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "11": {
            "patterns": [
              {
                "match": "::",
                "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
              },
              {
                "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                "name": "entity.name.scope-resolution.type.cpp"
              },
              {
                "include": "#template_call_range"
              }
            ]
          },
          "12": {
            "patterns": [
              {
                "include": "#template_call_range"
              }
            ]
          },
          "13": {},
          "14": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "15": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "16": {
            "name": "comment.block.cpp"
          },
          "17": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "18": {},
          "19": {
            "patterns": [
              {
                "match": "\\*",
                "name": "storage.modifier.pointer.cpp"
              },
              {
                "captures": {
                  "1": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "2": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "3": {
                    "name": "comment.block.cpp"
                  },
                  "4": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  }
                },
                "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
                "name": "invalid.illegal.reference-type.cpp"
              },
              {
                "match": "\\&",
                "name": "storage.modifier.reference.cpp"
              }
            ]
          },
          "20": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "21": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "22": {
            "name": "comment.block.cpp"
          },
          "23": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "24": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "25": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "26": {
            "name": "comment.block.cpp"
          },
          "27": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "28": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "29": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "30": {
            "name": "comment.block.cpp"
          },
          "31": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "32": {
            "name": "punctuation.section.parens.begin.bracket.round.function.pointer.cpp"
          },
          "33": {
            "name": "punctuation.definition.function.pointer.dereference.cpp"
          },
          "34": {
            "name": "variable.other.definition.pointer.function.cpp"
          },
          "35": {
            "name": "punctuation.definition.begin.bracket.square.cpp"
          },
          "36": {
            "patterns": [
              {
                "include": "#evaluation_context"
              }
            ]
          },
          "37": {
            "name": "punctuation.definition.end.bracket.square.cpp"
          },
          "38": {
            "name": "punctuation.section.parens.end.bracket.round.function.pointer.cpp"
          },
          "39": {
            "name": "punctuation.section.parameters.begin.bracket.round.function.pointer.cpp"
          }
        },
        "end": "(\\))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=[{=,);>]|\\n)(?!\\()|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "1": {
            "name": "punctuation.section.parameters.end.bracket.round.function.pointer.cpp"
          },
          "2": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "patterns": [
          {
            "include": "#function_parameter_context"
          }
        ]
      },
      "function_pointer_parameter": {
        "begin": "(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()(\\*)(?:\\s+)?((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)?)(?:\\s+)?(?:(\\[)(\\w*)(\\])(?:\\s+)?)*(\\))(?:\\s+)?(\\()",
        "beginCaptures": {
          "1": {
            "name": "meta.qualified_type.cpp",
            "patterns": [
              {
                "match": "::",
                "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
              },
              {
                "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
                "name": "storage.type.$0.cpp"
              },
              {
                "include": "#attributes_context"
              },
              {
                "include": "#storage_types"
              },
              {
                "include": "source.cpp#number_literal"
              },
              {
                "include": "#string_context"
              },
              {
                "include": "source.cpp#comma"
              },
              {
                "include": "source.cpp#scope_resolution_inner_generated"
              },
              {
                "begin": "<",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
                  }
                },
                "end": ">|(?=(?<!\\\\)\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.angle-brackets.end.template.call.cpp"
                  }
                },
                "name": "meta.template.call.cpp",
                "patterns": [
                  {
                    "include": "#template_call_context"
                  }
                ]
              },
              {
                "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
                "name": "entity.name.type.cpp"
              }
            ]
          },
          "2": {
            "patterns": [
              {
                "include": "#attributes_context"
              },
              {
                "include": "source.cpp#number_literal"
              }
            ]
          },
          "3": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "5": {
            "name": "comment.block.cpp"
          },
          "6": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "7": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "9": {
            "name": "comment.block.cpp"
          },
          "10": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "11": {
            "patterns": [
              {
                "match": "::",
                "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
              },
              {
                "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                "name": "entity.name.scope-resolution.type.cpp"
              },
              {
                "include": "#template_call_range"
              }
            ]
          },
          "12": {
            "patterns": [
              {
                "include": "#template_call_range"
              }
            ]
          },
          "13": {},
          "14": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "15": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "16": {
            "name": "comment.block.cpp"
          },
          "17": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "18": {},
          "19": {
            "patterns": [
              {
                "match": "\\*",
                "name": "storage.modifier.pointer.cpp"
              },
              {
                "captures": {
                  "1": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "2": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "3": {
                    "name": "comment.block.cpp"
                  },
                  "4": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  }
                },
                "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
                "name": "invalid.illegal.reference-type.cpp"
              },
              {
                "match": "\\&",
                "name": "storage.modifier.reference.cpp"
              }
            ]
          },
          "20": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "21": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "22": {
            "name": "comment.block.cpp"
          },
          "23": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "24": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "25": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "26": {
            "name": "comment.block.cpp"
          },
          "27": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "28": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "29": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "30": {
            "name": "comment.block.cpp"
          },
          "31": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "32": {
            "name": "punctuation.section.parens.begin.bracket.round.function.pointer.cpp"
          },
          "33": {
            "name": "punctuation.definition.function.pointer.dereference.cpp"
          },
          "34": {
            "name": "variable.parameter.pointer.function.cpp"
          },
          "35": {
            "name": "punctuation.definition.begin.bracket.square.cpp"
          },
          "36": {
            "patterns": [
              {
                "include": "#evaluation_context"
              }
            ]
          },
          "37": {
            "name": "punctuation.definition.end.bracket.square.cpp"
          },
          "38": {
            "name": "punctuation.section.parens.end.bracket.round.function.pointer.cpp"
          },
          "39": {
            "name": "punctuation.section.parameters.begin.bracket.round.function.pointer.cpp"
          }
        },
        "end": "(\\))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=[{=,);>]|\\n)(?!\\()|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "1": {
            "name": "punctuation.section.parameters.end.bracket.round.function.pointer.cpp"
          },
          "2": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "patterns": [
          {
            "include": "#function_parameter_context"
          }
        ]
      },
      "gcc_attributes": {
        "begin": "__attribute(?:__)?\\s*\\(\\s*\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.attribute.begin.cpp"
          }
        },
        "end": "\\)\\s*\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.attribute.end.cpp"
          }
        },
        "name": "support.other.attribute.cpp",
        "patterns": [
          {
            "include": "#attributes_context"
          },
          {
            "begin": "\\(",
            "beginCaptures": {},
            "end": "\\)|(?=(?<!\\\\)\n)",
            "endCaptures": {},
            "patterns": [
              {
                "include": "#attributes_context"
              },
              {
                "include": "#string_context"
              },
              {
                "include": "#ever_present_context"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "keyword.other.using.directive.cpp"
              },
              "2": {
                "name": "entity.name.namespace.cpp"
              }
            },
            "match": "(using)\\s+((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))"
          },
          {
            "match": ",",
            "name": "punctuation.separator.attribute.cpp"
          },
          {
            "match": ":",
            "name": "punctuation.accessor.attribute.cpp"
          },
          {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)(?=::)",
            "name": "entity.name.namespace.cpp"
          },
          {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.other.attribute.$0.cpp"
          },
          {
            "include": "source.cpp#number_literal"
          },
          {
            "include": "#ever_present_context"
          }
        ]
      },
      "inheritance_context": {
        "patterns": [
          {
            "include": "#ever_present_context"
          },
          {
            "match": ",",
            "name": "punctuation.separator.delimiter.comma.inheritance.cpp"
          },
          {
            "match": "(?<!\\w)(?:(?:protected)|(?:private)|(?:public))(?!\\w)",
            "name": "storage.type.modifier.access.$0.cpp"
          },
          {
            "match": "(?<!\\w)virtual(?!\\w)",
            "name": "storage.type.modifier.virtual.cpp"
          },
          {
            "captures": {
              "1": {
                "name": "meta.qualified_type.cpp",
                "patterns": [
                  {
                    "match": "::",
                    "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
                  },
                  {
                    "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
                    "name": "storage.type.$0.cpp"
                  },
                  {
                    "include": "#attributes_context"
                  },
                  {
                    "include": "#storage_types"
                  },
                  {
                    "include": "source.cpp#number_literal"
                  },
                  {
                    "include": "#string_context"
                  },
                  {
                    "include": "source.cpp#comma"
                  },
                  {
                    "include": "source.cpp#scope_resolution_inner_generated"
                  },
                  {
                    "begin": "<",
                    "beginCaptures": {
                      "0": {
                        "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
                      }
                    },
                    "end": ">|(?=(?<!\\\\)\n)",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.section.angle-brackets.end.template.call.cpp"
                      }
                    },
                    "name": "meta.template.call.cpp",
                    "patterns": [
                      {
                        "include": "#template_call_context"
                      }
                    ]
                  },
                  {
                    "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
                    "name": "entity.name.type.cpp"
                  }
                ]
              },
              "2": {
                "patterns": [
                  {
                    "include": "#attributes_context"
                  },
                  {
                    "include": "source.cpp#number_literal"
                  }
                ]
              },
              "3": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "4": {
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "2": {
                        "name": "comment.block.cpp"
                      },
                      "3": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      }
                    },
                    "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
                  }
                ]
              },
              "5": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "6": {
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "2": {
                        "name": "comment.block.cpp"
                      },
                      "3": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      }
                    },
                    "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
                  }
                ]
              },
              "7": {
                "patterns": [
                  {
                    "match": "::",
                    "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
                  },
                  {
                    "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                    "name": "entity.name.scope-resolution.type.cpp"
                  },
                  {
                    "include": "#template_call_range"
                  }
                ]
              },
              "8": {
                "patterns": [
                  {
                    "include": "#template_call_range"
                  }
                ]
              },
              "9": {},
              "10": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "11": {
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "2": {
                        "name": "comment.block.cpp"
                      },
                      "3": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      }
                    },
                    "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
                  }
                ]
              },
              "12": {}
            },
            "match": "(?<=protected|virtual|private|public|,|:)(?:\\s+)?(?!(?:(?:(?:protected)|(?:private)|(?:public))|virtual))(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<12>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<12>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))"
          }
        ]
      },
      "lambdas": {
        "begin": "(?:(?<=[^\\s]|^)(?<![\\w\\]\\)\\[\\*&\">])|(?<=\\Wreturn|^return))(?:\\s+)?(\\[(?!\\[| *+\"| *+\\d))((?:[^\\[\\]]|((?<!\\[)\\[(?!\\[)(?:[^\\[\\]]*+\\g<3>?)++\\]))*+)(\\](?!((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))[\\[\\];=]))",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.capture.begin.lambda.cpp"
          },
          "2": {
            "name": "meta.lambda.capture.cpp",
            "patterns": [
              {
                "include": "source.cpp#the_this_keyword"
              },
              {
                "captures": {
                  "1": {
                    "name": "variable.parameter.capture.cpp"
                  },
                  "2": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "3": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "4": {
                    "name": "comment.block.cpp"
                  },
                  "5": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  },
                  "6": {
                    "name": "punctuation.separator.delimiter.comma.cpp"
                  },
                  "7": {
                    "name": "keyword.operator.assignment.cpp"
                  }
                },
                "match": "((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?=\\]|\\z|$)|(,))|(\\=))"
              },
              {
                "include": "#evaluation_context"
              }
            ]
          },
          "3": {},
          "4": {
            "name": "punctuation.definition.capture.end.lambda.cpp"
          },
          "5": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "6": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "7": {
            "name": "comment.block.cpp"
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "end": "(?<=[;}])|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.parameters.begin.lambda.cpp"
              }
            },
            "end": "\\)|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.parameters.end.lambda.cpp"
              }
            },
            "name": "meta.function.definition.parameters.lambda.cpp",
            "patterns": [
              {
                "include": "#function_parameter_context"
              }
            ]
          },
          {
            "match": "(?<!\\w)(?:(?:constexpr)|(?:consteval)|(?:mutable))(?!\\w)",
            "name": "storage.modifier.lambda.$0.cpp"
          },
          {
            "begin": "->",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.lambda.return-type.cpp"
              }
            },
            "end": "(?=\\{)|(?=(?<!\\\\)\n)",
            "endCaptures": {},
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "match": "\\S+",
                "name": "storage.type.return-type.lambda.cpp"
              }
            ]
          },
          {
            "begin": "\\{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.block.begin.bracket.curly.lambda.cpp"
              }
            },
            "end": "\\}|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.end.bracket.curly.lambda.cpp"
              }
            },
            "name": "meta.function.definition.body.lambda.cpp",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          }
        ]
      },
      "line": {
        "begin": "^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(#)(?:\\s+)?line\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.control.directive.line.cpp"
          },
          "1": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "5": {
            "name": "punctuation.definition.directive.cpp"
          }
        },
        "end": "(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$))|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.preprocessor.line.cpp",
        "patterns": [
          {
            "include": "#string_context"
          },
          {
            "include": "#preprocessor_number_literal"
          },
          {
            "include": "source.cpp#line_continuation_character"
          }
        ]
      },
      "line_comment": {
        "begin": "\\s*+(\\/\\/)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.comment.cpp"
          }
        },
        "end": "(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$))|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "comment.line.double-slash.cpp",
        "patterns": [
          {
            "include": "source.cpp#line_continuation_character"
          }
        ]
      },
      "macro": {
        "begin": "(^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(#)(?:\\s+)?define\\b)(?:\\s+)?((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.directive.define.cpp"
          },
          "2": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "name": "punctuation.definition.directive.cpp"
          },
          "7": {
            "name": "entity.name.function.preprocessor.cpp"
          }
        },
        "end": "(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$))|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.preprocessor.macro.cpp",
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.parameters.begin.preprocessor.cpp"
              },
              "2": {
                "name": "meta.function.preprocessor.parameters.cpp",
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "variable.parameter.preprocessor.cpp"
                      }
                    },
                    "match": "(?<=[(,])(?:\\s+)?((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)(?:\\s+)?"
                  },
                  {
                    "match": ",",
                    "name": "punctuation.separator.parameters.cpp"
                  },
                  {
                    "match": "\\.\\.\\.",
                    "name": "punctuation.vararg-ellipses.variable.parameter.preprocessor.cpp"
                  }
                ]
              },
              "3": {
                "name": "punctuation.definition.parameters.end.preprocessor.cpp"
              }
            },
            "match": "\\G(?:\\s+)?(\\()([^\\(]*)(\\))"
          },
          {
            "include": "#macro_context"
          },
          {
            "include": "source.cpp#macro_argument"
          }
        ]
      },
      "macro_context": {
        "patterns": [
          {
            "include": "source.cpp.embedded.macro"
          }
        ]
      },
      "method_access": {
        "begin": "(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)this(?!\\w))|((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*|(?<=\\]|\\)))(?:\\s+)?))(?:((?:\\.\\*|\\.))|((?:->\\*|->)))((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?:\\s+)?(?:(?:\\.\\*|\\.)|(?:->\\*|->))(?:\\s+)?)*)(?:\\s+)?(~?(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)(?:\\s+)?(\\()",
        "beginCaptures": {
          "1": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "5": {
            "name": "variable.language.this.cpp"
          },
          "6": {
            "name": "variable.other.object.access.cpp"
          },
          "7": {
            "name": "punctuation.separator.dot-access.cpp"
          },
          "8": {
            "name": "punctuation.separator.pointer-access.cpp"
          },
          "9": {
            "patterns": [
              {
                "captures": {
                  "1": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "2": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "3": {
                    "name": "comment.block.cpp"
                  },
                  "4": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  },
                  "5": {
                    "name": "variable.language.this.cpp"
                  },
                  "6": {
                    "name": "variable.other.object.property.cpp"
                  },
                  "7": {
                    "name": "punctuation.separator.dot-access.cpp"
                  },
                  "8": {
                    "name": "punctuation.separator.pointer-access.cpp"
                  }
                },
                "match": "(?<=(?:\\.\\*|\\.|->|->\\*))(?:\\s+)?(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)this(?!\\w))|((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*|(?<=\\]|\\)))(?:\\s+)?))(?:((?:\\.\\*|\\.))|((?:->\\*|->)))"
              },
              {
                "captures": {
                  "1": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "2": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "3": {
                    "name": "comment.block.cpp"
                  },
                  "4": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  },
                  "5": {
                    "name": "variable.language.this.cpp"
                  },
                  "6": {
                    "name": "variable.other.object.access.cpp"
                  },
                  "7": {
                    "name": "punctuation.separator.dot-access.cpp"
                  },
                  "8": {
                    "name": "punctuation.separator.pointer-access.cpp"
                  }
                },
                "match": "(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)this(?!\\w))|((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*|(?<=\\]|\\)))(?:\\s+)?))(?:((?:\\.\\*|\\.))|((?:->\\*|->)))"
              },
              {
                "include": "source.cpp#member_access"
              },
              {
                "include": "#method_access"
              }
            ]
          },
          "10": {
            "name": "entity.name.function.member.cpp"
          },
          "11": {
            "name": "punctuation.section.arguments.begin.bracket.round.function.member.cpp"
          }
        },
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.function.member.cpp"
          }
        },
        "patterns": [
          {
            "include": "#evaluation_context"
          }
        ]
      },
      "ms_attributes": {
        "begin": "__declspec\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.attribute.begin.cpp"
          }
        },
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.attribute.end.cpp"
          }
        },
        "name": "support.other.attribute.cpp",
        "patterns": [
          {
            "include": "#attributes_context"
          },
          {
            "begin": "\\(",
            "beginCaptures": {},
            "end": "\\)|(?=(?<!\\\\)\n)",
            "endCaptures": {},
            "patterns": [
              {
                "include": "#attributes_context"
              },
              {
                "include": "#string_context"
              },
              {
                "include": "#ever_present_context"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "keyword.other.using.directive.cpp"
              },
              "2": {
                "name": "entity.name.namespace.cpp"
              }
            },
            "match": "(using)\\s+((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))"
          },
          {
            "match": ",",
            "name": "punctuation.separator.attribute.cpp"
          },
          {
            "match": ":",
            "name": "punctuation.accessor.attribute.cpp"
          },
          {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)(?=::)",
            "name": "entity.name.namespace.cpp"
          },
          {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.other.attribute.$0.cpp"
          },
          {
            "include": "source.cpp#number_literal"
          },
          {
            "include": "#ever_present_context"
          }
        ]
      },
      "namespace_block": {
        "begin": "((?<!\\w)namespace(?!\\w))",
        "beginCaptures": {
          "0": {
            "name": "meta.head.namespace.cpp"
          },
          "1": {
            "name": "keyword.other.namespace.definition.cpp storage.type.namespace.definition.cpp"
          }
        },
        "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.block.namespace.cpp",
        "patterns": [
          {
            "begin": "\\G ?",
            "beginCaptures": {},
            "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.begin.bracket.curly.namespace.cpp"
              }
            },
            "name": "meta.head.namespace.cpp",
            "patterns": [
              {
                "include": "#ever_present_context"
              },
              {
                "include": "#attributes_context"
              },
              {
                "captures": {
                  "1": {
                    "patterns": [
                      {
                        "include": "source.cpp#scope_resolution_namespace_block_inner_generated"
                      }
                    ]
                  },
                  "2": {
                    "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.namespace.block.cpp"
                  },
                  "3": {
                    "patterns": [
                      {
                        "include": "#template_call_range"
                      }
                    ]
                  },
                  "4": {},
                  "5": {
                    "name": "entity.name.namespace.cpp"
                  },
                  "6": {
                    "name": "punctuation.separator.scope-resolution.namespace.block.cpp"
                  },
                  "7": {
                    "name": "storage.modifier.inline.cpp"
                  }
                },
                "match": "((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<4>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)(?:\\s+)?((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(?:\\s+)?(?:(::)(?:\\s+)?(inline))?"
              }
            ]
          },
          {
            "begin": "(?<=\\{|<%|\\?\\?<)",
            "beginCaptures": {},
            "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.end.bracket.curly.namespace.cpp"
              }
            },
            "name": "meta.body.namespace.cpp",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          },
          {
            "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
            "beginCaptures": {},
            "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
            "endCaptures": {},
            "name": "meta.tail.namespace.cpp",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          }
        ]
      },
      "noexcept_operator": {
        "begin": "((?<!\\w)noexcept(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.functionlike.cpp keyword.operator.noexcept.cpp"
          },
          "2": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "name": "punctuation.section.arguments.begin.bracket.round.operator.noexcept.cpp"
          }
        },
        "contentName": "meta.arguments.operator.noexcept",
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.operator.noexcept.cpp"
          }
        },
        "patterns": [
          {
            "include": "#evaluation_context"
          }
        ]
      },
      "operator_overload": {
        "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<55>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<55>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:__cdecl|__clrcall|__stdcall|__fastcall|__thiscall|__vectorcall)?)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<55>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)(operator)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<55>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)(?:(?:((?:(?:delete\\[\\])|(?:delete)|(?:new\\[\\])|(?:<=>)|(?:<<=)|(?:new)|(?:>>=)|(?:\\->\\*)|(?:\\/=)|(?:%=)|(?:&=)|(?:>=)|(?:\\|=)|(?:\\+\\+)|(?:\\-\\-)|(?:\\(\\))|(?:\\[\\])|(?:\\->)|(?:\\+\\+)|(?:<<)|(?:>>)|(?:\\-\\-)|(?:<=)|(?:\\^=)|(?:==)|(?:!=)|(?:&&)|(?:\\|\\|)|(?:\\+=)|(?:\\-=)|(?:\\*=)|,|\\+|\\-|!|~|\\*|&|\\*|\\/|%|\\+|\\-|<|>|&|\\^|\\||=))|((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:\\[\\])?)))|(\"\")((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\<|\\()",
        "beginCaptures": {
          "0": {
            "name": "meta.head.function.definition.special.operator-overload.cpp"
          },
          "1": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "5": {
            "name": "meta.qualified_type.cpp",
            "patterns": [
              {
                "match": "::",
                "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
              },
              {
                "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
                "name": "storage.type.$0.cpp"
              },
              {
                "include": "#attributes_context"
              },
              {
                "include": "#storage_types"
              },
              {
                "include": "source.cpp#number_literal"
              },
              {
                "include": "#string_context"
              },
              {
                "include": "source.cpp#comma"
              },
              {
                "include": "source.cpp#scope_resolution_inner_generated"
              },
              {
                "begin": "<",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
                  }
                },
                "end": ">|(?=(?<!\\\\)\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.angle-brackets.end.template.call.cpp"
                  }
                },
                "name": "meta.template.call.cpp",
                "patterns": [
                  {
                    "include": "#template_call_context"
                  }
                ]
              },
              {
                "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
                "name": "entity.name.type.cpp"
              }
            ]
          },
          "6": {
            "patterns": [
              {
                "include": "#attributes_context"
              },
              {
                "include": "source.cpp#number_literal"
              }
            ]
          },
          "7": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "9": {
            "name": "comment.block.cpp"
          },
          "10": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "11": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "12": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "13": {
            "name": "comment.block.cpp"
          },
          "14": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "15": {
            "patterns": [
              {
                "match": "::",
                "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
              },
              {
                "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                "name": "entity.name.scope-resolution.type.cpp"
              },
              {
                "include": "#template_call_range"
              }
            ]
          },
          "16": {
            "patterns": [
              {
                "include": "#template_call_range"
              }
            ]
          },
          "17": {},
          "18": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "19": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "20": {
            "name": "comment.block.cpp"
          },
          "21": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "22": {},
          "23": {
            "patterns": [
              {
                "match": "\\*",
                "name": "storage.modifier.pointer.cpp"
              },
              {
                "captures": {
                  "1": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "2": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "3": {
                    "name": "comment.block.cpp"
                  },
                  "4": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  }
                },
                "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
                "name": "invalid.illegal.reference-type.cpp"
              },
              {
                "match": "\\&",
                "name": "storage.modifier.reference.cpp"
              }
            ]
          },
          "24": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "25": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "26": {
            "name": "comment.block.cpp"
          },
          "27": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "28": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "29": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "30": {
            "name": "comment.block.cpp"
          },
          "31": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "32": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "33": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "34": {
            "name": "comment.block.cpp"
          },
          "35": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "36": {
            "name": "storage.type.modifier.calling-convention.cpp"
          },
          "37": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "38": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "39": {
            "name": "comment.block.cpp"
          },
          "40": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "41": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "42": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "43": {
            "name": "comment.block.cpp"
          },
          "44": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "45": {
            "patterns": [
              {
                "match": "::",
                "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.operator.cpp"
              },
              {
                "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                "name": "entity.name.scope-resolution.operator.cpp"
              },
              {
                "include": "#template_call_range"
              }
            ]
          },
          "46": {
            "patterns": [
              {
                "include": "#template_call_range"
              }
            ]
          },
          "47": {},
          "48": {
            "name": "keyword.other.operator.overload.cpp"
          },
          "49": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "50": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "51": {
            "name": "comment.block.cpp"
          },
          "52": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "53": {
            "patterns": [
              {
                "match": "::",
                "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.operator-overload.cpp"
              },
              {
                "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                "name": "entity.name.scope-resolution.operator-overload.cpp"
              },
              {
                "include": "#template_call_range"
              }
            ]
          },
          "54": {
            "patterns": [
              {
                "include": "#template_call_range"
              }
            ]
          },
          "55": {},
          "56": {
            "name": "entity.name.operator.cpp"
          },
          "57": {
            "name": "entity.name.operator.type.cpp"
          },
          "58": {
            "patterns": [
              {
                "match": "\\*",
                "name": "entity.name.operator.type.pointer.cpp"
              },
              {
                "captures": {
                  "1": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "2": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "3": {
                    "name": "comment.block.cpp"
                  },
                  "4": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  }
                },
                "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
                "name": "invalid.illegal.reference-type.cpp"
              },
              {
                "match": "\\&",
                "name": "entity.name.operator.type.reference.cpp"
              }
            ]
          },
          "59": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "60": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "61": {
            "name": "comment.block.cpp"
          },
          "62": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "63": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "64": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "65": {
            "name": "comment.block.cpp"
          },
          "66": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "67": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "68": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "69": {
            "name": "comment.block.cpp"
          },
          "70": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "71": {
            "name": "entity.name.operator.type.array.cpp"
          },
          "72": {
            "name": "entity.name.operator.custom-literal.cpp"
          },
          "73": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "74": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "75": {
            "name": "comment.block.cpp"
          },
          "76": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "77": {
            "name": "entity.name.operator.custom-literal.cpp"
          },
          "78": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "79": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "80": {
            "name": "comment.block.cpp"
          },
          "81": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.function.definition.special.operator-overload.cpp",
        "patterns": [
          {
            "begin": "\\G ?",
            "beginCaptures": {},
            "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.begin.bracket.curly.function.definition.special.operator-overload.cpp"
              }
            },
            "name": "meta.head.function.definition.special.operator-overload.cpp",
            "patterns": [
              {
                "include": "#ever_present_context"
              },
              {
                "include": "#template_call_range"
              },
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.parameters.begin.bracket.round.special.operator-overload.cpp"
                  }
                },
                "contentName": "meta.function.definition.parameters.special.operator-overload",
                "end": "\\)|(?=(?<!\\\\)\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.parameters.end.bracket.round.special.operator-overload.cpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#function_parameter_context"
                  },
                  {
                    "include": "#evaluation_context"
                  }
                ]
              },
              {
                "include": "source.cpp#qualifiers_and_specifiers_post_parameters"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.operator.assignment.cpp"
                  },
                  "2": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "3": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "4": {
                    "name": "comment.block.cpp"
                  },
                  "5": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  },
                  "6": {
                    "name": "keyword.other.default.function.cpp"
                  },
                  "7": {
                    "name": "keyword.other.delete.function.cpp"
                  }
                },
                "match": "(\\=)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(default)|(delete))"
              },
              {
                "include": "$self"
              }
            ]
          },
          {
            "begin": "(?<=\\{|<%|\\?\\?<)",
            "beginCaptures": {},
            "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.end.bracket.curly.function.definition.special.operator-overload.cpp"
              }
            },
            "name": "meta.body.function.definition.special.operator-overload.cpp",
            "patterns": [
              {
                "include": "#function_body_context"
              }
            ]
          },
          {
            "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
            "beginCaptures": {},
            "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
            "endCaptures": {},
            "name": "meta.tail.function.definition.special.operator-overload.cpp",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          }
        ]
      },
      "operators": {
        "patterns": [
          {
            "begin": "((?<!\\w)sizeof(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.functionlike.cpp keyword.operator.sizeof.cpp"
              },
              "2": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "name": "punctuation.section.arguments.begin.bracket.round.operator.sizeof.cpp"
              }
            },
            "contentName": "meta.arguments.operator.sizeof",
            "end": "\\)|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.arguments.end.bracket.round.operator.sizeof.cpp"
              }
            },
            "patterns": [
              {
                "include": "#evaluation_context"
              }
            ]
          },
          {
            "begin": "((?<!\\w)alignof(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.functionlike.cpp keyword.operator.alignof.cpp"
              },
              "2": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "name": "punctuation.section.arguments.begin.bracket.round.operator.alignof.cpp"
              }
            },
            "contentName": "meta.arguments.operator.alignof",
            "end": "\\)|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.arguments.end.bracket.round.operator.alignof.cpp"
              }
            },
            "patterns": [
              {
                "include": "#evaluation_context"
              }
            ]
          },
          {
            "begin": "((?<!\\w)alignas(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.functionlike.cpp keyword.operator.alignas.cpp"
              },
              "2": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "name": "punctuation.section.arguments.begin.bracket.round.operator.alignas.cpp"
              }
            },
            "contentName": "meta.arguments.operator.alignas",
            "end": "\\)|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.arguments.end.bracket.round.operator.alignas.cpp"
              }
            },
            "patterns": [
              {
                "include": "#evaluation_context"
              }
            ]
          },
          {
            "begin": "((?<!\\w)typeid(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.functionlike.cpp keyword.operator.typeid.cpp"
              },
              "2": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "name": "punctuation.section.arguments.begin.bracket.round.operator.typeid.cpp"
              }
            },
            "contentName": "meta.arguments.operator.typeid",
            "end": "\\)|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.arguments.end.bracket.round.operator.typeid.cpp"
              }
            },
            "patterns": [
              {
                "include": "#evaluation_context"
              }
            ]
          },
          {
            "begin": "((?<!\\w)noexcept(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.functionlike.cpp keyword.operator.noexcept.cpp"
              },
              "2": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "name": "punctuation.section.arguments.begin.bracket.round.operator.noexcept.cpp"
              }
            },
            "contentName": "meta.arguments.operator.noexcept",
            "end": "\\)|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.arguments.end.bracket.round.operator.noexcept.cpp"
              }
            },
            "patterns": [
              {
                "include": "#evaluation_context"
              }
            ]
          },
          {
            "begin": "(\\bsizeof\\.\\.\\.)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.functionlike.cpp keyword.operator.sizeof.variadic.cpp"
              },
              "2": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "name": "punctuation.section.arguments.begin.bracket.round.operator.sizeof.variadic.cpp"
              }
            },
            "contentName": "meta.arguments.operator.sizeof.variadic",
            "end": "\\)|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.arguments.end.bracket.round.operator.sizeof.variadic.cpp"
              }
            },
            "patterns": [
              {
                "include": "#evaluation_context"
              }
            ]
          },
          {
            "match": "--",
            "name": "keyword.operator.decrement.cpp"
          },
          {
            "match": "\\+\\+",
            "name": "keyword.operator.increment.cpp"
          },
          {
            "match": "%=|\\+=|-=|\\*=|(?<!\\()\\/=",
            "name": "keyword.operator.assignment.compound.cpp"
          },
          {
            "match": "&=|\\^=|<<=|>>=|\\|=",
            "name": "keyword.operator.assignment.compound.bitwise.cpp"
          },
          {
            "match": "<<|>>",
            "name": "keyword.operator.bitwise.shift.cpp"
          },
          {
            "match": "!=|<=|>=|==|<|>",
            "name": "keyword.operator.comparison.cpp"
          },
          {
            "match": "&&|!|\\|\\|",
            "name": "keyword.operator.logical.cpp"
          },
          {
            "match": "&|\\||\\^|~",
            "name": "keyword.operator.bitwise.cpp"
          },
          {
            "include": "source.cpp#assignment_operator"
          },
          {
            "match": "%|\\*|\\/|-|\\+",
            "name": "keyword.operator.arithmetic.cpp"
          },
          {
            "include": "#ternary_operator"
          }
        ]
      },
      "parameter": {
        "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\w)",
        "beginCaptures": {
          "1": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "end": "(?:(?=\\))|(,))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "1": {
            "name": "punctuation.separator.delimiter.comma.cpp"
          }
        },
        "name": "meta.parameter.cpp",
        "patterns": [
          {
            "include": "#ever_present_context"
          },
          {
            "include": "#string_context"
          },
          {
            "include": "#function_pointer_parameter"
          },
          {
            "include": "#decltype"
          },
          {
            "include": "source.cpp#vararg_ellipses"
          },
          {
            "captures": {
              "1": {
                "patterns": [
                  {
                    "include": "#storage_types"
                  }
                ]
              },
              "2": {
                "name": "storage.modifier.specifier.parameter.cpp"
              },
              "3": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "5": {
                "name": "comment.block.cpp"
              },
              "6": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "7": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "8": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "9": {
                "name": "comment.block.cpp"
              },
              "10": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "11": {
                "name": "storage.type.primitive.cpp storage.type.built-in.primitive.cpp"
              },
              "12": {
                "name": "storage.type.cpp storage.type.built-in.cpp"
              },
              "13": {
                "name": "support.type.posix-reserved.pthread.cpp support.type.built-in.posix-reserved.pthread.cpp"
              },
              "14": {
                "name": "support.type.posix-reserved.cpp support.type.built-in.posix-reserved.cpp"
              },
              "15": {
                "name": "entity.name.type.parameter.cpp"
              },
              "16": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "17": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "18": {
                "name": "comment.block.cpp"
              },
              "19": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "((?:((?:(?:thread_local)|(?:volatile)|(?:register)|(?:restrict)|(?:static)|(?:extern)|(?:const)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:\\s*+(?<!\\w)(?:(?:(?:((?:(?:unsigned)|(?:wchar_t)|(?:double)|(?:signed)|(?:short)|(?:float)|(?:auto)|(?:void)|(?:long)|(?:char)|(?:bool)|(?:int)))|((?:(?:uint_least32_t)|(?:uint_least64_t)|(?:uint_least16_t)|(?:uint_fast64_t)|(?:uint_least8_t)|(?:int_least64_t)|(?:int_least32_t)|(?:int_least16_t)|(?:uint_fast16_t)|(?:uint_fast32_t)|(?:int_least8_t)|(?:int_fast16_t)|(?:int_fast32_t)|(?:int_fast64_t)|(?:uint_fast8_t)|(?:int_fast8_t)|(?:suseconds_t)|(?:useconds_t)|(?:uintmax_t)|(?:uintmax_t)|(?:in_port_t)|(?:uintmax_t)|(?:in_addr_t)|(?:blksize_t)|(?:uintptr_t)|(?:intmax_t)|(?:intptr_t)|(?:blkcnt_t)|(?:intmax_t)|(?:u_quad_t)|(?:uint16_t)|(?:uint32_t)|(?:uint64_t)|(?:ssize_t)|(?:fixpt_t)|(?:qaddr_t)|(?:u_short)|(?:int16_t)|(?:int32_t)|(?:int64_t)|(?:uint8_t)|(?:daddr_t)|(?:caddr_t)|(?:swblk_t)|(?:clock_t)|(?:segsz_t)|(?:nlink_t)|(?:time_t)|(?:u_long)|(?:ushort)|(?:quad_t)|(?:mode_t)|(?:size_t)|(?:u_char)|(?:int8_t)|(?:u_int)|(?:uid_t)|(?:off_t)|(?:pid_t)|(?:gid_t)|(?:dev_t)|(?:div_t)|(?:key_t)|(?:ino_t)|(?:id_t)|(?:id_t)|(?:uint))))|((?:(?:pthread_rwlockattr_t)|(?:pthread_mutexattr_t)|(?:pthread_condattr_t)|(?:pthread_rwlock_t)|(?:pthread_mutex_t)|(?:pthread_cond_t)|(?:pthread_attr_t)|(?:pthread_once_t)|(?:pthread_key_t)|(?:pthread_t))))|([a-zA-Z_]\\w*_t))(?!\\w)|((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\b\\b(?<!\\Wthread_local|^thread_local|\\Wvolatile|^volatile|\\Wregister|^register|\\Wrestrict|^restrict|\\Wstatic|^static|\\Wextern|^extern|\\Wconst|^const)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=,|\\)|=)"
          },
          {
            "include": "#storage_types"
          },
          {
            "include": "source.cpp#scope_resolution_parameter_inner_generated"
          },
          {
            "match": "(?:(?:struct)|(?:class)|(?:union)|(?:enum))",
            "name": "storage.type.$0.cpp"
          },
          {
            "begin": "(?<==)",
            "beginCaptures": {},
            "end": "(?:(?=\\))|(,))|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "1": {
                "name": "punctuation.separator.delimiter.comma.cpp"
              }
            },
            "patterns": [
              {
                "include": "#evaluation_context"
              }
            ]
          },
          {
            "match": "\\=",
            "name": "keyword.operator.assignment.cpp"
          },
          {
            "captures": {
              "1": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "5": {
                "name": "variable.parameter.cpp"
              },
              "6": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "7": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "8": {
                "name": "comment.block.cpp"
              },
              "9": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "(?<!\\s|\\(|,|:)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\)|,|\\[|=|\\n)"
          },
          {
            "include": "#attributes_context"
          },
          {
            "begin": "\\[",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.begin.bracket.square.array.type.cpp"
              }
            },
            "end": "\\]|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.end.bracket.square.array.type.cpp"
              }
            },
            "name": "meta.bracket.square.array.cpp",
            "patterns": [
              {
                "include": "#evaluation_context"
              }
            ]
          },
          {
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b(?<!\\Wstruct|^struct|\\Wclass|^class|\\Wunion|^union|\\Wenum|^enum)",
            "name": "entity.name.type.parameter.cpp"
          },
          {
            "include": "#template_call_range"
          },
          {
            "captures": {
              "0": {
                "patterns": [
                  {
                    "match": "\\*",
                    "name": "storage.modifier.pointer.cpp"
                  },
                  {
                    "captures": {
                      "1": {
                        "patterns": [
                          {
                            "include": "source.cpp#inline_comment"
                          }
                        ]
                      },
                      "2": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "3": {
                        "name": "comment.block.cpp"
                      },
                      "4": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      }
                    },
                    "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
                    "name": "invalid.illegal.reference-type.cpp"
                  },
                  {
                    "match": "\\&",
                    "name": "storage.modifier.reference.cpp"
                  }
                ]
              },
              "1": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "5": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "6": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "7": {
                "name": "comment.block.cpp"
              },
              "8": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*)"
          },
          {
            "include": "#ever_present_context"
          }
        ]
      },
      "parameter_or_maybe_value": {
        "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\w)",
        "beginCaptures": {
          "1": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "end": "(?:(?=\\))|(,))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "1": {
            "name": "punctuation.separator.delimiter.comma.cpp"
          }
        },
        "name": "meta.parameter.cpp",
        "patterns": [
          {
            "include": "#ever_present_context"
          },
          {
            "include": "#function_pointer_parameter"
          },
          {
            "include": "source.cpp#memory_operators"
          },
          {
            "include": "#builtin_storage_type_initilizer"
          },
          {
            "include": "#curly_initializer"
          },
          {
            "include": "#decltype"
          },
          {
            "include": "source.cpp#vararg_ellipses"
          },
          {
            "captures": {
              "1": {
                "patterns": [
                  {
                    "include": "#storage_types"
                  }
                ]
              },
              "2": {
                "name": "storage.modifier.specifier.parameter.cpp"
              },
              "3": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "5": {
                "name": "comment.block.cpp"
              },
              "6": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "7": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "8": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "9": {
                "name": "comment.block.cpp"
              },
              "10": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "11": {
                "name": "storage.type.primitive.cpp storage.type.built-in.primitive.cpp"
              },
              "12": {
                "name": "storage.type.cpp storage.type.built-in.cpp"
              },
              "13": {
                "name": "support.type.posix-reserved.pthread.cpp support.type.built-in.posix-reserved.pthread.cpp"
              },
              "14": {
                "name": "support.type.posix-reserved.cpp support.type.built-in.posix-reserved.cpp"
              },
              "15": {
                "name": "entity.name.type.parameter.cpp"
              },
              "16": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "17": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "18": {
                "name": "comment.block.cpp"
              },
              "19": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "((?:((?:(?:thread_local)|(?:volatile)|(?:register)|(?:restrict)|(?:static)|(?:extern)|(?:const)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:\\s*+(?<!\\w)(?:(?:(?:((?:(?:unsigned)|(?:wchar_t)|(?:double)|(?:signed)|(?:short)|(?:float)|(?:auto)|(?:void)|(?:long)|(?:char)|(?:bool)|(?:int)))|((?:(?:uint_least32_t)|(?:uint_least64_t)|(?:uint_least16_t)|(?:uint_fast64_t)|(?:uint_least8_t)|(?:int_least64_t)|(?:int_least32_t)|(?:int_least16_t)|(?:uint_fast16_t)|(?:uint_fast32_t)|(?:int_least8_t)|(?:int_fast16_t)|(?:int_fast32_t)|(?:int_fast64_t)|(?:uint_fast8_t)|(?:int_fast8_t)|(?:suseconds_t)|(?:useconds_t)|(?:uintmax_t)|(?:uintmax_t)|(?:in_port_t)|(?:uintmax_t)|(?:in_addr_t)|(?:blksize_t)|(?:uintptr_t)|(?:intmax_t)|(?:intptr_t)|(?:blkcnt_t)|(?:intmax_t)|(?:u_quad_t)|(?:uint16_t)|(?:uint32_t)|(?:uint64_t)|(?:ssize_t)|(?:fixpt_t)|(?:qaddr_t)|(?:u_short)|(?:int16_t)|(?:int32_t)|(?:int64_t)|(?:uint8_t)|(?:daddr_t)|(?:caddr_t)|(?:swblk_t)|(?:clock_t)|(?:segsz_t)|(?:nlink_t)|(?:time_t)|(?:u_long)|(?:ushort)|(?:quad_t)|(?:mode_t)|(?:size_t)|(?:u_char)|(?:int8_t)|(?:u_int)|(?:uid_t)|(?:off_t)|(?:pid_t)|(?:gid_t)|(?:dev_t)|(?:div_t)|(?:key_t)|(?:ino_t)|(?:id_t)|(?:id_t)|(?:uint))))|((?:(?:pthread_rwlockattr_t)|(?:pthread_mutexattr_t)|(?:pthread_condattr_t)|(?:pthread_rwlock_t)|(?:pthread_mutex_t)|(?:pthread_cond_t)|(?:pthread_attr_t)|(?:pthread_once_t)|(?:pthread_key_t)|(?:pthread_t))))|([a-zA-Z_]\\w*_t))(?!\\w)|((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\b\\b(?<!\\Wthread_local|^thread_local|\\Wvolatile|^volatile|\\Wregister|^register|\\Wrestrict|^restrict|\\Wstatic|^static|\\Wextern|^extern|\\Wconst|^const)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=,|\\)|=)"
          },
          {
            "include": "#storage_types"
          },
          {
            "include": "#function_call"
          },
          {
            "include": "source.cpp#scope_resolution_parameter_inner_generated"
          },
          {
            "match": "(?:(?:struct)|(?:class)|(?:union)|(?:enum))",
            "name": "storage.type.$0.cpp"
          },
          {
            "begin": "(?<==)",
            "beginCaptures": {},
            "end": "(?:(?=\\))|(,))|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "1": {
                "name": "punctuation.separator.delimiter.comma.cpp"
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
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "5": {
                "name": "variable.parameter.cpp"
              },
              "6": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "7": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "8": {
                "name": "comment.block.cpp"
              },
              "9": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "(?<!\\s|\\(|,|:)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=(?:\\)|,|\\[|=|\\/\\/|(?:\\n|$)))"
          },
          {
            "include": "#attributes_context"
          },
          {
            "begin": "\\[",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.begin.bracket.square.array.type.cpp"
              }
            },
            "end": "\\]|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.end.bracket.square.array.type.cpp"
              }
            },
            "name": "meta.bracket.square.array.cpp",
            "patterns": [
              {
                "include": "#evaluation_context"
              }
            ]
          },
          {
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b(?<!\\Wstruct|^struct|\\Wclass|^class|\\Wunion|^union|\\Wenum|^enum)",
            "name": "entity.name.type.parameter.cpp"
          },
          {
            "include": "#template_call_range"
          },
          {
            "captures": {
              "0": {
                "patterns": [
                  {
                    "match": "\\*",
                    "name": "storage.modifier.pointer.cpp"
                  },
                  {
                    "captures": {
                      "1": {
                        "patterns": [
                          {
                            "include": "source.cpp#inline_comment"
                          }
                        ]
                      },
                      "2": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "3": {
                        "name": "comment.block.cpp"
                      },
                      "4": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      }
                    },
                    "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
                    "name": "invalid.illegal.reference-type.cpp"
                  },
                  {
                    "match": "\\&",
                    "name": "storage.modifier.reference.cpp"
                  }
                ]
              },
              "1": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "5": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "6": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "7": {
                "name": "comment.block.cpp"
              },
              "8": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*)"
          },
          {
            "include": "#evaluation_context"
          },
          {
            "include": "#ever_present_context"
          }
        ]
      },
      "parentheses": {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.parens.begin.bracket.round.cpp"
          }
        },
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.parens.end.bracket.round.cpp"
          }
        },
        "name": "meta.parens.cpp",
        "patterns": [
          {
            "include": "source.cpp#over_qualified_types"
          },
          {
            "match": "(?<!:):(?!:)",
            "name": "punctuation.separator.colon.range-based.cpp"
          },
          {
            "include": "#evaluation_context"
          }
        ]
      },
      "pragma": {
        "begin": "^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(#)(?:\\s+)?pragma\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.control.directive.pragma.cpp"
          },
          "1": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "5": {
            "name": "punctuation.definition.directive.cpp"
          }
        },
        "end": "(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$))|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.preprocessor.pragma.cpp",
        "patterns": [
          {
            "include": "#comments"
          },
          {
            "include": "#string_context"
          },
          {
            "match": "[a-zA-Z_$][\\w\\-$]*",
            "name": "entity.other.attribute-name.pragma.preprocessor.cpp"
          },
          {
            "include": "#preprocessor_number_literal"
          },
          {
            "include": "source.cpp#line_continuation_character"
          }
        ]
      },
      "preprocessor_conditional_context": {
        "patterns": [
          {
            "include": "#preprocessor_conditional_defined"
          },
          {
            "include": "#comments"
          },
          {
            "include": "source.cpp#language_constants"
          },
          {
            "include": "#string_context"
          },
          {
            "include": "source.cpp#d9bc4796b0b_preprocessor_number_literal"
          },
          {
            "include": "#operators"
          },
          {
            "include": "source.cpp#predefined_macros"
          },
          {
            "include": "source.cpp#macro_name"
          },
          {
            "include": "source.cpp#line_continuation_character"
          }
        ]
      },
      "preprocessor_conditional_defined": {
        "begin": "((?<!\\w)defined(?!\\w))(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.directive.conditional.defined.cpp"
          },
          "2": {
            "name": "punctuation.section.parens.control.defined.cpp"
          }
        },
        "end": "(?:\\)|(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$)))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.parens.control.defined.cpp"
          }
        },
        "patterns": [
          {
            "include": "source.cpp#macro_name"
          }
        ]
      },
      "preprocessor_conditional_parentheses": {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.parens.begin.bracket.round.cpp"
          }
        },
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.parens.end.bracket.round.cpp"
          }
        },
        "name": "meta.parens.preprocessor.conditional.cpp"
      },
      "preprocessor_conditional_range": {
        "begin": "^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(#)(?:\\s+)?((?:(?:ifndef|ifdef)|if))",
        "beginCaptures": {
          "0": {
            "name": "keyword.control.directive.conditional.$6.cpp"
          },
          "1": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "5": {
            "name": "punctuation.definition.directive.cpp"
          },
          "6": {}
        },
        "contentName": "meta.preprocessor.conditional",
        "end": "(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$))|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "patterns": [
          {
            "include": "#preprocessor_conditional_context"
          }
        ]
      },
      "preprocessor_context": {
        "patterns": [
          {
            "include": "source.cpp#pragma_mark"
          },
          {
            "include": "#pragma"
          },
          {
            "include": "source.cpp#include"
          },
          {
            "include": "#line"
          },
          {
            "include": "#diagnostic"
          },
          {
            "include": "source.cpp#undef"
          },
          {
            "include": "#preprocessor_conditional_range"
          },
          {
            "include": "source.cpp#single_line_macro"
          },
          {
            "include": "#macro"
          },
          {
            "include": "source.cpp#preprocessor_conditional_standalone"
          },
          {
            "include": "source.cpp#macro_argument"
          }
        ]
      },
      "sizeof_operator": {
        "begin": "((?<!\\w)sizeof(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.functionlike.cpp keyword.operator.sizeof.cpp"
          },
          "2": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "name": "punctuation.section.arguments.begin.bracket.round.operator.sizeof.cpp"
          }
        },
        "contentName": "meta.arguments.operator.sizeof",
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.operator.sizeof.cpp"
          }
        },
        "patterns": [
          {
            "include": "#evaluation_context"
          }
        ]
      },
      "sizeof_variadic_operator": {
        "begin": "(\\bsizeof\\.\\.\\.)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.functionlike.cpp keyword.operator.sizeof.variadic.cpp"
          },
          "2": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "name": "punctuation.section.arguments.begin.bracket.round.operator.sizeof.variadic.cpp"
          }
        },
        "contentName": "meta.arguments.operator.sizeof.variadic",
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.operator.sizeof.variadic.cpp"
          }
        },
        "patterns": [
          {
            "include": "#evaluation_context"
          }
        ]
      },
      "square_brackets": {
        "begin": "([a-zA-Z_][a-zA-Z_0-9]*|(?<=[\\]\\)]))?(\\[)(?!\\])",
        "beginCaptures": {
          "1": {
            "name": "variable.other.object"
          },
          "2": {
            "name": "punctuation.definition.begin.bracket.square"
          }
        },
        "end": "\\]|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.end.bracket.square"
          }
        },
        "name": "meta.bracket.square.access",
        "patterns": [
          {
            "include": "#evaluation_context"
          }
        ]
      },
      "static_assert": {
        "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)static_assert|_Static_assert(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
        "beginCaptures": {
          "1": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "5": {
            "name": "keyword.other.static_assert.cpp"
          },
          "6": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "7": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "8": {
            "name": "comment.block.cpp"
          },
          "9": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "10": {
            "name": "punctuation.section.arguments.begin.bracket.round.static_assert.cpp"
          }
        },
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.static_assert.cpp"
          }
        },
        "patterns": [
          {
            "begin": "(,)(?:\\s+)?(?=(?:L|u8|u|U(?:\\s+)?\\\")?)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.separator.delimiter.comma.cpp"
              }
            },
            "end": "(?=\\))|(?=(?<!\\\\)\n)",
            "endCaptures": {},
            "name": "meta.static_assert.message.cpp",
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
            "include": "source.cpp#storage_specifiers"
          },
          {
            "include": "source.cpp#inline_builtin_storage_type"
          },
          {
            "include": "#decltype"
          },
          {
            "include": "source.cpp#typename"
          }
        ]
      },
      "string_context": {
        "patterns": [
          {
            "begin": "((?:u|u8|U|L)?)\"",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.cpp"
              },
              "1": {
                "name": "meta.encoding.cpp"
              }
            },
            "end": "(\")(?:((?:[a-zA-Z]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)|(_(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*))?|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.string.end.cpp"
              },
              "2": {
                "name": "keyword.other.suffix.literal.user-defined.reserved.string.cpp"
              },
              "3": {
                "name": "keyword.other.suffix.literal.user-defined.string.cpp"
              }
            },
            "name": "string.quoted.double.cpp",
            "patterns": [
              {
                "match": "(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8})",
                "name": "constant.character.escape.cpp"
              },
              {
                "match": "\\\\['\"?\\\\abfnrtv]",
                "name": "constant.character.escape.cpp"
              },
              {
                "match": "\\\\[0-7]{1,3}",
                "name": "constant.character.escape.cpp"
              },
              {
                "captures": {
                  "1": {
                    "name": "constant.character.escape.cpp"
                  },
                  "2": {
                    "name": "invalid.illegal.unknown-escape.cpp"
                  }
                },
                "match": "(?:(\\\\x0*[0-9a-fA-F]{2}(?![0-9a-fA-F]))|((?:\\\\x[0-9a-fA-F]*|\\\\x)))"
              },
              {
                "include": "source.cpp#string_escapes_context_c"
              }
            ]
          },
          {
            "begin": "(?<![0-9A-Fa-f])((?:u|u8|U|L)?)'",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.cpp"
              },
              "1": {
                "name": "meta.encoding.cpp"
              }
            },
            "end": "(')(?:((?:[a-zA-Z]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)|(_(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*))?|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.string.end.cpp"
              },
              "2": {
                "name": "keyword.other.suffix.literal.user-defined.reserved.character.cpp"
              },
              "3": {
                "name": "keyword.other.suffix.literal.user-defined.character.cpp"
              }
            },
            "name": "string.quoted.single.cpp",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "constant.character.escape.cpp"
                  },
                  "2": {
                    "name": "invalid.illegal.unknown-escape.cpp"
                  }
                },
                "match": "(?:(\\\\x0*[0-9a-fA-F]{2}(?![0-9a-fA-F]))|((?:\\\\x[0-9a-fA-F]*|\\\\x)))"
              },
              {
                "include": "source.cpp#string_escapes_context_c"
              },
              {
                "include": "source.cpp#line_continuation_character"
              }
            ]
          },
          {
            "begin": "((?:[uUL]8?)?R)\\\"(?:(?:_r|re)|regex)\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.cpp"
              },
              "1": {
                "name": "meta.encoding.cpp"
              }
            },
            "end": "\\)(?:(?:_r|re)|regex)\\\"|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.cpp"
              }
            },
            "name": "string.quoted.double.raw.regex.cpp",
            "patterns": [
              {
                "include": "source.regexp.python"
              }
            ]
          },
          {
            "begin": "((?:[uUL]8?)?R)\\\"(?:glsl|GLSL)\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.cpp"
              },
              "1": {
                "name": "meta.encoding.cpp"
              }
            },
            "end": "\\)(?:glsl|GLSL)\\\"|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.cpp"
              }
            },
            "name": "meta.string.quoted.double.raw.glsl.cpp",
            "patterns": [
              {
                "include": "source.glsl"
              }
            ]
          },
          {
            "begin": "((?:[uUL]8?)?R)\\\"(?:[pP]?(?:sql|SQL)|d[dm]l)\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.cpp"
              },
              "1": {
                "name": "meta.encoding.cpp"
              }
            },
            "end": "\\)(?:[pP]?(?:sql|SQL)|d[dm]l)\\\"|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.cpp"
              }
            },
            "name": "meta.string.quoted.double.raw.sql.cpp",
            "patterns": [
              {
                "include": "source.sql"
              }
            ]
          },
          {
            "begin": "((?:u|u8|U|L)?R)\"(?:([^ ()\\\\\\t]{0,16})|([^ ()\\\\\\t]*))\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin"
              },
              "1": {
                "name": "meta.encoding"
              },
              "3": {
                "name": "invalid.illegal.delimiter-too-long"
              }
            },
            "end": "(\\)\\2(\\3)\")(?:((?:[a-zA-Z]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)|(_(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*))?|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.string.end"
              },
              "2": {
                "name": "invalid.illegal.delimiter-too-long"
              },
              "3": {
                "name": "keyword.other.suffix.literal.user-defined.reserved.string.cpp"
              },
              "4": {
                "name": "keyword.other.suffix.literal.user-defined.string.cpp"
              }
            },
            "name": "string.quoted.double.raw"
          }
        ]
      },
      "struct_block": {
        "begin": "((?<!\\w)struct(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?={)|(?:((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*+)?(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(:(?!:)))?)",
        "beginCaptures": {
          "0": {
            "name": "meta.head.struct.cpp"
          },
          "1": {
            "name": "storage.type.$1.cpp"
          },
          "2": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "patterns": [
              {
                "include": "#attributes_context"
              },
              {
                "include": "source.cpp#number_literal"
              }
            ]
          },
          "7": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "9": {
            "name": "comment.block.cpp"
          },
          "10": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "11": {
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "storage.type.modifier.final.cpp"
                  },
                  "2": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "3": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "4": {
                    "name": "comment.block.cpp"
                  },
                  "5": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  }
                },
                "match": "((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))"
              },
              {
                "captures": {
                  "1": {
                    "name": "entity.name.type.struct.cpp"
                  },
                  "2": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "3": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "4": {
                    "name": "comment.block.cpp"
                  },
                  "5": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  },
                  "6": {
                    "name": "storage.type.modifier.final.cpp"
                  },
                  "7": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "8": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "9": {
                    "name": "comment.block.cpp"
                  },
                  "10": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  }
                },
                "match": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=:|{|$)"
              },
              {
                "match": "DLLEXPORT",
                "name": "entity.name.other.preprocessor.macro.predefined.DLLEXPORT.cpp"
              },
              {
                "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
                "name": "entity.name.other.preprocessor.macro.predefined.probably.$0.cpp"
              }
            ]
          },
          "12": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "13": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "14": {
            "name": "comment.block.cpp"
          },
          "15": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "16": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "17": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "18": {
            "name": "comment.block.cpp"
          },
          "19": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "20": {
            "name": "punctuation.separator.colon.inheritance.cpp"
          }
        },
        "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.statement.cpp"
          },
          "2": {
            "name": "punctuation.terminator.statement.cpp"
          }
        },
        "name": "meta.block.struct.cpp",
        "patterns": [
          {
            "begin": "\\G ?",
            "beginCaptures": {},
            "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.begin.bracket.curly.struct.cpp"
              }
            },
            "name": "meta.head.struct.cpp",
            "patterns": [
              {
                "include": "#ever_present_context"
              },
              {
                "include": "#inheritance_context"
              },
              {
                "include": "#template_call_range"
              }
            ]
          },
          {
            "begin": "(?<=\\{|<%|\\?\\?<)",
            "beginCaptures": {},
            "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.end.bracket.curly.struct.cpp"
              }
            },
            "name": "meta.body.struct.cpp",
            "patterns": [
              {
                "include": "#function_pointer"
              },
              {
                "include": "#static_assert"
              },
              {
                "include": "#constructor_inline"
              },
              {
                "include": "#destructor_inline"
              },
              {
                "include": "$self"
              }
            ]
          },
          {
            "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
            "beginCaptures": {},
            "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
            "endCaptures": {},
            "name": "meta.tail.struct.cpp",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          }
        ]
      },
      "switch_conditional_parentheses": {
        "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
        "beginCaptures": {
          "1": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "5": {
            "name": "punctuation.section.parens.begin.bracket.round.conditional.switch.cpp"
          }
        },
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.parens.end.bracket.round.conditional.switch.cpp"
          }
        },
        "name": "meta.conditional.switch.cpp",
        "patterns": [
          {
            "include": "#evaluation_context"
          }
        ]
      },
      "switch_statement": {
        "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)switch(?!\\w))",
        "beginCaptures": {
          "0": {
            "name": "meta.head.switch.cpp"
          },
          "1": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "5": {
            "name": "keyword.control.switch.cpp"
          }
        },
        "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.block.switch.cpp",
        "patterns": [
          {
            "begin": "\\G ?",
            "beginCaptures": {},
            "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.begin.bracket.curly.switch.cpp"
              }
            },
            "name": "meta.head.switch.cpp",
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
            "beginCaptures": {},
            "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.end.bracket.curly.switch.cpp"
              }
            },
            "name": "meta.body.switch.cpp",
            "patterns": [
              {
                "include": "#default_statement"
              },
              {
                "include": "#case_statement"
              },
              {
                "include": "$self"
              }
            ]
          },
          {
            "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
            "beginCaptures": {},
            "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
            "endCaptures": {},
            "name": "meta.tail.switch.cpp",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          }
        ]
      },
      "template_call_context": {
        "patterns": [
          {
            "include": "#ever_present_context"
          },
          {
            "include": "#template_call_range"
          },
          {
            "include": "#storage_types"
          },
          {
            "include": "source.cpp#language_constants"
          },
          {
            "include": "source.cpp#scope_resolution_template_call_inner_generated"
          },
          {
            "include": "#operators"
          },
          {
            "include": "source.cpp#number_literal"
          },
          {
            "include": "#string_context"
          },
          {
            "include": "source.cpp#comma_in_template_argument"
          },
          {
            "include": "source.cpp#qualified_type"
          }
        ]
      },
      "template_call_range": {
        "begin": "<",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
          }
        },
        "end": ">|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.angle-brackets.end.template.call.cpp"
          }
        },
        "name": "meta.template.call.cpp",
        "patterns": [
          {
            "include": "#template_call_context"
          }
        ]
      },
      "template_definition": {
        "begin": "(?<!\\w)(template)(?:\\s+)?(<)",
        "beginCaptures": {
          "1": {
            "name": "storage.type.template.cpp"
          },
          "2": {
            "name": "punctuation.section.angle-brackets.begin.template.definition.cpp"
          }
        },
        "end": ">|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.angle-brackets.end.template.definition.cpp"
          }
        },
        "name": "meta.template.definition.cpp",
        "patterns": [
          {
            "begin": "(?<=\\w)(?:\\s+)?<",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
              }
            },
            "end": ">|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.end.template.call.cpp"
              }
            },
            "patterns": [
              {
                "include": "#template_call_context"
              }
            ]
          },
          {
            "include": "#template_definition_context"
          }
        ]
      },
      "template_definition_context": {
        "patterns": [
          {
            "include": "source.cpp#scope_resolution_template_definition_inner_generated"
          },
          {
            "include": "source.cpp#template_definition_argument"
          },
          {
            "include": "source.cpp#template_argument_defaulted"
          },
          {
            "include": "source.cpp#template_call_innards"
          },
          {
            "include": "#evaluation_context"
          }
        ]
      },
      "ternary_operator": {
        "applyEndPatternLast": 1,
        "begin": "\\?",
        "beginCaptures": {
          "0": {
            "name": "keyword.operator.ternary.cpp"
          }
        },
        "end": ":|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "keyword.operator.ternary.cpp"
          }
        },
        "patterns": [
          {
            "include": "#ever_present_context"
          },
          {
            "include": "#string_context"
          },
          {
            "include": "source.cpp#number_literal"
          },
          {
            "include": "#method_access"
          },
          {
            "include": "source.cpp#member_access"
          },
          {
            "include": "source.cpp#predefined_macros"
          },
          {
            "include": "#operators"
          },
          {
            "include": "source.cpp#memory_operators"
          },
          {
            "include": "source.cpp#wordlike_operators"
          },
          {
            "include": "source.cpp#type_casting_operators"
          },
          {
            "include": "source.cpp#control_flow_keywords"
          },
          {
            "include": "source.cpp#exception_keywords"
          },
          {
            "include": "source.cpp#the_this_keyword"
          },
          {
            "include": "source.cpp#language_constants"
          },
          {
            "include": "#builtin_storage_type_initilizer"
          },
          {
            "include": "source.cpp#qualifiers_and_specifiers_post_parameters"
          },
          {
            "include": "source.cpp#functional_specifiers_pre_parameters"
          },
          {
            "include": "#storage_types"
          },
          {
            "include": "#lambdas"
          },
          {
            "include": "#attributes_context"
          },
          {
            "include": "#parentheses"
          },
          {
            "include": "#function_call"
          },
          {
            "include": "source.cpp#scope_resolution_inner_generated"
          },
          {
            "include": "#square_brackets"
          },
          {
            "include": "source.cpp#semicolon"
          },
          {
            "include": "source.cpp#comma"
          }
        ]
      },
      "typedef_class": {
        "begin": "((?<!\\w)typedef(?!\\w))(?:\\s+)?(?=(?<!\\w)class(?!\\w))",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.typedef.cpp"
          }
        },
        "end": "(?<=;)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "patterns": [
          {
            "begin": "((?<!\\w)class(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?={)|(?:((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*+)?(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(:(?!:)))?)",
            "beginCaptures": {
              "0": {
                "name": "meta.head.class.cpp"
              },
              "1": {
                "name": "storage.type.$1.cpp"
              },
              "2": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "patterns": [
                  {
                    "include": "#attributes_context"
                  },
                  {
                    "include": "source.cpp#number_literal"
                  }
                ]
              },
              "7": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "8": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "9": {
                "name": "comment.block.cpp"
              },
              "10": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "11": {
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "storage.type.modifier.final.cpp"
                      },
                      "2": {
                        "patterns": [
                          {
                            "include": "source.cpp#inline_comment"
                          }
                        ]
                      },
                      "3": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "4": {
                        "name": "comment.block.cpp"
                      },
                      "5": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      }
                    },
                    "match": "((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "entity.name.type.class.cpp"
                      },
                      "2": {
                        "patterns": [
                          {
                            "include": "source.cpp#inline_comment"
                          }
                        ]
                      },
                      "3": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "4": {
                        "name": "comment.block.cpp"
                      },
                      "5": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      },
                      "6": {
                        "name": "storage.type.modifier.final.cpp"
                      },
                      "7": {
                        "patterns": [
                          {
                            "include": "source.cpp#inline_comment"
                          }
                        ]
                      },
                      "8": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "9": {
                        "name": "comment.block.cpp"
                      },
                      "10": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      }
                    },
                    "match": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=:|{|$)"
                  },
                  {
                    "match": "DLLEXPORT",
                    "name": "entity.name.other.preprocessor.macro.predefined.DLLEXPORT.cpp"
                  },
                  {
                    "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
                    "name": "entity.name.other.preprocessor.macro.predefined.probably.$0.cpp"
                  }
                ]
              },
              "12": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "13": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "14": {
                "name": "comment.block.cpp"
              },
              "15": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "16": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "17": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "18": {
                "name": "comment.block.cpp"
              },
              "19": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "20": {
                "name": "punctuation.separator.colon.inheritance.cpp"
              }
            },
            "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "1": {
                "name": "punctuation.terminator.statement.cpp"
              },
              "2": {
                "name": "punctuation.terminator.statement.cpp"
              }
            },
            "name": "meta.block.class.cpp",
            "patterns": [
              {
                "begin": "\\G ?",
                "beginCaptures": {},
                "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.block.begin.bracket.curly.class.cpp"
                  }
                },
                "name": "meta.head.class.cpp",
                "patterns": [
                  {
                    "include": "#ever_present_context"
                  },
                  {
                    "include": "#inheritance_context"
                  },
                  {
                    "include": "#template_call_range"
                  }
                ]
              },
              {
                "begin": "(?<=\\{|<%|\\?\\?<)",
                "beginCaptures": {},
                "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.block.end.bracket.curly.class.cpp"
                  }
                },
                "name": "meta.body.class.cpp",
                "patterns": [
                  {
                    "include": "#function_pointer"
                  },
                  {
                    "include": "#static_assert"
                  },
                  {
                    "include": "#constructor_inline"
                  },
                  {
                    "include": "#destructor_inline"
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
                "beginCaptures": {},
                "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
                "endCaptures": {},
                "name": "meta.tail.class.cpp",
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "patterns": [
                          {
                            "match": "\\*",
                            "name": "storage.modifier.pointer.cpp"
                          },
                          {
                            "captures": {
                              "1": {
                                "patterns": [
                                  {
                                    "include": "source.cpp#inline_comment"
                                  }
                                ]
                              },
                              "2": {
                                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                              },
                              "3": {
                                "name": "comment.block.cpp"
                              },
                              "4": {
                                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                              }
                            },
                            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
                            "name": "invalid.illegal.reference-type.cpp"
                          },
                          {
                            "match": "\\&",
                            "name": "storage.modifier.reference.cpp"
                          }
                        ]
                      },
                      "2": {
                        "patterns": [
                          {
                            "include": "source.cpp#inline_comment"
                          }
                        ]
                      },
                      "3": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "4": {
                        "name": "comment.block.cpp"
                      },
                      "5": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      },
                      "6": {
                        "patterns": [
                          {
                            "include": "source.cpp#inline_comment"
                          }
                        ]
                      },
                      "7": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "8": {
                        "name": "comment.block.cpp"
                      },
                      "9": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      },
                      "10": {
                        "patterns": [
                          {
                            "include": "source.cpp#inline_comment"
                          }
                        ]
                      },
                      "11": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "12": {
                        "name": "comment.block.cpp"
                      },
                      "13": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      },
                      "14": {
                        "name": "entity.name.type.alias.cpp"
                      }
                    },
                    "match": "(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))"
                  },
                  {
                    "match": ","
                  }
                ]
              }
            ]
          }
        ]
      },
      "typedef_function_pointer": {
        "begin": "((?<!\\w)typedef(?!\\w))(?:\\s+)?(?=.*\\(\\*\\s*(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\s*\\))",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.typedef.cpp"
          }
        },
        "end": "(?<=;)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "patterns": [
          {
            "begin": "(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()(\\*)(?:\\s+)?((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)?)(?:\\s+)?(?:(\\[)(\\w*)(\\])(?:\\s+)?)*(\\))(?:\\s+)?(\\()",
            "beginCaptures": {
              "1": {
                "name": "meta.qualified_type.cpp",
                "patterns": [
                  {
                    "match": "::",
                    "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
                  },
                  {
                    "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
                    "name": "storage.type.$0.cpp"
                  },
                  {
                    "include": "#attributes_context"
                  },
                  {
                    "include": "#storage_types"
                  },
                  {
                    "include": "source.cpp#number_literal"
                  },
                  {
                    "include": "#string_context"
                  },
                  {
                    "include": "source.cpp#comma"
                  },
                  {
                    "include": "source.cpp#scope_resolution_inner_generated"
                  },
                  {
                    "begin": "<",
                    "beginCaptures": {
                      "0": {
                        "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
                      }
                    },
                    "end": ">|(?=(?<!\\\\)\n)",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.section.angle-brackets.end.template.call.cpp"
                      }
                    },
                    "name": "meta.template.call.cpp",
                    "patterns": [
                      {
                        "include": "#template_call_context"
                      }
                    ]
                  },
                  {
                    "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
                    "name": "entity.name.type.cpp"
                  }
                ]
              },
              "2": {
                "patterns": [
                  {
                    "include": "#attributes_context"
                  },
                  {
                    "include": "source.cpp#number_literal"
                  }
                ]
              },
              "3": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "5": {
                "name": "comment.block.cpp"
              },
              "6": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "7": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "8": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "9": {
                "name": "comment.block.cpp"
              },
              "10": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "11": {
                "patterns": [
                  {
                    "match": "::",
                    "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
                  },
                  {
                    "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                    "name": "entity.name.scope-resolution.type.cpp"
                  },
                  {
                    "include": "#template_call_range"
                  }
                ]
              },
              "12": {
                "patterns": [
                  {
                    "include": "#template_call_range"
                  }
                ]
              },
              "13": {},
              "14": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "15": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "16": {
                "name": "comment.block.cpp"
              },
              "17": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "18": {},
              "19": {
                "patterns": [
                  {
                    "match": "\\*",
                    "name": "storage.modifier.pointer.cpp"
                  },
                  {
                    "captures": {
                      "1": {
                        "patterns": [
                          {
                            "include": "source.cpp#inline_comment"
                          }
                        ]
                      },
                      "2": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "3": {
                        "name": "comment.block.cpp"
                      },
                      "4": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      }
                    },
                    "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
                    "name": "invalid.illegal.reference-type.cpp"
                  },
                  {
                    "match": "\\&",
                    "name": "storage.modifier.reference.cpp"
                  }
                ]
              },
              "20": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "21": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "22": {
                "name": "comment.block.cpp"
              },
              "23": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "24": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "25": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "26": {
                "name": "comment.block.cpp"
              },
              "27": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "28": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "29": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "30": {
                "name": "comment.block.cpp"
              },
              "31": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "32": {
                "name": "punctuation.section.parens.begin.bracket.round.function.pointer.cpp"
              },
              "33": {
                "name": "punctuation.definition.function.pointer.dereference.cpp"
              },
              "34": {
                "name": "entity.name.type.alias.cpp entity.name.type.pointer.function.cpp"
              },
              "35": {
                "name": "punctuation.definition.begin.bracket.square.cpp"
              },
              "36": {
                "patterns": [
                  {
                    "include": "#evaluation_context"
                  }
                ]
              },
              "37": {
                "name": "punctuation.definition.end.bracket.square.cpp"
              },
              "38": {
                "name": "punctuation.section.parens.end.bracket.round.function.pointer.cpp"
              },
              "39": {
                "name": "punctuation.section.parameters.begin.bracket.round.function.pointer.cpp"
              }
            },
            "end": "(\\))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=[{=,);>]|\\n)(?!\\()|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "1": {
                "name": "punctuation.section.parameters.end.bracket.round.function.pointer.cpp"
              },
              "2": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "patterns": [
              {
                "include": "#function_parameter_context"
              }
            ]
          }
        ]
      },
      "typedef_struct": {
        "begin": "((?<!\\w)typedef(?!\\w))(?:\\s+)?(?=(?<!\\w)struct(?!\\w))",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.typedef.cpp"
          }
        },
        "end": "(?<=;)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "patterns": [
          {
            "begin": "((?<!\\w)struct(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?={)|(?:((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*+)?(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(:(?!:)))?)",
            "beginCaptures": {
              "0": {
                "name": "meta.head.struct.cpp"
              },
              "1": {
                "name": "storage.type.$1.cpp"
              },
              "2": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "patterns": [
                  {
                    "include": "#attributes_context"
                  },
                  {
                    "include": "source.cpp#number_literal"
                  }
                ]
              },
              "7": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "8": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "9": {
                "name": "comment.block.cpp"
              },
              "10": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "11": {
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "storage.type.modifier.final.cpp"
                      },
                      "2": {
                        "patterns": [
                          {
                            "include": "source.cpp#inline_comment"
                          }
                        ]
                      },
                      "3": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "4": {
                        "name": "comment.block.cpp"
                      },
                      "5": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      }
                    },
                    "match": "((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "entity.name.type.struct.cpp"
                      },
                      "2": {
                        "patterns": [
                          {
                            "include": "source.cpp#inline_comment"
                          }
                        ]
                      },
                      "3": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "4": {
                        "name": "comment.block.cpp"
                      },
                      "5": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      },
                      "6": {
                        "name": "storage.type.modifier.final.cpp"
                      },
                      "7": {
                        "patterns": [
                          {
                            "include": "source.cpp#inline_comment"
                          }
                        ]
                      },
                      "8": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "9": {
                        "name": "comment.block.cpp"
                      },
                      "10": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      }
                    },
                    "match": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=:|{|$)"
                  },
                  {
                    "match": "DLLEXPORT",
                    "name": "entity.name.other.preprocessor.macro.predefined.DLLEXPORT.cpp"
                  },
                  {
                    "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
                    "name": "entity.name.other.preprocessor.macro.predefined.probably.$0.cpp"
                  }
                ]
              },
              "12": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "13": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "14": {
                "name": "comment.block.cpp"
              },
              "15": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "16": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "17": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "18": {
                "name": "comment.block.cpp"
              },
              "19": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "20": {
                "name": "punctuation.separator.colon.inheritance.cpp"
              }
            },
            "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "1": {
                "name": "punctuation.terminator.statement.cpp"
              },
              "2": {
                "name": "punctuation.terminator.statement.cpp"
              }
            },
            "name": "meta.block.struct.cpp",
            "patterns": [
              {
                "begin": "\\G ?",
                "beginCaptures": {},
                "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.block.begin.bracket.curly.struct.cpp"
                  }
                },
                "name": "meta.head.struct.cpp",
                "patterns": [
                  {
                    "include": "#ever_present_context"
                  },
                  {
                    "include": "#inheritance_context"
                  },
                  {
                    "include": "#template_call_range"
                  }
                ]
              },
              {
                "begin": "(?<=\\{|<%|\\?\\?<)",
                "beginCaptures": {},
                "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.block.end.bracket.curly.struct.cpp"
                  }
                },
                "name": "meta.body.struct.cpp",
                "patterns": [
                  {
                    "include": "#function_pointer"
                  },
                  {
                    "include": "#static_assert"
                  },
                  {
                    "include": "#constructor_inline"
                  },
                  {
                    "include": "#destructor_inline"
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
                "beginCaptures": {},
                "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
                "endCaptures": {},
                "name": "meta.tail.struct.cpp",
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "patterns": [
                          {
                            "match": "\\*",
                            "name": "storage.modifier.pointer.cpp"
                          },
                          {
                            "captures": {
                              "1": {
                                "patterns": [
                                  {
                                    "include": "source.cpp#inline_comment"
                                  }
                                ]
                              },
                              "2": {
                                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                              },
                              "3": {
                                "name": "comment.block.cpp"
                              },
                              "4": {
                                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                              }
                            },
                            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
                            "name": "invalid.illegal.reference-type.cpp"
                          },
                          {
                            "match": "\\&",
                            "name": "storage.modifier.reference.cpp"
                          }
                        ]
                      },
                      "2": {
                        "patterns": [
                          {
                            "include": "source.cpp#inline_comment"
                          }
                        ]
                      },
                      "3": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "4": {
                        "name": "comment.block.cpp"
                      },
                      "5": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      },
                      "6": {
                        "patterns": [
                          {
                            "include": "source.cpp#inline_comment"
                          }
                        ]
                      },
                      "7": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "8": {
                        "name": "comment.block.cpp"
                      },
                      "9": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      },
                      "10": {
                        "patterns": [
                          {
                            "include": "source.cpp#inline_comment"
                          }
                        ]
                      },
                      "11": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "12": {
                        "name": "comment.block.cpp"
                      },
                      "13": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      },
                      "14": {
                        "name": "entity.name.type.alias.cpp"
                      }
                    },
                    "match": "(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))"
                  },
                  {
                    "match": ","
                  }
                ]
              }
            ]
          }
        ]
      },
      "typedef_union": {
        "begin": "((?<!\\w)typedef(?!\\w))(?:\\s+)?(?=(?<!\\w)union(?!\\w))",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.typedef.cpp"
          }
        },
        "end": "(?<=;)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "patterns": [
          {
            "begin": "((?<!\\w)union(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?={)|(?:((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*+)?(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(:(?!:)))?)",
            "beginCaptures": {
              "0": {
                "name": "meta.head.union.cpp"
              },
              "1": {
                "name": "storage.type.$1.cpp"
              },
              "2": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "patterns": [
                  {
                    "include": "#attributes_context"
                  },
                  {
                    "include": "source.cpp#number_literal"
                  }
                ]
              },
              "7": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "8": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "9": {
                "name": "comment.block.cpp"
              },
              "10": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "11": {
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "name": "storage.type.modifier.final.cpp"
                      },
                      "2": {
                        "patterns": [
                          {
                            "include": "source.cpp#inline_comment"
                          }
                        ]
                      },
                      "3": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "4": {
                        "name": "comment.block.cpp"
                      },
                      "5": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      }
                    },
                    "match": "((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))"
                  },
                  {
                    "captures": {
                      "1": {
                        "name": "entity.name.type.union.cpp"
                      },
                      "2": {
                        "patterns": [
                          {
                            "include": "source.cpp#inline_comment"
                          }
                        ]
                      },
                      "3": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "4": {
                        "name": "comment.block.cpp"
                      },
                      "5": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      },
                      "6": {
                        "name": "storage.type.modifier.final.cpp"
                      },
                      "7": {
                        "patterns": [
                          {
                            "include": "source.cpp#inline_comment"
                          }
                        ]
                      },
                      "8": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "9": {
                        "name": "comment.block.cpp"
                      },
                      "10": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      }
                    },
                    "match": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=:|{|$)"
                  },
                  {
                    "match": "DLLEXPORT",
                    "name": "entity.name.other.preprocessor.macro.predefined.DLLEXPORT.cpp"
                  },
                  {
                    "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
                    "name": "entity.name.other.preprocessor.macro.predefined.probably.$0.cpp"
                  }
                ]
              },
              "12": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "13": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "14": {
                "name": "comment.block.cpp"
              },
              "15": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "16": {
                "patterns": [
                  {
                    "include": "source.cpp#inline_comment"
                  }
                ]
              },
              "17": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "18": {
                "name": "comment.block.cpp"
              },
              "19": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "20": {
                "name": "punctuation.separator.colon.inheritance.cpp"
              }
            },
            "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "1": {
                "name": "punctuation.terminator.statement.cpp"
              },
              "2": {
                "name": "punctuation.terminator.statement.cpp"
              }
            },
            "name": "meta.block.union.cpp",
            "patterns": [
              {
                "begin": "\\G ?",
                "beginCaptures": {},
                "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.block.begin.bracket.curly.union.cpp"
                  }
                },
                "name": "meta.head.union.cpp",
                "patterns": [
                  {
                    "include": "#ever_present_context"
                  },
                  {
                    "include": "#inheritance_context"
                  },
                  {
                    "include": "#template_call_range"
                  }
                ]
              },
              {
                "begin": "(?<=\\{|<%|\\?\\?<)",
                "beginCaptures": {},
                "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.block.end.bracket.curly.union.cpp"
                  }
                },
                "name": "meta.body.union.cpp",
                "patterns": [
                  {
                    "include": "#function_pointer"
                  },
                  {
                    "include": "#static_assert"
                  },
                  {
                    "include": "#constructor_inline"
                  },
                  {
                    "include": "#destructor_inline"
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
                "beginCaptures": {},
                "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
                "endCaptures": {},
                "name": "meta.tail.union.cpp",
                "patterns": [
                  {
                    "captures": {
                      "1": {
                        "patterns": [
                          {
                            "match": "\\*",
                            "name": "storage.modifier.pointer.cpp"
                          },
                          {
                            "captures": {
                              "1": {
                                "patterns": [
                                  {
                                    "include": "source.cpp#inline_comment"
                                  }
                                ]
                              },
                              "2": {
                                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                              },
                              "3": {
                                "name": "comment.block.cpp"
                              },
                              "4": {
                                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                              }
                            },
                            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
                            "name": "invalid.illegal.reference-type.cpp"
                          },
                          {
                            "match": "\\&",
                            "name": "storage.modifier.reference.cpp"
                          }
                        ]
                      },
                      "2": {
                        "patterns": [
                          {
                            "include": "source.cpp#inline_comment"
                          }
                        ]
                      },
                      "3": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "4": {
                        "name": "comment.block.cpp"
                      },
                      "5": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      },
                      "6": {
                        "patterns": [
                          {
                            "include": "source.cpp#inline_comment"
                          }
                        ]
                      },
                      "7": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "8": {
                        "name": "comment.block.cpp"
                      },
                      "9": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      },
                      "10": {
                        "patterns": [
                          {
                            "include": "source.cpp#inline_comment"
                          }
                        ]
                      },
                      "11": {
                        "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                      },
                      "12": {
                        "name": "comment.block.cpp"
                      },
                      "13": {
                        "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                      },
                      "14": {
                        "name": "entity.name.type.alias.cpp"
                      }
                    },
                    "match": "(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))"
                  },
                  {
                    "match": ","
                  }
                ]
              }
            ]
          }
        ]
      },
      "typeid_operator": {
        "begin": "((?<!\\w)typeid(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.functionlike.cpp keyword.operator.typeid.cpp"
          },
          "2": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "name": "punctuation.section.arguments.begin.bracket.round.operator.typeid.cpp"
          }
        },
        "contentName": "meta.arguments.operator.typeid",
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.operator.typeid.cpp"
          }
        },
        "patterns": [
          {
            "include": "#evaluation_context"
          }
        ]
      },
      "union_block": {
        "begin": "((?<!\\w)union(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?={)|(?:((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*+)?(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(:(?!:)))?)",
        "beginCaptures": {
          "0": {
            "name": "meta.head.union.cpp"
          },
          "1": {
            "name": "storage.type.$1.cpp"
          },
          "2": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "patterns": [
              {
                "include": "#attributes_context"
              },
              {
                "include": "source.cpp#number_literal"
              }
            ]
          },
          "7": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "9": {
            "name": "comment.block.cpp"
          },
          "10": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "11": {
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "storage.type.modifier.final.cpp"
                  },
                  "2": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "3": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "4": {
                    "name": "comment.block.cpp"
                  },
                  "5": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  }
                },
                "match": "((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))"
              },
              {
                "captures": {
                  "1": {
                    "name": "entity.name.type.union.cpp"
                  },
                  "2": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "3": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "4": {
                    "name": "comment.block.cpp"
                  },
                  "5": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  },
                  "6": {
                    "name": "storage.type.modifier.final.cpp"
                  },
                  "7": {
                    "patterns": [
                      {
                        "include": "source.cpp#inline_comment"
                      }
                    ]
                  },
                  "8": {
                    "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                  },
                  "9": {
                    "name": "comment.block.cpp"
                  },
                  "10": {
                    "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                  }
                },
                "match": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=:|{|$)"
              },
              {
                "match": "DLLEXPORT",
                "name": "entity.name.other.preprocessor.macro.predefined.DLLEXPORT.cpp"
              },
              {
                "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
                "name": "entity.name.other.preprocessor.macro.predefined.probably.$0.cpp"
              }
            ]
          },
          "12": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "13": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "14": {
            "name": "comment.block.cpp"
          },
          "15": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "16": {
            "patterns": [
              {
                "include": "source.cpp#inline_comment"
              }
            ]
          },
          "17": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "18": {
            "name": "comment.block.cpp"
          },
          "19": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "20": {
            "name": "punctuation.separator.colon.inheritance.cpp"
          }
        },
        "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.statement.cpp"
          },
          "2": {
            "name": "punctuation.terminator.statement.cpp"
          }
        },
        "name": "meta.block.union.cpp",
        "patterns": [
          {
            "begin": "\\G ?",
            "beginCaptures": {},
            "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.begin.bracket.curly.union.cpp"
              }
            },
            "name": "meta.head.union.cpp",
            "patterns": [
              {
                "include": "#ever_present_context"
              },
              {
                "include": "#inheritance_context"
              },
              {
                "include": "#template_call_range"
              }
            ]
          },
          {
            "begin": "(?<=\\{|<%|\\?\\?<)",
            "beginCaptures": {},
            "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.end.bracket.curly.union.cpp"
              }
            },
            "name": "meta.body.union.cpp",
            "patterns": [
              {
                "include": "#function_pointer"
              },
              {
                "include": "#static_assert"
              },
              {
                "include": "#constructor_inline"
              },
              {
                "include": "#destructor_inline"
              },
              {
                "include": "$self"
              }
            ]
          },
          {
            "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
            "beginCaptures": {},
            "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
            "endCaptures": {},
            "name": "meta.tail.union.cpp",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          }
        ]
      },
      "using_namespace": {
        "begin": "(?<!\\w)(using)\\s+(namespace)\\s+((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:\"(?:[^\"]*|\\\\\")\")|(?:'(?:[^']*|\\\\')')|\\g<6>|(?:(?:[^'\"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)?((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(?=;|\\n)",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.using.directive.cpp"
          },
          "2": {
            "name": "keyword.other.namespace.directive.cpp storage.type.namespace.directive.cpp"
          },
          "3": {
            "patterns": [
              {
                "include": "source.cpp#scope_resolution_namespace_using_inner_generated"
              }
            ]
          },
          "4": {
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.namespace.using.cpp"
          },
          "5": {
            "patterns": [
              {
                "include": "#template_call_range"
              }
            ]
          },
          "6": {},
          "7": {
            "name": "entity.name.namespace.cpp"
          }
        },
        "end": ";|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.statement.cpp"
          }
        },
        "name": "meta.using-namespace.cpp"
      }
    },
    "scopeName": "source.cpp.embedded.macro",
    "embeddedLangs": [
      "regexp",
      "glsl",
      "sql"
    ]
  }
])