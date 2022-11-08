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

const ValidarDocumento: React.FC = () => {
  function validateHash(value) {
    let error;
    if (!value) {
      error = "Este campo es obligatorio";
    } else if (value.length<32) {
      error = "Ingrese un hash válido";
    }
    return error;
  }

  return (
    <>
      <Navbar></Navbar>
      <Formik
        initialValues={{ hash: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
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
                <Heading fontSize={"4xl"}>Verificar validez</Heading>
                <Text fontSize={"lg"} color={"gray.600"}>
                  Ingrese el hash para realizar la busqueda del documento
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
