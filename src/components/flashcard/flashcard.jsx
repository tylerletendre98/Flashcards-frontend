import React from 'react';

const Flashcard = (props) =>{
    return(
        <div>
            {props.flashcard.map((flashcard)=>{
            return(
                <div>
                    <hr/>
                    <div>
                        <h3>{flashcard.question}</h3>
                    </div>
                    <div>
                        <h5>{flashcard.answer}</h5>
                    </div>
                    <hr/>
                </div>
            )
            })}
        </div>
    )
}

export default Flashcard;