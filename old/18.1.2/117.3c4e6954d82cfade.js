"use strict";(self.webpackChunkngx_bootstrap_docs=self.webpackChunkngx_bootstrap_docs||[]).push([[117],{52439:(p,i,e)=>{e.d(i,{C:()=>S});var r=e(27e3),n=e(54438),C=e(8681),t=e(60177),k=e(4875),E=e(80903);const j=["scrollElement"],_=d=>({tab:d});function B(d,y){if(1&d&&(n.j41(0,"li")(1,"a",6,0),n.EFF(3),n.k0s()()),2&d){const s=y.$implicit,c=n.XpG(3);n.R7$(),n.Y8G("queryParams",n.eq3(4,_,c._componentContent.name))("fragment",s.anchor),n.BMQ("data-anchor",s.anchor),n.R7$(2),n.JRh(s.title)}}function h(d,y){if(1&d&&(n.j41(0,"ul"),n.DNE(1,B,4,6,"li",5),n.k0s()),2&d){const s=n.XpG(2);n.R7$(),n.Y8G("ngForOf",s._componentContent.content)}}function R(d,y){if(1&d){const s=n.RV6();n.j41(0,"div",2),n.bIt("click",function(u){n.eBV(s);const g=n.XpG();return n.Njj(g.goToSection(u))}),n.j41(1,"a",3),n.EFF(2),n.k0s(),n.DNE(3,h,2,1,"ul",4),n.k0s()}if(2&d){const s=n.XpG();n.R7$(),n.Mz_("routerLink","/",s._componentContent.parentRouteTitle,""),n.R7$(),n.JRh(s._componentContent.parentRouteTitle),n.R7$(),n.Y8G("ngIf",(null==s._componentContent?null:s._componentContent.content)&&(null==s._componentContent.content?null:s._componentContent.content.length))}}let b=(()=>{class d{onScrollEvent(){this.initActiveMenuTab()}constructor(s,c,u){this.document=s,this._renderer=c,this.router=u}ngOnChanges(s){s?.componentContent&&(this._componentContent=this.mapComponentContent(s.componentContent.currentValue),s?.componentContent.firstChange||this.setScrollAttributes())}mapComponentContent(s){const c=this.router.parseUrl(this.router.url).root.children.primary.segments[0].path;return{name:s.tabName,parentRouteTitle:c,content:Array.isArray(s.content)?s.content.map(u=>({anchor:u.anchor,title:u.title})):[]}}goToSection(s){const c=s.target;c.dataset.anchor&&this.goToSectionWIthAnchor(c.dataset.anchor)}goToSectionWIthAnchor(s){if(!s)return;const c=this.document.getElementById(s),u=this.document.getElementById("header");c&&u&&setTimeout(()=>{window.scrollTo({top:c.offsetTop-u.offsetHeight-6,behavior:"smooth"})},100)}initActiveMenuTab(){this.scrollElementsList?.length&&this.scrollElementsList.map(s=>{const c=s.nativeElement.getAttribute("data-min-scroll-value"),u=s.nativeElement.getAttribute("data-max-scroll-value"),g=window.pageYOffset;g>=c&&g<=u?this._renderer.addClass(s.nativeElement.parentElement,"active"):this._renderer.removeClass(s.nativeElement.parentElement,"active")})}setScrollAttributes(){const s=this.document.querySelector("header")?.offsetHeight||0;this.scrollElementsList?.map(c=>{const u=c.nativeElement.getAttribute("data-anchor"),g=this.document.getElementById(u);if(g){const A=g.offsetTop-s-10,F=g.parentElement.getBoundingClientRect().height+6||0;this._renderer.setAttribute(c.nativeElement,"data-max-scroll-value",(A+F).toString()),this._renderer.setAttribute(c.nativeElement,"data-min-scroll-value",A.toString())}return c})}ngAfterViewInit(){this.goToSectionWIthAnchor(this.router.parseUrl(this.router.url).fragment)}ngAfterViewChecked(){this.setScrollAttributes()}static#t=this.\u0275fac=function(c){return new(c||d)(n.rXU(t.qQ),n.rXU(n.sFG),n.rXU(C.Ix))};static#e=this.\u0275cmp=n.VBU({type:d,selectors:[["add-nav"]],viewQuery:function(c,u){if(1&c&&n.GBs(j,5),2&c){let g;n.mGM(g=n.lsd())&&(u.scrollElementsList=g)}},hostBindings:function(c,u){1&c&&n.bIt("scroll",function(){return u.onScrollEvent()},!1,n.tSv)},inputs:{componentContent:"componentContent"},features:[n.OA$],decls:1,vars:1,consts:[["scrollElement",""],["class","add-nav-container",3,"click",4,"ngIf"],[1,"add-nav-container",3,"click"],[3,"routerLink"],[4,"ngIf"],[4,"ngFor","ngForOf"],["routerLink",".",3,"queryParams","fragment"]],template:function(c,u){1&c&&n.DNE(0,R,4,4,"div",1),2&c&&n.Y8G("ngIf",u._componentContent)},dependencies:[t.Sq,t.bT,C.Wk],encapsulation:2})}return d})();function v(d,y){1&d&&n.eu8(0)}function D(d,y){1&d&&n.eu8(0)}function x(d,y){1&d&&n.eu8(0)}function O(d,y){if(1&d){const s=n.RV6();n.qex(0),n.j41(1,"tabset",1)(2,"tab",2),n.bIt("selectTab",function(){n.eBV(s);const u=n.XpG();return n.Njj(u.onSelect("overview"))}),n.DNE(3,v,1,0,"ng-container",3),n.k0s(),n.j41(4,"tab",4),n.bIt("selectTab",function(){n.eBV(s);const u=n.XpG();return n.Njj(u.onSelect("api"))}),n.DNE(5,D,1,0,"ng-container",3),n.k0s(),n.j41(6,"tab",5),n.bIt("selectTab",function(){n.eBV(s);const u=n.XpG();return n.Njj(u.onSelect("examples"))}),n.DNE(7,x,1,0,"ng-container",3),n.k0s()(),n.nrm(8,"add-nav",6),n.bVm()}if(2&d){const s=n.XpG();n.R7$(2),n.Y8G("customClass","example-tabset")("active",s.overview),n.R7$(),n.Y8G("ngComponentOutlet",s.content[0].outlet)("ngComponentOutletInjector",s.sectionInjections(s.content[0])),n.R7$(),n.Y8G("customClass","example-tabset")("active",s.api),n.R7$(),n.Y8G("ngComponentOutlet",s.content[1].outlet)("ngComponentOutletInjector",s.sectionInjections(s.content[1])),n.R7$(),n.Y8G("customClass","example-tabset")("active",s.examples),n.R7$(),n.Y8G("ngComponentOutlet",s.content[2].outlet)("ngComponentOutletInjector",s.sectionInjections(s.content[2])),n.R7$(),n.Y8G("componentContent",s.overview?s.content[0]:s.api?s.content[1]:s.content[2])}}let S=(()=>{class d{constructor(s,c,u,g){this.injector=s,this.activatedRoute=c,this.router=u,this.changeDetection=g,this._injectors=new Map,this.overview=!1,this.api=!1,this.examples=!1,this.routeSubscription=this.router.events.subscribe(A=>{if(A instanceof C.wF){const F=this.router.parseUrl(A.url).queryParams;this.initActiveTab(F.tab?.toString())}})}initActiveTab(s){if(this.resetTabs(),!s||!this.checkActiveTab(s))return this.overview=!0,void this.onSelect("overview");this[s]=!0,this.changeDetection.detectChanges()}checkActiveTab(s){return"overview"===s||"api"===s||"examples"===s}onSelect(s){this.resetTabs();const c={queryParams:{tab:s},fragment:this.router.parseUrl(this.router.url).fragment||void 0};this.router.navigate([],c),this[s]=!0}sectionInjections(s){if(this._injectors.has(s))return this._injectors.get(s);const c=n.zZn.create([{provide:r.F,useValue:s}],this.injector);return this._injectors.set(s,c),c}resetTabs(){this.overview=!1,this.api=!1,this.examples=!1}ngOnDestroy(){this.routeSubscription.unsubscribe()}static#t=this.\u0275fac=function(c){return new(c||d)(n.rXU(n.zZn),n.rXU(C.nX),n.rXU(C.Ix),n.rXU(n.gRc))};static#e=this.\u0275cmp=n.VBU({type:d,selectors:[["docs-section"]],inputs:{content:"content"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"example-tabset-box"],["heading","Overview",3,"selectTab","customClass","active"],[4,"ngComponentOutlet","ngComponentOutletInjector"],["heading","API",3,"selectTab","customClass","active"],["heading","Examples",3,"selectTab","customClass","active"],[1,"add-nav",3,"componentContent"]],template:function(c,u){1&c&&n.DNE(0,O,9,13,"ng-container",0),2&c&&n.Y8G("ngIf",u.content)},dependencies:[t.OI,t.bT,k.V,E.f,b],encapsulation:2})}return d})()},95117:(p,i,e)=>{e.r(i),e.d(i,{AlertsSectionComponent:()=>P,DemoAlertsModule:()=>w});var r=e(60177),n=e(8681),C=e(31635),t=e(54438),k=e(39555);let E=(()=>{class o{constructor(){this.type="warning",this.dismissible=!1,this.dismissOnTimeout=void 0}static#t=this.\u0275fac=function(l){return new(l||o)};static#e=this.\u0275prov=t.jDH({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();const j=["*"];function _(o,f){if(1&o){const a=t.RV6();t.j41(0,"button",2),t.bIt("click",function(){t.eBV(a);const m=t.XpG(2);return t.Njj(m.close())}),t.j41(1,"span",3),t.EFF(2,"\xd7"),t.k0s(),t.j41(3,"span",4),t.EFF(4,"Close"),t.k0s()()}}function B(o,f){if(1&o&&(t.j41(0,"div",1),t.DNE(1,_,5,0,"ng-template",0),t.SdG(2),t.k0s()),2&o){const a=t.XpG();t.HbH("alert alert-"+a.type),t.Y8G("ngClass",a.classes),t.R7$(),t.Y8G("ngIf",a.dismissible)}}class h{constructor(f,a){this.changeDetection=a,this.type="warning",this.dismissible=!1,this.isOpen=!0,this.onClose=new t.bkB,this.onClosed=new t.bkB,this.classes="",this.dismissibleChange=new t.bkB,Object.assign(this,f),this.dismissibleChange.subscribe(()=>{this.classes=this.dismissible?"alert-dismissible":"",this.changeDetection.markForCheck()})}ngOnInit(){this.dismissOnTimeout&&setTimeout(()=>this.close(),parseInt(this.dismissOnTimeout,10))}close(){this.isOpen&&(this.onClose.emit(this),this.isOpen=!1,this.changeDetection.markForCheck(),this.onClosed.emit(this))}static#t=this.\u0275fac=function(a){return new(a||h)(t.rXU(E),t.rXU(t.gRc))};static#e=this.\u0275cmp=t.VBU({type:h,selectors:[["alert"],["bs-alert"]],inputs:{type:"type",dismissible:"dismissible",dismissOnTimeout:"dismissOnTimeout",isOpen:"isOpen"},outputs:{onClose:"onClose",onClosed:"onClosed"},standalone:!0,features:[t.aNF],ngContentSelectors:j,decls:1,vars:1,consts:[[3,"ngIf"],["role","alert",3,"ngClass"],["type","button","aria-label","Close",1,"close","btn-close",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"sr-only","visually-hidden"]],template:function(a,l){1&a&&(t.NAR(),t.DNE(0,B,3,4,"ng-template",0)),2&a&&t.Y8G("ngIf",l.isOpen)},dependencies:[r.bT,r.YU],encapsulation:2,changeDetection:0})}(0,C.Cg)([(0,k.Yr)(),(0,C.Sn)("design:type",Object)],h.prototype,"dismissible",void 0);let R=(()=>{class o{static forRoot(){return{ngModule:o,providers:[]}}static#t=this.\u0275fac=function(l){return new(l||o)};static#e=this.\u0275mod=t.$C({type:o});static#n=this.\u0275inj=t.G2t({})}return o})();var b=e(37472);let v=(()=>{class o{static#t=this.\u0275fac=function(l){return new(l||o)};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["demo-alert-basic"]],decls:16,vars:0,consts:[["type","success"],["type","info"],["type","warning"],["type","danger"]],template:function(l,m){1&l&&(t.j41(0,"alert",0)(1,"strong"),t.EFF(2,"Well done!"),t.k0s(),t.EFF(3," You successfully read this important alert message.\n"),t.k0s(),t.j41(4,"alert",1)(5,"strong"),t.EFF(6,"Heads up!"),t.k0s(),t.EFF(7," This alert needs your attention, but it's not super important.\n"),t.k0s(),t.j41(8,"alert",2)(9,"strong"),t.EFF(10,"Warning!"),t.k0s(),t.EFF(11," Better check yourself, you're not looking too good.\n"),t.k0s(),t.j41(12,"alert",3)(13,"strong"),t.EFF(14,"Oh snap!"),t.k0s(),t.EFF(15," Change a few things up and try submitting again.\n"),t.k0s())},dependencies:[h],encapsulation:2})}return o})(),D=(()=>{class o{static#t=this.\u0275fac=function(l){return new(l||o)};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["demo-alert-link"]],decls:27,vars:0,consts:[["type","success"],["href","#",1,"alert-link"],["type","info"],["type","warning"],["type","danger"]],template:function(l,m){1&l&&(t.j41(0,"alert",0)(1,"strong"),t.EFF(2,"Well done!"),t.k0s(),t.EFF(3," You successfully read "),t.j41(4,"a",1),t.EFF(5,"this important alert message"),t.k0s(),t.EFF(6,".\n"),t.k0s(),t.j41(7,"alert",2)(8,"strong"),t.EFF(9,"Heads up!"),t.k0s(),t.EFF(10," This "),t.j41(11,"a",1),t.EFF(12,"alert needs your attention"),t.k0s(),t.EFF(13,", but it's not super important.\n"),t.k0s(),t.j41(14,"alert",3)(15,"strong"),t.EFF(16,"Warning!"),t.k0s(),t.EFF(17," Better check yourself, you're "),t.j41(18,"a",1),t.EFF(19,"not looking too good"),t.k0s(),t.EFF(20,".\n"),t.k0s(),t.j41(21,"alert",4)(22,"strong"),t.EFF(23,"Oh snap!"),t.k0s(),t.j41(24,"a",1),t.EFF(25,"Change a few things up"),t.k0s(),t.EFF(26," and try submitting again.\n"),t.k0s())},dependencies:[h],encapsulation:2})}return o})(),x=(()=>{class o{static#t=this.\u0275fac=function(l){return new(l||o)};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["demo-alert-content"]],decls:7,vars:0,consts:[["type","success"],[1,"alert-heading"],[1,"mb-0"]],template:function(l,m){1&l&&(t.j41(0,"alert",0)(1,"h4",1),t.EFF(2,"Well done!"),t.k0s(),t.j41(3,"p"),t.EFF(4,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),t.k0s(),t.j41(5,"p",2),t.EFF(6,"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."),t.k0s()())},dependencies:[h],encapsulation:2})}return o})();function O(o,f){if(1&o){const a=t.RV6();t.j41(0,"div")(1,"alert",2),t.bIt("onClosed",function(){const m=t.eBV(a).$implicit,T=t.XpG();return t.Njj(T.onClosed(m))}),t.EFF(2),t.k0s()()}if(2&o){const a=f.$implicit,l=t.XpG();t.R7$(),t.Y8G("type",a.type)("dismissible",l.dismissible),t.R7$(),t.JRh(a.msg)}}let U=(()=>{class o{constructor(){this.dismissible=!0,this.defaultAlerts=[{type:"success",msg:"You successfully read this important alert message."},{type:"info",msg:"This alert needs your attention, but it's not super important."},{type:"danger",msg:"Better check yourself, you're not looking too good."}],this.alerts=this.defaultAlerts}reset(){this.alerts=this.defaultAlerts}onClosed(a){this.alerts=this.alerts.filter(l=>l!==a)}static#t=this.\u0275fac=function(l){return new(l||o)};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["demo-alert-dismiss"]],decls:5,vars:1,consts:[[4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary",3,"click"],[3,"onClosed","type","dismissible"]],template:function(l,m){1&l&&(t.DNE(0,O,3,3,"div",0),t.j41(1,"button",1),t.bIt("click",function(){return m.dismissible=!m.dismissible}),t.EFF(2,"Toggle dismissible"),t.k0s(),t.j41(3,"button",1),t.bIt("click",function(){return m.reset()}),t.EFF(4,"Reset"),t.k0s()),2&l&&t.Y8G("ngForOf",m.alerts)},dependencies:[h,r.Sq],encapsulation:2})}return o})();var S=e(345);function d(o,f){if(1&o&&(t.j41(0,"div")(1,"alert",1),t.nrm(2,"span",2),t.k0s()()),2&o){const a=f.$implicit;t.R7$(),t.Y8G("type",a.type),t.R7$(),t.Y8G("innerHtml",a.msg,t.npT)}}let y=(()=>{class o{constructor(a){this.alerts=[{type:"success",msg:"<strong>Well done!</strong> You successfully read this important alert message."},{type:"info",msg:"<strong>Heads up!</strong> This alert needs your attention, but it's not super important."},{type:"danger",msg:"<strong>Warning!</strong> Better check yourself, you're not looking too good."}].map(l=>({type:l.type,msg:a.bypassSecurityTrustHtml(l.msg)}))}static#t=this.\u0275fac=function(l){return new(l||o)(t.rXU(S.up))};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["demo-alert-dynamic-html"]],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"type"],[3,"innerHtml"]],template:function(l,m){1&l&&t.DNE(0,d,3,2,"div",0),2&l&&t.Y8G("ngForOf",m.alerts)},dependencies:[h,r.Sq],encapsulation:2})}return o})();function s(o,f){if(1&o){const a=t.RV6();t.j41(0,"div")(1,"button",3),t.bIt("click",function(){t.eBV(a);const m=t.XpG();return t.Njj(m.changeText())}),t.EFF(2,"Change text"),t.k0s()()}}function c(o,f){if(1&o){const a=t.RV6();t.j41(0,"button",3),t.bIt("click",function(){t.eBV(a);const m=t.XpG();return t.Njj(m.index=0)}),t.EFF(1,"Reset"),t.k0s()}}let u=(()=>{class o{constructor(){this.index=0,this.messages=["You successfully read this important alert message.","Now this text is different from what it was before. Go ahead and click the button one more time","Well done! Click reset button and you'll see the first message"]}changeText(){this.messages.length-1!==this.index&&this.index++}static#t=this.\u0275fac=function(l){return new(l||o)};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["demo-alert-content-html"]],decls:5,vars:3,consts:[["elseBlock",""],["type","success"],[4,"ngIf","ngIfElse"],[1,"btn","btn-primary",3,"click"]],template:function(l,m){if(1&l&&(t.j41(0,"alert",1),t.EFF(1),t.k0s(),t.DNE(2,s,3,0,"div",2)(3,c,2,0,"ng-template",null,0,t.C5r)),2&l){const T=t.sdS(4);t.R7$(),t.JRh(m.messages[m.index]),t.R7$(),t.Y8G("ngIf",m.index!==m.messages.length-1)("ngIfElse",T)}},dependencies:[h,r.bT],encapsulation:2})}return o})();function g(o,f){if(1&o){const a=t.RV6();t.j41(0,"div")(1,"alert",2),t.bIt("onClosed",function(){const m=t.eBV(a).$implicit,T=t.XpG();return t.Njj(T.onClosed(m))}),t.EFF(2),t.k0s()()}if(2&o){const a=f.$implicit;t.R7$(),t.Y8G("type",a.type)("dismissOnTimeout",a.timeout),t.R7$(),t.JRh(a.msg)}}let A=(()=>{class o{constructor(){this.alerts=[{type:"success",msg:`Well done! You successfully read this important alert message. (added: ${(new Date).toLocaleTimeString()})`,timeout:5e3}]}add(){this.alerts.push({type:"info",msg:`This alert will be closed in 5 seconds (added: ${(new Date).toLocaleTimeString()})`,timeout:5e3})}onClosed(a){this.alerts=this.alerts.filter(l=>l!==a)}static#t=this.\u0275fac=function(l){return new(l||o)};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["demo-alert-timeout"]],decls:8,vars:1,consts:[[4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary",3,"click"],[3,"onClosed","type","dismissOnTimeout"]],template:function(l,m){1&l&&(t.j41(0,"p"),t.EFF(1,"If you missed alert under me, just press "),t.j41(2,"code"),t.EFF(3,"Add more"),t.k0s(),t.EFF(4," button"),t.k0s(),t.DNE(5,g,3,3,"div",0),t.j41(6,"button",1),t.bIt("click",function(){return m.add()}),t.EFF(7,"Add more"),t.k0s()),2&l&&(t.R7$(5),t.Y8G("ngForOf",m.alerts))},dependencies:[h,r.Sq],encapsulation:2})}return o})(),F=(()=>{class o{static#t=this.\u0275fac=function(l){return new(l||o)};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["demo-alert-styling-global"]],decls:4,vars:0,consts:[["type","md-color"]],template:function(l,m){1&l&&(t.j41(0,"alert",0)(1,"strong"),t.EFF(2,"Well done!"),t.k0s(),t.EFF(3," You successfully read this important alert message.\n"),t.k0s())},dependencies:[h],styles:["\n  .alert-md-color {\n    background-color: #7B1FA2;\n    border-color: #4A148C;\n    color: #fff;\n  }\n"],encapsulation:2})}return o})(),I=(()=>{class o{static#t=this.\u0275fac=function(l){return new(l||o)};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["demo-alert-styling-local"]],decls:4,vars:0,consts:[["type","md-local"]],template:function(l,m){1&l&&(t.j41(0,"alert",0)(1,"strong"),t.EFF(2,"Well done!"),t.k0s(),t.EFF(3," You successfully read this important alert message.\n"),t.k0s())},dependencies:[h],styles:["[_nghost-%COMP%]   .alert-md-local[_ngcontent-%COMP%]{background-color:#009688;border-color:#00695c;color:#fff}"]})}return o})();function Y(){return Object.assign(new E,{type:"success"})}let G=(()=>{class o{static#t=this.\u0275fac=function(l){return new(l||o)};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["demo-alert-config"]],features:[t.Jv_([{provide:E,useFactory:Y}])],decls:8,vars:0,consts:[["type","info"]],template:function(l,m){1&l&&(t.j41(0,"alert")(1,"strong"),t.EFF(2,"Well done!"),t.k0s(),t.EFF(3," You successfully read this important alert message.\n"),t.k0s(),t.j41(4,"alert",0)(5,"strong"),t.EFF(6,"Heads up!"),t.k0s(),t.EFF(7," This alert needs your attention, but it's not super important.\n"),t.k0s())},dependencies:[h],encapsulation:2})}return o})();const X=[{name:"Overview",anchor:"overview",tabName:"overview",outlet:b.xK,content:[{title:"Basic",anchor:"basic",description:"<p>Alerts are available for any length of text, as well as an optional dismiss\n          button. For proper styling, use one of the four <strong>required</strong>\n          contextual classes (e.g., <code>.alert-success</code>). For inline\n          dismissal, use the <code>dismissible</code> property.</p>",component:e(36935),html:e(67007),outlet:v},{title:"Link color",anchor:"link-color",description:"<p>Use the <code>.alert-link</code> utility class to quickly provide matching\n          colored links within any alert.</p>",component:e(22917),html:e(70953),outlet:D},{title:"Additional content",anchor:"additional-content",description:"<p>Alerts can also contain additional HTML elements like headings and\n          paragraphs.</p>",component:e(60491),html:e(40051),outlet:x},{title:"Dismissing",anchor:"dismissing",description:"<p>Alerts have <code>dismiss</code> option. Enabling it will show close button\n          to the right of the alert.</p>",component:e(55819),html:e(5203),outlet:U},{title:"Dynamic html",anchor:"dynamic-html",description:"<p>Sometimes you will need to show dynamically generated html in alerts, here\n          is how you can make it. And don't forget to sanitize your html.</p>",component:e(23987),html:e(58283),outlet:y},{title:"Dynamic content",anchor:"dynamic-content",description:"<p>Alerts fully support bindings.</p>",component:e(73731),html:e(44123),outlet:u},{title:"Dismiss on timeout",anchor:"dismiss-on-timeout",description:"<p>You can simply set timeout in milliseconds to <code>dismissOnTimeout</code>\n          property to create self closable alerts.</p>",component:e(49669),html:e(25193),outlet:A},{title:"Global styling",anchor:"global-styling",description:"<p>You can add additional types of alerts globally.</p>",component:e(22537),html:e(18173),outlet:F},{title:"Component level styling",anchor:"local-styling",description:"<p>You can add additional types of alerts directly to containing component</p>",component:e(35743),html:e(28807),outlet:I},{title:"Configuring defaults",anchor:"configuration",description:"<p>It is possible to override default alert config partially or completely.</p>",component:e(82401),html:e(4101),outlet:G}]},{name:"Installation",anchor:"api-reference",tabName:"api",usage:e(2796),importInfo:'<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> --component <span class="pln">alerts</span>',outlet:b.Mg,content:[{title:"AlertComponent",anchor:"alert-component",outlet:b.r2},{title:"AlertConfig",anchor:"alert-config",outlet:b.TJ}]},{name:"Examples",anchor:"examples",tabName:"examples",outlet:b.xK,content:[{title:"Basic",anchor:"basic-ex",outlet:v},{title:"Link color",anchor:"link-color-ex",outlet:D},{title:"Additional content",anchor:"additional-content-ex",outlet:x},{title:"Dismissing",anchor:"dismissing-ex",outlet:U},{title:"Dynamic html",anchor:"dynamic-html-ex",outlet:y},{title:"Dynamic content",anchor:"dynamic-content-ex",outlet:u},{title:"Dismiss on timeout",anchor:"dismiss-on-timeout-ex",outlet:A},{title:"Global styling",anchor:"global-styling-ex",outlet:F},{title:"Component level styling",anchor:"local-styling-ex",outlet:I},{title:"Configuring defaults",anchor:"configuration-ex",outlet:G}]}];var L=e(86223),N=e(52439);let P=(()=>{class o{constructor(){this.name="Alerts",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/alert",this.componentContent=X}static#t=this.\u0275fac=function(l){return new(l||o)};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["alert-section"]],decls:6,vars:4,consts:[[3,"name","src","componentContent"],[3,"content"]],template:function(l,m){1&l&&(t.j41(0,"demo-section",0)(1,"p"),t.EFF(2,"Provides contextual feedback messages for typical user actions with the handful of available and flexible alert messages."),t.k0s(),t.j41(3,"p"),t.EFF(4,"The easiest way to add an alerts component to your app (will be added to the root module)"),t.k0s(),t.nrm(5,"docs-section",1),t.k0s()),2&l&&(t.Y8G("name",m.name)("src",m.src)("componentContent",m.componentContent),t.R7$(5),t.Y8G("content",m.componentContent))},dependencies:[L.q,N.C],encapsulation:2,changeDetection:0})}return o})();const W=[{path:"",component:P}];let w=(()=>{class o{static#t=this.routes=W;static#e=this.\u0275fac=function(l){return new(l||o)};static#n=this.\u0275mod=t.$C({type:o});static#o=this.\u0275inj=t.G2t({imports:[R,r.MD,b.ky,n.iI.forChild(W)]})}return o})()},67007:(p,i,e)=>{e.r(i),e.d(i,{default:()=>r});const r='<alert type="success">\n  <strong>Well done!</strong> You successfully read this important alert message.\n</alert>\n<alert type="info">\n  <strong>Heads up!</strong> This alert needs your attention, but it\'s not super important.\n</alert>\n<alert type="warning">\n  <strong>Warning!</strong> Better check yourself, you\'re not looking too good.\n</alert>\n<alert type="danger">\n  <strong>Oh snap!</strong> Change a few things up and try submitting again.\n</alert>\n'},36935:(p,i,e)=>{e.r(i),e.d(i,{default:()=>r});const r="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-alert-basic',\n  templateUrl: './basic.html'\n})\nexport class DemoAlertBasicComponent {}\n"},4101:(p,i,e)=>{e.r(i),e.d(i,{default:()=>r});const r='<alert>\n  <strong>Well done!</strong> You successfully read this important alert message.\n</alert>\n<alert type="info">\n  <strong>Heads up!</strong> This alert needs your attention, but it\'s not super important.\n</alert>\n'},82401:(p,i,e)=>{e.r(i),e.d(i,{default:()=>r});const r="import { Component } from '@angular/core';\nimport { AlertConfig } from 'ngx-bootstrap/alert';\n\n// such override allows to keep some initial values\n\nexport function getAlertConfig(): AlertConfig {\n  return Object.assign(new AlertConfig(), { type: 'success' });\n}\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-alert-config',\n  templateUrl: './config.html',\n  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]\n})\nexport class DemoAlertConfigComponent {}\n"},40051:(p,i,e)=>{e.r(i),e.d(i,{default:()=>r});const r='<alert type="success">\n  <h4 class="alert-heading">Well done!</h4>\n  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n</alert>\n'},60491:(p,i,e)=>{e.r(i),e.d(i,{default:()=>r});const r="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-alert-content',\n  templateUrl: './content.html'\n})\nexport class DemoAlertContentComponent {}\n"},25193:(p,i,e)=>{e.r(i),e.d(i,{default:()=>r});const r='<p>If you missed alert under me, just press <code>Add more</code> button</p>\n<div *ngFor="let alert of alerts">\n  <alert [type]="alert.type" [dismissOnTimeout]="alert.timeout" (onClosed)="onClosed(alert)">{{ alert.msg }}</alert>\n</div>\n<button type="button" class="btn btn-primary" (click)="add()">Add more</button>\n'},49669:(p,i,e)=>{e.r(i),e.d(i,{default:()=>r});const r="import { Component } from '@angular/core';\n\ntype ExampleAlertType = { type: string; msg: string; timeout: number };\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-alert-timeout',\n  templateUrl: './dismiss-on-timeout.html'\n})\nexport class DemoAlertTimeoutComponent {\n  alerts: ExampleAlertType[] = [\n    {\n      type: 'success',\n      msg: `Well done! You successfully read this important alert message. (added: ${new Date().toLocaleTimeString()})`,\n      timeout: 5000\n    }\n  ];\n\n  add(): void {\n    this.alerts.push({\n      type: 'info',\n      msg: `This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`,\n      timeout: 5000\n    });\n  }\n\n  onClosed(dismissedAlert: ExampleAlertType): void {\n    this.alerts = this.alerts.filter((alert) => alert !== dismissedAlert);\n  }\n}\n"},5203:(p,i,e)=>{e.r(i),e.d(i,{default:()=>r});const r='<div *ngFor="let alert of alerts">\n  <alert [type]="alert.type" [dismissible]="dismissible" (onClosed)="onClosed(alert)">{{ alert.msg }}</alert>\n</div>\n<button type="button" class="btn btn-primary" (click)="dismissible = !dismissible">Toggle dismissible</button>\n<button type="button" class="btn btn-primary" (click)="reset()">Reset</button>\n'},55819:(p,i,e)=>{e.r(i),e.d(i,{default:()=>r});const r="import { Component } from '@angular/core';\n\ntype ExampleAlertType = { type: string; msg: string };\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-alert-dismiss',\n  templateUrl: './dismiss.html'\n})\nexport class DemoAlertDismissComponent {\n  dismissible = true;\n  defaultAlerts: ExampleAlertType[] = [\n    {\n      type: 'success',\n      msg: `You successfully read this important alert message.`\n    },\n    {\n      type: 'info',\n      msg: `This alert needs your attention, but it's not super important.`\n    },\n    {\n      type: 'danger',\n      msg: `Better check yourself, you're not looking too good.`\n    }\n  ];\n  alerts = this.defaultAlerts;\n\n  reset(): void {\n    this.alerts = this.defaultAlerts;\n  }\n\n  onClosed(dismissedAlert: ExampleAlertType): void {\n    this.alerts = this.alerts.filter((alert) => alert !== dismissedAlert);\n  }\n}\n"},44123:(p,i,e)=>{e.r(i),e.d(i,{default:()=>r});const r='<alert type="success">{{messages[index]}}</alert>\n\n<div *ngIf="index !== messages.length -1; else elseBlock">\n  <button class="btn btn-primary" (click)="changeText()">Change text</button>\n</div>\n<ng-template #elseBlock>\n  <button class="btn btn-primary" (click)="index = 0">Reset</button>\n</ng-template>\n'},73731:(p,i,e)=>{e.r(i),e.d(i,{default:()=>r});const r="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-alert-content-html',\n  templateUrl: './dynamic-content.html'\n})\nexport class DemoAlertDynamicContentComponent {\n  index = 0;\n  messages = [\n    'You successfully read this important alert message.',\n    'Now this text is different from what it was before. Go ahead and click the button one more time',\n    'Well done! Click reset button and you\\'ll see the first message'\n  ];\n\n  changeText() {\n    if (this.messages.length - 1 !== this.index) {\n      this.index++;\n    }\n  }\n}\n"},58283:(p,i,e)=>{e.r(i),e.d(i,{default:()=>r});const r='<div *ngFor="let alert of alerts">\n  <alert [type]="alert.type"><span [innerHtml]="alert.msg"></span></alert>\n</div>\n'},23987:(p,i,e)=>{e.r(i),e.d(i,{default:()=>r});const r="import { Component } from '@angular/core';\nimport { DomSanitizer, SafeHtml } from '@angular/platform-browser';\n\ntype ExampleAlertType = { type: string; msg: SafeHtml };\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-alert-dynamic-html',\n  templateUrl: './dynamic-html.html'\n})\nexport class DemoAlertDynamicHtmlComponent {\n  alerts: ExampleAlertType[];\n\n  constructor(sanitizer: DomSanitizer) {\n    this.alerts = [\n      {\n        type: 'success',\n        msg: `<strong>Well done!</strong> You successfully read this important alert message.`\n      },\n      {\n        type: 'info',\n        msg: `<strong>Heads up!</strong> This alert needs your attention, but it's not super important.`\n      },\n      {\n        type: 'danger',\n        msg: `<strong>Warning!</strong> Better check yourself, you're not looking too good.`\n      }\n    ].map(\n      (alert): ExampleAlertType => ({\n        type: alert.type,\n        msg: sanitizer.bypassSecurityTrustHtml(alert.msg)\n      })\n    );\n  }\n}\n"},70953:(p,i,e)=>{e.r(i),e.d(i,{default:()=>r});const r='<alert type="success">\n  <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.\n</alert>\n<alert type="info">\n  <strong>Heads up!</strong> This <a href="#" class="alert-link">alert needs your attention</a>, but it\'s not super important.\n</alert>\n<alert type="warning">\n  <strong>Warning!</strong> Better check yourself, you\'re <a href="#" class="alert-link">not looking too good</a>.\n</alert>\n<alert type="danger">\n  <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.\n</alert>\n'},22917:(p,i,e)=>{e.r(i),e.d(i,{default:()=>r});const r="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-alert-link',\n  templateUrl: './link.html'\n})\nexport class DemoAlertLinkComponent {}\n"},18173:(p,i,e)=>{e.r(i),e.d(i,{default:()=>r});const r='<style>\n  .alert-md-color {\n    background-color: #7B1FA2;\n    border-color: #4A148C;\n    color: #fff;\n  }\n</style>\n<alert type="md-color">\n  <strong>Well done!</strong> You successfully read this important alert message.\n</alert>\n'},22537:(p,i,e)=>{e.r(i),e.d(i,{default:()=>r});const r="import { Component, ViewEncapsulation } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-alert-styling-global',\n  templateUrl: './styling-global.html',\n  encapsulation: ViewEncapsulation.None\n})\nexport class DemoAlertStylingGlobalComponent {}\n"},28807:(p,i,e)=>{e.r(i),e.d(i,{default:()=>r});const r='<alert type="md-local">\n  <strong>Well done!</strong> You successfully read this important alert message.\n</alert>\n'},35743:(p,i,e)=>{e.r(i),e.d(i,{default:()=>r});const r="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-alert-styling-local',\n  templateUrl: './styling-local.html',\n  styles: [\n    `\n  :host .alert-md-local {\n    background-color: #009688;\n    border-color: #00695C;\n    color: #fff;\n  }\n  `\n  ]\n})\nexport class DemoAlertStylingLocalComponent {}\n"},2796:(p,i,e)=>{e.r(i),e.d(i,{default:()=>r});const r="### Standalone component usage\nimport { AlertComponent } from 'ngx-bootstrap/alert';\n\n@Components({\n  standalone: true,\n  imports: [AlertComponent,...]\n})\nexport class AppComponent(){}\n\n\n### Module usage\nimport { AlertModule } from 'ngx-bootstrap/alert';\n\n@NgModule({\n  imports: [AlertModule,...]\n})\nexport class AppModule(){}\n"}}]);