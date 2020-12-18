import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import CardFlip from 'react-native-card-flip';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import { Navy, Cyan, White } from '../utils/colors';

class Quiz extends Component {
  state = {
    index: 0,
    score: 0,
  };

  render() {
    const { decks } = this.props;
    const { title } = this.props.route.params;
    const deck = decks[title];
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
    const currentQuiz = deck.questions[this.state.index].question;
    const currentAnswer = deck.questions[this.state.index].answer;
    const { index, score } = this.state;
    return (
      <QuizScreen>
        <CardFlip
          style={{
            width: '90%',
            height: '60%',
            justifyContent: 'center',
            padding: '10px',
          }}
          ref={(card) => (this.card = card)}
        >
          <QuizCard>
            <QuizHeader>
              <HeaderText>{`Quiz ${index + 1}`}</HeaderText>
            </QuizHeader>
            <Question>{currentQuiz}</Question>
            <FlipButton onPress={() => this.card.flip()}>
              <ButtonText>Answer</ButtonText>
            </FlipButton>
          </QuizCard>
          <QuizCard onPress={() => this.card.flip()}>
            <Question>{currentAnswer}</Question>
            <FlipButton onPress={() => this.card.flip()}>
              <ButtonText>Question</ButtonText>
            </FlipButton>
          </QuizCard>
        </CardFlip>
      </QuizScreen>
    );
  }
}

const QuizScreen = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${Cyan};
`;

const QuizCard = styled.View`
  justify-content: space-around;
  align-items: center;
  background-color: ${White};
  width: 100%;
  height: 100%;
`;

const QuizHeader = styled.View`
  align-items: flex-start;
  width: 100%;
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 60px;
`;

const HeaderText = styled.Text`
  color: ${Cyan};
  font-size: 20px;
  font-weight: 500;
`;

const Question = styled.Text`
  color: ${Cyan};
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;

const FlipButton = styled.TouchableOpacity`
  background-color: ${Cyan};
  height: 40px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 10px;
  min-width: 200px;
`;

const ButtonText = styled.Text`
  color: ${White};
  font-size: 20px;
  font-weight: 700;
`;

const SorryText = styled.Text`
  color: ${Navy};
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
