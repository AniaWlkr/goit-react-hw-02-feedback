import styles from './Statistics.module.css';
import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positives }) => {
  return (
    <div>
      <h2 className={styles.statisticsTitle}>Statistics</h2>
      {!total ? (
        <Notification message={'No feedback given'} />
      ) : (
        <ul className={styles.statisticsList}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positives}%</li>
        </ul>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positives: PropTypes.number,
};

export default Statistics;
