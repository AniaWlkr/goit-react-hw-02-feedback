import React from 'react';
import styles from './App.module.css';
import Section from '../Section/Section';

const App = ({ children }) => {
  return (
    <div className={styles.container}>
      <Section title="FeedbackStatistics">{children}</Section>
    </div>
  );
};

export default App;
