import React from "react";
import { Link } from "react-router-dom";

export const AppView = ( toHome ) => {
	return (
		<section id="app">
			<div className="text-center">
				<h3 className="title">
					<span>Hello World</span>
				</h3>
				<p>
					<span>Wanna go to Home ?</span>
					<span>  </span>
					<button onClick={ e => toHome(e) }>
						<span>GO NOW</span>
					</button>
					
					<Link to={ '/home' }>NOW</Link>
				</p>
			</div>
		</section>
	);
};