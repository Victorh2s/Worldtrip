import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors:{
        gray:{
            "900": "#181B23",
            "800": "#1F2029",
            "700": "#353646",
            "600": "#4B4D63",
            "500": "#616480",
            "400": "#797D9A",
            "300": "#B3B5C6",
            "100": "#D1D2DC",
            "50": "#EEEEF2"
        },
        Dark: {
         "Black":"#000000",
         "HeadingAndText":"#47585B",
         "Info":"#999999",
        },
        Light:{
          "White":"#FFFFFF",
          "HeadingAndText":"#F5F8FA",
          "Info":"#DADADA"
        },
        Icons:{
          "Icons":"#FFBA08"
        }
    },
    fonts:{
        info: 'Poppins',
        body: 'Barlow',
    },
    styles:{
        global:{
            body:{
                bg: 'Light.HeadingAndText',
                color: 'Dark.HeadingAndText'
            }
        }
    }
})