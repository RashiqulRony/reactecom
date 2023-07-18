import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import http from "../../../http";
import Swal from "sweetalert2";

function CategoryEdit (props) {
    const history = useHistory();
    const [loading, setLoading] = useState(true);

    const [categoryInput, setCategory] = useState({
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
        setCategory({ ...categoryInput, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        getCategory()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getCategory = () => {
        http.get('/admin/category/' + props.match.params.id).then((response) => response.data)
            .then((response) => {
                console.log(response)
                if (response.status === true) {
                    setCategory({
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

    const categorySubmit = (e) => {
        e.preventDefault()
        const data = {
            'meta_title' : categoryInput.meta_title,
            'meta_keyword' : categoryInput.meta_keyword,
            'meta_description' : categoryInput.meta_description,
            'slug' : categoryInput.slug,
            'name' : categoryInput.name,
            'description' : categoryInput.description,
            'status' : categoryInput.status,
        }
        http.put('/admin/category/' + props.match.params.id, data).then((response) => response.data)
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
                    history.push('/admin/category')
                } else {
                    setCategory({...categoryInput, errors: response.errors})
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
            <h1 className="mt-4">Category Edit</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item"><Link to="/admin/dashboard">Dashboard</Link></li>
                <li className="breadcrumb-item"><Link to="/admin/category">Category</Link></li>
                <li className="breadcrumb-item active">Category Edit</li>
            </ol>

            <div className="row">
                <div className="col-md-12">
                    <div className="card shadow">
                        <div className="card-header">
                            Category Edit
                            <Link className="btn btn-sm btn-success float-end" to="/admin/category"><i className="fa fa-backward"></i> Back</Link>
                        </div>

                        <form onSubmit={categorySubmit}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="slug" className="form-label">Slug</label>
                                            <input type="text" name="slug" onChange={handelInput} value={categoryInput.slug} className="form-control" id="slug"/>
                                            <small className="text-danger">{categoryInput.errors.slug}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input type="text" name="name" onChange={handelInput} value={categoryInput.name} className="form-control" id="name"/>
                                            <small className="text-danger">{categoryInput.errors.name}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">Description</label>
                                            <textarea name="description" onChange={handelInput} value={categoryInput.description} className="form-control" id="description"/>
                                            <small className="text-danger">{categoryInput.errors.description}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="status" className="form-label">Status</label>
                                            <select name="status" onChange={handelInput} value={categoryInput.status} className="form-control" id="status">
                                                <option value="" selected hidden disabled>Select Status</option>
                                                <option value="Active">Active</option>
                                                <option value="Inactive">Inactive</option>
                                            </select>
                                            <small className="text-danger">{categoryInput.errors.status}</small>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="meta_title" className="form-label">Meta Title</label>
                                            <input type="text" name="meta_title" onChange={handelInput} value={categoryInput.meta_title} className="form-control" id="meta_title"/>
                                            <small className="text-danger">{categoryInput.errors.meta_title}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="meta_keyword" className="form-label">Meta Keyword</label>
                                            <input type="text" name="meta_keyword" onChange={handelInput} value={categoryInput.meta_keyword} className="form-control" id="meta_keyword"/>
                                            <small className="text-danger">{categoryInput.errors.meta_keyword}</small>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="meta_description" className="form-label">Meta Description</label>
                                            <textarea name="meta_description" onChange={handelInput} value={categoryInput.meta_description} className="form-control" id="meta_description"/>
                                            <small className="text-danger">{categoryInput.errors.meta_description}</small>
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


export default CategoryEdit;



