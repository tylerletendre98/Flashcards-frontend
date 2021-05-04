import React from 'react';
import Flashcard from '../flashcard/flashcard';
import './collection.css';
import NewCardForm from '../newCardForm/cardForm';

const Collection = (props) =>{
    return(
    <div className="container">
        {props.collections.map((collection)=>{
            return(
                <div className="collection">
                    <div>
                        <h3>{collection.title}</h3>
                    </div>
                    <div>
                        <Flashcard flashcards = {collection.flashcards}/>
                    </div>
                    <NewCardForm/>
                </div>
            )
        })}

    </div>

    )
}

export default Collection;