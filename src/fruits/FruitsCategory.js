import React from 'react';
import Bananaas from './Bananas';
import Oranges from './Oranges';
import Apples from './Apples';

export default class FruitsCategory extends React.Component {
   
    render() {

        let fruits_show = this.props.fruits_show;

        if(fruits_show === true) {
            return (
                <div id="available_foodtypes">
                    <Bananaas />
                    <Oranges />
                    <Apples />
                </div>
            );
        }
        return <p></p>;
    }
}