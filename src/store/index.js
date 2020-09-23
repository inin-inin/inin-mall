import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        // mutations唯一的目的就是修改state中的状态
        // mutations中的每个方法尽可能完成的事件比较单一一点

        addToCart(state, payload) {
            // payload新添加的商品
            // let oldProduct = null
            // for (let item in state.cartList) {
            //     if (item.iid === payload.iid) {
            //         oldProduct = item;
            //     }
            // }

            // 1.查找值钱数组中是否有该商品
            let oldProduct = state.cartList.find(item => item.iid === payload.iid)
                // 判断oldProduct
            if (oldProduct) {
                oldProduct.count += 1
            } else {
                payload.count = 1
                state.cartList.push(payload)
            }

        }
    },
    actions: {},
    modules: {}
})