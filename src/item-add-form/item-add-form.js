import React, { Component } from "react";
import "./item-add-form.css"

export default class ItemAddForm extends Component {
    state = {
        label: ''
    }
    onLabelChange = (e) => {
        this.setState( {
            label: e.target.value
        }) 
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.itemAdd(this.state.label)
        this.setState({
            label: ''
        }) 
    }
    render() {
        return (
            <form className="add-form" 
                onSubmit={this.onSubmit}>
                <input type="text" 
                className="add-form__input"
                placeholder="Whats need to be done"
                onChange={this.onLabelChange}
                value={this.state.label}/>
                <button className="add-form__button">
                    Add Item
                </button>
            </form>
        )
    }
}
