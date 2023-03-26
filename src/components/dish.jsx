import React, { Component } from 'react';

class Dish extends Component {
	render() {
		return (
			<div style={{ border: "1px solid black", margin: 5 }}>
				<h3>{this.props.dish.name}</h3>
				<p>{this.props.dish.category}</p>
				<p>{this.props.dish.created}</p>
			</div>
		);
	}
}
 
export default Dish;