import React, { useState, useEffect } from 'react';
import './FoodDetails.css'
import { useParams } from 'react-router-dom';
import allFoods from '../../fakeData/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import suggestionFood from '../../fakeData/suggestionFood';
import RecommendFood from '../RecommendFood/RecommendFood';

const FoodDetails = () => {

    const { id } = useParams();
    const currentFood = allFoods.find(food => food.id === id);

    const [suggestFoods, setSuggestFoods] = useState([]);

    useEffect(() => {
        const suggestFood = suggestionFood.slice(0, 3);
        setSuggestFoods(suggestFood);
    }, [])

    const goBack = () => {
        window.history.back();
        newSuggestionFood();
    }

    let m = 0;
    let n = 3;
    const newSuggestionFood = () => {
        const newSuggestFood = suggestionFood.slice(m + 3, n + 3);
        suggestionFood.splice(m, 3);
        setSuggestFoods(newSuggestFood);
    }

    return (
        <div className='food-details container'>
            <div className='mb-3 topUp'>
                <div className='text-center'>
                    <button className='btn btn-danger btn-rounded my-3' onClick={goBack}>
                        <FontAwesomeIcon icon={faWindowClose} />
                        <span>  Close </span>
                    </button>
                </div>
            </div>
            <div className='row mb-5'>
                <div className='col-md-6 pr-md-4'>
                    <h1>{currentFood.name}</h1>
                    <p className='my-5'>{currentFood.story}</p>
                    <div className='d-flex my-4'>
                        <h2 className='price'>${currentFood.price}</h2>

                        <div className='cart-controller ml-3 btn'>
                            <button className='btn'>-</button> 1 <button className='btn'>+</button>
                        </div>
                    </div>
                    <button className='btn btn-danger btn-rounded mb-2'>
                        <FontAwesomeIcon icon={faCartArrowDown} />
                        <span>  Add</span>
                    </button>

                    <div className='moor-images mt-5'>
                        {suggestFoods.map(recommendFood => <RecommendFood recommendFoods={recommendFood}></RecommendFood>)}
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