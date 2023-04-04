
import { Box } from '@chakra-ui/react'
import React from 'react'
import Banner from '../components/homepage/Banner'
import ExploreGigMarketplace from '../components/homepage/ExploreGigMarketplace'
import FindWorkByCategory from '../components/homepage/FindWorkByCategory'
import HireAnExpertFreelancer from '../components/homepage/HireAnExpertFreelancer'
import Services from '../components/homepage/services'
import CommonContainer from '../components/shared/CommonContainer'

export default function HomePage() {
  return (
    <Box py={10}>
    <CommonContainer >
      <Banner />
      <Services />
    </CommonContainer>
    <HireAnExpertFreelancer />
    <CommonContainer >
      <ExploreGigMarketplace />
      <FindWorkByCategory />
    </CommonContainer>
    </Box>
  )
}
