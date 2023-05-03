import { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import EncryptedStorage from 'react-native-encrypted-storage';

import { Center, Spinner } from 'native-base';
import { setUser } from 'src/redux';
import publicRoutes from './publicRoutes';
import privateRoutes from './privateRoutes';

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: '#33a88d'
  },
  headerTitleStyle: {
    color: '#fff'
  },
  animationEnabled: false,
  headerTintColor: '#fff',
  headerBackTitle: 'Voltar',
  headerMode: 'float',
  cardStyle: {
    backgroundColor: '#fff'
  }
};

export default function Routes() {
  const user = useSelector(state => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('reload');
    EncryptedStorage.getItem('user')
      .then(encryptedUser => {
        setUser(JSON.parse(encryptedUser)?.username);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Center flex={1} bg="white">
        <Spinner size="lg" />
      </Center>
    );
  }

  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
      {(Object.values(user).length ? privateRoutes : publicRoutes).map(
        route => (
          <Stack.Screen key={route.name} {...route} />
        )
      )}
    </Stack.Navigator>
  );
}
