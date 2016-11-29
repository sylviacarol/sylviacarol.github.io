import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import './reset.css';
import Card from './Card.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  } 
  
  componentWillMount() {
    axios.get('https://all.fastcompany.com/api/v1/fetch')
      .then( (response) => {
        if (response && response.data && response.data.posts) {
          this.setState({posts: response.data.posts});
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.posts);
    var allPosts = this.state.posts;
    var cardsList = allPosts.map(function(post, index) {
      return <Card key={index} post={post} />;
    });

    return (
      <div className="App">
        {cardsList}
      </div>
    );
  }
}

export default App;
