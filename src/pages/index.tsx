import Head from 'next/head'
import { Banner } from '../Components/Banner'
import { Header } from '../Components/Header'
import { TravelTypes } from '../Components/TravelTypes'
import { Flex, Box, Text, Divider, Stack } from "@chakra-ui/react";
import { ContinentsSlide } from '../Components/ContinentsSlide';
import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { GetStaticProps } from 'next';
import Link from 'next/link';

export interface Props{
  id: string,
  slug:string,
  title: string,
  subtitle: string,
  img: string,
  moreInfo:{
    about: string,
    citys:[
      {
        id: string,
        city_img: string,
        city_name: string,
        country_img: string,
        contry_name: string,
      },
    ]
  },
  createdAt: new () => Date
}




export default function Home() {
 
  const [data,setData]= useState<Props[]>([]);

  useEffect(() => {
    api.get('Continentes').then(data => setData(data.data))
  },[])

  const newData = data.map((cont) => {
    return {
      id: cont.id,
      slug: cont.slug,
      title: cont.title,
      subtitle: cont.subtitle,
      img: cont.img
    }
  })

  

  return (
    <>
      <Head>
        <title>World Trip</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="svg" href="/Logo.svg" />
      </Head>
      <Box w="100%" h="145px" >

        <Banner/>
        <TravelTypes  />
        <Box width="100%" marginTop={55}>
          <Divider  borderColor="Dark.HeadingAndText" width="90px" margin="auto"   />
        </Box>
        <Stack width="100%" margin="auto" textAlign="center" mt="52px" mb="45px" p="6">
          <Text fontSize="36px" fontWeight="500" color="Dark.HeadingAndText">Vamos Nessa?</Text>
          <Text fontSize="36px" fontWeight="500" color="Dark.HeadingAndText" >Então escolha seu continente</Text>
        </Stack>
        
        <ContinentsSlide data={newData} />
        <Box marginTop="50px" w="100%" h="5px"></Box>
      </Box>
    
    </>
  )
}


