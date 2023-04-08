import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Box,
  Stack,
  RadioGroup,
  Radio,
  Text,
} from "@chakra-ui/react";
import RadioInputs from "./Radio";

export default function () {
  return (
    <>
      {" "}
      <Tabs variant="rounded" colorScheme="blue" borderWidth={"1px"}>
        <TabList
          lineHeight={"20px"}
          display="flex"
          justifyContent="space-between"
          borderBottomWidth="1px"
        >
          <Tab _selected={{  backgroundColor: "#eeeeee",}} width={"100%"}>
            Style
          </Tab>
          <Tab width={"100%"} _selected={{   backgroundColor: "#eeeeee" }}
           borderLeftWidth="1px" 
           borderRightWidth="1px"
          >
           Logo Type
          </Tab>
          <Tab _selected={{ backgroundColor: "#eeeeee",}} width={"100%"}>
            File Format
          </Tab>
        </TabList>
        <Box
          pl={1}
          py={2}
          borderBottomWidth="1px"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          Select your logo style <Text color={"red.400"}>*</Text>
        </Box>

        <TabPanels lineHeight={"normal"}>
          <TabPanel>
            <RadioInputs/>
          </TabPanel>
          <TabPanel>
            <p>Tab 2 content</p>
          </TabPanel>
          <TabPanel>
            <p>Tab 3 content</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
