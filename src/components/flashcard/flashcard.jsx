import React from 'react';

const Flashcard = (props) =>{
    return(
        <div>
            {props.flashcard.map((flashcard)=>{
            return(
                <div>
                    <div>
                        <h1>{flashcard.question}</h1>
                    </div>
                    <div>
                        <h2>{flashcard.answer}</h2>
                    </div>
                </div>
            )
            })}
        </div>
    )
}

export default Flashcard;