import React from 'react';
import { Button as NativeButton } from 'native-base';

export default function Button({
  children,
  colorScheme = 'primary',
  ...props
}) {
  return (
    <NativeButton
      colorScheme={colorScheme}
      height={50}
      _text={{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 'xl'
      }}
      _loading={{
        opacity: 0.8
      }}
      {...props}
    >
      {children}
    </NativeButton>
  );
}
