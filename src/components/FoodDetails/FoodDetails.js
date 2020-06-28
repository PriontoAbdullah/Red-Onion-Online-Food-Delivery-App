import React, { useState, useEffect } from 'react';
import './FoodDetails.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import allFoods from '../../fakeData/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faWindowClose, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import suggestionFood from '../../fakeData/suggestionFood';
import RecommendFood from '../RecommendFood/RecommendFood';

const FoodDetails = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { id } = useParams();
    const currentFood = allFoods.find(food => food.id === id);

    const [quantity, setQuantity] = useState(1);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (currentFood.quantity) {
            setQuantity(currentFood.quantity)
        }
    }, [currentFood.quantity])

    const finalCartHandler = currentFood => {
        currentFood.quantity = quantity;

        props.cartHandler(currentFood);
        setIsSuccess(true);
    }

    if (isSuccess) {
        setTimeout(() => setIsSuccess(false), 1500);
    }

    const [suggestFoods, setSuggestFoods] = useState([]);

    useEffect(() => {
        const suggestFood = suggestionFood.slice(0, 3);
        setSuggestFoods(suggestFood);
    }, [])

    let m = 0;
    let n = 3;
    const newSuggestionFood = () => {
        const newSuggestFood = suggestionFood.slice(m + 3, n + 3);
        suggestionFood.splice(m, 3);
        setSuggestFoods(newSuggestFood);
    }

    return (
        <div className='food-details container scrollable'>
            <div className='text-center'>
                <Link to='/'>
                    <button className='btn btn-danger btn-rounded my-3' onClick={newSuggestionFood}>
                        <FontAwesomeIcon icon={faWindowClose} />
                        <span>  Close </span>
                    </button>
                </Link>
            </div>
            <div className='row mb-5'>
                <div className='col-md-6 pr-md-4'>
                    <h1>{currentFood.name}</h1>
                    <p className='my-5'>{currentFood.story}</p>
                    <div className='d-flex my-4'>
                        <h2 className='price'>${currentFood.price}</h2>

                        <div className='cart-controller ml-3 btn'>
                            <button
                                className='btn'
                                onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}
                            >
                                -
                            </button>
                            {quantity}
                            <button
                                className='btn'
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="action d-flex align-items-center">
                        <button className='btn btn-danger btn-rounded mb-2'
                            onClick={() => finalCartHandler(currentFood)}
                        >
                            <FontAwesomeIcon icon={faCartArrowDown} />
                            <span>  Add</span>
                        </button>
                        {isSuccess &&
                            <p
                                className="ml-3 success-mgs text-success"
                            ><FontAwesomeIcon icon={faCheckCircle}
                                />  Item added to Cart
                            </p>
                        }
                    </div>
                    <div className='my-4'>
                        {
                            suggestFoods.map(recommendFood =>
                                <RecommendFood
                                    recommendFoods={recommendFood}
                                    key={recommendFood.id}
                                    currentFood={currentFood}
                                >
                                </RecommendFood>)
                        }
                    </div>
                </div>

                <div className='col-md-6'>
                    <img className='img-fluid' src={currentFood.img} alt="food-image" />
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;