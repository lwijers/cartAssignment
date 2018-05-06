// renders a <li> element

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export const cartItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
})



export default class CartItem extends PureComponent {
  static propTypes = {
    ...cartItemShape.isRequired,
    onPlusClick: PropTypes.func.isRequired
  }

   incrementQuantity = () => {
     const { id, amount, onPlusClick} = this.props
     onPlusClick(id, { amount: amount + 1 })
   }

   render() {
     const {name, price, amount} = this.props


     return (
       <li className="CartItem">
         <p className ="cartItemInfo">item: {name}, Price: {price}, current amount: {amount}
           <button className="Increment" onClick={this.incrementQuantity}>+</button></p>
       </li>
     )
   }
}
