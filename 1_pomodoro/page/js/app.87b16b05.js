(function(e){function t(t){for(var o,a,i=t[0],l=t[1],c=t[2],d=0,u=[];d<i.length;d++)a=i[d],r[a]&&u.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);A&&A(t);while(u.length)u.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},a={app:0},r={app:0},s=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-32b52b9e":"9e35d372"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-32b52b9e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-32b52b9e":"81b9f419"}[e]+".css",r=l.p+o,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===o||d===r))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){c=u[i],d=c.getAttribute("data-href");if(d===o||d===r)return t()}var A=document.createElement("link");A.rel="stylesheet",A.type="text/css",A.onload=t,A.onerror=function(t){var o=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete a[e],A.parentNode.removeChild(A),n(s)},A.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(A)}).then(function(){a[e]=0}));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise(function(t,n){o=r[e]=[t,n]});t.push(o[2]=s);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=i(e),c=function(t){d.onerror=d.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");s.type=o,s.request=a,n[1](s)}r[e]=void 0}};var u=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/spirit_2019/1_pomodoro/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var A=d;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"07d2":function(e,t,n){e.exports=n.p+"img/tomato.78685c23.png"},5387:function(e,t,n){"use strict";var o=n("8b54"),a=n.n(o);t["default"]=a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=function(){var e,t,o=this,a=o.$createElement,r=o._self._c||a;return r("div",{class:o.$style.pomodoro,attrs:{id:"app"}},[r("div",{class:o.$style.flexBasis_large},[r("section",[r("div",{class:o.$style.pomodoro__tabs},[r("router-link",{class:[o.$style.tab,(e={},e[o.$style["tab--active"]]="TodoList"!==o.$route.name,e)],attrs:{to:"/todoList",exact:""}},[r("img",{attrs:{src:n("63e6")}}),o._v("To-do list\n        ")]),r("router-link",{class:[o.$style.tab,(t={},t[o.$style["tab--active"]]="Dashboard"!==o.$route.name,t)],attrs:{to:"/dashboard"}},[r("img",{attrs:{src:n("62bc")}}),o._v("Dashboard\n        ")])],1),r("router-view",{class:o.$style.todo})],1),r("FinishTomatoes")],1),r("AlarmClock")],1)},r=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{class:e.$style.container},[o("section",{class:e.$style.times},e._l(e.reversePamodoroTimes,function(t,n){return o("div",{key:t.index,class:e.$style.time,style:e.timeRotate(n)},[e._v(e._s(t))])}),0),o("section",{class:e.$style.functions},[o("div",{class:[e.$style.function__bell,e.$style.function]},[o("img",{attrs:{src:n("9468")}})]),o("div",{class:[e.$style.function__playAndPause,e.$style.function]},[o("img",{attrs:{src:n("c4bf")}})]),o("div",{class:[e.$style.function__reset,e.$style.function]},[o("img",{attrs:{src:n("fb6f")}})])])])},i=[],l=(n("ac6a"),{name:"AlarmClock",data:function(){return{pamodoroTimes:[5,10,15,20,25,30,35,40,45]}},computed:{reversePamodoroTimes:function(){var e=[];return this.pamodoroTimes.forEach(function(t){return e.unshift(t)}),e}},methods:{timeRotate:function(e){var t=180/(this.reversePamodoroTimes.length-1),n=90-e*t;return console.log(t,n),{transform:"rotate(".concat(n,"deg)")}}}}),c=l,d=n("abb9"),u=n("2877");function A(e){this["$style"]=d["default"].locals||d["default"]}var f=Object(u["a"])(c,s,i,!1,A,null,null),m=f.exports,p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{class:e.$style.countArea},[o("h3",[e._v("Finished")]),o("div",e._l(e.datetimes,function(t){return o("span",{key:t,class:e.$style.tomato},[o("img",{attrs:{src:n("07d2")}})])}),0)])},h=[],g={name:"FinishTomatoes",data:function(){return{datetimes:["2019-07-05 20:10:05","2019-07-06 18:20:30"]}}},v=g,y=n("5387");function b(e){this["$style"]=y["default"].locals||y["default"]}var _=Object(u["a"])(v,p,h,!1,b,null,null),C=_.exports,E={name:"pomodoro",components:{AlarmClock:m,FinishTomatoes:C}},k=E,Q=n("8d8d");function T(e){this["$style"]=Q["default"].locals||Q["default"]}var I=Object(u["a"])(k,a,r,!1,T,null,null),j=I.exports,w=n("8c4f"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$style.todo},[n("Calendar"),n("section",{class:e.$style.todolist},[n("div",[n("div",{class:e.$style.items},[n("div",{class:e.$style.item},[n("input",{attrs:{type:"checkbox",checked:"",id:"msg_0"}}),n("label",{class:e.$style.item__checkbox,attrs:{for:"msg_0"}}),n("p",{class:e.$style.item__title},[e._v("Type something")])])]),n("div",{class:e.$style.newTask},[n("label",{attrs:{for:"new-task"}},[e._v("+")]),n("input",{attrs:{type:"text",placeholder:"Add new task",id:"new-task"}})])]),n("p",{class:e.$style.date},[e._v("\n      從\n      "),n("span",[e._v("19:25")]),e._v(" 至\n      "),n("span",[e._v("21:00")]),e._v(" 結束。\n    ")])])],1)},S=[],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{class:e.$style.calendar},e._l(e.days,function(t,o){var a;return n("label",{key:t.name,class:[e.$style.calendar__day,(a={},a[e.$style["calendar__day--active"]]=0==o,a)]},[n("div",{class:e.$style.calendar__date},[e._v(e._s(t.date.month)+" / "+e._s(t.date.day))]),n("div",{class:e.$style.calendar__name},[e._v(e._s(t.name))])])}),0)},J=[],P={name:"Calendar",data:function(){return{days:[{date:{month:"7",day:"5"},name:"MON"},{date:{month:"7",day:"6"},name:"TUE"},{date:{month:"7",day:"7"},name:"WED"},{date:{month:"7",day:"8"},name:"THU"},{date:{month:"7",day:"9"},name:"FRI"},{date:{month:"7",day:"10"},name:"SAT"},{date:{month:"7",day:"11"},name:"SUN"}]}}},U=P,W=n("a957");function B(e){this["$style"]=W["default"].locals||W["default"]}var G=Object(u["a"])(U,O,J,!1,B,null,null),L=G.exports,Y={name:"Todolist",created:function(){console.log(this.$style.items)},data:function(){return{Todos:[]}},components:{Calendar:L}},F=Y,H=n("fae7");function N(e){this["$style"]=H["default"].locals||H["default"]}var D=Object(u["a"])(F,x,S,!1,N,null,null),Z=D.exports;o["a"].use(w["a"]);var V=new w["a"]({mode:"history",base:"/spirit_2019/1_pomodoro/",routes:[{path:"/",redirect:"/todoList"},{path:"/todoList",name:"TodoList",component:Z},{path:"/dashboard",name:"Dashboard",component:function(){return n.e("chunk-32b52b9e").then(n.bind(null,"7277"))}}]}),M=n("2f62");o["a"].use(M["a"]);var z=new M["a"].Store({state:{},mutations:{},actions:{}}),R=n("9483");Object(R["a"])("".concat("/spirit_2019/1_pomodoro/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({router:V,store:z,render:function(e){return e(j)}}).$mount("#app")},"62bc":function(e,t){e.exports="data:image/png;base64,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"},"63e6":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAAEH5aXCAAAAAXNSR0IArs4c6QAABDtJREFUeAHtnD1MFEEUgGcQYjCK0U5jYwuFhYWh1cQOSExs1ErE2hCVixWVASXGWqVTSxOhM9EWGxsTaC1MtDJGIGjCz/jeLTO3ey57P9zdrse3yd3O7s7Me/O93dk3b3bXmE4tVgW5+yPOPloM6SzhPl9WnpyPhXZ4XbV9WTr5fFl5cj7WjW1qCKn1RlRjuanReePczYZqyD9zN7bhq9jhTP5oO6OBc07PvbV2SQtXuRcQ75nc9NWTZuPPD3+smXW8vmbKF7AMNimUUZKnsLUf7OzCpbiGbmpk0zjTG99Xd9raFalvKCoslUvnc9Ec6r1RXYGdXeyr3sd2lxCQHvij/Cba1ZxeFSBn1gURoL/ncUHeDYnvazStvXCPFJpvtGD9+e2X+vOSszsJcJ3UtivXSW1GXZzDqvdopkZ3tI3VzrF4Ko/FU7nbdPuPDBy3069We0xpbHXPSvYjQCvdWP0V6tabUytuUKFCEhCAQAEJRMOsWOcVdEwZcoVju4lyx2bMnaaHYdUVNrItQzjTf2xYO0YtFg3l0jpIHdplLOLd5Bt7cm5wt/MtG6P8p/qKYu/L41KvfG/fafvwzXe/yRoCEIBAIQhwH+E+UogTESUgcPAIVJxGdeVLY0uCYEh+kzLLkQg7Fx1NdB+pxM0T+lYHVuIHpfstxFS+11Hj8ro0HpvvP3wvKprnP/HMPOkjGwIQgAAEINA+AhWnMXoI4omIWjYzb4ettZnPubZPpeZq9k5jMlyqdc0u9GQ1xk1fHzC/15YkzDrYnOh9lLJmS0o/lUeMgr8XOY1pAevIpd9bms7e5dEI1UgfwpLZx7IHvquh937TFNZxSdGXy17BrIZM+kzp6wK40P2Hz3ndomvkwZVTZmvzm99p6pjkCXlJQAACEIAABCAAgZYTYDzCeKQVJxXjkVSKjEdSsbATAhCAAAQgAIEWEMCNx41vwWnEtEI6RNz4dC7shQAEIAABCEAAAhCAAAQgAAEIQCAiEEJzuun0YcDtrZeJbwzESel38eSbeHxzIA6ltelgEHl4dkIM8ayu6q293ex7fa507YTZWf8k5j9bl6yuzSRxtJ6j5+3M65/xJsaf99Xn4etdGsmbrNOtf8YYikROyDKLJJ64QZaThzK3GslbXdG76h0HePsfFhWDyJsi+gB5TTiaR/M2uUhXN27kE2jGmjmRtyJrfXHigCx2e7fNc8qgzKKq5eEe4veXv0VXGrsl2+Py8+9b6BUxL4Z4kfVGjK+DNQQgAAEIQAACEIAABCAAAQhAAAIQ6A4CidAJ8yH5GzUYhPmQThuD+ZBOE68hj/mQGoByOcx8SC7Yg1DmQwIKEhCAAAQgAAEIQAACEIAABCAAgf+CQIj2qraE3/O3WTAI4fdOG4Pwe6eJ15BH+L0GoFwOE37PBXsQSvg9oCABAQhAAAIQgAAEIAABCBSGwF+juS+BQkwT7gAAAABJRU5ErkJggg=="},"8b54":function(e,t,n){e.exports={countArea:"FinishTomatoes_countArea_3SOTw",tomato:"FinishTomatoes_tomato_3vtvD"}},"8d8d":function(e,t,n){"use strict";var o=n("bc78"),a=n.n(o);t["default"]=a.a},9468:function(e,t,n){e.exports=n.p+"img/alarm.bd06944f.png"},"9fd7":function(e,t,n){e.exports={todolist:"TodoList_todolist_3W1Ix",items:"TodoList_items_3WBEd",item:"TodoList_item_RMm9C",item__checkbox:"TodoList_item__checkbox_2gJXp",item__title:"TodoList_item__title_3nUys",newTask:"TodoList_newTask_3Ad_C",date:"TodoList_date_HavmT"}},a957:function(e,t,n){"use strict";var o=n("ad26"),a=n.n(o);t["default"]=a.a},abb9:function(e,t,n){"use strict";var o=n("f6bd"),a=n.n(o);t["default"]=a.a},ad26:function(e,t,n){e.exports={calendar:"Calendar_calendar_2Yaaj",calendar__day:"Calendar_calendar__day_2PoiZ","calendar__day--active":"Calendar_calendar__day--active_1NiiT"}},bc78:function(e,t,n){e.exports={pomodoro:"App_pomodoro_27Jnz",flexBasis_large:"App_flexBasis_large_12ktk",pomodoro__tabs:"App_pomodoro__tabs_oHAe5",tab:"App_tab_mjzCy","tab--active":"App_tab--active_3rBCD",todo:"App_todo_1IWJY"}},c4bf:function(e,t,n){e.exports=n.p+"img/play.ab7a69a5.png"},f6bd:function(e,t,n){e.exports={container:"AlarmClock_container_3H2e-",times:"AlarmClock_times_35Hp6",time:"AlarmClock_time_2JjIC","time--active":"AlarmClock_time--active_3LNgQ",functions:"AlarmClock_functions_ub1_P",function:"AlarmClock_function_3e4z3",function__playAndPause:"AlarmClock_function__playAndPause_3CbBE"}},fae7:function(e,t,n){"use strict";var o=n("9fd7"),a=n.n(o);t["default"]=a.a},fb6f:function(e,t,n){e.exports=n.p+"img/reset.3e8e098a.png"}});
//# sourceMappingURL=app.87b16b05.js.map