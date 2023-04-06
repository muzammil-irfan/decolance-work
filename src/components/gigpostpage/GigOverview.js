import { Select, Box, Heading, SimpleGrid, Stack, Text, Image, Input, Textarea, Grid, GridItem, Flex, TabIndicator } from '@chakra-ui/react'
import GigTab from './GigTab'

export default function GigOverview() {

    return (
        <>
            <Flex flexWrap="wrap" ml={10} mb={{ base: 20, lg: 20 }}>
                <Box w={{ base: "100%", md: "25%" }}>
                    <Grid templateColumns="1fr" gap={6}>
                        <GridItem h="10" >
                            <Heading fontWeight={"semibold"} fontSize={{ base: "20px", lg: "30px" }} textAlign={{ base: "", md: "start" }}>
                                Gig title
                            </Heading>
                        </GridItem>
                    </Grid>
                </Box>
                <Box w={{ base: "100%", md: "75%" }}>
                    <Grid templateColumns="1fr" gap={6}>
                        <GridItem h="10" >
                            <Text fontSize={"sm"} display={"flex"} justifySelf={"flex-start"} lineHeight={"32px"}>Place to include keywords that buyers would likely use to search for a service.</Text>
                            <Textarea placeholder="I will do something i am really good at" size="lg" />
                        </GridItem>
                    </Grid>
                </Box>
            </Flex>

            <Flex flexWrap="wrap" ml={10} mt={{ base:"40px"}}>
                <Box w={{ base: "100%", md: "25%" }}>
                    <Grid templateColumns="1fr" gap={6}>
                        <GridItem h="10" >
                            <Heading fontWeight={"semibold"} fontSize={{ base: "20px", lg: "30px" }} textAlign={{ base: "", md: "start" }}>
                                Category
                            </Heading>
                        </GridItem>
                    </Grid>
                </Box>
                <Box w={{ base: "100%", md: "75%" }}>
                    <Text fontSize={"sm"} display={"flex"} justifySelf={"flex-start"} lineHeight={"32px"}>Choose the category and sub-category most suitable for your Gig.</Text>

                    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>

                        <GridItem h="10" lineHeight={"32px"} >
                            <Select placeholder="Select a category">
                                <option value="category1">Category 1</option>
                                <option value="category2">Category 2</option>
                                <option value="category3">Category 3</option>
                            </Select>
                        </GridItem>
                        <GridItem h="10" lineHeight={"32px"} >
                            <Select placeholder="Select a sub-category">
                                <option value="sub-category1">Sub-Category 1</option>
                                <option value="sub-category2">Sub-Category 2</option>
                                <option value="sub-category3">Sub-Category 3</option>
                            </Select>
                        </GridItem>
                    </Grid>
                </Box>
            </Flex>
            <Flex flexWrap="wrap" ml={10} mt={{ base: "20px" }}>
                <Box w={{ base: "100%", md: "25%" }}>
                    <Grid templateColumns="1fr" gap={6}>
                        <GridItem h="10" >
                            <Heading fontWeight={"semibold"} fontSize={{ base: "20px", lg: "30px" }} textAlign={{ base: "", md: "start" }}>
                                Gig metadata:
                            </Heading>
                        </GridItem>
                    </Grid>
                </Box>
                <Box w={{ base: "100%", md: "75%" }}>
                    <GigTab />
                </Box>
            </Flex>
            <Flex flexWrap="wrap" ml={10} my={{ base: 20, lg: 20 }}>
                <Box w={{ base: "100%", md: "25%" }}>
                    <Grid templateColumns="1fr" gap={6}>
                        <GridItem h="10">
                            <Heading fontWeight={"semibold"} fontSize={{ base: "20px", lg: "30px" }} textAlign={{ base: "", md: "start" }}>
                                Search tag
                            </Heading>
                        </GridItem>
                    </Grid>
                </Box>
                <Box w={{ base: "100%", md: "75%" }}>
                    <Grid templateColumns="1fr" gap={6}>
                        <GridItem h="10" >
                            <Text fontSize={"sm"} display={"flex"} justifySelf={"flex-start"} lineHeight={"32px"}>Tag Gig with buzz words that are relevant to the services you offer. Use all 5 tags to get found.</Text>
                            <Textarea placeholder="I will do something i am really good at" size="lg" />
                        </GridItem>
                    </Grid>
                </Box>
            </Flex>

            {/* <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                <GridItem colSpan={1} bg="tomato" h="10" >

                </GridItem>
                <GridItem colSpan={3} bg="papayawhip" h="10"  >

                </GridItem>
            </Grid>
            <Stack alignItems={"start"} gap={10} px={{ xl: 20 }} >
                <SimpleGrid columns={{ base: 2, xl: 3, sm: 1 }} width={"full"} pl={4} gap={{ base: 8, xl: 8 }} >


                </SimpleGrid>
                <SimpleGrid columns={{ base: 2, xl: 2, sm: 1 }} pl={4} width={"full"} gap={{ base: 8, xl: 8 }} >
                    <Heading fontWeight={"semibold"} fontSize={{ base: "20px", lg: "30px" }} textAlign={{ base: "", md: "start" }}>

                        Category
                    </Heading>
                    <Input placeholder='Basic usage' />

                </SimpleGrid>
                <SimpleGrid columns={{ base: 2, xl: 2, sm: 1 }} pl={4} width={"full"} gap={{ base: 8, xl: 8 }} >
                    <Heading fontWeight={"semibold"} fontSize={{ base: "20px", lg: "30px" }} textAlign={{ base: "", md: "start" }}>
                        Search tags
                    </Heading>
                    <Input placeholder='Basic usage' />

                </SimpleGrid>
            </Stack> */}
        </>
    )
} 