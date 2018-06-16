import React from 'react';
import {Select} from './Select';
import Fruits_Category from './fruits/Fruits_Category';

export default class Select_Component extends React.Component {

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

        if(selected === "fruits") {
            this.state.fruits_show = this.state.fruits_show === false ? true : false;
        }
                
    }

    render() {
        return (
            <div>
                <Select onChange={this.show_food_category} />
            </div>
        )
    }
}