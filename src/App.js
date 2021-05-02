import React, {Component} from 'react';
import Flashcard from './components/flashcard/flashcard';
import './App.css';

class App extends Component{
  state = {
    flashcards: [
      {
        question:"Who was the first president?",
        answer: "George Washington"
      },
      {
        question:"Who won the 2019 masters?",
        answer:"Tiger Woods"
      }
    ]
  
  }

  render(){
    return (
      <div className="App">
          <Flashcard flashcard={this.state.flashcards}/>
      </div>
    );
  }
}

export default App;
