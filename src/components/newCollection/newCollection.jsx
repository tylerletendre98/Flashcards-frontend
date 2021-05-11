import React , {Component} from 'react';
import './newCollection.css'

class NewCollectionForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            title: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        const newCollection = {
            title : this.state.title
        }
        this.props.addNewCollection(newCollection)
        this.setState({
            title : ''
        });
    }

    render() {
        return (
            <div className="new-collection">
                <div className="new-collection-title">
                 <h3>Add a new collection below</h3> 
                </div>
                <div className="new-collection-form">
                    <form onSubmit={this.handleSubmit}>
                        <label>Enter the name of your new collection</label>
                        <input type="text" name="title" id="" value={this.state.title} onChange={this.handleChange} />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default NewCollectionForm;