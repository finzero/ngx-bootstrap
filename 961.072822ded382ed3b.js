"use strict";(self.webpackChunkngx_bootstrap_docs=self.webpackChunkngx_bootstrap_docs||[]).push([[961],{3961:(g,s,i)=>{i.r(s),i.d(s,{DemoRatingModule:()=>N,RatingSectionComponent:()=>_});var r=i(96814),d=i(60095),T=i(99766),n=i(85678);let h=(()=>{class t{constructor(){this.ariaLabel="rating"}static#n=this.\u0275fac=function(a){return new(a||t)};static#e=this.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function b(t,m){1&t&&n._uU(0),2&t&&n.Oqu(m.index<m.value?"\u2605":"\u2606")}function x(t,m){}const Z=(t,m)=>({index:t,value:m});function A(t,m){if(1&t){const o=n.EpF();n.TgZ(0,"span",3),n._uU(1),n.qZA(),n.TgZ(2,"span",4),n.NdJ("mouseenter",function(){const c=n.CHM(o).index,l=n.oxw();return n.KtG(l.enter(c+1))})("click",function(){const c=n.CHM(o).index,l=n.oxw();return n.KtG(l.rate(c+1))}),n.YNc(3,x,0,0,"ng-template",5),n.qZA()}if(2&t){const o=m.$implicit,a=m.index,e=n.oxw(),c=n.MAs(2);n.xp6(1),n.hij("(",a<e.value?"*":" ",")"),n.xp6(1),n.Udp("cursor",e.readonly?"default":"pointer"),n.ekj("active",a<e.value),n.Q6J("title",o.title),n.xp6(1),n.Q6J("ngTemplateOutlet",e.customTemplate||c)("ngTemplateOutletContext",n.WLB(8,Z,a,e.value))}}const D={provide:d.JU,useExisting:(0,n.Gpc)(()=>u),multi:!0};let u=(()=>{class t{constructor(o,a){this.changeDetection=o,this.max=5,this.readonly=!1,this.titles=[],this.onHover=new n.vpe,this.onLeave=new n.vpe,this.onChange=Function.prototype,this.onTouched=Function.prototype,this.ariaLabel="rating",this.range=[],this.value=0,Object.assign(this,a)}onKeydown(o){-1!==[37,38,39,40].indexOf(o.which)&&(o.preventDefault(),o.stopPropagation(),this.rate(this.value+(38===o.which||39===o.which?1:-1)))}ngOnInit(){this.max=this.max||5,this.titles=typeof this.titles<"u"&&this.titles.length>0?this.titles:[],this.range=this.buildTemplateObjects(this.max)}writeValue(o){if(o%1!==o)return this.value=Math.round(o),this.preValue=o,void this.changeDetection.markForCheck();this.preValue=o,this.value=o,this.changeDetection.markForCheck()}enter(o){this.readonly||(this.value=o,this.changeDetection.markForCheck(),this.onHover.emit(o))}reset(){"number"==typeof this.preValue&&(this.value=Math.round(this.preValue),this.changeDetection.markForCheck(),this.onLeave.emit(this.value))}registerOnChange(o){this.onChange=o}registerOnTouched(o){this.onTouched=o}rate(o){!this.readonly&&this.range&&o>=0&&o<=this.range.length&&(this.writeValue(o),this.onChange(o))}buildTemplateObjects(o){const a=[];for(let e=0;e<o;e++)a.push({index:e,title:this.titles[e]||e+1});return a}static#n=this.\u0275fac=function(a){return new(a||t)(n.Y36(n.sBO),n.Y36(h))};static#e=this.\u0275cmp=n.Xpm({type:t,selectors:[["rating"]],hostBindings:function(a,e){1&a&&n.NdJ("keydown",function(l){return e.onKeydown(l)})},inputs:{max:"max",readonly:"readonly",titles:"titles",customTemplate:"customTemplate"},outputs:{onHover:"onHover",onLeave:"onLeave"},features:[n._Bn([D])],decls:4,vars:4,consts:[["tabindex","0","role","slider","aria-valuemin","0",3,"mouseleave","keydown"],["star",""],["ngFor","",3,"ngForOf"],[1,"sr-only","visually-hidden"],[1,"bs-rating-star",3,"title","mouseenter","click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(a,e){1&a&&(n.TgZ(0,"span",0),n.NdJ("mouseleave",function(){return e.reset()})("keydown",function(l){return e.onKeydown(l)}),n.YNc(1,b,1,1,"ng-template",null,1,n.W1O)(3,A,4,11,"ng-template",2),n.qZA()),2&a&&(n.uIk("aria-label",e.ariaLabel)("aria-valuemax",e.range.length)("aria-valuenow",e.value),n.xp6(3),n.Q6J("ngForOf",e.range))},dependencies:[r.sg,r.tP],encapsulation:2,changeDetection:0})}return t})(),O=(()=>{class t{static forRoot(){return{ngModule:t,providers:[]}}static#n=this.\u0275fac=function(a){return new(a||t)};static#e=this.\u0275mod=n.oAB({type:t});static#t=this.\u0275inj=n.cJS({imports:[r.ez]})}return t})();var p=i(33599);let f=(()=>{class t{constructor(){this.max=10,this.rate=7,this.isReadonly=!0}static#n=this.\u0275fac=function(a){return new(a||t)};static#e=this.\u0275cmp=n.Xpm({type:t,selectors:[["demo-rating-basic"]],decls:7,vars:4,consts:[[3,"ngModel","max","readonly","ngModelChange"],[1,"card"],[1,"card-block","card-header",2,"margin","15px 0"]],template:function(a,e){1&a&&(n.TgZ(0,"rating",0),n.NdJ("ngModelChange",function(l){return e.rate=l}),n.qZA(),n.TgZ(1,"div",1)(2,"pre",2),n._uU(3,"Rate: "),n.TgZ(4,"b"),n._uU(5),n.qZA(),n._uU(6," "),n.qZA()()),2&a&&(n.Q6J("ngModel",e.rate)("max",e.max)("readonly",e.isReadonly),n.xp6(5),n.Oqu(e.rate))},dependencies:[d.JJ,d.On,u],encapsulation:2})}return t})();function U(t,m){1&t&&n._uU(0),2&t&&n.Oqu(m.index<m.value?"\u2611":"\u2610")}function M(t,m){if(1&t&&(n.TgZ(0,"button"),n._uU(1),n.qZA()),2&t){const o=m.index,a=m.value;n.Gre("btn btn-",o<a?"warning":"default",""),n.xp6(1),n.hij(" ",o<a?"\u2605":"\u2606"," ")}}let y=(()=>{class t{constructor(){this.x=5,this.y=2}static#n=this.\u0275fac=function(a){return new(a||t)};static#e=this.\u0275cmp=n.Xpm({type:t,selectors:[["demo-rating-custom"]],decls:24,vars:8,consts:[[2,"color","#0275d8","font-size","20px",3,"max","ngModel","customTemplate","ngModelChange"],[1,"card"],[1,"card-block","card-header",2,"margin","15px 0"],["t",""],[3,"max","ngModel","customTemplate","ngModelChange"],["tt",""]],template:function(a,e){if(1&a&&(n.TgZ(0,"div")(1,"rating",0),n.NdJ("ngModelChange",function(l){return e.x=l}),n.qZA(),n.TgZ(2,"div",1)(3,"pre",2)(4,"b"),n._uU(5,"("),n.TgZ(6,"i"),n._uU(7,"Rate:"),n.qZA(),n._uU(8),n.qZA()()(),n.YNc(9,U,1,1,"ng-template",null,3,n.W1O),n.qZA(),n.TgZ(11,"div")(12,"rating",4),n.NdJ("ngModelChange",function(l){return e.y=l}),n.qZA(),n.TgZ(13,"div",1)(14,"pre",2),n._uU(15," "),n.TgZ(16,"b"),n._uU(17,"("),n.TgZ(18,"i"),n._uU(19,"Rate:"),n.qZA(),n._uU(20),n.qZA(),n._uU(21," "),n.qZA()(),n.YNc(22,M,2,4,"ng-template",null,5,n.W1O),n.qZA()),2&a){const c=n.MAs(10),l=n.MAs(23);n.xp6(1),n.Q6J("max",10)("ngModel",e.x)("customTemplate",c),n.xp6(7),n.hij(" ",e.x,")"),n.xp6(4),n.Q6J("max",10)("ngModel",e.y)("customTemplate",l),n.xp6(8),n.hij(" ",e.y,")")}},dependencies:[d.JJ,d.On,u],encapsulation:2})}return t})();const E=()=>["one","two","three"],S=(t,m,o)=>({"label-warning":t,"label-info":m,"label-success":o}),J=t=>({display:t});let C=(()=>{class t{constructor(){this.max=10,this.rate=7,this.isReadonly=!1,this.percent=0}hoveringOver(o){this.overStar=o,this.percent=o/this.max*100}resetStar(){this.overStar=void 0}static#n=this.\u0275fac=function(a){return new(a||t)};static#e=this.\u0275cmp=n.Xpm({type:t,selectors:[["demo-rating-dynamic"]],decls:18,vars:18,consts:[[3,"ngModel","max","readonly","titles","ngModelChange","onHover","onLeave"],[1,"label",3,"ngClass","ngStyle"],[1,"card"],[1,"card-block","card-header",2,"margin","15px 0"],["type","button",1,"btn","btn-sm","btn-danger",3,"disabled","click"],["type","button",1,"btn","btn-sm","btn-primary",3,"click"]],template:function(a,e){1&a&&(n.TgZ(0,"rating",0),n.NdJ("ngModelChange",function(l){return e.rate=l})("onHover",function(l){return e.hoveringOver(l)})("onLeave",function(){return e.resetStar()}),n.qZA(),n.TgZ(1,"span",1),n._uU(2),n.qZA(),n.TgZ(3,"div",2)(4,"pre",3),n._uU(5,"Rate: "),n.TgZ(6,"b"),n._uU(7),n.qZA(),n._uU(8,";  Readonly is: "),n.TgZ(9,"i"),n._uU(10),n.qZA(),n._uU(11,";  Hovering over: "),n.TgZ(12,"b"),n._uU(13),n.qZA()()(),n.TgZ(14,"button",4),n.NdJ("click",function(){return e.rate=0}),n._uU(15,"Clear\n"),n.qZA(),n.TgZ(16,"button",5),n.NdJ("click",function(){return e.isReadonly=!e.isReadonly}),n._uU(17,"Toggle Readonly\n"),n.qZA()),2&a&&(n.Q6J("ngModel",e.rate)("max",e.max)("readonly",e.isReadonly)("titles",n.DdM(11,E)),n.xp6(1),n.Q6J("ngClass",n.kEZ(12,S,e.percent<30,e.percent>=30&&e.percent<70,e.percent>=70))("ngStyle",n.VKq(16,J,e.overStar&&!e.isReadonly?"inline":"none")),n.xp6(1),n.hij("",e.percent,"%"),n.xp6(5),n.Oqu(e.rate),n.xp6(3),n.Oqu(e.isReadonly),n.xp6(3),n.Oqu(e.overStar||"none"),n.xp6(1),n.Q6J("disabled",e.isReadonly))},dependencies:[r.mk,r.PC,d.JJ,d.On,u],encapsulation:2})}return t})(),R=(()=>{class t{constructor(){this.max=10,this.rate=7,this.isReadonly=!1}confirmSelection(o){(13===o.keyCode||"Enter"===o.key)&&(this.isReadonly=!0)}resetStars(){this.rate=0,this.isReadonly=!1}static#n=this.\u0275fac=function(a){return new(a||t)};static#e=this.\u0275cmp=n.Xpm({type:t,selectors:[["demo-select-on-enter"]],decls:14,vars:5,consts:[[3,"ngModel","max","readonly","ngModelChange","keyup"],[1,"card"],[1,"card-block","card-header",2,"margin","15px 0"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-primary","ml-3","ms-3",3,"click"]],template:function(a,e){1&a&&(n.TgZ(0,"rating",0),n.NdJ("ngModelChange",function(l){return e.rate=l})("keyup",function(l){return e.confirmSelection(l)}),n.qZA(),n.TgZ(1,"div",1)(2,"pre",2),n._uU(3,"Rating: "),n.TgZ(4,"b"),n._uU(5),n.qZA(),n._uU(6,";  Readonly is: "),n.TgZ(7,"i"),n._uU(8),n.qZA(),n._uU(9,";"),n.qZA()(),n.TgZ(10,"button",3),n.NdJ("click",function(){return e.resetStars()}),n._uU(11,"Reset rating and status"),n.qZA(),n.TgZ(12,"button",4),n.NdJ("click",function(){return e.isReadonly=!e.isReadonly}),n._uU(13,"Toggle ReadOnly"),n.qZA()),2&a&&(n.Q6J("ngModel",e.rate)("max",e.max)("readonly",e.isReadonly),n.xp6(5),n.Oqu(e.rate),n.xp6(3),n.Oqu(e.isReadonly))},dependencies:[d.JJ,d.On,u],encapsulation:2})}return t})();function k(){return Object.assign(new h,{ariaLabel:"My Rating"})}let v=(()=>{class t{constructor(){this.max=10,this.rate=7}static#n=this.\u0275fac=function(a){return new(a||t)};static#e=this.\u0275cmp=n.Xpm({type:t,selectors:[["demo-rating-config"]],features:[n._Bn([{provide:h,useFactory:k}])],decls:7,vars:3,consts:[[3,"ngModel","max","ngModelChange"],[1,"card"],[1,"card-block","card-header",2,"margin","15px 0"]],template:function(a,e){1&a&&(n.TgZ(0,"rating",0),n.NdJ("ngModelChange",function(l){return e.rate=l}),n.qZA(),n.TgZ(1,"div",1)(2,"pre",2),n._uU(3,"Rate: "),n.TgZ(4,"b"),n._uU(5),n.qZA(),n._uU(6," "),n.qZA()()),2&a&&(n.Q6J("ngModel",e.rate)("max",e.max),n.xp6(5),n.Oqu(e.rate))},dependencies:[d.JJ,d.On,u],encapsulation:2})}return t})();const F=[{name:"Overview",anchor:"overview",tabName:"overview",outlet:p.ke,content:[{title:"Basic rating",anchor:"rating-basic",component:i(4563),html:i(80426),outlet:f},{title:"Dynamic rating",anchor:"rating-dynamic",component:i(16573),html:i(91933),outlet:C},{title:"Custom icons",anchor:"rating-custom",component:i(71138),html:i(93311),outlet:y},{title:"Select on enter",description:"Key navigation example. Focus on rating and use arrow keys to set its value,\n          then press <code>Enter</code> to select the value, after this, the rating state will be changed to readonly.",anchor:"select-on-enter",component:i(16526),html:i(63541),outlet:R},{title:"Configuring defaults",anchor:"demo-rating-config",component:i(40209),html:i(29485),outlet:v}]},{name:"Installation",anchor:"api-reference",tabName:"api",usage:i(84854),importInfo:'<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> --component <span class="pln">rating</span>',outlet:p.s$,content:[{title:"RatingComponent",anchor:"rating-component",outlet:p.Wh},{title:"RatingConfig",anchor:"rating-config",outlet:p.Vg}]},{name:"Examples",anchor:"examples",tabName:"examples",outlet:p.ke,content:[{title:"Basic rating",anchor:"rating-basic-ex",outlet:f},{title:"Dynamic rating",anchor:"rating-dynamic-ex",outlet:C},{title:"Custom icons",anchor:"rating-custom-ex",outlet:y},{title:"Select on enter",anchor:"select-on-enter-ex",outlet:R},{title:"Configuring defaults",anchor:"demo-rating-config-ex",outlet:v}]}];var B=i(94008),L=i(61543);let _=(()=>{class t{constructor(){this.name="Rating",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/rating",this.componentContent=F}static#n=this.\u0275fac=function(a){return new(a||t)};static#e=this.\u0275cmp=n.Xpm({type:t,selectors:[["rating-section"]],decls:6,vars:4,consts:[[3,"name","src","componentContent"],[3,"content"]],template:function(a,e){1&a&&(n.TgZ(0,"demo-section",0)(1,"p"),n._uU(2,"Rating component that will take care of visualising a star rating bar"),n.qZA(),n.TgZ(3,"p"),n._uU(4,"The easiest way to add the rating component to your app (will be added to the root module)"),n.qZA(),n._UZ(5,"docs-section",1),n.qZA()),2&a&&(n.Q6J("name",e.name)("src",e.src)("componentContent",e.componentContent),n.xp6(5),n.Q6J("content",e.componentContent))},dependencies:[B.Z,L.Z],encapsulation:2,changeDetection:0})}return t})();const P=[{path:"",component:_}];let N=(()=>{class t{static#n=this.\u0275fac=function(a){return new(a||t)};static#e=this.\u0275mod=n.oAB({type:t});static#t=this.\u0275inj=n.cJS({imports:[r.ez,d.u5,p.Gz,O.forRoot(),T.Bz.forChild(P)]})}return t})()},80426:(g,s,i)=>{i.r(s),i.d(s,{default:()=>r});const r='<rating [(ngModel)]="rate" [max]="max" [readonly]="isReadonly"></rating>\n<div class="card">\n    <pre class="card-block card-header" style="margin:15px 0;">Rate: <b>{{rate}}</b> </pre>\n</div>'},4563:(g,s,i)=>{i.r(s),i.d(s,{default:()=>r});const r="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-rating-basic',\n  templateUrl: './basic.html'\n})\nexport class DemoRatingBasicComponent {\n  max = 10;\n  rate = 7;\n  isReadonly = true;\n}\n"},29485:(g,s,i)=>{i.r(s),i.d(s,{default:()=>r});const r='<rating [(ngModel)]="rate" [max]="max"></rating>\n<div class="card">\n  <pre class="card-block card-header" style="margin:15px 0;">Rate: <b>{{rate}}</b> </pre>\n</div>\n'},40209:(g,s,i)=>{i.r(s),i.d(s,{default:()=>r});const r="import { Component } from '@angular/core';\nimport { RatingConfig } from 'ngx-bootstrap/rating';\n\n// such override allows to keep some initial values\nexport function getRatingConfig(): RatingConfig {\n  return Object.assign(new RatingConfig(), { ariaLabel: 'My Rating' });\n}\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-rating-config',\n  templateUrl: './config.html',\n  providers: [{ provide: RatingConfig, useFactory: getRatingConfig }]\n})\nexport class DemoRatingConfigComponent {\n  max = 10;\n  rate = 7;\n}\n"},93311:(g,s,i)=>{i.r(s),i.d(s,{default:()=>r});const r='<div>\n  <rating [max]="10" [(ngModel)]="x" [customTemplate]="t" style="color: #0275d8;font-size: 20px;"></rating>\n  <div class="card">\n    <pre class="card-block card-header" style="margin:15px 0;"><b>(<i>Rate:</i> {{x}})</b></pre>\n  </div>\n  <ng-template #t let-index="index" let-value="value">{{index < value ? \'&#9745;\' : \'&#9744;\'}}</ng-template>\n</div>\n\n<div>\n  <rating [max]="10" [(ngModel)]="y" [customTemplate]="tt"></rating>\n  <div class="card">\n    <pre class="card-block card-header" style="margin:15px 0;"> <b>(<i>Rate:</i> {{y}})</b> </pre>\n  </div>\n  <ng-template #tt let-i="index" let-v="value">\n    <button class="btn btn-{{i < v ? \'warning\' : \'default\'}}">\n      {{i < v ? \'&#9733;\' : \'&#9734;\'}}\n    </button>\n  </ng-template>\n</div>\n'},71138:(g,s,i)=>{i.r(s),i.d(s,{default:()=>r});const r="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-rating-custom',\n  templateUrl: './custom.html'\n})\nexport class DemoRatingCustomComponent {\n  x = 5;\n  y = 2;\n}\n"},91933:(g,s,i)=>{i.r(s),i.d(s,{default:()=>r});const r='<rating [(ngModel)]="rate" [max]="max" [readonly]="isReadonly"\n        (onHover)="hoveringOver($event)" (onLeave)="resetStar()"\n        [titles]="[\'one\',\'two\',\'three\']"></rating>\n<span class="label"\n      [ngClass]="{\'label-warning\': percent<30, \'label-info\': percent>=30 && percent<70, \'label-success\': percent>=70}"\n      [ngStyle]="{display: (overStar && !isReadonly) ? \'inline\' : \'none\'}">{{percent}}%</span>\n<div class="card">\n    <pre class="card-block card-header" style="margin:15px 0;">Rate: <b>{{rate}}</b>;  Readonly is: <i>{{isReadonly}}</i>;  Hovering over: <b>{{overStar || "none"}}</b></pre>\n</div>\n\n<button type="button" class="btn btn-sm btn-danger" (click)="rate = 0"\n        [disabled]="isReadonly">Clear\n</button>\n<button type="button" class="btn btn-sm btn-primary"\n        (click)="isReadonly = ! isReadonly">Toggle Readonly\n</button>\n'},16573:(g,s,i)=>{i.r(s),i.d(s,{default:()=>r});const r="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-rating-dynamic',\n  templateUrl: './dynamic.html'\n})\nexport class DemoRatingDynamicComponent {\n  max = 10;\n  rate = 7;\n  isReadonly = false;\n\n  overStar: number | undefined;\n  percent = 0;\n\n  hoveringOver(value: number): void {\n    this.overStar = value;\n    this.percent = (value / this.max) * 100;\n  }\n\n  resetStar(): void {\n    this.overStar = void 0;\n  }\n}\n"},63541:(g,s,i)=>{i.r(s),i.d(s,{default:()=>r});const r='<rating [(ngModel)]="rate" [max]="max" [readonly]="isReadonly"\n        (keyup)="confirmSelection($event)"></rating>\n<div class="card">\n  <pre class="card-block card-header" style="margin:15px 0;">Rating: <b>{{rate}}</b>;  Readonly is: <i>{{isReadonly}}</i>;</pre>\n</div>\n<button class="btn btn-primary" (click)="resetStars()">Reset rating and status</button>\n<button class="btn btn-primary ml-3 ms-3" (click)="isReadonly = !isReadonly">Toggle ReadOnly</button>\n'},16526:(g,s,i)=>{i.r(s),i.d(s,{default:()=>r});const r="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-select-on-enter',\n  templateUrl: './select-on-enter.html'\n})\nexport class DemoRatingSelectOnEnterComponent {\n  max = 10;\n  rate = 7;\n  isReadonly = false;\n\n  confirmSelection(event: KeyboardEvent) {\n    if (event.keyCode === 13 || event.key === 'Enter') {\n      this.isReadonly = true;\n    }\n  }\n\n  resetStars() {\n    this.rate = 0;\n    this.isReadonly = false;\n  }\n}\n"},84854:(g,s,i)=>{i.r(s),i.d(s,{default:()=>r});const r="import { RatingModule } from 'ngx-bootstrap/rating';\n\n@NgModule({\n  imports: [RatingModule.forRoot(),...]\n})\nexport class AppModule(){}\n"}}]);