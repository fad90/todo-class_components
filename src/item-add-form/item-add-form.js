import React, { Component } from "react";
import "./item-add-form.css"

export default class ItemAddForm extends Component {
    render() {
        return (
            <div className="add-form">
                <button className="add-form__button" 
                onClick={ () => this.props.itemAdd('Item korean') }>
                    Add Item
                </button>
            </div>
        )
    }
}
