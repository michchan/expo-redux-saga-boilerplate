import React from 'react'; 
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import {} from '../../screens';
import {} from '../../components';
import {} from '../../actions';

class SomeContainer extends React.Component {
  static defaultProps = {};
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      null //Some View
    );
  }
}

const mapStateToProps = (state, ownProps) => ({ });

const mapDispatchToProps = (dispatch, ownProps) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)( SomeContainer );
