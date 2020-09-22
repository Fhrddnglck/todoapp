import {ViewStyle, StyleSheet} from 'react-native';

interface StyleProps {
  small: ViewStyle;
  medium: ViewStyle;
  large: ViewStyle;
}

export default StyleSheet.create<StyleProps>({
  small: {
    width: '50%',
  },
  large: {
    width: '70%',
  },
  medium: {
    width: '90%',
  },
});
