import React, { Component } from 'react';
import Section from './components/Sections';
import FeedbackOption from './components/FeedbackOption';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = key => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  };

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    return Math.round(total === 0 ? 0 : (100 * this.state.good) / total);
  }

  render() {
    const total = this.countTotalFeedback();
    const posivevePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={s.wrapper}>
        <Section title="Leave your feedback">
          <FeedbackOption
            options={this.state}
            onClickOption={this.addFeedback}
          ></FeedbackOption>
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="No feedback yet"></Notification>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              percentage={posivevePercentage}
            ></Statistics>
          )}
        </Section>
      </div>
    );
  }
}

export default App;
