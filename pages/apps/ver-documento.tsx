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
} from "@chakra-ui/react";
import axios from "axios";
import FormData from 'form-data';
import Swal from "sweetalert2";
import useSessionStorage from "../../components/hooks/useSessionStorage";
import { Router, useRouter } from "next/router";

// const { isOpen, onOpen, onClose } = useDisclosure()
// const cancelRef = React.useRef()

const VerDocumento: React.FC = () => {
    const router = useRouter()
    const {IPFS,hash,fechaHora,emailAlumno} = router.query
  return (
    <>
      <Navbar></Navbar>
      <Container maxW={"4xl"}>
        <iframe src={IPFS}></iframe>
      </Container>
    </>
  );
};

export default VerDocumento;
