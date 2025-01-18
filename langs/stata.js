/** Shiki Language: stata */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push([
  {
    "displayName": "SQL",
    "name": "sql",
    "patterns": [
      {
        "match": "((?<!@)@)\\b(\\w+)\\b",
        "name": "text.variable"
      },
      {
        "match": "(\\[)[^\\]]*(\\])",
        "name": "text.bracketed"
      },
      {
        "include": "#comments"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.other.create.sql"
          },
          "2": {
            "name": "keyword.other.sql"
          },
          "5": {
            "name": "entity.name.function.sql"
          }
        },
        "match": "(?i:^\\s*(create(?:\\s+or\\s+replace)?)\\s+(aggregate|conversion|database|domain|function|group|(unique\\s+)?index|language|operator class|operator|rule|schema|sequence|table|tablespace|trigger|type|user|view)\\s+)(['\"`]?)(\\w+)\\4",
        "name": "meta.create.sql"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.other.create.sql"
          },
          "2": {
            "name": "keyword.other.sql"
          }
        },
        "match": "(?i:^\\s*(drop)\\s+(aggregate|conversion|database|domain|function|group|index|language|operator class|operator|rule|schema|sequence|table|tablespace|trigger|type|user|view))",
        "name": "meta.drop.sql"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.other.create.sql"
          },
          "2": {
            "name": "keyword.other.table.sql"
          },
          "3": {
            "name": "entity.name.function.sql"
          },
          "4": {
            "name": "keyword.other.cascade.sql"
          }
        },
        "match": "(?i:\\s*(drop)\\s+(table)\\s+(\\w+)(\\s+cascade)?\\b)",
        "name": "meta.drop.sql"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.other.create.sql"
          },
          "2": {
            "name": "keyword.other.table.sql"
          }
        },
        "match": "(?i:^\\s*(alter)\\s+(aggregate|conversion|database|domain|function|group|index|language|operator class|operator|proc(edure)?|rule|schema|sequence|table|tablespace|trigger|type|user|view)\\s+)",
        "name": "meta.alter.sql"
      },
      {
        "captures": {
          "1": {
            "name": "storage.type.sql"
          },
          "2": {
            "name": "storage.type.sql"
          },
          "3": {
            "name": "constant.numeric.sql"
          },
          "4": {
            "name": "storage.type.sql"
          },
          "5": {
            "name": "constant.numeric.sql"
          },
          "6": {
            "name": "storage.type.sql"
          },
          "7": {
            "name": "constant.numeric.sql"
          },
          "8": {
            "name": "constant.numeric.sql"
          },
          "9": {
            "name": "storage.type.sql"
          },
          "10": {
            "name": "constant.numeric.sql"
          },
          "11": {
            "name": "storage.type.sql"
          },
          "12": {
            "name": "storage.type.sql"
          },
          "13": {
            "name": "storage.type.sql"
          },
          "14": {
            "name": "constant.numeric.sql"
          },
          "15": {
            "name": "storage.type.sql"
          }
        },
        "match": "(?xi)\n\n\t\t\t\t# normal stuff, capture 1\n\t\t\t\t \\b(bigint|bigserial|bit|boolean|box|bytea|cidr|circle|date|double\\sprecision|inet|int|integer|line|lseg|macaddr|money|oid|path|point|polygon|real|serial|smallint|sysdate|text)\\b\n\n\t\t\t\t# numeric suffix, capture 2 + 3i\n\t\t\t\t|\\b(bit\\svarying|character\\s(?:varying)?|tinyint|var\\schar|float|interval)\\((\\d+)\\)\n\n\t\t\t\t# optional numeric suffix, capture 4 + 5i\n\t\t\t\t|\\b(char|number|varchar\\d?)\\b(?:\\((\\d+)\\))?\n\n\t\t\t\t# special case, capture 6 + 7i + 8i\n\t\t\t\t|\\b(numeric|decimal)\\b(?:\\((\\d+),(\\d+)\\))?\n\n\t\t\t\t# special case, captures 9, 10i, 11\n\t\t\t\t|\\b(times?)\\b(?:\\((\\d+)\\))?(\\swith(?:out)?\\stime\\szone\\b)?\n\n\t\t\t\t# special case, captures 12, 13, 14i, 15\n\t\t\t\t|\\b(timestamp)(?:(s|tz))?\\b(?:\\((\\d+)\\))?(\\s(with|without)\\stime\\szone\\b)?\n\n\t\t\t"
      },
      {
        "match": "(?i:\\b((?:primary|foreign)\\s+key|references|on\\sdelete(\\s+cascade)?|nocheck|check|constraint|collate|default)\\b)",
        "name": "storage.modifier.sql"
      },
      {
        "match": "\\b\\d+\\b",
        "name": "constant.numeric.sql"
      },
      {
        "match": "(?i:\\b(select(\\s+(all|distinct))?|insert\\s+(ignore\\s+)?into|update|delete|from|set|where|group\\s+by|or|like|and|union(\\s+all)?|having|order\\s+by|limit|cross\\s+join|join|straight_join|(inner|(left|right|full)(\\s+outer)?)\\s+join|natural(\\s+(inner|(left|right|full)(\\s+outer)?))?\\s+join)\\b)",
        "name": "keyword.other.DML.sql"
      },
      {
        "match": "(?i:\\b(on|off|((is\\s+)?not\\s+)?null)\\b)",
        "name": "keyword.other.DDL.create.II.sql"
      },
      {
        "match": "(?i:\\bvalues\\b)",
        "name": "keyword.other.DML.II.sql"
      },
      {
        "match": "(?i:\\b(begin(\\s+work)?|start\\s+transaction|commit(\\s+work)?|rollback(\\s+work)?)\\b)",
        "name": "keyword.other.LUW.sql"
      },
      {
        "match": "(?i:\\b(grant(\\swith\\sgrant\\soption)?|revoke)\\b)",
        "name": "keyword.other.authorization.sql"
      },
      {
        "match": "(?i:\\bin\\b)",
        "name": "keyword.other.data-integrity.sql"
      },
      {
        "match": "(?i:^\\s*(comment\\s+on\\s+(table|column|aggregate|constraint|database|domain|function|index|operator|rule|schema|sequence|trigger|type|view))\\s+.*?\\s+(is)\\s+)",
        "name": "keyword.other.object-comments.sql"
      },
      {
        "match": "(?i)\\bAS\\b",
        "name": "keyword.other.alias.sql"
      },
      {
        "match": "(?i)\\b(DESC|ASC)\\b",
        "name": "keyword.other.order.sql"
      },
      {
        "match": "\\*",
        "name": "keyword.operator.star.sql"
      },
      {
        "match": "[!<>]?=|<>|<|>",
        "name": "keyword.operator.comparison.sql"
      },
      {
        "match": "-|\\+|/",
        "name": "keyword.operator.math.sql"
      },
      {
        "match": "\\|\\|",
        "name": "keyword.operator.concatenator.sql"
      },
      {
        "captures": {
          "1": {
            "name": "support.function.aggregate.sql"
          }
        },
        "match": "(?i)\\b(approx_count_distinct|approx_percentile_cont|approx_percentile_disc|avg|checksum_agg|count|count_big|group|grouping|grouping_id|max|min|sum|stdev|stdevp|var|varp)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.analytic.sql"
          }
        },
        "match": "(?i)\\b(cume_dist|first_value|lag|last_value|lead|percent_rank|percentile_cont|percentile_disc)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.bitmanipulation.sql"
          }
        },
        "match": "(?i)\\b(bit_count|get_bit|left_shift|right_shift|set_bit)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.conversion.sql"
          }
        },
        "match": "(?i)\\b(cast|convert|parse|try_cast|try_convert|try_parse)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.collation.sql"
          }
        },
        "match": "(?i)\\b(collationproperty|tertiary_weights)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.cryptographic.sql"
          }
        },
        "match": "(?i)\\b(asymkey_id|asymkeyproperty|certproperty|cert_id|crypt_gen_random|decryptbyasymkey|decryptbycert|decryptbykey|decryptbykeyautoasymkey|decryptbykeyautocert|decryptbypassphrase|encryptbyasymkey|encryptbycert|encryptbykey|encryptbypassphrase|hashbytes|is_objectsigned|key_guid|key_id|key_name|signbyasymkey|signbycert|symkeyproperty|verifysignedbycert|verifysignedbyasymkey)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.cursor.sql"
          }
        },
        "match": "(?i)\\b(cursor_status)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.datetime.sql"
          }
        },
        "match": "(?i)\\b(sysdatetime|sysdatetimeoffset|sysutcdatetime|current_time(stamp)?|getdate|getutcdate|datename|datepart|day|month|year|datefromparts|datetime2fromparts|datetimefromparts|datetimeoffsetfromparts|smalldatetimefromparts|timefromparts|datediff|dateadd|datetrunc|eomonth|switchoffset|todatetimeoffset|isdate|date_bucket)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.datatype.sql"
          }
        },
        "match": "(?i)\\b(datalength|ident_current|ident_incr|ident_seed|identity|sql_variant_property)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.expression.sql"
          }
        },
        "match": "(?i)\\b(coalesce|nullif)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.globalvar.sql"
          }
        },
        "match": "(?<!@)@@(?i)\\b(cursor_rows|connections|cpu_busy|datefirst|dbts|error|fetch_status|identity|idle|io_busy|langid|language|lock_timeout|max_connections|max_precision|nestlevel|options|packet_errors|pack_received|pack_sent|procid|remserver|rowcount|servername|servicename|spid|textsize|timeticks|total_errors|total_read|total_write|trancount|version)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.json.sql"
          }
        },
        "match": "(?i)\\b(json|isjson|json_object|json_array|json_value|json_query|json_modify|json_path_exists)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.logical.sql"
          }
        },
        "match": "(?i)\\b(choose|iif|greatest|least)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.mathematical.sql"
          }
        },
        "match": "(?i)\\b(abs|acos|asin|atan|atn2|ceiling|cos|cot|degrees|exp|floor|log|log10|pi|power|radians|rand|round|sign|sin|sqrt|square|tan)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.metadata.sql"
          }
        },
        "match": "(?i)\\b(app_name|applock_mode|applock_test|assemblyproperty|col_length|col_name|columnproperty|database_principal_id|databasepropertyex|db_id|db_name|file_id|file_idex|file_name|filegroup_id|filegroup_name|filegroupproperty|fileproperty|fulltextcatalogproperty|fulltextserviceproperty|index_col|indexkey_property|indexproperty|object_definition|object_id|object_name|object_schema_name|objectproperty|objectpropertyex|original_db_name|parsename|schema_id|schema_name|scope_identity|serverproperty|stats_date|type_id|type_name|typeproperty)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.ranking.sql"
          }
        },
        "match": "(?i)\\b(rank|dense_rank|ntile|row_number)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.rowset.sql"
          }
        },
        "match": "(?i)\\b(generate_series|opendatasource|openjson|openrowset|openquery|openxml|predict|string_split)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.security.sql"
          }
        },
        "match": "(?i)\\b(certencoded|certprivatekey|current_user|database_principal_id|has_perms_by_name|is_member|is_rolemember|is_srvrolemember|original_login|permissions|pwdcompare|pwdencrypt|schema_id|schema_name|session_user|suser_id|suser_sid|suser_sname|system_user|suser_name|user_id|user_name)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.string.sql"
          }
        },
        "match": "(?i)\\b(ascii|char|charindex|concat|difference|format|left|len|lower|ltrim|nchar|nodes|patindex|quotename|replace|replicate|reverse|right|rtrim|soundex|space|str|string_agg|string_escape|string_split|stuff|substring|translate|trim|unicode|upper)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.system.sql"
          }
        },
        "match": "(?i)\\b(binary_checksum|checksum|compress|connectionproperty|context_info|current_request_id|current_transaction_id|decompress|error_line|error_message|error_number|error_procedure|error_severity|error_state|formatmessage|get_filestream_transaction_context|getansinull|host_id|host_name|isnull|isnumeric|min_active_rowversion|newid|newsequentialid|rowcount_big|session_context|session_id|xact_state)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "support.function.textimage.sql"
          }
        },
        "match": "(?i)\\b(patindex|textptr|textvalid)\\b\\s*\\("
      },
      {
        "captures": {
          "1": {
            "name": "constant.other.database-name.sql"
          },
          "2": {
            "name": "constant.other.table-name.sql"
          }
        },
        "match": "(\\w+?)\\.(\\w+)"
      },
      {
        "include": "#strings"
      },
      {
        "include": "#regexps"
      },
      {
        "match": "\\b(?i)(abort|abort_after_wait|absent|absolute|accent_sensitivity|acceptable_cursopt|acp|action|activation|add|address|admin|aes_128|aes_192|aes_256|affinity|after|aggregate|algorithm|all_constraints|all_errormsgs|all_indexes|all_levels|all_results|allow_connections|allow_dup_row|allow_encrypted_value_modifications|allow_page_locks|allow_row_locks|allow_snapshot_isolation|alter|altercolumn|always|anonymous|ansi_defaults|ansi_null_default|ansi_null_dflt_off|ansi_null_dflt_on|ansi_nulls|ansi_padding|ansi_warnings|appdomain|append|application|apply|arithabort|arithignore|array|assembly|asymmetric|asynchronous_commit|at|atan2|atomic|attach|attach_force_rebuild_log|attach_rebuild_log|audit|auth_realm|authentication|auto|auto_cleanup|auto_close|auto_create_statistics|auto_drop|auto_shrink|auto_update_statistics|auto_update_statistics_async|automated_backup_preference|automatic|autopilot|availability|availability_mode|backup|backup_priority|base64|basic|batches|batchsize|before|between|bigint|binary|binding|bit|block|blockers|blocksize|bmk|both|break|broker|broker_instance|bucket_count|buffer|buffercount|bulk_logged|by|call|caller|card|case|catalog|catch|cert|certificate|change_retention|change_tracking|change_tracking_context|changes|char|character|character_set|check_expiration|check_policy|checkconstraints|checkindex|checkpoint|checksum|cleanup_policy|clear|clear_port|close|clustered|codepage|collection|column_encryption_key|column_master_key|columnstore|columnstore_archive|colv_80_to_100|colv_100_to_80|commit_differential_base|committed|compatibility_level|compress_all_row_groups|compression|compression_delay|concat_null_yields_null|concatenate|configuration|connect|connection|containment|continue|continue_after_error|contract|contract_name|control|conversation|conversation_group_id|conversation_handle|copy|copy_only|count_rows|counter|create(\\\\s+or\\\\s+alter)?|credential|cross|cryptographic|cryptographic_provider|cube|cursor|cursor_close_on_commit|cursor_default|data|data_compression|data_flush_interval_seconds|data_mirroring|data_purity|data_source|database|database_name|database_snapshot|datafiletype|date_correlation_optimization|date|datefirst|dateformat|date_format|datetime|datetime2|datetimeoffset|day(s)?|db_chaining|dbid|dbidexec|dbo_only|deadlock_priority|deallocate|dec|decimal|declare|decrypt|decrypt_a|decryption|default_database|default_fulltext_language|default_language|default_logon_domain|default_schema|definition|delay|delayed_durability|delimitedtext|density_vector|dependent|des|description|desired_state|desx|differential|digest|disable|disable_broker|disable_def_cnst_chk|disabled|disk|distinct|distributed|distribution|drop|drop_existing|dts_buffers|dump|durability|dynamic|edition|elements|else|emergency|empty|enable|enable_broker|enabled|encoding|encrypted|encrypted_value|encryption|encryption_type|end|endpoint|endpoint_url|enhancedintegrity|entry|error_broker_conversations|errorfile|estimateonly|event|except|exec|executable|execute|exists|expand|expiredate|expiry_date|explicit|external|external_access|failover|failover_mode|failure_condition_level|fast|fast_forward|fastfirstrow|federated_service_account|fetch|field_terminator|fieldterminator|file|filelistonly|filegroup|filegrowth|filename|filestream|filestream_log|filestream_on|filetable|file_format|filter|first_row|fips_flagger|fire_triggers|first|firstrow|float|flush_interval_seconds|fmtonly|following|for|force|force_failover_allow_data_loss|force_service_allow_data_loss|forced|forceplan|formatfile|format_options|format_type|formsof|forward_only|free_cursors|free_exec_context|fullscan|fulltext|fulltextall|fulltextkey|function|generated|get|geography|geometry|global|go|goto|governor|guid|hadoop|hardening|hash|hashed|header_limit|headeronly|health_check_timeout|hidden|hierarchyid|histogram|histogram_steps|hits_cursors|hits_exec_context|hour(s)?|http|identity|identity_value|if|ifnull|ignore|ignore_constraints|ignore_dup_key|ignore_dup_row|ignore_triggers|image|immediate|implicit_transactions|include|include_null_values|incremental|index|inflectional|init|initiator|insensitive|insert|instead|int|integer|integrated|intersect|intermediate|interval_length_minutes|into|inuse_cursors|inuse_exec_context|io|is|isabout|iso_week|isolation|job_tracker_location|json|keep|keep_nulls|keep_replication|keepdefaults|keepfixed|keepidentity|keepnulls|kerberos|key|key_path|key_source|key_store_provider_name|keyset|kill|kilobytes_per_batch|labelonly|langid|language|last|lastrow|leading|legacy_cardinality_estimation|length|level|lifetime|lineage_80_to_100|lineage_100_to_80|listener_ip|listener_port|load|loadhistory|lob_compaction|local|local_service_name|locate|location|lock_escalation|lock_timeout|lockres|log|login|login_type|loop|manual|mark_in_use_for_removal|masked|master|match|matched|max_queue_readers|max_duration|max_outstanding_io_per_volume|maxdop|maxerrors|maxlength|maxtransfersize|max_plans_per_query|max_storage_size_mb|mediadescription|medianame|mediapassword|memogroup|memory_optimized|merge|message|message_forward_size|message_forwarding|microsecond|millisecond|minute(s)?|mirror_address|misses_cursors|misses_exec_context|mixed|modify|money|month|move|multi_user|must_change|name|namespace|nanosecond|native|native_compilation|nchar|ncharacter|nested_triggers|never|new_account|new_broker|newname|next|no|no_browsetable|no_checksum|no_compression|no_infomsgs|no_triggers|no_truncate|nocount|noexec|noexpand|noformat|noinit|nolock|nonatomic|nonclustered|nondurable|none|norecompute|norecovery|noreset|norewind|noskip|not|notification|nounload|now|nowait|ntext|ntlm|nulls|numeric|numeric_roundabort|nvarchar|object|objid|oem|offline|old_account|online|operation_mode|open|openjson|optimistic|option|orc|out|outer|output|over|override|owner|ownership|pad_index|page|page_checksum|page_verify|pagecount|paglock|param|parameter_sniffing|parameter_type_expansion|parameterization|parquet|parseonly|partial|partition|partner|password|path|pause|percentage|permission_set|persisted|period|physical_only|plan_forcing_mode|policy|pool|population|ports|preceding|precision|predicate|presume_abort|primary|primary_role|print|prior|priority |priority_level|private|proc(edure)?|procedure_name|profile|provider|quarter|query_capture_mode|query_governor_cost_limit|query_optimizer_hotfixes|query_store|queue|quoted_identifier|raiserror|range|raw|rcfile|rc2|rc4|rc4_128|rdbms|read_committed_snapshot|read|read_only|read_write|readcommitted|readcommittedlock|readonly|readpast|readuncommitted|readwrite|real|rebuild|receive|recmodel_70backcomp|recompile|reconfigure|recovery|recursive|recursive_triggers|redo_queue|reject_sample_value|reject_type|reject_value|relative|remote|remote_data_archive|remote_proc_transactions|remote_service_name|remove|removed_cursors|removed_exec_context|reorganize|repeat|repeatable|repeatableread|replace|replica|replicated|replnick_100_to_80|replnickarray_80_to_100|replnickarray_100_to_80|required|required_cursopt|resample|reset|resource|resource_manager_location|respect|restart|restore|restricted_user|resume|retaindays|retention|return|revert|rewind|rewindonly|returns|robust|role|rollup|root|round_robin|route|row|rowdump|rowguidcol|rowlock|row_terminator|rows|rows_per_batch|rowsets_only|rowterminator|rowversion|rsa_1024|rsa_2048|rsa_3072|rsa_4096|rsa_512|safe|safety|sample|save|scalar|schema|schemabinding|scoped|scroll|scroll_locks|sddl|second|secexpr|seconds|secondary|secondary_only|secondary_role|secret|security|securityaudit|selective|self|send|sent|sequence|serde_method|serializable|server|service|service_broker|service_name|service_objective|session_timeout|session|sessions|seterror|setopts|sets|shard_map_manager|shard_map_name|sharded|shared_memory|shortest_path|show_statistics|showplan_all|showplan_text|showplan_xml|showplan_xml_with_recompile|shrinkdb|shutdown|sid|signature|simple|single_blob|single_clob|single_nclob|single_user|singleton|site|size|size_based_cleanup_mode|skip|smalldatetime|smallint|smallmoney|snapshot|snapshot_import|snapshotrestorephase|soap|softnuma|sort_in_tempdb|sorted_data|sorted_data_reorg|spatial|sql|sql_bigint|sql_binary|sql_bit|sql_char|sql_date|sql_decimal|sql_double|sql_float|sql_guid|sql_handle|sql_longvarbinary|sql_longvarchar|sql_numeric|sql_real|sql_smallint|sql_time|sql_timestamp|sql_tinyint|sql_tsi_day|sql_tsi_frac_second|sql_tsi_hour|sql_tsi_minute|sql_tsi_month|sql_tsi_quarter|sql_tsi_second|sql_tsi_week|sql_tsi_year|sql_type_date|sql_type_time|sql_type_timestamp|sql_varbinary|sql_varchar|sql_variant|sql_wchar|sql_wlongvarchar|ssl|ssl_port|standard|standby|start|start_date|started|stat_header|state|statement|static|statistics|statistics_incremental|statistics_norecompute|statistics_only|statman|stats|stats_stream|status|stop|stop_on_error|stopat|stopatmark|stopbeforemark|stoplist|stopped|string_delimiter|subject|supplemental_logging|supported|suspend|symmetric|synchronous_commit|synonym|sysname|system|system_time|system_versioning|table|tableresults|tablock|tablockx|take|tape|target|target_index|target_partition|target_recovery_time|tcp|temporal_history_retention|text|textimage_on|then|thesaurus|throw|time|timeout|timestamp|tinyint|to|top|torn_page_detection|track_columns_updated|trailing|tran|transaction|transfer|transform_noise_words|triple_des|triple_des_3key|truncate|trustworthy|try|tsql|two_digit_year_cutoff|type|type_desc|type_warning|tzoffset|uid|unbounded|uncommitted|unique|uniqueidentifier|unlimited|unload|unlock|unsafe|updlock|url|use|useplan|useroptions|use_type_default|using|utcdatetime|valid_xml|validation|value|values|varbinary|varchar|verbose|verifyonly|version|view_metadata|virtual_device|visiblity|wait_at_low_priority|waitfor|webmethod|week|weekday|weight|well_formed_xml|when|while|widechar|widechar_ansi|widenative|window|windows|with|within|within group|witness|without|without_array_wrapper|workload|wsdl|xact_abort|xlock|xml|xmlschema|xquery|xsinil|year|zone)\\b",
        "name": "keyword.other.sql"
      },
      {
        "captures": {
          "1": {
            "name": "punctuation.section.scope.begin.sql"
          },
          "2": {
            "name": "punctuation.section.scope.end.sql"
          }
        },
        "comment": "Allow for special ↩ behavior",
        "match": "(\\()(\\))",
        "name": "meta.block.sql"
      }
    ],
    "repository": {
      "comment-block": {
        "begin": "/\\*",
        "captures": {
          "0": {
            "name": "punctuation.definition.comment.sql"
          }
        },
        "end": "\\*/",
        "name": "comment.block",
        "patterns": [
          {
            "include": "#comment-block"
          }
        ]
      },
      "comments": {
        "patterns": [
          {
            "begin": "(^[ \\t]+)?(?=--)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.whitespace.comment.leading.sql"
              }
            },
            "end": "(?!\\G)",
            "patterns": [
              {
                "begin": "--",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.comment.sql"
                  }
                },
                "end": "\\n",
                "name": "comment.line.double-dash.sql"
              }
            ]
          },
          {
            "begin": "(^[ \\t]+)?(?=#)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.whitespace.comment.leading.sql"
              }
            },
            "end": "(?!\\G)",
            "patterns": []
          },
          {
            "include": "#comment-block"
          }
        ]
      },
      "regexps": {
        "patterns": [
          {
            "begin": "/(?=\\S.*/)",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.sql"
              }
            },
            "end": "/",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.sql"
              }
            },
            "name": "string.regexp.sql",
            "patterns": [
              {
                "include": "#string_interpolation"
              },
              {
                "match": "\\\\/",
                "name": "constant.character.escape.slash.sql"
              }
            ]
          },
          {
            "begin": "%r\\{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.sql"
              }
            },
            "comment": "We should probably handle nested bracket pairs!?! -- Allan",
            "end": "\\}",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.sql"
              }
            },
            "name": "string.regexp.modr.sql",
            "patterns": [
              {
                "include": "#string_interpolation"
              }
            ]
          }
        ]
      },
      "string_escape": {
        "match": "\\\\.",
        "name": "constant.character.escape.sql"
      },
      "string_interpolation": {
        "captures": {
          "1": {
            "name": "punctuation.definition.string.begin.sql"
          },
          "3": {
            "name": "punctuation.definition.string.end.sql"
          }
        },
        "match": "(#\\{)([^\\}]*)(\\})",
        "name": "string.interpolated.sql"
      },
      "strings": {
        "patterns": [
          {
            "captures": {
              "2": {
                "name": "punctuation.definition.string.begin.sql"
              },
              "3": {
                "name": "punctuation.definition.string.end.sql"
              }
            },
            "comment": "this is faster than the next begin/end rule since sub-pattern will match till end-of-line and SQL files tend to have very long lines.",
            "match": "(N)?(')[^']*(')",
            "name": "string.quoted.single.sql"
          },
          {
            "begin": "'",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.sql"
              }
            },
            "end": "'",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.sql"
              }
            },
            "name": "string.quoted.single.sql",
            "patterns": [
              {
                "include": "#string_escape"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.string.begin.sql"
              },
              "2": {
                "name": "punctuation.definition.string.end.sql"
              }
            },
            "comment": "this is faster than the next begin/end rule since sub-pattern will match till end-of-line and SQL files tend to have very long lines.",
            "match": "(`)[^`\\\\]*(`)",
            "name": "string.quoted.other.backtick.sql"
          },
          {
            "begin": "`",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.sql"
              }
            },
            "end": "`",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.sql"
              }
            },
            "name": "string.quoted.other.backtick.sql",
            "patterns": [
              {
                "include": "#string_escape"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.definition.string.begin.sql"
              },
              "2": {
                "name": "punctuation.definition.string.end.sql"
              }
            },
            "comment": "this is faster than the next begin/end rule since sub-pattern will match till end-of-line and SQL files tend to have very long lines.",
            "match": "(\")[^\"#]*(\")",
            "name": "string.quoted.double.sql"
          },
          {
            "begin": "\"",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.sql"
              }
            },
            "end": "\"",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.sql"
              }
            },
            "name": "string.quoted.double.sql",
            "patterns": [
              {
                "include": "#string_interpolation"
              }
            ]
          },
          {
            "begin": "%\\{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.sql"
              }
            },
            "end": "\\}",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.sql"
              }
            },
            "name": "string.other.quoted.brackets.sql",
            "patterns": [
              {
                "include": "#string_interpolation"
              }
            ]
          }
        ]
      }
    },
    "scopeName": "source.sql"
  },
  {
    "displayName": "Stata",
    "fileTypes": [
      "do",
      "ado",
      "mata"
    ],
    "foldingStartMarker": "\\{\\s*$",
    "foldingStopMarker": "^\\s*\\}",
    "name": "stata",
    "patterns": [
      {
        "include": "#ascii-regex-functions"
      },
      {
        "include": "#unicode-regex-functions"
      },
      {
        "include": "#constants"
      },
      {
        "include": "#functions"
      },
      {
        "include": "#comments"
      },
      {
        "include": "#subscripts"
      },
      {
        "include": "#operators"
      },
      {
        "include": "#macro-local"
      },
      {
        "include": "#macro-global"
      },
      {
        "include": "#string-compound"
      },
      {
        "include": "#string-regular"
      },
      {
        "include": "#builtin_variables"
      },
      {
        "include": "#macro-commands"
      },
      {
        "comment": "keywords that delimit flow conditionals",
        "match": "\\b(if|else if|else)\\b",
        "name": "keyword.control.conditional.stata"
      },
      {
        "captures": {
          "1": {
            "name": "storage.type.scalar.stata"
          }
        },
        "match": "^\\s*(sca(lar|la|l)?(\\s+de(fine|fin|fi|f)?)?)\\s+(?!(drop|dir?|l(ist|is|i)?)\\s+)"
      },
      {
        "begin": "\\b(mer(ge|g)?)\\s+(1|m|n)(:)(1|m|n)",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.flow.stata"
          },
          "3": {
            "patterns": [
              {
                "include": "#constants"
              },
              {
                "match": "m|n",
                "name": ""
              }
            ]
          },
          "4": {
            "name": "punctuation.separator.key-value"
          },
          "5": {
            "patterns": [
              {
                "include": "#constants"
              },
              {
                "match": "m|n",
                "name": ""
              }
            ]
          }
        },
        "end": "using",
        "patterns": [
          {
            "include": "#builtin_variables"
          },
          {
            "include": "#macro-local"
          },
          {
            "include": "#macro-global"
          },
          {
            "include": "#comments"
          }
        ]
      },
      {
        "captures": {
          "1": {
            "name": "keyword.control.flow.stata"
          },
          "2": {
            "patterns": [
              {
                "include": "#macro-local-identifiers"
              },
              {
                "include": "#macro-local"
              },
              {
                "include": "#macro-global"
              }
            ]
          },
          "3": {
            "name": "keyword.control.flow.stata"
          }
        },
        "match": "\\b(foreach)\\s+((?!in|of).+)\\s+(in|of var(list|lis|li|l)?|of new(list|lis|li|l)?|of num(list|lis|li|l)?)\\b"
      },
      {
        "begin": "\\b(foreach)\\s+((?!in|of).+)\\s+(of loc(al|a)?|of glo(bal|ba|b)?)\\b\\s*",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.flow.stata"
          },
          "2": {
            "patterns": [
              {
                "include": "#macro-local-identifiers"
              },
              {
                "include": "#macro-local"
              },
              {
                "include": "#macro-global"
              }
            ]
          },
          "3": {
            "name": "keyword.control.flow.stata"
          }
        },
        "end": "(?=\\s*\\{)",
        "patterns": [
          {
            "include": "#macro-local-identifiers"
          },
          {
            "include": "#macro-local"
          },
          {
            "include": "#macro-global"
          }
        ]
      },
      {
        "begin": "\\b(forvalues|forvalue|forvalu|forval|forva|forv)\\s*",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.flow.stata"
          }
        },
        "end": "\\s*(=)\\s*([^\\{]+)\\s*|(?=\\n)",
        "endCaptures": {
          "1": {
            "name": "keyword.operator.assignment.stata"
          },
          "2": {
            "patterns": [
              {
                "include": "#constants"
              },
              {
                "include": "#operators"
              },
              {
                "include": "#macro-local"
              },
              {
                "include": "#macro-global"
              }
            ]
          }
        },
        "patterns": [
          {
            "include": "#macro-local-identifiers"
          },
          {
            "include": "#macro-local"
          },
          {
            "include": "#macro-global"
          }
        ]
      },
      {
        "comment": "keywords that delimit loops",
        "match": "\\b(while|continue)\\b",
        "name": "keyword.control.flow.stata"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.other.stata"
          }
        },
        "comment": "keywords that haven't fit into other groups (yet).",
        "match": "\\b(as|ass|asse|asser|assert)\\b"
      },
      {
        "comment": "prefixes that require a colon",
        "match": "\\b(by(sort|sor|so|s)?|statsby|rolling|bootstrap|jackknife|permute|simulate|svy|mi est(imate|imat|ima|im|i)?|nestreg|stepwise|xi|fp|mfp|vers(ion|io|i)?)\\b",
        "name": "storage.type.function.stata"
      },
      {
        "comment": "prefixes that don't need a colon",
        "match": "\\b(qui(etly|etl|et|e)?|n(oisily|oisil|oisi|ois|oi|o)?|cap(ture|tur|tu|t)?)\\b:?",
        "name": "keyword.control.flow.stata"
      },
      {
        "captures": {
          "1": {
            "name": "storage.type.function.stata"
          },
          "3": {
            "name": "storage.type.function.stata"
          },
          "7": {
            "name": "entity.name.function.stata"
          }
        },
        "match": "\\s*(pr(ogram|ogra|ogr|og|o)?)\\s+((di(r)?|drop|l(ist|is|i)?)\\s+)([\\w&&[^0-9]]\\w{0,31})"
      },
      {
        "begin": "^\\s*(pr(ogram|ogra|ogr|og|o)?)\\s+(de(fine|fin|fi|f)?\\s+)?",
        "beginCaptures": {
          "1": {
            "name": "storage.type.function.stata"
          },
          "3": {
            "name": "storage.type.function.stata"
          }
        },
        "end": "(?=,|\\n|/)",
        "patterns": [
          {
            "include": "#macro-local"
          },
          {
            "include": "#macro-global"
          },
          {
            "match": "[\\w&&[^0-9]]\\w{0,31}",
            "name": "entity.name.function.stata"
          },
          {
            "match": "[^A-za-z_0-9,\\n/ ]+",
            "name": "invalid.illegal.name.stata"
          }
        ]
      },
      {
        "captures": {
          "1": "keyword.functions.data.stata.test"
        },
        "match": "\\b(form(at|a)?)\\s*([\\w&&[^0-9]]\\w{0,31})*\\s*(%)(-)?(0)?([0-9]+)(.)([0-9]+)(e|f|g)(c)?"
      },
      {
        "include": "#braces-with-error"
      },
      {
        "begin": "(?=syntax)",
        "end": "\\n",
        "patterns": [
          {
            "begin": "syntax",
            "beginCaptures": {
              "0": {
                "name": "keyword.functions.program.stata"
              }
            },
            "comment": "color before the comma",
            "end": "(?=,|\\n)",
            "patterns": [
              {
                "begin": "///",
                "end": "\\n",
                "name": "comment.block.stata"
              },
              {
                "match": "\\[",
                "name": "punctuation.definition.parameters.begin.stata"
              },
              {
                "match": "\\]",
                "name": "punctuation.definition.parameters.end.stata"
              },
              {
                "match": "\\b(varlist|varname|newvarlist|newvarname|namelist|name|anything)\\b",
                "name": "entity.name.type.class.stata"
              },
              {
                "captures": {
                  "2": {
                    "name": "entity.name.type.class.stata"
                  },
                  "3": {
                    "name": "keyword.operator.arithmetic.stata"
                  }
                },
                "match": "\\b((if|in|using|fweight|aweight|pweight|iweight))\\b(/)?"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.operator.arithmetic.stata"
                  },
                  "2": {
                    "name": "entity.name.type.class.stata"
                  }
                },
                "match": "(/)?(exp)"
              },
              {
                "include": "#constants"
              },
              {
                "include": "#operators"
              },
              {
                "include": "#string-compound"
              },
              {
                "include": "#string-regular"
              },
              {
                "include": "#macro-local"
              },
              {
                "include": "#macro-global"
              },
              {
                "include": "#builtin_variables"
              }
            ]
          },
          {
            "begin": ",",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.variable.begin.stata"
              }
            },
            "comment": "things to color after the comma",
            "end": "(?=\\n)",
            "patterns": [
              {
                "begin": "///",
                "end": "\\n",
                "name": "comment.block.stata"
              },
              {
                "begin": "([^\\s\\[\\]]+)(\\()",
                "beginCaptures": {
                  "1": {
                    "comment": "these are the names that become macros",
                    "patterns": [
                      {
                        "include": "#macro-local-identifiers"
                      },
                      {
                        "include": "#macro-local"
                      },
                      {
                        "include": "#macro-global"
                      }
                    ]
                  },
                  "2": {
                    "name": "keyword.operator.parentheses.stata"
                  }
                },
                "comment": "color options with parentheses",
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "keyword.operator.parentheses.stata"
                  }
                },
                "patterns": [
                  {
                    "captures": {
                      "0": {
                        "name": "support.type.stata"
                      }
                    },
                    "comment": "the first word is often a type",
                    "match": "\\b(integer|intege|integ|inte|int|real|string|strin|stri|str)\\b"
                  },
                  {
                    "include": "#constants"
                  },
                  {
                    "include": "#operators"
                  },
                  {
                    "include": "#string-compound"
                  },
                  {
                    "include": "#string-regular"
                  },
                  {
                    "include": "#macro-local"
                  },
                  {
                    "include": "#macro-global"
                  },
                  {
                    "include": "#builtin_variables"
                  }
                ]
              },
              {
                "include": "#macro-local-identifiers"
              },
              {
                "include": "#constants"
              },
              {
                "include": "#operators"
              },
              {
                "include": "#string-compound"
              },
              {
                "include": "#string-regular"
              },
              {
                "include": "#macro-local"
              },
              {
                "include": "#macro-global"
              },
              {
                "include": "#builtin_variables"
              }
            ]
          }
        ]
      },
      {
        "captures": {
          "1": {
            "name": "keyword.functions.data.stata"
          }
        },
        "comment": "one-word commands",
        "match": "\\b(sa(v|ve)|saveold|destring|tostring|u(se|s)?|note(s)?|form(at|a)?)\\b"
      },
      {
        "comment": "programming commands",
        "match": "\\b(exit|end)\\b",
        "name": "keyword.functions.data.stata"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.functions.data.stata"
          },
          "2": {
            "patterns": [
              {
                "include": "#macro-local"
              }
            ]
          },
          "4": {
            "name": "invalid.illegal.name.stata"
          },
          "5": {
            "name": "keyword.operator.assignment.stata"
          }
        },
        "match": "\\b(replace)\\s+([^=]+)\\s*((==)|(=))"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.functions.data.stata"
          },
          "3": {
            "name": "support.type.stata"
          },
          "5": {
            "patterns": [
              {
                "include": "#reserved-names"
              },
              {
                "include": "#macro-local"
              }
            ]
          },
          "7": {
            "name": "invalid.illegal.name.stata"
          },
          "8": {
            "name": "keyword.operator.assignment.stata"
          }
        },
        "match": "\\b(g(enerate|enerat|enera|ener|ene|en|e)?|egen)\\s+((byte|int|long|float|double|str[1-9]?[0-9]?[0-9]?[0-9]?|strL)\\s+)?([^=\\s]+)\\s*((==)|(=))"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.functions.data.stata"
          },
          "3": {
            "name": "support.type.stata"
          }
        },
        "match": "\\b(set ty(pe|p)?)\\s+((byte|int|long|float|double|str[1-9]?[0-9]?[0-9]?[0-9]?|strL)?\\s+)\\b"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.functions.data.stata"
          },
          "3": {
            "name": "keyword.functions.data.stata"
          },
          "6": {
            "name": "punctuation.definition.string.begin.stata"
          },
          "7": {
            "patterns": [
              {
                "include": "#string-compound"
              },
              {
                "include": "#macro-local-escaped"
              },
              {
                "include": "#macro-global-escaped"
              },
              {
                "include": "#macro-local"
              },
              {
                "include": "#macro-global"
              },
              {
                "match": "[^`\\$]{81,}",
                "name": "invalid.illegal.name.stata"
              },
              {
                "match": ".",
                "name": "string.quoted.double.compound.stata"
              }
            ]
          },
          "8": {
            "name": "punctuation.definition.string.begin.stata"
          }
        },
        "match": "\\b(la(bel|be|b)?)\\s+(var(iable|iabl|iab|ia|i)?)\\s+([\\w&&[^0-9]]\\w{0,31})\\s+(`\")(.+)(\"')"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.functions.data.stata"
          },
          "3": {
            "name": "keyword.functions.data.stata"
          },
          "6": {
            "name": "punctuation.definition.string.begin.stata"
          },
          "7": {
            "patterns": [
              {
                "include": "#macro-local-escaped"
              },
              {
                "include": "#macro-global-escaped"
              },
              {
                "include": "#macro-local"
              },
              {
                "include": "#macro-global"
              },
              {
                "match": "[^`\\$]{81,}",
                "name": "invalid.illegal.name.stata"
              },
              {
                "match": ".",
                "name": "string.quoted.double.stata"
              }
            ]
          },
          "8": {
            "name": "punctuation.definition.string.begin.stata"
          }
        },
        "match": "\\b(la(bel|be|b)?)\\s+(var(iable|iabl|iab|ia|i)?)\\s+([\\w&&[^0-9]]\\w{0,31})\\s+(\")(.+)(\")"
      },
      {
        "captures": {
          "1": {
            "name": "keyword.functions.data.stata"
          },
          "3": {
            "name": "keyword.functions.data.stata"
          }
        },
        "match": "\\b(la(bel|be|b)?)\\s+(da(ta|t)?|var(iable|iabl|iab|ia|i)?|de(f|fi|fin|fine)?|val(ues|ue|u)?|di(r)?|l(ist|is|i)?|copy|drop|save|lang(uage|uag|ua|u)?)\\b"
      },
      {
        "begin": "\\b(drop|keep)\\b(?!\\s+(if|in)\\b)",
        "beginCaptures": {
          "1": {
            "name": "keyword.functions.data.stata"
          }
        },
        "end": "\\n",
        "patterns": [
          {
            "match": "\\b(if|in)\\b",
            "name": "invalid.illegal.name.stata"
          },
          {
            "include": "#comments"
          },
          {
            "include": "#macro-local"
          },
          {
            "include": "#macro-global"
          },
          {
            "include": "#operators"
          }
        ]
      },
      {
        "captures": {
          "1": {
            "name": "keyword.functions.data.stata"
          },
          "2": {
            "name": "keyword.functions.data.stata"
          }
        },
        "match": "\\b(drop|keep)\\s+(if|in)\\b"
      },
      {
        "begin": "^\\s*mata:?\\s*$",
        "comment": "won't match single-line Mata statements",
        "end": "^\\s*end\\s*$\\n?",
        "name": "meta.embedded.block.mata",
        "patterns": [
          {
            "match": "(?<![^$\\s])(version|pragma|if|else|for|while|do|break|continue|goto|return)(?=\\s)",
            "name": "keyword.control.mata"
          },
          {
            "captures": {
              "1": {
                "name": "storage.type.eltype.mata"
              },
              "4": {
                "name": "storage.type.orgtype.mata"
              }
            },
            "match": "\\b(transmorphic|string|numeric|real|complex|(pointer(\\([^)]+\\))?))\\s+(matrix|vector|rowvector|colvector|scalar)\\b",
            "name": "storage.type.mata"
          },
          {
            "comment": "need to end with whitespace character here or last group doesn't match",
            "match": "\\b(transmorphic|string|numeric|real|complex|(pointer(\\([^)]+\\))?))\\s",
            "name": "storage.type.eltype.mata"
          },
          {
            "match": "\\b(matrix|vector|rowvector|colvector|scalar)\\b",
            "name": "storage.type.orgtype.mata"
          },
          {
            "match": "\\!|\\+\\+|\\-\\-|\\&|\\'|\\?|\\\\|\\:\\:|\\,|\\.\\.|\\||\\=|\\=\\=|\\>\\=|\\<\\=|\\<|\\>|\\!\\=|\\#|\\+|\\-|\\*|\\^|\\/",
            "name": "keyword.operator.mata"
          },
          {
            "include": "$self"
          }
        ]
      },
      {
        "begin": "\\b(odbc)\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.control.flow.stata"
          }
        },
        "end": "\\n",
        "patterns": [
          {
            "begin": "///",
            "end": "\\n",
            "name": "comment.block.stata"
          },
          {
            "begin": "(exec?)(\\(\")",
            "beginCaptures": {
              "1": {
                "name": "support.function.builtin.stata"
              },
              "2": {
                "name": "punctuation.definition.parameters.begin.stata"
              }
            },
            "end": "\"\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.parameters.end.stata"
              }
            },
            "patterns": [
              {
                "include": "source.sql"
              }
            ]
          },
          {
            "include": "$self"
          }
        ]
      },
      {
        "include": "#commands-other"
      }
    ],
    "repository": {
      "ascii-regex-character-class": {
        "patterns": [
          {
            "match": "\\\\[\\*\\+\\?\\-\\.\\^\\$\\|\\[\\]\\(\\)\\\\]",
            "name": "constant.character.escape.backslash.stata"
          },
          {
            "match": "\\.",
            "name": "constant.character.character-class.stata"
          },
          {
            "match": "\\\\.",
            "name": "illegal.invalid.character-class.stata"
          },
          {
            "begin": "(\\[)(\\^)?",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.character-class.stata"
              },
              "2": {
                "name": "keyword.operator.negation.stata"
              }
            },
            "end": "(\\])",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.character-class.stata"
              }
            },
            "name": "constant.other.character-class.set.stata",
            "patterns": [
              {
                "include": "#ascii-regex-character-class"
              },
              {
                "captures": {
                  "2": {
                    "name": "constant.character.escape.backslash.stata"
                  },
                  "4": {
                    "name": "constant.character.escape.backslash.stata"
                  }
                },
                "match": "((\\\\.)|.)\\-((\\\\.)|[^\\]])",
                "name": "constant.other.character-class.range.stata"
              }
            ]
          }
        ]
      },
      "ascii-regex-functions": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "support.function.builtin.stata"
              },
              "2": {
                "name": "punctuation.definition.parameters.begin.stata"
              },
              "3": {
                "patterns": [
                  {
                    "include": "#string-compound"
                  },
                  {
                    "include": "#string-regular"
                  },
                  {
                    "include": "#macro-local"
                  },
                  {
                    "include": "#macro-global"
                  },
                  {
                    "include": "#functions"
                  },
                  {
                    "match": "[\\w&&[^0-9]]\\w{0,31}",
                    "name": "variable.parameter.function.stata"
                  },
                  {
                    "include": "#comments-triple-slash"
                  }
                ]
              },
              "4": {
                "name": "punctuation.definition.variable.begin.stata"
              },
              "5": {
                "name": "punctuation.definition.string.begin.stata"
              },
              "6": {
                "patterns": [
                  {
                    "include": "#ascii-regex-internals"
                  }
                ]
              },
              "7": {
                "name": "punctuation.definition.string.end.stata"
              },
              "8": {
                "name": "invalid.illegal.punctuation.stata"
              },
              "9": {
                "name": "punctuation.definition.parameters.end.stata"
              }
            },
            "comment": "color regexm with regular quotes i.e. \" ",
            "match": "\\b(regexm)(\\()([^,]+)(,)\\s*(\")([^\"]+)(\"(')?)\\s*(\\))"
          },
          {
            "captures": {
              "1": {
                "name": "support.function.builtin.stata"
              },
              "2": {
                "name": "punctuation.definition.parameters.begin.stata"
              },
              "3": {
                "patterns": [
                  {
                    "include": "#string-compound"
                  },
                  {
                    "include": "#string-regular"
                  },
                  {
                    "include": "#macro-local"
                  },
                  {
                    "include": "#macro-global"
                  },
                  {
                    "include": "#functions"
                  },
                  {
                    "match": "[\\w&&[^0-9]]\\w{0,31}",
                    "name": "variable.parameter.function.stata"
                  },
                  {
                    "include": "#comments-triple-slash"
                  }
                ]
              },
              "4": {
                "name": "punctuation.definition.variable.begin.stata"
              },
              "5": {
                "name": "punctuation.definition.string.begin.stata"
              },
              "6": {
                "patterns": [
                  {
                    "include": "#ascii-regex-internals"
                  }
                ]
              },
              "7": {
                "name": "punctuation.definition.string.end.stata"
              },
              "8": {
                "name": "punctuation.definition.parameters.end.stata"
              }
            },
            "comment": "color regexm with compound quotes",
            "match": "\\b(regexm)(\\()([^,]+)(,)\\s*(`\")([^\"]+)(\"')\\s*(\\))"
          },
          {
            "captures": {
              "1": {
                "name": "support.function.builtin.stata"
              },
              "2": {
                "name": "punctuation.definition.parameters.begin.stata"
              },
              "3": {
                "patterns": [
                  {
                    "include": "#string-compound"
                  },
                  {
                    "include": "#string-regular"
                  },
                  {
                    "include": "#macro-local"
                  },
                  {
                    "include": "#macro-global"
                  },
                  {
                    "include": "#functions"
                  },
                  {
                    "match": "[\\w&&[^0-9]]\\w{0,31}",
                    "name": "variable.parameter.function.stata"
                  },
                  {
                    "include": "#comments"
                  }
                ]
              },
              "4": {
                "name": "punctuation.definition.variable.begin.stata"
              },
              "5": {
                "name": "punctuation.definition.string.begin.stata"
              },
              "6": {
                "patterns": [
                  {
                    "include": "#ascii-regex-internals"
                  }
                ]
              },
              "7": {
                "name": "punctuation.definition.string.end.stata"
              },
              "8": {
                "name": "invalid.illegal.punctuation.stata"
              },
              "9": {
                "patterns": [
                  {
                    "match": ",",
                    "name": "punctuation.definition.variable.begin.stata"
                  },
                  {
                    "include": "#string-compound"
                  },
                  {
                    "include": "#string-regular"
                  },
                  {
                    "include": "#macro-local"
                  },
                  {
                    "include": "#macro-global"
                  },
                  {
                    "include": "#functions"
                  },
                  {
                    "match": "[\\w&&[^0-9]]\\w{0,31}",
                    "name": "variable.parameter.function.stata"
                  },
                  {
                    "include": "#comments-triple-slash"
                  }
                ]
              },
              "10": {
                "name": "punctuation.definition.parameters.end.stata"
              }
            },
            "comment": "color regexr with regular quotes i.e. \" ",
            "match": "\\b(regexr)(\\()([^,]+)(,)\\s*(\")([^\"]+)(\"(')?)\\s*([^\\)]*)(\\))"
          },
          {
            "captures": {
              "1": {
                "name": "support.function.builtin.stata"
              },
              "2": {
                "name": "punctuation.definition.parameters.begin.stata"
              },
              "3": {
                "patterns": [
                  {
                    "include": "#string-compound"
                  },
                  {
                    "include": "#string-regular"
                  },
                  {
                    "include": "#macro-local"
                  },
                  {
                    "include": "#macro-global"
                  },
                  {
                    "include": "#functions"
                  },
                  {
                    "match": "[\\w&&[^0-9]]\\w{0,31}",
                    "name": "variable.parameter.function.stata"
                  },
                  {
                    "include": "#comments"
                  }
                ]
              },
              "4": {
                "name": "punctuation.definition.variable.begin.stata"
              },
              "5": {
                "name": "punctuation.definition.string.begin.stata"
              },
              "6": {
                "patterns": [
                  {
                    "include": "#ascii-regex-internals"
                  }
                ]
              },
              "7": {
                "name": "punctuation.definition.string.end.stata"
              },
              "8": {
                "patterns": [
                  {
                    "match": ",",
                    "name": "punctuation.definition.variable.begin.stata"
                  },
                  {
                    "include": "#string-compound"
                  },
                  {
                    "include": "#string-regular"
                  },
                  {
                    "include": "#macro-local"
                  },
                  {
                    "include": "#macro-global"
                  },
                  {
                    "include": "#functions"
                  },
                  {
                    "match": "[\\w&&[^0-9]]\\w{0,31}",
                    "name": "variable.parameter.function.stata"
                  },
                  {
                    "include": "#comments-triple-slash"
                  }
                ]
              },
              "9": {
                "name": "punctuation.definition.parameters.end.stata"
              }
            },
            "comment": "color regexr with compound quotes i.e. `\"text\"' ",
            "match": "\\b(regexr)(\\()([^,]+)(,)\\s*(`\")([^\"]+)(\"')\\s*([^\\)]*)(\\))"
          }
        ]
      },
      "ascii-regex-internals": {
        "patterns": [
          {
            "match": "\\^",
            "name": "keyword.control.anchor.stata"
          },
          {
            "comment": "matched when not a global, but must be ascii",
            "match": "\\$(?![a-zA-Z_\\{])",
            "name": "keyword.control.anchor.stata"
          },
          {
            "match": "[\\?\\+\\*]",
            "name": "keyword.control.quantifier.stata"
          },
          {
            "match": "\\|",
            "name": "keyword.control.or.stata"
          },
          {
            "begin": "(\\()(?=\\?|\\*|\\+)",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.group.stata"
              }
            },
            "contentName": "invalid.illegal.regexm.stata",
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "keyword.operator.group.stata"
              }
            }
          },
          {
            "begin": "(\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.group.stata"
              }
            },
            "end": "(\\))",
            "endCaptures": {
              "1": {
                "name": "keyword.operator.group.stata"
              }
            },
            "patterns": [
              {
                "include": "#ascii-regex-internals"
              }
            ]
          },
          {
            "include": "#ascii-regex-character-class"
          },
          {
            "include": "#macro-local"
          },
          {
            "include": "#macro-global"
          },
          {
            "comment": "NOTE: Error if I have .+ No idea why but it works fine it seems with just .",
            "match": ".",
            "name": "string.quoted.stata"
          }
        ]
      },
      "braces-with-error": {
        "patterns": [
          {
            "begin": "(\\{)\\s*([^\\n]*)(?=\\n)",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.block.begin.stata"
              },
              "2": {
                "patterns": [
                  {
                    "include": "#comments"
                  },
                  {
                    "match": "[^\\n]+",
                    "name": "illegal.invalid.name.stata"
                  }
                ]
              }
            },
            "comment": "correct with nothing else on the line but whitespace; before and after; before; after; correct",
            "end": "^\\s*(\\})\\s*$|^\\s*([^\\*\"\\}]+)\\s+(\\})\\s*([^\\*\"\\}/\\n]+)|^\\s*([^\"\\*\\}]+)\\s+(\\})|\\s*(\\})\\s*([^\"\\*\\}/\\n]+)|(\\})$",
            "endCaptures": {
              "1": {
                "name": "keyword.control.block.end.stata"
              },
              "2": {
                "name": "invalid.illegal.name.stata"
              },
              "3": {
                "name": "keyword.control.block.end.stata"
              },
              "4": {
                "name": "invalid.illegal.name.stata"
              },
              "5": {
                "name": "invalid.illegal.name.stata"
              },
              "6": {
                "name": "keyword.control.block.end.stata"
              },
              "7": {
                "name": "keyword.control.block.end.stata"
              },
              "8": {
                "name": "invalid.illegal.name.stata"
              },
              "9": {
                "name": "keyword.control.block.end.stata"
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
      "braces-without-error": {
        "patterns": [
          {
            "begin": "\\{",
            "beginCaptures": {
              "0": {
                "name": "keyword.control.block.begin.stata"
              }
            },
            "end": "\\}",
            "endCaptures": {
              "0": {
                "name": "keyword.control.block.end.stata"
              }
            }
          }
        ]
      },
      "builtin_types": {
        "patterns": [
          {
            "match": "\\b(byte|int|long|float|double|str[1-9]?[0-9]?[0-9]?[0-9]?|strL)\\b",
            "name": "support.type.stata"
          }
        ]
      },
      "builtin_variables": {
        "patterns": [
          {
            "match": "\\b(_b|_coef|_cons|_n|_N|_rc|_se)\\b",
            "name": "variable.object.stata"
          }
        ]
      },
      "commands-other": {
        "patterns": [
          {
            "comment": "Add on commands",
            "match": "\\b(reghdfe|ivreghdfe|ivreg2|outreg|gcollapse|gcontract|gegen|gisid|glevelsof|gquantiles)\\b",
            "name": "keyword.control.flow.stata"
          },
          {
            "comment": "Built in commands",
            "match": "\\b(about|ac|acprplot|ado|adopath|adoupdate|alpha|ameans|an|ano|anov|anova|anova_terms|anovadef|aorder|ap|app|appe|appen|append|arch|arch_dr|arch_estat|arch_p|archlm|areg|areg_p|args|arima|arima_dr|arima_estat|arima_p|asmprobit|asmprobit_estat|asmprobit_lf|asmprobit_mfx__dlg|asmprobit_p|avplot|avplots|bcskew0|bgodfrey|binreg|bip0_lf|biplot|bipp_lf|bipr_lf|bipr_p|biprobit|bitest|bitesti|bitowt|blogit|bmemsize|boot|bootsamp|boxco_l|boxco_p|boxcox|boxcox_p|bprobit|br|break|brier|bro|brow|brows|browse|brr|brrstat|bs|bsampl_w|bsample|bsqreg|bstat|bstrap|ca|ca_estat|ca_p|cabiplot|camat|canon|canon_estat|canon_p|caprojection|cat|cc|cchart|cci|cd|censobs_table|centile|cf|char|chdir|checkdlgfiles|checkestimationsample|checkhlpfiles|checksum|chelp|ci|cii|cl|class|classutil|clear|cli|clis|clist|clog|clog_lf|clog_p|clogi|clogi_sw|clogit|clogit_lf|clogit_p|clogitp|clogl_sw|cloglog|clonevar|clslistarray|cluster|cluster_measures|cluster_stop|cluster_tree|cluster_tree_8|clustermat|cmdlog|cnr|cnre|cnreg|cnreg_p|cnreg_sw|cnsreg|codebook|collaps4|collapse|colormult_nb|colormult_nw|compare|compress|conf|confi|confir|confirm|conren|cons|const|constr|constra|constrai|constrain|constraint|contract|copy|copyright|copysource|cor|corc|corr|corr2data|corr_anti|corr_kmo|corr_smc|corre|correl|correla|correlat|correlate|corrgram|cou|coun|count|cprplot|crc|cret|cretu|cretur|creturn|cross|cs|cscript|cscript_log|csi|ct|ct_is|ctset|ctst_st|cttost|cumsp|cumul|cusum|cutil|d|datasig|datasign|datasigna|datasignat|datasignatu|datasignatur|datasignature|datetof|db|dbeta|de|dec|deco|decod|decode|deff|des|desc|descr|descri|describ|describe|dfbeta|dfgls|dfuller|di|di_g|dir|dirstats|dis|discard|disp|disp_res|disp_s|displ|displa|display|do|doe|doed|doedi|doedit|dotplot|dprobit|drawnorm|ds|ds_util|dstdize|duplicates|durbina|dwstat|dydx|ed|edi|edit|eivreg|emdef|en|enc|enco|encod|encode|eq|erase|ereg|ereg_lf|ereg_p|ereg_sw|ereghet|ereghet_glf|ereghet_glf_sh|ereghet_gp|ereghet_ilf|ereghet_ilf_sh|ereghet_ip|eret|eretu|eretur|ereturn|err|erro|error|est|est_cfexist|est_cfname|est_clickable|est_expand|est_hold|est_table|est_unhold|est_unholdok|estat|estat_default|estat_summ|estat_vce_only|esti|estimates|etodow|etof|etomdy|expand|expandcl|fac|fact|facto|factor|factor_estat|factor_p|factor_pca_rotated|factor_rotate|factormat|fcast|fcast_compute|fcast_graph|fdades|fdadesc|fdadescr|fdadescri|fdadescrib|fdadescribe|fdasav|fdasave|fdause|fh_st|file|filefilter|fillin|find_hlp_file|findfile|findit|fit|fl|fli|flis|flist|fpredict|frac_adj|frac_chk|frac_cox|frac_ddp|frac_dis|frac_dv|frac_in|frac_mun|frac_pp|frac_pq|frac_pv|frac_wgt|frac_xo|fracgen|fracplot|fracpoly|fracpred|fron_ex|fron_hn|fron_p|fron_tn|fron_tn2|frontier|ftodate|ftoe|ftomdy|ftowdate|gamhet_glf|gamhet_gp|gamhet_ilf|gamhet_ip|gamma|gamma_d2|gamma_p|gamma_sw|gammahet|gdi_hexagon|gdi_spokes|genrank|genstd|genvmean|gettoken|gladder|glim_l01|glim_l02|glim_l03|glim_l04|glim_l05|glim_l06|glim_l07|glim_l08|glim_l09|glim_l10|glim_l11|glim_l12|glim_lf|glim_mu|glim_nw1|glim_nw2|glim_nw3|glim_p|glim_v1|glim_v2|glim_v3|glim_v4|glim_v5|glim_v6|glim_v7|glm|glm_p|glm_sw|glmpred|glogit|glogit_p|gmeans|gnbre_lf|gnbreg|gnbreg_p|gomp_lf|gompe_sw|gomper_p|gompertz|gompertzhet|gomphet_glf|gomphet_glf_sh|gomphet_gp|gomphet_ilf|gomphet_ilf_sh|gomphet_ip|gphdot|gphpen|gphprint|gprefs|gprobi_p|gprobit|gr|gr7|gr_copy|gr_current|gr_db|gr_describe|gr_dir|gr_draw|gr_draw_replay|gr_drop|gr_edit|gr_editviewopts|gr_example|gr_example2|gr_export|gr_print|gr_qscheme|gr_query|gr_read|gr_rename|gr_replay|gr_save|gr_set|gr_setscheme|gr_table|gr_undo|gr_use|graph|grebar|greigen|grmeanby|gs_fileinfo|gs_filetype|gs_graphinfo|gs_stat|gsort|gwood|h|hareg|hausman|haver|he|heck_d2|heckma_p|heckman|heckp_lf|heckpr_p|heckprob|hel|help|hereg|hetpr_lf|hetpr_p|hetprob|hettest|hexdump|hilite|hist|histogram|hlogit|hlu|hmeans|hotel|hotelling|hprobit|hreg|hsearch|icd9|icd9_ff|icd9p|iis|impute|imtest|inbase|include|inf|infi|infil|infile|infix|inp|inpu|input|ins|insheet|insp|inspe|inspec|inspect|integ|inten|intreg|intreg_p|intrg2_ll|intrg_ll|intrg_ll2|ipolate|iqreg|ir|irf|irf_create|irfm|iri|is_svy|is_svysum|isid|istdize|ivprobit|ivprobit_p|ivreg|ivreg_footnote|ivtob_lf|ivtobit|ivtobit_p|jacknife|jknife|jkstat|joinby|kalarma1|kap|kapmeier|kappa|kapwgt|kdensity|ksm|ksmirnov|ktau|kwallis|labelbook|ladder|levelsof|leverage|lfit|lfit_p|li|lincom|line|linktest|lis|list|lloghet_glf|lloghet_glf_sh|lloghet_gp|lloghet_ilf|lloghet_ilf_sh|lloghet_ip|llogi_sw|llogis_p|llogist|llogistic|llogistichet|lnorm_lf|lnorm_sw|lnorma_p|lnormal|lnormalhet|lnormhet_glf|lnormhet_glf_sh|lnormhet_gp|lnormhet_ilf|lnormhet_ilf_sh|lnormhet_ip|lnskew0|loadingplot|(?<!\\.)log|logi|logis_lf|logistic|logistic_p|logit|logit_estat|logit_p|loglogs|logrank|loneway|lookfor|lookup|lowess|lpredict|lrecomp|lroc|lrtest|ls|lsens|lsens_x|lstat|ltable|ltriang|lv|lvr2plot|m|ma|mac|macr|macro|makecns|man|manova|manovatest|mantel|mark|markin|markout|marksample|mat|mat_capp|mat_order|mat_put_rr|mat_rapp|mata|mata_clear|mata_describe|mata_drop|mata_matdescribe|mata_matsave|mata_matuse|mata_memory|mata_mlib|mata_mosave|mata_rename|mata_which|matalabel|matcproc|matlist|matname|matr|matri|matrix|matrix_input__dlg|matstrik|mcc|mcci|md0_|md1_|md1debug_|md2_|md2debug_|mds|mds_estat|mds_p|mdsconfig|mdslong|mdsmat|mdsshepard|mdytoe|mdytof|me_derd|mean|means|median|memory|memsize|mfp|mfx|mhelp|mhodds|minbound|mixed_ll|mixed_ll_reparm|mkassert|mkdir|mkmat|mkspline|ml|ml_adjs|ml_bhhhs|ml_c_d|ml_check|ml_clear|ml_cnt|ml_debug|ml_defd|ml_e0|ml_e0_bfgs|ml_e0_cycle|ml_e0_dfp|ml_e0i|ml_e1|ml_e1_bfgs|ml_e1_bhhh|ml_e1_cycle|ml_e1_dfp|ml_e2|ml_e2_cycle|ml_ebfg0|ml_ebfr0|ml_ebfr1|ml_ebh0q|ml_ebhh0|ml_ebhr0|ml_ebr0i|ml_ecr0i|ml_edfp0|ml_edfr0|ml_edfr1|ml_edr0i|ml_eds|ml_eer0i|ml_egr0i|ml_elf|ml_elf_bfgs|ml_elf_bhhh|ml_elf_cycle|ml_elf_dfp|ml_elfi|ml_elfs|ml_enr0i|ml_enrr0|ml_erdu0|ml_erdu0_bfgs|ml_erdu0_bhhh|ml_erdu0_bhhhq|ml_erdu0_cycle|ml_erdu0_dfp|ml_erdu0_nrbfgs|ml_exde|ml_footnote|ml_geqnr|ml_grad0|ml_graph|ml_hbhhh|ml_hd0|ml_hold|ml_init|ml_inv|ml_log|ml_max|ml_mlout|ml_mlout_8|ml_model|ml_nb0|ml_opt|ml_p|ml_plot|ml_query|ml_rdgrd|ml_repor|ml_s_e|ml_score|ml_searc|ml_technique|ml_unhold|mleval|mlf_|mlmatbysum|mlmatsum|mlog|mlogi|mlogit|mlogit_footnote|mlogit_p|mlopts|mlsum|mlvecsum|mnl0_|mor|more|mov|move|mprobit|mprobit_lf|mprobit_p|mrdu0_|mrdu1_|mvdecode|mvencode|mvreg|mvreg_estat|nbreg|nbreg_al|nbreg_lf|nbreg_p|nbreg_sw|nestreg|net|newey|newey_p|news|nl|nlcom|nlcom_p|nlexp2|nlexp2a|nlexp3|nlgom3|nlgom4|nlinit|nllog3|nllog4|nlog_rd|nlogit|nlogit_p|nlogitgen|nlogittree|nlpred|nobreak|notes_dlg|nptrend|numlabel|numlist|old_ver|olo|olog|ologi|ologi_sw|ologit|ologit_p|ologitp|on|one|onew|onewa|oneway|op_colnm|op_comp|op_diff|op_inv|op_str|opr|opro|oprob|oprob_sw|oprobi|oprobi_p|oprobit|oprobitp|opts_exclusive|order|orthog|orthpoly|ou|out|outf|outfi|outfil|outfile|outs|outsh|outshe|outshee|outsheet|ovtest|pac|palette|parse_dissim|pause|pca|pca_display|pca_estat|pca_p|pca_rotate|pcamat|pchart|pchi|pcorr|pctile|pentium|pergram|personal|peto_st|pkcollapse|pkcross|pkequiv|pkexamine|pkshape|pksumm|plugin|pnorm|poisgof|poiss_lf|poiss_sw|poisso_p|poisson|poisson_estat|post|postclose|postfile|postutil|pperron|prais|prais_e|prais_e2|prais_p|predict|predictnl|preserve|print|prob|probi|probit|probit_estat|probit_p|proc_time|procoverlay|procrustes|procrustes_estat|procrustes_p|profiler|prop|proportion|prtest|prtesti|pwcorr|pwd|qs|qby|qbys|qchi|qladder|qnorm|qqplot|qreg|qreg_c|qreg_p|qreg_sw|qu|quadchk|quantile|que|quer|query|range|ranksum|ratio|rchart|rcof|recast|recode|reg|reg3|reg3_p|regdw|regr|regre|regre_p2|regres|regres_p|regress|regress_estat|regriv_p|remap|ren|rena|renam|rename|renpfix|repeat|reshape|restore|ret|retu|retur|return|rmdir|robvar|roccomp|rocf_lf|rocfit|rocgold|rocplot|roctab|rologit|rologit_p|rot|rota|rotat|rotate|rotatemat|rreg|rreg_p|ru|run|runtest|rvfplot|rvpplot|safesum|sample|sampsi|savedresults|sc|scatter|scm_mine|sco|scob_lf|scob_p|scobi_sw|scobit|scor|score|scoreplot|scoreplot_help|scree|screeplot|screeplot_help|sdtest|sdtesti|se|search|separate|seperate|serrbar|serset|set|set_defaults|sfrancia|sh|she|shel|shell|shewhart|signestimationsample|signrank|signtest|simul|sktest|sleep|slogit|slogit_d2|slogit_p|smooth|snapspan|so|sor|sort|spearman|spikeplot|spikeplt|spline_x|split|sqreg|sqreg_p|sret|sretu|sretur|sreturn|ssc|st|st_ct|st_hc|st_hcd|st_hcd_sh|st_is|st_issys|st_note|st_promo|st_set|st_show|st_smpl|st_subid|stack|stbase|stci|stcox|stcox_estat|stcox_fr|stcox_fr_ll|stcox_p|stcox_sw|stcoxkm|stcstat|stcurv|stcurve|stdes|stem|stepwise|stfill|stgen|stir|stjoin|stmc|stmh|stphplot|stphtest|stptime|strate|streg|streg_sw|streset|sts|stset|stsplit|stsum|sttocc|sttoct|stvary|su|suest|sum|summ|summa|summar|summari|summariz|summarize|sunflower|sureg|survcurv|survsum|svar|svar_p|svmat|svy_disp|svy_dreg|svy_est|svy_est_7|svy_estat|svy_get|svy_gnbreg_p|svy_head|svy_header|svy_heckman_p|svy_heckprob_p|svy_intreg_p|svy_ivreg_p|svy_logistic_p|svy_logit_p|svy_mlogit_p|svy_nbreg_p|svy_ologit_p|svy_oprobit_p|svy_poisson_p|svy_probit_p|svy_regress_p|svy_sub|svy_sub_7|svy_x|svy_x_7|svy_x_p|svydes|svygen|svygnbreg|svyheckman|svyheckprob|svyintreg|svyintrg|svyivreg|svylc|svylog_p|svylogit|svymarkout|svymean|svymlog|svymlogit|svynbreg|svyolog|svyologit|svyoprob|svyoprobit|svyopts|svypois|svypoisson|svyprobit|svyprobt|svyprop|svyratio|svyreg|svyreg_p|svyregress|svyset|svytab|svytest|svytotal|sw|swilk|symmetry|symmi|symplot|sysdescribe|sysdir|sysuse|szroeter|ta|tab|tab1|tab2|tab_or|tabd|tabdi|tabdis|tabdisp|tabi|table|tabodds|tabstat|tabu|tabul|tabula|tabulat|tabulate|te|tes|test|testnl|testparm|teststd|tetrachoric|time_it|timer|tis|tob|tobi|tobit|tobit_p|tobit_sw|token|tokeni|tokeniz|tokenize|total|translate|translator|transmap|treat_ll|treatr_p|treatreg|trim|trnb_cons|trnb_mean|trpoiss_d2|trunc_ll|truncr_p|truncreg|tsappend|tset|tsfill|tsline|tsline_ex|tsreport|tsrevar|tsrline|tsset|tssmooth|tsunab|ttest|ttesti|tut_chk|tut_wait|tutorial|tw|tware_st|two|twoway|twoway__fpfit_serset|twoway__function_gen|twoway__histogram_gen|twoway__ipoint_serset|twoway__ipoints_serset|twoway__kdensity_gen|twoway__lfit_serset|twoway__normgen_gen|twoway__pci_serset|twoway__qfit_serset|twoway__scatteri_serset|twoway__sunflower_gen|twoway_ksm_serset|ty|typ|type|typeof|unab|unabbrev|unabcmd|update|uselabel|var|var_mkcompanion|var_p|varbasic|varfcast|vargranger|varirf|varirf_add|varirf_cgraph|varirf_create|varirf_ctable|varirf_describe|varirf_dir|varirf_drop|varirf_erase|varirf_graph|varirf_ograph|varirf_rename|varirf_set|varirf_table|varlmar|varnorm|varsoc|varstable|varstable_w|varstable_w2|varwle|vec|vec_fevd|vec_mkphi|vec_p|vec_p_w|vecirf_create|veclmar|veclmar_w|vecnorm|vecnorm_w|vecrank|vecstable|verinst|vers|versi|versio|version|view|viewsource|vif|vwls|wdatetof|webdescribe|webseek|webuse|wh|whelp|whi|which|wilc_st|wilcoxon|win|wind|windo|window|winexec|wntestb|wntestq|xchart|xcorr|xi|xmlsav|xmlsave|xmluse|xpose|xsh|xshe|xshel|xshell|xt_iis|xt_tis|xtab_p|xtabond|xtbin_p|xtclog|xtcloglog|xtcloglog_d2|xtcloglog_pa_p|xtcloglog_re_p|xtcnt_p|xtcorr|xtdata|xtdes|xtfront_p|xtfrontier|xtgee|xtgee_elink|xtgee_estat|xtgee_makeivar|xtgee_p|xtgee_plink|xtgls|xtgls_p|xthaus|xthausman|xtht_p|xthtaylor|xtile|xtint_p|xtintreg|xtintreg_d2|xtintreg_p|xtivreg|xtline|xtline_ex|xtlogit|xtlogit_d2|xtlogit_fe_p|xtlogit_pa_p|xtlogit_re_p|xtmixed|xtmixed_estat|xtmixed_p|xtnb_fe|xtnb_lf|xtnbreg|xtnbreg_pa_p|xtnbreg_refe_p|xtpcse|xtpcse_p|xtpois|xtpoisson|xtpoisson_d2|xtpoisson_pa_p|xtpoisson_refe_p|xtpred|xtprobit|xtprobit_d2|xtprobit_re_p|xtps_fe|xtps_lf|xtps_ren|xtps_ren_8|xtrar_p|xtrc|xtrc_p|xtrchh|xtrefe_p|yx|yxview__barlike_draw|yxview_area_draw|yxview_bar_draw|yxview_dot_draw|yxview_dropline_draw|yxview_function_draw|yxview_iarrow_draw|yxview_ilabels_draw|yxview_normal_draw|yxview_pcarrow_draw|yxview_pcbarrow_draw|yxview_pccapsym_draw|yxview_pcscatter_draw|yxview_pcspike_draw|yxview_rarea_draw|yxview_rbar_draw|yxview_rbarm_draw|yxview_rcap_draw|yxview_rcapsym_draw|yxview_rconnected_draw|yxview_rline_draw|yxview_rscatter_draw|yxview_rspike_draw|yxview_spike_draw|yxview_sunflower_draw|zap_s|zinb|zinb_llf|zinb_plf|zip|zip_llf|zip_p|zip_plf|zt_ct_5|zt_hc_5|zt_hcd_5|zt_is_5|zt_iss_5|zt_sho_5|zt_smp_5|ztnb|ztnb_p|ztp|ztp_p|prtab|prchange|eststo|estout|esttab|estadd|estpost|ivregress|xtreg|xtreg_be|xtreg_fe|xtreg_ml|xtreg_pa_p|xtreg_re|xtregar|xtrere_p|xtset|xtsf_ll|xtsf_llti|xtsum|xttab|xttest0|xttobit|xttobit_p|xttrans)\\b",
            "name": "keyword.control.flow.stata"
          }
        ]
      },
      "comments": {
        "patterns": [
          {
            "include": "#comments-double-slash"
          },
          {
            "include": "#comments-star"
          },
          {
            "include": "#comments-block"
          },
          {
            "include": "#comments-triple-slash"
          }
        ]
      },
      "comments-block": {
        "patterns": [
          {
            "begin": "/\\*",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.comment.begin.stata"
              }
            },
            "end": "(\\*/\\s+\\*[^\\n]*)|(\\*/(?!\\*))",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.comment.end.stata"
              }
            },
            "name": "comment.block.stata",
            "patterns": [
              {
                "comment": "this ends and restarts a comment block. but need to catch this so that it doesn't start _another_ level of comment blocks",
                "match": "\\*/\\*"
              },
              {
                "include": "#docblockr-comment"
              },
              {
                "include": "#comments-block"
              },
              {
                "include": "#docstring"
              }
            ]
          }
        ]
      },
      "comments-double-slash": {
        "patterns": [
          {
            "begin": "(^//|(?<=\\s)//)(?!/)",
            "captures": {
              "0": {
                "name": "punctuation.definition.comment.stata"
              }
            },
            "end": "(?=\\n)",
            "name": "comment.line.double-slash.stata",
            "patterns": [
              {
                "include": "#docblockr-comment"
              }
            ]
          }
        ]
      },
      "comments-star": {
        "patterns": [
          {
            "begin": "^\\s*(\\*)",
            "captures": {
              "0": {
                "name": "punctuation.definition.comment.stata"
              }
            },
            "comment": "TODO! need to except out the occasion that a * comes after a /// on the previous line. May be easiest to join with the comment.line.triple-slash.stata below",
            "end": "(?=\\n)",
            "name": "comment.line.star.stata",
            "patterns": [
              {
                "include": "#docblockr-comment"
              },
              {
                "begin": "///",
                "end": "\\n",
                "name": "comment.line-continuation.stata"
              },
              {
                "include": "#comments"
              }
            ]
          }
        ]
      },
      "comments-triple-slash": {
        "patterns": [
          {
            "begin": "(^///|(?<=\\s)///)",
            "captures": {
              "0": {
                "name": "punctuation.definition.comment.stata"
              }
            },
            "end": "(?=\\n)",
            "name": "comment.line.triple-slash.stata",
            "patterns": [
              {
                "include": "#docblockr-comment"
              }
            ]
          }
        ]
      },
      "constants": {
        "patterns": [
          {
            "include": "#factorvariables"
          },
          {
            "match": "\\b(?i:(\\d+\\.\\d*(e[\\-\\+]?\\d+)?))(?=[^a-zA-Z_])",
            "name": "constant.numeric.float.stata"
          },
          {
            "match": "(?<=[^0-9a-zA-Z_])(?i:(\\.\\d+(e[\\-\\+]?\\d+)?))",
            "name": "constant.numeric.float.stata"
          },
          {
            "match": "\\b(?i:(\\d+e[\\-\\+]?\\d+))",
            "name": "constant.numeric.float.stata"
          },
          {
            "match": "\\b(\\d+)\\b",
            "name": "constant.numeric.integer.decimal.stata"
          },
          {
            "match": "(?<![\\w])(\\.(?![\\./]))(?![\\w])",
            "name": "constant.language.missing.stata"
          },
          {
            "match": "\\b_all\\b",
            "name": "constant.language.allvars.stata"
          }
        ]
      },
      "docblockr-comment": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "invalid.illegal.name.stata"
              }
            },
            "match": "(?<!\\w)(@(error|ERROR|Error))\\b"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.docblockr.stata"
              }
            },
            "match": "(?<!\\w)(@\\w+)\\b"
          }
        ]
      },
      "docstring": {
        "patterns": [
          {
            "begin": "'''",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.stata"
              }
            },
            "end": "'''",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.stata"
              }
            },
            "name": "string.quoted.docstring.stata"
          },
          {
            "begin": "\"\"\"",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.stata"
              }
            },
            "end": "\"\"\"",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.stata"
              }
            },
            "name": "string.quoted.docstring.stata"
          }
        ]
      },
      "factorvariables": {
        "patterns": [
          {
            "match": "\\b(i|c|o)\\.(?=[\\w&&[^0-9]]|\\([\\w&&[^0-9]])",
            "name": "constant.language.factorvars.stata"
          },
          {
            "captures": {
              "0": {
                "name": "constant.language.factorvars.stata"
              },
              "3": {
                "patterns": [
                  {
                    "include": "#constants"
                  }
                ]
              }
            },
            "match": "\\b(i?b)((\\d+)|n)\\.(?=[\\w&&[^0-9]]|\\([\\w&&[^0-9]])"
          },
          {
            "captures": {
              "0": {
                "name": "constant.language.factorvars.stata"
              },
              "2": {
                "name": "keyword.operator.parentheses.stata"
              },
              "3": {
                "patterns": [
                  {
                    "include": "#constants"
                  },
                  {
                    "include": "#operators"
                  }
                ]
              },
              "4": {
                "name": "keyword.operator.parentheses.stata"
              }
            },
            "match": "\\b(i?b)(\\()(#\\d+|first|last|freq)(\\))\\.(?=[\\w&&[^0-9]]|\\([\\w&&[^0-9]])"
          },
          {
            "captures": {
              "0": {
                "name": "constant.language.factorvars.stata"
              },
              "2": {
                "patterns": [
                  {
                    "include": "#constants"
                  }
                ]
              }
            },
            "match": "\\b(i?o?)(\\d+)\\.(?=[\\w&&[^0-9]]|\\([\\w&&[^0-9]])"
          },
          {
            "captures": {
              "1": {
                "name": "constant.language.factorvars.stata"
              },
              "2": {
                "name": "keyword.operator.parentheses.stata"
              },
              "3": {
                "patterns": [
                  {
                    "include": "$self"
                  }
                ]
              },
              "4": {
                "name": "keyword.operator.parentheses.stata"
              },
              "5": {
                "name": "constant.language.factorvars.stata"
              }
            },
            "match": "\\b(i?o?)(\\()(.*?)(\\))(\\.)(?=[\\w&&[^0-9]]|\\([\\w&&[^0-9]])"
          }
        ]
      },
      "functions": {
        "patterns": [
          {
            "begin": "\\b((abbrev|abs|acos|acosh|asin|asinh|atan|atan2|atanh|autocode|betaden|binomial|binomialp|binomialtail|binormalbofd|byteorder|c|cauchy|cauchyden|cauchytail|Cdhms|ceil|char|chi2|chi2den|chi2tail|Chms|cholesky|chop|clip|clock|Clock|cloglog|Cmdyhms|cofC|Cofc|cofd|Cofd|coleqnumb|collatorlocale|collatorversion|colnfreeparms|colnumb|colsof|comb|cond|corr|cos|cosh|daily|date|day|det|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|dhms|diag|diag0cnt|digamma|dofb|dofc|dofC|dofh|dofm|dofq|dofw|dofy|dow|doy|dunnettprob|e|el|epsdouble|epsfloat|exp|exponential|exponentialden|exponentialtail|F|Fden|fileexists|fileread|filereaderror|filewrite|float|floor|fmtwidth|Ftail|gammaden|gammap|gammaptail|get|hadamard|halfyear|halfyearly|hh|hhC|hms|hofd|hours|hypergeometric|hypergeometricp|I|ibeta|ibetatail|igaussian|igaussianden|igaussiantail|indexnot|inlist|inrange|int|inv|invbinomial|invbinomialtail|invcauchy|invcauchytail|invchi2|invchi2tail|invcloglog|invdunnettprob|invexponential|invexponentialtail|invF|invFtail|invgammap|invgammaptail|invibeta|invibetatail|invigaussian|invigaussiantail|invlaplace|invlaplacetail|invlogistic|invlogistictail|invlogit|invnbinomial|invnbinomialtail|invnchi2|invnchi2tail|invnF|invnFtail|invnibeta|invnormal|invnt|invnttail|invpoisson|invpoissontail|invsym|invt|invttail|invtukeyprob|invweibull|invweibullph|invweibullphtail|invweibulltail|irecode|issymmetric|itrim|J|laplace|laplaceden|laplacetail|length|ln|lncauchyden|lnfactorial|lngamma|lnigammaden|lnigaussianden|lniwishartden|lnlaplaceden|lnmvnormalden|lnnormal|lnnormalden|lnwishartden|log|log10|logistic|logisticden|logistictail|logit|lower|ltrim|matmissing|matrix|matuniform|max|maxbyte|maxdouble|maxfloat|maxint|maxlong|mdy|mdyhms|mi|min|minbyte|mindouble|minfloat|minint|minlong|minutes|missing|mm|mmC|mod|mofd|month|monthly|mreldif|msofhours|msofminutes|msofseconds|nbetaden|nbinomial|nbinomialp|nbinomialtail|nchi2|nchi2den|nchi2tail|nF|nFden|nFtail|nibeta|normal|normalden|npnchi2|npnF|npnt|nt|ntden|nttail|nullmat|plural|poisson|poissonp|poissontail|proper|qofd|quarter|quarterly|r|rbeta|rbinomial|rcauchy|rchi2|real|recode|regexs|reldif|replay|return|reverse|rexponential|rgamma|rhypergeometric|rigaussian|rlaplace|rlogistic|rnbinomial|rnormal|round|roweqnumb|rownfreeparms|rownumb|rowsof|rpoisson|rt|rtrim|runiform|runiformint|rweibull|rweibullph|s|scalar|seconds|sign|sin|sinh|smallestdouble|soundex|sqrt|ss|ssC|string|stritrim|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrpos|strrtrim|strtoname|strtrim|strupper|subinstr|subinword|substr|sum|sweep|t|tan|tanh|tc|tC|td|tden|th|tin|tm|tobytes|tq|trace|trigamma|trim|trunc|ttail|tukeyprob|tw|twithin|uchar|udstrlen|udsubstr|uisdigit|uisletter|upper|ustrcompare|ustrcompareex|ustrfix|ustrfrom|ustrinvalidcnt|ustrleft|ustrlen|ustrlower|ustrltrim|ustrnormalize|ustrpos|ustrregexs|ustrreverse|ustrright|ustrrpos|ustrrtrim|ustrsortkey|ustrsortkeyex|ustrtitle|ustrto|ustrtohex|ustrtoname|ustrtrim|ustrunescape|ustrupper|ustrword|ustrwordcount|usubinstr|usubstr|vec|vecdiag|week|weekly|weibull|weibullden|weibullph|weibullphden|weibullphtail|weibulltail|wofd|word|wordbreaklocale|wordcount|year|yearly|yh|ym|yofd|yq|yw)|([\\w&&[^0-9]]\\w{0,31}))(\\()",
            "beginCaptures": {
              "2": {
                "name": "support.function.builtin.stata"
              },
              "3": {
                "name": "support.function.custom.stata"
              },
              "4": {
                "name": "punctuation.definition.parameters.begin.stata"
              }
            },
            "end": "(\\))",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.parameters.end.stata"
              }
            },
            "patterns": [
              {
                "match": "[\\w&&[^0-9]]\\w{0,31}",
                "name": "variable.parameter.function.stata"
              },
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "keyword.operator.parentheses.stata"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "keyword.operator.parentheses.stata"
                  }
                },
                "patterns": [
                  {
                    "include": "#ascii-regex-functions"
                  },
                  {
                    "include": "#unicode-regex-functions"
                  },
                  {
                    "include": "#functions"
                  },
                  {
                    "include": "#subscripts"
                  },
                  {
                    "include": "#constants"
                  },
                  {
                    "include": "#comments"
                  },
                  {
                    "include": "#operators"
                  },
                  {
                    "include": "#macro-local"
                  },
                  {
                    "include": "#macro-global"
                  },
                  {
                    "include": "#string-compound"
                  },
                  {
                    "include": "#string-regular"
                  },
                  {
                    "include": "#builtin_variables"
                  },
                  {
                    "include": "#macro-commands"
                  },
                  {
                    "include": "#braces-without-error"
                  },
                  {
                    "match": "[\\w&&[^0-9]]\\w{0,31}",
                    "name": "variable.parameter.function.stata"
                  }
                ]
              },
              {
                "include": "#ascii-regex-functions"
              },
              {
                "include": "#unicode-regex-functions"
              },
              {
                "include": "#functions"
              },
              {
                "include": "#subscripts"
              },
              {
                "include": "#constants"
              },
              {
                "include": "#comments"
              },
              {
                "include": "#operators"
              },
              {
                "include": "#macro-local"
              },
              {
                "include": "#macro-global"
              },
              {
                "include": "#string-compound"
              },
              {
                "include": "#string-regular"
              },
              {
                "include": "#builtin_variables"
              },
              {
                "include": "#macro-commands"
              },
              {
                "include": "#braces-without-error"
              }
            ]
          }
        ]
      },
      "macro-commands": {
        "patterns": [
          {
            "begin": "\\b(loc(al|a)?)\\s+([\\w'`\\$\\(\\)\\{\\}]+)\\s*(?=:|=)",
            "beginCaptures": {
              "1": {
                "name": "keyword.macro.stata"
              },
              "3": {
                "patterns": [
                  {
                    "include": "#macro-local-identifiers"
                  },
                  {
                    "include": "#macro-local"
                  },
                  {
                    "include": "#macro-global"
                  }
                ]
              }
            },
            "end": "\\n",
            "patterns": [
              {
                "begin": "=",
                "beginCaptures": {
                  "0": {
                    "name": "keyword.operator.arithmetic.stata"
                  }
                },
                "end": "(?=\\n)",
                "patterns": [
                  {
                    "include": "$self"
                  }
                ]
              },
              {
                "begin": ":",
                "beginCaptures": {
                  "0": {
                    "name": "keyword.operator.arithmetic.stata"
                  }
                },
                "end": "(?=\\n)",
                "patterns": [
                  {
                    "include": "#macro-extended-functions"
                  }
                ]
              }
            ]
          },
          {
            "begin": "\\b(gl(obal|oba|ob|o)?)\\s+(?=[\\w`\\$])",
            "beginCaptures": {
              "1": {
                "name": "keyword.macro.stata"
              }
            },
            "end": "(\\})|(?=\\\"|\\s|\\n|/|,|=)",
            "patterns": [
              {
                "include": "#reserved-names"
              },
              {
                "match": "[\\w&&[^0-9_]]\\w{0,31}",
                "name": "entity.name.type.class.stata"
              },
              {
                "include": "#macro-local"
              },
              {
                "include": "#macro-global"
              }
            ]
          },
          {
            "begin": "\\b(loc(al|a)?)\\s+(\\+\\+|\\-\\-)?(?=[\\w`\\$])",
            "beginCaptures": {
              "1": {
                "name": "keyword.macro.stata"
              },
              "3": {
                "name": "keyword.operator.arithmetic.stata"
              }
            },
            "end": "(?=\\\"|\\s|\\n|/|,|=)",
            "patterns": [
              {
                "include": "#macro-local-identifiers"
              },
              {
                "include": "#macro-local"
              },
              {
                "include": "#macro-global"
              }
            ]
          },
          {
            "begin": "\\b(tempvar|tempname|tempfile)\\s*(?=\\s)",
            "beginCaptures": {
              "1": {
                "name": "keyword.macro.stata"
              }
            },
            "end": "\\n",
            "patterns": [
              {
                "begin": "///",
                "end": "\\n",
                "name": "comment.block.stata"
              },
              {
                "include": "#macro-local-identifiers"
              },
              {
                "include": "#macro-local"
              },
              {
                "include": "#macro-global"
              }
            ]
          },
          {
            "begin": "\\b(ma(cro|cr|c)?)\\s+(drop|l(ist|is|i)?)\\s*(?=\\s)",
            "beginCaptures": {
              "0": {
                "name": "keyword.macro.stata"
              }
            },
            "end": "\\n",
            "patterns": [
              {
                "begin": "///",
                "end": "\\n",
                "name": "comment.block.stata"
              },
              {
                "match": "\\*",
                "name": "keyword.operator.arithmetic.stata"
              },
              {
                "include": "#constants"
              },
              {
                "include": "#macro-global"
              },
              {
                "include": "#macro-local"
              },
              {
                "include": "#comments"
              },
              {
                "match": "\\w{1,31}",
                "name": "entity.name.type.class.stata"
              }
            ]
          }
        ]
      },
      "macro-extended-functions": {
        "patterns": [
          {
            "match": "\\b(properties)\\b",
            "name": "keyword.macro.extendedfcn.stata"
          },
          {
            "match": "\\b(t(ype|yp|y)?|f(ormat|orma|orm|or|o)?|val(ue|u)?\\s+l(able|abl|ab|a)?|var(iable|iabl|iab|ia|i)?\\s+l(abel|abe|ab|a)?|data\\s+l(able|abl|ab|a)?|sort(edby|edb|ed|e)?|lab(el|e)?|maxlength|constraint|char)\\b",
            "name": "keyword.macro.extendedfcn.stata"
          },
          {
            "match": "\\b(permname)\\b",
            "name": "keyword.macro.extendedfcn.stata"
          },
          {
            "match": "\\b(adosubdir|dir|files?|dirs?|other|sysdir)\\b",
            "name": "keyword.macro.extendedfcn.stata"
          },
          {
            "match": "\\b(env(ironment|ironmen|ironme|ironm|iron|iro|ir|i)?)\\b",
            "name": "keyword.macro.extendedfcn.stata"
          },
          {
            "match": "\\b(all\\s+(globals|scalars|matrices)|((numeric|string)\\s+scalars))\\b",
            "name": "keyword.macro.extendedfcn.stata"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.macro.extendedfcn.stata"
              },
              "2": {
                "name": "keyword.macro.extendedfcn.stata"
              },
              "3": {
                "name": "entity.name.type.class.stata"
              }
            },
            "match": "\\b(list)\\s+(uniq|dups|sort|clean|retok(enize|eniz|eni|en|e)?|sizeof)\\s+(\\w{1,32})"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.macro.extendedfcn.stata"
              },
              "2": {
                "name": "entity.name.type.class.stata"
              },
              "3": {
                "name": "keyword.operator.list.stata"
              },
              "4": {
                "name": "entity.name.type.class.stata"
              }
            },
            "match": "\\b(list)\\s+(\\w{1,32})\\s+(\\||&|\\-|===|==|in)\\s+(\\w{1,32})"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.macro.extendedfcn.stata"
              },
              "2": {
                "name": "punctuation.definition.string.begin.stata"
              },
              "3": {
                "name": "string.quoted.double.stata"
              },
              "4": {
                "name": "punctuation.definition.string.end.stata"
              },
              "5": {
                "name": "keyword.macro.extendedfcn.stata"
              },
              "6": {
                "name": "entity.name.type.class.stata"
              }
            },
            "match": "\\b(list\\s+posof)\\s+(\")(\\w+)(\")\\s+(in)\\s+(\\w{1,32})"
          },
          {
            "match": "\\b(rown(ames|ame|am|a)?|coln(ames|ame|am|a)?|rowf(ullnames|ullname|ullnam|ullna|ulln|ull|ul|u)?|colf(ullnames|ullname|ullnam|ullna|ulln|ull|ul|u)?|roweq?|coleq?|rownumb|colnumb|roweqnumb|coleqnumb|rownfreeparms|colnfreeparms|rownlfs|colnlfs|rowsof|colsof|rowvarlist|colvarlist|rowlfnames|collfnames)\\b",
            "name": "keyword.macro.extendedfcn.stata"
          },
          {
            "match": "\\b(tsnorm)\\b",
            "name": "keyword.macro.extendedfcn.stata"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.macro.extendedfcn.stata"
              },
              "7": {
                "patterns": [
                  {
                    "include": "#macro-local"
                  },
                  {
                    "include": "#macro-global"
                  }
                ]
              }
            },
            "match": "\\b((copy|(ud|u)?strlen)\\s+(loc(al|a)?|gl(obal|oba|ob|o)?))\\s+([^']+)"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.macro.extendedfcn.stata"
              }
            },
            "match": "\\b(word\\s+count)"
          },
          {
            "captures": {
              "1": {
                "name": "keyword.macro.extendedfcn.stata"
              },
              "2": {
                "patterns": [
                  {
                    "include": "#macro-local"
                  },
                  {
                    "include": "#constants"
                  }
                ]
              },
              "3": {
                "name": "keyword.macro.extendedfcn.stata"
              }
            },
            "match": "(word|piece)\\s+([\\s`'\\w]+)\\s+(of)"
          },
          {
            "begin": "\\b(subinstr\\s+(loc(al|a)?|gl(obal|oba|ob|o)?))\\s+(\\w{1,32})",
            "beginCaptures": {
              "1": {
                "name": "keyword.macro.extendedfcn.stata"
              },
              "5": {
                "name": "entity.name.type.class.stata"
              }
            },
            "end": "(?=//|\\n)",
            "patterns": [
              {
                "include": "#macro-local"
              },
              {
                "include": "#macro-global"
              },
              {
                "include": "#string-compound"
              },
              {
                "include": "#string-regular"
              },
              {
                "captures": {
                  "1": {
                    "name": "support.function.builtin.stata"
                  },
                  "2": {
                    "name": "punctuation.definition.parameters.begin.stata"
                  },
                  "3": {
                    "name": "keyword.macro.extendedfcn.stata"
                  },
                  "4": {
                    "name": "entity.name.type.class.stata"
                  },
                  "5": {
                    "name": "punctuation.definition.parameters.end.stata"
                  }
                },
                "match": "(count|coun|cou|co|c)(\\()(local|loca|loc|global|globa|glob|glo|gl)\\s+(\\w{1,32})(\\))"
              }
            ]
          },
          {
            "include": "#comments"
          },
          {
            "include": "#macro-local"
          },
          {
            "include": "#macro-global"
          },
          {
            "include": "$self"
          }
        ]
      },
      "macro-global": {
        "patterns": [
          {
            "begin": "(\\$)(\\{)",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.stata"
              }
            },
            "end": "\\}",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.stata"
              }
            },
            "patterns": [
              {
                "include": "#macro-local"
              },
              {
                "include": "#macro-global"
              },
              {
                "include": "#comments-block"
              },
              {
                "begin": "[^\\w]",
                "end": "\\n|(?=})",
                "name": "comment.line.stata"
              },
              {
                "match": "\\w{1,32}",
                "name": "entity.name.type.class.stata"
              }
            ]
          },
          {
            "begin": "\\$",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.stata"
              }
            },
            "end": "(?!\\w)",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.string.end.stata"
              }
            },
            "patterns": [
              {
                "include": "#macro-local"
              },
              {
                "include": "#macro-global"
              },
              {
                "match": "[\\w&&[^0-9_]]\\w{0,31}|_\\w{1,31}",
                "name": "entity.name.type.class.stata"
              }
            ]
          }
        ]
      },
      "macro-global-escaped": {
        "patterns": [
          {
            "begin": "(\\\\\\$)(\\\\\\{)?",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.stata"
              }
            },
            "end": "(\\\\\\})|(?=\\\"|\\s|\\n|/|,)",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.string.end.stata"
              }
            },
            "patterns": [
              {
                "include": "#macro-local"
              },
              {
                "include": "#macro-global"
              },
              {
                "match": "[\\w&&[^0-9_]]\\w{0,31}|_\\w{1,31}",
                "name": "entity.name.type.class.stata"
              }
            ]
          }
        ]
      },
      "macro-local": {
        "patterns": [
          {
            "begin": "(`)(=)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.string.begin.stata"
              },
              "2": {
                "name": "keyword.operator.comparison.stata"
              }
            },
            "end": "'",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.stata"
              }
            },
            "patterns": [
              {
                "include": "$self"
              }
            ]
          },
          {
            "begin": "(`)(:)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.string.begin.stata"
              },
              "2": {
                "name": "keyword.operator.comparison.stata"
              }
            },
            "contentName": "meta.macro-extended-function.stata",
            "end": "'",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.stata"
              }
            },
            "patterns": [
              {
                "include": "#macro-local"
              },
              {
                "include": "#macro-extended-functions"
              },
              {
                "include": "#constants"
              },
              {
                "include": "#string-compound"
              },
              {
                "include": "#string-regular"
              }
            ]
          },
          {
            "begin": "(`)(macval)(\\()",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.string.begin.stata"
              },
              "2": {
                "name": "support.function.builtin.stata"
              },
              "3": {
                "name": "punctuation.definition.parameters.begin.stata"
              }
            },
            "contentName": "meta.macro-extended-function.stata",
            "end": "(\\))(')",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.parameters.begin.stata"
              },
              "2": {
                "name": "punctuation.definition.string.end.stata"
              }
            },
            "patterns": [
              {
                "include": "#macro-local"
              },
              {
                "include": "#macro-global"
              },
              {
                "match": "\\w{1,31}",
                "name": "entity.name.type.class.stata"
              }
            ]
          },
          {
            "begin": "`(?!\")",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.stata"
              }
            },
            "end": "'",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.stata"
              }
            },
            "patterns": [
              {
                "match": "\\+\\+|\\-\\-",
                "name": "keyword.operator.arithmetic.stata"
              },
              {
                "include": "#macro-local"
              },
              {
                "include": "#macro-global"
              },
              {
                "include": "#comments-block"
              },
              {
                "begin": "[^\\w]",
                "end": "\\n|(?=')",
                "name": "comment.line.stata"
              },
              {
                "match": "\\w{1,31}",
                "name": "entity.name.type.class.stata"
              }
            ]
          }
        ]
      },
      "macro-local-escaped": {
        "patterns": [
          {
            "begin": "\\\\`(?!\")",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.stata"
              }
            },
            "comment": "appropriately color macros that have embedded escaped `,', and $ characters for lazy evaluation",
            "end": "\\\\'|'",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.stata"
              }
            },
            "patterns": [
              {
                "include": "#macro-local"
              },
              {
                "include": "#macro-global"
              },
              {
                "match": "\\w{1,31}",
                "name": "entity.name.type.class.stata"
              }
            ]
          }
        ]
      },
      "macro-local-identifiers": {
        "patterns": [
          {
            "match": "[^\\w'`\\$\\(\\)\\s]",
            "name": "invalid.illegal.name.stata"
          },
          {
            "match": "\\w{32,}",
            "name": "invalid.illegal.name.stata"
          },
          {
            "match": "\\w{1,31}",
            "name": "entity.name.type.class.stata"
          }
        ]
      },
      "operators": {
        "patterns": [
          {
            "comment": "++ and -- must come first to support ligatures",
            "match": "\\+\\+|\\-\\-|\\+|\\-|\\*|\\^",
            "name": "keyword.operator.arithmetic.stata"
          },
          {
            "comment": "match division operator but not path separator",
            "match": "(?<![\\w.&&[^0-9]])/(?![\\w.&&[^0-9]]|$)",
            "name": "keyword.operator.arithmetic.stata"
          },
          {
            "comment": "match division operator but not path separator",
            "match": "(?<![\\w.&&[^0-9]])\\\\(?![\\w.&&[^0-9]]|$)",
            "name": "keyword.operator.matrix.addrow.stata"
          },
          {
            "match": "\\|\\|",
            "name": "keyword.operator.graphcombine.stata"
          },
          {
            "match": "\\&|\\|",
            "name": "keyword.operator.logical.stata"
          },
          {
            "match": "(?:<=|>=|:=|==|!=|~=|<|>|=|!!|!)",
            "name": "keyword.operator.comparison.stata"
          },
          {
            "match": "\\(|\\)",
            "name": "keyword.operator.parentheses.stata"
          },
          {
            "match": "(##|#)",
            "name": "keyword.operator.factor-variables.stata"
          },
          {
            "match": "%",
            "name": "keyword.operator.format.stata"
          },
          {
            "match": ":",
            "name": "punctuation.separator.key-value"
          },
          {
            "match": "\\[",
            "name": "punctuation.definition.parameters.begin.stata"
          },
          {
            "match": "\\]",
            "name": "punctuation.definition.parameters.end.stata"
          },
          {
            "match": ",",
            "name": "punctuation.definition.variable.begin.stata"
          },
          {
            "match": ";",
            "name": "keyword.operator.delimiter.stata"
          }
        ]
      },
      "reserved-names": {
        "patterns": [
          {
            "match": "\\b(_all|_b|byte|_coef|_cons|double|float|if|in|int|long|_n|_N|_pi|_pred|_rc|_skip|str[0-9]+|strL|using|with)\\b",
            "name": "invalid.illegal.name.stata"
          },
          {
            "match": "[^\\w'`\\$\\(\\)\\s]",
            "name": "invalid.illegal.name.stata"
          },
          {
            "match": "[0-9][\\w]{31,}",
            "name": "invalid.illegal.name.stata"
          },
          {
            "match": "\\w{33,}",
            "name": "invalid.illegal.name.stata"
          }
        ]
      },
      "string-compound": {
        "patterns": [
          {
            "begin": "`\"",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.stata"
              }
            },
            "end": "\"'|(?=\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.string.end.stata"
              }
            },
            "name": "string.quoted.double.compound.stata",
            "patterns": [
              {
                "comment": "This must come before #string-regular and #string-compound to accurately color `\"\"\"' in strings",
                "match": "\"",
                "name": "string.quoted.double.compound.stata"
              },
              {
                "comment": "see https://github.com/kylebarron/language-stata/issues/53",
                "match": "```(?=[^']*\")",
                "name": "meta.markdown.code.block.stata"
              },
              {
                "include": "#string-regular"
              },
              {
                "include": "#string-compound"
              },
              {
                "include": "#macro-local-escaped"
              },
              {
                "include": "#macro-global-escaped"
              },
              {
                "include": "#macro-local"
              },
              {
                "include": "#macro-global"
              }
            ]
          }
        ]
      },
      "string-regular": {
        "patterns": [
          {
            "begin": "(?<!`)\"",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.string.begin.stata"
              }
            },
            "end": "(\")(')?|(?=\n)",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.string.end.stata"
              },
              "2": {
                "name": "invalid.illegal.punctuation.stata"
              }
            },
            "name": "string.quoted.double.stata",
            "patterns": [
              {
                "comment": "see https://github.com/kylebarron/language-stata/issues/53",
                "match": "```(?=[^']*\")",
                "name": "meta.markdown.code.block.stata"
              },
              {
                "include": "#macro-local-escaped"
              },
              {
                "include": "#macro-global-escaped"
              },
              {
                "include": "#macro-local"
              },
              {
                "include": "#macro-global"
              }
            ]
          }
        ]
      },
      "subscripts": {
        "patterns": [
          {
            "begin": "(?<=[\\w'])(\\[)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.parameters.begin.stata"
              }
            },
            "comment": "highlight expressions, like [_n], when using subscripts on a variable",
            "end": "(\\])",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.parameters.end.stata"
              }
            },
            "name": "meta.subscripts.stata",
            "patterns": [
              {
                "include": "#macro-local"
              },
              {
                "include": "#macro-global"
              },
              {
                "include": "#builtin_variables"
              },
              {
                "include": "#operators"
              },
              {
                "include": "#constants"
              },
              {
                "include": "#functions"
              }
            ]
          }
        ]
      },
      "unicode-regex-character-class": {
        "patterns": [
          {
            "match": "\\\\[wWsSdD]|\\.",
            "name": "constant.character.character-class.stata"
          },
          {
            "match": "\\\\.",
            "name": "constant.character.escape.backslash.stata"
          },
          {
            "begin": "(\\[)(\\^)?",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.character-class.stata"
              },
              "2": {
                "name": "keyword.operator.negation.stata"
              }
            },
            "end": "(\\])",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.character-class.stata"
              }
            },
            "name": "constant.other.character-class.set.stata",
            "patterns": [
              {
                "include": "#unicode-regex-character-class"
              },
              {
                "captures": {
                  "2": {
                    "name": "constant.character.escape.backslash.stata"
                  },
                  "4": {
                    "name": "constant.character.escape.backslash.stata"
                  }
                },
                "match": "((\\\\.)|.)\\-((\\\\.)|[^\\]])",
                "name": "constant.other.character-class.range.stata"
              }
            ]
          }
        ]
      },
      "unicode-regex-functions": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "support.function.builtin.stata"
              },
              "2": {
                "name": "punctuation.definition.parameters.begin.stata"
              },
              "3": {
                "patterns": [
                  {
                    "include": "#string-compound"
                  },
                  {
                    "include": "#string-regular"
                  },
                  {
                    "include": "#macro-local"
                  },
                  {
                    "include": "#macro-global"
                  },
                  {
                    "include": "#functions"
                  },
                  {
                    "match": "[\\w&&[^0-9]]\\w{0,31}",
                    "name": "variable.parameter.function.stata"
                  },
                  {
                    "include": "#comments-triple-slash"
                  }
                ]
              },
              "4": {
                "name": "punctuation.definition.variable.begin.stata"
              },
              "5": {
                "name": "punctuation.definition.string.begin.stata"
              },
              "6": {
                "patterns": [
                  {
                    "include": "#unicode-regex-internals"
                  }
                ]
              },
              "7": {
                "name": "punctuation.definition.string.end.stata"
              },
              "8": {
                "name": "invalid.illegal.punctuation.stata"
              },
              "9": {
                "patterns": [
                  {
                    "include": "#constants"
                  },
                  {
                    "match": ",",
                    "name": "punctuation.definition.variable.begin.stata"
                  }
                ]
              },
              "10": {
                "name": "punctuation.definition.parameters.end.stata"
              }
            },
            "comment": "color regexm with regular quotes i.e. \" ",
            "match": "\\b(ustrregexm)(\\()([^,]+)(,)\\s*(\")([^\"]+)(\"(')?)([,0-9\\s]*)?\\s*(\\))"
          },
          {
            "captures": {
              "1": {
                "name": "support.function.builtin.stata"
              },
              "2": {
                "name": "punctuation.definition.parameters.begin.stata"
              },
              "3": {
                "patterns": [
                  {
                    "include": "#string-compound"
                  },
                  {
                    "include": "#string-regular"
                  },
                  {
                    "include": "#macro-local"
                  },
                  {
                    "include": "#macro-global"
                  },
                  {
                    "include": "#functions"
                  },
                  {
                    "match": "[\\w&&[^0-9]]\\w{0,31}",
                    "name": "variable.parameter.function.stata"
                  },
                  {
                    "include": "#comments-triple-slash"
                  }
                ]
              },
              "4": {
                "name": "punctuation.definition.variable.begin.stata"
              },
              "5": {
                "name": "punctuation.definition.string.begin.stata"
              },
              "6": {
                "patterns": [
                  {
                    "include": "#unicode-regex-internals"
                  }
                ]
              },
              "7": {
                "name": "punctuation.definition.string.end.stata"
              },
              "8": {
                "patterns": [
                  {
                    "include": "#constants"
                  },
                  {
                    "match": ",",
                    "name": "punctuation.definition.variable.begin.stata"
                  }
                ]
              },
              "9": {
                "name": "punctuation.definition.parameters.end.stata"
              }
            },
            "comment": "color regexm with compound quotes",
            "match": "\\b(ustrregexm)(\\()([^,]+)(,)\\s*(`\")([^\"]+)(\"')([,0-9\\s]*)?\\s*(\\))"
          },
          {
            "captures": {
              "1": {
                "name": "support.function.builtin.stata"
              },
              "2": {
                "name": "punctuation.definition.parameters.begin.stata"
              },
              "3": {
                "patterns": [
                  {
                    "include": "#string-compound"
                  },
                  {
                    "include": "#string-regular"
                  },
                  {
                    "include": "#macro-local"
                  },
                  {
                    "include": "#macro-global"
                  },
                  {
                    "include": "#functions"
                  },
                  {
                    "match": "[\\w&&[^0-9]]\\w{0,31}",
                    "name": "variable.parameter.function.stata"
                  },
                  {
                    "include": "#comments"
                  }
                ]
              },
              "4": {
                "name": "punctuation.definition.variable.begin.stata"
              },
              "5": {
                "name": "punctuation.definition.string.begin.stata"
              },
              "6": {
                "patterns": [
                  {
                    "include": "#unicode-regex-internals"
                  }
                ]
              },
              "7": {
                "name": "punctuation.definition.string.end.stata"
              },
              "8": {
                "name": "invalid.illegal.punctuation.stata"
              },
              "9": {
                "patterns": [
                  {
                    "match": ",",
                    "name": "punctuation.definition.variable.begin.stata"
                  },
                  {
                    "include": "#string-compound"
                  },
                  {
                    "include": "#string-regular"
                  },
                  {
                    "include": "#macro-local"
                  },
                  {
                    "include": "#macro-global"
                  },
                  {
                    "include": "#functions"
                  },
                  {
                    "match": "[\\w&&[^0-9]]\\w{0,31}",
                    "name": "variable.parameter.function.stata"
                  },
                  {
                    "include": "#comments-triple-slash"
                  },
                  {
                    "include": "#constants"
                  }
                ]
              },
              "10": {
                "name": "punctuation.definition.parameters.end.stata"
              }
            },
            "comment": "color regexr with regular quotes i.e. \" ",
            "match": "\\b(ustrregexrf|ustrregexra)(\\()([^,]+)(,)\\s*(\")([^\"]+)(\"(')?)\\s*([^\\)]*)(\\))"
          },
          {
            "captures": {
              "1": {
                "name": "support.function.builtin.stata"
              },
              "2": {
                "name": "punctuation.definition.parameters.begin.stata"
              },
              "3": {
                "patterns": [
                  {
                    "include": "#string-compound"
                  },
                  {
                    "include": "#string-regular"
                  },
                  {
                    "include": "#macro-local"
                  },
                  {
                    "include": "#macro-global"
                  },
                  {
                    "include": "#functions"
                  },
                  {
                    "match": "[\\w&&[^0-9]]\\w{0,31}",
                    "name": "variable.parameter.function.stata"
                  },
                  {
                    "include": "#comments"
                  }
                ]
              },
              "4": {
                "name": "punctuation.definition.variable.begin.stata"
              },
              "5": {
                "name": "punctuation.definition.string.begin.stata"
              },
              "6": {
                "patterns": [
                  {
                    "include": "#unicode-regex-internals"
                  }
                ]
              },
              "7": {
                "name": "punctuation.definition.string.end.stata"
              },
              "8": {
                "patterns": [
                  {
                    "match": ",",
                    "name": "punctuation.definition.variable.begin.stata"
                  },
                  {
                    "include": "#string-compound"
                  },
                  {
                    "include": "#string-regular"
                  },
                  {
                    "include": "#macro-local"
                  },
                  {
                    "include": "#macro-global"
                  },
                  {
                    "include": "#functions"
                  },
                  {
                    "match": "[\\w&&[^0-9]]\\w{0,31}",
                    "name": "variable.parameter.function.stata"
                  },
                  {
                    "include": "#comments-triple-slash"
                  },
                  {
                    "include": "#constants"
                  }
                ]
              },
              "9": {
                "name": "punctuation.definition.parameters.end.stata"
              }
            },
            "comment": "color regexr with compound quotes i.e. `\"text\"' ",
            "match": "\\b(ustrregexrf|ustrregexra)(\\()([^,]+)(,)\\s*(`\")([^\"]+)(\"')\\s*([^\\)]*)(\\))"
          }
        ]
      },
      "unicode-regex-internals": {
        "patterns": [
          {
            "match": "\\\\[bBAZzG]|\\^",
            "name": "keyword.control.anchor.stata"
          },
          {
            "comment": "matched when not a global",
            "match": "\\$(?![[\\w&&[^0-9_]][\\w]{0,31}|_[\\w]{1,31}\\{])",
            "name": "keyword.control.anchor.stata"
          },
          {
            "match": "\\\\[1-9][0-9]?",
            "name": "keyword.other.back-reference.stata"
          },
          {
            "match": "[?+*][?+]?|\\{(\\d+,\\d+|\\d+,|,\\d+|\\d+)\\}\\??",
            "name": "keyword.operator.quantifier.stata"
          },
          {
            "match": "\\|",
            "name": "keyword.operator.or.stata"
          },
          {
            "begin": "\\((?!\\?\\#|\\?=|\\?!|\\?<=|\\?<!)",
            "end": "\\)",
            "name": "keyword.operator.group.stata",
            "patterns": [
              {
                "include": "#unicode-regex-internals"
              }
            ]
          },
          {
            "begin": "\\(\\?\\#",
            "end": "\\)",
            "name": "comment.block.stata"
          },
          {
            "comment": "We are restrictive in what we allow to go after the comment character to avoid false positives, since the availability of comments depend on regexp flags.",
            "match": "(?<=^|\\s)#\\s[[a-zA-Z0-9,. \\t?!-:][^\\x{00}-\\x{7F}]]*$",
            "name": "comment.line.number-sign.stata"
          },
          {
            "match": "\\(\\?[iLmsux]+\\)",
            "name": "keyword.other.option-toggle.stata"
          },
          {
            "begin": "(\\()((\\?=)|(\\?!)|(\\?<=)|(\\?<!))",
            "beginCaptures": {
              "1": {
                "name": "keyword.operator.group.stata"
              },
              "2": {
                "name": "punctuation.definition.group.assertion.stata"
              },
              "3": {
                "name": "keyword.assertion.look-ahead.stata"
              },
              "4": {
                "name": "keyword.assertion.negative-look-ahead.stata"
              },
              "5": {
                "name": "keyword.assertion.look-behind.stata"
              },
              "6": {
                "name": "keyword.assertion.negative-look-behind.stata"
              }
            },
            "end": "(\\))",
            "endCaptures": {
              "1": {
                "name": "keyword.operator.group.stata"
              }
            },
            "name": "meta.group.assertion.stata",
            "patterns": [
              {
                "include": "#unicode-regex-internals"
              }
            ]
          },
          {
            "begin": "(\\()(\\?\\(([1-9][0-9]?|[a-zA-Z_][a-zA-Z_0-9]*)\\))",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.group.stata"
              },
              "2": {
                "name": "punctuation.definition.group.assertion.conditional.stata"
              },
              "3": {
                "name": "entity.name.section.back-reference.stata"
              }
            },
            "comment": "we can make this more sophisticated to match the | character that separates yes-pattern from no-pattern, but it's not really necessary.",
            "end": "(\\))",
            "name": "meta.group.assertion.conditional.stata",
            "patterns": [
              {
                "include": "#unicode-regex-internals"
              }
            ]
          },
          {
            "include": "#unicode-regex-character-class"
          },
          {
            "include": "#macro-local"
          },
          {
            "include": "#macro-global"
          },
          {
            "comment": "NOTE: Error if I have .+ No idea why but it works fine it seems with just .",
            "match": ".",
            "name": "string.quoted.stata"
          }
        ]
      }
    },
    "scopeName": "source.stata",
    "embeddedLangs": [
      "sql"
    ]
  }
])