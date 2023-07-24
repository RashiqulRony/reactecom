import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://apix-drive.com/media/blogimg/auto/en/banner-definition.png" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://apix-drive.com/media/blogimg/auto/en/banner-definition.png" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://apix-drive.com/media/blogimg/auto/en/banner-definition.png" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="text-decoration-underline">Popular Products</h2>
                    </div>
                    <div className="col-md-3 py-3">
                        <div className="card shadow" >
                            <img src="https://cdn.cimri.io/image/1000x1000/appleiphonepromaxgtbgbramnmpakllceptelefonualtn_655426123.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and
                                    make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-sm btn-success">Add to Cart</Link>
                                <Link to="#" className="btn btn-sm btn-info float-end">View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3">
                        <div className="card shadow" >
                            <img src="https://cdn.cimri.io/image/1000x1000/appleiphonepromaxgtbgbramnmpakllceptelefonualtn_655426123.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and
                                    make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-sm btn-success">Add to Cart</Link>
                                <Link to="#" className="btn btn-sm btn-info float-end">View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3">
                        <div className="card shadow" >
                            <img src="https://cdn.cimri.io/image/1000x1000/appleiphonepromaxgtbgbramnmpakllceptelefonualtn_655426123.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and
                                    make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-sm btn-success">Add to Cart</Link>
                                <Link to="#" className="btn btn-sm btn-info float-end">View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3">
                        <div className="card shadow" >
                            <img src="https://cdn.cimri.io/image/1000x1000/appleiphonepromaxgtbgbramnmpakllceptelefonualtn_655426123.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and
                                    make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-sm btn-success">Add to Cart</Link>
                                <Link to="#" className="btn btn-sm btn-info float-end">View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3">
                        <div className="card shadow" >
                            <img src="https://cdn.cimri.io/image/1000x1000/appleiphonepromaxgtbgbramnmpakllceptelefonualtn_655426123.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and
                                    make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-sm btn-success">Add to Cart</Link>
                                <Link to="#" className="btn btn-sm btn-info float-end">View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3">
                        <div className="card shadow" >
                            <img src="https://cdn.cimri.io/image/1000x1000/appleiphonepromaxgtbgbramnmpakllceptelefonualtn_655426123.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and
                                    make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-sm btn-success">Add to Cart</Link>
                                <Link to="#" className="btn btn-sm btn-info float-end">View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3">
                        <div className="card shadow" >
                            <img src="https://cdn.cimri.io/image/1000x1000/appleiphonepromaxgtbgbramnmpakllceptelefonualtn_655426123.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and
                                    make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-sm btn-success">Add to Cart</Link>
                                <Link to="#" className="btn btn-sm btn-info float-end">View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3">
                        <div className="card shadow" >
                            <img src="https://cdn.cimri.io/image/1000x1000/appleiphonepromaxgtbgbramnmpakllceptelefonualtn_655426123.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and
                                    make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-sm btn-success">Add to Cart</Link>
                                <Link to="#" className="btn btn-sm btn-info float-end">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-banner">
                <img src="https://www.internetcreation.net/wp-content/uploads/2015/04/banner-e-commerce1.png" alt="home"/>
            </div>

            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="text-decoration-underline">Feature Products</h2>
                    </div>
                    <div className="col-md-3 py-3">
                        <div className="card shadow" >
                            <img src="https://istockbd.com/cdn/shop/products/Macbook_Pro_M1_Pro_14_inch_iStockBD1.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and
                                    make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-sm btn-success">Add to Cart</Link>
                                <Link to="#" className="btn btn-sm btn-info float-end">View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3">
                        <div className="card shadow" >
                            <img src="https://istockbd.com/cdn/shop/products/Macbook_Pro_M1_Pro_14_inch_iStockBD1.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and
                                    make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-sm btn-success">Add to Cart</Link>
                                <Link to="#" className="btn btn-sm btn-info float-end">View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3">
                        <div className="card shadow" >
                            <img src="https://istockbd.com/cdn/shop/products/Macbook_Pro_M1_Pro_14_inch_iStockBD1.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and
                                    make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-sm btn-success">Add to Cart</Link>
                                <Link to="#" className="btn btn-sm btn-info float-end">View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3">
                        <div className="card shadow" >
                            <img src="https://istockbd.com/cdn/shop/products/Macbook_Pro_M1_Pro_14_inch_iStockBD1.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and
                                    make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-sm btn-success">Add to Cart</Link>
                                <Link to="#" className="btn btn-sm btn-info float-end">View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3">
                        <div className="card shadow" >
                            <img src="https://istockbd.com/cdn/shop/products/Macbook_Pro_M1_Pro_14_inch_iStockBD1.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and
                                    make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-sm btn-success">Add to Cart</Link>
                                <Link to="#" className="btn btn-sm btn-info float-end">View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3">
                        <div className="card shadow" >
                            <img src="https://istockbd.com/cdn/shop/products/Macbook_Pro_M1_Pro_14_inch_iStockBD1.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and
                                    make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-sm btn-success">Add to Cart</Link>
                                <Link to="#" className="btn btn-sm btn-info float-end">View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3">
                        <div className="card shadow" >
                            <img src="https://istockbd.com/cdn/shop/products/Macbook_Pro_M1_Pro_14_inch_iStockBD1.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and
                                    make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-sm btn-success">Add to Cart</Link>
                                <Link to="#" className="btn btn-sm btn-info float-end">View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3">
                        <div className="card shadow" >
                            <img src="https://istockbd.com/cdn/shop/products/Macbook_Pro_M1_Pro_14_inch_iStockBD1.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and
                                    make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-sm btn-success">Add to Cart</Link>
                                <Link to="#" className="btn btn-sm btn-info float-end">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;


