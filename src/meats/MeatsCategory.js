import React from 'react';

export default class MeatsCategory extends React.Component {
   
    render() {

        let meats_show = this.props.meats_show;

        if(meats_show === "true") {
            return <p>Here are the meats.</p>;
        }
        return <p></p>;
    }
}