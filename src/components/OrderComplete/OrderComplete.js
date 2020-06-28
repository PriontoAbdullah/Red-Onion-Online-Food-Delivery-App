import React, { useEffect } from 'react';
import MapImg from '../../images/img/map.png';
import Rider from '../../images/img/rider.png';
import RiderHelmet from '../../images/img/helmet.png';

const OrderComplete = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { flat, road } = props.deliveryDetails;

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-8">
                    <img className="img-fluid" src={MapImg} alt="" />
                </div>
                <div className="col-md-4 pl-md-5">
                    <div className="bg-light p-3 rounded">
                        <img className="w-25 ml-5" src={Rider} alt="" />
                        <div className="bg-white  rounded p-3 my-3">
                            <div>
                                <h5>Your Location</h5>
                                <p>{flat}, {road}</p>
                            </div>
                            <div>
                                <h5>Shop Address</h5>
                                <p>Star Kabab and Restaura</p>
                            </div>
                        </div>
                        <h1>09:00</h1>
                        <p>Estimated Delivery</p>

                        <div className="bg-white rounded p-3 d-flex">
                            <img className="w-25 mr-2" src={RiderHelmet} alt="" />
                            <div>
                                <h6>Hamim</h6>
                                <p>Your Rider</p>
                            </div>
                        </div>

                        <button className="btn btn-block my-3 btn-danger">Contact</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderComplete; 