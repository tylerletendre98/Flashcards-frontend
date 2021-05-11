import React, {Component} from 'react';
import './flashcard.css'

class Flashcard extends Component{
    constructor(props){
        super(props);
        this.state={
            flip: false,
        }
    }

    flipCard(){
        this.setState({flip: !this.state.flip})
    }
    render(){
        //displays if there is no flashcards in the flashcards array
        if (this.props.flashcard.length === 0){
            return(
                <div>
                    <h4>There are no flashcards in this collection</h4>
                </div>
            )
        }
        //displays if there are flashcards
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
                                <button onClick={()=> this.props.handleDelete()}>Delete Flashcard</button>
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