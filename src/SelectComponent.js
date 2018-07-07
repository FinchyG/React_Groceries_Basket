import React from 'react';
import {SelectElement} from './SelectElement';
import FruitsCategory from './fruits/FruitsCategory';
import VegetablesCategory from './vegetables/VegetablesCategory';
import BreadsCategory from './breads/BreadsCategory';
import MeatsCategory from './meats/MeatsCategory';

export default class SelectComponent extends React.Component {

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

        switch(selected) {

            case "fruits":
                this.setState((fruits_show) => ({fruits_show: true}));
                this.setState((vegetables_show) => ({vegetables_show: false}));
                this.setState((breads_show) => ({breads_show: false}));
                this.setState((meats_show) => ({meats_show: false}));
                break;

            case "vegetables":
                this.setState((vegetables_show) => ({vegetables_show: true}));
                this.setState((fruits_show) => ({fruits_show: false}));
                this.setState((breads_show) => ({breads_show: false}));
                this.setState((meats_show) => ({meats_show: false}));
                break;

            case "breads":
                this.setState((breads_show) => ({breads_show: true}));
                this.setState((fruits_show) => ({fruits_show: false}));
                this.setState((vegetables_show) => ({vegetables_show: false}));
                this.setState((meats_show) => ({meats_show: false}));
                break; 
                
            case "meats":
                this.setState((meats_show) => ({meats_show: true}));
                this.setState((fruits_show) => ({fruits_show: false}));
                this.setState((vegetables_show) => ({vegetables_show: false}));
                this.setState((breads_show) => ({breads_show: false}));
                break;                
        }
                
    }

    render() {
        return (
            <div>
                <SelectElement onChange={this.show_food_category} />
                <FruitsCategory fruits_show={this.state.fruits_show} />
                <VegetablesCategory vegetables_show={this.state.vegetables_show} />
                <BreadsCategory breads_show={this.state.breads_show} />
                <MeatsCategory meats_show={this.state.meats_show} />
            </div>
        )
    }
}