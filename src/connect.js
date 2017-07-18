import React from 'react';
import PropTypes from 'prop-types';

const connect = (mapStateToProps, mapDispatchToProps) => Component => {
  class ConnectedComponent extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.dispatch = this.dispatch.bind(this);
      this.handleChange = this.handleChange.bind(this);
      context.store.subscribe(this.handleChange);
    }

    dispatch(action) {
      this.context.store.dispatch(action);
    }

    handleChange() {
      this.forceUpdate();
    }

    render() {
      return (
        <Component
          { ...mapStateToProps(this.context.store.getState()) }
          { ...mapDispatchToProps(this.dispatch) }
          { ...this.props }
        />
      )
    }
  }

  ConnectedComponent.contextTypes = {
    store: PropTypes.object
  }
  ConnectedComponent.displayName = `Connected(${ Component.displayName })`;

  return ConnectedComponent;
}

export default connect;
