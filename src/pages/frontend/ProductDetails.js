import React, {useEffect, useState} from "react";
import http from "../../http";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";

function ProductDetails(props) {
    const [product, setProduct] = useState({});
    const [qty, setQty] = useState(1);

    useEffect(() => {
        getProduct()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const decrement = () => {
        if (qty > 1) {
            setQty(prevCount => prevCount - 1)
        }

    }
    const increment = () => {
        if (qty < product.stock) {
            setQty(prevCount => prevCount + 1)
        }
    }

    const getProduct = () => {
        http.get('/product/' + props.match.params.slug).then((response) => response.data)
            .then((response) => {
                if (response.status === true) {
                    setProduct(response.data)
                }
            }).catch((error) => {
            console.log(error);
        });
    }
    
    const addToCart = (e) => {
        e.preventDefault()

        const data = {
            'product_id' : product.id,
            'product_qty' : qty,
        }

        http.post('/cart/add', data).then((response) => response.data)
            .then((response) => {
                if (response.status === true) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Success',
                        text: response.message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Error..',
                        text: response.message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }).catch((error) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Error..',
                    text: error.response.request.statusText,
                    showConfirmButton: false,
                    timer: 1500
                })
            console.log(error);
        });
    }

    return (
        <div>
            <nav aria-label="breadcrumb" className="bg-warning py-1">
                <div className="container">
                    <ol className="breadcrumb mt-2">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/product">Product</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Cart</li>
                    </ol>
                </div>
            </nav>

            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body text-center">
                                <img src={process.env.REACT_APP_IMG_URL+'/product/'+product.image} className="card-img-top" alt={product.name} />
                                <small>Img: {product.name}</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h4>{product.name}</h4>
                                <table className="table table-borderless">
                                    <tbody>
                                    <tr className="border-top height-50">
                                        <th width="20%">Price</th>
                                        <th>:</th>
                                        <td>{product.sell_price} Tk.</td>
                                    </tr>
                                    <tr className="border-top height-50">
                                        <th width="20%">Stock</th>
                                        <th>:</th>
                                        <td>{product.stock > 0 ? (<span className="badge bg-success">In Stock</span>) : (<span className="badge bg-danger">Out Of Stock</span>)}</td>
                                    </tr>
                                    <tr className="border-top height-50">
                                        <th>Category</th>
                                        <th>:</th>
                                        <td>{product?.category_name}</td>
                                    </tr>
                                    <tr className="border-top height-50" style={{ display : product.brand ? "" : "none" }}>
                                        <th>Brand</th>
                                        <th>:</th>
                                        <td>{product.brand}</td>
                                    </tr>
                                    <tr className="border-top height-50" style={{ display : product.stock > 0 ? "" : "none" }}>
                                        <th>Qty</th>
                                        <th>:</th>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span onClick={decrement} className="input-group-text">-</span>
                                                <div className="qty-input text-center">{qty}</div>
                                                <span onClick={increment} className="input-group-text">+</span>
                                            </div>
                                        </td>
                                    </tr>

                                    </tbody>
                                    <tfoot>
                                    <tr className="border-top height-50">
                                        <th></th>
                                        <td colSpan="2">
                                            <button disabled={product.stock <= 0} onClick={addToCart} className="btn btn-sm btn-info text-white"> <i className="fa fa-shopping-cart"></i> Add to Cart</button>
                                            <button disabled={product.stock <= 0} className="btn btn-sm btn-success mx-2"><i className="fa fa-money"></i> By Now</button>
                                        </td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-12 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <h4>Description: </h4>
                                </div>
                                <div  dangerouslySetInnerHTML={{ __html: product.description }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;


