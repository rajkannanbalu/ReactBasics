import React, { Component } from 'react';
import ListComponent from './ListComponent';

class App extends Component {
    state = {
        items: [{
            id: 1,
            name: 'Product1'
        }, {
            id: 2,
            name: 'Product2'
        }, {
            id: 3,
            name: 'Product3'
        }]
    };
  
    
    render() {
        const { items } = this.state;
        
        return (
            <div className="container">
                <h1>React ListComponent</h1>                                
                <ListComponent items={items}> </ListComponent>                
            </div>
        );
    }
}

export default App;