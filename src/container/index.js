import React from 'react';
import { connect } from 'react-redux';
import Widget from '../components/Widget';
import FoobarSelector from './selectors';

import { dummyAction } from './actions';

export class RootContainer extends React.Component {
  render() {
    return (
      <Widget
        foobar={this.props.foobar}
        doDummyAction={this.props.doDummyAction}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    foobar: FoobarSelector(state)
  }
};

function mapDispatchToProps(dispatch) {
  return {
    doDummyAction: (dummyArg) => dispatch(dummyAction({ dummyArg }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
