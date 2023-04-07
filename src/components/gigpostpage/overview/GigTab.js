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
} from "@chakra-ui/react";

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
            Tab 1
          </Tab>
          <Tab width={"100%"} _selected={{   backgroundColor: "#eeeeee" }}
           borderLeftWidth="1px" 
           borderRightWidth="1px"
          >
            Tab 2
          </Tab>
          <Tab _selected={{ backgroundColor: "#eeeeee",}} width={"100%"}>
            Tab 3
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
          Select your logo style*
        </Box>

        <TabPanels lineHeight={"normal"}>
          <TabPanel>
            <p>Tab 1 content</p>
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
