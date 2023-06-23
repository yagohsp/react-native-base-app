import React from 'react';
import { useController } from 'react-hook-form';
import BaseInput from '../Base';

const TextInput = React.forwardRef(function Text(
  { name, control, ...props },
  ref
) {
  const { field, fieldState } = useController({
    name,
    control,
    rules: { required: 'Campo necessário' }
  });

  return <BaseInput {...field} {...fieldState} {...props} ref={ref} />;
});

export default TextInput;
