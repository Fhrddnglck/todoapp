import React from 'react';
import {View, Text, ViewStyle, TouchableOpacity} from 'react-native';
import _style from './style';
import {normalize} from '@Utils/Device';
import {Colors, Helpers} from '@Theme/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
interface CardItemProps {
  id: string;
  toDo: string;
  onLongPress: () => void;
  editCard: () => void;
  style?: ViewStyle | ViewStyle[];
}

const CardItem: React.FunctionComponent<CardItemProps> = ({
  toDo,
  id,
  style = {},
  onLongPress,
  editCard,
}): JSX.Element => {
  return (
    <View style={[Helpers.center, {flexDirection: 'row'}]}>
      <TouchableOpacity
        onLongPress={onLongPress}
        onPress={() => console.log(id)}
        style={[_style.container, style]}>
        <Text
          style={{
            fontSize: normalize(12),
            fontWeight: 'bold',
            color: Colors.primary,
          }}>
          {toDo}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={editCard}>
        <Icon
          color={Colors.secondary}
          name={'circle-edit-outline'}
          size={normalize(15)}
        />
        <Text style={{color: Colors.secondary}}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardItem;
