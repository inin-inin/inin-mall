import { debounce } from './utils'
import BackTop from 'components/content/backTop/BackTop'

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

export const backTopMixin = {
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0)
        },
        listenShowBackTop(position) {
            // 1.判断BackTop是否显示
            this.isShowBackTop = (-position.y) > 1000

        }
    },
    component: {
        BackTop
    }
}