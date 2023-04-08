import { Flex, Text } from "@chakra-ui/react";
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
    >
      <FormCheckBox />
      <Text
        fontWeight={"600"}
        fontSize={"20px"}
        color="#c5c5c5"
        w={"200px"}
        overflow={"hidden"}
      >
        {label}
      </Text>
      <Text>For an extra</Text>
      <FormInput
        defaultValue={0}
        type={"number"}
        border={"none"}
        bg={" #008ddb"}
        w={"200px"}
      />

      <Text>I'll deliver in</Text>
      <FormSelect
        placeholder={"Select"}
        border={"none"}
        bg={" #008ddb"}
        w={"200px"}
      />
    </Flex>
  );
}

export default ExtraServiceRow;
