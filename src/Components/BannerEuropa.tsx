import { Box, Image, Flex, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

export function BannerEuropa(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })
    
    return(
        <Flex width="100%" height="368.21px" bgImg="/bannereu.png" bgRepeat="no-repeat" bgPosition="center"  backgroundSize="cover"  position="relative">
            <Box w="100%" height="368.21px" background="black" opacity="40%" position="absolute"></Box>
            <Flex flex="1" alignItems="end" justifyContent="start"  padding="62px" zIndex={15}>
                    <Text fontSize="36px"  fontWeight="500" fontFamily="info" color="Light.HeadingAndText">Europa</Text>
            </Flex>
        </Flex>
    )
}