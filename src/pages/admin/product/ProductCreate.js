import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import http from "../../../http";
import Swal from "sweetalert2";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, { modules, formats } from "../../../EditorToolbar";

function ProductCreate () {
    const history = useHistory();
    const [categories, setCategories] = useState([]);
    const [inputImage, setImage] = useState({
        'image' : ''
    });
    const [productDescription, setDescription] = useState('');
    const [productInput, setProduct] = useState({
        'category' : '',
        'slug' : '',
        'name' : '',
        'brand' : '',
        'sell_price' : '',
        'original_price' : '',
        'status' : '',
        'meta_title' : '',
        'meta_keyword' : '',
        'meta_description' : '',
        'stock' : '',
        'feature' : '',
        'popular' : '',
        'errors' : []
    });

    useEffect(() => {
        getCategories()
    }, []);

    const getCategories = () => {
        http.get('/admin/category').then((response) => response.data)
            .then((response) => {
                if (response.status === true) {
                    setCategories(response.data)
                }
            }).catch((error) => {
            console.log(error);
        });
    }
    const handelInput = (e) => {
        e.persist()
        setProduct({ ...productInput, [e.target.name]: e.target.value })
    }
    const handelImage = (e) => {
        e.persist()
        setImage({ image: e.target.files[0] });
    }

    const productSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('image', inputImage.image);
        formData.append('category', productInput.category);
        formData.append('slug', productInput.slug);
        formData.append('name', productInput.name);
        formData.append('brand', productInput.brand);
        formData.append('sell_price', productInput.sell_price);
        formData.append('original_price', productInput.original_price);
        formData.append('description', productDescription);
        formData.append('meta_title', productInput.meta_title);
        formData.append('meta_keyword', productInput.meta_keyword);
        formData.append('meta_description', productInput.meta_description);
        formData.append('stock', productInput.stock);
        formData.append('feature', productInput.feature);
        formData.append('popular', productInput.popular);
        formData.append('status', productInput.status);

        http.post('/admin/product', formData).then((response) => response.data)
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
                    history.push('/admin/product')
                } else {
                    setProduct({...productInput, errors: response.errors})
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Validation Error!!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            }).catch((error) => {
            console.log(error);
        });

    }


    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Product</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item"><Link to="/admin/dashboard">Dashboard</Link></li>
                <li className="breadcrumb-item"><Link to="/admin/product">Product</Link></li>
                <li className="breadcrumb-item active">Product Create</li>
            </ol>

            <div className="row">
                <div className="col-md-12">
                    <div className="card shadow">
                        <div className="card-header">
                            Product Create
                            <Link className="btn btn-sm btn-success float-end" to="/admin/product"><i className="fa fa-backward"></i> Back</Link>
                        </div>

                        <form onSubmit={productSubmit}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="category" className="form-label">Category</label>
                                            <select name="category" onChange={handelInput} value={productInput.category} className="form-control" id="category">
                                                <option value="" selected hidden disabled>Select Category</option>
                                                {categories.map((category, index) => (
                                                    <option key={index} value={category.id}>{category.name}</option>
                                                ))}
                                            </select>
                                            <small className="text-danger">{productInput.errors.category}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="slug" className="form-label">Slug</label>
                                            <input type="text" name="slug" onChange={handelInput} value={productInput.slug} className="form-control" id="slug"/>
                                            <small className="text-danger">{productInput.errors.slug}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input type="text" name="name" onChange={handelInput} value={productInput.name} className="form-control" id="name"/>
                                            <small className="text-danger">{productInput.errors.name}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="brand" className="form-label">Brand</label>
                                            <input type="text" name="brand" onChange={handelInput} value={productInput.brand} className="form-control" id="brand"/>
                                            <small className="text-danger">{productInput.errors.brand}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="sell_price" className="form-label">Sell Price</label>
                                            <input type="number" min="0.00" step="0.01" name="sell_price" onChange={handelInput} value={productInput.sell_price} className="form-control" id="sell_price"/>
                                            <small className="text-danger">{productInput.errors.sell_price}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="original_price" className="form-label">Original Price</label>
                                            <input type="number" min="0.00" step="0.01" name="original_price" onChange={handelInput} value={productInput.original_price} className="form-control" id="original_price"/>
                                            <small className="text-danger">{productInput.errors.original_price}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">Description</label>
                                            <div className="text-editor">
                                                <EditorToolbar />
                                                <ReactQuill
                                                    theme="snow"
                                                    value={productDescription}
                                                    onChange={setDescription}
                                                    placeholder={"Write something awesome..."}
                                                    modules={modules}
                                                    formats={formats}
                                                />
                                            </div>
                                            <small className="text-danger">{productInput.errors.description}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="status" className="form-label">Status</label>
                                            <select name="status" onChange={handelInput} value={productInput.status} className="form-control" id="status">
                                                <option value="" selected hidden disabled>Select Status</option>
                                                <option value="Active">Active</option>
                                                <option value="Inactive">Inactive</option>
                                            </select>
                                            <small className="text-danger">{productInput.errors.status}</small>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="stock" className="form-label">Stock</label>
                                            <input type="number" min="0" name="stock" onChange={handelInput} value={productInput.stock} className="form-control" id="stock"/>
                                            <small className="text-danger">{productInput.errors.stock}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="feature" className="form-label">Feature</label>
                                            <select name="feature" onChange={handelInput} value={productInput.feature} className="form-control" id="feature">
                                                <option value="" selected hidden disabled>Select Feature</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                            <small className="text-danger">{productInput.errors.feature}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="popular" className="form-label">Popular</label>
                                            <select name="popular" onChange={handelInput} value={productInput.popular} className="form-control" id="popular">
                                                <option value="" selected hidden disabled>Select Popular</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                            <small className="text-danger">{productInput.errors.popular}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="image" className="form-label">Image</label>
                                            <input type="file" name="image" onChange={handelImage} className="form-control" id="image"/>
                                            <small className="text-danger">{productInput.errors.image}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="meta_title" className="form-label">Meta Title</label>
                                            <input type="text" name="meta_title" onChange={handelInput} value={productInput.meta_title} className="form-control" id="meta_title"/>
                                            <small className="text-danger">{productInput.errors.meta_title}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="meta_keyword" className="form-label">Meta Keyword</label>
                                            <input type="text" name="meta_keyword" onChange={handelInput} value={productInput.meta_keyword} className="form-control" id="meta_keyword"/>
                                            <small className="text-danger">{productInput.errors.meta_keyword}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="meta_description" className="form-label">Meta Description</label>
                                            <textarea name="meta_description" onChange={handelInput} value={productInput.meta_description} className="form-control" id="meta_description"/>
                                            <small className="text-danger">{productInput.errors.meta_description}</small>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Save</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
}


export default ProductCreate;



