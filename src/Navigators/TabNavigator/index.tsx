import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfileScreen, TodoScreen} from '@Containers/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '@Theme/index';
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.tertiary,
        inactiveTintColor: 'grey',
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Todo') {
            iconName = 'chess-queen';
          } else if (route.name === 'Profile') {
            iconName = 'face-profile';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      initialRouteName="Todo">
      <Tab.Screen name="Todo" component={TodoScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
