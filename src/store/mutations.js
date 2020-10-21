import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutations-types'


export default {
    // mutations唯一的目的就是修改state中的状态
    // mutations中的每个方法尽可能完成的事件比较单一一点
    [ADD_COUNTER](state, payload) {
        payload.count++
    },
    [ADD_TO_CART](state, payload) {
        payload.checked = true
        state.cartList.push(payload)
            // console.log('123123');
    },
    DEL(state) {
        let flag = state.carlist.some(item => {
            return item.selected == true;
        });
        if (!flag) {
            Toast.text("请至少选择一个商品");
        } else {
            //确定按钮点击事件
            //this.close(); //关闭对话框
            let cartlist = [];
            state.cartList.forEach((item, index) => {
                if (!item.selected) {
                    cartlist.push(item);
                }
            });
            return (state.cartList = cartlist);
        }
    }
}