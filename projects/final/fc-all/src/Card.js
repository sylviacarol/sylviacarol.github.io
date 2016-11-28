import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

	render() {
		console.log(this.props);
		//var title = this.props.post.title;
		const { title, content } = this.props.post;

		return (
		  <div className="Card">

		  <h1>{title}</h1>
		  <p>{content}</p>
		  </div>
		);
	}
}

export default Card;
