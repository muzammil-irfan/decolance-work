import {Tabs, TabList, TabPanels, Tab, TabPanel ,TabIndicator, Box, Stack, RadioGroup, Radio} from '@chakra-ui/react'

export default function (){
    return(
        <>
        
        <Tabs position="relative"  border="1px"
                borderColor="#c5c5c5"
                borderRadius={10}
                
                >
    <TabList display="flex" justifyContent="space-between" lineHeight={"20px"}>
      <Tab width="full">One</Tab>
      <Tab width="full" >Two</Tab>
      <Tab width="full">Three</Tab>
    </TabList>
    <TabIndicator
      mt="-1.5px"
      height="1px"
      bg="blue.500"
      borderRadius="1px"
    />
        <Box 
        lineHeight={"10"}
        textAlign={"left"}
        borderBottom="1px"
        borderColor="#c5c5c5"
        >
            Select your logo style *</Box>
    <TabPanels lineHeight={"10"} >
      <TabPanel>
      <RadioGroup >
      <Stack direction='row'  display={"flex"} flexWrap={"wrap"}>
        <Radio value='1'>First</Radio>
        <Radio value='2'>Second</Radio>
        <Radio value='3'>Third</Radio>
        <Radio value='4'>First</Radio>
        <Radio value='5'>Second</Radio>
        <Radio value='6'>Third</Radio>
        <Radio value='7'>First</Radio>
        <Radio value='8'>Second</Radio>
        <Radio value='9'>Third</Radio>
        <Radio value='10'>First</Radio>
        <Radio value='11'>Second</Radio>
        <Radio value='12'>Third</Radio>
      </Stack>
    </RadioGroup>
      </TabPanel>
      <TabPanel >
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
        </>
    )
}