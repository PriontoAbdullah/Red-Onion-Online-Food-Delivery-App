import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Foods.css'
import allFoods from '../../fakeData/index';
import FoodItem from '../FoodItem/FoodItem'

const Foods = (props) => {

    const [foods, setFoods] = useState([]);
    const [selectedFoodType, setSelectedFoodType] = useState('lunch');

    useEffect(() => {
        setFoods(allFoods);
    }, [])

    const selectedFoods = foods.filter(food => food.category === selectedFoodType);

    return (
        <section className='food-area my-5'>
            <div className='container'>
                <nav >
                    <ul className='nav justify-content-center'>
                        <li className='nav-item' onClick={() => setSelectedFoodType('breakfast')}>
                            <span to='breakfast'
                                className={selectedFoodType === 'breakfast' ? 'active nav-link' : 'nav-link'}
                            >
                                Breakfast
                        </span>
                        </li>
                        <li className='nav-item' onClick={() => setSelectedFoodType('lunch')}>
                            <span to='lunch'
                                className={selectedFoodType === 'lunch' ? 'active nav-link' : 'nav-link'}
                            >
                                Lunch
                        </span>
                        </li>
                        <li className='nav-item' onClick={() => setSelectedFoodType('dinner')}>
                            <span to='dinner'
                                className={selectedFoodType === 'dinner' ? 'active nav-link' : 'nav-link'}
                            >
                                Dinner
                        </span>
                        </li>
                    </ul>
                </nav>

                <div className='row my-5'>
                    {
                        selectedFoods.map(food => <FoodItem food={food} key={food.id}></FoodItem>)
                    }
                </div>
                <div className='text-center'>
                    {
                        props.cart.length ?
                            <Link to='/checkout'>
                                <button className='btn btn-danger'>Check Out Your Food</button>
                            </Link>
                            :
                            <button disabled className='btn btn-secondary'>Check Out Your Food</button>
                    }
                </div>
            </div>
        </section>
    );
};

export default Foods;