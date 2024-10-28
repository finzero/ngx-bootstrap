"use strict";(self.webpackChunkngx_bootstrap_docs=self.webpackChunkngx_bootstrap_docs||[]).push([[648],{78648:(d,o,n)=>{n.r(o),n.d(o,{CollapseSectionComponent:()=>F,DemoCollapseModule:()=>j});var a=n(60177),f=n(84341),E=n(8681),y=n(65972),r=n(37472),e=n(54438),m=n(31029);let h=(()=>{class t{constructor(){this.isCollapsed=!1}static#e=this.\u0275fac=function(l){return new(l||t)};static#n=this.\u0275cmp=e.VBU({type:t,selectors:[["collapse-demo-animation"]],decls:6,vars:3,consts:[["type","button","aria-controls","collapseBasic",1,"btn","btn-primary",3,"click"],["id","collapseBasic",3,"collapse","isAnimated"],[1,"well","well-lg","card","card-block","card-header"]],template:function(l,s){1&l&&(e.j41(0,"button",0),e.bIt("click",function(){return s.isCollapsed=!s.isCollapsed}),e.EFF(1,"Toggle collapse\n"),e.k0s(),e.nrm(2,"hr"),e.j41(3,"div",1)(4,"div",2),e.EFF(5,"Some content"),e.k0s()()),2&l&&(e.BMQ("aria-expanded",!s.isCollapsed),e.R7$(3),e.Y8G("collapse",s.isCollapsed)("isAnimated",!0))},dependencies:[m.D],encapsulation:2})}return t})(),C=(()=>{class t{constructor(){this.isCollapsed=!1}static#e=this.\u0275fac=function(l){return new(l||t)};static#n=this.\u0275cmp=e.VBU({type:t,selectors:[["collapse-demo"]],decls:6,vars:2,consts:[["type","button","aria-controls","collapseBasic",1,"btn","btn-primary",3,"click"],["id","collapseBasic",3,"collapse"],[1,"well","well-lg","card","card-block","card-header"]],template:function(l,s){1&l&&(e.j41(0,"button",0),e.bIt("click",function(){return s.isCollapsed=!s.isCollapsed}),e.EFF(1,"Toggle collapse\n"),e.k0s(),e.nrm(2,"hr"),e.j41(3,"div",1)(4,"div",2),e.EFF(5,"Some content"),e.k0s()()),2&l&&(e.BMQ("aria-expanded",!s.isCollapsed),e.R7$(3),e.Y8G("collapse",s.isCollapsed))},dependencies:[m.D],encapsulation:2})}return t})(),b=(()=>{class t{constructor(){this.isCollapsed=!1,this.message="expanded"}collapsed(){this.message="collapsed"}collapses(){this.message="collapses"}expanded(){this.message="expanded"}expands(){this.message="expands"}static#e=this.\u0275fac=function(l){return new(l||t)};static#n=this.\u0275cmp=e.VBU({type:t,selectors:[["collapse-demo-events"]],decls:11,vars:4,consts:[[1,"row"],[1,"col-md-3"],["type","button","aria-controls","collapseEvent",1,"btn","btn-primary",3,"click"],[1,"col-md-9"],[1,"card","card-block","card-header"],["id","collapseEvent",3,"collapses","expands","collapsed","expanded","isAnimated","collapse"],[1,"well","well-lg","card","card-block","card-header"]],template:function(l,s){1&l&&(e.j41(0,"div",0)(1,"div",1)(2,"button",2),e.bIt("click",function(){return s.isCollapsed=!s.isCollapsed}),e.EFF(3,"Toggle collapse "),e.k0s()(),e.j41(4,"div",3)(5,"pre",4),e.EFF(6),e.k0s()()(),e.nrm(7,"hr"),e.j41(8,"div",5),e.bIt("collapses",function(){return s.collapses()})("expands",function(){return s.expands()})("collapsed",function(){return s.collapsed()})("expanded",function(){return s.expanded()}),e.j41(9,"div",6),e.EFF(10,"Some content"),e.k0s()()),2&l&&(e.R7$(2),e.BMQ("aria-expanded",!s.isCollapsed),e.R7$(4),e.SpI("Event: ",s.message,""),e.R7$(2),e.Y8G("isAnimated",!0)("collapse",s.isCollapsed))},dependencies:[m.D],encapsulation:2})}return t})(),D=(()=>{class t{static#e=this.\u0275fac=function(l){return new(l||t)};static#n=this.\u0275cmp=e.VBU({type:t,selectors:[["demo-accessibility"]],decls:37,vars:0,consts:[[1,"highlighter-rouge"]],template:function(l,s){1&l&&(e.j41(0,"p"),e.EFF(1,"Be sure to add "),e.j41(2,"code",0),e.EFF(3,"aria-expanded"),e.k0s(),e.EFF(4," to the control element. This attribute explicitly conveys the current state of the collapsible element tied to the control to screen readers and similar assistive technologies. If the collapsible element is closed by default, the attribute on the control element should have a value of "),e.j41(5,"code",0),e.EFF(6,'aria-expanded="false"'),e.k0s(),e.EFF(7,". If you\u2019ve set the collapsible element to be open by default using the "),e.j41(8,"code",0),e.EFF(9,"show"),e.k0s(),e.EFF(10," class, set "),e.j41(11,"code",0),e.EFF(12,'aria-expanded="true"'),e.k0s(),e.EFF(13," on the control instead. The plugin will automatically toggle this attribute on the control based on whether or not the collapsible element has been opened or closed. If the control element\u2019s HTML element is not a button (e.g., an "),e.j41(14,"code",0),e.EFF(15,"<a>"),e.k0s(),e.EFF(16," or "),e.j41(17,"code",0),e.EFF(18,"<div>"),e.k0s(),e.EFF(19,"), the attribute "),e.j41(20,"code",0),e.EFF(21,'role="button"'),e.k0s(),e.EFF(22," should be added to the element."),e.k0s(),e.j41(23,"p"),e.EFF(24,"If your control element is targeting a single collapsible element \u2013 i.e. the "),e.j41(25,"code",0),e.EFF(26,"data-target"),e.k0s(),e.EFF(27," attribute is pointing to an "),e.j41(28,"code",0),e.EFF(29,"id"),e.k0s(),e.EFF(30," selector \u2013 you should add the "),e.j41(31,"code",0),e.EFF(32,"aria-controls"),e.k0s(),e.EFF(33," attribute to the control element, containing the "),e.j41(34,"code",0),e.EFF(35,"id"),e.k0s(),e.EFF(36," of the collapsible element. Modern screen readers and similar assistive technologies make use of this attribute to provide users with additional shortcuts to navigate directly to the collapsible element itself."),e.k0s())},encapsulation:2})}return t})(),g=(()=>{class t{constructor(){this.isCollapsed=!1}static#e=this.\u0275fac=function(l){return new(l||t)};static#n=this.\u0275cmp=e.VBU({type:t,selectors:[["inline-display-demo"]],decls:9,vars:1,consts:[["collapse","bs-collapse"],["type","button","aria-controls","collapseBasic",1,"btn","btn-success",3,"click"],["type","button","aria-controls","collapseBasic",1,"btn","btn-primary",3,"click"],["id","collapseBasic",3,"collapse"],[1,"well","well-lg","card","card-block","card-header"]],template:function(l,s){if(1&l){const i=e.RV6();e.j41(0,"button",1),e.bIt("click",function(){e.eBV(i);const p=e.sdS(6);return e.Njj(p.display="inline-block")}),e.EFF(1,"Inline-block\n"),e.k0s(),e.j41(2,"button",2),e.bIt("click",function(){e.eBV(i);const p=e.sdS(6);return e.Njj(p.display="none")}),e.EFF(3,"None\n"),e.k0s(),e.nrm(4,"hr"),e.j41(5,"div",3,0)(7,"div",4),e.EFF(8,"Some content"),e.k0s()()}2&l&&(e.R7$(5),e.Y8G("collapse",!s.isCollapsed))},dependencies:[m.D],encapsulation:2})}return t})(),v=(()=>{class t{constructor(){this.isOpen=!1}static#e=this.\u0275fac=function(l){return new(l||t)};static#n=this.\u0275cmp=e.VBU({type:t,selectors:[["toggle-manual-demo"]],decls:9,vars:1,consts:[["collapse","bs-collapse"],["type","button","aria-controls","collapseManual",1,"btn","btn-primary",3,"click"],["id","collapseManual",3,"collapse"],[1,"well","well-lg","card","card-block","card-header"]],template:function(l,s){if(1&l){const i=e.RV6();e.j41(0,"button",1),e.bIt("click",function(){e.eBV(i);const p=e.sdS(6);return e.Njj(p.show())}),e.EFF(1,"Show content\n"),e.k0s(),e.j41(2,"button",1),e.bIt("click",function(){e.eBV(i);const p=e.sdS(6);return e.Njj(p.hide())}),e.EFF(3,"Hide content\n"),e.k0s(),e.nrm(4,"hr"),e.j41(5,"div",2,0)(7,"div",3),e.EFF(8,"Some content"),e.k0s()()}2&l&&(e.R7$(5),e.Y8G("collapse",s.isOpen))},dependencies:[m.D],encapsulation:2})}return t})();const T=[{name:"Overview",anchor:"overview",tabName:"overview",outlet:r.xK,content:[{title:"Basic",anchor:"basic",component:n(24891),html:n(47203),outlet:C},{title:"With animation",anchor:"animated",component:n(62359),html:n(98255),description:"You can enable animation via <code>isAnimated</code> input option",outlet:h},{title:"Events",anchor:"events",component:n(1143),html:n(65487),description:"Collapse directive exposes 4 events: <code>collapses</code>, that fires when a collapse was triggered (animation start),\n                        <code>collapsed</code>, that fires when a content was hidden (animation finished),\n                        <code>expands</code>, that fires when a expansion was triggered (animation start)\n                      and <code>expanded</code>, that fires when a content was shown",outlet:b},{title:"Manual toggle",anchor:"manual-toggle",component:n(28407),html:n(83983),outlet:v},{title:"Inline display",anchor:"inline-display",component:n(66649),html:n(19533),outlet:g},{title:"Accessibility",anchor:"accessibility",outlet:D}]},{name:"Installation",anchor:"api-reference",tabName:"api",usage:n(70976),importInfo:'<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> --component <span class="pln">collapse</span>',outlet:r.Mg,content:[{title:"CollapseDirective",anchor:"collapse-directive",outlet:r.r2}]},{name:"Examples",anchor:"examples",tabName:"examples",outlet:r.xK,content:[{title:"Basic",anchor:"basic-ex",outlet:C},{title:"With animation",anchor:"animated-ex",outlet:h},{title:"Events",anchor:"events-ex",outlet:b},{title:"Manual toggle",anchor:"manual-toggle-ex",outlet:v},{title:"Inline display",anchor:"inline-display-ex",outlet:g}]}];var k=n(86223),B=n(52439);let F=(()=>{class t{constructor(){this.name="Collapse",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/collapse",this.componentContent=T}static#e=this.\u0275fac=function(l){return new(l||t)};static#n=this.\u0275cmp=e.VBU({type:t,selectors:[["collapse-section"]],decls:12,vars:4,consts:[[3,"name","src","componentContent"],[3,"content"]],template:function(l,s){1&l&&(e.j41(0,"demo-section",0)(1,"p"),e.EFF(2,"Collapse component allows you to toggle content on your pages with a bit of JavaScript and some classes. Flexible component that utilizes a handful of classes (from the "),e.j41(3,"strong"),e.EFF(4,"required transitions component"),e.k0s(),e.EFF(5,"("),e.j41(6,"em"),e.EFF(7,"not yet implemented"),e.k0s(),e.EFF(8,")) for easy toggle behavior."),e.k0s(),e.j41(9,"p"),e.EFF(10,"The easiest way to add the collapse component to your app (will be added to the root module)"),e.k0s(),e.nrm(11,"docs-section",1),e.k0s()),2&l&&(e.Y8G("name",s.name)("src",s.src)("componentContent",s.componentContent),e.R7$(11),e.Y8G("content",s.componentContent))},dependencies:[k.q,B.C],encapsulation:2,changeDetection:0})}return t})();const A=[{path:"",component:F}];let j=(()=>{class t{static#e=this.\u0275fac=function(l){return new(l||t)};static#n=this.\u0275mod=e.$C({type:t});static#t=this.\u0275inj=e.G2t({imports:[y.G,a.MD,f.YN,r.ky,E.iI.forChild(A)]})}return t})()},98255:(d,o,n)=>{n.r(o),n.d(o,{default:()=>a});const a='<button type="button" class="btn btn-primary" (click)="isCollapsed = !isCollapsed"\n        [attr.aria-expanded]="!isCollapsed" aria-controls="collapseBasic">Toggle collapse\n</button>\n<hr>\n<div id="collapseBasic" [collapse]="isCollapsed" [isAnimated]="true">\n  <div class="well well-lg card card-block card-header">Some content</div>\n</div>\n'},62359:(d,o,n)=>{n.r(o),n.d(o,{default:()=>a});const a="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'collapse-demo-animation',\n  templateUrl: './animated.html'\n})\nexport class CollapseDemoAnimatedComponent {\n  isCollapsed = false;\n}\n"},47203:(d,o,n)=>{n.r(o),n.d(o,{default:()=>a});const a='<button type="button" class="btn btn-primary" (click)="isCollapsed = !isCollapsed"\n        [attr.aria-expanded]="!isCollapsed" aria-controls="collapseBasic">Toggle collapse\n</button>\n<hr>\n<div id="collapseBasic" [collapse]="isCollapsed">\n  <div class="well well-lg card card-block card-header">Some content</div>\n</div>\n'},24891:(d,o,n)=>{n.r(o),n.d(o,{default:()=>a});const a="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'collapse-demo',\n  templateUrl: './basic.html'\n})\nexport class CollapseDemoComponent {\n  isCollapsed = false;\n}\n"},65487:(d,o,n)=>{n.r(o),n.d(o,{default:()=>a});const a='<div class="row">\n  <div class="col-md-3">\n    <button type="button" class="btn btn-primary" (click)="isCollapsed = !isCollapsed"\n            [attr.aria-expanded]="!isCollapsed" aria-controls="collapseEvent">Toggle collapse\n    </button>\n  </div>\n  <div class="col-md-9">\n    <pre class="card card-block card-header">Event: {{message}}</pre>\n  </div>\n</div>\n<hr>\n<div id="collapseEvent"\n     [isAnimated]="true"\n     [collapse]="isCollapsed"\n     (collapses)="collapses()"\n     (expands)="expands()"\n     (collapsed)="collapsed()"\n     (expanded)="expanded()">\n\n  <div class="well well-lg card card-block card-header">Some content</div>\n</div>\n'},1143:(d,o,n)=>{n.r(o),n.d(o,{default:()=>a});const a="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'collapse-demo-events',\n  templateUrl: './events.html'\n})\nexport class CollapseDemoEventsComponent {\n  isCollapsed = false;\n  message = 'expanded';\n\n  collapsed(): void {\n    this.message = 'collapsed';\n  }\n\n  collapses(): void {\n    this.message = 'collapses';\n  }\n\n  expanded(): void {\n    this.message = 'expanded';\n  }\n\n  expands(): void {\n    this.message = 'expands';\n  }\n}\n"},19533:(d,o,n)=>{n.r(o),n.d(o,{default:()=>a});const a='<button type="button" class="btn btn-success" (click)="collapse.display=\'inline-block\'"\n        aria-controls="collapseBasic">Inline-block\n</button>\n<button type="button" class="btn btn-primary" (click)="collapse.display=\'none\'"\n        aria-controls="collapseBasic">None\n</button>\n<hr>\n<div id="collapseBasic" [collapse]="!isCollapsed" #collapse="bs-collapse">\n  <div class="well well-lg card card-block card-header">Some content</div>\n</div>\n'},66649:(d,o,n)=>{n.r(o),n.d(o,{default:()=>a});const a="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'inline-display-demo',\n  templateUrl: './inline-display.html'\n})\nexport class InlineDisplayDemoComponent {\n  isCollapsed = false;\n}\n"},83983:(d,o,n)=>{n.r(o),n.d(o,{default:()=>a});const a='<button type="button" class="btn btn-primary" (click)="collapse.show()"\n        aria-controls="collapseManual">Show content\n</button>\n<button type="button" class="btn btn-primary" (click)="collapse.hide()"\n        aria-controls="collapseManual">Hide content\n</button>\n<hr>\n<div id="collapseManual" #collapse="bs-collapse" [collapse]="isOpen">\n  <div class="well well-lg card card-block card-header">Some content</div>\n</div>\n'},28407:(d,o,n)=>{n.r(o),n.d(o,{default:()=>a});const a="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'toggle-manual-demo',\n  templateUrl: './toggle-manual.html'\n})\nexport class ToggleManualDemoComponent {\n  isOpen = false;\n}\n"},70976:(d,o,n)=>{n.r(o),n.d(o,{default:()=>a});const a="### Standalone component usage\nimport { BrowserAnimationsModule } from '@angular/platform-browser/animations';\n\nimport { CollapseDirective } from 'ngx-bootstrap/collapse';\n\n@Component({\n  imports: [\n    BrowserAnimationsModule,\n    CollapseDirective,\n    ...\n  ]\n})\nexport class AppComponent(){}\n\n\n### Module usage\nimport { BrowserAnimationsModule } from '@angular/platform-browser/animations';\n\nimport { CollapseModule } from 'ngx-bootstrap/collapse';\n\n@NgModule({\n  imports: [\n    BrowserAnimationsModule,\n    CollapseModule,\n    ...\n  ]\n})\nexport class AppModule(){}\n\nAlso should be added web-animations-js polyfill for IE browser (Edge)\n"}}]);