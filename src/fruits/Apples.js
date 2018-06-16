import React from 'react';

export default class Apples extends React.Component {
   
    render() {

        return (
            <div className="foodtype">
                <h4>Apple</h4>
                <button onclick="add_apples_to_basket()">Add to Basket</button>
                <button onclick="quantity_minus_one_apple()">-</button>
                <p className="quantity_display" id="apple_quantity_display">0</p>
                <button onclick="quantity_plus_one_apple()">+</button>
                <button onclick="remove_apples_from_basket()">Remove from Basket</button>
            </div>
        )
        
    }
}