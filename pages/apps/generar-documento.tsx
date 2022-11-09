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

interface IPDF{
  pdfToBase64: string
}

// const { isOpen, onOpen, onClose } = useDisclosure()
// const cancelRef = React.useRef()

const GenerarDocumento: React.FC = () => {
  const sessionEmail = useSessionStorage('email')
  function validateLegajo(value) {
    let error;
    if (!value) {
      error = "Este campo es obligatorio";
    } else if (value.length > 5) {
      error = "Ingrese un legajo válido";
    }
    return error;
  }
  function validatePassword(value) {
    let error;
    if (!value) {
      error = "Este campo es obligatorio";
    }
    // else if (value.length<16) {
    //   error = "Ingrese un hash válido";
    // }
    return error;
  }
  function validateConstancia(value) {
    let error;
    // if (!value) {
    //   error = "Este campo es obligatorio";
    // }
    if (value == "Elija una Constancia.." || value == "") {
      error = "Este campo es obligatorio";
    }
    return error;
  }

  const convertToBuffer = async (file) => {
    // Convert file to buffer so that it can be uploaded to IPFS
    const buffer = await Buffer.from(file);
    console.log("Buffer: ",buffer)
    return buffer
  };
  


  const getDocumento = async (legajo: String,constancia: Number) => {
    switch (constancia) {
      case 1:
        try{
        const responseGet = await axios.get(
          "http://localhost:7001/api/document/constancia"
          , { responseType: 'blob' }
        );
        // const body = {
        //   fileName: "prueba.pdf",
        //   fileContent: await convertToBuffer(responseGet.data),
        // };
        try{
          const pdfData = responseGet.data;
          const form = new FormData();
          form.append('pdf',pdfData , {
          filepath: "prueba.pdf",
          contentType: 'multipart/form-data',
          });
          form.append('legajo',legajo)
          form.append('constancia',constancias[constancia-1])
          form.append('emailAlumno',sessionEmail)
          const responsePost = await axios.post(
            "http://localhost:4000/api/documentos/validar"
            ,form
            ,{headers: {'Content-Type': 'multipart/form-data'}}
          );
          if(responsePost.status === 200){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'El documento fue enviado a tu correo, por favor revisa tu bandeja de entrada',
              showConfirmButton: false,
              timer: 2000
            })
          }else{
            Swal.fire({
              icon: 'error',
              title: '¡Lo sentimos!',
              text: 'Ocurrió un error validando en la blockchain, por favor intente nuevamente',
            })
          }
        }catch (error) {
          Swal.fire({
            icon: 'error',
            title: '¡Lo sentimos!',
            text: 'Ocurrió un error validando en la blockchain, por favor intente nuevamente',
          })
          console.log("error al generar documento");
      }
      }catch (error) {
        console.log("error al generar documento get");
        Swal.fire({
          icon: 'error',
          title: '¡Lo sentimos!',
          text: 'Ocurrió un error generando el documento, por favor intente nuevamente',
        })
    }
  
        break;
      case 2:
        axios.get("");
        break;
      case 3:
        axios.get("");
        break;
    }
  };

  const constancias = [
    "Constancia de Alumno Regular",
    "Constancia de Inicio de Año Lectivo",
    "Estado Académico",
  ];
  return (
    <>
      <Navbar></Navbar>
      <Container maxW={"4xl"}>
        <Formik
          initialValues={{ legajo: "", password: "",constancia:"" }}
          onSubmit={(values, actions) => {
            getDocumento(values.legajo,Number(values.constancia));
            actions.resetForm()
            console.log("values: ", values);
            actions.setSubmitting(false);
          }}
        >
          {(props) => (
            <Flex
              minH={"100vh"}
              align={"center"}
              justify={"center"}
              bg={useColorModeValue("gray.50", "gray.800")}
            >
              <Stack spacing={14} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                  <Heading fontSize={"4xl"}>Generar Documento</Heading>
                  <Text fontSize={"lg"} color={"gray.600"}>
                    Ingrese los siguientes datos para generar el documento
                  </Text>
                </Stack>
                <Box
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.700")}
                  boxShadow={"lg"}
                  p={8}
                >
                  <Stack spacing={4}>
                    <Form>
                      <Field name="legajo" validate={validateLegajo}>
                        {({ field, form }) => (
                          <FormControl
                            isRequired={true}
                            isInvalid={
                              form.errors.legajo && form.touched.legajo
                            }
                          >
                            <FormLabel>Legajo</FormLabel>
                            <Input
                              {...field}
                              placeholder="Ingrese su legajo..."
                              type="number"
                              maxLength={5}
                            />
                            <FormErrorMessage>
                              {form.errors.legajo}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Field name="password" validate={validatePassword}>
                        {({ field, form }) => (
                          <FormControl
                            isRequired={true}
                            isInvalid={
                              form.errors.password && form.touched.password
                            }
                          >
                            <FormLabel>Constraseña</FormLabel>
                            <Input
                              {...field}
                              placeholder="Ingrese su contraseña..."
                              type="password"
                              maxLength={16}
                            />
                            <FormErrorMessage>
                              {form.errors.password}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Field name="constancia" validate={validateConstancia}>
                        {({ field, form }) => (
                          <FormControl
                            isRequired={true}
                            isInvalid={
                              form.errors.constancia && form.touched.constancia
                            }
                          >
                            <FormLabel>Constancia</FormLabel>
                            <Select {...field}>
                              <option selected hidden disabled value="">
                                Elija una Constancia..
                              </option>
                              {Object.keys(constancias).map((keyName, i) => (
                                <option key={i} value={i+1}>
                                  {constancias[keyName]}
                                </option>
                              ))}
                            </Select>
                            <FormErrorMessage>
                              {form.errors.constancia}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
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
                        Solicitar
                      </Button>
                    </Form>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default GenerarDocumento;
