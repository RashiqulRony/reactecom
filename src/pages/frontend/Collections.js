import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import http from "../../http";

function Collections() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
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

    return (
        <div>
            <nav aria-label="breadcrumb" className="bg-warning py-1">
                <div className="container">
                    <ol className="breadcrumb mt-2">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Collections</li>
                    </ol>
                </div>
            </nav>

            <div className="container mt-5">
                <div className="row">
                    {categories.map((category, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card shadow">
                                <img src="https://t4.ftcdn.net/jpg/00/81/38/59/360_F_81385977_wNaDMtgrIj5uU5QEQLcC9UNzkJc57xbu.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{category.name}</h5>
                                    <p className="card-text">{category.description.substring(0,50)}</p>
                                    <Link to={`category/${category.slug}`} className="btn btn-primary">View Products</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Collections;


