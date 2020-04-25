import React from 'react';
import { useParams } from 'react-router-dom';

function Details(props) {

    let { id } = useParams();
    const places = props.info;

    var place;
    places.forEach(myplace => {
        if (myplace.id === id) {
            place = myplace;
        }
    });
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <div className="thumbnail">
                        <img src={place.img} alt={place.name} style={{ width: "100%" }} />
                    </div>
                </div>
                <div className="col-6">
                    <h1>{place.name}</h1>
                    <p>{place.description}</p>
                </div>
            </div>
        </div>
    )
}
export default Details;