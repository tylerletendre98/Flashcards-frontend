import React from 'react';

const Flashcard = (props) =>{
    return(
        <div>
            {props.flashcards.map((flashcard)=>{
                    return(
                        <div className="flashcard" key={flashcard._id}>
                            <div>
                               Q: {flashcard.question}
                            </div>
                            <div>
                                A: {flashcard.answer}
                            </div>
                            <div>
                            <button>Delete Card</button>
                            <button>Update Card</button>
                            </div>
                            <hr/>
                        </div>
                    )
                })}
        </div>
    )
}

export default Flashcard;