import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  AlertDialogCloseButton,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";

export default function GigPostDone() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <Button color={"white"} bg={"#008ddb"} onClick={onOpen}>
        Publish Gig{" "}
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogCloseButton />
          <AlertDialogBody lineHeight={"none"}>
            <Box
              bgImage={{
                base: "url('/images/home/gigpost-done.png')",
                md: "url('/images/home/gigpost-done.png')",
              }}
              height="290px"
              bgSize={"contain"}
              bgRepeat="no-repeat"
              justifyContent={"center"}
              alignItems="center"
              flexDirection="column"
              color="white"
              //   gap={5}
              backgroundPosition="center"
              //   my={10}
            />
          </AlertDialogBody>
          <Text lineHeight={"none"} my={2} color={"#008ddb"} fontSize={"38px"} fontWeight={"600"} m="auto"> You're Done</Text>
          <Text lineHeight={"none"} my={4} textAlign={"center"} >
            No need to fill out From W-9. You can update your information from
            your profile settings.
          </Text>
          <AlertDialogFooter>
            <Button colorScheme="blue" onClick={onClose} width="100%">
              Done
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
