import { Box, Heading, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import PakegesTable from "./PakegesTable";
import ExtraServiceTable from "./ExtraServiceTable";
import ExtraServiceRow from "./ExtraServiceRow";
import { AiFillPlusCircle } from "react-icons/ai";

function GigPricing() {
  return (
    <>
      <Stack ml={4}>
        <Box display={"flex"} alignItems={"baseline"} gap={4}>
          {" "}
          <Heading
            fontWeight={"semibold"}
            fontSize={{ base: "20px", lg: "30px" }}
            textAlign={{ base: "", md: "start" }}
            display={{base:"none"}}
          >
            Packages
          </Heading>
          <Text lineHeight={"none"} fontSize={"x-small"} color="#676767">
            Scope & Pricing
          </Text>
          <Link lineHeight={"none"} color="#008ddb" fontSize={"small"} ml={4}>
            See Example{" "}
          </Link>
        </Box>
        <PakegesTable />
        <Box >
        <Box display={"flex"} alignItems={"baseline"} gap={4}>
          {" "}
          <Heading
            fontWeight={"semibold"}
            fontSize={{ base: "20px", lg: "30px" }}
            textAlign={{ base: "", md: "start" }}
          >
            Add extra services
          </Heading>
        </Box>
        <ExtraServiceTable />
        </Box>
        <ExtraServiceRow label={"Additional revision"} />
        <ExtraServiceRow label={"Additional logo"} />
        <ExtraServiceRow label={"Source file"} />
        <ExtraServiceRow label={"3D mockup"} />
        <ExtraServiceRow label={"Vector file"} />
        <ExtraServiceRow label={"Logo "} />
        <Box
          cursor={"pointer"}
          lineHeight={"normal"}
          display={"flex"}
          alignItems={"center"}
          gap={2}
          p={2}
        >
          <AiFillPlusCircle color="#008ddb" fontSize={"24px"} />
          <Text color="#008ddb">Add Gig extra</Text>
        </Box>
      </Stack>
    </>
  );
}

export default GigPricing;
