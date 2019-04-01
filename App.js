import React from 'react';
import {
  Animated,
  Easing,
} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import ScreenNavigation from './src/ScreenNavigation';

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 400,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const {
        position,
        layout,
        scene,
        index,
        scenes
      } = sceneProps;
      const toIndex = index;
      const thisSceneIndex = scene.index;
      const height = layout.initHeight;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [width, 0, 0]
      });

      const translateY = position.interpolate({
        inputRange: [0, thisSceneIndex],
        outputRange: [height, 0]
      });

      const slideFromRight = {
        transform: [{ translateX }]
      };
      const slideFromBottom = {
        transform: [{ translateY }]
      };

      const lastSceneIndex = scenes[scenes.length - 1].index;

      if (lastSceneIndex - toIndex > 1) {
        // Do not transoform the screen being navigated to
        if (scene.index === toIndex) return
        // Hide all screens in between
        if (scene.index !== lastSceneIndex) return { opacity: 0 }
        // Slide top screen down
        return slideFromBottom
      }

      return slideFromRight;
    },
  };
}

const App = createAppContainer(
  createStackNavigator({
    Screen: {
      screen: ScreenNavigation,
      navigationOptions: ({ navigation }) => ({
        headerTransparent: false,
        headerBackTitle: 'Back',
      }),
    },
    SecondScreen: {
      screen: ScreenNavigation,
      navigationOptions: ({ navigation }) => ({
        headerTransparent: false,
        headerBackTitle: 'Back',
      }),
    },
    transitionConfig,
  })
);

export default App;
