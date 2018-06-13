import React from 'react';
import {Store_Title} from './Store_Title';
import Select from './Select';

export default class Groceries_Store extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Store_Title />
                <Select />
            </div>
        );
    }
}