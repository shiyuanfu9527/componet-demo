import{r as u,d as f,o as m,c as M}from"./index-2c5a907b.js";const x={__name:"canvasSnow",setup(p){const r=u(null);let i=100,d=[],a=window.innerWidth,o=window.innerHeight,n=null;f(()=>{r.value.width=a,r.value.height=o,n=r.value.getContext("2d"),c(),window.requestAnimationFrame(h)});function c(){for(let e=0;e<i;e++)d.push({x:Math.round(Math.random()*a),y:Math.round(Math.random()*o),r:Math.round(Math.random()*15+1),speedX:Math.random()+1,speedY:Math.random()+1})}function h(){n.clearRect(0,0,a,o),n.beginPath();for(let e=0;e<i;e++){const t=d[e];n.arc(t.x,t.y,t.r,0,Math.PI*2,!0);let l=n.createRadialGradient(t.x,t.y,0,t.x,t.y,t.r);l.addColorStop(0,"#fff"),l.addColorStop(.7,"rgba(255,255,255,0)"),n.fillStyle=l,n.fillRect(t.x-t.r,t.y-t.r,t.r*2,t.r*2)}s(),window.requestAnimationFrame(h)}function s(){for(let e=0;e<i;e++){const t=d[e];t.x+=t.speedX,t.y+=t.speedY,(t.x>a||t.y>o)&&(d[e]={x:Math.round(Math.random()*a),y:Math.round(Math.random()*o),r:Math.round(Math.random()*15+1),speedX:Math.random()+1,speedY:Math.random()+1})}}return(e,t)=>(m(),M("canvas",{ref_key:"Can",ref:r},null,512))}};export{x as default};
