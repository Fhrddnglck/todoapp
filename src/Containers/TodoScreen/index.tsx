import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Image, View, Text} from 'react-native';
import {
  Background,
  Button,
  CardItem,
  TextInput,
  UpdateModal,
} from '@Components/index';
import {Colors, Helpers} from '@Theme/index';
import {deviceHeight, normalize} from '@Utils/Device';
import RecordService from '@Services/RecordService';

const TodoScreen: React.FunctionComponent = (): JSX.Element => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');
  const [visible, setVisible] = useState(false);
  const [chosenId, setChosenId] = useState('');
  const [chosenTodo, setChosenTodo] = useState('');

  useEffect(() => {
    (async () => {
      const response = await RecordService.listById();
      // @ts-ignore
      setTodoList(response);
    })();
  }, [setTodoList]);

  const _renderItem = ({item}: any) => (
    <CardItem
      editCard={() => trigger(item.id, item.todo)}
      onLongPress={async () => {
        await RecordService.deleteById(item.id);
        setTodoList(
          todoList.filter((value: {id: string}) => value.id != item.id),
        );
        Alert.alert('Delete with successfully');
      }}
      id={item.id}
      toDo={item.todo}
    />
  );

  const trigger = (id: string, todo: string) => {
    setChosenId(id);
    setChosenTodo(todo);
    const newValue = {id: id, todo: todo};
    const index = todoList.findIndex((value: {id: string}) => value.id == id);
    // @ts-ignore
    todoList[index] = newValue;
    setVisible(!visible);
  };

  return (
    <Background>
      <View
        style={[
          Helpers.fullWidth,
          Helpers.center,
          {
            backgroundColor: Colors.tertiary,
            position: 'absolute',
            height: normalize(380),
            borderBottomEndRadius: 15,
            borderBottomStartRadius: 15,
          },
        ]}>
        <UpdateModal
          id={chosenId}
          todo={chosenTodo}
          trigger={trigger}
          visible={visible}
        />
        <Image
          source={require('../../Assets/new-todo-icon.png')}
          style={{width: '100%', height: normalize(275)}}
        />
        <TextInput
          onChange={setTodo}
          borderColor="black"
          size="large"
          placeholder="Enter new todo task"
        />
        <Button
          size="xSmall"
          titleColor="black"
          backgroundColor={Colors.primary}
          title="+"
          onPress={async () => {
            const id = await RecordService.addById({todo});
            // @ts-ignore
            setTodoList((prevState) => [{todo: todo, id: id}, ...prevState]);
          }}
        />
      </View>
      <View
        style={[
          Helpers.fullWidth,
          {
            shadowColor: 'black',
            shadowOffset: {
              height: -5,
              width: 3,
            },
            shadowRadius: 16,
            shadowOpacity: 0.6,
            elevation: 16,
            backgroundColor: Colors.primary,
            marginTop: 'auto',
            height: deviceHeight() / 3,
          },
        ]}>
        <Text style={[Helpers.selfCenter, {color: Colors.text}]}>
          If you want delete a item, you can long press.{' '}
        </Text>
        <FlatList
          data={todoList}
          renderItem={_renderItem}
          keyExtractor={(item: {id: any; todo: any}) => item.id}
        />
      </View>
    </Background>
  );
};

export default TodoScreen;
