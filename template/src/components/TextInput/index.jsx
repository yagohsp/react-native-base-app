import { useController } from 'react-hook-form';
import { Text, TextField, View } from 'native-base';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

export default function TextInput({ control, name, label, ...props }) {
  const {
    field,
    fieldState: { error }
  } = useController({
    name,
    control,
    rules: { required: 'Campo necessário' }
  });

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const fontSize = useSharedValue(20);
  const labelAnimation = useAnimatedStyle(() => ({
    fontSize: fontSize.value,
    transform: [
      { translateY: translateY.value },
      { translateX: translateX.value }
    ]
  }));

  const animateLabel = focusing => {
    fontSize.value = withTiming(focusing ? 15 : 20, { duration: 100 });
    translateY.value = withTiming(focusing ? -34 : 0, { duration: 100 });
    translateX.value = withTiming(focusing ? -5 : 0, { duration: 100 });
  };

  return (
    <View>
      <Animated.Text
        style={[
          labelAnimation,
          {
            position: 'absolute',
            left: 10,
            top: 13,
            color: '#52525b'
          }
        ]}
      >
        {label}
      </Animated.Text>
      <TextField
        onChangeText={field.onChange}
        inputRef={field.ref}
        onFocus={() => animateLabel(true)}
        onEndEditing={() => animateLabel(field.value)}
        _input={{
          height: 50,
          fontSize: 20
        }}
        borderWidth={2}
        borderColor={error ? 'error.500' : 'primary.500'}
        {...field}
        {...props}
      />
      {error && (
        <Text position="absolute" bottom="0.5" left="0.5" color="error.500">
          {error.message}
        </Text>
      )}
    </View>
  );
}
