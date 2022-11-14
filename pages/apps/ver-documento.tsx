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
  FormControl,
  FormLabel,
  Input,
  Stack,
  VStack,
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
    const {IPFS,hash,fechaHora,emailAlumno}= router.query
  return (
    <>
      <Navbar></Navbar>

      <Container maxW={'full'} py={2}>
      <Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(3, 1fr)'
  gap={2}
>
  <GridItem colSpan={1} pe={4}>
    <Stack direction={{ base: "column", sm: "row" }}
                        align={"center"}
                        justify={"center"}>
    <Heading>UTN-FRT</Heading>                      
    </Stack>  
  <VStack my={12} sx={{alignContent: 'center', justifyContent:'center', textAlign:'center'}}>
  <Stack my={6}>
  <Text fontSize='2xl' as='b'>Emisor:</Text>
  <Text fontSize='lg' as='i'>Universidad Tecnologica Nacional</Text>
  </Stack>
  <Stack my={6}>
  <Text fontSize='2xl' as='b'>Fecha de Emisión</Text>
    <Text fontSize='lg' as='i'>{fechaHora}</Text>
  </Stack>
    <Stack my={6}>
    <Text fontSize='2xl' as='b'>Certifica a:</Text>
    <Text fontSize='lg' as='i'>{emailAlumno}</Text>
    </Stack>
    <Stack my={6}>
    <Text fontSize='2xl' as='b'>Hash:</Text>
    <Text fontSize='lg' as='i'>{hash}</Text>
    </Stack>

  </VStack>
  
    
    </GridItem> 
  <GridItem colSpan={2} >
  <AspectRatio maxW='full' ratio={4 / 3}>
  <iframe src={String(IPFS)}/>
</AspectRatio>
  </GridItem>
</Grid>
    </Container>
    </>
  );
};

export default VerDocumento;
