import {
  Select,
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Input,
  Textarea,
  Grid,
  GridItem,
  Flex,
  TabIndicator,
  Checkbox,
} from "@chakra-ui/react";
import GigTab from "./GigTab";
import TagsInput from "./Taginput";
import {TiWarning} from "react-icons/ti"

export default function GigOverview() {
  return (
    <>
      <Stack ml={4}>
        <InputRowGrid
          heading={"Gig title"}
          text={
            " Place to include keywords that buyers would likely use to searchfor a service."
          }
          input={
            <Textarea
              placeholder="I will do something i am really good at"
              size={{ base: "xs", md: "lg" }}
            />
          }
        />
        <InputRowGrid
          heading={"Category"}
          text={
            " Choose the category and sub-category most suitable for your Gig."
          }
          input={
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem h="10" lineHeight={"32px"}>
                <Select placeholder="Select a category">
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                  <option value="category3">Category 3</option>
                </Select>
              </GridItem>
              <GridItem h="10" lineHeight={"32px"}>
                <Select placeholder="Select a sub-category">
                  <option value="sub-category1">Sub-Category 1</option>
                  <option value="sub-category2">Sub-Category 2</option>
                  <option value="sub-category3">Sub-Category 3</option>
                </Select>
              </GridItem>
            </Grid>
          }
        />
        <Box display={{base:"none",md:"none",lg:"block"}}>
        <InputRowGrid heading={"Gig metadata:"} input={<GigTab />}  />

        </Box>

        <InputRowGrid
          heading={"Search tag"}
          text={
            "Tag Gig with buzz words that are relevant to the services you offer. Use all 5 tags to get found."
          }
          input={<TagsInput />}
        />
        <InputRowGrid
         
          input={<Flex justifyContent={"flex-end"}><Text fontSize={{base:"xs",md:"md",lg:"lg"}}>5 tags maximum . </Text><Text fontSize={{base:"xs",md:"md",lg:"lg"}} color={"#c7c7c7"}>Use letter and number only</Text></Flex>}
        />
         <InputRowGrid
         
         input={<Flex alignItems={"flex-start"} textAlign={"left"} gap={2}><Checkbox></Checkbox> <Text fontSize={{base:"xs",md:"md",lg:"lg"}}> I declare that these materials were created by myself or by my team and do not infringe on any 3rd 
         party rights. I understand that the illegal use of digital assets is against Fiverr’s Terms of Service and 
         may result in blocking my account.</Text></Flex>}
       />
        <InputRowGrid
         
         input={<Flex  alignItems={"center"} gap={2}>
          <TiWarning color="red" fontSize={30}  />
          <Text fontWeight={"medium"}>Some categories require that sellers verify their skills.</Text></Flex>}
       />
      </Stack>
    </>
  );
}

export const InputRowGrid = ({ heading, text, input }) => (
  <SimpleGrid column={{ base: 1, md: 2, lg: 2 }} lineHeight={"normal"}>
    <Stack flexDirection={{ base: "column", md: "row" }}>
      <Box w={{ base: "100%", md: "25%" }}>
        <Heading
          fontWeight={"semibold"}
          mt={"10px"}
          fontSize={{ base: "20px", lg: "26px" }}
          textAlign={{ base: "", md: "start" }}
        >
          {heading}
        </Heading>
      </Box>
      <Box w={{ base: "100%", md: "75%" }} >
        <Text
          fontSize={{ base: "x-small", md: "sm" }}
          display={"flex"}
          justifySelf={"flex-start"}
          lineHeight={{ base: "22px", md: "32px" }}
        >
          {text}
        </Text>

        {input}
      </Box>
    </Stack>
  </SimpleGrid>
);
