import { debounce } from './utils'

export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        // 1.图片加载完的事件监听
        const refresh = debounce(this.$refs.scroll.refresh, 50)

        // 对监听的事件进行保存
        this.itemImgListener = () => {
                refresh()
            }
            // console.log('我是混入中的内容');
    },

}