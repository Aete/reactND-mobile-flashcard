import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import { Navy, Cyan, White } from '../utils/colors';

function Deck({ navigation, route }) {
  const { title, cardNum } = route.params;
  return (
    <DeckScreen>
      <CardTitle>{title}</CardTitle>
      <CardSubTitle>{`Cards: ${cardNum}`}</CardSubTitle>
      <QuizBtn onPress={() => navigation.navigate('Quiz', { title: title })}>
        <BtnText>Quiz</BtnText>
      </QuizBtn>
      <QuizBtn onPress={() => navigation.navigate('Add Card')}>
        <BtnText>Add Question</BtnText>
      </QuizBtn>
      <RemoveBtn>
        <RemoveBtnText>Delete Deck</RemoveBtnText>
      </RemoveBtn>
    </DeckScreen>
  );
}

const DeckScreen = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${Navy};
`;

const CardTitle = styled.Text`
  font-size: 40px;
  font-weight: 700;
  color: ${White};
`;

const CardSubTitle = styled.Text`
  font-size: 20px;
  font-weight: 300;
  color: ${White};
  margin-bottom: 30px;
`;

const QuizBtn = styled.TouchableOpacity`
  height: 50px;
  width: 180px;
  border-radius: 8px;
  background-color: ${Cyan};
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const BtnText = styled.Text`
  color: ${White};
  font-weight: 500;
  font-size: 20px;
`;

const RemoveBtn = styled.TouchableOpacity`
  height: 50px;
  width: 180px;
  border-radius: 8px;
  background-color: ${White};
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const RemoveBtnText = styled.Text`
  color: ${Cyan};
  font-weight: 500;
  font-size: 20px;
`;

export default connect()(Deck);
