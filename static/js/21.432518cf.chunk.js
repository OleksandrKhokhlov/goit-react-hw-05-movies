"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[21],{22:function(t,n,r){r.d(n,{Hx:function(){return p},Mc:function(){return s},vw:function(){return i},wr:function(){return o},xc:function(){return f}});var e=r(861),a=r(687),c=r.n(a),u=r(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWVlZWU2MWE5YzQ0ZDg3MDU2MGU5MDk3YWYzOWFiYSIsInN1YiI6IjY0ZWRkZDMzNTI1OGFlMDEyY2E2YzI4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DwVyqR8KU5ITMf03TmwDmKexNT2Ro5Hf1FcrLtmXnOE";var i=function(){var t=(0,e.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie",{params:{query:n,language:"en-US",include_adult:!1}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day",{params:{language:"en-US",include_adult:!1}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,e.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/credits"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/reviews"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},21:function(t,n,r){r.r(n),r.d(n,{default:function(){return d}});var e=r(861),a=r(439),c=r(687),u=r.n(c),i=r(14),o=r(689),s=r(791),f=r(22),p=r(184),d=function(){var t=(0,s.useState)([]),n=(0,a.Z)(t,2),r=n[0],c=n[1],d=(0,o.UO)().movieId;return(0,s.useEffect)((function(){var t=function(){var t=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.xc)(d);case 3:if(200===(n=t.sent).status){t.next=6;break}throw new Error;case 6:c(n.data.cast),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0),i.Am.error("Something went wrong! Reload the page or try again later");case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[d]),(0,p.jsx)("div",{children:0!==r.length?r.map((function(t){var n=t.original_name,r=t.profile_path,e=t.character,a=t.id;return(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{src:null!==r?"https://image.tmdb.org/t/p/w200/".concat(r):"".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAG1BMVEX///+4uLi1tbXc3Nz4+Pi8vLzS0tLGxsbs7OznmF8VAAADEUlEQVR4nO2a3XLrIAyEi/kx7//EtTHJOU7SGoldmemwN5nJ1TfSSmChr6+pqampqampv66Qvfdp0/aTw900RcGnGN3ylIsx+ZvRgl/jjnLS/sd6I1lI70xPNJfyLVA5uc9IDzK32oMF/zvUAZaMU+njJVQBi94QKqQfLPXBY3YBC2sj1BEwI4fltgQacwmpducbGCxfV+ANXOJYHVzkPAYNFd1foho8czH7hFdSbVyJR5W1UDsXzfZKY1XR0qhPYQkXKY0h9lBt4lRj6grWFq6VQdXnLFq4+pxVwkVwFyBYzuGLsT9YlN7Va/iCtaLD1d0dDqGxMiBYhCwirEWoRe2N5gULfDBC2oODn9corAXb6DGOh3se4/iJJcTCdoiJNbH+YWEtP2jf6vlwJWKBrlvorwzQmQifkIx5sRn1GjjopRlkLviH4pgfZJDORfh8RWSRMXkbczSCCBdlTNkbLtKUsjtcpJnumCNd/RtGoeK9Y3T1LuKrT8fjCvXtTnsEEY6d/6V+uCM/pKu46FQqLpNHdDGX0dO+sH0ZZLBySeqRXIMnNez9VChnusiV16Ytm8V8V6phJ2mJN+y8BX8xALgDqqwFXmCZLwhuTO7aXMari1v62tfKrFJZ9ifboCqYwcLbDtXOVMnYYKFxVfEdjJnKxib6iYvXWFtWTX8BIx1DXd89BYxxaCtddeLCL8d6ratOXOj5N2LoVsCQrQJGBeXqNvuJC2V8KBWMC0wF4gL66skF8BeeCjHqQr1vvnB19i/UO+Kbug5u1A7Lm/o+tRnGqlwd9uIYq3Kp7UVLYcFSp5GXwsKlTCOtCh9SVSP80HmV7hBi+r1yKVxP9XvFUqyE84Ol2hRkO6tgicNFL8ND0nBxe9ZD0t4FW/W5kLDVWxh+l7BHWBi+YIlMH2yg9oGJJItWORRm0SqHsixa1eEuQS0a9dJD7R3Vzloic9m0+IrV3OjpF8ATVvNl0NLxAs+bOr7d894Wq9XzloUoKMVBsSz7g6BDDIpl2bYEh/W6mKoVyxurEWtqampqampqGH0DBjosgNcFLrEAAAAASUVORK5CYII="),alt:n,width:200}),(0,p.jsx)("h3",{children:n}),(0,p.jsxs)("p",{children:["Character: ",""!==e?e:"no data"]})]},a)})):(0,p.jsx)("div",{children:"We don't have any cast for this movie"})})}}}]);
//# sourceMappingURL=21.432518cf.chunk.js.map