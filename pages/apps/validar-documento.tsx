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
  FormErrorMessage,
} from "@chakra-ui/react";
import Swal from "sweetalert2";
import { Router, useRouter } from "next/router";
import axios from "axios";

const ValidarDocumento: React.FC = () => {
  const router = useRouter()

  function validateHash(value) {
    let error;
    if (!value) {
      error = "Este campo es obligatorio";
    } else if (value.length<32) {
      error = "Ingrese un hash válido";
    }
    return error;
  }

  const getDocumentFromBlockchain = async (hash)=>{
   const responseGet = await axios.get('http://localhost:4000/api/documentos/get',{params:{cid:hash}})
   if(responseGet.status === 200){
    router.push({pathname:'/apps/ver-documento',query:{IPFS:responseGet.data.urlIPFS,hash:responseGet.data.document[0].hash,fechaHora:responseGet.data.document[0].fechaHora,emailAlumno:responseGet.data.document[0].emailAlumno}})
  }else{
    Swal.fire({
      icon: 'error',
      title: '¡Lo sentimos!',
      text: 'Documento inexistente',
    })
  }
  }
  const bg = useColorModeValue("white", "gray.700")

  return (
    <>
      <Navbar></Navbar>
      <Formik
        initialValues={{ hash: "" }}
        onSubmit={(values, actions) => {
          getDocumentFromBlockchain(values.hash)
          actions.setSubmitting(false);
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   // actions.setSubmitting(false);
          // }, 1000);
        }}
      >
        {(props) => (
          <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={bg}
          >
            <Stack spacing={14} mx={"auto"} maxW={"lg"} py={12} px={6}>
              <Stack align={"center"}>
                <Heading fontSize={"4xl"}>Verificar validez</Heading>
                <Text fontSize={"lg"} color={"gray.600"}>
                  Ingrese el hash para realizar la busqueda del documento
                </Text>
              </Stack>
              <Box
                rounded={"lg"}
                bg={bg}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <Form>
                    <Field name="hash" validate={validateHash}>
                      {({ field, form }) => (
                        <FormControl
                        isRequired={true}
                          isInvalid={form.errors.hash && form.touched.hash}
                        >
                          <FormLabel>Hash</FormLabel>
                          <Input
                            {...field}
                            placeholder="Ingrese el hash..."
                            type="text"
                            maxLength={50}
                          />
                          <FormErrorMessage>
                            {form.errors.hash}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Stack 
                      direction={{ base: "column", sm: "row" }}
                        align={"center"}
                        justify={"center"}>
                    <Button
                      mt={4}
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      // colorScheme='teal'
                      isLoading={props.isSubmitting}
                      type="submit"
                    >
                      Buscar
                    </Button>
                    </Stack>
                  </Form>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        )}
      </Formik>
    </>
  );
};

export default ValidarDocumento;
