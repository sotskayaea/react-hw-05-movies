"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[134],{708:function(e,t,n){n.d(t,{$:function(){return a},_:function(){return r}});var r="https://api.themoviedb.org/3",a="e4e6e94b6fe2d930a5a2ac796de1a189"},134:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),o=n.n(c),s=n(791),u=n(294),i=n(689),l=n(87),f=n(708),h=n(184);t.default=function(){var e=(0,s.useState)(""),t=(0,a.Z)(e,2),n=t[0],c=t[1],d=(0,s.useState)([]),p=(0,a.Z)(d,2),v=p[0],m=p[1],x=(0,i.TH)();console.log(x);return(0,s.useEffect)((function(){console.log("Search value:",n);var e=function(){var e=(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(f._,"/search/movie?api_key=").concat(f.$,"&query=").concat(n));case 2:t=e.sent,console.log(t.data.results),m(t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(""!==n)return e(),function(){c("")}}),[n]),(0,h.jsxs)("div",{children:[(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements.search.value.toLowerCase();c(t),e.currentTarget.reset()},children:[(0,h.jsx)("input",{type:"text",name:"search",placeholder:"Enter movie name"}),(0,h.jsx)("button",{type:"submit",children:"Look for"})]}),(0,h.jsx)("ul",{children:v.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{to:"".concat(e.id),state:{from:x},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=134.e22be4a5.chunk.js.map