import { Fragment } from 'react';
import {
    Container,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    VStack,
    Flex,
    Text,
    Icon,
    Divider
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GoLocation } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const contactOptions = [
    {
        label: 'Address',
        value: 'Arambol, Goa, India',
        icon: GoLocation
    },
    {
        label: 'PHONE NUMBER',

        value: '+91-7602129292',
        icon: BsPhone
    },
    {
        label: 'EMAIL',
        value: 'websitebuildergoa@gmail.com',
        icon: HiOutlineMail
    }
];

const Contact = () => {
    return (
        <Container maxW="7xl" py={16} px={{ base: 4, md: 8 }}>
            <Stack spacing={10}>
                <Flex align="center" justify="center" direction="column">
                    <Heading  bgGradient="linear(to-br,white, #26f705)"  bgClip="text"fontSize="4xl" mb={2}>
                        Contact Us
                    </Heading>
                    <Text
                        color='white' fontSize="20px" textAlign="center">
                       Please Fill the form below or contact us via phone,whatsapp or mail if you have any questions or if u you want to discuss about your query.
                       
                    </Text>
                </Flex>
                <Stack

                    spacing={{ base: 2, md: 2 }}
                    direction={{ base: 'column', md: 'row' }}
                    justify="center"
                >
                    {contactOptions.map((option, index) => (
                        <Fragment key={index}>
                            <Stack

                                spacing={2} direction="column" justify="center" alignItems="center" px={14}>
                                <Icon as={option.icon} w={10} h={10} color="red" />
                                <Text color="rgb(5 243 5)"
                                    fontSize="20px" fontWeight="semibold">
                                    {option.label}
                                </Text>
                                <Text color="white" fontSize="15px" textAlign="center">
                                    {option.value}
                                </Text>
                            </Stack>
                            {contactOptions.length - 1 !== index && (
                                <Flex d={{ base: '1', md: 'flex' }}>
                                    <Divider orientation="none" />
                                </Flex>
                            )}
                        </Fragment>
                    ))}
                </Stack>
                <VStack
                    as="form"
                    spacing={8}
                    w="100%"
                    bg={useColorModeValue('white', 'gray.700')}
                    rounded="lg"
                    boxShadow="lg"
                    p={{ base: 5, sm: 10 }}
                >
                    <VStack spacing={4} w="100%">
                        <Stack w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
                            <FormControl id="name">
                                <FormLabel>NAME</FormLabel>
                                <Input type="text" placeholder="Your Name" rounded="md" />
                            </FormControl>
                            <FormControl id="email">
                                <FormLabel>EMAIL</FormLabel>
                                <Input type="email" placeholder="test@gmail.com" rounded="md" />
                            </FormControl>
                        </Stack>
                        <FormControl id="subject">
                            <FormLabel>PHONE NUMBER</FormLabel>
                            <Input type="text" placeholder="How do we call u?" rounded="md" />
                        </FormControl>
                        <FormControl id="subject">
                            <FormLabel>Where are you located?</FormLabel>
                            <Input type="text" placeholder="country/address" rounded="md" />
                        </FormControl>
                        <FormControl id="subject">
                            <FormLabel>Subject:</FormLabel>
                            <Input type="text" placeholder="State your Question ?" rounded="md" />
                        </FormControl>
                        <FormControl id="message">
                            <FormLabel>Message</FormLabel>
                            <Textarea size="lg" placeholder="Enter your message or Query" rounded="md" />
                        </FormControl>
                    </VStack>
                    <VStack w="100%">
                        <Button
                            bg="green.300"
                            color="white"
                            _hover={{
                                bg: 'green.500'
                            }}
                            rounded="md"
                            w={{ base: '100%', md: 'max-content' }}
                        >
                            Send Message
                        </Button>
                    </VStack>
                </VStack>
            </Stack>
        </Container>
    );
};

export default Contact;
