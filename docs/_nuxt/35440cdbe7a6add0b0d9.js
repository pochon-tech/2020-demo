/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{247:function(t,e,n){"use strict";n.d(e,"a",(function(){return j})),n.d(e,"c",(function(){return r.a})),n.d(e,"b",(function(){return E}));var r=n(0);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function d(t,e){v(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(n){v(t.prototype,e.prototype,n)})),Object.getOwnPropertyNames(e).forEach((function(n){v(t,e,n)}))}function v(t,e,n){(n?Reflect.getOwnMetadataKeys(e,n):Reflect.getOwnMetadataKeys(e)).forEach((function(r){var o=n?Reflect.getOwnMetadata(r,e,n):Reflect.getOwnMetadata(r,e);n?Reflect.defineMetadata(r,o,t,n):Reflect.defineMetadata(r,o,t)}))}var y={__proto__:[]}instanceof Array;function h(t){return function(e,n,r){var o="function"==typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof r&&(r=void 0),o.__decorators__.push((function(e){return t(e,n,r)}))}}function m(t,e){var n=e.prototype._init;e.prototype._init=function(){var e=this,n=Object.getOwnPropertyNames(t);if(t.$options.props)for(var r in t.$options.props)t.hasOwnProperty(r)||n.push(r);n.forEach((function(n){"_"!==n.charAt(0)&&Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},configurable:!0})}))};var data=new e;e.prototype._init=n;var r={};return Object.keys(data).forEach((function(t){void 0!==data[t]&&(r[t]=data[t])})),r}var _=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function x(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var n=t.prototype;Object.getOwnPropertyNames(n).forEach((function(t){if("constructor"!==t)if(_.indexOf(t)>-1)e[t]=n[t];else{var r=Object.getOwnPropertyDescriptor(n,t);void 0!==r.value?"function"==typeof r.value?(e.methods||(e.methods={}))[t]=r.value:(e.mixins||(e.mixins=[])).push({data:function(){return c({},t,r.value)}}):(r.get||r.set)&&((e.computed||(e.computed={}))[t]={get:r.get,set:r.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return m(this,t)}});var o=t.__decorators__;o&&(o.forEach((function(t){return t(e)})),delete t.__decorators__);var f=Object.getPrototypeOf(t.prototype),v=f instanceof r.a?f.constructor:r.a,y=v.extend(e);return w(y,t,v),l()&&d(y,t),y}var k={prototype:!0,arguments:!0,callee:!0,caller:!0};function w(t,e,n){Object.getOwnPropertyNames(e).forEach((function(r){if(!k[r]){var c=Object.getOwnPropertyDescriptor(t,r);if(!c||c.configurable){var f,l,d=Object.getOwnPropertyDescriptor(e,r);if(!y){if("cid"===r)return;var v=Object.getOwnPropertyDescriptor(n,r);if(f=d.value,l=o(f),null!=f&&("object"===l||"function"===l)&&v&&v.value===d.value)return}0,Object.defineProperty(t,r,d)}}}))}function O(t){return"function"==typeof t?x(t):function(e){return x(e,t)}}O.registerHooks=function(t){_.push.apply(_,f(t))};var j=O;"undefined"!=typeof Reflect&&Reflect.getMetadata;function E(t){return h((function(e,n){e.computed=e.computed||{},e.computed[n]={cache:!1,get:function(){return this.$refs[t||n]}}}))}},248:function(t,e,n){var content=n(250);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("3df515ca",content,!0,{sourceMap:!1})},249:function(t,e,n){"use strict";var r=n(248);n.n(r).a},250:function(t,e,n){(e=n(25)(!1)).push([t.i,".listItemEdit[data-v-4998f066]{color:#e9dfdf}",""]),t.exports=e},258:function(t,e,n){"use strict";n.r(e);n(24),n(19),n(14);var r,o=n(18),c=(n(93),n(247)),f=(r=function(t,b){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),l=function(t,e,n,desc){var r,c=arguments.length,f=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(o.a)(Reflect))&&"function"==typeof Reflect.decorate)f=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(f=(c<3?r(f):c>3?r(e,n,f):r(e,n))||f);return c>3&&f&&Object.defineProperty(e,n,f),f},d=function(t,e,n,r){return new(n||(n=Promise))((function(o,c){function f(t){try{d(r.next(t))}catch(t){c(t)}}function l(t){try{d(r.throw(t))}catch(t){c(t)}}function d(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(f,l)}d((r=r.apply(t,e||[])).next())}))},v=function(t,body){var e,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(f){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(t,o)}catch(t){c=[6,t],n=0}finally{e=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,f])}}},y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isEdit=!1,e.taskForm={id:"",title:"",isDone:!1,isComplete:!1,time:0},e}return f(e,t),e.prototype.mounted=function(){this.$vx.task.initTasksPage()},e.prototype.cahnge=function(t){return d(this,void 0,void 0,(function(){var e;return v(this,(function(n){switch(n.label){case 0:return this.isEdit=!0,e=this,[4,this.$vx.task.getTask(t)];case 1:return e.taskForm=n.sent(),[2]}}))}))},e.prototype.save=function(){return d(this,void 0,void 0,(function(){return v(this,(function(t){switch(t.label){case 0:return this.taskForm.title?[4,this.$vx.task.saveTask(this.taskForm)]:(this.$ons.notification.alert({title:"",message:"タイトルを入力してください",animation:"fade"}),[2,!1]);case 1:return t.sent(),this.isEdit=!1,this.taskForm={id:"",title:"",isDone:!1,isComplete:!1,time:0},[2]}}))}))},e.prototype.removeCheck=function(t){return d(this,void 0,void 0,(function(){return v(this,(function(e){switch(e.label){case 0:return[4,this.$ons.notification.confirm({title:"",message:"削除しますか？",animation:"fade"})];case 1:return 0===e.sent()?[2,!1]:[4,this.remove(t)];case 2:return e.sent(),[2]}}))}))},e.prototype.remove=function(t){return d(this,void 0,void 0,(function(){return v(this,(function(e){switch(e.label){case 0:return[4,this.$vx.task.removeTask(t)];case 1:return e.sent(),[2]}}))}))},e.prototype.start=function(t){return d(this,void 0,void 0,(function(){return v(this,(function(e){switch(e.label){case 0:return[4,this.$ons.notification.confirm({title:"",message:"開始しますか？",animation:"fade"})];case 1:return 0===e.sent()?[2,!1]:[4,this.$vx.task.startTask(t)];case 2:return e.sent(),[2]}}))}))},e.prototype.end=function(t){return d(this,void 0,void 0,(function(){return v(this,(function(e){switch(e.label){case 0:return[4,this.$ons.notification.confirm({title:"",message:"完了しますか？",animation:"fade"})];case 1:return 0===e.sent()?[2,!1]:[4,this.$vx.task.endTask(t)];case 2:return e.sent(),[2]}}))}))},e=l([Object(c.a)({})],e)}(c.c),h=(n(249),n(33)),component=Object(h.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-ons-page",[n("v-ons-toolbar",[n("div",{staticClass:"center"},[t._v("タスク管理")])]),t._v(" "),n("v-ons-card",[n("v-ons-list",[n("v-ons-list-header",{staticStyle:{"font-style":"italic","font-size":"20px",padding:"5px 0px 0px 5px"}},[t._v("タスク登録/編集")]),t._v(" "),n("v-ons-list-item",[n("div",{staticClass:"center"},[n("v-ons-input",{attrs:{placeholder:"input task title...",size:"2000",modifier:"underbar"},model:{value:t.taskForm.title,callback:function(e){t.$set(t.taskForm,"title",e)},expression:"taskForm.title"}})],1),t._v(" "),n("div",{staticClass:"right"},[n("ons-icon",{staticStyle:{margin:"5px","font-size":"40px"},attrs:{icon:"md-plus-circle-o"},on:{click:function(e){return t.save()}}})],1)]),t._v(" "),n("v-ons-list-header",{staticStyle:{"font-style":"italic","font-size":"20px",padding:"5px 0px 0px 5px"}},[t._v("未完了")]),t._v(" "),t._l(t.$vx.task.tasks.filter((function(t){return!t.isComplete})),(function(e,r){return n("v-ons-list-item",{key:"not-complete-"+r,class:{listItemEdit:t.isEdit}},[e.isComplete?t._e():[n("div",{staticClass:"left"}),t._v(" "),n("div",{staticClass:"center"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),n("div",{staticClass:"right"},[!t.isEdit&&e.isDone?n("ons-icon",{staticStyle:{margin:"10px","font-size":"30px"},attrs:{icon:"md-timer",spin:""},on:{click:function(n){return t.end(e.id)}}}):t._e(),t._v(" "),t.isEdit||e.isDone?t._e():n("ons-icon",{staticStyle:{margin:"10px","font-size":"30px"},attrs:{icon:"md-timer"},on:{click:function(n){return t.start(e.id)}}}),t._v(" "),t.isEdit?t._e():n("ons-icon",{staticStyle:{margin:"10px","font-size":"30px"},attrs:{icon:"md-edit"},on:{click:function(n){return t.cahnge(e.id)}}}),t._v(" "),t.isEdit?t._e():n("ons-icon",{staticStyle:{margin:"10px","font-size":"30px"},attrs:{icon:"md-delete"},on:{click:function(n){return t.removeCheck(e.id)}}})],1)]],2)})),t._v(" "),n("v-ons-list-header",{staticStyle:{"font-style":"italic","font-size":"20px",padding:"5px 0px 0px 5px"}},[t._v("完了済")]),t._v(" "),t._l(t.$vx.task.tasks.filter((function(t){return t.isComplete})),(function(e,r){return n("v-ons-list-item",{key:"complete-"+r},[n("div",{staticClass:"center"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),n("div",{staticClass:"right"},[[t._v("所要時間：\n            "),Math.floor(e.time/1e3/60/60)>0?[t._v("\n              "+t._s(Math.floor(e.time/1e3/60/60)%60)+"時間\n            ")]:t._e(),t._v(" "),Math.floor(e.time/1e3/60)>0?[t._v("\n              "+t._s(Math.floor(e.time/1e3/60)%60)+"分\n            ")]:t._e(),t._v(" "),Math.floor(e.time/1e3)>0?[t._v("\n              "+t._s(Math.floor(e.time/1e3)%60)+"秒\n            ")]:t._e()],t._v(" "),t.isEdit?t._e():n("ons-icon",{staticStyle:{margin:"10px","font-size":"30px"},attrs:{icon:"md-delete"},on:{click:function(n){return t.removeCheck(e.id)}}})],2)])}))],2)],1)],1)}),[],!1,null,"4998f066",null);e.default=component.exports}}]);