import { Box } from "@chakra-ui/react";
import GigPostLayout from "../components/gigpostpage/GigpostLayout";

export default function GigPostPage() {
  return (
    <>
      <Box p={10} px={{base:"2"}}>
        <GigPostLayout />
      </Box>
    </>
  );
}
