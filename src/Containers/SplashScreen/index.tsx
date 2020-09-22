import React, {useEffect} from 'react';
import {Text, Animated} from 'react-native';
import NavigationHelper from '@Plugins/NavigationHelper';
import {Background} from '@Components/index';
import {Colors, Helpers} from '@Theme/index';
import {deviceWidth, normalize} from '@Utils/Device';

const SplashScreen: React.FunctionComponent = (): JSX.Element => {
  useEffect(() => {
    setTimeout(async () => {
      NavigationHelper.navigate('Login');
    }, 3500);
  }, []);
  const translateX = new Animated.Value(0);

  Animated.loop(
    Animated.sequence([
      Animated.timing(translateX, {
        toValue: -50,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: 45,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]),
  ).start();

  return (
    <Background style={[Helpers.center, {backgroundColor: Colors.secondary}]}>
      <Animated.View
        style={{
          transform: [{translateX: translateX}],
          width: deviceWidth() / 3,
          height: 16,
          backgroundColor: Colors.tertiary,
          shadowColor: Colors.tertiary,
          borderRadius: 16,
          shadowOffset: {
            width: 5,
            height: 6,
          },
          shadowOpacity: 0.6,
          shadowRadius: 16,
          elevation: 16,
        }}
      />
      <Text
        style={{
          color: Colors.primary,
          fontSize: normalize(64),
          fontWeight: 'bold',
        }}>
        TODO
      </Text>
    </Background>
  );
};

export default SplashScreen;
