import React from 'react';
import Flashcard from '../flashcard/flashcard';
import './collection.css';

const Collection = (props) =>{
    return(
    <div className="container">
        {props.collections.map((collection)=>{
            return(
                <div key={collection._id}>
                    <div className="collection"> 
                        <div>
                            <h3>{collection.title}</h3>
                        </div>
                        <div>
                            <Flashcard flashcards = {collection.flashcards}/>
                        </div>
                    </div>
                </div>
            );
        })}

    </div>

    )
}

export default Collection;