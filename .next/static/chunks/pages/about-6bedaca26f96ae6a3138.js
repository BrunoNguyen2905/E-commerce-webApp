_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{ED4I:function(e,t,a){"use strict";function i(e){return e}a.d(t,"a",(function(){return i}))},Ie8z:function(e,t,a){"use strict";var i=a("wx14"),n=a("Ff2n"),o=a("q1tI"),r=(a("17x9"),a("iuhU")),c=a("H2TA"),s=["video","audio","picture","iframe","img"],l=o.forwardRef((function(e,t){var a=e.children,c=e.classes,l=e.className,u=e.component,d=void 0===u?"div":u,m=e.image,p=e.src,g=e.style,h=Object(n.a)(e,["children","classes","className","component","image","src","style"]),f=-1!==s.indexOf(d),b=!f&&m?Object(i.a)({backgroundImage:'url("'.concat(m,'")')},g):g;return o.createElement(d,Object(i.a)({className:Object(r.a)(c.root,l,f&&c.media,-1!=="picture img".indexOf(d)&&c.img),ref:t,style:b,src:f?m||p:void 0},h),a)}));t.a=Object(c.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(l)},"R/WZ":function(e,t,a){"use strict";var i=a("wx14"),n=a("RD7I"),o=a("cNwE");t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n.a)(e,Object(i.a)({defaultTheme:o.a},t))}},TaPz:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var i=a("xC9H"),n=a("30+C"),o=a("lFIR"),r=a("Ie8z"),c=a("oa/T"),s=a("ofer"),l=a("o4QW"),u=a("q1tI"),d=a.n(u),m=a("hlFM"),p=d.a.createElement;function g(){var e=Object(i.default)(),t=[{name:"Phan Hong Duc",Career:"Full stack developer in JS/TS and Java","Tech-skills":"TS, ReactJS, NextJS, NodeJS, Express, GraphQL, MongoDB, Postgres, MySQL, Java, Vaadin, Git",Address:"Helsinki, Finland",img:"/img/Duc-Phan.jpg",github:"https://github.com/hongduc-phan"},{name:"Phan Hong Phat",Career:"Full stack developer in JS/TS","Tech-skills":"TS, ReactJS, NextJS, NodeJS, Express, GraphQL, MongoDB, Postgres, MySQL, Git",Address:"Helsinki, Finland",img:"/img/Phat-Phan.jpg",github:"https://github.com/phanhongphat"},{name:"Phan Thanh Dat",Career:"Full stack developer in JS/TS and Java","Tech-skills":"TS, ReactJS, NextJS, NodeJS, Express, GraphQL, MongoDB, Postgres, MySQL, Java, Vaadin, Git",Address:"Helsinki, Finland",img:"/img/Dat-Phan.jpg",github:"https://github.com/ptdatkhtn"}];return p(m.a,{className:e.content__items},null===t||void 0===t?void 0:t.map((function(t){return p(n.a,{className:e.content__item},p(o.a,null,p(r.a,{className:e.item__media,image:t.img,title:t.name}),p(c.a,null,p(s.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.name),p(s.a,{variant:"body2",color:"textSecondary",component:"p"},t["Tech-skills"]),p(s.a,{className:e.item__price},t.Career))),p(l.a,null,p("a",{href:t.github},"Github")))})))}},ZBNC:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a("ED4I");function n(e){return Object(i.a)(e)}},hIud:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return a("TaPz")}])},lFIR:function(e,t,a){"use strict";var i=a("wx14"),n=a("Ff2n"),o=a("q1tI"),r=(a("17x9"),a("iuhU")),c=a("H2TA"),s=a("VD++"),l=o.forwardRef((function(e,t){var a=e.children,c=e.classes,l=e.className,u=e.focusVisibleClassName,d=Object(n.a)(e,["children","classes","className","focusVisibleClassName"]);return(o.createElement(s.a,Object(i.a)({className:Object(r.a)(c.root,l),focusVisibleClassName:Object(r.a)(u,c.focusVisible),ref:t},d),a,o.createElement("span",{className:c.focusHighlight})))}));t.a=Object(c.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(l)},o4QW:function(e,t,a){"use strict";var i=a("wx14"),n=a("Ff2n"),o=a("q1tI"),r=(a("17x9"),a("iuhU")),c=a("H2TA"),s=o.forwardRef((function(e,t){var a=e.disableSpacing,c=void 0!==a&&a,s=e.classes,l=e.className,u=Object(n.a)(e,["disableSpacing","classes","className"]);return(o.createElement("div",Object(i.a)({className:Object(r.a)(s.root,l,!c&&s.spacing),ref:t},u)))}));t.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(s)},xC9H:function(e,t,a){"use strict";a.r(t);var i=a("R/WZ"),n=a("ZBNC"),o=Object(i.a)((function(e){return Object(n.a)({wrapper:{marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"},content__pagination:{marginLeft:"20px"},content__skeleton:{margin:"20px",zIndex:1,position:"relative"},wrapper__loading:{zIndex:20,width:"100vw",textAlign:"center",position:"absolute",bottom:500},content__tittle:{textAlign:"center",padding:"40px",fontSize:"52px",fontWeight:"bold"},content__items:{display:"flex",maxHeight:"768px",flexWrap:"wrap"},content__item:{width:"100%"},lazyLoading:{width:"30% !important",padding:"24px"},item__media:{width:"80%",height:"160px",textAlign:"center",margin:"20px",padding:"20px"},item__price:{textAlign:"right",color:"red"},item__buttons:{display:"flex",justifyContent:"space-between"},button__addToCart:{margin:"5px"}})}));t.default=o}},[["hIud",0,1,2,3,4,6]]]);