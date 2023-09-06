"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[917],{22:function(n,e,t){t.d(e,{Hx:function(){return f},Mc:function(){return s},vw:function(){return u},wr:function(){return c},xc:function(){return p}});var r=t(861),i=t(687),a=t.n(i),o=t(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/",o.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWVlZWU2MWE5YzQ0ZDg3MDU2MGU5MDk3YWYzOWFiYSIsInN1YiI6IjY0ZWRkZDMzNTI1OGFlMDEyY2E2YzI4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DwVyqR8KU5ITMf03TmwDmKexNT2Ro5Hf1FcrLtmXnOE";var u=function(){var n=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie",{params:{query:e,language:"en-US",include_adult:!1}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/movie/day",{params:{language:"en-US",include_adult:!1}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/credits"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/reviews"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},126:function(n,e,t){var r=t(689),i=t(87),a=t(184);e.Z=function(n){var e=n.id,t=n.title,o=(0,r.TH)(),u=o.pathname,c=o.search;return(0,a.jsx)("li",{children:(0,a.jsx)(i.rU,{to:"/movies/".concat(e),state:{from:u+c},children:t})})}},917:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var r,i,a,o,u=t(861),c=t(439),s=t(687),p=t.n(s),f=t(14),l=t(728),d=t(168),h=t(686),x=h.Z.header(r||(r=(0,d.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #e4e4e4;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),m=h.Z.form(i||(i=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),v=h.Z.button(a||(a=(0,d.Z)(["\n  display: inline-block;\n  width: 100px;\n  height: 48px;\n  border: 0;\n  opacity: 0.6;\n  background-color: #8298d1;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n"]))),g=h.Z.input(o||(o=(0,d.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),b=t(184),w=function(n){var e=n.onSubmit;return(0,b.jsx)(x,{children:(0,b.jsxs)(m,{onSubmit:e,children:[(0,b.jsx)(g,{type:"text",name:"query",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,b.jsxs)(v,{type:"submit",children:[(0,b.jsx)(l.Vph,{size:25})," Search"]})]})})},Z=t(791),y=t(22),k=t(126),j=t(87),I=function(){var n,e=(0,Z.useState)([]),t=(0,c.Z)(e,2),r=t[0],i=t[1],a=(0,j.lr)(),o=(0,c.Z)(a,2),s=o[0],l=o[1],d=null!==(n=s.get("query"))&&void 0!==n?n:"";(0,Z.useEffect)((function(){var n=function(){var n=(0,u.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,y.vw)(d);case 3:if(200===(e=n.sent).status){n.next=6;break}throw new Error;case 6:i(e.data.results),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0),f.Am.error("Something went wrong! Reload the page or try again later");case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();""!==d&&n()}),[d]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(w,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.query.value.trim();l({query:e}),n.target.reset()}}),(0,b.jsx)("ul",{children:r.map((function(n){var e=n.original_title,t=n.id;return(0,b.jsx)(k.Z,{id:t,title:e},t)}))})]})}}}]);
//# sourceMappingURL=917.8a393e31.chunk.js.map