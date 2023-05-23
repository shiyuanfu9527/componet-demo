const routes = [
    {
    name:'hello',
    path:'/',
    component:()=>import('../components/HelloWorld.vue'),
    cname:'首页'
},{
    name:'mousemove',
    path:'/move',
    component:()=>import ('../components/mousemove.vue'),
    cname:'监听鼠标'
},{
    name:'count',
    path:'/count',
    component:()=>import('../components/count.vue'),
    cname:'计数'
},{
    name:'auto',
    path:'/testauto',
    component:()=>import('../components/autoEllipsisWrapper.vue'),
    cname:'测试省略'
},{
    name:'light',
    path:'/light',
    component:()=>import('../components/light.vue'),
    cname:'灯泡'
},{
    name:'shaizi',
    path:'/shaizi',
    component:()=>import('../components/shaizi.vue'),
    cname:'筛子'
},{
    name:'textflow',
    path:'/textflow',
    component:()=>import('../components/textflow.vue'),
    cname:'文字流'
},{
    name:'NightDayToggle',
    path:'/NightDayToggle',
    component:()=>import('../components/NightDayToggle.vue'),
    cname:'日夜按钮'
},{
    name:'waterdrop',
    path:'/waterdrop',
    component:()=>import('../components/waterdrop.vue'),
    cname:'水滴效果'
},{
    name:'buttonstyle1',
    path:'/button1',
    component:()=>import('../components/buttonstyle1.vue'),
    cname:'按钮1'
},{
    name:'clockroate',
    path:'/clockroate',
    component:()=>import('../components/clockroate.vue'),
    cname:'时钟旋转'
},{
    name:'snow',
    path:'/snow',
    component:()=>import('../components/snow.vue'),
    cname:'雪花1'
},{
    name:'canvasSnow',
    path:'/canvasSnow',
    component:()=>import('../components/canvasSnow.vue'),
    cname:'雪花2'
}]
export default routes