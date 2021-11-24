var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function f(){return l(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let $;function m(t){$=t}const h=[],g=[],b=[],x=[],y=Promise.resolve();let _=!1;function v(t){b.push(t)}let k=!1;const E=new Set;function w(){if(!k){k=!0;do{for(let t=0;t<h.length;t+=1){const n=h[t];m(n),C(n.$$)}for(m(null),h.length=0;g.length;)g.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];E.has(n)||(E.add(n),n())}b.length=0}while(h.length);for(;x.length;)x.pop()();_=!1,k=!1,E.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const A=new Set;let S;function j(t,n){t&&t.i&&(A.delete(t),t.i(n))}function N(t,e,c,s){const{fragment:u,on_mount:i,on_destroy:a,after_update:l}=t.$$;u&&u.m(e,c),s||v(()=>{const e=i.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(v)}function O(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function q(t,n){-1===t.$$.dirty[0]&&(h.push(t),_||(_=!0,y.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function L(n,r,c,s,u,a,l,f=[-1]){const d=$;m(n);const p=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};l&&l(p.root);let h=!1;if(p.ctx=c?c(n,r.props||{},(t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&u(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),h&&q(n,t)),e}):[],p.update(),h=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),r.target){if(r.hydrate){const t=(g=r.target,Array.from(g.childNodes));p.fragment&&p.fragment.l(t),t.forEach(i)}else p.fragment&&p.fragment.c();r.intro&&j(n.$$.fragment),N(n,r.target,r.anchor,r.customElement),w()}var g;m(d)}class T{$destroy(){O(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function B(n){let e,o,r,c,$,m,h,g,b=1===n[0]?"time":"times";return{c(){e=a("button"),o=l("Clicked "),r=a("span"),c=l(n[0]),$=f(),m=l(b),d(r,"class","svelte-1ssbn1y"),d(e,"class","svelte-1ssbn1y")},m(t,i){var a,l,f,d;u(t,e,i),s(e,o),s(e,r),s(r,c),s(r,$),s(r,m),h||(a=e,l="click",f=n[1],a.addEventListener(l,f,d),g=(()=>a.removeEventListener(l,f,d)),h=!0)},p(t,[n]){1&n&&p(c,t[0]),1&n&&b!==(b=1===t[0]?"time":"times")&&p(m,b)},i:t,o:t,d(t){t&&i(e),h=!1,g()}}}function H(t,n,e){let o=0;return[o,function(){e(0,o+=1)}]}class M extends T{constructor(t){super(),L(this,t,H,B,c,{})}}function P(n){let e,o,r,c,l,p,$;return p=new M({}),{c(){var t;e=a("main"),(o=a("h1")).textContent="Hello CodeSandbox",r=f(),(c=a("h2")).textContent="Start editing to see some magic happen!",l=f(),(t=p.$$.fragment)&&t.c(),d(e,"class","svelte-1xqxpl7")},m(t,n){u(t,e,n),s(e,o),s(e,r),s(e,c),s(e,l),N(p,e,null),$=!0},p:t,i(t){$||(j(p.$$.fragment,t),$=!0)},o(t){!function(t,n,e,o){if(t&&t.o){if(A.has(t))return;A.add(t),S.c.push(()=>{A.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}(p.$$.fragment,t),$=!1},d(t){t&&i(e),O(p)}}}return new class extends T{constructor(t){super(),L(this,t,null,P,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
