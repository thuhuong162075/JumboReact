(this["webpackJsonpjumbo-hooks"]=this["webpackJsonpjumbo-hooks"]||[]).push([[84],{1536:function(e,a,t){"use strict";var n=t(9),r=t(49),c=t(3),l=t(0),o=(t(2),t(10)),i=t(13),s=t(171),m=t(29),u=l.forwardRef((function(e,a){var t=e.action,r=e.classes,i=e.className,m=e.message,u=e.role,d=void 0===u?"alert":u,p=Object(n.a)(e,["action","classes","className","message","role"]);return l.createElement(s.a,Object(c.a)({role:d,square:!0,elevation:6,className:Object(o.a)(r.root,i),ref:a},p),l.createElement("div",{className:r.message},m),t?l.createElement("div",{className:r.action},t):null)}));a.a=Object(i.a)((function(e){var a="light"===e.palette.type?.8:.98,t=Object(m.b)(e.palette.background.default,a);return{root:Object(c.a)({},e.typography.body2,Object(r.a)({color:e.palette.getContrastText(t),backgroundColor:t,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(u)},1942:function(e,a,t){"use strict";var n=t(9),r=t(49),c=t(3),l=t(0),o=(t(2),t(10)),i=t(13),s=t(51),m=t(22),u=t(46),d=t(26),p=t(80),h=t(70);function b(e){return e.substring(2).toLowerCase()}var f=l.forwardRef((function(e,a){var t=e.children,n=e.mouseEvent,r=void 0===n?"onClick":n,c=e.touchEvent,o=void 0===c?"onTouchEnd":c,i=e.onClickAway,s=l.useRef(!1),f=l.useRef(null),v=l.useRef(!1);l.useEffect((function(){return v.current=!0,function(){v.current=!1}}),[]);var E=Object(d.a)(f,a),g=l.useCallback((function(e){Object(p.a)(E,m.findDOMNode(e))}),[E]),j=Object(d.a)(t.ref,g),O=Object(h.a)((function(e){if(v.current)if(s.current)s.current=!1;else if(f.current){var a=Object(u.a)(f.current);a.documentElement&&a.documentElement.contains(e.target)&&!f.current.contains(e.target)&&i(e)}})),y=l.useCallback((function(){s.current=!0}),[]);return l.useEffect((function(){if(!1!==o){var e=b(o),a=Object(u.a)(f.current);return a.addEventListener(e,O),a.addEventListener("touchmove",y),function(){a.removeEventListener(e,O),a.removeEventListener("touchmove",y)}}}),[O,y,o]),l.useEffect((function(){if(!1!==r){var e=b(r),a=Object(u.a)(f.current);return a.addEventListener(e,O),function(){a.removeEventListener(e,O)}}}),[O,r]),l.createElement(l.Fragment,null,l.cloneElement(t,{ref:j}))})),v=t(21),E=t(88),g=t(346),j=t(1536),O=l.forwardRef((function(e,a){var t=e.action,r=e.anchorOrigin,i=(r=void 0===r?{vertical:"bottom",horizontal:"center"}:r).vertical,m=r.horizontal,u=e.autoHideDuration,d=void 0===u?null:u,p=e.children,b=e.classes,O=e.className,y=e.ClickAwayListenerProps,k=e.ContentProps,C=e.disableWindowBlurListener,N=void 0!==C&&C,w=e.message,x=e.onClose,z=e.onEnter,I=e.onEntered,L=e.onEntering,T=e.onExit,R=e.onExited,S=e.onExiting,M=e.onMouseEnter,A=e.onMouseLeave,P=e.open,B=e.resumeHideDuration,D=e.TransitionComponent,q=void 0===D?g.a:D,H=e.transitionDuration,U=void 0===H?{enter:s.b.enteringScreen,exit:s.b.leavingScreen}:H,W=e.TransitionProps,F=Object(n.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),G=l.useRef(),J=l.useState(!0),_=J[0],V=J[1],X=Object(h.a)((function(){x&&x.apply(void 0,arguments)})),K=Object(h.a)((function(e){x&&null!=e&&(clearTimeout(G.current),G.current=setTimeout((function(){X(null,"timeout")}),e))}));l.useEffect((function(){return P&&K(d),function(){clearTimeout(G.current)}}),[P,d,K]);var Q=function(){clearTimeout(G.current)},Y=l.useCallback((function(){null!=d&&K(null!=B?B:.5*d)}),[d,B,K]);return l.useEffect((function(){if(!N&&P)return window.addEventListener("focus",Y),window.addEventListener("blur",Q),function(){window.removeEventListener("focus",Y),window.removeEventListener("blur",Q)}}),[N,Y,P]),!P&&_?null:l.createElement(f,Object(c.a)({onClickAway:function(e){x&&x(e,"clickaway")}},y),l.createElement("div",Object(c.a)({className:Object(o.a)(b.root,b["anchorOrigin".concat(Object(v.a)(i)).concat(Object(v.a)(m))],O),onMouseEnter:function(e){M&&M(e),Q()},onMouseLeave:function(e){A&&A(e),Y()},ref:a},F),l.createElement(q,Object(c.a)({appear:!0,in:P,onEnter:Object(E.a)((function(){V(!1)}),z),onEntered:I,onEntering:L,onExit:T,onExited:Object(E.a)((function(){V(!0)}),R),onExiting:S,timeout:U,direction:"top"===i?"down":"up"},W),p||l.createElement(j.a,Object(c.a)({message:w,action:t},k)))))}));a.a=Object(i.a)((function(e){var a={top:8},t={bottom:8},n={justifyContent:"flex-end"},l={justifyContent:"flex-start"},o={top:24},i={bottom:24},s={right:24},m={left:24},u={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(c.a)({},a,Object(r.a)({},e.breakpoints.up("sm"),Object(c.a)({},o,{},u))),anchorOriginBottomCenter:Object(c.a)({},t,Object(r.a)({},e.breakpoints.up("sm"),Object(c.a)({},i,{},u))),anchorOriginTopRight:Object(c.a)({},a,{},n,Object(r.a)({},e.breakpoints.up("sm"),Object(c.a)({left:"auto"},o,{},s))),anchorOriginBottomRight:Object(c.a)({},t,{},n,Object(r.a)({},e.breakpoints.up("sm"),Object(c.a)({left:"auto"},i,{},s))),anchorOriginTopLeft:Object(c.a)({},a,{},l,Object(r.a)({},e.breakpoints.up("sm"),Object(c.a)({right:"auto"},o,{},m))),anchorOriginBottomLeft:Object(c.a)({},t,{},l,Object(r.a)({},e.breakpoints.up("sm"),Object(c.a)({right:"auto"},i,{},m)))}}),{flip:!1,name:"MuiSnackbar"})(O)},2380:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(64),l=t(65),o=t(67),i=t(66),s=t(68),m=t(398),u=t(1942),d=t(232),p=t(843),h=t.n(p),b=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={open:!1,message:null},t.handleClick=function(){t.setState({open:!0})},t.handleRequestClose=function(e,a){"clickaway"!==a&&t.setState({open:!1})},t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleClick},this.props.children),r.a.createElement(u.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:6e3,onClose:this.handleRequestClose,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},"Note archived"),action:[r.a.createElement(m.a,{key:"undo",color:"secondary",size:"small",onClick:this.handleRequestClose},"UNDO"),r.a.createElement(d.a,{key:"close","aria-label":"Close",color:"inherit",onClick:this.handleRequestClose},r.a.createElement(h.a,null))]}))}}]),a}(n.Component),f=t(6),v=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={open:!1,vertical:null,horizontal:null},t.handleClick=function(e){return function(){t.setState(Object(f.a)({open:!0},e))}},t.handleRequestClose=function(){t.setState({open:!1})},t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.state,a=e.vertical,t=e.horizontal,n=e.open;return r.a.createElement("div",{className:"manage-margin"},r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleClick({vertical:"top",horizontal:"center"})},r.a.createElement("span",null,"Top-Center")),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleClick({vertical:"top",horizontal:"right"})},r.a.createElement("span",null,"Top-Right")),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleClick({vertical:"bottom",horizontal:"right"})},r.a.createElement("span",null,"Bottom-Right")),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleClick({vertical:"bottom",horizontal:"center"})},r.a.createElement("span",null,"Bottom-Center")),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleClick({vertical:"bottom",horizontal:"left"})},r.a.createElement("span",null,"Bottom-Left")),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleClick({vertical:"top",horizontal:"left"})},r.a.createElement("span",null,"Top-Left")),r.a.createElement(u.a,{anchorOrigin:{vertical:a,horizontal:t},open:n,onClose:this.handleRequestClose,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},"I love snacks")}))}}]),a}(n.Component),E=t(350);function g(e){return r.a.createElement(E.a,Object.assign({},e,{direction:"left"}))}function j(e){return r.a.createElement(E.a,Object.assign({},e,{direction:"up"}))}function O(e){return r.a.createElement(E.a,Object.assign({},e,{direction:"right"}))}function y(e){return r.a.createElement(E.a,Object.assign({},e,{direction:"down"}))}var k=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={open:!1,Transition:null},t.handleClick=function(e){return function(){t.setState({open:!0,Transition:e})}},t.handleClose=function(){t.setState({open:!1})},t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.a,{variant:"contained",className:"mb-1 mr-3",color:"primary",onClick:this.handleClick(g)},r.a.createElement("i",{className:"zmdi zmdi-long-arrow-right zmdi-hc-fw "}),r.a.createElement("span",null,"Right")),r.a.createElement(m.a,{variant:"contained",className:"mb-1 mr-3",color:"primary",onClick:this.handleClick(j)},r.a.createElement("i",{className:"zmdi zmdi-long-arrow-up zmdi-hc-fw "}),r.a.createElement("span",null,"Up")),r.a.createElement(m.a,{variant:"contained",className:"mb-1 mr-3",color:"primary",onClick:this.handleClick(O)},r.a.createElement("i",{className:"zmdi zmdi-long-arrow-left zmdi-hc-fw "}),r.a.createElement("span",null,"Left")),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleClick(y)},r.a.createElement("i",{className:"zmdi zmdi-long-arrow-down zmdi-hc-fw "}),r.a.createElement("span",null,"Down")),r.a.createElement(u.a,{open:this.state.open,onClose:this.handleClose,TransitionComponent:this.state.Transition,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},"I love snacks")}))}}]),a}(r.a.Component),C=t(352),N=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={open:!1},t.handleClick=function(){t.setState({open:!0})},t.handleRequestClose=function(){t.setState({open:!1})},t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleClick},r.a.createElement("span",null,"Fade")),r.a.createElement(u.a,{open:this.state.open,onClose:this.handleRequestClose,TransitionComponent:C.a,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},"I love snacks")}))}}]),a}(n.Component),w=t(436),x=t(432),z=t(1536),I=t(4),L=r.a.createElement(m.a,{variant:"contained",color:"secondary",size:"small"},"Click"),T=r.a.createElement(d.a,{color:"secondary"},r.a.createElement("i",{className:"zmdi zmdi-alarm-snooze"}));a.default=function(e){var a=e.match;return r.a.createElement("div",null,r.a.createElement(x.a,{title:r.a.createElement(I.a,{id:"sidebar.components.snackbars"}),match:a}),r.a.createElement("div",{className:"row"},r.a.createElement(w.a,{styleName:"col-lg-6 col-12 text-center",childrenStyle:"d-flex justify-content-center",heading:r.a.createElement(I.a,{id:"component.snackbars.simple"})},r.a.createElement("div",{className:"d-flex flex-row manage-margin"},r.a.createElement(b,null,r.a.createElement("span",null,"Slide")),r.a.createElement(N,null))),r.a.createElement(w.a,{styleName:"col-lg-6 col-12 text-center",childrenStyle:"d-flex justify-content-center",heading:r.a.createElement(I.a,{id:"component.snackbars.transition"})},r.a.createElement(k,null))),r.a.createElement("div",{className:"row"},r.a.createElement(w.a,{styleName:"col-lg-12",heading:r.a.createElement(I.a,{id:"component.snackbars.positioned"})},r.a.createElement(v,null))),r.a.createElement("div",{className:"row"},r.a.createElement(w.a,{styleName:"col-lg-6 col-12 text-center",heading:r.a.createElement(I.a,{id:"component.snackbars.onlyMessage"})},r.a.createElement(z.a,{className:"mb-2",message:"Various versions have evolved over the years."})),r.a.createElement(w.a,{styleName:"col-lg-6 col-12 text-center",heading:r.a.createElement(I.a,{id:"component.snackbars.messageWithButton"})},r.a.createElement(z.a,{className:"mb-2",message:"All the Lorem Ipsum generators.",action:L}))),r.a.createElement("div",{className:"row"},r.a.createElement(w.a,{styleName:"col-lg-6 col-12 text-center",heading:r.a.createElement(I.a,{id:"component.snackbars.withIconButton"})},r.a.createElement(z.a,{className:"mb-2",message:"All the Lorem Ipsum generators.",action:T})),r.a.createElement(w.a,{styleName:"col-lg-6 col-12 text-center",heading:r.a.createElement(I.a,{id:"component.snackbars.multilineText"})},r.a.createElement(z.a,{className:"mb-2",message:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary generator on the Internet."}))),r.a.createElement("div",{className:"row"},r.a.createElement(w.a,{styleName:"col-12 text-center",cardStyle:"mb-0",heading:r.a.createElement(I.a,{id:"component.snackbars.colors"})},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-12"},r.a.createElement(z.a,{className:"mb-3 bg-primary",message:"I love candy. I love cookies. I love cupcakes."})),r.a.createElement("div",{className:"col-md-6 col-12"},r.a.createElement(z.a,{className:"mb-3 bg-secondary",message:"I love candy. I love cookies. I love cupcakes."})),r.a.createElement("div",{className:"col-md-6 col-12"},r.a.createElement(z.a,{className:"mb-3 bg-warning",message:"I love candy. I love cookies. I love cupcakes."})),r.a.createElement("div",{className:"col-md-6 col-12"},r.a.createElement(z.a,{className:"mb-3 bg-light text-black",message:"I love candy. I love cookies. I love cupcakes."})),r.a.createElement("div",{className:"col-md-6 col-12"},r.a.createElement(z.a,{className:"mb-3 bg-info",message:"I love candy. I love cookies. I love cupcakes."})),r.a.createElement("div",{className:"col-md-6 col-12"},r.a.createElement(z.a,{className:"mb-3 bg-danger",message:"I love candy. I love cookies. I love cupcakes."}))))))}},432:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(474),l=t(475),o=function(e,a,t){return 0===t?"#/":"#/"+e.split(a)[0]+a};a.a=function(e){var a=e.title,t=e.match.path.substr(1),n=t.split("/");return r.a.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},r.a.createElement("h2",{className:"title mb-3 mb-sm-0"},a),r.a.createElement(c.a,{className:"mb-0",tag:"nav"},n.map((function(e,a){return r.a.createElement(l.a,{active:n.length===a+1,tag:n.length===a+1?"span":"a",key:a,href:o(t,e,a)},function(e){var a=e.split("-");return a.length>1?a[0].charAt(0).toUpperCase()+a[0].slice(1)+" "+a[1].charAt(0).toUpperCase()+a[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)}(e))}))))}},436:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=function(e){var a=e.heading,t=e.children,n=e.styleName,c=e.cardStyle,l=e.childrenStyle,o=e.headerOutside,i=e.headingStyle;return r.a.createElement("div",{className:"".concat(n)},o&&r.a.createElement("div",{className:"jr-entry-header"},r.a.createElement("h3",{className:"entry-heading"},a),t.length>1&&r.a.createElement("div",{className:"entry-description"},t[0])),r.a.createElement("div",{className:"jr-card ".concat(c)},!o&&a&&r.a.createElement("div",{className:"jr-card-header ".concat(i)},r.a.createElement("h3",{className:"card-heading"},a),t.length>1&&r.a.createElement("div",{className:"sub-heading"},t[0])),r.a.createElement("div",{className:"jr-card-body ".concat(l)},t.length>1?t[1]:t)))};a.a=c,c.defaultProps={cardStyle:"",headingStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"}},474:function(e,a,t){"use strict";var n=t(3),r=t(25),c=t(0),l=t.n(c),o=t(2),i=t.n(o),s=t(55),m=t.n(s),u=t(20),d={tag:u.p,listTag:u.p,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},p=function(e){var a=e.className,t=e.listClassName,c=e.cssModule,o=e.children,i=e.tag,s=e.listTag,d=e["aria-label"],p=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),h=Object(u.l)(m()(a),c),b=Object(u.l)(m()("breadcrumb",t),c);return l.a.createElement(i,Object(n.a)({},p,{className:h,"aria-label":d}),l.a.createElement(s,{className:b},o))};p.propTypes=d,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=p},475:function(e,a,t){"use strict";var n=t(3),r=t(25),c=t(0),l=t.n(c),o=t(2),i=t.n(o),s=t(55),m=t.n(s),u=t(20),d={tag:u.p,active:i.a.bool,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,c=e.active,o=e.tag,i=Object(r.a)(e,["className","cssModule","active","tag"]),s=Object(u.l)(m()(a,!!c&&"active","breadcrumb-item"),t);return l.a.createElement(o,Object(n.a)({},i,{className:s,"aria-current":c?"page":void 0}))};p.propTypes=d,p.defaultProps={tag:"li"},a.a=p},843:function(e,a,t){"use strict";var n=t(97);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(173)).default)(r.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");a.default=c}}]);