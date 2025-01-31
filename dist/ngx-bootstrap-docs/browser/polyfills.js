"use strict";(self.webpackChunkngx_bootstrap_docs=self.webpackChunkngx_bootstrap_docs||[]).push([[461],{12798:(Q,J,le)=>{le(96935),le(68916)},68916:()=>{class Q{constructor(){this.name="TaskTrackingZone",this.microTasks=[],this.macroTasks=[],this.eventTasks=[],this.properties={TaskTrackingZone:this}}static get(){return Zone.current.get("TaskTrackingZone")}getTasksFor(ne){switch(ne){case"microTask":return this.microTasks;case"macroTask":return this.macroTasks;case"eventTask":return this.eventTasks}throw new Error("Unknown task format: "+ne)}onScheduleTask(ne,he,oe,W){return W.creationLocation=new Error(`Task '${W.type}' from '${W.source}'.`),this.getTasksFor(W.type).push(W),ne.scheduleTask(oe,W)}onCancelTask(ne,he,oe,W){const de=this.getTasksFor(W.type);for(let _e=0;_e<de.length;_e++)if(de[_e]==W){de.splice(_e,1);break}return ne.cancelTask(oe,W)}onInvokeTask(ne,he,oe,W,de,_e){if("eventTask"===W.type||W.data?.isPeriodic)return ne.invokeTask(oe,W,de,_e);const Pe=this.getTasksFor(W.type);for(let ye=0;ye<Pe.length;ye++)if(Pe[ye]==W){Pe.splice(ye,1);break}return ne.invokeTask(oe,W,de,_e)}clearEvents(){for(;this.eventTasks.length;)Zone.current.cancelTask(this.eventTasks[0])}}!function J(le){le.TaskTrackingZoneSpec=Q}(Zone)},96935:()=>{const Q=globalThis;function J(e){return(Q.__Zone_symbol_prefix||"__zone_symbol__")+e}const he=Object.getOwnPropertyDescriptor,oe=Object.defineProperty,W=Object.getPrototypeOf,de=Object.create,_e=Array.prototype.slice,Pe="addEventListener",ye="removeEventListener",He=J(Pe),xe=J(ye),Te="true",Ee="false",Oe=J("");function Fe(e,r){return Zone.current.wrap(e,r)}function Ve(e,r,c,t,i){return Zone.current.scheduleMacroTask(e,r,c,t,i)}const j=J,Ie=typeof window<"u",we=Ie?window:void 0,K=Ie&&we||globalThis;function Be(e,r){for(let c=e.length-1;c>=0;c--)"function"==typeof e[c]&&(e[c]=Fe(e[c],r+"_"+c));return e}function qe(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const Ye=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Me=!("nw"in K)&&typeof K.process<"u"&&"[object process]"===K.process.toString(),Ge=!Me&&!Ye&&!(!Ie||!we.HTMLElement),$e=typeof K.process<"u"&&"[object process]"===K.process.toString()&&!Ye&&!(!Ie||!we.HTMLElement),Ze={},kt=j("enable_beforeunload"),Ke=function(e){if(!(e=e||K.event))return;let r=Ze[e.type];r||(r=Ze[e.type]=j("ON_PROPERTY"+e.type));const c=this||e.target||K,t=c[r];let i;return Ge&&c===we&&"error"===e.type?(i=t&&t.call(this,e.message,e.filename,e.lineno,e.colno,e.error),!0===i&&e.preventDefault()):(i=t&&t.apply(this,arguments),"beforeunload"===e.type&&K[kt]&&"string"==typeof i?e.returnValue=i:null!=i&&!i&&e.preventDefault()),i};function Je(e,r,c){let t=he(e,r);if(!t&&c&&he(c,r)&&(t={enumerable:!0,configurable:!0}),!t||!t.configurable)return;const i=j("on"+r+"patched");if(e.hasOwnProperty(i)&&e[i])return;delete t.writable,delete t.value;const u=t.get,T=t.set,E=r.slice(2);let m=Ze[E];m||(m=Ze[E]=j("ON_PROPERTY"+E)),t.set=function(D){let d=this;!d&&e===K&&(d=K),d&&("function"==typeof d[m]&&d.removeEventListener(E,Ke),T&&T.call(d,null),d[m]=D,"function"==typeof D&&d.addEventListener(E,Ke,!1))},t.get=function(){let D=this;if(!D&&e===K&&(D=K),!D)return null;const d=D[m];if(d)return d;if(u){let w=u.call(this);if(w)return t.set.call(this,w),"function"==typeof D.removeAttribute&&D.removeAttribute(r),w}return null},oe(e,r,t),e[i]=!0}function Qe(e,r,c){if(r)for(let t=0;t<r.length;t++)Je(e,"on"+r[t],c);else{const t=[];for(const i in e)"on"==i.slice(0,2)&&t.push(i);for(let i=0;i<t.length;i++)Je(e,t[i],c)}}const ie=j("originalInstance");function Ne(e){const r=K[e];if(!r)return;K[j(e)]=r,K[e]=function(){const i=Be(arguments,e);switch(i.length){case 0:this[ie]=new r;break;case 1:this[ie]=new r(i[0]);break;case 2:this[ie]=new r(i[0],i[1]);break;case 3:this[ie]=new r(i[0],i[1],i[2]);break;case 4:this[ie]=new r(i[0],i[1],i[2],i[3]);break;default:throw new Error("Arg list too long.")}},ke(K[e],r);const c=new r(function(){});let t;for(t in c)"XMLHttpRequest"===e&&"responseBlob"===t||function(i){"function"==typeof c[i]?K[e].prototype[i]=function(){return this[ie][i].apply(this[ie],arguments)}:oe(K[e].prototype,i,{set:function(u){"function"==typeof u?(this[ie][i]=Fe(u,e+"."+i),ke(this[ie][i],u)):this[ie][i]=u},get:function(){return this[ie][i]}})}(t);for(t in r)"prototype"!==t&&r.hasOwnProperty(t)&&(K[e][t]=r[t])}function ge(e,r,c){let t=e;for(;t&&!t.hasOwnProperty(r);)t=W(t);!t&&e[r]&&(t=e);const i=j(r);let u=null;if(t&&(!(u=t[i])||!t.hasOwnProperty(i))&&(u=t[i]=t[r],qe(t&&he(t,r)))){const E=c(u,i,r);t[r]=function(){return E(this,arguments)},ke(t[r],u)}return u}function mt(e,r,c){let t=null;function i(u){const T=u.data;return T.args[T.cbIdx]=function(){u.invoke.apply(this,arguments)},t.apply(T.target,T.args),u}t=ge(e,r,u=>function(T,E){const m=c(T,E);return m.cbIdx>=0&&"function"==typeof E[m.cbIdx]?Ve(m.name,E[m.cbIdx],m,i):u.apply(T,E)})}function ke(e,r){e[j("OriginalDelegate")]=r}let et=!1,Ue=!1;function yt(){if(et)return Ue;et=!0;try{const e=we.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(Ue=!0)}catch{}return Ue}function tt(e){return"function"==typeof e}function nt(e){return"number"==typeof e}let Re=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){Re=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{Re=!1}const vt={useG:!0},se={},rt={},ot=new RegExp("^"+Oe+"(\\w+)(true|false)$"),st=j("propagationStopped");function it(e,r){const c=(r?r(e):e)+Ee,t=(r?r(e):e)+Te,i=Oe+c,u=Oe+t;se[e]={},se[e][Ee]=i,se[e][Te]=u}function bt(e,r,c,t){const i=t&&t.add||Pe,u=t&&t.rm||ye,T=t&&t.listeners||"eventListeners",E=t&&t.rmAll||"removeAllListeners",m=j(i),D="."+i+":",d="prependListener",w="."+d+":",Z=function(y,h,H){if(y.isRemoved)return;const F=y.callback;let $;"object"==typeof F&&F.handleEvent&&(y.callback=g=>F.handleEvent(g),y.originalDelegate=F);try{y.invoke(y,h,[H])}catch(g){$=g}const V=y.options;return V&&"object"==typeof V&&V.once&&h[u].call(h,H.type,y.originalDelegate?y.originalDelegate:y.callback,V),$};function x(y,h,H){if(!(h=h||e.event))return;const F=y||h.target||e,$=F[se[h.type][H?Te:Ee]];if($){const V=[];if(1===$.length){const g=Z($[0],F,h);g&&V.push(g)}else{const g=$.slice();for(let z=0;z<g.length&&(!h||!0!==h[st]);z++){const O=Z(g[z],F,h);O&&V.push(O)}}if(1===V.length)throw V[0];for(let g=0;g<V.length;g++){const z=V[g];r.nativeScheduleMicroTask(()=>{throw z})}}}const U=function(y){return x(this,y,!1)},ee=function(y){return x(this,y,!0)};function te(y,h){if(!y)return!1;let H=!0;h&&void 0!==h.useG&&(H=h.useG);const F=h&&h.vh;let $=!0;h&&void 0!==h.chkDup&&($=h.chkDup);let V=!1;h&&void 0!==h.rt&&(V=h.rt);let g=y;for(;g&&!g.hasOwnProperty(i);)g=W(g);if(!g&&y[i]&&(g=y),!g||g[m])return!1;const z=h&&h.eventNameToString,O={},R=g[m]=g[i],b=g[j(u)]=g[u],S=g[j(T)]=g[T],re=g[j(E)]=g[E];let X;h&&h.prepend&&(X=g[j(h.prepend)]=g[h.prepend]);const q=H?function(s){if(!O.isExisting)return R.call(O.target,O.eventName,O.capture?ee:U,O.options)}:function(s){return R.call(O.target,O.eventName,s.invoke,O.options)},A=H?function(s){if(!s.isRemoved){const l=se[s.eventName];let v;l&&(v=l[s.capture?Te:Ee]);const C=v&&s.target[v];if(C)for(let k=0;k<C.length;k++)if(C[k]===s){C.splice(k,1),s.isRemoved=!0,s.removeAbortListener&&(s.removeAbortListener(),s.removeAbortListener=null),0===C.length&&(s.allRemoved=!0,s.target[v]=null);break}}if(s.allRemoved)return b.call(s.target,s.eventName,s.capture?ee:U,s.options)}:function(s){return b.call(s.target,s.eventName,s.invoke,s.options)},me=h&&h.diff?h.diff:function(s,l){const v=typeof l;return"function"===v&&s.callback===l||"object"===v&&s.originalDelegate===l},pe=Zone[j("UNPATCHED_EVENTS")],ce=e[j("PASSIVE_EVENTS")],a=function(s,l,v,C,k=!1,L=!1){return function(){const I=this||e;let M=arguments[0];h&&h.transferEventName&&(M=h.transferEventName(M));let B=arguments[1];if(!B)return s.apply(this,arguments);if(Me&&"uncaughtException"===M)return s.apply(this,arguments);let G=!1;if("function"!=typeof B){if(!B.handleEvent)return s.apply(this,arguments);G=!0}if(F&&!F(s,B,I,arguments))return;const be=Re&&!!ce&&-1!==ce.indexOf(M),ue=function f(s){if("object"==typeof s&&null!==s){const l={...s};return s.signal&&(l.signal=s.signal),l}return s}(function N(s,l){return!Re&&"object"==typeof s&&s?!!s.capture:Re&&l?"boolean"==typeof s?{capture:s,passive:!0}:s?"object"==typeof s&&!1!==s.passive?{...s,passive:!0}:s:{passive:!0}:s}(arguments[2],be)),De=ue?.signal;if(De?.aborted)return;if(pe)for(let fe=0;fe<pe.length;fe++)if(M===pe[fe])return be?s.call(I,M,B,ue):s.apply(this,arguments);const We=!!ue&&("boolean"==typeof ue||ue.capture),ft=!(!ue||"object"!=typeof ue)&&ue.once,At=Zone.current;let Xe=se[M];Xe||(it(M,z),Xe=se[M]);const ht=Xe[We?Te:Ee];let je,Se=I[ht],dt=!1;if(Se){if(dt=!0,$)for(let fe=0;fe<Se.length;fe++)if(me(Se[fe],B))return}else Se=I[ht]=[];const _t=I.constructor.name,Tt=rt[_t];Tt&&(je=Tt[M]),je||(je=_t+l+(z?z(M):M)),O.options=ue,ft&&(O.options.once=!1),O.target=I,O.capture=We,O.eventName=M,O.isExisting=dt;const Le=H?vt:void 0;Le&&(Le.taskData=O),De&&(O.options.signal=void 0);const ae=At.scheduleEventTask(je,B,Le,v,C);if(De){O.options.signal=De;const fe=()=>ae.zone.cancelTask(ae);s.call(De,"abort",fe,{once:!0}),ae.removeAbortListener=()=>De.removeEventListener("abort",fe)}return O.target=null,Le&&(Le.taskData=null),ft&&(O.options.once=!0),!Re&&"boolean"==typeof ae.options||(ae.options=ue),ae.target=I,ae.capture=We,ae.eventName=M,G&&(ae.originalDelegate=B),L?Se.unshift(ae):Se.push(ae),k?I:void 0}};return g[i]=a(R,D,q,A,V),X&&(g[d]=a(X,w,function(s){return X.call(O.target,O.eventName,s.invoke,O.options)},A,V,!0)),g[u]=function(){const s=this||e;let l=arguments[0];h&&h.transferEventName&&(l=h.transferEventName(l));const v=arguments[2],C=!!v&&("boolean"==typeof v||v.capture),k=arguments[1];if(!k)return b.apply(this,arguments);if(F&&!F(b,k,s,arguments))return;const L=se[l];let I;L&&(I=L[C?Te:Ee]);const M=I&&s[I];if(M)for(let B=0;B<M.length;B++){const G=M[B];if(me(G,k))return M.splice(B,1),G.isRemoved=!0,0!==M.length||(G.allRemoved=!0,s[I]=null,C||"string"!=typeof l)||(s[Oe+"ON_PROPERTY"+l]=null),G.zone.cancelTask(G),V?s:void 0}return b.apply(this,arguments)},g[T]=function(){const s=this||e;let l=arguments[0];h&&h.transferEventName&&(l=h.transferEventName(l));const v=[],C=ct(s,z?z(l):l);for(let k=0;k<C.length;k++){const L=C[k];v.push(L.originalDelegate?L.originalDelegate:L.callback)}return v},g[E]=function(){const s=this||e;let l=arguments[0];if(l){h&&h.transferEventName&&(l=h.transferEventName(l));const v=se[l];if(v){const L=s[v[Ee]],I=s[v[Te]];if(L){const M=L.slice();for(let B=0;B<M.length;B++){const G=M[B];this[u].call(this,l,G.originalDelegate?G.originalDelegate:G.callback,G.options)}}if(I){const M=I.slice();for(let B=0;B<M.length;B++){const G=M[B];this[u].call(this,l,G.originalDelegate?G.originalDelegate:G.callback,G.options)}}}}else{const v=Object.keys(s);for(let C=0;C<v.length;C++){const L=ot.exec(v[C]);let I=L&&L[1];I&&"removeListener"!==I&&this[E].call(this,I)}this[E].call(this,"removeListener")}if(V)return this},ke(g[i],R),ke(g[u],b),re&&ke(g[E],re),S&&ke(g[T],S),!0}let Y=[];for(let y=0;y<c.length;y++)Y[y]=te(c[y],t);return Y}function ct(e,r){if(!r){const u=[];for(let T in e){const E=ot.exec(T);let m=E&&E[1];if(m&&(!r||m===r)){const D=e[T];if(D)for(let d=0;d<D.length;d++)u.push(D[d])}}return u}let c=se[r];c||(it(r),c=se[r]);const t=e[c[Ee]],i=e[c[Te]];return t?i?t.concat(i):t.slice():i?i.slice():[]}function Pt(e,r){const c=e.Event;c&&c.prototype&&r.patchMethod(c.prototype,"stopImmediatePropagation",t=>function(i,u){i[st]=!0,t&&t.apply(i,u)})}const Ae=j("zoneTask");function Ce(e,r,c,t){let i=null,u=null;c+=t;const T={};function E(D){const d=D.data;d.args[0]=function(){return D.invoke.apply(this,arguments)};const w=i.apply(e,d.args);return nt(w)?d.handleId=w:(d.handle=w,d.isRefreshable=tt(w.refresh)),D}function m(D){const{handle:d,handleId:w}=D.data;return u.call(e,d??w)}i=ge(e,r+=t,D=>function(d,w){if(tt(w[0])){const Z={isRefreshable:!1,isPeriodic:"Interval"===t,delay:"Timeout"===t||"Interval"===t?w[1]||0:void 0,args:w},x=w[0];w[0]=function(){try{return x.apply(this,arguments)}finally{const{handle:H,handleId:F,isPeriodic:$,isRefreshable:V}=Z;!$&&!V&&(F?delete T[F]:H&&(H[Ae]=null))}};const U=Ve(r,w[0],Z,E,m);if(!U)return U;const{handleId:ee,handle:te,isRefreshable:Y,isPeriodic:y}=U.data;if(ee)T[ee]=U;else if(te&&(te[Ae]=U,Y&&!y)){const h=te.refresh;te.refresh=function(){const{zone:H,state:F}=U;return"notScheduled"===F?(U._state="scheduled",H._updateTaskCount(U,1)):"running"===F&&(U._state="scheduling"),h.call(this)}}return te??ee??U}return D.apply(e,w)}),u=ge(e,c,D=>function(d,w){const Z=w[0];let x;nt(Z)?(x=T[Z],delete T[Z]):(x=Z?.[Ae],x?Z[Ae]=null:x=Z),x?.type?x.cancelFn&&x.zone.cancelTask(x):D.apply(e,w)})}function at(e,r,c){if(!c||0===c.length)return r;const t=c.filter(u=>u.target===e);if(!t||0===t.length)return r;const i=t[0].ignoreProperties;return r.filter(u=>-1===i.indexOf(u))}function lt(e,r,c,t){e&&Qe(e,at(e,r,c),t)}function ze(e){return Object.getOwnPropertyNames(e).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function It(e,r,c,t,i){const u=Zone.__symbol__(t);if(r[u])return;const T=r[u]=r[t];r[t]=function(E,m,D){return m&&m.prototype&&i.forEach(function(d){const w=`${c}.${t}::`+d,Z=m.prototype;try{if(Z.hasOwnProperty(d)){const x=e.ObjectGetOwnPropertyDescriptor(Z,d);x&&x.value?(x.value=e.wrapWithCurrentZone(x.value,w),e._redefineProperty(m.prototype,d,x)):Z[d]&&(Z[d]=e.wrapWithCurrentZone(Z[d],w))}else Z[d]&&(Z[d]=e.wrapWithCurrentZone(Z[d],w))}catch{}}),T.call(r,E,m,D)},e.attachOriginToPatched(r[t],T)}const ut=function ne(){const e=globalThis,r=!0===e[J("forceDuplicateZoneCheck")];if(e.Zone&&(r||"function"!=typeof e.Zone.__symbol__))throw new Error("Zone already loaded.");return e.Zone??=function le(){const e=Q.performance;function r(N){e&&e.mark&&e.mark(N)}function c(N,_){e&&e.measure&&e.measure(N,_)}r("Zone");let t=(()=>{class N{static{this.__symbol__=J}static assertZonePatched(){if(Q.Promise!==O.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let n=N.current;for(;n.parent;)n=n.parent;return n}static get current(){return b.zone}static get currentTask(){return S}static __load_patch(n,o,p=!1){if(O.hasOwnProperty(n)){const P=!0===Q[J("forceDuplicateZoneCheck")];if(!p&&P)throw Error("Already loaded patch: "+n)}else if(!Q["__Zone_disable_"+n]){const P="Zone:"+n;r(P),O[n]=o(Q,N,R),c(P,P)}}get parent(){return this._parent}get name(){return this._name}constructor(n,o){this._parent=n,this._name=o?o.name||"unnamed":"<root>",this._properties=o&&o.properties||{},this._zoneDelegate=new u(this,this._parent&&this._parent._zoneDelegate,o)}get(n){const o=this.getZoneWith(n);if(o)return o._properties[n]}getZoneWith(n){let o=this;for(;o;){if(o._properties.hasOwnProperty(n))return o;o=o._parent}return null}fork(n){if(!n)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,n)}wrap(n,o){if("function"!=typeof n)throw new Error("Expecting function got: "+n);const p=this._zoneDelegate.intercept(this,n,o),P=this;return function(){return P.runGuarded(p,this,arguments,o)}}run(n,o,p,P){b={parent:b,zone:this};try{return this._zoneDelegate.invoke(this,n,o,p,P)}finally{b=b.parent}}runGuarded(n,o=null,p,P){b={parent:b,zone:this};try{try{return this._zoneDelegate.invoke(this,n,o,p,P)}catch(q){if(this._zoneDelegate.handleError(this,q))throw q}}finally{b=b.parent}}runTask(n,o,p){if(n.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(n.zone||te).name+"; Execution: "+this.name+")");const P=n,{type:q,data:{isPeriodic:A=!1,isRefreshable:ve=!1}={}}=n;if(n.state===Y&&(q===z||q===g))return;const me=n.state!=H;me&&P._transitionTo(H,h);const pe=S;S=P,b={parent:b,zone:this};try{q==g&&n.data&&!A&&!ve&&(n.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,P,o,p)}catch(ce){if(this._zoneDelegate.handleError(this,ce))throw ce}}finally{const ce=n.state;if(ce!==Y&&ce!==$)if(q==z||A||ve&&ce===y)me&&P._transitionTo(h,H,y);else{const f=P._zoneDelegates;this._updateTaskCount(P,-1),me&&P._transitionTo(Y,H,Y),ve&&(P._zoneDelegates=f)}b=b.parent,S=pe}}scheduleTask(n){if(n.zone&&n.zone!==this){let p=this;for(;p;){if(p===n.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${n.zone.name}`);p=p.parent}}n._transitionTo(y,Y);const o=[];n._zoneDelegates=o,n._zone=this;try{n=this._zoneDelegate.scheduleTask(this,n)}catch(p){throw n._transitionTo($,y,Y),this._zoneDelegate.handleError(this,p),p}return n._zoneDelegates===o&&this._updateTaskCount(n,1),n.state==y&&n._transitionTo(h,y),n}scheduleMicroTask(n,o,p,P){return this.scheduleTask(new T(V,n,o,p,P,void 0))}scheduleMacroTask(n,o,p,P,q){return this.scheduleTask(new T(g,n,o,p,P,q))}scheduleEventTask(n,o,p,P,q){return this.scheduleTask(new T(z,n,o,p,P,q))}cancelTask(n){if(n.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(n.zone||te).name+"; Execution: "+this.name+")");if(n.state===h||n.state===H){n._transitionTo(F,h,H);try{this._zoneDelegate.cancelTask(this,n)}catch(o){throw n._transitionTo($,F),this._zoneDelegate.handleError(this,o),o}return this._updateTaskCount(n,-1),n._transitionTo(Y,F),n.runCount=-1,n}}_updateTaskCount(n,o){const p=n._zoneDelegates;-1==o&&(n._zoneDelegates=null);for(let P=0;P<p.length;P++)p[P]._updateTaskCount(n.type,o)}}return N})();const i={name:"",onHasTask:(N,_,n,o)=>N.hasTask(n,o),onScheduleTask:(N,_,n,o)=>N.scheduleTask(n,o),onInvokeTask:(N,_,n,o,p,P)=>N.invokeTask(n,o,p,P),onCancelTask:(N,_,n,o)=>N.cancelTask(n,o)};class u{get zone(){return this._zone}constructor(_,n,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=_,this._parentDelegate=n,this._forkZS=o&&(o&&o.onFork?o:n._forkZS),this._forkDlgt=o&&(o.onFork?n:n._forkDlgt),this._forkCurrZone=o&&(o.onFork?this._zone:n._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:n._interceptZS),this._interceptDlgt=o&&(o.onIntercept?n:n._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this._zone:n._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:n._invokeZS),this._invokeDlgt=o&&(o.onInvoke?n:n._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this._zone:n._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:n._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?n:n._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this._zone:n._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:n._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?n:n._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this._zone:n._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:n._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?n:n._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this._zone:n._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:n._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?n:n._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this._zone:n._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const p=o&&o.onHasTask;(p||n&&n._hasTaskZS)&&(this._hasTaskZS=p?o:i,this._hasTaskDlgt=n,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,o.onScheduleTask||(this._scheduleTaskZS=i,this._scheduleTaskDlgt=n,this._scheduleTaskCurrZone=this._zone),o.onInvokeTask||(this._invokeTaskZS=i,this._invokeTaskDlgt=n,this._invokeTaskCurrZone=this._zone),o.onCancelTask||(this._cancelTaskZS=i,this._cancelTaskDlgt=n,this._cancelTaskCurrZone=this._zone))}fork(_,n){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,_,n):new t(_,n)}intercept(_,n,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,_,n,o):n}invoke(_,n,o,p,P){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,_,n,o,p,P):n.apply(o,p)}handleError(_,n){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,_,n)}scheduleTask(_,n){let o=n;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,_,n),o||(o=n);else if(n.scheduleFn)n.scheduleFn(n);else{if(n.type!=V)throw new Error("Task is missing scheduleFn.");U(n)}return o}invokeTask(_,n,o,p){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,_,n,o,p):n.callback.apply(o,p)}cancelTask(_,n){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,_,n);else{if(!n.cancelFn)throw Error("Task is not cancelable");o=n.cancelFn(n)}return o}hasTask(_,n){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,_,n)}catch(o){this.handleError(_,o)}}_updateTaskCount(_,n){const o=this._taskCounts,p=o[_],P=o[_]=p+n;if(P<0)throw new Error("More tasks executed then were scheduled.");0!=p&&0!=P||this.hasTask(this._zone,{microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:_})}}class T{constructor(_,n,o,p,P,q){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=_,this.source=n,this.data=p,this.scheduleFn=P,this.cancelFn=q,!o)throw new Error("callback is not defined");this.callback=o;const A=this;this.invoke=_===z&&p&&p.useG?T.invokeTask:function(){return T.invokeTask.call(Q,A,this,arguments)}}static invokeTask(_,n,o){_||(_=this),re++;try{return _.runCount++,_.zone.runTask(_,n,o)}finally{1==re&&ee(),re--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(Y,y)}_transitionTo(_,n,o){if(this._state!==n&&this._state!==o)throw new Error(`${this.type} '${this.source}': can not transition to '${_}', expecting state '${n}'${o?" or '"+o+"'":""}, was '${this._state}'.`);this._state=_,_==Y&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const E=J("setTimeout"),m=J("Promise"),D=J("then");let Z,d=[],w=!1;function x(N){if(Z||Q[m]&&(Z=Q[m].resolve(0)),Z){let _=Z[D];_||(_=Z.then),_.call(Z,N)}else Q[E](N,0)}function U(N){0===re&&0===d.length&&x(ee),N&&d.push(N)}function ee(){if(!w){for(w=!0;d.length;){const N=d;d=[];for(let _=0;_<N.length;_++){const n=N[_];try{n.zone.runTask(n,null,null)}catch(o){R.onUnhandledError(o)}}}R.microtaskDrainDone(),w=!1}}const te={name:"NO ZONE"},Y="notScheduled",y="scheduling",h="scheduled",H="running",F="canceling",$="unknown",V="microTask",g="macroTask",z="eventTask",O={},R={symbol:J,currentZoneFrame:()=>b,onUnhandledError:X,microtaskDrainDone:X,scheduleMicroTask:U,showUncaughtError:()=>!t[J("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:X,patchMethod:()=>X,bindArguments:()=>[],patchThen:()=>X,patchMacroTask:()=>X,patchEventPrototype:()=>X,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>X,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>X,wrapWithCurrentZone:()=>X,filterProperties:()=>[],attachOriginToPatched:()=>X,_redefineProperty:()=>X,patchCallbacks:()=>X,nativeScheduleMicroTask:x};let b={parent:null,zone:new t(null,null)},S=null,re=0;function X(){}return c("Zone","Zone"),t}(),e.Zone}();(function Zt(e){(function Nt(e){e.__load_patch("ZoneAwarePromise",(r,c,t)=>{const i=Object.getOwnPropertyDescriptor,u=Object.defineProperty,E=t.symbol,m=[],D=!1!==r[E("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],d=E("Promise"),w=E("then");t.onUnhandledError=f=>{if(t.showUncaughtError()){const a=f&&f.rejection;a?console.error("Unhandled Promise rejection:",a instanceof Error?a.message:a,"; Zone:",f.zone.name,"; Task:",f.task&&f.task.source,"; Value:",a,a instanceof Error?a.stack:void 0):console.error(f)}},t.microtaskDrainDone=()=>{for(;m.length;){const f=m.shift();try{f.zone.runGuarded(()=>{throw f.throwOriginal?f.rejection:f})}catch(a){U(a)}}};const x=E("unhandledPromiseRejectionHandler");function U(f){t.onUnhandledError(f);try{const a=c[x];"function"==typeof a&&a.call(this,f)}catch{}}function ee(f){return f&&f.then}function te(f){return f}function Y(f){return A.reject(f)}const y=E("state"),h=E("value"),H=E("finally"),F=E("parentPromiseValue"),$=E("parentPromiseState"),g=null,z=!0,O=!1;function b(f,a){return s=>{try{N(f,a,s)}catch(l){N(f,!1,l)}}}const S=function(){let f=!1;return function(s){return function(){f||(f=!0,s.apply(null,arguments))}}},re="Promise resolved with itself",X=E("currentTaskTrace");function N(f,a,s){const l=S();if(f===s)throw new TypeError(re);if(f[y]===g){let v=null;try{("object"==typeof s||"function"==typeof s)&&(v=s&&s.then)}catch(C){return l(()=>{N(f,!1,C)})(),f}if(a!==O&&s instanceof A&&s.hasOwnProperty(y)&&s.hasOwnProperty(h)&&s[y]!==g)n(s),N(f,s[y],s[h]);else if(a!==O&&"function"==typeof v)try{v.call(s,l(b(f,a)),l(b(f,!1)))}catch(C){l(()=>{N(f,!1,C)})()}else{f[y]=a;const C=f[h];if(f[h]=s,f[H]===H&&a===z&&(f[y]=f[$],f[h]=f[F]),a===O&&s instanceof Error){const k=c.currentTask&&c.currentTask.data&&c.currentTask.data.__creationTrace__;k&&u(s,X,{configurable:!0,enumerable:!1,writable:!0,value:k})}for(let k=0;k<C.length;)o(f,C[k++],C[k++],C[k++],C[k++]);if(0==C.length&&a==O){f[y]=0;let k=s;try{throw new Error("Uncaught (in promise): "+function T(f){return f&&f.toString===Object.prototype.toString?(f.constructor&&f.constructor.name||"")+": "+JSON.stringify(f):f?f.toString():Object.prototype.toString.call(f)}(s)+(s&&s.stack?"\n"+s.stack:""))}catch(L){k=L}D&&(k.throwOriginal=!0),k.rejection=s,k.promise=f,k.zone=c.current,k.task=c.currentTask,m.push(k),t.scheduleMicroTask()}}}return f}const _=E("rejectionHandledHandler");function n(f){if(0===f[y]){try{const a=c[_];a&&"function"==typeof a&&a.call(this,{rejection:f[h],promise:f})}catch{}f[y]=O;for(let a=0;a<m.length;a++)f===m[a].promise&&m.splice(a,1)}}function o(f,a,s,l,v){n(f);const C=f[y],k=C?"function"==typeof l?l:te:"function"==typeof v?v:Y;a.scheduleMicroTask("Promise.then",()=>{try{const L=f[h],I=!!s&&H===s[H];I&&(s[F]=L,s[$]=C);const M=a.run(k,void 0,I&&k!==Y&&k!==te?[]:[L]);N(s,!0,M)}catch(L){N(s,!1,L)}},s)}const P=function(){},q=r.AggregateError;class A{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(a){return a instanceof A?a:N(new this(null),z,a)}static reject(a){return N(new this(null),O,a)}static withResolvers(){const a={};return a.promise=new A((s,l)=>{a.resolve=s,a.reject=l}),a}static any(a){if(!a||"function"!=typeof a[Symbol.iterator])return Promise.reject(new q([],"All promises were rejected"));const s=[];let l=0;try{for(let k of a)l++,s.push(A.resolve(k))}catch{return Promise.reject(new q([],"All promises were rejected"))}if(0===l)return Promise.reject(new q([],"All promises were rejected"));let v=!1;const C=[];return new A((k,L)=>{for(let I=0;I<s.length;I++)s[I].then(M=>{v||(v=!0,k(M))},M=>{C.push(M),l--,0===l&&(v=!0,L(new q(C,"All promises were rejected")))})})}static race(a){let s,l,v=new this((L,I)=>{s=L,l=I});function C(L){s(L)}function k(L){l(L)}for(let L of a)ee(L)||(L=this.resolve(L)),L.then(C,k);return v}static all(a){return A.allWithCallback(a)}static allSettled(a){return(this&&this.prototype instanceof A?this:A).allWithCallback(a,{thenCallback:l=>({status:"fulfilled",value:l}),errorCallback:l=>({status:"rejected",reason:l})})}static allWithCallback(a,s){let l,v,C=new this((M,B)=>{l=M,v=B}),k=2,L=0;const I=[];for(let M of a){ee(M)||(M=this.resolve(M));const B=L;try{M.then(G=>{I[B]=s?s.thenCallback(G):G,k--,0===k&&l(I)},G=>{s?(I[B]=s.errorCallback(G),k--,0===k&&l(I)):v(G)})}catch(G){v(G)}k++,L++}return k-=2,0===k&&l(I),C}constructor(a){const s=this;if(!(s instanceof A))throw new Error("Must be an instanceof Promise.");s[y]=g,s[h]=[];try{const l=S();a&&a(l(b(s,z)),l(b(s,O)))}catch(l){N(s,!1,l)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return A}then(a,s){let l=this.constructor?.[Symbol.species];(!l||"function"!=typeof l)&&(l=this.constructor||A);const v=new l(P),C=c.current;return this[y]==g?this[h].push(C,v,a,s):o(this,C,v,a,s),v}catch(a){return this.then(null,a)}finally(a){let s=this.constructor?.[Symbol.species];(!s||"function"!=typeof s)&&(s=A);const l=new s(P);l[H]=H;const v=c.current;return this[y]==g?this[h].push(v,l,a,a):o(this,v,l,a,a),l}}A.resolve=A.resolve,A.reject=A.reject,A.race=A.race,A.all=A.all;const ve=r[d]=r.Promise;r.Promise=A;const me=E("thenPatched");function pe(f){const a=f.prototype,s=i(a,"then");if(s&&(!1===s.writable||!s.configurable))return;const l=a.then;a[w]=l,f.prototype.then=function(v,C){return new A((L,I)=>{l.call(this,L,I)}).then(v,C)},f[me]=!0}return t.patchThen=pe,ve&&(pe(ve),ge(r,"fetch",f=>function ce(f){return function(a,s){let l=f.apply(a,s);if(l instanceof A)return l;let v=l.constructor;return v[me]||pe(v),l}}(f))),Promise[c.__symbol__("uncaughtPromiseErrors")]=m,A})})(e),function Lt(e){e.__load_patch("toString",r=>{const c=Function.prototype.toString,t=j("OriginalDelegate"),i=j("Promise"),u=j("Error"),T=function(){if("function"==typeof this){const d=this[t];if(d)return"function"==typeof d?c.call(d):Object.prototype.toString.call(d);if(this===Promise){const w=r[i];if(w)return c.call(w)}if(this===Error){const w=r[u];if(w)return c.call(w)}}return c.call(this)};T[t]=c,Function.prototype.toString=T;const E=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":E.call(this)}})}(e),function Mt(e){e.__load_patch("util",(r,c,t)=>{const i=ze(r);t.patchOnProperties=Qe,t.patchMethod=ge,t.bindArguments=Be,t.patchMacroTask=mt;const u=c.__symbol__("BLACK_LISTED_EVENTS"),T=c.__symbol__("UNPATCHED_EVENTS");r[T]&&(r[u]=r[T]),r[u]&&(c[u]=c[T]=r[u]),t.patchEventPrototype=Pt,t.patchEventTarget=bt,t.isIEOrEdge=yt,t.ObjectDefineProperty=oe,t.ObjectGetOwnPropertyDescriptor=he,t.ObjectCreate=de,t.ArraySlice=_e,t.patchClass=Ne,t.wrapWithCurrentZone=Fe,t.filterProperties=at,t.attachOriginToPatched=ke,t._redefineProperty=Object.defineProperty,t.patchCallbacks=It,t.getGlobalObjects=()=>({globalSources:rt,zoneSymbolEventNames:se,eventNames:i,isBrowser:Ge,isMix:$e,isNode:Me,TRUE_STR:Te,FALSE_STR:Ee,ZONE_SYMBOL_PREFIX:Oe,ADD_EVENT_LISTENER_STR:Pe,REMOVE_EVENT_LISTENER_STR:ye})})}(e)})(ut),function Ot(e){e.__load_patch("legacy",r=>{const c=r[e.__symbol__("legacyPatch")];c&&c()}),e.__load_patch("timers",r=>{const c="set",t="clear";Ce(r,c,t,"Timeout"),Ce(r,c,t,"Interval"),Ce(r,c,t,"Immediate")}),e.__load_patch("requestAnimationFrame",r=>{Ce(r,"request","cancel","AnimationFrame"),Ce(r,"mozRequest","mozCancel","AnimationFrame"),Ce(r,"webkitRequest","webkitCancel","AnimationFrame")}),e.__load_patch("blocking",(r,c)=>{const t=["alert","prompt","confirm"];for(let i=0;i<t.length;i++)ge(r,t[i],(T,E,m)=>function(D,d){return c.current.run(T,r,d,m)})}),e.__load_patch("EventTarget",(r,c,t)=>{(function Dt(e,r){r.patchEventPrototype(e,r)})(r,t),function Ct(e,r){if(Zone[r.symbol("patchEventTarget")])return;const{eventNames:c,zoneSymbolEventNames:t,TRUE_STR:i,FALSE_STR:u,ZONE_SYMBOL_PREFIX:T}=r.getGlobalObjects();for(let m=0;m<c.length;m++){const D=c[m],Z=T+(D+u),x=T+(D+i);t[D]={},t[D][u]=Z,t[D][i]=x}const E=e.EventTarget;E&&E.prototype&&r.patchEventTarget(e,r,[E&&E.prototype])}(r,t);const i=r.XMLHttpRequestEventTarget;i&&i.prototype&&t.patchEventTarget(r,t,[i.prototype])}),e.__load_patch("MutationObserver",(r,c,t)=>{Ne("MutationObserver"),Ne("WebKitMutationObserver")}),e.__load_patch("IntersectionObserver",(r,c,t)=>{Ne("IntersectionObserver")}),e.__load_patch("FileReader",(r,c,t)=>{Ne("FileReader")}),e.__load_patch("on_property",(r,c,t)=>{!function St(e,r){if(Me&&!$e||Zone[e.symbol("patchEvents")])return;const c=r.__Zone_ignore_on_properties;let t=[];if(Ge){const i=window;t=t.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const u=function pt(){try{const e=we.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:i,ignoreProperties:["error"]}]:[];lt(i,ze(i),c&&c.concat(u),W(i))}t=t.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let i=0;i<t.length;i++){const u=r[t[i]];u&&u.prototype&&lt(u.prototype,ze(u.prototype),c)}}(t,r)}),e.__load_patch("customElements",(r,c,t)=>{!function Rt(e,r){const{isBrowser:c,isMix:t}=r.getGlobalObjects();(c||t)&&e.customElements&&"customElements"in e&&r.patchCallbacks(r,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"])}(r,t)}),e.__load_patch("XHR",(r,c)=>{!function D(d){const w=d.XMLHttpRequest;if(!w)return;const Z=w.prototype;let U=Z[He],ee=Z[xe];if(!U){const R=d.XMLHttpRequestEventTarget;if(R){const b=R.prototype;U=b[He],ee=b[xe]}}const te="readystatechange",Y="scheduled";function y(R){const b=R.data,S=b.target;S[T]=!1,S[m]=!1;const re=S[u];U||(U=S[He],ee=S[xe]),re&&ee.call(S,te,re);const X=S[u]=()=>{if(S.readyState===S.DONE)if(!b.aborted&&S[T]&&R.state===Y){const _=S[c.__symbol__("loadfalse")];if(0!==S.status&&_&&_.length>0){const n=R.invoke;R.invoke=function(){const o=S[c.__symbol__("loadfalse")];for(let p=0;p<o.length;p++)o[p]===R&&o.splice(p,1);!b.aborted&&R.state===Y&&n.call(R)},_.push(R)}else R.invoke()}else!b.aborted&&!1===S[T]&&(S[m]=!0)};return U.call(S,te,X),S[t]||(S[t]=R),z.apply(S,b.args),S[T]=!0,R}function h(){}function H(R){const b=R.data;return b.aborted=!0,O.apply(b.target,b.args)}const F=ge(Z,"open",()=>function(R,b){return R[i]=0==b[2],R[E]=b[1],F.apply(R,b)}),V=j("fetchTaskAborting"),g=j("fetchTaskScheduling"),z=ge(Z,"send",()=>function(R,b){if(!0===c.current[g]||R[i])return z.apply(R,b);{const S={target:R,url:R[E],isPeriodic:!1,args:b,aborted:!1},re=Ve("XMLHttpRequest.send",h,S,y,H);R&&!0===R[m]&&!S.aborted&&re.state===Y&&re.invoke()}}),O=ge(Z,"abort",()=>function(R,b){const S=function x(R){return R[t]}(R);if(S&&"string"==typeof S.type){if(null==S.cancelFn||S.data&&S.data.aborted)return;S.zone.cancelTask(S)}else if(!0===c.current[V])return O.apply(R,b)})}(r);const t=j("xhrTask"),i=j("xhrSync"),u=j("xhrListener"),T=j("xhrScheduled"),E=j("xhrURL"),m=j("xhrErrorBeforeScheduled")}),e.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&function gt(e,r){const c=e.constructor.name;for(let t=0;t<r.length;t++){const i=r[t],u=e[i];if(u){if(!qe(he(e,i)))continue;e[i]=(E=>{const m=function(){return E.apply(this,Be(arguments,c+"."+i))};return ke(m,E),m})(u)}}}(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),e.__load_patch("PromiseRejectionEvent",(r,c)=>{function t(i){return function(u){ct(r,i).forEach(E=>{const m=r.PromiseRejectionEvent;if(m){const D=new m(i,{promise:u.promise,reason:u.rejection});E.invoke(D)}})}}r.PromiseRejectionEvent&&(c[j("unhandledPromiseRejectionHandler")]=t("unhandledrejection"),c[j("rejectionHandledHandler")]=t("rejectionhandled"))}),e.__load_patch("queueMicrotask",(r,c,t)=>{!function wt(e,r){r.patchMethod(e,"queueMicrotask",c=>function(t,i){Zone.current.scheduleMicroTask("queueMicrotask",i[0])})}(r,t)})}(ut)}},Q=>{Q(Q.s=12798)}]);