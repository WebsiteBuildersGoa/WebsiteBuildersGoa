import { chakra, Stack, useColorModeValue, Container, Link, Box, Button } from '@chakra-ui/react';

const Question = () => {
    return (
        <Container maxW="5xl" p="16" mt="30px">
            <Banner />
        </Container>
    );
};

const Banner = () => {
    return (
        <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={5}
            alignItems={{ base: 'flex-start', md: 'center' }}
            justifyContent="space-between"
            rounded="lg"
            boxShadow="md"
            bgGradient="linear(to-br,  white, #15aabf)"
            p={{ base: 8, md: 16 }}
        >
            <Box>
                <chakra.h1 fontSize="4xl" lineHeight={1.2} fontWeight="bold">
                    Ready to get started?
                </chakra.h1>
                <chakra.h2
                    fontSize="2xl"
                    lineHeight={1.2}
                    fontWeight="bold"
                    bgGradient="linear(to-l, #0ea5e9,#2563eb)"
                    bgClip="text"
                >
                    Any Questions? Get in touch.
                </chakra.h2>
            </Box>
            <Stack
                direction={{ base: 'column', sm: 'row' }}
                spacing={{ base: 0, sm: 3 }}
                w={{ base: '100%', sm: 'auto' }}
            >
                <Button
                    as={Link}
                    href="pricing"
                    color="white"
                    variant="solid"
                    size="lg"
                    rounded="md"
                    mb={{ base: 2, sm: 0 }}
                    lineHeight={1}
                    bgGradient="linear(to-l, #0ea5e9,#2563eb)"
                    _hover={{ bgGradient: 'linear(to-l, #0ea5e9,#2563eb)' }}
                >
                    Get Free Quote
                </Button>
                {/* <Button
                    as={Link}
                    href="signup"
                    size="lg"
                    rounded="md"
                    mb={{ base: 2, sm: 0 }}
                    bg={useColorModeValue('gray.200', 'gray.600')}
                    _hover={{ bg: useColorModeValue('gray.300', 'gray.500') }}
                    lineHeight={1}
                >
                    Learn more
                </Button> */}
            </Stack>
        </Stack>
    );
};

export default Question;