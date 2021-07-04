import React, { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import styles from './Section.module.css';

const Section = () => {
  const [good, setGood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);

  const onButtonClick = btnName => {
    switch (btnName) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setneutral(neutral + 1);
        break;
      case 'bad':
        setbad(bad + 1);
        break;
      default:
        console.log(`Sorry, we are out of ${btnName}.`);
    }
  };

  const totalStats = good + neutral + bad;

  const calcPositives = () => {
    if (!totalStats) return 0;

    const positives = Math.floor(((good + neutral) / totalStats) * 100);
    return positives;
  };

  return (
    <div className={styles.section}>
      <FeedbackOptions
        feedbackBtns={['good', 'neutral', 'bad']}
        onLeaveFeedback={'feedbackCount'}
        onButtonClick={onButtonClick}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalStats}
        positives={calcPositives()}
      />
    </div>
  );
};

export default Section;
