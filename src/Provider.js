import React from 'react';
import PropTypes from 'prop-types';

class Provider extends React.Component {
  getChildContext() {
    return { store: this.props.store }
  }

  render() {
    return <div>{ this.props.children }</div>
  }
}

Provider.childContextTypes = {
  store: PropTypes.object
}

export default Provider;
