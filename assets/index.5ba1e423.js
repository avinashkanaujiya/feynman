var ey=Object.defineProperty;var ty=(t,e,n)=>e in t?ey(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ds=(t,e,n)=>(ty(t,typeof e!="symbol"?e+"":e,n),n);const ny=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};ny();function Uc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const sy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ry=Uc(sy);function Rf(t){return!!t||t===""}function Ss(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=$e(s)?ay(s):Ss(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if($e(t))return t;if(Me(t))return t}}const iy=/;(?![^(]*\))/g,oy=/:(.+)/;function ay(t){const e={};return t.split(iy).forEach(n=>{if(n){const s=n.split(oy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Fc(t){let e="";if($e(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=Fc(t[n]);s&&(e+=s+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const dt=t=>$e(t)?t:t==null?"":W(t)||Me(t)&&(t.toString===Of||!Y(t.toString))?JSON.stringify(t,kf,2):String(t),kf=(t,e)=>e&&e.__v_isRef?kf(t,e.value):As(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Nf(e)?{[`Set(${e.size})`]:[...e.values()]}:Me(e)&&!W(e)&&!xf(e)?String(e):e,ye={},Cs=[],Rt=()=>{},cy=()=>!1,uy=/^on[^a-z]/,Ao=t=>uy.test(t),Vc=t=>t.startsWith("onUpdate:"),tt=Object.assign,$c=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ly=Object.prototype.hasOwnProperty,re=(t,e)=>ly.call(t,e),W=Array.isArray,As=t=>Ro(t)==="[object Map]",Nf=t=>Ro(t)==="[object Set]",Y=t=>typeof t=="function",$e=t=>typeof t=="string",Bc=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",Df=t=>Me(t)&&Y(t.then)&&Y(t.catch),Of=Object.prototype.toString,Ro=t=>Of.call(t),hy=t=>Ro(t).slice(8,-1),xf=t=>Ro(t)==="[object Object]",jc=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fi=Uc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ko=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fy=/-(\w)/g,$t=ko(t=>t.replace(fy,(e,n)=>n?n.toUpperCase():"")),dy=/\B([A-Z])/g,Gs=ko(t=>t.replace(dy,"-$1").toLowerCase()),No=ko(t=>t.charAt(0).toUpperCase()+t.slice(1)),pa=ko(t=>t?`on${No(t)}`:""),Dr=(t,e)=>!Object.is(t,e),Vi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Xi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ba=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wl;const py=()=>wl||(wl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Mt;class gy{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Mt&&(this.parent=Mt,this.index=(Mt.scopes||(Mt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Mt;try{return Mt=this,e()}finally{Mt=n}}}on(){Mt=this}off(){Mt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function my(t,e=Mt){e&&e.active&&e.effects.push(t)}const Hc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Pf=t=>(t.w&bn)>0,Mf=t=>(t.n&bn)>0,yy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=bn},vy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Pf(r)&&!Mf(r)?r.delete(t):e[n++]=r,r.w&=~bn,r.n&=~bn}e.length=n}},ja=new WeakMap;let dr=0,bn=1;const Ha=30;let Ct;const Hn=Symbol(""),qa=Symbol("");class qc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,my(this,s)}run(){if(!this.active)return this.fn();let e=Ct,n=vn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ct,Ct=this,vn=!0,bn=1<<++dr,dr<=Ha?yy(this):El(this),this.fn()}finally{dr<=Ha&&vy(this),bn=1<<--dr,Ct=this.parent,vn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ct===this?this.deferStop=!0:this.active&&(El(this),this.onStop&&this.onStop(),this.active=!1)}}function El(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let vn=!0;const Lf=[];function Qs(){Lf.push(vn),vn=!1}function Xs(){const t=Lf.pop();vn=t===void 0?!0:t}function gt(t,e,n){if(vn&&Ct){let s=ja.get(t);s||ja.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Hc()),Uf(r)}}function Uf(t,e){let n=!1;dr<=Ha?Mf(t)||(t.n|=bn,n=!Pf(t)):n=!t.has(Ct),n&&(t.add(Ct),Ct.deps.push(t))}function Zt(t,e,n,s,r,i){const o=ja.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t))o.forEach((c,u)=>{(u==="length"||u>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?jc(n)&&a.push(o.get("length")):(a.push(o.get(Hn)),As(t)&&a.push(o.get(qa)));break;case"delete":W(t)||(a.push(o.get(Hn)),As(t)&&a.push(o.get(qa)));break;case"set":As(t)&&a.push(o.get(Hn));break}if(a.length===1)a[0]&&Ka(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Ka(Hc(c))}}function Ka(t,e){const n=W(t)?t:[...t];for(const s of n)s.computed&&Il(s);for(const s of n)s.computed||Il(s)}function Il(t,e){(t!==Ct||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const _y=Uc("__proto__,__v_isRef,__isVue"),Ff=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bc)),wy=Kc(),Ey=Kc(!1,!0),Iy=Kc(!0),Tl=Ty();function Ty(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ae(this);for(let i=0,o=this.length;i<o;i++)gt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ae)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Qs();const s=ae(this)[e].apply(this,n);return Xs(),s}}),t}function Kc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Vy:Hf:e?jf:Bf).get(s))return s;const o=W(s);if(!t&&o&&re(Tl,r))return Reflect.get(Tl,r,i);const a=Reflect.get(s,r,i);return(Bc(r)?Ff.has(r):_y(r))||(t||gt(s,"get",r),e)?a:Je(a)?o&&jc(r)?a:a.value:Me(a)?t?qf(a):Ys(a):a}}const by=Vf(),Sy=Vf(!0);function Vf(t=!1){return function(n,s,r,i){let o=n[s];if(Or(o)&&Je(o)&&!Je(r))return!1;if(!t&&!Or(r)&&(za(r)||(r=ae(r),o=ae(o)),!W(n)&&Je(o)&&!Je(r)))return o.value=r,!0;const a=W(n)&&jc(s)?Number(s)<n.length:re(n,s),c=Reflect.set(n,s,r,i);return n===ae(i)&&(a?Dr(r,o)&&Zt(n,"set",s,r):Zt(n,"add",s,r)),c}}function Cy(t,e){const n=re(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Zt(t,"delete",e,void 0),s}function Ay(t,e){const n=Reflect.has(t,e);return(!Bc(e)||!Ff.has(e))&&gt(t,"has",e),n}function Ry(t){return gt(t,"iterate",W(t)?"length":Hn),Reflect.ownKeys(t)}const $f={get:wy,set:by,deleteProperty:Cy,has:Ay,ownKeys:Ry},ky={get:Iy,set(t,e){return!0},deleteProperty(t,e){return!0}},Ny=tt({},$f,{get:Ey,set:Sy}),zc=t=>t,Do=t=>Reflect.getPrototypeOf(t);function Ci(t,e,n=!1,s=!1){t=t.__v_raw;const r=ae(t),i=ae(e);n||(e!==i&&gt(r,"get",e),gt(r,"get",i));const{has:o}=Do(r),a=s?zc:n?Qc:xr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Ai(t,e=!1){const n=this.__v_raw,s=ae(n),r=ae(t);return e||(t!==r&&gt(s,"has",t),gt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ri(t,e=!1){return t=t.__v_raw,!e&&gt(ae(t),"iterate",Hn),Reflect.get(t,"size",t)}function bl(t){t=ae(t);const e=ae(this);return Do(e).has.call(e,t)||(e.add(t),Zt(e,"add",t,t)),this}function Sl(t,e){e=ae(e);const n=ae(this),{has:s,get:r}=Do(n);let i=s.call(n,t);i||(t=ae(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Dr(e,o)&&Zt(n,"set",t,e):Zt(n,"add",t,e),this}function Cl(t){const e=ae(this),{has:n,get:s}=Do(e);let r=n.call(e,t);r||(t=ae(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Zt(e,"delete",t,void 0),i}function Al(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&Zt(t,"clear",void 0,void 0),n}function ki(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ae(o),c=e?zc:t?Qc:xr;return!t&&gt(a,"iterate",Hn),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function Ni(t,e,n){return function(...s){const r=this.__v_raw,i=ae(r),o=As(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?zc:e?Qc:xr;return!e&&gt(i,"iterate",c?qa:Hn),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[l(h[0]),l(h[1])]:l(h),done:f}},[Symbol.iterator](){return this}}}}function on(t){return function(...e){return t==="delete"?!1:this}}function Dy(){const t={get(i){return Ci(this,i)},get size(){return Ri(this)},has:Ai,add:bl,set:Sl,delete:Cl,clear:Al,forEach:ki(!1,!1)},e={get(i){return Ci(this,i,!1,!0)},get size(){return Ri(this)},has:Ai,add:bl,set:Sl,delete:Cl,clear:Al,forEach:ki(!1,!0)},n={get(i){return Ci(this,i,!0)},get size(){return Ri(this,!0)},has(i){return Ai.call(this,i,!0)},add:on("add"),set:on("set"),delete:on("delete"),clear:on("clear"),forEach:ki(!0,!1)},s={get(i){return Ci(this,i,!0,!0)},get size(){return Ri(this,!0)},has(i){return Ai.call(this,i,!0)},add:on("add"),set:on("set"),delete:on("delete"),clear:on("clear"),forEach:ki(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ni(i,!1,!1),n[i]=Ni(i,!0,!1),e[i]=Ni(i,!1,!0),s[i]=Ni(i,!0,!0)}),[t,n,e,s]}const[Oy,xy,Py,My]=Dy();function Wc(t,e){const n=e?t?My:Py:t?xy:Oy;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(re(n,r)&&r in s?n:s,r,i)}const Ly={get:Wc(!1,!1)},Uy={get:Wc(!1,!0)},Fy={get:Wc(!0,!1)},Bf=new WeakMap,jf=new WeakMap,Hf=new WeakMap,Vy=new WeakMap;function $y(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function By(t){return t.__v_skip||!Object.isExtensible(t)?0:$y(hy(t))}function Ys(t){return Or(t)?t:Gc(t,!1,$f,Ly,Bf)}function jy(t){return Gc(t,!1,Ny,Uy,jf)}function qf(t){return Gc(t,!0,ky,Fy,Hf)}function Gc(t,e,n,s,r){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=By(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Rs(t){return Or(t)?Rs(t.__v_raw):!!(t&&t.__v_isReactive)}function Or(t){return!!(t&&t.__v_isReadonly)}function za(t){return!!(t&&t.__v_isShallow)}function Kf(t){return Rs(t)||Or(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function zf(t){return Xi(t,"__v_skip",!0),t}const xr=t=>Me(t)?Ys(t):t,Qc=t=>Me(t)?qf(t):t;function Wf(t){vn&&Ct&&(t=ae(t),Uf(t.dep||(t.dep=Hc())))}function Gf(t,e){t=ae(t),t.dep&&Ka(t.dep)}function Je(t){return!!(t&&t.__v_isRef===!0)}function Hy(t){return Qf(t,!1)}function qy(t){return Qf(t,!0)}function Qf(t,e){return Je(t)?t:new Ky(t,e)}class Ky{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:xr(e)}get value(){return Wf(this),this._value}set value(e){e=this.__v_isShallow?e:ae(e),Dr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:xr(e),Gf(this))}}function qn(t){return Je(t)?t.value:t}const zy={get:(t,e,n)=>qn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Je(r)&&!Je(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Xf(t){return Rs(t)?t:new Proxy(t,zy)}class Wy{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new qc(e,()=>{this._dirty||(this._dirty=!0,Gf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ae(this);return Wf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Gy(t,e,n=!1){let s,r;const i=Y(t);return i?(s=t,r=Rt):(s=t.get,r=t.set),new Wy(s,r,i||!r,n)}function _n(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Oo(i,e,n)}return r}function It(t,e,n,s){if(Y(t)){const i=_n(t,e,n,s);return i&&Df(i)&&i.catch(o=>{Oo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(It(t[i],e,n,s));return r}function Oo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){_n(c,null,10,[t,o,a]);return}}Qy(t,n,r,s)}function Qy(t,e,n,s=!0){console.error(t)}let Yi=!1,Wa=!1;const pt=[];let zt=0;const _r=[];let pr=null,vs=0;const wr=[];let ln=null,_s=0;const Yf=Promise.resolve();let Xc=null,Ga=null;function Jf(t){const e=Xc||Yf;return t?e.then(this?t.bind(this):t):e}function Xy(t){let e=zt+1,n=pt.length;for(;e<n;){const s=e+n>>>1;Pr(pt[s])<t?e=s+1:n=s}return e}function Zf(t){(!pt.length||!pt.includes(t,Yi&&t.allowRecurse?zt+1:zt))&&t!==Ga&&(t.id==null?pt.push(t):pt.splice(Xy(t.id),0,t),ed())}function ed(){!Yi&&!Wa&&(Wa=!0,Xc=Yf.then(sd))}function Yy(t){const e=pt.indexOf(t);e>zt&&pt.splice(e,1)}function td(t,e,n,s){W(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),ed()}function Jy(t){td(t,pr,_r,vs)}function Zy(t){td(t,ln,wr,_s)}function xo(t,e=null){if(_r.length){for(Ga=e,pr=[...new Set(_r)],_r.length=0,vs=0;vs<pr.length;vs++)pr[vs]();pr=null,vs=0,Ga=null,xo(t,e)}}function nd(t){if(xo(),wr.length){const e=[...new Set(wr)];if(wr.length=0,ln){ln.push(...e);return}for(ln=e,ln.sort((n,s)=>Pr(n)-Pr(s)),_s=0;_s<ln.length;_s++)ln[_s]();ln=null,_s=0}}const Pr=t=>t.id==null?1/0:t.id;function sd(t){Wa=!1,Yi=!0,xo(t),pt.sort((n,s)=>Pr(n)-Pr(s));const e=Rt;try{for(zt=0;zt<pt.length;zt++){const n=pt[zt];n&&n.active!==!1&&_n(n,null,14)}}finally{zt=0,pt.length=0,nd(),Yi=!1,Xc=null,(pt.length||_r.length||wr.length)&&sd(t)}}function ev(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ye;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[l]||ye;f&&(r=n.map(g=>g.trim())),h&&(r=n.map(Ba))}let a,c=s[a=pa(e)]||s[a=pa($t(e))];!c&&i&&(c=s[a=pa(Gs(e))]),c&&It(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,It(u,t,6,r)}}function rd(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=u=>{const l=rd(u,e,!0);l&&(a=!0,tt(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(W(i)?i.forEach(c=>o[c]=null):tt(o,i),s.set(t,o),o)}function Po(t,e){return!t||!Ao(e)?!1:(e=e.slice(2).replace(/Once$/,""),re(t,e[0].toLowerCase()+e.slice(1))||re(t,Gs(e))||re(t,e))}let Et=null,Mo=null;function Ji(t){const e=Et;return Et=t,Mo=t&&t.type.__scopeId||null,e}function id(t){Mo=t}function od(){Mo=null}function Yc(t,e=Et,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Fl(-1);const i=Ji(e),o=t(...r);return Ji(i),s._d&&Fl(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function ga(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:S}=t;let I,A;const x=Ji(t);try{if(n.shapeFlag&4){const X=r||s;I=Lt(l.call(X,X,h,i,g,f,y)),A=c}else{const X=e;I=Lt(X.length>1?X(i,{attrs:c,slots:a,emit:u}):X(i,null)),A=e.props?c:tv(c)}}catch(X){Er.length=0,Oo(X,t,1),I=Se(Xt)}let K=I;if(A&&S!==!1){const X=Object.keys(A),{shapeFlag:le}=K;X.length&&le&7&&(o&&X.some(Vc)&&(A=nv(A,o)),K=Cn(K,A))}return n.dirs&&(K=Cn(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),I=K,Ji(x),I}const tv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ao(n))&&((e||(e={}))[n]=t[n]);return e},nv=(t,e)=>{const n={};for(const s in t)(!Vc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function sv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Rl(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const f=l[h];if(o[f]!==s[f]&&!Po(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Rl(s,o,u):!0:!!o;return!1}function Rl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Po(n,i))return!0}return!1}function rv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const iv=t=>t.__isSuspense;function ov(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):Zy(t)}function $i(t,e){if(Ve){let n=Ve.provides;const s=Ve.parent&&Ve.parent.provides;s===n&&(n=Ve.provides=Object.create(s)),n[t]=e}}function wn(t,e,n=!1){const s=Ve||Et;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(s.proxy):e}}const kl={};function ks(t,e,n){return ad(t,e,n)}function ad(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ye){const a=Ve;let c,u=!1,l=!1;if(Je(t)?(c=()=>t.value,u=za(t)):Rs(t)?(c=()=>t,s=!0):W(t)?(l=!0,u=t.some(A=>Rs(A)||za(A)),c=()=>t.map(A=>{if(Je(A))return A.value;if(Rs(A))return Vn(A);if(Y(A))return _n(A,a,2)})):Y(t)?e?c=()=>_n(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),It(t,a,3,[f])}:c=Rt,e&&s){const A=c;c=()=>Vn(A())}let h,f=A=>{h=I.onStop=()=>{_n(A,a,4)}};if(Lr)return f=Rt,e?n&&It(e,a,3,[c(),l?[]:void 0,f]):c(),Rt;let g=l?[]:kl;const y=()=>{if(!!I.active)if(e){const A=I.run();(s||u||(l?A.some((x,K)=>Dr(x,g[K])):Dr(A,g)))&&(h&&h(),It(e,a,3,[A,g===kl?void 0:g,f]),g=A)}else I.run()};y.allowRecurse=!!e;let S;r==="sync"?S=y:r==="post"?S=()=>at(y,a&&a.suspense):S=()=>Jy(y);const I=new qc(c,S);return e?n?y():g=I.run():r==="post"?at(I.run.bind(I),a&&a.suspense):I.run(),()=>{I.stop(),a&&a.scope&&$c(a.scope.effects,I)}}function av(t,e,n){const s=this.proxy,r=$e(t)?t.includes(".")?cd(s,t):()=>s[t]:t.bind(s,s);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Ve;Ms(this);const a=ad(r,i.bind(s),n);return o?Ms(o):Kn(),a}function cd(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Vn(t,e){if(!Me(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Je(t))Vn(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)Vn(t[n],e);else if(Nf(t)||As(t))t.forEach(n=>{Vn(n,e)});else if(xf(t))for(const n in t)Vn(t[n],e);return t}function cv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return dd(()=>{t.isMounted=!0}),pd(()=>{t.isUnmounting=!0}),t}const vt=[Function,Array],uv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:vt,onEnter:vt,onAfterEnter:vt,onEnterCancelled:vt,onBeforeLeave:vt,onLeave:vt,onAfterLeave:vt,onLeaveCancelled:vt,onBeforeAppear:vt,onAppear:vt,onAfterAppear:vt,onAppearCancelled:vt},setup(t,{slots:e}){const n=Wv(),s=cv();let r;return()=>{const i=e.default&&ld(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const S of i)if(S.type!==Xt){o=S;break}}const a=ae(t),{mode:c}=a;if(s.isLeaving)return ma(o);const u=Nl(o);if(!u)return ma(o);const l=Qa(u,a,s,n);Xa(u,l);const h=n.subTree,f=h&&Nl(h);let g=!1;const{getTransitionKey:y}=u.type;if(y){const S=y();r===void 0?r=S:S!==r&&(r=S,g=!0)}if(f&&f.type!==Xt&&(!Un(u,f)||g)){const S=Qa(f,a,s,n);if(Xa(f,S),c==="out-in")return s.isLeaving=!0,S.afterLeave=()=>{s.isLeaving=!1,n.update()},ma(o);c==="in-out"&&u.type!==Xt&&(S.delayLeave=(I,A,x)=>{const K=ud(s,f);K[String(f.key)]=f,I._leaveCb=()=>{A(),I._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=x})}return o}}},lv=uv;function ud(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Qa(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:S,onAppear:I,onAfterAppear:A,onAppearCancelled:x}=e,K=String(t.key),X=ud(n,t),le=(ee,ue)=>{ee&&It(ee,s,9,ue)},Ce=(ee,ue)=>{const Ie=ue[1];le(ee,ue),W(ee)?ee.every(He=>He.length<=1)&&Ie():ee.length<=1&&Ie()},De={mode:i,persisted:o,beforeEnter(ee){let ue=a;if(!n.isMounted)if(r)ue=S||a;else return;ee._leaveCb&&ee._leaveCb(!0);const Ie=X[K];Ie&&Un(t,Ie)&&Ie.el._leaveCb&&Ie.el._leaveCb(),le(ue,[ee])},enter(ee){let ue=c,Ie=u,He=l;if(!n.isMounted)if(r)ue=I||c,Ie=A||u,He=x||l;else return;let qe=!1;const bt=ee._enterCb=rn=>{qe||(qe=!0,rn?le(He,[ee]):le(Ie,[ee]),De.delayedLeave&&De.delayedLeave(),ee._enterCb=void 0)};ue?Ce(ue,[ee,bt]):bt()},leave(ee,ue){const Ie=String(t.key);if(ee._enterCb&&ee._enterCb(!0),n.isUnmounting)return ue();le(h,[ee]);let He=!1;const qe=ee._leaveCb=bt=>{He||(He=!0,ue(),bt?le(y,[ee]):le(g,[ee]),ee._leaveCb=void 0,X[Ie]===t&&delete X[Ie])};X[Ie]=t,f?Ce(f,[ee,qe]):qe()},clone(ee){return Qa(ee,e,n,s)}};return De}function ma(t){if(Lo(t))return t=Cn(t),t.children=null,t}function Nl(t){return Lo(t)?t.children?t.children[0]:void 0:t}function Xa(t,e){t.shapeFlag&6&&t.component?Xa(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ld(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Fe?(o.patchFlag&128&&r++,s=s.concat(ld(o.children,e,a))):(e||o.type!==Xt)&&s.push(a!=null?Cn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function hd(t){return Y(t)?{setup:t,name:t.name}:t}const Bi=t=>!!t.type.__asyncLoader,Lo=t=>t.type.__isKeepAlive;function hv(t,e){fd(t,"a",e)}function fv(t,e){fd(t,"da",e)}function fd(t,e,n=Ve){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Uo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Lo(r.parent.vnode)&&dv(s,e,n,r),r=r.parent}}function dv(t,e,n,s){const r=Uo(e,t,s,!0);gd(()=>{$c(s[e],r)},n)}function Uo(t,e,n=Ve,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Qs(),Ms(n);const a=It(e,n,t,o);return Kn(),Xs(),a});return s?r.unshift(i):r.push(i),i}}const sn=t=>(e,n=Ve)=>(!Lr||t==="sp")&&Uo(t,e,n),pv=sn("bm"),dd=sn("m"),gv=sn("bu"),mv=sn("u"),pd=sn("bum"),gd=sn("um"),yv=sn("sp"),vv=sn("rtg"),_v=sn("rtc");function wv(t,e=Ve){Uo("ec",t,e)}function Ps(t,e){const n=Et;if(n===null)return t;const s=Vo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=ye]=e[i];Y(o)&&(o={mounted:o,updated:o}),o.deep&&Vn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u})}return t}function xn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Qs(),It(c,n,8,[t.el,a,t,e]),Xs())}}const md="components";function Bt(t,e){return Iv(md,t,!0,e)||t}const Ev=Symbol();function Iv(t,e,n=!0,s=!1){const r=Et||Ve;if(r){const i=r.type;if(t===md){const a=Jv(i,!1);if(a&&(a===e||a===$t(e)||a===No($t(e))))return i}const o=Dl(r[t]||i[t],e)||Dl(r.appContext[t],e);return!o&&s?i:o}}function Dl(t,e){return t&&(t[e]||t[$t(e)]||t[No($t(e))])}function Sn(t,e,n,s){let r;const i=n&&n[s];if(W(t)||$e(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Me(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Ya=t=>t?kd(t)?Vo(t)||t.proxy:Ya(t.parent):null,Zi=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ya(t.parent),$root:t=>Ya(t.root),$emit:t=>t.emit,$options:t=>vd(t),$forceUpdate:t=>t.f||(t.f=()=>Zf(t.update)),$nextTick:t=>t.n||(t.n=Jf.bind(t.proxy)),$watch:t=>av.bind(t)}),Tv={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==ye&&re(s,e))return o[e]=1,s[e];if(r!==ye&&re(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&re(u,e))return o[e]=3,i[e];if(n!==ye&&re(n,e))return o[e]=4,n[e];Ja&&(o[e]=0)}}const l=Zi[e];let h,f;if(l)return e==="$attrs"&&gt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ye&&re(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,re(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==ye&&re(r,e)?(r[e]=n,!0):s!==ye&&re(s,e)?(s[e]=n,!0):re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ye&&re(t,o)||e!==ye&&re(e,o)||(a=i[0])&&re(a,o)||re(s,o)||re(Zi,o)||re(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ja=!0;function bv(t){const e=vd(t),n=t.proxy,s=t.ctx;Ja=!1,e.beforeCreate&&Ol(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:S,deactivated:I,beforeDestroy:A,beforeUnmount:x,destroyed:K,unmounted:X,render:le,renderTracked:Ce,renderTriggered:De,errorCaptured:ee,serverPrefetch:ue,expose:Ie,inheritAttrs:He,components:qe,directives:bt,filters:rn}=e;if(u&&Sv(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ve in o){const fe=o[ve];Y(fe)&&(s[ve]=fe.bind(n))}if(r){const ve=r.call(n,n);Me(ve)&&(t.data=Ys(ve))}if(Ja=!0,i)for(const ve in i){const fe=i[ve],ht=Y(fe)?fe.bind(n,n):Y(fe.get)?fe.get.bind(n,n):Rt,hs=!Y(fe)&&Y(fe.set)?fe.set.bind(n):Rt,Kt=_t({get:ht,set:hs});Object.defineProperty(s,ve,{enumerable:!0,configurable:!0,get:()=>Kt.value,set:Ot=>Kt.value=Ot})}if(a)for(const ve in a)yd(a[ve],s,n,ve);if(c){const ve=Y(c)?c.call(n):c;Reflect.ownKeys(ve).forEach(fe=>{$i(fe,ve[fe])})}l&&Ol(l,t,"c");function Oe(ve,fe){W(fe)?fe.forEach(ht=>ve(ht.bind(n))):fe&&ve(fe.bind(n))}if(Oe(pv,h),Oe(dd,f),Oe(gv,g),Oe(mv,y),Oe(hv,S),Oe(fv,I),Oe(wv,ee),Oe(_v,Ce),Oe(vv,De),Oe(pd,x),Oe(gd,X),Oe(yv,ue),W(Ie))if(Ie.length){const ve=t.exposed||(t.exposed={});Ie.forEach(fe=>{Object.defineProperty(ve,fe,{get:()=>n[fe],set:ht=>n[fe]=ht})})}else t.exposed||(t.exposed={});le&&t.render===Rt&&(t.render=le),He!=null&&(t.inheritAttrs=He),qe&&(t.components=qe),bt&&(t.directives=bt)}function Sv(t,e,n=Rt,s=!1){W(t)&&(t=Za(t));for(const r in t){const i=t[r];let o;Me(i)?"default"in i?o=wn(i.from||r,i.default,!0):o=wn(i.from||r):o=wn(i),Je(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Ol(t,e,n){It(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function yd(t,e,n,s){const r=s.includes(".")?cd(n,s):()=>n[s];if($e(t)){const i=e[t];Y(i)&&ks(r,i)}else if(Y(t))ks(r,t.bind(n));else if(Me(t))if(W(t))t.forEach(i=>yd(i,e,n,s));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&ks(r,i,t)}}function vd(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>eo(c,u,o,!0)),eo(c,e,o)),i.set(e,c),c}function eo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&eo(t,i,n,!0),r&&r.forEach(o=>eo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Cv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Cv={data:xl,props:Mn,emits:Mn,methods:Mn,computed:Mn,beforeCreate:nt,created:nt,beforeMount:nt,mounted:nt,beforeUpdate:nt,updated:nt,beforeDestroy:nt,beforeUnmount:nt,destroyed:nt,unmounted:nt,activated:nt,deactivated:nt,errorCaptured:nt,serverPrefetch:nt,components:Mn,directives:Mn,watch:Rv,provide:xl,inject:Av};function xl(t,e){return e?t?function(){return tt(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function Av(t,e){return Mn(Za(t),Za(e))}function Za(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function nt(t,e){return t?[...new Set([].concat(t,e))]:e}function Mn(t,e){return t?tt(tt(Object.create(null),t),e):e}function Rv(t,e){if(!t)return e;if(!e)return t;const n=tt(Object.create(null),t);for(const s in e)n[s]=nt(t[s],e[s]);return n}function kv(t,e,n,s=!1){const r={},i={};Xi(i,Fo,1),t.propsDefaults=Object.create(null),_d(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:jy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Nv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ae(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let f=l[h];if(Po(t.emitsOptions,f))continue;const g=e[f];if(c)if(re(i,f))g!==i[f]&&(i[f]=g,u=!0);else{const y=$t(f);r[y]=ec(c,a,y,g,t,!1)}else g!==i[f]&&(i[f]=g,u=!0)}}}else{_d(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!re(e,h)&&((l=Gs(h))===h||!re(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=ec(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!re(e,h)&&!0)&&(delete i[h],u=!0)}u&&Zt(t,"set","$attrs")}function _d(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Fi(c))continue;const u=e[c];let l;r&&re(r,l=$t(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Po(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=ae(n),u=a||ye;for(let l=0;l<i.length;l++){const h=i[l];n[h]=ec(r,c,h,u[h],t,!re(u,h))}}return o}function ec(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=re(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Y(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(Ms(r),s=u[n]=c.call(null,e),Kn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Gs(n))&&(s=!0))}return s}function wd(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const l=h=>{c=!0;const[f,g]=wd(h,e,!0);tt(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return s.set(t,Cs),Cs;if(W(i))for(let l=0;l<i.length;l++){const h=$t(i[l]);Pl(h)&&(o[h]=ye)}else if(i)for(const l in i){const h=$t(l);if(Pl(h)){const f=i[l],g=o[h]=W(f)||Y(f)?{type:f}:f;if(g){const y=Ul(Boolean,g.type),S=Ul(String,g.type);g[0]=y>-1,g[1]=S<0||y<S,(y>-1||re(g,"default"))&&a.push(h)}}}const u=[o,a];return s.set(t,u),u}function Pl(t){return t[0]!=="$"}function Ml(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ll(t,e){return Ml(t)===Ml(e)}function Ul(t,e){return W(e)?e.findIndex(n=>Ll(n,t)):Y(e)&&Ll(e,t)?0:-1}const Ed=t=>t[0]==="_"||t==="$stable",Jc=t=>W(t)?t.map(Lt):[Lt(t)],Dv=(t,e,n)=>{if(e._n)return e;const s=Yc((...r)=>Jc(e(...r)),n);return s._c=!1,s},Id=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Ed(r))continue;const i=t[r];if(Y(i))e[r]=Dv(r,i,s);else if(i!=null){const o=Jc(i);e[r]=()=>o}}},Td=(t,e)=>{const n=Jc(e);t.slots.default=()=>n},Ov=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),Xi(e,"_",n)):Id(e,t.slots={})}else t.slots={},e&&Td(t,e);Xi(t.slots,Fo,1)},xv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ye;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(tt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Id(e,r)),o=e}else e&&(Td(t,e),o={default:1});if(i)for(const a in r)!Ed(a)&&!(a in o)&&delete r[a]};function bd(){return{app:null,config:{isNativeTag:cy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pv=0;function Mv(t,e){return function(s,r=null){Y(s)||(s=Object.assign({},s)),r!=null&&!Me(r)&&(r=null);const i=bd(),o=new Set;let a=!1;const c=i.app={_uid:Pv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:e_,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&Y(u.install)?(o.add(u),u.install(c,...l)):Y(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const f=Se(s,r);return f.appContext=i,l&&e?e(f,u):t(f,u,h),a=!0,c._container=u,u.__vue_app__=c,Vo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function tc(t,e,n,s,r=!1){if(W(t)){t.forEach((f,g)=>tc(f,e&&(W(e)?e[g]:e),n,s,r));return}if(Bi(s)&&!r)return;const i=s.shapeFlag&4?Vo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===ye?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&($e(u)?(l[u]=null,re(h,u)&&(h[u]=null)):Je(u)&&(u.value=null)),Y(c))_n(c,a,12,[o,l]);else{const f=$e(c),g=Je(c);if(f||g){const y=()=>{if(t.f){const S=f?l[c]:c.value;r?W(S)&&$c(S,i):W(S)?S.includes(i)||S.push(i):f?(l[c]=[i],re(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else f?(l[c]=o,re(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(l[t.k]=o))};o?(y.id=-1,at(y,n)):y()}}}const at=ov;function Lv(t){return Uv(t)}function Uv(t,e){const n=py();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:g=Rt,cloneNode:y,insertStaticContent:S}=t,I=(d,p,m,w=null,_=null,R=null,D=!1,C=null,k=!!p.dynamicChildren)=>{if(d===p)return;d&&!Un(d,p)&&(w=L(d),yt(d,_,R,!0),d=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:E,ref:F,shapeFlag:P}=p;switch(E){case Zc:A(d,p,m,w);break;case Xt:x(d,p,m,w);break;case ya:d==null&&K(p,m,w,D);break;case Fe:bt(d,p,m,w,_,R,D,C,k);break;default:P&1?Ce(d,p,m,w,_,R,D,C,k):P&6?rn(d,p,m,w,_,R,D,C,k):(P&64||P&128)&&E.process(d,p,m,w,_,R,D,C,k,_e)}F!=null&&_&&tc(F,d&&d.ref,R,p||d,!p)},A=(d,p,m,w)=>{if(d==null)s(p.el=a(p.children),m,w);else{const _=p.el=d.el;p.children!==d.children&&u(_,p.children)}},x=(d,p,m,w)=>{d==null?s(p.el=c(p.children||""),m,w):p.el=d.el},K=(d,p,m,w)=>{[d.el,d.anchor]=S(d.children,p,m,w,d.el,d.anchor)},X=({el:d,anchor:p},m,w)=>{let _;for(;d&&d!==p;)_=f(d),s(d,m,w),d=_;s(p,m,w)},le=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),r(d),d=m;r(p)},Ce=(d,p,m,w,_,R,D,C,k)=>{D=D||p.type==="svg",d==null?De(p,m,w,_,R,D,C,k):Ie(d,p,_,R,D,C,k)},De=(d,p,m,w,_,R,D,C)=>{let k,E;const{type:F,props:P,shapeFlag:V,transition:z,patchFlag:ie,dirs:pe}=d;if(d.el&&y!==void 0&&ie===-1)k=d.el=y(d.el);else{if(k=d.el=o(d.type,R,P&&P.is,P),V&8?l(k,d.children):V&16&&ue(d.children,k,null,w,_,R&&F!=="foreignObject",D,C),pe&&xn(d,null,w,"created"),P){for(const Te in P)Te!=="value"&&!Fi(Te)&&i(k,Te,null,P[Te],R,d.children,w,_,N);"value"in P&&i(k,"value",null,P.value),(E=P.onVnodeBeforeMount)&&Pt(E,w,d)}ee(k,d,d.scopeId,D,w)}pe&&xn(d,null,w,"beforeMount");const ge=(!_||_&&!_.pendingBranch)&&z&&!z.persisted;ge&&z.beforeEnter(k),s(k,p,m),((E=P&&P.onVnodeMounted)||ge||pe)&&at(()=>{E&&Pt(E,w,d),ge&&z.enter(k),pe&&xn(d,null,w,"mounted")},_)},ee=(d,p,m,w,_)=>{if(m&&g(d,m),w)for(let R=0;R<w.length;R++)g(d,w[R]);if(_){let R=_.subTree;if(p===R){const D=_.vnode;ee(d,D,D.scopeId,D.slotScopeIds,_.parent)}}},ue=(d,p,m,w,_,R,D,C,k=0)=>{for(let E=k;E<d.length;E++){const F=d[E]=C?fn(d[E]):Lt(d[E]);I(null,F,p,m,w,_,R,D,C)}},Ie=(d,p,m,w,_,R,D)=>{const C=p.el=d.el;let{patchFlag:k,dynamicChildren:E,dirs:F}=p;k|=d.patchFlag&16;const P=d.props||ye,V=p.props||ye;let z;m&&Pn(m,!1),(z=V.onVnodeBeforeUpdate)&&Pt(z,m,p,d),F&&xn(p,d,m,"beforeUpdate"),m&&Pn(m,!0);const ie=_&&p.type!=="foreignObject";if(E?He(d.dynamicChildren,E,C,m,w,ie,R):D||ht(d,p,C,null,m,w,ie,R,!1),k>0){if(k&16)qe(C,p,P,V,m,w,_);else if(k&2&&P.class!==V.class&&i(C,"class",null,V.class,_),k&4&&i(C,"style",P.style,V.style,_),k&8){const pe=p.dynamicProps;for(let ge=0;ge<pe.length;ge++){const Te=pe[ge],St=P[Te],fs=V[Te];(fs!==St||Te==="value")&&i(C,Te,St,fs,_,d.children,m,w,N)}}k&1&&d.children!==p.children&&l(C,p.children)}else!D&&E==null&&qe(C,p,P,V,m,w,_);((z=V.onVnodeUpdated)||F)&&at(()=>{z&&Pt(z,m,p,d),F&&xn(p,d,m,"updated")},w)},He=(d,p,m,w,_,R,D)=>{for(let C=0;C<p.length;C++){const k=d[C],E=p[C],F=k.el&&(k.type===Fe||!Un(k,E)||k.shapeFlag&70)?h(k.el):m;I(k,E,F,null,w,_,R,D,!0)}},qe=(d,p,m,w,_,R,D)=>{if(m!==w){for(const C in w){if(Fi(C))continue;const k=w[C],E=m[C];k!==E&&C!=="value"&&i(d,C,E,k,D,p.children,_,R,N)}if(m!==ye)for(const C in m)!Fi(C)&&!(C in w)&&i(d,C,m[C],null,D,p.children,_,R,N);"value"in w&&i(d,"value",m.value,w.value)}},bt=(d,p,m,w,_,R,D,C,k)=>{const E=p.el=d?d.el:a(""),F=p.anchor=d?d.anchor:a("");let{patchFlag:P,dynamicChildren:V,slotScopeIds:z}=p;z&&(C=C?C.concat(z):z),d==null?(s(E,m,w),s(F,m,w),ue(p.children,m,F,_,R,D,C,k)):P>0&&P&64&&V&&d.dynamicChildren?(He(d.dynamicChildren,V,m,_,R,D,C),(p.key!=null||_&&p===_.subTree)&&Sd(d,p,!0)):ht(d,p,m,F,_,R,D,C,k)},rn=(d,p,m,w,_,R,D,C,k)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?_.ctx.activate(p,m,w,D,k):ls(p,m,w,_,R,D,k):Oe(d,p,k)},ls=(d,p,m,w,_,R,D)=>{const C=d.component=zv(d,w,_);if(Lo(d)&&(C.ctx.renderer=_e),Gv(C),C.asyncDep){if(_&&_.registerDep(C,ve),!d.el){const k=C.subTree=Se(Xt);x(null,k,p,m)}return}ve(C,d,p,m,_,R,D)},Oe=(d,p,m)=>{const w=p.component=d.component;if(sv(d,p,m))if(w.asyncDep&&!w.asyncResolved){fe(w,p,m);return}else w.next=p,Yy(w.update),w.update();else p.el=d.el,w.vnode=p},ve=(d,p,m,w,_,R,D)=>{const C=()=>{if(d.isMounted){let{next:F,bu:P,u:V,parent:z,vnode:ie}=d,pe=F,ge;Pn(d,!1),F?(F.el=ie.el,fe(d,F,D)):F=ie,P&&Vi(P),(ge=F.props&&F.props.onVnodeBeforeUpdate)&&Pt(ge,z,F,ie),Pn(d,!0);const Te=ga(d),St=d.subTree;d.subTree=Te,I(St,Te,h(St.el),L(St),d,_,R),F.el=Te.el,pe===null&&rv(d,Te.el),V&&at(V,_),(ge=F.props&&F.props.onVnodeUpdated)&&at(()=>Pt(ge,z,F,ie),_)}else{let F;const{el:P,props:V}=p,{bm:z,m:ie,parent:pe}=d,ge=Bi(p);if(Pn(d,!1),z&&Vi(z),!ge&&(F=V&&V.onVnodeBeforeMount)&&Pt(F,pe,p),Pn(d,!0),P&&J){const Te=()=>{d.subTree=ga(d),J(P,d.subTree,d,_,null)};ge?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Te()):Te()}else{const Te=d.subTree=ga(d);I(null,Te,m,w,d,_,R),p.el=Te.el}if(ie&&at(ie,_),!ge&&(F=V&&V.onVnodeMounted)){const Te=p;at(()=>Pt(F,pe,Te),_)}(p.shapeFlag&256||pe&&Bi(pe.vnode)&&pe.vnode.shapeFlag&256)&&d.a&&at(d.a,_),d.isMounted=!0,p=m=w=null}},k=d.effect=new qc(C,()=>Zf(E),d.scope),E=d.update=()=>k.run();E.id=d.uid,Pn(d,!0),E()},fe=(d,p,m)=>{p.component=d;const w=d.vnode.props;d.vnode=p,d.next=null,Nv(d,p.props,w,m),xv(d,p.children,m),Qs(),xo(void 0,d.update),Xs()},ht=(d,p,m,w,_,R,D,C,k=!1)=>{const E=d&&d.children,F=d?d.shapeFlag:0,P=p.children,{patchFlag:V,shapeFlag:z}=p;if(V>0){if(V&128){Kt(E,P,m,w,_,R,D,C,k);return}else if(V&256){hs(E,P,m,w,_,R,D,C,k);return}}z&8?(F&16&&N(E,_,R),P!==E&&l(m,P)):F&16?z&16?Kt(E,P,m,w,_,R,D,C,k):N(E,_,R,!0):(F&8&&l(m,""),z&16&&ue(P,m,w,_,R,D,C,k))},hs=(d,p,m,w,_,R,D,C,k)=>{d=d||Cs,p=p||Cs;const E=d.length,F=p.length,P=Math.min(E,F);let V;for(V=0;V<P;V++){const z=p[V]=k?fn(p[V]):Lt(p[V]);I(d[V],z,m,null,_,R,D,C,k)}E>F?N(d,_,R,!0,!1,P):ue(p,m,w,_,R,D,C,k,P)},Kt=(d,p,m,w,_,R,D,C,k)=>{let E=0;const F=p.length;let P=d.length-1,V=F-1;for(;E<=P&&E<=V;){const z=d[E],ie=p[E]=k?fn(p[E]):Lt(p[E]);if(Un(z,ie))I(z,ie,m,null,_,R,D,C,k);else break;E++}for(;E<=P&&E<=V;){const z=d[P],ie=p[V]=k?fn(p[V]):Lt(p[V]);if(Un(z,ie))I(z,ie,m,null,_,R,D,C,k);else break;P--,V--}if(E>P){if(E<=V){const z=V+1,ie=z<F?p[z].el:w;for(;E<=V;)I(null,p[E]=k?fn(p[E]):Lt(p[E]),m,ie,_,R,D,C,k),E++}}else if(E>V)for(;E<=P;)yt(d[E],_,R,!0),E++;else{const z=E,ie=E,pe=new Map;for(E=ie;E<=V;E++){const ft=p[E]=k?fn(p[E]):Lt(p[E]);ft.key!=null&&pe.set(ft.key,E)}let ge,Te=0;const St=V-ie+1;let fs=!1,yl=0;const lr=new Array(St);for(E=0;E<St;E++)lr[E]=0;for(E=z;E<=P;E++){const ft=d[E];if(Te>=St){yt(ft,_,R,!0);continue}let xt;if(ft.key!=null)xt=pe.get(ft.key);else for(ge=ie;ge<=V;ge++)if(lr[ge-ie]===0&&Un(ft,p[ge])){xt=ge;break}xt===void 0?yt(ft,_,R,!0):(lr[xt-ie]=E+1,xt>=yl?yl=xt:fs=!0,I(ft,p[xt],m,null,_,R,D,C,k),Te++)}const vl=fs?Fv(lr):Cs;for(ge=vl.length-1,E=St-1;E>=0;E--){const ft=ie+E,xt=p[ft],_l=ft+1<F?p[ft+1].el:w;lr[E]===0?I(null,xt,m,_l,_,R,D,C,k):fs&&(ge<0||E!==vl[ge]?Ot(xt,m,_l,2):ge--)}}},Ot=(d,p,m,w,_=null)=>{const{el:R,type:D,transition:C,children:k,shapeFlag:E}=d;if(E&6){Ot(d.component.subTree,p,m,w);return}if(E&128){d.suspense.move(p,m,w);return}if(E&64){D.move(d,p,m,_e);return}if(D===Fe){s(R,p,m);for(let P=0;P<k.length;P++)Ot(k[P],p,m,w);s(d.anchor,p,m);return}if(D===ya){X(d,p,m);return}if(w!==2&&E&1&&C)if(w===0)C.beforeEnter(R),s(R,p,m),at(()=>C.enter(R),_);else{const{leave:P,delayLeave:V,afterLeave:z}=C,ie=()=>s(R,p,m),pe=()=>{P(R,()=>{ie(),z&&z()})};V?V(R,ie,pe):pe()}else s(R,p,m)},yt=(d,p,m,w=!1,_=!1)=>{const{type:R,props:D,ref:C,children:k,dynamicChildren:E,shapeFlag:F,patchFlag:P,dirs:V}=d;if(C!=null&&tc(C,null,m,d,!0),F&256){p.ctx.deactivate(d);return}const z=F&1&&V,ie=!Bi(d);let pe;if(ie&&(pe=D&&D.onVnodeBeforeUnmount)&&Pt(pe,p,d),F&6)M(d.component,m,w);else{if(F&128){d.suspense.unmount(m,w);return}z&&xn(d,null,p,"beforeUnmount"),F&64?d.type.remove(d,p,m,_,_e,w):E&&(R!==Fe||P>0&&P&64)?N(E,p,m,!1,!0):(R===Fe&&P&384||!_&&F&16)&&N(k,p,m),w&&ur(d)}(ie&&(pe=D&&D.onVnodeUnmounted)||z)&&at(()=>{pe&&Pt(pe,p,d),z&&xn(d,null,p,"unmounted")},m)},ur=d=>{const{type:p,el:m,anchor:w,transition:_}=d;if(p===Fe){v(m,w);return}if(p===ya){le(d);return}const R=()=>{r(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:D,delayLeave:C}=_,k=()=>D(m,R);C?C(d.el,R,k):k()}else R()},v=(d,p)=>{let m;for(;d!==p;)m=f(d),r(d),d=m;r(p)},M=(d,p,m)=>{const{bum:w,scope:_,update:R,subTree:D,um:C}=d;w&&Vi(w),_.stop(),R&&(R.active=!1,yt(D,d,p,m)),C&&at(C,p),at(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},N=(d,p,m,w=!1,_=!1,R=0)=>{for(let D=R;D<d.length;D++)yt(d[D],p,m,w,_)},L=d=>d.shapeFlag&6?L(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),de=(d,p,m)=>{d==null?p._vnode&&yt(p._vnode,null,null,!0):I(p._vnode||null,d,p,null,null,null,m),nd(),p._vnode=d},_e={p:I,um:yt,m:Ot,r:ur,mt:ls,mc:ue,pc:ht,pbc:He,n:L,o:t};let te,J;return e&&([te,J]=e(_e)),{render:de,hydrate:te,createApp:Mv(de,te)}}function Pn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Sd(t,e,n=!1){const s=t.children,r=e.children;if(W(s)&&W(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=fn(r[i]),a.el=o.el),n||Sd(o,a))}}function Fv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Vv=t=>t.__isTeleport,Fe=Symbol(void 0),Zc=Symbol(void 0),Xt=Symbol(void 0),ya=Symbol(void 0),Er=[];let At=null;function he(t=!1){Er.push(At=t?null:[])}function $v(){Er.pop(),At=Er[Er.length-1]||null}let Mr=1;function Fl(t){Mr+=t}function Cd(t){return t.dynamicChildren=Mr>0?At||Cs:null,$v(),Mr>0&&At&&At.push(t),t}function we(t,e,n,s,r,i){return Cd(B(t,e,n,s,r,i,!0))}function Ad(t,e,n,s,r){return Cd(Se(t,e,n,s,r,!0))}function nc(t){return t?t.__v_isVNode===!0:!1}function Un(t,e){return t.type===e.type&&t.key===e.key}const Fo="__vInternal",Rd=({key:t})=>t!=null?t:null,ji=({ref:t,ref_key:e,ref_for:n})=>t!=null?$e(t)||Je(t)||Y(t)?{i:Et,r:t,k:e,f:!!n}:t:null;function B(t,e=null,n=null,s=0,r=null,i=t===Fe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rd(e),ref:e&&ji(e),scopeId:Mo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(tu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=$e(n)?8:16),Mr>0&&!o&&At&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&At.push(c),c}const Se=Bv;function Bv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Ev)&&(t=Xt),nc(t)){const a=Cn(t,e,!0);return n&&tu(a,n),Mr>0&&!i&&At&&(a.shapeFlag&6?At[At.indexOf(t)]=a:At.push(a)),a.patchFlag|=-2,a}if(Zv(t)&&(t=t.__vccOpts),e){e=jv(e);let{class:a,style:c}=e;a&&!$e(a)&&(e.class=Fc(a)),Me(c)&&(Kf(c)&&!W(c)&&(c=tt({},c)),e.style=Ss(c))}const o=$e(t)?1:iv(t)?128:Vv(t)?64:Me(t)?4:Y(t)?2:0;return B(t,e,n,s,r,o,i,!0)}function jv(t){return t?Kf(t)||Fo in t?tt({},t):t:null}function Cn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Hv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Rd(a),ref:e&&e.ref?n&&r?W(r)?r.concat(ji(e)):[r,ji(e)]:ji(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cn(t.ssContent),ssFallback:t.ssFallback&&Cn(t.ssFallback),el:t.el,anchor:t.anchor}}function eu(t=" ",e=0){return Se(Zc,null,t,e)}function Lt(t){return t==null||typeof t=="boolean"?Se(Xt):W(t)?Se(Fe,null,t.slice()):typeof t=="object"?fn(t):Se(Zc,null,String(t))}function fn(t){return t.el===null||t.memo?t:Cn(t)}function tu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),tu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Fo in e)?e._ctx=Et:r===3&&Et&&(Et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:Et},n=32):(e=String(e),s&64?(n=16,e=[eu(e)]):n=8);t.children=e,t.shapeFlag|=n}function Hv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Fc([e.class,s.class]));else if(r==="style")e.style=Ss([e.style,s.style]);else if(Ao(r)){const i=e[r],o=s[r];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Pt(t,e,n,s=null){It(t,e,7,[n,s])}const qv=bd();let Kv=0;function zv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||qv,i={uid:Kv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new gy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wd(s,r),emitsOptions:rd(s,r),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:s.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ev.bind(null,i),t.ce&&t.ce(i),i}let Ve=null;const Wv=()=>Ve||Et,Ms=t=>{Ve=t,t.scope.on()},Kn=()=>{Ve&&Ve.scope.off(),Ve=null};function kd(t){return t.vnode.shapeFlag&4}let Lr=!1;function Gv(t,e=!1){Lr=e;const{props:n,children:s}=t.vnode,r=kd(t);kv(t,n,r,e),Ov(t,s);const i=r?Qv(t,e):void 0;return Lr=!1,i}function Qv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=zf(new Proxy(t.ctx,Tv));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Yv(t):null;Ms(t),Qs();const i=_n(s,t,0,[t.props,r]);if(Xs(),Kn(),Df(i)){if(i.then(Kn,Kn),e)return i.then(o=>{Vl(t,o,e)}).catch(o=>{Oo(o,t,0)});t.asyncDep=i}else Vl(t,i,e)}else Nd(t,e)}function Vl(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=Xf(e)),Nd(t,n)}let $l;function Nd(t,e,n){const s=t.type;if(!t.render){if(!e&&$l&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=tt(tt({isCustomElement:i,delimiters:a},o),c);s.render=$l(r,u)}}t.render=s.render||Rt}Ms(t),Qs(),bv(t),Xs(),Kn()}function Xv(t){return new Proxy(t.attrs,{get(e,n){return gt(t,"get","$attrs"),e[n]}})}function Yv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Xv(t))},slots:t.slots,emit:t.emit,expose:e}}function Vo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Xf(zf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Zi)return Zi[n](t)}}))}function Jv(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function Zv(t){return Y(t)&&"__vccOpts"in t}const _t=(t,e)=>Gy(t,e,Lr);function Dd(t,e,n){const s=arguments.length;return s===2?Me(e)&&!W(e)?nc(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&nc(n)&&(n=[n]),Se(t,e,n))}const e_="3.2.37",t_="http://www.w3.org/2000/svg",Fn=typeof document!="undefined"?document:null,Bl=Fn&&Fn.createElement("template"),n_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Fn.createElementNS(t_,t):Fn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Fn.createTextNode(t),createComment:t=>Fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Bl.innerHTML=s?`<svg>${t}</svg>`:t;const a=Bl.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function s_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function r_(t,e,n){const s=t.style,r=$e(n);if(n&&!r){for(const i in n)sc(s,i,n[i]);if(e&&!$e(e))for(const i in e)n[i]==null&&sc(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const jl=/\s*!important$/;function sc(t,e,n){if(W(n))n.forEach(s=>sc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=i_(t,e);jl.test(n)?t.setProperty(Gs(s),n.replace(jl,""),"important"):t[s]=n}}const Hl=["Webkit","Moz","ms"],va={};function i_(t,e){const n=va[e];if(n)return n;let s=$t(e);if(s!=="filter"&&s in t)return va[e]=s;s=No(s);for(let r=0;r<Hl.length;r++){const i=Hl[r]+s;if(i in t)return va[e]=i}return e}const ql="http://www.w3.org/1999/xlink";function o_(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ql,e.slice(6,e.length)):t.setAttributeNS(ql,e,n);else{const i=ry(e);n==null||i&&!Rf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function a_(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Rf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Od,c_]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let rc=0;const u_=Promise.resolve(),l_=()=>{rc=0},h_=()=>rc||(u_.then(l_),rc=Od());function ws(t,e,n,s){t.addEventListener(e,n,s)}function f_(t,e,n,s){t.removeEventListener(e,n,s)}function d_(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=p_(e);if(s){const u=i[e]=g_(s,r);ws(t,a,u,c)}else o&&(f_(t,a,o,c),i[e]=void 0)}}const Kl=/(?:Once|Passive|Capture)$/;function p_(t){let e;if(Kl.test(t)){e={};let n;for(;n=t.match(Kl);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Gs(t.slice(2)),e]}function g_(t,e){const n=s=>{const r=s.timeStamp||Od();(c_||r>=n.attached-1)&&It(m_(s,n.value),e,5,[s])};return n.value=t,n.attached=h_(),n}function m_(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const zl=/^on[a-z]/,y_=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?s_(t,s,r):e==="style"?r_(t,n,s):Ao(e)?Vc(e)||d_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):v_(t,e,s,r))?a_(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),o_(t,e,s,r))};function v_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&zl.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||zl.test(e)&&$e(n)?!1:e in t}const __={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};lv.props;const Wl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Vi(e,n):e};function w_(t){t.target.composing=!0}function Gl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ls={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Wl(r);const i=s||r.props&&r.props.type==="number";ws(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ba(a)),t._assign(a)}),n&&ws(t,"change",()=>{t.value=t.value.trim()}),e||(ws(t,"compositionstart",w_),ws(t,"compositionend",Gl),ws(t,"change",Gl))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Wl(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Ba(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},E_=tt({patchProp:y_},n_);let Ql;function I_(){return Ql||(Ql=Lv(E_))}const T_=(...t)=>{const e=I_().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=b_(s);if(!r)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function b_(t){return $e(t)?document.querySelector(t):t}function S_(){return xd().__VUE_DEVTOOLS_GLOBAL_HOOK__}function xd(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const C_=typeof Proxy=="function",A_="devtools-plugin:setup",R_="plugin:settings:set";let ps,ic;function k_(){var t;return ps!==void 0||(typeof window!="undefined"&&window.performance?(ps=!0,ic=window.performance):typeof global!="undefined"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?(ps=!0,ic=global.perf_hooks.performance):ps=!1),ps}function N_(){return k_()?ic.now():Date.now()}class D_{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},s);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}i=o},now(){return N_()}},n&&n.on(R_,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:a,args:c,resolve:u})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function O_(t,e){const n=t,s=xd(),r=S_(),i=C_&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(A_,t,e);else{const o=i?new D_(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var x_="store";function Js(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function Pd(t){return t!==null&&typeof t=="object"}function P_(t){return t&&typeof t.then=="function"}function M_(t,e){return function(){return t(e)}}function Md(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function Ld(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;$o(t,n,[],t._modules.root,!0),nu(t,n,e)}function nu(t,e,n){var s=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,i={};Js(r,function(o,a){i[a]=M_(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=Ys({data:e}),t.strict&&$_(t),s&&n&&t._withCommit(function(){s.data=null})}function $o(t,e,n,s,r){var i=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!i&&!r){var a=su(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=s.state})}var u=s.context=L_(t,o,n);s.forEachMutation(function(l,h){var f=o+h;U_(t,f,l,u)}),s.forEachAction(function(l,h){var f=l.root?h:o+h,g=l.handler||l;F_(t,f,g,u)}),s.forEachGetter(function(l,h){var f=o+h;V_(t,f,l,u)}),s.forEachChild(function(l,h){$o(t,e,n.concat(h),l,r)})}function L_(t,e,n){var s=e==="",r={dispatch:s?t.dispatch:function(i,o,a){var c=to(i,o,a),u=c.payload,l=c.options,h=c.type;return(!l||!l.root)&&(h=e+h),t.dispatch(h,u)},commit:s?t.commit:function(i,o,a){var c=to(i,o,a),u=c.payload,l=c.options,h=c.type;(!l||!l.root)&&(h=e+h),t.commit(h,u,l)}};return Object.defineProperties(r,{getters:{get:s?function(){return t.getters}:function(){return Ud(t,e)}},state:{get:function(){return su(t.state,n)}}}),r}function Ud(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,s)===e){var i=r.slice(s);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function U_(t,e,n,s){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,s.state,o)})}function F_(t,e,n,s){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return P_(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function V_(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(s.state,s.getters,i.state,i.getters)})}function $_(t){ks(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function su(t,e){return e.reduce(function(n,s){return n[s]},t)}function to(t,e,n){return Pd(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var B_="vuex bindings",Xl="vuex:mutations",_a="vuex:actions",gs="vuex",j_=0;function H_(t,e){O_({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[B_]},function(n){n.addTimelineLayer({id:Xl,label:"Vuex Mutations",color:Yl}),n.addTimelineLayer({id:_a,label:"Vuex Actions",color:Yl}),n.addInspector({id:gs,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===gs)if(s.filter){var r=[];Bd(r,e._modules.root,s.filter,""),s.rootNodes=r}else s.rootNodes=[$d(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===gs){var r=s.nodeId;Ud(e,r),s.state=z_(G_(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===gs){var r=s.nodeId,i=s.path;r!=="root"&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit(function(){s.set(e._state.data,i,s.state.value)})}}),e.subscribe(function(s,r){var i={};s.payload&&(i.payload=s.payload),i.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(gs),n.sendInspectorState(gs),n.addTimelineEvent({layerId:Xl,event:{time:Date.now(),title:s.type,data:i}})}),e.subscribeAction({before:function(s,r){var i={};s.payload&&(i.payload=s.payload),s._id=j_++,s._time=Date.now(),i.state=r,n.addTimelineEvent({layerId:_a,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:i}})},after:function(s,r){var i={},o=Date.now()-s._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(i.payload=s.payload),i.state=r,n.addTimelineEvent({layerId:_a,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:i}})}})})}var Yl=8702998,q_=6710886,K_=16777215,Fd={label:"namespaced",textColor:K_,backgroundColor:q_};function Vd(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function $d(t,e){return{id:e||"root",label:Vd(e),tags:t.namespaced?[Fd]:[],children:Object.keys(t._children).map(function(n){return $d(t._children[n],e+n+"/")})}}function Bd(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[Fd]:[]}),Object.keys(e._children).forEach(function(r){Bd(t,e._children[r],n,s+r+"/")})}function z_(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var i=W_(e);r.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Vd(o):o,editable:!1,value:oc(function(){return i[o]})}})}return r}function W_(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var r=e,i=s.pop();s.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[i]=oc(function(){return t[n]})}else e[n]=oc(function(){return t[n]})}),e}function G_(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,r,i){var o=s[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function oc(t){try{return t()}catch(e){return e}}var Dt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},jd={namespaced:{configurable:!0}};jd.namespaced.get=function(){return!!this._rawModule.namespaced};Dt.prototype.addChild=function(e,n){this._children[e]=n};Dt.prototype.removeChild=function(e){delete this._children[e]};Dt.prototype.getChild=function(e){return this._children[e]};Dt.prototype.hasChild=function(e){return e in this._children};Dt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Dt.prototype.forEachChild=function(e){Js(this._children,e)};Dt.prototype.forEachGetter=function(e){this._rawModule.getters&&Js(this._rawModule.getters,e)};Dt.prototype.forEachAction=function(e){this._rawModule.actions&&Js(this._rawModule.actions,e)};Dt.prototype.forEachMutation=function(e){this._rawModule.mutations&&Js(this._rawModule.mutations,e)};Object.defineProperties(Dt.prototype,jd);var ss=function(e){this.register([],e,!1)};ss.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};ss.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,r){return n=n.getChild(r),s+(n.namespaced?r+"/":"")},"")};ss.prototype.update=function(e){Hd([],this.root,e)};ss.prototype.register=function(e,n,s){var r=this;s===void 0&&(s=!0);var i=new Dt(n,s);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&Js(n.modules,function(a,c){r.register(e.concat(c),a,s)})};ss.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],r=n.getChild(s);!r||!r.runtime||n.removeChild(s)};ss.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function Hd(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;Hd(t.concat(s),e.getChild(s),n.modules[s])}}function Q_(t){return new lt(t)}var lt=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var r=e.strict;r===void 0&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new ss(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(f,g){return c.call(o,f,g)},this.commit=function(f,g,y){return u.call(o,f,g,y)},this.strict=r;var l=this._modules.root.state;$o(this,l,[],this._modules.root),nu(this,l),s.forEach(function(h){return h(n)})},ru={state:{configurable:!0}};lt.prototype.install=function(e,n){e.provide(n||x_,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&H_(e,this)};ru.state.get=function(){return this._state.data};ru.state.set=function(t){};lt.prototype.commit=function(e,n,s){var r=this,i=to(e,n,s),o=i.type,a=i.payload,c={type:o,payload:a},u=this._mutations[o];!u||(this._withCommit(function(){u.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(l){return l(c,r.state)}))};lt.prototype.dispatch=function(e,n){var s=this,r=to(e,n),i=r.type,o=r.payload,a={type:i,payload:o},c=this._actions[i];if(!!c){try{this._actionSubscribers.slice().filter(function(l){return l.before}).forEach(function(l){return l.before(a,s.state)})}catch{}var u=c.length>1?Promise.all(c.map(function(l){return l(o)})):c[0](o);return new Promise(function(l,h){u.then(function(f){try{s._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,s.state)})}catch{}l(f)},function(f){try{s._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,s.state,f)})}catch{}h(f)})})}};lt.prototype.subscribe=function(e,n){return Md(e,this._subscribers,n)};lt.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return Md(s,this._actionSubscribers,n)};lt.prototype.watch=function(e,n,s){var r=this;return ks(function(){return e(r.state,r.getters)},n,Object.assign({},s))};lt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};lt.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),$o(this,this.state,e,this._modules.get(e),s.preserveState),nu(this,this.state)};lt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=su(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),Ld(this)};lt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};lt.prototype.hotUpdate=function(e){this._modules.update(e),Ld(this,!0)};lt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(lt.prototype,ru);var Zs=Kd(function(t,e){var n={};return qd(e).forEach(function(s){var r=s.key,i=s.val;n[r]=function(){var a=this.$store.state,c=this.$store.getters;if(t){var u=zd(this.$store,"mapState",t);if(!u)return;a=u.context.state,c=u.context.getters}return typeof i=="function"?i.call(this,a,c):a[i]},n[r].vuex=!0}),n}),ei=Kd(function(t,e){var n={};return qd(e).forEach(function(s){var r=s.key,i=s.val;n[r]=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var u=this.$store.commit;if(t){var l=zd(this.$store,"mapMutations",t);if(!l)return;u=l.context.commit}return typeof i=="function"?i.apply(this,[u].concat(a)):u.apply(this.$store,[i].concat(a))}}),n});function qd(t){return X_(t)?Array.isArray(t)?t.map(function(e){return{key:e,val:e}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}}):[]}function X_(t){return Array.isArray(t)||Pd(t)}function Kd(t){return function(e,n){return typeof e!="string"?(n=e,e=""):e.charAt(e.length-1)!=="/"&&(e+="/"),t(e,n)}}function zd(t,e,n){var s=t._modulesNamespaceMap[n];return s}/*!
  * vue-router v4.1.1
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Es=typeof window!="undefined";function Y_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const me=Object.assign;function wa(t,e){const n={};for(const s in e){const r=e[s];n[s]=kt(r)?r.map(t):t(r)}return n}const Ir=()=>{},kt=Array.isArray,J_=/\/$/,Z_=t=>t.replace(J_,"");function Ea(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=sw(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function ew(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function tw(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Us(e.matched[s],n.matched[r])&&Wd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Us(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Wd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!nw(t[n],e[n]))return!1;return!0}function nw(t,e){return kt(t)?Zl(t,e):kt(e)?Zl(e,t):t===e}function Zl(t,e){return kt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function sw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Ur;(function(t){t.pop="pop",t.push="push"})(Ur||(Ur={}));var Tr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Tr||(Tr={}));function rw(t){if(!t)if(Es){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Z_(t)}const iw=/^[^#]+#/;function ow(t,e){return t.replace(iw,"#")+e}function aw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Bo=()=>({left:window.pageXOffset,top:window.pageYOffset});function cw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=aw(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function eh(t,e){return(history.state?history.state.position-e:-1)+t}const ac=new Map;function uw(t,e){ac.set(t,e)}function lw(t){const e=ac.get(t);return ac.delete(t),e}let hw=()=>location.protocol+"//"+location.host;function Gd(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Jl(c,"")}return Jl(n,t)+s+r}function fw(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=Gd(t,location),y=n.value,S=e.value;let I=0;if(f){if(n.value=g,e.value=f,o&&o===y){o=null;return}I=S?f.position-S.position:0}else s(g);r.forEach(A=>{A(n.value,y,{delta:I,type:Ur.pop,direction:I?I>0?Tr.forward:Tr.back:Tr.unknown})})};function c(){o=n.value}function u(f){r.push(f);const g=()=>{const y=r.indexOf(f);y>-1&&r.splice(y,1)};return i.push(g),g}function l(){const{history:f}=window;!f.state||f.replaceState(me({},f.state,{scroll:Bo()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function th(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Bo():null}}function dw(t){const{history:e,location:n}=window,s={value:Gd(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:hw()+t+c;try{e[l?"replaceState":"pushState"](u,"",f),r.value=u}catch(g){console.error(g),n[l?"replace":"assign"](f)}}function o(c,u){const l=me({},e.state,th(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=me({},r.value,e.state,{forward:c,scroll:Bo()});i(l.current,l,!0);const h=me({},th(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function pw(t){t=rw(t);const e=dw(t),n=fw(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=me({location:"",base:t,go:s,createHref:ow.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function gw(t){return typeof t=="string"||t&&typeof t=="object"}function Qd(t){return typeof t=="string"||typeof t=="symbol"}const an={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xd=Symbol("");var nh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(nh||(nh={}));function Fs(t,e){return me(new Error,{type:t,[Xd]:!0},e)}function cn(t,e){return t instanceof Error&&Xd in t&&(e==null||!!(t.type&e))}const sh="[^/]+?",mw={sensitive:!1,strict:!1,start:!0,end:!0},yw=/[.+*?^${}()[\]/\\]/g;function vw(t,e){const n=me({},mw,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const f=u[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(yw,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:S,optional:I,regexp:A}=f;i.push({name:y,repeatable:S,optional:I});const x=A||sh;if(x!==sh){g+=10;try{new RegExp(`(${x})`)}catch(X){throw new Error(`Invalid custom RegExp for param "${y}" (${x}): `+X.message)}}let K=S?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(K=I&&u.length<2?`(?:/${K})`:"/"+K),I&&(K+="?"),r+=K,g+=20,I&&(g+=-8),S&&(g+=-20),x===".*"&&(g+=-50)}l.push(g)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let f=1;f<l.length;f++){const g=l[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(u){let l="",h=!1;for(const f of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const g of f)if(g.type===0)l+=g.value;else if(g.type===1){const{value:y,repeatable:S,optional:I}=g,A=y in u?u[y]:"";if(kt(A)&&!S)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const x=kt(A)?A.join("/"):A;if(!x)if(I)f.length<2&&t.length>1&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);l+=x}}return l}return{re:o,score:s,keys:i,parse:a,stringify:c}}function _w(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ww(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=_w(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(rh(s))return 1;if(rh(r))return-1}return r.length-s.length}function rh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ew={type:0,value:""},Iw=/[a-zA-Z0-9_]/;function Tw(t){if(!t)return[[]];if(t==="/")return[[Ew]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:Iw.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function bw(t,e,n){const s=vw(Tw(t.path),n),r=me(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Sw(t,e){const n=[],s=new Map;e=oh({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,f){const g=!f,y=Aw(l);y.aliasOf=f&&f.record;const S=oh(e,l),I=[y];if("alias"in l){const K=typeof l.alias=="string"?[l.alias]:l.alias;for(const X of K)I.push(me({},y,{components:f?f.record.components:y.components,path:X,aliasOf:f?f.record:y}))}let A,x;for(const K of I){const{path:X}=K;if(h&&X[0]!=="/"){const le=h.record.path,Ce=le[le.length-1]==="/"?"":"/";K.path=h.record.path+(X&&Ce+X)}if(A=bw(K,h,S),f?f.alias.push(A):(x=x||A,x!==A&&x.alias.push(A),g&&l.name&&!ih(A)&&o(l.name)),y.children){const le=y.children;for(let Ce=0;Ce<le.length;Ce++)i(le[Ce],A,f&&f.children[Ce])}f=f||A,c(A)}return x?()=>{o(x)}:Ir}function o(l){if(Qd(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&ww(l,n[h])>=0&&(l.record.path!==n[h].record.path||!Yd(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!ih(l)&&s.set(l.record.name,l)}function u(l,h){let f,g={},y,S;if("name"in l&&l.name){if(f=s.get(l.name),!f)throw Fs(1,{location:l});S=f.record.name,g=me(Cw(h.params,f.keys.filter(x=>!x.optional).map(x=>x.name)),l.params),y=f.stringify(g)}else if("path"in l)y=l.path,f=n.find(x=>x.re.test(y)),f&&(g=f.parse(y),S=f.record.name);else{if(f=h.name?s.get(h.name):n.find(x=>x.re.test(h.path)),!f)throw Fs(1,{location:l,currentLocation:h});S=f.record.name,g=me({},h.params,l.params),y=f.stringify(g)}const I=[];let A=f;for(;A;)I.unshift(A.record),A=A.parent;return{name:S,path:y,params:g,matched:I,meta:kw(I)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Cw(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Aw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Rw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Rw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function ih(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function kw(t){return t.reduce((e,n)=>me(e,n.meta),{})}function oh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Yd(t,e){return e.children.some(n=>n===t||Yd(t,n))}const Jd=/#/g,Nw=/&/g,Dw=/\//g,Ow=/=/g,xw=/\?/g,Zd=/\+/g,Pw=/%5B/g,Mw=/%5D/g,ep=/%5E/g,Lw=/%60/g,tp=/%7B/g,Uw=/%7C/g,np=/%7D/g,Fw=/%20/g;function iu(t){return encodeURI(""+t).replace(Uw,"|").replace(Pw,"[").replace(Mw,"]")}function Vw(t){return iu(t).replace(tp,"{").replace(np,"}").replace(ep,"^")}function cc(t){return iu(t).replace(Zd,"%2B").replace(Fw,"+").replace(Jd,"%23").replace(Nw,"%26").replace(Lw,"`").replace(tp,"{").replace(np,"}").replace(ep,"^")}function $w(t){return cc(t).replace(Ow,"%3D")}function Bw(t){return iu(t).replace(Jd,"%23").replace(xw,"%3F")}function jw(t){return t==null?"":Bw(t).replace(Dw,"%2F")}function no(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Hw(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Zd," "),o=i.indexOf("="),a=no(o<0?i:i.slice(0,o)),c=o<0?null:no(i.slice(o+1));if(a in e){let u=e[a];kt(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function ah(t){let e="";for(let n in t){const s=t[n];if(n=$w(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(kt(s)?s.map(i=>i&&cc(i)):[s&&cc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function qw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=kt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Kw=Symbol(""),ch=Symbol(""),ou=Symbol(""),sp=Symbol(""),uc=Symbol("");function hr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function dn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Fs(4,{from:n,to:e})):h instanceof Error?a(h):gw(h)?a(Fs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Ia(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(zw(a)){const u=(a.__vccOpts||a)[e];u&&r.push(dn(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=Y_(u)?u.default:u;i.components[o]=l;const f=(l.__vccOpts||l)[e];return f&&dn(f,n,s,i,o)()}))}}return r}function zw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function uh(t){const e=wn(ou),n=wn(sp),s=_t(()=>e.resolve(qn(t.to))),r=_t(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const f=h.findIndex(Us.bind(null,l));if(f>-1)return f;const g=lh(c[u-2]);return u>1&&lh(l)===g&&h[h.length-1].path!==g?h.findIndex(Us.bind(null,c[u-2])):f}),i=_t(()=>r.value>-1&&Qw(n.params,s.value.params)),o=_t(()=>r.value>-1&&r.value===n.matched.length-1&&Wd(n.params,s.value.params));function a(c={}){return Gw(c)?e[qn(t.replace)?"replace":"push"](qn(t.to)).catch(Ir):Promise.resolve()}return{route:s,href:_t(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Ww=hd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:uh,setup(t,{slots:e}){const n=Ys(uh(t)),{options:s}=wn(ou),r=_t(()=>({[hh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[hh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Dd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),rp=Ww;function Gw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Qw(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!kt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function lh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const hh=(t,e,n)=>t!=null?t:e!=null?e:n,Xw=hd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=wn(uc),r=_t(()=>t.route||s.value),i=wn(ch,0),o=_t(()=>{let u=qn(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=_t(()=>r.value.matched[o.value]);$i(ch,_t(()=>o.value+1)),$i(Kw,a),$i(uc,r);const c=Hy();return ks(()=>[c.value,a.value,t.name],([u,l,h],[f,g,y])=>{l&&(l.instances[h]=u,g&&g!==l&&u&&u===f&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!Us(l,g)||!f)&&(l.enterCallbacks[h]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=r.value,l=a.value,h=l&&l.components[t.name],f=t.name;if(!h)return fh(n.default,{Component:h,route:u});const g=l.props[t.name],y=g?g===!0?u.params:typeof g=="function"?g(u):g:null,I=Dd(h,me({},y,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(l.instances[f]=null)},ref:c}));return fh(n.default,{Component:I,route:u})||I}}});function fh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ip=Xw;function Yw(t){const e=Sw(t.routes,t),n=t.parseQuery||Hw,s=t.stringifyQuery||ah,r=t.history,i=hr(),o=hr(),a=hr(),c=qy(an);let u=an;Es&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=wa.bind(null,v=>""+v),h=wa.bind(null,jw),f=wa.bind(null,no);function g(v,M){let N,L;return Qd(v)?(N=e.getRecordMatcher(v),L=M):L=v,e.addRoute(L,N)}function y(v){const M=e.getRecordMatcher(v);M&&e.removeRoute(M)}function S(){return e.getRoutes().map(v=>v.record)}function I(v){return!!e.getRecordMatcher(v)}function A(v,M){if(M=me({},M||c.value),typeof v=="string"){const J=Ea(n,v,M.path),d=e.resolve({path:J.path},M),p=r.createHref(J.fullPath);return me(J,d,{params:f(d.params),hash:no(J.hash),redirectedFrom:void 0,href:p})}let N;if("path"in v)N=me({},v,{path:Ea(n,v.path,M.path).path});else{const J=me({},v.params);for(const d in J)J[d]==null&&delete J[d];N=me({},v,{params:h(v.params)}),M.params=h(M.params)}const L=e.resolve(N,M),de=v.hash||"";L.params=l(f(L.params));const _e=ew(s,me({},v,{hash:Vw(de),path:L.path})),te=r.createHref(_e);return me({fullPath:_e,hash:de,query:s===ah?qw(v.query):v.query||{}},L,{redirectedFrom:void 0,href:te})}function x(v){return typeof v=="string"?Ea(n,v,c.value.path):me({},v)}function K(v,M){if(u!==v)return Fs(8,{from:M,to:v})}function X(v){return De(v)}function le(v){return X(me(x(v),{replace:!0}))}function Ce(v){const M=v.matched[v.matched.length-1];if(M&&M.redirect){const{redirect:N}=M;let L=typeof N=="function"?N(v):N;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=x(L):{path:L},L.params={}),me({query:v.query,hash:v.hash,params:"path"in L?{}:v.params},L)}}function De(v,M){const N=u=A(v),L=c.value,de=v.state,_e=v.force,te=v.replace===!0,J=Ce(N);if(J)return De(me(x(J),{state:de,force:_e,replace:te}),M||N);const d=N;d.redirectedFrom=M;let p;return!_e&&tw(s,L,N)&&(p=Fs(16,{to:d,from:L}),hs(L,L,!0,!1)),(p?Promise.resolve(p):ue(d,L)).catch(m=>cn(m)?cn(m,2)?m:ht(m):ve(m,d,L)).then(m=>{if(m){if(cn(m,2))return De(me(x(m.to),{state:de,force:_e,replace:te}),M||d)}else m=He(d,L,!0,te,de);return Ie(d,L,m),m})}function ee(v,M){const N=K(v,M);return N?Promise.reject(N):Promise.resolve()}function ue(v,M){let N;const[L,de,_e]=Jw(v,M);N=Ia(L.reverse(),"beforeRouteLeave",v,M);for(const J of L)J.leaveGuards.forEach(d=>{N.push(dn(d,v,M))});const te=ee.bind(null,v,M);return N.push(te),ms(N).then(()=>{N=[];for(const J of i.list())N.push(dn(J,v,M));return N.push(te),ms(N)}).then(()=>{N=Ia(de,"beforeRouteUpdate",v,M);for(const J of de)J.updateGuards.forEach(d=>{N.push(dn(d,v,M))});return N.push(te),ms(N)}).then(()=>{N=[];for(const J of v.matched)if(J.beforeEnter&&!M.matched.includes(J))if(kt(J.beforeEnter))for(const d of J.beforeEnter)N.push(dn(d,v,M));else N.push(dn(J.beforeEnter,v,M));return N.push(te),ms(N)}).then(()=>(v.matched.forEach(J=>J.enterCallbacks={}),N=Ia(_e,"beforeRouteEnter",v,M),N.push(te),ms(N))).then(()=>{N=[];for(const J of o.list())N.push(dn(J,v,M));return N.push(te),ms(N)}).catch(J=>cn(J,8)?J:Promise.reject(J))}function Ie(v,M,N){for(const L of a.list())L(v,M,N)}function He(v,M,N,L,de){const _e=K(v,M);if(_e)return _e;const te=M===an,J=Es?history.state:{};N&&(L||te?r.replace(v.fullPath,me({scroll:te&&J&&J.scroll},de)):r.push(v.fullPath,de)),c.value=v,hs(v,M,N,te),ht()}let qe;function bt(){qe||(qe=r.listen((v,M,N)=>{if(!ur.listening)return;const L=A(v),de=Ce(L);if(de){De(me(de,{replace:!0}),L).catch(Ir);return}u=L;const _e=c.value;Es&&uw(eh(_e.fullPath,N.delta),Bo()),ue(L,_e).catch(te=>cn(te,12)?te:cn(te,2)?(De(te.to,L).then(J=>{cn(J,20)&&!N.delta&&N.type===Ur.pop&&r.go(-1,!1)}).catch(Ir),Promise.reject()):(N.delta&&r.go(-N.delta,!1),ve(te,L,_e))).then(te=>{te=te||He(L,_e,!1),te&&(N.delta?r.go(-N.delta,!1):N.type===Ur.pop&&cn(te,20)&&r.go(-1,!1)),Ie(L,_e,te)}).catch(Ir)}))}let rn=hr(),ls=hr(),Oe;function ve(v,M,N){ht(v);const L=ls.list();return L.length?L.forEach(de=>de(v,M,N)):console.error(v),Promise.reject(v)}function fe(){return Oe&&c.value!==an?Promise.resolve():new Promise((v,M)=>{rn.add([v,M])})}function ht(v){return Oe||(Oe=!v,bt(),rn.list().forEach(([M,N])=>v?N(v):M()),rn.reset()),v}function hs(v,M,N,L){const{scrollBehavior:de}=t;if(!Es||!de)return Promise.resolve();const _e=!N&&lw(eh(v.fullPath,0))||(L||!N)&&history.state&&history.state.scroll||null;return Jf().then(()=>de(v,M,_e)).then(te=>te&&cw(te)).catch(te=>ve(te,v,M))}const Kt=v=>r.go(v);let Ot;const yt=new Set,ur={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,hasRoute:I,getRoutes:S,resolve:A,options:t,push:X,replace:le,go:Kt,back:()=>Kt(-1),forward:()=>Kt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ls.add,isReady:fe,install(v){const M=this;v.component("RouterLink",rp),v.component("RouterView",ip),v.config.globalProperties.$router=M,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>qn(c)}),Es&&!Ot&&c.value===an&&(Ot=!0,X(r.location).catch(de=>{}));const N={};for(const de in an)N[de]=_t(()=>c.value[de]);v.provide(ou,M),v.provide(sp,Ys(N)),v.provide(uc,c);const L=v.unmount;yt.add(v),v.unmount=function(){yt.delete(v),yt.size<1&&(u=an,qe&&qe(),qe=null,c.value=an,Ot=!1,Oe=!1),L()}}};return ur}function ms(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Jw(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Us(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Us(u,c))||r.push(c))}return[n,s,r]}const Zw={id:"app",class:"content"},eE={__name:"App",setup(t){return(e,n)=>(he(),we("div",Zw,[(he(),Ad(qn(ip),{key:e.$route.path}))]))}};/**
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
 */const op=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},tE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ap={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(f=64)),s.push(n[l],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(op(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const y=u<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},nE=function(t){const e=op(t);return ap.encodeByteArray(e,!0)},cp=function(t){return nE(t).replace(/\./g,"")},sE=function(t){try{return ap.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class rE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Be(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function up(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function lp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iE(){return Be().indexOf("Electron/")>=0}function fp(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oE(){return Be().indexOf("MSAppHost/")>=0}function aE(){return typeof indexedDB=="object"}function cE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const uE="FirebaseError";class rs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=uE,Object.setPrototypeOf(this,rs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ti.prototype.create)}}class ti{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?lE(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new rs(r,a,s)}}function lE(t,e){return t.replace(hE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const hE=/\{\$([^}]+)}/g;function fE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function so(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(dh(i)&&dh(o)){if(!so(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function dh(t){return t!==null&&typeof t=="object"}/**
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
 */function ni(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function gr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function mr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function dE(t,e){const n=new pE(t,e);return n.subscribe.bind(n)}class pE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");gE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ta),r.error===void 0&&(r.error=Ta),r.complete===void 0&&(r.complete=Ta);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ta(){}/**
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
 */function jt(t){return t&&t._delegate?t._delegate:t}class Gn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ln="[DEFAULT]";/**
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
 */class mE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new rE;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vE(e))try{this.getOrInitializeService({instanceIdentifier:Ln})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ln){return this.instances.has(e)}getOptions(e=Ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ln){return this.component?this.component.multipleInstances?e:Ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yE(t){return t===Ln?void 0:t}function vE(t){return t.instantiationMode==="EAGER"}/**
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
 */class _E{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const wE={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},EE=oe.INFO,IE={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},TE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=IE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class au{constructor(e){this.name=e,this._logLevel=EE,this._logHandler=TE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const bE=(t,e)=>e.some(n=>t instanceof n);let ph,gh;function SE(){return ph||(ph=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CE(){return gh||(gh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dp=new WeakMap,lc=new WeakMap,pp=new WeakMap,ba=new WeakMap,cu=new WeakMap;function AE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(En(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dp.set(n,t)}).catch(()=>{}),cu.set(e,t),e}function RE(t){if(lc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});lc.set(t,e)}let hc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return En(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kE(t){hc=t(hc)}function NE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Sa(this),e,...n);return pp.set(s,e.sort?e.sort():[e]),En(s)}:CE().includes(t)?function(...e){return t.apply(Sa(this),e),En(dp.get(this))}:function(...e){return En(t.apply(Sa(this),e))}}function DE(t){return typeof t=="function"?NE(t):(t instanceof IDBTransaction&&RE(t),bE(t,SE())?new Proxy(t,hc):t)}function En(t){if(t instanceof IDBRequest)return AE(t);if(ba.has(t))return ba.get(t);const e=DE(t);return e!==t&&(ba.set(t,e),cu.set(e,t)),e}const Sa=t=>cu.get(t);function OE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=En(o);return s&&o.addEventListener("upgradeneeded",c=>{s(En(o.result),c.oldVersion,c.newVersion,En(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const xE=["get","getKey","getAll","getAllKeys","count"],PE=["put","add","delete","clear"],Ca=new Map;function mh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ca.get(e))return Ca.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=PE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||xE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Ca.set(e,i),i}kE(t=>({...t,get:(e,n,s)=>mh(e,n)||t.get(e,n,s),has:(e,n)=>!!mh(e,n)||t.has(e,n)}));/**
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
 */class ME{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function LE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fc="@firebase/app",yh="0.7.28";/**
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
 */const uu=new au("@firebase/app"),UE="@firebase/app-compat",FE="@firebase/analytics-compat",VE="@firebase/analytics",$E="@firebase/app-check-compat",BE="@firebase/app-check",jE="@firebase/auth",HE="@firebase/auth-compat",qE="@firebase/database",KE="@firebase/database-compat",zE="@firebase/functions",WE="@firebase/functions-compat",GE="@firebase/installations",QE="@firebase/installations-compat",XE="@firebase/messaging",YE="@firebase/messaging-compat",JE="@firebase/performance",ZE="@firebase/performance-compat",e0="@firebase/remote-config",t0="@firebase/remote-config-compat",n0="@firebase/storage",s0="@firebase/storage-compat",r0="@firebase/firestore",i0="@firebase/firestore-compat",o0="firebase",a0="9.9.0";/**
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
 */const gp="[DEFAULT]",c0={[fc]:"fire-core",[UE]:"fire-core-compat",[VE]:"fire-analytics",[FE]:"fire-analytics-compat",[BE]:"fire-app-check",[$E]:"fire-app-check-compat",[jE]:"fire-auth",[HE]:"fire-auth-compat",[qE]:"fire-rtdb",[KE]:"fire-rtdb-compat",[zE]:"fire-fn",[WE]:"fire-fn-compat",[GE]:"fire-iid",[QE]:"fire-iid-compat",[XE]:"fire-fcm",[YE]:"fire-fcm-compat",[JE]:"fire-perf",[ZE]:"fire-perf-compat",[e0]:"fire-rc",[t0]:"fire-rc-compat",[n0]:"fire-gcs",[s0]:"fire-gcs-compat",[r0]:"fire-fst",[i0]:"fire-fst-compat","fire-js":"fire-js",[o0]:"fire-js-all"};/**
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
 */const ro=new Map,dc=new Map;function u0(t,e){try{t.container.addComponent(e)}catch(n){uu.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vs(t){const e=t.name;if(dc.has(e))return uu.debug(`There were multiple attempts to register component ${e}.`),!1;dc.set(e,t);for(const n of ro.values())u0(n,t);return!0}function lu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const l0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Qn=new ti("app","Firebase",l0);/**
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
 */class h0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
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
 */const si=a0;function f0(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:gp,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Qn.create("bad-app-name",{appName:String(s)});const r=ro.get(s);if(r){if(so(t,r.options)&&so(n,r.config))return r;throw Qn.create("duplicate-app",{appName:s})}const i=new _E(s);for(const a of dc.values())i.addComponent(a);const o=new h0(t,n,i);return ro.set(s,o),o}function mp(t=gp){const e=ro.get(t);if(!e)throw Qn.create("no-app",{appName:t});return e}function In(t,e,n){var s;let r=(s=c0[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),uu.warn(a.join(" "));return}Vs(new Gn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const d0="firebase-heartbeat-database",p0=1,Fr="firebase-heartbeat-store";let Aa=null;function yp(){return Aa||(Aa=OE(d0,p0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fr)}}}).catch(t=>{throw Qn.create("storage-open",{originalErrorMessage:t.message})})),Aa}async function g0(t){var e;try{return(await yp()).transaction(Fr).objectStore(Fr).get(vp(t))}catch(n){throw Qn.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function vh(t,e){var n;try{const r=(await yp()).transaction(Fr,"readwrite");return await r.objectStore(Fr).put(e,vp(t)),r.done}catch(s){throw Qn.create("storage-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message})}}function vp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const m0=1024,y0=30*24*60*60*1e3;class v0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new w0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_h();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=y0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_h(),{heartbeatsToSend:n,unsentEntries:s}=_0(this._heartbeatsCache.heartbeats),r=cp(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function _h(){return new Date().toISOString().substring(0,10)}function _0(t,e=m0){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),wh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),wh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class w0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aE()?cE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await g0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return vh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return vh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function wh(t){return cp(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function E0(t){Vs(new Gn("platform-logger",e=>new ME(e),"PRIVATE")),Vs(new Gn("heartbeat",e=>new v0(e),"PRIVATE")),In(fc,yh,t),In(fc,yh,"esm2017"),In("fire-js","")}E0("");function hu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function _p(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const I0=_p,wp=new ti("auth","Firebase",_p());/**
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
 */const Eh=new au("@firebase/auth");function Hi(t,...e){Eh.logLevel<=oe.ERROR&&Eh.error(`Auth (${si}): ${t}`,...e)}/**
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
 */function Nt(t,...e){throw fu(t,...e)}function Ut(t,...e){return fu(t,...e)}function T0(t,e,n){const s=Object.assign(Object.assign({},I0()),{[e]:n});return new ti("auth","Firebase",s).create(e,{appName:t.name})}function fu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return wp.create(t,...e)}function H(t,e,...n){if(!t)throw fu(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hi(e),new Error(e)}function en(t,e){t||Wt(e)}/**
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
 */const Ih=new Map;function Gt(t){en(t instanceof Function,"Expected a class definition");let e=Ih.get(t);return e?(en(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ih.set(t,e),e)}/**
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
 */function b0(t,e){const n=lu(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(so(i,e!=null?e:{}))return r;Nt(r,"already-initialized")}return n.initialize({options:e})}function S0(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function pc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function C0(){return Th()==="http:"||Th()==="https:"}function Th(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function A0(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(C0()||lp()||"connection"in navigator)?navigator.onLine:!0}function R0(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ri{constructor(e,n){this.shortDelay=e,this.longDelay=n,en(n>e,"Short delay should be less than long delay!"),this.isMobile=up()||hp()}get(){return A0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function du(t,e){en(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ep{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const k0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const N0=new ri(3e4,6e4);function ii(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function oi(t,e,n,s,r={}){return Ip(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ni(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ep.fetch()(Tp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Ip(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},k0),e);try{const r=new D0(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Di(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Di(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Di(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Di(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw T0(t,l,u);Nt(t,l)}}catch(r){if(r instanceof rs)throw r;Nt(t,"network-request-failed")}}async function ai(t,e,n,s,r={}){const i=await oi(t,e,n,s,r);return"mfaPendingCredential"in i&&Nt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Tp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?du(t.config,r):`${t.config.apiScheme}://${r}`}class D0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ut(this.auth,"network-request-failed")),N0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Di(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ut(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function O0(t,e){return oi(t,"POST","/v1/accounts:delete",e)}async function x0(t,e){return oi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function br(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function P0(t,e=!1){const n=jt(t),s=await n.getIdToken(e),r=pu(s);H(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:br(Ra(r.auth_time)),issuedAtTime:br(Ra(r.iat)),expirationTime:br(Ra(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ra(t){return Number(t)*1e3}function pu(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return Hi("JWT malformed, contained fewer than 3 sections"),null;try{const i=sE(s);return i?JSON.parse(i):(Hi("Failed to decode base64 JWT payload"),null)}catch(i){return Hi("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function M0(t){const e=pu(t);return H(e,"internal-error"),H(typeof e.exp!="undefined","internal-error"),H(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Vr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof rs&&L0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function L0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class U0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=br(this.lastLoginAt),this.creationTime=br(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function io(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Vr(t,x0(n,{idToken:s}));H(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?$0(i.providerUserInfo):[],a=V0(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new bp(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function F0(t){const e=jt(t);await io(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function V0(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function $0(t){return t.map(e=>{var{providerId:n}=e,s=hu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function B0(t,e){const n=await Ip(t,{},async()=>{const s=ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Tp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ep.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class $r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken!="undefined","internal-error"),H(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):M0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await B0(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new $r;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $r,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
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
 */function un(t,e){H(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class zn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=hu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new U0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Vr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return P0(this,e)}reload(){return F0(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await io(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Vr(this,O0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:K,emailVerified:X,isAnonymous:le,providerData:Ce,stsTokenManager:De}=n;H(K&&De,e,"internal-error");const ee=$r.fromJSON(this.name,De);H(typeof K=="string",e,"internal-error"),un(h,e.name),un(f,e.name),H(typeof X=="boolean",e,"internal-error"),H(typeof le=="boolean",e,"internal-error"),un(g,e.name),un(y,e.name),un(S,e.name),un(I,e.name),un(A,e.name),un(x,e.name);const ue=new zn({uid:K,auth:e,email:f,emailVerified:X,displayName:h,isAnonymous:le,photoURL:y,phoneNumber:g,tenantId:S,stsTokenManager:ee,createdAt:A,lastLoginAt:x});return Ce&&Array.isArray(Ce)&&(ue.providerData=Ce.map(Ie=>Object.assign({},Ie))),I&&(ue._redirectEventId=I),ue}static async _fromIdTokenResponse(e,n,s=!1){const r=new $r;r.updateFromServerResponse(n);const i=new zn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await io(i),i}}/**
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
 */class Sp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sp.type="NONE";const bh=Sp;/**
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
 */function qi(t,e,n){return`firebase:${t}:${e}:${n}`}class Ns{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=qi(this.userKey,r.apiKey,i),this.fullPersistenceKey=qi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ns(Gt(bh),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Gt(bh);const o=qi(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=zn._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ns(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ns(i,e,s))}}/**
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
 */function Sh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Np(e))return"Blackberry";if(Dp(e))return"Webos";if(gu(e))return"Safari";if((e.includes("chrome/")||Ap(e))&&!e.includes("edge/"))return"Chrome";if(kp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Cp(t=Be()){return/firefox\//i.test(t)}function gu(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ap(t=Be()){return/crios\//i.test(t)}function Rp(t=Be()){return/iemobile/i.test(t)}function kp(t=Be()){return/android/i.test(t)}function Np(t=Be()){return/blackberry/i.test(t)}function Dp(t=Be()){return/webos/i.test(t)}function jo(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function j0(t=Be()){var e;return jo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function H0(){return fp()&&document.documentMode===10}function Op(t=Be()){return jo(t)||kp(t)||Dp(t)||Np(t)||/windows phone/i.test(t)||Rp(t)}function q0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function xp(t,e=[]){let n;switch(t){case"Browser":n=Sh(Be());break;case"Worker":n=`${Sh(Be())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${si}/${s}`}/**
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
 */class K0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
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
 */class z0{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ch(this),this.idTokenSubscription=new Ch(this),this.beforeStateQueue=new K0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Ns.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await io(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?jt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ti("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Ns.create(this,[Gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Ho(t){return jt(t)}class Ch{constructor(e){this.auth=e,this.observer=null,this.addObserver=dE(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class mu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}async function W0(t,e){return oi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function G0(t,e){return ai(t,"POST","/v1/accounts:signInWithPassword",ii(t,e))}/**
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
 */async function Q0(t,e){return ai(t,"POST","/v1/accounts:signInWithEmailLink",ii(t,e))}async function X0(t,e){return ai(t,"POST","/v1/accounts:signInWithEmailLink",ii(t,e))}/**
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
 */class Br extends mu{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Br(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Br(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return G0(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Q0(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return W0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return X0(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ds(t,e){return ai(t,"POST","/v1/accounts:signInWithIdp",ii(t,e))}/**
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
 */const Y0="http://localhost";class Xn extends mu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=hu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Xn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ds(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ds(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ds(e,n)}buildRequest(){const e={requestUri:Y0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ni(n)}return e}}/**
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
 */function J0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Z0(t){const e=gr(mr(t)).link,n=e?gr(mr(e)).deep_link_id:null,s=gr(mr(t)).deep_link_id;return(s?gr(mr(s)).link:null)||s||n||e||t}class yu{constructor(e){var n,s,r,i,o,a;const c=gr(mr(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=J0((r=c.mode)!==null&&r!==void 0?r:null);H(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Z0(e);try{return new yu(n)}catch{return null}}}/**
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
 */class er{constructor(){this.providerId=er.PROVIDER_ID}static credential(e,n){return Br._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=yu.parseLink(n);return H(s,"argument-error"),Br._fromEmailAndCode(e,s.code,s.tenantId)}}er.PROVIDER_ID="password";er.EMAIL_PASSWORD_SIGN_IN_METHOD="password";er.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Pp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ci extends Pp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pn extends ci{constructor(){super("facebook.com")}static credential(e){return Xn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";pn.PROVIDER_ID="facebook.com";/**
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
 */class gn extends ci{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return gn.credential(n,s)}catch{return null}}}gn.GOOGLE_SIGN_IN_METHOD="google.com";gn.PROVIDER_ID="google.com";/**
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
 */class mn extends ci{constructor(){super("github.com")}static credential(e){return Xn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
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
 */class yn extends ci{constructor(){super("twitter.com")}static credential(e,n){return Xn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return yn.credential(n,s)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
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
 */async function eI(t,e){return ai(t,"POST","/v1/accounts:signUp",ii(t,e))}/**
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
 */class Yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await zn._fromIdTokenResponse(e,s,r),o=Ah(s);return new Yn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Ah(s);return new Yn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Ah(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class oo extends rs{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,oo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new oo(e,n,s,r)}}function Mp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?oo._fromErrorAndOperation(t,i,e,s):i})}async function tI(t,e,n=!1){const s=await Vr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yn._forOperation(t,"link",s)}/**
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
 */async function nI(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await Vr(t,Mp(r,i,e,t),n);H(o.idToken,r,"internal-error");const a=pu(o.idToken);H(a,r,"internal-error");const{sub:c}=a;return H(t.uid===c,r,"user-mismatch"),Yn._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Nt(r,"user-mismatch"),o}}/**
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
 */async function Lp(t,e,n=!1){const s="signIn",r=await Mp(t,s,e),i=await Yn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function sI(t,e){return Lp(Ho(t),e)}async function rI(t,e,n){const s=Ho(t),r=await eI(s,{returnSecureToken:!0,email:e,password:n}),i=await Yn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function iI(t,e,n){return sI(jt(t),er.credential(e,n))}function oI(t){return jt(t).signOut()}const ao="__sak";/**
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
 */class Up{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ao,"1"),this.storage.removeItem(ao),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function aI(){const t=Be();return gu(t)||jo(t)}const cI=1e3,uI=10;class Fp extends Up{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aI()&&q0(),this.fallbackToPolling=Op(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);H0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,uI):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},cI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fp.type="LOCAL";const lI=Fp;/**
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
 */class Vp extends Up{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vp.type="SESSION";const $p=Vp;/**
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
 */function hI(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new qo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await hI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qo.receivers=[];/**
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
 */function vu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class fI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=vu("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ft(){return window}function dI(t){Ft().location.href=t}/**
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
 */function Bp(){return typeof Ft().WorkerGlobalScope!="undefined"&&typeof Ft().importScripts=="function"}async function pI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mI(){return Bp()?self:null}/**
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
 */const jp="firebaseLocalStorageDb",yI=1,co="firebaseLocalStorage",Hp="fbase_key";class ui{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ko(t,e){return t.transaction([co],e?"readwrite":"readonly").objectStore(co)}function vI(){const t=indexedDB.deleteDatabase(jp);return new ui(t).toPromise()}function gc(){const t=indexedDB.open(jp,yI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(co,{keyPath:Hp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(co)?e(s):(s.close(),await vI(),e(await gc()))})})}async function Rh(t,e,n){const s=Ko(t,!0).put({[Hp]:e,value:n});return new ui(s).toPromise()}async function _I(t,e){const n=Ko(t,!1).get(e),s=await new ui(n).toPromise();return s===void 0?null:s.value}function kh(t,e){const n=Ko(t,!0).delete(e);return new ui(n).toPromise()}const wI=800,EI=3;class qp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>EI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qo._getInstance(mI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pI(),!this.activeServiceWorker)return;this.sender=new fI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gc();return await Rh(e,ao,"1"),await kh(e,ao),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Rh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>_I(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ko(r,!1).getAll();return new ui(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qp.type="LOCAL";const II=qp;/**
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
 */function TI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function bI(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ut("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",TI().appendChild(s)})}function SI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ri(3e4,6e4);/**
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
 */function CI(t,e){return e?Gt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class _u extends mu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AI(t){return Lp(t.auth,new _u(t),t.bypassAuthState)}function RI(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),nI(n,new _u(t),t.bypassAuthState)}async function kI(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),tI(n,new _u(t),t.bypassAuthState)}/**
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
 */class Kp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AI;case"linkViaPopup":case"linkViaRedirect":return kI;case"reauthViaPopup":case"reauthViaRedirect":return RI;default:Nt(this.auth,"internal-error")}}resolve(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const NI=new ri(2e3,1e4);class Is extends Kp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Is.currentPopupAction&&Is.currentPopupAction.cancel(),Is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const e=vu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ut(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,NI.get())};e()}}Is.currentPopupAction=null;/**
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
 */const DI="pendingRedirect",Ki=new Map;class OI extends Kp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ki.get(this.auth._key());if(!e){try{const s=await xI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ki.set(this.auth._key(),e)}return this.bypassAuthState||Ki.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xI(t,e){const n=LI(e),s=MI(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function PI(t,e){Ki.set(t._key(),e)}function MI(t){return Gt(t._redirectPersistence)}function LI(t){return qi(DI,t.config.apiKey,t.name)}async function UI(t,e,n=!1){const s=Ho(t),r=CI(s,e),o=await new OI(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const FI=10*60*1e3;class VI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$I(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!zp(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ut(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nh(e))}saveEventToCache(e){this.cachedEventUids.add(Nh(e)),this.lastProcessedEventTime=Date.now()}}function Nh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $I(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zp(t);default:return!1}}/**
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
 */async function BI(t,e={}){return oi(t,"GET","/v1/projects",e)}/**
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
 */const jI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HI=/^https?/;async function qI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await BI(t);for(const n of e)try{if(KI(n))return}catch{}Nt(t,"unauthorized-domain")}function KI(t){const e=pc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!HI.test(n))return!1;if(jI.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const zI=new ri(3e4,6e4);function Dh(){const t=Ft().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WI(t){return new Promise((e,n)=>{var s,r,i;function o(){Dh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dh(),n(Ut(t,"network-request-failed"))},timeout:zI.get()})}if(!((r=(s=Ft().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ft().gapi)===null||i===void 0)&&i.load)o();else{const a=SI("iframefcb");return Ft()[a]=()=>{gapi.load?o():n(Ut(t,"network-request-failed"))},bI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw zi=null,e})}let zi=null;function GI(t){return zi=zi||WI(t),zi}/**
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
 */const QI=new ri(5e3,15e3),XI="__/auth/iframe",YI="emulator/auth/iframe",JI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eT(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?du(e,YI):`https://${t.config.authDomain}/${XI}`,s={apiKey:e.apiKey,appName:t.name,v:si},r=ZI.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ni(s).slice(1)}`}async function tT(t){const e=await GI(t),n=Ft().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:eT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JI,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ut(t,"network-request-failed"),a=Ft().setTimeout(()=>{i(o)},QI.get());function c(){Ft().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const nT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sT=500,rT=600,iT="_blank",oT="http://localhost";class Oh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aT(t,e,n,s=sT,r=rT){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},nT),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Be().toLowerCase();n&&(a=Ap(u)?iT:n),Cp(u)&&(e=e||oT,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(j0(u)&&a!=="_self")return cT(e||"",a),new Oh(null);const h=window.open(e||"",a,l);H(h,t,"popup-blocked");try{h.focus()}catch{}return new Oh(h)}function cT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const uT="__/auth/handler",lT="emulator/auth/handler";function xh(t,e,n,s,r,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:si,eventId:r};if(e instanceof Pp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof ci){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${hT(t)}?${ni(a).slice(1)}`}function hT({config:t}){return t.emulator?du(t,lT):`https://${t.authDomain}/${uT}`}/**
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
 */const ka="webStorageSupport";class fT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$p,this._completeRedirectFn=UI,this._overrideRedirectResult=PI}async _openPopup(e,n,s,r){var i;en((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=xh(e,n,s,pc(),r);return aT(e,o,vu())}async _openRedirect(e,n,s,r){return await this._originValidation(e),dI(xh(e,n,s,pc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(en(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await tT(e),s=new VI(e);return n.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ka,{type:ka},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[ka];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Op()||gu()||jo()}}const dT=fT;var Ph="@firebase/auth",Mh="0.20.5";/**
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
 */class pT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mT(t){Vs(new Gn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{H(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xp(t)},l=new z0(a,c,u);return S0(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Vs(new Gn("auth-internal",e=>{const n=Ho(e.getProvider("auth").getImmediate());return(s=>new pT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(Ph,Mh,gT(t)),In(Ph,Mh,"esm2017")}/**
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
 */function Ze(t=mp()){const e=lu(t,"auth");return e.isInitialized()?e.getImmediate():b0(t,{popupRedirectResolver:dT,persistence:[II,lI,$p]})}mT("Browser");var yT=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},O,wu=wu||{},q=yT||self;function uo(){}function mc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function li(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function vT(t){return Object.prototype.hasOwnProperty.call(t,Na)&&t[Na]||(t[Na]=++_T)}var Na="closure_uid_"+(1e9*Math.random()>>>0),_T=0;function wT(t,e,n){return t.call.apply(t.bind,arguments)}function ET(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function We(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?We=wT:We=ET,We.apply(null,arguments)}function Oi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Xe(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Dn(){this.s=this.s,this.o=this.o}var IT=0;Dn.prototype.s=!1;Dn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),IT!=0)&&vT(this)};Dn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Wp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Gp=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function TT(t){e:{var e=pb;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Lh(t){return Array.prototype.concat.apply([],arguments)}function Eu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function lo(t){return/^[\s\xa0]*$/.test(t)}var Uh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function st(t,e){return t.indexOf(e)!=-1}function Da(t,e){return t<e?-1:t>e?1:0}var rt;e:{var Fh=q.navigator;if(Fh){var Vh=Fh.userAgent;if(Vh){rt=Vh;break e}}rt=""}function Iu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Qp(t){const e={};for(const n in t)e[n]=t[n];return e}var $h="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<$h.length;i++)n=$h[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Tu(t){return Tu[" "](t),t}Tu[" "]=uo;function bT(t){var e=AT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ST=st(rt,"Opera"),$s=st(rt,"Trident")||st(rt,"MSIE"),Yp=st(rt,"Edge"),yc=Yp||$s,Jp=st(rt,"Gecko")&&!(st(rt.toLowerCase(),"webkit")&&!st(rt,"Edge"))&&!(st(rt,"Trident")||st(rt,"MSIE"))&&!st(rt,"Edge"),CT=st(rt.toLowerCase(),"webkit")&&!st(rt,"Edge");function Zp(){var t=q.document;return t?t.documentMode:void 0}var ho;e:{var Oa="",xa=function(){var t=rt;if(Jp)return/rv:([^\);]+)(\)|;)/.exec(t);if(Yp)return/Edge\/([\d\.]+)/.exec(t);if($s)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(CT)return/WebKit\/(\S+)/.exec(t);if(ST)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(xa&&(Oa=xa?xa[1]:""),$s){var Pa=Zp();if(Pa!=null&&Pa>parseFloat(Oa)){ho=String(Pa);break e}}ho=Oa}var AT={};function RT(){return bT(function(){let t=0;const e=Uh(String(ho)).split("."),n=Uh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Da(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Da(r[2].length==0,i[2].length==0)||Da(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var vc;if(q.document&&$s){var Bh=Zp();vc=Bh||parseInt(ho,10)||void 0}else vc=void 0;var kT=vc,NT=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{q.addEventListener("test",uo,e),q.removeEventListener("test",uo,e)}catch{}return t}();function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};function jr(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Jp){e:{try{Tu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:DT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&jr.Z.h.call(this)}}Xe(jr,et);var DT={2:"touch",3:"pen",4:"mouse"};jr.prototype.h=function(){jr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var hi="closure_listenable_"+(1e6*Math.random()|0),OT=0;function xT(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++OT,this.ca=this.fa=!1}function zo(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Wo(t){this.src=t,this.g={},this.h=0}Wo.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=wc(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new xT(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function _c(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Wp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(zo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function wc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var bu="closure_lm_"+(1e6*Math.random()|0),Ma={};function eg(t,e,n,s,r){if(s&&s.once)return ng(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)eg(t,e[i],n,s,r);return null}return n=Au(n),t&&t[hi]?t.N(e,n,li(s)?!!s.capture:!!s,r):tg(t,e,n,!1,s,r)}function tg(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=li(r)?!!r.capture:!!r,a=Cu(t);if(a||(t[bu]=a=new Wo(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=PT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)NT||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(rg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function PT(){function t(n){return e.call(t.src,t.listener,n)}var e=MT;return t}function ng(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ng(t,e[i],n,s,r);return null}return n=Au(n),t&&t[hi]?t.O(e,n,li(s)?!!s.capture:!!s,r):tg(t,e,n,!0,s,r)}function sg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)sg(t,e[i],n,s,r);else s=li(s)?!!s.capture:!!s,n=Au(n),t&&t[hi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=wc(i,n,s,r),-1<n&&(zo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Cu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=wc(e,n,s,r)),(n=-1<t?e[t]:null)&&Su(n))}function Su(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[hi])_c(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(rg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Cu(e))?(_c(n,t),n.h==0&&(n.src=null,e[bu]=null)):zo(t)}}}function rg(t){return t in Ma?Ma[t]:Ma[t]="on"+t}function MT(t,e){if(t.ca)t=!0;else{e=new jr(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Su(t),t=n.call(s,e)}return t}function Cu(t){return t=t[bu],t instanceof Wo?t:null}var La="__closure_events_fn_"+(1e9*Math.random()>>>0);function Au(t){return typeof t=="function"?t:(t[La]||(t[La]=function(e){return t.handleEvent(e)}),t[La])}function je(){Dn.call(this),this.i=new Wo(this),this.P=this,this.I=null}Xe(je,Dn);je.prototype[hi]=!0;je.prototype.removeEventListener=function(t,e,n,s){sg(this,t,e,n,s)};function Ge(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var r=e;e=new et(s,t),Xp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=xi(o,s,!0,e)&&r}if(o=e.g=t,r=xi(o,s,!0,e)&&r,r=xi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=xi(o,s,!1,e)&&r}je.prototype.M=function(){if(je.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)zo(n[s]);delete t.g[e],t.h--}}this.I=null};je.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};je.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function xi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&_c(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Ru=q.JSON.stringify;function LT(){var t=og;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class UT{constructor(){this.h=this.g=null}add(e,n){const s=ig.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ig=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new FT,t=>t.reset());class FT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function VT(t){q.setTimeout(()=>{throw t},0)}function ku(t,e){Ec||$T(),Ic||(Ec(),Ic=!0),og.add(t,e)}var Ec;function $T(){var t=q.Promise.resolve(void 0);Ec=function(){t.then(BT)}}var Ic=!1,og=new UT;function BT(){for(var t;t=LT();){try{t.h.call(t.g)}catch(n){VT(n)}var e=ig;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ic=!1}function Go(t,e){je.call(this),this.h=t||1,this.g=e||q,this.j=We(this.kb,this),this.l=Date.now()}Xe(Go,je);O=Go.prototype;O.da=!1;O.S=null;O.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ge(this,"tick"),this.da&&(Nu(this),this.start()))}};O.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Nu(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}O.M=function(){Go.Z.M.call(this),Nu(this),delete this.g};function Du(t,e,n){if(typeof t=="function")n&&(t=We(t,n));else if(t&&typeof t.handleEvent=="function")t=We(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function ag(t){t.g=Du(()=>{t.g=null,t.i&&(t.i=!1,ag(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class jT extends Dn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ag(this)}M(){super.M(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hr(t){Dn.call(this),this.h=t,this.g={}}Xe(Hr,Dn);var jh=[];function cg(t,e,n,s){Array.isArray(n)||(n&&(jh[0]=n.toString()),n=jh);for(var r=0;r<n.length;r++){var i=eg(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function ug(t){Iu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Su(e)},t),t.g={}}Hr.prototype.M=function(){Hr.Z.M.call(this),ug(this)};Hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Qo(){this.g=!0}Qo.prototype.Aa=function(){this.g=!1};function HT(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function qT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Ts(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+zT(t,n)+(s?" "+s:"")})}function KT(t,e){t.info(function(){return"TIMEOUT: "+e})}Qo.prototype.info=function(){};function zT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Ru(n)}catch{return e}}var is={},Hh=null;function Xo(){return Hh=Hh||new je}is.Ma="serverreachability";function lg(t){et.call(this,is.Ma,t)}Xe(lg,et);function qr(t){const e=Xo();Ge(e,new lg(e))}is.STAT_EVENT="statevent";function hg(t,e){et.call(this,is.STAT_EVENT,t),this.stat=e}Xe(hg,et);function it(t){const e=Xo();Ge(e,new hg(e,t))}is.Na="timingevent";function fg(t,e){et.call(this,is.Na,t),this.size=e}Xe(fg,et);function fi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var Yo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},dg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ou(){}Ou.prototype.h=null;function qh(t){return t.h||(t.h=t.i())}function pg(){}var di={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function xu(){et.call(this,"d")}Xe(xu,et);function Pu(){et.call(this,"c")}Xe(Pu,et);var Tc;function Jo(){}Xe(Jo,Ou);Jo.prototype.g=function(){return new XMLHttpRequest};Jo.prototype.i=function(){return{}};Tc=new Jo;function pi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Hr(this),this.P=WT,t=yc?125:void 0,this.W=new Go(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new gg}function gg(){this.i=null,this.g="",this.h=!1}var WT=45e3,bc={},fo={};O=pi.prototype;O.setTimeout=function(t){this.P=t};function Sc(t,e,n){t.K=1,t.v=ea(tn(e)),t.s=n,t.U=!0,mg(t,null)}function mg(t,e){t.F=Date.now(),gi(t),t.A=tn(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Tg(n.h,"t",s),t.C=0,n=t.l.H,t.h=new gg,t.g=Hg(t.l,n?e:null,!t.s),0<t.O&&(t.L=new jT(We(t.Ia,t,t.g),t.O)),cg(t.V,t.g,"readystatechange",t.gb),e=t.H?Qp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),qr(),HT(t.j,t.u,t.A,t.m,t.X,t.s)}O.gb=function(t){t=t.target;const e=this.L;e&&Qt(t)==3?e.l():this.Ia(t)};O.Ia=function(t){try{if(t==this.g)e:{const l=Qt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||yc||this.g&&(this.h.h||this.g.ga()||Gh(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?qr(3):qr(2)),Zo(this);var n=this.g.ba();this.N=n;t:if(yg(this)){var s=Gh(this.g);t="";var r=s.length,i=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){$n(this),Sr(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,qT(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!lo(a)){var u=a;break t}}u=null}if(n=u)Ts(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Cc(this,n);else{this.i=!1,this.o=3,it(12),$n(this),Sr(this);break e}}this.U?(vg(this,l,o),yc&&this.i&&l==3&&(cg(this.V,this.W,"tick",this.fb),this.W.start())):(Ts(this.j,this.m,o,null),Cc(this,o)),l==4&&$n(this),this.i&&!this.I&&(l==4?Vg(this.l,this):(this.i=!1,gi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),$n(this),Sr(this)}}}catch{}finally{}};function yg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function vg(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=GT(t,n),r==fo){e==4&&(t.o=4,it(14),s=!1),Ts(t.j,t.m,null,"[Incomplete Response]");break}else if(r==bc){t.o=4,it(15),Ts(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ts(t.j,t.m,r,null),Cc(t,r);yg(t)&&r!=fo&&r!=bc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,it(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Hu(e),e.L=!0,it(11))):(Ts(t.j,t.m,n,"[Invalid Chunked Response]"),$n(t),Sr(t))}O.fb=function(){if(this.g){var t=Qt(this.g),e=this.g.ga();this.C<e.length&&(Zo(this),vg(this,t,e),this.i&&t!=4&&gi(this))}};function GT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?fo:(n=Number(e.substring(n,s)),isNaN(n)?bc:(s+=1,s+n>e.length?fo:(e=e.substr(s,n),t.C=s+n,e)))}O.cancel=function(){this.I=!0,$n(this)};function gi(t){t.Y=Date.now()+t.P,_g(t,t.P)}function _g(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=fi(We(t.eb,t),e)}function Zo(t){t.B&&(q.clearTimeout(t.B),t.B=null)}O.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(KT(this.j,this.A),this.K!=2&&(qr(),it(17)),$n(this),this.o=2,Sr(this)):_g(this,this.Y-t)};function Sr(t){t.l.G==0||t.I||Vg(t.l,t)}function $n(t){Zo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Nu(t.W),ug(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Cc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ac(n.i,t))){if(n.I=t.N,!t.J&&Ac(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)yo(n),sa(n);else break e;ju(n),it(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=fi(We(n.ab,n),6e3));if(1>=Cg(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Bn(n,11)}else if((t.J||n.g==t)&&yo(n),!lo(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.i;!i.g&&(st(y,"spdy")||st(y,"quic")||st(y,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Uu(i,i.h),i.h=null))}if(s.D){const S=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(s.sa=S,be(s.F,s.D,S))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=jg(s,s.H?s.la:null,s.W),o.J){Ag(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Zo(a),gi(a)),s.g=o}else Ug(s);0<n.l.length&&ra(n)}else u[0]!="stop"&&u[0]!="close"||Bn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Bn(n,7):Bu(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}qr(4)}catch{}}function QT(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(mc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Mu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(mc(t)||typeof t=="string")Gp(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(mc(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=QT(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function tr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof tr)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}O=tr.prototype;O.R=function(){Lu(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};O.T=function(){return Lu(this),this.g.concat()};function Lu(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Jn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],Jn(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}O.get=function(t,e){return Jn(this.h,t)?this.h[t]:e};O.set=function(t,e){Jn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};O.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function Jn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var wg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function XT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Zn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Zn){this.g=e!==void 0?e:t.g,po(this,t.j),this.s=t.s,go(this,t.i),mo(this,t.m),this.l=t.l,e=t.h;var n=new Kr;n.i=e.i,e.g&&(n.g=new tr(e.g),n.h=e.h),Kh(this,n),this.o=t.o}else t&&(n=String(t).match(wg))?(this.g=!!e,po(this,n[1]||"",!0),this.s=Cr(n[2]||""),go(this,n[3]||"",!0),mo(this,n[4]),this.l=Cr(n[5]||"",!0),Kh(this,n[6]||"",!0),this.o=Cr(n[7]||"")):(this.g=!!e,this.h=new Kr(null,this.g))}Zn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(yr(e,zh,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(yr(e,zh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(yr(n,n.charAt(0)=="/"?tb:eb,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",yr(n,sb)),t.join("")};function tn(t){return new Zn(t)}function po(t,e,n){t.j=n?Cr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function go(t,e,n){t.i=n?Cr(e,!0):e}function mo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Kh(t,e,n){e instanceof Kr?(t.h=e,rb(t.h,t.g)):(n||(e=yr(e,nb)),t.h=new Kr(e,t.g))}function be(t,e,n){t.h.set(e,n)}function ea(t){return be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function YT(t){return t instanceof Zn?tn(t):new Zn(t,void 0)}function JT(t,e,n,s){var r=new Zn(null,void 0);return t&&po(r,t),e&&go(r,e),n&&mo(r,n),s&&(r.l=s),r}function Cr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function yr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ZT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ZT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var zh=/[#\/\?@]/g,eb=/[#\?:]/g,tb=/[#\?]/g,nb=/[#\?@]/g,sb=/#/g;function Kr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function On(t){t.g||(t.g=new tr,t.h=0,t.i&&XT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=Kr.prototype;O.add=function(t,e){On(this),this.i=null,t=nr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Eg(t,e){On(t),e=nr(t,e),Jn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Jn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Lu(t)))}function Ig(t,e){return On(t),e=nr(t,e),Jn(t.g.h,e)}O.forEach=function(t,e){On(this),this.g.forEach(function(n,s){Gp(n,function(r){t.call(e,r,s,this)},this)},this)};O.T=function(){On(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};O.R=function(t){On(this);var e=[];if(typeof t=="string")Ig(this,t)&&(e=Lh(e,this.g.get(nr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Lh(e,t[n])}return e};O.set=function(t,e){return On(this),this.i=null,t=nr(this,t),Ig(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Tg(t,e,n){Eg(t,e),0<n.length&&(t.i=null,t.g.set(nr(t,e),Eu(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function nr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function rb(t,e){e&&!t.j&&(On(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Eg(this,s),Tg(this,r,n))},t)),t.j=e}var ib=class{constructor(t,e){this.h=t,this.g=e}};function bg(t){this.l=t||ob,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ea&&q.g.Ea()&&q.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ob=10;function Sg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Cg(t){return t.h?1:t.g?t.g.size:0}function Ac(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Uu(t,e){t.g?t.g.add(e):t.h=e}function Ag(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}bg.prototype.cancel=function(){if(this.i=Rg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Rg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Eu(t.i)}function Fu(){}Fu.prototype.stringify=function(t){return q.JSON.stringify(t,void 0)};Fu.prototype.parse=function(t){return q.JSON.parse(t,void 0)};function ab(){this.g=new Fu}function cb(t,e,n){const s=n||"";try{Mu(t,function(r,i){let o=r;li(r)&&(o=Ru(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function ub(t,e){const n=new Qo;if(q.Image){const s=new Image;s.onload=Oi(Pi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Oi(Pi,n,s,"TestLoadImage: error",!1,e),s.onabort=Oi(Pi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Oi(Pi,n,s,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Pi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function mi(t){this.l=t.$b||null,this.j=t.ib||!1}Xe(mi,Ou);mi.prototype.g=function(){return new ta(this.l,this.j)};mi.prototype.i=function(t){return function(){return t}}({});function ta(t,e){je.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Vu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xe(ta,je);var Vu=0;O=ta.prototype;O.open=function(t,e){if(this.readyState!=Vu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,zr(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||q).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yi(this)),this.readyState=Vu};O.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,zr(this)),this.g&&(this.readyState=3,zr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof q.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kg(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function kg(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}O.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?yi(this):zr(this),this.readyState==3&&kg(this)}};O.Ua=function(t){this.g&&(this.response=this.responseText=t,yi(this))};O.Ta=function(t){this.g&&(this.response=t,yi(this))};O.ha=function(){this.g&&yi(this)};function yi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,zr(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function zr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var lb=q.JSON.parse;function Ne(t){je.call(this),this.headers=new tr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ng,this.K=this.L=!1}Xe(Ne,je);var Ng="",hb=/^https?$/i,fb=["POST","PUT"];O=Ne.prototype;O.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Tc.g(),this.C=this.u?qh(this.u):qh(Tc),this.g.onreadystatechange=We(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Wh(this,i);return}t=n||"";const r=new tr(this.headers);s&&Mu(s,function(i,o){r.set(o,i)}),s=TT(r.T()),n=q.FormData&&t instanceof q.FormData,!(0<=Wp(fb,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{xg(this),0<this.B&&((this.K=db(this.g))?(this.g.timeout=this.B,this.g.ontimeout=We(this.pa,this)):this.A=Du(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Wh(this,i)}};function db(t){return $s&&RT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function pb(t){return t.toLowerCase()=="content-type"}O.pa=function(){typeof wu!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))};function Wh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Dg(t),na(t)}function Dg(t){t.D||(t.D=!0,Ge(t,"complete"),Ge(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ge(this,"complete"),Ge(this,"abort"),na(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),na(this,!0)),Ne.Z.M.call(this)};O.Fa=function(){this.s||(this.F||this.v||this.l?Og(this):this.cb())};O.cb=function(){Og(this)};function Og(t){if(t.h&&typeof wu!="undefined"&&(!t.C[1]||Qt(t)!=4||t.ba()!=2)){if(t.v&&Qt(t)==4)Du(t.Fa,0,t);else if(Ge(t,"readystatechange"),Qt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(wg)[1]||null;if(!r&&q.self&&q.self.location){var i=q.self.location.protocol;r=i.substr(0,i.length-1)}s=!hb.test(r?r.toLowerCase():"")}n=s}if(n)Ge(t,"complete"),Ge(t,"success");else{t.m=6;try{var o=2<Qt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Dg(t)}}finally{na(t)}}}}function na(t,e){if(t.g){xg(t);const n=t.g,s=t.C[0]?uo:null;t.g=null,t.C=null,e||Ge(t,"ready");try{n.onreadystatechange=s}catch{}}}function xg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}function Qt(t){return t.g?t.g.readyState:0}O.ba=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}};O.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),lb(e)}};function Gh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ng:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Da=function(){return this.m};O.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function gb(t){let e="";return Iu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function $u(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=gb(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):be(t,e,n))}function fr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Pg(t){this.za=0,this.l=[],this.h=new Qo,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=fr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=fr("baseRetryDelayMs",5e3,t),this.$a=fr("retryDelaySeedMs",1e4,t),this.Ya=fr("forwardChannelMaxRetries",2,t),this.ra=fr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new bg(t&&t.concurrentRequestLimit),this.Ca=new ab,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}O=Pg.prototype;O.ma=8;O.G=1;function Bu(t){if(Mg(t),t.G==3){var e=t.V++,n=tn(t.F);be(n,"SID",t.J),be(n,"RID",e),be(n,"TYPE","terminate"),vi(t,n),e=new pi(t,t.h,e,void 0),e.K=2,e.v=ea(tn(n)),n=!1,q.navigator&&q.navigator.sendBeacon&&(n=q.navigator.sendBeacon(e.v.toString(),"")),!n&&q.Image&&(new Image().src=e.v,n=!0),n||(e.g=Hg(e.l,null),e.g.ea(e.v)),e.F=Date.now(),gi(e)}Bg(t)}O.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function sa(t){t.g&&(Hu(t),t.g.cancel(),t.g=null)}function Mg(t){sa(t),t.u&&(q.clearTimeout(t.u),t.u=null),yo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function Ua(t,e){t.l.push(new ib(t.Za++,e)),t.G==3&&ra(t)}function ra(t){Sg(t.i)||t.m||(t.m=!0,ku(t.Ha,t),t.C=0)}function mb(t,e){return Cg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=fi(We(t.Ha,t,e),$g(t,t.C)),t.C++,!0)}O.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new pi(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Qp(i),Xp(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Lg(this,r,e),n=tn(this.F),be(n,"RID",t),be(n,"CVER",22),this.D&&be(n,"X-HTTP-Session-Id",this.D),vi(this,n),this.o&&i&&$u(n,this.o,i),Uu(this.i,r),this.Ra&&be(n,"TYPE","init"),this.ja?(be(n,"$req",e),be(n,"SID","null"),r.$=!0,Sc(r,n,null)):Sc(r,n,e),this.G=2}}else this.G==3&&(t?Qh(this,t):this.l.length==0||Sg(this.i)||Qh(this))};function Qh(t,e){var n;e?n=e.m:n=t.V++;const s=tn(t.F);be(s,"SID",t.J),be(s,"RID",n),be(s,"AID",t.U),vi(t,s),t.o&&t.s&&$u(s,t.o,t.s),n=new pi(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Lg(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Uu(t.i,n),Sc(n,s,e)}function vi(t,e){t.j&&Mu({},function(n,s){be(e,s,n)})}function Lg(t,e,n){n=Math.min(t.l.length,n);var s=t.j?We(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{cb(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function Ug(t){t.g||t.u||(t.Y=1,ku(t.Ga,t),t.A=0)}function ju(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=fi(We(t.Ga,t),$g(t,t.A)),t.A++,!0)}O.Ga=function(){if(this.u=null,Fg(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=fi(We(this.bb,this),t)}};O.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,it(10),sa(this),Fg(this))};function Hu(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function Fg(t){t.g=new pi(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=tn(t.oa);be(e,"RID","rpc"),be(e,"SID",t.J),be(e,"CI",t.N?"0":"1"),be(e,"AID",t.U),vi(t,e),be(e,"TYPE","xmlhttp"),t.o&&t.s&&$u(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ea(tn(e)),n.s=null,n.U=!0,mg(n,t)}O.ab=function(){this.v!=null&&(this.v=null,sa(this),ju(this),it(19))};function yo(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function Vg(t,e){var n=null;if(t.g==e){yo(t),Hu(t),t.g=null;var s=2}else if(Ac(t.i,e))n=e.D,Ag(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Xo(),Ge(s,new fg(s,n)),ra(t)}else Ug(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&mb(t,e)||s==2&&ju(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Bn(t,5);break;case 4:Bn(t,10);break;case 3:Bn(t,6);break;default:Bn(t,2)}}}function $g(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Bn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=We(t.jb,t);n||(n=new Zn("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||po(n,"https"),ea(n)),ub(n.toString(),s)}else it(2);t.G=0,t.j&&t.j.va(e),Bg(t),Mg(t)}O.jb=function(t){t?(this.h.info("Successfully pinged google.com"),it(2)):(this.h.info("Failed to ping google.com"),it(1))};function Bg(t){t.G=0,t.I=-1,t.j&&((Rg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Eu(t.l),t.l.length=0),t.j.ua())}function jg(t,e,n){let s=YT(n);if(s.i!="")e&&go(s,e+"."+s.i),mo(s,s.m);else{const r=q.location;s=JT(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&Iu(t.aa,function(r,i){be(s,i,r)}),e=t.D,n=t.sa,e&&n&&be(s,e,n),be(s,"VER",t.ma),vi(t,s),s}function Hg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ne(new mi({ib:!0})):new Ne(t.qa),e.L=t.H,e}function qg(){}O=qg.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Oa=function(){};function vo(){if($s&&!(10<=Number(kT)))throw Error("Environmental error: no available transport.")}vo.prototype.g=function(t,e){return new mt(t,e)};function mt(t,e){je.call(this),this.g=new Pg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!lo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!lo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new sr(this)}Xe(mt,je);mt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),ku(We(t.hb,t,e))),it(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=jg(t,null,t.W),ra(t)};mt.prototype.close=function(){Bu(this.g)};mt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Ua(this.g,e)}else this.v?(e={},e.__data__=Ru(t),Ua(this.g,e)):Ua(this.g,t)};mt.prototype.M=function(){this.g.j=null,delete this.j,Bu(this.g),delete this.g,mt.Z.M.call(this)};function Kg(t){xu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Xe(Kg,xu);function zg(){Pu.call(this),this.status=1}Xe(zg,Pu);function sr(t){this.g=t}Xe(sr,qg);sr.prototype.xa=function(){Ge(this.g,"a")};sr.prototype.wa=function(t){Ge(this.g,new Kg(t))};sr.prototype.va=function(t){Ge(this.g,new zg)};sr.prototype.ua=function(){Ge(this.g,"b")};vo.prototype.createWebChannel=vo.prototype.g;mt.prototype.send=mt.prototype.u;mt.prototype.open=mt.prototype.m;mt.prototype.close=mt.prototype.close;Yo.NO_ERROR=0;Yo.TIMEOUT=8;Yo.HTTP_ERROR=6;dg.COMPLETE="complete";pg.EventType=di;di.OPEN="a";di.CLOSE="b";di.ERROR="c";di.MESSAGE="d";je.prototype.listen=je.prototype.N;Ne.prototype.listenOnce=Ne.prototype.O;Ne.prototype.getLastError=Ne.prototype.La;Ne.prototype.getLastErrorCode=Ne.prototype.Da;Ne.prototype.getStatus=Ne.prototype.ba;Ne.prototype.getResponseJson=Ne.prototype.Qa;Ne.prototype.getResponseText=Ne.prototype.ga;Ne.prototype.send=Ne.prototype.ea;var yb=function(){return new vo},vb=function(){return Xo()},Fa=Yo,_b=dg,wb=is,Xh={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Eb=mi,Mi=pg,Ib=Ne;const Yh="@firebase/firestore";/**
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
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
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
 */let rr="9.9.0";/**
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
 */const es=new au("@firebase/firestore");function Jh(){return es.logLevel}function U(t,...e){if(es.logLevel<=oe.DEBUG){const n=e.map(qu);es.debug(`Firestore (${rr}): ${t}`,...n)}}function An(t,...e){if(es.logLevel<=oe.ERROR){const n=e.map(qu);es.error(`Firestore (${rr}): ${t}`,...n)}}function Zh(t,...e){if(es.logLevel<=oe.WARN){const n=e.map(qu);es.warn(`Firestore (${rr}): ${t}`,...n)}}function qu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${rr}) INTERNAL ASSERTION FAILED: `+t;throw An(e),new Error(e)}function Ee(t,e){t||G()}function Q(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends rs{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Tb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class Sb{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ee(typeof s.accessToken=="string"),new Tb(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new ct(e)}}class Cb{constructor(e,n,s){this.type="FirstParty",this.user=ct.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Ab{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new Cb(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kb{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string"),this.p=n.token,new Rb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Nb(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Wg{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Nb(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ce(t,e){return t<e?-1:t>e?1:0}function Bs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new xe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Wr{constructor(e,n,s){n===void 0?n=0:n>e.length&&G(),s===void 0?s=e.length-n:s>e.length-n&&G(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Wr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends Wr{construct(e,n,s){return new Ae(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new j(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const Db=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends Wr{construct(e,n,s){return new Ye(e,n,s)}static isValidIdentifier(e){return Db.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new j(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new j(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new j(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(Ae.fromString(e))}static fromName(e){return new $(Ae.fromString(e).popFirst(5))}static empty(){return new $(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new Ae(e.slice()))}}function Ob(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Z.fromTimestamp(s===1e9?new xe(n+1,0):new xe(n,s));return new Rn(r,$.empty(),e)}function xb(t){return new Rn(t.readTime,t.key,-1)}class Rn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Rn(Z.min(),$.empty(),-1)}static max(){return new Rn(Z.max(),$.empty(),-1)}}function Pb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const Mb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function _i(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==Mb)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(r=>r?T.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new T((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new T((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function wi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ku{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
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
 */function ef(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ir(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Ku.ot=-1;class Le{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Li(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Li(this.root,e,this.comparator,!1)}getReverseIterator(){return new Li(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Li(this.root,e,this.comparator,!0)}}class Li{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Ke.RED,this.left=r!=null?r:Ke.EMPTY,this.right=i!=null?i:Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ke(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ke.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pe{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new tf(this.data.getIterator())}getIteratorFrom(e){return new tf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pe(this.comparator);return n.data=e,n}}class tf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new Pe(Ye.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Qe(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const Ub=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kn(t){if(Ee(!!t),typeof t=="string"){let e=0;const n=Ub.exec(t);if(Ee(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function js(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
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
 */function Qg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xg(t){const e=t.mapValue.fields.__previous_value__;return Qg(e)?Xg(e):e}function Gr(t){const e=kn(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
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
 */class Fb{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Hs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Hs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Hs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function ia(t){return t==null}function _o(t){return t===0&&1/t==-1/0}function Vb(t){return typeof t=="number"&&Number.isInteger(t)&&!_o(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ui={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qg(t)?4:$b(t)?9007199254740991:10:G()}function Ht(t,e){if(t===e)return!0;const n=ts(t);if(n!==ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gr(t).isEqual(Gr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=kn(s.timestampValue),o=kn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return js(s.bytesValue).isEqual(js(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return ke(s.geoPointValue.latitude)===ke(r.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return ke(s.integerValue)===ke(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=ke(s.doubleValue),o=ke(r.doubleValue);return i===o?_o(i)===_o(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Bs(t.arrayValue.values||[],e.arrayValue.values||[],Ht);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(ef(i)!==ef(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ht(i[a],o[a])))return!1;return!0}(t,e);default:return G()}}function Qr(t,e){return(t.values||[]).find(n=>Ht(n,e))!==void 0}function qs(t,e){if(t===e)return 0;const n=ts(t),s=ts(e);if(n!==s)return ce(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=ke(r.integerValue||r.doubleValue),a=ke(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return nf(t.timestampValue,e.timestampValue);case 4:return nf(Gr(t),Gr(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(r,i){const o=js(r),a=js(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ce(o[c],a[c]);if(u!==0)return u}return ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ce(ke(r.latitude),ke(i.latitude));return o!==0?o:ce(ke(r.longitude),ke(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=qs(o[c],a[c]);if(u)return u}return ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ui.mapValue&&i===Ui.mapValue)return 0;if(r===Ui.mapValue)return 1;if(i===Ui.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ce(a[l],u[l]);if(h!==0)return h;const f=qs(o[a[l]],c[u[l]]);if(f!==0)return f}return ce(a.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function nf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=kn(t),s=kn(e),r=ce(n.seconds,s.seconds);return r!==0?r:ce(n.nanos,s.nanos)}function Os(t){return Rc(t)}function Rc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=kn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?js(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Rc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Rc(s.fields[a])}`;return i+"}"}(t.mapValue):G();var e,n}function kc(t){return!!t&&"integerValue"in t}function zu(t){return!!t&&"arrayValue"in t}function sf(t){return!!t&&"nullValue"in t}function rf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wi(t){return!!t&&"mapValue"in t}function Ar(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ir(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ar(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ar(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $b(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Wi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ar(n)}setAll(e){let n=Ye.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Ar(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Wi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ht(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Wi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ir(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new wt(Ar(this.value))}}function Yg(t){const e=[];return ir(t.fields,(n,s)=>{const r=new Ye([n]);if(Wi(s)){const i=Yg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Vt(e)}/**
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
 */class ze{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new ze(e,0,Z.min(),Z.min(),wt.empty(),0)}static newFoundDocument(e,n,s){return new ze(e,1,n,Z.min(),s,0)}static newNoDocument(e,n){return new ze(e,2,n,Z.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,Z.min(),wt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bb{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function of(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Bb(t,e,n,s,r,i,o)}function Wu(t){const e=Q(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Os(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ia(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Os(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Os(s)).join(",")),e.ut=n}return e.ut}function jb(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Os(s.value)}`;var s}).join(", ")}]`),ia(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Os(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Os(n)).join(",")),`Target(${e})`}function Gu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!Xb(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Ht(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cf(t.startAt,e.startAt)&&cf(t.endAt,e.endAt)}function Nc(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ut extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,s):new Hb(e,n,s):n==="array-contains"?new zb(e,s):n==="in"?new Wb(e,s):n==="not-in"?new Gb(e,s):n==="array-contains-any"?new Qb(e,s):new ut(e,n,s)}static ct(e,n,s){return n==="in"?new qb(e,s):new Kb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(qs(n,this.value)):n!==null&&ts(this.value)===ts(n)&&this.at(qs(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Hb extends ut{constructor(e,n,s){super(e,n,s),this.key=$.fromName(s.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.at(n)}}class qb extends ut{constructor(e,n){super(e,"in",n),this.keys=Jg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Kb extends ut{constructor(e,n){super(e,"not-in",n),this.keys=Jg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Jg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>$.fromName(s.referenceValue))}class zb extends ut{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zu(n)&&Qr(n.arrayValue,this.value)}}class Wb extends ut{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qr(this.value.arrayValue,n)}}class Gb extends ut{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Qr(this.value.arrayValue,n)}}class Qb extends ut{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Qr(this.value.arrayValue,s))}}class wo{constructor(e,n){this.position=e,this.inclusive=n}}class Rr{constructor(e,n="asc"){this.field=e,this.dir=n}}function Xb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function af(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=$.comparator($.fromName(o.referenceValue),n.key):s=qs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function cf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ht(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class oa{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Yb(t,e,n,s,r,i,o,a){return new oa(t,e,n,s,r,i,o,a)}function Qu(t){return new oa(t)}function Jb(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Zb(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function eS(t){for(const e of t.filters)if(e.ht())return e.field;return null}function tS(t){return t.collectionGroup!==null}function Xr(t){const e=Q(t);if(e.lt===null){e.lt=[];const n=eS(e),s=Zb(e);if(n!==null&&s===null)n.isKeyField()||e.lt.push(new Rr(n)),e.lt.push(new Rr(Ye.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.lt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Rr(Ye.keyField(),i))}}}return e.lt}function ns(t){const e=Q(t);if(!e.ft)if(e.limitType==="F")e.ft=of(e.path,e.collectionGroup,Xr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Xr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Rr(i.field,o))}const s=e.endAt?new wo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new wo(e.startAt.position,e.startAt.inclusive):null;e.ft=of(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.ft}function nS(t,e,n){return new oa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function aa(t,e){return Gu(ns(t),ns(e))&&t.limitType===e.limitType}function Zg(t){return`${Wu(ns(t))}|lt:${t.limitType}`}function Dc(t){return`Query(target=${jb(ns(t))}; limitType=${t.limitType})`}function Xu(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):$.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=af(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Xr(n),s)||n.endAt&&!function(r,i,o){const a=af(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Xr(n),s))}(t,e)}function sS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function em(t){return(e,n)=>{let s=!1;for(const r of Xr(t)){const i=rS(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function rS(t,e,n){const s=t.field.isKeyField()?$.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?qs(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return G()}}/**
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
 */function tm(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_o(e)?"-0":e}}function nm(t){return{integerValue:""+t}}function iS(t,e){return Vb(e)?nm(e):tm(t,e)}/**
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
 */class ca{constructor(){this._=void 0}}function oS(t,e,n){return t instanceof Eo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Yr?rm(t,e):t instanceof Jr?im(t,e):function(s,r){const i=sm(s,r),o=uf(i)+uf(s._t);return kc(i)&&kc(s._t)?nm(o):tm(s.wt,o)}(t,e)}function aS(t,e,n){return t instanceof Yr?rm(t,e):t instanceof Jr?im(t,e):n}function sm(t,e){return t instanceof Io?kc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Eo extends ca{}class Yr extends ca{constructor(e){super(),this.elements=e}}function rm(t,e){const n=om(e);for(const s of t.elements)n.some(r=>Ht(r,s))||n.push(s);return{arrayValue:{values:n}}}class Jr extends ca{constructor(e){super(),this.elements=e}}function im(t,e){let n=om(e);for(const s of t.elements)n=n.filter(r=>!Ht(r,s));return{arrayValue:{values:n}}}class Io extends ca{constructor(e,n){super(),this.wt=e,this._t=n}}function uf(t){return ke(t.integerValue||t.doubleValue)}function om(t){return zu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function cS(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Yr&&s instanceof Yr||n instanceof Jr&&s instanceof Jr?Bs(n.elements,s.elements,Ht):n instanceof Io&&s instanceof Io?Ht(n._t,s._t):n instanceof Eo&&s instanceof Eo}(t.transform,e.transform)}class uS{constructor(e,n){this.version=e,this.transformResults=n}}class Yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ua{}function am(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new um(t.key,Yt.none()):new Ei(t.key,t.data,Yt.none());{const n=t.data,s=wt.empty();let r=new Pe(Ye.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new os(t.key,s,new Vt(r.toArray()),Yt.none())}}function lS(t,e,n){t instanceof Ei?function(s,r,i){const o=s.value.clone(),a=hf(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof os?function(s,r,i){if(!Gi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=hf(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(cm(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function kr(t,e,n,s){return t instanceof Ei?function(r,i,o,a){if(!Gi(r.precondition,i))return o;const c=r.value.clone(),u=ff(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof os?function(r,i,o,a){if(!Gi(r.precondition,i))return o;const c=ff(r.fieldTransforms,a,i),u=i.data;return u.setAll(cm(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return Gi(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function hS(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=sm(s.transform,r||null);i!=null&&(n===null&&(n=wt.empty()),n.set(s.field,i))}return n||null}function lf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Bs(n,s,(r,i)=>cS(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ei extends ua{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class os extends ua{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function hf(t,e,n){const s=new Map;Ee(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,aS(o,a,n[r]))}return s}function ff(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,oS(i,o,e))}return s}class um extends ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fS extends ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class dS{constructor(e){this.count=e}}/**
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
 */var Re,se;function pS(t){switch(t){default:return G();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function lm(t){if(t===void 0)return An("GRPC error has no .code"),b.UNKNOWN;switch(t){case Re.OK:return b.OK;case Re.CANCELLED:return b.CANCELLED;case Re.UNKNOWN:return b.UNKNOWN;case Re.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Re.INTERNAL:return b.INTERNAL;case Re.UNAVAILABLE:return b.UNAVAILABLE;case Re.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Re.NOT_FOUND:return b.NOT_FOUND;case Re.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Re.ABORTED:return b.ABORTED;case Re.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Re.DATA_LOSS:return b.DATA_LOSS;default:return G()}}(se=Re||(Re={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class or{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ir(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Gg(this.inner)}size(){return this.innerSize}}/**
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
 */const gS=new Le($.comparator);function nn(){return gS}const hm=new Le($.comparator);function vr(...t){let e=hm;for(const n of t)e=e.insert(n.key,n);return e}function fm(t){let e=hm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function jn(){return Nr()}function dm(){return Nr()}function Nr(){return new or(t=>t.toString(),(t,e)=>t.isEqual(e))}const mS=new Le($.comparator),yS=new Pe($.comparator);function ne(...t){let e=yS;for(const n of t)e=e.add(n);return e}const vS=new Pe(ce);function pm(){return vS}/**
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
 */class la{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Ii.createSynthesizedTargetChangeForCurrentChange(e,n)),new la(Z.min(),s,pm(),nn(),ne())}}class Ii{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Ii(Qe.EMPTY_BYTE_STRING,n,ne(),ne(),ne())}}/**
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
 */class Qi{constructor(e,n,s,r){this.gt=e,this.removedTargetIds=n,this.key=s,this.yt=r}}class gm{constructor(e,n){this.targetId=e,this.It=n}}class mm{constructor(e,n,s=Qe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class df{constructor(){this.Tt=0,this.Et=gf(),this.At=Qe.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=ne(),n=ne(),s=ne();return this.Et.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:G()}}),new Ii(this.At,this.Rt,e,n,s)}Dt(){this.bt=!1,this.Et=gf()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class _S{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=nn(),this.Bt=pf(),this.Lt=new Pe(ce)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const s=this.Qt(n);switch(e.state){case 0:this.jt(n)&&s.Vt(e.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(e.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Ot(),s.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((s,r)=>{this.jt(r)&&n(r)})}zt(e){const n=e.targetId,s=e.It.count,r=this.Ht(n);if(r){const i=r.target;if(Nc(i))if(s===0){const o=new $(i.path);this.Kt(n,o,ze.newNoDocument(o,Z.min()))}else Ee(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&Nc(a.target)){const c=new $(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,ze.newNoDocument(c,e))}i.vt&&(n.set(o,i.St()),i.Dt())}});let s=ne();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ht(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(e));const r=new la(e,n,this.Lt,this.$t,s);return this.$t=nn(),this.Bt=pf(),this.Lt=new Pe(ce),r}qt(e,n){if(!this.jt(e))return;const s=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,s){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,n)?r.Ct(n,1):r.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new df,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new Pe(ce),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new df),this.Mt.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Mt.getRemoteKeysForTarget(e).has(n)}}function pf(){return new Le($.comparator)}function gf(){return new Le($.comparator)}/**
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
 */const wS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ES=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class IS{constructor(e,n){this.databaseId=e,this.dt=n}}function To(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ym(t,e){return t.dt?e.toBase64():e.toUint8Array()}function TS(t,e){return To(t,e.toTimestamp())}function Jt(t){return Ee(!!t),Z.fromTimestamp(function(e){const n=kn(e);return new xe(n.seconds,n.nanos)}(t))}function Yu(t,e){return function(n){return new Ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function vm(t){const e=Ae.fromString(t);return Ee(Em(e)),e}function Oc(t,e){return Yu(t.databaseId,e.path)}function Va(t,e){const n=vm(e);if(n.get(1)!==t.databaseId.projectId)throw new j(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(_m(n))}function xc(t,e){return Yu(t.databaseId,e)}function bS(t){const e=vm(t);return e.length===4?Ae.emptyPath():_m(e)}function Pc(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _m(t){return Ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function mf(t,e,n){return{name:Oc(t,e),fields:n.value.mapValue.fields}}function SS(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.dt?(Ee(u===void 0||typeof u=="string"),Qe.fromBase64String(u||"")):(Ee(u===void 0||u instanceof Uint8Array),Qe.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?b.UNKNOWN:lm(c.code);return new j(u,c.message||"")}(o);n=new mm(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Va(t,s.document.name),i=Jt(s.document.updateTime),o=new wt({mapValue:{fields:s.document.fields}}),a=ze.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Qi(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Va(t,s.document),i=s.readTime?Jt(s.readTime):Z.min(),o=ze.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Qi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Va(t,s.document),i=s.removedTargetIds||[];n=new Qi([],i,r,null)}else{if(!("filter"in e))return G();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new dS(r),o=s.targetId;n=new gm(o,i)}}return n}function CS(t,e){let n;if(e instanceof Ei)n={update:mf(t,e.key,e.value)};else if(e instanceof um)n={delete:Oc(t,e.key)};else if(e instanceof os)n={update:mf(t,e.key,e.data),updateMask:LS(e.fieldMask)};else{if(!(e instanceof fS))return G();n={verify:Oc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Eo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Yr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Jr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Io)return{fieldPath:i.field.canonicalString(),increment:o._t};throw G()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:TS(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:G()}(t,e.precondition)),n}function AS(t,e){return t&&t.length>0?(Ee(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Jt(s.updateTime):Jt(r);return i.isEqual(Z.min())&&(i=Jt(r)),new uS(i,s.transformResults||[])}(n,e))):[]}function RS(t,e){return{documents:[xc(t,e.path)]}}function kS(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=xc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=xc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(rf(h.value))return{unaryFilter:{field:ys(h.field),op:"IS_NAN"}};if(sf(h.value))return{unaryFilter:{field:ys(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(rf(h.value))return{unaryFilter:{field:ys(h.field),op:"IS_NOT_NAN"}};if(sf(h.value))return{unaryFilter:{field:ys(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ys(h.field),op:xS(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:ys(l.field),direction:OS(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.dt||ia(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function NS(t){let e=bS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ee(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=wm(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Rr(bs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,ia(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new wo(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new wo(f,h)}(n.endAt)),Yb(e,r,o,i,a,"F",c,u)}function DS(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function wm(t){return t?t.unaryFilter!==void 0?[MS(t)]:t.fieldFilter!==void 0?[PS(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>wm(e)).reduce((e,n)=>e.concat(n)):G():[]}function OS(t){return wS[t]}function xS(t){return ES[t]}function ys(t){return{fieldPath:t.canonicalString()}}function bs(t){return Ye.fromServerFormat(t.fieldPath)}function PS(t){return ut.create(bs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}function MS(t){switch(t.unaryFilter.op){case"IS_NAN":const e=bs(t.unaryFilter.field);return ut.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=bs(t.unaryFilter.field);return ut.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=bs(t.unaryFilter.field);return ut.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=bs(t.unaryFilter.field);return ut.create(r,"!=",{nullValue:"NULL_VALUE"});default:return G()}}function LS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Em(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class US{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&lS(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=kr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=kr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=dm();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=am(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Z.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Bs(this.mutations,e.mutations,(n,s)=>lf(n,s))&&Bs(this.baseMutations,e.baseMutations,(n,s)=>lf(n,s))}}class Ju{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ee(e.mutations.length===s.length);let r=mS;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ju(e,n,s,r)}}/**
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
 */class FS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Wn{constructor(e,n,s,r,i=Z.min(),o=Z.min(),a=Qe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class VS{constructor(e){this.ne=e}}function $S(t){const e=NS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nS(e,e.limit,"L"):e}/**
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
 */class BS{constructor(){this.ze=new jS}addToCollectionParentIndex(e,n){return this.ze.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Rn.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Rn.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class jS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Pe(Ae.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Pe(Ae.comparator)).toArray()}}/**
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
 */class Ks{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Ks(0)}static Rn(){return new Ks(-1)}}/**
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
 */class HS{constructor(){this.changes=new or(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class qS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class KS{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&kr(s.mutation,r,Vt.empty(),xe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ne()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ne()){const r=jn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=vr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=jn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ne()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=nn();const o=Nr(),a=Nr();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof os)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),kr(l.mutation,u,l.mutation.getFieldMask(),xe.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new qS(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Nr();let r=new Le((o,a)=>o-a),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Vt.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||ne()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=dm();l.forEach(f=>{if(!i.has(f)){const g=am(n.get(f),s.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return $.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):tS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):T.resolve(jn());let a=-1,c=i;return o.next(u=>T.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?T.resolve():this.getBaseDocument(e,l,h).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ne())).next(l=>({batchId:a,changes:fm(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(s=>{let r=vr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=vr();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const c=function(u,l){return new oa(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,ze.newInvalidDocument(u)))});let o=vr();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&kr(u.mutation,c,Vt.empty(),xe.now()),Xu(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):T.resolve(ze.newInvalidDocument(n))}}/**
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
 */class zS{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return T.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:Jt(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:$S(s.bundledQuery),readTime:Jt(s.readTime)}}(n)),T.resolve()}}/**
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
 */class WS{constructor(){this.overlays=new Le($.comparator),this.Xn=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=jn();return T.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ie(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Xn.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const r=jn(),i=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Le((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=jn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=jn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return T.resolve(a)}ie(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Xn.get(r.largestBatchId).delete(s.key);this.Xn.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new FS(n,s));let i=this.Xn.get(n);i===void 0&&(i=ne(),this.Xn.set(n,i)),this.Xn.set(n,i.add(s.key))}}/**
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
 */class Zu{constructor(){this.Zn=new Pe(Ue.ts),this.es=new Pe(Ue.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const s=new Ue(e,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.rs(new Ue(e,n))}os(e,n){e.forEach(s=>this.removeReference(s,n))}us(e){const n=new $(new Ae([])),s=new Ue(n,e),r=new Ue(n,e+1),i=[];return this.es.forEachInRange([s,r],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new $(new Ae([])),s=new Ue(n,e),r=new Ue(n,e+1);let i=ne();return this.es.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ue(e,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ue{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return $.comparator(e.key,n.key)||ce(e.ls,n.ls)}static ns(e,n){return ce(e.ls,n.ls)||$.comparator(e.key,n.key)}}/**
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
 */class GS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new Pe(Ue.ts)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new US(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ds=this.ds.add(new Ue(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ws(s),i=r<0?0:r;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ue(n,0),r=new Ue(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([s,r],o=>{const a=this._s(o.ls);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Pe(ce);return n.forEach(r=>{const i=new Ue(r,0),o=new Ue(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{s=s.add(a.ls)})}),T.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;$.isDocumentKey(i)||(i=i.child(""));const o=new Ue(new $(i),0);let a=new Pe(ce);return this.ds.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.ls)),!0)},o),T.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(s=>{const r=this._s(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ee(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return T.forEach(n.mutations,r=>{const i=new Ue(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=s})}In(e){}containsKey(e,n){const s=new Ue(n,0),r=this.ds.firstAfterOrEqual(s);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class QS{constructor(e){this.ps=e,this.docs=new Le($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let s=nn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ze.newInvalidDocument(r))}),T.resolve(s)}getAllFromCollection(e,n,s){let r=nn();const i=new $(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Pb(xb(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return T.resolve(r)}getAllFromCollectionGroup(e,n,s,r){G()}Is(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new XS(this)}getSize(e){return T.resolve(this.size)}}class XS extends HS{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.zn.addEntry(e,r)):this.zn.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
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
 */class YS{constructor(e){this.persistence=e,this.Ts=new or(n=>Wu(n),Gu),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Es=0,this.As=new Zu,this.targetCount=0,this.Rs=Ks.An()}forEachTarget(e,n){return this.Ts.forEach((s,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),T.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Ks(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.vn(n),T.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(i).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.Ts.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.As.ss(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.As.os(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.As.hs(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.As.containsKey(n))}}/**
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
 */class JS{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Ku(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new YS(this),this.indexManager=new BS,this.remoteDocumentCache=function(s){return new QS(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new VS(n),this.Ds=new zS(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new WS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.bs[e.toKey()];return s||(s=new GS(n,this.referenceDelegate),this.bs[e.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const r=new ZS(this.Ps.next());return this.referenceDelegate.Cs(),s(r).next(i=>this.referenceDelegate.xs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ns(e,n){return T.or(Object.values(this.bs).map(s=>()=>s.containsKey(e,n)))}}class ZS extends Lb{constructor(e){super(),this.currentSequenceNumber=e}}class el{constructor(e){this.persistence=e,this.ks=new Zu,this.Os=null}static Ms(e){return new el(e)}get Fs(){if(this.Os)return this.Os;throw G()}addReference(e,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),T.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(r=>this.Fs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Fs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Cs(){this.Os=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Fs,s=>{const r=$.fromPath(s);return this.$s(e,r).next(i=>{i||n.removeEntry(r,Z.min())})}).next(()=>(this.Os=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return T.or([()=>T.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
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
 */class tl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Pi=s,this.vi=r}static Vi(e,n){let s=ne(),r=ne();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new tl(e,n.fromCache,s,r)}}/**
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
 */class eC{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ci(e,n).next(i=>i||this.xi(e,n,r,s)).next(i=>i||this.Ni(e,n))}Ci(e,n){return T.resolve(null)}xi(e,n,s,r){return Jb(n)||r.isEqual(Z.min())?this.Ni(e,n):this.Di.getDocuments(e,s).next(i=>{const o=this.ki(n,i);return this.Oi(n,o,s,r)?this.Ni(e,n):(Jh()<=oe.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Dc(n)),this.Mi(e,o,n,Ob(r,-1)))})}ki(e,n){let s=new Pe(em(e));return n.forEach((r,i)=>{Xu(e,i)&&(s=s.add(i))}),s}Oi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(e,n){return Jh()<=oe.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Dc(n)),this.Di.getDocumentsMatchingQuery(e,n,Rn.min())}Mi(e,n,s,r){return this.Di.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class tC{constructor(e,n,s,r){this.persistence=e,this.Fi=n,this.wt=r,this.$i=new Le(ce),this.Bi=new or(i=>Wu(i),Gu),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(s)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KS(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function nC(t,e,n,s){return new tC(t,e,n,s)}async function Im(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ne();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function sC(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=T.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(y=>{const S=c.docVersions.get(g);Ee(S!==null),y.version.compareTo(S)<0&&(l.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ne();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Tm(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function rC(t,e){const n=Q(t),s=e.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const a=[];e.targetChanges.forEach((l,h)=>{const f=r.get(h);if(!f)return;a.push(n.Vs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(i,l.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Qe.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(y,S,I){return y.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(f,g,l)&&a.push(n.Vs.updateTargetData(i,g))});let c=nn(),u=ne();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(iC(i,o,e.documentUpdates).next(l=>{c=l.Gi,u=l.Qi})),!s.isEqual(Z.min())){const l=n.Vs.getLastRemoteSnapshotVersion(i).next(h=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.$i=r,i))}function iC(t,e,n){let s=ne(),r=ne();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=nn();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Z.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Gi:o,Qi:r}})}function oC(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function aC(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Vs.getTargetData(s,e).next(i=>i?(r=i,T.resolve(r)):n.Vs.allocateTargetId(s).next(o=>(r=new Wn(e,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.$i.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(e,s.targetId)),s})}async function Mc(t,e,n){const s=Q(t),r=s.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!wi(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.$i=s.$i.remove(e),s.Bi.delete(r.target)}function yf(t,e,n){const s=Q(t);let r=Z.min(),i=ne();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=Q(a),h=l.Bi.get(u);return h!==void 0?T.resolve(l.$i.get(h)):l.Vs.getTargetData(c,u)}(s,o,ns(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,e,n?r:Z.min(),n?i:ne())).next(a=>(cC(s,sS(e),a),{documents:a,ji:i})))}function cC(t,e,n){let s=Z.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Li.set(e,s)}class vf{constructor(){this.activeTargetIds=pm()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uC{constructor(){this.Fr=new vf,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,s){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new vf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lC{Br(e){}shutdown(){}}/**
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
 */class _f{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const hC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class fC{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
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
 */class dC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,s,r,i){const o=this.oo(e,n);U("RestConnection","Sending: ",o,s);const a={};return this.uo(a,r,i),this.co(e,o,a,s).then(c=>(U("RestConnection","Received: ",c),c),c=>{throw Zh("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}ao(e,n,s,r,i,o){return this.ro(e,n,s,r,i)}uo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+rr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}oo(e,n){const s=hC[e];return`${this.so}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,s,r){return new Promise((i,o)=>{const a=new Ib;a.listenOnce(_b.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Fa.NO_ERROR:const u=a.getResponseJson();U("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Fa.TIMEOUT:U("Connection",'RPC "'+e+'" timed out'),o(new j(b.DEADLINE_EXCEEDED,"Request time out"));break;case Fa.HTTP_ERROR:const l=a.getStatus();if(U("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(y)>=0?y:b.UNKNOWN}(h.status);o(new j(f,h.message))}else o(new j(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new j(b.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{U("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}ho(e,n,s){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=yb(),o=vb(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Eb({})),this.uo(a.initMessageHeaders,n,s),up()||hp()||iE()||fp()||oE()||lp()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");U("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const f=new fC({jr:y=>{h?U("Connection","Not sending because WebChannel is closed:",y):(l||(U("Connection","Opening WebChannel transport."),u.open(),l=!0),U("Connection","WebChannel sending:",y),u.send(y))},Wr:()=>u.close()}),g=(y,S,I)=>{y.listen(S,A=>{try{I(A)}catch(x){setTimeout(()=>{throw x},0)}})};return g(u,Mi.EventType.OPEN,()=>{h||U("Connection","WebChannel transport opened.")}),g(u,Mi.EventType.CLOSE,()=>{h||(h=!0,U("Connection","WebChannel transport closed"),f.eo())}),g(u,Mi.EventType.ERROR,y=>{h||(h=!0,Zh("Connection","WebChannel transport errored:",y),f.eo(new j(b.UNAVAILABLE,"The operation could not be completed")))}),g(u,Mi.EventType.MESSAGE,y=>{var S;if(!h){const I=y.data[0];Ee(!!I);const A=I,x=A.error||((S=A[0])===null||S===void 0?void 0:S.error);if(x){U("Connection","WebChannel received error:",x);const K=x.status;let X=function(Ce){const De=Re[Ce];if(De!==void 0)return lm(De)}(K),le=x.message;X===void 0&&(X=b.INTERNAL,le="Unknown error status: "+K+" with message "+x.message),h=!0,f.eo(new j(X,le)),u.close()}else U("Connection","WebChannel received:",I),f.no(I)}}),g(o,wb.STAT_EVENT,y=>{y.stat===Xh.PROXY?U("Connection","Detected buffering proxy"):y.stat===Xh.NOPROXY&&U("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Zr()},0),f}}function $a(){return typeof document!="undefined"?document:null}/**
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
 */function ha(t){return new IS(t,!0)}class bm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.js=e,this.timerId=n,this.lo=s,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-s);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class Sm{constructor(e,n,s,r,i,o,a,c){this.js=e,this.Ao=s,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new bm(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Po===n&&this.Uo(s,r)},s=>{e(()=>{const r=new j(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Uo(e,n){const s=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pC extends Sm{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.wt=i}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=SS(this.wt,e),s=function(r){if(!("targetChange"in r))return Z.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Z.min():i.readTime?Jt(i.readTime):Z.min()}(e);return this.listener.Go(n,s)}Qo(e){const n={};n.database=Pc(this.wt),n.addTarget=function(r,i){let o;const a=i.target;return o=Nc(a)?{documents:RS(r,a)}:{query:kS(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=ym(r,i.resumeToken):i.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=To(r,i.snapshotVersion.toTimestamp())),o}(this.wt,e);const s=DS(this.wt,e);s&&(n.labels=s),this.Mo(n)}jo(e){const n={};n.database=Pc(this.wt),n.removeTarget=e,this.Mo(n)}}class gC extends Sm{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=AS(e.writeResults,e.commitTime),s=Jt(e.commitTime);return this.listener.Jo(s,n)}return Ee(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Pc(this.wt),this.Mo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>CS(this.wt,s))};this.Mo(n)}}/**
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
 */class mC extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new j(b.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new j(b.UNKNOWN,r.toString())})}ao(e,n,s,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(b.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class yC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(An(n),this.su=!1):U("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class vC{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{s.enqueueAndForget(async()=>{as(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Q(a);c.lu.add(4),await Ti(c),c._u.set("Unknown"),c.lu.delete(4),await fa(c)}(this))})}),this._u=new yC(s,r)}}async function fa(t){if(as(t))for(const e of t.fu)await e(!0)}async function Ti(t){for(const e of t.fu)await e(!1)}function Cm(t,e){const n=Q(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),rl(n)?sl(n):ar(n).Co()&&nl(n,e))}function Am(t,e){const n=Q(t),s=ar(n);n.hu.delete(e),s.Co()&&Rm(n,e),n.hu.size===0&&(s.Co()?s.ko():as(n)&&n._u.set("Unknown"))}function nl(t,e){t.wu.Nt(e.targetId),ar(t).Qo(e)}function Rm(t,e){t.wu.Nt(e),ar(t).jo(e)}function sl(t){t.wu=new _S({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),ar(t).start(),t._u.iu()}function rl(t){return as(t)&&!ar(t).Do()&&t.hu.size>0}function as(t){return Q(t).lu.size===0}function km(t){t.wu=void 0}async function _C(t){t.hu.forEach((e,n)=>{nl(t,e)})}async function wC(t,e){km(t),rl(t)?(t._u.uu(e),sl(t)):t._u.set("Unknown")}async function EC(t,e,n){if(t._u.set("Online"),e instanceof mm&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.hu.delete(o),s.wu.removeTarget(o))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await bo(t,s)}else if(e instanceof Qi?t.wu.Ut(e):e instanceof gm?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(Z.min()))try{const s=await Tm(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.wu.Yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.hu.get(c);u&&r.hu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.hu.get(a);if(!c)return;r.hu.set(a,c.withResumeToken(Qe.EMPTY_BYTE_STRING,c.snapshotVersion)),Rm(r,a);const u=new Wn(c.target,a,1,c.sequenceNumber);nl(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await bo(t,s)}}async function bo(t,e,n){if(!wi(e))throw e;t.lu.add(1),await Ti(t),t._u.set("Offline"),n||(n=()=>Tm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await fa(t)})}function Nm(t,e){return e().catch(n=>bo(t,n,e))}async function da(t){const e=Q(t),n=Nn(e);let s=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;IC(e);)try{const r=await oC(e.localStore,s);if(r===null){e.au.length===0&&n.ko();break}s=r.batchId,TC(e,r)}catch(r){await bo(e,r)}Dm(e)&&Om(e)}function IC(t){return as(t)&&t.au.length<10}function TC(t,e){t.au.push(e);const n=Nn(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Dm(t){return as(t)&&!Nn(t).Do()&&t.au.length>0}function Om(t){Nn(t).start()}async function bC(t){Nn(t).Xo()}async function SC(t){const e=Nn(t);for(const n of t.au)e.Ho(n.mutations)}async function CC(t,e,n){const s=t.au.shift(),r=Ju.from(s,e,n);await Nm(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await da(t)}async function AC(t,e){e&&Nn(t).zo&&await async function(n,s){if(r=s.code,pS(r)&&r!==b.ABORTED){const i=n.au.shift();Nn(n).No(),await Nm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await da(n)}var r}(t,e),Dm(t)&&Om(t)}async function wf(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=as(n);n.lu.add(3),await Ti(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await fa(n)}async function RC(t,e){const n=Q(t);e?(n.lu.delete(2),await fa(n)):e||(n.lu.add(2),await Ti(n),n._u.set("Unknown"))}function ar(t){return t.mu||(t.mu=function(e,n,s){const r=Q(e);return r.tu(),new pC(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(t.datastore,t.asyncQueue,{zr:_C.bind(null,t),Jr:wC.bind(null,t),Go:EC.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),rl(t)?sl(t):t._u.set("Unknown")):(await t.mu.stop(),km(t))})),t.mu}function Nn(t){return t.gu||(t.gu=function(e,n,s){const r=Q(e);return r.tu(),new gC(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(t.datastore,t.asyncQueue,{zr:bC.bind(null,t),Jr:AC.bind(null,t),Yo:SC.bind(null,t),Jo:CC.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await da(t)):(await t.gu.stop(),t.au.length>0&&(U("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
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
 */class il{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new il(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ol(t,e){if(An("AsyncQueue",`${e}: ${t}`),wi(t))return new j(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class xs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||$.comparator(n.key,s.key):(n,s)=>$.comparator(n.key,s.key),this.keyedMap=vr(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new xs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Ef{constructor(){this.yu=new Le($.comparator)}track(e){const n=e.doc.key,s=this.yu.get(n);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(n,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(n):e.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):G():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,s)=>{e.push(s)}),e}}class zs{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new zs(e,n,xs.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&aa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class kC{constructor(){this.Iu=void 0,this.listeners=[]}}class NC{constructor(){this.queries=new or(e=>Zg(e),aa),this.onlineState="Unknown",this.Tu=new Set}}async function DC(t,e){const n=Q(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new kC),r)try{i.Iu=await n.onListen(s)}catch(o){const a=ol(o,`Initialization of query '${Dc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&al(n)}async function OC(t,e){const n=Q(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function xC(t,e){const n=Q(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(r)&&(s=!0);o.Iu=r}}s&&al(n)}function PC(t,e,n){const s=Q(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function al(t){t.Tu.forEach(e=>{e.next()})}class MC{constructor(e,n,s){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new zs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
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
 */class xm{constructor(e){this.key=e}}class Pm{constructor(e){this.key=e}}class LC{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=ne(),this.mutatedKeys=ne(),this.Lu=em(e),this.Uu=new xs(this.Lu)}get qu(){return this.Fu}Ku(e,n){const s=n?n.Gu:new Ef,r=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const f=r.get(l),g=Xu(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),S=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let I=!1;f&&g?f.data.isEqual(g.data)?y!==S&&(s.track({type:3,doc:g}),I=!0):this.Qu(f,g)||(s.track({type:2,doc:g}),I=!0,(c&&this.Lu(g,c)>0||u&&this.Lu(g,u)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),I=!0):f&&!g&&(s.track({type:1,doc:f}),I=!0,(c||u)&&(a=!0)),I&&(g?(o=o.add(g),i=S?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Uu:o,Gu:s,Oi:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort((u,l)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return g(h)-g(f)}(u.type,l.type)||this.Lu(u.doc,l.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new zs(this.query,e.Uu,r,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Ef,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=ne(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return e.forEach(s=>{this.Bu.has(s)||n.push(new Pm(s))}),this.Bu.forEach(s=>{e.has(s)||n.push(new xm(s))}),n}Ju(e){this.Fu=e.ji,this.Bu=ne();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return zs.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class UC{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class FC{constructor(e){this.key=e,this.Xu=!1}}class VC{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new or(a=>Zg(a),aa),this.ec=new Map,this.nc=new Set,this.sc=new Le($.comparator),this.ic=new Map,this.rc=new Zu,this.oc={},this.uc=new Map,this.cc=Ks.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function $C(t,e){const n=XC(t);let s,r;const i=n.tc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Yu();else{const o=await aC(n.localStore,ns(e));n.isPrimaryClient&&Cm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await BC(n,e,s,a==="current")}return r}async function BC(t,e,n,s){t.hc=(l,h,f)=>async function(g,y,S,I){let A=y.view.Ku(S);A.Oi&&(A=await yf(g.localStore,y.query,!1).then(({documents:X})=>y.view.Ku(X,A)));const x=I&&I.targetChanges.get(y.targetId),K=y.view.applyChanges(A,g.isPrimaryClient,x);return Tf(g,y.targetId,K.zu),K.snapshot}(t,l,h,f);const r=await yf(t.localStore,e,!0),i=new LC(e,r.ji),o=i.Ku(r.documents),a=Ii.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Tf(t,n,c.zu);const u=new UC(e,n,i);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function jC(t,e){const n=Q(t),s=n.tc.get(e),r=n.ec.get(s.targetId);if(r.length>1)return n.ec.set(s.targetId,r.filter(i=>!aa(i,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Mc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Am(n.remoteStore,s.targetId),Lc(n,s.targetId)}).catch(_i)):(Lc(n,s.targetId),await Mc(n.localStore,s.targetId,!0))}async function HC(t,e,n){const s=YC(t);try{const r=await function(i,o){const a=Q(i),c=xe.now(),u=o.reduce((f,g)=>f.add(g.key),ne());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=nn(),y=ne();return a.Ui.getEntries(f,u).next(S=>{g=S,g.forEach((I,A)=>{A.isValidDocument()||(y=y.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(S=>{l=S;const I=[];for(const A of o){const x=hS(A,l.get(A.key).overlayedDocument);x!=null&&I.push(new os(A.key,x,Yg(x.value.mapValue),Yt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,I,o)}).next(S=>{h=S;const I=S.applyToLocalDocumentSet(l,y);return a.documentOverlayCache.saveOverlays(f,S.batchId,I)})}).then(()=>({batchId:h.batchId,changes:fm(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.oc[i.currentUser.toKey()];c||(c=new Le(ce)),c=c.insert(o,a),i.oc[i.currentUser.toKey()]=c}(s,r.batchId,n),await bi(s,r.changes),await da(s.remoteStore)}catch(r){const i=ol(r,"Failed to persist write");n.reject(i)}}async function Mm(t,e){const n=Q(t);try{const s=await rC(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ic.get(i);o&&(Ee(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Xu=!0:r.modifiedDocuments.size>0?Ee(o.Xu):r.removedDocuments.size>0&&(Ee(o.Xu),o.Xu=!1))}),await bi(n,s,e)}catch(s){await _i(s)}}function If(t,e,n){const s=Q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.tc.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Q(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Eu(o)&&(c=!0)}),c&&al(a)}(s.eventManager,e),r.length&&s.Zu.Go(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function qC(t,e,n){const s=Q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ic.get(e),i=r&&r.key;if(i){let o=new Le($.comparator);o=o.insert(i,ze.newNoDocument(i,Z.min()));const a=ne().add(i),c=new la(Z.min(),new Map,new Pe(ce),o,a);await Mm(s,c),s.sc=s.sc.remove(i),s.ic.delete(e),cl(s)}else await Mc(s.localStore,e,!1).then(()=>Lc(s,e,n)).catch(_i)}async function KC(t,e){const n=Q(t),s=e.batch.batchId;try{const r=await sC(n.localStore,e);Um(n,s,null),Lm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await bi(n,r)}catch(r){await _i(r)}}async function zC(t,e,n){const s=Q(t);try{const r=await function(i,o){const a=Q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(Ee(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Um(s,e,n),Lm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await bi(s,r)}catch(r){await _i(r)}}function Lm(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function Um(t,e,n){const s=Q(t);let r=s.oc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.oc[s.currentUser.toKey()]=r}}function Lc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ec.get(e))t.tc.delete(s),n&&t.Zu.lc(s,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(s=>{t.rc.containsKey(s)||Fm(t,s)})}function Fm(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(Am(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),cl(t))}function Tf(t,e,n){for(const s of n)s instanceof xm?(t.rc.addReference(s.key,e),WC(t,s)):s instanceof Pm?(U("SyncEngine","Document no longer in limbo: "+s.key),t.rc.removeReference(s.key,e),t.rc.containsKey(s.key)||Fm(t,s.key)):G()}function WC(t,e){const n=e.key,s=n.path.canonicalString();t.sc.get(n)||t.nc.has(s)||(U("SyncEngine","New document in limbo: "+n),t.nc.add(s),cl(t))}function cl(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new $(Ae.fromString(e)),s=t.cc.next();t.ic.set(s,new FC(n)),t.sc=t.sc.insert(n,s),Cm(t.remoteStore,new Wn(ns(Qu(n.path)),s,2,Ku.ot))}}async function bi(t,e,n){const s=Q(t),r=[],i=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,c)=>{o.push(s.hc(c,e,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),r.push(u);const l=tl.Vi(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.Zu.Go(r),await async function(a,c){const u=Q(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>T.forEach(c,h=>T.forEach(h.Pi,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>T.forEach(h.vi,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!wi(l))throw l;U("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.$i.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.$i=u.$i.insert(h,y)}}}(s.localStore,i))}async function GC(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await Im(n.localStore,e);n.currentUser=e,function(r,i){r.uc.forEach(o=>{o.forEach(a=>{a.reject(new j(b.CANCELLED,i))})}),r.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await bi(n,s.Ki)}}function QC(t,e){const n=Q(t),s=n.ic.get(e);if(s&&s.Xu)return ne().add(s.key);{let r=ne();const i=n.ec.get(e);if(!i)return r;for(const o of i){const a=n.tc.get(o);r=r.unionWith(a.view.qu)}return r}}function XC(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qC.bind(null,e),e.Zu.Go=xC.bind(null,e.eventManager),e.Zu.lc=PC.bind(null,e.eventManager),e}function YC(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zC.bind(null,e),e}class JC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=ha(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return nC(this.persistence,new eC,e.initialUser,this.wt)}_c(e){return new JS(el.Ms,this.wt)}dc(e){return new uC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ZC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>If(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=GC.bind(null,this.syncEngine),await RC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new NC}createDatastore(e){const n=ha(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new dC(r));var r;return function(i,o,a,c){return new mC(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>If(this.syncEngine,a,0),o=_f.V()?new _f:new lC,new vC(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new VC(s,r,i,o,a,c);return u&&(l.ac=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);U("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Ti(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class eA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class tA{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ct.UNAUTHENTICATED,this.clientId=Wg.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ol(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function nA(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Im(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function sA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rA(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>wf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>wf(e.remoteStore,i)),t.onlineComponents=e}async function rA(t){return t.offlineComponents||(U("FirestoreClient","Using default OfflineComponentProvider"),await nA(t,new JC)),t.offlineComponents}async function Vm(t){return t.onlineComponents||(U("FirestoreClient","Using default OnlineComponentProvider"),await sA(t,new ZC)),t.onlineComponents}function iA(t){return Vm(t).then(e=>e.syncEngine)}async function oA(t){const e=await Vm(t),n=e.eventManager;return n.onListen=$C.bind(null,e.syncEngine),n.onUnlisten=jC.bind(null,e.syncEngine),n}function aA(t,e,n={}){const s=new Tn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new eA({next:h=>{i.enqueueAndForget(()=>OC(r,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new j(b.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new j(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new MC(Qu(o.path),u,{includeMetadataChanges:!0,Du:!0});return DC(r,l)}(await oA(t),t.asyncQueue,e,n,s)),s.promise}const bf=new Map;/**
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
 */function cA(t,e,n){if(!n)throw new j(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uA(t,e,n,s){if(e===!0&&s===!0)throw new j(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sf(t){if(!$.isDocumentKey(t))throw new j(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ul(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function So(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ul(t);throw new j(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Cf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new j(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,uA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class $m{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cf({}),this._settingsFrozen=!1,e instanceof Hs?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new j(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hs(r.options.projectId)}(e))}get app(){if(!this._app)throw new j(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new bb;switch(n.type){case"gapi":const s=n.client;return Ee(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Ab(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new j(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=bf.get(e);n&&(U("ComponentProvider","Removing Datastore"),bf.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Tt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class ll{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ll(this.firestore,e,this._query)}}class Zr extends ll{constructor(e,n,s){super(e,n,Qu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new $(e))}withConverter(e){return new Zr(this.firestore,e,this._path)}}function cs(t,e,...n){if(t=jt(t),arguments.length===1&&(e=Wg.I()),cA("doc","path",e),t instanceof $m){const s=Ae.fromString(e,...n);return Sf(s),new Tt(t,null,new $(s))}{if(!(t instanceof Tt||t instanceof Zr))throw new j(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ae.fromString(e,...n));return Sf(s),new Tt(t.firestore,t instanceof Zr?t.converter:null,new $(s))}}/**
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
 */class lA{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new bm(this,"async_queue_retry"),this.Kc=()=>{const n=$a();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=$a();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=$a();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Tn;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!wi(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Oc.then(()=>(this.Lc=!0,e().catch(s=>{this.Bc=s,this.Lc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw An("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Lc=!1,s))));return this.Oc=n,n}enqueueAfterDelay(e,n,s){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const r=il.createAndSchedule(this,e,n,s,i=>this.Wc(i));return this.$c.push(r),r}Gc(){this.Bc&&G()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class hl extends $m{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new lA,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||jm(this),this._firestoreClient.terminate()}}function hA(t=mp()){return lu(t,"firestore").getImmediate()}function Bm(t){return t._firestoreClient||jm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jm(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new Fb(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new tA(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class fl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ws{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ws(Qe.fromBase64String(e))}catch(n){throw new j(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ws(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Hm{constructor(e){this._methodName=e}}/**
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
 */class dl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const fA=/^__.*__$/;class dA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new os(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ei(e,this.data,n,this.fieldTransforms)}}function qm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class pl{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new pl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:s,na:!1});return r.sa(e),r}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:s,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Co(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(qm(this.Zc)&&fA.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class pA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=s||ha(e)}aa(e,n,s,r=!1){return new pl({Zc:e,methodName:n,ca:s,path:Ye.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function gA(t){const e=t._freezeSettings(),n=ha(t._databaseId);return new pA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mA(t,e,n,s,r,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,r);Gm("Data must be an object, but it was:",o,s);const a=zm(s,o);let c,u;if(i.merge)c=new Vt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=yA(e,h,n);if(!o.contains(f))throw new j(b.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);_A(l,f)||l.push(f)}c=new Vt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new dA(new wt(a),c,u)}function Km(t,e){if(Wm(t=jt(t)))return Gm("Unsupported field value:",e,t),zm(t,e);if(t instanceof Hm)return function(n,s){if(!qm(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Km(o,s.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=jt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return iS(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=xe.fromDate(n);return{timestampValue:To(s.wt,r)}}if(n instanceof xe){const r=new xe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:To(s.wt,r)}}if(n instanceof dl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ws)return{bytesValue:ym(s.wt,n._byteString)};if(n instanceof Tt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Yu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${ul(n)}`)}(t,e)}function zm(t,e){const n={};return Gg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ir(t,(s,r)=>{const i=Km(r,e.ea(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Wm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof dl||t instanceof Ws||t instanceof Tt||t instanceof Hm)}function Gm(t,e,n){if(!Wm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ul(n);throw s==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+s)}}function yA(t,e,n){if((e=jt(e))instanceof fl)return e._internalPath;if(typeof e=="string")return Qm(t,e);throw Co("Field path arguments must be of type string or ",t,!1,void 0,n)}const vA=new RegExp("[~\\*/\\[\\]]");function Qm(t,e,n){if(e.search(vA)>=0)throw Co(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fl(...e.split("."))._internalPath}catch{throw Co(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Co(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new j(b.INVALID_ARGUMENT,a+t+c)}function _A(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Xm{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ym("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wA extends Xm{data(){return super.data()}}function Ym(t,e){return typeof e=="string"?Qm(t,e):e instanceof fl?e._internalPath:e._delegate._internalPath}/**
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
 */class EA{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jm extends Xm{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new IA(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Ym("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class IA extends Jm{data(e={}){return super.data(e)}}/**
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
 */class TA{convertValue(e,n="none"){switch(ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(js(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const s={};return ir(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new dl(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Xg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Gr(e));default:return null}}convertTimestamp(e){const n=kn(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ae.fromString(e);Ee(Em(s));const r=new Hs(s.get(1),s.get(3)),i=new $(s.popFirst(5));return r.isEqual(n)||An(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function bA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */function SA(t){t=So(t,Tt);const e=So(t.firestore,hl);return aA(Bm(e),t._key).then(n=>RA(e,t,n))}class CA extends TA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ws(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function cr(t,e,n){t=So(t,Tt);const s=So(t.firestore,hl),r=bA(t.converter,e,n);return AA(s,[mA(gA(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Yt.none())])}function AA(t,e){return function(n,s){const r=new Tn;return n.asyncQueue.enqueueAndForget(async()=>HC(await iA(n),s,r)),r.promise}(Bm(t),e)}function RA(t,e,n){const s=n.docs.get(e._key),r=new CA(t);return new Jm(t,r,e._key,s,new EA(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){rr=n})(si),Vs(new Gn("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new hl(r,new Sb(n.getProvider("auth-internal")),new kb(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),In(Yh,"3.4.12",t),In(Yh,"3.4.12","esm2017")})();var qt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n};const kA=t=>(id("data-v-db571a5c"),t=t(),od(),t),NA={class:"greetings"},DA={class:"green"},OA=kA(()=>B("h3",null," Productive Routine ",-1)),xA={__name:"HelloWorld",props:{msg:{type:String,required:!0}},setup(t){return(e,n)=>(he(),we("div",NA,[B("h1",DA,dt(t.msg),1),OA]))}};var PA=qt(xA,[["__scopeId","data-v-db571a5c"]]);const MA={props:{centerText:String}},LA={class:"mobile-banner wrapper"},UA={class:"container"},FA={class:"center-text"};function VA(t,e,n,s,r,i){return he(),we("div",LA,[B("div",UA,[B("div",FA,dt(n.centerText),1)])])}var gl=qt(MA,[["render",VA],["__scopeId","data-v-99773edc"]]);const $A={props:{width:String,height:String,text:String,color:String,textSize:String,display:String,textColor:String,alignment:String}};function BA(t,e,n,s,r,i){return he(),we("div",{class:"pill wrapper",style:Ss({width:n.width,height:n.height})},[B("div",{class:"container",style:Ss({background:n.color,"justify-content":"center","align-items":n.alignment})},[B("div",{class:"text",style:Ss({color:n.textColor,"font-size":n.textSize})},dt(n.text),5)],4)],4)}var Si=qt($A,[["render",BA],["__scopeId","data-v-e5cbf502"]]);const jA={data(){return{routines:[]}},created(){window.onpopstate=t=>{console.log("222222",this.$router,window.history),window.history.state.current==="/"&&this.$router.forward(1)},this.routines=this.appUserData.data},computed:{...Zs(["appUserData"])},methods:{...ei({setAppUserData:"SET_APP_USER_DATA",setCurrentRoutine:"SET_CURRENT_ROUTINE"}),logout(){const t=Ze();oI(t).then(()=>{this.$router.replace("/login")})},addData(){const t=Ze().currentUser.uid,e=Ze().currentUser.email;cr(cs(us,t,e),{data:[{routineName:"dawn",routineStartTime:"0500",routineEndTime:"0800",activities:[{activityName:"Rise, Rinse & Meditate",suggestions:[]},{activityName:"Plan the Day's Task & Take Resolution of the Day",suggestions:[]},{activityName:"Read on something unrelated to day to day work.",suggestions:[]},{activityName:"Breakfast",suggestions:[]}]},{routineName:"work",routineStartTime:"0800",routineEndTime:"1800",activities:[{activityName:"Rise, Rinse & Meditate",suggestions:[]},{activityName:"Plan the Day's Task & Take Resolution of the Day",suggestions:[]},{activityName:"Read on something unrelated to day to day work.",suggestions:[]},{activityName:"Breakfast",suggestions:[]}]},{routineName:"dusk",routineStartTime:"1800",routineEndTime:"2130",activities:[{activityName:"Put things in their places",suggestions:[]},{activityName:"Music, Diversion, Conversations",suggestions:[]},{activityName:"Examination of the Day",suggestions:[]},{activityName:"Supper",suggestions:[]}]}]})},launchNextScreen(t){this.setCurrentRoutine({data:this.routines[t],index:t}),this.$router.push("/routine")}},watch:{},components:{AppHeader:PA,RouterLink:rp,mobileBanner:gl,pill:Si},mounted(){var t=document.getElementsByClassName("collapsible"),e;for(e=0;e<t.length;e++)t[e].addEventListener("click",function(){this.classList.toggle("active");var n=this.nextElementSibling;n.style.display==="block"?n.style.display="none":n.style.display="block"})}},HA={class:"dashboard wrapper"},qA={class:"pills-container"};function KA(t,e,n,s,r,i){const o=Bt("mobileBanner"),a=Bt("pill");return he(),we("header",null,[B("div",HA,[Se(o,{centerText:"feynman"}),B("div",qA,[(he(!0),we(Fe,null,Sn(r.routines,(c,u)=>(he(),Ad(a,{key:c,class:"pill-container",text:c.routineName,color:"#FFB067",width:"300px",height:"73px",onClick:l=>i.launchNextScreen(u)},null,8,["text","onClick"]))),128))])])])}var zA=qt(jA,[["render",KA],["__scopeId","data-v-f0896dae"]]);const WA={data(){return{email:"",password:""}},methods:{...ei({setAppUserData:"SET_APP_USER_DATA"}),login(){const t=Ze();iI(t,this.email,this.password).then(async e=>{const n=e.user.uid,s=e.user.email,r=cs(us,n,s),i=await SA(r);i.exists()?(this.$router.push("/dashboard"),this.setAppUserData(i.data())):console.log("No such document!")}).catch(e=>{alert(e.message)})}},watch:{},computed:{...Zs(["appUserData"])}},GA={class:"login"},QA=B("br",null,null,-1),XA=B("br",null,null,-1),YA=eu(" New Here? Create a new account ");function JA(t,e,n,s,r,i){const o=Bt("router-link");return he(),we("div",GA,[Ps(B("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>r.email=a),placeholder:"Email address",class:"input",autocomplete:"on",required:""},null,512),[[Ls,r.email]]),QA,Ps(B("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=a=>r.password=a),placeholder:"Password",class:"input",required:""},null,512),[[Ls,r.password]]),XA,B("button",{onClick:e[2]||(e[2]=(...a)=>i.login&&i.login(...a)),class:"button"},"Enter"),B("p",null,[Se(o,{to:"/signup"},{default:Yc(()=>[YA]),_:1})])])}var Af=qt(WA,[["render",JA]]);const ZA={data(){return{email:"",password:""}},methods:{signUp(){const t=Ze();rI(t,this.email,this.password).then(e=>{this.addData(),this.$router.replace("/login")}).catch(e=>{this.$router.replace("/login"),alert(e.message)})},addData(){const t=Ze().currentUser.uid,e=Ze().currentUser.email;cr(cs(us,t,e),{data:[{routineName:"dawn",routineStartTime:"0500",routineEndTime:"0800",activities:[{activityName:"Rise, Rinse & Meditate",suggestions:[]},{activityName:"Plan the Day's Task & Take Resolution of the Day",suggestions:[]},{activityName:"Read on something unrelated to day to day work.",suggestions:[]},{activityName:"Breakfast",suggestions:[]}]},{routineName:"work",routineStartTime:"0800",routineEndTime:"1800",activities:[{activityName:"Rise, Rinse & Meditate",suggestions:[]},{activityName:"Plan the Day's Task & Take Resolution of the Day",suggestions:[]},{activityName:"Read on something unrelated to day to day work.",suggestions:[]},{activityName:"Breakfast",suggestions:[]}]},{routineName:"dusk",routineStartTime:"1800",routineEndTime:"2130",activities:[{activityName:"Put things in their places",suggestions:[]},{activityName:"Music, Diversion, Conversations",suggestions:[]},{activityName:"Examination of the Day",suggestions:[]},{activityName:"Supper",suggestions:[]}]}]})}},watch:{}},eR={class:"sign-up"},tR=B("h3",null,"Create a new account",-1),nR=B("br",null,null,-1),sR=B("br",null,null,-1),rR={class:"button"},iR=eu(" Back ");function oR(t,e,n,s,r,i){const o=Bt("router-link");return he(),we("div",eR,[tR,Ps(B("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>r.email=a),type:"text",class:"input",placeholder:"Email",required:""},null,512),[[Ls,r.email]]),nR,Ps(B("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>r.password=a),type:"password",class:"input",placeholder:"Password",required:""},null,512),[[Ls,r.password]]),sR,B("button",{onClick:e[2]||(e[2]=(...a)=>i.signUp&&i.signUp(...a)),class:"button"},"Sign Up!"),B("button",rR,[Se(o,{to:"/login"},{default:Yc(()=>[iR]),_:1})])])}var aR=qt(ZA,[["render",oR]]);const ot=class{constructor(e,n){this.startEvent=e,this.endEvent=n||null}isSwipeLeft(){return this.getSwipeDirection()==ot.SWIPE_LEFT}isSwipeRight(){return this.getSwipeDirection()==ot.SWIPE_RIGHT}isSwipeUp(){return this.getSwipeDirection()==ot.SWIPE_UP}isSwipeDown(){return this.getSwipeDirection()==ot.SWIPE_DOWN}getSwipeDirection(){let e=this.startEvent.changedTouches[0],n=this.endEvent.changedTouches[0];if(!e||!n)return null;let s=e.screenX-n.screenX,r=e.screenY-n.screenY;if(Math.abs(s)>Math.abs(r)){if(s>=ot.SWPIE_THRESHOLD)return ot.SWIPE_LEFT;if(s<=-ot.SWPIE_THRESHOLD)return ot.SWIPE_RIGHT}else{if(r>=ot.SWPIE_THRESHOLD)return ot.SWIPE_UP;if(r<=-ot.SWPIE_THRESHOLD)return ot.SWIPE_DOWN}return null}setEndEvent(e){this.endEvent=e}};let hn=ot;ds(hn,"SWPIE_THRESHOLD",50),ds(hn,"SWIPE_LEFT",1),ds(hn,"SWIPE_RIGHT",2),ds(hn,"SWIPE_UP",3),ds(hn,"SWIPE_DOWN",4);const cR={props:{centerText:String},data(){return{currentHour:"",currentMinute:"",activities:["one","two","three"],touchEvent:null}},components:{Banner:gl,Pill:Si},created(){let t=new Date;this.currentHour=t.getHours(),this.currentMinute=t.getMinutes(),this.currentHour<10&&(this.currentHour="0"+this.currentHour),this.currentMinute<10&&(this.currentMinute="0"+this.currentMinute),setInterval(()=>{let e=new Date;this.currentHour=e.getHours(),this.currentMinute=e.getMinutes(),this.currentHour<10&&(this.currentHour="0"+this.currentHour),this.currentMinute<10&&(this.currentMinute="0"+this.currentMinute)},1e3),this.activities=this.currentRoutine.activities},computed:{...Zs(["count","currentRoutine","appUserData","currentRoutineIndex"])},methods:{...ei({setCurrentActivity:"SET_CURRENT_ACTIVITY"}),launchNextScreen(t){this.setCurrentActivity({data:this.currentRoutine.activities[t],index:t}),this.$router.push("/suggestions")},launchAddScreen(){this.$router.push("/addnewactivity")},handleSwipe(t,e){!this.touchEvent||(this.touchEvent.setEndEvent(t),this.touchEvent.isSwipeRight()||this.touchEvent.isSwipeLeft()&&this.del(e),this.touchEvent.setEndEvent(t),this.touchEvent=null)},startSwipe(t){this.touchEvent=new hn(t)},del(t){this.appUserDataLocal=this.appUserData;const e=this.appUserDataLocal.data[this.currentRoutineIndex].activities[t].activityName;if(confirm(`Are you sure, ${e}?`)){console.log("222222",this.appUserDataLocal),this.appUserDataLocal.data[this.currentRoutineIndex].activities.splice(t,1),console.log("1222222222",this.appUserDataLocal);const s=Ze().currentUser.uid,r=Ze().currentUser.email;cr(cs(us,s,r),this.appUserDataLocal).then(i=>{}).catch(i=>{console.log("12333",i)})}}}},uR={class:"routine wrapper"},lR={class:"routine-info-container"},hR={class:"routine-info"},fR={class:"routine-name"},dR={class:"routine-time"},pR={class:"second-sub-container"},gR={class:"current-time"},mR={class:"pills-container"};function yR(t,e,n,s,r,i){const o=Bt("Banner"),a=Bt("pill");return he(),we("div",uR,[Se(o,{centerText:"feynman"}),B("div",lR,[B("div",hR,[B("div",fR,dt(t.currentRoutine.routineName),1),B("div",dR,dt(t.currentRoutine.routineStartTime)+" - "+dt(t.currentRoutine.routineEndTime),1)]),B("div",pR,[B("div",gR,dt(r.currentHour)+":"+dt(r.currentMinute),1)])]),B("div",{onClick:e[0]||(e[0]=(...c)=>i.launchAddScreen&&i.launchAddScreen(...c)),class:"add-new-text"}," add new "),B("div",mR,[(he(!0),we(Fe,null,Sn(r.activities,(c,u)=>(he(),we("div",{key:c},[Se(a,{class:"pill-container",text:c.activityName,color:"#2C3C5B",width:"350px",textSize:"20px",textColor:"#ffffff",display:"block",height:"73px",alignment:"flex-start",onClick:l=>i.launchNextScreen(u),onTouchstart:i.startSwipe,onTouchend:l=>i.handleSwipe(l,u)},null,8,["text","onClick","onTouchstart","onTouchend"])]))),128))])])}var vR=qt(cR,[["render",yR],["__scopeId","data-v-616a4264"]]);const _R={props:{centerText:String},data(){return{currentHour:"",currentMinute:"",suggestions:["one","two","three"],activities:[""]}},components:{Banner:gl,Pill:Si},created(){let t=new Date;this.currentHour=t.getHours(),this.currentMinute=t.getMinutes(),this.currentHour<10&&(this.currentHour="0"+this.currentHour),this.currentMinute<10&&(this.currentMinute="0"+this.currentMinute),setInterval(()=>{let e=new Date;this.currentHour=e.getHours(),this.currentMinute=e.getMinutes(),this.currentHour<10&&(this.currentHour="0"+this.currentHour),this.currentMinute<10&&(this.currentMinute="0"+this.currentMinute)},1e3),console.log(this.currentActivity),this.activities[0]=this.currentActivity.activityName,this.suggestions=this.currentActivity.suggestions},computed:{...Zs(["count","currentActivity","currentRoutine","currentActivityIndex","currentRoutineIndex","appUserData"])},methods:{launchNextScreen(){this.$router.push("/addnewsuggestion")},del(t){this.appUserDataLocal=this.appUserData;const e=this.appUserDataLocal.data[this.currentRoutineIndex].activities[this.currentActivityIndex].suggestions[t];if(confirm(`Are you sure, ${e}?`)){console.log("222222",this.appUserDataLocal),this.appUserDataLocal.data[this.currentRoutineIndex].activities[this.currentActivityIndex].suggestions.splice(t,1),console.log("1222222222",this.appUserDataLocal);const s=Ze().currentUser.uid,r=Ze().currentUser.email;cr(cs(us,s,r),this.appUserDataLocal).then(i=>{}).catch(i=>{console.log("12333",i)})}}}},wR=t=>(id("data-v-5d9732d6"),t=t(),od(),t),ER={class:"suggestions wrapper"},IR={class:"suggestions-info-container"},TR={class:"suggestions-info"},bR={class:"suggestions-name"},SR={class:"suggestions-time"},CR={class:"current-time"},AR={class:"pills-container first-pills-container"},RR={class:"text-container"},kR=wR(()=>B("div",{class:"first-text"}," suggestions ",-1)),NR={class:"pills-container second-pills-container"};function DR(t,e,n,s,r,i){const o=Bt("Banner"),a=Bt("pill");return he(),we("div",ER,[Se(o,{centerText:"feynman"}),B("div",IR,[B("div",TR,[B("div",bR,dt(t.currentRoutine.routineName),1),B("div",SR,dt(t.currentRoutine.routineStartTime)+" - "+dt(t.currentRoutine.routineEndTime),1)]),B("div",CR,dt(r.currentHour)+":"+dt(r.currentMinute),1)]),B("div",AR,[(he(!0),we(Fe,null,Sn(r.activities,c=>(he(),we("div",{key:c},[Se(a,{class:"pill-container",text:c,color:"#2C3C5B",width:"350px",textSize:"20px",textColor:"#ffffff",display:"block",height:"73px",alignment:"flex-start"},null,8,["text"])]))),128))]),B("div",RR,[kR,B("div",{onClick:e[0]||(e[0]=(...c)=>i.launchNextScreen&&i.launchNextScreen(...c)),class:"second-text"}," add new ")]),B("div",NR,[(he(!0),we(Fe,null,Sn(r.suggestions,(c,u)=>(he(),we("div",{key:c},[Se(a,{class:"pill-container",text:c,color:"#0AC5A8",width:"350px",textSize:"20px",textColor:"#ffffff",display:"block",height:"73px",alignment:"flex-start",onClick:l=>i.del(u)},null,8,["text","onClick"])]))),128))])])}var OR=qt(_R,[["render",DR],["__scopeId","data-v-5d9732d6"]]);const xR={props:{centerText:String},data(){return{activities:["one"],newSuggestion:"",appUserDataLocal:{}}},created(){this.activities[0]=this.currentActivity.activityName},computed:{...Zs(["currentActivity","currentRoutine","currentActivityIndex","currentRoutineIndex","appUserData"])},components:{Pill:Si},methods:{...ei({setCurrentActivity:"SET_CURRENT_ACTIVITY",setAppUserData:"SET_APP_USER_DATA",setCurrentRoutine:"SET_CURRENT_ROUTINE"}),add(){this.appUserDataLocal=this.appUserData,console.log("222222",this.appUserDataLocal),this.appUserDataLocal.data[this.currentRoutineIndex].activities[this.currentActivityIndex].suggestions.push(this.newSuggestion),console.log("1222222222",this.appUserDataLocal);const t=Ze().currentUser.uid,e=Ze().currentUser.email;cr(cs(us,t,e),this.appUserDataLocal).then(n=>{this.$router.go(-1)}).catch(n=>{console.log("12333",n)})}}},PR={class:"addnewsuggestion wrapper"},MR={class:"first-pills-container pills-container"},LR={class:"text-box"},UR={class:"pills-container"};function FR(t,e,n,s,r,i){const o=Bt("pill");return he(),we("div",PR,[B("div",MR,[(he(!0),we(Fe,null,Sn(r.activities,a=>(he(),we("div",{key:a},[Se(o,{class:"pill-container",text:a,color:"#2C3C5B",width:"350px",textSize:"20px",textColor:"#ffffff",display:"block",height:"73px",alignment:"flex-start"},null,8,["text"])]))),128))]),B("div",LR,[Ps(B("textarea",{"onUpdate:modelValue":e[0]||(e[0]=a=>r.newSuggestion=a),name:"comment"},"Enter text here...",512),[[Ls,r.newSuggestion]])]),B("div",UR,[(he(!0),we(Fe,null,Sn(r.activities,a=>(he(),we("div",{key:a},[Se(o,{class:"pill-container",text:"ADD",color:"#2C3C5B",width:"150px",textSize:"20px",textColor:"#ffffff",display:"block",height:"73px",onClick:i.add},null,8,["onClick"])]))),128))])])}var VR=qt(xR,[["render",FR],["__scopeId","data-v-2db7620e"]]);const $R={props:{centerText:String},data(){return{activities:["one"],newSuggestion:"",appUserDataLocal:{}}},created(){this.activities[0]=this.currentRoutine.routineName,console.log("2222222222",this.currentRoutine)},computed:{...Zs(["currentActivity","currentRoutine","currentActivityIndex","currentRoutineIndex","appUserData"])},components:{Pill:Si},methods:{...ei({setCurrentActivity:"SET_CURRENT_ACTIVITY",setAppUserData:"SET_APP_USER_DATA",setCurrentRoutine:"SET_CURRENT_ROUTINE"}),add(){this.appUserDataLocal=this.appUserData,console.log("222222",this.appUserDataLocal),this.appUserDataLocal.data[this.currentRoutineIndex].activities.push({activityName:this.newSuggestion,suggestions:[]}),console.log("1222222222",this.appUserDataLocal);const t=Ze().currentUser.uid,e=Ze().currentUser.email;cr(cs(us,t,e),this.appUserDataLocal).then(n=>{this.$router.go(-1)}).catch(n=>{console.log("12333",n)})}}},BR={class:"addnewactivity wrapper"},jR={class:"first-pills-container pills-container"},HR={class:"text-box"},qR={class:"pills-container"};function KR(t,e,n,s,r,i){const o=Bt("pill");return he(),we("div",BR,[B("div",jR,[(he(!0),we(Fe,null,Sn(r.activities,a=>(he(),we("div",{key:a},[Se(o,{class:"pill-container",text:a,color:"#2C3C5B",width:"350px",textSize:"20px",textColor:"#ffffff",display:"block",height:"73px",alignment:"flex-start"},null,8,["text"])]))),128))]),B("div",HR,[Ps(B("textarea",{"onUpdate:modelValue":e[0]||(e[0]=a=>r.newSuggestion=a),name:"comment"},"Enter text here...",512),[[Ls,r.newSuggestion]])]),B("div",qR,[(he(!0),we(Fe,null,Sn(r.activities,a=>(he(),we("div",{key:a},[Se(o,{class:"pill-container",text:"ADD",color:"#2C3C5B",width:"150px",textSize:"20px",textColor:"#ffffff",display:"block",height:"73px",onClick:i.add},null,8,["onClick"])]))),128))])])}var zR=qt($R,[["render",KR],["__scopeId","data-v-6e3d3973"]]);const Zm=Yw({history:pw("/"),routes:[{path:"/login",name:"login",component:Af},{path:"/routine",name:"routine",component:vR,meta:{requiresAuth:!0}},{path:"/signup",name:"signup",component:aR},{path:"/dashboard",name:"dashboard",component:zA,meta:{requiresAuth:!0}},{path:"/suggestions",name:"suggestions",component:OR,meta:{requiresAuth:!0}},{path:"/addnewsuggestion",name:"addnewsuggestion",component:VR,meta:{requiresAuth:!0}},{path:"/addnewactivity",name:"addnewactivity",component:zR,meta:{requiresAuth:!0}},{path:"/",name:"login",component:Af}]});Zm.beforeEach((t,e,n)=>{let s=Ze().currentUser,r=t.matched.some(i=>i.meta.requiresAuth);r&&!s?(console.log("login"),n("/")):!r&&s?(console.log("dashboard"),n("dashboard")):(console.log("next"),n())});function WR(){return{count:0,appUserData:{},currentRoutine:{},currentActivity:{},currentRoutineIndex:null,currentActivityIndex:null}}let GR={SET_APP_USER_DATA(t,e){t.appUserData=e},SET_CURRENT_ROUTINE(t,e){t.currentRoutine=e.data,t.currentRoutineIndex=e.index},SET_CURRENT_ACTIVITY(t,e){t.currentActivity=e.data,t.currentActivityIndex=e.index}},QR={},XR={};var YR="firebase",JR="9.9.0";/**
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
 */In(YR,JR,"app");const ZR={apiKey:"AIzaSyCl0uq9NcTjSvcFUvf8pLkX3PubtlukP9A",authDomain:"feynman-s-pr.firebaseapp.com",projectId:"feynman-s-pr",storageBucket:"feynman-s-pr.appspot.com",messagingSenderId:"60527738925",appId:"1:60527738925:web:6cdbd10c5dd12ede40b8a4",measurementId:"G-GYJDZ09MPD"},ek=f0(ZR),us=hA(ek),tk=!0,nk="serviceWorker"in navigator&&tk;nk&&navigator.serviceWorker.register("/sw.js").then(()=>{console.log("Service Worker Registered!")});const ml=T_(eE),sk=Q_({state:WR,mutations:GR,actions:QR,getters:XR});ml.use(Zm);ml.use(sk);ml.mount("#app");
