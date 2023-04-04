import { Flex, Box, Image, Stack, Heading, Text } from "@chakra-ui/react";
import React from "react";
import CommonContainer from "../shared/CommonContainer";

export default function HireAnExpertFreelancer() {
  return (
    <Flex bg={"brand.50"} py={{base:10,md:20}}>
      <CommonContainer>
        <Flex flexDirection={{base:"column",md:"row"}}>
          <Stack width={{md:"40%"}} gap={2}>
            <Box>
              <Heading fontWeight={"semibold"} fontSize={{base:"24px",md:"40px"}}>
                Hire An Expert Freelancer With The Skills For Success
              </Heading>
            </Box>
            <Box>
              <Heading as="h6" fontWeight={500} fontSize={{base:"16px",md:"22"}}>
                Find The Best Rates To Fit Your Budget
              </Heading>
              <Text fontSize={{base:"14px",md:"21"}} color="grey" py={4} lineHeight="25px">
                Our decentralized ecosystem of freelancers is designed to offer
                the best services at the best prices. Filter available
                freelancers by rate, service, and more, depending on your needs
                and budget. Now you can hire the best freelancers with the rate
                you want and the quality you deserve.
              </Text>
            </Box>
            <Box>
              <Heading as="h6" fontWeight={500} fontSize={{base:"16px",md:"22"}}>
                Order Your Gig With Just A Few Clicks
              </Heading>
              <Text fontSize={{base:"14px",md:"21"}} color="grey" py={4} lineHeight="25px">
                Simple and easy is what we do best. Link up your digital wallet,
                exchange payment using cryptocurrency, and let the countdown
                begin. Once you've ordered your chosen gig, your freelancer will
                get to work providing you with creative services that exceed
                your expectations.
              </Text>
            </Box>
            <Box>
              <Heading as="h6" fontWeight={500} fontSize={{base:"16px",md:"22"}}>
                Receive And Review The Delivery
              </Heading>
              <Text fontSize={{base:"14px",md:"21"}} color="grey" py={4} lineHeight="25px">
                It's delivery day! Your freelancer will send the files to you
                digitally, in your preferred format, and you can begin the
                review process. We connect you with freelancers who are
                flexible, professional, and collaborative, and will work with
                you to ensure the result is even better than you imagined.
              </Text>
            </Box>
          </Stack>
          <Stack width={{md:"60%"}} alignItems="center" justifyContent="center">
            <Image src="/images/home/video-hire-an-expert.png"  />
          </Stack>
        </Flex>
      </CommonContainer>
    </Flex>
  );
}
