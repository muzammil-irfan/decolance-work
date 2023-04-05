import {Select, Box, Heading, SimpleGrid, Stack, Text, Image, Input } from '@chakra-ui/react'


export default function GigOverview(){

 return(
    <Stack alignItems={"start"} gap={20}  px={{xl:20}} >
    <SimpleGrid columns={{base:2,xl:2}} width={"full"} pl={4} gap={{base:8,xl:16}} >
    <Heading fontWeight={"semibold"} fontSize={{base:"24px",lg:"40px"}}textAlign={{base:"",md:"start"}}> 
        Gig title
    </Heading>
    <Input type='textarea' placeholder='Basic usage' />
    </SimpleGrid>
    <SimpleGrid columns={{base:2,xl:2}} pl={4} width={"full"} gap={{base:8,xl:16}} >
    <Heading fontWeight={"semibold"} fontSize={{base:"24px",lg:"40px"}}textAlign={{base:"",md:"start"}}> 
        
        Category
    </Heading>
    <Input placeholder='Basic usage' />

    </SimpleGrid>
    <SimpleGrid columns={{base:2,xl:2}} pl={4} width={"full"} gap={{base:8,xl:16}} >
    <Heading fontWeight={"semibold"} fontSize={{base:"24px",lg:"40px"}}textAlign={{base:"",md:"start"}}> 
        Search tags
    </Heading>
    <Input placeholder='Basic usage' />

    </SimpleGrid>
</Stack>
 )   
} 