import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Shipment = (props) => {

    const [deliveryDetails, setDeliveryDetails] = useState(null);

    const { register, handleSubmit, errors } = useForm(null);
    const onSubmit = data => setDeliveryDetails(data);

    const subTotal = props.cart.reduce((acc, crr) => {
        return acc + (crr.price * crr.quantity);
    }, 0)

    const totalQuantity = props.cart.reduce((acc, crr) => {
        return acc + crr.quantity;
    }, 0)

    const tax = (subTotal / 100) * 5;
    const deliveryFee = totalQuantity && 2;
    const grandTotal = subTotal + tax + deliveryFee;

    return (
        <div className="shipment container my-5">
            <div className="row">
                <div className="col-md-5">
                    <h4>Edit Delivery Details</h4>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)} className="py-5">

                        <div className="form-group">
                            <input
                                name="toDoor"
                                className="form-control"
                                ref={register({ required: true })}
                                defaultValue="Delivery To Door"
                                placeholder="Delivery To Door"
                            />
                            {
                                errors.toDoor && <span className="error">This Option is required</span>
                            }
                        </div>

                        <div className="form-group">
                            <input
                                name="road"
                                className="form-control"
                                ref={register({ required: true })}
                                placeholder="Road No"
                            />
                            {
                                errors.road && <span className="error">Road No is required</span>
                            }
                        </div>

                        <div className="form-group">
                            <input
                                name="flat"
                                className="form-control"
                                ref={register({ required: true })}
                                placeholder="Flat, Suite or Floor"
                            />
                            {
                                errors.flat && <span className="error">Flat, Suite or Floor is required</span>
                            }
                        </div>

                        <div className="form-group">
                            <input
                                name="businessName"
                                className="form-control"
                                ref={register({ required: true })}
                                placeholder="Business name"
                            />
                            {
                                errors.businessName && <span className="error">Business name is required</span>
                            }
                        </div>

                        <div className="form-group">
                            <textarea
                                name="address"
                                ref={register({ required: true })}
                                placeholder="Address"
                                className="form-control"
                                cols="30"
                                rows="2"
                            >
                            </textarea>
                            {
                                errors.address && <span className="error">Password is required</span>
                            }
                        </div>

                        <div className="form-group">
                            <button
                                className="btn btn-danger btn-block"
                                type="submit"
                            >
                                Save & Continue
                            </button>
                        </div>
                    </form>
                </div>
                <div className="offset-md-2 col-md-5">
                    <div className="restaurant-info mb-5">
                        <h4>Form <strong> Star Kabab And Restaura</strong></h4>
                        <h5>Arriving in 20-30 min</h5>
                        <h5>107 Rd No 9</h5>
                    </div>

                    {
                        props.cart.map(item =>
                            <div className="single-checkout-item mb-3 bg-light rounded d-flex align-items-center justify-content-between p-3">
                                <img width="100px" src={item.img} alt="food-image" />
                                <div>
                                    <h6>{item.name}</h6>
                                    <h4 className="text-danger">${item.price.toFixed(2)}</h4>
                                    <p>Delivery free</p>
                                </div>

                                <div className="cart-controller ml-3 btn">
                                    <button
                                        className="btn"
                                    >
                                        -
                                    </button>

                                    {item.quantity}

                                    <button
                                        className="btn"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        )
                    }

                    <div className="cart-calculation">
                        <p className="d-flex justify-content-between">
                            <span>Sub Total . {totalQuantity} Item</span>
                            <span>${subTotal.toFixed(2)}</span>
                        </p>

                        <p className="d-flex justify-content-between">
                            <span>Tax</span>
                            <span>${tax.toFixed(2)}</span>
                        </p>

                        <p className="d-flex justify-content-between">
                            <span>Delivery Fee</span>
                            <span>${deliveryFee}</span>
                        </p>

                        <p className="h5 d-flex justify-content-between">
                            <span>Total</span>
                            <span>${grandTotal.toFixed(2)}</span>
                        </p>

                        {
                            deliveryDetails ?
                                <Link to="/order-complete">
                                    <button
                                        className="btn btn-block btn-danger btn-secondary"
                                    >
                                        Check Out Your Food
                                    </button>
                                </Link>
                                :
                                <button
                                    disabled className="btn btn-block btn-secondary"
                                >
                                    Check Out Your Food
                                </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipment;