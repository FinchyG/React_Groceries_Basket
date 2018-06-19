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

        this.add_to_basket = this.add_to_basket.bind(this);
        this.quantity_plus_one = this.quantity_plus_one.bind(this);
        this.quantity_minus_one = this.quantity_minus_one.bind(this);
        this.remove_from_basket = this.remove_from_basket.bind(this);
        this.total_groceries_bill = this.total_groceries_bill.bind(this);

    }

    add_to_basket() {

        if(this.state.add_to_basket === true) {

            let item_quantity = this.state.quantity += 1;
            this.setState((quantity) => ({quantity: item_quantity}));

            let total_price = (this.state.quantity * this.state.price).toFixed(2);
            
            let li = document.createElement("li");
            li.setAttribute("id", "banana_li");
            let ul = document.getElementById("basket");
            li.appendChild(document.createTextNode(this.state.name + " " + this.state.quantity + " " + "£" + total_price));
            ul.appendChild(li);
        }
        
        this.setState((add_to_basket) => ({add_to_basket: false}));
        this.total_groceries_bill()
    
    }

    quantity_plus_one() {

        if(this.state.quantity >= 1) {

            let item_quantity = this.state.quantity += 1;
            this.setState((quantity) => ({quantity: item_quantity}));
            let total_price = (this.state.quantity * this.state.price).toFixed(2);
            document.getElementById("banana_li").innerHTML = this.state.name + " " + this.state.quantity + " " + "£" + total_price;
        }

        this.total_groceries_bill()
        
    }

    quantity_minus_one() {

        let item_quantity = this.state.quantity;
            
        if(item_quantity >= 1) {
            item_quantity -=1;
            this.setState((quantity) => ({quantity: item_quantity}));
            let total_price = (this.state.quantity * this.state.price).toFixed(2);
            document.getElementById("banana_li").innerHTML = this.state.name + " " + item_quantity + " " + "£" + total_price;
        }

        if(item_quantity === 0) {
            this.remove_from_basket();
        }

        this.total_groceries_bill()

    }

    remove_from_basket() {

        if(this.state.quantity >= 1) {

            this.setState((quantity) => ({quantity: 0}));
            console.log(this.state.quantity);

            var li = document.getElementById("banana_li");
            var ul = document.getElementById("basket");
            ul.removeChild(li);

            this.setState((add_to_basket) => ({add_to_basket: true}));
        }

        this.total_groceries_bill()

    }

    total_groceries_bill() {

        let total_bill_display = document.getElementById("total_bill").innerHTML;
        let pound_symbol = /(£)/;
        let total_bill_formatted = total_bill_display.replace(pound_symbol,"");
        let total_bill_number = parseInt(total_bill_formatted);
        let total_price = this.state.quantity * this.state.price;
        let final_total_bill = "£" + ((total_bill_number + total_price).toFixed(2));
        
        let groceries_total_bill = document.getElementById("total_bill");
        this.groceries_total_bill.innerHTML = final_total_bill;

    }

    render() {

        return (
            <div className="foodtype">
                <h4>Banana</h4>
                <button onClick={this.add_to_basket}>Add to Basket</button>
                <button onClick={this.quantity_plus_one}>+</button>
                <p class="quantity_display">{this.state.quantity}</p>
                <button onClick={this.quantity_minus_one}>-</button>
                <button onClick={this.remove_from_basket}>Remove from Basket</button>
                <button onClick={this.total_groceries_bill}>bill</button>
            </div>
        )
        
    }
}