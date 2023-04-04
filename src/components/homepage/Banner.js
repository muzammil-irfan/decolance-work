import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();
  return (
    <Flex
      bgImage={{base:"url('/images/home/homepage-mobile-banner.png')",md:"url('/images/home/homepage-banner.png')"}}
      height="475px"
      bgSize={"contain"}
      bgRepeat="no-repeat"
      justifyContent={"center"}
      alignItems="center"
      flexDirection="column"
      color="white"
      gap={5}
      backgroundPosition="center"
      my={10}
      
    >
      <Stack alignItems="center" display={{base:"none",md:"flex"}}>
        <Heading fontWeight={500} fontSize={{base:"27px",md:"40px"}}>
          Need An Expert Freelancer?
        </Heading>
        <Heading fontWeight={500} fontSize={{base:"27px",md:"40px"}}>
          Hire One Now.
        </Heading>
      </Stack>
      <Stack  alignItems="center" display={{base:"flex",md:"none"}}>
        <Heading fontWeight={500} fontSize={{base:"27px",md:"40px"}}>
          Find & Hire Expert 
        </Heading>
        <Heading fontWeight={500} fontSize={{base:"27px",md:"40px"}}>
          Freelancer
        </Heading>
      </Stack>
      <Text color="brand.100" fontWeight={500} fontSize={{base:"14px",md:"23px"}}>
        Decentralized Freelancer Ecosystem
      </Text>
      <Flex gap={{base:4,md:10}} flexDirection={{base:"column",md:"row"}}>
        <Button
          bg="brand.100"
          fontWeight={400}
          width={{base:"220px",md:"260px"}}
          onClick={() => {
            navigate("/marketplace");
          }}
          py={{base:6,md:8}}
          fontSize={{md:20}}
          _hover={{ color: "white", bg: "brand.100" }}
          borderRadius={16}
          border="3px solid"
          borderColor={"brand.100"}
        >
          Explore Marketplace
        </Button>
        <Button
          variant="outline"
          fontSize={{md:20}}
          py={{base:6,md:8}}
          fontWeight={400}
          border="3px solid white"
          width={{base:"220px",md:"260px"}}
          _hover={{ bg: "transparent" }}
          borderRadius={16}
          onClick={() => {
            navigate("/find-work");
          }}
        >
          Find Work
        </Button>
      </Flex>
    </Flex>
  );
}
