import React, { Component } from 'react';
import { LightBlue, White, Cyan } from '../utils/colors';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export default class AddDeck extends Component {
  state = {
    text: '',
  };
  render() {
    return (
      <AddDeckScreen>
        <StatusBar />
        <Square>
          <Title>A new Deck is...</Title>
          <DeckNameInput />
          <AddBtn>
            <BtnText>Add Deck</BtnText>
          </AddBtn>
        </Square>
      </AddDeckScreen>
    );
  }
}

const AddDeckScreen = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Square = styled.View`
  width: 90%;
  height: 250px;
  background-color: ${LightBlue};
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

const DeckNameInput = styled.TextInput`
  font-size: 25px;
  background-color: ${White};
  font-weight: 700;
  width: 80%;
  margin-bottom: 20px;
`;

const AddBtn = styled.TouchableOpacity`
  background-color: ${Cyan};
  width: 80%;
  height: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

const BtnText = styled.Text`
  color: ${White};
  font-weight: 500;
  font-size: 20px;
`;
