import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Router, useRouter } from "next/router";
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
  Checkbox,
} from "@chakra-ui/react";
import Navbar from "../../components/navbar/navbar";

const Login: React.FC = () => {
  const router = useRouter()
  const login = async (email: String) => {
    try {
      sessionStorage.setItem("email",email.toString())
      console.log("login");
    } catch (error) {
      console.log(error);
    }
  };

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Este campo es obligatorio";
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

  return (
    <>
      <Navbar></Navbar>
      <Container maxW={"4xl"}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, actions) => {
            login(values.email);
            actions.resetForm();
            router.push('../apps/generar-documento')
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
                  <Heading fontSize={"4xl"}>
                    Inicia Sesión con tu cuenta
                  </Heading>
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
                      <Field name="email" validate={validateEmail}>
                        {({ field, form }) => (
                          <FormControl
                            isRequired={true}
                            isInvalid={
                              form.errors.email && form.touched.email
                            }
                          >
                            <FormLabel mt={2}>Correo institucional</FormLabel>
                            <Input
                              {...field}
                              mb={2}
                              placeholder="Ingrese su correo institucional..."
                              type="email"
                            />
                            <FormErrorMessage>
                              {form.errors.email}
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
                            <FormLabel mt={2}>Constraseña</FormLabel>
                            <Input
                              mb={2}
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
                      <Stack
                        mt={6}
                        direction={{ base: "column", sm: "row" }}
                        align={"start"}
                        justify={"space-between"}
                      >
                        <Checkbox>Recordar mis datos</Checkbox>
                        {/* <Link color={'blue.400'}>Forgot password?</Link> */}
                      </Stack>
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
                        Iniciar sesión
                      </Button>
                      </Stack>
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

export default Login;
