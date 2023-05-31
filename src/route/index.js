import {createRouter,createWebHashHistory} from "vue-router";
import routes from "./routes";
const router = new createRouter({
    history:createWebHashHistory(),
    routes
})

export default router