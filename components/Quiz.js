import React, { Component } from 'react';
import CardFlip from 'react-native-card-flip';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import { Cyan, White, DeepBlue } from '../utils/colors';

class Quiz extends Component {
  state = {
    index: 0,
    score: 0,
  };

  handleCorrect = () => {
    this.setState((state) => ({
      index: state.index + 1,
      score: state.score + 1,
    }));
  };

  handleIncorrect = () => {
    this.setState((state) => ({
      index: state.index + 1,
      score: state.score,
    }));
  };

  render() {
    const { decks } = this.props;
    const { title } = this.props.route.params;
    const deck = decks[title];
    const questionArray = decks[title].questions;
    const { index, score } = this.state;
    if (questionArray.length === 0) {
      return (
        <QuizScreen>
          <SorryText>
            There is no question in this. {'\n'}Please add a card.
          </SorryText>
        </QuizScreen>
      );
    }

    if (index === deck.questions.length) {
      return (
        <QuizScreen>
          <SorryText>
            {`Finish! Your score is ${score}/${deck.questions.length}`}
          </SorryText>
        </QuizScreen>
      );
    }
    const currentQuiz = deck.questions[index].question;
    const currentAnswer = deck.questions[index].answer;

    return (
      <QuizScreen>
        <Score>{`Score: ${score}`}</Score>
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
        <Buttons>
          <SubmmitBtn onPress={this.handleCorrect}>
            <ButtonText>Correct</ButtonText>
          </SubmmitBtn>
          <SubmmitBtn onPress={this.handleIncorrect}>
            <ButtonText>Incorrect</ButtonText>
          </SubmmitBtn>
        </Buttons>
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
  position: relative;
`;

const Score = styled.Text`
  position: absolute;
  top: 10px;
  right: 15px;
  color: ${White};
  font-weight: 700;
  font-size: 18px;
`;

const QuizCard = styled.View`
  justify-content: space-around;
  align-items: center;
  background-color: ${White};
  width: 100%;
  height: 100%;
  padding: 25px;
`;

const QuizHeader = styled.View`
  align-items: flex-start;
  width: 100%;
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
  min-width: 200px;
`;

const ButtonText = styled.Text`
  color: ${White};
  font-size: 20px;
  font-weight: 700;
`;

const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
  margin-top: 30px;
`;

const SubmmitBtn = styled.TouchableOpacity`
  background-color: ${DeepBlue};
  height: 50px;
  width: 50%;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  border: 5px solid ${Cyan};
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
