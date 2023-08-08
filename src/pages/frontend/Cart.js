import React, {useEffect, useState} from "react";
import http from "../../http";
import {Link, useHistory} from "react-router-dom";
import Swal from "sweetalert2";

function Cart() {
    const history = useHistory();
    const [carts, setCarts] = useState([]);
    const [totalCount, setTotalCount] = useState({
        shipping: 0,
        discount: 0,
        total: 0,
    });

    useEffect(() => {
        getCarts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getCarts = () => {
        http.get('/cart/content').then((response) => response.data)
            .then((response) => {
                if (response.status === true) {
                    setCarts(response.data)
                    setTotalCount({
                        total: response.cart_total,
                    })
                }
            }).catch((error) => {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Unauthenticated..',
                text: "Please login first.",
                showConfirmButton: false,
                timer: 1500
            })
            history.push('login')
        });
    }

    let cartContent = '';

    if (carts.length > 0) {
        cartContent = (
            <table className="table table-bordered tab-content table-hover">
                <thead>
                <tr>
                    <th>Image</th>
                    <th width="35%">Product</th>
                    <th>Price</th>
                    <th width="14%">Quantity</th>
                    <th>Total</th>
                    <th width="1%">Remove</th>
                </tr>
                </thead>
                <tbody>
                {carts.map((cart, index) => (
                    <tr key={index}>
                        <td>
                            <img src={process.env.REACT_APP_IMG_URL+'/product/'+cart.options.image} width="50" alt={cart.product_name} />
                        </td>
                        <td>{cart.product_name}</td>
                        <td>{cart.price} Tk.</td>
                        <td>
                            <div className="input-group mb-3">
                                <span className="input-group-text">-</span>
                                <div className="qty-input text-center">{cart.quantity}</div>
                                <span className="input-group-text">+</span>
                            </div>
                        </td>
                        <td>{cart.subtotal} Tk.</td>
                        <td>
                            <button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i></button>
                        </td>
                    </tr>
                ))}
                <tr>
                    <td colSpan="4" className="text-end">
                        Shipping :
                    </td>
                    <th colSpan="2">
                        {totalCount?.shipping ? totalCount?.shipping : 0} Tk.
                    </th>
                </tr>
                <tr>
                    <td colSpan="4" className="text-end">
                        Discount :
                    </td>
                    <th colSpan="2">
                        {totalCount?.discount ? totalCount?.discount : 0} Tk.
                    </th>
                </tr>
                <tr>
                    <td colSpan="4" className="text-end">
                        Total Amount :
                    </td>
                    <th colSpan="2">
                        {totalCount?.total ? totalCount?.total : 0} Tk.
                    </th>
                </tr>
                </tbody>

                <tfoot>
                <tr>
                    <td colSpan="6">
                        <Link className="btn btn-sm btn-info text-white" to="/product"><i className="fa fa-step-backward"></i> Continue To Shopping</Link>
                        <Link className="btn btn-sm btn-success float-end" to="#"><i className="fa fa-shopping-bag"></i> Go To Checkout</Link>
                    </td>
                </tr>
                </tfoot>
            </table>
        );
    } else {
        cartContent = (
            <div className="text-center">
                <h2>Cart is Empty</h2>
            </div>
        )
    }

    return (
        <div>
            <nav aria-label="breadcrumb" className="bg-warning py-1">
                <div className="container">
                    <ol className="breadcrumb mt-2">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Cart</li>
                    </ol>
                </div>
            </nav>


            <div className="container py-5">
                <div className="card shadow">
                    <div className="card-header">
                        Cart List
                    </div>

                    <div className="card-body">
                        <div className="table-responsive">
                            {cartContent}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;


