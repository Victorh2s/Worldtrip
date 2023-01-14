import { Box, Image, Flex, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })
    
    return(
        <Flex width="100%" height="368.21px" bgImg="/Background.png" bgRepeat="no-repeat" bgPosition="top, center"  px="4">
            <Flex flex="1" alignItems="center" justifyContent="center" >
                <Stack spacing="0">
                    <Text fontSize="36px"  fontWeight="500" fontFamily="info" color="Light.HeadingAndText">5 Continentes,</Text>
                    <Text fontSize="36px"  fontFamily="info" color="Light.HeadingAndText" >infinitas possibilidades.</Text>
                    <Text paddingTop="4" color="Light.Info" fontSize="18px">Chegou a hora de tirar do papel a viagem que você <br/> sempre sonhou. </Text>
                </Stack>
            </Flex>
            {isWideVersion && ( <Box flex="1"  bgImage="/Airplane.png" bgRepeat="no-repeat" bgPosition="bottom"></Box> )}
            
        </Flex>
    )
}