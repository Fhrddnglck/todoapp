import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {Background} from '@Components/index';
import UserService from '@Services/UserService';
import {normalize} from '@Utils/Device';
import RecordService from '@Services/RecordService';
import {useIsFocused} from '@react-navigation/native';

const ProfileScreen: React.FunctionComponent = (): JSX.Element => {
  const [name, setName] = useState('');
  const [total, setTotal] = useState(0);
  const isFocused = useIsFocused();
  useEffect(() => {
    (async () => {
      setName(await UserService.getUserName());
      setTotal(await RecordService.getTotalTodo());
    })();
  }, [isFocused]);
  return (
    <Background>
      <Text
        style={{
          fontSize: normalize(75),
          fontWeight: '100',
          textAlign: 'center',
        }}>
        {name}
      </Text>
      <Text
        style={{
          fontSize: normalize(45),
          fontWeight: '100',
          textAlign: 'center',
        }}>
        Total Todo {total}
      </Text>
    </Background>
  );
};

export default ProfileScreen;
