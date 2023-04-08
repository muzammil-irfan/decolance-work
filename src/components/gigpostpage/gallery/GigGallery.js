import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { InputRowGrid } from "../overview/GigOverview";
import GigUploadFile, { ImagePicker } from "./GigUploadFile";
import { BiImageAdd } from "react-icons/bi";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { GrDocumentPdf } from "react-icons/gr";

function GigGallery() {
  return (
    <Stack ml={4}>
      <InputRowGrid
        heading={"Images(upto 3)"}
        text={
          "Get noticed by the right buyers with visual examples of your services."
        }
        input={
          <Flex gap={2}>
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
          "Capture buyers' attention with a video that showcases your service."
        }
        input={
          <Box className="">
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
          "Show some of the best work you created in a document (PDFs only)."
        }
        input={
          <Box className="">
            <ImagePicker
              acceptImageType={"application/pdf"}
              demoIcon={<GrDocumentPdf fontSize={"60px"} color={"#c7c7c7"} />}
              demoText={"Drag & drop a Pdf or "}
              demoText2={"Browse "}
            />
          </Box>
        }
      />
    </Stack>
  );
}

export default GigGallery;
