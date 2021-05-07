import React from 'react';
import Flashcard from '../flashcard/flashcard';
import './collection.css';

const Collection = (props) =>{

    const collectionTotal = props.collections[props.collectionNumber].flashcards.length
    return(
        <div>
            <div>
                <h3>{props.collections[props.collectionNumber].title}</h3>
            </div>
            <div><h4>Click on the card to see answer</h4></div>
            <div>
                There are {collectionTotal} flashcards in this collection.
            </div>
            <div className="row row-spacer">
                <div className="col-md-4">
                        <button onClick={()=> props.lastCollection()}>Previous Collection</button>
                </div>
                <div className="col-md-4">
                    <Flashcard flashcard = {props.collections[props.collectionNumber].flashcards}/>
                </div>
                    <div className="col-md-4">
                    <button onClick={()=> props.nextCollection()}>Next Collection</button>
                </div>
            </div>
        </div> 
    )
}

export default Collection;