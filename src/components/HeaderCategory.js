import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  useDisclosure,
  Button,
  ButtonGroup,
  HStack,
  Text,
  Stack,
  SimpleGrid,
  Box,
  Heading,
  StackDivider,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

export default function CommonHeaderCategory({ name, structured, linksList }) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        placement="bottom-start"
        closeOnBlur={true}
      >
        <PopoverTrigger>
          <HStack cursor="pointer" onClick={onToggle}>
            <Text w="fit-content" color="#707070" fontSize="18px" fontWeight="medium">
              {name}
            </Text>
            <BiChevronDown size="18px" />
          </HStack>
        </PopoverTrigger>
        <PopoverContent width="max-content">
          <PopoverArrow />

          <PopoverBody>
            {structured ? (
              <Stack p={8} width="max-content">
                <SimpleGrid gap={12} columns={linksList.length}>
                  {linksList.map((linksListItem, index) => {
                    return (
                      <Stack
                        gap={5}
                        borderRight={
                          linksList.length - 1 === index ? "0px" : "2px"
                        }
                        borderColor="#c5c5c5"
                        pr={linksList.length - 1 === index ? 0 : 10}
                        divider={<StackDivider color="#c5c5c5" border="1px" />}
                      >
                        {linksListItem.map((item) => {
                          return (
                            <Stack
                              gap={2}
                              height={item.list.length > 5 ? "300px" : "220px"}
                            >
                              <Heading fontSize="22px" fontWeight="semibold">
                                {item.title}
                              </Heading>
                              <Stack>
                                {item.list.map((listData) => {
                                  return (
                                    <Text
                                      cursor="pointer"
                                      fontSize="18px"
                                      color="#707070"
                                      fontWeight="medium"
                                    >
                                      {listData.label}
                                    </Text>
                                  );
                                })}
                              </Stack>
                            </Stack>
                          );
                        })}
                      </Stack>
                    );
                  })}
                </SimpleGrid>
              </Stack>
            ) : (
              <Stack p={8} width="max-content">
                <SimpleGrid gap={12} columns={linksList.length}>
                {linksList.map((linksListItem, index) => {
                    return (
                        <Stack  
                        gap={1}
                        borderRight={
                          linksList.length - 1 === index ? "0px" : "4px"
                        }
                        borderColor="#c5c5c5"
                        pr={linksList.length - 1 === index ? 0 : 10}
                        >
                                {linksListItem.map((listData) => {
                                  return (
                                    <Text
                                      cursor="pointer"
                                      fontSize="18px"
                                      color="#707070"
                                      fontWeight="medium"
                                    >
                                      {listData.label}
                                    </Text>
                                  );
                                })}
                              </Stack>
                    )
                    })}
                </SimpleGrid>
              </Stack>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
