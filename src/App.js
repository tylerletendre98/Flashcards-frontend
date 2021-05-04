import React, {Component} from 'react';
import Title from './components/flashcard/title/title';
import Collection from './components/collection/collection';
import axios from 'axios';
import './App.css';

class App extends Component{
  state = {
    collections: [],
    cardflipped : false
  }
  
  componentDidMount(){
    axios.get('http://localhost:5000/api/collections/collections')
      .then(res => this.setState({ collections : res.data}));
}

flipcard(){
  this.setState(this.cardflipped=!this.cardflipped)
}

  render(){
    return (
      <div className="App">
          <Title/>
          <Collection collections={this.state.collections}/>
      </div>
    );
  }
}

export default App;
