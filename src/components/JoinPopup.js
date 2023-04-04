import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Stack,
  Flex,
  Text,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import SignInPopup from "./SignInPopup";
export default function JoinPopup({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {children ? (
        children
      ) : (
        <Button colorScheme="brand" size="sm" onClick={onOpen}>
          Join
        </Button>
      )}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent py={6}>
          <ModalHeader fontSize="32px" fontWeight="semibold" align="center">
            Join Decolance
          </ModalHeader>
          <ModalCloseButton
            mt={10}
            mr={6}
            bg="#c5c5c5"
            color="white"
            borderRadius="20px"
          />
          <ModalBody>
            <Stack pt={8} px={12} gap={4}>
              <Button borderRadius={10} bg="#4267B2" color="white" p={8}>
                <Flex fontSize="17px" align="center" gap={8}>
                  <BsFacebook size="30px" />
                  <Text w="200px" align="start">
                    Sign Up with Facebook
                  </Text>
                </Flex>
              </Button>
              <Button
                borderRadius={10}
                bg="white"
                border="1px"
                borderColor="#c5c5c5"
                p={8}
              >
                <Flex fontSize="17px" align="center" gap={10}>
                  <FcGoogle size="30px" />
                  <Text w="200px" align="start">
                    Sign Up with Google
                  </Text>
                </Flex>
              </Button>
              <Button
                borderRadius={10}
                bg="white"
                border="1px"
                borderColor="#c5c5c5"
                p={8}
              >
                <Flex fontSize="17px" align="center" gap={10}>
                  <BsApple size="30px" />
                  <Text w="200px" align="start">
                    Sign Up with Apple
                  </Text>
                </Flex>
              </Button>
              <Text align="center" fontSize="23px" fontWeight="semibold">
                OR
              </Text>
              <Input placeholder="Your Email" py={8} />
              <Button bg="brand.500" color="white" py={8}>
                Continue
              </Button>
            </Stack>
            <Text fontSize="17px" py={4} align="center" mb={4} color="#c5c5c5">
              By joining I agree to receive emails from Decolance.
            </Text>
          </ModalBody>

          <ModalFooter
            borderTop="1px"
            borderColor="#c5c5c5"
            flexDirection={"column"}
            gap={2}
          >
            <Text
              align="center"
              color="#727272"
              fontSize="17px"
              fontWeight={"semibold"}
            >
              Already a member?
            </Text>
              <Text
                align="center"
                color="brand.500"
                textDecoration={"underline"}
              >
                Sign in
              </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
