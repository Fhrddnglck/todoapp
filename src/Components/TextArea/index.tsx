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
  style?: ViewStyle | ViewStyle[];
}

const TextArea: React.FunctionComponent<TextInputProps> = ({
  placeholder,
  borderColor = Colors.tertiary,
  style = {},
  size = 'medium',
  secureTextEntry = false,
}): JSX.Element => {
  const [borderColorArea, setBorderColorArea] = useState(borderColor);
  return (
    <NativeTextInput
      multiline={true}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      onBlur={() => setBorderColorArea(Colors.tertiary)}
      onFocus={() => setBorderColorArea(Colors.secondary)}
      style={[
        style,
        _style[size],
        {
          height: normalize(100),
          backgroundColor: '#ebd9d8',
          borderRadius: 16,
          padding: normalize(16),
          borderWidth: 1,
          borderColor: borderColorArea,
        },
      ]}
    />
  );
};

export default TextArea;
