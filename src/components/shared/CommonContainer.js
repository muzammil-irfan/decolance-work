import { Container } from '@chakra-ui/react'
import React from 'react'

export default function CommonContainer({children}) {
  return (
    <Container px={{md:10}} maxW="90vw" >
        {children}
    </Container>
  )
}
