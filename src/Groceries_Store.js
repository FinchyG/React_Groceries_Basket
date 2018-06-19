import React from 'react';
import {Store_Title} from './Store_Title';
import Select_Component from './Select_Component';
import Selected_Items from './Selected_Items';

export default class Groceries_Store extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Store_Title />
                <Selected_Items />
                <Select_Component />
            </div>
        );
    }
}