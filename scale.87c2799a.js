parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KA2S":[function(require,module,exports) {
var t=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=h(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={};function v(){}function d(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(G([])));L&&L!==e&&n.call(L,i)&&(m=L);var x=g.prototype=v.prototype=Object.create(m);function E(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function b(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"==typeof s&&n.call(s,"__await")?r.resolve(s.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(s).then(function(t){f.value=t,a(f)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function G(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:r,done:!0}}return d.prototype=x.constructor=g,g.constructor=d,g[c]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new b(u(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=G,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=t}catch(r){Function("r","regeneratorRuntime = r")(t)}
},{}],"p6jZ":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=function i(a,n,g,h,r){var c=this;e(this,i),t(this,"getResult",function(){return[{name:"BMI",value:c.getBMI(),unit:"kg/m<sup>2</sup>",description:"ค่าดัชนีมวลกาย"},{name:"Ideal Weight",value:c.getIdealWeight(),unit:"kg",description:"น้ำหนักตัวที่เหมาะสม"},{name:"TBW",value:c.getWaterPercentage(),unit:"%",description:"ปริมาณน้ำทั้งหมดในร่างกาย"},{name:"Metabolic Age",value:c.getMetabolicAge(),unit:"years old",description:"อัตราการเผาพลาญเทียบกับอายุ"},{name:"Protein Percentage",value:c.getProteinPercentage(),unit:"%",description:"อัตราส่วนโปรตีนในร่างกาย"},{name:"LBM Coefficient",value:c.getLBMCoefficient(),unit:"kg",description:"น้ำหนักตัวที่ปราศจากไขมัน"},{name:"BMR",value:c.getBMR(),unit:"cal",description:"ระดับการใช้พลังงานพื้นฐาน"},{name:"Fat",value:c.getFatPercentage(),unit:"%",description:"ไขมันในร่างการ"},{name:"Muscle Mass",value:c.getMuscleMass(),unit:"kg",description:"มวลของกล้ามเนื้อ"},{name:"Bone Mass",value:c.getBoneMass(),unit:"kg",description:"มวลของกระดูก"},{name:"Visceral Fat",value:c.getVisceralFat(),unit:"%",description:"ไขมันในช่องท้อง"}]}),t(this,"checkValueOverflow",function(e,t,i){return e<t?t:e>i?i:e}),t(this,"getIdealWeight",function(){return"female"==c.sex?.6*(c.height-70):.7*(c.height-80)}),t(this,"getMetabolicAge",function(){var e=-.7471*c.height+.9161*c.weight+.4184*c.age+.0517*c.impedance+54.2267;return"female"==c.sex&&(e=-1.1165*c.height+1.5784*c.weight+.4615*c.age+.0415*c.impedance+83.2548),c.checkValueOverflow(e,15,80)}),t(this,"getVisceralFat",function(){var e,t,i;return"female"===c.sex?c.weight>-1*(13-.5*c.height)?(e=1.45*c.height+.1158*c.height*c.height-120,i=(t=500*c.weight/e)-6+.07*c.age):(t=.691+-.0024*c.height+-.0024*c.height,i=-1*(.027*c.height-t*c.weight)+.07*c.age-c.age):c.height<1.6*c.weight?(t=-1*(.4*c.height-c.height*(.0826*c.height)),i=305*c.weight/(t+48)-2.9+.15*c.age):(t=.765+-.0015*c.height,i=-1*(.143*c.height-c.weight*t)+.15*c.age-5),c.checkValueOverflow(i,1,50)}),t(this,"getProteinPercentage",function(){var e=c.getMuscleMass()/c.weight*100;return e-=c.getWaterPercentage(),c.checkValueOverflow(e,5,32)}),t(this,"getWaterPercentage",function(){var e=.7*(100-c.getFatPercentage()),t=.98;return e<=50&&(t=1.02),e*t>=65&&(e=75),c.checkValueOverflow(e*t,35,75)}),t(this,"getBMI",function(){return c.checkValueOverflow(c.weight/(c.height/100*(c.height/100)),10,90)}),t(this,"getBMR",function(){var e;return"female"===c.sex?(e=864.6+10.2036*c.weight,e-=.39336*c.height,e-=6.204*c.age):(e=877.8+14.916*c.weight,e-=.726*c.height,e-=8.976*c.age),"female"===c.sex&&e>2996?e=5e3:"male"===c.sex&&e>2322&&(e=5e3),c.checkValueOverflow(e,500,1e4)}),t(this,"getFatPercentage",function(){var e=.8;"female"===c.sex&&c.age<=49?e=9.25:"female"===c.sex&&c.age>49&&(e=7.25);var t=c.getLBMCoefficient(),i=1;"male"==c.sex&&c.weight<61?i=.98:"female"==c.sex&&c.weight>60?c.height>160?i*=1.03:i=.96:"female"==c.sex&&c.weight<50&&(c.height>160?i*=1.03:i=1.02);var a=100*(1-(t-e)*i/c.weight);return a>63&&(a=75),c.checkValueOverflow(a,5,75)}),t(this,"getMuscleMass",function(){var e=c.weight-.01*c.getFatPercentage()*c.weight-c.getBoneMass();return"female"==c.sex&&e>=84?e=120:"male"==c.sex&&e>=93.5&&(e=120),c.checkValueOverflow(e,10,120)}),t(this,"getBoneMass",function(){var e=.18016894;"female"==c.sex&&(e=.245691014);var t=-1*(e-.05158*c.getLBMCoefficient());return t>2.2?t+=.1:t-=.1,"female"==c.sex&&t>5.1?t=8:"male"==c.sex&&t>5.2&&(t=8),c.checkValueOverflow(t,.5,8)}),t(this,"getLBMCoefficient",function(){var e=9.058*c.height/100*(c.height/100);return e+=.32*c.weight+12.226,e-=.0068*c.impedance,e-=.0542*c.age}),this.weight=a,this.impedance=n,this.height=g,this.age=h,this.sex=r};exports.default=i;
},{}],"at3D":[function(require,module,exports) {
"use strict";require("regenerator-runtime/runtime");var e,t=r(require("./metrics"));function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t,r,n,u,o,a){try{var c=e[o](a),i=c.value}catch(d){return void r(d)}c.done?t(i):Promise.resolve(i).then(n,u)}function u(e){return function(){var t=this,r=arguments;return new Promise(function(u,o){var a=e.apply(t,r);function c(e){n(a,u,o,c,i,"next",e)}function i(e){n(a,u,o,c,i,"throw",e)}c(void 0)})}}var o=function(r){var n=new Uint8Array(r.buffer),u=32&n[1],o=((n[12]<<8)+n[11])/200,a=(n[10]<<8)+n[9];if(u>0?document.querySelector(".progress").removeAttribute("hidden"):document.querySelector(".progress").setAttribute("hidden",""),a>0&&a<3e3&&u){e.stop();var c=document.querySelector('input[name="height"]').value,i=document.querySelector('input[name="age"]').value,d=document.querySelector('select[name="gender"]').value;new t.default(o,a,c,i,d).getResult().map(function(e){var t='<div class="item"><div class="name">'.concat(e.name,'</div><div class="value">').concat(parseFloat(e.value).toFixed(2),"</div></div>");document.querySelector(".result").innerHTML+=t}),document.querySelector(".result").removeAttribute("hidden"),document.querySelector(".progress").setAttribute("hidden","")}document.querySelector(".value").innerHTML=parseFloat(o).toFixed(1)},a=function(){var t=u(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.bluetooth.requestLEScan({acceptAllAdvertisements:!0});case 3:e=t.sent,document.querySelector(".button.start").setAttribute("hidden",""),document.querySelector(".loading").removeAttribute("hidden"),document.querySelector(".form").setAttribute("hidden",""),navigator.bluetooth.addEventListener("advertisementreceived",function(e){"MIBFS"===e.device.name&&(document.querySelector(".loading").setAttribute("hidden",""),document.querySelector(".scale").removeAttribute("hidden"),e.serviceData.forEach(function(e){o(e)}))}),t.next=19;break;case 10:if(t.prev=10,t.t0=t.catch(0),11!==t.t0.code){t.next=14;break}return t.abrupt("return");case 14:if(0!==t.t0.code){t.next=17;break}return alert("Bluetooth scanning permission denied. Please update browser settings to allow access."),t.abrupt("return");case 17:console.log(t.t0.message),alert(t.t0.message);case 19:case"end":return t.stop()}},t,null,[[0,10]])}));return function(){return t.apply(this,arguments)}}(),c=function(e){var t=document.querySelector('input[name="height"]').value,r=document.querySelector('input[name="age"]').value;t>0&&r>0?document.querySelector(".button.start").removeAttribute("disabled"):document.querySelector(".button.start").setAttribute("disabled","")};document.querySelector('input[name="height"]').addEventListener("keyup",c),document.querySelector('input[name="age"]').addEventListener("keyup",c),document.querySelector(".button.start").addEventListener("click",a);
},{"regenerator-runtime/runtime":"KA2S","./metrics":"p6jZ"}]},{},["at3D"], null)
//# sourceMappingURL=/scale.87c2799a.js.map