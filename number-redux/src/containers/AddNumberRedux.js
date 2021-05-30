import AddNumber from '../components/AddNumber';
import { connect } from 'react-redux';
function mapReduxDispatchToReactProps(dispatch) {
  return {
    onClick: function (size) {
      dispatch({ type: 'INCREMENT', size: size });
    },
  };
}
export default connect(null, mapReduxDispatchToReactProps)(AddNumber);

// import React, { Component } from 'react';
// import AddNumber from '../components/AddNumber';
// import store from '../store';

// export default class AddNumberRedux extends Component {
//   render() {
//     return (
//       <AddNumber
//         onClick={function (size) {
//           store.dispatch({ type: 'INCREMENT', size: size });
//         }}
//       ></AddNumber>
//     );
//   }
// }
