/** Shiki Language: pascal */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push([
  {
    "displayName": "Pascal",
    "fileTypes": [
      "pas",
      "p",
      "pp",
      "dfm",
      "fmx",
      "dpr",
      "dpk",
      "lfm",
      "lpr"
    ],
    "name": "pascal",
    "patterns": [
      {
        "match": "\\b(?i:(absolute|abstract|add|all|and_then|array|as|asc|asm|assembler|async|attribute|autoreleasepool|await|begin|bindable|block|by|case|cdecl|class|concat|const|constref|copy|cppdecl|contains|default|delegate|deprecated|desc|distinct|div|each|else|empty|end|ensure|enum|equals|event|except|export|exports|extension|external|far|file|finalization|finalizer|finally|flags|forward|from|future|generic|goto|group|has|helper|if|implements|implies|import|in|index|inherited|initialization|inline|interrupt|into|invariants|is|iterator|label|library|join|lazy|lifetimestrategy|locked|locking|loop|mapped|matching|message|method|mod|module|name|namespace|near|nested|new|nostackframe|not|notify|nullable|object|of|old|oldfpccall|on|only|operator|optional|or_else|order|otherwise|out|override|package|packed|parallel|params|partial|pascal|pinned|platform|pow|private|program|protected|public|published|interface|implementation|qualified|queryable|raises|read|readonly|record|reference|register|remove|resident|require|requires|resourcestring|restricted|result|reverse|safecall|sealed|segment|select|selector|sequence|set|shl|shr|skip|specialize|soft|static|stored|stdcall|step|strict|strong|take|then|threadvar|to|try|tuple|type|unconstrained|unit|unmanaged|unretained|unsafe|uses|using|var|view|virtual|volatile|weak|dynamic|overload|reintroduce|where|with|write|xor|yield))\\b",
        "name": "keyword.pascal"
      },
      {
        "captures": {
          "1": {
            "name": "storage.type.prototype.pascal"
          },
          "2": {
            "name": "entity.name.function.prototype.pascal"
          }
        },
        "match": "\\b(?i:(function|procedure|constructor|destructor))\\b\\s+(\\w+(\\.\\w+)?)(\\(.*?\\))?;\\s*(?=(?i:attribute|forward|external))",
        "name": "meta.function.prototype.pascal"
      },
      {
        "captures": {
          "1": {
            "name": "storage.type.function.pascal"
          },
          "2": {
            "name": "entity.name.function.pascal"
          }
        },
        "match": "\\b(?i:(function|procedure|constructor|destructor|property|read|write))\\b\\s+(\\w+(\\.\\w+)?)",
        "name": "meta.function.pascal"
      },
      {
        "match": "\\b(?i:(self|result))\\b",
        "name": "token.variable"
      },
      {
        "match": "\\b(?i:(and|or))\\b",
        "name": "keyword.operator.pascal"
      },
      {
        "match": "\\b(?i:(break|continue|exit|abort|while|do|downto|for|raise|repeat|until))\\b",
        "name": "keyword.control.pascal"
      },
      {
        "begin": "\\{\\$",
        "captures": {
          "0": {
            "name": "string.regexp"
          }
        },
        "end": "\\}",
        "name": "string.regexp"
      },
      {
        "match": "\\b(?i:(ansichar|ansistring|boolean|byte|cardinal|char|comp|currency|double|dword|extended|file|integer|int8|int16|int32|int64|longint|longword|nativeint|nativeuint|olevariant|pansichar|pchar|pwidechar|pointer|real|shortint|shortstring|single|smallint|string|uint8|uint16|uint32|uint64|variant|widechar|widestring|word|wordbool|uintptr|intptr))\\b",
        "name": "storage.support.type.pascal"
      },
      {
        "match": "\\b(\\d+)|(\\d*\\.\\d+([eE][\\-+]?\\d+)?)\\b",
        "name": "constant.numeric.pascal"
      },
      {
        "match": "\\$[0-9a-fA-F]{1,16}\\b",
        "name": "constant.numeric.hex.pascal"
      },
      {
        "match": "\\b(?i:(true|false|nil))\\b",
        "name": "constant.language.pascal"
      },
      {
        "match": "\\b(?i:(Assert))\\b",
        "name": "keyword.control"
      },
      {
        "begin": "(^[ \\t]+)?(?=//)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.whitespace.comment.leading.pascal"
          }
        },
        "end": "(?!\\G)",
        "patterns": [
          {
            "begin": "//",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.comment.pascal"
              }
            },
            "end": "\\n",
            "name": "comment.line.double-slash.pascal.two"
          }
        ]
      },
      {
        "begin": "\\(\\*",
        "captures": {
          "0": {
            "name": "punctuation.definition.comment.pascal"
          }
        },
        "end": "\\*\\)",
        "name": "comment.block.pascal.one"
      },
      {
        "begin": "\\{(?!\\$)",
        "captures": {
          "0": {
            "name": "punctuation.definition.comment.pascal"
          }
        },
        "end": "\\}",
        "name": "comment.block.pascal.two"
      },
      {
        "begin": "'",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.pascal"
          }
        },
        "end": "'",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.pascal"
          }
        },
        "name": "string.quoted.single.pascal",
        "patterns": [
          {
            "match": "''",
            "name": "constant.character.escape.apostrophe.pascal"
          }
        ]
      },
      {
        "match": "\\#\\d+",
        "name": "string.other.pascal"
      }
    ],
    "scopeName": "source.pascal"
  }
])