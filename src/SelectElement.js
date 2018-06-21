import React from 'react';

export const SelectElement = (props) => {

    return (
        <div>
            <select id="food_categories" onChange={props.onChange}>
                <option value="">Select Foodtype</option>
                <option value="fruits">Fruits</option>
                <option value="vegetables">Vegetables</option>
                <option value="breads">Breads</option>
                <option value="meats">Meats</option>
            </select>
        </div>
        )
}