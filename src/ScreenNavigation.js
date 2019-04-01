import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

const homeAction = NavigationActions.navigate({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Screen' }),
  ],
});

class ScreenNavigation extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const screenNumber = navigation.state.params ? navigation.state.params.screenNumber : 0;
    return {
      title: 'Home',
      headerStyle: {
        backgroundColor: 'white',
        height: 85,
      },
      headerTitleStyle: {
        color: 'white'
      },
    };
  };

  nextScreen = () => {
    const screenNumber = this.props.navigation.state.params ? this.props.navigation.state.params.screenNumber : 0;
    const params = {
      screenNumber: screenNumber + 1
    };
    this.props.navigation.navigate('Screen', params);
  };

  homeScreen = () => {
    this.props.navigation.dispatch(homeAction);
  };

  render() {
    const { navigation } = this.props;
    const screenNumber = navigation.state.params ? navigation.state.params.screenNumber : 0;
    return (
      <View style={[styles.container]}>
        <Text style={styles.jumbo}>{screenNumber}</Text>
        <TouchableOpacity onPress={this.nextScreen}>
          <Text style={styles.textButton}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.homeScreen}>
          <Text style={styles.textButton}>Home</Text>
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
    fontSize: 60,
    fontWeight: '300',
    padding: 15,
  },
});
