	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.loadingCaption="Loading";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#110e0f";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.HomeURL="%first page%";bookConfig.appLogoOpenWindow="Blank";bookConfig.toolbarColor="#110e0f";bookConfig.iconColor="#E5E5E5";bookConfig.pageNumColor="#333333";bookConfig.iconFontColor="#FFFFFF";bookConfig.FlipSound="Enable";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.ShareButtonVisible="Show";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.ZoomButtonVisible="Yes";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#FFFFFF";bookConfig.PrintButtonVisible="Yes";bookConfig.BackgroundSoundButtonVisible="Enable";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Yes";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.minZoomWidth="700";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.bgBeginColor="#6b5e53";bookConfig.bgEndColor="#6b5e53";bookConfig.bgMRotation="-90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.showDoublePage="Yes";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.googleAnalyticsID="UA-16804445-1";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=13;bookConfig.largePageWidth=1024;bookConfig.largePageHeight=1450;;bookConfig.securityType="1";bookConfig.bookTitle="Neoplast Customer Testimonials";bookConfig.productName="Flip PDF";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/search_config.js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [{ language : "English",btnFirstPage:"First",btnNextPage:"Next Page",btnLastPage:"Last",btnPrePage:"Previous Page",btnDownload:"Download",btnPrint:"Print",btnSearch:"Search",btnClearSearch:"Clear",btnBookMark:"Table of content",btnHelp:"Help",btnHome:"Home",btnFullScreen:"Enable FullScreen",btnDisableFullScreen:"Disable FullScreen",btnSoundOn:"Sound On",btnSoundOff:"Sound Off",btnShareEmail:"Share",btnSocialShare:"Social Share",btnZoomIn:"Zoom In",btnZoomOut:"Zoom Out",btnDragToMove:"Move by mouse drag",btnAutoFlip:"Auto Flip",btnStopAutoFlip:"Stop Auto Flip",btnGoToHome:"Return Home",frmHelpCaption:"Help",frmHelpTip1:"Double click to zoom in or out",frmHelpTip2:"Drag the page corner to view",frmPrintCaption:"Print",frmPrintBtnCaption:"Print",frmPrintPrintAll:"Print All Pages",frmPrintPrintCurrentPage:"Print Current Page",frmPrintPrintRange:"Print Range",frmPrintExampleCaption:"Example: 2,5,8-26",frmPrintPreparePage:"Preparing Page:",frmPrintPrintFailed:"Print Failed:",pnlSearchInputInvalid:"(Minimal request length is 3 symbols)",loginCaption:"Login",loginInvalidPassword:"Not a valid password!",loginPasswordLabel:"Password:",loginBtnLogin:"Login",loginBtnCancel:"Cancel",btnThumb:"Thumbnails",lblPages:"Pages:",lblPagesFound:"Pages:",lblPageIndex:"Page",btnAbout:"About",frnAboutCaption:"About & Contact",btnSinglePage:"Single Page",btnDoublePage:"Double Page",btnSwicthLanguage:"Switch Language",tipChangeLanguage:"Please select a language below...",btnMoreOptionsLeft:"More Options",btnMoreOptionsRight:"More Options",btnFit:"Fit Window",smallModeCaption:"Click to view in fullscreen",btnAddAnnotation:"Add Annotations",btnAnnotation:"Annotations",FlipPageEditor_SaveAndExit:"Save and Exit",FlipPageEditor_Exit:"Exit",DrawToolWindow_Redo:"Redo",DrawToolWindow_Undo:"Undo",DrawToolWindow_Clear:"Clear",DrawToolWindow_Brush:"Brush",DrawToolWindow_Width:"Width",DrawToolWindow_Alpha:"Alpha",DrawToolWindow_Color:"Color",DrawToolWindow_Eraser:"Eraser",DrawToolWindow_Rectangular:"Rectangular",DrawToolWindow_Ellipse:"Ellipse",TStuff_BorderWidth:"Border Width",TStuff_BorderAlph:"Border Alpha",TStuff_BorderColor:"Border Color",DrawToolWindow_TextNote:"Text Note",AnnotMark:"Book Mark",lastpagebtnHelp:"Last page",firstpagebtnHelp:"First page",homebtnHelp:"Return to home page",aboubtnHelp:"About",screenbtnHelp:"Open this application in full-screen mode",helpbtnHelp:"Show help",searchbtnHelp:"Search from pages",pagesbtnHelp:"Take a look at the thumbnail of this brochure",bookmarkbtnHelp:"Open Bookmark",AnnotmarkbtnHelp:"Open Table of content",printbtnHelp:"Print the brochure",soundbtnHelp:"Turn on or off the sound",sharebtnHelp:"Send Email to",socialSharebtnHelp:"Social Share",zoominbtnHelp:"Zoom in",downloadbtnHelp:"Downdlaod this brochure",pagemodlebtnHelp:"Switch Single and double page mode",languagebtnHelp:"Switch Lauguage",annotationbtnHelp:"Add Annotation",addbookmarkbtnHelp:"Add Bookmark",removebookmarkbtnHelp:"Remove BookMark",updatebookmarkbtnHelp:"Update Bookmark",btnShoppingCart:"Shopping Cart",Help_ShoppingCartbtn:"Shopping Cart",Help_btnNextPage:"Next page",Help_btnPrePage:"Previous page",Help_btnAutoFlip:"Auto filp",Help_StopAutoFlip:"Stop atuo filp",btnaddbookmark:"Add",btndeletebookmark:"Delete",btnupdatebookmark:"Update",frmyourbookmarks:"Your bookmarks",frmitems:"items",DownloadFullPublication:"Full Publication",DownloadCurrentPage:"Current Page",DownloadAttachedFiles:"Attached Files",lblLink:"Link",btnCopy:"Copy Button",restorePage:"Would you like to restore previous session",tmpl_Backgoundsoundon:"Background Sound On",tmpl_Backgoundsoundoff:"Background Sound Off",tmpl_Flipsoundon:"Flip Sound On",tmpl_Flipsoundoff:"Flip Sound Off",Help_PageIndex:"The current page number",tmpl_PrintPageRanges:"PAGE RANGES",tmpl_PrintPreview:"PREVIEW",btnSelection:"Select Text",loginNameLabel:"Name:",btnGotoPage:"Go",btnSettings:"Setting",soundSettingTitle:"Sound Setting",closeFlipSound:"Close Flip Sound",closeBackgroundSound:"Close Backgorund Sound",frmShareCaption:"Share",frmShareLinkLabel:"Link:",frmShareBtnCopy:"Copy",frmShareItemsGroupCaption:"Social Share",TAnnoActionPropertyStuff_GotoPage:"Go to page",btnPageBack:"Back",btnPageForward:"Forward",SelectTextCopy:"Copy Text",selectCopyButton:"Copy",TStuffCart_TypeCart:"Shopping Cart",TStuffCart_DetailedQuantity:"Quantity",TStuffCart_DetailedPrice:"Price",ShappingCart_Close:"Close",ShappingCart_CheckOut:"Checkout",ShappingCart_Item:"Item",ShappingCart_Total:"Total",ShappingCart_AddCart:"Add to cart",ShappingCart_InStock:"In Stock",TStuffCart_DetailedCost:"Shipping cost",TStuffCart_DetailedTime:"Delivery time",TStuffCart_DetailedDay:"day(s)",ShappingCart_NotStock:"Not enough in stock",btnCrop:"Crop",btnDragButton:"Drag",btnFlipBook:"Flip Book",btnSlideMode:"Slide Mode",btnSinglePageMode:"Single Page Mode",btnVertical:"Vertical Mode",btnHotizontal:"Horizontal Mode",btnClose:"Close",btnDoublePage:"Double Page",btnBookStatus:"Book View",checkBoxInsert:"Insert Current Page",lblLast:"This is the last page.",lblFirst:"This is the first page.",lblFullscreen:"Click to view in fullscreen",lblName:"Name",lblPassword:"Password",lblLogin:"Login",lblCancel:"Cancel",lblNoName:"User name can not be empty.",lblNoPassword:"Password can not be empty.",lblNoCorrectLogin:"Please enter the correct user name and password.",btnVideo:"Video Gallery",btnSlideShow:"Slide Show",pnlSearchInputInvalid:"(Minimal request length is 3 symbols)",btnDragToMove:"Move by mouse drag",btnPositionToMove:"Move by mouse position",lblHelp1:"Drag the page corner to view",lblHelp2:"Double click to zoom in, out",lblCopy:"Copy",lblAddToPage:"add to page",lblPage:"Page",lblTitle:"Title",lblEdit:"Edit",lblDelete:"Delete",lblRemoveAll:"Remove All",tltCursor:"cursor",tltAddHighlight:"add highlight",tltAddTexts:"add texts",tltAddShapes:"add shapes",tltAddNotes:"add notes",tltAddImageFile:"add image file",tltAddSignature:"add signature",tltAddLine:"add line",tltAddArrow:"add arrow",tltAddRect:"add rect",tltAddEllipse:"add ellipse",lblDoubleClickToZoomIn:"Double click to zoom in.",frmShareCaption:"Share",frmShareLabel:"Share",frmShareInfo:"You can easily share this publication to social networks.Just cilck the appropriate button below.",frminsertLabel:"Insert to Site",frminsertInfo:"Use the code below to embed this publication to your website.",btnQRCode:"Click to scan QR code",btnRotateLeft:"Rotate Left",btnRotateRight:"Rotate Right"}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx<br/>   I\'m going to buy below product(s):<br/>    ${shopping}<br/>Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202241454167224","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScale":"false","location":{"tannoName":"image1","x":"0.0014749262536873156","y":"0.7666666666666667","width":"0.995132743362832","height":"0.23385416666666667","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"678","pageHeight":"960"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","url":"./files/pageConfig/images.png","originalURL":"./files/pageConfig/images.png","effect":{"effectType":"null","triggerAction":"Note","duration":"1","position":"left"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202241454163174","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScale":"false","location":{"tannoName":"image1","x":"0.0029498525073746312","y":"0.0020833333333333333","width":"1.0025073746312685","height":"0.37729166666666664","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"678","pageHeight":"960"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","url":"./files/pageConfig/how-to-get-testimonials-removebg-preview.png","originalURL":"./files/pageConfig/how-to-get-testimonials-removebg-preview.png","effect":{"effectType":"null","triggerAction":"Note","duration":"1","position":"left"}}],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"20224145416874","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScale":"false","location":{"tannoName":"image2","x":"0.004424778761061947","y":"0.640625","width":"0.9878318584070797","height":"0.35625","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"678","pageHeight":"960"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","url":"./files/pageConfig/contact us.png","originalURL":"./files/pageConfig/contact us.png","effect":{"effectType":"null","triggerAction":"Note","duration":"1","position":"left"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202241454167583","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link1","x":"0.45132743362831856","y":"0.7927083333333333","width":"0.03392330383480826","height":"0.023958333333333335","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"678","pageHeight":"960"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.facebook.com/neoplastgroup/","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202241454161172","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link1","x":"0.49852507374631266","y":"0.7916666666666666","width":"0.035398230088495575","height":"0.026041666666666668","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"678","pageHeight":"960"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.linkedin.com/company/neoplastindia","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202241454161170","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link2","x":"0.6238938053097345","y":"0.7979166666666667","width":"0.2743362831858407","height":"0.08125","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"678","pageHeight":"960"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.neoplast.com/","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202241454164247","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link3","x":"0.0855457227138643","y":"0.7854166666666667","width":"0.21091445427728617","height":"0.03125","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"678","pageHeight":"960"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.neoplast.com/","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202241454168353","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link4","x":"0.08849557522123894","y":"0.6927083333333334","width":"0.26843657817109146","height":"0.071875","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"678","pageHeight":"960"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://g.page/r/CfIVGwK_F1o5EAE","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202241454163075","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link5","x":"0.3834808259587021","y":"0.6927083333333334","width":"0.22123893805309736","height":"0.07291666666666667","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"678","pageHeight":"960"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://g.page/r/CTBSg-PE0DHSEAE","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202241454168727","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link6","x":"0.6283185840707964","y":"0.6927083333333334","width":"0.2640117994100295","height":"0.07083333333333333","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"678","pageHeight":"960"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://goo.gl/maps/WQA6kiP9F9LA1vKi7","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202241454161126","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScale":"false","location":{"tannoName":"image3","x":"0.008849557522123894","y":"0.08125","width":"0.9682890855457227","height":"0.5086458333333334","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"678","pageHeight":"960"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","url":"./files/pageConfig/12-120401_thank-you-for-your-valuable-time-removebg-preview.png","originalURL":"./files/pageConfig/12-120401_thank-you-for-your-valuable-time-removebg-preview.png","effect":{"effectType":"null","triggerAction":"Note","duration":"1","position":"left"}}]]};
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}
