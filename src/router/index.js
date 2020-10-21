import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>
    import ('views/home/Home')
const Category = () =>
    import ('views/category/Category')
const Cart = () =>
    import ('views/cart/Cart')
const Profile = () =>
    import ('views/profile/Profile')
const Detail = () =>
    import ('views/detail/Detail')
const ToPay = () =>
    import ('views/topay/ToPay')
const Order = () =>
    import ('views/profile/Order')
const Login = () =>
    import ('views/profile/Login')
Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/category',
        name: 'Category',
        component: Category
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    }, {
        path: '/detail/:iid',
        name: 'Detail',
        component: Detail
    }, {
        path: '/topay',
        name: 'Topay',
        component: ToPay
    }, {
        path: '/order',
        name: 'Order',
        component: Order
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }

]

const router = new VueRouter({
    routes,
    mode: 'hash'
})

export default router