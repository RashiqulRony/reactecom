import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import http from "../../../http";
import Swal from "sweetalert2";

function SubcategoryEdit (props) {
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [subcategoryInput, setSubcategory] = useState({
        'category_id' : '',
        'meta_title' : '',
        'meta_keyword' : '',
        'meta_description' : '',
        'slug' : '',
        'name' : '',
        'description' : '',
        'status' : '',
        'errors' : []
    });
    const handelInput = (e) => {
        e.persist()
        setSubcategory({ ...subcategoryInput, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        getCategories()
        getSubcategory()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getSubcategory = () => {
        http.get('/admin/subcategory/' + props.match.params.id).then((response) => response.data)
            .then((response) => {
                console.log(response)
                if (response.status === true) {
                    setSubcategory({
                        'category_id' : response.data.category_id,
                        'meta_title' : response.data.meta_title,
                        'meta_keyword' : response.data.meta_keyword,
                        'meta_description' : response.data.meta_description,
                        'slug' : response.data.slug,
                        'name' : response.data.name,
                        'description' : response.data.description,
                        'status' : response.data.status,
                        'errors' : []
                    })
                }
                setLoading(false)
            }).catch((error) => {
            setLoading(false)
            console.log(error);
        });
    }

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


    const categorySubmit = (e) => {
        e.preventDefault()
        const data = {
            'category_id' : subcategoryInput.category_id,
            'meta_title' : subcategoryInput.meta_title,
            'meta_keyword' : subcategoryInput.meta_keyword,
            'meta_description' : subcategoryInput.meta_description,
            'slug' : subcategoryInput.slug,
            'name' : subcategoryInput.name,
            'description' : subcategoryInput.description,
            'status' : subcategoryInput.status,
        }
        http.put('/admin/subcategory/' + props.match.params.id, data).then((response) => response.data)
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
                    history.push('/admin/subcategory')
                } else {
                    setSubcategory({...subcategoryInput, errors: response.errors})
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

    if (loading) {
        return (
            <div className="pageLoading">
                <h5>Loading...</h5>
            </div>
        )
    }

    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Subcategory Edit</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item"><Link to="/admin/dashboard">Dashboard</Link></li>
                <li className="breadcrumb-item"><Link to="/admin/subcategory">Subcategory</Link></li>
                <li className="breadcrumb-item active">Category Edit</li>
            </ol>

            <div className="row">
                <div className="col-md-12">
                    <div className="card shadow">
                        <div className="card-header">
                            Subcategory Edit
                            <Link className="btn btn-sm btn-success float-end" to="/admin/subcategory"><i className="fa fa-backward"></i> Back</Link>
                        </div>

                        <form onSubmit={categorySubmit}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="category_id" className="form-label">Category</label>
                                            <select name="category_id" onChange={handelInput} value={subcategoryInput.category_id} className="form-control" id="category_id">
                                                <option value="" selected hidden disabled>Select Category</option>
                                                {categories.map((category, index) => (
                                                    <option key={index} value={category.id}>{category.name}</option>
                                                ))}
                                            </select>
                                            <small className="text-danger">{subcategoryInput.errors.category_id}</small>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="slug" className="form-label">Slug</label>
                                            <input type="text" name="slug" onChange={handelInput} value={subcategoryInput.slug} className="form-control" id="slug"/>
                                            <small className="text-danger">{subcategoryInput.errors.slug}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input type="text" name="name" onChange={handelInput} value={subcategoryInput.name} className="form-control" id="name"/>
                                            <small className="text-danger">{subcategoryInput.errors.name}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">Description</label>
                                            <textarea name="description" onChange={handelInput} value={subcategoryInput.description} className="form-control" id="description"/>
                                            <small className="text-danger">{subcategoryInput.errors.description}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="status" className="form-label">Status</label>
                                            <select name="status" onChange={handelInput} value={subcategoryInput.status} className="form-control" id="status">
                                                <option value="" selected hidden disabled>Select Status</option>
                                                <option value="Active">Active</option>
                                                <option value="Inactive">Inactive</option>
                                            </select>
                                            <small className="text-danger">{subcategoryInput.errors.status}</small>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="meta_title" className="form-label">Meta Title</label>
                                            <input type="text" name="meta_title" onChange={handelInput} value={subcategoryInput.meta_title} className="form-control" id="meta_title"/>
                                            <small className="text-danger">{subcategoryInput.errors.meta_title}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="meta_keyword" className="form-label">Meta Keyword</label>
                                            <input type="text" name="meta_keyword" onChange={handelInput} value={subcategoryInput.meta_keyword} className="form-control" id="meta_keyword"/>
                                            <small className="text-danger">{subcategoryInput.errors.meta_keyword}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="meta_description" className="form-label">Meta Description</label>
                                            <textarea name="meta_description" onChange={handelInput} value={subcategoryInput.meta_description} className="form-control" id="meta_description"/>
                                            <small className="text-danger">{subcategoryInput.errors.meta_description}</small>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Update</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
}


export default SubcategoryEdit;



