import {ViewStyle, StyleSheet} from 'react-native';
import {Colors, Helpers, Spacing} from '@Theme/index';

interface StyleProps {
  container: ViewStyle;
  small: ViewStyle;
  medium: ViewStyle;
  large: ViewStyle;
}

export default StyleSheet.create<StyleProps>({
  container: {
    width: '70%',
    alignSelf: 'center',
    backgroundColor: Colors.secondary,
    borderRadius: 12,
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
