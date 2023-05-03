import React from 'react';
import { Text, Center } from 'native-base';
import { useSelector } from 'react-redux';
import EncryptedStorage from 'react-native-encrypted-storage';

import { Button } from 'src/components';
import { clearUser } from 'src/redux';

export default function Home() {
  const user = useSelector(state => state.user);

  return (
    <Center flex={1}>
      <Text color="primary.500" fontSize="4xl" textAlign="center">
        Bem vindo {'\n'} {user.username} !!
      </Text>

      <Button
        position="absolute"
        bottom="10"
        onPress={() => {
          clearUser();
          EncryptedStorage.clear();
        }}
      >
        Sair
      </Button>
    </Center>
  );
}
