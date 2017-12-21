import React from 'react'; 
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { SomeScreen as _SomeScreen } from '../../screens';
import {} from '../../actions';

const mapStateToProps = (state, ownProps) => ({ });

const mapDispatchToProps = (dispatch, ownProps) => ({ });

export const SomeScreen = connect(mapStateToProps, mapDispatchToProps)( _SomeScreen );

export default SomeScreen;