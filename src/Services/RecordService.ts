import database from '@react-native-firebase/database';
import UserService from '@Services/UserService';

interface RecordInterface {
  todo?: string;
  id?: string;
}

const RecordService = {
  listById: async () => {
    const list = await database().ref(`${UserService.getuid()}`).once('value');
    const todoList: any[] = [];
    list.forEach((value: {val: () => any; key: () => any}) => {
      todoList.push({id: value.key, todo: value.val().todo});
    });
    return todoList.reverse();
  },
  addById: async (payload: RecordInterface) => {
    const newReference = database().ref(`${UserService.getuid()}`).push();
    await newReference.set({
      todo: payload.todo,
    });
    return newReference.key;
  },
  deleteById: async (id: string) => {
    await database().ref(`${UserService.getuid()}/${id}`).remove();
  },
  updateById: async (payload: RecordInterface) => {
    await database().ref(`${UserService.getuid()}/${payload.id}`).update({
      todo: payload.todo,
    });
  },
  getTotalTodo: async () => {
    const list = await database().ref(`${UserService.getuid()}`).once('value');
    return list.numChildren();
  },
};

export default RecordService;
