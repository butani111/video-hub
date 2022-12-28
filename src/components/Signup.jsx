import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          w={['full', '96']}
          m="auto"
          my={'16'}
          spacing={'8'}
          alignItems={'stretch'}
        >
          <Heading textAlign={'center'}>VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />

          <Input
            type={'text'}
            placeholder={'Name'}
            borderColor={'gray.500'}
            focusBorderColor={'purple.500'}
            required
          />
          <Input
            type={'email'}
            placeholder={'Email'}
            borderColor={'gray.500'}
            focusBorderColor={'purple.500'}
            required
          />
          <Input
            type={'password'}
            placeholder={'Password'}
            borderColor={'gray.500'}
            focusBorderColor={'purple.500'}
            required
          />

          <Button colorScheme={'purple'} type={'submit'}>
            Sign Up
          </Button>

          <Text textAlign={'right'}>
            Already have an account?{' '}
            <Button
              variant={'link'}
              alignSelf={'flex-end'}
              colorScheme={'purple'}
            >
              <Link to={'/login'}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
