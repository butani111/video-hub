import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container w={['full', 'container.xl']} h="100vh" p={'16'}>
      <VStack color={'purple.500'} h="full" justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />

        <form>
          <HStack>
            <Input
              type={'file'}
              required
              css={{
                '&::file-selector-button': {
                  width: 'calc(100% + 36px)',
                  height: '100%',
                  color: 'purple',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: 'white',
                },
              }}
            />
            <Button type={'submit'} colorScheme={'purple'}>
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
