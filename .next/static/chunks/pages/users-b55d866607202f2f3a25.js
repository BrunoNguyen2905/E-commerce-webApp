_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{"5AJ6":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r("wx14"),n=r("q1tI"),a=r.n(n),i=r("HR5l");function c(e,t){var r=function(t,r){return a.a.createElement(i.a,Object(o.a)({ref:r},t),e)};return r.muiName=i.a.muiName,a.a.memo(a.a.forwardRef(r))}},HR5l:function(e,t,r){"use strict";var o=r("wx14"),n=r("Ff2n"),a=r("q1tI"),i=(r("17x9"),r("iuhU")),c=r("H2TA"),l=r("NqtD"),p=a.forwardRef((function(e,t){var r=e.children,c=e.classes,p=e.className,s=e.color,u=void 0===s?"inherit":s,d=e.component,f=void 0===d?"svg":d,m=e.fontSize,b=void 0===m?"default":m,h=e.htmlColor,g=e.titleAccess,y=e.viewBox,v=void 0===y?"0 0 24 24":y,O=Object(n.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return(a.createElement(f,Object(o.a)({className:Object(i.a)(c.root,p,"inherit"!==u&&c["color".concat(Object(l.a)(u))],"default"!==b&&c["fontSize".concat(Object(l.a)(b))]),focusable:"false",viewBox:v,color:h,"aria-hidden":!g||void 0,role:g?"img":void 0,ref:t},O),r,g?a.createElement("title",null,g):null))}));p.muiName="SvgIcon",t.a=Object(c.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(p)},PWtF:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return r("tm8K")}])},apO0:function(e,t,r){"use strict";var o=r("q1tI"),n=r.n(o),a=r("YFqc"),i=r.n(a),c=r("8Kt/"),l=r.n(c),p=n.a.createElement;t.a=function(e){var t=e.children,r=e.title,o=void 0===r?"This is the default title":r;return p("div",null,p(l.a,null,p("title",null,o),p("meta",{charSet:"utf-8"}),p("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),p("header",null,p("nav",null,p(i.a,{href:"/"},p("a",null,"Home"))," ","|"," ",p(i.a,{href:"/about"},p("a",null,"About"))," ","|"," ",p(i.a,{href:"/users"},p("a",null,"Users List"))," ","| ",p("a",{href:"/api/users"},"Users API"))),t,p("footer",null,p("hr",null),p("span",null,"I'm here to stay (Footer)")))}},hlFM:function(e,t,r){"use strict";var o=r("KQm4"),n=r("wx14"),a=(r("17x9"),r("bv9d"));var i=function(e){var t=function(t){var r=e(t);return t.css?Object(n.a)(Object(n.a)({},Object(a.a)(r,e(Object(n.a)({theme:t.theme},t.css)))),function(e,t){var r={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(r[o]=e[o])})),r}(t.css,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css"].concat(Object(o.a)(e.filterProps)),t};var c=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var o=function(e){return t.reduce((function(t,r){var o=r(e);return o?Object(a.a)(t,o):t}),{})};return o.propTypes={},o.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),o},l=r("rePB"),p=r("LybE");function s(e,t){return t&&"string"===typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var u=function(e){var t=e.prop,r=e.cssProperty,o=void 0===r?e.prop:r,n=e.themeKey,a=e.transform,i=function(e){if(null==e[t])return null;var r=e[t],i=s(e.theme,n)||{};return Object(p.a)(e,r,(function(e){var t;return"function"===typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=s(i,e)||e,a&&(t=a(t))),!1===o?t:Object(l.a)({},o,t)}))};return i.propTypes={},i.filterProps=[t],i};function d(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var f=c(u({prop:"border",themeKey:"borders",transform:d}),u({prop:"borderTop",themeKey:"borders",transform:d}),u({prop:"borderRight",themeKey:"borders",transform:d}),u({prop:"borderBottom",themeKey:"borders",transform:d}),u({prop:"borderLeft",themeKey:"borders",transform:d}),u({prop:"borderColor",themeKey:"palette"}),u({prop:"borderRadius",themeKey:"shape"})),m=c(u({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),u({prop:"display"}),u({prop:"overflow"}),u({prop:"textOverflow"}),u({prop:"visibility"}),u({prop:"whiteSpace"})),b=c(u({prop:"flexBasis"}),u({prop:"flexDirection"}),u({prop:"flexWrap"}),u({prop:"justifyContent"}),u({prop:"alignItems"}),u({prop:"alignContent"}),u({prop:"order"}),u({prop:"flex"}),u({prop:"flexGrow"}),u({prop:"flexShrink"}),u({prop:"alignSelf"}),u({prop:"justifyItems"}),u({prop:"justifySelf"})),h=c(u({prop:"gridGap"}),u({prop:"gridColumnGap"}),u({prop:"gridRowGap"}),u({prop:"gridColumn"}),u({prop:"gridRow"}),u({prop:"gridAutoFlow"}),u({prop:"gridAutoColumns"}),u({prop:"gridAutoRows"}),u({prop:"gridTemplateColumns"}),u({prop:"gridTemplateRows"}),u({prop:"gridTemplateAreas"}),u({prop:"gridArea"})),g=c(u({prop:"position"}),u({prop:"zIndex",themeKey:"zIndex"}),u({prop:"top"}),u({prop:"right"}),u({prop:"bottom"}),u({prop:"left"})),y=c(u({prop:"color",themeKey:"palette"}),u({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),v=u({prop:"boxShadow",themeKey:"shadows"});function O(e){return e<=1?"".concat(100*e,"%"):e}var j=u({prop:"width",transform:O}),w=u({prop:"maxWidth",transform:O}),x=u({prop:"minWidth",transform:O}),N=u({prop:"height",transform:O}),S=u({prop:"maxHeight",transform:O}),E=u({prop:"minHeight",transform:O}),P=(u({prop:"size",cssProperty:"width",transform:O}),u({prop:"size",cssProperty:"height",transform:O}),c(j,w,x,N,S,E,u({prop:"boxSizing"}))),k=r("+Hmc"),R=c(u({prop:"fontFamily",themeKey:"typography"}),u({prop:"fontSize",themeKey:"typography"}),u({prop:"fontStyle",themeKey:"typography"}),u({prop:"fontWeight",themeKey:"typography"}),u({prop:"letterSpacing"}),u({prop:"lineHeight"}),u({prop:"textAlign"})),T=r("Ff2n"),A=r("q1tI"),C=r.n(A),z=r("iuhU"),q=r("2mql"),H=r.n(q),I=r("RD7I");function K(e,t){var r={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(r[o]=e[o])})),r}var D=r("cNwE"),F=function(e){var t=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.name,a=Object(T.a)(r,["name"]);var i,c=o,l="function"===typeof t?function(e){return{root:function(r){return t(Object(n.a)({theme:e},r))}}}:{root:t},p=Object(I.a)(l,Object(n.a)({Component:e,name:o||e.displayName,classNamePrefix:c},a));t.filterProps&&(i=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var s=C.a.forwardRef((function(t,r){var o=t.children,a=t.className,c=t.clone,l=t.component,s=Object(T.a)(t,["children","className","clone","component"]),u=p(t),d=Object(z.a)(u.root,a),f=s;if(i&&(f=K(f,i)),c)return C.a.cloneElement(o,Object(n.a)({className:Object(z.a)(o.props.className,d)},f));if("function"===typeof o)return o(Object(n.a)({className:d},f));var m=l||e;return(C.a.createElement(m,Object(n.a)({ref:r,className:d},f),o))}));return H()(s,e),s}}(e);return function(e,r){return t(e,Object(n.a)({defaultTheme:D.a},r))}},M=i(c(f,m,b,h,g,y,v,P,k.b,R)),_=F("div")(M,{name:"MuiBox"});t.a=_},lTCR:function(e,t,r){var o=r("EMzn").parse;function n(e){return e.replace(/[\s,]+/g," ").trim()}var a={},i={};var c=!0;var l=!1;function p(e){var t=n(e);if(a[t])return a[t];var r=o(e,{experimentalFragmentVariables:l});if(!r||"Document"!==r.kind)throw new Error("Not a valid GraphQL document.");return r=function e(t,r){var o=Object.prototype.toString.call(t);if("[object Array]"===o)return t.map((function(t){return e(t,r)}));if("[object Object]"!==o)throw new Error("Unexpected input.");r&&t.loc&&delete t.loc,t.loc&&(delete t.loc.startToken,delete t.loc.endToken);var n,a,i,c=Object.keys(t);for(n in c)c.hasOwnProperty(n)&&(a=t[c[n]],"[object Object]"!==(i=Object.prototype.toString.call(a))&&"[object Array]"!==i||(t[c[n]]=e(a,!0)));return t}(r=function(e){for(var t,r={},o=[],a=0;a<e.definitions.length;a++){var l=e.definitions[a];if("FragmentDefinition"===l.kind){var p=l.name.value,s=n((t=l.loc).source.body.substring(t.start,t.end));i.hasOwnProperty(p)&&!i[p][s]?(c&&console.warn("Warning: fragment with name "+p+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"),i[p][s]=!0):i.hasOwnProperty(p)||(i[p]={},i[p][s]=!0),r[s]||(r[s]=!0,o.push(l))}else o.push(l)}return e.definitions=o,e}(r),!1),a[t]=r,r}function s(){for(var e=Array.prototype.slice.call(arguments),t=e[0],r="string"===typeof t?t:t[0],o=1;o<e.length;o++)e[o]&&e[o].kind&&"Document"===e[o].kind?r+=e[o].loc.source.body:r+=e[o],r+=t[o];return p(r)}s.default=s,s.resetCaches=function(){a={},i={}},s.disableFragmentWarnings=function(){c=!1},s.enableExperimentalFragmentVariables=function(){l=!0},s.disableExperimentalFragmentVariables=function(){l=!1},e.exports=s},tm8K:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSP",(function(){return G})),r.d(t,"AllUsersQuery",(function(){return J})),r.d(t,"MaterialUiLink",(function(){return X}));var o=r("rePB"),n=r("Ff2n"),a=r("wx14");var i=r("q1tI"),c=r.n(i),l=r("YFqc"),p=r.n(l),s=r("apO0"),u=r("lTCR"),d=r.n(u),f=(r("17x9"),r("iuhU")),m=r("H2TA");var b=i.createContext(),h=i.forwardRef((function(e,t){var r=e.classes,o=e.className,c=e.component,l=void 0===c?"table":c,p=e.padding,s=void 0===p?"default":p,u=e.size,d=void 0===u?"medium":u,m=e.stickyHeader,h=void 0!==m&&m,g=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),y=i.useMemo((function(){return{padding:s,size:d,stickyHeader:h}}),[s,d,h]);return i.createElement(b.Provider,{value:y},i.createElement(l,Object(a.a)({role:"table"===l?null:"table",ref:t,className:Object(f.a)(r.root,o,h&&r.stickyHeader)},g)))})),g=Object(m.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(a.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(h),y=r("R/WZ"),v=i.forwardRef((function(e,t){var r=e.classes,o=e.className,c=e.component,l=void 0===c?"div":c,p=Object(n.a)(e,["classes","className","component"]);return(i.createElement(l,Object(a.a)({ref:t,className:Object(f.a)(r.root,o)},p)))})),O=Object(m.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(v);var j=i.createContext(),w={variant:"head"},x=i.forwardRef((function(e,t){var r=e.classes,o=e.className,c=e.component,l=void 0===c?"thead":c,p=Object(n.a)(e,["classes","className","component"]);return(i.createElement(j.Provider,{value:w},i.createElement(l,Object(a.a)({className:Object(f.a)(r.root,o),ref:t,role:"thead"===l?null:"rowgroup"},p))))})),N=Object(m.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(x),S=r("ye/S"),E=i.forwardRef((function(e,t){var r=e.classes,o=e.className,c=e.component,l=void 0===c?"tr":c,p=e.hover,s=void 0!==p&&p,u=e.selected,d=void 0!==u&&u,m=Object(n.a)(e,["classes","className","component","hover","selected"]),b=i.useContext(j);return i.createElement(l,Object(a.a)({ref:t,className:Object(f.a)(r.root,o,b&&{head:r.head,footer:r.footer}[b.variant],s&&r.hover,d&&r.selected),role:"tr"===l?null:"row"},m))})),P=Object(m.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(S.b)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(E),k=r("NqtD"),R=i.forwardRef((function(e,t){var r,o,c=e.align,l=void 0===c?"inherit":c,p=e.classes,s=e.className,u=e.component,d=e.padding,m=e.scope,h=e.size,g=e.sortDirection,y=e.variant,v=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),O=i.useContext(b),w=i.useContext(j),x=w&&"head"===w.variant;u?(o=u,r=x?"columnheader":"cell"):o=x?"th":"td";var N=m;!N&&x&&(N="col");var S=d||(O&&O.padding?O.padding:"default"),E=h||(O&&O.size?O.size:"medium"),P=y||w&&w.variant,R=null;return g&&(R="asc"===g?"ascending":"descending"),i.createElement(o,Object(a.a)({ref:t,className:Object(f.a)(p.root,p[P],s,"inherit"!==l&&p["align".concat(Object(k.a)(l))],"default"!==S&&p["padding".concat(Object(k.a)(S))],"medium"!==E&&p["size".concat(Object(k.a)(E))],"head"===P&&O&&O.stickyHeader&&p.stickyHeader),"aria-sort":R,role:r,scope:N},v))})),T=Object(m.a)((function(e){return{root:Object(a.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(S.d)(Object(S.b)(e.palette.divider,1),.88):Object(S.a)(Object(S.b)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(R),A={variant:"body"},C=i.forwardRef((function(e,t){var r=e.classes,o=e.className,c=e.component,l=void 0===c?"tbody":c,p=Object(n.a)(e,["classes","className","component"]);return(i.createElement(j.Provider,{value:A},i.createElement(l,Object(a.a)({className:Object(f.a)(r.root,o),ref:t,role:"tbody"===l?null:"rowgroup"},p))))})),z=Object(m.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(C),q=c.a.createElement,H=Object(y.a)({table:{maxWidth:650,margin:"0  auto"}}),I=function(e){var t=e.items,r=H();return q(O,null,q(g,{className:r.table,"aria-label":"simple table"},q(N,null,q(P,null,q(T,null,"USERNAME"),q(T,{align:"right"},"EMAIL"),q(T,{align:"right"},"ROLE"),q(T,{align:"right"},"STATUS"))),q(z,null,null===t||void 0===t?void 0:t.map((function(e){return q(p.a,{href:"/users/detail?id=".concat(e.id)},q(P,null,q(T,{component:"th",scope:"row"},e.username),q(T,{align:"right"},e.email),q(T,{align:"right"},e.role),q(T,{align:"right"},e.status?"Activated":"Deactivated")))})))))},K=r("hlFM"),D=r("eECT"),F=r("nOHt"),M=r("l1im"),_=r("Z5EY"),U=r("SpDg"),L=c.a.createElement;function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $(){var e,t,r=(e=["\n  query AllUsers($skip: String!, $take: String!) {\n    allUsers(skip: $skip, take: $take) {\n      id\n      username\n      email\n      password\n      role\n      status\n    }\n  }\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return $=function(){return r},r}var G=!0,J=d()($());t.default=function(e){var t=e.loading,r=e.users,o=e.numberPages,n=Object(F.useRouter)();return t||!r?L(D.a,null):L(s.a,{title:"Users List | Next.js + TypeScript Example"},L("h1",null,"Users List"),L("p",null,"Example fetching data from inside ",L("code",null,"getStaticProps()"),"."),L("p",null,"You are currently on: /users"),L(K.a,null,o>0||!t?L(M.a,{page:parseInt(n.query.page||"1"),count:o,defaultPage:1,renderItem:function(e){return L(_.a,Object(a.a)({component:X,query:n.query,item:e},e))}}):L(U.a,{variant:"rect",width:"30vw",height:"28px"})),L(I,{items:r}),L("p",null,L(p.a,{href:"/api/books"},L("a",null,"Go home"))))};function X(e){var t=e.item,r=e.query,o=Object(n.a)(e,["item","query"]);return L(p.a,{href:{pathname:"/users",query:B(B({},r),{},{page:t.page})}},L("a",o))}},tr08:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("aXM8"),n=(r("q1tI"),r("cNwE"));function a(){return Object(o.a)()||n.a}},yCxk:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("q1tI");function n(e){var t=e.controlled,r=e.default,n=(e.name,e.state,o.useRef(void 0!==t).current),a=o.useState(r),i=a[0],c=a[1];return[n?t:i,o.useCallback((function(e){n||c(e)}),[])]}}},[["PWtF",0,1,2,3,4,5,11,12]]]);