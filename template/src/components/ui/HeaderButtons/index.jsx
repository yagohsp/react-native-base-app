import { Button, HStack } from 'native-base';
import React, { useEffect } from 'react';
import FontAwesome, { SolidIcons } from 'react-native-fontawesome';

function Buttons({ buttons }) {
  return (
    <HStack>
      {buttons.map(button => (
        <Button key={button.icon} variant="ghost" onPress={button.onPress}>
          <FontAwesome
            icon={SolidIcons[button.icon]}
            style={{ fontSize: 26, color: '#fff' }}
          />
        </Button>
      ))}
    </HStack>
  );
}

export default function HeaderButtons({ navigation, buttons }) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => Buttons({ buttons })
    });
  }, [buttons, navigation]);

  return null;
}
