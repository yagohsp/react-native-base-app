import React from 'react';
import { Button as NativeButton } from 'native-base';

export default function Button({ children, ...props }) {
  return (
    <NativeButton
      colorScheme="primary"
      _text={{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 'xl'
      }}
      {...props}
    >
      {children}
    </NativeButton>
  );
}
