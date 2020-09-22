import {ViewStyle, StyleSheet} from 'react-native';
import {deviceHeight, normalize} from '@Utils/Device';
import {Colors, Helpers} from '@Theme/index';

interface StyleProps {
  centeredView: ViewStyle;
  modalView: ViewStyle;
  openButton: ViewStyle;
  textStyle: ViewStyle;
  modalText: ViewStyle;
}

export default StyleSheet.create<StyleProps>({
  centeredView: {
    ...Helpers.center,
    ...Helpers.selfCenter,
    width: '100%',
    height: deviceHeight(),
    backgroundColor: Colors.primary,
  },
  modalView: {
    backgroundColor: 'red',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    marginTop: normalize(36),
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: normalize(10),
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: normalize(15),
    textAlign: 'center',
  },
});
