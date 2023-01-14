import { Flex, Box, Text, Icon, Image, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { useHeaderContext } from "../Contexts/HeaderContexts";



export function Header(){
    
    const {isSlugPage}  = useHeaderContext()

    return(
        <Flex w="100%" h="20" maxWidth="100%" as="header" mx="auto"  px="8" align='center' bg="Light.White"  >
                {isSlugPage && ( 
                    <Box ml="auto" position="absolute" >
                        <Link href="/">
                            <IconButton  h="20" background="transparent" _hover={{background:"transparent"}} icon={<Icon  as={IoIosArrowBack} />} aria-label="Previous page"/>
                        </Link>
                    </Box> 
                )}
                <Box margin="auto" bg="white">
                    <Link href="/">
                        <Image src="/Logo.svg" alt="Logo World Trip"/>
                    </Link>
                </Box>
        </Flex>
    )
}