import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as subscribeActions from '../store/subscription/actions';
import * as SubscriptionSelectors from '../store/subscription/reducer';



class HomeContainer extends React.Component {

    onClickSubscribeHandler(ev) {
        console.log(ev);
        let email = ev.target.form[0].value;
        if (email.length > 0) {
            this.props.dispatch(subscribeActions.subscribe(email));
        }
    }

    onClickCloseMessage(ev) {
        console.log("Closing message...", ev);
        this.props.dispatch(subscribeActions.closeMessage());
    }

    render() {
        console.log(this.props);
        return (
            <div>
            <Home
                onClickSubscribeHandler={(ev) => this.onClickSubscribeHandler(ev)}
                isSubscribed={this.props.isSubscribed}
                message={this.props.message}
                isShowingMessage={this.props.isShowingMessage}
                onClickCloseMessage={(ev) => this.onClickCloseMessage(ev)}
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
      isShowingMessage: SubscriptionSelectors.IsShowingMessage(state),
      statusCode: SubscriptionSelectors.StatusCode(state)
  }
}

/*function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(subscribeActions, dispatch) }
}*/

export default connect(mapStateToProps)(HomeContainer);
