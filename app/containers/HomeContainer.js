import React from 'react';
import Home from '../components/Home';

class HomeContainer extends React.Component {

    onClickSurveyHandler(e) {
        console.log("onClickSurveyHandler...");
        $('.ui.modal')
          .modal({
              'onHidden': () => console.log("Closing modal...") }
          )
          .modal('show')
        ;
    }

    render() {
        return (
            <div>
            <Home onClickSurveyHandler={() => this.onClickSurveyHandler()}/>
            </div>
        );
    }
}

HomeContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default HomeContainer;
