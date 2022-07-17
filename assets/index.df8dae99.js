const Jm=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};Jm();function Pc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Zm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ey=Pc(Zm);function Sf(t){return!!t||t===""}function _s(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ve(s)?sy(s):_s(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ve(t))return t;if(Me(t))return t}}const ty=/;(?![^(]*\))/g,ny=/:(.+)/;function sy(t){const e={};return t.split(ty).forEach(n=>{if(n){const s=n.split(ny);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Mc(t){let e="";if(Ve(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const s=Mc(t[n]);s&&(e+=s+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Tt=t=>Ve(t)?t:t==null?"":z(t)||Me(t)&&(t.toString===Rf||!Y(t.toString))?JSON.stringify(t,Cf,2):String(t),Cf=(t,e)=>e&&e.__v_isRef?Cf(t,e.value):Es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Af(e)?{[`Set(${e.size})`]:[...e.values()]}:Me(e)&&!z(e)&&!Nf(e)?String(e):e,me={},ws=[],At=()=>{},ry=()=>!1,iy=/^on[^a-z]/,Eo=t=>iy.test(t),Lc=t=>t.startsWith("onUpdate:"),et=Object.assign,Uc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},oy=Object.prototype.hasOwnProperty,re=(t,e)=>oy.call(t,e),z=Array.isArray,Es=t=>Io(t)==="[object Map]",Af=t=>Io(t)==="[object Set]",Y=t=>typeof t=="function",Ve=t=>typeof t=="string",Fc=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",kf=t=>Me(t)&&Y(t.then)&&Y(t.catch),Rf=Object.prototype.toString,Io=t=>Rf.call(t),ay=t=>Io(t).slice(8,-1),Nf=t=>Io(t)==="[object Object]",Vc=t=>Ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Oi=Pc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},cy=/-(\w)/g,Vt=bo(t=>t.replace(cy,(e,n)=>n?n.toUpperCase():"")),uy=/\B([A-Z])/g,Bs=bo(t=>t.replace(uy,"-$1").toLowerCase()),To=bo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ha=bo(t=>t?`on${To(t)}`:""),Ir=(t,e)=>!Object.is(t,e),xi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},qi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Fa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let yl;const ly=()=>yl||(yl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Pt;class hy{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Pt&&(this.parent=Pt,this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function fy(t,e=Pt){e&&e.active&&e.effects.push(t)}const $c=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Df=t=>(t.w&In)>0,Of=t=>(t.n&In)>0,dy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=In},py=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Df(r)&&!Of(r)?r.delete(t):e[n++]=r,r.w&=~In,r.n&=~In}e.length=n}},Va=new WeakMap;let rr=0,In=1;const $a=30;let St;const $n=Symbol(""),Ba=Symbol("");class Bc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fy(this,s)}run(){if(!this.active)return this.fn();let e=St,n=mn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=St,St=this,mn=!0,In=1<<++rr,rr<=$a?dy(this):vl(this),this.fn()}finally{rr<=$a&&py(this),In=1<<--rr,St=this.parent,mn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){St===this?this.deferStop=!0:this.active&&(vl(this),this.onStop&&this.onStop(),this.active=!1)}}function vl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let mn=!0;const xf=[];function js(){xf.push(mn),mn=!1}function Hs(){const t=xf.pop();mn=t===void 0?!0:t}function ft(t,e,n){if(mn&&St){let s=Va.get(t);s||Va.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=$c()),Pf(r)}}function Pf(t,e){let n=!1;rr<=$a?Of(t)||(t.n|=In,n=!Df(t)):n=!t.has(St),n&&(t.add(St),St.deps.push(t))}function Xt(t,e,n,s,r,i){const o=Va.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t))o.forEach((c,u)=>{(u==="length"||u>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?Vc(n)&&a.push(o.get("length")):(a.push(o.get($n)),Es(t)&&a.push(o.get(Ba)));break;case"delete":z(t)||(a.push(o.get($n)),Es(t)&&a.push(o.get(Ba)));break;case"set":Es(t)&&a.push(o.get($n));break}if(a.length===1)a[0]&&ja(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);ja($c(c))}}function ja(t,e){const n=z(t)?t:[...t];for(const s of n)s.computed&&_l(s);for(const s of n)s.computed||_l(s)}function _l(t,e){(t!==St||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const gy=Pc("__proto__,__v_isRef,__isVue"),Mf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fc)),my=jc(),yy=jc(!1,!0),vy=jc(!0),wl=_y();function _y(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ae(this);for(let i=0,o=this.length;i<o;i++)ft(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ae)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){js();const s=ae(this)[e].apply(this,n);return Hs(),s}}),t}function jc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?My:$f:e?Vf:Ff).get(s))return s;const o=z(s);if(!t&&o&&re(wl,r))return Reflect.get(wl,r,i);const a=Reflect.get(s,r,i);return(Fc(r)?Mf.has(r):gy(r))||(t||ft(s,"get",r),e)?a:Je(a)?o&&Vc(r)?a:a.value:Me(a)?t?Bf(a):qs(a):a}}const wy=Lf(),Ey=Lf(!0);function Lf(t=!1){return function(n,s,r,i){let o=n[s];if(br(o)&&Je(o)&&!Je(r))return!1;if(!t&&!br(r)&&(Ha(r)||(r=ae(r),o=ae(o)),!z(n)&&Je(o)&&!Je(r)))return o.value=r,!0;const a=z(n)&&Vc(s)?Number(s)<n.length:re(n,s),c=Reflect.set(n,s,r,i);return n===ae(i)&&(a?Ir(r,o)&&Xt(n,"set",s,r):Xt(n,"add",s,r)),c}}function Iy(t,e){const n=re(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Xt(t,"delete",e,void 0),s}function by(t,e){const n=Reflect.has(t,e);return(!Fc(e)||!Mf.has(e))&&ft(t,"has",e),n}function Ty(t){return ft(t,"iterate",z(t)?"length":$n),Reflect.ownKeys(t)}const Uf={get:my,set:wy,deleteProperty:Iy,has:by,ownKeys:Ty},Sy={get:vy,set(t,e){return!0},deleteProperty(t,e){return!0}},Cy=et({},Uf,{get:yy,set:Ey}),Hc=t=>t,So=t=>Reflect.getPrototypeOf(t);function wi(t,e,n=!1,s=!1){t=t.__v_raw;const r=ae(t),i=ae(e);n||(e!==i&&ft(r,"get",e),ft(r,"get",i));const{has:o}=So(r),a=s?Hc:n?zc:Tr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Ei(t,e=!1){const n=this.__v_raw,s=ae(n),r=ae(t);return e||(t!==r&&ft(s,"has",t),ft(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ii(t,e=!1){return t=t.__v_raw,!e&&ft(ae(t),"iterate",$n),Reflect.get(t,"size",t)}function El(t){t=ae(t);const e=ae(this);return So(e).has.call(e,t)||(e.add(t),Xt(e,"add",t,t)),this}function Il(t,e){e=ae(e);const n=ae(this),{has:s,get:r}=So(n);let i=s.call(n,t);i||(t=ae(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Ir(e,o)&&Xt(n,"set",t,e):Xt(n,"add",t,e),this}function bl(t){const e=ae(this),{has:n,get:s}=So(e);let r=n.call(e,t);r||(t=ae(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Xt(e,"delete",t,void 0),i}function Tl(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&Xt(t,"clear",void 0,void 0),n}function bi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ae(o),c=e?Hc:t?zc:Tr;return!t&&ft(a,"iterate",$n),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function Ti(t,e,n){return function(...s){const r=this.__v_raw,i=ae(r),o=Es(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?Hc:e?zc:Tr;return!e&&ft(i,"iterate",c?Ba:$n),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[l(h[0]),l(h[1])]:l(h),done:f}},[Symbol.iterator](){return this}}}}function rn(t){return function(...e){return t==="delete"?!1:this}}function Ay(){const t={get(i){return wi(this,i)},get size(){return Ii(this)},has:Ei,add:El,set:Il,delete:bl,clear:Tl,forEach:bi(!1,!1)},e={get(i){return wi(this,i,!1,!0)},get size(){return Ii(this)},has:Ei,add:El,set:Il,delete:bl,clear:Tl,forEach:bi(!1,!0)},n={get(i){return wi(this,i,!0)},get size(){return Ii(this,!0)},has(i){return Ei.call(this,i,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:bi(!0,!1)},s={get(i){return wi(this,i,!0,!0)},get size(){return Ii(this,!0)},has(i){return Ei.call(this,i,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:bi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ti(i,!1,!1),n[i]=Ti(i,!0,!1),e[i]=Ti(i,!1,!0),s[i]=Ti(i,!0,!0)}),[t,n,e,s]}const[ky,Ry,Ny,Dy]=Ay();function qc(t,e){const n=e?t?Dy:Ny:t?Ry:ky;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(re(n,r)&&r in s?n:s,r,i)}const Oy={get:qc(!1,!1)},xy={get:qc(!1,!0)},Py={get:qc(!0,!1)},Ff=new WeakMap,Vf=new WeakMap,$f=new WeakMap,My=new WeakMap;function Ly(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uy(t){return t.__v_skip||!Object.isExtensible(t)?0:Ly(ay(t))}function qs(t){return br(t)?t:Kc(t,!1,Uf,Oy,Ff)}function Fy(t){return Kc(t,!1,Cy,xy,Vf)}function Bf(t){return Kc(t,!0,Sy,Py,$f)}function Kc(t,e,n,s,r){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Uy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Is(t){return br(t)?Is(t.__v_raw):!!(t&&t.__v_isReactive)}function br(t){return!!(t&&t.__v_isReadonly)}function Ha(t){return!!(t&&t.__v_isShallow)}function jf(t){return Is(t)||br(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function Hf(t){return qi(t,"__v_skip",!0),t}const Tr=t=>Me(t)?qs(t):t,zc=t=>Me(t)?Bf(t):t;function qf(t){mn&&St&&(t=ae(t),Pf(t.dep||(t.dep=$c())))}function Kf(t,e){t=ae(t),t.dep&&ja(t.dep)}function Je(t){return!!(t&&t.__v_isRef===!0)}function Vy(t){return zf(t,!1)}function $y(t){return zf(t,!0)}function zf(t,e){return Je(t)?t:new By(t,e)}class By{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:Tr(e)}get value(){return qf(this),this._value}set value(e){e=this.__v_isShallow?e:ae(e),Ir(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Tr(e),Kf(this))}}function Bn(t){return Je(t)?t.value:t}const jy={get:(t,e,n)=>Bn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Je(r)&&!Je(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Wf(t){return Is(t)?t:new Proxy(t,jy)}class Hy{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Bc(e,()=>{this._dirty||(this._dirty=!0,Kf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ae(this);return qf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qy(t,e,n=!1){let s,r;const i=Y(t);return i?(s=t,r=At):(s=t.get,r=t.set),new Hy(s,r,i||!r,n)}function yn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Co(i,e,n)}return r}function _t(t,e,n,s){if(Y(t)){const i=yn(t,e,n,s);return i&&kf(i)&&i.catch(o=>{Co(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(_t(t[i],e,n,s));return r}function Co(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){yn(c,null,10,[t,o,a]);return}}Ky(t,n,r,s)}function Ky(t,e,n,s=!0){console.error(t)}let Ki=!1,qa=!1;const ht=[];let Ht=0;const lr=[];let ir=null,fs=0;const hr=[];let un=null,ds=0;const Gf=Promise.resolve();let Wc=null,Ka=null;function Qf(t){const e=Wc||Gf;return t?e.then(this?t.bind(this):t):e}function zy(t){let e=Ht+1,n=ht.length;for(;e<n;){const s=e+n>>>1;Sr(ht[s])<t?e=s+1:n=s}return e}function Xf(t){(!ht.length||!ht.includes(t,Ki&&t.allowRecurse?Ht+1:Ht))&&t!==Ka&&(t.id==null?ht.push(t):ht.splice(zy(t.id),0,t),Yf())}function Yf(){!Ki&&!qa&&(qa=!0,Wc=Gf.then(ed))}function Wy(t){const e=ht.indexOf(t);e>Ht&&ht.splice(e,1)}function Jf(t,e,n,s){z(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Yf()}function Gy(t){Jf(t,ir,lr,fs)}function Qy(t){Jf(t,un,hr,ds)}function Ao(t,e=null){if(lr.length){for(Ka=e,ir=[...new Set(lr)],lr.length=0,fs=0;fs<ir.length;fs++)ir[fs]();ir=null,fs=0,Ka=null,Ao(t,e)}}function Zf(t){if(Ao(),hr.length){const e=[...new Set(hr)];if(hr.length=0,un){un.push(...e);return}for(un=e,un.sort((n,s)=>Sr(n)-Sr(s)),ds=0;ds<un.length;ds++)un[ds]();un=null,ds=0}}const Sr=t=>t.id==null?1/0:t.id;function ed(t){qa=!1,Ki=!0,Ao(t),ht.sort((n,s)=>Sr(n)-Sr(s));const e=At;try{for(Ht=0;Ht<ht.length;Ht++){const n=ht[Ht];n&&n.active!==!1&&yn(n,null,14)}}finally{Ht=0,ht.length=0,Zf(),Ki=!1,Wc=null,(ht.length||lr.length||hr.length)&&ed(t)}}function Xy(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||me;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[l]||me;f&&(r=n.map(g=>g.trim())),h&&(r=n.map(Fa))}let a,c=s[a=ha(e)]||s[a=ha(Vt(e))];!c&&i&&(c=s[a=ha(Bs(e))]),c&&_t(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,_t(u,t,6,r)}}function td(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=u=>{const l=td(u,e,!0);l&&(a=!0,et(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(z(i)?i.forEach(c=>o[c]=null):et(o,i),s.set(t,o),o)}function ko(t,e){return!t||!Eo(e)?!1:(e=e.slice(2).replace(/Once$/,""),re(t,e[0].toLowerCase()+e.slice(1))||re(t,Bs(e))||re(t,e))}let vt=null,Ro=null;function zi(t){const e=vt;return vt=t,Ro=t&&t.type.__scopeId||null,e}function nd(t){Ro=t}function sd(){Ro=null}function Gc(t,e=vt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Ml(-1);const i=zi(e),o=t(...r);return zi(i),s._d&&Ml(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function fa(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:S}=t;let I,A;const x=zi(t);try{if(n.shapeFlag&4){const X=r||s;I=Mt(l.call(X,X,h,i,g,f,y)),A=c}else{const X=e;I=Mt(X.length>1?X(i,{attrs:c,slots:a,emit:u}):X(i,null)),A=e.props?c:Yy(c)}}catch(X){fr.length=0,Co(X,t,1),I=Ce(Wt)}let q=I;if(A&&S!==!1){const X=Object.keys(A),{shapeFlag:le}=q;X.length&&le&7&&(o&&X.some(Lc)&&(A=Jy(A,o)),q=bn(q,A))}return n.dirs&&(q=bn(q),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&(q.transition=n.transition),I=q,zi(x),I}const Yy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Eo(n))&&((e||(e={}))[n]=t[n]);return e},Jy=(t,e)=>{const n={};for(const s in t)(!Lc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Zy(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Sl(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const f=l[h];if(o[f]!==s[f]&&!ko(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Sl(s,o,u):!0:!!o;return!1}function Sl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ko(n,i))return!0}return!1}function ev({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const tv=t=>t.__isSuspense;function nv(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):Qy(t)}function Pi(t,e){if(Fe){let n=Fe.provides;const s=Fe.parent&&Fe.parent.provides;s===n&&(n=Fe.provides=Object.create(s)),n[t]=e}}function vn(t,e,n=!1){const s=Fe||vt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(s.proxy):e}}const Cl={};function bs(t,e,n){return rd(t,e,n)}function rd(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=me){const a=Fe;let c,u=!1,l=!1;if(Je(t)?(c=()=>t.value,u=Ha(t)):Is(t)?(c=()=>t,s=!0):z(t)?(l=!0,u=t.some(A=>Is(A)||Ha(A)),c=()=>t.map(A=>{if(Je(A))return A.value;if(Is(A))return Ln(A);if(Y(A))return yn(A,a,2)})):Y(t)?e?c=()=>yn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),_t(t,a,3,[f])}:c=At,e&&s){const A=c;c=()=>Ln(A())}let h,f=A=>{h=I.onStop=()=>{yn(A,a,4)}};if(kr)return f=At,e?n&&_t(e,a,3,[c(),l?[]:void 0,f]):c(),At;let g=l?[]:Cl;const y=()=>{if(!!I.active)if(e){const A=I.run();(s||u||(l?A.some((x,q)=>Ir(x,g[q])):Ir(A,g)))&&(h&&h(),_t(e,a,3,[A,g===Cl?void 0:g,f]),g=A)}else I.run()};y.allowRecurse=!!e;let S;r==="sync"?S=y:r==="post"?S=()=>it(y,a&&a.suspense):S=()=>Gy(y);const I=new Bc(c,S);return e?n?y():g=I.run():r==="post"?it(I.run.bind(I),a&&a.suspense):I.run(),()=>{I.stop(),a&&a.scope&&Uc(a.scope.effects,I)}}function sv(t,e,n){const s=this.proxy,r=Ve(t)?t.includes(".")?id(s,t):()=>s[t]:t.bind(s,s);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Fe;Rs(this);const a=rd(r,i.bind(s),n);return o?Rs(o):jn(),a}function id(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ln(t,e){if(!Me(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Je(t))Ln(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)Ln(t[n],e);else if(Af(t)||Es(t))t.forEach(n=>{Ln(n,e)});else if(Nf(t))for(const n in t)Ln(t[n],e);return t}function rv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ld(()=>{t.isMounted=!0}),hd(()=>{t.isUnmounting=!0}),t}const gt=[Function,Array],iv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gt,onEnter:gt,onAfterEnter:gt,onEnterCancelled:gt,onBeforeLeave:gt,onLeave:gt,onAfterLeave:gt,onLeaveCancelled:gt,onBeforeAppear:gt,onAppear:gt,onAfterAppear:gt,onAppearCancelled:gt},setup(t,{slots:e}){const n=Hv(),s=rv();let r;return()=>{const i=e.default&&ad(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const S of i)if(S.type!==Wt){o=S;break}}const a=ae(t),{mode:c}=a;if(s.isLeaving)return da(o);const u=Al(o);if(!u)return da(o);const l=za(u,a,s,n);Wa(u,l);const h=n.subTree,f=h&&Al(h);let g=!1;const{getTransitionKey:y}=u.type;if(y){const S=y();r===void 0?r=S:S!==r&&(r=S,g=!0)}if(f&&f.type!==Wt&&(!Pn(u,f)||g)){const S=za(f,a,s,n);if(Wa(f,S),c==="out-in")return s.isLeaving=!0,S.afterLeave=()=>{s.isLeaving=!1,n.update()},da(o);c==="in-out"&&u.type!==Wt&&(S.delayLeave=(I,A,x)=>{const q=od(s,f);q[String(f.key)]=f,I._leaveCb=()=>{A(),I._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=x})}return o}}},ov=iv;function od(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function za(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:S,onAppear:I,onAfterAppear:A,onAppearCancelled:x}=e,q=String(t.key),X=od(n,t),le=(ee,ue)=>{ee&&_t(ee,s,9,ue)},Te=(ee,ue)=>{const we=ue[1];le(ee,ue),z(ee)?ee.every(je=>je.length<=1)&&we():ee.length<=1&&we()},De={mode:i,persisted:o,beforeEnter(ee){let ue=a;if(!n.isMounted)if(r)ue=S||a;else return;ee._leaveCb&&ee._leaveCb(!0);const we=X[q];we&&Pn(t,we)&&we.el._leaveCb&&we.el._leaveCb(),le(ue,[ee])},enter(ee){let ue=c,we=u,je=l;if(!n.isMounted)if(r)ue=I||c,we=A||u,je=x||l;else return;let He=!1;const It=ee._enterCb=sn=>{He||(He=!0,sn?le(je,[ee]):le(we,[ee]),De.delayedLeave&&De.delayedLeave(),ee._enterCb=void 0)};ue?Te(ue,[ee,It]):It()},leave(ee,ue){const we=String(t.key);if(ee._enterCb&&ee._enterCb(!0),n.isUnmounting)return ue();le(h,[ee]);let je=!1;const He=ee._leaveCb=It=>{je||(je=!0,ue(),It?le(y,[ee]):le(g,[ee]),ee._leaveCb=void 0,X[we]===t&&delete X[we])};X[we]=t,f?Te(f,[ee,He]):He()},clone(ee){return za(ee,e,n,s)}};return De}function da(t){if(No(t))return t=bn(t),t.children=null,t}function Al(t){return No(t)?t.children?t.children[0]:void 0:t}function Wa(t,e){t.shapeFlag&6&&t.component?Wa(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ad(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Xe?(o.patchFlag&128&&r++,s=s.concat(ad(o.children,e,a))):(e||o.type!==Wt)&&s.push(a!=null?bn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function cd(t){return Y(t)?{setup:t,name:t.name}:t}const Mi=t=>!!t.type.__asyncLoader,No=t=>t.type.__isKeepAlive;function av(t,e){ud(t,"a",e)}function cv(t,e){ud(t,"da",e)}function ud(t,e,n=Fe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Do(e,s,n),n){let r=n.parent;for(;r&&r.parent;)No(r.parent.vnode)&&uv(s,e,n,r),r=r.parent}}function uv(t,e,n,s){const r=Do(e,t,s,!0);fd(()=>{Uc(s[e],r)},n)}function Do(t,e,n=Fe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;js(),Rs(n);const a=_t(e,n,t,o);return jn(),Hs(),a});return s?r.unshift(i):r.push(i),i}}const tn=t=>(e,n=Fe)=>(!kr||t==="sp")&&Do(t,e,n),lv=tn("bm"),ld=tn("m"),hv=tn("bu"),fv=tn("u"),hd=tn("bum"),fd=tn("um"),dv=tn("sp"),pv=tn("rtg"),gv=tn("rtc");function mv(t,e=Fe){Do("ec",t,e)}function Cr(t,e){const n=vt;if(n===null)return t;const s=xo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=me]=e[i];Y(o)&&(o={mounted:o,updated:o}),o.deep&&Ln(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u})}return t}function Nn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(js(),_t(c,n,8,[t.el,a,t,e]),Hs())}}const dd="components";function Yt(t,e){return vv(dd,t,!0,e)||t}const yv=Symbol();function vv(t,e,n=!0,s=!1){const r=vt||Fe;if(r){const i=r.type;if(t===dd){const a=Gv(i,!1);if(a&&(a===e||a===Vt(e)||a===To(Vt(e))))return i}const o=kl(r[t]||i[t],e)||kl(r.appContext[t],e);return!o&&s?i:o}}function kl(t,e){return t&&(t[e]||t[Vt(e)]||t[To(Vt(e))])}function ks(t,e,n,s){let r;const i=n&&n[s];if(z(t)||Ve(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Me(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Ga=t=>t?Cd(t)?xo(t)||t.proxy:Ga(t.parent):null,Wi=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ga(t.parent),$root:t=>Ga(t.root),$emit:t=>t.emit,$options:t=>gd(t),$forceUpdate:t=>t.f||(t.f=()=>Xf(t.update)),$nextTick:t=>t.n||(t.n=Qf.bind(t.proxy)),$watch:t=>sv.bind(t)}),_v={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==me&&re(s,e))return o[e]=1,s[e];if(r!==me&&re(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&re(u,e))return o[e]=3,i[e];if(n!==me&&re(n,e))return o[e]=4,n[e];Qa&&(o[e]=0)}}const l=Wi[e];let h,f;if(l)return e==="$attrs"&&ft(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==me&&re(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,re(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==me&&re(r,e)?(r[e]=n,!0):s!==me&&re(s,e)?(s[e]=n,!0):re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==me&&re(t,o)||e!==me&&re(e,o)||(a=i[0])&&re(a,o)||re(s,o)||re(Wi,o)||re(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Qa=!0;function wv(t){const e=gd(t),n=t.proxy,s=t.ctx;Qa=!1,e.beforeCreate&&Rl(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:S,deactivated:I,beforeDestroy:A,beforeUnmount:x,destroyed:q,unmounted:X,render:le,renderTracked:Te,renderTriggered:De,errorCaptured:ee,serverPrefetch:ue,expose:we,inheritAttrs:je,components:He,directives:It,filters:sn}=e;if(u&&Ev(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ye in o){const he=o[ye];Y(he)&&(s[ye]=he.bind(n))}if(r){const ye=r.call(n,n);Me(ye)&&(t.data=qs(ye))}if(Qa=!0,i)for(const ye in i){const he=i[ye],ut=Y(he)?he.bind(n,n):Y(he.get)?he.get.bind(n,n):At,os=!Y(he)&&Y(he.set)?he.set.bind(n):At,jt=mt({get:ut,set:os});Object.defineProperty(s,ye,{enumerable:!0,configurable:!0,get:()=>jt.value,set:Dt=>jt.value=Dt})}if(a)for(const ye in a)pd(a[ye],s,n,ye);if(c){const ye=Y(c)?c.call(n):c;Reflect.ownKeys(ye).forEach(he=>{Pi(he,ye[he])})}l&&Rl(l,t,"c");function Oe(ye,he){z(he)?he.forEach(ut=>ye(ut.bind(n))):he&&ye(he.bind(n))}if(Oe(lv,h),Oe(ld,f),Oe(hv,g),Oe(fv,y),Oe(av,S),Oe(cv,I),Oe(mv,ee),Oe(gv,Te),Oe(pv,De),Oe(hd,x),Oe(fd,X),Oe(dv,ue),z(we))if(we.length){const ye=t.exposed||(t.exposed={});we.forEach(he=>{Object.defineProperty(ye,he,{get:()=>n[he],set:ut=>n[he]=ut})})}else t.exposed||(t.exposed={});le&&t.render===At&&(t.render=le),je!=null&&(t.inheritAttrs=je),He&&(t.components=He),It&&(t.directives=It)}function Ev(t,e,n=At,s=!1){z(t)&&(t=Xa(t));for(const r in t){const i=t[r];let o;Me(i)?"default"in i?o=vn(i.from||r,i.default,!0):o=vn(i.from||r):o=vn(i),Je(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Rl(t,e,n){_t(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function pd(t,e,n,s){const r=s.includes(".")?id(n,s):()=>n[s];if(Ve(t)){const i=e[t];Y(i)&&bs(r,i)}else if(Y(t))bs(r,t.bind(n));else if(Me(t))if(z(t))t.forEach(i=>pd(i,e,n,s));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&bs(r,i,t)}}function gd(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>Gi(c,u,o,!0)),Gi(c,e,o)),i.set(e,c),c}function Gi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Gi(t,i,n,!0),r&&r.forEach(o=>Gi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Iv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Iv={data:Nl,props:On,emits:On,methods:On,computed:On,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:On,directives:On,watch:Tv,provide:Nl,inject:bv};function Nl(t,e){return e?t?function(){return et(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function bv(t,e){return On(Xa(t),Xa(e))}function Xa(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tt(t,e){return t?[...new Set([].concat(t,e))]:e}function On(t,e){return t?et(et(Object.create(null),t),e):e}function Tv(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const s in e)n[s]=tt(t[s],e[s]);return n}function Sv(t,e,n,s=!1){const r={},i={};qi(i,Oo,1),t.propsDefaults=Object.create(null),md(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Fy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Cv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ae(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let f=l[h];if(ko(t.emitsOptions,f))continue;const g=e[f];if(c)if(re(i,f))g!==i[f]&&(i[f]=g,u=!0);else{const y=Vt(f);r[y]=Ya(c,a,y,g,t,!1)}else g!==i[f]&&(i[f]=g,u=!0)}}}else{md(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!re(e,h)&&((l=Bs(h))===h||!re(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=Ya(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!re(e,h)&&!0)&&(delete i[h],u=!0)}u&&Xt(t,"set","$attrs")}function md(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Oi(c))continue;const u=e[c];let l;r&&re(r,l=Vt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:ko(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=ae(n),u=a||me;for(let l=0;l<i.length;l++){const h=i[l];n[h]=Ya(r,c,h,u[h],t,!re(u,h))}}return o}function Ya(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=re(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Y(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(Rs(r),s=u[n]=c.call(null,e),jn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Bs(n))&&(s=!0))}return s}function yd(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const l=h=>{c=!0;const[f,g]=yd(h,e,!0);et(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return s.set(t,ws),ws;if(z(i))for(let l=0;l<i.length;l++){const h=Vt(i[l]);Dl(h)&&(o[h]=me)}else if(i)for(const l in i){const h=Vt(l);if(Dl(h)){const f=i[l],g=o[h]=z(f)||Y(f)?{type:f}:f;if(g){const y=Pl(Boolean,g.type),S=Pl(String,g.type);g[0]=y>-1,g[1]=S<0||y<S,(y>-1||re(g,"default"))&&a.push(h)}}}const u=[o,a];return s.set(t,u),u}function Dl(t){return t[0]!=="$"}function Ol(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function xl(t,e){return Ol(t)===Ol(e)}function Pl(t,e){return z(e)?e.findIndex(n=>xl(n,t)):Y(e)&&xl(e,t)?0:-1}const vd=t=>t[0]==="_"||t==="$stable",Qc=t=>z(t)?t.map(Mt):[Mt(t)],Av=(t,e,n)=>{if(e._n)return e;const s=Gc((...r)=>Qc(e(...r)),n);return s._c=!1,s},_d=(t,e,n)=>{const s=t._ctx;for(const r in t){if(vd(r))continue;const i=t[r];if(Y(i))e[r]=Av(r,i,s);else if(i!=null){const o=Qc(i);e[r]=()=>o}}},wd=(t,e)=>{const n=Qc(e);t.slots.default=()=>n},kv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),qi(e,"_",n)):_d(e,t.slots={})}else t.slots={},e&&wd(t,e);qi(t.slots,Oo,1)},Rv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=me;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(et(r,e),!n&&a===1&&delete r._):(i=!e.$stable,_d(e,r)),o=e}else e&&(wd(t,e),o={default:1});if(i)for(const a in r)!vd(a)&&!(a in o)&&delete r[a]};function Ed(){return{app:null,config:{isNativeTag:ry,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nv=0;function Dv(t,e){return function(s,r=null){Y(s)||(s=Object.assign({},s)),r!=null&&!Me(r)&&(r=null);const i=Ed(),o=new Set;let a=!1;const c=i.app={_uid:Nv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Xv,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&Y(u.install)?(o.add(u),u.install(c,...l)):Y(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const f=Ce(s,r);return f.appContext=i,l&&e?e(f,u):t(f,u,h),a=!0,c._container=u,u.__vue_app__=c,xo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Ja(t,e,n,s,r=!1){if(z(t)){t.forEach((f,g)=>Ja(f,e&&(z(e)?e[g]:e),n,s,r));return}if(Mi(s)&&!r)return;const i=s.shapeFlag&4?xo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===me?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Ve(u)?(l[u]=null,re(h,u)&&(h[u]=null)):Je(u)&&(u.value=null)),Y(c))yn(c,a,12,[o,l]);else{const f=Ve(c),g=Je(c);if(f||g){const y=()=>{if(t.f){const S=f?l[c]:c.value;r?z(S)&&Uc(S,i):z(S)?S.includes(i)||S.push(i):f?(l[c]=[i],re(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else f?(l[c]=o,re(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(l[t.k]=o))};o?(y.id=-1,it(y,n)):y()}}}const it=nv;function Ov(t){return xv(t)}function xv(t,e){const n=ly();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:g=At,cloneNode:y,insertStaticContent:S}=t,I=(d,p,m,w=null,_=null,k=null,D=!1,C=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!Pn(d,p)&&(w=L(d),pt(d,_,k,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:E,ref:F,shapeFlag:P}=p;switch(E){case Xc:A(d,p,m,w);break;case Wt:x(d,p,m,w);break;case pa:d==null&&q(p,m,w,D);break;case Xe:It(d,p,m,w,_,k,D,C,R);break;default:P&1?Te(d,p,m,w,_,k,D,C,R):P&6?sn(d,p,m,w,_,k,D,C,R):(P&64||P&128)&&E.process(d,p,m,w,_,k,D,C,R,ve)}F!=null&&_&&Ja(F,d&&d.ref,k,p||d,!p)},A=(d,p,m,w)=>{if(d==null)s(p.el=a(p.children),m,w);else{const _=p.el=d.el;p.children!==d.children&&u(_,p.children)}},x=(d,p,m,w)=>{d==null?s(p.el=c(p.children||""),m,w):p.el=d.el},q=(d,p,m,w)=>{[d.el,d.anchor]=S(d.children,p,m,w,d.el,d.anchor)},X=({el:d,anchor:p},m,w)=>{let _;for(;d&&d!==p;)_=f(d),s(d,m,w),d=_;s(p,m,w)},le=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),r(d),d=m;r(p)},Te=(d,p,m,w,_,k,D,C,R)=>{D=D||p.type==="svg",d==null?De(p,m,w,_,k,D,C,R):we(d,p,_,k,D,C,R)},De=(d,p,m,w,_,k,D,C)=>{let R,E;const{type:F,props:P,shapeFlag:V,transition:K,patchFlag:ie,dirs:de}=d;if(d.el&&y!==void 0&&ie===-1)R=d.el=y(d.el);else{if(R=d.el=o(d.type,k,P&&P.is,P),V&8?l(R,d.children):V&16&&ue(d.children,R,null,w,_,k&&F!=="foreignObject",D,C),de&&Nn(d,null,w,"created"),P){for(const Ee in P)Ee!=="value"&&!Oi(Ee)&&i(R,Ee,null,P[Ee],k,d.children,w,_,N);"value"in P&&i(R,"value",null,P.value),(E=P.onVnodeBeforeMount)&&xt(E,w,d)}ee(R,d,d.scopeId,D,w)}de&&Nn(d,null,w,"beforeMount");const pe=(!_||_&&!_.pendingBranch)&&K&&!K.persisted;pe&&K.beforeEnter(R),s(R,p,m),((E=P&&P.onVnodeMounted)||pe||de)&&it(()=>{E&&xt(E,w,d),pe&&K.enter(R),de&&Nn(d,null,w,"mounted")},_)},ee=(d,p,m,w,_)=>{if(m&&g(d,m),w)for(let k=0;k<w.length;k++)g(d,w[k]);if(_){let k=_.subTree;if(p===k){const D=_.vnode;ee(d,D,D.scopeId,D.slotScopeIds,_.parent)}}},ue=(d,p,m,w,_,k,D,C,R=0)=>{for(let E=R;E<d.length;E++){const F=d[E]=C?ln(d[E]):Mt(d[E]);I(null,F,p,m,w,_,k,D,C)}},we=(d,p,m,w,_,k,D)=>{const C=p.el=d.el;let{patchFlag:R,dynamicChildren:E,dirs:F}=p;R|=d.patchFlag&16;const P=d.props||me,V=p.props||me;let K;m&&Dn(m,!1),(K=V.onVnodeBeforeUpdate)&&xt(K,m,p,d),F&&Nn(p,d,m,"beforeUpdate"),m&&Dn(m,!0);const ie=_&&p.type!=="foreignObject";if(E?je(d.dynamicChildren,E,C,m,w,ie,k):D||ut(d,p,C,null,m,w,ie,k,!1),R>0){if(R&16)He(C,p,P,V,m,w,_);else if(R&2&&P.class!==V.class&&i(C,"class",null,V.class,_),R&4&&i(C,"style",P.style,V.style,_),R&8){const de=p.dynamicProps;for(let pe=0;pe<de.length;pe++){const Ee=de[pe],bt=P[Ee],as=V[Ee];(as!==bt||Ee==="value")&&i(C,Ee,bt,as,_,d.children,m,w,N)}}R&1&&d.children!==p.children&&l(C,p.children)}else!D&&E==null&&He(C,p,P,V,m,w,_);((K=V.onVnodeUpdated)||F)&&it(()=>{K&&xt(K,m,p,d),F&&Nn(p,d,m,"updated")},w)},je=(d,p,m,w,_,k,D)=>{for(let C=0;C<p.length;C++){const R=d[C],E=p[C],F=R.el&&(R.type===Xe||!Pn(R,E)||R.shapeFlag&70)?h(R.el):m;I(R,E,F,null,w,_,k,D,!0)}},He=(d,p,m,w,_,k,D)=>{if(m!==w){for(const C in w){if(Oi(C))continue;const R=w[C],E=m[C];R!==E&&C!=="value"&&i(d,C,E,R,D,p.children,_,k,N)}if(m!==me)for(const C in m)!Oi(C)&&!(C in w)&&i(d,C,m[C],null,D,p.children,_,k,N);"value"in w&&i(d,"value",m.value,w.value)}},It=(d,p,m,w,_,k,D,C,R)=>{const E=p.el=d?d.el:a(""),F=p.anchor=d?d.anchor:a("");let{patchFlag:P,dynamicChildren:V,slotScopeIds:K}=p;K&&(C=C?C.concat(K):K),d==null?(s(E,m,w),s(F,m,w),ue(p.children,m,F,_,k,D,C,R)):P>0&&P&64&&V&&d.dynamicChildren?(je(d.dynamicChildren,V,m,_,k,D,C),(p.key!=null||_&&p===_.subTree)&&Id(d,p,!0)):ut(d,p,m,F,_,k,D,C,R)},sn=(d,p,m,w,_,k,D,C,R)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?_.ctx.activate(p,m,w,D,R):is(p,m,w,_,k,D,R):Oe(d,p,R)},is=(d,p,m,w,_,k,D)=>{const C=d.component=jv(d,w,_);if(No(d)&&(C.ctx.renderer=ve),qv(C),C.asyncDep){if(_&&_.registerDep(C,ye),!d.el){const R=C.subTree=Ce(Wt);x(null,R,p,m)}return}ye(C,d,p,m,_,k,D)},Oe=(d,p,m)=>{const w=p.component=d.component;if(Zy(d,p,m))if(w.asyncDep&&!w.asyncResolved){he(w,p,m);return}else w.next=p,Wy(w.update),w.update();else p.el=d.el,w.vnode=p},ye=(d,p,m,w,_,k,D)=>{const C=()=>{if(d.isMounted){let{next:F,bu:P,u:V,parent:K,vnode:ie}=d,de=F,pe;Dn(d,!1),F?(F.el=ie.el,he(d,F,D)):F=ie,P&&xi(P),(pe=F.props&&F.props.onVnodeBeforeUpdate)&&xt(pe,K,F,ie),Dn(d,!0);const Ee=fa(d),bt=d.subTree;d.subTree=Ee,I(bt,Ee,h(bt.el),L(bt),d,_,k),F.el=Ee.el,de===null&&ev(d,Ee.el),V&&it(V,_),(pe=F.props&&F.props.onVnodeUpdated)&&it(()=>xt(pe,K,F,ie),_)}else{let F;const{el:P,props:V}=p,{bm:K,m:ie,parent:de}=d,pe=Mi(p);if(Dn(d,!1),K&&xi(K),!pe&&(F=V&&V.onVnodeBeforeMount)&&xt(F,de,p),Dn(d,!0),P&&J){const Ee=()=>{d.subTree=fa(d),J(P,d.subTree,d,_,null)};pe?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Ee()):Ee()}else{const Ee=d.subTree=fa(d);I(null,Ee,m,w,d,_,k),p.el=Ee.el}if(ie&&it(ie,_),!pe&&(F=V&&V.onVnodeMounted)){const Ee=p;it(()=>xt(F,de,Ee),_)}(p.shapeFlag&256||de&&Mi(de.vnode)&&de.vnode.shapeFlag&256)&&d.a&&it(d.a,_),d.isMounted=!0,p=m=w=null}},R=d.effect=new Bc(C,()=>Xf(E),d.scope),E=d.update=()=>R.run();E.id=d.uid,Dn(d,!0),E()},he=(d,p,m)=>{p.component=d;const w=d.vnode.props;d.vnode=p,d.next=null,Cv(d,p.props,w,m),Rv(d,p.children,m),js(),Ao(void 0,d.update),Hs()},ut=(d,p,m,w,_,k,D,C,R=!1)=>{const E=d&&d.children,F=d?d.shapeFlag:0,P=p.children,{patchFlag:V,shapeFlag:K}=p;if(V>0){if(V&128){jt(E,P,m,w,_,k,D,C,R);return}else if(V&256){os(E,P,m,w,_,k,D,C,R);return}}K&8?(F&16&&N(E,_,k),P!==E&&l(m,P)):F&16?K&16?jt(E,P,m,w,_,k,D,C,R):N(E,_,k,!0):(F&8&&l(m,""),K&16&&ue(P,m,w,_,k,D,C,R))},os=(d,p,m,w,_,k,D,C,R)=>{d=d||ws,p=p||ws;const E=d.length,F=p.length,P=Math.min(E,F);let V;for(V=0;V<P;V++){const K=p[V]=R?ln(p[V]):Mt(p[V]);I(d[V],K,m,null,_,k,D,C,R)}E>F?N(d,_,k,!0,!1,P):ue(p,m,w,_,k,D,C,R,P)},jt=(d,p,m,w,_,k,D,C,R)=>{let E=0;const F=p.length;let P=d.length-1,V=F-1;for(;E<=P&&E<=V;){const K=d[E],ie=p[E]=R?ln(p[E]):Mt(p[E]);if(Pn(K,ie))I(K,ie,m,null,_,k,D,C,R);else break;E++}for(;E<=P&&E<=V;){const K=d[P],ie=p[V]=R?ln(p[V]):Mt(p[V]);if(Pn(K,ie))I(K,ie,m,null,_,k,D,C,R);else break;P--,V--}if(E>P){if(E<=V){const K=V+1,ie=K<F?p[K].el:w;for(;E<=V;)I(null,p[E]=R?ln(p[E]):Mt(p[E]),m,ie,_,k,D,C,R),E++}}else if(E>V)for(;E<=P;)pt(d[E],_,k,!0),E++;else{const K=E,ie=E,de=new Map;for(E=ie;E<=V;E++){const lt=p[E]=R?ln(p[E]):Mt(p[E]);lt.key!=null&&de.set(lt.key,E)}let pe,Ee=0;const bt=V-ie+1;let as=!1,pl=0;const tr=new Array(bt);for(E=0;E<bt;E++)tr[E]=0;for(E=K;E<=P;E++){const lt=d[E];if(Ee>=bt){pt(lt,_,k,!0);continue}let Ot;if(lt.key!=null)Ot=de.get(lt.key);else for(pe=ie;pe<=V;pe++)if(tr[pe-ie]===0&&Pn(lt,p[pe])){Ot=pe;break}Ot===void 0?pt(lt,_,k,!0):(tr[Ot-ie]=E+1,Ot>=pl?pl=Ot:as=!0,I(lt,p[Ot],m,null,_,k,D,C,R),Ee++)}const gl=as?Pv(tr):ws;for(pe=gl.length-1,E=bt-1;E>=0;E--){const lt=ie+E,Ot=p[lt],ml=lt+1<F?p[lt+1].el:w;tr[E]===0?I(null,Ot,m,ml,_,k,D,C,R):as&&(pe<0||E!==gl[pe]?Dt(Ot,m,ml,2):pe--)}}},Dt=(d,p,m,w,_=null)=>{const{el:k,type:D,transition:C,children:R,shapeFlag:E}=d;if(E&6){Dt(d.component.subTree,p,m,w);return}if(E&128){d.suspense.move(p,m,w);return}if(E&64){D.move(d,p,m,ve);return}if(D===Xe){s(k,p,m);for(let P=0;P<R.length;P++)Dt(R[P],p,m,w);s(d.anchor,p,m);return}if(D===pa){X(d,p,m);return}if(w!==2&&E&1&&C)if(w===0)C.beforeEnter(k),s(k,p,m),it(()=>C.enter(k),_);else{const{leave:P,delayLeave:V,afterLeave:K}=C,ie=()=>s(k,p,m),de=()=>{P(k,()=>{ie(),K&&K()})};V?V(k,ie,de):de()}else s(k,p,m)},pt=(d,p,m,w=!1,_=!1)=>{const{type:k,props:D,ref:C,children:R,dynamicChildren:E,shapeFlag:F,patchFlag:P,dirs:V}=d;if(C!=null&&Ja(C,null,m,d,!0),F&256){p.ctx.deactivate(d);return}const K=F&1&&V,ie=!Mi(d);let de;if(ie&&(de=D&&D.onVnodeBeforeUnmount)&&xt(de,p,d),F&6)M(d.component,m,w);else{if(F&128){d.suspense.unmount(m,w);return}K&&Nn(d,null,p,"beforeUnmount"),F&64?d.type.remove(d,p,m,_,ve,w):E&&(k!==Xe||P>0&&P&64)?N(E,p,m,!1,!0):(k===Xe&&P&384||!_&&F&16)&&N(R,p,m),w&&er(d)}(ie&&(de=D&&D.onVnodeUnmounted)||K)&&it(()=>{de&&xt(de,p,d),K&&Nn(d,null,p,"unmounted")},m)},er=d=>{const{type:p,el:m,anchor:w,transition:_}=d;if(p===Xe){v(m,w);return}if(p===pa){le(d);return}const k=()=>{r(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:D,delayLeave:C}=_,R=()=>D(m,k);C?C(d.el,k,R):R()}else k()},v=(d,p)=>{let m;for(;d!==p;)m=f(d),r(d),d=m;r(p)},M=(d,p,m)=>{const{bum:w,scope:_,update:k,subTree:D,um:C}=d;w&&xi(w),_.stop(),k&&(k.active=!1,pt(D,d,p,m)),C&&it(C,p),it(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},N=(d,p,m,w=!1,_=!1,k=0)=>{for(let D=k;D<d.length;D++)pt(d[D],p,m,w,_)},L=d=>d.shapeFlag&6?L(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),fe=(d,p,m)=>{d==null?p._vnode&&pt(p._vnode,null,null,!0):I(p._vnode||null,d,p,null,null,null,m),Zf(),p._vnode=d},ve={p:I,um:pt,m:Dt,r:er,mt:is,mc:ue,pc:ut,pbc:je,n:L,o:t};let te,J;return e&&([te,J]=e(ve)),{render:fe,hydrate:te,createApp:Dv(fe,te)}}function Dn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Id(t,e,n=!1){const s=t.children,r=e.children;if(z(s)&&z(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=ln(r[i]),a.el=o.el),n||Id(o,a))}}function Pv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Mv=t=>t.__isTeleport,Xe=Symbol(void 0),Xc=Symbol(void 0),Wt=Symbol(void 0),pa=Symbol(void 0),fr=[];let Ct=null;function be(t=!1){fr.push(Ct=t?null:[])}function Lv(){fr.pop(),Ct=fr[fr.length-1]||null}let Ar=1;function Ml(t){Ar+=t}function bd(t){return t.dynamicChildren=Ar>0?Ct||ws:null,Lv(),Ar>0&&Ct&&Ct.push(t),t}function Ae(t,e,n,s,r,i){return bd(W(t,e,n,s,r,i,!0))}function Td(t,e,n,s,r){return bd(Ce(t,e,n,s,r,!0))}function Za(t){return t?t.__v_isVNode===!0:!1}function Pn(t,e){return t.type===e.type&&t.key===e.key}const Oo="__vInternal",Sd=({key:t})=>t!=null?t:null,Li=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ve(t)||Je(t)||Y(t)?{i:vt,r:t,k:e,f:!!n}:t:null;function W(t,e=null,n=null,s=0,r=null,i=t===Xe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Sd(e),ref:e&&Li(e),scopeId:Ro,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Jc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ve(n)?8:16),Ar>0&&!o&&Ct&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ct.push(c),c}const Ce=Uv;function Uv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===yv)&&(t=Wt),Za(t)){const a=bn(t,e,!0);return n&&Jc(a,n),Ar>0&&!i&&Ct&&(a.shapeFlag&6?Ct[Ct.indexOf(t)]=a:Ct.push(a)),a.patchFlag|=-2,a}if(Qv(t)&&(t=t.__vccOpts),e){e=Fv(e);let{class:a,style:c}=e;a&&!Ve(a)&&(e.class=Mc(a)),Me(c)&&(jf(c)&&!z(c)&&(c=et({},c)),e.style=_s(c))}const o=Ve(t)?1:tv(t)?128:Mv(t)?64:Me(t)?4:Y(t)?2:0;return W(t,e,n,s,r,o,i,!0)}function Fv(t){return t?jf(t)||Oo in t?et({},t):t:null}function bn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Vv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Sd(a),ref:e&&e.ref?n&&r?z(r)?r.concat(Li(e)):[r,Li(e)]:Li(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&bn(t.ssContent),ssFallback:t.ssFallback&&bn(t.ssFallback),el:t.el,anchor:t.anchor}}function Yc(t=" ",e=0){return Ce(Xc,null,t,e)}function Mt(t){return t==null||typeof t=="boolean"?Ce(Wt):z(t)?Ce(Xe,null,t.slice()):typeof t=="object"?ln(t):Ce(Xc,null,String(t))}function ln(t){return t.el===null||t.memo?t:bn(t)}function Jc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Jc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Oo in e)?e._ctx=vt:r===3&&vt&&(vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:vt},n=32):(e=String(e),s&64?(n=16,e=[Yc(e)]):n=8);t.children=e,t.shapeFlag|=n}function Vv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Mc([e.class,s.class]));else if(r==="style")e.style=_s([e.style,s.style]);else if(Eo(r)){const i=e[r],o=s[r];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function xt(t,e,n,s=null){_t(t,e,7,[n,s])}const $v=Ed();let Bv=0;function jv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||$v,i={uid:Bv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new hy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yd(s,r),emitsOptions:td(s,r),emit:null,emitted:null,propsDefaults:me,inheritAttrs:s.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Xy.bind(null,i),t.ce&&t.ce(i),i}let Fe=null;const Hv=()=>Fe||vt,Rs=t=>{Fe=t,t.scope.on()},jn=()=>{Fe&&Fe.scope.off(),Fe=null};function Cd(t){return t.vnode.shapeFlag&4}let kr=!1;function qv(t,e=!1){kr=e;const{props:n,children:s}=t.vnode,r=Cd(t);Sv(t,n,r,e),kv(t,s);const i=r?Kv(t,e):void 0;return kr=!1,i}function Kv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Hf(new Proxy(t.ctx,_v));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Wv(t):null;Rs(t),js();const i=yn(s,t,0,[t.props,r]);if(Hs(),jn(),kf(i)){if(i.then(jn,jn),e)return i.then(o=>{Ll(t,o,e)}).catch(o=>{Co(o,t,0)});t.asyncDep=i}else Ll(t,i,e)}else Ad(t,e)}function Ll(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=Wf(e)),Ad(t,n)}let Ul;function Ad(t,e,n){const s=t.type;if(!t.render){if(!e&&Ul&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=et(et({isCustomElement:i,delimiters:a},o),c);s.render=Ul(r,u)}}t.render=s.render||At}Rs(t),js(),wv(t),Hs(),jn()}function zv(t){return new Proxy(t.attrs,{get(e,n){return ft(t,"get","$attrs"),e[n]}})}function Wv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=zv(t))},slots:t.slots,emit:t.emit,expose:e}}function xo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Wf(Hf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wi)return Wi[n](t)}}))}function Gv(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function Qv(t){return Y(t)&&"__vccOpts"in t}const mt=(t,e)=>qy(t,e,kr);function kd(t,e,n){const s=arguments.length;return s===2?Me(e)&&!z(e)?Za(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Za(n)&&(n=[n]),Ce(t,e,n))}const Xv="3.2.37",Yv="http://www.w3.org/2000/svg",Mn=typeof document!="undefined"?document:null,Fl=Mn&&Mn.createElement("template"),Jv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Mn.createElementNS(Yv,t):Mn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Mn.createTextNode(t),createComment:t=>Mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Fl.innerHTML=s?`<svg>${t}</svg>`:t;const a=Fl.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Zv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function e_(t,e,n){const s=t.style,r=Ve(n);if(n&&!r){for(const i in n)ec(s,i,n[i]);if(e&&!Ve(e))for(const i in e)n[i]==null&&ec(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Vl=/\s*!important$/;function ec(t,e,n){if(z(n))n.forEach(s=>ec(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=t_(t,e);Vl.test(n)?t.setProperty(Bs(s),n.replace(Vl,""),"important"):t[s]=n}}const $l=["Webkit","Moz","ms"],ga={};function t_(t,e){const n=ga[e];if(n)return n;let s=Vt(e);if(s!=="filter"&&s in t)return ga[e]=s;s=To(s);for(let r=0;r<$l.length;r++){const i=$l[r]+s;if(i in t)return ga[e]=i}return e}const Bl="http://www.w3.org/1999/xlink";function n_(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bl,e.slice(6,e.length)):t.setAttributeNS(Bl,e,n);else{const i=ey(e);n==null||i&&!Sf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function s_(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Sf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Rd,r_]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let tc=0;const i_=Promise.resolve(),o_=()=>{tc=0},a_=()=>tc||(i_.then(o_),tc=Rd());function ps(t,e,n,s){t.addEventListener(e,n,s)}function c_(t,e,n,s){t.removeEventListener(e,n,s)}function u_(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=l_(e);if(s){const u=i[e]=h_(s,r);ps(t,a,u,c)}else o&&(c_(t,a,o,c),i[e]=void 0)}}const jl=/(?:Once|Passive|Capture)$/;function l_(t){let e;if(jl.test(t)){e={};let n;for(;n=t.match(jl);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Bs(t.slice(2)),e]}function h_(t,e){const n=s=>{const r=s.timeStamp||Rd();(r_||r>=n.attached-1)&&_t(f_(s,n.value),e,5,[s])};return n.value=t,n.attached=a_(),n}function f_(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Hl=/^on[a-z]/,d_=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Zv(t,s,r):e==="style"?e_(t,n,s):Eo(e)?Lc(e)||u_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):p_(t,e,s,r))?s_(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),n_(t,e,s,r))};function p_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Hl.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Hl.test(e)&&Ve(n)?!1:e in t}const g_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ov.props;const ql=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>xi(e,n):e};function m_(t){t.target.composing=!0}function Kl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Rr={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=ql(r);const i=s||r.props&&r.props.type==="number";ps(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Fa(a)),t._assign(a)}),n&&ps(t,"change",()=>{t.value=t.value.trim()}),e||(ps(t,"compositionstart",m_),ps(t,"compositionend",Kl),ps(t,"change",Kl))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=ql(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Fa(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},y_=et({patchProp:d_},Jv);let zl;function v_(){return zl||(zl=Ov(y_))}const __=(...t)=>{const e=v_().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=w_(s);if(!r)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function w_(t){return Ve(t)?document.querySelector(t):t}function E_(){return Nd().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Nd(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const I_=typeof Proxy=="function",b_="devtools-plugin:setup",T_="plugin:settings:set";let cs,nc;function S_(){var t;return cs!==void 0||(typeof window!="undefined"&&window.performance?(cs=!0,nc=window.performance):typeof global!="undefined"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?(cs=!0,nc=global.perf_hooks.performance):cs=!1),cs}function C_(){return S_()?nc.now():Date.now()}class A_{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},s);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}i=o},now(){return C_()}},n&&n.on(T_,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:a,args:c,resolve:u})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function k_(t,e){const n=t,s=Nd(),r=E_(),i=I_&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(b_,t,e);else{const o=i?new A_(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var R_="store";function Ks(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function Dd(t){return t!==null&&typeof t=="object"}function N_(t){return t&&typeof t.then=="function"}function D_(t,e){return function(){return t(e)}}function Od(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function xd(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Po(t,n,[],t._modules.root,!0),Zc(t,n,e)}function Zc(t,e,n){var s=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,i={};Ks(r,function(o,a){i[a]=D_(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=qs({data:e}),t.strict&&L_(t),s&&n&&t._withCommit(function(){s.data=null})}function Po(t,e,n,s,r){var i=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!i&&!r){var a=eu(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=s.state})}var u=s.context=O_(t,o,n);s.forEachMutation(function(l,h){var f=o+h;x_(t,f,l,u)}),s.forEachAction(function(l,h){var f=l.root?h:o+h,g=l.handler||l;P_(t,f,g,u)}),s.forEachGetter(function(l,h){var f=o+h;M_(t,f,l,u)}),s.forEachChild(function(l,h){Po(t,e,n.concat(h),l,r)})}function O_(t,e,n){var s=e==="",r={dispatch:s?t.dispatch:function(i,o,a){var c=Qi(i,o,a),u=c.payload,l=c.options,h=c.type;return(!l||!l.root)&&(h=e+h),t.dispatch(h,u)},commit:s?t.commit:function(i,o,a){var c=Qi(i,o,a),u=c.payload,l=c.options,h=c.type;(!l||!l.root)&&(h=e+h),t.commit(h,u,l)}};return Object.defineProperties(r,{getters:{get:s?function(){return t.getters}:function(){return Pd(t,e)}},state:{get:function(){return eu(t.state,n)}}}),r}function Pd(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,s)===e){var i=r.slice(s);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function x_(t,e,n,s){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,s.state,o)})}function P_(t,e,n,s){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return N_(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function M_(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(s.state,s.getters,i.state,i.getters)})}function L_(t){bs(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function eu(t,e){return e.reduce(function(n,s){return n[s]},t)}function Qi(t,e,n){return Dd(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var U_="vuex bindings",Wl="vuex:mutations",ma="vuex:actions",us="vuex",F_=0;function V_(t,e){k_({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[U_]},function(n){n.addTimelineLayer({id:Wl,label:"Vuex Mutations",color:Gl}),n.addTimelineLayer({id:ma,label:"Vuex Actions",color:Gl}),n.addInspector({id:us,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===us)if(s.filter){var r=[];Fd(r,e._modules.root,s.filter,""),s.rootNodes=r}else s.rootNodes=[Ud(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===us){var r=s.nodeId;Pd(e,r),s.state=j_(q_(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===us){var r=s.nodeId,i=s.path;r!=="root"&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit(function(){s.set(e._state.data,i,s.state.value)})}}),e.subscribe(function(s,r){var i={};s.payload&&(i.payload=s.payload),i.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(us),n.sendInspectorState(us),n.addTimelineEvent({layerId:Wl,event:{time:Date.now(),title:s.type,data:i}})}),e.subscribeAction({before:function(s,r){var i={};s.payload&&(i.payload=s.payload),s._id=F_++,s._time=Date.now(),i.state=r,n.addTimelineEvent({layerId:ma,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:i}})},after:function(s,r){var i={},o=Date.now()-s._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(i.payload=s.payload),i.state=r,n.addTimelineEvent({layerId:ma,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:i}})}})})}var Gl=8702998,$_=6710886,B_=16777215,Md={label:"namespaced",textColor:B_,backgroundColor:$_};function Ld(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Ud(t,e){return{id:e||"root",label:Ld(e),tags:t.namespaced?[Md]:[],children:Object.keys(t._children).map(function(n){return Ud(t._children[n],e+n+"/")})}}function Fd(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[Md]:[]}),Object.keys(e._children).forEach(function(r){Fd(t,e._children[r],n,s+r+"/")})}function j_(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var i=H_(e);r.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Ld(o):o,editable:!1,value:sc(function(){return i[o]})}})}return r}function H_(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var r=e,i=s.pop();s.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[i]=sc(function(){return t[n]})}else e[n]=sc(function(){return t[n]})}),e}function q_(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,r,i){var o=s[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function sc(t){try{return t()}catch(e){return e}}var Nt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},Vd={namespaced:{configurable:!0}};Vd.namespaced.get=function(){return!!this._rawModule.namespaced};Nt.prototype.addChild=function(e,n){this._children[e]=n};Nt.prototype.removeChild=function(e){delete this._children[e]};Nt.prototype.getChild=function(e){return this._children[e]};Nt.prototype.hasChild=function(e){return e in this._children};Nt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Nt.prototype.forEachChild=function(e){Ks(this._children,e)};Nt.prototype.forEachGetter=function(e){this._rawModule.getters&&Ks(this._rawModule.getters,e)};Nt.prototype.forEachAction=function(e){this._rawModule.actions&&Ks(this._rawModule.actions,e)};Nt.prototype.forEachMutation=function(e){this._rawModule.mutations&&Ks(this._rawModule.mutations,e)};Object.defineProperties(Nt.prototype,Vd);var es=function(e){this.register([],e,!1)};es.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};es.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,r){return n=n.getChild(r),s+(n.namespaced?r+"/":"")},"")};es.prototype.update=function(e){$d([],this.root,e)};es.prototype.register=function(e,n,s){var r=this;s===void 0&&(s=!0);var i=new Nt(n,s);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&Ks(n.modules,function(a,c){r.register(e.concat(c),a,s)})};es.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],r=n.getChild(s);!r||!r.runtime||n.removeChild(s)};es.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function $d(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;$d(t.concat(s),e.getChild(s),n.modules[s])}}function K_(t){return new ct(t)}var ct=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var r=e.strict;r===void 0&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new es(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(f,g){return c.call(o,f,g)},this.commit=function(f,g,y){return u.call(o,f,g,y)},this.strict=r;var l=this._modules.root.state;Po(this,l,[],this._modules.root),Zc(this,l),s.forEach(function(h){return h(n)})},tu={state:{configurable:!0}};ct.prototype.install=function(e,n){e.provide(n||R_,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&V_(e,this)};tu.state.get=function(){return this._state.data};tu.state.set=function(t){};ct.prototype.commit=function(e,n,s){var r=this,i=Qi(e,n,s),o=i.type,a=i.payload,c={type:o,payload:a},u=this._mutations[o];!u||(this._withCommit(function(){u.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(l){return l(c,r.state)}))};ct.prototype.dispatch=function(e,n){var s=this,r=Qi(e,n),i=r.type,o=r.payload,a={type:i,payload:o},c=this._actions[i];if(!!c){try{this._actionSubscribers.slice().filter(function(l){return l.before}).forEach(function(l){return l.before(a,s.state)})}catch{}var u=c.length>1?Promise.all(c.map(function(l){return l(o)})):c[0](o);return new Promise(function(l,h){u.then(function(f){try{s._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,s.state)})}catch{}l(f)},function(f){try{s._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,s.state,f)})}catch{}h(f)})})}};ct.prototype.subscribe=function(e,n){return Od(e,this._subscribers,n)};ct.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return Od(s,this._actionSubscribers,n)};ct.prototype.watch=function(e,n,s){var r=this;return bs(function(){return e(r.state,r.getters)},n,Object.assign({},s))};ct.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};ct.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Po(this,this.state,e,this._modules.get(e),s.preserveState),Zc(this,this.state)};ct.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=eu(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),xd(this)};ct.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};ct.prototype.hotUpdate=function(e){this._modules.update(e),xd(this,!0)};ct.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(ct.prototype,tu);var Wr=jd(function(t,e){var n={};return Bd(e).forEach(function(s){var r=s.key,i=s.val;n[r]=function(){var a=this.$store.state,c=this.$store.getters;if(t){var u=Hd(this.$store,"mapState",t);if(!u)return;a=u.context.state,c=u.context.getters}return typeof i=="function"?i.call(this,a,c):a[i]},n[r].vuex=!0}),n}),Mo=jd(function(t,e){var n={};return Bd(e).forEach(function(s){var r=s.key,i=s.val;n[r]=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var u=this.$store.commit;if(t){var l=Hd(this.$store,"mapMutations",t);if(!l)return;u=l.context.commit}return typeof i=="function"?i.apply(this,[u].concat(a)):u.apply(this.$store,[i].concat(a))}}),n});function Bd(t){return z_(t)?Array.isArray(t)?t.map(function(e){return{key:e,val:e}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}}):[]}function z_(t){return Array.isArray(t)||Dd(t)}function jd(t){return function(e,n){return typeof e!="string"?(n=e,e=""):e.charAt(e.length-1)!=="/"&&(e+="/"),t(e,n)}}function Hd(t,e,n){var s=t._modulesNamespaceMap[n];return s}/*!
  * vue-router v4.1.1
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const gs=typeof window!="undefined";function W_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ge=Object.assign;function ya(t,e){const n={};for(const s in e){const r=e[s];n[s]=kt(r)?r.map(t):t(r)}return n}const dr=()=>{},kt=Array.isArray,G_=/\/$/,Q_=t=>t.replace(G_,"");function va(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Z_(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function X_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ql(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Y_(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ns(e.matched[s],n.matched[r])&&qd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ns(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!J_(t[n],e[n]))return!1;return!0}function J_(t,e){return kt(t)?Xl(t,e):kt(e)?Xl(e,t):t===e}function Xl(t,e){return kt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Z_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Nr;(function(t){t.pop="pop",t.push="push"})(Nr||(Nr={}));var pr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(pr||(pr={}));function ew(t){if(!t)if(gs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Q_(t)}const tw=/^[^#]+#/;function nw(t,e){return t.replace(tw,"#")+e}function sw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Lo=()=>({left:window.pageXOffset,top:window.pageYOffset});function rw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=sw(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Yl(t,e){return(history.state?history.state.position-e:-1)+t}const rc=new Map;function iw(t,e){rc.set(t,e)}function ow(t){const e=rc.get(t);return rc.delete(t),e}let aw=()=>location.protocol+"//"+location.host;function Kd(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Ql(c,"")}return Ql(n,t)+s+r}function cw(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=Kd(t,location),y=n.value,S=e.value;let I=0;if(f){if(n.value=g,e.value=f,o&&o===y){o=null;return}I=S?f.position-S.position:0}else s(g);r.forEach(A=>{A(n.value,y,{delta:I,type:Nr.pop,direction:I?I>0?pr.forward:pr.back:pr.unknown})})};function c(){o=n.value}function u(f){r.push(f);const g=()=>{const y=r.indexOf(f);y>-1&&r.splice(y,1)};return i.push(g),g}function l(){const{history:f}=window;!f.state||f.replaceState(ge({},f.state,{scroll:Lo()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Jl(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Lo():null}}function uw(t){const{history:e,location:n}=window,s={value:Kd(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:aw()+t+c;try{e[l?"replaceState":"pushState"](u,"",f),r.value=u}catch(g){console.error(g),n[l?"replace":"assign"](f)}}function o(c,u){const l=ge({},e.state,Jl(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=ge({},r.value,e.state,{forward:c,scroll:Lo()});i(l.current,l,!0);const h=ge({},Jl(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function lw(t){t=ew(t);const e=uw(t),n=cw(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ge({location:"",base:t,go:s,createHref:nw.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function hw(t){return typeof t=="string"||t&&typeof t=="object"}function zd(t){return typeof t=="string"||typeof t=="symbol"}const on={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Wd=Symbol("");var Zl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Zl||(Zl={}));function Ds(t,e){return ge(new Error,{type:t,[Wd]:!0},e)}function an(t,e){return t instanceof Error&&Wd in t&&(e==null||!!(t.type&e))}const eh="[^/]+?",fw={sensitive:!1,strict:!1,start:!0,end:!0},dw=/[.+*?^${}()[\]/\\]/g;function pw(t,e){const n=ge({},fw,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const f=u[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(dw,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:S,optional:I,regexp:A}=f;i.push({name:y,repeatable:S,optional:I});const x=A||eh;if(x!==eh){g+=10;try{new RegExp(`(${x})`)}catch(X){throw new Error(`Invalid custom RegExp for param "${y}" (${x}): `+X.message)}}let q=S?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(q=I&&u.length<2?`(?:/${q})`:"/"+q),I&&(q+="?"),r+=q,g+=20,I&&(g+=-8),S&&(g+=-20),x===".*"&&(g+=-50)}l.push(g)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let f=1;f<l.length;f++){const g=l[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(u){let l="",h=!1;for(const f of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const g of f)if(g.type===0)l+=g.value;else if(g.type===1){const{value:y,repeatable:S,optional:I}=g,A=y in u?u[y]:"";if(kt(A)&&!S)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const x=kt(A)?A.join("/"):A;if(!x)if(I)f.length<2&&t.length>1&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);l+=x}}return l}return{re:o,score:s,keys:i,parse:a,stringify:c}}function gw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function mw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=gw(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(th(s))return 1;if(th(r))return-1}return r.length-s.length}function th(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const yw={type:0,value:""},vw=/[a-zA-Z0-9_]/;function _w(t){if(!t)return[[]];if(t==="/")return[[yw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:vw.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function ww(t,e,n){const s=pw(_w(t.path),n),r=ge(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Ew(t,e){const n=[],s=new Map;e=sh({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,f){const g=!f,y=bw(l);y.aliasOf=f&&f.record;const S=sh(e,l),I=[y];if("alias"in l){const q=typeof l.alias=="string"?[l.alias]:l.alias;for(const X of q)I.push(ge({},y,{components:f?f.record.components:y.components,path:X,aliasOf:f?f.record:y}))}let A,x;for(const q of I){const{path:X}=q;if(h&&X[0]!=="/"){const le=h.record.path,Te=le[le.length-1]==="/"?"":"/";q.path=h.record.path+(X&&Te+X)}if(A=ww(q,h,S),f?f.alias.push(A):(x=x||A,x!==A&&x.alias.push(A),g&&l.name&&!nh(A)&&o(l.name)),y.children){const le=y.children;for(let Te=0;Te<le.length;Te++)i(le[Te],A,f&&f.children[Te])}f=f||A,c(A)}return x?()=>{o(x)}:dr}function o(l){if(zd(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&mw(l,n[h])>=0&&(l.record.path!==n[h].record.path||!Gd(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!nh(l)&&s.set(l.record.name,l)}function u(l,h){let f,g={},y,S;if("name"in l&&l.name){if(f=s.get(l.name),!f)throw Ds(1,{location:l});S=f.record.name,g=ge(Iw(h.params,f.keys.filter(x=>!x.optional).map(x=>x.name)),l.params),y=f.stringify(g)}else if("path"in l)y=l.path,f=n.find(x=>x.re.test(y)),f&&(g=f.parse(y),S=f.record.name);else{if(f=h.name?s.get(h.name):n.find(x=>x.re.test(h.path)),!f)throw Ds(1,{location:l,currentLocation:h});S=f.record.name,g=ge({},h.params,l.params),y=f.stringify(g)}const I=[];let A=f;for(;A;)I.unshift(A.record),A=A.parent;return{name:S,path:y,params:g,matched:I,meta:Sw(I)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Iw(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function bw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Tw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Tw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function nh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Sw(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function sh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Gd(t,e){return e.children.some(n=>n===t||Gd(t,n))}const Qd=/#/g,Cw=/&/g,Aw=/\//g,kw=/=/g,Rw=/\?/g,Xd=/\+/g,Nw=/%5B/g,Dw=/%5D/g,Yd=/%5E/g,Ow=/%60/g,Jd=/%7B/g,xw=/%7C/g,Zd=/%7D/g,Pw=/%20/g;function nu(t){return encodeURI(""+t).replace(xw,"|").replace(Nw,"[").replace(Dw,"]")}function Mw(t){return nu(t).replace(Jd,"{").replace(Zd,"}").replace(Yd,"^")}function ic(t){return nu(t).replace(Xd,"%2B").replace(Pw,"+").replace(Qd,"%23").replace(Cw,"%26").replace(Ow,"`").replace(Jd,"{").replace(Zd,"}").replace(Yd,"^")}function Lw(t){return ic(t).replace(kw,"%3D")}function Uw(t){return nu(t).replace(Qd,"%23").replace(Rw,"%3F")}function Fw(t){return t==null?"":Uw(t).replace(Aw,"%2F")}function Xi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Vw(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Xd," "),o=i.indexOf("="),a=Xi(o<0?i:i.slice(0,o)),c=o<0?null:Xi(i.slice(o+1));if(a in e){let u=e[a];kt(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function rh(t){let e="";for(let n in t){const s=t[n];if(n=Lw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(kt(s)?s.map(i=>i&&ic(i)):[s&&ic(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function $w(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=kt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Bw=Symbol(""),ih=Symbol(""),su=Symbol(""),ep=Symbol(""),oc=Symbol("");function nr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function hn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ds(4,{from:n,to:e})):h instanceof Error?a(h):hw(h)?a(Ds(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function _a(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(jw(a)){const u=(a.__vccOpts||a)[e];u&&r.push(hn(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=W_(u)?u.default:u;i.components[o]=l;const f=(l.__vccOpts||l)[e];return f&&hn(f,n,s,i,o)()}))}}return r}function jw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function oh(t){const e=vn(su),n=vn(ep),s=mt(()=>e.resolve(Bn(t.to))),r=mt(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const f=h.findIndex(Ns.bind(null,l));if(f>-1)return f;const g=ah(c[u-2]);return u>1&&ah(l)===g&&h[h.length-1].path!==g?h.findIndex(Ns.bind(null,c[u-2])):f}),i=mt(()=>r.value>-1&&Kw(n.params,s.value.params)),o=mt(()=>r.value>-1&&r.value===n.matched.length-1&&qd(n.params,s.value.params));function a(c={}){return qw(c)?e[Bn(t.replace)?"replace":"push"](Bn(t.to)).catch(dr):Promise.resolve()}return{route:s,href:mt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Hw=cd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:oh,setup(t,{slots:e}){const n=qs(oh(t)),{options:s}=vn(su),r=mt(()=>({[ch(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ch(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:kd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),tp=Hw;function qw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Kw(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!kt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function ah(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ch=(t,e,n)=>t!=null?t:e!=null?e:n,zw=cd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=vn(oc),r=mt(()=>t.route||s.value),i=vn(ih,0),o=mt(()=>{let u=Bn(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=mt(()=>r.value.matched[o.value]);Pi(ih,mt(()=>o.value+1)),Pi(Bw,a),Pi(oc,r);const c=Vy();return bs(()=>[c.value,a.value,t.name],([u,l,h],[f,g,y])=>{l&&(l.instances[h]=u,g&&g!==l&&u&&u===f&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!Ns(l,g)||!f)&&(l.enterCallbacks[h]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=r.value,l=a.value,h=l&&l.components[t.name],f=t.name;if(!h)return uh(n.default,{Component:h,route:u});const g=l.props[t.name],y=g?g===!0?u.params:typeof g=="function"?g(u):g:null,I=kd(h,ge({},y,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(l.instances[f]=null)},ref:c}));return uh(n.default,{Component:I,route:u})||I}}});function uh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const np=zw;function Ww(t){const e=Ew(t.routes,t),n=t.parseQuery||Vw,s=t.stringifyQuery||rh,r=t.history,i=nr(),o=nr(),a=nr(),c=$y(on);let u=on;gs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=ya.bind(null,v=>""+v),h=ya.bind(null,Fw),f=ya.bind(null,Xi);function g(v,M){let N,L;return zd(v)?(N=e.getRecordMatcher(v),L=M):L=v,e.addRoute(L,N)}function y(v){const M=e.getRecordMatcher(v);M&&e.removeRoute(M)}function S(){return e.getRoutes().map(v=>v.record)}function I(v){return!!e.getRecordMatcher(v)}function A(v,M){if(M=ge({},M||c.value),typeof v=="string"){const J=va(n,v,M.path),d=e.resolve({path:J.path},M),p=r.createHref(J.fullPath);return ge(J,d,{params:f(d.params),hash:Xi(J.hash),redirectedFrom:void 0,href:p})}let N;if("path"in v)N=ge({},v,{path:va(n,v.path,M.path).path});else{const J=ge({},v.params);for(const d in J)J[d]==null&&delete J[d];N=ge({},v,{params:h(v.params)}),M.params=h(M.params)}const L=e.resolve(N,M),fe=v.hash||"";L.params=l(f(L.params));const ve=X_(s,ge({},v,{hash:Mw(fe),path:L.path})),te=r.createHref(ve);return ge({fullPath:ve,hash:fe,query:s===rh?$w(v.query):v.query||{}},L,{redirectedFrom:void 0,href:te})}function x(v){return typeof v=="string"?va(n,v,c.value.path):ge({},v)}function q(v,M){if(u!==v)return Ds(8,{from:M,to:v})}function X(v){return De(v)}function le(v){return X(ge(x(v),{replace:!0}))}function Te(v){const M=v.matched[v.matched.length-1];if(M&&M.redirect){const{redirect:N}=M;let L=typeof N=="function"?N(v):N;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=x(L):{path:L},L.params={}),ge({query:v.query,hash:v.hash,params:"path"in L?{}:v.params},L)}}function De(v,M){const N=u=A(v),L=c.value,fe=v.state,ve=v.force,te=v.replace===!0,J=Te(N);if(J)return De(ge(x(J),{state:fe,force:ve,replace:te}),M||N);const d=N;d.redirectedFrom=M;let p;return!ve&&Y_(s,L,N)&&(p=Ds(16,{to:d,from:L}),os(L,L,!0,!1)),(p?Promise.resolve(p):ue(d,L)).catch(m=>an(m)?an(m,2)?m:ut(m):ye(m,d,L)).then(m=>{if(m){if(an(m,2))return De(ge(x(m.to),{state:fe,force:ve,replace:te}),M||d)}else m=je(d,L,!0,te,fe);return we(d,L,m),m})}function ee(v,M){const N=q(v,M);return N?Promise.reject(N):Promise.resolve()}function ue(v,M){let N;const[L,fe,ve]=Gw(v,M);N=_a(L.reverse(),"beforeRouteLeave",v,M);for(const J of L)J.leaveGuards.forEach(d=>{N.push(hn(d,v,M))});const te=ee.bind(null,v,M);return N.push(te),ls(N).then(()=>{N=[];for(const J of i.list())N.push(hn(J,v,M));return N.push(te),ls(N)}).then(()=>{N=_a(fe,"beforeRouteUpdate",v,M);for(const J of fe)J.updateGuards.forEach(d=>{N.push(hn(d,v,M))});return N.push(te),ls(N)}).then(()=>{N=[];for(const J of v.matched)if(J.beforeEnter&&!M.matched.includes(J))if(kt(J.beforeEnter))for(const d of J.beforeEnter)N.push(hn(d,v,M));else N.push(hn(J.beforeEnter,v,M));return N.push(te),ls(N)}).then(()=>(v.matched.forEach(J=>J.enterCallbacks={}),N=_a(ve,"beforeRouteEnter",v,M),N.push(te),ls(N))).then(()=>{N=[];for(const J of o.list())N.push(hn(J,v,M));return N.push(te),ls(N)}).catch(J=>an(J,8)?J:Promise.reject(J))}function we(v,M,N){for(const L of a.list())L(v,M,N)}function je(v,M,N,L,fe){const ve=q(v,M);if(ve)return ve;const te=M===on,J=gs?history.state:{};N&&(L||te?r.replace(v.fullPath,ge({scroll:te&&J&&J.scroll},fe)):r.push(v.fullPath,fe)),c.value=v,os(v,M,N,te),ut()}let He;function It(){He||(He=r.listen((v,M,N)=>{if(!er.listening)return;const L=A(v),fe=Te(L);if(fe){De(ge(fe,{replace:!0}),L).catch(dr);return}u=L;const ve=c.value;gs&&iw(Yl(ve.fullPath,N.delta),Lo()),ue(L,ve).catch(te=>an(te,12)?te:an(te,2)?(De(te.to,L).then(J=>{an(J,20)&&!N.delta&&N.type===Nr.pop&&r.go(-1,!1)}).catch(dr),Promise.reject()):(N.delta&&r.go(-N.delta,!1),ye(te,L,ve))).then(te=>{te=te||je(L,ve,!1),te&&(N.delta?r.go(-N.delta,!1):N.type===Nr.pop&&an(te,20)&&r.go(-1,!1)),we(L,ve,te)}).catch(dr)}))}let sn=nr(),is=nr(),Oe;function ye(v,M,N){ut(v);const L=is.list();return L.length?L.forEach(fe=>fe(v,M,N)):console.error(v),Promise.reject(v)}function he(){return Oe&&c.value!==on?Promise.resolve():new Promise((v,M)=>{sn.add([v,M])})}function ut(v){return Oe||(Oe=!v,It(),sn.list().forEach(([M,N])=>v?N(v):M()),sn.reset()),v}function os(v,M,N,L){const{scrollBehavior:fe}=t;if(!gs||!fe)return Promise.resolve();const ve=!N&&ow(Yl(v.fullPath,0))||(L||!N)&&history.state&&history.state.scroll||null;return Qf().then(()=>fe(v,M,ve)).then(te=>te&&rw(te)).catch(te=>ye(te,v,M))}const jt=v=>r.go(v);let Dt;const pt=new Set,er={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,hasRoute:I,getRoutes:S,resolve:A,options:t,push:X,replace:le,go:jt,back:()=>jt(-1),forward:()=>jt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:is.add,isReady:he,install(v){const M=this;v.component("RouterLink",tp),v.component("RouterView",np),v.config.globalProperties.$router=M,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Bn(c)}),gs&&!Dt&&c.value===on&&(Dt=!0,X(r.location).catch(fe=>{}));const N={};for(const fe in on)N[fe]=mt(()=>c.value[fe]);v.provide(su,M),v.provide(ep,qs(N)),v.provide(oc,c);const L=v.unmount;pt.add(v),v.unmount=function(){pt.delete(v),pt.size<1&&(u=on,He&&He(),He=null,c.value=on,Dt=!1,Oe=!1),L()}}};return er}function ls(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Gw(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ns(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Ns(u,c))||r.push(c))}return[n,s,r]}const Qw={id:"app",class:"content"},Xw={__name:"App",setup(t){return(e,n)=>(be(),Ae("div",Qw,[(be(),Td(Bn(np),{key:e.$route.path}))]))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Yw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},rp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(f=64)),s.push(n[l],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Yw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const y=u<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Jw=function(t){const e=sp(t);return rp.encodeByteArray(e,!0)},ip=function(t){return Jw(t).replace(/\./g,"")},Zw=function(t){try{return rp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function op(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function ap(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tE(){return $e().indexOf("Electron/")>=0}function up(){const t=$e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nE(){return $e().indexOf("MSAppHost/")>=0}function sE(){return typeof indexedDB=="object"}function rE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="FirebaseError";class ts extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=iE,Object.setPrototypeOf(this,ts.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gr.prototype.create)}}class Gr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?oE(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ts(r,a,s)}}function oE(t,e){return t.replace(aE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const aE=/\{\$([^}]+)}/g;function cE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(lh(i)&&lh(o)){if(!Yi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function lh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function or(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function ar(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function uE(t,e){const n=new lE(t,e);return n.subscribe.bind(n)}class lE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");hE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=wa),r.error===void 0&&(r.error=wa),r.complete===void 0&&(r.complete=wa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t){return t&&t._delegate?t._delegate:t}class Kn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new eE;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pE(e))try{this.getOrInitializeService({instanceIdentifier:xn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xn){return this.instances.has(e)}getOptions(e=xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:dE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xn){return this.component?this.component.multipleInstances?e:xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dE(t){return t===xn?void 0:t}function pE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const mE={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},yE=oe.INFO,vE={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},_E=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=vE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ru{constructor(e){this.name=e,this._logLevel=yE,this._logHandler=_E,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const wE=(t,e)=>e.some(n=>t instanceof n);let hh,fh;function EE(){return hh||(hh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function IE(){return fh||(fh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lp=new WeakMap,ac=new WeakMap,hp=new WeakMap,Ea=new WeakMap,iu=new WeakMap;function bE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_n(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lp.set(n,t)}).catch(()=>{}),iu.set(e,t),e}function TE(t){if(ac.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ac.set(t,e)}let cc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ac.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function SE(t){cc=t(cc)}function CE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ia(this),e,...n);return hp.set(s,e.sort?e.sort():[e]),_n(s)}:IE().includes(t)?function(...e){return t.apply(Ia(this),e),_n(lp.get(this))}:function(...e){return _n(t.apply(Ia(this),e))}}function AE(t){return typeof t=="function"?CE(t):(t instanceof IDBTransaction&&TE(t),wE(t,EE())?new Proxy(t,cc):t)}function _n(t){if(t instanceof IDBRequest)return bE(t);if(Ea.has(t))return Ea.get(t);const e=AE(t);return e!==t&&(Ea.set(t,e),iu.set(e,t)),e}const Ia=t=>iu.get(t);function kE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=_n(o);return s&&o.addEventListener("upgradeneeded",c=>{s(_n(o.result),c.oldVersion,c.newVersion,_n(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const RE=["get","getKey","getAll","getAllKeys","count"],NE=["put","add","delete","clear"],ba=new Map;function dh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ba.get(e))return ba.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=NE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||RE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return ba.set(e,i),i}SE(t=>({...t,get:(e,n,s)=>dh(e,n)||t.get(e,n,s),has:(e,n)=>!!dh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(OE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function OE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uc="@firebase/app",ph="0.7.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=new ru("@firebase/app"),xE="@firebase/app-compat",PE="@firebase/analytics-compat",ME="@firebase/analytics",LE="@firebase/app-check-compat",UE="@firebase/app-check",FE="@firebase/auth",VE="@firebase/auth-compat",$E="@firebase/database",BE="@firebase/database-compat",jE="@firebase/functions",HE="@firebase/functions-compat",qE="@firebase/installations",KE="@firebase/installations-compat",zE="@firebase/messaging",WE="@firebase/messaging-compat",GE="@firebase/performance",QE="@firebase/performance-compat",XE="@firebase/remote-config",YE="@firebase/remote-config-compat",JE="@firebase/storage",ZE="@firebase/storage-compat",e0="@firebase/firestore",t0="@firebase/firestore-compat",n0="firebase",s0="9.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp="[DEFAULT]",r0={[uc]:"fire-core",[xE]:"fire-core-compat",[ME]:"fire-analytics",[PE]:"fire-analytics-compat",[UE]:"fire-app-check",[LE]:"fire-app-check-compat",[FE]:"fire-auth",[VE]:"fire-auth-compat",[$E]:"fire-rtdb",[BE]:"fire-rtdb-compat",[jE]:"fire-fn",[HE]:"fire-fn-compat",[qE]:"fire-iid",[KE]:"fire-iid-compat",[zE]:"fire-fcm",[WE]:"fire-fcm-compat",[GE]:"fire-perf",[QE]:"fire-perf-compat",[XE]:"fire-rc",[YE]:"fire-rc-compat",[JE]:"fire-gcs",[ZE]:"fire-gcs-compat",[e0]:"fire-fst",[t0]:"fire-fst-compat","fire-js":"fire-js",[n0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new Map,lc=new Map;function i0(t,e){try{t.container.addComponent(e)}catch(n){ou.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Os(t){const e=t.name;if(lc.has(e))return ou.debug(`There were multiple attempts to register component ${e}.`),!1;lc.set(e,t);for(const n of Ji.values())i0(n,t);return!0}function au(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},zn=new Gr("app","Firebase",o0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=s0;function c0(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:fp,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw zn.create("bad-app-name",{appName:String(s)});const r=Ji.get(s);if(r){if(Yi(t,r.options)&&Yi(n,r.config))return r;throw zn.create("duplicate-app",{appName:s})}const i=new gE(s);for(const a of lc.values())i.addComponent(a);const o=new a0(t,n,i);return Ji.set(s,o),o}function dp(t=fp){const e=Ji.get(t);if(!e)throw zn.create("no-app",{appName:t});return e}function wn(t,e,n){var s;let r=(s=r0[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ou.warn(a.join(" "));return}Os(new Kn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="firebase-heartbeat-database",l0=1,Dr="firebase-heartbeat-store";let Ta=null;function pp(){return Ta||(Ta=kE(u0,l0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Dr)}}}).catch(t=>{throw zn.create("storage-open",{originalErrorMessage:t.message})})),Ta}async function h0(t){var e;try{return(await pp()).transaction(Dr).objectStore(Dr).get(gp(t))}catch(n){throw zn.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function gh(t,e){var n;try{const r=(await pp()).transaction(Dr,"readwrite");return await r.objectStore(Dr).put(e,gp(t)),r.done}catch(s){throw zn.create("storage-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message})}}function gp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0=1024,d0=30*24*60*60*1e3;class p0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new m0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=mh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=d0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=mh(),{heartbeatsToSend:n,unsentEntries:s}=g0(this._heartbeatsCache.heartbeats),r=ip(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function mh(){return new Date().toISOString().substring(0,10)}function g0(t,e=f0){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),yh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),yh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class m0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sE()?rE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await h0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return gh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return gh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function yh(t){return ip(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(t){Os(new Kn("platform-logger",e=>new DE(e),"PRIVATE")),Os(new Kn("heartbeat",e=>new p0(e),"PRIVATE")),wn(uc,ph,t),wn(uc,ph,"esm2017"),wn("fire-js","")}y0("");function cu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function mp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const v0=mp,yp=new Gr("auth","Firebase",mp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh=new ru("@firebase/auth");function Ui(t,...e){vh.logLevel<=oe.ERROR&&vh.error(`Auth (${Xr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,...e){throw uu(t,...e)}function Lt(t,...e){return uu(t,...e)}function _0(t,e,n){const s=Object.assign(Object.assign({},v0()),{[e]:n});return new Gr("auth","Firebase",s).create(e,{appName:t.name})}function uu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return yp.create(t,...e)}function j(t,e,...n){if(!t)throw uu(e,...n)}function qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ui(e),new Error(e)}function Jt(t,e){t||qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=new Map;function Kt(t){Jt(t instanceof Function,"Expected a class definition");let e=_h.get(t);return e?(Jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_h.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(t,e){const n=au(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Yi(i,e!=null?e:{}))return r;Rt(r,"already-initialized")}return n.initialize({options:e})}function E0(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function I0(){return wh()==="http:"||wh()==="https:"}function wh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(I0()||ap()||"connection"in navigator)?navigator.onLine:!0}function T0(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jt(n>e,"Short delay should be less than long delay!"),this.isMobile=op()||cp()}get(){return b0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(t,e){Jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=new Yr(3e4,6e4);function Jr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zr(t,e,n,s,r={}){return _p(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Qr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),vp.fetch()(wp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function _p(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},S0),e);try{const r=new A0(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Si(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Si(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Si(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Si(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw _0(t,l,u);Rt(t,l)}}catch(r){if(r instanceof ts)throw r;Rt(t,"network-request-failed")}}async function ei(t,e,n,s,r={}){const i=await Zr(t,e,n,s,r);return"mfaPendingCredential"in i&&Rt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function wp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?lu(t.config,r):`${t.config.apiScheme}://${r}`}class A0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Lt(this.auth,"network-request-failed")),C0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Si(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Lt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k0(t,e){return Zr(t,"POST","/v1/accounts:delete",e)}async function R0(t,e){return Zr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function N0(t,e=!1){const n=$t(t),s=await n.getIdToken(e),r=hu(s);j(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:gr(Sa(r.auth_time)),issuedAtTime:gr(Sa(r.iat)),expirationTime:gr(Sa(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Sa(t){return Number(t)*1e3}function hu(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return Ui("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zw(s);return i?JSON.parse(i):(Ui("Failed to decode base64 JWT payload"),null)}catch(i){return Ui("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function D0(t){const e=hu(t);return j(e,"internal-error"),j(typeof e.exp!="undefined","internal-error"),j(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ts&&O0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function O0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gr(this.lastLoginAt),this.creationTime=gr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Or(t,R0(n,{idToken:s}));j(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?L0(i.providerUserInfo):[],a=M0(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ep(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function P0(t){const e=$t(t);await Zi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function M0(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function L0(t){return t.map(e=>{var{providerId:n}=e,s=cu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U0(t,e){const n=await _p(t,{},async()=>{const s=Qr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=wp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",vp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken!="undefined","internal-error"),j(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):D0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await U0(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new xr;return s&&(j(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(j(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xr,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,e){j(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Hn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=cu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new x0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ep(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Or(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return N0(this,e)}reload(){return P0(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Zi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Or(this,k0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:q,emailVerified:X,isAnonymous:le,providerData:Te,stsTokenManager:De}=n;j(q&&De,e,"internal-error");const ee=xr.fromJSON(this.name,De);j(typeof q=="string",e,"internal-error"),cn(h,e.name),cn(f,e.name),j(typeof X=="boolean",e,"internal-error"),j(typeof le=="boolean",e,"internal-error"),cn(g,e.name),cn(y,e.name),cn(S,e.name),cn(I,e.name),cn(A,e.name),cn(x,e.name);const ue=new Hn({uid:q,auth:e,email:f,emailVerified:X,displayName:h,isAnonymous:le,photoURL:y,phoneNumber:g,tenantId:S,stsTokenManager:ee,createdAt:A,lastLoginAt:x});return Te&&Array.isArray(Te)&&(ue.providerData=Te.map(we=>Object.assign({},we))),I&&(ue._redirectEventId=I),ue}static async _fromIdTokenResponse(e,n,s=!1){const r=new xr;r.updateFromServerResponse(n);const i=new Hn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Zi(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ip.type="NONE";const Eh=Ip;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t,e,n){return`firebase:${t}:${e}:${n}`}class Ts{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Fi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Fi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Hn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ts(Kt(Eh),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Kt(Eh);const o=Fi(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Hn._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ts(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ts(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ap(e))return"Blackberry";if(kp(e))return"Webos";if(fu(e))return"Safari";if((e.includes("chrome/")||Tp(e))&&!e.includes("edge/"))return"Chrome";if(Cp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function bp(t=$e()){return/firefox\//i.test(t)}function fu(t=$e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tp(t=$e()){return/crios\//i.test(t)}function Sp(t=$e()){return/iemobile/i.test(t)}function Cp(t=$e()){return/android/i.test(t)}function Ap(t=$e()){return/blackberry/i.test(t)}function kp(t=$e()){return/webos/i.test(t)}function Uo(t=$e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function F0(t=$e()){var e;return Uo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function V0(){return up()&&document.documentMode===10}function Rp(t=$e()){return Uo(t)||Cp(t)||kp(t)||Ap(t)||/windows phone/i.test(t)||Sp(t)}function $0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(t,e=[]){let n;switch(t){case"Browser":n=Ih($e());break;case"Worker":n=`${Ih($e())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bh(this),this.idTokenSubscription=new bh(this),this.beforeStateQueue=new B0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Ts.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Zi(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=T0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$t(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kt(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await Ts.create(this,[Kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Np(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Fo(t){return $t(t)}class bh{constructor(e){this.auth=e,this.observer=null,this.addObserver=uE(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,n){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}async function H0(t,e){return Zr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q0(t,e){return ei(t,"POST","/v1/accounts:signInWithPassword",Jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K0(t,e){return ei(t,"POST","/v1/accounts:signInWithEmailLink",Jr(t,e))}async function z0(t,e){return ei(t,"POST","/v1/accounts:signInWithEmailLink",Jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends du{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Pr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Pr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return q0(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return K0(e,{email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return H0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return z0(e,{idToken:n,email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(t,e){return ei(t,"POST","/v1/accounts:signInWithIdp",Jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0="http://localhost";class Wn extends du{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=cu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Wn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ss(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ss(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ss(e,n)}buildRequest(){const e={requestUri:W0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Q0(t){const e=or(ar(t)).link,n=e?or(ar(e)).deep_link_id:null,s=or(ar(t)).deep_link_id;return(s?or(ar(s)).link:null)||s||n||e||t}class pu{constructor(e){var n,s,r,i,o,a;const c=or(ar(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=G0((r=c.mode)!==null&&r!==void 0?r:null);j(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Q0(e);try{return new pu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.providerId=zs.PROVIDER_ID}static credential(e,n){return Pr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=pu.parseLink(n);return j(s,"argument-error"),Pr._fromEmailAndCode(e,s.code,s.tenantId)}}zs.PROVIDER_ID="password";zs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Dp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends ti{constructor(){super("facebook.com")}static credential(e){return Wn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends ti{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return dn.credential(n,s)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends ti{constructor(){super("github.com")}static credential(e){return Wn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends ti{constructor(){super("twitter.com")}static credential(e,n){return Wn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return gn.credential(n,s)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X0(t,e){return ei(t,"POST","/v1/accounts:signUp",Jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Hn._fromIdTokenResponse(e,s,r),o=Th(s);return new Gn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Th(s);return new Gn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Th(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends ts{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,eo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new eo(e,n,s,r)}}function Op(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?eo._fromErrorAndOperation(t,i,e,s):i})}async function Y0(t,e,n=!1){const s=await Or(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J0(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await Or(t,Op(r,i,e,t),n);j(o.idToken,r,"internal-error");const a=hu(o.idToken);j(a,r,"internal-error");const{sub:c}=a;return j(t.uid===c,r,"user-mismatch"),Gn._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Rt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xp(t,e,n=!1){const s="signIn",r=await Op(t,s,e),i=await Gn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Z0(t,e){return xp(Fo(t),e)}async function eI(t,e,n){const s=Fo(t),r=await X0(s,{returnSecureToken:!0,email:e,password:n}),i=await Gn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function tI(t,e,n){return Z0($t(t),zs.credential(e,n))}function nI(t){return $t(t).signOut()}const to="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(to,"1"),this.storage.removeItem(to),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(){const t=$e();return fu(t)||Uo(t)}const rI=1e3,iI=10;class Mp extends Pp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sI()&&$0(),this.fallbackToPolling=Rp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);V0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,iI):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},rI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mp.type="LOCAL";const oI=Mp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp extends Pp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Lp.type="SESSION";const Up=Lp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Vo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await aI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=gu("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return window}function uI(t){Ut().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(){return typeof Ut().WorkerGlobalScope!="undefined"&&typeof Ut().importScripts=="function"}async function lI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fI(){return Fp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp="firebaseLocalStorageDb",dI=1,no="firebaseLocalStorage",$p="fbase_key";class ni{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $o(t,e){return t.transaction([no],e?"readwrite":"readonly").objectStore(no)}function pI(){const t=indexedDB.deleteDatabase(Vp);return new ni(t).toPromise()}function fc(){const t=indexedDB.open(Vp,dI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(no,{keyPath:$p})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(no)?e(s):(s.close(),await pI(),e(await fc()))})})}async function Sh(t,e,n){const s=$o(t,!0).put({[$p]:e,value:n});return new ni(s).toPromise()}async function gI(t,e){const n=$o(t,!1).get(e),s=await new ni(n).toPromise();return s===void 0?null:s.value}function Ch(t,e){const n=$o(t,!0).delete(e);return new ni(n).toPromise()}const mI=800,yI=3;class Bp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>yI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vo._getInstance(fI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lI(),!this.activeServiceWorker)return;this.sender=new cI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fc();return await Sh(e,to,"1"),await Ch(e,to),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Sh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>gI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ch(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=$o(r,!1).getAll();return new ni(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bp.type="LOCAL";const vI=Bp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wI(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Lt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",_I().appendChild(s)})}function EI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Yr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(t,e){return e?Kt(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu extends du{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ss(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ss(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bI(t){return xp(t.auth,new mu(t),t.bypassAuthState)}function TI(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),J0(n,new mu(t),t.bypassAuthState)}async function SI(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),Y0(n,new mu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bI;case"linkViaPopup":case"linkViaRedirect":return SI;case"reauthViaPopup":case"reauthViaRedirect":return TI;default:Rt(this.auth,"internal-error")}}resolve(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=new Yr(2e3,1e4);class ms extends jp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ms.currentPopupAction&&ms.currentPopupAction.cancel(),ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const e=gu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,CI.get())};e()}}ms.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI="pendingRedirect",Vi=new Map;class kI extends jp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Vi.get(this.auth._key());if(!e){try{const s=await RI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Vi.set(this.auth._key(),e)}return this.bypassAuthState||Vi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RI(t,e){const n=OI(e),s=DI(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function NI(t,e){Vi.set(t._key(),e)}function DI(t){return Kt(t._redirectPersistence)}function OI(t){return Fi(AI,t.config.apiKey,t.name)}async function xI(t,e,n=!1){const s=Fo(t),r=II(s,e),o=await new kI(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=10*60*1e3;class MI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Hp(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Lt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ah(e))}saveEventToCache(e){this.cachedEventUids.add(Ah(e)),this.lastProcessedEventTime=Date.now()}}function Ah(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UI(t,e={}){return Zr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VI=/^https?/;async function $I(t){if(t.config.emulator)return;const{authorizedDomains:e}=await UI(t);for(const n of e)try{if(BI(n))return}catch{}Rt(t,"unauthorized-domain")}function BI(t){const e=hc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!VI.test(n))return!1;if(FI.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=new Yr(3e4,6e4);function kh(){const t=Ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HI(t){return new Promise((e,n)=>{var s,r,i;function o(){kh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kh(),n(Lt(t,"network-request-failed"))},timeout:jI.get()})}if(!((r=(s=Ut().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ut().gapi)===null||i===void 0)&&i.load)o();else{const a=EI("iframefcb");return Ut()[a]=()=>{gapi.load?o():n(Lt(t,"network-request-failed"))},wI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw $i=null,e})}let $i=null;function qI(t){return $i=$i||HI(t),$i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=new Yr(5e3,15e3),zI="__/auth/iframe",WI="emulator/auth/iframe",GI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XI(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?lu(e,WI):`https://${t.config.authDomain}/${zI}`,s={apiKey:e.apiKey,appName:t.name,v:Xr},r=QI.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Qr(s).slice(1)}`}async function YI(t){const e=await qI(t),n=Ut().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:XI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GI,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Lt(t,"network-request-failed"),a=Ut().setTimeout(()=>{i(o)},KI.get());function c(){Ut().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZI=500,eb=600,tb="_blank",nb="http://localhost";class Rh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sb(t,e,n,s=ZI,r=eb){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},JI),{width:s.toString(),height:r.toString(),top:i,left:o}),u=$e().toLowerCase();n&&(a=Tp(u)?tb:n),bp(u)&&(e=e||nb,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(F0(u)&&a!=="_self")return rb(e||"",a),new Rh(null);const h=window.open(e||"",a,l);j(h,t,"popup-blocked");try{h.focus()}catch{}return new Rh(h)}function rb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib="__/auth/handler",ob="emulator/auth/handler";function Nh(t,e,n,s,r,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Xr,eventId:r};if(e instanceof Dp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof ti){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${ab(t)}?${Qr(a).slice(1)}`}function ab({config:t}){return t.emulator?lu(t,ob):`https://${t.authDomain}/${ib}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="webStorageSupport";class cb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Up,this._completeRedirectFn=xI,this._overrideRedirectResult=NI}async _openPopup(e,n,s,r){var i;Jt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Nh(e,n,s,hc(),r);return sb(e,o,gu())}async _openRedirect(e,n,s,r){return await this._originValidation(e),uI(Nh(e,n,s,hc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Jt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await YI(e),s=new MI(e);return n.register("authEvent",r=>(j(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ca,{type:Ca},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ca];o!==void 0&&n(!!o),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$I(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Rp()||fu()||Uo()}}const ub=cb;var Dh="@firebase/auth",Oh="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fb(t){Os(new Kn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{j(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),j(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Np(t)},l=new j0(a,c,u);return E0(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Os(new Kn("auth-internal",e=>{const n=Fo(e.getProvider("auth").getImmediate());return(s=>new lb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(Dh,Oh,hb(t)),wn(Dh,Oh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t=dp()){const e=au(t,"auth");return e.isInitialized()?e.getImmediate():w0(t,{popupRedirectResolver:ub,persistence:[vI,oI,Up]})}fb("Browser");var db=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},O,yu=yu||{},H=db||self;function so(){}function dc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function si(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function pb(t){return Object.prototype.hasOwnProperty.call(t,Aa)&&t[Aa]||(t[Aa]=++gb)}var Aa="closure_uid_"+(1e9*Math.random()>>>0),gb=0;function mb(t,e,n){return t.call.apply(t.bind,arguments)}function yb(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ze=mb:ze=yb,ze.apply(null,arguments)}function Ci(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Qe(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function kn(){this.s=this.s,this.o=this.o}var vb=0;kn.prototype.s=!1;kn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),vb!=0)&&pb(this)};kn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Kp=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function _b(t){e:{var e=lT;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function xh(t){return Array.prototype.concat.apply([],arguments)}function vu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ro(t){return/^[\s\xa0]*$/.test(t)}var Ph=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function nt(t,e){return t.indexOf(e)!=-1}function ka(t,e){return t<e?-1:t>e?1:0}var st;e:{var Mh=H.navigator;if(Mh){var Lh=Mh.userAgent;if(Lh){st=Lh;break e}}st=""}function _u(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function zp(t){const e={};for(const n in t)e[n]=t[n];return e}var Uh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Uh.length;i++)n=Uh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function wu(t){return wu[" "](t),t}wu[" "]=so;function wb(t){var e=bb;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Eb=nt(st,"Opera"),xs=nt(st,"Trident")||nt(st,"MSIE"),Gp=nt(st,"Edge"),pc=Gp||xs,Qp=nt(st,"Gecko")&&!(nt(st.toLowerCase(),"webkit")&&!nt(st,"Edge"))&&!(nt(st,"Trident")||nt(st,"MSIE"))&&!nt(st,"Edge"),Ib=nt(st.toLowerCase(),"webkit")&&!nt(st,"Edge");function Xp(){var t=H.document;return t?t.documentMode:void 0}var io;e:{var Ra="",Na=function(){var t=st;if(Qp)return/rv:([^\);]+)(\)|;)/.exec(t);if(Gp)return/Edge\/([\d\.]+)/.exec(t);if(xs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Ib)return/WebKit\/(\S+)/.exec(t);if(Eb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Na&&(Ra=Na?Na[1]:""),xs){var Da=Xp();if(Da!=null&&Da>parseFloat(Ra)){io=String(Da);break e}}io=Ra}var bb={};function Tb(){return wb(function(){let t=0;const e=Ph(String(io)).split("."),n=Ph("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=ka(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||ka(r[2].length==0,i[2].length==0)||ka(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var gc;if(H.document&&xs){var Fh=Xp();gc=Fh||parseInt(io,10)||void 0}else gc=void 0;var Sb=gc,Cb=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",so,e),H.removeEventListener("test",so,e)}catch{}return t}();function Ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};function Mr(t,e){if(Ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Qp){e:{try{wu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Ab[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Mr.Z.h.call(this)}}Qe(Mr,Ze);var Ab={2:"touch",3:"pen",4:"mouse"};Mr.prototype.h=function(){Mr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ri="closure_listenable_"+(1e6*Math.random()|0),kb=0;function Rb(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++kb,this.ca=this.fa=!1}function Bo(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function jo(t){this.src=t,this.g={},this.h=0}jo.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=yc(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Rb(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function mc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=qp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Bo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function yc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var Eu="closure_lm_"+(1e6*Math.random()|0),Oa={};function Yp(t,e,n,s,r){if(s&&s.once)return Zp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Yp(t,e[i],n,s,r);return null}return n=Tu(n),t&&t[ri]?t.N(e,n,si(s)?!!s.capture:!!s,r):Jp(t,e,n,!1,s,r)}function Jp(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=si(r)?!!r.capture:!!r,a=bu(t);if(a||(t[Eu]=a=new jo(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Nb(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Cb||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(tg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Nb(){function t(n){return e.call(t.src,t.listener,n)}var e=Db;return t}function Zp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Zp(t,e[i],n,s,r);return null}return n=Tu(n),t&&t[ri]?t.O(e,n,si(s)?!!s.capture:!!s,r):Jp(t,e,n,!0,s,r)}function eg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)eg(t,e[i],n,s,r);else s=si(s)?!!s.capture:!!s,n=Tu(n),t&&t[ri]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=yc(i,n,s,r),-1<n&&(Bo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=bu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=yc(e,n,s,r)),(n=-1<t?e[t]:null)&&Iu(n))}function Iu(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ri])mc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(tg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=bu(e))?(mc(n,t),n.h==0&&(n.src=null,e[Eu]=null)):Bo(t)}}}function tg(t){return t in Oa?Oa[t]:Oa[t]="on"+t}function Db(t,e){if(t.ca)t=!0;else{e=new Mr(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Iu(t),t=n.call(s,e)}return t}function bu(t){return t=t[Eu],t instanceof jo?t:null}var xa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tu(t){return typeof t=="function"?t:(t[xa]||(t[xa]=function(e){return t.handleEvent(e)}),t[xa])}function Be(){kn.call(this),this.i=new jo(this),this.P=this,this.I=null}Qe(Be,kn);Be.prototype[ri]=!0;Be.prototype.removeEventListener=function(t,e,n,s){eg(this,t,e,n,s)};function We(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ze(e,t);else if(e instanceof Ze)e.target=e.target||t;else{var r=e;e=new Ze(s,t),Wp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ai(o,s,!0,e)&&r}if(o=e.g=t,r=Ai(o,s,!0,e)&&r,r=Ai(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Ai(o,s,!1,e)&&r}Be.prototype.M=function(){if(Be.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Bo(n[s]);delete t.g[e],t.h--}}this.I=null};Be.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Be.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ai(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&mc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Su=H.JSON.stringify;function Ob(){var t=sg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xb{constructor(){this.h=this.g=null}add(e,n){const s=ng.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ng=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Pb,t=>t.reset());class Pb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Mb(t){H.setTimeout(()=>{throw t},0)}function Cu(t,e){vc||Lb(),_c||(vc(),_c=!0),sg.add(t,e)}var vc;function Lb(){var t=H.Promise.resolve(void 0);vc=function(){t.then(Ub)}}var _c=!1,sg=new xb;function Ub(){for(var t;t=Ob();){try{t.h.call(t.g)}catch(n){Mb(n)}var e=ng;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}_c=!1}function Ho(t,e){Be.call(this),this.h=t||1,this.g=e||H,this.j=ze(this.kb,this),this.l=Date.now()}Qe(Ho,Be);O=Ho.prototype;O.da=!1;O.S=null;O.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),We(this,"tick"),this.da&&(Au(this),this.start()))}};O.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Au(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}O.M=function(){Ho.Z.M.call(this),Au(this),delete this.g};function ku(t,e,n){if(typeof t=="function")n&&(t=ze(t,n));else if(t&&typeof t.handleEvent=="function")t=ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function rg(t){t.g=ku(()=>{t.g=null,t.i&&(t.i=!1,rg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Fb extends kn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:rg(this)}M(){super.M(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lr(t){kn.call(this),this.h=t,this.g={}}Qe(Lr,kn);var Vh=[];function ig(t,e,n,s){Array.isArray(n)||(n&&(Vh[0]=n.toString()),n=Vh);for(var r=0;r<n.length;r++){var i=Yp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function og(t){_u(t.g,function(e,n){this.g.hasOwnProperty(n)&&Iu(e)},t),t.g={}}Lr.prototype.M=function(){Lr.Z.M.call(this),og(this)};Lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qo(){this.g=!0}qo.prototype.Aa=function(){this.g=!1};function Vb(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function $b(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ys(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+jb(t,n)+(s?" "+s:"")})}function Bb(t,e){t.info(function(){return"TIMEOUT: "+e})}qo.prototype.info=function(){};function jb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Su(n)}catch{return e}}var ns={},$h=null;function Ko(){return $h=$h||new Be}ns.Ma="serverreachability";function ag(t){Ze.call(this,ns.Ma,t)}Qe(ag,Ze);function Ur(t){const e=Ko();We(e,new ag(e))}ns.STAT_EVENT="statevent";function cg(t,e){Ze.call(this,ns.STAT_EVENT,t),this.stat=e}Qe(cg,Ze);function rt(t){const e=Ko();We(e,new cg(e,t))}ns.Na="timingevent";function ug(t,e){Ze.call(this,ns.Na,t),this.size=e}Qe(ug,Ze);function ii(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var zo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},lg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ru(){}Ru.prototype.h=null;function Bh(t){return t.h||(t.h=t.i())}function hg(){}var oi={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Nu(){Ze.call(this,"d")}Qe(Nu,Ze);function Du(){Ze.call(this,"c")}Qe(Du,Ze);var wc;function Wo(){}Qe(Wo,Ru);Wo.prototype.g=function(){return new XMLHttpRequest};Wo.prototype.i=function(){return{}};wc=new Wo;function ai(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Lr(this),this.P=Hb,t=pc?125:void 0,this.W=new Ho(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new fg}function fg(){this.i=null,this.g="",this.h=!1}var Hb=45e3,Ec={},oo={};O=ai.prototype;O.setTimeout=function(t){this.P=t};function Ic(t,e,n){t.K=1,t.v=Qo(Zt(e)),t.s=n,t.U=!0,dg(t,null)}function dg(t,e){t.F=Date.now(),ci(t),t.A=Zt(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),wg(n.h,"t",s),t.C=0,n=t.l.H,t.h=new fg,t.g=$g(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Fb(ze(t.Ia,t,t.g),t.O)),ig(t.V,t.g,"readystatechange",t.gb),e=t.H?zp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ur(),Vb(t.j,t.u,t.A,t.m,t.X,t.s)}O.gb=function(t){t=t.target;const e=this.L;e&&zt(t)==3?e.l():this.Ia(t)};O.Ia=function(t){try{if(t==this.g)e:{const l=zt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||pc||this.g&&(this.h.h||this.g.ga()||Kh(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Ur(3):Ur(2)),Go(this);var n=this.g.ba();this.N=n;t:if(pg(this)){var s=Kh(this.g);t="";var r=s.length,i=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Un(this),mr(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,$b(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ro(a)){var u=a;break t}}u=null}if(n=u)ys(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,bc(this,n);else{this.i=!1,this.o=3,rt(12),Un(this),mr(this);break e}}this.U?(gg(this,l,o),pc&&this.i&&l==3&&(ig(this.V,this.W,"tick",this.fb),this.W.start())):(ys(this.j,this.m,o,null),bc(this,o)),l==4&&Un(this),this.i&&!this.I&&(l==4?Lg(this.l,this):(this.i=!1,ci(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,rt(12)):(this.o=0,rt(13)),Un(this),mr(this)}}}catch{}finally{}};function pg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function gg(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=qb(t,n),r==oo){e==4&&(t.o=4,rt(14),s=!1),ys(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Ec){t.o=4,rt(15),ys(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ys(t.j,t.m,r,null),bc(t,r);pg(t)&&r!=oo&&r!=Ec&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,rt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),$u(e),e.L=!0,rt(11))):(ys(t.j,t.m,n,"[Invalid Chunked Response]"),Un(t),mr(t))}O.fb=function(){if(this.g){var t=zt(this.g),e=this.g.ga();this.C<e.length&&(Go(this),gg(this,t,e),this.i&&t!=4&&ci(this))}};function qb(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?oo:(n=Number(e.substring(n,s)),isNaN(n)?Ec:(s+=1,s+n>e.length?oo:(e=e.substr(s,n),t.C=s+n,e)))}O.cancel=function(){this.I=!0,Un(this)};function ci(t){t.Y=Date.now()+t.P,mg(t,t.P)}function mg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ii(ze(t.eb,t),e)}function Go(t){t.B&&(H.clearTimeout(t.B),t.B=null)}O.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Bb(this.j,this.A),this.K!=2&&(Ur(),rt(17)),Un(this),this.o=2,mr(this)):mg(this,this.Y-t)};function mr(t){t.l.G==0||t.I||Lg(t.l,t)}function Un(t){Go(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Au(t.W),og(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function bc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Tc(n.i,t))){if(n.I=t.N,!t.J&&Tc(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)lo(n),Jo(n);else break e;Vu(n),rt(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=ii(ze(n.ab,n),6e3));if(1>=bg(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Fn(n,11)}else if((t.J||n.g==t)&&lo(n),!ro(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.i;!i.g&&(nt(y,"spdy")||nt(y,"quic")||nt(y,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Pu(i,i.h),i.h=null))}if(s.D){const S=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(s.sa=S,Ie(s.F,s.D,S))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=Vg(s,s.H?s.la:null,s.W),o.J){Tg(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Go(a),ci(a)),s.g=o}else Pg(s);0<n.l.length&&Zo(n)}else u[0]!="stop"&&u[0]!="close"||Fn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Fn(n,7):Fu(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Ur(4)}catch{}}function Kb(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(dc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Ou(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(dc(t)||typeof t=="string")Kp(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(dc(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=Kb(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function Ws(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Ws)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}O=Ws.prototype;O.R=function(){xu(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};O.T=function(){return xu(this),this.g.concat()};function xu(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Qn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],Qn(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}O.get=function(t,e){return Qn(this.h,t)?this.h[t]:e};O.set=function(t,e){Qn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};O.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function Qn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var yg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function zb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Xn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Xn){this.g=e!==void 0?e:t.g,ao(this,t.j),this.s=t.s,co(this,t.i),uo(this,t.m),this.l=t.l,e=t.h;var n=new Fr;n.i=e.i,e.g&&(n.g=new Ws(e.g),n.h=e.h),jh(this,n),this.o=t.o}else t&&(n=String(t).match(yg))?(this.g=!!e,ao(this,n[1]||"",!0),this.s=yr(n[2]||""),co(this,n[3]||"",!0),uo(this,n[4]),this.l=yr(n[5]||"",!0),jh(this,n[6]||"",!0),this.o=yr(n[7]||"")):(this.g=!!e,this.h=new Fr(null,this.g))}Xn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(cr(e,Hh,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(cr(e,Hh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(cr(n,n.charAt(0)=="/"?Yb:Xb,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",cr(n,Zb)),t.join("")};function Zt(t){return new Xn(t)}function ao(t,e,n){t.j=n?yr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function co(t,e,n){t.i=n?yr(e,!0):e}function uo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function jh(t,e,n){e instanceof Fr?(t.h=e,eT(t.h,t.g)):(n||(e=cr(e,Jb)),t.h=new Fr(e,t.g))}function Ie(t,e,n){t.h.set(e,n)}function Qo(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Wb(t){return t instanceof Xn?Zt(t):new Xn(t,void 0)}function Gb(t,e,n,s){var r=new Xn(null,void 0);return t&&ao(r,t),e&&co(r,e),n&&uo(r,n),s&&(r.l=s),r}function yr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function cr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Qb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Qb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Hh=/[#\/\?@]/g,Xb=/[#\?:]/g,Yb=/[#\?]/g,Jb=/[#\?@]/g,Zb=/#/g;function Fr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Rn(t){t.g||(t.g=new Ws,t.h=0,t.i&&zb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=Fr.prototype;O.add=function(t,e){Rn(this),this.i=null,t=Gs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function vg(t,e){Rn(t),e=Gs(t,e),Qn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Qn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&xu(t)))}function _g(t,e){return Rn(t),e=Gs(t,e),Qn(t.g.h,e)}O.forEach=function(t,e){Rn(this),this.g.forEach(function(n,s){Kp(n,function(r){t.call(e,r,s,this)},this)},this)};O.T=function(){Rn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};O.R=function(t){Rn(this);var e=[];if(typeof t=="string")_g(this,t)&&(e=xh(e,this.g.get(Gs(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=xh(e,t[n])}return e};O.set=function(t,e){return Rn(this),this.i=null,t=Gs(this,t),_g(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function wg(t,e,n){vg(t,e),0<n.length&&(t.i=null,t.g.set(Gs(t,e),vu(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function Gs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function eT(t,e){e&&!t.j&&(Rn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(vg(this,s),wg(this,r,n))},t)),t.j=e}var tT=class{constructor(t,e){this.h=t,this.g=e}};function Eg(t){this.l=t||nT,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ea&&H.g.Ea()&&H.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nT=10;function Ig(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function bg(t){return t.h?1:t.g?t.g.size:0}function Tc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Pu(t,e){t.g?t.g.add(e):t.h=e}function Tg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Eg.prototype.cancel=function(){if(this.i=Sg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Sg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return vu(t.i)}function Mu(){}Mu.prototype.stringify=function(t){return H.JSON.stringify(t,void 0)};Mu.prototype.parse=function(t){return H.JSON.parse(t,void 0)};function sT(){this.g=new Mu}function rT(t,e,n){const s=n||"";try{Ou(t,function(r,i){let o=r;si(r)&&(o=Su(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function iT(t,e){const n=new qo;if(H.Image){const s=new Image;s.onload=Ci(ki,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ci(ki,n,s,"TestLoadImage: error",!1,e),s.onabort=Ci(ki,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ci(ki,n,s,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ki(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function ui(t){this.l=t.$b||null,this.j=t.ib||!1}Qe(ui,Ru);ui.prototype.g=function(){return new Xo(this.l,this.j)};ui.prototype.i=function(t){return function(){return t}}({});function Xo(t,e){Be.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Lu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Qe(Xo,Be);var Lu=0;O=Xo.prototype;O.open=function(t,e){if(this.readyState!=Lu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Vr(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||H).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,li(this)),this.readyState=Lu};O.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Vr(this)),this.g&&(this.readyState=3,Vr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof H.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cg(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Cg(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}O.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?li(this):Vr(this),this.readyState==3&&Cg(this)}};O.Ua=function(t){this.g&&(this.response=this.responseText=t,li(this))};O.Ta=function(t){this.g&&(this.response=t,li(this))};O.ha=function(){this.g&&li(this)};function li(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Vr(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Vr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Xo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var oT=H.JSON.parse;function Ne(t){Be.call(this),this.headers=new Ws,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ag,this.K=this.L=!1}Qe(Ne,Be);var Ag="",aT=/^https?$/i,cT=["POST","PUT"];O=Ne.prototype;O.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():wc.g(),this.C=this.u?Bh(this.u):Bh(wc),this.g.onreadystatechange=ze(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){qh(this,i);return}t=n||"";const r=new Ws(this.headers);s&&Ou(s,function(i,o){r.set(o,i)}),s=_b(r.T()),n=H.FormData&&t instanceof H.FormData,!(0<=qp(cT,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ng(this),0<this.B&&((this.K=uT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ze(this.pa,this)):this.A=ku(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){qh(this,i)}};function uT(t){return xs&&Tb()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function lT(t){return t.toLowerCase()=="content-type"}O.pa=function(){typeof yu!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,We(this,"timeout"),this.abort(8))};function qh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,kg(t),Yo(t)}function kg(t){t.D||(t.D=!0,We(t,"complete"),We(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,We(this,"complete"),We(this,"abort"),Yo(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yo(this,!0)),Ne.Z.M.call(this)};O.Fa=function(){this.s||(this.F||this.v||this.l?Rg(this):this.cb())};O.cb=function(){Rg(this)};function Rg(t){if(t.h&&typeof yu!="undefined"&&(!t.C[1]||zt(t)!=4||t.ba()!=2)){if(t.v&&zt(t)==4)ku(t.Fa,0,t);else if(We(t,"readystatechange"),zt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(yg)[1]||null;if(!r&&H.self&&H.self.location){var i=H.self.location.protocol;r=i.substr(0,i.length-1)}s=!aT.test(r?r.toLowerCase():"")}n=s}if(n)We(t,"complete"),We(t,"success");else{t.m=6;try{var o=2<zt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",kg(t)}}finally{Yo(t)}}}}function Yo(t,e){if(t.g){Ng(t);const n=t.g,s=t.C[0]?so:null;t.g=null,t.C=null,e||We(t,"ready");try{n.onreadystatechange=s}catch{}}}function Ng(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}function zt(t){return t.g?t.g.readyState:0}O.ba=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}};O.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),oT(e)}};function Kh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ag:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Da=function(){return this.m};O.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function hT(t){let e="";return _u(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Uu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=hT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ie(t,e,n))}function sr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Dg(t){this.za=0,this.l=[],this.h=new qo,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=sr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=sr("baseRetryDelayMs",5e3,t),this.$a=sr("retryDelaySeedMs",1e4,t),this.Ya=sr("forwardChannelMaxRetries",2,t),this.ra=sr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Eg(t&&t.concurrentRequestLimit),this.Ca=new sT,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}O=Dg.prototype;O.ma=8;O.G=1;function Fu(t){if(Og(t),t.G==3){var e=t.V++,n=Zt(t.F);Ie(n,"SID",t.J),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),hi(t,n),e=new ai(t,t.h,e,void 0),e.K=2,e.v=Qo(Zt(n)),n=!1,H.navigator&&H.navigator.sendBeacon&&(n=H.navigator.sendBeacon(e.v.toString(),"")),!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=$g(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ci(e)}Fg(t)}O.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Jo(t){t.g&&($u(t),t.g.cancel(),t.g=null)}function Og(t){Jo(t),t.u&&(H.clearTimeout(t.u),t.u=null),lo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function Pa(t,e){t.l.push(new tT(t.Za++,e)),t.G==3&&Zo(t)}function Zo(t){Ig(t.i)||t.m||(t.m=!0,Cu(t.Ha,t),t.C=0)}function fT(t,e){return bg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ii(ze(t.Ha,t,e),Ug(t,t.C)),t.C++,!0)}O.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new ai(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=zp(i),Wp(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=xg(this,r,e),n=Zt(this.F),Ie(n,"RID",t),Ie(n,"CVER",22),this.D&&Ie(n,"X-HTTP-Session-Id",this.D),hi(this,n),this.o&&i&&Uu(n,this.o,i),Pu(this.i,r),this.Ra&&Ie(n,"TYPE","init"),this.ja?(Ie(n,"$req",e),Ie(n,"SID","null"),r.$=!0,Ic(r,n,null)):Ic(r,n,e),this.G=2}}else this.G==3&&(t?zh(this,t):this.l.length==0||Ig(this.i)||zh(this))};function zh(t,e){var n;e?n=e.m:n=t.V++;const s=Zt(t.F);Ie(s,"SID",t.J),Ie(s,"RID",n),Ie(s,"AID",t.U),hi(t,s),t.o&&t.s&&Uu(s,t.o,t.s),n=new ai(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=xg(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Pu(t.i,n),Ic(n,s,e)}function hi(t,e){t.j&&Ou({},function(n,s){Ie(e,s,n)})}function xg(t,e,n){n=Math.min(t.l.length,n);var s=t.j?ze(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{rT(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function Pg(t){t.g||t.u||(t.Y=1,Cu(t.Ga,t),t.A=0)}function Vu(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ii(ze(t.Ga,t),Ug(t,t.A)),t.A++,!0)}O.Ga=function(){if(this.u=null,Mg(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ii(ze(this.bb,this),t)}};O.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,rt(10),Jo(this),Mg(this))};function $u(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function Mg(t){t.g=new ai(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Zt(t.oa);Ie(e,"RID","rpc"),Ie(e,"SID",t.J),Ie(e,"CI",t.N?"0":"1"),Ie(e,"AID",t.U),hi(t,e),Ie(e,"TYPE","xmlhttp"),t.o&&t.s&&Uu(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Qo(Zt(e)),n.s=null,n.U=!0,dg(n,t)}O.ab=function(){this.v!=null&&(this.v=null,Jo(this),Vu(this),rt(19))};function lo(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function Lg(t,e){var n=null;if(t.g==e){lo(t),$u(t),t.g=null;var s=2}else if(Tc(t.i,e))n=e.D,Tg(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Ko(),We(s,new ug(s,n)),Zo(t)}else Pg(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&fT(t,e)||s==2&&Vu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Fn(t,5);break;case 4:Fn(t,10);break;case 3:Fn(t,6);break;default:Fn(t,2)}}}function Ug(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Fn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=ze(t.jb,t);n||(n=new Xn("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||ao(n,"https"),Qo(n)),iT(n.toString(),s)}else rt(2);t.G=0,t.j&&t.j.va(e),Fg(t),Og(t)}O.jb=function(t){t?(this.h.info("Successfully pinged google.com"),rt(2)):(this.h.info("Failed to ping google.com"),rt(1))};function Fg(t){t.G=0,t.I=-1,t.j&&((Sg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,vu(t.l),t.l.length=0),t.j.ua())}function Vg(t,e,n){let s=Wb(n);if(s.i!="")e&&co(s,e+"."+s.i),uo(s,s.m);else{const r=H.location;s=Gb(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&_u(t.aa,function(r,i){Ie(s,i,r)}),e=t.D,n=t.sa,e&&n&&Ie(s,e,n),Ie(s,"VER",t.ma),hi(t,s),s}function $g(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ne(new ui({ib:!0})):new Ne(t.qa),e.L=t.H,e}function Bg(){}O=Bg.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Oa=function(){};function ho(){if(xs&&!(10<=Number(Sb)))throw Error("Environmental error: no available transport.")}ho.prototype.g=function(t,e){return new dt(t,e)};function dt(t,e){Be.call(this),this.g=new Dg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ro(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ro(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Qs(this)}Qe(dt,Be);dt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Cu(ze(t.hb,t,e))),rt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Vg(t,null,t.W),Zo(t)};dt.prototype.close=function(){Fu(this.g)};dt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Pa(this.g,e)}else this.v?(e={},e.__data__=Su(t),Pa(this.g,e)):Pa(this.g,t)};dt.prototype.M=function(){this.g.j=null,delete this.j,Fu(this.g),delete this.g,dt.Z.M.call(this)};function jg(t){Nu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Qe(jg,Nu);function Hg(){Du.call(this),this.status=1}Qe(Hg,Du);function Qs(t){this.g=t}Qe(Qs,Bg);Qs.prototype.xa=function(){We(this.g,"a")};Qs.prototype.wa=function(t){We(this.g,new jg(t))};Qs.prototype.va=function(t){We(this.g,new Hg)};Qs.prototype.ua=function(){We(this.g,"b")};ho.prototype.createWebChannel=ho.prototype.g;dt.prototype.send=dt.prototype.u;dt.prototype.open=dt.prototype.m;dt.prototype.close=dt.prototype.close;zo.NO_ERROR=0;zo.TIMEOUT=8;zo.HTTP_ERROR=6;lg.COMPLETE="complete";hg.EventType=oi;oi.OPEN="a";oi.CLOSE="b";oi.ERROR="c";oi.MESSAGE="d";Be.prototype.listen=Be.prototype.N;Ne.prototype.listenOnce=Ne.prototype.O;Ne.prototype.getLastError=Ne.prototype.La;Ne.prototype.getLastErrorCode=Ne.prototype.Da;Ne.prototype.getStatus=Ne.prototype.ba;Ne.prototype.getResponseJson=Ne.prototype.Qa;Ne.prototype.getResponseText=Ne.prototype.ga;Ne.prototype.send=Ne.prototype.ea;var dT=function(){return new ho},pT=function(){return Ko()},Ma=zo,gT=lg,mT=ns,Wh={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},yT=ui,Ri=hg,vT=Ne;const Gh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xs="9.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new ru("@firebase/firestore");function Qh(){return Yn.logLevel}function U(t,...e){if(Yn.logLevel<=oe.DEBUG){const n=e.map(Bu);Yn.debug(`Firestore (${Xs}): ${t}`,...n)}}function Tn(t,...e){if(Yn.logLevel<=oe.ERROR){const n=e.map(Bu);Yn.error(`Firestore (${Xs}): ${t}`,...n)}}function Xh(t,...e){if(Yn.logLevel<=oe.WARN){const n=e.map(Bu);Yn.warn(`Firestore (${Xs}): ${t}`,...n)}}function Bu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Xs}) INTERNAL ASSERTION FAILED: `+t;throw Tn(e),new Error(e)}function _e(t,e){t||G()}function Q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends ts{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class ET{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new En;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new En,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new En)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(_e(typeof s.accessToken=="string"),new _T(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string"),new ot(e)}}class IT{constructor(e,n,s){this.type="FirstParty",this.user=ot.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class bT{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new IT(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class TT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ST{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string"),this.p=n.token,new TT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=CT(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ce(t,e){return t<e?-1:t>e?1:0}function Ps(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new xe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new xe(0,0))}static max(){return new Z(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,s){n===void 0?n=0:n>e.length&&G(),s===void 0?s=e.length-n:s>e.length-n&&G(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return $r.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $r?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends $r{construct(e,n,s){return new Se(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new B(T.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const AT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends $r{construct(e,n,s){return new Ye(e,n,s)}static isValidIdentifier(e){return AT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new B(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new B(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new B(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(Se.fromString(e))}static fromName(e){return new $(Se.fromString(e).popFirst(5))}static empty(){return new $(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new Se(e.slice()))}}function kT(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Z.fromTimestamp(s===1e9?new xe(n+1,0):new xe(n,s));return new Sn(r,$.empty(),e)}function RT(t){return new Sn(t.readTime,t.key,-1)}class Sn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Sn(Z.min(),$.empty(),-1)}static max(){return new Sn(Z.max(),$.empty(),-1)}}function NT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==DT)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(r=>r?b.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new b((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new b((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function di(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ys(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ju.ot=-1;class Le{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ni(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ni(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ni(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ni(this.root,e,this.comparator,!0)}}class Ni{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:qe.RED,this.left=r!=null?r:qe.EMPTY,this.right=i!=null?i:qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new qe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return qe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,s,r){return this}insert(t,e,n){return new qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Jh(this.data.getIterator())}getIteratorFrom(e){return new Jh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pe(this.comparator);return n.data=e,n}}class Jh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new Pe(Ye.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ps(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ge(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const xT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cn(t){if(_e(!!t),typeof t=="string"){let e=0;const n=xT.exec(t);if(_e(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ms(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wg(t){const e=t.mapValue.fields.__previous_value__;return zg(e)?Wg(e):e}function Br(t){const e=Cn(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ls{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ls("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ls&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t){return t==null}function fo(t){return t===0&&1/t==-1/0}function MT(t){return typeof t=="number"&&Number.isInteger(t)&&!fo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zg(t)?4:LT(t)?9007199254740991:10:G()}function Bt(t,e){if(t===e)return!0;const n=Jn(t);if(n!==Jn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Br(t).isEqual(Br(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Cn(s.timestampValue),o=Cn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Ms(s.bytesValue).isEqual(Ms(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Re(s.geoPointValue.latitude)===Re(r.geoPointValue.latitude)&&Re(s.geoPointValue.longitude)===Re(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Re(s.integerValue)===Re(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Re(s.doubleValue),o=Re(r.doubleValue);return i===o?fo(i)===fo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ps(t.arrayValue.values||[],e.arrayValue.values||[],Bt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Yh(i)!==Yh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Bt(i[a],o[a])))return!1;return!0}(t,e);default:return G()}}function jr(t,e){return(t.values||[]).find(n=>Bt(n,e))!==void 0}function Us(t,e){if(t===e)return 0;const n=Jn(t),s=Jn(e);if(n!==s)return ce(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Re(r.integerValue||r.doubleValue),a=Re(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Zh(t.timestampValue,e.timestampValue);case 4:return Zh(Br(t),Br(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Ms(r),a=Ms(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ce(o[c],a[c]);if(u!==0)return u}return ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ce(Re(r.latitude),Re(i.latitude));return o!==0?o:ce(Re(r.longitude),Re(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Us(o[c],a[c]);if(u)return u}return ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Di.mapValue&&i===Di.mapValue)return 0;if(r===Di.mapValue)return 1;if(i===Di.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ce(a[l],u[l]);if(h!==0)return h;const f=Us(o[a[l]],c[u[l]]);if(f!==0)return f}return ce(a.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function Zh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Cn(t),s=Cn(e),r=ce(n.seconds,s.seconds);return r!==0?r:ce(n.nanos,s.nanos)}function Cs(t){return Sc(t)}function Sc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Cn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ms(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Sc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Sc(s.fields[a])}`;return i+"}"}(t.mapValue):G();var e,n}function Cc(t){return!!t&&"integerValue"in t}function Hu(t){return!!t&&"arrayValue"in t}function ef(t){return!!t&&"nullValue"in t}function tf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bi(t){return!!t&&"mapValue"in t}function vr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ys(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=vr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function LT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Bi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vr(n)}setAll(e){let n=Ye.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=vr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Bi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Bi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Ys(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new yt(vr(this.value))}}function Gg(t){const e=[];return Ys(t.fields,(n,s)=>{const r=new Ye([n]);if(Bi(s)){const i=Gg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ke(e,0,Z.min(),Z.min(),yt.empty(),0)}static newFoundDocument(e,n,s){return new Ke(e,1,n,Z.min(),s,0)}static newNoDocument(e,n){return new Ke(e,2,n,Z.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new Ke(e,3,n,Z.min(),yt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function nf(t,e=null,n=[],s=[],r=null,i=null,o=null){return new UT(t,e,n,s,r,i,o)}function qu(t){const e=Q(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Cs(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ea(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Cs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Cs(s)).join(",")),e.ut=n}return e.ut}function FT(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Cs(s.value)}`;var s}).join(", ")}]`),ea(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Cs(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Cs(n)).join(",")),`Target(${e})`}function Ku(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!zT(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Bt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!rf(t.startAt,e.startAt)&&rf(t.endAt,e.endAt)}function Ac(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class at extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,s):new VT(e,n,s):n==="array-contains"?new jT(e,s):n==="in"?new HT(e,s):n==="not-in"?new qT(e,s):n==="array-contains-any"?new KT(e,s):new at(e,n,s)}static ct(e,n,s){return n==="in"?new $T(e,s):new BT(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Us(n,this.value)):n!==null&&Jn(this.value)===Jn(n)&&this.at(Us(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class VT extends at{constructor(e,n,s){super(e,n,s),this.key=$.fromName(s.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.at(n)}}class $T extends at{constructor(e,n){super(e,"in",n),this.keys=Qg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class BT extends at{constructor(e,n){super(e,"not-in",n),this.keys=Qg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Qg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>$.fromName(s.referenceValue))}class jT extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hu(n)&&jr(n.arrayValue,this.value)}}class HT extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&jr(this.value.arrayValue,n)}}class qT extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(jr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!jr(this.value.arrayValue,n)}}class KT extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>jr(this.value.arrayValue,s))}}class po{constructor(e,n){this.position=e,this.inclusive=n}}class _r{constructor(e,n="asc"){this.field=e,this.dir=n}}function zT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function sf(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=$.comparator($.fromName(o.referenceValue),n.key):s=Us(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function rf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function WT(t,e,n,s,r,i,o,a){return new ta(t,e,n,s,r,i,o,a)}function zu(t){return new ta(t)}function GT(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function QT(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function XT(t){for(const e of t.filters)if(e.ht())return e.field;return null}function YT(t){return t.collectionGroup!==null}function Hr(t){const e=Q(t);if(e.lt===null){e.lt=[];const n=XT(e),s=QT(e);if(n!==null&&s===null)n.isKeyField()||e.lt.push(new _r(n)),e.lt.push(new _r(Ye.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.lt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new _r(Ye.keyField(),i))}}}return e.lt}function Zn(t){const e=Q(t);if(!e.ft)if(e.limitType==="F")e.ft=nf(e.path,e.collectionGroup,Hr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Hr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new _r(i.field,o))}const s=e.endAt?new po(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new po(e.startAt.position,e.startAt.inclusive):null;e.ft=nf(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.ft}function JT(t,e,n){return new ta(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function na(t,e){return Ku(Zn(t),Zn(e))&&t.limitType===e.limitType}function Xg(t){return`${qu(Zn(t))}|lt:${t.limitType}`}function kc(t){return`Query(target=${FT(Zn(t))}; limitType=${t.limitType})`}function Wu(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):$.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=sf(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Hr(n),s)||n.endAt&&!function(r,i,o){const a=sf(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Hr(n),s))}(t,e)}function ZT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Yg(t){return(e,n)=>{let s=!1;for(const r of Hr(t)){const i=eS(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function eS(t,e,n){const s=t.field.isKeyField()?$.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Us(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fo(e)?"-0":e}}function Zg(t){return{integerValue:""+t}}function tS(t,e){return MT(e)?Zg(e):Jg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this._=void 0}}function nS(t,e,n){return t instanceof go?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof qr?tm(t,e):t instanceof Kr?nm(t,e):function(s,r){const i=em(s,r),o=of(i)+of(s._t);return Cc(i)&&Cc(s._t)?Zg(o):Jg(s.wt,o)}(t,e)}function sS(t,e,n){return t instanceof qr?tm(t,e):t instanceof Kr?nm(t,e):n}function em(t,e){return t instanceof mo?Cc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class go extends sa{}class qr extends sa{constructor(e){super(),this.elements=e}}function tm(t,e){const n=sm(e);for(const s of t.elements)n.some(r=>Bt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Kr extends sa{constructor(e){super(),this.elements=e}}function nm(t,e){let n=sm(e);for(const s of t.elements)n=n.filter(r=>!Bt(r,s));return{arrayValue:{values:n}}}class mo extends sa{constructor(e,n){super(),this.wt=e,this._t=n}}function of(t){return Re(t.integerValue||t.doubleValue)}function sm(t){return Hu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function rS(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof qr&&s instanceof qr||n instanceof Kr&&s instanceof Kr?Ps(n.elements,s.elements,Bt):n instanceof mo&&s instanceof mo?Bt(n._t,s._t):n instanceof go&&s instanceof go}(t.transform,e.transform)}class iS{constructor(e,n){this.version=e,this.transformResults=n}}class Gt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gt}static exists(e){return new Gt(void 0,e)}static updateTime(e){return new Gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ji(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ra{}function rm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new om(t.key,Gt.none()):new pi(t.key,t.data,Gt.none());{const n=t.data,s=yt.empty();let r=new Pe(Ye.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ss(t.key,s,new Ft(r.toArray()),Gt.none())}}function oS(t,e,n){t instanceof pi?function(s,r,i){const o=s.value.clone(),a=cf(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ss?function(s,r,i){if(!ji(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=cf(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(im(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function wr(t,e,n,s){return t instanceof pi?function(r,i,o,a){if(!ji(r.precondition,i))return o;const c=r.value.clone(),u=uf(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof ss?function(r,i,o,a){if(!ji(r.precondition,i))return o;const c=uf(r.fieldTransforms,a,i),u=i.data;return u.setAll(im(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return ji(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function aS(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=em(s.transform,r||null);i!=null&&(n===null&&(n=yt.empty()),n.set(s.field,i))}return n||null}function af(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ps(n,s,(r,i)=>rS(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class pi extends ra{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ss extends ra{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function im(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function cf(t,e,n){const s=new Map;_e(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,sS(o,a,n[r]))}return s}function uf(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,nS(i,o,e))}return s}class om extends ra{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cS extends ra{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,se;function lS(t){switch(t){default:return G();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function am(t){if(t===void 0)return Tn("GRPC error has no .code"),T.UNKNOWN;switch(t){case ke.OK:return T.OK;case ke.CANCELLED:return T.CANCELLED;case ke.UNKNOWN:return T.UNKNOWN;case ke.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case ke.INTERNAL:return T.INTERNAL;case ke.UNAVAILABLE:return T.UNAVAILABLE;case ke.UNAUTHENTICATED:return T.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case ke.NOT_FOUND:return T.NOT_FOUND;case ke.ALREADY_EXISTS:return T.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return T.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case ke.ABORTED:return T.ABORTED;case ke.OUT_OF_RANGE:return T.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return T.UNIMPLEMENTED;case ke.DATA_LOSS:return T.DATA_LOSS;default:return G()}}(se=ke||(ke={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ys(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Kg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=new Le($.comparator);function en(){return hS}const cm=new Le($.comparator);function ur(...t){let e=cm;for(const n of t)e=e.insert(n.key,n);return e}function um(t){let e=cm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Vn(){return Er()}function lm(){return Er()}function Er(){return new Js(t=>t.toString(),(t,e)=>t.isEqual(e))}const fS=new Le($.comparator),dS=new Pe($.comparator);function ne(...t){let e=dS;for(const n of t)e=e.add(n);return e}const pS=new Pe(ce);function hm(){return pS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,gi.createSynthesizedTargetChangeForCurrentChange(e,n)),new ia(Z.min(),s,hm(),en(),ne())}}class gi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new gi(Ge.EMPTY_BYTE_STRING,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n,s,r){this.gt=e,this.removedTargetIds=n,this.key=s,this.yt=r}}class fm{constructor(e,n){this.targetId=e,this.It=n}}class dm{constructor(e,n,s=Ge.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class lf{constructor(){this.Tt=0,this.Et=ff(),this.At=Ge.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=ne(),n=ne(),s=ne();return this.Et.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:G()}}),new gi(this.At,this.Rt,e,n,s)}Dt(){this.bt=!1,this.Et=ff()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class gS{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=en(),this.Bt=hf(),this.Lt=new Pe(ce)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const s=this.Qt(n);switch(e.state){case 0:this.jt(n)&&s.Vt(e.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(e.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Ot(),s.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((s,r)=>{this.jt(r)&&n(r)})}zt(e){const n=e.targetId,s=e.It.count,r=this.Ht(n);if(r){const i=r.target;if(Ac(i))if(s===0){const o=new $(i.path);this.Kt(n,o,Ke.newNoDocument(o,Z.min()))}else _e(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&Ac(a.target)){const c=new $(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,Ke.newNoDocument(c,e))}i.vt&&(n.set(o,i.St()),i.Dt())}});let s=ne();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ht(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(e));const r=new ia(e,n,this.Lt,this.$t,s);return this.$t=en(),this.Bt=hf(),this.Lt=new Pe(ce),r}qt(e,n){if(!this.jt(e))return;const s=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,s){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,n)?r.Ct(n,1):r.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new lf,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new Pe(ce),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new lf),this.Mt.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Mt.getRemoteKeysForTarget(e).has(n)}}function hf(){return new Le($.comparator)}function ff(){return new Le($.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class vS{constructor(e,n){this.databaseId=e,this.dt=n}}function yo(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pm(t,e){return t.dt?e.toBase64():e.toUint8Array()}function _S(t,e){return yo(t,e.toTimestamp())}function Qt(t){return _e(!!t),Z.fromTimestamp(function(e){const n=Cn(e);return new xe(n.seconds,n.nanos)}(t))}function Gu(t,e){return function(n){return new Se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function gm(t){const e=Se.fromString(t);return _e(vm(e)),e}function Rc(t,e){return Gu(t.databaseId,e.path)}function La(t,e){const n=gm(e);if(n.get(1)!==t.databaseId.projectId)throw new B(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(mm(n))}function Nc(t,e){return Gu(t.databaseId,e)}function wS(t){const e=gm(t);return e.length===4?Se.emptyPath():mm(e)}function Dc(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mm(t){return _e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function df(t,e,n){return{name:Rc(t,e),fields:n.value.mapValue.fields}}function ES(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.dt?(_e(u===void 0||typeof u=="string"),Ge.fromBase64String(u||"")):(_e(u===void 0||u instanceof Uint8Array),Ge.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?T.UNKNOWN:am(c.code);return new B(u,c.message||"")}(o);n=new dm(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=La(t,s.document.name),i=Qt(s.document.updateTime),o=new yt({mapValue:{fields:s.document.fields}}),a=Ke.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Hi(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=La(t,s.document),i=s.readTime?Qt(s.readTime):Z.min(),o=Ke.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Hi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=La(t,s.document),i=s.removedTargetIds||[];n=new Hi([],i,r,null)}else{if(!("filter"in e))return G();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new uS(r),o=s.targetId;n=new fm(o,i)}}return n}function IS(t,e){let n;if(e instanceof pi)n={update:df(t,e.key,e.value)};else if(e instanceof om)n={delete:Rc(t,e.key)};else if(e instanceof ss)n={update:df(t,e.key,e.data),updateMask:OS(e.fieldMask)};else{if(!(e instanceof cS))return G();n={verify:Rc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof go)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof qr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Kr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof mo)return{fieldPath:i.field.canonicalString(),increment:o._t};throw G()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:_S(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:G()}(t,e.precondition)),n}function bS(t,e){return t&&t.length>0?(_e(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Qt(s.updateTime):Qt(r);return i.isEqual(Z.min())&&(i=Qt(r)),new iS(i,s.transformResults||[])}(n,e))):[]}function TS(t,e){return{documents:[Nc(t,e.path)]}}function SS(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Nc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Nc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(tf(h.value))return{unaryFilter:{field:hs(h.field),op:"IS_NAN"}};if(ef(h.value))return{unaryFilter:{field:hs(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(tf(h.value))return{unaryFilter:{field:hs(h.field),op:"IS_NOT_NAN"}};if(ef(h.value))return{unaryFilter:{field:hs(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hs(h.field),op:RS(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:hs(l.field),direction:kS(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.dt||ea(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function CS(t){let e=wS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){_e(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=ym(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new _r(vs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,ea(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new po(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new po(f,h)}(n.endAt)),WT(e,r,o,i,a,"F",c,u)}function AS(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ym(t){return t?t.unaryFilter!==void 0?[DS(t)]:t.fieldFilter!==void 0?[NS(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>ym(e)).reduce((e,n)=>e.concat(n)):G():[]}function kS(t){return mS[t]}function RS(t){return yS[t]}function hs(t){return{fieldPath:t.canonicalString()}}function vs(t){return Ye.fromServerFormat(t.fieldPath)}function NS(t){return at.create(vs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}function DS(t){switch(t.unaryFilter.op){case"IS_NAN":const e=vs(t.unaryFilter.field);return at.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=vs(t.unaryFilter.field);return at.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=vs(t.unaryFilter.field);return at.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=vs(t.unaryFilter.field);return at.create(r,"!=",{nullValue:"NULL_VALUE"});default:return G()}}function OS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function vm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&oS(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=wr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=wr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=lm();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=rm(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Z.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Ps(this.mutations,e.mutations,(n,s)=>af(n,s))&&Ps(this.baseMutations,e.baseMutations,(n,s)=>af(n,s))}}class Qu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){_e(e.mutations.length===s.length);let r=fS;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Qu(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,s,r,i=Z.min(),o=Z.min(),a=Ge.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e){this.ne=e}}function LS(t){const e=CS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?JT(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(){this.ze=new FS}addToCollectionParentIndex(e,n){return this.ze.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Sn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Sn.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class FS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Pe(Se.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Pe(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Fs(0)}static Rn(){return new Fs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(){this.changes=new Js(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&wr(s.mutation,r,Ft.empty(),xe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ne()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ne()){const r=Vn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=ur();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Vn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ne()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=en();const o=Er(),a=Er();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof ss)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),wr(l.mutation,u,l.mutation.getFieldMask(),xe.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new $S(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Er();let r=new Le((o,a)=>o-a),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Ft.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||ne()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=lm();l.forEach(f=>{if(!i.has(f)){const g=rm(n.get(f),s.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return $.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):YT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):b.resolve(Vn());let a=-1,c=i;return o.next(u=>b.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?b.resolve():this.getBaseDocument(e,l,h).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ne())).next(l=>({batchId:a,changes:um(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(s=>{let r=ur();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=ur();return this.indexManager.getCollectionParents(e,r).next(o=>b.forEach(o,a=>{const c=function(u,l){return new ta(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,Ke.newInvalidDocument(u)))});let o=ur();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&wr(u.mutation,c,Ft.empty(),xe.now()),Wu(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):b.resolve(Ke.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return b.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:Qt(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:LS(s.bundledQuery),readTime:Qt(s.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(){this.overlays=new Le($.comparator),this.Xn=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Vn();return b.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ie(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Xn.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const r=Vn(),i=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return b.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Le((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Vn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Vn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return b.resolve(a)}ie(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Xn.get(r.largestBatchId).delete(s.key);this.Xn.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new PS(n,s));let i=this.Xn.get(n);i===void 0&&(i=ne(),this.Xn.set(n,i)),this.Xn.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(){this.Zn=new Pe(Ue.ts),this.es=new Pe(Ue.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const s=new Ue(e,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.rs(new Ue(e,n))}os(e,n){e.forEach(s=>this.removeReference(s,n))}us(e){const n=new $(new Se([])),s=new Ue(n,e),r=new Ue(n,e+1),i=[];return this.es.forEachInRange([s,r],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new $(new Se([])),s=new Ue(n,e),r=new Ue(n,e+1);let i=ne();return this.es.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ue(e,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ue{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return $.comparator(e.key,n.key)||ce(e.ls,n.ls)}static ns(e,n){return ce(e.ls,n.ls)||$.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new Pe(Ue.ts)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xS(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ds=this.ds.add(new Ue(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ws(s),i=r<0?0:r;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ue(n,0),r=new Ue(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([s,r],o=>{const a=this._s(o.ls);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Pe(ce);return n.forEach(r=>{const i=new Ue(r,0),o=new Ue(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{s=s.add(a.ls)})}),b.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;$.isDocumentKey(i)||(i=i.child(""));const o=new Ue(new $(i),0);let a=new Pe(ce);return this.ds.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.ls)),!0)},o),b.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(s=>{const r=this._s(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){_e(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return b.forEach(n.mutations,r=>{const i=new Ue(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=s})}In(e){}containsKey(e,n){const s=new Ue(n,0),r=this.ds.firstAfterOrEqual(s);return b.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.ps=e,this.docs=new Le($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():Ke.newInvalidDocument(n))}getEntries(e,n){let s=en();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ke.newInvalidDocument(r))}),b.resolve(s)}getAllFromCollection(e,n,s){let r=en();const i=new $(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||NT(RT(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return b.resolve(r)}getAllFromCollectionGroup(e,n,s,r){G()}Is(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new zS(this)}getSize(e){return b.resolve(this.size)}}class zS extends VS{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.zn.addEntry(e,r)):this.zn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e){this.persistence=e,this.Ts=new Js(n=>qu(n),Ku),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Es=0,this.As=new Xu,this.targetCount=0,this.Rs=Fs.An()}forEachTarget(e,n){return this.Ts.forEach((s,r)=>n(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),b.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Fs(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.vn(n),b.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.Ts.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.As.ss(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.As.os(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.As.hs(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e,n){this.bs={},this.overlays={},this.Ps=new ju(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new WS(this),this.indexManager=new US,this.remoteDocumentCache=function(s){return new KS(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new MS(n),this.Ds=new jS(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.bs[e.toKey()];return s||(s=new qS(n,this.referenceDelegate),this.bs[e.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const r=new QS(this.Ps.next());return this.referenceDelegate.Cs(),s(r).next(i=>this.referenceDelegate.xs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ns(e,n){return b.or(Object.values(this.bs).map(s=>()=>s.containsKey(e,n)))}}class QS extends OT{constructor(e){super(),this.currentSequenceNumber=e}}class Yu{constructor(e){this.persistence=e,this.ks=new Xu,this.Os=null}static Ms(e){return new Yu(e)}get Fs(){if(this.Os)return this.Os;throw G()}addReference(e,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),b.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(r=>this.Fs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Fs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Cs(){this.Os=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Fs,s=>{const r=$.fromPath(s);return this.$s(e,r).next(i=>{i||n.removeEntry(r,Z.min())})}).next(()=>(this.Os=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return b.or([()=>b.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Pi=s,this.vi=r}static Vi(e,n){let s=ne(),r=ne();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ju(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ci(e,n).next(i=>i||this.xi(e,n,r,s)).next(i=>i||this.Ni(e,n))}Ci(e,n){return b.resolve(null)}xi(e,n,s,r){return GT(n)||r.isEqual(Z.min())?this.Ni(e,n):this.Di.getDocuments(e,s).next(i=>{const o=this.ki(n,i);return this.Oi(n,o,s,r)?this.Ni(e,n):(Qh()<=oe.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),kc(n)),this.Mi(e,o,n,kT(r,-1)))})}ki(e,n){let s=new Pe(Yg(e));return n.forEach((r,i)=>{Wu(e,i)&&(s=s.add(i))}),s}Oi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(e,n){return Qh()<=oe.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",kc(n)),this.Di.getDocumentsMatchingQuery(e,n,Sn.min())}Mi(e,n,s,r){return this.Di.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n,s,r){this.persistence=e,this.Fi=n,this.wt=r,this.$i=new Le(ce),this.Bi=new Js(i=>qu(i),Ku),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(s)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BS(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function JS(t,e,n,s){return new YS(t,e,n,s)}async function _m(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ne();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function ZS(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=b.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(y=>{const S=c.docVersions.get(g);_e(S!==null),y.version.compareTo(S)<0&&(l.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ne();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function wm(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function eC(t,e){const n=Q(t),s=e.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const a=[];e.targetChanges.forEach((l,h)=>{const f=r.get(h);if(!f)return;a.push(n.Vs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(i,l.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Ge.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(y,S,I){return y.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(f,g,l)&&a.push(n.Vs.updateTargetData(i,g))});let c=en(),u=ne();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(tC(i,o,e.documentUpdates).next(l=>{c=l.Gi,u=l.Qi})),!s.isEqual(Z.min())){const l=n.Vs.getLastRemoteSnapshotVersion(i).next(h=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.$i=r,i))}function tC(t,e,n){let s=ne(),r=ne();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=en();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Z.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Gi:o,Qi:r}})}function nC(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function sC(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Vs.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):n.Vs.allocateTargetId(s).next(o=>(r=new qn(e,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.$i.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(e,s.targetId)),s})}async function Oc(t,e,n){const s=Q(t),r=s.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!di(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.$i=s.$i.remove(e),s.Bi.delete(r.target)}function pf(t,e,n){const s=Q(t);let r=Z.min(),i=ne();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=Q(a),h=l.Bi.get(u);return h!==void 0?b.resolve(l.$i.get(h)):l.Vs.getTargetData(c,u)}(s,o,Zn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,e,n?r:Z.min(),n?i:ne())).next(a=>(rC(s,ZT(e),a),{documents:a,ji:i})))}function rC(t,e,n){let s=Z.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Li.set(e,s)}class gf{constructor(){this.activeTargetIds=hm()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iC{constructor(){this.Fr=new gf,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,s){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new gf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,s,r,i){const o=this.oo(e,n);U("RestConnection","Sending: ",o,s);const a={};return this.uo(a,r,i),this.co(e,o,a,s).then(c=>(U("RestConnection","Received: ",c),c),c=>{throw Xh("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}ao(e,n,s,r,i,o){return this.ro(e,n,s,r,i)}uo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Xs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}oo(e,n){const s=aC[e];return`${this.so}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,s,r){return new Promise((i,o)=>{const a=new vT;a.listenOnce(gT.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ma.NO_ERROR:const u=a.getResponseJson();U("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Ma.TIMEOUT:U("Connection",'RPC "'+e+'" timed out'),o(new B(T.DEADLINE_EXCEEDED,"Request time out"));break;case Ma.HTTP_ERROR:const l=a.getStatus();if(U("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(y)>=0?y:T.UNKNOWN}(h.status);o(new B(f,h.message))}else o(new B(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new B(T.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{U("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}ho(e,n,s){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=dT(),o=pT(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new yT({})),this.uo(a.initMessageHeaders,n,s),op()||cp()||tE()||up()||nE()||ap()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");U("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const f=new cC({jr:y=>{h?U("Connection","Not sending because WebChannel is closed:",y):(l||(U("Connection","Opening WebChannel transport."),u.open(),l=!0),U("Connection","WebChannel sending:",y),u.send(y))},Wr:()=>u.close()}),g=(y,S,I)=>{y.listen(S,A=>{try{I(A)}catch(x){setTimeout(()=>{throw x},0)}})};return g(u,Ri.EventType.OPEN,()=>{h||U("Connection","WebChannel transport opened.")}),g(u,Ri.EventType.CLOSE,()=>{h||(h=!0,U("Connection","WebChannel transport closed"),f.eo())}),g(u,Ri.EventType.ERROR,y=>{h||(h=!0,Xh("Connection","WebChannel transport errored:",y),f.eo(new B(T.UNAVAILABLE,"The operation could not be completed")))}),g(u,Ri.EventType.MESSAGE,y=>{var S;if(!h){const I=y.data[0];_e(!!I);const A=I,x=A.error||((S=A[0])===null||S===void 0?void 0:S.error);if(x){U("Connection","WebChannel received error:",x);const q=x.status;let X=function(Te){const De=ke[Te];if(De!==void 0)return am(De)}(q),le=x.message;X===void 0&&(X=T.INTERNAL,le="Unknown error status: "+q+" with message "+x.message),h=!0,f.eo(new B(X,le)),u.close()}else U("Connection","WebChannel received:",I),f.no(I)}}),g(o,mT.STAT_EVENT,y=>{y.stat===Wh.PROXY?U("Connection","Detected buffering proxy"):y.stat===Wh.NOPROXY&&U("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Zr()},0),f}}function Ua(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t){return new vS(t,!0)}class Em{constructor(e,n,s=1e3,r=1.5,i=6e4){this.js=e,this.timerId=n,this.lo=s,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-s);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n,s,r,i,o,a,c){this.js=e,this.Ao=s,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Em(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Tn(n.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Po===n&&this.Uo(s,r)},s=>{e(()=>{const r=new B(T.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Uo(e,n){const s=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lC extends Im{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.wt=i}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=ES(this.wt,e),s=function(r){if(!("targetChange"in r))return Z.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Z.min():i.readTime?Qt(i.readTime):Z.min()}(e);return this.listener.Go(n,s)}Qo(e){const n={};n.database=Dc(this.wt),n.addTarget=function(r,i){let o;const a=i.target;return o=Ac(a)?{documents:TS(r,a)}:{query:SS(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=pm(r,i.resumeToken):i.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=yo(r,i.snapshotVersion.toTimestamp())),o}(this.wt,e);const s=AS(this.wt,e);s&&(n.labels=s),this.Mo(n)}jo(e){const n={};n.database=Dc(this.wt),n.removeTarget=e,this.Mo(n)}}class hC extends Im{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(_e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=bS(e.writeResults,e.commitTime),s=Qt(e.commitTime);return this.listener.Jo(s,n)}return _e(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Dc(this.wt),this.Mo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>IS(this.wt,s))};this.Mo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new B(T.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new B(T.UNKNOWN,r.toString())})}ao(e,n,s,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(T.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class dC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Tn(n),this.su=!1):U("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{s.enqueueAndForget(async()=>{rs(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Q(a);c.lu.add(4),await mi(c),c._u.set("Unknown"),c.lu.delete(4),await aa(c)}(this))})}),this._u=new dC(s,r)}}async function aa(t){if(rs(t))for(const e of t.fu)await e(!0)}async function mi(t){for(const e of t.fu)await e(!1)}function bm(t,e){const n=Q(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),tl(n)?el(n):Zs(n).Co()&&Zu(n,e))}function Tm(t,e){const n=Q(t),s=Zs(n);n.hu.delete(e),s.Co()&&Sm(n,e),n.hu.size===0&&(s.Co()?s.ko():rs(n)&&n._u.set("Unknown"))}function Zu(t,e){t.wu.Nt(e.targetId),Zs(t).Qo(e)}function Sm(t,e){t.wu.Nt(e),Zs(t).jo(e)}function el(t){t.wu=new gS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Zs(t).start(),t._u.iu()}function tl(t){return rs(t)&&!Zs(t).Do()&&t.hu.size>0}function rs(t){return Q(t).lu.size===0}function Cm(t){t.wu=void 0}async function gC(t){t.hu.forEach((e,n)=>{Zu(t,e)})}async function mC(t,e){Cm(t),tl(t)?(t._u.uu(e),el(t)):t._u.set("Unknown")}async function yC(t,e,n){if(t._u.set("Online"),e instanceof dm&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.hu.delete(o),s.wu.removeTarget(o))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await vo(t,s)}else if(e instanceof Hi?t.wu.Ut(e):e instanceof fm?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(Z.min()))try{const s=await wm(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.wu.Yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.hu.get(c);u&&r.hu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.hu.get(a);if(!c)return;r.hu.set(a,c.withResumeToken(Ge.EMPTY_BYTE_STRING,c.snapshotVersion)),Sm(r,a);const u=new qn(c.target,a,1,c.sequenceNumber);Zu(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await vo(t,s)}}async function vo(t,e,n){if(!di(e))throw e;t.lu.add(1),await mi(t),t._u.set("Offline"),n||(n=()=>wm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await aa(t)})}function Am(t,e){return e().catch(n=>vo(t,n,e))}async function ca(t){const e=Q(t),n=An(e);let s=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;vC(e);)try{const r=await nC(e.localStore,s);if(r===null){e.au.length===0&&n.ko();break}s=r.batchId,_C(e,r)}catch(r){await vo(e,r)}km(e)&&Rm(e)}function vC(t){return rs(t)&&t.au.length<10}function _C(t,e){t.au.push(e);const n=An(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function km(t){return rs(t)&&!An(t).Do()&&t.au.length>0}function Rm(t){An(t).start()}async function wC(t){An(t).Xo()}async function EC(t){const e=An(t);for(const n of t.au)e.Ho(n.mutations)}async function IC(t,e,n){const s=t.au.shift(),r=Qu.from(s,e,n);await Am(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await ca(t)}async function bC(t,e){e&&An(t).zo&&await async function(n,s){if(r=s.code,lS(r)&&r!==T.ABORTED){const i=n.au.shift();An(n).No(),await Am(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ca(n)}var r}(t,e),km(t)&&Rm(t)}async function yf(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=rs(n);n.lu.add(3),await mi(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await aa(n)}async function TC(t,e){const n=Q(t);e?(n.lu.delete(2),await aa(n)):e||(n.lu.add(2),await mi(n),n._u.set("Unknown"))}function Zs(t){return t.mu||(t.mu=function(e,n,s){const r=Q(e);return r.tu(),new lC(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(t.datastore,t.asyncQueue,{zr:gC.bind(null,t),Jr:mC.bind(null,t),Go:yC.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),tl(t)?el(t):t._u.set("Unknown")):(await t.mu.stop(),Cm(t))})),t.mu}function An(t){return t.gu||(t.gu=function(e,n,s){const r=Q(e);return r.tu(),new hC(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(t.datastore,t.asyncQueue,{zr:wC.bind(null,t),Jr:bC.bind(null,t),Yo:EC.bind(null,t),Jo:IC.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await ca(t)):(await t.gu.stop(),t.au.length>0&&(U("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new En,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new nl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sl(t,e){if(Tn("AsyncQueue",`${e}: ${t}`),di(t))return new B(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.comparator=e?(n,s)=>e(n,s)||$.comparator(n.key,s.key):(n,s)=>$.comparator(n.key,s.key),this.keyedMap=ur(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new As(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof As)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new As;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(){this.yu=new Le($.comparator)}track(e){const n=e.doc.key,s=this.yu.get(n);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(n,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(n):e.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):G():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Vs{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Vs(e,n,As.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&na(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(){this.Iu=void 0,this.listeners=[]}}class CC{constructor(){this.queries=new Js(e=>Xg(e),na),this.onlineState="Unknown",this.Tu=new Set}}async function AC(t,e){const n=Q(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new SC),r)try{i.Iu=await n.onListen(s)}catch(o){const a=sl(o,`Initialization of query '${kc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&rl(n)}async function kC(t,e){const n=Q(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function RC(t,e){const n=Q(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(r)&&(s=!0);o.Iu=r}}s&&rl(n)}function NC(t,e,n){const s=Q(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function rl(t){t.Tu.forEach(e=>{e.next()})}class DC{constructor(e,n,s){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Vs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Vs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this.key=e}}class Dm{constructor(e){this.key=e}}class OC{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=ne(),this.mutatedKeys=ne(),this.Lu=Yg(e),this.Uu=new As(this.Lu)}get qu(){return this.Fu}Ku(e,n){const s=n?n.Gu:new vf,r=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const f=r.get(l),g=Wu(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),S=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let I=!1;f&&g?f.data.isEqual(g.data)?y!==S&&(s.track({type:3,doc:g}),I=!0):this.Qu(f,g)||(s.track({type:2,doc:g}),I=!0,(c&&this.Lu(g,c)>0||u&&this.Lu(g,u)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),I=!0):f&&!g&&(s.track({type:1,doc:f}),I=!0,(c||u)&&(a=!0)),I&&(g?(o=o.add(g),i=S?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Uu:o,Gu:s,Oi:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort((u,l)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return g(h)-g(f)}(u.type,l.type)||this.Lu(u.doc,l.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new Vs(this.query,e.Uu,r,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new vf,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=ne(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return e.forEach(s=>{this.Bu.has(s)||n.push(new Dm(s))}),this.Bu.forEach(s=>{e.has(s)||n.push(new Nm(s))}),n}Ju(e){this.Fu=e.ji,this.Bu=ne();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Vs.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class xC{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class PC{constructor(e){this.key=e,this.Xu=!1}}class MC{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Js(a=>Xg(a),na),this.ec=new Map,this.nc=new Set,this.sc=new Le($.comparator),this.ic=new Map,this.rc=new Xu,this.oc={},this.uc=new Map,this.cc=Fs.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function LC(t,e){const n=zC(t);let s,r;const i=n.tc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Yu();else{const o=await sC(n.localStore,Zn(e));n.isPrimaryClient&&bm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await UC(n,e,s,a==="current")}return r}async function UC(t,e,n,s){t.hc=(l,h,f)=>async function(g,y,S,I){let A=y.view.Ku(S);A.Oi&&(A=await pf(g.localStore,y.query,!1).then(({documents:X})=>y.view.Ku(X,A)));const x=I&&I.targetChanges.get(y.targetId),q=y.view.applyChanges(A,g.isPrimaryClient,x);return wf(g,y.targetId,q.zu),q.snapshot}(t,l,h,f);const r=await pf(t.localStore,e,!0),i=new OC(e,r.ji),o=i.Ku(r.documents),a=gi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);wf(t,n,c.zu);const u=new xC(e,n,i);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function FC(t,e){const n=Q(t),s=n.tc.get(e),r=n.ec.get(s.targetId);if(r.length>1)return n.ec.set(s.targetId,r.filter(i=>!na(i,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Oc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Tm(n.remoteStore,s.targetId),xc(n,s.targetId)}).catch(fi)):(xc(n,s.targetId),await Oc(n.localStore,s.targetId,!0))}async function VC(t,e,n){const s=WC(t);try{const r=await function(i,o){const a=Q(i),c=xe.now(),u=o.reduce((f,g)=>f.add(g.key),ne());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=en(),y=ne();return a.Ui.getEntries(f,u).next(S=>{g=S,g.forEach((I,A)=>{A.isValidDocument()||(y=y.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(S=>{l=S;const I=[];for(const A of o){const x=aS(A,l.get(A.key).overlayedDocument);x!=null&&I.push(new ss(A.key,x,Gg(x.value.mapValue),Gt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,I,o)}).next(S=>{h=S;const I=S.applyToLocalDocumentSet(l,y);return a.documentOverlayCache.saveOverlays(f,S.batchId,I)})}).then(()=>({batchId:h.batchId,changes:um(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.oc[i.currentUser.toKey()];c||(c=new Le(ce)),c=c.insert(o,a),i.oc[i.currentUser.toKey()]=c}(s,r.batchId,n),await yi(s,r.changes),await ca(s.remoteStore)}catch(r){const i=sl(r,"Failed to persist write");n.reject(i)}}async function Om(t,e){const n=Q(t);try{const s=await eC(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ic.get(i);o&&(_e(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Xu=!0:r.modifiedDocuments.size>0?_e(o.Xu):r.removedDocuments.size>0&&(_e(o.Xu),o.Xu=!1))}),await yi(n,s,e)}catch(s){await fi(s)}}function _f(t,e,n){const s=Q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.tc.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Q(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Eu(o)&&(c=!0)}),c&&rl(a)}(s.eventManager,e),r.length&&s.Zu.Go(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function $C(t,e,n){const s=Q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ic.get(e),i=r&&r.key;if(i){let o=new Le($.comparator);o=o.insert(i,Ke.newNoDocument(i,Z.min()));const a=ne().add(i),c=new ia(Z.min(),new Map,new Pe(ce),o,a);await Om(s,c),s.sc=s.sc.remove(i),s.ic.delete(e),il(s)}else await Oc(s.localStore,e,!1).then(()=>xc(s,e,n)).catch(fi)}async function BC(t,e){const n=Q(t),s=e.batch.batchId;try{const r=await ZS(n.localStore,e);Pm(n,s,null),xm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await yi(n,r)}catch(r){await fi(r)}}async function jC(t,e,n){const s=Q(t);try{const r=await function(i,o){const a=Q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(_e(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Pm(s,e,n),xm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await yi(s,r)}catch(r){await fi(r)}}function xm(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function Pm(t,e,n){const s=Q(t);let r=s.oc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.oc[s.currentUser.toKey()]=r}}function xc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ec.get(e))t.tc.delete(s),n&&t.Zu.lc(s,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(s=>{t.rc.containsKey(s)||Mm(t,s)})}function Mm(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(Tm(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),il(t))}function wf(t,e,n){for(const s of n)s instanceof Nm?(t.rc.addReference(s.key,e),HC(t,s)):s instanceof Dm?(U("SyncEngine","Document no longer in limbo: "+s.key),t.rc.removeReference(s.key,e),t.rc.containsKey(s.key)||Mm(t,s.key)):G()}function HC(t,e){const n=e.key,s=n.path.canonicalString();t.sc.get(n)||t.nc.has(s)||(U("SyncEngine","New document in limbo: "+n),t.nc.add(s),il(t))}function il(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new $(Se.fromString(e)),s=t.cc.next();t.ic.set(s,new PC(n)),t.sc=t.sc.insert(n,s),bm(t.remoteStore,new qn(Zn(zu(n.path)),s,2,ju.ot))}}async function yi(t,e,n){const s=Q(t),r=[],i=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,c)=>{o.push(s.hc(c,e,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),r.push(u);const l=Ju.Vi(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.Zu.Go(r),await async function(a,c){const u=Q(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>b.forEach(c,h=>b.forEach(h.Pi,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>b.forEach(h.vi,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!di(l))throw l;U("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.$i.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.$i=u.$i.insert(h,y)}}}(s.localStore,i))}async function qC(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await _m(n.localStore,e);n.currentUser=e,function(r,i){r.uc.forEach(o=>{o.forEach(a=>{a.reject(new B(T.CANCELLED,i))})}),r.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await yi(n,s.Ki)}}function KC(t,e){const n=Q(t),s=n.ic.get(e);if(s&&s.Xu)return ne().add(s.key);{let r=ne();const i=n.ec.get(e);if(!i)return r;for(const o of i){const a=n.tc.get(o);r=r.unionWith(a.view.qu)}return r}}function zC(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Om.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$C.bind(null,e),e.Zu.Go=RC.bind(null,e.eventManager),e.Zu.lc=NC.bind(null,e.eventManager),e}function WC(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jC.bind(null,e),e}class GC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=oa(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return JS(this.persistence,new XS,e.initialUser,this.wt)}_c(e){return new GS(Yu.Ms,this.wt)}dc(e){return new iC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class QC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>_f(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=qC.bind(null,this.syncEngine),await TC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new CC}createDatastore(e){const n=oa(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new uC(r));var r;return function(i,o,a,c){return new fC(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>_f(this.syncEngine,a,0),o=mf.V()?new mf:new oC,new pC(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new MC(s,r,i,o,a,c);return u&&(l.ac=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);U("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await mi(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ot.UNAUTHENTICATED,this.clientId=qg.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new En;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=sl(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function JC(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await _m(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ZC(t,e){t.asyncQueue.verifyOperationInProgress();const n=await eA(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>yf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>yf(e.remoteStore,i)),t.onlineComponents=e}async function eA(t){return t.offlineComponents||(U("FirestoreClient","Using default OfflineComponentProvider"),await JC(t,new GC)),t.offlineComponents}async function Lm(t){return t.onlineComponents||(U("FirestoreClient","Using default OnlineComponentProvider"),await ZC(t,new QC)),t.onlineComponents}function tA(t){return Lm(t).then(e=>e.syncEngine)}async function nA(t){const e=await Lm(t),n=e.eventManager;return n.onListen=LC.bind(null,e.syncEngine),n.onUnlisten=FC.bind(null,e.syncEngine),n}function sA(t,e,n={}){const s=new En;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new XC({next:h=>{i.enqueueAndForget(()=>kC(r,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new B(T.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new B(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new DC(zu(o.path),u,{includeMetadataChanges:!0,Du:!0});return AC(r,l)}(await nA(t),t.asyncQueue,e,n,s)),s.promise}const Ef=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(t,e,n){if(!n)throw new B(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iA(t,e,n,s){if(e===!0&&s===!0)throw new B(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function If(t){if(!$.isDocumentKey(t))throw new B(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ol(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function _o(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ol(t);throw new B(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,iA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bf({}),this._settingsFrozen=!1,e instanceof Ls?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new B(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ls(r.options.projectId)}(e))}get app(){if(!this._app)throw new B(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new wT;switch(n.type){case"gapi":const s=n.client;return _e(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new bT(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new B(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ef.get(e);n&&(U("ComponentProvider","Removing Datastore"),Ef.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class al{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new al(this.firestore,e,this._query)}}class zr extends al{constructor(e,n,s){super(e,n,zu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new $(e))}withConverter(e){return new zr(this.firestore,e,this._path)}}function vi(t,e,...n){if(t=$t(t),arguments.length===1&&(e=qg.I()),rA("doc","path",e),t instanceof Um){const s=Se.fromString(e,...n);return If(s),new Et(t,null,new $(s))}{if(!(t instanceof Et||t instanceof zr))throw new B(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Se.fromString(e,...n));return If(s),new Et(t.firestore,t instanceof zr?t.converter:null,new $(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Em(this,"async_queue_retry"),this.Kc=()=>{const n=Ua();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Ua();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Ua();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new En;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!di(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Oc.then(()=>(this.Lc=!0,e().catch(s=>{this.Bc=s,this.Lc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Tn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Lc=!1,s))));return this.Oc=n,n}enqueueAfterDelay(e,n,s){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const r=nl.createAndSchedule(this,e,n,s,i=>this.Wc(i));return this.$c.push(r),r}Gc(){this.Bc&&G()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class cl extends Um{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new oA,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Vm(this),this._firestoreClient.terminate()}}function aA(t=dp()){return au(t,"firestore").getImmediate()}function Fm(t){return t._firestoreClient||Vm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Vm(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new PT(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new YC(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $s(Ge.fromBase64String(e))}catch(n){throw new B(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $s(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=/^__.*__$/;class uA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new pi(e,this.data,n,this.fieldTransforms)}}function Bm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class hl{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new hl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:s,na:!1});return r.sa(e),r}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:s,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return wo(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(Bm(this.Zc)&&cA.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class lA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=s||oa(e)}aa(e,n,s,r=!1){return new hl({Zc:e,methodName:n,ca:s,path:Ye.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function hA(t){const e=t._freezeSettings(),n=oa(t._databaseId);return new lA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fA(t,e,n,s,r,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,r);Km("Data must be an object, but it was:",o,s);const a=Hm(s,o);let c,u;if(i.merge)c=new Ft(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=dA(e,h,n);if(!o.contains(f))throw new B(T.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);gA(l,f)||l.push(f)}c=new Ft(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new uA(new yt(a),c,u)}function jm(t,e){if(qm(t=$t(t)))return Km("Unsupported field value:",e,t),Hm(t,e);if(t instanceof $m)return function(n,s){if(!Bm(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=jm(o,s.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=$t(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return tS(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=xe.fromDate(n);return{timestampValue:yo(s.wt,r)}}if(n instanceof xe){const r=new xe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:yo(s.wt,r)}}if(n instanceof ll)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof $s)return{bytesValue:pm(s.wt,n._byteString)};if(n instanceof Et){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Gu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${ol(n)}`)}(t,e)}function Hm(t,e){const n={};return Kg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ys(t,(s,r)=>{const i=jm(r,e.ea(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function qm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof ll||t instanceof $s||t instanceof Et||t instanceof $m)}function Km(t,e,n){if(!qm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ol(n);throw s==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+s)}}function dA(t,e,n){if((e=$t(e))instanceof ul)return e._internalPath;if(typeof e=="string")return zm(t,e);throw wo("Field path arguments must be of type string or ",t,!1,void 0,n)}const pA=new RegExp("[~\\*/\\[\\]]");function zm(t,e,n){if(e.search(pA)>=0)throw wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ul(...e.split("."))._internalPath}catch{throw wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new B(T.INVALID_ARGUMENT,a+t+c)}function gA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mA extends Wm{data(){return super.data()}}function Gm(t,e){return typeof e=="string"?zm(t,e):e instanceof ul?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qm extends Wm{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vA(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Gm("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class vA extends Qm{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{convertValue(e,n="none"){switch(Jn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ms(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const s={};return Ys(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new ll(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Wg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Br(e));default:return null}}convertTimestamp(e){const n=Cn(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Se.fromString(e);_e(vm(s));const r=new Ls(s.get(1),s.get(3)),i=new $(s.popFirst(5));return r.isEqual(n)||Tn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(t){t=_o(t,Et);const e=_o(t.firestore,cl);return sA(Fm(e),t._key).then(n=>TA(e,t,n))}class IA extends _A{constructor(e){super(),this.firestore=e}convertBytes(e){return new $s(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function ua(t,e,n){t=_o(t,Et);const s=_o(t.firestore,cl),r=wA(t.converter,e,n);return bA(s,[fA(hA(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Gt.none())])}function bA(t,e){return function(n,s){const r=new En;return n.asyncQueue.enqueueAndForget(async()=>VC(await tA(n),s,r)),r.promise}(Fm(t),e)}function TA(t,e,n){const s=n.docs.get(e._key),r=new IA(t);return new Qm(t,r,e._key,s,new yA(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Xs=n})(Xr),Os(new Kn("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new cl(r,new ET(n.getProvider("auth-internal")),new ST(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),wn(Gh,"3.4.12",t),wn(Gh,"3.4.12","esm2017")})();var nn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n};const SA=t=>(nd("data-v-db571a5c"),t=t(),sd(),t),CA={class:"greetings"},AA={class:"green"},kA=SA(()=>W("h3",null," Productive Routine ",-1)),RA={__name:"HelloWorld",props:{msg:{type:String,required:!0}},setup(t){return(e,n)=>(be(),Ae("div",CA,[W("h1",AA,Tt(t.msg),1),kA]))}};var NA=nn(RA,[["__scopeId","data-v-db571a5c"]]);const DA={props:{centerText:String}},OA={class:"mobile-banner wrapper"},xA={class:"container"},PA={class:"center-text"};function MA(t,e,n,s,r,i){return be(),Ae("div",OA,[W("div",xA,[W("div",PA,Tt(n.centerText),1)])])}var fl=nn(DA,[["render",MA],["__scopeId","data-v-99773edc"]]);const LA={props:{width:String,height:String,text:String,color:String,textSize:String,display:String,textColor:String,alignment:String}};function UA(t,e,n,s,r,i){return be(),Ae("div",{class:"pill wrapper",style:_s({width:n.width,height:n.height})},[W("div",{class:"container",style:_s({background:n.color,"justify-content":"center","align-items":n.alignment})},[W("div",{class:"text",style:_s({color:n.textColor,"font-size":n.textSize})},Tt(n.text),5)],4)],4)}var la=nn(LA,[["render",UA],["__scopeId","data-v-e5cbf502"]]);const FA={data(){return{routines:[]}},created(){window.onpopstate=t=>{this.$router.forward(1)},this.routines=this.appUserData.data},computed:{...Wr(["appUserData"])},methods:{...Mo({setAppUserData:"SET_APP_USER_DATA",setCurrentRoutine:"SET_CURRENT_ROUTINE"}),logout(){const t=wt();nI(t).then(()=>{this.$router.replace("/login")})},addData(){const t=wt().currentUser.uid,e=wt().currentUser.email;ua(vi(_i,t,e),{data:[{routineName:"dawn",routineStartTime:"0500",routineEndTime:"0800",activities:[{activityName:"Rise, Rinse & Meditate",suggestions:[]},{activityName:"Plan the Day's Task & Take Resolution of the Day",suggestions:[]},{activityName:"Read on something unrelated to day to day work.",suggestions:[]},{activityName:"Breakfast",suggestions:[]}]},{routineName:"work",routineStartTime:"0800",routineEndTime:"1800",activities:[{activityName:"Rise, Rinse & Meditate",suggestions:[]},{activityName:"Plan the Day's Task & Take Resolution of the Day",suggestions:[]},{activityName:"Read on something unrelated to day to day work.",suggestions:[]},{activityName:"Breakfast",suggestions:[]}]},{routineName:"dusk",routineStartTime:"1800",routineEndTime:"2130",activities:[{activityName:"Put things in their places",suggestions:[]},{activityName:"Music, Diversion, Conversations",suggestions:[]},{activityName:"Examination of the Day",suggestions:[]},{activityName:"Supper",suggestions:[]}]}]})},launchNextScreen(t){this.setCurrentRoutine({data:this.routines[t],index:t}),this.$router.push("/routine")}},watch:{},components:{AppHeader:NA,RouterLink:tp,mobileBanner:fl,pill:la},mounted(){var t=document.getElementsByClassName("collapsible"),e;for(e=0;e<t.length;e++)t[e].addEventListener("click",function(){this.classList.toggle("active");var n=this.nextElementSibling;n.style.display==="block"?n.style.display="none":n.style.display="block"})}},VA={class:"dashboard wrapper"},$A={class:"pills-container"};function BA(t,e,n,s,r,i){const o=Yt("mobileBanner"),a=Yt("pill");return be(),Ae("header",null,[W("div",VA,[Ce(o,{centerText:"feynman"}),W("div",$A,[(be(!0),Ae(Xe,null,ks(r.routines,(c,u)=>(be(),Td(a,{key:c,class:"pill-container",text:c.routineName,color:"#FFB067",width:"300px",height:"73px",onClick:l=>i.launchNextScreen(u)},null,8,["text","onClick"]))),128))])])])}var jA=nn(FA,[["render",BA],["__scopeId","data-v-aef4cc34"]]);const HA={data(){return{email:"",password:""}},methods:{...Mo({setAppUserData:"SET_APP_USER_DATA"}),login(){const t=wt();tI(t,this.email,this.password).then(async e=>{const n=e.user.uid,s=e.user.email,r=vi(_i,n,s),i=await EA(r);i.exists()?(this.$router.push("/dashboard"),this.setAppUserData(i.data())):console.log("No such document!")}).catch(e=>{alert(e.message)})}},watch:{},computed:{...Wr(["appUserData"])}},qA={class:"login"},KA=W("br",null,null,-1),zA=W("br",null,null,-1),WA=Yc(" New Here? Create a new account ");function GA(t,e,n,s,r,i){const o=Yt("router-link");return be(),Ae("div",qA,[Cr(W("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>r.email=a),placeholder:"Email address",class:"input",autocomplete:"on",required:""},null,512),[[Rr,r.email]]),KA,Cr(W("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=a=>r.password=a),placeholder:"Password",class:"input",required:""},null,512),[[Rr,r.password]]),zA,W("button",{onClick:e[2]||(e[2]=(...a)=>i.login&&i.login(...a)),class:"button"},"Enter"),W("p",null,[Ce(o,{to:"/signup"},{default:Gc(()=>[WA]),_:1})])])}var Tf=nn(HA,[["render",GA]]);const QA={data(){return{email:"",password:""}},methods:{signUp(){const t=wt();eI(t,this.email,this.password).then(e=>{this.addData(),this.$router.replace("/login")}).catch(e=>{this.$router.replace("/login"),alert(e.message)})},addData(){const t=wt().currentUser.uid,e=wt().currentUser.email;ua(vi(_i,t,e),{data:[{routineName:"dawn",routineStartTime:"0500",routineEndTime:"0800",activities:[{activityName:"Rise, Rinse & Meditate",suggestions:[]},{activityName:"Plan the Day's Task & Take Resolution of the Day",suggestions:[]},{activityName:"Read on something unrelated to day to day work.",suggestions:[]},{activityName:"Breakfast",suggestions:[]}]},{routineName:"work",routineStartTime:"0800",routineEndTime:"1800",activities:[{activityName:"Rise, Rinse & Meditate",suggestions:[]},{activityName:"Plan the Day's Task & Take Resolution of the Day",suggestions:[]},{activityName:"Read on something unrelated to day to day work.",suggestions:[]},{activityName:"Breakfast",suggestions:[]}]},{routineName:"dusk",routineStartTime:"1800",routineEndTime:"2130",activities:[{activityName:"Put things in their places",suggestions:[]},{activityName:"Music, Diversion, Conversations",suggestions:[]},{activityName:"Examination of the Day",suggestions:[]},{activityName:"Supper",suggestions:[]}]}]})}},watch:{}},XA={class:"sign-up"},YA=W("h3",null,"Create a new account",-1),JA=W("br",null,null,-1),ZA=W("br",null,null,-1),ek={class:"button"},tk=Yc(" Back ");function nk(t,e,n,s,r,i){const o=Yt("router-link");return be(),Ae("div",XA,[YA,Cr(W("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>r.email=a),type:"text",class:"input",placeholder:"Email",required:""},null,512),[[Rr,r.email]]),JA,Cr(W("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>r.password=a),type:"password",class:"input",placeholder:"Password",required:""},null,512),[[Rr,r.password]]),ZA,W("button",{onClick:e[2]||(e[2]=(...a)=>i.signUp&&i.signUp(...a)),class:"button"},"Sign Up!"),W("button",ek,[Ce(o,{to:"/login"},{default:Gc(()=>[tk]),_:1})])])}var sk=nn(QA,[["render",nk]]);const rk={props:{centerText:String},data(){return{currentHour:"",currentMinute:"",activities:["one","two","three"]}},components:{Banner:fl,Pill:la},created(){let t=new Date;this.currentHour=t.getHours(),this.currentMinute=t.getMinutes(),this.currentHour<10&&(this.currentHour="0"+this.currentHour),this.currentMinute<10&&(this.currentMinute="0"+this.currentMinute),setInterval(()=>{let e=new Date;this.currentHour=e.getHours(),this.currentMinute=e.getMinutes(),this.currentHour<10&&(this.currentHour="0"+this.currentHour),this.currentMinute<10&&(this.currentMinute="0"+this.currentMinute)},1e3),this.activities=this.currentRoutine.activities},computed:{...Wr(["count","currentRoutine"])},methods:{...Mo({setCurrentActivity:"SET_CURRENT_ACTIVITY"}),launchNextScreen(t){this.setCurrentActivity({data:this.currentRoutine.activities[t],index:t}),this.$router.push("/suggestions")}}},ik={class:"routine wrapper"},ok={class:"routine-info-container"},ak={class:"routine-info"},ck={class:"routine-name"},uk={class:"routine-time"},lk={class:"current-time"},hk={class:"pills-container"};function fk(t,e,n,s,r,i){const o=Yt("Banner"),a=Yt("pill");return be(),Ae("div",ik,[Ce(o,{centerText:"feynman"}),W("div",ok,[W("div",ak,[W("div",ck,Tt(t.currentRoutine.routineName),1),W("div",uk,Tt(t.currentRoutine.routineStartTime)+" - "+Tt(t.currentRoutine.routineEndTime),1)]),W("div",lk,Tt(r.currentHour)+":"+Tt(r.currentMinute),1)]),W("div",hk,[(be(!0),Ae(Xe,null,ks(r.activities,(c,u)=>(be(),Ae("div",{key:c},[Ce(a,{class:"pill-container",text:c.activityName,color:"#2C3C5B",width:"350px",textSize:"20px",textColor:"#ffffff",display:"block",height:"73px",alignment:"flex-start",onClick:l=>i.launchNextScreen(u)},null,8,["text","onClick"])]))),128))])])}var dk=nn(rk,[["render",fk],["__scopeId","data-v-02cf075a"]]);const pk={props:{centerText:String},data(){return{currentHour:"",currentMinute:"",suggestions:["one","two","three"],activities:[""]}},components:{Banner:fl,Pill:la},created(){let t=new Date;this.currentHour=t.getHours(),this.currentMinute=t.getMinutes(),this.currentHour<10&&(this.currentHour="0"+this.currentHour),this.currentMinute<10&&(this.currentMinute="0"+this.currentMinute),setInterval(()=>{let e=new Date;this.currentHour=e.getHours(),this.currentMinute=e.getMinutes(),this.currentHour<10&&(this.currentHour="0"+this.currentHour),this.currentMinute<10&&(this.currentMinute="0"+this.currentMinute)},1e3),console.log(this.currentActivity),this.activities[0]=this.currentActivity.activityName,this.suggestions=this.currentActivity.suggestions},computed:{...Wr(["count","currentActivity","currentRoutine","currentActivityIndex","currentRoutineIndex","appUserData"])},methods:{launchNextScreen(){this.$router.push("/addnewsuggestion")},del(t){this.appUserDataLocal=this.appUserData;const e=this.appUserDataLocal.data[this.currentRoutineIndex].activities[this.currentActivityIndex].suggestions[t];if(confirm(`Are you sure, ${e}?`)){console.log("222222",this.appUserDataLocal),this.appUserDataLocal.data[this.currentRoutineIndex].activities[this.currentActivityIndex].suggestions.splice(t,1),console.log("1222222222",this.appUserDataLocal);const s=wt().currentUser.uid,r=wt().currentUser.email;ua(vi(_i,s,r),this.appUserDataLocal).then(i=>{}).catch(i=>{console.log("12333",i)})}}}},Xm=t=>(nd("data-v-d91d1154"),t=t(),sd(),t),gk={class:"suggestions wrapper"},mk={class:"suggestions-info-container"},yk={class:"suggestions-info"},vk={class:"suggestions-name"},_k=Xm(()=>W("div",{class:"suggestions-time"}," 0500 - 0800 ",-1)),wk={class:"current-time"},Ek={class:"pills-container first-pills-container"},Ik={class:"text-container"},bk=Xm(()=>W("div",{class:"first-text"}," suggestions ",-1)),Tk={class:"pills-container second-pills-container"};function Sk(t,e,n,s,r,i){const o=Yt("Banner"),a=Yt("pill");return be(),Ae("div",gk,[Ce(o,{centerText:"feynman"}),W("div",mk,[W("div",yk,[W("div",vk,Tt()+" dawn ",1),_k]),W("div",wk,Tt(r.currentHour)+":"+Tt(r.currentMinute),1)]),W("div",Ek,[(be(!0),Ae(Xe,null,ks(r.activities,c=>(be(),Ae("div",{key:c},[Ce(a,{class:"pill-container",text:c,color:"#2C3C5B",width:"350px",textSize:"20px",textColor:"#ffffff",display:"block",height:"73px",alignment:"flex-start"},null,8,["text"])]))),128))]),W("div",Ik,[bk,W("div",{onClick:e[0]||(e[0]=(...c)=>i.launchNextScreen&&i.launchNextScreen(...c)),class:"second-text"}," add new ")]),W("div",Tk,[(be(!0),Ae(Xe,null,ks(r.suggestions,(c,u)=>(be(),Ae("div",{key:c},[Ce(a,{class:"pill-container",text:c,color:"#0AC5A8",width:"350px",textSize:"20px",textColor:"#ffffff",display:"block",height:"73px",alignment:"flex-start",onClick:l=>i.del(u)},null,8,["text","onClick"])]))),128))])])}var Ck=nn(pk,[["render",Sk],["__scopeId","data-v-d91d1154"]]);const Ak={props:{centerText:String},data(){return{activities:["one"],newSuggestion:"",appUserDataLocal:{}}},created(){this.activities[0]=this.currentActivity.activityName},computed:{...Wr(["currentActivity","currentRoutine","currentActivityIndex","currentRoutineIndex","appUserData"])},components:{Pill:la},methods:{...Mo({setCurrentActivity:"SET_CURRENT_ACTIVITY",setAppUserData:"SET_APP_USER_DATA",setCurrentRoutine:"SET_CURRENT_ROUTINE"}),add(){this.appUserDataLocal=this.appUserData,console.log("222222",this.appUserDataLocal),this.appUserDataLocal.data[this.currentRoutineIndex].activities[this.currentActivityIndex].suggestions.push(this.newSuggestion),console.log("1222222222",this.appUserDataLocal);const t=wt().currentUser.uid,e=wt().currentUser.email;ua(vi(_i,t,e),this.appUserDataLocal).then(n=>{this.$router.go(-1)}).catch(n=>{console.log("12333",n)})}}},kk={class:"addnewsuggestion wrapper"},Rk={class:"first-pills-container pills-container"},Nk={class:"text-box"},Dk={class:"pills-container"};function Ok(t,e,n,s,r,i){const o=Yt("pill");return be(),Ae("div",kk,[W("div",Rk,[(be(!0),Ae(Xe,null,ks(r.activities,a=>(be(),Ae("div",{key:a},[Ce(o,{class:"pill-container",text:a,color:"#2C3C5B",width:"350px",textSize:"20px",textColor:"#ffffff",display:"block",height:"73px",alignment:"flex-start"},null,8,["text"])]))),128))]),W("div",Nk,[Cr(W("textarea",{"onUpdate:modelValue":e[0]||(e[0]=a=>r.newSuggestion=a),name:"comment"},"Enter text here...",512),[[Rr,r.newSuggestion]])]),W("div",Dk,[(be(!0),Ae(Xe,null,ks(r.activities,a=>(be(),Ae("div",{key:a},[Ce(o,{class:"pill-container",text:"ADD",color:"#2C3C5B",width:"150px",textSize:"20px",textColor:"#ffffff",display:"block",height:"73px",onClick:i.add},null,8,["onClick"])]))),128))])])}var xk=nn(Ak,[["render",Ok],["__scopeId","data-v-2db7620e"]]);const Ym=Ww({history:lw("/"),routes:[{path:"/login",name:"login",component:Tf},{path:"/routine",name:"routine",component:dk,meta:{requiresAuth:!0}},{path:"/signup",name:"signup",component:sk},{path:"/dashboard",name:"dashboard",component:jA,meta:{requiresAuth:!0}},{path:"/suggestions",name:"suggestions",component:Ck,meta:{requiresAuth:!0}},{path:"/addnewsuggestion",name:"addnewsuggestion",component:xk,meta:{requiresAuth:!0}},{path:"/",name:"login",component:Tf}]});Ym.beforeEach((t,e,n)=>{let s=wt().currentUser,r=t.matched.some(i=>i.meta.requiresAuth);r&&!s?(console.log("login"),n("login")):!r&&s?(console.log("dashboard"),n("dashboard")):(console.log("next"),n())});function Pk(){return{count:0,appUserData:{},currentRoutine:{},currentActivity:{},currentRoutineIndex:null,currentActivityIndex:null}}let Mk={SET_APP_USER_DATA(t,e){t.appUserData=e},SET_CURRENT_ROUTINE(t,e){t.currentRoutine=e.data,t.currentRoutineIndex=e.index},SET_CURRENT_ACTIVITY(t,e){t.currentActivity=e.data,t.currentActivityIndex=e.index}},Lk={},Uk={};var Fk="firebase",Vk="9.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn(Fk,Vk,"app");const $k={apiKey:"AIzaSyCl0uq9NcTjSvcFUvf8pLkX3PubtlukP9A",authDomain:"feynman-s-pr.firebaseapp.com",projectId:"feynman-s-pr",storageBucket:"feynman-s-pr.appspot.com",messagingSenderId:"60527738925",appId:"1:60527738925:web:6cdbd10c5dd12ede40b8a4",measurementId:"G-GYJDZ09MPD"},Bk=c0($k),_i=aA(Bk),jk=!0,Hk="serviceWorker"in navigator&&jk;Hk&&navigator.serviceWorker.register("/sw.js").then(()=>{console.log("Service Worker Registered!")});const dl=__(Xw),qk=K_({state:Pk,mutations:Mk,actions:Lk,getters:Uk});dl.use(Ym);dl.use(qk);dl.mount("#app");