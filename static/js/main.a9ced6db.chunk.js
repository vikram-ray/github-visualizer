(this["webpackJsonpgithub-visualizer"]=this["webpackJsonpgithub-visualizer"]||[]).push([[0],{205:function(e,a,t){},207:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),c=t.n(l),o=(t(87),t(5)),u=t(43),i=t(28),s=t(12),m=t(218),d=t(214),p=t(219),g=t(217),h=t(215),E=t(210),f=t(216),b=t(211),v=t(212),_=t(76),O=function(e){var a=e.data,t=e.title;return r.a.createElement("div",null,r.a.createElement("h3",null,t),r.a.createElement(_.Doughnut,{data:a}))},w=function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))},z=function(e){var a=e.data,t=new Date(Date.parse(a.created_at));return r.a.createElement(f.a,{variant:"flush"},r.a.createElement(f.a.Item,null,"Joined: ".concat(t.toDateString())),r.a.createElement(f.a.Item,null,"Public repos: ".concat(a.public_repos)),r.a.createElement(f.a.Item,null,"Public gists: ".concat(a.public_gists)),r.a.createElement(f.a.Item,null,"Followers: ".concat(a.followers)))},y=function(e){var a=e.data,t=function(e){var a={},t=0;e.forEach((function(e){t+=e.stargazers_count;var n=e.language;a.hasOwnProperty(n)||(a[n]=0),a[n]+=1})),a.hasOwnProperty("null")&&(a.others=a.null,delete a.null);for(var n={labels:[],datasets:[{data:[],backgroundColor:[],hoverBackgroundColor:[]}]},r=0,l=Object.entries(a);r<l.length;r++){var c=Object(i.a)(l[r],2),o=c[0],u=c[1];n.labels.push(o),n.datasets[0].data.push(u),n.datasets[0].backgroundColor.push(w()),n.datasets[0].hoverBackgroundColor.push(w())}return{parsedRepoData:n,totalStars:t}}(e.repoData),n=t.parsedRepoData,l=t.totalStars;return r.a.createElement(E.a,null,r.a.createElement(b.a,{sm:2},r.a.createElement(v.a,{src:a.avatar_url,roundedCircle:!0,fluid:!0}),r.a.createElement("p",{className:"text-center"},a.login),r.a.createElement("p",{className:"text-center"},"Total stars: ".concat(l))),r.a.createElement(b.a,{sm:4},r.a.createElement(z,{data:a})),r.a.createElement(b.a,{sm:6},r.a.createElement(O,{data:n,title:"Projects"})),r.a.createElement("hr",null))},k=t(213);function j(e){return new Date(e).toDateString()}var S=function(e){var a=e.data;return r.a.createElement("div",null,r.a.createElement(k.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Language"))),r.a.createElement("tbody",null,a.map((function(e,a){var t="\nStars: ".concat(e.stargazers_count,"\nForks: ").concat(e.forks_count,"\nOpen issues: ").concat(e.open_issues_count,"\nCreated: ").concat(j(e.created_at.substring(0,10)),"\nLast Update: ").concat(j(e.updated_at.substring(0,10)),"\n");return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,a+1),r.a.createElement("td",null,e.homepage?r.a.createElement("a",{target:"_blank",href:e.homepage},e.name):e.name),r.a.createElement("td",null,r.a.createElement("a",{title:t,target:"_blank",href:e.html_url}," ",e.description||"View repository")),r.a.createElement("td",null,e.language))})))))},D=function(){var e=Object(s.c)((function(e){return e.visualizer.repo})),a=Object(s.c)((function(e){return e.visualizer.profile}));return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{data:a,repoData:e}),r.a.createElement("hr",null)):null,Array.isArray(e)&&e.length?r.a.createElement(S,{data:e}):null)},C=t(29),N=t(20),P=t.n(N),x=t(16),I=Object(C.b)({name:"visualizer",initialState:{loading:!1,username:"",repo:[],profile:null},reducers:{toggleLoading:function(e){e.loading=!e.loading},clearValues:function(e){e.profile=null,e.repo=[]},setusername:function(e,a){e.username=a.payload},setrepo:function(e,a){e.repo=a.payload},setprofile:function(e,a){e.profile=a.payload}}}),T=I.actions,V=T.toggleLoading,L=(T.setusername,T.setrepo),F=T.setprofile,A=T.clearValues,B=I.reducer,M=t(45),G=t.n(M);function H(e){var a=Object(o.g)(),t=Object(s.b)(),l=Object(s.c)((function(e){return e.visualizer.loading})),c=Object(n.useState)(e.match.params.username||""),u=Object(i.a)(c,2),h=u[0],E=u[1];Object(n.useEffect)((function(){h||t(A())}),[h,t]);var f=null;return f=l?r.a.createElement(m.a,{variant:"primary",disabled:!0},r.a.createElement(d.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):r.a.createElement(m.a,{variant:"primary",type:"submit",onClick:function(){return function(e){a.push("".concat("/github-visualizer","/").concat(e))}(h)}},"Submit"),r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement(p.a,{className:"mb-3"},r.a.createElement(p.a.Prepend,null,r.a.createElement(p.a.Text,null,"https://github.com/")),r.a.createElement(g.a,{placeholder:"username",value:h,onChange:function(e){return E(e.target.value)},"aria-label":"GitHub username"}),r.a.createElement(p.a.Append,null,f)))}var J=function(e){var a=Object(s.b)(),t=Object(s.c)((function(e){return e.visualizer.loading}));Object(n.useEffect)((function(){var t;e.match.params.username&&a((t=e.match.params.username,function(e){e(V());var a="https://api.github.com/users/".concat(t,"/repos?sort=created&per_page=100"),n="https://api.github.com/users/".concat(t),r=P.a.get(a),l=P.a.get(n);P.a.all([r,l]).then(P.a.spread((function(){var a=arguments.length<=0?void 0:arguments[0],t=arguments.length<=1?void 0:arguments[1];e(L(a.data)),e(F(t.data))}))).catch((function(e){404===e.response.status?x.a.error("No user found with id ".concat(t)):x.a.error("Something went wrong"),console.log(e)})).finally((function(){e(V())}))}))}),[e.match.params.username,a]);var l=null;return l=t?r.a.createElement("div",{className:G.a.spinner__container},r.a.createElement(d.a,{animation:"border",variant:"primary"})):r.a.createElement(D,null),r.a.createElement(h.a,{fluid:!0},r.a.createElement(E.a,null,r.a.createElement("h3",{className:G.a.heading}," GitHub Profile Visualizer ")),r.a.createElement(H,e),l)};t(205),t(206);x.a.configure({autoClose:2500,position:x.a.POSITION.TOP_RIGHT});var R=function(){return r.a.createElement("h1",null,"The page you are looking does not exist")};function W(){return r.a.createElement(n.Suspense,{fallback:"Loading"},r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:["".concat("/github-visualizer","/"),"".concat("/github-visualizer","/:username")],component:J}),r.a.createElement(o.b,{path:"/",exact:!0}," ",r.a.createElement(o.a,{to:"/github-visualizer"})," "),r.a.createElement(o.b,{component:R})))}var U=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null,r.a.createElement(W,null)))},$=Object(C.a)({reducer:{visualizer:B}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:$},r.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e,a,t){e.exports={heading:"Visualizer_heading__1F8VM",spinner__container:"Visualizer_spinner__container__33OkT"}},82:function(e,a,t){e.exports=t(207)},87:function(e,a,t){}},[[82,1,2]]]);
//# sourceMappingURL=main.a9ced6db.chunk.js.map