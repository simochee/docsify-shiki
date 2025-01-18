/** Shiki Language: 1c-query */
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
  }
])