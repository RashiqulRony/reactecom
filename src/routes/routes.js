import Dashboard from "../pages/admin/Dashboard";
import Category from "../pages/admin/Category";
import Product from "../pages/admin/Product";

const routes = [
    { path: '/admin', exact: true, name: 'Admin' },
    { path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/admin/category', exact: true, name: 'Category', component: Category },
    { path: '/admin/product', exact: true, name: 'Product', component: Product }
];

export default routes;




