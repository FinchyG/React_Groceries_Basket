import React from 'react';
import {Select} from './Select';
import Fruits_Category from './fruits/Fruits_Category';
import Vegetables_Category from './vegetables/Vegetables_Category';
import Breads_Category from './breads/Breads_Category';
import Meats_Category from './meats/Meats_Category';

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
                this.setState((breads_show) => ({breads_show: "false"}));
                this.setState((meats_show) => ({meats_show: "false"}));
                break;

            case "vegetables":
                this.setState((vegetables_show) => ({vegetables_show: "true"}));
                this.setState((fruits_show) => ({fruits_show: "false"}));
                this.setState((breads_show) => ({breads_show: "false"}));
                this.setState((meats_show) => ({meats_show: "false"}));
                break;

            case "breads":
                this.setState((breads_show) => ({breads_show: "true"}));
                this.setState((fruits_show) => ({fruits_show: "false"}));
                this.setState((vegetables_show) => ({vegetables_show: "false"}));
                this.setState((meats_show) => ({meats_show: "false"}));
                break; 
                
            case "meats":
                this.setState((meats_show) => ({meats_show: "true"}));
                this.setState((fruits_show) => ({fruits_show: "false"}));
                this.setState((vegetables_show) => ({vegetables_show: "false"}));
                this.setState((breads_show) => ({breads_show: "false"}));
                break;                
        }
                
    }

    render() {
        return (
            <div>
                <Select onChange={this.show_food_category} />
                <Fruits_Category fruits_show={this.state.fruits_show} />
                <Vegetables_Category vegetables_show={this.state.vegetables_show} />
                <Breads_Category breads_show={this.state.breads_show} />
                <Meats_Category meats_show={this.state.meats_show} />
            </div>
        )
    }
}