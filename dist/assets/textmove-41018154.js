import{_ as h,r as v,n as w,d as g,e as k,o as d,c as p,b as x,F as f,v as $,l as B}from"./index-2c5a907b.js";const c=.01,E={__name:"textmove",setup(L){const r=v(null);let _,l,o;w(()=>{_=r.value.offsetWidth,l=window.screen.availHeight,o={x:_/2,y:l/2}});let n=v([]);const i=t=>{n.value.push(t)},m=t=>{const{x:u,y:s}=t,a={mcx:u-o.x,mcy:s-o.y},y=n.value.length;for(let e=1;e<=y;e++)n.value[e-1].style.transform=`perspective(500px)
            rotate(${a.mcx*e*c}deg)
            translate3d(0px,${a.mcy*e*c*5}px,${-15*e}px)
            skew(${a.mcy*c*e}deg)`};return g(()=>{window.addEventListener("mousemove",m)}),k(()=>{window.removeEventListener("mousemove",m)}),(t,u)=>(d(),p(f,null,[x("h1",{ref_key:"hdom",ref:r},"waves",512),(d(),p(f,null,$(4,s=>x("span",{key:s,ref_for:!0,ref:i,class:B(["copy",`copy${s}`])},"waves",2)),64))],64))}},M=h(E,[["__scopeId","data-v-66ec3f91"]]);export{M as default};
