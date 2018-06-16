import React from 'react';

export default class Vegetables_Category extends React.Component {
   
    render() {

        let vegetables_show = this.props.vegetables_show;

        if(vegetables_show === "true") {
            return <p>Here are the vegetables.</p>;
        }
        return <p></p>;
    }
}