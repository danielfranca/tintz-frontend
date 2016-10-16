import React from 'react';

class MainContainer extends React.Component {

    render() {
        return (
            <div>
            {this.props.children}
            </div>
        );
    }
}

MainContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default MainContainer;
