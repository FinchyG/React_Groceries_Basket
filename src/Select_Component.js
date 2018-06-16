import React from 'react';
import {Select} from './Select';
import Fruits_Category from './fruits/Fruits_Category';
import Vegetables_Category from './vegetables/Vegetables_Category';

export default class Select_Component extends React.Component {

    constructor(props) {

        super(props);
        
        this.state = {
            fruits_show: "false",
            vegetables_show: "false",
            breads_show: "false",
            meats_show: "false"
        }

        this.show_food_category = this.show_food_category.bind(this);

    }

    show_food_category() {

        const selected = document.getElementById("food_categories").value;

        switch(selected) {

            case "fruits":
                this.setState((fruits_show) => ({fruits_show: "true"}));
                this.setState((vegetables_show) => ({vegetables_show: "false"}));
                break;

            case "vegetables":
                this.setState((vegetables_show) => ({vegetables_show: "true"}));
                this.setState((fruits_show) => ({fruits_show: "false"}));
                break;
        }
                
    }

    render() {
        return (
            <div>
                <Select onChange={this.show_food_category} />
                <Fruits_Category fruits_show={this.state.fruits_show} />
                <Vegetables_Category vegetables_show={this.state.vegetables_show} />
            </div>
        )
    }
}