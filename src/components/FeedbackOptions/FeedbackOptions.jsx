import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ feedbackBtns, onButtonClick }) => {
  return (
    <div>
      <h2 className={styles.title}>Please leave feedback</h2>
      {feedbackBtns.map(btn => (
        <Button key={btn} name={btn} onButtonClick={onButtonClick} />
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  feedbackBtns: PropTypes.arrayOf(PropTypes.string).isRequired,
  onButtonClick: PropTypes.func,
};

export default FeedbackOptions;
