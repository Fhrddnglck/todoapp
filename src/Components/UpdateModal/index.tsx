import React, {useState} from 'react';
import {Text, View, Modal, Alert, Image} from 'react-native';
import _style from './style';
import {Button, TextInput} from '@Components/index';
import {deviceWidth, normalize} from '@Utils/Device';
import RecordService from '@Services/RecordService';
import {Colors} from '@Theme/index';

interface ButtonProps {
  id: string;
  todo: string;
  visible: boolean;
  trigger: (id: string, todo: string) => void;
}

const UpdateModal: React.FunctionComponent<ButtonProps> = ({
  id,
  visible,
  trigger,
  todo,
}): JSX.Element => {
  const [text, setText] = useState(todo);

  const onTrigger = (id: string, todo: string) => {
    trigger(id, todo);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={_style.centeredView}>
        <Image
          source={require('../../Assets/update.png')}
          style={{
            width: deviceWidth() / 1.5,
            height: deviceWidth() / 1.5,
            marginTop: normalize(16),
          }}
        />
        <Text style={_style.modalText}>Old - {todo}</Text>
        <TextInput size="large" onChange={setText} placeholder={todo} />
        <Button
          title="Change"
          backgroundColor={Colors.tertiary}
          onPress={async () => {
            await RecordService.updateById({id: id, todo: text});
            onTrigger(id, text);
          }}
        />
      </View>
    </Modal>
  );
};

export default UpdateModal;
