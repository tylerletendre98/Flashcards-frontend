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
                    <h4>There are no flashcards in this collection</h4>
                </div>
            )
        }
        else{
            return(
                <div className="container">
                    <div className="flashcards">
                        <div>
                            <button onClick={()=>this.props.lastFlashcard()}>Last Flashcard</button>
                        </div>
                            <div>Flashcard {this.props.flashcardNumber+1} of {this.props.flashcard.length}</div>
                            <div onClick={()=>this.flipCard()} className="flashcard">
                                {this.state.flip ? this.props.flashcard[this.props.flashcardNumber].answer: this.props.flashcard[this.props.flashcardNumber].question}
                            </div>
                            <div>
                                <button onClick={()=> this.handleDelete()}>Delete Flashcard</button>
                            </div>
                        <div>
                            <button onClick={()=>this.props.nextFlashcard()}>Next Flashcard</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Flashcard;