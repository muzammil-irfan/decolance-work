import { Box, Checkbox, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { InputRowGrid } from "../overview/GigOverview";
import GigUploadFile, { ImagePicker } from "./GigUploadFile";
import { BiImageAdd } from "react-icons/bi";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { VscFilePdf } from "react-icons/vsc";

function GigGallery() {
  return (
    <Stack ml={4}>
      <InputRowGrid
        heading={"Images(upto 3)"}
        text={
          <Text m={{ base: "0 auto", md: "0" }}>
            Get noticed by the right buyers with visual examples of your
            services.
          </Text>
        }
        input={
          <Flex
            gap={2}
            flexWrap={"wrap"}
            justifyContent={{
              base: "center",
              md: "flex-start",
              lg: "flex-start",
            }}
          >
            <ImagePicker
              acceptImageType={"image/png,image/jpeg,image/jpg"}
              demoIcon={<BiImageAdd fontSize={"60px"} color={"#c7c7c7"} />}
              demoText={"Drag & drop a Photo or "}
              demoText2={"Browse "}
            />
            <ImagePicker
              acceptImageType={"image/png,image/jpeg,image/jpg"}
              demoIcon={<BiImageAdd fontSize={"60px"} color={"#c7c7c7"} />}
              demoText={"Drag & drop a Photo or "}
              demoText2={"Browse "}
            />
            <ImagePicker
              acceptImageType={"image/png,image/jpeg,image/jpg"}
              demoIcon={<BiImageAdd fontSize={"60px"} color={"#c7c7c7"} />}
              demoText={"Drag & drop a Photo or "}
              demoText2={"Browse "}
            />
          </Flex>
        }
      />
      <InputRowGrid
        heading={"Video (one only)"}
        text={
          <Text m={{ base: "0 auto", md: "0" }}>
            Capture buyers' attention with a video that showcases your service.
          </Text>
        }
        input={
          <Box
            className=""
            display={"flex"}
            justifyContent={{
              base: "center",
              md: "flex-start",
              lg: "flex-start",
            }}
          >
            <ImagePicker
              acceptImageType={"video/*"}
              demoIcon={
                <AiOutlineVideoCameraAdd fontSize={"60px"} color={"#c7c7c7"} />
              }
              demoText={"Drag & drop a Video or "}
              demoText2={"Browse "}
            />
          </Box>
        }
      />
      <InputRowGrid
        heading={"Documents (up to 2)"}
        text={
          <Text m={{ base: "0 auto", md: "0" }}>
            Show some of the best work you created in a document (PDFs only).
          </Text>
        }
        input={
          <Flex
            className=""
            gap={2}
            flexWrap={"wrap"}
            justifyContent={{
              base: "center",
              md: "flex-start",
              lg: "flex-start",
            }}
          >
            <ImagePicker
              acceptImageType={"application/pdf"}
              demoIcon={<VscFilePdf fontSize={"60px"} color={"#c7c7c7"} />}
              demoText={"Drag & drop a Pdf or "}
              demoText2={"Browse "}
            />
            <ImagePicker
              acceptImageType={"application/pdf"}
              demoIcon={<VscFilePdf fontSize={"60px"} color={"#c7c7c7"} />}
              demoText={"Drag & drop a Pdf or "}
              demoText2={"Browse "}
            />
          </Flex>
        }
      />
      <InputRowGrid
        input={
          <Flex
            borderTopWidth={"1px"}
            pt={4}
            alignItems={"flex-start"}
            textAlign={"left"}
            gap={2}
          >
            <Checkbox></Checkbox>{" "}
            <Text>
              I declare that these materials were created by myself or by my
              team and do not infringe on any 3rd party rights. I understand
              that the illegal use of digital assets is against Fiverr’s Terms
              of Service and may result in blocking my account.
            </Text>
          </Flex>
        }
      />
    </Stack>
  );
}

export default GigGallery;
