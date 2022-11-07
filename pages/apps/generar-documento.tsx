import React from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../../components/navbar/navbar";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
} from '@chakra-ui/react';

const GenerarDocumento: React.FC = () => {
  return (
    <>
    <Navbar></Navbar>
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={14} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Generar Documento</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Ingrese los siguientes datos para generar el documento
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="legajo">
              <FormLabel>Legajo</FormLabel>
              <Input type="number" placeholder='Ingrese su legajo' />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Contraseña</FormLabel>
              <Input type="password" placeholder='Ingrese su contraseña'/>
            </FormControl>
            <FormControl id="hash">
            <FormLabel>Constancias</FormLabel>
  <Select>
  <option selected hidden disabled value="">Elija una Constancia</option>
    <option>Constancia de Alumno Regular</option>
    <option>Constancia de Inicio de Año Lectivo</option>
    <option>Estado Académico</option>
  </Select>
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Solcitar
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>
  );
};

export default GenerarDocumento;