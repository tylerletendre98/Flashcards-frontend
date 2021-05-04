import React, { Component } from 'react';

class NewCardForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            question: '',
            answer: '',
            collectionTitle:''
        }
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <div>
                <form action="Submit" onSubmit={this.addNewFlashcard}>
                    <div>
                        <label>Enter Collection Name</label>
                        <input type="text" value={this.state.collectionTitle} />
                    </div>
                    <div>
                        <label>Enter a question:</label>
                        <textarea value={this.state.question} cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <label>Enter a answer:</label>
                        <input type="textarea" placeholder="Enter a answer..." value={this.state.answer} onChange={this.handleChange}/>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            );
    }
}

export default NewCardForm;