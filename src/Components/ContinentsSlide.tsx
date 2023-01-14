import React, { useRef, useState } from "react";
import { Box, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, } from "swiper";
import Link from "next/link";
import { Props } from "../pages";

interface ContinentsSlideProps {
    data:{
            id: string;
            slug: string;
            title: string;
            subtitle: string;
            img: string;
    }[]
} ;

export function ContinentsSlide( {data} : ContinentsSlideProps  ) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })


    return(
        
        <Box width={isWideVersion ? "86%" : "100%"} height="450px" margin="auto" >
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            style={{
                "--swiper-pagination-color": "#FFBA08",
                "--swiper-navigation-color":"#FFBA08",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "16px",
                "--swiper-pagination-bullet-horizontal-gap": "6px"
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[ Autoplay, Pagination, Navigation]}
            className="mySwiper"
            
            >
                {data.map((d) => (
                    <SwiperSlide key={d.id}>
                        <Box width="100%" height="450px" bgImage={d.img} bgRepeat="no-repeat" bgPosition="center" bgSize="cover" display="flex" alignItems="center" flexDirection="column" justifyContent="center" position="relative">
                            <Box w="100%" height="450px" background="black" opacity="60%" position="absolute"></Box>
                                <Link href="/europa" style={{zIndex:"10", display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"center"}}>
                                    <Text    fontSize="44" fontWeight="700" color="Light.HeadingAndText" zIndex="2"> {d.title} </Text>
                                    <Text   fontSize="20" fontWeight="700" color="Light.Info" zIndex="2">{d.subtitle}</Text>
                                </Link>
                        </Box>
                    </SwiperSlide>
                ))}

            </Swiper>
        </Box>
    )
}




