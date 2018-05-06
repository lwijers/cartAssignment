// renders a <li> element

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class CartItem extends PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }

  incrementQuantity = (productId) => {

  }

  
  render() {
    const {id, name, price} = this.props

  return (
    <li className="CartItem">
      <p className ="cartItemInfo">item: {name}, Price: {price}</p>
    </li>
    )
  }
}
