import products from './components/listProduct.vue'
import ProductDetail from './components/productDetail.vue'

export const routes = [
    {path:'/',name:'home',component: products},
    {path:'/productdetail',name:'productdetail',component: ProductDetail}
]