(this["webpackJsonpjumbo-hooks"]=this["webpackJsonpjumbo-hooks"]||[]).push([[139],{2421:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(798),c={lat:49.2853171,lng:-123.1119202},i={overlayView:{background:"red",color:"white",padding:5,borderRadius:"50%"}};function s(e,a){return{x:-e/2,y:-a/2}}var m=Object(l.withGoogleMap)((function(e){return r.a.createElement(l.GoogleMap,{defaultZoom:8,defaultCenter:c},r.a.createElement(l.StreetViewPanorama,{defaultPosition:c,visible:!0},r.a.createElement(l.OverlayView,{position:{lat:49.28590291211115,lng:-123.11248166065218},mapPaneName:l.OverlayView.OVERLAY_LAYER,getPixelPositionOffset:s},r.a.createElement("div",{style:i.overlayView},"OverlayView"))))})),o=function(){return r.a.createElement(m,{containerElement:r.a.createElement("div",{className:"embed-responsive embed-responsive-21by9"}),mapElement:r.a.createElement("div",{className:"embed-responsive-item"})})},d=t(436),u=t(432),h=t(4);a.default=function(e){var a=e.match;return r.a.createElement("div",{className:"animated slideInUpTiny animation-duration-3"},r.a.createElement(u.a,{title:r.a.createElement(h.a,{id:"sidebar.map.streetView"}),match:a}),r.a.createElement("div",{className:"row"},r.a.createElement(d.a,{styleName:"col-lg-12",cardStyle:"mb-0",heading:"Street View Panorama",headerOutside:!0},r.a.createElement(o,null))))}},432:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(474),c=t(475),i=function(e,a,t){return 0===t?"#/":"#/"+e.split(a)[0]+a};a.a=function(e){var a=e.title,t=e.match.path.substr(1),n=t.split("/");return r.a.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},r.a.createElement("h2",{className:"title mb-3 mb-sm-0"},a),r.a.createElement(l.a,{className:"mb-0",tag:"nav"},n.map((function(e,a){return r.a.createElement(c.a,{active:n.length===a+1,tag:n.length===a+1?"span":"a",key:a,href:i(t,e,a)},function(e){var a=e.split("-");return a.length>1?a[0].charAt(0).toUpperCase()+a[0].slice(1)+" "+a[1].charAt(0).toUpperCase()+a[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)}(e))}))))}},436:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=function(e){var a=e.heading,t=e.children,n=e.styleName,l=e.cardStyle,c=e.childrenStyle,i=e.headerOutside,s=e.headingStyle;return r.a.createElement("div",{className:"".concat(n)},i&&r.a.createElement("div",{className:"jr-entry-header"},r.a.createElement("h3",{className:"entry-heading"},a),t.length>1&&r.a.createElement("div",{className:"entry-description"},t[0])),r.a.createElement("div",{className:"jr-card ".concat(l)},!i&&a&&r.a.createElement("div",{className:"jr-card-header ".concat(s)},r.a.createElement("h3",{className:"card-heading"},a),t.length>1&&r.a.createElement("div",{className:"sub-heading"},t[0])),r.a.createElement("div",{className:"jr-card-body ".concat(c)},t.length>1?t[1]:t)))};a.a=l,l.defaultProps={cardStyle:"",headingStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"}}}]);