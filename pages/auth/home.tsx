import React from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../../components/navbar/navbar";
import blocksolutionslogo from "../../img/blocksolutionslogo.webp"
import logosss from "../../img/logosss.jpg"
import logiño from "../../img/logiño.webp"

import {
  Box,
  Image,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';

const Home: React.FC = () => {
  return (
    <>
    <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      {/* <Box boxSize='sm'>
  <Image src='' alt='Dan Abramov' />
</Box> */}
      <Box
      position={'relative'}
      h='calc(100vh)'
      width={'full'}
      overflow={'hidden'}>
      <Box  boxSizing="border-box"
            // key={index}
            h='calc(100vh)'
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${logiño.src})`}
            // style={{
            //   backgroundImage: `url(${bg.src})`,
            //   width: '100%',
            //   height: '100%',
            // }}
          >
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                textAlign={'center'}
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="75%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {'BLOCK SOLUTIONS'}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {'Universidad Tecnológica Nacional'}
                </Text>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {'Facultad Regional Tucumán'}
                </Text>
              </Stack>
            </Container>
          </Box>
    </Box>

    </>
  );
};

export default Home;
