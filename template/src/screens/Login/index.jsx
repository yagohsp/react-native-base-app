import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, VStack, Center } from 'native-base';
import EncryptedStorage from 'react-native-encrypted-storage';

import { KeyboardWrapper, TextInput, Button } from 'src/components';
import { signIn } from 'src/services';
import { showError, showSuccess } from 'src/utils';
import { setUser } from 'src/redux';

export default function Login() {
  const { control, handleSubmit, setFocus } = useForm();

  const onSubmit = async data => {
    signIn(data)
      .then(user => {
        EncryptedStorage.setItem('user', JSON.stringify(user)).then(() => {
          EncryptedStorage.getItem('user').then(encryptedUser => {
            setUser({ username: JSON.parse(encryptedUser).username });
            showSuccess('Logado com sucesso');
          });
        });
      })
      .catch(error => showError(JSON.stringify(error)));
  };

  return (
    <KeyboardWrapper>
      <Center w="100%" flex={1}>
        <Box p="4" w="100%" maxW="80">
          <VStack space={3}>
            <TextInput
              control={control}
              name="username"
              label="Usuário"
              onSubmitEditing={() => {
                setFocus('password');
              }}
            />
            <TextInput
              control={control}
              name="password"
              type="password"
              label="Senha"
              onSubmitEditing={handleSubmit(onSubmit)}
            />
            <Button onPress={handleSubmit(onSubmit)}>Entrar</Button>
          </VStack>
        </Box>
      </Center>
    </KeyboardWrapper>
  );
}
