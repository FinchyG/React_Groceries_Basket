import React from 'react';
import Cauliflower from './Cauliflower';
import Broccolli from './Broccolli';
import Turnip from './Turnip';

export default class VegetablesssCategory extends React.Component {
   
    render() {

        let vegetables_show = this.props.vegetables_show;

        if(vegetables_show === true) {
            return (
                <div id="available_foodtypes">
                    <Cauliflower />
                    <Broccolli />
                    <Turnip />
                </div>
            );
        }
        return <p></p>;
    }
}