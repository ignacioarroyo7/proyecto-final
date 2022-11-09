import React from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../../components/navbar/navbar";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  FormErrorMessage,
  Container,
  SimpleGrid,
  StackDivider,
  AspectRatio,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import axios from "axios";
import FormData from 'form-data';
import Swal from "sweetalert2";
import useSessionStorage from "../../components/hooks/useSessionStorage";
import { Router, useRouter } from "next/router";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
} from '@chakra-ui/react'

// const { isOpen, onOpen, onClose } = useDisclosure()
// const cancelRef = React.useRef()

const VerDocumento: React.FC = () => {
    const router = useRouter()
    const {IPFS,hash,fechaHora,emailAlumno} = router.query
  return (
    <>
      <Navbar></Navbar>

      <Container maxW={'full'} py={12}>
      <Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(3, 1fr)'
  gap={4}
>
  <GridItem colSpan={1}>
  <Heading>UTN-FRT</Heading>
  <Text fontSize='2xl'>Emisor:</Text>
  <Text fontSize='lg'>Universidad Tecnologica Nacional</Text>
    <Text fontSize='2xl'>Fecha de Emisión</Text>
    <Text fontSize='lg'>{fechaHora}</Text>
    <Text fontSize='2xl'>Certifica a:</Text>
    <Text fontSize='lg'>{emailAlumno}</Text>
    <Text fontSize='2xl'>Hash:</Text>
    <Text fontSize='lg'>{hash}</Text>
    </GridItem> 
  <GridItem colSpan={2} >
  <AspectRatio maxW='full' ratio={4 / 3}>
  <iframe/>
</AspectRatio>
  </GridItem>
</Grid>
    </Container>
    </>
  );
};

export default VerDocumento;
