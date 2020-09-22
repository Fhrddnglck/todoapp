import React, {useState} from 'react';
import {Alert, Image, Text} from 'react-native';
import {BackButton, Background, Button, TextInput} from '@Components/index';
import {normalize} from '@Utils/Device';
import _style from './style';
import {Colors} from '@Theme/index';
import NavigationHelper from '@Plugins/NavigationHelper';
import UserService from '@Services/UserService';

const ForgotPasswordScreen: React.FunctionComponent = (): JSX.Element => {
  const [email, setEmail] = useState('');
  return (
    <Background>
      <BackButton />
      <Image
        source={require('../../Assets/forgot-password-icon.png')}
        resizeMode="contain"
        style={{width: '100%', height: normalize(250)}}
      />
      <Text style={_style.headerText}>CHANGE YOUR PASSWORD</Text>
      <Text style={_style.subHeaderText}>
        Input e-mail and check your mailbox{' '}
      </Text>
      <TextInput onChange={setEmail} placeholder="E-Mail" />
      <Button
        backgroundColor={Colors.secondary}
        title="Send"
        onPress={async () => {
          await UserService.resetPassword({email});
          Alert.alert('Please check your mailbox');
          NavigationHelper.back();
        }}
      />
    </Background>
  );
};

export default ForgotPasswordScreen;
