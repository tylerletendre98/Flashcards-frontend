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
                    flashcardNumber: tempFlashcardNumber
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

    render(){
        return(
            <div className="container">
                <div>
                    <button onClick={()=>this.lastFlashcard()}>Last Flashcard</button>
                </div>
                    <div>Flashcard{this.state.flashcardNumber + 1} of {this.props.flashcard.length}</div>
                    <div onClick={()=>this.flipCard()} className="flashcard">
                        {this.state.flip ? this.props.flashcard[this.state.flashcardNumber].answer: this.props.flashcard[this.state.flashcardNumber].question}
                    </div>
                <div>
                    <button onClick={()=>this.nextFlashcard()}>Next Flashcard</button>
                </div>
            </div>
        )

    }
}

export default Flashcard;