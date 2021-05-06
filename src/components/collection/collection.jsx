import React from 'react';
import Flashcard from '../flashcard/flashcard';
import './collection.css';

const Collection = (props) =>{
    return(
        <div>
            <div>
                <h3>{props.collections[props.collectionNumber].title}</h3>
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