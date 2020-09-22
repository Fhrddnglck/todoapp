import React, {useState} from 'react';
import {TextInput as NativeTextInput, ViewStyle} from 'react-native';
import {normalize} from '@Utils/Device';
import _style from './style';
import {Colors} from '@Theme/index';
interface TextInputProps {
  placeholder?: string;
  borderColor?: string;
  size?: 'small' | 'medium' | 'large';
  secureTextEntry?: boolean;
  onChange(value: string): void;
  style?: ViewStyle | ViewStyle[];
}

const TextInput: React.FunctionComponent<TextInputProps> = ({
  placeholder,
  borderColor = Colors.tertiary,
  style = {},
  size = 'medium',
  secureTextEntry = false,
  onChange,
}): JSX.Element => {
  const [borderBottomColor, setBorderBottomColor] = useState(borderColor);
  return (
    <NativeTextInput
      onChangeText={onChange}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      onBlur={() => setBorderBottomColor(Colors.tertiary)}
      onFocus={() => setBorderBottomColor(Colors.secondary)}
      style={[
        style,
        _style[size],
        {
          height: normalize(36),
          borderBottomWidth: 1,
          borderColor: borderBottomColor,
        },
      ]}
    />
  );
};

export default TextInput;
