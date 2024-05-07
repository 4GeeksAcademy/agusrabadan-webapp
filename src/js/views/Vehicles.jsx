import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);

    const images = [
        "https://starwars-visualguide.com/assets/img/vehicles/1.jpg",
        "https://starwars-visualguide.com/assets/img/vehicles/2.jpg",
        "https://starwars-visualguide.com/assets/img/vehicles/3.jpg",
        "https://starwars-visualguide.com/assets/img/vehicles/4.jpg",
        "https://starwars-visualguide.com/assets/img/vehicles/5.jpg",
        "https://starwars-visualguide.com/assets/img/vehicles/6.jpg",
        "https://starwars-visualguide.com/assets/img/vehicles/7.jpg",
        "https://starwars-visualguide.com/assets/img/vehicles/8.jpg",
        "https://starwars-visualguide.com/assets/img/vehicles/9.jpg",
        "https://starwars-visualguide.com/assets/img/vehicles/10.jpg",

    ]

    const getVehicles = async () => {
        const url = "https://www.swapi.tech/api/vehicles/";
        const options = {
            method: "GET"
        };
        const response = await fetch(url, options);

        if (!response.ok) {
            console.log("Error", response.status, response.statusText);
            return;
        }

        const data = await response.json();
        setVehicles(data.results); 
        console.log(data);
    };

    useEffect(() => {
        getVehicles();
    }, []);

    return (
        <div className="container text-center text-white">
            <div className="row">
                {vehicles.map((item, index) => (
                    <div key={index} className="col-lg-4 mb-3">
                        <div className="card my-4" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                            </div>
                            <img height="280" src={images[index]} className="card-img-top" alt="..." />
                            <div className="card-body d-flex justify-content-between align-items-end">
                                <button type="button" class="btn btn-warning">+Info</button>
                                <i className="far fa-heart text-danger fs-3 "></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
