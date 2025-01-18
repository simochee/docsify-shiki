/** Shiki Language: latex */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push([
  {
    "displayName": "R",
    "name": "r",
    "patterns": [
      {
        "include": "#roxygen"
      },
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
        "include": "#storage-type"
      },
      {
        "include": "#strings"
      },
      {
        "include": "#brackets"
      },
      {
        "include": "#function-declarations"
      },
      {
        "include": "#lambda-functions"
      },
      {
        "include": "#builtin-functions"
      },
      {
        "include": "#function-calls"
      },
      {
        "include": "#general-variables"
      }
    ],
    "repository": {
      "brackets": {
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.parens.begin.r"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.parens.end.r"
              }
            },
            "patterns": [
              {
                "include": "source.r"
              }
            ]
          },
          {
            "begin": "\\[(?!\\[)",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.brackets.single.begin.r"
              }
            },
            "end": "\\]",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.brackets.single.end.r"
              }
            },
            "patterns": [
              {
                "include": "source.r"
              }
            ]
          },
          {
            "begin": "\\[\\[",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.brackets.double.begin.r"
              }
            },
            "contentName": "meta.item-access.arguments.r",
            "end": "\\]\\]",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.brackets.double.end.r"
              }
            },
            "patterns": [
              {
                "include": "source.r"
              }
            ]
          },
          {
            "begin": "\\{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.braces.begin.r"
              }
            },
            "end": "\\}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.braces.end.r"
              }
            },
            "patterns": [
              {
                "include": "source.r"
              }
            ]
          }
        ]
      },
      "builtin-functions": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "support.function.r"
              }
            },
            "match": "\\b(abbreviate|abs|acos|acosh|activeBindingFunction|addNA|addTaskCallback|agrep|agrepl|alist|all|all\\.equal|all\\.equal\\.character|all\\.equal\\.default|all\\.equal\\.environment|all\\.equal\\.envRefClass|all\\.equal\\.factor|all\\.equal\\.formula|all\\.equal\\.function|all\\.equal\\.language|all\\.equal\\.list|all\\.equal\\.numeric|all\\.equal\\.POSIXt|all\\.equal\\.raw|all\\.names|allowInterrupts|all\\.vars|any|anyDuplicated|anyDuplicated\\.array|anyDuplicated\\.data\\.frame|anyDuplicated\\.default|anyDuplicated\\.matrix|anyNA|anyNA\\.data\\.frame|anyNA\\.numeric_version|anyNA\\.POSIXlt|aperm|aperm\\.default|aperm\\.table|append|apply|Arg|args|array|arrayInd|as\\.array|as\\.array\\.default|as\\.call|as\\.character|as\\.character\\.condition|as\\.character\\.Date|as\\.character\\.default|as\\.character\\.error|as\\.character\\.factor|as\\.character\\.hexmode|as\\.character\\.numeric_version|as\\.character\\.octmode|as\\.character\\.POSIXt|as\\.character\\.srcref|as\\.complex|as\\.data\\.frame|as\\.data\\.frame\\.array|as\\.data\\.frame\\.AsIs|as\\.data\\.frame\\.character|as\\.data\\.frame\\.complex|as\\.data\\.frame\\.data\\.frame|as\\.data\\.frame\\.Date|as\\.data\\.frame\\.default|as\\.data\\.frame\\.difftime|as\\.data\\.frame\\.factor|as\\.data\\.frame\\.integer|as\\.data\\.frame\\.list|as\\.data\\.frame\\.logical|as\\.data\\.frame\\.matrix|as\\.data\\.frame\\.model\\.matrix|as\\.data\\.frame\\.noquote|as\\.data\\.frame\\.numeric|as\\.data\\.frame\\.numeric_version|as\\.data\\.frame\\.ordered|as\\.data\\.frame\\.POSIXct|as\\.data\\.frame\\.POSIXlt|as\\.data\\.frame\\.raw|as\\.data\\.frame\\.table|as\\.data\\.frame\\.ts|as\\.data\\.frame\\.vector|as\\.Date|as\\.Date\\.character|as\\.Date\\.default|as\\.Date\\.factor|as\\.Date\\.numeric|as\\.Date\\.POSIXct|as\\.Date\\.POSIXlt|as\\.difftime|as\\.double|as\\.double\\.difftime|as\\.double\\.POSIXlt|as\\.environment|as\\.expression|as\\.expression\\.default|as\\.factor|as\\.function|as\\.function\\.default|as\\.hexmode|asin|asinh|as\\.integer|as\\.list|as\\.list\\.data\\.frame|as\\.list\\.Date|as\\.list\\.default|as\\.list\\.difftime|as\\.list\\.environment|as\\.list\\.factor|as\\.list\\.function|as\\.list\\.numeric_version|as\\.list\\.POSIXct|as\\.list\\.POSIXlt|as\\.logical|as\\.logical\\.factor|as\\.matrix|as\\.matrix\\.data\\.frame|as\\.matrix\\.default|as\\.matrix\\.noquote|as\\.matrix\\.POSIXlt|as\\.name|asNamespace|as\\.null|as\\.null\\.default|as\\.numeric|as\\.numeric_version|as\\.octmode|as\\.ordered|as\\.package_version|as\\.pairlist|asplit|as\\.POSIXct|as\\.POSIXct\\.Date|as\\.POSIXct\\.default|as\\.POSIXct\\.numeric|as\\.POSIXct\\.POSIXlt|as\\.POSIXlt|as\\.POSIXlt\\.character|as\\.POSIXlt\\.Date|as\\.POSIXlt\\.default|as\\.POSIXlt\\.factor|as\\.POSIXlt\\.numeric|as\\.POSIXlt\\.POSIXct|as\\.qr|as\\.raw|asS3|asS4|assign|as\\.single|as\\.single\\.default|as\\.symbol|as\\.table|as\\.table\\.default|as\\.vector|as\\.vector\\.factor|atan|atan2|atanh|attach|attachNamespace|attr|attr\\.all\\.equal|attributes|autoload|autoloader|backsolve|baseenv|basename|besselI|besselJ|besselK|besselY|beta|bindingIsActive|bindingIsLocked|bindtextdomain|bitwAnd|bitwNot|bitwOr|bitwShiftL|bitwShiftR|bitwXor|body|bquote|break|browser|browserCondition|browserSetDebug|browserText|builtins|by|by\\.data\\.frame|by\\.default|bzfile|c|call|callCC|capabilities|casefold|cat|cbind|cbind\\.data\\.frame|c\\.Date|c\\.difftime|ceiling|c\\.factor|character|char\\.expand|charmatch|charToRaw|chartr|check_tzones|chkDots|chol|chol2inv|chol\\.default|choose|class|clearPushBack|close|closeAllConnections|close\\.connection|close\\.srcfile|close\\.srcfilealias|c\\.noquote|c\\.numeric_version|col|colMeans|colnames|colSums|commandArgs|comment|complex|computeRestarts|conditionCall|conditionCall\\.condition|conditionMessage|conditionMessage\\.condition|conflictRules|conflicts|Conj|contributors|cos|cosh|cospi|c\\.POSIXct|c\\.POSIXlt|crossprod|Cstack_info|cummax|cummin|cumprod|cumsum|curlGetHeaders|cut|cut\\.Date|cut\\.default|cut\\.POSIXt|c\\.warnings|data\\.class|data\\.frame|data\\.matrix|date|debug|debuggingState|debugonce|default\\.stringsAsFactors|delayedAssign|deparse|deparse1|det|detach|determinant|determinant\\.matrix|dget|diag|diff|diff\\.Date|diff\\.default|diff\\.difftime|diff\\.POSIXt|difftime|digamma|dim|dim\\.data\\.frame|dimnames|dimnames\\.data\\.frame|dir|dir\\.create|dir\\.exists|dirname|do\\.call|dontCheck|double|dput|dQuote|drop|droplevels|droplevels\\.data\\.frame|droplevels\\.factor|dump|duplicated|duplicated\\.array|duplicated\\.data\\.frame|duplicated\\.default|duplicated\\.matrix|duplicated\\.numeric_version|duplicated\\.POSIXlt|duplicated\\.warnings|dynGet|dyn\\.load|dyn\\.unload|eapply|eigen|emptyenv|enc2native|enc2utf8|encodeString|Encoding|endsWith|enquote|environment|environmentIsLocked|environmentName|env\\.profile|errorCondition|eval|eval\\.parent|evalq|exists|exp|expand\\.grid|expm1|expression|extSoftVersion|factor|factorial|fifo|file|file\\.access|file\\.append|file\\.choose|file\\.copy|file\\.create|file\\.exists|file\\.info|file\\.link|file\\.mode|file\\.mtime|file\\.path|file\\.remove|file\\.rename|file\\.show|file\\.size|file\\.symlink|Filter|Find|findInterval|find\\.package|findPackageEnv|findRestart|floor|flush|flush\\.connection|for|force|forceAndCall|formals|format|format\\.AsIs|formatC|format\\.data\\.frame|format\\.Date|format\\.default|format\\.difftime|formatDL|format\\.factor|format\\.hexmode|format\\.info|format\\.libraryIQR|format\\.numeric_version|format\\.octmode|format\\.packageInfo|format\\.POSIXct|format\\.POSIXlt|format\\.pval|format\\.summaryDefault|forwardsolve|function|gamma|gc|gcinfo|gc\\.time|gctorture|gctorture2|get|get0|getAllConnections|getCallingDLL|getCallingDLLe|getConnection|getDLLRegisteredRoutines|getDLLRegisteredRoutines\\.character|getDLLRegisteredRoutines\\.DLLInfo|getElement|geterrmessage|getExportedValue|getHook|getLoadedDLLs|getNamespace|getNamespaceExports|getNamespaceImports|getNamespaceInfo|getNamespaceName|getNamespaceUsers|getNamespaceVersion|getNativeSymbolInfo|getOption|getRversion|getSrcLines|getTaskCallbackNames|gettext|gettextf|getwd|gl|globalCallingHandlers|globalenv|gregexec|gregexpr|grep|grepl|grepRaw|grouping|gsub|gzcon|gzfile|I|iconv|iconvlist|icuGetCollate|icuSetCollate|identical|identity|if|ifelse|Im|importIntoEnv|infoRDS|inherits|integer|interaction|interactive|intersect|intToBits|intToUtf8|inverse\\.rle|invisible|invokeRestart|invokeRestartInteractively|isa|is\\.array|is\\.atomic|isatty|isBaseNamespace|is\\.call|is\\.character|is\\.complex|is\\.data\\.frame|isdebugged|is\\.double|is\\.element|is\\.environment|is\\.expression|is\\.factor|isFALSE|is\\.finite|is\\.function|isIncomplete|is\\.infinite|is\\.integer|is\\.language|is\\.list|is\\.loaded|is\\.logical|is\\.matrix|is\\.na|is\\.na\\.data\\.frame|is\\.name|isNamespace|isNamespaceLoaded|is\\.nan|is\\.na\\.numeric_version|is\\.na\\.POSIXlt|is\\.null|is\\.numeric|is\\.numeric\\.Date|is\\.numeric\\.difftime|is\\.numeric\\.POSIXt|is\\.numeric_version|is\\.object|ISOdate|ISOdatetime|isOpen|is\\.ordered|is\\.package_version|is\\.pairlist|is\\.primitive|is\\.qr|is\\.R|is\\.raw|is\\.recursive|isRestart|isS4|isSeekable|is\\.single|is\\.symbol|isSymmetric|isSymmetric\\.matrix|is\\.table|isTRUE|is\\.unsorted|is\\.vector|jitter|julian|julian\\.Date|julian\\.POSIXt|kappa|kappa\\.default|kappa\\.lm|kappa\\.qr|kronecker|l10n_info|labels|labels\\.default|La_library|lapply|La\\.svd|La_version|lazyLoad|lazyLoadDBexec|lazyLoadDBfetch|lbeta|lchoose|length|length\\.POSIXlt|lengths|levels|levels\\.default|lfactorial|lgamma|libcurlVersion|library|library\\.dynam|library\\.dynam\\.unload|licence|license|list|list2DF|list2env|list\\.dirs|list\\.files|load|loadedNamespaces|loadingNamespaceInfo|loadNamespace|local|lockBinding|lockEnvironment|log|log10|log1p|log2|logb|logical|lower\\.tri|ls|makeActiveBinding|make\\.names|make\\.unique|Map|mapply|marginSums|margin\\.table|match|match\\.arg|match\\.call|match\\.fun|Math\\.data\\.frame|Math\\.Date|Math\\.difftime|Math\\.factor|Math\\.POSIXt|mat\\.or\\.vec|matrix|max|max\\.col|mean|mean\\.Date|mean\\.default|mean\\.difftime|mean\\.POSIXct|mean\\.POSIXlt|memCompress|memDecompress|mem\\.maxNSize|mem\\.maxVSize|memory\\.profile|merge|merge\\.data\\.frame|merge\\.default|message|mget|min|missing|Mod|mode|months|months\\.Date|months\\.POSIXt|names|namespaceExport|namespaceImport|namespaceImportClasses|namespaceImportFrom|namespaceImportMethods|names\\.POSIXlt|nargs|nchar|ncol|NCOL|Negate|new\\.env|next|NextMethod|ngettext|nlevels|noquote|norm|normalizePath|nrow|NROW|nullfile|numeric|numeric_version|numToBits|numToInts|nzchar|objects|oldClass|OlsonNames|on\\.exit|open|open\\.connection|open\\.srcfile|open\\.srcfilealias|open\\.srcfilecopy|Ops\\.data\\.frame|Ops\\.Date|Ops\\.difftime|Ops\\.factor|Ops\\.numeric_version|Ops\\.ordered|Ops\\.POSIXt|options|order|ordered|outer|packageEvent|packageHasNamespace|packageNotFoundError|packageStartupMessage|package_version|packBits|pairlist|parent\\.env|parent\\.frame|parse|parseNamespaceFile|paste|paste0|path\\.expand|path\\.package|pcre_config|pi|pipe|plot|pmatch|pmax|pmax\\.int|pmin|pmin\\.int|polyroot|Position|pos\\.to\\.env|pretty|pretty\\.default|prettyNum|print|print\\.AsIs|print\\.by|print\\.condition|print\\.connection|print\\.data\\.frame|print\\.Date|print\\.default|print\\.difftime|print\\.Dlist|print\\.DLLInfo|print\\.DLLInfoList|print\\.DLLRegisteredRoutines|print\\.eigen|print\\.factor|print\\.function|print\\.hexmode|print\\.libraryIQR|print\\.listof|print\\.NativeRoutineList|print\\.noquote|print\\.numeric_version|print\\.octmode|print\\.packageInfo|print\\.POSIXct|print\\.POSIXlt|print\\.proc_time|print\\.restart|print\\.rle|print\\.simple\\.list|print\\.srcfile|print\\.srcref|print\\.summaryDefault|print\\.summary\\.table|print\\.summary\\.warnings|print\\.table|print\\.warnings|prmatrix|proc\\.time|prod|proportions|prop\\.table|provideDimnames|psigamma|pushBack|pushBackLength|q|qr|qr\\.coef|qr\\.default|qr\\.fitted|qr\\.Q|qr\\.qty|qr\\.qy|qr\\.R|qr\\.resid|qr\\.solve|qr\\.X|quarters|quarters\\.Date|quarters\\.POSIXt|quit|quote|range|range\\.default|rank|rapply|raw|rawConnection|rawConnectionValue|rawShift|rawToBits|rawToChar|rbind|rbind\\.data\\.frame|rcond|Re|readBin|readChar|read\\.dcf|readline|readLines|readRDS|readRenviron|Recall|Reduce|regexec|regexpr|reg\\.finalizer|registerS3method|registerS3methods|regmatches|remove|removeTaskCallback|rep|rep\\.Date|rep\\.difftime|repeat|rep\\.factor|rep\\.int|replace|rep_len|replicate|rep\\.numeric_version|rep\\.POSIXct|rep\\.POSIXlt|require|requireNamespace|restartDescription|restartFormals|retracemem|return|returnValue|rev|rev\\.default|R\\.home|rle|rm|RNGkind|RNGversion|round|round\\.Date|round\\.POSIXt|row|rowMeans|rownames|row\\.names|row\\.names\\.data\\.frame|row\\.names\\.default|rowsum|rowsum\\.data\\.frame|rowsum\\.default|rowSums|R_system_version|R\\.version|R\\.Version|R\\.version\\.string|sample|sample\\.int|sapply|save|save\\.image|saveRDS|scale|scale\\.default|scan|search|searchpaths|seek|seek\\.connection|seq|seq_along|seq\\.Date|seq\\.default|seq\\.int|seq_len|seq\\.POSIXt|sequence|sequence\\.default|serialize|serverSocket|setdiff|setequal|setHook|setNamespaceInfo|set\\.seed|setSessionTimeLimit|setTimeLimit|setwd|showConnections|shQuote|sign|signalCondition|signif|simpleCondition|simpleError|simpleMessage|simpleWarning|simplify2array|sin|single|sinh|sink|sink\\.number|sinpi|slice\\.index|socketAccept|socketConnection|socketSelect|socketTimeout|solve|solve\\.default|solve\\.qr|sort|sort\\.default|sort\\.int|sort\\.list|sort\\.POSIXlt|source|split|split\\.data\\.frame|split\\.Date|split\\.default|split\\.POSIXct|sprintf|sqrt|sQuote|srcfile|srcfilealias|srcfilecopy|srcref|standardGeneric|startsWith|stderr|stdin|stdout|stop|stopifnot|storage\\.mode|str2expression|str2lang|strftime|strptime|strrep|strsplit|strtoi|strtrim|structure|strwrap|sub|subset|subset\\.data\\.frame|subset\\.default|subset\\.matrix|substitute|substr|substring|sum|summary|summary\\.connection|summary\\.data\\.frame|Summary\\.data\\.frame|summary\\.Date|Summary\\.Date|summary\\.default|Summary\\.difftime|summary\\.factor|Summary\\.factor|summary\\.matrix|Summary\\.numeric_version|Summary\\.ordered|summary\\.POSIXct|Summary\\.POSIXct|summary\\.POSIXlt|Summary\\.POSIXlt|summary\\.proc_time|summary\\.srcfile|summary\\.srcref|summary\\.table|summary\\.warnings|suppressMessages|suppressPackageStartupMessages|suppressWarnings|suspendInterrupts|svd|sweep|switch|sys\\.call|sys\\.calls|Sys\\.chmod|Sys\\.Date|sys\\.frame|sys\\.frames|sys\\.function|Sys\\.getenv|Sys\\.getlocale|Sys\\.getpid|Sys\\.glob|Sys\\.info|sys\\.load\\.image|Sys\\.localeconv|sys\\.nframe|sys\\.on\\.exit|sys\\.parent|sys\\.parents|Sys\\.readlink|sys\\.save\\.image|Sys\\.setenv|Sys\\.setFileTime|Sys\\.setlocale|Sys\\.sleep|sys\\.source|sys\\.status|system|system2|system\\.file|system\\.time|Sys\\.time|Sys\\.timezone|Sys\\.umask|Sys\\.unsetenv|Sys\\.which|t|table|tabulate|tan|tanh|tanpi|tapply|taskCallbackManager|tcrossprod|t\\.data\\.frame|t\\.default|tempdir|tempfile|textConnection|textConnectionValue|tolower|topenv|toString|toString\\.default|toupper|trace|traceback|tracemem|tracingState|transform|transform\\.data\\.frame|transform\\.default|trigamma|trimws|trunc|truncate|truncate\\.connection|trunc\\.Date|trunc\\.POSIXt|try|tryCatch|tryInvokeRestart|typeof|unclass|undebug|union|unique|unique\\.array|unique\\.data\\.frame|unique\\.default|unique\\.matrix|unique\\.numeric_version|unique\\.POSIXlt|unique\\.warnings|units|units\\.difftime|unix\\.time|unlink|unlist|unloadNamespace|unlockBinding|unname|unserialize|unsplit|untrace|untracemem|unz|upper\\.tri|url|UseMethod|utf8ToInt|validEnc|validUTF8|vapply|vector|Vectorize|version|warning|warningCondition|warnings|weekdays|weekdays\\.Date|weekdays\\.POSIXt|which|which\\.max|which\\.min|while|with|withAutoprint|withCallingHandlers|with\\.default|within|within\\.data\\.frame|within\\.list|withRestarts|withVisible|write|writeBin|writeChar|write\\.dcf|writeLines|xor|xpdrows\\.data\\.frame|xtfrm|xtfrm\\.AsIs|xtfrm\\.data\\.frame|xtfrm\\.Date|xtfrm\\.default|xtfrm\\.difftime|xtfrm\\.factor|xtfrm\\.numeric_version|xtfrm\\.POSIXct|xtfrm\\.POSIXlt|xzfile|zapsmall)\\s*(\\()"
          },
          {
            "captures": {
              "1": {
                "name": "support.function.r"
              }
            },
            "match": "\\b(abline|arrows|assocplot|axis|Axis|axis\\.Date|axis\\.POSIXct|axTicks|barplot|barplot\\.default|box|boxplot|boxplot\\.default|boxplot\\.matrix|bxp|cdplot|clip|close\\.screen|co\\.intervals|contour|contour\\.default|coplot|curve|dotchart|erase\\.screen|filled\\.contour|fourfoldplot|frame|grconvertX|grconvertY|grid|hist|hist\\.default|identify|image|image\\.default|layout|layout\\.show|lcm|legend|lines|lines\\.default|locator|matlines|matplot|matpoints|mosaicplot|mtext|pairs|pairs\\.default|panel\\.smooth|par|persp|pie|plot|plot\\.default|plot\\.design|plot\\.function|plot\\.new|plot\\.window|plot\\.xy|points|points\\.default|polygon|polypath|rasterImage|rect|rug|screen|segments|smoothScatter|spineplot|split\\.screen|stars|stem|strheight|stripchart|strwidth|sunflowerplot|symbols|text|text\\.default|title|xinch|xspline|xyinch|yinch)\\s*(\\()"
          },
          {
            "captures": {
              "1": {
                "name": "support.function.r"
              }
            },
            "match": "\\b(adjustcolor|as\\.graphicsAnnot|as\\.raster|axisTicks|bitmap|blues9|bmp|boxplot\\.stats|cairo_pdf|cairo_ps|cairoSymbolFont|check\\.options|chull|CIDFont|cm|cm\\.colors|col2rgb|colorConverter|colorRamp|colorRampPalette|colors|colorspaces|colours|contourLines|convertColor|densCols|dev2bitmap|devAskNewPage|dev\\.capabilities|dev\\.capture|dev\\.control|dev\\.copy|dev\\.copy2eps|dev\\.copy2pdf|dev\\.cur|dev\\.flush|dev\\.hold|deviceIsInteractive|dev\\.interactive|dev\\.list|dev\\.new|dev\\.next|dev\\.off|dev\\.prev|dev\\.print|dev\\.set|dev\\.size|embedFonts|extendrange|getGraphicsEvent|getGraphicsEventEnv|graphics\\.off|gray|gray\\.colors|grey|grey\\.colors|grSoftVersion|hcl|hcl\\.colors|hcl\\.pals|heat\\.colors|Hershey|hsv|is\\.raster|jpeg|make\\.rgb|n2mfrow|nclass\\.FD|nclass\\.scott|nclass\\.Sturges|palette|palette\\.colors|palette\\.pals|pdf|pdfFonts|pdf\\.options|pictex|png|postscript|postscriptFonts|ps\\.options|quartz|quartzFont|quartzFonts|quartz\\.options|quartz\\.save|rainbow|recordGraphics|recordPlot|replayPlot|rgb|rgb2hsv|savePlot|setEPS|setGraphicsEventEnv|setGraphicsEventHandlers|setPS|svg|terrain\\.colors|tiff|topo\\.colors|trans3d|Type1Font|x11|X11|X11Font|X11Fonts|X11\\.options|xfig|xy\\.coords|xyTable|xyz\\.coords)\\s*(\\()"
          },
          {
            "captures": {
              "1": {
                "name": "support.function.r"
              }
            },
            "match": "\\b(addNextMethod|allNames|Arith|as|asMethodDefinition|assignClassDef|assignMethodsMetaData|balanceMethodsList|cacheGenericsMetaData|cacheMetaData|cacheMethod|callGeneric|callNextMethod|canCoerce|cbind2|checkAtAssignment|checkSlotAssignment|classesToAM|classLabel|classMetaName|className|coerce|Compare|completeClassDefinition|completeExtends|completeSubclasses|Complex|conformMethod|defaultDumpName|defaultPrototype|doPrimitiveMethod|dumpMethod|dumpMethods|el|elNamed|empty\\.dump|emptyMethodsList|evalOnLoad|evalqOnLoad|evalSource|existsFunction|existsMethod|extends|externalRefMethod|finalDefaultMethod|findClass|findFunction|findMethod|findMethods|findMethodSignatures|findUnique|fixPre1\\.8|formalArgs|functionBody|generic\\.skeleton|getAllSuperClasses|getClass|getClassDef|getClasses|getDataPart|getFunction|getGeneric|getGenerics|getGroup|getGroupMembers|getLoadActions|getMethod|getMethods|getMethodsForDispatch|getMethodsMetaData|getPackageName|getRefClass|getSlots|getValidity|hasArg|hasLoadAction|hasMethod|hasMethods|implicitGeneric|inheritedSlotNames|initFieldArgs|initialize|initRefFields|insertClassMethods|insertMethod|insertSource|is|isClass|isClassDef|isClassUnion|isGeneric|isGrammarSymbol|isGroup|isRematched|isSealedClass|isSealedMethod|isVirtualClass|isXS3Class|kronecker|languageEl|linearizeMlist|listFromMethods|listFromMlist|loadMethod|Logic|makeClassRepresentation|makeExtends|makeGeneric|makeMethodsList|makePrototypeFromClassDef|makeStandardGeneric|matchSignature|Math|Math2|mergeMethods|metaNameUndo|MethodAddCoerce|methodSignatureMatrix|method\\.skeleton|MethodsList|MethodsListSelect|methodsPackageMetaName|missingArg|multipleClasses|new|newBasic|newClassRepresentation|newEmptyObject|Ops|packageSlot|possibleExtends|prohibitGeneric|promptClass|promptMethods|prototype|Quote|rbind2|reconcilePropertiesAndPrototype|registerImplicitGenerics|rematchDefinition|removeClass|removeGeneric|removeMethod|removeMethods|representation|requireMethods|resetClass|resetGeneric|S3Class|S3Part|sealClass|selectMethod|selectSuperClasses|setAs|setClass|setClassUnion|setDataPart|setGeneric|setGenericImplicit|setGroupGeneric|setIs|setLoadAction|setLoadActions|setMethod|setOldClass|setPackageName|setPrimitiveMethods|setRefClass|setReplaceMethod|setValidity|show|showClass|showDefault|showExtends|showMethods|showMlist|signature|SignatureMethod|sigToEnv|slot|slotNames|slotsFromS3|substituteDirect|substituteFunctionArgs|Summary|superClassDepth|testInheritedMethods|testVirtual|tryNew|unRematchDefinition|validObject|validSlotNames)\\s*(\\()"
          },
          {
            "captures": {
              "1": {
                "name": "support.function.r"
              }
            },
            "match": "\\b(acf|acf2AR|add1|addmargins|add\\.scope|aggregate|aggregate\\.data\\.frame|aggregate\\.ts|AIC|alias|anova|ansari\\.test|aov|approx|approxfun|ar|ar\\.burg|arima|arima0|arima0\\.diag|arima\\.sim|ARMAacf|ARMAtoMA|ar\\.mle|ar\\.ols|ar\\.yw|as\\.dendrogram|as\\.dist|as\\.formula|as\\.hclust|asOneSidedFormula|as\\.stepfun|as\\.ts|ave|bandwidth\\.kernel|bartlett\\.test|BIC|binomial|binom\\.test|biplot|Box\\.test|bw\\.bcv|bw\\.nrd|bw\\.nrd0|bw\\.SJ|bw\\.ucv|C|cancor|case\\.names|ccf|chisq\\.test|cmdscale|coef|coefficients|complete\\.cases|confint|confint\\.default|confint\\.lm|constrOptim|contrasts|contr\\.helmert|contr\\.poly|contr\\.SAS|contr\\.sum|contr\\.treatment|convolve|cooks\\.distance|cophenetic|cor|cor\\.test|cov|cov2cor|covratio|cov\\.wt|cpgram|cutree|cycle|D|dbeta|dbinom|dcauchy|dchisq|decompose|delete\\.response|deltat|dendrapply|density|density\\.default|deriv|deriv3|deviance|dexp|df|DF2formula|dfbeta|dfbetas|dffits|df\\.kernel|df\\.residual|dgamma|dgeom|dhyper|diffinv|dist|dlnorm|dlogis|dmultinom|dnbinom|dnorm|dpois|drop1|drop\\.scope|drop\\.terms|dsignrank|dt|dummy\\.coef|dummy\\.coef\\.lm|dunif|dweibull|dwilcox|ecdf|eff\\.aovlist|effects|embed|end|estVar|expand\\.model\\.frame|extractAIC|factanal|factor\\.scope|family|fft|filter|fisher\\.test|fitted|fitted\\.values|fivenum|fligner\\.test|formula|frequency|friedman\\.test|ftable|Gamma|gaussian|get_all_vars|getCall|getInitial|glm|glm\\.control|glm\\.fit|hasTsp|hat|hatvalues|hclust|heatmap|HoltWinters|influence|influence\\.measures|integrate|interaction\\.plot|inverse\\.gaussian|IQR|is\\.empty\\.model|is\\.leaf|is\\.mts|isoreg|is\\.stepfun|is\\.ts|is\\.tskernel|KalmanForecast|KalmanLike|KalmanRun|KalmanSmooth|kernapply|kernel|kmeans|knots|kruskal\\.test|ksmooth|ks\\.test|lag|lag\\.plot|line|lm|lm\\.fit|lm\\.influence|lm\\.wfit|loadings|loess|loess\\.control|loess\\.smooth|logLik|loglin|lowess|ls\\.diag|lsfit|ls\\.print|mad|mahalanobis|makeARIMA|make\\.link|makepredictcall|manova|mantelhaen\\.test|mauchly\\.test|mcnemar\\.test|median|median\\.default|medpolish|model\\.extract|model\\.frame|model\\.frame\\.default|model\\.matrix|model\\.matrix\\.default|model\\.matrix\\.lm|model\\.offset|model\\.response|model\\.tables|model\\.weights|monthplot|mood\\.test|mvfft|na\\.action|na\\.contiguous|na\\.exclude|na\\.fail|na\\.omit|na\\.pass|napredict|naprint|naresid|nextn|nlm|nlminb|nls|nls\\.control|NLSstAsymptotic|NLSstClosestX|NLSstLfAsymptote|NLSstRtAsymptote|nobs|numericDeriv|offset|oneway\\.test|optim|optimHess|optimise|optimize|order\\.dendrogram|pacf|p\\.adjust|p\\.adjust\\.methods|Pair|pairwise\\.prop\\.test|pairwise\\.table|pairwise\\.t\\.test|pairwise\\.wilcox\\.test|pbeta|pbinom|pbirthday|pcauchy|pchisq|pexp|pf|pgamma|pgeom|phyper|plclust|plnorm|plogis|plot\\.ecdf|plot\\.spec\\.coherency|plot\\.spec\\.phase|plot\\.stepfun|plot\\.ts|pnbinom|pnorm|poisson|poisson\\.test|poly|polym|power|power\\.anova\\.test|power\\.prop\\.test|power\\.t\\.test|ppoints|ppois|ppr|PP\\.test|prcomp|predict|predict\\.glm|predict\\.lm|preplot|princomp|printCoefmat|profile|proj|promax|prop\\.test|prop\\.trend\\.test|psignrank|pt|ptukey|punif|pweibull|pwilcox|qbeta|qbinom|qbirthday|qcauchy|qchisq|qexp|qf|qgamma|qgeom|qhyper|qlnorm|qlogis|qnbinom|qnorm|qpois|qqline|qqnorm|qqplot|qsignrank|qt|qtukey|quade\\.test|quantile|quasi|quasibinomial|quasipoisson|qunif|qweibull|qwilcox|r2dtable|rbeta|rbinom|rcauchy|rchisq|read\\.ftable|rect\\.hclust|reformulate|relevel|reorder|replications|reshape|resid|residuals|residuals\\.glm|residuals\\.lm|rexp|rf|rgamma|rgeom|rhyper|rlnorm|rlogis|rmultinom|rnbinom|rnorm|rpois|rsignrank|rstandard|rstudent|rt|runif|runmed|rweibull|rwilcox|rWishart|scatter\\.smooth|screeplot|sd|se\\.contrast|selfStart|setNames|shapiro\\.test|sigma|simulate|smooth|smoothEnds|smooth\\.spline|sortedXyData|spec\\.ar|spec\\.pgram|spec\\.taper|spectrum|spline|splinefun|splinefunH|SSasymp|SSasympOff|SSasympOrig|SSbiexp|SSD|SSfol|SSfpl|SSgompertz|SSlogis|SSmicmen|SSweibull|start|stat\\.anova|step|stepfun|stl|StructTS|summary\\.aov|summary\\.glm|summary\\.lm|summary\\.manova|summary\\.stepfun|supsmu|symnum|termplot|terms|terms\\.formula|time|toeplitz|ts|tsdiag|ts\\.intersect|tsp|ts\\.plot|tsSmooth|ts\\.union|t\\.test|TukeyHSD|uniroot|update|update\\.default|update\\.formula|var|variable\\.names|varimax|var\\.test|vcov|weighted\\.mean|weighted\\.residuals|weights|wilcox\\.test|window|write\\.ftable|xtabs)\\s*(\\()"
          },
          {
            "captures": {
              "1": {
                "name": "support.function.r"
              }
            },
            "match": "\\b(adist|alarm|apropos|aregexec|argsAnywhere|asDateBuilt|askYesNo|aspell|aspell_package_C_files|aspell_package_Rd_files|aspell_package_R_files|aspell_package_vignettes|aspell_write_personal_dictionary_file|as\\.person|as\\.personList|as\\.relistable|as\\.roman|assignInMyNamespace|assignInNamespace|available\\.packages|bibentry|browseEnv|browseURL|browseVignettes|bug\\.report|capture\\.output|changedFiles|charClass|checkCRAN|chooseBioCmirror|chooseCRANmirror|citation|cite|citeNatbib|citEntry|citFooter|citHeader|close\\.socket|combn|compareVersion|contrib\\.url|count\\.fields|create\\.post|data|dataentry|data\\.entry|de|debugcall|debugger|demo|de\\.ncols|de\\.restore|de\\.setup|download\\.file|download\\.packages|dump\\.frames|edit|emacs|example|file\\.edit|fileSnapshot|file_test|find|findLineNum|fix|fixInNamespace|flush\\.console|formatOL|formatUL|getAnywhere|getCRANmirrors|getFromNamespace|getParseData|getParseText|getS3method|getSrcDirectory|getSrcFilename|getSrcLocation|getSrcref|getTxtProgressBar|glob2rx|globalVariables|hasName|head|head\\.matrix|help|help\\.request|help\\.search|help\\.start|history|hsearch_db|hsearch_db_concepts|hsearch_db_keywords|installed\\.packages|install\\.packages|is\\.relistable|isS3method|isS3stdGeneric|limitedLabels|loadhistory|localeToCharset|lsf\\.str|ls\\.str|maintainer|make\\.packages\\.html|makeRweaveLatexCodeRunner|make\\.socket|memory\\.limit|memory\\.size|menu|methods|mirror2html|modifyList|new\\.packages|news|nsl|object\\.size|old\\.packages|osVersion|packageDate|packageDescription|packageName|package\\.skeleton|packageStatus|packageVersion|page|person|personList|pico|process\\.events|prompt|promptData|promptImport|promptPackage|rc\\.getOption|rc\\.options|rc\\.settings|rc\\.status|readCitationFile|read\\.csv|read\\.csv2|read\\.delim|read\\.delim2|read\\.DIF|read\\.fortran|read\\.fwf|read\\.socket|read\\.table|recover|relist|remove\\.packages|removeSource|Rprof|Rprofmem|RShowDoc|RSiteSearch|rtags|Rtangle|RtangleFinish|RtangleRuncode|RtangleSetup|RtangleWritedoc|RweaveChunkPrefix|RweaveEvalWithOpt|RweaveLatex|RweaveLatexFinish|RweaveLatexOptions|RweaveLatexSetup|RweaveLatexWritedoc|RweaveTryStop|savehistory|select\\.list|sessionInfo|setBreakpoint|setRepositories|setTxtProgressBar|stack|Stangle|str|strcapture|strOptions|summaryRprof|suppressForeignCheck|Sweave|SweaveHooks|SweaveSyntaxLatex|SweaveSyntaxNoweb|SweaveSyntConv|tail|tail\\.matrix|tar|timestamp|toBibtex|toLatex|txtProgressBar|type\\.convert|undebugcall|unstack|untar|unzip|update\\.packages|upgrade|URLdecode|URLencode|url\\.show|vi|View|vignette|warnErrList|write\\.csv|write\\.csv2|write\\.socket|write\\.table|xedit|xemacs|zip)\\s*(\\()"
          }
        ]
      },
      "comments": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "comment.line.pragma.r"
              },
              "2": {
                "name": "entity.name.pragma.name.r"
              }
            },
            "match": "^(#pragma[ \\t]+mark)[ \\t](.*)",
            "name": "comment.line.pragma-mark.r"
          },
          {
            "begin": "(^[ \\t]+)?(?=#)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.whitespace.comment.leading.r"
              }
            },
            "end": "(?!\\G)",
            "patterns": [
              {
                "begin": "#",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.comment.r"
                  }
                },
                "end": "\\n",
                "name": "comment.line.number-sign.r"
              }
            ]
          }
        ]
      },
      "constants": {
        "patterns": [
          {
            "match": "\\b(pi|letters|LETTERS|month\\.abb|month\\.name)\\b",
            "name": "support.constant.misc.r"
          },
          {
            "match": "\\b(TRUE|FALSE|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_|Inf|NaN)\\b",
            "name": "constant.language.r"
          },
          {
            "match": "\\b0(x|X)[0-9a-fA-F]+i\\b",
            "name": "constant.numeric.imaginary.hexadecimal.r"
          },
          {
            "match": "\\b[0-9]+\\.?[0-9]*(?:(e|E)(\\+|-)?[0-9]+)?i\\b",
            "name": "constant.numeric.imaginary.decimal.r"
          },
          {
            "match": "\\.[0-9]+(?:(e|E)(\\+|-)?[0-9]+)?i\\b",
            "name": "constant.numeric.imaginary.decimal.r"
          },
          {
            "match": "\\b0(x|X)[0-9a-fA-F]+L\\b",
            "name": "constant.numeric.integer.hexadecimal.r"
          },
          {
            "match": "\\b(?:[0-9]+\\.?[0-9]*)(?:(e|E)(\\+|-)?[0-9]+)?L\\b",
            "name": "constant.numeric.integer.decimal.r"
          },
          {
            "match": "\\b0(x|X)[0-9a-fA-F]+\\b",
            "name": "constant.numeric.float.hexadecimal.r"
          },
          {
            "match": "\\b[0-9]+\\.?[0-9]*(?:(e|E)(\\+|-)?[0-9]+)?\\b",
            "name": "constant.numeric.float.decimal.r"
          },
          {
            "match": "\\.[0-9]+(?:(e|E)(\\+|-)?[0-9]+)?\\b",
            "name": "constant.numeric.float.decimal.r"
          }
        ]
      },
      "function-calls": {
        "begin": "(?:\\b|(?=\\.))((?:[a-zA-Z._][\\w.]*|`[^`]+`))\\s*(\\()",
        "beginCaptures": {
          "1": {
            "name": "variable.function.r"
          },
          "2": {
            "name": "punctuation.section.parens.begin.r"
          }
        },
        "contentName": "meta.function-call.arguments.r",
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "punctuation.section.parens.end.r"
          }
        },
        "name": "meta.function-call.r",
        "patterns": [
          {
            "include": "#function-parameters"
          }
        ]
      },
      "function-declarations": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "entity.name.function.r"
              },
              "2": {
                "name": "keyword.operator.assignment.r"
              },
              "3": {
                "name": "keyword.control.r"
              }
            },
            "match": "((?:`[^`\\\\]*(?:\\\\.[^`\\\\]*)*`)|(?:[[:alpha:].][[:alnum:]._]*))\\s*(<?<-|=(?!=))\\s*(function|\\\\)(?!\\w)",
            "name": "meta.function.r",
            "patterns": [
              {
                "include": "#lambda-functions"
              }
            ]
          }
        ]
      },
      "function-parameters": {
        "patterns": [
          {
            "contentName": "meta.function-call.parameters.r",
            "name": "meta.function-call.r"
          },
          {
            "match": "(?:[a-zA-Z._][\\w.]*|`[^`]+`)(?=\\s[^=])",
            "name": "variable.other.r"
          },
          {
            "begin": "(?==)",
            "end": "(?=[,)])",
            "patterns": [
              {
                "include": "source.r"
              }
            ]
          },
          {
            "match": ",",
            "name": "punctuation.separator.parameters.r"
          },
          {
            "include": "source.r"
          }
        ]
      },
      "general-variables": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "variable.parameter.r"
              },
              "2": {
                "name": "keyword.operator.assignment.r"
              }
            },
            "match": "([[:alpha:].][[:alnum:]._]*)\\s*(=)(?=[^=])"
          },
          {
            "captures": {
              "1": {
                "name": "variable.parameter.r"
              },
              "2": {
                "name": "keyword.operator.assignment.r"
              }
            },
            "match": "(`[^`]+`)\\s*(=)(?=[^=])"
          },
          {
            "match": "\\b([\\d_][[:alnum:]._]+)\\b",
            "name": "invalid.illegal.variable.other.r"
          },
          {
            "match": "\\b([[:alnum:]_]+)(?=::)",
            "name": "entity.namespace.r"
          }
        ]
      },
      "keywords": {
        "patterns": [
          {
            "match": "\\b(break|next|repeat|else|in)\\b",
            "name": "keyword.control.r"
          },
          {
            "match": "\\b(ifelse|if|for|return|switch|while|invisible)\\b(?=\\s*\\()",
            "name": "keyword.control.r"
          },
          {
            "match": "(\\-|\\+|\\*|\\/|%\\/%|%%|%\\*%|%o%|%x%|\\^)",
            "name": "keyword.operator.arithmetic.r"
          },
          {
            "match": "(:=|<-|<<-|->|->>)",
            "name": "keyword.operator.assignment.r"
          },
          {
            "match": "(==|<=|>=|!=|<>|<|>|%in%)",
            "name": "keyword.operator.comparison.r"
          },
          {
            "match": "(!|&{1,2}|[|]{1,2})",
            "name": "keyword.operator.logical.r"
          },
          {
            "match": "(\\|>)",
            "name": "keyword.operator.pipe.r"
          },
          {
            "match": "(%between%|%chin%|%like%|%\\+%|%\\+replace%|%:%|%do%|%dopar%|%>%|%<>%|%T>%|%\\$%)",
            "name": "keyword.operator.other.r"
          },
          {
            "match": "(\\.\\.\\.|\\$|:|\\~|@)",
            "name": "keyword.other.r"
          }
        ]
      },
      "lambda-functions": {
        "patterns": [
          {
            "begin": "\\b(function)\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.r"
              },
              "2": {
                "name": "punctuation.section.parens.begin.r"
              }
            },
            "contentName": "meta.function.parameters.r",
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.parens.end.r"
              }
            },
            "name": "meta.function.r",
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "match": "(?:[a-zA-Z._][\\w.]*|`[^`]+`)",
                "name": "variable.other.r"
              },
              {
                "begin": "(?==)",
                "end": "(?=[,)])",
                "patterns": [
                  {
                    "include": "source.r"
                  }
                ]
              },
              {
                "match": ",",
                "name": "punctuation.separator.parameters.r"
              }
            ]
          }
        ]
      },
      "roxygen": {
        "patterns": [
          {
            "begin": "^\\s*(#')\\s*",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.comment.r"
              }
            },
            "end": "$\\n?",
            "name": "comment.line.roxygen.r",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "keyword.other.r"
                  },
                  "2": {
                    "name": "variable.parameter.r"
                  }
                },
                "match": "(@param)\\s*((?:[a-zA-Z._][\\w.]*|`[^`]+`))"
              },
              {
                "match": "@[a-zA-Z0-9]+",
                "name": "keyword.other.r"
              }
            ]
          }
        ]
      },
      "storage-type": {
        "patterns": [
          {
            "match": "\\b(character|complex|double|expression|integer|list|logical|numeric|single|raw)\\b(?=\\s*\\()",
            "name": "storage.type.r"
          }
        ]
      },
      "strings": {
        "patterns": [
          {
            "begin": "[rR]\"(-*)\\[",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.raw.begin.r"
              }
            },
            "end": "\\]\\1\"",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.raw.end.r"
              }
            },
            "name": "string.quoted.double.raw.r"
          },
          {
            "begin": "[rR]'(-*)\\[",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.raw.begin.r"
              }
            },
            "end": "\\]\\1'",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.raw.end.r"
              }
            },
            "name": "string.quoted.single.raw.r"
          },
          {
            "begin": "[rR]\"(-*)\\{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.raw.begin.r"
              }
            },
            "end": "\\}\\1\"",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.raw.end.r"
              }
            },
            "name": "string.quoted.double.raw.r"
          },
          {
            "begin": "[rR]'(-*)\\{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.raw.begin.r"
              }
            },
            "end": "\\}\\1'",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.raw.end.r"
              }
            },
            "name": "string.quoted.single.raw.r"
          },
          {
            "begin": "[rR]\"(-*)\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.raw.begin.r"
              }
            },
            "end": "\\)\\1\"",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.raw.end.r"
              }
            },
            "name": "string.quoted.double.raw.r"
          },
          {
            "begin": "[rR]'(-*)\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.raw.begin.r"
              }
            },
            "end": "\\)\\1'",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.raw.end.r"
              }
            },
            "name": "string.quoted.single.raw.r"
          },
          {
            "begin": "\"",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.r"
              }
            },
            "end": "\"",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.r"
              }
            },
            "name": "string.quoted.double.r",
            "patterns": [
              {
                "match": "\\\\.",
                "name": "constant.character.escape.r"
              }
            ]
          },
          {
            "begin": "'",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.r"
              }
            },
            "end": "'",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.r"
              }
            },
            "name": "string.quoted.single.r",
            "patterns": [
              {
                "match": "\\\\.",
                "name": "constant.character.escape.r"
              }
            ]
          }
        ]
      }
    },
    "scopeName": "source.r"
  },
  {
    "displayName": "TeX",
    "name": "tex",
    "patterns": [
      {
        "begin": "(?<=^\\s*)((\\\\)iffalse)(?!\\s*[{}]\\s*\\\\fi)",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.tex"
          },
          "2": {
            "name": "punctuation.definition.keyword.tex"
          }
        },
        "contentName": "comment.line.percentage.tex",
        "end": "((\\\\)(?:else|fi))",
        "endCaptures": {
          "1": {
            "name": "keyword.control.tex"
          },
          "2": {
            "name": "punctuation.definition.keyword.tex"
          }
        },
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#braces"
          },
          {
            "include": "#conditionals"
          }
        ]
      },
      {
        "captures": {
          "1": {
            "name": "punctuation.definition.keyword.tex"
          }
        },
        "match": "(\\\\)(backmatter|csname|else|endcsname|fi|frontmatter|mainmatter|unless|if(case|cat|csname|defined|dim|eof|false|fontchar|hbox|hmode|inner|mmode|num|odd|true|vbox|vmode|void|x)?)(?![a-zA-Z@])",
        "name": "keyword.control.tex"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.control.catcode.tex"
          },
          "2": {
            "name": "punctuation.definition.keyword.tex"
          },
          "3": {
            "name": "punctuation.separator.key-value.tex"
          },
          "4": {
            "name": "constant.numeric.category.tex"
          }
        },
        "match": "((\\\\)catcode)`(?:\\\\)?.(=)(\\d+)",
        "name": "meta.catcode.tex"
      },
      {
        "include": "#comment"
      },
      {
        "match": "[\\[\\]]",
        "name": "punctuation.definition.brackets.tex"
      },
      {
        "begin": "(\\$\\$|\\$)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.string.begin.tex"
          }
        },
        "end": "(\\1)",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.string.end.tex"
          }
        },
        "name": "meta.math.block.tex support.class.math.block.tex",
        "patterns": [
          {
            "match": "\\\\\\$",
            "name": "constant.character.escape.tex"
          },
          {
            "include": "#math"
          },
          {
            "include": "$self"
          }
        ]
      },
      {
        "match": "\\\\\\\\",
        "name": "keyword.control.newline.tex"
      },
      {
        "captures": {
          "1": {
            "name": "punctuation.definition.function.tex"
          }
        },
        "match": "(\\\\)_*[\\p{Alphabetic}@]+(?:_[\\p{Alphabetic}@]+)*:[NncVvoxefTFpwD]*",
        "name": "support.class.general.latex3.tex"
      },
      {
        "captures": {
          "1": {
            "name": "punctuation.definition.function.tex"
          }
        },
        "match": "(\\.)[\\p{Alphabetic}@]+(?:_[\\p{Alphabetic}@]+)*:[NncVvoxefTFpwD]*",
        "name": "support.class.general.latex3.tex"
      },
      {
        "captures": {
          "1": {
            "name": "punctuation.definition.function.tex"
          }
        },
        "match": "(\\\\)(?:[,;]|(?:[\\p{Alphabetic}@]+))",
        "name": "support.function.general.tex"
      },
      {
        "captures": {
          "1": {
            "name": "punctuation.definition.keyword.tex"
          }
        },
        "match": "(\\\\)[^a-zA-Z@]",
        "name": "constant.character.escape.tex"
      }
    ],
    "repository": {
      "braces": {
        "begin": "(?<!\\\\)\\{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.group.begin.tex"
          }
        },
        "end": "(?<!\\\\)\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.group.end.tex"
          }
        },
        "name": "meta.group.braces.tex",
        "patterns": [
          {
            "include": "#braces"
          }
        ]
      },
      "comment": {
        "begin": "(^[ \\t]+)?(?=%)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.whitespace.comment.leading.tex"
          }
        },
        "end": "(?!\\G)",
        "patterns": [
          {
            "begin": "%:?",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.comment.tex"
              }
            },
            "end": "$\\n?",
            "name": "comment.line.percentage.tex"
          },
          {
            "begin": "^(%!TEX) (\\S*) =",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.comment.tex"
              }
            },
            "end": "$\\n?",
            "name": "comment.line.percentage.directive.tex"
          }
        ]
      },
      "conditionals": {
        "begin": "(?<=^\\s*)\\\\if[a-z]*",
        "end": "(?<=^\\s*)\\\\fi",
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#conditionals"
          }
        ]
      },
      "math": {
        "patterns": [
          {
            "begin": "((\\\\)(?:text|mbox))(\\{)",
            "beginCaptures": {
              "1": {
                "name": "constant.other.math.tex"
              },
              "2": {
                "name": "punctuation.definition.function.tex"
              },
              "3": {
                "name": "punctuation.definition.arguments.begin.tex meta.text.normal.tex"
              }
            },
            "contentName": "meta.text.normal.tex",
            "end": "\\}",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.arguments.end.tex meta.text.normal.tex"
              }
            },
            "patterns": [
              {
                "include": "#math"
              },
              {
                "include": "$self"
              }
            ]
          },
          {
            "match": "\\\\{|\\\\}",
            "name": "punctuation.math.bracket.pair.tex"
          },
          {
            "match": "\\\\(left|right|((big|bigg|Big|Bigg)[lr]?))([\\(\\[\\<\\>\\]\\)\\.\\|]|\\\\[{}|]|\\\\[lr]?[Vv]ert|\\\\[lr]angle)",
            "name": "punctuation.math.bracket.pair.big.tex"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.constant.math.tex"
              }
            },
            "match": "(\\\\)(s(s(earrow|warrow|lash)|h(ort(downarrow|uparrow|parallel|leftarrow|rightarrow|mid)|arp)|tar|i(gma|m(eq)?)|u(cc(sim|n(sim|approx)|curlyeq|eq|approx)?|pset(neq(q)?|plus(eq)?|eq(q)?)?|rd|m|bset(neq(q)?|plus(eq)?|eq(q)?)?)|p(hericalangle|adesuit)|e(tminus|arrow)|q(su(pset(eq)?|bset(eq)?)|c(up|ap)|uare)|warrow|m(ile|all(s(etminus|mile)|frown)))|h(slash|ook(leftarrow|rightarrow)|eartsuit|bar)|R(sh|ightarrow|e|bag)|Gam(e|ma)|n(s(hort(parallel|mid)|im|u(cc(eq)?|pseteq(q)?|bseteq))|Rightarrow|n(earrow|warrow)|cong|triangle(left(eq(slant)?)?|right(eq(slant)?)?)|i(plus)?|u|p(lus|arallel|rec(eq)?)|e(q|arrow|g|xists)|v(dash|Dash)|warrow|le(ss|q(slant|q)?|ft(arrow|rightarrow))|a(tural|bla)|VDash|rightarrow|g(tr|eq(slant|q)?)|mid|Left(arrow|rightarrow))|c(hi|irc(eq|le(d(circ|S|dash|ast)|arrow(left|right)))?|o(ng|prod|lon|mplement)|dot(s|p)?|u(p|r(vearrow(left|right)|ly(eq(succ|prec)|vee(downarrow|uparrow)?|wedge(downarrow|uparrow)?)))|enterdot|lubsuit|ap)|Xi|Maps(to(char)?|from(char)?)|B(ox|umpeq|bbk)|t(h(ick(sim|approx)|e(ta|refore))|imes|op|wohead(leftarrow|rightarrow)|a(u|lloblong)|riangle(down|q|left(eq(slant)?)?|right(eq(slant)?)?)?)|i(n(t(er(cal|leave))?|plus|fty)?|ota|math)|S(igma|u(pset|bset))|zeta|o(slash|times|int|dot|plus|vee|wedge|lessthan|greaterthan|m(inus|ega)|b(slash|long|ar))|d(i(v(ideontimes)?|a(g(down|up)|mond(suit)?)|gamma)|o(t(plus|eq(dot)?)|ublebarwedge|wn(harpoon(left|right)|downarrows|arrow))|d(ots|agger)|elta|a(sh(v|leftarrow|rightarrow)|leth|gger))|Y(down|up|left|right)|C(up|ap)|u(n(lhd|rhd)|p(silon|harpoon(left|right)|downarrow|uparrows|lus|arrow)|lcorner|rcorner)|jmath|Theta|Im|p(si|hi|i(tchfork)?|erp|ar(tial|allel)|r(ime|o(d|pto)|ec(sim|n(sim|approx)|curlyeq|eq|approx)?)|m)|e(t(h|a)|psilon|q(slant(less|gtr)|circ|uiv)|ll|xists|mptyset)|Omega|D(iamond|ownarrow|elta)|v(d(ots|ash)|ee(bar)?|Dash|ar(s(igma|u(psetneq(q)?|bsetneq(q)?))|nothing|curly(vee|wedge)|t(heta|imes|riangle(left|right)?)|o(slash|circle|times|dot|plus|vee|wedge|lessthan|ast|greaterthan|minus|b(slash|ar))|p(hi|i|ropto)|epsilon|kappa|rho|bigcirc))|kappa|Up(silon|downarrow|arrow)|Join|f(orall|lat|a(t(s(emi|lash)|bslash)|llingdotseq)|rown)|P(si|hi|i)|w(p|edge|r)|l(hd|n(sim|eq(q)?|approx)|ceil|times|ightning|o(ng(left(arrow|rightarrow)|rightarrow|maps(to|from))|zenge|oparrow(left|right))|dot(s|p)|e(ss(sim|dot|eq(qgtr|gtr)|approx|gtr)|q(slant|q)?|ft(slice|harpoon(down|up)|threetimes|leftarrows|arrow(t(ail|riangle))?|right(squigarrow|harpoons|arrow(s|triangle|eq)?))|adsto)|vertneqq|floor|l(c(orner|eil)|floor|l|bracket)?|a(ngle|mbda)|rcorner|bag)|a(s(ymp|t)|ngle|pprox(eq)?|l(pha|eph)|rrownot|malg)|V(dash|vdash)|r(h(o|d)|ceil|times|i(singdotseq|ght(s(quigarrow|lice)|harpoon(down|up)|threetimes|left(harpoons|arrows)|arrow(t(ail|riangle))?|rightarrows))|floor|angle|r(ceil|parenthesis|floor|bracket)|bag)|g(n(sim|eq(q)?|approx)|tr(sim|dot|eq(qless|less)|less|approx)|imel|eq(slant|q)?|vertneqq|amma|g(g)?)|Finv|xi|m(ho|i(nuso|d)|o(o|dels)|u(ltimap)?|p|e(asuredangle|rge)|aps(to|from(char)?))|b(i(n(dnasrepma|ampersand)|g(s(tar|qc(up|ap))|nplus|c(irc|u(p|rly(vee|wedge))|ap)|triangle(down|up)|interleave|o(times|dot|plus)|uplus|parallel|vee|wedge|box))|o(t|wtie|x(slash|circle|times|dot|plus|empty|ast|minus|b(slash|ox|ar)))|u(llet|mpeq)|e(cause|t(h|ween|a))|lack(square|triangle(down|left|right)?|lozenge)|a(ck(s(im(eq)?|lash)|prime|epsilon)|r(o|wedge))|bslash)|L(sh|ong(left(arrow|rightarrow)|rightarrow|maps(to|from))|eft(arrow|rightarrow)|leftarrow|ambda|bag)|Arrownot)(?![a-zA-Z@])",
            "name": "constant.character.math.tex"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.constant.math.tex"
              }
            },
            "match": "(\\\\)(sum|prod|coprod|int|oint|bigcap|bigcup|bigsqcup|bigvee|bigwedge|bigodot|bigotimes|bogoplus|biguplus)\\b",
            "name": "constant.character.math.tex"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.constant.math.tex"
              }
            },
            "match": "(\\\\)(arccos|arcsin|arctan|arg|cos|cosh|cot|coth|csc|deg|det|dim|exp|gcd|hom|inf|ker|lg|lim|liminf|limsup|ln|log|max|min|pr|sec|sin|sinh|sup|tan|tanh)\\b",
            "name": "constant.other.math.tex"
          },
          {
            "begin": "((\\\\)Sexpr(\\{))",
            "beginCaptures": {
              "1": {
                "name": "support.function.sexpr.math.tex"
              },
              "2": {
                "name": "punctuation.definition.function.math.tex"
              },
              "3": {
                "name": "punctuation.section.embedded.begin.math.tex"
              }
            },
            "contentName": "support.function.sexpr.math.tex",
            "end": "(((\\})))",
            "endCaptures": {
              "1": {
                "name": "support.function.sexpr.math.tex"
              },
              "2": {
                "name": "punctuation.section.embedded.end.math.tex"
              },
              "3": {
                "name": "source.r"
              }
            },
            "name": "meta.embedded.line.r",
            "patterns": [
              {
                "begin": "\\G(?!\\})",
                "end": "(?=\\})",
                "name": "source.r",
                "patterns": [
                  {
                    "include": "source.r"
                  }
                ]
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.constant.math.tex"
              }
            },
            "match": "(\\\\)(?!begin\\{|verb)([A-Za-z]+)",
            "name": "constant.other.general.math.tex"
          },
          {
            "match": "(?<!\\\\)\\{",
            "name": "punctuation.math.begin.bracket.curly.tex"
          },
          {
            "match": "(?<!\\\\)\\}",
            "name": "punctuation.math.end.bracket.curly.tex"
          },
          {
            "match": "(?<!\\\\)\\(",
            "name": "punctuation.math.begin.bracket.round.tex"
          },
          {
            "match": "(?<!\\\\)\\)",
            "name": "punctuation.math.end.bracket.round.tex"
          },
          {
            "match": "(([0-9]*[\\.][0-9]+)|[0-9]+)",
            "name": "constant.numeric.math.tex"
          },
          {
            "match": "[\\+\\*/_\\^-]",
            "name": "punctuation.math.operator.tex"
          }
        ]
      }
    },
    "scopeName": "text.tex",
    "embeddedLangs": [
      "r"
    ]
  },
  {
    "displayName": "LaTeX",
    "name": "latex",
    "patterns": [
      {
        "comment": "This scope identifies partially typed commands such as `\\tab`. We use this to trigger “Command Completion” only when it makes sense.",
        "match": "(?<=\\\\[\\w@]|\\\\[\\w@]{2}|\\\\[\\w@]{3}|\\\\[\\w@]{4}|\\\\[\\w@]{5}|\\\\[\\w@]{6})\\s",
        "name": "meta.space-after-command.latex"
      },
      {
        "begin": "((\\\\)(?:usepackage|documentclass))\\b(?=\\[|\\{)",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.preamble.latex"
          },
          "2": {
            "name": "punctuation.definition.function.latex"
          }
        },
        "end": "(?<=\\})",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.arguments.end.latex"
          }
        },
        "name": "meta.preamble.latex",
        "patterns": [
          {
            "include": "#multiline-optional-arg"
          },
          {
            "begin": "((?:\\G|(?<=\\]))\\{)",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "contentName": "support.class.latex",
            "end": "(\\})",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            },
            "patterns": [
              {
                "include": "$self"
              }
            ]
          }
        ]
      },
      {
        "begin": "((\\\\)(?:include|input))(\\{)",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.include.latex"
          },
          "2": {
            "name": "punctuation.definition.function.latex"
          },
          "3": {
            "name": "punctuation.definition.arguments.begin.latex"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.arguments.end.latex"
          }
        },
        "name": "meta.include.latex",
        "patterns": [
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "((\\\\)((?:sub){0,2}section|(?:sub)?paragraph|chapter|part|addpart|addchap|addsec|minisec|frametitle)(?:\\*)?)((?:\\[[^\\[]*?\\]){0,2})(\\{)",
        "beginCaptures": {
          "1": {
            "name": "support.function.section.latex"
          },
          "2": {
            "name": "punctuation.definition.function.latex"
          },
          "4": {
            "patterns": [
              {
                "include": "#optional-arg-bracket"
              }
            ]
          },
          "5": {
            "name": "punctuation.definition.arguments.begin.latex"
          }
        },
        "comment": "this works OK with all kinds of crazy stuff as long as section is one line",
        "contentName": "entity.name.section.latex",
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.arguments.end.latex"
          }
        },
        "name": "meta.function.section.$3.latex",
        "patterns": [
          {
            "include": "text.tex#braces"
          },
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "((?:\\s*)\\\\begin\\{songs\\}\\{.*\\})",
        "captures": {
          "1": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "contentName": "meta.data.environment.songs.latex",
        "end": "(\\\\end\\{songs\\}(?:\\s*\\n)?)",
        "name": "meta.function.environment.songs.latex",
        "patterns": [
          {
            "begin": "\\\\\\[",
            "end": "\\]",
            "name": "meta.chord.block.latex support.class.chord.block.environment.latex",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          },
          {
            "match": "\\^",
            "name": "meta.chord.block.latex support.class.chord.block.environment.latex"
          },
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "(?:^\\s*)?\\\\begin\\{(lstlisting|minted|pyglist)\\}(?=\\[|\\{)",
        "captures": {
          "0": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "end": "\\\\end\\{\\1\\}",
        "patterns": [
          {
            "include": "#multiline-optional-arg-no-highlight"
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)((?:asy|asymptote))(\\})",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              },
              "2": {
                "name": "variable.parameter.function.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            },
            "contentName": "source.asy",
            "end": "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
            "patterns": [
              {
                "include": "source.asy"
              }
            ]
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)((?:bash))(\\})",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              },
              "2": {
                "name": "variable.parameter.function.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            },
            "contentName": "source.shell",
            "end": "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
            "patterns": [
              {
                "include": "source.shell"
              }
            ]
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)((?:c|cpp))(\\})",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              },
              "2": {
                "name": "variable.parameter.function.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            },
            "contentName": "source.cpp.embedded.latex",
            "end": "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
            "patterns": [
              {
                "include": "source.cpp.embedded.latex"
              }
            ]
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)((?:css))(\\})",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              },
              "2": {
                "name": "variable.parameter.function.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            },
            "contentName": "source.css",
            "end": "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
            "patterns": [
              {
                "include": "source.css"
              }
            ]
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)((?:gnuplot))(\\})",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              },
              "2": {
                "name": "variable.parameter.function.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            },
            "contentName": "source.gnuplot",
            "end": "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
            "patterns": [
              {
                "include": "source.gnuplot"
              }
            ]
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)((?:hs|haskell))(\\})",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              },
              "2": {
                "name": "variable.parameter.function.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            },
            "contentName": "source.haskell",
            "end": "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
            "patterns": [
              {
                "include": "source.haskell"
              }
            ]
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)((?:html))(\\})",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              },
              "2": {
                "name": "variable.parameter.function.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            },
            "contentName": "text.html",
            "end": "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
            "patterns": [
              {
                "include": "text.html.basic"
              }
            ]
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)((?:java))(\\})",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              },
              "2": {
                "name": "variable.parameter.function.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            },
            "contentName": "source.java",
            "end": "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
            "patterns": [
              {
                "include": "source.java"
              }
            ]
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)((?:jl|julia))(\\})",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              },
              "2": {
                "name": "variable.parameter.function.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            },
            "contentName": "source.julia",
            "end": "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
            "patterns": [
              {
                "include": "source.julia"
              }
            ]
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)((?:js|javascript))(\\})",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              },
              "2": {
                "name": "variable.parameter.function.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            },
            "contentName": "source.js",
            "end": "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
            "patterns": [
              {
                "include": "source.js"
              }
            ]
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)((?:lua))(\\})",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              },
              "2": {
                "name": "variable.parameter.function.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            },
            "contentName": "source.lua",
            "end": "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
            "patterns": [
              {
                "include": "source.lua"
              }
            ]
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)((?:py|python|sage))(\\})",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              },
              "2": {
                "name": "variable.parameter.function.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            },
            "contentName": "source.python",
            "end": "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
            "patterns": [
              {
                "include": "source.python"
              }
            ]
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)((?:rb|ruby))(\\})",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              },
              "2": {
                "name": "variable.parameter.function.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            },
            "contentName": "source.ruby",
            "end": "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
            "patterns": [
              {
                "include": "source.ruby"
              }
            ]
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)((?:rust))(\\})",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              },
              "2": {
                "name": "variable.parameter.function.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            },
            "contentName": "source.rust",
            "end": "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
            "patterns": [
              {
                "include": "source.rust"
              }
            ]
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)((?:ts|typescript))(\\})",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              },
              "2": {
                "name": "variable.parameter.function.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            },
            "contentName": "source.ts",
            "end": "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
            "patterns": [
              {
                "include": "source.ts"
              }
            ]
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)((?:xml))(\\})",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              },
              "2": {
                "name": "variable.parameter.function.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            },
            "contentName": "text.xml",
            "end": "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
            "patterns": [
              {
                "include": "text.xml"
              }
            ]
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)((?:yaml))(\\})",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              },
              "2": {
                "name": "variable.parameter.function.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            },
            "contentName": "source.yaml",
            "end": "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
            "patterns": [
              {
                "include": "source.yaml"
              }
            ]
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)([a-zA-Z]*)(\\})",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              },
              "2": {
                "name": "variable.parameter.function.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            },
            "contentName": "meta.function.embedded.latex",
            "end": "^\\s*(?=\\\\end\\{(?:lstlisting|minted|pyglist)\\})",
            "name": "meta.embedded.block.generic.latex"
          }
        ]
      },
      {
        "begin": "\\s*\\\\begin\\{(?:asy|asycode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
        "captures": {
          "0": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "end": "\\s*\\\\end\\{(?:asy|asycode)\\*?\\}",
        "patterns": [
          {
            "include": "#multiline-optional-arg-no-highlight"
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "contentName": "variable.parameter.function.latex",
            "end": "(\\})",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            }
          },
          {
            "begin": "^(?=\\s*)",
            "contentName": "source.asymptote",
            "end": "^\\s*(?=\\\\end\\{(?:asy|asycode)\\*?\\})",
            "patterns": [
              {
                "include": "source.asymptote"
              }
            ]
          }
        ]
      },
      {
        "begin": "\\s*\\\\begin\\{(?:cppcode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
        "captures": {
          "0": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "end": "\\s*\\\\end\\{(?:cppcode)\\*?\\}",
        "patterns": [
          {
            "include": "#multiline-optional-arg-no-highlight"
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "contentName": "variable.parameter.function.latex",
            "end": "(\\})",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            }
          },
          {
            "begin": "^(?=\\s*)",
            "contentName": "source.cpp.embedded.latex",
            "end": "^\\s*(?=\\\\end\\{(?:cppcode)\\*?\\})",
            "patterns": [
              {
                "include": "source.cpp.embedded.latex"
              }
            ]
          }
        ]
      },
      {
        "begin": "\\s*\\\\begin\\{(?:dot2tex|dotcode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
        "captures": {
          "0": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "end": "\\s*\\\\end\\{(?:dot2tex|dotcode)\\*?\\}",
        "patterns": [
          {
            "include": "#multiline-optional-arg-no-highlight"
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "contentName": "variable.parameter.function.latex",
            "end": "(\\})",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            }
          },
          {
            "begin": "^(?=\\s*)",
            "contentName": "source.dot",
            "end": "^\\s*(?=\\\\end\\{(?:dot2tex|dotcode)\\*?\\})",
            "patterns": [
              {
                "include": "source.dot"
              }
            ]
          }
        ]
      },
      {
        "begin": "\\s*\\\\begin\\{(?:gnuplot)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
        "captures": {
          "0": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "end": "\\s*\\\\end\\{(?:gnuplot)\\*?\\}",
        "patterns": [
          {
            "include": "#multiline-optional-arg-no-highlight"
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "contentName": "variable.parameter.function.latex",
            "end": "(\\})",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            }
          },
          {
            "begin": "^(?=\\s*)",
            "contentName": "source.gnuplot",
            "end": "^\\s*(?=\\\\end\\{(?:gnuplot)\\*?\\})",
            "patterns": [
              {
                "include": "source.gnuplot"
              }
            ]
          }
        ]
      },
      {
        "begin": "\\s*\\\\begin\\{(?:hscode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
        "captures": {
          "0": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "end": "\\s*\\\\end\\{(?:hscode)\\*?\\}",
        "patterns": [
          {
            "include": "#multiline-optional-arg-no-highlight"
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "contentName": "variable.parameter.function.latex",
            "end": "(\\})",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            }
          },
          {
            "begin": "^(?=\\s*)",
            "contentName": "source.haskell",
            "end": "^\\s*(?=\\\\end\\{(?:hscode)\\*?\\})",
            "patterns": [
              {
                "include": "source.haskell"
              }
            ]
          }
        ]
      },
      {
        "begin": "\\s*\\\\begin\\{(?:jlcode|jlverbatim|jlblock|jlconcode|jlconsole|jlconverbatim)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
        "captures": {
          "0": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "end": "\\s*\\\\end\\{(?:jlcode|jlverbatim|jlblock|jlconcode|jlconsole|jlconverbatim)\\*?\\}",
        "patterns": [
          {
            "include": "#multiline-optional-arg-no-highlight"
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "contentName": "variable.parameter.function.latex",
            "end": "(\\})",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            }
          },
          {
            "begin": "^(?=\\s*)",
            "contentName": "source.julia",
            "end": "^\\s*(?=\\\\end\\{(?:jlcode|jlverbatim|jlblock|jlconcode|jlconsole|jlconverbatim)\\*?\\})",
            "patterns": [
              {
                "include": "source.julia"
              }
            ]
          }
        ]
      },
      {
        "begin": "\\s*\\\\begin\\{(?:juliacode|juliaverbatim|juliablock|juliaconcode|juliaconsole|juliaconverbatim)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
        "captures": {
          "0": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "end": "\\s*\\\\end\\{(?:juliacode|juliaverbatim|juliablock|juliaconcode|juliaconsole|juliaconverbatim)\\*?\\}",
        "patterns": [
          {
            "include": "#multiline-optional-arg-no-highlight"
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "contentName": "variable.parameter.function.latex",
            "end": "(\\})",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            }
          },
          {
            "begin": "^(?=\\s*)",
            "contentName": "source.julia",
            "end": "^\\s*(?=\\\\end\\{(?:juliacode|juliaverbatim|juliablock|juliaconcode|juliaconsole|juliaconverbatim)\\*?\\})",
            "patterns": [
              {
                "include": "source.julia"
              }
            ]
          }
        ]
      },
      {
        "begin": "\\s*\\\\begin\\{(?:luacode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
        "captures": {
          "0": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "end": "\\s*\\\\end\\{(?:luacode)\\*?\\}",
        "patterns": [
          {
            "include": "#multiline-optional-arg-no-highlight"
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "contentName": "variable.parameter.function.latex",
            "end": "(\\})",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            }
          },
          {
            "begin": "^(?=\\s*)",
            "contentName": "source.lua",
            "end": "^\\s*(?=\\\\end\\{(?:luacode)\\*?\\})",
            "patterns": [
              {
                "include": "source.lua"
              }
            ]
          }
        ]
      },
      {
        "begin": "\\s*\\\\begin\\{(?:pycode|pyverbatim|pyblock|pyconcode|pyconsole|pyconverbatim)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
        "captures": {
          "0": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "end": "\\s*\\\\end\\{(?:pycode|pyverbatim|pyblock|pyconcode|pyconsole|pyconverbatim)\\*?\\}",
        "patterns": [
          {
            "include": "#multiline-optional-arg-no-highlight"
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "contentName": "variable.parameter.function.latex",
            "end": "(\\})",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            }
          },
          {
            "begin": "^(?=\\s*)",
            "contentName": "source.python",
            "end": "^\\s*(?=\\\\end\\{(?:pycode|pyverbatim|pyblock|pyconcode|pyconsole|pyconverbatim)\\*?\\})",
            "patterns": [
              {
                "include": "source.python"
              }
            ]
          }
        ]
      },
      {
        "begin": "\\s*\\\\begin\\{(?:pylabcode|pylabverbatim|pylabblock|pylabconcode|pylabconsole|pylabconverbatim)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
        "captures": {
          "0": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "end": "\\s*\\\\end\\{(?:pylabcode|pylabverbatim|pylabblock|pylabconcode|pylabconsole|pylabconverbatim)\\*?\\}",
        "patterns": [
          {
            "include": "#multiline-optional-arg-no-highlight"
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "contentName": "variable.parameter.function.latex",
            "end": "(\\})",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            }
          },
          {
            "begin": "^(?=\\s*)",
            "contentName": "source.python",
            "end": "^\\s*(?=\\\\end\\{(?:pylabcode|pylabverbatim|pylabblock|pylabconcode|pylabconsole|pylabconverbatim)\\*?\\})",
            "patterns": [
              {
                "include": "source.python"
              }
            ]
          }
        ]
      },
      {
        "begin": "\\s*\\\\begin\\{(?:sageblock|sagesilent|sageverbatim|sageexample|sagecommandline|python|pythonq|pythonrepl)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
        "captures": {
          "0": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "end": "\\s*\\\\end\\{(?:sageblock|sagesilent|sageverbatim|sageexample|sagecommandline|python|pythonq|pythonrepl)\\*?\\}",
        "patterns": [
          {
            "include": "#multiline-optional-arg-no-highlight"
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "contentName": "variable.parameter.function.latex",
            "end": "(\\})",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            }
          },
          {
            "begin": "^(?=\\s*)",
            "contentName": "source.python",
            "end": "^\\s*(?=\\\\end\\{(?:sageblock|sagesilent|sageverbatim|sageexample|sagecommandline|python|pythonq|pythonrepl)\\*?\\})",
            "patterns": [
              {
                "include": "source.python"
              }
            ]
          }
        ]
      },
      {
        "begin": "\\s*\\\\begin\\{(?:scalacode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
        "captures": {
          "0": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "end": "\\s*\\\\end\\{(?:scalacode)\\*?\\}",
        "patterns": [
          {
            "include": "#multiline-optional-arg-no-highlight"
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "contentName": "variable.parameter.function.latex",
            "end": "(\\})",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            }
          },
          {
            "begin": "^(?=\\s*)",
            "contentName": "source.scala",
            "end": "^\\s*(?=\\\\end\\{(?:scalacode)\\*?\\})",
            "patterns": [
              {
                "include": "source.scala"
              }
            ]
          }
        ]
      },
      {
        "begin": "\\s*\\\\begin\\{(?:sympycode|sympyverbatim|sympyblock|sympyconcode|sympyconsole|sympyconverbatim)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
        "captures": {
          "0": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "end": "\\s*\\\\end\\{(?:sympycode|sympyverbatim|sympyblock|sympyconcode|sympyconsole|sympyconverbatim)\\*?\\}",
        "patterns": [
          {
            "include": "#multiline-optional-arg-no-highlight"
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "contentName": "variable.parameter.function.latex",
            "end": "(\\})",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            }
          },
          {
            "begin": "^(?=\\s*)",
            "contentName": "source.python",
            "end": "^\\s*(?=\\\\end\\{(?:sympycode|sympyverbatim|sympyblock|sympyconcode|sympyconsole|sympyconverbatim)\\*?\\})",
            "patterns": [
              {
                "include": "source.python"
              }
            ]
          }
        ]
      },
      {
        "begin": "\\s*\\\\begin\\{([a-zA-Z]*code|lstlisting|minted|pyglist)\\*?\\}(?:\\[.*\\])?(?:\\{.*\\})?",
        "captures": {
          "0": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "contentName": "meta.function.embedded.latex",
        "end": "\\\\end\\{\\1\\}(?:\\s*\\n)?",
        "name": "meta.embedded.block.generic.latex"
      },
      {
        "begin": "((?:^\\s*)?\\\\begin\\{((?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?))\\})(?:\\[[^\\]]*\\]){,2}(?=\\{)",
        "captures": {
          "1": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "end": "(\\\\end\\{\\2\\})",
        "patterns": [
          {
            "begin": "\\G(\\{)(?:__|[a-z\\s]*)(?i:asy|asymptote)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "end": "(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
            "patterns": [
              {
                "begin": "\\G",
                "end": "(\\})\\s*$",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.arguments.end.latex"
                  }
                },
                "patterns": [
                  {
                    "include": "text.tex#braces"
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "^(\\s*)",
                "contentName": "source.asy",
                "end": "^\\s*(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
                "patterns": [
                  {
                    "include": "source.asy"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\G(\\{)(?:__|[a-z\\s]*)(?i:bash)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "end": "(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
            "patterns": [
              {
                "begin": "\\G",
                "end": "(\\})\\s*$",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.arguments.end.latex"
                  }
                },
                "patterns": [
                  {
                    "include": "text.tex#braces"
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "^(\\s*)",
                "contentName": "source.shell",
                "end": "^\\s*(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
                "patterns": [
                  {
                    "include": "source.shell"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\G(\\{)(?:__|[a-z\\s]*)(?i:c|cpp)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "end": "(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
            "patterns": [
              {
                "begin": "\\G",
                "end": "(\\})\\s*$",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.arguments.end.latex"
                  }
                },
                "patterns": [
                  {
                    "include": "text.tex#braces"
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "^(\\s*)",
                "contentName": "source.cpp.embedded.latex",
                "end": "^\\s*(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
                "patterns": [
                  {
                    "include": "source.cpp.embedded.latex"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\G(\\{)(?:__|[a-z\\s]*)(?i:css)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "end": "(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
            "patterns": [
              {
                "begin": "\\G",
                "end": "(\\})\\s*$",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.arguments.end.latex"
                  }
                },
                "patterns": [
                  {
                    "include": "text.tex#braces"
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "^(\\s*)",
                "contentName": "source.css",
                "end": "^\\s*(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
                "patterns": [
                  {
                    "include": "source.css"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\G(\\{)(?:__|[a-z\\s]*)(?i:gnuplot)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "end": "(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
            "patterns": [
              {
                "begin": "\\G",
                "end": "(\\})\\s*$",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.arguments.end.latex"
                  }
                },
                "patterns": [
                  {
                    "include": "text.tex#braces"
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "^(\\s*)",
                "contentName": "source.gnuplot",
                "end": "^\\s*(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
                "patterns": [
                  {
                    "include": "source.gnuplot"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\G(\\{)(?:__|[a-z\\s]*)(?i:hs|haskell)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "end": "(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
            "patterns": [
              {
                "begin": "\\G",
                "end": "(\\})\\s*$",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.arguments.end.latex"
                  }
                },
                "patterns": [
                  {
                    "include": "text.tex#braces"
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "^(\\s*)",
                "contentName": "source.haskell",
                "end": "^\\s*(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
                "patterns": [
                  {
                    "include": "source.haskell"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\G(\\{)(?:__|[a-z\\s]*)(?i:html)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "end": "(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
            "patterns": [
              {
                "begin": "\\G",
                "end": "(\\})\\s*$",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.arguments.end.latex"
                  }
                },
                "patterns": [
                  {
                    "include": "text.tex#braces"
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "^(\\s*)",
                "contentName": "text.html",
                "end": "^\\s*(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
                "patterns": [
                  {
                    "include": "text.html.basic"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\G(\\{)(?:__|[a-z\\s]*)(?i:java)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "end": "(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
            "patterns": [
              {
                "begin": "\\G",
                "end": "(\\})\\s*$",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.arguments.end.latex"
                  }
                },
                "patterns": [
                  {
                    "include": "text.tex#braces"
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "^(\\s*)",
                "contentName": "source.java",
                "end": "^\\s*(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
                "patterns": [
                  {
                    "include": "source.java"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\G(\\{)(?:__|[a-z\\s]*)(?i:jl|julia)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "end": "(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
            "patterns": [
              {
                "begin": "\\G",
                "end": "(\\})\\s*$",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.arguments.end.latex"
                  }
                },
                "patterns": [
                  {
                    "include": "text.tex#braces"
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "^(\\s*)",
                "contentName": "source.julia",
                "end": "^\\s*(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
                "patterns": [
                  {
                    "include": "source.julia"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\G(\\{)(?:__|[a-z\\s]*)(?i:js|javascript)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "end": "(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
            "patterns": [
              {
                "begin": "\\G",
                "end": "(\\})\\s*$",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.arguments.end.latex"
                  }
                },
                "patterns": [
                  {
                    "include": "text.tex#braces"
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "^(\\s*)",
                "contentName": "source.js",
                "end": "^\\s*(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
                "patterns": [
                  {
                    "include": "source.js"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\G(\\{)(?:__|[a-z\\s]*)(?i:lua)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "end": "(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
            "patterns": [
              {
                "begin": "\\G",
                "end": "(\\})\\s*$",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.arguments.end.latex"
                  }
                },
                "patterns": [
                  {
                    "include": "text.tex#braces"
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "^(\\s*)",
                "contentName": "source.lua",
                "end": "^\\s*(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
                "patterns": [
                  {
                    "include": "source.lua"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\G(\\{)(?:__|[a-z\\s]*)(?i:py|python|sage)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "end": "(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
            "patterns": [
              {
                "begin": "\\G",
                "end": "(\\})\\s*$",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.arguments.end.latex"
                  }
                },
                "patterns": [
                  {
                    "include": "text.tex#braces"
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "^(\\s*)",
                "contentName": "source.python",
                "end": "^\\s*(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
                "patterns": [
                  {
                    "include": "source.python"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\G(\\{)(?:__|[a-z\\s]*)(?i:rb|ruby)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "end": "(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
            "patterns": [
              {
                "begin": "\\G",
                "end": "(\\})\\s*$",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.arguments.end.latex"
                  }
                },
                "patterns": [
                  {
                    "include": "text.tex#braces"
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "^(\\s*)",
                "contentName": "source.ruby",
                "end": "^\\s*(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
                "patterns": [
                  {
                    "include": "source.ruby"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\G(\\{)(?:__|[a-z\\s]*)(?i:rust)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "end": "(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
            "patterns": [
              {
                "begin": "\\G",
                "end": "(\\})\\s*$",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.arguments.end.latex"
                  }
                },
                "patterns": [
                  {
                    "include": "text.tex#braces"
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "^(\\s*)",
                "contentName": "source.rust",
                "end": "^\\s*(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
                "patterns": [
                  {
                    "include": "source.rust"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\G(\\{)(?:__|[a-z\\s]*)(?i:ts|typescript)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "end": "(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
            "patterns": [
              {
                "begin": "\\G",
                "end": "(\\})\\s*$",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.arguments.end.latex"
                  }
                },
                "patterns": [
                  {
                    "include": "text.tex#braces"
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "^(\\s*)",
                "contentName": "source.ts",
                "end": "^\\s*(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
                "patterns": [
                  {
                    "include": "source.ts"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\G(\\{)(?:__|[a-z\\s]*)(?i:xml)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "end": "(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
            "patterns": [
              {
                "begin": "\\G",
                "end": "(\\})\\s*$",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.arguments.end.latex"
                  }
                },
                "patterns": [
                  {
                    "include": "text.tex#braces"
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "^(\\s*)",
                "contentName": "text.xml",
                "end": "^\\s*(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
                "patterns": [
                  {
                    "include": "text.xml"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\G(\\{)(?:__|[a-z\\s]*)(?i:yaml)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "end": "(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
            "patterns": [
              {
                "begin": "\\G",
                "end": "(\\})\\s*$",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.arguments.end.latex"
                  }
                },
                "patterns": [
                  {
                    "include": "text.tex#braces"
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "^(\\s*)",
                "contentName": "source.yaml",
                "end": "^\\s*(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
                "patterns": [
                  {
                    "include": "source.yaml"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\G(\\{)(?:__|[a-z\\s]*)(?i:tikz|tikzpicture)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "end": "(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
            "patterns": [
              {
                "begin": "\\G",
                "end": "(\\})\\s*$",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.arguments.end.latex"
                  }
                },
                "patterns": [
                  {
                    "include": "text.tex#braces"
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "^(\\s*)",
                "contentName": "text.tex.latex",
                "end": "^\\s*(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
                "patterns": [
                  {
                    "include": "text.tex.latex"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\G(\\{)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "end": "(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
            "patterns": [
              {
                "begin": "\\G",
                "end": "(\\})\\s*$",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.definition.arguments.end.latex"
                  }
                },
                "patterns": [
                  {
                    "include": "text.tex#braces"
                  },
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": "^(\\s*)",
                "contentName": "meta.function.embedded.latex",
                "end": "^\\s*(?=\\\\end\\{(?:RobExt)?(?:CacheMeCode|PlaceholderPathFromCode\\*?|PlaceholderFromCode\\*?|SetPlaceholderCode\\*?)\\})",
                "name": "meta.embedded.block.generic.latex"
              }
            ]
          }
        ]
      },
      {
        "begin": "(?:^\\s*)?\\\\begin\\{(terminal\\*?)\\}(?=\\[|\\{)",
        "captures": {
          "0": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "end": "\\\\end\\{\\1\\}",
        "patterns": [
          {
            "include": "#multiline-optional-arg-no-highlight"
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)([a-zA-Z]*)(\\})",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              },
              "2": {
                "name": "variable.parameter.function.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.end.latex"
              }
            },
            "contentName": "meta.function.embedded.latex",
            "end": "^\\s*(?=\\\\end\\{terminal\\*?\\})",
            "name": "meta.embedded.block.generic.latex"
          }
        ]
      },
      {
        "begin": "((\\\\)addplot)(?:\\+?)((?:\\[[^\\[]*\\]))*\\s*(gnuplot)\\s*((?:\\[[^\\[]*\\]))*\\s*(\\{)",
        "captures": {
          "1": {
            "name": "support.function.be.latex"
          },
          "2": {
            "name": "punctuation.definition.function.latex"
          },
          "3": {
            "patterns": [
              {
                "include": "#optional-arg-bracket"
              }
            ]
          },
          "4": {
            "name": "variable.parameter.function.latex"
          },
          "5": {
            "patterns": [
              {
                "include": "#optional-arg-bracket"
              }
            ]
          },
          "6": {
            "name": "punctuation.definition.arguments.begin.latex"
          }
        },
        "end": "\\s*(\\};)",
        "patterns": [
          {
            "begin": "%",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.comment.latex"
              }
            },
            "end": "$\\n?",
            "name": "comment.line.percentage.latex"
          },
          {
            "include": "source.gnuplot"
          }
        ]
      },
      {
        "begin": "(\\s*\\\\begin\\{((?:fboxv|boxedv|V|v|spv)erbatim\\*?)\\})",
        "captures": {
          "1": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "contentName": "markup.raw.verbatim.latex",
        "end": "(\\\\end\\{\\2\\})",
        "name": "meta.function.verbatim.latex"
      },
      {
        "begin": "(\\s*\\\\begin\\{VerbatimOut\\}\\{[^\\}]*\\})",
        "captures": {
          "1": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "contentName": "markup.raw.verbatim.latex",
        "end": "(\\\\end\\{\\VerbatimOut\\})",
        "name": "meta.function.verbatim.latex"
      },
      {
        "begin": "(\\s*\\\\begin\\{alltt\\})",
        "captures": {
          "1": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "contentName": "markup.raw.verbatim.latex",
        "end": "(\\\\end\\{alltt\\})",
        "name": "meta.function.alltt.latex",
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.function.latex"
              }
            },
            "match": "(\\\\)[A-Za-z]+",
            "name": "support.function.general.latex"
          }
        ]
      },
      {
        "begin": "(\\s*\\\\begin\\{([Cc]omment)\\})",
        "captures": {
          "1": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "contentName": "comment.line.percentage.latex",
        "end": "(\\\\end\\{\\2\\})",
        "name": "meta.function.verbatim.latex"
      },
      {
        "begin": "(?:\\s*)((\\\\)(?:href|hyperref|hyperimage))(?=\\[|\\{)",
        "beginCaptures": {
          "1": {
            "name": "support.function.url.latex"
          }
        },
        "comment": "Captures \\command[option]{url}{optional category}{optional name}{text}",
        "end": "(\\})",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.arguments.end.latex"
          }
        },
        "name": "meta.function.hyperlink.latex",
        "patterns": [
          {
            "include": "#multiline-optional-arg-no-highlight"
          },
          {
            "begin": "(?:\\G|(?<=\\]))(\\{)([^}]*)(\\})(?:\\{[^}]*\\}){2}?(\\{)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              },
              "2": {
                "name": "markup.underline.link.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.end.latex"
              },
              "4": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "contentName": "meta.variable.parameter.function.latex",
            "end": "(?=\\})",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          },
          {
            "begin": "(?:\\G|(?<=\\]))(?:(\\{)[^}]*(\\}))?(\\{)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.arguments.begin.latex"
              },
              "2": {
                "name": "punctuation.definition.arguments.end.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.begin.latex"
              }
            },
            "contentName": "meta.variable.parameter.function.latex",
            "end": "(?=\\})",
            "patterns": [
              {
                "include": "$self"
              }
            ]
          }
        ]
      },
      {
        "captures": {
          "1": {
            "name": "support.function.url.latex"
          },
          "2": {
            "name": "punctuation.definition.function.latex"
          },
          "3": {
            "name": "punctuation.definition.arguments.begin.latex"
          },
          "5": {
            "name": "punctuation.definition.arguments.end.latex"
          },
          "'": {
            "name": "markup.underline.link.latex"
          }
        },
        "match": "(?:\\s*)((\\\\)url)(\\{)([^}]*)(\\})",
        "name": "meta.function.link.url.latex"
      },
      {
        "captures": {
          "1": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "comment": "These two patterns match the \\begin{document} and \\end{document} commands, so that the environment matching pattern following them will ignore those commands.",
        "match": "(\\s*\\\\begin\\{document\\})",
        "name": "meta.function.begin-document.latex"
      },
      {
        "captures": {
          "1": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "match": "(\\s*\\\\end\\{document\\})",
        "name": "meta.function.end-document.latex"
      },
      {
        "begin": "(?:\\s*)((\\\\)begin)(\\{)((?:\\+?array|equation|(?:IEEE)?eqnarray|multline|align|aligned|alignat|alignedat|flalign|flaligned|flalignat|split|gather|gathered|\\+?cases|(?:display)?math|\\+?[a-zA-Z]*matrix|[pbBvV]?NiceMatrix|[pbBvV]?NiceArray|(?:(?:arg)?(?:mini|maxi)))(?:\\*|!)?)(\\})(\\s*\\n)?",
        "captures": {
          "1": {
            "name": "support.function.be.latex"
          },
          "2": {
            "name": "punctuation.definition.function.latex"
          },
          "3": {
            "name": "punctuation.definition.arguments.begin.latex"
          },
          "4": {
            "name": "variable.parameter.function.latex"
          },
          "5": {
            "name": "punctuation.definition.arguments.end.latex"
          }
        },
        "contentName": "meta.math.block.latex support.class.math.block.environment.latex",
        "end": "(?:\\s*)((\\\\)end)(\\{)(\\4)(\\})(?:\\s*\\n)?",
        "name": "meta.function.environment.math.latex",
        "patterns": [
          {
            "match": "(?<!\\\\)&",
            "name": "keyword.control.equation.align.latex"
          },
          {
            "match": "\\\\\\\\",
            "name": "keyword.control.equation.newline.latex"
          },
          {
            "include": "#definition-label"
          },
          {
            "include": "text.tex#math"
          },
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "(?:\\s*)(\\\\begin\\{empheq\\}(?:\\[.*\\])?)",
        "captures": {
          "1": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "contentName": "meta.math.block.latex support.class.math.block.environment.latex",
        "end": "(?:\\s*)(\\\\end\\{empheq\\})",
        "name": "meta.function.environment.math.latex",
        "patterns": [
          {
            "match": "(?<!\\\\)&",
            "name": "keyword.control.equation.align.latex"
          },
          {
            "match": "\\\\\\\\",
            "name": "keyword.control.equation.newline.latex"
          },
          {
            "include": "#definition-label"
          },
          {
            "include": "text.tex#math"
          },
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "(\\s*\\\\begin\\{(tabular[xy*]?|xltabular|longtable|(?:long)?tabu|(?:long|tall)?tblr|NiceTabular[X*]?|booktabs)\\}(\\s*\\n)?)",
        "captures": {
          "1": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "contentName": "meta.data.environment.tabular.latex",
        "end": "(\\s*\\\\end\\{(\\2)\\}(?:\\s*\\n)?)",
        "name": "meta.function.environment.tabular.latex",
        "patterns": [
          {
            "match": "(?<!\\\\)&",
            "name": "keyword.control.table.cell.latex"
          },
          {
            "match": "\\\\\\\\",
            "name": "keyword.control.table.newline.latex"
          },
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "(\\s*\\\\begin\\{(itemize|enumerate|description|list)\\})",
        "captures": {
          "1": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "end": "(\\\\end\\{\\2\\}(?:\\s*\\n)?)",
        "name": "meta.function.environment.list.latex",
        "patterns": [
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "(\\s*\\\\begin\\{tikzpicture\\})",
        "captures": {
          "1": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "end": "(\\\\end\\{tikzpicture\\}(?:\\s*\\n)?)",
        "name": "meta.function.environment.latex.tikz",
        "patterns": [
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "(\\s*\\\\begin\\{frame\\})",
        "captures": {
          "1": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "end": "(\\\\end\\{frame\\})",
        "name": "meta.function.environment.frame.latex",
        "patterns": [
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "(\\s*\\\\begin\\{(mpost\\*?)\\})",
        "captures": {
          "1": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "end": "(\\\\end\\{\\2\\}(?:\\s*\\n)?)",
        "name": "meta.function.environment.latex.mpost"
      },
      {
        "begin": "(\\s*\\\\begin\\{markdown\\})",
        "captures": {
          "1": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "contentName": "meta.embedded.markdown_latex_combined",
        "end": "(\\\\end\\{markdown\\})",
        "patterns": [
          {
            "include": "text.tex.markdown_latex_combined"
          }
        ]
      },
      {
        "begin": "(\\s*\\\\begin\\{(\\w+\\*?)\\})",
        "captures": {
          "1": {
            "patterns": [
              {
                "include": "#begin-env-tokenizer"
              }
            ]
          }
        },
        "end": "(\\\\end\\{\\2\\}(?:\\s*\\n)?)",
        "name": "meta.function.environment.general.latex",
        "patterns": [
          {
            "include": "$self"
          }
        ]
      },
      {
        "captures": {
          "1": {
            "name": "storage.type.function.latex"
          },
          "2": {
            "name": "punctuation.definition.function.latex"
          },
          "3": {
            "name": "punctuation.definition.begin.latex"
          },
          "4": {
            "name": "support.function.general.latex"
          },
          "5": {
            "name": "punctuation.definition.function.latex"
          },
          "6": {
            "name": "punctuation.definition.end.latex"
          }
        },
        "match": "((\\\\)(?:newcommand|renewcommand|(?:re)?newrobustcmd|DeclareRobustCommand))\\*?({)((\\\\)[^}]*)(})"
      },
      {
        "begin": "((\\\\)marginpar)((?:\\[[^\\[]*?\\])*)(\\{)",
        "beginCaptures": {
          "1": {
            "name": "support.function.marginpar.latex"
          },
          "2": {
            "name": "punctuation.definition.function.latex"
          },
          "3": {
            "patterns": [
              {
                "include": "#optional-arg-bracket"
              }
            ]
          },
          "4": {
            "name": "punctuation.definition.marginpar.begin.latex"
          }
        },
        "contentName": "meta.paragraph.margin.latex",
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.marginpar.end.latex"
          }
        },
        "patterns": [
          {
            "include": "text.tex#braces"
          },
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "((\\\\)footnote)((?:\\[[^\\[]*?\\])*)(\\{)",
        "beginCaptures": {
          "1": {
            "name": "support.function.footnote.latex"
          },
          "2": {
            "name": "punctuation.definition.function.latex"
          },
          "3": {
            "patterns": [
              {
                "include": "#optional-arg-bracket"
              }
            ]
          },
          "4": {
            "name": "punctuation.definition.footnote.begin.latex"
          }
        },
        "contentName": "entity.name.footnote.latex",
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.footnote.end.latex"
          }
        },
        "patterns": [
          {
            "include": "text.tex#braces"
          },
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "((\\\\)emph)(\\{)",
        "beginCaptures": {
          "1": {
            "name": "support.function.emph.latex"
          },
          "2": {
            "name": "punctuation.definition.function.latex"
          },
          "3": {
            "name": "punctuation.definition.emph.begin.latex"
          }
        },
        "contentName": "markup.italic.emph.latex",
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.emph.end.latex"
          }
        },
        "name": "meta.function.emph.latex",
        "patterns": [
          {
            "include": "text.tex#braces"
          },
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "((\\\\)textit)(\\{)",
        "captures": {
          "1": {
            "name": "support.function.textit.latex"
          },
          "2": {
            "name": "punctuation.definition.function.latex"
          },
          "3": {
            "name": "punctuation.definition.textit.begin.latex"
          }
        },
        "comment": "We put the keyword in a capture and name this capture, so that disabling spell checking for “keyword” won't be inherited by the argument to \\textit{...}.\n\nPut specific matches for particular LaTeX keyword.functions before the last two more general functions",
        "contentName": "markup.italic.textit.latex",
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.textit.end.latex"
          }
        },
        "name": "meta.function.textit.latex",
        "patterns": [
          {
            "include": "text.tex#braces"
          },
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "((\\\\)textbf)(\\{)",
        "captures": {
          "1": {
            "name": "support.function.textbf.latex"
          },
          "2": {
            "name": "punctuation.definition.function.latex"
          },
          "3": {
            "name": "punctuation.definition.textbf.begin.latex"
          }
        },
        "contentName": "markup.bold.textbf.latex",
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.textbf.end.latex"
          }
        },
        "name": "meta.function.textbf.latex",
        "patterns": [
          {
            "include": "text.tex#braces"
          },
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "((\\\\)texttt)(\\{)",
        "captures": {
          "1": {
            "name": "support.function.texttt.latex"
          },
          "2": {
            "name": "punctuation.definition.function.latex"
          },
          "3": {
            "name": "punctuation.definition.texttt.begin.latex"
          }
        },
        "contentName": "markup.raw.texttt.latex",
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.texttt.end.latex"
          }
        },
        "name": "meta.function.texttt.latex",
        "patterns": [
          {
            "include": "text.tex#braces"
          },
          {
            "include": "$self"
          }
        ]
      },
      {
        "captures": {
          "0": {
            "name": "keyword.other.item.latex"
          },
          "1": {
            "name": "punctuation.definition.keyword.latex"
          }
        },
        "match": "(\\\\)item\\b",
        "name": "meta.scope.item.latex"
      },
      {
        "begin": "((\\\\)(?:[aA]uto|foot|full|no|ref|short|[tT]ext|[pP]aren|[sS]mart)?[cC]ite(?:al)?(?:p|s|t|author|year(?:par)?|title)?[ANP]*\\*?)((?:(?:\\([^\\)]*\\)){0,2}(?:\\[[^\\]]*\\]){0,2}\\{[\\p{Alphabetic}\\p{Number}_:.-]*\\})*)(<[^\\]<>]*>)?((?:\\[[^\\]]*\\])*)(\\{)",
        "captures": {
          "1": {
            "name": "keyword.control.cite.latex"
          },
          "2": {
            "name": "punctuation.definition.keyword.latex"
          },
          "3": {
            "patterns": [
              {
                "include": "#autocites-arg"
              }
            ]
          },
          "4": {
            "patterns": [
              {
                "include": "#optional-arg-angle-no-highlight"
              }
            ]
          },
          "5": {
            "patterns": [
              {
                "include": "#optional-arg-bracket-no-highlight"
              }
            ]
          },
          "6": {
            "name": "punctuation.definition.arguments.begin.latex"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.arguments.end.latex"
          }
        },
        "name": "meta.citation.latex",
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "comment.line.percentage.tex"
              },
              "2": {
                "name": "punctuation.definition.comment.tex"
              }
            },
            "match": "((%).*)$"
          },
          {
            "match": "[\\p{Alphabetic}\\p{Number}:.-]+",
            "name": "constant.other.reference.citation.latex"
          }
        ]
      },
      {
        "begin": "((\\\\)bibentry)(\\{)",
        "captures": {
          "1": {
            "name": "keyword.control.cite.latex"
          },
          "2": {
            "name": "punctuation.definition.keyword.latex"
          },
          "3": {
            "name": "punctuation.definition.arguments.begin.latex"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.arguments.end.latex"
          }
        },
        "name": "meta.citation.latex",
        "patterns": [
          {
            "match": "[\\p{Alphabetic}\\p{Number}:.]+",
            "name": "constant.other.reference.citation.latex"
          }
        ]
      },
      {
        "begin": "((\\\\)(?:\\w*[rR]ef\\*?))(?:\\[[^\\]]*\\])?(\\{)",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.ref.latex"
          },
          "2": {
            "name": "punctuation.definition.keyword.latex"
          },
          "3": {
            "name": "punctuation.definition.arguments.begin.latex"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.arguments.end.latex"
          }
        },
        "name": "meta.reference.label.latex",
        "patterns": [
          {
            "match": "[\\p{Alphabetic}\\p{Number}\\.,:/*!^_-]",
            "name": "constant.other.reference.label.latex"
          }
        ]
      },
      {
        "include": "#definition-label"
      },
      {
        "begin": "((\\\\)(?:verb|Verb|spverb)\\*?)\\s*((\\\\)scantokens)(\\{)",
        "beginCaptures": {
          "1": {
            "name": "support.function.verb.latex"
          },
          "2": {
            "name": "punctuation.definition.function.latex"
          },
          "3": {
            "name": "support.function.verb.latex"
          },
          "4": {
            "name": "punctuation.definition.verb.latex"
          },
          "5": {
            "name": "punctuation.definition.begin.latex"
          }
        },
        "contentName": "markup.raw.verb.latex",
        "end": "(\\})",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.end.latex"
          }
        },
        "name": "meta.function.verb.latex",
        "patterns": [
          {
            "include": "$self"
          }
        ]
      },
      {
        "captures": {
          "1": {
            "name": "support.function.verb.latex"
          },
          "2": {
            "name": "punctuation.definition.function.latex"
          },
          "3": {
            "name": "punctuation.definition.verb.latex"
          },
          "4": {
            "name": "markup.raw.verb.latex"
          },
          "5": {
            "name": "punctuation.definition.verb.latex"
          }
        },
        "match": "((\\\\)(?:verb|Verb|spverb)\\*?)\\s*((?<=\\s)\\S|[^a-zA-Z])(.*?)(\\3|$)",
        "name": "meta.function.verb.latex"
      },
      {
        "captures": {
          "1": {
            "name": "support.function.verb.latex"
          },
          "2": {
            "name": "punctuation.definition.function.latex"
          },
          "3": {
            "patterns": [
              {
                "include": "#optional-arg-bracket"
              }
            ]
          },
          "4": {
            "name": "punctuation.definition.arguments.begin.latex"
          },
          "5": {
            "name": "punctuation.definition.arguments.end.latex"
          },
          "6": {
            "name": "punctuation.definition.verb.latex"
          },
          "7": {
            "name": "markup.raw.verb.latex"
          },
          "8": {
            "name": "punctuation.definition.verb.latex"
          },
          "9": {
            "name": "punctuation.definition.verb.latex"
          },
          "10": {
            "name": "markup.raw.verb.latex"
          },
          "11": {
            "name": "punctuation.definition.verb.latex"
          }
        },
        "match": "((\\\\)(?:mint|mintinline))((?:\\[[^\\[]*?\\])?)(\\{)[a-zA-Z]*(\\})(?:(?:([^a-zA-Z\\{])(.*?)(\\6))|(?:(\\{)(.*?)(\\})))",
        "name": "meta.function.verb.latex"
      },
      {
        "captures": {
          "1": {
            "name": "support.function.verb.latex"
          },
          "2": {
            "name": "punctuation.definition.function.latex"
          },
          "3": {
            "patterns": [
              {
                "include": "#optional-arg-bracket"
              }
            ]
          },
          "4": {
            "name": "punctuation.definition.verb.latex"
          },
          "5": {
            "name": "markup.raw.verb.latex"
          },
          "6": {
            "name": "punctuation.definition.verb.latex"
          },
          "7": {
            "name": "punctuation.definition.verb.latex"
          },
          "8": {
            "name": "markup.raw.verb.latex"
          },
          "9": {
            "name": "punctuation.definition.verb.latex"
          }
        },
        "match": "((\\\\)[a-z]+inline)((?:\\[[^\\[]*?\\])?)(?:(?:([^a-zA-Z\\{])(.*?)(\\4))|(?:(\\{)(.*?)(\\})))",
        "name": "meta.function.verb.latex"
      },
      {
        "captures": {
          "1": {
            "name": "support.function.verb.latex"
          },
          "2": {
            "name": "punctuation.definition.function.latex"
          },
          "3": {
            "patterns": [
              {
                "include": "#optional-arg-bracket"
              }
            ]
          },
          "4": {
            "name": "punctuation.definition.verb.latex"
          },
          "5": {
            "name": "source.python",
            "patterns": [
              {
                "include": "source.python"
              }
            ]
          },
          "6": {
            "name": "punctuation.definition.verb.latex"
          },
          "7": {
            "name": "punctuation.definition.verb.latex"
          },
          "8": {
            "name": "source.python",
            "patterns": [
              {
                "include": "source.python"
              }
            ]
          },
          "9": {
            "name": "punctuation.definition.verb.latex"
          }
        },
        "match": "((\\\\)(?:(?:py|pycon|pylab|pylabcon|sympy|sympycon)[cv]?|pyq|pycq|pyif))((?:\\[[^\\[]*?\\])?)(?:(?:([^a-zA-Z\\{])(.*?)(\\4))|(?:(\\{)(.*?)(\\})))",
        "name": "meta.function.verb.latex"
      },
      {
        "captures": {
          "1": {
            "name": "support.function.verb.latex"
          },
          "2": {
            "name": "punctuation.definition.function.latex"
          },
          "3": {
            "patterns": [
              {
                "include": "#optional-arg-bracket"
              }
            ]
          },
          "4": {
            "name": "punctuation.definition.verb.latex"
          },
          "5": {
            "name": "source.julia",
            "patterns": [
              {
                "include": "source.julia"
              }
            ]
          },
          "6": {
            "name": "punctuation.definition.verb.latex"
          },
          "7": {
            "name": "punctuation.definition.verb.latex"
          },
          "8": {
            "name": "source.julia",
            "patterns": [
              {
                "include": "source.julia"
              }
            ]
          },
          "9": {
            "name": "punctuation.definition.verb.latex"
          }
        },
        "match": "((\\\\)(?:jl|julia)[cv]?)((?:\\[[^\\[]*?\\])?)(?:(?:([^a-zA-Z\\{])(.*?)(\\4))|(?:(\\{)(.*?)(\\})))",
        "name": "meta.function.verb.latex"
      },
      {
        "begin": "((\\\\)(?:directlua|luadirect))(\\{)",
        "beginCaptures": {
          "1": {
            "name": "support.function.verb.latex"
          },
          "2": {
            "name": "punctuation.definition.function.latex"
          },
          "3": {
            "name": "punctuation.definition.arguments.begin.latex"
          }
        },
        "contentName": "source.lua",
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.arguments.end.latex"
          }
        },
        "patterns": [
          {
            "include": "source.lua"
          }
        ]
      },
      {
        "match": "\\\\(?:newline|pagebreak|clearpage|linebreak|pause)(?:\\b)",
        "name": "keyword.control.layout.latex"
      },
      {
        "begin": "\\\\\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.latex"
          }
        },
        "end": "\\\\\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.latex"
          }
        },
        "name": "meta.math.block.latex support.class.math.block.environment.latex",
        "patterns": [
          {
            "include": "text.tex#math"
          },
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "\\$\\$",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.latex"
          }
        },
        "end": "\\$\\$",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.latex"
          }
        },
        "name": "meta.math.block.latex support.class.math.block.environment.latex",
        "patterns": [
          {
            "match": "\\\\\\$",
            "name": "constant.character.escape.latex"
          },
          {
            "include": "text.tex#math"
          },
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "\\$",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.tex"
          }
        },
        "end": "\\$",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.tex"
          }
        },
        "name": "meta.math.block.tex support.class.math.block.tex",
        "patterns": [
          {
            "match": "\\\\\\$",
            "name": "constant.character.escape.latex"
          },
          {
            "include": "text.tex#math"
          },
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "\\\\\\[",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.latex"
          }
        },
        "end": "\\\\\\]",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.latex"
          }
        },
        "name": "meta.math.block.latex support.class.math.block.environment.latex",
        "patterns": [
          {
            "include": "text.tex#math"
          },
          {
            "include": "$self"
          }
        ]
      },
      {
        "captures": {
          "1": {
            "name": "punctuation.definition.constant.latex"
          }
        },
        "match": "(\\\\)(text(s(terling|ixoldstyle|urd|e(ction|venoldstyle|rvicemark))|yen|n(ineoldstyle|umero|aira)|c(ircledP|o(py(left|right)|lonmonetary)|urrency|e(nt(oldstyle)?|lsius))|t(hree(superior|oldstyle|quarters(emdash)?)|i(ldelow|mes)|w(o(superior|oldstyle)|elveudash)|rademark)|interrobang(down)?|zerooldstyle|o(hm|ne(superior|half|oldstyle|quarter)|penbullet|rd(feminine|masculine))|d(i(scount|ed|v(orced)?)|o(ng|wnarrow|llar(oldstyle)?)|egree|agger(dbl)?|blhyphen(char)?)|uparrow|p(ilcrow|e(so|r(t(housand|enthousand)|iodcentered))|aragraph|m)|e(stimated|ightoldstyle|uro)|quotes(traight(dblbase|base)|ingle)|f(iveoldstyle|ouroldstyle|lorin|ractionsolidus)|won|l(not|ira|e(ftarrow|af)|quill|angle|brackdbl)|a(s(cii(caron|dieresis|acute|grave|macron|breve)|teriskcentered)|cutedbl)|r(ightarrow|e(cipe|ferencemark|gistered)|quill|angle|brackdbl)|g(uarani|ravedbl)|m(ho|inus|u(sicalnote)?|arried)|b(igcircle|orn|ullet|lank|a(ht|rdbl)|rokenbar)))\\b",
        "name": "constant.character.latex"
      },
      {
        "captures": {
          "1": {
            "name": "punctuation.definition.variable.latex"
          }
        },
        "match": "(\\\\)(?:[cgl]_+[_\\p{Alphabetic}@]+_[a-z]+|[qs]_[_\\p{Alphabetic}@]+[\\p{Alphabetic}@])",
        "name": "variable.other.latex3.latex"
      },
      {
        "captures": {
          "1": {
            "name": "punctuation.definition.column-specials.begin.latex"
          },
          "2": {
            "name": "punctuation.definition.column-specials.end.latex"
          }
        },
        "match": "(?:<|>)(\\{)\\$(\\})",
        "name": "meta.column-specials.latex"
      },
      {
        "include": "text.tex"
      }
    ],
    "repository": {
      "autocites-arg": {
        "patterns": [
          {
            "captures": {
              "1": {
                "patterns": [
                  {
                    "include": "#optional-arg-parenthesis-no-highlight"
                  }
                ]
              },
              "2": {
                "patterns": [
                  {
                    "include": "#optional-arg-bracket-no-highlight"
                  }
                ]
              },
              "3": {
                "name": "punctuation.definition.arguments.begin.latex"
              },
              "4": {
                "name": "constant.other.reference.citation.latex"
              },
              "5": {
                "name": "punctuation.definition.arguments.end.latex"
              },
              "6": {
                "patterns": [
                  {
                    "include": "#autocites-arg"
                  }
                ]
              }
            },
            "match": "((?:\\([^\\)]*\\)){0,2})((?:\\[[^\\]]*\\]){0,2})(\\{)([\\p{Alphabetic}\\p{Number}_:.-]+)(\\})(.*)"
          }
        ]
      },
      "begin-env-tokenizer": {
        "captures": {
          "1": {
            "name": "support.function.be.latex"
          },
          "2": {
            "name": "punctuation.definition.function.latex"
          },
          "3": {
            "name": "punctuation.definition.arguments.begin.latex"
          },
          "4": {
            "name": "variable.parameter.function.latex"
          },
          "5": {
            "name": "punctuation.definition.arguments.end.latex"
          },
          "6": {
            "name": "punctuation.definition.arguments.optional.begin.latex"
          },
          "7": {
            "patterns": [
              {
                "include": "$self"
              }
            ]
          },
          "8": {
            "name": "punctuation.definition.arguments.optional.end.latex"
          },
          "9": {
            "name": "punctuation.definition.arguments.begin.latex"
          },
          "10": {
            "name": "variable.parameter.function.latex"
          },
          "11": {
            "name": "punctuation.definition.arguments.end.latex"
          }
        },
        "match": "\\s*((\\\\)(?:begin|end))(\\{)([a-zA-Z]*\\*?)(\\})(?:(\\[)([^\\]]*)(\\])){,2}(?:(\\{)([^{}]*)(\\}))?"
      },
      "definition-label": {
        "begin": "((\\\\)z?label)((?:\\[[^\\[]*?\\])*)(\\{)",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.label.latex"
          },
          "2": {
            "name": "punctuation.definition.keyword.latex"
          },
          "3": {
            "patterns": [
              {
                "include": "#optional-arg-bracket"
              }
            ]
          },
          "4": {
            "name": "punctuation.definition.arguments.begin.latex"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.arguments.end.latex"
          }
        },
        "name": "meta.definition.label.latex",
        "patterns": [
          {
            "match": "[\\p{Alphabetic}\\p{Number}\\.,:/*!^_-]",
            "name": "variable.parameter.definition.label.latex"
          }
        ]
      },
      "multiline-optional-arg": {
        "begin": "\\G\\[",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.arguments.optional.begin.latex"
          }
        },
        "contentName": "variable.parameter.function.latex",
        "end": "\\]",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.arguments.optional.end.latex"
          }
        },
        "name": "meta.parameter.optional.latex",
        "patterns": [
          {
            "include": "$self"
          }
        ]
      },
      "multiline-optional-arg-no-highlight": {
        "begin": "\\G\\[",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.arguments.optional.begin.latex"
          }
        },
        "end": "\\]",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.arguments.optional.end.latex"
          }
        },
        "name": "meta.parameter.optional.latex",
        "patterns": [
          {
            "include": "$self"
          }
        ]
      },
      "optional-arg-angle-no-highlight": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.arguments.optional.begin.latex"
              },
              "2": {
                "name": "punctuation.definition.arguments.optional.end.latex"
              }
            },
            "match": "(<)[^<]*?(>)",
            "name": "meta.parameter.optional.latex"
          }
        ]
      },
      "optional-arg-bracket": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.arguments.optional.begin.latex"
              },
              "2": {
                "name": "variable.parameter.function.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.optional.end.latex"
              }
            },
            "match": "(\\[)([^\\[]*?)(\\])",
            "name": "meta.parameter.optional.latex"
          }
        ]
      },
      "optional-arg-bracket-no-highlight": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.arguments.optional.begin.latex"
              },
              "2": {
                "name": "punctuation.definition.arguments.optional.end.latex"
              }
            },
            "match": "(\\[)[^\\[]*?(\\])",
            "name": "meta.parameter.optional.latex"
          }
        ]
      },
      "optional-arg-parenthesis": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.arguments.optional.begin.latex"
              },
              "2": {
                "name": "variable.parameter.function.latex"
              },
              "3": {
                "name": "punctuation.definition.arguments.optional.end.latex"
              }
            },
            "match": "(\\()([^\\(]*?)(\\))",
            "name": "meta.parameter.optional.latex"
          }
        ]
      },
      "optional-arg-parenthesis-no-highlight": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.arguments.optional.begin.latex"
              },
              "2": {
                "name": "punctuation.definition.arguments.optional.end.latex"
              }
            },
            "match": "(\\()[^\\(]*?(\\))",
            "name": "meta.parameter.optional.latex"
          }
        ]
      }
    },
    "scopeName": "text.tex.latex",
    "embeddedLangs": [
      "tex"
    ],
    "embeddedLangsLazy": [
      "shellscript",
      "css",
      "gnuplot",
      "haskell",
      "html",
      "java",
      "julia",
      "javascript",
      "lua",
      "python",
      "ruby",
      "rust",
      "typescript",
      "xml",
      "yaml",
      "scala"
    ]
  }
])