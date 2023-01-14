import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { BannerEuropa } from "../Components/BannerEuropa";
import { GridCities } from "../Components/GridCities";
import { TwoColumnsEu } from "../Components/TwoColumnsEu";

export default function Continents() {

  return (
    <>
      <BannerEuropa />
      <TwoColumnsEu />
      <GridCities />
    </>
  )
}


