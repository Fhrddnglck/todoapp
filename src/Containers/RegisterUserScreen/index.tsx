import React, {useState} from 'react';
import {Alert, Image, Text} from 'react-native';
import {BackButton, Background, Button, TextInput} from '@Components/index';
import {normalize} from '@Utils/Device';
import _style from './style';
import {Colors} from '@Theme/index';
import NavigationHelper from '@Plugins/NavigationHelper';
import UserService from '@Services/UserService';

const RegisterUserScreen: React.FunctionComponent = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Background>
      <BackButton />
      <Image
        source={require('../../Assets/create-account.png')}
        resizeMode="contain"
        style={{width: '100%', height: normalize(250)}}
      />
      <Text style={_style.headerText}>CREATE ACCOUNT</Text>
      <Text style={_style.subHeaderText}>Create a new account then enjoy</Text>
      <TextInput onChange={setUserName} placeholder="User Name" />
      <TextInput onChange={setEmail} placeholder="E-Mail" />
      <TextInput
        onChange={setPassword}
        secureTextEntry={true}
        placeholder="Password"
      />
      <Button
        backgroundColor={Colors.secondary}
        title="Create"
        onPress={async () => {
          await UserService.register({email, username, password});
          Alert.alert('Account created has successfully');
          NavigationHelper.back();
        }}
      />
    </Background>
  );
};

export default RegisterUserScreen;
