import { Box, Image, Flex, Stack, Text, useBreakpointValue, SimpleGrid } from "@chakra-ui/react";

export function TwoColumnsEu(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })
    
    return(
        <Flex width="100%" minHeight="350px" padding="35px" display={isWideVersion ? "flex" : "inline-block"} alignItems="center" justifyContent="center">
            <Flex flex="1"   padding="15px" >
                    <Text fontSize="24px" align="justify" lineHeight="36px" color="Dark.Headings"> A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</Text>
            </Flex>
            <SimpleGrid flex="1"  padding="15px" display="flex" flexDirection="row" >
                <Box flex="1" display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
                    <Text  textAlign="center" mt="2" fontWeight="600" fontSize="40px" color={"Icons.Icons"}>50</Text>
                    <Text  textAlign="center" mt="2" fontWeight="600" fontSize="25px" marginTop="-10px" width="100%">países</Text>
                </Box>
                <Box flex="1" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Text  textAlign="center" mt="2" fontWeight="600" fontSize="40px" color={"Icons.Icons"}>60</Text>
                    <Text  textAlign="center" mt="2" fontWeight="600" fontSize="25px" marginTop="-10px" width="100%">línguas</Text>
                </Box>
                <Box flex="1" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Text  textAlign="center" mt="2" fontWeight="600" fontSize="40px" color={"Icons.Icons"}>27</Text>
                    <Text  textAlign="center" mt="2" fontWeight="600" fontSize="25px" marginTop="-10px" width="100%">cidades {isWideVersion ? "+100" : "+"}</Text>
                </Box>
            </SimpleGrid>
        </Flex>
    )
}