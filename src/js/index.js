//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// import Card from './component/Card.jsx'

// ReactDOM.render(<Card />, document.quertSelector('#root'));

// import "bootstrap";
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let segundos = 0
let siguiente = 0
let siguiente1 = 0
let siguiente2 = 0
let siguiente3 = 0
let siguiente4 = 0


function cambio() {

    //render your react application
    ReactDOM.render(<Home segundos={segundos} siguiente={siguiente} siguiente1={siguiente1} siguiente2={siguiente2} siguiente3={siguiente3} siguiente4={siguiente4} />, document.querySelector("#app"));

    segundos = segundos + 1
    if (segundos > 9) {
        siguiente++
        segundos = 0
    }

    if (siguiente > 9) {
        siguiente1++
        siguiente = 0
    }

    if (siguiente1 > 9) {
        siguiente2++
        siguiente1 = 0
    }
    if (siguiente2 > 9) {
        siguiente3++
        siguiente2 = 0
    }
    if (siguiente3 > 9) {
        siguiente4++
        siguiente3 = 0







    }
}
setInterval(cambio, 1000)

//  function contador(props) {
// 	return (
// 		<div className="BigCounter">
// 			<div className="calendar">
// 				<i className="far fa-clock" />
// 			</div>
// 			<div className="four">{props.digitFour % 10}</div>
// 			<div className="three">{props.digitThree % 10}</div>
// 			<div className="two">{props.digitTwo % 10}</div>
// 			<div className="one">{props.digitOne % 10}</div>
// 		</div>
// 	);
// }

// SimpleCounter.propTypes = {
// 	digitFour: PropTypes.number,
// 	digitThree: PropTypes.number,
// 	digitTwo: PropTypes.number,
// 	digitOne: PropTypes.number
// };

// let counter = 0;
// setInterval(function() {
// 	const four = Math.floor(counter / 10000);
// 	const three = Math.floor(counter / 1000);
// 	const two = Math.floor(counter / 100);
// 	const one = Math.floor(counter / 10);
// 	//console.log(one, two, three, four);
// 	counter++;
// 	//render your react application
// 	ReactDOM.render(
// 		<SimpleCounter
// 			digitOne={one}
// 			digitTwo={two}
// 			digitThree={three}
// 			digitFour={four}
// 		/>,
// 		document.querySelector("#app")
// 	); 
