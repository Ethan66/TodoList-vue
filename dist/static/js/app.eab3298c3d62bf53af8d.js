webpackJsonp([0],{"+n6O":function(t,e,s){"use strict";e.a={props:["dateCst","onDate","todos"],data:function(){return{arr:this.arrLength(this.dateCst.dateArr)}},computed:{todosObj:{get:function(){var t={};return this.todos.forEach(function(e,s){t[e.date]=1}),t}}},methods:{arrLength:function(t){for(var e=[],s=0;s<t.length/7;s++)e.push(s);return e},movePreMonth:function(){this.dateCst.watchDate=this.dateCst.preMonthDate,this.dateCst.setRelativeDate(this.dateCst.watchDate),this.dateCst.setData()},moveNextMonth:function(){this.dateCst.watchDate=this.dateCst.nextMonthDate,this.dateCst.setRelativeDate(this.dateCst.watchDate),this.dateCst.setData()},setThisDate:function(){document.querySelectorAll(".e-table td").forEach(function(t,e){t.classList.remove("onClick")});var t=event.target;t.parentNode.classList.add("onClick"),this.onDate.date=t.parentNode.getAttribute("data-date")}}}},"+qDX":function(t,e,s){"use strict";var a=s("mvHQ"),n=s.n(a),o=s("JnRc"),r=s.n(o);e.a={props:["show","onDate","todos"],data:function(){return{td:{date:"",time:"",event:""}}},methods:{goback:function(){this.show.show=!1},confirm:function(){if(this.td.time&&this.td.event){var t=this.onDate.date,e={};e={date:t,time:this.td.time,event:this.td.event,completed:!1,deleted:!1},this.td={date:"",time:"",event:""},this.todos.push(e),this.saveOrUpdateTodos(),this.show.show=!1}},saveOrUpdateTodos:function(){this.todos.id?this.updateTodos():this.saveTodos()},saveTodos:function(){var t=this,e=n()(this.todos),s=r.a.Object.extend("AllTodos"),a=new s,o=new r.a.ACL;o.setReadAccess(r.a.User.current(),!0),o.setWriteAccess(r.a.User.current(),!0),a.set("content",e),a.setACL(o),a.save().then(function(e){t.todos.id=e.id,console.log("保存成功")},function(t){alert("保存失败")})},updateTodos:function(){var t=n()(this.todos),e=r.a.Object.createWithoutData("AllTodos",this.todos.id);e.set("content",t),e.save().then(function(){console.log("更新成功")})}}}},"07PK":function(t,e,s){"use strict";e.a={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},"5Urq":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Date",{attrs:{dateCst:t.dateCst,onDate:t.onDate,todos:t.todos}}),t._v(" "),s("Todos",{attrs:{show:t.showInput,todos:t.todos,onDate:t.onDate},on:{listen:t.go1,listen1:t.delete2}}),t._v(" "),s("InputTodo",{directives:[{name:"show",rawName:"v-show",value:t.showInput.show,expression:"showInput.show"}],staticClass:"inputTodo",attrs:{show:t.showInput,onDate:t.onDate,todos:t.todos},on:{listen:t.ievent}}),t._v(" "),s("SignOrLogin",{attrs:{currentUser:t.currentUser,todos:t.todos},on:{listenUser:t.listenUser,listenTodos:t.listenTodos}}),t._v(" "),s("div",{staticClass:"navIcon",on:{click:function(e){t.logout1.show1=!0}}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-1-copy"}})])]),t._v(" "),t.logout1.show1?s("NavLeft",{attrs:{currentUser:t.currentUser,logout1:t.logout1}}):t._e()],1)},n=[],o={render:a,staticRenderFns:n};e.a=o},"5uKG":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"todos"}},[s("h3",[t._v("我当天的任务清单")]),t._v(" "),s("ol",t._l(t.todos,function(e,a){return e.date==t.onDate.date&&0==e.deleted?s("li",{class:{completed:e.completed,deleting:t.delete1==a},on:{click:function(e){t.deletingTodo(a)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"todo['completed']"}],attrs:{type:"checkbox",value:"true"},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,"true")>-1:e.completed},on:{click:function(e){e.stopPropagation(),t.completeTodo(a)},change:function(s){var a=e.completed,n=s.target,o=!!n.checked;if(Array.isArray(a)){var r=t._i(a,"true");n.checked?r<0&&(e.completed=a.concat(["true"])):r>-1&&(e.completed=a.slice(0,r).concat(a.slice(r+1)))}else t.$set(e,"completed",o)}}}),t._v(" "),s("i",{staticClass:"time"},[t._v(t._s(e.time))]),t._v(" "),s("span",[t._v(t._s(e.event))]),t._v(" "),s("p",{staticClass:"delete",on:{click:function(e){t.detTodo(a)}}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-shanchu"}})])])]):t._e()})),t._v(" "),s("div",{staticClass:"btn",on:{click:t.showInputPage}},[s("p",[t._v("+")])])])},n=[],o={render:a,staticRenderFns:n};e.a=o},"71hJ":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.onDate.date?s("div",{attrs:{id:"inputTodo"}},[s("header",[s("span",{on:{click:t.goback}},[t._v("<")]),t._v("输入待办事件")]),t._v(" "),s("form",[s("div",{staticClass:"line"},[s("label",[t._v("日期")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.onDate.date,expression:"onDate['date']"}],attrs:{type:"text",disabled:""},domProps:{value:t.onDate.date},on:{input:function(e){e.target.composing||t.$set(t.onDate,"date",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"line"},[s("label",[t._v("时间")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.td.time,expression:"td['time']"}],attrs:{type:"text"},domProps:{value:t.td.time},on:{input:function(e){e.target.composing||t.$set(t.td,"time",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"line"},[s("label",[t._v("事件")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.td.event,expression:"td['event']"}],attrs:{type:"text"},domProps:{value:t.td.event},on:{input:function(e){e.target.composing||t.$set(t.td,"event",e.target.value)}}})]),t._v(" "),s("button",{on:{click:t.confirm}},[t._v("确定")])])]):t._e()},n=[],o={render:a,staticRenderFns:n};e.a=o},EHTI:function(t,e,s){"use strict";function a(t){s("FsC6")}var n=s("eXNe"),o=s("5uKG"),r=s("VU/8"),i=a,c=r(n.a,o.a,!1,i,null,null);e.a=c.exports},FsC6:function(t,e){},GLLD:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"date"}},[s("div",{staticClass:"e-img"},[s("p",{staticClass:"e-showDate"},[s("i",{staticClass:"e-arrow e-left",on:{click:t.movePreMonth}},[t._v("<")]),t._v(" "),s("span",{staticClass:"e-show"},[t._v(t._s(t.dateCst.watchDate.getFullYear())+"-"+t._s(t.dateCst.watchDate.getMonth()+1))]),t._v(" "),s("i",{staticClass:"e-arrow e-right",on:{click:t.moveNextMonth}},[t._v(">")])])]),t._v(" "),s("div",{staticClass:"e-date"},[s("table",{staticClass:"e-table"},[t._m(0),t._v(" "),t._l(t.arr,function(e){return s("tr",t._l([0,1,2,3,4,5,6],function(a){return s("td",{class:[t.dateCst.dateArr[7*e+a].type,{hasTodo:Boolean(t.todosObj[t.dateCst.dateArr[7*e+a].fullDate])},{onClick:t.dateCst.dateArr[7*e+a].fullDate==t.onDate.date}],attrs:{"data-date":t.dateCst.dateArr[7*e+a].fullDate},on:{click:t.setThisDate}},[s("span",[t._v(t._s(t.dateCst.dateArr[7*e+a].date))])])}))})],2)])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("th",[t._v("日")]),s("th",[t._v("一")]),s("th",[t._v("二")]),s("th",[t._v("三")]),s("th",[t._v("四")]),s("th",[t._v("五")]),s("th",[t._v("六")])])}],o={render:a,staticRenderFns:n};e.a=o},HJ7t:function(t,e,s){"use strict";var a=s("Iaph"),n=s("cj5F"),o=s("VU/8"),r=o(a.a,n.a,!1,null,null,null);e.a=r.exports},Iaph:function(t,e,s){"use strict";var a=function(){var t=function(){this.init()};return t.prototype={init:function(){this.current=new Date,this.watchDate=new Date,this.dateArr=[],this.setRelativeDate(this.watchDate),this.setData()},setRelativeDate:function(t){this.firstDate=this.getMonthFirstDate(t),this.lastDate=this.getMonthLastDate(t),this.preMonthDate=this.getPreMonth(t),this.nextMonthDate=this.getNextMonth(t)},getMonthFirstDate:function(t){return new Date(t.getFullYear(),t.getMonth(),1)},getMonthLastDate:function(t){var e=t.getFullYear(),s=t.getMonth()+1;s>11&&(s=0,e++);var a=new Date(e,s,1),n=new Date(Date.parse(a)-864e5);return new Date(t.getFullYear(),t.getMonth(),n.getDate())},getPreMonth:function(t){var e=t.getFullYear(),s=t.getMonth()-1;return s<0&&(s=11,e--),new Date(e,s,1)},getNextMonth:function(t){var e=t.getFullYear(),s=t.getMonth()+1;return s>11&&(s=0,e++),new Date(e,s,1)},setData:function(){this.dateArr=[];var t=this.firstDate.getDay(),e=this.lastDate.getDate(),s=this.lastDate.getDay(),a=this.firstDate.getFullYear(),n=this.firstDate.getMonth(),o=this.preMonthDate.getFullYear(),r=this.preMonthDate.getMonth(),i=this.nextMonthDate.getFullYear(),c=this.nextMonthDate.getMonth();if(this.current.getFullYear()===a&&this.current.getMonth()===n)var u=!0,l=this.current.getDate();for(var d=this.getMonthLastDate(this.preMonthDate).getDate(),h=0;h<t;h++){var v=d-t+h+1;this.dateArr.push({type:"",date:v,fullDate:this.getYYMMDD(o,r,v)})}for(var h=0;h<e;h++)this.dateArr.push({type:"cur-month",date:h+1,fullDate:this.getYYMMDD(a,n,h+1)}),u&&h+1-t===l&&(this.dateArr[h].type+=" current");for(var h=s,f=1;h<6;h++,f++)this.dateArr.push({type:"",date:f,fullDate:this.getYYMMDD(i,c,f)})},getYYMMDD:function(t,e,s){return e++,t+"/"+e+"/"+s}},{init:function(){return new t}}}();e.a={dateConstructor:a.init()}},M93x:function(t,e,s){"use strict";function a(t){s("mpEK")}var n=s("xJD8"),o=s("5Urq"),r=s("VU/8"),i=a,c=r(n.a,o.a,!1,i,null,null);e.a=c.exports},"N+zL":function(t,e,s){"use strict";function a(t){s("VvaM")}var n=s("XkHJ"),o=s("m9xR"),r=s("VU/8"),i=a,c=r(n.a,o.a,!1,i,null,null);e.a=c.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("M93x"),o=s("YaEn"),r=s("uMhA"),i=(s.n(r),s("NcP2"));s.n(i);a.a.config.productionTip=!1,new a.a({el:"#app",router:o.a,template:"<App/>",components:{App:n.a}})},NQrU:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"navLeft"}},[s("div",{staticClass:"content"},[s("h3",[t._v("\n      用户名："),t.currentUser.username?s("span",[t._v(t._s(t.currentUser.username))]):t._e(),t._v(" "),s("p",{on:{click:function(e){t.logout1.show1=!1}}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-fanhui1-copy"}})])])]),t._v(" "),s("p",{staticClass:"btn"},[s("button",{on:{click:t.logout2}},[t._v("登出")])])])])},n=[],o={render:a,staticRenderFns:n};e.a=o},NcP2:function(t,e){},SHU7:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],o={render:a,staticRenderFns:n};e.a=o},Sq6j:function(t,e){},VvaM:function(t,e){},XkHJ:function(t,e,s){"use strict";var a=(s("7+uW"),s("JnRc")),n=s.n(a);n.a.init({appId:"q3ldfYbcpfsA4huh3VTThWo2-gzGzoHsz",appKey:"fwAIkyQgu5zxnagRTK3nAxCH"}),e.a={created:function(){this.$emit("listenUser",this.getCurrentUser()),this.fetchTodos()},props:["currentUser","todos"],data:function(){return{show:!0,formData:{username:"",password:""}}},methods:{fetchTodos:function(){var t=this;if(this.currentUser){new n.a.Query("AllTodos").find().then(function(e){var s=e[0],a=s.id,n=JSON.parse(s.attributes.content);t.$emit("listenTodos",n,a)},function(t){console.error(t)})}},signUp:function(){var t=this,e=new n.a.User;e.setUsername(this.formData.username),e.setPassword(this.formData.password),e.signUp().then(function(e){window.location.reload(),t.currentUser=t.getCurrentUser()},function(t){alert("注册失败"),console.log(t)})},login:function(){var t=this;n.a.User.logIn(this.formData.username,this.formData.password).then(function(e){window.location.reload(),t.currentUser=t.getCurrentUser(),t.fetchTodos()},function(t){alert("登录失败"),console.log(t)})},getCurrentUser:function(){var t=n.a.User.current();if(t){var e=t.id,s=t.attributes.username;return console.log({id:e,username:s}),{id:e,username:s}}return null}}}},YaEn:function(t,e,s){"use strict";var a=s("7+uW"),n=s("/ocq"),o=s("gORT");a.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Hello",component:o.a}]})},ZgbM:function(t,e){},cj5F:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},n=[],o={render:a,staticRenderFns:n};e.a=o},eXNe:function(t,e,s){"use strict";e.a={props:["show","todos","onDate"],computed:{onDateTodo:{get:function(){var t=this;return this.todos.filter(function(e,s){return e.date==t.onDate.date&&0==e.deleted})},set:function(t){for(var e=0;e<this.todos.length;e++)this.todos[e]==t&&(this.todos.splice(e,1),--e)}}},data:function(){return{delete1:"999999"}},methods:{deletingTodo:function(t){this.delete1!==t?this.delete1=t:this.delete1="999999"},showInputPage:function(){this.onDate.date&&(this.show.show=!0)},completeTodo:function(t){this.$emit("listen",t)},detTodo:function(t){this.$emit("listen1",t)}}}},gG0R:function(t,e){},gORT:function(t,e,s){"use strict";function a(t){s("keeo")}var n=s("07PK"),o=s("SHU7"),r=s("VU/8"),i=a,c=r(n.a,o.a,!1,i,"data-v-682ad6ec",null);e.a=c.exports},ipkt:function(t,e,s){"use strict";var a=s("JnRc"),n=s.n(a);e.a={props:["currentUser","logout1"],computed:{},methods:{logout2:function(){this.logout1.show1=!1,n.a.User.logOut(),this.currentUser={id:"",username:""},window.location.reload()}}}},keeo:function(t,e){},m9xR:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:!t.currentUser,expression:"!currentUser"}],attrs:{id:"signOrLogin"}},[s("div",{staticClass:"wrap"},[t._m(0),t._v(" "),t.show?s("form",[s("div",{staticClass:"line"},[s("label",[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-user"}})])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.username,expression:"formData.username"}],attrs:{type:"text",placeholder:"username"},domProps:{value:t.formData.username},on:{input:function(e){e.target.composing||t.$set(t.formData,"username",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"line"},[s("label",[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-mima"}})])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.formData.password},on:{input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}})]),t._v(" "),s("p",{staticClass:"btn"},[s("button",{on:{click:t.login}},[t._v("Login")])]),t._v(" "),s("p",{staticClass:"go"},[s("span",[t._v("Not Registered?")]),s("button",{on:{click:function(e){t.show=!1}}},[t._v("GO")])])]):s("form",[s("div",{staticClass:"line"},[s("label",[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-user"}})])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.username,expression:"formData.username"}],attrs:{type:"text",placeholder:"username"},domProps:{value:t.formData.username},on:{input:function(e){e.target.composing||t.$set(t.formData,"username",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"line"},[s("label",[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-mima"}})])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.formData.password},on:{input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}})]),t._v(" "),s("p",{staticClass:"btn"},[s("button",{on:{click:t.signUp}},[t._v("Sign In")])]),t._v(" "),s("p",{staticClass:"btn"},[s("button",{on:{click:function(e){t.show=!0}}},[t._v("Go back")])])])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("h2",[t._v("Welcome TodoList!")]),t._v(" "),s("p",[t._v("Record every day's things")])])}],o={render:a,staticRenderFns:n};e.a=o},mpEK:function(t,e){},prV7:function(t,e,s){"use strict";function a(t){s("Sq6j")}var n=s("+n6O"),o=s("GLLD"),r=s("VU/8"),i=a,c=r(n.a,o.a,!1,i,null,null);e.a=c.exports},uMhA:function(t,e){},xJD8:function(t,e,s){"use strict";var a=s("mvHQ"),n=s.n(a),o=s("prV7"),r=s("EHTI"),i=s("HJ7t"),c=s("xqa4"),u=s("N+zL"),l=s("yR01"),d=s("JnRc"),h=s.n(d);e.a={name:"app",components:{Date:o.a,Todos:r.a,InputTodo:c.a,SignOrLogin:u.a,NavLeft:l.a},data:function(){return{dateCst:i.a.dateConstructor,showInput:{show:!1},onDate:{date:""},todos:[],currentUser:{id:"",username:""},logout1:{show1:!1}}},methods:{ievent:function(t,e){this.todos[t]=e},listenUser:function(t){this.currentUser=t},listenTodos:function(t,e){this.todos=t,this.todos.id=e},saveOrUpdateTodos:function(){this.todos.id?this.updateTodos():this.saveTodos()},saveTodos:function(){var t=this,e=n()(this.todos),s=h.a.Object.extend("AllTodos"),a=new s,o=new h.a.ACL;o.setReadAccess(h.a.User.current(),!0),o.setWriteAccess(h.a.User.current(),!0),a.set("content",e),a.setACL(o),a.save().then(function(e){t.todos.id=e.id,console.log("保存成功")},function(t){alert("保存失败")})},updateTodos:function(){var t=n()(this.todos),e=h.a.Object.createWithoutData("AllTodos",this.todos.id);e.set("content",t),e.save().then(function(){console.log("更新成功")})},go1:function(t){this.todos[t].completed=!this.todos[t].completed,this.saveOrUpdateTodos()},delete2:function(t){this.todos.splice(t,1),this.saveOrUpdateTodos()}}}},xqa4:function(t,e,s){"use strict";function a(t){s("gG0R")}var n=s("+qDX"),o=s("71hJ"),r=s("VU/8"),i=a,c=r(n.a,o.a,!1,i,null,null);e.a=c.exports},yR01:function(t,e,s){"use strict";function a(t){s("ZgbM")}var n=s("ipkt"),o=s("NQrU"),r=s("VU/8"),i=a,c=r(n.a,o.a,!1,i,null,null);e.a=c.exports}},["NHnr"]);
//# sourceMappingURL=app.eab3298c3d62bf53af8d.js.map