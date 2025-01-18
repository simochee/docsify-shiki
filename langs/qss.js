/** Shiki Language: qss */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push([
  {
    "displayName": "Qt Style Sheets",
    "name": "qss",
    "patterns": [
      {
        "include": "#comment-block"
      },
      {
        "include": "#rule-list"
      },
      {
        "include": "#selector"
      }
    ],
    "repository": {
      "color": {
        "patterns": [
          {
            "begin": "\\b(rgb|rgba|hsv|hsva|hsl|hsla)\\s*\\(",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.qss"
              }
            },
            "description": "Color Type",
            "end": "\\)",
            "patterns": [
              {
                "include": "#comment-block"
              },
              {
                "include": "#number"
              }
            ]
          },
          {
            "match": "\\b(white|black|red|darkred|green|darkgreen|blue|darkblue|cyan|darkcyan|magenta|darkmagenta|yellow|darkyellow|gray|darkgray|lightgray|transparent|color0|color1)\\b",
            "name": "support.constant.property-value.named-color.qss"
          },
          {
            "match": "#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\\b",
            "name": "support.constant.property-value.color.qss"
          }
        ]
      },
      "comment-block": {
        "patterns": [
          {
            "begin": "/\\*",
            "end": "\\*/",
            "name": "comment.block.qss"
          }
        ]
      },
      "icon-properties": {
        "patterns": [
          {
            "match": "\\b(backward-icon|cd-icon|computer-icon|desktop-icon|dialog-apply-icon|dialog-cancel-icon|dialog-close-icon|dialog-discard-icon|dialog-help-icon|dialog-no-icon|dialog-ok-icon|dialog-open-icon|dialog-reset-icon|dialog-save-icon|dialog-yes-icon|directory-closed-icon|directory-icon|directory-link-icon|directory-open-icon|dockwidget-close-icon|downarrow-icon|dvd-icon|file-icon|file-link-icon|filedialog-contentsview-icon|filedialog-detailedview-icon|filedialog-end-icon|filedialog-infoview-icon|filedialog-listview-icon|filedialog-new-directory-icon|filedialog-parent-directory-icon|filedialog-start-icon|floppy-icon|forward-icon|harddisk-icon|home-icon|leftarrow-icon|messagebox-critical-icon|messagebox-information-icon|messagebox-question-icon|messagebox-warning-icon|network-icon|rightarrow-icon|titlebar-contexthelp-icon|titlebar-maximize-icon|titlebar-menu-icon|titlebar-minimize-icon|titlebar-normal-icon|titlebar-close-icon|titlebar-shade-icon|titlebar-unshade-icon|trash-icon|uparrow-icon)\\b",
            "name": "support.type.property-name.qss"
          }
        ]
      },
      "id-selector": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.entity.qss"
              },
              "2": {
                "name": "entity.name.tag.qss"
              }
            },
            "match": "(#)([a-zA-Z][a-zA-Z0-9_-]*)"
          }
        ]
      },
      "number": {
        "patterns": [
          {
            "description": "floating number",
            "match": "\\b(\\d+)?\\.(\\d+)\\b",
            "name": "constant.numeric.qss"
          },
          {
            "description": "percentage",
            "match": "\\b(\\d+)%",
            "name": "constant.numeric.qss"
          },
          {
            "description": "length",
            "match": "\\b(\\d+)(px|pt|em|ex)?\\b",
            "name": "constant.numeric.qss"
          },
          {
            "description": "integer",
            "match": "\\b(\\d+)\\b",
            "name": "constant.numeric.qss"
          }
        ]
      },
      "properties": {
        "patterns": [
          {
            "include": "#property-values"
          },
          {
            "match": "\\b(paint-alternating-row-colors-for-empty-area|dialogbuttonbox-buttons-have-icons|titlebar-show-tooltips-on-buttons|messagebox-text-interaction-flags|lineedit-password-mask-delay|outline-bottom-right-radius|lineedit-password-character|selection-background-color|outline-bottom-left-radius|border-bottom-right-radius|alternate-background-color|widget-animation-duration|border-bottom-left-radius|show-decoration-selected|outline-top-right-radius|outline-top-left-radius|border-top-right-radius|border-top-left-radius|background-attachment|subcontrol-position|border-bottom-width|border-bottom-style|border-bottom-color|background-position|border-right-width|border-right-style|border-right-color|subcontrol-origin|border-left-width|border-left-style|border-left-color|background-origin|background-repeat|border-top-width|border-top-style|border-top-color|background-image|background-color|text-decoration|selection-color|background-clip|padding-bottom|outline-radius|outline-offset|image-position|gridline-color|padding-right|outline-style|outline-color|margin-bottom|button-layout|border-radius|border-bottom|padding-left|margin-right|border-width|border-style|border-image|border-color|border-right|padding-top|margin-left|font-weight|font-family|border-left|text-align|min-height|max-height|margin-top|font-style|border-top|background|min-width|max-width|icon-size|font-size|position|spacing|padding|outline|opacity|margin|height|bottom|border|width|right|image|color|left|font|top)\\b",
            "name": "support.type.property-name.qss"
          },
          {
            "include": "#icon-properties"
          }
        ]
      },
      "property-selector": {
        "patterns": [
          {
            "begin": "\\[",
            "end": "\\]",
            "patterns": [
              {
                "include": "#comment-block"
              },
              {
                "include": "#string"
              },
              {
                "match": "\\b[_a-zA-Z]\\w*\\b",
                "name": "variable.parameter.qml"
              }
            ]
          }
        ]
      },
      "property-values": {
        "patterns": [
          {
            "begin": ":",
            "end": ";|(?=\\})",
            "patterns": [
              {
                "include": "#comment-block"
              },
              {
                "include": "#color"
              },
              {
                "begin": "\\b(qlineargradient|qradialgradient|qconicalgradient)\\s*\\(",
                "beginCaptures": {
                  "1": {
                    "name": "entity.name.function.qss"
                  }
                },
                "description": "Gradient Type",
                "end": "\\)",
                "patterns": [
                  {
                    "include": "#comment-block"
                  },
                  {
                    "match": "\\b(x1|y1|x2|y2|stop|angle|radius|cx|cy|fx|fy)\\b",
                    "name": "variable.parameter.qss"
                  },
                  {
                    "include": "#color"
                  },
                  {
                    "include": "#number"
                  }
                ]
              },
              {
                "begin": "\\b(url)\\s*\\(",
                "beginCaptures": {
                  "1": {
                    "name": "entity.name.function.qss"
                  }
                },
                "contentName": "string.unquoted.qss",
                "description": "URL Type",
                "end": "\\)"
              },
              {
                "match": "\\bpalette\\s*(?=\\()\\b",
                "name": "entity.name.function.qss"
              },
              {
                "match": "\\b(highlighted-text|alternate-base|line-through|link-visited|dot-dot-dash|window-text|button-text|bright-text|underline|no-repeat|highlight|overline|absolute|relative|repeat-y|repeat-x|midlight|selected|disabled|dot-dash|content|padding|oblique|stretch|repeat|window|shadow|button|border|margin|active|italic|normal|outset|groove|double|dotted|dashed|repeat|scroll|center|bottom|light|solid|ridge|inset|fixed|right|text|link|dark|base|bold|none|left|mid|off|top|on)\\b",
                "name": "support.constant.property-value.qss"
              },
              {
                "match": "\\b(true|false)\\b",
                "name": "constant.language.boolean.qss"
              },
              {
                "include": "#string"
              },
              {
                "include": "#number"
              }
            ]
          }
        ]
      },
      "pseudo-states": {
        "patterns": [
          {
            "match": "\\b(active|adjoins-item|alternate|bottom|checked|closable|closed|default|disabled|editable|edit-focus|enabled|exclusive|first|flat|floatable|focus|has-children|has-siblings|horizontal|hover|indeterminate|last|left|maximized|middle|minimized|movable|no-frame|non-exclusive|off|on|only-one|open|next-selected|pressed|previous-selected|read-only|right|selected|top|unchecked|vertical|window)\\b",
            "name": "keyword.control.qss"
          }
        ]
      },
      "rule-list": {
        "patterns": [
          {
            "begin": "\\{",
            "end": "\\}",
            "patterns": [
              {
                "include": "#comment-block"
              },
              {
                "include": "#properties"
              },
              {
                "include": "#icon-properties"
              }
            ]
          }
        ]
      },
      "selector": {
        "patterns": [
          {
            "include": "#stylable-widgets"
          },
          {
            "include": "#sub-controls"
          },
          {
            "include": "#pseudo-states"
          },
          {
            "include": "#property-selector"
          },
          {
            "include": "#id-selector"
          }
        ]
      },
      "string": {
        "description": "String literal with double or signle quote.",
        "patterns": [
          {
            "begin": "'",
            "end": "'",
            "name": "string.quoted.single.qml"
          },
          {
            "begin": "\"",
            "end": "\"",
            "name": "string.quoted.double.qml"
          }
        ]
      },
      "stylable-widgets": {
        "patterns": [
          {
            "match": "\\b(QAbstractScrollArea|QAbstractItemView|QCheckBox|QColumnView|QComboBox|QDateEdit|QDateTimeEdit|QDialog|QDialogButtonBox|QDockWidget|QDoubleSpinBox|QFrame|QGroupBox|QHeaderView|QLabel|QLineEdit|QListView|QListWidget|QMainWindow|QMenu|QMenuBar|QMessageBox|QProgressBar|QPlainTextEdit|QPushButton|QRadioButton|QScrollBar|QSizeGrip|QSlider|QSpinBox|QSplitter|QStatusBar|QTabBar|QTabWidget|QTableView|QTableWidget|QTextEdit|QTimeEdit|QToolBar|QToolButton|QToolBox|QToolTip|QTreeView|QTreeWidget|QWidget)\\b",
            "name": "entity.name.type.qss"
          }
        ]
      },
      "sub-controls": {
        "patterns": [
          {
            "match": "\\b(add-line|add-page|branch|chunk|close-button|corner|down-arrow|down-button|drop-down|float-button|groove|indicator|handle|icon|item|left-arrow|left-corner|menu-arrow|menu-button|menu-indicator|right-arrow|pane|right-corner|scroller|section|separator|sub-line|sub-page|tab|tab-bar|tear|tearoff|text|title|up-arrow|up-button)\\b",
            "name": "entity.other.inherited-class.qss"
          }
        ]
      }
    },
    "scopeName": "source.qss"
  }
])