import React from "react";
import { Navbar } from './Navbar.jsx';
import { Jumbotron } from "./Jumbotron.jsx";
import {MyCard} from "./MyCard.jsx"; 
import {Footer} from "./Footer.jsx"

const Home = () => {

	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row justify-content-center">
				<MyCard />
				<MyCard />
				<MyCard />
				<MyCard />
     			</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;