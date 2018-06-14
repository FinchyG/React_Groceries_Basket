import React from 'react';
import Select from './Select';

export default class Select_Component extends React.Component {

    constructor(props) {
        super(props);

        this.show_selected_category = this.show_selected_category.bind(this);
    }

    show_selected_category() {
        
    }

    render() {
        return (
            <Select />
        )
    }
}