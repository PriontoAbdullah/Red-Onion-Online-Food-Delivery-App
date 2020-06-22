import allFoods from './index';

const suggestionFood = [...allFoods];

const shuffle = item => {
    for (let i = item.length; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        [item[i - 1], item[j]] = [item[j], item[i - 1]];
    }
}

shuffle(suggestionFood);

export default suggestionFood;