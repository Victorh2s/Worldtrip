import { Box, Flex, SimpleGrid, Text, useBreakpointValue, Icon, Image } from "@chakra-ui/react";
import Flag  from 'react-world-flags'

export function GridCities(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    const imgs= {
        Reino_Unido: "https://s3-alpha-sig.figma.com/img/839d/769a/09fd5ea34d2c270558583d90a952d2f3?Expires=1674432000&Signature=VpxPGRm9x96w41XlG9pLGRYJZBqXYPumf-wJ6XJJ5YhbC~sfAkihEcaFieLCqD5ZA2qHY1NuhuBjCwyiEnxJ2jaJy2OpmYV4Ixvht5rK6flHoEf3zZyRJiOhQj851EVt4LDF0Z4IReOlMzDXKPJNrLAaljYLjiHzq6z9BBm89prE9wHfdtU-ir366g5RGqp93ZABj1atatNBdEMtEuSYfZ6cPr-zpL2cif6fa-qCsgRsaiVadl5j0JT1ddVGHCFyZwXgkn30UrHTadhqpF691uGjPHMqJbyfoX9E~0RgA~a~ud4rGUXIW~lHo5YgkS7kj0oexVPgF0Cb7qEUcrq-Fg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        Paris:"https://s3-alpha-sig.figma.com/img/1c21/268e/693dd25a483603ff752fee647c63c88d?Expires=1674432000&Signature=KFWx8J-E00~NM51BBJMYwInVKwGztVcDV8T5ZIDZ0OqFBojbh2PlzHtREjjvDJNyz8JRd4j4hHKs6zUiATL1~I3jON5015ZHhiCf~85SqbloXkqJb1oxQpT04WvG4dSd7U0c8fTGzwuEyZW3VBJsyrdoCkegYhW4WJl1V0bueQ3HV9yQ03bLvs81MW2rsEcQEEUZa8RV1lATwWzMKC4hvBrI~QP1Y~QrBd3YEq0dXxyqsLdGFfbTl77Adkwdq17KSd9SsCBJ4T1GPIwSxRSfKx2LeRqqY2oyGgIJ4bYCfzk6YpNMfwFXW9KbeQ-kmmjL1ygG8wP0dK970Ev9urWzEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        Italia:"https://s3-alpha-sig.figma.com/img/f2d7/eddd/fc48f63507cc94f938afd448c7d8af2c?Expires=1674432000&Signature=L-2vf2RRJUGHlVmttyEHRxh~pzwrWG1DyAxsLILTY~VYYJQ6qpOWL9n8jqd2dQ49j~ALSPAb18ZMRZKsFRiXLFH7qE4KYbTIGj0W1DD8BW1z04XoHgOod80YHHYNyDrFqQndm7g1sJdfNkusFJmLRX-60KssAHc09ibXAAkiHQqsh98prrlU8t82ZlzXPI1sX7z6wQJP6ZilLhXyZ-djrGajubhALC1TYDQs2Ho8Inh1-ZheuvUN4YzNM6MSFloEf2c9FcSn6DrWm-TesMZGFaKg2MKvSkpdXHfz2boa7Dq-ToVzoM6H7d~rAaokMeqj-9iOBWKj7sngDSas-E1ZLg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        Republica_Tcheca:"https://s3-alpha-sig.figma.com/img/fa29/6de3/b0061638a1a5fa871a89173caa9e62dc?Expires=1674432000&Signature=HVFPbHAQKO29Jkd7hYHiHM2DNG43QgkeWb0HsMOky4~8U2d-ZCfNmcEwCESF5QPxLXS0Xf1-yE~VJ22MUkkmpIkZl1QFpSdbu~NoB-~TgC8rOYaVmKP3yhVbhR89ZM~SwvNdj7Bd~D7VIxpb7X4JkKe4cg28EFwJwrsPo3BIg0UkX1SRDTBhDlsQq-r50P75LjrmRCsM-gyEPjwFfVuBTH9Ijo4IlPTowS4KWoiFQalXKBrMboRS~FBmtwNuNN0z8ms1qmvztRB47ITkK1GhwfevtzqPUlFrumixYK18x-utIqosvDMzTwMlTdkFnnd9zfvLXVDc9Wc3XmOqqFW5Ig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        Holanda: "https://s3-alpha-sig.figma.com/img/a216/dd9d/438d40a947e2b1acdaa6d7adefeb6f35?Expires=1674432000&Signature=TdFdXcAU-WOou8eCaWcp22QjHOJqfcH-82u1508mEDUsK~odV9oxUoN1ArEyVU0xJdM9PciJIsxg8RNHzZiJUQVcnWE8c47nL-EQrwmE1-N1WuvBCdcplNKiAWvvjPeMUiUF71BkifCBTqWjOUh8CtcoEW0HvItlABhi7EqFozVjPsZobp4-IdT3OLEcnmROlcNUqAvlKc7i6ylbTodQZhxarvIyVQnACz3Xkf1v0FAidZ9~9E4j98kwTWS3hviQ~GpwUwHzG2w4ybrNfry2BYKa6mwgkx2uN87UelIgCZCEaCF~GU6YM5YgIpBokRyGKToUxYwIFCuw2LJbLjx5rg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    }
    
    return(
        <Box width="100%" minHeight="350px" padding="35px" display="flex" flexDirection="column" alignItems={isWideVersion ? "none" : "center"}>
            <Text fontSize="30px" align="justify" fontWeight="600" lineHeight="54px" color="Dark.HeadingAndText">Cidades +100</Text>

            <SimpleGrid minChildWidth="205px" spacing={["4","6"]} w="100%" marginTop="30px"  >
                <Box  height= "250px" width="225px" background="Light.White" margin={isWideVersion ? "none" : "0 auto"}>
                    <Box width="100%" height="150px" backgroundImage="/Londres.png" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover"></Box>
                    <Box width="100%" height="100px" padding="20px" display="flex" alignItems="center" justifyContent="center" border="1px" borderColor="#FFBA0880">
                        <Box width="70%">
                            <Text fontSize="20px" fontWeight="600" fontFamily="fonts.body">Londres</Text>
                            <Text fontSize="14px" color="Dark.Info" fontWeight="600" lineHeight="26px" fontFamily="fonts.body">Reino Unido</Text>
                        </Box>
                        <Box backgroundImage={`url(${imgs.Reino_Unido})`} backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition="center" width="30px" height="30px" borderRadius="50%"></Box>
                    </Box>
                </Box>
                <Box  height= "250px" width="225px" background="Light.White" margin={isWideVersion ? "none" : "0 auto"}>
                    <Box width="100%" height="150px" backgroundImage="/Paris.png" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover"></Box>
                    <Box width="100%" height="100px" padding="20px" display="flex" alignItems="center" justifyContent="center" border="1px" borderColor="#FFBA0880">
                        <Box width="70%">
                            <Text fontSize="20px" fontWeight="600" fontFamily="fonts.body">Paris</Text>
                            <Text fontSize="14px" color="Dark.Info" fontWeight="600" lineHeight="26px" fontFamily="fonts.body">França</Text>
                        </Box>
                        <Box backgroundImage={`url(${imgs.Paris})`} backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition="center" width="30px" height="30px" borderRadius="50%"></Box>
                    </Box>
                </Box>
                <Box  height= "250px" width="225px" background="Light.White" margin={isWideVersion ? "none" : "0 auto"}>
                    <Box width="100%" height="150px" backgroundImage="/Roma.png" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover"></Box>
                    <Box width="100%" height="100px" padding="20px" display="flex" alignItems="center" justifyContent="center" border="1px" borderColor="#FFBA0880">
                        <Box width="70%">
                            <Text fontSize="20px" fontWeight="600" fontFamily="fonts.body">Roma</Text>
                            <Text fontSize="14px" color="Dark.Info" fontWeight="600" lineHeight="26px" fontFamily="fonts.body">Italia</Text>
                        </Box>
                        <Box backgroundImage={`url(${imgs.Italia})`} backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition="center" width="30px" height="30px" borderRadius="50%"></Box>
                    </Box>
                </Box>
                <Box  height= "250px" width="225px" background="Light.White" margin={isWideVersion ? "none" : "0 auto"}>
                    <Box width="100%" height="150px" backgroundImage="/Praga.png" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover"></Box>
                   <Box width="100%" height="100px" padding="20px" display="flex" alignItems="center" justifyContent="center" border="1px" borderColor="#FFBA0880">
                        <Box width="70%">
                            <Text fontSize="20px" fontWeight="600" fontFamily="fonts.body">Praga</Text>
                            <Text fontSize="14px" color="Dark.Info" fontWeight="600" lineHeight="26px" fontFamily="fonts.body">República Tcheca</Text>
                        </Box>
                        <Box backgroundImage={`url(${imgs.Republica_Tcheca})`} backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition="center" width="30px" height="30px" borderRadius="50%"></Box>
                    </Box>
                </Box>
                <Box  height= "250px" width="225px" background="Light.White" margin={isWideVersion ? "none" : "0 auto"}>
                    <Box width="100%" height="150px" backgroundImage="/Amsterda.png" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover"></Box>
                   <Box width="100%" height="100px" padding="20px" display="flex" alignItems="center" justifyContent="center" border="1px" borderColor="#FFBA0880">
                        <Box width="70%">
                            <Text fontSize="20px" fontWeight="600" fontFamily="fonts.body">Amsterdã</Text>
                            <Text fontSize="14px" color="Dark.Info" fontWeight="600" lineHeight="26px" fontFamily="fonts.body">Holanda</Text>
                        </Box>
                        <Box backgroundImage={`url(${imgs.Holanda})`} backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition="center" width="30px" height="30px" borderRadius="50%"></Box>
                    </Box>
                </Box>
            </SimpleGrid>
        </Box>
    )
}