import { Container } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Button, Text } from '@chakra-ui/react'
function Header() {
    
    return(
        <div>
            <Container maxW='100%' bg='#6b93e3' color='#262626'>
                <Card align='center'>
                    <CardBody>
                        <Text   
                        bg="#fff"
                        bgClip="text"
                        fontSize='4xl'
                        >Domina el Terreno</Text>
                    </CardBody>
                    <CardFooter>
                        <Button m="2" colorScheme='blue'>Ver  Detalles </Button>
                        <Button  m="2"colorScheme='blue'>ver videos</Button>
                    </CardFooter>
                </Card>
            </Container>
        </div>
    )
}
export default Header