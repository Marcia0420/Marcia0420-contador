import React from "react";

import SecondsConter from "./SecondsCounter.jsx";

//create your first component
const Home = ( {segundos,siguiente,siguiente1,siguiente2,siguiente3, siguiente4}) => {
	return (
		<div className="text-center">
			<SecondsConter segundos={segundos} siguiente={siguiente} siguiente1={ siguiente1} siguiente2= { siguiente2} siguiente3={siguiente3}siguiente4={ siguiente4}/>
			
		</div>
	);
};

export default Home;
