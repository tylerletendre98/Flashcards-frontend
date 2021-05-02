import React, {Component} from 'react';
import Title from './components/flashcard/title/title';
import Flashcard from './components/flashcard/flashcard';
import axios from 'axios';
import './App.css';

class App extends Component{
  state = {
    flashcards: []
  }
  
  componentDidMount(){
    axios.get('http://localhost:5000/api/flashcards/')
      .then(res => this.setState({ flashcards : res.data}));
}


  render(){
    return (
      <div className="App">
          <Title/>
          <Flashcard flashcard={this.state.flashcards}/>
      </div>
    );
  }
}

export default App;
