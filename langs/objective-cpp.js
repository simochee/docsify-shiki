/** Shiki Language: objective-cpp */
$docsify.shiki ||= {};
$docsify.shiki.langs ||= [];
$docsify.shiki.langs.push([
  {
    "displayName": "Objective-C++",
    "name": "objective-cpp",
    "patterns": [
      {
        "include": "#cpp_lang"
      },
      {
        "include": "#anonymous_pattern_1"
      },
      {
        "include": "#anonymous_pattern_2"
      },
      {
        "include": "#anonymous_pattern_3"
      },
      {
        "include": "#anonymous_pattern_4"
      },
      {
        "include": "#anonymous_pattern_5"
      },
      {
        "include": "#apple_foundation_functional_macros"
      },
      {
        "include": "#anonymous_pattern_7"
      },
      {
        "include": "#anonymous_pattern_8"
      },
      {
        "include": "#anonymous_pattern_9"
      },
      {
        "include": "#anonymous_pattern_10"
      },
      {
        "include": "#anonymous_pattern_11"
      },
      {
        "include": "#anonymous_pattern_12"
      },
      {
        "include": "#anonymous_pattern_13"
      },
      {
        "include": "#anonymous_pattern_14"
      },
      {
        "include": "#anonymous_pattern_15"
      },
      {
        "include": "#anonymous_pattern_16"
      },
      {
        "include": "#anonymous_pattern_17"
      },
      {
        "include": "#anonymous_pattern_18"
      },
      {
        "include": "#anonymous_pattern_19"
      },
      {
        "include": "#anonymous_pattern_20"
      },
      {
        "include": "#anonymous_pattern_21"
      },
      {
        "include": "#anonymous_pattern_22"
      },
      {
        "include": "#anonymous_pattern_23"
      },
      {
        "include": "#anonymous_pattern_24"
      },
      {
        "include": "#anonymous_pattern_25"
      },
      {
        "include": "#anonymous_pattern_26"
      },
      {
        "include": "#anonymous_pattern_27"
      },
      {
        "include": "#anonymous_pattern_28"
      },
      {
        "include": "#anonymous_pattern_29"
      },
      {
        "include": "#anonymous_pattern_30"
      },
      {
        "include": "#bracketed_content"
      },
      {
        "include": "#c_lang"
      }
    ],
    "repository": {
      "anonymous_pattern_1": {
        "begin": "((@)(interface|protocol))(?!.+;)\\s+([A-Za-z_][A-Za-z0-9_]*)\\s*((:)(?:\\s*)([A-Za-z][A-Za-z0-9]*))?(\\s|\\n)?",
        "captures": {
          "1": {
            "name": "storage.type.objcpp"
          },
          "2": {
            "name": "punctuation.definition.storage.type.objcpp"
          },
          "4": {
            "name": "entity.name.type.objcpp"
          },
          "6": {
            "name": "punctuation.definition.entity.other.inherited-class.objcpp"
          },
          "7": {
            "name": "entity.other.inherited-class.objcpp"
          },
          "8": {
            "name": "meta.divider.objcpp"
          },
          "9": {
            "name": "meta.inherited-class.objcpp"
          }
        },
        "contentName": "meta.scope.interface.objcpp",
        "end": "((@)end)\\b",
        "name": "meta.interface-or-protocol.objcpp",
        "patterns": [
          {
            "include": "#interface_innards"
          }
        ]
      },
      "anonymous_pattern_10": {
        "captures": {
          "1": {
            "name": "punctuation.definition.keyword.objcpp"
          }
        },
        "match": "(@)(defs|encode)\\b",
        "name": "keyword.other.objcpp"
      },
      "anonymous_pattern_11": {
        "match": "\\bid\\b",
        "name": "storage.type.id.objcpp"
      },
      "anonymous_pattern_12": {
        "match": "\\b(IBOutlet|IBAction|BOOL|SEL|id|unichar|IMP|Class|instancetype)\\b",
        "name": "storage.type.objcpp"
      },
      "anonymous_pattern_13": {
        "captures": {
          "1": {
            "name": "punctuation.definition.storage.type.objcpp"
          }
        },
        "match": "(@)(class|protocol)\\b",
        "name": "storage.type.objcpp"
      },
      "anonymous_pattern_14": {
        "begin": "((@)selector)\\s*(\\()",
        "beginCaptures": {
          "1": {
            "name": "storage.type.objcpp"
          },
          "2": {
            "name": "punctuation.definition.storage.type.objcpp"
          },
          "3": {
            "name": "punctuation.definition.storage.type.objcpp"
          }
        },
        "contentName": "meta.selector.method-name.objcpp",
        "end": "(\\))",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.storage.type.objcpp"
          }
        },
        "name": "meta.selector.objcpp",
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.separator.arguments.objcpp"
              }
            },
            "match": "\\b(?:[a-zA-Z_:][\\w]*)+",
            "name": "support.function.any-method.name-of-parameter.objcpp"
          }
        ]
      },
      "anonymous_pattern_15": {
        "captures": {
          "1": {
            "name": "punctuation.definition.storage.modifier.objcpp"
          }
        },
        "match": "(@)(synchronized|public|package|private|protected)\\b",
        "name": "storage.modifier.objcpp"
      },
      "anonymous_pattern_16": {
        "match": "\\b(YES|NO|Nil|nil)\\b",
        "name": "constant.language.objcpp"
      },
      "anonymous_pattern_17": {
        "match": "\\bNSApp\\b",
        "name": "support.variable.foundation.objcpp"
      },
      "anonymous_pattern_18": {
        "captures": {
          "1": {
            "name": "punctuation.whitespace.support.function.cocoa.leopard.objcpp"
          },
          "2": {
            "name": "support.function.cocoa.leopard.objcpp"
          }
        },
        "match": "(\\s*)\\b(NS(Rect(ToCGRect|FromCGRect)|MakeCollectable|S(tringFromProtocol|ize(ToCGSize|FromCGSize))|Draw(NinePartImage|ThreePartImage)|P(oint(ToCGPoint|FromCGPoint)|rotocolFromString)|EventMaskFromType|Value))\\b"
      },
      "anonymous_pattern_19": {
        "captures": {
          "1": {
            "name": "punctuation.whitespace.support.function.leading.cocoa.objcpp"
          },
          "2": {
            "name": "support.function.cocoa.objcpp"
          }
        },
        "match": "(\\s*)\\b(NS(R(ound(DownToMultipleOfPageSize|UpToMultipleOfPageSize)|un(CriticalAlertPanel(RelativeToWindow)?|InformationalAlertPanel(RelativeToWindow)?|AlertPanel(RelativeToWindow)?)|e(set(MapTable|HashTable)|c(ycleZone|t(Clip(List)?|F(ill(UsingOperation|List(UsingOperation|With(Grays|Colors(UsingOperation)?))?)?|romString))|ordAllocationEvent)|turnAddress|leaseAlertPanel|a(dPixel|l(MemoryAvailable|locateCollectable))|gisterServicesProvider)|angeFromString)|Get(SizeAndAlignment|CriticalAlertPanel|InformationalAlertPanel|UncaughtExceptionHandler|FileType(s)?|WindowServerMemory|AlertPanel)|M(i(n(X|Y)|d(X|Y))|ouseInRect|a(p(Remove|Get|Member|Insert(IfAbsent|KnownAbsent)?)|ke(R(ect|ange)|Size|Point)|x(Range|X|Y)))|B(itsPer(SampleFromDepth|PixelFromDepth)|e(stDepth|ep|gin(CriticalAlertSheet|InformationalAlertSheet|AlertSheet)))|S(ho(uldRetainWithZone|w(sServicesMenuItem|AnimationEffect))|tringFrom(R(ect|ange)|MapTable|S(ize|elector)|HashTable|Class|Point)|izeFromString|e(t(ShowsServicesMenuItem|ZoneName|UncaughtExceptionHandler|FocusRingStyle)|lectorFromString|archPathForDirectoriesInDomains)|wap(Big(ShortToHost|IntToHost|DoubleToHost|FloatToHost|Long(ToHost|LongToHost))|Short|Host(ShortTo(Big|Little)|IntTo(Big|Little)|DoubleTo(Big|Little)|FloatTo(Big|Little)|Long(To(Big|Little)|LongTo(Big|Little)))|Int|Double|Float|L(ittle(ShortToHost|IntToHost|DoubleToHost|FloatToHost|Long(ToHost|LongToHost))|ong(Long)?)))|H(ighlightRect|o(stByteOrder|meDirectory(ForUser)?)|eight|ash(Remove|Get|Insert(IfAbsent|KnownAbsent)?)|FSType(CodeFromFileType|OfFile))|N(umberOfColorComponents|ext(MapEnumeratorPair|HashEnumeratorItem))|C(o(n(tainsRect|vert(GlyphsToPackedGlyphs|Swapped(DoubleToHost|FloatToHost)|Host(DoubleToSwapped|FloatToSwapped)))|unt(MapTable|HashTable|Frames|Windows(ForContext)?)|py(M(emoryPages|apTableWithZone)|Bits|HashTableWithZone|Object)|lorSpaceFromDepth|mpare(MapTables|HashTables))|lassFromString|reate(MapTable(WithZone)?|HashTable(WithZone)?|Zone|File(namePboardType|ContentsPboardType)))|TemporaryDirectory|I(s(ControllerMarker|EmptyRect|FreedObject)|n(setRect|crementExtraRefCount|te(r(sect(sRect|ionR(ect|ange))|faceStyleForKey)|gralRect)))|Zone(Realloc|Malloc|Name|Calloc|Fr(omPointer|ee))|O(penStepRootDirectory|ffsetRect)|D(i(sableScreenUpdates|videRect)|ottedFrameRect|e(c(imal(Round|Multiply|S(tring|ubtract)|Normalize|Co(py|mpa(ct|re))|IsNotANumber|Divide|Power|Add)|rementExtraRefCountWasZero)|faultMallocZone|allocate(MemoryPages|Object))|raw(Gr(oove|ayBezel)|B(itmap|utton)|ColorTiledRects|TiledRects|DarkBezel|W(hiteBezel|indowBackground)|LightBezel))|U(serName|n(ionR(ect|ange)|registerServicesProvider)|pdateDynamicServices)|Java(Bundle(Setup|Cleanup)|Setup(VirtualMachine)?|Needs(ToLoadClasses|VirtualMachine)|ClassesF(orBundle|romPath)|ObjectNamedInPath|ProvidesClasses)|P(oint(InRect|FromString)|erformService|lanarFromDepth|ageSize)|E(n(d(MapTableEnumeration|HashTableEnumeration)|umerate(MapTable|HashTable)|ableScreenUpdates)|qual(R(ects|anges)|Sizes|Points)|raseRect|xtraRefCount)|F(ileTypeForHFSTypeCode|ullUserName|r(ee(MapTable|HashTable)|ame(Rect(WithWidth(UsingOperation)?)?|Address)))|Wi(ndowList(ForContext)?|dth)|Lo(cationInRange|g(v|PageSize)?)|A(ccessibility(R(oleDescription(ForUIElement)?|aiseBadArgumentException)|Unignored(Children(ForOnlyChild)?|Descendant|Ancestor)|PostNotification|ActionDescription)|pplication(Main|Load)|vailableWindowDepths|ll(MapTable(Values|Keys)|HashTableObjects|ocate(MemoryPages|Collectable|Object)))))\\b"
      },
      "anonymous_pattern_2": {
        "begin": "((@)(implementation))\\s+([A-Za-z_][A-Za-z0-9_]*)\\s*(?::\\s*([A-Za-z][A-Za-z0-9]*))?",
        "captures": {
          "1": {
            "name": "storage.type.objcpp"
          },
          "2": {
            "name": "punctuation.definition.storage.type.objcpp"
          },
          "4": {
            "name": "entity.name.type.objcpp"
          },
          "5": {
            "name": "entity.other.inherited-class.objcpp"
          }
        },
        "contentName": "meta.scope.implementation.objcpp",
        "end": "((@)end)\\b",
        "name": "meta.implementation.objcpp",
        "patterns": [
          {
            "include": "#implementation_innards"
          }
        ]
      },
      "anonymous_pattern_20": {
        "match": "\\bNS(RuleEditor|G(arbageCollector|radient)|MapTable|HashTable|Co(ndition|llectionView(Item)?)|T(oolbarItemGroup|extInputClient|r(eeNode|ackingArea))|InvocationOperation|Operation(Queue)?|D(ictionaryController|ockTile)|P(ointer(Functions|Array)|athC(o(ntrol(Delegate)?|mponentCell)|ell(Delegate)?)|r(intPanelAccessorizing|edicateEditor(RowTemplate)?))|ViewController|FastEnumeration|Animat(ionContext|ablePropertyContainer))\\b",
        "name": "support.class.cocoa.leopard.objcpp"
      },
      "anonymous_pattern_21": {
        "match": "\\bNS(R(u(nLoop|ler(Marker|View))|e(sponder|cursiveLock|lativeSpecifier)|an(domSpecifier|geSpecifier))|G(etCommand|lyph(Generator|Storage|Info)|raphicsContext)|XML(Node|D(ocument|TD(Node)?)|Parser|Element)|M(iddleSpecifier|ov(ie(View)?|eCommand)|utable(S(tring|et)|C(haracterSet|opying)|IndexSet|D(ictionary|ata)|URLRequest|ParagraphStyle|A(ttributedString|rray))|e(ssagePort(NameServer)?|nu(Item(Cell)?|View)?|t(hodSignature|adata(Item|Query(ResultGroup|AttributeValueTuple)?)))|a(ch(BootstrapServer|Port)|trix))|B(itmapImageRep|ox|u(ndle|tton(Cell)?)|ezierPath|rowser(Cell)?)|S(hadow|c(anner|r(ipt(SuiteRegistry|C(o(ercionHandler|mmand(Description)?)|lassDescription)|ObjectSpecifier|ExecutionContext|WhoseTest)|oll(er|View)|een))|t(epper(Cell)?|atus(Bar|Item)|r(ing|eam))|imple(HorizontalTypesetter|CString)|o(cketPort(NameServer)?|und|rtDescriptor)|p(e(cifierTest|ech(Recognizer|Synthesizer)|ll(Server|Checker))|litView)|e(cureTextField(Cell)?|t(Command)?|archField(Cell)?|rializer|gmentedC(ontrol|ell))|lider(Cell)?|avePanel)|H(ost|TTP(Cookie(Storage)?|URLResponse)|elpManager)|N(ib(Con(nector|trolConnector)|OutletConnector)?|otification(Center|Queue)?|u(ll|mber(Formatter)?)|etService(Browser)?|ameSpecifier)|C(ha(ngeSpelling|racterSet)|o(n(stantString|nection|trol(ler)?|ditionLock)|d(ing|er)|unt(Command|edSet)|pying|lor(Space|P(ick(ing(Custom|Default)|er)|anel)|Well|List)?|m(p(oundPredicate|arisonPredicate)|boBox(Cell)?))|u(stomImageRep|rsor)|IImageRep|ell|l(ipView|o(seCommand|neCommand)|assDescription)|a(ched(ImageRep|URLResponse)|lendar(Date)?)|reateCommand)|T(hread|ypesetter|ime(Zone|r)|o(olbar(Item(Validations)?)?|kenField(Cell)?)|ext(Block|Storage|Container|Tab(le(Block)?)?|Input|View|Field(Cell)?|List|Attachment(Cell)?)?|a(sk|b(le(Header(Cell|View)|Column|View)|View(Item)?))|reeController)|I(n(dex(S(pecifier|et)|Path)|put(Manager|S(tream|erv(iceProvider|er(MouseTracker)?)))|vocation)|gnoreMisspelledWords|mage(Rep|Cell|View)?)|O(ut(putStream|lineView)|pen(GL(Context|Pixel(Buffer|Format)|View)|Panel)|bj(CTypeSerializationCallBack|ect(Controller)?))|D(i(st(antObject(Request)?|ributed(NotificationCenter|Lock))|ctionary|rectoryEnumerator)|ocument(Controller)?|e(serializer|cimalNumber(Behaviors|Handler)?|leteCommand)|at(e(Components|Picker(Cell)?|Formatter)?|a)|ra(wer|ggingInfo))|U(ser(InterfaceValidations|Defaults(Controller)?)|RL(Re(sponse|quest)|Handle(Client)?|C(onnection|ache|redential(Storage)?)|Download(Delegate)?|Prot(ocol(Client)?|ectionSpace)|AuthenticationChallenge(Sender)?)?|n(iqueIDSpecifier|doManager|archiver))|P(ipe|o(sitionalSpecifier|pUpButton(Cell)?|rt(Message|NameServer|Coder)?)|ICTImageRep|ersistentDocument|DFImageRep|a(steboard|nel|ragraphStyle|geLayout)|r(int(Info|er|Operation|Panel)|o(cessInfo|tocolChecker|perty(Specifier|ListSerialization)|gressIndicator|xy)|edicate))|E(numerator|vent|PSImageRep|rror|x(ception|istsCommand|pression))|V(iew(Animation)?|al(idated(ToobarItem|UserInterfaceItem)|ue(Transformer)?))|Keyed(Unarchiver|Archiver)|Qui(ckDrawView|tCommand)|F(ile(Manager|Handle|Wrapper)|o(nt(Manager|Descriptor|Panel)?|rm(Cell|atter)))|W(hoseSpecifier|indow(Controller)?|orkspace)|L(o(c(k(ing)?|ale)|gicalTest)|evelIndicator(Cell)?|ayoutManager)|A(ssertionHandler|nimation|ctionCell|ttributedString|utoreleasePool|TSTypesetter|ppl(ication|e(Script|Event(Manager|Descriptor)))|ffineTransform|lert|r(chiver|ray(Controller)?)))\\b",
        "name": "support.class.cocoa.objcpp"
      },
      "anonymous_pattern_22": {
        "match": "\\bNS(R(oundingMode|ule(Editor(RowType|NestingMode)|rOrientation)|e(questUserAttentionType|lativePosition))|G(lyphInscription|radientDrawingOptions)|XML(NodeKind|D(ocumentContentKind|TDNodeKind)|ParserError)|M(ultibyteGlyphPacking|apTableOptions)|B(itmapFormat|oxType|ezierPathElement|ackgroundStyle|rowserDropOperation)|S(tr(ing(CompareOptions|DrawingOptions|EncodingConversionOptions)|eam(Status|Event))|p(eechBoundary|litViewDividerStyle)|e(archPathD(irectory|omainMask)|gmentS(tyle|witchTracking))|liderType|aveOptions)|H(TTPCookieAcceptPolicy|ashTableOptions)|N(otification(SuspensionBehavior|Coalescing)|umberFormatter(RoundingMode|Behavior|Style|PadPosition)|etService(sError|Options))|C(haracterCollection|o(lor(RenderingIntent|SpaceModel|PanelMode)|mp(oundPredicateType|arisonPredicateModifier))|ellStateValue|al(culationError|endarUnit))|T(ypesetterControlCharacterAction|imeZoneNameStyle|e(stComparisonOperation|xt(Block(Dimension|V(erticalAlignment|alueType)|Layer)|TableLayoutAlgorithm|FieldBezelStyle))|ableView(SelectionHighlightStyle|ColumnAutoresizingStyle)|rackingAreaOptions)|I(n(sertionPosition|te(rfaceStyle|ger))|mage(RepLoadStatus|Scaling|CacheMode|FrameStyle|LoadStatus|Alignment))|Ope(nGLPixelFormatAttribute|rationQueuePriority)|Date(Picker(Mode|Style)|Formatter(Behavior|Style))|U(RL(RequestCachePolicy|HandleStatus|C(acheStoragePolicy|redentialPersistence))|Integer)|P(o(stingStyle|int(ingDeviceType|erFunctionsOptions)|pUpArrowPosition)|athStyle|r(int(ing(Orientation|PaginationMode)|erTableStatus|PanelOptions)|opertyList(MutabilityOptions|Format)|edicateOperatorType))|ExpressionType|KeyValue(SetMutationKind|Change)|QTMovieLoopMode|F(indPanel(SubstringMatchType|Action)|o(nt(RenderingMode|FamilyClass)|cusRingPlacement))|W(hoseSubelementIdentifier|ind(ingRule|ow(B(utton|ackingLocation)|SharingType|CollectionBehavior)))|L(ine(MovementDirection|SweepDirection|CapStyle|JoinStyle)|evelIndicatorStyle)|Animation(BlockingMode|Curve))\\b",
        "name": "support.type.cocoa.leopard.objcpp"
      },
      "anonymous_pattern_23": {
        "match": "\\bC(I(Sampler|Co(ntext|lor)|Image(Accumulator)?|PlugIn(Registration)?|Vector|Kernel|Filter(Generator|Shape)?)|A(Renderer|MediaTiming(Function)?|BasicAnimation|ScrollLayer|Constraint(LayoutManager)?|T(iledLayer|extLayer|rans(ition|action))|OpenGLLayer|PropertyAnimation|KeyframeAnimation|Layer|A(nimation(Group)?|ction)))\\b",
        "name": "support.class.quartz.objcpp"
      },
      "anonymous_pattern_24": {
        "match": "\\bC(G(Float|Point|Size|Rect)|IFormat|AConstraintAttribute)\\b",
        "name": "support.type.quartz.objcpp"
      },
      "anonymous_pattern_25": {
        "match": "\\bNS(R(ect(Edge)?|ange)|G(lyph(Relation|LayoutMode)?|radientType)|M(odalSession|a(trixMode|p(Table|Enumerator)))|B(itmapImageFileType|orderType|uttonType|ezelStyle|ackingStoreType|rowserColumnResizingType)|S(cr(oll(er(Part|Arrow)|ArrowPosition)|eenAuxiliaryOpaque)|tringEncoding|ize|ocketNativeHandle|election(Granularity|Direction|Affinity)|wapped(Double|Float)|aveOperationType)|Ha(sh(Table|Enumerator)|ndler(2)?)|C(o(ntrol(Size|Tint)|mp(ositingOperation|arisonResult))|ell(State|Type|ImagePosition|Attribute))|T(hreadPrivate|ypesetterGlyphInfo|i(ckMarkPosition|tlePosition|meInterval)|o(ol(TipTag|bar(SizeMode|DisplayMode))|kenStyle)|IFFCompression|ext(TabType|Alignment)|ab(State|leViewDropOperation|ViewType)|rackingRectTag)|ImageInterpolation|Zone|OpenGL(ContextAuxiliary|PixelFormatAuxiliary)|D(ocumentChangeType|atePickerElementFlags|ra(werState|gOperation))|UsableScrollerParts|P(oint|r(intingPageOrder|ogressIndicator(Style|Th(ickness|readInfo))))|EventType|KeyValueObservingOptions|Fo(nt(SymbolicTraits|TraitMask|Action)|cusRingType)|W(indow(OrderingMode|Depth)|orkspace(IconCreationOptions|LaunchOptions)|ritingDirection)|L(ineBreakMode|ayout(Status|Direction))|A(nimation(Progress|Effect)|ppl(ication(TerminateReply|DelegateReply|PrintReply)|eEventManagerSuspensionID)|ffineTransformStruct|lertStyle))\\b",
        "name": "support.type.cocoa.objcpp"
      },
      "anonymous_pattern_26": {
        "match": "\\bNS(NotFound|Ordered(Ascending|Descending|Same))\\b",
        "name": "support.constant.cocoa.objcpp"
      },
      "anonymous_pattern_27": {
        "match": "\\bNS(MenuDidBeginTracking|ViewDidUpdateTrackingAreas)?Notification\\b",
        "name": "support.constant.notification.cocoa.leopard.objcpp"
      },
      "anonymous_pattern_28": {
        "match": "\\bNS(Menu(Did(RemoveItem|SendAction|ChangeItem|EndTracking|AddItem)|WillSendAction)|S(ystemColorsDidChange|plitView(DidResizeSubviews|WillResizeSubviews))|C(o(nt(extHelpModeDid(Deactivate|Activate)|rolT(intDidChange|extDid(BeginEditing|Change|EndEditing)))|lor(PanelColorDidChange|ListDidChange)|mboBox(Selection(IsChanging|DidChange)|Will(Dismiss|PopUp)))|lassDescriptionNeededForClass)|T(oolbar(DidRemoveItem|WillAddItem)|ext(Storage(DidProcessEditing|WillProcessEditing)|Did(BeginEditing|Change|EndEditing)|View(DidChange(Selection|TypingAttributes)|WillChangeNotifyingTextView))|ableView(Selection(IsChanging|DidChange)|ColumnDid(Resize|Move)))|ImageRepRegistryDidChange|OutlineView(Selection(IsChanging|DidChange)|ColumnDid(Resize|Move)|Item(Did(Collapse|Expand)|Will(Collapse|Expand)))|Drawer(Did(Close|Open)|Will(Close|Open))|PopUpButton(CellWillPopUp|WillPopUp)|View(GlobalFrameDidChange|BoundsDidChange|F(ocusDidChange|rameDidChange))|FontSetChanged|W(indow(Did(Resi(ze|gn(Main|Key))|M(iniaturize|ove)|Become(Main|Key)|ChangeScreen(|Profile)|Deminiaturize|Update|E(ndSheet|xpose))|Will(M(iniaturize|ove)|BeginSheet|Close))|orkspace(SessionDid(ResignActive|BecomeActive)|Did(Mount|TerminateApplication|Unmount|PerformFileOperation|Wake|LaunchApplication)|Will(Sleep|Unmount|PowerOff|LaunchApplication)))|A(ntialiasThresholdChanged|ppl(ication(Did(ResignActive|BecomeActive|Hide|ChangeScreenParameters|U(nhide|pdate)|FinishLaunching)|Will(ResignActive|BecomeActive|Hide|Terminate|U(nhide|pdate)|FinishLaunching))|eEventManagerWillProcessFirstEvent)))Notification\\b",
        "name": "support.constant.notification.cocoa.objcpp"
      },
      "anonymous_pattern_29": {
        "match": "\\bNS(RuleEditor(RowType(Simple|Compound)|NestingMode(Si(ngle|mple)|Compound|List))|GradientDraws(BeforeStartingLocation|AfterEndingLocation)|M(inusSetExpressionType|a(chPortDeallocate(ReceiveRight|SendRight|None)|pTable(StrongMemory|CopyIn|ZeroingWeakMemory|ObjectPointerPersonality)))|B(oxCustom|undleExecutableArchitecture(X86|I386|PPC(64)?)|etweenPredicateOperatorType|ackgroundStyle(Raised|Dark|L(ight|owered)))|S(tring(DrawingTruncatesLastVisibleLine|EncodingConversion(ExternalRepresentation|AllowLossy))|ubqueryExpressionType|p(e(ech(SentenceBoundary|ImmediateBoundary|WordBoundary)|llingState(GrammarFlag|SpellingFlag))|litViewDividerStyleThi(n|ck))|e(rvice(RequestTimedOutError|M(iscellaneousError|alformedServiceDictionaryError)|InvalidPasteboardDataError|ErrorM(inimum|aximum)|Application(NotFoundError|LaunchFailedError))|gmentStyle(Round(Rect|ed)|SmallSquare|Capsule|Textured(Rounded|Square)|Automatic)))|H(UDWindowMask|ashTable(StrongMemory|CopyIn|ZeroingWeakMemory|ObjectPointerPersonality))|N(oModeColorPanel|etServiceNoAutoRename)|C(hangeRedone|o(ntainsPredicateOperatorType|l(orRenderingIntent(RelativeColorimetric|Saturation|Default|Perceptual|AbsoluteColorimetric)|lectorDisabledOption))|ellHit(None|ContentArea|TrackableArea|EditableTextArea))|T(imeZoneNameStyle(S(hort(Standard|DaylightSaving)|tandard)|DaylightSaving)|extFieldDatePickerStyle|ableViewSelectionHighlightStyle(Regular|SourceList)|racking(Mouse(Moved|EnteredAndExited)|CursorUpdate|InVisibleRect|EnabledDuringMouseDrag|A(ssumeInside|ctive(In(KeyWindow|ActiveApp)|WhenFirstResponder|Always))))|I(n(tersectSetExpressionType|dexedColorSpaceModel)|mageScale(None|Proportionally(Down|UpOrDown)|AxesIndependently))|Ope(nGLPFAAllowOfflineRenderers|rationQueue(DefaultMaxConcurrentOperationCount|Priority(High|Normal|Very(High|Low)|Low)))|D(iacriticInsensitiveSearch|ownloadsDirectory)|U(nionSetExpressionType|TF(16(BigEndianStringEncoding|StringEncoding|LittleEndianStringEncoding)|32(BigEndianStringEncoding|StringEncoding|LittleEndianStringEncoding)))|P(ointerFunctions(Ma(chVirtualMemory|llocMemory)|Str(ongMemory|uctPersonality)|C(StringPersonality|opyIn)|IntegerPersonality|ZeroingWeakMemory|O(paque(Memory|Personality)|bjectP(ointerPersonality|ersonality)))|at(hStyle(Standard|NavigationBar|PopUp)|ternColorSpaceModel)|rintPanelShows(Scaling|Copies|Orientation|P(a(perSize|ge(Range|SetupAccessory))|review)))|Executable(RuntimeMismatchError|NotLoadableError|ErrorM(inimum|aximum)|L(inkError|oadError)|ArchitectureMismatchError)|KeyValueObservingOption(Initial|Prior)|F(i(ndPanelSubstringMatchType(StartsWith|Contains|EndsWith|FullWord)|leRead(TooLargeError|UnknownStringEncodingError))|orcedOrderingSearch)|Wi(ndow(BackingLocation(MainMemory|Default|VideoMemory)|Sharing(Read(Only|Write)|None)|CollectionBehavior(MoveToActiveSpace|CanJoinAllSpaces|Default))|dthInsensitiveSearch)|AggregateExpressionType)\\b",
        "name": "support.constant.cocoa.leopard.objcpp"
      },
      "anonymous_pattern_3": {
        "begin": "@\"",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.objcpp"
          }
        },
        "end": "\"",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.objcpp"
          }
        },
        "name": "string.quoted.double.objcpp",
        "patterns": [
          {
            "include": "#string_escaped_char"
          },
          {
            "match": "%(\\d+\\$)?[#0\\- +']*((-?\\d+)|\\*(-?\\d+\\$)?)?(\\.((-?\\d+)|\\*(-?\\d+\\$)?)?)?[@]",
            "name": "constant.other.placeholder.objcpp"
          },
          {
            "include": "#string_placeholder"
          }
        ]
      },
      "anonymous_pattern_30": {
        "match": "\\bNS(R(GB(ModeColorPanel|ColorSpaceModel)|ight(Mouse(D(own(Mask)?|ragged(Mask)?)|Up(Mask)?)|T(ext(Movement|Alignment)|ab(sBezelBorder|StopType))|ArrowFunctionKey)|ound(RectBezelStyle|Bankers|ed(BezelStyle|TokenStyle|DisclosureBezelStyle)|Down|Up|Plain|Line(CapStyle|JoinStyle))|un(StoppedResponse|ContinuesResponse|AbortedResponse)|e(s(izableWindowMask|et(CursorRectsRunLoopOrdering|FunctionKey))|ce(ssedBezelStyle|iver(sCantHandleCommandScriptError|EvaluationScriptError))|turnTextMovement|doFunctionKey|quiredArgumentsMissingScriptError|l(evancyLevelIndicatorStyle|ative(Before|After))|gular(SquareBezelStyle|ControlSize)|moveTraitFontAction)|a(n(domSubelement|geDateMode)|tingLevelIndicatorStyle|dio(ModeMatrix|Button)))|G(IFFileType|lyph(Below|Inscribe(B(elow|ase)|Over(strike|Below)|Above)|Layout(WithPrevious|A(tAPoint|gainstAPoint))|A(ttribute(BidiLevel|Soft|Inscribe|Elastic)|bove))|r(ooveBorder|eaterThan(Comparison|OrEqualTo(Comparison|PredicateOperatorType)|PredicateOperatorType)|a(y(ModeColorPanel|ColorSpaceModel)|dient(None|Con(cave(Strong|Weak)|vex(Strong|Weak)))|phiteControlTint)))|XML(N(o(tationDeclarationKind|de(CompactEmptyElement|IsCDATA|OptionsNone|Use(SingleQuotes|DoubleQuotes)|Pre(serve(NamespaceOrder|C(haracterReferences|DATA)|DTD|Prefixes|E(ntities|mptyElements)|Quotes|Whitespace|A(ttributeOrder|ll))|ttyPrint)|ExpandEmptyElement))|amespaceKind)|CommentKind|TextKind|InvalidKind|D(ocument(X(MLKind|HTMLKind|Include)|HTMLKind|T(idy(XML|HTML)|extKind)|IncludeContentTypeDeclaration|Validate|Kind)|TDKind)|P(arser(GTRequiredError|XMLDeclNot(StartedError|FinishedError)|Mi(splaced(XMLDeclarationError|CDATAEndStringError)|xedContentDeclNot(StartedError|FinishedError))|S(t(andaloneValueError|ringNot(StartedError|ClosedError))|paceRequiredError|eparatorRequiredError)|N(MTOKENRequiredError|o(t(ationNot(StartedError|FinishedError)|WellBalancedError)|DTDError)|amespaceDeclarationError|AMERequiredError)|C(haracterRef(In(DTDError|PrologError|EpilogError)|AtEOFError)|o(nditionalSectionNot(StartedError|FinishedError)|mment(NotFinishedError|ContainsDoubleHyphenError))|DATANotFinishedError)|TagNameMismatchError|In(ternalError|valid(HexCharacterRefError|C(haracter(RefError|InEntityError|Error)|onditionalSectionError)|DecimalCharacterRefError|URIError|Encoding(NameError|Error)))|OutOfMemoryError|D(ocumentStartError|elegateAbortedParseError|OCTYPEDeclNotFinishedError)|U(RI(RequiredError|FragmentError)|n(declaredEntityError|parsedEntityError|knownEncodingError|finishedTagError))|P(CDATARequiredError|ublicIdentifierRequiredError|arsedEntityRef(MissingSemiError|NoNameError|In(Internal(SubsetError|Error)|PrologError|EpilogError)|AtEOFError)|r(ocessingInstructionNot(StartedError|FinishedError)|ematureDocumentEndError))|E(n(codingNotSupportedError|tity(Ref(In(DTDError|PrologError|EpilogError)|erence(MissingSemiError|WithoutNameError)|LoopError|AtEOFError)|BoundaryError|Not(StartedError|FinishedError)|Is(ParameterError|ExternalError)|ValueRequiredError))|qualExpectedError|lementContentDeclNot(StartedError|FinishedError)|xt(ernalS(tandaloneEntityError|ubsetNotFinishedError)|raContentError)|mptyDocumentError)|L(iteralNot(StartedError|FinishedError)|T(RequiredError|SlashRequiredError)|essThanSymbolInAttributeError)|Attribute(RedefinedError|HasNoValueError|Not(StartedError|FinishedError)|ListNot(StartedError|FinishedError)))|rocessingInstructionKind)|E(ntity(GeneralKind|DeclarationKind|UnparsedKind|P(ar(sedKind|ameterKind)|redefined))|lement(Declaration(MixedKind|UndefinedKind|E(lementKind|mptyKind)|Kind|AnyKind)|Kind))|Attribute(N(MToken(sKind|Kind)|otationKind)|CDATAKind|ID(Ref(sKind|Kind)|Kind)|DeclarationKind|En(tit(yKind|iesKind)|umerationKind)|Kind))|M(i(n(XEdge|iaturizableWindowMask|YEdge|uteCalendarUnit)|terLineJoinStyle|ddleSubelement|xedState)|o(nthCalendarUnit|deSwitchFunctionKey|use(Moved(Mask)?|E(ntered(Mask)?|ventSubtype|xited(Mask)?))|veToBezierPathElement|mentary(ChangeButton|Push(Button|InButton)|Light(Button)?))|enuFunctionKey|a(c(intoshInterfaceStyle|OSRomanStringEncoding)|tchesPredicateOperatorType|ppedRead|x(XEdge|YEdge))|ACHOperatingSystem)|B(MPFileType|o(ttomTabsBezelBorder|ldFontMask|rderlessWindowMask|x(Se(condary|parator)|OldStyle|Primary))|uttLineCapStyle|e(zelBorder|velLineJoinStyle|low(Bottom|Top)|gin(sWith(Comparison|PredicateOperatorType)|FunctionKey))|lueControlTint|ack(spaceCharacter|tabTextMovement|ingStore(Retained|Buffered|Nonretained)|TabCharacter|wardsSearch|groundTab)|r(owser(NoColumnResizing|UserColumnResizing|AutoColumnResizing)|eakFunctionKey))|S(h(ift(JISStringEncoding|KeyMask)|ow(ControlGlyphs|InvisibleGlyphs)|adowlessSquareBezelStyle)|y(s(ReqFunctionKey|tem(D(omainMask|efined(Mask)?)|FunctionKey))|mbolStringEncoding)|c(a(nnedOption|le(None|ToFit|Proportionally))|r(oll(er(NoPart|Increment(Page|Line|Arrow)|Decrement(Page|Line|Arrow)|Knob(Slot)?|Arrows(M(inEnd|axEnd)|None|DefaultSetting))|Wheel(Mask)?|LockFunctionKey)|eenChangedEventType))|t(opFunctionKey|r(ingDrawing(OneShot|DisableScreenFontSubstitution|Uses(DeviceMetrics|FontLeading|LineFragmentOrigin))|eam(Status(Reading|NotOpen|Closed|Open(ing)?|Error|Writing|AtEnd)|Event(Has(BytesAvailable|SpaceAvailable)|None|OpenCompleted|E(ndEncountered|rrorOccurred)))))|i(ngle(DateMode|UnderlineStyle)|ze(DownFontAction|UpFontAction))|olarisOperatingSystem|unOSOperatingSystem|pecialPageOrder|e(condCalendarUnit|lect(By(Character|Paragraph|Word)|i(ng(Next|Previous)|onAffinity(Downstream|Upstream))|edTab|FunctionKey)|gmentSwitchTracking(Momentary|Select(One|Any)))|quareLineCapStyle|witchButton|ave(ToOperation|Op(tions(Yes|No|Ask)|eration)|AsOperation)|mall(SquareBezelStyle|C(ontrolSize|apsFontMask)|IconButtonBezelStyle))|H(ighlightModeMatrix|SBModeColorPanel|o(ur(Minute(SecondDatePickerElementFlag|DatePickerElementFlag)|CalendarUnit)|rizontalRuler|meFunctionKey)|TTPCookieAcceptPolicy(Never|OnlyFromMainDocumentDomain|Always)|e(lp(ButtonBezelStyle|KeyMask|FunctionKey)|avierFontAction)|PUXOperatingSystem)|Year(MonthDa(yDatePickerElementFlag|tePickerElementFlag)|CalendarUnit)|N(o(n(StandardCharacterSetFontMask|ZeroWindingRule|activatingPanelMask|LossyASCIIStringEncoding)|Border|t(ification(SuspensionBehavior(Hold|Coalesce|D(eliverImmediately|rop))|NoCoalescing|CoalescingOn(Sender|Name)|DeliverImmediately|PostToAllSessions)|PredicateType|EqualToPredicateOperatorType)|S(cr(iptError|ollerParts)|ubelement|pecifierError)|CellMask|T(itle|opLevelContainersSpecifierError|abs(BezelBorder|NoBorder|LineBorder))|I(nterfaceStyle|mage)|UnderlineStyle|FontChangeAction)|u(ll(Glyph|CellType)|m(eric(Search|PadKeyMask)|berFormatter(Round(Half(Down|Up|Even)|Ceiling|Down|Up|Floor)|Behavior(10|Default)|S(cientificStyle|pellOutStyle)|NoStyle|CurrencyStyle|DecimalStyle|P(ercentStyle|ad(Before(Suffix|Prefix)|After(Suffix|Prefix))))))|e(t(Services(BadArgumentError|NotFoundError|C(ollisionError|ancelledError)|TimeoutError|InvalidError|UnknownError|ActivityInProgress)|workDomainMask)|wlineCharacter|xt(StepInterfaceStyle|FunctionKey))|EXTSTEPStringEncoding|a(t(iveShortGlyphPacking|uralTextAlignment)|rrowFontMask))|C(hange(ReadOtherContents|GrayCell(Mask)?|BackgroundCell(Mask)?|Cleared|Done|Undone|Autosaved)|MYK(ModeColorPanel|ColorSpaceModel)|ircular(BezelStyle|Slider)|o(n(stantValueExpressionType|t(inuousCapacityLevelIndicatorStyle|entsCellMask|ain(sComparison|erSpecifierError)|rol(Glyph|KeyMask))|densedFontMask)|lor(Panel(RGBModeMask|GrayModeMask|HSBModeMask|C(MYKModeMask|olorListModeMask|ustomPaletteModeMask|rayonModeMask)|WheelModeMask|AllModesMask)|ListModeColorPanel)|reServiceDirectory|m(p(osite(XOR|Source(In|O(ut|ver)|Atop)|Highlight|C(opy|lear)|Destination(In|O(ut|ver)|Atop)|Plus(Darker|Lighter))|ressedFontMask)|mandKeyMask))|u(stom(SelectorPredicateOperatorType|PaletteModeColorPanel)|r(sor(Update(Mask)?|PointingDevice)|veToBezierPathElement))|e(nterT(extAlignment|abStopType)|ll(State|H(ighlighted|as(Image(Horizontal|OnLeftOrBottom)|OverlappingImage))|ChangesContents|Is(Bordered|InsetButton)|Disabled|Editable|LightsBy(Gray|Background|Contents)|AllowsMixedState))|l(ipPagination|o(s(ePathBezierPathElement|ableWindowMask)|ckAndCalendarDatePickerStyle)|ear(ControlTint|DisplayFunctionKey|LineFunctionKey))|a(seInsensitive(Search|PredicateOption)|n(notCreateScriptCommandError|cel(Button|TextMovement))|chesDirectory|lculation(NoError|Overflow|DivideByZero|Underflow|LossOfPrecision)|rriageReturnCharacter)|r(itical(Request|AlertStyle)|ayonModeColorPanel))|T(hick(SquareBezelStyle|erSquareBezelStyle)|ypesetter(Behavior|HorizontalTabAction|ContainerBreakAction|ZeroAdvancementAction|OriginalBehavior|ParagraphBreakAction|WhitespaceAction|L(ineBreakAction|atestBehavior))|i(ckMark(Right|Below|Left|Above)|tledWindowMask|meZoneDatePickerElementFlag)|o(olbarItemVisibilityPriority(Standard|High|User|Low)|pTabsBezelBorder|ggleButton)|IFF(Compression(N(one|EXT)|CCITTFAX(3|4)|OldJPEG|JPEG|PackBits|LZW)|FileType)|e(rminate(Now|Cancel|Later)|xt(Read(InapplicableDocumentTypeError|WriteErrorM(inimum|aximum))|Block(M(i(nimum(Height|Width)|ddleAlignment)|a(rgin|ximum(Height|Width)))|B(o(ttomAlignment|rder)|aselineAlignment)|Height|TopAlignment|P(ercentageValueType|adding)|Width|AbsoluteValueType)|StorageEdited(Characters|Attributes)|CellType|ured(RoundedBezelStyle|BackgroundWindowMask|SquareBezelStyle)|Table(FixedLayoutAlgorithm|AutomaticLayoutAlgorithm)|Field(RoundedBezel|SquareBezel|AndStepperDatePickerStyle)|WriteInapplicableDocumentTypeError|ListPrependEnclosingMarker))|woByteGlyphPacking|ab(Character|TextMovement|le(tP(oint(Mask|EventSubtype)?|roximity(Mask|EventSubtype)?)|Column(NoResizing|UserResizingMask|AutoresizingMask)|View(ReverseSequentialColumnAutoresizingStyle|GridNone|S(olid(HorizontalGridLineMask|VerticalGridLineMask)|equentialColumnAutoresizingStyle)|NoColumnAutoresizing|UniformColumnAutoresizingStyle|FirstColumnOnlyAutoresizingStyle|LastColumnOnlyAutoresizingStyle)))|rackModeMatrix)|I(n(sert(CharFunctionKey|FunctionKey|LineFunctionKey)|t(Type|ernalS(criptError|pecifierError))|dexSubelement|validIndexSpecifierError|formational(Request|AlertStyle)|PredicateOperatorType)|talicFontMask|SO(2022JPStringEncoding|Latin(1StringEncoding|2StringEncoding))|dentityMappingCharacterCollection|llegalTextMovement|mage(R(ight|ep(MatchesDevice|LoadStatus(ReadingHeader|Completed|InvalidData|Un(expectedEOF|knownType)|WillNeedAllData)))|Below|C(ellType|ache(BySize|Never|Default|Always))|Interpolation(High|None|Default|Low)|O(nly|verlaps)|Frame(Gr(oove|ayBezel)|Button|None|Photo)|L(oadStatus(ReadError|C(ompleted|ancelled)|InvalidData|UnexpectedEOF)|eft)|A(lign(Right|Bottom(Right|Left)?|Center|Top(Right|Left)?|Left)|bove)))|O(n(State|eByteGlyphPacking|OffButton|lyScrollerArrows)|ther(Mouse(D(own(Mask)?|ragged(Mask)?)|Up(Mask)?)|TextMovement)|SF1OperatingSystem|pe(n(GL(GO(Re(setLibrary|tainRenderers)|ClearFormatCache|FormatCacheSize)|PFA(R(obust|endererID)|M(inimumPolicy|ulti(sample|Screen)|PSafe|aximumPolicy)|BackingStore|S(creenMask|te(ncilSize|reo)|ingleRenderer|upersample|ample(s|Buffers|Alpha))|NoRecovery|C(o(lor(Size|Float)|mpliant)|losestPolicy)|OffScreen|D(oubleBuffer|epthSize)|PixelBuffer|VirtualScreenCount|FullScreen|Window|A(cc(umSize|elerated)|ux(Buffers|DepthStencil)|l(phaSize|lRenderers))))|StepUnicodeReservedBase)|rationNotSupportedForKeyS(criptError|pecifierError))|ffState|KButton|rPredicateType|bjC(B(itfield|oolType)|S(hortType|tr(ingType|uctType)|electorType)|NoType|CharType|ObjectType|DoubleType|UnionType|PointerType|VoidType|FloatType|Long(Type|longType)|ArrayType))|D(i(s(c(losureBezelStyle|reteCapacityLevelIndicatorStyle)|playWindowRunLoopOrdering)|acriticInsensitivePredicateOption|rect(Selection|PredicateModifier))|o(c(ModalWindowMask|ument(Directory|ationDirectory))|ubleType|wn(TextMovement|ArrowFunctionKey))|e(s(cendingPageOrder|ktopDirectory)|cimalTabStopType|v(ice(NColorSpaceModel|IndependentModifierFlagsMask)|eloper(Directory|ApplicationDirectory))|fault(ControlTint|TokenStyle)|lete(Char(acter|FunctionKey)|FunctionKey|LineFunctionKey)|moApplicationDirectory)|a(yCalendarUnit|teFormatter(MediumStyle|Behavior(10|Default)|ShortStyle|NoStyle|FullStyle|LongStyle))|ra(wer(Clos(ingState|edState)|Open(ingState|State))|gOperation(Generic|Move|None|Copy|Delete|Private|Every|Link|All)))|U(ser(CancelledError|D(irectory|omainMask)|FunctionKey)|RL(Handle(NotLoaded|Load(Succeeded|InProgress|Failed))|CredentialPersistence(None|Permanent|ForSession))|n(scaledWindowMask|cachedRead|i(codeStringEncoding|talicFontMask|fiedTitleAndToolbarWindowMask)|d(o(CloseGroupingRunLoopOrdering|FunctionKey)|e(finedDateComponent|rline(Style(Single|None|Thick|Double)|Pattern(Solid|D(ot|ash(Dot(Dot)?)?)))))|known(ColorSpaceModel|P(ointingDevice|ageOrder)|KeyS(criptError|pecifierError))|boldFontMask)|tilityWindowMask|TF8StringEncoding|p(dateWindowsRunLoopOrdering|TextMovement|ArrowFunctionKey))|J(ustifiedTextAlignment|PEG(2000FileType|FileType)|apaneseEUC(GlyphPacking|StringEncoding))|P(o(s(t(Now|erFontMask|WhenIdle|ASAP)|iti(on(Replace|Be(fore|ginning)|End|After)|ve(IntType|DoubleType|FloatType)))|pUp(NoArrow|ArrowAt(Bottom|Center))|werOffEventType|rtraitOrientation)|NGFileType|ush(InCell(Mask)?|OnPushOffButton)|e(n(TipMask|UpperSideMask|PointingDevice|LowerSideMask)|riodic(Mask)?)|P(S(caleField|tatus(Title|Field)|aveButton)|N(ote(Title|Field)|ame(Title|Field))|CopiesField|TitleField|ImageButton|OptionsButton|P(a(perFeedButton|ge(Range(To|From)|ChoiceMatrix))|reviewButton)|LayoutButton)|lainTextTokenStyle|a(useFunctionKey|ragraphSeparatorCharacter|ge(DownFunctionKey|UpFunctionKey))|r(int(ing(ReplyLater|Success|Cancelled|Failure)|ScreenFunctionKey|erTable(NotFound|OK|Error)|FunctionKey)|o(p(ertyList(XMLFormat|MutableContainers(AndLeaves)?|BinaryFormat|Immutable|OpenStepFormat)|rietaryStringEncoding)|gressIndicator(BarStyle|SpinningStyle|Preferred(SmallThickness|Thickness|LargeThickness|AquaThickness)))|e(ssedTab|vFunctionKey))|L(HeightForm|CancelButton|TitleField|ImageButton|O(KButton|rientationMatrix)|UnitsButton|PaperNameButton|WidthForm))|E(n(terCharacter|d(sWith(Comparison|PredicateOperatorType)|FunctionKey))|v(e(nOddWindingRule|rySubelement)|aluatedObjectExpressionType)|qualTo(Comparison|PredicateOperatorType)|ra(serPointingDevice|CalendarUnit|DatePickerElementFlag)|x(clude(10|QuickDrawElementsIconCreationOption)|pandedFontMask|ecuteFunctionKey))|V(i(ew(M(in(XMargin|YMargin)|ax(XMargin|YMargin))|HeightSizable|NotSizable|WidthSizable)|aPanelFontAction)|erticalRuler|a(lidationErrorM(inimum|aximum)|riableExpressionType))|Key(SpecifierEvaluationScriptError|Down(Mask)?|Up(Mask)?|PathExpressionType|Value(MinusSetMutation|SetSetMutation|Change(Re(placement|moval)|Setting|Insertion)|IntersectSetMutation|ObservingOption(New|Old)|UnionSetMutation|ValidationError))|QTMovie(NormalPlayback|Looping(BackAndForthPlayback|Playback))|F(1(1FunctionKey|7FunctionKey|2FunctionKey|8FunctionKey|3FunctionKey|9FunctionKey|4FunctionKey|5FunctionKey|FunctionKey|0FunctionKey|6FunctionKey)|7FunctionKey|i(nd(PanelAction(Replace(A(ndFind|ll(InSelection)?))?|S(howFindPanel|e(tFindString|lectAll(InSelection)?))|Next|Previous)|FunctionKey)|tPagination|le(Read(No(SuchFileError|PermissionError)|CorruptFileError|In(validFileNameError|applicableStringEncodingError)|Un(supportedSchemeError|knownError))|HandlingPanel(CancelButton|OKButton)|NoSuchFileError|ErrorM(inimum|aximum)|Write(NoPermissionError|In(validFileNameError|applicableStringEncodingError)|OutOfSpaceError|Un(supportedSchemeError|knownError))|LockingError)|xedPitchFontMask)|2(1FunctionKey|7FunctionKey|2FunctionKey|8FunctionKey|3FunctionKey|9FunctionKey|4FunctionKey|5FunctionKey|FunctionKey|0FunctionKey|6FunctionKey)|o(nt(Mo(noSpaceTrait|dernSerifsClass)|BoldTrait|S(ymbolicClass|criptsClass|labSerifsClass|ansSerifClass)|C(o(ndensedTrait|llectionApplicationOnlyMask)|larendonSerifsClass)|TransitionalSerifsClass|I(ntegerAdvancementsRenderingMode|talicTrait)|O(ldStyleSerifsClass|rnamentalsClass)|DefaultRenderingMode|U(nknownClass|IOptimizedTrait)|Panel(S(hadowEffectModeMask|t(andardModesMask|rikethroughEffectModeMask)|izeModeMask)|CollectionModeMask|TextColorEffectModeMask|DocumentColorEffectModeMask|UnderlineEffectModeMask|FaceModeMask|All(ModesMask|EffectsModeMask))|ExpandedTrait|VerticalTrait|F(amilyClassMask|reeformSerifsClass)|Antialiased(RenderingMode|IntegerAdvancementsRenderingMode))|cusRing(Below|Type(None|Default|Exterior)|Only|Above)|urByteGlyphPacking|rm(attingError(M(inimum|aximum))?|FeedCharacter))|8FunctionKey|unction(ExpressionType|KeyMask)|3(1FunctionKey|2FunctionKey|3FunctionKey|4FunctionKey|5FunctionKey|FunctionKey|0FunctionKey)|9FunctionKey|4FunctionKey|P(RevertButton|S(ize(Title|Field)|etButton)|CurrentField|Preview(Button|Field))|l(oat(ingPointSamplesBitmapFormat|Type)|agsChanged(Mask)?)|axButton|5FunctionKey|6FunctionKey)|W(heelModeColorPanel|indow(s(NTOperatingSystem|CP125(1StringEncoding|2StringEncoding|3StringEncoding|4StringEncoding|0StringEncoding)|95(InterfaceStyle|OperatingSystem))|M(iniaturizeButton|ovedEventType)|Below|CloseButton|ToolbarButton|ZoomButton|Out|DocumentIconButton|ExposedEventType|Above)|orkspaceLaunch(NewInstance|InhibitingBackgroundOnly|Default|PreferringClassic|WithoutA(ctivation|ddingToRecents)|A(sync|nd(Hide(Others)?|Print)|llowingClassicStartup))|eek(day(CalendarUnit|OrdinalCalendarUnit)|CalendarUnit)|a(ntsBidiLevels|rningAlertStyle)|r(itingDirection(RightToLeft|Natural|LeftToRight)|apCalendarComponents))|L(i(stModeMatrix|ne(Moves(Right|Down|Up|Left)|B(order|reakBy(C(harWrapping|lipping)|Truncating(Middle|Head|Tail)|WordWrapping))|S(eparatorCharacter|weep(Right|Down|Up|Left))|ToBezierPathElement|DoesntMove|arSlider)|teralSearch|kePredicateOperatorType|ghterFontAction|braryDirectory)|ocalDomainMask|e(ssThan(Comparison|OrEqualTo(Comparison|PredicateOperatorType)|PredicateOperatorType)|ft(Mouse(D(own(Mask)?|ragged(Mask)?)|Up(Mask)?)|T(ext(Movement|Alignment)|ab(sBezelBorder|StopType))|ArrowFunctionKey))|a(yout(RightToLeft|NotDone|CantFit|OutOfGlyphs|Done|LeftToRight)|ndscapeOrientation)|ABColorSpaceModel)|A(sc(iiWithDoubleByteEUCGlyphPacking|endingPageOrder)|n(y(Type|PredicateModifier|EventMask)|choredSearch|imation(Blocking|Nonblocking(Threaded)?|E(ffect(DisappearingItemDefault|Poof)|ase(In(Out)?|Out))|Linear)|dPredicateType)|t(Bottom|tachmentCharacter|omicWrite|Top)|SCIIStringEncoding|d(obe(GB1CharacterCollection|CNS1CharacterCollection|Japan(1CharacterCollection|2CharacterCollection)|Korea1CharacterCollection)|dTraitFontAction|minApplicationDirectory)|uto(saveOperation|Pagination)|pp(lication(SupportDirectory|D(irectory|e(fined(Mask)?|legateReply(Success|Cancel|Failure)|activatedEventType))|ActivatedEventType)|KitDefined(Mask)?)|l(ternateKeyMask|pha(ShiftKeyMask|NonpremultipliedBitmapFormat|FirstBitmapFormat)|ert(SecondButtonReturn|ThirdButtonReturn|OtherReturn|DefaultReturn|ErrorReturn|FirstButtonReturn|AlternateReturn)|l(ScrollerParts|DomainsMask|PredicateModifier|LibrariesDirectory|ApplicationsDirectory))|rgument(sWrongScriptError|EvaluationScriptError)|bove(Bottom|Top)|WTEventType))\\b",
        "name": "support.constant.cocoa.objcpp"
      },
      "anonymous_pattern_4": {
        "begin": "\\b(id)\\s*(?=<)",
        "beginCaptures": {
          "1": {
            "name": "storage.type.objcpp"
          }
        },
        "end": "(?<=>)",
        "name": "meta.id-with-protocol.objcpp",
        "patterns": [
          {
            "include": "#protocol_list"
          }
        ]
      },
      "anonymous_pattern_5": {
        "match": "\\b(NS_DURING|NS_HANDLER|NS_ENDHANDLER)\\b",
        "name": "keyword.control.macro.objcpp"
      },
      "anonymous_pattern_7": {
        "captures": {
          "1": {
            "name": "punctuation.definition.keyword.objcpp"
          }
        },
        "match": "(@)(try|catch|finally|throw)\\b",
        "name": "keyword.control.exception.objcpp"
      },
      "anonymous_pattern_8": {
        "captures": {
          "1": {
            "name": "punctuation.definition.keyword.objcpp"
          }
        },
        "match": "(@)(synchronized)\\b",
        "name": "keyword.control.synchronize.objcpp"
      },
      "anonymous_pattern_9": {
        "captures": {
          "1": {
            "name": "punctuation.definition.keyword.objcpp"
          }
        },
        "match": "(@)(required|optional)\\b",
        "name": "keyword.control.protocol-specification.objcpp"
      },
      "apple_foundation_functional_macros": {
        "begin": "(\\b(?:API_AVAILABLE|API_DEPRECATED|API_UNAVAILABLE|NS_AVAILABLE|NS_AVAILABLE_MAC|NS_AVAILABLE_IOS|NS_DEPRECATED|NS_DEPRECATED_MAC|NS_DEPRECATED_IOS|NS_SWIFT_NAME))(?:(?:\\s)+)?(\\()",
        "beginCaptures": {
          "1": {
            "name": "entity.name.function.preprocessor.apple-foundation.objcpp"
          },
          "2": {
            "name": "punctuation.section.macro.arguments.begin.bracket.round.apple-foundation.objcpp"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.macro.arguments.end.bracket.round.apple-foundation.objcpp"
          }
        },
        "name": "meta.preprocessor.macro.callable.apple-foundation.objcpp",
        "patterns": [
          {
            "include": "#c_lang"
          }
        ]
      },
      "bracketed_content": {
        "begin": "\\[",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.scope.begin.objcpp"
          }
        },
        "end": "\\]",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.scope.end.objcpp"
          }
        },
        "name": "meta.bracketed.objcpp",
        "patterns": [
          {
            "begin": "(?=predicateWithFormat:)(?<=NSPredicate )(predicateWithFormat:)",
            "beginCaptures": {
              "1": {
                "name": "support.function.any-method.objcpp"
              },
              "2": {
                "name": "punctuation.separator.arguments.objcpp"
              }
            },
            "end": "(?=\\])",
            "name": "meta.function-call.predicate.objcpp",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "punctuation.separator.arguments.objcpp"
                  }
                },
                "match": "\\bargument(Array|s)(:)",
                "name": "support.function.any-method.name-of-parameter.objcpp"
              },
              {
                "captures": {
                  "1": {
                    "name": "punctuation.separator.arguments.objcpp"
                  }
                },
                "match": "\\b\\w+(:)",
                "name": "invalid.illegal.unknown-method.objcpp"
              },
              {
                "begin": "@\"",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.objcpp"
                  }
                },
                "end": "\"",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.objcpp"
                  }
                },
                "name": "string.quoted.double.objcpp",
                "patterns": [
                  {
                    "match": "\\b(AND|OR|NOT|IN)\\b",
                    "name": "keyword.operator.logical.predicate.cocoa.objcpp"
                  },
                  {
                    "match": "\\b(ALL|ANY|SOME|NONE)\\b",
                    "name": "constant.language.predicate.cocoa.objcpp"
                  },
                  {
                    "match": "\\b(NULL|NIL|SELF|TRUE|YES|FALSE|NO|FIRST|LAST|SIZE)\\b",
                    "name": "constant.language.predicate.cocoa.objcpp"
                  },
                  {
                    "match": "\\b(MATCHES|CONTAINS|BEGINSWITH|ENDSWITH|BETWEEN)\\b",
                    "name": "keyword.operator.comparison.predicate.cocoa.objcpp"
                  },
                  {
                    "match": "\\bC(ASEINSENSITIVE|I)\\b",
                    "name": "keyword.other.modifier.predicate.cocoa.objcpp"
                  },
                  {
                    "match": "\\b(ANYKEY|SUBQUERY|CAST|TRUEPREDICATE|FALSEPREDICATE)\\b",
                    "name": "keyword.other.predicate.cocoa.objcpp"
                  },
                  {
                    "match": "\\\\(\\\\|[abefnrtv'\"?]|[0-3]\\d{,2}|[4-7]\\d?|x[a-zA-Z0-9]+)",
                    "name": "constant.character.escape.objcpp"
                  },
                  {
                    "match": "\\\\.",
                    "name": "invalid.illegal.unknown-escape.objcpp"
                  }
                ]
              },
              {
                "include": "#special_variables"
              },
              {
                "include": "#c_functions"
              },
              {
                "include": "$base"
              }
            ]
          },
          {
            "begin": "(?=\\w)(?<=[\\w\\])\"] )(\\w+(?:(:)|(?=\\])))",
            "beginCaptures": {
              "1": {
                "name": "support.function.any-method.objcpp"
              },
              "2": {
                "name": "punctuation.separator.arguments.objcpp"
              }
            },
            "end": "(?=\\])",
            "name": "meta.function-call.objcpp",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "punctuation.separator.arguments.objcpp"
                  }
                },
                "match": "\\b\\w+(:)",
                "name": "support.function.any-method.name-of-parameter.objcpp"
              },
              {
                "include": "#special_variables"
              },
              {
                "include": "#c_functions"
              },
              {
                "include": "$base"
              }
            ]
          },
          {
            "include": "#special_variables"
          },
          {
            "include": "#c_functions"
          },
          {
            "include": "$self"
          }
        ]
      },
      "c_functions": {
        "patterns": [
          {
            "captures": {
              "1": {
                "name": "punctuation.whitespace.support.function.leading.objcpp"
              },
              "2": {
                "name": "support.function.C99.objcpp"
              }
            },
            "match": "(\\s*)\\b(hypot(f|l)?|s(scanf|ystem|nprintf|ca(nf|lb(n(f|l)?|ln(f|l)?))|i(n(h(f|l)?|f|l)?|gn(al|bit))|tr(s(tr|pn)|nc(py|at|mp)|c(spn|hr|oll|py|at|mp)|to(imax|d|u(l(l)?|max)|k|f|l(d|l)?)|error|pbrk|ftime|len|rchr|xfrm)|printf|et(jmp|vbuf|locale|buf)|qrt(f|l)?|w(scanf|printf)|rand)|n(e(arbyint(f|l)?|xt(toward(f|l)?|after(f|l)?))|an(f|l)?)|c(s(in(h(f|l)?|f|l)?|qrt(f|l)?)|cos(h(f)?|f|l)?|imag(f|l)?|t(ime|an(h(f|l)?|f|l)?)|o(s(h(f|l)?|f|l)?|nj(f|l)?|pysign(f|l)?)|p(ow(f|l)?|roj(f|l)?)|e(il(f|l)?|xp(f|l)?)|l(o(ck|g(f|l)?)|earerr)|a(sin(h(f|l)?|f|l)?|cos(h(f|l)?|f|l)?|tan(h(f|l)?|f|l)?|lloc|rg(f|l)?|bs(f|l)?)|real(f|l)?|brt(f|l)?)|t(ime|o(upper|lower)|an(h(f|l)?|f|l)?|runc(f|l)?|gamma(f|l)?|mp(nam|file))|i(s(space|n(ormal|an)|cntrl|inf|digit|u(nordered|pper)|p(unct|rint)|finite|w(space|c(ntrl|type)|digit|upper|p(unct|rint)|lower|al(num|pha)|graph|xdigit|blank)|l(ower|ess(equal|greater)?)|al(num|pha)|gr(eater(equal)?|aph)|xdigit|blank)|logb(f|l)?|max(div|abs))|di(v|fftime)|_Exit|unget(c|wc)|p(ow(f|l)?|ut(s|c(har)?|wc(har)?)|error|rintf)|e(rf(c(f|l)?|f|l)?|x(it|p(2(f|l)?|f|l|m1(f|l)?)?))|v(s(scanf|nprintf|canf|printf|w(scanf|printf))|printf|f(scanf|printf|w(scanf|printf))|w(scanf|printf)|a_(start|copy|end|arg))|qsort|f(s(canf|e(tpos|ek))|close|tell|open|dim(f|l)?|p(classify|ut(s|c|w(s|c))|rintf)|e(holdexcept|set(e(nv|xceptflag)|round)|clearexcept|testexcept|of|updateenv|r(aiseexcept|ror)|get(e(nv|xceptflag)|round))|flush|w(scanf|ide|printf|rite)|loor(f|l)?|abs(f|l)?|get(s|c|pos|w(s|c))|re(open|e|ad|xp(f|l)?)|m(in(f|l)?|od(f|l)?|a(f|l|x(f|l)?)?))|l(d(iv|exp(f|l)?)|o(ngjmp|cal(time|econv)|g(1(p(f|l)?|0(f|l)?)|2(f|l)?|f|l|b(f|l)?)?)|abs|l(div|abs|r(int(f|l)?|ound(f|l)?))|r(int(f|l)?|ound(f|l)?)|gamma(f|l)?)|w(scanf|c(s(s(tr|pn)|nc(py|at|mp)|c(spn|hr|oll|py|at|mp)|to(imax|d|u(l(l)?|max)|k|f|l(d|l)?|mbs)|pbrk|ftime|len|r(chr|tombs)|xfrm)|to(b|mb)|rtomb)|printf|mem(set|c(hr|py|mp)|move))|a(s(sert|ctime|in(h(f|l)?|f|l)?)|cos(h(f|l)?|f|l)?|t(o(i|f|l(l)?)|exit|an(h(f|l)?|2(f|l)?|f|l)?)|b(s|ort))|g(et(s|c(har)?|env|wc(har)?)|mtime)|r(int(f|l)?|ound(f|l)?|e(name|alloc|wind|m(ove|quo(f|l)?|ainder(f|l)?))|a(nd|ise))|b(search|towc)|m(odf(f|l)?|em(set|c(hr|py|mp)|move)|ktime|alloc|b(s(init|towcs|rtowcs)|towc|len|r(towc|len))))\\b"
          },
          {
            "captures": {
              "1": {
                "name": "punctuation.whitespace.function-call.leading.objcpp"
              },
              "2": {
                "name": "support.function.any-method.objcpp"
              },
              "3": {
                "name": "punctuation.definition.parameters.objcpp"
              }
            },
            "match": "(?:(?=\\s)(?:(?<=else|new|return)|(?<!\\w))(\\s+))?(\\b(?!(while|for|do|if|else|switch|catch|enumerate|return|r?iterate)\\s*\\()(?:(?!NS)[A-Za-z_][A-Za-z0-9_]*+\\b|::)++)\\s*(\\()",
            "name": "meta.function-call.objcpp"
          }
        ]
      },
      "c_lang": {
        "patterns": [
          {
            "include": "#preprocessor-rule-enabled"
          },
          {
            "include": "#preprocessor-rule-disabled"
          },
          {
            "include": "#preprocessor-rule-conditional"
          },
          {
            "include": "#comments"
          },
          {
            "include": "#switch_statement"
          },
          {
            "match": "\\b(break|continue|do|else|for|goto|if|_Pragma|return|while)\\b",
            "name": "keyword.control.objcpp"
          },
          {
            "include": "#storage_types"
          },
          {
            "match": "typedef",
            "name": "keyword.other.typedef.objcpp"
          },
          {
            "match": "\\bin\\b",
            "name": "keyword.other.in.objcpp"
          },
          {
            "match": "\\b(const|extern|register|restrict|static|volatile|inline|__block)\\b",
            "name": "storage.modifier.objcpp"
          },
          {
            "match": "\\bk[A-Z]\\w*\\b",
            "name": "constant.other.variable.mac-classic.objcpp"
          },
          {
            "match": "\\bg[A-Z]\\w*\\b",
            "name": "variable.other.readwrite.global.mac-classic.objcpp"
          },
          {
            "match": "\\bs[A-Z]\\w*\\b",
            "name": "variable.other.readwrite.static.mac-classic.objcpp"
          },
          {
            "match": "\\b(NULL|true|false|TRUE|FALSE)\\b",
            "name": "constant.language.objcpp"
          },
          {
            "include": "#operators"
          },
          {
            "include": "#numbers"
          },
          {
            "include": "#strings"
          },
          {
            "include": "#special_variables"
          },
          {
            "begin": "^\\s*((\\#)\\s*define)\\s+((?<id>[a-zA-Z_$][\\w$]*))(?:(\\()(\\s*\\g<id>\\s*((,)\\s*\\g<id>\\s*)*(?:\\.\\.\\.)?)(\\)))?",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.directive.define.objcpp"
              },
              "2": {
                "name": "punctuation.definition.directive.objcpp"
              },
              "3": {
                "name": "entity.name.function.preprocessor.objcpp"
              },
              "5": {
                "name": "punctuation.definition.parameters.begin.objcpp"
              },
              "6": {
                "name": "variable.parameter.preprocessor.objcpp"
              },
              "8": {
                "name": "punctuation.separator.parameters.objcpp"
              },
              "9": {
                "name": "punctuation.definition.parameters.end.objcpp"
              }
            },
            "end": "(?=(?://|/\\*))|(?<!\\\\)(?=\\n)",
            "name": "meta.preprocessor.macro.objcpp",
            "patterns": [
              {
                "include": "#preprocessor-rule-define-line-contents"
              }
            ]
          },
          {
            "begin": "^\\s*((#)\\s*(error|warning))\\b\\s*",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.directive.diagnostic.$3.objcpp"
              },
              "2": {
                "name": "punctuation.definition.directive.objcpp"
              }
            },
            "end": "(?<!\\\\)(?=\\n)",
            "name": "meta.preprocessor.diagnostic.objcpp",
            "patterns": [
              {
                "begin": "\"",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.objcpp"
                  }
                },
                "end": "\"|(?<!\\\\)(?=\\s*\\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.objcpp"
                  }
                },
                "name": "string.quoted.double.objcpp",
                "patterns": [
                  {
                    "include": "#line_continuation_character"
                  }
                ]
              },
              {
                "begin": "'",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.objcpp"
                  }
                },
                "end": "'|(?<!\\\\)(?=\\s*\\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.objcpp"
                  }
                },
                "name": "string.quoted.single.objcpp",
                "patterns": [
                  {
                    "include": "#line_continuation_character"
                  }
                ]
              },
              {
                "begin": "[^'\"]",
                "end": "(?<!\\\\)(?=\\s*\\n)",
                "name": "string.unquoted.single.objcpp",
                "patterns": [
                  {
                    "include": "#line_continuation_character"
                  },
                  {
                    "include": "#comments"
                  }
                ]
              }
            ]
          },
          {
            "begin": "^\\s*((#)\\s*(include(?:_next)?|import))\\b\\s*",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.directive.$3.objcpp"
              },
              "2": {
                "name": "punctuation.definition.directive.objcpp"
              }
            },
            "end": "(?=(?://|/\\*))|(?<!\\\\)(?=\\n)",
            "name": "meta.preprocessor.include.objcpp",
            "patterns": [
              {
                "include": "#line_continuation_character"
              },
              {
                "begin": "\"",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.objcpp"
                  }
                },
                "end": "\"",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.objcpp"
                  }
                },
                "name": "string.quoted.double.include.objcpp"
              },
              {
                "begin": "<",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.objcpp"
                  }
                },
                "end": ">",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.objcpp"
                  }
                },
                "name": "string.quoted.other.lt-gt.include.objcpp"
              }
            ]
          },
          {
            "include": "#pragma-mark"
          },
          {
            "begin": "^\\s*((#)\\s*line)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.directive.line.objcpp"
              },
              "2": {
                "name": "punctuation.definition.directive.objcpp"
              }
            },
            "end": "(?=(?://|/\\*))|(?<!\\\\)(?=\\n)",
            "name": "meta.preprocessor.objcpp",
            "patterns": [
              {
                "include": "#strings"
              },
              {
                "include": "#numbers"
              },
              {
                "include": "#line_continuation_character"
              }
            ]
          },
          {
            "begin": "^\\s*(?:((#)\\s*undef))\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.directive.undef.objcpp"
              },
              "2": {
                "name": "punctuation.definition.directive.objcpp"
              }
            },
            "end": "(?=(?://|/\\*))|(?<!\\\\)(?=\\n)",
            "name": "meta.preprocessor.objcpp",
            "patterns": [
              {
                "match": "[a-zA-Z_$][\\w$]*",
                "name": "entity.name.function.preprocessor.objcpp"
              },
              {
                "include": "#line_continuation_character"
              }
            ]
          },
          {
            "begin": "^\\s*(?:((#)\\s*pragma))\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.directive.pragma.objcpp"
              },
              "2": {
                "name": "punctuation.definition.directive.objcpp"
              }
            },
            "end": "(?=(?://|/\\*))|(?<!\\\\)(?=\\n)",
            "name": "meta.preprocessor.pragma.objcpp",
            "patterns": [
              {
                "include": "#strings"
              },
              {
                "match": "[a-zA-Z_$][\\w\\-$]*",
                "name": "entity.other.attribute-name.pragma.preprocessor.objcpp"
              },
              {
                "include": "#numbers"
              },
              {
                "include": "#line_continuation_character"
              }
            ]
          },
          {
            "match": "\\b(u_char|u_short|u_int|u_long|ushort|uint|u_quad_t|quad_t|qaddr_t|caddr_t|daddr_t|div_t|dev_t|fixpt_t|blkcnt_t|blksize_t|gid_t|in_addr_t|in_port_t|ino_t|key_t|mode_t|nlink_t|id_t|pid_t|off_t|segsz_t|swblk_t|uid_t|id_t|clock_t|size_t|ssize_t|time_t|useconds_t|suseconds_t)\\b",
            "name": "support.type.sys-types.objcpp"
          },
          {
            "match": "\\b(pthread_attr_t|pthread_cond_t|pthread_condattr_t|pthread_mutex_t|pthread_mutexattr_t|pthread_once_t|pthread_rwlock_t|pthread_rwlockattr_t|pthread_t|pthread_key_t)\\b",
            "name": "support.type.pthread.objcpp"
          },
          {
            "match": "\\b(int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|int_least8_t|int_least16_t|int_least32_t|int_least64_t|uint_least8_t|uint_least16_t|uint_least32_t|uint_least64_t|int_fast8_t|int_fast16_t|int_fast32_t|int_fast64_t|uint_fast8_t|uint_fast16_t|uint_fast32_t|uint_fast64_t|intptr_t|uintptr_t|intmax_t|intmax_t|uintmax_t|uintmax_t)\\b",
            "name": "support.type.stdint.objcpp"
          },
          {
            "match": "\\b(noErr|kNilOptions|kInvalidID|kVariableLengthArray)\\b",
            "name": "support.constant.mac-classic.objcpp"
          },
          {
            "match": "\\b(AbsoluteTime|Boolean|Byte|ByteCount|ByteOffset|BytePtr|CompTimeValue|ConstLogicalAddress|ConstStrFileNameParam|ConstStringPtr|Duration|Fixed|FixedPtr|Float32|Float32Point|Float64|Float80|Float96|FourCharCode|Fract|FractPtr|Handle|ItemCount|LogicalAddress|OptionBits|OSErr|OSStatus|OSType|OSTypePtr|PhysicalAddress|ProcessSerialNumber|ProcessSerialNumberPtr|ProcHandle|Ptr|ResType|ResTypePtr|ShortFixed|ShortFixedPtr|SignedByte|SInt16|SInt32|SInt64|SInt8|Size|StrFileName|StringHandle|StringPtr|TimeBase|TimeRecord|TimeScale|TimeValue|TimeValue64|UInt16|UInt32|UInt64|UInt8|UniChar|UniCharCount|UniCharCountPtr|UniCharPtr|UnicodeScalarValue|UniversalProcHandle|UniversalProcPtr|UnsignedFixed|UnsignedFixedPtr|UnsignedWide|UTF16Char|UTF32Char|UTF8Char)\\b",
            "name": "support.type.mac-classic.objcpp"
          },
          {
            "match": "\\b([A-Za-z0-9_]+_t)\\b",
            "name": "support.type.posix-reserved.objcpp"
          },
          {
            "include": "#block"
          },
          {
            "include": "#parens"
          },
          {
            "begin": "(?<!\\w)(?!\\s*(?:not|compl|sizeof|not_eq|bitand|xor|bitor|and|or|and_eq|xor_eq|or_eq|alignof|alignas|_Alignof|_Alignas|while|for|do|if|else|goto|switch|return|break|case|continue|default|void|char|short|int|signed|unsigned|long|float|double|bool|_Bool|_Complex|_Imaginary|u_char|u_short|u_int|u_long|ushort|uint|u_quad_t|quad_t|qaddr_t|caddr_t|daddr_t|div_t|dev_t|fixpt_t|blkcnt_t|blksize_t|gid_t|in_addr_t|in_port_t|ino_t|key_t|mode_t|nlink_t|id_t|pid_t|off_t|segsz_t|swblk_t|uid_t|id_t|clock_t|size_t|ssize_t|time_t|useconds_t|suseconds_t|pthread_attr_t|pthread_cond_t|pthread_condattr_t|pthread_mutex_t|pthread_mutexattr_t|pthread_once_t|pthread_rwlock_t|pthread_rwlockattr_t|pthread_t|pthread_key_t|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|int_least8_t|int_least16_t|int_least32_t|int_least64_t|uint_least8_t|uint_least16_t|uint_least32_t|uint_least64_t|int_fast8_t|int_fast16_t|int_fast32_t|int_fast64_t|uint_fast8_t|uint_fast16_t|uint_fast32_t|uint_fast64_t|intptr_t|uintptr_t|intmax_t|intmax_t|uintmax_t|uintmax_t|NULL|true|false|memory_order|atomic_bool|atomic_char|atomic_schar|atomic_uchar|atomic_short|atomic_ushort|atomic_int|atomic_uint|atomic_long|atomic_ulong|atomic_llong|atomic_ullong|atomic_char16_t|atomic_char32_t|atomic_wchar_t|atomic_int_least8_t|atomic_uint_least8_t|atomic_int_least16_t|atomic_uint_least16_t|atomic_int_least32_t|atomic_uint_least32_t|atomic_int_least64_t|atomic_uint_least64_t|atomic_int_fast8_t|atomic_uint_fast8_t|atomic_int_fast16_t|atomic_uint_fast16_t|atomic_int_fast32_t|atomic_uint_fast32_t|atomic_int_fast64_t|atomic_uint_fast64_t|atomic_intptr_t|atomic_uintptr_t|atomic_size_t|atomic_ptrdiff_t|atomic_intmax_t|atomic_uintmax_t|struct|union|enum|typedef|auto|register|static|extern|thread_local|inline|_Noreturn|const|volatile|restrict|_Atomic)\\s*\\()(?=[a-zA-Z_]\\w*\\s*\\()",
            "end": "(?<=\\))",
            "name": "meta.function.objcpp",
            "patterns": [
              {
                "include": "#function-innards"
              }
            ]
          },
          {
            "include": "#line_continuation_character"
          },
          {
            "begin": "([a-zA-Z_][a-zA-Z_0-9]*|(?<=[\\]\\)]))?(\\[)(?!\\])",
            "beginCaptures": {
              "1": {
                "name": "variable.object.objcpp"
              },
              "2": {
                "name": "punctuation.definition.begin.bracket.square.objcpp"
              }
            },
            "end": "\\]",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.end.bracket.square.objcpp"
              }
            },
            "name": "meta.bracket.square.access.objcpp",
            "patterns": [
              {
                "include": "#function-call-innards"
              }
            ]
          },
          {
            "match": "\\[\\s*\\]",
            "name": "storage.modifier.array.bracket.square.objcpp"
          },
          {
            "match": ";",
            "name": "punctuation.terminator.statement.objcpp"
          },
          {
            "match": ",",
            "name": "punctuation.separator.delimiter.objcpp"
          }
        ],
        "repository": {
          "access-method": {
            "begin": "([a-zA-Z_][a-zA-Z_0-9]*|(?<=[\\]\\)]))\\s*(?:(\\.)|(->))((?:(?:[a-zA-Z_][a-zA-Z_0-9]*)\\s*(?:(?:\\.)|(?:->)))*)\\s*([a-zA-Z_][a-zA-Z_0-9]*)(\\()",
            "beginCaptures": {
              "1": {
                "name": "variable.object.objcpp"
              },
              "2": {
                "name": "punctuation.separator.dot-access.objcpp"
              },
              "3": {
                "name": "punctuation.separator.pointer-access.objcpp"
              },
              "4": {
                "patterns": [
                  {
                    "match": "\\.",
                    "name": "punctuation.separator.dot-access.objcpp"
                  },
                  {
                    "match": "->",
                    "name": "punctuation.separator.pointer-access.objcpp"
                  },
                  {
                    "match": "[a-zA-Z_][a-zA-Z_0-9]*",
                    "name": "variable.object.objcpp"
                  },
                  {
                    "match": ".+",
                    "name": "everything.else.objcpp"
                  }
                ]
              },
              "5": {
                "name": "entity.name.function.member.objcpp"
              },
              "6": {
                "name": "punctuation.section.arguments.begin.bracket.round.function.member.objcpp"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.arguments.end.bracket.round.function.member.objcpp"
              }
            },
            "name": "meta.function-call.member.objcpp",
            "patterns": [
              {
                "include": "#function-call-innards"
              }
            ]
          },
          "block": {
            "patterns": [
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.block.begin.bracket.curly.objcpp"
                  }
                },
                "end": "}|(?=\\s*#\\s*(?:elif|else|endif)\\b)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.block.end.bracket.curly.objcpp"
                  }
                },
                "name": "meta.block.objcpp",
                "patterns": [
                  {
                    "include": "#block_innards"
                  }
                ]
              }
            ]
          },
          "block_innards": {
            "patterns": [
              {
                "include": "#preprocessor-rule-enabled-block"
              },
              {
                "include": "#preprocessor-rule-disabled-block"
              },
              {
                "include": "#preprocessor-rule-conditional-block"
              },
              {
                "include": "#method_access"
              },
              {
                "include": "#member_access"
              },
              {
                "include": "#c_function_call"
              },
              {
                "begin": "(?:(?:(?=\\s)(?<!else|new|return)(?<=\\w)\\s+(and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|alignof|alignas)))((?:[A-Za-z_][A-Za-z0-9_]*+|::)++|(?:(?<=operator)(?:[-*&<>=+!]+|\\(\\)|\\[\\])))\\s*(\\()",
                "beginCaptures": {
                  "1": {
                    "name": "variable.other.objcpp"
                  },
                  "2": {
                    "name": "punctuation.section.parens.begin.bracket.round.initialization.objcpp"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.parens.end.bracket.round.initialization.objcpp"
                  }
                },
                "name": "meta.initialization.objcpp",
                "patterns": [
                  {
                    "include": "#function-call-innards"
                  }
                ]
              },
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.block.begin.bracket.curly.objcpp"
                  }
                },
                "end": "}|(?=\\s*#\\s*(?:elif|else|endif)\\b)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.block.end.bracket.curly.objcpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#block_innards"
                  }
                ]
              },
              {
                "include": "#parens-block"
              },
              {
                "include": "$base"
              }
            ]
          },
          "c_function_call": {
            "begin": "(?!(?:while|for|do|if|else|switch|catch|enumerate|return|typeid|alignof|alignas|sizeof|[cr]?iterate|and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|alignof|alignas)\\s*\\()(?=(?:[A-Za-z_][A-Za-z0-9_]*+|::)++\\s*\\(|(?:(?<=operator)(?:[-*&<>=+!]+|\\(\\)|\\[\\]))\\s*\\()",
            "end": "(?<=\\))(?!\\w)",
            "name": "meta.function-call.objcpp",
            "patterns": [
              {
                "include": "#function-call-innards"
              }
            ]
          },
          "case_statement": {
            "begin": "((?<!\\w)case(?!\\w))",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.case.objcpp"
              }
            },
            "end": "(:)",
            "endCaptures": {
              "1": {
                "name": "punctuation.separator.case.objcpp"
              }
            },
            "name": "meta.conditional.case.objcpp",
            "patterns": [
              {
                "include": "#conditional_context"
              }
            ]
          },
          "comments": {
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "meta.toc-list.banner.block.objcpp"
                  }
                },
                "match": "^/\\* =(\\s*.*?)\\s*= \\*/$\\n?",
                "name": "comment.block.objcpp"
              },
              {
                "begin": "/\\*",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.comment.begin.objcpp"
                  }
                },
                "end": "\\*/",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.comment.end.objcpp"
                  }
                },
                "name": "comment.block.objcpp"
              },
              {
                "captures": {
                  "1": {
                    "name": "meta.toc-list.banner.line.objcpp"
                  }
                },
                "match": "^// =(\\s*.*?)\\s*=\\s*$\\n?",
                "name": "comment.line.banner.objcpp"
              },
              {
                "begin": "(^[ \\t]+)?(?=//)",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.whitespace.comment.leading.objcpp"
                  }
                },
                "end": "(?!\\G)",
                "patterns": [
                  {
                    "begin": "//",
                    "beginCaptures": {
                      "0": {
                        "name": "punctuation.definition.comment.objcpp"
                      }
                    },
                    "end": "(?=\\n)",
                    "name": "comment.line.double-slash.objcpp",
                    "patterns": [
                      {
                        "include": "#line_continuation_character"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "conditional_context": {
            "patterns": [
              {
                "include": "$base"
              },
              {
                "include": "#block_innards"
              }
            ]
          },
          "default_statement": {
            "begin": "((?<!\\w)default(?!\\w))",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.default.objcpp"
              }
            },
            "end": "(:)",
            "endCaptures": {
              "1": {
                "name": "punctuation.separator.case.default.objcpp"
              }
            },
            "name": "meta.conditional.case.objcpp",
            "patterns": [
              {
                "include": "#conditional_context"
              }
            ]
          },
          "disabled": {
            "begin": "^\\s*#\\s*if(n?def)?\\b.*$",
            "end": "^\\s*#\\s*endif\\b",
            "patterns": [
              {
                "include": "#disabled"
              },
              {
                "include": "#pragma-mark"
              }
            ]
          },
          "function-call-innards": {
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "include": "#storage_types"
              },
              {
                "include": "#method_access"
              },
              {
                "include": "#member_access"
              },
              {
                "include": "#operators"
              },
              {
                "begin": "(?!(?:while|for|do|if|else|switch|catch|enumerate|return|typeid|alignof|alignas|sizeof|[cr]?iterate|and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|alignof|alignas)\\s*\\()((?:[A-Za-z_][A-Za-z0-9_]*+|::)++|(?:(?<=operator)(?:[-*&<>=+!]+|\\(\\)|\\[\\])))\\s*(\\()",
                "beginCaptures": {
                  "1": {
                    "name": "entity.name.function.objcpp"
                  },
                  "2": {
                    "name": "punctuation.section.arguments.begin.bracket.round.objcpp"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.arguments.end.bracket.round.objcpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#function-call-innards"
                  }
                ]
              },
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.parens.begin.bracket.round.objcpp"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.parens.end.bracket.round.objcpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#function-call-innards"
                  }
                ]
              },
              {
                "include": "#block_innards"
              }
            ]
          },
          "function-innards": {
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "include": "#storage_types"
              },
              {
                "include": "#operators"
              },
              {
                "include": "#vararg_ellipses"
              },
              {
                "begin": "(?!(?:while|for|do|if|else|switch|catch|enumerate|return|typeid|alignof|alignas|sizeof|[cr]?iterate|and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|alignof|alignas)\\s*\\()((?:[A-Za-z_][A-Za-z0-9_]*+|::)++|(?:(?<=operator)(?:[-*&<>=+!]+|\\(\\)|\\[\\])))\\s*(\\()",
                "beginCaptures": {
                  "1": {
                    "name": "entity.name.function.objcpp"
                  },
                  "2": {
                    "name": "punctuation.section.parameters.begin.bracket.round.objcpp"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.parameters.end.bracket.round.objcpp"
                  }
                },
                "name": "meta.function.definition.parameters.objcpp",
                "patterns": [
                  {
                    "include": "#probably_a_parameter"
                  },
                  {
                    "include": "#function-innards"
                  }
                ]
              },
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.parens.begin.bracket.round.objcpp"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.parens.end.bracket.round.objcpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#function-innards"
                  }
                ]
              },
              {
                "include": "$base"
              }
            ]
          },
          "line_continuation_character": {
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "constant.character.escape.line-continuation.objcpp"
                  }
                },
                "match": "(\\\\)\\n"
              }
            ]
          },
          "member_access": {
            "captures": {
              "1": {
                "patterns": [
                  {
                    "include": "#special_variables"
                  },
                  {
                    "match": "(.+)",
                    "name": "variable.other.object.access.objcpp"
                  }
                ]
              },
              "2": {
                "name": "punctuation.separator.dot-access.objcpp"
              },
              "3": {
                "name": "punctuation.separator.pointer-access.objcpp"
              },
              "4": {
                "patterns": [
                  {
                    "include": "#member_access"
                  },
                  {
                    "include": "#method_access"
                  },
                  {
                    "captures": {
                      "1": {
                        "patterns": [
                          {
                            "include": "#special_variables"
                          },
                          {
                            "match": "(.+)",
                            "name": "variable.other.object.access.objcpp"
                          }
                        ]
                      },
                      "2": {
                        "name": "punctuation.separator.dot-access.objcpp"
                      },
                      "3": {
                        "name": "punctuation.separator.pointer-access.objcpp"
                      }
                    },
                    "match": "((?:[a-zA-Z_]\\w*|(?<=\\]|\\)))\\s*)(?:((?:\\.\\*|\\.))|((?:->\\*|->)))"
                  }
                ]
              },
              "5": {
                "name": "variable.other.member.objcpp"
              }
            },
            "match": "((?:[a-zA-Z_]\\w*|(?<=\\]|\\)))\\s*)(?:((?:\\.\\*|\\.))|((?:->\\*|->)))((?:[a-zA-Z_]\\w*\\s*(?-mix:(?:(?:\\.\\*|\\.))|(?:(?:->\\*|->)))\\s*)*)\\s*(\\b(?!(?:void|char|short|int|signed|unsigned|long|float|double|bool|_Bool|_Complex|_Imaginary|u_char|u_short|u_int|u_long|ushort|uint|u_quad_t|quad_t|qaddr_t|caddr_t|daddr_t|div_t|dev_t|fixpt_t|blkcnt_t|blksize_t|gid_t|in_addr_t|in_port_t|ino_t|key_t|mode_t|nlink_t|id_t|pid_t|off_t|segsz_t|swblk_t|uid_t|id_t|clock_t|size_t|ssize_t|time_t|useconds_t|suseconds_t|pthread_attr_t|pthread_cond_t|pthread_condattr_t|pthread_mutex_t|pthread_mutexattr_t|pthread_once_t|pthread_rwlock_t|pthread_rwlockattr_t|pthread_t|pthread_key_t|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|int_least8_t|int_least16_t|int_least32_t|int_least64_t|uint_least8_t|uint_least16_t|uint_least32_t|uint_least64_t|int_fast8_t|int_fast16_t|int_fast32_t|int_fast64_t|uint_fast8_t|uint_fast16_t|uint_fast32_t|uint_fast64_t|intptr_t|uintptr_t|intmax_t|intmax_t|uintmax_t|uintmax_t|memory_order|atomic_bool|atomic_char|atomic_schar|atomic_uchar|atomic_short|atomic_ushort|atomic_int|atomic_uint|atomic_long|atomic_ulong|atomic_llong|atomic_ullong|atomic_char16_t|atomic_char32_t|atomic_wchar_t|atomic_int_least8_t|atomic_uint_least8_t|atomic_int_least16_t|atomic_uint_least16_t|atomic_int_least32_t|atomic_uint_least32_t|atomic_int_least64_t|atomic_uint_least64_t|atomic_int_fast8_t|atomic_uint_fast8_t|atomic_int_fast16_t|atomic_uint_fast16_t|atomic_int_fast32_t|atomic_uint_fast32_t|atomic_int_fast64_t|atomic_uint_fast64_t|atomic_intptr_t|atomic_uintptr_t|atomic_size_t|atomic_ptrdiff_t|atomic_intmax_t|atomic_uintmax_t))[a-zA-Z_]\\w*\\b(?!\\())"
          },
          "method_access": {
            "begin": "((?:[a-zA-Z_]\\w*|(?<=\\]|\\)))\\s*)(?:((?:\\.\\*|\\.))|((?:->\\*|->)))((?:[a-zA-Z_]\\w*\\s*(?-mix:(?:(?:\\.\\*|\\.))|(?:(?:->\\*|->)))\\s*)*)\\s*([a-zA-Z_]\\w*)(\\()",
            "beginCaptures": {
              "1": {
                "patterns": [
                  {
                    "include": "#special_variables"
                  },
                  {
                    "match": "(.+)",
                    "name": "variable.other.object.access.objcpp"
                  }
                ]
              },
              "2": {
                "name": "punctuation.separator.dot-access.objcpp"
              },
              "3": {
                "name": "punctuation.separator.pointer-access.objcpp"
              },
              "4": {
                "patterns": [
                  {
                    "include": "#member_access"
                  },
                  {
                    "include": "#method_access"
                  },
                  {
                    "captures": {
                      "1": {
                        "patterns": [
                          {
                            "include": "#special_variables"
                          },
                          {
                            "match": "(.+)",
                            "name": "variable.other.object.access.objcpp"
                          }
                        ]
                      },
                      "2": {
                        "name": "punctuation.separator.dot-access.objcpp"
                      },
                      "3": {
                        "name": "punctuation.separator.pointer-access.objcpp"
                      }
                    },
                    "match": "((?:[a-zA-Z_]\\w*|(?<=\\]|\\)))\\s*)(?:((?:\\.\\*|\\.))|((?:->\\*|->)))"
                  }
                ]
              },
              "5": {
                "name": "entity.name.function.member.objcpp"
              },
              "6": {
                "name": "punctuation.section.arguments.begin.bracket.round.function.member.objcpp"
              }
            },
            "contentName": "meta.function-call.member.objcpp",
            "end": "(\\))",
            "endCaptures": {
              "1": {
                "name": "punctuation.section.arguments.end.bracket.round.function.member.objcpp"
              }
            },
            "patterns": [
              {
                "include": "#function-call-innards"
              }
            ]
          },
          "numbers": {
            "begin": "(?<!\\w)(?=\\d|\\.\\d)",
            "end": "(?!(?:['0-9a-zA-Z_\\.']|(?<=[eEpP])[+-]))",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "keyword.other.unit.hexadecimal.objcpp"
                  },
                  "2": {
                    "name": "constant.numeric.hexadecimal.objcpp",
                    "patterns": [
                      {
                        "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                        "name": "punctuation.separator.constant.numeric.objcpp"
                      }
                    ]
                  },
                  "3": {
                    "name": "punctuation.separator.constant.numeric.objcpp"
                  },
                  "4": {
                    "name": "constant.numeric.hexadecimal.objcpp"
                  },
                  "5": {
                    "name": "constant.numeric.hexadecimal.objcpp",
                    "patterns": [
                      {
                        "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                        "name": "punctuation.separator.constant.numeric.objcpp"
                      }
                    ]
                  },
                  "6": {
                    "name": "punctuation.separator.constant.numeric.objcpp"
                  },
                  "8": {
                    "name": "keyword.other.unit.exponent.hexadecimal.objcpp"
                  },
                  "9": {
                    "name": "keyword.operator.plus.exponent.hexadecimal.objcpp"
                  },
                  "10": {
                    "name": "keyword.operator.minus.exponent.hexadecimal.objcpp"
                  },
                  "11": {
                    "name": "constant.numeric.exponent.hexadecimal.objcpp",
                    "patterns": [
                      {
                        "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                        "name": "punctuation.separator.constant.numeric.objcpp"
                      }
                    ]
                  },
                  "12": {
                    "name": "keyword.other.unit.suffix.floating-point.objcpp"
                  }
                },
                "match": "(\\G0[xX])(?:([0-9a-fA-F](?:(?:[0-9a-fA-F]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))))*))?((?:(?<=[0-9a-fA-F])\\.|\\.(?=[0-9a-fA-F])))(?:([0-9a-fA-F](?:(?:[0-9a-fA-F]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))))*))?(?:((?<!')([pP])(\\+)?(\\-)?((?-mix:(?:[0-9](?:(?:[0-9]|(?:(?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))))*)))))?(?:([lLfF](?!\\w)))?(?!(?:['0-9a-zA-Z_\\.']|(?<=[eEpP])[+-]))"
              },
              {
                "captures": {
                  "2": {
                    "name": "constant.numeric.decimal.objcpp",
                    "patterns": [
                      {
                        "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                        "name": "punctuation.separator.constant.numeric.objcpp"
                      }
                    ]
                  },
                  "3": {
                    "name": "punctuation.separator.constant.numeric.objcpp"
                  },
                  "4": {
                    "name": "constant.numeric.decimal.point.objcpp"
                  },
                  "5": {
                    "name": "constant.numeric.decimal.objcpp",
                    "patterns": [
                      {
                        "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                        "name": "punctuation.separator.constant.numeric.objcpp"
                      }
                    ]
                  },
                  "6": {
                    "name": "punctuation.separator.constant.numeric.objcpp"
                  },
                  "8": {
                    "name": "keyword.other.unit.exponent.decimal.objcpp"
                  },
                  "9": {
                    "name": "keyword.operator.plus.exponent.decimal.objcpp"
                  },
                  "10": {
                    "name": "keyword.operator.minus.exponent.decimal.objcpp"
                  },
                  "11": {
                    "name": "constant.numeric.exponent.decimal.objcpp",
                    "patterns": [
                      {
                        "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                        "name": "punctuation.separator.constant.numeric.objcpp"
                      }
                    ]
                  },
                  "12": {
                    "name": "keyword.other.unit.suffix.floating-point.objcpp"
                  }
                },
                "match": "(\\G(?=[0-9.])(?!0[xXbB]))(?:([0-9](?:(?:[0-9]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))))*))?((?:(?<=[0-9])\\.|\\.(?=[0-9])))(?:([0-9](?:(?:[0-9]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))))*))?(?:((?<!')([eE])(\\+)?(\\-)?((?-mix:(?:[0-9](?:(?:[0-9]|(?:(?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))))*)))))?(?:([lLfF](?!\\w)))?(?!(?:['0-9a-zA-Z_\\.']|(?<=[eEpP])[+-]))"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.other.unit.binary.objcpp"
                  },
                  "2": {
                    "name": "constant.numeric.binary.objcpp",
                    "patterns": [
                      {
                        "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                        "name": "punctuation.separator.constant.numeric.objcpp"
                      }
                    ]
                  },
                  "3": {
                    "name": "punctuation.separator.constant.numeric.objcpp"
                  },
                  "4": {
                    "name": "keyword.other.unit.suffix.integer.objcpp"
                  }
                },
                "match": "(\\G0[bB])([01](?:(?:[01]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))))*)(?:((?:(?:(?:(?:(?:[uU]|[uU]ll?)|[uU]LL?)|ll?[uU]?)|LL?[uU]?)|[fF])(?!\\w)))?(?!(?:['0-9a-zA-Z_\\.']|(?<=[eEpP])[+-]))"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.other.unit.octal.objcpp"
                  },
                  "2": {
                    "name": "constant.numeric.octal.objcpp",
                    "patterns": [
                      {
                        "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                        "name": "punctuation.separator.constant.numeric.objcpp"
                      }
                    ]
                  },
                  "3": {
                    "name": "punctuation.separator.constant.numeric.objcpp"
                  },
                  "4": {
                    "name": "keyword.other.unit.suffix.integer.objcpp"
                  }
                },
                "match": "(\\G0)((?:(?:[0-7]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))))+)(?:((?:(?:(?:(?:(?:[uU]|[uU]ll?)|[uU]LL?)|ll?[uU]?)|LL?[uU]?)|[fF])(?!\\w)))?(?!(?:['0-9a-zA-Z_\\.']|(?<=[eEpP])[+-]))"
              },
              {
                "captures": {
                  "1": {
                    "name": "keyword.other.unit.hexadecimal.objcpp"
                  },
                  "2": {
                    "name": "constant.numeric.hexadecimal.objcpp",
                    "patterns": [
                      {
                        "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                        "name": "punctuation.separator.constant.numeric.objcpp"
                      }
                    ]
                  },
                  "3": {
                    "name": "punctuation.separator.constant.numeric.objcpp"
                  },
                  "5": {
                    "name": "keyword.other.unit.exponent.hexadecimal.objcpp"
                  },
                  "6": {
                    "name": "keyword.operator.plus.exponent.hexadecimal.objcpp"
                  },
                  "7": {
                    "name": "keyword.operator.minus.exponent.hexadecimal.objcpp"
                  },
                  "8": {
                    "name": "constant.numeric.exponent.hexadecimal.objcpp",
                    "patterns": [
                      {
                        "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                        "name": "punctuation.separator.constant.numeric.objcpp"
                      }
                    ]
                  },
                  "9": {
                    "name": "keyword.other.unit.suffix.integer.objcpp"
                  }
                },
                "match": "(\\G0[xX])([0-9a-fA-F](?:(?:[0-9a-fA-F]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))))*)(?:((?<!')([pP])(\\+)?(\\-)?((?-mix:(?:[0-9](?:(?:[0-9]|(?:(?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))))*)))))?(?:((?:(?:(?:(?:(?:[uU]|[uU]ll?)|[uU]LL?)|ll?[uU]?)|LL?[uU]?)|[fF])(?!\\w)))?(?!(?:['0-9a-zA-Z_\\.']|(?<=[eEpP])[+-]))"
              },
              {
                "captures": {
                  "2": {
                    "name": "constant.numeric.decimal.objcpp",
                    "patterns": [
                      {
                        "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                        "name": "punctuation.separator.constant.numeric.objcpp"
                      }
                    ]
                  },
                  "3": {
                    "name": "punctuation.separator.constant.numeric.objcpp"
                  },
                  "5": {
                    "name": "keyword.other.unit.exponent.decimal.objcpp"
                  },
                  "6": {
                    "name": "keyword.operator.plus.exponent.decimal.objcpp"
                  },
                  "7": {
                    "name": "keyword.operator.minus.exponent.decimal.objcpp"
                  },
                  "8": {
                    "name": "constant.numeric.exponent.decimal.objcpp",
                    "patterns": [
                      {
                        "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                        "name": "punctuation.separator.constant.numeric.objcpp"
                      }
                    ]
                  },
                  "9": {
                    "name": "keyword.other.unit.suffix.integer.objcpp"
                  }
                },
                "match": "(\\G(?=[0-9.])(?!0[xXbB]))([0-9](?:(?:[0-9]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))))*)(?:((?<!')([eE])(\\+)?(\\-)?((?-mix:(?:[0-9](?:(?:[0-9]|(?:(?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))))*)))))?(?:((?:(?:(?:(?:(?:[uU]|[uU]ll?)|[uU]LL?)|ll?[uU]?)|LL?[uU]?)|[fF])(?!\\w)))?(?!(?:['0-9a-zA-Z_\\.']|(?<=[eEpP])[+-]))"
              },
              {
                "match": "(?:(?:['0-9a-zA-Z_\\.']|(?<=[eEpP])[+-]))+",
                "name": "invalid.illegal.constant.numeric.objcpp"
              }
            ]
          },
          "operators": {
            "patterns": [
              {
                "match": "(?<![\\w$])(sizeof)(?![\\w$])",
                "name": "keyword.operator.sizeof.objcpp"
              },
              {
                "match": "--",
                "name": "keyword.operator.decrement.objcpp"
              },
              {
                "match": "\\+\\+",
                "name": "keyword.operator.increment.objcpp"
              },
              {
                "match": "%=|\\+=|-=|\\*=|(?<!\\()/=",
                "name": "keyword.operator.assignment.compound.objcpp"
              },
              {
                "match": "&=|\\^=|<<=|>>=|\\|=",
                "name": "keyword.operator.assignment.compound.bitwise.objcpp"
              },
              {
                "match": "<<|>>",
                "name": "keyword.operator.bitwise.shift.objcpp"
              },
              {
                "match": "!=|<=|>=|==|<|>",
                "name": "keyword.operator.comparison.objcpp"
              },
              {
                "match": "&&|!|\\|\\|",
                "name": "keyword.operator.logical.objcpp"
              },
              {
                "match": "&|\\||\\^|~",
                "name": "keyword.operator.objcpp"
              },
              {
                "match": "=",
                "name": "keyword.operator.assignment.objcpp"
              },
              {
                "match": "%|\\*|/|-|\\+",
                "name": "keyword.operator.objcpp"
              },
              {
                "begin": "(\\?)",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.operator.ternary.objcpp"
                  }
                },
                "end": "(:)",
                "endCaptures": {
                  "1": {
                    "name": "keyword.operator.ternary.objcpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#function-call-innards"
                  },
                  {
                    "include": "$base"
                  }
                ]
              }
            ]
          },
          "parens": {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.parens.begin.bracket.round.objcpp"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.parens.end.bracket.round.objcpp"
              }
            },
            "name": "meta.parens.objcpp",
            "patterns": [
              {
                "include": "$base"
              }
            ]
          },
          "parens-block": {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.parens.begin.bracket.round.objcpp"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.parens.end.bracket.round.objcpp"
              }
            },
            "name": "meta.parens.block.objcpp",
            "patterns": [
              {
                "include": "#block_innards"
              },
              {
                "match": "(?-mix:(?<!:):(?!:))",
                "name": "punctuation.range-based.objcpp"
              }
            ]
          },
          "pragma-mark": {
            "captures": {
              "1": {
                "name": "meta.preprocessor.pragma.objcpp"
              },
              "2": {
                "name": "keyword.control.directive.pragma.pragma-mark.objcpp"
              },
              "3": {
                "name": "punctuation.definition.directive.objcpp"
              },
              "4": {
                "name": "entity.name.tag.pragma-mark.objcpp"
              }
            },
            "match": "^\\s*(((#)\\s*pragma\\s+mark)\\s+(.*))",
            "name": "meta.section.objcpp"
          },
          "preprocessor-rule-conditional": {
            "patterns": [
              {
                "begin": "^\\s*((#)\\s*if(?:n?def)?\\b)",
                "beginCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  }
                },
                "end": "^\\s*((#)\\s*endif\\b)",
                "endCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  }
                },
                "patterns": [
                  {
                    "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                    "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                    "name": "meta.preprocessor.objcpp",
                    "patterns": [
                      {
                        "include": "#preprocessor-rule-conditional-line"
                      }
                    ]
                  },
                  {
                    "include": "#preprocessor-rule-enabled-elif"
                  },
                  {
                    "include": "#preprocessor-rule-enabled-else"
                  },
                  {
                    "include": "#preprocessor-rule-disabled-elif"
                  },
                  {
                    "begin": "^\\s*((#)\\s*elif\\b)",
                    "beginCaptures": {
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                    "name": "meta.preprocessor.objcpp",
                    "patterns": [
                      {
                        "include": "#preprocessor-rule-conditional-line"
                      }
                    ]
                  },
                  {
                    "include": "$base"
                  }
                ]
              },
              {
                "captures": {
                  "0": {
                    "name": "invalid.illegal.stray-$1.objcpp"
                  }
                },
                "match": "^\\s*#\\s*(else|elif|endif)\\b"
              }
            ]
          },
          "preprocessor-rule-conditional-block": {
            "patterns": [
              {
                "begin": "^\\s*((#)\\s*if(?:n?def)?\\b)",
                "beginCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  }
                },
                "end": "^\\s*((#)\\s*endif\\b)",
                "endCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  }
                },
                "patterns": [
                  {
                    "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                    "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                    "name": "meta.preprocessor.objcpp",
                    "patterns": [
                      {
                        "include": "#preprocessor-rule-conditional-line"
                      }
                    ]
                  },
                  {
                    "include": "#preprocessor-rule-enabled-elif-block"
                  },
                  {
                    "include": "#preprocessor-rule-enabled-else-block"
                  },
                  {
                    "include": "#preprocessor-rule-disabled-elif"
                  },
                  {
                    "begin": "^\\s*((#)\\s*elif\\b)",
                    "beginCaptures": {
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                    "name": "meta.preprocessor.objcpp",
                    "patterns": [
                      {
                        "include": "#preprocessor-rule-conditional-line"
                      }
                    ]
                  },
                  {
                    "include": "#block_innards"
                  }
                ]
              },
              {
                "captures": {
                  "0": {
                    "name": "invalid.illegal.stray-$1.objcpp"
                  }
                },
                "match": "^\\s*#\\s*(else|elif|endif)\\b"
              }
            ]
          },
          "preprocessor-rule-conditional-line": {
            "patterns": [
              {
                "match": "(?:\\bdefined\\b\\s*$)|(?:\\bdefined\\b(?=\\s*\\(*\\s*(?:(?!defined\\b)[a-zA-Z_$][\\w$]*\\b)\\s*\\)*\\s*(?:\\n|//|/\\*|\\?|\\:|&&|\\|\\||\\\\\\s*\\n)))",
                "name": "keyword.control.directive.conditional.objcpp"
              },
              {
                "match": "\\bdefined\\b",
                "name": "invalid.illegal.macro-name.objcpp"
              },
              {
                "include": "#comments"
              },
              {
                "include": "#strings"
              },
              {
                "include": "#numbers"
              },
              {
                "begin": "\\?",
                "beginCaptures": {
                  "0": {
                    "name": "keyword.operator.ternary.objcpp"
                  }
                },
                "end": ":",
                "endCaptures": {
                  "0": {
                    "name": "keyword.operator.ternary.objcpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#preprocessor-rule-conditional-line"
                  }
                ]
              },
              {
                "include": "#operators"
              },
              {
                "match": "\\b(NULL|true|false|TRUE|FALSE)\\b",
                "name": "constant.language.objcpp"
              },
              {
                "match": "[a-zA-Z_$][\\w$]*",
                "name": "entity.name.function.preprocessor.objcpp"
              },
              {
                "include": "#line_continuation_character"
              },
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.parens.begin.bracket.round.objcpp"
                  }
                },
                "end": "\\)|(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.parens.end.bracket.round.objcpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#preprocessor-rule-conditional-line"
                  }
                ]
              }
            ]
          },
          "preprocessor-rule-define-line-blocks": {
            "patterns": [
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.block.begin.bracket.curly.objcpp"
                  }
                },
                "end": "}|(?=\\s*#\\s*(?:elif|else|endif)\\b)|(?<!\\\\)(?=\\s*\\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.block.end.bracket.curly.objcpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#preprocessor-rule-define-line-blocks"
                  },
                  {
                    "include": "#preprocessor-rule-define-line-contents"
                  }
                ]
              },
              {
                "include": "#preprocessor-rule-define-line-contents"
              }
            ]
          },
          "preprocessor-rule-define-line-contents": {
            "patterns": [
              {
                "include": "#vararg_ellipses"
              },
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.block.begin.bracket.curly.objcpp"
                  }
                },
                "end": "}|(?=\\s*#\\s*(?:elif|else|endif)\\b)|(?<!\\\\)(?=\\s*\\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.block.end.bracket.curly.objcpp"
                  }
                },
                "name": "meta.block.objcpp",
                "patterns": [
                  {
                    "include": "#preprocessor-rule-define-line-blocks"
                  }
                ]
              },
              {
                "match": "\\(",
                "name": "punctuation.section.parens.begin.bracket.round.objcpp"
              },
              {
                "match": "\\)",
                "name": "punctuation.section.parens.end.bracket.round.objcpp"
              },
              {
                "begin": "(?!(?:while|for|do|if|else|switch|catch|enumerate|return|typeid|alignof|alignas|sizeof|[cr]?iterate|and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|alignof|alignas|asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|long|short|signed|struct|typedef|union|unsigned|void)\\s*\\()(?=(?:[A-Za-z_][A-Za-z0-9_]*+|::)++\\s*\\(|(?:(?<=operator)(?:[-*&<>=+!]+|\\(\\)|\\[\\]))\\s*\\()",
                "end": "(?<=\\))(?!\\w)|(?<!\\\\)(?=\\s*\\n)",
                "name": "meta.function.objcpp",
                "patterns": [
                  {
                    "include": "#preprocessor-rule-define-line-functions"
                  }
                ]
              },
              {
                "begin": "\"",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.objcpp"
                  }
                },
                "end": "\"|(?<!\\\\)(?=\\s*\\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.objcpp"
                  }
                },
                "name": "string.quoted.double.objcpp",
                "patterns": [
                  {
                    "include": "#string_escaped_char"
                  },
                  {
                    "include": "#string_placeholder"
                  },
                  {
                    "include": "#line_continuation_character"
                  }
                ]
              },
              {
                "begin": "'",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.objcpp"
                  }
                },
                "end": "'|(?<!\\\\)(?=\\s*\\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.objcpp"
                  }
                },
                "name": "string.quoted.single.objcpp",
                "patterns": [
                  {
                    "include": "#string_escaped_char"
                  },
                  {
                    "include": "#line_continuation_character"
                  }
                ]
              },
              {
                "include": "#method_access"
              },
              {
                "include": "#member_access"
              },
              {
                "include": "$base"
              }
            ]
          },
          "preprocessor-rule-define-line-functions": {
            "patterns": [
              {
                "include": "#comments"
              },
              {
                "include": "#storage_types"
              },
              {
                "include": "#vararg_ellipses"
              },
              {
                "include": "#method_access"
              },
              {
                "include": "#member_access"
              },
              {
                "include": "#operators"
              },
              {
                "begin": "(?!(?:while|for|do|if|else|switch|catch|enumerate|return|typeid|alignof|alignas|sizeof|[cr]?iterate|and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|alignof|alignas)\\s*\\()((?:[A-Za-z_][A-Za-z0-9_]*+|::)++|(?:(?<=operator)(?:[-*&<>=+!]+|\\(\\)|\\[\\])))\\s*(\\()",
                "beginCaptures": {
                  "1": {
                    "name": "entity.name.function.objcpp"
                  },
                  "2": {
                    "name": "punctuation.section.arguments.begin.bracket.round.objcpp"
                  }
                },
                "end": "(\\))|(?<!\\\\)(?=\\s*\\n)",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.section.arguments.end.bracket.round.objcpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#preprocessor-rule-define-line-functions"
                  }
                ]
              },
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.parens.begin.bracket.round.objcpp"
                  }
                },
                "end": "(\\))|(?<!\\\\)(?=\\s*\\n)",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.section.parens.end.bracket.round.objcpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#preprocessor-rule-define-line-functions"
                  }
                ]
              },
              {
                "include": "#preprocessor-rule-define-line-contents"
              }
            ]
          },
          "preprocessor-rule-disabled": {
            "patterns": [
              {
                "begin": "^\\s*((#)\\s*if\\b)(?=\\s*\\(*\\b0+\\b\\)*\\s*(?:$|//|/\\*))",
                "beginCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  }
                },
                "end": "^\\s*((#)\\s*endif\\b)",
                "endCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  }
                },
                "patterns": [
                  {
                    "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                    "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?=\\n)",
                    "name": "meta.preprocessor.objcpp",
                    "patterns": [
                      {
                        "include": "#preprocessor-rule-conditional-line"
                      }
                    ]
                  },
                  {
                    "include": "#comments"
                  },
                  {
                    "include": "#preprocessor-rule-enabled-elif"
                  },
                  {
                    "include": "#preprocessor-rule-enabled-else"
                  },
                  {
                    "include": "#preprocessor-rule-disabled-elif"
                  },
                  {
                    "begin": "^\\s*((#)\\s*elif\\b)",
                    "beginCaptures": {
                      "0": {
                        "name": "meta.preprocessor.objcpp"
                      },
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "end": "(?=^\\s*((#)\\s*(?:elif|else|endif)\\b))",
                    "patterns": [
                      {
                        "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                        "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                        "name": "meta.preprocessor.objcpp",
                        "patterns": [
                          {
                            "include": "#preprocessor-rule-conditional-line"
                          }
                        ]
                      },
                      {
                        "include": "$base"
                      }
                    ]
                  },
                  {
                    "begin": "\\n",
                    "contentName": "comment.block.preprocessor.if-branch.objcpp",
                    "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                    "patterns": [
                      {
                        "include": "#disabled"
                      },
                      {
                        "include": "#pragma-mark"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "preprocessor-rule-disabled-block": {
            "patterns": [
              {
                "begin": "^\\s*((#)\\s*if\\b)(?=\\s*\\(*\\b0+\\b\\)*\\s*(?:$|//|/\\*))",
                "beginCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  }
                },
                "end": "^\\s*((#)\\s*endif\\b)",
                "endCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  }
                },
                "patterns": [
                  {
                    "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                    "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?=\\n)",
                    "name": "meta.preprocessor.objcpp",
                    "patterns": [
                      {
                        "include": "#preprocessor-rule-conditional-line"
                      }
                    ]
                  },
                  {
                    "include": "#comments"
                  },
                  {
                    "include": "#preprocessor-rule-enabled-elif-block"
                  },
                  {
                    "include": "#preprocessor-rule-enabled-else-block"
                  },
                  {
                    "include": "#preprocessor-rule-disabled-elif"
                  },
                  {
                    "begin": "^\\s*((#)\\s*elif\\b)",
                    "beginCaptures": {
                      "0": {
                        "name": "meta.preprocessor.objcpp"
                      },
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "end": "(?=^\\s*((#)\\s*(?:elif|else|endif)\\b))",
                    "patterns": [
                      {
                        "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                        "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                        "name": "meta.preprocessor.objcpp",
                        "patterns": [
                          {
                            "include": "#preprocessor-rule-conditional-line"
                          }
                        ]
                      },
                      {
                        "include": "#block_innards"
                      }
                    ]
                  },
                  {
                    "begin": "\\n",
                    "contentName": "comment.block.preprocessor.if-branch.in-block.objcpp",
                    "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                    "patterns": [
                      {
                        "include": "#disabled"
                      },
                      {
                        "include": "#pragma-mark"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "preprocessor-rule-disabled-elif": {
            "begin": "^\\s*((#)\\s*elif\\b)(?=\\s*\\(*\\b0+\\b\\)*\\s*(?:$|//|/\\*))",
            "beginCaptures": {
              "0": {
                "name": "meta.preprocessor.objcpp"
              },
              "1": {
                "name": "keyword.control.directive.conditional.objcpp"
              },
              "2": {
                "name": "punctuation.definition.directive.objcpp"
              }
            },
            "end": "(?=^\\s*((#)\\s*(?:elif|else|endif)\\b))",
            "patterns": [
              {
                "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                "name": "meta.preprocessor.objcpp",
                "patterns": [
                  {
                    "include": "#preprocessor-rule-conditional-line"
                  }
                ]
              },
              {
                "include": "#comments"
              },
              {
                "begin": "\\n",
                "contentName": "comment.block.preprocessor.elif-branch.objcpp",
                "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                "patterns": [
                  {
                    "include": "#disabled"
                  },
                  {
                    "include": "#pragma-mark"
                  }
                ]
              }
            ]
          },
          "preprocessor-rule-enabled": {
            "patterns": [
              {
                "begin": "^\\s*((#)\\s*if\\b)(?=\\s*\\(*\\b0*1\\b\\)*\\s*(?:$|//|/\\*))",
                "beginCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  },
                  "3": {
                    "name": "constant.numeric.preprocessor.objcpp"
                  }
                },
                "end": "^\\s*((#)\\s*endif\\b)",
                "endCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  }
                },
                "patterns": [
                  {
                    "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                    "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?=\\n)",
                    "name": "meta.preprocessor.objcpp",
                    "patterns": [
                      {
                        "include": "#preprocessor-rule-conditional-line"
                      }
                    ]
                  },
                  {
                    "include": "#comments"
                  },
                  {
                    "begin": "^\\s*((#)\\s*else\\b)",
                    "beginCaptures": {
                      "0": {
                        "name": "meta.preprocessor.objcpp"
                      },
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "contentName": "comment.block.preprocessor.else-branch.objcpp",
                    "end": "(?=^\\s*((#)\\s*endif\\b))",
                    "patterns": [
                      {
                        "include": "#disabled"
                      },
                      {
                        "include": "#pragma-mark"
                      }
                    ]
                  },
                  {
                    "begin": "^\\s*((#)\\s*elif\\b)",
                    "beginCaptures": {
                      "0": {
                        "name": "meta.preprocessor.objcpp"
                      },
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "contentName": "comment.block.preprocessor.if-branch.objcpp",
                    "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                    "patterns": [
                      {
                        "include": "#disabled"
                      },
                      {
                        "include": "#pragma-mark"
                      }
                    ]
                  },
                  {
                    "begin": "\\n",
                    "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                    "patterns": [
                      {
                        "include": "$base"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "preprocessor-rule-enabled-block": {
            "patterns": [
              {
                "begin": "^\\s*((#)\\s*if\\b)(?=\\s*\\(*\\b0*1\\b\\)*\\s*(?:$|//|/\\*))",
                "beginCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  }
                },
                "end": "^\\s*((#)\\s*endif\\b)",
                "endCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  }
                },
                "patterns": [
                  {
                    "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                    "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?=\\n)",
                    "name": "meta.preprocessor.objcpp",
                    "patterns": [
                      {
                        "include": "#preprocessor-rule-conditional-line"
                      }
                    ]
                  },
                  {
                    "include": "#comments"
                  },
                  {
                    "begin": "^\\s*((#)\\s*else\\b)",
                    "beginCaptures": {
                      "0": {
                        "name": "meta.preprocessor.objcpp"
                      },
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "contentName": "comment.block.preprocessor.else-branch.in-block.objcpp",
                    "end": "(?=^\\s*((#)\\s*endif\\b))",
                    "patterns": [
                      {
                        "include": "#disabled"
                      },
                      {
                        "include": "#pragma-mark"
                      }
                    ]
                  },
                  {
                    "begin": "^\\s*((#)\\s*elif\\b)",
                    "beginCaptures": {
                      "0": {
                        "name": "meta.preprocessor.objcpp"
                      },
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "contentName": "comment.block.preprocessor.if-branch.in-block.objcpp",
                    "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                    "patterns": [
                      {
                        "include": "#disabled"
                      },
                      {
                        "include": "#pragma-mark"
                      }
                    ]
                  },
                  {
                    "begin": "\\n",
                    "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                    "patterns": [
                      {
                        "include": "#block_innards"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "preprocessor-rule-enabled-elif": {
            "begin": "^\\s*((#)\\s*elif\\b)(?=\\s*\\(*\\b0*1\\b\\)*\\s*(?:$|//|/\\*))",
            "beginCaptures": {
              "0": {
                "name": "meta.preprocessor.objcpp"
              },
              "1": {
                "name": "keyword.control.directive.conditional.objcpp"
              },
              "2": {
                "name": "punctuation.definition.directive.objcpp"
              }
            },
            "end": "(?=^\\s*((#)\\s*endif\\b))",
            "patterns": [
              {
                "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                "name": "meta.preprocessor.objcpp",
                "patterns": [
                  {
                    "include": "#preprocessor-rule-conditional-line"
                  }
                ]
              },
              {
                "include": "#comments"
              },
              {
                "begin": "\\n",
                "end": "(?=^\\s*((#)\\s*(?:endif)\\b))",
                "patterns": [
                  {
                    "begin": "^\\s*((#)\\s*(else)\\b)",
                    "beginCaptures": {
                      "0": {
                        "name": "meta.preprocessor.objcpp"
                      },
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "contentName": "comment.block.preprocessor.elif-branch.objcpp",
                    "end": "(?=^\\s*((#)\\s*endif\\b))",
                    "patterns": [
                      {
                        "include": "#disabled"
                      },
                      {
                        "include": "#pragma-mark"
                      }
                    ]
                  },
                  {
                    "begin": "^\\s*((#)\\s*(elif)\\b)",
                    "beginCaptures": {
                      "0": {
                        "name": "meta.preprocessor.objcpp"
                      },
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "contentName": "comment.block.preprocessor.elif-branch.objcpp",
                    "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                    "patterns": [
                      {
                        "include": "#disabled"
                      },
                      {
                        "include": "#pragma-mark"
                      }
                    ]
                  },
                  {
                    "include": "$base"
                  }
                ]
              }
            ]
          },
          "preprocessor-rule-enabled-elif-block": {
            "begin": "^\\s*((#)\\s*elif\\b)(?=\\s*\\(*\\b0*1\\b\\)*\\s*(?:$|//|/\\*))",
            "beginCaptures": {
              "0": {
                "name": "meta.preprocessor.objcpp"
              },
              "1": {
                "name": "keyword.control.directive.conditional.objcpp"
              },
              "2": {
                "name": "punctuation.definition.directive.objcpp"
              }
            },
            "end": "(?=^\\s*((#)\\s*endif\\b))",
            "patterns": [
              {
                "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                "name": "meta.preprocessor.objcpp",
                "patterns": [
                  {
                    "include": "#preprocessor-rule-conditional-line"
                  }
                ]
              },
              {
                "include": "#comments"
              },
              {
                "begin": "\\n",
                "end": "(?=^\\s*((#)\\s*(?:endif)\\b))",
                "patterns": [
                  {
                    "begin": "^\\s*((#)\\s*(else)\\b)",
                    "beginCaptures": {
                      "0": {
                        "name": "meta.preprocessor.objcpp"
                      },
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "contentName": "comment.block.preprocessor.elif-branch.in-block.objcpp",
                    "end": "(?=^\\s*((#)\\s*endif\\b))",
                    "patterns": [
                      {
                        "include": "#disabled"
                      },
                      {
                        "include": "#pragma-mark"
                      }
                    ]
                  },
                  {
                    "begin": "^\\s*((#)\\s*(elif)\\b)",
                    "beginCaptures": {
                      "0": {
                        "name": "meta.preprocessor.objcpp"
                      },
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "contentName": "comment.block.preprocessor.elif-branch.objcpp",
                    "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                    "patterns": [
                      {
                        "include": "#disabled"
                      },
                      {
                        "include": "#pragma-mark"
                      }
                    ]
                  },
                  {
                    "include": "#block_innards"
                  }
                ]
              }
            ]
          },
          "preprocessor-rule-enabled-else": {
            "begin": "^\\s*((#)\\s*else\\b)",
            "beginCaptures": {
              "0": {
                "name": "meta.preprocessor.objcpp"
              },
              "1": {
                "name": "keyword.control.directive.conditional.objcpp"
              },
              "2": {
                "name": "punctuation.definition.directive.objcpp"
              }
            },
            "end": "(?=^\\s*((#)\\s*endif\\b))",
            "patterns": [
              {
                "include": "$base"
              }
            ]
          },
          "preprocessor-rule-enabled-else-block": {
            "begin": "^\\s*((#)\\s*else\\b)",
            "beginCaptures": {
              "0": {
                "name": "meta.preprocessor.objcpp"
              },
              "1": {
                "name": "keyword.control.directive.conditional.objcpp"
              },
              "2": {
                "name": "punctuation.definition.directive.objcpp"
              }
            },
            "end": "(?=^\\s*((#)\\s*endif\\b))",
            "patterns": [
              {
                "include": "#block_innards"
              }
            ]
          },
          "probably_a_parameter": {
            "captures": {
              "1": {
                "name": "variable.parameter.probably.objcpp"
              }
            },
            "match": "(?<=(?:[a-zA-Z_0-9] |[&*>\\]\\)]))\\s*([a-zA-Z_]\\w*)\\s*(?=(?:\\[\\]\\s*)?(?:,|\\)))"
          },
          "static_assert": {
            "begin": "(static_assert|_Static_assert)\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.other.static_assert.objcpp"
              },
              "2": {
                "name": "punctuation.section.arguments.begin.bracket.round.objcpp"
              }
            },
            "end": "(\\))",
            "endCaptures": {
              "1": {
                "name": "punctuation.section.arguments.end.bracket.round.objcpp"
              }
            },
            "patterns": [
              {
                "begin": "(,)\\s*(?=(?:L|u8|u|U\\s*\\\")?)",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.separator.delimiter.objcpp"
                  }
                },
                "end": "(?=\\))",
                "name": "meta.static_assert.message.objcpp",
                "patterns": [
                  {
                    "include": "#string_context"
                  },
                  {
                    "include": "#string_context_c"
                  }
                ]
              },
              {
                "include": "#function_call_context"
              }
            ]
          },
          "storage_types": {
            "patterns": [
              {
                "match": "(?-mix:(?<!\\w)(?:void|char|short|int|signed|unsigned|long|float|double|bool|_Bool)(?!\\w))",
                "name": "storage.type.built-in.primitive.objcpp"
              },
              {
                "match": "(?-mix:(?<!\\w)(?:_Complex|_Imaginary|u_char|u_short|u_int|u_long|ushort|uint|u_quad_t|quad_t|qaddr_t|caddr_t|daddr_t|div_t|dev_t|fixpt_t|blkcnt_t|blksize_t|gid_t|in_addr_t|in_port_t|ino_t|key_t|mode_t|nlink_t|id_t|pid_t|off_t|segsz_t|swblk_t|uid_t|id_t|clock_t|size_t|ssize_t|time_t|useconds_t|suseconds_t|pthread_attr_t|pthread_cond_t|pthread_condattr_t|pthread_mutex_t|pthread_mutexattr_t|pthread_once_t|pthread_rwlock_t|pthread_rwlockattr_t|pthread_t|pthread_key_t|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|int_least8_t|int_least16_t|int_least32_t|int_least64_t|uint_least8_t|uint_least16_t|uint_least32_t|uint_least64_t|int_fast8_t|int_fast16_t|int_fast32_t|int_fast64_t|uint_fast8_t|uint_fast16_t|uint_fast32_t|uint_fast64_t|intptr_t|uintptr_t|intmax_t|intmax_t|uintmax_t|uintmax_t|memory_order|atomic_bool|atomic_char|atomic_schar|atomic_uchar|atomic_short|atomic_ushort|atomic_int|atomic_uint|atomic_long|atomic_ulong|atomic_llong|atomic_ullong|atomic_char16_t|atomic_char32_t|atomic_wchar_t|atomic_int_least8_t|atomic_uint_least8_t|atomic_int_least16_t|atomic_uint_least16_t|atomic_int_least32_t|atomic_uint_least32_t|atomic_int_least64_t|atomic_uint_least64_t|atomic_int_fast8_t|atomic_uint_fast8_t|atomic_int_fast16_t|atomic_uint_fast16_t|atomic_int_fast32_t|atomic_uint_fast32_t|atomic_int_fast64_t|atomic_uint_fast64_t|atomic_intptr_t|atomic_uintptr_t|atomic_size_t|atomic_ptrdiff_t|atomic_intmax_t|atomic_uintmax_t)(?!\\w))",
                "name": "storage.type.built-in.objcpp"
              },
              {
                "match": "(?-mix:\\b(asm|__asm__|enum|struct|union)\\b)",
                "name": "storage.type.$1.objcpp"
              }
            ]
          },
          "string_escaped_char": {
            "patterns": [
              {
                "match": "\\\\(\\\\|[abefnprtv'\"?]|[0-3]\\d{,2}|[4-7]\\d?|x[a-fA-F0-9]{,2}|u[a-fA-F0-9]{,4}|U[a-fA-F0-9]{,8})",
                "name": "constant.character.escape.objcpp"
              },
              {
                "match": "\\\\.",
                "name": "invalid.illegal.unknown-escape.objcpp"
              }
            ]
          },
          "string_placeholder": {
            "patterns": [
              {
                "match": "%(\\d+\\$)?[#0\\- +']*[,;:_]?((-?\\d+)|\\*(-?\\d+\\$)?)?(\\.((-?\\d+)|\\*(-?\\d+\\$)?)?)?(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?[diouxXDOUeEfFgGaACcSspn%]",
                "name": "constant.other.placeholder.objcpp"
              },
              {
                "captures": {
                  "1": {
                    "name": "invalid.illegal.placeholder.objcpp"
                  }
                },
                "match": "(%)(?!\"\\s*(PRI|SCN))"
              }
            ]
          },
          "strings": {
            "patterns": [
              {
                "begin": "\"",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.objcpp"
                  }
                },
                "end": "\"",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.objcpp"
                  }
                },
                "name": "string.quoted.double.objcpp",
                "patterns": [
                  {
                    "include": "#string_escaped_char"
                  },
                  {
                    "include": "#string_placeholder"
                  },
                  {
                    "include": "#line_continuation_character"
                  }
                ]
              },
              {
                "begin": "'",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.objcpp"
                  }
                },
                "end": "'",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.objcpp"
                  }
                },
                "name": "string.quoted.single.objcpp",
                "patterns": [
                  {
                    "include": "#string_escaped_char"
                  },
                  {
                    "include": "#line_continuation_character"
                  }
                ]
              }
            ]
          },
          "switch_conditional_parentheses": {
            "begin": "(\\()",
            "beginCaptures": {
              "1": {
                "name": "punctuation.section.parens.begin.bracket.round.conditional.switch.objcpp"
              }
            },
            "end": "(\\))",
            "endCaptures": {
              "1": {
                "name": "punctuation.section.parens.end.bracket.round.conditional.switch.objcpp"
              }
            },
            "name": "meta.conditional.switch.objcpp",
            "patterns": [
              {
                "include": "#conditional_context"
              }
            ]
          },
          "switch_statement": {
            "begin": "(((?<!\\w)switch(?!\\w)))",
            "beginCaptures": {
              "1": {
                "name": "meta.head.switch.objcpp"
              },
              "2": {
                "name": "keyword.control.switch.objcpp"
              }
            },
            "end": "(?:(?<=\\})|(?=[;>\\[\\]=]))",
            "name": "meta.block.switch.objcpp",
            "patterns": [
              {
                "begin": "\\G ?",
                "end": "((?:\\{|(?=;)))",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.section.block.begin.bracket.curly.switch.objcpp"
                  }
                },
                "name": "meta.head.switch.objcpp",
                "patterns": [
                  {
                    "include": "#switch_conditional_parentheses"
                  },
                  {
                    "include": "$base"
                  }
                ]
              },
              {
                "begin": "(?<=\\{)",
                "end": "(\\})",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.section.block.end.bracket.curly.switch.objcpp"
                  }
                },
                "name": "meta.body.switch.objcpp",
                "patterns": [
                  {
                    "include": "#default_statement"
                  },
                  {
                    "include": "#case_statement"
                  },
                  {
                    "include": "$base"
                  },
                  {
                    "include": "#block_innards"
                  }
                ]
              },
              {
                "begin": "(?<=})[\\s\\n]*",
                "end": "[\\s\\n]*(?=;)",
                "name": "meta.tail.switch.objcpp",
                "patterns": [
                  {
                    "include": "$base"
                  }
                ]
              }
            ]
          },
          "vararg_ellipses": {
            "match": "(?<!\\.)\\.\\.\\.(?!\\.)",
            "name": "punctuation.vararg-ellipses.objcpp"
          }
        }
      },
      "comment": {
        "patterns": [
          {
            "begin": "/\\*",
            "captures": {
              "0": {
                "name": "punctuation.definition.comment.objcpp"
              }
            },
            "end": "\\*/",
            "name": "comment.block.objcpp"
          },
          {
            "begin": "(^[ \\t]+)?(?=//)",
            "beginCaptures": {
              "1": {
                "name": "punctuation.whitespace.comment.leading.objcpp"
              }
            },
            "end": "(?!\\G)",
            "patterns": [
              {
                "begin": "//",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.comment.objcpp"
                  }
                },
                "end": "\\n",
                "name": "comment.line.double-slash.objcpp",
                "patterns": [
                  {
                    "match": "(?>\\\\\\s*\\n)",
                    "name": "punctuation.separator.continuation.objcpp"
                  }
                ]
              }
            ]
          }
        ]
      },
      "cpp_lang": {
        "patterns": [
          {
            "include": "#special_block"
          },
          {
            "include": "#strings"
          },
          {
            "match": "\\b(friend|explicit|virtual|override|final|noexcept)\\b",
            "name": "storage.modifier.objcpp"
          },
          {
            "match": "\\b(private:|protected:|public:)",
            "name": "storage.type.modifier.access.objcpp"
          },
          {
            "match": "\\b(catch|try|throw|using)\\b",
            "name": "keyword.control.objcpp"
          },
          {
            "match": "\\bdelete\\b(\\s*\\[\\])?|\\bnew\\b(?!])",
            "name": "keyword.control.objcpp"
          },
          {
            "match": "\\b(f|m)[A-Z]\\w*\\b",
            "name": "variable.other.readwrite.member.objcpp"
          },
          {
            "match": "\\bthis\\b",
            "name": "variable.language.this.objcpp"
          },
          {
            "match": "\\bnullptr\\b",
            "name": "constant.language.objcpp"
          },
          {
            "include": "#template_definition"
          },
          {
            "match": "\\btemplate\\b\\s*",
            "name": "storage.type.template.objcpp"
          },
          {
            "match": "\\b(const_cast|dynamic_cast|reinterpret_cast|static_cast)\\b\\s*",
            "name": "keyword.operator.cast.objcpp"
          },
          {
            "captures": {
              "1": {
                "name": "entity.scope.objcpp"
              },
              "2": {
                "name": "entity.scope.name.objcpp"
              },
              "3": {
                "name": "punctuation.separator.namespace.access.objcpp"
              }
            },
            "match": "((?:[a-zA-Z_][a-zA-Z_0-9]*::)*)([a-zA-Z_][a-zA-Z_0-9]*)(::)",
            "name": "punctuation.separator.namespace.access.objcpp"
          },
          {
            "match": "\\b(and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|alignof|alignas)\\b",
            "name": "keyword.operator.objcpp"
          },
          {
            "match": "\\b(decltype|wchar_t|char16_t|char32_t)\\b",
            "name": "storage.type.objcpp"
          },
          {
            "match": "\\b(constexpr|export|mutable|typename|thread_local)\\b",
            "name": "storage.modifier.objcpp"
          },
          {
            "begin": "(?:^|(?:(?<!else|new|=)))((?:[A-Za-z_][A-Za-z0-9_]*::)*+~[A-Za-z_][A-Za-z0-9_]*)\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.objcpp"
              },
              "2": {
                "name": "punctuation.definition.parameters.begin.objcpp"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.parameters.end.objcpp"
              }
            },
            "name": "meta.function.destructor.objcpp",
            "patterns": [
              {
                "include": "$base"
              }
            ]
          },
          {
            "begin": "(?:^|(?:(?<!else|new|=)))((?:[A-Za-z_][A-Za-z0-9_]*::)*+~[A-Za-z_][A-Za-z0-9_]*)\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.objcpp"
              },
              "2": {
                "name": "punctuation.definition.parameters.begin.objcpp"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.parameters.end.objcpp"
              }
            },
            "name": "meta.function.destructor.prototype.objcpp",
            "patterns": [
              {
                "include": "$base"
              }
            ]
          },
          {
            "include": "#c_lang"
          }
        ],
        "repository": {
          "angle_brackets": {
            "begin": "<",
            "end": ">",
            "name": "meta.angle-brackets.objcpp",
            "patterns": [
              {
                "include": "#angle_brackets"
              },
              {
                "include": "$base"
              }
            ]
          },
          "block": {
            "begin": "\\{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.block.begin.bracket.curly.objcpp"
              }
            },
            "end": "\\}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.end.bracket.curly.objcpp"
              }
            },
            "name": "meta.block.objcpp",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "support.function.any-method.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.parameters.objcpp"
                  }
                },
                "match": "((?!while|for|do|if|else|switch|catch|enumerate|return|r?iterate)(?:\\b[A-Za-z_][A-Za-z0-9_]*+\\b|::)*+)\\s*(\\()",
                "name": "meta.function-call.objcpp"
              },
              {
                "include": "$base"
              }
            ]
          },
          "constructor": {
            "patterns": [
              {
                "begin": "(?:^\\s*)((?!while|for|do|if|else|switch|catch|enumerate|r?iterate)[A-Za-z_][A-Za-z0-9_:]*)\\s*(\\()",
                "beginCaptures": {
                  "1": {
                    "name": "entity.name.function.constructor.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.parameters.begin.objcpp"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.parameters.end.objcpp"
                  }
                },
                "name": "meta.function.constructor.objcpp",
                "patterns": [
                  {
                    "include": "#probably_a_parameter"
                  },
                  {
                    "include": "#function-innards"
                  }
                ]
              },
              {
                "begin": "(:)((?=\\s*[A-Za-z_][A-Za-z0-9_:]*\\s*(\\()))",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.definition.parameters.objcpp"
                  }
                },
                "end": "(?=\\{)",
                "name": "meta.function.constructor.initializer-list.objcpp",
                "patterns": [
                  {
                    "include": "$base"
                  }
                ]
              }
            ]
          },
          "special_block": {
            "patterns": [
              {
                "begin": "\\b(using)\\b\\s*(namespace)\\b\\s*((?:[_A-Za-z][_A-Za-z0-9]*\\b(::)?)*)",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.control.objcpp"
                  },
                  "2": {
                    "name": "storage.type.namespace.objcpp"
                  },
                  "3": {
                    "name": "entity.name.type.objcpp"
                  }
                },
                "end": ";",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.terminator.statement.objcpp"
                  }
                },
                "name": "meta.using-namespace-declaration.objcpp"
              },
              {
                "begin": "\\b(namespace)\\b\\s*([_A-Za-z][_A-Za-z0-9]*\\b)?+",
                "beginCaptures": {
                  "1": {
                    "name": "storage.type.namespace.objcpp"
                  },
                  "2": {
                    "name": "entity.name.type.objcpp"
                  }
                },
                "captures": {
                  "1": {
                    "name": "keyword.control.namespace.$2.objcpp"
                  }
                },
                "end": "(?<=\\})|(?=(;|,|\\(|\\)|>|\\[|\\]|=))",
                "name": "meta.namespace-block.objcpp",
                "patterns": [
                  {
                    "begin": "\\{",
                    "beginCaptures": {
                      "0": {
                        "name": "punctuation.definition.scope.objcpp"
                      }
                    },
                    "end": "\\}",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.definition.scope.objcpp"
                      }
                    },
                    "patterns": [
                      {
                        "include": "#special_block"
                      },
                      {
                        "include": "#constructor"
                      },
                      {
                        "include": "$base"
                      }
                    ]
                  },
                  {
                    "include": "$base"
                  }
                ]
              },
              {
                "begin": "\\b(?:(class)|(struct))\\b\\s*([_A-Za-z][_A-Za-z0-9]*\\b)?+(\\s*:\\s*(public|protected|private)\\s*([_A-Za-z][_A-Za-z0-9]*\\b)((\\s*,\\s*(public|protected|private)\\s*[_A-Za-z][_A-Za-z0-9]*\\b)*))?",
                "beginCaptures": {
                  "1": {
                    "name": "storage.type.class.objcpp"
                  },
                  "2": {
                    "name": "storage.type.struct.objcpp"
                  },
                  "3": {
                    "name": "entity.name.type.objcpp"
                  },
                  "5": {
                    "name": "storage.type.modifier.access.objcpp"
                  },
                  "6": {
                    "name": "entity.name.type.inherited.objcpp"
                  },
                  "7": {
                    "patterns": [
                      {
                        "match": "(public|protected|private)",
                        "name": "storage.type.modifier.access.objcpp"
                      },
                      {
                        "match": "[_A-Za-z][_A-Za-z0-9]*",
                        "name": "entity.name.type.inherited.objcpp"
                      }
                    ]
                  }
                },
                "end": "(?<=\\})|(?=(;|\\(|\\)|>|\\[|\\]|=))",
                "name": "meta.class-struct-block.objcpp",
                "patterns": [
                  {
                    "include": "#angle_brackets"
                  },
                  {
                    "begin": "\\{",
                    "beginCaptures": {
                      "0": {
                        "name": "punctuation.section.block.begin.bracket.curly.objcpp"
                      }
                    },
                    "end": "(\\})(\\s*\\n)?",
                    "endCaptures": {
                      "1": {
                        "name": "punctuation.section.block.end.bracket.curly.objcpp"
                      },
                      "2": {
                        "name": "invalid.illegal.you-forgot-semicolon.objcpp"
                      }
                    },
                    "patterns": [
                      {
                        "include": "#special_block"
                      },
                      {
                        "include": "#constructor"
                      },
                      {
                        "include": "$base"
                      }
                    ]
                  },
                  {
                    "include": "$base"
                  }
                ]
              },
              {
                "begin": "\\b(extern)(?=\\s*\")",
                "beginCaptures": {
                  "1": {
                    "name": "storage.modifier.objcpp"
                  }
                },
                "end": "(?<=\\})|(?=\\w)|(?=\\s*#\\s*endif\\b)",
                "name": "meta.extern-block.objcpp",
                "patterns": [
                  {
                    "begin": "\\{",
                    "beginCaptures": {
                      "0": {
                        "name": "punctuation.section.block.begin.bracket.curly.objcpp"
                      }
                    },
                    "end": "\\}|(?=\\s*#\\s*endif\\b)",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.section.block.end.bracket.curly.objcpp"
                      }
                    },
                    "patterns": [
                      {
                        "include": "#special_block"
                      },
                      {
                        "include": "$base"
                      }
                    ]
                  },
                  {
                    "include": "$base"
                  }
                ]
              }
            ]
          },
          "strings": {
            "patterns": [
              {
                "begin": "(u|u8|U|L)?\"",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.objcpp"
                  },
                  "1": {
                    "name": "meta.encoding.objcpp"
                  }
                },
                "end": "\"",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.objcpp"
                  }
                },
                "name": "string.quoted.double.objcpp",
                "patterns": [
                  {
                    "match": "\\\\u\\h{4}|\\\\U\\h{8}",
                    "name": "constant.character.escape.objcpp"
                  },
                  {
                    "match": "\\\\['\"?\\\\abfnrtv]",
                    "name": "constant.character.escape.objcpp"
                  },
                  {
                    "match": "\\\\[0-7]{1,3}",
                    "name": "constant.character.escape.objcpp"
                  },
                  {
                    "match": "\\\\x\\h+",
                    "name": "constant.character.escape.objcpp"
                  },
                  {
                    "include": "#string_placeholder"
                  }
                ]
              },
              {
                "begin": "(u|u8|U|L)?R\"(?:([^ ()\\\\\\t]{0,16})|([^ ()\\\\\\t]*))\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.objcpp"
                  },
                  "1": {
                    "name": "meta.encoding.objcpp"
                  },
                  "3": {
                    "name": "invalid.illegal.delimiter-too-long.objcpp"
                  }
                },
                "end": "\\)\\2(\\3)\"",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.objcpp"
                  },
                  "1": {
                    "name": "invalid.illegal.delimiter-too-long.objcpp"
                  }
                },
                "name": "string.quoted.double.raw.objcpp"
              }
            ]
          },
          "template_definition": {
            "begin": "\\b(template)\\s*(<)\\s*",
            "beginCaptures": {
              "1": {
                "name": "storage.type.template.objcpp"
              },
              "2": {
                "name": "meta.template.angle-brackets.start.objcpp"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "meta.template.angle-brackets.end.objcpp"
              }
            },
            "name": "template.definition.objcpp",
            "patterns": [
              {
                "include": "#template_definition_argument"
              }
            ]
          },
          "template_definition_argument": {
            "captures": {
              "1": {
                "name": "storage.type.template.objcpp"
              },
              "2": {
                "name": "storage.type.template.objcpp"
              },
              "3": {
                "name": "entity.name.type.template.objcpp"
              },
              "4": {
                "name": "storage.type.template.objcpp"
              },
              "5": {
                "name": "meta.template.operator.ellipsis.objcpp"
              },
              "6": {
                "name": "entity.name.type.template.objcpp"
              },
              "7": {
                "name": "storage.type.template.objcpp"
              },
              "8": {
                "name": "entity.name.type.template.objcpp"
              },
              "9": {
                "name": "keyword.operator.assignment.objcpp"
              },
              "10": {
                "name": "constant.language.objcpp"
              },
              "11": {
                "name": "meta.template.operator.comma.objcpp"
              }
            },
            "match": "\\s*(?:([a-zA-Z_][a-zA-Z_0-9]*\\s*)|((?:[a-zA-Z_][a-zA-Z_0-9]*\\s+)*)([a-zA-Z_][a-zA-Z_0-9]*)|([a-zA-Z_][a-zA-Z_0-9]*)\\s*(\\.\\.\\.)\\s*([a-zA-Z_][a-zA-Z_0-9]*)|((?:[a-zA-Z_][a-zA-Z_0-9]*\\s+)*)([a-zA-Z_][a-zA-Z_0-9]*)\\s*(=)\\s*(\\w+))(,|(?=>))"
          }
        }
      },
      "cpp_lang_newish": {
        "patterns": [
          {
            "include": "#special_block"
          },
          {
            "match": "(?-mix:##[a-zA-Z_]\\w*(?!\\w))",
            "name": "variable.other.macro.argument.objcpp"
          },
          {
            "include": "#strings"
          },
          {
            "match": "(?<!\\w)((?:inline|constexpr|mutable|friend|explicit|virtual))(?!\\w)",
            "name": "storage.modifier.specificer.functional.pre-parameters.$1.objcpp"
          },
          {
            "match": "(?<!\\w)((?:final|override|volatile|const|noexcept))(?!\\w)(?=\\s*(?:(?:(?:(?:\\{|;))|[\\n\\r])))",
            "name": "storage.modifier.specifier.functional.post-parameters.$1.objcpp"
          },
          {
            "match": "(?<!\\w)((?:const|static|volatile|register|restrict|extern))(?!\\w)",
            "name": "storage.modifier.specifier.$1.objcpp"
          },
          {
            "match": "(?<!\\w)((?:private|protected|public)) *:",
            "name": "storage.type.modifier.access.control.$1.objcpp"
          },
          {
            "match": "(?<!\\w)(?:throw|try|catch)(?!\\w)",
            "name": "keyword.control.exception.$1.objcpp"
          },
          {
            "match": "(?<!\\w)(using|typedef)(?!\\w)",
            "name": "keyword.other.$1.objcpp"
          },
          {
            "include": "#memory_operators"
          },
          {
            "match": "\\bthis\\b",
            "name": "variable.language.this.objcpp"
          },
          {
            "include": "#constants"
          },
          {
            "include": "#template_definition"
          },
          {
            "match": "\\btemplate\\b\\s*",
            "name": "storage.type.template.objcpp"
          },
          {
            "match": "\\b(const_cast|dynamic_cast|reinterpret_cast|static_cast)\\b\\s*",
            "name": "keyword.operator.cast.$1.objcpp"
          },
          {
            "include": "#scope_resolution"
          },
          {
            "match": "\\b(decltype|wchar_t|char16_t|char32_t)\\b",
            "name": "storage.type.objcpp"
          },
          {
            "match": "\\b(constexpr|export|mutable|typename|thread_local)\\b",
            "name": "storage.modifier.objcpp"
          },
          {
            "begin": "(?:^|(?:(?<!else|new|=)))((?:[A-Za-z_][A-Za-z0-9_]*::)*+~[A-Za-z_][A-Za-z0-9_]*)\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.destructor.objcpp"
              },
              "2": {
                "name": "punctuation.definition.parameters.begin.destructor.objcpp"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.parameters.end.destructor.objcpp"
              }
            },
            "name": "meta.function.destructor.objcpp",
            "patterns": [
              {
                "include": "$base"
              }
            ]
          },
          {
            "begin": "(?:^|(?:(?<!else|new|=)))((?:[A-Za-z_][A-Za-z0-9_]*::)*+~[A-Za-z_][A-Za-z0-9_]*)\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.objcpp"
              },
              "2": {
                "name": "punctuation.definition.parameters.begin.objcpp"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.parameters.end.objcpp"
              }
            },
            "name": "meta.function.destructor.prototype.objcpp",
            "patterns": [
              {
                "include": "$base"
              }
            ]
          },
          {
            "include": "#preprocessor-rule-enabled"
          },
          {
            "include": "#preprocessor-rule-disabled"
          },
          {
            "include": "#preprocessor-rule-conditional"
          },
          {
            "include": "#comments-c"
          },
          {
            "match": "\\b(break|case|continue|default|do|else|for|goto|if|_Pragma|return|switch|while)\\b",
            "name": "keyword.control.$1.objcpp"
          },
          {
            "include": "#storage_types_c"
          },
          {
            "match": "\\b(const|extern|register|restrict|static|volatile|inline)\\b",
            "name": "storage.modifier.objcpp"
          },
          {
            "include": "#operators"
          },
          {
            "include": "#operator_overload"
          },
          {
            "include": "#number_literal"
          },
          {
            "include": "#strings-c"
          },
          {
            "begin": "^\\s*((\\#)\\s*define)\\s+((?<id>[a-zA-Z_$][\\w$]*))(?:(\\()(\\s*\\g<id>\\s*((,)\\s*\\g<id>\\s*)*(?:\\.\\.\\.)?)(\\)))?",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.directive.define.objcpp"
              },
              "2": {
                "name": "punctuation.definition.directive.objcpp"
              },
              "3": {
                "name": "entity.name.function.preprocessor.objcpp"
              },
              "5": {
                "name": "punctuation.definition.parameters.begin.objcpp"
              },
              "6": {
                "name": "variable.parameter.preprocessor.objcpp"
              },
              "8": {
                "name": "punctuation.separator.parameters.objcpp"
              },
              "9": {
                "name": "punctuation.definition.parameters.end.objcpp"
              }
            },
            "end": "(?=(?://|/\\*))|(?<!\\\\)(?=\\n)",
            "name": "meta.preprocessor.macro.objcpp",
            "patterns": [
              {
                "include": "#preprocessor-rule-define-line-contents"
              }
            ]
          },
          {
            "begin": "^\\s*((#)\\s*(error|warning))\\b\\s*",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.directive.diagnostic.$3.objcpp"
              },
              "2": {
                "name": "punctuation.definition.directive.objcpp"
              }
            },
            "end": "(?<!\\\\)(?=\\n)",
            "name": "meta.preprocessor.diagnostic.objcpp",
            "patterns": [
              {
                "begin": "\"",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.objcpp"
                  }
                },
                "end": "\"|(?<!\\\\)(?=\\s*\\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.objcpp"
                  }
                },
                "name": "string.quoted.double.objcpp",
                "patterns": [
                  {
                    "include": "#line_continuation_character"
                  }
                ]
              },
              {
                "begin": "'",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.objcpp"
                  }
                },
                "end": "'|(?<!\\\\)(?=\\s*\\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.objcpp"
                  }
                },
                "name": "string.quoted.single.objcpp",
                "patterns": [
                  {
                    "include": "#line_continuation_character"
                  }
                ]
              },
              {
                "begin": "[^'\"]",
                "end": "(?<!\\\\)(?=\\s*\\n)",
                "name": "string.unquoted.single.objcpp",
                "patterns": [
                  {
                    "include": "#line_continuation_character"
                  },
                  {
                    "include": "#comments-c"
                  }
                ]
              }
            ]
          },
          {
            "begin": "^\\s*((#)\\s*(include(?:_next)?|import))\\b\\s*",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.directive.$3.objcpp"
              },
              "2": {
                "name": "punctuation.definition.directive.objcpp"
              }
            },
            "end": "(?=(?://|/\\*))|(?<!\\\\)(?=\\n)",
            "name": "meta.preprocessor.include.objcpp",
            "patterns": [
              {
                "include": "#line_continuation_character"
              },
              {
                "begin": "\"",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.objcpp"
                  }
                },
                "end": "\"",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.objcpp"
                  }
                },
                "name": "string.quoted.double.include.objcpp"
              },
              {
                "begin": "<",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.objcpp"
                  }
                },
                "end": ">",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.objcpp"
                  }
                },
                "name": "string.quoted.other.lt-gt.include.objcpp"
              }
            ]
          },
          {
            "include": "#pragma-mark"
          },
          {
            "begin": "^\\s*((#)\\s*line)\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.directive.line.objcpp"
              },
              "2": {
                "name": "punctuation.definition.directive.objcpp"
              }
            },
            "end": "(?=(?://|/\\*))|(?<!\\\\)(?=\\n)",
            "name": "meta.preprocessor.objcpp",
            "patterns": [
              {
                "include": "#strings-c"
              },
              {
                "include": "#number_literal"
              },
              {
                "include": "#line_continuation_character"
              }
            ]
          },
          {
            "begin": "^\\s*(?:((#)\\s*undef))\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.directive.undef.objcpp"
              },
              "2": {
                "name": "punctuation.definition.directive.objcpp"
              }
            },
            "end": "(?=(?://|/\\*))|(?<!\\\\)(?=\\n)",
            "name": "meta.preprocessor.objcpp",
            "patterns": [
              {
                "match": "[a-zA-Z_$][\\w$]*",
                "name": "entity.name.function.preprocessor.objcpp"
              },
              {
                "include": "#line_continuation_character"
              }
            ]
          },
          {
            "begin": "^\\s*(?:((#)\\s*pragma))\\b",
            "beginCaptures": {
              "1": {
                "name": "keyword.control.directive.pragma.objcpp"
              },
              "2": {
                "name": "punctuation.definition.directive.objcpp"
              }
            },
            "end": "(?=(?://|/\\*))|(?<!\\\\)(?=\\n)",
            "name": "meta.preprocessor.pragma.objcpp",
            "patterns": [
              {
                "include": "#strings-c"
              },
              {
                "match": "[a-zA-Z_$][\\w\\-$]*",
                "name": "entity.other.attribute-name.pragma.preprocessor.objcpp"
              },
              {
                "include": "#number_literal"
              },
              {
                "include": "#line_continuation_character"
              }
            ]
          },
          {
            "match": "\\b(u_char|u_short|u_int|u_long|ushort|uint|u_quad_t|quad_t|qaddr_t|caddr_t|daddr_t|div_t|dev_t|fixpt_t|blkcnt_t|blksize_t|gid_t|in_addr_t|in_port_t|ino_t|key_t|mode_t|nlink_t|id_t|pid_t|off_t|segsz_t|swblk_t|uid_t|id_t|clock_t|size_t|ssize_t|time_t|useconds_t|suseconds_t)\\b",
            "name": "support.type.sys-types.objcpp"
          },
          {
            "match": "\\b(pthread_attr_t|pthread_cond_t|pthread_condattr_t|pthread_mutex_t|pthread_mutexattr_t|pthread_once_t|pthread_rwlock_t|pthread_rwlockattr_t|pthread_t|pthread_key_t)\\b",
            "name": "support.type.pthread.objcpp"
          },
          {
            "match": "\\b(int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|int_least8_t|int_least16_t|int_least32_t|int_least64_t|uint_least8_t|uint_least16_t|uint_least32_t|uint_least64_t|int_fast8_t|int_fast16_t|int_fast32_t|int_fast64_t|uint_fast8_t|uint_fast16_t|uint_fast32_t|uint_fast64_t|intptr_t|uintptr_t|intmax_t|intmax_t|uintmax_t|uintmax_t)\\b",
            "name": "support.type.stdint.objcpp"
          },
          {
            "match": "(?<!\\w)[a-zA-Z_](?:\\w)*_t(?!\\w)",
            "name": "support.type.posix-reserved.objcpp"
          },
          {
            "include": "#block-c"
          },
          {
            "include": "#parens-c"
          },
          {
            "begin": "(?<!\\w)(?!\\s*(?:not|compl|sizeof|new|delete|not_eq|bitand|xor|bitor|and|or|throw|and_eq|xor_eq|or_eq|alignof|alignas|typeid|noexcept|static_cast|dynamic_cast|const_cast|reinterpret_cast|while|for|do|if|else|goto|switch|try|catch|return|break|case|continue|default|auto|void|char|short|int|signed|unsigned|long|float|double|bool|wchar_t|u_char|u_short|u_int|u_long|ushort|uint|u_quad_t|quad_t|qaddr_t|caddr_t|daddr_t|div_t|dev_t|fixpt_t|blkcnt_t|blksize_t|gid_t|in_addr_t|in_port_t|ino_t|key_t|mode_t|nlink_t|id_t|pid_t|off_t|segsz_t|swblk_t|uid_t|id_t|clock_t|size_t|ssize_t|time_t|useconds_t|suseconds_t|pthread_attr_t|pthread_cond_t|pthread_condattr_t|pthread_mutex_t|pthread_mutexattr_t|pthread_once_t|pthread_rwlock_t|pthread_rwlockattr_t|pthread_t|pthread_key_t|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|int_least8_t|int_least16_t|int_least32_t|int_least64_t|uint_least8_t|uint_least16_t|uint_least32_t|uint_least64_t|int_fast8_t|int_fast16_t|int_fast32_t|int_fast64_t|uint_fast8_t|uint_fast16_t|uint_fast32_t|uint_fast64_t|intptr_t|uintptr_t|intmax_t|intmax_t|uintmax_t|uintmax_t|NULL|true|false|nullptr|class|struct|union|enum|const|static|volatile|register|restrict|extern|inline|constexpr|mutable|friend|explicit|virtual|volatile|const|noexcept|constexpr|mutable|constexpr|consteval|private|protected|public|this|template|namespace|using|operator|typedef|decltype|typename|asm|__asm__|concept|requires|export|thread_local|atomic_cancel|atomic_commit|atomic_noexcept|co_await|co_return|co_yield|import|module|reflexpr|synchronized)\\s*\\()(?=[a-zA-Z_]\\w*\\s*\\()",
            "end": "(?<=\\))",
            "name": "meta.function.definition.objcpp",
            "patterns": [
              {
                "include": "#function-innards-c"
              }
            ]
          },
          {
            "include": "#line_continuation_character"
          },
          {
            "begin": "([a-zA-Z_][a-zA-Z_0-9]*|(?<=[\\]\\)]))?(\\[)(?!\\])",
            "beginCaptures": {
              "1": {
                "name": "variable.other.object.objcpp"
              },
              "2": {
                "name": "punctuation.definition.begin.bracket.square.objcpp"
              }
            },
            "end": "\\]",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.end.bracket.square.objcpp"
              }
            },
            "name": "meta.bracket.square.access.objcpp",
            "patterns": [
              {
                "include": "#function-call-innards-c"
              }
            ]
          },
          {
            "match": "(?-mix:(?<!delete))\\\\[\\\\s*\\\\]",
            "name": "storage.modifier.array.bracket.square.objcpp"
          },
          {
            "match": ";",
            "name": "punctuation.terminator.statement.objcpp"
          },
          {
            "match": ",",
            "name": "punctuation.separator.delimiter.objcpp"
          }
        ],
        "repository": {
          "access-member": {
            "captures": {
              "1": {
                "name": "variable.other.object.objcpp"
              },
              "2": {
                "name": "punctuation.separator.dot-access.objcpp"
              },
              "3": {
                "name": "punctuation.separator.pointer-access.objcpp"
              },
              "4": {
                "patterns": [
                  {
                    "match": "\\.",
                    "name": "punctuation.separator.dot-access.objcpp"
                  },
                  {
                    "match": "->",
                    "name": "punctuation.separator.pointer-access.objcpp"
                  },
                  {
                    "match": "[a-zA-Z_]\\w*",
                    "name": "variable.other.object.objcpp"
                  },
                  {
                    "match": ".+",
                    "name": "everything.else.objcpp"
                  }
                ]
              },
              "5": {
                "name": "variable.other.member.objcpp"
              }
            },
            "match": "(?:(?:([a-zA-Z_]\\w*)|(?<=\\]|\\))))\\s*(?:(?:((?:(?:\\.|\\.\\*)))|((?:(?:->|->\\*)))))\\s*((?:[a-zA-Z_]\\w*\\s*(?:(?:\\.|->))\\s*)*)\\b(?!(?:auto|void|char|short|int|signed|unsigned|long|float|double|bool|wchar_t|u_char|u_short|u_int|u_long|ushort|uint|u_quad_t|quad_t|qaddr_t|caddr_t|daddr_t|div_t|dev_t|fixpt_t|blkcnt_t|blksize_t|gid_t|in_addr_t|in_port_t|ino_t|key_t|mode_t|nlink_t|id_t|pid_t|off_t|segsz_t|swblk_t|uid_t|id_t|clock_t|size_t|ssize_t|time_t|useconds_t|suseconds_t|pthread_attr_t|pthread_cond_t|pthread_condattr_t|pthread_mutex_t|pthread_mutexattr_t|pthread_once_t|pthread_rwlock_t|pthread_rwlockattr_t|pthread_t|pthread_key_t|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|int_least8_t|int_least16_t|int_least32_t|int_least64_t|uint_least8_t|uint_least16_t|uint_least32_t|uint_least64_t|int_fast8_t|int_fast16_t|int_fast32_t|int_fast64_t|uint_fast8_t|uint_fast16_t|uint_fast32_t|uint_fast64_t|intptr_t|uintptr_t|intmax_t|intmax_t|uintmax_t|uintmax_t))([a-zA-Z_]\\w*)\\b(?!\\()",
            "name": "variable.other.object.access.objcpp"
          },
          "access-method": {
            "begin": "([a-zA-Z_][a-zA-Z_0-9]*|(?<=[\\]\\)]))\\s*(?:(\\.)|(->))((?:(?:[a-zA-Z_][a-zA-Z_0-9]*)\\s*(?:(?:\\.)|(?:->)))*)\\s*([a-zA-Z_][a-zA-Z_0-9]*)(\\()",
            "beginCaptures": {
              "1": {
                "name": "variable.other.object.objcpp"
              },
              "2": {
                "name": "punctuation.separator.dot-access.objcpp"
              },
              "3": {
                "name": "punctuation.separator.pointer-access.objcpp"
              },
              "4": {
                "patterns": [
                  {
                    "match": "\\.",
                    "name": "punctuation.separator.dot-access.objcpp"
                  },
                  {
                    "match": "->",
                    "name": "punctuation.separator.pointer-access.objcpp"
                  },
                  {
                    "match": "[a-zA-Z_][a-zA-Z_0-9]*",
                    "name": "variable.other.object.objcpp"
                  },
                  {
                    "match": ".+",
                    "name": "everything.else.objcpp"
                  }
                ]
              },
              "5": {
                "name": "entity.name.function.member.objcpp"
              },
              "6": {
                "name": "punctuation.section.arguments.begin.bracket.round.function.member.objcpp"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.arguments.end.bracket.round.function.member.objcpp"
              }
            },
            "name": "meta.function-call.member.objcpp",
            "patterns": [
              {
                "include": "#function-call-innards-c"
              }
            ]
          },
          "angle_brackets": {
            "begin": "<",
            "end": ">",
            "name": "meta.angle-brackets.objcpp",
            "patterns": [
              {
                "include": "#angle_brackets"
              },
              {
                "include": "$base"
              }
            ]
          },
          "block": {
            "begin": "\\{",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.block.begin.bracket.curly.objcpp"
              }
            },
            "end": "\\}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.block.end.bracket.curly.objcpp"
              }
            },
            "name": "meta.block.objcpp",
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "support.function.any-method.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.parameters.objcpp"
                  }
                },
                "match": "((?!while|for|do|if|else|switch|catch|return)(?:\\b[A-Za-z_][A-Za-z0-9_]*+\\b|::)*+)\\s*(\\()",
                "name": "meta.function-call.objcpp"
              },
              {
                "include": "$base"
              }
            ]
          },
          "block-c": {
            "patterns": [
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.block.begin.bracket.curly.objcpp"
                  }
                },
                "end": "}|(?=\\s*#\\s*(?:elif|else|endif)\\b)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.block.end.bracket.curly.objcpp"
                  }
                },
                "name": "meta.block.objcpp",
                "patterns": [
                  {
                    "include": "#block_innards-c"
                  }
                ]
              }
            ]
          },
          "block_innards-c": {
            "patterns": [
              {
                "include": "#preprocessor-rule-enabled-block"
              },
              {
                "include": "#preprocessor-rule-disabled-block"
              },
              {
                "include": "#preprocessor-rule-conditional-block"
              },
              {
                "include": "#access-method"
              },
              {
                "include": "#access-member"
              },
              {
                "include": "#c_function_call"
              },
              {
                "begin": "(?:(?:(?=\\s)(?<!else|new|return)(?<=\\w)\\s+(and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|alignof|alignas)))((?:[A-Za-z_][A-Za-z0-9_]*+|::)++|(?:(?<=operator)(?:[-*&<>=+!]+|\\(\\)|\\[\\])))\\s*(\\()",
                "beginCaptures": {
                  "1": {
                    "name": "variable.other.objcpp"
                  },
                  "2": {
                    "name": "punctuation.section.parens.begin.bracket.round.initialization.objcpp"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.parens.end.bracket.round.initialization.objcpp"
                  }
                },
                "name": "meta.initialization.objcpp",
                "patterns": [
                  {
                    "include": "#function-call-innards-c"
                  }
                ]
              },
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.block.begin.bracket.curly.objcpp"
                  }
                },
                "end": "}|(?=\\s*#\\s*(?:elif|else|endif)\\b)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.block.end.bracket.curly.objcpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#block_innards-c"
                  }
                ]
              },
              {
                "include": "#parens-block-c"
              },
              {
                "include": "$base"
              }
            ]
          },
          "c_function_call": {
            "begin": "(?!(?:while|for|do|if|else|switch|catch|return|typeid|alignof|alignas|sizeof|and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|alignof|alignas)\\s*\\()(?=(?:[A-Za-z_][A-Za-z0-9_]*+|::)++\\s*(?:(?:<(?:[\\s<>,\\w])*>\\s*))?\\(|(?:(?<=operator)(?:[-*&<>=+!]+|\\(\\)|\\[\\]))\\s*\\()",
            "end": "(?<=\\))(?!\\w)",
            "name": "meta.function-call.objcpp",
            "patterns": [
              {
                "include": "#function-call-innards-c"
              }
            ]
          },
          "comments-c": {
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "meta.toc-list.banner.block.objcpp"
                  }
                },
                "match": "^/\\* =(\\s*.*?)\\s*= \\*/$\\n?",
                "name": "comment.block.objcpp"
              },
              {
                "begin": "/\\*",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.comment.begin.objcpp"
                  }
                },
                "end": "\\*/",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.comment.end.objcpp"
                  }
                },
                "name": "comment.block.objcpp"
              },
              {
                "captures": {
                  "1": {
                    "name": "meta.toc-list.banner.line.objcpp"
                  }
                },
                "match": "^// =(\\s*.*?)\\s*=\\s*$\\n?",
                "name": "comment.line.banner.objcpp"
              },
              {
                "begin": "(^[ \\t]+)?(?=//)",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.whitespace.comment.leading.objcpp"
                  }
                },
                "end": "(?!\\G)",
                "patterns": [
                  {
                    "begin": "//",
                    "beginCaptures": {
                      "0": {
                        "name": "punctuation.definition.comment.objcpp"
                      }
                    },
                    "end": "(?=\\n)",
                    "name": "comment.line.double-slash.objcpp",
                    "patterns": [
                      {
                        "include": "#line_continuation_character"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "constants": {
            "match": "(?<!\\w)(?:NULL|true|false|nullptr)(?!\\w)",
            "name": "constant.language.objcpp"
          },
          "constructor": {
            "patterns": [
              {
                "begin": "(?:^\\s*)((?!while|for|do|if|else|switch|catch)[A-Za-z_][A-Za-z0-9_:]*)\\s*(\\()",
                "beginCaptures": {
                  "1": {
                    "name": "entity.name.function.constructor.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.parameters.begin.constructor.objcpp"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.parameters.end.constructor.objcpp"
                  }
                },
                "name": "meta.function.constructor.objcpp",
                "patterns": [
                  {
                    "include": "#probably_a_parameter"
                  },
                  {
                    "include": "#function-innards-c"
                  }
                ]
              },
              {
                "begin": "(:)((?=\\s*[A-Za-z_][A-Za-z0-9_:]*\\s*(\\()))",
                "beginCaptures": {
                  "1": {
                    "name": "punctuation.definition.initializer-list.parameters.objcpp"
                  }
                },
                "end": "(?=\\{)",
                "name": "meta.function.constructor.initializer-list.objcpp",
                "patterns": [
                  {
                    "include": "$base"
                  }
                ]
              }
            ]
          },
          "disabled": {
            "begin": "^\\s*#\\s*if(n?def)?\\b.*$",
            "end": "^\\s*#\\s*endif\\b",
            "patterns": [
              {
                "include": "#disabled"
              },
              {
                "include": "#pragma-mark"
              }
            ]
          },
          "function-call-innards-c": {
            "patterns": [
              {
                "include": "#comments-c"
              },
              {
                "include": "#storage_types_c"
              },
              {
                "include": "#access-method"
              },
              {
                "include": "#access-member"
              },
              {
                "include": "#operators"
              },
              {
                "begin": "(?!(?:while|for|do|if|else|switch|catch|return|typeid|alignof|alignas|sizeof|and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|alignof|alignas)\\s*\\()((?:new)\\s*((?:(?:<(?:[\\s<>,\\w])*>\\s*))?)|(?:(?<=operator)(?:[-*&<>=+!]+|\\(\\)|\\[\\])))\\s*(\\()",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.operator.memory.new.objcpp"
                  },
                  "2": {
                    "patterns": [
                      {
                        "include": "#template_call_innards"
                      }
                    ]
                  },
                  "3": {
                    "name": "punctuation.section.arguments.begin.bracket.round.objcpp"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.arguments.end.bracket.round.objcpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#function-call-innards-c"
                  }
                ]
              },
              {
                "begin": "(?<!\\w)(?!\\s*(?:not|compl|sizeof|new|delete|not_eq|bitand|xor|bitor|and|or|throw|and_eq|xor_eq|or_eq|alignof|alignas|typeid|noexcept|static_cast|dynamic_cast|const_cast|reinterpret_cast|while|for|do|if|else|goto|switch|try|catch|return|break|case|continue|default|auto|void|char|short|int|signed|unsigned|long|float|double|bool|wchar_t|u_char|u_short|u_int|u_long|ushort|uint|u_quad_t|quad_t|qaddr_t|caddr_t|daddr_t|div_t|dev_t|fixpt_t|blkcnt_t|blksize_t|gid_t|in_addr_t|in_port_t|ino_t|key_t|mode_t|nlink_t|id_t|pid_t|off_t|segsz_t|swblk_t|uid_t|id_t|clock_t|size_t|ssize_t|time_t|useconds_t|suseconds_t|pthread_attr_t|pthread_cond_t|pthread_condattr_t|pthread_mutex_t|pthread_mutexattr_t|pthread_once_t|pthread_rwlock_t|pthread_rwlockattr_t|pthread_t|pthread_key_t|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|int_least8_t|int_least16_t|int_least32_t|int_least64_t|uint_least8_t|uint_least16_t|uint_least32_t|uint_least64_t|int_fast8_t|int_fast16_t|int_fast32_t|int_fast64_t|uint_fast8_t|uint_fast16_t|uint_fast32_t|uint_fast64_t|intptr_t|uintptr_t|intmax_t|intmax_t|uintmax_t|uintmax_t|NULL|true|false|nullptr|class|struct|union|enum|const|static|volatile|register|restrict|extern|inline|constexpr|mutable|friend|explicit|virtual|volatile|const|noexcept|constexpr|mutable|constexpr|consteval|private|protected|public|this|template|namespace|using|operator|typedef|decltype|typename|asm|__asm__|concept|requires|export|thread_local|atomic_cancel|atomic_commit|atomic_noexcept|co_await|co_return|co_yield|import|module|reflexpr|synchronized)\\s*\\()((?:[a-zA-Z_]\\w*\\s*(?:(?:<(?:[\\s<>,\\w])*>\\s*))?::)*)\\s*([a-zA-Z_]\\w*)\\s*(?:((?:<(?:[\\s<>,\\w])*>\\s*)))?(\\()",
                "beginCaptures": {
                  "1": {
                    "patterns": [
                      {
                        "include": "#scope_resolution"
                      }
                    ]
                  },
                  "2": {
                    "name": "entity.name.function.call.objcpp"
                  },
                  "3": {
                    "patterns": [
                      {
                        "include": "#template_call_innards"
                      }
                    ]
                  },
                  "4": {
                    "name": "punctuation.section.arguments.begin.bracket.round.objcpp"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.arguments.end.bracket.round.objcpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#function-call-innards-c"
                  }
                ]
              },
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.parens.begin.bracket.round.objcpp"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.parens.end.bracket.round.objcpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#function-call-innards-c"
                  }
                ]
              },
              {
                "include": "#block_innards-c"
              }
            ]
          },
          "function-innards-c": {
            "patterns": [
              {
                "include": "#comments-c"
              },
              {
                "include": "#storage_types_c"
              },
              {
                "include": "#operators"
              },
              {
                "include": "#vararg_ellipses-c"
              },
              {
                "begin": "(?!(?:while|for|do|if|else|switch|catch|return|typeid|alignof|alignas|sizeof|and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|alignof|alignas)\\s*\\()((?:[A-Za-z_][A-Za-z0-9_]*+|::)++|(?:(?<=operator)(?:[-*&<>=+!]+|\\(\\)|\\[\\])))\\s*(\\()",
                "beginCaptures": {
                  "1": {
                    "name": "entity.name.function.objcpp"
                  },
                  "2": {
                    "name": "punctuation.section.parameters.begin.bracket.round.objcpp"
                  }
                },
                "end": "\\)|:",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.parameters.end.bracket.round.objcpp"
                  }
                },
                "name": "meta.function.definition.parameters.objcpp",
                "patterns": [
                  {
                    "include": "#probably_a_parameter"
                  },
                  {
                    "include": "#function-innards-c"
                  }
                ]
              },
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.parens.begin.bracket.round.objcpp"
                  }
                },
                "end": "\\)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.parens.end.bracket.round.objcpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#function-innards-c"
                  }
                ]
              },
              {
                "include": "$base"
              }
            ]
          },
          "line_continuation_character": {
            "patterns": [
              {
                "captures": {
                  "1": {
                    "name": "constant.character.escape.line-continuation.objcpp"
                  }
                },
                "match": "(\\\\)\\n"
              }
            ]
          },
          "literal_numeric_seperator": {
            "match": "(?<!')'(?!')",
            "name": "punctuation.separator.constant.numeric.objcpp"
          },
          "memory_operators": {
            "captures": {
              "1": {
                "name": "keyword.operator.memory.delete.array.objcpp"
              },
              "2": {
                "name": "keyword.operator.memory.delete.array.bracket.objcpp"
              },
              "3": {
                "name": "keyword.operator.memory.delete.objcpp"
              },
              "4": {
                "name": "keyword.operator.memory.new.objcpp"
              }
            },
            "match": "(?<!\\w)(?:(?:(delete)\\s*(\\[\\])|(delete))|(new))(?!\\w)",
            "name": "keyword.operator.memory.objcpp"
          },
          "number_literal": {
            "captures": {
              "2": {
                "name": "keyword.other.unit.hexadecimal.objcpp"
              },
              "3": {
                "name": "constant.numeric.hexadecimal.objcpp",
                "patterns": [
                  {
                    "include": "#literal_numeric_seperator"
                  }
                ]
              },
              "4": {
                "name": "punctuation.separator.constant.numeric.objcpp"
              },
              "5": {
                "name": "constant.numeric.hexadecimal.objcpp"
              },
              "6": {
                "name": "constant.numeric.hexadecimal.objcpp",
                "patterns": [
                  {
                    "include": "#literal_numeric_seperator"
                  }
                ]
              },
              "7": {
                "name": "punctuation.separator.constant.numeric.objcpp"
              },
              "8": {
                "name": "keyword.other.unit.exponent.hexadecimal.objcpp"
              },
              "9": {
                "name": "keyword.operator.plus.exponent.hexadecimal.objcpp"
              },
              "10": {
                "name": "keyword.operator.minus.exponent.hexadecimal.objcpp"
              },
              "11": {
                "name": "constant.numeric.exponent.hexadecimal.objcpp",
                "patterns": [
                  {
                    "include": "#literal_numeric_seperator"
                  }
                ]
              },
              "12": {
                "name": "constant.numeric.decimal.objcpp",
                "patterns": [
                  {
                    "include": "#literal_numeric_seperator"
                  }
                ]
              },
              "13": {
                "name": "punctuation.separator.constant.numeric.objcpp"
              },
              "14": {
                "name": "constant.numeric.decimal.point.objcpp"
              },
              "15": {
                "name": "constant.numeric.decimal.objcpp",
                "patterns": [
                  {
                    "include": "#literal_numeric_seperator"
                  }
                ]
              },
              "16": {
                "name": "punctuation.separator.constant.numeric.objcpp"
              },
              "17": {
                "name": "keyword.other.unit.exponent.decimal.objcpp"
              },
              "18": {
                "name": "keyword.operator.plus.exponent.decimal.objcpp"
              },
              "19": {
                "name": "keyword.operator.minus.exponent.decimal.objcpp"
              },
              "20": {
                "name": "constant.numeric.exponent.decimal.objcpp",
                "patterns": [
                  {
                    "include": "#literal_numeric_seperator"
                  }
                ]
              },
              "21": {
                "name": "keyword.other.unit.suffix.floating-point.objcpp"
              },
              "22": {
                "name": "keyword.other.unit.binary.objcpp"
              },
              "23": {
                "name": "constant.numeric.binary.objcpp",
                "patterns": [
                  {
                    "include": "#literal_numeric_seperator"
                  }
                ]
              },
              "24": {
                "name": "punctuation.separator.constant.numeric.objcpp"
              },
              "25": {
                "name": "keyword.other.unit.octal.objcpp"
              },
              "26": {
                "name": "constant.numeric.octal.objcpp",
                "patterns": [
                  {
                    "include": "#literal_numeric_seperator"
                  }
                ]
              },
              "27": {
                "name": "punctuation.separator.constant.numeric.objcpp"
              },
              "28": {
                "name": "keyword.other.unit.hexadecimal.objcpp"
              },
              "29": {
                "name": "constant.numeric.hexadecimal.objcpp",
                "patterns": [
                  {
                    "include": "#literal_numeric_seperator"
                  }
                ]
              },
              "30": {
                "name": "punctuation.separator.constant.numeric.objcpp"
              },
              "31": {
                "name": "keyword.other.unit.exponent.hexadecimal.objcpp"
              },
              "32": {
                "name": "keyword.operator.plus.exponent.hexadecimal.objcpp"
              },
              "33": {
                "name": "keyword.operator.minus.exponent.hexadecimal.objcpp"
              },
              "34": {
                "name": "constant.numeric.exponent.hexadecimal.objcpp",
                "patterns": [
                  {
                    "include": "#literal_numeric_seperator"
                  }
                ]
              },
              "35": {
                "name": "constant.numeric.decimal.objcpp",
                "patterns": [
                  {
                    "include": "#literal_numeric_seperator"
                  }
                ]
              },
              "36": {
                "name": "punctuation.separator.constant.numeric.objcpp"
              },
              "37": {
                "name": "keyword.other.unit.exponent.decimal.objcpp"
              },
              "38": {
                "name": "keyword.operator.plus.exponent.decimal.objcpp"
              },
              "39": {
                "name": "keyword.operator.minus.exponent.decimal.objcpp"
              },
              "40": {
                "name": "constant.numeric.exponent.decimal.objcpp",
                "patterns": [
                  {
                    "include": "#literal_numeric_seperator"
                  }
                ]
              },
              "41": {
                "name": "keyword.other.unit.suffix.integer.objcpp"
              },
              "42": {
                "name": "keyword.other.unit.user-defined.objcpp"
              }
            },
            "match": "((?<!\\w)(?:(?:(?:(0[xX])(?:([0-9a-fA-F](?:(?:(?:[0-9a-fA-F]|((?<!')'(?!')))))*))?((?:(?:(?<=[0-9a-fA-F])\\.|\\.(?=[0-9a-fA-F]))))(?:([0-9a-fA-F](?:(?:(?:[0-9a-fA-F]|((?<!')'(?!')))))*))?(?:([pP])(\\+)?(\\-)?((?:[0-9](?:(?:(?:[0-9]|(?:(?<!')'(?!')))))*)))?|(?:([0-9](?:(?:(?:[0-9]|((?<!')'(?!')))))*))?((?:(?:(?<=[0-9])\\.|\\.(?=[0-9]))))(?:([0-9](?:(?:(?:[0-9]|((?<!')'(?!')))))*))?(?:([eE])(\\+)?(\\-)?((?:[0-9](?:(?:(?:[0-9]|(?:(?<!')'(?!')))))*)))?)(?:([lLfF](?!\\w)))?|(?:(?:(?:(?:(?:(0[bB])((?:(?:(?:[01]|((?<!')'(?!')))))+)|(0)((?:(?:(?:[0-7]|((?<!')'(?!')))))+)))|(0[xX])([0-9a-fA-F](?:(?:(?:[0-9a-fA-F]|((?<!')'(?!')))))*)(?:([pP])(\\+)?(\\-)?((?:[0-9](?:(?:(?:[0-9]|(?:(?<!')'(?!')))))*)))?))|([0-9](?:(?:(?:[0-9]|((?<!')'(?!')))))*)(?:([eE])(\\+)?(\\-)?((?:[0-9](?:(?:(?:[0-9]|(?:(?<!')'(?!')))))*)))?)(?:((?:(?:(?:(?:(?:(?:(?:(?:(?:(?:(?:(?:LL[uU]|ll[uU]))|[uU]LL))|[uU]ll))|ll))|LL))|[uUlL]))(?!\\w)))?))(\\w*))"
          },
          "operator_overload": {
            "begin": "((?:[a-zA-Z_]\\w*\\s*(?:(?:<(?:[\\s<>,\\w])*>\\s*))?::)*)\\s*(operator)((?:(?:\\s*(?:\\+\\+|\\-\\-|\\(\\)|\\[\\]|\\->|\\+\\+|\\-\\-|\\+|\\-|!|~|\\*|&|\\->\\*|\\*|\\/|%|\\+|\\-|<<|>>|<=>|<|<=|>|>=|==|!=|&|\\^|\\||&&|\\|\\||=|\\+=|\\-=|\\*=|\\/=|%=|<<=|>>=|&=|\\^=|\\|=|,)|\\s+(?:(?:(?:new|new\\[\\]|delete|delete\\[\\])|(?:[a-zA-Z_]\\w*\\s*(?:(?:<(?:[\\s<>,\\w])*>\\s*))?::)*[a-zA-Z_]\\w*\\s*(?:&)?)))))\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.scope.objcpp"
              },
              "2": {
                "name": "keyword.other.operator.overload.objcpp"
              },
              "3": {
                "name": "entity.name.operator.overloadee.objcpp"
              },
              "4": {
                "name": "punctuation.section.parameters.begin.bracket.round.objcpp"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.parameters.end.bracket.round.objcpp"
              }
            },
            "name": "meta.function.definition.parameters.operator-overload.objcpp",
            "patterns": [
              {
                "include": "#probably_a_parameter"
              },
              {
                "include": "#function-innards-c"
              }
            ]
          },
          "operators": {
            "patterns": [
              {
                "match": "(?-mix:(?<!\\w)((?:not|compl|sizeof|new|delete|not_eq|bitand|xor|bitor|and|or|and_eq|xor_eq|or_eq|alignof|alignas|typeid|noexcept))(?!\\w))",
                "name": "keyword.operator.$1.objcpp"
              },
              {
                "match": "--",
                "name": "keyword.operator.decrement.objcpp"
              },
              {
                "match": "\\+\\+",
                "name": "keyword.operator.increment.objcpp"
              },
              {
                "match": "%=|\\+=|-=|\\*=|(?<!\\()/=",
                "name": "keyword.operator.assignment.compound.objcpp"
              },
              {
                "match": "&=|\\^=|<<=|>>=|\\|=",
                "name": "keyword.operator.assignment.compound.bitwise.objcpp"
              },
              {
                "match": "<<|>>",
                "name": "keyword.operator.bitwise.shift.objcpp"
              },
              {
                "match": "!=|<=|>=|==|<|>",
                "name": "keyword.operator.comparison.objcpp"
              },
              {
                "match": "&&|!|\\|\\|",
                "name": "keyword.operator.logical.objcpp"
              },
              {
                "match": "&|\\||\\^|~",
                "name": "keyword.operator.objcpp"
              },
              {
                "match": "=",
                "name": "keyword.operator.assignment.objcpp"
              },
              {
                "match": "%|\\*|/|-|\\+",
                "name": "keyword.operator.objcpp"
              },
              {
                "applyEndPatternLast": true,
                "begin": "\\?",
                "beginCaptures": {
                  "0": {
                    "name": "keyword.operator.ternary.objcpp"
                  }
                },
                "end": ":",
                "endCaptures": {
                  "0": {
                    "name": "keyword.operator.ternary.objcpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#access-method"
                  },
                  {
                    "include": "#access-member"
                  },
                  {
                    "include": "#c_function_call"
                  },
                  {
                    "include": "$base"
                  }
                ]
              }
            ]
          },
          "parens-block-c": {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.parens.begin.bracket.round.objcpp"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.parens.end.bracket.round.objcpp"
              }
            },
            "name": "meta.block.parens.objcpp",
            "patterns": [
              {
                "include": "#block_innards-c"
              },
              {
                "match": "(?<!:):(?!:)",
                "name": "punctuation.range-based.objcpp"
              }
            ]
          },
          "parens-c": {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.parens.begin.bracket.round.objcpp"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.parens.end.bracket.round.objcpp"
              }
            },
            "name": "punctuation.section.parens-c\b.objcpp",
            "patterns": [
              {
                "include": "$base"
              }
            ]
          },
          "pragma-mark": {
            "captures": {
              "1": {
                "name": "meta.preprocessor.pragma.objcpp"
              },
              "2": {
                "name": "keyword.control.directive.pragma.pragma-mark.objcpp"
              },
              "3": {
                "name": "punctuation.definition.directive.objcpp"
              },
              "4": {
                "name": "entity.name.tag.pragma-mark.objcpp"
              }
            },
            "match": "^\\s*(((#)\\s*pragma\\s+mark)\\s+(.*))",
            "name": "meta.section.objcpp"
          },
          "preprocessor-rule-conditional": {
            "patterns": [
              {
                "begin": "^\\s*((#)\\s*if(?:n?def)?\\b)",
                "beginCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  }
                },
                "end": "^\\s*((#)\\s*endif\\b)",
                "endCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  }
                },
                "patterns": [
                  {
                    "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                    "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                    "name": "meta.preprocessor.objcpp",
                    "patterns": [
                      {
                        "include": "#preprocessor-rule-conditional-line"
                      }
                    ]
                  },
                  {
                    "include": "#preprocessor-rule-enabled-elif"
                  },
                  {
                    "include": "#preprocessor-rule-enabled-else"
                  },
                  {
                    "include": "#preprocessor-rule-disabled-elif"
                  },
                  {
                    "begin": "^\\s*((#)\\s*elif\\b)",
                    "beginCaptures": {
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                    "name": "meta.preprocessor.objcpp",
                    "patterns": [
                      {
                        "include": "#preprocessor-rule-conditional-line"
                      }
                    ]
                  },
                  {
                    "include": "$base"
                  }
                ]
              },
              {
                "captures": {
                  "0": {
                    "name": "invalid.illegal.stray-$1.objcpp"
                  }
                },
                "match": "^\\s*#\\s*(else|elif|endif)\\b"
              }
            ]
          },
          "preprocessor-rule-conditional-block": {
            "patterns": [
              {
                "begin": "^\\s*((#)\\s*if(?:n?def)?\\b)",
                "beginCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  }
                },
                "end": "^\\s*((#)\\s*endif\\b)",
                "endCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  }
                },
                "patterns": [
                  {
                    "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                    "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                    "name": "meta.preprocessor.objcpp",
                    "patterns": [
                      {
                        "include": "#preprocessor-rule-conditional-line"
                      }
                    ]
                  },
                  {
                    "include": "#preprocessor-rule-enabled-elif-block"
                  },
                  {
                    "include": "#preprocessor-rule-enabled-else-block"
                  },
                  {
                    "include": "#preprocessor-rule-disabled-elif"
                  },
                  {
                    "begin": "^\\s*((#)\\s*elif\\b)",
                    "beginCaptures": {
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                    "name": "meta.preprocessor.objcpp",
                    "patterns": [
                      {
                        "include": "#preprocessor-rule-conditional-line"
                      }
                    ]
                  },
                  {
                    "include": "#block_innards-c"
                  }
                ]
              },
              {
                "captures": {
                  "0": {
                    "name": "invalid.illegal.stray-$1.objcpp"
                  }
                },
                "match": "^\\s*#\\s*(else|elif|endif)\\b"
              }
            ]
          },
          "preprocessor-rule-conditional-line": {
            "patterns": [
              {
                "match": "(?:\\bdefined\\b\\s*$)|(?:\\bdefined\\b(?=\\s*\\(*\\s*(?:(?!defined\\b)[a-zA-Z_$][\\w$]*\\b)\\s*\\)*\\s*(?:\\n|//|/\\*|\\?|\\:|&&|\\|\\||\\\\\\s*\\n)))",
                "name": "keyword.control.directive.conditional.objcpp"
              },
              {
                "match": "\\bdefined\\b",
                "name": "invalid.illegal.macro-name.objcpp"
              },
              {
                "include": "#comments-c"
              },
              {
                "include": "#strings-c"
              },
              {
                "include": "#number_literal"
              },
              {
                "begin": "\\?",
                "beginCaptures": {
                  "0": {
                    "name": "keyword.operator.ternary.objcpp"
                  }
                },
                "end": ":",
                "endCaptures": {
                  "0": {
                    "name": "keyword.operator.ternary.objcpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#preprocessor-rule-conditional-line"
                  }
                ]
              },
              {
                "include": "#operators"
              },
              {
                "include": "#constants"
              },
              {
                "match": "[a-zA-Z_$][\\w$]*",
                "name": "entity.name.function.preprocessor.objcpp"
              },
              {
                "include": "#line_continuation_character"
              },
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.parens.begin.bracket.round.objcpp"
                  }
                },
                "end": "\\)|(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.parens.end.bracket.round.objcpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#preprocessor-rule-conditional-line"
                  }
                ]
              }
            ]
          },
          "preprocessor-rule-define-line-blocks": {
            "patterns": [
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.block.begin.bracket.curly.objcpp"
                  }
                },
                "end": "}|(?=\\s*#\\s*(?:elif|else|endif)\\b)|(?<!\\\\)(?=\\s*\\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.block.end.bracket.curly.objcpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#preprocessor-rule-define-line-blocks"
                  },
                  {
                    "include": "#preprocessor-rule-define-line-contents"
                  }
                ]
              },
              {
                "include": "#preprocessor-rule-define-line-contents"
              }
            ]
          },
          "preprocessor-rule-define-line-contents": {
            "patterns": [
              {
                "include": "#vararg_ellipses-c"
              },
              {
                "match": "(?-mix:##?[a-zA-Z_]\\w*(?!\\w))",
                "name": "variable.other.macro.argument.objcpp"
              },
              {
                "begin": "{",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.block.begin.bracket.curly.objcpp"
                  }
                },
                "end": "}|(?=\\s*#\\s*(?:elif|else|endif)\\b)|(?<!\\\\)(?=\\s*\\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.block.end.bracket.curly.objcpp"
                  }
                },
                "name": "meta.block.objcpp",
                "patterns": [
                  {
                    "include": "#preprocessor-rule-define-line-blocks"
                  }
                ]
              },
              {
                "match": "\\(",
                "name": "punctuation.section.parens.begin.bracket.round.objcpp"
              },
              {
                "match": "\\)",
                "name": "punctuation.section.parens.end.bracket.round.objcpp"
              },
              {
                "begin": "(?!(?:while|for|do|if|else|switch|catch|return|typeid|alignof|alignas|sizeof|and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|alignof|alignas|asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|long|short|signed|struct|typedef|union|unsigned|void)\\s*\\()(?=(?:[A-Za-z_][A-Za-z0-9_]*+|::)++\\s*\\(|(?:(?<=operator)(?:[-*&<>=+!]+|\\(\\)|\\[\\]))\\s*\\()",
                "end": "(?<=\\))(?!\\w)|(?<!\\\\)(?=\\s*\\n)",
                "name": "meta.function.objcpp",
                "patterns": [
                  {
                    "include": "#preprocessor-rule-define-line-functions"
                  }
                ]
              },
              {
                "begin": "\"",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.objcpp"
                  }
                },
                "end": "\"|(?<!\\\\)(?=\\s*\\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.objcpp"
                  }
                },
                "name": "string.quoted.double.objcpp",
                "patterns": [
                  {
                    "include": "#string_escaped_char-c"
                  },
                  {
                    "include": "#string_placeholder-c"
                  },
                  {
                    "include": "#line_continuation_character"
                  }
                ]
              },
              {
                "begin": "'",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.objcpp"
                  }
                },
                "end": "'|(?<!\\\\)(?=\\s*\\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.objcpp"
                  }
                },
                "name": "string.quoted.single.objcpp",
                "patterns": [
                  {
                    "include": "#string_escaped_char-c"
                  },
                  {
                    "include": "#line_continuation_character"
                  }
                ]
              },
              {
                "include": "#access-method"
              },
              {
                "include": "#access-member"
              },
              {
                "include": "$base"
              }
            ]
          },
          "preprocessor-rule-define-line-functions": {
            "patterns": [
              {
                "include": "#comments-c"
              },
              {
                "include": "#storage_types_c"
              },
              {
                "include": "#vararg_ellipses-c"
              },
              {
                "include": "#access-method"
              },
              {
                "include": "#access-member"
              },
              {
                "include": "#operators"
              },
              {
                "begin": "(?!(?:while|for|do|if|else|switch|catch|return|typeid|alignof|alignas|sizeof|and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|alignof|alignas)\\s*\\()((?:[A-Za-z_][A-Za-z0-9_]*+|::)++|(?:(?<=operator)(?:[-*&<>=+!]+|\\(\\)|\\[\\])))\\s*(\\()",
                "beginCaptures": {
                  "1": {
                    "name": "entity.name.function.objcpp"
                  },
                  "2": {
                    "name": "punctuation.section.arguments.begin.bracket.round.objcpp"
                  }
                },
                "end": "(\\))|(?<!\\\\)(?=\\s*\\n)",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.section.arguments.end.bracket.round.objcpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#preprocessor-rule-define-line-functions"
                  }
                ]
              },
              {
                "begin": "\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.parens.begin.bracket.round.objcpp"
                  }
                },
                "end": "(\\))|(?<!\\\\)(?=\\s*\\n)",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.section.parens.end.bracket.round.objcpp"
                  }
                },
                "patterns": [
                  {
                    "include": "#preprocessor-rule-define-line-functions"
                  }
                ]
              },
              {
                "include": "#preprocessor-rule-define-line-contents"
              }
            ]
          },
          "preprocessor-rule-disabled": {
            "patterns": [
              {
                "begin": "^\\s*((#)\\s*if\\b)(?=\\s*\\(*\\b0+\\b\\)*\\s*(?:$|//|/\\*))",
                "beginCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  }
                },
                "end": "^\\s*((#)\\s*endif\\b)",
                "endCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  }
                },
                "patterns": [
                  {
                    "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                    "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?=\\n)",
                    "name": "meta.preprocessor.objcpp",
                    "patterns": [
                      {
                        "include": "#preprocessor-rule-conditional-line"
                      }
                    ]
                  },
                  {
                    "include": "#comments-c"
                  },
                  {
                    "include": "#preprocessor-rule-enabled-elif"
                  },
                  {
                    "include": "#preprocessor-rule-enabled-else"
                  },
                  {
                    "include": "#preprocessor-rule-disabled-elif"
                  },
                  {
                    "begin": "^\\s*((#)\\s*elif\\b)",
                    "beginCaptures": {
                      "0": {
                        "name": "meta.preprocessor.objcpp"
                      },
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "end": "(?=^\\s*((#)\\s*(?:elif|else|endif)\\b))",
                    "patterns": [
                      {
                        "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                        "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                        "name": "meta.preprocessor.objcpp",
                        "patterns": [
                          {
                            "include": "#preprocessor-rule-conditional-line"
                          }
                        ]
                      },
                      {
                        "include": "$base"
                      }
                    ]
                  },
                  {
                    "begin": "\\n",
                    "contentName": "comment.block.preprocessor.if-branch.objcpp",
                    "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                    "patterns": [
                      {
                        "include": "#disabled"
                      },
                      {
                        "include": "#pragma-mark"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "preprocessor-rule-disabled-block": {
            "patterns": [
              {
                "begin": "^\\s*((#)\\s*if\\b)(?=\\s*\\(*\\b0+\\b\\)*\\s*(?:$|//|/\\*))",
                "beginCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  }
                },
                "end": "^\\s*((#)\\s*endif\\b)",
                "endCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  }
                },
                "patterns": [
                  {
                    "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                    "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?=\\n)",
                    "name": "meta.preprocessor.objcpp",
                    "patterns": [
                      {
                        "include": "#preprocessor-rule-conditional-line"
                      }
                    ]
                  },
                  {
                    "include": "#comments-c"
                  },
                  {
                    "include": "#preprocessor-rule-enabled-elif-block"
                  },
                  {
                    "include": "#preprocessor-rule-enabled-else-block"
                  },
                  {
                    "include": "#preprocessor-rule-disabled-elif"
                  },
                  {
                    "begin": "^\\s*((#)\\s*elif\\b)",
                    "beginCaptures": {
                      "0": {
                        "name": "meta.preprocessor.objcpp"
                      },
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "end": "(?=^\\s*((#)\\s*(?:elif|else|endif)\\b))",
                    "patterns": [
                      {
                        "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                        "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                        "name": "meta.preprocessor.objcpp",
                        "patterns": [
                          {
                            "include": "#preprocessor-rule-conditional-line"
                          }
                        ]
                      },
                      {
                        "include": "#block_innards-c"
                      }
                    ]
                  },
                  {
                    "begin": "\\n",
                    "contentName": "comment.block.preprocessor.if-branch.in-block.objcpp",
                    "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                    "patterns": [
                      {
                        "include": "#disabled"
                      },
                      {
                        "include": "#pragma-mark"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "preprocessor-rule-disabled-elif": {
            "begin": "^\\s*((#)\\s*elif\\b)(?=\\s*\\(*\\b0+\\b\\)*\\s*(?:$|//|/\\*))",
            "beginCaptures": {
              "0": {
                "name": "meta.preprocessor.objcpp"
              },
              "1": {
                "name": "keyword.control.directive.conditional.objcpp"
              },
              "2": {
                "name": "punctuation.definition.directive.objcpp"
              }
            },
            "end": "(?=^\\s*((#)\\s*(?:elif|else|endif)\\b))",
            "patterns": [
              {
                "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                "name": "meta.preprocessor.objcpp",
                "patterns": [
                  {
                    "include": "#preprocessor-rule-conditional-line"
                  }
                ]
              },
              {
                "include": "#comments-c"
              },
              {
                "begin": "\\n",
                "contentName": "comment.block.preprocessor.elif-branch.objcpp",
                "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                "patterns": [
                  {
                    "include": "#disabled"
                  },
                  {
                    "include": "#pragma-mark"
                  }
                ]
              }
            ]
          },
          "preprocessor-rule-enabled": {
            "patterns": [
              {
                "begin": "^\\s*((#)\\s*if\\b)(?=\\s*\\(*\\b0*1\\b\\)*\\s*(?:$|//|/\\*))",
                "beginCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  },
                  "3": {
                    "name": "constant.numeric.preprocessor.objcpp"
                  }
                },
                "end": "^\\s*((#)\\s*endif\\b)",
                "endCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  }
                },
                "patterns": [
                  {
                    "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                    "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?=\\n)",
                    "name": "meta.preprocessor.objcpp",
                    "patterns": [
                      {
                        "include": "#preprocessor-rule-conditional-line"
                      }
                    ]
                  },
                  {
                    "include": "#comments-c"
                  },
                  {
                    "begin": "^\\s*((#)\\s*else\\b)",
                    "beginCaptures": {
                      "0": {
                        "name": "meta.preprocessor.objcpp"
                      },
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "contentName": "comment.block.preprocessor.else-branch.objcpp",
                    "end": "(?=^\\s*((#)\\s*endif\\b))",
                    "patterns": [
                      {
                        "include": "#disabled"
                      },
                      {
                        "include": "#pragma-mark"
                      }
                    ]
                  },
                  {
                    "begin": "^\\s*((#)\\s*elif\\b)",
                    "beginCaptures": {
                      "0": {
                        "name": "meta.preprocessor.objcpp"
                      },
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "contentName": "comment.block.preprocessor.if-branch.objcpp",
                    "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                    "patterns": [
                      {
                        "include": "#disabled"
                      },
                      {
                        "include": "#pragma-mark"
                      }
                    ]
                  },
                  {
                    "begin": "\\n",
                    "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                    "patterns": [
                      {
                        "include": "$base"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "preprocessor-rule-enabled-block": {
            "patterns": [
              {
                "begin": "^\\s*((#)\\s*if\\b)(?=\\s*\\(*\\b0*1\\b\\)*\\s*(?:$|//|/\\*))",
                "beginCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  }
                },
                "end": "^\\s*((#)\\s*endif\\b)",
                "endCaptures": {
                  "0": {
                    "name": "meta.preprocessor.objcpp"
                  },
                  "1": {
                    "name": "keyword.control.directive.conditional.objcpp"
                  },
                  "2": {
                    "name": "punctuation.definition.directive.objcpp"
                  }
                },
                "patterns": [
                  {
                    "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                    "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?=\\n)",
                    "name": "meta.preprocessor.objcpp",
                    "patterns": [
                      {
                        "include": "#preprocessor-rule-conditional-line"
                      }
                    ]
                  },
                  {
                    "include": "#comments-c"
                  },
                  {
                    "begin": "^\\s*((#)\\s*else\\b)",
                    "beginCaptures": {
                      "0": {
                        "name": "meta.preprocessor.objcpp"
                      },
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "contentName": "comment.block.preprocessor.else-branch.in-block.objcpp",
                    "end": "(?=^\\s*((#)\\s*endif\\b))",
                    "patterns": [
                      {
                        "include": "#disabled"
                      },
                      {
                        "include": "#pragma-mark"
                      }
                    ]
                  },
                  {
                    "begin": "^\\s*((#)\\s*elif\\b)",
                    "beginCaptures": {
                      "0": {
                        "name": "meta.preprocessor.objcpp"
                      },
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "contentName": "comment.block.preprocessor.if-branch.in-block.objcpp",
                    "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                    "patterns": [
                      {
                        "include": "#disabled"
                      },
                      {
                        "include": "#pragma-mark"
                      }
                    ]
                  },
                  {
                    "begin": "\\n",
                    "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                    "patterns": [
                      {
                        "include": "#block_innards-c"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "preprocessor-rule-enabled-elif": {
            "begin": "^\\s*((#)\\s*elif\\b)(?=\\s*\\(*\\b0*1\\b\\)*\\s*(?:$|//|/\\*))",
            "beginCaptures": {
              "0": {
                "name": "meta.preprocessor.objcpp"
              },
              "1": {
                "name": "keyword.control.directive.conditional.objcpp"
              },
              "2": {
                "name": "punctuation.definition.directive.objcpp"
              }
            },
            "end": "(?=^\\s*((#)\\s*endif\\b))",
            "patterns": [
              {
                "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                "name": "meta.preprocessor.objcpp",
                "patterns": [
                  {
                    "include": "#preprocessor-rule-conditional-line"
                  }
                ]
              },
              {
                "include": "#comments-c"
              },
              {
                "begin": "\\n",
                "end": "(?=^\\s*((#)\\s*(?:endif)\\b))",
                "patterns": [
                  {
                    "begin": "^\\s*((#)\\s*(else)\\b)",
                    "beginCaptures": {
                      "0": {
                        "name": "meta.preprocessor.objcpp"
                      },
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "contentName": "comment.block.preprocessor.elif-branch.objcpp",
                    "end": "(?=^\\s*((#)\\s*endif\\b))",
                    "patterns": [
                      {
                        "include": "#disabled"
                      },
                      {
                        "include": "#pragma-mark"
                      }
                    ]
                  },
                  {
                    "begin": "^\\s*((#)\\s*(elif)\\b)",
                    "beginCaptures": {
                      "0": {
                        "name": "meta.preprocessor.objcpp"
                      },
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "contentName": "comment.block.preprocessor.elif-branch.objcpp",
                    "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                    "patterns": [
                      {
                        "include": "#disabled"
                      },
                      {
                        "include": "#pragma-mark"
                      }
                    ]
                  },
                  {
                    "include": "$base"
                  }
                ]
              }
            ]
          },
          "preprocessor-rule-enabled-elif-block": {
            "begin": "^\\s*((#)\\s*elif\\b)(?=\\s*\\(*\\b0*1\\b\\)*\\s*(?:$|//|/\\*))",
            "beginCaptures": {
              "0": {
                "name": "meta.preprocessor.objcpp"
              },
              "1": {
                "name": "keyword.control.directive.conditional.objcpp"
              },
              "2": {
                "name": "punctuation.definition.directive.objcpp"
              }
            },
            "end": "(?=^\\s*((#)\\s*endif\\b))",
            "patterns": [
              {
                "begin": "\\G(?=.)(?!//|/\\*(?!.*\\\\\\s*\\n))",
                "end": "(?=//)|(?=/\\*(?!.*\\\\\\s*\\n))|(?<!\\\\)(?=\\n)",
                "name": "meta.preprocessor.objcpp",
                "patterns": [
                  {
                    "include": "#preprocessor-rule-conditional-line"
                  }
                ]
              },
              {
                "include": "#comments-c"
              },
              {
                "begin": "\\n",
                "end": "(?=^\\s*((#)\\s*(?:endif)\\b))",
                "patterns": [
                  {
                    "begin": "^\\s*((#)\\s*(else)\\b)",
                    "beginCaptures": {
                      "0": {
                        "name": "meta.preprocessor.objcpp"
                      },
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "contentName": "comment.block.preprocessor.elif-branch.in-block.objcpp",
                    "end": "(?=^\\s*((#)\\s*endif\\b))",
                    "patterns": [
                      {
                        "include": "#disabled"
                      },
                      {
                        "include": "#pragma-mark"
                      }
                    ]
                  },
                  {
                    "begin": "^\\s*((#)\\s*(elif)\\b)",
                    "beginCaptures": {
                      "0": {
                        "name": "meta.preprocessor.objcpp"
                      },
                      "1": {
                        "name": "keyword.control.directive.conditional.objcpp"
                      },
                      "2": {
                        "name": "punctuation.definition.directive.objcpp"
                      }
                    },
                    "contentName": "comment.block.preprocessor.elif-branch.objcpp",
                    "end": "(?=^\\s*((#)\\s*(?:else|elif|endif)\\b))",
                    "patterns": [
                      {
                        "include": "#disabled"
                      },
                      {
                        "include": "#pragma-mark"
                      }
                    ]
                  },
                  {
                    "include": "#block_innards-c"
                  }
                ]
              }
            ]
          },
          "preprocessor-rule-enabled-else": {
            "begin": "^\\s*((#)\\s*else\\b)",
            "beginCaptures": {
              "0": {
                "name": "meta.preprocessor.objcpp"
              },
              "1": {
                "name": "keyword.control.directive.conditional.objcpp"
              },
              "2": {
                "name": "punctuation.definition.directive.objcpp"
              }
            },
            "end": "(?=^\\s*((#)\\s*endif\\b))",
            "patterns": [
              {
                "include": "$base"
              }
            ]
          },
          "preprocessor-rule-enabled-else-block": {
            "begin": "^\\s*((#)\\s*else\\b)",
            "beginCaptures": {
              "0": {
                "name": "meta.preprocessor.objcpp"
              },
              "1": {
                "name": "keyword.control.directive.conditional.objcpp"
              },
              "2": {
                "name": "punctuation.definition.directive.objcpp"
              }
            },
            "end": "(?=^\\s*((#)\\s*endif\\b))",
            "patterns": [
              {
                "include": "#block_innards-c"
              }
            ]
          },
          "probably_a_parameter": {
            "captures": {
              "1": {
                "name": "variable.parameter.probably.defaulted.objcpp"
              },
              "2": {
                "name": "variable.parameter.probably.objcpp"
              }
            },
            "match": "(?:(?:([a-zA-Z_]\\w*)\\s*(?==)|(?<=\\w\\s|\\*\\/|[&*>\\]\\)])\\s*([a-zA-Z_]\\w*)\\s*(?=(?:\\[\\]\\s*)?(?:(?:,|\\))))))"
          },
          "scope_resolution": {
            "captures": {
              "1": {
                "patterns": [
                  {
                    "include": "#scope_resolution"
                  }
                ]
              },
              "2": {
                "name": "entity.name.namespace.scope-resolution.objcpp"
              },
              "3": {
                "patterns": [
                  {
                    "include": "#template_call_innards"
                  }
                ]
              },
              "4": {
                "name": "punctuation.separator.namespace.access.objcpp"
              }
            },
            "match": "((?:[a-zA-Z_]\\w*\\s*(?:(?:<(?:[\\s<>,\\w])*>\\s*))?::)*\\s*)([a-zA-Z_]\\w*)\\s*((?:<(?:[\\s<>,\\w])*>\\s*))?(::)",
            "name": "meta.scope-resolution.objcpp"
          },
          "special_block": {
            "patterns": [
              {
                "begin": "\\b(using)\\s+(namespace)\\s+(?:((?:[a-zA-Z_]\\w*\\s*(?:(?:<(?:[\\s<>,\\w])*>\\s*))?::)*)\\s*)?((?<!\\w)[a-zA-Z_]\\w*(?!\\w))(?=;|\\n)",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.other.using.directive.objcpp"
                  },
                  "2": {
                    "name": "keyword.other.namespace.directive.objcpp storage.type.namespace.directive.objcpp"
                  },
                  "3": {
                    "patterns": [
                      {
                        "include": "#scope_resolution"
                      }
                    ]
                  },
                  "4": {
                    "name": "entity.name.namespace.objcpp"
                  }
                },
                "comment": "https://en.cppreference.com/w/cpp/language/namespace",
                "end": ";",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.terminator.statement.objcpp"
                  }
                },
                "name": "meta.using-namespace-declaration.objcpp"
              },
              {
                "begin": "(?<!\\w)(namespace)\\s+(?:(?:((?:[a-zA-Z_]\\w*\\s*(?:(?:<(?:[\\s<>,\\w])*>\\s*))?::)*[a-zA-Z_]\\w*)|(?={)))",
                "beginCaptures": {
                  "1": {
                    "name": "keyword.other.namespace.definition.objcpp storage.type.namespace.definition.objcpp"
                  },
                  "2": {
                    "patterns": [
                      {
                        "match": "(?-mix:(?<!\\w)[a-zA-Z_]\\w*(?!\\w))",
                        "name": "entity.name.type.objcpp"
                      },
                      {
                        "match": "::",
                        "name": "punctuation.separator.namespace.access.objcpp"
                      }
                    ]
                  }
                },
                "end": "(?<=\\})|(?=(;|,|\\(|\\)|>|\\[|\\]|=))",
                "name": "meta.namespace-block.objcpp",
                "patterns": [
                  {
                    "begin": "\\{",
                    "beginCaptures": {
                      "0": {
                        "name": "punctuation.definition.scope.objcpp"
                      }
                    },
                    "end": "\\}",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.definition.scope.objcpp"
                      }
                    },
                    "patterns": [
                      {
                        "include": "#special_block"
                      },
                      {
                        "include": "#constructor"
                      },
                      {
                        "include": "$base"
                      }
                    ]
                  },
                  {
                    "include": "$base"
                  }
                ]
              },
              {
                "begin": "\\b(?:(class)|(struct))\\b\\s*([_A-Za-z][_A-Za-z0-9]*\\b)?+(\\s*:\\s*(public|protected|private)\\s*([_A-Za-z][_A-Za-z0-9]*\\b)((\\s*,\\s*(public|protected|private)\\s*[_A-Za-z][_A-Za-z0-9]*\\b)*))?",
                "beginCaptures": {
                  "1": {
                    "name": "storage.type.class.objcpp"
                  },
                  "2": {
                    "name": "storage.type.struct.objcpp"
                  },
                  "3": {
                    "name": "entity.name.type.objcpp"
                  },
                  "5": {
                    "name": "storage.type.modifier.access.objcpp"
                  },
                  "6": {
                    "name": "entity.name.type.inherited.objcpp"
                  },
                  "7": {
                    "patterns": [
                      {
                        "match": "(public|protected|private)",
                        "name": "storage.type.modifier.access.objcpp"
                      },
                      {
                        "match": "[_A-Za-z][_A-Za-z0-9]*",
                        "name": "entity.name.type.inherited.objcpp"
                      }
                    ]
                  }
                },
                "end": "(?<=\\})|(;)|(?=(\\(|\\)|>|\\[|\\]|=))",
                "endCaptures": {
                  "1": {
                    "name": "punctuation.terminator.statement.objcpp"
                  }
                },
                "name": "meta.class-struct-block.objcpp",
                "patterns": [
                  {
                    "include": "#angle_brackets"
                  },
                  {
                    "begin": "\\{",
                    "beginCaptures": {
                      "0": {
                        "name": "punctuation.section.block.begin.bracket.curly.objcpp"
                      }
                    },
                    "end": "(\\})(\\s*\\n)?",
                    "endCaptures": {
                      "1": {
                        "name": "punctuation.section.block.end.bracket.curly.objcpp"
                      },
                      "2": {
                        "name": "invalid.illegal.you-forgot-semicolon.objcpp"
                      }
                    },
                    "patterns": [
                      {
                        "include": "#special_block"
                      },
                      {
                        "include": "#constructor"
                      },
                      {
                        "include": "$base"
                      }
                    ]
                  },
                  {
                    "include": "$base"
                  }
                ]
              },
              {
                "begin": "\\b(extern)(?=\\s*\")",
                "beginCaptures": {
                  "1": {
                    "name": "storage.modifier.objcpp"
                  }
                },
                "end": "(?<=\\})|(?=\\w)|(?=\\s*#\\s*endif\\b)",
                "name": "meta.extern-block.objcpp",
                "patterns": [
                  {
                    "begin": "\\{",
                    "beginCaptures": {
                      "0": {
                        "name": "punctuation.section.block.begin.bracket.curly.objcpp"
                      }
                    },
                    "end": "\\}|(?=\\s*#\\s*endif\\b)",
                    "endCaptures": {
                      "0": {
                        "name": "punctuation.section.block.end.bracket.curly.objcpp"
                      }
                    },
                    "patterns": [
                      {
                        "include": "#special_block"
                      },
                      {
                        "include": "$base"
                      }
                    ]
                  },
                  {
                    "include": "$base"
                  }
                ]
              }
            ]
          },
          "storage_types_c": {
            "patterns": [
              {
                "match": "(?<!\\w)(?:auto|void|char|short|int|signed|unsigned|long|float|double|bool|wchar_t)(?!\\w)",
                "name": "storage.type.primitive.objcpp"
              },
              {
                "match": "(?<!\\w)(?:u_char|u_short|u_int|u_long|ushort|uint|u_quad_t|quad_t|qaddr_t|caddr_t|daddr_t|div_t|dev_t|fixpt_t|blkcnt_t|blksize_t|gid_t|in_addr_t|in_port_t|ino_t|key_t|mode_t|nlink_t|id_t|pid_t|off_t|segsz_t|swblk_t|uid_t|id_t|clock_t|size_t|ssize_t|time_t|useconds_t|suseconds_t|pthread_attr_t|pthread_cond_t|pthread_condattr_t|pthread_mutex_t|pthread_mutexattr_t|pthread_once_t|pthread_rwlock_t|pthread_rwlockattr_t|pthread_t|pthread_key_t|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|int_least8_t|int_least16_t|int_least32_t|int_least64_t|uint_least8_t|uint_least16_t|uint_least32_t|uint_least64_t|int_fast8_t|int_fast16_t|int_fast32_t|int_fast64_t|uint_fast8_t|uint_fast16_t|uint_fast32_t|uint_fast64_t|intptr_t|uintptr_t|intmax_t|intmax_t|uintmax_t|uintmax_t)(?!\\w)",
                "name": "storage.type.objcpp"
              },
              {
                "match": "(?<!\\w)(asm|__asm__|enum|union|struct)(?!\\w)",
                "name": "storage.type.$1.objcpp"
              }
            ]
          },
          "string_escaped_char-c": {
            "patterns": [
              {
                "match": "\\\\(\\\\|[abefnprtv'\"?]|[0-3]\\d{,2}|[4-7]\\d?|x[a-fA-F0-9]{,2}|u[a-fA-F0-9]{,4}|U[a-fA-F0-9]{,8})",
                "name": "constant.character.escape.objcpp"
              },
              {
                "match": "\\\\.",
                "name": "invalid.illegal.unknown-escape.objcpp"
              }
            ]
          },
          "string_placeholder-c": {
            "patterns": [
              {
                "match": "%(\\d+\\$)?[#0\\- +']*[,;:_]?((-?\\d+)|\\*(-?\\d+\\$)?)?(\\.((-?\\d+)|\\*(-?\\d+\\$)?)?)?(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?[diouxXDOUeEfFgGaACcSspn%]",
                "name": "constant.other.placeholder.objcpp"
              }
            ]
          },
          "strings": {
            "patterns": [
              {
                "begin": "(u|u8|U|L)?\"",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.objcpp"
                  },
                  "1": {
                    "name": "meta.encoding.objcpp"
                  }
                },
                "end": "\"",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.objcpp"
                  }
                },
                "name": "string.quoted.double.objcpp",
                "patterns": [
                  {
                    "match": "\\\\u\\h{4}|\\\\U\\h{8}",
                    "name": "constant.character.escape.objcpp"
                  },
                  {
                    "match": "\\\\['\"?\\\\abfnrtv]",
                    "name": "constant.character.escape.objcpp"
                  },
                  {
                    "match": "\\\\[0-7]{1,3}",
                    "name": "constant.character.escape.objcpp"
                  },
                  {
                    "match": "\\\\x\\h+",
                    "name": "constant.character.escape.objcpp"
                  },
                  {
                    "include": "#string_placeholder-c"
                  }
                ]
              },
              {
                "begin": "(u|u8|U|L)?R\"(?:([^ ()\\\\\\t]{0,16})|([^ ()\\\\\\t]*))\\(",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.objcpp"
                  },
                  "1": {
                    "name": "meta.encoding.objcpp"
                  },
                  "3": {
                    "name": "invalid.illegal.delimiter-too-long.objcpp"
                  }
                },
                "end": "\\)\\2(\\3)\"",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.objcpp"
                  },
                  "1": {
                    "name": "invalid.illegal.delimiter-too-long.objcpp"
                  }
                },
                "name": "string.quoted.double.raw.objcpp"
              }
            ]
          },
          "strings-c": {
            "patterns": [
              {
                "begin": "\"",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.objcpp"
                  }
                },
                "end": "\"",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.objcpp"
                  }
                },
                "name": "string.quoted.double.objcpp",
                "patterns": [
                  {
                    "include": "#string_escaped_char-c"
                  },
                  {
                    "include": "#string_placeholder-c"
                  },
                  {
                    "include": "#line_continuation_character"
                  }
                ]
              },
              {
                "begin": "(?-mix:(?<![\\da-fA-F])')",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.begin.objcpp"
                  }
                },
                "end": "'",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.definition.string.end.objcpp"
                  }
                },
                "name": "string.quoted.single.objcpp",
                "patterns": [
                  {
                    "include": "#string_escaped_char-c"
                  },
                  {
                    "include": "#line_continuation_character"
                  }
                ]
              }
            ]
          },
          "template_call_innards": {
            "captures": {
              "0": {
                "name": "meta.template.call.objcpp",
                "patterns": [
                  {
                    "include": "#storage_types_c"
                  },
                  {
                    "include": "#constants"
                  },
                  {
                    "include": "#scope_resolution"
                  },
                  {
                    "match": "(?<!\\w)[a-zA-Z_]\\w*(?!\\w)",
                    "name": "storage.type.user-defined.objcpp"
                  },
                  {
                    "include": "#operators"
                  },
                  {
                    "include": "#number_literal"
                  },
                  {
                    "include": "#strings"
                  },
                  {
                    "match": ",",
                    "name": "punctuation.separator.comma.template.argument.objcpp"
                  }
                ]
              }
            },
            "match": "<(?:[\\s<>,\\w])*>\\s*"
          },
          "template_definition": {
            "begin": "(?-mix:(?<!\\w)(template)\\s*(<))",
            "beginCaptures": {
              "1": {
                "name": "storage.type.template.objcpp"
              },
              "2": {
                "name": "punctuation.section.angle-brackets.start.template.definition.objcpp"
              }
            },
            "end": "(?-mix:(>))",
            "endCaptures": {
              "1": {
                "name": "punctuation.section.angle-brackets.end.template.definition.objcpp"
              }
            },
            "name": "meta.template.definition.objcpp",
            "patterns": [
              {
                "include": "#scope_resolution"
              },
              {
                "include": "#template_definition_argument"
              },
              {
                "include": "#template_call_innards"
              }
            ]
          },
          "template_definition_argument": {
            "captures": {
              "2": {
                "name": "storage.type.template.argument.$1.objcpp"
              },
              "3": {
                "name": "storage.type.template.argument.$2.objcpp"
              },
              "4": {
                "name": "entity.name.type.template.objcpp"
              },
              "5": {
                "name": "storage.type.template.objcpp"
              },
              "6": {
                "name": "keyword.operator.ellipsis.template.definition.objcpp"
              },
              "7": {
                "name": "entity.name.type.template.objcpp"
              },
              "8": {
                "name": "storage.type.template.objcpp"
              },
              "9": {
                "name": "entity.name.type.template.objcpp"
              },
              "10": {
                "name": "keyword.operator.assignment.objcpp"
              },
              "11": {
                "name": "constant.other.objcpp"
              },
              "12": {
                "name": "punctuation.separator.comma.template.argument.objcpp"
              }
            },
            "match": "((?:(?:(?:(?:(?:(?:\\s*([a-zA-Z_]\\w*)|((?:[a-zA-Z_]\\w*\\s+)+)([a-zA-Z_]\\w*)))|([a-zA-Z_]\\w*)\\s*(\\.\\.\\.)\\s*([a-zA-Z_]\\w*)))|((?:[a-zA-Z_]\\w*\\s+)*)([a-zA-Z_]\\w*)\\s*([=])\\s*(\\w+)))\\s*(?:(?:(,)|(?=>))))"
          },
          "vararg_ellipses-c": {
            "match": "(?<!\\.)\\.\\.\\.(?!\\.)",
            "name": "punctuation.vararg-ellipses.objcpp"
          }
        }
      },
      "disabled": {
        "begin": "^\\s*#\\s*if(n?def)?\\b.*$",
        "comment": "eat nested preprocessor if(def)s",
        "end": "^\\s*#\\s*endif\\b.*$",
        "patterns": [
          {
            "include": "#disabled"
          },
          {
            "include": "#pragma-mark"
          }
        ]
      },
      "implementation_innards": {
        "patterns": [
          {
            "include": "#preprocessor-rule-enabled-implementation"
          },
          {
            "include": "#preprocessor-rule-disabled-implementation"
          },
          {
            "include": "#preprocessor-rule-other-implementation"
          },
          {
            "include": "#property_directive"
          },
          {
            "include": "#method_super"
          },
          {
            "include": "$base"
          }
        ]
      },
      "interface_innards": {
        "patterns": [
          {
            "include": "#preprocessor-rule-enabled-interface"
          },
          {
            "include": "#preprocessor-rule-disabled-interface"
          },
          {
            "include": "#preprocessor-rule-other-interface"
          },
          {
            "include": "#properties"
          },
          {
            "include": "#protocol_list"
          },
          {
            "include": "#method"
          },
          {
            "include": "$base"
          }
        ]
      },
      "method": {
        "begin": "^(-|\\+)\\s*",
        "end": "(?=\\{|#)|;",
        "name": "meta.function.objcpp",
        "patterns": [
          {
            "begin": "(\\()",
            "beginCaptures": {
              "1": {
                "name": "punctuation.definition.type.begin.objcpp"
              }
            },
            "end": "(\\))\\s*(\\w+\\b)",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.type.end.objcpp"
              },
              "2": {
                "name": "entity.name.function.objcpp"
              }
            },
            "name": "meta.return-type.objcpp",
            "patterns": [
              {
                "include": "#protocol_list"
              },
              {
                "include": "#protocol_type_qualifier"
              },
              {
                "include": "$base"
              }
            ]
          },
          {
            "match": "\\b\\w+(?=:)",
            "name": "entity.name.function.name-of-parameter.objcpp"
          },
          {
            "begin": "((:))\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.name-of-parameter.objcpp"
              },
              "2": {
                "name": "punctuation.separator.arguments.objcpp"
              },
              "3": {
                "name": "punctuation.definition.type.begin.objcpp"
              }
            },
            "end": "(\\))\\s*(\\w+\\b)?",
            "endCaptures": {
              "1": {
                "name": "punctuation.definition.type.end.objcpp"
              },
              "2": {
                "name": "variable.parameter.function.objcpp"
              }
            },
            "name": "meta.argument-type.objcpp",
            "patterns": [
              {
                "include": "#protocol_list"
              },
              {
                "include": "#protocol_type_qualifier"
              },
              {
                "include": "$base"
              }
            ]
          },
          {
            "include": "#comment"
          }
        ]
      },
      "method_super": {
        "begin": "^(?=-|\\+)",
        "end": "(?<=\\})|(?=#)",
        "name": "meta.function-with-body.objcpp",
        "patterns": [
          {
            "include": "#method"
          },
          {
            "include": "$base"
          }
        ]
      },
      "pragma-mark": {
        "captures": {
          "1": {
            "name": "meta.preprocessor.objcpp"
          },
          "2": {
            "name": "keyword.control.import.pragma.objcpp"
          },
          "3": {
            "name": "meta.toc-list.pragma-mark.objcpp"
          }
        },
        "match": "^\\s*(#\\s*(pragma\\s+mark)\\s+(.*))",
        "name": "meta.section.objcpp"
      },
      "preprocessor-rule-disabled-implementation": {
        "begin": "^\\s*(#(if)\\s+(0)\\b).*",
        "captures": {
          "1": {
            "name": "meta.preprocessor.objcpp"
          },
          "2": {
            "name": "keyword.control.import.if.objcpp"
          },
          "3": {
            "name": "constant.numeric.preprocessor.objcpp"
          }
        },
        "end": "^\\s*(#\\s*(endif)\\b.*?(?:(?=(?://|/\\*))|$))",
        "patterns": [
          {
            "begin": "^\\s*(#\\s*(else)\\b)",
            "captures": {
              "1": {
                "name": "meta.preprocessor.objcpp"
              },
              "2": {
                "name": "keyword.control.import.else.objcpp"
              }
            },
            "end": "(?=^\\s*#\\s*endif\\b.*?(?:(?=(?://|/\\*))|$))",
            "patterns": [
              {
                "include": "#interface_innards"
              }
            ]
          },
          {
            "begin": "",
            "end": "(?=^\\s*#\\s*(else|endif)\\b.*?(?:(?=(?://|/\\*))|$))",
            "name": "comment.block.preprocessor.if-branch.objcpp",
            "patterns": [
              {
                "include": "#disabled"
              },
              {
                "include": "#pragma-mark"
              }
            ]
          }
        ]
      },
      "preprocessor-rule-disabled-interface": {
        "begin": "^\\s*(#(if)\\s+(0)\\b).*",
        "captures": {
          "1": {
            "name": "meta.preprocessor.objcpp"
          },
          "2": {
            "name": "keyword.control.import.if.objcpp"
          },
          "3": {
            "name": "constant.numeric.preprocessor.objcpp"
          }
        },
        "end": "^\\s*(#\\s*(endif)\\b.*?(?:(?=(?://|/\\*))|$))",
        "patterns": [
          {
            "begin": "^\\s*(#\\s*(else)\\b)",
            "captures": {
              "1": {
                "name": "meta.preprocessor.objcpp"
              },
              "2": {
                "name": "keyword.control.import.else.objcpp"
              }
            },
            "end": "(?=^\\s*#\\s*endif\\b.*?(?:(?=(?://|/\\*))|$))",
            "patterns": [
              {
                "include": "#interface_innards"
              }
            ]
          },
          {
            "begin": "",
            "end": "(?=^\\s*#\\s*(else|endif)\\b.*?(?:(?=(?://|/\\*))|$))",
            "name": "comment.block.preprocessor.if-branch.objcpp",
            "patterns": [
              {
                "include": "#disabled"
              },
              {
                "include": "#pragma-mark"
              }
            ]
          }
        ]
      },
      "preprocessor-rule-enabled-implementation": {
        "begin": "^\\s*(#(if)\\s+(0*1)\\b)",
        "captures": {
          "1": {
            "name": "meta.preprocessor.objcpp"
          },
          "2": {
            "name": "keyword.control.import.if.objcpp"
          },
          "3": {
            "name": "constant.numeric.preprocessor.objcpp"
          }
        },
        "end": "^\\s*(#\\s*(endif)\\b.*?(?:(?=(?://|/\\*))|$))",
        "patterns": [
          {
            "begin": "^\\s*(#\\s*(else)\\b).*",
            "captures": {
              "1": {
                "name": "meta.preprocessor.objcpp"
              },
              "2": {
                "name": "keyword.control.import.else.objcpp"
              }
            },
            "contentName": "comment.block.preprocessor.else-branch.objcpp",
            "end": "(?=^\\s*#\\s*endif\\b.*?(?:(?=(?://|/\\*))|$))",
            "patterns": [
              {
                "include": "#disabled"
              },
              {
                "include": "#pragma-mark"
              }
            ]
          },
          {
            "begin": "",
            "end": "(?=^\\s*#\\s*(else|endif)\\b.*?(?:(?=(?://|/\\*))|$))",
            "patterns": [
              {
                "include": "#implementation_innards"
              }
            ]
          }
        ]
      },
      "preprocessor-rule-enabled-interface": {
        "begin": "^\\s*(#(if)\\s+(0*1)\\b)",
        "captures": {
          "1": {
            "name": "meta.preprocessor.objcpp"
          },
          "2": {
            "name": "keyword.control.import.if.objcpp"
          },
          "3": {
            "name": "constant.numeric.preprocessor.objcpp"
          }
        },
        "end": "^\\s*(#\\s*(endif)\\b.*?(?:(?=(?://|/\\*))|$))",
        "patterns": [
          {
            "begin": "^\\s*(#\\s*(else)\\b).*",
            "captures": {
              "1": {
                "name": "meta.preprocessor.objcpp"
              },
              "2": {
                "name": "keyword.control.import.else.objcpp"
              }
            },
            "contentName": "comment.block.preprocessor.else-branch.objcpp",
            "end": "(?=^\\s*#\\s*endif\\b.*?(?:(?=(?://|/\\*))|$))",
            "patterns": [
              {
                "include": "#disabled"
              },
              {
                "include": "#pragma-mark"
              }
            ]
          },
          {
            "begin": "",
            "end": "(?=^\\s*#\\s*(else|endif)\\b.*?(?:(?=(?://|/\\*))|$))",
            "patterns": [
              {
                "include": "#interface_innards"
              }
            ]
          }
        ]
      },
      "preprocessor-rule-other-implementation": {
        "begin": "^\\s*(#\\s*(if(n?def)?)\\b.*?(?:(?=(?://|/\\*))|$))",
        "captures": {
          "1": {
            "name": "meta.preprocessor.objcpp"
          },
          "2": {
            "name": "keyword.control.import.objcpp"
          }
        },
        "end": "^\\s*(#\\s*(endif)\\b).*?(?:(?=(?://|/\\*))|$)",
        "patterns": [
          {
            "include": "#implementation_innards"
          }
        ]
      },
      "preprocessor-rule-other-interface": {
        "begin": "^\\s*(#\\s*(if(n?def)?)\\b.*?(?:(?=(?://|/\\*))|$))",
        "captures": {
          "1": {
            "name": "meta.preprocessor.objcpp"
          },
          "2": {
            "name": "keyword.control.import.objcpp"
          }
        },
        "end": "^\\s*(#\\s*(endif)\\b).*?(?:(?=(?://|/\\*))|$)",
        "patterns": [
          {
            "include": "#interface_innards"
          }
        ]
      },
      "properties": {
        "patterns": [
          {
            "begin": "((@)property)\\s*(\\()",
            "beginCaptures": {
              "1": {
                "name": "keyword.other.property.objcpp"
              },
              "2": {
                "name": "punctuation.definition.keyword.objcpp"
              },
              "3": {
                "name": "punctuation.section.scope.begin.objcpp"
              }
            },
            "end": "(\\))",
            "endCaptures": {
              "1": {
                "name": "punctuation.section.scope.end.objcpp"
              }
            },
            "name": "meta.property-with-attributes.objcpp",
            "patterns": [
              {
                "match": "\\b(getter|setter|readonly|readwrite|assign|retain|copy|nonatomic|atomic|strong|weak|nonnull|nullable|null_resettable|null_unspecified|class|direct)\\b",
                "name": "keyword.other.property.attribute.objcpp"
              }
            ]
          },
          {
            "captures": {
              "1": {
                "name": "keyword.other.property.objcpp"
              },
              "2": {
                "name": "punctuation.definition.keyword.objcpp"
              }
            },
            "match": "((@)property)\\b",
            "name": "meta.property.objcpp"
          }
        ]
      },
      "property_directive": {
        "captures": {
          "1": {
            "name": "punctuation.definition.keyword.objcpp"
          }
        },
        "match": "(@)(dynamic|synthesize)\\b",
        "name": "keyword.other.property.directive.objcpp"
      },
      "protocol_list": {
        "begin": "(<)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.section.scope.begin.objcpp"
          }
        },
        "end": "(>)",
        "endCaptures": {
          "1": {
            "name": "punctuation.section.scope.end.objcpp"
          }
        },
        "name": "meta.protocol-list.objcpp",
        "patterns": [
          {
            "match": "\\bNS(GlyphStorage|M(utableCopying|enuItem)|C(hangeSpelling|o(ding|pying|lorPicking(Custom|Default)))|T(oolbarItemValidations|ext(Input|AttachmentCell))|I(nputServ(iceProvider|erMouseTracker)|gnoreMisspelledWords)|Obj(CTypeSerializationCallBack|ect)|D(ecimalNumberBehaviors|raggingInfo)|U(serInterfaceValidations|RL(HandleClient|DownloadDelegate|ProtocolClient|AuthenticationChallengeSender))|Validated(ToobarItem|UserInterfaceItem)|Locking)\\b",
            "name": "support.other.protocol.objcpp"
          }
        ]
      },
      "protocol_type_qualifier": {
        "match": "\\b(in|out|inout|oneway|bycopy|byref|nonnull|nullable|_Nonnull|_Nullable|_Null_unspecified)\\b",
        "name": "storage.modifier.protocol.objcpp"
      },
      "special_variables": {
        "patterns": [
          {
            "match": "\\b_cmd\\b",
            "name": "variable.other.selector.objcpp"
          },
          {
            "match": "\\b(self|super)\\b",
            "name": "variable.language.objcpp"
          }
        ]
      },
      "string_escaped_char": {
        "patterns": [
          {
            "match": "\\\\(\\\\|[abefnprtv'\"?]|[0-3]\\d{,2}|[4-7]\\d?|x[a-fA-F0-9]{,2}|u[a-fA-F0-9]{,4}|U[a-fA-F0-9]{,8})",
            "name": "constant.character.escape.objcpp"
          },
          {
            "match": "\\\\.",
            "name": "invalid.illegal.unknown-escape.objcpp"
          }
        ]
      },
      "string_placeholder": {
        "patterns": [
          {
            "match": "%(\\d+\\$)?[#0\\- +']*[,;:_]?((-?\\d+)|\\*(-?\\d+\\$)?)?(\\.((-?\\d+)|\\*(-?\\d+\\$)?)?)?(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?[diouxXDOUeEfFgGaACcSspn%]",
            "name": "constant.other.placeholder.objcpp"
          },
          {
            "captures": {
              "1": {
                "name": "invalid.illegal.placeholder.objcpp"
              }
            },
            "match": "(%)(?!\"\\s*(PRI|SCN))"
          }
        ]
      }
    },
    "scopeName": "source.objcpp"
  }
])