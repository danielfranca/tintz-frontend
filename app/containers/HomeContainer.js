import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as subscribeActions from '../store/subscription/actions';


class HomeContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            isSubscribed: false
        };
    }

    onClickSubscribeHandler(ev) {
        console.log(ev);
        let email = ev.target.form[0].value;
        if (email.length > 0) {
            subscribeActions.subscribe(email);
        }
    }

    render() {
        return (
            <div>
            <Home onClickSubscribeHandler={(ev) => this.onClickSubscribeHandler(ev)} />
            </div>
        );
    }
}

HomeContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return { isSubscribed: state.isSubscribed }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(subscribeActions, dispatch) }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
