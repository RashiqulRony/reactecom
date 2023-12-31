import Home            from "../pages/frontend/Home";
import About           from "../pages/frontend/About";
import Product         from "../pages/frontend/Product";
import ProductDetails  from "../pages/frontend/ProductDetails";
import Collections     from "../pages/frontend/Collections";
import Cart            from "../pages/frontend/Cart";

const FrontendRoutes = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/about', exact: true, name: 'About', component: About },
    { path: '/product', exact: true, name: 'Product', component: Product },
    { path: '/product/:slug', exact: true, name: 'Product', component: ProductDetails },
    { path: '/collections', exact: true, name: 'Collections', component: Collections },
    { path: '/cart', exact: true, name: 'Cart', component: Cart },

];

export default FrontendRoutes;




