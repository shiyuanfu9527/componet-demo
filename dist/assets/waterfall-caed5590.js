import{k as g,d,e as _,o as r,c as a,F as y,v,u as w,q as u,b as x}from"./index-44c07bef.js";const E={class:"waterfall"},k=["src"],M={__name:"waterfall",setup(z){let p=[],h=g([{src:"https://picsum.photos/300/200",height:200,top:0,left:0},{src:"https://picsum.photos/300/400",height:400,top:0,left:0},{src:"https://picsum.photos/300/300",height:300,top:0,left:0},{src:"https://picsum.photos/300/250",height:250,top:0,left:0},{src:"https://picsum.photos/300/350",height:350,top:0,left:0},{src:"https://picsum.photos/300/200",height:200,top:0,left:0},{src:"https://picsum.photos/300/300",height:300,top:0,left:0},{src:"https://picsum.photos/300/350",height:350,top:0,left:0},{src:"https://picsum.photos/300/250",height:250,top:0,left:0},{src:"https://picsum.photos/300/400",height:400,top:0,left:0},{src:"https://picsum.photos/300/250",height:250,top:0,left:0},{src:"https://picsum.photos/300/350",height:350,top:0,left:0},{src:"https://picsum.photos/300/200",height:200,top:0,left:0},{src:"https://picsum.photos/300/300",height:300,top:0,left:0},{src:"https://picsum.photos/300/350",height:350,top:0,left:0},{src:"https://picsum.photos/300/250",height:250,top:0,left:0}]);fetch("https://api.apiopen.top/api/getImages?type=beauty&size=16",{method:"GET",headers:{"Content-type":"application/json"}}).then(s=>s.json()).then(s=>{p=s.result.list,h.forEach((e,t)=>{e.src=p[t].url,console.log(p[t].url)})}).catch(s=>console.log(s));const c=()=>{const s=document.querySelector(".waterfall").clientWidth,e=300,t=10,i=Math.floor(s/(e+t)),o=new Array(i).fill(0);h.forEach((l,B)=>{const n=o.indexOf(Math.min(...o)),f=n*(e+t),m=o[n];o[n]+=l.height+t,l.top=m,l.left=f})};return d(()=>{c(),window.addEventListener("resize",c)}),_(()=>{window.removeEventListener("resize",c)}),(s,e)=>(r(),a("div",E,[(r(!0),a(y,null,v(w(h),(t,i)=>(r(),a("div",{key:i,class:"item",style:u({top:t.top+"px",left:t.left+"px"})},[x("img",{src:t.src,style:u({height:t.height+"px"})},null,12,k)],4))),128))]))}};export{M as default};
