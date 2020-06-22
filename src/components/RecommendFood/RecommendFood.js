import React from 'react';
import { Link } from 'react-router-dom';

const RecommendFood = (props) => {

    const { id, img } = props.recommendFoods;

    return (
        // <Link to={'food/' + id}>
        <img className='mr-3' src={img} height='150px' alt="food-image" />
        // </Link>
    );
};

export default RecommendFood;