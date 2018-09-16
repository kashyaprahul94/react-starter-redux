import React from "react";
import PropTypes from "prop-types";

const Counter = ( { counter, increaseCounter, decreaseCounter }) => (
	<section className="card">
		<div className="card-body">
			<div className="text-center">
				<div className="row justify-content-center">
					<div className="col-6">
						<p>
							<span>Counter : </span>
							<span>{ counter }</span>
						</p>
						<div className="row">
							<div className="col">
								<button className="btn btn-primary" onClick={ () => increaseCounter( 1 ) }>
									<span>Increase</span>
								</button>
							</div>
							<div className="col">
								<button className="btn btn-secondary" onClick={ () => decreaseCounter( 1 ) }>
									<span>Decrease</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

Counter.propTypes = {
	counter: PropTypes.number.isRequired,
	increaseCounter: PropTypes.func.isRequired,
	decreaseCounter: PropTypes.func.isRequired,
};

export const CounterView = Counter;