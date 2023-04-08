import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { InputRowGrid } from '../overview/GigOverview'
import { AiFillPlusCircle } from 'react-icons/ai'

function GigRequirement() {
  return (
    <Stack ml={4}><InputRowGrid 
    heading={"Get All the Info"}
    text={"YOUR QUESTIONS"}
    input={  
    <Box 
    cursor={"pointer"} 
    lineHeight={"normal"} 
    display={"flex"}
    alignItems={"center"} 
    borderWidth={"1px"}
    borderRadius={"md"}
    gap={2} 
    p={2}>
    <AiFillPlusCircle color="#008ddb" fontSize={"24px"}/>
    <Text  color="#008ddb" >Add Gig extra</Text>
  </Box>}
    />
    <InputRowGrid
    text={"Add questions to help buyers provide you with exactly what need to start working on their order."}
    />
    
    </Stack>
  )
}

export default GigRequirement