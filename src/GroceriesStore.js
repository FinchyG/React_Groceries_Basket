import React from 'react';
import {StoreTitle} from './StoreTitle';
import SelectComponent from './SelectComponent';
import SelectedItems from './SelectedItems';

export default class GroceriesStore extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

      return (

          <div>
              
              <StoreTitle />
              <SelectComponent />
              <SelectedItems />
          
          </div>

      );
    
    }

}