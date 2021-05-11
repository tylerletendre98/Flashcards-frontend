import React, {Component} from 'react';
import './flashcard.css'

class Flashcard extends Component{
    constructor(props){
        super(props);
        this.state={
            flip: false,
            flashcardNumber: 0
        }
    }

    flipCard(){
        this.setState({flip: !this.state.flip})
    }

    nextFlashcard(){
        let tempFlashcardNumber = this.state.flashcardNumber;
              tempFlashcardNumber++;
              if(tempFlashcardNumber === this.props.flashcard.length){
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
                  tempFlashcardNumber = this.props.flashcard.length - 1
              }
              this.setState({
                  flashcardNumber: tempFlashcardNumber
              });
        }

        handleDelete(){
            let collectionId = this.props.collection._id;
            let flashcardId = this.props.flashcard[this.state.flashcardNumber]._id;
            this.props.deleteCard(collectionId, flashcardId);
            this.setState({
                flashcardNumber: this.props.flashcardNumber-1
            })
        }

    render(){
        if (this.props.flashcard.length === 0){
            return(
                <div>
                    There are no flashcards in this collection.
                </div>
            )
        }
        else{

            return(
                <div className="container">
                    <div>
                        <button onClick={()=>this.props.lastFlashcard()}>Last Flashcard</button>
                    </div>
                        <div>Flashcard {this.props.flashcardNumber+1} of {this.props.flashcard.length}</div>
                        <div onClick={()=>this.props.flipCard()} className="flashcard">
                            {this.state.flip ? this.props.flashcard[this.props.flashcardNumber].answer: this.props.flashcard[this.props.flashcardNumber].question}
                        </div>
                        <div>
                            <button onClick={()=> this.handleDelete()}>Delete Flashcard</button>
                        </div>
                    <div>
                        <button onClick={()=>this.props.nextFlashcard()}>Next Flashcard</button>
                    </div>
                </div>
            )
        }

    }
}

export default Flashcard;