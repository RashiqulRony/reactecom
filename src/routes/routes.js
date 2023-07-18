import Dashboard            from "../pages/admin/Dashboard";
import Category             from "../pages/admin/category/Category";
import CategoryCreate       from "../pages/admin/category/CategoryCreate";
import CategoryEdit         from "../pages/admin/category/CategoryEdit";
import Subcategory          from "../pages/admin/subcategory/Subcategory";
import SubcategoryCreate    from "../pages/admin/subcategory/SubcategoryCreate";
import SubcategoryEdit      from "../pages/admin/subcategory/SubcategoryEdit";
import Product              from "../pages/admin/Product";

const routes = [
    { path: '/admin', exact: true, name: 'Admin' },
    { path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/admin/category', exact: true, name: 'Category', component: Category },
    { path: '/admin/category/create', exact: true, name: 'CategoryCreate', component: CategoryCreate },
    { path: '/admin/category/edit/:id', exact: true, name: 'CategoryEdit', component: CategoryEdit },
    { path: '/admin/subcategory', exact: true, name: 'Subcategory', component: Subcategory },
    { path: '/admin/subcategory/create', exact: true, name: 'SubcategoryCreate', component: SubcategoryCreate },
    { path: '/admin/subcategory/edit/:id', exact: true, name: 'SubcategoryEdit', component: SubcategoryEdit },
    { path: '/admin/product', exact: true, name: 'Product', component: Product }
];

export default routes;




