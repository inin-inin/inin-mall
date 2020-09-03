import { request } from './request'
export function getHomeMultidata() {
    return request({
        url: './home/multidata'
    })
}

export function getHomeGoods(type, page) {
    return request({
        // http://152.136.185.210:8000/api/z8/home/data?type=new&page=1
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}