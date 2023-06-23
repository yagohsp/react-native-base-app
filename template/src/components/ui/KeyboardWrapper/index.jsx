import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import React from 'react';

export default function KeyboardWrapper({ children, ...props }) {
  return (
    <TouchableWithoutFeedback {...props} onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
}
