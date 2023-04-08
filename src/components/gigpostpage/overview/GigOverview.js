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
} from "@chakra-ui/react";
import GigTab from "./GigTab";
import TagsInput from "./Taginput";

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
              size={{ base: "sm", md: "lg" }}
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
        <InputRowGrid heading={"Gig metadata:"} input={<GigTab />} />
        <InputRowGrid
          heading={"Search tag"}
          text={
            "Tag Gig with buzz words that are relevant to the services you offer. Use all 5 tags to get found."
          }
          input={<TagsInput />}
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
      <Box w={{ base: "100%", md: "75%" }} gap={{ base: 10 }}>
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
