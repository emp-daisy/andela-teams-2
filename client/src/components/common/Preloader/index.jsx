import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/**
 * Render preloader bar when needed
 *
 * @param {any} { isLoading }
 *
 * @returns {JSX.Element} React element
 */
const Preloader = ({ isLoading: { isLoading } }) => (
  <div className="progress preloader">
    {isLoading && <div className="indeterminate" />}
  </div>
);
const mapStateToProps = state => ({
  isLoading: state.isLoading
});

Preloader.propTypes = {
  isLoading: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired
  }).isRequired
};

export default connect(mapStateToProps, null)(Preloader);