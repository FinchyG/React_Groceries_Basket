import React from 'react';
import {Store_Title} from './Store_Title';
import Select_Component from './Select_Component';

export default class Groceries_Store extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Store_Title />
                <Select_Component />
            </div>
        );
    }
}