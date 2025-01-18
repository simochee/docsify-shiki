/** Shiki Language: racket */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push([
  {
    "displayName": "Racket",
    "name": "racket",
    "patterns": [
      {
        "include": "#comment"
      },
      {
        "include": "#not-atom"
      },
      {
        "include": "#atom"
      },
      {
        "include": "#quote"
      },
      {
        "match": "^#lang",
        "name": "keyword.other.racket"
      }
    ],
    "repository": {
      "args": {
        "patterns": [
          {
            "include": "#keyword"
          },
          {
            "include": "#comment"
          },
          {
            "include": "#default-args"
          },
          {
            "match": "[^(\\#)\\[\\]{}\",'`;\\s][^()\\[\\]{}\",'`;\\s]*",
            "name": "variable.parameter.racket"
          }
        ]
      },
      "argument": {
        "patterns": [
          {
            "begin": "(?<=[(\\[{])\\s*(\\|)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.verbatim.begin.racket"
              }
            },
            "contentName": "variable.parameter.racket",
            "end": "\\|",
            "endCaptures": {
              "0": "punctuation.verbatim.end.racket"
            }
          },
          {
            "begin": "(?<=[(\\[{])\\s*(\\#%|\\\\\\ |[^\\#()\\[\\]{}\",'`;\\s])",
            "beginCaptures": {
              "1": {
                "name": "variable.parameter.racket"
              }
            },
            "contentName": "variable.parameter.racket",
            "end": "(?=[()\\[\\]{}\",'`;\\s])",
            "patterns": [
              {
                "match": "\\\\ "
              },
              {
                "begin": "\\|",
                "beginCaptures": {
                  "0": "punctuation.verbatim.begin.racket"
                },
                "end": "\\|",
                "endCaptures": {
                  "0": "punctuation.verbatim.end.racket"
                }
              }
            ]
          }
        ]
      },
      "argument-struct": {
        "patterns": [
          {
            "begin": "(?<=[(\\[{])\\s*(\\|)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.verbatim.begin.racket"
              }
            },
            "contentName": "variable.other.member.racket",
            "end": "\\|",
            "endCaptures": {
              "0": "punctuation.verbatim.end.racket"
            }
          },
          {
            "begin": "(?<=[(\\[{])\\s*(\\#%|\\\\\\ |[^\\#()\\[\\]{}\",'`;\\s])",
            "beginCaptures": {
              "1": {
                "name": "variable.other.member.racket"
              }
            },
            "contentName": "variable.other.member.racket",
            "end": "(?=[()\\[\\]{}\",'`;\\s])",
            "patterns": [
              {
                "match": "\\\\ "
              },
              {
                "begin": "\\|",
                "beginCaptures": {
                  "0": "punctuation.verbatim.begin.racket"
                },
                "end": "\\|",
                "endCaptures": {
                  "0": "punctuation.verbatim.end.racket"
                }
              }
            ]
          }
        ]
      },
      "atom": {
        "patterns": [
          {
            "include": "#bool"
          },
          {
            "include": "#number"
          },
          {
            "include": "#string"
          },
          {
            "include": "#keyword"
          },
          {
            "include": "#character"
          },
          {
            "include": "#symbol"
          },
          {
            "include": "#variable"
          }
        ]
      },
      "base-string": {
        "patterns": [
          {
            "begin": "\"",
            "beginCaptures": {
              "0": [
                {
                  "name": "punctuation.definition.string.begin.racket"
                }
              ]
            },
            "end": "\"",
            "endCaptures": {
              "0": [
                {
                  "name": "punctuation.definition.string.end.racket"
                }
              ]
            },
            "name": "string.quoted.double.racket",
            "patterns": [
              {
                "include": "#escape-char"
              }
            ]
          }
        ]
      },
      "binding": {
        "patterns": [
          {
            "begin": "(?<=[(\\[{])\\s*(\\|)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.verbatim.begin.racket"
              }
            },
            "contentName": "entity.name.constant",
            "end": "\\|",
            "endCaptures": {
              "0": "punctuation.verbatim.end.racket"
            }
          },
          {
            "begin": "(?<=[(\\[{])\\s*(\\#%|\\\\\\ |[^\\#()\\[\\]{}\",'`;\\s])",
            "beginCaptures": {
              "1": {
                "name": "entity.name.constant"
              }
            },
            "contentName": "entity.name.constant",
            "end": "(?=[()\\[\\]{}\",'`;\\s])",
            "patterns": [
              {
                "match": "\\\\ "
              },
              {
                "begin": "\\|",
                "beginCaptures": {
                  "0": "punctuation.verbatim.begin.racket"
                },
                "end": "\\|",
                "endCaptures": {
                  "0": "punctuation.verbatim.end.racket"
                }
              }
            ]
          }
        ]
      },
      "bool": {
        "patterns": [
          {
            "match": "(?<=^|[()\\[\\]{}\",'`;\\s])\\#(?:[tT](?:rue)?|[fF](?:alse)?)(?=[()\\[\\]{}\",'`;\\s])",
            "name": "constant.language.racket"
          }
        ]
      },
      "builtin-functions": {
        "patterns": [
          {
            "include": "#format"
          },
          {
            "include": "#define"
          },
          {
            "include": "#lambda"
          },
          {
            "include": "#struct"
          },
          {
            "captures": {
              "1": {
                "name": "support.function.racket"
              }
            },
            "match": "(?<=$|[()\\[\\]{}\",'`;\\s])(\\.\\.\\.|_|syntax-id-rules|syntax-rules|\\#%app|\\#%datum|\\#%declare|\\#%expression|\\#%module-begin|\\#%plain-app|\\#%plain-lambda|\\#%plain-module-begin|\\#%printing-module-begin|\\#%provide|\\#%require|\\#%stratified-body|\\#%top|\\#%top-interaction|\\#%variable-reference|\\.\\.\\.|:do-in|=>|_|all-defined-out|all-from-out|and|apply|arity-at-least|begin|begin-for-syntax|begin0|call-with-input-file|call-with-input-file\\*|call-with-output-file|call-with-output-file\\*|case|case-lambda|combine-in|combine-out|cond|date|date\\*|define|define-for-syntax|define-logger|define-namespace-anchor|define-sequence-syntax|define-struct|define-struct\\/derived|define-syntax|define-syntax-rule|define-syntaxes|define-values|define-values-for-syntax|do|else|except-in|except-out|exn|exn:break|exn:break:hang-up|exn:break:terminate|exn:fail|exn:fail:contract|exn:fail:contract:arity|exn:fail:contract:continuation|exn:fail:contract:divide-by-zero|exn:fail:contract:non-fixnum-result|exn:fail:contract:variable|exn:fail:filesystem|exn:fail:filesystem:errno|exn:fail:filesystem:exists|exn:fail:filesystem:missing-module|exn:fail:filesystem:version|exn:fail:network|exn:fail:network:errno|exn:fail:out-of-memory|exn:fail:read|exn:fail:read:eof|exn:fail:read:non-char|exn:fail:syntax|exn:fail:syntax:missing-module|exn:fail:syntax:unbound|exn:fail:unsupported|exn:fail:user|file|for|for\\*|for\\*\\/and|for\\*\\/first|for\\*\\/fold|for\\*\\/fold\\/derived|for\\*\\/hash|for\\*\\/hasheq|for\\*\\/hasheqv|for\\*\\/last|for\\*\\/list|for\\*\\/lists|for\\*\\/or|for\\*\\/product|for\\*\\/sum|for\\*\\/vector|for-label|for-meta|for-syntax|for-template|for\\/and|for\\/first|for\\/fold|for\\/fold\\/derived|for\\/hash|for\\/hasheq|for\\/hasheqv|for\\/last|for\\/list|for\\/lists|for\\/or|for\\/product|for\\/sum|for\\/vector|gen:custom-write|gen:equal\\+hash|if|in-bytes|in-bytes-lines|in-directory|in-hash|in-hash-keys|in-hash-pairs|in-hash-values|in-immutable-hash|in-immutable-hash-keys|in-immutable-hash-pairs|in-immutable-hash-values|in-indexed|in-input-port-bytes|in-input-port-chars|in-lines|in-list|in-mlist|in-mutable-hash|in-mutable-hash-keys|in-mutable-hash-pairs|in-mutable-hash-values|in-naturals|in-port|in-producer|in-range|in-string|in-value|in-vector|in-weak-hash|in-weak-hash-keys|in-weak-hash-pairs|in-weak-hash-values|lambda|let|let\\*|let\\*-values|let-syntax|let-syntaxes|let-values|let\\/cc|let\\/ec|letrec|letrec-syntax|letrec-syntaxes|letrec-syntaxes\\+values|letrec-values|lib|local-require|log-debug|log-error|log-fatal|log-info|log-warning|module|module\\*|module\\+|only-in|only-meta-in|open-input-file|open-input-output-file|open-output-file|or|parameterize|parameterize\\*|parameterize-break|planet|prefix-in|prefix-out|protect-out|provide|quasiquote|quasisyntax|quasisyntax\\/loc|quote|quote-syntax|quote-syntax\\/prune|regexp-match\\*|regexp-match-peek-positions\\*|regexp-match-positions\\*|relative-in|rename-in|rename-out|require|set!|set!-values|sort|srcloc|struct|struct-copy|struct-field-index|struct-out|submod|syntax|syntax-case|syntax-case\\*|syntax-id-rules|syntax-rules|syntax\\/loc|time|unless|unquote|unquote-splicing|unsyntax|unsyntax-splicing|when|with-continuation-mark|with-handlers|with-handlers\\*|with-input-from-file|with-output-to-file|with-syntax|λ|\\#%app|\\#%datum|\\#%declare|\\#%expression|\\#%module-begin|\\#%plain-app|\\#%plain-lambda|\\#%plain-module-begin|\\#%printing-module-begin|\\#%provide|\\#%require|\\#%stratified-body|\\#%top|\\#%top-interaction|\\#%variable-reference|->|->\\*|->\\*m|->d|->dm|->i|->m|\\.\\.\\.|:do-in|<=\\/c|=\\/c|==|=>|>=\\/c|_|absent|abstract|add-between|all-defined-out|all-from-out|and|and\\/c|any|any\\/c|apply|arity-at-least|arrow-contract-info|augment|augment\\*|augment-final|augment-final\\*|augride|augride\\*|bad-number-of-results|begin|begin-for-syntax|begin0|between\\/c|blame-add-context|box-immutable\\/c|box\\/c|call-with-atomic-output-file|call-with-file-lock\\/timeout|call-with-input-file|call-with-input-file\\*|call-with-output-file|call-with-output-file\\*|case|case->|case->m|case-lambda|channel\\/c|char-in\\/c|check-duplicates|class|class\\*|class-field-accessor|class-field-mutator|class\\/c|class\\/derived|combine-in|combine-out|command-line|compound-unit|compound-unit\\/infer|cond|cons\\/c|cons\\/dc|continuation-mark-key\\/c|contract|contract-exercise|contract-out|contract-struct|contracted|copy-directory\\/files|current-contract-region|date|date\\*|define|define-compound-unit|define-compound-unit\\/infer|define-contract-struct|define-custom-hash-types|define-custom-set-types|define-for-syntax|define-local-member-name|define-logger|define-match-expander|define-member-name|define-module-boundary-contract|define-namespace-anchor|define-opt\\/c|define-sequence-syntax|define-serializable-class|define-serializable-class\\*|define-signature|define-signature-form|define-struct|define-struct\\/contract|define-struct\\/derived|define-syntax|define-syntax-rule|define-syntaxes|define-unit|define-unit-binding|define-unit-from-context|define-unit\\/contract|define-unit\\/new-import-export|define-unit\\/s|define-values|define-values-for-export|define-values-for-syntax|define-values\\/invoke-unit|define-values\\/invoke-unit\\/infer|define\\/augment|define\\/augment-final|define\\/augride|define\\/contract|define\\/final-prop|define\\/match|define\\/overment|define\\/override|define\\/override-final|define\\/private|define\\/public|define\\/public-final|define\\/pubment|define\\/subexpression-pos-prop|define\\/subexpression-pos-prop\\/name|delay|delay\\/idle|delay\\/name|delay\\/strict|delay\\/sync|delay\\/thread|delete-directory\\/files|dict->list|dict-can-functional-set\\?|dict-can-remove-keys\\?|dict-clear|dict-clear!|dict-copy|dict-count|dict-empty\\?|dict-for-each|dict-has-key\\?|dict-implements\\/c|dict-implements\\?|dict-iterate-first|dict-iterate-key|dict-iterate-next|dict-iterate-value|dict-keys|dict-map|dict-mutable\\?|dict-ref|dict-ref!|dict-remove|dict-remove!|dict-set|dict-set!|dict-set\\*|dict-set\\*!|dict-update|dict-update!|dict-values|dict\\?|display-lines|display-lines-to-file|display-to-file|do|dynamic->\\*|dynamic-place|dynamic-place\\*|else|eof-evt|except|except-in|except-out|exn|exn:break|exn:break:hang-up|exn:break:terminate|exn:fail|exn:fail:contract|exn:fail:contract:arity|exn:fail:contract:blame|exn:fail:contract:continuation|exn:fail:contract:divide-by-zero|exn:fail:contract:non-fixnum-result|exn:fail:contract:variable|exn:fail:filesystem|exn:fail:filesystem:errno|exn:fail:filesystem:exists|exn:fail:filesystem:missing-module|exn:fail:filesystem:version|exn:fail:network|exn:fail:network:errno|exn:fail:object|exn:fail:out-of-memory|exn:fail:read|exn:fail:read:eof|exn:fail:read:non-char|exn:fail:syntax|exn:fail:syntax:missing-module|exn:fail:syntax:unbound|exn:fail:unsupported|exn:fail:user|export|extends|failure-cont|field|field-bound\\?|file|file->bytes|file->bytes-lines|file->lines|file->list|file->string|file->value|find-files|find-relative-path|first-or\\/c|flat-contract-with-explanation|flat-murec-contract|flat-rec-contract|for|for\\*|for\\*\\/and|for\\*\\/async|for\\*\\/first|for\\*\\/fold|for\\*\\/fold\\/derived|for\\*\\/hash|for\\*\\/hasheq|for\\*\\/hasheqv|for\\*\\/last|for\\*\\/list|for\\*\\/lists|for\\*\\/mutable-set|for\\*\\/mutable-seteq|for\\*\\/mutable-seteqv|for\\*\\/or|for\\*\\/product|for\\*\\/set|for\\*\\/seteq|for\\*\\/seteqv|for\\*\\/stream|for\\*\\/sum|for\\*\\/vector|for\\*\\/weak-set|for\\*\\/weak-seteq|for\\*\\/weak-seteqv|for-label|for-meta|for-syntax|for-template|for\\/and|for\\/async|for\\/first|for\\/fold|for\\/fold\\/derived|for\\/hash|for\\/hasheq|for\\/hasheqv|for\\/last|for\\/list|for\\/lists|for\\/mutable-set|for\\/mutable-seteq|for\\/mutable-seteqv|for\\/or|for\\/product|for\\/set|for\\/seteq|for\\/seteqv|for\\/stream|for\\/sum|for\\/vector|for\\/weak-set|for\\/weak-seteq|for\\/weak-seteqv|gen:custom-write|gen:dict|gen:equal\\+hash|gen:set|gen:stream|generic|get-field|get-preference|hash\\/c|hash\\/dc|if|implies|import|in-bytes|in-bytes-lines|in-dict|in-dict-keys|in-dict-values|in-directory|in-hash|in-hash-keys|in-hash-pairs|in-hash-values|in-immutable-hash|in-immutable-hash-keys|in-immutable-hash-pairs|in-immutable-hash-values|in-immutable-set|in-indexed|in-input-port-bytes|in-input-port-chars|in-lines|in-list|in-mlist|in-mutable-hash|in-mutable-hash-keys|in-mutable-hash-pairs|in-mutable-hash-values|in-mutable-set|in-naturals|in-port|in-producer|in-range|in-set|in-slice|in-stream|in-string|in-syntax|in-value|in-vector|in-weak-hash|in-weak-hash-keys|in-weak-hash-pairs|in-weak-hash-values|in-weak-set|include|include-at\\/relative-to|include-at\\/relative-to\\/reader|include\\/reader|inherit|inherit-field|inherit\\/inner|inherit\\/super|init|init-depend|init-field|init-rest|inner|inspect|instantiate|integer-in|interface|interface\\*|invariant-assertion|invoke-unit|invoke-unit\\/infer|lambda|lazy|let|let\\*|let\\*-values|let-syntax|let-syntaxes|let-values|let\\/cc|let\\/ec|letrec|letrec-syntax|letrec-syntaxes|letrec-syntaxes\\+values|letrec-values|lib|link|list\\*of|list\\/c|listof|local|local-require|log-debug|log-error|log-fatal|log-info|log-warning|make-custom-hash|make-custom-hash-types|make-custom-set|make-custom-set-types|make-handle-get-preference-locked|make-immutable-custom-hash|make-mutable-custom-set|make-object|make-temporary-file|make-weak-custom-hash|make-weak-custom-set|match|match\\*|match\\*\\/derived|match-define|match-define-values|match-lambda|match-lambda\\*|match-lambda\\*\\*|match-let|match-let\\*|match-let\\*-values|match-let-values|match-letrec|match-letrec-values|match\\/derived|match\\/values|member-name-key|mixin|module|module\\*|module\\+|nand|new|new-∀\\/c|new-∃\\/c|non-empty-listof|none\\/c|nor|not\\/c|object-contract|object\\/c|one-of\\/c|only|only-in|only-meta-in|open|open-input-file|open-input-output-file|open-output-file|opt\\/c|or|or\\/c|overment|overment\\*|override|override\\*|override-final|override-final\\*|parameter\\/c|parameterize|parameterize\\*|parameterize-break|parametric->\\/c|pathlist-closure|peek-bytes!-evt|peek-bytes-avail!-evt|peek-bytes-evt|peek-string!-evt|peek-string-evt|peeking-input-port|place|place\\*|place\\/context|planet|port->bytes|port->bytes-lines|port->lines|port->string|prefix|prefix-in|prefix-out|pretty-format|private|private\\*|procedure-arity-includes\\/c|process|process\\*|process\\*\\/ports|process\\/ports|promise\\/c|prompt-tag\\/c|prop:dict\\/contract|protect-out|provide|provide-signature-elements|provide\\/contract|public|public\\*|public-final|public-final\\*|pubment|pubment\\*|quasiquote|quasisyntax|quasisyntax\\/loc|quote|quote-syntax|quote-syntax\\/prune|raise-blame-error|raise-not-cons-blame-error|range|read-bytes!-evt|read-bytes-avail!-evt|read-bytes-evt|read-bytes-line-evt|read-line-evt|read-string!-evt|read-string-evt|real-in|recontract-out|recursive-contract|regexp-match\\*|regexp-match-evt|regexp-match-peek-positions\\*|regexp-match-positions\\*|relative-in|relocate-input-port|relocate-output-port|remove-duplicates|rename|rename-in|rename-inner|rename-out|rename-super|require|send|send\\*|send\\+|send-generic|send\\/apply|send\\/keyword-apply|sequence\\/c|set!|set!-values|set-field!|set\\/c|shared|sort|srcloc|stream|stream\\*|stream-cons|string-join|string-len\\/c|string-normalize-spaces|string-replace|string-split|string-trim|struct|struct\\*|struct-copy|struct-field-index|struct-out|struct\\/c|struct\\/ctc|struct\\/dc|submod|super|super-instantiate|super-make-object|super-new|symbols|syntax|syntax-case|syntax-case\\*|syntax-id-rules|syntax-rules|syntax\\/c|syntax\\/loc|system|system\\*|system\\*\\/exit-code|system\\/exit-code|tag|this|this%|thunk|thunk\\*|time|transplant-input-port|transplant-output-port|unconstrained-domain->|unit|unit-from-context|unit\\/c|unit\\/new-import-export|unit\\/s|unless|unquote|unquote-splicing|unsyntax|unsyntax-splicing|values\\/drop|vector-immutable\\/c|vector-immutableof|vector-sort|vector-sort!|vector\\/c|vectorof|when|with-continuation-mark|with-contract|with-contract-continuation-mark|with-handlers|with-handlers\\*|with-input-from-file|with-method|with-output-to-file|with-syntax|wrapped-extra-arg-arrow|write-to-file|~\\.a|~\\.s|~\\.v|~a|~e|~r|~s|~v|λ|expand-for-clause|for-clause-syntax-protect|syntax-pattern-variable\\?|\\*|\\+|-|\\/|<|<=|=|>|>=|abort-current-continuation|abs|absolute-path\\?|acos|add1|alarm-evt|always-evt|andmap|angle|append|arithmetic-shift|arity-at-least-value|arity-at-least\\?|asin|assf|assoc|assq|assv|atan|banner|bitwise-and|bitwise-bit-field|bitwise-bit-set\\?|bitwise-ior|bitwise-not|bitwise-xor|boolean\\?|bound-identifier=\\?|box|box-cas!|box-immutable|box\\?|break-enabled|break-parameterization\\?|break-thread|build-list|build-path|build-path\\/convention-type|build-string|build-vector|byte-pregexp|byte-pregexp\\?|byte-ready\\?|byte-regexp|byte-regexp\\?|byte\\?|bytes|bytes->immutable-bytes|bytes->list|bytes->path|bytes->path-element|bytes->string\\/latin-1|bytes->string\\/locale|bytes->string\\/utf-8|bytes-append|bytes-close-converter|bytes-convert|bytes-convert-end|bytes-converter\\?|bytes-copy|bytes-copy!|bytes-environment-variable-name\\?|bytes-fill!|bytes-length|bytes-open-converter|bytes-ref|bytes-set!|bytes-utf-8-index|bytes-utf-8-length|bytes-utf-8-ref|bytes<\\?|bytes=\\?|bytes>\\?|bytes\\?|caaaar|caaadr|caaar|caadar|caaddr|caadr|caar|cadaar|cadadr|cadar|caddar|cadddr|caddr|cadr|call-in-nested-thread|call-with-break-parameterization|call-with-composable-continuation|call-with-continuation-barrier|call-with-continuation-prompt|call-with-current-continuation|call-with-default-reading-parameterization|call-with-escape-continuation|call-with-exception-handler|call-with-immediate-continuation-mark|call-with-parameterization|call-with-semaphore|call-with-semaphore\\/enable-break|call-with-values|call\\/cc|call\\/ec|car|cdaaar|cdaadr|cdaar|cdadar|cdaddr|cdadr|cdar|cddaar|cddadr|cddar|cdddar|cddddr|cdddr|cddr|cdr|ceiling|channel-get|channel-put|channel-put-evt|channel-put-evt\\?|channel-try-get|channel\\?|chaperone-box|chaperone-channel|chaperone-continuation-mark-key|chaperone-evt|chaperone-hash|chaperone-of\\?|chaperone-procedure|chaperone-procedure\\*|chaperone-prompt-tag|chaperone-struct|chaperone-struct-type|chaperone-vector|chaperone-vector\\*|chaperone\\?|char->integer|char-alphabetic\\?|char-blank\\?|char-ci<=\\?|char-ci<\\?|char-ci=\\?|char-ci>=\\?|char-ci>\\?|char-downcase|char-foldcase|char-general-category|char-graphic\\?|char-iso-control\\?|char-lower-case\\?|char-numeric\\?|char-punctuation\\?|char-ready\\?|char-symbolic\\?|char-title-case\\?|char-titlecase|char-upcase|char-upper-case\\?|char-utf-8-length|char-whitespace\\?|char<=\\?|char<\\?|char=\\?|char>=\\?|char>\\?|char\\?|check-duplicate-identifier|check-tail-contract|checked-procedure-check-and-extract|choice-evt|cleanse-path|close-input-port|close-output-port|collect-garbage|collection-file-path|collection-path|compile|compile-allow-set!-undefined|compile-context-preservation-enabled|compile-enforce-module-constants|compile-syntax|compiled-expression-recompile|compiled-expression\\?|compiled-module-expression\\?|complete-path\\?|complex\\?|compose|compose1|cons|continuation-mark-key\\?|continuation-mark-set->context|continuation-mark-set->list|continuation-mark-set->list\\*|continuation-mark-set-first|continuation-mark-set\\?|continuation-marks|continuation-prompt-available\\?|continuation-prompt-tag\\?|continuation\\?|copy-file|cos|current-break-parameterization|current-code-inspector|current-command-line-arguments|current-compile|current-compiled-file-roots|current-continuation-marks|current-custodian|current-directory|current-directory-for-user|current-drive|current-environment-variables|current-error-port|current-eval|current-evt-pseudo-random-generator|current-force-delete-permissions|current-gc-milliseconds|current-get-interaction-input-port|current-inexact-milliseconds|current-input-port|current-inspector|current-library-collection-links|current-library-collection-paths|current-load|current-load-extension|current-load-relative-directory|current-load\\/use-compiled|current-locale|current-logger|current-memory-use|current-milliseconds|current-module-declare-name|current-module-declare-source|current-module-name-resolver|current-module-path-for-load|current-namespace|current-output-port|current-parameterization|current-plumber|current-preserved-thread-cell-values|current-print|current-process-milliseconds|current-prompt-read|current-pseudo-random-generator|current-read-interaction|current-reader-guard|current-readtable|current-seconds|current-security-guard|current-subprocess-custodian-mode|current-thread|current-thread-group|current-thread-initial-stack-size|current-write-relative-directory|custodian-box-value|custodian-box\\?|custodian-limit-memory|custodian-managed-list|custodian-memory-accounting-available\\?|custodian-require-memory|custodian-shut-down\\?|custodian-shutdown-all|custodian\\?|custom-print-quotable-accessor|custom-print-quotable\\?|custom-write-accessor|custom-write\\?|date\\*-nanosecond|date\\*-time-zone-name|date\\*\\?|date-day|date-dst\\?|date-hour|date-minute|date-month|date-second|date-time-zone-offset|date-week-day|date-year|date-year-day|date\\?|datum->syntax|datum-intern-literal|default-continuation-prompt-tag|delete-directory|delete-file|denominator|directory-exists\\?|directory-list|display|displayln|double-flonum\\?|dump-memory-stats|dynamic-require|dynamic-require-for-syntax|dynamic-wind|environment-variables-copy|environment-variables-names|environment-variables-ref|environment-variables-set!|environment-variables\\?|eof|eof-object\\?|ephemeron-value|ephemeron\\?|eprintf|eq-hash-code|eq\\?|equal-hash-code|equal-secondary-hash-code|equal\\?|equal\\?\\/recur|eqv-hash-code|eqv\\?|error|error-display-handler|error-escape-handler|error-print-context-length|error-print-source-location|error-print-width|error-value->string-handler|eval|eval-jit-enabled|eval-syntax|even\\?|evt\\?|exact->inexact|exact-integer\\?|exact-nonnegative-integer\\?|exact-positive-integer\\?|exact\\?|executable-yield-handler|exit|exit-handler|exn-continuation-marks|exn-message|exn:break-continuation|exn:break:hang-up\\?|exn:break:terminate\\?|exn:break\\?|exn:fail:contract:arity\\?|exn:fail:contract:continuation\\?|exn:fail:contract:divide-by-zero\\?|exn:fail:contract:non-fixnum-result\\?|exn:fail:contract:variable-id|exn:fail:contract:variable\\?|exn:fail:contract\\?|exn:fail:filesystem:errno-errno|exn:fail:filesystem:errno\\?|exn:fail:filesystem:exists\\?|exn:fail:filesystem:missing-module-path|exn:fail:filesystem:missing-module\\?|exn:fail:filesystem:version\\?|exn:fail:filesystem\\?|exn:fail:network:errno-errno|exn:fail:network:errno\\?|exn:fail:network\\?|exn:fail:out-of-memory\\?|exn:fail:read-srclocs|exn:fail:read:eof\\?|exn:fail:read:non-char\\?|exn:fail:read\\?|exn:fail:syntax-exprs|exn:fail:syntax:missing-module-path|exn:fail:syntax:missing-module\\?|exn:fail:syntax:unbound\\?|exn:fail:syntax\\?|exn:fail:unsupported\\?|exn:fail:user\\?|exn:fail\\?|exn:missing-module-accessor|exn:missing-module\\?|exn:srclocs-accessor|exn:srclocs\\?|exn\\?|exp|expand|expand-for-clause|expand-once|expand-syntax|expand-syntax-once|expand-syntax-to-top-form|expand-to-top-form|expand-user-path|explode-path|expt|file-exists\\?|file-or-directory-identity|file-or-directory-modify-seconds|file-or-directory-permissions|file-position|file-position\\*|file-size|file-stream-buffer-mode|file-stream-port\\?|file-truncate|filesystem-change-evt|filesystem-change-evt-cancel|filesystem-change-evt\\?|filesystem-root-list|filter|find-executable-path|find-library-collection-links|find-library-collection-paths|find-system-path|findf|fixnum\\?|floating-point-bytes->real|flonum\\?|floor|flush-output|foldl|foldr|for-clause-syntax-protect|for-each|format|fprintf|free-identifier=\\?|free-label-identifier=\\?|free-template-identifier=\\?|free-transformer-identifier=\\?|gcd|generate-temporaries|gensym|get-output-bytes|get-output-string|getenv|global-port-print-handler|guard-evt|handle-evt|handle-evt\\?|hash|hash->list|hash-clear|hash-clear!|hash-copy|hash-copy-clear|hash-count|hash-empty\\?|hash-eq\\?|hash-equal\\?|hash-eqv\\?|hash-for-each|hash-has-key\\?|hash-iterate-first|hash-iterate-key|hash-iterate-key\\+value|hash-iterate-next|hash-iterate-pair|hash-iterate-value|hash-keys|hash-keys-subset\\?|hash-map|hash-placeholder\\?|hash-ref|hash-ref!|hash-remove|hash-remove!|hash-set|hash-set!|hash-set\\*|hash-set\\*!|hash-update|hash-update!|hash-values|hash-weak\\?|hash\\?|hasheq|hasheqv|identifier-binding|identifier-binding-symbol|identifier-label-binding|identifier-prune-lexical-context|identifier-prune-to-source-module|identifier-remove-from-definition-context|identifier-template-binding|identifier-transformer-binding|identifier\\?|imag-part|immutable\\?|impersonate-box|impersonate-channel|impersonate-continuation-mark-key|impersonate-hash|impersonate-procedure|impersonate-procedure\\*|impersonate-prompt-tag|impersonate-struct|impersonate-vector|impersonate-vector\\*|impersonator-ephemeron|impersonator-of\\?|impersonator-prop:application-mark|impersonator-property-accessor-procedure\\?|impersonator-property\\?|impersonator\\?|in-cycle|in-parallel|in-sequences|in-values\\*-sequence|in-values-sequence|inexact->exact|inexact-real\\?|inexact\\?|input-port\\?|inspector-superior\\?|inspector\\?|integer->char|integer->integer-bytes|integer-bytes->integer|integer-length|integer-sqrt|integer-sqrt\\/remainder|integer\\?|internal-definition-context-binding-identifiers|internal-definition-context-introduce|internal-definition-context-seal|internal-definition-context\\?|keyword->string|keyword-apply|keyword<\\?|keyword\\?|kill-thread|lcm|legacy-match-expander\\?|length|liberal-define-context\\?|link-exists\\?|list|list\\*|list->bytes|list->string|list->vector|list-ref|list-tail|list\\?|load|load-extension|load-on-demand-enabled|load-relative|load-relative-extension|load\\/cd|load\\/use-compiled|local-expand|local-expand\\/capture-lifts|local-transformer-expand|local-transformer-expand\\/capture-lifts|locale-string-encoding|log|log-all-levels|log-level-evt|log-level\\?|log-max-level|log-message|log-receiver\\?|logger-name|logger\\?|magnitude|make-arity-at-least|make-base-empty-namespace|make-base-namespace|make-bytes|make-channel|make-continuation-mark-key|make-continuation-prompt-tag|make-custodian|make-custodian-box|make-date|make-date\\*|make-derived-parameter|make-directory|make-do-sequence|make-empty-namespace|make-environment-variables|make-ephemeron|make-exn|make-exn:break|make-exn:break:hang-up|make-exn:break:terminate|make-exn:fail|make-exn:fail:contract|make-exn:fail:contract:arity|make-exn:fail:contract:continuation|make-exn:fail:contract:divide-by-zero|make-exn:fail:contract:non-fixnum-result|make-exn:fail:contract:variable|make-exn:fail:filesystem|make-exn:fail:filesystem:errno|make-exn:fail:filesystem:exists|make-exn:fail:filesystem:missing-module|make-exn:fail:filesystem:version|make-exn:fail:network|make-exn:fail:network:errno|make-exn:fail:out-of-memory|make-exn:fail:read|make-exn:fail:read:eof|make-exn:fail:read:non-char|make-exn:fail:syntax|make-exn:fail:syntax:missing-module|make-exn:fail:syntax:unbound|make-exn:fail:unsupported|make-exn:fail:user|make-file-or-directory-link|make-hash|make-hash-placeholder|make-hasheq|make-hasheq-placeholder|make-hasheqv|make-hasheqv-placeholder|make-immutable-hash|make-immutable-hasheq|make-immutable-hasheqv|make-impersonator-property|make-input-port|make-inspector|make-keyword-procedure|make-known-char-range-list|make-log-receiver|make-logger|make-output-port|make-parameter|make-phantom-bytes|make-pipe|make-placeholder|make-plumber|make-polar|make-prefab-struct|make-pseudo-random-generator|make-reader-graph|make-readtable|make-rectangular|make-rename-transformer|make-resolved-module-path|make-security-guard|make-semaphore|make-set!-transformer|make-shared-bytes|make-sibling-inspector|make-special-comment|make-srcloc|make-string|make-struct-field-accessor|make-struct-field-mutator|make-struct-type|make-struct-type-property|make-syntax-delta-introducer|make-syntax-introducer|make-thread-cell|make-thread-group|make-vector|make-weak-box|make-weak-hash|make-weak-hasheq|make-weak-hasheqv|make-will-executor|map|match-\\.\\.\\.-nesting|match-expander\\?|max|mcar|mcdr|mcons|member|memf|memq|memv|min|module->exports|module->imports|module->indirect-exports|module->language-info|module->namespace|module-compiled-cross-phase-persistent\\?|module-compiled-exports|module-compiled-imports|module-compiled-indirect-exports|module-compiled-language-info|module-compiled-name|module-compiled-submodules|module-declared\\?|module-path-index-join|module-path-index-resolve|module-path-index-split|module-path-index-submodule|module-path-index\\?|module-path\\?|module-predefined\\?|module-provide-protected\\?|modulo|mpair\\?|nack-guard-evt|namespace-anchor->empty-namespace|namespace-anchor->namespace|namespace-anchor\\?|namespace-attach-module|namespace-attach-module-declaration|namespace-base-phase|namespace-mapped-symbols|namespace-module-identifier|namespace-module-registry|namespace-require|namespace-require\\/constant|namespace-require\\/copy|namespace-require\\/expansion-time|namespace-set-variable-value!|namespace-symbol->identifier|namespace-syntax-introduce|namespace-undefine-variable!|namespace-unprotect-module|namespace-variable-value|namespace\\?|negative\\?|never-evt|newline|normal-case-path|not|null|null\\?|number->string|number\\?|numerator|object-name|odd\\?|open-input-bytes|open-input-string|open-output-bytes|open-output-string|ormap|output-port\\?|pair\\?|parameter-procedure=\\?|parameter\\?|parameterization\\?|parse-leftover->\\*|path->bytes|path->complete-path|path->directory-path|path->string|path-add-extension|path-add-suffix|path-convention-type|path-element->bytes|path-element->string|path-for-some-system\\?|path-list-string->path-list|path-replace-extension|path-replace-suffix|path-string\\?|path<\\?|path\\?|peek-byte|peek-byte-or-special|peek-bytes|peek-bytes!|peek-bytes-avail!|peek-bytes-avail!\\*|peek-bytes-avail!\\/enable-break|peek-char|peek-char-or-special|peek-string|peek-string!|phantom-bytes\\?|pipe-content-length|placeholder-get|placeholder-set!|placeholder\\?|plumber-add-flush!|plumber-flush-all|plumber-flush-handle-remove!|plumber-flush-handle\\?|plumber\\?|poll-guard-evt|port-closed-evt|port-closed\\?|port-commit-peeked|port-count-lines!|port-count-lines-enabled|port-counts-lines\\?|port-display-handler|port-file-identity|port-file-unlock|port-next-location|port-print-handler|port-progress-evt|port-provides-progress-evts\\?|port-read-handler|port-try-file-lock\\?|port-write-handler|port-writes-atomic\\?|port-writes-special\\?|port\\?|positive\\?|prefab-key->struct-type|prefab-key\\?|prefab-struct-key|pregexp|pregexp\\?|primitive-closure\\?|primitive-result-arity|primitive\\?|print|print-as-expression|print-boolean-long-form|print-box|print-graph|print-hash-table|print-mpair-curly-braces|print-pair-curly-braces|print-reader-abbreviations|print-struct|print-syntax-width|print-unreadable|print-vector-length|printf|println|procedure->method|procedure-arity|procedure-arity-includes\\?|procedure-arity\\?|procedure-closure-contents-eq\\?|procedure-extract-target|procedure-impersonator\\*\\?|procedure-keywords|procedure-reduce-arity|procedure-reduce-keyword-arity|procedure-rename|procedure-result-arity|procedure-specialize|procedure-struct-type\\?|procedure\\?|progress-evt\\?|prop:arity-string|prop:authentic|prop:checked-procedure|prop:custom-print-quotable|prop:custom-write|prop:equal\\+hash|prop:evt|prop:exn:missing-module|prop:exn:srclocs|prop:expansion-contexts|prop:impersonator-of|prop:input-port|prop:legacy-match-expander|prop:liberal-define-context|prop:match-expander|prop:object-name|prop:output-port|prop:procedure|prop:rename-transformer|prop:sequence|prop:set!-transformer|pseudo-random-generator->vector|pseudo-random-generator-vector\\?|pseudo-random-generator\\?|putenv|quotient|quotient\\/remainder|raise|raise-argument-error|raise-arguments-error|raise-arity-error|raise-mismatch-error|raise-range-error|raise-result-error|raise-syntax-error|raise-type-error|raise-user-error|random|random-seed|rational\\?|rationalize|read|read-accept-bar-quote|read-accept-box|read-accept-compiled|read-accept-dot|read-accept-graph|read-accept-infix-dot|read-accept-lang|read-accept-quasiquote|read-accept-reader|read-byte|read-byte-or-special|read-bytes|read-bytes!|read-bytes-avail!|read-bytes-avail!\\*|read-bytes-avail!\\/enable-break|read-bytes-line|read-case-sensitive|read-cdot|read-char|read-char-or-special|read-curly-brace-as-paren|read-curly-brace-with-tag|read-decimal-as-inexact|read-eval-print-loop|read-language|read-line|read-on-demand-source|read-square-bracket-as-paren|read-square-bracket-with-tag|read-string|read-string!|read-syntax|read-syntax\\/recursive|read\\/recursive|readtable-mapping|readtable\\?|real->decimal-string|real->double-flonum|real->floating-point-bytes|real->single-flonum|real-part|real\\?|regexp|regexp-match|regexp-match-exact\\?|regexp-match-peek|regexp-match-peek-immediate|regexp-match-peek-positions|regexp-match-peek-positions-immediate|regexp-match-peek-positions-immediate\\/end|regexp-match-peek-positions\\/end|regexp-match-positions|regexp-match-positions\\/end|regexp-match\\/end|regexp-match\\?|regexp-max-lookbehind|regexp-quote|regexp-replace|regexp-replace\\*|regexp-replace-quote|regexp-replaces|regexp-split|regexp-try-match|regexp\\?|relative-path\\?|remainder|remove|remove\\*|remq|remq\\*|remv|remv\\*|rename-file-or-directory|rename-transformer-target|rename-transformer\\?|replace-evt|reroot-path|resolve-path|resolved-module-path-name|resolved-module-path\\?|reverse|round|seconds->date|security-guard\\?|semaphore-peek-evt|semaphore-peek-evt\\?|semaphore-post|semaphore-try-wait\\?|semaphore-wait|semaphore-wait\\/enable-break|semaphore\\?|sequence->stream|sequence-generate|sequence-generate\\*|sequence\\?|set!-transformer-procedure|set!-transformer\\?|set-box!|set-mcar!|set-mcdr!|set-phantom-bytes!|set-port-next-location!|shared-bytes|shell-execute|simplify-path|sin|single-flonum\\?|sleep|special-comment-value|special-comment\\?|split-path|sqrt|srcloc->string|srcloc-column|srcloc-line|srcloc-position|srcloc-source|srcloc-span|srcloc\\?|stop-after|stop-before|string|string->bytes\\/latin-1|string->bytes\\/locale|string->bytes\\/utf-8|string->immutable-string|string->keyword|string->list|string->number|string->path|string->path-element|string->symbol|string->uninterned-symbol|string->unreadable-symbol|string-append|string-ci<=\\?|string-ci<\\?|string-ci=\\?|string-ci>=\\?|string-ci>\\?|string-copy|string-copy!|string-downcase|string-environment-variable-name\\?|string-fill!|string-foldcase|string-length|string-locale-ci<\\?|string-locale-ci=\\?|string-locale-ci>\\?|string-locale-downcase|string-locale-upcase|string-locale<\\?|string-locale=\\?|string-locale>\\?|string-normalize-nfc|string-normalize-nfd|string-normalize-nfkc|string-normalize-nfkd|string-port\\?|string-ref|string-set!|string-titlecase|string-upcase|string-utf-8-length|string<=\\?|string<\\?|string=\\?|string>=\\?|string>\\?|string\\?|struct->vector|struct-accessor-procedure\\?|struct-constructor-procedure\\?|struct-info|struct-mutator-procedure\\?|struct-predicate-procedure\\?|struct-type-info|struct-type-make-constructor|struct-type-make-predicate|struct-type-property-accessor-procedure\\?|struct-type-property\\?|struct-type\\?|struct:arity-at-least|struct:date|struct:date\\*|struct:exn|struct:exn:break|struct:exn:break:hang-up|struct:exn:break:terminate|struct:exn:fail|struct:exn:fail:contract|struct:exn:fail:contract:arity|struct:exn:fail:contract:continuation|struct:exn:fail:contract:divide-by-zero|struct:exn:fail:contract:non-fixnum-result|struct:exn:fail:contract:variable|struct:exn:fail:filesystem|struct:exn:fail:filesystem:errno|struct:exn:fail:filesystem:exists|struct:exn:fail:filesystem:missing-module|struct:exn:fail:filesystem:version|struct:exn:fail:network|struct:exn:fail:network:errno|struct:exn:fail:out-of-memory|struct:exn:fail:read|struct:exn:fail:read:eof|struct:exn:fail:read:non-char|struct:exn:fail:syntax|struct:exn:fail:syntax:missing-module|struct:exn:fail:syntax:unbound|struct:exn:fail:unsupported|struct:exn:fail:user|struct:srcloc|struct\\?|sub1|subbytes|subprocess|subprocess-group-enabled|subprocess-kill|subprocess-pid|subprocess-status|subprocess-wait|subprocess\\?|substring|symbol->string|symbol-interned\\?|symbol-unreadable\\?|symbol<\\?|symbol\\?|sync|sync\\/enable-break|sync\\/timeout|sync\\/timeout\\/enable-break|syntax->datum|syntax->list|syntax-arm|syntax-column|syntax-debug-info|syntax-disarm|syntax-e|syntax-line|syntax-local-bind-syntaxes|syntax-local-certifier|syntax-local-context|syntax-local-expand-expression|syntax-local-get-shadower|syntax-local-identifier-as-binding|syntax-local-introduce|syntax-local-lift-context|syntax-local-lift-expression|syntax-local-lift-module|syntax-local-lift-module-end-declaration|syntax-local-lift-provide|syntax-local-lift-require|syntax-local-lift-values-expression|syntax-local-make-definition-context|syntax-local-make-delta-introducer|syntax-local-match-introduce|syntax-local-module-defined-identifiers|syntax-local-module-exports|syntax-local-module-required-identifiers|syntax-local-name|syntax-local-phase-level|syntax-local-submodules|syntax-local-transforming-module-provides\\?|syntax-local-value|syntax-local-value\\/immediate|syntax-original\\?|syntax-pattern-variable\\?|syntax-position|syntax-property|syntax-property-preserved\\?|syntax-property-symbol-keys|syntax-protect|syntax-rearm|syntax-recertify|syntax-shift-phase-level|syntax-source|syntax-source-module|syntax-span|syntax-taint|syntax-tainted\\?|syntax-track-origin|syntax-transforming-module-expression\\?|syntax-transforming-with-lifts\\?|syntax-transforming\\?|syntax\\?|system-big-endian\\?|system-idle-evt|system-language\\+country|system-library-subpath|system-path-convention-type|system-type|tan|terminal-port\\?|thread|thread-cell-ref|thread-cell-set!|thread-cell-values\\?|thread-cell\\?|thread-dead-evt|thread-dead\\?|thread-group\\?|thread-receive|thread-receive-evt|thread-resume|thread-resume-evt|thread-rewind-receive|thread-running\\?|thread-send|thread-suspend|thread-suspend-evt|thread-try-receive|thread-wait|thread\\/suspend-to-kill|thread\\?|time-apply|truncate|unbox|uncaught-exception-handler|unquoted-printing-string|unquoted-printing-string-value|unquoted-printing-string\\?|use-collection-link-paths|use-compiled-file-check|use-compiled-file-paths|use-user-specific-search-paths|values|variable-reference->empty-namespace|variable-reference->module-base-phase|variable-reference->module-declaration-inspector|variable-reference->module-path-index|variable-reference->module-source|variable-reference->namespace|variable-reference->phase|variable-reference->resolved-module-path|variable-reference-constant\\?|variable-reference\\?|vector|vector->immutable-vector|vector->list|vector->pseudo-random-generator|vector->pseudo-random-generator!|vector->values|vector-cas!|vector-copy!|vector-fill!|vector-immutable|vector-length|vector-ref|vector-set!|vector-set-performance-stats!|vector\\?|version|void|void\\?|weak-box-value|weak-box\\?|will-execute|will-executor\\?|will-register|will-try-execute|wrap-evt|write|write-byte|write-bytes|write-bytes-avail|write-bytes-avail\\*|write-bytes-avail-evt|write-bytes-avail\\/enable-break|write-char|write-special|write-special-avail\\*|write-special-evt|write-string|writeln|zero\\?|\\*|\\*list\\/c|\\+|-|\\/|<|<\\/c|<=|=|>|>\\/c|>=|abort-current-continuation|abs|absolute-path\\?|acos|add1|alarm-evt|always-evt|andmap|angle|append|append\\*|append-map|argmax|argmin|arithmetic-shift|arity-at-least-value|arity-at-least\\?|arity-checking-wrapper|arity-includes\\?|arity=\\?|arrow-contract-info-accepts-arglist|arrow-contract-info-chaperone-procedure|arrow-contract-info-check-first-order|arrow-contract-info\\?|asin|assf|assoc|assq|assv|atan|banner|base->-doms\\/c|base->-rngs\\/c|base->\\?|bitwise-and|bitwise-bit-field|bitwise-bit-set\\?|bitwise-ior|bitwise-not|bitwise-xor|blame-add-car-context|blame-add-cdr-context|blame-add-missing-party|blame-add-nth-arg-context|blame-add-range-context|blame-add-unknown-context|blame-context|blame-contract|blame-fmt->-string|blame-missing-party\\?|blame-negative|blame-original\\?|blame-positive|blame-replace-negative|blame-source|blame-swap|blame-swapped\\?|blame-update|blame-value|blame\\?|boolean=\\?|boolean\\?|bound-identifier=\\?|box|box-cas!|box-immutable|box\\?|break-enabled|break-parameterization\\?|break-thread|build-chaperone-contract-property|build-compound-type-name|build-contract-property|build-flat-contract-property|build-list|build-path|build-path\\/convention-type|build-string|build-vector|byte-pregexp|byte-pregexp\\?|byte-ready\\?|byte-regexp|byte-regexp\\?|byte\\?|bytes|bytes->immutable-bytes|bytes->list|bytes->path|bytes->path-element|bytes->string\\/latin-1|bytes->string\\/locale|bytes->string\\/utf-8|bytes-append|bytes-append\\*|bytes-close-converter|bytes-convert|bytes-convert-end|bytes-converter\\?|bytes-copy|bytes-copy!|bytes-environment-variable-name\\?|bytes-fill!|bytes-join|bytes-length|bytes-no-nuls\\?|bytes-open-converter|bytes-ref|bytes-set!|bytes-utf-8-index|bytes-utf-8-length|bytes-utf-8-ref|bytes<\\?|bytes=\\?|bytes>\\?|bytes\\?|caaaar|caaadr|caaar|caadar|caaddr|caadr|caar|cadaar|cadadr|cadar|caddar|cadddr|caddr|cadr|call-in-nested-thread|call-with-break-parameterization|call-with-composable-continuation|call-with-continuation-barrier|call-with-continuation-prompt|call-with-current-continuation|call-with-default-reading-parameterization|call-with-escape-continuation|call-with-exception-handler|call-with-immediate-continuation-mark|call-with-input-bytes|call-with-input-string|call-with-output-bytes|call-with-output-string|call-with-parameterization|call-with-semaphore|call-with-semaphore\\/enable-break|call-with-values|call\\/cc|call\\/ec|car|cartesian-product|cdaaar|cdaadr|cdaar|cdadar|cdaddr|cdadr|cdar|cddaar|cddadr|cddar|cdddar|cddddr|cdddr|cddr|cdr|ceiling|channel-get|channel-put|channel-put-evt|channel-put-evt\\?|channel-try-get|channel\\?|chaperone-box|chaperone-channel|chaperone-continuation-mark-key|chaperone-contract-property\\?|chaperone-contract\\?|chaperone-evt|chaperone-hash|chaperone-hash-set|chaperone-of\\?|chaperone-procedure|chaperone-procedure\\*|chaperone-prompt-tag|chaperone-struct|chaperone-struct-type|chaperone-vector|chaperone-vector\\*|chaperone\\?|char->integer|char-alphabetic\\?|char-blank\\?|char-ci<=\\?|char-ci<\\?|char-ci=\\?|char-ci>=\\?|char-ci>\\?|char-downcase|char-foldcase|char-general-category|char-graphic\\?|char-in|char-iso-control\\?|char-lower-case\\?|char-numeric\\?|char-punctuation\\?|char-ready\\?|char-symbolic\\?|char-title-case\\?|char-titlecase|char-upcase|char-upper-case\\?|char-utf-8-length|char-whitespace\\?|char<=\\?|char<\\?|char=\\?|char>=\\?|char>\\?|char\\?|check-duplicate-identifier|checked-procedure-check-and-extract|choice-evt|class->interface|class-info|class-seal|class-unseal|class\\?|cleanse-path|close-input-port|close-output-port|coerce-chaperone-contract|coerce-chaperone-contracts|coerce-contract|coerce-contract\\/f|coerce-contracts|coerce-flat-contract|coerce-flat-contracts|collect-garbage|collection-file-path|collection-path|combinations|compile|compile-allow-set!-undefined|compile-context-preservation-enabled|compile-enforce-module-constants|compile-syntax|compiled-expression-recompile|compiled-expression\\?|compiled-module-expression\\?|complete-path\\?|complex\\?|compose|compose1|conjoin|conjugate|cons|cons\\?|const|continuation-mark-key\\?|continuation-mark-set->context|continuation-mark-set->list|continuation-mark-set->list\\*|continuation-mark-set-first|continuation-mark-set\\?|continuation-marks|continuation-prompt-available\\?|continuation-prompt-tag\\?|continuation\\?|contract-continuation-mark-key|contract-custom-write-property-proc|contract-first-order|contract-first-order-passes\\?|contract-late-neg-projection|contract-name|contract-proc|contract-projection|contract-property\\?|contract-random-generate|contract-random-generate-fail|contract-random-generate-fail\\?|contract-random-generate-get-current-environment|contract-random-generate-stash|contract-random-generate\\/choose|contract-stronger\\?|contract-struct-exercise|contract-struct-generate|contract-struct-late-neg-projection|contract-struct-list-contract\\?|contract-val-first-projection|contract\\?|convert-stream|copy-file|copy-port|cos|cosh|count|current-blame-format|current-break-parameterization|current-code-inspector|current-command-line-arguments|current-compile|current-compiled-file-roots|current-continuation-marks|current-custodian|current-directory|current-directory-for-user|current-drive|current-environment-variables|current-error-port|current-eval|current-evt-pseudo-random-generator|current-force-delete-permissions|current-future|current-gc-milliseconds|current-get-interaction-input-port|current-inexact-milliseconds|current-input-port|current-inspector|current-library-collection-links|current-library-collection-paths|current-load|current-load-extension|current-load-relative-directory|current-load\\/use-compiled|current-locale|current-logger|current-memory-use|current-milliseconds|current-module-declare-name|current-module-declare-source|current-module-name-resolver|current-module-path-for-load|current-namespace|current-output-port|current-parameterization|current-plumber|current-preserved-thread-cell-values|current-print|current-process-milliseconds|current-prompt-read|current-pseudo-random-generator|current-read-interaction|current-reader-guard|current-readtable|current-seconds|current-security-guard|current-subprocess-custodian-mode|current-thread|current-thread-group|current-thread-initial-stack-size|current-write-relative-directory|curry|curryr|custodian-box-value|custodian-box\\?|custodian-limit-memory|custodian-managed-list|custodian-memory-accounting-available\\?|custodian-require-memory|custodian-shut-down\\?|custodian-shutdown-all|custodian\\?|custom-print-quotable-accessor|custom-print-quotable\\?|custom-write-accessor|custom-write-property-proc|custom-write\\?|date\\*-nanosecond|date\\*-time-zone-name|date\\*\\?|date-day|date-dst\\?|date-hour|date-minute|date-month|date-second|date-time-zone-offset|date-week-day|date-year|date-year-day|date\\?|datum->syntax|datum-intern-literal|default-continuation-prompt-tag|degrees->radians|delete-directory|delete-file|denominator|dict-iter-contract|dict-key-contract|dict-value-contract|directory-exists\\?|directory-list|disjoin|display|displayln|double-flonum\\?|drop|drop-common-prefix|drop-right|dropf|dropf-right|dump-memory-stats|dup-input-port|dup-output-port|dynamic-get-field|dynamic-object\\/c|dynamic-require|dynamic-require-for-syntax|dynamic-send|dynamic-set-field!|dynamic-wind|eighth|empty|empty-sequence|empty-stream|empty\\?|environment-variables-copy|environment-variables-names|environment-variables-ref|environment-variables-set!|environment-variables\\?|eof|eof-object\\?|ephemeron-value|ephemeron\\?|eprintf|eq-contract-val|eq-contract\\?|eq-hash-code|eq\\?|equal-contract-val|equal-contract\\?|equal-hash-code|equal-secondary-hash-code|equal<%>|equal\\?|equal\\?\\/recur|eqv-hash-code|eqv\\?|error|error-display-handler|error-escape-handler|error-print-context-length|error-print-source-location|error-print-width|error-value->string-handler|eval|eval-jit-enabled|eval-syntax|even\\?|evt\\/c|evt\\?|exact->inexact|exact-ceiling|exact-floor|exact-integer\\?|exact-nonnegative-integer\\?|exact-positive-integer\\?|exact-round|exact-truncate|exact\\?|executable-yield-handler|exit|exit-handler|exn-continuation-marks|exn-message|exn:break-continuation|exn:break:hang-up\\?|exn:break:terminate\\?|exn:break\\?|exn:fail:contract:arity\\?|exn:fail:contract:blame-object|exn:fail:contract:blame\\?|exn:fail:contract:continuation\\?|exn:fail:contract:divide-by-zero\\?|exn:fail:contract:non-fixnum-result\\?|exn:fail:contract:variable-id|exn:fail:contract:variable\\?|exn:fail:contract\\?|exn:fail:filesystem:errno-errno|exn:fail:filesystem:errno\\?|exn:fail:filesystem:exists\\?|exn:fail:filesystem:missing-module-path|exn:fail:filesystem:missing-module\\?|exn:fail:filesystem:version\\?|exn:fail:filesystem\\?|exn:fail:network:errno-errno|exn:fail:network:errno\\?|exn:fail:network\\?|exn:fail:object\\?|exn:fail:out-of-memory\\?|exn:fail:read-srclocs|exn:fail:read:eof\\?|exn:fail:read:non-char\\?|exn:fail:read\\?|exn:fail:syntax-exprs|exn:fail:syntax:missing-module-path|exn:fail:syntax:missing-module\\?|exn:fail:syntax:unbound\\?|exn:fail:syntax\\?|exn:fail:unsupported\\?|exn:fail:user\\?|exn:fail\\?|exn:misc:match\\?|exn:missing-module-accessor|exn:missing-module\\?|exn:srclocs-accessor|exn:srclocs\\?|exn\\?|exp|expand|expand-once|expand-syntax|expand-syntax-once|expand-syntax-to-top-form|expand-to-top-form|expand-user-path|explode-path|expt|externalizable<%>|failure-result\\/c|false|false\\/c|false\\?|field-names|fifth|file-exists\\?|file-name-from-path|file-or-directory-identity|file-or-directory-modify-seconds|file-or-directory-permissions|file-position|file-position\\*|file-size|file-stream-buffer-mode|file-stream-port\\?|file-truncate|filename-extension|filesystem-change-evt|filesystem-change-evt-cancel|filesystem-change-evt\\?|filesystem-root-list|filter|filter-map|filter-not|filter-read-input-port|find-executable-path|find-library-collection-links|find-library-collection-paths|find-system-path|findf|first|fixnum\\?|flat-contract|flat-contract-predicate|flat-contract-property\\?|flat-contract\\?|flat-named-contract|flatten|floating-point-bytes->real|flonum\\?|floor|flush-output|fold-files|foldl|foldr|for-each|force|format|fourth|fprintf|free-identifier=\\?|free-label-identifier=\\?|free-template-identifier=\\?|free-transformer-identifier=\\?|fsemaphore-count|fsemaphore-post|fsemaphore-try-wait\\?|fsemaphore-wait|fsemaphore\\?|future|future\\?|futures-enabled\\?|gcd|generate-member-key|generate-temporaries|generic-set\\?|generic\\?|gensym|get-output-bytes|get-output-string|get\\/build-late-neg-projection|get\\/build-val-first-projection|getenv|global-port-print-handler|group-by|group-execute-bit|group-read-bit|group-write-bit|guard-evt|handle-evt|handle-evt\\?|has-blame\\?|has-contract\\?|hash|hash->list|hash-clear|hash-clear!|hash-copy|hash-copy-clear|hash-count|hash-empty\\?|hash-eq\\?|hash-equal\\?|hash-eqv\\?|hash-for-each|hash-has-key\\?|hash-iterate-first|hash-iterate-key|hash-iterate-key\\+value|hash-iterate-next|hash-iterate-pair|hash-iterate-value|hash-keys|hash-keys-subset\\?|hash-map|hash-placeholder\\?|hash-ref|hash-ref!|hash-remove|hash-remove!|hash-set|hash-set!|hash-set\\*|hash-set\\*!|hash-update|hash-update!|hash-values|hash-weak\\?|hash\\?|hasheq|hasheqv|identifier-binding|identifier-binding-symbol|identifier-label-binding|identifier-prune-lexical-context|identifier-prune-to-source-module|identifier-remove-from-definition-context|identifier-template-binding|identifier-transformer-binding|identifier\\?|identity|if\\/c|imag-part|immutable\\?|impersonate-box|impersonate-channel|impersonate-continuation-mark-key|impersonate-hash|impersonate-hash-set|impersonate-procedure|impersonate-procedure\\*|impersonate-prompt-tag|impersonate-struct|impersonate-vector|impersonate-vector\\*|impersonator-contract\\?|impersonator-ephemeron|impersonator-of\\?|impersonator-prop:application-mark|impersonator-prop:blame|impersonator-prop:contracted|impersonator-property-accessor-procedure\\?|impersonator-property\\?|impersonator\\?|implementation\\?|implementation\\?\\/c|in-combinations|in-cycle|in-dict-pairs|in-parallel|in-permutations|in-sequences|in-values\\*-sequence|in-values-sequence|index-of|index-where|indexes-of|indexes-where|inexact->exact|inexact-real\\?|inexact\\?|infinite\\?|input-port-append|input-port\\?|inspector-superior\\?|inspector\\?|instanceof\\/c|integer->char|integer->integer-bytes|integer-bytes->integer|integer-length|integer-sqrt|integer-sqrt\\/remainder|integer\\?|interface->method-names|interface-extension\\?|interface\\?|internal-definition-context-binding-identifiers|internal-definition-context-introduce|internal-definition-context-seal|internal-definition-context\\?|is-a\\?|is-a\\?\\/c|keyword->string|keyword-apply|keyword<\\?|keyword\\?|keywords-match|kill-thread|last|last-pair|lcm|length|liberal-define-context\\?|link-exists\\?|list|list\\*|list->bytes|list->mutable-set|list->mutable-seteq|list->mutable-seteqv|list->set|list->seteq|list->seteqv|list->string|list->vector|list->weak-set|list->weak-seteq|list->weak-seteqv|list-contract\\?|list-prefix\\?|list-ref|list-set|list-tail|list-update|list\\?|listen-port-number\\?|load|load-extension|load-on-demand-enabled|load-relative|load-relative-extension|load\\/cd|load\\/use-compiled|local-expand|local-expand\\/capture-lifts|local-transformer-expand|local-transformer-expand\\/capture-lifts|locale-string-encoding|log|log-all-levels|log-level-evt|log-level\\?|log-max-level|log-message|log-receiver\\?|logger-name|logger\\?|magnitude|make-arity-at-least|make-base-empty-namespace|make-base-namespace|make-bytes|make-channel|make-chaperone-contract|make-continuation-mark-key|make-continuation-prompt-tag|make-contract|make-custodian|make-custodian-box|make-date|make-date\\*|make-derived-parameter|make-directory|make-directory\\*|make-do-sequence|make-empty-namespace|make-environment-variables|make-ephemeron|make-exn|make-exn:break|make-exn:break:hang-up|make-exn:break:terminate|make-exn:fail|make-exn:fail:contract|make-exn:fail:contract:arity|make-exn:fail:contract:blame|make-exn:fail:contract:continuation|make-exn:fail:contract:divide-by-zero|make-exn:fail:contract:non-fixnum-result|make-exn:fail:contract:variable|make-exn:fail:filesystem|make-exn:fail:filesystem:errno|make-exn:fail:filesystem:exists|make-exn:fail:filesystem:missing-module|make-exn:fail:filesystem:version|make-exn:fail:network|make-exn:fail:network:errno|make-exn:fail:object|make-exn:fail:out-of-memory|make-exn:fail:read|make-exn:fail:read:eof|make-exn:fail:read:non-char|make-exn:fail:syntax|make-exn:fail:syntax:missing-module|make-exn:fail:syntax:unbound|make-exn:fail:unsupported|make-exn:fail:user|make-file-or-directory-link|make-flat-contract|make-fsemaphore|make-generic|make-hash|make-hash-placeholder|make-hasheq|make-hasheq-placeholder|make-hasheqv|make-hasheqv-placeholder|make-immutable-hash|make-immutable-hasheq|make-immutable-hasheqv|make-impersonator-property|make-input-port|make-input-port\\/read-to-peek|make-inspector|make-keyword-procedure|make-known-char-range-list|make-limited-input-port|make-list|make-lock-file-name|make-log-receiver|make-logger|make-mixin-contract|make-none\\/c|make-output-port|make-parameter|make-parent-directory\\*|make-phantom-bytes|make-pipe|make-pipe-with-specials|make-placeholder|make-plumber|make-polar|make-prefab-struct|make-primitive-class|make-proj-contract|make-pseudo-random-generator|make-reader-graph|make-readtable|make-rectangular|make-rename-transformer|make-resolved-module-path|make-security-guard|make-semaphore|make-set!-transformer|make-shared-bytes|make-sibling-inspector|make-special-comment|make-srcloc|make-string|make-struct-field-accessor|make-struct-field-mutator|make-struct-type|make-struct-type-property|make-syntax-delta-introducer|make-syntax-introducer|make-tentative-pretty-print-output-port|make-thread-cell|make-thread-group|make-vector|make-weak-box|make-weak-hash|make-weak-hasheq|make-weak-hasheqv|make-will-executor|map|match-equality-test|matches-arity-exactly\\?|max|mcar|mcdr|mcons|member|member-name-key-hash-code|member-name-key=\\?|member-name-key\\?|memf|memq|memv|merge-input|method-in-interface\\?|min|mixin-contract|module->exports|module->imports|module->indirect-exports|module->language-info|module->namespace|module-compiled-cross-phase-persistent\\?|module-compiled-exports|module-compiled-imports|module-compiled-indirect-exports|module-compiled-language-info|module-compiled-name|module-compiled-submodules|module-declared\\?|module-path-index-join|module-path-index-resolve|module-path-index-split|module-path-index-submodule|module-path-index\\?|module-path\\?|module-predefined\\?|module-provide-protected\\?|modulo|mpair\\?|mutable-set|mutable-seteq|mutable-seteqv|n->th|nack-guard-evt|namespace-anchor->empty-namespace|namespace-anchor->namespace|namespace-anchor\\?|namespace-attach-module|namespace-attach-module-declaration|namespace-base-phase|namespace-mapped-symbols|namespace-module-identifier|namespace-module-registry|namespace-require|namespace-require\\/constant|namespace-require\\/copy|namespace-require\\/expansion-time|namespace-set-variable-value!|namespace-symbol->identifier|namespace-syntax-introduce|namespace-undefine-variable!|namespace-unprotect-module|namespace-variable-value|namespace\\?|nan\\?|natural-number\\/c|natural\\?|negate|negative-integer\\?|negative\\?|never-evt|newline|ninth|non-empty-string\\?|nonnegative-integer\\?|nonpositive-integer\\?|normal-case-path|normalize-arity|normalize-path|normalized-arity\\?|not|null|null\\?|number->string|number\\?|numerator|object%|object->vector|object-info|object-interface|object-method-arity-includes\\?|object-name|object-or-false=\\?|object=\\?|object\\?|odd\\?|open-input-bytes|open-input-string|open-output-bytes|open-output-nowhere|open-output-string|order-of-magnitude|ormap|other-execute-bit|other-read-bit|other-write-bit|output-port\\?|pair\\?|parameter-procedure=\\?|parameter\\?|parameterization\\?|parse-command-line|partition|path->bytes|path->complete-path|path->directory-path|path->string|path-add-extension|path-add-suffix|path-convention-type|path-element->bytes|path-element->string|path-element\\?|path-for-some-system\\?|path-get-extension|path-has-extension\\?|path-list-string->path-list|path-only|path-replace-extension|path-replace-suffix|path-string\\?|path<\\?|path\\?|peek-byte|peek-byte-or-special|peek-bytes|peek-bytes!|peek-bytes-avail!|peek-bytes-avail!\\*|peek-bytes-avail!\\/enable-break|peek-char|peek-char-or-special|peek-string|peek-string!|permutations|phantom-bytes\\?|pi|pi\\.f|pipe-content-length|place-break|place-channel|place-channel-get|place-channel-put|place-channel-put\\/get|place-channel\\?|place-dead-evt|place-enabled\\?|place-kill|place-location\\?|place-message-allowed\\?|place-sleep|place-wait|place\\?|placeholder-get|placeholder-set!|placeholder\\?|plumber-add-flush!|plumber-flush-all|plumber-flush-handle-remove!|plumber-flush-handle\\?|plumber\\?|poll-guard-evt|port->list|port-closed-evt|port-closed\\?|port-commit-peeked|port-count-lines!|port-count-lines-enabled|port-counts-lines\\?|port-display-handler|port-file-identity|port-file-unlock|port-next-location|port-number\\?|port-print-handler|port-progress-evt|port-provides-progress-evts\\?|port-read-handler|port-try-file-lock\\?|port-write-handler|port-writes-atomic\\?|port-writes-special\\?|port\\?|positive-integer\\?|positive\\?|predicate\\/c|prefab-key->struct-type|prefab-key\\?|prefab-struct-key|preferences-lock-file-mode|pregexp|pregexp\\?|pretty-display|pretty-print|pretty-print-\\.-symbol-without-bars|pretty-print-abbreviate-read-macros|pretty-print-columns|pretty-print-current-style-table|pretty-print-depth|pretty-print-exact-as-decimal|pretty-print-extend-style-table|pretty-print-handler|pretty-print-newline|pretty-print-post-print-hook|pretty-print-pre-print-hook|pretty-print-print-hook|pretty-print-print-line|pretty-print-remap-stylable|pretty-print-show-inexactness|pretty-print-size-hook|pretty-print-style-table\\?|pretty-printing|pretty-write|primitive-closure\\?|primitive-result-arity|primitive\\?|print|print-as-expression|print-boolean-long-form|print-box|print-graph|print-hash-table|print-mpair-curly-braces|print-pair-curly-braces|print-reader-abbreviations|print-struct|print-syntax-width|print-unreadable|print-vector-length|printable\\/c|printable<%>|printf|println|procedure->method|procedure-arity|procedure-arity-includes\\?|procedure-arity\\?|procedure-closure-contents-eq\\?|procedure-extract-target|procedure-impersonator\\*\\?|procedure-keywords|procedure-reduce-arity|procedure-reduce-keyword-arity|procedure-rename|procedure-result-arity|procedure-specialize|procedure-struct-type\\?|procedure\\?|processor-count|progress-evt\\?|promise-forced\\?|promise-running\\?|promise\\/name\\?|promise\\?|prop:arity-string|prop:arrow-contract|prop:arrow-contract-get-info|prop:arrow-contract\\?|prop:authentic|prop:blame|prop:chaperone-contract|prop:checked-procedure|prop:contract|prop:contracted|prop:custom-print-quotable|prop:custom-write|prop:dict|prop:equal\\+hash|prop:evt|prop:exn:missing-module|prop:exn:srclocs|prop:expansion-contexts|prop:flat-contract|prop:impersonator-of|prop:input-port|prop:liberal-define-context|prop:object-name|prop:opt-chaperone-contract|prop:opt-chaperone-contract-get-test|prop:opt-chaperone-contract\\?|prop:orc-contract|prop:orc-contract-get-subcontracts|prop:orc-contract\\?|prop:output-port|prop:place-location|prop:procedure|prop:recursive-contract|prop:recursive-contract-unroll|prop:recursive-contract\\?|prop:rename-transformer|prop:sequence|prop:set!-transformer|prop:stream|proper-subset\\?|pseudo-random-generator->vector|pseudo-random-generator-vector\\?|pseudo-random-generator\\?|put-preferences|putenv|quotient|quotient\\/remainder|radians->degrees|raise|raise-argument-error|raise-arguments-error|raise-arity-error|raise-contract-error|raise-mismatch-error|raise-range-error|raise-result-error|raise-syntax-error|raise-type-error|raise-user-error|random|random-seed|rational\\?|rationalize|read|read-accept-bar-quote|read-accept-box|read-accept-compiled|read-accept-dot|read-accept-graph|read-accept-infix-dot|read-accept-lang|read-accept-quasiquote|read-accept-reader|read-byte|read-byte-or-special|read-bytes|read-bytes!|read-bytes-avail!|read-bytes-avail!\\*|read-bytes-avail!\\/enable-break|read-bytes-line|read-case-sensitive|read-cdot|read-char|read-char-or-special|read-curly-brace-as-paren|read-curly-brace-with-tag|read-decimal-as-inexact|read-eval-print-loop|read-language|read-line|read-on-demand-source|read-square-bracket-as-paren|read-square-bracket-with-tag|read-string|read-string!|read-syntax|read-syntax\\/recursive|read\\/recursive|readtable-mapping|readtable\\?|real->decimal-string|real->double-flonum|real->floating-point-bytes|real->single-flonum|real-part|real\\?|reencode-input-port|reencode-output-port|regexp|regexp-match|regexp-match-exact\\?|regexp-match-peek|regexp-match-peek-immediate|regexp-match-peek-positions|regexp-match-peek-positions-immediate|regexp-match-peek-positions-immediate\\/end|regexp-match-peek-positions\\/end|regexp-match-positions|regexp-match-positions\\/end|regexp-match\\/end|regexp-match\\?|regexp-max-lookbehind|regexp-quote|regexp-replace|regexp-replace\\*|regexp-replace-quote|regexp-replaces|regexp-split|regexp-try-match|regexp\\?|relative-path\\?|remainder|remf|remf\\*|remove|remove\\*|remq|remq\\*|remv|remv\\*|rename-contract|rename-file-or-directory|rename-transformer-target|rename-transformer\\?|replace-evt|reroot-path|resolve-path|resolved-module-path-name|resolved-module-path\\?|rest|reverse|round|second|seconds->date|security-guard\\?|semaphore-peek-evt|semaphore-peek-evt\\?|semaphore-post|semaphore-try-wait\\?|semaphore-wait|semaphore-wait\\/enable-break|semaphore\\?|sequence->list|sequence->stream|sequence-add-between|sequence-andmap|sequence-append|sequence-count|sequence-filter|sequence-fold|sequence-for-each|sequence-generate|sequence-generate\\*|sequence-length|sequence-map|sequence-ormap|sequence-ref|sequence-tail|sequence\\?|set|set!-transformer-procedure|set!-transformer\\?|set->list|set->stream|set-add|set-add!|set-box!|set-clear|set-clear!|set-copy|set-copy-clear|set-count|set-empty\\?|set-eq\\?|set-equal\\?|set-eqv\\?|set-first|set-for-each|set-implements\\/c|set-implements\\?|set-intersect|set-intersect!|set-map|set-mcar!|set-mcdr!|set-member\\?|set-mutable\\?|set-phantom-bytes!|set-port-next-location!|set-remove|set-remove!|set-rest|set-subtract|set-subtract!|set-symmetric-difference|set-symmetric-difference!|set-union|set-union!|set-weak\\?|set=\\?|set\\?|seteq|seteqv|seventh|sgn|shared-bytes|shell-execute|shrink-path-wrt|shuffle|simple-form-path|simplify-path|sin|single-flonum\\?|sinh|sixth|skip-projection-wrapper\\?|sleep|some-system-path->string|special-comment-value|special-comment\\?|special-filter-input-port|split-at|split-at-right|split-common-prefix|split-path|splitf-at|splitf-at-right|sqr|sqrt|srcloc->string|srcloc-column|srcloc-line|srcloc-position|srcloc-source|srcloc-span|srcloc\\?|stop-after|stop-before|stream->list|stream-add-between|stream-andmap|stream-append|stream-count|stream-empty\\?|stream-filter|stream-first|stream-fold|stream-for-each|stream-length|stream-map|stream-ormap|stream-ref|stream-rest|stream-tail|stream\\/c|stream\\?|string|string->bytes\\/latin-1|string->bytes\\/locale|string->bytes\\/utf-8|string->immutable-string|string->keyword|string->list|string->number|string->path|string->path-element|string->some-system-path|string->symbol|string->uninterned-symbol|string->unreadable-symbol|string-append|string-append\\*|string-ci<=\\?|string-ci<\\?|string-ci=\\?|string-ci>=\\?|string-ci>\\?|string-contains\\?|string-copy|string-copy!|string-downcase|string-environment-variable-name\\?|string-fill!|string-foldcase|string-length|string-locale-ci<\\?|string-locale-ci=\\?|string-locale-ci>\\?|string-locale-downcase|string-locale-upcase|string-locale<\\?|string-locale=\\?|string-locale>\\?|string-no-nuls\\?|string-normalize-nfc|string-normalize-nfd|string-normalize-nfkc|string-normalize-nfkd|string-port\\?|string-prefix\\?|string-ref|string-set!|string-suffix\\?|string-titlecase|string-upcase|string-utf-8-length|string<=\\?|string<\\?|string=\\?|string>=\\?|string>\\?|string\\?|struct->vector|struct-accessor-procedure\\?|struct-constructor-procedure\\?|struct-info|struct-mutator-procedure\\?|struct-predicate-procedure\\?|struct-type-info|struct-type-make-constructor|struct-type-make-predicate|struct-type-property-accessor-procedure\\?|struct-type-property\\/c|struct-type-property\\?|struct-type\\?|struct:arity-at-least|struct:arrow-contract-info|struct:date|struct:date\\*|struct:exn|struct:exn:break|struct:exn:break:hang-up|struct:exn:break:terminate|struct:exn:fail|struct:exn:fail:contract|struct:exn:fail:contract:arity|struct:exn:fail:contract:blame|struct:exn:fail:contract:continuation|struct:exn:fail:contract:divide-by-zero|struct:exn:fail:contract:non-fixnum-result|struct:exn:fail:contract:variable|struct:exn:fail:filesystem|struct:exn:fail:filesystem:errno|struct:exn:fail:filesystem:exists|struct:exn:fail:filesystem:missing-module|struct:exn:fail:filesystem:version|struct:exn:fail:network|struct:exn:fail:network:errno|struct:exn:fail:object|struct:exn:fail:out-of-memory|struct:exn:fail:read|struct:exn:fail:read:eof|struct:exn:fail:read:non-char|struct:exn:fail:syntax|struct:exn:fail:syntax:missing-module|struct:exn:fail:syntax:unbound|struct:exn:fail:unsupported|struct:exn:fail:user|struct:srcloc|struct:wrapped-extra-arg-arrow|struct\\?|sub1|subbytes|subclass\\?|subclass\\?\\/c|subprocess|subprocess-group-enabled|subprocess-kill|subprocess-pid|subprocess-status|subprocess-wait|subprocess\\?|subset\\?|substring|suggest\\/c|symbol->string|symbol-interned\\?|symbol-unreadable\\?|symbol<\\?|symbol=\\?|symbol\\?|sync|sync\\/enable-break|sync\\/timeout|sync\\/timeout\\/enable-break|syntax->datum|syntax->list|syntax-arm|syntax-column|syntax-debug-info|syntax-disarm|syntax-e|syntax-line|syntax-local-bind-syntaxes|syntax-local-certifier|syntax-local-context|syntax-local-expand-expression|syntax-local-get-shadower|syntax-local-identifier-as-binding|syntax-local-introduce|syntax-local-lift-context|syntax-local-lift-expression|syntax-local-lift-module|syntax-local-lift-module-end-declaration|syntax-local-lift-provide|syntax-local-lift-require|syntax-local-lift-values-expression|syntax-local-make-definition-context|syntax-local-make-delta-introducer|syntax-local-module-defined-identifiers|syntax-local-module-exports|syntax-local-module-required-identifiers|syntax-local-name|syntax-local-phase-level|syntax-local-submodules|syntax-local-transforming-module-provides\\?|syntax-local-value|syntax-local-value\\/immediate|syntax-original\\?|syntax-position|syntax-property|syntax-property-preserved\\?|syntax-property-symbol-keys|syntax-protect|syntax-rearm|syntax-recertify|syntax-shift-phase-level|syntax-source|syntax-source-module|syntax-span|syntax-taint|syntax-tainted\\?|syntax-track-origin|syntax-transforming-module-expression\\?|syntax-transforming-with-lifts\\?|syntax-transforming\\?|syntax\\?|system-big-endian\\?|system-idle-evt|system-language\\+country|system-library-subpath|system-path-convention-type|system-type|tail-marks-match\\?|take|take-common-prefix|take-right|takef|takef-right|tan|tanh|tcp-abandon-port|tcp-accept|tcp-accept-evt|tcp-accept-ready\\?|tcp-accept\\/enable-break|tcp-addresses|tcp-close|tcp-connect|tcp-connect\\/enable-break|tcp-listen|tcp-listener\\?|tcp-port\\?|tentative-pretty-print-port-cancel|tentative-pretty-print-port-transfer|tenth|terminal-port\\?|the-unsupplied-arg|third|thread|thread-cell-ref|thread-cell-set!|thread-cell-values\\?|thread-cell\\?|thread-dead-evt|thread-dead\\?|thread-group\\?|thread-receive|thread-receive-evt|thread-resume|thread-resume-evt|thread-rewind-receive|thread-running\\?|thread-send|thread-suspend|thread-suspend-evt|thread-try-receive|thread-wait|thread\\/suspend-to-kill|thread\\?|time-apply|touch|true|truncate|udp-addresses|udp-bind!|udp-bound\\?|udp-close|udp-connect!|udp-connected\\?|udp-multicast-interface|udp-multicast-join-group!|udp-multicast-leave-group!|udp-multicast-loopback\\?|udp-multicast-set-interface!|udp-multicast-set-loopback!|udp-multicast-set-ttl!|udp-multicast-ttl|udp-open-socket|udp-receive!|udp-receive!\\*|udp-receive!-evt|udp-receive!\\/enable-break|udp-receive-ready-evt|udp-send|udp-send\\*|udp-send-evt|udp-send-ready-evt|udp-send-to|udp-send-to\\*|udp-send-to-evt|udp-send-to\\/enable-break|udp-send\\/enable-break|udp\\?|unbox|uncaught-exception-handler|unit\\?|unquoted-printing-string|unquoted-printing-string-value|unquoted-printing-string\\?|unspecified-dom|unsupplied-arg\\?|use-collection-link-paths|use-compiled-file-check|use-compiled-file-paths|use-user-specific-search-paths|user-execute-bit|user-read-bit|user-write-bit|value-blame|value-contract|values|variable-reference->empty-namespace|variable-reference->module-base-phase|variable-reference->module-declaration-inspector|variable-reference->module-path-index|variable-reference->module-source|variable-reference->namespace|variable-reference->phase|variable-reference->resolved-module-path|variable-reference-constant\\?|variable-reference\\?|vector|vector->immutable-vector|vector->list|vector->pseudo-random-generator|vector->pseudo-random-generator!|vector->values|vector-append|vector-argmax|vector-argmin|vector-cas!|vector-copy|vector-copy!|vector-count|vector-drop|vector-drop-right|vector-fill!|vector-filter|vector-filter-not|vector-immutable|vector-length|vector-map|vector-map!|vector-member|vector-memq|vector-memv|vector-ref|vector-set!|vector-set\\*!|vector-set-performance-stats!|vector-split-at|vector-split-at-right|vector-take|vector-take-right|vector\\?|version|void|void\\?|weak-box-value|weak-box\\?|weak-set|weak-seteq|weak-seteqv|will-execute|will-executor\\?|will-register|will-try-execute|with-input-from-bytes|with-input-from-string|with-output-to-bytes|with-output-to-string|would-be-future|wrap-evt|wrapped-extra-arg-arrow-extra-neg-party-argument|wrapped-extra-arg-arrow-real-func|wrapped-extra-arg-arrow\\?|writable<%>|write|write-byte|write-bytes|write-bytes-avail|write-bytes-avail\\*|write-bytes-avail-evt|write-bytes-avail\\/enable-break|write-char|write-special|write-special-avail\\*|write-special-evt|write-string|writeln|xor|zero\\?)(?=$|[()\\[\\]{}\",'`;\\s])"
          }
        ]
      },
      "byte-string": {
        "patterns": [
          {
            "begin": "#\"",
            "beginCaptures": {
              "0": [
                {
                  "name": "punctuation.definition.string.begin.racket"
                }
              ]
            },
            "end": "\"",
            "endCaptures": {
              "0": [
                {
                  "name": "punctuation.definition.string.end.racket"
                }
              ]
            },
            "name": "string.byte.racket",
            "patterns": [
              {
                "include": "#escape-char-base"
              }
            ]
          }
        ]
      },
      "character": {
        "patterns": [
          {
            "match": "\\#\\\\(?:(?:[0-7]{3})|(?:u[0-9a-fA-F]{1,4})|(?:U[0-9a-fA-F]{1,6})|(?:(?:null?|newline|linefeed|backspace|v?tab|page|return|space|rubout|(?:[^\\w\\s]|\\d))(?![a-zA-Z]))|(?:[^\\W\\d](?=[\\W\\d])|\\W))",
            "name": "string.quoted.single.racket"
          }
        ]
      },
      "comment": {
        "patterns": [
          {
            "include": "#comment-line"
          },
          {
            "include": "#comment-block"
          },
          {
            "include": "#comment-sexp"
          }
        ]
      },
      "comment-block": {
        "patterns": [
          {
            "begin": "#\\|",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.comment.begin.racket"
              }
            },
            "end": "\\|#",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.comment.end.racket"
              }
            },
            "name": "comment.block.racket",
            "patterns": [
              {
                "include": "#comment-block"
              }
            ]
          }
        ]
      },
      "comment-line": {
        "patterns": [
          {
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.comment.racket"
              }
            },
            "match": "(#!)[ /].*$",
            "name": "comment.line.unix.racket"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.comment.racket"
              }
            },
            "match": "(?<=^|[()\\[\\]{}\",'`;\\s])(;).*$",
            "name": "comment.line.semicolon.racket"
          }
        ]
      },
      "comment-sexp": {
        "patterns": [
          {
            "match": "(?<=^|[()\\[\\]{}\",'`;\\s])#;",
            "name": "comment.sexp.racket"
          }
        ]
      },
      "default-args": {
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.begin.racket"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.end.racket"
              }
            },
            "patterns": [
              {
                "include": "#default-args-content"
              }
            ]
          },
          {
            "begin": "\\[",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.begin.racket"
              }
            },
            "end": "\\]",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.end.racket"
              }
            },
            "patterns": [
              {
                "include": "#default-args-content"
              }
            ]
          },
          {
            "begin": "{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.begin.racket"
              }
            },
            "end": "}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.end.racket"
              }
            },
            "patterns": [
              {
                "include": "#default-args-content"
              }
            ]
          }
        ]
      },
      "default-args-content": {
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#argument"
          },
          {
            "include": "$base"
          }
        ]
      },
      "default-args-struct": {
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.begin.racket"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.end.racket"
              }
            },
            "patterns": [
              {
                "include": "#default-args-struct-content"
              }
            ]
          },
          {
            "begin": "\\[",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.begin.racket"
              }
            },
            "end": "\\]",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.end.racket"
              }
            },
            "patterns": [
              {
                "include": "#default-args-struct-content"
              }
            ]
          },
          {
            "begin": "{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.begin.racket"
              }
            },
            "end": "}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.end.racket"
              }
            },
            "patterns": [
              {
                "include": "#default-args-struct-content"
              }
            ]
          }
        ]
      },
      "default-args-struct-content": {
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#argument-struct"
          },
          {
            "include": "$base"
          }
        ]
      },
      "define": {
        "patterns": [
          {
            "include": "#define-func"
          },
          {
            "include": "#define-vals"
          },
          {
            "include": "#define-val"
          }
        ]
      },
      "define-func": {
        "patterns": [
          {
            "begin": "(?<=[(\\[{])\\s*(define(?:(?:-for)?-syntax)?)\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "storage.type.lambda.racket"
              },
              "2": {
                "name": "punctuation.section.begin.racket"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.end.racket"
              }
            },
            "patterns": [
              {
                "include": "#func-args"
              }
            ]
          },
          {
            "begin": "(?<=[(\\[{])\\s*(define(?:(?:-for)?-syntax)?)\\s*(\\[)",
            "beginCaptures": {
              "1": {
                "name": "storage.type.lambda.racket"
              },
              "2": {
                "name": "punctuation.section.begin.racket"
              }
            },
            "end": "\\]",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.end.racket"
              }
            },
            "patterns": [
              {
                "include": "#func-args"
              }
            ]
          },
          {
            "begin": "(?<=[(\\[{])\\s*(define(?:(?:-for)?-syntax)?)\\s*({)",
            "beginCaptures": {
              "1": {
                "name": "storage.type.lambda.racket"
              },
              "2": {
                "name": "punctuation.section.begin.racket"
              }
            },
            "end": "}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.end.racket"
              }
            },
            "patterns": [
              {
                "include": "#func-args"
              }
            ]
          }
        ]
      },
      "define-val": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "storage.type.racket"
              },
              "2": {
                "name": "entity.name.constant.racket"
              }
            },
            "match": "(?<=[(\\[{])\\s*(define(?:(?:-for)?-syntax)?)\\s+([^(\\#)\\[\\]{}\",'`;\\s][^()\\[\\]{}\",'`;\\s]*)"
          }
        ]
      },
      "define-vals": {
        "patterns": [
          {
            "begin": "(?<=[(\\[{])\\s*(define-(?:values(?:-for-syntax)?|syntaxes)?)\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "storage.type.racket"
              },
              "2": {
                "name": "punctuation.section.begin.racket"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.end.racket"
              }
            },
            "patterns": [
              {
                "match": "[^(\\#)\\[\\]{}\",'`;\\s][^()\\[\\]{}\",'`;\\s]*",
                "name": "entity.name.constant"
              }
            ]
          },
          {
            "begin": "(?<=[(\\[{])\\s*(define-(?:values(?:-for-syntax)?|syntaxes)?)\\s*(\\[)",
            "beginCaptures": {
              "1": {
                "name": "storage.type.racket"
              },
              "2": {
                "name": "punctuation.section.begin.racket"
              }
            },
            "end": "\\]",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.end.racket"
              }
            },
            "patterns": [
              {
                "match": "[^(\\#)\\[\\]{}\",'`;\\s][^()\\[\\]{}\",'`;\\s]*",
                "name": "entity.name.constant"
              }
            ]
          },
          {
            "begin": "(?<=[(\\[{])\\s*(define-(?:values(?:-for-syntax)?|syntaxes)?)\\s*({)",
            "beginCaptures": {
              "1": {
                "name": "storage.type.racket"
              },
              "2": {
                "name": "punctuation.section.begin.racket"
              }
            },
            "end": "}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.end.racket"
              }
            },
            "patterns": [
              {
                "match": "[^(\\#)\\[\\]{}\",'`;\\s][^()\\[\\]{}\",'`;\\s]*",
                "name": "entity.name.constant"
              }
            ]
          }
        ]
      },
      "dot": {
        "patterns": [
          {
            "match": "(?<=^|[()\\[\\]{}\",'`;\\s])\\.(?=$|[()\\[\\]{}\",'`;\\s])",
            "name": "punctuation.accessor.racket"
          }
        ]
      },
      "escape-char": {
        "patterns": [
          {
            "include": "#escape-char-base"
          },
          {
            "match": "\\\\(?:(?:u[\\da-fA-F]{1,4})|(?:U[\\da-fA-F]{1,8}))",
            "name": "constant.character.escape.racket"
          },
          {
            "include": "#escape-char-error"
          }
        ]
      },
      "escape-char-base": {
        "patterns": [
          {
            "match": "\\\\(?:(?:[abtnvfre\"'\\\\])|(?:[0-7]{1,3})|(?:x[\\da-fA-F]{1,2}))",
            "name": "constant.character.escape.racket"
          }
        ]
      },
      "escape-char-error": {
        "patterns": [
          {
            "match": "\\\\.",
            "name": "invalid.illegal.escape.racket"
          }
        ]
      },
      "format": {
        "patterns": [
          {
            "begin": "(?<=[(\\[{])\\s*(e?printf|format)\\s*(\")",
            "beginCaptures": {
              "1": {
                "name": "support.function.racket"
              },
              "2": {
                "name": "string.quoted.double.racket"
              }
            },
            "contentName": "string.quoted.double.racket",
            "end": "\"",
            "endCaptures": {
              "0": {
                "name": "string.quoted.double.racket"
              }
            },
            "patterns": [
              {
                "include": "#format-string"
              },
              {
                "include": "#escape-char"
              }
            ]
          }
        ]
      },
      "format-string": {
        "patterns": [
          {
            "match": "~(?:(?:\\.?[n%aAsSvV])|[cCbBoOxX~\\s])",
            "name": "constant.other.placeholder.racket"
          }
        ]
      },
      "func-args": {
        "patterns": [
          {
            "include": "#function-name"
          },
          {
            "include": "#dot"
          },
          {
            "include": "#comment"
          },
          {
            "include": "#args"
          }
        ]
      },
      "function-name": {
        "patterns": [
          {
            "begin": "(?<=[(\\[{])\\s*(\\|)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.verbatim.begin.racket"
              }
            },
            "contentName": "entity.name.function.racket",
            "end": "\\|",
            "endCaptures": {
              "0": "punctuation.verbatim.end.racket"
            },
            "name": "entity.name.function.racket"
          },
          {
            "begin": "(?<=[(\\[{])\\s*(\\#%|\\\\\\ |[^\\#()\\[\\]{}\",'`;\\s])",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.racket"
              }
            },
            "contentName": "entity.name.function.racket",
            "end": "(?=[()\\[\\]{}\",'`;\\s])",
            "patterns": [
              {
                "match": "\\\\ "
              },
              {
                "begin": "\\|",
                "beginCaptures": {
                  "0": "punctuation.verbatim.begin.racket"
                },
                "end": "\\|",
                "endCaptures": {
                  "0": "punctuation.verbatim.end.racket"
                }
              }
            ]
          }
        ]
      },
      "hash": {
        "patterns": [
          {
            "begin": "\\#hash(?:eq(?:v)?)?\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.hash.begin.racket"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.hash.end.racket"
              }
            },
            "name": "meta.hash.racket",
            "patterns": [
              {
                "include": "#hash-content"
              }
            ]
          },
          {
            "begin": "\\#hash(?:eq(?:v)?)?\\[",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.hash.begin.racket"
              }
            },
            "end": "\\]",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.hash.end.racket"
              }
            },
            "name": "meta.hash.racket",
            "patterns": [
              {
                "include": "#hash-content"
              }
            ]
          },
          {
            "begin": "\\#hash(?:eq(?:v)?)?\\{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.hash.begin.racket"
              }
            },
            "end": "}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.hash.end.racket"
              }
            },
            "name": "meta.hash.racket",
            "patterns": [
              {
                "include": "#hash-content"
              }
            ]
          }
        ]
      },
      "hash-content": {
        "patterns": [
          {
            "include": "#comment"
          },
          {
            "include": "#pairing"
          }
        ]
      },
      "here-string": {
        "patterns": [
          {
            "begin": "#<<(.*)$",
            "end": "^\\1$",
            "name": "string.here.racket"
          }
        ]
      },
      "keyword": {
        "patterns": [
          {
            "match": "(?<=^|[()\\[\\]{}\",'`;\\s])\\#:[^()\\[\\]{}\",'`;\\s]+",
            "name": "keyword.other.racket"
          }
        ]
      },
      "lambda": {
        "patterns": [
          {
            "include": "#lambda-onearg"
          },
          {
            "include": "#lambda-args"
          }
        ]
      },
      "lambda-args": {
        "patterns": [
          {
            "begin": "(?<=[(\\[{])\\s*(lambda|λ)\\s+(\\()",
            "beginCaptures": {
              "1": {
                "name": "storage.type.lambda.racket"
              },
              "2": {
                "name": "punctuation.section.begin.racket"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.end.racket"
              }
            },
            "name": "meta.lambda.racket",
            "patterns": [
              {
                "include": "#args"
              }
            ]
          },
          {
            "begin": "(?<=[(\\[{])\\s*(lambda|λ)\\s+({)",
            "beginCaptures": {
              "1": {
                "name": "storage.type.lambda.racket"
              },
              "2": {
                "name": "punctuation.section.begin.racket"
              }
            },
            "end": "}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.end.racket"
              }
            },
            "name": "meta.lambda.racket",
            "patterns": [
              {
                "include": "#args"
              }
            ]
          },
          {
            "begin": "(?<=[(\\[{])\\s*(lambda|λ)\\s+(\\[)",
            "beginCaptures": {
              "1": {
                "name": "storage.type.lambda.racket"
              },
              "2": {
                "name": "punctuation.section.begin.racket"
              }
            },
            "end": "\\]",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.end.racket"
              }
            },
            "name": "meta.lambda.racket",
            "patterns": [
              {
                "include": "#args"
              }
            ]
          }
        ]
      },
      "lambda-onearg": [
        {
          "captures": {
            "1": {
              "name": "storage.type.lambda.racket"
            },
            "2": {
              "name": "variable.parameter.racket"
            }
          },
          "match": "(?<=[(\\[{])\\s*(lambda|λ)\\s+([^(\\#)\\[\\]{}\",'`;\\s][^()\\[\\]{}\",'`;\\s]*)",
          "name": "meta.lambda.racket"
        }
      ],
      "list": {
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.list.begin.racket"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.list.end.racket"
              }
            },
            "name": "meta.list.racket",
            "patterns": [
              {
                "include": "#list-content"
              }
            ]
          },
          {
            "begin": "\\[",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.list.begin.racket"
              }
            },
            "end": "\\]",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.list.end.racket"
              }
            },
            "name": "meta.list.racket",
            "patterns": [
              {
                "include": "#list-content"
              }
            ]
          },
          {
            "begin": "{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.list.begin.racket"
              }
            },
            "end": "}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.list.end.racket"
              }
            },
            "name": "meta.list.racket",
            "patterns": [
              {
                "include": "#list-content"
              }
            ]
          }
        ]
      },
      "list-content": {
        "patterns": [
          {
            "include": "#builtin-functions"
          },
          {
            "include": "#dot"
          },
          {
            "include": "$base"
          }
        ]
      },
      "not-atom": {
        "patterns": [
          {
            "include": "#vector"
          },
          {
            "include": "#hash"
          },
          {
            "include": "#prefab-struct"
          },
          {
            "include": "#list"
          },
          {
            "match": "(?<=^|[()\\[\\]{}\\\",'`;\\s])(?:\\#[cC][iI]|\\#[cC][sS])(?=\\s)",
            "name": "keyword.control.racket"
          },
          {
            "match": "(?<=^|[()\\[\\]{}\\\",'`;\\s])(?:\\#&)",
            "name": "support.function.racket"
          }
        ]
      },
      "number": {
        "patterns": [
          {
            "include": "#number-dec"
          },
          {
            "include": "#number-oct"
          },
          {
            "include": "#number-bin"
          },
          {
            "include": "#number-hex"
          }
        ]
      },
      "number-bin": {
        "patterns": [
          {
            "match": "(?<=^|[()\\[\\]{}\",'`;\\s])(?:\\#[bB](?:\\#[eEiI])?|(?:\\#[eEiI])?\\#[bB])(?:(?:(?:(?:(?:(?:[+-]?[01]+\\#*\\/[01]+\\#*)|(?:[+-]?[01]+\\.[01]+\\#*)|(?:[+-]?[01]+\\#*\\.\\#*)|(?:[+-]?[01]+\\#*))(?:[sldefSLDEF][+-]?[01]+)?)|[+-](?:(?:[iI][nN][fF])\\.[0f]|(?:[nN][aA][nN])\\.[0f]))@(?:(?:(?:(?:[+-]?[01]+\\#*\\/[01]+\\#*)|(?:[+-]?[01]+\\.[01]+\\#*)|(?:[+-]?[01]+\\#*\\.\\#*)|(?:[+-]?[01]+\\#*))(?:[sldefSLDEF][+-]?[01]+)?)|(?:(?:[iI][nN][fF])\\.[0f]|(?:[nN][aA][nN])\\.[0f])))|(?:(?:(?:(?:(?:[+-]?[01]+\\#*\\/[01]+\\#*)|(?:[+-]?[01]+\\.[01]+\\#*)|(?:[+-]?[01]+\\#*\\.\\#*)|(?:[+-]?[01]+\\#*))(?:[sldefSLDEF][+-]?[01]+)?)|[+-](?:(?:[iI][nN][fF])\\.[0f]|(?:[nN][aA][nN])\\.[0f]))?[+-](?:(?:(?:(?:[+-]?[01]+\\#*\\/[01]+\\#*)|(?:[+-]?[01]+\\.[01]+\\#*)|(?:[+-]?[01]+\\#*\\.\\#*)|(?:[+-]?[01]+\\#*))(?:[sldefSLDEF][+-]?[01]+)?)|(?:(?:[iI][nN][fF])\\.[0f]|(?:[nN][aA][nN])\\.[0f])|)i)|[+-](?:(?:[iI][nN][fF])\\.[0f]|(?:[nN][aA][nN])\\.[0f])|(?:(?:[+-]?[01]+\\#*\\/[01]+\\#*)|(?:[+-]?[01]*\\.[01]+\\#*)|(?:[+-]?[01]+\\#*\\.\\#*)|(?:[+-]?[01]+\\#*))(?:[sldefSLDEF][+-]?[01]+)?)(?=$|[()\\[\\]{}\",'`;\\s])",
            "name": "constant.numeric.bin.racket"
          }
        ]
      },
      "number-dec": {
        "patterns": [
          {
            "match": "(?<=^|[()\\[\\]{}\",'`;\\s])(?:(?:\\#[dD])?(?:\\#[eEiI])?|(?:\\#[eEiI])?(?:\\#[dD])?)(?:(?:(?:(?:(?:(?:[+-]?\\d+\\#*\\/\\d+\\#*)|(?:[+-]?\\d+\\.\\d+\\#*)|(?:[+-]?\\d+\\#*\\.\\#*)|(?:[+-]?\\d+\\#*))(?:[sldefSLDEF][+-]?\\d+)?)|[+-](?:(?:[iI][nN][fF])\\.[0f]|(?:[nN][aA][nN])\\.[0f]))@(?:(?:(?:(?:[+-]?\\d+\\#*\\/\\d+\\#*)|(?:[+-]?\\d+\\.\\d+\\#*)|(?:[+-]?\\d+\\#*\\.\\#*)|(?:[+-]?\\d+\\#*))(?:[sldefSLDEF][+-]?\\d+)?)|[+-](?:(?:[iI][nN][fF])\\.[0f]|(?:[nN][aA][nN])\\.[0f])))|(?:(?:(?:(?:(?:[+-]?\\d+\\#*\\/\\d+\\#*)|(?:[+-]?\\d+\\.\\d+\\#*)|(?:[+-]?\\d+\\#*\\.\\#*)|(?:[+-]?\\d+\\#*))(?:[sldefSLDEF][+-]?\\d+)?)|[+-](?:(?:[iI][nN][fF])\\.[0f]|(?:[nN][aA][nN])\\.[0f]))?[+-](?:(?:(?:(?:[+-]?\\d+\\#*\\/\\d+\\#*)|(?:[+-]?\\d+\\.\\d+\\#*)|(?:[+-]?\\d+\\#*\\.\\#*)|(?:[+-]?\\d+\\#*))(?:[sldefSLDEF][+-]?\\d+)?)|(?:(?:[iI][nN][fF])\\.[0f]|(?:[nN][aA][nN])\\.[0f])|)i)|[+-](?:(?:[iI][nN][fF])\\.[0f]|(?:[nN][aA][nN])\\.[0f])|(?:(?:[+-]?\\d+\\#*\\/\\d+\\#*)|(?:[+-]?\\d*\\.\\d+\\#*)|(?:[+-]?\\d+\\#*\\.\\#*)|(?:[+-]?\\d+\\#*))(?:[sldefSLDEF][+-]?\\d+)?)(?=$|[()\\[\\]{}\",'`;\\s])",
            "name": "constant.numeric.racket"
          }
        ]
      },
      "number-hex": {
        "patterns": [
          {
            "match": "(?<=^|[()\\[\\]{}\",'`;\\s])(?:\\#[xX](?:\\#[eEiI])?|(?:\\#[eEiI])?\\#[xX])(?:(?:(?:(?:(?:(?:[+-]?[0-9a-fA-F]+\\#*\\/[0-9a-fA-F]+\\#*)|(?:[+-]?[0-9a-fA-F]\\.[0-9a-fA-F]+\\#*)|(?:[+-]?[0-9a-fA-F]+\\#*\\.\\#*)|(?:[+-]?[0-9a-fA-F]+\\#*))(?:[slSL][+-]?[0-9a-fA-F]+)?)|[+-](?:(?:[iI][nN][fF])\\.[0f]|(?:[nN][aA][nN])\\.[0f]))@(?:(?:(?:(?:[+-]?[0-9a-fA-F]+\\#*\\/[0-9a-fA-F]+\\#*)|(?:[+-]?[0-9a-fA-F]+\\.[0-9a-fA-F]+\\#*)|(?:[+-]?[0-9a-fA-F]+\\#*\\.\\#*)|(?:[+-]?[0-9a-fA-F]+\\#*))(?:[slSL][+-]?[0-9a-fA-F]+)?)|(?:(?:[iI][nN][fF])\\.[0f]|(?:[nN][aA][nN])\\.[0f])))|(?:(?:(?:(?:(?:[+-]?[0-9a-fA-F]+\\#*\\/[0-9a-fA-F]+\\#*)|(?:[+-]?[0-9a-fA-F]+\\.[0-9a-fA-F]+\\#*)|(?:[+-]?[0-9a-fA-F]+\\#*\\.\\#*)|(?:[+-]?[0-9a-fA-F]+\\#*))(?:[slSL][+-]?[0-9a-fA-F]+)?)|[+-](?:(?:[iI][nN][fF])\\.[0f]|(?:[nN][aA][nN])\\.[0f]))?[+-](?:(?:(?:(?:[+-]?[0-9a-fA-F]+\\#*\\/[0-9a-fA-F]+\\#*)|(?:[+-]?[0-9a-fA-F]+\\.[0-9a-fA-F]+\\#*)|(?:[+-]?[0-9a-fA-F]+\\#*\\.\\#*)|(?:[+-]?[0-9a-fA-F]+\\#*))(?:[slSL][+-]?[0-9a-fA-F]+)?)|(?:(?:[iI][nN][fF])\\.[0f]|(?:[nN][aA][nN])\\.[0f])|)i)|[+-](?:(?:[iI][nN][fF])\\.[0f]|(?:[nN][aA][nN])\\.[0f])|(?:(?:[+-]?[0-9a-fA-F]+\\#*\\/[0-9a-fA-F]+\\#*)|(?:[+-]?[0-9a-fA-F]*\\.[0-9a-fA-F]+\\#*)|(?:[+-]?[0-9a-fA-F]+\\#*\\.\\#*)|(?:[+-]?[0-9a-fA-F]+\\#*))(?:[slSL][+-]?[0-9a-fA-F]+)?)(?=$|[()\\[\\]{}\",'`;\\s])",
            "name": "constant.numeric.hex.racket"
          }
        ]
      },
      "number-oct": {
        "patterns": [
          {
            "match": "(?<=^|[()\\[\\]{}\",'`;\\s])(?:\\#[oO](?:\\#[eEiI])?|(?:\\#[eEiI])?\\#[oO])(?:(?:(?:(?:(?:(?:[+-]?[0-7]+\\#*\\/[0-7]+\\#*)|(?:[+-]?[0-7]+\\.[0-7]+\\#*)|(?:[+-]?[0-7]+\\#*\\.\\#*)|(?:[+-]?[0-7]+\\#*))(?:[sldefSLDEF][+-]?[0-7]+)?)|[+-](?:(?:[iI][nN][fF])\\.[0f]|(?:[nN][aA][nN])\\.[0f]))@(?:(?:(?:(?:[+-]?[0-7]+\\#*\\/[0-7]+\\#*)|(?:[+-]?[0-7]+\\.[0-7]+\\#*)|(?:[+-]?[0-7]+\\#*\\.\\#*)|(?:[+-]?[0-7]+\\#*))(?:[sldefSLDEF][+-]?[0-7]+)?)|[+-](?:(?:[iI][nN][fF])\\.[0f]|(?:[nN][aA][nN])\\.[0f])))|(?:(?:(?:(?:(?:[+-]?[0-7]+\\#*\\/[0-7]+\\#*)|(?:[+-]?[0-7]+\\.[0-7]+\\#*)|(?:[+-]?[0-7]+\\#*\\.\\#*)|(?:[+-]?[0-7]+\\#*))(?:[sldefSLDEF][+-]?[0-7]+)?)|[+-](?:(?:[iI][nN][fF])\\.[0f]|(?:[nN][aA][nN])\\.[0f]))?[+-](?:(?:(?:(?:[+-]?[0-7]+\\#*\\/[0-7]+\\#*)|(?:[+-]?[0-7]+\\.[0-7]+\\#*)|(?:[+-]?[0-7]+\\#*\\.\\#*)|(?:[+-]?[0-7]+\\#*))(?:[sldefSLDEF][+-]?[0-7]+)?)|(?:(?:[iI][nN][fF])\\.[0f]|(?:[nN][aA][nN])\\.[0f])|)i)|[+-](?:(?:[iI][nN][fF])\\.[0f]|(?:[nN][aA][nN])\\.[0f])|(?:(?:[+-]?[0-7]+\\#*\\/[0-7]+\\#*)|(?:[+-]?[0-7]*\\.[0-7]+\\#*)|(?:[+-]?[0-7]+\\#*\\.\\#*)|(?:[+-]?[0-7]+\\#*))(?:[sldefSLDEF][+-]?[0-7]+)?)(?=$|[()\\[\\]{}\",'`;\\s])",
            "name": "constant.numeric.octal.racket"
          }
        ]
      },
      "pair-content": {
        "patterns": [
          {
            "include": "#dot"
          },
          {
            "include": "#comment"
          },
          {
            "include": "#atom"
          }
        ]
      },
      "pairing": {
        "patterns": [
          {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.pair.begin.racket"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.pair.end.racket"
              }
            },
            "name": "meta.list.racket",
            "patterns": [
              {
                "include": "#pair-content"
              }
            ]
          },
          {
            "begin": "\\[",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.pair.begin.racket"
              }
            },
            "end": "\\]",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.pair.end.racket"
              }
            },
            "name": "meta.list.racket",
            "patterns": [
              {
                "include": "#pair-content"
              }
            ]
          },
          {
            "begin": "{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.pair.begin.racket"
              }
            },
            "end": "}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.pair.end.racket"
              }
            },
            "name": "meta.list.racket",
            "patterns": [
              {
                "include": "#pair-content"
              }
            ]
          }
        ]
      },
      "prefab-struct": {
        "patterns": [
          {
            "begin": "#s\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.prefab-struct.begin.racket"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.prefab-struct.end.racket"
              }
            },
            "name": "meta.prefab-struct.racket",
            "patterns": [
              {
                "include": "$base"
              }
            ]
          },
          {
            "begin": "#s\\[",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.prefab-struct.begin.racket"
              }
            },
            "end": "\\]",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.prefab-struct.end.racket"
              }
            },
            "name": "meta.prefab-struct.racket",
            "patterns": [
              {
                "include": "$base"
              }
            ]
          },
          {
            "begin": "#s{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.prefab-struct.begin.racket"
              }
            },
            "end": "}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.prefab-struct.end.racket"
              }
            },
            "name": "meta.prefab-struct.racket",
            "patterns": [
              {
                "include": "$base"
              }
            ]
          }
        ]
      },
      "quote": {
        "patterns": [
          {
            "match": "(?<=^|[()\\[\\]{}\\\",'`;\\s])(?:,@|'|`|,|\\#'|\\#`|\\#,|\\#~|\\#,@)+(?=[()\\[\\]{}\\\",'`;\\s]|\\#[^%]|[^()\\[\\]{}\",'`;\\s])",
            "name": "support.function.racket"
          }
        ]
      },
      "regexp-byte-string": {
        "patterns": [
          {
            "begin": "#(r|p)x#\"",
            "beginCaptures": {
              "0": [
                {
                  "name": "punctuation.definition.string.begin.racket"
                }
              ]
            },
            "end": "\"",
            "endCaptures": {
              "0": [
                {
                  "name": "punctuation.definition.string.end.racket"
                }
              ]
            },
            "name": "string.regexp.byte.racket",
            "patterns": [
              {
                "include": "#escape-char-base"
              }
            ]
          }
        ]
      },
      "regexp-string": {
        "patterns": [
          {
            "begin": "#(r|p)x\"",
            "beginCaptures": {
              "0": [
                {
                  "name": "punctuation.definition.string.begin.racket"
                }
              ]
            },
            "end": "\"",
            "endCaptures": {
              "0": [
                {
                  "name": "punctuation.definition.string.end.racket"
                }
              ]
            },
            "name": "string.regexp.racket",
            "patterns": [
              {
                "include": "#escape-char-base"
              }
            ]
          }
        ]
      },
      "string": {
        "patterns": [
          {
            "include": "#byte-string"
          },
          {
            "include": "#regexp-byte-string"
          },
          {
            "include": "#regexp-string"
          },
          {
            "include": "#base-string"
          },
          {
            "include": "#here-string"
          }
        ]
      },
      "struct": {
        "patterns": [
          {
            "begin": "(?<=[(\\[{])\\s*(struct)\\s+([^(\\#)\\[\\]{}\",'`;\\s][^()\\[\\]{}\",'`;\\s]*)(?:\\s+[^(\\#)\\[\\]{}\",'`;\\s][^()\\[\\]{}\",'`;\\s]*)?\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "storage.struct.racket"
              },
              "2": {
                "name": "entity.name.struct.racket"
              },
              "3": {
                "name": "punctuation.section.fields.begin.racket"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.fields.end.racket"
              }
            },
            "name": "meta.struct.fields.racket",
            "patterns": [
              {
                "include": "#comment"
              },
              {
                "include": "#default-args-struct"
              },
              {
                "include": "#struct-field"
              }
            ]
          },
          {
            "begin": "(?<=[(\\[{])\\s*(struct)\\s+([^(\\#)\\[\\]{}\",'`;\\s][^()\\[\\]{}\",'`;\\s]*)(?:\\s+[^(\\#)\\[\\]{}\",'`;\\s][^()\\[\\]{}\",'`;\\s]*)?\\s*(\\[)",
            "beginCaptures": {
              "1": {
                "name": "storage.struct.racket"
              },
              "2": {
                "name": "entity.name.struct.racket"
              },
              "3": {
                "name": "punctuation.section.fields.begin.racket"
              }
            },
            "end": "\\]",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.fields.end.racket"
              }
            },
            "name": "meta.struct.fields.racket",
            "patterns": [
              {
                "include": "#default-args-struct"
              },
              {
                "include": "#struct-field"
              }
            ]
          },
          {
            "begin": "(?<=[(\\[{])\\s*(struct)\\s+([^(\\#)\\[\\]{}\",'`;\\s][^()\\[\\]{}\",'`;\\s]*)(?:\\s+[^(\\#)\\[\\]{}\",'`;\\s][^()\\[\\]{}\",'`;\\s]*)?\\s*(\\{)",
            "beginCaptures": {
              "1": {
                "name": "storage.struct.racket"
              },
              "2": {
                "name": "entity.name.struct.racket"
              },
              "3": {
                "name": "punctuation.section.fields.begin.racket"
              }
            },
            "end": "}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.fields.end.racket"
              }
            },
            "name": "meta.struct.fields.racket",
            "patterns": [
              {
                "include": "#default-args-struct"
              },
              {
                "include": "#struct-field"
              }
            ]
          }
        ]
      },
      "struct-field": {
        "patterns": [
          {
            "begin": "(?<=^|[()\\[\\]{}\",'`;\\s])(\\|)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.verbatim.begin.racket"
              }
            },
            "contentName": "variable.other.member.racket",
            "end": "\\|",
            "endCaptures": {
              "0": {
                "name": "punctuation.verbatim.end.racket"
              }
            }
          },
          {
            "begin": "(?<=^|[()\\[\\]{}\",'`;\\s])(\\#%|\\\\\\ |[^\\#()\\[\\]{}\",'`;\\s])",
            "beginCaptures": {
              "1": {
                "name": "variable.other.member.racket"
              }
            },
            "contentName": "variable.other.member.racket",
            "end": "(?=[()\\[\\]{}\",'`;\\s])",
            "patterns": [
              {
                "match": "\\\\ "
              },
              {
                "begin": "\\|",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.verbatim.begin.racket"
                  }
                },
                "end": "\\|",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.verbatim.end.racket"
                  }
                }
              }
            ]
          }
        ]
      },
      "symbol": {
        "patterns": [
          {
            "begin": "(?<=^|[()\\[\\]{}\",;\\s])(?:`|')+(\\|)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.verbatim.begin.racket"
              }
            },
            "end": "\\|",
            "endCaptures": {
              "0": {
                "name": "punctuation.verbatim.end.racket"
              }
            },
            "name": "string.quoted.single.racket"
          },
          {
            "begin": "(?<=^|[()\\[\\]{}\",;\\s])(?:`|')+(?:\\#%|\\\\\\ |[^\\#()\\[\\]{}\",'`;\\s])",
            "end": "(?=[()\\[\\]{}\",'`;\\s])",
            "name": "string.quoted.single.racket",
            "patterns": [
              {
                "match": "\\\\ "
              },
              {
                "begin": "\\|",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.verbatim.begin.racket"
                  }
                },
                "end": "\\|",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.verbatim.end.racket"
                  }
                }
              }
            ]
          }
        ]
      },
      "variable": {
        "patterns": [
          {
            "begin": "(?<=^|[()\\[\\]{}\",'`;\\s])(\\|)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.verbatim.begin.racket"
              }
            },
            "end": "\\|",
            "endCaptures": {
              "0": {
                "name": "punctuation.verbatim.end.racket"
              }
            }
          },
          {
            "begin": "(?<=^|[()\\[\\]{}\",'`;\\s])(?:\\#%|\\\\\\ |[^\\#()\\[\\]{}\",'`;\\s])",
            "end": "(?=[()\\[\\]{}\",'`;\\s])",
            "patterns": [
              {
                "match": "\\\\ "
              },
              {
                "begin": "\\|",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.verbatim.begin.racket"
                  }
                },
                "end": "\\|",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.verbatim.end.racket"
                  }
                }
              }
            ]
          }
        ]
      },
      "vector": {
        "patterns": [
          {
            "begin": "\\#(?:fl|Fl|fx|Fx)?[0-9]*\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.vector.begin.racket"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.vector.end.racket"
              }
            },
            "name": "meta.vector.racket",
            "patterns": [
              {
                "include": "$base"
              }
            ]
          },
          {
            "begin": "\\#(?:fl|Fl|fx|Fx)?[0-9]*\\[",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.vector.begin.racket"
              }
            },
            "end": "\\]",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.vector.end.racket"
              }
            },
            "name": "meta.vector.racket",
            "patterns": [
              {
                "include": "$base"
              }
            ]
          },
          {
            "begin": "\\#(?:fl|Fl|fx|Fx)?[0-9]*{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.vector.begin.racket"
              }
            },
            "end": "}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.vector.end.racket"
              }
            },
            "name": "meta.vector.racket",
            "patterns": [
              {
                "include": "$base"
              }
            ]
          }
        ]
      }
    },
    "scopeName": "source.racket"
  }
])