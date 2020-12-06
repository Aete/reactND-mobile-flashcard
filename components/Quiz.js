import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import { Navy, Cyan, White } from '../utils/colors';

class Quiz extends Component {
  render() {
    const { decks } = this.props;
    const { title, cardIndex } = this.props.route.params;
    const questionArray = decks[title].questions;
    if (questionArray.length === 0) {
      return (
        <QuizScreen>
          <SorryText>
            There is no question in this. {'\n'}Please add a card.
          </SorryText>
        </QuizScreen>
      );
    }
    const question = decks[title].questions[0].question;

    return (
      <QuizScreen>
        <QuizCard>
          <QuizHeader>
            <HeaderText>{`Quiz ${1}`}</HeaderText>
          </QuizHeader>
          <Question>{`${question}`}</Question>
        </QuizCard>
      </QuizScreen>
    );
  }
}

const QuizScreen = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${Cyan};
`;

const QuizCard = styled.View`
  justify-content: flex-start;
  align-items: center;
  border: 3px solid #fff;
  width: 90%;
  height: 90%;
`;

const QuizHeader = styled.View`
  align-items: flex-start;
  width: 100%;
  margin-top: 10px;
  margin-left: 20px;
`;

const HeaderText = styled.Text`
  color: ${White};
  font-size: 20px;
  font-weight: 500;
`;

const Question = styled.Text`
  color: ${White};
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-top: 60px;
`;

const SorryText = styled.Text`
  color: ${White};
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  margin-left: 30px;
  margin-right: 30px;
`;

function mapStateToProps({ decks }) {
  return { decks };
}

export default connect(mapStateToProps)(Quiz);
