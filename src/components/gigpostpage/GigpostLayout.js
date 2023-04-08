import "../../dist/css/gigpost.css";
import { Box, Flex,  } from "@chakra-ui/react";
import { Button,  Steps, theme } from "antd";
import { useState } from "react";
import GigOverview from "./overview/GigOverview";
import GigPostDone from "./overview/GigpostDone";
import GigPricing from "./pricing/GigPricing";
import GigDescription from "./description/GigDescription";
import GigRequirement from "./requirements/GigRequirement";
import GigPublish from "./publish/GigPublish";
import GigGallery from "./gallery/GigGallery";
const steps = [
  {
    title: <Box display={{ base: "none", md: "block" }}>Overview</Box>,
    content: <GigOverview />,
  },
  {
    title: <Box display={{ base: "none", md: "block" }}>Pricing</Box>,
    content: <GigPricing />,
  },
  {
    title: <Box display={{ base: "none", md: "block" }}>Description & FAQ</Box>,
    content: <GigDescription />,
  },
  {
    title: <Box display={{ base: "none", md: "block" }}>Requirements</Box>,
    content: <GigRequirement />,
  },
  {
    title: <Box display={{ base: "none", md: "block" }}>Gallery</Box>,
    content: <GigGallery />,
  },
  {
    title: <Box display={{ base: "none", md: "block" }}>Publish</Box>,
    content: <GigPublish />,
  },
];
const GigPostLayout = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "100vh",
    textAlign: "center",
    borderLeft: `2px solid ${token.colorBorder}`,
    width: "80%",
  };
  return (
    <>
      <Flex>
        <Box px={{ base: "0", md: "10" }} gap={5}>
          <Steps
            current={current}
            className="gigpost_Container_steps"
            items={items}
            direction={"vertical"}
            responsive={true}
            size="small"
            labelPlacement="vertical"
          />
        </Box>
        <Box style={contentStyle}>{steps[current].content}</Box>
      </Flex>
      <div
        style={{
          marginTop: 44,
          display: "flex",
          justifyContent: "flex-end",
          borderTop: "1px solid #c5c5c5",
          paddingTop: 20,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && <GigPostDone />}
        {current > 0 && current < steps.length - 1 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default GigPostLayout;
