import {StyleSheet, TextStyle} from 'react-native';
import {normalize} from '@Utils/Device';
import {Colors} from '@Theme/index';

interface StyleProps {
  headerText: TextStyle;
  subHeaderText: TextStyle;
}

export default StyleSheet.create<StyleProps>({
  headerText: {
    fontSize: normalize(25),
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.text,
  },
  subHeaderText: {
    fontSize: normalize(16),
    fontWeight: '100',
  },
});
