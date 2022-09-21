import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex  p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={2} w={'full'} maxW={'lg'}>
          <Heading mb ="50px"color='white'fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                color:'blue'
                // // bg: 'blue.400',
                // bgGradient:"linear(to-br,  white, #15aabf)", bgClip:"text"
                // // zIndex: -1,
              }}>
               GET A PROFESSIONAL
            </Text>
            <br />{' '}
            <Text  bgGradient="linear(to-br,  white, #15aabf)" bgClip="text" as={'span'}>
            WEBSITE FOR YOUR BUSINESS
            </Text>{' '}
          </Heading>
          <Text justifyContent="space-between" textAlign="justify"mb="40px"fontSize={{ base: 'md', lg: 'lg' }} color={'white'}>
        WebsiteBuilder Goa is a digital marketing and a website designing company with highly qualified professionals. Our team is highly skilled and experienced in understanding the general consumer behaviours and moderating the UX of the website according to the purchase behaviours. Your website will be carefully tailored with precisely following our proprietary 162 steps procedure which results in extremely high quality ERROR FREE WEBSITES which generates results.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
          {/* <Button>
                    <Link
                    href="signup"
                    color="white"
                    variant="solid"
                    size="lg"
                    rounded="md"
                    mb={{ base: 2, sm: 0 }}
                    lineHeight={1}
                    bgGradient="linear(to-l, #0ea5e9,#2563eb)"
                    _hover={{ bgGradient: 'linear(to-l, #0ea5e9,#2563eb)' }}>
                </Link>
                    Create Projects
                </Button> */}
            {<Button

            mt='30px'
             as={Link}
            href='signup'
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{ bgGradient: 'linear(to-l, #0ea5e9,#2563eb)'
                
              }}>
              Create Projects
            </Button> }
            {/* {/<Button rounded={'full'}>How It Works</Button> } */}
          </Stack>
        </Stack>
      </Flex>
      <Flex mt='0px'flex={1}>
        <Image
        mt='60px'
       
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'asset/scott.jpg'
          }
        />
      </Flex>
    </Stack>
  );
}