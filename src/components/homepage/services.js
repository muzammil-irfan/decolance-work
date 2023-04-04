import React from 'react'
import {Flex,Box, Heading, Image, Stack} from "@chakra-ui/react";
import {Swiper,SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";

export default function Services() {
  return (
    <Stack alignItems="center" py={10}>
        <Heading fontWeight={"semibold"} fontSize={{base:"27px",md:"40px"}} textAlign={{base:"center",md:"none"}}>
            Popular professional services
        </Heading>
        <Flex width="100%" py={10} justifyContent="center">
            <Swiper 
            slidesPerView={"5"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@1.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@1.50": {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                "@2.00": {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                "@2.50": {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
            loop={true}
            className="mySwiper"
            >
                    {
                        servicesData.map(item=>{
                            return(
                                <SwiperSlide>
                                <Box key={item.imageUrl} px={{base:2,md:0}}>
                                    <Image src={item.imageUrl} w="full" />
                                </Box>
                </SwiperSlide>
                            )
                        })
                    }
            </Swiper>
        </Flex>
    </Stack>
  )
}

const servicesData  = [
    {
        imageUrl:"/images/home/services/logo-design.png"
    },
    {
        imageUrl:"/images/home/services/wordpress.png"
    },
    {
        imageUrl:"/images/home/services/voice-over.png"
    },
    {
        imageUrl:"/images/home/services/video-editing.png"
    },
    {
        imageUrl:"/images/home/services/social-media.png"
    },
]
