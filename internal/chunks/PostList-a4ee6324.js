import{S as F,i as G,s as J,e as u,t as b,k,c as p,a as v,h as S,d as f,m as A,b as _,g as B,I as h,j as D,n as H,P as K}from"./index-bd948dec.js";import{f as N}from"./index-70edd345.js";function U(o,a,s){const e=o.slice();return e[1]=a[s],e}function z(o){let a,s,e=N(new Date(o[1].meta.date),"LLL dd, yyyy")+"",l,r,t,i,m=o[1].meta.title+"",L,y,P,d,g=o[1].meta.preview+"",E,w;return{c(){a=u("li"),s=u("span"),l=b(e),r=k(),t=u("h3"),i=u("a"),L=b(m),P=k(),d=u("p"),E=b(g),w=k(),this.h()},l(c){a=p(c,"LI",{class:!0});var n=v(a);s=p(n,"SPAN",{class:!0});var I=v(s);l=S(I,e),I.forEach(f),r=A(n),t=p(n,"H3",{class:!0});var j=v(t);i=p(j,"A",{href:!0,class:!0});var q=v(i);L=S(q,m),q.forEach(f),j.forEach(f),P=A(n),d=p(n,"P",{});var C=v(d);E=S(C,g),C.forEach(f),w=A(n),n.forEach(f),this.h()},h(){_(s,"class","post-date svelte-lv6g2u"),_(i,"href",y=o[1].path),_(i,"class","svelte-lv6g2u"),_(t,"class","post-title svelte-lv6g2u"),_(a,"class","post-item svelte-lv6g2u")},m(c,n){B(c,a,n),h(a,s),h(s,l),h(a,r),h(a,t),h(t,i),h(i,L),h(a,P),h(a,d),h(d,E),h(a,w)},p(c,n){n&1&&e!==(e=N(new Date(c[1].meta.date),"LLL dd, yyyy")+"")&&D(l,e),n&1&&m!==(m=c[1].meta.title+"")&&D(L,m),n&1&&y!==(y=c[1].path)&&_(i,"href",y),n&1&&g!==(g=c[1].meta.preview+"")&&D(E,g)},d(c){c&&f(a)}}}function M(o){let a,s=o[0],e=[];for(let l=0;l<s.length;l+=1)e[l]=z(U(o,s,l));return{c(){a=u("ul");for(let l=0;l<e.length;l+=1)e[l].c()},l(l){a=p(l,"UL",{});var r=v(a);for(let t=0;t<e.length;t+=1)e[t].l(r);r.forEach(f)},m(l,r){B(l,a,r);for(let t=0;t<e.length;t+=1)e[t].m(a,null)},p(l,[r]){if(r&1){s=l[0];let t;for(t=0;t<s.length;t+=1){const i=U(l,s,t);e[t]?e[t].p(i,r):(e[t]=z(i),e[t].c(),e[t].m(a,null))}for(;t<e.length;t+=1)e[t].d(1);e.length=s.length}},i:H,o:H,d(l){l&&f(a),K(e,l)}}}function O(o,a,s){let{posts:e=[]}=a;return o.$$set=l=>{"posts"in l&&s(0,e=l.posts)},[e]}class T extends F{constructor(a){super(),G(this,a,O,M,J,{posts:0})}}export{T as P};
