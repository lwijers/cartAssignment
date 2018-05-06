// renders a button element
import React, { PureComponent } from 'react'

 class CheckOutButton extends PureComponent {
  render() {
  return (
    <button>{this.props.content}</button>
    )
  }
}

export default CheckOutButton
