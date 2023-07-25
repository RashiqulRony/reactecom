import React, {useEffect, useState} from "react";
import http from "../../http";

function ProductDetails(props) {
    const [product, setProduct] = useState({});
    useEffect(() => {
        getProduct()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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

    return (
        <div>
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
                                        <td>{product.stock > 0 ? "In Stock" : "Out Of Stock"}</td>
                                    </tr>
                                    <tr className="border-top height-50">
                                        <th>Category</th>
                                        <th>:</th>
                                        <td>{product.category_name}</td>
                                    </tr>
                                    <tr className="border-top height-50">
                                        <th>Brand</th>
                                        <th>:</th>
                                        <td>{product.brand}</td>
                                    </tr>
                                    <tr className="border-top height-50">
                                        <th>Qty</th>
                                        <th>:</th>
                                        <td>
                                            <input style={{width: 100}} type="number" min="1" max="5" className="form-control"/>
                                        </td>
                                    </tr>

                                    </tbody>
                                    <tfoot>
                                    <tr className="border-top height-50">
                                        <th></th>
                                        <td colSpan="2">
                                            <button className="btn btn-sm btn-info text-white"> <i className="fa fa-shopping-cart"></i> Add to Cart</button>
                                            <button className="btn btn-sm btn-success mx-2"><i className="fa fa-money"></i> By Now</button>
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


