// pages/_app.js
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
