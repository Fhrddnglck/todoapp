import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import _style from './style';

interface ButtonProps {
  title: string;
  backgroundColor?: string;
  titleColor?: string;
  size?: 'small' | 'large' | 'medium' | 'xSmall';
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
}

const Button: React.FunctionComponent<ButtonProps> = ({
  title,
  size = 'medium',
  onPress,
  backgroundColor = 'red',
  titleColor = 'white',
  style = {},
}): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[_style[size], _style.button, style, {backgroundColor}]}>
      <Text style={{color: titleColor, fontSize: 25, fontWeight: 'bold'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
