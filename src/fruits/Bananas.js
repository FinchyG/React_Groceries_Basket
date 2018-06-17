import React from 'react';

export default class Bananas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Bananas",
            quantity: 0,
            price: 0.20,
            add_to_basket: true
        }

        this.add_bananas_to_basket = this.add_bananas_to_basket.bind(this);
        this.quantity_plus_one = this.quantity_plus_one.bind(this);

    }

    add_bananas_to_basket() {

        if(this.state.add_to_basket === true) {

            let banana_quantity = this.state.quantity += 1;
            this.setState((quantity) => ({quantity: banana_quantity}));

            let total_price = (this.state.quantity * this.state.price).toFixed(2);
            
            let li = document.createElement("li");
            li.setAttribute("id", "banana_li");
            let ul = document.getElementById("basket");
            li.appendChild(document.createTextNode(this.state.name + " " + this.state.quantity + " " + "£" + total_price));
            ul.appendChild(li);
        }
        
        this.setState((add_to_basket) => ({add_to_basket: false}));
    
    }

    quantity_plus_one() {

        if(this.state.quantity >= 1) {

            let banana_quantity = this.state.quantity += 1;
            this.setState((quantity) => ({quantity: banana_quantity}));
            let total_price = (this.state.quantity * this.state.price).toFixed(2);
            document.getElementById("banana_li").innerHTML = this.state.name + " " + this.state.quantity + " " + "£" + total_price;
        }
        
    }

    render() {

        return (
            <div className="foodtype">
                <h4>Banana</h4>
                <button onClick={this.add_bananas_to_basket}>Add to Basket</button>
                <button onClick={this.quantity_plus_one}>+</button>
            </div>
        )
        
    }
}