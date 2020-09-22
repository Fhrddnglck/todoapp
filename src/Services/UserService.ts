import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import database from '@react-native-firebase/database';

interface UserInterface {
  email: string;
  password?: string | any;
  username?: string;
}

const UserService = {
  register: async (payload: UserInterface) => {
    try {
      const response = await auth().createUserWithEmailAndPassword(
        payload.email,
        payload.password,
      );

      await database()
        .ref(`/users/${response.user.uid}`)
        .push({name: payload.username});
      return response;
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        Alert.alert('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        Alert.alert('That email address is invalid!');
      }
    }
  },
  login: async (payload: UserInterface) => {
    try {
      const response = await auth().signInWithEmailAndPassword(
        payload.email,
        payload.password,
      );
      return response;
    } catch (error) {
      Alert.alert('Could not login.');
    }
  },
  resetPassword: async (payload: UserInterface) => {
    try {
      const response = await auth().sendPasswordResetEmail(payload.email);
      return response;
    } catch (error) {
      Alert.alert('Something went wrong');
    }
  },
  getuid() {
    return auth().currentUser?.uid;
  },
  getUserName: async () => {
    const response = await database()
      .ref(`/users/${UserService.getuid()}`)
      .once('value');
    let name = '';
    response.forEach((value: {val: () => any}) => {
      name = value.val().name;
    });
    return name;
  },
};

export default UserService;
