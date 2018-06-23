import React from 'react';
import Baguettes from './Baguettes';
import Loafs from './Loafs';
import Rolls from './Rolls';

export default class BreadsCategory extends React.Component {
   
    render() {

        let breads_show = this.props.breads_show;

        if(breads_show === "true") {
            return (
                <div id="available_foodtypes">
                    <Baguettes />
                    <Loafs />
                    <Rolls />
                </div>
            );
        }
        return <p></p>;
    }
}