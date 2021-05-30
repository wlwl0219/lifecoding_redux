import React, { Component } from 'react';
import Header from './components/Header';
import NavRedux from './containers/NavRedux';
import ControlRedux from './containers/ControlRedux';
import ArticleRedux from './containers/ArticleRedux';
import CreateRedux from './containers/CreateRedux';
import UpdateRedux from './containers/UpdateRedux';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    var article = null;
    if (this.props.mode === 'READ' || this.props.mode === 'WELCOME') {
      article = <ArticleRedux></ArticleRedux>;
    } else if (this.props.mode === 'CREATE') {
      article = <CreateRedux></CreateRedux>;
    } else if (this.props.mode === 'UPDATE') {
      article = <UpdateRedux></UpdateRedux>;
    }
    return (
      <div>
        <Header></Header>
        <NavRedux></NavRedux>
        <ControlRedux></ControlRedux>
        {article}
      </div>
    );
  }
}

export default connect(function (state) {
  return { mode: state.mode };
})(App);
