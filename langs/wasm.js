/** Shiki Language: wasm */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push([
  {
    "displayName": "WebAssembly",
    "name": "wasm",
    "patterns": [
      {
        "include": "#comments"
      },
      {
        "include": "#strings"
      },
      {
        "include": "#instructions"
      },
      {
        "include": "#types"
      },
      {
        "include": "#modules"
      },
      {
        "include": "#constants"
      },
      {
        "include": "#invalid"
      }
    ],
    "repository": {
      "comments": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.comment.wat"
              }
            },
            "comment": "Line comment",
            "match": "(;;).*$",
            "name": "comment.line.wat"
          },
          {
            "begin": "\\(;",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.comment.wat"
              }
            },
            "comment": "Block comment",
            "end": ";\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.comment.wat"
              }
            },
            "name": "comment.block.wat"
          }
        ]
      },
      "constants": {
        "patterns": [
          {
            "comment": "Fixed-width SIMD",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "support.type.wat"
                  }
                },
                "comment": "Vector literal (i8x16) [simd]",
                "match": "\\b(i8x16)(?:\\s+0x[0-9a-fA-F]{1,2}){16}\\b",
                "name": "constant.numeric.vector.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.type.wat"
                  }
                },
                "comment": "Vector literal (i16x8) [simd]",
                "match": "\\b(i16x8)(?:\\s+0x[0-9a-fA-F]{1,4}){8}\\b",
                "name": "constant.numeric.vector.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.type.wat"
                  }
                },
                "comment": "Vector literal (i32x4) [simd]",
                "match": "\\b(i32x4)(?:\\s+0x[0-9a-fA-F]{1,8}){4}\\b",
                "name": "constant.numeric.vector.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.type.wat"
                  }
                },
                "comment": "Vector literal (i64x2) [simd]",
                "match": "\\b(i64x2)(?:\\s+0x[0-9a-fA-F]{1,16}){2}\\b",
                "name": "constant.numeric.vector.wat"
              }
            ]
          },
          {
            "comment": "MVP",
            "patterns": [
              {
                "comment": "Floating point literal",
                "match": "[+-]?\\b[0-9][0-9]*(?:\\.[0-9][0-9]*)?(?:[eE][+-]?[0-9]+)?\\b",
                "name": "constant.numeric.float.wat"
              },
              {
                "comment": "Floating point hexadecimal literal",
                "match": "[+-]?\\b0x([0-9a-fA-F]*\\.[0-9a-fA-F]+|[0-9a-fA-F]+\\.?)[Pp][+-]?[0-9]+\\b",
                "name": "constant.numeric.float.wat"
              },
              {
                "comment": "Floating point infinity",
                "match": "[+-]?\\binf\\b",
                "name": "constant.numeric.float.wat"
              },
              {
                "comment": "Floating point literal (NaN)",
                "match": "[+-]?\\bnan:0x[0-9a-fA-F][0-9a-fA-F]*\\b",
                "name": "constant.numeric.float.wat"
              },
              {
                "comment": "Integer literal",
                "match": "[+-]?\\b(?:0x[0-9a-fA-F][0-9a-fA-F]*|\\d[\\d]*)\\b",
                "name": "constant.numeric.integer.wat"
              }
            ]
          }
        ]
      },
      "instructions": {
        "patterns": [
          {
            "comment": "Non-trapping float-to-int conversions",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Conversion instruction [nontrapping-float-to-int-conversions]",
                "match": "\\b(i32|i64)\\.trunc_sat_f(?:32|64)_[su]\\b",
                "name": "keyword.operator.word.wat"
              }
            ]
          },
          {
            "comment": "Sign-extension operators",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Numeric instruction (i32) [sign-extension-ops]",
                "match": "\\b(i32)\\.(?:extend(?:8|16)_s)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Numeric instruction (i64) [sign-extension-ops]",
                "match": "\\b(i64)\\.(?:extend(?:8|16|32)_s)\\b",
                "name": "keyword.operator.word.wat"
              }
            ]
          },
          {
            "comment": "Bulk memory operations",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Memory instruction [bulk-memory-operations]",
                "match": "\\b(memory)\\.(?:copy|fill|init|drop)\\b",
                "name": "keyword.operator.word.wat"
              }
            ]
          },
          {
            "comment": "Fixed-width SIMD",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Vector instruction (v128) [simd]",
                "match": "\\b(v128)\\.(?:const|and|or|xor|not|andnot|bitselect|load|store)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Vector instruction (i8x16) [simd]",
                "match": "\\b(i8x16)\\.(?:shuffle|swizzle|splat|replace_lane|add|sub|mul|neg|shl|shr_[su]|eq|ne|lt_[su]|le_[su]|gt_[su]|ge_[su]|min_[su]|max_[su]|any_true|all_true|extract_lane_[su]|add_saturate_[su]|sub_saturate_[su]|avgr_u|narrow_i16x8_[su])\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Vector instruction (i16x8) [simd]",
                "match": "\\b(i16x8)\\.(?:splat|replace_lane|add|sub|mul|neg|shl|shr_[su]|eq|ne|lt_[su]|le_[su]|gt_[su]|ge_[su]|min_[su]|max_[su]|any_true|all_true|extract_lane_[su]|add_saturate_[su]|sub_saturate_[su]|avgr_u|load8x8_[su]|narrow_i32x4_[su]|widen_(low|high)_i8x16_[su])\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Vector instruction (i32x4) [simd]",
                "match": "\\b(i32x4)\\.(?:splat|replace_lane|add|sub|mul|neg|shl|shr_[su]|eq|ne|lt_[su]|le_[su]|gt_[su]|ge_[su]|min_[su]|max_[su]|any_true|all_true|extract_lane|load16x4_[su]|trunc_sat_f32x4_[su]|widen_(low|high)_i16x8_[su])\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Vector instruction (i64x2) [simd]",
                "match": "\\b(i64x2)\\.(?:splat|replace_lane|add|sub|mul|neg|shl|shr_[su]|extract_lane|load32x2_[su])\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Vector instruction (f32x4) [simd]",
                "match": "\\b(f32x4)\\.(?:splat|replace_lane|add|sub|mul|neg|extract_lane|eq|ne|lt|le|gt|ge|abs|min|max|div|sqrt|convert_i32x4_[su])\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Vector instruction (f64x2) [simd]",
                "match": "\\b(f64x2)\\.(?:splat|replace_lane|add|sub|mul|neg|extract_lane|eq|ne|lt|le|gt|ge|abs|min|max|div|sqrt)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Vector instruction (v8x16) [simd]",
                "match": "\\b(v8x16)\\.(?:load_splat|shuffle|swizzle)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Vector instruction (v16x8) [simd]",
                "match": "\\b(v16x8)\\.load_splat\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Vector instruction (v32x4) [simd]",
                "match": "\\b(v32x4)\\.load_splat\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Vector instruction (v64x2) [simd]",
                "match": "\\b(v64x2)\\.load_splat\\b",
                "name": "keyword.operator.word.wat"
              }
            ]
          },
          {
            "comment": "Threads",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  },
                  "2": {
                    "name": "support.class.wat"
                  },
                  "3": {
                    "name": "support.class.wat"
                  },
                  "4": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Atomic instruction (i32) [threads]",
                "match": "\\b(i32)\\.(atomic)\\.(?:load(?:8_u|16_u)?|store(?:8|16)?|wait|(rmw)\\.(?:add|sub|and|or|xor|xchg|cmpxchg)|(rmw8|rmw16)\\.(?:add_u|sub_u|and_u|or_u|xor_u|xchg_u|cmpxchg_u))\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  },
                  "2": {
                    "name": "support.class.wat"
                  },
                  "3": {
                    "name": "support.class.wat"
                  },
                  "4": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Atomic instruction (i64) [threads]",
                "match": "\\b(i64)\\.(atomic)\\.(?:load(?:8_u|16_u|32_u)?|store(?:8|16|32)?|wait|(rmw)\\.(?:add|sub|and|or|xor|xchg|cmpxchg)|(rmw8|rmw16|rmw32)\\.(?:add_u|sub_u|and_u|or_u|xor_u|xchg_u|cmpxchg_u))\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Atomic instruction [threads]",
                "match": "\\b(atomic)\\.(?:notify|fence)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "comment": "Shared modifier [threads]",
                "match": "\\bshared\\b",
                "name": "storage.modifier.wat"
              }
            ]
          },
          {
            "comment": "Reference types",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Reference instruction [reference-types]",
                "match": "\\b(ref)\\.(?:null|is_null|func|extern)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Table instruction [reference-types]",
                "match": "\\b(table)\\.(?:get|size|grow|fill|init|copy)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "comment": "Type name [reference-types]",
                "match": "\\b(?:externref|funcref|nullref)\\b",
                "name": "entity.name.type.wat"
              }
            ]
          },
          {
            "comment": "Tail Call",
            "patterns": [
              {
                "comment": "Control instruction [tail-call]",
                "match": "\\breturn_call(?:_indirect)?\\b",
                "name": "keyword.control.wat"
              }
            ]
          },
          {
            "comment": "Exception handling",
            "patterns": [
              {
                "comment": "Control instruction [exception-handling]",
                "match": "\\b(?:try|catch|throw|rethrow|br_on_exn)\\b",
                "name": "keyword.control.wat"
              },
              {
                "comment": "Module element [exception-handling]",
                "match": "(?<=\\()event\\b",
                "name": "storage.type.wat"
              }
            ]
          },
          {
            "comment": "Binaryen extensions",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Pseudo stack instruction [binaryen]",
                "match": "\\b(i32|i64|f32|f64|externref|funcref|nullref|exnref)\\.(?:push|pop)\\b",
                "name": "keyword.operator.word.wat"
              }
            ]
          },
          {
            "comment": "MVP",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "support.class.type.wat"
                  }
                },
                "comment": "Memory instruction (i32) [mvp]",
                "match": "\\b(i32)\\.(?:load|load(?:8|16)(?:_[su])?|store(?:8|16)?)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.type.wat"
                  }
                },
                "comment": "Memory instruction (i64) [mvp]",
                "match": "\\b(i64)\\.(?:load|load(?:8|16|32)(?:_[su])?|store(?:8|16|32)?)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.type.wat"
                  }
                },
                "comment": "Memory instruction (f32/f64) [mvp]",
                "match": "\\b(f32|f64)\\.(?:load|store)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.memory.wat"
                  }
                },
                "comment": "Memory instruction [mvp]",
                "match": "\\b(memory)\\.(?:size|grow)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "entity.other.attribute-name.wat"
                  }
                },
                "comment": "Memory instruction attribute [mvp]",
                "match": "\\b(offset|align)=\\b"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.local.wat"
                  }
                },
                "comment": "Variable instruction (local) [mvp]",
                "match": "\\b(local)\\.(?:get|set|tee)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.global.wat"
                  }
                },
                "comment": "Variable instruction (global) [mvp]",
                "match": "\\b(global)\\.(?:get|set)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.type.wat"
                  }
                },
                "comment": "Numeric instruction (i32/i64) [mvp]",
                "match": "\\b(i32|i64)\\.(const|eqz|eq|ne|lt_[su]|gt_[su]|le_[su]|ge_[su]|clz|ctz|popcnt|add|sub|mul|div_[su]|rem_[su]|and|or|xor|shl|shr_[su]|rotl|rotr)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.type.wat"
                  }
                },
                "comment": "Numeric instruction (f32/f64) [mvp]",
                "match": "\\b(f32|f64)\\.(const|eq|ne|lt|gt|le|ge|abs|neg|ceil|floor|trunc|nearest|sqrt|add|sub|mul|div|min|max|copysign)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.type.wat"
                  }
                },
                "comment": "Conversion instruction (i32) [mvp]",
                "match": "\\b(i32)\\.(wrap_i64|trunc_(f32|f64)_[su]|reinterpret_f32)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.type.wat"
                  }
                },
                "comment": "Conversion instruction (i64) [mvp]",
                "match": "\\b(i64)\\.(extend_i32_[su]|trunc_f(32|64)_[su]|reinterpret_f64)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.type.wat"
                  }
                },
                "comment": "Conversion instruction (f32) [mvp]",
                "match": "\\b(f32)\\.(convert_i(32|64)_[su]|demote_f64|reinterpret_i32)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.type.wat"
                  }
                },
                "comment": "Conversion instruction (f64) [mvp]",
                "match": "\\b(f64)\\.(convert_i(32|64)_[su]|promote_f32|reinterpret_i64)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "comment": "Control instruction [mvp]",
                "match": "\\b(?:unreachable|nop|block|loop|if|then|else|end|br|br_if|br_table|return|call|call_indirect)\\b",
                "name": "keyword.control.wat"
              },
              {
                "comment": "Parametric instruction [mvp]",
                "match": "\\b(?:drop|select)\\b",
                "name": "keyword.operator.word.wat"
              }
            ]
          },
          {
            "comment": "GC Instructions",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Reference Instructions [GC]",
                "match": "\\b(ref)\\.(?:eq|test|cast)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Struct Instructions [GC]",
                "match": "\\b(struct)\\.(?:new_canon|new_canon_default|get|get_s|get_u|set)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Array Instructions [GC]",
                "match": "\\b(array)\\.(?:new_canon|new_canon_default|get|get_s|get_u|set|len|new_canon_fixed|new_canon_data|new_canon_elem)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "i31 Instructions [GC]",
                "match": "\\b(i31)\\.(?:new|get_s|get_u)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Branch Instructions [GC]",
                "match": "\\b(?:br_on_non_null|br_on_cast|br_on_cast_fail)\\b",
                "name": "keyword.operator.word.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.class.wat"
                  }
                },
                "comment": "Reference Instructions [GC]",
                "match": "\\b(extern)\\.(?:internalize|externalize)\\b",
                "name": "keyword.operator.word.wat"
              }
            ]
          }
        ]
      },
      "invalid": {
        "patterns": [
          {
            "match": "[^\\s()]+",
            "name": "invalid.wat"
          }
        ]
      },
      "modules": {
        "patterns": [
          {
            "comment": "Bulk memory operations",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "storage.modifier.wat"
                  }
                },
                "comment": "Passive modifier [bulk-memory-operations]",
                "match": "(?<=\\(data)\\s+(passive)\\b"
              }
            ]
          },
          {
            "comment": "MVP",
            "patterns": [
              {
                "comment": "Module element [mvp]",
                "match": "(?<=\\()(?:module|import|export|memory|data|table|elem|start|func|type|param|result|global|local)\\b",
                "name": "storage.type.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "storage.modifier.wat"
                  }
                },
                "comment": "Mutable global modifier [mvp]",
                "match": "(?<=\\()\\s*(mut)\\b",
                "name": "storage.modifier.wat"
              },
              {
                "captures": {
                  "1": {
                    "name": "entity.name.function.wat"
                  }
                },
                "comment": "Function name [mvp]",
                "match": "(?<=\\(func|\\(start|call|return_call|ref\\.func)\\s+(\\$[0-9A-Za-z!#$%&'*+\\-./:<=>?@\\\\^_`|~]*)"
              },
              {
                "begin": "\\)\\s+(\\$[0-9A-Za-z!#$%&'*+\\-./:<=>?@\\\\^_`|~]*)",
                "beginCaptures": {
                  "1": {
                    "name": "entity.name.function.wat"
                  }
                },
                "comment": "Function name(s) (elem) [mvp]",
                "end": "\\)",
                "patterns": [
                  {
                    "match": "(?<=\\s)\\$[0-9A-Za-z!#$%&'*+\\-./:<=>?@\\\\^_`|~]*",
                    "name": "entity.name.function.wat"
                  }
                ]
              },
              {
                "captures": {
                  "1": {
                    "name": "support.type.function.wat"
                  }
                },
                "comment": "Function type [mvp]",
                "match": "(?<=\\(type)\\s+(\\$[0-9A-Za-z!#$%&'*+\\-./:<=>?@\\\\^_`|~]*)"
              },
              {
                "comment": "Variable name or branch label [mvp]",
                "match": "\\$[0-9A-Za-z!#$%&'*+\\-./:<=>?@\\\\^_`|~]*\\b",
                "name": "variable.other.wat"
              }
            ]
          }
        ]
      },
      "strings": {
        "begin": "\"",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin"
          }
        },
        "comment": "String literal",
        "end": "\"",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end"
          }
        },
        "name": "string.quoted.double.wat",
        "patterns": [
          {
            "match": "\\\\(n|t|\\\\|'|\"|[0-9a-fA-F]{2})",
            "name": "constant.character.escape.wat"
          }
        ]
      },
      "types": {
        "patterns": [
          {
            "comment": "Fixed-width SIMD",
            "patterns": [
              {
                "comment": "Type name [simd]",
                "match": "\\bv128\\b(?!\\.)",
                "name": "entity.name.type.wat"
              }
            ]
          },
          {
            "comment": "Reference types",
            "patterns": [
              {
                "comment": "Type name [reference-types]",
                "match": "\\b(?:externref|funcref|nullref)\\b(?!\\.)",
                "name": "entity.name.type.wat"
              }
            ]
          },
          {
            "comment": "Exception handling",
            "patterns": [
              {
                "comment": "Type name [exception-handling]",
                "match": "\\bexnref\\b(?!\\.)",
                "name": "entity.name.type.wat"
              }
            ]
          },
          {
            "comment": "MVP",
            "patterns": [
              {
                "comment": "Type name [mvp]",
                "match": "\\b(?:i32|i64|f32|f64)\\b(?!\\.)",
                "name": "entity.name.type.wat"
              }
            ]
          },
          {
            "comment": "GC Types",
            "patterns": [
              {
                "comment": "Type name [GC]",
                "match": "\\b(?:i8|i16|ref|funcref|externref|anyref|eqref|i31ref|nullfuncref|nullexternref|structref|arrayref|nullref)\\b(?!\\.)",
                "name": "entity.name.type.wat"
              }
            ]
          },
          {
            "comment": "GC Heap Types",
            "patterns": [
              {
                "comment": "Type name [GC]",
                "match": "\\b(?:type|func|extern|any|eq|nofunc|noextern|struct|array|none)\\b(?!\\.)",
                "name": "entity.name.type.wat"
              }
            ]
          },
          {
            "comment": "GC Structured and sub Types",
            "patterns": [
              {
                "comment": "Type name [GC]",
                "match": "\\b(?:struct|array|sub|final|rec|field|mut)\\b(?!\\.)",
                "name": "entity.name.type.wat"
              }
            ]
          }
        ]
      }
    },
    "scopeName": "source.wat"
  }
])