import React from 'react';

export default class Fruits_Category extends React.Component {
   

    render() {
        if(this.props.fruits_show === "true") {
            return (
                <div id="available_fruits">
                    <p>Fruits</p>
                </div>
            );
        }
        
    }
}