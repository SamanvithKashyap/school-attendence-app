import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AppHeader from './components/AppHeader';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {Header} from 'react-native-elements';
export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header
        backgroundColor={'#9cB218'}
          centerComponent={{
            text: 'School Attendence',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <AppContainer />
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SummaryScreen: SummaryScreen,
});

const AppContainer = createAppContainer(AppNavigator);
