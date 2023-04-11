import { Box, Flex, Table, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import React from "react";
import FormCheckBox from "../../formcontrol/checkbox";
import FormSelect from "../../formcontrol/select";
import FormInput from "../../formcontrol/input";

function ExtraServiceTable() {
  return (
    <Table borderWidth={"1px"}>
      <Tbody>
        <Tr>
          <Td colSpan={3} display={"flex"} gap={4}>
            {" "}
            <FormCheckBox />{" "}
            <Text fontWeight={"bold"} fontSize={"20px"} color="#c5c5c5">
              Extra Fast Delivery
            </Text>
          </Td>
        </Tr>
        <Tr display={"flex"} justifyContent={"space-between"} flexDirection={{base:"column",lg:"row"}}>
          <Td
            borderRightWidth={"1px"}
            w={"full"}
            display={"flex"}
            h={"full"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Box w={"full"} py={2}>
              <Text fontWeight={"bold"}>Basic</Text>
            </Box>
            <Box w={"full"} py={2}>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text>I'll deliver in</Text>
                <FormSelect
                  placeholder={"Select"}
                  border={"none"}
                  bg={" #008ddb"}
                  w={"50%"}
                />
              </Flex>
            </Box>
            <Box w={"full"} py={2}>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text>For an extra</Text>
                <FormInput
                  defaultValue={0}
                  type={"number"}
                  border={"none"}
                  bg={" #008ddb"}
                  w={"50%"}
                />
              </Flex>
            </Box>
          </Td>
          <Td
            borderRightWidth={"1px"}
            w={"full"}
            display={"flex"}
            h={"full"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Box w={"full"} py={2}>
              <Text fontWeight={"bold"}>Standard</Text>
            </Box>
            <Box w={"full"} py={2}>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text>I'll deliver in</Text>
                <FormSelect
                  placeholder={"Select"}
                  border={"none"}
                  bg={" #008ddb"}
                  w={"50%"}
                />
              </Flex>
            </Box>
            <Box w={"full"} py={2}>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text>For an extra</Text>
                <FormInput
                  defaultValue={0}
                  type={"number"}
                  border={"none"}
                  bg={" #008ddb"}
                  w={"50%"}
                />
              </Flex>
            </Box>
          </Td>
          <Td
            borderRightWidth={"1px"}
            w={"full"}
            display={"flex"}
            h={"full"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Box w={"full"} py={2}>
              <Text fontWeight={"bold"}>Premium</Text>
            </Box>
            <Box w={"full"} py={2}>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text>I'll deliver in</Text>
                <FormSelect
                  placeholder={"Select"}
                  border={"none"}
                  bg={" #008ddb"}
                  w={"50%"}
                />
              </Flex>
            </Box>
            <Box w={"full"} py={2}>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text>For an extra</Text>
                <FormInput
                  defaultValue={0}
                  type={"number"}
                  border={"none"}
                  bg={" #008ddb"}
                  w={"50%"}
                />
              </Flex>
            </Box>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

export default ExtraServiceTable;
