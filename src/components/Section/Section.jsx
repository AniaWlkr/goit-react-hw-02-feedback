import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import styles from './Section.module.css';

class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = btnName =>
    this.setState(prevState => ({ [btnName]: prevState[btnName] + 1 }));

  calcTotalStats = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  calcPositives = () => {
    if (!this.calcTotalStats()) return 0;
    const { good, neutral } = this.state;
    const positives = Math.floor(
      ((good + neutral) / this.calcTotalStats()) * 100,
    );
    return positives;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={styles.section}>
        <FeedbackOptions
          feedbackBtns={['good', 'neutral', 'bad']}
          onLeaveFeedback={'feedbackCount'}
          onButtonClick={this.onButtonClick}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.calcTotalStats()}
          positives={this.calcPositives()}
        />
      </div>
    );
  }
}

export default Section;
