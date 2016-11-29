import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
	createMarkup(content) {
		return {__html: content};
	}

	render() {
		console.log(this.props);
		//var title = this.props.post.title;
		const { title, content, publishTimeHuman } = this.props.post;

		let { primaryImage }  = this.props.post;
		
		let { parentSite }  = this.props.post;
		let abbreviator = parentSite.title.lastIndexOf("|");	
		let coSite = parentSite.title.slice(0, abbreviator);

		if (!primaryImage) {
			primaryImage = '';
		} else {
			primaryImage = <img className="article__thumb" role="presentation" src={primaryImage.originalSrc}/> 
		}

		return (
		<div className="Card">
			{primaryImage}  

			<div className="article__meta">
                <a className="article__site-brand" href={parentSite.url} target="blank">{coSite}</a>
                <time className="article__timestamp">{publishTimeHuman}</time>
            </div>


			<h3 className="article__headline">{title}</h3>



			<div className="modal">
				<p dangerouslySetInnerHTML={this.createMarkup(content)} />;
			</div>
		 </div>
		);
	}
}

export default Card;
