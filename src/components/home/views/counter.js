import React from "react";

export const CounterView = ({ counter, increaseCounter, decreaseCounter }) => {
	return (
		<section id="counter">
			<div className="text-center">
				<p>
					<span>Counter : </span>
					<span>{ counter }</span>
				</p>
				<button className="btn" onClick={ e => increaseCounter( e ) }>
					<span>Increment</span>
				</button>
				<button className="btn" onClick={ e => decreaseCounter( e ) }>
					<span>Decrement</span>
				</button>
			</div>
		</section>
	);
};