/** Shiki Language: common-lisp */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push([
  {
    "displayName": "Common Lisp",
    "fileTypes": [
      "lisp",
      "lsp",
      "l",
      "cl",
      "asd",
      "asdf"
    ],
    "foldingStartMarker": "\\(",
    "foldingStopMarker": "\\)",
    "name": "common-lisp",
    "patterns": [
      {
        "include": "#comment"
      },
      {
        "include": "#block-comment"
      },
      {
        "include": "#string"
      },
      {
        "include": "#escape"
      },
      {
        "include": "#constant"
      },
      {
        "include": "#lambda-list"
      },
      {
        "include": "#function"
      },
      {
        "include": "#style-guide"
      },
      {
        "include": "#def-name"
      },
      {
        "include": "#macro"
      },
      {
        "include": "#symbol"
      },
      {
        "include": "#special-operator"
      },
      {
        "include": "#declaration"
      },
      {
        "include": "#type"
      },
      {
        "include": "#class"
      },
      {
        "include": "#condition-type"
      },
      {
        "include": "#package"
      },
      {
        "include": "#variable"
      },
      {
        "include": "#punctuation"
      }
    ],
    "repository": {
      "block-comment": {
        "begin": "\\#\\|",
        "contentName": "comment.block.commonlisp",
        "end": "\\|\\#",
        "name": "comment",
        "patterns": [
          {
            "include": "#block-comment",
            "name": "comment"
          }
        ]
      },
      "class": {
        "match": "(?xi)\n(?<=^|\\s|\\() # preceded by space or (\n(?:two-way-stream|synonym-stream|symbol|structure-object|structure-class|string-stream|stream|standard-object|standard-method|\nstandard-generic-function|standard-class|sequence|restart|real|readtable|ratio|random-state|package|number|method|integer|hash-table|\ngeneric-function|file-stream|echo-stream|concatenated-stream|class|built-in-class|broadcast-stream|bit-vector|array)\n(?=(\\s|\\(|\\)))  # followed by space, ( or )",
        "name": "support.class.commonlisp"
      },
      "comment": {
        "begin": "(^[ \\t]+)?(?=;)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.whitespace.comment.leading.commonlisp"
          }
        },
        "end": "(?!\\G)",
        "patterns": [
          {
            "begin": ";",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.comment.commonlisp"
              }
            },
            "end": "\\n",
            "name": "comment.line.semicolon.commonlisp"
          }
        ]
      },
      "condition-type": {
        "match": "(?xi)\n(?<=^|\\s|\\() # preceded by space or (\n(?:warning|undefined-function|unbound-variable|unbound-slot|type-error|style-warning|stream-error|storage-condition|simple-warning|\nsimple-type-error|simple-error|simple-condition|serious-condition|reader-error|program-error|print-not-readable|parse-error|package-error|\nfloating-point-underflow|floating-point-overflow|floating-point-invalid-operation|floating-point-inexact|file-error|error|end-of-file|\ndivision-by-zero|control-error|condition|cell-error|arithmetic-error)\n(?=(\\s|\\(|\\)))  # followed by space, ( or )",
        "name": "support.type.exception.commonlisp"
      },
      "constant": {
        "patterns": [
          {
            "match": "(?xi)\n(?<=^|\\s|\\(|,@|,\\.|,) # preceded by space , ( or `,`|`,@`|`,.`\n(?:t|single-float-negative-epsilon|single-float-epsilon|short-float-negative-epsilon|short-float-epsilon|pi|\nnil|multiple-values-limit|most-positive-single-float|most-positive-short-float|most-positive-long-float|\nmost-positive-fixnum|most-positive-double-float|most-negative-single-float|most-negative-short-float|\nmost-negative-long-float|most-negative-fixnum|most-negative-double-float|long-float-negative-epsilon|\nlong-float-epsilon|least-positive-single-float|least-positive-short-float|least-positive-normalized-single-float|\nleast-positive-normalized-short-float|least-positive-normalized-long-float|least-positive-normalized-double-float|\nleast-positive-long-float|least-positive-double-float|least-negative-single-float|least-negative-short-float|\nleast-negative-normalized-single-float|least-negative-normalized-short-float|least-negative-normalized-long-float|\nleast-negative-normalized-double-float|least-negative-long-float|least-negative-double-float|lambda-parameters-limit|\nlambda-list-keywords|internal-time-units-per-second|double-float-negative-epsilon|double-float-epsilon|char-code-limit|\ncall-arguments-limit|boole-xor|boole-set|boole-orc2|boole-orc1|boole-nor|boole-nand|boole-ior|boole-eqv|boole-clr|\nboole-c2|boole-c1|boole-andc2|boole-andc1|boole-and|boole-2|boole-1|array-total-size-limit|array-rank-limit|array-dimension-limit)\n(?=(\\s|\\(|\\))) # followed by space, ( or )",
            "name": "constant.language.commonlisp"
          },
          {
            "match": "(?<=^|\\s|\\(|,@|,\\.|,)([+-]?[0-9]+(?:\\/[0-9]+)*|[-+]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?|(\\#b|\\#B)[01\\/+-]+|(\\#o|\\#O)[0-7\\/+-]+|(\\#x|\\#X)[0-9a-fA-F\\/+-]+|(\\#[0-9]+[rR]?)[0-9a-zA-Z\\/+-]+)(?=(\\s|\\)))",
            "name": "constant.numeric.commonlisp"
          },
          {
            "match": "(?xi)\n(?<=\\s) # preceded by space\n(\\.)\n(?=\\s)",
            "name": "variable.other.constant.dot.commonlisp"
          },
          {
            "match": "(?<=^|\\s|\\(|,@|,\\.|,)([+-]?[0-9]*\\.[0-9]*((e|s|f|d|l|E|S|F|D|L)[+-]?[0-9]+)?|[+-]?[0-9]+(\\.[0-9]*)?(e|s|f|d|l|E|S|F|D|L)[+-]?[0-9]+)(?=(\\s|\\)))",
            "name": "constant.numeric.commonlisp"
          }
        ]
      },
      "declaration": {
        "match": "(?xi)\n(?<=^|\\s|\\() # preceded by space or (\n(?:type|speed|special|space|safety|optimize|notinline|inline|ignore|ignorable|ftype|dynamic-extent|declaration|debug|compilation-speed)\n(?=(\\s|\\(|\\)))  # followed by space, ( or )",
        "name": "storage.type.function.declaration.commonlisp"
      },
      "def-name": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "storage.type.function.defname.commonlisp"
              },
              "3": {
                "name": "storage.type.function.defname.commonlisp"
              },
              "4": {
                "name": "variable.other.constant.defname.commonlisp"
              },
              "6": {
                "patterns": [
                  {
                    "include": "#package"
                  },
                  {
                    "match": "\\S+?",
                    "name": "entity.name.function.commonlisp"
                  }
                ]
              },
              "7": {
                "name": "variable.other.constant.defname.commonlisp"
              },
              "9": {
                "patterns": [
                  {
                    "include": "#package"
                  },
                  {
                    "match": "\\S+?",
                    "name": "entity.name.function.commonlisp"
                  }
                ]
              }
            },
            "match": "(?xi)\n(?<=^|\\s|\\()                     # preceded by (\n(defun|defsetf|defmethod|defmacro|define-symbol-macro|define-setf-expander|\ndefine-modify-macro|define-method-combination|define-compiler-macro|defgeneric)  #1 keywords\n\\s+\n(   \\(\\s*\n        ([#:A-Za-z0-9\\+\\-\\*\\/\\@\\$\\%\\^\\&\\_\\=\\<\\>\\~\\!\\?\\[\\]\\{\\}\\.]+) #3\n    \\s*\n        ((,@|,\\.|,)?) #4\n        ([#:A-Za-z0-9\\+\\-\\*\\/\\@\\$\\%\\^\\&\\_\\=\\<\\>\\~\\!\\?\\[\\]\\{\\}\\.]+?)      #6 (<3>something+ <6>name)\n    |\n        ((,@|,\\.|,)?) #7\n        ([#:A-Za-z0-9\\+\\-\\*\\/\\@\\$\\%\\^\\&\\_\\=\\<\\>\\~\\!\\?\\[\\]\\{\\}\\.]+?)      #9 name\n) #2\n(?=(\\s|\\(|\\)))"
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.function.defname.commonlisp"
              },
              "2": {
                "name": "entity.name.type.commonlisp"
              }
            },
            "match": "(?xi)\n(?<=^|\\s|\\()\n(deftype|defpackage|define-condition|defclass)              # keywords\n\\s+\n([#:A-Za-z0-9\\+\\-\\*\\/\\@\\$\\%\\^\\&\\_\\=\\<\\>\\~\\!\\?\\[\\]\\{\\}\\.]+?)                   # name\n(?=(\\s|\\(|\\)))"
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.function.defname.commonlisp"
              },
              "2": {
                "patterns": [
                  {
                    "include": "#package"
                  },
                  {
                    "match": "\\S+?",
                    "name": "variable.other.constant.defname.commonlisp"
                  }
                ]
              }
            },
            "match": "(?xi)\n(?<=^|\\s|\\()\n(defconstant)         # keywords\n\\s+\n([#:A-Za-z0-9\\+\\-\\*\\/\\@\\$\\%\\^\\&\\_\\=\\<\\>\\~\\!\\?\\[\\]\\{\\}\\.]+?)                # name\n(?=(\\s|\\(|\\)))"
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.function.defname.commonlisp"
              }
            },
            "match": "(?xi)\n(?<=^|\\s|\\()\n(defvar|defparameter) # keywords\n\\s+\n(?=(\\s|\\(|\\)))"
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.function.defname.commonlisp"
              },
              "2": {
                "name": "entity.name.type.commonlisp"
              }
            },
            "match": "(?xi)\n(?<=^|\\s|\\()\n(defstruct)         # keywords\n\\s+\\(?\\s*\n([#:A-Za-z0-9\\+\\-\\*\\/\\@\\$\\%\\^\\&\\_\\=\\<\\>\\~\\!\\?\\[\\]\\{\\}\\.]+?)              # name\n(?=(\\s|\\(|\\)))"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.control.commonlisp"
              },
              "2": {
                "patterns": [
                  {
                    "include": "#package"
                  },
                  {
                    "match": "\\S+?",
                    "name": "entity.name.function.commonlisp"
                  }
                ]
              }
            },
            "match": "(?xi)\n(?<=^|\\s|\\()\n(macrolet|labels|flet)        # keywords\n\\s+\\(\\s*\\(\\s*\n([#:A-Za-z0-9\\+\\-\\*\\/\\@\\$\\%\\^\\&\\_\\=\\<\\>\\~\\!\\?\\[\\]\\{\\}\\.]+?)                        # name\n(?=(\\s|\\(|\\)))"
          }
        ]
      },
      "escape": {
        "match": "(?xi)\n(?<=^|\\s|\\() # preceded by space or (\n(?:\\#\\\\\\S+?)\n(?=(\\s|\\(|\\)))  # followed by space, ( or )",
        "name": "constant.character.escape.commonlisp"
      },
      "function": {
        "patterns": [
          {
            "match": "(?xi)\n(?<=^|\\s|\\(|\\#') # preceded by space or (\n(?:values|third|tenth|symbol-value|symbol-plist|symbol-function|svref|subseq|sixth|seventh|second|schar|sbit|row-major-aref|\n   rest|readtable-case|nth|ninth|mask-field|macro-function|logical-pathname-translations|ldb|gethash|getf|get|fourth|first|\n   find-class|fill-pointer|fifth|fdefinition|elt|eighth|compiler-macro-function|char|cdr|cddr|cdddr|cddddr|cdddar|cddar|cddadr|\n   cddaar|cdar|cdadr|cdaddr|cdadar|cdaar|cdaadr|cdaaar|car|cadr|caddr|cadddr|caddar|cadar|cadadr|cadaar|caar|caadr|caaddr|caadar|\n   caaar|caaadr|caaaar|bit|aref)\n(?=(\\s|\\(|\\)))  # followed by space, ( or )",
            "name": "support.function.accessor.commonlisp"
          },
          {
            "match": "(?xi)\n(?<=^|\\s|\\(|\\#') # preceded by space or (\n(?:yes-or-no-p|y-or-n-p|write-sequence|write-char|write-byte|warn|vector-pop|use-value|use-package|unuse-package|union|unintern|\nunexport|terpri|tailp|substitute-if-not|substitute-if|substitute|subst-if-not|subst-if|subst|sublis|string-upcase|string-downcase|\nstring-capitalize|store-value|sleep|signal|shadowing-import|shadow|set-syntax-from-char|set-macro-character|set-exclusive-or|\nset-dispatch-macro-character|set-difference|set|rplacd|rplaca|room|reverse|revappend|require|replace|remprop|remove-if-not|remove-if|\nremove-duplicates|remove|remhash|read-sequence|read-byte|random|provide|pprint-tabular|pprint-newline|pprint-linear|pprint-fill|\nnunion|nsubstitute-if-not|nsubstitute-if|nsubstitute|nsubst-if-not|nsubst-if|nsubst|nsublis|nstring-upcase|nstring-downcase|nstring-capitalize|\nnset-exclusive-or|nset-difference|nreverse|nreconc|nintersection|nconc|muffle-warning|method-combination-error|maphash|makunbound|ldiff|\ninvoke-restart-interactively|invoke-restart|invoke-debugger|invalid-method-error|intersection|inspect|import|get-output-stream-string|\nget-macro-character|get-dispatch-macro-character|gentemp|gensym|fresh-line|fill|file-position|export|describe|delete-if-not|delete-if|\ndelete-duplicates|delete|continue|clrhash|close|clear-input|break|abort)\n(?=(\\s|\\(|\\))) # followed by space, ( or )",
            "name": "support.function.f.sideeffects.commonlisp"
          },
          {
            "match": "(?xi)\n(?<=^|\\s|\\(|\\#') # preceded by space or (\n(?:zerop|write-to-string|write-string|write-line|write|wild-pathname-p|vectorp|vector-push-extend|vector-push|vector|values-list|\nuser-homedir-pathname|upper-case-p|upgraded-complex-part-type|upgraded-array-element-type|unread-char|unbound-slot-instance|typep|type-of|\ntype-error-expected-type|type-error-datum|two-way-stream-output-stream|two-way-stream-input-stream|truncate|truename|tree-equal|translate-pathname|\ntranslate-logical-pathname|tanh|tan|synonym-stream-symbol|symbolp|symbol-package|symbol-name|sxhash|subtypep|subsetp|stringp|string>=|string>|\nstring=|string<=|string<|string\\/=|string-trim|string-right-trim|string-not-lessp|string-not-greaterp|string-not-equal|string-lessp|\nstring-left-trim|string-greaterp|string-equal|string|streamp|stream-external-format|stream-error-stream|stream-element-type|standard-char-p|\nstable-sort|sqrt|special-operator-p|sort|some|software-version|software-type|slot-value|slot-makunbound|slot-exists-p|slot-boundp|sinh|sin|\nsimple-vector-p|simple-string-p|simple-condition-format-control|simple-condition-format-arguments|simple-bit-vector-p|signum|short-site-name|\nset-pprint-dispatch|search|scale-float|round|restart-name|rename-package|rename-file|rem|reduce|realpart|realp|readtablep|\nread-preserving-whitespace|read-line|read-from-string|read-delimited-list|read-char-no-hang|read-char|read|rationalp|rationalize|\nrational|rassoc-if-not|rassoc-if|rassoc|random-state-p|proclaim|probe-file|print-not-readable-object|print|princ-to-string|princ|\nprin1-to-string|prin1|pprint-tab|pprint-indent|pprint-dispatch|pprint|position-if-not|position-if|position|plusp|phase|peek-char|pathnamep|\npathname-version|pathname-type|pathname-name|pathname-match-p|pathname-host|pathname-directory|pathname-device|pathname|parse-namestring|\nparse-integer|pairlis|packagep|package-used-by-list|package-use-list|package-shadowing-symbols|package-nicknames|package-name|package-error-package|\noutput-stream-p|open-stream-p|open|oddp|numerator|numberp|null|nthcdr|notevery|notany|not|next-method-p|nbutlast|namestring|name-char|mod|mismatch|\nminusp|min|merge-pathnames|merge|member-if-not|member-if|member|max|maplist|mapl|mapcon|mapcar|mapcan|mapc|map-into|map|make-two-way-stream|\nmake-synonym-stream|make-symbol|make-string-output-stream|make-string-input-stream|make-string|make-sequence|make-random-state|make-pathname|\nmake-package|make-load-form-saving-slots|make-list|make-hash-table|make-echo-stream|make-dispatch-macro-character|make-condition|\nmake-concatenated-stream|make-broadcast-stream|make-array|macroexpand-1|macroexpand|machine-version|machine-type|machine-instance|lower-case-p|\nlong-site-name|logxor|logtest|logorc2|logorc1|lognot|lognor|lognand|logior|logical-pathname|logeqv|logcount|logbitp|logandc2|logandc1|logand|\nlog|load-logical-pathname-translations|load|listp|listen|list-length|list-all-packages|list\\*|list|lisp-implementation-version|\nlisp-implementation-type|length|ldb-test|lcm|last|keywordp|isqrt|intern|interactive-stream-p|integerp|integer-length|integer-decode-float|\ninput-stream-p|imagpart|identity|host-namestring|hash-table-test|hash-table-size|hash-table-rehash-threshold|hash-table-rehash-size|hash-table-p|\nhash-table-count|graphic-char-p|get-universal-time|get-setf-expansion|get-properties|get-internal-run-time|get-internal-real-time|\nget-decoded-time|gcd|functionp|function-lambda-expression|funcall|ftruncate|fround|format|force-output|fmakunbound|floor|floatp|float-sign|\nfloat-radix|float-precision|float-digits|float|finish-output|find-symbol|find-restart|find-package|find-if-not|find-if|find-all-symbols|find|\nfile-write-date|file-string-length|file-namestring|file-length|file-error-pathname|file-author|ffloor|fceiling|fboundp|expt|exp|every|evenp|\neval|equalp|equal|eql|eq|ensure-generic-function|ensure-directories-exist|enough-namestring|endp|encode-universal-time|ed|echo-stream-output-stream|\necho-stream-input-stream|dribble|dpb|disassemble|directory-namestring|directory|digit-char-p|digit-char|deposit-field|denominator|delete-package|\ndelete-file|decode-universal-time|decode-float|count-if-not|count-if|count|cosh|cos|copy-tree|copy-symbol|copy-structure|copy-seq|copy-readtable|\ncopy-pprint-dispatch|copy-list|copy-alist|constantp|constantly|consp|cons|conjugate|concatenated-stream-streams|concatenate|compute-restarts|\ncomplexp|complex|complement|compiled-function-p|compile-file-pathname|compile-file|compile|coerce|code-char|clear-output|class-of|cis|characterp|\ncharacter|char>=|char>|char=|char<=|char<|char\\/=|char-upcase|char-not-lessp|char-not-greaterp|char-not-equal|char-name|char-lessp|char-int|\nchar-greaterp|char-equal|char-downcase|char-code|cerror|cell-error-name|ceiling|call-next-method|byte-size|byte-position|byte|butlast|\nbroadcast-stream-streams|boundp|both-case-p|boole|bit-xor|bit-vector-p|bit-orc2|bit-orc1|bit-not|bit-nor|bit-nand|bit-ior|bit-eqv|bit-andc2|\nbit-andc1|bit-and|atom|atanh|atan|assoc-if-not|assoc-if|assoc|asinh|asin|ash|arrayp|array-total-size|array-row-major-index|array-rank|\narray-in-bounds-p|array-has-fill-pointer-p|array-element-type|array-displacement|array-dimensions|array-dimension|arithmetic-error-operation|\narithmetic-error-operands|apropos-list|apropos|apply|append|alphanumericp|alpha-char-p|adjustable-array-p|adjust-array|adjoin|acosh|acos|acons|\nabs|>=|>|=|<=|<|1-|1\\+|\\/=|\\/|-|\\+|\\*)\n(?=(\\s|\\(|\\))) # followed by space, ( or )",
            "name": "support.function.f.sideeffects.commonlisp"
          },
          {
            "match": "(?xi)\n(?<=^|\\s|\\(|\\#') # preceded by space or (\n(?:variable|update-instance-for-redefined-class|update-instance-for-different-class|structure|slot-unbound|slot-missing|shared-initialize|\nremove-method|print-object|no-next-method|no-applicable-method|method-qualifiers|make-load-form|make-instances-obsolete|make-instance|\ninitialize-instance|function-keywords|find-method|documentation|describe-object|compute-applicable-methods|compiler-macro|class-name|\nchange-class|allocate-instance|add-method)\n(?=(\\s|\\(|\\)))  # followed by space, ( or )",
            "name": "support.function.sgf.nosideeffects.commonlisp"
          },
          {
            "match": "(?xi)\n(?<=^|\\s|\\(|\\#') # preceded by space or (\n(?:reinitialize-instance)\n(?=(\\s|\\(|\\)))  # followed by space, ( or )",
            "name": "support.function.sgf.sideeffects.commonlisp"
          },
          {
            "match": "(?xi)\n(?<=^|\\s|\\(|\\#') # preceded by space or (\n(?:satisfies)\n(?=(\\s|\\(|\\)))  # followed by space, ( or )",
            "name": "support.function.typespecifier.commonlisp"
          }
        ]
      },
      "lambda-list": {
        "match": "(?xi)\n(?<=^|\\s|\\() # preceded by space or (\n(?:&[#:A-Za-z0-9\\+\\-\\*\\/\\@\\$\\%\\^\\&\\_\\=\\<\\>\\~\\!\\?\\[\\]\\{\\}\\.]+?|&whole|&rest|&optional|&key|&environment|&body|&aux|&allow-other-keys)\n(?=(\\s|\\(|\\))) # followed by space, ( or )",
        "name": "keyword.other.lambdalist.commonlisp"
      },
      "macro": {
        "patterns": [
          {
            "match": "(?xi)\n(?<=^|\\s|\\() # preceded by space or (\n(?:with-standard-io-syntax|with-slots|with-simple-restart|with-package-iterator|with-hash-table-iterator|with-condition-restarts|\nwith-compilation-unit|with-accessors|when|unless|typecase|time|step|shiftf|setf|rotatef|return|restart-case|restart-bind|psetf|prog2|prog1|\nprog\\*|prog|print-unreadable-object|pprint-logical-block|pprint-exit-if-list-exhausted|or|nth-value|multiple-value-setq|multiple-value-list|\nmultiple-value-bind|make-method|loop|lambda|ignore-errors|handler-case|handler-bind|formatter|etypecase|dotimes|dolist|do-symbols|do-external-symbols|\ndo-all-symbols|do\\*|do|destructuring-bind|defun|deftype|defstruct|defsetf|defpackage|defmethod|defmacro|define-symbol-macro|define-setf-expander|\ndefine-condition|define-compiler-macro|defgeneric|defconstant|defclass|declaim|ctypecase|cond|call-method|assert|and)\n(?=(\\s|\\(|\\)))  # followed by space, ( or )",
            "name": "storage.type.function.m.nosideeffects.commonlisp"
          },
          {
            "match": "(?xi)\n(?<=^|\\s|\\() # preceded by space or (\n(?:with-output-to-string|with-open-stream|with-open-file|with-input-from-string|untrace|trace|remf|pushnew|push|psetq|pprint-pop|pop|\notherwise|loop-finish|incf|in-package|ecase|defvar|defparameter|define-modify-macro|define-method-combination|decf|check-type|ccase|case)\n(?=(\\s|\\(|\\)))  # followed by space, ( or )",
            "name": "storage.type.function.m.sideeffects.commonlisp"
          },
          {
            "match": "(?xi)\n(?<=^|\\s|\\() # preceded by space or (\n(?:setq)\n(?=(\\s|\\(|\\)))  # followed by space, ( or )",
            "name": "storage.type.function.specialform.commonlisp"
          }
        ]
      },
      "package": {
        "patterns": [
          {
            "captures": {
              "2": {
                "name": "support.type.package.commonlisp"
              },
              "3": {
                "name": "support.type.package.commonlisp"
              }
            },
            "match": "(?xi)\n(?<=^|\\s|\\(|,@|,\\.|,) # preceded by space , ( or `,`|`,@`|`,.`\n(\n  ([A-Za-z0-9\\+\\-\\*\\/\\@\\$\\%\\^\\&\\_\\=\\<\\>\\~\\!\\?\\[\\]\\{\\}\\.]+?)  #2\n  | \n  (\\#) #3\n)\n(?=\\:\\:|\\:)"
          }
        ]
      },
      "punctuation": {
        "patterns": [
          {
            "match": "(?xi)\n(?<=^|\\s|\\(|,@|,\\.|,) # preceded by space , ( or `,`|`,@`|`,.`\n('|`)\n(?=\\S)",
            "name": "variable.other.constant.singlequote.commonlisp"
          },
          {
            "match": "(?xi)\n(?<=^|\\s|\\(|,@|,\\.|,) # preceded by space , ( or `,`|`,@`|`,.`\n(?:\\:[#:A-Za-z0-9\\+\\-\\*\\/\\@\\$\\%\\^\\&\\_\\=\\<\\>\\~\\!\\?\\[\\]\\{\\}\\.]+?)\n(?=(\\s|\\(|\\)))       # followed by space, ( or )",
            "name": "entity.name.variable.commonlisp"
          },
          {
            "captures": {
              "1": {
                "name": "variable.other.constant.sharpsign.commonlisp"
              },
              "2": {
                "name": "constant.numeric.commonlisp"
              }
            },
            "match": "(?xi)\n(?<=^|\\s|\\(|,@|,\\.|,) # preceded by space , ( or `,`|`,@`|`,.`\n(\\#)([0-9]*)\n(?=\\()"
          },
          {
            "captures": {
              "1": {
                "name": "variable.other.constant.sharpsign.commonlisp"
              },
              "2": {
                "name": "constant.numeric.commonlisp"
              },
              "3": {
                "name": "variable.other.constant.sharpsign.commonlisp"
              }
            },
            "match": "(?xi)\n(?<=^|\\s|\\(|,@|,\\.|,) # preceded by space , ( or `,`|`,@`|`,.`\n(\\#)\n([0-9]*)\n(\\*)\n(?=0|1)"
          },
          {
            "match": "(?xi)\n(?<=^|\\s|\\(|,@|,\\.|,) # preceded by space , ( or `,`|`,@`|`,.`\n(\\#\\*|\\#0\\*)\n(?=(\\s|\\(|\\)))       # followed by space, ( or )",
            "name": "variable.other.constant.sharpsign.commonlisp"
          },
          {
            "captures": {
              "1": {
                "name": "variable.other.constant.sharpsign.commonlisp"
              },
              "2": {
                "name": "constant.numeric.commonlisp"
              },
              "3": {
                "name": "variable.other.constant.sharpsign.commonlisp"
              }
            },
            "match": "(?xi)\n(?<=^|\\s|\\(|,@|,\\.|,) # preceded by space , ( or `,`|`,@`|`,.`\n(\\#)\n([0-9]+)\n(a|A)\n(?=.)"
          },
          {
            "captures": {
              "1": {
                "name": "variable.other.constant.sharpsign.commonlisp"
              },
              "2": {
                "name": "constant.numeric.commonlisp"
              },
              "3": {
                "name": "variable.other.constant.sharpsign.commonlisp"
              }
            },
            "match": "(?xi)\n(?<=^|\\s|\\(|,@|,\\.|,) # preceded by space , ( or `,`|`,@`|`,.`\n(\\#)\n([0-9]+)\n(=)\n(?=.)"
          },
          {
            "captures": {
              "1": {
                "name": "variable.other.constant.sharpsign.commonlisp"
              },
              "2": {
                "name": "constant.numeric.commonlisp"
              },
              "3": {
                "name": "variable.other.constant.sharpsign.commonlisp"
              }
            },
            "match": "(?xi)\n(?<=^|\\s|\\(|,@|,\\.|,) # preceded by space , ( or `,`|`,@`|`,.`\n(\\#)\n([0-9]+)\n(\\#)\n(?=.)"
          },
          {
            "match": "(?xi)\n(?<=^|\\s|\\(|,@|,\\.|,) # preceded by space , ( or `,`|`,@`|`,.`\n(\\#(\\+|-))\n(?=\\S)",
            "name": "variable.other.constant.sharpsign.commonlisp"
          },
          {
            "match": "(?xi)\n(?<=^|\\s|\\(|,@|,\\.|,) # preceded by space , ( or `,`|`,@`|`,.`\n(\\#('|,|\\.|c|C|s|S|p|P))\n(?=\\S)",
            "name": "variable.other.constant.sharpsign.commonlisp"
          },
          {
            "captures": {
              "1": {
                "name": "support.type.package.commonlisp"
              }
            },
            "match": "(?xi)\n(?<=^|\\s|\\(|,@|,\\.|,) # preceded by space , ( or `,`|`,@`|`,.`\n(\\#)\n(:)\n(?=\\S)"
          },
          {
            "captures": {
              "2": {
                "name": "variable.other.constant.backquote.commonlisp"
              },
              "3": {
                "name": "variable.other.constant.backquote.commonlisp"
              },
              "4": {
                "name": "variable.other.constant.backquote.commonlisp"
              },
              "5": {
                "name": "variable.other.constant.backquote.commonlisp"
              }
            },
            "match": "(?xi)\n(?<=^|\\s|\\() # preceded by space or (\n(\n    (`\\#) #2\n    |\n    (`)(,@|,\\.|,)? #3, #4\n    |\n    (,@|,\\.|,) #5\n)\n(?=\\S)"
          }
        ]
      },
      "special-operator": {
        "captures": {
          "2": {
            "name": "keyword.control.commonlisp"
          }
        },
        "match": "(?xi)\n(\\(\\s*) # preceded by (\n(unwind-protect|throw|the|tagbody|symbol-macrolet|return-from|quote|progv|progn|multiple-value-prog1|multiple-value-call|\nmacrolet|locally|load-time-value|let\\*|let|labels|if|go|function|flet|eval-when|catch|block)\n(?=(\\s|\\(|\\)))  # followed by space, ( or )"
      },
      "string": {
        "begin": "(\")",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.string.begin.commonlisp"
          }
        },
        "end": "(\")",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.string.end.commonlisp"
          }
        },
        "name": "string.quoted.double.commonlisp",
        "patterns": [
          {
            "match": "\\\\.",
            "name": "constant.character.escape.commonlisp"
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.function.formattedstring.commonlisp"
              },
              "2": {
                "name": "variable.other.constant.formattedstring.commonlisp"
              },
              "8": {
                "name": "storage.type.function.formattedstring.commonlisp"
              },
              "10": {
                "name": "storage.type.function.formattedstring.commonlisp"
              }
            },
            "match": "(?xi)\n\n(~) #1 tilde\n(\n    (\n        (([+-]?[0-9]+)|('.)|V|\\#)*?\n        (,)?\n    )\n*?) #2 prefix parameters, signed decimal numbers|single char, separated by commas\n(\n    (:@|@:|:|@)\n?) #8 modifiers\n(\\(|\\)|\\[|\\]|;|{|}|<|>|\\^) #10 control structures"
          },
          {
            "captures": {
              "1": {
                "name": "entity.name.variable.commonlisp"
              },
              "2": {
                "name": "variable.other.constant.formattedstring.commonlisp"
              },
              "8": {
                "name": "entity.name.variable.commonlisp"
              },
              "10": {
                "name": "entity.name.variable.commonlisp"
              }
            },
            "match": "(?xi)\n\n(~) #1 tilde\n(\n    (\n        (([+-]?[0-9]+)|('.)|V|\\#)*?\n        (,)?\n    )\n*?) #2 prefix parameters, signed decimal numbers|single char, separated by commas\n(\n    (:@|@:|:|@)\n?) #8 modifiers\n(A|S|D|B|O|X|R|P|C|F|E|G|\\$|%|\\&|\\||~|T|\\*|\\?|_|W|I) #10 directives"
          },
          {
            "captures": {
              "1": {
                "name": "entity.name.variable.commonlisp"
              },
              "2": {
                "name": "variable.other.constant.formattedstring.commonlisp"
              },
              "8": {
                "name": "entity.name.variable.commonlisp"
              },
              "10": {
                "name": "entity.name.variable.commonlisp"
              },
              "11": {
                "name": "entity.name.variable.commonlisp"
              },
              "12": {
                "name": "entity.name.variable.commonlisp"
              }
            },
            "match": "(?xi)\n\n(~) #1 tilde\n(\n    (\n        (([+-]?[0-9]+)|('.)|V|\\#)*?\n        (,)?\n    )\n*?) #2 prefix parameters, signed decimal numbers|single char, separated by commas\n(\n    (:@|@:|:|@)\n?) #8 modifiers\n(\\/) #10\n([#:A-Za-z0-9\\+\\-\\*\\/\\@\\$\\%\\^\\&\\_\\=\\<\\>\\~\\!\\?\\[\\]\\{\\}\\.]+?) #11 call function\n(\\/) #12"
          },
          {
            "match": "(~\\n)",
            "name": "variable.other.constant.formattedstring.commonlisp"
          }
        ]
      },
      "style-guide": {
        "patterns": [
          {
            "captures": {
              "3": {
                "name": "source.commonlisp"
              }
            },
            "match": "(?xi)\n(?<=^'|\\s'|\\('|,@'|,\\.'|,')\n(\\S+?)\n(\\:\\:|\\:)\n((\\+[^\\s\\+]+\\+)|(\\*[^\\s\\*]+\\*))\n(?=(\\s|\\(|\\)))"
          },
          {
            "match": "(?xi)\n(?<=\\S:|^|\\s|\\(|,@|,\\.|,) # preceded by space , ( or `,`|`,@`|`,.`\n(\\+[^\\s\\+]+\\+)\n(?=(\\s|\\(|\\)))  # followed by space, ( or )",
            "name": "variable.other.constant.earmuffsplus.commonlisp"
          },
          {
            "match": "(?xi)\n(?<=\\S:|^|\\s|\\(|,@|,\\.|,) # preceded by space , ( or `,`|`,@`|`,.`\n(\\*[^\\s\\*]+\\*)\n(?=(\\s|\\(|\\)))  # followed by space, ( or )",
            "name": "string.regexp.earmuffsasterisk.commonlisp"
          }
        ]
      },
      "symbol": {
        "match": "(?xi)\n(?<=^|\\s|\\() # preceded by space or (\n(?:method-combination|declare)\n(?=(\\s|\\(|\\)))  # followed by space, ( or )",
        "name": "storage.type.function.symbol.commonlisp"
      },
      "type": {
        "match": "(?xi)\n(?<=^|\\s|\\() # preceded by space or (\n(?:unsigned-byte|standard-char|standard|single-float|simple-vector|simple-string|simple-bit-vector|simple-base-string|simple-array|\nsigned-byte|short-float|long-float|keyword|fixnum|extended-char|double-float|compiled-function|boolean|bignum|base-string|base-char)\n(?=(\\s|\\(|\\)))  # followed by space, ( or )",
        "name": "support.type.t.commonlisp"
      },
      "variable": {
        "patterns": [
          {
            "match": "(?xi)\n(?<=^|\\s|\\(|,@|,\\.|,) # preceded by space , ( or `,`|`,@`|`,.`\n(?:\\*trace-output\\*|\\*terminal-io\\*|\\*standard-output\\*|\\*standard-input\\*|\\*readtable\\*|\\*read-suppress\\*|\\*read-eval\\*|\n\\*read-default-float-format\\*|\\*read-base\\*|\\*random-state\\*|\\*query-io\\*|\\*print-right-margin\\*|\\*print-readably\\*|\\*print-radix\\*|\\*print-pretty\\*|\n\\*print-pprint-dispatch\\*|\\*print-miser-width\\*|\\*print-lines\\*|\\*print-level\\*|\\*print-length\\*|\\*print-gensym\\*|\\*print-escape\\*|\\*print-circle\\*|\n\\*print-case\\*|\\*print-base\\*|\\*print-array\\*|\\*package\\*|\\*modules\\*|\\*macroexpand-hook\\*|\\*load-verbose\\*|\\*load-truename\\*|\\*load-print\\*|\n\\*load-pathname\\*|\\*gensym-counter\\*|\\*features\\*|\\*error-output\\*|\\*default-pathname-defaults\\*|\\*debugger-hook\\*|\\*debug-io\\*|\\*compile-verbose\\*|\n\\*compile-print\\*|\\*compile-file-truename\\*|\\*compile-file-pathname\\*|\\*break-on-signals\\*)\n(?=(\\s|\\(|\\)))  # followed by space, ( or )",
            "name": "string.regexp.earmuffsasterisk.commonlisp"
          },
          {
            "match": "(?xi)\n(?<=^|\\s|\\(|,@|,\\.|,) # preceded by space , ( or `,`|`,@`|`,.`\n(?:\\*\\*\\*|\\*\\*|\\+\\+\\+|\\+\\+|\\/\\/\\/|\\/\\/)\n(?=(\\s|\\(|\\)))  # followed by space, ( or )",
            "name": "variable.other.repl.commonlisp"
          }
        ]
      }
    },
    "scopeName": "source.commonlisp",
    "aliases": [
      "lisp"
    ]
  }
])