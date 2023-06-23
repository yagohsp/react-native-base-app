import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import { useController } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';

import { dateHandler } from 'src/utils';
import BaseInput from '../Base';

const DatePicker = React.forwardRef(function Picker(
  { name, control, disabled, defaultValue = '', ...props },
  ref
) {
  const {
    field: { value, onChange, ...field },
    fieldState
  } = useController({
    name,
    control,
    rules: { required: 'Campo necessário' },
    defaultValue
  });

  const [showPicker, setShowPicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    setShowPicker(false);
    onChange(dateHandler.dateToString(selectedDate));
  };

  return (
    <Box>
      {showPicker && (
        <DateTimePicker
          value={dateHandler.stringToDate(value)}
          mode="date"
          is24Hour
          onChange={onChangeDate}
        />
      )}
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.5}
        onPress={() => setShowPicker(true)}
      >
        <BaseInput
          value={value}
          isReadOnly
          {...field}
          {...fieldState}
          {...props}
          ref={ref}
        />
      </TouchableOpacity>
    </Box>
  );
});

export default DatePicker;
