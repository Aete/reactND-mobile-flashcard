import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import Deck from '../components/Deck';
import AddCard from '../components/AddCard';
import Quiz from '../components/Quiz';

const DeckStack = createStackNavigator();

export default function DeckStackScreen() {
  return (
    <DeckStack.Navigator>
      <DeckStack.Screen
        options={{ headerShown: false }}
        name="Decks"
        component={TabNavigator}
      />
      <DeckStack.Screen name="Deck" component={Deck} />
      <DeckStack.Screen name="Add Card" component={AddCard} />
      <DeckStack.Screen name="Quiz" component={Quiz} />
    </DeckStack.Navigator>
  );
}
