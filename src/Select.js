import React from 'react';

export default class Select extends React.Component {

    constructor(props) {

        super(props);
        
        this.state = {
            fruits_show: false,
            vegetables_show: false,
            breads_show: false,
            meats_show: false
        }

        this.show_food_category = this.show_food_category.bind(this);

    }

    show_food_category() {
        const selected = document.getElementById("food_categories").value;
        console.log(selected);
    }

    render() {
        return (
            <div>
                <select id="food_categories" onChange={this.show_food_category}>
                    <option value="">Select Foodtype</option>
                    <option value="fruits">Fruits</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="breads">Breads</option>
                    <option value="meats">Meats</option>
                </select>
            </div>
        )
    }
}