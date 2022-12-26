import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack w={'full'} alignItems={'stretch'} px={'4'}>
          <Heading
            textTransform={'uppercase'}
            size={'md'}
            textAlign={['center', 'left']}
          >
            Subscribe to get updates
          </Heading>

          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder={'Enter Your Email here...'}
              border={'none'}
              outline={'none'}
              borderRadius={'none'}
              focusBorderColor={'none'}
            />

            <Button
              p={'0'}
              variant={'ghost'}
              colorScheme={'purple'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} alignItems={'center'}>
            Video Hub
          </Heading>
          <Text>All rights reserved</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading textTransform={'uppercase'} size={'md'}>
            Social Media
          </Heading>

          <Button variant={'link'} colorScheme={'white'}>
            <a
              href="https://linkedin.com/in/shyam-butani"
              target={'_blank'}
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a
              href="https://github.com/butani111"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
