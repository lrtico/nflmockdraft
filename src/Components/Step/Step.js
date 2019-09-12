import React from 'react';
import PropTypes from 'prop-types';

const Step = props => {
  const { label } = props;
  return (
    <div className="step">
      {label}
    </div>
  )
}

Step.propTypes = {
  label: PropTypes.string,
}

export default Step;
