import React from 'react';

export default class Oranges extends React.Component {
   
    render() {

        return (
            <div className="foodtype">
                <h4>Orange</h4>
                <button onclick="add_oranges_to_basket()">Add to Basket</button>
                <button onclick="quantity_minus_one_orange()">-</button>
                <p className="quantity_display" id="orange_quantity_display">0</p>
                <button onclick="quantity_plus_one_orange()">+</button>
                <button onclick="remove_oranges_from_basket()">Remove from Basket</button>
            </div>
        )
        
    }
}