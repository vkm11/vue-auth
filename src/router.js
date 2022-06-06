import {createWebHistory, createRouter} from 'vue-router';
// import Router from 'vue-router'
import Home from './components/Home.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'

// Vue.useAttrs(Router)

const routes=[
        {
            path:'/',
            component: Home
        },
        {
            path:'/signin',
            component: SignIn
        },
        {
            path:'/signup',
            component: SignUp
        }

    ]
    const router = createRouter ({
        history:createWebHistory(),
        routes
    });
    export default router;