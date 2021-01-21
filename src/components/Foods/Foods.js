import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import allFoods from '../../fakeData/index';
import breakfast from '../../images/foodicon/breakfast.png';
import burger from '../../images/foodicon/burger.png';
import drink from '../../images/foodicon/cold drinks.png';
import dinner from '../../images/foodicon/dinner.png';
import iceCream from '../../images/foodicon/ice cream.png';
import lunch from '../../images/foodicon/lunch.png';
import pizza from '../../images/foodicon/pizza.png';
import sandwich from '../../images/foodicon/sandwich.png';
import shawarma from '../../images/foodicon/shawarma.png';
import FoodItem from '../FoodItem/FoodItem';
import './Foods.css';

const Foods = (props) => {
	const [ foods, setFoods ] = useState([]);
	const [ selectedFoodType, setSelectedFoodType ] = useState('lunch');
	const [ selectedFastFoodType, setSelectedFastFoodType ] = useState('pizza');

	useEffect(() => {
		setFoods(allFoods);
	}, []);

	const selectedFoods = foods.filter((food) => food.category === selectedFoodType);
	const selectedFastFoods = foods.filter((food) => food.category === selectedFastFoodType);

	return (
		<section className="food-area my-5">
			<div className="container">
				<nav>
					<ul className="nav justify-content-center">
						<li className="nav-item" onClick={() => setSelectedFoodType('breakfast')}>
							<span
								to="breakfast"
								className={selectedFoodType === 'breakfast' ? 'active nav-link' : 'nav-link'}
							>
								<img src={breakfast} alt="foodIcon" width="45px" className="mr-2" />
								Breakfast
							</span>
						</li>
						<li className="nav-item" onClick={() => setSelectedFoodType('lunch')}>
							<span to="lunch" className={selectedFoodType === 'lunch' ? 'active nav-link' : 'nav-link'}>
								<img src={lunch} alt="foodIcon" width="45px" className="mr-2" />
								Lunch
							</span>
						</li>
						<li className="nav-item" onClick={() => setSelectedFoodType('dinner')}>
							<span
								to="dinner"
								className={selectedFoodType === 'dinner' ? 'active nav-link' : 'nav-link'}
							>
								<img src={dinner} alt="foodIcon" width="45px" className="mr-2" />
								Dinner
							</span>
						</li>
					</ul>
				</nav>

				<div className="row my-5">{selectedFoods.map((food) => <FoodItem food={food} key={food.id} />)}</div>

				<nav>
					<ul className="nav justify-content-center mt-5">
						<li className="nav-item" onClick={() => setSelectedFastFoodType('shawarma')}>
							<span
								to="shawarma"
								className={selectedFastFoodType === 'shawarma' ? 'active nav-link' : 'nav-link'}
							>
								<img src={shawarma} alt="foodIcon" width="55px" className="mr-2" />
								shawarma
							</span>
						</li>
						<li className="nav-item" onClick={() => setSelectedFastFoodType('burger')}>
							<span
								to="burger"
								className={selectedFastFoodType === 'burger' ? 'active nav-link' : 'nav-link'}
							>
								<img src={burger} alt="foodIcon" width="35px" className="mr-2" />
								Burger
							</span>
						</li>
						<li className="nav-item" onClick={() => setSelectedFastFoodType('pizza')}>
							<span
								to="pizza"
								className={selectedFastFoodType === 'pizza' ? 'active nav-link' : 'nav-link'}
							>
								<img src={pizza} alt="foodIcon" width="35px" className="mr-2" />
								Pizza
							</span>
						</li>
						<li className="nav-item" onClick={() => setSelectedFastFoodType('sandwich')}>
							<span
								to="sandwich"
								className={selectedFastFoodType === 'sandwich' ? 'active nav-link' : 'nav-link'}
							>
								<img src={sandwich} alt="foodIcon" width="35px" className="mr-2" />
								Sandwich
							</span>
						</li>
						<li className="nav-item" onClick={() => setSelectedFastFoodType('icecream')}>
							<span
								to="icecream"
								className={selectedFastFoodType === 'icecream' ? 'active nav-link' : 'nav-link'}
							>
								<img src={iceCream} alt="foodIcon" width="35px" className="mr-2" />
								Ice Cream
							</span>
						</li>
						<li className="nav-item" onClick={() => setSelectedFastFoodType('drinks')}>
							<span
								to="drinks"
								className={selectedFastFoodType === 'drinks' ? 'active nav-link' : 'nav-link'}
							>
								<img src={drink} alt="foodIcon" width="30px" className="mr-2" />
								Drinks
							</span>
						</li>
					</ul>
				</nav>

				<div className="row my-5">
					{selectedFastFoods.map((food) => <FoodItem food={food} key={food.id} />)}
				</div>

				<div className="text-center">
					{props.cart.length ? (
						<Link to="/checkout">
							<button className="btn btn-danger">Check Out Your Food</button>
						</Link>
					) : (
						<button disabled className="btn btn-secondary">
							Check Out Your Food
						</button>
					)}
				</div>
			</div>
		</section>
	);
};

export default Foods;
