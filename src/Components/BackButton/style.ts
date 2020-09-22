import {FlexStyle, StyleSheet} from 'react-native';
import {normalize} from '@Utils/Device';
import {Helpers, Spacing} from '@Theme/index';

interface Styles {
  container: FlexStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    width: normalize(30),
    height: normalize(30),
    ...Spacing.marginLeft1,
    ...Spacing.marginTop3,
    ...Helpers.center,
    ...Helpers.maxZIndex,
  },
});
