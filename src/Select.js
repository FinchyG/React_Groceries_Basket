import React from 'react';

export default class Select extends React.Component {

    constructor(props) {
        super(props);

        this.show_selected_category = this.show_selected_category.bind(this);
    }

    show_selected_category() {
        
    }

    render() {
        return (
            <select id="food_categories" onChange="show_selected_category()">
                <option value="" disabled selected>Select Foodtype</option>
                <option value="fruits">Fruits</option>
                <option value="vegetables">Vegetables</option>
                <option value="breads">Breads</option>
                <option value="meats">Meats</option>
            </select>
        )
    }
}