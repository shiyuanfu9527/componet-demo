import{_ as o,o as t,c as a,b as u,q as m,k as p,e as d,y as i,F as f,v,z as b}from"./index-e9b5a26c.js";const y={class:"box"},N={__name:"NumScoller",props:{number:{type:Number,default:5,required:!0}},setup(n){return(e,s)=>(t(),a("div",y,[u("span",{class:"num",style:m(`transform:translate(-50%,-${n.number*10}%)`)},"0123456789",4)]))}},x=o(N,[["__scopeId","data-v-8bac8ef9"]]);const h={class:"NumFlex"},k={__name:"NumScollerTest",setup(n){const e=p([3,8,1,5,2,6,9,4,7,0]);let s=null;return d(()=>{s=setInterval(()=>{e.forEach((c,r)=>{c<9?e[r]++:e[r]=0})},3e3)}),i(()=>{clearInterval(s)}),(c,r)=>(t(),a("div",h,[(t(!0),a(f,null,v(e,(l,_)=>(t(),b(x,{number:l,key:_},null,8,["number"]))),128))]))}};export{k as default};
