(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(e,n,t){e.exports=t(30)},27:function(e,n,t){},28:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(3),i=t.n(a),c=t(4),s=t(1),l=t(11),u=t(12),d=(t(27),t(13)),h=t(14),f=t(16),b=t(15),g=function(e){var n=e.name,t=e.email,o=e.id;return r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,t)))},p=function(e){var n=e.robots;return r.a.createElement("div",null,n.map((function(e,t){return r.a.createElement(g,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})})))},E=function(e){e.searchfield;var n=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},m=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},v=(t(28),function(e){Object(f.a)(t,e);var n=Object(b.a)(t);function t(){return Object(d.a)(this,t),n.apply(this,arguments)}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,o=e.robots,a=e.isPending,i=o.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(E,{searchChange:t}),r.a.createElement(m,null,r.a.createElement(p,{robots:i})))}}]),t}(o.Component)),w=Object(c.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCHFIELD",payload:n.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})}))}))}}}))(v),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var y=t(2),S={searchField:""},j={isPending:!1,robots:[],error:""},C=(t(29),Object(l.createLogger)()),_=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCHFIELD":return Object(y.a)({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object(y.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(y.a)({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(y.a)({},e,{error:n.payload,isPending:!1});default:return e}}}),N=Object(s.d)(_,Object(s.a)(u.a,C));i.a.render(r.a.createElement(c.a,{store:N},r.a.createElement(w,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robofriends","/service-worker.js");O?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):R(e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.25def128.chunk.js.map