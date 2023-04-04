import { Box, Heading, SimpleGrid, Stack, Text, Image } from '@chakra-ui/react'
import React from 'react'

export default function ExploreGigMarketplace() {
  return (
    <Stack alignItems={"center"} gap={20} py={{base:10,md:20}} px={{xl:20}}>
        <Heading fontWeight={"semibold"} fontSize={{base:"24px",lg:"40px"}}textAlign={{base:"center",md:"start"}}> 
            Explore Gig Marketplace
        </Heading>
        <SimpleGrid columns={{base:2,xl:4}} width={"full"} gap={{base:8,xl:16}} >
            {
                gigsData.map(item=>{
                    return <GigBox title={item.title} imageUrl={"/images/home/gigs" + item.imageUrl} key={item.title} />
                })
            }
        </SimpleGrid>
    </Stack>
  )
}

const GigBox = ({title,imageUrl})=>{
    return (
        <Stack py={{base:4,md:10}} w={{base:"full",md:"290px"}} bg="brand.900" borderRadius={"50px 0px 50px 0px"} justifyContent="center" alignItems="center">  
            <Image src={imageUrl} />
            <Text color="brand.800" fontWeight="semibold" py={4} fontSize={{base:"12px",lg:"19px"}}>
                {title}
            </Text>
        </Stack>
    )
}

const gigsData = [
    {
        title:"Graphics & Design",
        imageUrl:"/graphics.png"
    },
    {
        title:"Digital Marketing",
        imageUrl:"/marketing.png"
    },
    {
        title:"Writing & Translation",
        imageUrl:"/writing.png"
    },
    {
        title:"Video & Animation",
        imageUrl:"/video.png"
    },
    {
        title:"Music & Audio",
        imageUrl:"/music.png"
    },
    {
        title:"Programming & Tech",
        imageUrl:"/programming.png"
    },
    {
        title:"Business",
        imageUrl:"/business.png"
    },
    {
        title:"Lifestyle",
        imageUrl:"/lifestyle.png"
    },
    {
        title:"Data",
        imageUrl:"/data.png"
    },
    {
        title:"Blockchain",
        imageUrl:"/blockchain.png"
    },
    {
        title:"Finance",
        imageUrl:"/finance.png"
    },
    {
        title:"Customer Service",
        imageUrl:"/customer.png"
    },
]