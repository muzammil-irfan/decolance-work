import "../../dist/css/gigpost.css";
import { Box, Flex } from "@chakra-ui/react";
import { Button, Steps, theme } from "antd";
import { useState } from "react";
import GigOverview from "./overview/GigOverview";
import GigPostDone from "./overview/GigpostDone";
import GigPricing from "./pricing/GigPricing";
import GigDescription from "./description/GigDescription";
import GigRequirement from "./requirements/GigRequirement";
import GigPublish from "./publish/GigPublish";
import GigGallery from "./gallery/GigGallery";
import StepsSideBar from "./StepsSideBar";

const GigPostLayout = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const prev = () => {
    setCurrent(current - 1);
  };
  const steps = [
    {
      title: <Box>Overview</Box>,
      content: (
        <Box>
          <GigOverview />
        </Box>
      ),
    },
    {
      title: <Box>Pricing</Box>,
      content: (
        <Box>
          <GigPricing />
        </Box>
      ),
    },
    {
      title: <Box>Description & FAQ</Box>,
      content: (
        <Box>
          <GigDescription />
        </Box>
      ),
    },
    {
      title: <Box>Requirements</Box>,
      content: (
        <Box>
          <GigRequirement />
        </Box>
      ),
    },
    {
      title: <Box>Gallery</Box>,
      content: (
        <Box>
          <GigGallery />
        </Box>
      ),
    },
    {
      title: <Box>Publish</Box>,
      content: (
        <Box>
          <GigPublish prev={prev} />
        </Box>
      ),
    },
  ];
  const next = () => {
    setCurrent(current + 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "100vh",
    textAlign: "center",
    width: "98%",
  };
  return (
    <>
      <StepsSideBar>
        <Box>
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
      </StepsSideBar>
      <Box display={"flex"}>
        <Box
          px={{ base: "0", md: "10" }}
          display={{ base: "none", md: "none", lg: "block" }}
          gap={{ lg: "5" }}
        >
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
        <Box
          style={contentStyle}
          borderLeft={{
            sm: "none",
            md: "none",
            lg: `2px solid ${token.colorBorder}`,
          }}
        >
          {steps[current].content}
        </Box>
      </Box>
      <Box
        style={{
          marginTop: 44,
          display: "flex",
          borderTop: "1px solid #c5c5c5",
          paddingTop: 20,
        }}
        justifyContent={{
          base: "space-evenly",
          md: "flex-end",
          lg: "flex-end",
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Save & continue
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
            Go Back
          </Button>
        )}
      </Box>
    </>
  );
};

export default GigPostLayout;
