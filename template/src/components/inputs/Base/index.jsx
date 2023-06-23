import { Text, TextField, Box, View } from 'native-base';
import { useCallback, useEffect, useState } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

export default function BaseInput({
  label,
  error,
  value,
  onChange,
  ref,
  ...props
}) {
  const [labelOnTop, setLabelOnTop] = useState(false);

  const translateX = useSharedValue(value ? -5 : 0);
  const translateY = useSharedValue(value ? -34 : 0);
  const fontSize = useSharedValue(value ? 15 : 20);
  const labelAnimation = useAnimatedStyle(() => ({
    fontSize: fontSize.value,
    transform: [
      { translateY: translateY.value },
      { translateX: translateX.value }
    ]
  }));

  const animateLabel = useCallback(
    focusing => {
      fontSize.value = withTiming(focusing ? 15 : 20, { duration: 100 });
      translateY.value = withTiming(focusing ? -26 : 0, { duration: 100 });
      translateX.value = withTiming(focusing ? -5 : 0, { duration: 100 });
    },
    [fontSize, translateX, translateY]
  );

  useEffect(() => {
    if (!!value !== labelOnTop) {
      setLabelOnTop(true);
    }
  }, [animateLabel, labelOnTop, value]);

  useEffect(() => {
    animateLabel(!!labelOnTop);
  }, [animateLabel, labelOnTop]);

  return (
    <Box h="54">
      <View pointerEvents="none" zIndex={1}>
        <Animated.Text
          style={[
            labelAnimation,
            {
              position: 'absolute',
              left: 10,
              top: 13,
              color: '#52525b',
              backgroundColor: '#fff',
              zIndex: 1,
              paddingHorizontal: 4,
              borderRadius: 4
            }
          ]}
        >
          {label}
        </Animated.Text>
      </View>
      <TextField
        {...props}
        onFocus={() => setLabelOnTop(true)}
        onEndEditing={() => setLabelOnTop(!!value)}
        _input={{
          height: 50,
          fontSize: 20
        }}
        borderWidth={2}
        borderColor={error ? 'error.500' : 'primary.500'}
        onChangeText={onChange}
        inputRef={ref}
        value={value}
      />
      {error && (
        <Text
          position="absolute"
          fontSize="xs"
          bottom="1"
          right="1.5"
          color="error.500"
        >
          {error.message}
        </Text>
      )}
    </Box>
  );
}
