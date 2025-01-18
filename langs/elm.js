/** Shiki Language: elm */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push([
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
    "displayName": "Elm",
    "fileTypes": [
      "elm"
    ],
    "name": "elm",
    "patterns": [
      {
        "include": "#import"
      },
      {
        "include": "#module"
      },
      {
        "include": "#debug"
      },
      {
        "include": "#comments"
      },
      {
        "match": "\\b(_)\\b",
        "name": "keyword.unused.elm"
      },
      {
        "include": "#type-signature"
      },
      {
        "include": "#type-declaration"
      },
      {
        "include": "#type-alias-declaration"
      },
      {
        "include": "#string-triple"
      },
      {
        "include": "#string-quote"
      },
      {
        "include": "#char"
      },
      {
        "comment": "Floats are always decimal",
        "match": "\\b([0-9]+\\.[0-9]+([eE][+-]?[0-9]+)?|[0-9]+[eE][+-]?[0-9]+)\\b",
        "name": "constant.numeric.float.elm"
      },
      {
        "match": "\\b([0-9]+)\\b",
        "name": "constant.numeric.elm"
      },
      {
        "match": "\\b(0x[0-9a-fA-F]+)\\b",
        "name": "constant.numeric.elm"
      },
      {
        "include": "#glsl"
      },
      {
        "include": "#record-prefix"
      },
      {
        "include": "#module-prefix"
      },
      {
        "include": "#constructor"
      },
      {
        "captures": {
          "1": {
            "name": "punctuation.bracket.elm"
          },
          "2": {
            "name": "record.name.elm"
          },
          "3": {
            "name": "keyword.pipe.elm"
          },
          "4": {
            "name": "entity.name.record.field.elm"
          }
        },
        "match": "(\\{)\\s+([a-z][a-zA-Z0-9_]*)\\s+(\\|)\\s+([a-z][a-zA-Z0-9_]*)",
        "name": "meta.record.field.update.elm"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.pipe.elm"
          },
          "2": {
            "name": "entity.name.record.field.elm"
          },
          "3": {
            "name": "keyword.operator.assignment.elm"
          }
        },
        "match": "(\\|)\\s+([a-z][a-zA-Z0-9_]*)\\s+(\\=)",
        "name": "meta.record.field.update.elm"
      },
      {
        "captures": {
          "1": {
            "name": "punctuation.bracket.elm"
          },
          "2": {
            "name": "record.name.elm"
          }
        },
        "match": "(\\{)\\s+([a-z][a-zA-Z0-9_]*)\\s+$",
        "name": "meta.record.field.update.elm"
      },
      {
        "captures": {
          "1": {
            "name": "punctuation.bracket.elm"
          },
          "2": {
            "name": "entity.name.record.field.elm"
          },
          "3": {
            "name": "keyword.operator.assignment.elm"
          }
        },
        "match": "(\\{)\\s+([a-z][a-zA-Z0-9_]*)\\s+(\\=)",
        "name": "meta.record.field.elm"
      },
      {
        "captures": {
          "1": {
            "name": "punctuation.separator.comma.elm"
          },
          "2": {
            "name": "entity.name.record.field.elm"
          },
          "3": {
            "name": "keyword.operator.assignment.elm"
          }
        },
        "match": "(,)\\s+([a-z][a-zA-Z0-9_]*)\\s+(\\=)",
        "name": "meta.record.field.elm"
      },
      {
        "match": "(\\}|\\{)",
        "name": "punctuation.bracket.elm"
      },
      {
        "include": "#unit"
      },
      {
        "include": "#comma"
      },
      {
        "include": "#parens"
      },
      {
        "match": "(->)",
        "name": "keyword.operator.arrow.elm"
      },
      {
        "include": "#infix_op"
      },
      {
        "match": "(\\=|\\:|\\||\\\\)",
        "name": "keyword.other.elm"
      },
      {
        "match": "\\b(type|as|port|exposing|alias|infixl|infixr|infix)\\s+",
        "name": "keyword.other.elm"
      },
      {
        "match": "\\b(if|then|else|case|of|let|in)\\s+",
        "name": "keyword.control.elm"
      },
      {
        "include": "#record-accessor"
      },
      {
        "include": "#top_level_value"
      },
      {
        "include": "#value"
      },
      {
        "include": "#period"
      },
      {
        "include": "#square_brackets"
      }
    ],
    "repository": {
      "block_comment": {
        "applyEndPatternLast": 1,
        "begin": "\\{-(?!#)",
        "captures": {
          "0": {
            "name": "punctuation.definition.comment.elm"
          }
        },
        "end": "-\\}",
        "name": "comment.block.elm",
        "patterns": [
          {
            "include": "#block_comment"
          }
        ]
      },
      "char": {
        "begin": "'",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.char.begin.elm"
          }
        },
        "end": "'",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.char.end.elm"
          }
        },
        "name": "string.quoted.single.elm",
        "patterns": [
          {
            "match": "\\\\(NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\\"'\\&]|x[0-9a-fA-F]{1,5})",
            "name": "constant.character.escape.elm"
          },
          {
            "match": "\\^[A-Z@\\[\\]\\\\\\^_]",
            "name": "constant.character.escape.control.elm"
          }
        ]
      },
      "comma": {
        "match": "(,)",
        "name": "punctuation.separator.comma.elm"
      },
      "comments": {
        "patterns": [
          {
            "begin": "--",
            "captures": {
              "1": {
                "name": "punctuation.definition.comment.elm"
              }
            },
            "end": "$",
            "name": "comment.line.double-dash.elm"
          },
          {
            "include": "#block_comment"
          }
        ]
      },
      "constructor": {
        "match": "\\b[A-Z][a-zA-Z0-9_]*\\b",
        "name": "constant.type-constructor.elm"
      },
      "debug": {
        "match": "\\b(Debug)\\b",
        "name": "invalid.illegal.debug.elm"
      },
      "glsl": {
        "begin": "(\\[)(glsl)(\\|)",
        "beginCaptures": {
          "1": {
            "name": "entity.glsl.bracket.elm"
          },
          "2": {
            "name": "entity.glsl.name.elm"
          },
          "3": {
            "name": "entity.glsl.bracket.elm"
          }
        },
        "end": "(\\|\\])",
        "endCaptures": {
          "1": {
            "name": "entity.glsl.bracket.elm"
          }
        },
        "name": "meta.embedded.block.glsl",
        "patterns": [
          {
            "include": "source.glsl"
          }
        ]
      },
      "import": {
        "begin": "^\\b(import)\\s+",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.import.elm"
          }
        },
        "end": "\\n(?!\\s)",
        "name": "meta.import.elm",
        "patterns": [
          {
            "match": "(as|exposing)",
            "name": "keyword.control.elm"
          },
          {
            "include": "#module_chunk"
          },
          {
            "include": "#period"
          },
          {
            "match": "\\s+",
            "name": "punctuation.spaces.elm"
          },
          {
            "include": "#module-exports"
          }
        ]
      },
      "infix_op": {
        "match": "(</>|<\\?>|<\\||<=|\\|\\||&&|>=|\\|>|\\|=|\\|\\.|\\+\\+|::|/=|==|//|>>|<<|<|>|\\^|\\+|-|/|\\*)",
        "name": "keyword.operator.elm"
      },
      "module": {
        "begin": "^\\b((port |effect )?module)\\s+",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.elm"
          }
        },
        "end": "\\n(?!\\s)",
        "endCaptures": {
          "1": {
            "name": "keyword.other.elm"
          }
        },
        "name": "meta.declaration.module.elm",
        "patterns": [
          {
            "include": "#module_chunk"
          },
          {
            "include": "#period"
          },
          {
            "match": "(exposing)",
            "name": "keyword.other.elm"
          },
          {
            "match": "\\s+",
            "name": "punctuation.spaces.elm"
          },
          {
            "include": "#module-exports"
          }
        ]
      },
      "module-exports": {
        "begin": "(\\()",
        "beginCaptures": {
          "1": {
            "name": "punctuation.parens.module-export.elm"
          }
        },
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "punctuation.parens.module-export.elm"
          }
        },
        "name": "meta.declaration.exports.elm",
        "patterns": [
          {
            "match": "\\b[a-z][a-zA-Z_'0-9]*",
            "name": "entity.name.function.elm"
          },
          {
            "match": "\\b[A-Z][A-Za-z_'0-9]*",
            "name": "storage.type.elm"
          },
          {
            "match": ",",
            "name": "punctuation.separator.comma.elm"
          },
          {
            "match": "\\s+",
            "name": "punctuation.spaces.elm"
          },
          {
            "include": "#comma"
          },
          {
            "match": "\\(\\.\\.\\)",
            "name": "punctuation.parens.ellipses.elm"
          },
          {
            "match": "\\.\\.",
            "name": "punctuation.parens.ellipses.elm"
          },
          {
            "include": "#infix_op"
          },
          {
            "comment": "So named because I don't know what to call this.",
            "match": "\\(.*?\\)",
            "name": "meta.other.unknown.elm"
          }
        ]
      },
      "module-prefix": {
        "captures": {
          "1": {
            "name": "support.module.elm"
          },
          "2": {
            "name": "keyword.other.period.elm"
          }
        },
        "match": "([A-Z][a-zA-Z0-9_]*)(\\.)",
        "name": "meta.module.name.elm"
      },
      "module_chunk": {
        "match": "[A-Z][a-zA-Z0-9_]*",
        "name": "support.module.elm"
      },
      "parens": {
        "match": "(\\(|\\))",
        "name": "punctuation.parens.elm"
      },
      "period": {
        "match": "[.]",
        "name": "keyword.other.period.elm"
      },
      "record-accessor": {
        "captures": {
          "1": {
            "name": "keyword.other.period.elm"
          },
          "2": {
            "name": "entity.name.record.field.accessor.elm"
          }
        },
        "match": "(\\.)([a-z][a-zA-Z0-9_]*)",
        "name": "meta.record.accessor"
      },
      "record-prefix": {
        "captures": {
          "1": {
            "name": "record.name.elm"
          },
          "2": {
            "name": "keyword.other.period.elm"
          },
          "3": {
            "name": "entity.name.record.field.accessor.elm"
          }
        },
        "match": "([a-z][a-zA-Z0-9_]*)(\\.)([a-z][a-zA-Z0-9_]*)",
        "name": "record.accessor.elm"
      },
      "square_brackets": {
        "match": "[\\[\\]]",
        "name": "punctuation.definition.list.elm"
      },
      "string-quote": {
        "begin": "\"",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.elm"
          }
        },
        "end": "\"",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.elm"
          }
        },
        "name": "string.quoted.double.elm",
        "patterns": [
          {
            "match": "\\\\(NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\\"'\\&]|x[0-9a-fA-F]{1,5})",
            "name": "constant.character.escape.elm"
          },
          {
            "match": "\\^[A-Z@\\[\\]\\\\\\^_]",
            "name": "constant.character.escape.control.elm"
          }
        ]
      },
      "string-triple": {
        "begin": "\"\"\"",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.elm"
          }
        },
        "end": "\"\"\"",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.elm"
          }
        },
        "name": "string.quoted.triple.elm",
        "patterns": [
          {
            "match": "\\\\(NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\\"'\\&]|x[0-9a-fA-F]{1,5})",
            "name": "constant.character.escape.elm"
          },
          {
            "match": "\\^[A-Z@\\[\\]\\\\\\^_]",
            "name": "constant.character.escape.control.elm"
          }
        ]
      },
      "top_level_value": {
        "match": "^[a-z][a-zA-Z0-9_]*\\b",
        "name": "entity.name.function.top_level.elm"
      },
      "type-alias-declaration": {
        "begin": "^(type\\s+)(alias\\s+)([A-Z][a-zA-Z0-9_']*)\\s+",
        "beginCaptures": {
          "1": {
            "name": "keyword.type.elm"
          },
          "2": {
            "name": "keyword.type-alias.elm"
          },
          "3": {
            "name": "storage.type.elm"
          }
        },
        "end": "^(?=\\S)",
        "name": "meta.function.type-declaration.elm",
        "patterns": [
          {
            "match": "\\n\\s+",
            "name": "punctuation.spaces.elm"
          },
          {
            "match": "\\=",
            "name": "keyword.operator.assignment.elm"
          },
          {
            "include": "#module-prefix"
          },
          {
            "match": "\\b[A-Z][a-zA-Z0-9_]*\\b",
            "name": "storage.type.elm"
          },
          {
            "match": "\\b[a-z][a-zA-Z0-9_]*\\b",
            "name": "variable.type.elm"
          },
          {
            "include": "#comments"
          },
          {
            "include": "#type-record"
          }
        ]
      },
      "type-declaration": {
        "begin": "^(type\\s+)([A-Z][a-zA-Z0-9_']*)\\s+",
        "beginCaptures": {
          "1": {
            "name": "keyword.type.elm"
          },
          "2": {
            "name": "storage.type.elm"
          }
        },
        "end": "^(?=\\S)",
        "name": "meta.function.type-declaration.elm",
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "constant.type-constructor.elm"
              }
            },
            "match": "^\\s*([A-Z][a-zA-Z0-9_]*)\\b",
            "name": "meta.record.field.elm"
          },
          {
            "match": "\\s+",
            "name": "punctuation.spaces.elm"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.operator.assignment.elm"
              },
              "2": {
                "name": "constant.type-constructor.elm"
              }
            },
            "match": "(\\=|\\|)\\s+([A-Z][a-zA-Z0-9_]*)\\b",
            "name": "meta.record.field.elm"
          },
          {
            "match": "\\=",
            "name": "keyword.operator.assignment.elm"
          },
          {
            "match": "\\-\\>",
            "name": "keyword.operator.arrow.elm"
          },
          {
            "include": "#module-prefix"
          },
          {
            "match": "\\b[a-z][a-zA-Z0-9_]*\\b",
            "name": "variable.type.elm"
          },
          {
            "match": "\\b[A-Z][a-zA-Z0-9_]*\\b",
            "name": "storage.type.elm"
          },
          {
            "include": "#comments"
          },
          {
            "include": "#type-record"
          }
        ]
      },
      "type-record": {
        "begin": "(\\{)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.section.braces.begin"
          }
        },
        "end": "(\\})",
        "endCaptures": {
          "1": {
            "name": "punctuation.section.braces.end"
          }
        },
        "name": "meta.function.type-record.elm",
        "patterns": [
          {
            "match": "\\s+",
            "name": "punctuation.spaces.elm"
          },
          {
            "match": "->",
            "name": "keyword.operator.arrow.elm"
          },
          {
            "captures": {
              "1": {
                "name": "entity.name.record.field.elm"
              },
              "2": {
                "name": "keyword.other.elm"
              }
            },
            "match": "([a-z][a-zA-Z0-9_]*)\\s+(\\:)",
            "name": "meta.record.field.elm"
          },
          {
            "match": "\\,",
            "name": "punctuation.separator.comma.elm"
          },
          {
            "include": "#module-prefix"
          },
          {
            "match": "\\b[a-z][a-zA-Z0-9_]*\\b",
            "name": "variable.type.elm"
          },
          {
            "match": "\\b[A-Z][a-zA-Z0-9_]*\\b",
            "name": "storage.type.elm"
          },
          {
            "include": "#comments"
          },
          {
            "include": "#type-record"
          }
        ]
      },
      "type-signature": {
        "begin": "^(port\\s+)?([a-z_][a-zA-Z0-9_']*)\\s+(\\:)",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.port.elm"
          },
          "2": {
            "name": "entity.name.function.elm"
          },
          "3": {
            "name": "keyword.other.colon.elm"
          }
        },
        "end": "((^(?=[a-z]))|^$)",
        "name": "meta.function.type-declaration.elm",
        "patterns": [
          {
            "include": "#type-signature-chunk"
          }
        ]
      },
      "type-signature-chunk": {
        "patterns": [
          {
            "match": "->",
            "name": "keyword.operator.arrow.elm"
          },
          {
            "match": "\\s+",
            "name": "punctuation.spaces.elm"
          },
          {
            "include": "#module-prefix"
          },
          {
            "match": "\\b[a-z][a-zA-Z0-9_]*\\b",
            "name": "variable.type.elm"
          },
          {
            "match": "\\b[A-Z][a-zA-Z0-9_]*\\b",
            "name": "storage.type.elm"
          },
          {
            "match": "\\(\\)",
            "name": "constant.unit.elm"
          },
          {
            "include": "#comma"
          },
          {
            "include": "#parens"
          },
          {
            "include": "#comments"
          },
          {
            "include": "#type-record"
          }
        ]
      },
      "unit": {
        "match": "\\(\\)",
        "name": "constant.unit.elm"
      },
      "value": {
        "match": "\\b[a-z][a-zA-Z0-9_]*\\b",
        "name": "meta.value.elm"
      }
    },
    "scopeName": "source.elm",
    "embeddedLangs": [
      "glsl"
    ]
  }
])