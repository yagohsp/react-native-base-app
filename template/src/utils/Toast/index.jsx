import { Toast as NativeBaseToast, Box, Text } from 'native-base';
import React from 'react';

const showToast = (type, message) =>
  NativeBaseToast.show({
    render: () => {
      return (
        <Box
          bg={type === 'success' ? 'emerald.600' : 'error.500'}
          py="2"
          px="3"
          rounded="sm"
        >
          <Text color="white" fontWeight="medium" fontSize="md">
            {message}
          </Text>
        </Box>
      );
    }
  });

export const showSuccess = message => showToast('success', message);
export const showError = message => showToast('error', message);
