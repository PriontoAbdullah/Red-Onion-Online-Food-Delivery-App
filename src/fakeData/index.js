import dinner from './dinner'
import lunch from './lunch';
import breakfast from './breakfast';

const fakeData =[...dinner,...lunch,...breakfast];


// const shuffle = a => {
//     for (let i = a.length; i; i--) {
//         let j = Math.floor(Math.random() * i);
//         [a[i - 1], a[j]] = [a[j], a[i - 1]];
//     }
// }




export default fakeData;