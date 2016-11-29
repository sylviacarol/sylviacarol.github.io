import React, { Component } from 'react';
import './Card.css';
import moment from 'moment';

class Card extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      modal: 'hidden'
	    };
	  } 
  
	createMarkup(content) {
		return {__html: content};
	}

	showModal() {
		 this.setState({modal: 'show'});
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

		let modalClass = 'modal';

		if (this.state.modal === 'show') {
			modalClass = 'modal show';
		}

		return (
		<div className="Card">
			{primaryImage}  

			<div className="article__meta">
                <a className="article__site-brand" href={parentSite.url} target="blank">{coSite}</a>
                <time className="article__timestamp">{moment(publishTimeHuman).format("MMM Do YY")}</time>
            </div>


			<h3 className="article__headline" onClick={this.showModal.bind(this)}>{title}</h3>



			<div className={modalClass}>
				<p dangerouslySetInnerHTML={this.createMarkup(content)} />;
			</div>
		 </div>
		);
	}
}

export default Card;
