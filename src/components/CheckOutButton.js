// renders a button element
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


class CheckOutButton extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

    render() {
    return (
      <button onClick={this.props.onClick}>Check Out</button>
    )
  }
}

export default CheckOutButton
