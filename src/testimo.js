import { Fragment } from 'react';
import { Container, Text, Stack, Avatar, Icon, Image, Box, SimpleGrid } from '@chakra-ui/react';
// Here we have used react-icons package for the icon
import { ImQuotesLeft } from 'react-icons/im';

// interface TestimonialAttributes {
//   name: string;
//   position: string;
//   company: string;
//   content: string;
//   image: string;
// }

const testimonials = [
    {
        name: 'Alison Fernandes',
        // position: 'CEO',
        // company: 'Foodtesla',
        image:
            'asset/test1.jpg',
        content:
            'Did you ever try to do the impossible within a time frame of just one week? We got a recommendation from a colleague to call the guys at Orionesolutions.com. This is what we did and now we have our system up and running exactly according to our specifications. Thats why this is the best website development company in India.'

            
    },
    {
        name: 'Julian Vols',
        // position: 'CEO',
        // company: 'Foodtesla',
        image:
            'asset/test2.jpg',
        content:
            'WebsiteBuilders Goa started a project from my vision, not a way to usually get off on the right track but they would create features that I had not considered and the application evolved into something much better than I thought it could! so thats why this is the best website development company in India.'

            
    },
    // {
    //     name: 'Ben Parker',
    //     position: 'CEO',
    //     company: 'Foodtesla',
    //     image:
    //         'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
    //     content:
    //         'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper'
    // },
    // {
    //     name: 'Ben Parker',
    //     position: 'CEO',
    //     company: 'Foodtesla',
    //     image:
    //         'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
    //     content:
    //         'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper'
    // },

];

const Testimonials = () => {
    return (
        <Container maxW='2xl'mt="10px"mb="10px" p={{ base: 5, md: 10 }}>
            <Box bgGradient="linear(to-br,  white, #15aabf)" bgClip="text" fontSize="3xl" fontWeight="bold" mb={20} textAlign="center">
            Check Out What Our Customers Have To Say About Us
            </Box>
            
                {testimonials.map((obj, index) => (
                    <Fragment key={index}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            bgGradient="linear(to-br,  white, #15aabf)" bgClip="text"
                            spacing={{ base: 0, sm: 10 }}
                            marginBottom="50px"
                            p={{ base: 4, sm: 10 }}
                            rounded="lg"
                            justify="center"
                        >
                            <Box width="20rem" pos="relative" d={{ base: 'none', sm: 'block' }}>
                                <Image
                                    size="md"
                                    // pos="absolute"
                                    rounded="lg"
                                    src={obj.image}
                                    top="rem"
                                    boxShadow="lg"
                                />
                            </Box>

                            <Stack direction="column" spacing={4} textAlign="left" maxW="4xl">
                                {/* <Icon as={ImQuotesLeft} w={10} h={10} color="black" /> */}
                                <Text  color='white'fontSize="md" fontWeight="medium">
                                    {obj.content}
                                </Text>
                                <Stack alignItems={{ base: 'center', sm: 'flex-start' }} spacing={0}>
                                    {/* <Avatar
                  size="xl"
                  showBorder={true}
                  borderColor="green.400"
                  name="avatar"
                  src={obj.image}
                  d={{ base: 'block', sm: 'none' }}
                /> */}
                                    <Text fontWeight="bold" fontSize="lg">
                                        {obj.name}
                                    </Text>
                                    <Text fontWeight="medium" fontSize="sm" color="white">
                                        {obj.position} {obj.company}
                                    </Text>
                                </Stack>
                            </Stack>
                        </Stack>

                    </Fragment>

                ))}
            
        </Container>
    );
};

export default Testimonials;
