import React, { Component } from 'react';
import { View, FlatList, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import { _getInitialData } from '../utils/api';
import { receiveDecks } from '../actions';
import { Navy, White, DeepNavy } from '../utils/colors';

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    _getInitialData().then((response) => dispatch(receiveDecks(response)));
  }
  renderItem = ({ item }) => {
    const { navigation, decks } = this.props;
    const cardNum = decks[item].questions ? decks[item].questions.length : 0;
    return (
      <Card onPress={() => navigation.navigate('Deck', { title: item })}>
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
          <FlatList
            data={Object.keys(decks)}
            renderItem={this.renderItem}
            extraData={decks}
            keyExtractor={(item, index) => item}
          />
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
  return {
    decks,
  };
}

export default connect(mapStateToProps)(DeckList);
