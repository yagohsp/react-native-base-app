import React, { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Divider, FlatList, Modal, Text, VStack } from 'native-base';
import { useController } from 'react-hook-form';

import { SafeArea, BaseInput, KeyboardWrapper, Button } from 'src/components';

function RenderItem({ onSelectItem, item }) {
  return (
    <TouchableOpacity key={item.value} onPress={() => onSelectItem(item)}>
      <Box bg="dark.700" p="4">
        <Text fontSize="xl">{item.label}</Text>
      </Box>
    </TouchableOpacity>
  );
}

const SelectInput = React.forwardRef(function Select(
  { name, control, disabled, options, ...props },
  ref
) {
  const {
    field: { onChange, ...field },
    fieldState
  } = useController({
    name,
    control,
    rules: { required: 'Campo necessário' }
  });

  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState('');
  const [currentSearch, setCurrentSearch] = useState('');

  const onSelectItem = useCallback(
    selectedItem => {
      onChange(selectedItem);
      setShowModal(false);
    },
    [onChange]
  );

  useEffect(() => {
    const timeOutId = setTimeout(() => setCurrentSearch(search), 100);
    return () => clearTimeout(timeOutId);
  }, [search]);

  return (
    <Box>
      {showModal && (
        <Modal defaultIsOpen>
          <SafeArea w="full">
            <KeyboardWrapper>
              <VStack h="full" space="2" p="4">
                <Box bg="white" mt="2" rounded="sm">
                  <BaseInput
                    label="Pesquisar"
                    onChange={setSearch}
                    value={search}
                  />
                </Box>

                <Box
                  flex="1"
                  bg="white"
                  rounded="sm"
                  overflow="hidden"
                  borderColor="primary.500"
                  borderWidth={1}
                >
                  <FlatList
                    ItemSeparatorComponent={
                      <Divider
                        my="1"
                        w="95%"
                        mx="auto"
                        thickness={2}
                        bg="primary.300"
                      />
                    }
                    data={options.filter(item =>
                      JSON.stringify(item).includes(currentSearch)
                    )}
                    renderItem={({ item }) =>
                      RenderItem({ item, onSelectItem, ...props })
                    }
                  />
                </Box>
                <Button colorScheme="gray" onPress={() => setShowModal(false)}>
                  Cancelar
                </Button>
              </VStack>
            </KeyboardWrapper>
          </SafeArea>
        </Modal>
      )}
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.5}
        onPress={() => setShowModal(true)}
      >
        <BaseInput
          isReadOnly
          {...field}
          {...fieldState}
          {...props}
          ref={ref}
          value={field.value?.label}
        />
      </TouchableOpacity>
    </Box>
  );
});

export default SelectInput;
