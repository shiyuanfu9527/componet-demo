import{r as s,d as f,o as m,c as M}from"./index-b0c83be0.js";const w={__name:"canvasSnow",setup(p){const o=s(null);let i=100,d=[],n=window.innerWidth,r=window.innerHeight,a=null;f(()=>{o.value.width=n,o.value.height=r,a=o.value.getContext("2d"),c(),window.requestAnimationFrame(h)});function c(){for(let e=0;e<i;e++)d.push({x:Math.round(Math.random()*n),y:Math.round(Math.random()*r),r:Math.round(Math.random()*15+1),speedX:Math.random()+1,speedY:Math.random()+1})}function h(){a.clearRect(0,0,n,r),a.beginPath();for(let e=0;e<i;e++){const t=d[e];a.arc(t.x,t.y,t.r,0,Math.PI*2,!0);let l=a.createRadialGradient(t.x,t.y,0,t.x,t.y,t.r);l.addColorStop(0,"#fff"),l.addColorStop(.7,"rgba(255,255,255,0)"),a.fillStyle=l,a.fillRect(t.x-t.r,t.y-t.r,t.r*2,t.r*2)}u(),window.requestAnimationFrame(h)}function u(){for(let e=0;e<i;e++){const t=d[e];t.x+=t.speedX,t.y+=t.speedY,(t.x>n||t.y>r)&&(d[e]={x:Math.round(Math.random()*n),y:Math.round(Math.random()*r),r:Math.round(Math.random()*15+1),speedX:Math.random()+1,speedY:Math.random()+1})}}return(e,t)=>(m(),M("canvas",{ref_key:"Can",ref:o},null,512))}};export{w as default};