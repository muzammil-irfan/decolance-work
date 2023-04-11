// import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react'
// import React from 'react'

// function PakegesTable() {
//   return (
//     <>
//     <SimpleGrid column={10}  display={"flex"}  justifyContent={"space-between"}>
//     <Stack>
//         <Box>
//             <Text>hello</Text>
//         </Box>
//     </Stack>
//     <Stack>
//         <Box>
//             <Text>hello</Text>
//         </Box>
//     </Stack><Stack>
//         <Box>
//             <Text>hello</Text>
//         </Box>
//     </Stack><Stack>
//         <Box>
//             <Text>hello</Text>
//         </Box>
//     </Stack><Stack>
//         <Box>
//             <Text>hello</Text>
//         </Box>
//     </Stack><Stack>
//         <Box>
//             <Text>hello</Text>
//         </Box>
//     </Stack><Stack>
//         <Box>
//             <Text>hello</Text>
//         </Box>
//     </Stack><Stack>
//         <Box>
//             <Text>hello</Text>
//         </Box>
//     </Stack><Stack>
//         <Box>
//             <Text>hello</Text>
//         </Box>
//     </Stack><Stack>
//         <Box>
//             <Text>hello</Text>
//         </Box>
//     </Stack><Stack>
//         <Box>
//             <Text>hello</Text>
//         </Box>
//     </Stack>
//        </SimpleGrid>

//        <SimpleGrid column={10}  display={"flex"}  justifyContent={"space-between"}>
// <Stack colspan={3}>
//     <Box>
//         <Text>hello</Text>
//     </Box>
// </Stack><Stack>
//     <Box>
//         <Text>hello</Text>
//     </Box>
// </Stack><Stack>
//     <Box>
//         <Text>hello</Text>
//     </Box>
// </Stack><Stack>
//     <Box>
//         <Text>hello</Text>
//     </Box>
// </Stack><Stack>
//     <Box>
//         <Text>hello</Text>
//     </Box>
// </Stack><Stack>
//     <Box>
//         <Text>hello</Text>
//     </Box>
// </Stack><Stack>
//     <Box>
//         <Text>hello</Text>
//     </Box>
// </Stack><Stack>
//     <Box>
//         <Text>hello</Text>
//     </Box>
// </Stack><Stack>
//     <Box>
//         <Text>hello</Text>
//     </Box>
// </Stack>
//    </SimpleGrid>
//        </>

//   )
// }

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Text,
  Center,
  Grid,
} from "@chakra-ui/react";
import { AiFillPlusCircle } from "react-icons/ai";
import FormSelect from "../../formcontrol/select";
import FormCheckBox from "../../formcontrol/checkbox";
import FormInput from "../../formcontrol/input";

function PakegesTable() {
  return (
    <Table
      variant="simple"
      borderRadius={"20px"}
      ml={4}
      border="1px"
      borderColor="gray.200"
      borderCollapse="separate"
    >
      <Tbody display={{ base: "none", md: "block" }}>
        <Tr w={"fit-content"}>
          <Td
            px={1}
            colSpan={3}
            width="30%"
            borderRight="1px"
            borderColor="gray.200"
          ></Td>
          <Td
            px={1}
            borderRight="1px"
            borderColor="gray.200"
            bg="#f4f4f4"
            textAlign={"center"}
          >
            Delivery
          </Td>
          <Td
            px={1}
            borderRight="1px"
            borderColor="gray.200"
            bg="#f4f4f4"
            textAlign={"center"}
          >
            Revisions
          </Td>
          <Td
            px={1}
            borderRight="1px"
            borderColor="gray.200"
            bg="#f4f4f4"
            textAlign={"center"}
          >
            No of Concepts
          </Td>
          <Td
            px={1}
            borderRight="1px"
            borderColor="gray.200"
            bg="#f4f4f4"
            textAlign={"center"}
          >
            Vector file
          </Td>
          <Td
            px={1}
            borderRight="1px"
            borderColor="gray.200"
            bg="#f4f4f4"
            textAlign={"center"}
          >
            Printable file
          </Td>
          <Td
            px={1}
            borderRight="1px"
            borderColor="gray.200"
            bg="#f4f4f4"
            textAlign={"center"}
          >
            Source file
          </Td>
          <Td
            px={1}
            borderRight="1px"
            borderColor="gray.200"
            bg="#f4f4f4"
            textAlign={"center"}
            color="#008ddb"
          >
            Price{" "}
          </Td>
        </Tr>
        <Tr aria-colcount={10}>
          <Td
            px={1}
            borderRight="1px"
            borderColor="gray.200"
            textAlign={"center"}
            bg="#f4f4f4"
          >
            Basic
          </Td>
          <Td
            px={1}
            borderRight="1px"
            borderColor="gray.200"
            textAlign={"center"}
          >
            Package name
          </Td>
          <Td
            px={1}
            borderRight="1px"
            borderColor="gray.200"
            textAlign={"center"}
          >
            Upload file
          </Td>
          <Td
            px={1}
            borderRight="1px"
            borderColor="gray.200"
            textAlign={"center"}
          >
            <FormSelect placeholder={"2 Days"} border={"none"} />
          </Td>
          <Td
            px={1}
            borderRight="1px"
            borderColor="gray.200"
            textAlign={"center"}
          >
            <FormSelect placeholder={"unlimited"} border={"none"} />
          </Td>
          <Td
            px={1}
            borderRight="1px"
            borderColor="gray.200"
            textAlign={"center"}
          >
            <FormSelect placeholder={"2 Days"} border={"none"} />
          </Td>
          <Td
            px={1}
            borderRight="1px"
            borderColor="gray.200"
            textAlign={"center"}
          >
            <FormCheckBox label={""} coloScheme="blue" />{" "}
          </Td>
          <Td
            px={1}
            borderRight="1px"
            borderColor="gray.200"
            textAlign={"center"}
          >
            <FormCheckBox label={""} coloScheme="blue" />{" "}
          </Td>
          <Td
            px={1}
            borderRight="1px"
            borderColor="gray.200"
            textAlign={"center"}
          >
            <FormCheckBox label={""} coloScheme="blue" />{" "}
          </Td>
          <Td
            px={1}
            borderRight="1px"
            borderColor="gray.200"
            className={"center_flex"}
          >
            <FormInput type={"number"} border={"none"} />{" "}
            <Box color="#008ddb">$</Box>{" "}
          </Td>
        </Tr>
        <Tr>
          <Td px={1} colSpan={10} borderRight="1px" borderColor="gray.200">
            <Box
              cursor={"pointer"}
              lineHeight={"normal"}
              display={"flex"}
              alignItems={"center"}
              gap={2}
              p={2}
            >
              <AiFillPlusCircle color="#008ddb" fontSize={"24px"} />
              <Text color="#008ddb">Add Packages</Text>
            </Box>
          </Td>
        </Tr>
      </Tbody>
      <Tbody display={{ base: "block", md: "none", lg: "none" }}>
        <Box>
          <Grid templateColumns="2fr 5fr">
            <Box minHeight="70px" borderWidth="1px" display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <Text lineHeight={"normal"}>Basic</Text>
            </Box>
            <Box minHeight="70px" borderWidth="1px" className="center_flex">
              <Box
                cursor={"pointer"}
                lineHeight={"normal"}
                display={"flex"}
                alignItems={"center"}
                gap={2}
                p={2}
              >
                <AiFillPlusCircle color="#008ddb" fontSize={"24px"} />
                <Text color="#008ddb">Add Packages</Text>
              </Box>
            </Box>
            <Box className="center_flex" minHeight="70px" borderWidth="1px"></Box>
            <Box className="center_flex" minHeight="70px" borderWidth="1px"></Box>

            <Box className="center_flex" minHeight="70px" borderWidth="1px"></Box>
            <Box className="center_flex" minHeight="70px" borderWidth="1px"></Box>

            <Box className="center_flex" minHeight="70px" borderWidth="1px"><Text lineHeight={"normal"}> Delivery</Text> </Box>
            <Box className="center_flex" minHeight="70px" borderWidth="1px"> <Box lineHeight={'normal'}><FormSelect placeholder={"2 Days"} border={"none"}  /></Box></Box>

            <Box className="center_flex" minHeight="70px" borderWidth="1px"><Text lineHeight={"normal"}> Revisions</Text> </Box>
            <Box className="center_flex" minHeight="70px" borderWidth="1px"> <Box lineHeight={'normal'}><FormSelect placeholder={"Unlimited"} border={"none"}  /></Box></Box>

            <Box className="center_flex" minHeight="70px" borderWidth="1px"><Text lineHeight={"normal"}> No of Concepts</Text> </Box>
            <Box className="center_flex" minHeight="70px" borderWidth="1px"> <Box lineHeight={'normal'}><FormSelect placeholder={"2 "} border={"none"}  /></Box></Box>

            <Box className="center_flex" minHeight="70px" borderWidth="1px"><Text lineHeight={"normal"}> Vector File</Text> </Box>
            <Box className="center_flex" minHeight="70px" borderWidth="1px"><Box lineHeight={"normal"}>   <FormCheckBox label={""} coloScheme="blue" /></Box></Box>

            <Box className="center_flex" minHeight="70px" borderWidth="1px"><Text lineHeight={"normal"}> Printable File</Text> </Box>
            <Box className="center_flex" minHeight="70px" borderWidth="1px"><Box lineHeight={"normal"}>   <FormCheckBox label={""} coloScheme="blue" /></Box></Box>

            <Box className="center_flex" minHeight="70px" borderWidth="1px"><Text lineHeight={"normal"}> Source File</Text> </Box>
            <Box className="center_flex" minHeight="70px" borderWidth="1px"><Box lineHeight={"normal"}>   <FormCheckBox label={""} coloScheme="blue" /></Box></Box>

            <Box className="center_flex" minHeight="70px" borderWidth="1px"><Text lineHeight={"normal"}>Pricing</Text> </Box>
            <Box className="center_flex" minHeight="70px" borderWidth="1px"><Box gap={2} display={"flex"} alignItems={"center"} lineHeight={"normal"}> <FormInput type={"number"} border={"none"} />{" "}
            <Box color="#008ddb">$</Box>{" "}</Box></Box>
          </Grid>
        </Box>
      </Tbody>
    </Table>
  );
}
export default PakegesTable;
