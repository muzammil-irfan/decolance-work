import {
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { ImFacebook, ImAndroid } from "react-icons/im";
import { BsTwitter, BsApple } from "react-icons/bs";
import { IoLogoDiscord } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box as="footer" bg={"#0F557C"}>
      <Container px={{md:10}} maxW="90vw" py={4}>
        <Flex color="white" flexDirection={{base:"column",md:"row"}}>
          <Stack flex={1} gap={4}>
            <Image src="/logo-white.png" width="230px" />
            <Text>
              Decolance is an innovative freelance marketplace driven by the
              power of blockchain technology on Binance Smart Chain. We are a
              thriving community of freelancers, entrepreneurs, and businesses,
              all coming together in one secure global ecosystem to exchange
              digital services. No third parties, no fraud, no disputes, no
              hassle. Only seamless and efficient settlements driven by
              cryptocurrency, providing a secure and decentralized experience
              between buyers and sellers. Experience the Decolance difference
              today.
            </Text>
            <Flex alignItems={"center"} gap={2} color="#52B9F3">
              <ImFacebook size="18px" />
              <FaInstagram size="20px" />
              <BsTwitter size="18px" />
              <IoLogoDiscord size="18px" />
            </Flex>
          </Stack>
          <Stack flex={2} justifyContent={{base:"start",md:"center"}} alignItems={{base:"start",xl:"center"}}>
            <SimpleGrid columns={{base:1,md:2,xl:4}} gap={8} mt={8}>
              <Stack mx={{md:"auto"}}>
                <Heading color="#52B9F3" size={"sm"}>
                  For Clients
                </Heading>
                <Link to="marketplace">
                  <Text>Explore Marketplace</Text>
                </Link>
                <Link>
                  <Text>Post a Job</Text>
                </Link>
                <Link>
                  <Text>Find a Freelancer</Text>
                </Link>
                <Link>
                  <Text>Hire an Agency</Text>
                </Link>
              </Stack>
              <Stack mx={{md:"auto"}}>
                <Heading color="#52B9F3" size={"sm"}>
                  For Freelancers
                </Heading>
                <Link to="/find-work">
                  <Text>Find Work</Text>
                </Link>
                <Link>
                  <Text>Create gig</Text>
                </Link>
                <Link>
                  <Text>Sign Up</Text>
                </Link>
                <Link>
                  <Text>Login</Text>
                </Link>
              </Stack>
              <Stack mx={{md:"auto"}}>
                <Heading color="#52B9F3" size={"sm"}>
                  Resources
                </Heading>
                <Link to="/support">
                  <Text>Help & Support</Text>
                </Link>
                <Link to="/community">
                  <Text>Community</Text>
                </Link>
                <Link>
                  <Text>Affiliate Program</Text>
                </Link>
                <Link>
                  <Text>Reviews</Text>
                </Link>
              </Stack>
              <Stack mx={{md:"auto"}}>
                <Heading color="#52B9F3" size={"sm"}>
                  Company
                </Heading>
                <Link>
                  <Text>About Us</Text>
                </Link>
                <Link to="/terms">
                  <Text>Terms of Services</Text>
                </Link>
                <Link to="/trust">
                  <Text>Trust, Safety & Security</Text>
                </Link>
                <Link>
                  <Text>Contact Us</Text>
                </Link>
              </Stack>
            </SimpleGrid>
          </Stack>
        </Flex>
        <Flex
          justifyContent="space-between"
          color="white"
          paddingY={10}
          borderTop="1px"
          borderColor="brand.700"
          mt={12}
          gap={4}
          flexDirection={{base:"column-reverse",md:"row"}}
        >
          <Text>2022 All Rights Reserved | Made with by Decolance
          </Text>
          <Flex gap={4}  color="brand.400" alignItems="end" justifyContent={{base:"center",md:"start"}}>
            <Text color="white" px={2}>
              Mobile App
            </Text>
            <Flex alignItems="center" gap={4}>
            <BsApple size="30px" />
            <ImAndroid size="30px" />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
