import React, {useEffect, useState} from "react";
import http from "../../http";
import {Link} from "react-router-dom";

function Product() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getProducts()
        getCategories()
    }, []);

    const getCategories = () => {
        http.get('/get-categories').then((response) => response.data)
            .then((response) => {
                if (response.status === true) {
                    setCategories(response.data)
                }

            }).catch((error) => {
            console.log(error);
        });
    }

    const getProducts = () => {
        http.get('/get-products').then((response) => response.data)
            .then((response) => {
                if (response.status === true) {
                    setProducts(response.data)
                }

            }).catch((error) => {
            console.log(error);
        });
    }


    return (
        <div>
            <nav aria-label="breadcrumb" className="bg-warning py-1">
                <div className="container">
                    <ol className="breadcrumb mt-2">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Product</li>
                    </ol>
                </div>
            </nav>

            <div className="container py-4">

                <div className="row">
                    <div className="col-md-4 py-3">
                        <div className="bg-white shadow p-2 __Sidebar">
                            <div id="content">
                                <div className="">
                                    <div id="filter" className="">
                                        <div className="border-bottom h5 text-uppercase">Filter By</div>
                                        <div className="box border-bottom">
                                            <div className="box-label text-uppercase d-flex align-items-center">Search
                                                <button className="btn ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#property" aria-expanded="true" aria-controls="property">
                                                    <span className="fa fa-plus"></span>
                                                </button>
                                            </div>
                                            <div id="property" className="collapse">
                                                <div className="my-1">
                                                    <div className="input-group mb-3">
                                                        <input type="text" className="form-control" id="search" name="search" placeholder="Product Name, Brand name" />
                                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box border-bottom">
                                            <div className="box-label text-uppercase d-flex align-items-center">Category
                                                <button className="btn ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#inner-box" aria-expanded="false" aria-controls="inner-box">
                                                    <span className="fa fa-plus"></span>
                                                </button>
                                            </div>
                                            <div id="inner-box" className="collapse show">
                                                {categories.map((category, index) => (
                                                    <div className="my-1" key={`cate_${index}`}>
                                                        <label className="tick">{category.name}
                                                            <input type="checkbox" name="price" value={category.id} />
                                                            <span className="check"></span>
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            {products.map((product, index) => (
                                <div className="col-md-6 py-3" key={index}>
                                    <div className="card shadow" >
                                        <div className="product-image">
                                            <img src={process.env.REACT_APP_IMG_URL+'/product/'+product.image} className="card-img-top" alt={product.name} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title product-title">{product.name}</h5>
                                            <p className="m-0">Price: <b>{product.sell_price}</b> Tk.</p>
                                            <p className="card-text m-0"><b>Category: </b> {product.category_name ? product.category_name : 'No Category'}</p>
                                            <p className="card-text"><b>Brand: </b> {product.brand ? product.brand : 'No Brand'} </p>
                                            <Link to="#" className="btn btn-sm btn-success">Add to Cart</Link>
                                            <Link to={`product/${product.slug}`} className="btn btn-sm btn-info float-end">View Details</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Product;


