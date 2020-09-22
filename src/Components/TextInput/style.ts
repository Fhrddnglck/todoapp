import {ViewStyle, StyleSheet} from 'react-native';
import {normalize} from '@Utils/Device';
import {Helpers, Spacing} from '@Theme/index';

interface StyleProps {
  small: ViewStyle;
  medium: ViewStyle;
  large: ViewStyle;
}

export default StyleSheet.create<StyleProps>({
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
