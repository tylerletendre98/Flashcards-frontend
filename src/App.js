import React, {Component} from 'react';
import Title from './components/flashcard/title/title';
import Collection from './components/collection/collection';
import axios from 'axios';
import NewCollectionForm from './components/newCollection/newCollection';
import './App.css';
import NewCardForm from './components/newCardForm/cardForm';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component{
  state = {
    collections: [],
    collectionNumber:0,
    dataReady: false,
    flashcardNumber: 0
  }

  //calls and displays all information from database
  componentDidMount(){
    axios.get('http://localhost:5000/api/collections/collections')
      .then(res => this.setState({
         collections : res.data,
         dataReady: true
        }));
}

addNewFlashcard = (collectionId, newFlashcard)=> {
    axios.post(`http://localhost:5000/api/collections/${collectionId}`, newFlashcard)
    .then(res =>{
      this.setState({
        collections: res.data
      });
    })
  }

addNewCollection = (newCollection) =>{
  axios.post(`http://localhost:5000/api/collections/collection` ,newCollection)
  .then(res=>{
    this.setState({
      collections: res.data
    });
  })
}


//goes to next collection
nextCollection(){
  let tempCollectionNumber = this.state.collectionNumber;
        tempCollectionNumber++;
        if(tempCollectionNumber === this.state.collections.length){
            tempCollectionNumber=0;
        }
        this.setState({
            collectionNumber: tempCollectionNumber,
            flashcardNumber : 0
        });
}

//goes to last collection
lastCollection(){
  let tempCollectionNumber = this.state.collectionNumber;
        tempCollectionNumber--;
        if(tempCollectionNumber < 0){
            tempCollectionNumber = this.state.collections.length - 1
        }
        this.setState({
            collectionNumber: tempCollectionNumber,
            flashcardNumber : 0
        });
  }
//Goes to next card
  nextFlashcard(){
      let tempFlashcardNumber = this.state.flashcardNumber;
            tempFlashcardNumber++;
            if(tempFlashcardNumber === this.state.collections[this.state.collectionNumber].flashcards.length){
                tempFlashcardNumber=0;
            }
            this.setState({
                  flashcardNumber: tempFlashcardNumber,
            });
    }
    //goes to last card
  lastFlashcard(){
    let tempFlashcardNumber = this.state.flashcardNumber;
          tempFlashcardNumber--;
          if(tempFlashcardNumber < 0){
              tempFlashcardNumber = this.state.collections[this.state.collectionNumber].flashcards.length - 1
          }
          this.setState({
              flashcardNumber: tempFlashcardNumber
          });
    }
  //deletes a card gets called in flashcard.jsx
  deleteCard= (collectionId, flashcardId)=>{
    console.log(collectionId, flashcardId);
      axios.delete(`http://localhost:5000/api/collections/${collectionId}/flashcards/${flashcardId}`)
      .then(res=>{
        this.setState({
          collections : res.data
        })
      })
  }

  //deletes card from a collection
  handleDelete(){
    let collectionId = this.state.collections[this.state.collectionNumber]._id;
    let flashcardId = this.state.collections[this.state.collectionNumber].flashcards[this.state.flashcardNumber]._id;
    this.deleteCard(collectionId, flashcardId);
    this.setState({
        flashcardNumber: this.state.flashcardNumber-1
    })
}

  render(){
    if(this.state.dataReady){
      return (
        <div className="App">
            <Title/>
            <Collection collectionNumber={this.state.collectionNumber} collections= {this.state.collections} 
            nextCollection={()=>this.nextCollection()} lastCollection={()=>this.lastCollection()} deleteCard= {this.deleteCard}
            lastFlashcard = {()=>this.lastFlashcard()} flipCard= {this.flipCard} nextFlashcard = {()=>this.nextFlashcard()} flashcardNumber = {this.state.flashcardNumber} 
            handleDelete={()=>this.handleDelete()}/>
            <NewCardForm addNewFlashcard={this.addNewFlashcard} collections={this.state.collections} collectionNumber={this.state.collectionNumber}/>
            <NewCollectionForm addNewCollection = {this.addNewCollection}/>
        </div>
      );
    }
    //displays if there is no information to be rendered
    else{
      return (<div></div>)
    }
   
  }
}

export default App;
