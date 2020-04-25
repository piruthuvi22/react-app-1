import React from 'react';
import { Link } from 'react-router-dom';

class Cards extends React.Component {
    render() {
        const placesArray = this.props.info;
        const placeInfo = placesArray.map((place) => {
            return (
                <div className="card col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                    <img className="card-img-top" key={place.id} src={place.img} alt="Cardimagecap" />
                    <div className="text-center mt-2 p-2">
                        <Link to={"/place/" + place.id} key={place.id} style={{ textDecoration: "none" }}><h5 className="card-title text-dark" key={place.id}>{place.name}</h5></Link>
                    </div>
                </div>
            )
        });
        return (
            <div className="container mt-5">
                <h1 style={{ color: "gray" }} >Most Visited Places in Sri Lanka</h1>
                <hr style={{ border: "solid gray 2px" }} />
                <div className="card-group">
                    <div className="row">
                        {placeInfo}
                    </div>
                </div>
            </div >
        );
    }
}

export default Cards;