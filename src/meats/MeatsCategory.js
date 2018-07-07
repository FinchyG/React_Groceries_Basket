import React from 'react';
import Beef from './Beef';
import Pork from './Pork';
import Chicken from './Chicken';

export default class MeatssCategory extends React.Component {
   
    render() {

        let meats_show = this.props.meats_show;

        if(meats_show === true) {
            return (
                <div id="available_foodtypes">
                    <Beef />
                    <Pork />
                    <Chicken />
                </div>
            );
        }
        return <p></p>;
    }
}