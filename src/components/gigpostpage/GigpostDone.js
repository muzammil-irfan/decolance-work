 import React from 'react'
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
  } from '@chakra-ui/react'


 export default function GigPostDone() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  
    return (
      <>
        <Button onClick={onOpen}>Done</Button>
        <AlertDialog
          motionPreset='slideInBottom'
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
  
          <AlertDialogContent>
          
            <AlertDialogCloseButton />
            <AlertDialogBody>
            <Box
      bgImage={{base:"url('/images/home/gigpost-done.png')",md:"url('/images/home/gigpost-done.png')"}}
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
            <AlertDialogHeader m="auto"> You're Done</AlertDialogHeader>
            <AlertDialogFooter>
             
              <Button colorScheme='blue' width="100%" >
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    )
  }