import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import{BsChevronLeft, BsChevronRight} from "react-icons/bs"

export default function StepsSideBar({children}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
       
       
       <Box 
    position={"absolute"}
      left={"0px"}
      top={"90px"}
       w={70} h={27}
      borderRightRadius={"full"} 
      backgroundColor={"#008ddb"}
      display={{base:"flex",lg:"none"}}
      justifyContent={"flex-end"}
      alignItems={"center"}
      pr={2}
      onClick={onOpen}
      ><BsChevronRight color="white"/></Box>
        <Drawer 
        placement={"left"}
         size={"xs"}
        style={{ backgroundColor:"red"}} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent mt={20} width={"270px"} borderTopRightRadius={"20px"}
          
          >
            <DrawerHeader p={0}>
         <Box
         display={{base:"flex",lg:"none"}}
         justifyContent={"flex-end"}
         alignItems={"center"}
          width={"full"}
           backgroundColor={"#008ddb"} 
           borderRightRadius={"20px"} h={27}
           pr={2}
           onClick={onClose}
           >
            
         <BsChevronLeft color="white" />
         </Box>

            </DrawerHeader>
            <DrawerBody display={"flex"} justifyContent={"center"} >

           {children}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }