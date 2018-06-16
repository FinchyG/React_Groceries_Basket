import React from 'react';

export default class Bananas extends React.Component {
   
    render() {

        return (
            <div className="foodtype">
                <h4>Banana</h4>
                <button onclick="add_bananas_to_basket()">Add to Basket</button>
                <button onclick="quantity_minus_one_banana()">-</button>
                <p className="quantity_display" id="banana_quantity_display">0</p>
                <button onclick="quantity_plus_one_banana()">+</button>
                <button onclick="remove_bananas_from_basket()">Remove from Basket</button>
            </div>
        )
        
    }
}