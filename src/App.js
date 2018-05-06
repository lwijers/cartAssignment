import React, { Component } from 'react';
import './App.css';
import CartItem from './components/CartItem'
import CheckOutButton from './components/CheckOutButton'

const products = [
    {
        id: 1,
        name: "Prada Shoes",
        price: 570
    },
    {
        id: 2,
        name: "Rolex Watch",
        price: 649
    },
    {
        id: 3,
        name: "Paper clips",
        price: 0.1
    }
]

class App extends Component {
  render() {




    return (
      <div className="App">
          <CheckOutButton content=" test" />
          <ul>
            {products.map((product, index) => <CartItem key={index} { ...product } />)}

          </ul>
      </div>
    );
  }
}

export default App;
