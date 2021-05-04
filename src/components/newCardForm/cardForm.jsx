import React from 'react';

const NewCardForm = () =>{
    return(
        <div>
            <div>
                <label>Enter a question:</label>
                <input type="textbox" name="question" placeholder="Enter a question..." />
            </div>
            <div>
                <label>Enter a answer:</label>
                <input type="text" name="answer" placeholder="Enter a answer..."/>
            </div>
            <button>Add Card</button>
        </div>
    )
}

export default NewCardForm;