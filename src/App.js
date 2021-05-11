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

  deleteCard= (collectionId, flashcardId)=>{
    console.log(collectionId, flashcardId);
      axios.delete(`http://localhost:5000/api/collections/${collectionId}/flashcards/${flashcardId}`)
      .then(res=>{
        this.setState({
          collections : res.data
        })
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
            />
            <NewCardForm addNewFlashcard={this.addNewFlashcard} collections={this.state.collections} collectionNumber={this.state.collectionNumber}/>
            <NewCollectionForm addNewCollection = {this.addNewCollection}/>
        </div>
      );
    }
    else{
      return (<div></div>)
    }
   
  }
}

export default App;
