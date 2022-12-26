import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  p: '4',
  size: ['xl', '4xl'],
  userSelect: 'none',
  textTransform: 'uppercase',
  transform: 'translate(-50%, -50%)',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={['container.xl']} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          w={'fit-content'}
          m={'auto'}
          py={'2'}
          borderBottom={'2px solid'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={['1', '4']}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quis
            sint quae iure ducimus dolores veritatis iste totam, officiis quam
            odit. Natus harum error maiores alias debitis soluta quod laborum.
            Ut libero, architecto voluptate magnam eveniet vitae recusandae hic
            vel saepe, accusantium deserunt enim similique earum voluptatem
            laudantium consectetur temporibus! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Minima, itaque sint exercitationem
            eaque id fuga perferendis reprehenderit nam sed corrupti optio
            necessitatibus aspernatur vel similique tempora delectus nisi
            dolorum mollitia!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading color={'white'} bgColor={'blackAlpha.600'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading color={'black'} bgColor={'whiteAlpha.600'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading color={'black'} bgColor={'whiteAlpha.600'} {...headingOptions}>
        Game on Consol
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading color={'black'} bgColor={'whiteAlpha.600'} {...headingOptions}>
        Night Life is Cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
