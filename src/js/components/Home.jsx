import React from "react";
import { Navbar } from './Navbar.jsx';
import { Jumbotron } from "./Jumbotron.jsx";
import {MyCard} from "./MyCard.jsx";

//create your first component
export const Home = () => {
	return (
		<div className="text-center">
            <Navbar/>
			<div className="container">
			<Jumbotron/>
			<div className="row">
			    <MyCard  imgurl={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F30%2F62%2FjHBzTk.jpg&f=1&nofb=1&ipt=62476ded9fc263b75ff44b8d025d575f446e15c270ad1403322a60311c94ca4a&ipo=images'}/>
				<MyCard  imgurl={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F30%2F62%2FjHBzTk.jpg&f=1&nofb=1&ipt=62476ded9fc263b75ff44b8d025d575f446e15c270ad1403322a60311c94ca4a&ipo=images'}/>
				<MyCard  imgurl={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F30%2F62%2FjHBzTk.jpg&f=1&nofb=1&ipt=62476ded9fc263b75ff44b8d025d575f446e15c270ad1403322a60311c94ca4a&ipo=images'}/>
			</div>
		    </div>
		</div>
	);
};