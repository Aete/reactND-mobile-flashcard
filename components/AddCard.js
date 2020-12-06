import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { Navy, Cyan, White } from '../utils/colors';

class AddCard extends Component {
  handleQuestion = (text) => {
    this.setState({
      text,
    });
  };

  render() {
    return (
      <DeckScreen>
        <Square>
          <Title>A new Question is...</Title>
          <QuestionInput onChangeText={(text) => this.handleQuestion(text)} />
          <Title>An Answer is...</Title>
          <QuestionInput onChangeText={(text) => this.handleQuestion(text)} />
          <AddBtn onPress={this.handleSubmit}>
            <BtnText>Add Card</BtnText>
          </AddBtn>
        </Square>
      </DeckScreen>
    );
  }
}

const DeckScreen = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${Navy};
`;

const Square = styled.View`
  width: 90%;
  height: 400px;
  background-color: ${Cyan};
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 25px;
  color: ${White};
  font-weight: 500;
  width: 80%;
  margin-bottom: 20px;
`;

const QuestionInput = styled.TextInput`
  font-size: 25px;
  background-color: ${White};
  font-weight: 700;
  width: 80%;
  margin-bottom: 20px;
`;

const AddBtn = styled.TouchableOpacity`
  background-color: ${White};
  width: 80%;
  height: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

const BtnText = styled.Text`
  color: ${Cyan};
  font-weight: 500;
  font-size: 20px;
`;

export default connect()(AddCard);
