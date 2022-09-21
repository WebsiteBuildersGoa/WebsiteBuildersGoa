import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function NotFound() {
    return (
        <Box textAlign="center" py={40} px={6}>
            <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bgGradient="linear(to-br,  white, #15aabf)"
                backgroundClip="text">
                404
            </Heading>
            <Text bgGradient= "linear(to-br,  white, #15aabf)"
            backgroundClip="text"
        fontSize="18px" mt={5} mb={2}>
                Page Not Found
            </Text>
            <Text bgGradient= "linear(to-br,  white, #15aabf)"
            backgroundClip="text"color={'gray.500'} mb={6}>
                The page you're looking for does not seem to exist
            </Text>

            <Button
                href="Home"
                colorScheme="teal"
                bgGradient="linear(to-br, #228be6, #15ef29)"
                color="white"
                variant="solid">
                Go to Home
            </Button>
        </Box>
    );
}