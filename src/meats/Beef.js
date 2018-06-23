import React from 'react';
import {PlusButton} from '../buttons/PlusButton';
import {AddToBasketButton} from '../buttons/AddToBasketButton';
import {MinusButton} from '../buttons/MinusButton';
import {RemoveFromBasketButton} from '../buttons/RemoveFromBasketButton';
import {QuantityBox} from '../buttons/QuantityBox';

export default class Beef extends React.Component {

    constructor(props) {

        super(props)
        ;
        this.state = {
            name: "Beef",
            quantity: 0,
            price: 3.00,
            add_to_basket: true
        }

        this.add_to_basket = this.add_to_basket.bind(this);
        this.quantity_plus_one = this.quantity_plus_one.bind(this);
        this.quantity_minus_one = this.quantity_minus_one.bind(this);
        this.remove_from_basket = this.remove_from_basket.bind(this);
    
    }

    add_to_basket() {

        if(this.state.add_to_basket === true) {

            let item_quantity = this.state.quantity;
            let item_quantity_plus_one = item_quantity + 1;
            this.setState((quantity) => ({quantity: item_quantity_plus_one}));

            let total_price = (item_quantity_plus_one * this.state.price).toFixed(2);
            
            let li = document.createElement("li");
            li.setAttribute("id", "beef_li");
            let ul = document.getElementById("basket");
            li.appendChild(document.createTextNode(this.state.name + " " + item_quantity_plus_one + " " + "£" + total_price));
            ul.appendChild(li);
        
        }
        
        this.setState((add_to_basket) => ({add_to_basket: false}));
    
    }

    quantity_plus_one() {

        if(this.state.quantity >= 1) {

            let item_quantity = this.state.quantity;
            let item_quantity_plus_one = item_quantity + 1;
            this.setState((quantity) => ({quantity: item_quantity_plus_one}));
            let total_price = (item_quantity_plus_one * this.state.price).toFixed(2);
            document.getElementById("beef_li").innerHTML = this.state.name + " " + item_quantity_plus_one + " " + "£" + total_price;
        
        }

    }

    quantity_minus_one() {

        let item_quantity = this.state.quantity;
            
        if(item_quantity >= 1) {

            item_quantity -=1;
            this.setState((quantity) => ({quantity: item_quantity}));
            let total_price = (item_quantity * this.state.price).toFixed(2);
            document.getElementById("beef_li").innerHTML = this.state.name + " " + item_quantity + " " + "£" + total_price;
        
        }

        if(item_quantity === 0) {

            this.remove_from_basket();
        
        }

    }

    remove_from_basket() {

        if(this.state.quantity >= 1) {

            this.setState((quantity) => ({quantity: 0}));
            console.log(this.state.quantity);

            var li = document.getElementById("beef_li");
            var ul = document.getElementById("basket");
            ul.removeChild(li);

            this.setState((add_to_basket) => ({add_to_basket: true}));

        }
        
    }

    render() {

        return (
            <div className="foodtype">
                <h4>beef</h4>
                <AddToBasketButton onClick={this.add_to_basket} />
                <MinusButton onClick={this.quantity_minus_one} />
                <QuantityBox quantity={this.state.quantity} />
                <PlusButton onClick={this.quantity_plus_one} />
                <RemoveFromBasketButton onClick={this.remove_from_basket} />
            </div>
        )
        
    }
}