import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as subscribeActions from '../store/subscription/actions';
import * as SubscriptionSelectors from '../store/subscription/reducer';



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
            this.props.dispatch(subscribeActions.subscribe(email));
        }
    }

    render() {
        console.log(this.props);
        return (
            <div>
            <Home
                onClickSubscribeHandler={(ev) => this.onClickSubscribeHandler(ev)}
                isSubscribed={this.props.isSubscribed}
                message={this.props.message}
                />
            </div>
        );
    }
}

HomeContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
      isSubscribed: SubscriptionSelectors.isSubscribed(state),
      message: SubscriptionSelectors.Message(state),
      statusCode: SubscriptionSelectors.StatusCode(state)
  }
}

/*function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(subscribeActions, dispatch) }
}*/

export default connect(mapStateToProps)(HomeContainer);
