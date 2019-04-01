import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

const homeAction = NavigationActions.navigate({
  routeName: 'Screen',
  index: 0,
});

const secondAction = NavigationActions.navigate({
  routeName: 'SecondScreen',
  index: 0,
});

class ScreenNavigation extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.routeName}`,
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTitleStyle: {
        color: 'black'
      },
    };
  };

  homeScreen = () => {
    this.props.navigation.dispatch(homeAction);
  };

  secondScreen = () => {
    this.props.navigation.dispatch(secondAction);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={[styles.container]}>
        <Text style={styles.jumbo}>{navigation.state.routeName}</Text>
        <TouchableOpacity onPress={this.homeScreen}>
          <Text style={styles.textButton}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.secondScreen}>
          <Text style={styles.textButton}>Second Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ScreenNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textButton: {
    fontSize: 30,
    fontWeight: '300',
    padding: 15,
  },
  jumbo: {
    fontSize: 45,
    fontWeight: '300',
    padding: 15,
  },
});
