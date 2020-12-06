import React, { Component } from 'react';
import { View, FlatList, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import { initialData } from '../utils/_DATA';
import { receiveDecks } from '../actions';
import { Navy, White, DeepNavy } from '../utils/colors';

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(receiveDecks(initialData));
  }
  renderItem = ({ item }) => {
    const { navigation, decks } = this.props;
    const cardNum = Object.keys(decks[item].questions).length;
    return (
      <Card
        key={item}
        onPress={() =>
          navigation.navigate('Deck', { title: item, cardNum: cardNum })
        }
      >
        <CardTitle>{item}</CardTitle>
        <CardSubTitle>{`Cards: ${cardNum} `} </CardSubTitle>
      </Card>
    );
  };
  render() {
    const { decks } = this.props;
    return (
      <View>
        <StatusBar backgroundColor={DeepNavy} />
        {decks ? (
          <FlatList data={Object.keys(decks)} renderItem={this.renderItem} />
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    );
  }
}

const Card = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: ${Navy};
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
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
`;

function mapStateToProps({ decks }) {
  console.log(decks);
  return {
    decks,
  };
}

export default connect(mapStateToProps)(DeckList);
