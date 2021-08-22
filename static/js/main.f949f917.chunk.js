(this["webpackJsonpgithub-visualizer"]=this["webpackJsonpgithub-visualizer"]||[]).push([[0],{205:function(e,t,a){},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),c=(a(87),a(5)),i=a(43),u=a(28),s=a(12),m=a(217),d=a(214),p=a(218),f=a(219),g=a(215),h=a(210),v=a(216),E=a(211),b=a(212),w=a(76),_=function(e){var t=e.data,a=e.title;return r.a.createElement("div",null,r.a.createElement("h3",null,a),r.a.createElement(w.Doughnut,{data:t}))},k=function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))},y=function(e){var t=e.data,a=new Date(Date.parse(t.created_at));return r.a.createElement(v.a,{variant:"flush"},r.a.createElement(v.a.Item,null,"Joined: ".concat(a.toDateString())),r.a.createElement(v.a.Item,null,"Public repos: ".concat(t.public_repos)),r.a.createElement(v.a.Item,null,"Public gists: ".concat(t.public_gists)),r.a.createElement(v.a.Item,null,"Followers: ".concat(t.followers)))},O=function(e){var t=e.data,a=function(e){var t={},a=0;e.forEach((function(e){a+=e.stargazers_count;var n=e.language;t.hasOwnProperty(n)||(t[n]=0),t[n]+=1})),t.hasOwnProperty("null")&&(t.others=t.null,delete t.null);for(var n={labels:[],datasets:[{data:[],backgroundColor:[],hoverBackgroundColor:[]}]},r=0,l=Object.entries(t);r<l.length;r++){var o=Object(u.a)(l[r],2),c=o[0],i=o[1];n.labels.push(c),n.datasets[0].data.push(i),n.datasets[0].backgroundColor.push(k()),n.datasets[0].hoverBackgroundColor.push(k())}return{parsedRepoData:n,totalStars:a}}(e.repoData),n=a.parsedRepoData,l=a.totalStars;return r.a.createElement(h.a,null,r.a.createElement(E.a,{sm:2},r.a.createElement(b.a,{src:t.avatar_url,roundedCircle:!0,fluid:!0}),r.a.createElement("p",{className:"text-center"},t.login),r.a.createElement("p",{className:"text-center"},"Total stars: ".concat(l))),r.a.createElement(E.a,{sm:4},r.a.createElement(y,{data:t})),r.a.createElement(E.a,{sm:6},r.a.createElement(_,{data:n,title:"Projects"})),r.a.createElement("hr",null))},z=a(213);function j(e){return new Date(e).toDateString()}var S=function(e){var t=e.data;return r.a.createElement("div",null,r.a.createElement(z.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Language"))),r.a.createElement("tbody",null,t.map((function(e,t){var a="\nStars: ".concat(e.stargazers_count,"\nForks: ").concat(e.forks_count,"\nOpen issues: ").concat(e.open_issues_count,"\nCreated: ").concat(j(e.created_at.substring(0,10)),"\nLast Update: ").concat(j(e.updated_at.substring(0,10)),"\n");return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.homepage?r.a.createElement("a",{target:"_blank",href:e.homepage},e.name):e.name),r.a.createElement("td",null,r.a.createElement("a",{title:a,target:"_blank",href:e.html_url}," ",e.description||"View repository")),r.a.createElement("td",null,e.language))})))))},C=function(){var e=Object(s.c)((function(e){return e.visualizer.repo})),t=Object(s.c)((function(e){return e.visualizer.profile}));return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{data:t,repoData:e}),r.a.createElement("hr",null)):null,Array.isArray(e)&&e.length?r.a.createElement(S,{data:e}):null)},D=a(29),N=a(20),P=a.n(N),x=a(16),A=Object(D.b)({name:"visualizer",initialState:{loading:!1,username:"",repo:[],profile:null},reducers:{toggleLoading:function(e){e.loading=!e.loading},clearValues:function(e){e.profile=null,e.repo=[]},setusername:function(e,t){e.username=t.payload},setrepo:function(e,t){e.repo=t.payload},setprofile:function(e,t){e.profile=t.payload}}}),T=A.actions,I=T.toggleLoading,L=(T.setusername,T.setrepo),W=T.setprofile,V=T.clearValues,R=A.reducer,F=a(45),B=a.n(F);function M(e){var t=Object(c.g)(),a=Object(s.b)(),l=Object(s.c)((function(e){return e.visualizer.loading})),o=Object(n.useState)(e.match.params.username||""),i=Object(u.a)(o,2),g=i[0],h=i[1];Object(n.useEffect)((function(){g||a(V())}),[g,a]);var v=null;return v=l?r.a.createElement(m.a,{variant:"primary",disabled:!0},r.a.createElement(d.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):r.a.createElement(m.a,{variant:"primary",type:"submit",onClick:function(){return function(e){t.push("/github-visualizer/".concat(e))}(g)}},"Submit"),r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement(p.a,{className:"mb-3"},r.a.createElement(p.a.Prepend,null,r.a.createElement(p.a.Text,null,"https://github.com/")),r.a.createElement(f.a,{placeholder:"username",value:g,onChange:function(e){return h(e.target.value)},"aria-label":"GitHub username"}),r.a.createElement(p.a.Append,null,v)))}var U=function(e){var t=Object(s.b)(),a=Object(s.c)((function(e){return e.visualizer.loading}));Object(n.useEffect)((function(){var a;e.match.params.username&&t((a=e.match.params.username,function(e){e(I());var t="https://api.github.com/users/".concat(a,"/repos?sort=created&per_page=100"),n="https://api.github.com/users/".concat(a),r=P.a.get(t),l=P.a.get(n);P.a.all([r,l]).then(P.a.spread((function(){var t=arguments.length<=0?void 0:arguments[0],a=arguments.length<=1?void 0:arguments[1];e(L(t.data)),e(W(a.data))}))).catch((function(e){404===e.response.status?x.a.error("No user found with id ".concat(a)):x.a.error("Something went wrong"),console.log(e)})).finally((function(){e(I())}))}))}),[e.match.params.username,t]);var l=null;return l=a?r.a.createElement("div",{className:B.a.spinner__container},r.a.createElement(d.a,{animation:"border",variant:"primary"})):r.a.createElement(C,null),r.a.createElement(g.a,{fluid:!0},r.a.createElement(h.a,null,r.a.createElement("h3",{className:B.a.heading}," GitHub Profile Visualizer ")),r.a.createElement(M,e),l)};a(205),a(206);x.a.configure({autoClose:2500,position:x.a.POSITION.TOP_RIGHT});var G=function(){return r.a.createElement("h1",null,"The page you are looking does not exist")};function H(){return r.a.createElement(n.Suspense,{fallback:"Loading"},r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:["/github-visualizer/","/github-visualizer/:username"],component:U}),r.a.createElement(c.b,{path:"/",exact:!0}," ",r.a.createElement(c.a,{to:"/github-visualizer"})," "),r.a.createElement(c.b,{component:G})))}var J=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(H,null)))},$=Object(D.a)({reducer:{visualizer:R}}),q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:$},r.a.createElement(J,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/github-visualizer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/github-visualizer","/service-worker.js");q?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):K(t,e)}))}}()},45:function(e,t,a){e.exports={heading:"Visualizer_heading__1F8VM",spinner__container:"Visualizer_spinner__container__33OkT"}},82:function(e,t,a){e.exports=a(207)},87:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.f949f917.chunk.js.map