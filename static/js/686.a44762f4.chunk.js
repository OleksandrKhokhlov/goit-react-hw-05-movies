"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[686],{22:function(n,e,r){r.d(e,{Hx:function(){return p},Mc:function(){return u},vw:function(){return s},wr:function(){return o},xc:function(){return l}});var t=r(861),a=r(687),c=r.n(a),i=r(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWVlZWU2MWE5YzQ0ZDg3MDU2MGU5MDk3YWYzOWFiYSIsInN1YiI6IjY0ZWRkZDMzNTI1OGFlMDEyY2E2YzI4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DwVyqR8KU5ITMf03TmwDmKexNT2Ro5Hf1FcrLtmXnOE";var s=function(){var n=(0,t.Z)(c().mark((function n(e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie",{params:{query:e,language:"en-US",include_adult:!1}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day",{params:{language:"en-US",include_adult:!1}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(c().mark((function n(e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/credits"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/reviews"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},453:function(n,e,r){r.r(e),r.d(e,{default:function(){return b}});var t,a,c,i=r(861),s=r(439),o=r(687),u=r.n(o),l=r(14),p=r(692),f=r(791),d=r(689),h=r(87),x=r(22),v=r(168),m=r(686),g=(0,m.Z)(h.rU)(t||(t=(0,v.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  color: black;\n  text-decoration: none;\n  svg {\n    vertical-align: bottom;\n  }\n"]))),w=m.Z.div(a||(a=(0,v.Z)(["\n  display: flex;\n  gap: 15px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #d6c8c8;\n"]))),Z=m.Z.div(c||(c=(0,v.Z)(["\npadding: 10px;\n"]))),j=r(184),b=function(){var n=(0,d.UO)().movieId,e=(0,f.useState)(null),r=(0,s.Z)(e,2),t=r[0],a=r[1],c=(0,d.TH)().state;if((0,f.useEffect)((function(){var e=function(){var e=(0,i.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,x.Mc)(n);case 3:if(200===(r=e.sent).status){e.next=6;break}throw new Error;case 6:a(r.data),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),l.ZP.error("Something went wrong! Reload the page or try again later");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),t){var o=t.original_title,v=t.poster_path,m=t.release_date,b=t.overview,k=t.genres,y=t.vote_average,I=k.map((function(n){return n.name})).join(" "),_=m.split("-")[0],U=Math.round(10*y);return(0,j.jsxs)(Z,{children:[(0,j.jsxs)(g,{to:c.from,children:[(0,j.jsx)(p.YiX,{})," Go back"]}),(0,j.jsxs)(w,{children:[(0,j.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(v),alt:o}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("h2",{children:[o,"(",_,")"]}),(0,j.jsxs)("p",{children:["User score: ",U,"%"]}),(0,j.jsx)("h3",{children:"Overview"}),(0,j.jsx)("p",{children:b}),(0,j.jsx)("h4",{children:"Genres"}),(0,j.jsxs)("p",{children:[" ",I]})]})]}),(0,j.jsx)("p",{children:"Additional information"}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)(h.rU,{to:"cast",state:{from:c.from},children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(h.rU,{to:"reviews",state:{from:c.from},children:"Reviews"})})]}),(0,j.jsx)("hr",{}),(0,j.jsx)(f.Suspense,{fallback:null,children:(0,j.jsx)(d.j3,{})})]})}}}}]);
//# sourceMappingURL=686.a44762f4.chunk.js.map