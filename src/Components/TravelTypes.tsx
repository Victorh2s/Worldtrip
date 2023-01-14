import { Flex, Box, Text, Image, SimpleGrid } from "@chakra-ui/react";

export function TravelTypes(){
    return(
        <SimpleGrid minChildWidth="140px" spacing={["6","8"]} w="80%" minHeight="145px" margin="auto" px="6"  mt="8">
                <Box flex="1" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Image src="cocktail.png" alt="logo" width="14" height="14"  />
                    <Text  textAlign="center" mt="2" fontWeight="600" fontSize="18px" width="158px">vida noturna</Text>
                </Box>
                <Box flex="1" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Image src="surf.png" alt="logo" width="14" height="14"  />
                    <Text  textAlign="center" mt="2" fontWeight="600" fontSize="18px" width="158px">praia</Text>
                </Box>
                <Box flex="1" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Image src="building.png" alt="logo" width="14" height="14"  />
                    <Text  textAlign="center" mt="2" fontWeight="600" fontSize="18px" width="158px">moderno</Text>
                </Box>
                <Box flex="1" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Image src="museum.png" alt="logo" width="14" height="14"  />
                    <Text  textAlign="center" mt="2" fontWeight="600" fontSize="18px" width="158px">clássico</Text>
                </Box>
                <Box flex="1" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Image src="earth.png" alt="logo" width="14" height="14"  />
                    <Text  textAlign="center" mt="2" fontWeight="600" fontSize="18px" width="158px">e mais...</Text>
                </Box>
        </SimpleGrid>
    )
}


