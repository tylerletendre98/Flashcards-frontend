import React, {Component} from 'react';
import Title from './components/flashcard/title/title';
import Collection from './components/collection/collection';
import axios from 'axios';
import './App.css';
import NewCardForm from './components/newCardForm/cardForm';

class App extends Component{
  state = {
    collections: [],
    cardflipped : false
  }
  
  componentDidMount(){
    axios.get('http://localhost:5000/api/collections/collections')
      .then(res => this.setState({ collections : res.data}));
}

addNewFlashcard = ()=> {
    axios.post('http://localhost:5000/api/collections/:collection._id/newflashcard')
    .then(res =>{
      this.setState(res)
    })
}

  render(){
    return (
      <div className="App">
          <Title/>
          <Collection collections={this.state.collections}/>
          <NewCardForm addNewFlashcard={this.addNewFlashcard}/>
      </div>
    );
  }
}

export default App;
