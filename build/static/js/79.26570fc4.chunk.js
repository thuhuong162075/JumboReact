(this["webpackJsonpjumbo-hooks"]=this["webpackJsonpjumbo-hooks"]||[]).push([[79],{1314:function(e,t,a){"use strict";var n=a(64),l=a(65),r=a(67),c=a(66),o=a(68),i=a(0),s=a.n(i),u=a(398),m=a(1404),h=a(1406),d=a(1405),p=a(1758),E=a(1457),v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),i=0;i<l;i++)o[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1},a.handleRequestClose=function(){a.setState({open:!1})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(u.a,{variant:"contained",className:"bg-primary text-white",onClick:function(){return e.setState({open:!0})}},"Open alert dialog"),s.a.createElement(m.a,{open:this.state.open,onClose:this.handleRequestClose},s.a.createElement(E.a,null,"Use Google's location service?"),s.a.createElement(d.a,null,s.a.createElement(p.a,null,"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")),s.a.createElement(h.a,null,s.a.createElement(u.a,{onClick:this.handleRequestClose,color:"secondary"},"Disagree"),s.a.createElement(u.a,{onClick:this.handleRequestClose,color:"primary"},"Agree"))))}}]),t}(i.Component);t.a=v},1315:function(e,t,a){"use strict";var n=a(64),l=a(65),r=a(67),c=a(66),o=a(68),i=a(0),s=a.n(i),u=a(398),m=a(1404),h=a(1406),d=a(1405),p=a(1758),E=a(1457),v=a(350),y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),i=0;i<l;i++)o[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1},a.handleRequestClose=function(){a.setState({open:!1})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(u.a,{variant:"contained",className:"bg-primary text-white",onClick:function(){return e.setState({open:!0})}},"Slide in alert dialog"),s.a.createElement(m.a,{open:this.state.open,TransitionComponent:v.a,onClose:this.handleRequestClose},s.a.createElement(E.a,null,"Use Google's location service?"),s.a.createElement(d.a,null,s.a.createElement(p.a,null,"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")),s.a.createElement(h.a,null,s.a.createElement(u.a,{onClick:this.handleRequestClose,color:"secondary"},"Disagree"),s.a.createElement(u.a,{onClick:this.handleRequestClose,color:"primary"},"Agree"))))}}]),t}(i.Component);t.a=y},1316:function(e,t,a){"use strict";var n=a(183),l=a(64),r=a(65),c=a(67),o=a(66),i=a(68),s=a(0),u=a.n(s),m=a(398),h=a(397),d=a(348),p=a(982),E=a(1404),v=a(1405),y=a(1406),b=a(1457),f=a(413),C=a(406),g=a(407),O=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"],j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={value:void 0},a.radioGroup=null,a.handleEntering=function(){a.radioGroup.focus()},a.handleCancel=function(){a.props.onClose(a.props.value)},a.handleOk=function(){a.props.onClose(a.state.value)},a.handleChange=function(e,t){a.setState({value:t})},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){this.setState({value:this.props.value})}},{key:"componentWillUpdate",value:function(e){e.value!==this.props.value&&this.setState({value:e.value})}},{key:"render",value:function(){var e=this,t=this.props,a=(t.value,Object(n.a)(t,["value"]));return u.a.createElement(E.a,Object.assign({disableBackdropClick:!0,disableEscapeKeyDown:!0,maxWidth:"xs",onEntering:this.handleEntering},a),u.a.createElement(b.a,null,"Phone Ringtone"),u.a.createElement(v.a,null,u.a.createElement(C.a,{ref:function(t){e.radioGroup=t},"aria-label":"ringtone",name:"ringtone",value:this.state.value,onChange:this.handleChange},O.map((function(e){return u.a.createElement(g.a,{value:e,key:e,control:u.a.createElement(f.a,null),label:e})})))),u.a.createElement(y.a,null,u.a.createElement(m.a,{onClick:this.handleCancel,color:"secondary"},"Cancel"),u.a.createElement(m.a,{onClick:this.handleOk,color:"primary"},"Ok")))}}]),t}(u.a.Component),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,value:"Dione"},a.button=void 0,a.handleClickListItem=function(){a.setState({open:!0})},a.handleRequestClose=function(e){a.setState({value:e,open:!1})},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"d-inline-block w-100"},u.a.createElement(h.a,null,u.a.createElement(d.a,{button:!0,divider:!0,disabled:!0},u.a.createElement(p.a,{primary:"Interruptions"})),u.a.createElement(d.a,{button:!0,divider:!0,"aria-haspopup":!0,"aria-controls":"ringtone-menu","aria-label":"Phone ringtone",onClick:this.handleClickListItem},u.a.createElement(p.a,{primary:"Phone ringtone",secondary:this.state.value})),u.a.createElement(d.a,{button:!0,divider:!0,disabled:!0},u.a.createElement(p.a,{primary:"Default notification ringtone",secondary:"Tethys"})),u.a.createElement(j,{open:this.state.open,onClose:this.handleRequestClose,value:this.state.value})))}}]),t}(u.a.Component);t.a=k},1317:function(e,t,a){"use strict";var n=a(64),l=a(65),r=a(67),c=a(66),o=a(68),i=a(0),s=a.n(i),u=a(398),m=a(1404),h=a(397),d=a(348),p=a(982),E=a(961),v=a(401),y=a(402),b=a(232),f=a(354),C=a(843),g=a.n(C),O=a(350);function j(e){return s.a.createElement(O.a,Object.assign({direction:"up"},e))}var k=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),i=0;i<l;i++)o[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1},a.handleClickOpen=function(){a.setState({open:!0})},a.handleRequestClose=function(){a.setState({open:!1})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(u.a,{variant:"contained",className:"bg-primary text-white",onClick:this.handleClickOpen},"full-screen dialog"),s.a.createElement(m.a,{fullScreen:!0,open:this.state.open,onClose:this.handleRequestClose,TransitionComponent:j},s.a.createElement(v.a,{className:"position-relative"},s.a.createElement(y.a,null,s.a.createElement(b.a,{onClick:this.handleRequestClose,"aria-label":"Close"},s.a.createElement(g.a,null)),s.a.createElement(f.a,{variant:"title",color:"inherit",style:{flex:1}},"Sound"),s.a.createElement(u.a,{onClick:this.handleRequestClose},"save"))),s.a.createElement(h.a,null,s.a.createElement(d.a,{button:!0},s.a.createElement(p.a,{primary:"Phone ringtone",secondary:"Titania"})),s.a.createElement(E.a,null),s.a.createElement(d.a,{button:!0},s.a.createElement(p.a,{primary:"Default notification ringtone",secondary:"Tethys"})))))}}]),t}(s.a.Component);t.a=k},1318:function(e,t,a){"use strict";var n=a(64),l=a(65),r=a(67),c=a(66),o=a(68),i=a(0),s=a.n(i),u=a(398),m=a(392),h=a(1404),d=a(1406),p=a(1405),E=a(1758),v=a(1457),y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),i=0;i<l;i++)o[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1},a.handleClickOpen=function(){a.setState({open:!0})},a.handleRequestClose=function(){a.setState({open:!1})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(u.a,{variant:"contained",className:"bg-primary text-white",onClick:this.handleClickOpen},"Open form dialog"),s.a.createElement(h.a,{open:this.state.open,onClose:this.handleRequestClose},s.a.createElement(v.a,null,"Subscribe"),s.a.createElement(p.a,null,s.a.createElement(E.a,null,"To subscribe to this website, please enter your email address here. We will send updates occationally."),s.a.createElement(m.a,{autoFocus:!0,margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0})),s.a.createElement(d.a,null,s.a.createElement(u.a,{onClick:this.handleRequestClose,color:"secondary"},"Cancel"),s.a.createElement(u.a,{onClick:this.handleRequestClose,color:"primary"},"Subscribe"))))}}]),t}(s.a.Component);t.a=y},1393:function(e,t,a){"use strict";var n=a(64),l=a(65),r=a(67),c=a(66),o=a(68),i=a(0),s=a.n(i),u=a(398),m=a(354),h=a(183),d=a(358),p=a(397),E=a(348),v=a(1312),y=a(982),b=a(1404),f=a(1457),C=a(1313),g=a.n(C),O=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),i=0;i<l;i++)o[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).handleRequestClose=function(){a.props.onClose(a.props.selectedValue)},a.handleListItemClick=function(e){a.props.onClose(e)},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=(t.classes,t.users),n=(t.onClose,t.selectedValue,Object(h.a)(t,["classes","users","onClose","selectedValue"]));return s.a.createElement(b.a,Object.assign({onClose:this.handleRequestClose},n),s.a.createElement(f.a,null,"Set backup account"),s.a.createElement("div",null,s.a.createElement(p.a,null,a.map((function(t){return s.a.createElement(E.a,{button:!0,onClick:function(){return e.handleListItemClick(t.email)},key:t.email},s.a.createElement(v.a,null,s.a.createElement(d.a,{alt:"Remy Sharp",src:t.image})),s.a.createElement(y.a,{primary:t.email}))})),s.a.createElement(E.a,{button:!0,onClick:function(){return e.handleListItemClick("addAccount")}},s.a.createElement(v.a,null,s.a.createElement(d.a,null,s.a.createElement(g.a,null))),s.a.createElement(y.a,{primary:"Add Account"})))))}}]),t}(i.Component),j=[{image:a(63),email:"jhonsmith@example.com"},{image:a(40),email:"stella02@example.com"},{image:a(124),email:"chrris0254@example.com"}],k=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),i=0;i<l;i++)o[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1,selectedValue:j[1].email},a.handleRequestClose=function(e){a.setState({selectedValue:e,open:!1})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(m.a,{variant:"subtitle1"},"Selected: ",this.state.selectedValue),s.a.createElement("br",null),s.a.createElement(u.a,{variant:"contained",className:"bg-primary text-white",onClick:function(){return e.setState({open:!0})}},"Open simple dialog"),s.a.createElement(O,{users:j,selectedValue:this.state.selectedValue,open:this.state.open,onClose:this.handleRequestClose.bind(this)}))}}]),t}(i.Component);t.a=k},1967:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(436),c=a(432),o=a(1393),i=a(1314),s=a(1315),u=a(1316),m=a(1317),h=a(1318),d=a(4);t.default=function(e){var t=e.match;return l.a.createElement("div",{className:"animated slideInUpTiny animation-duration-3"},l.a.createElement(c.a,{title:l.a.createElement(d.a,{id:"sidebar.components.dialogs"}),match:t}),l.a.createElement("div",{className:"row"},l.a.createElement(r.a,{styleName:"col-lg-3 col-sm-6",cardStyle:"py-sm-5",childrenStyle:"text-center"},l.a.createElement(i.a,null)),l.a.createElement(r.a,{styleName:"col-lg-3 col-sm-6",cardStyle:"py-sm-5",childrenStyle:"text-center"},l.a.createElement(s.a,null)),l.a.createElement(r.a,{styleName:"col-lg-3 col-sm-6",cardStyle:"py-sm-5",childrenStyle:"text-center"},l.a.createElement(m.a,null)),l.a.createElement(r.a,{styleName:"col-lg-3 col-sm-6",cardStyle:"py-sm-5",childrenStyle:"text-center"},l.a.createElement(h.a,null))),l.a.createElement("div",{className:"row"},l.a.createElement(r.a,{styleName:"col-md-6",cardStyle:"mb-md-0",childrenStyle:"text-center"},l.a.createElement(o.a,null)),l.a.createElement(r.a,{styleName:"col-lg-3 col-md-6",cardStyle:"p-0 mb-0",childrenStyle:"text-center"},l.a.createElement(u.a,null))))}},432:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(474),c=a(475),o=function(e,t,a){return 0===a?"#/":"#/"+e.split(t)[0]+t};t.a=function(e){var t=e.title,a=e.match.path.substr(1),n=a.split("/");return l.a.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},l.a.createElement("h2",{className:"title mb-3 mb-sm-0"},t),l.a.createElement(r.a,{className:"mb-0",tag:"nav"},n.map((function(e,t){return l.a.createElement(c.a,{active:n.length===t+1,tag:n.length===t+1?"span":"a",key:t,href:o(a,e,t)},function(e){var t=e.split("-");return t.length>1?t[0].charAt(0).toUpperCase()+t[0].slice(1)+" "+t[1].charAt(0).toUpperCase()+t[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)}(e))}))))}},436:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=function(e){var t=e.heading,a=e.children,n=e.styleName,r=e.cardStyle,c=e.childrenStyle,o=e.headerOutside,i=e.headingStyle;return l.a.createElement("div",{className:"".concat(n)},o&&l.a.createElement("div",{className:"jr-entry-header"},l.a.createElement("h3",{className:"entry-heading"},t),a.length>1&&l.a.createElement("div",{className:"entry-description"},a[0])),l.a.createElement("div",{className:"jr-card ".concat(r)},!o&&t&&l.a.createElement("div",{className:"jr-card-header ".concat(i)},l.a.createElement("h3",{className:"card-heading"},t),a.length>1&&l.a.createElement("div",{className:"sub-heading"},a[0])),l.a.createElement("div",{className:"jr-card-body ".concat(c)},a.length>1?a[1]:a)))};t.a=r,r.defaultProps={cardStyle:"",headingStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"}}}]);