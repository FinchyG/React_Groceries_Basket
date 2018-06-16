import React from 'react';

export default class Selected_Items extends React.Component {

    render() {
        return (

            <div id="selected_items">
                
                <h2>Basket</h2>
                
                <span className="column_header">Food  |</span>
                <span className="column_header">  Quantity  |</span>
                <span className="column_header">   Price</span>

                <ul id="basket"></ul>

                <p>Total:<span id="total_bill"> £0.00</span></p>

            </div>

        )
    }
}