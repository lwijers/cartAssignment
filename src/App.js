import React, { Component } from 'react';
import './App.css';
import CartItem from './components/CartItem'
import CheckOutButton from './components/CheckOutButton'
import Clock from 'react-live-clock';

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

let totalAmount = 0

class App extends Component {
  state = { products, totalAmount }

  updateProduct = (productId, updates) => {
    this.setState({
      products: this.state.products.map((product) => {
        if (product.id !== productId) return product
        return { ...product, ...updates }
      })
    })
  }

 updateTotalAmount = () => {
   let totalPerProduct = this.state.products.map((product) =>{
     return product.amount * product.price
   })
   console.log(totalPerProduct);
   this.setState({
     totalAmount: totalPerProduct.reduce((prev, next) => {
       return prev + next}, 0)
   })
 }

 render() {
   return (
     <div className="App">
       <Clock
         format={'HH:mm:ss'}
         ticking = {true}
         timezone={'Europe/Amsterdam'}
       />
       <ul>
         {this.state.products.map((product, index) =>
           <CartItem
             key={index}
             onPlusClick={this.updateProduct}
             { ...product}
           />)
         }
       </ul>
       <CheckOutButton onClick={this.updateTotalAmount}/>
       <p>{this.state.totalAmount}</p>
     </div>
   );
 }
}

export default App;
