import type { AppProps } from 'next/app'
import { theme } from '../styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { Header } from '../Components/Header'
import { HeaderContext } from '../Contexts/HeaderContexts'
import { createServer  } from 'miragejs'



                          

createServer({
  routes(){
    this.namespace= "api";

    this.get("/Continentes", () => {
      return[
        
          {
            id: "1",
            slug:"africa",
            title:"África",
            subtitle:"O continente da biodiversidade e multiculturas.",
            img: "/africa.jpg",
          },
          {
            id: "2",
            slug:"america-do-norte",
            title:"America do Norte",
            subtitle:"O segundo maior continente do mundo.",
            img: "/america-do-norte.jpg",
          },
          {
            id: "3",
            slug:"America-Central",
            title:"America Central",
            subtitle:"O reino tropical.",
            img: "/america-central.jpg",
          },
          {
            id: "4",
            slug:"America-do-Sul",
            title:"America do Sul",
            subtitle:"O continente mais bonito.",
            img: "/america-do-sul.jpg",
          },
          {
            id: "5",
            slug:"Artártica",
            title:"Artártica",
            subtitle:"O continente mais frio.",
            img: "/antartica.jpg",
          },
          {
            id: "6",
            slug:"Asia",
            title:"Ásia",
            subtitle:"O maior dos continentes",
            img: "/asia.jpg",
          },
          {
            id: "7",
            slug:"Europa",
            title:"Europa",
            subtitle:"O continente mais antigo.",
            img: "/europa.jpg",
          },
          {
            id: "8",
            slug:"oceania",
            title:"Oceania",
            subtitle:"A união de ilhas.",
            img: "/oceania.jpg",
          },
        
        ]
    })
  }
});


export default function App({ Component, pageProps }: AppProps) {


  return (

  <ChakraProvider theme={theme}>
      <HeaderContext>
        <Header />
      </HeaderContext>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}
