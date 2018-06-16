import React from 'react';
import Bananaas from './Bananas';
import Oranges from './Oranges';
import Apples from './Apples';

export default class Fruits_Category extends React.Component {
   
    render() {

        let fruits_show = this.props.fruits_show;

        if(fruits_show === "true") {
            return (
                <div>
                    <Bananaas />
                    <Oranges />
                    <Apples />
                </div>
            );
        }
        return <p></p>;
    }
}