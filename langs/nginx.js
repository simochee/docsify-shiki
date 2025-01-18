/** Shiki Language: nginx */
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
    "displayName": "Lua",
    "name": "lua",
    "patterns": [
      {
        "begin": "\\b(?:(local)\\s+)?(function)\\b(?![,:])",
        "beginCaptures": {
          "1": {
            "name": "keyword.local.lua"
          },
          "2": {
            "name": "keyword.control.lua"
          }
        },
        "end": "(?<=[\\)\\-{}\\[\\]\"'])",
        "name": "meta.function.lua",
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "begin": "(\\()",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.parameters.begin.lua"
              }
            },
            "end": "(\\))|(?=[\\-\\.{}\\[\\]\"'])",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.parameters.finish.lua"
              }
            },
            "name": "meta.parameter.lua",
            "patterns": [
              {
                "include": "#comment"
              },
              {
                "match": "[a-zA-Z_][a-zA-Z0-9_]*",
                "name": "variable.parameter.function.lua"
              },
              {
                "match": ",",
                "name": "punctuation.separator.arguments.lua"
              },
              {
                "begin": ":",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.separator.arguments.lua"
                  }
                },
                "end": "(?=[\\),])",
                "patterns": [
                  {
                    "include": "#emmydoc.type"
                  }
                ]
              }
            ]
          },
          {
            "match": "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b\\s*(?=:)",
            "name": "entity.name.class.lua"
          },
          {
            "match": "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b",
            "name": "entity.name.function.lua"
          }
        ]
      },
      {
        "match": "(?<![\\w\\d.])0[xX][0-9A-Fa-f]+(\\.[0-9A-Fa-f]*)?([eE]-?\\d*)?([pP][-+]\\d+)?",
        "name": "constant.numeric.float.hexadecimal.lua"
      },
      {
        "match": "(?<![\\w\\d.])0[xX]\\.[0-9A-Fa-f]+([eE]-?\\d*)?([pP][-+]\\d+)?",
        "name": "constant.numeric.float.hexadecimal.lua"
      },
      {
        "match": "(?<![\\w\\d.])0[xX][0-9A-Fa-f]+(?![pPeE.0-9])",
        "name": "constant.numeric.integer.hexadecimal.lua"
      },
      {
        "match": "(?<![\\w\\d.])\\d+(\\.\\d*)?([eE]-?\\d*)?",
        "name": "constant.numeric.float.lua"
      },
      {
        "match": "(?<![\\w\\d.])\\.\\d+([eE]-?\\d*)?",
        "name": "constant.numeric.float.lua"
      },
      {
        "match": "(?<![\\w\\d.])\\d+(?![pPeE.0-9])",
        "name": "constant.numeric.integer.lua"
      },
      {
        "include": "#string"
      },
      {
        "captures": {
          "1": {
            "name": "punctuation.definition.comment.lua"
          }
        },
        "match": "\\A(#!).*$\\n?",
        "name": "comment.line.shebang.lua"
      },
      {
        "include": "#comment"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.control.goto.lua"
          },
          "2": {
            "name": "string.tag.lua"
          }
        },
        "match": "\\b(goto)\\s+([a-zA-Z_][a-zA-Z0-9_]*)"
      },
      {
        "captures": {
          "1": {
            "name": "punctuation.section.embedded.begin.lua"
          },
          "2": {
            "name": "punctuation.section.embedded.end.lua"
          }
        },
        "match": "(::)\\s*[a-zA-Z_][a-zA-Z0-9_]*\\s*(::)",
        "name": "string.tag.lua"
      },
      {
        "captures": {
          "0": {
            "name": "storage.type.attribute.lua"
          }
        },
        "match": "<\\s*(const|close)\\s*>"
      },
      {
        "match": "\\<[a-zA-Z_\\*][a-zA-Z0-9_\\.\\*\\-]*\\>",
        "name": "storage.type.generic.lua"
      },
      {
        "match": "\\b(break|do|else|for|if|elseif|goto|return|then|repeat|while|until|end|in)\\b",
        "name": "keyword.control.lua"
      },
      {
        "match": "\\b(local)\\b",
        "name": "keyword.local.lua"
      },
      {
        "match": "\\b(function)\\b(?![,:])",
        "name": "keyword.control.lua"
      },
      {
        "match": "(?<![^.]\\.|:)\\b(false|nil(?!:)|true|_ENV|_G|_VERSION|math\\.(pi|huge|maxinteger|mininteger)|utf8\\.charpattern|io\\.(stdin|stdout|stderr)|package\\.(config|cpath|loaded|loaders|path|preload|searchers))\\b|(?<![.])\\.{3}(?!\\.)",
        "name": "constant.language.lua"
      },
      {
        "match": "(?<![^.]\\.|:)\\b(self)\\b",
        "name": "variable.language.self.lua"
      },
      {
        "match": "(?<![^.]\\.|:)\\b(assert|collectgarbage|dofile|error|getfenv|getmetatable|ipairs|load|loadfile|loadstring|module|next|pairs|pcall|print|rawequal|rawget|rawlen|rawset|require|select|setfenv|setmetatable|tonumber|tostring|type|unpack|xpcall)\\b(?!\\s*=(?!=))",
        "name": "support.function.lua"
      },
      {
        "match": "(?<![^.]\\.|:)\\b(async)\\b(?!\\s*=(?!=))",
        "name": "entity.name.tag.lua"
      },
      {
        "match": "(?<![^.]\\.|:)\\b(coroutine\\.(create|isyieldable|close|resume|running|status|wrap|yield)|string\\.(byte|char|dump|find|format|gmatch|gsub|len|lower|match|pack|packsize|rep|reverse|sub|unpack|upper)|table\\.(concat|insert|maxn|move|pack|remove|sort|unpack)|math\\.(abs|acos|asin|atan2?|ceil|cosh?|deg|exp|floor|fmod|frexp|ldexp|log|log10|max|min|modf|pow|rad|random|randomseed|sinh?|sqrt|tanh?|tointeger|type)|io\\.(close|flush|input|lines|open|output|popen|read|tmpfile|type|write)|os\\.(clock|date|difftime|execute|exit|getenv|remove|rename|setlocale|time|tmpname)|package\\.(loadlib|seeall|searchpath)|debug\\.(debug|[gs]etfenv|[gs]ethook|getinfo|[gs]etlocal|[gs]etmetatable|getregistry|[gs]etupvalue|[gs]etuservalue|set[Cc]stacklimit|traceback|upvalueid|upvaluejoin)|bit32\\.(arshift|band|bnot|bor|btest|bxor|extract|replace|lrotate|lshift|rrotate|rshift)|utf8\\.(char|codes|codepoint|len|offset))\\b(?!\\s*=(?!=))",
        "name": "support.function.library.lua"
      },
      {
        "match": "\\b(and|or|not|\\|\\||\\&\\&|\\!)\\b",
        "name": "keyword.operator.lua"
      },
      {
        "match": "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b(?=\\s*(?:[({\"']|\\[\\[))",
        "name": "support.function.any-method.lua"
      },
      {
        "match": "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b(?=\\s*\\??:)",
        "name": "entity.name.class.lua"
      },
      {
        "match": "(?<=[^.]\\.|:)\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b(?!\\s*=\\s*\\b(function)\\b)",
        "name": "entity.other.attribute.lua"
      },
      {
        "match": "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b(?!\\s*=\\s*\\b(function)\\b)",
        "name": "variable.other.lua"
      },
      {
        "match": "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b(?=\\s*=\\s*\\b(function)\\b)",
        "name": "entity.name.function.lua"
      },
      {
        "match": "\\+|-|%|#|\\*|\\/|\\^|==?|~=|!=|<=?|>=?|(?<!\\.)\\.{2}(?!\\.)",
        "name": "keyword.operator.lua"
      }
    ],
    "repository": {
      "comment": {
        "patterns": [
          {
            "begin": "(^[ \\t]+)?(?=--)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.whitespace.comment.leading.lua"
              }
            },
            "end": "(?!\\G)((?!^)[ \\t]+\\n)?",
            "endCaptures": {
              "1": {
                "name": "punctuation.whitespace.comment.trailing.lua"
              }
            },
            "patterns": [
              {
                "begin": "--\\[(=*)\\[@@@",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.comment.begin.lua"
                  }
                },
                "end": "(--)?\\]\\1\\]",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.comment.end.lua"
                  }
                },
                "name": "",
                "patterns": [
                  {
                    "include": "source.lua"
                  }
                ]
              },
              {
                "begin": "--\\[(=*)\\[",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.comment.begin.lua"
                  }
                },
                "end": "(--)?\\]\\1\\]",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.comment.end.lua"
                  }
                },
                "name": "comment.block.lua",
                "patterns": [
                  {
                    "include": "#emmydoc"
                  },
                  {
                    "include": "#ldoc_tag"
                  }
                ]
              },
              {
                "begin": "----",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.comment.lua"
                  }
                },
                "end": "\\n",
                "name": "comment.line.double-dash.lua"
              },
              {
                "begin": "---",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.comment.lua"
                  }
                },
                "end": "\\n",
                "name": "comment.line.double-dash.documentation.lua",
                "patterns": [
                  {
                    "include": "#emmydoc"
                  },
                  {
                    "include": "#ldoc_tag"
                  }
                ]
              },
              {
                "begin": "--",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.comment.lua"
                  }
                },
                "end": "\\n",
                "name": "comment.line.double-dash.lua",
                "patterns": [
                  {
                    "include": "#ldoc_tag"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\/\\*",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.comment.begin.lua"
              }
            },
            "end": "\\*\\/",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.comment.end.lua"
              }
            },
            "name": "comment.block.lua",
            "patterns": [
              {
                "include": "#emmydoc"
              },
              {
                "include": "#ldoc_tag"
              }
            ]
          }
        ]
      },
      "emmydoc": {
        "patterns": [
          {
            "begin": "(?<=---)[ \\t]*@class",
            "beginCaptures": {
              "0": {
                "name": "storage.type.annotation.lua"
              }
            },
            "end": "(?=[\\n@#])",
            "patterns": [
              {
                "match": "\\b([a-zA-Z_\\*][a-zA-Z0-9_\\.\\*\\-]*)",
                "name": "support.class.lua"
              },
              {
                "match": ":|,",
                "name": "keyword.operator.lua"
              }
            ]
          },
          {
            "begin": "(?<=---)[ \\t]*@enum",
            "beginCaptures": {
              "0": {
                "name": "storage.type.annotation.lua"
              }
            },
            "end": "(?=[\\n@#])",
            "patterns": [
              {
                "begin": "\\b([a-zA-Z_\\*][a-zA-Z0-9_\\.\\*\\-]*)",
                "beginCaptures": {
                  "0": {
                    "name": "variable.lua"
                  }
                },
                "end": "(?=\\n)"
              }
            ]
          },
          {
            "begin": "(?<=---)[ \\t]*@type",
            "beginCaptures": {
              "0": {
                "name": "storage.type.annotation.lua"
              }
            },
            "end": "(?=[\\n@#])",
            "patterns": [
              {
                "include": "#emmydoc.type"
              }
            ]
          },
          {
            "begin": "(?<=---)[ \\t]*@alias",
            "beginCaptures": {
              "0": {
                "name": "storage.type.annotation.lua"
              }
            },
            "end": "(?=[\\n@#])",
            "patterns": [
              {
                "begin": "\\b([a-zA-Z_\\*][a-zA-Z0-9_\\.\\*\\-]*)",
                "beginCaptures": {
                  "0": {
                    "name": "variable.lua"
                  }
                },
                "end": "(?=[\\n#])",
                "patterns": [
                  {
                    "include": "#emmydoc.type"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?<=---)[ \\t]*(@operator)\\s*(\\b[a-z]+)?",
            "beginCaptures": {
              "1": {
                "name": "storage.type.annotation.lua"
              },
              "2": {
                "name": "support.function.library.lua"
              }
            },
            "end": "(?=[\\n@#])",
            "patterns": [
              {
                "include": "#emmydoc.type"
              }
            ]
          },
          {
            "begin": "(?<=---)[ \\t]*@cast",
            "beginCaptures": {
              "0": {
                "name": "storage.type.annotation.lua"
              }
            },
            "end": "(?=[\\n@#])",
            "patterns": [
              {
                "begin": "\\b([a-zA-Z_\\*][a-zA-Z0-9_\\.\\*\\-]*)",
                "beginCaptures": {
                  "0": {
                    "name": "variable.other.lua"
                  }
                },
                "end": "(?=\\n)",
                "patterns": [
                  {
                    "include": "#emmydoc.type"
                  },
                  {
                    "match": "([+-|])",
                    "name": "keyword.operator.lua"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?<=---)[ \\t]*@param",
            "beginCaptures": {
              "0": {
                "name": "storage.type.annotation.lua"
              }
            },
            "end": "(?=[\\n@#])",
            "patterns": [
              {
                "begin": "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b(\\??)",
                "beginCaptures": {
                  "1": {
                    "name": "entity.name.variable.lua"
                  },
                  "2": {
                    "name": "keyword.operator.lua"
                  }
                },
                "end": "(?=[\\n#])",
                "patterns": [
                  {
                    "include": "#emmydoc.type"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?<=---)[ \\t]*@return",
            "beginCaptures": {
              "0": {
                "name": "storage.type.annotation.lua"
              }
            },
            "end": "(?=[\\n@#])",
            "patterns": [
              {
                "match": "\\?",
                "name": "keyword.operator.lua"
              },
              {
                "include": "#emmydoc.type"
              }
            ]
          },
          {
            "begin": "(?<=---)[ \\t]*@field",
            "beginCaptures": {
              "0": {
                "name": "storage.type.annotation.lua"
              }
            },
            "end": "(?=[\\n@#])",
            "patterns": [
              {
                "begin": "(\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b|(\\[))(\\??)",
                "beginCaptures": {
                  "2": {
                    "name": "entity.name.variable.lua"
                  },
                  "3": {
                    "name": "keyword.operator.lua"
                  }
                },
                "end": "(?=[\\n#])",
                "patterns": [
                  {
                    "include": "#string"
                  },
                  {
                    "include": "#emmydoc.type"
                  },
                  {
                    "match": "\\]",
                    "name": "keyword.operator.lua"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?<=---)[ \\t]*@generic",
            "beginCaptures": {
              "0": {
                "name": "storage.type.annotation.lua"
              }
            },
            "end": "(?=[\\n@#])",
            "patterns": [
              {
                "begin": "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b",
                "beginCaptures": {
                  "0": {
                    "name": "storage.type.generic.lua"
                  }
                },
                "end": "(?=\\n)|(,)",
                "endCaptures": {
                  "0": {
                    "name": "keyword.operator.lua"
                  }
                },
                "patterns": [
                  {
                    "match": ":",
                    "name": "keyword.operator.lua"
                  },
                  {
                    "include": "#emmydoc.type"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?<=---)[ \\t]*@vararg",
            "beginCaptures": {
              "0": {
                "name": "storage.type.annotation.lua"
              }
            },
            "end": "(?=[\\n@#])",
            "patterns": [
              {
                "include": "#emmydoc.type"
              }
            ]
          },
          {
            "begin": "(?<=---)[ \\t]*@overload",
            "beginCaptures": {
              "0": {
                "name": "storage.type.annotation.lua"
              }
            },
            "end": "(?=[\\n@#])",
            "patterns": [
              {
                "include": "#emmydoc.type"
              }
            ]
          },
          {
            "begin": "(?<=---)[ \\t]*@deprecated",
            "beginCaptures": {
              "0": {
                "name": "storage.type.annotation.lua"
              }
            },
            "end": "(?=[\\n@#])"
          },
          {
            "begin": "(?<=---)[ \\t]*@meta",
            "beginCaptures": {
              "0": {
                "name": "storage.type.annotation.lua"
              }
            },
            "end": "(?=[\\n@#])"
          },
          {
            "begin": "(?<=---)[ \\t]*@private",
            "beginCaptures": {
              "0": {
                "name": "storage.type.annotation.lua"
              }
            },
            "end": "(?=[\\n@#])"
          },
          {
            "begin": "(?<=---)[ \\t]*@protected",
            "beginCaptures": {
              "0": {
                "name": "storage.type.annotation.lua"
              }
            },
            "end": "(?=[\\n@#])"
          },
          {
            "begin": "(?<=---)[ \\t]*@package",
            "beginCaptures": {
              "0": {
                "name": "storage.type.annotation.lua"
              }
            },
            "end": "(?=[\\n@#])"
          },
          {
            "begin": "(?<=---)[ \\t]*@version",
            "beginCaptures": {
              "0": {
                "name": "storage.type.annotation.lua"
              }
            },
            "end": "(?=[\\n@#])",
            "patterns": [
              {
                "match": "\\b(5\\.1|5\\.2|5\\.3|5\\.4|JIT)\\b",
                "name": "support.class.lua"
              },
              {
                "match": ",|\\>|\\<",
                "name": "keyword.operator.lua"
              }
            ]
          },
          {
            "begin": "(?<=---)[ \\t]*@see",
            "beginCaptures": {
              "0": {
                "name": "storage.type.annotation.lua"
              }
            },
            "end": "(?=[\\n@#])",
            "patterns": [
              {
                "match": "\\b([a-zA-Z_\\*][a-zA-Z0-9_\\.\\*\\-]*)",
                "name": "support.class.lua"
              },
              {
                "match": "#",
                "name": "keyword.operator.lua"
              }
            ]
          },
          {
            "begin": "(?<=---)[ \\t]*@diagnostic",
            "beginCaptures": {
              "0": {
                "name": "storage.type.annotation.lua"
              }
            },
            "end": "(?=[\\n@#])",
            "patterns": [
              {
                "begin": "([a-zA-Z_\\-0-9]+)[ \\t]*(:)?",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.other.unit"
                  },
                  "2": {
                    "name": "keyword.operator.unit"
                  }
                },
                "end": "(?=\\n)",
                "patterns": [
                  {
                    "match": "\\b([a-zA-Z_\\*][a-zA-Z0-9_\\-]*)",
                    "name": "support.class.lua"
                  },
                  {
                    "match": ",",
                    "name": "keyword.operator.lua"
                  }
                ]
              }
            ]
          },
          {
            "begin": "(?<=---)[ \\t]*@module",
            "beginCaptures": {
              "0": {
                "name": "storage.type.annotation.lua"
              }
            },
            "end": "(?=[\\n@#])",
            "patterns": [
              {
                "include": "#string"
              }
            ]
          },
          {
            "match": "(?<=---)[ \\t]*@(async|nodiscard)",
            "name": "storage.type.annotation.lua"
          },
          {
            "begin": "(?<=---)\\|\\s*[\\>\\+]?",
            "beginCaptures": {
              "0": {
                "name": "storage.type.annotation.lua"
              }
            },
            "end": "(?=[\\n@#])",
            "patterns": [
              {
                "include": "#string"
              }
            ]
          }
        ]
      },
      "emmydoc.type": {
        "patterns": [
          {
            "begin": "\\bfun\\b",
            "beginCaptures": {
              "0": {
                "name": "keyword.control.lua"
              }
            },
            "end": "(?=[\\s#])",
            "patterns": [
              {
                "match": "[\\(\\),:\\?][ \\t]*",
                "name": "keyword.operator.lua"
              },
              {
                "match": "([a-zA-Z_][a-zA-Z0-9_\\.\\*\\[\\]\\<\\>\\,\\-]*)(?<!,)[ \\t]*(?=\\??:)",
                "name": "entity.name.variable.lua"
              },
              {
                "include": "#emmydoc.type"
              },
              {
                "include": "#string"
              }
            ]
          },
          {
            "match": "\\<[a-zA-Z_\\*][a-zA-Z0-9_\\.\\*\\-]*\\>",
            "name": "storage.type.generic.lua"
          },
          {
            "match": "\\basync\\b",
            "name": "entity.name.tag.lua"
          },
          {
            "match": "[\\{\\}\\:\\,\\?\\|\\`][ \\t]*",
            "name": "keyword.operator.lua"
          },
          {
            "begin": "(?=[a-zA-Z_\\.\\*\"'\\[])",
            "end": "(?=[\\s\\)\\,\\?\\:\\}\\|#])",
            "patterns": [
              {
                "match": "([a-zA-Z0-9_\\.\\*\\[\\]\\<\\>\\,\\-]+)(?<!,)[ \\t]*",
                "name": "support.type.lua"
              },
              {
                "match": "(\\.\\.\\.)[ \\t]*",
                "name": "constant.language.lua"
              },
              {
                "include": "#string"
              }
            ]
          }
        ]
      },
      "escaped_char": {
        "patterns": [
          {
            "match": "\\\\[abfnrtv\\\\\"'\\n]",
            "name": "constant.character.escape.lua"
          },
          {
            "match": "\\\\z[\\n\\t ]*",
            "name": "constant.character.escape.lua"
          },
          {
            "match": "\\\\\\d{1,3}",
            "name": "constant.character.escape.byte.lua"
          },
          {
            "match": "\\\\x[0-9A-Fa-f][0-9A-Fa-f]",
            "name": "constant.character.escape.byte.lua"
          },
          {
            "match": "\\\\u\\{[0-9A-Fa-f]+\\}",
            "name": "constant.character.escape.unicode.lua"
          },
          {
            "match": "\\\\.",
            "name": "invalid.illegal.character.escape.lua"
          }
        ]
      },
      "ldoc_tag": {
        "captures": {
          "1": {
            "name": "punctuation.definition.block.tag.ldoc"
          },
          "2": {
            "name": "storage.type.class.ldoc"
          }
        },
        "match": "\\G[ \\t]*(@)(alias|annotation|author|charset|class|classmod|comment|constructor|copyright|description|example|export|factory|field|file|fixme|function|include|lfunction|license|local|module|name|param|pragma|private|raise|release|return|script|section|see|set|static|submodule|summary|tfield|thread|tparam|treturn|todo|topic|type|usage|warning|within)\\b"
      },
      "string": {
        "patterns": [
          {
            "begin": "'",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.lua"
              }
            },
            "end": "'[ \\t]*|(?=\\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.lua"
              }
            },
            "name": "string.quoted.single.lua",
            "patterns": [
              {
                "include": "#escaped_char"
              }
            ]
          },
          {
            "begin": "\"",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.lua"
              }
            },
            "end": "\"[ \\t]*|(?=\\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.lua"
              }
            },
            "name": "string.quoted.double.lua",
            "patterns": [
              {
                "include": "#escaped_char"
              }
            ]
          },
          {
            "begin": "`",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.lua"
              }
            },
            "end": "`[ \\t]*|(?=\\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.lua"
              }
            },
            "name": "string.quoted.double.lua"
          },
          {
            "begin": "(?<=\\.cdef)\\s*(\\[(=*)\\[)",
            "beginCaptures": {
              "0": {
                "name": "string.quoted.other.multiline.lua"
              },
              "1": {
                "name": "punctuation.definition.string.begin.lua"
              }
            },
            "contentName": "meta.embedded.lua",
            "end": "(\\]\\2\\])[ \\t]*",
            "endCaptures": {
              "0": {
                "name": "string.quoted.other.multiline.lua"
              },
              "1": {
                "name": "punctuation.definition.string.end.lua"
              }
            },
            "patterns": [
              {
                "include": "source.c"
              }
            ]
          },
          {
            "begin": "(?<!--)\\[(=*)\\[",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.lua"
              }
            },
            "end": "\\]\\1\\][ \\t]*",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.lua"
              }
            },
            "name": "string.quoted.other.multiline.lua"
          }
        ]
      }
    },
    "scopeName": "source.lua",
    "embeddedLangs": [
      "c"
    ]
  },
  {
    "displayName": "Nginx",
    "fileTypes": [
      "conf.erb",
      "conf",
      "ngx",
      "nginx.conf",
      "mime.types",
      "fastcgi_params",
      "scgi_params",
      "uwsgi_params"
    ],
    "foldingStartMarker": "\\{\\s*$",
    "foldingStopMarker": "^\\s*\\}",
    "name": "nginx",
    "patterns": [
      {
        "match": "\\#.*",
        "name": "comment.line.number-sign"
      },
      {
        "begin": "\\b((?:content|rewrite|access|init_worker|init|set|log|balancer|ssl_(?:client_hello|session_fetch|certificate))_by_lua(?:_block)?)\\s*\\{",
        "beginCaptures": {
          "1": {
            "name": "storage.type.directive.context.nginx"
          }
        },
        "contentName": "meta.embedded.block.lua",
        "end": "\\}",
        "name": "meta.context.lua.nginx",
        "patterns": [
          {
            "include": "source.lua"
          }
        ]
      },
      {
        "begin": "\\b((?:content|rewrite|access|init_worker|init|set|log|balancer|ssl_(?:client_hello|session_fetch|certificate))_by_lua)\\s*'",
        "beginCaptures": {
          "1": {
            "name": "storage.type.directive.context.nginx"
          }
        },
        "contentName": "meta.embedded.block.lua",
        "end": "'",
        "name": "meta.context.lua.nginx",
        "patterns": [
          {
            "include": "source.lua"
          }
        ]
      },
      {
        "begin": "\\b(events) +\\{",
        "beginCaptures": {
          "1": {
            "name": "storage.type.directive.context.nginx"
          }
        },
        "end": "\\}",
        "name": "meta.context.events.nginx",
        "patterns": [
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "\\b(http) +\\{",
        "beginCaptures": {
          "1": {
            "name": "storage.type.directive.context.nginx"
          }
        },
        "end": "\\}",
        "name": "meta.context.http.nginx",
        "patterns": [
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "\\b(mail) +\\{",
        "beginCaptures": {
          "1": {
            "name": "storage.type.directive.context.nginx"
          }
        },
        "end": "\\}",
        "name": "meta.context.mail.nginx",
        "patterns": [
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "\\b(stream) +\\{",
        "beginCaptures": {
          "1": {
            "name": "storage.type.directive.context.nginx"
          }
        },
        "end": "\\}",
        "name": "meta.context.stream.nginx",
        "patterns": [
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "\\b(server) +\\{",
        "beginCaptures": {
          "1": {
            "name": "storage.type.directive.context.nginx"
          }
        },
        "end": "\\}",
        "name": "meta.context.server.nginx",
        "patterns": [
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "\\b(location) +([\\^]?~[\\*]?|=) +(.*?)\\{",
        "beginCaptures": {
          "1": {
            "name": "storage.type.directive.context.nginx"
          },
          "2": {
            "name": "keyword.operator.nginx"
          },
          "3": {
            "name": "string.regexp.nginx"
          }
        },
        "end": "\\}",
        "name": "meta.context.location.nginx",
        "patterns": [
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "\\b(location) +(.*?)\\{",
        "beginCaptures": {
          "1": {
            "name": "storage.type.directive.context.nginx"
          },
          "2": {
            "name": "entity.name.context.location.nginx"
          }
        },
        "end": "\\}",
        "name": "meta.context.location.nginx",
        "patterns": [
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "\\b(limit_except) +\\{",
        "beginCaptures": {
          "1": {
            "name": "storage.type.directive.context.nginx"
          }
        },
        "end": "\\}",
        "name": "meta.context.limit_except.nginx",
        "patterns": [
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "\\b(if) +\\(",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.nginx"
          }
        },
        "end": "\\)",
        "name": "meta.context.if.nginx",
        "patterns": [
          {
            "include": "#if_condition"
          }
        ]
      },
      {
        "begin": "\\b(upstream) +(.*?)\\{",
        "beginCaptures": {
          "1": {
            "name": "storage.type.directive.context.nginx"
          },
          "2": {
            "name": "entity.name.context.location.nginx"
          }
        },
        "end": "\\}",
        "name": "meta.context.upstream.nginx",
        "patterns": [
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "\\b(types) +\\{",
        "beginCaptures": {
          "1": {
            "name": "storage.type.directive.context.nginx"
          }
        },
        "end": "\\}",
        "name": "meta.context.types.nginx",
        "patterns": [
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "\\b(map) +(\\$)([A-Za-z0-9\\_]+) +(\\$)([A-Za-z0-9\\_]+) *\\{",
        "beginCaptures": {
          "1": {
            "name": "storage.type.directive.context.nginx"
          },
          "2": {
            "name": "punctuation.definition.variable.nginx"
          },
          "3": {
            "name": "variable.parameter.nginx"
          },
          "4": {
            "name": "punctuation.definition.variable.nginx"
          },
          "5": {
            "name": "variable.other.nginx"
          }
        },
        "end": "\\}",
        "name": "meta.context.map.nginx",
        "patterns": [
          {
            "include": "#values"
          },
          {
            "match": ";",
            "name": "punctuation.terminator.nginx"
          },
          {
            "match": "\\#.*",
            "name": "comment.line.number-sign"
          }
        ]
      },
      {
        "begin": "\\{",
        "end": "\\}",
        "name": "meta.block.nginx",
        "patterns": [
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "\\b(return)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.nginx"
          }
        },
        "end": ";",
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "\\b(rewrite)\\s+",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": "(last|break|redirect|permanent)?(;)",
        "endCaptures": {
          "1": {
            "name": "keyword.other.nginx"
          },
          "2": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "\\b(server)\\s+",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#server_parameters"
          }
        ]
      },
      {
        "begin": "\\b(internal|empty_gif|f4f|flv|hls|mp4|break|status|stub_status|ip_hash|ntlm|least_conn|upstream_conf|least_conn|zone_sync)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": "(;|$)",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.nginx"
          }
        }
      },
      {
        "begin": "([\"'\\s]|^)(accept_)(mutex|mutex_delay)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(debug_)(connection|points)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(error_)(log|page)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(ssl_)(engine|buffer_size|certificate|certificate_key|ciphers|client_certificate|conf_command|crl|dhparam|early_data|ecdh_curve|ocsp|ocsp_cache|ocsp_responder|password_file|prefer_server_ciphers|protocols|reject_handshake|session_cache|session_ticket_key|session_tickets|session_timeout|stapling|stapling_file|stapling_responder|stapling_verify|trusted_certificate|verify_client|verify_depth|alpn|handshake_timeout|preread)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(worker_)(aio_requests|connections|cpu_affinity|priority|processes|rlimit_core|rlimit_nofile|shutdown_timeout)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(auth_)(delay|basic|basic_user_file|jwt|jwt_claim_set|jwt_header_set|jwt_key_cache|jwt_key_file|jwt_key_request|jwt_leeway|jwt_type|jwt_require|request|request_set|http|http_header|http_pass_client_cert|http_timeout)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(client_)(body_buffer_size|body_in_file_only|body_in_single_buffer|body_temp_path|body_timeout|header_buffer_size|header_timeout|max_body_size)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(keepalive_)(disable|requests|time|timeout)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(limit_)(rate|rate_after|conn|conn_dry_run|conn_log_level|conn_status|conn_zone|zone|req|req_dry_run|req_log_level|req_status|req_zone)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(lingering_)(close|time|timeout)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(log_)(not_found|subrequest|format)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(max_)(ranges|errors)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(msie_)(padding|refresh)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(open_)(file_cache|file_cache_errors|file_cache_min_uses|file_cache_valid|log_file_cache)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(send_)(lowat|timeout)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(server_)(name|name_in_redirect|names_hash_bucket_size|names_hash_max_size|tokens)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(tcp_)(nodelay|nopush)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(types_)(hash_bucket_size|hash_max_size)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(variables_)(hash_bucket_size|hash_max_size)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(add_)(before_body|after_body|header|trailer)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(status_)(zone|format)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(autoindex_)(exact_size|format|localtime)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(ancient_)(browser|browser_value)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(modern_)(browser|browser_value)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(charset_)(map|types)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(dav_)(access|methods)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(fastcgi_)(bind|buffer_size|buffering|buffers|busy_buffers_size|cache|cache_background_update|cache_bypass|cache_key|cache_lock|cache_lock_age|cache_lock_timeout|cache_max_range_offset|cache_methods|cache_min_uses|cache_path|cache_purge|cache_revalidate|cache_use_stale|cache_valid|catch_stderr|connect_timeout|force_ranges|hide_header|ignore_client_abort|ignore_headers|index|intercept_errors|keep_conn|limit_rate|max_temp_file_size|next_upstream|next_upstream_timeout|next_upstream_tries|no_cache|param|pass|pass_header|pass_request_body|pass_request_headers|read_timeout|request_buffering|send_lowat|send_timeout|socket_keepalive|split_path_info|store|store_access|temp_file_write_size|temp_path)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(geoip_)(country|city|org|proxy|proxy_recursive)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(grpc_)(bind|buffer_size|connect_timeout|hide_header|ignore_headers|intercept_errors|next_upstream|next_upstream_timeout|next_upstream_tries|pass|pass_header|read_timeout|send_timeout|set_header|socket_keepalive|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_conf_command|ssl_crl|ssl_name|ssl_password_file|ssl_protocols|ssl_server_name|ssl_session_reuse|ssl_trusted_certificate|ssl_verify|ssl_verify_depth)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(gzip_)(buffers|comp_level|disable|http_version|min_length|proxied|types|vary|static)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(hls_)(buffers|forward_args|fragment|mp4_buffer_size|mp4_max_buffer_size)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(image_)(filter|filter_buffer|filter_interlace|filter_jpeg_quality|filter_sharpen|filter_transparency|filter_webp_quality)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(map_)(hash_bucket_size|hash_max_size)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(memcached_)(bind|buffer_size|connect_timeout|gzip_flag|next_upstream|next_upstream_timeout|next_upstream_tries|pass|read_timeout|send_timeout|socket_keepalive)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(mp4_)(buffer_size|max_buffer_size|limit_rate|limit_rate_after|start_key_frame)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(perl_)(modules|require|set)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(proxy_)(bind|buffer_size|buffering|buffers|busy_buffers_size|cache|cache_background_update|cache_bypass|cache_convert_head|cache_key|cache_lock|cache_lock_age|cache_lock_timeout|cache_max_range_offset|cache_methods|cache_min_uses|cache_path|cache_purge|cache_revalidate|cache_use_stale|cache_valid|connect_timeout|cookie_domain|cookie_flags|cookie_path|force_ranges|headers_hash_bucket_size|headers_hash_max_size|hide_header|http_version|ignore_client_abort|ignore_headers|intercept_errors|limit_rate|max_temp_file_size|method|next_upstream|next_upstream_timeout|next_upstream_tries|no_cache|pass|pass_header|pass_request_body|pass_request_headers|read_timeout|redirect|request_buffering|send_lowat|send_timeout|set_body|set_header|socket_keepalive|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_conf_command|ssl_crl|ssl_name|ssl_password_file|ssl_protocols|ssl_server_name|ssl_session_reuse|ssl_trusted_certificate|ssl_verify|ssl_verify_depth|store|store_access|temp_file_write_size|temp_path|buffer|pass_error_message|protocol|smtp_auth|timeout|protocol_timeout|download_rate|half_close|requests|responses|session_drop|ssl|upload_rate)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(real_)(ip_header|ip_recursive)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(referer_)(hash_bucket_size|hash_max_size)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(scgi_)(bind|buffer_size|buffering|buffers|busy_buffers_size|cache|cache_background_update|cache_bypass|cache_key|cache_lock|cache_lock_age|cache_lock_timeout|cache_max_range_offset|cache_methods|cache_min_uses|cache_path|cache_purge|cache_revalidate|cache_use_stale|cache_valid|connect_timeout|force_ranges|hide_header|ignore_client_abort|ignore_headers|intercept_errors|limit_rate|max_temp_file_size|next_upstream|next_upstream_timeout|next_upstream_tries|no_cache|param|pass|pass_header|pass_request_body|pass_request_headers|read_timeout|request_buffering|send_timeout|socket_keepalive|store|store_access|temp_file_write_size|temp_path)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(secure_)(link|link_md5|link_secret)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(session_)(log|log_format|log_zone)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(ssi_)(last_modified|min_file_chunk|silent_errors|types|value_length)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(sub_)(filter|filter_last_modified|filter_once|filter_types)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(health_)(check|check_timeout)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(userid_)(domain|expires|flags|mark|name|p3p|path|service)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(uwsgi_)(bind|buffer_size|buffering|buffers|busy_buffers_size|cache|cache_background_update|cache_bypass|cache_key|cache_lock|cache_lock_age|cache_lock_timeout|cache_max_range_offset|cache_methods|cache_min_uses|cache_path|cache_purge|cache_revalidate|cache_use_stale|cache_valid|connect_timeout|force_ranges|hide_header|ignore_client_abort|ignore_headers|intercept_errors|limit_rate|max_temp_file_size|modifier1|modifier2|next_upstream|next_upstream_timeout|next_upstream_tries|no_cache|param|pass|pass_header|pass_request_body|pass_request_headers|read_timeout|request_buffering|send_timeout|socket_keepalive|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_conf_command|ssl_crl|ssl_name|ssl_password_file|ssl_protocols|ssl_server_name|ssl_session_reuse|ssl_trusted_certificate|ssl_verify|ssl_verify_depth|store|store_access|temp_file_write_size|temp_path)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(http2_)(body_preread_size|chunk_size|idle_timeout|max_concurrent_pushes|max_concurrent_streams|max_field_size|max_header_size|max_requests|push|push_preload|recv_buffer_size|recv_timeout)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(http3_)(hq|max_concurrent_streams|stream_buffer_size)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(quic_)(active_connection_id_limit|bpf|gso|host_key|retry)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(xslt_)(last_modified|param|string_param|stylesheet|types)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(imap_)(auth|capabilities|client_buffer)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(pop3_)(auth|capabilities)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(smtp_)(auth|capabilities|client_buffer|greeting_delay)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(preread_)(buffer_size|timeout)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(mqtt_)(preread|buffers|rewrite_buffer_size|set_connect)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(zone_)(sync_buffers|sync_connect_retry_interval|sync_connect_timeout|sync_interval|sync_recv_buffer_size|sync_server|sync_ssl|sync_ssl_certificate|sync_ssl_certificate_key|sync_ssl_ciphers|sync_ssl_conf_command|sync_ssl_crl|sync_ssl_name|sync_ssl_password_file|sync_ssl_protocols|sync_ssl_server_name|sync_ssl_trusted_certificate|sync_ssl_verify|sync_ssl_verify_depth|sync_timeout)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(otel_)(exporter|service_name|trace|trace_context|span_name|span_attr)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(js_)(body_filter|content|fetch_buffer_size|fetch_ciphers|fetch_max_response_buffer_size|fetch_protocols|fetch_timeout|fetch_trusted_certificate|fetch_verify|fetch_verify_depth|header_filter|import|include|path|periodic|preload_object|set|shared_dict_zone|var|access|filter|preread)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          },
          "4": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "([\"'\\s]|^)(daemon|env|include|pid|use|user|aio|alias|directio|etag|listen|resolver|root|satisfy|sendfile|allow|deny|api|autoindex|charset|geo|gunzip|gzip|expires|index|keyval|mirror|perl|set|slice|ssi|ssl|zone|state|hash|keepalive|queue|random|sticky|match|userid|http2|http3|protocol|timeout|xclient|starttls|mqtt|load_module|lock_file|master_process|multi_accept|pcre_jit|thread_pool|timer_resolution|working_directory|absolute_redirect|aio_write|chunked_transfer_encoding|connection_pool_size|default_type|directio_alignment|disable_symlinks|if_modified_since|ignore_invalid_headers|large_client_header_buffers|merge_slashes|output_buffers|port_in_redirect|postpone_output|read_ahead|recursive_error_pages|request_pool_size|reset_timedout_connection|resolver_timeout|sendfile_max_chunk|subrequest_output_buffer_size|try_files|underscores_in_headers|addition_types|override_charset|source_charset|create_full_put_path|min_delete_depth|f4f_buffer_size|gunzip_buffers|internal_redirect|keyval_zone|access_log|mirror_request_body|random_index|set_real_ip_from|valid_referers|rewrite_log|uninitialized_variable_warn|split_clients|least_time|sticky_cookie_insert|xml_entities|google_perftools_profiles)([\"'\\s]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.nginx"
          },
          "2": {
            "name": "keyword.directive.nginx"
          },
          "3": {
            "name": "keyword.directive.nginx"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "\\b([a-zA-Z0-9\\_]+)\\s+",
        "beginCaptures": {
          "1": {
            "name": "keyword.directive.unknown.nginx"
          }
        },
        "end": "(;|$)",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      },
      {
        "begin": "\\b([a-z]+\\/[A-Za-z0-9\\-\\.\\+]+)\\b",
        "beginCaptures": {
          "1": {
            "name": "constant.other.mediatype.nginx"
          }
        },
        "end": "(;)",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.nginx"
          }
        },
        "patterns": [
          {
            "include": "#values"
          }
        ]
      }
    ],
    "repository": {
      "if_condition": {
        "patterns": [
          {
            "include": "#variables"
          },
          {
            "match": "\\!?\\~\\*?\\s",
            "name": "keyword.operator.nginx"
          },
          {
            "match": "\\!?\\-[fdex]\\s",
            "name": "keyword.operator.nginx"
          },
          {
            "match": "\\!?=[^=]",
            "name": "keyword.operator.nginx"
          },
          {
            "include": "#regexp_and_string"
          }
        ]
      },
      "regexp_and_string": {
        "patterns": [
          {
            "match": "\\^.*?\\$",
            "name": "string.regexp.nginx"
          },
          {
            "begin": "\"",
            "end": "\"",
            "name": "string.quoted.double.nginx",
            "patterns": [
              {
                "match": "\\\\[\"'nt\\\\]",
                "name": "constant.character.escape.nginx"
              },
              {
                "include": "#variables"
              }
            ]
          },
          {
            "begin": "'",
            "end": "'",
            "name": "string.quoted.single.nginx",
            "patterns": [
              {
                "match": "\\\\[\"'nt\\\\]",
                "name": "constant.character.escape.nginx"
              },
              {
                "include": "#variables"
              }
            ]
          }
        ]
      },
      "server_parameters": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "variable.parameter.nginx"
              },
              "2": {
                "name": "keyword.operator.nginx"
              },
              "3": {
                "name": "constant.numeric.nginx"
              }
            },
            "match": "(?:^|\\s)(weight|max_conn|max_fails|fail_timeout|slow_start)(=)(\\d[\\d\\.]*[bBkKmMgGtTsShHdD]?)(?:\\s|;|$)"
          },
          {
            "include": "#values"
          }
        ]
      },
      "values": {
        "patterns": [
          {
            "include": "#variables"
          },
          {
            "match": "\\#.*",
            "name": "comment.line.number-sign"
          },
          {
            "captures": {
              "1": {
                "name": "constant.numeric.nginx"
              }
            },
            "match": "(?<=\\G|\\s)(=?[0-9][0-9\\.]*[bBkKmMgGtTsShHdD]?)(?=[\\t ;])"
          },
          {
            "match": "(?<=\\G|\\s)(on|off|true|false)(?=[\\t ;])",
            "name": "constant.language.nginx"
          },
          {
            "match": "(?<=\\G|\\s)(kqueue|rtsig|epoll|\\/dev\\/poll|select|poll|eventport|max|all|default_server|default|main|crit|error|debug|warn|notice|last)(?=[\\t ;])",
            "name": "constant.language.nginx"
          },
          {
            "match": "\\\\.*\\ |\\~\\*|\\~|\\!\\~\\*|\\!\\~",
            "name": "keyword.operator.nginx"
          },
          {
            "include": "#regexp_and_string"
          }
        ]
      },
      "variables": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.variable.nginx"
              },
              "2": {
                "name": "variable.other.nginx"
              }
            },
            "match": "(\\$)([A-Za-z0-9\\_]+)\\b"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.variable.nginx"
              },
              "2": {
                "name": "variable.other.nginx"
              },
              "3": {
                "name": "punctuation.definition.variable.nginx"
              }
            },
            "match": "(\\$\\{)([A-Za-z0-9\\_]+)(\\})"
          }
        ]
      }
    },
    "scopeName": "source.nginx",
    "embeddedLangs": [
      "lua"
    ]
  }
])