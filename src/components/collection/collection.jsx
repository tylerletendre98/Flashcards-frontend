import React from 'react';
import Flashcard from '../flashcard/flashcard';
import './collection.css';

const Collection = (props) =>{
    const collectionTotal = props.collections[props.collectionNumber].flashcards.length
    return(
        <div className="collections">
            <div className= "collection-title">
                <h2>{props.collections[props.collectionNumber].title}</h2>
            </div>
            <div><h5>Click on the card to see answer</h5></div>
            <div>
                There are {collectionTotal} flashcards in this collection.
            </div>
            <div className="row row-spacer">
                <div className="col-md-4">
                        <button onClick={()=> props.lastCollection()}>Previous Collection</button>
                </div>
                <div className="col-md-4">
                    <Flashcard flashcard = {props.collections[props.collectionNumber].flashcards} collection ={props.collections[props.collectionNumber]} deleteCard={props.deleteCard}
                     flashcardNumber={props.flashcardNumber} nextFlashcard = {props.nextFlashcard} lastFlashcard ={props.lastFlashcard} handleDelete= {props.handleDelete}/>
                </div>
                    <div className="col-md-4">
                    <button onClick={()=> props.nextCollection()}>Next Collection</button>
                </div>
            </div>
        </div> 
    )
}

export default Collection;