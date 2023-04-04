import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function FindWorkByCategory() {
  return (
    <Stack alignItems="center" my={{base:10,md:20}} gap={{base:10,md:20}} px={{md:12}}>
      <Box>
        <Heading fontWeight={"semibold"} fontSize={{base:"24px",md:"40px"}} textAlign={{base:"center",md:"start"}}>Find Work By Category</Heading>

        <Text color="#848484" textAlign={"center"} py={4} fontWeight={"semibold"} fontSize={{base:"16px",md:"21px"}}>
          Looking for work?{" "}
          <Box as="span" color="brand.200">
            Browse jobs
          </Box>
        </Text>
      </Box>
      <SimpleGrid columns={{base:1,md:2,xl:4}} gap={{base:8,xl:16}} w="full">
        {
            categoryData.map(item=>{
                return (
                    <CategoryBox label={item.label} jobs={item.jobs} key={item.label} />
                ) 
            })
        }
      </SimpleGrid>
    </Stack>
  );
}
const CategoryBox = ({label,jobs})=>{
    return(
        <Stack alignItems="center" py={10} fontWeight={"bold"} borderRadius="20px" gap={10} bg={"#91D2F6BF"} > 
        <Box width={"80%"}>

            <Heading color="brand.800" fontSize="25px" fontWeight={"bold"}>
                {label}
            </Heading>
            <Text color="brand.300" pt={10} fontWeight="bold">
                {jobs} Job Posted
            </Text>
        </Box>
        </Stack>
    )
}

const categoryData = [
    {
        label:"Development & IT",
        jobs:505
    },
    {
        label:"Design & Creative",
        jobs:505
    },
    {
        label:"Sales & Marketing",
        jobs:505
    },
    {
        label:"Writing & Translation",
        jobs:505
    },
    {
        label:"Blockchain",
        jobs:505
    },
    {
        label:"Finance & Accounting",
        jobs:505
    },
    {
        label:"Engineering & Architecture",
        jobs:505
    },
    {
        label:"Admin & Customer Support",
        jobs:505
    }
]