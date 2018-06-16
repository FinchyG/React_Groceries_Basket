import React from 'react';

export default class Fruits_Category extends React.Component {
   
    render() {

        let fruits_show = this.props.fruits_show;

        if(fruits_show === "true") {
            return <p>Here are the fruits.</p>;
        }
        return <p></p>;
    }
}