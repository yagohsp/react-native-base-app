import { Platform, StatusBar } from 'react-native';
import { Box } from 'native-base';

export default function SafeArea({ children, ...props }) {
  if (Platform.OS === 'ios')
    return (
      <Box {...props} safeArea>
        {children}
      </Box>
    );

  return (
    <Box pt={Math.round(StatusBar.currentHeight)} {...props}>
      {children}
    </Box>
  );
}
