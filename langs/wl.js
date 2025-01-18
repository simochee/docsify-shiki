/** Shiki Language: wl */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push([
  {
    "displayName": "Wolfram",
    "fileTypes": [
      "wl",
      "m",
      "wls",
      "wlt",
      "mt"
    ],
    "name": "wolfram",
    "patterns": [
      {
        "include": "#main"
      }
    ],
    "repository": {
      "association-group": {
        "begin": "<\\|",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.associations.begin.wolfram"
          }
        },
        "end": "\\|>",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.associations.end.wolfram"
          }
        },
        "name": "meta.associations.wolfram",
        "patterns": [
          {
            "include": "#expressions"
          }
        ]
      },
      "brace-group": {
        "begin": "\\{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.braces.begin.wolfram"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.braces.end.wolfram"
          }
        },
        "name": "meta.braces.wolfram",
        "patterns": [
          {
            "include": "#expressions"
          }
        ]
      },
      "bracket-group": {
        "begin": "::\\[|\\[",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.brackets.begin.wolfram"
          }
        },
        "end": "\\]",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.brackets.end.wolfram"
          }
        },
        "name": "meta.brackets.wolfram",
        "patterns": [
          {
            "include": "#expressions"
          }
        ]
      },
      "comments": {
        "patterns": [
          {
            "begin": "\\(\\*",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.comment.wolfram"
              }
            },
            "end": "\\*\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.comment.wolfram"
              }
            },
            "name": "comment.block",
            "patterns": [
              {
                "include": "#comments"
              }
            ]
          },
          {
            "match": "\\*\\)",
            "name": "invalid.illegal.stray-comment-end.wolfram"
          }
        ]
      },
      "escaped_character_symbols": {
        "patterns": [
          {
            "match": "System`\\\\\\[(?:F(?:ormalA|ormalAlpha|ormalB|ormalBeta|ormalC|ormalCapitalA|ormalCapitalAlpha|ormalCapitalB|ormalCapitalBeta|ormalCapitalC|ormalCapitalChi|ormalCapitalD|ormalCapitalDelta|ormalCapitalDigamma|ormalCapitalE|ormalCapitalEpsilon|ormalCapitalEta|ormalCapitalF|ormalCapitalG|ormalCapitalGamma|ormalCapitalH|ormalCapitalI|ormalCapitalIota|ormalCapitalJ|ormalCapitalK|ormalCapitalKappa|ormalCapitalKoppa|ormalCapitalL|ormalCapitalLambda|ormalCapitalM|ormalCapitalMu|ormalCapitalN|ormalCapitalNu|ormalCapitalO|ormalCapitalOmega|ormalCapitalOmicron|ormalCapitalP|ormalCapitalPhi|ormalCapitalPi|ormalCapitalPsi|ormalCapitalQ|ormalCapitalR|ormalCapitalRho|ormalCapitalS|ormalCapitalSampi|ormalCapitalSigma|ormalCapitalStigma|ormalCapitalT|ormalCapitalTau|ormalCapitalTheta|ormalCapitalU|ormalCapitalUpsilon|ormalCapitalV|ormalCapitalW|ormalCapitalX|ormalCapitalXi|ormalCapitalY|ormalCapitalZ|ormalCapitalZeta|ormalChi|ormalCurlyCapitalUpsilon|ormalCurlyEpsilon|ormalCurlyKappa|ormalCurlyPhi|ormalCurlyPi|ormalCurlyRho|ormalCurlyTheta|ormalD|ormalDelta|ormalDigamma|ormalE|ormalEpsilon|ormalEta|ormalF|ormalFinalSigma|ormalG|ormalGamma|ormalH|ormalI|ormalIota|ormalJ|ormalK|ormalKappa|ormalKoppa|ormalL|ormalLambda|ormalM|ormalMu|ormalN|ormalNu|ormalO|ormalOmega|ormalOmicron|ormalP|ormalPhi|ormalPi|ormalPsi|ormalQ|ormalR|ormalRho|ormalS|ormalSampi|ormalScriptA|ormalScriptB|ormalScriptC|ormalScriptCapitalA|ormalScriptCapitalB|ormalScriptCapitalC|ormalScriptCapitalD|ormalScriptCapitalE|ormalScriptCapitalF|ormalScriptCapitalG|ormalScriptCapitalH|ormalScriptCapitalI|ormalScriptCapitalJ|ormalScriptCapitalK|ormalScriptCapitalL|ormalScriptCapitalM|ormalScriptCapitalN|ormalScriptCapitalO|ormalScriptCapitalP|ormalScriptCapitalQ|ormalScriptCapitalR|ormalScriptCapitalS|ormalScriptCapitalT|ormalScriptCapitalU|ormalScriptCapitalV|ormalScriptCapitalW|ormalScriptCapitalX|ormalScriptCapitalY|ormalScriptCapitalZ|ormalScriptD|ormalScriptE|ormalScriptF|ormalScriptG|ormalScriptH|ormalScriptI|ormalScriptJ|ormalScriptK|ormalScriptL|ormalScriptM|ormalScriptN|ormalScriptO|ormalScriptP|ormalScriptQ|ormalScriptR|ormalScriptS|ormalScriptT|ormalScriptU|ormalScriptV|ormalScriptW|ormalScriptX|ormalScriptY|ormalScriptZ|ormalSigma|ormalStigma|ormalT|ormalTau|ormalTheta|ormalU|ormalUpsilon|ormalV|ormalW|ormalX|ormalXi|ormalY|ormalZ|ormalZeta))\\](?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`\\\\\\[(?:S(?:ystemsModelDelay))\\](?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "\\\\\\[(?:F(?:ormalA|ormalAlpha|ormalB|ormalBeta|ormalC|ormalCapitalA|ormalCapitalAlpha|ormalCapitalB|ormalCapitalBeta|ormalCapitalC|ormalCapitalChi|ormalCapitalD|ormalCapitalDelta|ormalCapitalDigamma|ormalCapitalE|ormalCapitalEpsilon|ormalCapitalEta|ormalCapitalF|ormalCapitalG|ormalCapitalGamma|ormalCapitalH|ormalCapitalI|ormalCapitalIota|ormalCapitalJ|ormalCapitalK|ormalCapitalKappa|ormalCapitalKoppa|ormalCapitalL|ormalCapitalLambda|ormalCapitalM|ormalCapitalMu|ormalCapitalN|ormalCapitalNu|ormalCapitalO|ormalCapitalOmega|ormalCapitalOmicron|ormalCapitalP|ormalCapitalPhi|ormalCapitalPi|ormalCapitalPsi|ormalCapitalQ|ormalCapitalR|ormalCapitalRho|ormalCapitalS|ormalCapitalSampi|ormalCapitalSigma|ormalCapitalStigma|ormalCapitalT|ormalCapitalTau|ormalCapitalTheta|ormalCapitalU|ormalCapitalUpsilon|ormalCapitalV|ormalCapitalW|ormalCapitalX|ormalCapitalXi|ormalCapitalY|ormalCapitalZ|ormalCapitalZeta|ormalChi|ormalCurlyCapitalUpsilon|ormalCurlyEpsilon|ormalCurlyKappa|ormalCurlyPhi|ormalCurlyPi|ormalCurlyRho|ormalCurlyTheta|ormalD|ormalDelta|ormalDigamma|ormalE|ormalEpsilon|ormalEta|ormalF|ormalFinalSigma|ormalG|ormalGamma|ormalH|ormalI|ormalIota|ormalJ|ormalK|ormalKappa|ormalKoppa|ormalL|ormalLambda|ormalM|ormalMu|ormalN|ormalNu|ormalO|ormalOmega|ormalOmicron|ormalP|ormalPhi|ormalPi|ormalPsi|ormalQ|ormalR|ormalRho|ormalS|ormalSampi|ormalScriptA|ormalScriptB|ormalScriptC|ormalScriptCapitalA|ormalScriptCapitalB|ormalScriptCapitalC|ormalScriptCapitalD|ormalScriptCapitalE|ormalScriptCapitalF|ormalScriptCapitalG|ormalScriptCapitalH|ormalScriptCapitalI|ormalScriptCapitalJ|ormalScriptCapitalK|ormalScriptCapitalL|ormalScriptCapitalM|ormalScriptCapitalN|ormalScriptCapitalO|ormalScriptCapitalP|ormalScriptCapitalQ|ormalScriptCapitalR|ormalScriptCapitalS|ormalScriptCapitalT|ormalScriptCapitalU|ormalScriptCapitalV|ormalScriptCapitalW|ormalScriptCapitalX|ormalScriptCapitalY|ormalScriptCapitalZ|ormalScriptD|ormalScriptE|ormalScriptF|ormalScriptG|ormalScriptH|ormalScriptI|ormalScriptJ|ormalScriptK|ormalScriptL|ormalScriptM|ormalScriptN|ormalScriptO|ormalScriptP|ormalScriptQ|ormalScriptR|ormalScriptS|ormalScriptT|ormalScriptU|ormalScriptV|ormalScriptW|ormalScriptX|ormalScriptY|ormalScriptZ|ormalSigma|ormalStigma|ormalT|ormalTau|ormalTheta|ormalU|ormalUpsilon|ormalV|ormalW|ormalX|ormalXi|ormalY|ormalZ|ormalZeta))\\](?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "\\\\\\[(?:S(?:ystemsModelDelay))\\](?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "\\\\\\[(?:D(?:egree))\\](?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "\\\\\\[(?:E(?:xponentialE))\\](?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "\\\\\\[(?:I(?:maginaryI|maginaryJ|nfinity))\\](?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "\\\\\\[(?:P(?:i))\\](?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          }
        ]
      },
      "escaped_characters": {
        "patterns": [
          {
            "match": "\\\\[!%&()*+/@^_` ]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:A(?:kuz|ndy))\\]",
            "name": "donothighlight.constant.character.escape.undocumented"
          },
          {
            "match": "\\\\\\[(?:C(?:ontinuedFractionK|url))\\]",
            "name": "donothighlight.constant.character.escape.undocumented"
          },
          {
            "match": "\\\\\\[(?:D(?:ivergence|ivisionSlash))\\]",
            "name": "donothighlight.constant.character.escape.undocumented"
          },
          {
            "match": "\\\\\\[(?:E(?:xpectationE))\\]",
            "name": "donothighlight.constant.character.escape.undocumented"
          },
          {
            "match": "\\\\\\[(?:F(?:reeformPrompt))\\]",
            "name": "donothighlight.constant.character.escape.undocumented"
          },
          {
            "match": "\\\\\\[(?:G(?:radient))\\]",
            "name": "donothighlight.constant.character.escape.undocumented"
          },
          {
            "match": "\\\\\\[(?:L(?:aplacian))\\]",
            "name": "donothighlight.constant.character.escape.undocumented"
          },
          {
            "match": "\\\\\\[(?:M(?:inus|oon))\\]",
            "name": "donothighlight.constant.character.escape.undocumented"
          },
          {
            "match": "\\\\\\[(?:N(?:umberComma))\\]",
            "name": "donothighlight.constant.character.escape.undocumented"
          },
          {
            "match": "\\\\\\[(?:P(?:ageBreakAbove|ageBreakBelow|robabilityPr))\\]",
            "name": "donothighlight.constant.character.escape.undocumented"
          },
          {
            "match": "\\\\\\[(?:S(?:pooky|tepperDown|tepperLeft|tepperRight|tepperUp|un))\\]",
            "name": "donothighlight.constant.character.escape.undocumented"
          },
          {
            "match": "\\\\\\[(?:U(?:nknownGlyph))\\]",
            "name": "donothighlight.constant.character.escape.undocumented"
          },
          {
            "match": "\\\\\\[(?:V(?:illa))\\]",
            "name": "donothighlight.constant.character.escape.undocumented"
          },
          {
            "match": "\\\\\\[(?:W(?:olframAlphaPrompt))\\]",
            "name": "donothighlight.constant.character.escape.undocumented"
          },
          {
            "match": "\\\\\\[(?:C(?:OMPATIBILITYKanjiSpace|OMPATIBILITYNoBreak))\\]",
            "name": "invalid.illegal.unsupported"
          },
          {
            "match": "\\\\\\[(?:I(?:nlinePart))\\]",
            "name": "invalid.illegal.unsupported"
          },
          {
            "match": "\\\\\\[(?:A(?:Acute|Bar|Cup|DoubleDot|E|Grave|Hat|Ring|Tilde|leph|liasDelimiter|liasIndicator|lignmentMarker|lpha|ltKey|nd|ngle|ngstrom|pplication|quariusSign|riesSign|scendingEllipsis|utoLeftMatch|utoOperand|utoPlaceholder|utoRightMatch|utoSpace))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:B(?:ackslash|eamedEighthNote|eamedSixteenthNote|ecause|et|eta|lackBishop|lackKing|lackKnight|lackPawn|lackQueen|lackRook|reve|ullet))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:C(?:Acute|Cedilla|Hacek|ancerSign|ap|apitalAAcute|apitalABar|apitalACup|apitalADoubleDot|apitalAE|apitalAGrave|apitalAHat|apitalARing|apitalATilde|apitalAlpha|apitalBeta|apitalCAcute|apitalCCedilla|apitalCHacek|apitalChi|apitalDHacek|apitalDelta|apitalDifferentialD|apitalDigamma|apitalEAcute|apitalEBar|apitalECup|apitalEDoubleDot|apitalEGrave|apitalEHacek|apitalEHat|apitalEpsilon|apitalEta|apitalEth|apitalGamma|apitalIAcute|apitalICup|apitalIDoubleDot|apitalIGrave|apitalIHat|apitalIota|apitalKappa|apitalKoppa|apitalLSlash|apitalLambda|apitalMu|apitalNHacek|apitalNTilde|apitalNu|apitalOAcute|apitalODoubleAcute|apitalODoubleDot|apitalOE|apitalOGrave|apitalOHat|apitalOSlash|apitalOTilde|apitalOmega|apitalOmicron|apitalPhi|apitalPi|apitalPsi|apitalRHacek|apitalRho|apitalSHacek|apitalSampi|apitalSigma|apitalStigma|apitalTHacek|apitalTau|apitalTheta|apitalThorn|apitalUAcute|apitalUDoubleAcute|apitalUDoubleDot|apitalUGrave|apitalUHat|apitalURing|apitalUpsilon|apitalXi|apitalYAcute|apitalZHacek|apitalZeta|apricornSign|edilla|ent|enterDot|enterEllipsis|heckedBox|heckmark|heckmarkedBox|hi|ircleDot|ircleMinus|irclePlus|ircleTimes|lockwiseContourIntegral|loseCurlyDoubleQuote|loseCurlyQuote|loverLeaf|lubSuit|olon|ommandKey|onditioned|ongruent|onjugate|onjugateTranspose|onstantC|ontinuation|ontourIntegral|ontrolKey|oproduct|opyright|ounterClockwiseContourIntegral|ross|ubeRoot|up|upCap|urlyCapitalUpsilon|urlyEpsilon|urlyKappa|urlyPhi|urlyPi|urlyRho|urlyTheta|urrency))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:D(?:Hacek|agger|alet|ash|egree|el|eleteKey|elta|escendingEllipsis|iameter|iamond|iamondSuit|ifferenceDelta|ifferentialD|igamma|irectedEdge|iscreteRatio|iscreteShift|iscretionaryHyphen|iscretionaryLineSeparator|iscretionaryPageBreakAbove|iscretionaryPageBreakBelow|iscretionaryParagraphSeparator|istributed|ivide|ivides|otEqual|otlessI|otlessJ|ottedSquare|oubleContourIntegral|oubleDagger|oubleDot|oubleDownArrow|oubleLeftArrow|oubleLeftRightArrow|oubleLeftTee|oubleLongLeftArrow|oubleLongLeftRightArrow|oubleLongRightArrow|oublePrime|oubleRightArrow|oubleRightTee|oubleStruckA|oubleStruckB|oubleStruckC|oubleStruckCapitalA|oubleStruckCapitalB|oubleStruckCapitalC|oubleStruckCapitalD|oubleStruckCapitalE|oubleStruckCapitalF|oubleStruckCapitalG|oubleStruckCapitalH|oubleStruckCapitalI|oubleStruckCapitalJ|oubleStruckCapitalK|oubleStruckCapitalL|oubleStruckCapitalM|oubleStruckCapitalN|oubleStruckCapitalO|oubleStruckCapitalP|oubleStruckCapitalQ|oubleStruckCapitalR|oubleStruckCapitalS|oubleStruckCapitalT|oubleStruckCapitalU|oubleStruckCapitalV|oubleStruckCapitalW|oubleStruckCapitalX|oubleStruckCapitalY|oubleStruckCapitalZ|oubleStruckD|oubleStruckE|oubleStruckEight|oubleStruckF|oubleStruckFive|oubleStruckFour|oubleStruckG|oubleStruckH|oubleStruckI|oubleStruckJ|oubleStruckK|oubleStruckL|oubleStruckM|oubleStruckN|oubleStruckNine|oubleStruckO|oubleStruckOne|oubleStruckP|oubleStruckQ|oubleStruckR|oubleStruckS|oubleStruckSeven|oubleStruckSix|oubleStruckT|oubleStruckThree|oubleStruckTwo|oubleStruckU|oubleStruckV|oubleStruckW|oubleStruckX|oubleStruckY|oubleStruckZ|oubleStruckZero|oubleUpArrow|oubleUpDownArrow|oubleVerticalBar|oubledGamma|oubledPi|ownArrow|ownArrowBar|ownArrowUpArrow|ownBreve|ownExclamation|ownLeftRightVector|ownLeftTeeVector|ownLeftVector|ownLeftVectorBar|ownPointer|ownQuestion|ownRightTeeVector|ownRightVector|ownRightVectorBar|ownTee|ownTeeArrow))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:E(?:Acute|Bar|Cup|DoubleDot|Grave|Hacek|Hat|arth|ighthNote|lement|llipsis|mptyCircle|mptyDiamond|mptyDownTriangle|mptyRectangle|mptySet|mptySmallCircle|mptySmallSquare|mptySquare|mptyUpTriangle|mptyVerySmallSquare|nterKey|ntityEnd|ntityStart|psilon|qual|qualTilde|quilibrium|quivalent|rrorIndicator|scapeKey|ta|th|uro|xists|xponentialE))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:F(?:iLigature|illedCircle|illedDiamond|illedDownTriangle|illedLeftTriangle|illedRectangle|illedRightTriangle|illedSmallCircle|illedSmallSquare|illedSquare|illedUpTriangle|illedVerySmallSquare|inalSigma|irstPage|ivePointedStar|lLigature|lat|lorin|orAll|ormalA|ormalAlpha|ormalB|ormalBeta|ormalC|ormalCapitalA|ormalCapitalAlpha|ormalCapitalB|ormalCapitalBeta|ormalCapitalC|ormalCapitalChi|ormalCapitalD|ormalCapitalDelta|ormalCapitalDigamma|ormalCapitalE|ormalCapitalEpsilon|ormalCapitalEta|ormalCapitalF|ormalCapitalG|ormalCapitalGamma|ormalCapitalH|ormalCapitalI|ormalCapitalIota|ormalCapitalJ|ormalCapitalK|ormalCapitalKappa|ormalCapitalKoppa|ormalCapitalL|ormalCapitalLambda|ormalCapitalM|ormalCapitalMu|ormalCapitalN|ormalCapitalNu|ormalCapitalO|ormalCapitalOmega|ormalCapitalOmicron|ormalCapitalP|ormalCapitalPhi|ormalCapitalPi|ormalCapitalPsi|ormalCapitalQ|ormalCapitalR|ormalCapitalRho|ormalCapitalS|ormalCapitalSampi|ormalCapitalSigma|ormalCapitalStigma|ormalCapitalT|ormalCapitalTau|ormalCapitalTheta|ormalCapitalU|ormalCapitalUpsilon|ormalCapitalV|ormalCapitalW|ormalCapitalX|ormalCapitalXi|ormalCapitalY|ormalCapitalZ|ormalCapitalZeta|ormalChi|ormalCurlyCapitalUpsilon|ormalCurlyEpsilon|ormalCurlyKappa|ormalCurlyPhi|ormalCurlyPi|ormalCurlyRho|ormalCurlyTheta|ormalD|ormalDelta|ormalDigamma|ormalE|ormalEpsilon|ormalEta|ormalF|ormalFinalSigma|ormalG|ormalGamma|ormalH|ormalI|ormalIota|ormalJ|ormalK|ormalKappa|ormalKoppa|ormalL|ormalLambda|ormalM|ormalMu|ormalN|ormalNu|ormalO|ormalOmega|ormalOmicron|ormalP|ormalPhi|ormalPi|ormalPsi|ormalQ|ormalR|ormalRho|ormalS|ormalSampi|ormalScriptA|ormalScriptB|ormalScriptC|ormalScriptCapitalA|ormalScriptCapitalB|ormalScriptCapitalC|ormalScriptCapitalD|ormalScriptCapitalE|ormalScriptCapitalF|ormalScriptCapitalG|ormalScriptCapitalH|ormalScriptCapitalI|ormalScriptCapitalJ|ormalScriptCapitalK|ormalScriptCapitalL|ormalScriptCapitalM|ormalScriptCapitalN|ormalScriptCapitalO|ormalScriptCapitalP|ormalScriptCapitalQ|ormalScriptCapitalR|ormalScriptCapitalS|ormalScriptCapitalT|ormalScriptCapitalU|ormalScriptCapitalV|ormalScriptCapitalW|ormalScriptCapitalX|ormalScriptCapitalY|ormalScriptCapitalZ|ormalScriptD|ormalScriptE|ormalScriptF|ormalScriptG|ormalScriptH|ormalScriptI|ormalScriptJ|ormalScriptK|ormalScriptL|ormalScriptM|ormalScriptN|ormalScriptO|ormalScriptP|ormalScriptQ|ormalScriptR|ormalScriptS|ormalScriptT|ormalScriptU|ormalScriptV|ormalScriptW|ormalScriptX|ormalScriptY|ormalScriptZ|ormalSigma|ormalStigma|ormalT|ormalTau|ormalTheta|ormalU|ormalUpsilon|ormalV|ormalW|ormalX|ormalXi|ormalY|ormalZ|ormalZeta|reakedSmiley|unction))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:G(?:amma|eminiSign|imel|othicA|othicB|othicC|othicCapitalA|othicCapitalB|othicCapitalC|othicCapitalD|othicCapitalE|othicCapitalF|othicCapitalG|othicCapitalH|othicCapitalI|othicCapitalJ|othicCapitalK|othicCapitalL|othicCapitalM|othicCapitalN|othicCapitalO|othicCapitalP|othicCapitalQ|othicCapitalR|othicCapitalS|othicCapitalT|othicCapitalU|othicCapitalV|othicCapitalW|othicCapitalX|othicCapitalY|othicCapitalZ|othicD|othicE|othicEight|othicF|othicFive|othicFour|othicG|othicH|othicI|othicJ|othicK|othicL|othicM|othicN|othicNine|othicO|othicOne|othicP|othicQ|othicR|othicS|othicSeven|othicSix|othicT|othicThree|othicTwo|othicU|othicV|othicW|othicX|othicY|othicZ|othicZero|rayCircle|raySquare|reaterEqual|reaterEqualLess|reaterFullEqual|reaterGreater|reaterLess|reaterSlantEqual|reaterTilde))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:H(?:Bar|acek|appySmiley|eartSuit|ermitianConjugate|orizontalLine|umpDownHump|umpEqual|yphen))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:I(?:Acute|Cup|DoubleDot|Grave|Hat|maginaryI|maginaryJ|mplicitPlus|mplies|ndentingNewLine|nfinity|ntegral|ntersection|nvisibleApplication|nvisibleComma|nvisiblePostfixScriptBase|nvisiblePrefixScriptBase|nvisibleSpace|nvisibleTimes|ota))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:J(?:upiter))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:K(?:appa|ernelIcon|eyBar|oppa))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:L(?:Slash|ambda|astPage|eftAngleBracket|eftArrow|eftArrowBar|eftArrowRightArrow|eftAssociation|eftBracketingBar|eftCeiling|eftDoubleBracket|eftDoubleBracketingBar|eftDownTeeVector|eftDownVector|eftDownVectorBar|eftFloor|eftGuillemet|eftModified|eftPointer|eftRightArrow|eftRightVector|eftSkeleton|eftTee|eftTeeArrow|eftTeeVector|eftTriangle|eftTriangleBar|eftTriangleEqual|eftUpDownVector|eftUpTeeVector|eftUpVector|eftUpVectorBar|eftVector|eftVectorBar|eoSign|essEqual|essEqualGreater|essFullEqual|essGreater|essLess|essSlantEqual|essTilde|etterSpace|ibraSign|ightBulb|imit|ineSeparator|ongDash|ongEqual|ongLeftArrow|ongLeftRightArrow|ongRightArrow|owerLeftArrow|owerRightArrow))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:M(?:ars|athematicaIcon|axLimit|easuredAngle|ediumSpace|ercury|ho|icro|inLimit|inusPlus|od1Key|od2Key|u))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:N(?:Hacek|Tilde|and|atural|egativeMediumSpace|egativeThickSpace|egativeThinSpace|egativeVeryThinSpace|eptune|estedGreaterGreater|estedLessLess|eutralSmiley|ewLine|oBreak|onBreakingSpace|or|ot|otCongruent|otCupCap|otDoubleVerticalBar|otElement|otEqual|otEqualTilde|otExists|otGreater|otGreaterEqual|otGreaterFullEqual|otGreaterGreater|otGreaterLess|otGreaterSlantEqual|otGreaterTilde|otHumpDownHump|otHumpEqual|otLeftTriangle|otLeftTriangleBar|otLeftTriangleEqual|otLess|otLessEqual|otLessFullEqual|otLessGreater|otLessLess|otLessSlantEqual|otLessTilde|otNestedGreaterGreater|otNestedLessLess|otPrecedes|otPrecedesEqual|otPrecedesSlantEqual|otPrecedesTilde|otReverseElement|otRightTriangle|otRightTriangleBar|otRightTriangleEqual|otSquareSubset|otSquareSubsetEqual|otSquareSuperset|otSquareSupersetEqual|otSubset|otSubsetEqual|otSucceeds|otSucceedsEqual|otSucceedsSlantEqual|otSucceedsTilde|otSuperset|otSupersetEqual|otTilde|otTildeEqual|otTildeFullEqual|otTildeTilde|otVerticalBar|u|ull|umberSign))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:O(?:Acute|DoubleAcute|DoubleDot|E|Grave|Hat|Slash|Tilde|mega|micron|penCurlyDoubleQuote|penCurlyQuote|ptionKey|r|verBrace|verBracket|verParenthesis))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:P(?:aragraph|aragraphSeparator|artialD|ermutationProduct|erpendicular|hi|i|iecewise|iscesSign|laceholder|lusMinus|luto|recedes|recedesEqual|recedesSlantEqual|recedesTilde|rime|roduct|roportion|roportional|si))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:Q(?:uarterNote))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:R(?:Hacek|awAmpersand|awAt|awBackquote|awBackslash|awColon|awComma|awDash|awDollar|awDot|awDoubleQuote|awEqual|awEscape|awExclamation|awGreater|awLeftBrace|awLeftBracket|awLeftParenthesis|awLess|awNumberSign|awPercent|awPlus|awQuestion|awQuote|awReturn|awRightBrace|awRightBracket|awRightParenthesis|awSemicolon|awSlash|awSpace|awStar|awTab|awTilde|awUnderscore|awVerticalBar|awWedge|egisteredTrademark|eturnIndicator|eturnKey|everseDoublePrime|everseElement|everseEquilibrium|eversePrime|everseUpEquilibrium|ho|ightAngle|ightAngleBracket|ightArrow|ightArrowBar|ightArrowLeftArrow|ightAssociation|ightBracketingBar|ightCeiling|ightDoubleBracket|ightDoubleBracketingBar|ightDownTeeVector|ightDownVector|ightDownVectorBar|ightFloor|ightGuillemet|ightModified|ightPointer|ightSkeleton|ightTee|ightTeeArrow|ightTeeVector|ightTriangle|ightTriangleBar|ightTriangleEqual|ightUpDownVector|ightUpTeeVector|ightUpVector|ightUpVectorBar|ightVector|ightVectorBar|oundImplies|oundSpaceIndicator|ule|uleDelayed|upee))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:S(?:Hacek|Z|adSmiley|agittariusSign|ampi|aturn|corpioSign|criptA|criptB|criptC|criptCapitalA|criptCapitalB|criptCapitalC|criptCapitalD|criptCapitalE|criptCapitalF|criptCapitalG|criptCapitalH|criptCapitalI|criptCapitalJ|criptCapitalK|criptCapitalL|criptCapitalM|criptCapitalN|criptCapitalO|criptCapitalP|criptCapitalQ|criptCapitalR|criptCapitalS|criptCapitalT|criptCapitalU|criptCapitalV|criptCapitalW|criptCapitalX|criptCapitalY|criptCapitalZ|criptD|criptDotlessI|criptDotlessJ|criptE|criptEight|criptF|criptFive|criptFour|criptG|criptH|criptI|criptJ|criptK|criptL|criptM|criptN|criptNine|criptO|criptOne|criptP|criptQ|criptR|criptS|criptSeven|criptSix|criptT|criptThree|criptTwo|criptU|criptV|criptW|criptX|criptY|criptZ|criptZero|ection|electionPlaceholder|hah|harp|hiftKey|hortDownArrow|hortLeftArrow|hortRightArrow|hortUpArrow|igma|ixPointedStar|keletonIndicator|mallCircle|paceIndicator|paceKey|padeSuit|panFromAbove|panFromBoth|panFromLeft|phericalAngle|qrt|quare|quareIntersection|quareSubset|quareSubsetEqual|quareSuperset|quareSupersetEqual|quareUnion|tar|terling|tigma|ubset|ubsetEqual|ucceeds|ucceedsEqual|ucceedsSlantEqual|ucceedsTilde|uchThat|um|uperset|upersetEqual|ystemEnterKey|ystemsModelDelay))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:T(?:Hacek|abKey|au|aurusSign|ensorProduct|ensorWedge|herefore|heta|hickSpace|hinSpace|horn|ilde|ildeEqual|ildeFullEqual|ildeTilde|imes|rademark|ranspose|ripleDot|woWayRule))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:U(?:Acute|DoubleAcute|DoubleDot|Grave|Hat|Ring|nderBrace|nderBracket|nderParenthesis|ndirectedEdge|nion|nionPlus|pArrow|pArrowBar|pArrowDownArrow|pDownArrow|pEquilibrium|pPointer|pTee|pTeeArrow|pperLeftArrow|pperRightArrow|psilon|ranus))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:V(?:ectorGreater|ectorGreaterEqual|ectorLess|ectorLessEqual|ee|enus|erticalBar|erticalEllipsis|erticalLine|erticalSeparator|erticalTilde|eryThinSpace|irgoSign))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:W(?:arningSign|atchIcon|edge|eierstrassP|hiteBishop|hiteKing|hiteKnight|hitePawn|hiteQueen|hiteRook|olf|olframLanguageLogo|olframLanguageLogoCircle))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:X(?:i|nor|or))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:Y(?:Acute|DoubleDot|en))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:Z(?:Hacek|eta))\\]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\[(?:[$[:alpha:]][$[:alnum:]]*)?\\]?",
            "name": "invalid.illegal.BadLongName"
          },
          {
            "match": "\\\\(?:[$[:alpha:]][$[:alnum:]]*)\\]",
            "name": "invalid.illegal.BadLongName"
          },
          {
            "match": "\\\\:\\h{4}",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\:\\h{1,3}",
            "name": "invalid.illegal"
          },
          {
            "match": "\\\\\\.\\h{2}",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\.\\h{1}",
            "name": "invalid.illegal"
          },
          {
            "match": "\\\\\\|0\\h{5}",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\|10\\h{4}",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\\\|\\h{1,6}",
            "name": "invalid.illegal"
          },
          {
            "match": "\\\\[0-7]{3}",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "match": "\\\\[0-7]{1,2}",
            "name": "invalid.illegal"
          },
          {
            "match": "\\\\$",
            "name": "donothighlight.constant.character.escape punctuation.separator.continuation"
          },
          {
            "match": "\\\\.",
            "name": "invalid.illegal"
          }
        ]
      },
      "expressions": {
        "patterns": [
          {
            "include": "#comments"
          },
          {
            "include": "#escaped_character_symbols"
          },
          {
            "include": "#escaped_characters"
          },
          {
            "include": "#out"
          },
          {
            "include": "#slot"
          },
          {
            "include": "#literals"
          },
          {
            "include": "#groups"
          },
          {
            "include": "#stringifying-operators"
          },
          {
            "include": "#operators"
          },
          {
            "include": "#pattern-operators"
          },
          {
            "include": "#symbols"
          },
          {
            "match": "(?:!|&|'|\\*|\\+|,|-|\\.|/|:|;|<|=|>|\\?|@|\\\\|\\^|\\||~)",
            "name": "invalid.illegal"
          }
        ]
      },
      "groups": {
        "patterns": [
          {
            "match": "\\\\\\)",
            "name": "invalid.illegal.stray-linearsyntaxparens-end.wolfram"
          },
          {
            "match": "\\)",
            "name": "invalid.illegal.stray-parens-end.wolfram"
          },
          {
            "match": "\\[\\s+\\[",
            "name": "invalid.whitespace.Part.wolfram"
          },
          {
            "match": "\\]\\s+\\]",
            "name": "invalid.whitespace.Part.wolfram"
          },
          {
            "match": "\\]\\]",
            "name": "invalid.illegal.stray-parts-end.wolfram"
          },
          {
            "match": "\\]",
            "name": "invalid.illegal.stray-brackets-end.wolfram"
          },
          {
            "match": "\\}",
            "name": "invalid.illegal.stray-braces-end.wolfram"
          },
          {
            "match": "\\|>",
            "name": "invalid.illegal.stray-associations-end.wolfram"
          },
          {
            "include": "#linearsyntaxparen-group"
          },
          {
            "include": "#paren-group"
          },
          {
            "include": "#part-group"
          },
          {
            "include": "#bracket-group"
          },
          {
            "include": "#brace-group"
          },
          {
            "include": "#association-group"
          }
        ]
      },
      "linearsyntaxparen-group": {
        "begin": "\\\\\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.linearsyntaxparens.begin.wolfram"
          }
        },
        "end": "\\\\\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.linearsyntaxparens.end.wolfram"
          }
        },
        "name": "meta.linearsyntaxparens.wolfram",
        "patterns": [
          {
            "include": "#expressions"
          }
        ]
      },
      "literals": {
        "patterns": [
          {
            "include": "#numbers"
          },
          {
            "include": "#strings"
          }
        ]
      },
      "main": {
        "patterns": [
          {
            "include": "#shebang"
          },
          {
            "include": "#simple-toplevel-definitions"
          },
          {
            "include": "#expressions"
          }
        ]
      },
      "numbers": {
        "patterns": [
          {
            "match": "2\\^\\^(?:(?:0|1)+(?:\\.(?!\\.)(?:0|1)*)?+|\\.(?!\\.)(?:0|1)+)(?:``(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+)))(?:\\*\\^(?:-|\\+)?+\\d+)",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "2\\^\\^(?:(?:0|1)+(?:\\.(?!\\.)(?:0|1)*)?+|\\.(?!\\.)(?:0|1)+)(?:``(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+)))\\*\\^",
            "name": "invalid.illegal"
          },
          {
            "match": "2\\^\\^(?:(?:0|1)+(?:\\.(?!\\.)(?:0|1)*)?+|\\.(?!\\.)(?:0|1)+)(?:``(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+)))",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "2\\^\\^(?:(?:0|1)+(?:\\.(?!\\.)(?:0|1)*)?+|\\.(?!\\.)(?:0|1)+)``",
            "name": "invalid.illegal"
          },
          {
            "match": "2\\^\\^(?:(?:0|1)+(?:\\.(?!\\.)(?:0|1)*)?+|\\.(?!\\.)(?:0|1)+)(?:`(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+))?+)(?:\\*\\^(?:-|\\+)?+\\d+)",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "2\\^\\^(?:(?:0|1)+(?:\\.(?!\\.)(?:0|1)*)?+|\\.(?!\\.)(?:0|1)+)(?:`(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+))?+)\\*\\^",
            "name": "invalid.illegal"
          },
          {
            "match": "2\\^\\^(?:(?:0|1)+(?:\\.(?!\\.)(?:0|1)*)?+|\\.(?!\\.)(?:0|1)+)(?:`(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+))?+)",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "2\\^\\^(?:(?:0|1)+(?:\\.(?!\\.)(?:0|1)*)?+|\\.(?!\\.)(?:0|1)+)(?:\\*\\^(?:-|\\+)?+\\d+)",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "2\\^\\^(?:(?:0|1)+(?:\\.(?!\\.)(?:0|1)*)?+|\\.(?!\\.)(?:0|1)+)\\*\\^",
            "name": "invalid.illegal"
          },
          {
            "match": "2\\^\\^(?:(?:0|1)+(?:\\.(?!\\.)(?:0|1)*)?+|\\.(?!\\.)(?:0|1)+)",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "2\\^\\^",
            "name": "invalid.illegal"
          },
          {
            "match": "8\\^\\^(?:(?:0|1|2|3|4|5|6|7)+(?:\\.(?!\\.)(?:0|1|2|3|4|5|6|7)*)?+|\\.(?!\\.)(?:0|1|2|3|4|5|6|7)+)(?:``(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+)))(?:\\*\\^(?:-|\\+)?+\\d+)",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "8\\^\\^(?:(?:0|1|2|3|4|5|6|7)+(?:\\.(?!\\.)(?:0|1|2|3|4|5|6|7)*)?+|\\.(?!\\.)(?:0|1|2|3|4|5|6|7)+)(?:``(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+)))\\*\\^",
            "name": "invalid.illegal"
          },
          {
            "match": "8\\^\\^(?:(?:0|1|2|3|4|5|6|7)+(?:\\.(?!\\.)(?:0|1|2|3|4|5|6|7)*)?+|\\.(?!\\.)(?:0|1|2|3|4|5|6|7)+)(?:``(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+)))",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "8\\^\\^(?:(?:0|1|2|3|4|5|6|7)+(?:\\.(?!\\.)(?:0|1|2|3|4|5|6|7)*)?+|\\.(?!\\.)(?:0|1|2|3|4|5|6|7)+)``",
            "name": "invalid.illegal"
          },
          {
            "match": "8\\^\\^(?:(?:0|1|2|3|4|5|6|7)+(?:\\.(?!\\.)(?:0|1|2|3|4|5|6|7)*)?+|\\.(?!\\.)(?:0|1|2|3|4|5|6|7)+)(?:`(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+))?+)(?:\\*\\^(?:-|\\+)?+\\d+)",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "8\\^\\^(?:(?:0|1|2|3|4|5|6|7)+(?:\\.(?!\\.)(?:0|1|2|3|4|5|6|7)*)?+|\\.(?!\\.)(?:0|1|2|3|4|5|6|7)+)(?:`(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+))?+)\\*\\^",
            "name": "invalid.illegal"
          },
          {
            "match": "8\\^\\^(?:(?:0|1|2|3|4|5|6|7)+(?:\\.(?!\\.)(?:0|1|2|3|4|5|6|7)*)?+|\\.(?!\\.)(?:0|1|2|3|4|5|6|7)+)(?:`(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+))?+)",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "8\\^\\^(?:(?:0|1|2|3|4|5|6|7)+(?:\\.(?!\\.)(?:0|1|2|3|4|5|6|7)*)?+|\\.(?!\\.)(?:0|1|2|3|4|5|6|7)+)(?:\\*\\^(?:-|\\+)?+\\d+)",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "8\\^\\^(?:(?:0|1|2|3|4|5|6|7)+(?:\\.(?!\\.)(?:0|1|2|3|4|5|6|7)*)?+|\\.(?!\\.)(?:0|1|2|3|4|5|6|7)+)\\*\\^",
            "name": "invalid.illegal"
          },
          {
            "match": "8\\^\\^(?:(?:0|1|2|3|4|5|6|7)+(?:\\.(?!\\.)(?:0|1|2|3|4|5|6|7)*)?+|\\.(?!\\.)(?:0|1|2|3|4|5|6|7)+)",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "8\\^\\^",
            "name": "invalid.illegal"
          },
          {
            "match": "16\\^\\^(?:\\h+(?:\\.(?!\\.)\\h*)?+|\\.(?!\\.)\\h+)(?:``(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+)))(?:\\*\\^(?:-|\\+)?+\\d+)",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "16\\^\\^(?:\\h+(?:\\.(?!\\.)\\h*)?+|\\.(?!\\.)\\h+)(?:``(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+)))\\*\\^",
            "name": "invalid.illegal"
          },
          {
            "match": "16\\^\\^(?:\\h+(?:\\.(?!\\.)\\h*)?+|\\.(?!\\.)\\h+)(?:``(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+)))",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "16\\^\\^(?:\\h+(?:\\.(?!\\.)\\h*)?+|\\.(?!\\.)\\h+)``",
            "name": "invalid.illegal"
          },
          {
            "match": "16\\^\\^(?:\\h+(?:\\.(?!\\.)\\h*)?+|\\.(?!\\.)\\h+)(?:`(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+))?+)(?:\\*\\^(?:-|\\+)?+\\d+)",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "16\\^\\^(?:\\h+(?:\\.(?!\\.)\\h*)?+|\\.(?!\\.)\\h+)(?:`(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+))?+)\\*\\^",
            "name": "invalid.illegal"
          },
          {
            "match": "16\\^\\^(?:\\h+(?:\\.(?!\\.)\\h*)?+|\\.(?!\\.)\\h+)(?:`(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+))?+)",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "16\\^\\^(?:\\h+(?:\\.(?!\\.)\\h*)?+|\\.(?!\\.)\\h+)(?:\\*\\^(?:-|\\+)?+\\d+)",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "16\\^\\^(?:\\h+(?:\\.(?!\\.)\\h*)?+|\\.(?!\\.)\\h+)\\*\\^",
            "name": "invalid.illegal"
          },
          {
            "match": "16\\^\\^(?:\\h+(?:\\.(?!\\.)\\h*)?+|\\.(?!\\.)\\h+)",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "16\\^\\^",
            "name": "invalid.illegal"
          },
          {
            "match": "(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+)(?:``(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+)))(?:\\*\\^(?:-|\\+)?+\\d+)",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+)(?:``(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+)))\\*\\^",
            "name": "invalid.illegal"
          },
          {
            "match": "(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+)(?:``(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+)))",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+)``",
            "name": "invalid.illegal"
          },
          {
            "match": "(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+)(?:`(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+))?+)(?:\\*\\^(?:-|\\+)?+\\d+)",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+)(?:`(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+))?+)\\*\\^",
            "name": "invalid.illegal"
          },
          {
            "match": "(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+)(?:`(?:(?:-|\\+)?+(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+))?+)",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+)(?:\\*\\^(?:-|\\+)?+\\d+)",
            "name": "constant.numeric.wolfram"
          },
          {
            "match": "(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+)\\*\\^",
            "name": "invalid.illegal"
          },
          {
            "match": "(?:\\d+(?:\\.(?!\\.)\\d*)?+|\\.(?!\\.)\\d+)",
            "name": "constant.numeric.wolfram"
          }
        ]
      },
      "operators": {
        "patterns": [
          {
            "match": "(?:\\^:=)",
            "name": "keyword.operator.assignment.UpSetDelayed.wolfram"
          },
          {
            "match": "(?:\\^:)",
            "name": "invalid.illegal"
          },
          {
            "match": "(?:===)",
            "name": "keyword.operator.SameQ.wolfram"
          },
          {
            "match": "(?:=!=|\\.\\.\\.|//\\.|@@@|<->|//@)",
            "name": "keyword.operator.wolfram"
          },
          {
            "match": "(?:\\|->)",
            "name": "keyword.operator.Function.wolfram"
          },
          {
            "match": "(?://=)",
            "name": "keyword.operator.assignment.ApplyTo.wolfram"
          },
          {
            "match": "(?:--|\\+\\+)",
            "name": "keyword.operator.arithmetic.wolfram"
          },
          {
            "match": "(?:\\|\\||&&)",
            "name": "keyword.operator.logical.wolfram"
          },
          {
            "match": "(?::=)",
            "name": "keyword.operator.assignment.SetDelayed.wolfram"
          },
          {
            "match": "(?:\\^=)",
            "name": "keyword.operator.assignment.UpSet.wolfram"
          },
          {
            "match": "(?:/=)",
            "name": "keyword.operator.assignment.DivideBy.wolfram"
          },
          {
            "match": "(?:\\+=)",
            "name": "keyword.operator.assignment.AddTo.wolfram"
          },
          {
            "match": "(?:=\\s+\\.(?![0-9]))",
            "name": "invalid.whitespace.Unset.wolfram"
          },
          {
            "match": "(?:=\\.(?![0-9]))",
            "name": "keyword.operator.assignment.Unset.wolfram"
          },
          {
            "match": "(?:\\*=)",
            "name": "keyword.operator.assignment.TimesBy.wolfram"
          },
          {
            "match": "(?:-=)",
            "name": "keyword.operator.assignment.SubtractFrom.wolfram"
          },
          {
            "match": "(?:/:)",
            "name": "keyword.operator.assignment.Tag.wolfram"
          },
          {
            "match": "(?:;;)$",
            "name": "invalid.endofline.Span.wolfram"
          },
          {
            "match": "(?:;;)",
            "name": "keyword.operator.Span.wolfram"
          },
          {
            "match": "(?:!=)",
            "name": "keyword.operator.Unequal.wolfram"
          },
          {
            "match": "(?:==)",
            "name": "keyword.operator.Equal.wolfram"
          },
          {
            "match": "(?:!!)",
            "name": "keyword.operator.BangBang.wolfram"
          },
          {
            "match": "(?:\\?\\?)",
            "name": "invalid.illegal.Information.wolfram"
          },
          {
            "match": "(?:<=|>=|\\.\\.|:>|<>|->|/@|/;|/\\.|//|/\\*|@@|@\\*|~~|\\*\\*)",
            "name": "keyword.operator.wolfram"
          },
          {
            "match": "(?:-|\\+|/|\\*)",
            "name": "keyword.operator.arithmetic.wolfram"
          },
          {
            "match": "(?:=)",
            "name": "keyword.operator.assignment.Set.wolfram"
          },
          {
            "match": "(?:<)",
            "name": "keyword.operator.Less.wolfram"
          },
          {
            "match": "(?:\\|)",
            "name": "keyword.operator.Alternatives.wolfram"
          },
          {
            "match": "(?:!)",
            "name": "keyword.operator.Bang.wolfram"
          },
          {
            "match": "(?:;)",
            "name": "keyword.operator.CompoundExpression.wolfram punctuation.terminator"
          },
          {
            "match": "(?:,)",
            "name": "keyword.operator.Comma.wolfram punctuation.separator"
          },
          {
            "match": "^(?:\\?)",
            "name": "invalid.startofline.Information.wolfram"
          },
          {
            "match": "(?:\\?)",
            "name": "keyword.operator.PatternTest.wolfram"
          },
          {
            "match": "(?:')",
            "name": "keyword.operator.Derivative.wolfram"
          },
          {
            "match": "(?:&)",
            "name": "keyword.operator.Function.wolfram"
          },
          {
            "match": "(?:>|\\^|\\.|:|@|~)",
            "name": "keyword.operator.wolfram"
          }
        ]
      },
      "out": {
        "patterns": [
          {
            "match": "%\\d+",
            "name": "keyword.other.Out.wolfram"
          },
          {
            "match": "%+",
            "name": "keyword.other.Out.wolfram"
          }
        ]
      },
      "paren-group": {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.parens.begin.wolfram"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.parens.end.wolfram"
          }
        },
        "name": "meta.parens.wolfram",
        "patterns": [
          {
            "include": "#expressions"
          }
        ]
      },
      "part-group": {
        "begin": "\\[\\[",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.parts.begin.wolfram"
          }
        },
        "end": "\\]\\]",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.parts.end.wolfram"
          }
        },
        "name": "meta.parts.wolfram",
        "patterns": [
          {
            "include": "#expressions"
          }
        ]
      },
      "pattern-operators": {
        "patterns": [
          {
            "match": "___",
            "name": "keyword.operator.BlankNullSequence.wolfram"
          },
          {
            "match": "__",
            "name": "keyword.operator.BlankSequence.wolfram"
          },
          {
            "match": "_\\.",
            "name": "keyword.operator.Optional.wolfram"
          },
          {
            "match": "_",
            "name": "keyword.operator.Blank.wolfram"
          }
        ]
      },
      "shebang": {
        "captures": {
          "1": {
            "name": "punctuation.definition.comment.wolfram"
          }
        },
        "match": "\\A(#!).*(?=$)",
        "name": "comment.line.shebang.wolfram"
      },
      "simple-toplevel-definitions": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "support.function.builtin.wolfram"
              },
              "2": {
                "name": "punctuation.section.brackets.begin.wolfram"
              },
              "3": {
                "name": "meta.function.wolfram entity.name.Context.wolfram"
              },
              "4": {
                "name": "meta.function.wolfram entity.name.function.wolfram"
              },
              "5": {
                "name": "punctuation.section.brackets.end.wolfram"
              },
              "6": {
                "name": "keyword.operator.assignment.wolfram"
              }
            },
            "match": "^\\s*(Attributes|Format|Options)\\s*(\\[)(`?(?:(?:[$[:alpha:]][$[:alnum:]]*)`)*)((?:[$[:alpha:]][$[:alnum:]]*))(\\])\\s*(:=|=(?!!|=|\\.))"
          },
          {
            "captures": {
              "1": {
                "name": "meta.function.wolfram entity.name.Context.wolfram"
              },
              "2": {
                "name": "meta.function.wolfram entity.name.function.wolfram"
              }
            },
            "match": "^\\s*(`?(?:(?:[$[:alpha:]][$[:alnum:]]*)`)*)((?:[$[:alpha:]][$[:alnum:]]*))(?=\\s*(\\[(?>[^\\[\\]]+|\\g<-1>)*\\])\\s*(?:/;.*)?(?::=|=(?!!|=|\\.)))"
          },
          {
            "captures": {
              "1": {
                "name": "meta.function.wolfram entity.name.Context.wolfram"
              },
              "2": {
                "name": "meta.function.wolfram entity.name.constant.wolfram"
              }
            },
            "match": "^\\s*(`?(?:(?:[$[:alpha:]][$[:alnum:]]*)`)*)((?:[$[:alpha:]][$[:alnum:]]*))(?=\\s*(?:/;.*)?(?::=|=(?!!|=|\\.)))"
          }
        ]
      },
      "slot": {
        "patterns": [
          {
            "match": "#[[:alpha:]][[:alnum:]]*",
            "name": "keyword.other.Slot.wolfram"
          },
          {
            "match": "##\\d*",
            "name": "keyword.other.SlotSequence.wolfram"
          },
          {
            "match": "#\\d*",
            "name": "keyword.other.Slot.wolfram"
          }
        ]
      },
      "string_escaped_characters": {
        "patterns": [
          {
            "match": "\\\\[bfnrt\\\"\\\\<>]",
            "name": "donothighlight.constant.character.escape"
          },
          {
            "include": "#escaped_characters"
          }
        ]
      },
      "stringifying-operators": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "keyword.operator.PutAppend.wolfram"
              }
            },
            "match": "(>>>)(?=\\s*\")"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.operator.PutAppend.wolfram"
              },
              "2": {
                "name": "string.unquoted.wolfram"
              }
            },
            "match": "(>>>)\\s*(\\w+)"
          },
          {
            "match": ">>>",
            "name": "invalid.illegal"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.operator.MessageName.wolfram"
              }
            },
            "match": "(::)(?=\\s*\")"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.operator.MessageName.wolfram"
              },
              "2": {
                "name": "string.unquoted.wolfram"
              }
            },
            "match": "(::)([[:alpha:]][[:alnum:]]*)"
          },
          {
            "match": "::",
            "name": "invalid.illegal"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.operator.Get.wolfram"
              }
            },
            "match": "(<<)(?=\\s*\")"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.operator.Get.wolfram"
              },
              "2": {
                "name": "string.unquoted.wolfram"
              }
            },
            "match": "(<<)\\s*([`[:alpha:]][`[:alnum:]]*)"
          },
          {
            "match": "<<",
            "name": "invalid.illegal"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.operator.Put.wolfram"
              }
            },
            "match": "(>>)(?=\\s*\")"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.operator.Put.wolfram"
              },
              "2": {
                "name": "string.unquoted.wolfram"
              }
            },
            "match": "(>>)\\s*(\\w*)"
          },
          {
            "match": ">>",
            "name": "invalid.illegal"
          }
        ]
      },
      "strings": {
        "patterns": [
          {
            "begin": "\"",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin"
              }
            },
            "end": "\"",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end"
              }
            },
            "name": "string.quoted.double",
            "patterns": [
              {
                "include": "#string_escaped_characters"
              }
            ]
          }
        ]
      },
      "symbols": {
        "patterns": [
          {
            "match": "System`(?:A(?:ASTriangle|PIFunction|RCHProcess|RIMAProcess|RMAProcess|RProcess|SATriangle|belianGroup|bort|bortKernels|bortProtect|bs|bsArg|bsArgPlot|bsoluteCorrelation|bsoluteCorrelationFunction|bsoluteCurrentValue|bsoluteDashing|bsoluteFileName|bsoluteOptions|bsolutePointSize|bsoluteThickness|bsoluteTime|bsoluteTiming|ccountingForm|ccumulate|ccuracy|cousticAbsorbingValue|cousticImpedanceValue|cousticNormalVelocityValue|cousticPDEComponent|cousticPressureCondition|cousticRadiationValue|cousticSoundHardValue|cousticSoundSoftCondition|ctionMenu|ctivate|cyclicGraphQ|ddSides|ddTo|ddUsers|djacencyGraph|djacencyList|djacencyMatrix|djacentMeshCells|djugate|djustTimeSeriesForecast|djustmentBox|dministrativeDivisionData|ffineHalfSpace|ffineSpace|ffineStateSpaceModel|ffineTransform|irPressureData|irSoundAttenuation|irTemperatureData|ircraftData|irportData|iryAi|iryAiPrime|iryAiZero|iryBi|iryBiPrime|iryBiZero|lgebraicIntegerQ|lgebraicNumber|lgebraicNumberDenominator|lgebraicNumberNorm|lgebraicNumberPolynomial|lgebraicNumberTrace|lgebraicUnitQ|llTrue|lphaChannel|lphabet|lphabeticOrder|lphabeticSort|lternatingFactorial|lternatingGroup|lternatives|mbientLight|mbiguityList|natomyData|natomyPlot3D|natomyStyling|nd|ndersonDarlingTest|ngerJ|ngleBracket|nglePath|nglePath3D|ngleVector|ngularGauge|nimate|nimator|nnotate|nnotation|nnotationDelete|nnotationKeys|nnotationValue|nnuity|nnuityDue|nnulus|nomalyDetection|nomalyDetectorFunction|ntihermitian|ntihermitianMatrixQ|ntisymmetric|ntisymmetricMatrixQ|ntonyms|nyOrder|nySubset|nyTrue|part|partSquareFree|ppellF1|ppend|ppendTo|pply|pplySides|pplyTo|rcCos|rcCosh|rcCot|rcCoth|rcCsc|rcCsch|rcCurvature|rcLength|rcSec|rcSech|rcSin|rcSinDistribution|rcSinh|rcTan|rcTanh|rea|rg|rgMax|rgMin|rgumentsOptions|rithmeticGeometricMean|rray|rrayComponents|rrayDepth|rrayFilter|rrayFlatten|rrayMesh|rrayPad|rrayPlot|rrayPlot3D|rrayQ|rrayResample|rrayReshape|rrayRules|rrays|rrow|rrowheads|ssert|ssociateTo|ssociation|ssociationMap|ssociationQ|ssociationThread|ssuming|symptotic|symptoticDSolveValue|symptoticEqual|symptoticEquivalent|symptoticExpectation|symptoticGreater|symptoticGreaterEqual|symptoticIntegrate|symptoticLess|symptoticLessEqual|symptoticOutputTracker|symptoticProbability|symptoticProduct|symptoticRSolveValue|symptoticSolve|symptoticSum|tomQ|ttributes|udio|udioAmplify|udioBlockMap|udioCapture|udioChannelCombine|udioChannelMix|udioChannelSeparate|udioChannels|udioData|udioDelay|udioDelete|udioDistance|udioFade|udioFrequencyShift|udioGenerator|udioInsert|udioIntervals|udioJoin|udioLength|udioLocalMeasurements|udioLoudness|udioMeasurements|udioNormalize|udioOverlay|udioPad|udioPan|udioPartition|udioPitchShift|udioPlot|udioQ|udioReplace|udioResample|udioReverb|udioReverse|udioSampleRate|udioSpectralMap|udioSpectralTransformation|udioSplit|udioTimeStretch|udioTrim|udioType|ugmentedPolyhedron|ugmentedSymmetricPolynomial|uthenticationDialog|utoRefreshed|utoSubmitting|utocorrelationTest))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:B(?:SplineBasis|SplineCurve|SplineFunction|SplineSurface|abyMonsterGroupB|ackslash|all|and|andpassFilter|andstopFilter|arChart|arChart3D|arLegend|arabasiAlbertGraphDistribution|arcodeImage|arcodeRecognize|aringhausHenzeTest|arlowProschanImportance|arnesG|artlettHannWindow|artlettWindow|aseDecode|aseEncode|aseForm|atesDistribution|attleLemarieWavelet|ecause|eckmannDistribution|eep|egin|eginDialogPacket|eginPackage|ellB|ellY|enfordDistribution|eniniDistribution|enktanderGibratDistribution|enktanderWeibullDistribution|ernoulliB|ernoulliDistribution|ernoulliGraphDistribution|ernoulliProcess|ernsteinBasis|esselFilterModel|esselI|esselJ|esselJZero|esselK|esselY|esselYZero|eta|etaBinomialDistribution|etaDistribution|etaNegativeBinomialDistribution|etaPrimeDistribution|etaRegularized|etween|etweennessCentrality|eveledPolyhedron|ezierCurve|ezierFunction|ilateralFilter|ilateralLaplaceTransform|ilateralZTransform|inCounts|inLists|inarize|inaryDeserialize|inaryDistance|inaryImageQ|inaryRead|inaryReadList|inarySerialize|inaryWrite|inomial|inomialDistribution|inomialProcess|inormalDistribution|iorthogonalSplineWavelet|ipartiteGraphQ|iquadraticFilterModel|irnbaumImportance|irnbaumSaundersDistribution|itAnd|itClear|itGet|itLength|itNot|itOr|itSet|itShiftLeft|itShiftRight|itXor|iweightLocation|iweightMidvariance|lackmanHarrisWindow|lackmanNuttallWindow|lackmanWindow|lank|lankNullSequence|lankSequence|lend|lock|lockMap|lockRandom|lomqvistBeta|lomqvistBetaTest|lur|lurring|odePlot|ohmanWindow|oole|ooleanConsecutiveFunction|ooleanConvert|ooleanCountingFunction|ooleanFunction|ooleanGraph|ooleanMaxterms|ooleanMinimize|ooleanMinterms|ooleanQ|ooleanRegion|ooleanTable|ooleanVariables|orderDimensions|orelTannerDistribution|ottomHatTransform|oundaryDiscretizeGraphics|oundaryDiscretizeRegion|oundaryMesh|oundaryMeshRegion|oundaryMeshRegionQ|oundedRegionQ|oundingRegion|oxData|oxMatrix|oxObject|oxWhiskerChart|racketingBar|rayCurtisDistance|readthFirstScan|reak|ridgeData|rightnessEqualize|roadcastStationData|rownForsytheTest|rownianBridgeProcess|ubbleChart|ubbleChart3D|uckyballGraph|uildingData|ulletGauge|usinessDayQ|utterflyGraph|utterworthFilterModel|utton|uttonBar|uttonBox|uttonNotebook|yteArray|yteArrayFormat|yteArrayFormatQ|yteArrayQ|yteArrayToString|yteCount))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:C(?:|DF|DFDeploy|DFWavelet|Form|MYKColor|SGRegion|SGRegionQ|SGRegionTree|alendarConvert|alendarData|allPacket|allout|anberraDistance|ancel|ancelButton|andlestickChart|anonicalGraph|anonicalName|anonicalWarpingCorrespondence|anonicalWarpingDistance|anonicalizePolygon|anonicalizePolyhedron|anonicalizeRegion|antorMesh|antorStaircase|ap|apForm|apitalDifferentialD|apitalize|apsuleShape|aputoD|arlemanLinearize|arlsonRC|arlsonRD|arlsonRE|arlsonRF|arlsonRG|arlsonRJ|arlsonRK|arlsonRM|armichaelLambda|aseSensitive|ases|ashflow|asoratian|atalanNumber|atch|atenate|auchyDistribution|auchyMatrix|auchyWindow|ayleyGraph|eiling|ell|ellGroup|ellGroupData|ellObject|ellPrint|ells|ellularAutomaton|ensoredDistribution|ensoring|enterArray|enterDot|enteredInterval|entralFeature|entralMoment|entralMomentGeneratingFunction|epstrogram|epstrogramArray|epstrumArray|hampernowneNumber|hanVeseBinarize|haracterCounts|haracterName|haracterRange|haracteristicFunction|haracteristicPolynomial|haracters|hebyshev1FilterModel|hebyshev2FilterModel|hebyshevT|hebyshevU|heck|heckAbort|heckArguments|heckbox|heckboxBar|hemicalData|hessboardDistance|hiDistribution|hiSquareDistribution|hineseRemainder|hoiceButtons|hoiceDialog|holeskyDecomposition|hop|hromaticPolynomial|hromaticityPlot|hromaticityPlot3D|ircle|ircleDot|ircleMinus|irclePlus|irclePoints|ircleThrough|ircleTimes|irculantGraph|ircularArcThrough|ircularOrthogonalMatrixDistribution|ircularQuaternionMatrixDistribution|ircularRealMatrixDistribution|ircularSymplecticMatrixDistribution|ircularUnitaryMatrixDistribution|ircumsphere|ityData|lassifierFunction|lassifierMeasurements|lassifierMeasurementsObject|lassify|lear|learAll|learAttributes|learCookies|learPermissions|learSystemCache|lebschGordan|lickPane|lickToCopy|lip|lock|lockGauge|lose|loseKernels|losenessCentrality|losing|loudAccountData|loudConnect|loudDeploy|loudDirectory|loudDisconnect|loudEvaluate|loudExport|loudFunction|loudGet|loudImport|loudLoggingData|loudObject|loudObjects|loudPublish|loudPut|loudSave|loudShare|loudSubmit|loudSymbol|loudUnshare|lusterClassify|lusteringComponents|lusteringMeasurements|lusteringTree|oefficient|oefficientArrays|oefficientList|oefficientRules|oifletWavelet|ollect|ollinearPoints|olon|olorBalance|olorCombine|olorConvert|olorData|olorDataFunction|olorDetect|olorDistance|olorNegate|olorProfileData|olorQ|olorQuantize|olorReplace|olorSeparate|olorSetter|olorSlider|olorToneMapping|olorize|olorsNear|olumn|ometData|ommonName|ommonUnits|ommonest|ommonestFilter|ommunityGraphPlot|ompanyData|ompatibleUnitQ|ompile|ompiledFunction|omplement|ompleteGraph|ompleteGraphQ|ompleteIntegral|ompleteKaryTree|omplex|omplexArrayPlot|omplexContourPlot|omplexExpand|omplexListPlot|omplexPlot|omplexPlot3D|omplexRegionPlot|omplexStreamPlot|omplexVectorPlot|omponentMeasurements|omposeList|omposeSeries|ompositeQ|omposition|ompoundElement|ompoundExpression|ompoundPoissonDistribution|ompoundPoissonProcess|ompoundRenewalProcess|ompress|oncaveHullMesh|ondition|onditionalExpression|onditioned|one|onfirm|onfirmAssert|onfirmBy|onfirmMatch|onformAudio|onformImages|ongruent|onicGradientFilling|onicHullRegion|onicOptimization|onjugate|onjugateTranspose|onjunction|onnectLibraryCallbackFunction|onnectedComponents|onnectedGraphComponents|onnectedGraphQ|onnectedMeshComponents|onnesWindow|onoverTest|onservativeConvectionPDETerm|onstantArray|onstantImage|onstantRegionQ|onstellationData|onstruct|ontainsAll|ontainsAny|ontainsExactly|ontainsNone|ontainsOnly|ontext|ontextToFileName|ontexts|ontinue|ontinuedFraction|ontinuedFractionK|ontinuousMarkovProcess|ontinuousTask|ontinuousTimeModelQ|ontinuousWaveletData|ontinuousWaveletTransform|ontourDetect|ontourPlot|ontourPlot3D|ontraharmonicMean|ontrol|ontrolActive|ontrollabilityGramian|ontrollabilityMatrix|ontrollableDecomposition|ontrollableModelQ|ontrollerInformation|ontrollerManipulate|ontrollerState|onvectionPDETerm|onvergents|onvexHullMesh|onvexHullRegion|onvexOptimization|onvexPolygonQ|onvexPolyhedronQ|onvexRegionQ|onvolve|onwayGroupCo1|onwayGroupCo2|onwayGroupCo3|oordinateBoundingBox|oordinateBoundingBoxArray|oordinateBounds|oordinateBoundsArray|oordinateChartData|oordinateTransform|oordinateTransformData|oplanarPoints|oprimeQ|oproduct|opulaDistribution|opyDatabin|opyDirectory|opyFile|opyToClipboard|oreNilpotentDecomposition|ornerFilter|orrelation|orrelationDistance|orrelationFunction|orrelationTest|os|osIntegral|osh|oshIntegral|osineDistance|osineWindow|ot|oth|oulombF|oulombG|oulombH1|oulombH2|ount|ountDistinct|ountDistinctBy|ountRoots|ountryData|ounts|ountsBy|ovariance|ovarianceFunction|oxIngersollRossProcess|oxModel|oxModelFit|oxianDistribution|ramerVonMisesTest|reateArchive|reateDatabin|reateDialog|reateDirectory|reateDocument|reateFile|reateManagedLibraryExpression|reateNotebook|reatePacletArchive|reatePalette|reatePermissionsGroup|reateUUID|reateWindow|riticalSection|riticalityFailureImportance|riticalitySuccessImportance|ross|rossMatrix|rossingCount|rossingDetect|rossingPolygon|sc|sch|ube|ubeRoot|uboid|umulant|umulantGeneratingFunction|umulativeFeatureImpactPlot|up|upCap|url|urrencyConvert|urrentDate|urrentImage|urrentValue|urvatureFlowFilter|ycleGraph|ycleIndexPolynomial|ycles|yclicGroup|yclotomic|ylinder|ylindricalDecomposition|ylindricalDecompositionFunction))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:D(?:|Eigensystem|Eigenvalues|GaussianWavelet|MSList|MSString|Solve|SolveValue|agumDistribution|amData|amerauLevenshteinDistance|arker|ashing|ataDistribution|atabin|atabinAdd|atabinUpload|atabins|ataset|ateBounds|ateDifference|ateHistogram|ateList|ateListLogPlot|ateListPlot|ateListStepPlot|ateObject|ateObjectQ|ateOverlapsQ|atePattern|atePlus|ateRange|ateScale|ateSelect|ateString|ateValue|ateWithinQ|ated|atedUnit|aubechiesWavelet|avisDistribution|awsonF|ayCount|ayHemisphere|ayMatchQ|ayName|ayNightTerminator|ayPlus|ayRange|ayRound|aylightQ|eBruijnGraph|eBruijnSequence|ecapitalize|ecimalForm|eclarePackage|ecompose|ecrement|ecrypt|edekindEta|eepSpaceProbeData|efault|efaultButton|efaultValues|efer|efineInputStreamMethod|efineOutputStreamMethod|efineResourceFunction|efinition|egreeCentrality|egreeGraphDistribution|el|elaunayMesh|elayed|elete|eleteAdjacentDuplicates|eleteAnomalies|eleteBorderComponents|eleteCases|eleteDirectory|eleteDuplicates|eleteDuplicatesBy|eleteFile|eleteMissing|eleteObject|eletePermissionsKey|eleteSmallComponents|eleteStopwords|elimitedSequence|endrogram|enominator|ensityHistogram|ensityPlot|ensityPlot3D|eploy|epth|epthFirstScan|erivative|erivativeFilter|erivativePDETerm|esignMatrix|et|eviceClose|eviceConfigure|eviceExecute|eviceExecuteAsynchronous|eviceObject|eviceOpen|eviceRead|eviceReadBuffer|eviceReadLatest|eviceReadList|eviceReadTimeSeries|eviceStreams|eviceWrite|eviceWriteBuffer|evices|iagonal|iagonalMatrix|iagonalMatrixQ|iagonalizableMatrixQ|ialog|ialogInput|ialogNotebook|ialogReturn|iamond|iamondMatrix|iceDissimilarity|ictionaryLookup|ictionaryWordQ|ifferenceDelta|ifferenceQuotient|ifferenceRoot|ifferenceRootReduce|ifferences|ifferentialD|ifferentialRoot|ifferentialRootReduce|ifferentiatorFilter|iffusionPDETerm|igitCount|igitQ|ihedralAngle|ihedralGroup|ilation|imensionReduce|imensionReducerFunction|imensionReduction|imensionalCombinations|imensionalMeshComponents|imensions|iracComb|iracDelta|irectedEdge|irectedGraph|irectedGraphQ|irectedInfinity|irectionalLight|irective|irectory|irectoryName|irectoryQ|irectoryStack|irichletBeta|irichletCharacter|irichletCondition|irichletConvolve|irichletDistribution|irichletEta|irichletL|irichletLambda|irichletTransform|irichletWindow|iscreteAsymptotic|iscreteChirpZTransform|iscreteConvolve|iscreteDelta|iscreteHadamardTransform|iscreteIndicator|iscreteInputOutputModel|iscreteLQEstimatorGains|iscreteLQRegulatorGains|iscreteLimit|iscreteLyapunovSolve|iscreteMarkovProcess|iscreteMaxLimit|iscreteMinLimit|iscretePlot|iscretePlot3D|iscreteRatio|iscreteRiccatiSolve|iscreteShift|iscreteTimeModelQ|iscreteUniformDistribution|iscreteWaveletData|iscreteWaveletPacketTransform|iscreteWaveletTransform|iscretizeGraphics|iscretizeRegion|iscriminant|isjointQ|isjunction|isk|iskMatrix|iskSegment|ispatch|isplayEndPacket|isplayForm|isplayPacket|istanceMatrix|istanceTransform|istribute|istributeDefinitions|istributed|istributionChart|istributionFitTest|istributionParameterAssumptions|istributionParameterQ|iv|ivide|ivideBy|ivideSides|ivisible|ivisorSigma|ivisorSum|ivisors|o|ocumentGenerator|ocumentGeneratorInformation|ocumentGenerators|ocumentNotebook|odecahedron|ominantColors|ominatorTreeGraph|ominatorVertexList|ot|otEqual|oubleBracketingBar|oubleDownArrow|oubleLeftArrow|oubleLeftRightArrow|oubleLeftTee|oubleLongLeftArrow|oubleLongLeftRightArrow|oubleLongRightArrow|oubleRightArrow|oubleRightTee|oubleUpArrow|oubleUpDownArrow|oubleVerticalBar|ownArrow|ownArrowBar|ownArrowUpArrow|ownLeftRightVector|ownLeftTeeVector|ownLeftVector|ownLeftVectorBar|ownRightTeeVector|ownRightVector|ownRightVectorBar|ownTee|ownTeeArrow|ownValues|ownsample|razinInverse|rop|ropShadowing|t|ualPlanarGraph|ualPolyhedron|ualSystemsModel|umpSave|uplicateFreeQ|uration|ynamic|ynamicGeoGraphics|ynamicModule|ynamicSetting|ynamicWrapper))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:E(?:arthImpactData|arthquakeData|ccentricityCentrality|choEvaluation|choFunction|choLabel|dgeAdd|dgeBetweennessCentrality|dgeChromaticNumber|dgeConnectivity|dgeContract|dgeCount|dgeCoverQ|dgeCycleMatrix|dgeDelete|dgeDetect|dgeForm|dgeIndex|dgeList|dgeQ|dgeRules|dgeTaggedGraph|dgeTaggedGraphQ|dgeTags|dgeTransitiveGraphQ|dgeWeightedGraphQ|ditDistance|ffectiveInterest|igensystem|igenvalues|igenvectorCentrality|igenvectors|lement|lementData|liminate|llipsoid|llipticE|llipticExp|llipticExpPrime|llipticF|llipticFilterModel|llipticK|llipticLog|llipticNomeQ|llipticPi|llipticTheta|llipticThetaPrime|mbedCode|mbeddedHTML|mbeddedService|mitSound|mpiricalDistribution|mptyGraphQ|mptyRegion|nclose|ncode|ncrypt|ncryptedObject|nd|ndDialogPacket|ndPackage|ngineeringForm|nterExpressionPacket|nterTextPacket|ntity|ntityClass|ntityClassList|ntityCopies|ntityGroup|ntityInstance|ntityList|ntityPrefetch|ntityProperties|ntityProperty|ntityPropertyClass|ntityRegister|ntityStores|ntityTypeName|ntityUnregister|ntityValue|ntropy|ntropyFilter|nvironment|qual|qualTilde|qualTo|quilibrium|quirippleFilterKernel|quivalent|rf|rfc|rfi|rlangB|rlangC|rlangDistribution|rosion|rrorBox|stimatedBackground|stimatedDistribution|stimatedPointNormals|stimatedProcess|stimatorGains|stimatorRegulator|uclideanDistance|ulerAngles|ulerCharacteristic|ulerE|ulerMatrix|ulerPhi|ulerianGraphQ|valuate|valuatePacket|valuationBox|valuationCell|valuationData|valuationNotebook|valuationObject|venQ|ventData|ventHandler|ventSeries|xactBlackmanWindow|xactNumberQ|xampleData|xcept|xists|xoplanetData|xp|xpGammaDistribution|xpIntegralE|xpIntegralEi|xpToTrig|xpand|xpandAll|xpandDenominator|xpandFileName|xpandNumerator|xpectation|xponent|xponentialDistribution|xponentialGeneratingFunction|xponentialMovingAverage|xponentialPowerDistribution|xport|xportByteArray|xportForm|xportString|xpressionCell|xpressionGraph|xtendedGCD|xternalBundle|xtract|xtractArchive|xtractPacletArchive|xtremeValueDistribution))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:F(?:ARIMAProcess|RatioDistribution|aceAlign|aceForm|acialFeatures|actor|actorInteger|actorList|actorSquareFree|actorSquareFreeList|actorTerms|actorTermsList|actorial|actorial2|actorialMoment|actorialMomentGeneratingFunction|actorialPower|ailure|ailureDistribution|ailureQ|areySequence|eatureImpactPlot|eatureNearest|eatureSpacePlot|eatureSpacePlot3D|eatureValueDependencyPlot|eatureValueImpactPlot|eedbackLinearize|etalGrowthData|ibonacci|ibonorial|ile|ileBaseName|ileByteCount|ileDate|ileExistsQ|ileExtension|ileFormat|ileFormatQ|ileHash|ileNameDepth|ileNameDrop|ileNameJoin|ileNameSetter|ileNameSplit|ileNameTake|ileNames|ilePrint|ileSize|ileSystemMap|ileSystemScan|ileTemplate|ileTemplateApply|ileType|illedCurve|illedTorus|illingTransform|ilterRules|inancialBond|inancialData|inancialDerivative|inancialIndicator|ind|indAnomalies|indArgMax|indArgMin|indClique|indClusters|indCookies|indCurvePath|indCycle|indDevices|indDistribution|indDistributionParameters|indDivisions|indEdgeColoring|indEdgeCover|indEdgeCut|indEdgeIndependentPaths|indEulerianCycle|indFaces|indFile|indFit|indFormula|indFundamentalCycles|indGeneratingFunction|indGeoLocation|indGeometricTransform|indGraphCommunities|indGraphIsomorphism|indGraphPartition|indHamiltonianCycle|indHamiltonianPath|indHiddenMarkovStates|indIndependentEdgeSet|indIndependentVertexSet|indInstance|indIntegerNullVector|indIsomorphicSubgraph|indKClan|indKClique|indKClub|indKPlex|indLibrary|indLinearRecurrence|indList|indMatchingColor|indMaxValue|indMaximum|indMaximumCut|indMaximumFlow|indMeshDefects|indMinValue|indMinimum|indMinimumCostFlow|indMinimumCut|indPath|indPeaks|indPermutation|indPlanarColoring|indPostmanTour|indProcessParameters|indRegionTransform|indRepeat|indRoot|indSequenceFunction|indShortestPath|indShortestTour|indSpanningTree|indSubgraphIsomorphism|indThreshold|indTransientRepeat|indVertexColoring|indVertexCover|indVertexCut|indVertexIndependentPaths|inishDynamic|initeAbelianGroupCount|initeGroupCount|initeGroupData|irst|irstCase|irstPassageTimeDistribution|irstPosition|ischerGroupFi22|ischerGroupFi23|ischerGroupFi24Prime|isherHypergeometricDistribution|isherRatioTest|isherZDistribution|it|ittedModel|ixedOrder|ixedPoint|ixedPointList|latShading|latTopWindow|latten|lattenAt|lightData|lipView|loor|lowPolynomial|old|oldList|oldPair|oldPairList|oldWhile|oldWhileList|or|orAll|ormBox|ormFunction|ormObject|ormPage|ormat|ormulaData|ormulaLookup|ortranForm|ourier|ourierCoefficient|ourierCosCoefficient|ourierCosSeries|ourierCosTransform|ourierDCT|ourierDCTFilter|ourierDCTMatrix|ourierDST|ourierDSTMatrix|ourierMatrix|ourierSequenceTransform|ourierSeries|ourierSinCoefficient|ourierSinSeries|ourierSinTransform|ourierTransform|ourierTrigSeries|oxH|ractionBox|ractionalBrownianMotionProcess|ractionalD|ractionalGaussianNoiseProcess|ractionalPart|rameBox|ramed|rechetDistribution|reeQ|renetSerretSystem|requencySamplingFilterKernel|resnelC|resnelF|resnelG|resnelS|robeniusNumber|robeniusSolve|romAbsoluteTime|romCharacterCode|romCoefficientRules|romContinuedFraction|romDMS|romDateString|romDigits|romEntity|romJulianDate|romLetterNumber|romPolarCoordinates|romRomanNumeral|romSphericalCoordinates|romUnixTime|rontEndExecute|rontEndToken|rontEndTokenExecute|ullDefinition|ullForm|ullGraphics|ullInformationOutputRegulator|ullRegion|ullSimplify|unction|unctionAnalytic|unctionBijective|unctionContinuous|unctionConvexity|unctionDiscontinuities|unctionDomain|unctionExpand|unctionInjective|unctionInterpolation|unctionMeromorphic|unctionMonotonicity|unctionPeriod|unctionRange|unctionSign|unctionSingularities|unctionSurjective|ussellVeselyImportance))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:G(?:ARCHProcess|CD|aborFilter|aborMatrix|aborWavelet|ainMargins|ainPhaseMargins|alaxyData|amma|ammaDistribution|ammaRegularized|ather|atherBy|aussianFilter|aussianMatrix|aussianOrthogonalMatrixDistribution|aussianSymplecticMatrixDistribution|aussianUnitaryMatrixDistribution|aussianWindow|egenbauerC|eneralizedLinearModelFit|enerateAsymmetricKeyPair|enerateDocument|enerateHTTPResponse|enerateSymmetricKey|eneratingFunction|enericCylindricalDecomposition|enomeData|enomeLookup|eoAntipode|eoArea|eoBoundary|eoBoundingBox|eoBounds|eoBoundsRegion|eoBoundsRegionBoundary|eoBubbleChart|eoCircle|eoContourPlot|eoDensityPlot|eoDestination|eoDirection|eoDisk|eoDisplacement|eoDistance|eoDistanceList|eoElevationData|eoEntities|eoGraphPlot|eoGraphics|eoGridDirectionDifference|eoGridPosition|eoGridUnitArea|eoGridUnitDistance|eoGridVector|eoGroup|eoHemisphere|eoHemisphereBoundary|eoHistogram|eoIdentify|eoImage|eoLength|eoListPlot|eoMarker|eoNearest|eoPath|eoPolygon|eoPosition|eoPositionENU|eoPositionXYZ|eoProjectionData|eoRegionValuePlot|eoSmoothHistogram|eoStreamPlot|eoStyling|eoVariant|eoVector|eoVectorENU|eoVectorPlot|eoVectorXYZ|eoVisibleRegion|eoVisibleRegionBoundary|eoWithinQ|eodesicClosing|eodesicDilation|eodesicErosion|eodesicOpening|eodesicPolyhedron|eodesyData|eogravityModelData|eologicalPeriodData|eomagneticModelData|eometricBrownianMotionProcess|eometricDistribution|eometricMean|eometricMeanFilter|eometricOptimization|eometricTransformation|estureHandler|et|etEnvironment|lobalClusteringCoefficient|low|ompertzMakehamDistribution|oochShading|oodmanKruskalGamma|oodmanKruskalGammaTest|oto|ouraudShading|rad|radientFilter|radientFittedMesh|radientOrientationFilter|rammarApply|rammarRules|rammarToken|raph|raph3D|raphAssortativity|raphAutomorphismGroup|raphCenter|raphComplement|raphData|raphDensity|raphDiameter|raphDifference|raphDisjointUnion|raphDistance|raphDistanceMatrix|raphEmbedding|raphHub|raphIntersection|raphJoin|raphLinkEfficiency|raphPeriphery|raphPlot|raphPlot3D|raphPower|raphProduct|raphPropertyDistribution|raphQ|raphRadius|raphReciprocity|raphSum|raphUnion|raphics|raphics3D|raphicsColumn|raphicsComplex|raphicsGrid|raphicsGroup|raphicsRow|rayLevel|reater|reaterEqual|reaterEqualLess|reaterEqualThan|reaterFullEqual|reaterGreater|reaterLess|reaterSlantEqual|reaterThan|reaterTilde|reenFunction|rid|ridBox|ridGraph|roebnerBasis|roupBy|roupCentralizer|roupElementFromWord|roupElementPosition|roupElementQ|roupElementToWord|roupElements|roupGenerators|roupMultiplicationTable|roupOrbits|roupOrder|roupSetwiseStabilizer|roupStabilizer|roupStabilizerChain|roupings|rowCutComponents|udermannian|uidedFilter|umbelDistribution))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:H(?:ITSCentrality|TTPErrorResponse|TTPRedirect|TTPRequest|TTPRequestData|TTPResponse|aarWavelet|adamardMatrix|alfLine|alfNormalDistribution|alfPlane|alfSpace|alftoneShading|amiltonianGraphQ|ammingDistance|ammingWindow|ankelH1|ankelH2|ankelMatrix|ankelTransform|annPoissonWindow|annWindow|aradaNortonGroupHN|araryGraph|armonicMean|armonicMeanFilter|armonicNumber|ash|atchFilling|atchShading|aversine|azardFunction|ead|eatFluxValue|eatInsulationValue|eatOutflowValue|eatRadiationValue|eatSymmetryValue|eatTemperatureCondition|eatTransferPDEComponent|eatTransferValue|eavisideLambda|eavisidePi|eavisideTheta|eldGroupHe|elmholtzPDEComponent|ermiteDecomposition|ermiteH|ermitian|ermitianMatrixQ|essenbergDecomposition|eunB|eunBPrime|eunC|eunCPrime|eunD|eunDPrime|eunG|eunGPrime|eunT|eunTPrime|exahedron|iddenMarkovProcess|ighlightGraph|ighlightImage|ighlightMesh|ighlighted|ighpassFilter|igmanSimsGroupHS|ilbertCurve|ilbertFilter|ilbertMatrix|istogram|istogram3D|istogramDistribution|istogramList|istogramTransform|istogramTransformInterpolation|istoricalPeriodData|itMissTransform|jorthDistribution|odgeDual|oeffdingD|oeffdingDTest|old|oldComplete|oldForm|oldPattern|orizontalGauge|ornerForm|ostLookup|otellingTSquareDistribution|oytDistribution|ue|umanGrowthData|umpDownHump|umpEqual|urwitzLerchPhi|urwitzZeta|yperbolicDistribution|ypercubeGraph|yperexponentialDistribution|yperfactorial|ypergeometric0F1|ypergeometric0F1Regularized|ypergeometric1F1|ypergeometric1F1Regularized|ypergeometric2F1|ypergeometric2F1Regularized|ypergeometricDistribution|ypergeometricPFQ|ypergeometricPFQRegularized|ypergeometricU|yperlink|yperplane|ypoexponentialDistribution|ypothesisTestData))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:I(?:PAddress|conData|conize|cosahedron|dentity|dentityMatrix|f|fCompiled|gnoringInactive|m|mage|mage3D|mage3DProjection|mage3DSlices|mageAccumulate|mageAdd|mageAdjust|mageAlign|mageApply|mageApplyIndexed|mageAspectRatio|mageAssemble|mageCapture|mageChannels|mageClip|mageCollage|mageColorSpace|mageCompose|mageConvolve|mageCooccurrence|mageCorners|mageCorrelate|mageCorrespondingPoints|mageCrop|mageData|mageDeconvolve|mageDemosaic|mageDifference|mageDimensions|mageDisplacements|mageDistance|mageEffect|mageExposureCombine|mageFeatureTrack|mageFileApply|mageFileFilter|mageFileScan|mageFilter|mageFocusCombine|mageForestingComponents|mageForwardTransformation|mageHistogram|mageIdentify|mageInstanceQ|mageKeypoints|mageLevels|mageLines|mageMarker|mageMeasurements|mageMesh|mageMultiply|magePad|magePartition|magePeriodogram|magePerspectiveTransformation|mageQ|mageRecolor|mageReflect|mageResize|mageRestyle|mageRotate|mageSaliencyFilter|mageScaled|mageScan|mageSubtract|mageTake|mageTransformation|mageTrim|mageType|mageValue|mageValuePositions|mageVectorscopePlot|mageWaveformPlot|mplicitD|mplicitRegion|mplies|mport|mportByteArray|mportString|mprovementImportance|nactivate|nactive|ncidenceGraph|ncidenceList|ncidenceMatrix|ncrement|ndefiniteMatrixQ|ndependenceTest|ndependentEdgeSetQ|ndependentPhysicalQuantity|ndependentUnit|ndependentUnitDimension|ndependentVertexSetQ|ndexEdgeTaggedGraph|ndexGraph|ndexed|nexactNumberQ|nfiniteLine|nfiniteLineThrough|nfinitePlane|nfix|nflationAdjust|nformation|nhomogeneousPoissonProcess|nner|nnerPolygon|nnerPolyhedron|npaint|nput|nputField|nputForm|nputNamePacket|nputNotebook|nputPacket|nputStream|nputString|nputStringPacket|nsert|nsertLinebreaks|nset|nsphere|nstall|nstallService|ntegerDigits|ntegerExponent|ntegerLength|ntegerName|ntegerPart|ntegerPartitions|ntegerQ|ntegerReverse|ntegerString|ntegrate|nteractiveTradingChart|nternallyBalancedDecomposition|nterpolatingFunction|nterpolatingPolynomial|nterpolation|nterpretation|nterpretationBox|nterpreter|nterquartileRange|nterrupt|ntersectingQ|ntersection|nterval|ntervalIntersection|ntervalMemberQ|ntervalSlider|ntervalUnion|nverse|nverseBetaRegularized|nverseBilateralLaplaceTransform|nverseBilateralZTransform|nverseCDF|nverseChiSquareDistribution|nverseContinuousWaveletTransform|nverseDistanceTransform|nverseEllipticNomeQ|nverseErf|nverseErfc|nverseFourier|nverseFourierCosTransform|nverseFourierSequenceTransform|nverseFourierSinTransform|nverseFourierTransform|nverseFunction|nverseGammaDistribution|nverseGammaRegularized|nverseGaussianDistribution|nverseGudermannian|nverseHankelTransform|nverseHaversine|nverseJacobiCD|nverseJacobiCN|nverseJacobiCS|nverseJacobiDC|nverseJacobiDN|nverseJacobiDS|nverseJacobiNC|nverseJacobiND|nverseJacobiNS|nverseJacobiSC|nverseJacobiSD|nverseJacobiSN|nverseLaplaceTransform|nverseMellinTransform|nversePermutation|nverseRadon|nverseRadonTransform|nverseSeries|nverseShortTimeFourier|nverseSpectrogram|nverseSurvivalFunction|nverseTransformedRegion|nverseWaveletTransform|nverseWeierstrassP|nverseWishartMatrixDistribution|nverseZTransform|nvisible|rreduciblePolynomialQ|slandData|solatingInterval|somorphicGraphQ|somorphicSubgraphQ|sotopeData|tem|toProcess))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:J(?:accardDissimilarity|acobiAmplitude|acobiCD|acobiCN|acobiCS|acobiDC|acobiDN|acobiDS|acobiEpsilon|acobiNC|acobiND|acobiNS|acobiP|acobiSC|acobiSD|acobiSN|acobiSymbol|acobiZN|acobiZeta|ankoGroupJ1|ankoGroupJ2|ankoGroupJ3|ankoGroupJ4|arqueBeraALMTest|ohnsonDistribution|oin|oinAcross|oinForm|oinedCurve|ordanDecomposition|ordanModelDecomposition|uliaSetBoettcher|uliaSetIterationCount|uliaSetPlot|uliaSetPoints|ulianDate))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:K(?:CoreComponents|Distribution|EdgeConnectedComponents|EdgeConnectedGraphQ|VertexConnectedComponents|VertexConnectedGraphQ|agiChart|aiserBesselWindow|aiserWindow|almanEstimator|almanFilter|arhunenLoeveDecomposition|aryTree|atzCentrality|elvinBei|elvinBer|elvinKei|elvinKer|endallTau|endallTauTest|ernelMixtureDistribution|ernelObject|ernels|ey|eyComplement|eyDrop|eyDropFrom|eyExistsQ|eyFreeQ|eyIntersection|eyMap|eyMemberQ|eySelect|eySort|eySortBy|eyTake|eyUnion|eyValueMap|eyValuePattern|eys|illProcess|irchhoffGraph|irchhoffMatrix|leinInvariantJ|napsackSolve|nightTourGraph|notData|nownUnitQ|ochCurve|olmogorovSmirnovTest|roneckerDelta|roneckerModelDecomposition|roneckerProduct|roneckerSymbol|uiperTest|umaraswamyDistribution|urtosis|uwaharaFilter))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:L(?:ABColor|CHColor|CM|QEstimatorGains|QGRegulator|QOutputRegulatorGains|QRegulatorGains|UDecomposition|UVColor|abel|abeled|aguerreL|akeData|ambdaComponents|ameC|ameCPrime|ameEigenvalueA|ameEigenvalueB|ameS|ameSPrime|aminaData|anczosWindow|andauDistribution|anguageData|anguageIdentify|aplaceDistribution|aplaceTransform|aplacian|aplacianFilter|aplacianGaussianFilter|aplacianPDETerm|ast|atitude|atitudeLongitude|atticeData|atticeReduce|aunchKernels|ayeredGraphPlot|ayeredGraphPlot3D|eafCount|eapVariant|eapYearQ|earnDistribution|earnedDistribution|eastSquares|eastSquaresFilterKernel|eftArrow|eftArrowBar|eftArrowRightArrow|eftDownTeeVector|eftDownVector|eftDownVectorBar|eftRightArrow|eftRightVector|eftTee|eftTeeArrow|eftTeeVector|eftTriangle|eftTriangleBar|eftTriangleEqual|eftUpDownVector|eftUpTeeVector|eftUpVector|eftUpVectorBar|eftVector|eftVectorBar|egended|egendreP|egendreQ|ength|engthWhile|erchPhi|ess|essEqual|essEqualGreater|essEqualThan|essFullEqual|essGreater|essLess|essSlantEqual|essThan|essTilde|etterCounts|etterNumber|etterQ|evel|eveneTest|eviCivitaTensor|evyDistribution|exicographicOrder|exicographicSort|ibraryDataType|ibraryFunction|ibraryFunctionError|ibraryFunctionInformation|ibraryFunctionLoad|ibraryFunctionUnload|ibraryLoad|ibraryUnload|iftingFilterData|iftingWaveletTransform|ighter|ikelihood|imit|indleyDistribution|ine|ineBreakChart|ineGraph|ineIntegralConvolutionPlot|ineLegend|inearFractionalOptimization|inearFractionalTransform|inearGradientFilling|inearGradientImage|inearModelFit|inearOptimization|inearRecurrence|inearSolve|inearSolveFunction|inearizingTransformationData|inkActivate|inkClose|inkConnect|inkCreate|inkInterrupt|inkLaunch|inkObject|inkPatterns|inkRankCentrality|inkRead|inkReadyQ|inkWrite|inks|iouvilleLambda|ist|istAnimate|istContourPlot|istContourPlot3D|istConvolve|istCorrelate|istCurvePathPlot|istDeconvolve|istDensityPlot|istDensityPlot3D|istFourierSequenceTransform|istInterpolation|istLineIntegralConvolutionPlot|istLinePlot|istLinePlot3D|istLogLinearPlot|istLogLogPlot|istLogPlot|istPicker|istPickerBox|istPlay|istPlot|istPlot3D|istPointPlot3D|istPolarPlot|istQ|istSliceContourPlot3D|istSliceDensityPlot3D|istSliceVectorPlot3D|istStepPlot|istStreamDensityPlot|istStreamPlot|istStreamPlot3D|istSurfacePlot3D|istVectorDensityPlot|istVectorDisplacementPlot|istVectorDisplacementPlot3D|istVectorPlot|istVectorPlot3D|istZTransform|ocalAdaptiveBinarize|ocalCache|ocalClusteringCoefficient|ocalEvaluate|ocalObject|ocalObjects|ocalSubmit|ocalSymbol|ocalTime|ocalTimeZone|ocationEquivalenceTest|ocationTest|ocator|ocatorPane|og|og10|og2|ogBarnesG|ogGamma|ogGammaDistribution|ogIntegral|ogLikelihood|ogLinearPlot|ogLogPlot|ogLogisticDistribution|ogMultinormalDistribution|ogNormalDistribution|ogPlot|ogRankTest|ogSeriesDistribution|ogicalExpand|ogisticDistribution|ogisticSigmoid|ogitModelFit|ongLeftArrow|ongLeftRightArrow|ongRightArrow|ongest|ongestCommonSequence|ongestCommonSequencePositions|ongestCommonSubsequence|ongestCommonSubsequencePositions|ongestOrderedSequence|ongitude|ookup|oopFreeGraphQ|owerCaseQ|owerLeftArrow|owerRightArrow|owerTriangularMatrix|owerTriangularMatrixQ|owerTriangularize|owpassFilter|ucasL|uccioSamiComponents|unarEclipse|yapunovSolve|yonsGroupLy))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:M(?:AProcess|achineNumberQ|agnify|ailReceiverFunction|ajority|akeBoxes|akeExpression|anagedLibraryExpressionID|anagedLibraryExpressionQ|andelbrotSetBoettcher|andelbrotSetDistance|andelbrotSetIterationCount|andelbrotSetMemberQ|andelbrotSetPlot|angoldtLambda|anhattanDistance|anipulate|anipulator|annWhitneyTest|annedSpaceMissionData|antissaExponent|ap|apAll|apApply|apAt|apIndexed|apThread|archenkoPasturDistribution|arcumQ|ardiaCombinedTest|ardiaKurtosisTest|ardiaSkewnessTest|arginalDistribution|arkovProcessProperties|assConcentrationCondition|assFluxValue|assImpermeableBoundaryValue|assOutflowValue|assSymmetryValue|assTransferValue|assTransportPDEComponent|atchQ|atchingDissimilarity|aterialShading|athMLForm|athematicalFunctionData|athieuC|athieuCPrime|athieuCharacteristicA|athieuCharacteristicB|athieuCharacteristicExponent|athieuGroupM11|athieuGroupM12|athieuGroupM22|athieuGroupM23|athieuGroupM24|athieuS|athieuSPrime|atrices|atrixExp|atrixForm|atrixFunction|atrixLog|atrixNormalDistribution|atrixPlot|atrixPower|atrixPropertyDistribution|atrixQ|atrixRank|atrixTDistribution|ax|axDate|axDetect|axFilter|axLimit|axMemoryUsed|axStableDistribution|axValue|aximalBy|aximize|axwellDistribution|cLaughlinGroupMcL|ean|eanClusteringCoefficient|eanDegreeConnectivity|eanDeviation|eanFilter|eanGraphDistance|eanNeighborDegree|eanShift|eanShiftFilter|edian|edianDeviation|edianFilter|edicalTestData|eijerG|eijerGReduce|eixnerDistribution|ellinConvolve|ellinTransform|emberQ|emoryAvailable|emoryConstrained|emoryInUse|engerMesh|enuPacket|enuView|erge|ersennePrimeExponent|ersennePrimeExponentQ|eshCellCount|eshCellIndex|eshCells|eshConnectivityGraph|eshCoordinates|eshPrimitives|eshRegion|eshRegionQ|essage|essageDialog|essageList|essageName|essagePacket|essages|eteorShowerData|exicanHatWavelet|eyerWavelet|in|inDate|inDetect|inFilter|inLimit|inMax|inStableDistribution|inValue|ineralData|inimalBy|inimalPolynomial|inimalStateSpaceModel|inimize|inimumTimeIncrement|inkowskiQuestionMark|inorPlanetData|inors|inus|inusPlus|issing|issingQ|ittagLefflerE|ixedFractionParts|ixedGraphQ|ixedMagnitude|ixedRadix|ixedRadixQuantity|ixedUnit|ixtureDistribution|od|odelPredictiveController|odularInverse|odularLambda|odule|oebiusMu|oment|omentConvert|omentEvaluate|omentGeneratingFunction|omentOfInertia|onitor|onomialList|onsterGroupM|oonPhase|oonPosition|orletWavelet|orphologicalBinarize|orphologicalBranchPoints|orphologicalComponents|orphologicalEulerNumber|orphologicalGraph|orphologicalPerimeter|orphologicalTransform|ortalityData|ost|ountainData|ouseAnnotation|ouseAppearance|ousePosition|ouseover|ovieData|ovingAverage|ovingMap|ovingMedian|oyalDistribution|ulticolumn|ultigraphQ|ultinomial|ultinomialDistribution|ultinormalDistribution|ultiplicativeOrder|ultiplySides|ultivariateHypergeometricDistribution|ultivariatePoissonDistribution|ultivariateTDistribution))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:N(?:|ArgMax|ArgMin|Cache|CaputoD|DEigensystem|DEigenvalues|DSolve|DSolveValue|Expectation|FractionalD|Integrate|MaxValue|Maximize|MinValue|Minimize|Probability|Product|Roots|Solve|SolveValues|Sum|akagamiDistribution|ameQ|ames|and|earest|earestFunction|earestMeshCells|earestNeighborGraph|earestTo|ebulaData|eedlemanWunschSimilarity|eeds|egative|egativeBinomialDistribution|egativeDefiniteMatrixQ|egativeMultinomialDistribution|egativeSemidefiniteMatrixQ|egativelyOrientedPoints|eighborhoodData|eighborhoodGraph|est|estGraph|estList|estWhile|estWhileList|estedGreaterGreater|estedLessLess|eumannValue|evilleThetaC|evilleThetaD|evilleThetaN|evilleThetaS|extCell|extDate|extPrime|icholsPlot|ightHemisphere|onCommutativeMultiply|onNegative|onPositive|oncentralBetaDistribution|oncentralChiSquareDistribution|oncentralFRatioDistribution|oncentralStudentTDistribution|ondimensionalizationTransform|oneTrue|onlinearModelFit|onlinearStateSpaceModel|onlocalMeansFilter|or|orlundB|orm|ormal|ormalDistribution|ormalMatrixQ|ormalize|ormalizedSquaredEuclideanDistance|ot|otCongruent|otCupCap|otDoubleVerticalBar|otElement|otEqualTilde|otExists|otGreater|otGreaterEqual|otGreaterFullEqual|otGreaterGreater|otGreaterLess|otGreaterSlantEqual|otGreaterTilde|otHumpDownHump|otHumpEqual|otLeftTriangle|otLeftTriangleBar|otLeftTriangleEqual|otLess|otLessEqual|otLessFullEqual|otLessGreater|otLessLess|otLessSlantEqual|otLessTilde|otNestedGreaterGreater|otNestedLessLess|otPrecedes|otPrecedesEqual|otPrecedesSlantEqual|otPrecedesTilde|otReverseElement|otRightTriangle|otRightTriangleBar|otRightTriangleEqual|otSquareSubset|otSquareSubsetEqual|otSquareSuperset|otSquareSupersetEqual|otSubset|otSubsetEqual|otSucceeds|otSucceedsEqual|otSucceedsSlantEqual|otSucceedsTilde|otSuperset|otSupersetEqual|otTilde|otTildeEqual|otTildeFullEqual|otTildeTilde|otVerticalBar|otebook|otebookApply|otebookClose|otebookDelete|otebookDirectory|otebookEvaluate|otebookFileName|otebookFind|otebookGet|otebookImport|otebookInformation|otebookLocate|otebookObject|otebookOpen|otebookPrint|otebookPut|otebookRead|otebookSave|otebookSelection|otebookTemplate|otebookWrite|otebooks|othing|uclearExplosionData|uclearReactorData|ullSpace|umberCompose|umberDecompose|umberDigit|umberExpand|umberFieldClassNumber|umberFieldDiscriminant|umberFieldFundamentalUnits|umberFieldIntegralBasis|umberFieldNormRepresentatives|umberFieldRegulator|umberFieldRootsOfUnity|umberFieldSignature|umberForm|umberLinePlot|umberQ|umerator|umeratorDenominator|umericQ|umericalOrder|umericalSort|uttallWindow|yquistPlot))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:O(?:|NanGroupON|bservabilityGramian|bservabilityMatrix|bservableDecomposition|bservableModelQ|ceanData|ctahedron|ddQ|ff|ffset|n|nce|pacity|penAppend|penRead|penWrite|pener|penerView|pening|perate|ptimumFlowData|ptionValue|ptional|ptionalElement|ptions|ptionsPattern|r|rder|rderDistribution|rderedQ|rdering|rderingBy|rderlessPatternSequence|rnsteinUhlenbeckProcess|rthogonalMatrixQ|rthogonalize|uter|uterPolygon|uterPolyhedron|utputControllabilityMatrix|utputControllableModelQ|utputForm|utputNamePacket|utputResponse|utputStream|verBar|verDot|verHat|verTilde|verVector|verflow|verlay|verscript|verscriptBox|wenT|wnValues))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:P(?:DF|ERTDistribution|IDTune|acletDataRebuild|acletDirectoryLoad|acletDirectoryUnload|acletDisable|acletEnable|acletFind|acletFindRemote|acletInstall|acletInstallSubmit|acletNewerQ|acletObject|acletSiteObject|acletSiteRegister|acletSiteUnregister|acletSiteUpdate|acletSites|acletUninstall|adLeft|adRight|addedForm|adeApproximant|ageRankCentrality|airedBarChart|airedHistogram|airedSmoothHistogram|airedTTest|airedZTest|aletteNotebook|alindromeQ|ane|aneSelector|anel|arabolicCylinderD|arallelArray|arallelAxisPlot|arallelCombine|arallelDo|arallelEvaluate|arallelKernels|arallelMap|arallelNeeds|arallelProduct|arallelSubmit|arallelSum|arallelTable|arallelTry|arallelepiped|arallelize|arallelogram|arameterMixtureDistribution|arametricConvexOptimization|arametricFunction|arametricNDSolve|arametricNDSolveValue|arametricPlot|arametricPlot3D|arametricRegion|arentBox|arentCell|arentDirectory|arentNotebook|aretoDistribution|aretoPickandsDistribution|arkData|art|artOfSpeech|artialCorrelationFunction|articleAcceleratorData|articleData|artition|artitionsP|artitionsQ|arzenWindow|ascalDistribution|aste|asteButton|athGraph|athGraphQ|attern|atternSequence|atternTest|aulWavelet|auliMatrix|ause|eakDetect|eanoCurve|earsonChiSquareTest|earsonCorrelationTest|earsonDistribution|ercentForm|erfectNumber|erfectNumberQ|erimeter|eriodicBoundaryCondition|eriodogram|eriodogramArray|ermanent|ermissionsGroup|ermissionsGroupMemberQ|ermissionsGroups|ermissionsKey|ermissionsKeys|ermutationCycles|ermutationCyclesQ|ermutationGroup|ermutationLength|ermutationList|ermutationListQ|ermutationMatrix|ermutationMax|ermutationMin|ermutationOrder|ermutationPower|ermutationProduct|ermutationReplace|ermutationSupport|ermutations|ermute|eronaMalikFilter|ersonData|etersenGraph|haseMargins|hongShading|hysicalSystemData|ick|ieChart|ieChart3D|iecewise|iecewiseExpand|illaiTrace|illaiTraceTest|ingTime|ixelValue|ixelValuePositions|laced|laceholder|lanarAngle|lanarFaceList|lanarGraph|lanarGraphQ|lanckRadiationLaw|laneCurveData|lanetData|lanetaryMoonData|lantData|lay|lot|lot3D|luralize|lus|lusMinus|ochhammer|oint|ointFigureChart|ointLegend|ointLight|ointSize|oissonConsulDistribution|oissonDistribution|oissonPDEComponent|oissonProcess|oissonWindow|olarPlot|olyGamma|olyLog|olyaAeppliDistribution|olygon|olygonAngle|olygonCoordinates|olygonDecomposition|olygonalNumber|olyhedron|olyhedronAngle|olyhedronCoordinates|olyhedronData|olyhedronDecomposition|olyhedronGenus|olynomialExpressionQ|olynomialExtendedGCD|olynomialGCD|olynomialLCM|olynomialMod|olynomialQ|olynomialQuotient|olynomialQuotientRemainder|olynomialReduce|olynomialRemainder|olynomialSumOfSquaresList|opupMenu|opupView|opupWindow|osition|ositionIndex|ositionLargest|ositionSmallest|ositive|ositiveDefiniteMatrixQ|ositiveSemidefiniteMatrixQ|ositivelyOrientedPoints|ossibleZeroQ|ostfix|ower|owerDistribution|owerExpand|owerMod|owerModList|owerRange|owerSpectralDensity|owerSymmetricPolynomial|owersRepresentations|reDecrement|reIncrement|recedenceForm|recedes|recedesEqual|recedesSlantEqual|recedesTilde|recision|redict|redictorFunction|redictorMeasurements|redictorMeasurementsObject|reemptProtect|refix|repend|rependTo|reviousCell|reviousDate|riceGraphDistribution|rime|rimeNu|rimeOmega|rimePi|rimePowerQ|rimeQ|rimeZetaP|rimitivePolynomialQ|rimitiveRoot|rimitiveRootList|rincipalComponents|rintTemporary|rintableASCIIQ|rintout3D|rism|rivateKey|robability|robabilityDistribution|robabilityPlot|robabilityScalePlot|robitModelFit|rocessConnection|rocessInformation|rocessObject|rocessParameterAssumptions|rocessParameterQ|rocessStatus|rocesses|roduct|roductDistribution|roductLog|rogressIndicator|rojection|roportion|roportional|rotect|roteinData|runing|seudoInverse|sychrometricPropertyData|ublicKey|ulsarData|ut|utAppend|yramid))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:Q(?:Binomial|Factorial|Gamma|HypergeometricPFQ|Pochhammer|PolyGamma|RDecomposition|nDispersion|uadraticIrrationalQ|uadraticOptimization|uantile|uantilePlot|uantity|uantityArray|uantityDistribution|uantityForm|uantityMagnitude|uantityQ|uantityUnit|uantityVariable|uantityVariableCanonicalUnit|uantityVariableDimensions|uantityVariableIdentifier|uantityVariablePhysicalQuantity|uartileDeviation|uartileSkewness|uartiles|uery|ueueProperties|ueueingNetworkProcess|ueueingProcess|uiet|uietEcho|uotient|uotientRemainder))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:R(?:GBColor|Solve|SolveValue|adialAxisPlot|adialGradientFilling|adialGradientImage|adialityCentrality|adicalBox|adioButton|adioButtonBar|adon|adonTransform|amanujanTau|amanujanTauL|amanujanTauTheta|amanujanTauZ|amp|andomChoice|andomColor|andomComplex|andomDate|andomEntity|andomFunction|andomGeneratorState|andomGeoPosition|andomGraph|andomImage|andomInteger|andomPermutation|andomPoint|andomPolygon|andomPolyhedron|andomPrime|andomReal|andomSample|andomTime|andomVariate|andomWalkProcess|andomWord|ange|angeFilter|ankedMax|ankedMin|arerProbability|aster|aster3D|asterize|ational|ationalExpressionQ|ationalize|atios|awBoxes|awData|ayleighDistribution|e|eIm|eImPlot|eactionPDETerm|ead|eadByteArray|eadLine|eadList|eadString|ealAbs|ealDigits|ealExponent|ealSign|eap|econstructionMesh|ectangle|ectangleChart|ectangleChart3D|ectangularRepeatingElement|ecurrenceFilter|ecurrenceTable|educe|efine|eflectionMatrix|eflectionTransform|efresh|egion|egionBinarize|egionBoundary|egionBounds|egionCentroid|egionCongruent|egionConvert|egionDifference|egionDilation|egionDimension|egionDisjoint|egionDistance|egionDistanceFunction|egionEmbeddingDimension|egionEqual|egionErosion|egionFit|egionImage|egionIntersection|egionMeasure|egionMember|egionMemberFunction|egionMoment|egionNearest|egionNearestFunction|egionPlot|egionPlot3D|egionProduct|egionQ|egionResize|egionSimilar|egionSymmetricDifference|egionUnion|egionWithin|egularExpression|egularPolygon|egularlySampledQ|elationGraph|eleaseHold|eliabilityDistribution|eliefImage|eliefPlot|emove|emoveAlphaChannel|emoveBackground|emoveDiacritics|emoveInputStreamMethod|emoveOutputStreamMethod|emoveUsers|enameDirectory|enameFile|enewalProcess|enkoChart|epairMesh|epeated|epeatedNull|epeatedTiming|epeatingElement|eplace|eplaceAll|eplaceAt|eplaceImageValue|eplaceList|eplacePart|eplacePixelValue|eplaceRepeated|esamplingAlgorithmData|escale|escalingTransform|esetDirectory|esidue|esidueSum|esolve|esourceData|esourceObject|esourceSearch|esponseForm|est|estricted|esultant|eturn|eturnExpressionPacket|eturnPacket|eturnTextPacket|everse|everseBiorthogonalSplineWavelet|everseElement|everseEquilibrium|everseGraph|everseSort|everseSortBy|everseUpEquilibrium|evolutionPlot3D|iccatiSolve|iceDistribution|idgeFilter|iemannR|iemannSiegelTheta|iemannSiegelZ|iemannXi|iffle|ightArrow|ightArrowBar|ightArrowLeftArrow|ightComposition|ightCosetRepresentative|ightDownTeeVector|ightDownVector|ightDownVectorBar|ightTee|ightTeeArrow|ightTeeVector|ightTriangle|ightTriangleBar|ightTriangleEqual|ightUpDownVector|ightUpTeeVector|ightUpVector|ightUpVectorBar|ightVector|ightVectorBar|iskAchievementImportance|iskReductionImportance|obustConvexOptimization|ogersTanimotoDissimilarity|ollPitchYawAngles|ollPitchYawMatrix|omanNumeral|oot|ootApproximant|ootIntervals|ootLocusPlot|ootMeanSquare|ootOfUnityQ|ootReduce|ootSum|oots|otate|otateLeft|otateRight|otationMatrix|otationTransform|ound|ow|owBox|owReduce|udinShapiro|udvalisGroupRu|ule|uleDelayed|ulePlot|un|unProcess|unThrough|ussellRaoDissimilarity))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:S(?:ARIMAProcess|ARMAProcess|ASTriangle|SSTriangle|ameAs|ameQ|ampledSoundFunction|ampledSoundList|atelliteData|atisfiabilityCount|atisfiabilityInstances|atisfiableQ|ave|avitzkyGolayMatrix|awtoothWave|cale|caled|calingMatrix|calingTransform|can|cheduledTask|churDecomposition|cientificForm|corerGi|corerGiPrime|corerHi|corerHiPrime|ec|ech|echDistribution|econdOrderConeOptimization|ectorChart|ectorChart3D|eedRandom|elect|electComponents|electFirst|electedCells|electedNotebook|electionCreateCell|electionEvaluate|electionEvaluateCreateCell|electionMove|emanticImport|emanticImportString|emanticInterpretation|emialgebraicComponentInstances|emidefiniteOptimization|endMail|endMessage|equence|equenceAlignment|equenceCases|equenceCount|equenceFold|equenceFoldList|equencePosition|equenceReplace|equenceSplit|eries|eriesCoefficient|eriesData|erviceConnect|erviceDisconnect|erviceExecute|erviceObject|essionSubmit|essionTime|et|etAccuracy|etAlphaChannel|etAttributes|etCloudDirectory|etCookies|etDelayed|etDirectory|etEnvironment|etFileDate|etOptions|etPermissions|etPrecision|etSelectedNotebook|etSharedFunction|etSharedVariable|etStreamPosition|etSystemOptions|etUsers|etter|etterBar|etting|hallow|hannonWavelet|hapiroWilkTest|hare|harpen|hearingMatrix|hearingTransform|hellRegion|henCastanMatrix|hiftRegisterSequence|hiftedGompertzDistribution|hort|hortDownArrow|hortLeftArrow|hortRightArrow|hortTimeFourier|hortTimeFourierData|hortUpArrow|hortest|hortestPathFunction|how|iderealTime|iegelTheta|iegelTukeyTest|ierpinskiCurve|ierpinskiMesh|ign|ignTest|ignature|ignedRankTest|ignedRegionDistance|impleGraph|impleGraphQ|implePolygonQ|implePolyhedronQ|implex|implify|in|inIntegral|inc|inghMaddalaDistribution|ingularValueDecomposition|ingularValueList|ingularValuePlot|inh|inhIntegral|ixJSymbol|keleton|keletonTransform|kellamDistribution|kewNormalDistribution|kewness|kip|liceContourPlot3D|liceDensityPlot3D|liceDistribution|liceVectorPlot3D|lideView|lider|lider2D|liderBox|lot|lotSequence|mallCircle|mithDecomposition|mithDelayCompensator|mithWatermanSimilarity|moothDensityHistogram|moothHistogram|moothHistogram3D|moothKernelDistribution|nDispersion|ocketConnect|ocketListen|ocketListener|ocketObject|ocketOpen|ocketReadMessage|ocketReadyQ|ocketWaitAll|ocketWaitNext|ockets|okalSneathDissimilarity|olarEclipse|olarSystemFeatureData|olarTime|olidAngle|olidData|olidRegionQ|olve|olveAlways|olveValues|ort|ortBy|ound|oundNote|ourcePDETerm|ow|paceCurveData|pacer|pan|parseArray|parseArrayQ|patialGraphDistribution|patialMedian|peak|pearmanRankTest|pearmanRho|peciesData|pectralLineData|pectrogram|pectrogramArray|pecularity|peechSynthesize|pellingCorrectionList|phere|pherePoints|phericalBesselJ|phericalBesselY|phericalHankelH1|phericalHankelH2|phericalHarmonicY|phericalPlot3D|phericalShell|pheroidalEigenvalue|pheroidalJoiningFactor|pheroidalPS|pheroidalPSPrime|pheroidalQS|pheroidalQSPrime|pheroidalRadialFactor|pheroidalS1|pheroidalS1Prime|pheroidalS2|pheroidalS2Prime|plicedDistribution|plit|plitBy|pokenString|potLight|qrt|qrtBox|quare|quareFreeQ|quareIntersection|quareMatrixQ|quareRepeatingElement|quareSubset|quareSubsetEqual|quareSuperset|quareSupersetEqual|quareUnion|quareWave|quaredEuclideanDistance|quaresR|tableDistribution|tack|tackBegin|tackComplete|tackInhibit|tackedDateListPlot|tackedListPlot|tadiumShape|tandardAtmosphereData|tandardDeviation|tandardDeviationFilter|tandardForm|tandardOceanData|tandardize|tandbyDistribution|tar|tarClusterData|tarData|tarGraph|tartProcess|tateFeedbackGains|tateOutputEstimator|tateResponse|tateSpaceModel|tateSpaceTransform|tateTransformationLinearize|tationaryDistribution|tationaryWaveletPacketTransform|tationaryWaveletTransform|tatusArea|tatusCentrality|tieltjesGamma|tippleShading|tirlingS1|tirlingS2|toppingPowerData|tratonovichProcess|treamDensityPlot|treamPlot|treamPlot3D|treamPosition|treams|tringCases|tringContainsQ|tringCount|tringDelete|tringDrop|tringEndsQ|tringExpression|tringExtract|tringForm|tringFormat|tringFormatQ|tringFreeQ|tringInsert|tringJoin|tringLength|tringMatchQ|tringPadLeft|tringPadRight|tringPart|tringPartition|tringPosition|tringQ|tringRepeat|tringReplace|tringReplaceList|tringReplacePart|tringReverse|tringRiffle|tringRotateLeft|tringRotateRight|tringSkeleton|tringSplit|tringStartsQ|tringTake|tringTakeDrop|tringTemplate|tringToByteArray|tringToStream|tringTrim|tripBoxes|tructuralImportance|truveH|truveL|tudentTDistribution|tyle|tyleBox|tyleData|ubMinus|ubPlus|ubStar|ubValues|ubdivide|ubfactorial|ubgraph|ubresultantPolynomialRemainders|ubresultantPolynomials|ubresultants|ubscript|ubscriptBox|ubsequences|ubset|ubsetEqual|ubsetMap|ubsetQ|ubsets|ubstitutionSystem|ubsuperscript|ubsuperscriptBox|ubtract|ubtractFrom|ubtractSides|ucceeds|ucceedsEqual|ucceedsSlantEqual|ucceedsTilde|uccess|uchThat|um|umConvergence|unPosition|unrise|unset|uperDagger|uperMinus|uperPlus|uperStar|upernovaData|uperscript|uperscriptBox|uperset|upersetEqual|urd|urfaceArea|urfaceData|urvivalDistribution|urvivalFunction|urvivalModel|urvivalModelFit|uzukiDistribution|uzukiGroupSuz|watchLegend|witch|ymbol|ymbolName|ymletWavelet|ymmetric|ymmetricGroup|ymmetricKey|ymmetricMatrixQ|ymmetricPolynomial|ymmetricReduction|ymmetrize|ymmetrizedArray|ymmetrizedArrayRules|ymmetrizedDependentComponents|ymmetrizedIndependentComponents|ymmetrizedReplacePart|ynonyms|yntaxInformation|yntaxLength|yntaxPacket|yntaxQ|ystemDialogInput|ystemInformation|ystemOpen|ystemOptions|ystemProcessData|ystemProcesses|ystemsConnectionsModel|ystemsModelControllerData|ystemsModelDelay|ystemsModelDelayApproximate|ystemsModelDelete|ystemsModelDimensions|ystemsModelExtract|ystemsModelFeedbackConnect|ystemsModelLinearity|ystemsModelMerge|ystemsModelOrder|ystemsModelParallelConnect|ystemsModelSeriesConnect|ystemsModelStateFeedbackConnect|ystemsModelVectorRelativeOrders))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:T(?:Test|abView|able|ableForm|agBox|agSet|agSetDelayed|agUnset|ake|akeDrop|akeLargest|akeLargestBy|akeList|akeSmallest|akeSmallestBy|akeWhile|ally|an|anh|askAbort|askExecute|askObject|askRemove|askResume|askSuspend|askWait|asks|autologyQ|eXForm|elegraphProcess|emplateApply|emplateBox|emplateExpression|emplateIf|emplateObject|emplateSequence|emplateSlot|emplateWith|emporalData|ensorContract|ensorDimensions|ensorExpand|ensorProduct|ensorRank|ensorReduce|ensorSymmetry|ensorTranspose|ensorWedge|erminatedEvaluation|estReport|estReportObject|estResultObject|etrahedron|ext|extCell|extData|extGrid|extPacket|extRecognize|extSentences|extString|extTranslation|extWords|exture|herefore|hermodynamicData|hermometerGauge|hickness|hinning|hompsonGroupTh|hread|hreeJSymbol|hreshold|hrough|hrow|hueMorse|humbnail|ideData|ilde|ildeEqual|ildeFullEqual|ildeTilde|imeConstrained|imeObject|imeObjectQ|imeRemaining|imeSeries|imeSeriesAggregate|imeSeriesForecast|imeSeriesInsert|imeSeriesInvertibility|imeSeriesMap|imeSeriesMapThread|imeSeriesModel|imeSeriesModelFit|imeSeriesResample|imeSeriesRescale|imeSeriesShift|imeSeriesThread|imeSeriesWindow|imeSystemConvert|imeUsed|imeValue|imeZoneConvert|imeZoneOffset|imelinePlot|imes|imesBy|iming|itsGroupT|oBoxes|oCharacterCode|oContinuousTimeModel|oDiscreteTimeModel|oEntity|oExpression|oInvertibleTimeSeries|oLowerCase|oNumberField|oPolarCoordinates|oRadicals|oRules|oSphericalCoordinates|oString|oUpperCase|oeplitzMatrix|ogether|oggler|ogglerBar|ooltip|oonShading|opHatTransform|opologicalSort|orus|orusGraph|otal|otalVariationFilter|ouchPosition|r|race|raceDialog|racePrint|raceScan|racyWidomDistribution|radingChart|raditionalForm|ransferFunctionCancel|ransferFunctionExpand|ransferFunctionFactor|ransferFunctionModel|ransferFunctionPoles|ransferFunctionTransform|ransferFunctionZeros|ransformationFunction|ransformationMatrix|ransformedDistribution|ransformedField|ransformedProcess|ransformedRegion|ransitiveClosureGraph|ransitiveReductionGraph|ranslate|ranslationTransform|ransliterate|ranspose|ravelDirections|ravelDirectionsData|ravelDistance|ravelDistanceList|ravelTime|reeForm|reeGraph|reeGraphQ|reePlot|riangle|riangleWave|riangularDistribution|riangulateMesh|rigExpand|rigFactor|rigFactorList|rigReduce|rigToExp|rigger|rimmedMean|rimmedVariance|ropicalStormData|rueQ|runcatedDistribution|runcatedPolyhedron|sallisQExponentialDistribution|sallisQGaussianDistribution|ube|ukeyLambdaDistribution|ukeyWindow|unnelData|uples|uranGraph|uringMachine|uttePolynomial|woWayRule|ypeHint))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:U(?:RL|RLBuild|RLDecode|RLDispatcher|RLDownload|RLEncode|RLExecute|RLExpand|RLParse|RLQueryDecode|RLQueryEncode|RLRead|RLResponseTime|RLShorten|RLSubmit|nateQ|ncompress|nderBar|nderflow|nderoverscript|nderoverscriptBox|nderscript|nderscriptBox|nderseaFeatureData|ndirectedEdge|ndirectedGraph|ndirectedGraphQ|nequal|nequalTo|nevaluated|niformDistribution|niformGraphDistribution|niformPolyhedron|niformSumDistribution|ninstall|nion|nionPlus|nique|nitBox|nitConvert|nitDimensions|nitRootTest|nitSimplify|nitStep|nitTriangle|nitVector|nitaryMatrixQ|nitize|niverseModelData|niversityData|nixTime|nprotect|nsameQ|nset|nsetShared|ntil|pArrow|pArrowBar|pArrowDownArrow|pDownArrow|pEquilibrium|pSet|pSetDelayed|pTee|pTeeArrow|pTo|pValues|pdate|pperCaseQ|pperLeftArrow|pperRightArrow|pperTriangularMatrix|pperTriangularMatrixQ|pperTriangularize|psample|singFrontEnd))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:V(?:alueQ|alues|ariables|ariance|arianceEquivalenceTest|arianceGammaDistribution|arianceTest|ectorAngle|ectorDensityPlot|ectorDisplacementPlot|ectorDisplacementPlot3D|ectorGreater|ectorGreaterEqual|ectorLess|ectorLessEqual|ectorPlot|ectorPlot3D|ectorQ|ectors|ee|erbatim|erificationTest|ertexAdd|ertexChromaticNumber|ertexComponent|ertexConnectivity|ertexContract|ertexCorrelationSimilarity|ertexCosineSimilarity|ertexCount|ertexCoverQ|ertexDegree|ertexDelete|ertexDiceSimilarity|ertexEccentricity|ertexInComponent|ertexInComponentGraph|ertexInDegree|ertexIndex|ertexJaccardSimilarity|ertexList|ertexOutComponent|ertexOutComponentGraph|ertexOutDegree|ertexQ|ertexReplace|ertexTransitiveGraphQ|ertexWeightedGraphQ|erticalBar|erticalGauge|erticalSeparator|erticalSlider|erticalTilde|oiceStyleData|oigtDistribution|olcanoData|olume|onMisesDistribution|oronoiMesh))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:W(?:aitAll|aitNext|akebyDistribution|alleniusHypergeometricDistribution|aringYuleDistribution|arpingCorrespondence|arpingDistance|atershedComponents|atsonUSquareTest|attsStrogatzGraphDistribution|avePDEComponent|aveletBestBasis|aveletFilterCoefficients|aveletImagePlot|aveletListPlot|aveletMapIndexed|aveletMatrixPlot|aveletPhi|aveletPsi|aveletScalogram|aveletThreshold|eakStationarity|eaklyConnectedComponents|eaklyConnectedGraphComponents|eaklyConnectedGraphQ|eatherData|eatherForecastData|eberE|edge|eibullDistribution|eierstrassE1|eierstrassE2|eierstrassE3|eierstrassEta1|eierstrassEta2|eierstrassEta3|eierstrassHalfPeriodW1|eierstrassHalfPeriodW2|eierstrassHalfPeriodW3|eierstrassHalfPeriods|eierstrassInvariantG2|eierstrassInvariantG3|eierstrassInvariants|eierstrassP|eierstrassPPrime|eierstrassSigma|eierstrassZeta|eightedAdjacencyGraph|eightedAdjacencyMatrix|eightedData|eightedGraphQ|elchWindow|heelGraph|henEvent|hich|hile|hiteNoiseProcess|hittakerM|hittakerW|ienerFilter|ienerProcess|ignerD|ignerSemicircleDistribution|ikipediaData|ilksW|ilksWTest|indDirectionData|indSpeedData|indVectorData|indingCount|indingPolygon|insorizedMean|insorizedVariance|ishartMatrixDistribution|ith|olframAlpha|olframLanguageData|ordCloud|ordCount|ordCounts|ordData|ordDefinition|ordFrequency|ordFrequencyData|ordList|ordStem|ordTranslation|rite|riteLine|riteString|ronskian))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:X(?:MLElement|MLObject|MLTemplate|YZColor|nor|or))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:Y(?:uleDissimilarity))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:Z(?:IPCodeData|Test|Transform|ernikeR|eroSymmetric|eta|etaZero|ipfDistribution))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "System`(?:A(?:cceptanceThreshold|ccuracyGoal|ctiveStyle|ddOnHelpPath|djustmentBoxOptions|lignment|lignmentPoint|llowGroupClose|llowInlineCells|llowLooseGrammar|llowReverseGroupClose|llowScriptLevelChange|llowVersionUpdate|llowedCloudExtraParameters|llowedCloudParameterExtensions|llowedDimensions|llowedFrequencyRange|llowedHeads|lternativeHypothesis|ltitudeMethod|mbiguityFunction|natomySkinStyle|nchoredSearch|nimationDirection|nimationRate|nimationRepetitions|nimationRunTime|nimationRunning|nimationTimeIndex|nnotationRules|ntialiasing|ppearance|ppearanceElements|ppearanceRules|spectRatio|ssociationFormat|ssumptions|synchronous|ttachedCell|udioChannelAssignment|udioEncoding|udioInputDevice|udioLabel|udioOutputDevice|uthentication|utoAction|utoCopy|utoDelete|utoGeneratedPackage|utoIndent|utoItalicWords|utoMultiplicationSymbol|utoOpenNotebooks|utoOpenPalettes|utoOperatorRenderings|utoRemove|utoScroll|utoSpacing|utoloadPath|utorunSequencing|xes|xesEdge|xesLabel|xesOrigin|xesStyle))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:B(?:ackground|arOrigin|arSpacing|aseStyle|aselinePosition|inaryFormat|ookmarks|ooleanStrings|oundaryStyle|oxBaselineShift|oxFormFormatTypes|oxFrame|oxMargins|oxRatios|oxStyle|oxed|ubbleScale|ubbleSizes|uttonBoxOptions|uttonData|uttonFunction|uttonMinHeight|uttonSource|yteOrdering))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:C(?:alendarType|alloutMarker|alloutStyle|aptureRunning|aseOrdering|elestialSystem|ellAutoOverwrite|ellBaseline|ellBracketOptions|ellChangeTimes|ellContext|ellDingbat|ellDingbatMargin|ellDynamicExpression|ellEditDuplicate|ellEpilog|ellEvaluationDuplicate|ellEvaluationFunction|ellEventActions|ellFrame|ellFrameColor|ellFrameLabelMargins|ellFrameLabels|ellFrameMargins|ellGrouping|ellGroupingRules|ellHorizontalScrolling|ellID|ellLabel|ellLabelAutoDelete|ellLabelMargins|ellLabelPositioning|ellLabelStyle|ellLabelTemplate|ellMargins|ellOpen|ellProlog|ellSize|ellTags|haracterEncoding|haracterEncodingsPath|hartBaseStyle|hartElementFunction|hartElements|hartLabels|hartLayout|hartLegends|hartStyle|lassPriors|lickToCopyEnabled|lipPlanes|lipPlanesStyle|lipRange|lippingStyle|losingAutoSave|loudBase|loudObjectNameFormat|loudObjectURLType|lusterDissimilarityFunction|odeAssistOptions|olorCoverage|olorFunction|olorFunctionBinning|olorFunctionScaling|olorRules|olorSelectorSettings|olorSpace|olumnAlignments|olumnLines|olumnSpacings|olumnWidths|olumnsEqual|ombinerFunction|ommonDefaultFormatTypes|ommunityBoundaryStyle|ommunityLabels|ommunityRegionStyle|ompilationOptions|ompilationTarget|ompiled|omplexityFunction|ompressionLevel|onfidenceLevel|onfidenceRange|onfidenceTransform|onfigurationPath|onstants|ontentPadding|ontentSelectable|ontentSize|ontinuousAction|ontourLabels|ontourShading|ontourStyle|ontours|ontrolPlacement|ontrolType|ontrollerLinking|ontrollerMethod|ontrollerPath|ontrolsRendering|onversionRules|ookieFunction|oordinatesToolOptions|opyFunction|opyable|ornerNeighbors|ounterAssignments|ounterFunction|ounterIncrements|ounterStyleMenuListing|ovarianceEstimatorFunction|reateCellID|reateIntermediateDirectories|riterionFunction|ubics|urveClosed))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:D(?:ataRange|ataReversed|atasetTheme|ateFormat|ateFunction|ateGranularity|ateReduction|ateTicksFormat|ayCountConvention|efaultDuplicateCellStyle|efaultDuration|efaultElement|efaultFontProperties|efaultFormatType|efaultInlineFormatType|efaultNaturalLanguage|efaultNewCellStyle|efaultNewInlineCellStyle|efaultNotebook|efaultOptions|efaultPrintPrecision|efaultStyleDefinitions|einitialization|eletable|eleteContents|eletionWarning|elimiterAutoMatching|elimiterFlashTime|elimiterMatching|elimiters|eliveryFunction|ependentVariables|eployed|escriptorStateSpace|iacriticalPositioning|ialogProlog|ialogSymbols|igitBlock|irectedEdges|irection|iscreteVariables|ispersionEstimatorFunction|isplayAllSteps|isplayFunction|istanceFunction|istributedContexts|ithering|ividers|ockedCell|ockedCells|ynamicEvaluationTimeout|ynamicModuleValues|ynamicUpdating))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:E(?:clipseType|dgeCapacity|dgeCost|dgeLabelStyle|dgeLabels|dgeShapeFunction|dgeStyle|dgeValueRange|dgeValueSizes|dgeWeight|ditCellTagsSettings|ditable|lidedForms|nabled|pilog|pilogFunction|scapeRadius|valuatable|valuationCompletionAction|valuationElements|valuationMonitor|valuator|valuatorNames|ventLabels|xcludePods|xcludedContexts|xcludedForms|xcludedLines|xcludedPhysicalQuantities|xclusions|xclusionsStyle|xponentFunction|xponentPosition|xponentStep|xponentialFamily|xportAutoReplacements|xpressionUUID|xtension|xtentElementFunction|xtentMarkers|xtentSize|xternalDataCharacterEncoding|xternalOptions|xternalTypeSignature))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:F(?:aceGrids|aceGridsStyle|ailureAction|eatureNames|eatureTypes|eedbackSector|eedbackSectorStyle|eedbackType|ieldCompletionFunction|ieldHint|ieldHintStyle|ieldMasked|ieldSize|ileNameDialogSettings|ileNameForms|illing|illingStyle|indSettings|itRegularization|ollowRedirects|ontColor|ontFamily|ontSize|ontSlant|ontSubstitutions|ontTracking|ontVariations|ontWeight|orceVersionInstall|ormBoxOptions|ormLayoutFunction|ormProtectionMethod|ormatType|ormatTypeAutoConvert|ourierParameters|ractionBoxOptions|ractionLine|rame|rameBoxOptions|rameLabel|rameMargins|rameRate|rameStyle|rameTicks|rameTicksStyle|rontEndEventActions|unctionSpace))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:G(?:apPenalty|augeFaceElementFunction|augeFaceStyle|augeFrameElementFunction|augeFrameSize|augeFrameStyle|augeLabels|augeMarkers|augeStyle|aussianIntegers|enerateConditions|eneratedCell|eneratedDocumentBinding|eneratedParameters|eneratedQuantityMagnitudes|eneratorDescription|eneratorHistoryLength|eneratorOutputType|eoArraySize|eoBackground|eoCenter|eoGridLines|eoGridLinesStyle|eoGridRange|eoGridRangePadding|eoLabels|eoLocation|eoModel|eoProjection|eoRange|eoRangePadding|eoResolution|eoScaleBar|eoServer|eoStylingImageFunction|eoZoomLevel|radient|raphHighlight|raphHighlightStyle|raphLayerStyle|raphLayers|raphLayout|ridCreationSettings|ridDefaultElement|ridFrame|ridFrameMargins|ridLines|ridLinesStyle|roupActionBase|roupPageBreakWithin))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:H(?:eaderAlignment|eaderBackground|eaderDisplayFunction|eaderLines|eaderSize|eaderStyle|eads|elpBrowserSettings|iddenItems|olidayCalendar|yperlinkAction|yphenation))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:I(?:conRules|gnoreCase|gnoreDiacritics|gnorePunctuation|mageCaptureFunction|mageFormattingWidth|mageLabels|mageLegends|mageMargins|magePadding|magePreviewFunction|mageRegion|mageResolution|mageSize|mageSizeAction|mageSizeMultipliers|magingDevice|mportAutoReplacements|mportOptions|ncludeConstantBasis|ncludeDefinitions|ncludeDirectories|ncludeFileExtension|ncludeGeneratorTasks|ncludeInflections|ncludeMetaInformation|ncludePods|ncludeQuantities|ncludeSingularSolutions|ncludeWindowTimes|ncludedContexts|ndeterminateThreshold|nflationMethod|nheritScope|nitialSeeding|nitialization|nitializationCell|nitializationCellEvaluation|nitializationCellWarning|nputAliases|nputAssumptions|nputAutoReplacements|nsertResults|nsertionFunction|nteractive|nterleaving|nterpolationOrder|nterpolationPoints|nterpretationBoxOptions|nterpretationFunction|ntervalMarkers|ntervalMarkersStyle|nverseFunctions|temAspectRatio|temDisplayFunction|temSize|temStyle))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:J(?:oined))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:K(?:eepExistingVersion|eyCollisionFunction|eypointStrength))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:L(?:abelStyle|abelVisibility|abelingFunction|abelingSize|anguage|anguageCategory|ayerSizeFunction|eaderSize|earningRate|egendAppearance|egendFunction|egendLabel|egendLayout|egendMargins|egendMarkerSize|egendMarkers|ighting|ightingAngle|imitsPositioning|imitsPositioningTokens|ineBreakWithin|ineIndent|ineIndentMaxFraction|ineIntegralConvolutionScale|ineSpacing|inearOffsetFunction|inebreakAdjustments|inkFunction|inkProtocol|istFormat|istPickerBoxOptions|ocalizeVariables|ocatorAutoCreate|ocatorRegion|ooping))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:M(?:agnification|ailAddressValidation|ailResponseFunction|ailSettings|asking|atchLocalNames|axCellMeasure|axColorDistance|axDuration|axExtraBandwidths|axExtraConditions|axFeatureDisplacement|axFeatures|axItems|axIterations|axMixtureKernels|axOverlapFraction|axPlotPoints|axRecursion|axStepFraction|axStepSize|axSteps|emoryConstraint|enuCommandKey|enuSortingValue|enuStyle|esh|eshCellHighlight|eshCellLabel|eshCellMarker|eshCellShapeFunction|eshCellStyle|eshFunctions|eshQualityGoal|eshRefinementFunction|eshShading|eshStyle|etaInformation|ethod|inColorDistance|inIntervalSize|inPointSeparation|issingBehavior|issingDataMethod|issingDataRules|issingString|issingStyle|odal|odulus|ultiaxisArrangement|ultiedgeStyle|ultilaunchWarning|ultilineFunction|ultiselection))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:N(?:icholsGridLines|ominalVariables|onConstants|ormFunction|ormalized|ormalsFunction|otebookAutoSave|otebookBrowseDirectory|otebookConvertSettings|otebookDynamicExpression|otebookEventActions|otebookPath|otebooksMenu|otificationFunction|ullRecords|ullWords|umberFormat|umberMarks|umberMultiplier|umberPadding|umberPoint|umberSeparator|umberSigns|yquistGridLines))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:O(?:pacityFunction|pacityFunctionScaling|peratingSystem|ptionInspectorSettings|utputAutoOverwrite|utputSizeLimit|verlaps|verscriptBoxOptions|verwriteTarget))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:P(?:IDDerivativeFilter|IDFeedforward|acletSite|adding|addingSize|ageBreakAbove|ageBreakBelow|ageBreakWithin|ageFooterLines|ageFooters|ageHeaderLines|ageHeaders|ageTheme|ageWidth|alettePath|aneled|aragraphIndent|aragraphSpacing|arallelization|arameterEstimator|artBehavior|artitionGranularity|assEventsDown|assEventsUp|asteBoxFormInlineCells|ath|erformanceGoal|ermissions|haseRange|laceholderReplace|layRange|lotLabel|lotLabels|lotLayout|lotLegends|lotMarkers|lotPoints|lotRange|lotRangeClipping|lotRangePadding|lotRegion|lotStyle|lotTheme|odStates|odWidth|olarAxes|olarAxesOrigin|olarGridLines|olarTicks|oleZeroMarkers|recisionGoal|referencesPath|reprocessingRules|reserveColor|reserveImageOptions|rincipalValue|rintAction|rintPrecision|rintingCopies|rintingOptions|rintingPageRange|rintingStartingPageNumber|rintingStyleEnvironment|rintout3DPreviewer|rivateCellOptions|rivateEvaluationOptions|rivateFontOptions|rivateNotebookOptions|rivatePaths|rocessDirectory|rocessEnvironment|rocessEstimator|rogressReporting|rolog|ropagateAborts))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:Q(?:uartics))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:R(?:adicalBoxOptions|andomSeeding|asterSize|eImLabels|eImStyle|ealBlockDiagonalForm|ecognitionPrior|ecordLists|ecordSeparators|eferenceLineStyle|efreshRate|egionBoundaryStyle|egionFillingStyle|egionFunction|egionSize|egularization|enderingOptions|equiredPhysicalQuantities|esampling|esamplingMethod|esolveContextAliases|estartInterval|eturnReceiptFunction|evolutionAxis|otateLabel|otationAction|oundingRadius|owAlignments|owLines|owMinHeight|owSpacings|owsEqual|ulerUnits|untimeAttributes|untimeOptions))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:S(?:ameTest|ampleDepth|ampleRate|amplingPeriod|aveConnection|aveDefinitions|aveable|caleDivisions|caleOrigin|calePadding|caleRangeStyle|caleRanges|calingFunctions|cientificNotationThreshold|creenStyleEnvironment|criptBaselineShifts|criptLevel|criptMinSize|criptSizeMultipliers|crollPosition|crollbars|crollingOptions|ectorOrigin|ectorSpacing|electable|elfLoopStyle|eriesTermGoal|haringList|howAutoSpellCheck|howAutoStyles|howCellBracket|howCellLabel|howCellTags|howClosedCellArea|howContents|howCursorTracker|howGroupOpener|howPageBreaks|howSelection|howShortBoxForm|howSpecialCharacters|howStringCharacters|hrinkingDelay|ignPadding|ignificanceLevel|imilarityRules|ingleLetterItalics|liderBoxOptions|ortedBy|oundVolume|pacings|panAdjustments|panCharacterRounding|panLineThickness|panMaxSize|panMinSize|panSymmetric|pecificityGoal|pellingCorrection|pellingDictionaries|pellingDictionariesPath|pellingOptions|phericalRegion|plineClosed|plineDegree|plineKnots|plineWeights|qrtBoxOptions|tabilityMargins|tabilityMarginsStyle|tandardized|tartingStepSize|tateSpaceRealization|tepMonitor|trataVariables|treamColorFunction|treamColorFunctionScaling|treamMarkers|treamPoints|treamScale|treamStyle|trictInequalities|tripOnInput|tripWrapperBoxes|tructuredSelection|tyleBoxAutoDelete|tyleDefinitions|tyleHints|tyleMenuListing|tyleNameDialogSettings|tyleSheetPath|ubscriptBoxOptions|ubsuperscriptBoxOptions|ubtitleEncoding|uperscriptBoxOptions|urdForm|ynchronousInitialization|ynchronousUpdating|yntaxForm|ystemHelpPath|ystemsModelLabels))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:T(?:abFilling|abSpacings|ableAlignments|ableDepth|ableDirections|ableHeadings|ableSpacing|agBoxOptions|aggingRules|argetFunctions|argetUnits|emplateBoxOptions|emporalRegularity|estID|extAlignment|extClipboardType|extJustification|extureCoordinateFunction|extureCoordinateScaling|icks|icksStyle|imeConstraint|imeDirection|imeFormat|imeGoal|imeSystem|imeZone|okenWords|olerance|ooltipDelay|ooltipStyle|otalWidth|ouchscreenAutoZoom|ouchscreenControlPlacement|raceAbove|raceBackward|raceDepth|raceForward|raceOff|raceOn|raceOriginal|rackedSymbols|rackingFunction|raditionalFunctionNotation|ransformationClass|ransformationFunctions|ransitionDirection|ransitionDuration|ransitionEffect|ranslationOptions|ravelMethod|rendStyle|rig))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:U(?:nderoverscriptBoxOptions|nderscriptBoxOptions|ndoOptions|ndoTrackedVariables|nitSystem|nityDimensions|nsavedVariables|pdateInterval|pdatePacletSites|tilityFunction))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:V(?:alidationLength|alidationSet|alueDimensions|arianceEstimatorFunction|ectorAspectRatio|ectorColorFunction|ectorColorFunctionScaling|ectorMarkers|ectorPoints|ectorRange|ectorScaling|ectorSizes|ectorStyle|erifyConvergence|erifySecurityCertificates|erifySolutions|erifyTestAssumptions|ersionedPreferences|ertexCapacity|ertexColors|ertexCoordinates|ertexDataCoordinates|ertexLabelStyle|ertexLabels|ertexNormals|ertexShape|ertexShapeFunction|ertexSize|ertexStyle|ertexTextureCoordinates|ertexWeight|ideoEncoding|iewAngle|iewCenter|iewMatrix|iewPoint|iewProjection|iewRange|iewVector|iewVertical|isible))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:W(?:aveletScale|eights|hitePoint|indowClickSelect|indowElements|indowFloating|indowFrame|indowFrameElements|indowMargins|indowOpacity|indowSize|indowStatusArea|indowTitle|indowToolbars|ordOrientation|ordSearch|ordSelectionFunction|ordSeparators|ordSpacings|orkingPrecision|rapAround))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:Z(?:eroTest|eroWidthTimes))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:A(?:bove|fter|lgebraics|ll|nonymous|utomatic|xis))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:B(?:ack|ackward|aseline|efore|elow|lack|lue|old|ooleans|ottom|oxes|rown|yte))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:C(?:atalan|ellStyle|enter|haracter|omplexInfinity|omplexes|onstant|yan))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:D(?:ashed|efaultAxesStyle|efaultBaseStyle|efaultBoxStyle|efaultFaceGridsStyle|efaultFieldHintStyle|efaultFrameStyle|efaultFrameTicksStyle|efaultGridLinesStyle|efaultLabelStyle|efaultMenuStyle|efaultTicksStyle|efaultTooltipStyle|egree|elimiter|igitCharacter|otDashed|otted))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:E(?:|ndOfBuffer|ndOfFile|ndOfLine|ndOfString|ulerGamma|xpression))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:F(?:alse|lat|ontProperties|orward|orwardBackward|riday|ront|rontEndDynamicExpression|ull))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:G(?:eneral|laisher|oldenAngle|oldenRatio|ray|reen))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:H(?:ere|exadecimalCharacter|oldAll|oldAllComplete|oldFirst|oldRest))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:I(?:|ndeterminate|nfinity|nherited|nteger|ntegers|talic))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:K(?:hinchin))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:L(?:arge|arger|eft|etterCharacter|ightBlue|ightBrown|ightCyan|ightGray|ightGreen|ightMagenta|ightOrange|ightPink|ightPurple|ightRed|ightYellow|istable|ocked))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:M(?:achinePrecision|agenta|anual|edium|eshCellCentroid|eshCellMeasure|eshCellQuality|onday))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:N(?:HoldAll|HoldFirst|HoldRest|egativeIntegers|egativeRationals|egativeReals|oWhitespace|onNegativeIntegers|onNegativeRationals|onNegativeReals|onPositiveIntegers|onPositiveRationals|onPositiveReals|one|ow|ull|umber|umberString|umericFunction))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:O(?:neIdentity|range|rderless))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:P(?:i|ink|lain|ositiveIntegers|ositiveRationals|ositiveReals|rimes|rotected|unctuationCharacter|urple))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:R(?:ationals|eadProtected|eal|eals|ecord|ed|ight))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:S(?:aturday|equenceHold|mall|maller|panFromAbove|panFromBoth|panFromLeft|tartOfLine|tartOfString|tring|truckthrough|tub|unday))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:T(?:emporary|hick|hin|hursday|iny|oday|omorrow|op|ransparent|rue|uesday))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:U(?:ndefined|nderlined))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:W(?:ednesday|hite|hitespace|hitespaceCharacter|ord|ordBoundary|ordCharacter))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:Y(?:ellow|esterday))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:\\$(?:Aborted|ActivationKey|AllowDataUpdates|AllowInternet|AssertFunction|Assumptions|AudioInputDevices|AudioOutputDevices|BaseDirectory|BasePacletsDirectory|BatchInput|BatchOutput|ByteOrdering|CacheBaseDirectory|Canceled|CharacterEncoding|CharacterEncodings|CloudAccountName|CloudBase|CloudConnected|CloudCreditsAvailable|CloudEvaluation|CloudExpressionBase|CloudObjectNameFormat|CloudObjectURLType|CloudRootDirectory|CloudSymbolBase|CloudUserID|CloudUserUUID|CloudVersion|CommandLine|CompilationTarget|Context|ContextAliases|ContextPath|ControlActiveSetting|Cookies|CreationDate|CurrentLink|CurrentTask|DateStringFormat|DefaultAudioInputDevice|DefaultAudioOutputDevice|DefaultFrontEnd|DefaultImagingDevice|DefaultKernels|DefaultLocalBase|DefaultLocalKernel|Display|DisplayFunction|DistributedContexts|DynamicEvaluation|Echo|EmbedCodeEnvironments|EmbeddableServices|Epilog|EvaluationCloudBase|EvaluationCloudObject|EvaluationEnvironment|ExportFormats|Failed|FontFamilies|FrontEnd|FrontEndSession|GeoLocation|GeoLocationCity|GeoLocationCountry|GeoLocationSource|HomeDirectory|IgnoreEOF|ImageFormattingWidth|ImageResolution|ImagingDevice|ImagingDevices|ImportFormats|InitialDirectory|Input|InputFileName|InputStreamMethods|Inspector|InstallationDirectory|InterpreterTypes|IterationLimit|KernelCount|KernelID|Language|LibraryPath|LicenseExpirationDate|LicenseID|LicenseServer|Linked|LocalBase|LocalSymbolBase|MachineAddresses|MachineDomains|MachineEpsilon|MachineID|MachineName|MachinePrecision|MachineType|MaxExtraPrecision|MaxMachineNumber|MaxNumber|MaxPiecewiseCases|MaxPrecision|MaxRootDegree|MessageGroups|MessageList|MessagePrePrint|Messages|MinMachineNumber|MinNumber|MinPrecision|MobilePhone|ModuleNumber|NetworkConnected|NewMessage|NewSymbol|NotebookInlineStorageLimit|Notebooks|NumberMarks|OperatingSystem|Output|OutputSizeLimit|OutputStreamMethods|Packages|ParentLink|ParentProcessID|PasswordFile|Path|PathnameSeparator|PerformanceGoal|Permissions|PlotTheme|Printout3DPreviewer|ProcessID|ProcessorCount|ProcessorType|ProgressReporting|RandomGeneratorState|RecursionLimit|ReleaseNumber|RequesterAddress|RequesterCloudUserID|RequesterCloudUserUUID|RequesterWolframID|RequesterWolframUUID|RootDirectory|ScriptCommandLine|ScriptInputString|Services|SessionID|SharedFunctions|SharedVariables|SoundDisplayFunction|SynchronousEvaluation|System|SystemCharacterEncoding|SystemID|SystemShell|SystemTimeZone|SystemWordLength|TemplatePath|TemporaryDirectory|TimeUnit|TimeZone|TimeZoneEntity|TimedOut|UnitSystem|Urgent|UserAgentString|UserBaseDirectory|UserBasePacletsDirectory|UserDocumentsDirectory|UserURLBase|Username|Version|VersionNumber|WolframDocumentsDirectory|WolframID|WolframUUID))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "System`(?:A(?:bortScheduledTask|ctive|lgebraicRules|lternateImage|natomyForm|nimationCycleOffset|nimationCycleRepetitions|nimationDisplayTime|spectRatioFixed|stronomicalData|synchronousTaskObject|synchronousTasks|udioDevice|udioLooping))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "System`(?:B(?:uttonEvaluator|uttonExpandable|uttonFrame|uttonMargins|uttonNote|uttonStyle))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "System`(?:C(?:DFInformation|hebyshevDistance|lassifierInformation|lipFill|olorOutput|olumnForm|ompose|onstantArrayLayer|onstantPlusLayer|onstantTimesLayer|onstrainedMax|onstrainedMin|ontourGraphics|ontourLines|onversionOptions|reateScheduledTask|reateTemporary|urry))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "System`(?:D(?:atabinRemove|ate|ebug|efaultColor|efaultFont|ensityGraphics|isplay|isplayString|otPlusLayer|ragAndDrop))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "System`(?:E(?:dgeLabeling|dgeRenderingFunction|valuateScheduledTask|xpectedValue))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "System`(?:F(?:actorComplete|ontForm|ormTheme|romDate|ullOptions))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "System`(?:G(?:raphStyle|raphicsArray|raphicsSpacing|ridBaseline))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "System`(?:H(?:TMLSave|eldPart|iddenSurface|omeDirectory))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "System`(?:I(?:mageRotated|nstanceNormalizationLayer))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "System`(?:L(?:UBackSubstitution|egendreType|ightSources|inearProgramming|inkOpen|iteral|ongestMatch))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "System`(?:M(?:eshRange|oleculeEquivalentQ))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "System`(?:N(?:etInformation|etSharedArray|extScheduledTaskTime|otebookCreate))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "System`(?:O(?:penTemporary))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "System`(?:P(?:IDData|ackingMethod|ersistentValue|ixelConstrained|lot3Matrix|lotDivision|lotJoined|olygonIntersections|redictorInformation|roperties|roperty|ropertyList|ropertyValue))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "System`(?:R(?:andom|asterArray|ecognitionThreshold|elease|emoteKernelObject|emoveAsynchronousTask|emoveProperty|emoveScheduledTask|enderAll|eplaceHeldPart|esetScheduledTask|esumePacket|unScheduledTask))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "System`(?:S(?:cheduledTaskActiveQ|cheduledTaskInformation|cheduledTaskObject|cheduledTasks|creenRectangle|electionAnimate|equenceAttentionLayer|equenceForm|etProperty|hading|hortestMatch|ingularValues|kinStyle|ocialMediaData|tartAsynchronousTask|tartScheduledTask|tateDimensions|topAsynchronousTask|topScheduledTask|tructuredArray|tyleForm|tylePrint|ubscripted|urfaceColor|urfaceGraphics|uspendPacket|ystemModelProgressReporting))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "System`(?:T(?:eXSave|extStyle|imeWarpingCorrespondence|imeWarpingDistance|oDate|oFileName|oHeldExpression))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "System`(?:U(?:RLFetch|RLFetchAsynchronous|RLSave|RLSaveAsynchronous))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "System`(?:V(?:ectorScale|ertexCoordinateRules|ertexLabeling|ertexRenderingFunction))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "System`(?:W(?:aitAsynchronousTask|indowMovable))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "System`(?:\\$(?:AsynchronousTask|ConfiguredKernels|DefaultFont|EntityStores|FormatType|HTTPCookies|InstallationDate|MachineDomain|ProductInformation|ProgramName|RandomState|ScheduledTask|SummaryBoxDataSizeLimit|TemporaryPrefix|TextStyle|TopDirectory|UserAddOnsDirectory))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "System`(?:A(?:ctionDelay|ctionMenuBox|ctionMenuBoxOptions|ctiveItem|lgebraicRulesData|lignmentMarker|llowAdultContent|llowChatServices|llowIncomplete|nalytic|nimatorBox|nimatorBoxOptions|nimatorElements|ppendCheck|rgumentCountQ|rrow3DBox|rrowBox|uthenticate|utoEvaluateEvents|utoIndentSpacings|utoMatch|utoNumberFormatting|utoQuoteCharacters|utoScaling|utoStyleOptions|utoStyleWords|utomaticImageSize|xis3DBox|xis3DBoxOptions|xisBox|xisBoxOptions))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:B(?:SplineCurve3DBox|SplineCurve3DBoxOptions|SplineCurveBox|SplineCurveBoxOptions|SplineSurface3DBox|SplineSurface3DBoxOptions|ackFaceColor|ackFaceGlowColor|ackFaceOpacity|ackFaceSpecularColor|ackFaceSpecularExponent|ackFaceSurfaceAppearance|ackFaceTexture|ackgroundAppearance|ackgroundTasksSettings|acksubstitution|eveled|ezierCurve3DBox|ezierCurve3DBoxOptions|ezierCurveBox|ezierCurveBoxOptions|lankForm|ounds|ox|oxDimensions|oxForm|oxID|oxRotation|oxRotationPoint|ra|raKet|rowserCategory|uttonCell|uttonContents|uttonStyleMenuListing))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:C(?:acheGraphics|achedValue|ardinalBSplineBasis|ellBoundingBox|ellContents|ellElementSpacings|ellElementsBoundingBox|ellFrameStyle|ellInsertionPointCell|ellTrayPosition|ellTrayWidgets|hangeOptions|hannelDatabin|hannelListenerWait|hannelPreSendFunction|hartElementData|hartElementDataFunction|heckAll|heckboxBox|heckboxBoxOptions|ircleBox|lipboardNotebook|lockwiseContourIntegral|losed|losingEvent|loudConnections|loudObjectInformation|loudObjectInformationData|loudUserID|oarse|oefficientDomain|olonForm|olorSetterBox|olorSetterBoxOptions|olumnBackgrounds|ompilerEnvironmentAppend|ompletionsListPacket|omponentwiseContextMenu|ompressedData|oneBox|onicHullRegion3DBox|onicHullRegion3DBoxOptions|onicHullRegionBox|onicHullRegionBoxOptions|onnect|ontentsBoundingBox|ontextMenu|ontinuation|ontourIntegral|ontourSmoothing|ontrolAlignment|ontrollerDuration|ontrollerInformationData|onvertToPostScript|onvertToPostScriptPacket|ookies|opyTag|ounterBox|ounterBoxOptions|ounterClockwiseContourIntegral|ounterEvaluator|ounterStyle|uboidBox|uboidBoxOptions|urlyDoubleQuote|urlyQuote|ylinderBox|ylinderBoxOptions))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:D(?:OSTextFormat|ampingFactor|ataCompression|atasetDisplayPanel|ateDelimiters|ebugTag|ecimal|efault2DTool|efault3DTool|efaultAttachedCellStyle|efaultControlPlacement|efaultDockedCellStyle|efaultInputFormatType|efaultOutputFormatType|efaultStyle|efaultTextFormatType|efaultTextInlineFormatType|efaultValue|efineExternal|egreeLexicographic|egreeReverseLexicographic|eleteWithContents|elimitedArray|estroyAfterEvaluation|eviceOpenQ|ialogIndent|ialogLevel|ifferenceOrder|igitBlockMinimum|isableConsolePrintPacket|iskBox|iskBoxOptions|ispatchQ|isplayRules|isplayTemporary|istributionDomain|ivergence|ocumentGeneratorInformationData|omainRegistrationInformation|oubleContourIntegral|oublyInfinite|own|rawBackFaces|rawFrontFaces|rawHighlighted|ualLinearProgramming|umpGet|ynamicBox|ynamicBoxOptions|ynamicLocation|ynamicModuleBox|ynamicModuleBoxOptions|ynamicModuleParent|ynamicName|ynamicNamespace|ynamicReference|ynamicWrapperBox|ynamicWrapperBoxOptions))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:E(?:ditButtonSettings|liminationOrder|llipticReducedHalfPeriods|mbeddingObject|mphasizeSyntaxErrors|mpty|nableConsolePrintPacket|ndAdd|ngineEnvironment|nter|qualColumns|qualRows|quatedTo|rrorBoxOptions|rrorNorm|rrorPacket|rrorsDialogSettings|valuated|valuationMode|valuationOrder|valuationRateLimit|ventEvaluator|ventHandlerTag|xactRootIsolation|xitDialog|xpectationE|xportPacket|xpressionPacket|xternalCall|xternalFunctionName))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:F(?:EDisableConsolePrintPacket|EEnableConsolePrintPacket|ail|ileInformation|ileName|illForm|illedCurveBox|illedCurveBoxOptions|ine|itAll|lashSelection|ont|ontName|ontOpacity|ontPostScriptName|ontReencoding|ormatRules|ormatValues|rameInset|rameless|rontEndObject|rontEndResource|rontEndResourceString|rontEndStackSize|rontEndValueCache|rontEndVersion|rontFaceColor|rontFaceGlowColor|rontFaceOpacity|rontFaceSpecularColor|rontFaceSpecularExponent|rontFaceSurfaceAppearance|rontFaceTexture|ullAxes))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:G(?:eneratedCellStyles|eneric|eometricTransformation3DBox|eometricTransformation3DBoxOptions|eometricTransformationBox|eometricTransformationBoxOptions|estureHandlerTag|etContext|etFileName|etLinebreakInformationPacket|lobalPreferences|lobalSession|raphLayerLabels|raphRoot|raphics3DBox|raphics3DBoxOptions|raphicsBaseline|raphicsBox|raphicsBoxOptions|raphicsComplex3DBox|raphicsComplex3DBoxOptions|raphicsComplexBox|raphicsComplexBoxOptions|raphicsContents|raphicsData|raphicsGridBox|raphicsGroup3DBox|raphicsGroup3DBoxOptions|raphicsGroupBox|raphicsGroupBoxOptions|raphicsGrouping|raphicsStyle|reekStyle|ridBoxAlignment|ridBoxBackground|ridBoxDividers|ridBoxFrame|ridBoxItemSize|ridBoxItemStyle|ridBoxOptions|ridBoxSpacings|ridElementStyleOptions|roupOpenerColor|roupOpenerInsideFrame|roupTogetherGrouping|roupTogetherNestedGrouping))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:H(?:eadCompose|eaders|elpBrowserLookup|elpBrowserNotebook|elpViewerSettings|essian|exahedronBox|exahedronBoxOptions|ighlightString|omePage|orizontal|orizontalForm|orizontalScrollPosition|yperlinkCreationSettings|yphenationOptions))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:I(?:conizedObject|gnoreSpellCheck|mageCache|mageCacheValid|mageEditMode|mageMarkers|mageOffset|mageRangeCache|mageSizeCache|mageSizeRaw|nactiveStyle|ncludeSingularTerm|ndent|ndentMaxFraction|ndentingNewlineSpacings|ndexCreationOptions|ndexTag|nequality|nexactNumbers|nformationData|nformationDataGrid|nlineCounterAssignments|nlineCounterIncrements|nlineRules|nputFieldBox|nputFieldBoxOptions|nputGrouping|nputSettings|nputToBoxFormPacket|nsertionPointObject|nset3DBox|nset3DBoxOptions|nsetBox|nsetBoxOptions|ntegral|nterlaced|nterpolationPrecision|nterpretTemplate|nterruptSettings|nto|nvisibleApplication|nvisibleTimes|temBox|temBoxOptions))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:J(?:acobian|oinedCurveBox|oinedCurveBoxOptions))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:K(?:|ernelExecute|et))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:L(?:abeledSlider|ambertW|anguageOptions|aunch|ayoutInformation|exicographic|icenseID|ine3DBox|ine3DBoxOptions|ineBox|ineBoxOptions|ineBreak|ineWrapParts|inearFilter|inebreakSemicolonWeighting|inkConnectedQ|inkError|inkFlush|inkHost|inkMode|inkOptions|inkReadHeld|inkService|inkWriteHeld|istPickerBoxBackground|isten|iteralSearch|ocalizeDefinitions|ocatorBox|ocatorBoxOptions|ocatorCentering|ocatorPaneBox|ocatorPaneBoxOptions|ongEqual|ongForm|oopback))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:M(?:achineID|achineName|acintoshSystemPageSetup|ainSolve|aintainDynamicCaches|akeRules|atchLocalNameQ|aterial|athMLText|athematicaNotation|axBend|axPoints|enu|enuAppearance|enuEvaluator|enuItem|enuList|ergeDifferences|essageObject|essageOptions|essagesNotebook|etaCharacters|ethodOptions|inRecursion|inSize|ode|odular|onomialOrder|ouseAppearanceTag|ouseButtons|ousePointerNote|ultiLetterItalics|ultiLetterStyle|ultiplicity|ultiscriptBoxOptions))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:N(?:BernoulliB|ProductFactors|SumTerms|Values|amespaceBox|amespaceBoxOptions|estedScriptRules|etworkPacketRecordingDuring|ext|onAssociative|ormalGrouping|otebookDefault|otebookInterfaceObject))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:O(?:LEData|bjectExistsQ|pen|penFunctionInspectorPacket|penSpecialOptions|penerBox|penerBoxOptions|ptionQ|ptionValueBox|ptionValueBoxOptions|ptionsPacket|utputFormData|utputGrouping|utputMathEditExpression|ver|verlayBox|verlayBoxOptions))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:P(?:ackPaclet|ackage|acletDirectoryAdd|acletDirectoryRemove|acletInformation|acletObjectQ|acletUpdate|ageHeight|alettesMenuSettings|aneBox|aneBoxOptions|aneSelectorBox|aneSelectorBoxOptions|anelBox|anelBoxOptions|aperWidth|arameter|arameterVariables|arentConnect|arentForm|arentList|arenthesize|artialD|asteAutoQuoteCharacters|ausedTime|eriodicInterpolation|erpendicular|ickMode|ickedElements|ivoting|lotRangeClipPlanesStyle|oint3DBox|oint3DBoxOptions|ointBox|ointBoxOptions|olygon3DBox|olygon3DBoxOptions|olygonBox|olygonBoxOptions|olygonHoleScale|olygonScale|olyhedronBox|olyhedronBoxOptions|olynomialForm|olynomials|opupMenuBox|opupMenuBoxOptions|ostScript|recedence|redictionRoot|referencesSettings|revious|rimaryPlaceholder|rintForm|rismBox|rismBoxOptions|rivateFrontEndOptions|robabilityPr|rocessStateDomain|rocessTimeDomain|rogressIndicatorBox|rogressIndicatorBoxOptions|romptForm|yramidBox|yramidBoxOptions))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:R(?:adioButtonBox|adioButtonBoxOptions|andomSeed|angeSpecification|aster3DBox|aster3DBoxOptions|asterBox|asterBoxOptions|ationalFunctions|awArray|awMedium|ebuildPacletData|ectangleBox|ecurringDigitsForm|eferenceMarkerStyle|eferenceMarkers|einstall|emoved|epeatedString|esourceAcquire|esourceSubmissionObject|eturnCreatesNewCell|eturnEntersInput|eturnInputFormPacket|otationBox|otationBoxOptions|oundImplies|owBackgrounds|owHeights|uleCondition|uleForm))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:S(?:aveAutoDelete|caledMousePosition|cheduledTaskInformationData|criptForm|criptRules|ectionGrouping|electWithContents|election|electionCell|electionCellCreateCell|electionCellDefaultStyle|electionCellParentStyle|electionPlaceholder|elfLoops|erviceResponse|etOptionsPacket|etSecuredAuthenticationKey|etbacks|etterBox|etterBoxOptions|howAutoConvert|howCodeAssist|howControls|howGroupOpenCloseIcon|howInvisibleCharacters|howPredictiveInterface|howSyntaxStyles|hrinkWrapBoundingBox|ingleEvaluation|ingleLetterStyle|lider2DBox|lider2DBoxOptions|ocket|olveDelayed|oundAndGraphics|pace|paceForm|panningCharacters|phereBox|phereBoxOptions|tartupSound|tringBreak|tringByteCount|tripStyleOnPaste|trokeForm|tructuredArrayHeadQ|tyleKeyMapping|tyleNames|urfaceAppearance|yntax|ystemException|ystemGet|ystemInformationData|ystemStub|ystemTest))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:T(?:ab|abViewBox|abViewBoxOptions|ableViewBox|ableViewBoxAlignment|ableViewBoxBackground|ableViewBoxHeaders|ableViewBoxItemSize|ableViewBoxItemStyle|ableViewBoxOptions|agBoxNote|agStyle|emplateEvaluate|emplateSlotSequence|emplateUnevaluated|emplateVerbatim|emporaryVariable|ensorQ|etrahedronBox|etrahedronBoxOptions|ext3DBox|ext3DBoxOptions|extBand|extBoundingBox|extBox|extForm|extLine|extParagraph|hisLink|itleGrouping|oColor|oggle|oggleFalse|ogglerBox|ogglerBoxOptions|ooBig|ooltipBox|ooltipBoxOptions|otalHeight|raceAction|raceInternal|raceLevel|rackCellChangeTimes|raditionalNotation|raditionalOrder|ransparentColor|rapEnterKey|rapSelection|ubeBSplineCurveBox|ubeBSplineCurveBoxOptions|ubeBezierCurveBox|ubeBezierCurveBoxOptions|ubeBox|ubeBoxOptions))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:U(?:ntrackedVariables|p|seGraphicsRange|serDefinedWavelet|sing))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:V(?:2Get|alueBox|alueBoxOptions|alueForm|aluesData|ectorGlyphData|erbose|ertical|erticalForm|iewPointSelectorSettings|iewPort|irtualGroupData|isibleCell))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:W(?:aitUntil|ebPageMetaInformation|holeCellGroupOpener|indowPersistentStyles|indowSelected|indowWidth|olframAlphaDate|olframAlphaQuantity|olframAlphaResult|olframCloudSettings))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:\\$(?:ActivationGroupID|ActivationUserRegistered|AddOnsDirectory|BoxForms|CloudConnection|CloudVersionNumber|CloudWolframEngineVersionNumber|ConditionHold|DefaultMailbox|DefaultPath|FinancialDataSource|GeoEntityTypes|GeoLocationPrecision|HTMLExportRules|HTTPRequest|LaunchDirectory|LicenseProcesses|LicenseSubprocesses|LicenseType|LinkSupported|LoadedFiles|MaxLicenseProcesses|MaxLicenseSubprocesses|MinorReleaseNumber|NetworkLicense|Off|OutputForms|PatchLevelID|PermissionsGroupBase|PipeSupported|PreferencesDirectory|PrintForms|PrintLiteral|RegisteredDeviceClasses|RegisteredUserName|SecuredAuthenticationKeyTokens|SetParentLink|SoundDisplay|SuppressInputFormHeads|SystemMemory|TraceOff|TraceOn|TracePattern|TracePostAction|TracePreAction|UserAgentLanguages|UserAgentMachine|UserAgentName|UserAgentOperatingSystem|UserAgentVersion|UserName))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "System`(?:A(?:ctiveClassification|ctiveClassificationObject|ctivePrediction|ctivePredictionObject|ddToSearchIndex|ggregatedEntityClass|ggregationLayer|ngleBisector|nimatedImage|nimationVideo|nomalyDetector|ppendLayer|pplication|pplyReaction|round|roundReplace|rrayReduce|sk|skAppend|skConfirm|skDisplay|skFunction|skState|skTemplateDisplay|skedQ|skedValue|ssessmentFunction|ssessmentResultObject|ssumeDeterministic|stroAngularSeparation|stroBackground|stroCenter|stroDistance|stroGraphics|stroGridLines|stroGridLinesStyle|stroPosition|stroProjection|stroRange|stroRangePadding|stroReferenceFrame|stroStyling|stroZoomLevel|tom|tomCoordinates|tomCount|tomDiagramCoordinates|tomLabelStyle|tomLabels|tomList|ttachCell|ttentionLayer|udioAnnotate|udioAnnotationLookup|udioIdentify|udioInstanceQ|udioPause|udioPlay|udioRecord|udioStop|udioStream|udioStreams|udioTrackApply|udioTrackSelection|utocomplete|utocompletionFunction|xiomaticTheory|xisLabel|xisObject|xisStyle))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:B(?:asicRecurrentLayer|atchNormalizationLayer|atchSize|ayesianMaximization|ayesianMaximizationObject|ayesianMinimization|ayesianMinimizationObject|esagL|innedVariogramList|inomialPointProcess|ioSequence|ioSequenceBackTranslateList|ioSequenceComplement|ioSequenceInstances|ioSequenceModify|ioSequencePlot|ioSequenceQ|ioSequenceReverseComplement|ioSequenceTranscribe|ioSequenceTranslate|itRate|lockDiagonalMatrix|lockLowerTriangularMatrix|lockUpperTriangularMatrix|lockchainAddressData|lockchainBase|lockchainBlockData|lockchainContractValue|lockchainData|lockchainGet|lockchainKeyEncode|lockchainPut|lockchainTokenData|lockchainTransaction|lockchainTransactionData|lockchainTransactionSign|lockchainTransactionSubmit|ond|ondCount|ondLabelStyle|ondLabels|ondList|ondQ|uildCompiledComponent))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:C(?:TCLossLayer|achePersistence|anvas|ast|ategoricalDistribution|atenateLayer|auchyPointProcess|hannelBase|hannelBrokerAction|hannelHistoryLength|hannelListen|hannelListener|hannelListeners|hannelObject|hannelReceiverFunction|hannelSend|hannelSubscribers|haracterNormalize|hemicalConvert|hemicalFormula|hemicalInstance|hemicalReaction|loudExpression|loudExpressions|loudRenderingMethod|ombinatorB|ombinatorC|ombinatorI|ombinatorK|ombinatorS|ombinatorW|ombinatorY|ombinedEntityClass|ompiledCodeFunction|ompiledComponent|ompiledExpressionDeclaration|ompiledLayer|ompilerCallback|ompilerEnvironment|ompilerEnvironmentAppendTo|ompilerEnvironmentObject|ompilerOptions|omplementedEntityClass|omputeUncertainty|onfirmQuiet|onformationMethod|onnectSystemModelComponents|onnectSystemModelController|onnectedMoleculeComponents|onnectedMoleculeQ|onnectionSettings|ontaining|ontentDetectorFunction|ontentFieldOptions|ontentLocationFunction|ontentObject|ontrastiveLossLayer|onvolutionLayer|reateChannel|reateCloudExpression|reateCompilerEnvironment|reateDataStructure|reateDataSystemModel|reateLicenseEntitlement|reateSearchIndex|reateSystemModel|reateTypeInstance|rossEntropyLossLayer|urrentNotebookImage|urrentScreenImage|urryApplied))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:D(?:SolveChangeVariables|ataStructure|ataStructureQ|atabaseConnect|atabaseDisconnect|atabaseReference|atabinSubmit|ateInterval|eclareCompiledComponent|econvolutionLayer|ecryptFile|eleteChannel|eleteCloudExpression|eleteElements|eleteSearchIndex|erivedKey|iggleGatesPointProcess|iggleGrattonPointProcess|igitalSignature|isableFormatting|ocumentWeightingRules|otLayer|ownValuesFunction|ropoutLayer|ynamicImage))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:E(?:choTiming|lementwiseLayer|mbeddedSQLEntityClass|mbeddedSQLExpression|mbeddingLayer|mptySpaceF|ncryptFile|ntityFunction|ntityStore|stimatedPointProcess|stimatedVariogramModel|valuationEnvironment|valuationPrivileges|xpirationDate|xpressionTree|xtendedEntityClass|xternalEvaluate|xternalFunction|xternalIdentifier|xternalObject|xternalSessionObject|xternalSessions|xternalStorageBase|xternalStorageDownload|xternalStorageGet|xternalStorageObject|xternalStoragePut|xternalStorageUpload|xternalValue|xtractLayer))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:F(?:aceRecognize|eatureDistance|eatureExtract|eatureExtraction|eatureExtractor|eatureExtractorFunction|ileConvert|ileFormatProperties|ileNameToFormatList|ileSystemTree|ilteredEntityClass|indChannels|indEquationalProof|indExternalEvaluators|indGeometricConjectures|indImageText|indIsomers|indMoleculeSubstructure|indPointProcessParameters|indSystemModelEquilibrium|indTextualAnswer|lattenLayer|orAllType|ormControl|orwardCloudCredentials|oxHReduce|rameListVideo|romRawPointer|unctionCompile|unctionCompileExport|unctionCompileExportByteArray|unctionCompileExportLibrary|unctionCompileExportString|unctionDeclaration|unctionLayer|unctionPoles))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:G(?:alleryView|atedRecurrentLayer|enerateDerivedKey|enerateDigitalSignature|enerateFileSignature|enerateSecuredAuthenticationKey|eneratedAssetFormat|eneratedAssetLocation|eoGraphValuePlot|eoOrientationData|eometricAssertion|eometricScene|eometricStep|eometricStylingRules|eometricTest|ibbsPointProcess|raphTree|ridVideo))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:H(?:andlerFunctions|andlerFunctionsKeys|ardcorePointProcess|istogramPointDensity))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:I(?:gnoreIsotopes|gnoreStereochemistry|mageAugmentationLayer|mageBoundingBoxes|mageCases|mageContainsQ|mageContents|mageGraphics|magePosition|magePyramid|magePyramidApply|mageStitch|mportedObject|ncludeAromaticBonds|ncludeHydrogens|ncludeRelatedTables|nertEvaluate|nertExpression|nfiniteFuture|nfinitePast|nhomogeneousPoissonPointProcess|nitialEvaluationHistory|nitializationObject|nitializationObjects|nitializationValue|nitialize|nputPorts|ntegrateChangeVariables|nterfaceSwitched|ntersectedEntityClass|nverseImagePyramid))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:K(?:ernelConfiguration|ernelFunction))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:L(?:earningRateMultipliers|ibraryFunctionDeclaration|icenseEntitlementObject|icenseEntitlements|icensingSettings|inearLayer|iteralType|oadCompiledComponent|ocalResponseNormalizationLayer|ongShortTermMemoryLayer|ossFunction))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:M(?:IMETypeToFormatList|ailExecute|ailFolder|ailItem|ailSearch|ailServerConnect|ailServerConnection|aternPointProcess|axDisplayedChildren|axTrainingRounds|axWordGap|eanAbsoluteLossLayer|eanAround|eanPointDensity|eanSquaredLossLayer|ergingFunction|idpoint|issingValuePattern|issingValueSynthesis|olecule|oleculeAlign|oleculeContainsQ|oleculeDraw|oleculeFreeQ|oleculeGraph|oleculeMatchQ|oleculeMaximumCommonSubstructure|oleculeModify|oleculeName|oleculePattern|oleculePlot|oleculePlot3D|oleculeProperty|oleculeQ|oleculeRecognize|oleculeSubstructureCount|oleculeValue))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:N(?:BodySimulation|BodySimulationData|earestNeighborG|estTree|etAppend|etArray|etArrayLayer|etBidirectionalOperator|etChain|etDecoder|etDelete|etDrop|etEncoder|etEvaluationMode|etExternalObject|etExtract|etFlatten|etFoldOperator|etGANOperator|etGraph|etInitialize|etInsert|etInsertSharedArrays|etJoin|etMapOperator|etMapThreadOperator|etMeasurements|etModel|etNestOperator|etPairEmbeddingOperator|etPort|etPortGradient|etPrepend|etRename|etReplace|etReplacePart|etStateObject|etTake|etTrain|etTrainResultsObject|etUnfold|etworkPacketCapture|etworkPacketRecording|etworkPacketTrace|eymanScottPointProcess|ominalScale|ormalizationLayer|umericArray|umericArrayQ|umericArrayType))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:O(?:peratorApplied|rderingLayer|rdinalScale|utputPorts|verlayVideo))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:P(?:acletSymbol|addingLayer|agination|airCorrelationG|arametricRampLayer|arentEdgeLabel|arentEdgeLabelFunction|arentEdgeLabelStyle|arentEdgeShapeFunction|arentEdgeStyle|arentEdgeStyleFunction|artLayer|artProtection|atternFilling|atternReaction|enttinenPointProcess|erpendicularBisector|ersistenceLocation|ersistenceTime|ersistentObject|ersistentObjects|ersistentSymbol|itchRecognize|laceholderLayer|laybackSettings|ointCountDistribution|ointDensity|ointDensityFunction|ointProcessEstimator|ointProcessFitTest|ointProcessParameterAssumptions|ointProcessParameterQ|ointStatisticFunction|ointValuePlot|oissonPointProcess|oolingLayer|rependLayer|roofObject|ublisherID))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:Q(?:uestionGenerator|uestionInterface|uestionObject|uestionSelector))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:R(?:andomArrayLayer|andomInstance|andomPointConfiguration|andomTree|eactionBalance|eactionBalancedQ|ecalibrationFunction|egisterExternalEvaluator|elationalDatabase|emoteAuthorizationCaching|emoteBatchJobAbort|emoteBatchJobObject|emoteBatchJobs|emoteBatchMapSubmit|emoteBatchSubmissionEnvironment|emoteBatchSubmit|emoteConnect|emoteConnectionObject|emoteEvaluate|emoteFile|emoteInputFiles|emoteProviderSettings|emoteRun|emoteRunProcess|emovalConditions|emoveAudioStream|emoveChannelListener|emoveChannelSubscribers|emoveVideoStream|eplicateLayer|eshapeLayer|esizeLayer|esourceFunction|esourceRegister|esourceRemove|esourceSubmit|esourceSystemBase|esourceSystemPath|esourceUpdate|esourceVersion|everseApplied|ipleyK|ipleyRassonRegion|ootTree|ulesTree))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:S(?:ameTestProperties|ampledEntityClass|earchAdjustment|earchIndexObject|earchIndices|earchQueryString|earchResultObject|ecuredAuthenticationKey|ecuredAuthenticationKeys|ecurityCertificate|equenceIndicesLayer|equenceLastLayer|equenceMostLayer|equencePredict|equencePredictorFunction|equenceRestLayer|equenceReverseLayer|erviceRequest|erviceSubmit|etFileFormatProperties|etSystemModel|lideShowVideo|moothPointDensity|nippet|nippetsVideo|nubPolyhedron|oftmaxLayer|olidBoundaryLoadValue|olidDisplacementCondition|olidFixedCondition|olidMechanicsPDEComponent|olidMechanicsStrain|olidMechanicsStress|ortedEntityClass|ourceLink|patialBinnedPointData|patialBoundaryCorrection|patialEstimate|patialEstimatorFunction|patialJ|patialNoiseLevel|patialObservationRegionQ|patialPointData|patialPointSelect|patialRandomnessTest|patialTransformationLayer|patialTrendFunction|peakerMatchQ|peechCases|peechInterpreter|peechRecognize|plice|tartExternalSession|tartWebSession|tereochemistryElements|traussHardcorePointProcess|traussPointProcess|ubsetCases|ubsetCount|ubsetPosition|ubsetReplace|ubtitleTrackSelection|ummationLayer|ymmetricDifference|ynthesizeMissingValues|ystemCredential|ystemCredentialData|ystemCredentialKey|ystemCredentialKeys|ystemCredentialStoreObject|ystemInstall|ystemModel|ystemModelExamples|ystemModelLinearize|ystemModelMeasurements|ystemModelParametricSimulate|ystemModelPlot|ystemModelReliability|ystemModelSimulate|ystemModelSimulateSensitivity|ystemModelSimulationData|ystemModeler|ystemModels))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:T(?:ableView|argetDevice|argetSystem|ernaryListPlot|ernaryPlotCorners|extCases|extContents|extElement|extPosition|extSearch|extSearchReport|extStructure|homasPointProcess|hreaded|hreadingLayer|ickDirection|ickLabelOrientation|ickLabelPositioning|ickLabels|ickLengths|ickPositions|oRawPointer|otalLayer|ourVideo|rainImageContentDetector|rainTextContentDetector|rainingProgressCheckpointing|rainingProgressFunction|rainingProgressMeasurements|rainingProgressReporting|rainingStoppingCriterion|rainingUpdateSchedule|ransposeLayer|ree|reeCases|reeChildren|reeCount|reeData|reeDelete|reeDepth|reeElementCoordinates|reeElementLabel|reeElementLabelFunction|reeElementLabelStyle|reeElementShape|reeElementShapeFunction|reeElementSize|reeElementSizeFunction|reeElementStyle|reeElementStyleFunction|reeExpression|reeExtract|reeFold|reeInsert|reeLayout|reeLeafCount|reeLeafQ|reeLeaves|reeLevel|reeMap|reeMapAt|reeOutline|reePosition|reeQ|reeReplacePart|reeRules|reeScan|reeSelect|reeSize|reeTraversalOrder|riangleCenter|riangleConstruct|riangleMeasurement|ypeDeclaration|ypeEvaluate|ypeOf|ypeSpecifier|yped))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:U(?:RLDownloadSubmit|nconstrainedParameters|nionedEntityClass|niqueElements|nitVectorLayer|nlabeledTree|nmanageObject|nregisterExternalEvaluator|pdateSearchIndex|seEmbeddedLibrary))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:V(?:alenceErrorHandling|alenceFilling|aluePreprocessingFunction|andermondeMatrix|arianceGammaPointProcess|ariogramFunction|ariogramModel|ectorAround|erifyDerivedKey|erifyDigitalSignature|erifyFileSignature|erifyInterpretation|ideo|ideoCapture|ideoCombine|ideoDelete|ideoExtractFrames|ideoFrameList|ideoFrameMap|ideoGenerator|ideoInsert|ideoIntervals|ideoJoin|ideoMap|ideoMapList|ideoMapTimeSeries|ideoPadding|ideoPause|ideoPlay|ideoQ|ideoRecord|ideoReplace|ideoScreenCapture|ideoSplit|ideoStop|ideoStream|ideoStreams|ideoTimeStretch|ideoTrackSelection|ideoTranscode|ideoTransparency|ideoTrim))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:W(?:ebAudioSearch|ebColumn|ebElementObject|ebExecute|ebImage|ebImageSearch|ebItem|ebRow|ebSearch|ebSessionObject|ebSessions|ebWindowObject|ikidataData|ikidataSearch|ikipediaSearch|ithCleanup|ithLock))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:Z(?:oomCenter|oomFactor))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:\\$(?:AllowExternalChannelFunctions|AudioDecoders|AudioEncoders|BlockchainBase|ChannelBase|CompilerEnvironment|CookieStore|CryptographicEllipticCurveNames|CurrentWebSession|DataStructures|DefaultNetworkInterface|DefaultProxyRules|DefaultRemoteBatchSubmissionEnvironment|DefaultRemoteKernel|DefaultSystemCredentialStore|ExternalIdentifierTypes|ExternalStorageBase|GeneratedAssetLocation|IncomingMailSettings|Initialization|InitializationContexts|MaxDisplayedChildren|NetworkInterfaces|NoValue|PersistenceBase|PersistencePath|PreInitialization|PublisherID|ResourceSystemBase|ResourceSystemPath|SSHAuthentication|ServiceCreditsAvailable|SourceLink|SubtitleDecoders|SubtitleEncoders|SystemCredentialStore|TargetSystems|TestFileName|VideoDecoders|VideoEncoders|VoiceStyles))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "System`(?:E(?:cho|xit))(?![`$[:alnum:]])",
            "name": "invalid.session.wolfram"
          },
          {
            "match": "System`(?:I(?:n|nString))(?![`$[:alnum:]])",
            "name": "invalid.session.wolfram"
          },
          {
            "match": "System`(?:O(?:ut))(?![`$[:alnum:]])",
            "name": "invalid.session.wolfram"
          },
          {
            "match": "System`(?:P(?:rint))(?![`$[:alnum:]])",
            "name": "invalid.session.wolfram"
          },
          {
            "match": "System`(?:Q(?:uit))(?![`$[:alnum:]])",
            "name": "invalid.session.wolfram"
          },
          {
            "match": "System`(?:\\$(?:HistoryLength|Line|Post|Pre|PrePrint|PreRead|SyntaxHandler))(?![`$[:alnum:]])",
            "name": "invalid.session.wolfram"
          },
          {
            "match": "System`(?:[$[:alpha:]][$[:alnum:]]*)(?![`$[:alnum:]])",
            "name": "invalid.illegal.system.wolfram"
          },
          {
            "match": "(?:[$[:alpha:]][$[:alnum:]]*)(?:`(?:[$[:alpha:]][$[:alnum:]]*))+(?=\\s*(\\[(?!\\s*\\[)|@(?!@)))",
            "name": "variable.function.wolfram"
          },
          {
            "match": "(?:[$[:alpha:]][$[:alnum:]]*)(?:`(?:[$[:alpha:]][$[:alnum:]]*))+",
            "name": "symbol.unrecognized.wolfram"
          },
          {
            "match": "(?:[$[:alpha:]][$[:alnum:]]*)`",
            "name": "invalid.illegal.wolfram"
          },
          {
            "match": "(?:`(?:[$[:alpha:]][$[:alnum:]]*))+(?=\\s*(\\[(?!\\s*\\[)|@(?!@)))",
            "name": "variable.function.wolfram"
          },
          {
            "match": "(?:`(?:[$[:alpha:]][$[:alnum:]]*))+",
            "name": "symbol.unrecognized.wolfram"
          },
          {
            "match": "`",
            "name": "invalid.illegal.wolfram"
          },
          {
            "match": "(?:A(?:ASTriangle|PIFunction|RCHProcess|RIMAProcess|RMAProcess|RProcess|SATriangle|belianGroup|bort|bortKernels|bortProtect|bs|bsArg|bsArgPlot|bsoluteCorrelation|bsoluteCorrelationFunction|bsoluteCurrentValue|bsoluteDashing|bsoluteFileName|bsoluteOptions|bsolutePointSize|bsoluteThickness|bsoluteTime|bsoluteTiming|ccountingForm|ccumulate|ccuracy|cousticAbsorbingValue|cousticImpedanceValue|cousticNormalVelocityValue|cousticPDEComponent|cousticPressureCondition|cousticRadiationValue|cousticSoundHardValue|cousticSoundSoftCondition|ctionMenu|ctivate|cyclicGraphQ|ddSides|ddTo|ddUsers|djacencyGraph|djacencyList|djacencyMatrix|djacentMeshCells|djugate|djustTimeSeriesForecast|djustmentBox|dministrativeDivisionData|ffineHalfSpace|ffineSpace|ffineStateSpaceModel|ffineTransform|irPressureData|irSoundAttenuation|irTemperatureData|ircraftData|irportData|iryAi|iryAiPrime|iryAiZero|iryBi|iryBiPrime|iryBiZero|lgebraicIntegerQ|lgebraicNumber|lgebraicNumberDenominator|lgebraicNumberNorm|lgebraicNumberPolynomial|lgebraicNumberTrace|lgebraicUnitQ|llTrue|lphaChannel|lphabet|lphabeticOrder|lphabeticSort|lternatingFactorial|lternatingGroup|lternatives|mbientLight|mbiguityList|natomyData|natomyPlot3D|natomyStyling|nd|ndersonDarlingTest|ngerJ|ngleBracket|nglePath|nglePath3D|ngleVector|ngularGauge|nimate|nimator|nnotate|nnotation|nnotationDelete|nnotationKeys|nnotationValue|nnuity|nnuityDue|nnulus|nomalyDetection|nomalyDetectorFunction|ntihermitian|ntihermitianMatrixQ|ntisymmetric|ntisymmetricMatrixQ|ntonyms|nyOrder|nySubset|nyTrue|part|partSquareFree|ppellF1|ppend|ppendTo|pply|pplySides|pplyTo|rcCos|rcCosh|rcCot|rcCoth|rcCsc|rcCsch|rcCurvature|rcLength|rcSec|rcSech|rcSin|rcSinDistribution|rcSinh|rcTan|rcTanh|rea|rg|rgMax|rgMin|rgumentsOptions|rithmeticGeometricMean|rray|rrayComponents|rrayDepth|rrayFilter|rrayFlatten|rrayMesh|rrayPad|rrayPlot|rrayPlot3D|rrayQ|rrayResample|rrayReshape|rrayRules|rrays|rrow|rrowheads|ssert|ssociateTo|ssociation|ssociationMap|ssociationQ|ssociationThread|ssuming|symptotic|symptoticDSolveValue|symptoticEqual|symptoticEquivalent|symptoticExpectation|symptoticGreater|symptoticGreaterEqual|symptoticIntegrate|symptoticLess|symptoticLessEqual|symptoticOutputTracker|symptoticProbability|symptoticProduct|symptoticRSolveValue|symptoticSolve|symptoticSum|tomQ|ttributes|udio|udioAmplify|udioBlockMap|udioCapture|udioChannelCombine|udioChannelMix|udioChannelSeparate|udioChannels|udioData|udioDelay|udioDelete|udioDistance|udioFade|udioFrequencyShift|udioGenerator|udioInsert|udioIntervals|udioJoin|udioLength|udioLocalMeasurements|udioLoudness|udioMeasurements|udioNormalize|udioOverlay|udioPad|udioPan|udioPartition|udioPitchShift|udioPlot|udioQ|udioReplace|udioResample|udioReverb|udioReverse|udioSampleRate|udioSpectralMap|udioSpectralTransformation|udioSplit|udioTimeStretch|udioTrim|udioType|ugmentedPolyhedron|ugmentedSymmetricPolynomial|uthenticationDialog|utoRefreshed|utoSubmitting|utocorrelationTest))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:B(?:SplineBasis|SplineCurve|SplineFunction|SplineSurface|abyMonsterGroupB|ackslash|all|and|andpassFilter|andstopFilter|arChart|arChart3D|arLegend|arabasiAlbertGraphDistribution|arcodeImage|arcodeRecognize|aringhausHenzeTest|arlowProschanImportance|arnesG|artlettHannWindow|artlettWindow|aseDecode|aseEncode|aseForm|atesDistribution|attleLemarieWavelet|ecause|eckmannDistribution|eep|egin|eginDialogPacket|eginPackage|ellB|ellY|enfordDistribution|eniniDistribution|enktanderGibratDistribution|enktanderWeibullDistribution|ernoulliB|ernoulliDistribution|ernoulliGraphDistribution|ernoulliProcess|ernsteinBasis|esselFilterModel|esselI|esselJ|esselJZero|esselK|esselY|esselYZero|eta|etaBinomialDistribution|etaDistribution|etaNegativeBinomialDistribution|etaPrimeDistribution|etaRegularized|etween|etweennessCentrality|eveledPolyhedron|ezierCurve|ezierFunction|ilateralFilter|ilateralLaplaceTransform|ilateralZTransform|inCounts|inLists|inarize|inaryDeserialize|inaryDistance|inaryImageQ|inaryRead|inaryReadList|inarySerialize|inaryWrite|inomial|inomialDistribution|inomialProcess|inormalDistribution|iorthogonalSplineWavelet|ipartiteGraphQ|iquadraticFilterModel|irnbaumImportance|irnbaumSaundersDistribution|itAnd|itClear|itGet|itLength|itNot|itOr|itSet|itShiftLeft|itShiftRight|itXor|iweightLocation|iweightMidvariance|lackmanHarrisWindow|lackmanNuttallWindow|lackmanWindow|lank|lankNullSequence|lankSequence|lend|lock|lockMap|lockRandom|lomqvistBeta|lomqvistBetaTest|lur|lurring|odePlot|ohmanWindow|oole|ooleanConsecutiveFunction|ooleanConvert|ooleanCountingFunction|ooleanFunction|ooleanGraph|ooleanMaxterms|ooleanMinimize|ooleanMinterms|ooleanQ|ooleanRegion|ooleanTable|ooleanVariables|orderDimensions|orelTannerDistribution|ottomHatTransform|oundaryDiscretizeGraphics|oundaryDiscretizeRegion|oundaryMesh|oundaryMeshRegion|oundaryMeshRegionQ|oundedRegionQ|oundingRegion|oxData|oxMatrix|oxObject|oxWhiskerChart|racketingBar|rayCurtisDistance|readthFirstScan|reak|ridgeData|rightnessEqualize|roadcastStationData|rownForsytheTest|rownianBridgeProcess|ubbleChart|ubbleChart3D|uckyballGraph|uildingData|ulletGauge|usinessDayQ|utterflyGraph|utterworthFilterModel|utton|uttonBar|uttonBox|uttonNotebook|yteArray|yteArrayFormat|yteArrayFormatQ|yteArrayQ|yteArrayToString|yteCount))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:C(?:|DF|DFDeploy|DFWavelet|Form|MYKColor|SGRegion|SGRegionQ|SGRegionTree|alendarConvert|alendarData|allPacket|allout|anberraDistance|ancel|ancelButton|andlestickChart|anonicalGraph|anonicalName|anonicalWarpingCorrespondence|anonicalWarpingDistance|anonicalizePolygon|anonicalizePolyhedron|anonicalizeRegion|antorMesh|antorStaircase|ap|apForm|apitalDifferentialD|apitalize|apsuleShape|aputoD|arlemanLinearize|arlsonRC|arlsonRD|arlsonRE|arlsonRF|arlsonRG|arlsonRJ|arlsonRK|arlsonRM|armichaelLambda|aseSensitive|ases|ashflow|asoratian|atalanNumber|atch|atenate|auchyDistribution|auchyMatrix|auchyWindow|ayleyGraph|eiling|ell|ellGroup|ellGroupData|ellObject|ellPrint|ells|ellularAutomaton|ensoredDistribution|ensoring|enterArray|enterDot|enteredInterval|entralFeature|entralMoment|entralMomentGeneratingFunction|epstrogram|epstrogramArray|epstrumArray|hampernowneNumber|hanVeseBinarize|haracterCounts|haracterName|haracterRange|haracteristicFunction|haracteristicPolynomial|haracters|hebyshev1FilterModel|hebyshev2FilterModel|hebyshevT|hebyshevU|heck|heckAbort|heckArguments|heckbox|heckboxBar|hemicalData|hessboardDistance|hiDistribution|hiSquareDistribution|hineseRemainder|hoiceButtons|hoiceDialog|holeskyDecomposition|hop|hromaticPolynomial|hromaticityPlot|hromaticityPlot3D|ircle|ircleDot|ircleMinus|irclePlus|irclePoints|ircleThrough|ircleTimes|irculantGraph|ircularArcThrough|ircularOrthogonalMatrixDistribution|ircularQuaternionMatrixDistribution|ircularRealMatrixDistribution|ircularSymplecticMatrixDistribution|ircularUnitaryMatrixDistribution|ircumsphere|ityData|lassifierFunction|lassifierMeasurements|lassifierMeasurementsObject|lassify|lear|learAll|learAttributes|learCookies|learPermissions|learSystemCache|lebschGordan|lickPane|lickToCopy|lip|lock|lockGauge|lose|loseKernels|losenessCentrality|losing|loudAccountData|loudConnect|loudDeploy|loudDirectory|loudDisconnect|loudEvaluate|loudExport|loudFunction|loudGet|loudImport|loudLoggingData|loudObject|loudObjects|loudPublish|loudPut|loudSave|loudShare|loudSubmit|loudSymbol|loudUnshare|lusterClassify|lusteringComponents|lusteringMeasurements|lusteringTree|oefficient|oefficientArrays|oefficientList|oefficientRules|oifletWavelet|ollect|ollinearPoints|olon|olorBalance|olorCombine|olorConvert|olorData|olorDataFunction|olorDetect|olorDistance|olorNegate|olorProfileData|olorQ|olorQuantize|olorReplace|olorSeparate|olorSetter|olorSlider|olorToneMapping|olorize|olorsNear|olumn|ometData|ommonName|ommonUnits|ommonest|ommonestFilter|ommunityGraphPlot|ompanyData|ompatibleUnitQ|ompile|ompiledFunction|omplement|ompleteGraph|ompleteGraphQ|ompleteIntegral|ompleteKaryTree|omplex|omplexArrayPlot|omplexContourPlot|omplexExpand|omplexListPlot|omplexPlot|omplexPlot3D|omplexRegionPlot|omplexStreamPlot|omplexVectorPlot|omponentMeasurements|omposeList|omposeSeries|ompositeQ|omposition|ompoundElement|ompoundExpression|ompoundPoissonDistribution|ompoundPoissonProcess|ompoundRenewalProcess|ompress|oncaveHullMesh|ondition|onditionalExpression|onditioned|one|onfirm|onfirmAssert|onfirmBy|onfirmMatch|onformAudio|onformImages|ongruent|onicGradientFilling|onicHullRegion|onicOptimization|onjugate|onjugateTranspose|onjunction|onnectLibraryCallbackFunction|onnectedComponents|onnectedGraphComponents|onnectedGraphQ|onnectedMeshComponents|onnesWindow|onoverTest|onservativeConvectionPDETerm|onstantArray|onstantImage|onstantRegionQ|onstellationData|onstruct|ontainsAll|ontainsAny|ontainsExactly|ontainsNone|ontainsOnly|ontext|ontextToFileName|ontexts|ontinue|ontinuedFraction|ontinuedFractionK|ontinuousMarkovProcess|ontinuousTask|ontinuousTimeModelQ|ontinuousWaveletData|ontinuousWaveletTransform|ontourDetect|ontourPlot|ontourPlot3D|ontraharmonicMean|ontrol|ontrolActive|ontrollabilityGramian|ontrollabilityMatrix|ontrollableDecomposition|ontrollableModelQ|ontrollerInformation|ontrollerManipulate|ontrollerState|onvectionPDETerm|onvergents|onvexHullMesh|onvexHullRegion|onvexOptimization|onvexPolygonQ|onvexPolyhedronQ|onvexRegionQ|onvolve|onwayGroupCo1|onwayGroupCo2|onwayGroupCo3|oordinateBoundingBox|oordinateBoundingBoxArray|oordinateBounds|oordinateBoundsArray|oordinateChartData|oordinateTransform|oordinateTransformData|oplanarPoints|oprimeQ|oproduct|opulaDistribution|opyDatabin|opyDirectory|opyFile|opyToClipboard|oreNilpotentDecomposition|ornerFilter|orrelation|orrelationDistance|orrelationFunction|orrelationTest|os|osIntegral|osh|oshIntegral|osineDistance|osineWindow|ot|oth|oulombF|oulombG|oulombH1|oulombH2|ount|ountDistinct|ountDistinctBy|ountRoots|ountryData|ounts|ountsBy|ovariance|ovarianceFunction|oxIngersollRossProcess|oxModel|oxModelFit|oxianDistribution|ramerVonMisesTest|reateArchive|reateDatabin|reateDialog|reateDirectory|reateDocument|reateFile|reateManagedLibraryExpression|reateNotebook|reatePacletArchive|reatePalette|reatePermissionsGroup|reateUUID|reateWindow|riticalSection|riticalityFailureImportance|riticalitySuccessImportance|ross|rossMatrix|rossingCount|rossingDetect|rossingPolygon|sc|sch|ube|ubeRoot|uboid|umulant|umulantGeneratingFunction|umulativeFeatureImpactPlot|up|upCap|url|urrencyConvert|urrentDate|urrentImage|urrentValue|urvatureFlowFilter|ycleGraph|ycleIndexPolynomial|ycles|yclicGroup|yclotomic|ylinder|ylindricalDecomposition|ylindricalDecompositionFunction))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:D(?:|Eigensystem|Eigenvalues|GaussianWavelet|MSList|MSString|Solve|SolveValue|agumDistribution|amData|amerauLevenshteinDistance|arker|ashing|ataDistribution|atabin|atabinAdd|atabinUpload|atabins|ataset|ateBounds|ateDifference|ateHistogram|ateList|ateListLogPlot|ateListPlot|ateListStepPlot|ateObject|ateObjectQ|ateOverlapsQ|atePattern|atePlus|ateRange|ateScale|ateSelect|ateString|ateValue|ateWithinQ|ated|atedUnit|aubechiesWavelet|avisDistribution|awsonF|ayCount|ayHemisphere|ayMatchQ|ayName|ayNightTerminator|ayPlus|ayRange|ayRound|aylightQ|eBruijnGraph|eBruijnSequence|ecapitalize|ecimalForm|eclarePackage|ecompose|ecrement|ecrypt|edekindEta|eepSpaceProbeData|efault|efaultButton|efaultValues|efer|efineInputStreamMethod|efineOutputStreamMethod|efineResourceFunction|efinition|egreeCentrality|egreeGraphDistribution|el|elaunayMesh|elayed|elete|eleteAdjacentDuplicates|eleteAnomalies|eleteBorderComponents|eleteCases|eleteDirectory|eleteDuplicates|eleteDuplicatesBy|eleteFile|eleteMissing|eleteObject|eletePermissionsKey|eleteSmallComponents|eleteStopwords|elimitedSequence|endrogram|enominator|ensityHistogram|ensityPlot|ensityPlot3D|eploy|epth|epthFirstScan|erivative|erivativeFilter|erivativePDETerm|esignMatrix|et|eviceClose|eviceConfigure|eviceExecute|eviceExecuteAsynchronous|eviceObject|eviceOpen|eviceRead|eviceReadBuffer|eviceReadLatest|eviceReadList|eviceReadTimeSeries|eviceStreams|eviceWrite|eviceWriteBuffer|evices|iagonal|iagonalMatrix|iagonalMatrixQ|iagonalizableMatrixQ|ialog|ialogInput|ialogNotebook|ialogReturn|iamond|iamondMatrix|iceDissimilarity|ictionaryLookup|ictionaryWordQ|ifferenceDelta|ifferenceQuotient|ifferenceRoot|ifferenceRootReduce|ifferences|ifferentialD|ifferentialRoot|ifferentialRootReduce|ifferentiatorFilter|iffusionPDETerm|igitCount|igitQ|ihedralAngle|ihedralGroup|ilation|imensionReduce|imensionReducerFunction|imensionReduction|imensionalCombinations|imensionalMeshComponents|imensions|iracComb|iracDelta|irectedEdge|irectedGraph|irectedGraphQ|irectedInfinity|irectionalLight|irective|irectory|irectoryName|irectoryQ|irectoryStack|irichletBeta|irichletCharacter|irichletCondition|irichletConvolve|irichletDistribution|irichletEta|irichletL|irichletLambda|irichletTransform|irichletWindow|iscreteAsymptotic|iscreteChirpZTransform|iscreteConvolve|iscreteDelta|iscreteHadamardTransform|iscreteIndicator|iscreteInputOutputModel|iscreteLQEstimatorGains|iscreteLQRegulatorGains|iscreteLimit|iscreteLyapunovSolve|iscreteMarkovProcess|iscreteMaxLimit|iscreteMinLimit|iscretePlot|iscretePlot3D|iscreteRatio|iscreteRiccatiSolve|iscreteShift|iscreteTimeModelQ|iscreteUniformDistribution|iscreteWaveletData|iscreteWaveletPacketTransform|iscreteWaveletTransform|iscretizeGraphics|iscretizeRegion|iscriminant|isjointQ|isjunction|isk|iskMatrix|iskSegment|ispatch|isplayEndPacket|isplayForm|isplayPacket|istanceMatrix|istanceTransform|istribute|istributeDefinitions|istributed|istributionChart|istributionFitTest|istributionParameterAssumptions|istributionParameterQ|iv|ivide|ivideBy|ivideSides|ivisible|ivisorSigma|ivisorSum|ivisors|o|ocumentGenerator|ocumentGeneratorInformation|ocumentGenerators|ocumentNotebook|odecahedron|ominantColors|ominatorTreeGraph|ominatorVertexList|ot|otEqual|oubleBracketingBar|oubleDownArrow|oubleLeftArrow|oubleLeftRightArrow|oubleLeftTee|oubleLongLeftArrow|oubleLongLeftRightArrow|oubleLongRightArrow|oubleRightArrow|oubleRightTee|oubleUpArrow|oubleUpDownArrow|oubleVerticalBar|ownArrow|ownArrowBar|ownArrowUpArrow|ownLeftRightVector|ownLeftTeeVector|ownLeftVector|ownLeftVectorBar|ownRightTeeVector|ownRightVector|ownRightVectorBar|ownTee|ownTeeArrow|ownValues|ownsample|razinInverse|rop|ropShadowing|t|ualPlanarGraph|ualPolyhedron|ualSystemsModel|umpSave|uplicateFreeQ|uration|ynamic|ynamicGeoGraphics|ynamicModule|ynamicSetting|ynamicWrapper))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:E(?:arthImpactData|arthquakeData|ccentricityCentrality|choEvaluation|choFunction|choLabel|dgeAdd|dgeBetweennessCentrality|dgeChromaticNumber|dgeConnectivity|dgeContract|dgeCount|dgeCoverQ|dgeCycleMatrix|dgeDelete|dgeDetect|dgeForm|dgeIndex|dgeList|dgeQ|dgeRules|dgeTaggedGraph|dgeTaggedGraphQ|dgeTags|dgeTransitiveGraphQ|dgeWeightedGraphQ|ditDistance|ffectiveInterest|igensystem|igenvalues|igenvectorCentrality|igenvectors|lement|lementData|liminate|llipsoid|llipticE|llipticExp|llipticExpPrime|llipticF|llipticFilterModel|llipticK|llipticLog|llipticNomeQ|llipticPi|llipticTheta|llipticThetaPrime|mbedCode|mbeddedHTML|mbeddedService|mitSound|mpiricalDistribution|mptyGraphQ|mptyRegion|nclose|ncode|ncrypt|ncryptedObject|nd|ndDialogPacket|ndPackage|ngineeringForm|nterExpressionPacket|nterTextPacket|ntity|ntityClass|ntityClassList|ntityCopies|ntityGroup|ntityInstance|ntityList|ntityPrefetch|ntityProperties|ntityProperty|ntityPropertyClass|ntityRegister|ntityStores|ntityTypeName|ntityUnregister|ntityValue|ntropy|ntropyFilter|nvironment|qual|qualTilde|qualTo|quilibrium|quirippleFilterKernel|quivalent|rf|rfc|rfi|rlangB|rlangC|rlangDistribution|rosion|rrorBox|stimatedBackground|stimatedDistribution|stimatedPointNormals|stimatedProcess|stimatorGains|stimatorRegulator|uclideanDistance|ulerAngles|ulerCharacteristic|ulerE|ulerMatrix|ulerPhi|ulerianGraphQ|valuate|valuatePacket|valuationBox|valuationCell|valuationData|valuationNotebook|valuationObject|venQ|ventData|ventHandler|ventSeries|xactBlackmanWindow|xactNumberQ|xampleData|xcept|xists|xoplanetData|xp|xpGammaDistribution|xpIntegralE|xpIntegralEi|xpToTrig|xpand|xpandAll|xpandDenominator|xpandFileName|xpandNumerator|xpectation|xponent|xponentialDistribution|xponentialGeneratingFunction|xponentialMovingAverage|xponentialPowerDistribution|xport|xportByteArray|xportForm|xportString|xpressionCell|xpressionGraph|xtendedGCD|xternalBundle|xtract|xtractArchive|xtractPacletArchive|xtremeValueDistribution))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:F(?:ARIMAProcess|RatioDistribution|aceAlign|aceForm|acialFeatures|actor|actorInteger|actorList|actorSquareFree|actorSquareFreeList|actorTerms|actorTermsList|actorial|actorial2|actorialMoment|actorialMomentGeneratingFunction|actorialPower|ailure|ailureDistribution|ailureQ|areySequence|eatureImpactPlot|eatureNearest|eatureSpacePlot|eatureSpacePlot3D|eatureValueDependencyPlot|eatureValueImpactPlot|eedbackLinearize|etalGrowthData|ibonacci|ibonorial|ile|ileBaseName|ileByteCount|ileDate|ileExistsQ|ileExtension|ileFormat|ileFormatQ|ileHash|ileNameDepth|ileNameDrop|ileNameJoin|ileNameSetter|ileNameSplit|ileNameTake|ileNames|ilePrint|ileSize|ileSystemMap|ileSystemScan|ileTemplate|ileTemplateApply|ileType|illedCurve|illedTorus|illingTransform|ilterRules|inancialBond|inancialData|inancialDerivative|inancialIndicator|ind|indAnomalies|indArgMax|indArgMin|indClique|indClusters|indCookies|indCurvePath|indCycle|indDevices|indDistribution|indDistributionParameters|indDivisions|indEdgeColoring|indEdgeCover|indEdgeCut|indEdgeIndependentPaths|indEulerianCycle|indFaces|indFile|indFit|indFormula|indFundamentalCycles|indGeneratingFunction|indGeoLocation|indGeometricTransform|indGraphCommunities|indGraphIsomorphism|indGraphPartition|indHamiltonianCycle|indHamiltonianPath|indHiddenMarkovStates|indIndependentEdgeSet|indIndependentVertexSet|indInstance|indIntegerNullVector|indIsomorphicSubgraph|indKClan|indKClique|indKClub|indKPlex|indLibrary|indLinearRecurrence|indList|indMatchingColor|indMaxValue|indMaximum|indMaximumCut|indMaximumFlow|indMeshDefects|indMinValue|indMinimum|indMinimumCostFlow|indMinimumCut|indPath|indPeaks|indPermutation|indPlanarColoring|indPostmanTour|indProcessParameters|indRegionTransform|indRepeat|indRoot|indSequenceFunction|indShortestPath|indShortestTour|indSpanningTree|indSubgraphIsomorphism|indThreshold|indTransientRepeat|indVertexColoring|indVertexCover|indVertexCut|indVertexIndependentPaths|inishDynamic|initeAbelianGroupCount|initeGroupCount|initeGroupData|irst|irstCase|irstPassageTimeDistribution|irstPosition|ischerGroupFi22|ischerGroupFi23|ischerGroupFi24Prime|isherHypergeometricDistribution|isherRatioTest|isherZDistribution|it|ittedModel|ixedOrder|ixedPoint|ixedPointList|latShading|latTopWindow|latten|lattenAt|lightData|lipView|loor|lowPolynomial|old|oldList|oldPair|oldPairList|oldWhile|oldWhileList|or|orAll|ormBox|ormFunction|ormObject|ormPage|ormat|ormulaData|ormulaLookup|ortranForm|ourier|ourierCoefficient|ourierCosCoefficient|ourierCosSeries|ourierCosTransform|ourierDCT|ourierDCTFilter|ourierDCTMatrix|ourierDST|ourierDSTMatrix|ourierMatrix|ourierSequenceTransform|ourierSeries|ourierSinCoefficient|ourierSinSeries|ourierSinTransform|ourierTransform|ourierTrigSeries|oxH|ractionBox|ractionalBrownianMotionProcess|ractionalD|ractionalGaussianNoiseProcess|ractionalPart|rameBox|ramed|rechetDistribution|reeQ|renetSerretSystem|requencySamplingFilterKernel|resnelC|resnelF|resnelG|resnelS|robeniusNumber|robeniusSolve|romAbsoluteTime|romCharacterCode|romCoefficientRules|romContinuedFraction|romDMS|romDateString|romDigits|romEntity|romJulianDate|romLetterNumber|romPolarCoordinates|romRomanNumeral|romSphericalCoordinates|romUnixTime|rontEndExecute|rontEndToken|rontEndTokenExecute|ullDefinition|ullForm|ullGraphics|ullInformationOutputRegulator|ullRegion|ullSimplify|unction|unctionAnalytic|unctionBijective|unctionContinuous|unctionConvexity|unctionDiscontinuities|unctionDomain|unctionExpand|unctionInjective|unctionInterpolation|unctionMeromorphic|unctionMonotonicity|unctionPeriod|unctionRange|unctionSign|unctionSingularities|unctionSurjective|ussellVeselyImportance))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:G(?:ARCHProcess|CD|aborFilter|aborMatrix|aborWavelet|ainMargins|ainPhaseMargins|alaxyData|amma|ammaDistribution|ammaRegularized|ather|atherBy|aussianFilter|aussianMatrix|aussianOrthogonalMatrixDistribution|aussianSymplecticMatrixDistribution|aussianUnitaryMatrixDistribution|aussianWindow|egenbauerC|eneralizedLinearModelFit|enerateAsymmetricKeyPair|enerateDocument|enerateHTTPResponse|enerateSymmetricKey|eneratingFunction|enericCylindricalDecomposition|enomeData|enomeLookup|eoAntipode|eoArea|eoBoundary|eoBoundingBox|eoBounds|eoBoundsRegion|eoBoundsRegionBoundary|eoBubbleChart|eoCircle|eoContourPlot|eoDensityPlot|eoDestination|eoDirection|eoDisk|eoDisplacement|eoDistance|eoDistanceList|eoElevationData|eoEntities|eoGraphPlot|eoGraphics|eoGridDirectionDifference|eoGridPosition|eoGridUnitArea|eoGridUnitDistance|eoGridVector|eoGroup|eoHemisphere|eoHemisphereBoundary|eoHistogram|eoIdentify|eoImage|eoLength|eoListPlot|eoMarker|eoNearest|eoPath|eoPolygon|eoPosition|eoPositionENU|eoPositionXYZ|eoProjectionData|eoRegionValuePlot|eoSmoothHistogram|eoStreamPlot|eoStyling|eoVariant|eoVector|eoVectorENU|eoVectorPlot|eoVectorXYZ|eoVisibleRegion|eoVisibleRegionBoundary|eoWithinQ|eodesicClosing|eodesicDilation|eodesicErosion|eodesicOpening|eodesicPolyhedron|eodesyData|eogravityModelData|eologicalPeriodData|eomagneticModelData|eometricBrownianMotionProcess|eometricDistribution|eometricMean|eometricMeanFilter|eometricOptimization|eometricTransformation|estureHandler|et|etEnvironment|lobalClusteringCoefficient|low|ompertzMakehamDistribution|oochShading|oodmanKruskalGamma|oodmanKruskalGammaTest|oto|ouraudShading|rad|radientFilter|radientFittedMesh|radientOrientationFilter|rammarApply|rammarRules|rammarToken|raph|raph3D|raphAssortativity|raphAutomorphismGroup|raphCenter|raphComplement|raphData|raphDensity|raphDiameter|raphDifference|raphDisjointUnion|raphDistance|raphDistanceMatrix|raphEmbedding|raphHub|raphIntersection|raphJoin|raphLinkEfficiency|raphPeriphery|raphPlot|raphPlot3D|raphPower|raphProduct|raphPropertyDistribution|raphQ|raphRadius|raphReciprocity|raphSum|raphUnion|raphics|raphics3D|raphicsColumn|raphicsComplex|raphicsGrid|raphicsGroup|raphicsRow|rayLevel|reater|reaterEqual|reaterEqualLess|reaterEqualThan|reaterFullEqual|reaterGreater|reaterLess|reaterSlantEqual|reaterThan|reaterTilde|reenFunction|rid|ridBox|ridGraph|roebnerBasis|roupBy|roupCentralizer|roupElementFromWord|roupElementPosition|roupElementQ|roupElementToWord|roupElements|roupGenerators|roupMultiplicationTable|roupOrbits|roupOrder|roupSetwiseStabilizer|roupStabilizer|roupStabilizerChain|roupings|rowCutComponents|udermannian|uidedFilter|umbelDistribution))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:H(?:ITSCentrality|TTPErrorResponse|TTPRedirect|TTPRequest|TTPRequestData|TTPResponse|aarWavelet|adamardMatrix|alfLine|alfNormalDistribution|alfPlane|alfSpace|alftoneShading|amiltonianGraphQ|ammingDistance|ammingWindow|ankelH1|ankelH2|ankelMatrix|ankelTransform|annPoissonWindow|annWindow|aradaNortonGroupHN|araryGraph|armonicMean|armonicMeanFilter|armonicNumber|ash|atchFilling|atchShading|aversine|azardFunction|ead|eatFluxValue|eatInsulationValue|eatOutflowValue|eatRadiationValue|eatSymmetryValue|eatTemperatureCondition|eatTransferPDEComponent|eatTransferValue|eavisideLambda|eavisidePi|eavisideTheta|eldGroupHe|elmholtzPDEComponent|ermiteDecomposition|ermiteH|ermitian|ermitianMatrixQ|essenbergDecomposition|eunB|eunBPrime|eunC|eunCPrime|eunD|eunDPrime|eunG|eunGPrime|eunT|eunTPrime|exahedron|iddenMarkovProcess|ighlightGraph|ighlightImage|ighlightMesh|ighlighted|ighpassFilter|igmanSimsGroupHS|ilbertCurve|ilbertFilter|ilbertMatrix|istogram|istogram3D|istogramDistribution|istogramList|istogramTransform|istogramTransformInterpolation|istoricalPeriodData|itMissTransform|jorthDistribution|odgeDual|oeffdingD|oeffdingDTest|old|oldComplete|oldForm|oldPattern|orizontalGauge|ornerForm|ostLookup|otellingTSquareDistribution|oytDistribution|ue|umanGrowthData|umpDownHump|umpEqual|urwitzLerchPhi|urwitzZeta|yperbolicDistribution|ypercubeGraph|yperexponentialDistribution|yperfactorial|ypergeometric0F1|ypergeometric0F1Regularized|ypergeometric1F1|ypergeometric1F1Regularized|ypergeometric2F1|ypergeometric2F1Regularized|ypergeometricDistribution|ypergeometricPFQ|ypergeometricPFQRegularized|ypergeometricU|yperlink|yperplane|ypoexponentialDistribution|ypothesisTestData))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:I(?:PAddress|conData|conize|cosahedron|dentity|dentityMatrix|f|fCompiled|gnoringInactive|m|mage|mage3D|mage3DProjection|mage3DSlices|mageAccumulate|mageAdd|mageAdjust|mageAlign|mageApply|mageApplyIndexed|mageAspectRatio|mageAssemble|mageCapture|mageChannels|mageClip|mageCollage|mageColorSpace|mageCompose|mageConvolve|mageCooccurrence|mageCorners|mageCorrelate|mageCorrespondingPoints|mageCrop|mageData|mageDeconvolve|mageDemosaic|mageDifference|mageDimensions|mageDisplacements|mageDistance|mageEffect|mageExposureCombine|mageFeatureTrack|mageFileApply|mageFileFilter|mageFileScan|mageFilter|mageFocusCombine|mageForestingComponents|mageForwardTransformation|mageHistogram|mageIdentify|mageInstanceQ|mageKeypoints|mageLevels|mageLines|mageMarker|mageMeasurements|mageMesh|mageMultiply|magePad|magePartition|magePeriodogram|magePerspectiveTransformation|mageQ|mageRecolor|mageReflect|mageResize|mageRestyle|mageRotate|mageSaliencyFilter|mageScaled|mageScan|mageSubtract|mageTake|mageTransformation|mageTrim|mageType|mageValue|mageValuePositions|mageVectorscopePlot|mageWaveformPlot|mplicitD|mplicitRegion|mplies|mport|mportByteArray|mportString|mprovementImportance|nactivate|nactive|ncidenceGraph|ncidenceList|ncidenceMatrix|ncrement|ndefiniteMatrixQ|ndependenceTest|ndependentEdgeSetQ|ndependentPhysicalQuantity|ndependentUnit|ndependentUnitDimension|ndependentVertexSetQ|ndexEdgeTaggedGraph|ndexGraph|ndexed|nexactNumberQ|nfiniteLine|nfiniteLineThrough|nfinitePlane|nfix|nflationAdjust|nformation|nhomogeneousPoissonProcess|nner|nnerPolygon|nnerPolyhedron|npaint|nput|nputField|nputForm|nputNamePacket|nputNotebook|nputPacket|nputStream|nputString|nputStringPacket|nsert|nsertLinebreaks|nset|nsphere|nstall|nstallService|ntegerDigits|ntegerExponent|ntegerLength|ntegerName|ntegerPart|ntegerPartitions|ntegerQ|ntegerReverse|ntegerString|ntegrate|nteractiveTradingChart|nternallyBalancedDecomposition|nterpolatingFunction|nterpolatingPolynomial|nterpolation|nterpretation|nterpretationBox|nterpreter|nterquartileRange|nterrupt|ntersectingQ|ntersection|nterval|ntervalIntersection|ntervalMemberQ|ntervalSlider|ntervalUnion|nverse|nverseBetaRegularized|nverseBilateralLaplaceTransform|nverseBilateralZTransform|nverseCDF|nverseChiSquareDistribution|nverseContinuousWaveletTransform|nverseDistanceTransform|nverseEllipticNomeQ|nverseErf|nverseErfc|nverseFourier|nverseFourierCosTransform|nverseFourierSequenceTransform|nverseFourierSinTransform|nverseFourierTransform|nverseFunction|nverseGammaDistribution|nverseGammaRegularized|nverseGaussianDistribution|nverseGudermannian|nverseHankelTransform|nverseHaversine|nverseJacobiCD|nverseJacobiCN|nverseJacobiCS|nverseJacobiDC|nverseJacobiDN|nverseJacobiDS|nverseJacobiNC|nverseJacobiND|nverseJacobiNS|nverseJacobiSC|nverseJacobiSD|nverseJacobiSN|nverseLaplaceTransform|nverseMellinTransform|nversePermutation|nverseRadon|nverseRadonTransform|nverseSeries|nverseShortTimeFourier|nverseSpectrogram|nverseSurvivalFunction|nverseTransformedRegion|nverseWaveletTransform|nverseWeierstrassP|nverseWishartMatrixDistribution|nverseZTransform|nvisible|rreduciblePolynomialQ|slandData|solatingInterval|somorphicGraphQ|somorphicSubgraphQ|sotopeData|tem|toProcess))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:J(?:accardDissimilarity|acobiAmplitude|acobiCD|acobiCN|acobiCS|acobiDC|acobiDN|acobiDS|acobiEpsilon|acobiNC|acobiND|acobiNS|acobiP|acobiSC|acobiSD|acobiSN|acobiSymbol|acobiZN|acobiZeta|ankoGroupJ1|ankoGroupJ2|ankoGroupJ3|ankoGroupJ4|arqueBeraALMTest|ohnsonDistribution|oin|oinAcross|oinForm|oinedCurve|ordanDecomposition|ordanModelDecomposition|uliaSetBoettcher|uliaSetIterationCount|uliaSetPlot|uliaSetPoints|ulianDate))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:K(?:CoreComponents|Distribution|EdgeConnectedComponents|EdgeConnectedGraphQ|VertexConnectedComponents|VertexConnectedGraphQ|agiChart|aiserBesselWindow|aiserWindow|almanEstimator|almanFilter|arhunenLoeveDecomposition|aryTree|atzCentrality|elvinBei|elvinBer|elvinKei|elvinKer|endallTau|endallTauTest|ernelMixtureDistribution|ernelObject|ernels|ey|eyComplement|eyDrop|eyDropFrom|eyExistsQ|eyFreeQ|eyIntersection|eyMap|eyMemberQ|eySelect|eySort|eySortBy|eyTake|eyUnion|eyValueMap|eyValuePattern|eys|illProcess|irchhoffGraph|irchhoffMatrix|leinInvariantJ|napsackSolve|nightTourGraph|notData|nownUnitQ|ochCurve|olmogorovSmirnovTest|roneckerDelta|roneckerModelDecomposition|roneckerProduct|roneckerSymbol|uiperTest|umaraswamyDistribution|urtosis|uwaharaFilter))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:L(?:ABColor|CHColor|CM|QEstimatorGains|QGRegulator|QOutputRegulatorGains|QRegulatorGains|UDecomposition|UVColor|abel|abeled|aguerreL|akeData|ambdaComponents|ameC|ameCPrime|ameEigenvalueA|ameEigenvalueB|ameS|ameSPrime|aminaData|anczosWindow|andauDistribution|anguageData|anguageIdentify|aplaceDistribution|aplaceTransform|aplacian|aplacianFilter|aplacianGaussianFilter|aplacianPDETerm|ast|atitude|atitudeLongitude|atticeData|atticeReduce|aunchKernels|ayeredGraphPlot|ayeredGraphPlot3D|eafCount|eapVariant|eapYearQ|earnDistribution|earnedDistribution|eastSquares|eastSquaresFilterKernel|eftArrow|eftArrowBar|eftArrowRightArrow|eftDownTeeVector|eftDownVector|eftDownVectorBar|eftRightArrow|eftRightVector|eftTee|eftTeeArrow|eftTeeVector|eftTriangle|eftTriangleBar|eftTriangleEqual|eftUpDownVector|eftUpTeeVector|eftUpVector|eftUpVectorBar|eftVector|eftVectorBar|egended|egendreP|egendreQ|ength|engthWhile|erchPhi|ess|essEqual|essEqualGreater|essEqualThan|essFullEqual|essGreater|essLess|essSlantEqual|essThan|essTilde|etterCounts|etterNumber|etterQ|evel|eveneTest|eviCivitaTensor|evyDistribution|exicographicOrder|exicographicSort|ibraryDataType|ibraryFunction|ibraryFunctionError|ibraryFunctionInformation|ibraryFunctionLoad|ibraryFunctionUnload|ibraryLoad|ibraryUnload|iftingFilterData|iftingWaveletTransform|ighter|ikelihood|imit|indleyDistribution|ine|ineBreakChart|ineGraph|ineIntegralConvolutionPlot|ineLegend|inearFractionalOptimization|inearFractionalTransform|inearGradientFilling|inearGradientImage|inearModelFit|inearOptimization|inearRecurrence|inearSolve|inearSolveFunction|inearizingTransformationData|inkActivate|inkClose|inkConnect|inkCreate|inkInterrupt|inkLaunch|inkObject|inkPatterns|inkRankCentrality|inkRead|inkReadyQ|inkWrite|inks|iouvilleLambda|ist|istAnimate|istContourPlot|istContourPlot3D|istConvolve|istCorrelate|istCurvePathPlot|istDeconvolve|istDensityPlot|istDensityPlot3D|istFourierSequenceTransform|istInterpolation|istLineIntegralConvolutionPlot|istLinePlot|istLinePlot3D|istLogLinearPlot|istLogLogPlot|istLogPlot|istPicker|istPickerBox|istPlay|istPlot|istPlot3D|istPointPlot3D|istPolarPlot|istQ|istSliceContourPlot3D|istSliceDensityPlot3D|istSliceVectorPlot3D|istStepPlot|istStreamDensityPlot|istStreamPlot|istStreamPlot3D|istSurfacePlot3D|istVectorDensityPlot|istVectorDisplacementPlot|istVectorDisplacementPlot3D|istVectorPlot|istVectorPlot3D|istZTransform|ocalAdaptiveBinarize|ocalCache|ocalClusteringCoefficient|ocalEvaluate|ocalObject|ocalObjects|ocalSubmit|ocalSymbol|ocalTime|ocalTimeZone|ocationEquivalenceTest|ocationTest|ocator|ocatorPane|og|og10|og2|ogBarnesG|ogGamma|ogGammaDistribution|ogIntegral|ogLikelihood|ogLinearPlot|ogLogPlot|ogLogisticDistribution|ogMultinormalDistribution|ogNormalDistribution|ogPlot|ogRankTest|ogSeriesDistribution|ogicalExpand|ogisticDistribution|ogisticSigmoid|ogitModelFit|ongLeftArrow|ongLeftRightArrow|ongRightArrow|ongest|ongestCommonSequence|ongestCommonSequencePositions|ongestCommonSubsequence|ongestCommonSubsequencePositions|ongestOrderedSequence|ongitude|ookup|oopFreeGraphQ|owerCaseQ|owerLeftArrow|owerRightArrow|owerTriangularMatrix|owerTriangularMatrixQ|owerTriangularize|owpassFilter|ucasL|uccioSamiComponents|unarEclipse|yapunovSolve|yonsGroupLy))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:M(?:AProcess|achineNumberQ|agnify|ailReceiverFunction|ajority|akeBoxes|akeExpression|anagedLibraryExpressionID|anagedLibraryExpressionQ|andelbrotSetBoettcher|andelbrotSetDistance|andelbrotSetIterationCount|andelbrotSetMemberQ|andelbrotSetPlot|angoldtLambda|anhattanDistance|anipulate|anipulator|annWhitneyTest|annedSpaceMissionData|antissaExponent|ap|apAll|apApply|apAt|apIndexed|apThread|archenkoPasturDistribution|arcumQ|ardiaCombinedTest|ardiaKurtosisTest|ardiaSkewnessTest|arginalDistribution|arkovProcessProperties|assConcentrationCondition|assFluxValue|assImpermeableBoundaryValue|assOutflowValue|assSymmetryValue|assTransferValue|assTransportPDEComponent|atchQ|atchingDissimilarity|aterialShading|athMLForm|athematicalFunctionData|athieuC|athieuCPrime|athieuCharacteristicA|athieuCharacteristicB|athieuCharacteristicExponent|athieuGroupM11|athieuGroupM12|athieuGroupM22|athieuGroupM23|athieuGroupM24|athieuS|athieuSPrime|atrices|atrixExp|atrixForm|atrixFunction|atrixLog|atrixNormalDistribution|atrixPlot|atrixPower|atrixPropertyDistribution|atrixQ|atrixRank|atrixTDistribution|ax|axDate|axDetect|axFilter|axLimit|axMemoryUsed|axStableDistribution|axValue|aximalBy|aximize|axwellDistribution|cLaughlinGroupMcL|ean|eanClusteringCoefficient|eanDegreeConnectivity|eanDeviation|eanFilter|eanGraphDistance|eanNeighborDegree|eanShift|eanShiftFilter|edian|edianDeviation|edianFilter|edicalTestData|eijerG|eijerGReduce|eixnerDistribution|ellinConvolve|ellinTransform|emberQ|emoryAvailable|emoryConstrained|emoryInUse|engerMesh|enuPacket|enuView|erge|ersennePrimeExponent|ersennePrimeExponentQ|eshCellCount|eshCellIndex|eshCells|eshConnectivityGraph|eshCoordinates|eshPrimitives|eshRegion|eshRegionQ|essage|essageDialog|essageList|essageName|essagePacket|essages|eteorShowerData|exicanHatWavelet|eyerWavelet|in|inDate|inDetect|inFilter|inLimit|inMax|inStableDistribution|inValue|ineralData|inimalBy|inimalPolynomial|inimalStateSpaceModel|inimize|inimumTimeIncrement|inkowskiQuestionMark|inorPlanetData|inors|inus|inusPlus|issing|issingQ|ittagLefflerE|ixedFractionParts|ixedGraphQ|ixedMagnitude|ixedRadix|ixedRadixQuantity|ixedUnit|ixtureDistribution|od|odelPredictiveController|odularInverse|odularLambda|odule|oebiusMu|oment|omentConvert|omentEvaluate|omentGeneratingFunction|omentOfInertia|onitor|onomialList|onsterGroupM|oonPhase|oonPosition|orletWavelet|orphologicalBinarize|orphologicalBranchPoints|orphologicalComponents|orphologicalEulerNumber|orphologicalGraph|orphologicalPerimeter|orphologicalTransform|ortalityData|ost|ountainData|ouseAnnotation|ouseAppearance|ousePosition|ouseover|ovieData|ovingAverage|ovingMap|ovingMedian|oyalDistribution|ulticolumn|ultigraphQ|ultinomial|ultinomialDistribution|ultinormalDistribution|ultiplicativeOrder|ultiplySides|ultivariateHypergeometricDistribution|ultivariatePoissonDistribution|ultivariateTDistribution))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:N(?:|ArgMax|ArgMin|Cache|CaputoD|DEigensystem|DEigenvalues|DSolve|DSolveValue|Expectation|FractionalD|Integrate|MaxValue|Maximize|MinValue|Minimize|Probability|Product|Roots|Solve|SolveValues|Sum|akagamiDistribution|ameQ|ames|and|earest|earestFunction|earestMeshCells|earestNeighborGraph|earestTo|ebulaData|eedlemanWunschSimilarity|eeds|egative|egativeBinomialDistribution|egativeDefiniteMatrixQ|egativeMultinomialDistribution|egativeSemidefiniteMatrixQ|egativelyOrientedPoints|eighborhoodData|eighborhoodGraph|est|estGraph|estList|estWhile|estWhileList|estedGreaterGreater|estedLessLess|eumannValue|evilleThetaC|evilleThetaD|evilleThetaN|evilleThetaS|extCell|extDate|extPrime|icholsPlot|ightHemisphere|onCommutativeMultiply|onNegative|onPositive|oncentralBetaDistribution|oncentralChiSquareDistribution|oncentralFRatioDistribution|oncentralStudentTDistribution|ondimensionalizationTransform|oneTrue|onlinearModelFit|onlinearStateSpaceModel|onlocalMeansFilter|or|orlundB|orm|ormal|ormalDistribution|ormalMatrixQ|ormalize|ormalizedSquaredEuclideanDistance|ot|otCongruent|otCupCap|otDoubleVerticalBar|otElement|otEqualTilde|otExists|otGreater|otGreaterEqual|otGreaterFullEqual|otGreaterGreater|otGreaterLess|otGreaterSlantEqual|otGreaterTilde|otHumpDownHump|otHumpEqual|otLeftTriangle|otLeftTriangleBar|otLeftTriangleEqual|otLess|otLessEqual|otLessFullEqual|otLessGreater|otLessLess|otLessSlantEqual|otLessTilde|otNestedGreaterGreater|otNestedLessLess|otPrecedes|otPrecedesEqual|otPrecedesSlantEqual|otPrecedesTilde|otReverseElement|otRightTriangle|otRightTriangleBar|otRightTriangleEqual|otSquareSubset|otSquareSubsetEqual|otSquareSuperset|otSquareSupersetEqual|otSubset|otSubsetEqual|otSucceeds|otSucceedsEqual|otSucceedsSlantEqual|otSucceedsTilde|otSuperset|otSupersetEqual|otTilde|otTildeEqual|otTildeFullEqual|otTildeTilde|otVerticalBar|otebook|otebookApply|otebookClose|otebookDelete|otebookDirectory|otebookEvaluate|otebookFileName|otebookFind|otebookGet|otebookImport|otebookInformation|otebookLocate|otebookObject|otebookOpen|otebookPrint|otebookPut|otebookRead|otebookSave|otebookSelection|otebookTemplate|otebookWrite|otebooks|othing|uclearExplosionData|uclearReactorData|ullSpace|umberCompose|umberDecompose|umberDigit|umberExpand|umberFieldClassNumber|umberFieldDiscriminant|umberFieldFundamentalUnits|umberFieldIntegralBasis|umberFieldNormRepresentatives|umberFieldRegulator|umberFieldRootsOfUnity|umberFieldSignature|umberForm|umberLinePlot|umberQ|umerator|umeratorDenominator|umericQ|umericalOrder|umericalSort|uttallWindow|yquistPlot))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:O(?:|NanGroupON|bservabilityGramian|bservabilityMatrix|bservableDecomposition|bservableModelQ|ceanData|ctahedron|ddQ|ff|ffset|n|nce|pacity|penAppend|penRead|penWrite|pener|penerView|pening|perate|ptimumFlowData|ptionValue|ptional|ptionalElement|ptions|ptionsPattern|r|rder|rderDistribution|rderedQ|rdering|rderingBy|rderlessPatternSequence|rnsteinUhlenbeckProcess|rthogonalMatrixQ|rthogonalize|uter|uterPolygon|uterPolyhedron|utputControllabilityMatrix|utputControllableModelQ|utputForm|utputNamePacket|utputResponse|utputStream|verBar|verDot|verHat|verTilde|verVector|verflow|verlay|verscript|verscriptBox|wenT|wnValues))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:P(?:DF|ERTDistribution|IDTune|acletDataRebuild|acletDirectoryLoad|acletDirectoryUnload|acletDisable|acletEnable|acletFind|acletFindRemote|acletInstall|acletInstallSubmit|acletNewerQ|acletObject|acletSiteObject|acletSiteRegister|acletSiteUnregister|acletSiteUpdate|acletSites|acletUninstall|adLeft|adRight|addedForm|adeApproximant|ageRankCentrality|airedBarChart|airedHistogram|airedSmoothHistogram|airedTTest|airedZTest|aletteNotebook|alindromeQ|ane|aneSelector|anel|arabolicCylinderD|arallelArray|arallelAxisPlot|arallelCombine|arallelDo|arallelEvaluate|arallelKernels|arallelMap|arallelNeeds|arallelProduct|arallelSubmit|arallelSum|arallelTable|arallelTry|arallelepiped|arallelize|arallelogram|arameterMixtureDistribution|arametricConvexOptimization|arametricFunction|arametricNDSolve|arametricNDSolveValue|arametricPlot|arametricPlot3D|arametricRegion|arentBox|arentCell|arentDirectory|arentNotebook|aretoDistribution|aretoPickandsDistribution|arkData|art|artOfSpeech|artialCorrelationFunction|articleAcceleratorData|articleData|artition|artitionsP|artitionsQ|arzenWindow|ascalDistribution|aste|asteButton|athGraph|athGraphQ|attern|atternSequence|atternTest|aulWavelet|auliMatrix|ause|eakDetect|eanoCurve|earsonChiSquareTest|earsonCorrelationTest|earsonDistribution|ercentForm|erfectNumber|erfectNumberQ|erimeter|eriodicBoundaryCondition|eriodogram|eriodogramArray|ermanent|ermissionsGroup|ermissionsGroupMemberQ|ermissionsGroups|ermissionsKey|ermissionsKeys|ermutationCycles|ermutationCyclesQ|ermutationGroup|ermutationLength|ermutationList|ermutationListQ|ermutationMatrix|ermutationMax|ermutationMin|ermutationOrder|ermutationPower|ermutationProduct|ermutationReplace|ermutationSupport|ermutations|ermute|eronaMalikFilter|ersonData|etersenGraph|haseMargins|hongShading|hysicalSystemData|ick|ieChart|ieChart3D|iecewise|iecewiseExpand|illaiTrace|illaiTraceTest|ingTime|ixelValue|ixelValuePositions|laced|laceholder|lanarAngle|lanarFaceList|lanarGraph|lanarGraphQ|lanckRadiationLaw|laneCurveData|lanetData|lanetaryMoonData|lantData|lay|lot|lot3D|luralize|lus|lusMinus|ochhammer|oint|ointFigureChart|ointLegend|ointLight|ointSize|oissonConsulDistribution|oissonDistribution|oissonPDEComponent|oissonProcess|oissonWindow|olarPlot|olyGamma|olyLog|olyaAeppliDistribution|olygon|olygonAngle|olygonCoordinates|olygonDecomposition|olygonalNumber|olyhedron|olyhedronAngle|olyhedronCoordinates|olyhedronData|olyhedronDecomposition|olyhedronGenus|olynomialExpressionQ|olynomialExtendedGCD|olynomialGCD|olynomialLCM|olynomialMod|olynomialQ|olynomialQuotient|olynomialQuotientRemainder|olynomialReduce|olynomialRemainder|olynomialSumOfSquaresList|opupMenu|opupView|opupWindow|osition|ositionIndex|ositionLargest|ositionSmallest|ositive|ositiveDefiniteMatrixQ|ositiveSemidefiniteMatrixQ|ositivelyOrientedPoints|ossibleZeroQ|ostfix|ower|owerDistribution|owerExpand|owerMod|owerModList|owerRange|owerSpectralDensity|owerSymmetricPolynomial|owersRepresentations|reDecrement|reIncrement|recedenceForm|recedes|recedesEqual|recedesSlantEqual|recedesTilde|recision|redict|redictorFunction|redictorMeasurements|redictorMeasurementsObject|reemptProtect|refix|repend|rependTo|reviousCell|reviousDate|riceGraphDistribution|rime|rimeNu|rimeOmega|rimePi|rimePowerQ|rimeQ|rimeZetaP|rimitivePolynomialQ|rimitiveRoot|rimitiveRootList|rincipalComponents|rintTemporary|rintableASCIIQ|rintout3D|rism|rivateKey|robability|robabilityDistribution|robabilityPlot|robabilityScalePlot|robitModelFit|rocessConnection|rocessInformation|rocessObject|rocessParameterAssumptions|rocessParameterQ|rocessStatus|rocesses|roduct|roductDistribution|roductLog|rogressIndicator|rojection|roportion|roportional|rotect|roteinData|runing|seudoInverse|sychrometricPropertyData|ublicKey|ulsarData|ut|utAppend|yramid))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:Q(?:Binomial|Factorial|Gamma|HypergeometricPFQ|Pochhammer|PolyGamma|RDecomposition|nDispersion|uadraticIrrationalQ|uadraticOptimization|uantile|uantilePlot|uantity|uantityArray|uantityDistribution|uantityForm|uantityMagnitude|uantityQ|uantityUnit|uantityVariable|uantityVariableCanonicalUnit|uantityVariableDimensions|uantityVariableIdentifier|uantityVariablePhysicalQuantity|uartileDeviation|uartileSkewness|uartiles|uery|ueueProperties|ueueingNetworkProcess|ueueingProcess|uiet|uietEcho|uotient|uotientRemainder))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:R(?:GBColor|Solve|SolveValue|adialAxisPlot|adialGradientFilling|adialGradientImage|adialityCentrality|adicalBox|adioButton|adioButtonBar|adon|adonTransform|amanujanTau|amanujanTauL|amanujanTauTheta|amanujanTauZ|amp|andomChoice|andomColor|andomComplex|andomDate|andomEntity|andomFunction|andomGeneratorState|andomGeoPosition|andomGraph|andomImage|andomInteger|andomPermutation|andomPoint|andomPolygon|andomPolyhedron|andomPrime|andomReal|andomSample|andomTime|andomVariate|andomWalkProcess|andomWord|ange|angeFilter|ankedMax|ankedMin|arerProbability|aster|aster3D|asterize|ational|ationalExpressionQ|ationalize|atios|awBoxes|awData|ayleighDistribution|e|eIm|eImPlot|eactionPDETerm|ead|eadByteArray|eadLine|eadList|eadString|ealAbs|ealDigits|ealExponent|ealSign|eap|econstructionMesh|ectangle|ectangleChart|ectangleChart3D|ectangularRepeatingElement|ecurrenceFilter|ecurrenceTable|educe|efine|eflectionMatrix|eflectionTransform|efresh|egion|egionBinarize|egionBoundary|egionBounds|egionCentroid|egionCongruent|egionConvert|egionDifference|egionDilation|egionDimension|egionDisjoint|egionDistance|egionDistanceFunction|egionEmbeddingDimension|egionEqual|egionErosion|egionFit|egionImage|egionIntersection|egionMeasure|egionMember|egionMemberFunction|egionMoment|egionNearest|egionNearestFunction|egionPlot|egionPlot3D|egionProduct|egionQ|egionResize|egionSimilar|egionSymmetricDifference|egionUnion|egionWithin|egularExpression|egularPolygon|egularlySampledQ|elationGraph|eleaseHold|eliabilityDistribution|eliefImage|eliefPlot|emove|emoveAlphaChannel|emoveBackground|emoveDiacritics|emoveInputStreamMethod|emoveOutputStreamMethod|emoveUsers|enameDirectory|enameFile|enewalProcess|enkoChart|epairMesh|epeated|epeatedNull|epeatedTiming|epeatingElement|eplace|eplaceAll|eplaceAt|eplaceImageValue|eplaceList|eplacePart|eplacePixelValue|eplaceRepeated|esamplingAlgorithmData|escale|escalingTransform|esetDirectory|esidue|esidueSum|esolve|esourceData|esourceObject|esourceSearch|esponseForm|est|estricted|esultant|eturn|eturnExpressionPacket|eturnPacket|eturnTextPacket|everse|everseBiorthogonalSplineWavelet|everseElement|everseEquilibrium|everseGraph|everseSort|everseSortBy|everseUpEquilibrium|evolutionPlot3D|iccatiSolve|iceDistribution|idgeFilter|iemannR|iemannSiegelTheta|iemannSiegelZ|iemannXi|iffle|ightArrow|ightArrowBar|ightArrowLeftArrow|ightComposition|ightCosetRepresentative|ightDownTeeVector|ightDownVector|ightDownVectorBar|ightTee|ightTeeArrow|ightTeeVector|ightTriangle|ightTriangleBar|ightTriangleEqual|ightUpDownVector|ightUpTeeVector|ightUpVector|ightUpVectorBar|ightVector|ightVectorBar|iskAchievementImportance|iskReductionImportance|obustConvexOptimization|ogersTanimotoDissimilarity|ollPitchYawAngles|ollPitchYawMatrix|omanNumeral|oot|ootApproximant|ootIntervals|ootLocusPlot|ootMeanSquare|ootOfUnityQ|ootReduce|ootSum|oots|otate|otateLeft|otateRight|otationMatrix|otationTransform|ound|ow|owBox|owReduce|udinShapiro|udvalisGroupRu|ule|uleDelayed|ulePlot|un|unProcess|unThrough|ussellRaoDissimilarity))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:S(?:ARIMAProcess|ARMAProcess|ASTriangle|SSTriangle|ameAs|ameQ|ampledSoundFunction|ampledSoundList|atelliteData|atisfiabilityCount|atisfiabilityInstances|atisfiableQ|ave|avitzkyGolayMatrix|awtoothWave|cale|caled|calingMatrix|calingTransform|can|cheduledTask|churDecomposition|cientificForm|corerGi|corerGiPrime|corerHi|corerHiPrime|ec|ech|echDistribution|econdOrderConeOptimization|ectorChart|ectorChart3D|eedRandom|elect|electComponents|electFirst|electedCells|electedNotebook|electionCreateCell|electionEvaluate|electionEvaluateCreateCell|electionMove|emanticImport|emanticImportString|emanticInterpretation|emialgebraicComponentInstances|emidefiniteOptimization|endMail|endMessage|equence|equenceAlignment|equenceCases|equenceCount|equenceFold|equenceFoldList|equencePosition|equenceReplace|equenceSplit|eries|eriesCoefficient|eriesData|erviceConnect|erviceDisconnect|erviceExecute|erviceObject|essionSubmit|essionTime|et|etAccuracy|etAlphaChannel|etAttributes|etCloudDirectory|etCookies|etDelayed|etDirectory|etEnvironment|etFileDate|etOptions|etPermissions|etPrecision|etSelectedNotebook|etSharedFunction|etSharedVariable|etStreamPosition|etSystemOptions|etUsers|etter|etterBar|etting|hallow|hannonWavelet|hapiroWilkTest|hare|harpen|hearingMatrix|hearingTransform|hellRegion|henCastanMatrix|hiftRegisterSequence|hiftedGompertzDistribution|hort|hortDownArrow|hortLeftArrow|hortRightArrow|hortTimeFourier|hortTimeFourierData|hortUpArrow|hortest|hortestPathFunction|how|iderealTime|iegelTheta|iegelTukeyTest|ierpinskiCurve|ierpinskiMesh|ign|ignTest|ignature|ignedRankTest|ignedRegionDistance|impleGraph|impleGraphQ|implePolygonQ|implePolyhedronQ|implex|implify|in|inIntegral|inc|inghMaddalaDistribution|ingularValueDecomposition|ingularValueList|ingularValuePlot|inh|inhIntegral|ixJSymbol|keleton|keletonTransform|kellamDistribution|kewNormalDistribution|kewness|kip|liceContourPlot3D|liceDensityPlot3D|liceDistribution|liceVectorPlot3D|lideView|lider|lider2D|liderBox|lot|lotSequence|mallCircle|mithDecomposition|mithDelayCompensator|mithWatermanSimilarity|moothDensityHistogram|moothHistogram|moothHistogram3D|moothKernelDistribution|nDispersion|ocketConnect|ocketListen|ocketListener|ocketObject|ocketOpen|ocketReadMessage|ocketReadyQ|ocketWaitAll|ocketWaitNext|ockets|okalSneathDissimilarity|olarEclipse|olarSystemFeatureData|olarTime|olidAngle|olidData|olidRegionQ|olve|olveAlways|olveValues|ort|ortBy|ound|oundNote|ourcePDETerm|ow|paceCurveData|pacer|pan|parseArray|parseArrayQ|patialGraphDistribution|patialMedian|peak|pearmanRankTest|pearmanRho|peciesData|pectralLineData|pectrogram|pectrogramArray|pecularity|peechSynthesize|pellingCorrectionList|phere|pherePoints|phericalBesselJ|phericalBesselY|phericalHankelH1|phericalHankelH2|phericalHarmonicY|phericalPlot3D|phericalShell|pheroidalEigenvalue|pheroidalJoiningFactor|pheroidalPS|pheroidalPSPrime|pheroidalQS|pheroidalQSPrime|pheroidalRadialFactor|pheroidalS1|pheroidalS1Prime|pheroidalS2|pheroidalS2Prime|plicedDistribution|plit|plitBy|pokenString|potLight|qrt|qrtBox|quare|quareFreeQ|quareIntersection|quareMatrixQ|quareRepeatingElement|quareSubset|quareSubsetEqual|quareSuperset|quareSupersetEqual|quareUnion|quareWave|quaredEuclideanDistance|quaresR|tableDistribution|tack|tackBegin|tackComplete|tackInhibit|tackedDateListPlot|tackedListPlot|tadiumShape|tandardAtmosphereData|tandardDeviation|tandardDeviationFilter|tandardForm|tandardOceanData|tandardize|tandbyDistribution|tar|tarClusterData|tarData|tarGraph|tartProcess|tateFeedbackGains|tateOutputEstimator|tateResponse|tateSpaceModel|tateSpaceTransform|tateTransformationLinearize|tationaryDistribution|tationaryWaveletPacketTransform|tationaryWaveletTransform|tatusArea|tatusCentrality|tieltjesGamma|tippleShading|tirlingS1|tirlingS2|toppingPowerData|tratonovichProcess|treamDensityPlot|treamPlot|treamPlot3D|treamPosition|treams|tringCases|tringContainsQ|tringCount|tringDelete|tringDrop|tringEndsQ|tringExpression|tringExtract|tringForm|tringFormat|tringFormatQ|tringFreeQ|tringInsert|tringJoin|tringLength|tringMatchQ|tringPadLeft|tringPadRight|tringPart|tringPartition|tringPosition|tringQ|tringRepeat|tringReplace|tringReplaceList|tringReplacePart|tringReverse|tringRiffle|tringRotateLeft|tringRotateRight|tringSkeleton|tringSplit|tringStartsQ|tringTake|tringTakeDrop|tringTemplate|tringToByteArray|tringToStream|tringTrim|tripBoxes|tructuralImportance|truveH|truveL|tudentTDistribution|tyle|tyleBox|tyleData|ubMinus|ubPlus|ubStar|ubValues|ubdivide|ubfactorial|ubgraph|ubresultantPolynomialRemainders|ubresultantPolynomials|ubresultants|ubscript|ubscriptBox|ubsequences|ubset|ubsetEqual|ubsetMap|ubsetQ|ubsets|ubstitutionSystem|ubsuperscript|ubsuperscriptBox|ubtract|ubtractFrom|ubtractSides|ucceeds|ucceedsEqual|ucceedsSlantEqual|ucceedsTilde|uccess|uchThat|um|umConvergence|unPosition|unrise|unset|uperDagger|uperMinus|uperPlus|uperStar|upernovaData|uperscript|uperscriptBox|uperset|upersetEqual|urd|urfaceArea|urfaceData|urvivalDistribution|urvivalFunction|urvivalModel|urvivalModelFit|uzukiDistribution|uzukiGroupSuz|watchLegend|witch|ymbol|ymbolName|ymletWavelet|ymmetric|ymmetricGroup|ymmetricKey|ymmetricMatrixQ|ymmetricPolynomial|ymmetricReduction|ymmetrize|ymmetrizedArray|ymmetrizedArrayRules|ymmetrizedDependentComponents|ymmetrizedIndependentComponents|ymmetrizedReplacePart|ynonyms|yntaxInformation|yntaxLength|yntaxPacket|yntaxQ|ystemDialogInput|ystemInformation|ystemOpen|ystemOptions|ystemProcessData|ystemProcesses|ystemsConnectionsModel|ystemsModelControllerData|ystemsModelDelay|ystemsModelDelayApproximate|ystemsModelDelete|ystemsModelDimensions|ystemsModelExtract|ystemsModelFeedbackConnect|ystemsModelLinearity|ystemsModelMerge|ystemsModelOrder|ystemsModelParallelConnect|ystemsModelSeriesConnect|ystemsModelStateFeedbackConnect|ystemsModelVectorRelativeOrders))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:T(?:Test|abView|able|ableForm|agBox|agSet|agSetDelayed|agUnset|ake|akeDrop|akeLargest|akeLargestBy|akeList|akeSmallest|akeSmallestBy|akeWhile|ally|an|anh|askAbort|askExecute|askObject|askRemove|askResume|askSuspend|askWait|asks|autologyQ|eXForm|elegraphProcess|emplateApply|emplateBox|emplateExpression|emplateIf|emplateObject|emplateSequence|emplateSlot|emplateWith|emporalData|ensorContract|ensorDimensions|ensorExpand|ensorProduct|ensorRank|ensorReduce|ensorSymmetry|ensorTranspose|ensorWedge|erminatedEvaluation|estReport|estReportObject|estResultObject|etrahedron|ext|extCell|extData|extGrid|extPacket|extRecognize|extSentences|extString|extTranslation|extWords|exture|herefore|hermodynamicData|hermometerGauge|hickness|hinning|hompsonGroupTh|hread|hreeJSymbol|hreshold|hrough|hrow|hueMorse|humbnail|ideData|ilde|ildeEqual|ildeFullEqual|ildeTilde|imeConstrained|imeObject|imeObjectQ|imeRemaining|imeSeries|imeSeriesAggregate|imeSeriesForecast|imeSeriesInsert|imeSeriesInvertibility|imeSeriesMap|imeSeriesMapThread|imeSeriesModel|imeSeriesModelFit|imeSeriesResample|imeSeriesRescale|imeSeriesShift|imeSeriesThread|imeSeriesWindow|imeSystemConvert|imeUsed|imeValue|imeZoneConvert|imeZoneOffset|imelinePlot|imes|imesBy|iming|itsGroupT|oBoxes|oCharacterCode|oContinuousTimeModel|oDiscreteTimeModel|oEntity|oExpression|oInvertibleTimeSeries|oLowerCase|oNumberField|oPolarCoordinates|oRadicals|oRules|oSphericalCoordinates|oString|oUpperCase|oeplitzMatrix|ogether|oggler|ogglerBar|ooltip|oonShading|opHatTransform|opologicalSort|orus|orusGraph|otal|otalVariationFilter|ouchPosition|r|race|raceDialog|racePrint|raceScan|racyWidomDistribution|radingChart|raditionalForm|ransferFunctionCancel|ransferFunctionExpand|ransferFunctionFactor|ransferFunctionModel|ransferFunctionPoles|ransferFunctionTransform|ransferFunctionZeros|ransformationFunction|ransformationMatrix|ransformedDistribution|ransformedField|ransformedProcess|ransformedRegion|ransitiveClosureGraph|ransitiveReductionGraph|ranslate|ranslationTransform|ransliterate|ranspose|ravelDirections|ravelDirectionsData|ravelDistance|ravelDistanceList|ravelTime|reeForm|reeGraph|reeGraphQ|reePlot|riangle|riangleWave|riangularDistribution|riangulateMesh|rigExpand|rigFactor|rigFactorList|rigReduce|rigToExp|rigger|rimmedMean|rimmedVariance|ropicalStormData|rueQ|runcatedDistribution|runcatedPolyhedron|sallisQExponentialDistribution|sallisQGaussianDistribution|ube|ukeyLambdaDistribution|ukeyWindow|unnelData|uples|uranGraph|uringMachine|uttePolynomial|woWayRule|ypeHint))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:U(?:RL|RLBuild|RLDecode|RLDispatcher|RLDownload|RLEncode|RLExecute|RLExpand|RLParse|RLQueryDecode|RLQueryEncode|RLRead|RLResponseTime|RLShorten|RLSubmit|nateQ|ncompress|nderBar|nderflow|nderoverscript|nderoverscriptBox|nderscript|nderscriptBox|nderseaFeatureData|ndirectedEdge|ndirectedGraph|ndirectedGraphQ|nequal|nequalTo|nevaluated|niformDistribution|niformGraphDistribution|niformPolyhedron|niformSumDistribution|ninstall|nion|nionPlus|nique|nitBox|nitConvert|nitDimensions|nitRootTest|nitSimplify|nitStep|nitTriangle|nitVector|nitaryMatrixQ|nitize|niverseModelData|niversityData|nixTime|nprotect|nsameQ|nset|nsetShared|ntil|pArrow|pArrowBar|pArrowDownArrow|pDownArrow|pEquilibrium|pSet|pSetDelayed|pTee|pTeeArrow|pTo|pValues|pdate|pperCaseQ|pperLeftArrow|pperRightArrow|pperTriangularMatrix|pperTriangularMatrixQ|pperTriangularize|psample|singFrontEnd))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:V(?:alueQ|alues|ariables|ariance|arianceEquivalenceTest|arianceGammaDistribution|arianceTest|ectorAngle|ectorDensityPlot|ectorDisplacementPlot|ectorDisplacementPlot3D|ectorGreater|ectorGreaterEqual|ectorLess|ectorLessEqual|ectorPlot|ectorPlot3D|ectorQ|ectors|ee|erbatim|erificationTest|ertexAdd|ertexChromaticNumber|ertexComponent|ertexConnectivity|ertexContract|ertexCorrelationSimilarity|ertexCosineSimilarity|ertexCount|ertexCoverQ|ertexDegree|ertexDelete|ertexDiceSimilarity|ertexEccentricity|ertexInComponent|ertexInComponentGraph|ertexInDegree|ertexIndex|ertexJaccardSimilarity|ertexList|ertexOutComponent|ertexOutComponentGraph|ertexOutDegree|ertexQ|ertexReplace|ertexTransitiveGraphQ|ertexWeightedGraphQ|erticalBar|erticalGauge|erticalSeparator|erticalSlider|erticalTilde|oiceStyleData|oigtDistribution|olcanoData|olume|onMisesDistribution|oronoiMesh))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:W(?:aitAll|aitNext|akebyDistribution|alleniusHypergeometricDistribution|aringYuleDistribution|arpingCorrespondence|arpingDistance|atershedComponents|atsonUSquareTest|attsStrogatzGraphDistribution|avePDEComponent|aveletBestBasis|aveletFilterCoefficients|aveletImagePlot|aveletListPlot|aveletMapIndexed|aveletMatrixPlot|aveletPhi|aveletPsi|aveletScalogram|aveletThreshold|eakStationarity|eaklyConnectedComponents|eaklyConnectedGraphComponents|eaklyConnectedGraphQ|eatherData|eatherForecastData|eberE|edge|eibullDistribution|eierstrassE1|eierstrassE2|eierstrassE3|eierstrassEta1|eierstrassEta2|eierstrassEta3|eierstrassHalfPeriodW1|eierstrassHalfPeriodW2|eierstrassHalfPeriodW3|eierstrassHalfPeriods|eierstrassInvariantG2|eierstrassInvariantG3|eierstrassInvariants|eierstrassP|eierstrassPPrime|eierstrassSigma|eierstrassZeta|eightedAdjacencyGraph|eightedAdjacencyMatrix|eightedData|eightedGraphQ|elchWindow|heelGraph|henEvent|hich|hile|hiteNoiseProcess|hittakerM|hittakerW|ienerFilter|ienerProcess|ignerD|ignerSemicircleDistribution|ikipediaData|ilksW|ilksWTest|indDirectionData|indSpeedData|indVectorData|indingCount|indingPolygon|insorizedMean|insorizedVariance|ishartMatrixDistribution|ith|olframAlpha|olframLanguageData|ordCloud|ordCount|ordCounts|ordData|ordDefinition|ordFrequency|ordFrequencyData|ordList|ordStem|ordTranslation|rite|riteLine|riteString|ronskian))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:X(?:MLElement|MLObject|MLTemplate|YZColor|nor|or))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:Y(?:uleDissimilarity))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:Z(?:IPCodeData|Test|Transform|ernikeR|eroSymmetric|eta|etaZero|ipfDistribution))(?![`$[:alnum:]])",
            "name": "support.function.builtin.wolfram"
          },
          {
            "match": "(?:A(?:cceptanceThreshold|ccuracyGoal|ctiveStyle|ddOnHelpPath|djustmentBoxOptions|lignment|lignmentPoint|llowGroupClose|llowInlineCells|llowLooseGrammar|llowReverseGroupClose|llowScriptLevelChange|llowVersionUpdate|llowedCloudExtraParameters|llowedCloudParameterExtensions|llowedDimensions|llowedFrequencyRange|llowedHeads|lternativeHypothesis|ltitudeMethod|mbiguityFunction|natomySkinStyle|nchoredSearch|nimationDirection|nimationRate|nimationRepetitions|nimationRunTime|nimationRunning|nimationTimeIndex|nnotationRules|ntialiasing|ppearance|ppearanceElements|ppearanceRules|spectRatio|ssociationFormat|ssumptions|synchronous|ttachedCell|udioChannelAssignment|udioEncoding|udioInputDevice|udioLabel|udioOutputDevice|uthentication|utoAction|utoCopy|utoDelete|utoGeneratedPackage|utoIndent|utoItalicWords|utoMultiplicationSymbol|utoOpenNotebooks|utoOpenPalettes|utoOperatorRenderings|utoRemove|utoScroll|utoSpacing|utoloadPath|utorunSequencing|xes|xesEdge|xesLabel|xesOrigin|xesStyle))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:B(?:ackground|arOrigin|arSpacing|aseStyle|aselinePosition|inaryFormat|ookmarks|ooleanStrings|oundaryStyle|oxBaselineShift|oxFormFormatTypes|oxFrame|oxMargins|oxRatios|oxStyle|oxed|ubbleScale|ubbleSizes|uttonBoxOptions|uttonData|uttonFunction|uttonMinHeight|uttonSource|yteOrdering))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:C(?:alendarType|alloutMarker|alloutStyle|aptureRunning|aseOrdering|elestialSystem|ellAutoOverwrite|ellBaseline|ellBracketOptions|ellChangeTimes|ellContext|ellDingbat|ellDingbatMargin|ellDynamicExpression|ellEditDuplicate|ellEpilog|ellEvaluationDuplicate|ellEvaluationFunction|ellEventActions|ellFrame|ellFrameColor|ellFrameLabelMargins|ellFrameLabels|ellFrameMargins|ellGrouping|ellGroupingRules|ellHorizontalScrolling|ellID|ellLabel|ellLabelAutoDelete|ellLabelMargins|ellLabelPositioning|ellLabelStyle|ellLabelTemplate|ellMargins|ellOpen|ellProlog|ellSize|ellTags|haracterEncoding|haracterEncodingsPath|hartBaseStyle|hartElementFunction|hartElements|hartLabels|hartLayout|hartLegends|hartStyle|lassPriors|lickToCopyEnabled|lipPlanes|lipPlanesStyle|lipRange|lippingStyle|losingAutoSave|loudBase|loudObjectNameFormat|loudObjectURLType|lusterDissimilarityFunction|odeAssistOptions|olorCoverage|olorFunction|olorFunctionBinning|olorFunctionScaling|olorRules|olorSelectorSettings|olorSpace|olumnAlignments|olumnLines|olumnSpacings|olumnWidths|olumnsEqual|ombinerFunction|ommonDefaultFormatTypes|ommunityBoundaryStyle|ommunityLabels|ommunityRegionStyle|ompilationOptions|ompilationTarget|ompiled|omplexityFunction|ompressionLevel|onfidenceLevel|onfidenceRange|onfidenceTransform|onfigurationPath|onstants|ontentPadding|ontentSelectable|ontentSize|ontinuousAction|ontourLabels|ontourShading|ontourStyle|ontours|ontrolPlacement|ontrolType|ontrollerLinking|ontrollerMethod|ontrollerPath|ontrolsRendering|onversionRules|ookieFunction|oordinatesToolOptions|opyFunction|opyable|ornerNeighbors|ounterAssignments|ounterFunction|ounterIncrements|ounterStyleMenuListing|ovarianceEstimatorFunction|reateCellID|reateIntermediateDirectories|riterionFunction|ubics|urveClosed))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:D(?:ataRange|ataReversed|atasetTheme|ateFormat|ateFunction|ateGranularity|ateReduction|ateTicksFormat|ayCountConvention|efaultDuplicateCellStyle|efaultDuration|efaultElement|efaultFontProperties|efaultFormatType|efaultInlineFormatType|efaultNaturalLanguage|efaultNewCellStyle|efaultNewInlineCellStyle|efaultNotebook|efaultOptions|efaultPrintPrecision|efaultStyleDefinitions|einitialization|eletable|eleteContents|eletionWarning|elimiterAutoMatching|elimiterFlashTime|elimiterMatching|elimiters|eliveryFunction|ependentVariables|eployed|escriptorStateSpace|iacriticalPositioning|ialogProlog|ialogSymbols|igitBlock|irectedEdges|irection|iscreteVariables|ispersionEstimatorFunction|isplayAllSteps|isplayFunction|istanceFunction|istributedContexts|ithering|ividers|ockedCell|ockedCells|ynamicEvaluationTimeout|ynamicModuleValues|ynamicUpdating))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:E(?:clipseType|dgeCapacity|dgeCost|dgeLabelStyle|dgeLabels|dgeShapeFunction|dgeStyle|dgeValueRange|dgeValueSizes|dgeWeight|ditCellTagsSettings|ditable|lidedForms|nabled|pilog|pilogFunction|scapeRadius|valuatable|valuationCompletionAction|valuationElements|valuationMonitor|valuator|valuatorNames|ventLabels|xcludePods|xcludedContexts|xcludedForms|xcludedLines|xcludedPhysicalQuantities|xclusions|xclusionsStyle|xponentFunction|xponentPosition|xponentStep|xponentialFamily|xportAutoReplacements|xpressionUUID|xtension|xtentElementFunction|xtentMarkers|xtentSize|xternalDataCharacterEncoding|xternalOptions|xternalTypeSignature))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:F(?:aceGrids|aceGridsStyle|ailureAction|eatureNames|eatureTypes|eedbackSector|eedbackSectorStyle|eedbackType|ieldCompletionFunction|ieldHint|ieldHintStyle|ieldMasked|ieldSize|ileNameDialogSettings|ileNameForms|illing|illingStyle|indSettings|itRegularization|ollowRedirects|ontColor|ontFamily|ontSize|ontSlant|ontSubstitutions|ontTracking|ontVariations|ontWeight|orceVersionInstall|ormBoxOptions|ormLayoutFunction|ormProtectionMethod|ormatType|ormatTypeAutoConvert|ourierParameters|ractionBoxOptions|ractionLine|rame|rameBoxOptions|rameLabel|rameMargins|rameRate|rameStyle|rameTicks|rameTicksStyle|rontEndEventActions|unctionSpace))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:G(?:apPenalty|augeFaceElementFunction|augeFaceStyle|augeFrameElementFunction|augeFrameSize|augeFrameStyle|augeLabels|augeMarkers|augeStyle|aussianIntegers|enerateConditions|eneratedCell|eneratedDocumentBinding|eneratedParameters|eneratedQuantityMagnitudes|eneratorDescription|eneratorHistoryLength|eneratorOutputType|eoArraySize|eoBackground|eoCenter|eoGridLines|eoGridLinesStyle|eoGridRange|eoGridRangePadding|eoLabels|eoLocation|eoModel|eoProjection|eoRange|eoRangePadding|eoResolution|eoScaleBar|eoServer|eoStylingImageFunction|eoZoomLevel|radient|raphHighlight|raphHighlightStyle|raphLayerStyle|raphLayers|raphLayout|ridCreationSettings|ridDefaultElement|ridFrame|ridFrameMargins|ridLines|ridLinesStyle|roupActionBase|roupPageBreakWithin))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:H(?:eaderAlignment|eaderBackground|eaderDisplayFunction|eaderLines|eaderSize|eaderStyle|eads|elpBrowserSettings|iddenItems|olidayCalendar|yperlinkAction|yphenation))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:I(?:conRules|gnoreCase|gnoreDiacritics|gnorePunctuation|mageCaptureFunction|mageFormattingWidth|mageLabels|mageLegends|mageMargins|magePadding|magePreviewFunction|mageRegion|mageResolution|mageSize|mageSizeAction|mageSizeMultipliers|magingDevice|mportAutoReplacements|mportOptions|ncludeConstantBasis|ncludeDefinitions|ncludeDirectories|ncludeFileExtension|ncludeGeneratorTasks|ncludeInflections|ncludeMetaInformation|ncludePods|ncludeQuantities|ncludeSingularSolutions|ncludeWindowTimes|ncludedContexts|ndeterminateThreshold|nflationMethod|nheritScope|nitialSeeding|nitialization|nitializationCell|nitializationCellEvaluation|nitializationCellWarning|nputAliases|nputAssumptions|nputAutoReplacements|nsertResults|nsertionFunction|nteractive|nterleaving|nterpolationOrder|nterpolationPoints|nterpretationBoxOptions|nterpretationFunction|ntervalMarkers|ntervalMarkersStyle|nverseFunctions|temAspectRatio|temDisplayFunction|temSize|temStyle))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:J(?:oined))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:K(?:eepExistingVersion|eyCollisionFunction|eypointStrength))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:L(?:abelStyle|abelVisibility|abelingFunction|abelingSize|anguage|anguageCategory|ayerSizeFunction|eaderSize|earningRate|egendAppearance|egendFunction|egendLabel|egendLayout|egendMargins|egendMarkerSize|egendMarkers|ighting|ightingAngle|imitsPositioning|imitsPositioningTokens|ineBreakWithin|ineIndent|ineIndentMaxFraction|ineIntegralConvolutionScale|ineSpacing|inearOffsetFunction|inebreakAdjustments|inkFunction|inkProtocol|istFormat|istPickerBoxOptions|ocalizeVariables|ocatorAutoCreate|ocatorRegion|ooping))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:M(?:agnification|ailAddressValidation|ailResponseFunction|ailSettings|asking|atchLocalNames|axCellMeasure|axColorDistance|axDuration|axExtraBandwidths|axExtraConditions|axFeatureDisplacement|axFeatures|axItems|axIterations|axMixtureKernels|axOverlapFraction|axPlotPoints|axRecursion|axStepFraction|axStepSize|axSteps|emoryConstraint|enuCommandKey|enuSortingValue|enuStyle|esh|eshCellHighlight|eshCellLabel|eshCellMarker|eshCellShapeFunction|eshCellStyle|eshFunctions|eshQualityGoal|eshRefinementFunction|eshShading|eshStyle|etaInformation|ethod|inColorDistance|inIntervalSize|inPointSeparation|issingBehavior|issingDataMethod|issingDataRules|issingString|issingStyle|odal|odulus|ultiaxisArrangement|ultiedgeStyle|ultilaunchWarning|ultilineFunction|ultiselection))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:N(?:icholsGridLines|ominalVariables|onConstants|ormFunction|ormalized|ormalsFunction|otebookAutoSave|otebookBrowseDirectory|otebookConvertSettings|otebookDynamicExpression|otebookEventActions|otebookPath|otebooksMenu|otificationFunction|ullRecords|ullWords|umberFormat|umberMarks|umberMultiplier|umberPadding|umberPoint|umberSeparator|umberSigns|yquistGridLines))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:O(?:pacityFunction|pacityFunctionScaling|peratingSystem|ptionInspectorSettings|utputAutoOverwrite|utputSizeLimit|verlaps|verscriptBoxOptions|verwriteTarget))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:P(?:IDDerivativeFilter|IDFeedforward|acletSite|adding|addingSize|ageBreakAbove|ageBreakBelow|ageBreakWithin|ageFooterLines|ageFooters|ageHeaderLines|ageHeaders|ageTheme|ageWidth|alettePath|aneled|aragraphIndent|aragraphSpacing|arallelization|arameterEstimator|artBehavior|artitionGranularity|assEventsDown|assEventsUp|asteBoxFormInlineCells|ath|erformanceGoal|ermissions|haseRange|laceholderReplace|layRange|lotLabel|lotLabels|lotLayout|lotLegends|lotMarkers|lotPoints|lotRange|lotRangeClipping|lotRangePadding|lotRegion|lotStyle|lotTheme|odStates|odWidth|olarAxes|olarAxesOrigin|olarGridLines|olarTicks|oleZeroMarkers|recisionGoal|referencesPath|reprocessingRules|reserveColor|reserveImageOptions|rincipalValue|rintAction|rintPrecision|rintingCopies|rintingOptions|rintingPageRange|rintingStartingPageNumber|rintingStyleEnvironment|rintout3DPreviewer|rivateCellOptions|rivateEvaluationOptions|rivateFontOptions|rivateNotebookOptions|rivatePaths|rocessDirectory|rocessEnvironment|rocessEstimator|rogressReporting|rolog|ropagateAborts))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:Q(?:uartics))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:R(?:adicalBoxOptions|andomSeeding|asterSize|eImLabels|eImStyle|ealBlockDiagonalForm|ecognitionPrior|ecordLists|ecordSeparators|eferenceLineStyle|efreshRate|egionBoundaryStyle|egionFillingStyle|egionFunction|egionSize|egularization|enderingOptions|equiredPhysicalQuantities|esampling|esamplingMethod|esolveContextAliases|estartInterval|eturnReceiptFunction|evolutionAxis|otateLabel|otationAction|oundingRadius|owAlignments|owLines|owMinHeight|owSpacings|owsEqual|ulerUnits|untimeAttributes|untimeOptions))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:S(?:ameTest|ampleDepth|ampleRate|amplingPeriod|aveConnection|aveDefinitions|aveable|caleDivisions|caleOrigin|calePadding|caleRangeStyle|caleRanges|calingFunctions|cientificNotationThreshold|creenStyleEnvironment|criptBaselineShifts|criptLevel|criptMinSize|criptSizeMultipliers|crollPosition|crollbars|crollingOptions|ectorOrigin|ectorSpacing|electable|elfLoopStyle|eriesTermGoal|haringList|howAutoSpellCheck|howAutoStyles|howCellBracket|howCellLabel|howCellTags|howClosedCellArea|howContents|howCursorTracker|howGroupOpener|howPageBreaks|howSelection|howShortBoxForm|howSpecialCharacters|howStringCharacters|hrinkingDelay|ignPadding|ignificanceLevel|imilarityRules|ingleLetterItalics|liderBoxOptions|ortedBy|oundVolume|pacings|panAdjustments|panCharacterRounding|panLineThickness|panMaxSize|panMinSize|panSymmetric|pecificityGoal|pellingCorrection|pellingDictionaries|pellingDictionariesPath|pellingOptions|phericalRegion|plineClosed|plineDegree|plineKnots|plineWeights|qrtBoxOptions|tabilityMargins|tabilityMarginsStyle|tandardized|tartingStepSize|tateSpaceRealization|tepMonitor|trataVariables|treamColorFunction|treamColorFunctionScaling|treamMarkers|treamPoints|treamScale|treamStyle|trictInequalities|tripOnInput|tripWrapperBoxes|tructuredSelection|tyleBoxAutoDelete|tyleDefinitions|tyleHints|tyleMenuListing|tyleNameDialogSettings|tyleSheetPath|ubscriptBoxOptions|ubsuperscriptBoxOptions|ubtitleEncoding|uperscriptBoxOptions|urdForm|ynchronousInitialization|ynchronousUpdating|yntaxForm|ystemHelpPath|ystemsModelLabels))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:T(?:abFilling|abSpacings|ableAlignments|ableDepth|ableDirections|ableHeadings|ableSpacing|agBoxOptions|aggingRules|argetFunctions|argetUnits|emplateBoxOptions|emporalRegularity|estID|extAlignment|extClipboardType|extJustification|extureCoordinateFunction|extureCoordinateScaling|icks|icksStyle|imeConstraint|imeDirection|imeFormat|imeGoal|imeSystem|imeZone|okenWords|olerance|ooltipDelay|ooltipStyle|otalWidth|ouchscreenAutoZoom|ouchscreenControlPlacement|raceAbove|raceBackward|raceDepth|raceForward|raceOff|raceOn|raceOriginal|rackedSymbols|rackingFunction|raditionalFunctionNotation|ransformationClass|ransformationFunctions|ransitionDirection|ransitionDuration|ransitionEffect|ranslationOptions|ravelMethod|rendStyle|rig))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:U(?:nderoverscriptBoxOptions|nderscriptBoxOptions|ndoOptions|ndoTrackedVariables|nitSystem|nityDimensions|nsavedVariables|pdateInterval|pdatePacletSites|tilityFunction))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:V(?:alidationLength|alidationSet|alueDimensions|arianceEstimatorFunction|ectorAspectRatio|ectorColorFunction|ectorColorFunctionScaling|ectorMarkers|ectorPoints|ectorRange|ectorScaling|ectorSizes|ectorStyle|erifyConvergence|erifySecurityCertificates|erifySolutions|erifyTestAssumptions|ersionedPreferences|ertexCapacity|ertexColors|ertexCoordinates|ertexDataCoordinates|ertexLabelStyle|ertexLabels|ertexNormals|ertexShape|ertexShapeFunction|ertexSize|ertexStyle|ertexTextureCoordinates|ertexWeight|ideoEncoding|iewAngle|iewCenter|iewMatrix|iewPoint|iewProjection|iewRange|iewVector|iewVertical|isible))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:W(?:aveletScale|eights|hitePoint|indowClickSelect|indowElements|indowFloating|indowFrame|indowFrameElements|indowMargins|indowOpacity|indowSize|indowStatusArea|indowTitle|indowToolbars|ordOrientation|ordSearch|ordSelectionFunction|ordSeparators|ordSpacings|orkingPrecision|rapAround))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:Z(?:eroTest|eroWidthTimes))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:A(?:bove|fter|lgebraics|ll|nonymous|utomatic|xis))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:B(?:ack|ackward|aseline|efore|elow|lack|lue|old|ooleans|ottom|oxes|rown|yte))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:C(?:atalan|ellStyle|enter|haracter|omplexInfinity|omplexes|onstant|yan))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:D(?:ashed|efaultAxesStyle|efaultBaseStyle|efaultBoxStyle|efaultFaceGridsStyle|efaultFieldHintStyle|efaultFrameStyle|efaultFrameTicksStyle|efaultGridLinesStyle|efaultLabelStyle|efaultMenuStyle|efaultTicksStyle|efaultTooltipStyle|egree|elimiter|igitCharacter|otDashed|otted))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:E(?:|ndOfBuffer|ndOfFile|ndOfLine|ndOfString|ulerGamma|xpression))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:F(?:alse|lat|ontProperties|orward|orwardBackward|riday|ront|rontEndDynamicExpression|ull))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:G(?:eneral|laisher|oldenAngle|oldenRatio|ray|reen))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:H(?:ere|exadecimalCharacter|oldAll|oldAllComplete|oldFirst|oldRest))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:I(?:|ndeterminate|nfinity|nherited|nteger|ntegers|talic))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:K(?:hinchin))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:L(?:arge|arger|eft|etterCharacter|ightBlue|ightBrown|ightCyan|ightGray|ightGreen|ightMagenta|ightOrange|ightPink|ightPurple|ightRed|ightYellow|istable|ocked))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:M(?:achinePrecision|agenta|anual|edium|eshCellCentroid|eshCellMeasure|eshCellQuality|onday))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:N(?:HoldAll|HoldFirst|HoldRest|egativeIntegers|egativeRationals|egativeReals|oWhitespace|onNegativeIntegers|onNegativeRationals|onNegativeReals|onPositiveIntegers|onPositiveRationals|onPositiveReals|one|ow|ull|umber|umberString|umericFunction))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:O(?:neIdentity|range|rderless))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:P(?:i|ink|lain|ositiveIntegers|ositiveRationals|ositiveReals|rimes|rotected|unctuationCharacter|urple))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:R(?:ationals|eadProtected|eal|eals|ecord|ed|ight))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:S(?:aturday|equenceHold|mall|maller|panFromAbove|panFromBoth|panFromLeft|tartOfLine|tartOfString|tring|truckthrough|tub|unday))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:T(?:emporary|hick|hin|hursday|iny|oday|omorrow|op|ransparent|rue|uesday))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:U(?:ndefined|nderlined))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:W(?:ednesday|hite|hitespace|hitespaceCharacter|ord|ordBoundary|ordCharacter))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:Y(?:ellow|esterday))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:\\$(?:Aborted|ActivationKey|AllowDataUpdates|AllowInternet|AssertFunction|Assumptions|AudioInputDevices|AudioOutputDevices|BaseDirectory|BasePacletsDirectory|BatchInput|BatchOutput|ByteOrdering|CacheBaseDirectory|Canceled|CharacterEncoding|CharacterEncodings|CloudAccountName|CloudBase|CloudConnected|CloudCreditsAvailable|CloudEvaluation|CloudExpressionBase|CloudObjectNameFormat|CloudObjectURLType|CloudRootDirectory|CloudSymbolBase|CloudUserID|CloudUserUUID|CloudVersion|CommandLine|CompilationTarget|Context|ContextAliases|ContextPath|ControlActiveSetting|Cookies|CreationDate|CurrentLink|CurrentTask|DateStringFormat|DefaultAudioInputDevice|DefaultAudioOutputDevice|DefaultFrontEnd|DefaultImagingDevice|DefaultKernels|DefaultLocalBase|DefaultLocalKernel|Display|DisplayFunction|DistributedContexts|DynamicEvaluation|Echo|EmbedCodeEnvironments|EmbeddableServices|Epilog|EvaluationCloudBase|EvaluationCloudObject|EvaluationEnvironment|ExportFormats|Failed|FontFamilies|FrontEnd|FrontEndSession|GeoLocation|GeoLocationCity|GeoLocationCountry|GeoLocationSource|HomeDirectory|IgnoreEOF|ImageFormattingWidth|ImageResolution|ImagingDevice|ImagingDevices|ImportFormats|InitialDirectory|Input|InputFileName|InputStreamMethods|Inspector|InstallationDirectory|InterpreterTypes|IterationLimit|KernelCount|KernelID|Language|LibraryPath|LicenseExpirationDate|LicenseID|LicenseServer|Linked|LocalBase|LocalSymbolBase|MachineAddresses|MachineDomains|MachineEpsilon|MachineID|MachineName|MachinePrecision|MachineType|MaxExtraPrecision|MaxMachineNumber|MaxNumber|MaxPiecewiseCases|MaxPrecision|MaxRootDegree|MessageGroups|MessageList|MessagePrePrint|Messages|MinMachineNumber|MinNumber|MinPrecision|MobilePhone|ModuleNumber|NetworkConnected|NewMessage|NewSymbol|NotebookInlineStorageLimit|Notebooks|NumberMarks|OperatingSystem|Output|OutputSizeLimit|OutputStreamMethods|Packages|ParentLink|ParentProcessID|PasswordFile|Path|PathnameSeparator|PerformanceGoal|Permissions|PlotTheme|Printout3DPreviewer|ProcessID|ProcessorCount|ProcessorType|ProgressReporting|RandomGeneratorState|RecursionLimit|ReleaseNumber|RequesterAddress|RequesterCloudUserID|RequesterCloudUserUUID|RequesterWolframID|RequesterWolframUUID|RootDirectory|ScriptCommandLine|ScriptInputString|Services|SessionID|SharedFunctions|SharedVariables|SoundDisplayFunction|SynchronousEvaluation|System|SystemCharacterEncoding|SystemID|SystemShell|SystemTimeZone|SystemWordLength|TemplatePath|TemporaryDirectory|TimeUnit|TimeZone|TimeZoneEntity|TimedOut|UnitSystem|Urgent|UserAgentString|UserBaseDirectory|UserBasePacletsDirectory|UserDocumentsDirectory|UserURLBase|Username|Version|VersionNumber|WolframDocumentsDirectory|WolframID|WolframUUID))(?![`$[:alnum:]])",
            "name": "constant.language.wolfram"
          },
          {
            "match": "(?:A(?:bortScheduledTask|ctive|lgebraicRules|lternateImage|natomyForm|nimationCycleOffset|nimationCycleRepetitions|nimationDisplayTime|spectRatioFixed|stronomicalData|synchronousTaskObject|synchronousTasks|udioDevice|udioLooping))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "(?:B(?:uttonEvaluator|uttonExpandable|uttonFrame|uttonMargins|uttonNote|uttonStyle))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "(?:C(?:DFInformation|hebyshevDistance|lassifierInformation|lipFill|olorOutput|olumnForm|ompose|onstantArrayLayer|onstantPlusLayer|onstantTimesLayer|onstrainedMax|onstrainedMin|ontourGraphics|ontourLines|onversionOptions|reateScheduledTask|reateTemporary|urry))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "(?:D(?:atabinRemove|ate|ebug|efaultColor|efaultFont|ensityGraphics|isplay|isplayString|otPlusLayer|ragAndDrop))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "(?:E(?:dgeLabeling|dgeRenderingFunction|valuateScheduledTask|xpectedValue))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "(?:F(?:actorComplete|ontForm|ormTheme|romDate|ullOptions))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "(?:G(?:raphStyle|raphicsArray|raphicsSpacing|ridBaseline))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "(?:H(?:TMLSave|eldPart|iddenSurface|omeDirectory))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "(?:I(?:mageRotated|nstanceNormalizationLayer))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "(?:L(?:UBackSubstitution|egendreType|ightSources|inearProgramming|inkOpen|iteral|ongestMatch))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "(?:M(?:eshRange|oleculeEquivalentQ))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "(?:N(?:etInformation|etSharedArray|extScheduledTaskTime|otebookCreate))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "(?:O(?:penTemporary))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "(?:P(?:IDData|ackingMethod|ersistentValue|ixelConstrained|lot3Matrix|lotDivision|lotJoined|olygonIntersections|redictorInformation|roperties|roperty|ropertyList|ropertyValue))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "(?:R(?:andom|asterArray|ecognitionThreshold|elease|emoteKernelObject|emoveAsynchronousTask|emoveProperty|emoveScheduledTask|enderAll|eplaceHeldPart|esetScheduledTask|esumePacket|unScheduledTask))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "(?:S(?:cheduledTaskActiveQ|cheduledTaskInformation|cheduledTaskObject|cheduledTasks|creenRectangle|electionAnimate|equenceAttentionLayer|equenceForm|etProperty|hading|hortestMatch|ingularValues|kinStyle|ocialMediaData|tartAsynchronousTask|tartScheduledTask|tateDimensions|topAsynchronousTask|topScheduledTask|tructuredArray|tyleForm|tylePrint|ubscripted|urfaceColor|urfaceGraphics|uspendPacket|ystemModelProgressReporting))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "(?:T(?:eXSave|extStyle|imeWarpingCorrespondence|imeWarpingDistance|oDate|oFileName|oHeldExpression))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "(?:U(?:RLFetch|RLFetchAsynchronous|RLSave|RLSaveAsynchronous))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "(?:V(?:ectorScale|ertexCoordinateRules|ertexLabeling|ertexRenderingFunction))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "(?:W(?:aitAsynchronousTask|indowMovable))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "(?:\\$(?:AsynchronousTask|ConfiguredKernels|DefaultFont|EntityStores|FormatType|HTTPCookies|InstallationDate|MachineDomain|ProductInformation|ProgramName|RandomState|ScheduledTask|SummaryBoxDataSizeLimit|TemporaryPrefix|TextStyle|TopDirectory|UserAddOnsDirectory))(?![`$[:alnum:]])",
            "name": "invalid.deprecated.wolfram"
          },
          {
            "match": "(?:A(?:ctionDelay|ctionMenuBox|ctionMenuBoxOptions|ctiveItem|lgebraicRulesData|lignmentMarker|llowAdultContent|llowChatServices|llowIncomplete|nalytic|nimatorBox|nimatorBoxOptions|nimatorElements|ppendCheck|rgumentCountQ|rrow3DBox|rrowBox|uthenticate|utoEvaluateEvents|utoIndentSpacings|utoMatch|utoNumberFormatting|utoQuoteCharacters|utoScaling|utoStyleOptions|utoStyleWords|utomaticImageSize|xis3DBox|xis3DBoxOptions|xisBox|xisBoxOptions))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:B(?:SplineCurve3DBox|SplineCurve3DBoxOptions|SplineCurveBox|SplineCurveBoxOptions|SplineSurface3DBox|SplineSurface3DBoxOptions|ackFaceColor|ackFaceGlowColor|ackFaceOpacity|ackFaceSpecularColor|ackFaceSpecularExponent|ackFaceSurfaceAppearance|ackFaceTexture|ackgroundAppearance|ackgroundTasksSettings|acksubstitution|eveled|ezierCurve3DBox|ezierCurve3DBoxOptions|ezierCurveBox|ezierCurveBoxOptions|lankForm|ounds|ox|oxDimensions|oxForm|oxID|oxRotation|oxRotationPoint|ra|raKet|rowserCategory|uttonCell|uttonContents|uttonStyleMenuListing))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:C(?:acheGraphics|achedValue|ardinalBSplineBasis|ellBoundingBox|ellContents|ellElementSpacings|ellElementsBoundingBox|ellFrameStyle|ellInsertionPointCell|ellTrayPosition|ellTrayWidgets|hangeOptions|hannelDatabin|hannelListenerWait|hannelPreSendFunction|hartElementData|hartElementDataFunction|heckAll|heckboxBox|heckboxBoxOptions|ircleBox|lipboardNotebook|lockwiseContourIntegral|losed|losingEvent|loudConnections|loudObjectInformation|loudObjectInformationData|loudUserID|oarse|oefficientDomain|olonForm|olorSetterBox|olorSetterBoxOptions|olumnBackgrounds|ompilerEnvironmentAppend|ompletionsListPacket|omponentwiseContextMenu|ompressedData|oneBox|onicHullRegion3DBox|onicHullRegion3DBoxOptions|onicHullRegionBox|onicHullRegionBoxOptions|onnect|ontentsBoundingBox|ontextMenu|ontinuation|ontourIntegral|ontourSmoothing|ontrolAlignment|ontrollerDuration|ontrollerInformationData|onvertToPostScript|onvertToPostScriptPacket|ookies|opyTag|ounterBox|ounterBoxOptions|ounterClockwiseContourIntegral|ounterEvaluator|ounterStyle|uboidBox|uboidBoxOptions|urlyDoubleQuote|urlyQuote|ylinderBox|ylinderBoxOptions))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:D(?:OSTextFormat|ampingFactor|ataCompression|atasetDisplayPanel|ateDelimiters|ebugTag|ecimal|efault2DTool|efault3DTool|efaultAttachedCellStyle|efaultControlPlacement|efaultDockedCellStyle|efaultInputFormatType|efaultOutputFormatType|efaultStyle|efaultTextFormatType|efaultTextInlineFormatType|efaultValue|efineExternal|egreeLexicographic|egreeReverseLexicographic|eleteWithContents|elimitedArray|estroyAfterEvaluation|eviceOpenQ|ialogIndent|ialogLevel|ifferenceOrder|igitBlockMinimum|isableConsolePrintPacket|iskBox|iskBoxOptions|ispatchQ|isplayRules|isplayTemporary|istributionDomain|ivergence|ocumentGeneratorInformationData|omainRegistrationInformation|oubleContourIntegral|oublyInfinite|own|rawBackFaces|rawFrontFaces|rawHighlighted|ualLinearProgramming|umpGet|ynamicBox|ynamicBoxOptions|ynamicLocation|ynamicModuleBox|ynamicModuleBoxOptions|ynamicModuleParent|ynamicName|ynamicNamespace|ynamicReference|ynamicWrapperBox|ynamicWrapperBoxOptions))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:E(?:ditButtonSettings|liminationOrder|llipticReducedHalfPeriods|mbeddingObject|mphasizeSyntaxErrors|mpty|nableConsolePrintPacket|ndAdd|ngineEnvironment|nter|qualColumns|qualRows|quatedTo|rrorBoxOptions|rrorNorm|rrorPacket|rrorsDialogSettings|valuated|valuationMode|valuationOrder|valuationRateLimit|ventEvaluator|ventHandlerTag|xactRootIsolation|xitDialog|xpectationE|xportPacket|xpressionPacket|xternalCall|xternalFunctionName))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:F(?:EDisableConsolePrintPacket|EEnableConsolePrintPacket|ail|ileInformation|ileName|illForm|illedCurveBox|illedCurveBoxOptions|ine|itAll|lashSelection|ont|ontName|ontOpacity|ontPostScriptName|ontReencoding|ormatRules|ormatValues|rameInset|rameless|rontEndObject|rontEndResource|rontEndResourceString|rontEndStackSize|rontEndValueCache|rontEndVersion|rontFaceColor|rontFaceGlowColor|rontFaceOpacity|rontFaceSpecularColor|rontFaceSpecularExponent|rontFaceSurfaceAppearance|rontFaceTexture|ullAxes))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:G(?:eneratedCellStyles|eneric|eometricTransformation3DBox|eometricTransformation3DBoxOptions|eometricTransformationBox|eometricTransformationBoxOptions|estureHandlerTag|etContext|etFileName|etLinebreakInformationPacket|lobalPreferences|lobalSession|raphLayerLabels|raphRoot|raphics3DBox|raphics3DBoxOptions|raphicsBaseline|raphicsBox|raphicsBoxOptions|raphicsComplex3DBox|raphicsComplex3DBoxOptions|raphicsComplexBox|raphicsComplexBoxOptions|raphicsContents|raphicsData|raphicsGridBox|raphicsGroup3DBox|raphicsGroup3DBoxOptions|raphicsGroupBox|raphicsGroupBoxOptions|raphicsGrouping|raphicsStyle|reekStyle|ridBoxAlignment|ridBoxBackground|ridBoxDividers|ridBoxFrame|ridBoxItemSize|ridBoxItemStyle|ridBoxOptions|ridBoxSpacings|ridElementStyleOptions|roupOpenerColor|roupOpenerInsideFrame|roupTogetherGrouping|roupTogetherNestedGrouping))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:H(?:eadCompose|eaders|elpBrowserLookup|elpBrowserNotebook|elpViewerSettings|essian|exahedronBox|exahedronBoxOptions|ighlightString|omePage|orizontal|orizontalForm|orizontalScrollPosition|yperlinkCreationSettings|yphenationOptions))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:I(?:conizedObject|gnoreSpellCheck|mageCache|mageCacheValid|mageEditMode|mageMarkers|mageOffset|mageRangeCache|mageSizeCache|mageSizeRaw|nactiveStyle|ncludeSingularTerm|ndent|ndentMaxFraction|ndentingNewlineSpacings|ndexCreationOptions|ndexTag|nequality|nexactNumbers|nformationData|nformationDataGrid|nlineCounterAssignments|nlineCounterIncrements|nlineRules|nputFieldBox|nputFieldBoxOptions|nputGrouping|nputSettings|nputToBoxFormPacket|nsertionPointObject|nset3DBox|nset3DBoxOptions|nsetBox|nsetBoxOptions|ntegral|nterlaced|nterpolationPrecision|nterpretTemplate|nterruptSettings|nto|nvisibleApplication|nvisibleTimes|temBox|temBoxOptions))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:J(?:acobian|oinedCurveBox|oinedCurveBoxOptions))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:K(?:|ernelExecute|et))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:L(?:abeledSlider|ambertW|anguageOptions|aunch|ayoutInformation|exicographic|icenseID|ine3DBox|ine3DBoxOptions|ineBox|ineBoxOptions|ineBreak|ineWrapParts|inearFilter|inebreakSemicolonWeighting|inkConnectedQ|inkError|inkFlush|inkHost|inkMode|inkOptions|inkReadHeld|inkService|inkWriteHeld|istPickerBoxBackground|isten|iteralSearch|ocalizeDefinitions|ocatorBox|ocatorBoxOptions|ocatorCentering|ocatorPaneBox|ocatorPaneBoxOptions|ongEqual|ongForm|oopback))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:M(?:achineID|achineName|acintoshSystemPageSetup|ainSolve|aintainDynamicCaches|akeRules|atchLocalNameQ|aterial|athMLText|athematicaNotation|axBend|axPoints|enu|enuAppearance|enuEvaluator|enuItem|enuList|ergeDifferences|essageObject|essageOptions|essagesNotebook|etaCharacters|ethodOptions|inRecursion|inSize|ode|odular|onomialOrder|ouseAppearanceTag|ouseButtons|ousePointerNote|ultiLetterItalics|ultiLetterStyle|ultiplicity|ultiscriptBoxOptions))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:N(?:BernoulliB|ProductFactors|SumTerms|Values|amespaceBox|amespaceBoxOptions|estedScriptRules|etworkPacketRecordingDuring|ext|onAssociative|ormalGrouping|otebookDefault|otebookInterfaceObject))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:O(?:LEData|bjectExistsQ|pen|penFunctionInspectorPacket|penSpecialOptions|penerBox|penerBoxOptions|ptionQ|ptionValueBox|ptionValueBoxOptions|ptionsPacket|utputFormData|utputGrouping|utputMathEditExpression|ver|verlayBox|verlayBoxOptions))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:P(?:ackPaclet|ackage|acletDirectoryAdd|acletDirectoryRemove|acletInformation|acletObjectQ|acletUpdate|ageHeight|alettesMenuSettings|aneBox|aneBoxOptions|aneSelectorBox|aneSelectorBoxOptions|anelBox|anelBoxOptions|aperWidth|arameter|arameterVariables|arentConnect|arentForm|arentList|arenthesize|artialD|asteAutoQuoteCharacters|ausedTime|eriodicInterpolation|erpendicular|ickMode|ickedElements|ivoting|lotRangeClipPlanesStyle|oint3DBox|oint3DBoxOptions|ointBox|ointBoxOptions|olygon3DBox|olygon3DBoxOptions|olygonBox|olygonBoxOptions|olygonHoleScale|olygonScale|olyhedronBox|olyhedronBoxOptions|olynomialForm|olynomials|opupMenuBox|opupMenuBoxOptions|ostScript|recedence|redictionRoot|referencesSettings|revious|rimaryPlaceholder|rintForm|rismBox|rismBoxOptions|rivateFrontEndOptions|robabilityPr|rocessStateDomain|rocessTimeDomain|rogressIndicatorBox|rogressIndicatorBoxOptions|romptForm|yramidBox|yramidBoxOptions))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:R(?:adioButtonBox|adioButtonBoxOptions|andomSeed|angeSpecification|aster3DBox|aster3DBoxOptions|asterBox|asterBoxOptions|ationalFunctions|awArray|awMedium|ebuildPacletData|ectangleBox|ecurringDigitsForm|eferenceMarkerStyle|eferenceMarkers|einstall|emoved|epeatedString|esourceAcquire|esourceSubmissionObject|eturnCreatesNewCell|eturnEntersInput|eturnInputFormPacket|otationBox|otationBoxOptions|oundImplies|owBackgrounds|owHeights|uleCondition|uleForm))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:S(?:aveAutoDelete|caledMousePosition|cheduledTaskInformationData|criptForm|criptRules|ectionGrouping|electWithContents|election|electionCell|electionCellCreateCell|electionCellDefaultStyle|electionCellParentStyle|electionPlaceholder|elfLoops|erviceResponse|etOptionsPacket|etSecuredAuthenticationKey|etbacks|etterBox|etterBoxOptions|howAutoConvert|howCodeAssist|howControls|howGroupOpenCloseIcon|howInvisibleCharacters|howPredictiveInterface|howSyntaxStyles|hrinkWrapBoundingBox|ingleEvaluation|ingleLetterStyle|lider2DBox|lider2DBoxOptions|ocket|olveDelayed|oundAndGraphics|pace|paceForm|panningCharacters|phereBox|phereBoxOptions|tartupSound|tringBreak|tringByteCount|tripStyleOnPaste|trokeForm|tructuredArrayHeadQ|tyleKeyMapping|tyleNames|urfaceAppearance|yntax|ystemException|ystemGet|ystemInformationData|ystemStub|ystemTest))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:T(?:ab|abViewBox|abViewBoxOptions|ableViewBox|ableViewBoxAlignment|ableViewBoxBackground|ableViewBoxHeaders|ableViewBoxItemSize|ableViewBoxItemStyle|ableViewBoxOptions|agBoxNote|agStyle|emplateEvaluate|emplateSlotSequence|emplateUnevaluated|emplateVerbatim|emporaryVariable|ensorQ|etrahedronBox|etrahedronBoxOptions|ext3DBox|ext3DBoxOptions|extBand|extBoundingBox|extBox|extForm|extLine|extParagraph|hisLink|itleGrouping|oColor|oggle|oggleFalse|ogglerBox|ogglerBoxOptions|ooBig|ooltipBox|ooltipBoxOptions|otalHeight|raceAction|raceInternal|raceLevel|rackCellChangeTimes|raditionalNotation|raditionalOrder|ransparentColor|rapEnterKey|rapSelection|ubeBSplineCurveBox|ubeBSplineCurveBoxOptions|ubeBezierCurveBox|ubeBezierCurveBoxOptions|ubeBox|ubeBoxOptions))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:U(?:ntrackedVariables|p|seGraphicsRange|serDefinedWavelet|sing))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:V(?:2Get|alueBox|alueBoxOptions|alueForm|aluesData|ectorGlyphData|erbose|ertical|erticalForm|iewPointSelectorSettings|iewPort|irtualGroupData|isibleCell))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:W(?:aitUntil|ebPageMetaInformation|holeCellGroupOpener|indowPersistentStyles|indowSelected|indowWidth|olframAlphaDate|olframAlphaQuantity|olframAlphaResult|olframCloudSettings))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:\\$(?:ActivationGroupID|ActivationUserRegistered|AddOnsDirectory|BoxForms|CloudConnection|CloudVersionNumber|CloudWolframEngineVersionNumber|ConditionHold|DefaultMailbox|DefaultPath|FinancialDataSource|GeoEntityTypes|GeoLocationPrecision|HTMLExportRules|HTTPRequest|LaunchDirectory|LicenseProcesses|LicenseSubprocesses|LicenseType|LinkSupported|LoadedFiles|MaxLicenseProcesses|MaxLicenseSubprocesses|MinorReleaseNumber|NetworkLicense|Off|OutputForms|PatchLevelID|PermissionsGroupBase|PipeSupported|PreferencesDirectory|PrintForms|PrintLiteral|RegisteredDeviceClasses|RegisteredUserName|SecuredAuthenticationKeyTokens|SetParentLink|SoundDisplay|SuppressInputFormHeads|SystemMemory|TraceOff|TraceOn|TracePattern|TracePostAction|TracePreAction|UserAgentLanguages|UserAgentMachine|UserAgentName|UserAgentOperatingSystem|UserAgentVersion|UserName))(?![`$[:alnum:]])",
            "name": "support.function.undocumented.wolfram"
          },
          {
            "match": "(?:A(?:ctiveClassification|ctiveClassificationObject|ctivePrediction|ctivePredictionObject|ddToSearchIndex|ggregatedEntityClass|ggregationLayer|ngleBisector|nimatedImage|nimationVideo|nomalyDetector|ppendLayer|pplication|pplyReaction|round|roundReplace|rrayReduce|sk|skAppend|skConfirm|skDisplay|skFunction|skState|skTemplateDisplay|skedQ|skedValue|ssessmentFunction|ssessmentResultObject|ssumeDeterministic|stroAngularSeparation|stroBackground|stroCenter|stroDistance|stroGraphics|stroGridLines|stroGridLinesStyle|stroPosition|stroProjection|stroRange|stroRangePadding|stroReferenceFrame|stroStyling|stroZoomLevel|tom|tomCoordinates|tomCount|tomDiagramCoordinates|tomLabelStyle|tomLabels|tomList|ttachCell|ttentionLayer|udioAnnotate|udioAnnotationLookup|udioIdentify|udioInstanceQ|udioPause|udioPlay|udioRecord|udioStop|udioStream|udioStreams|udioTrackApply|udioTrackSelection|utocomplete|utocompletionFunction|xiomaticTheory|xisLabel|xisObject|xisStyle))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:B(?:asicRecurrentLayer|atchNormalizationLayer|atchSize|ayesianMaximization|ayesianMaximizationObject|ayesianMinimization|ayesianMinimizationObject|esagL|innedVariogramList|inomialPointProcess|ioSequence|ioSequenceBackTranslateList|ioSequenceComplement|ioSequenceInstances|ioSequenceModify|ioSequencePlot|ioSequenceQ|ioSequenceReverseComplement|ioSequenceTranscribe|ioSequenceTranslate|itRate|lockDiagonalMatrix|lockLowerTriangularMatrix|lockUpperTriangularMatrix|lockchainAddressData|lockchainBase|lockchainBlockData|lockchainContractValue|lockchainData|lockchainGet|lockchainKeyEncode|lockchainPut|lockchainTokenData|lockchainTransaction|lockchainTransactionData|lockchainTransactionSign|lockchainTransactionSubmit|ond|ondCount|ondLabelStyle|ondLabels|ondList|ondQ|uildCompiledComponent))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:C(?:TCLossLayer|achePersistence|anvas|ast|ategoricalDistribution|atenateLayer|auchyPointProcess|hannelBase|hannelBrokerAction|hannelHistoryLength|hannelListen|hannelListener|hannelListeners|hannelObject|hannelReceiverFunction|hannelSend|hannelSubscribers|haracterNormalize|hemicalConvert|hemicalFormula|hemicalInstance|hemicalReaction|loudExpression|loudExpressions|loudRenderingMethod|ombinatorB|ombinatorC|ombinatorI|ombinatorK|ombinatorS|ombinatorW|ombinatorY|ombinedEntityClass|ompiledCodeFunction|ompiledComponent|ompiledExpressionDeclaration|ompiledLayer|ompilerCallback|ompilerEnvironment|ompilerEnvironmentAppendTo|ompilerEnvironmentObject|ompilerOptions|omplementedEntityClass|omputeUncertainty|onfirmQuiet|onformationMethod|onnectSystemModelComponents|onnectSystemModelController|onnectedMoleculeComponents|onnectedMoleculeQ|onnectionSettings|ontaining|ontentDetectorFunction|ontentFieldOptions|ontentLocationFunction|ontentObject|ontrastiveLossLayer|onvolutionLayer|reateChannel|reateCloudExpression|reateCompilerEnvironment|reateDataStructure|reateDataSystemModel|reateLicenseEntitlement|reateSearchIndex|reateSystemModel|reateTypeInstance|rossEntropyLossLayer|urrentNotebookImage|urrentScreenImage|urryApplied))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:D(?:SolveChangeVariables|ataStructure|ataStructureQ|atabaseConnect|atabaseDisconnect|atabaseReference|atabinSubmit|ateInterval|eclareCompiledComponent|econvolutionLayer|ecryptFile|eleteChannel|eleteCloudExpression|eleteElements|eleteSearchIndex|erivedKey|iggleGatesPointProcess|iggleGrattonPointProcess|igitalSignature|isableFormatting|ocumentWeightingRules|otLayer|ownValuesFunction|ropoutLayer|ynamicImage))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:E(?:choTiming|lementwiseLayer|mbeddedSQLEntityClass|mbeddedSQLExpression|mbeddingLayer|mptySpaceF|ncryptFile|ntityFunction|ntityStore|stimatedPointProcess|stimatedVariogramModel|valuationEnvironment|valuationPrivileges|xpirationDate|xpressionTree|xtendedEntityClass|xternalEvaluate|xternalFunction|xternalIdentifier|xternalObject|xternalSessionObject|xternalSessions|xternalStorageBase|xternalStorageDownload|xternalStorageGet|xternalStorageObject|xternalStoragePut|xternalStorageUpload|xternalValue|xtractLayer))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:F(?:aceRecognize|eatureDistance|eatureExtract|eatureExtraction|eatureExtractor|eatureExtractorFunction|ileConvert|ileFormatProperties|ileNameToFormatList|ileSystemTree|ilteredEntityClass|indChannels|indEquationalProof|indExternalEvaluators|indGeometricConjectures|indImageText|indIsomers|indMoleculeSubstructure|indPointProcessParameters|indSystemModelEquilibrium|indTextualAnswer|lattenLayer|orAllType|ormControl|orwardCloudCredentials|oxHReduce|rameListVideo|romRawPointer|unctionCompile|unctionCompileExport|unctionCompileExportByteArray|unctionCompileExportLibrary|unctionCompileExportString|unctionDeclaration|unctionLayer|unctionPoles))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:G(?:alleryView|atedRecurrentLayer|enerateDerivedKey|enerateDigitalSignature|enerateFileSignature|enerateSecuredAuthenticationKey|eneratedAssetFormat|eneratedAssetLocation|eoGraphValuePlot|eoOrientationData|eometricAssertion|eometricScene|eometricStep|eometricStylingRules|eometricTest|ibbsPointProcess|raphTree|ridVideo))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:H(?:andlerFunctions|andlerFunctionsKeys|ardcorePointProcess|istogramPointDensity))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:I(?:gnoreIsotopes|gnoreStereochemistry|mageAugmentationLayer|mageBoundingBoxes|mageCases|mageContainsQ|mageContents|mageGraphics|magePosition|magePyramid|magePyramidApply|mageStitch|mportedObject|ncludeAromaticBonds|ncludeHydrogens|ncludeRelatedTables|nertEvaluate|nertExpression|nfiniteFuture|nfinitePast|nhomogeneousPoissonPointProcess|nitialEvaluationHistory|nitializationObject|nitializationObjects|nitializationValue|nitialize|nputPorts|ntegrateChangeVariables|nterfaceSwitched|ntersectedEntityClass|nverseImagePyramid))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:K(?:ernelConfiguration|ernelFunction))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:L(?:earningRateMultipliers|ibraryFunctionDeclaration|icenseEntitlementObject|icenseEntitlements|icensingSettings|inearLayer|iteralType|oadCompiledComponent|ocalResponseNormalizationLayer|ongShortTermMemoryLayer|ossFunction))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:M(?:IMETypeToFormatList|ailExecute|ailFolder|ailItem|ailSearch|ailServerConnect|ailServerConnection|aternPointProcess|axDisplayedChildren|axTrainingRounds|axWordGap|eanAbsoluteLossLayer|eanAround|eanPointDensity|eanSquaredLossLayer|ergingFunction|idpoint|issingValuePattern|issingValueSynthesis|olecule|oleculeAlign|oleculeContainsQ|oleculeDraw|oleculeFreeQ|oleculeGraph|oleculeMatchQ|oleculeMaximumCommonSubstructure|oleculeModify|oleculeName|oleculePattern|oleculePlot|oleculePlot3D|oleculeProperty|oleculeQ|oleculeRecognize|oleculeSubstructureCount|oleculeValue))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:N(?:BodySimulation|BodySimulationData|earestNeighborG|estTree|etAppend|etArray|etArrayLayer|etBidirectionalOperator|etChain|etDecoder|etDelete|etDrop|etEncoder|etEvaluationMode|etExternalObject|etExtract|etFlatten|etFoldOperator|etGANOperator|etGraph|etInitialize|etInsert|etInsertSharedArrays|etJoin|etMapOperator|etMapThreadOperator|etMeasurements|etModel|etNestOperator|etPairEmbeddingOperator|etPort|etPortGradient|etPrepend|etRename|etReplace|etReplacePart|etStateObject|etTake|etTrain|etTrainResultsObject|etUnfold|etworkPacketCapture|etworkPacketRecording|etworkPacketTrace|eymanScottPointProcess|ominalScale|ormalizationLayer|umericArray|umericArrayQ|umericArrayType))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:O(?:peratorApplied|rderingLayer|rdinalScale|utputPorts|verlayVideo))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:P(?:acletSymbol|addingLayer|agination|airCorrelationG|arametricRampLayer|arentEdgeLabel|arentEdgeLabelFunction|arentEdgeLabelStyle|arentEdgeShapeFunction|arentEdgeStyle|arentEdgeStyleFunction|artLayer|artProtection|atternFilling|atternReaction|enttinenPointProcess|erpendicularBisector|ersistenceLocation|ersistenceTime|ersistentObject|ersistentObjects|ersistentSymbol|itchRecognize|laceholderLayer|laybackSettings|ointCountDistribution|ointDensity|ointDensityFunction|ointProcessEstimator|ointProcessFitTest|ointProcessParameterAssumptions|ointProcessParameterQ|ointStatisticFunction|ointValuePlot|oissonPointProcess|oolingLayer|rependLayer|roofObject|ublisherID))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:Q(?:uestionGenerator|uestionInterface|uestionObject|uestionSelector))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:R(?:andomArrayLayer|andomInstance|andomPointConfiguration|andomTree|eactionBalance|eactionBalancedQ|ecalibrationFunction|egisterExternalEvaluator|elationalDatabase|emoteAuthorizationCaching|emoteBatchJobAbort|emoteBatchJobObject|emoteBatchJobs|emoteBatchMapSubmit|emoteBatchSubmissionEnvironment|emoteBatchSubmit|emoteConnect|emoteConnectionObject|emoteEvaluate|emoteFile|emoteInputFiles|emoteProviderSettings|emoteRun|emoteRunProcess|emovalConditions|emoveAudioStream|emoveChannelListener|emoveChannelSubscribers|emoveVideoStream|eplicateLayer|eshapeLayer|esizeLayer|esourceFunction|esourceRegister|esourceRemove|esourceSubmit|esourceSystemBase|esourceSystemPath|esourceUpdate|esourceVersion|everseApplied|ipleyK|ipleyRassonRegion|ootTree|ulesTree))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:S(?:ameTestProperties|ampledEntityClass|earchAdjustment|earchIndexObject|earchIndices|earchQueryString|earchResultObject|ecuredAuthenticationKey|ecuredAuthenticationKeys|ecurityCertificate|equenceIndicesLayer|equenceLastLayer|equenceMostLayer|equencePredict|equencePredictorFunction|equenceRestLayer|equenceReverseLayer|erviceRequest|erviceSubmit|etFileFormatProperties|etSystemModel|lideShowVideo|moothPointDensity|nippet|nippetsVideo|nubPolyhedron|oftmaxLayer|olidBoundaryLoadValue|olidDisplacementCondition|olidFixedCondition|olidMechanicsPDEComponent|olidMechanicsStrain|olidMechanicsStress|ortedEntityClass|ourceLink|patialBinnedPointData|patialBoundaryCorrection|patialEstimate|patialEstimatorFunction|patialJ|patialNoiseLevel|patialObservationRegionQ|patialPointData|patialPointSelect|patialRandomnessTest|patialTransformationLayer|patialTrendFunction|peakerMatchQ|peechCases|peechInterpreter|peechRecognize|plice|tartExternalSession|tartWebSession|tereochemistryElements|traussHardcorePointProcess|traussPointProcess|ubsetCases|ubsetCount|ubsetPosition|ubsetReplace|ubtitleTrackSelection|ummationLayer|ymmetricDifference|ynthesizeMissingValues|ystemCredential|ystemCredentialData|ystemCredentialKey|ystemCredentialKeys|ystemCredentialStoreObject|ystemInstall|ystemModel|ystemModelExamples|ystemModelLinearize|ystemModelMeasurements|ystemModelParametricSimulate|ystemModelPlot|ystemModelReliability|ystemModelSimulate|ystemModelSimulateSensitivity|ystemModelSimulationData|ystemModeler|ystemModels))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:T(?:ableView|argetDevice|argetSystem|ernaryListPlot|ernaryPlotCorners|extCases|extContents|extElement|extPosition|extSearch|extSearchReport|extStructure|homasPointProcess|hreaded|hreadingLayer|ickDirection|ickLabelOrientation|ickLabelPositioning|ickLabels|ickLengths|ickPositions|oRawPointer|otalLayer|ourVideo|rainImageContentDetector|rainTextContentDetector|rainingProgressCheckpointing|rainingProgressFunction|rainingProgressMeasurements|rainingProgressReporting|rainingStoppingCriterion|rainingUpdateSchedule|ransposeLayer|ree|reeCases|reeChildren|reeCount|reeData|reeDelete|reeDepth|reeElementCoordinates|reeElementLabel|reeElementLabelFunction|reeElementLabelStyle|reeElementShape|reeElementShapeFunction|reeElementSize|reeElementSizeFunction|reeElementStyle|reeElementStyleFunction|reeExpression|reeExtract|reeFold|reeInsert|reeLayout|reeLeafCount|reeLeafQ|reeLeaves|reeLevel|reeMap|reeMapAt|reeOutline|reePosition|reeQ|reeReplacePart|reeRules|reeScan|reeSelect|reeSize|reeTraversalOrder|riangleCenter|riangleConstruct|riangleMeasurement|ypeDeclaration|ypeEvaluate|ypeOf|ypeSpecifier|yped))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:U(?:RLDownloadSubmit|nconstrainedParameters|nionedEntityClass|niqueElements|nitVectorLayer|nlabeledTree|nmanageObject|nregisterExternalEvaluator|pdateSearchIndex|seEmbeddedLibrary))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:V(?:alenceErrorHandling|alenceFilling|aluePreprocessingFunction|andermondeMatrix|arianceGammaPointProcess|ariogramFunction|ariogramModel|ectorAround|erifyDerivedKey|erifyDigitalSignature|erifyFileSignature|erifyInterpretation|ideo|ideoCapture|ideoCombine|ideoDelete|ideoExtractFrames|ideoFrameList|ideoFrameMap|ideoGenerator|ideoInsert|ideoIntervals|ideoJoin|ideoMap|ideoMapList|ideoMapTimeSeries|ideoPadding|ideoPause|ideoPlay|ideoQ|ideoRecord|ideoReplace|ideoScreenCapture|ideoSplit|ideoStop|ideoStream|ideoStreams|ideoTimeStretch|ideoTrackSelection|ideoTranscode|ideoTransparency|ideoTrim))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:W(?:ebAudioSearch|ebColumn|ebElementObject|ebExecute|ebImage|ebImageSearch|ebItem|ebRow|ebSearch|ebSessionObject|ebSessions|ebWindowObject|ikidataData|ikidataSearch|ikipediaSearch|ithCleanup|ithLock))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:Z(?:oomCenter|oomFactor))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:\\$(?:AllowExternalChannelFunctions|AudioDecoders|AudioEncoders|BlockchainBase|ChannelBase|CompilerEnvironment|CookieStore|CryptographicEllipticCurveNames|CurrentWebSession|DataStructures|DefaultNetworkInterface|DefaultProxyRules|DefaultRemoteBatchSubmissionEnvironment|DefaultRemoteKernel|DefaultSystemCredentialStore|ExternalIdentifierTypes|ExternalStorageBase|GeneratedAssetLocation|IncomingMailSettings|Initialization|InitializationContexts|MaxDisplayedChildren|NetworkInterfaces|NoValue|PersistenceBase|PersistencePath|PreInitialization|PublisherID|ResourceSystemBase|ResourceSystemPath|SSHAuthentication|ServiceCreditsAvailable|SourceLink|SubtitleDecoders|SubtitleEncoders|SystemCredentialStore|TargetSystems|TestFileName|VideoDecoders|VideoEncoders|VoiceStyles))(?![`$[:alnum:]])",
            "name": "support.function.experimental.wolfram"
          },
          {
            "match": "(?:A(?:llFalse|nyFalse))(?![`$[:alnum:]])",
            "name": "invalid.bad.wolfram"
          },
          {
            "match": "(?:B(?:oolean))(?![`$[:alnum:]])",
            "name": "invalid.bad.wolfram"
          },
          {
            "match": "(?:C(?:loudbase|omplexQ))(?![`$[:alnum:]])",
            "name": "invalid.bad.wolfram"
          },
          {
            "match": "(?:D(?:ataSet))(?![`$[:alnum:]])",
            "name": "invalid.bad.wolfram"
          },
          {
            "match": "(?:E(?:xpandFilename|xportPacket))(?![`$[:alnum:]])",
            "name": "invalid.bad.wolfram"
          },
          {
            "match": "(?:F(?:ailed|alseQ))(?![`$[:alnum:]])",
            "name": "invalid.bad.wolfram"
          },
          {
            "match": "(?:I(?:nterpolationFunction|nterpolationPolynomial))(?![`$[:alnum:]])",
            "name": "invalid.bad.wolfram"
          },
          {
            "match": "(?:M(?:atch))(?![`$[:alnum:]])",
            "name": "invalid.bad.wolfram"
          },
          {
            "match": "(?:O(?:ptionPattern|ptionsQ))(?![`$[:alnum:]])",
            "name": "invalid.bad.wolfram"
          },
          {
            "match": "(?:R(?:ationalQ|ealQ))(?![`$[:alnum:]])",
            "name": "invalid.bad.wolfram"
          },
          {
            "match": "(?:S(?:tringMatch|ymbolQ))(?![`$[:alnum:]])",
            "name": "invalid.bad.wolfram"
          },
          {
            "match": "(?:U(?:nSameQ|rlExecute))(?![`$[:alnum:]])",
            "name": "invalid.bad.wolfram"
          },
          {
            "match": "(?:\\$(?:PathNameSeparator|RegisteredUsername))(?![`$[:alnum:]])",
            "name": "invalid.bad.wolfram"
          },
          {
            "match": "(?:E(?:cho|xit))(?![`$[:alnum:]])",
            "name": "invalid.session.wolfram"
          },
          {
            "match": "(?:I(?:n|nString))(?![`$[:alnum:]])",
            "name": "invalid.session.wolfram"
          },
          {
            "match": "(?:O(?:ut))(?![`$[:alnum:]])",
            "name": "invalid.session.wolfram"
          },
          {
            "match": "(?:P(?:rint))(?![`$[:alnum:]])",
            "name": "invalid.session.wolfram"
          },
          {
            "match": "(?:Q(?:uit))(?![`$[:alnum:]])",
            "name": "invalid.session.wolfram"
          },
          {
            "match": "(?:\\$(?:HistoryLength|Line|Post|Pre|PrePrint|PreRead|SyntaxHandler))(?![`$[:alnum:]])",
            "name": "invalid.session.wolfram"
          },
          {
            "match": "(?:[$[:alpha:]][$[:alnum:]]*)(?=\\s*(\\[(?!\\s*\\[)|@(?!@)))",
            "name": "variable.function.wolfram"
          },
          {
            "match": "(?:[$[:alpha:]][$[:alnum:]]*)",
            "name": "symbol.unrecognized.wolfram"
          }
        ]
      }
    },
    "scopeName": "source.wolfram",
    "aliases": [
      "wl"
    ]
  }
])