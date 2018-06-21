import React from 'react';

export default class BreadsCategory extends React.Component {
   
    render() {

        let breads_show = this.props.breads_show;

        if(breads_show === "true") {
            return <p>Here are the breads.</p>;
        }
        return <p></p>;
    }
}