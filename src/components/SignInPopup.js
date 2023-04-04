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
  Checkbox,
} from "@chakra-ui/react";
import React from "react";
import { BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import JoinPopup from "./JoinPopup";
export default function SignInPopup({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {children ? (
        children
      ) : (
        <Button size="sm" bg="transparent" onClick={onOpen}>
          <Text color="gray">Sign in</Text>
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
                    Sign In with Facebook
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
                    Sign In with Google
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
                    Sign In with Apple
                  </Text>
                </Flex>
              </Button>
              <Text align="center" fontSize="23px" fontWeight="semibold">
                OR
              </Text>
              <Input placeholder="Email / Username" py={8} />
              <Input placeholder="Password" py={8} />
              <Button bg="brand.500" color="white" py={8}>
                Continue
              </Button>
            </Stack>
            <Flex justify="space-between" px={12} py={2} mb={4}>
              <Checkbox defaultChecked colorScheme="gray">
                Remember Me
              </Checkbox>
              <Text align="center" color="brand.500">
                Forget Password?
              </Text>
            </Flex>
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
              Not a member yet?
            </Text>
            <Text align="center" color="brand.500" textDecoration={"underline"}>
              Join Now
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
