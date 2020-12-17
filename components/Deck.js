import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import { removeDeck } from '../actions';
import { Navy, Cyan, White } from '../utils/colors';

class Deck extends Component {
  handleRemove = () => {
    const { navigation, dispatch, route } = this.props;
    const deckID = route.params.title;
    navigation.navigate('Decks');
    dispatch(removeDeck(deckID));
  };
  render() {
    const { navigation, route, decks } = this.props;
    const { title } = route.params;
    const cardNum = decks[title].questions.length;

    return (
      <DeckScreen>
        <CardTitle>{title}</CardTitle>
        <CardSubTitle>{`Cards: ${cardNum}`}</CardSubTitle>
        <QuizBtn
          onPress={() =>
            navigation.navigate('Quiz', { title: title, cardIndex: 0 })
          }
        >
          <BtnText>Quiz</BtnText>
        </QuizBtn>
        <QuizBtn
          onPress={() => navigation.navigate('Add Card', { deckID: title })}
        >
          <BtnText>Add Question</BtnText>
        </QuizBtn>
        <RemoveBtn>
          <RemoveBtnText onPress={this.handleRemove}>Delete Deck</RemoveBtnText>
        </RemoveBtn>
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

function mapStateToProps({ decks }) {
  return { decks };
}

export default connect(mapStateToProps)(Deck);
