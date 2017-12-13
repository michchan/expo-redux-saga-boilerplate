import React, { Component } from 'react';

export default someHOC = (SomeComponent) => { 
// turns this.props.navigation.state.params into this.params.<x>
    return class extends Component {
        render() {
            return <SomeComponent {...this.props} />
        }
    }
}