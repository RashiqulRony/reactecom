import React from "react";
import {Link} from "react-router-dom";

function Category () {
    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Category</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item"><Link to="/admin/dashboard">Dashboard</Link></li>
                <li className="breadcrumb-item active">Category</li>
            </ol>

            <div className="row">
                <div className="col-md-12">
                    <div className="card shadow">
                        <div className="card-header">
                            Category List

                            <Link className="btn btn-sm btn-success float-end" to="/admin/category/create"><i className="fa fa-plus-square"></i> Add New</Link>
                        </div>

                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Slug</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th width="100">Action</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    <tr>
                                        <td>#</td>
                                        <td>Title</td>
                                        <td>Slug</td>
                                        <td>Description</td>
                                        <td>Status</td>
                                        <td>
                                            <Link className="btn btn-sm btn-info mx-1" to="#"><i className="fa fa-edit"></i></Link>
                                            <Link className="btn btn-sm btn-danger mx-1" to="#"><i className="fa fa-trash"></i></Link>
                                        </td>
                                    </tr>
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


export default Category;



