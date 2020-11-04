import content from './components/content.vue'
import ProductDetail from './components/productDetail.vue'

export const routes = [
    {path:'/',name:'homepage',component: content},
    {path:'/productdetail',name:'productdetail',component: ProductDetail}
]