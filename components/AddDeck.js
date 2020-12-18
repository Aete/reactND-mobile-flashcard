import React, { Component } from 'react';
import { StatusBar, Alert } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import { handleAddDeck } from '../actions';
import { LightBlue, White, Cyan } from '../utils/colors';

class AddDeck extends Component {
  state = {
    text: '',
  };
  createAlert = () =>
    Alert.alert(
      'Error',
      Object.keys(this.props.decks).includes(this.state.text)
        ? 'This deck is already existed.'
        : 'Please check the title',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  handleText = (text) => {
    this.setState({
      text,
    });
  };
  handleSubmit = () => {
    const { text } = this.state;
    const { dispatch, navigation, decks } = this.props;
    if (text === '') {
      this.createAlert();
    } else if (Object.keys(decks).includes(this.state.text)) {
      this.createAlert();
    } else {
      dispatch(handleAddDeck(text));
      this.setState({
        text: '',
      });
      navigation.navigate('Decks');
    }
  };
  render() {
    return (
      <AddDeckScreen>
        <StatusBar />
        <Square>
          <Title>A new Deck is...</Title>
          <DeckNameInput
            onChangeText={(text) => this.handleText(text)}
            value={this.state.text}
          />
          <AddBtn onPress={this.handleSubmit}>
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

function mapStateToProps({ decks }) {
  return { decks };
}

export default connect(mapStateToProps)(AddDeck);
