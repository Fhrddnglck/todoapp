import {StyleSheet, TextStyle} from 'react-native';
import {normalize} from '@Utils/Device';

interface StyleProps {
  headerText: TextStyle;
  subHeaderText: TextStyle;
}

export default StyleSheet.create<StyleProps>({
  headerText: {
    fontSize: normalize(25),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: normalize(16),
    fontWeight: '100',
  },
});
