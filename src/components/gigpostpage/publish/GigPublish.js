import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import GigPostDone from '../overview/GigpostDone'

function GigPublish() {
  return (
    <Stack>
        <Box
bgImage={{base:"url('/images/home/Background_(74).png')",md:"url('/images/home/Background_(74).png')"}}
height="290px"
bgSize={"contain"}
bgRepeat="no-repeat"
justifyContent={"center"}
alignItems="center"
flexDirection="column"
color="white"
//   gap={5}
backgroundPosition="center"  
lineHeight={"none"}
>

        </Box>
        <Text 
        fontSize={"40px"}
        lineHeight={"none"}
        color={"#008ddb"}
        fontWeight={"700"}
        >
        Almost There...
        </Text>
        <Text 
        fontSize={"24px"}
        lineHeight={"none"}
        color={"#0f557c"}
        fontWeight={"600"}
        >
        Lets publish your Gig and get some buyers rolling in.
        </Text>
        <Flex my={2} justifyContent={"center"} gap={4}>
            <Button >Go Back </Button>
           <GigPostDone/>
        </Flex>
    </Stack>
  )
}

export default GigPublish