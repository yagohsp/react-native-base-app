import { Toast as NativeBaseToast, Spinner, Modal, Box } from 'native-base';

import { Button } from 'src/components';

const show = onCancel =>
  NativeBaseToast.show({
    render: () => {
      return (
        <Modal isOpen size="full">
          <Box bg="black" opacity={0.3} h="full" w="full" position="absolute" />
          <Spinner
            mt="20"
            size="lg"
            style={{ transform: [{ scale: 1.5 }] }}
            color="primary.400"
          />
          {onCancel && (
            <Button
              mt="20"
              colorScheme="gray"
              onPress={() => {
                onCancel();
                NativeBaseToast.close('loading-toast');
              }}
            >
              Cancelar
            </Button>
          )}
        </Modal>
      );
    },
    duration: null,
    id: 'loading-toast'
  });

const hide = () => NativeBaseToast.close('loading-toast');

export const Loader = {
  hide,
  show
};
