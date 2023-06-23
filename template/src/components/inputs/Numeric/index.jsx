import React from 'react';
import { useController } from 'react-hook-form';
import BaseInput from '../Base';

const NumericInput = React.forwardRef(function Numeric(
  { name, control, ...props },
  ref
) {
  const { field, fieldState } = useController({
    name,
    control,
    rules: { required: 'Campo necessário' }
  });

  return (
    <BaseInput
      {...field}
      {...fieldState}
      {...props}
      keyboardType="number-pad"
      onChange={newValue => field.onChange(newValue.replace(/[^0-9]/g, ''))}
      ref={ref}
    />
  );
});

export default NumericInput;
