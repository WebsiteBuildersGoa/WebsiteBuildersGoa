import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Button,
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
              }}>
               GET A PROFESSIONAL
            </Text>
            <br />{' '}
            <Text  bgGradient="linear(to-br,  white, #26f705)" bgClip="text" as={'span'}>
            WEBSITE FOR YOUR BUSINESS
            </Text>{' '}
          </Heading>
          <Text justifyContent="space-between" textAlign="justify"mb="40px"fontSize={{ base: 'md', lg: 'lg' }} color={'white'}>
          WebsiteBuilders Goa is a digital marketing and a website designing company with highly qualified professionals. Our team is highly skilled and experienced in understanding the general consumer behaviours and moderating the UX of the website according to the purchase behaviours.
          </Text>
          <Button
            as={Link}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={700}
            color={"white"}
             bgGradient="linear(to-br,  white, #26f705)" bgClip="text"
            href={"pricing"}
            _hover={{
              textDecoration: "none",
              color: "white",
            }}

          >
            Get Free Quote
          </Button>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
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
