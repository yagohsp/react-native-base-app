import { Toast as NativeBaseToast, Text, Button } from 'native-base';
import React from 'react';

const showToast = (type, message) =>
  NativeBaseToast.show({
    render: () => {
      return (
        <Button
          colorScheme={type === 'success' ? 'emerald' : 'error'}
          py="2"
          px="3"
          rounded="sm"
          onPress={NativeBaseToast.closeAll}
        >
          <Text color="white" fontWeight="medium" fontSize="md">
            {message}
          </Text>
        </Button>
      );
    }
  });

const showSuccess = message => showToast('success', message);
const showError = message => showToast('error', message);

export const Toast = {
  showSuccess,
  showError
};
