import React, { Component } from 'react';
import './App.css';
import CartItem from './components/CartItem'
import CheckOutButton from './components/CheckOutButton'
import Clock from 'react-live-clock';
// import Time from './components/Clock.js'
// import PropTypes from 'prop-types'

const products = [
    {
        id: 1,
        name: "Prada Shoes",
        price: 570,
        amount: 0,
    },
    {
        id: 2,
        name: "Rolex Watch",
        price: 649,
        amount: 0,
    },
    {
        id: 3,
        name: "Paper clips",
        price: 0.1,
        amount: 0,
    }
]

class App extends Component {
  state = { products }
  // static propTypes = {
  //   cartItems: PropTypes.arrayOf(cartItemShape).isRequired
  // }

  updateProduct = (productId, updates) => {
   this.setState({
     products: this.state.products.map((product) => {
       if (product.id !== productId) return product
       return { ...product, ...updates }
     })
   })
 }





  render() {
      return (
      <div className="App">
        <Clock format={'HH:mm:ss'} ticking = {true} timezone={'Europe/Amsterdam'} />
        <CheckOutButton content=" test" />
        <ul>
          {this.state.products.map((product, index) => <CartItem key={index} onPlusClick={this.updateProduct} { ...product} />) }
        </ul>


      </div>
    );
  }
}

export default App;

//
// updateProducts = (productId, updates) => {
//   this.setState( {
//     products: this.state.products.map((product) => {
//       if (product.id !== productId) return product
//       return { ...product, ...updates}
//     })
//   })
// }
