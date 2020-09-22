import {ViewStyle, StyleSheet} from 'react-native';
import {normalize} from '@Utils/Device';
import {Helpers, Spacing} from '@Theme/index';

interface StyleProps {
  button: ViewStyle;
  small: ViewStyle;
  medium: ViewStyle;
  large: ViewStyle;
  xSmall: ViewStyle;
}

export default StyleSheet.create<StyleProps>({
  button: {
    backgroundColor: 'red',
    height: normalize(50),
    borderRadius: 30,
    ...Helpers.center,
    ...Spacing.margin1,
    shadowColor: 'rgba(3, 2, 0, .5)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 9.51,
    elevation: 15,
  },
  xSmall: {
    width: '15%',
  },
  small: {
    width: '35%',
  },
  large: {
    width: '60%',
  },
  medium: {
    width: '50%',
  },
});
