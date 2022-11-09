import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { ColorModeSwitcher } from "./ColorModeSwitch";
import useSessionStorage from "../hooks/useSessionStorage";
import { Router, useRouter } from "next/router";




const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
  <Link
    // px={2}
    // py={1}
    // rounded={'md'}
    // _hover={{
    //   textDecoration: 'none',
    //   bg: useColorModeValue('gray.200', 'gray.700'),
    // }}
    href={path}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sessionEmail = useSessionStorage('email')

  const Links = [
    {
      name: "Validar Documento",
      path: "../apps/validar-documento",
    },
    {
      name: "Generar Documento",
      path: "../apps/generar-documento",
      disabled:sessionEmail!=undefined?false:true
    },
  ];
  const iniciarSesion = (email: String)=>{
    sessionStorage.setItem('email',email.toString())
  }

  const logout = ()=>{
    sessionStorage.clear()
    router.push('../auth/login')
  }

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link href="../auth/home">
              <Box>UTN-FRT</Box>
            </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map(({ name, path,disabled }) => (
                !disabled ?(
                <NavLink key={path} path={path} >
                  {name}
                </NavLink>
                ) : (<></>)
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {/* <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
              Action
            </Button> */}
            <ColorModeSwitcher mx={3}></ColorModeSwitcher>
            {sessionEmail==undefined?(
            <Button
              
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"blue.400"}
              _hover={{
                bg: "blue.300",
              }}
            >
              <Link href="../auth/login">Iniciar Sesión</Link>
              
            </Button>):(

<Menu>
<MenuButton
  as={Button}
  rounded={'full'}
  variant={'link'}
  cursor={'pointer'}
  minW={0}>
  <Avatar
    size={'sm'}
    src={'https://avatars.dicebear.com/api/male/username.svg'}
  />
</MenuButton>
<MenuList alignItems={'center'}>
  <br />
  <Center>
    <Avatar
      size={'2xl'}
      src={'https://avatars.dicebear.com/api/male/username.svg'}
    />
  </Center>
  <br />
  <Center>
    <p>{sessionEmail}</p>
  </Center>
  <br />
  <MenuDivider />
  <MenuItem onClick={()=>{logout()}}>Logout</MenuItem>
</MenuList>
</Menu>

            //   <Flex alignItems={'center'}>
            //   <Menu>
            //     <MenuButton
            //       as={Button}
            //       rounded={'full'}
            //       variant={'link'}
            //       cursor={'pointer'}
            //       minW={0}>
            //       <Box>{sessionEmail}</Box>
            //     </MenuButton>
            //     <MenuList>
            //       <MenuDivider />
            //       <MenuItem onClick={()=>{logout()}}>Logout</MenuItem>
            //     </MenuList>
            //   </Menu>
            // </Flex>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
