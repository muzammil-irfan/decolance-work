import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import FormCheckBox from "../../formcontrol/checkbox";
import FormInput from "../../formcontrol/input";
import FormSelect from "../../formcontrol/select";

function ExtraServiceRow({ label }) {
  return (
    <Flex
      borderWidth={"1px"}
      py={2}
      borderRadius={"10px"}
      px={2}
      lineHeight={"normal"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexDirection={{base:"column",md:"row",lg:"row"}}
    >
      <Box
       display={{base:"flex"}}
       w={{base:"full"}} 
       py={{base:"4px"}}
       mb={{base:2}}
       borderBottomWidth={{base:"1px"}}
       >
      <FormCheckBox />
      <Text
        fontWeight={{lg:"600"}}
        fontSize={{base:"14px", md:"20px"}}
        color="#c5c5c5"
        w={"200px"}
        overflow={"hidden"}
      >
        {label}
      </Text>

      </Box>
      <Box display={"flex"} width={{base:"full"}} gap={{base:"2",md:"2"}} justifyContent={{base:"space-evenly"}} alignItems={"center"}>
      <Text
      fontSize={{base:"xx-small",md:"small",lg:"lg"}}
      >For an extra</Text>
      <FormInput
        defaultValue={0}
        type={"number"}
        border={"none"}
        bg={" #008ddb"}
        w={{base:"25%",lg:"200px"}}
      />

      <Text fontSize={{base:"xx-small",md:"small",lg:"lg"}} verticalAlign={{md:"center"}}>I'll deliver in</Text>
      <FormSelect
        placeholder={"Select"}
        border={"none"}
        bg={" #008ddb"}
        w={{base:"25%",lg:"200px"}}

      />
      </Box>
           
    </Flex>
  );
}

export default ExtraServiceRow;
