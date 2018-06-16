import React from 'react';

export default class Meats_Category extends React.Component {
   
    render() {

        let meats_show = this.props.meats_show;

        if(meats_show === "true") {
            return <p>Here are the meats.</p>;
        }
        return <p></p>;
    }
}