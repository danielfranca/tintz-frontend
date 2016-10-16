import React from 'react';
import Home from '../components/Home';

class HomeContainer extends React.Component {

    render() {
        return (
            <div>
            <Home />
            </div>
        );
    }
}

HomeContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default HomeContainer;
