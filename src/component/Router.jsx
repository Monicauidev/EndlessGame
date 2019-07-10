import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EndlessApp from '../container/EndlessApp';

/**
 * This component is the main container for the Portal UI.
 *
 * @export
 * @class App
 * @extends {Component}
 */
class Router extends Component {
  
  render() {
    return (
        <Switch>
        <Route exact path="/EndlessApp"  render={() => ( (<EndlessApp  />))} /> */}
        <Redirect from="/" to="/EndlessApp" />
      </Switch>
    );
  }
}

/**
 * mapStateToPops - maps the store state to the component props
 */

/**
 * connect() method connects component to redux store
 */
export default withRouter(connect("", {}, null, { pure: false })(Router));
