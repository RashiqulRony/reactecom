import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import http from "../../../http";
import Swal from "sweetalert2";

function Product () {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = () => {
        http.get('/admin/product').then((response) => response.data)
            .then((response) => {
                if (response.status === true) {
                    setProducts(response.data)
                }
                setLoading(false)
            }).catch((error) => {
            console.log(error);
            setLoading(false)
        });
    }

    const deleteItem = (e, productId) => {
        e.preventDefault()
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                http.delete('/admin/product/' + productId).then((response) => response.data)
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

                        }
                        getProducts()
                    }).catch((error) => {
                        console.log(error);
                    })
            }
        })

    }

    if (loading) {
        return (
            <div className="pageLoading">
                <h5>Loading...</h5>
            </div>
        )
    }

    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Product</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item"><Link to="/admin/dashboard">Dashboard</Link></li>
                <li className="breadcrumb-item active">Product</li>
            </ol>

            <div className="row">
                <div className="col-md-12">
                    <div className="card shadow">
                        <div className="card-header">
                            Product List
                            <Link className="btn btn-sm btn-success float-end" to="/admin/product/create"><i className="fa fa-plus-square"></i> Add New</Link>
                        </div>

                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>Cat. Name</th>
                                        <th>Name</th>
                                        <th>Slug</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th width="100">Action</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {products.map((product, index) => (
                                        <tr key={index}>
                                            <td>{++index}</td>
                                            <td><img src={`${process.env.REACT_APP_IMG_URL}/product/${product.image}`} width="50" alt={product.name}/></td>
                                            <td>{product.category_name}</td>
                                            <td>{product.name}</td>
                                            <td>{product.slug}</td>
                                            <td>
                                                <div  dangerouslySetInnerHTML={{ __html: product.description.substring(0,50) }} />
                                            </td>
                                            <td>{product.status}</td>
                                            <td>
                                                <Link className="btn btn-sm btn-info mx-1" to={`/admin/product/edit/${product.id}`}><i className="fa fa-edit"></i></Link>
                                                <button className="btn btn-sm btn-danger mx-1" onClick={ (e) => deleteItem(e, product.id) }><i className="fa fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default Product;



