import React, {Component} from 'react';

class Flashcard extends Component{
    constructor(props){
        super(props);
        this.state={
            flip: false
        }
    }

    flipCard(){
        this.setState({flip: !this.state.flip})
    }

    render(){
        return(
            <div className="container">
                <div>
                    <h4>Click card to see the back</h4>                
                </div>
                <div>
                {this.props.flashcard.map((flashcard)=>{
                        return(
                            <div>
                                <div className="flashcard" key={flashcard._id} onClick={()=>this.flipCard(this.state.flip)}>
                                    <div>
                                    {this.state.flip ? flashcard.answer : flashcard.question}
                                    </div>
                                    <button>Delete Card</button>
                                    <button>Update Card</button>
                                    <hr/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )

    }
}

export default Flashcard;