(this["webpackJsonpjumbo-hooks"]=this["webpackJsonpjumbo-hooks"]||[]).push([[90],{1243:function(e,a,t){"use strict";var n=t(97);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),r=(0,n(t(173)).default)(l.default.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");a.default=r},2379:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(64),c=t(65),s=t(67),i=t(66),o=t(68),m=t(398),d=t(148),u=t(149),h=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={anchorEl:void 0,open:!1},t.handleClick=function(e){t.setState({open:!0,anchorEl:e.currentTarget})},t.handleRequestClose=function(){t.setState({open:!1})},t}return Object(o.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(m.a,{"aria-owns":this.state.open?"simple-SidenavContent.js":null,"aria-haspopup":!0,onClick:this.handleClick},"Open Menu"),l.a.createElement(d.a,{id:"simple-menu",anchorEl:this.state.anchorEl,open:this.state.open,onClose:this.handleRequestClose},l.a.createElement(u.a,{onClick:this.handleRequestClose},"Profile"),l.a.createElement(u.a,{onClick:this.handleRequestClose},"My account"),l.a.createElement(u.a,{onClick:this.handleRequestClose},"Logout")))}}]),a}(n.Component),p=t(397),y=t(348),E=t(982),v=["Show all notification content","Hide sensitive Information","Hide all notification content"],b=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={anchorEl:void 0,open:!1,selectedIndex:1},t.button=void 0,t.handleClickListItem=function(e){t.setState({open:!0,anchorEl:e.currentTarget})},t.handleMenuItemClick=function(e,a){t.setState({selectedIndex:a,open:!1})},t.handleRequestClose=function(){t.setState({open:!1})},t}return Object(o.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement(y.a,{button:!0,"aria-haspopup":!0,"aria-controls":"lock-menu","aria-label":"On Device Lock",onClick:this.handleClickListItem},l.a.createElement(E.a,{primary:"On Device Lock",secondary:v[this.state.selectedIndex]}))),l.a.createElement(d.a,{id:"lock-menu",anchorEl:this.state.anchorEl,open:this.state.open,onClose:this.handleRequestClose},v.map((function(a,t){return l.a.createElement(u.a,{key:a,selected:t===e.state.selectedIndex,onClick:function(a){return e.handleMenuItemClick(a,t)}},a)}))))}}]),a}(n.Component),g=t(232),f=t(1243),N=t.n(f),C=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"],j=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={anchorEl:void 0,open:!1},t.handleClick=function(e){t.setState({open:!0,anchorEl:e.currentTarget})},t.handleRequestClose=function(){t.setState({open:!1})},t}return Object(o.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(g.a,{"aria-label":"More","aria-owns":this.state.open?"long-SidenavContent.js":null,"aria-haspopup":!0,onClick:this.handleClick},l.a.createElement(N.a,null)),l.a.createElement(d.a,{id:"long-menu",anchorEl:this.state.anchorEl,open:this.state.open,onClose:this.handleRequestClose,MenuListProps:{style:{width:200}}},C.map((function(a){return l.a.createElement(u.a,{key:a,selected:"Pyxis"===a,onClick:e.handleRequestClose},a)}))))}}]),a}(n.Component),O=t(436),k=t(432),S=t(209),T=t(171);var P=function(){return l.a.createElement("div",{className:"manage-margin d-flex"},l.a.createElement(T.a,{className:"size-120",elevation:0}),l.a.createElement(T.a,{className:"size-120",elevation:2}),l.a.createElement(T.a,{className:"size-120",elevation:4}),l.a.createElement(T.a,{className:"size-120",elevation:8}),l.a.createElement(T.a,{className:"size-120",elevation:16}))},w=t(4);a.default=function(e){var a=e.match;return l.a.createElement("div",{className:"animated slideInUpTiny animation-duration-3"},l.a.createElement(k.a,{title:l.a.createElement(w.a,{id:"sidebar.components.menusPaper"}),match:a}),l.a.createElement("div",{className:"row"},l.a.createElement(O.a,{styleName:"col-lg-3 col-md-6",cardStyle:"py-sm-5 text-center",heading:l.a.createElement(w.a,{id:"component.menusPaper.simple"}),headerOutside:!0},l.a.createElement(h,null)),l.a.createElement(O.a,{styleName:"col-lg-3 col-md-6",cardStyle:"d-flex justify-content-center",heading:l.a.createElement(w.a,{id:"component.menusPaper.withIcon"}),headerOutside:!0},l.a.createElement(S.a,null)),l.a.createElement(O.a,{styleName:"col-lg-3 col-md-6",cardStyle:"py-sm-5 text-center",heading:l.a.createElement(w.a,{id:"component.menusPaper.withMoreButton"}),headerOutside:!0},l.a.createElement(j,null)),l.a.createElement(O.a,{styleName:"col-lg-3 col-md-6",cardStyle:"py-sm-3 text-center",heading:l.a.createElement(w.a,{id:"component.menusPaper.withSelectedValue"}),headerOutside:!0},l.a.createElement(b,null))),l.a.createElement("div",{className:"row"},l.a.createElement(O.a,{styleName:"col-lg-12",cardStyle:"p-0 bg-transparent no-shadow mb-0",heading:l.a.createElement(w.a,{id:"component.menusPaper.paper"}),headerOutside:!0},l.a.createElement(P,null))))}},432:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(474),c=t(475),s=function(e,a,t){return 0===t?"#/":"#/"+e.split(a)[0]+a};a.a=function(e){var a=e.title,t=e.match.path.substr(1),n=t.split("/");return l.a.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},l.a.createElement("h2",{className:"title mb-3 mb-sm-0"},a),l.a.createElement(r.a,{className:"mb-0",tag:"nav"},n.map((function(e,a){return l.a.createElement(c.a,{active:n.length===a+1,tag:n.length===a+1?"span":"a",key:a,href:s(t,e,a)},function(e){var a=e.split("-");return a.length>1?a[0].charAt(0).toUpperCase()+a[0].slice(1)+" "+a[1].charAt(0).toUpperCase()+a[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)}(e))}))))}},436:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=function(e){var a=e.heading,t=e.children,n=e.styleName,r=e.cardStyle,c=e.childrenStyle,s=e.headerOutside,i=e.headingStyle;return l.a.createElement("div",{className:"".concat(n)},s&&l.a.createElement("div",{className:"jr-entry-header"},l.a.createElement("h3",{className:"entry-heading"},a),t.length>1&&l.a.createElement("div",{className:"entry-description"},t[0])),l.a.createElement("div",{className:"jr-card ".concat(r)},!s&&a&&l.a.createElement("div",{className:"jr-card-header ".concat(i)},l.a.createElement("h3",{className:"card-heading"},a),t.length>1&&l.a.createElement("div",{className:"sub-heading"},t[0])),l.a.createElement("div",{className:"jr-card-body ".concat(c)},t.length>1?t[1]:t)))};a.a=r,r.defaultProps={cardStyle:"",headingStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"}},474:function(e,a,t){"use strict";var n=t(3),l=t(25),r=t(0),c=t.n(r),s=t(2),i=t.n(s),o=t(55),m=t.n(o),d=t(20),u={tag:d.p,listTag:d.p,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},h=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,s=e.children,i=e.tag,o=e.listTag,u=e["aria-label"],h=Object(l.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(d.l)(m()(a),r),y=Object(d.l)(m()("breadcrumb",t),r);return c.a.createElement(i,Object(n.a)({},h,{className:p,"aria-label":u}),c.a.createElement(o,{className:y},s))};h.propTypes=u,h.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=h},475:function(e,a,t){"use strict";var n=t(3),l=t(25),r=t(0),c=t.n(r),s=t(2),i=t.n(s),o=t(55),m=t.n(o),d=t(20),u={tag:d.p,active:i.a.bool,className:i.a.string,cssModule:i.a.object},h=function(e){var a=e.className,t=e.cssModule,r=e.active,s=e.tag,i=Object(l.a)(e,["className","cssModule","active","tag"]),o=Object(d.l)(m()(a,!!r&&"active","breadcrumb-item"),t);return c.a.createElement(s,Object(n.a)({},i,{className:o,"aria-current":r?"page":void 0}))};h.propTypes=u,h.defaultProps={tag:"li"},a.a=h},982:function(e,a,t){"use strict";var n=t(3),l=t(9),r=t(0),c=(t(2),t(10)),s=t(13),i=t(354),o=t(99),m=r.forwardRef((function(e,a){var t=e.children,s=e.classes,m=e.className,d=e.disableTypography,u=void 0!==d&&d,h=e.inset,p=void 0!==h&&h,y=e.primary,E=e.primaryTypographyProps,v=e.secondary,b=e.secondaryTypographyProps,g=Object(l.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),f=r.useContext(o.a).dense,N=null!=y?y:t;null==N||N.type===i.a||u||(N=r.createElement(i.a,Object(n.a)({variant:f?"body2":"body1",className:s.primary,component:"span"},E),N));var C=v;return null==C||C.type===i.a||u||(C=r.createElement(i.a,Object(n.a)({variant:"body2",className:s.secondary,color:"textSecondary"},b),C)),r.createElement("div",Object(n.a)({className:Object(c.a)(s.root,m,f&&s.dense,p&&s.inset,N&&C&&s.multiline),ref:a},g),N,C)}));a.a=Object(s.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(m)}}]);