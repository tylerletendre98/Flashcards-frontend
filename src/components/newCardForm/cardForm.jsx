import React, { Component } from 'react';

class NewCardForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            question: '',
            answer: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        let collectionId = this.props.collections[this.props.collectionNumber].id
        const newFlashcard ={
            question: this.state.question,
            answer: this.state.answer
        }
        this.props.addNewFlashcard(newFlashcard , collectionId);
        this.setState({
            question: '',
            answer: ''
        })
    }


    render() {
        return (
            <div>
                <div>
                    <h4>Add a new flashcard below to this collection</h4>
                </div>
                <form action="Submit" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Enter a question:</label>
                        <textarea name="question" value={this.state.question} cols="30" rows="5" onChange={this.handleChange}></textarea>
                    </div>
                    <div>
                        <label>Enter a answer:</label>
                        <textarea name="answer" value={this.state.answer} onChange={this.handleChange} cols="30" rows="5"></textarea>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            );
    }
}

export default NewCardForm;