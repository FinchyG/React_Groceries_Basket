import React from 'react';

export default class SelectedItems extends React.Component {

    render() {
        return (

            <section id="selected_items">

                <div>
                    
                    <h2>Basket</h2>
                    
                    <span className="column_header">Food  |</span>
                    <span className="column_header">  Quantity  |</span>
                    <span className="column_header">   Price</span>

                    <ul id="basket"></ul>

                </div>

            </section>

        )
    }
}