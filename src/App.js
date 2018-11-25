import React, { Component } from 'react';
import CartApp from './components/CartApp';
  
class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="Content">
          	<CartApp />
          </div>
        </div>
    );
  }
}

export default App;
