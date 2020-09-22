import React, {useState} from 'react';
import {Image, Text} from 'react-native';
import {Background, Button, TextInput} from '@Components/index';
import {deviceWidth, normalize} from '@Utils/Device';
import _style from './style';
import {Colors} from '@Theme/index';
import NavigationHelper from '@Plugins/NavigationHelper';
import UserService from '@Services/UserService';

const LoginScreen: React.FunctionComponent = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Background>
      <Image
        source={require('../../Assets/login-icon.png')}
        style={{
          width: deviceWidth() / 2,
          height: deviceWidth() / 2,
          marginTop: normalize(36),
        }}
      />
      <Text style={_style.headerText}>FG TODO's</Text>
      <Text style={_style.subHeaderText}>You can save your todo's</Text>
      <TextInput onChange={setEmail} placeholder="E-mail" />
      <TextInput
        onChange={setPassword}
        secureTextEntry={true}
        placeholder="Password"
      />
      <Text
        onPress={() => NavigationHelper.navigate('ForgotPassword')}
        style={{color: Colors.text, marginTop: normalize(8)}}>
        Forgot Password
      </Text>
      <Button
        style={{marginTop: normalize(36)}}
        backgroundColor={Colors.secondary}
        title="LOGIN"
        size="large"
        onPress={async () => {
          const response = await UserService.login({email, password});
          try {
            if (response?.user != undefined) {
              NavigationHelper.navigate('TabBar');
            }
          } catch (e) {}
        }}
      />
      <Button
        style={{marginTop: normalize(36)}}
        backgroundColor={Colors.tertiary}
        title="CREATE"
        size="large"
        onPress={() => NavigationHelper.navigate('Register')}
      />
    </Background>
  );
};

export default LoginScreen;
