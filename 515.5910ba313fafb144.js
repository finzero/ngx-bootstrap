"use strict";(self.webpackChunkngx_bootstrap_docs=self.webpackChunkngx_bootstrap_docs||[]).push([[515],{32515:(c,i,t)=>{t.r(i),t.d(i,{DemoTimepickerModule:()=>Z,TimepickerSectionComponent:()=>U});var s=t(60177),a=t(84341),j=t(21144),h=t(57740),T=t(37472),e=t(54438),d=t(34156);let g=(()=>{class o{constructor(){this.mytime=new Date}static#e=this.\u0275fac=function(r){return new(r||o)};static#n=this.\u0275cmp=e.VBU({type:o,selectors:[["demo-timepicker-basic"]],decls:3,vars:2,consts:[[3,"ngModelChange","ngModel"],[1,"alert","alert-info"]],template:function(r,n){1&r&&(e.j41(0,"timepicker",0),e.mxI("ngModelChange",function(m){return e.DH7(n.mytime,m)||(n.mytime=m),m}),e.k0s(),e.j41(1,"pre",1),e.EFF(2),e.k0s()),2&r&&(e.R50("ngModel",n.mytime),e.R7$(2),e.SpI("Time is: ",n.mytime,""))},dependencies:[a.BC,a.vS,d.n],encapsulation:2})}return o})(),f=(()=>{class o{constructor(){this.ismeridian=!0,this.mytime=new Date}toggleMode(){this.ismeridian=!this.ismeridian}static#e=this.\u0275fac=function(r){return new(r||o)};static#n=this.\u0275cmp=e.VBU({type:o,selectors:[["demo-timepicker-meridian"]],decls:6,vars:3,consts:[[3,"ngModelChange","ngModel","showMeridian"],[1,"alert","alert-info"],["type","button",1,"btn","btn-info",3,"click"]],template:function(r,n){1&r&&(e.j41(0,"timepicker",0),e.mxI("ngModelChange",function(m){return e.DH7(n.mytime,m)||(n.mytime=m),m}),e.k0s(),e.j41(1,"pre",1),e.EFF(2),e.k0s(),e.nrm(3,"br"),e.j41(4,"button",2),e.bIt("click",function(){return n.toggleMode()}),e.EFF(5,"12H / 24H"),e.k0s()),2&r&&(e.R50("ngModel",n.mytime),e.Y8G("showMeridian",n.ismeridian),e.R7$(2),e.SpI("Time is: ",n.mytime,""))},dependencies:[a.BC,a.vS,d.n],encapsulation:2})}return o})(),C=(()=>{class o{constructor(){this.mytime=new Date,this.meridians=["AM(Midnight to Noon)","PM(Noon to Midnight)"]}static#e=this.\u0275fac=function(r){return new(r||o)};static#n=this.\u0275cmp=e.VBU({type:o,selectors:[["demo-timepicker-custom-meridian"]],decls:3,vars:3,consts:[[3,"ngModelChange","ngModel","meridians"],[1,"alert","alert-info"]],template:function(r,n){1&r&&(e.j41(0,"timepicker",0),e.mxI("ngModelChange",function(m){return e.DH7(n.mytime,m)||(n.mytime=m),m}),e.k0s(),e.j41(1,"pre",1),e.EFF(2),e.k0s()),2&r&&(e.R50("ngModel",n.mytime),e.Y8G("meridians",n.meridians),e.R7$(2),e.SpI("Time is: ",n.mytime,""))},dependencies:[a.BC,a.vS,d.n],encapsulation:2})}return o})(),y=(()=>{class o{constructor(){this.myTime=new Date,this.minTime=new Date,this.maxTime=new Date,this.minTime.setHours(8),this.minTime.setMinutes(0),this.maxTime.setHours(23),this.maxTime.setMinutes(55)}static#e=this.\u0275fac=function(r){return new(r||o)};static#n=this.\u0275cmp=e.VBU({type:o,selectors:[["demo-timepicker-min-max"]],decls:3,vars:4,consts:[[3,"ngModelChange","ngModel","min","max"],[1,"alert","alert-info"]],template:function(r,n){1&r&&(e.j41(0,"timepicker",0),e.mxI("ngModelChange",function(m){return e.DH7(n.myTime,m)||(n.myTime=m),m}),e.k0s(),e.j41(1,"pre",1),e.EFF(2),e.k0s()),2&r&&(e.R50("ngModel",n.myTime),e.Y8G("min",n.minTime)("max",n.maxTime),e.R7$(2),e.SpI("Time is: ",n.myTime,""))},dependencies:[a.BC,a.vS,d.n],encapsulation:2})}return o})(),k=(()=>{class o{constructor(){this.hoursPlaceholder="hh",this.minutesPlaceholder="mm",this.secondsPlaceholder="ss"}static#e=this.\u0275fac=function(r){return new(r||o)};static#n=this.\u0275cmp=e.VBU({type:o,selectors:[["demo-timepicker-placeholder"]],decls:1,vars:4,consts:[[3,"hoursPlaceholder","minutesPlaceholder","secondsPlaceholder","showSeconds"]],template:function(r,n){1&r&&e.nrm(0,"timepicker",0),2&r&&e.Y8G("hoursPlaceholder",n.hoursPlaceholder)("minutesPlaceholder",n.minutesPlaceholder)("secondsPlaceholder",n.secondsPlaceholder)("showSeconds",!0)},dependencies:[d.n],encapsulation:2})}return o})(),D=(()=>{class o{constructor(){this.myTime=new Date,this.showMin=!0,this.showSec=!0}toggleMinutes(){this.showMin=!this.showMin}toggleSeconds(){this.showSec=!this.showSec}static#e=this.\u0275fac=function(r){return new(r||o)};static#n=this.\u0275cmp=e.VBU({type:o,selectors:[["demo-timepicker-seconds"]],decls:11,vars:8,consts:[[3,"ngModelChange","ngModel","showMinutes","showSeconds"],[1,"alert","alert-info"],[1,"btn","btn-default","text-center",3,"click"]],template:function(r,n){1&r&&(e.j41(0,"timepicker",0),e.mxI("ngModelChange",function(m){return e.DH7(n.myTime,m)||(n.myTime=m),m}),e.k0s(),e.j41(1,"pre",1),e.EFF(2),e.nrm(3,"br"),e.EFF(4),e.nrm(5,"br"),e.EFF(6),e.k0s(),e.j41(7,"button",2),e.bIt("click",function(){return n.toggleMinutes()}),e.EFF(8),e.k0s(),e.j41(9,"button",2),e.bIt("click",function(){return n.toggleSeconds()}),e.EFF(10),e.k0s()),2&r&&(e.R50("ngModel",n.myTime),e.Y8G("showMinutes",n.showMin)("showSeconds",n.showSec),e.R7$(2),e.SpI("Time is: ",n.myTime,""),e.R7$(2),e.SpI("showMinutes: ",n.showMin,""),e.R7$(2),e.SpI("showSeconds: ",n.showSec,""),e.R7$(2),e.SpI(" ",n.showMin?"Hide minutes":"Show minutes","\n"),e.R7$(2),e.SpI(" ",n.showSec?"Hide seconds":"Show seconds","\n"))},dependencies:[a.BC,a.vS,d.n],encapsulation:2})}return o})(),M=(()=>{class o{constructor(){this.isMeridian=!0,this.isDisabled=!0,this.myTime=new Date}static#e=this.\u0275fac=function(r){return new(r||o)};static#n=this.\u0275cmp=e.VBU({type:o,selectors:[["demo-timepicker-disabled"]],decls:4,vars:3,consts:[[3,"ngModelChange","ngModel","showMeridian","disabled"],["type","button",1,"btn","btn-info",3,"click"]],template:function(r,n){1&r&&(e.j41(0,"timepicker",0),e.mxI("ngModelChange",function(m){return e.DH7(n.myTime,m)||(n.myTime=m),m}),e.k0s(),e.nrm(1,"hr"),e.j41(2,"button",1),e.bIt("click",function(){return n.isDisabled=!n.isDisabled}),e.EFF(3,"Enable / Disable input"),e.k0s()),2&r&&(e.R50("ngModel",n.myTime),e.Y8G("showMeridian",n.isMeridian)("disabled",!n.isDisabled))},dependencies:[a.BC,a.vS,d.n],encapsulation:2})}return o})();function V(o,u){if(1&o&&(e.j41(0,"option",6),e.EFF(1),e.k0s()),2&o){const l=u.$implicit;e.Y8G("value",l),e.R7$(),e.JRh(l)}}function O(o,u){if(1&o&&(e.j41(0,"option",6),e.EFF(1),e.k0s()),2&o){const l=u.$implicit;e.Y8G("value",l),e.R7$(),e.JRh(l)}}function K(o,u){if(1&o&&(e.j41(0,"option",6),e.EFF(1),e.k0s()),2&o){const l=u.$implicit;e.Y8G("value",l),e.R7$(),e.JRh(l)}}let b=(()=>{class o{constructor(){this.hstep=1,this.mstep=15,this.sstep=10,this.mytime=new Date,this.options={hstep:[1,2,3],mstep:[1,5,10,15,25,30],sstep:[5,10,20,30]}}static#e=this.\u0275fac=function(r){return new(r||o)};static#n=this.\u0275cmp=e.VBU({type:o,selectors:[["demo-timepicker-custom"]],decls:16,vars:12,consts:[[3,"ngModelChange","ngModel","hourStep","minuteStep","showSeconds","secondsStep"],[1,"alert","alert-info"],[1,"row"],[1,"col-xs-6","col-6","col-md-3"],[1,"form-control",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(r,n){1&r&&(e.j41(0,"timepicker",0),e.mxI("ngModelChange",function(m){return e.DH7(n.mytime,m)||(n.mytime=m),m}),e.k0s(),e.j41(1,"pre",1),e.EFF(2),e.k0s(),e.j41(3,"div",2)(4,"div",3),e.EFF(5," Hours step is: "),e.j41(6,"select",4),e.mxI("ngModelChange",function(m){return e.DH7(n.hstep,m)||(n.hstep=m),m}),e.DNE(7,V,2,2,"option",5),e.k0s()(),e.j41(8,"div",3),e.EFF(9," Minutes step is: "),e.j41(10,"select",4),e.mxI("ngModelChange",function(m){return e.DH7(n.mstep,m)||(n.mstep=m),m}),e.DNE(11,O,2,2,"option",5),e.k0s()(),e.j41(12,"div",3),e.EFF(13," Seconds step is: "),e.j41(14,"select",4),e.mxI("ngModelChange",function(m){return e.DH7(n.sstep,m)||(n.sstep=m),m}),e.DNE(15,K,2,2,"option",5),e.k0s()()()),2&r&&(e.R50("ngModel",n.mytime),e.Y8G("hourStep",n.hstep)("minuteStep",n.mstep)("showSeconds",!0)("secondsStep",n.sstep),e.R7$(2),e.SpI("Time is: ",n.mytime,""),e.R7$(4),e.R50("ngModel",n.hstep),e.R7$(),e.Y8G("ngForOf",n.options.hstep),e.R7$(3),e.R50("ngModel",n.mstep),e.R7$(),e.Y8G("ngForOf",n.options.mstep),e.R7$(3),e.R50("ngModel",n.sstep),e.R7$(),e.Y8G("ngForOf",n.options.sstep))},dependencies:[s.Sq,a.xH,a.y7,a.wz,a.BC,a.vS,d.n],encapsulation:2})}return o})();function W(o,u){1&o&&(e.j41(0,"div",4),e.EFF(1,"Invalid time"),e.k0s())}let E=(()=>{class o{constructor(){this.ctrl=new a.hs("",l=>{const r=l.value;if(!r)return null;const n=r.getHours();return n<11||n>12?{outOfRange:!0}:null})}static#e=this.\u0275fac=function(r){return new(r||o)};static#n=this.\u0275cmp=e.VBU({type:o,selectors:[["demo-timepicker-custom-validation"]],decls:7,vars:8,consts:[[1,"form-group","mb-3"],["required","",3,"ngModelChange","ngModel","formControl"],[1,"alert"],["class","alert alert-danger",4,"ngIf"],[1,"alert","alert-danger"]],template:function(r,n){1&r&&(e.j41(0,"p"),e.EFF(1,"Illustrates custom validation, you have to select time between 11:00 and 12:59"),e.k0s(),e.j41(2,"div",0)(3,"timepicker",1),e.mxI("ngModelChange",function(m){return e.DH7(n.myTime,m)||(n.myTime=m),m}),e.k0s()(),e.j41(4,"pre",2),e.EFF(5),e.k0s(),e.DNE(6,W,2,0,"div",3)),2&r&&(e.R7$(3),e.R50("ngModel",n.myTime),e.Y8G("formControl",n.ctrl),e.R7$(),e.AVh("alert-danger",!n.ctrl.valid&&!n.ctrl.pristine)("alert-success",n.ctrl.valid&&!n.ctrl.pristine||null===n.ctrl.value),e.R7$(),e.SpI("  Time is: ",n.myTime,"\n"),e.R7$(),e.Y8G("ngIf",n.ctrl.errors&&n.ctrl.errors.outOfRange))},dependencies:[s.bT,a.BC,a.YS,a.l_,d.n],encapsulation:2})}return o})();function _(o,u){1&o&&(e.j41(0,"pre",5),e.EFF(1,"Invalid time format"),e.k0s())}function H(){return Object.assign(new h.s5,{allowEmptyTime:!0})}let F=(()=>{class o{constructor(){this.mytime=new Date}update(){const l=new Date;l.setHours(14),l.setMinutes(0),this.mytime=l}changed(){console.log(`Time changed to: ${this.mytime}`)}clear(){this.mytime=void 0}static#e=this.\u0275fac=function(r){return new(r||o)};static#n=this.\u0275cmp=e.VBU({type:o,selectors:[["demo-timepicker-dynamic"]],features:[e.Jv_([{provide:h.s5,useFactory:H}])],decls:8,vars:3,consts:[[3,"ngModelChange","isValid","ngModel"],[1,"alert","alert-info"],["class","alert alert-danger",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],[1,"alert","alert-danger"]],template:function(r,n){1&r&&(e.j41(0,"timepicker",0),e.mxI("ngModelChange",function(m){return e.DH7(n.mytime,m)||(n.mytime=m),m}),e.bIt("ngModelChange",function(){return n.changed()})("isValid",function(m){return n.isValid=m}),e.k0s(),e.j41(1,"pre",1),e.EFF(2),e.k0s(),e.DNE(3,_,2,0,"pre",2),e.j41(4,"button",3),e.bIt("click",function(){return n.update()}),e.EFF(5,"Set to 14:00"),e.k0s(),e.j41(6,"button",4),e.bIt("click",function(){return n.clear()}),e.EFF(7,"Clear"),e.k0s()),2&r&&(e.R50("ngModel",n.mytime),e.R7$(2),e.SpI("Time is: ",n.mytime,""),e.R7$(),e.Y8G("ngIf",!n.isValid))},dependencies:[s.bT,a.BC,a.vS,d.n],encapsulation:2})}return o})(),w=(()=>{class o{constructor(){this.allowMouseWheel=!0,this.myTime=new Date}static#e=this.\u0275fac=function(r){return new(r||o)};static#n=this.\u0275cmp=e.VBU({type:o,selectors:[["demo-timepicker-mousewheel"]],decls:6,vars:3,consts:[[3,"ngModelChange","ngModel","mousewheel"],["type","button",1,"btn","btn-info","section","bd-example",3,"click"],[1,"alert","alert-info"]],template:function(r,n){1&r&&(e.j41(0,"timepicker",0),e.mxI("ngModelChange",function(m){return e.DH7(n.myTime,m)||(n.myTime=m),m}),e.k0s(),e.nrm(1,"hr"),e.j41(2,"button",1),e.bIt("click",function(){return n.allowMouseWheel=!n.allowMouseWheel}),e.EFF(3,"Enable / Disable mouse wheel"),e.k0s(),e.j41(4,"pre",2),e.EFF(5),e.k0s()),2&r&&(e.R50("ngModel",n.myTime),e.Y8G("mousewheel",n.allowMouseWheel),e.R7$(5),e.SpI("Time is: ",n.myTime,""))},dependencies:[a.BC,a.vS,d.n],encapsulation:2})}return o})(),v=(()=>{class o{constructor(){this.allowArrowKeys=!0,this.myTime=new Date}static#e=this.\u0275fac=function(r){return new(r||o)};static#n=this.\u0275cmp=e.VBU({type:o,selectors:[["demo-timepicker-arrowkeys"]],decls:6,vars:3,consts:[[3,"ngModelChange","ngModel","arrowkeys"],["type","button",1,"btn","btn-info","section","bd-example",3,"click"],[1,"alert","alert-info"]],template:function(r,n){1&r&&(e.j41(0,"timepicker",0),e.mxI("ngModelChange",function(m){return e.DH7(n.myTime,m)||(n.myTime=m),m}),e.k0s(),e.nrm(1,"hr"),e.j41(2,"button",1),e.bIt("click",function(){return n.allowArrowKeys=!n.allowArrowKeys}),e.EFF(3,"Enable / Disable keyboard arrow keys"),e.k0s(),e.j41(4,"pre",2),e.EFF(5),e.k0s()),2&r&&(e.R50("ngModel",n.myTime),e.Y8G("arrowkeys",n.allowArrowKeys),e.R7$(5),e.SpI("Time is: ",n.myTime,""))},dependencies:[a.BC,a.vS,d.n],encapsulation:2})}return o})();function X(o,u){1&o&&(e.j41(0,"pre",4),e.EFF(1,"Invalid time format"),e.k0s())}function G(){return Object.assign(new h.s5,{allowEmptyTime:!0})}let S=(()=>{class o{constructor(){this.allowEmptyTime=!0,this.myTime=new Date}clear(){this.myTime=void 0}static#e=this.\u0275fac=function(r){return new(r||o)};static#n=this.\u0275cmp=e.VBU({type:o,selectors:[["demo-timepicker-empty-date"]],features:[e.Jv_([{provide:h.s5,useFactory:G}])],decls:7,vars:3,consts:[[3,"ngModelChange","isValid","ngModel"],[1,"alert","alert-info"],["class","alert alert-danger",4,"ngIf"],["type","button",1,"btn","btn-danger",3,"click"],[1,"alert","alert-danger"]],template:function(r,n){1&r&&(e.j41(0,"timepicker",0),e.mxI("ngModelChange",function(m){return e.DH7(n.myTime,m)||(n.myTime=m),m}),e.bIt("isValid",function(m){return n.isValid=m}),e.k0s(),e.nrm(1,"hr"),e.j41(2,"pre",1),e.EFF(3),e.k0s(),e.DNE(4,X,2,0,"pre",2),e.j41(5,"button",3),e.bIt("click",function(){return n.clear()}),e.EFF(6,"Clear"),e.k0s()),2&r&&(e.R50("ngModel",n.myTime),e.R7$(3),e.SpI("Time is: ",n.myTime,""),e.R7$(),e.Y8G("ngIf",!n.isValid))},dependencies:[s.bT,a.BC,a.vS,d.n],encapsulation:2})}return o})();function L(){return Object.assign(new h.s5,{hourStep:2,minuteStep:10,showMeridian:!1,readonlyInput:!1,mousewheel:!0,showMinutes:!0,showSeconds:!1,labelHours:"Hours",labelMinutes:"Minutes",labelSeconds:"Seconds"})}let R=(()=>{class o{static#e=this.\u0275fac=function(r){return new(r||o)};static#n=this.\u0275cmp=e.VBU({type:o,selectors:[["demo-timepicker-config"]],features:[e.Jv_([{provide:h.s5,useFactory:L}])],decls:3,vars:2,consts:[[3,"ngModelChange","ngModel"],[1,"alert","alert-info"]],template:function(r,n){1&r&&(e.j41(0,"timepicker",0),e.mxI("ngModelChange",function(m){return e.DH7(n.mytime,m)||(n.mytime=m),m}),e.k0s(),e.j41(1,"pre",1),e.EFF(2),e.k0s()),2&r&&(e.R50("ngModel",n.mytime),e.R7$(2),e.SpI("Time is: ",n.mytime,""))},dependencies:[a.BC,a.vS,d.n],encapsulation:2})}return o})(),P=(()=>{class o{constructor(){this.isMeridian=!1,this.readonly=!0,this.myTime=new Date}static#e=this.\u0275fac=function(r){return new(r||o)};static#n=this.\u0275cmp=e.VBU({type:o,selectors:[["demo-timepicker-readonly"]],decls:4,vars:3,consts:[[3,"ngModelChange","ngModel","showMeridian","readonlyInput"],["type","button",1,"btn","btn-info",3,"click"]],template:function(r,n){1&r&&(e.j41(0,"timepicker",0),e.mxI("ngModelChange",function(m){return e.DH7(n.myTime,m)||(n.myTime=m),m}),e.k0s(),e.nrm(1,"hr"),e.j41(2,"button",1),e.bIt("click",function(){return n.readonly=!n.readonly}),e.EFF(3,"Editable / Readonly input"),e.k0s()),2&r&&(e.R50("ngModel",n.myTime),e.Y8G("showMeridian",n.isMeridian)("readonlyInput",!n.readonly))},dependencies:[a.BC,a.vS,d.n],encapsulation:2})}return o})(),A=(()=>{class o{constructor(){this.isMeridian=!1,this.showSpinners=!0,this.myTime=new Date}static#e=this.\u0275fac=function(r){return new(r||o)};static#n=this.\u0275cmp=e.VBU({type:o,selectors:[["demo-timepicker-spinners"]],decls:4,vars:3,consts:[[3,"ngModelChange","ngModel","showMeridian","showSpinners"],["type","button",1,"btn","btn-info",3,"click"]],template:function(r,n){1&r&&(e.j41(0,"timepicker",0),e.mxI("ngModelChange",function(m){return e.DH7(n.myTime,m)||(n.myTime=m),m}),e.k0s(),e.nrm(1,"hr"),e.j41(2,"button",1),e.bIt("click",function(){return n.showSpinners=!n.showSpinners}),e.EFF(3,"Show / Hide spinners"),e.k0s()),2&r&&(e.R50("ngModel",n.myTime),e.Y8G("showMeridian",n.isMeridian)("showSpinners",n.showSpinners))},dependencies:[a.BC,a.vS,d.n],encapsulation:2})}return o})();function Y(o,u){1&o&&(e.j41(0,"div",3),e.EFF(1,"Invalid time"),e.k0s())}let I=(()=>{class o{constructor(){this.isMeridian=!0,this.myTime=new Date,this.valid=!0}isValid(l){this.valid=l}static#e=this.\u0275fac=function(r){return new(r||o)};static#n=this.\u0275cmp=e.VBU({type:o,selectors:[["demo-timepicker-isvalid"]],decls:5,vars:8,consts:[[3,"ngModelChange","isValid","ngModel","showMeridian"],[1,"alert"],["class","alert alert-danger",4,"ngIf"],[1,"alert","alert-danger"]],template:function(r,n){1&r&&(e.j41(0,"timepicker",0),e.mxI("ngModelChange",function(m){return e.DH7(n.myTime,m)||(n.myTime=m),m}),e.bIt("isValid",function(m){return n.isValid(m)}),e.k0s(),e.nrm(1,"hr"),e.j41(2,"pre",1),e.EFF(3),e.k0s(),e.DNE(4,Y,2,0,"div",2)),2&r&&(e.R50("ngModel",n.myTime),e.Y8G("showMeridian",n.isMeridian),e.R7$(2),e.AVh("alert-danger",!n.valid)("alert-success",n.valid),e.R7$(),e.SpI("  Time is: ",n.myTime,"\n"),e.R7$(),e.Y8G("ngIf",!n.valid))},dependencies:[s.bT,a.BC,a.vS,d.n],encapsulation:2})}return o})();function N(o,u){if(1&o){const l=e.RV6();e.qex(0),e.j41(1,"form",1),e.nrm(2,"timepicker",2),e.k0s(),e.nrm(3,"br"),e.j41(4,"button",3),e.bIt("click",function(){let n;e.eBV(l);const p=e.XpG();return e.Njj(null==(n=p.form.get("myControl"))?null:n.enable())}),e.EFF(5,"Enable Control"),e.k0s(),e.j41(6,"button",4),e.bIt("click",function(){let n;e.eBV(l);const p=e.XpG();return e.Njj(null==(n=p.form.get("myControl"))?null:n.disable())}),e.EFF(7,"Disable Control"),e.k0s(),e.nrm(8,"br")(9,"br"),e.j41(10,"pre",5),e.EFF(11),e.k0s(),e.bVm()}if(2&o){let l;const r=e.XpG();e.R7$(),e.Y8G("formGroup",r.form),e.R7$(),e.Y8G("formControlName","myControl"),e.R7$(9),e.SpI("Time is: ",null==(l=r.form.get("myControl"))?null:l.value,"")}}let B=(()=>{class o{constructor(){this.form=new a.J3({myControl:new a.hs(new Date)})}static#e=this.\u0275fac=function(r){return new(r||o)};static#n=this.\u0275cmp=e.VBU({type:o,selectors:[["demo-timepicker-form"]],decls:1,vars:1,consts:[[4,"ngIf"],[3,"formGroup"],[3,"formControlName"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-warning",3,"click"],[1,"alert","alert-info"]],template:function(r,n){1&r&&e.DNE(0,N,12,3,"ng-container",0),2&r&&e.Y8G("ngIf",n.form)},dependencies:[s.bT,a.qT,a.BC,a.cb,a.j4,a.JD,d.n],encapsulation:2})}return o})();const J=[{name:"Overview",anchor:"overview",tabName:"overview",outlet:T.xK,content:[{title:"Basic",anchor:"basic",component:t(29467),html:t(97987),outlet:g},{title:"Form",anchor:"form",component:t(2413),html:t(43777),outlet:B},{title:"Meridian",anchor:"meridian",component:t(6787),html:t(65083),outlet:f},{title:"Custom meridian",anchor:"custom-meridian",component:t(48267),html:t(91059),description:"<p>Text in meridian labels can be customized by using <code>meridians</code> input property</p>",outlet:C},{title:"Min - Max",anchor:"min-max",component:t(51799),html:t(44079),outlet:y},{title:"Toggle minutes/seconds",anchor:"toggleMinutesSeconds",component:t(28645),html:t(96809),outlet:D},{title:"Disabled",anchor:"disabled",component:t(71613),html:t(3729),outlet:M},{title:"Readonly",anchor:"readonly",component:t(69773),html:t(62433),outlet:P},{title:"Custom steps",anchor:"custom",component:t(93151),html:t(37479),outlet:b},{title:"Custom validation",anchor:"custom-validation",component:t(26343),html:t(54751),outlet:E},{title:"Custom validation with isValid event",anchor:"isvalid",component:t(67639),html:t(44143),description:"<p><code>isValid</code> event emits true if a value is a valid data.\n            Enter an invalid data to see error</p>",outlet:I},{title:"Dynamic",anchor:"dynamic",component:t(85159),html:t(54335),outlet:F},{title:"Mouse wheel",anchor:"mouse-wheel",component:t(6557),html:t(19313),outlet:w},{title:"Empty date",anchor:"empty-date",component:t(86253),html:t(25025),outlet:S},{title:"Arrow keys",anchor:"arrow keys",component:t(6455),html:t(23823),outlet:v},{title:"Spinners",anchor:"spinners",component:t(7721),html:t(29021),outlet:A},{title:"Placeholder",anchor:"placeholder",component:t(5947),html:t(96515),outlet:k},{title:"Configuring defaults",anchor:"config-defaults",component:t(41429),html:t(79001),outlet:R}]},{name:"Installation",anchor:"api-reference",tabName:"api",outlet:T.Mg,usage:t(47744),importInfo:'<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> --component <span class="pln">timepicker</span>',content:[{title:"TimepickerComponent",anchor:"timepicker-component",outlet:T.r2},{title:"TimepickerConfig",anchor:"timepicker-config",outlet:T.TJ}]},{name:"Examples",anchor:"examples",tabName:"examples",outlet:T.xK,content:[{title:"Basic",anchor:"basic-ex",outlet:g},{title:"Form",anchor:"form-ex",outlet:B},{title:"Meridian",anchor:"meridian-ex",outlet:f},{title:"Custom meridian",anchor:"custom-meridian-ex",outlet:C},{title:"Min - Max",anchor:"min-max-ex",outlet:y},{title:"Toggle minutes/seconds",anchor:"toggleMinutesSeconds-ex",outlet:D},{title:"Disabled",anchor:"disabled-ex",outlet:M},{title:"Readonly",anchor:"readonly-ex",outlet:P},{title:"Custom steps",anchor:"custom-ex",outlet:b},{title:"Custom validation",anchor:"custom-validation-ex",outlet:E},{title:"Custom validation with isValid event",anchor:"isvalid-ex",outlet:I},{title:"Dynamic",anchor:"dynamic-ex",outlet:F},{title:"Mouse wheel",anchor:"mouse-wheel-ex",outlet:w},{title:"Empty date",anchor:"empty-date-ex",outlet:S},{title:"Arrow keys",anchor:"arrow keys-ex",outlet:v},{title:"Spinners",anchor:"spinners-ex",outlet:A},{title:"Placeholder",anchor:"placeholder-ex",outlet:k},{title:"Configuring defaults",anchor:"config-defaults-ex",outlet:R}]}];var $=t(86223),z=t(52439);let U=(()=>{class o{constructor(){this.name="Timepicker",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/timepicker",this.componentContent=J}static#e=this.\u0275fac=function(r){return new(r||o)};static#n=this.\u0275cmp=e.VBU({type:o,selectors:[["timepicker-section"]],decls:6,vars:4,consts:[[3,"name","src","componentContent"],[3,"content"]],template:function(r,n){1&r&&(e.j41(0,"demo-section",0)(1,"p"),e.EFF(2,"A lightweight & configurable timepicker directive"),e.k0s(),e.j41(3,"p"),e.EFF(4,"The easiest way to add the timepicker component to your app (will be added to the root module)"),e.k0s(),e.nrm(5,"docs-section",1),e.k0s()),2&r&&(e.Y8G("name",n.name)("src",n.src)("componentContent",n.componentContent),e.R7$(5),e.Y8G("content",n.componentContent))},dependencies:[$.q,z.C],encapsulation:2,changeDetection:0})}return o})();const Q=[{path:"",component:U}];let Z=(()=>{class o{static#e=this.\u0275fac=function(r){return new(r||o)};static#n=this.\u0275mod=e.$C({type:o});static#t=this.\u0275inj=e.G2t({imports:[s.MD,a.YN,a.X1,T.ky,h.gS,j.iI.forChild(Q)]})}return o})()},23823:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s='<timepicker [(ngModel)]="myTime" [arrowkeys]="allowArrowKeys"></timepicker>\r\n<hr>\r\n\r\n<button type="button" class="btn btn-info section bd-example" (click)="allowArrowKeys = !allowArrowKeys">Enable / Disable keyboard arrow keys</button>\r\n\r\n<pre class="alert alert-info">Time is: {{myTime}}</pre>\r\n'},6455:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s="import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  // eslint-disable-next-line @angular-eslint/component-selector\r\n  selector: 'demo-timepicker-arrowkeys',\r\n  templateUrl: './arrowkeys.html'\r\n})\r\nexport class DemoTimepickerArrowkeysComponent {\r\n  allowArrowKeys = true;\r\n  myTime = new Date();\r\n}\r\n"},97987:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s='<timepicker [(ngModel)]="mytime"></timepicker>\r\n<pre class="alert alert-info">Time is: {{mytime}}</pre>\r\n'},29467:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s="import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  // eslint-disable-next-line @angular-eslint/component-selector\r\n  selector: 'demo-timepicker-basic',\r\n  templateUrl: './basic.html'\r\n})\r\nexport class DemoTimepickerBasicComponent {\r\n  mytime: Date = new Date();\r\n}\r\n"},79001:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s='<timepicker [(ngModel)]="mytime"></timepicker>\r\n<pre class="alert alert-info">Time is: {{mytime}}</pre>\r\n'},41429:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s="import { Component } from '@angular/core';\r\nimport { TimepickerConfig } from 'ngx-bootstrap/timepicker';\r\n\r\n// such override allows to keep some initial values\r\n\r\nexport function getTimepickerConfig(): TimepickerConfig {\r\n  return Object.assign(new TimepickerConfig(), {\r\n    hourStep: 2,\r\n    minuteStep: 10,\r\n    showMeridian: false,\r\n    readonlyInput: false,\r\n    mousewheel: true,\r\n    showMinutes: true,\r\n    showSeconds: false,\r\n    labelHours: 'Hours',\r\n    labelMinutes: 'Minutes',\r\n    labelSeconds: 'Seconds'\r\n  });\r\n}\r\n\r\n@Component({\r\n  // eslint-disable-next-line @angular-eslint/component-selector\r\n  selector: 'demo-timepicker-config',\r\n  templateUrl: './config.html',\r\n  providers: [{ provide: TimepickerConfig, useFactory: getTimepickerConfig }]\r\n})\r\nexport class DemoTimepickerConfigComponent {\r\n  mytime?: string;\r\n}\r\n"},91059:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s='<timepicker [(ngModel)]="mytime" [meridians]="meridians"></timepicker>\r\n\r\n<pre class="alert alert-info">Time is: {{mytime}}</pre>\r\n'},48267:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s="import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  // eslint-disable-next-line @angular-eslint/component-selector\r\n  selector: 'demo-timepicker-custom-meridian',\r\n  templateUrl: './custom-meridian.html'\r\n})\r\nexport class DemoTimepickerCustomMeridianComponent {\r\n  mytime: Date = new Date();\r\n  meridians = ['AM(Midnight to Noon)', 'PM(Noon to Midnight)'];\r\n}\r\n"},54751:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s='<p>Illustrates custom validation, you have to select time between 11:00 and 12:59</p>\r\n\r\n<div class="form-group mb-3">\r\n  <timepicker [(ngModel)]="myTime" [formControl]="ctrl" required></timepicker>\r\n</div>\r\n\r\n<pre class="alert"\r\n     [class.alert-danger]="!ctrl.valid && !ctrl.pristine"\r\n     [class.alert-success]="(ctrl.valid && !ctrl.pristine) || ctrl.value === null">\r\n  Time is: {{myTime}}\r\n</pre>\r\n<div class="alert alert-danger" *ngIf="ctrl.errors && ctrl.errors[\'outOfRange\']">Invalid time</div>\r\n'},26343:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s="import { Component } from '@angular/core';\r\nimport { AbstractControl, UntypedFormControl } from '@angular/forms';\r\n\r\n@Component({\r\n  // eslint-disable-next-line @angular-eslint/component-selector\r\n  selector: 'demo-timepicker-custom-validation',\r\n  templateUrl: './custom-validation.html'\r\n})\r\nexport class DemoTimepickerCustomValidationComponent {\r\n  myTime?: Date;\r\n\r\n  ctrl = new UntypedFormControl('', (control: AbstractControl) => {\r\n    const value = control.value;\r\n\r\n    if (!value) {\r\n      return null;\r\n    }\r\n\r\n    const hours = value.getHours();\r\n\r\n    if (hours < 11 || hours > 12) {\r\n      return { outOfRange: true };\r\n    }\r\n\r\n    return null;\r\n  });\r\n}\r\n"},37479:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s='<timepicker [(ngModel)]="mytime" [hourStep]="hstep" [minuteStep]="mstep" [showSeconds]="true" [secondsStep]="sstep"></timepicker>\r\n\r\n<pre class="alert alert-info">Time is: {{mytime}}</pre>\r\n\r\n<div class="row">\r\n  <div class="col-xs-6 col-6 col-md-3">\r\n    Hours step is:\r\n    <select class="form-control" [(ngModel)]="hstep">\r\n      <option *ngFor="let opt of options.hstep" [value]="opt">{{opt}}</option>\r\n    </select>\r\n  </div>\r\n  <div class="col-xs-6 col-6 col-md-3">\r\n    Minutes step is:\r\n    <select class="form-control" [(ngModel)]="mstep">\r\n      <option *ngFor="let opt of options.mstep" [value]="opt">{{opt}}</option>\r\n    </select>\r\n  </div>\r\n  <div class="col-xs-6 col-6 col-md-3">\r\n    Seconds step is:\r\n    <select class="form-control" [(ngModel)]="sstep">\r\n      <option *ngFor="let opt of options.sstep" [value]="opt">{{opt}}</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n'},93151:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s="import { Component } from '@angular/core';\r\n\r\ninterface IOptions {\r\n  hstep: number[];\r\n  mstep: number[];\r\n  sstep: number[];\r\n}\r\n\r\n@Component({\r\n  // eslint-disable-next-line @angular-eslint/component-selector\r\n  selector: 'demo-timepicker-custom',\r\n  templateUrl: './custom.html'\r\n})\r\nexport class DemoTimepickerCustomComponent {\r\n  hstep = 1;\r\n  mstep = 15;\r\n  sstep = 10;\r\n\r\n  mytime: Date = new Date();\r\n  options: IOptions = {\r\n    hstep: [1, 2, 3],\r\n    mstep: [1, 5, 10, 15, 25, 30],\r\n    sstep: [5, 10, 20, 30]\r\n  };\r\n}\r\n"},3729:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s='<timepicker [(ngModel)]="myTime" [showMeridian]="isMeridian" [disabled]="!isDisabled"></timepicker>\r\n<hr>\r\n<button type="button" class="btn btn-info" (click)="isDisabled=!isDisabled">Enable / Disable input</button>\r\n'},71613:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s="import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  // eslint-disable-next-line @angular-eslint/component-selector\r\n  selector: 'demo-timepicker-disabled',\r\n  templateUrl: './disabled.html'\r\n})\r\nexport class DemoTimepickerDisabledComponent {\r\n  isMeridian = true;\r\n  isDisabled = true;\r\n  myTime = new Date();\r\n}\r\n"},54335:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s='<timepicker [(ngModel)]="mytime" (ngModelChange)="changed()" (isValid)="isValid = $event"></timepicker>\r\n\r\n<pre class="alert alert-info">Time is: {{mytime}}</pre>\r\n<pre *ngIf="!isValid" class="alert alert-danger">Invalid time format</pre>\r\n\r\n<button type="button" class="btn btn-primary" (click)="update()">Set to 14:00</button>\r\n<button type="button" class="btn btn-danger" (click)="clear()">Clear</button>\r\n'},85159:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s="import { Component } from '@angular/core';\r\nimport { TimepickerConfig } from 'ngx-bootstrap/timepicker';\r\n\r\nexport function getTimepickerConfig(): TimepickerConfig {\r\n  return Object.assign(new TimepickerConfig(), {\r\n    allowEmptyTime: true\r\n  });\r\n}\r\n\r\n@Component({\r\n  // eslint-disable-next-line @angular-eslint/component-selector\r\n  selector: 'demo-timepicker-dynamic',\r\n  templateUrl: './dynamic.html',\r\n  providers: [{ provide: TimepickerConfig, useFactory: getTimepickerConfig }]\r\n})\r\nexport class DemoTimepickerDynamicComponent {\r\n  mytime: Date | undefined = new Date();\r\n  isValid?: boolean;\r\n\r\n  update(): void {\r\n    const time = new Date();\r\n    time.setHours(14);\r\n    time.setMinutes(0);\r\n\r\n    this.mytime = time;\r\n  }\r\n\r\n  changed(): void {\r\n    console.log(`Time changed to: ${this.mytime}`);\r\n  }\r\n\r\n  clear(): void {\r\n    this.mytime = void 0;\r\n  }\r\n}\r\n"},25025:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s='<timepicker [(ngModel)]="myTime"  (isValid)="isValid = $event"></timepicker>\r\n<hr>\r\n\r\n<pre class="alert alert-info">Time is: {{myTime}}</pre>\r\n<pre *ngIf="!isValid" class="alert alert-danger">Invalid time format</pre>\r\n\r\n<button type="button" class="btn btn-danger" (click)="clear()">Clear</button>\r\n'},86253:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s="import { Component } from '@angular/core';\r\nimport { TimepickerConfig } from 'ngx-bootstrap/timepicker';\r\n\r\nexport function getTimepickerConfig(): TimepickerConfig {\r\n  return Object.assign(new TimepickerConfig(), {\r\n    allowEmptyTime: true\r\n  });\r\n}\r\n\r\n@Component({\r\n  // eslint-disable-next-line @angular-eslint/component-selector\r\n  selector: 'demo-timepicker-empty-date',\r\n  templateUrl: './empty-date.html',\r\n  providers: [{ provide: TimepickerConfig, useFactory: getTimepickerConfig }]\r\n})\r\nexport class DemoTimepickerEmptyDateComponent {\r\n  allowEmptyTime = true;\r\n  myTime?: Date = new Date();\r\n  isValid?: boolean;\r\n\r\n  clear(): void {\r\n    this.myTime = void 0;\r\n  }\r\n}\r\n"},43777:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s='<ng-container *ngIf="form">\r\n  <form [formGroup]="form">\r\n    <timepicker [formControlName]="\'myControl\'"></timepicker>\r\n  </form>\r\n\r\n  <br>\r\n  <button class="btn btn-success" (click)="form.get(\'myControl\')?.enable()">Enable Control</button>\r\n  <button class="btn btn-warning" (click)="form.get(\'myControl\')?.disable()">Disable Control</button>\r\n  <br><br>\r\n\r\n  <pre class="alert alert-info">Time is: {{ form.get(\'myControl\')?.value }}</pre>\r\n</ng-container>\r\n'},2413:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s="import { Component } from '@angular/core';\r\nimport { UntypedFormControl, UntypedFormGroup } from '@angular/forms';\r\n\r\n@Component({\r\n  // eslint-disable-next-line @angular-eslint/component-selector\r\n  selector: 'demo-timepicker-form',\r\n  templateUrl: './form.html'\r\n})\r\nexport class DemoTimepickerFormComponent {\r\n  form = new UntypedFormGroup({\r\n    myControl: new UntypedFormControl(new Date())\r\n  });\r\n}\r\n"},44143:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s='<timepicker [(ngModel)]="myTime" [showMeridian]="isMeridian" (isValid)="isValid($event)"></timepicker>\r\n<hr>\r\n<pre class="alert"\r\n     [class.alert-danger]="!valid"\r\n     [class.alert-success]="valid">\r\n  Time is: {{myTime}}\r\n</pre>\r\n<div *ngIf="!valid" class="alert alert-danger">Invalid time</div>\r\n'},67639:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s="import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  // eslint-disable-next-line @angular-eslint/component-selector\r\n  selector: 'demo-timepicker-isvalid',\r\n  templateUrl: './isvalid.html'\r\n})\r\nexport class DemoTimepickerIsValidComponent {\r\n  isMeridian = true;\r\n  myTime = new Date();\r\n  valid = true;\r\n\r\n  isValid(event: boolean): void {\r\n    this.valid = event;\r\n  }\r\n}\r\n"},65083:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s='<timepicker [(ngModel)]="mytime" [showMeridian]="ismeridian"></timepicker>\r\n\r\n<pre class="alert alert-info">Time is: {{mytime}}</pre>\r\n\r\n<br>\r\n\r\n<button type="button" class="btn btn-info" (click)="toggleMode()">12H / 24H</button>\r\n\r\n'},6787:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s="import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  // eslint-disable-next-line @angular-eslint/component-selector\r\n  selector: 'demo-timepicker-meridian',\r\n  templateUrl: './meridian.html'\r\n})\r\nexport class DemoTimepickerMeridianComponent {\r\n  ismeridian = true;\r\n\r\n  mytime: Date = new Date();\r\n\r\n  toggleMode(): void {\r\n    this.ismeridian = !this.ismeridian;\r\n  }\r\n}\r\n"},44079:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s='<timepicker [(ngModel)]="myTime" [min]="minTime" [max]="maxTime"></timepicker>\r\n\r\n<pre class="alert alert-info">Time is: {{myTime}}</pre>\r\n'},51799:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s="import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  // eslint-disable-next-line @angular-eslint/component-selector\r\n  selector: 'demo-timepicker-min-max',\r\n  templateUrl: './min-max.html'\r\n})\r\nexport class DemoTimepickerMinMaxComponent {\r\n  myTime: Date = new Date();\r\n  minTime: Date = new Date();\r\n  maxTime: Date = new Date();\r\n\r\n  constructor() {\r\n    this.minTime.setHours(8);\r\n    this.minTime.setMinutes(0);\r\n    this.maxTime.setHours(23);\r\n    this.maxTime.setMinutes(55);\r\n  }\r\n}\r\n"},19313:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s='<timepicker [(ngModel)]="myTime" [mousewheel]="allowMouseWheel"></timepicker>\r\n<hr>\r\n\r\n<button type="button" class="btn btn-info section bd-example" (click)="allowMouseWheel = !allowMouseWheel">Enable / Disable mouse wheel</button>\r\n\r\n<pre class="alert alert-info">Time is: {{myTime}}</pre>\r\n'},6557:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s="import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  // eslint-disable-next-line @angular-eslint/component-selector\r\n  selector: 'demo-timepicker-mousewheel',\r\n  templateUrl: './mousewheel.html'\r\n})\r\nexport class DemoTimepickerMousewheelComponent {\r\n  allowMouseWheel = true;\r\n  myTime = new Date();\r\n}\r\n"},96515:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s='<timepicker [hoursPlaceholder]="hoursPlaceholder"\r\n            [minutesPlaceholder]="minutesPlaceholder"\r\n            [secondsPlaceholder]="secondsPlaceholder" [showSeconds]="true"></timepicker>\r\n\r\n'},5947:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s="import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  // eslint-disable-next-line @angular-eslint/component-selector\r\n  selector: 'demo-timepicker-placeholder',\r\n  templateUrl: './placeholder.html'\r\n})\r\nexport class DemoTimepickerPlaceholderComponent {\r\n  hoursPlaceholder = 'hh';\r\n  minutesPlaceholder = 'mm';\r\n  secondsPlaceholder = 'ss';\r\n}\r\n\r\n"},62433:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s='<timepicker [(ngModel)]="myTime" [showMeridian]="isMeridian" [readonlyInput]="!readonly"></timepicker>\r\n<hr>\r\n<button type="button" class="btn btn-info" (click)="readonly=!readonly">Editable / Readonly input</button>\r\n'},69773:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s="import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  // eslint-disable-next-line @angular-eslint/component-selector\r\n  selector: 'demo-timepicker-readonly',\r\n  templateUrl: './readonly.html'\r\n})\r\nexport class DemoTimepickerReadonlyComponent {\r\n  isMeridian = false;\r\n  readonly = true;\r\n  myTime = new Date();\r\n}\r\n"},29021:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s='<timepicker [(ngModel)]="myTime" [showMeridian]="isMeridian" [showSpinners]="showSpinners"></timepicker>\r\n<hr>\r\n\r\n<button type="button" class="btn btn-info" (click)="showSpinners = !showSpinners">Show / Hide spinners</button>\r\n\r\n'},7721:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s="import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  // eslint-disable-next-line @angular-eslint/component-selector\r\n  selector: 'demo-timepicker-spinners',\r\n  templateUrl: './spinners.html'\r\n})\r\nexport class DemoTimepickerSpinnersComponent {\r\n  isMeridian = false;\r\n  showSpinners = true;\r\n  myTime: Date = new Date();\r\n}\r\n"},96809:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s='<timepicker [(ngModel)]="myTime" [showMinutes]="showMin" [showSeconds]="showSec"></timepicker>\r\n\r\n<pre class="alert alert-info">Time is: {{myTime}}<br>showMinutes: {{showMin}}<br>showSeconds: {{showSec}}</pre>\r\n\r\n<button class="btn btn-default text-center" (click)="toggleMinutes()">\r\n  {{showMin? \'Hide minutes\' : \'Show minutes\'}}\r\n</button>\r\n<button class="btn btn-default text-center" (click)="toggleSeconds()">\r\n  {{showSec? \'Hide seconds\' : \'Show seconds\'}}\r\n</button>\r\n'},28645:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s="import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  // eslint-disable-next-line @angular-eslint/component-selector\r\n  selector: 'demo-timepicker-seconds',\r\n  templateUrl: './toggle-minutes-seconds.html'\r\n})\r\nexport class DemoTimepickerToggleMinutesSecondsComponent {\r\n  myTime: Date = new Date();\r\n  showMin = true;\r\n  showSec = true;\r\n\r\n  toggleMinutes(): void {\r\n    this.showMin = !this.showMin;\r\n  }\r\n\r\n  toggleSeconds(): void {\r\n    this.showSec = !this.showSec;\r\n  }\r\n\r\n}\r\n"},47744:(c,i,t)=>{t.r(i),t.d(i,{default:()=>s});const s="### Standalone component usage\r\nimport { TimepickerModule } from 'ngx-bootstrap/timepicker';\r\n\r\n@Component({\r\n  standalone: true,\r\n  imports: [TimepickerModule,...]\r\n})\r\nexport class AppComponent(){}\r\n\r\n### Module usage\r\nimport { TimepickerModule } from 'ngx-bootstrap/timepicker';\r\n\r\n@NgModule({\r\n  imports: [TimepickerModule,...]\r\n})\r\nexport class AppModule(){}\r\n"}}]);