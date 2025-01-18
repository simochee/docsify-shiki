/** Shiki Language: bsl */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push([
  {
    "displayName": "1C (Query)",
    "fileTypes": [
      "sdbl",
      "query"
    ],
    "firstLineMatch": "(?i)Выбрать|Select(\\s+Разрешенные|\\s+Allowed)?(\\s+Различные|\\s+Distinct)?(\\s+Первые|\\s+Top)?.*",
    "name": "sdbl",
    "patterns": [
      {
        "match": "(^\\s*//.*$)",
        "name": "comment.line.double-slash.sdbl"
      },
      {
        "begin": "//",
        "end": "$",
        "name": "comment.line.double-slash.sdbl"
      },
      {
        "begin": "\\\"",
        "end": "\\\"(?![\\\"])",
        "name": "string.quoted.double.sdbl",
        "patterns": [
          {
            "match": "\\\"\\\"",
            "name": "constant.character.escape.sdbl"
          },
          {
            "match": "(^\\s*//.*$)",
            "name": "comment.line.double-slash.sdbl"
          }
        ]
      },
      {
        "match": "(?i)(?<=[^\\wа-яё\\.]|^)(Неопределено|Undefined|Истина|True|Ложь|False|NULL)(?=[^\\wа-яё\\.]|$)",
        "name": "constant.language.sdbl"
      },
      {
        "match": "(?<=[^\\wа-яё\\.]|^)(\\d+\\.?\\d*)(?=[^\\wа-яё\\.]|$)",
        "name": "constant.numeric.sdbl"
      },
      {
        "match": "(?i)(?<=[^\\wа-яё\\.]|^)(Выбор|Case|Когда|When|Тогда|Then|Иначе|Else|Конец|End)(?=[^\\wа-яё\\.]|$)",
        "name": "keyword.control.conditional.sdbl"
      },
      {
        "match": "(?i)(?<!КАК\\s|AS\\s)(?<=[^\\wа-яё\\.]|^)(НЕ|NOT|И|AND|ИЛИ|OR|В\\s+ИЕРАРХИИ|IN\\s+HIERARCHY|В|In|Между|Between|Есть(\\s+НЕ)?\\s+NULL|Is(\\s+NOT)?\\s+NULL|Ссылка|Refs|Подобно|Like)(?=[^\\wа-яё\\.]|$)",
        "name": "keyword.operator.logical.sdbl"
      },
      {
        "match": "<=|>=|=|<|>",
        "name": "keyword.operator.comparison.sdbl"
      },
      {
        "match": "(\\+|-|\\*|/|%)",
        "name": "keyword.operator.arithmetic.sdbl"
      },
      {
        "match": "(,|;)",
        "name": "keyword.operator.sdbl"
      },
      {
        "match": "(?i)(?<=[^\\wа-яё\\.]|^)(Выбрать|Select|Разрешенные|Allowed|Различные|Distinct|Первые|Top|Как|As|ПустаяТаблица|EmptyTable|Поместить|Into|Уничтожить|Drop|Из|From|((Левое|Left|Правое|Right|Полное|Full)\\s+(Внешнее\\s+|Outer\\s+)?Соединение|Join)|((Внутреннее|Inner)\\s+Соединение|Join)|Где|Where|(Сгруппировать\\s+По(\\s+Группирующим\\s+Наборам)?)|(Group\\s+By(\\s+Grouping\\s+Set)?)|Имеющие|Having|Объединить(\\s+Все)?|Union(\\s+All)?|(Упорядочить\\s+По)|(Order\\s+By)|Автоупорядочивание|Autoorder|Итоги|Totals|По(\\s+Общие)?|By(\\s+Overall)?|(Только\\s+)?Иерархия|(Only\\s+)?Hierarchy|Периодами|Periods|Индексировать|Index|Выразить|Cast|Возр|Asc|Убыв|Desc|Для\\s+Изменения|(For\\s+Update(\\s+Of)?)|Спецсимвол|Escape|СгруппированоПо|GroupedBy)(?=[^\\wа-яё\\.]|$)",
        "name": "keyword.control.sdbl"
      },
      {
        "comment": "Функции языка запросов",
        "match": "(?i)(?<=[^\\wа-яё\\.]|^)(Значение|Value|ДатаВремя|DateTime|Тип|Type)(?=\\()",
        "name": "support.function.sdbl"
      },
      {
        "comment": "Функции работы со строками",
        "match": "(?i)(?<=[^\\wа-яё\\.]|^)(Подстрока|Substring|НРег|Lower|ВРег|Upper|Лев|Left|Прав|Right|ДлинаСтроки|StringLength|СтрНайти|StrFind|СтрЗаменить|StrReplace|СокрЛП|TrimAll|СокрЛ|TrimL|СокрП|TrimR)(?=\\()",
        "name": "support.function.sdbl"
      },
      {
        "comment": "Функции работы с датами",
        "match": "(?i)(?<=[^\\wа-яё\\.]|^)(Год|Year|Квартал|Quarter|Месяц|Month|ДеньГода|DayOfYear|День|Day|Неделя|Week|ДеньНедели|Weekday|Час|Hour|Минута|Minute|Секунда|Second|НачалоПериода|BeginOfPeriod|КонецПериода|EndOfPeriod|ДобавитьКДате|DateAdd|РазностьДат|DateDiff|Полугодие|HalfYear|Декада|TenDays)(?=\\()",
        "name": "support.function.sdbl"
      },
      {
        "comment": "Функции работы с числами",
        "match": "(?i)(?<=[^\\wа-яё\\.]|^)(ACOS|COS|ASIN|SIN|ATAN|TAN|EXP|POW|LOG|LOG10|Цел|Int|Окр|Round|SQRT)(?=\\()",
        "name": "support.function.sdbl"
      },
      {
        "comment": "Агрегатные функции",
        "match": "(?i)(?<=[^\\wа-яё\\.]|^)(Сумма|Sum|Среднее|Avg|Минимум|Min|Максимум|Max|Количество|Count)(?=\\()",
        "name": "support.function.sdbl"
      },
      {
        "comment": "Прочие функции",
        "match": "(?i)(?<=[^\\wа-яё\\.]|^)(ЕстьNULL|IsNULL|Представление|Presentation|ПредставлениеСсылки|RefPresentation|ТипЗначения|ValueType|АвтономерЗаписи|RecordAutoNumber|РазмерХранимыхДанных|StoredDataSize|УникальныйИдентификатор|UUID)(?=\\()",
        "name": "support.function.sdbl"
      },
      {
        "match": "(?i)(?<=[^\\wа-яё\\.])(Число|Number|Строка|String|Дата|Date|Булево|Boolean)(?=[^\\wа-яё\\.]|$)",
        "name": "support.type.sdbl"
      },
      {
        "match": "(&[\\wа-яё]+)",
        "name": "variable.parameter.sdbl"
      }
    ],
    "scopeName": "source.sdbl",
    "aliases": [
      "1c-query"
    ]
  },
  {
    "displayName": "1C (Enterprise)",
    "fileTypes": [
      "bsl",
      "os"
    ],
    "name": "bsl",
    "patterns": [
      {
        "include": "#basic"
      },
      {
        "include": "#miscellaneous"
      },
      {
        "begin": "(?i:(?<=[^\\wа-яё\\.]|^)(Процедура|Procedure|Функция|Function)\\s+([a-zа-яё0-9_]+)\\s*(\\())",
        "beginCaptures": {
          "1": {
            "name": "storage.type.bsl"
          },
          "2": {
            "name": "entity.name.function.bsl"
          },
          "3": {
            "name": "punctuation.bracket.begin.bsl"
          }
        },
        "comment": "Proc and function definition",
        "end": "(?i:(\\))\\s*((Экспорт|Export)(?=[^\\wа-яё\\.]|$))?)",
        "endCaptures": {
          "1": {
            "name": "punctuation.bracket.end.bsl"
          },
          "2": {
            "name": "storage.modifier.bsl"
          }
        },
        "patterns": [
          {
            "include": "#annotations"
          },
          {
            "include": "#basic"
          },
          {
            "match": "(=)",
            "name": "keyword.operator.assignment.bsl"
          },
          {
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(Знач|Val)(?=[^\\wа-яё\\.]|$))",
            "name": "storage.modifier.bsl"
          },
          {
            "match": "(?<=[^\\wа-яё\\.]|^)((?<==)(?i)[a-zа-яё0-9_]+)(?=[^\\wа-яё\\.]|$)",
            "name": "invalid.illegal.bsl"
          },
          {
            "match": "(?<=[^\\wа-яё\\.]|^)((?<==\\s)\\s*(?i)[a-zа-яё0-9_]+)(?=[^\\wа-яё\\.]|$)",
            "name": "invalid.illegal.bsl"
          },
          {
            "match": "(?i:[a-zа-яё0-9_]+)",
            "name": "variable.parameter.bsl"
          }
        ]
      },
      {
        "begin": "(?i:(?<=[^\\wа-яё\\.]|^)(Перем|Var)\\s+([a-zа-яё0-9_]+)\\s*)",
        "beginCaptures": {
          "1": {
            "name": "storage.type.var.bsl"
          },
          "2": {
            "name": "variable.bsl"
          }
        },
        "comment": "Define of variable",
        "end": "(;)",
        "endCaptures": {
          "1": {
            "name": "keyword.operator.bsl"
          }
        },
        "patterns": [
          {
            "match": "(,)",
            "name": "keyword.operator.bsl"
          },
          {
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(Экспорт|Export)(?=[^\\wа-яё\\.]|$))",
            "name": "storage.modifier.bsl"
          },
          {
            "match": "(?i:[a-zа-яё0-9_]+)",
            "name": "variable.bsl"
          }
        ]
      },
      {
        "begin": "(?i:(?<=;|^)\\s*(Если|If))",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.conditional.bsl"
          }
        },
        "comment": "Conditional",
        "end": "(?i:(Тогда|Then))",
        "endCaptures": {
          "1": {
            "name": "keyword.control.conditional.bsl"
          }
        },
        "name": "meta.conditional.bsl",
        "patterns": [
          {
            "include": "#basic"
          },
          {
            "include": "#miscellaneous"
          }
        ]
      },
      {
        "begin": "(?i:(?<=;|^)\\s*([\\wа-яё]+))\\s*(=)",
        "beginCaptures": {
          "1": {
            "name": "variable.assignment.bsl"
          },
          "2": {
            "name": "keyword.operator.assignment.bsl"
          }
        },
        "comment": "Variable assignment",
        "end": "(?i:(?=(;|Иначе|Конец|Els|End)))",
        "name": "meta.var-single-variable.bsl",
        "patterns": [
          {
            "include": "#basic"
          },
          {
            "include": "#miscellaneous"
          }
        ]
      },
      {
        "match": "(?i:(?<=[^\\wа-яё\\.]|^)(КонецПроцедуры|EndProcedure|КонецФункции|EndFunction)(?=[^\\wа-яё\\.]|$))",
        "name": "storage.type.bsl"
      },
      {
        "match": "(?i)#(Использовать|Use)(?=[^\\wа-яё\\.]|$)",
        "name": "keyword.control.import.bsl"
      },
      {
        "match": "(?i)#native",
        "name": "keyword.control.native.bsl"
      },
      {
        "match": "(?i:(?<=[^\\wа-яё\\.]|^)(Прервать|Break|Продолжить|Continue|Возврат|Return)(?=[^\\wа-яё\\.]|$))",
        "name": "keyword.control.bsl"
      },
      {
        "match": "(?i:(?<=[^\\wа-яё\\.]|^)(Если|If|Иначе|Else|ИначеЕсли|ElsIf|Тогда|Then|КонецЕсли|EndIf)(?=[^\\wа-яё\\.]|$))",
        "name": "keyword.control.conditional.bsl"
      },
      {
        "match": "(?i:(?<=[^\\wа-яё\\.]|^)(Попытка|Try|Исключение|Except|КонецПопытки|EndTry|ВызватьИсключение|Raise)(?=[^\\wа-яё\\.]|$))",
        "name": "keyword.control.exception.bsl"
      },
      {
        "match": "(?i:(?<=[^\\wа-яё\\.]|^)(Пока|While|(Для|For)(\\s+(Каждого|Each))?|Из|In|По|To|Цикл|Do|КонецЦикла|EndDo)(?=[^\\wа-яё\\.]|$))",
        "name": "keyword.control.repeat.bsl"
      },
      {
        "match": "(?i:&(НаКлиенте((НаСервере(БезКонтекста)?)?)|AtClient((AtServer(NoContext)?)?)|НаСервере(БезКонтекста)?|AtServer(NoContext)?))",
        "name": "storage.modifier.directive.bsl"
      },
      {
        "include": "#annotations"
      },
      {
        "match": "(?i:#(Если|If|ИначеЕсли|ElsIf|Иначе|Else|КонецЕсли|EndIf).*(Тогда|Then)?)",
        "name": "keyword.other.preprocessor.bsl"
      },
      {
        "begin": "(?i)(#(Область|Region))(\\s+([\\wа-яё]+))?",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.section.bsl"
          },
          "4": {
            "name": "entity.name.section.bsl"
          }
        },
        "comment": "Region start",
        "end": "$"
      },
      {
        "comment": "Region end",
        "match": "(?i)#(КонецОбласти|EndRegion)",
        "name": "keyword.other.section.bsl"
      },
      {
        "comment": "Delete start",
        "match": "(?i)#(Удаление|Delete)",
        "name": "keyword.other.section.bsl"
      },
      {
        "comment": "Delete end",
        "match": "(?i)#(КонецУдаления|EndDelete)",
        "name": "keyword.other.section.bsl"
      },
      {
        "comment": "Inster start",
        "match": "(?i)#(Вставка|Insert)",
        "name": "keyword.other.section.bsl"
      },
      {
        "comment": "Insert end",
        "match": "(?i)#(КонецВставки|EndInsert)",
        "name": "keyword.other.section.bsl"
      }
    ],
    "repository": {
      "annotations": {
        "patterns": [
          {
            "begin": "(?i)(&([a-zа-яё0-9_]+))\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "storage.type.annotation.bsl"
              },
              "3": {
                "name": "punctuation.bracket.begin.bsl"
              }
            },
            "comment": "Annotations with parameters",
            "end": "(\\))",
            "endCaptures": {
              "1": {
                "name": "punctuation.bracket.end.bsl"
              }
            },
            "patterns": [
              {
                "include": "#basic"
              },
              {
                "match": "(=)",
                "name": "keyword.operator.assignment.bsl"
              },
              {
                "match": "(?<=[^\\wа-яё\\.]|^)((?<==)(?i)[a-zа-яё0-9_]+)(?=[^\\wа-яё\\.]|$)",
                "name": "invalid.illegal.bsl"
              },
              {
                "match": "(?<=[^\\wа-яё\\.]|^)((?<==\\s)\\s*(?i)[a-zа-яё0-9_]+)(?=[^\\wа-яё\\.]|$)",
                "name": "invalid.illegal.bsl"
              },
              {
                "match": "(?i)[a-zа-яё0-9_]+",
                "name": "variable.annotation.bsl"
              }
            ]
          },
          {
            "comment": "Annotations without parameters",
            "match": "(?i)(&([a-zа-яё0-9_]+))",
            "name": "storage.type.annotation.bsl"
          }
        ]
      },
      "basic": {
        "patterns": [
          {
            "begin": "//",
            "end": "$",
            "name": "comment.line.double-slash.bsl"
          },
          {
            "begin": "\\\"",
            "end": "\\\"(?![\\\"])",
            "name": "string.quoted.double.bsl",
            "patterns": [
              {
                "include": "#query"
              },
              {
                "match": "\\\"\\\"",
                "name": "constant.character.escape.bsl"
              },
              {
                "match": "(^\\s*//.*$)",
                "name": "comment.line.double-slash.bsl"
              }
            ]
          },
          {
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(Неопределено|Undefined|Истина|True|Ложь|False|NULL)(?=[^\\wа-яё\\.]|$))",
            "name": "constant.language.bsl"
          },
          {
            "match": "(?<=[^\\wа-яё\\.]|^)(\\d+\\.?\\d*)(?=[^\\wа-яё\\.]|$)",
            "name": "constant.numeric.bsl"
          },
          {
            "match": "\\'((\\d{4}[^\\d\\']*\\d{2}[^\\d\\']*\\d{2})([^\\d\\']*\\d{2}[^\\d\\']*\\d{2}([^\\d\\']*\\d{2})?)?)\\'",
            "name": "constant.other.date.bsl"
          },
          {
            "match": "(,)",
            "name": "keyword.operator.bsl"
          },
          {
            "match": "(\\()",
            "name": "punctuation.bracket.begin.bsl"
          },
          {
            "match": "(\\))",
            "name": "punctuation.bracket.end.bsl"
          }
        ]
      },
      "miscellaneous": {
        "patterns": [
          {
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(НЕ|NOT|И|AND|ИЛИ|OR)(?=[^\\wа-яё\\.]|$))",
            "name": "keyword.operator.logical.bsl"
          },
          {
            "match": "<=|>=|=|<|>",
            "name": "keyword.operator.comparison.bsl"
          },
          {
            "match": "(\\+|-|\\*|/|%)",
            "name": "keyword.operator.arithmetic.bsl"
          },
          {
            "match": "(;|\\?)",
            "name": "keyword.operator.bsl"
          },
          {
            "comment": "Functions w/o brackets",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(Новый|New)(?=[^\\wа-яё\\.]|$))",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - функции работы со значениями типа Строка",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(СтрДлина|StrLen|СокрЛ|TrimL|СокрП|TrimR|СокрЛП|TrimAll|Лев|Left|Прав|Right|Сред|Mid|СтрНайти|StrFind|ВРег|Upper|НРег|Lower|ТРег|Title|Символ|Char|КодСимвола|CharCode|ПустаяСтрока|IsBlankString|СтрЗаменить|StrReplace|СтрЧислоСтрок|StrLineCount|СтрПолучитьСтроку|StrGetLine|СтрЧислоВхождений|StrOccurrenceCount|СтрСравнить|StrCompare|СтрНачинаетсяС|StrStartWith|СтрЗаканчиваетсяНа|StrEndsWith|СтрРазделить|StrSplit|СтрСоединить|StrConcat)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - функции работы со значениями типа Число",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(Цел|Int|Окр|Round|ACos|ASin|ATan|Cos|Exp|Log|Log10|Pow|Sin|Sqrt|Tan)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - функции работы со значениями типа Дата",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(Год|Year|Месяц|Month|День|Day|Час|Hour|Минута|Minute|Секунда|Second|НачалоГода|BegOfYear|НачалоДня|BegOfDay|НачалоКвартала|BegOfQuarter|НачалоМесяца|BegOfMonth|НачалоМинуты|BegOfMinute|НачалоНедели|BegOfWeek|НачалоЧаса|BegOfHour|КонецГода|EndOfYear|КонецДня|EndOfDay|КонецКвартала|EndOfQuarter|КонецМесяца|EndOfMonth|КонецМинуты|EndOfMinute|КонецНедели|EndOfWeek|КонецЧаса|EndOfHour|НеделяГода|WeekOfYear|ДеньГода|DayOfYear|ДеньНедели|WeekDay|ТекущаяДата|CurrentDate|ДобавитьМесяц|AddMonth)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - функции работы со значениями типа Тип",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(Тип|Type|ТипЗнч|TypeOf)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - функции преобразования значений",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(Булево|Boolean|Число|Number|Строка|String|Дата|Date)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - процедуры и функции интерактивной работы",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(ПоказатьВопрос|ShowQueryBox|Вопрос|DoQueryBox|ПоказатьПредупреждение|ShowMessageBox|Предупреждение|DoMessageBox|Сообщить|Message|ОчиститьСообщения|ClearMessages|ОповеститьОбИзменении|NotifyChanged|Состояние|Status|Сигнал|Beep|ПоказатьЗначение|ShowValue|ОткрытьЗначение|OpenValue|Оповестить|Notify|ОбработкаПрерыванияПользователя|UserInterruptProcessing|ОткрытьСодержаниеСправки|OpenHelpContent|ОткрытьИндексСправки|OpenHelpIndex|ОткрытьСправку|OpenHelp|ПоказатьИнформациюОбОшибке|ShowErrorInfo|КраткоеПредставлениеОшибки|BriefErrorDescription|ПодробноеПредставлениеОшибки|DetailErrorDescription|ПолучитьФорму|GetForm|ЗакрытьСправку|CloseHelp|ПоказатьОповещениеПользователя|ShowUserNotification|ОткрытьФорму|OpenForm|ОткрытьФормуМодально|OpenFormModal|АктивноеОкно|ActiveWindow|ВыполнитьОбработкуОповещения|ExecuteNotifyProcessing)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - функции для вызова диалога ввода данных",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(ПоказатьВводЗначения|ShowInputValue|ВвестиЗначение|InputValue|ПоказатьВводЧисла|ShowInputNumber|ВвестиЧисло|InputNumber|ПоказатьВводСтроки|ShowInputString|ВвестиСтроку|InputString|ПоказатьВводДаты|ShowInputDate|ВвестиДату|InputDate)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - функции форматирования",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(Формат|Format|ЧислоПрописью|NumberInWords|НСтр|NStr|ПредставлениеПериода|PeriodPresentation|СтрШаблон|StrTemplate)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - функции обращения к конфигурации",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(ПолучитьОбщийМакет|GetCommonTemplate|ПолучитьОбщуюФорму|GetCommonForm|ПредопределенноеЗначение|PredefinedValue|ПолучитьПолноеИмяПредопределенногоЗначения|GetPredefinedValueFullName)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - процедуры и функции сеанса работы",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(ПолучитьЗаголовокСистемы|GetCaption|ПолучитьСкоростьКлиентскогоСоединения|GetClientConnectionSpeed|ПодключитьОбработчикОжидания|AttachIdleHandler|УстановитьЗаголовокСистемы|SetCaption|ОтключитьОбработчикОжидания|DetachIdleHandler|ИмяКомпьютера|ComputerName|ЗавершитьРаботуСистемы|Exit|ИмяПользователя|UserName|ПрекратитьРаботуСистемы|Terminate|ПолноеИмяПользователя|UserFullName|ЗаблокироватьРаботуПользователя|LockApplication|КаталогПрограммы|BinDir|КаталогВременныхФайлов|TempFilesDir|ПравоДоступа|AccessRight|РольДоступна|IsInRole|ТекущийЯзык|CurrentLanguage|ТекущийКодЛокализации|CurrentLocaleCode|СтрокаСоединенияИнформационнойБазы|InfoBaseConnectionString|ПодключитьОбработчикОповещения|AttachNotificationHandler|ОтключитьОбработчикОповещения|DetachNotificationHandler|ПолучитьСообщенияПользователю|GetUserMessages|ПараметрыДоступа|AccessParameters|ПредставлениеПриложения|ApplicationPresentation|ТекущийЯзыкСистемы|CurrentSystemLanguage|ЗапуститьСистему|RunSystem|ТекущийРежимЗапуска|CurrentRunMode|УстановитьЧасовойПоясСеанса|SetSessionTimeZone|ЧасовойПоясСеанса|SessionTimeZone|ТекущаяДатаСеанса|CurrentSessionDate|УстановитьКраткийЗаголовокПриложения|SetShortApplicationCaption|ПолучитьКраткийЗаголовокПриложения|GetShortApplicationCaption|ПредставлениеПрава|RightPresentation|ВыполнитьПроверкуПравДоступа|VerifyAccessRights|РабочийКаталогДанныхПользователя|UserDataWorkDir|КаталогДокументов|DocumentsDir|ПолучитьИнформациюЭкрановКлиента|GetClientDisplaysInformation|ТекущийВариантОсновногоШрифтаКлиентскогоПриложения|ClientApplicationBaseFontCurrentVariant|ТекущийВариантИнтерфейсаКлиентскогоПриложения|ClientApplicationInterfaceCurrentVariant|УстановитьЗаголовокКлиентскогоПриложения|SetClientApplicationCaption|ПолучитьЗаголовокКлиентскогоПриложения|GetClientApplicationCaption|НачатьПолучениеКаталогаВременныхФайлов|BeginGettingTempFilesDir|НачатьПолучениеКаталогаДокументов|BeginGettingDocumentsDir|НачатьПолучениеРабочегоКаталогаДанныхПользователя|BeginGettingUserDataWorkDir|ПодключитьОбработчикЗапросаНастроекКлиентаЛицензирования|AttachLicensingClientParametersRequestHandler|ОтключитьОбработчикЗапросаНастроекКлиентаЛицензирования|DetachLicensingClientParametersRequestHandler|КаталогБиблиотекиМобильногоУстройства|MobileDeviceLibraryDir)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - процедуры и функции сохранения значений",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(ЗначениеВСтрокуВнутр|ValueToStringInternal|ЗначениеИзСтрокиВнутр|ValueFromStringInternal|ЗначениеВФайл|ValueToFile|ЗначениеИзФайла|ValueFromFile)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - Процедуры и функции работы с операционной системой",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(КомандаСистемы|System|ЗапуститьПриложение|RunApp|ПолучитьCOMОбъект|GetCOMObject|ПользователиОС|OSUsers|НачатьЗапускПриложения|BeginRunningApplication)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - Процедуры и функции работы с внешними компонентами",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(ПодключитьВнешнююКомпоненту|AttachAddIn|НачатьУстановкуВнешнейКомпоненты|BeginInstallAddIn|УстановитьВнешнююКомпоненту|InstallAddIn|НачатьПодключениеВнешнейКомпоненты|BeginAttachingAddIn)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - Процедуры и функции работы с файлами",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(КопироватьФайл|FileCopy|ПереместитьФайл|MoveFile|УдалитьФайлы|DeleteFiles|НайтиФайлы|FindFiles|СоздатьКаталог|CreateDirectory|ПолучитьИмяВременногоФайла|GetTempFileName|РазделитьФайл|SplitFile|ОбъединитьФайлы|MergeFiles|ПолучитьФайл|GetFile|НачатьПомещениеФайла|BeginPutFile|ПоместитьФайл|PutFile|ЭтоАдресВременногоХранилища|IsTempStorageURL|УдалитьИзВременногоХранилища|DeleteFromTempStorage|ПолучитьИзВременногоХранилища|GetFromTempStorage|ПоместитьВоВременноеХранилище|PutToTempStorage|ПодключитьРасширениеРаботыСФайлами|AttachFileSystemExtension|НачатьУстановкуРасширенияРаботыСФайлами|BeginInstallFileSystemExtension|УстановитьРасширениеРаботыСФайлами|InstallFileSystemExtension|ПолучитьФайлы|GetFiles|ПоместитьФайлы|PutFiles|ЗапроситьРазрешениеПользователя|RequestUserPermission|ПолучитьМаскуВсеФайлы|GetAllFilesMask|ПолучитьМаскуВсеФайлыКлиента|GetClientAllFilesMask|ПолучитьМаскуВсеФайлыСервера|GetServerAllFilesMask|ПолучитьРазделительПути|GetPathSeparator|ПолучитьРазделительПутиКлиента|GetClientPathSeparator|ПолучитьРазделительПутиСервера|GetServerPathSeparator|НачатьПодключениеРасширенияРаботыСФайлами|BeginAttachingFileSystemExtension|НачатьЗапросРазрешенияПользователя|BeginRequestingUserPermission|НачатьПоискФайлов|BeginFindingFiles|НачатьСозданиеКаталога|BeginCreatingDirectory|НачатьКопированиеФайла|BeginCopyingFile|НачатьПеремещениеФайла|BeginMovingFile|НачатьУдалениеФайлов|BeginDeletingFiles|НачатьПолучениеФайлов|BeginGettingFiles|НачатьПомещениеФайлов|BeginPuttingFiles|НачатьСозданиеДвоичныхДанныхИзФайла|BeginCreateBinaryDataFromFile)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - Процедуры и функции работы с информационной базой",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(НачатьТранзакцию|BeginTransaction|ЗафиксироватьТранзакцию|CommitTransaction|ОтменитьТранзакцию|RollbackTransaction|УстановитьМонопольныйРежим|SetExclusiveMode|МонопольныйРежим|ExclusiveMode|ПолучитьОперативнуюОтметкуВремени|GetRealTimeTimestamp|ПолучитьСоединенияИнформационнойБазы|GetInfoBaseConnections|НомерСоединенияИнформационнойБазы|InfoBaseConnectionNumber|КонфигурацияИзменена|ConfigurationChanged|КонфигурацияБазыДанныхИзмененаДинамически|DataBaseConfigurationChangedDynamically|УстановитьВремяОжиданияБлокировкиДанных|SetLockWaitTime|ОбновитьНумерациюОбъектов|RefreshObjectsNumbering|ПолучитьВремяОжиданияБлокировкиДанных|GetLockWaitTime|КодЛокализацииИнформационнойБазы|InfoBaseLocaleCode|УстановитьМинимальнуюДлинуПаролейПользователей|SetUserPasswordMinLength|ПолучитьМинимальнуюДлинуПаролейПользователей|GetUserPasswordMinLength|ИнициализироватьПредопределенныеДанные|InitializePredefinedData|УдалитьДанныеИнформационнойБазы|EraseInfoBaseData|УстановитьПроверкуСложностиПаролейПользователей|SetUserPasswordStrengthCheck|ПолучитьПроверкуСложностиПаролейПользователей|GetUserPasswordStrengthCheck|ПолучитьСтруктуруХраненияБазыДанных|GetDBStorageStructureInfo|УстановитьПривилегированныйРежим|SetPrivilegedMode|ПривилегированныйРежим|PrivilegedMode|ТранзакцияАктивна|TransactionActive|НеобходимостьЗавершенияСоединения|ConnectionStopRequest|НомерСеансаИнформационнойБазы|InfoBaseSessionNumber|ПолучитьСеансыИнформационнойБазы|GetInfoBaseSessions|ЗаблокироватьДанныеДляРедактирования|LockDataForEdit|УстановитьСоединениеСВнешнимИсточникомДанных|ConnectExternalDataSource|РазблокироватьДанныеДляРедактирования|UnlockDataForEdit|РазорватьСоединениеСВнешнимИсточникомДанных|DisconnectExternalDataSource|ПолучитьБлокировкуСеансов|GetSessionsLock|УстановитьБлокировкуСеансов|SetSessionsLock|ОбновитьПовторноИспользуемыеЗначения|RefreshReusableValues|УстановитьБезопасныйРежим|SetSafeMode|БезопасныйРежим|SafeMode|ПолучитьДанныеВыбора|GetChoiceData|УстановитьЧасовойПоясИнформационнойБазы|SetInfoBaseTimeZone|ПолучитьЧасовойПоясИнформационнойБазы|GetInfoBaseTimeZone|ПолучитьОбновлениеКонфигурацииБазыДанных|GetDataBaseConfigurationUpdate|УстановитьБезопасныйРежимРазделенияДанных|SetDataSeparationSafeMode|БезопасныйРежимРазделенияДанных|DataSeparationSafeMode|УстановитьВремяЗасыпанияПассивногоСеанса|SetPassiveSessionHibernateTime|ПолучитьВремяЗасыпанияПассивногоСеанса|GetPassiveSessionHibernateTime|УстановитьВремяЗавершенияСпящегоСеанса|SetHibernateSessionTerminateTime|ПолучитьВремяЗавершенияСпящегоСеанса|GetHibernateSessionTerminateTime|ПолучитьТекущийСеансИнформационнойБазы|GetCurrentInfoBaseSession|ПолучитьИдентификаторКонфигурации|GetConfigurationID|УстановитьНастройкиКлиентаЛицензирования|SetLicensingClientParameters|ПолучитьИмяКлиентаЛицензирования|GetLicensingClientName|ПолучитьДополнительныйПараметрКлиентаЛицензирования|GetLicensingClientAdditionalParameter|ПолучитьОтключениеБезопасногоРежима|GetSafeModeDisabled|УстановитьОтключениеБезопасногоРежима|SetSafeModeDisabled)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - Процедуры и функции работы с данными информационной базы",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(НайтиПомеченныеНаУдаление|FindMarkedForDeletion|НайтиПоСсылкам|FindByRef|УдалитьОбъекты|DeleteObjects|УстановитьОбновлениеПредопределенныхДанныхИнформационнойБазы|SetInfoBasePredefinedDataUpdate|ПолучитьОбновлениеПредопределенныхДанныхИнформационнойБазы|GetInfoBasePredefinedData)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - Процедуры и функции работы с XML",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(XMLСтрока|XMLString|XMLЗначение|XMLValue|XMLТип|XMLType|XMLТипЗнч|XMLTypeOf|ИзXMLТипа|FromXMLType|ВозможностьЧтенияXML|CanReadXML|ПолучитьXMLТип|GetXMLType|ПрочитатьXML|ReadXML|ЗаписатьXML|WriteXML|НайтиНедопустимыеСимволыXML|FindDisallowedXMLCharacters|ИмпортМоделиXDTO|ImportXDTOModel|СоздатьФабрикуXDTO|CreateXDTOFactory)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - Процедуры и функции работы с JSON",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(ЗаписатьJSON|WriteJSON|ПрочитатьJSON|ReadJSON|ПрочитатьДатуJSON|ReadJSONDate|ЗаписатьДатуJSON|WriteJSONDate)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - Процедуры и функции работы с журналом регистрации",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(ЗаписьЖурналаРегистрации|WriteLogEvent|ПолучитьИспользованиеЖурналаРегистрации|GetEventLogUsing|УстановитьИспользованиеЖурналаРегистрации|SetEventLogUsing|ПредставлениеСобытияЖурналаРегистрации|EventLogEventPresentation|ВыгрузитьЖурналРегистрации|UnloadEventLog|ПолучитьЗначенияОтбораЖурналаРегистрации|GetEventLogFilterValues|УстановитьИспользованиеСобытияЖурналаРегистрации|SetEventLogEventUse|ПолучитьИспользованиеСобытияЖурналаРегистрации|GetEventLogEventUse|СкопироватьЖурналРегистрации|CopyEventLog|ОчиститьЖурналРегистрации|ClearEventLog)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - Процедуры и функции работы с универсальными объектами",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(ЗначениеВДанныеФормы|ValueToFormData|ДанныеФормыВЗначение|FormDataToValue|КопироватьДанныеФормы|CopyFormData|УстановитьСоответствиеОбъектаИФормы|SetObjectAndFormConformity|ПолучитьСоответствиеОбъектаИФормы|GetObjectAndFormConformity)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - Процедуры и функции работы с функциональными опциями",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(ПолучитьФункциональнуюОпцию|GetFunctionalOption|ПолучитьФункциональнуюОпциюИнтерфейса|GetInterfaceFunctionalOption|УстановитьПараметрыФункциональныхОпцийИнтерфейса|SetInterfaceFunctionalOptionParameters|ПолучитьПараметрыФункциональныхОпцийИнтерфейса|GetInterfaceFunctionalOptionParameters|ОбновитьИнтерфейс|RefreshInterface)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - Процедуры и функции работы с криптографией",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(УстановитьРасширениеРаботыСКриптографией|InstallCryptoExtension|НачатьУстановкуРасширенияРаботыСКриптографией|BeginInstallCryptoExtension|ПодключитьРасширениеРаботыСКриптографией|AttachCryptoExtension|НачатьПодключениеРасширенияРаботыСКриптографией|BeginAttachingCryptoExtension)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - Процедуры и функции работы со стандартным интерфейсом OData",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(УстановитьСоставСтандартногоИнтерфейсаOData|SetStandardODataInterfaceContent|ПолучитьСоставСтандартногоИнтерфейсаOData|GetStandardODataInterfaceContent)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - Процедуры и функции работы с двоичными данными",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(СоединитьБуферыДвоичныхДанных|ConcatBinaryDataBuffers)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - Прочие процедуры и функции",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(Мин|Min|Макс|Max|ОписаниеОшибки|ErrorDescription|Вычислить|Eval|ИнформацияОбОшибке|ErrorInfo|Base64Значение|Base64Value|Base64Строка|Base64String|ЗаполнитьЗначенияСвойств|FillPropertyValues|ЗначениеЗаполнено|ValueIsFilled|ПолучитьПредставленияНавигационныхСсылок|GetURLsPresentations|НайтиОкноПоНавигационнойСсылке|FindWindowByURL|ПолучитьОкна|GetWindows|ПерейтиПоНавигационнойСсылке|GotoURL|ПолучитьНавигационнуюСсылку|GetURL|ПолучитьДопустимыеКодыЛокализации|GetAvailableLocaleCodes|ПолучитьНавигационнуюСсылкуИнформационнойБазы|GetInfoBaseURL|ПредставлениеКодаЛокализации|LocaleCodePresentation|ПолучитьДопустимыеЧасовыеПояса|GetAvailableTimeZones|ПредставлениеЧасовогоПояса|TimeZonePresentation|ТекущаяУниверсальнаяДата|CurrentUniversalDate|ТекущаяУниверсальнаяДатаВМиллисекундах|CurrentUniversalDateInMilliseconds|МестноеВремя|ToLocalTime|УниверсальноеВремя|ToUniversalTime|ЧасовойПояс|TimeZone|СмещениеЛетнегоВремени|DaylightTimeOffset|СмещениеСтандартногоВремени|StandardTimeOffset|КодироватьСтроку|EncodeString|РаскодироватьСтроку|DecodeString|Найти|Find|ПродолжитьВызов|ProceedWithCall)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - События приложения и сеанса",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(ПередНачаломРаботыСистемы|BeforeStart|ПриНачалеРаботыСистемы|OnStart|ПередЗавершениемРаботыСистемы|BeforeExit|ПриЗавершенииРаботыСистемы|OnExit|ОбработкаВнешнегоСобытия|ExternEventProcessing|УстановкаПараметровСеанса|SessionParametersSetting|ПриИзмененииПараметровЭкрана|OnChangeDisplaySettings)\\s*(?=\\())",
            "name": "support.function.bsl"
          },
          {
            "comment": "Глобальный контекст - Свойства (классы)",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(WSСсылки|WSReferences|БиблиотекаКартинок|PictureLib|БиблиотекаМакетовОформленияКомпоновкиДанных|DataCompositionAppearanceTemplateLib|БиблиотекаСтилей|StyleLib|БизнесПроцессы|BusinessProcesses|ВнешниеИсточникиДанных|ExternalDataSources|ВнешниеОбработки|ExternalDataProcessors|ВнешниеОтчеты|ExternalReports|Документы|Documents|ДоставляемыеУведомления|DeliverableNotifications|ЖурналыДокументов|DocumentJournals|Задачи|Tasks|ИнформацияОбИнтернетСоединении|InternetConnectionInformation|ИспользованиеРабочейДаты|WorkingDateUse|ИсторияРаботыПользователя|UserWorkHistory|Константы|Constants|КритерииОтбора|FilterCriteria|Метаданные|Metadata|Обработки|DataProcessors|ОтправкаДоставляемыхУведомлений|DeliverableNotificationSend|Отчеты|Reports|ПараметрыСеанса|SessionParameters|Перечисления|Enums|ПланыВидовРасчета|ChartsOfCalculationTypes|ПланыВидовХарактеристик|ChartsOfCharacteristicTypes|ПланыОбмена|ExchangePlans|ПланыСчетов|ChartsOfAccounts|ПолнотекстовыйПоиск|FullTextSearch|ПользователиИнформационнойБазы|InfoBaseUsers|Последовательности|Sequences|РасширенияКонфигурации|ConfigurationExtensions|РегистрыБухгалтерии|AccountingRegisters|РегистрыНакопления|AccumulationRegisters|РегистрыРасчета|CalculationRegisters|РегистрыСведений|InformationRegisters|РегламентныеЗадания|ScheduledJobs|СериализаторXDTO|XDTOSerializer|Справочники|Catalogs|СредстваГеопозиционирования|LocationTools|СредстваКриптографии|CryptoToolsManager|СредстваМультимедиа|MultimediaTools|СредстваОтображенияРекламы|AdvertisingPresentationTools|СредстваПочты|MailTools|СредстваТелефонии|TelephonyTools|ФабрикаXDTO|XDTOFactory|ФайловыеПотоки|FileStreams|ФоновыеЗадания|BackgroundJobs|ХранилищаНастроек|SettingsStorages|ВстроенныеПокупки|InAppPurchases|ОтображениеРекламы|AdRepresentation|ПанельЗадачОС|OSTaskbar|ПроверкаВстроенныхПокупок|InAppPurchasesValidation)(?=[^\\wа-яё]|$))",
            "name": "support.class.bsl"
          },
          {
            "comment": "Глобальный контекст - Свойства (переменные)",
            "match": "(?i:(?<=[^\\wа-яё\\.]|^)(ГлавныйИнтерфейс|MainInterface|ГлавныйСтиль|MainStyle|ПараметрЗапуска|LaunchParameter|РабочаяДата|WorkingDate|ХранилищеВариантовОтчетов|ReportsVariantsStorage|ХранилищеНастроекДанныхФорм|FormDataSettingsStorage|ХранилищеОбщихНастроек|CommonSettingsStorage|ХранилищеПользовательскихНастроекДинамическихСписков|DynamicListsUserSettingsStorage|ХранилищеПользовательскихНастроекОтчетов|ReportsUserSettingsStorage|ХранилищеСистемныхНастроек|SystemSettingsStorage)(?=[^\\wа-яё]|$))",
            "name": "support.variable.bsl"
          }
        ]
      },
      "query": {
        "begin": "(?i)(?<=[^\\wа-яё\\.]|^)(Выбрать|Select(\\s+Разрешенные|\\s+Allowed)?(\\s+Различные|\\s+Distinct)?(\\s+Первые|\\s+Top)?)(?=[^\\wа-яё\\.]|$)",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.sdbl"
          }
        },
        "end": "(?=\\\"[^\\\"])",
        "patterns": [
          {
            "begin": "^\\s*//",
            "end": "$",
            "name": "comment.line.double-slash.bsl"
          },
          {
            "match": "(//((\\\"\\\")|[^\\\"])*)",
            "name": "comment.line.double-slash.sdbl"
          },
          {
            "match": "\\\"\\\"[^\"]*\\\"\\\"",
            "name": "string.quoted.double.sdbl"
          },
          {
            "include": "source.sdbl"
          }
        ]
      }
    },
    "scopeName": "source.bsl",
    "embeddedLangs": [
      "sdbl"
    ],
    "aliases": [
      "1c"
    ]
  }
])