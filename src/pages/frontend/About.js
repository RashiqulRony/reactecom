import React from "react";
import {Link} from "react-router-dom";

function About() {
    return (
        <div>
            <nav aria-label="breadcrumb" className="bg-warning py-1">
                <div className="container">
                    <ol className="breadcrumb mt-2">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">About</li>
                    </ol>
                </div>
            </nav>

            <div className="container py-5">
                <h1>About Page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa deserunt, expedita ipsum, maxime nam non odio perspiciatis praesentium provident quasi reprehenderit rerum saepe sapiente soluta totam veritatis vero voluptate.</p>

            </div>
        </div>
    );
}

export default About;


