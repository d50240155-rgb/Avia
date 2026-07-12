(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Ed={exports:{}},pc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function iS(){if(F_)return pc;F_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return pc.Fragment=t,pc.jsx=i,pc.jsxs=i,pc}var z_;function aS(){return z_||(z_=1,Ed.exports=iS()),Ed.exports}var _t=aS(),Td={exports:{}},Le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function sS(){if(B_)return Le;B_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function b(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,y={};function v(I,$,Lt){this.props=I,this.context=$,this.refs=y,this.updater=Lt||A}v.prototype.isReactComponent={},v.prototype.setState=function(I,$){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,$,"setState")},v.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function O(){}O.prototype=v.prototype;function B(I,$,Lt){this.props=I,this.context=$,this.refs=y,this.updater=Lt||A}var D=B.prototype=new O;D.constructor=B,U(D,v.prototype),D.isPureReactComponent=!0;var F=Array.isArray;function L(){}var z={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function N(I,$,Lt){var Gt=Lt.ref;return{$$typeof:r,type:I,key:$,ref:Gt!==void 0?Gt:null,props:Lt}}function Y(I,$){return N(I.type,$,I.props)}function q(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function j(I){var $={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Lt){return $[Lt]})}var gt=/\/+/g;function yt(I,$){return typeof I=="object"&&I!==null&&I.key!=null?j(""+I.key):$.toString(36)}function it(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(L,L):(I.status="pending",I.then(function($){I.status==="pending"&&(I.status="fulfilled",I.value=$)},function($){I.status==="pending"&&(I.status="rejected",I.reason=$)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function H(I,$,Lt,Gt,qt){var ft=typeof I;(ft==="undefined"||ft==="boolean")&&(I=null);var Dt=!1;if(I===null)Dt=!0;else switch(ft){case"bigint":case"string":case"number":Dt=!0;break;case"object":switch(I.$$typeof){case r:case t:Dt=!0;break;case M:return Dt=I._init,H(Dt(I._payload),$,Lt,Gt,qt)}}if(Dt)return qt=qt(I),Dt=Gt===""?"."+yt(I,0):Gt,F(qt)?(Lt="",Dt!=null&&(Lt=Dt.replace(gt,"$&/")+"/"),H(qt,$,Lt,"",function(ve){return ve})):qt!=null&&(q(qt)&&(qt=Y(qt,Lt+(qt.key==null||I&&I.key===qt.key?"":(""+qt.key).replace(gt,"$&/")+"/")+Dt)),$.push(qt)),1;Dt=0;var Nt=Gt===""?".":Gt+":";if(F(I))for(var Jt=0;Jt<I.length;Jt++)Gt=I[Jt],ft=Nt+yt(Gt,Jt),Dt+=H(Gt,$,Lt,ft,qt);else if(Jt=b(I),typeof Jt=="function")for(I=Jt.call(I),Jt=0;!(Gt=I.next()).done;)Gt=Gt.value,ft=Nt+yt(Gt,Jt++),Dt+=H(Gt,$,Lt,ft,qt);else if(ft==="object"){if(typeof I.then=="function")return H(it(I),$,Lt,Gt,qt);throw $=String(I),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Dt}function X(I,$,Lt){if(I==null)return I;var Gt=[],qt=0;return H(I,Gt,"","",function(ft){return $.call(Lt,ft,qt++)}),Gt}function lt(I){if(I._status===-1){var $=I._result;$=$(),$.then(function(Lt){(I._status===0||I._status===-1)&&(I._status=1,I._result=Lt)},function(Lt){(I._status===0||I._status===-1)&&(I._status=2,I._result=Lt)}),I._status===-1&&(I._status=0,I._result=$)}if(I._status===1)return I._result.default;throw I._result}var Et=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Ot={map:X,forEach:function(I,$,Lt){X(I,function(){$.apply(this,arguments)},Lt)},count:function(I){var $=0;return X(I,function(){$++}),$},toArray:function(I){return X(I,function($){return $})||[]},only:function(I){if(!q(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return Le.Activity=x,Le.Children=Ot,Le.Component=v,Le.Fragment=i,Le.Profiler=l,Le.PureComponent=B,Le.StrictMode=s,Le.Suspense=m,Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,Le.__COMPILER_RUNTIME={__proto__:null,c:function(I){return z.H.useMemoCache(I)}},Le.cache=function(I){return function(){return I.apply(null,arguments)}},Le.cacheSignal=function(){return null},Le.cloneElement=function(I,$,Lt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Gt=U({},I.props),qt=I.key;if($!=null)for(ft in $.key!==void 0&&(qt=""+$.key),$)!E.call($,ft)||ft==="key"||ft==="__self"||ft==="__source"||ft==="ref"&&$.ref===void 0||(Gt[ft]=$[ft]);var ft=arguments.length-2;if(ft===1)Gt.children=Lt;else if(1<ft){for(var Dt=Array(ft),Nt=0;Nt<ft;Nt++)Dt[Nt]=arguments[Nt+2];Gt.children=Dt}return N(I.type,qt,Gt)},Le.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},Le.createElement=function(I,$,Lt){var Gt,qt={},ft=null;if($!=null)for(Gt in $.key!==void 0&&(ft=""+$.key),$)E.call($,Gt)&&Gt!=="key"&&Gt!=="__self"&&Gt!=="__source"&&(qt[Gt]=$[Gt]);var Dt=arguments.length-2;if(Dt===1)qt.children=Lt;else if(1<Dt){for(var Nt=Array(Dt),Jt=0;Jt<Dt;Jt++)Nt[Jt]=arguments[Jt+2];qt.children=Nt}if(I&&I.defaultProps)for(Gt in Dt=I.defaultProps,Dt)qt[Gt]===void 0&&(qt[Gt]=Dt[Gt]);return N(I,ft,qt)},Le.createRef=function(){return{current:null}},Le.forwardRef=function(I){return{$$typeof:p,render:I}},Le.isValidElement=q,Le.lazy=function(I){return{$$typeof:M,_payload:{_status:-1,_result:I},_init:lt}},Le.memo=function(I,$){return{$$typeof:d,type:I,compare:$===void 0?null:$}},Le.startTransition=function(I){var $=z.T,Lt={};z.T=Lt;try{var Gt=I(),qt=z.S;qt!==null&&qt(Lt,Gt),typeof Gt=="object"&&Gt!==null&&typeof Gt.then=="function"&&Gt.then(L,Et)}catch(ft){Et(ft)}finally{$!==null&&Lt.types!==null&&($.types=Lt.types),z.T=$}},Le.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},Le.use=function(I){return z.H.use(I)},Le.useActionState=function(I,$,Lt){return z.H.useActionState(I,$,Lt)},Le.useCallback=function(I,$){return z.H.useCallback(I,$)},Le.useContext=function(I){return z.H.useContext(I)},Le.useDebugValue=function(){},Le.useDeferredValue=function(I,$){return z.H.useDeferredValue(I,$)},Le.useEffect=function(I,$){return z.H.useEffect(I,$)},Le.useEffectEvent=function(I){return z.H.useEffectEvent(I)},Le.useId=function(){return z.H.useId()},Le.useImperativeHandle=function(I,$,Lt){return z.H.useImperativeHandle(I,$,Lt)},Le.useInsertionEffect=function(I,$){return z.H.useInsertionEffect(I,$)},Le.useLayoutEffect=function(I,$){return z.H.useLayoutEffect(I,$)},Le.useMemo=function(I,$){return z.H.useMemo(I,$)},Le.useOptimistic=function(I,$){return z.H.useOptimistic(I,$)},Le.useReducer=function(I,$,Lt){return z.H.useReducer(I,$,Lt)},Le.useRef=function(I){return z.H.useRef(I)},Le.useState=function(I){return z.H.useState(I)},Le.useSyncExternalStore=function(I,$,Lt){return z.H.useSyncExternalStore(I,$,Lt)},Le.useTransition=function(){return z.H.useTransition()},Le.version="19.2.7",Le}var G_;function Jp(){return G_||(G_=1,Td.exports=sS()),Td.exports}var le=Jp(),Ad={exports:{}},mc={},wd={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function rS(){return H_||(H_=1,(function(r){function t(H,X){var lt=H.length;H.push(X);t:for(;0<lt;){var Et=lt-1>>>1,Ot=H[Et];if(0<l(Ot,X))H[Et]=X,H[lt]=Ot,lt=Et;else break t}}function i(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var X=H[0],lt=H.pop();if(lt!==X){H[0]=lt;t:for(var Et=0,Ot=H.length,I=Ot>>>1;Et<I;){var $=2*(Et+1)-1,Lt=H[$],Gt=$+1,qt=H[Gt];if(0>l(Lt,lt))Gt<Ot&&0>l(qt,Lt)?(H[Et]=qt,H[Gt]=lt,Et=Gt):(H[Et]=Lt,H[$]=lt,Et=$);else if(Gt<Ot&&0>l(qt,lt))H[Et]=qt,H[Gt]=lt,Et=Gt;else break t}}return X}function l(H,X){var lt=H.sortIndex-X.sortIndex;return lt!==0?lt:H.id-X.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],d=[],M=1,x=null,g=3,b=!1,A=!1,U=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function D(H){for(var X=i(d);X!==null;){if(X.callback===null)s(d);else if(X.startTime<=H)s(d),X.sortIndex=X.expirationTime,t(m,X);else break;X=i(d)}}function F(H){if(U=!1,D(H),!A)if(i(m)!==null)A=!0,L||(L=!0,j());else{var X=i(d);X!==null&&it(F,X.startTime-H)}}var L=!1,z=-1,E=5,N=-1;function Y(){return y?!0:!(r.unstable_now()-N<E)}function q(){if(y=!1,L){var H=r.unstable_now();N=H;var X=!0;try{t:{A=!1,U&&(U=!1,O(z),z=-1),b=!0;var lt=g;try{e:{for(D(H),x=i(m);x!==null&&!(x.expirationTime>H&&Y());){var Et=x.callback;if(typeof Et=="function"){x.callback=null,g=x.priorityLevel;var Ot=Et(x.expirationTime<=H);if(H=r.unstable_now(),typeof Ot=="function"){x.callback=Ot,D(H),X=!0;break e}x===i(m)&&s(m),D(H)}else s(m);x=i(m)}if(x!==null)X=!0;else{var I=i(d);I!==null&&it(F,I.startTime-H),X=!1}}break t}finally{x=null,g=lt,b=!1}X=void 0}}finally{X?j():L=!1}}}var j;if(typeof B=="function")j=function(){B(q)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,yt=gt.port2;gt.port1.onmessage=q,j=function(){yt.postMessage(null)}}else j=function(){v(q,0)};function it(H,X){z=v(function(){H(r.unstable_now())},X)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(H){switch(g){case 1:case 2:case 3:var X=3;break;default:X=g}var lt=g;g=X;try{return H()}finally{g=lt}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(H,X){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var lt=g;g=H;try{return X()}finally{g=lt}},r.unstable_scheduleCallback=function(H,X,lt){var Et=r.unstable_now();switch(typeof lt=="object"&&lt!==null?(lt=lt.delay,lt=typeof lt=="number"&&0<lt?Et+lt:Et):lt=Et,H){case 1:var Ot=-1;break;case 2:Ot=250;break;case 5:Ot=1073741823;break;case 4:Ot=1e4;break;default:Ot=5e3}return Ot=lt+Ot,H={id:M++,callback:X,priorityLevel:H,startTime:lt,expirationTime:Ot,sortIndex:-1},lt>Et?(H.sortIndex=lt,t(d,H),i(m)===null&&H===i(d)&&(U?(O(z),z=-1):U=!0,it(F,lt-Et))):(H.sortIndex=Ot,t(m,H),A||b||(A=!0,L||(L=!0,j()))),H},r.unstable_shouldYield=Y,r.unstable_wrapCallback=function(H){var X=g;return function(){var lt=g;g=X;try{return H.apply(this,arguments)}finally{g=lt}}}})(Rd)),Rd}var V_;function oS(){return V_||(V_=1,wd.exports=rS()),wd.exports}var Cd={exports:{}},$i={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function lS(){if(k_)return $i;k_=1;var r=Jp();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)d+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,M){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:d,implementation:M}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return $i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,$i.createPortal=function(m,d){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,M)},$i.flushSync=function(m){var d=h.T,M=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=M,s.d.f()}},$i.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},$i.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},$i.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var M=d.as,x=p(M,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,b=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;M==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:b}):M==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:b,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},$i.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var M=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:M,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},$i.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var M=d.as,x=p(M,d.crossOrigin);s.d.L(m,M,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},$i.preloadModule=function(m,d){if(typeof m=="string")if(d){var M=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:M,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},$i.requestFormReset=function(m){s.d.r(m)},$i.unstable_batchedUpdates=function(m,d){return m(d)},$i.useFormState=function(m,d,M){return h.H.useFormState(m,d,M)},$i.useFormStatus=function(){return h.H.useHostTransitionStatus()},$i.version="19.2.7",$i}var X_;function cS(){if(X_)return Cd.exports;X_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Cd.exports=lS(),Cd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_;function uS(){if(W_)return mc;W_=1;var r=oS(),t=Jp(),i=cS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function d(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,C=u.child;C;){if(C===a){_=!0,a=u,o=f;break}if(C===o){_=!0,o=u,a=f;break}C=C.sibling}if(!_){for(C=f.child;C;){if(C===a){_=!0,a=f,o=u;break}if(C===o){_=!0,o=f,a=u;break}C=C.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function M(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=M(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),B=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),q=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=q&&e[q]||e["@@iterator"],typeof e=="function"?e:null)}var gt=Symbol.for("react.client.reference");function yt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===gt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case F:return"Suspense";case L:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case B:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:yt(e.type)||"Memo";case E:n=e._payload,e=e._init;try{return yt(e(n))}catch{}}return null}var it=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt={pending:!1,data:null,method:null,action:null},Et=[],Ot=-1;function I(e){return{current:e}}function $(e){0>Ot||(e.current=Et[Ot],Et[Ot]=null,Ot--)}function Lt(e,n){Ot++,Et[Ot]=e.current,e.current=n}var Gt=I(null),qt=I(null),ft=I(null),Dt=I(null);function Nt(e,n){switch(Lt(ft,n),Lt(qt,e),Lt(Gt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?r_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=r_(n),e=o_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(Gt),Lt(Gt,e)}function Jt(){$(Gt),$(qt),$(ft)}function ve(e){e.memoizedState!==null&&Lt(Dt,e);var n=Gt.current,a=o_(n,e.type);n!==a&&(Lt(qt,e),Lt(Gt,a))}function ae(e){qt.current===e&&($(Gt),$(qt)),Dt.current===e&&($(Dt),uc._currentValue=lt)}var Un,Ue;function Se(e){if(Un===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Un=n&&n[1]||"",Ue=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Un+e+Ue}var Ye=!1;function ze(e,n){if(!e||Ye)return"";Ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Ct=function(){throw Error()};if(Object.defineProperty(Ct.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ct,[])}catch(mt){var dt=mt}Reflect.construct(e,[],Ct)}else{try{Ct.call()}catch(mt){dt=mt}e.call(Ct.prototype)}}else{try{throw Error()}catch(mt){dt=mt}(Ct=e())&&typeof Ct.catch=="function"&&Ct.catch(function(){})}}catch(mt){if(mt&&dt&&typeof mt.stack=="string")return[mt.stack,dt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],C=f[1];if(_&&C){var k=_.split(`
`),ut=C.split(`
`);for(u=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ut.length&&!ut[u].includes("DetermineComponentFrameRoot");)u++;if(o===k.length||u===ut.length)for(o=k.length-1,u=ut.length-1;1<=o&&0<=u&&k[o]!==ut[u];)u--;for(;1<=o&&0<=u;o--,u--)if(k[o]!==ut[u]){if(o!==1||u!==1)do if(o--,u--,0>u||k[o]!==ut[u]){var bt=`
`+k[o].replace(" at new "," at ");return e.displayName&&bt.includes("<anonymous>")&&(bt=bt.replace("<anonymous>",e.displayName)),bt}while(1<=o&&0<=u);break}}}finally{Ye=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Se(a):""}function Zn(e,n){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se("Lazy");case 13:return e.child!==n&&n!==null?Se("Suspense Fallback"):Se("Suspense");case 19:return Se("SuspenseList");case 0:case 15:return ze(e.type,!1);case 11:return ze(e.type.render,!1);case 1:return ze(e.type,!0);case 31:return Se("Activity");default:return""}}function Kn(e){try{var n="",a=null;do n+=Zn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Nn=Object.prototype.hasOwnProperty,me=r.unstable_scheduleCallback,ye=r.unstable_cancelCallback,ei=r.unstable_shouldYield,J=r.unstable_requestPaint,An=r.unstable_now,un=r.unstable_getCurrentPriorityLevel,P=r.unstable_ImmediatePriority,S=r.unstable_UserBlockingPriority,et=r.unstable_NormalPriority,ht=r.unstable_LowPriority,xt=r.unstable_IdlePriority,Bt=r.log,Xt=r.unstable_setDisableYieldValue,T=null,V=null;function Z(e){if(typeof Bt=="function"&&Xt(e),V&&typeof V.setStrictMode=="function")try{V.setStrictMode(T,e)}catch{}}var R=Math.clz32?Math.clz32:Mt,pt=Math.log,nt=Math.LN2;function Mt(e){return e>>>=0,e===0?32:31-(pt(e)/nt|0)|0}var Tt=256,Pt=262144,G=4194304;function vt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function at(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var C=o&134217727;return C!==0?(o=C&~f,o!==0?u=vt(o):(_&=C,_!==0?u=vt(_):a||(a=C&~e,a!==0&&(u=vt(a))))):(C=o&~f,C!==0?u=vt(C):_!==0?u=vt(_):a||(a=o&~e,a!==0&&(u=vt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function At(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function zt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rt(){var e=G;return G<<=1,(G&62914560)===0&&(G=4194304),e}function Wt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ht(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function He(e,n,a,o,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,k=e.expirationTimes,ut=e.hiddenUpdates;for(a=_&~a;0<a;){var bt=31-R(a),Ct=1<<bt;C[bt]=0,k[bt]=-1;var dt=ut[bt];if(dt!==null)for(ut[bt]=null,bt=0;bt<dt.length;bt++){var mt=dt[bt];mt!==null&&(mt.lane&=-536870913)}a&=~Ct}o!==0&&Ve(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function Ve(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-R(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function ui(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-R(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function kn(e,n){var a=n&-n;return a=(a&42)!==0?1:sa(a),(a&(e.suspendedLanes|n))!==0?0:a}function sa(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ln(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ra(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:D_(e.type))}function On(e,n){var a=X.p;try{return X.p=e,n()}finally{X.p=a}}var fi=Math.random().toString(36).slice(2),fn="__reactFiber$"+fi,yn="__reactProps$"+fi,xe="__reactContainer$"+fi,qn="__reactEvents$"+fi,Vi="__reactListeners$"+fi,ki="__reactHandles$"+fi,Pi="__reactResources$"+fi,si="__reactMarker$"+fi;function Ii(e){delete e[fn],delete e[yn],delete e[qn],delete e[Vi],delete e[ki]}function _i(e){var n=e[fn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[xe]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=p_(e);e!==null;){if(a=e[fn])return a;e=p_(e)}return n}e=a,a=e.parentNode}return null}function jn(e){if(e=e[fn]||e[xe]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ie(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ri(e){var n=e[Pi];return n||(n=e[Pi]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(e){e[si]=!0}var za=new Set,w={};function W(e,n){st(e,n),st(e+"Capture",n)}function st(e,n){for(w[e]=n,e=0;e<n.length;e++)za.add(n[e])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},kt={};function Zt(e){return Nn.call(kt,e)?!0:Nn.call(rt,e)?!1:ot.test(e)?kt[e]=!0:(rt[e]=!0,!1)}function Vt(e,n,a){if(Zt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Qt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Kt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ee(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function be(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $t(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ze(e){if(!e._valueTracker){var n=be(e)?"checked":"value";e._valueTracker=$t(e,n,""+e[n])}}function vn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=be(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Ut(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ft=/[\n"\\]/g;function jt(e){return e.replace(Ft,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function It(e,n,a,o,u,f,_,C){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ee(n)):e.value!==""+ee(n)&&(e.value=""+ee(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?se(e,_,ee(n)):a!=null?se(e,_,ee(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+ee(C):e.removeAttribute("name")}function wn(e,n,a,o,u,f,_,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ze(e);return}a=a!=null?""+ee(a):"",n=n!=null?""+ee(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=C?e.checked:!!o,e.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),Ze(e)}function se(e,n,a){n==="number"&&Ut(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function xn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ee(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Bn(e,n,a){if(n!=null&&(n=""+ee(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ee(a):""}function bn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(it(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ee(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ze(e)}function Qn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ae=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function on(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ae.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Si(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&on(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&on(e,f,n[f])}function Ke(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ui=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function oa(e){return Ui.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function la(){}var ba=null;function ls(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ha=null,Ji=null;function go(e){var n=jn(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(It(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+jt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[yn]||null;if(!u)throw Error(s(90));It(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&vn(o)}break t;case"textarea":Bn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&xn(e,!!a.multiple,n,!1)}}}var Or=!1;function Tl(e,n,a){if(Or)return e(n,a);Or=!0;try{var o=e(n);return o}finally{if(Or=!1,(ha!==null||Ji!==null)&&(mu(),ha&&(n=ha,e=Ji,Ji=ha=null,go(n),e)))for(n=0;n<e.length;n++)go(e[n])}}function $s(e,n){var a=e.stateNode;if(a===null)return null;var o=a[yn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ba=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Al=!1;if(Ba)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){Al=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{Al=!1}var cs=null,wl=null,_o=null;function vo(){if(_o)return _o;var e,n=wl,a=n.length,o,u="value"in cs?cs.value:cs.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var _=a-e;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return _o=u.slice(e,1<o?1-o:void 0)}function Pr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ir(){return!0}function xo(){return!1}function Jn(e){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ir:xo,this.isPropagationStopped=xo,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ir)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ir)},persist:function(){},isPersistent:Ir}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tr=Jn(Qa),Fr=x({},Qa,{view:0,detail:0}),Rl=Jn(Fr),Mo,Cl,zr,Es=x({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fe,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(Mo=e.screenX-zr.screenX,Cl=e.screenY-zr.screenY):Cl=Mo=0,zr=e),Mo)},movementY:function(e){return"movementY"in e?e.movementY:Cl}}),Dl=Jn(Es),Tf=x({},Es,{dataTransfer:0}),Af=Jn(Tf),Ul=x({},Fr,{relatedTarget:0}),Nl=Jn(Ul),wf=x({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Oc=Jn(wf),Rf=x({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cf=Jn(Rf),ke=x({},Qa,{data:0}),Xe=Jn(ke),Ce={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ge={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pe={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rn(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Pe[e])?!!n[e]:!1}function fe(){return Rn}var pn=x({},Fr,{key:function(e){if(e.key){var n=Ce[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Pr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ge[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fe,charCode:function(e){return e.type==="keypress"?Pr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ni=Jn(pn),Yn=x({},Es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hi=Jn(Yn),Fi=x({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fe}),Xi=Jn(Fi),Ea=x({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),da=Jn(Ea),Pn=x({},Es,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ts=Jn(Pn),hn=x({},Qa,{newState:0,oldState:0}),Cn=Jn(hn),di=[9,13,27,32],zi=Ba&&"CompositionEvent"in window,bi=null;Ba&&"documentMode"in document&&(bi=document.documentMode);var oe=Ba&&"TextEvent"in window&&!bi,_e=Ba&&(!zi||bi&&8<bi&&11>=bi),de=" ",re=!1;function De(e,n){switch(e){case"keyup":return di.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mn(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pe=!1;function Be(e,n){switch(e){case"compositionend":return mn(n);case"keypress":return n.which!==32?null:(re=!0,de);case"textInput":return e=n.data,e===de&&re?null:e;default:return null}}function je(e,n){if(pe)return e==="compositionend"||!zi&&De(e,n)?(e=vo(),_o=wl=cs=null,pe=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return _e&&n.locale!=="ko"?null:n.data;default:return null}}var dn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nn(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!dn[e.type]:n==="textarea"}function Qe(e,n,a,o){ha?Ji?Ji.push(o):Ji=[o]:ha=o,n=yu(n,"onChange"),0<n.length&&(a=new tr("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ne=null,ce=null;function we(e){t_(e,0)}function Re(e){var n=Ie(e);if(vn(n))return e}function Je(e,n){if(e==="change")return n}var Dn=!1;if(Ba){var Ei;if(Ba){var oi="oninput"in document;if(!oi){var As=document.createElement("div");As.setAttribute("oninput","return;"),oi=typeof As.oninput=="function"}Ei=oi}else Ei=!1;Dn=Ei&&(!document.documentMode||9<document.documentMode)}function Ta(){Ne&&(Ne.detachEvent("onpropertychange",So),ce=Ne=null)}function So(e){if(e.propertyName==="value"&&Re(ce)){var n=[];Qe(n,ce,e,ls(e)),Tl(we,n)}}function Ll(e,n,a){e==="focusin"?(Ta(),Ne=n,ce=a,Ne.attachEvent("onpropertychange",So)):e==="focusout"&&Ta()}function Df(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Re(ce)}function Uf(e,n){if(e==="click")return Re(n)}function Nf(e,n){if(e==="input"||e==="change")return Re(n)}function Px(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Aa=typeof Object.is=="function"?Object.is:Px;function Ol(e,n){if(Aa(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Nn.call(n,u)||!Aa(e[u],n[u]))return!1}return!0}function Em(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tm(e,n){var a=Em(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Em(a)}}function Am(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Am(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function wm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ut(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ut(e.document)}return n}function Lf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ix=Ba&&"documentMode"in document&&11>=document.documentMode,yo=null,Of=null,Pl=null,Pf=!1;function Rm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Pf||yo==null||yo!==Ut(o)||(o=yo,"selectionStart"in o&&Lf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Pl&&Ol(Pl,o)||(Pl=o,o=yu(Of,"onSelect"),0<o.length&&(n=new tr("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=yo)))}function Br(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var bo={animationend:Br("Animation","AnimationEnd"),animationiteration:Br("Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionrun:Br("Transition","TransitionRun"),transitionstart:Br("Transition","TransitionStart"),transitioncancel:Br("Transition","TransitionCancel"),transitionend:Br("Transition","TransitionEnd")},If={},Cm={};Ba&&(Cm=document.createElement("div").style,"AnimationEvent"in window||(delete bo.animationend.animation,delete bo.animationiteration.animation,delete bo.animationstart.animation),"TransitionEvent"in window||delete bo.transitionend.transition);function Gr(e){if(If[e])return If[e];if(!bo[e])return e;var n=bo[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Cm)return If[e]=n[a];return e}var Dm=Gr("animationend"),Um=Gr("animationiteration"),Nm=Gr("animationstart"),Fx=Gr("transitionrun"),zx=Gr("transitionstart"),Bx=Gr("transitioncancel"),Lm=Gr("transitionend"),Om=new Map,Ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ff.push("scrollEnd");function Ja(e,n){Om.set(e,n),W(n,[e])}var Pc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ga=[],Eo=0,zf=0;function Ic(){for(var e=Eo,n=zf=Eo=0;n<e;){var a=Ga[n];Ga[n++]=null;var o=Ga[n];Ga[n++]=null;var u=Ga[n];Ga[n++]=null;var f=Ga[n];if(Ga[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&Pm(a,u,f)}}function Fc(e,n,a,o){Ga[Eo++]=e,Ga[Eo++]=n,Ga[Eo++]=a,Ga[Eo++]=o,zf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Bf(e,n,a,o){return Fc(e,n,a,o),zc(e)}function Hr(e,n){return Fc(e,null,null,n),zc(e)}function Pm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-R(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function zc(e){if(50<ic)throw ic=0,Zh=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var To={};function Gx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wa(e,n,a,o){return new Gx(e,n,a,o)}function Gf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ws(e,n){var a=e.alternate;return a===null?(a=wa(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Im(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Bc(e,n,a,o,u,f){var _=0;if(o=e,typeof e=="function")Gf(e)&&(_=1);else if(typeof e=="string")_=WM(e,a,Gt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=wa(31,a,n,u),e.elementType=N,e.lanes=f,e;case U:return Vr(a.children,u,f,n);case y:_=8,u|=24;break;case v:return e=wa(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case F:return e=wa(13,a,n,u),e.elementType=F,e.lanes=f,e;case L:return e=wa(19,a,n,u),e.elementType=L,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:_=10;break t;case O:_=9;break t;case D:_=11;break t;case z:_=14;break t;case E:_=16,o=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=wa(_,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Vr(e,n,a,o){return e=wa(7,e,o,n),e.lanes=a,e}function Hf(e,n,a){return e=wa(6,e,null,n),e.lanes=a,e}function Fm(e){var n=wa(18,null,null,0);return n.stateNode=e,n}function Vf(e,n,a){return n=wa(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var zm=new WeakMap;function Ha(e,n){if(typeof e=="object"&&e!==null){var a=zm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Kn(n)},zm.set(e,n),n)}return{value:e,source:n,stack:Kn(n)}}var Ao=[],wo=0,Gc=null,Il=0,Va=[],ka=0,er=null,us=1,fs="";function Rs(e,n){Ao[wo++]=Il,Ao[wo++]=Gc,Gc=e,Il=n}function Bm(e,n,a){Va[ka++]=us,Va[ka++]=fs,Va[ka++]=er,er=e;var o=us;e=fs;var u=32-R(o)-1;o&=~(1<<u),a+=1;var f=32-R(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,us=1<<32-R(n)+u|a<<u|o,fs=f+e}else us=1<<f|a<<u|o,fs=e}function kf(e){e.return!==null&&(Rs(e,1),Bm(e,1,0))}function Xf(e){for(;e===Gc;)Gc=Ao[--wo],Ao[wo]=null,Il=Ao[--wo],Ao[wo]=null;for(;e===er;)er=Va[--ka],Va[ka]=null,fs=Va[--ka],Va[ka]=null,us=Va[--ka],Va[ka]=null}function Gm(e,n){Va[ka++]=us,Va[ka++]=fs,Va[ka++]=er,us=n.id,fs=n.overflow,er=e}var Wi=null,$n=null,ln=!1,nr=null,Xa=!1,Wf=Error(s(519));function ir(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fl(Ha(n,e)),Wf}function Hm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[fn]=e,n[yn]=o,a){case"dialog":tn("cancel",n),tn("close",n);break;case"iframe":case"object":case"embed":tn("load",n);break;case"video":case"audio":for(a=0;a<sc.length;a++)tn(sc[a],n);break;case"source":tn("error",n);break;case"img":case"image":case"link":tn("error",n),tn("load",n);break;case"details":tn("toggle",n);break;case"input":tn("invalid",n),wn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":tn("invalid",n);break;case"textarea":tn("invalid",n),bn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||a_(n.textContent,a)?(o.popover!=null&&(tn("beforetoggle",n),tn("toggle",n)),o.onScroll!=null&&tn("scroll",n),o.onScrollEnd!=null&&tn("scrollend",n),o.onClick!=null&&(n.onclick=la),n=!0):n=!1,n||ir(e,!0)}function Vm(e){for(Wi=e.return;Wi;)switch(Wi.tag){case 5:case 31:case 13:Xa=!1;return;case 27:case 3:Xa=!0;return;default:Wi=Wi.return}}function Ro(e){if(e!==Wi)return!1;if(!ln)return Vm(e),ln=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||cd(e.type,e.memoizedProps)),a=!a),a&&$n&&ir(e),Vm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));$n=d_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));$n=d_(e)}else n===27?(n=$n,_r(e.type)?(e=pd,pd=null,$n=e):$n=n):$n=Wi?qa(e.stateNode.nextSibling):null;return!0}function kr(){$n=Wi=null,ln=!1}function qf(){var e=nr;return e!==null&&(_a===null?_a=e:_a.push.apply(_a,e),nr=null),e}function Fl(e){nr===null?nr=[e]:nr.push(e)}var Yf=I(null),Xr=null,Cs=null;function ar(e,n,a){Lt(Yf,n._currentValue),n._currentValue=a}function Ds(e){e._currentValue=Yf.current,$(Yf)}function Zf(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Kf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var C=f;f=u;for(var k=0;k<n.length;k++)if(C.context===n[k]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Zf(f.return,a,e),o||(_=null);break t}f=C.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Zf(_,a,e),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Co(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var C=u.type;Aa(u.pendingProps.value,_.value)||(e!==null?e.push(C):e=[C])}}else if(u===Dt.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(uc):e=[uc])}u=u.return}e!==null&&Kf(n,e,a,o),n.flags|=262144}function Hc(e){for(e=e.firstContext;e!==null;){if(!Aa(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Wr(e){Xr=e,Cs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function qi(e){return km(Xr,e)}function Vc(e,n){return Xr===null&&Wr(e),km(e,n)}function km(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Cs===null){if(e===null)throw Error(s(308));Cs=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Cs=Cs.next=n;return a}var Hx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Vx=r.unstable_scheduleCallback,kx=r.unstable_NormalPriority,Ti={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jf(){return{controller:new Hx,data:new Map,refCount:0}}function zl(e){e.refCount--,e.refCount===0&&Vx(kx,function(){e.controller.abort()})}var Bl=null,Qf=0,Do=0,Uo=null;function Xx(e,n){if(Bl===null){var a=Bl=[];Qf=0,Do=td(),Uo={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Qf++,n.then(Xm,Xm),n}function Xm(){if(--Qf===0&&Bl!==null){Uo!==null&&(Uo.status="fulfilled");var e=Bl;Bl=null,Do=0,Uo=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Wx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Wm=H.S;H.S=function(e,n){Rg=An(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Xx(e,n),Wm!==null&&Wm(e,n)};var qr=I(null);function Jf(){var e=qr.current;return e!==null?e:Xn.pooledCache}function kc(e,n){n===null?Lt(qr,qr.current):Lt(qr,n.pool)}function qm(){var e=Jf();return e===null?null:{parent:Ti._currentValue,pool:e}}var No=Error(s(460)),$f=Error(s(474)),Xc=Error(s(542)),Wc={then:function(){}};function Ym(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(la,la),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jm(e),e;default:if(typeof n.status=="string")n.then(la,la);else{if(e=Xn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jm(e),e}throw Zr=n,No}}function Yr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Zr=a,No):a}}var Zr=null;function Km(){if(Zr===null)throw Error(s(459));var e=Zr;return Zr=null,e}function jm(e){if(e===No||e===Xc)throw Error(s(483))}var Lo=null,Gl=0;function qc(e){var n=Gl;return Gl+=1,Lo===null&&(Lo=[]),Zm(Lo,e,n)}function Hl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Yc(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Qm(e){function n(tt,K){if(e){var ct=tt.deletions;ct===null?(tt.deletions=[K],tt.flags|=16):ct.push(K)}}function a(tt,K){if(!e)return null;for(;K!==null;)n(tt,K),K=K.sibling;return null}function o(tt){for(var K=new Map;tt!==null;)tt.key!==null?K.set(tt.key,tt):K.set(tt.index,tt),tt=tt.sibling;return K}function u(tt,K){return tt=ws(tt,K),tt.index=0,tt.sibling=null,tt}function f(tt,K,ct){return tt.index=ct,e?(ct=tt.alternate,ct!==null?(ct=ct.index,ct<K?(tt.flags|=67108866,K):ct):(tt.flags|=67108866,K)):(tt.flags|=1048576,K)}function _(tt){return e&&tt.alternate===null&&(tt.flags|=67108866),tt}function C(tt,K,ct,wt){return K===null||K.tag!==6?(K=Hf(ct,tt.mode,wt),K.return=tt,K):(K=u(K,ct),K.return=tt,K)}function k(tt,K,ct,wt){var he=ct.type;return he===U?bt(tt,K,ct.props.children,wt,ct.key):K!==null&&(K.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===E&&Yr(he)===K.type)?(K=u(K,ct.props),Hl(K,ct),K.return=tt,K):(K=Bc(ct.type,ct.key,ct.props,null,tt.mode,wt),Hl(K,ct),K.return=tt,K)}function ut(tt,K,ct,wt){return K===null||K.tag!==4||K.stateNode.containerInfo!==ct.containerInfo||K.stateNode.implementation!==ct.implementation?(K=Vf(ct,tt.mode,wt),K.return=tt,K):(K=u(K,ct.children||[]),K.return=tt,K)}function bt(tt,K,ct,wt,he){return K===null||K.tag!==7?(K=Vr(ct,tt.mode,wt,he),K.return=tt,K):(K=u(K,ct),K.return=tt,K)}function Ct(tt,K,ct){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=Hf(""+K,tt.mode,ct),K.return=tt,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case b:return ct=Bc(K.type,K.key,K.props,null,tt.mode,ct),Hl(ct,K),ct.return=tt,ct;case A:return K=Vf(K,tt.mode,ct),K.return=tt,K;case E:return K=Yr(K),Ct(tt,K,ct)}if(it(K)||j(K))return K=Vr(K,tt.mode,ct,null),K.return=tt,K;if(typeof K.then=="function")return Ct(tt,qc(K),ct);if(K.$$typeof===B)return Ct(tt,Vc(tt,K),ct);Yc(tt,K)}return null}function dt(tt,K,ct,wt){var he=K!==null?K.key:null;if(typeof ct=="string"&&ct!==""||typeof ct=="number"||typeof ct=="bigint")return he!==null?null:C(tt,K,""+ct,wt);if(typeof ct=="object"&&ct!==null){switch(ct.$$typeof){case b:return ct.key===he?k(tt,K,ct,wt):null;case A:return ct.key===he?ut(tt,K,ct,wt):null;case E:return ct=Yr(ct),dt(tt,K,ct,wt)}if(it(ct)||j(ct))return he!==null?null:bt(tt,K,ct,wt,null);if(typeof ct.then=="function")return dt(tt,K,qc(ct),wt);if(ct.$$typeof===B)return dt(tt,K,Vc(tt,ct),wt);Yc(tt,ct)}return null}function mt(tt,K,ct,wt,he){if(typeof wt=="string"&&wt!==""||typeof wt=="number"||typeof wt=="bigint")return tt=tt.get(ct)||null,C(K,tt,""+wt,he);if(typeof wt=="object"&&wt!==null){switch(wt.$$typeof){case b:return tt=tt.get(wt.key===null?ct:wt.key)||null,k(K,tt,wt,he);case A:return tt=tt.get(wt.key===null?ct:wt.key)||null,ut(K,tt,wt,he);case E:return wt=Yr(wt),mt(tt,K,ct,wt,he)}if(it(wt)||j(wt))return tt=tt.get(ct)||null,bt(K,tt,wt,he,null);if(typeof wt.then=="function")return mt(tt,K,ct,qc(wt),he);if(wt.$$typeof===B)return mt(tt,K,ct,Vc(K,wt),he);Yc(K,wt)}return null}function te(tt,K,ct,wt){for(var he=null,Mn=null,ie=K,Ge=K=0,sn=null;ie!==null&&Ge<ct.length;Ge++){ie.index>Ge?(sn=ie,ie=null):sn=ie.sibling;var Sn=dt(tt,ie,ct[Ge],wt);if(Sn===null){ie===null&&(ie=sn);break}e&&ie&&Sn.alternate===null&&n(tt,ie),K=f(Sn,K,Ge),Mn===null?he=Sn:Mn.sibling=Sn,Mn=Sn,ie=sn}if(Ge===ct.length)return a(tt,ie),ln&&Rs(tt,Ge),he;if(ie===null){for(;Ge<ct.length;Ge++)ie=Ct(tt,ct[Ge],wt),ie!==null&&(K=f(ie,K,Ge),Mn===null?he=ie:Mn.sibling=ie,Mn=ie);return ln&&Rs(tt,Ge),he}for(ie=o(ie);Ge<ct.length;Ge++)sn=mt(ie,tt,Ge,ct[Ge],wt),sn!==null&&(e&&sn.alternate!==null&&ie.delete(sn.key===null?Ge:sn.key),K=f(sn,K,Ge),Mn===null?he=sn:Mn.sibling=sn,Mn=sn);return e&&ie.forEach(function(yr){return n(tt,yr)}),ln&&Rs(tt,Ge),he}function Me(tt,K,ct,wt){if(ct==null)throw Error(s(151));for(var he=null,Mn=null,ie=K,Ge=K=0,sn=null,Sn=ct.next();ie!==null&&!Sn.done;Ge++,Sn=ct.next()){ie.index>Ge?(sn=ie,ie=null):sn=ie.sibling;var yr=dt(tt,ie,Sn.value,wt);if(yr===null){ie===null&&(ie=sn);break}e&&ie&&yr.alternate===null&&n(tt,ie),K=f(yr,K,Ge),Mn===null?he=yr:Mn.sibling=yr,Mn=yr,ie=sn}if(Sn.done)return a(tt,ie),ln&&Rs(tt,Ge),he;if(ie===null){for(;!Sn.done;Ge++,Sn=ct.next())Sn=Ct(tt,Sn.value,wt),Sn!==null&&(K=f(Sn,K,Ge),Mn===null?he=Sn:Mn.sibling=Sn,Mn=Sn);return ln&&Rs(tt,Ge),he}for(ie=o(ie);!Sn.done;Ge++,Sn=ct.next())Sn=mt(ie,tt,Ge,Sn.value,wt),Sn!==null&&(e&&Sn.alternate!==null&&ie.delete(Sn.key===null?Ge:Sn.key),K=f(Sn,K,Ge),Mn===null?he=Sn:Mn.sibling=Sn,Mn=Sn);return e&&ie.forEach(function(nS){return n(tt,nS)}),ln&&Rs(tt,Ge),he}function Vn(tt,K,ct,wt){if(typeof ct=="object"&&ct!==null&&ct.type===U&&ct.key===null&&(ct=ct.props.children),typeof ct=="object"&&ct!==null){switch(ct.$$typeof){case b:t:{for(var he=ct.key;K!==null;){if(K.key===he){if(he=ct.type,he===U){if(K.tag===7){a(tt,K.sibling),wt=u(K,ct.props.children),wt.return=tt,tt=wt;break t}}else if(K.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===E&&Yr(he)===K.type){a(tt,K.sibling),wt=u(K,ct.props),Hl(wt,ct),wt.return=tt,tt=wt;break t}a(tt,K);break}else n(tt,K);K=K.sibling}ct.type===U?(wt=Vr(ct.props.children,tt.mode,wt,ct.key),wt.return=tt,tt=wt):(wt=Bc(ct.type,ct.key,ct.props,null,tt.mode,wt),Hl(wt,ct),wt.return=tt,tt=wt)}return _(tt);case A:t:{for(he=ct.key;K!==null;){if(K.key===he)if(K.tag===4&&K.stateNode.containerInfo===ct.containerInfo&&K.stateNode.implementation===ct.implementation){a(tt,K.sibling),wt=u(K,ct.children||[]),wt.return=tt,tt=wt;break t}else{a(tt,K);break}else n(tt,K);K=K.sibling}wt=Vf(ct,tt.mode,wt),wt.return=tt,tt=wt}return _(tt);case E:return ct=Yr(ct),Vn(tt,K,ct,wt)}if(it(ct))return te(tt,K,ct,wt);if(j(ct)){if(he=j(ct),typeof he!="function")throw Error(s(150));return ct=he.call(ct),Me(tt,K,ct,wt)}if(typeof ct.then=="function")return Vn(tt,K,qc(ct),wt);if(ct.$$typeof===B)return Vn(tt,K,Vc(tt,ct),wt);Yc(tt,ct)}return typeof ct=="string"&&ct!==""||typeof ct=="number"||typeof ct=="bigint"?(ct=""+ct,K!==null&&K.tag===6?(a(tt,K.sibling),wt=u(K,ct),wt.return=tt,tt=wt):(a(tt,K),wt=Hf(ct,tt.mode,wt),wt.return=tt,tt=wt),_(tt)):a(tt,K)}return function(tt,K,ct,wt){try{Gl=0;var he=Vn(tt,K,ct,wt);return Lo=null,he}catch(ie){if(ie===No||ie===Xc)throw ie;var Mn=wa(29,ie,null,tt.mode);return Mn.lanes=wt,Mn.return=tt,Mn}finally{}}}var Kr=Qm(!0),Jm=Qm(!1),sr=!1;function th(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function eh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function rr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function or(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(En&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=zc(e),Pm(e,null,a),n}return Fc(e,o,n,a),zc(e)}function Vl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ui(e,a)}}function nh(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ih=!1;function kl(){if(ih){var e=Uo;if(e!==null)throw e}}function Xl(e,n,a,o){ih=!1;var u=e.updateQueue;sr=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var k=C,ut=k.next;k.next=null,_===null?f=ut:_.next=ut,_=k;var bt=e.alternate;bt!==null&&(bt=bt.updateQueue,C=bt.lastBaseUpdate,C!==_&&(C===null?bt.firstBaseUpdate=ut:C.next=ut,bt.lastBaseUpdate=k))}if(f!==null){var Ct=u.baseState;_=0,bt=ut=k=null,C=f;do{var dt=C.lane&-536870913,mt=dt!==C.lane;if(mt?(an&dt)===dt:(o&dt)===dt){dt!==0&&dt===Do&&(ih=!0),bt!==null&&(bt=bt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var te=e,Me=C;dt=n;var Vn=a;switch(Me.tag){case 1:if(te=Me.payload,typeof te=="function"){Ct=te.call(Vn,Ct,dt);break t}Ct=te;break t;case 3:te.flags=te.flags&-65537|128;case 0:if(te=Me.payload,dt=typeof te=="function"?te.call(Vn,Ct,dt):te,dt==null)break t;Ct=x({},Ct,dt);break t;case 2:sr=!0}}dt=C.callback,dt!==null&&(e.flags|=64,mt&&(e.flags|=8192),mt=u.callbacks,mt===null?u.callbacks=[dt]:mt.push(dt))}else mt={lane:dt,tag:C.tag,payload:C.payload,callback:C.callback,next:null},bt===null?(ut=bt=mt,k=Ct):bt=bt.next=mt,_|=dt;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;mt=C,C=mt.next,mt.next=null,u.lastBaseUpdate=mt,u.shared.pending=null}}while(!0);bt===null&&(k=Ct),u.baseState=k,u.firstBaseUpdate=ut,u.lastBaseUpdate=bt,f===null&&(u.shared.lanes=0),hr|=_,e.lanes=_,e.memoizedState=Ct}}function $m(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function t0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)$m(a[e],n)}var Oo=I(null),Zc=I(0);function e0(e,n){e=Bs,Lt(Zc,e),Lt(Oo,n),Bs=e|n.baseLanes}function ah(){Lt(Zc,Bs),Lt(Oo,Oo.current)}function sh(){Bs=Zc.current,$(Oo),$(Zc)}var Ra=I(null),Wa=null;function lr(e){var n=e.alternate;Lt(vi,vi.current&1),Lt(Ra,e),Wa===null&&(n===null||Oo.current!==null||n.memoizedState!==null)&&(Wa=e)}function rh(e){Lt(vi,vi.current),Lt(Ra,e),Wa===null&&(Wa=e)}function n0(e){e.tag===22?(Lt(vi,vi.current),Lt(Ra,e),Wa===null&&(Wa=e)):cr()}function cr(){Lt(vi,vi.current),Lt(Ra,Ra.current)}function Ca(e){$(Ra),Wa===e&&(Wa=null),$(vi)}var vi=I(0);function Kc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||hd(a)||dd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Us=0,Fe=null,Gn=null,Ai=null,jc=!1,Po=!1,jr=!1,Qc=0,Wl=0,Io=null,qx=0;function pi(){throw Error(s(321))}function oh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Aa(e[a],n[a]))return!1;return!0}function lh(e,n,a,o,u,f){return Us=f,Fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=e===null||e.memoizedState===null?B0:bh,jr=!1,f=a(o,u),jr=!1,Po&&(f=a0(n,a,o,u)),i0(e),f}function i0(e){H.H=Zl;var n=Gn!==null&&Gn.next!==null;if(Us=0,Ai=Gn=Fe=null,jc=!1,Wl=0,Io=null,n)throw Error(s(300));e===null||wi||(e=e.dependencies,e!==null&&Hc(e)&&(wi=!0))}function a0(e,n,a,o){Fe=e;var u=0;do{if(Po&&(Io=null),Wl=0,Po=!1,25<=u)throw Error(s(301));if(u+=1,Ai=Gn=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}H.H=G0,f=n(a,o)}while(Po);return f}function Yx(){var e=H.H,n=e.useState()[0];return n=typeof n.then=="function"?ql(n):n,e=e.useState()[0],(Gn!==null?Gn.memoizedState:null)!==e&&(Fe.flags|=1024),n}function ch(){var e=Qc!==0;return Qc=0,e}function uh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function fh(e){if(jc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}jc=!1}Us=0,Ai=Gn=Fe=null,Po=!1,Wl=Qc=0,Io=null}function ca(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ai===null?Fe.memoizedState=Ai=e:Ai=Ai.next=e,Ai}function xi(){if(Gn===null){var e=Fe.alternate;e=e!==null?e.memoizedState:null}else e=Gn.next;var n=Ai===null?Fe.memoizedState:Ai.next;if(n!==null)Ai=n,Gn=e;else{if(e===null)throw Fe.alternate===null?Error(s(467)):Error(s(310));Gn=e,e={memoizedState:Gn.memoizedState,baseState:Gn.baseState,baseQueue:Gn.baseQueue,queue:Gn.queue,next:null},Ai===null?Fe.memoizedState=Ai=e:Ai=Ai.next=e}return Ai}function Jc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ql(e){var n=Wl;return Wl+=1,Io===null&&(Io=[]),e=Zm(Io,e,n),n=Fe,(Ai===null?n.memoizedState:Ai.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?B0:bh),e}function $c(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ql(e);if(e.$$typeof===B)return qi(e)}throw Error(s(438,String(e)))}function hh(e){var n=null,a=Fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Jc(),Fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=Y;return n.index++,a}function Ns(e,n){return typeof n=="function"?n(e):n}function tu(e){var n=xi();return dh(n,Gn,e)}function dh(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var C=_=null,k=null,ut=n,bt=!1;do{var Ct=ut.lane&-536870913;if(Ct!==ut.lane?(an&Ct)===Ct:(Us&Ct)===Ct){var dt=ut.revertLane;if(dt===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null}),Ct===Do&&(bt=!0);else if((Us&dt)===dt){ut=ut.next,dt===Do&&(bt=!0);continue}else Ct={lane:0,revertLane:ut.revertLane,gesture:null,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null},k===null?(C=k=Ct,_=f):k=k.next=Ct,Fe.lanes|=dt,hr|=dt;Ct=ut.action,jr&&a(f,Ct),f=ut.hasEagerState?ut.eagerState:a(f,Ct)}else dt={lane:Ct,revertLane:ut.revertLane,gesture:ut.gesture,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null},k===null?(C=k=dt,_=f):k=k.next=dt,Fe.lanes|=Ct,hr|=Ct;ut=ut.next}while(ut!==null&&ut!==n);if(k===null?_=f:k.next=C,!Aa(f,e.memoizedState)&&(wi=!0,bt&&(a=Uo,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=k,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ph(e){var n=xi(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);Aa(f,n.memoizedState)||(wi=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function s0(e,n,a){var o=Fe,u=xi(),f=ln;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!Aa((Gn||u).memoizedState,a);if(_&&(u.memoizedState=a,wi=!0),u=u.queue,_h(l0.bind(null,o,u,e),[e]),u.getSnapshot!==n||_||Ai!==null&&Ai.memoizedState.tag&1){if(o.flags|=2048,Fo(9,{destroy:void 0},o0.bind(null,o,u,a,n),null),Xn===null)throw Error(s(349));f||(Us&127)!==0||r0(o,n,a)}return a}function r0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Fe.updateQueue,n===null?(n=Jc(),Fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function o0(e,n,a,o){n.value=a,n.getSnapshot=o,c0(n)&&u0(e)}function l0(e,n,a){return a(function(){c0(n)&&u0(e)})}function c0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Aa(e,a)}catch{return!0}}function u0(e){var n=Hr(e,2);n!==null&&va(n,e,2)}function mh(e){var n=ca();if(typeof e=="function"){var a=e;if(e=a(),jr){Z(!0);try{a()}finally{Z(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ns,lastRenderedState:e},n}function f0(e,n,a,o){return e.baseState=a,dh(e,Gn,typeof o=="function"?o:Ns)}function Zx(e,n,a,o,u){if(iu(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};H.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,h0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function h0(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=H.T,_={};H.T=_;try{var C=a(u,o),k=H.S;k!==null&&k(_,C),d0(e,n,C)}catch(ut){gh(e,n,ut)}finally{f!==null&&_.types!==null&&(f.types=_.types),H.T=f}}else try{f=a(u,o),d0(e,n,f)}catch(ut){gh(e,n,ut)}}function d0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){p0(e,n,o)},function(o){return gh(e,n,o)}):p0(e,n,a)}function p0(e,n,a){n.status="fulfilled",n.value=a,m0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,h0(e,a)))}function gh(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,m0(n),n=n.next;while(n!==o)}e.action=null}function m0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function g0(e,n){return n}function _0(e,n){if(ln){var a=Xn.formState;if(a!==null){t:{var o=Fe;if(ln){if($n){e:{for(var u=$n,f=Xa;u.nodeType!==8;){if(!f){u=null;break e}if(u=qa(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){$n=qa(u.nextSibling),o=u.data==="F!";break t}}ir(o)}o=!1}o&&(n=a[0])}}return a=ca(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:g0,lastRenderedState:n},a.queue=o,a=I0.bind(null,Fe,o),o.dispatch=a,o=mh(!1),f=yh.bind(null,Fe,!1,o.queue),o=ca(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Zx.bind(null,Fe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function v0(e){var n=xi();return x0(n,Gn,e)}function x0(e,n,a){if(n=dh(e,n,g0)[0],e=tu(Ns)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ql(n)}catch(_){throw _===No?Xc:_}else o=n;n=xi();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(Fe.flags|=2048,Fo(9,{destroy:void 0},Kx.bind(null,u,a),null)),[o,f,e]}function Kx(e,n){e.action=n}function M0(e){var n=xi(),a=Gn;if(a!==null)return x0(n,a,e);xi(),n=n.memoizedState,a=xi();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Fo(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Fe.updateQueue,n===null&&(n=Jc(),Fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function S0(){return xi().memoizedState}function eu(e,n,a,o){var u=ca();Fe.flags|=e,u.memoizedState=Fo(1|n,{destroy:void 0},a,o===void 0?null:o)}function nu(e,n,a,o){var u=xi();o=o===void 0?null:o;var f=u.memoizedState.inst;Gn!==null&&o!==null&&oh(o,Gn.memoizedState.deps)?u.memoizedState=Fo(n,f,a,o):(Fe.flags|=e,u.memoizedState=Fo(1|n,f,a,o))}function y0(e,n){eu(8390656,8,e,n)}function _h(e,n){nu(2048,8,e,n)}function jx(e){Fe.flags|=4;var n=Fe.updateQueue;if(n===null)n=Jc(),Fe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function b0(e){var n=xi().memoizedState;return jx({ref:n,nextImpl:e}),function(){if((En&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function E0(e,n){return nu(4,2,e,n)}function T0(e,n){return nu(4,4,e,n)}function A0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function w0(e,n,a){a=a!=null?a.concat([e]):null,nu(4,4,A0.bind(null,n,e),a)}function vh(){}function R0(e,n){var a=xi();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&oh(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function C0(e,n){var a=xi();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&oh(n,o[1]))return o[0];if(o=e(),jr){Z(!0);try{e()}finally{Z(!1)}}return a.memoizedState=[o,n],o}function xh(e,n,a){return a===void 0||(Us&1073741824)!==0&&(an&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Dg(),Fe.lanes|=e,hr|=e,a)}function D0(e,n,a,o){return Aa(a,n)?a:Oo.current!==null?(e=xh(e,a,o),Aa(e,n)||(wi=!0),e):(Us&42)===0||(Us&1073741824)!==0&&(an&261930)===0?(wi=!0,e.memoizedState=a):(e=Dg(),Fe.lanes|=e,hr|=e,n)}function U0(e,n,a,o,u){var f=X.p;X.p=f!==0&&8>f?f:8;var _=H.T,C={};H.T=C,yh(e,!1,n,a);try{var k=u(),ut=H.S;if(ut!==null&&ut(C,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var bt=Wx(k,o);Yl(e,n,bt,Na(e))}else Yl(e,n,o,Na(e))}catch(Ct){Yl(e,n,{then:function(){},status:"rejected",reason:Ct},Na())}finally{X.p=f,_!==null&&C.types!==null&&(_.types=C.types),H.T=_}}function Qx(){}function Mh(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=N0(e).queue;U0(e,u,n,lt,a===null?Qx:function(){return L0(e),a(o)})}function N0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:lt,baseState:lt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ns,lastRenderedState:lt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ns,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function L0(e){var n=N0(e);n.next===null&&(n=e.alternate.memoizedState),Yl(e,n.next.queue,{},Na())}function Sh(){return qi(uc)}function O0(){return xi().memoizedState}function P0(){return xi().memoizedState}function Jx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Na();e=rr(a);var o=or(n,e,a);o!==null&&(va(o,n,a),Vl(o,n,a)),n={cache:jf()},e.payload=n;return}n=n.return}}function $x(e,n,a){var o=Na();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},iu(e)?F0(n,a):(a=Bf(e,n,a,o),a!==null&&(va(a,e,o),z0(a,n,o)))}function I0(e,n,a){var o=Na();Yl(e,n,a,o)}function Yl(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(iu(e))F0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,C=f(_,a);if(u.hasEagerState=!0,u.eagerState=C,Aa(C,_))return Fc(e,n,u,0),Xn===null&&Ic(),!1}catch{}finally{}if(a=Bf(e,n,u,o),a!==null)return va(a,e,o),z0(a,n,o),!0}return!1}function yh(e,n,a,o){if(o={lane:2,revertLane:td(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},iu(e)){if(n)throw Error(s(479))}else n=Bf(e,a,o,2),n!==null&&va(n,e,2)}function iu(e){var n=e.alternate;return e===Fe||n!==null&&n===Fe}function F0(e,n){Po=jc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function z0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ui(e,a)}}var Zl={readContext:qi,use:$c,useCallback:pi,useContext:pi,useEffect:pi,useImperativeHandle:pi,useLayoutEffect:pi,useInsertionEffect:pi,useMemo:pi,useReducer:pi,useRef:pi,useState:pi,useDebugValue:pi,useDeferredValue:pi,useTransition:pi,useSyncExternalStore:pi,useId:pi,useHostTransitionStatus:pi,useFormState:pi,useActionState:pi,useOptimistic:pi,useMemoCache:pi,useCacheRefresh:pi};Zl.useEffectEvent=pi;var B0={readContext:qi,use:$c,useCallback:function(e,n){return ca().memoizedState=[e,n===void 0?null:n],e},useContext:qi,useEffect:y0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,eu(4194308,4,A0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return eu(4194308,4,e,n)},useInsertionEffect:function(e,n){eu(4,2,e,n)},useMemo:function(e,n){var a=ca();n=n===void 0?null:n;var o=e();if(jr){Z(!0);try{e()}finally{Z(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=ca();if(a!==void 0){var u=a(n);if(jr){Z(!0);try{a(n)}finally{Z(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=$x.bind(null,Fe,e),[o.memoizedState,e]},useRef:function(e){var n=ca();return e={current:e},n.memoizedState=e},useState:function(e){e=mh(e);var n=e.queue,a=I0.bind(null,Fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:vh,useDeferredValue:function(e,n){var a=ca();return xh(a,e,n)},useTransition:function(){var e=mh(!1);return e=U0.bind(null,Fe,e.queue,!0,!1),ca().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Fe,u=ca();if(ln){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xn===null)throw Error(s(349));(an&127)!==0||r0(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,y0(l0.bind(null,o,f,e),[e]),o.flags|=2048,Fo(9,{destroy:void 0},o0.bind(null,o,f,a,n),null),a},useId:function(){var e=ca(),n=Xn.identifierPrefix;if(ln){var a=fs,o=us;a=(o&~(1<<32-R(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Qc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=qx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Sh,useFormState:_0,useActionState:_0,useOptimistic:function(e){var n=ca();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=yh.bind(null,Fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:hh,useCacheRefresh:function(){return ca().memoizedState=Jx.bind(null,Fe)},useEffectEvent:function(e){var n=ca(),a={impl:e};return n.memoizedState=a,function(){if((En&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},bh={readContext:qi,use:$c,useCallback:R0,useContext:qi,useEffect:_h,useImperativeHandle:w0,useInsertionEffect:E0,useLayoutEffect:T0,useMemo:C0,useReducer:tu,useRef:S0,useState:function(){return tu(Ns)},useDebugValue:vh,useDeferredValue:function(e,n){var a=xi();return D0(a,Gn.memoizedState,e,n)},useTransition:function(){var e=tu(Ns)[0],n=xi().memoizedState;return[typeof e=="boolean"?e:ql(e),n]},useSyncExternalStore:s0,useId:O0,useHostTransitionStatus:Sh,useFormState:v0,useActionState:v0,useOptimistic:function(e,n){var a=xi();return f0(a,Gn,e,n)},useMemoCache:hh,useCacheRefresh:P0};bh.useEffectEvent=b0;var G0={readContext:qi,use:$c,useCallback:R0,useContext:qi,useEffect:_h,useImperativeHandle:w0,useInsertionEffect:E0,useLayoutEffect:T0,useMemo:C0,useReducer:ph,useRef:S0,useState:function(){return ph(Ns)},useDebugValue:vh,useDeferredValue:function(e,n){var a=xi();return Gn===null?xh(a,e,n):D0(a,Gn.memoizedState,e,n)},useTransition:function(){var e=ph(Ns)[0],n=xi().memoizedState;return[typeof e=="boolean"?e:ql(e),n]},useSyncExternalStore:s0,useId:O0,useHostTransitionStatus:Sh,useFormState:M0,useActionState:M0,useOptimistic:function(e,n){var a=xi();return Gn!==null?f0(a,Gn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:hh,useCacheRefresh:P0};G0.useEffectEvent=b0;function Eh(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Th={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Na(),u=rr(o);u.payload=n,a!=null&&(u.callback=a),n=or(e,u,o),n!==null&&(va(n,e,o),Vl(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Na(),u=rr(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=or(e,u,o),n!==null&&(va(n,e,o),Vl(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Na(),o=rr(a);o.tag=2,n!=null&&(o.callback=n),n=or(e,o,a),n!==null&&(va(n,e,a),Vl(n,e,a))}};function H0(e,n,a,o,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!Ol(a,o)||!Ol(u,f):!0}function V0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Th.enqueueReplaceState(n,n.state,null)}function Qr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function k0(e){Pc(e)}function X0(e){console.error(e)}function W0(e){Pc(e)}function au(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function q0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ah(e,n,a){return a=rr(a),a.tag=3,a.payload={element:null},a.callback=function(){au(e,n)},a}function Y0(e){return e=rr(e),e.tag=3,e}function Z0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){q0(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){q0(n,a,o),typeof u!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function tM(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Co(n,a,u,!0),a=Ra.current,a!==null){switch(a.tag){case 31:case 13:return Wa===null?gu():a.alternate===null&&mi===0&&(mi=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Wc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Qh(e,o,u)),!1;case 22:return a.flags|=65536,o===Wc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Qh(e,o,u)),!1}throw Error(s(435,a.tag))}return Qh(e,o,u),gu(),!1}if(ln)return n=Ra.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Wf&&(e=Error(s(422),{cause:o}),Fl(Ha(e,a)))):(o!==Wf&&(n=Error(s(423),{cause:o}),Fl(Ha(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Ha(o,a),u=Ah(e.stateNode,o,u),nh(e,u),mi!==4&&(mi=2)),!1;var f=Error(s(520),{cause:o});if(f=Ha(f,a),nc===null?nc=[f]:nc.push(f),mi!==4&&(mi=2),n===null)return!0;o=Ha(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ah(a.stateNode,o,e),nh(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(dr===null||!dr.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Y0(u),Z0(u,e,a,o),nh(a,u),!1}a=a.return}while(a!==null);return!1}var wh=Error(s(461)),wi=!1;function Yi(e,n,a,o){n.child=e===null?Jm(n,null,a,o):Kr(n,e.child,a,o)}function K0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var C in o)C!=="ref"&&(_[C]=o[C])}else _=o;return Wr(n),o=lh(e,n,a,_,f,u),C=ch(),e!==null&&!wi?(uh(e,n,u),Ls(e,n,u)):(ln&&C&&kf(n),n.flags|=1,Yi(e,n,o,u),n.child)}function j0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Gf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Q0(e,n,f,o,u)):(e=Bc(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ph(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ol,a(_,o)&&e.ref===n.ref)return Ls(e,n,u)}return n.flags|=1,e=ws(f,o),e.ref=n.ref,e.return=n,n.child=e}function Q0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Ol(f,o)&&e.ref===n.ref)if(wi=!1,n.pendingProps=o=f,Ph(e,u))(e.flags&131072)!==0&&(wi=!0);else return n.lanes=e.lanes,Ls(e,n,u)}return Rh(e,n,a,o,u)}function J0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return $0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&kc(n,f!==null?f.cachePool:null),f!==null?e0(n,f):ah(),n0(n);else return o=n.lanes=536870912,$0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(kc(n,f.cachePool),e0(n,f),cr(),n.memoizedState=null):(e!==null&&kc(n,null),ah(),cr());return Yi(e,n,u,a),n.child}function Kl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function $0(e,n,a,o,u){var f=Jf();return f=f===null?null:{parent:Ti._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&kc(n,null),ah(),n0(n),e!==null&&Co(e,n,o,!0),n.childLanes=u,null}function su(e,n){return n=ou({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function tg(e,n,a){return Kr(n,e.child,null,a),e=su(n,n.pendingProps),e.flags|=2,Ca(n),n.memoizedState=null,e}function eM(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ln){if(o.mode==="hidden")return e=su(n,o),n.lanes=536870912,Kl(null,e);if(rh(n),(e=$n)?(e=h_(e,Xa),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:er!==null?{id:us,overflow:fs}:null,retryLane:536870912,hydrationErrors:null},a=Fm(e),a.return=n,n.child=a,Wi=n,$n=null)):e=null,e===null)throw ir(n);return n.lanes=536870912,null}return su(n,o)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(rh(n),u)if(n.flags&256)n.flags&=-257,n=tg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(wi||Co(e,n,a,!1),u=(a&e.childLanes)!==0,wi||u){if(o=Xn,o!==null&&(_=kn(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Hr(e,_),va(o,e,_),wh;gu(),n=tg(e,n,a)}else e=f.treeContext,$n=qa(_.nextSibling),Wi=n,ln=!0,nr=null,Xa=!1,e!==null&&Gm(n,e),n=su(n,o),n.flags|=4096;return n}return e=ws(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function ru(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Rh(e,n,a,o,u){return Wr(n),a=lh(e,n,a,o,void 0,u),o=ch(),e!==null&&!wi?(uh(e,n,u),Ls(e,n,u)):(ln&&o&&kf(n),n.flags|=1,Yi(e,n,a,u),n.child)}function eg(e,n,a,o,u,f){return Wr(n),n.updateQueue=null,a=a0(n,o,a,u),i0(e),o=ch(),e!==null&&!wi?(uh(e,n,f),Ls(e,n,f)):(ln&&o&&kf(n),n.flags|=1,Yi(e,n,a,f),n.child)}function ng(e,n,a,o,u){if(Wr(n),n.stateNode===null){var f=To,_=a.contextType;typeof _=="object"&&_!==null&&(f=qi(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Th,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},th(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?qi(_):To,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Eh(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Th.enqueueReplaceState(f,f.state,null),Xl(n,o,f,u),kl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var C=n.memoizedProps,k=Qr(a,C);f.props=k;var ut=f.context,bt=a.contextType;_=To,typeof bt=="object"&&bt!==null&&(_=qi(bt));var Ct=a.getDerivedStateFromProps;bt=typeof Ct=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,bt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||ut!==_)&&V0(n,f,o,_),sr=!1;var dt=n.memoizedState;f.state=dt,Xl(n,o,f,u),kl(),ut=n.memoizedState,C||dt!==ut||sr?(typeof Ct=="function"&&(Eh(n,a,Ct,o),ut=n.memoizedState),(k=sr||H0(n,a,k,o,dt,ut,_))?(bt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ut),f.props=o,f.state=ut,f.context=_,o=k):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,eh(e,n),_=n.memoizedProps,bt=Qr(a,_),f.props=bt,Ct=n.pendingProps,dt=f.context,ut=a.contextType,k=To,typeof ut=="object"&&ut!==null&&(k=qi(ut)),C=a.getDerivedStateFromProps,(ut=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==Ct||dt!==k)&&V0(n,f,o,k),sr=!1,dt=n.memoizedState,f.state=dt,Xl(n,o,f,u),kl();var mt=n.memoizedState;_!==Ct||dt!==mt||sr||e!==null&&e.dependencies!==null&&Hc(e.dependencies)?(typeof C=="function"&&(Eh(n,a,C,o),mt=n.memoizedState),(bt=sr||H0(n,a,bt,o,dt,mt,k)||e!==null&&e.dependencies!==null&&Hc(e.dependencies))?(ut||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,mt,k),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,mt,k)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&dt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&dt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=mt),f.props=o,f.state=mt,f.context=k,o=bt):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&dt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&dt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,ru(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Kr(n,e.child,null,u),n.child=Kr(n,null,a,u)):Yi(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Ls(e,n,u),e}function ig(e,n,a,o){return kr(),n.flags|=256,Yi(e,n,a,o),n.child}var Ch={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Dh(e){return{baseLanes:e,cachePool:qm()}}function Uh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Ua),e}function ag(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(vi.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(ln){if(u?lr(n):cr(),(e=$n)?(e=h_(e,Xa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:er!==null?{id:us,overflow:fs}:null,retryLane:536870912,hydrationErrors:null},a=Fm(e),a.return=n,n.child=a,Wi=n,$n=null)):e=null,e===null)throw ir(n);return dd(e)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(cr(),u=n.mode,C=ou({mode:"hidden",children:C},u),o=Vr(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=Dh(a),o.childLanes=Uh(e,_,a),n.memoizedState=Ch,Kl(null,o)):(lr(n),Nh(n,C))}var k=e.memoizedState;if(k!==null&&(C=k.dehydrated,C!==null)){if(f)n.flags&256?(lr(n),n.flags&=-257,n=Lh(e,n,a)):n.memoizedState!==null?(cr(),n.child=e.child,n.flags|=128,n=null):(cr(),C=o.fallback,u=n.mode,o=ou({mode:"visible",children:o.children},u),C=Vr(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Kr(n,e.child,null,a),o=n.child,o.memoizedState=Dh(a),o.childLanes=Uh(e,_,a),n.memoizedState=Ch,n=Kl(null,o));else if(lr(n),dd(C)){if(_=C.nextSibling&&C.nextSibling.dataset,_)var ut=_.dgst;_=ut,o=Error(s(419)),o.stack="",o.digest=_,Fl({value:o,source:null,stack:null}),n=Lh(e,n,a)}else if(wi||Co(e,n,a,!1),_=(a&e.childLanes)!==0,wi||_){if(_=Xn,_!==null&&(o=kn(_,a),o!==0&&o!==k.retryLane))throw k.retryLane=o,Hr(e,o),va(_,e,o),wh;hd(C)||gu(),n=Lh(e,n,a)}else hd(C)?(n.flags|=192,n.child=e.child,n=null):(e=k.treeContext,$n=qa(C.nextSibling),Wi=n,ln=!0,nr=null,Xa=!1,e!==null&&Gm(n,e),n=Nh(n,o.children),n.flags|=4096);return n}return u?(cr(),C=o.fallback,u=n.mode,k=e.child,ut=k.sibling,o=ws(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,ut!==null?C=ws(ut,C):(C=Vr(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,Kl(null,o),o=n.child,C=e.child.memoizedState,C===null?C=Dh(a):(u=C.cachePool,u!==null?(k=Ti._currentValue,u=u.parent!==k?{parent:k,pool:k}:u):u=qm(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=Uh(e,_,a),n.memoizedState=Ch,Kl(e.child,o)):(lr(n),a=e.child,e=a.sibling,a=ws(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function Nh(e,n){return n=ou({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ou(e,n){return e=wa(22,e,null,n),e.lanes=0,e}function Lh(e,n,a){return Kr(n,e.child,null,a),e=Nh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function sg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Zf(e.return,n,a)}function Oh(e,n,a,o,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function rg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=vi.current,C=(_&2)!==0;if(C?(_=_&1|2,n.flags|=128):_&=1,Lt(vi,_),Yi(e,n,o,a),o=ln?Il:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sg(e,a,n);else if(e.tag===19)sg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Kc(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Oh(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Kc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Oh(n,!0,a,null,f,o);break;case"together":Oh(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ls(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),hr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Co(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ws(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ws(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ph(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Hc(e)))}function nM(e,n,a){switch(n.tag){case 3:Nt(n,n.stateNode.containerInfo),ar(n,Ti,e.memoizedState.cache),kr();break;case 27:case 5:ve(n);break;case 4:Nt(n,n.stateNode.containerInfo);break;case 10:ar(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,rh(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(lr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ag(e,n,a):(lr(n),e=Ls(e,n,a),e!==null?e.sibling:null);lr(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Co(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return rg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Lt(vi,vi.current),o)break;return null;case 22:return n.lanes=0,J0(e,n,a,n.pendingProps);case 24:ar(n,Ti,e.memoizedState.cache)}return Ls(e,n,a)}function og(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)wi=!0;else{if(!Ph(e,a)&&(n.flags&128)===0)return wi=!1,nM(e,n,a);wi=(e.flags&131072)!==0}else wi=!1,ln&&(n.flags&1048576)!==0&&Bm(n,Il,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Yr(n.elementType),n.type=e,typeof e=="function")Gf(e)?(o=Qr(e,o),n.tag=1,n=ng(null,n,e,o,a)):(n.tag=0,n=Rh(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=K0(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=j0(null,n,e,o,a);break t}}throw n=yt(e)||e,Error(s(306,n,""))}}return n;case 0:return Rh(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Qr(o,n.pendingProps),ng(e,n,o,u,a);case 3:t:{if(Nt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,eh(e,n),Xl(n,o,null,a);var _=n.memoizedState;if(o=_.cache,ar(n,Ti,o),o!==f.cache&&Kf(n,[Ti],a,!0),kl(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=ig(e,n,o,a);break t}else if(o!==u){u=Ha(Error(s(424)),n),Fl(u),n=ig(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($n=qa(e.firstChild),Wi=n,ln=!0,nr=null,Xa=!0,a=Jm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(kr(),o===u){n=Ls(e,n,a);break t}Yi(e,n,o,a)}n=n.child}return n;case 26:return ru(e,n),e===null?(a=v_(n.type,null,n.pendingProps,null))?n.memoizedState=a:ln||(a=n.type,e=n.pendingProps,o=bu(ft.current).createElement(a),o[fn]=n,o[yn]=e,Zi(o,a,e),en(o),n.stateNode=o):n.memoizedState=v_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ve(n),e===null&&ln&&(o=n.stateNode=m_(n.type,n.pendingProps,ft.current),Wi=n,Xa=!0,u=$n,_r(n.type)?(pd=u,$n=qa(o.firstChild)):$n=u),Yi(e,n,n.pendingProps.children,a),ru(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ln&&((u=o=$n)&&(o=NM(o,n.type,n.pendingProps,Xa),o!==null?(n.stateNode=o,Wi=n,$n=qa(o.firstChild),Xa=!1,u=!0):u=!1),u||ir(n)),ve(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,o=f.children,cd(u,f)?o=null:_!==null&&cd(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=lh(e,n,Yx,null,null,a),uc._currentValue=u),ru(e,n),Yi(e,n,o,a),n.child;case 6:return e===null&&ln&&((e=a=$n)&&(a=LM(a,n.pendingProps,Xa),a!==null?(n.stateNode=a,Wi=n,$n=null,e=!0):e=!1),e||ir(n)),null;case 13:return ag(e,n,a);case 4:return Nt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Kr(n,null,o,a):Yi(e,n,o,a),n.child;case 11:return K0(e,n,n.type,n.pendingProps,a);case 7:return Yi(e,n,n.pendingProps,a),n.child;case 8:return Yi(e,n,n.pendingProps.children,a),n.child;case 12:return Yi(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ar(n,n.type,o.value),Yi(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Wr(n),u=qi(u),o=o(u),n.flags|=1,Yi(e,n,o,a),n.child;case 14:return j0(e,n,n.type,n.pendingProps,a);case 15:return Q0(e,n,n.type,n.pendingProps,a);case 19:return rg(e,n,a);case 31:return eM(e,n,a);case 22:return J0(e,n,a,n.pendingProps);case 24:return Wr(n),o=qi(Ti),e===null?(u=Jf(),u===null&&(u=Xn,f=jf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},th(n),ar(n,Ti,u)):((e.lanes&a)!==0&&(eh(e,n),Xl(n,null,null,a),kl()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ar(n,Ti,o)):(o=f.cache,ar(n,Ti,o),o!==u.cache&&Kf(n,[Ti],a,!0))),Yi(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Os(e){e.flags|=4}function Ih(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Og())e.flags|=8192;else throw Zr=Wc,$f}else e.flags&=-16777217}function lg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!b_(n))if(Og())e.flags|=8192;else throw Zr=Wc,$f}function lu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Rt():536870912,e.lanes|=n,Ho|=n)}function jl(e,n){if(!ln)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ti(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function iM(e,n,a){var o=n.pendingProps;switch(Xf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ti(n),null;case 1:return ti(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ds(Ti),Jt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ro(n)?Os(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,qf())),ti(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Os(n),f!==null?(ti(n),lg(n,f)):(ti(n),Ih(n,u,null,o,a))):f?f!==e.memoizedState?(Os(n),ti(n),lg(n,f)):(ti(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Os(n),ti(n),Ih(n,u,e,o,a)),null;case 27:if(ae(n),a=ft.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Os(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return ti(n),null}e=Gt.current,Ro(n)?Hm(n):(e=m_(u,o,a),n.stateNode=e,Os(n))}return ti(n),null;case 5:if(ae(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Os(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return ti(n),null}if(f=Gt.current,Ro(n))Hm(n);else{var _=bu(ft.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[fn]=n,f[yn]=o;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Zi(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Os(n)}}return ti(n),Ih(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Os(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=ft.current,Ro(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Wi,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[fn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||a_(e.nodeValue,a)),e||ir(n,!0)}else e=bu(e).createTextNode(o),e[fn]=n,n.stateNode=e}return ti(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Ro(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[fn]=n}else kr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ti(n),e=!1}else a=qf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Ca(n),n):(Ca(n),null);if((n.flags&128)!==0)throw Error(s(558))}return ti(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ro(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[fn]=n}else kr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ti(n),u=!1}else u=qf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ca(n),n):(Ca(n),null)}return Ca(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),lu(n,n.updateQueue),ti(n),null);case 4:return Jt(),e===null&&ad(n.stateNode.containerInfo),ti(n),null;case 10:return Ds(n.type),ti(n),null;case 19:if($(vi),o=n.memoizedState,o===null)return ti(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)jl(o,!1);else{if(mi!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Kc(e),f!==null){for(n.flags|=128,jl(o,!1),e=f.updateQueue,n.updateQueue=e,lu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Im(a,e),a=a.sibling;return Lt(vi,vi.current&1|2),ln&&Rs(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&An()>du&&(n.flags|=128,u=!0,jl(o,!1),n.lanes=4194304)}else{if(!u)if(e=Kc(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,lu(n,e),jl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!ln)return ti(n),null}else 2*An()-o.renderingStartTime>du&&a!==536870912&&(n.flags|=128,u=!0,jl(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=An(),e.sibling=null,a=vi.current,Lt(vi,u?a&1|2:a&1),ln&&Rs(n,o.treeForkCount),e):(ti(n),null);case 22:case 23:return Ca(n),sh(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(ti(n),n.subtreeFlags&6&&(n.flags|=8192)):ti(n),a=n.updateQueue,a!==null&&lu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&$(qr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ds(Ti),ti(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function aM(e,n){switch(Xf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ds(Ti),Jt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ae(n),null;case 31:if(n.memoizedState!==null){if(Ca(n),n.alternate===null)throw Error(s(340));kr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Ca(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));kr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(vi),null;case 4:return Jt(),null;case 10:return Ds(n.type),null;case 22:case 23:return Ca(n),sh(),e!==null&&$(qr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ds(Ti),null;case 25:return null;default:return null}}function cg(e,n){switch(Xf(n),n.tag){case 3:Ds(Ti),Jt();break;case 26:case 27:case 5:ae(n);break;case 4:Jt();break;case 31:n.memoizedState!==null&&Ca(n);break;case 13:Ca(n);break;case 19:$(vi);break;case 10:Ds(n.type);break;case 22:case 23:Ca(n),sh(),e!==null&&$(qr);break;case 24:Ds(Ti)}}function Ql(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(C){Fn(n,n.return,C)}}function ur(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var _=o.inst,C=_.destroy;if(C!==void 0){_.destroy=void 0,u=n;var k=a,ut=C;try{ut()}catch(bt){Fn(u,k,bt)}}}o=o.next}while(o!==f)}}catch(bt){Fn(n,n.return,bt)}}function ug(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{t0(n,a)}catch(o){Fn(e,e.return,o)}}}function fg(e,n,a){a.props=Qr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fn(e,n,o)}}function Jl(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Fn(e,n,u)}}function hs(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Fn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fn(e,n,u)}else a.current=null}function hg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Fn(e,e.return,u)}}function Fh(e,n,a){try{var o=e.stateNode;AM(o,e.type,a,n),o[yn]=n}catch(u){Fn(e,e.return,u)}}function dg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_r(e.type)||e.tag===4}function zh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||dg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_r(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bh(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=la));else if(o!==4&&(o===27&&_r(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Bh(e,n,a),e=e.sibling;e!==null;)Bh(e,n,a),e=e.sibling}function cu(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&_r(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(cu(e,n,a),e=e.sibling;e!==null;)cu(e,n,a),e=e.sibling}function pg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Zi(n,o,a),n[fn]=e,n[yn]=a}catch(f){Fn(e,e.return,f)}}var Ps=!1,Ri=!1,Gh=!1,mg=typeof WeakSet=="function"?WeakSet:Set,Bi=null;function sM(e,n){if(e=e.containerInfo,od=Du,e=wm(e),Lf(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,C=-1,k=-1,ut=0,bt=0,Ct=e,dt=null;e:for(;;){for(var mt;Ct!==a||u!==0&&Ct.nodeType!==3||(C=_+u),Ct!==f||o!==0&&Ct.nodeType!==3||(k=_+o),Ct.nodeType===3&&(_+=Ct.nodeValue.length),(mt=Ct.firstChild)!==null;)dt=Ct,Ct=mt;for(;;){if(Ct===e)break e;if(dt===a&&++ut===u&&(C=_),dt===f&&++bt===o&&(k=_),(mt=Ct.nextSibling)!==null)break;Ct=dt,dt=Ct.parentNode}Ct=mt}a=C===-1||k===-1?null:{start:C,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(ld={focusedElem:e,selectionRange:a},Du=!1,Bi=n;Bi!==null;)if(n=Bi,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Bi=e;else for(;Bi!==null;){switch(n=Bi,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var te=Qr(a.type,u);e=o.getSnapshotBeforeUpdate(te,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(Me){Fn(a,a.return,Me)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)fd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Bi=e;break}Bi=n.return}}function gg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Fs(e,a),o&4&&Ql(5,a);break;case 1:if(Fs(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Fn(a,a.return,_)}else{var u=Qr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Fn(a,a.return,_)}}o&64&&ug(a),o&512&&Jl(a,a.return);break;case 3:if(Fs(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{t0(e,n)}catch(_){Fn(a,a.return,_)}}break;case 27:n===null&&o&4&&pg(a);case 26:case 5:Fs(e,a),n===null&&o&4&&hg(a),o&512&&Jl(a,a.return);break;case 12:Fs(e,a);break;case 31:Fs(e,a),o&4&&xg(e,a);break;case 13:Fs(e,a),o&4&&Mg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=pM.bind(null,a),OM(e,a))));break;case 22:if(o=a.memoizedState!==null||Ps,!o){n=n!==null&&n.memoizedState!==null||Ri,u=Ps;var f=Ri;Ps=o,(Ri=n)&&!f?zs(e,a,(a.subtreeFlags&8772)!==0):Fs(e,a),Ps=u,Ri=f}break;case 30:break;default:Fs(e,a)}}function _g(e){var n=e.alternate;n!==null&&(e.alternate=null,_g(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ii(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ii=null,pa=!1;function Is(e,n,a){for(a=a.child;a!==null;)vg(e,n,a),a=a.sibling}function vg(e,n,a){if(V&&typeof V.onCommitFiberUnmount=="function")try{V.onCommitFiberUnmount(T,a)}catch{}switch(a.tag){case 26:Ri||hs(a,n),Is(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ri||hs(a,n);var o=ii,u=pa;_r(a.type)&&(ii=a.stateNode,pa=!1),Is(e,n,a),oc(a.stateNode),ii=o,pa=u;break;case 5:Ri||hs(a,n);case 6:if(o=ii,u=pa,ii=null,Is(e,n,a),ii=o,pa=u,ii!==null)if(pa)try{(ii.nodeType===9?ii.body:ii.nodeName==="HTML"?ii.ownerDocument.body:ii).removeChild(a.stateNode)}catch(f){Fn(a,n,f)}else try{ii.removeChild(a.stateNode)}catch(f){Fn(a,n,f)}break;case 18:ii!==null&&(pa?(e=ii,u_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ko(e)):u_(ii,a.stateNode));break;case 4:o=ii,u=pa,ii=a.stateNode.containerInfo,pa=!0,Is(e,n,a),ii=o,pa=u;break;case 0:case 11:case 14:case 15:ur(2,a,n),Ri||ur(4,a,n),Is(e,n,a);break;case 1:Ri||(hs(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&fg(a,n,o)),Is(e,n,a);break;case 21:Is(e,n,a);break;case 22:Ri=(o=Ri)||a.memoizedState!==null,Is(e,n,a),Ri=o;break;default:Is(e,n,a)}}function xg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ko(e)}catch(a){Fn(n,n.return,a)}}}function Mg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ko(e)}catch(a){Fn(n,n.return,a)}}function rM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new mg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new mg),n;default:throw Error(s(435,e.tag))}}function uu(e,n){var a=rM(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=mM.bind(null,e,o);o.then(u,u)}})}function ma(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,_=n,C=_;t:for(;C!==null;){switch(C.tag){case 27:if(_r(C.type)){ii=C.stateNode,pa=!1;break t}break;case 5:ii=C.stateNode,pa=!1;break t;case 3:case 4:ii=C.stateNode.containerInfo,pa=!0;break t}C=C.return}if(ii===null)throw Error(s(160));vg(f,_,u),ii=null,pa=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Sg(n,e),n=n.sibling}var $a=null;function Sg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ma(n,e),ga(e),o&4&&(ur(3,e,e.return),Ql(3,e),ur(5,e,e.return));break;case 1:ma(n,e),ga(e),o&512&&(Ri||a===null||hs(a,a.return)),o&64&&Ps&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=$a;if(ma(n,e),ga(e),o&512&&(Ri||a===null||hs(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[si]||f[fn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Zi(f,o,a),f[fn]=e,en(f),o=f;break t;case"link":var _=S_("link","href",u).get(o+(a.href||""));if(_){for(var C=0;C<_.length;C++)if(f=_[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(C,1);break e}}f=u.createElement(o),Zi(f,o,a),u.head.appendChild(f);break;case"meta":if(_=S_("meta","content",u).get(o+(a.content||""))){for(C=0;C<_.length;C++)if(f=_[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(C,1);break e}}f=u.createElement(o),Zi(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[fn]=e,en(f),o=f}e.stateNode=o}else y_(u,e.type,e.stateNode);else e.stateNode=M_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?y_(u,e.type,e.stateNode):M_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Fh(e,e.memoizedProps,a.memoizedProps)}break;case 27:ma(n,e),ga(e),o&512&&(Ri||a===null||hs(a,a.return)),a!==null&&o&4&&Fh(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ma(n,e),ga(e),o&512&&(Ri||a===null||hs(a,a.return)),e.flags&32){u=e.stateNode;try{Qn(u,"")}catch(te){Fn(e,e.return,te)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Fh(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Gh=!0);break;case 6:if(ma(n,e),ga(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(te){Fn(e,e.return,te)}}break;case 3:if(Au=null,u=$a,$a=Eu(n.containerInfo),ma(n,e),$a=u,ga(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ko(n.containerInfo)}catch(te){Fn(e,e.return,te)}Gh&&(Gh=!1,yg(e));break;case 4:o=$a,$a=Eu(e.stateNode.containerInfo),ma(n,e),ga(e),$a=o;break;case 12:ma(n,e),ga(e);break;case 31:ma(n,e),ga(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uu(e,o)));break;case 13:ma(n,e),ga(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(hu=An()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uu(e,o)));break;case 22:u=e.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,ut=Ps,bt=Ri;if(Ps=ut||u,Ri=bt||k,ma(n,e),Ri=bt,Ps=ut,ga(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||k||Ps||Ri||Jr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){k=a=n;try{if(f=k.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{C=k.stateNode;var Ct=k.memoizedProps.style,dt=Ct!=null&&Ct.hasOwnProperty("display")?Ct.display:null;C.style.display=dt==null||typeof dt=="boolean"?"":(""+dt).trim()}}catch(te){Fn(k,k.return,te)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=u?"":k.memoizedProps}catch(te){Fn(k,k.return,te)}}}else if(n.tag===18){if(a===null){k=n;try{var mt=k.stateNode;u?f_(mt,!0):f_(k.stateNode,!1)}catch(te){Fn(k,k.return,te)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,uu(e,a))));break;case 19:ma(n,e),ga(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uu(e,o)));break;case 30:break;case 21:break;default:ma(n,e),ga(e)}}function ga(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(dg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=zh(e);cu(e,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(Qn(_,""),a.flags&=-33);var C=zh(e);cu(e,C,_);break;case 3:case 4:var k=a.stateNode.containerInfo,ut=zh(e);Bh(e,ut,k);break;default:throw Error(s(161))}}catch(bt){Fn(e,e.return,bt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function yg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;yg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Fs(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)gg(e,n.alternate,n),n=n.sibling}function Jr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ur(4,n,n.return),Jr(n);break;case 1:hs(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&fg(n,n.return,a),Jr(n);break;case 27:oc(n.stateNode);case 26:case 5:hs(n,n.return),Jr(n);break;case 22:n.memoizedState===null&&Jr(n);break;case 30:Jr(n);break;default:Jr(n)}e=e.sibling}}function zs(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:zs(u,f,a),Ql(4,f);break;case 1:if(zs(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ut){Fn(o,o.return,ut)}if(o=f,u=o.updateQueue,u!==null){var C=o.stateNode;try{var k=u.shared.hiddenCallbacks;if(k!==null)for(u.shared.hiddenCallbacks=null,u=0;u<k.length;u++)$m(k[u],C)}catch(ut){Fn(o,o.return,ut)}}a&&_&64&&ug(f),Jl(f,f.return);break;case 27:pg(f);case 26:case 5:zs(u,f,a),a&&o===null&&_&4&&hg(f),Jl(f,f.return);break;case 12:zs(u,f,a);break;case 31:zs(u,f,a),a&&_&4&&xg(u,f);break;case 13:zs(u,f,a),a&&_&4&&Mg(u,f);break;case 22:f.memoizedState===null&&zs(u,f,a),Jl(f,f.return);break;case 30:break;default:zs(u,f,a)}n=n.sibling}}function Hh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&zl(a))}function Vh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&zl(e))}function ts(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)bg(e,n,a,o),n=n.sibling}function bg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ts(e,n,a,o),u&2048&&Ql(9,n);break;case 1:ts(e,n,a,o);break;case 3:ts(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&zl(e)));break;case 12:if(u&2048){ts(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,C=f.onPostCommit;typeof C=="function"&&C(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Fn(n,n.return,k)}}else ts(e,n,a,o);break;case 31:ts(e,n,a,o);break;case 13:ts(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?ts(e,n,a,o):$l(e,n):f._visibility&2?ts(e,n,a,o):(f._visibility|=2,zo(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Hh(_,n);break;case 24:ts(e,n,a,o),u&2048&&Vh(n.alternate,n);break;default:ts(e,n,a,o)}}function zo(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,C=a,k=o,ut=_.flags;switch(_.tag){case 0:case 11:case 15:zo(f,_,C,k,u),Ql(8,_);break;case 23:break;case 22:var bt=_.stateNode;_.memoizedState!==null?bt._visibility&2?zo(f,_,C,k,u):$l(f,_):(bt._visibility|=2,zo(f,_,C,k,u)),u&&ut&2048&&Hh(_.alternate,_);break;case 24:zo(f,_,C,k,u),u&&ut&2048&&Vh(_.alternate,_);break;default:zo(f,_,C,k,u)}n=n.sibling}}function $l(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:$l(a,o),u&2048&&Hh(o.alternate,o);break;case 24:$l(a,o),u&2048&&Vh(o.alternate,o);break;default:$l(a,o)}n=n.sibling}}var tc=8192;function Bo(e,n,a){if(e.subtreeFlags&tc)for(e=e.child;e!==null;)Eg(e,n,a),e=e.sibling}function Eg(e,n,a){switch(e.tag){case 26:Bo(e,n,a),e.flags&tc&&e.memoizedState!==null&&qM(a,$a,e.memoizedState,e.memoizedProps);break;case 5:Bo(e,n,a);break;case 3:case 4:var o=$a;$a=Eu(e.stateNode.containerInfo),Bo(e,n,a),$a=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=tc,tc=16777216,Bo(e,n,a),tc=o):Bo(e,n,a));break;default:Bo(e,n,a)}}function Tg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ec(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Bi=o,wg(o,e)}Tg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ag(e),e=e.sibling}function Ag(e){switch(e.tag){case 0:case 11:case 15:ec(e),e.flags&2048&&ur(9,e,e.return);break;case 3:ec(e);break;case 12:ec(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,fu(e)):ec(e);break;default:ec(e)}}function fu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Bi=o,wg(o,e)}Tg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ur(8,n,n.return),fu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,fu(n));break;default:fu(n)}e=e.sibling}}function wg(e,n){for(;Bi!==null;){var a=Bi;switch(a.tag){case 0:case 11:case 15:ur(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:zl(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Bi=o;else t:for(a=e;Bi!==null;){o=Bi;var u=o.sibling,f=o.return;if(_g(o),o===a){Bi=null;break t}if(u!==null){u.return=f,Bi=u;break t}Bi=f}}}var oM={getCacheForType:function(e){var n=qi(Ti),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return qi(Ti).controller.signal}},lM=typeof WeakMap=="function"?WeakMap:Map,En=0,Xn=null,$e=null,an=0,In=0,Da=null,fr=!1,Go=!1,kh=!1,Bs=0,mi=0,hr=0,$r=0,Xh=0,Ua=0,Ho=0,nc=null,_a=null,Wh=!1,hu=0,Rg=0,du=1/0,pu=null,dr=null,Ni=0,pr=null,Vo=null,Gs=0,qh=0,Yh=null,Cg=null,ic=0,Zh=null;function Na(){return(En&2)!==0&&an!==0?an&-an:H.T!==null?td():ra()}function Dg(){if(Ua===0)if((an&536870912)===0||ln){var e=Pt;Pt<<=1,(Pt&3932160)===0&&(Pt=262144),Ua=e}else Ua=536870912;return e=Ra.current,e!==null&&(e.flags|=32),Ua}function va(e,n,a){(e===Xn&&(In===2||In===9)||e.cancelPendingCommit!==null)&&(ko(e,0),mr(e,an,Ua,!1)),Ht(e,a),((En&2)===0||e!==Xn)&&(e===Xn&&((En&2)===0&&($r|=a),mi===4&&mr(e,an,Ua,!1)),ds(e))}function Ug(e,n,a){if((En&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||At(e,n),u=o?fM(e,n):jh(e,n,!0),f=o;do{if(u===0){Go&&!o&&mr(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!cM(a)){u=jh(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var C=e;u=nc;var k=C.current.memoizedState.isDehydrated;if(k&&(ko(C,_).flags|=256),_=jh(C,_,!1),_!==2){if(kh&&!k){C.errorRecoveryDisabledLanes|=f,$r|=f,u=4;break t}f=_a,_a=u,f!==null&&(_a===null?_a=f:_a.push.apply(_a,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){ko(e,0),mr(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:mr(o,n,Ua,!fr);break t;case 2:_a=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=hu+300-An(),10<u)){if(mr(o,n,Ua,!fr),at(o,0,!0)!==0)break t;Gs=n,o.timeoutHandle=l_(Ng.bind(null,o,a,_a,pu,Wh,n,Ua,$r,Ho,fr,f,"Throttled",-0,0),u);break t}Ng(o,a,_a,pu,Wh,n,Ua,$r,Ho,fr,f,null,-0,0)}}break}while(!0);ds(e)}function Ng(e,n,a,o,u,f,_,C,k,ut,bt,Ct,dt,mt){if(e.timeoutHandle=-1,Ct=n.subtreeFlags,Ct&8192||(Ct&16785408)===16785408){Ct={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:la},Eg(n,f,Ct);var te=(f&62914560)===f?hu-An():(f&4194048)===f?Rg-An():0;if(te=YM(Ct,te),te!==null){Gs=f,e.cancelPendingCommit=te(Gg.bind(null,e,n,f,a,o,u,_,C,k,bt,Ct,null,dt,mt)),mr(e,f,_,!ut);return}}Gg(e,n,f,a,o,u,_,C,k)}function cM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Aa(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function mr(e,n,a,o){n&=~Xh,n&=~$r,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-R(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&Ve(e,a,n)}function mu(){return(En&6)===0?(ac(0),!1):!0}function Kh(){if($e!==null){if(In===0)var e=$e.return;else e=$e,Cs=Xr=null,fh(e),Lo=null,Gl=0,e=$e;for(;e!==null;)cg(e.alternate,e),e=e.return;$e=null}}function ko(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,CM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Gs=0,Kh(),Xn=e,$e=a=ws(e.current,null),an=n,In=0,Da=null,fr=!1,Go=At(e,n),kh=!1,Ho=Ua=Xh=$r=hr=mi=0,_a=nc=null,Wh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-R(o),f=1<<u;n|=e[u],o&=~f}return Bs=n,Ic(),a}function Lg(e,n){Fe=null,H.H=Zl,n===No||n===Xc?(n=Km(),In=3):n===$f?(n=Km(),In=4):In=n===wh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Da=n,$e===null&&(mi=1,au(e,Ha(n,e.current)))}function Og(){var e=Ra.current;return e===null?!0:(an&4194048)===an?Wa===null:(an&62914560)===an||(an&536870912)!==0?e===Wa:!1}function Pg(){var e=H.H;return H.H=Zl,e===null?Zl:e}function Ig(){var e=H.A;return H.A=oM,e}function gu(){mi=4,fr||(an&4194048)!==an&&Ra.current!==null||(Go=!0),(hr&134217727)===0&&($r&134217727)===0||Xn===null||mr(Xn,an,Ua,!1)}function jh(e,n,a){var o=En;En|=2;var u=Pg(),f=Ig();(Xn!==e||an!==n)&&(pu=null,ko(e,n)),n=!1;var _=mi;t:do try{if(In!==0&&$e!==null){var C=$e,k=Da;switch(In){case 8:Kh(),_=6;break t;case 3:case 2:case 9:case 6:Ra.current===null&&(n=!0);var ut=In;if(In=0,Da=null,Xo(e,C,k,ut),a&&Go){_=0;break t}break;default:ut=In,In=0,Da=null,Xo(e,C,k,ut)}}uM(),_=mi;break}catch(bt){Lg(e,bt)}while(!0);return n&&e.shellSuspendCounter++,Cs=Xr=null,En=o,H.H=u,H.A=f,$e===null&&(Xn=null,an=0,Ic()),_}function uM(){for(;$e!==null;)Fg($e)}function fM(e,n){var a=En;En|=2;var o=Pg(),u=Ig();Xn!==e||an!==n?(pu=null,du=An()+500,ko(e,n)):Go=At(e,n);t:do try{if(In!==0&&$e!==null){n=$e;var f=Da;e:switch(In){case 1:In=0,Da=null,Xo(e,n,f,1);break;case 2:case 9:if(Ym(f)){In=0,Da=null,zg(n);break}n=function(){In!==2&&In!==9||Xn!==e||(In=7),ds(e)},f.then(n,n);break t;case 3:In=7;break t;case 4:In=5;break t;case 7:Ym(f)?(In=0,Da=null,zg(n)):(In=0,Da=null,Xo(e,n,f,7));break;case 5:var _=null;switch($e.tag){case 26:_=$e.memoizedState;case 5:case 27:var C=$e;if(_?b_(_):C.stateNode.complete){In=0,Da=null;var k=C.sibling;if(k!==null)$e=k;else{var ut=C.return;ut!==null?($e=ut,_u(ut)):$e=null}break e}}In=0,Da=null,Xo(e,n,f,5);break;case 6:In=0,Da=null,Xo(e,n,f,6);break;case 8:Kh(),mi=6;break t;default:throw Error(s(462))}}hM();break}catch(bt){Lg(e,bt)}while(!0);return Cs=Xr=null,H.H=o,H.A=u,En=a,$e!==null?0:(Xn=null,an=0,Ic(),mi)}function hM(){for(;$e!==null&&!ei();)Fg($e)}function Fg(e){var n=og(e.alternate,e,Bs);e.memoizedProps=e.pendingProps,n===null?_u(e):$e=n}function zg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=eg(a,n,n.pendingProps,n.type,void 0,an);break;case 11:n=eg(a,n,n.pendingProps,n.type.render,n.ref,an);break;case 5:fh(n);default:cg(a,n),n=$e=Im(n,Bs),n=og(a,n,Bs)}e.memoizedProps=e.pendingProps,n===null?_u(e):$e=n}function Xo(e,n,a,o){Cs=Xr=null,fh(n),Lo=null,Gl=0;var u=n.return;try{if(tM(e,u,n,a,an)){mi=1,au(e,Ha(a,e.current)),$e=null;return}}catch(f){if(u!==null)throw $e=u,f;mi=1,au(e,Ha(a,e.current)),$e=null;return}n.flags&32768?(ln||o===1?e=!0:Go||(an&536870912)!==0?e=!1:(fr=e=!0,(o===2||o===9||o===3||o===6)&&(o=Ra.current,o!==null&&o.tag===13&&(o.flags|=16384))),Bg(n,e)):_u(n)}function _u(e){var n=e;do{if((n.flags&32768)!==0){Bg(n,fr);return}e=n.return;var a=iM(n.alternate,n,Bs);if(a!==null){$e=a;return}if(n=n.sibling,n!==null){$e=n;return}$e=n=e}while(n!==null);mi===0&&(mi=5)}function Bg(e,n){do{var a=aM(e.alternate,e);if(a!==null){a.flags&=32767,$e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){$e=e;return}$e=e=a}while(e!==null);mi=6,$e=null}function Gg(e,n,a,o,u,f,_,C,k){e.cancelPendingCommit=null;do vu();while(Ni!==0);if((En&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=zf,He(e,a,f,_,C,k),e===Xn&&($e=Xn=null,an=0),Vo=n,pr=e,Gs=a,qh=f,Yh=u,Cg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,gM(et,function(){return Wg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=H.T,H.T=null,u=X.p,X.p=2,_=En,En|=4;try{sM(e,n,a)}finally{En=_,X.p=u,H.T=o}}Ni=1,Hg(),Vg(),kg()}}function Hg(){if(Ni===1){Ni=0;var e=pr,n=Vo,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var o=X.p;X.p=2;var u=En;En|=4;try{Sg(n,e);var f=ld,_=wm(e.containerInfo),C=f.focusedElem,k=f.selectionRange;if(_!==C&&C&&C.ownerDocument&&Am(C.ownerDocument.documentElement,C)){if(k!==null&&Lf(C)){var ut=k.start,bt=k.end;if(bt===void 0&&(bt=ut),"selectionStart"in C)C.selectionStart=ut,C.selectionEnd=Math.min(bt,C.value.length);else{var Ct=C.ownerDocument||document,dt=Ct&&Ct.defaultView||window;if(dt.getSelection){var mt=dt.getSelection(),te=C.textContent.length,Me=Math.min(k.start,te),Vn=k.end===void 0?Me:Math.min(k.end,te);!mt.extend&&Me>Vn&&(_=Vn,Vn=Me,Me=_);var tt=Tm(C,Me),K=Tm(C,Vn);if(tt&&K&&(mt.rangeCount!==1||mt.anchorNode!==tt.node||mt.anchorOffset!==tt.offset||mt.focusNode!==K.node||mt.focusOffset!==K.offset)){var ct=Ct.createRange();ct.setStart(tt.node,tt.offset),mt.removeAllRanges(),Me>Vn?(mt.addRange(ct),mt.extend(K.node,K.offset)):(ct.setEnd(K.node,K.offset),mt.addRange(ct))}}}}for(Ct=[],mt=C;mt=mt.parentNode;)mt.nodeType===1&&Ct.push({element:mt,left:mt.scrollLeft,top:mt.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Ct.length;C++){var wt=Ct[C];wt.element.scrollLeft=wt.left,wt.element.scrollTop=wt.top}}Du=!!od,ld=od=null}finally{En=u,X.p=o,H.T=a}}e.current=n,Ni=2}}function Vg(){if(Ni===2){Ni=0;var e=pr,n=Vo,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var o=X.p;X.p=2;var u=En;En|=4;try{gg(e,n.alternate,n)}finally{En=u,X.p=o,H.T=a}}Ni=3}}function kg(){if(Ni===4||Ni===3){Ni=0,J();var e=pr,n=Vo,a=Gs,o=Cg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ni=5:(Ni=0,Vo=pr=null,Xg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(dr=null),Ln(a),n=n.stateNode,V&&typeof V.onCommitFiberRoot=="function")try{V.onCommitFiberRoot(T,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=H.T,u=X.p,X.p=2,H.T=null;try{for(var f=e.onRecoverableError,_=0;_<o.length;_++){var C=o[_];f(C.value,{componentStack:C.stack})}}finally{H.T=n,X.p=u}}(Gs&3)!==0&&vu(),ds(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Zh?ic++:(ic=0,Zh=e):ic=0,ac(0)}}function Xg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,zl(n)))}function vu(){return Hg(),Vg(),kg(),Wg()}function Wg(){if(Ni!==5)return!1;var e=pr,n=qh;qh=0;var a=Ln(Gs),o=H.T,u=X.p;try{X.p=32>a?32:a,H.T=null,a=Yh,Yh=null;var f=pr,_=Gs;if(Ni=0,Vo=pr=null,Gs=0,(En&6)!==0)throw Error(s(331));var C=En;if(En|=4,Ag(f.current),bg(f,f.current,_,a),En=C,ac(0,!1),V&&typeof V.onPostCommitFiberRoot=="function")try{V.onPostCommitFiberRoot(T,f)}catch{}return!0}finally{X.p=u,H.T=o,Xg(e,n)}}function qg(e,n,a){n=Ha(a,n),n=Ah(e.stateNode,n,2),e=or(e,n,2),e!==null&&(Ht(e,2),ds(e))}function Fn(e,n,a){if(e.tag===3)qg(e,e,a);else for(;n!==null;){if(n.tag===3){qg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(dr===null||!dr.has(o))){e=Ha(a,e),a=Y0(2),o=or(n,a,2),o!==null&&(Z0(a,o,n,e),Ht(o,2),ds(o));break}}n=n.return}}function Qh(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new lM;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(kh=!0,u.add(a),e=dM.bind(null,e,n,a),n.then(e,e))}function dM(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xn===e&&(an&a)===a&&(mi===4||mi===3&&(an&62914560)===an&&300>An()-hu?(En&2)===0&&ko(e,0):Xh|=a,Ho===an&&(Ho=0)),ds(e)}function Yg(e,n){n===0&&(n=Rt()),e=Hr(e,n),e!==null&&(Ht(e,n),ds(e))}function pM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Yg(e,a)}function mM(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Yg(e,a)}function gM(e,n){return me(e,n)}var xu=null,Wo=null,Jh=!1,Mu=!1,$h=!1,gr=0;function ds(e){e!==Wo&&e.next===null&&(Wo===null?xu=Wo=e:Wo=Wo.next=e),Mu=!0,Jh||(Jh=!0,vM())}function ac(e,n){if(!$h&&Mu){$h=!0;do for(var a=!1,o=xu;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,C=o.pingedLanes;f=(1<<31-R(42|e)+1)-1,f&=u&~(_&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Qg(o,f))}else f=an,f=at(o,o===Xn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||At(o,f)||(a=!0,Qg(o,f));o=o.next}while(a);$h=!1}}function _M(){Zg()}function Zg(){Mu=Jh=!1;var e=0;gr!==0&&RM()&&(e=gr);for(var n=An(),a=null,o=xu;o!==null;){var u=o.next,f=Kg(o,n);f===0?(o.next=null,a===null?xu=u:a.next=u,u===null&&(Wo=a)):(a=o,(e!==0||(f&3)!==0)&&(Mu=!0)),o=u}Ni!==0&&Ni!==5||ac(e),gr!==0&&(gr=0)}function Kg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-R(f),C=1<<_,k=u[_];k===-1?((C&a)===0||(C&o)!==0)&&(u[_]=zt(C,n)):k<=n&&(e.expiredLanes|=C),f&=~C}if(n=Xn,a=an,a=at(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(In===2||In===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ye(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||At(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ye(o),Ln(a)){case 2:case 8:a=S;break;case 32:a=et;break;case 268435456:a=xt;break;default:a=et}return o=jg.bind(null,e),a=me(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ye(o),e.callbackPriority=2,e.callbackNode=null,2}function jg(e,n){if(Ni!==0&&Ni!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(vu()&&e.callbackNode!==a)return null;var o=an;return o=at(e,e===Xn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Ug(e,o,n),Kg(e,An()),e.callbackNode!=null&&e.callbackNode===a?jg.bind(null,e):null)}function Qg(e,n){if(vu())return null;Ug(e,n,!0)}function vM(){DM(function(){(En&6)!==0?me(P,_M):Zg()})}function td(){if(gr===0){var e=Do;e===0&&(e=Tt,Tt<<=1,(Tt&261888)===0&&(Tt=256)),gr=e}return gr}function Jg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:oa(""+e)}function $g(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function xM(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Jg((u[yn]||null).action),_=o.submitter;_&&(n=(n=_[yn]||null)?Jg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var C=new tr("action","action",null,o,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(gr!==0){var k=_?$g(u,_):new FormData(u);Mh(a,{pending:!0,data:k,method:u.method,action:f},null,k)}}else typeof f=="function"&&(C.preventDefault(),k=_?$g(u,_):new FormData(u),Mh(a,{pending:!0,data:k,method:u.method,action:f},f,k))},currentTarget:u}]})}}for(var ed=0;ed<Ff.length;ed++){var nd=Ff[ed],MM=nd.toLowerCase(),SM=nd[0].toUpperCase()+nd.slice(1);Ja(MM,"on"+SM)}Ja(Dm,"onAnimationEnd"),Ja(Um,"onAnimationIteration"),Ja(Nm,"onAnimationStart"),Ja("dblclick","onDoubleClick"),Ja("focusin","onFocus"),Ja("focusout","onBlur"),Ja(Fx,"onTransitionRun"),Ja(zx,"onTransitionStart"),Ja(Bx,"onTransitionCancel"),Ja(Lm,"onTransitionEnd"),st("onMouseEnter",["mouseout","mouseover"]),st("onMouseLeave",["mouseout","mouseover"]),st("onPointerEnter",["pointerout","pointerover"]),st("onPointerLeave",["pointerout","pointerover"]),W("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),W("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),W("onBeforeInput",["compositionend","keypress","textInput","paste"]),W("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sc));function t_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var C=o[_],k=C.instance,ut=C.currentTarget;if(C=C.listener,k!==f&&u.isPropagationStopped())break t;f=C,u.currentTarget=ut;try{f(u)}catch(bt){Pc(bt)}u.currentTarget=null,f=k}else for(_=0;_<o.length;_++){if(C=o[_],k=C.instance,ut=C.currentTarget,C=C.listener,k!==f&&u.isPropagationStopped())break t;f=C,u.currentTarget=ut;try{f(u)}catch(bt){Pc(bt)}u.currentTarget=null,f=k}}}}function tn(e,n){var a=n[qn];a===void 0&&(a=n[qn]=new Set);var o=e+"__bubble";a.has(o)||(e_(n,e,2,!1),a.add(o))}function id(e,n,a){var o=0;n&&(o|=4),e_(a,e,o,n)}var Su="_reactListening"+Math.random().toString(36).slice(2);function ad(e){if(!e[Su]){e[Su]=!0,za.forEach(function(a){a!=="selectionchange"&&(yM.has(a)||id(a,!1,e),id(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Su]||(n[Su]=!0,id("selectionchange",!1,n))}}function e_(e,n,a,o){switch(D_(n)){case 2:var u=jM;break;case 8:u=QM;break;default:u=xd}a=u.bind(null,n,a,e),u=void 0,!Al||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function sd(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var C=o.stateNode.containerInfo;if(C===u)break;if(_===4)for(_=o.return;_!==null;){var k=_.tag;if((k===3||k===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;C!==null;){if(_=_i(C),_===null)return;if(k=_.tag,k===5||k===6||k===26||k===27){o=f=_;continue t}C=C.parentNode}}o=o.return}Tl(function(){var ut=f,bt=ls(a),Ct=[];t:{var dt=Om.get(e);if(dt!==void 0){var mt=tr,te=e;switch(e){case"keypress":if(Pr(a)===0)break t;case"keydown":case"keyup":mt=ni;break;case"focusin":te="focus",mt=Nl;break;case"focusout":te="blur",mt=Nl;break;case"beforeblur":case"afterblur":mt=Nl;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":mt=Dl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":mt=Af;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":mt=Xi;break;case Dm:case Um:case Nm:mt=Oc;break;case Lm:mt=da;break;case"scroll":case"scrollend":mt=Rl;break;case"wheel":mt=Ts;break;case"copy":case"cut":case"paste":mt=Cf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":mt=hi;break;case"toggle":case"beforetoggle":mt=Cn}var Me=(n&4)!==0,Vn=!Me&&(e==="scroll"||e==="scrollend"),tt=Me?dt!==null?dt+"Capture":null:dt;Me=[];for(var K=ut,ct;K!==null;){var wt=K;if(ct=wt.stateNode,wt=wt.tag,wt!==5&&wt!==26&&wt!==27||ct===null||tt===null||(wt=$s(K,tt),wt!=null&&Me.push(rc(K,wt,ct))),Vn)break;K=K.return}0<Me.length&&(dt=new mt(dt,te,null,a,bt),Ct.push({event:dt,listeners:Me}))}}if((n&7)===0){t:{if(dt=e==="mouseover"||e==="pointerover",mt=e==="mouseout"||e==="pointerout",dt&&a!==ba&&(te=a.relatedTarget||a.fromElement)&&(_i(te)||te[xe]))break t;if((mt||dt)&&(dt=bt.window===bt?bt:(dt=bt.ownerDocument)?dt.defaultView||dt.parentWindow:window,mt?(te=a.relatedTarget||a.toElement,mt=ut,te=te?_i(te):null,te!==null&&(Vn=c(te),Me=te.tag,te!==Vn||Me!==5&&Me!==27&&Me!==6)&&(te=null)):(mt=null,te=ut),mt!==te)){if(Me=Dl,wt="onMouseLeave",tt="onMouseEnter",K="mouse",(e==="pointerout"||e==="pointerover")&&(Me=hi,wt="onPointerLeave",tt="onPointerEnter",K="pointer"),Vn=mt==null?dt:Ie(mt),ct=te==null?dt:Ie(te),dt=new Me(wt,K+"leave",mt,a,bt),dt.target=Vn,dt.relatedTarget=ct,wt=null,_i(bt)===ut&&(Me=new Me(tt,K+"enter",te,a,bt),Me.target=ct,Me.relatedTarget=Vn,wt=Me),Vn=wt,mt&&te)e:{for(Me=bM,tt=mt,K=te,ct=0,wt=tt;wt;wt=Me(wt))ct++;wt=0;for(var he=K;he;he=Me(he))wt++;for(;0<ct-wt;)tt=Me(tt),ct--;for(;0<wt-ct;)K=Me(K),wt--;for(;ct--;){if(tt===K||K!==null&&tt===K.alternate){Me=tt;break e}tt=Me(tt),K=Me(K)}Me=null}else Me=null;mt!==null&&n_(Ct,dt,mt,Me,!1),te!==null&&Vn!==null&&n_(Ct,Vn,te,Me,!0)}}t:{if(dt=ut?Ie(ut):window,mt=dt.nodeName&&dt.nodeName.toLowerCase(),mt==="select"||mt==="input"&&dt.type==="file")var Mn=Je;else if(nn(dt))if(Dn)Mn=Nf;else{Mn=Df;var ie=Ll}else mt=dt.nodeName,!mt||mt.toLowerCase()!=="input"||dt.type!=="checkbox"&&dt.type!=="radio"?ut&&Ke(ut.elementType)&&(Mn=Je):Mn=Uf;if(Mn&&(Mn=Mn(e,ut))){Qe(Ct,Mn,a,bt);break t}ie&&ie(e,dt,ut),e==="focusout"&&ut&&dt.type==="number"&&ut.memoizedProps.value!=null&&se(dt,"number",dt.value)}switch(ie=ut?Ie(ut):window,e){case"focusin":(nn(ie)||ie.contentEditable==="true")&&(yo=ie,Of=ut,Pl=null);break;case"focusout":Pl=Of=yo=null;break;case"mousedown":Pf=!0;break;case"contextmenu":case"mouseup":case"dragend":Pf=!1,Rm(Ct,a,bt);break;case"selectionchange":if(Ix)break;case"keydown":case"keyup":Rm(Ct,a,bt)}var Ge;if(zi)t:{switch(e){case"compositionstart":var sn="onCompositionStart";break t;case"compositionend":sn="onCompositionEnd";break t;case"compositionupdate":sn="onCompositionUpdate";break t}sn=void 0}else pe?De(e,a)&&(sn="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(sn="onCompositionStart");sn&&(_e&&a.locale!=="ko"&&(pe||sn!=="onCompositionStart"?sn==="onCompositionEnd"&&pe&&(Ge=vo()):(cs=bt,wl="value"in cs?cs.value:cs.textContent,pe=!0)),ie=yu(ut,sn),0<ie.length&&(sn=new Xe(sn,e,null,a,bt),Ct.push({event:sn,listeners:ie}),Ge?sn.data=Ge:(Ge=mn(a),Ge!==null&&(sn.data=Ge)))),(Ge=oe?Be(e,a):je(e,a))&&(sn=yu(ut,"onBeforeInput"),0<sn.length&&(ie=new Xe("onBeforeInput","beforeinput",null,a,bt),Ct.push({event:ie,listeners:sn}),ie.data=Ge)),xM(Ct,e,ut,a,bt)}t_(Ct,n)})}function rc(e,n,a){return{instance:e,listener:n,currentTarget:a}}function yu(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=$s(e,a),u!=null&&o.unshift(rc(e,u,f)),u=$s(e,n),u!=null&&o.push(rc(e,u,f))),e.tag===3)return o;e=e.return}return[]}function bM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function n_(e,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var C=a,k=C.alternate,ut=C.stateNode;if(C=C.tag,k!==null&&k===o)break;C!==5&&C!==26&&C!==27||ut===null||(k=ut,u?(ut=$s(a,f),ut!=null&&_.unshift(rc(a,ut,k))):u||(ut=$s(a,f),ut!=null&&_.push(rc(a,ut,k)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var EM=/\r\n?/g,TM=/\u0000|\uFFFD/g;function i_(e){return(typeof e=="string"?e:""+e).replace(EM,`
`).replace(TM,"")}function a_(e,n){return n=i_(n),i_(e)===n}function Hn(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Qn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Qn(e,""+o);break;case"className":Qt(e,"class",o);break;case"tabIndex":Qt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Qt(e,a,o);break;case"style":Si(e,o,f);break;case"data":if(n!=="object"){Qt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=oa(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Hn(e,n,"name",u.name,u,null),Hn(e,n,"formEncType",u.formEncType,u,null),Hn(e,n,"formMethod",u.formMethod,u,null),Hn(e,n,"formTarget",u.formTarget,u,null)):(Hn(e,n,"encType",u.encType,u,null),Hn(e,n,"method",u.method,u,null),Hn(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=oa(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=la);break;case"onScroll":o!=null&&tn("scroll",e);break;case"onScrollEnd":o!=null&&tn("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=oa(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":tn("beforetoggle",e),tn("toggle",e),Vt(e,"popover",o);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Vt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=yi.get(a)||a,Vt(e,a,o))}}function rd(e,n,a,o,u,f){switch(a){case"style":Si(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Qn(e,o):(typeof o=="number"||typeof o=="bigint")&&Qn(e,""+o);break;case"onScroll":o!=null&&tn("scroll",e);break;case"onScrollEnd":o!=null&&tn("scrollend",e);break;case"onClick":o!=null&&(e.onclick=la);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Vt(e,a,o)}}}function Zi(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":tn("error",e),tn("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Hn(e,n,f,_,a,null)}}u&&Hn(e,n,"srcSet",a.srcSet,a,null),o&&Hn(e,n,"src",a.src,a,null);return;case"input":tn("invalid",e);var C=f=_=u=null,k=null,ut=null;for(o in a)if(a.hasOwnProperty(o)){var bt=a[o];if(bt!=null)switch(o){case"name":u=bt;break;case"type":_=bt;break;case"checked":k=bt;break;case"defaultChecked":ut=bt;break;case"value":f=bt;break;case"defaultValue":C=bt;break;case"children":case"dangerouslySetInnerHTML":if(bt!=null)throw Error(s(137,n));break;default:Hn(e,n,o,bt,a,null)}}wn(e,f,C,k,ut,_,u,!1);return;case"select":tn("invalid",e),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":_=C;break;case"multiple":o=C;default:Hn(e,n,u,C,a,null)}n=f,a=_,e.multiple=!!o,n!=null?xn(e,!!o,n,!1):a!=null&&xn(e,!!o,a,!0);return;case"textarea":tn("invalid",e),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(C=a[_],C!=null))switch(_){case"value":o=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Hn(e,n,_,C,a,null)}bn(e,o,u,f);return;case"option":for(k in a)if(a.hasOwnProperty(k)&&(o=a[k],o!=null))switch(k){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Hn(e,n,k,o,a,null)}return;case"dialog":tn("beforetoggle",e),tn("toggle",e),tn("cancel",e),tn("close",e);break;case"iframe":case"object":tn("load",e);break;case"video":case"audio":for(o=0;o<sc.length;o++)tn(sc[o],e);break;case"image":tn("error",e),tn("load",e);break;case"details":tn("toggle",e);break;case"embed":case"source":case"link":tn("error",e),tn("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ut in a)if(a.hasOwnProperty(ut)&&(o=a[ut],o!=null))switch(ut){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Hn(e,n,ut,o,a,null)}return;default:if(Ke(n)){for(bt in a)a.hasOwnProperty(bt)&&(o=a[bt],o!==void 0&&rd(e,n,bt,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&Hn(e,n,C,o,a,null))}function AM(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,C=null,k=null,ut=null,bt=null;for(mt in a){var Ct=a[mt];if(a.hasOwnProperty(mt)&&Ct!=null)switch(mt){case"checked":break;case"value":break;case"defaultValue":k=Ct;default:o.hasOwnProperty(mt)||Hn(e,n,mt,null,o,Ct)}}for(var dt in o){var mt=o[dt];if(Ct=a[dt],o.hasOwnProperty(dt)&&(mt!=null||Ct!=null))switch(dt){case"type":f=mt;break;case"name":u=mt;break;case"checked":ut=mt;break;case"defaultChecked":bt=mt;break;case"value":_=mt;break;case"defaultValue":C=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:mt!==Ct&&Hn(e,n,dt,mt,o,Ct)}}It(e,_,C,k,ut,bt,f,u);return;case"select":mt=_=C=dt=null;for(f in a)if(k=a[f],a.hasOwnProperty(f)&&k!=null)switch(f){case"value":break;case"multiple":mt=k;default:o.hasOwnProperty(f)||Hn(e,n,f,null,o,k)}for(u in o)if(f=o[u],k=a[u],o.hasOwnProperty(u)&&(f!=null||k!=null))switch(u){case"value":dt=f;break;case"defaultValue":C=f;break;case"multiple":_=f;default:f!==k&&Hn(e,n,u,f,o,k)}n=C,a=_,o=mt,dt!=null?xn(e,!!a,dt,!1):!!o!=!!a&&(n!=null?xn(e,!!a,n,!0):xn(e,!!a,a?[]:"",!1));return;case"textarea":mt=dt=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Hn(e,n,C,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":dt=u;break;case"defaultValue":mt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Hn(e,n,_,u,o,f)}Bn(e,dt,mt);return;case"option":for(var te in a)if(dt=a[te],a.hasOwnProperty(te)&&dt!=null&&!o.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:Hn(e,n,te,null,o,dt)}for(k in o)if(dt=o[k],mt=a[k],o.hasOwnProperty(k)&&dt!==mt&&(dt!=null||mt!=null))switch(k){case"selected":e.selected=dt&&typeof dt!="function"&&typeof dt!="symbol";break;default:Hn(e,n,k,dt,o,mt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Me in a)dt=a[Me],a.hasOwnProperty(Me)&&dt!=null&&!o.hasOwnProperty(Me)&&Hn(e,n,Me,null,o,dt);for(ut in o)if(dt=o[ut],mt=a[ut],o.hasOwnProperty(ut)&&dt!==mt&&(dt!=null||mt!=null))switch(ut){case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:Hn(e,n,ut,dt,o,mt)}return;default:if(Ke(n)){for(var Vn in a)dt=a[Vn],a.hasOwnProperty(Vn)&&dt!==void 0&&!o.hasOwnProperty(Vn)&&rd(e,n,Vn,void 0,o,dt);for(bt in o)dt=o[bt],mt=a[bt],!o.hasOwnProperty(bt)||dt===mt||dt===void 0&&mt===void 0||rd(e,n,bt,dt,o,mt);return}}for(var tt in a)dt=a[tt],a.hasOwnProperty(tt)&&dt!=null&&!o.hasOwnProperty(tt)&&Hn(e,n,tt,null,o,dt);for(Ct in o)dt=o[Ct],mt=a[Ct],!o.hasOwnProperty(Ct)||dt===mt||dt==null&&mt==null||Hn(e,n,Ct,dt,o,mt)}function s_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,C=u.duration;if(f&&C&&s_(_)){for(_=0,C=u.responseEnd,o+=1;o<a.length;o++){var k=a[o],ut=k.startTime;if(ut>C)break;var bt=k.transferSize,Ct=k.initiatorType;bt&&s_(Ct)&&(k=k.responseEnd,_+=bt*(k<C?1:(C-ut)/(k-ut)))}if(--o,n+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var od=null,ld=null;function bu(e){return e.nodeType===9?e:e.ownerDocument}function r_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function o_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function cd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ud=null;function RM(){var e=window.event;return e&&e.type==="popstate"?e===ud?!1:(ud=e,!0):(ud=null,!1)}var l_=typeof setTimeout=="function"?setTimeout:void 0,CM=typeof clearTimeout=="function"?clearTimeout:void 0,c_=typeof Promise=="function"?Promise:void 0,DM=typeof queueMicrotask=="function"?queueMicrotask:typeof c_<"u"?function(e){return c_.resolve(null).then(e).catch(UM)}:l_;function UM(e){setTimeout(function(){throw e})}function _r(e){return e==="head"}function u_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Ko(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")oc(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,oc(a);for(var f=a.firstChild;f;){var _=f.nextSibling,C=f.nodeName;f[si]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&oc(e.ownerDocument.body);a=u}while(a);Ko(n)}function f_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function fd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":fd(a),Ii(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function NM(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[si])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=qa(e.nextSibling),e===null)break}return null}function LM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=qa(e.nextSibling),e===null))return null;return e}function h_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=qa(e.nextSibling),e===null))return null;return e}function hd(e){return e.data==="$?"||e.data==="$~"}function dd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function OM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function qa(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var pd=null;function d_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return qa(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function p_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function m_(e,n,a){switch(n=bu(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function oc(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ii(e)}var Ya=new Map,g_=new Set;function Eu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Hs=X.d;X.d={f:PM,r:IM,D:FM,C:zM,L:BM,m:GM,X:VM,S:HM,M:kM};function PM(){var e=Hs.f(),n=mu();return e||n}function IM(e){var n=jn(e);n!==null&&n.tag===5&&n.type==="form"?L0(n):Hs.r(e)}var qo=typeof document>"u"?null:document;function __(e,n,a){var o=qo;if(o&&typeof n=="string"&&n){var u=jt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),g_.has(u)||(g_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Zi(n,"link",e),en(n),o.head.appendChild(n)))}}function FM(e){Hs.D(e),__("dns-prefetch",e,null)}function zM(e,n){Hs.C(e,n),__("preconnect",e,n)}function BM(e,n,a){Hs.L(e,n,a);var o=qo;if(o&&e&&n){var u='link[rel="preload"][as="'+jt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+jt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+jt(a.imageSizes)+'"]')):u+='[href="'+jt(e)+'"]';var f=u;switch(n){case"style":f=Yo(e);break;case"script":f=Zo(e)}Ya.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ya.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(lc(f))||n==="script"&&o.querySelector(cc(f))||(n=o.createElement("link"),Zi(n,"link",e),en(n),o.head.appendChild(n)))}}function GM(e,n){Hs.m(e,n);var a=qo;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+jt(o)+'"][href="'+jt(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Zo(e)}if(!Ya.has(f)&&(e=x({rel:"modulepreload",href:e},n),Ya.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(cc(f)))return}o=a.createElement("link"),Zi(o,"link",e),en(o),a.head.appendChild(o)}}}function HM(e,n,a){Hs.S(e,n,a);var o=qo;if(o&&e){var u=ri(o).hoistableStyles,f=Yo(e);n=n||"default";var _=u.get(f);if(!_){var C={loading:0,preload:null};if(_=o.querySelector(lc(f)))C.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ya.get(f))&&md(e,a);var k=_=o.createElement("link");en(k),Zi(k,"link",e),k._p=new Promise(function(ut,bt){k.onload=ut,k.onerror=bt}),k.addEventListener("load",function(){C.loading|=1}),k.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Tu(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:C},u.set(f,_)}}}function VM(e,n){Hs.X(e,n);var a=qo;if(a&&e){var o=ri(a).hoistableScripts,u=Zo(e),f=o.get(u);f||(f=a.querySelector(cc(u)),f||(e=x({src:e,async:!0},n),(n=Ya.get(u))&&gd(e,n),f=a.createElement("script"),en(f),Zi(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function kM(e,n){Hs.M(e,n);var a=qo;if(a&&e){var o=ri(a).hoistableScripts,u=Zo(e),f=o.get(u);f||(f=a.querySelector(cc(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=Ya.get(u))&&gd(e,n),f=a.createElement("script"),en(f),Zi(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function v_(e,n,a,o){var u=(u=ft.current)?Eu(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Yo(a.href),a=ri(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Yo(a.href);var f=ri(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(lc(e)))&&!f._p&&(_.instance=f,_.state.loading=5),Ya.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ya.set(e,a),f||XM(u,e,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Zo(a),a=ri(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Yo(e){return'href="'+jt(e)+'"'}function lc(e){return'link[rel="stylesheet"]['+e+"]"}function x_(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function XM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Zi(n,"link",a),en(n),e.head.appendChild(n))}function Zo(e){return'[src="'+jt(e)+'"]'}function cc(e){return"script[async]"+e}function M_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+jt(a.href)+'"]');if(o)return n.instance=o,en(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),en(o),Zi(o,"style",u),Tu(o,a.precedence,e),n.instance=o;case"stylesheet":u=Yo(a.href);var f=e.querySelector(lc(u));if(f)return n.state.loading|=4,n.instance=f,en(f),f;o=x_(a),(u=Ya.get(u))&&md(o,u),f=(e.ownerDocument||e).createElement("link"),en(f);var _=f;return _._p=new Promise(function(C,k){_.onload=C,_.onerror=k}),Zi(f,"link",o),n.state.loading|=4,Tu(f,a.precedence,e),n.instance=f;case"script":return f=Zo(a.src),(u=e.querySelector(cc(f)))?(n.instance=u,en(u),u):(o=a,(u=Ya.get(f))&&(o=x({},a),gd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),en(u),Zi(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Tu(o,a.precedence,e));return n.instance}function Tu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var C=o[_];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function md(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function gd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Au=null;function S_(e,n,a){if(Au===null){var o=new Map,u=Au=new Map;u.set(a,o)}else u=Au,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[si]||f[fn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var C=o.get(_);C?C.push(f):o.set(_,[f])}}return o}function y_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function WM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function b_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function qM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Yo(o.href),f=n.querySelector(lc(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=wu.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,en(f);return}f=n.ownerDocument||n,o=x_(o),(u=Ya.get(u))&&md(o,u),f=f.createElement("link"),en(f);var _=f;_._p=new Promise(function(C,k){_.onload=C,_.onerror=k}),Zi(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=wu.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var _d=0;function YM(e,n){return e.stylesheets&&e.count===0&&Cu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Cu(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&_d===0&&(_d=62500*wM());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Cu(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>_d?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function wu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Cu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ru=null;function Cu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ru=new Map,n.forEach(ZM,e),Ru=null,wu.call(e))}function ZM(e,n){if(!(n.state.loading&4)){var a=Ru.get(e);if(a)var o=a.get(null);else{a=new Map,Ru.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=wu.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var uc={$$typeof:B,Provider:null,Consumer:null,_currentValue:lt,_currentValue2:lt,_threadCount:0};function KM(e,n,a,o,u,f,_,C,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wt(0),this.hiddenUpdates=Wt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function E_(e,n,a,o,u,f,_,C,k,ut,bt,Ct){return e=new KM(e,n,a,_,k,ut,bt,Ct,C),n=1,f===!0&&(n|=24),f=wa(3,null,null,n),e.current=f,f.stateNode=e,n=jf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},th(f),e}function T_(e){return e?(e=To,e):To}function A_(e,n,a,o,u,f){u=T_(u),o.context===null?o.context=u:o.pendingContext=u,o=rr(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=or(e,o,n),a!==null&&(va(a,e,n),Vl(a,e,n))}function w_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function vd(e,n){w_(e,n),(e=e.alternate)&&w_(e,n)}function R_(e){if(e.tag===13||e.tag===31){var n=Hr(e,67108864);n!==null&&va(n,e,67108864),vd(e,67108864)}}function C_(e){if(e.tag===13||e.tag===31){var n=Na();n=sa(n);var a=Hr(e,n);a!==null&&va(a,e,n),vd(e,n)}}var Du=!0;function jM(e,n,a,o){var u=H.T;H.T=null;var f=X.p;try{X.p=2,xd(e,n,a,o)}finally{X.p=f,H.T=u}}function QM(e,n,a,o){var u=H.T;H.T=null;var f=X.p;try{X.p=8,xd(e,n,a,o)}finally{X.p=f,H.T=u}}function xd(e,n,a,o){if(Du){var u=Md(o);if(u===null)sd(e,n,o,Uu,a),U_(e,o);else if($M(u,e,n,a,o))o.stopPropagation();else if(U_(e,o),n&4&&-1<JM.indexOf(e)){for(;u!==null;){var f=jn(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=vt(f.pendingLanes);if(_!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;_;){var k=1<<31-R(_);C.entanglements[1]|=k,_&=~k}ds(f),(En&6)===0&&(du=An()+500,ac(0))}}break;case 31:case 13:C=Hr(f,2),C!==null&&va(C,f,2),mu(),vd(f,2)}if(f=Md(o),f===null&&sd(e,n,o,Uu,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else sd(e,n,o,null,a)}}function Md(e){return e=ls(e),Sd(e)}var Uu=null;function Sd(e){if(Uu=null,e=_i(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Uu=e,null}function D_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(un()){case P:return 2;case S:return 8;case et:case ht:return 32;case xt:return 268435456;default:return 32}default:return 32}}var yd=!1,vr=null,xr=null,Mr=null,fc=new Map,hc=new Map,Sr=[],JM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function U_(e,n){switch(e){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":fc.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":hc.delete(n.pointerId)}}function dc(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=jn(n),n!==null&&R_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function $M(e,n,a,o,u){switch(n){case"focusin":return vr=dc(vr,e,n,a,o,u),!0;case"dragenter":return xr=dc(xr,e,n,a,o,u),!0;case"mouseover":return Mr=dc(Mr,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return fc.set(f,dc(fc.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,hc.set(f,dc(hc.get(f)||null,e,n,a,o,u)),!0}return!1}function N_(e){var n=_i(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,On(e.priority,function(){C_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,On(e.priority,function(){C_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Md(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);ba=o,a.target.dispatchEvent(o),ba=null}else return n=jn(a),n!==null&&R_(n),e.blockedOn=a,!1;n.shift()}return!0}function L_(e,n,a){Nu(e)&&a.delete(n)}function tS(){yd=!1,vr!==null&&Nu(vr)&&(vr=null),xr!==null&&Nu(xr)&&(xr=null),Mr!==null&&Nu(Mr)&&(Mr=null),fc.forEach(L_),hc.forEach(L_)}function Lu(e,n){e.blockedOn===n&&(e.blockedOn=null,yd||(yd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,tS)))}var Ou=null;function O_(e){Ou!==e&&(Ou=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ou===e&&(Ou=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Sd(o||a)===null)continue;break}var f=jn(a);f!==null&&(e.splice(n,3),n-=3,Mh(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ko(e){function n(k){return Lu(k,e)}vr!==null&&Lu(vr,e),xr!==null&&Lu(xr,e),Mr!==null&&Lu(Mr,e),fc.forEach(n),hc.forEach(n);for(var a=0;a<Sr.length;a++){var o=Sr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Sr.length&&(a=Sr[0],a.blockedOn===null);)N_(a),a.blockedOn===null&&Sr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[yn]||null;if(typeof f=="function")_||O_(a);else if(_){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[yn]||null)C=_.formAction;else if(Sd(u)!==null)continue}else C=_.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),O_(a)}}}function P_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function bd(e){this._internalRoot=e}Pu.prototype.render=bd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Na();A_(a,o,e,n,null,null)},Pu.prototype.unmount=bd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;A_(e.current,2,null,e,null,null),mu(),n[xe]=null}};function Pu(e){this._internalRoot=e}Pu.prototype.unstable_scheduleHydration=function(e){if(e){var n=ra();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Sr.length&&n!==0&&n<Sr[a].priority;a++);Sr.splice(a,0,e),a===0&&N_(e)}};var I_=t.version;if(I_!=="19.2.7")throw Error(s(527,I_,"19.2.7"));X.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(n),e=e!==null?M(e):null,e=e===null?null:e.stateNode,e};var eS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Iu.isDisabled&&Iu.supportsFiber)try{T=Iu.inject(eS),V=Iu}catch{}}return mc.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=k0,f=X0,_=W0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=E_(e,1,!1,null,null,a,o,null,u,f,_,P_),e[xe]=n.current,ad(e),new bd(n)},mc.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=k0,_=X0,C=W0,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(k=a.formState)),n=E_(e,1,!0,n,a??null,o,u,k,f,_,C,P_),n.context=T_(null),a=n.current,o=Na(),o=sa(o),u=rr(o),u.callback=null,or(a,u,o),a=o,n.current.lanes=a,Ht(n,a),ds(n),e[xe]=n.current,ad(e),new Pu(n)},mc.version="19.2.7",mc}var q_;function fS(){if(q_)return Ad.exports;q_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ad.exports=uS(),Ad.exports}var hS=fS();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $p="185",dS=0,Y_=1,pS=2,cf=1,tx=2,Ac=3,Lr=0,Hi=1,ja=2,Ks=0,pl=1,dl=2,Z_=3,K_=4,mS=5,so=100,gS=101,_S=102,vS=103,xS=104,MS=200,SS=201,yS=202,bS=203,lp=204,cp=205,ES=206,TS=207,AS=208,wS=209,RS=210,CS=211,DS=212,US=213,NS=214,up=0,fp=1,hp=2,_l=3,dp=4,pp=5,mp=6,gp=7,tm=0,LS=1,OS=2,xs=0,ex=1,nx=2,ix=3,em=4,ax=5,sx=6,rx=7,ox=300,co=301,vl=302,Dd=303,Ud=304,yf=306,Dc=1e3,Zs=1001,_p=1002,Qi=1003,PS=1004,Fu=1005,na=1006,Nd=1007,oo=1008,Ia=1009,lx=1010,cx=1011,Uc=1012,nm=1013,Ss=1014,rs=1015,Qs=1016,im=1017,am=1018,Nc=1020,ux=35902,fx=35899,hx=1021,dx=1022,os=1023,Js=1026,lo=1027,sm=1028,rm=1029,uo=1030,om=1031,lm=1033,uf=33776,ff=33777,hf=33778,df=33779,vp=35840,xp=35841,Mp=35842,Sp=35843,yp=36196,bp=37492,Ep=37496,Tp=37488,Ap=37489,mf=37490,wp=37491,Rp=37808,Cp=37809,Dp=37810,Up=37811,Np=37812,Lp=37813,Op=37814,Pp=37815,Ip=37816,Fp=37817,zp=37818,Bp=37819,Gp=37820,Hp=37821,Vp=36492,kp=36494,Xp=36495,Wp=36283,qp=36284,gf=36285,Yp=36286,IS=3200,_f=0,FS=1,Dr="",Ka="srgb",vf="srgb-linear",xf="linear",zn="srgb",jo=7680,j_=519,zS=512,BS=513,GS=514,cm=515,HS=516,VS=517,um=518,kS=519,Q_=35044,J_="300 es",vs=2e3,Lc=2001;function XS(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Mf(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function WS(){const r=Mf("canvas");return r.style.display="block",r}const $_={};function tv(...r){const t="THREE."+r.shift();console.log(t,...r)}function px(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Te(...r){r=px(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function _n(...r){r=px(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function ml(...r){const t=r.join(" ");t in $_||($_[t]=!0,Te(...r))}function qS(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const YS={[up]:fp,[hp]:mp,[dp]:gp,[_l]:pp,[fp]:up,[mp]:hp,[gp]:dp,[pp]:_l};class fo{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const ta=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ev=1234567;const Rc=Math.PI/180,xl=180/Math.PI;function yl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(ta[r&255]+ta[r>>8&255]+ta[r>>16&255]+ta[r>>24&255]+"-"+ta[t&255]+ta[t>>8&255]+"-"+ta[t>>16&15|64]+ta[t>>24&255]+"-"+ta[i&63|128]+ta[i>>8&255]+"-"+ta[i>>16&255]+ta[i>>24&255]+ta[s&255]+ta[s>>8&255]+ta[s>>16&255]+ta[s>>24&255]).toLowerCase()}function rn(r,t,i){return Math.max(t,Math.min(i,r))}function fm(r,t){return(r%t+t)%t}function ZS(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function KS(r,t,i){return r!==t?(i-r)/(t-r):0}function Cc(r,t,i){return(1-i)*r+i*t}function jS(r,t,i,s){return Cc(r,t,1-Math.exp(-i*s))}function QS(r,t=1){return t-Math.abs(fm(r,t*2)-t)}function JS(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function $S(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function ty(r,t){return r+Math.floor(Math.random()*(t-r+1))}function ey(r,t){return r+Math.random()*(t-r)}function ny(r){return r*(.5-Math.random())}function iy(r){r!==void 0&&(ev=r);let t=ev+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ay(r){return r*Rc}function sy(r){return r*xl}function ry(r){return(r&r-1)===0&&r!==0}function oy(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ly(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function cy(r,t,i,s,l){const c=Math.cos,h=Math.sin,p=c(i/2),m=h(i/2),d=c((t+s)/2),M=h((t+s)/2),x=c((t-s)/2),g=h((t-s)/2),b=c((s-t)/2),A=h((s-t)/2);switch(l){case"XYX":r.set(p*M,m*x,m*g,p*d);break;case"YZY":r.set(m*g,p*M,m*x,p*d);break;case"ZXZ":r.set(m*x,m*g,p*M,p*d);break;case"XZX":r.set(p*M,m*A,m*b,p*d);break;case"YXY":r.set(m*b,p*M,m*A,p*d);break;case"ZYZ":r.set(m*A,m*b,p*M,p*d);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function hl(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ua(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ee={DEG2RAD:Rc,RAD2DEG:xl,generateUUID:yl,clamp:rn,euclideanModulo:fm,mapLinear:ZS,inverseLerp:KS,lerp:Cc,damp:jS,pingpong:QS,smoothstep:JS,smootherstep:$S,randInt:ty,randFloat:ey,randFloatSpread:ny,seededRandom:iy,degToRad:ay,radToDeg:sy,isPowerOfTwo:ry,ceilPowerOfTwo:oy,floorPowerOfTwo:ly,setQuaternionFromProperEuler:cy,normalize:ua,denormalize:hl},xm=class xm{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=rn(this.x,t.x,i.x),this.y=rn(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=rn(this.x,t,i),this.y=rn(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(rn(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(rn(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xm.prototype.isVector2=!0;let qe=xm;class ho{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,p){let m=s[l+0],d=s[l+1],M=s[l+2],x=s[l+3],g=c[h+0],b=c[h+1],A=c[h+2],U=c[h+3];if(x!==U||m!==g||d!==b||M!==A){let y=m*g+d*b+M*A+x*U;y<0&&(g=-g,b=-b,A=-A,U=-U,y=-y);let v=1-p;if(y<.9995){const O=Math.acos(y),B=Math.sin(O);v=Math.sin(v*O)/B,p=Math.sin(p*O)/B,m=m*v+g*p,d=d*v+b*p,M=M*v+A*p,x=x*v+U*p}else{m=m*v+g*p,d=d*v+b*p,M=M*v+A*p,x=x*v+U*p;const O=1/Math.sqrt(m*m+d*d+M*M+x*x);m*=O,d*=O,M*=O,x*=O}}t[i]=m,t[i+1]=d,t[i+2]=M,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,h){const p=s[l],m=s[l+1],d=s[l+2],M=s[l+3],x=c[h],g=c[h+1],b=c[h+2],A=c[h+3];return t[i]=p*A+M*x+m*b-d*g,t[i+1]=m*A+M*g+d*x-p*b,t[i+2]=d*A+M*b+p*g-m*x,t[i+3]=M*A-p*x-m*g-d*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,p=Math.cos,m=Math.sin,d=p(s/2),M=p(l/2),x=p(c/2),g=m(s/2),b=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=g*M*x+d*b*A,this._y=d*b*x-g*M*A,this._z=d*M*A+g*b*x,this._w=d*M*x-g*b*A;break;case"YXZ":this._x=g*M*x+d*b*A,this._y=d*b*x-g*M*A,this._z=d*M*A-g*b*x,this._w=d*M*x+g*b*A;break;case"ZXY":this._x=g*M*x-d*b*A,this._y=d*b*x+g*M*A,this._z=d*M*A+g*b*x,this._w=d*M*x-g*b*A;break;case"ZYX":this._x=g*M*x-d*b*A,this._y=d*b*x+g*M*A,this._z=d*M*A-g*b*x,this._w=d*M*x+g*b*A;break;case"YZX":this._x=g*M*x+d*b*A,this._y=d*b*x+g*M*A,this._z=d*M*A-g*b*x,this._w=d*M*x-g*b*A;break;case"XZY":this._x=g*M*x-d*b*A,this._y=d*b*x-g*M*A,this._z=d*M*A+g*b*x,this._w=d*M*x+g*b*A;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],M=i[6],x=i[10],g=s+p+x;if(g>0){const b=.5/Math.sqrt(g+1);this._w=.25/b,this._x=(M-m)*b,this._y=(c-d)*b,this._z=(h-l)*b}else if(s>p&&s>x){const b=2*Math.sqrt(1+s-p-x);this._w=(M-m)/b,this._x=.25*b,this._y=(l+h)/b,this._z=(c+d)/b}else if(p>x){const b=2*Math.sqrt(1+p-s-x);this._w=(c-d)/b,this._x=(l+h)/b,this._y=.25*b,this._z=(m+M)/b}else{const b=2*Math.sqrt(1+x-s-p);this._w=(h-l)/b,this._x=(c+d)/b,this._y=(m+M)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(rn(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,p=i._x,m=i._y,d=i._z,M=i._w;return this._x=s*M+h*p+l*d-c*m,this._y=l*M+h*m+c*p-s*d,this._z=c*M+h*d+s*m-l*p,this._w=h*M-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),M=Math.sin(d);m=Math.sin(m*d)/M,i=Math.sin(i*d)/M,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Mm=class Mm{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(nv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(nv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,p=t.z,m=t.w,d=2*(h*l-p*s),M=2*(p*i-c*l),x=2*(c*s-h*i);return this.x=i+m*d+h*x-p*M,this.y=s+m*M+p*d-c*x,this.z=l+m*x+c*M-h*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=rn(this.x,t.x,i.x),this.y=rn(this.y,t.y,i.y),this.z=rn(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=rn(this.x,t,i),this.y=rn(this.y,t,i),this.z=rn(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(rn(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-s*m,this.z=s*p-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ld.copy(this).projectOnVector(t),this.sub(Ld)}reflect(t){return this.sub(Ld.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(rn(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mm.prototype.isVector3=!0;let Q=Mm;const Ld=new Q,nv=new ho,Sm=class Sm{constructor(t,i,s,l,c,h,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,p,m,d)}set(t,i,s,l,c,h,p,m,d){const M=this.elements;return M[0]=t,M[1]=l,M[2]=p,M[3]=i,M[4]=c,M[5]=m,M[6]=s,M[7]=h,M[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],M=s[4],x=s[7],g=s[2],b=s[5],A=s[8],U=l[0],y=l[3],v=l[6],O=l[1],B=l[4],D=l[7],F=l[2],L=l[5],z=l[8];return c[0]=h*U+p*O+m*F,c[3]=h*y+p*B+m*L,c[6]=h*v+p*D+m*z,c[1]=d*U+M*O+x*F,c[4]=d*y+M*B+x*L,c[7]=d*v+M*D+x*z,c[2]=g*U+b*O+A*F,c[5]=g*y+b*B+A*L,c[8]=g*v+b*D+A*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],M=t[8];return i*h*M-i*p*d-s*c*M+s*p*m+l*c*d-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],M=t[8],x=M*h-p*d,g=p*m-M*c,b=d*c-h*m,A=i*x+s*g+l*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const U=1/A;return t[0]=x*U,t[1]=(l*d-M*s)*U,t[2]=(p*s-l*h)*U,t[3]=g*U,t[4]=(M*i-l*m)*U,t[5]=(l*c-p*i)*U,t[6]=b*U,t[7]=(s*m-d*i)*U,t[8]=(h*i-s*c)*U,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*h+d*p)+h+t,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(t,i){return ml("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Od.makeScale(t,i)),this}rotate(t){return ml("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Od.makeRotation(-t)),this}translate(t,i){return ml("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Od.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Sm.prototype.isMatrix3=!0;let Oe=Sm;const Od=new Oe,iv=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),av=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uy(){const r={enabled:!0,workingColorSpace:vf,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===zn&&(l.r=js(l.r),l.g=js(l.g),l.b=js(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===zn&&(l.r=gl(l.r),l.g=gl(l.g),l.b=gl(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Dr?xf:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ml("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ml("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[vf]:{primaries:t,whitePoint:s,transfer:xf,toXYZ:iv,fromXYZ:av,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ka},outputColorSpaceConfig:{drawingBufferColorSpace:Ka}},[Ka]:{primaries:t,whitePoint:s,transfer:zn,toXYZ:iv,fromXYZ:av,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ka}}}),r}const cn=uy();function js(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function gl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Qo;class fy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Qo===void 0&&(Qo=Mf("canvas")),Qo.width=t.width,Qo.height=t.height;const l=Qo.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Qo}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Mf("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=js(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(js(i[s]/255)*255):i[s]=js(i[s]);return{data:i,width:t.width,height:t.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hy=0;class hm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=yl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(Pd(l[h].image)):c.push(Pd(l[h]))}else c=Pd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Pd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}let dy=0;const Id=new Q;class ia extends fo{constructor(t=ia.DEFAULT_IMAGE,i=ia.DEFAULT_MAPPING,s=Zs,l=Zs,c=na,h=oo,p=os,m=Ia,d=ia.DEFAULT_ANISOTROPY,M=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=yl(),this.name="",this.source=new hm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=M,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Id).x}get height(){return this.source.getSize(Id).y}get depth(){return this.source.getSize(Id).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){Te(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Te(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ox)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dc:t.x=t.x-Math.floor(t.x);break;case Zs:t.x=t.x<0?0:1;break;case _p:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dc:t.y=t.y-Math.floor(t.y);break;case Zs:t.y=t.y<0?0:1;break;case _p:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ia.DEFAULT_IMAGE=null;ia.DEFAULT_MAPPING=ox;ia.DEFAULT_ANISOTROPY=1;const ym=class ym{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,d=m[0],M=m[4],x=m[8],g=m[1],b=m[5],A=m[9],U=m[2],y=m[6],v=m[10];if(Math.abs(M-g)<.01&&Math.abs(x-U)<.01&&Math.abs(A-y)<.01){if(Math.abs(M+g)<.1&&Math.abs(x+U)<.1&&Math.abs(A+y)<.1&&Math.abs(d+b+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(d+1)/2,D=(b+1)/2,F=(v+1)/2,L=(M+g)/4,z=(x+U)/4,E=(A+y)/4;return B>D&&B>F?B<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(B),l=L/s,c=z/s):D>F?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=L/l,c=E/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=z/c,l=E/c),this.set(s,l,c,i),this}let O=Math.sqrt((y-A)*(y-A)+(x-U)*(x-U)+(g-M)*(g-M));return Math.abs(O)<.001&&(O=1),this.x=(y-A)/O,this.y=(x-U)/O,this.z=(g-M)/O,this.w=Math.acos((d+b+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=rn(this.x,t.x,i.x),this.y=rn(this.y,t.y,i.y),this.z=rn(this.z,t.z,i.z),this.w=rn(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=rn(this.x,t,i),this.y=rn(this.y,t,i),this.z=rn(this.z,t,i),this.w=rn(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(rn(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ym.prototype.isVector4=!0;let li=ym;class py extends fo{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:na,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new li(0,0,t,i),this.scissorTest=!1,this.viewport=new li(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new ia(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:na,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new hm(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends py{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class mx extends ia{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Qi,this.minFilter=Qi,this.wrapR=Zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class my extends ia{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Qi,this.minFilter=Qi,this.wrapR=Zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sf=class Sf{constructor(t,i,s,l,c,h,p,m,d,M,x,g,b,A,U,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,p,m,d,M,x,g,b,A,U,y)}set(t,i,s,l,c,h,p,m,d,M,x,g,b,A,U,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=p,v[13]=m,v[2]=d,v[6]=M,v[10]=x,v[14]=g,v[3]=b,v[7]=A,v[11]=U,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sf().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Jo.setFromMatrixColumn(t,0).length(),c=1/Jo.setFromMatrixColumn(t,1).length(),h=1/Jo.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),M=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const g=h*M,b=h*x,A=p*M,U=p*x;i[0]=m*M,i[4]=-m*x,i[8]=d,i[1]=b+A*d,i[5]=g-U*d,i[9]=-p*m,i[2]=U-g*d,i[6]=A+b*d,i[10]=h*m}else if(t.order==="YXZ"){const g=m*M,b=m*x,A=d*M,U=d*x;i[0]=g+U*p,i[4]=A*p-b,i[8]=h*d,i[1]=h*x,i[5]=h*M,i[9]=-p,i[2]=b*p-A,i[6]=U+g*p,i[10]=h*m}else if(t.order==="ZXY"){const g=m*M,b=m*x,A=d*M,U=d*x;i[0]=g-U*p,i[4]=-h*x,i[8]=A+b*p,i[1]=b+A*p,i[5]=h*M,i[9]=U-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(t.order==="ZYX"){const g=h*M,b=h*x,A=p*M,U=p*x;i[0]=m*M,i[4]=A*d-b,i[8]=g*d+U,i[1]=m*x,i[5]=U*d+g,i[9]=b*d-A,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(t.order==="YZX"){const g=h*m,b=h*d,A=p*m,U=p*d;i[0]=m*M,i[4]=U-g*x,i[8]=A*x+b,i[1]=x,i[5]=h*M,i[9]=-p*M,i[2]=-d*M,i[6]=b*x+A,i[10]=g-U*x}else if(t.order==="XZY"){const g=h*m,b=h*d,A=p*m,U=p*d;i[0]=m*M,i[4]=-x,i[8]=d*M,i[1]=g*x+U,i[5]=h*M,i[9]=b*x-A,i[2]=A*x-b,i[6]=p*M,i[10]=U*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gy,t,_y)}lookAt(t,i,s){const l=this.elements;return La.subVectors(t,i),La.lengthSq()===0&&(La.z=1),La.normalize(),br.crossVectors(s,La),br.lengthSq()===0&&(Math.abs(s.z)===1?La.x+=1e-4:La.z+=1e-4,La.normalize(),br.crossVectors(s,La)),br.normalize(),zu.crossVectors(La,br),l[0]=br.x,l[4]=zu.x,l[8]=La.x,l[1]=br.y,l[5]=zu.y,l[9]=La.y,l[2]=br.z,l[6]=zu.z,l[10]=La.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],M=s[1],x=s[5],g=s[9],b=s[13],A=s[2],U=s[6],y=s[10],v=s[14],O=s[3],B=s[7],D=s[11],F=s[15],L=l[0],z=l[4],E=l[8],N=l[12],Y=l[1],q=l[5],j=l[9],gt=l[13],yt=l[2],it=l[6],H=l[10],X=l[14],lt=l[3],Et=l[7],Ot=l[11],I=l[15];return c[0]=h*L+p*Y+m*yt+d*lt,c[4]=h*z+p*q+m*it+d*Et,c[8]=h*E+p*j+m*H+d*Ot,c[12]=h*N+p*gt+m*X+d*I,c[1]=M*L+x*Y+g*yt+b*lt,c[5]=M*z+x*q+g*it+b*Et,c[9]=M*E+x*j+g*H+b*Ot,c[13]=M*N+x*gt+g*X+b*I,c[2]=A*L+U*Y+y*yt+v*lt,c[6]=A*z+U*q+y*it+v*Et,c[10]=A*E+U*j+y*H+v*Ot,c[14]=A*N+U*gt+y*X+v*I,c[3]=O*L+B*Y+D*yt+F*lt,c[7]=O*z+B*q+D*it+F*Et,c[11]=O*E+B*j+D*H+F*Ot,c[15]=O*N+B*gt+D*X+F*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],p=t[5],m=t[9],d=t[13],M=t[2],x=t[6],g=t[10],b=t[14],A=t[3],U=t[7],y=t[11],v=t[15],O=m*b-d*g,B=p*b-d*x,D=p*g-m*x,F=h*b-d*M,L=h*g-m*M,z=h*x-p*M;return i*(U*O-y*B+v*D)-s*(A*O-y*F+v*L)+l*(A*B-U*F+v*z)-c*(A*D-U*L+y*z)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[1],h=t[5],p=t[9],m=t[2],d=t[6],M=t[10];return i*(h*M-p*d)-s*(c*M-p*m)+l*(c*d-h*m)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],M=t[8],x=t[9],g=t[10],b=t[11],A=t[12],U=t[13],y=t[14],v=t[15],O=i*p-s*h,B=i*m-l*h,D=i*d-c*h,F=s*m-l*p,L=s*d-c*p,z=l*d-c*m,E=M*U-x*A,N=M*y-g*A,Y=M*v-b*A,q=x*y-g*U,j=x*v-b*U,gt=g*v-b*y,yt=O*gt-B*j+D*q+F*Y-L*N+z*E;if(yt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const it=1/yt;return t[0]=(p*gt-m*j+d*q)*it,t[1]=(l*j-s*gt-c*q)*it,t[2]=(U*z-y*L+v*F)*it,t[3]=(g*L-x*z-b*F)*it,t[4]=(m*Y-h*gt-d*N)*it,t[5]=(i*gt-l*Y+c*N)*it,t[6]=(y*D-A*z-v*B)*it,t[7]=(M*z-g*D+b*B)*it,t[8]=(h*j-p*Y+d*E)*it,t[9]=(s*Y-i*j-c*E)*it,t[10]=(A*L-U*D+v*O)*it,t[11]=(x*D-M*L-b*O)*it,t[12]=(p*N-h*q-m*E)*it,t[13]=(i*q-s*N+l*E)*it,t[14]=(U*B-A*F-y*O)*it,t[15]=(M*F-x*B+g*O)*it,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,p=t.y,m=t.z,d=c*h,M=c*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,M*p+s,M*m-l*h,0,d*m-l*p,M*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,M=h+h,x=p+p,g=c*d,b=c*M,A=c*x,U=h*M,y=h*x,v=p*x,O=m*d,B=m*M,D=m*x,F=s.x,L=s.y,z=s.z;return l[0]=(1-(U+v))*F,l[1]=(b+D)*F,l[2]=(A-B)*F,l[3]=0,l[4]=(b-D)*L,l[5]=(1-(g+v))*L,l[6]=(y+O)*L,l[7]=0,l[8]=(A+B)*z,l[9]=(y-O)*z,l[10]=(1-(g+U))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let h=Jo.set(l[0],l[1],l[2]).length();const p=Jo.set(l[4],l[5],l[6]).length(),m=Jo.set(l[8],l[9],l[10]).length();c<0&&(h=-h),es.copy(this);const d=1/h,M=1/p,x=1/m;return es.elements[0]*=d,es.elements[1]*=d,es.elements[2]*=d,es.elements[4]*=M,es.elements[5]*=M,es.elements[6]*=M,es.elements[8]*=x,es.elements[9]*=x,es.elements[10]*=x,i.setFromRotationMatrix(es),s.x=h,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,h,p=vs,m=!1){const d=this.elements,M=2*c/(i-t),x=2*c/(s-l),g=(i+t)/(i-t),b=(s+l)/(s-l);let A,U;if(m)A=c/(h-c),U=h*c/(h-c);else if(p===vs)A=-(h+c)/(h-c),U=-2*h*c/(h-c);else if(p===Lc)A=-h/(h-c),U=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=M,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=x,d[9]=b,d[13]=0,d[2]=0,d[6]=0,d[10]=A,d[14]=U,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,s,l,c,h,p=vs,m=!1){const d=this.elements,M=2/(i-t),x=2/(s-l),g=-(i+t)/(i-t),b=-(s+l)/(s-l);let A,U;if(m)A=1/(h-c),U=h/(h-c);else if(p===vs)A=-2/(h-c),U=-(h+c)/(h-c);else if(p===Lc)A=-1/(h-c),U=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=M,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=x,d[9]=0,d[13]=b,d[2]=0,d[6]=0,d[10]=A,d[14]=U,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Sf.prototype.isMatrix4=!0;let Wn=Sf;const Jo=new Q,es=new Wn,gy=new Q(0,0,0),_y=new Q(1,1,1),br=new Q,zu=new Q,La=new Q,sv=new Wn,rv=new ho;class Di{constructor(t=0,i=0,s=0,l=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],M=l[9],x=l[2],g=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(rn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-M,b),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(M,-1,1)),Math.abs(M)<.9999999?(this._y=Math.atan2(p,b),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(rn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,b),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-rn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(rn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-M,d),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,b));break;case"XZY":this._z=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-M,b),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return sv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return rv.setFromEuler(this),this.setFromQuaternion(rv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class gx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vy=0;const ov=new Q,$o=new ho,Vs=new Wn,Bu=new Q,gc=new Q,xy=new Q,My=new ho,lv=new Q(1,0,0),cv=new Q(0,1,0),uv=new Q(0,0,1),fv={type:"added"},Sy={type:"removed"},tl={type:"childadded",child:null},Fd={type:"childremoved",child:null};class Mi extends fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=yl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mi.DEFAULT_UP.clone();const t=new Q,i=new Di,s=new ho,l=new Q(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Wn},normalMatrix:{value:new Oe}}),this.matrix=new Wn,this.matrixWorld=new Wn,this.matrixAutoUpdate=Mi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return $o.setFromAxisAngle(t,i),this.quaternion.multiply($o),this}rotateOnWorldAxis(t,i){return $o.setFromAxisAngle(t,i),this.quaternion.premultiply($o),this}rotateX(t){return this.rotateOnAxis(lv,t)}rotateY(t){return this.rotateOnAxis(cv,t)}rotateZ(t){return this.rotateOnAxis(uv,t)}translateOnAxis(t,i){return ov.copy(t).applyQuaternion(this.quaternion),this.position.add(ov.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(lv,t)}translateY(t){return this.translateOnAxis(cv,t)}translateZ(t){return this.translateOnAxis(uv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vs.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Bu.copy(t):Bu.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),gc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vs.lookAt(gc,Bu,this.up):Vs.lookAt(Bu,gc,this.up),this.quaternion.setFromRotationMatrix(Vs),l&&(Vs.extractRotation(l.matrixWorld),$o.setFromRotationMatrix(Vs),this.quaternion.premultiply($o.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(_n("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fv),tl.child=t,this.dispatchEvent(tl),tl.child=null):_n("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Sy),Fd.child=t,this.dispatchEvent(Fd),Fd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vs.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fv),tl.child=t,this.dispatchEvent(tl),tl.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gc,t,xy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gc,My,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let h=0,p=c.length;h<p;h++)c[h].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,M=m.length;d<M;d++){const x=m[d];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=h(t.geometries),m=h(t.materials),d=h(t.textures),M=h(t.images),x=h(t.shapes),g=h(t.skeletons),b=h(t.animations),A=h(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),M.length>0&&(s.images=M),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),b.length>0&&(s.animations=b),A.length>0&&(s.nodes=A)}return s.object=l,s;function h(p){const m=[];for(const d in p){const M=p[d];delete M.metadata,m.push(M)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Mi.DEFAULT_UP=new Q(0,1,0);Mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ya extends Mi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yy={type:"move"};class zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ya,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ya,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ya,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){h=!0;for(const U of t.hand.values()){const y=i.getJointPose(U,s),v=this._getHandJoint(d,U);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const M=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],g=M.position.distanceTo(x.position),b=.02,A=.005;d.inputState.pinching&&g>b+A?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=b-A&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(yy)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new ya;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const _x={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},Gu={h:0,s:0,l:0};function Bd(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class St{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ka){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,cn.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=cn.workingColorSpace){return this.r=t,this.g=i,this.b=s,cn.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=cn.workingColorSpace){if(t=fm(t,1),i=rn(i,0,1),s=rn(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Bd(h,c,t+1/3),this.g=Bd(h,c,t),this.b=Bd(h,c,t-1/3)}return cn.colorSpaceToWorking(this,l),this}setStyle(t,i=Ka){function s(c){c!==void 0&&parseFloat(c)<1&&Te("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:Te("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);Te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ka){const s=_x[t.toLowerCase()];return s!==void 0?this.setHex(s,i):Te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}copyLinearToSRGB(t){return this.r=gl(t.r),this.g=gl(t.g),this.b=gl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ka){return cn.workingToColorSpace(ea.copy(this),t),Math.round(rn(ea.r*255,0,255))*65536+Math.round(rn(ea.g*255,0,255))*256+Math.round(rn(ea.b*255,0,255))}getHexString(t=Ka){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=cn.workingColorSpace){cn.workingToColorSpace(ea.copy(this),i);const s=ea.r,l=ea.g,c=ea.b,h=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const M=(p+h)/2;if(p===h)m=0,d=0;else{const x=h-p;switch(d=M<=.5?x/(h+p):x/(2-h-p),h){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=d,t.l=M,t}getRGB(t,i=cn.workingColorSpace){return cn.workingToColorSpace(ea.copy(this),i),t.r=ea.r,t.g=ea.g,t.b=ea.b,t}getStyle(t=Ka){cn.workingToColorSpace(ea.copy(this),t);const i=ea.r,s=ea.g,l=ea.b;return t!==Ka?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Er),this.setHSL(Er.h+t,Er.s+i,Er.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Er),t.getHSL(Gu);const s=Cc(Er.h,Gu.h,i),l=Cc(Er.s,Gu.s,i),c=Cc(Er.l,Gu.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ea=new St;St.NAMES=_x;class dm{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(t),this.density=i}clone(){return new dm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class by extends Mi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ns=new Q,ks=new Q,Gd=new Q,Xs=new Q,el=new Q,nl=new Q,hv=new Q,Hd=new Q,Vd=new Q,kd=new Q,Xd=new li,Wd=new li,qd=new li;class ss{constructor(t=new Q,i=new Q,s=new Q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),ns.subVectors(t,i),l.cross(ns);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){ns.subVectors(l,i),ks.subVectors(s,i),Gd.subVectors(t,i);const h=ns.dot(ns),p=ns.dot(ks),m=ns.dot(Gd),d=ks.dot(ks),M=ks.dot(Gd),x=h*d-p*p;if(x===0)return c.set(0,0,0),null;const g=1/x,b=(d*m-p*M)*g,A=(h*M-p*m)*g;return c.set(1-b-A,A,b)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Xs)===null?!1:Xs.x>=0&&Xs.y>=0&&Xs.x+Xs.y<=1}static getInterpolation(t,i,s,l,c,h,p,m){return this.getBarycoord(t,i,s,l,Xs)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Xs.x),m.addScaledVector(h,Xs.y),m.addScaledVector(p,Xs.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Xd.setScalar(0),Wd.setScalar(0),qd.setScalar(0),Xd.fromBufferAttribute(t,i),Wd.fromBufferAttribute(t,s),qd.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Xd,c.x),h.addScaledVector(Wd,c.y),h.addScaledVector(qd,c.z),h}static isFrontFacing(t,i,s,l){return ns.subVectors(s,i),ks.subVectors(t,i),ns.cross(ks).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ns.subVectors(this.c,this.b),ks.subVectors(this.a,this.b),ns.cross(ks).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ss.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ss.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return ss.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return ss.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ss.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,p;el.subVectors(l,s),nl.subVectors(c,s),Hd.subVectors(t,s);const m=el.dot(Hd),d=nl.dot(Hd);if(m<=0&&d<=0)return i.copy(s);Vd.subVectors(t,l);const M=el.dot(Vd),x=nl.dot(Vd);if(M>=0&&x<=M)return i.copy(l);const g=m*x-M*d;if(g<=0&&m>=0&&M<=0)return h=m/(m-M),i.copy(s).addScaledVector(el,h);kd.subVectors(t,c);const b=el.dot(kd),A=nl.dot(kd);if(A>=0&&b<=A)return i.copy(c);const U=b*d-m*A;if(U<=0&&d>=0&&A<=0)return p=d/(d-A),i.copy(s).addScaledVector(nl,p);const y=M*A-b*x;if(y<=0&&x-M>=0&&b-A>=0)return hv.subVectors(c,l),p=(x-M)/(x-M+(b-A)),i.copy(l).addScaledVector(hv,p);const v=1/(y+U+g);return h=U*v,p=g*v,i.copy(s).addScaledVector(el,h).addScaledVector(nl,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class po{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(is.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(is.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=is.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)t.isMesh===!0?t.getVertexPosition(h,is):is.fromBufferAttribute(c,h),is.applyMatrix4(t.matrixWorld),this.expandByPoint(is);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Hu.copy(s.boundingBox)),Hu.applyMatrix4(t.matrixWorld),this.union(Hu)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,is),is.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_c),Vu.subVectors(this.max,_c),il.subVectors(t.a,_c),al.subVectors(t.b,_c),sl.subVectors(t.c,_c),Tr.subVectors(al,il),Ar.subVectors(sl,al),to.subVectors(il,sl);let i=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-to.z,to.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,to.z,0,-to.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-to.y,to.x,0];return!Yd(i,il,al,sl,Vu)||(i=[1,0,0,0,1,0,0,0,1],!Yd(i,il,al,sl,Vu))?!1:(ku.crossVectors(Tr,Ar),i=[ku.x,ku.y,ku.z],Yd(i,il,al,sl,Vu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,is).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(is).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ws[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ws[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ws[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ws[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ws[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ws[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ws[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ws[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ws),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ws=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],is=new Q,Hu=new po,il=new Q,al=new Q,sl=new Q,Tr=new Q,Ar=new Q,to=new Q,_c=new Q,Vu=new Q,ku=new Q,eo=new Q;function Yd(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){eo.fromArray(r,c);const p=l.x*Math.abs(eo.x)+l.y*Math.abs(eo.y)+l.z*Math.abs(eo.z),m=t.dot(eo),d=i.dot(eo),M=s.dot(eo);if(Math.max(-Math.max(m,d,M),Math.min(m,d,M))>p)return!1}return!0}const Ci=new Q,Xu=new qe;let Ey=0;class Fa extends fo{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ey++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Q_,this.updateRanges=[],this.gpuType=rs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Xu.fromBufferAttribute(this,i),Xu.applyMatrix3(t),this.setXY(i,Xu.x,Xu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Ci.fromBufferAttribute(this,i),Ci.applyMatrix3(t),this.setXYZ(i,Ci.x,Ci.y,Ci.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Ci.fromBufferAttribute(this,i),Ci.applyMatrix4(t),this.setXYZ(i,Ci.x,Ci.y,Ci.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Ci.fromBufferAttribute(this,i),Ci.applyNormalMatrix(t),this.setXYZ(i,Ci.x,Ci.y,Ci.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Ci.fromBufferAttribute(this,i),Ci.transformDirection(t),this.setXYZ(i,Ci.x,Ci.y,Ci.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=hl(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ua(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=hl(i,this.array)),i}setX(t,i){return this.normalized&&(i=ua(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=hl(i,this.array)),i}setY(t,i){return this.normalized&&(i=ua(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=hl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ua(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=hl(i,this.array)),i}setW(t,i){return this.normalized&&(i=ua(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=ua(i,this.array),s=ua(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=ua(i,this.array),s=ua(s,this.array),l=ua(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=ua(i,this.array),s=ua(s,this.array),l=ua(l,this.array),c=ua(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Q_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class vx extends Fa{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class xx extends Fa{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ci extends Fa{constructor(t,i,s){super(new Float32Array(t),i,s)}}const Ty=new po,vc=new Q,Zd=new Q;class bl{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Ty.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vc.subVectors(t,this.center);const i=vc.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(vc,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vc.copy(t.center).add(Zd)),this.expandByPoint(vc.copy(t.center).sub(Zd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Ay=0;const Za=new Wn,Kd=new Mi,rl=new Q,Oa=new po,xc=new po,Gi=new Q;class aa extends fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=yl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(XS(t)?xx:vx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Oe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Za.makeRotationFromQuaternion(t),this.applyMatrix4(Za),this}rotateX(t){return Za.makeRotationX(t),this.applyMatrix4(Za),this}rotateY(t){return Za.makeRotationY(t),this.applyMatrix4(Za),this}rotateZ(t){return Za.makeRotationZ(t),this.applyMatrix4(Za),this}translate(t,i,s){return Za.makeTranslation(t,i,s),this.applyMatrix4(Za),this}scale(t,i,s){return Za.makeScale(t,i,s),this.applyMatrix4(Za),this}lookAt(t){return Kd.lookAt(t),Kd.updateMatrix(),this.applyMatrix4(Kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rl).negate(),this.translate(rl.x,rl.y,rl.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ci(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new po);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){_n("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Oa.setFromBufferAttribute(c),this.morphTargetsRelative?(Gi.addVectors(this.boundingBox.min,Oa.min),this.boundingBox.expandByPoint(Gi),Gi.addVectors(this.boundingBox.max,Oa.max),this.boundingBox.expandByPoint(Gi)):(this.boundingBox.expandByPoint(Oa.min),this.boundingBox.expandByPoint(Oa.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_n('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){_n("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const s=this.boundingSphere.center;if(Oa.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];xc.setFromBufferAttribute(p),this.morphTargetsRelative?(Gi.addVectors(Oa.min,xc.min),Oa.expandByPoint(Gi),Gi.addVectors(Oa.max,xc.max),Oa.expandByPoint(Gi)):(Oa.expandByPoint(xc.min),Oa.expandByPoint(xc.max))}Oa.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Gi.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Gi));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,M=p.count;d<M;d++)Gi.fromBufferAttribute(p,d),m&&(rl.fromBufferAttribute(t,d),Gi.add(rl)),l=Math.max(l,s.distanceToSquared(Gi))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&_n('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){_n("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==s.count)&&(h=new Fa(new Float32Array(4*s.count),4),this.setAttribute("tangent",h));const p=[],m=[];for(let E=0;E<s.count;E++)p[E]=new Q,m[E]=new Q;const d=new Q,M=new Q,x=new Q,g=new qe,b=new qe,A=new qe,U=new Q,y=new Q;function v(E,N,Y){d.fromBufferAttribute(s,E),M.fromBufferAttribute(s,N),x.fromBufferAttribute(s,Y),g.fromBufferAttribute(c,E),b.fromBufferAttribute(c,N),A.fromBufferAttribute(c,Y),M.sub(d),x.sub(d),b.sub(g),A.sub(g);const q=1/(b.x*A.y-A.x*b.y);isFinite(q)&&(U.copy(M).multiplyScalar(A.y).addScaledVector(x,-b.y).multiplyScalar(q),y.copy(x).multiplyScalar(b.x).addScaledVector(M,-A.x).multiplyScalar(q),p[E].add(U),p[N].add(U),p[Y].add(U),m[E].add(y),m[N].add(y),m[Y].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let E=0,N=O.length;E<N;++E){const Y=O[E],q=Y.start,j=Y.count;for(let gt=q,yt=q+j;gt<yt;gt+=3)v(t.getX(gt+0),t.getX(gt+1),t.getX(gt+2))}const B=new Q,D=new Q,F=new Q,L=new Q;function z(E){F.fromBufferAttribute(l,E),L.copy(F);const N=p[E];B.copy(N),B.sub(F.multiplyScalar(F.dot(N))).normalize(),D.crossVectors(L,N);const q=D.dot(m[E])<0?-1:1;h.setXYZW(E,B.x,B.y,B.z,q)}for(let E=0,N=O.length;E<N;++E){const Y=O[E],q=Y.start,j=Y.count;for(let gt=q,yt=q+j;gt<yt;gt+=3)z(t.getX(gt+0)),z(t.getX(gt+1)),z(t.getX(gt+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Fa(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,b=s.count;g<b;g++)s.setXYZ(g,0,0,0);const l=new Q,c=new Q,h=new Q,p=new Q,m=new Q,d=new Q,M=new Q,x=new Q;if(t)for(let g=0,b=t.count;g<b;g+=3){const A=t.getX(g+0),U=t.getX(g+1),y=t.getX(g+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,y),M.subVectors(h,c),x.subVectors(l,c),M.cross(x),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,U),d.fromBufferAttribute(s,y),p.add(M),m.add(M),d.add(M),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(U,m.x,m.y,m.z),s.setXYZ(y,d.x,d.y,d.z)}else for(let g=0,b=i.count;g<b;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),M.subVectors(h,c),x.subVectors(l,c),M.cross(x),s.setXYZ(g+0,M.x,M.y,M.z),s.setXYZ(g+1,M.x,M.y,M.z),s.setXYZ(g+2,M.x,M.y,M.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Gi.fromBufferAttribute(t,i),Gi.normalize(),t.setXYZ(i,Gi.x,Gi.y,Gi.z)}toNonIndexed(){function t(p,m){const d=p.array,M=p.itemSize,x=p.normalized,g=new d.constructor(m.length*M);let b=0,A=0;for(let U=0,y=m.length;U<y;U++){p.isInterleavedBufferAttribute?b=m[U]*p.data.stride+p.offset:b=m[U]*M;for(let v=0;v<M;v++)g[A++]=d[b++]}return new Fa(g,M,x)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new aa,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let M=0,x=d.length;M<x;M++){const g=d[M],b=t(g,s);m.push(b)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],M=[];for(let x=0,g=d.length;x<g;x++){const b=d[x];M.push(b.toJSON(t.data))}M.length>0&&(l[m]=M,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const d in l){const M=l[d];this.setAttribute(d,M.clone(i))}const c=t.morphAttributes;for(const d in c){const M=[],x=c[d];for(let g=0,b=x.length;g<b;g++)M.push(x[g].clone(i));this.morphAttributes[d]=M}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let d=0,M=h.length;d<M;d++){const x=h[d];this.addGroup(x.start,x.count,x.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let wy=0;class mo extends fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=yl(),this.name="",this.type="Material",this.blending=pl,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lp,this.blendDst=cp,this.blendEquation=so,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=_l,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){Te(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Te(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==pl&&(s.blending=this.blending),this.side!==Lr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==lp&&(s.blendSrc=this.blendSrc),this.blendDst!==cp&&(s.blendDst=this.blendDst),this.blendEquation!==so&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==_l&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==j_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jo&&(s.stencilFail=this.stencilFail),this.stencilZFail!==jo&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==jo&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new St().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new qe().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const qs=new Q,jd=new Q,Wu=new Q,wr=new Q,Qd=new Q,qu=new Q,Jd=new Q;class Mx{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qs)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=qs.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(qs.copy(this.origin).addScaledVector(this.direction,i),qs.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){jd.copy(t).add(i).multiplyScalar(.5),Wu.copy(i).sub(t).normalize(),wr.copy(this.origin).sub(jd);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Wu),p=wr.dot(this.direction),m=-wr.dot(Wu),d=wr.lengthSq(),M=Math.abs(1-h*h);let x,g,b,A;if(M>0)if(x=h*m-p,g=h*p-m,A=c*M,x>=0)if(g>=-A)if(g<=A){const U=1/M;x*=U,g*=U,b=x*(x+h*g+2*p)+g*(h*x+g+2*m)+d}else g=c,x=Math.max(0,-(h*g+p)),b=-x*x+g*(g+2*m)+d;else g=-c,x=Math.max(0,-(h*g+p)),b=-x*x+g*(g+2*m)+d;else g<=-A?(x=Math.max(0,-(-h*c+p)),g=x>0?-c:Math.min(Math.max(-c,-m),c),b=-x*x+g*(g+2*m)+d):g<=A?(x=0,g=Math.min(Math.max(-c,-m),c),b=g*(g+2*m)+d):(x=Math.max(0,-(h*c+p)),g=x>0?c:Math.min(Math.max(-c,-m),c),b=-x*x+g*(g+2*m)+d);else g=h>0?-c:c,x=Math.max(0,-(h*g+p)),b=-x*x+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(jd).addScaledVector(Wu,g),b}intersectSphere(t,i){qs.subVectors(t.center,this.origin);const s=qs.dot(this.direction),l=qs.dot(qs)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,p,m;const d=1/this.direction.x,M=1/this.direction.y,x=1/this.direction.z,g=this.origin;return d>=0?(s=(t.min.x-g.x)*d,l=(t.max.x-g.x)*d):(s=(t.max.x-g.x)*d,l=(t.min.x-g.x)*d),M>=0?(c=(t.min.y-g.y)*M,h=(t.max.y-g.y)*M):(c=(t.max.y-g.y)*M,h=(t.min.y-g.y)*M),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(p=(t.min.z-g.z)*x,m=(t.max.z-g.z)*x):(p=(t.max.z-g.z)*x,m=(t.min.z-g.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,qs)!==null}intersectTriangle(t,i,s,l,c){Qd.subVectors(i,t),qu.subVectors(s,t),Jd.crossVectors(Qd,qu);let h=this.direction.dot(Jd),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;wr.subVectors(this.origin,t);const m=p*this.direction.dot(qu.crossVectors(wr,qu));if(m<0)return null;const d=p*this.direction.dot(Qd.cross(wr));if(d<0||m+d>h)return null;const M=-p*wr.dot(Jd);return M<0?null:this.at(M/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ma extends mo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=tm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dv=new Wn,no=new Mx,Yu=new bl,pv=new Q,Zu=new Q,Ku=new Q,ju=new Q,$d=new Q,Qu=new Q,mv=new Q,Ju=new Q;class ue extends Mi{constructor(t=new aa,i=new Ma){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Qu.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const M=p[m],x=c[m];M!==0&&($d.fromBufferAttribute(x,t),h?Qu.addScaledVector($d,M):Qu.addScaledVector($d.sub(i),M))}i.add(Qu)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Yu.copy(s.boundingSphere),Yu.applyMatrix4(c),no.copy(t.ray).recast(t.near),!(Yu.containsPoint(no.origin)===!1&&(no.intersectSphere(Yu,pv)===null||no.origin.distanceToSquared(pv)>(t.far-t.near)**2))&&(dv.copy(c).invert(),no.copy(t.ray).applyMatrix4(dv),!(s.boundingBox!==null&&no.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,no)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,M=c.attributes.uv1,x=c.attributes.normal,g=c.groups,b=c.drawRange;if(p!==null)if(Array.isArray(h))for(let A=0,U=g.length;A<U;A++){const y=g[A],v=h[y.materialIndex],O=Math.max(y.start,b.start),B=Math.min(p.count,Math.min(y.start+y.count,b.start+b.count));for(let D=O,F=B;D<F;D+=3){const L=p.getX(D),z=p.getX(D+1),E=p.getX(D+2);l=$u(this,v,t,s,d,M,x,L,z,E),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),U=Math.min(p.count,b.start+b.count);for(let y=A,v=U;y<v;y+=3){const O=p.getX(y),B=p.getX(y+1),D=p.getX(y+2);l=$u(this,h,t,s,d,M,x,O,B,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,U=g.length;A<U;A++){const y=g[A],v=h[y.materialIndex],O=Math.max(y.start,b.start),B=Math.min(m.count,Math.min(y.start+y.count,b.start+b.count));for(let D=O,F=B;D<F;D+=3){const L=D,z=D+1,E=D+2;l=$u(this,v,t,s,d,M,x,L,z,E),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),U=Math.min(m.count,b.start+b.count);for(let y=A,v=U;y<v;y+=3){const O=y,B=y+1,D=y+2;l=$u(this,h,t,s,d,M,x,O,B,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Ry(r,t,i,s,l,c,h,p){let m;if(t.side===Hi?m=s.intersectTriangle(h,c,l,!0,p):m=s.intersectTriangle(l,c,h,t.side===Lr,p),m===null)return null;Ju.copy(p),Ju.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo(Ju);return d<i.near||d>i.far?null:{distance:d,point:Ju.clone(),object:r}}function $u(r,t,i,s,l,c,h,p,m,d){r.getVertexPosition(p,Zu),r.getVertexPosition(m,Ku),r.getVertexPosition(d,ju);const M=Ry(r,t,i,s,Zu,Ku,ju,mv);if(M){const x=new Q;ss.getBarycoord(mv,Zu,Ku,ju,x),l&&(M.uv=ss.getInterpolatedAttribute(l,p,m,d,x,new qe)),c&&(M.uv1=ss.getInterpolatedAttribute(c,p,m,d,x,new qe)),h&&(M.normal=ss.getInterpolatedAttribute(h,p,m,d,x,new Q),M.normal.dot(s.direction)>0&&M.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new Q,materialIndex:0};ss.getNormal(Zu,Ku,ju,g.normal),M.face=g,M.barycoord=x}return M}class Sx extends ia{constructor(t=null,i=1,s=1,l,c,h,p,m,d=Qi,M=Qi,x,g){super(null,h,p,m,d,M,l,c,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gv extends Fa{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ol=new Wn,_v=new Wn,tf=[],vv=new po,Cy=new Wn,Mc=new ue,Sc=new bl;class xv extends ue{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new gv(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,Cy)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new po),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,ol),vv.copy(t.boundingBox).applyMatrix4(ol),this.boundingBox.union(vv)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new bl),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,ol),Sc.copy(t.boundingSphere).applyMatrix4(ol),this.boundingSphere.union(Sc)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){return this.instanceColor===null?i.setRGB(1,1,1):i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){return i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,h=t*c+1;for(let p=0;p<s.length;p++)s[p]=l[h+p]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Mc.geometry=this.geometry,Mc.material=this.material,Mc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sc.copy(this.boundingSphere),Sc.applyMatrix4(s),t.ray.intersectsSphere(Sc)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,ol),_v.multiplyMatrices(s,ol),Mc.matrixWorld=_v,Mc.raycast(t,tf);for(let h=0,p=tf.length;h<p;h++){const m=tf[h];m.instanceId=c,m.object=this,i.push(m)}tf.length=0}}setColorAt(t,i){return this.instanceColor===null&&(this.instanceColor=new gv(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,i){return i.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new Sx(new Float32Array(l*this.count),l,this.count,sm,rs));const c=this.morphTexture.source.data.data;let h=0;for(let d=0;d<s.length;d++)h+=s[d];const p=this.geometry.morphTargetsRelative?1:1-h,m=l*t;return c[m]=p,c.set(s,m+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const tp=new Q,Dy=new Q,Uy=new Oe;class ao{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=tp.subVectors(s,i).cross(Dy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(tp),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Uy.getNormalMatrix(t),l=this.coplanarPoint(tp).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const io=new bl,Ny=new qe(.5,.5),ef=new Q;class pm{constructor(t=new ao,i=new ao,s=new ao,l=new ao,c=new ao,h=new ao){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=vs,s=!1){const l=this.planes,c=t.elements,h=c[0],p=c[1],m=c[2],d=c[3],M=c[4],x=c[5],g=c[6],b=c[7],A=c[8],U=c[9],y=c[10],v=c[11],O=c[12],B=c[13],D=c[14],F=c[15];if(l[0].setComponents(d-h,b-M,v-A,F-O).normalize(),l[1].setComponents(d+h,b+M,v+A,F+O).normalize(),l[2].setComponents(d+p,b+x,v+U,F+B).normalize(),l[3].setComponents(d-p,b-x,v-U,F-B).normalize(),s)l[4].setComponents(m,g,y,D).normalize(),l[5].setComponents(d-m,b-g,v-y,F-D).normalize();else if(l[4].setComponents(d-m,b-g,v-y,F-D).normalize(),i===vs)l[5].setComponents(d+m,b+g,v+y,F+D).normalize();else if(i===Lc)l[5].setComponents(m,g,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),io.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(io)}intersectsSprite(t){io.center.set(0,0,0);const i=Ny.distanceTo(t.center);return io.radius=.7071067811865476+i,io.applyMatrix4(t.matrixWorld),this.intersectsSphere(io)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(ef.x=l.normal.x>0?t.max.x:t.min.x,ef.y=l.normal.y>0?t.max.y:t.min.y,ef.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(ef)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zp extends mo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Mv=new Wn,Kp=new Mx,nf=new bl,af=new Q;class Sv extends Mi{constructor(t=new aa,i=new Zp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),nf.copy(s.boundingSphere),nf.applyMatrix4(l),nf.radius+=c,t.ray.intersectsSphere(nf)===!1)return;Mv.copy(l).invert(),Kp.copy(t.ray).applyMatrix4(Mv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=s.index,x=s.attributes.position;if(d!==null){const g=Math.max(0,h.start),b=Math.min(d.count,h.start+h.count);for(let A=g,U=b;A<U;A++){const y=d.getX(A);af.fromBufferAttribute(x,y),yv(af,y,m,l,t,i,this)}}else{const g=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let A=g,U=b;A<U;A++)af.fromBufferAttribute(x,A),yv(af,A,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function yv(r,t,i,s,l,c,h){const p=Kp.distanceSqToPoint(r);if(p<i){const m=new Q;Kp.closestPointToPoint(r,m),m.applyMatrix4(s);const d=l.ray.origin.distanceTo(m);if(d<l.near||d>l.far)return;c.push({distance:d,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class yx extends ia{constructor(t=[],i=co,s,l,c,h,p,m,d,M){super(t,i,s,l,c,h,p,m,d,M),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ly extends ia{constructor(t,i,s,l,c,h,p,m,d){super(t,i,s,l,c,h,p,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ml extends ia{constructor(t,i,s=Ss,l,c,h,p=Qi,m=Qi,d,M=Js,x=1){if(M!==Js&&M!==lo)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:x};super(g,l,c,h,p,m,M,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Oy extends Ml{constructor(t,i=Ss,s=co,l,c,h=Qi,p=Qi,m,d=Js){const M={width:t,height:t,depth:1},x=[M,M,M,M,M,M];super(t,t,i,s,l,c,h,p,m,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class bx extends ia{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class as extends aa{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],M=[],x=[];let g=0,b=0;A("z","y","x",-1,-1,s,i,t,h,c,0),A("z","y","x",1,-1,s,i,-t,h,c,1),A("x","z","y",1,1,t,s,i,l,h,2),A("x","z","y",1,-1,t,s,-i,l,h,3),A("x","y","z",1,-1,t,i,s,l,c,4),A("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ci(d,3)),this.setAttribute("normal",new ci(M,3)),this.setAttribute("uv",new ci(x,2));function A(U,y,v,O,B,D,F,L,z,E,N){const Y=D/z,q=F/E,j=D/2,gt=F/2,yt=L/2,it=z+1,H=E+1;let X=0,lt=0;const Et=new Q;for(let Ot=0;Ot<H;Ot++){const I=Ot*q-gt;for(let $=0;$<it;$++){const Lt=$*Y-j;Et[U]=Lt*O,Et[y]=I*B,Et[v]=yt,d.push(Et.x,Et.y,Et.z),Et[U]=0,Et[y]=0,Et[v]=L>0?1:-1,M.push(Et.x,Et.y,Et.z),x.push($/z),x.push(1-Ot/E),X+=1}}for(let Ot=0;Ot<E;Ot++)for(let I=0;I<z;I++){const $=g+I+it*Ot,Lt=g+I+it*(Ot+1),Gt=g+(I+1)+it*(Ot+1),qt=g+(I+1)+it*Ot;m.push($,Lt,qt),m.push(Lt,Gt,qt),lt+=6}p.addGroup(b,lt,N),b+=lt,g+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ai extends aa{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:p,thetaLength:m};const d=this;l=Math.floor(l),c=Math.floor(c);const M=[],x=[],g=[],b=[];let A=0;const U=[],y=s/2;let v=0;O(),h===!1&&(t>0&&B(!0),i>0&&B(!1)),this.setIndex(M),this.setAttribute("position",new ci(x,3)),this.setAttribute("normal",new ci(g,3)),this.setAttribute("uv",new ci(b,2));function O(){const D=new Q,F=new Q;let L=0;const z=(i-t)/s;for(let E=0;E<=c;E++){const N=[],Y=E/c,q=Y*(i-t)+t;for(let j=0;j<=l;j++){const gt=j/l,yt=gt*m+p,it=Math.sin(yt),H=Math.cos(yt);F.x=q*it,F.y=-Y*s+y,F.z=q*H,x.push(F.x,F.y,F.z),D.set(it,z,H).normalize(),g.push(D.x,D.y,D.z),b.push(gt,1-Y),N.push(A++)}U.push(N)}for(let E=0;E<l;E++)for(let N=0;N<c;N++){const Y=U[N][E],q=U[N+1][E],j=U[N+1][E+1],gt=U[N][E+1];(t>0||N!==0)&&(M.push(Y,q,gt),L+=3),(i>0||N!==c-1)&&(M.push(q,j,gt),L+=3)}d.addGroup(v,L,0),v+=L}function B(D){const F=A,L=new qe,z=new Q;let E=0;const N=D===!0?t:i,Y=D===!0?1:-1;for(let j=1;j<=l;j++)x.push(0,y*Y,0),g.push(0,Y,0),b.push(.5,.5),A++;const q=A;for(let j=0;j<=l;j++){const yt=j/l*m+p,it=Math.cos(yt),H=Math.sin(yt);z.x=N*H,z.y=y*Y,z.z=N*it,x.push(z.x,z.y,z.z),g.push(0,Y,0),L.x=it*.5+.5,L.y=H*.5*Y+.5,b.push(L.x,L.y),A++}for(let j=0;j<l;j++){const gt=F+j,yt=q+j;D===!0?M.push(yt,yt+1,gt):M.push(yt+1,yt,gt),E+=3}d.addGroup(v,E,D===!0?1:2),v+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ai(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gs extends ai{constructor(t=1,i=1,s=32,l=1,c=!1,h=0,p=Math.PI*2){super(0,t,i,s,l,c,h,p),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:p}}static fromJSON(t){return new gs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mm extends aa{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],h=[];p(l),d(s),M(),this.setAttribute("position",new ci(c,3)),this.setAttribute("normal",new ci(c.slice(),3)),this.setAttribute("uv",new ci(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function p(O){const B=new Q,D=new Q,F=new Q;for(let L=0;L<i.length;L+=3)b(i[L+0],B),b(i[L+1],D),b(i[L+2],F),m(B,D,F,O)}function m(O,B,D,F){const L=F+1,z=[];for(let E=0;E<=L;E++){z[E]=[];const N=O.clone().lerp(D,E/L),Y=B.clone().lerp(D,E/L),q=L-E;for(let j=0;j<=q;j++)j===0&&E===L?z[E][j]=N:z[E][j]=N.clone().lerp(Y,j/q)}for(let E=0;E<L;E++)for(let N=0;N<2*(L-E)-1;N++){const Y=Math.floor(N/2);N%2===0?(g(z[E][Y+1]),g(z[E+1][Y]),g(z[E][Y])):(g(z[E][Y+1]),g(z[E+1][Y+1]),g(z[E+1][Y]))}}function d(O){const B=new Q;for(let D=0;D<c.length;D+=3)B.x=c[D+0],B.y=c[D+1],B.z=c[D+2],B.normalize().multiplyScalar(O),c[D+0]=B.x,c[D+1]=B.y,c[D+2]=B.z}function M(){const O=new Q;for(let B=0;B<c.length;B+=3){O.x=c[B+0],O.y=c[B+1],O.z=c[B+2];const D=y(O)/2/Math.PI+.5,F=v(O)/Math.PI+.5;h.push(D,1-F)}A(),x()}function x(){for(let O=0;O<h.length;O+=6){const B=h[O+0],D=h[O+2],F=h[O+4],L=Math.max(B,D,F),z=Math.min(B,D,F);L>.9&&z<.1&&(B<.2&&(h[O+0]+=1),D<.2&&(h[O+2]+=1),F<.2&&(h[O+4]+=1))}}function g(O){c.push(O.x,O.y,O.z)}function b(O,B){const D=O*3;B.x=t[D+0],B.y=t[D+1],B.z=t[D+2]}function A(){const O=new Q,B=new Q,D=new Q,F=new Q,L=new qe,z=new qe,E=new qe;for(let N=0,Y=0;N<c.length;N+=9,Y+=6){O.set(c[N+0],c[N+1],c[N+2]),B.set(c[N+3],c[N+4],c[N+5]),D.set(c[N+6],c[N+7],c[N+8]),L.set(h[Y+0],h[Y+1]),z.set(h[Y+2],h[Y+3]),E.set(h[Y+4],h[Y+5]),F.copy(O).add(B).add(D).divideScalar(3);const q=y(F);U(L,Y+0,O,q),U(z,Y+2,B,q),U(E,Y+4,D,q)}}function U(O,B,D,F){F<0&&O.x===1&&(h[B]=O.x-1),D.x===0&&D.z===0&&(h[B]=F/2/Math.PI+.5)}function y(O){return Math.atan2(O.z,-O.x)}function v(O){return Math.atan2(-O.y,Math.sqrt(O.x*O.x+O.z*O.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mm(t.vertices,t.indices,t.radius,t.detail)}}class Ki extends mm{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=1/s,c=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-l,-s,0,-l,s,0,l,-s,0,l,s,-l,-s,0,-l,s,0,l,-s,0,l,s,0,-s,0,-l,s,0,-l,-s,0,l,s,0,l],h=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(c,h,t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Ki(t.radius,t.detail)}}class Ur extends aa{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,M=m+1,x=t/p,g=i/m,b=[],A=[],U=[],y=[];for(let v=0;v<M;v++){const O=v*g-h;for(let B=0;B<d;B++){const D=B*x-c;A.push(D,-O,0),U.push(0,0,1),y.push(B/p),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let O=0;O<p;O++){const B=O+d*v,D=O+d*(v+1),F=O+1+d*(v+1),L=O+1+d*v;b.push(B,D,L),b.push(D,F,L)}this.setIndex(b),this.setAttribute("position",new ci(A,3)),this.setAttribute("normal",new ci(U,3)),this.setAttribute("uv",new ci(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.width,t.height,t.widthSegments,t.heightSegments)}}class gm extends aa{constructor(t=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const p=[],m=[],d=[],M=[];let x=t;const g=(i-t)/l,b=new Q,A=new qe;for(let U=0;U<=l;U++){for(let y=0;y<=s;y++){const v=c+y/s*h;b.x=x*Math.cos(v),b.y=x*Math.sin(v),m.push(b.x,b.y,b.z),d.push(0,0,1),A.x=(b.x/i+1)/2,A.y=(b.y/i+1)/2,M.push(A.x,A.y)}x+=g}for(let U=0;U<l;U++){const y=U*(s+1);for(let v=0;v<s;v++){const O=v+y,B=O,D=O+s+1,F=O+s+2,L=O+1;p.push(B,D,L),p.push(D,F,L)}}this.setIndex(p),this.setAttribute("position",new ci(m,3)),this.setAttribute("normal",new ci(d,3)),this.setAttribute("uv",new ci(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gm(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Sa extends aa{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+p,Math.PI);let d=0;const M=[],x=new Q,g=new Q,b=[],A=[],U=[],y=[];for(let v=0;v<=s;v++){const O=[],B=v/s,D=h+B*p,F=t*Math.cos(D),L=Math.sqrt(t*t-F*F);let z=0;v===0&&h===0?z=.5/i:v===s&&m===Math.PI&&(z=-.5/i);for(let E=0;E<=i;E++){const N=E/i,Y=l+N*c;x.x=-L*Math.cos(Y),x.y=F,x.z=L*Math.sin(Y),A.push(x.x,x.y,x.z),g.copy(x).normalize(),U.push(g.x,g.y,g.z),y.push(N+z,1-B),O.push(d++)}M.push(O)}for(let v=0;v<s;v++)for(let O=0;O<i;O++){const B=M[v][O+1],D=M[v][O],F=M[v+1][O],L=M[v+1][O+1];(v!==0||h>0)&&b.push(B,D,L),(v!==s-1||m<Math.PI)&&b.push(D,F,L)}this.setIndex(b),this.setAttribute("position",new ci(A,3)),this.setAttribute("normal",new ci(U,3)),this.setAttribute("uv",new ci(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Sl(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(bv(l))l.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(bv(l[0])){const c=[];for(let h=0,p=l.length;h<p;h++)c[h]=l[h].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function fa(r){const t={};for(let i=0;i<r.length;i++){const s=Sl(r[i]);for(const l in s)t[l]=s[l]}return t}function bv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Py(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Ex(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:cn.workingColorSpace}const Iy={clone:Sl,merge:fa};var Fy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ys extends mo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fy,this.fragmentShader=zy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Sl(t.uniforms),this.uniformsGroups=Py(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const l=t.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new St().setHex(l.value);break;case"v2":this.uniforms[s].value=new qe().fromArray(l.value);break;case"v3":this.uniforms[s].value=new Q().fromArray(l.value);break;case"v4":this.uniforms[s].value=new li().fromArray(l.value);break;case"m3":this.uniforms[s].value=new Oe().fromArray(l.value);break;case"m4":this.uniforms[s].value=new Wn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class By extends ys{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gn extends mo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_f,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yc extends mo{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new St(16777215),this.specular=new St(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_f,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=tm,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gy extends mo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hy extends mo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class _m extends Mi{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class Vy extends _m{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mi.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const ep=new Wn,Ev=new Q,Tv=new Q;class Tx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=Ia,this.map=null,this.mapPass=null,this.matrix=new Wn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pm,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new li(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Ev.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ev),Tv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Tv),i.updateMatrixWorld(),ep.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ep,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Lc||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ep)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const sf=new Q,rf=new ho,ps=new Q;class Ax extends Mi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wn,this.projectionMatrix=new Wn,this.projectionMatrixInverse=new Wn,this.coordinateSystem=vs,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(sf,rf,ps),ps.x===1&&ps.y===1&&ps.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sf,rf,ps.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(sf,rf,ps),ps.x===1&&ps.y===1&&ps.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sf,rf,ps.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new Q,Av=new qe,wv=new qe;class Pa extends Ax{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=xl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xl*2*Math.atan(Math.tan(Rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Rr.x,Rr.y).multiplyScalar(-t/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Rr.x,Rr.y).multiplyScalar(-t/Rr.z)}getViewSize(t,i){return this.getViewBounds(t,Av,wv),i.subVectors(wv,Av)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Rc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class ky extends Tx{constructor(){super(new Pa(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=xl*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Xy extends _m{constructor(t,i,s=0,l=Math.PI/3,c=0,h=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mi.DEFAULT_UP),this.updateMatrix(),this.target=new Mi,this.distance=s,this.angle=l,this.penumbra=c,this.decay=h,this.map=null,this.shadow=new ky}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class vm extends Ax{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,M=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=M*this.view.offsetY,m=p-M*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Wy extends Tx{constructor(){super(new vm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rv extends _m{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mi.DEFAULT_UP),this.updateMatrix(),this.target=new Mi,this.shadow=new Wy}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const ll=-90,cl=1;class qy extends Mi{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Pa(ll,cl,t,i);l.layers=this.layers,this.add(l);const c=new Pa(ll,cl,t,i);c.layers=this.layers,this.add(c);const h=new Pa(ll,cl,t,i);h.layers=this.layers,this.add(h);const p=new Pa(ll,cl,t,i);p.layers=this.layers,this.add(p);const m=new Pa(ll,cl,t,i);m.layers=this.layers,this.add(m);const d=new Pa(ll,cl,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(t===vs)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Lc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,M]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const U=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),s.texture.generateMipmaps=U,t.setRenderTarget(s,5,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,M),t.setRenderTarget(x,g,b),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class Yy extends Pa{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Zy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Te("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const bm=class bm{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};bm.prototype.isMatrix2=!0;let Cv=bm;function Dv(r,t,i,s){const l=Ky(s);switch(i){case hx:return r*t;case sm:return r*t/l.components*l.byteLength;case rm:return r*t/l.components*l.byteLength;case uo:return r*t*2/l.components*l.byteLength;case om:return r*t*2/l.components*l.byteLength;case dx:return r*t*3/l.components*l.byteLength;case os:return r*t*4/l.components*l.byteLength;case lm:return r*t*4/l.components*l.byteLength;case uf:case ff:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case hf:case df:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xp:case Sp:return Math.max(r,16)*Math.max(t,8)/4;case vp:case Mp:return Math.max(r,8)*Math.max(t,8)/2;case yp:case bp:case Tp:case Ap:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ep:case mf:case wp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cp:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Dp:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Up:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Np:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Lp:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Op:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Pp:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ip:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Fp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case zp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Bp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Gp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Hp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Vp:case kp:case Xp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Wp:case qp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case gf:case Yp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ky(r){switch(r){case Ia:case lx:return{byteLength:1,components:1};case Uc:case cx:case Qs:return{byteLength:2,components:1};case im:case am:return{byteLength:2,components:4};case Ss:case nm:case rs:return{byteLength:4,components:1};case ux:case fx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$p}}));typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$p);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wx(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function jy(r){const t=new WeakMap;function i(p,m){const d=p.array,M=p.usage,x=d.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,d,M),p.onUploadCallback();let b;if(d instanceof Float32Array)b=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)b=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?b=r.HALF_FLOAT:b=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)b=r.SHORT;else if(d instanceof Uint32Array)b=r.UNSIGNED_INT;else if(d instanceof Int32Array)b=r.INT;else if(d instanceof Int8Array)b=r.BYTE;else if(d instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:b,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,d){const M=m.array,x=m.updateRanges;if(r.bindBuffer(d,p),x.length===0)r.bufferSubData(d,0,M);else{x.sort((b,A)=>b.start-A.start);let g=0;for(let b=1;b<x.length;b++){const A=x[g],U=x[b];U.start<=A.start+A.count+1?A.count=Math.max(A.count,U.start+U.count-A.start):(++g,x[g]=U)}x.length=g+1;for(let b=0,A=x.length;b<A;b++){const U=x[b];r.bufferSubData(d,U.start*M.BYTES_PER_ELEMENT,M,U.start,U.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const M=t.get(p);(!M||M.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var Qy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$y=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,a1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,r1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,u1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,f1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,v1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,x1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,M1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,S1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,y1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w1="gl_FragColor = linearToOutputTexel( gl_FragColor );",R1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,D1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,U1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,F1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,B1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,k1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,X1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,K1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,j1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,J1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,tb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ib=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ab=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ob=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ub=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,db=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ab=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Db=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ub=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ob=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ib=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,oE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_E=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ME=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:Qy,alphahash_pars_fragment:Jy,alphamap_fragment:$y,alphamap_pars_fragment:t1,alphatest_fragment:e1,alphatest_pars_fragment:n1,aomap_fragment:i1,aomap_pars_fragment:a1,batching_pars_vertex:s1,batching_vertex:r1,begin_vertex:o1,beginnormal_vertex:l1,bsdfs:c1,iridescence_fragment:u1,bumpmap_pars_fragment:f1,clipping_planes_fragment:h1,clipping_planes_pars_fragment:d1,clipping_planes_pars_vertex:p1,clipping_planes_vertex:m1,color_fragment:g1,color_pars_fragment:_1,color_pars_vertex:v1,color_vertex:x1,common:M1,cube_uv_reflection_fragment:S1,defaultnormal_vertex:y1,displacementmap_pars_vertex:b1,displacementmap_vertex:E1,emissivemap_fragment:T1,emissivemap_pars_fragment:A1,colorspace_fragment:w1,colorspace_pars_fragment:R1,envmap_fragment:C1,envmap_common_pars_fragment:D1,envmap_pars_fragment:U1,envmap_pars_vertex:N1,envmap_physical_pars_fragment:k1,envmap_vertex:L1,fog_vertex:O1,fog_pars_vertex:P1,fog_fragment:I1,fog_pars_fragment:F1,gradientmap_pars_fragment:z1,lightmap_pars_fragment:B1,lights_lambert_fragment:G1,lights_lambert_pars_fragment:H1,lights_pars_begin:V1,lights_toon_fragment:X1,lights_toon_pars_fragment:W1,lights_phong_fragment:q1,lights_phong_pars_fragment:Y1,lights_physical_fragment:Z1,lights_physical_pars_fragment:K1,lights_fragment_begin:j1,lights_fragment_maps:Q1,lights_fragment_end:J1,lightprobes_pars_fragment:$1,logdepthbuf_fragment:tb,logdepthbuf_pars_fragment:eb,logdepthbuf_pars_vertex:nb,logdepthbuf_vertex:ib,map_fragment:ab,map_pars_fragment:sb,map_particle_fragment:rb,map_particle_pars_fragment:ob,metalnessmap_fragment:lb,metalnessmap_pars_fragment:cb,morphinstance_vertex:ub,morphcolor_vertex:fb,morphnormal_vertex:hb,morphtarget_pars_vertex:db,morphtarget_vertex:pb,normal_fragment_begin:mb,normal_fragment_maps:gb,normal_pars_fragment:_b,normal_pars_vertex:vb,normal_vertex:xb,normalmap_pars_fragment:Mb,clearcoat_normal_fragment_begin:Sb,clearcoat_normal_fragment_maps:yb,clearcoat_pars_fragment:bb,iridescence_pars_fragment:Eb,opaque_fragment:Tb,packing:Ab,premultiplied_alpha_fragment:wb,project_vertex:Rb,dithering_fragment:Cb,dithering_pars_fragment:Db,roughnessmap_fragment:Ub,roughnessmap_pars_fragment:Nb,shadowmap_pars_fragment:Lb,shadowmap_pars_vertex:Ob,shadowmap_vertex:Pb,shadowmask_pars_fragment:Ib,skinbase_vertex:Fb,skinning_pars_vertex:zb,skinning_vertex:Bb,skinnormal_vertex:Gb,specularmap_fragment:Hb,specularmap_pars_fragment:Vb,tonemapping_fragment:kb,tonemapping_pars_fragment:Xb,transmission_fragment:Wb,transmission_pars_fragment:qb,uv_pars_fragment:Yb,uv_pars_vertex:Zb,uv_vertex:Kb,worldpos_vertex:jb,background_vert:Qb,background_frag:Jb,backgroundCube_vert:$b,backgroundCube_frag:tE,cube_vert:eE,cube_frag:nE,depth_vert:iE,depth_frag:aE,distance_vert:sE,distance_frag:rE,equirect_vert:oE,equirect_frag:lE,linedashed_vert:cE,linedashed_frag:uE,meshbasic_vert:fE,meshbasic_frag:hE,meshlambert_vert:dE,meshlambert_frag:pE,meshmatcap_vert:mE,meshmatcap_frag:gE,meshnormal_vert:_E,meshnormal_frag:vE,meshphong_vert:xE,meshphong_frag:ME,meshphysical_vert:SE,meshphysical_frag:yE,meshtoon_vert:bE,meshtoon_frag:EE,points_vert:TE,points_frag:AE,shadow_vert:wE,shadow_frag:RE,sprite_vert:CE,sprite_frag:DE},Yt={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},_s={basic:{uniforms:fa([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:fa([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new St(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:fa([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:fa([Yt.common,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.roughnessmap,Yt.metalnessmap,Yt.fog,Yt.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:fa([Yt.common,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.gradientmap,Yt.fog,Yt.lights,{emissive:{value:new St(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:fa([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:fa([Yt.points,Yt.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:fa([Yt.common,Yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:fa([Yt.common,Yt.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:fa([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:fa([Yt.sprite,Yt.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:fa([Yt.common,Yt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:fa([Yt.lights,Yt.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};_s.physical={uniforms:fa([_s.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const of={r:0,b:0,g:0},UE=new Wn,Rx=new Oe;Rx.set(-1,0,0,0,1,0,0,0,1);function NE(r,t,i,s,l,c){const h=new St(0);let p=l===!0?0:1,m,d,M=null,x=0,g=null;function b(O){let B=O.isScene===!0?O.background:null;if(B&&B.isTexture){const D=O.backgroundBlurriness>0;B=t.get(B,D)}return B}function A(O){let B=!1;const D=b(O);D===null?y(h,p):D&&D.isColor&&(y(D,1),B=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function U(O,B){const D=b(B);D&&(D.isCubeTexture||D.mapping===yf)?(d===void 0&&(d=new ue(new as(1,1,1),new ys({name:"BackgroundCubeMaterial",uniforms:Sl(_s.backgroundCube.uniforms),vertexShader:_s.backgroundCube.vertexShader,fragmentShader:_s.backgroundCube.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(F,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=D,d.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(UE.makeRotationFromEuler(B.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Rx),d.material.toneMapped=cn.getTransfer(D.colorSpace)!==zn,(M!==D||x!==D.version||g!==r.toneMapping)&&(d.material.needsUpdate=!0,M=D,x=D.version,g=r.toneMapping),d.layers.enableAll(),O.unshift(d,d.geometry,d.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new ue(new Ur(2,2),new ys({name:"BackgroundMaterial",uniforms:Sl(_s.background.uniforms),vertexShader:_s.background.vertexShader,fragmentShader:_s.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.toneMapped=cn.getTransfer(D.colorSpace)!==zn,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(M!==D||x!==D.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,M=D,x=D.version,g=r.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function y(O,B){O.getRGB(of,Ex(r)),i.buffers.color.setClear(of.r,of.g,of.b,B,c)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,B=1){h.set(O),p=B,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,y(h,p)},render:A,addToRenderList:U,dispose:v}}function LE(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function p(q,j,gt,yt,it){let H=!1;const X=x(q,yt,gt,j);c!==X&&(c=X,d(c.object)),H=b(q,yt,gt,it),H&&A(q,yt,gt,it),it!==null&&t.update(it,r.ELEMENT_ARRAY_BUFFER),(H||h)&&(h=!1,D(q,j,gt,yt),it!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function m(){return r.createVertexArray()}function d(q){return r.bindVertexArray(q)}function M(q){return r.deleteVertexArray(q)}function x(q,j,gt,yt){const it=yt.wireframe===!0;let H=s[j.id];H===void 0&&(H={},s[j.id]=H);const X=q.isInstancedMesh===!0?q.id:0;let lt=H[X];lt===void 0&&(lt={},H[X]=lt);let Et=lt[gt.id];Et===void 0&&(Et={},lt[gt.id]=Et);let Ot=Et[it];return Ot===void 0&&(Ot=g(m()),Et[it]=Ot),Ot}function g(q){const j=[],gt=[],yt=[];for(let it=0;it<i;it++)j[it]=0,gt[it]=0,yt[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:gt,attributeDivisors:yt,object:q,attributes:{},index:null}}function b(q,j,gt,yt){const it=c.attributes,H=j.attributes;let X=0;const lt=gt.getAttributes();for(const Et in lt)if(lt[Et].location>=0){const I=it[Et];let $=H[Et];if($===void 0&&(Et==="instanceMatrix"&&q.instanceMatrix&&($=q.instanceMatrix),Et==="instanceColor"&&q.instanceColor&&($=q.instanceColor)),I===void 0||I.attribute!==$||$&&I.data!==$.data)return!0;X++}return c.attributesNum!==X||c.index!==yt}function A(q,j,gt,yt){const it={},H=j.attributes;let X=0;const lt=gt.getAttributes();for(const Et in lt)if(lt[Et].location>=0){let I=H[Et];I===void 0&&(Et==="instanceMatrix"&&q.instanceMatrix&&(I=q.instanceMatrix),Et==="instanceColor"&&q.instanceColor&&(I=q.instanceColor));const $={};$.attribute=I,I&&I.data&&($.data=I.data),it[Et]=$,X++}c.attributes=it,c.attributesNum=X,c.index=yt}function U(){const q=c.newAttributes;for(let j=0,gt=q.length;j<gt;j++)q[j]=0}function y(q){v(q,0)}function v(q,j){const gt=c.newAttributes,yt=c.enabledAttributes,it=c.attributeDivisors;gt[q]=1,yt[q]===0&&(r.enableVertexAttribArray(q),yt[q]=1),it[q]!==j&&(r.vertexAttribDivisor(q,j),it[q]=j)}function O(){const q=c.newAttributes,j=c.enabledAttributes;for(let gt=0,yt=j.length;gt<yt;gt++)j[gt]!==q[gt]&&(r.disableVertexAttribArray(gt),j[gt]=0)}function B(q,j,gt,yt,it,H,X){X===!0?r.vertexAttribIPointer(q,j,gt,it,H):r.vertexAttribPointer(q,j,gt,yt,it,H)}function D(q,j,gt,yt){U();const it=yt.attributes,H=gt.getAttributes(),X=j.defaultAttributeValues;for(const lt in H){const Et=H[lt];if(Et.location>=0){let Ot=it[lt];if(Ot===void 0&&(lt==="instanceMatrix"&&q.instanceMatrix&&(Ot=q.instanceMatrix),lt==="instanceColor"&&q.instanceColor&&(Ot=q.instanceColor)),Ot!==void 0){const I=Ot.normalized,$=Ot.itemSize,Lt=t.get(Ot);if(Lt===void 0)continue;const Gt=Lt.buffer,qt=Lt.type,ft=Lt.bytesPerElement,Dt=qt===r.INT||qt===r.UNSIGNED_INT||Ot.gpuType===nm;if(Ot.isInterleavedBufferAttribute){const Nt=Ot.data,Jt=Nt.stride,ve=Ot.offset;if(Nt.isInstancedInterleavedBuffer){for(let ae=0;ae<Et.locationSize;ae++)v(Et.location+ae,Nt.meshPerAttribute);q.isInstancedMesh!==!0&&yt._maxInstanceCount===void 0&&(yt._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let ae=0;ae<Et.locationSize;ae++)y(Et.location+ae);r.bindBuffer(r.ARRAY_BUFFER,Gt);for(let ae=0;ae<Et.locationSize;ae++)B(Et.location+ae,$/Et.locationSize,qt,I,Jt*ft,(ve+$/Et.locationSize*ae)*ft,Dt)}else{if(Ot.isInstancedBufferAttribute){for(let Nt=0;Nt<Et.locationSize;Nt++)v(Et.location+Nt,Ot.meshPerAttribute);q.isInstancedMesh!==!0&&yt._maxInstanceCount===void 0&&(yt._maxInstanceCount=Ot.meshPerAttribute*Ot.count)}else for(let Nt=0;Nt<Et.locationSize;Nt++)y(Et.location+Nt);r.bindBuffer(r.ARRAY_BUFFER,Gt);for(let Nt=0;Nt<Et.locationSize;Nt++)B(Et.location+Nt,$/Et.locationSize,qt,I,$*ft,$/Et.locationSize*Nt*ft,Dt)}}else if(X!==void 0){const I=X[lt];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(Et.location,I);break;case 3:r.vertexAttrib3fv(Et.location,I);break;case 4:r.vertexAttrib4fv(Et.location,I);break;default:r.vertexAttrib1fv(Et.location,I)}}}}O()}function F(){N();for(const q in s){const j=s[q];for(const gt in j){const yt=j[gt];for(const it in yt){const H=yt[it];for(const X in H)M(H[X].object),delete H[X];delete yt[it]}}delete s[q]}}function L(q){if(s[q.id]===void 0)return;const j=s[q.id];for(const gt in j){const yt=j[gt];for(const it in yt){const H=yt[it];for(const X in H)M(H[X].object),delete H[X];delete yt[it]}}delete s[q.id]}function z(q){for(const j in s){const gt=s[j];for(const yt in gt){const it=gt[yt];if(it[q.id]===void 0)continue;const H=it[q.id];for(const X in H)M(H[X].object),delete H[X];delete it[q.id]}}}function E(q){for(const j in s){const gt=s[j],yt=q.isInstancedMesh===!0?q.id:0,it=gt[yt];if(it!==void 0){for(const H in it){const X=it[H];for(const lt in X)M(X[lt].object),delete X[lt];delete it[H]}delete gt[yt],Object.keys(gt).length===0&&delete s[j]}}}function N(){Y(),h=!0,c!==l&&(c=l,d(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:N,resetDefaultState:Y,dispose:F,releaseStatesOfGeometry:L,releaseStatesOfObject:E,releaseStatesOfProgram:z,initAttributes:U,enableAttribute:y,disableUnusedAttributes:O}}function OE(r,t,i){let s;function l(m){s=m}function c(m,d){r.drawArrays(s,m,d),i.update(d,s,1)}function h(m,d,M){M!==0&&(r.drawArraysInstanced(s,m,d,M),i.update(d,s,M))}function p(m,d,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,d,0,M);let g=0;for(let b=0;b<M;b++)g+=d[b];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function PE(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==os&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const E=z===Qs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Ia&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==rs&&!E)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const M=m(d);M!==d&&(Te("WebGLRenderer:",d,"not supported, using",M,"instead."),d=M);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),B=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),L=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:b,maxVertexTextures:A,maxTextureSize:U,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:O,maxVaryings:B,maxFragmentUniforms:D,maxSamples:F,samples:L}}function IE(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new ao,p=new Oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const b=x.length!==0||g||s!==0||l;return l=g,s=x.length,b},this.beginShadows=function(){c=!0,M(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=M(x,g,0)},this.setState=function(x,g,b){const A=x.clippingPlanes,U=x.clipIntersection,y=x.clipShadows,v=r.get(x);if(!l||A===null||A.length===0||c&&!y)c?M(null):d();else{const O=c?0:s,B=O*4;let D=v.clippingState||null;m.value=D,D=M(A,g,B,b);for(let F=0;F!==B;++F)D[F]=i[F];v.clippingState=D,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=O}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function M(x,g,b,A){const U=x!==null?x.length:0;let y=null;if(U!==0){if(y=m.value,A!==!0||y===null){const v=b+U*4,O=g.matrixWorldInverse;p.getNormalMatrix(O),(y===null||y.length<v)&&(y=new Float32Array(v));for(let B=0,D=b;B!==U;++B,D+=4)h.copy(x[B]).applyMatrix4(O,p),h.normal.toArray(y,D),y[D+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=U,t.numIntersection=0,y}}const Nr=4,Uv=[.125,.215,.35,.446,.526,.582],ro=20,FE=256,bc=new vm,Nv=new St;let np=null,ip=0,ap=0,sp=!1;const zE=new Q;class Lv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:p=zE}=c;np=this._renderer.getRenderTarget(),ip=this._renderer.getActiveCubeFace(),ap=this._renderer.getActiveMipmapLevel(),sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Iv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(np,ip,ap),this._renderer.xr.enabled=sp,t.scissorTest=!1,ul(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===co||t.mapping===vl?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),np=this._renderer.getRenderTarget(),ip=this._renderer.getActiveCubeFace(),ap=this._renderer.getActiveMipmapLevel(),sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:na,minFilter:na,generateMipmaps:!1,type:Qs,format:os,colorSpace:vf,depthBuffer:!1},l=Ov(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ov(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=BE(c)),this._blurMaterial=HE(c,t,i),this._ggxMaterial=GE(c,t,i)}return l}_compileMaterial(t){const i=new ue(new aa,t);this._renderer.compile(i,bc)}_sceneToCubeUV(t,i,s,l,c){const m=new Pa(90,1,i,s),d=[1,-1,1,1,1,1],M=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,b=x.toneMapping;x.getClearColor(Nv),x.toneMapping=xs,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ue(new as,new Ma({name:"PMREM.Background",side:Hi,depthWrite:!1,depthTest:!1})));const U=this._backgroundBox,y=U.material;let v=!1;const O=t.background;O?O.isColor&&(y.color.copy(O),t.background=null,v=!0):(y.color.copy(Nv),v=!0);for(let B=0;B<6;B++){const D=B%3;D===0?(m.up.set(0,d[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+M[B],c.y,c.z)):D===1?(m.up.set(0,0,d[B]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+M[B],c.z)):(m.up.set(0,d[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+M[B]));const F=this._cubeSize;ul(l,D*F,B>2?F:0,F,F),x.setRenderTarget(l),v&&x.render(U,m),x.render(t,m)}x.toneMapping=b,x.autoClear=g,t.background=O}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===co||t.mapping===vl;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Iv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;ul(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,bc)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),M=i/(this._lodMeshes.length-1),x=Math.sqrt(d*d-M*M),g=0+d*1.25,b=x*g,{_lodMax:A}=this,U=this._sizeLods[s],y=3*U*(s>A-Nr?s-A+Nr:0),v=4*(this._cubeSize-U);m.envMap.value=t.texture,m.roughness.value=b,m.mipInt.value=A-i,ul(c,y,v,3*U,2*U),l.setRenderTarget(c),l.render(p,bc),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-s,ul(t,y,v,3*U,2*U),l.setRenderTarget(t),l.render(p,bc)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&_n("blur direction must be either latitudinal or longitudinal!");const M=3,x=this._lodMeshes[l];x.material=d;const g=d.uniforms,b=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*ro-1),U=c/A,y=isFinite(c)?1+Math.floor(M*U):ro;y>ro&&Te(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ro}`);const v=[];let O=0;for(let z=0;z<ro;++z){const E=z/U,N=Math.exp(-E*E/2);v.push(N),z===0?O+=N:z<y&&(O+=2*N)}for(let z=0;z<v.length;z++)v[z]=v[z]/O;g.envMap.value=t.texture,g.samples.value=y,g.weights.value=v,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:B}=this;g.dTheta.value=A,g.mipInt.value=B-s;const D=this._sizeLods[l],F=3*D*(l>B-Nr?l-B+Nr:0),L=4*(this._cubeSize-D);ul(i,F,L,3*D,2*D),m.setRenderTarget(i),m.render(x,bc)}}function BE(r){const t=[],i=[],s=[];let l=r;const c=r-Nr+1+Uv.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);t.push(p);let m=1/p;h>r-Nr?m=Uv[h-r+Nr-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),M=-d,x=1+d,g=[M,M,x,M,x,x,M,M,x,x,M,x],b=6,A=6,U=3,y=2,v=1,O=new Float32Array(U*A*b),B=new Float32Array(y*A*b),D=new Float32Array(v*A*b);for(let L=0;L<b;L++){const z=L%3*2/3-1,E=L>2?0:-1,N=[z,E,0,z+2/3,E,0,z+2/3,E+1,0,z,E,0,z+2/3,E+1,0,z,E+1,0];O.set(N,U*A*L),B.set(g,y*A*L);const Y=[L,L,L,L,L,L];D.set(Y,v*A*L)}const F=new aa;F.setAttribute("position",new Fa(O,U)),F.setAttribute("uv",new Fa(B,y)),F.setAttribute("faceIndex",new Fa(D,v)),s.push(new ue(F,null)),l>Nr&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Ov(r,t,i){const s=new Ms(r,t,i);return s.texture.mapping=yf,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ul(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function GE(r,t,i){return new ys({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:FE,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ks,depthTest:!1,depthWrite:!1})}function HE(r,t,i){const s=new Float32Array(ro),l=new Q(0,1,0);return new ys({name:"SphericalGaussianBlur",defines:{n:ro,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ks,depthTest:!1,depthWrite:!1})}function Pv(){return new ys({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ks,depthTest:!1,depthWrite:!1})}function Iv(){return new ys({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ks,depthTest:!1,depthWrite:!1})}function bf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Cx extends Ms{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new yx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new as(5,5,5),c=new ys({name:"CubemapFromEquirect",uniforms:Sl(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Hi,blending:Ks});c.uniforms.tEquirect.value=i;const h=new ue(l,c),p=i.minFilter;return i.minFilter===oo&&(i.minFilter=na),new qy(1,10,this).update(t,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function VE(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,b=!1){return g==null?null:b?h(g):c(g)}function c(g){if(g&&g.isTexture){const b=g.mapping;if(b===Dd||b===Ud)if(t.has(g)){const A=t.get(g).texture;return p(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const U=new Cx(A.height);return U.fromEquirectangularTexture(r,g),t.set(g,U),g.addEventListener("dispose",d),p(U.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const b=g.mapping,A=b===Dd||b===Ud,U=b===co||b===vl;if(A||U){let y=i.get(g);const v=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return s===null&&(s=new Lv(r)),y=A?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const O=g.image;return A&&O&&O.height>0||U&&O&&m(O)?(s===null&&(s=new Lv(r)),y=A?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",M),y.texture):null}}}return g}function p(g,b){return b===Dd?g.mapping=co:b===Ud&&(g.mapping=vl),g}function m(g){let b=0;const A=6;for(let U=0;U<A;U++)g[U]!==void 0&&b++;return b===A}function d(g){const b=g.target;b.removeEventListener("dispose",d);const A=t.get(b);A!==void 0&&(t.delete(b),A.dispose())}function M(g){const b=g.target;b.removeEventListener("dispose",M);const A=i.get(b);A!==void 0&&(i.delete(b),A.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function kE(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ml("WebGLRenderer: "+s+" extension not supported."),l}}}function XE(r,t,i,s){const l={},c=new WeakMap;function h(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const A in g.attributes)t.remove(g.attributes[A]);g.removeEventListener("dispose",h),delete l[g.id];const b=c.get(g);b&&(t.remove(b),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const b in g)t.update(g[b],r.ARRAY_BUFFER)}function d(x){const g=[],b=x.index,A=x.attributes.position;let U=0;if(A===void 0)return;if(b!==null){const O=b.array;U=b.version;for(let B=0,D=O.length;B<D;B+=3){const F=O[B+0],L=O[B+1],z=O[B+2];g.push(F,L,L,z,z,F)}}else{const O=A.array;U=A.version;for(let B=0,D=O.length/3-1;B<D;B+=3){const F=B+0,L=B+1,z=B+2;g.push(F,L,L,z,z,F)}}const y=new(A.count>=65535?xx:vx)(g,1);y.version=U;const v=c.get(x);v&&t.remove(v),c.set(x,y)}function M(x){const g=c.get(x);if(g){const b=x.index;b!==null&&g.version<b.version&&d(x)}else d(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:M}}function WE(r,t,i){let s;function l(x){s=x}let c,h;function p(x){c=x.type,h=x.bytesPerElement}function m(x,g){r.drawElements(s,g,c,x*h),i.update(g,s,1)}function d(x,g,b){b!==0&&(r.drawElementsInstanced(s,g,c,x*h,b),i.update(g,s,b))}function M(x,g,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,x,0,b);let U=0;for(let y=0;y<b;y++)U+=g[y];i.update(U,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=M}function qE(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,p){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:_n("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function YE(r,t,i){const s=new WeakMap,l=new li;function c(h,p,m){const d=h.morphTargetInfluences,M=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=M!==void 0?M.length:0;let g=s.get(p);if(g===void 0||g.count!==x){let Y=function(){E.dispose(),s.delete(p),p.removeEventListener("dispose",Y)};var b=Y;g!==void 0&&g.texture.dispose();const A=p.morphAttributes.position!==void 0,U=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],O=p.morphAttributes.normal||[],B=p.morphAttributes.color||[];let D=0;A===!0&&(D=1),U===!0&&(D=2),y===!0&&(D=3);let F=p.attributes.position.count*D,L=1;F>t.maxTextureSize&&(L=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const z=new Float32Array(F*L*4*x),E=new mx(z,F,L,x);E.type=rs,E.needsUpdate=!0;const N=D*4;for(let q=0;q<x;q++){const j=v[q],gt=O[q],yt=B[q],it=F*L*4*q;for(let H=0;H<j.count;H++){const X=H*N;A===!0&&(l.fromBufferAttribute(j,H),z[it+X+0]=l.x,z[it+X+1]=l.y,z[it+X+2]=l.z,z[it+X+3]=0),U===!0&&(l.fromBufferAttribute(gt,H),z[it+X+4]=l.x,z[it+X+5]=l.y,z[it+X+6]=l.z,z[it+X+7]=0),y===!0&&(l.fromBufferAttribute(yt,H),z[it+X+8]=l.x,z[it+X+9]=l.y,z[it+X+10]=l.z,z[it+X+11]=yt.itemSize===4?l.w:1)}}g={count:x,texture:E,size:new qe(F,L)},s.set(p,g),p.addEventListener("dispose",Y)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let A=0;for(let y=0;y<d.length;y++)A+=d[y];const U=p.morphTargetsRelative?1:1-A;m.getUniforms().setValue(r,"morphTargetBaseInfluence",U),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function ZE(r,t,i,s,l){let c=new WeakMap;function h(d){const M=l.render.frame,x=d.geometry,g=t.get(d,x);if(c.get(g)!==M&&(t.update(g),c.set(g,M)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==M&&(i.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,M))),d.isSkinnedMesh){const b=d.skeleton;c.get(b)!==M&&(b.update(),c.set(b,M))}return g}function p(){c=new WeakMap}function m(d){const M=d.target;M.removeEventListener("dispose",m),s.releaseStatesOfObject(M),i.remove(M.instanceMatrix),M.instanceColor!==null&&i.remove(M.instanceColor)}return{update:h,dispose:p}}const KE={[ex]:"LINEAR_TONE_MAPPING",[nx]:"REINHARD_TONE_MAPPING",[ix]:"CINEON_TONE_MAPPING",[em]:"ACES_FILMIC_TONE_MAPPING",[sx]:"AGX_TONE_MAPPING",[rx]:"NEUTRAL_TONE_MAPPING",[ax]:"CUSTOM_TONE_MAPPING"};function jE(r,t,i,s,l,c){const h=new Ms(t,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new Ml(t,i):void 0}),p=new Ms(t,i,{type:Qs,depthBuffer:!1,stencilBuffer:!1}),m=new aa;m.setAttribute("position",new ci([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new ci([0,2,0,0,2,0],2));const d=new By({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),M=new ue(m,d),x=new vm(-1,1,1,-1,0,1);let g=null,b=null,A=!1,U,y=null,v=[],O=!1;this.setSize=function(B,D){h.setSize(B,D),p.setSize(B,D);for(let F=0;F<v.length;F++){const L=v[F];L.setSize&&L.setSize(B,D)}},this.setEffects=function(B){v=B,O=v.length>0&&v[0].isRenderPass===!0;const D=h.width,F=h.height;for(let L=0;L<v.length;L++){const z=v[L];z.setSize&&z.setSize(D,F)}},this.begin=function(B,D){if(A||B.toneMapping===xs&&v.length===0)return!1;if(y=D,D!==null){const F=D.width,L=D.height;(h.width!==F||h.height!==L)&&this.setSize(F,L)}return O===!1&&B.setRenderTarget(h),U=B.toneMapping,B.toneMapping=xs,!0},this.hasRenderPass=function(){return O},this.end=function(B,D){B.toneMapping=U,A=!0;let F=h,L=p;for(let z=0;z<v.length;z++){const E=v[z];if(E.enabled!==!1&&(E.render(B,L,F,D),E.needsSwap!==!1)){const N=F;F=L,L=N}}if(g!==B.outputColorSpace||b!==B.toneMapping){g=B.outputColorSpace,b=B.toneMapping,d.defines={},cn.getTransfer(g)===zn&&(d.defines.SRGB_TRANSFER="");const z=KE[b];z&&(d.defines[z]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=F.texture,B.setRenderTarget(y),B.render(M,x),y=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){h.depthTexture&&h.depthTexture.dispose(),h.dispose(),p.dispose(),m.dispose(),d.dispose()}}const Dx=new ia,jp=new Ml(1,1),Ux=new mx,Nx=new my,Lx=new yx,Fv=[],zv=[],Bv=new Float32Array(16),Gv=new Float32Array(9),Hv=new Float32Array(4);function El(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Fv[l];if(c===void 0&&(c=new Float32Array(l),Fv[l]=c),t!==0){s.toArray(c,0);for(let h=1,p=0;h!==t;++h)p+=i,r[h].toArray(c,p)}return c}function Li(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Oi(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Ef(r,t){let i=zv[t];i===void 0&&(i=new Int32Array(t),zv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function QE(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function JE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Li(i,t))return;r.uniform2fv(this.addr,t),Oi(i,t)}}function $E(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Li(i,t))return;r.uniform3fv(this.addr,t),Oi(i,t)}}function tT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Li(i,t))return;r.uniform4fv(this.addr,t),Oi(i,t)}}function eT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Li(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Oi(i,t)}else{if(Li(i,s))return;Hv.set(s),r.uniformMatrix2fv(this.addr,!1,Hv),Oi(i,s)}}function nT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Li(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Oi(i,t)}else{if(Li(i,s))return;Gv.set(s),r.uniformMatrix3fv(this.addr,!1,Gv),Oi(i,s)}}function iT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Li(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Oi(i,t)}else{if(Li(i,s))return;Bv.set(s),r.uniformMatrix4fv(this.addr,!1,Bv),Oi(i,s)}}function aT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function sT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Li(i,t))return;r.uniform2iv(this.addr,t),Oi(i,t)}}function rT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Li(i,t))return;r.uniform3iv(this.addr,t),Oi(i,t)}}function oT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Li(i,t))return;r.uniform4iv(this.addr,t),Oi(i,t)}}function lT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function cT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Li(i,t))return;r.uniform2uiv(this.addr,t),Oi(i,t)}}function uT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Li(i,t))return;r.uniform3uiv(this.addr,t),Oi(i,t)}}function fT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Li(i,t))return;r.uniform4uiv(this.addr,t),Oi(i,t)}}function hT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(jp.compareFunction=i.isReversedDepthBuffer()?um:cm,c=jp):c=Dx,i.setTexture2D(t||c,l)}function dT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Nx,l)}function pT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Lx,l)}function mT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Ux,l)}function gT(r){switch(r){case 5126:return QE;case 35664:return JE;case 35665:return $E;case 35666:return tT;case 35674:return eT;case 35675:return nT;case 35676:return iT;case 5124:case 35670:return aT;case 35667:case 35671:return sT;case 35668:case 35672:return rT;case 35669:case 35673:return oT;case 5125:return lT;case 36294:return cT;case 36295:return uT;case 36296:return fT;case 35678:case 36198:case 36298:case 36306:case 35682:return hT;case 35679:case 36299:case 36307:return dT;case 35680:case 36300:case 36308:case 36293:return pT;case 36289:case 36303:case 36311:case 36292:return mT}}function _T(r,t){r.uniform1fv(this.addr,t)}function vT(r,t){const i=El(t,this.size,2);r.uniform2fv(this.addr,i)}function xT(r,t){const i=El(t,this.size,3);r.uniform3fv(this.addr,i)}function MT(r,t){const i=El(t,this.size,4);r.uniform4fv(this.addr,i)}function ST(r,t){const i=El(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function yT(r,t){const i=El(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function bT(r,t){const i=El(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function ET(r,t){r.uniform1iv(this.addr,t)}function TT(r,t){r.uniform2iv(this.addr,t)}function AT(r,t){r.uniform3iv(this.addr,t)}function wT(r,t){r.uniform4iv(this.addr,t)}function RT(r,t){r.uniform1uiv(this.addr,t)}function CT(r,t){r.uniform2uiv(this.addr,t)}function DT(r,t){r.uniform3uiv(this.addr,t)}function UT(r,t){r.uniform4uiv(this.addr,t)}function NT(r,t,i){const s=this.cache,l=t.length,c=Ef(i,l);Li(s,c)||(r.uniform1iv(this.addr,c),Oi(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=jp:h=Dx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||h,c[p])}function LT(r,t,i){const s=this.cache,l=t.length,c=Ef(i,l);Li(s,c)||(r.uniform1iv(this.addr,c),Oi(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Nx,c[h])}function OT(r,t,i){const s=this.cache,l=t.length,c=Ef(i,l);Li(s,c)||(r.uniform1iv(this.addr,c),Oi(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Lx,c[h])}function PT(r,t,i){const s=this.cache,l=t.length,c=Ef(i,l);Li(s,c)||(r.uniform1iv(this.addr,c),Oi(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Ux,c[h])}function IT(r){switch(r){case 5126:return _T;case 35664:return vT;case 35665:return xT;case 35666:return MT;case 35674:return ST;case 35675:return yT;case 35676:return bT;case 5124:case 35670:return ET;case 35667:case 35671:return TT;case 35668:case 35672:return AT;case 35669:case 35673:return wT;case 5125:return RT;case 36294:return CT;case 36295:return DT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return PT}}class FT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=gT(i.type)}}class zT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=IT(i.type)}}class BT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const rp=/(\w+)(\])?(\[|\.)?/g;function Vv(r,t){r.seq.push(t),r.map[t.id]=t}function GT(r,t,i){const s=r.name,l=s.length;for(rp.lastIndex=0;;){const c=rp.exec(s),h=rp.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){Vv(i,d===void 0?new FT(p,r,t):new zT(p,r,t));break}else{let x=i.map[p];x===void 0&&(x=new BT(p),Vv(i,x)),i=x}}}class pf{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=t.getActiveUniform(i,h),m=t.getUniformLocation(i,p.name);GT(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function kv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const HT=37297;let VT=0;function kT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const p=h+1;s.push(`${p===t?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const Xv=new Oe;function XT(r){cn._getMatrix(Xv,cn.workingColorSpace,r);const t=`mat3( ${Xv.elements.map(i=>i.toFixed(4))} )`;switch(cn.getTransfer(r)){case xf:return[t,"LinearTransferOETF"];case zn:return[t,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Wv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+kT(r.getShaderSource(t),p)}else return c}function WT(r,t){const i=XT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const qT={[ex]:"Linear",[nx]:"Reinhard",[ix]:"Cineon",[em]:"ACESFilmic",[sx]:"AgX",[rx]:"Neutral",[ax]:"Custom"};function YT(r,t){const i=qT[t];return i===void 0?(Te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const lf=new Q;function ZT(){cn.getLuminanceCoefficients(lf);const r=lf.x.toFixed(4),t=lf.y.toFixed(4),i=lf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wc).join(`
`)}function jT(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function QT(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:p}}return i}function wc(r){return r!==""}function qv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const JT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qp(r){return r.replace(JT,tA)}const $T=new Map;function tA(r,t){let i=We[t];if(i===void 0){const s=$T.get(t);if(s!==void 0)i=We[s],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Qp(i)}const eA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zv(r){return r.replace(eA,nA)}function nA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Kv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const iA={[cf]:"SHADOWMAP_TYPE_PCF",[Ac]:"SHADOWMAP_TYPE_VSM"};function aA(r){return iA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sA={[co]:"ENVMAP_TYPE_CUBE",[vl]:"ENVMAP_TYPE_CUBE",[yf]:"ENVMAP_TYPE_CUBE_UV"};function rA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":sA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const oA={[vl]:"ENVMAP_MODE_REFRACTION"};function lA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":oA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cA={[tm]:"ENVMAP_BLENDING_MULTIPLY",[LS]:"ENVMAP_BLENDING_MIX",[OS]:"ENVMAP_BLENDING_ADD"};function uA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":cA[r.combine]||"ENVMAP_BLENDING_NONE"}function fA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function hA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=aA(i),d=rA(i),M=lA(i),x=uA(i),g=fA(i),b=KT(i),A=jT(c),U=l.createProgram();let y,v,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(wc).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(wc).join(`
`),v.length>0&&(v+=`
`)):(y=[Kv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+M:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wc).join(`
`),v=[Kv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+M:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==xs?"#define TONE_MAPPING":"",i.toneMapping!==xs?We.tonemapping_pars_fragment:"",i.toneMapping!==xs?YT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,WT("linearToOutputTexel",i.outputColorSpace),ZT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(wc).join(`
`)),h=Qp(h),h=qv(h,i),h=Yv(h,i),p=Qp(p),p=qv(p,i),p=Yv(p,i),h=Zv(h),p=Zv(p),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===J_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===J_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const B=O+y+h,D=O+v+p,F=kv(l,l.VERTEX_SHADER,B),L=kv(l,l.FRAGMENT_SHADER,D);l.attachShader(U,F),l.attachShader(U,L),i.index0AttributeName!==void 0?l.bindAttribLocation(U,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(U,0,"position"),l.linkProgram(U);function z(q){if(r.debug.checkShaderErrors){const j=l.getProgramInfoLog(U)||"",gt=l.getShaderInfoLog(F)||"",yt=l.getShaderInfoLog(L)||"",it=j.trim(),H=gt.trim(),X=yt.trim();let lt=!0,Et=!0;if(l.getProgramParameter(U,l.LINK_STATUS)===!1)if(lt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,U,F,L);else{const Ot=Wv(l,F,"vertex"),I=Wv(l,L,"fragment");_n("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(U,l.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+it+`
`+Ot+`
`+I)}else it!==""?Te("WebGLProgram: Program Info Log:",it):(H===""||X==="")&&(Et=!1);Et&&(q.diagnostics={runnable:lt,programLog:it,vertexShader:{log:H,prefix:y},fragmentShader:{log:X,prefix:v}})}l.deleteShader(F),l.deleteShader(L),E=new pf(l,U),N=QT(l,U)}let E;this.getUniforms=function(){return E===void 0&&z(this),E};let N;this.getAttributes=function(){return N===void 0&&z(this),N};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(U,HT)),Y},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(U),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=VT++,this.cacheKey=t,this.usedTimes=1,this.program=U,this.vertexShader=F,this.fragmentShader=L,this}let dA=0;class pA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new mA(t),i.set(t,s)),s}}class mA{constructor(t){this.id=dA++,this.code=t,this.usedTimes=0}}function gA(r){return r===uo||r===mf||r===gf}function _A(r,t,i,s,l,c){const h=new gx,p=new pA,m=new Set,d=[],M=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(E){return m.add(E),E===0?"uv":`uv${E}`}function U(E,N,Y,q,j,gt){const yt=q.fog,it=j.geometry,H=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?q.environment:null,X=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,lt=t.get(E.envMap||H,X),Et=lt&&lt.mapping===yf?lt.image.height:null,Ot=b[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&Te("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const I=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,$=I!==void 0?I.length:0;let Lt=0;it.morphAttributes.position!==void 0&&(Lt=1),it.morphAttributes.normal!==void 0&&(Lt=2),it.morphAttributes.color!==void 0&&(Lt=3);let Gt,qt,ft,Dt;if(Ot){const Ht=_s[Ot];Gt=Ht.vertexShader,qt=Ht.fragmentShader}else{Gt=E.vertexShader,qt=E.fragmentShader;const Ht=p.getVertexShaderStage(E),He=p.getFragmentShaderStage(E);p.update(E,Ht,He),ft=Ht.id,Dt=He.id}const Nt=r.getRenderTarget(),Jt=r.state.buffers.depth.getReversed(),ve=j.isInstancedMesh===!0,ae=j.isBatchedMesh===!0,Un=!!E.map,Ue=!!E.matcap,Se=!!lt,Ye=!!E.aoMap,ze=!!E.lightMap,Zn=!!E.bumpMap&&E.wireframe===!1,Kn=!!E.normalMap,Nn=!!E.displacementMap,me=!!E.emissiveMap,ye=!!E.metalnessMap,ei=!!E.roughnessMap,J=E.anisotropy>0,An=E.clearcoat>0,un=E.dispersion>0,P=E.iridescence>0,S=E.sheen>0,et=E.transmission>0,ht=J&&!!E.anisotropyMap,xt=An&&!!E.clearcoatMap,Bt=An&&!!E.clearcoatNormalMap,Xt=An&&!!E.clearcoatRoughnessMap,T=P&&!!E.iridescenceMap,V=P&&!!E.iridescenceThicknessMap,Z=S&&!!E.sheenColorMap,R=S&&!!E.sheenRoughnessMap,pt=!!E.specularMap,nt=!!E.specularColorMap,Mt=!!E.specularIntensityMap,Tt=et&&!!E.transmissionMap,Pt=et&&!!E.thicknessMap,G=!!E.gradientMap,vt=!!E.alphaMap,at=E.alphaTest>0,At=!!E.alphaHash,zt=!!E.extensions;let Rt=xs;E.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(Rt=r.toneMapping);const Wt={shaderID:Ot,shaderType:E.type,shaderName:E.name,vertexShader:Gt,fragmentShader:qt,defines:E.defines,customVertexShaderID:ft,customFragmentShaderID:Dt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:ae,batchingColor:ae&&j._colorsTexture!==null,instancing:ve,instancingColor:ve&&j.instanceColor!==null,instancingMorph:ve&&j.morphTexture!==null,outputColorSpace:Nt===null?r.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:cn.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Un,matcap:Ue,envMap:Se,envMapMode:Se&&lt.mapping,envMapCubeUVHeight:Et,aoMap:Ye,lightMap:ze,bumpMap:Zn,normalMap:Kn,displacementMap:Nn,emissiveMap:me,normalMapObjectSpace:Kn&&E.normalMapType===FS,normalMapTangentSpace:Kn&&E.normalMapType===_f,packedNormalMap:Kn&&E.normalMapType===_f&&gA(E.normalMap.format),metalnessMap:ye,roughnessMap:ei,anisotropy:J,anisotropyMap:ht,clearcoat:An,clearcoatMap:xt,clearcoatNormalMap:Bt,clearcoatRoughnessMap:Xt,dispersion:un,iridescence:P,iridescenceMap:T,iridescenceThicknessMap:V,sheen:S,sheenColorMap:Z,sheenRoughnessMap:R,specularMap:pt,specularColorMap:nt,specularIntensityMap:Mt,transmission:et,transmissionMap:Tt,thicknessMap:Pt,gradientMap:G,opaque:E.transparent===!1&&E.blending===pl&&E.alphaToCoverage===!1,alphaMap:vt,alphaTest:at,alphaHash:At,combine:E.combine,mapUv:Un&&A(E.map.channel),aoMapUv:Ye&&A(E.aoMap.channel),lightMapUv:ze&&A(E.lightMap.channel),bumpMapUv:Zn&&A(E.bumpMap.channel),normalMapUv:Kn&&A(E.normalMap.channel),displacementMapUv:Nn&&A(E.displacementMap.channel),emissiveMapUv:me&&A(E.emissiveMap.channel),metalnessMapUv:ye&&A(E.metalnessMap.channel),roughnessMapUv:ei&&A(E.roughnessMap.channel),anisotropyMapUv:ht&&A(E.anisotropyMap.channel),clearcoatMapUv:xt&&A(E.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&A(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&A(E.clearcoatRoughnessMap.channel),iridescenceMapUv:T&&A(E.iridescenceMap.channel),iridescenceThicknessMapUv:V&&A(E.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&A(E.sheenColorMap.channel),sheenRoughnessMapUv:R&&A(E.sheenRoughnessMap.channel),specularMapUv:pt&&A(E.specularMap.channel),specularColorMapUv:nt&&A(E.specularColorMap.channel),specularIntensityMapUv:Mt&&A(E.specularIntensityMap.channel),transmissionMapUv:Tt&&A(E.transmissionMap.channel),thicknessMapUv:Pt&&A(E.thicknessMap.channel),alphaMapUv:vt&&A(E.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(Kn||J),vertexNormals:!!it.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!it.attributes.uv&&(Un||vt),fog:!!yt,useFog:E.fog===!0,fogExp2:!!yt&&yt.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||it.attributes.normal===void 0&&Kn===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Jt,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:it.attributes.position!==void 0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Lt,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:gt.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Un&&E.map.isVideoTexture===!0&&cn.getTransfer(E.map.colorSpace)===zn,decodeVideoTextureEmissive:me&&E.emissiveMap.isVideoTexture===!0&&cn.getTransfer(E.emissiveMap.colorSpace)===zn,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ja,flipSided:E.side===Hi,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:zt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&E.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Wt.vertexUv1s=m.has(1),Wt.vertexUv2s=m.has(2),Wt.vertexUv3s=m.has(3),m.clear(),Wt}function y(E){const N=[];if(E.shaderID?N.push(E.shaderID):(N.push(E.customVertexShaderID),N.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Y in E.defines)N.push(Y),N.push(E.defines[Y]);return E.isRawShaderMaterial===!1&&(v(N,E),O(N,E),N.push(r.outputColorSpace)),N.push(E.customProgramCacheKey),N.join()}function v(E,N){E.push(N.precision),E.push(N.outputColorSpace),E.push(N.envMapMode),E.push(N.envMapCubeUVHeight),E.push(N.mapUv),E.push(N.alphaMapUv),E.push(N.lightMapUv),E.push(N.aoMapUv),E.push(N.bumpMapUv),E.push(N.normalMapUv),E.push(N.displacementMapUv),E.push(N.emissiveMapUv),E.push(N.metalnessMapUv),E.push(N.roughnessMapUv),E.push(N.anisotropyMapUv),E.push(N.clearcoatMapUv),E.push(N.clearcoatNormalMapUv),E.push(N.clearcoatRoughnessMapUv),E.push(N.iridescenceMapUv),E.push(N.iridescenceThicknessMapUv),E.push(N.sheenColorMapUv),E.push(N.sheenRoughnessMapUv),E.push(N.specularMapUv),E.push(N.specularColorMapUv),E.push(N.specularIntensityMapUv),E.push(N.transmissionMapUv),E.push(N.thicknessMapUv),E.push(N.combine),E.push(N.fogExp2),E.push(N.sizeAttenuation),E.push(N.morphTargetsCount),E.push(N.morphAttributeCount),E.push(N.numDirLights),E.push(N.numPointLights),E.push(N.numSpotLights),E.push(N.numSpotLightMaps),E.push(N.numHemiLights),E.push(N.numRectAreaLights),E.push(N.numDirLightShadows),E.push(N.numPointLightShadows),E.push(N.numSpotLightShadows),E.push(N.numSpotLightShadowsWithMaps),E.push(N.numLightProbes),E.push(N.shadowMapType),E.push(N.toneMapping),E.push(N.numClippingPlanes),E.push(N.numClipIntersection),E.push(N.depthPacking)}function O(E,N){h.disableAll(),N.instancing&&h.enable(0),N.instancingColor&&h.enable(1),N.instancingMorph&&h.enable(2),N.matcap&&h.enable(3),N.envMap&&h.enable(4),N.normalMapObjectSpace&&h.enable(5),N.normalMapTangentSpace&&h.enable(6),N.clearcoat&&h.enable(7),N.iridescence&&h.enable(8),N.alphaTest&&h.enable(9),N.vertexColors&&h.enable(10),N.vertexAlphas&&h.enable(11),N.vertexUv1s&&h.enable(12),N.vertexUv2s&&h.enable(13),N.vertexUv3s&&h.enable(14),N.vertexTangents&&h.enable(15),N.anisotropy&&h.enable(16),N.alphaHash&&h.enable(17),N.batching&&h.enable(18),N.dispersion&&h.enable(19),N.batchingColor&&h.enable(20),N.gradientMap&&h.enable(21),N.packedNormalMap&&h.enable(22),N.vertexNormals&&h.enable(23),E.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),N.numLightProbeGrids>0&&h.enable(22),N.hasPositionAttribute&&h.enable(23),E.push(h.mask)}function B(E){const N=b[E.type];let Y;if(N){const q=_s[N];Y=Iy.clone(q.uniforms)}else Y=E.uniforms;return Y}function D(E,N){let Y=M.get(N);return Y!==void 0?++Y.usedTimes:(Y=new hA(r,N,E,l),d.push(Y),M.set(N,Y)),Y}function F(E){if(--E.usedTimes===0){const N=d.indexOf(E);d[N]=d[d.length-1],d.pop(),M.delete(E.cacheKey),E.destroy()}}function L(E){p.remove(E)}function z(){p.dispose()}return{getParameters:U,getProgramCacheKey:y,getUniforms:B,acquireProgram:D,releaseProgram:F,releaseShaderCache:L,programs:d,dispose:z}}function vA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let p=r.get(h);return p===void 0&&(p={},r.set(h,p)),p}function s(h){r.delete(h)}function l(h,p,m){r.get(h)[p]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function xA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function jv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Qv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g){let b=0;return g.isInstancedMesh&&(b+=2),g.isSkinnedMesh&&(b+=1),b}function p(g,b,A,U,y,v){let O=r[t];return O===void 0?(O={id:g.id,object:g,geometry:b,material:A,materialVariant:h(g),groupOrder:U,renderOrder:g.renderOrder,z:y,group:v},r[t]=O):(O.id=g.id,O.object=g,O.geometry=b,O.material=A,O.materialVariant=h(g),O.groupOrder=U,O.renderOrder=g.renderOrder,O.z=y,O.group=v),t++,O}function m(g,b,A,U,y,v){const O=p(g,b,A,U,y,v);A.transmission>0?s.push(O):A.transparent===!0?l.push(O):i.push(O)}function d(g,b,A,U,y,v){const O=p(g,b,A,U,y,v);A.transmission>0?s.unshift(O):A.transparent===!0?l.unshift(O):i.unshift(O)}function M(g,b,A){i.length>1&&i.sort(g||xA),s.length>1&&s.sort(b||jv),l.length>1&&l.sort(b||jv),A&&(i.reverse(),s.reverse(),l.reverse())}function x(){for(let g=t,b=r.length;g<b;g++){const A=r[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:x,sort:M}}function MA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new Qv,r.set(s,[h])):l>=c.length?(h=new Qv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function SA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new St};break;case"SpotLight":i={position:new Q,direction:new Q,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new St,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new St,groundColor:new St};break;case"RectAreaLight":i={color:new St,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[t.id]=i,i}}}function yA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let bA=0;function EA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function TA(r){const t=new SA,i=yA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new Q);const l=new Q,c=new Wn,h=new Wn;function p(d){let M=0,x=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let b=0,A=0,U=0,y=0,v=0,O=0,B=0,D=0,F=0,L=0,z=0;d.sort(EA);for(let N=0,Y=d.length;N<Y;N++){const q=d[N],j=q.color,gt=q.intensity,yt=q.distance;let it=null;if(q.shadow&&q.shadow.map&&(q.shadow.map.texture.format===uo?it=q.shadow.map.texture:it=q.shadow.map.depthTexture||q.shadow.map.texture),q.isAmbientLight)M+=j.r*gt,x+=j.g*gt,g+=j.b*gt;else if(q.isLightProbe){for(let H=0;H<9;H++)s.probe[H].addScaledVector(q.sh.coefficients[H],gt);z++}else if(q.isDirectionalLight){const H=t.get(q);if(H.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const X=q.shadow,lt=i.get(q);lt.shadowIntensity=X.intensity,lt.shadowBias=X.bias,lt.shadowNormalBias=X.normalBias,lt.shadowRadius=X.radius,lt.shadowMapSize=X.mapSize,s.directionalShadow[b]=lt,s.directionalShadowMap[b]=it,s.directionalShadowMatrix[b]=q.shadow.matrix,O++}s.directional[b]=H,b++}else if(q.isSpotLight){const H=t.get(q);H.position.setFromMatrixPosition(q.matrixWorld),H.color.copy(j).multiplyScalar(gt),H.distance=yt,H.coneCos=Math.cos(q.angle),H.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),H.decay=q.decay,s.spot[U]=H;const X=q.shadow;if(q.map&&(s.spotLightMap[F]=q.map,F++,X.updateMatrices(q),q.castShadow&&L++),s.spotLightMatrix[U]=X.matrix,q.castShadow){const lt=i.get(q);lt.shadowIntensity=X.intensity,lt.shadowBias=X.bias,lt.shadowNormalBias=X.normalBias,lt.shadowRadius=X.radius,lt.shadowMapSize=X.mapSize,s.spotShadow[U]=lt,s.spotShadowMap[U]=it,D++}U++}else if(q.isRectAreaLight){const H=t.get(q);H.color.copy(j).multiplyScalar(gt),H.halfWidth.set(q.width*.5,0,0),H.halfHeight.set(0,q.height*.5,0),s.rectArea[y]=H,y++}else if(q.isPointLight){const H=t.get(q);if(H.color.copy(q.color).multiplyScalar(q.intensity),H.distance=q.distance,H.decay=q.decay,q.castShadow){const X=q.shadow,lt=i.get(q);lt.shadowIntensity=X.intensity,lt.shadowBias=X.bias,lt.shadowNormalBias=X.normalBias,lt.shadowRadius=X.radius,lt.shadowMapSize=X.mapSize,lt.shadowCameraNear=X.camera.near,lt.shadowCameraFar=X.camera.far,s.pointShadow[A]=lt,s.pointShadowMap[A]=it,s.pointShadowMatrix[A]=q.shadow.matrix,B++}s.point[A]=H,A++}else if(q.isHemisphereLight){const H=t.get(q);H.skyColor.copy(q.color).multiplyScalar(gt),H.groundColor.copy(q.groundColor).multiplyScalar(gt),s.hemi[v]=H,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Yt.LTC_FLOAT_1,s.rectAreaLTC2=Yt.LTC_FLOAT_2):(s.rectAreaLTC1=Yt.LTC_HALF_1,s.rectAreaLTC2=Yt.LTC_HALF_2)),s.ambient[0]=M,s.ambient[1]=x,s.ambient[2]=g;const E=s.hash;(E.directionalLength!==b||E.pointLength!==A||E.spotLength!==U||E.rectAreaLength!==y||E.hemiLength!==v||E.numDirectionalShadows!==O||E.numPointShadows!==B||E.numSpotShadows!==D||E.numSpotMaps!==F||E.numLightProbes!==z)&&(s.directional.length=b,s.spot.length=U,s.rectArea.length=y,s.point.length=A,s.hemi.length=v,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=B,s.pointShadowMap.length=B,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=B,s.spotLightMatrix.length=D+F-L,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=z,E.directionalLength=b,E.pointLength=A,E.spotLength=U,E.rectAreaLength=y,E.hemiLength=v,E.numDirectionalShadows=O,E.numPointShadows=B,E.numSpotShadows=D,E.numSpotMaps=F,E.numLightProbes=z,s.version=bA++)}function m(d,M){let x=0,g=0,b=0,A=0,U=0;const y=M.matrixWorldInverse;for(let v=0,O=d.length;v<O;v++){const B=d[v];if(B.isDirectionalLight){const D=s.directional[x];D.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),x++}else if(B.isSpotLight){const D=s.spot[b];D.position.setFromMatrixPosition(B.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),b++}else if(B.isRectAreaLight){const D=s.rectArea[A];D.position.setFromMatrixPosition(B.matrixWorld),D.position.applyMatrix4(y),h.identity(),c.copy(B.matrixWorld),c.premultiply(y),h.extractRotation(c),D.halfWidth.set(B.width*.5,0,0),D.halfHeight.set(0,B.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),A++}else if(B.isPointLight){const D=s.point[g];D.position.setFromMatrixPosition(B.matrixWorld),D.position.applyMatrix4(y),g++}else if(B.isHemisphereLight){const D=s.hemi[U];D.direction.setFromMatrixPosition(B.matrixWorld),D.direction.transformDirection(y),U++}}}return{setup:p,setupView:m,state:s}}function Jv(r){const t=new TA(r),i=[],s=[],l=[];function c(g){x.camera=g,i.length=0,s.length=0,l.length=0}function h(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function d(){t.setup(i)}function M(g){t.setupView(i,g)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:d,setupLightsView:M,pushLight:h,pushShadow:p,pushLightProbeGrid:m}}function AA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let p;return h===void 0?(p=new Jv(r),t.set(l,[p])):c>=h.length?(p=new Jv(r),h.push(p)):p=h[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const wA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,CA=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],DA=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],$v=new Wn,Ec=new Q,op=new Q;function UA(r,t,i){let s=new pm;const l=new qe,c=new qe,h=new li,p=new Gy,m=new Hy,d={},M=i.maxTextureSize,x={[Lr]:Hi,[Hi]:Lr,[ja]:ja},g=new ys({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:wA,fragmentShader:RA}),b=g.clone();b.defines.HORIZONTAL_PASS=1;const A=new aa;A.setAttribute("position",new Fa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new ue(A,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cf;let v=this.type;this.render=function(L,z,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===tx&&(Te("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=cf);const N=r.getRenderTarget(),Y=r.getActiveCubeFace(),q=r.getActiveMipmapLevel(),j=r.state;j.setBlending(Ks),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const gt=v!==this.type;gt&&z.traverse(function(yt){yt.material&&(Array.isArray(yt.material)?yt.material.forEach(it=>it.needsUpdate=!0):yt.material.needsUpdate=!0)});for(let yt=0,it=L.length;yt<it;yt++){const H=L[yt],X=H.shadow;if(X===void 0){Te("WebGLShadowMap:",H,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const lt=X.getFrameExtents();l.multiply(lt),c.copy(X.mapSize),(l.x>M||l.y>M)&&(l.x>M&&(c.x=Math.floor(M/lt.x),l.x=c.x*lt.x,X.mapSize.x=c.x),l.y>M&&(c.y=Math.floor(M/lt.y),l.y=c.y*lt.y,X.mapSize.y=c.y));const Et=r.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Et,X.map===null||gt===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Ac){if(H.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ms(l.x,l.y,{format:uo,type:Qs,minFilter:na,magFilter:na,generateMipmaps:!1}),X.map.texture.name=H.name+".shadowMap",X.map.depthTexture=new Ml(l.x,l.y,rs),X.map.depthTexture.name=H.name+".shadowMapDepth",X.map.depthTexture.format=Js,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Qi,X.map.depthTexture.magFilter=Qi}else H.isPointLight?(X.map=new Cx(l.x),X.map.depthTexture=new Oy(l.x,Ss)):(X.map=new Ms(l.x,l.y),X.map.depthTexture=new Ml(l.x,l.y,Ss)),X.map.depthTexture.name=H.name+".shadowMap",X.map.depthTexture.format=Js,this.type===cf?(X.map.depthTexture.compareFunction=Et?um:cm,X.map.depthTexture.minFilter=na,X.map.depthTexture.magFilter=na):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Qi,X.map.depthTexture.magFilter=Qi);X.camera.updateProjectionMatrix()}const Ot=X.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<Ot;I++){if(X.map.isWebGLCubeRenderTarget)r.setRenderTarget(X.map,I),r.clear();else{I===0&&(r.setRenderTarget(X.map),r.clear());const $=X.getViewport(I);h.set(c.x*$.x,c.y*$.y,c.x*$.z,c.y*$.w),j.viewport(h)}if(H.isPointLight){const $=X.camera,Lt=X.matrix,Gt=H.distance||$.far;Gt!==$.far&&($.far=Gt,$.updateProjectionMatrix()),Ec.setFromMatrixPosition(H.matrixWorld),$.position.copy(Ec),op.copy($.position),op.add(CA[I]),$.up.copy(DA[I]),$.lookAt(op),$.updateMatrixWorld(),Lt.makeTranslation(-Ec.x,-Ec.y,-Ec.z),$v.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),X._frustum.setFromProjectionMatrix($v,$.coordinateSystem,$.reversedDepth)}else X.updateMatrices(H);s=X.getFrustum(),D(z,E,X.camera,H,this.type)}X.isPointLightShadow!==!0&&this.type===Ac&&O(X,E),X.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(N,Y,q)};function O(L,z){const E=t.update(U);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,b.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ms(l.x,l.y,{format:uo,type:Qs})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(z,null,E,g,U,null),b.uniforms.shadow_pass.value=L.mapPass.texture,b.uniforms.resolution.value=L.mapSize,b.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(z,null,E,b,U,null)}function B(L,z,E,N){let Y=null;const q=E.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(q!==void 0)Y=q;else if(Y=E.isPointLight===!0?m:p,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const j=Y.uuid,gt=z.uuid;let yt=d[j];yt===void 0&&(yt={},d[j]=yt);let it=yt[gt];it===void 0&&(it=Y.clone(),yt[gt]=it,z.addEventListener("dispose",F)),Y=it}if(Y.visible=z.visible,Y.wireframe=z.wireframe,N===Ac?Y.side=z.shadowSide!==null?z.shadowSide:z.side:Y.side=z.shadowSide!==null?z.shadowSide:x[z.side],Y.alphaMap=z.alphaMap,Y.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,Y.map=z.map,Y.clipShadows=z.clipShadows,Y.clippingPlanes=z.clippingPlanes,Y.clipIntersection=z.clipIntersection,Y.displacementMap=z.displacementMap,Y.displacementScale=z.displacementScale,Y.displacementBias=z.displacementBias,Y.wireframeLinewidth=z.wireframeLinewidth,Y.linewidth=z.linewidth,E.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const j=r.properties.get(Y);j.light=E}return Y}function D(L,z,E,N,Y){if(L.visible===!1)return;if(L.layers.test(z.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&Y===Ac)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,L.matrixWorld);const gt=t.update(L),yt=L.material;if(Array.isArray(yt)){const it=gt.groups;for(let H=0,X=it.length;H<X;H++){const lt=it[H],Et=yt[lt.materialIndex];if(Et&&Et.visible){const Ot=B(L,Et,N,Y);L.onBeforeShadow(r,L,z,E,gt,Ot,lt),r.renderBufferDirect(E,null,gt,Ot,L,lt),L.onAfterShadow(r,L,z,E,gt,Ot,lt)}}}else if(yt.visible){const it=B(L,yt,N,Y);L.onBeforeShadow(r,L,z,E,gt,it,null),r.renderBufferDirect(E,null,gt,it,L,null),L.onAfterShadow(r,L,z,E,gt,it,null)}}const j=L.children;for(let gt=0,yt=j.length;gt<yt;gt++)D(j[gt],z,E,N,Y)}function F(L){L.target.removeEventListener("dispose",F);for(const E in d){const N=d[E],Y=L.target.uuid;Y in N&&(N[Y].dispose(),delete N[Y])}}}function NA(r,t){function i(){let G=!1;const vt=new li;let at=null;const At=new li(0,0,0,0);return{setMask:function(zt){at!==zt&&!G&&(r.colorMask(zt,zt,zt,zt),at=zt)},setLocked:function(zt){G=zt},setClear:function(zt,Rt,Wt,Ht,He){He===!0&&(zt*=Ht,Rt*=Ht,Wt*=Ht),vt.set(zt,Rt,Wt,Ht),At.equals(vt)===!1&&(r.clearColor(zt,Rt,Wt,Ht),At.copy(vt))},reset:function(){G=!1,at=null,At.set(-1,0,0,0)}}}function s(){let G=!1,vt=!1,at=null,At=null,zt=null;return{setReversed:function(Rt){if(vt!==Rt){const Wt=t.get("EXT_clip_control");Rt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),vt=Rt;const Ht=zt;zt=null,this.setClear(Ht)}},getReversed:function(){return vt},setTest:function(Rt){Rt?Nt(r.DEPTH_TEST):Jt(r.DEPTH_TEST)},setMask:function(Rt){at!==Rt&&!G&&(r.depthMask(Rt),at=Rt)},setFunc:function(Rt){if(vt&&(Rt=YS[Rt]),At!==Rt){switch(Rt){case up:r.depthFunc(r.NEVER);break;case fp:r.depthFunc(r.ALWAYS);break;case hp:r.depthFunc(r.LESS);break;case _l:r.depthFunc(r.LEQUAL);break;case dp:r.depthFunc(r.EQUAL);break;case pp:r.depthFunc(r.GEQUAL);break;case mp:r.depthFunc(r.GREATER);break;case gp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}At=Rt}},setLocked:function(Rt){G=Rt},setClear:function(Rt){zt!==Rt&&(zt=Rt,vt&&(Rt=1-Rt),r.clearDepth(Rt))},reset:function(){G=!1,at=null,At=null,zt=null,vt=!1}}}function l(){let G=!1,vt=null,at=null,At=null,zt=null,Rt=null,Wt=null,Ht=null,He=null;return{setTest:function(Ve){G||(Ve?Nt(r.STENCIL_TEST):Jt(r.STENCIL_TEST))},setMask:function(Ve){vt!==Ve&&!G&&(r.stencilMask(Ve),vt=Ve)},setFunc:function(Ve,ui,kn){(at!==Ve||At!==ui||zt!==kn)&&(r.stencilFunc(Ve,ui,kn),at=Ve,At=ui,zt=kn)},setOp:function(Ve,ui,kn){(Rt!==Ve||Wt!==ui||Ht!==kn)&&(r.stencilOp(Ve,ui,kn),Rt=Ve,Wt=ui,Ht=kn)},setLocked:function(Ve){G=Ve},setClear:function(Ve){He!==Ve&&(r.clearStencil(Ve),He=Ve)},reset:function(){G=!1,vt=null,at=null,At=null,zt=null,Rt=null,Wt=null,Ht=null,He=null}}}const c=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let M={},x={},g={},b=new WeakMap,A=[],U=null,y=!1,v=null,O=null,B=null,D=null,F=null,L=null,z=null,E=new St(0,0,0),N=0,Y=!1,q=null,j=null,gt=null,yt=null,it=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,lt=0;const Et=r.getParameter(r.VERSION);Et.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(Et)[1]),X=lt>=1):Et.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(Et)[1]),X=lt>=2);let Ot=null,I={};const $=r.getParameter(r.SCISSOR_BOX),Lt=r.getParameter(r.VIEWPORT),Gt=new li().fromArray($),qt=new li().fromArray(Lt);function ft(G,vt,at,At){const zt=new Uint8Array(4),Rt=r.createTexture();r.bindTexture(G,Rt),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Wt=0;Wt<at;Wt++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(vt,0,r.RGBA,1,1,At,0,r.RGBA,r.UNSIGNED_BYTE,zt):r.texImage2D(vt+Wt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,zt);return Rt}const Dt={};Dt[r.TEXTURE_2D]=ft(r.TEXTURE_2D,r.TEXTURE_2D,1),Dt[r.TEXTURE_CUBE_MAP]=ft(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Dt[r.TEXTURE_2D_ARRAY]=ft(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Dt[r.TEXTURE_3D]=ft(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),Nt(r.DEPTH_TEST),h.setFunc(_l),Zn(!1),Kn(Y_),Nt(r.CULL_FACE),Ye(Ks);function Nt(G){M[G]!==!0&&(r.enable(G),M[G]=!0)}function Jt(G){M[G]!==!1&&(r.disable(G),M[G]=!1)}function ve(G,vt){return g[G]!==vt?(r.bindFramebuffer(G,vt),g[G]=vt,G===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=vt),G===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=vt),!0):!1}function ae(G,vt){let at=A,At=!1;if(G){at=b.get(vt),at===void 0&&(at=[],b.set(vt,at));const zt=G.textures;if(at.length!==zt.length||at[0]!==r.COLOR_ATTACHMENT0){for(let Rt=0,Wt=zt.length;Rt<Wt;Rt++)at[Rt]=r.COLOR_ATTACHMENT0+Rt;at.length=zt.length,At=!0}}else at[0]!==r.BACK&&(at[0]=r.BACK,At=!0);At&&r.drawBuffers(at)}function Un(G){return U!==G?(r.useProgram(G),U=G,!0):!1}const Ue={[so]:r.FUNC_ADD,[gS]:r.FUNC_SUBTRACT,[_S]:r.FUNC_REVERSE_SUBTRACT};Ue[vS]=r.MIN,Ue[xS]=r.MAX;const Se={[MS]:r.ZERO,[SS]:r.ONE,[yS]:r.SRC_COLOR,[lp]:r.SRC_ALPHA,[RS]:r.SRC_ALPHA_SATURATE,[AS]:r.DST_COLOR,[ES]:r.DST_ALPHA,[bS]:r.ONE_MINUS_SRC_COLOR,[cp]:r.ONE_MINUS_SRC_ALPHA,[wS]:r.ONE_MINUS_DST_COLOR,[TS]:r.ONE_MINUS_DST_ALPHA,[CS]:r.CONSTANT_COLOR,[DS]:r.ONE_MINUS_CONSTANT_COLOR,[US]:r.CONSTANT_ALPHA,[NS]:r.ONE_MINUS_CONSTANT_ALPHA};function Ye(G,vt,at,At,zt,Rt,Wt,Ht,He,Ve){if(G===Ks){y===!0&&(Jt(r.BLEND),y=!1);return}if(y===!1&&(Nt(r.BLEND),y=!0),G!==mS){if(G!==v||Ve!==Y){if((O!==so||F!==so)&&(r.blendEquation(r.FUNC_ADD),O=so,F=so),Ve)switch(G){case pl:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case dl:r.blendFunc(r.ONE,r.ONE);break;case Z_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case K_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:_n("WebGLState: Invalid blending: ",G);break}else switch(G){case pl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case dl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Z_:_n("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case K_:_n("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_n("WebGLState: Invalid blending: ",G);break}B=null,D=null,L=null,z=null,E.set(0,0,0),N=0,v=G,Y=Ve}return}zt=zt||vt,Rt=Rt||at,Wt=Wt||At,(vt!==O||zt!==F)&&(r.blendEquationSeparate(Ue[vt],Ue[zt]),O=vt,F=zt),(at!==B||At!==D||Rt!==L||Wt!==z)&&(r.blendFuncSeparate(Se[at],Se[At],Se[Rt],Se[Wt]),B=at,D=At,L=Rt,z=Wt),(Ht.equals(E)===!1||He!==N)&&(r.blendColor(Ht.r,Ht.g,Ht.b,He),E.copy(Ht),N=He),v=G,Y=!1}function ze(G,vt){G.side===ja?Jt(r.CULL_FACE):Nt(r.CULL_FACE);let at=G.side===Hi;vt&&(at=!at),Zn(at),G.blending===pl&&G.transparent===!1?Ye(Ks):Ye(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),c.setMask(G.colorWrite);const At=G.stencilWrite;p.setTest(At),At&&(p.setMask(G.stencilWriteMask),p.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),p.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),me(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Nt(r.SAMPLE_ALPHA_TO_COVERAGE):Jt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Zn(G){q!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),q=G)}function Kn(G){G!==dS?(Nt(r.CULL_FACE),G!==j&&(G===Y_?r.cullFace(r.BACK):G===pS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Jt(r.CULL_FACE),j=G}function Nn(G){G!==gt&&(X&&r.lineWidth(G),gt=G)}function me(G,vt,at){G?(Nt(r.POLYGON_OFFSET_FILL),(yt!==vt||it!==at)&&(yt=vt,it=at,h.getReversed()&&(vt=-vt),r.polygonOffset(vt,at))):Jt(r.POLYGON_OFFSET_FILL)}function ye(G){G?Nt(r.SCISSOR_TEST):Jt(r.SCISSOR_TEST)}function ei(G){G===void 0&&(G=r.TEXTURE0+H-1),Ot!==G&&(r.activeTexture(G),Ot=G)}function J(G,vt,at){at===void 0&&(Ot===null?at=r.TEXTURE0+H-1:at=Ot);let At=I[at];At===void 0&&(At={type:void 0,texture:void 0},I[at]=At),(At.type!==G||At.texture!==vt)&&(Ot!==at&&(r.activeTexture(at),Ot=at),r.bindTexture(G,vt||Dt[G]),At.type=G,At.texture=vt)}function An(){const G=I[Ot];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function un(){try{r.compressedTexImage2D(...arguments)}catch(G){_n("WebGLState:",G)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(G){_n("WebGLState:",G)}}function S(){try{r.texSubImage2D(...arguments)}catch(G){_n("WebGLState:",G)}}function et(){try{r.texSubImage3D(...arguments)}catch(G){_n("WebGLState:",G)}}function ht(){try{r.compressedTexSubImage2D(...arguments)}catch(G){_n("WebGLState:",G)}}function xt(){try{r.compressedTexSubImage3D(...arguments)}catch(G){_n("WebGLState:",G)}}function Bt(){try{r.texStorage2D(...arguments)}catch(G){_n("WebGLState:",G)}}function Xt(){try{r.texStorage3D(...arguments)}catch(G){_n("WebGLState:",G)}}function T(){try{r.texImage2D(...arguments)}catch(G){_n("WebGLState:",G)}}function V(){try{r.texImage3D(...arguments)}catch(G){_n("WebGLState:",G)}}function Z(G){return x[G]!==void 0?x[G]:r.getParameter(G)}function R(G,vt){x[G]!==vt&&(r.pixelStorei(G,vt),x[G]=vt)}function pt(G){Gt.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),Gt.copy(G))}function nt(G){qt.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),qt.copy(G))}function Mt(G,vt){let at=d.get(vt);at===void 0&&(at=new WeakMap,d.set(vt,at));let At=at.get(G);At===void 0&&(At=r.getUniformBlockIndex(vt,G.name),at.set(G,At))}function Tt(G,vt){const At=d.get(vt).get(G);m.get(vt)!==At&&(r.uniformBlockBinding(vt,At,G.__bindingPointIndex),m.set(vt,At))}function Pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),M={},x={},Ot=null,I={},g={},b=new WeakMap,A=[],U=null,y=!1,v=null,O=null,B=null,D=null,F=null,L=null,z=null,E=new St(0,0,0),N=0,Y=!1,q=null,j=null,gt=null,yt=null,it=null,Gt.set(0,0,r.canvas.width,r.canvas.height),qt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:Nt,disable:Jt,bindFramebuffer:ve,drawBuffers:ae,useProgram:Un,setBlending:Ye,setMaterial:ze,setFlipSided:Zn,setCullFace:Kn,setLineWidth:Nn,setPolygonOffset:me,setScissorTest:ye,activeTexture:ei,bindTexture:J,unbindTexture:An,compressedTexImage2D:un,compressedTexImage3D:P,texImage2D:T,texImage3D:V,pixelStorei:R,getParameter:Z,updateUBOMapping:Mt,uniformBlockBinding:Tt,texStorage2D:Bt,texStorage3D:Xt,texSubImage2D:S,texSubImage3D:et,compressedTexSubImage2D:ht,compressedTexSubImage3D:xt,scissor:pt,viewport:nt,reset:Pt}}function LA(r,t,i,s,l,c,h){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new qe,M=new WeakMap,x=new Set;let g;const b=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(P,S){return A?new OffscreenCanvas(P,S):Mf("canvas")}function y(P,S,et){let ht=1;const xt=un(P);if((xt.width>et||xt.height>et)&&(ht=et/Math.max(xt.width,xt.height)),ht<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Bt=Math.floor(ht*xt.width),Xt=Math.floor(ht*xt.height);g===void 0&&(g=U(Bt,Xt));const T=S?U(Bt,Xt):g;return T.width=Bt,T.height=Xt,T.getContext("2d").drawImage(P,0,0,Bt,Xt),Te("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+Bt+"x"+Xt+")."),T}else return"data"in P&&Te("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),P;return P}function v(P){return P.generateMipmaps}function O(P){r.generateMipmap(P)}function B(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(P,S,et,ht,xt,Bt=!1){if(P!==null){if(r[P]!==void 0)return r[P];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Xt;ht&&(Xt=t.get("EXT_texture_norm16"),Xt||Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let T=S;if(S===r.RED&&(et===r.FLOAT&&(T=r.R32F),et===r.HALF_FLOAT&&(T=r.R16F),et===r.UNSIGNED_BYTE&&(T=r.R8),et===r.UNSIGNED_SHORT&&Xt&&(T=Xt.R16_EXT),et===r.SHORT&&Xt&&(T=Xt.R16_SNORM_EXT)),S===r.RED_INTEGER&&(et===r.UNSIGNED_BYTE&&(T=r.R8UI),et===r.UNSIGNED_SHORT&&(T=r.R16UI),et===r.UNSIGNED_INT&&(T=r.R32UI),et===r.BYTE&&(T=r.R8I),et===r.SHORT&&(T=r.R16I),et===r.INT&&(T=r.R32I)),S===r.RG&&(et===r.FLOAT&&(T=r.RG32F),et===r.HALF_FLOAT&&(T=r.RG16F),et===r.UNSIGNED_BYTE&&(T=r.RG8),et===r.UNSIGNED_SHORT&&Xt&&(T=Xt.RG16_EXT),et===r.SHORT&&Xt&&(T=Xt.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(et===r.UNSIGNED_BYTE&&(T=r.RG8UI),et===r.UNSIGNED_SHORT&&(T=r.RG16UI),et===r.UNSIGNED_INT&&(T=r.RG32UI),et===r.BYTE&&(T=r.RG8I),et===r.SHORT&&(T=r.RG16I),et===r.INT&&(T=r.RG32I)),S===r.RGB_INTEGER&&(et===r.UNSIGNED_BYTE&&(T=r.RGB8UI),et===r.UNSIGNED_SHORT&&(T=r.RGB16UI),et===r.UNSIGNED_INT&&(T=r.RGB32UI),et===r.BYTE&&(T=r.RGB8I),et===r.SHORT&&(T=r.RGB16I),et===r.INT&&(T=r.RGB32I)),S===r.RGBA_INTEGER&&(et===r.UNSIGNED_BYTE&&(T=r.RGBA8UI),et===r.UNSIGNED_SHORT&&(T=r.RGBA16UI),et===r.UNSIGNED_INT&&(T=r.RGBA32UI),et===r.BYTE&&(T=r.RGBA8I),et===r.SHORT&&(T=r.RGBA16I),et===r.INT&&(T=r.RGBA32I)),S===r.RGB&&(et===r.UNSIGNED_SHORT&&Xt&&(T=Xt.RGB16_EXT),et===r.SHORT&&Xt&&(T=Xt.RGB16_SNORM_EXT),et===r.UNSIGNED_INT_5_9_9_9_REV&&(T=r.RGB9_E5),et===r.UNSIGNED_INT_10F_11F_11F_REV&&(T=r.R11F_G11F_B10F)),S===r.RGBA){const V=Bt?xf:cn.getTransfer(xt);et===r.FLOAT&&(T=r.RGBA32F),et===r.HALF_FLOAT&&(T=r.RGBA16F),et===r.UNSIGNED_BYTE&&(T=V===zn?r.SRGB8_ALPHA8:r.RGBA8),et===r.UNSIGNED_SHORT&&Xt&&(T=Xt.RGBA16_EXT),et===r.SHORT&&Xt&&(T=Xt.RGBA16_SNORM_EXT),et===r.UNSIGNED_SHORT_4_4_4_4&&(T=r.RGBA4),et===r.UNSIGNED_SHORT_5_5_5_1&&(T=r.RGB5_A1)}return(T===r.R16F||T===r.R32F||T===r.RG16F||T===r.RG32F||T===r.RGBA16F||T===r.RGBA32F)&&t.get("EXT_color_buffer_float"),T}function F(P,S){let et;return P?S===null||S===Ss||S===Nc?et=r.DEPTH24_STENCIL8:S===rs?et=r.DEPTH32F_STENCIL8:S===Uc&&(et=r.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ss||S===Nc?et=r.DEPTH_COMPONENT24:S===rs?et=r.DEPTH_COMPONENT32F:S===Uc&&(et=r.DEPTH_COMPONENT16),et}function L(P,S){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==Qi&&P.minFilter!==na?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function z(P){const S=P.target;S.removeEventListener("dispose",z),N(S),S.isVideoTexture&&M.delete(S),S.isHTMLTexture&&x.delete(S)}function E(P){const S=P.target;S.removeEventListener("dispose",E),q(S)}function N(P){const S=s.get(P);if(S.__webglInit===void 0)return;const et=P.source,ht=b.get(et);if(ht){const xt=ht[S.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&Y(P),Object.keys(ht).length===0&&b.delete(et)}s.remove(P)}function Y(P){const S=s.get(P);r.deleteTexture(S.__webglTexture);const et=P.source,ht=b.get(et);delete ht[S.__cacheKey],h.memory.textures--}function q(P){const S=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(S.__webglFramebuffer[ht]))for(let xt=0;xt<S.__webglFramebuffer[ht].length;xt++)r.deleteFramebuffer(S.__webglFramebuffer[ht][xt]);else r.deleteFramebuffer(S.__webglFramebuffer[ht]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[ht])}else{if(Array.isArray(S.__webglFramebuffer))for(let ht=0;ht<S.__webglFramebuffer.length;ht++)r.deleteFramebuffer(S.__webglFramebuffer[ht]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ht=0;ht<S.__webglColorRenderbuffer.length;ht++)S.__webglColorRenderbuffer[ht]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[ht]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const et=P.textures;for(let ht=0,xt=et.length;ht<xt;ht++){const Bt=s.get(et[ht]);Bt.__webglTexture&&(r.deleteTexture(Bt.__webglTexture),h.memory.textures--),s.remove(et[ht])}s.remove(P)}let j=0;function gt(){j=0}function yt(){return j}function it(P){j=P}function H(){const P=j;return P>=l.maxTextures&&Te("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),j+=1,P}function X(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function lt(P,S){const et=s.get(P);if(P.isVideoTexture&&J(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&et.__version!==P.version){const ht=P.image;if(ht===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{Jt(et,P,S);return}}else P.isExternalTexture&&(et.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,et.__webglTexture,r.TEXTURE0+S)}function Et(P,S){const et=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&et.__version!==P.version){Jt(et,P,S);return}else P.isExternalTexture&&(et.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,et.__webglTexture,r.TEXTURE0+S)}function Ot(P,S){const et=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&et.__version!==P.version){Jt(et,P,S);return}i.bindTexture(r.TEXTURE_3D,et.__webglTexture,r.TEXTURE0+S)}function I(P,S){const et=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&et.__version!==P.version){ve(et,P,S);return}i.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture,r.TEXTURE0+S)}const $={[Dc]:r.REPEAT,[Zs]:r.CLAMP_TO_EDGE,[_p]:r.MIRRORED_REPEAT},Lt={[Qi]:r.NEAREST,[PS]:r.NEAREST_MIPMAP_NEAREST,[Fu]:r.NEAREST_MIPMAP_LINEAR,[na]:r.LINEAR,[Nd]:r.LINEAR_MIPMAP_NEAREST,[oo]:r.LINEAR_MIPMAP_LINEAR},Gt={[zS]:r.NEVER,[kS]:r.ALWAYS,[BS]:r.LESS,[cm]:r.LEQUAL,[GS]:r.EQUAL,[um]:r.GEQUAL,[HS]:r.GREATER,[VS]:r.NOTEQUAL};function qt(P,S){if(S.type===rs&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===na||S.magFilter===Nd||S.magFilter===Fu||S.magFilter===oo||S.minFilter===na||S.minFilter===Nd||S.minFilter===Fu||S.minFilter===oo)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,$[S.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,$[S.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,$[S.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Lt[S.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Lt[S.minFilter]),S.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Gt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Qi||S.minFilter!==Fu&&S.minFilter!==oo||S.type===rs&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||s.get(S).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,l.getMaxAnisotropy())),s.get(S).__currentAnisotropy=S.anisotropy}}}function ft(P,S){let et=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",z));const ht=S.source;let xt=b.get(ht);xt===void 0&&(xt={},b.set(ht,xt));const Bt=X(S);if(Bt!==P.__cacheKey){xt[Bt]===void 0&&(xt[Bt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,et=!0),xt[Bt].usedTimes++;const Xt=xt[P.__cacheKey];Xt!==void 0&&(xt[P.__cacheKey].usedTimes--,Xt.usedTimes===0&&Y(S)),P.__cacheKey=Bt,P.__webglTexture=xt[Bt].texture}return et}function Dt(P,S,et){return Math.floor(Math.floor(P/et)/S)}function Nt(P,S,et,ht){const Bt=P.updateRanges;if(Bt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,et,ht,S.data);else{Bt.sort((R,pt)=>R.start-pt.start);let Xt=0;for(let R=1;R<Bt.length;R++){const pt=Bt[Xt],nt=Bt[R],Mt=pt.start+pt.count,Tt=Dt(nt.start,S.width,4),Pt=Dt(pt.start,S.width,4);nt.start<=Mt+1&&Tt===Pt&&Dt(nt.start+nt.count-1,S.width,4)===Tt?pt.count=Math.max(pt.count,nt.start+nt.count-pt.start):(++Xt,Bt[Xt]=nt)}Bt.length=Xt+1;const T=i.getParameter(r.UNPACK_ROW_LENGTH),V=i.getParameter(r.UNPACK_SKIP_PIXELS),Z=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let R=0,pt=Bt.length;R<pt;R++){const nt=Bt[R],Mt=Math.floor(nt.start/4),Tt=Math.ceil(nt.count/4),Pt=Mt%S.width,G=Math.floor(Mt/S.width),vt=Tt,at=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,Pt),i.pixelStorei(r.UNPACK_SKIP_ROWS,G),i.texSubImage2D(r.TEXTURE_2D,0,Pt,G,vt,at,et,ht,S.data)}P.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,T),i.pixelStorei(r.UNPACK_SKIP_PIXELS,V),i.pixelStorei(r.UNPACK_SKIP_ROWS,Z)}}function Jt(P,S,et){let ht=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ht=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ht=r.TEXTURE_3D);const xt=ft(P,S),Bt=S.source;i.bindTexture(ht,P.__webglTexture,r.TEXTURE0+et);const Xt=s.get(Bt);if(Bt.version!==Xt.__version||xt===!0){if(i.activeTexture(r.TEXTURE0+et),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const at=cn.getPrimaries(cn.workingColorSpace),At=S.colorSpace===Dr?null:cn.getPrimaries(S.colorSpace),zt=S.colorSpace===Dr||at===At?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt)}i.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let V=y(S.image,!1,l.maxTextureSize);V=An(S,V);const Z=c.convert(S.format,S.colorSpace),R=c.convert(S.type);let pt=D(S.internalFormat,Z,R,S.normalized,S.colorSpace,S.isVideoTexture);qt(ht,S);let nt;const Mt=S.mipmaps,Tt=S.isVideoTexture!==!0,Pt=Xt.__version===void 0||xt===!0,G=Bt.dataReady,vt=L(S,V);if(S.isDepthTexture)pt=F(S.format===lo,S.type),Pt&&(Tt?i.texStorage2D(r.TEXTURE_2D,1,pt,V.width,V.height):i.texImage2D(r.TEXTURE_2D,0,pt,V.width,V.height,0,Z,R,null));else if(S.isDataTexture)if(Mt.length>0){Tt&&Pt&&i.texStorage2D(r.TEXTURE_2D,vt,pt,Mt[0].width,Mt[0].height);for(let at=0,At=Mt.length;at<At;at++)nt=Mt[at],Tt?G&&i.texSubImage2D(r.TEXTURE_2D,at,0,0,nt.width,nt.height,Z,R,nt.data):i.texImage2D(r.TEXTURE_2D,at,pt,nt.width,nt.height,0,Z,R,nt.data);S.generateMipmaps=!1}else Tt?(Pt&&i.texStorage2D(r.TEXTURE_2D,vt,pt,V.width,V.height),G&&Nt(S,V,Z,R)):i.texImage2D(r.TEXTURE_2D,0,pt,V.width,V.height,0,Z,R,V.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Tt&&Pt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,vt,pt,Mt[0].width,Mt[0].height,V.depth);for(let at=0,At=Mt.length;at<At;at++)if(nt=Mt[at],S.format!==os)if(Z!==null)if(Tt){if(G)if(S.layerUpdates.size>0){const zt=Dv(nt.width,nt.height,S.format,S.type);for(const Rt of S.layerUpdates){const Wt=nt.data.subarray(Rt*zt/nt.data.BYTES_PER_ELEMENT,(Rt+1)*zt/nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,at,0,0,Rt,nt.width,nt.height,1,Z,Wt)}S.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,at,0,0,0,nt.width,nt.height,V.depth,Z,nt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,at,pt,nt.width,nt.height,V.depth,0,nt.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Tt?G&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,at,0,0,0,nt.width,nt.height,V.depth,Z,R,nt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,at,pt,nt.width,nt.height,V.depth,0,Z,R,nt.data)}else{Tt&&Pt&&i.texStorage2D(r.TEXTURE_2D,vt,pt,Mt[0].width,Mt[0].height);for(let at=0,At=Mt.length;at<At;at++)nt=Mt[at],S.format!==os?Z!==null?Tt?G&&i.compressedTexSubImage2D(r.TEXTURE_2D,at,0,0,nt.width,nt.height,Z,nt.data):i.compressedTexImage2D(r.TEXTURE_2D,at,pt,nt.width,nt.height,0,nt.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Tt?G&&i.texSubImage2D(r.TEXTURE_2D,at,0,0,nt.width,nt.height,Z,R,nt.data):i.texImage2D(r.TEXTURE_2D,at,pt,nt.width,nt.height,0,Z,R,nt.data)}else if(S.isDataArrayTexture)if(Tt){if(Pt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,vt,pt,V.width,V.height,V.depth),G)if(S.layerUpdates.size>0){const at=Dv(V.width,V.height,S.format,S.type);for(const At of S.layerUpdates){const zt=V.data.subarray(At*at/V.data.BYTES_PER_ELEMENT,(At+1)*at/V.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,At,V.width,V.height,1,Z,R,zt)}S.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,Z,R,V.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,pt,V.width,V.height,V.depth,0,Z,R,V.data);else if(S.isData3DTexture)Tt?(Pt&&i.texStorage3D(r.TEXTURE_3D,vt,pt,V.width,V.height,V.depth),G&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,Z,R,V.data)):i.texImage3D(r.TEXTURE_3D,0,pt,V.width,V.height,V.depth,0,Z,R,V.data);else if(S.isFramebufferTexture){if(Pt)if(Tt)i.texStorage2D(r.TEXTURE_2D,vt,pt,V.width,V.height);else{let at=V.width,At=V.height;for(let zt=0;zt<vt;zt++)i.texImage2D(r.TEXTURE_2D,zt,pt,at,At,0,Z,R,null),at>>=1,At>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){const at=r.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),V.parentNode!==at){at.appendChild(V),x.add(S),at.onpaint=At=>{const zt=At.changedElements;for(const Rt of x)zt.includes(Rt.image)&&(Rt.needsUpdate=!0)},at.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,V);else{const zt=r.RGBA,Rt=r.RGBA,Wt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,zt,Rt,Wt,V)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Mt.length>0){if(Tt&&Pt){const at=un(Mt[0]);i.texStorage2D(r.TEXTURE_2D,vt,pt,at.width,at.height)}for(let at=0,At=Mt.length;at<At;at++)nt=Mt[at],Tt?G&&i.texSubImage2D(r.TEXTURE_2D,at,0,0,Z,R,nt):i.texImage2D(r.TEXTURE_2D,at,pt,Z,R,nt);S.generateMipmaps=!1}else if(Tt){if(Pt){const at=un(V);i.texStorage2D(r.TEXTURE_2D,vt,pt,at.width,at.height)}G&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Z,R,V)}else i.texImage2D(r.TEXTURE_2D,0,pt,Z,R,V);v(S)&&O(ht),Xt.__version=Bt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ve(P,S,et){if(S.image.length!==6)return;const ht=ft(P,S),xt=S.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+et);const Bt=s.get(xt);if(xt.version!==Bt.__version||ht===!0){i.activeTexture(r.TEXTURE0+et);const Xt=cn.getPrimaries(cn.workingColorSpace),T=S.colorSpace===Dr?null:cn.getPrimaries(S.colorSpace),V=S.colorSpace===Dr||Xt===T?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,V);const Z=S.isCompressedTexture||S.image[0].isCompressedTexture,R=S.image[0]&&S.image[0].isDataTexture,pt=[];for(let Rt=0;Rt<6;Rt++)!Z&&!R?pt[Rt]=y(S.image[Rt],!0,l.maxCubemapSize):pt[Rt]=R?S.image[Rt].image:S.image[Rt],pt[Rt]=An(S,pt[Rt]);const nt=pt[0],Mt=c.convert(S.format,S.colorSpace),Tt=c.convert(S.type),Pt=D(S.internalFormat,Mt,Tt,S.normalized,S.colorSpace),G=S.isVideoTexture!==!0,vt=Bt.__version===void 0||ht===!0,at=xt.dataReady;let At=L(S,nt);qt(r.TEXTURE_CUBE_MAP,S);let zt;if(Z){G&&vt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,At,Pt,nt.width,nt.height);for(let Rt=0;Rt<6;Rt++){zt=pt[Rt].mipmaps;for(let Wt=0;Wt<zt.length;Wt++){const Ht=zt[Wt];S.format!==os?Mt!==null?G?at&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Wt,0,0,Ht.width,Ht.height,Mt,Ht.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Wt,Pt,Ht.width,Ht.height,0,Ht.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?at&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Wt,0,0,Ht.width,Ht.height,Mt,Tt,Ht.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Wt,Pt,Ht.width,Ht.height,0,Mt,Tt,Ht.data)}}}else{if(zt=S.mipmaps,G&&vt){zt.length>0&&At++;const Rt=un(pt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,At,Pt,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(R){G?at&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,pt[Rt].width,pt[Rt].height,Mt,Tt,pt[Rt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Pt,pt[Rt].width,pt[Rt].height,0,Mt,Tt,pt[Rt].data);for(let Wt=0;Wt<zt.length;Wt++){const He=zt[Wt].image[Rt].image;G?at&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Wt+1,0,0,He.width,He.height,Mt,Tt,He.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Wt+1,Pt,He.width,He.height,0,Mt,Tt,He.data)}}else{G?at&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Mt,Tt,pt[Rt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Pt,Mt,Tt,pt[Rt]);for(let Wt=0;Wt<zt.length;Wt++){const Ht=zt[Wt];G?at&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Wt+1,0,0,Mt,Tt,Ht.image[Rt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Wt+1,Pt,Mt,Tt,Ht.image[Rt])}}}v(S)&&O(r.TEXTURE_CUBE_MAP),Bt.__version=xt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ae(P,S,et,ht,xt,Bt){const Xt=c.convert(et.format,et.colorSpace),T=c.convert(et.type),V=D(et.internalFormat,Xt,T,et.normalized,et.colorSpace),Z=s.get(S),R=s.get(et);if(R.__renderTarget=S,!Z.__hasExternalTextures){const pt=Math.max(1,S.width>>Bt),nt=Math.max(1,S.height>>Bt);xt===r.TEXTURE_3D||xt===r.TEXTURE_2D_ARRAY?i.texImage3D(xt,Bt,V,pt,nt,S.depth,0,Xt,T,null):i.texImage2D(xt,Bt,V,pt,nt,0,Xt,T,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),ei(S)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,xt,R.__webglTexture,0,ye(S)):(xt===r.TEXTURE_2D||xt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ht,xt,R.__webglTexture,Bt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Un(P,S,et){if(r.bindRenderbuffer(r.RENDERBUFFER,P),S.depthBuffer){const ht=S.depthTexture,xt=ht&&ht.isDepthTexture?ht.type:null,Bt=F(S.stencilBuffer,xt),Xt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ei(S)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ye(S),Bt,S.width,S.height):et?r.renderbufferStorageMultisample(r.RENDERBUFFER,ye(S),Bt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Bt,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xt,r.RENDERBUFFER,P)}else{const ht=S.textures;for(let xt=0;xt<ht.length;xt++){const Bt=ht[xt],Xt=c.convert(Bt.format,Bt.colorSpace),T=c.convert(Bt.type),V=D(Bt.internalFormat,Xt,T,Bt.normalized,Bt.colorSpace);ei(S)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ye(S),V,S.width,S.height):et?r.renderbufferStorageMultisample(r.RENDERBUFFER,ye(S),V,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,V,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ue(P,S,et){const ht=S.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const xt=s.get(S.depthTexture);if(xt.__renderTarget=S,(!xt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ht){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,S.depthTexture.addEventListener("dispose",z)),xt.__webglTexture===void 0){xt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,xt.__webglTexture),qt(r.TEXTURE_CUBE_MAP,S.depthTexture);const Z=c.convert(S.depthTexture.format),R=c.convert(S.depthTexture.type);let pt;S.depthTexture.format===Js?pt=r.DEPTH_COMPONENT24:S.depthTexture.format===lo&&(pt=r.DEPTH24_STENCIL8);for(let nt=0;nt<6;nt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,pt,S.width,S.height,0,Z,R,null)}}else lt(S.depthTexture,0);const Bt=xt.__webglTexture,Xt=ye(S),T=ht?r.TEXTURE_CUBE_MAP_POSITIVE_X+et:r.TEXTURE_2D,V=S.depthTexture.format===lo?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===Js)ei(S)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,V,T,Bt,0,Xt):r.framebufferTexture2D(r.FRAMEBUFFER,V,T,Bt,0);else if(S.depthTexture.format===lo)ei(S)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,V,T,Bt,0,Xt):r.framebufferTexture2D(r.FRAMEBUFFER,V,T,Bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Se(P){const S=s.get(P),et=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const ht=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ht){const xt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ht.removeEventListener("dispose",xt)};ht.addEventListener("dispose",xt),S.__depthDisposeCallback=xt}S.__boundDepthTexture=ht}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(et)for(let ht=0;ht<6;ht++)Ue(S.__webglFramebuffer[ht],P,ht);else{const ht=P.texture.mipmaps;ht&&ht.length>0?Ue(S.__webglFramebuffer[0],P,0):Ue(S.__webglFramebuffer,P,0)}else if(et){S.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[ht]),S.__webglDepthbuffer[ht]===void 0)S.__webglDepthbuffer[ht]=r.createRenderbuffer(),Un(S.__webglDepthbuffer[ht],P,!1);else{const xt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Bt=S.__webglDepthbuffer[ht];r.bindRenderbuffer(r.RENDERBUFFER,Bt),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,Bt)}}else{const ht=P.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Un(S.__webglDepthbuffer,P,!1);else{const xt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Bt=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Bt),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,Bt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ye(P,S,et){const ht=s.get(P);S!==void 0&&ae(ht.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),et!==void 0&&Se(P)}function ze(P){const S=P.texture,et=s.get(P),ht=s.get(S);P.addEventListener("dispose",E);const xt=P.textures,Bt=P.isWebGLCubeRenderTarget===!0,Xt=xt.length>1;if(Xt||(ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture()),ht.__version=S.version,h.memory.textures++),Bt){et.__webglFramebuffer=[];for(let T=0;T<6;T++)if(S.mipmaps&&S.mipmaps.length>0){et.__webglFramebuffer[T]=[];for(let V=0;V<S.mipmaps.length;V++)et.__webglFramebuffer[T][V]=r.createFramebuffer()}else et.__webglFramebuffer[T]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){et.__webglFramebuffer=[];for(let T=0;T<S.mipmaps.length;T++)et.__webglFramebuffer[T]=r.createFramebuffer()}else et.__webglFramebuffer=r.createFramebuffer();if(Xt)for(let T=0,V=xt.length;T<V;T++){const Z=s.get(xt[T]);Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture(),h.memory.textures++)}if(P.samples>0&&ei(P)===!1){et.__webglMultisampledFramebuffer=r.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let T=0;T<xt.length;T++){const V=xt[T];et.__webglColorRenderbuffer[T]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,et.__webglColorRenderbuffer[T]);const Z=c.convert(V.format,V.colorSpace),R=c.convert(V.type),pt=D(V.internalFormat,Z,R,V.normalized,V.colorSpace,P.isXRRenderTarget===!0),nt=ye(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,nt,pt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+T,r.RENDERBUFFER,et.__webglColorRenderbuffer[T])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(et.__webglDepthRenderbuffer=r.createRenderbuffer(),Un(et.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Bt){i.bindTexture(r.TEXTURE_CUBE_MAP,ht.__webglTexture),qt(r.TEXTURE_CUBE_MAP,S);for(let T=0;T<6;T++)if(S.mipmaps&&S.mipmaps.length>0)for(let V=0;V<S.mipmaps.length;V++)ae(et.__webglFramebuffer[T][V],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+T,V);else ae(et.__webglFramebuffer[T],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+T,0);v(S)&&O(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let T=0,V=xt.length;T<V;T++){const Z=xt[T],R=s.get(Z);let pt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(pt,R.__webglTexture),qt(pt,Z),ae(et.__webglFramebuffer,P,Z,r.COLOR_ATTACHMENT0+T,pt,0),v(Z)&&O(pt)}i.unbindTexture()}else{let T=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(T=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(T,ht.__webglTexture),qt(T,S),S.mipmaps&&S.mipmaps.length>0)for(let V=0;V<S.mipmaps.length;V++)ae(et.__webglFramebuffer[V],P,S,r.COLOR_ATTACHMENT0,T,V);else ae(et.__webglFramebuffer,P,S,r.COLOR_ATTACHMENT0,T,0);v(S)&&O(T),i.unbindTexture()}P.depthBuffer&&Se(P)}function Zn(P){const S=P.textures;for(let et=0,ht=S.length;et<ht;et++){const xt=S[et];if(v(xt)){const Bt=B(P),Xt=s.get(xt).__webglTexture;i.bindTexture(Bt,Xt),O(Bt),i.unbindTexture()}}}const Kn=[],Nn=[];function me(P){if(P.samples>0){if(ei(P)===!1){const S=P.textures,et=P.width,ht=P.height;let xt=r.COLOR_BUFFER_BIT;const Bt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xt=s.get(P),T=S.length>1;if(T)for(let Z=0;Z<S.length;Z++)i.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Z,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Z,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const V=P.texture.mipmaps;V&&V.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Z=0;Z<S.length;Z++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(xt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(xt|=r.STENCIL_BUFFER_BIT)),T){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xt.__webglColorRenderbuffer[Z]);const R=s.get(S[Z]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,R,0)}r.blitFramebuffer(0,0,et,ht,0,0,et,ht,xt,r.NEAREST),m===!0&&(Kn.length=0,Nn.length=0,Kn.push(r.COLOR_ATTACHMENT0+Z),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Kn.push(Bt),Nn.push(Bt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Nn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Kn))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),T)for(let Z=0;Z<S.length;Z++){i.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Z,r.RENDERBUFFER,Xt.__webglColorRenderbuffer[Z]);const R=s.get(S[Z]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Z,r.TEXTURE_2D,R,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const S=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function ye(P){return Math.min(l.maxSamples,P.samples)}function ei(P){const S=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function J(P){const S=h.render.frame;M.get(P)!==S&&(M.set(P,S),P.update())}function An(P,S){const et=P.colorSpace,ht=P.format,xt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||et!==vf&&et!==Dr&&(cn.getTransfer(et)===zn?(ht!==os||xt!==Ia)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_n("WebGLTextures: Unsupported texture color space:",et)),S}function un(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=H,this.resetTextureUnits=gt,this.getTextureUnits=yt,this.setTextureUnits=it,this.setTexture2D=lt,this.setTexture2DArray=Et,this.setTexture3D=Ot,this.setTextureCube=I,this.rebindTextures=Ye,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Zn,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ei,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function OA(r,t){function i(s,l=Dr){let c;const h=cn.getTransfer(l);if(s===Ia)return r.UNSIGNED_BYTE;if(s===im)return r.UNSIGNED_SHORT_4_4_4_4;if(s===am)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ux)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===fx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===lx)return r.BYTE;if(s===cx)return r.SHORT;if(s===Uc)return r.UNSIGNED_SHORT;if(s===nm)return r.INT;if(s===Ss)return r.UNSIGNED_INT;if(s===rs)return r.FLOAT;if(s===Qs)return r.HALF_FLOAT;if(s===hx)return r.ALPHA;if(s===dx)return r.RGB;if(s===os)return r.RGBA;if(s===Js)return r.DEPTH_COMPONENT;if(s===lo)return r.DEPTH_STENCIL;if(s===sm)return r.RED;if(s===rm)return r.RED_INTEGER;if(s===uo)return r.RG;if(s===om)return r.RG_INTEGER;if(s===lm)return r.RGBA_INTEGER;if(s===uf||s===ff||s===hf||s===df)if(h===zn)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===uf)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ff)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===hf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===df)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===uf)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ff)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===hf)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===df)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vp||s===xp||s===Mp||s===Sp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===vp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Mp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yp||s===bp||s===Ep||s===Tp||s===Ap||s===mf||s===wp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===yp||s===bp)return h===zn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ep)return h===zn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Tp)return c.COMPRESSED_R11_EAC;if(s===Ap)return c.COMPRESSED_SIGNED_R11_EAC;if(s===mf)return c.COMPRESSED_RG11_EAC;if(s===wp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Rp||s===Cp||s===Dp||s===Up||s===Np||s===Lp||s===Op||s===Pp||s===Ip||s===Fp||s===zp||s===Bp||s===Gp||s===Hp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Rp)return h===zn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cp)return h===zn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Dp)return h===zn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Up)return h===zn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Np)return h===zn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Lp)return h===zn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Op)return h===zn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Pp)return h===zn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ip)return h===zn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fp)return h===zn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===zp)return h===zn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bp)return h===zn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Gp)return h===zn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hp)return h===zn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vp||s===kp||s===Xp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Vp)return h===zn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Wp||s===qp||s===gf||s===Yp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Wp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===qp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===gf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Nc?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const PA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class FA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new bx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ys({vertexShader:PA,fragmentShader:IA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ue(new Ur(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zA extends fo{constructor(t,i){super();const s=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,M=null,x=null,g=null,b=null,A=null;const U=typeof XRWebGLBinding<"u",y=new FA,v={},O=i.getContextAttributes();let B=null,D=null;const F=[],L=[],z=new qe;let E=null;const N=new Pa;N.viewport=new li;const Y=new Pa;Y.viewport=new li;const q=[N,Y],j=new Yy;let gt=null,yt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ft){let Dt=F[ft];return Dt===void 0&&(Dt=new zd,F[ft]=Dt),Dt.getTargetRaySpace()},this.getControllerGrip=function(ft){let Dt=F[ft];return Dt===void 0&&(Dt=new zd,F[ft]=Dt),Dt.getGripSpace()},this.getHand=function(ft){let Dt=F[ft];return Dt===void 0&&(Dt=new zd,F[ft]=Dt),Dt.getHandSpace()};function it(ft){const Dt=L.indexOf(ft.inputSource);if(Dt===-1)return;const Nt=F[Dt];Nt!==void 0&&(Nt.update(ft.inputSource,ft.frame,d||h),Nt.dispatchEvent({type:ft.type,data:ft.inputSource}))}function H(){l.removeEventListener("select",it),l.removeEventListener("selectstart",it),l.removeEventListener("selectend",it),l.removeEventListener("squeeze",it),l.removeEventListener("squeezestart",it),l.removeEventListener("squeezeend",it),l.removeEventListener("end",H),l.removeEventListener("inputsourceschange",X);for(let ft=0;ft<F.length;ft++){const Dt=L[ft];Dt!==null&&(L[ft]=null,F[ft].disconnect(Dt))}gt=null,yt=null,y.reset();for(const ft in v)delete v[ft];t.setRenderTarget(B),b=null,g=null,x=null,l=null,D=null,qt.stop(),s.isPresenting=!1,t.setPixelRatio(E),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ft){c=ft,s.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ft){p=ft,s.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(ft){d=ft},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return x===null&&U&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(ft){if(l=ft,l!==null){if(B=t.getRenderTarget(),l.addEventListener("select",it),l.addEventListener("selectstart",it),l.addEventListener("selectend",it),l.addEventListener("squeeze",it),l.addEventListener("squeezestart",it),l.addEventListener("squeezeend",it),l.addEventListener("end",H),l.addEventListener("inputsourceschange",X),O.xrCompatible!==!0&&await i.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(z),U&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,Jt=null,ve=null;O.depth&&(ve=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Nt=O.stencil?lo:Js,Jt=O.stencil?Nc:Ss);const ae={colorFormat:i.RGBA8,depthFormat:ve,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(ae),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new Ms(g.textureWidth,g.textureHeight,{format:os,type:Ia,depthTexture:new Ml(g.textureWidth,g.textureHeight,Jt,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Nt={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,Nt),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),D=new Ms(b.framebufferWidth,b.framebufferHeight,{format:os,type:Ia,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),qt.setContext(l),qt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X(ft){for(let Dt=0;Dt<ft.removed.length;Dt++){const Nt=ft.removed[Dt],Jt=L.indexOf(Nt);Jt>=0&&(L[Jt]=null,F[Jt].disconnect(Nt))}for(let Dt=0;Dt<ft.added.length;Dt++){const Nt=ft.added[Dt];let Jt=L.indexOf(Nt);if(Jt===-1){for(let ae=0;ae<F.length;ae++)if(ae>=L.length){L.push(Nt),Jt=ae;break}else if(L[ae]===null){L[ae]=Nt,Jt=ae;break}if(Jt===-1)break}const ve=F[Jt];ve&&ve.connect(Nt)}}const lt=new Q,Et=new Q;function Ot(ft,Dt,Nt){lt.setFromMatrixPosition(Dt.matrixWorld),Et.setFromMatrixPosition(Nt.matrixWorld);const Jt=lt.distanceTo(Et),ve=Dt.projectionMatrix.elements,ae=Nt.projectionMatrix.elements,Un=ve[14]/(ve[10]-1),Ue=ve[14]/(ve[10]+1),Se=(ve[9]+1)/ve[5],Ye=(ve[9]-1)/ve[5],ze=(ve[8]-1)/ve[0],Zn=(ae[8]+1)/ae[0],Kn=Un*ze,Nn=Un*Zn,me=Jt/(-ze+Zn),ye=me*-ze;if(Dt.matrixWorld.decompose(ft.position,ft.quaternion,ft.scale),ft.translateX(ye),ft.translateZ(me),ft.matrixWorld.compose(ft.position,ft.quaternion,ft.scale),ft.matrixWorldInverse.copy(ft.matrixWorld).invert(),ve[10]===-1)ft.projectionMatrix.copy(Dt.projectionMatrix),ft.projectionMatrixInverse.copy(Dt.projectionMatrixInverse);else{const ei=Un+me,J=Ue+me,An=Kn-ye,un=Nn+(Jt-ye),P=Se*Ue/J*ei,S=Ye*Ue/J*ei;ft.projectionMatrix.makePerspective(An,un,P,S,ei,J),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert()}}function I(ft,Dt){Dt===null?ft.matrixWorld.copy(ft.matrix):ft.matrixWorld.multiplyMatrices(Dt.matrixWorld,ft.matrix),ft.matrixWorldInverse.copy(ft.matrixWorld).invert()}this.updateCamera=function(ft){if(l===null)return;let Dt=ft.near,Nt=ft.far;y.texture!==null&&(y.depthNear>0&&(Dt=y.depthNear),y.depthFar>0&&(Nt=y.depthFar)),j.near=Y.near=N.near=Dt,j.far=Y.far=N.far=Nt,(gt!==j.near||yt!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),gt=j.near,yt=j.far),j.layers.mask=ft.layers.mask|6,N.layers.mask=j.layers.mask&-5,Y.layers.mask=j.layers.mask&-3;const Jt=ft.parent,ve=j.cameras;I(j,Jt);for(let ae=0;ae<ve.length;ae++)I(ve[ae],Jt);ve.length===2?Ot(j,N,Y):j.projectionMatrix.copy(N.projectionMatrix),$(ft,j,Jt)};function $(ft,Dt,Nt){Nt===null?ft.matrix.copy(Dt.matrixWorld):(ft.matrix.copy(Nt.matrixWorld),ft.matrix.invert(),ft.matrix.multiply(Dt.matrixWorld)),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.updateMatrixWorld(!0),ft.projectionMatrix.copy(Dt.projectionMatrix),ft.projectionMatrixInverse.copy(Dt.projectionMatrixInverse),ft.isPerspectiveCamera&&(ft.fov=xl*2*Math.atan(1/ft.projectionMatrix.elements[5]),ft.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&b===null))return m},this.setFoveation=function(ft){m=ft,g!==null&&(g.fixedFoveation=ft),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=ft)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(ft){return v[ft]};let Lt=null;function Gt(ft,Dt){if(M=Dt.getViewerPose(d||h),A=Dt,M!==null){const Nt=M.views;b!==null&&(t.setRenderTargetFramebuffer(D,b.framebuffer),t.setRenderTarget(D));let Jt=!1;Nt.length!==j.cameras.length&&(j.cameras.length=0,Jt=!0);for(let Ue=0;Ue<Nt.length;Ue++){const Se=Nt[Ue];let Ye=null;if(b!==null)Ye=b.getViewport(Se);else{const Zn=x.getViewSubImage(g,Se);Ye=Zn.viewport,Ue===0&&(t.setRenderTargetTextures(D,Zn.colorTexture,Zn.depthStencilTexture),t.setRenderTarget(D))}let ze=q[Ue];ze===void 0&&(ze=new Pa,ze.layers.enable(Ue),ze.viewport=new li,q[Ue]=ze),ze.matrix.fromArray(Se.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Se.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ue===0&&(j.matrix.copy(ze.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Jt===!0&&j.cameras.push(ze)}const ve=l.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&U){x=s.getBinding();const Ue=x.getDepthInformation(Nt[0]);Ue&&Ue.isValid&&Ue.texture&&y.init(Ue,l.renderState)}if(ve&&ve.includes("camera-access")&&U){t.state.unbindTexture(),x=s.getBinding();for(let Ue=0;Ue<Nt.length;Ue++){const Se=Nt[Ue].camera;if(Se){let Ye=v[Se];Ye||(Ye=new bx,v[Se]=Ye);const ze=x.getCameraImage(Se);Ye.sourceTexture=ze}}}}for(let Nt=0;Nt<F.length;Nt++){const Jt=L[Nt],ve=F[Nt];Jt!==null&&ve!==void 0&&ve.update(Jt,Dt,d||h)}Lt&&Lt(ft,Dt),Dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Dt}),A=null}const qt=new wx;qt.setAnimationLoop(Gt),this.setAnimationLoop=function(ft){Lt=ft},this.dispose=function(){}}}const BA=new Wn,Ox=new Oe;Ox.set(-1,0,0,0,1,0,0,0,1);function GA(r,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,Ex(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,O,B,D){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?c(y,v):v.isMeshLambertMaterial?(c(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(y,v),x(y,v)):v.isMeshPhongMaterial?(c(y,v),M(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(y,v),g(y,v),v.isMeshPhysicalMaterial&&b(y,v,D)):v.isMeshMatcapMaterial?(c(y,v),A(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),U(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(h(y,v),v.isLineDashedMaterial&&p(y,v)):v.isPointsMaterial?m(y,v,O,B):v.isSpriteMaterial?d(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Hi&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Hi&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const O=t.get(v),B=O.envMap,D=O.envMapRotation;B&&(y.envMap.value=B,y.envMapRotation.value.setFromMatrix4(BA.makeRotationFromEuler(D)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Ox),y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function p(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,O,B){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*O,y.scale.value=B*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function M(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function x(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function g(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function b(y,v,O){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Hi&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,v){v.matcap&&(y.matcap.value=v.matcap)}function U(y,v){const O=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function HA(r,t,i,s){let l={},c={},h=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,F){const L=F.program;s.uniformBlockBinding(D,L)}function d(D,F){let L=l[D.id];L===void 0&&(y(D),L=M(D),l[D.id]=L,D.addEventListener("dispose",O));const z=F.program;s.updateUBOMapping(D,z);const E=t.render.frame;c[D.id]!==E&&(g(D),c[D.id]=E)}function M(D){const F=x();D.__bindingPointIndex=F;const L=r.createBuffer(),z=D.__size,E=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,z,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,F,L),L}function x(){for(let D=0;D<p;D++)if(h.indexOf(D)===-1)return h.push(D),D;return _n("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const F=l[D.id],L=D.uniforms,z=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,F);for(let E=0,N=L.length;E<N;E++){const Y=L[E];if(Array.isArray(Y))for(let q=0,j=Y.length;q<j;q++)b(Y[q],E,q,z);else b(Y,E,0,z)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function b(D,F,L,z){if(U(D,F,L,z)===!0){const E=D.__offset,N=D.value;if(Array.isArray(N)){let Y=0;for(let q=0;q<N.length;q++){const j=N[q],gt=v(j);A(j,D.__data,Y),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(Y+=gt.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(N,D.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,D.__data)}}function A(D,F,L){typeof D=="number"||typeof D=="boolean"?F[0]=D:D.isMatrix3?(F[0]=D.elements[0],F[1]=D.elements[1],F[2]=D.elements[2],F[3]=0,F[4]=D.elements[3],F[5]=D.elements[4],F[6]=D.elements[5],F[7]=0,F[8]=D.elements[6],F[9]=D.elements[7],F[10]=D.elements[8],F[11]=0):ArrayBuffer.isView(D)?F.set(new D.constructor(D.buffer,D.byteOffset,F.length)):D.toArray(F,L)}function U(D,F,L,z){const E=D.value,N=F+"_"+L;if(z[N]===void 0)return typeof E=="number"||typeof E=="boolean"?z[N]=E:ArrayBuffer.isView(E)?z[N]=E.slice():z[N]=E.clone(),!0;{const Y=z[N];if(typeof E=="number"||typeof E=="boolean"){if(Y!==E)return z[N]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(Y.equals(E)===!1)return Y.copy(E),!0}}return!1}function y(D){const F=D.uniforms;let L=0;const z=16;for(let N=0,Y=F.length;N<Y;N++){const q=Array.isArray(F[N])?F[N]:[F[N]];for(let j=0,gt=q.length;j<gt;j++){const yt=q[j],it=Array.isArray(yt.value)?yt.value:[yt.value];for(let H=0,X=it.length;H<X;H++){const lt=it[H],Et=v(lt),Ot=L%z,I=Ot%Et.boundary,$=Ot+I;L+=I,$!==0&&z-$<Et.storage&&(L+=z-$),yt.__data=new Float32Array(Et.storage/Float32Array.BYTES_PER_ELEMENT),yt.__offset=L,L+=Et.storage}}}const E=L%z;return E>0&&(L+=z-E),D.__size=L,D.__cache={},this}function v(D){const F={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(F.boundary=4,F.storage=4):D.isVector2?(F.boundary=8,F.storage=8):D.isVector3||D.isColor?(F.boundary=16,F.storage=12):D.isVector4?(F.boundary=16,F.storage=16):D.isMatrix3?(F.boundary=48,F.storage=48):D.isMatrix4?(F.boundary=64,F.storage=64):D.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(F.boundary=16,F.storage=D.byteLength):Te("WebGLRenderer: Unsupported uniform value type.",D),F}function O(D){const F=D.target;F.removeEventListener("dispose",O);const L=h.indexOf(F.__bindingPointIndex);h.splice(L,1),r.deleteBuffer(l[F.id]),delete l[F.id],delete c[F.id]}function B(){for(const D in l)r.deleteBuffer(l[D]);h=[],l={},c={}}return{bind:m,update:d,dispose:B}}const VA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ms=null;function kA(){return ms===null&&(ms=new Sx(VA,16,16,uo,Qs),ms.name="DFG_LUT",ms.minFilter=na,ms.magFilter=na,ms.wrapS=Zs,ms.wrapT=Zs,ms.generateMipmaps=!1,ms.needsUpdate=!0),ms}class XA{constructor(t={}){const{canvas:i=WS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:M="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:b=Ia}=t;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=h;const U=b,y=new Set([lm,om,rm]),v=new Set([Ia,Ss,Uc,Nc,im,am]),O=new Uint32Array(4),B=new Int32Array(4),D=new Q;let F=null,L=null;const z=[],E=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let q=!1,j=null,gt=null,yt=null,it=null;this._outputColorSpace=Ka;let H=0,X=0,lt=null,Et=-1,Ot=null;const I=new li,$=new li;let Lt=null;const Gt=new St(0);let qt=0,ft=i.width,Dt=i.height,Nt=1,Jt=null,ve=null;const ae=new li(0,0,ft,Dt),Un=new li(0,0,ft,Dt);let Ue=!1;const Se=new pm;let Ye=!1,ze=!1;const Zn=new Wn,Kn=new Q,Nn=new li,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function ei(){return lt===null?Nt:1}let J=s;function An(w,W){return i.getContext(w,W)}try{const w={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:M,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${$p}`),i.addEventListener("webglcontextlost",He,!1),i.addEventListener("webglcontextrestored",Ve,!1),i.addEventListener("webglcontextcreationerror",ui,!1),J===null){const W="webgl2";if(J=An(W,w),J===null)throw An(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw _n("WebGLRenderer: "+w.message),w}let un,P,S,et,ht,xt,Bt,Xt,T,V,Z,R,pt,nt,Mt,Tt,Pt,G,vt,at,At,zt,Rt;function Wt(){un=new kE(J),un.init(),At=new OA(J,un),P=new PE(J,un,t,At),S=new NA(J,un),P.reversedDepthBuffer&&g&&S.buffers.depth.setReversed(!0),gt=J.createFramebuffer(),yt=J.createFramebuffer(),it=J.createFramebuffer(),et=new qE(J),ht=new vA,xt=new LA(J,un,S,ht,P,At,et),Bt=new VE(Y),Xt=new jy(J),zt=new LE(J,Xt),T=new XE(J,Xt,et,zt),V=new ZE(J,T,Xt,zt,et),G=new YE(J,P,xt),Mt=new IE(ht),Z=new _A(Y,Bt,un,P,zt,Mt),R=new GA(Y,ht),pt=new MA,nt=new AA(un),Pt=new NE(Y,Bt,S,V,A,m),Tt=new UA(Y,V,P),Rt=new HA(J,et,P,S),vt=new OE(J,un,et),at=new WE(J,un,et),et.programs=Z.programs,Y.capabilities=P,Y.extensions=un,Y.properties=ht,Y.renderLists=pt,Y.shadowMap=Tt,Y.state=S,Y.info=et}Wt(),U!==Ia&&(N=new jE(U,i.width,i.height,p,l,c));const Ht=new zA(Y,J);this.xr=Ht,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const w=un.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=un.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Nt},this.setPixelRatio=function(w){w!==void 0&&(Nt=w,this.setSize(ft,Dt,!1))},this.getSize=function(w){return w.set(ft,Dt)},this.setSize=function(w,W,st=!0){if(Ht.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}ft=w,Dt=W,i.width=Math.floor(w*Nt),i.height=Math.floor(W*Nt),st===!0&&(i.style.width=w+"px",i.style.height=W+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(ft*Nt,Dt*Nt).floor()},this.setDrawingBufferSize=function(w,W,st){ft=w,Dt=W,Nt=st,i.width=Math.floor(w*st),i.height=Math.floor(W*st),this.setViewport(0,0,w,W)},this.setEffects=function(w){if(U===Ia){_n("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let W=0;W<w.length;W++)if(w[W].isOutputPass===!0){Te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(ae)},this.setViewport=function(w,W,st,ot){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,W,st,ot),S.viewport(I.copy(ae).multiplyScalar(Nt).round())},this.getScissor=function(w){return w.copy(Un)},this.setScissor=function(w,W,st,ot){w.isVector4?Un.set(w.x,w.y,w.z,w.w):Un.set(w,W,st,ot),S.scissor($.copy(Un).multiplyScalar(Nt).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(w){S.setScissorTest(Ue=w)},this.setOpaqueSort=function(w){Jt=w},this.setTransparentSort=function(w){ve=w},this.getClearColor=function(w){return w.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,st=!0){let ot=0;if(w){let rt=!1;if(lt!==null){const kt=lt.texture.format;rt=y.has(kt)}if(rt){const kt=lt.texture.type,Zt=v.has(kt),Vt=Pt.getClearColor(),Qt=Pt.getClearAlpha(),Kt=Vt.r,ee=Vt.g,be=Vt.b;Zt?(O[0]=Kt,O[1]=ee,O[2]=be,O[3]=Qt,J.clearBufferuiv(J.COLOR,0,O)):(B[0]=Kt,B[1]=ee,B[2]=be,B[3]=Qt,J.clearBufferiv(J.COLOR,0,B))}else ot|=J.COLOR_BUFFER_BIT}W&&(ot|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(ot|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ot!==0&&J.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),j=w},this.dispose=function(){i.removeEventListener("webglcontextlost",He,!1),i.removeEventListener("webglcontextrestored",Ve,!1),i.removeEventListener("webglcontextcreationerror",ui,!1),Pt.dispose(),pt.dispose(),nt.dispose(),ht.dispose(),Bt.dispose(),V.dispose(),zt.dispose(),Rt.dispose(),Z.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",fn),Ht.removeEventListener("sessionend",yn),xe.stop()};function He(w){w.preventDefault(),tv("WebGLRenderer: Context Lost."),q=!0}function Ve(){tv("WebGLRenderer: Context Restored."),q=!1;const w=et.autoReset,W=Tt.enabled,st=Tt.autoUpdate,ot=Tt.needsUpdate,rt=Tt.type;Wt(),et.autoReset=w,Tt.enabled=W,Tt.autoUpdate=st,Tt.needsUpdate=ot,Tt.type=rt}function ui(w){_n("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function kn(w){const W=w.target;W.removeEventListener("dispose",kn),sa(W)}function sa(w){Ln(w),ht.remove(w)}function Ln(w){const W=ht.get(w).programs;W!==void 0&&(W.forEach(function(st){Z.releaseProgram(st)}),w.isShaderMaterial&&Z.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,st,ot,rt,kt){W===null&&(W=me);const Zt=rt.isMesh&&rt.matrixWorld.determinantAffine()<0,Vt=ri(w,W,st,ot,rt);S.setMaterial(ot,Zt);let Qt=st.index,Kt=1;if(ot.wireframe===!0){if(Qt=T.getWireframeAttribute(st),Qt===void 0)return;Kt=2}const ee=st.drawRange,be=st.attributes.position;let $t=ee.start*Kt,Ze=(ee.start+ee.count)*Kt;kt!==null&&($t=Math.max($t,kt.start*Kt),Ze=Math.min(Ze,(kt.start+kt.count)*Kt)),Qt!==null?($t=Math.max($t,0),Ze=Math.min(Ze,Qt.count)):be!=null&&($t=Math.max($t,0),Ze=Math.min(Ze,be.count));const vn=Ze-$t;if(vn<0||vn===1/0)return;zt.setup(rt,ot,Vt,st,Qt);let Ut,Ft=vt;if(Qt!==null&&(Ut=Xt.get(Qt),Ft=at,Ft.setIndex(Ut)),rt.isMesh)ot.wireframe===!0?(S.setLineWidth(ot.wireframeLinewidth*ei()),Ft.setMode(J.LINES)):Ft.setMode(J.TRIANGLES);else if(rt.isLine){let jt=ot.linewidth;jt===void 0&&(jt=1),S.setLineWidth(jt*ei()),rt.isLineSegments?Ft.setMode(J.LINES):rt.isLineLoop?Ft.setMode(J.LINE_LOOP):Ft.setMode(J.LINE_STRIP)}else rt.isPoints?Ft.setMode(J.POINTS):rt.isSprite&&Ft.setMode(J.TRIANGLES);if(rt.isBatchedMesh)if(un.get("WEBGL_multi_draw"))Ft.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{const jt=rt._multiDrawStarts,It=rt._multiDrawCounts,wn=rt._multiDrawCount,se=Qt?Xt.get(Qt).bytesPerElement:1,xn=ht.get(ot).currentProgram.getUniforms();for(let Bn=0;Bn<wn;Bn++)xn.setValue(J,"_gl_DrawID",Bn),Ft.render(jt[Bn]/se,It[Bn])}else if(rt.isInstancedMesh)Ft.renderInstances($t,vn,rt.count);else if(st.isInstancedBufferGeometry){const jt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,It=Math.min(st.instanceCount,jt);Ft.renderInstances($t,vn,It)}else Ft.render($t,vn)};function ra(w,W,st){w.transparent===!0&&w.side===ja&&w.forceSinglePass===!1?(w.side=Hi,w.needsUpdate=!0,Ii(w,W,st),w.side=Lr,w.needsUpdate=!0,Ii(w,W,st),w.side=ja):Ii(w,W,st)}this.compile=function(w,W,st=null){st===null&&(st=w),L=nt.get(st),L.init(W),E.push(L),st.traverseVisible(function(rt){rt.isLight&&rt.layers.test(W.layers)&&(L.pushLight(rt),rt.castShadow&&L.pushShadow(rt))}),w!==st&&w.traverseVisible(function(rt){rt.isLight&&rt.layers.test(W.layers)&&(L.pushLight(rt),rt.castShadow&&L.pushShadow(rt))}),L.setupLights();const ot=new Set;return w.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;const kt=rt.material;if(kt)if(Array.isArray(kt))for(let Zt=0;Zt<kt.length;Zt++){const Vt=kt[Zt];ra(Vt,st,rt),ot.add(Vt)}else ra(kt,st,rt),ot.add(kt)}),L=E.pop(),ot},this.compileAsync=function(w,W,st=null){const ot=this.compile(w,W,st);return new Promise(rt=>{function kt(){if(ot.forEach(function(Zt){ht.get(Zt).currentProgram.isReady()&&ot.delete(Zt)}),ot.size===0){rt(w);return}setTimeout(kt,10)}un.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let On=null;function fi(w){On&&On(w)}function fn(){xe.stop()}function yn(){xe.start()}const xe=new wx;xe.setAnimationLoop(fi),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(w){On=w,Ht.setAnimationLoop(w),w===null?xe.stop():xe.start()},Ht.addEventListener("sessionstart",fn),Ht.addEventListener("sessionend",yn),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){_n("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;j!==null&&j.renderStart(w,W);const st=Ht.enabled===!0&&Ht.isPresenting===!0,ot=N!==null&&(lt===null||st)&&N.begin(Y,lt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(W),W=Ht.getCamera()),w.isScene===!0&&w.onBeforeRender(Y,w,W,lt),L=nt.get(w,E.length),L.init(W),L.state.textureUnits=xt.getTextureUnits(),E.push(L),Zn.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Se.setFromProjectionMatrix(Zn,vs,W.reversedDepth),ze=this.localClippingEnabled,Ye=Mt.init(this.clippingPlanes,ze),F=pt.get(w,z.length),F.init(),z.push(F),Ht.enabled===!0&&Ht.isPresenting===!0){const Zt=Y.xr.getDepthSensingMesh();Zt!==null&&qn(Zt,W,-1/0,Y.sortObjects)}qn(w,W,0,Y.sortObjects),F.finish(),Y.sortObjects===!0&&F.sort(Jt,ve,W.reversedDepth),ye=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,ye&&Pt.addToRenderList(F,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&Mt.beginShadows();const rt=L.state.shadowsArray;if(Tt.render(rt,w,W),Ye===!0&&Mt.endShadows(),(ot&&N.hasRenderPass())===!1){const Zt=F.opaque,Vt=F.transmissive;if(L.setupLights(),W.isArrayCamera){const Qt=W.cameras;if(Vt.length>0)for(let Kt=0,ee=Qt.length;Kt<ee;Kt++){const be=Qt[Kt];ki(Zt,Vt,w,be)}ye&&Pt.render(w);for(let Kt=0,ee=Qt.length;Kt<ee;Kt++){const be=Qt[Kt];Vi(F,w,be,be.viewport)}}else Vt.length>0&&ki(Zt,Vt,w,W),ye&&Pt.render(w),Vi(F,w,W)}lt!==null&&X===0&&(xt.updateMultisampleRenderTarget(lt),xt.updateRenderTargetMipmap(lt)),ot&&N.end(Y),w.isScene===!0&&w.onAfterRender(Y,w,W),zt.resetDefaultState(),Et=-1,Ot=null,E.pop(),E.length>0?(L=E[E.length-1],xt.setTextureUnits(L.state.textureUnits),Ye===!0&&Mt.setGlobalState(Y.clippingPlanes,L.state.camera)):L=null,z.pop(),z.length>0?F=z[z.length-1]:F=null,j!==null&&j.renderEnd()};function qn(w,W,st,ot){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)st=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLightProbeGrid)L.pushLightProbeGrid(w);else if(w.isLight)L.pushLight(w),w.castShadow&&L.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Se.intersectsSprite(w)){ot&&Nn.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Zn);const Zt=V.update(w),Vt=w.material;Vt.visible&&F.push(w,Zt,Vt,st,Nn.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Se.intersectsObject(w))){const Zt=V.update(w),Vt=w.material;if(ot&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Nn.copy(w.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),Nn.copy(Zt.boundingSphere.center)),Nn.applyMatrix4(w.matrixWorld).applyMatrix4(Zn)),Array.isArray(Vt)){const Qt=Zt.groups;for(let Kt=0,ee=Qt.length;Kt<ee;Kt++){const be=Qt[Kt],$t=Vt[be.materialIndex];$t&&$t.visible&&F.push(w,Zt,$t,st,Nn.z,be)}}else Vt.visible&&F.push(w,Zt,Vt,st,Nn.z,null)}}const kt=w.children;for(let Zt=0,Vt=kt.length;Zt<Vt;Zt++)qn(kt[Zt],W,st,ot)}function Vi(w,W,st,ot){const{opaque:rt,transmissive:kt,transparent:Zt}=w;L.setupLightsView(st),Ye===!0&&Mt.setGlobalState(Y.clippingPlanes,st),ot&&S.viewport(I.copy(ot)),rt.length>0&&Pi(rt,W,st),kt.length>0&&Pi(kt,W,st),Zt.length>0&&Pi(Zt,W,st),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function ki(w,W,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ot.id]===void 0){const $t=un.has("EXT_color_buffer_half_float")||un.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ot.id]=new Ms(1,1,{generateMipmaps:!0,type:$t?Qs:Ia,minFilter:oo,samples:Math.max(4,P.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:cn.workingColorSpace})}const kt=L.state.transmissionRenderTarget[ot.id],Zt=ot.viewport||I;kt.setSize(Zt.z*Y.transmissionResolutionScale,Zt.w*Y.transmissionResolutionScale);const Vt=Y.getRenderTarget(),Qt=Y.getActiveCubeFace(),Kt=Y.getActiveMipmapLevel();Y.setRenderTarget(kt),Y.getClearColor(Gt),qt=Y.getClearAlpha(),qt<1&&Y.setClearColor(16777215,.5),Y.clear(),ye&&Pt.render(st);const ee=Y.toneMapping;Y.toneMapping=xs;const be=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),L.setupLightsView(ot),Ye===!0&&Mt.setGlobalState(Y.clippingPlanes,ot),Pi(w,st,ot),xt.updateMultisampleRenderTarget(kt),xt.updateRenderTargetMipmap(kt),un.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ze=0,vn=W.length;Ze<vn;Ze++){const Ut=W[Ze],{object:Ft,geometry:jt,material:It,group:wn}=Ut;if(It.side===ja&&Ft.layers.test(ot.layers)){const se=It.side;It.side=Hi,It.needsUpdate=!0,si(Ft,st,ot,jt,It,wn),It.side=se,It.needsUpdate=!0,$t=!0}}$t===!0&&(xt.updateMultisampleRenderTarget(kt),xt.updateRenderTargetMipmap(kt))}Y.setRenderTarget(Vt,Qt,Kt),Y.setClearColor(Gt,qt),be!==void 0&&(ot.viewport=be),Y.toneMapping=ee}function Pi(w,W,st){const ot=W.isScene===!0?W.overrideMaterial:null;for(let rt=0,kt=w.length;rt<kt;rt++){const Zt=w[rt],{object:Vt,geometry:Qt,group:Kt}=Zt;let ee=Zt.material;ee.allowOverride===!0&&ot!==null&&(ee=ot),Vt.layers.test(st.layers)&&si(Vt,W,st,Qt,ee,Kt)}}function si(w,W,st,ot,rt,kt){w.onBeforeRender(Y,W,st,ot,rt,kt),w.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),rt.onBeforeRender(Y,W,st,ot,w,kt),rt.transparent===!0&&rt.side===ja&&rt.forceSinglePass===!1?(rt.side=Hi,rt.needsUpdate=!0,Y.renderBufferDirect(st,W,ot,rt,w,kt),rt.side=Lr,rt.needsUpdate=!0,Y.renderBufferDirect(st,W,ot,rt,w,kt),rt.side=ja):Y.renderBufferDirect(st,W,ot,rt,w,kt),w.onAfterRender(Y,W,st,ot,rt,kt)}function Ii(w,W,st){W.isScene!==!0&&(W=me);const ot=ht.get(w),rt=L.state.lights,kt=L.state.shadowsArray,Zt=rt.state.version,Vt=Z.getParameters(w,rt.state,kt,W,st,L.state.lightProbeGridArray),Qt=Z.getProgramCacheKey(Vt);let Kt=ot.programs;ot.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?W.environment:null,ot.fog=W.fog;const ee=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ot.envMap=Bt.get(w.envMap||ot.environment,ee),ot.envMapRotation=ot.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Kt===void 0&&(w.addEventListener("dispose",kn),Kt=new Map,ot.programs=Kt);let be=Kt.get(Qt);if(be!==void 0){if(ot.currentProgram===be&&ot.lightsStateVersion===Zt)return jn(w,Vt),be}else Vt.uniforms=Z.getUniforms(w),j!==null&&w.isNodeMaterial&&j.build(w,st,Vt),w.onBeforeCompile(Vt,Y),be=Z.acquireProgram(Vt,Qt),Kt.set(Qt,be),ot.uniforms=Vt.uniforms;const $t=ot.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&($t.clippingPlanes=Mt.uniform),jn(w,Vt),ot.needsLights=za(w),ot.lightsStateVersion=Zt,ot.needsLights&&($t.ambientLightColor.value=rt.state.ambient,$t.lightProbe.value=rt.state.probe,$t.directionalLights.value=rt.state.directional,$t.directionalLightShadows.value=rt.state.directionalShadow,$t.spotLights.value=rt.state.spot,$t.spotLightShadows.value=rt.state.spotShadow,$t.rectAreaLights.value=rt.state.rectArea,$t.ltc_1.value=rt.state.rectAreaLTC1,$t.ltc_2.value=rt.state.rectAreaLTC2,$t.pointLights.value=rt.state.point,$t.pointLightShadows.value=rt.state.pointShadow,$t.hemisphereLights.value=rt.state.hemi,$t.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,$t.spotLightMatrix.value=rt.state.spotLightMatrix,$t.spotLightMap.value=rt.state.spotLightMap,$t.pointShadowMatrix.value=rt.state.pointShadowMatrix),ot.lightProbeGrid=L.state.lightProbeGridArray.length>0,ot.currentProgram=be,ot.uniformsList=null,be}function _i(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=pf.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function jn(w,W){const st=ht.get(w);st.outputColorSpace=W.outputColorSpace,st.batching=W.batching,st.batchingColor=W.batchingColor,st.instancing=W.instancing,st.instancingColor=W.instancingColor,st.instancingMorph=W.instancingMorph,st.skinning=W.skinning,st.morphTargets=W.morphTargets,st.morphNormals=W.morphNormals,st.morphColors=W.morphColors,st.morphTargetsCount=W.morphTargetsCount,st.numClippingPlanes=W.numClippingPlanes,st.numIntersection=W.numClipIntersection,st.vertexAlphas=W.vertexAlphas,st.vertexTangents=W.vertexTangents,st.toneMapping=W.toneMapping}function Ie(w,W){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;D.setFromMatrixPosition(W.matrixWorld);for(let st=0,ot=w.length;st<ot;st++){const rt=w[st];if(rt.texture!==null&&rt.boundingBox.containsPoint(D))return rt}return null}function ri(w,W,st,ot,rt){W.isScene!==!0&&(W=me),xt.resetTextureUnits();const kt=W.fog,Zt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial?W.environment:null,Vt=lt===null?Y.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:cn.workingColorSpace,Qt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial&&!ot.envMap||ot.isMeshPhongMaterial&&!ot.envMap,Kt=Bt.get(ot.envMap||Zt,Qt),ee=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,be=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),$t=!!st.morphAttributes.position,Ze=!!st.morphAttributes.normal,vn=!!st.morphAttributes.color;let Ut=xs;ot.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Ut=Y.toneMapping);const Ft=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,jt=Ft!==void 0?Ft.length:0,It=ht.get(ot),wn=L.state.lights;if(Ye===!0&&(ze===!0||w!==Ot)){const Ke=w===Ot&&ot.id===Et;Mt.setState(ot,w,Ke)}let se=!1;ot.version===It.__version?(It.needsLights&&It.lightsStateVersion!==wn.state.version||It.outputColorSpace!==Vt||rt.isBatchedMesh&&It.batching===!1||!rt.isBatchedMesh&&It.batching===!0||rt.isBatchedMesh&&It.batchingColor===!0&&rt.colorTexture===null||rt.isBatchedMesh&&It.batchingColor===!1&&rt.colorTexture!==null||rt.isInstancedMesh&&It.instancing===!1||!rt.isInstancedMesh&&It.instancing===!0||rt.isSkinnedMesh&&It.skinning===!1||!rt.isSkinnedMesh&&It.skinning===!0||rt.isInstancedMesh&&It.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&It.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&It.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&It.instancingMorph===!1&&rt.morphTexture!==null||It.envMap!==Kt||ot.fog===!0&&It.fog!==kt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Mt.numPlanes||It.numIntersection!==Mt.numIntersection)||It.vertexAlphas!==ee||It.vertexTangents!==be||It.morphTargets!==$t||It.morphNormals!==Ze||It.morphColors!==vn||It.toneMapping!==Ut||It.morphTargetsCount!==jt||!!It.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,It.__version=ot.version);let xn=It.currentProgram;se===!0&&(xn=Ii(ot,W,rt),j&&ot.isNodeMaterial&&j.onUpdateProgram(ot,xn,It));let Bn=!1,bn=!1,Qn=!1;const Ae=xn.getUniforms(),on=It.uniforms;if(S.useProgram(xn.program)&&(Bn=!0,bn=!0,Qn=!0),ot.id!==Et&&(Et=ot.id,bn=!0),It.needsLights){const Ke=Ie(L.state.lightProbeGridArray,rt);It.lightProbeGrid!==Ke&&(It.lightProbeGrid=Ke,bn=!0)}if(Bn||Ot!==w){S.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ae.setValue(J,"projectionMatrix",w.projectionMatrix),Ae.setValue(J,"viewMatrix",w.matrixWorldInverse);const yi=Ae.map.cameraPosition;yi!==void 0&&yi.setValue(J,Kn.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&Ae.setValue(J,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ae.setValue(J,"isOrthographic",w.isOrthographicCamera===!0),Ot!==w&&(Ot=w,bn=!0,Qn=!0)}if(It.needsLights&&(wn.state.directionalShadowMap.length>0&&Ae.setValue(J,"directionalShadowMap",wn.state.directionalShadowMap,xt),wn.state.spotShadowMap.length>0&&Ae.setValue(J,"spotShadowMap",wn.state.spotShadowMap,xt),wn.state.pointShadowMap.length>0&&Ae.setValue(J,"pointShadowMap",wn.state.pointShadowMap,xt)),rt.isSkinnedMesh){Ae.setOptional(J,rt,"bindMatrix"),Ae.setOptional(J,rt,"bindMatrixInverse");const Ke=rt.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Ae.setValue(J,"boneTexture",Ke.boneTexture,xt))}rt.isBatchedMesh&&(Ae.setOptional(J,rt,"batchingTexture"),Ae.setValue(J,"batchingTexture",rt._matricesTexture,xt),Ae.setOptional(J,rt,"batchingIdTexture"),Ae.setValue(J,"batchingIdTexture",rt._indirectTexture,xt),Ae.setOptional(J,rt,"batchingColorTexture"),rt._colorsTexture!==null&&Ae.setValue(J,"batchingColorTexture",rt._colorsTexture,xt));const Si=st.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&G.update(rt,st,xn),(bn||It.receiveShadow!==rt.receiveShadow)&&(It.receiveShadow=rt.receiveShadow,Ae.setValue(J,"receiveShadow",rt.receiveShadow)),(ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial)&&ot.envMap===null&&W.environment!==null&&(on.envMapIntensity.value=W.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=kA()),bn){if(Ae.setValue(J,"toneMappingExposure",Y.toneMappingExposure),It.needsLights&&en(on,Qn),kt&&ot.fog===!0&&R.refreshFogUniforms(on,kt),R.refreshMaterialUniforms(on,ot,Nt,Dt,L.state.transmissionRenderTarget[w.id]),It.needsLights&&It.lightProbeGrid){const Ke=It.lightProbeGrid;on.probesSH.value=Ke.texture,on.probesMin.value.copy(Ke.boundingBox.min),on.probesMax.value.copy(Ke.boundingBox.max),on.probesResolution.value.copy(Ke.resolution)}pf.upload(J,_i(It),on,xt)}if(ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(pf.upload(J,_i(It),on,xt),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ae.setValue(J,"center",rt.center),Ae.setValue(J,"modelViewMatrix",rt.modelViewMatrix),Ae.setValue(J,"normalMatrix",rt.normalMatrix),Ae.setValue(J,"modelMatrix",rt.matrixWorld),ot.uniformsGroups!==void 0){const Ke=ot.uniformsGroups;for(let yi=0,Ui=Ke.length;yi<Ui;yi++){const oa=Ke[yi];Rt.update(oa,xn),Rt.bind(oa,xn)}}return xn}function en(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function za(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return lt},this.setRenderTargetTextures=function(w,W,st){const ot=ht.get(w);ot.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),ht.get(w.texture).__webglTexture=W,ht.get(w.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:st,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){const st=ht.get(w);st.__webglFramebuffer=W,st.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,st=0){lt=w,H=W,X=st;let ot=null,rt=!1,kt=!1;if(w){const Vt=ht.get(w);if(Vt.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(J.FRAMEBUFFER,Vt.__webglFramebuffer),I.copy(w.viewport),$.copy(w.scissor),Lt=w.scissorTest,S.viewport(I),S.scissor($),S.setScissorTest(Lt),Et=-1;return}else if(Vt.__webglFramebuffer===void 0)xt.setupRenderTarget(w);else if(Vt.__hasExternalTextures)xt.rebindTextures(w,ht.get(w.texture).__webglTexture,ht.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ee=w.depthTexture;if(Vt.__boundDepthTexture!==ee){if(ee!==null&&ht.has(ee)&&(w.width!==ee.image.width||w.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xt.setupDepthRenderbuffer(w)}}const Qt=w.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(kt=!0);const Kt=ht.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Kt[W])?ot=Kt[W][st]:ot=Kt[W],rt=!0):w.samples>0&&xt.useMultisampledRTT(w)===!1?ot=ht.get(w).__webglMultisampledFramebuffer:Array.isArray(Kt)?ot=Kt[st]:ot=Kt,I.copy(w.viewport),$.copy(w.scissor),Lt=w.scissorTest}else I.copy(ae).multiplyScalar(Nt).floor(),$.copy(Un).multiplyScalar(Nt).floor(),Lt=Ue;if(st!==0&&(ot=gt),S.bindFramebuffer(J.FRAMEBUFFER,ot)&&S.drawBuffers(w,ot),S.viewport(I),S.scissor($),S.setScissorTest(Lt),rt){const Vt=ht.get(w.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+W,Vt.__webglTexture,st)}else if(kt){const Vt=W;for(let Qt=0;Qt<w.textures.length;Qt++){const Kt=ht.get(w.textures[Qt]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Qt,Kt.__webglTexture,st,Vt)}}else if(w!==null&&st!==0){const Vt=ht.get(w.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Vt.__webglTexture,st)}Et=-1},this.readRenderTargetPixels=function(w,W,st,ot,rt,kt,Zt,Vt=0){if(!(w&&w.isWebGLRenderTarget)){_n("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=ht.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Zt!==void 0&&(Qt=Qt[Zt]),Qt){S.bindFramebuffer(J.FRAMEBUFFER,Qt);try{const Kt=w.textures[Vt],ee=Kt.format,be=Kt.type;if(w.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Vt),!P.textureFormatReadable(ee)){_n("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(be)){_n("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-ot&&st>=0&&st<=w.height-rt&&J.readPixels(W,st,ot,rt,At.convert(ee),At.convert(be),kt)}finally{const Kt=lt!==null?ht.get(lt).__webglFramebuffer:null;S.bindFramebuffer(J.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(w,W,st,ot,rt,kt,Zt,Vt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=ht.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Zt!==void 0&&(Qt=Qt[Zt]),Qt)if(W>=0&&W<=w.width-ot&&st>=0&&st<=w.height-rt){S.bindFramebuffer(J.FRAMEBUFFER,Qt);const Kt=w.textures[Vt],ee=Kt.format,be=Kt.type;if(w.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Vt),!P.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,$t),J.bufferData(J.PIXEL_PACK_BUFFER,kt.byteLength,J.STREAM_READ),J.readPixels(W,st,ot,rt,At.convert(ee),At.convert(be),0);const Ze=lt!==null?ht.get(lt).__webglFramebuffer:null;S.bindFramebuffer(J.FRAMEBUFFER,Ze);const vn=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await qS(J,vn,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,$t),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,kt),J.deleteBuffer($t),J.deleteSync(vn),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,st=0){const ot=Math.pow(2,-st),rt=Math.floor(w.image.width*ot),kt=Math.floor(w.image.height*ot),Zt=W!==null?W.x:0,Vt=W!==null?W.y:0;xt.setTexture2D(w,0),J.copyTexSubImage2D(J.TEXTURE_2D,st,0,0,Zt,Vt,rt,kt),S.unbindTexture()},this.copyTextureToTexture=function(w,W,st=null,ot=null,rt=0,kt=0){let Zt,Vt,Qt,Kt,ee,be,$t,Ze,vn;const Ut=w.isCompressedTexture?w.mipmaps[kt]:w.image;if(st!==null)Zt=st.max.x-st.min.x,Vt=st.max.y-st.min.y,Qt=st.isBox3?st.max.z-st.min.z:1,Kt=st.min.x,ee=st.min.y,be=st.isBox3?st.min.z:0;else{const on=Math.pow(2,-rt);Zt=Math.floor(Ut.width*on),Vt=Math.floor(Ut.height*on),w.isDataArrayTexture?Qt=Ut.depth:w.isData3DTexture?Qt=Math.floor(Ut.depth*on):Qt=1,Kt=0,ee=0,be=0}ot!==null?($t=ot.x,Ze=ot.y,vn=ot.z):($t=0,Ze=0,vn=0);const Ft=At.convert(W.format),jt=At.convert(W.type);let It;W.isData3DTexture?(xt.setTexture3D(W,0),It=J.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(xt.setTexture2DArray(W,0),It=J.TEXTURE_2D_ARRAY):(xt.setTexture2D(W,0),It=J.TEXTURE_2D),S.activeTexture(J.TEXTURE0),S.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,W.flipY),S.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),S.pixelStorei(J.UNPACK_ALIGNMENT,W.unpackAlignment);const wn=S.getParameter(J.UNPACK_ROW_LENGTH),se=S.getParameter(J.UNPACK_IMAGE_HEIGHT),xn=S.getParameter(J.UNPACK_SKIP_PIXELS),Bn=S.getParameter(J.UNPACK_SKIP_ROWS),bn=S.getParameter(J.UNPACK_SKIP_IMAGES);S.pixelStorei(J.UNPACK_ROW_LENGTH,Ut.width),S.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Ut.height),S.pixelStorei(J.UNPACK_SKIP_PIXELS,Kt),S.pixelStorei(J.UNPACK_SKIP_ROWS,ee),S.pixelStorei(J.UNPACK_SKIP_IMAGES,be);const Qn=w.isDataArrayTexture||w.isData3DTexture,Ae=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const on=ht.get(w),Si=ht.get(W),Ke=ht.get(on.__renderTarget),yi=ht.get(Si.__renderTarget);S.bindFramebuffer(J.READ_FRAMEBUFFER,Ke.__webglFramebuffer),S.bindFramebuffer(J.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Ui=0;Ui<Qt;Ui++)Qn&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,ht.get(w).__webglTexture,rt,be+Ui),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,ht.get(W).__webglTexture,kt,vn+Ui)),J.blitFramebuffer(Kt,ee,Zt,Vt,$t,Ze,Zt,Vt,J.DEPTH_BUFFER_BIT,J.NEAREST);S.bindFramebuffer(J.READ_FRAMEBUFFER,null),S.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(rt!==0||w.isRenderTargetTexture||ht.has(w)){const on=ht.get(w),Si=ht.get(W);S.bindFramebuffer(J.READ_FRAMEBUFFER,yt),S.bindFramebuffer(J.DRAW_FRAMEBUFFER,it);for(let Ke=0;Ke<Qt;Ke++)Qn?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,on.__webglTexture,rt,be+Ke):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,on.__webglTexture,rt),Ae?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Si.__webglTexture,kt,vn+Ke):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Si.__webglTexture,kt),rt!==0?J.blitFramebuffer(Kt,ee,Zt,Vt,$t,Ze,Zt,Vt,J.COLOR_BUFFER_BIT,J.NEAREST):Ae?J.copyTexSubImage3D(It,kt,$t,Ze,vn+Ke,Kt,ee,Zt,Vt):J.copyTexSubImage2D(It,kt,$t,Ze,Kt,ee,Zt,Vt);S.bindFramebuffer(J.READ_FRAMEBUFFER,null),S.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else Ae?w.isDataTexture||w.isData3DTexture?J.texSubImage3D(It,kt,$t,Ze,vn,Zt,Vt,Qt,Ft,jt,Ut.data):W.isCompressedArrayTexture?J.compressedTexSubImage3D(It,kt,$t,Ze,vn,Zt,Vt,Qt,Ft,Ut.data):J.texSubImage3D(It,kt,$t,Ze,vn,Zt,Vt,Qt,Ft,jt,Ut):w.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,kt,$t,Ze,Zt,Vt,Ft,jt,Ut.data):w.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,kt,$t,Ze,Ut.width,Ut.height,Ft,Ut.data):J.texSubImage2D(J.TEXTURE_2D,kt,$t,Ze,Zt,Vt,Ft,jt,Ut);S.pixelStorei(J.UNPACK_ROW_LENGTH,wn),S.pixelStorei(J.UNPACK_IMAGE_HEIGHT,se),S.pixelStorei(J.UNPACK_SKIP_PIXELS,xn),S.pixelStorei(J.UNPACK_SKIP_ROWS,Bn),S.pixelStorei(J.UNPACK_SKIP_IMAGES,bn),kt===0&&W.generateMipmaps&&J.generateMipmap(It),S.unbindTexture()},this.initRenderTarget=function(w){ht.get(w).__webglFramebuffer===void 0&&xt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?xt.setTextureCube(w,0):w.isData3DTexture?xt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?xt.setTexture2DArray(w,0):xt.setTexture2D(w,0),S.unbindTexture()},this.resetState=function(){H=0,X=0,lt=null,S.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=cn._getDrawingBufferColorSpace(t),i.unpackColorSpace=cn._getUnpackColorSpace()}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class WA{constructor(){this.p=new Uint8Array(512);const t=new Uint8Array(256);for(let i=0;i<256;i++)t[i]=Math.floor(Math.random()*256);for(let i=0;i<512;i++)this.p[i]=t[i%256]}fade(t){return t*t*t*(t*(t*6-15)+10)}lerp(t,i,s){return i+t*(s-i)}grad(t,i,s){const l=t&15,c=l<8?i:s,h=l<4?s:l===12||l===14?i:0;return((l&1)===0?c:-c)+((l&2)===0?h:-h)}noise2D(t,i){const s=Math.floor(t)&255,l=Math.floor(i)&255;t-=Math.floor(t),i-=Math.floor(i);const c=this.fade(t),h=this.fade(i),p=this.p[s]+l,m=this.p[s+1]+l,d=this.p[p],M=this.p[m],x=this.p[p+1],g=this.p[m+1];return this.lerp(h,this.lerp(c,this.grad(this.p[d],t,i),this.grad(this.p[M],t-1,i)),this.lerp(c,this.grad(this.p[x],t,i-1),this.grad(this.p[g],t-1,i-1)))}fBm(t,i,s=5,l=.5,c=2,h=1){let p=0,m=h,d=1,M=0;for(let x=0;x<s;x++)p+=this.noise2D(t*m,i*m)*d,M+=d,d*=l,m*=c;return p/M}}const xa=new WA;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */var ji=(r=>(r.Sunny="SUNNY",r.Misty="MISTY",r.Stormy="STORMY",r))(ji||{}),ne=(r=>(r.Alpine="ALPINE",r.Tropical="TROPICAL",r.Badlands="BADLANDS",r.Volcanic="VOLCANIC",r.Arctic="ARCTIC",r.Forest="FOREST",r))(ne||{});const gi=1600,Tc=80,Tn=20,qA={[ji.Sunny]:{ambientIntensity:.6,sunIntensity:1.4,fogDensity:25e-5,cloudColor:16777215},[ji.Misty]:{ambientIntensity:.8,sunIntensity:.4,fogDensity:.0018,cloudColor:13421772},[ji.Stormy]:{ambientIntensity:.3,sunIntensity:.1,fogDensity:.0012,cloudColor:4473924}},Cr=[{hour:0,skyColor:new St(131589),fogColor:new St(197383),sunColor:new St(16755268),sunIntensity:0,moonColor:new St(13426158),moonIntensity:.5},{hour:4.5,skyColor:new St(328717),fogColor:new St(460562),sunColor:new St(16755268),sunIntensity:0,moonColor:new St(11193599),moonIntensity:.4},{hour:5.5,skyColor:new St(1379108),fogColor:new St(1051164),sunColor:new St(16755268),sunIntensity:.1,moonColor:new St(11193599),moonIntensity:.2},{hour:6.8,skyColor:new St(16604755),fogColor:new St(16491916),sunColor:new St(16755268),sunIntensity:.9,moonColor:new St(11193599),moonIntensity:0},{hour:8,skyColor:new St(9026019),fogColor:new St(12243688),sunColor:new St(16774630),sunIntensity:1.2,moonColor:new St(11193599),moonIntensity:0},{hour:12,skyColor:new St(4361951),fogColor:new St(9159666),sunColor:new St(16777215),sunIntensity:1.4,moonColor:new St(11193599),moonIntensity:0},{hour:16.5,skyColor:new St(5414120),fogColor:new St(10146559),sunColor:new St(16773855),sunIntensity:1.35,moonColor:new St(11193599),moonIntensity:0},{hour:18.2,skyColor:new St(14901821),fogColor:new St(14382929),sunColor:new St(16733457),sunIntensity:1,moonColor:new St(11193599),moonIntensity:.1},{hour:19.5,skyColor:new St(3807554),fogColor:new St(2758205),sunColor:new St(16724736),sunIntensity:.1,moonColor:new St(11193599),moonIntensity:.3},{hour:21,skyColor:new St(525842),fogColor:new St(658458),sunColor:new St(16724736),sunIntensity:0,moonColor:new St(13426158),moonIntensity:.5},{hour:24,skyColor:new St(131589),fogColor:new St(197383),sunColor:new St(16755268),sunIntensity:0,moonColor:new St(13426158),moonIntensity:.5}],Ys={[ne.Alpine]:{sand:new St(14271900),grass:new St(3501625),rock:new St(5657424),snow:new St(16777215)},[ne.Tropical]:{sand:new St(16770713),grass:new St(2078018),rock:new St(7563100),snow:new St(14743020)},[ne.Badlands]:{sand:new St(13411962),grass:new St(10588240),rock:new St(11225636),snow:new St(15655639)},[ne.Volcanic]:{sand:new St(2828583),grass:new St(2051102),rock:new St(1841689),snow:new St(14738923)},[ne.Arctic]:{sand:new St(10070712),grass:new St(4216153),rock:new St(2897213),snow:new St(16777215)},[ne.Forest]:{sand:new St(13022866),grass:new St(1786652),rock:new St(4998722),snow:new St(15130575)}},fl={[ne.Alpine]:{color:new St(1007219),emissive:new St(70423)},[ne.Tropical]:{color:new St(953238),emissive:new St(137500)},[ne.Badlands]:{color:new St(5653298),emissive:new St(1183242)},[ne.Volcanic]:{color:new St(1716019),emissive:new St(397587)},[ne.Arctic]:{color:new St(4097430),emissive:new St(662305)},[ne.Forest]:{color:new St(938054),emissive:new St(136980)}};function YA(){const r=le.useRef(null),[t,i]=le.useState("init"),[s,l]=le.useState(""),[c,h]=le.useState(ji.Sunny),[p,m]=le.useState(()=>{const T=localStorage.getItem("flight_sim_auto_weather");return T!==null?T==="true":!0}),[d,M]=le.useState(()=>{const T=localStorage.getItem("flight_sim_time_speed");return T!==null?parseFloat(T):.04}),[x,g]=le.useState(ne.Alpine),[b,A]=le.useState(()=>{const T=localStorage.getItem("flight_sim_flashlight_enabled");return T!==null?T==="true":!0}),[U,y]=le.useState(()=>{const T=localStorage.getItem("flight_sim_invert_y");return T!==null?T==="true":!1}),[v,O]=le.useState(()=>{const T=localStorage.getItem("flight_sim_warnings_enabled");return T!==null?T==="true":!0}),[B,D]=le.useState(()=>{const T=localStorage.getItem("flight_sim_acrobatic_mode");return T!==null?T==="true":!1}),[F,L]=le.useState(()=>{const T=localStorage.getItem("flight_sim_view_distance");return T!==null?parseInt(T,10):2}),[z,E]=le.useState(()=>{const T=localStorage.getItem("flight_sim_hud_readout_expanded");return T!==null?T==="true":!0}),[N,Y]=le.useState(()=>{const T=localStorage.getItem("flight_sim_hud_throttle_expanded");return T!==null?T==="true":!0}),[q,j]=le.useState(()=>{const T=localStorage.getItem("flight_sim_hud_environment_expanded");return T!==null?T==="true":!0}),[gt,yt]=le.useState(()=>{const T=localStorage.getItem("flight_sim_hud_horizon_expanded");return T!==null?T==="true":!0}),[it,H]=le.useState(()=>{const T=localStorage.getItem("flight_sim_hud_settings_expanded");return T!==null?T==="true":!0});le.useEffect(()=>{localStorage.setItem("flight_sim_hud_readout_expanded",String(z))},[z]),le.useEffect(()=>{localStorage.setItem("flight_sim_hud_throttle_expanded",String(N))},[N]),le.useEffect(()=>{localStorage.setItem("flight_sim_hud_environment_expanded",String(q))},[q]),le.useEffect(()=>{localStorage.setItem("flight_sim_hud_horizon_expanded",String(gt))},[gt]),le.useEffect(()=>{localStorage.setItem("flight_sim_hud_settings_expanded",String(it))},[it]);const X=le.useRef(!0),lt=le.useRef(!1),Et=le.useRef(!0),Ot=le.useRef(!1),I=le.useRef(2);le.useEffect(()=>{I.current=F,localStorage.setItem("flight_sim_view_distance",String(F)),me.current&&me.current.terrainManager&&(me.current.terrainManager.viewDistance=F)},[F]),le.useEffect(()=>{X.current=b,localStorage.setItem("flight_sim_flashlight_enabled",String(b))},[b]),le.useEffect(()=>{lt.current=U,localStorage.setItem("flight_sim_invert_y",String(U))},[U]),le.useEffect(()=>{Et.current=v,localStorage.setItem("flight_sim_warnings_enabled",String(v))},[v]),le.useEffect(()=>{Ot.current=B,localStorage.setItem("flight_sim_acrobatic_mode",String(B))},[B]),le.useEffect(()=>{localStorage.setItem("flight_sim_time_speed",String(d))},[d]),le.useEffect(()=>{localStorage.setItem("flight_sim_auto_weather",String(p))},[p]),le.useEffect(()=>{if(!p||t!=="playing")return;const T=setInterval(()=>{h(V=>{const R=[ji.Sunny,ji.Misty,ji.Stormy].filter(nt=>nt!==V);return R[Math.floor(Math.random()*R.length)]})},3e4);return()=>clearInterval(T)},[p,t]);const[$,Lt]=le.useState(null),Gt=le.useRef({isDragging:!1,startX:0,startY:0,inputX:0,inputY:0}),qt=le.useRef(null),ft=le.useRef(null),Dt=le.useRef(null),Nt=le.useRef(null),Jt=le.useRef(null),ve=le.useRef(null),ae=le.useRef(null),Un=le.useRef(null),Ue=le.useRef(null),Se=le.useRef(null),Ye=le.useRef(null),ze=le.useRef(null),[Zn,Kn]=le.useState(()=>{const T=localStorage.getItem("flight_sim_audio_enabled");return T!==null?T==="true":!0}),Nn=le.useRef({ctx:null,engineOsc1:null,engineOsc2:null,engineGain:null,engineFilter:null,engineLfo:null,natureNode:null,natureFilter:null,natureGain:null,waveLfo:null,masterGain:null,birdTimer:null,enabled:!1}),me=le.useRef({scene:null,camera:null,renderer:null,clock:null,input:{x:0,y:0,throttle:.55},timeOfDay:12,airplane:null,terrainManager:null,cloudManager:null,lights:null,skyDome:null,visualSun:null,visualMoon:null,starField:null,rainParticles:null,activeKeys:new Set,frames:0,lastFpsTime:0,currentWeatherParams:{ambientIntensity:.6,sunIntensity:1.4,fogDensity:25e-5,stormFactor:0}}),ye=(T,V)=>{const Z=xa.noise2D(T*1e-4,V*1e-4),pt=(xa.fBm(T*3e-4,V*3e-4,3,.4,2)+1)*.5*40,Mt=35+(xa.fBm(T*2e-4,V*2e-4,4,.5,2)+1)*.5*120,Tt=xa.fBm(T*8e-5,V*8e-5,3,.55,2),Pt=xa.fBm(T*35e-5,V*35e-5,5,.5,2.1),G=1-Math.abs(Pt),vt=Ee.smoothstep(G,0,1),at=Math.pow(vt,2.2),At=Ee.smoothstep(at,0,1),zt=(xa.fBm(T*25e-5,V*25e-5,3,.45,2)+1)*.5,Rt=Math.max(0,Math.min(1,(Tt- -.25)/.65)),Wt=45+zt*55+At*520*(.15+.85*Rt),Ht=xa.fBm(T*25e-5,V*25e-5,4,.5,2),He=Ht*5-Math.floor(Ht*5),Ve=Ee.smoothstep(He,.7,1),kn=40+(Math.floor(Ht*5)/5+Ve*(1/5))*380,sa=xa.fBm(T*35e-5,V*35e-5,5,.55,2.2),Ln=Math.pow(1-Math.abs(sa),3),On=20+Ee.smoothstep(Ln,0,1)*460,fi=xa.fBm(T*3e-4,V*3e-4,4,.55,2.15),yn=25+Math.pow(Ee.smoothstep(1-Math.abs(fi),.1,1),3)*340;let xe=0,qn=ne.Alpine;if(Z<-.35)xe=pt,qn=ne.Tropical;else if(Z<-.28){const Ie=Ee.smoothstep(Z,-.35,-.28);xe=Ee.lerp(pt,Mt,Ie),qn=Ie<.5?ne.Tropical:ne.Forest}else if(Z<-.08)xe=Mt,qn=ne.Forest;else if(Z<-.02){const Ie=Ee.smoothstep(Z,-.08,-.02);xe=Ee.lerp(Mt,Wt,Ie),qn=Ie<.5?ne.Forest:ne.Alpine}else if(Z<.15)xe=Wt,qn=ne.Alpine;else if(Z<.22){const Ie=Ee.smoothstep(Z,.15,.22);xe=Ee.lerp(Wt,kn,Ie),qn=Ie<.5?ne.Alpine:ne.Badlands}else if(Z<.38)xe=kn,qn=ne.Badlands;else if(Z<.45){const Ie=Ee.smoothstep(Z,.38,.45);xe=Ee.lerp(kn,On,Ie),qn=Ie<.5?ne.Badlands:ne.Volcanic}else if(Z<.58)xe=On,qn=ne.Volcanic;else if(Z<.65){const Ie=Ee.smoothstep(Z,.58,.65);xe=Ee.lerp(On,yn,Ie),qn=Ie<.5?ne.Volcanic:ne.Arctic}else xe=yn,qn=ne.Arctic;xe+=xa.noise2D(T*.015,V*.015)*2.2;const Vi=xa.noise2D(T*65e-5,V*65e-5),ki=Math.abs(Vi),Pi=.23;if(ki<.38){const Ie=ki/.38,ri=Ee.smoothstep(Ie,.15,1),en=110;xe>en&&(xe=Ee.lerp(en+(xe-en)*.15,xe,ri))}if(ki<Pi){const Ie=ki/Pi,ri=Ee.smoothstep(Ie,0,1),en=25.5+xa.noise2D(T*.004,V*.004)*2,za=Ee.lerp(en,xe,ri);let w=1;Z<-.25&&(w=Ee.smoothstep(Z,-.35,-.25)),xe=Ee.lerp(xe,za,w)}const si=xa.fBm(T*3e-5,V*3e-5,3,.5,2);if(si<-.05){const Ie=Math.max(0,Math.min(1,(-si-.05)*6));xe=Ee.lerp(xe,4,Ie)}else if(si>0){const Ie=Ee.smoothstep(si,0,.42);xe+=Ie*160}const Ii=Math.abs(xe-Tn);if(Ii<8){const Ie=Ee.smoothstep(Ii/8,0,1),ri=Tn+(xe-Tn)*.4;xe=Ee.lerp(ri,xe,Ie)}const _i=xe-Tn,jn=12;if(Math.abs(_i)<jn){const Ie=Math.abs(_i)/jn,ri=2.4,en=(ri-1)*Math.pow(Ie,3)+(2-2*ri)*Ie*Ie+ri*Ie,za=_i<0?-1:1;xe=Tn+za*en*jn}return{height:Math.max(4,xe),biomeType:qn,bValue:Z}},ei=T=>{const V=Ys[ne.Tropical],Z=Ys[ne.Forest],R=Ys[ne.Alpine],pt=Ys[ne.Badlands],nt=Ys[ne.Volcanic],Mt=Ys[ne.Arctic],Tt=new St,Pt=new St,G=new St,vt=new St;if(T<-.35)Tt.copy(V.sand),Pt.copy(V.grass),G.copy(V.rock),vt.copy(V.snow);else if(T<-.28){const at=Ee.smoothstep(T,-.35,-.28);Tt.copy(V.sand).lerp(Z.sand,at),Pt.copy(V.grass).lerp(Z.grass,at),G.copy(V.rock).lerp(Z.rock,at),vt.copy(V.snow).lerp(Z.snow,at)}else if(T<-.08)Tt.copy(Z.sand),Pt.copy(Z.grass),G.copy(Z.rock),vt.copy(Z.snow);else if(T<-.02){const at=Ee.smoothstep(T,-.08,-.02);Tt.copy(Z.sand).lerp(R.sand,at),Pt.copy(Z.grass).lerp(R.grass,at),G.copy(Z.rock).lerp(R.rock,at),vt.copy(Z.snow).lerp(R.snow,at)}else if(T<.15)Tt.copy(R.sand),Pt.copy(R.grass),G.copy(R.rock),vt.copy(R.snow);else if(T<.22){const at=Ee.smoothstep(T,.15,.22);Tt.copy(R.sand).lerp(pt.sand,at),Pt.copy(R.grass).lerp(pt.grass,at),G.copy(R.rock).lerp(pt.rock,at),vt.copy(R.snow).lerp(pt.snow,at)}else if(T<.38)Tt.copy(pt.sand),Pt.copy(pt.grass),G.copy(pt.rock),vt.copy(pt.snow);else if(T<.45){const at=Ee.smoothstep(T,.38,.45);Tt.copy(pt.sand).lerp(nt.sand,at),Pt.copy(pt.grass).lerp(nt.grass,at),G.copy(pt.rock).lerp(nt.rock,at),vt.copy(pt.snow).lerp(nt.snow,at)}else if(T<.58)Tt.copy(nt.sand),Pt.copy(nt.grass),G.copy(nt.rock),vt.copy(nt.snow);else if(T<.65){const at=Ee.smoothstep(T,.58,.65);Tt.copy(nt.sand).lerp(Mt.sand,at),Pt.copy(nt.grass).lerp(Mt.grass,at),G.copy(nt.rock).lerp(Mt.rock,at),vt.copy(nt.snow).lerp(Mt.snow,at)}else Tt.copy(Mt.sand),Pt.copy(Mt.grass),G.copy(Mt.rock),vt.copy(Mt.snow);return{sand:Tt,grass:Pt,rock:G,snow:vt}},J=T=>{const V=fl[ne.Tropical],Z=fl[ne.Forest],R=fl[ne.Alpine],pt=fl[ne.Badlands],nt=fl[ne.Volcanic],Mt=fl[ne.Arctic],Tt=new St,Pt=new St;if(T<-.35)Tt.copy(V.color),Pt.copy(V.emissive);else if(T<-.28){const G=Ee.smoothstep(T,-.35,-.28);Tt.copy(V.color).lerp(Z.color,G),Pt.copy(V.emissive).lerp(Z.emissive,G)}else if(T<-.08)Tt.copy(Z.color),Pt.copy(Z.emissive);else if(T<-.02){const G=Ee.smoothstep(T,-.08,-.02);Tt.copy(Z.color).lerp(R.color,G),Pt.copy(Z.emissive).lerp(R.emissive,G)}else if(T<.15)Tt.copy(R.color),Pt.copy(R.emissive);else if(T<.22){const G=Ee.smoothstep(T,.15,.22);Tt.copy(R.color).lerp(pt.color,G),Pt.copy(R.emissive).lerp(pt.emissive,G)}else if(T<.38)Tt.copy(pt.color),Pt.copy(pt.emissive);else if(T<.45){const G=Ee.smoothstep(T,.38,.45);Tt.copy(pt.color).lerp(nt.color,G),Pt.copy(pt.emissive).lerp(nt.emissive,G)}else if(T<.58)Tt.copy(nt.color),Pt.copy(nt.emissive);else if(T<.65){const G=Ee.smoothstep(T,.58,.65);Tt.copy(nt.color).lerp(Mt.color,G),Pt.copy(nt.emissive).lerp(Mt.emissive,G)}else Tt.copy(Mt.color),Pt.copy(Mt.emissive);return{color:Tt,emissive:Pt}},An=()=>{i("loading");const T=()=>{const ke=document.createElement("canvas");ke.width=256,ke.height=256;const Xe=ke.getContext("2d");if(Xe)for(let ge=0;ge<256;ge++)for(let Pe=0;Pe<256;Pe++){const Rn=Math.sin(ge*.08+Pe*.04)*.4,fe=Math.cos(ge*.05-Pe*.09)*.35,pn=Math.sin((ge-Pe)*.12)*.15,ni=Math.sin(ge*.22)*Math.cos(Pe*.22)*.1,Yn=Rn+fe+pn+ni,hi=Math.floor(128+Yn*127),Fi=Math.max(0,Math.min(255,hi));Xe.fillStyle=`rgb(${Fi},${Fi},${Fi})`,Xe.fillRect(ge,Pe,1,1)}const Ce=new Ly(ke);return Ce.wrapS=Dc,Ce.wrapT=Dc,Ce.repeat.set(800,800),Ce},V=new by;V.fog=new dm(5938132,35e-5);const Z=new Pa(60,window.innerWidth/window.innerHeight,.5,95e3),R=new XA({antialias:!0,logarithmicDepthBuffer:!0});R.setSize(window.innerWidth,window.innerHeight),R.shadowMap.enabled=!0,R.shadowMap.type=tx,R.toneMapping=em,R.toneMappingExposure=1,r.current&&(r.current.innerHTML="",r.current.appendChild(R.domElement));const pt=new Zy,nt={alpineTrunk:new gn({color:5913896,roughness:.9,flatShading:!0}),alpineFoliage:new gn({color:1721108,roughness:.8,flatShading:!0}),tropicalTrunk:new gn({color:7557685,roughness:.9,flatShading:!0}),tropicalLeaf:new gn({color:2263842,roughness:.7,flatShading:!0}),badlandsCactus:new gn({color:5597999,roughness:.8,flatShading:!0}),volcanicTrunk:new gn({color:1710618,roughness:.95,flatShading:!0}),arcticTrunk:new gn({color:4009247,roughness:.95,flatShading:!0}),arcticFoliage:new gn({color:14741500,roughness:.85,flatShading:!0}),forestTrunk:new gn({color:5059353,roughness:.9,flatShading:!0}),forestFoliage:new gn({color:1128475,roughness:.75,flatShading:!0}),rockAlpine:new gn({color:6380631,roughness:.9,flatShading:!0}),rockVolcanic:new gn({color:1447449,roughness:.9,flatShading:!0}),rockBadlands:new gn({color:10371869,roughness:.9,flatShading:!0}),rockTropical:new gn({color:9077886,roughness:.9,flatShading:!0}),reedStalk:new gn({color:4023853,roughness:.8,flatShading:!0}),reedHead:new gn({color:5519659,roughness:.9,flatShading:!0}),basaltColumn:new gn({color:1315862,roughness:.95,flatShading:!0}),shrubFoliage:new gn({color:3038238,roughness:.85,flatShading:!0}),flowerStem:new gn({color:5220408,roughness:.9,flatShading:!0}),flowerRed:new gn({color:14496563,roughness:.8,flatShading:!0}),flowerYellow:new gn({color:14535731,roughness:.8,flatShading:!0}),flowerPurple:new gn({color:10040285,roughness:.8,flatShading:!0})},Mt=new ai(.15,.25,4.5,5);Mt.translate(0,2.25,0);const Tt=Mt.attributes.position;for(let ke=0;ke<Tt.count;ke++){const Xe=Tt.getY(ke);Tt.setX(ke,Tt.getX(ke)+Math.sin(Xe*.4)*.4)}Mt.computeVertexNormals();const Pt={alpineTrunk:{geometry:new ai(.3,.5,4,5).translate(0,2,0),material:nt.alpineTrunk},alpineFoliage1:{geometry:new gs(2.4,3,5).translate(0,3.5,0),material:nt.alpineFoliage},alpineFoliage2:{geometry:new gs(1.8,2.6,5).translate(0,5.1,0),material:nt.alpineFoliage},alpineFoliage3:{geometry:new gs(1.2,2.2,5).translate(0,6.7,0),material:nt.alpineFoliage},tropicalTrunk:{geometry:Mt,material:nt.tropicalTrunk},tropicalLeaf:{geometry:new as(.5,.05,2.8).translate(0,0,1.4),material:nt.tropicalLeaf},badlandsCactusTrunk:{geometry:new ai(.2,.2,3,5).translate(0,1.5,0),material:nt.badlandsCactus},badlandsCactusArm1:{geometry:new ai(.15,.15,1.2,5),material:nt.badlandsCactus},badlandsCactusArm2:{geometry:new ai(.15,.15,1,5),material:nt.badlandsCactus},volcanicTrunk:{geometry:new ai(.18,.35,4,5).translate(0,2,0),material:nt.volcanicTrunk},volcanicBranch:{geometry:new ai(.08,.12,1.8,5),material:nt.volcanicTrunk},arcticTrunk:{geometry:new ai(.2,.4,3.5,5).translate(0,1.75,0),material:nt.arcticTrunk},arcticFoliage1:{geometry:new gs(2,2.8,5).translate(0,3,0),material:nt.arcticFoliage},arcticFoliage2:{geometry:new gs(1.4,2.2,5).translate(0,4.4,0),material:nt.arcticFoliage},forestTrunk:{geometry:new ai(.35,.55,4.5,5).translate(0,2.25,0),material:nt.forestTrunk},forestFoliage1:{geometry:new Ki(1.8,1).translate(0,4.5,0),material:nt.forestFoliage},forestFoliage2:{geometry:new Ki(1.3,1).translate(1,5,0),material:nt.forestFoliage},forestFoliage3:{geometry:new Ki(1.2,1).translate(-.8,5.2,.5),material:nt.forestFoliage},rockAlpine:{geometry:new Ki(1,1),material:nt.rockAlpine},rockVolcanic:{geometry:new Ki(1,1),material:nt.rockVolcanic},rockBadlands:{geometry:new Ki(1,1),material:nt.rockBadlands},rockTropical:{geometry:new Ki(1,1),material:nt.rockTropical},reedStalk:{geometry:new ai(.1,.1,1,4).translate(0,.5,0),material:nt.reedStalk},reedHead:{geometry:new ai(.18,.18,1,4).translate(0,.5,0),material:nt.reedHead},basaltColumn:{geometry:new ai(1,1,1,6),material:nt.basaltColumn},bush:{geometry:new Ki(.7,1).translate(0,.35,0),material:nt.shrubFoliage},flowerStem:{geometry:new ai(.04,.04,.6,4).translate(0,.3,0),material:nt.flowerStem},flowerRed:{geometry:new Sa(.18,5,5).translate(0,.6,0),material:nt.flowerRed},flowerYellow:{geometry:new Sa(.18,5,5).translate(0,.6,0),material:nt.flowerYellow},flowerPurple:{geometry:new Sa(.18,5,5).translate(0,.6,0),material:nt.flowerPurple}};Ye.current=nt,ze.current=Pt;const G=new Vy(11657724,4020786,.6);V.add(G);const vt=new Rv(16774630,1.4);vt.castShadow=!0,vt.shadow.mapSize.width=2048,vt.shadow.mapSize.height=2048,vt.shadow.camera.near=10,vt.shadow.camera.far=3e3;const at=600;vt.shadow.camera.left=-at,vt.shadow.camera.right=at,vt.shadow.camera.top=at,vt.shadow.camera.bottom=-at,vt.shadow.bias=-3e-4,V.add(vt);const At=new Rv(11193599,.4);At.castShadow=!0,At.shadow.mapSize.width=1024,At.shadow.mapSize.height=1024,At.shadow.camera.near=10,At.shadow.camera.far=3e3;const zt=600;At.shadow.camera.left=-zt,At.shadow.camera.right=zt,At.shadow.camera.top=zt,At.shadow.camera.bottom=-zt,At.shadow.bias=-3e-4,V.add(At);const Rt=3500,Wt=new aa,Ht=new Float32Array(Rt*3);for(let ke=0;ke<Rt;ke++){const Xe=Math.random()*Math.PI*2,Ce=Math.acos(Math.random()*2-1),ge=65e3+Math.random()*1e4;Ht[ke*3]=ge*Math.sin(Ce)*Math.cos(Xe),Ht[ke*3+1]=Math.abs(ge*Math.sin(Ce)*Math.sin(Xe)),Ht[ke*3+2]=ge*Math.cos(Ce)}Wt.setAttribute("position",new Fa(Ht,3));const He=new Zp({color:16777215,size:1.5,transparent:!0,opacity:0,sizeAttenuation:!1}),Ve=new Sv(Wt,He);V.add(Ve);const ui=new Sa(75e3,32,32),kn=new Ma({color:5938132,side:Hi,fog:!1}),sa=new ue(ui,kn);V.add(sa);const Ln=new Sa(1625,24,24),ra=new Ma({color:16776437,fog:!1}),On=new ue(Ln,ra),fi=new Sa(3500,16,16),fn=new Ma({color:16773836,transparent:!0,opacity:.45,blending:dl,side:Hi,fog:!1}),yn=new ue(fi,fn);On.add(yn);const xe=new Sa(6500,16,16),qn=new Ma({color:16767334,transparent:!0,opacity:.22,blending:dl,side:Hi,fog:!1}),Vi=new ue(xe,qn);On.add(Vi),V.add(On);const ki=new Sa(950,24,24),Pi=new Ma({color:14279664,fog:!1}),si=new ue(ki,Pi),Ii=new Sa(2125,16,16),_i=new Ma({color:10079487,transparent:!0,opacity:.25,blending:dl,side:Hi,fog:!1}),jn=new ue(Ii,_i);si.add(jn),V.add(si);const Ie=4e3,ri=new aa,en=new Float32Array(Ie*3);for(let ke=0;ke<Ie;ke++)en[ke*3]=(Math.random()-.5)*400,en[ke*3+1]=Math.random()*200,en[ke*3+2]=(Math.random()-.5)*400;ri.setAttribute("position",new Fa(en,3));const za=new Zp({color:7838122,size:.8,transparent:!0,opacity:0}),w=new Sv(ri,za);V.add(w);const W=new ya,st=new gn({color:14540253,roughness:.25,metalness:.85,flatShading:!1}),ot=new yc({color:52479,shininess:120,transparent:!0,opacity:.65}),rt=new gn({color:2236962,roughness:.7}),kt=new ai(.8,.5,6,32);kt.rotateX(Math.PI/2);const Zt=new ue(kt,st);Zt.castShadow=!0,Zt.receiveShadow=!0,W.add(Zt);const Vt=new Sa(.7,32,32);Vt.scale(1,.7,2);const Qt=new ue(Vt,ot);Qt.position.set(0,.8,.5),W.add(Qt);const Kt=new as(10,.1,2),ee=new ue(Kt,st);ee.position.set(0,0,.5),ee.castShadow=!0,W.add(ee);const be=new ai(.1,.45,1.8,8);be.rotateZ(Math.PI/2),be.translate(-.9,0,0);const $t=new ue(be,st);$t.scale.set(1,.25,1.3),$t.position.set(0,.1,-2.4),$t.castShadow=!0,W.add($t);const Ze=new ai(.45,.1,1.8,8);Ze.rotateZ(Math.PI/2),Ze.translate(.9,0,0);const vn=new ue(Ze,st);vn.scale.set(1,.25,1.3),vn.position.set(0,.1,-2.4),vn.castShadow=!0,W.add(vn);const Ut=new ai(.12,.55,2,8);Ut.translate(0,1,0);const Ft=new ue(Ut,st);Ft.scale.set(.22,1,1.4),Ft.position.set(0,.1,-2.55),Ft.rotation.x=.12,Ft.castShadow=!0,W.add(Ft);const jt=new as(.08,.4,1.8);jt.translate(0,.2,.9);const It=new ue(jt,st);It.position.set(0,.1,-2.5),It.rotation.x=-.22,W.add(It);const wn=new as(3.5,.1,.2),se=new ue(wn,rt);se.position.set(0,0,3.1),se.castShadow=!0,W.add(se);const xn=new gs(.8,1,32);xn.rotateX(Math.PI/2);const Bn=new ue(xn,st);Bn.position.z=3.1,W.add(Bn);const bn=new ai(.12,.12,.9,12);bn.rotateX(Math.PI/2);const Qn=new gn({color:14540253,roughness:.12,metalness:.95}),Ae=new ue(bn,Qn);Ae.position.set(-.28,-.42,-2.95),Ae.rotation.set(.08,-.06,0),Ae.castShadow=!0,W.add(Ae);const on=new ue(bn,Qn);on.position.set(.28,-.42,-2.95),on.rotation.set(.08,.06,0),on.castShadow=!0,W.add(on);const Si=new ai(.09,.09,.05,12);Si.rotateX(Math.PI/2);const Ke=new ue(Si,rt);Ke.position.set(-.28,-.42,-3.4),W.add(Ke);const yi=new ue(Si,rt);yi.position.set(.28,-.42,-3.4),W.add(yi);const Ui=new ya;Ui.position.set(-1,-.8,.8);const oa=new ai(.08,.08,1.2,8);oa.rotateZ(.2);const la=new ue(oa,st);la.castShadow=!0,Ui.add(la);const ba=new ai(.35,.35,.18,16);ba.rotateZ(Math.PI/2);const ls=new ue(ba,rt);ls.position.set(-.1,-.55,0),ls.castShadow=!0,Ui.add(ls),W.add(Ui);const ha=new ya;ha.position.set(1,-.8,.8);const Ji=new ue(oa,st);Ji.rotation.z=-.2,Ji.castShadow=!0,ha.add(Ji);const go=new ue(ba,rt);go.position.set(.1,-.55,0),go.castShadow=!0,ha.add(go),W.add(ha);const Or=new gn({color:13373713,roughness:.3}),Tl=new as(1.2,.12,2.05),$s=new ue(Tl,Or);$s.position.set(-3.5,.01,.5),W.add($s);const Ba=new ue(Tl,Or);Ba.position.set(3.5,.01,.5),W.add(Ba);const Al=new as(.15,.4,1.45),bs=new ue(Al,Or);bs.position.set(0,1.4,-2.62),bs.rotation.x=.12,W.add(bs);const cs=new Ma({color:16724787}),wl=new Ma({color:3407667}),_o=new Ma({color:16777215}),vo=new Sa(.15,8,8),Pr=new ue(vo,cs);Pr.position.set(-5,0,.5),W.add(Pr);const Ir=new ue(vo,wl);Ir.position.set(5,0,.5),W.add(Ir);const xo=new ue(vo,_o);xo.position.set(0,2.05,-3.25),W.add(xo),W.rotation.order="YXZ";const Jn=new Xy(16774621,250,1200,Math.PI/4.5,.5,1);Jn.position.set(0,0,3.2),Jn.castShadow=!0,Jn.shadow.mapSize.width=512,Jn.shadow.mapSize.height=512,Jn.shadow.camera.near=5,Jn.shadow.camera.far=1200,Jn.shadow.bias=-.002;const Qa=new Mi;Qa.position.set(0,0,100),W.add(Qa),Jn.target=Qa,W.add(Jn);const tr=new gs(80,500,16,1,!0);tr.rotateX(Math.PI/2),tr.translate(0,0,250);const Fr=new Ma({color:16774092,transparent:!0,opacity:.15,blending:dl,side:ja,depthWrite:!1}),Rl=new ue(tr,Fr);Rl.position.set(0,0,3.2),W.add(Rl),V.add(W),W.position.set(0,480,0);const Mo=[],Cl=new Sa(.35,8,8),zr=new gn({color:16777215,transparent:!0,opacity:.65,roughness:.95,metalness:.05,depthWrite:!1});for(let ke=0;ke<60;ke++){const Xe=new ue(Cl,zr.clone());Xe.visible=!1,V.add(Xe),Mo.push({mesh:Xe,life:0})}const Es=new Ur(35e3,35e3,64,64);Es.rotateX(-Math.PI/2);const Dl=[],Tf=Es.attributes.position.count;for(let ke=0;ke<Tf;ke++)Dl.push(.09,.37,.45);Es.setAttribute("color",new ci(Dl,3));const Af=new yc({color:16777215,vertexColors:!0,emissive:70423,specular:5605546,shininess:75,bumpMap:T(),bumpScale:.11,transparent:!0,opacity:.9,flatShading:!1}),Ul=new ue(Es,Af);Ul.position.y=Tn,V.add(Ul);const Nl=(ke,Xe)=>{const Ce=new ya,ge=new St(Ys[Xe].rock),Pe=Ys[Xe].sand,Rn=Ys[Xe].grass,fe=[];for(let Cn=0;Cn<5;Cn++){const di=ge.clone(),zi=(Cn-2)*.06;di.multiplyScalar(1+zi),fe.push(new gn({color:di,roughness:.85+Math.random()*.15,flatShading:!0}))}const pn=[];for(let Cn=0;Cn<3;Cn++){const di=ge.clone().lerp(Pe,.4+Cn*.12);pn.push(new gn({color:di,roughness:.9,flatShading:!0}))}const ni=[];for(let Cn=0;Cn<3;Cn++){const di=ge.clone().lerp(Rn,.35+Cn*.1);ni.push(new gn({color:di,roughness:.88,flatShading:!0}))}let Yn=120,hi=200,Fi=.95,Xi=22,Ea=16,da=6,Pn=15;ke==="sea_arch"?(Yn=70+Math.random()*20,hi=90+Math.random()*30,Fi=.85,Xi=16,Ea=14,da=4,Pn=6):ke==="mountain_tunnel"?(Yn=130+Math.random()*30,hi=320+Math.random()*80,Fi=1.05,Xi=26,Ea=22,da=10,Pn=35):ke==="canyon_bridge"?(Yn=110+Math.random()*20,hi=60+Math.random()*20,Fi=.7,Xi=24,Ea=15,da=3,Pn=10):(Yn=100+Math.random()*30,hi=170+Math.random()*50,Fi=.95,Xi=22,Ea=16,da=6,Pn=15);for(let Cn=0;Cn<Ea;Cn++){const di=Cn/(Ea-1)*Math.PI;for(let zi=0;zi<da;zi++){const bi=(zi-(da-1)/2)/(da-1||1),oe=bi*hi,_e=Math.sin(bi*Math.PI*1.5)*(Yn*.22),de=Math.cos(bi*Math.PI*1.5)*(Yn*.08),re=1+.25*Math.sin(bi*Math.PI*2.5),De=Yn*re,mn=Math.cos(di)*De+_e,pe=Math.sin(di)*(De*Fi)+de,Be=(Math.sin(oe*.05)+Math.cos(di*3))*5,je=(Math.cos(oe*.05)+Math.sin(di*2.5))*5,dn=(Math.random()-.5)*6,nn=pe+je;let Qe=fe[Math.floor(Math.random()*fe.length)];nn<24?Qe=pn[Math.floor(Math.random()*pn.length)]:nn<60&&(Qe=ni[Math.floor(Math.random()*ni.length)]);const Ne=Xi+Math.random()*(Xi*.6),ce=new Ki(Ne,1),we=new ue(ce,Qe);if(we.position.set(mn+Be,pe+je,oe+dn),we.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),we.castShadow=!0,we.receiveShadow=!0,Ce.add(we),Cn===0||Cn===Ea-1){const Re=-12+Math.random()*8,Je=Ne*(1.35+Math.random()*.45),Dn=new Ki(Je,1),Ei=pn[Math.floor(Math.random()*pn.length)],oi=new ue(Dn,Ei);oi.position.set(mn+Be+(Math.random()-.5)*16,Re,oe+dn+(Math.random()-.5)*16),oi.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),oi.castShadow=!0,oi.receiveShadow=!0,Ce.add(oi)}}}const Ts=[65450,57343,16711935,16759552,16720469],hn=new gs(2.5,12,4);for(let Cn=0;Cn<Pn;Cn++){const di=Ts[Math.floor(Math.random()*Ts.length)],zi=new Ma({color:di}),bi=new ue(hn,zi),oe=.25*Math.PI+Math.random()*.5*Math.PI,_e=Math.random()-.5,de=_e*(hi-20),re=Math.sin(_e*Math.PI*1.5)*(Yn*.22),De=Math.cos(_e*Math.PI*1.5)*(Yn*.08),mn=1+.25*Math.sin(_e*Math.PI*2.5),pe=Yn*mn,Be=Math.cos(oe)*(pe-8)+re,je=Math.sin(oe)*(pe*Fi-8)+De;bi.position.set(Be,je,de),bi.rotation.x=Math.PI,bi.rotation.z=oe-Math.PI/2,Ce.add(bi)}return Ce.radius=Yn,Ce.depth=hi,Ce.heightMult=Fi,Ce.wiggleAmpX=Yn*.22,Ce.type=ke,Ce},wf=(ke,Xe,Ce,ge,Pe,Rn)=>{const fe=new ya;fe.position.set(ke,Xe,Ce);const pn=14+Math.random()*8,ni=new Ur(pn,Rn);ni.translate(0,-Rn/2,1);const Yn=new yc({color:13693695,emissive:1718858,specular:16777215,shininess:100,transparent:!0,opacity:.8,side:ja,flatShading:!0}),hi=new ue(ni,Yn);hi.rotation.y=Pe+Math.PI/2,fe.add(hi);const Fi=40,Xi=new Ur(pn*1.1,Fi);Xi.rotateX(-Math.PI/2),Xi.translate(0,.25,-Fi/2);const Ea=new yc({color:800594,specular:6084351,shininess:120,transparent:!0,opacity:.85,flatShading:!0}),da=new ue(Xi,Ea);da.rotation.y=Pe+Math.PI/2,fe.add(da);const Pn=new gn({color:5657424,roughness:.9,flatShading:!0}),Ts=new Ki(6+Math.random()*4,1),hn=new ue(Ts,Pn);hn.position.set(-pn/2-4,1.2,-10),hn.rotation.set(Math.random(),Math.random(),Math.random()),hn.scale.set(1.2,1.8,1.2);const Cn=new Ki(6+Math.random()*4,1),di=new ue(Cn,Pn);di.position.set(pn/2+4,1.2,-10),di.rotation.set(Math.random(),Math.random(),Math.random()),di.scale.set(1.2,1.8,1.2);const zi=new ya;zi.add(hn),zi.add(di),zi.rotation.y=Pe+Math.PI/2,fe.add(zi);const bi=new gm(.1,pn*1.4,12);bi.rotateX(-Math.PI/2),bi.translate(0,-Rn+.35,3.5);const oe=new yc({color:1134197,specular:16777215,shininess:150,transparent:!0,opacity:.92,side:ja,flatShading:!0}),_e=new ue(bi,oe);_e.rotation.y=Pe+Math.PI/2,fe.add(_e);const de=new ya;de.position.set(0,-Rn,3.5);const re=7+Math.floor(Math.random()*4);for(let je=0;je<re;je++){const dn=je/re*Math.PI*2+Math.random()*.3,nn=pn*1.2+Math.random()*4,Qe=4.5+Math.random()*4,Ne=new Ki(Qe,1),ce=new ue(Ne,Pn);ce.position.set(Math.cos(dn)*nn,Qe*.35-2,Math.sin(dn)*nn),ce.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),ce.scale.set(1.2+Math.random()*.4,.75+Math.random()*.6,1.2+Math.random()*.4),ce.castShadow=!0,ce.receiveShadow=!0,de.add(ce)}de.rotation.y=Pe+Math.PI/2,fe.add(de);const De=new ya;De.position.set(0,-Rn,3.5);const mn=new Ma({color:16777215,transparent:!0,opacity:.85}),pe=[],Be=6+Math.floor(Math.random()*5);for(let je=0;je<Be;je++){const dn=3+Math.random()*4,nn=new Ki(dn,1),Qe=new ue(nn,mn.clone());Qe.position.set((Math.random()-.5)*pn,Math.random()*3,(Math.random()-.5)*5),De.add(Qe),pe.push(Qe)}return fe.add(De),fe.foams=pe,fe.timeOffset=Math.random()*100,fe};class Oc{constructor(Xe,Ce){this.caves=[],this.waterfalls=[],this.gridX=Xe,this.gridZ=Ce,this.mesh=new ya;const ge=Xe*gi,Pe=Ce*gi,Rn=new Ur(gi,gi,Tc,Tc);Rn.rotateX(-Math.PI/2);const fe=Rn.attributes.position,pn=[],ni=new St,Yn=Tc+1;for(let oe=0;oe<fe.count;oe++){const _e=fe.getX(oe)+ge,de=fe.getZ(oe)+Pe,{height:re}=ye(_e,de);fe.setY(oe,re)}Rn.computeVertexNormals();const hi=Rn.attributes.normal;for(let oe=0;oe<fe.count;oe++){const _e=fe.getX(oe)+ge,de=fe.getZ(oe)+Pe,re=fe.getY(oe),{bValue:De}=ye(_e,de),pe=1-hi.getY(oe);let Be=re,je=re,dn=re,nn=re;const Qe=Math.floor(oe/Yn),Ne=oe%Yn;Ne>0&&(Be=fe.getY(oe-1)),Ne<Tc&&(je=fe.getY(oe+1)),Qe>0&&(dn=fe.getY(oe-Yn)),Qe<Tc&&(nn=fe.getY(oe+Yn));const ce=(Be+je+dn+nn)/4,we=re-ce;let Re=1;we<0?Re=Ee.clamp(1+we*.04,.45,1):Re=Ee.clamp(1+we*.01,1,1.15);const Je=ei(De);let Dn=new St;if(re<60)Dn.copy(Je.grass);else if(re<190){const Ta=Ee.smoothstep(re,60,190);Dn.copy(Je.grass).lerp(Je.rock,Ta)}else if(re<300){const Ta=Ee.smoothstep(re,190,300);Dn.copy(Je.rock).lerp(Je.snow,Ta)}else Dn.copy(Je.snow);const Ei=Tn-5,oi=Tn+16;if(re<oi){const Ta=Ee.smoothstep(re,Ei,oi);ni.copy(Je.sand).lerp(Dn,Ta)}else ni.copy(Dn);if(pe>.22){const Ta=Ee.clamp((pe-.22)/.18,0,1);ni.lerp(Je.rock,Ta)}ni.multiplyScalar(Re);const As=xa.noise2D(_e*.05,de*.05)*.04;ni.offsetHSL(0,0,As),pn.push(ni.r,ni.g,ni.b)}Rn.setAttribute("color",new ci(pn,3));const Fi=new gn({vertexColors:!0,roughness:.88,metalness:.03,flatShading:!1}),Xi=new ue(Rn,Fi);Xi.position.set(ge,0,Pe),Xi.receiveShadow=!0,Xi.castShadow=!0,this.mesh.add(Xi);const Ea=ge,da=Pe,{biomeType:Pn}=ye(Ea,da),Ts={alpineTrunk:[],alpineFoliage1:[],alpineFoliage2:[],alpineFoliage3:[],tropicalTrunk:[],tropicalLeaf:[],badlandsCactusTrunk:[],badlandsCactusArm1:[],badlandsCactusArm2:[],volcanicTrunk:[],volcanicBranch:[],arcticTrunk:[],arcticFoliage1:[],arcticFoliage2:[],forestTrunk:[],forestFoliage1:[],forestFoliage2:[],forestFoliage3:[],rockAlpine:[],rockVolcanic:[],rockBadlands:[],rockTropical:[],reedStalk:[],reedHead:[],basaltColumn:[],bush:[],flowerStem:[],flowerRed:[],flowerYellow:[],flowerPurple:[]},hn=(oe,_e,de,re)=>{const De=new Wn,mn=new ho().setFromEuler(de);De.compose(_e,mn,re),Ts[oe].push(De)};let Cn=10+Math.floor(Math.random()*8);Pn===ne.Badlands?Cn=0:Pn===ne.Volcanic?Cn=7+Math.floor(Math.random()*6):Pn===ne.Forest?Cn=18+Math.floor(Math.random()*12):Pn===ne.Arctic&&(Cn=4+Math.floor(Math.random()*4));for(let oe=0;oe<Cn;oe++){let _e=0,de=0,re=!1;for(let pe=0;pe<40;pe++){_e=ge+(Math.random()-.5)*gi*.85,de=Pe+(Math.random()-.5)*gi*.85;const{height:Be}=ye(_e,de);if(Be>Tn+5&&Be<300){re=!0;break}}if(!re)continue;const De=50+Math.floor(Math.random()*45),mn=30+Math.random()*20;for(let pe=0;pe<De;pe++){const Be=Math.random()*Math.PI*2,je=Math.pow(Math.random(),1.4)*mn,dn=_e+Math.cos(Be)*je,nn=de+Math.sin(Be)*je,{height:Qe}=ye(dn,nn);if(Qe>Tn+4&&Qe<320){const Ne=(.7+Math.random()*1.3)*1.35,ce=new Q(Ne,Ne,Ne),we=new Di((Math.random()-.5)*.08,Math.random()*Math.PI*2,(Math.random()-.5)*.08),Re=new Q(dn,Qe-.15,nn);if(Pn===ne.Alpine)hn("alpineTrunk",Re,we,ce),hn("alpineFoliage1",Re,we,ce),hn("alpineFoliage2",Re,we,ce),hn("alpineFoliage3",Re,we,ce);else if(Pn===ne.Tropical){hn("tropicalTrunk",Re,we,ce);for(let Je=0;Je<6;Je++){const Dn=new Di(-.3,we.y+Je*Math.PI/3,we.z),Ei=new Q(Ne,Ne,Ne),oi=new Q(0,4.3*Ne,0).applyEuler(we).add(Re);hn("tropicalLeaf",oi,Dn,Ei)}}else if(Pn===ne.Volcanic){hn("volcanicTrunk",Re,we,ce);for(let Je=0;Je<3;Je++){const Dn=new Di(we.x,we.y+Math.random()*Math.PI*2,we.z+(Je%2===0?1:-1)*.7),Ei=new Q(0,(2.5+Je*.5)*Ne,0).applyEuler(we).add(Re),oi=new Q(Ne,Ne,Ne);hn("volcanicBranch",Ei,Dn,oi)}}else Pn===ne.Forest?(hn("forestTrunk",Re,we,ce),hn("forestFoliage1",Re,we,ce),hn("forestFoliage2",Re,we,ce),hn("forestFoliage3",Re,we,ce)):Pn===ne.Arctic&&(hn("arcticTrunk",Re,we,ce),hn("arcticFoliage1",Re,we,ce),hn("arcticFoliage2",Re,we,ce));if(Math.random()<.65){const Je=1+Math.floor(Math.random()*2);for(let Dn=0;Dn<Je;Dn++){const Ei=Math.random()*Math.PI*2,oi=1.5+Math.random()*2.5,As=dn+Math.cos(Ei)*oi,Ta=nn+Math.sin(Ei)*oi,{height:So}=ye(As,Ta);if(So>Tn+4&&So<320){const Ll=.55+Math.random()*.9,Df=new Q(Ll,Ll*(.85+Math.random()*.3),Ll),Uf=new Di(0,Math.random()*Math.PI*2,0),Nf=new Q(As,So-.05,Ta);hn("bush",Nf,Uf,Df)}}}}}}if(Pn===ne.Alpine||Pn===ne.Tropical||Pn===ne.Forest){const oe=10+Math.floor(Math.random()*8);for(let _e=0;_e<oe;_e++){const de=ge+(Math.random()-.5)*gi*.85,re=Pe+(Math.random()-.5)*gi*.85,{height:De}=ye(de,re);if(De>Tn+8&&De<110){const mn=25+Math.floor(Math.random()*30),pe=8+Math.random()*12;for(let Be=0;Be<mn;Be++){const je=Math.random()*Math.PI*2,dn=Math.sqrt(Math.random())*pe,nn=de+Math.cos(je)*dn,Qe=re+Math.sin(je)*dn,{height:Ne}=ye(nn,Qe);if(Ne>Tn+6&&Ne<120){const ce=.6+Math.random()*.7,we=new Q(ce,ce,ce),Re=new Di((Math.random()-.5)*.15,Math.random()*Math.PI*2,(Math.random()-.5)*.15),Je=new Q(nn,Ne-.02,Qe);hn("flowerStem",Je,Re,we);const Dn=["flowerRed","flowerYellow","flowerPurple"],Ei=Dn[Math.floor(Math.random()*Dn.length)];hn(Ei,Je,Re,we)}}}}}const di=8+Math.floor(Math.random()*8);for(let oe=0;oe<di;oe++){let _e=0,de=0,re=!1;for(let Be=0;Be<30;Be++){_e=ge+(Math.random()-.5)*gi*.85,de=Pe+(Math.random()-.5)*gi*.85;const{height:je}=ye(_e,de);if(je>Tn+2&&je<320){re=!0;break}}if(!re)continue;const De=15+Math.floor(Math.random()*15),mn=15+Math.random()*12;let pe="rockAlpine";Pn===ne.Volcanic?pe="rockVolcanic":Pn===ne.Badlands?pe="rockBadlands":Pn===ne.Tropical&&(pe="rockTropical");for(let Be=0;Be<De;Be++){const je=Math.random()*Math.PI*2,dn=Math.pow(Math.random(),1.2)*mn,nn=_e+Math.cos(je)*dn,Qe=de+Math.sin(je)*dn,{height:Ne}=ye(nn,Qe);if(Ne>Tn-5&&Ne<340){const ce=1.8+Math.random()*4.5;let we=Ne-ce*.2;Be>De*.6&&(we+=ce*.4+Math.random()*1.8);const Re=new Q(nn,we,Qe),Je=new Di(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),Dn=new Q((1.1+Math.random()*.5)*ce,(.65+Math.random()*.7)*ce,(1.1+Math.random()*.5)*ce);hn(pe,Re,Je,Dn)}}}const zi=12+Math.floor(Math.random()*10);for(let oe=0;oe<zi;oe++){let _e=0,de=0,re=!1;for(let pe=0;pe<60;pe++){_e=ge+(Math.random()-.5)*gi*.85,de=Pe+(Math.random()-.5)*gi*.85;const{height:Be}=ye(_e,de);if(Be>=Tn+.3&&Be<=Tn+4.5){re=!0;break}}if(!re)continue;const De=45+Math.floor(Math.random()*40),mn=12+Math.random()*12;for(let pe=0;pe<De;pe++){const Be=Math.random()*Math.PI*2,je=Math.pow(Math.random(),1.1)*mn,dn=_e+Math.cos(Be)*je,nn=de+Math.sin(Be)*je,{height:Qe}=ye(dn,nn);if(Qe>=Tn-2&&Qe<=Tn+8){const Ne=(2.8+Math.random()*2.5)*1.35,ce=(.05+Math.random()*.06)*1.35,we=new Q(dn,Qe-.1,nn),Re=new Di((Math.random()-.5)*.2,Math.random()*Math.PI*2,(Math.random()-.5)*.2),Je=new Q(ce/.1,Ne,ce/.1);hn("reedStalk",we,Re,Je);const Dn=.7+Math.random()*.5,Ei=new Q(ce/.1,Dn,ce/.1),oi=new Q(0,Ne-Dn,0).applyEuler(Re).add(we);hn("reedHead",oi,Re,Ei)}}}if(Pn===ne.Badlands){const oe=12+Math.floor(Math.random()*9);for(let _e=0;_e<oe;_e++){const de=ge+(Math.random()-.5)*gi*.8,re=Pe+(Math.random()-.5)*gi*.8,{height:De}=ye(de,re);if(De>Tn+5&&De<240){const mn=40+Math.floor(Math.random()*30),pe=20+Math.random()*15;for(let Be=0;Be<mn;Be++){const je=Math.random()*Math.PI*2,dn=Math.pow(Math.random(),1.1)*pe,nn=de+Math.cos(je)*dn,Qe=re+Math.sin(je)*dn,{height:Ne}=ye(nn,Qe);if(Ne>Tn+4&&Ne<260){const ce=(.8+Math.random()*1.2)*1.35,we=new Q(ce,ce,ce),Re=new Di(0,Math.random()*Math.PI*2,0),Je=new Q(nn,Ne-.15,Qe);hn("badlandsCactusTrunk",Je,Re,we);const Dn=new Di(Re.x,Re.y,Re.z-Math.PI/4),Ei=new Q(.5*ce,1.8*ce,0).applyEuler(Re).add(Je);hn("badlandsCactusArm1",Ei,Dn,we);const oi=new Di(Re.x,Re.y,Re.z+Math.PI/4),As=new Q(-.5*ce,1.4*ce,0).applyEuler(Re).add(Je);hn("badlandsCactusArm2",As,oi,we)}}}}}else if(Pn===ne.Volcanic){const oe=12+Math.floor(Math.random()*9);for(let _e=0;_e<oe;_e++){const de=ge+(Math.random()-.5)*gi*.8,re=Pe+(Math.random()-.5)*gi*.8,{height:De}=ye(de,re);if(De>Tn+5&&De<250){const mn=55+Math.floor(Math.random()*45),pe=20+Math.random()*15;for(let Be=0;Be<mn;Be++){const je=Math.random()*Math.PI*2,dn=Math.pow(Math.random(),1.2)*pe,nn=de+Math.cos(je)*dn,Qe=re+Math.sin(je)*dn,{height:Ne}=ye(nn,Qe);if(Ne>Tn+4&&Ne<300){const ce=10+Math.random()*25,we=2+Math.random()*1.5,Re=new Q(nn,Ne+ce/2-2,Qe),Je=new Di((Math.random()-.5)*.05,Math.floor(Math.random()*6)*(Math.PI/3),(Math.random()-.5)*.05),Dn=new Q(we,ce,we);hn("basaltColumn",Re,Je,Dn)}}}}}for(const[oe,_e]of Object.entries(Ts))if(_e.length>0){const de=Pt[oe],re=new xv(de.geometry,de.material,_e.length);re.castShadow=!0,re.receiveShadow=!0;for(let De=0;De<_e.length;De++)re.setMatrixAt(De,_e[De]);re.instanceMatrix.needsUpdate=!0,this.mesh.add(re)}if(Xe%2===0||Ce%2===0)for(let oe=0;oe<15;oe++){const _e=ge+(Math.random()-.5)*(gi*.8),de=Pe+(Math.random()-.5)*(gi*.8),{height:re,biomeType:De}=ye(_e,de);if(re>65&&re<300&&De!==ne.Tropical){const pe=Math.random()*Math.PI*2,Be=Math.cos(pe)*18,je=Math.sin(pe)*18,{height:dn}=ye(_e+Be,de+je),nn=re-dn;if(nn>35&&nn<150){const Qe=wf(_e,re,de,dn,pe,nn);this.mesh.add(Qe),this.waterfalls.push(Qe);break}}}if(Math.random()<.11){const oe=ge+(Math.random()-.5)*(gi*.6),_e=Pe+(Math.random()-.5)*(gi*.6),{height:de,biomeType:re}=ye(oe,_e);let De="classic",mn=de;if(de>=Tn+.5&&de<=Tn+25?(De="sea_arch",mn=Tn+2):re===ne.Badlands?(De="canyon_bridge",mn=de-4):de>180?(De="mountain_tunnel",mn=de-10):(De="classic",mn=de-8),mn>Tn-10){const pe=Nl(De,re);pe.position.set(oe,mn,_e),pe.rotation.y=Math.random()*Math.PI*2,this.mesh.add(pe),this.caves.push({x:oe,y:mn,z:_e,rotationY:pe.rotation.y,radius:pe.radius,depth:pe.depth,heightMult:pe.heightMult,wiggleAmpX:pe.wiggleAmpX,type:De})}}V.add(this.mesh)}destroy(){V.remove(this.mesh);const Xe=Ce=>{Ce instanceof xv||(Ce instanceof ue&&(Ce.geometry&&Ce.geometry.dispose(),Ce.material&&(Array.isArray(Ce.material)?Ce.material.forEach(ge=>ge.dispose()):Ce.material.dispose())),Ce.children&&Ce.children.forEach(Xe))};this.mesh.children.forEach(Xe)}}class Rf{constructor(){this.chunks=new Map,this.viewDistance=I.current,this.bgWater=Ul;const Xe=0,Ce=0;for(let ge=-this.viewDistance;ge<=this.viewDistance;ge++)for(let Pe=-this.viewDistance;Pe<=this.viewDistance;Pe++){const Rn=Xe+ge,fe=Ce+Pe,pn=`${Rn},${fe}`;this.chunks.set(pn,new Oc(Rn,fe))}}update(Xe){this.bgWater&&(this.bgWater.position.x=Xe.x,this.bgWater.position.z=Xe.z);const Ce=Math.floor(Xe.x/gi),ge=Math.floor(Xe.z/gi),Pe=new Set;for(let fe=-this.viewDistance;fe<=this.viewDistance;fe++)for(let pn=-this.viewDistance;pn<=this.viewDistance;pn++)Pe.add(`${Ce+fe},${ge+pn}`);for(const[fe,pn]of this.chunks.entries())Pe.has(fe)||(pn.destroy(),this.chunks.delete(fe));let Rn=0;for(const fe of Pe)if(!this.chunks.has(fe)){const[pn,ni]=fe.split(",").map(Number);if(this.chunks.set(fe,new Oc(pn,ni)),Rn++,Rn>=1)break}}}class Cf{constructor(){this.clouds=[],this.areaSize=4500;const Xe=new gn({color:16777215,transparent:!0,opacity:.82,roughness:.9,flatShading:!1});for(let Ce=0;Ce<40;Ce++){const ge=new ya,Pe=5+Math.floor(Math.random()*6);for(let Rn=0;Rn<Pe;Rn++){const fe=25+Math.random()*30,pn=12+Math.random()*15,ni=25+Math.random()*30,Yn=new Ki(1,1);Yn.scale(fe,pn,ni);const hi=new ue(Yn,Xe);hi.position.set((Math.random()-.5)*fe*1.4,(Math.random()-.5)*pn*.45,(Math.random()-.5)*ni*1.4),hi.castShadow=!1,hi.receiveShadow=!1,ge.add(hi)}ge.position.set((Math.random()-.5)*this.areaSize,350+Math.random()*350,(Math.random()-.5)*this.areaSize),V.add(ge),this.clouds.push({mesh:ge,speed:12+Math.random()*20})}}update(Xe,Ce){this.clouds.forEach(ge=>{ge.mesh.position.x+=ge.speed*Ce;const Pe=ge.mesh.position.x-Xe.x,Rn=ge.mesh.position.z-Xe.z,fe=this.areaSize/2;Pe>fe&&(ge.mesh.position.x-=this.areaSize),Pe<-fe&&(ge.mesh.position.x+=this.areaSize),Rn>fe&&(ge.mesh.position.z-=this.areaSize),Rn<-fe&&(ge.mesh.position.z+=this.areaSize)})}}me.current.scene=V,me.current.camera=Z,me.current.renderer=R,me.current.clock=pt,me.current.airplane={mesh:W,speed:0,maxSpeed:4.2,rotParams:{x:0,y:0,z:0},targetRot:{x:0,y:0,z:0},propeller:se,particles:Mo,tailNavLight:xo,flashlight:Jn,lightCone:Rl},me.current.terrainManager=new Rf,me.current.cloudManager=new Cf,me.current.lights={hemiLight:G,sun:vt,moon:At},me.current.skyDome=sa,me.current.visualSun=On,me.current.visualMoon=si,me.current.starField=Ve,me.current.rainParticles=w,i("ready")};le.useEffect(()=>{const T=Mt=>{if(t!=="playing"||Mt.target.closest("button")||Mt.target.closest("input")||Mt.target.closest("select"))return;const Tt=Gt.current;Tt.isDragging=!0,Tt.startX=Mt.clientX,Tt.startY=Mt.clientY,Tt.inputX=0,Tt.inputY=0,Lt({x:Mt.clientX,y:Mt.clientY,currentX:Mt.clientX,currentY:Mt.clientY})},V=Mt=>{const Tt=Gt.current;if(!Tt.isDragging)return;const Pt=Mt.clientX-Tt.startX,G=Mt.clientY-Tt.startY,vt=100,at=lt.current?-1:1;Tt.inputX=Math.max(-1,Math.min(1,Pt/vt)),Tt.inputY=Math.max(-1,Math.min(1,G/vt*at)),Lt(At=>At?{...At,currentX:Mt.clientX,currentY:Mt.clientY}:null)},Z=()=>{const Mt=Gt.current;Mt.isDragging=!1,Mt.inputX=0,Mt.inputY=0,Lt(null)},R=Mt=>{me.current.activeKeys.add(Mt.code),(Mt.code==="KeyF"||Mt.code==="KeyL")&&!Mt.repeat&&A(Tt=>!Tt),Mt.code==="KeyX"&&!Mt.repeat&&D(Tt=>!Tt)},pt=Mt=>{me.current.activeKeys.delete(Mt.code)};window.addEventListener("pointerdown",T),window.addEventListener("pointermove",V),window.addEventListener("pointerup",Z),window.addEventListener("pointercancel",Z),window.addEventListener("keydown",R),window.addEventListener("keyup",pt);const nt=()=>{const Mt=me.current;Mt.camera&&Mt.renderer&&(Mt.camera.aspect=window.innerWidth/window.innerHeight,Mt.camera.updateProjectionMatrix(),Mt.renderer.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",nt),()=>{window.removeEventListener("pointerdown",T),window.removeEventListener("pointermove",V),window.removeEventListener("pointerup",Z),window.removeEventListener("pointercancel",Z),window.removeEventListener("keydown",R),window.removeEventListener("keyup",pt),window.removeEventListener("resize",nt)}},[t]),le.useEffect(()=>{let T;const V=Z=>{var ee,be,$t,Ze,vn;T=requestAnimationFrame(V);const R=me.current;if(t!=="playing"||!R.scene||!R.camera||!R.renderer||!R.airplane||!R.clock)return;const pt=Math.min(R.clock.getDelta(),.1);if(R.frames++,Z-R.lastFpsTime>=1e3&&(ae.current&&(ae.current.innerText=R.frames.toString()),R.frames=0,R.lastFpsTime=Z),R.timeOfDay=(R.timeOfDay+d*pt)%24,Un.current){const Ut=Math.floor(R.timeOfDay).toString().padStart(2,"0"),Ft=Math.floor(R.timeOfDay%1*60).toString().padStart(2,"0");Un.current.innerText=`${Ut}:${Ft}`}const nt=R.timeOfDay;let Mt=new St,Tt=new St,Pt=0,G=0,vt=new St(16777215),at=new St(11193599),At=Cr[0],zt=Cr[Cr.length-1];for(let Ut=0;Ut<Cr.length-1;Ut++)if(nt>=Cr[Ut].hour&&nt<=Cr[Ut+1].hour){At=Cr[Ut],zt=Cr[Ut+1];break}const Rt=zt.hour-At.hour,Wt=Rt>0?(nt-At.hour)/Rt:0;Mt.lerpColors(At.skyColor,zt.skyColor,Wt),Tt.lerpColors(At.fogColor,zt.fogColor,Wt),vt.lerpColors(At.sunColor,zt.sunColor,Wt),at.lerpColors(At.moonColor,zt.moonColor,Wt),Pt=Ee.lerp(At.sunIntensity,zt.sunIntensity,Wt),G=Ee.lerp(At.moonIntensity,zt.moonIntensity,Wt);const Ht=qA[c],He=.65*pt;R.currentWeatherParams.ambientIntensity+=(Ht.ambientIntensity-R.currentWeatherParams.ambientIntensity)*He,R.currentWeatherParams.sunIntensity+=(Ht.sunIntensity-R.currentWeatherParams.sunIntensity)*He;const Ve=I.current===1?1.4:I.current===2?1:I.current===3?.7:I.current===4?.5:.35,ui=Ht.fogDensity*Ve;R.currentWeatherParams.fogDensity+=(ui-R.currentWeatherParams.fogDensity)*He;const kn=c===ji.Stormy?1:0;R.currentWeatherParams.stormFactor+=(kn-R.currentWeatherParams.stormFactor)*He,Pt*=R.currentWeatherParams.sunIntensity;const sa=1-R.currentWeatherParams.stormFactor*.72;if(Mt.multiplyScalar(sa),Tt.multiplyScalar(sa),vt.lerp(new St(3816522),R.currentWeatherParams.stormFactor),R.skyDome&&R.skyDome.material.color.copy(Mt),R.scene&&R.scene.fog&&(R.scene.fog.color.copy(Tt),R.scene.fog.density=R.currentWeatherParams.fogDensity),R.renderer.setClearColor(Tt),R.starField){const Ut=R.starField.material;let Ft=0;(nt>=19.5||nt<5.5)&&(Ft=nt>=20.5||nt<4.5?.95:.4),Ut.opacity+=(Ft-Ut.opacity)*.1,R.starField.rotation.y+=.005*pt}const Ln=(nt-6)/24*Math.PI*2,ra=c===ji.Stormy?.12:c===ji.Misty?.35:1;if(R.visualSun){R.visualSun.position.set(R.airplane.mesh.position.x+Math.cos(Ln)*45e3,R.airplane.mesh.position.y+Math.sin(Ln)*45e3,R.airplane.mesh.position.z+4e3),R.visualSun.visible=Math.sin(Ln)>-.05;const Ut=R.visualSun.material;Ut.opacity=ra,R.visualSun.children.forEach((Ft,jt)=>{const It=Ft.material;It.opacity=(jt===0?.45:.22)*ra})}if(R.visualMoon){const Ut=Ln+Math.PI;R.visualMoon.position.set(R.airplane.mesh.position.x+Math.cos(Ut)*45e3,R.airplane.mesh.position.y+Math.sin(Ut)*45e3,R.airplane.mesh.position.z-4e3),R.visualMoon.visible=Math.sin(Ut)>-.05;const Ft=R.visualMoon.material;Ft.opacity=ra,R.visualMoon.children.forEach(jt=>{const It=jt.material;It.opacity=.25*ra})}if(R.lights){R.lights.hemiLight.color.copy(Mt),R.lights.hemiLight.intensity=R.currentWeatherParams.ambientIntensity,R.lights.sun.position.set(R.airplane.mesh.position.x+Math.cos(Ln)*900,R.airplane.mesh.position.y+Math.max(.1,Math.sin(Ln))*900,R.airplane.mesh.position.z+400),R.lights.sun.intensity=Pt,R.lights.sun.color.copy(vt),R.lights.sun.target.position.copy(R.airplane.mesh.position),R.lights.sun.target.updateMatrixWorld();const Ut=Ln+Math.PI;R.lights.moon.position.set(R.airplane.mesh.position.x+Math.cos(Ut)*900,R.airplane.mesh.position.y+Math.max(.1,Math.sin(Ut))*900,R.airplane.mesh.position.z-400),R.lights.moon.intensity=G,R.lights.moon.color.copy(at),R.lights.moon.target.position.copy(R.airplane.mesh.position),R.lights.moon.target.updateMatrixWorld()}if(R.rainParticles){const Ut=R.rainParticles.material;if(c===ji.Stormy){Ut.opacity+=(.65-Ut.opacity)*.1;const Ft=R.rainParticles.geometry.attributes.position;for(let jt=0;jt<Ft.count;jt++){let It=Ft.getY(jt)-180*pt;It<0&&(It=200,Ft.setX(jt,(Math.random()-.5)*400),Ft.setZ(jt,(Math.random()-.5)*400)),Ft.setY(jt,It)}Ft.needsUpdate=!0,R.rainParticles.position.copy(R.airplane.mesh.position),R.rainParticles.position.y-=80,Math.random()<.007&&R.lights&&(R.lights.hemiLight.intensity=4,R.lights.sun.intensity=3,R.scene.fog&&R.scene.fog.color.setHex(16777215))}else Ut.opacity+=(0-Ut.opacity)*.1}if(R.terrainManager){const Ut=Z*.001;for(const Ft of R.terrainManager.chunks.values())for(const jt of Ft.waterfalls){const It=jt.timeOffset||0;(jt.foams||[]).forEach((se,xn)=>{const Bn=2+xn%3*1.2,bn=(Ut*Bn+xn*.4+It)%1,Ae=(1+xn%2*.5)*(1+bn*1.8);se.scale.set(Ae,Ae,Ae),se.position.y=bn*4.5;const on=se.material;on.opacity=(1-bn)*.85})}}let On=0,fi=0;R.activeKeys.has("ArrowLeft")||R.activeKeys.has("KeyA")?On=-1:(R.activeKeys.has("ArrowRight")||R.activeKeys.has("KeyD"))&&(On=1),R.activeKeys.has("ArrowUp")||R.activeKeys.has("KeyW")?fi=-.75:(R.activeKeys.has("ArrowDown")||R.activeKeys.has("KeyS"))&&(fi=.75),R.activeKeys.has("Space")?R.input.throttle=Math.min(R.input.throttle+1.2*pt,1):(R.activeKeys.has("ShiftLeft")||R.activeKeys.has("KeyQ"))&&(R.input.throttle=Math.max(R.input.throttle-1.2*pt,0));const fn=Gt.current;fn.isDragging&&(On=fn.inputX,fi=fn.inputY);const yn=7.5*pt;if(R.input.x+=(On-R.input.x)*yn,R.input.y+=(fi-R.input.y)*yn,Ot.current){if(R.airplane.rotParams.x+=R.input.y*3.5*pt,R.airplane.rotParams.z-=R.input.x*5*pt,R.airplane.rotParams.x=(R.airplane.rotParams.x+Math.PI)%(Math.PI*2),R.airplane.rotParams.x<0&&(R.airplane.rotParams.x+=Math.PI*2),R.airplane.rotParams.x-=Math.PI,R.airplane.rotParams.z=(R.airplane.rotParams.z+Math.PI)%(Math.PI*2),R.airplane.rotParams.z<0&&(R.airplane.rotParams.z+=Math.PI*2),R.airplane.rotParams.z-=Math.PI,Math.abs(R.input.x)<.05){const Ut=Math.round(R.airplane.rotParams.z/Math.PI)*Math.PI;R.airplane.rotParams.z+=(Ut-R.airplane.rotParams.z)*1.5*pt}R.airplane.rotParams.y-=Math.sin(R.airplane.rotParams.z)*pt*1.2}else{R.airplane.targetRot.z=-R.input.x*1;const Ft=.8;R.airplane.targetRot.x=R.input.y*Ft;const jt=2.4*pt;R.airplane.rotParams.x+=(R.airplane.targetRot.x-R.airplane.rotParams.x)*jt,R.airplane.rotParams.z+=(R.airplane.targetRot.z-R.airplane.rotParams.z)*jt,R.airplane.rotParams.y-=R.airplane.rotParams.z*pt*.6}if(R.airplane.mesh.rotation.set(R.airplane.rotParams.x,R.airplane.rotParams.y,R.airplane.rotParams.z),R.airplane.flashlight&&R.airplane.lightCone){const Ut=X.current;if(R.airplane.flashlight.visible=Ut,R.airplane.lightCone.visible=Ut,Ut){let Ft=.08;c===ji.Stormy?Ft=.22:c===ji.Misty?Ft=.35:(nt<5||nt>20)&&(Ft=.16),R.airplane.lightCone.material.opacity=Ft}}const xe=R.input.throttle*R.airplane.maxSpeed;R.airplane.speed+=(xe-R.airplane.speed)*.05;const qn=new Q(0,0,1).applyQuaternion(R.airplane.mesh.quaternion);R.airplane.mesh.position.add(qn.multiplyScalar(R.airplane.speed)),R.airplane.propeller.rotation.z+=R.airplane.speed*.5+.15;const Vi=1;if(R.airplane.speed<Vi){const Ut=Math.pow(1-R.airplane.speed/Vi,2),Ft=Ut*1.5*(pt*60);R.airplane.mesh.position.y-=Ft,R.airplane.rotParams.x+=(-.45-R.airplane.rotParams.x)*.05*Ut*(pt*60)}if(R.airplane.tailNavLight){const Ut=Math.floor(Z/250)%4===0;R.airplane.tailNavLight.visible=Ut}if(R.airplane.speed>.5){const Ut=R.airplane.particles.find(jt=>jt.life<=0);if(Ut){Ut.life=45,Ut.mesh.visible=!0;const jt=new Q(-.28,-.42,-3.45).applyQuaternion(R.airplane.mesh.quaternion);Ut.mesh.position.copy(R.airplane.mesh.position).add(jt),Ut.mesh.scale.set(.3,.3,.3),Ut.mesh.rotation.copy(R.airplane.mesh.rotation)}const Ft=R.airplane.particles.find(jt=>jt.life<=0&&jt!==Ut);if(Ft){Ft.life=45,Ft.mesh.visible=!0;const jt=new Q(.28,-.42,-3.45).applyQuaternion(R.airplane.mesh.quaternion);Ft.mesh.position.copy(R.airplane.mesh.position).add(jt),Ft.mesh.scale.set(.3,.3,.3),Ft.mesh.rotation.copy(R.airplane.mesh.rotation)}}let ki=1,Pi=1,si=1;if(nt<5||nt>20)ki=.15,Pi=.16,si=.2;else if(nt>=5&&nt<8){const Ut=(nt-5)/3;ki=Ee.lerp(.15,1,Ut),Pi=Ee.lerp(.16,.65,Ut),si=Ee.lerp(.2,.45,Ut)}else if(nt>=17&&nt<20){const Ut=(nt-17)/3;ki=Ee.lerp(1,.15,Ut),Pi=Ee.lerp(.65,.16,Ut),si=Ee.lerp(.55,.2,Ut)}else ki=.95,Pi=.96,si=.98;let Ii=1,_i=new St(1,1,1);if(c===ji.Stormy?(Ii=.45,_i.setRGB(.55,.58,.62)):c===ji.Misty&&(Ii=.35,_i.setRGB(.85,.85,.87)),R.airplane.particles.forEach(Ut=>{if(Ut.life>0){Ut.life--,Ut.mesh.position.y+=.05+Math.sin(Ut.life*.1)*.015,Ut.mesh.position.x+=(Math.random()-.5)*.08,Ut.mesh.position.z+=(Math.random()-.5)*.08;const Ft=(45-Ut.life)/45,jt=.4+Ft*5.5;Ut.mesh.scale.set(jt,jt,jt);const It=Ut.mesh.material;if(Ft<.15){const wn=Ft/.15;It.color.setRGB(1,.95-wn*.25,.6-wn*.4),It.opacity=.9*Ii}else{const se=.95-(Ft-.15)/.85*.12;It.color.setRGB(se*ki*_i.r,(se+.01)*Pi*_i.g,(se+.04)*si*_i.b),It.opacity=(1-Ft)*.55*Ii}}else Ut.mesh.visible=!1}),R.terrainManager&&(R.terrainManager.update(R.airplane.mesh.position),R.terrainManager.bgWater)){const Ut=Z*.0012,Ft=R.terrainManager.bgWater.geometry,jt=Ft.attributes.position,It=Ft.attributes.color,wn=jt.count;for(let bn=0;bn<wn;bn++){const Qn=jt.getX(bn)+R.terrainManager.bgWater.position.x,Ae=jt.getZ(bn)+R.terrainManager.bgWater.position.z,on=Math.sin(Qn*.0035+Ut*.9)*1.8+Math.cos(Ae*.0045+Ut*1.2)*1.4+Math.sin((Qn+Ae)*.0018+Ut*.6)*1;jt.setY(bn,on);const{bValue:Si}=ye(Qn,Ae),Ke=J(Si!==void 0?Si:0);It&&It.setXYZ(bn,Ke.color.r,Ke.color.g,Ke.color.b)}jt.needsUpdate=!0,It&&(It.needsUpdate=!0),Ft.computeVertexNormals();const{bValue:se}=ye(R.airplane.mesh.position.x,R.airplane.mesh.position.z),xn=J(se!==void 0?se:0),Bn=R.terrainManager.bgWater.material;if(Bn.emissive.lerp(xn.emissive,.015),Bn.bumpMap){const Qn=R.terrainManager.bgWater.position.x/43.75,Ae=-R.terrainManager.bgWater.position.z/43.75;Bn.bumpMap.offset.x=Qn+Z*35e-6,Bn.bumpMap.offset.y=Ae+Z*-25e-6}}R.cloudManager&&R.cloudManager.update(R.airplane.mesh.position,pt);const jn=Nn.current;if(jn.enabled&&jn.ctx&&jn.ctx.state==="running"){const Ut=jn.ctx.currentTime,Ft=R.input.throttle,jt=R.airplane.speed/R.airplane.maxSpeed,It=38+Ft*32,wn=76+Ft*64,se=140+Ft*220;(ee=jn.engineOsc1)==null||ee.frequency.setTargetAtTime(It,Ut,.1),(be=jn.engineOsc2)==null||be.frequency.setTargetAtTime(wn,Ut,.1),($t=jn.engineFilter)==null||$t.frequency.setTargetAtTime(se,Ut,.15);const xn=Math.sin(Z*8e-4)*45+Math.cos(Z*5e-4)*25,Bn=320+jt*320+xn;(Ze=jn.natureFilter)==null||Ze.frequency.setTargetAtTime(Bn,Ut,.25);const bn=.22+jt*.18;(vn=jn.natureGain)==null||vn.gain.setTargetAtTime(bn,Ut,.3)}R.skyDome&&R.skyDome.position.set(R.airplane.mesh.position.x,R.airplane.mesh.position.y*.45,R.airplane.mesh.position.z);const Ie=new Q(0,7.8,-20).applyMatrix4(R.airplane.mesh.matrixWorld);R.camera.position.lerp(Ie,.1);const ri=R.airplane.mesh.position.clone().add(new Q(0,.8,20).applyQuaternion(R.airplane.mesh.quaternion));R.camera.lookAt(ri);const{height:en,biomeType:za}=ye(R.airplane.mesh.position.x,R.airplane.mesh.position.z);en!==void 0&&g(za);let w=!1,W=!1,st=!1,ot=Tn;if(R.terrainManager)for(const Ut of R.terrainManager.chunks.values())for(const Ft of Ut.caves){const jt=R.airplane.mesh.position.x-Ft.x,It=R.airplane.mesh.position.z-Ft.z,wn=Math.cos(-Ft.rotationY),se=Math.sin(-Ft.rotationY),xn=jt*wn-It*se,Bn=jt*se+It*wn,bn=R.airplane.mesh.position.y-Ft.y,Qn=Ft.depth/2;if(Math.abs(Bn)<=Qn+18){const Ae=Bn/Ft.depth,on=Math.sin(Ae*Math.PI*1.5)*Ft.wiggleAmpX,Si=Math.cos(Ae*Math.PI*1.5)*(Ft.radius*.08),Ke=1+.25*Math.sin(Ae*Math.PI*2.5),yi=Ft.radius*Ke,Ui=xn-on,oa=bn-Si,la=yi*Ft.heightMult,ba=Math.sqrt(Ui*Ui/(yi*yi)+oa*oa/(la*la));if(oa>=0)ba>=.86&&ba<=1.25?w=!0:ba>=.78&&ba<.86?W=!0:ba<.78&&(st=!0,ot=Ft.y);else{const ls=Math.abs(Ui+yi),ha=Math.abs(Ui-yi),Ji=16;ls<Ji||ha<Ji?w=!0:ls<Ji+10||ha<Ji+10?W=!0:Math.abs(Ui)<yi-Ji&&(st=!0,ot=Ft.y)}}}const rt=st?ot:en,kt=!st&&rt<Tn,Zt=kt?Tn:rt,Vt=Math.max(0,R.airplane.mesh.position.y-Zt);let Qt=!1,Kt="";if(Et.current&&(W?(Qt=!0,Kt="⚠️ WARNING: CAVERN COLLISION IMMINENT!"):!kt&&Vt<32&&Vt>=1.2?(Qt=!0,Kt="⚠️ WARNING: DANGEROUS ALTITUDE — RED ZONE!"):kt&&Vt<22&&Vt>=.35&&(Qt=!0,Kt="⚠️ WARNING: LOW ALTITUDE OVER WATER!")),Se.current&&(Qt?(Se.current.innerText=Kt,Se.current.style.display="flex",Math.floor(Z/150)%2===0?(Se.current.style.color="#ff1a1a",Se.current.style.borderColor="#ff1a1a",Se.current.style.boxShadow="0 0 35px rgba(255, 26, 26, 0.75)",Se.current.style.backgroundColor="rgba(255, 0, 0, 0.35)"):(Se.current.style.color="#ffffff",Se.current.style.borderColor="#ff9900",Se.current.style.boxShadow="0 0 15px rgba(255, 153, 0, 0.45)",Se.current.style.backgroundColor="rgba(0, 0, 0, 0.85)")):Se.current.style.display="none"),w?Bt("CRASHED INTO CAVE WALLS"):kt?R.airplane.mesh.position.y<Tn+.35&&Bt("CRASHED INTO OCEAN"):R.airplane.mesh.position.y<rt+1.2&&Bt("CRASHED INTO TERRAIN"),qt.current&&(qt.current.innerText=Math.round(R.airplane.speed*280).toString()),ft.current&&(ft.current.innerText=Math.round(R.airplane.mesh.position.y).toString()),Dt.current&&(Dt.current.innerText=Math.round(Vt).toString()),Nt.current&&(Nt.current.innerText=Math.round(R.input.throttle*100).toString()),Jt.current&&(Jt.current.innerText=Math.round(R.airplane.mesh.position.x).toString()),ve.current&&(ve.current.innerText=Math.round(R.airplane.mesh.position.z).toString()),Ue.current){const Ut=R.airplane.rotParams.z*(180/Math.PI),Ft=R.airplane.rotParams.x*55;Ue.current.style.transform=`translateY(-50%) rotate(${-Ut}deg)`,Ue.current.style.top=`${50+Ft}%`}R.renderer.render(R.scene,R.camera)};return T=requestAnimationFrame(V),()=>{cancelAnimationFrame(T),Ye.current&&Object.values(Ye.current).forEach(Z=>Z.dispose()),ze.current&&Object.values(ze.current).forEach(Z=>Z.geometry.dispose())}},[t,c,d]),le.useEffect(()=>()=>{var V,Z,R,pt,nt;const T=Nn.current;if(T.birdTimer&&(clearInterval(T.birdTimer),T.birdTimer=null),T.ctx){try{(V=T.engineOsc1)==null||V.stop(),(Z=T.engineOsc2)==null||Z.stop(),(R=T.engineLfo)==null||R.stop(),(pt=T.waveLfo)==null||pt.stop(),(nt=T.natureNode)==null||nt.stop(),T.ctx.close()}catch{}T.ctx=null,T.engineOsc1=null,T.engineOsc2=null,T.engineLfo=null,T.waveLfo=null,T.natureNode=null,T.enabled=!1}},[]),le.useEffect(()=>{An()},[]);const un=()=>{const T=Nn.current;if(!T.ctx)try{const V=window.AudioContext||window.webkitAudioContext,Z=new V;Z.state==="suspended"&&Z.resume(),T.ctx=Z;const R=Z.createGain();R.gain.setValueAtTime(0,Z.currentTime),R.connect(Z.destination),R.gain.linearRampToValueAtTime(.65,Z.currentTime+.8),T.masterGain=R;const pt=Z.createOscillator();pt.type="triangle",pt.frequency.setValueAtTime(40,Z.currentTime);const nt=Z.createOscillator();nt.type="sine",nt.frequency.setValueAtTime(80,Z.currentTime);const Mt=Z.createGain();Mt.gain.setValueAtTime(.6,Z.currentTime);const Tt=Z.createGain();Tt.gain.setValueAtTime(.35,Z.currentTime),pt.connect(Mt),nt.connect(Tt);const Pt=Z.createBiquadFilter();Pt.type="lowpass",Pt.frequency.setValueAtTime(140,Z.currentTime),Pt.Q.setValueAtTime(1.5,Z.currentTime),Mt.connect(Pt),Tt.connect(Pt);const G=Z.createOscillator();G.type="sine",G.frequency.setValueAtTime(12.5,Z.currentTime);const vt=Z.createGain();vt.gain.setValueAtTime(.2,Z.currentTime),G.connect(vt);const at=Z.createGain();at.gain.setValueAtTime(.22,Z.currentTime),vt.connect(at.gain),Pt.connect(at),at.connect(R),pt.start(),nt.start(),G.start(),T.engineOsc1=pt,T.engineOsc2=nt,T.engineLfo=G,T.engineFilter=Pt,T.engineGain=at;const At=Z.sampleRate*2,zt=Z.createBuffer(1,At,Z.sampleRate),Rt=zt.getChannelData(0);for(let Ln=0;Ln<At;Ln++)Rt[Ln]=Math.random()*2-1;const Wt=Z.createBufferSource();Wt.buffer=zt,Wt.loop=!0;const Ht=Z.createBiquadFilter();Ht.type="lowpass",Ht.frequency.setValueAtTime(260,Z.currentTime),Ht.Q.setValueAtTime(1.2,Z.currentTime);const He=Z.createOscillator();He.type="sine",He.frequency.setValueAtTime(.12,Z.currentTime);const Ve=Z.createGain();Ve.gain.setValueAtTime(180,Z.currentTime),He.connect(Ve),Ve.connect(Ht.frequency);const ui=Z.createGain();ui.gain.setValueAtTime(.14,Z.currentTime),He.connect(ui);const kn=Z.createGain();kn.gain.setValueAtTime(.25,Z.currentTime),ui.connect(kn.gain),Wt.connect(Ht),Ht.connect(kn),kn.connect(R),Wt.start(),He.start(),T.natureNode=Wt,T.natureFilter=Ht,T.natureGain=kn,T.waveLfo=He;const sa=()=>{if(!T.ctx||!T.enabled||T.ctx.state!=="running")return;const Ln=T.ctx.currentTime,ra=2+Math.floor(Math.random()*3);let On=0;for(let fi=0;fi<ra;fi++){const fn=T.ctx.createOscillator(),yn=T.ctx.createGain();fn.type="sine";const xe=2400+Math.random()*600,qn=xe+500+Math.random()*300,Vi=.05+Math.random()*.05;fn.frequency.setValueAtTime(xe,Ln+On),fn.frequency.exponentialRampToValueAtTime(qn,Ln+On+Vi),yn.gain.setValueAtTime(0,Ln+On),yn.gain.linearRampToValueAtTime(.012,Ln+On+Vi*.2),yn.gain.exponentialRampToValueAtTime(1e-4,Ln+On+Vi),fn.connect(yn),yn.connect(R),fn.start(Ln+On),fn.stop(Ln+On+Vi+.02),On+=Vi+.07+Math.random()*.05}};T.birdTimer=setInterval(()=>{Math.random()<.7&&sa()},7e3),T.enabled=!0,Kn(!0),localStorage.setItem("flight_sim_audio_enabled","true")}catch(V){console.warn("Failed to initialize Web Audio API:",V)}},P=T=>{try{const V=T.currentTime,Z=T.createOscillator();Z.type="sawtooth",Z.frequency.setValueAtTime(120,V),Z.frequency.exponentialRampToValueAtTime(20,V+1.2);const R=T.createBiquadFilter();R.type="lowpass",R.frequency.setValueAtTime(400,V),R.frequency.exponentialRampToValueAtTime(40,V+1);const pt=T.createGain();pt.gain.setValueAtTime(.9,V),pt.gain.exponentialRampToValueAtTime(.001,V+1.4),Z.connect(R),R.connect(pt),pt.connect(T.destination),Z.start(V),Z.stop(V+1.5);const nt=T.sampleRate*1.5,Mt=T.createBuffer(1,nt,T.sampleRate),Tt=Mt.getChannelData(0);for(let zt=0;zt<nt;zt++)Tt[zt]=Math.random()*2-1;const Pt=T.createBufferSource();Pt.buffer=Mt;const G=T.createBiquadFilter();G.type="bandpass",G.frequency.setValueAtTime(2e3,V),G.frequency.exponentialRampToValueAtTime(150,V+.9),G.Q.setValueAtTime(3,V);const vt=T.createGain();vt.gain.setValueAtTime(.5,V),vt.gain.exponentialRampToValueAtTime(.001,V+1.1),Pt.connect(G),G.connect(vt),vt.connect(T.destination),Pt.start(V),Pt.stop(V+1.2);const at=T.createOscillator();at.type="triangle",at.frequency.setValueAtTime(220,V),at.frequency.linearRampToValueAtTime(60,V+.6);const At=T.createGain();At.gain.setValueAtTime(.75,V),At.gain.exponentialRampToValueAtTime(.001,V+.7),at.connect(At),At.connect(T.destination),at.start(V),at.stop(V+.8)}catch(V){console.warn("Failed to synthesize crash sound:",V)}},S=()=>{var V,Z,R,pt;const T=Nn.current;if(T.birdTimer&&(clearInterval(T.birdTimer),T.birdTimer=null),T.ctx){P(T.ctx);try{(V=T.engineGain)==null||V.gain.setValueAtTime(T.engineGain.gain.value,T.ctx.currentTime),(Z=T.engineGain)==null||Z.gain.linearRampToValueAtTime(0,T.ctx.currentTime+.15),(R=T.natureGain)==null||R.gain.setValueAtTime(T.natureGain.gain.value,T.ctx.currentTime),(pt=T.natureGain)==null||pt.gain.linearRampToValueAtTime(0,T.ctx.currentTime+.15)}catch{}const nt=T.ctx,Mt=T.engineOsc1,Tt=T.engineOsc2,Pt=T.engineLfo,G=T.waveLfo,vt=T.natureNode;setTimeout(()=>{try{Mt==null||Mt.stop(),Tt==null||Tt.stop(),Pt==null||Pt.stop(),G==null||G.stop(),vt==null||vt.stop(),nt==null||nt.close()}catch{}},1600),T.ctx=null,T.engineOsc1=null,T.engineOsc2=null,T.engineLfo=null,T.natureNode=null,T.natureFilter=null,T.natureGain=null,T.waveLfo=null,T.enabled=!1}},et=()=>{var V,Z;const T=Nn.current;if(T.birdTimer&&(clearInterval(T.birdTimer),T.birdTimer=null),T.ctx){try{(V=T.masterGain)==null||V.gain.setValueAtTime(T.masterGain.gain.value,T.ctx.currentTime),(Z=T.masterGain)==null||Z.gain.linearRampToValueAtTime(0,T.ctx.currentTime+.3)}catch{}const R=T.ctx,pt=T.engineOsc1,nt=T.engineOsc2,Mt=T.engineLfo,Tt=T.waveLfo,Pt=T.natureNode;setTimeout(()=>{try{pt==null||pt.stop(),nt==null||nt.stop(),Mt==null||Mt.stop(),Tt==null||Tt.stop(),Pt==null||Pt.stop(),R==null||R.close()}catch{}},350),T.ctx=null,T.engineOsc1=null,T.engineOsc2=null,T.engineLfo=null,T.natureNode=null,T.natureFilter=null,T.natureGain=null,T.waveLfo=null,T.enabled=!1}Kn(!1),localStorage.setItem("flight_sim_audio_enabled","false")},ht=()=>{Nn.current.enabled?et():un()},xt=()=>{i("playing");const T=me.current;T.clock&&T.clock.start(),T.lastFpsTime=performance.now();const V=localStorage.getItem("flight_sim_audio_enabled");(V==="true"||V===null)&&un()},Bt=T=>{i("crashed"),l(T),S()},Xt=()=>{window.location.reload()};return _t.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-slate-900 select-none touch-none",children:[_t.jsx("div",{ref:r,className:"absolute inset-0 w-full h-full z-0"}),$&&_t.jsxs("div",{className:"absolute pointer-events-none z-30",style:{left:$.x,top:$.y,transform:"translate(-50%, -50%)"},children:[_t.jsx("div",{className:"w-20 h-20 rounded-full border-2 border-dashed border-sky-500/30 flex items-center justify-center animate-pulse",children:_t.jsx("div",{className:"w-2 h-2 rounded-full bg-sky-500/60 shadow-sm"})}),_t.jsx("div",{className:"absolute w-10 h-10 rounded-full bg-sky-500/10 border-2 border-sky-500/60 shadow-md flex items-center justify-center",style:{transform:`translate(${Math.max(-50,Math.min(50,$.currentX-$.x))}px, ${Math.max(-50,Math.min(50,$.currentY-$.y))}px)`,left:"calc(50% - 20px)",top:"calc(50% - 20px)"}})]}),t==="playing"&&_t.jsxs("div",{className:"absolute inset-0 w-full h-full pointer-events-none font-mono z-10 text-slate-300",children:[z?_t.jsxs("div",{className:"absolute top-5 left-5 bg-slate-950/80 border border-slate-800 backdrop-blur-md rounded-lg p-3 min-w-[180px] shadow-lg pointer-events-auto flex flex-col gap-1.5 transition-all duration-300",children:[_t.jsxs("div",{onClick:()=>E(!1),className:"flex items-center justify-between text-[10px] text-sky-400 font-bold uppercase tracking-wider cursor-pointer border-b border-slate-900 pb-1.5 mb-1 select-none",children:[_t.jsx("span",{children:"✈️ TELEMETRY"}),_t.jsx("span",{className:"text-xs text-slate-500 hover:text-sky-400 transition",children:"◀"})]}),_t.jsxs("div",{className:"flex flex-col gap-1",children:[_t.jsxs("div",{className:"flex justify-between text-slate-400 text-xs",children:[_t.jsx("span",{children:"SPD (SPEED):"}),_t.jsxs("span",{children:[_t.jsx("b",{ref:qt,className:"text-white font-bold font-mono",children:"0"})," KM/H"]})]}),_t.jsxs("div",{className:"flex justify-between text-slate-400 text-xs",children:[_t.jsx("span",{children:"ALT (ALTITUDE):"}),_t.jsxs("span",{children:[_t.jsx("b",{ref:ft,className:"text-white font-bold font-mono",children:"0"})," M"]})]}),_t.jsxs("div",{className:"flex justify-between text-slate-400 text-xs",children:[_t.jsx("span",{children:"GND (TERRAIN):"}),_t.jsxs("span",{children:[_t.jsx("b",{ref:Dt,className:"text-white font-bold font-mono",children:"0"})," M"]})]}),_t.jsxs("div",{className:"flex justify-between text-slate-400 text-xs",children:[_t.jsx("span",{children:"THR (THROTTLE):"}),_t.jsxs("span",{children:[_t.jsx("b",{ref:Nt,className:"text-white font-bold font-mono",children:"0"})," %"]})]})]})]}):_t.jsx("button",{onClick:()=>E(!0),className:"absolute top-5 left-5 w-9 h-9 rounded-full bg-slate-950/80 border border-slate-800 backdrop-blur-md flex items-center justify-center text-sky-400 hover:text-white hover:border-sky-500 transition shadow-lg cursor-pointer pointer-events-auto select-none",title:"Expand Telemetry",children:"▶"}),N?_t.jsxs("div",{className:"absolute top-[165px] left-5 bg-slate-950/80 border border-slate-800 backdrop-blur-md rounded-lg p-2.5 shadow-lg pointer-events-auto select-none flex flex-col items-center gap-1.5 transition-all duration-300",children:[_t.jsxs("div",{onClick:()=>Y(!1),className:"text-[9px] text-sky-400/80 tracking-wider font-semibold uppercase pb-1 border-b border-slate-800/80 w-full text-center flex items-center justify-between gap-2 cursor-pointer",children:[_t.jsx("span",{children:"THROTTLE"}),_t.jsx("span",{className:"text-[10px] text-slate-500 hover:text-sky-400 transition",children:"◀"})]}),_t.jsxs("div",{className:"flex flex-col items-center gap-2 mt-1",children:[_t.jsx("button",{onTouchStart:()=>me.current.activeKeys.add("Space"),onTouchEnd:()=>me.current.activeKeys.delete("Space"),onMouseDown:()=>me.current.activeKeys.add("Space"),onMouseUp:()=>me.current.activeKeys.delete("Space"),onMouseLeave:()=>me.current.activeKeys.delete("Space"),className:"w-11 h-11 bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-300 text-xl font-bold rounded flex items-center justify-center cursor-pointer select-none transition transform active:scale-95",title:"Increase throttle (Space)",children:"+"}),_t.jsx("button",{onTouchStart:()=>me.current.activeKeys.add("ShiftLeft"),onTouchEnd:()=>me.current.activeKeys.delete("ShiftLeft"),onMouseDown:()=>me.current.activeKeys.add("ShiftLeft"),onMouseUp:()=>me.current.activeKeys.delete("ShiftLeft"),onMouseLeave:()=>me.current.activeKeys.delete("ShiftLeft"),className:"w-11 h-11 bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-300 text-xl font-bold rounded flex items-center justify-center cursor-pointer select-none transition transform active:scale-95",title:"Decrease throttle (Shift)",children:"-"})]})]}):_t.jsx("button",{onClick:()=>Y(!0),className:"absolute top-[165px] left-5 w-9 h-9 rounded-full bg-slate-950/80 border border-slate-800 backdrop-blur-md flex items-center justify-center text-sky-400 hover:text-white hover:border-sky-500 transition shadow-lg cursor-pointer pointer-events-auto select-none",title:"Expand Throttle",children:"▶"}),q?_t.jsxs("div",{className:"absolute top-5 right-5 bg-slate-950/80 border border-slate-800 backdrop-blur-md rounded-lg p-3 min-w-[200px] text-right shadow-lg pointer-events-auto transition-all duration-300",children:[_t.jsxs("div",{onClick:()=>j(!1),className:"flex items-center justify-between text-[10px] text-sky-400 font-bold uppercase tracking-wider cursor-pointer border-b border-slate-900 pb-1.5 mb-1.5 select-none",children:[_t.jsx("span",{className:"text-xs text-slate-500 hover:text-sky-400 transition",children:"▶"}),_t.jsx("span",{children:"🧭 SENSORS & MAP"})]}),_t.jsxs("div",{className:"flex flex-col gap-1",children:[_t.jsxs("div",{className:"flex justify-between gap-4 text-xs text-slate-400",children:[_t.jsx("span",{children:"POS X:"}),_t.jsx("span",{ref:Jt,className:"text-white font-bold font-mono",children:"0"})]}),_t.jsxs("div",{className:"flex justify-between gap-4 text-xs text-slate-400",children:[_t.jsx("span",{children:"POS Z:"}),_t.jsx("span",{ref:ve,className:"text-white font-bold font-mono",children:"0"})]}),_t.jsxs("div",{className:"flex justify-between gap-4 border-t border-slate-900 pt-1.5 text-xs text-slate-400",children:[_t.jsx("span",{children:"BIOME:"}),_t.jsx("span",{className:"text-amber-400 font-bold",children:x})]}),_t.jsxs("div",{className:"flex justify-between gap-4 text-xs text-slate-400",children:[_t.jsx("span",{children:"WEATHER:"}),_t.jsx("span",{className:"text-sky-300 font-bold",children:c})]}),_t.jsxs("div",{className:"flex justify-between gap-4 text-xs text-slate-400",children:[_t.jsx("span",{children:"TIME:"}),_t.jsx("span",{ref:Un,className:"text-white font-bold font-mono",children:"12:00"})]}),_t.jsxs("div",{className:"flex justify-between gap-4 text-xs text-slate-500",children:[_t.jsx("span",{children:"FPS:"}),_t.jsx("span",{ref:ae,className:"font-mono",children:"60"})]})]})]}):_t.jsx("button",{onClick:()=>j(!0),className:"absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-950/80 border border-slate-800 backdrop-blur-md flex items-center justify-center text-sky-400 hover:text-white hover:border-sky-500 transition shadow-lg cursor-pointer pointer-events-auto select-none",title:"Expand Sensors",children:"◀"}),_t.jsx("div",{ref:Se,className:"absolute top-[28%] left-1/2 -translate-x-1/2 px-6 py-3.5 border-2 font-mono text-[13px] font-bold tracking-widest uppercase rounded-lg flex items-center justify-center pointer-events-none transition duration-150 shadow-2xl text-center z-50 min-w-[280px]",style:{display:"none"}}),gt?_t.jsxs("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 min-w-[240px] border border-slate-800 rounded-xl overflow-hidden bg-slate-950/60 backdrop-blur-md shadow-lg flex flex-col pointer-events-auto transition-all duration-300",children:[_t.jsxs("div",{onClick:()=>yt(!1),className:"text-[9px] text-sky-400 font-bold uppercase tracking-wider py-1 px-3 border-b border-slate-900 bg-slate-950/40 flex items-center justify-between cursor-pointer select-none",children:[_t.jsx("span",{children:"🧭 ARTIFICIAL HORIZON"}),_t.jsx("span",{className:"text-[10px] text-slate-500 hover:text-sky-400 transition",children:"▼"})]}),_t.jsxs("div",{className:"relative w-[240px] h-[100px] bg-slate-950/20 overflow-hidden",children:[_t.jsx("div",{ref:Ue,className:"absolute top-1/2 left-[-40px] right-[-40px] h-0.5 bg-sky-400"}),_t.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-0.5 bg-rose-500"})]})]}):_t.jsx("button",{onClick:()=>yt(!0),className:"absolute bottom-8 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-950/80 border border-slate-800 backdrop-blur-md flex items-center justify-center text-sky-400 hover:text-white hover:border-sky-500 transition shadow-lg cursor-pointer pointer-events-auto select-none",title:"Expand Horizon",children:"▲"}),it?_t.jsxs("div",{className:"absolute bottom-5 right-5 bg-slate-950/85 border border-slate-800 backdrop-blur-md rounded-xl p-3 shadow-xl pointer-events-auto flex flex-col gap-2 max-w-[280px] min-w-[250px] transition-all duration-300",children:[_t.jsxs("div",{onClick:()=>H(!1),className:"text-xs text-sky-400 border-b border-slate-800/80 pb-1.5 font-bold flex items-center justify-between cursor-pointer select-none",children:[_t.jsx("span",{children:"🛠️ CONTROL PANEL"}),_t.jsx("span",{className:"text-[10px] text-slate-500 hover:text-sky-400 transition",children:"▼"})]}),_t.jsxs("div",{className:"flex flex-col gap-2 mt-1",children:[_t.jsxs("div",{children:[_t.jsxs("div",{className:"text-[10px] text-slate-400 mb-1 flex justify-between items-center",children:[_t.jsx("span",{children:"WEATHER:"}),_t.jsx("button",{onClick:T=>{T.stopPropagation(),m(!p)},className:`px-1.5 py-0.5 text-[8px] font-bold rounded cursor-pointer transition ${p?"bg-amber-600 text-white shadow-sm":"bg-transparent text-slate-400 border border-slate-800 hover:bg-slate-900"}`,title:"Toggle automatic weather cycle",children:p?"AUTO CYCLE: ON":"AUTO CYCLE: OFF"})]}),_t.jsx("div",{className:"grid grid-cols-3 gap-1",children:Object.values(ji).map(T=>_t.jsx("button",{onClick:V=>{V.stopPropagation(),h(T),m(!1)},className:`px-1 py-0.5 text-[9px] border uppercase rounded cursor-pointer transition ${c===T?"bg-sky-600 text-white border-sky-600 shadow-sm font-medium":"bg-transparent text-slate-300 border-slate-800 hover:bg-slate-900"}`,children:T},T))})]}),_t.jsxs("div",{children:[_t.jsx("div",{className:"text-[10px] text-slate-400 mb-1",children:"TIME SPEED:"}),_t.jsx("div",{className:"grid grid-cols-4 gap-1",children:[{label:"STOP",val:0},{label:"1X",val:.01},{label:"5X",val:.04},{label:"15X",val:.2}].map(T=>_t.jsx("button",{onClick:V=>{V.stopPropagation(),M(T.val)},className:`px-1 py-0.5 text-[9px] border rounded cursor-pointer transition ${d===T.val?"bg-sky-600 text-white border-sky-600 shadow-sm font-medium":"bg-transparent text-slate-300 border-slate-800 hover:bg-slate-900"}`,children:T.label},T.label))})]}),_t.jsxs("div",{className:"border-t border-slate-800/85 pt-2 flex flex-col gap-1.5",children:[_t.jsx("div",{className:"text-[10px] text-slate-400",children:"SYSTEM CONTROLS:"}),_t.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[_t.jsxs("button",{onClick:T=>{T.stopPropagation(),A(!b)},className:`py-1 text-[8px] border rounded cursor-pointer transition flex flex-col items-center justify-center gap-0.5 min-h-[36px] ${b?"bg-sky-600 text-white border-sky-600 font-medium shadow-sm":"bg-transparent text-slate-300 border-slate-800 hover:bg-slate-900"}`,title:"Toggle airplane headlight (Key: F)",children:[_t.jsx("span",{className:"text-xs",children:"🔦"}),_t.jsxs("span",{className:"font-bold tracking-tight",children:["HEADLIGHT: ",b?"ON":"OFF"]})]}),_t.jsxs("button",{onClick:T=>{T.stopPropagation(),y(!U)},className:`py-1 text-[8px] border rounded cursor-pointer transition flex flex-col items-center justify-center gap-0.5 min-h-[36px] ${U?"bg-sky-600 text-white border-sky-600 font-medium shadow-sm":"bg-transparent text-slate-300 border-slate-800 hover:bg-slate-900"}`,title:"Toggle pitch inversion (Y-axis)",children:[_t.jsx("span",{className:"text-xs",children:"🔄"}),_t.jsxs("span",{className:"font-bold tracking-tight",children:["INVERT Y: ",U?"ON":"OFF"]})]}),_t.jsxs("button",{onClick:T=>{T.stopPropagation(),O(!v)},className:`py-1 text-[8px] border rounded cursor-pointer transition flex flex-col items-center justify-center gap-0.5 min-h-[36px] ${v?"bg-sky-600 text-white border-sky-600 font-medium shadow-sm":"bg-transparent text-slate-300 border-slate-800 hover:bg-slate-900"}`,title:"Toggle onscreen warnings",children:[_t.jsx("span",{className:"text-xs",children:"⚠️"}),_t.jsxs("span",{className:"font-bold tracking-tight",children:["WARNINGS: ",v?"ON":"OFF"]})]}),_t.jsxs("button",{onClick:T=>{T.stopPropagation(),ht()},className:`py-1 text-[8px] border rounded cursor-pointer transition flex flex-col items-center justify-center gap-0.5 min-h-[36px] ${Zn?"bg-amber-600 text-white border-amber-600 font-medium shadow-sm":"bg-transparent text-slate-300 border-slate-800 hover:bg-slate-900"}`,title:"Toggle engine and ambient audio (Key: S)",children:[_t.jsx("span",{className:"text-xs",children:"🔊"}),_t.jsxs("span",{className:"font-bold tracking-tight",children:["AUDIO: ",Zn?"ON":"OFF"]})]})]}),_t.jsxs("button",{onClick:T=>{T.stopPropagation(),D(!B)},className:`w-full py-1.5 text-[9px] border rounded cursor-pointer transition flex items-center justify-center gap-1.5 min-h-[36px] ${B?"bg-rose-600 text-white border-rose-600 font-extrabold shadow-md":"bg-transparent text-slate-300 border-slate-800 hover:bg-slate-900"}`,title:"Toggle acrobatics mode for loops and rolls (Key: X)",children:[_t.jsx("span",{className:"text-xs",children:"🤸"}),_t.jsxs("span",{className:"font-bold tracking-wider uppercase",children:["ACROBATICS (360°): ",B?"ON":"OFF"]})]}),_t.jsxs("div",{className:"mt-2.5 pt-2 border-t border-slate-900 flex flex-col gap-1.5",children:[_t.jsxs("div",{className:"flex items-center justify-between",children:[_t.jsx("span",{className:"text-[9px] text-slate-400 font-bold uppercase tracking-wider",children:"Draw Distance:"}),_t.jsx("span",{className:"text-[9px] text-sky-400 font-extrabold font-mono",children:F===1?"3x3 CHUNKS (LOW)":F===2?"5x5 CHUNKS (MEDIUM)":F===3?"7x7 CHUNKS (HIGH)":F===4?"9x9 CHUNKS (MAX)":"11x11 CHUNKS (ULTRA)"})]}),_t.jsx("div",{className:"grid grid-cols-5 gap-1",children:[1,2,3,4,5].map(T=>_t.jsx("button",{onClick:V=>{V.stopPropagation(),L(T)},className:`py-1 text-[8px] font-bold border rounded cursor-pointer transition ${F===T?"bg-sky-600 text-white border-sky-600 font-extrabold shadow-sm":"bg-transparent text-slate-400 border-slate-800 hover:bg-slate-900"}`,title:`Terrain draw distance: ${T===1?"Minimum performance impact":T===2?"Balanced (Standard)":T===3?"Extended horizon":T===4?"Very high detail":"Extreme draw distance"}`,children:T===1?"1x":T===2?"2x":T===3?"3x":T===4?"4x":"5x"},T))})]})]})]})]}):_t.jsx("button",{onClick:()=>H(!0),className:"absolute bottom-5 right-5 w-9 h-9 rounded-full bg-slate-950/85 border border-slate-800 backdrop-blur-md flex items-center justify-center text-sky-400 hover:text-white hover:border-sky-500 transition shadow-lg cursor-pointer pointer-events-auto select-none",title:"Expand Controls",children:"▲"})]}),(t==="init"||t==="loading"||t==="ready"||t==="crashed")&&_t.jsx("div",{className:"absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-slate-950/95 font-mono z-20 text-white p-6 animate-fade-in",children:_t.jsx("div",{className:"max-w-md text-center",children:t==="crashed"?_t.jsxs(_t.Fragment,{children:[_t.jsx("h1",{className:"text-4xl sm:text-5xl font-black text-rose-500 tracking-wider mb-2 drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]",children:s}),_t.jsx("p",{className:"text-slate-400 mb-8 text-sm sm:text-base leading-relaxed",children:"Your aircraft has suffered extreme structural impact. Observe the terrain shapes and aim for the horizon in your next flight!"}),_t.jsx("button",{onClick:Xt,className:"px-8 py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-bold tracking-widest rounded-lg cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 text-lg",children:"REFLY / RESTART"})]}):_t.jsxs(_t.Fragment,{children:[_t.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold tracking-widest text-slate-100 mb-6 uppercase",children:"FLIGHT SIMULATOR 4.0"}),t==="ready"?_t.jsx(_t.Fragment,{children:_t.jsx("button",{onClick:xt,className:"px-10 py-4 bg-sky-600 hover:bg-sky-500 text-white font-extrabold tracking-widest rounded-lg cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 text-lg",children:"START ENGINES"})}):_t.jsxs("div",{className:"flex flex-col items-center gap-3",children:[_t.jsx("div",{className:"w-10 h-10 border-4 border-sky-500/30 border-t-sky-500 rounded-full animate-spin"}),_t.jsx("p",{className:"text-slate-500 text-xs mt-2",children:"Initializing procedural terrain and 3D components..."})]}),_t.jsxs("div",{className:"mt-8 text-[11px] text-slate-500 leading-normal border-t border-slate-900 pt-5 space-y-2",children:[_t.jsxs("div",{children:[_t.jsx("b",{children:"PC Controls:"})," Click & drag anywhere on the screen or use Arrow keys / WASD | Space / Shift = Throttle | Key X = Acrobatics Mode (360° loops)"]}),_t.jsxs("div",{children:[_t.jsx("b",{children:"Mobile Controls:"})," Touch and drag anywhere on the screen | Buttons +/- on left side = Throttle | Acrobatics toggle button on bottom-right"]}),_t.jsxs("div",{className:"text-emerald-500/80 font-bold border-t border-slate-900/50 pt-2 flex items-center justify-center gap-1",children:[_t.jsx("span",{children:"📡"}),_t.jsx("span",{children:"OFFLINE SUPPORT: Load the game once with internet to cache assets, then play anywhere completely offline!"})]})]})]})})})]})}function ZA(){return _t.jsx("main",{className:"w-screen h-screen overflow-hidden bg-slate-950",children:_t.jsx(YA,{})})}hS.createRoot(document.getElementById("root")).render(_t.jsx(le.StrictMode,{children:_t.jsx(ZA,{})}));
