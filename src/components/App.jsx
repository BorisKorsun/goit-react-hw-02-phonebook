import React, { Component } from "react";

import Section from 'components/Section/Section';
import Notification from "./Notification/Notification";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedbacks = e => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = e => {
    const { good} = this.state;
    const total = this.countTotalFeedbacks();
    const percentage = (good / total) * 100;
    return Math.round(percentage) + '%';
  };  
  
  onLeaveFeedback = e => {
    const { name } = e.currentTarget;

    this.setState((prev) => {
      return {
        [name]: prev[name] + 1,
      };
    });
    console.log(this.state);
  };
  
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedbacks();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
      <Section title='Please leave feedback'>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
      </Section>
      <Section>
          {!total ? (
          <Notification message='No feedback given'/>
          ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              ></Statistics>
          )}
          
      </Section>
      </>
    )
  };
};

export default App;