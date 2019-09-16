import React from 'react';
import PropTypes from 'prop-types';

const Step = props => {
  const { label, classes } = props;
  return (
    <div className={classes !== null ? `step ${classes}` : "step"}>
      {label}
    </div>
  )
}

Step.propTypes = {
  label: PropTypes.string,
  classes: PropTypes.string,
}

export default Step;
