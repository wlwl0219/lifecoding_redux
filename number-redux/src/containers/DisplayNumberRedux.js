import DisplayNumber from '../components/DisplayNumber';
import { connect } from 'react-redux';
function mapReduxStateToReactProps(state) {
  return {
    number: state.number,
  };
}
export default connect(mapReduxStateToReactProps)(DisplayNumber);

// import React, { Component } from 'react';
// import DisplayNumber from '../components/DisplayNumber';
// import store from '../store';

// export default class DisplayNumberRedux extends Component {
//   state = { number: store.getState().number };
//   componentDidMount() {
//     store.subscribe(
//       function () {
//         this.setState({ number: store.getState().number });
//       }.bind(this)
//     );
//   }
//   render() {
//     return <DisplayNumber number={this.state.number}></DisplayNumber>;
//   }
// }
