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
}]
export default routes