import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {cardsList}
      </div>
    );
  }
}

export default App;
