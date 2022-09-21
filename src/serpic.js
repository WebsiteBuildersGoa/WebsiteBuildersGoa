import { Box, Center, Heading, Text } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

export default function Informed() {
  return (
    <Box maxw="full" textAlign="center" py={14} px={8}>
      {/* <InfoIcon boxSize={'50px'} color={'blue.500'} /> */}
      {/* <Heading color='white'as="h2" size="xl" mt={6} mb={2}>
          SERVICES
        </Heading> */}
       
      <Text  textAlign="center"fontsize='4xl' fontWeight='800'   bgGradient="linear(to-br,  white, #15aabf)" bgClip="text">
      APP DEVELOPMENT AND MANAGED IT SERVICES 
          
      </Text>
      
      <br></br>
      <Text textAlign='center'fontsize='4xl' fontWeight='800'   bgGradient="linear(to-br,  white, #15aabf)" bgClip="text">
    
            Things we are famous for!!
      </Text>
    </Box>
  );
}