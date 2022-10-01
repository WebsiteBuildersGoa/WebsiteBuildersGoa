import { Fragment } from 'react';
import { Container, Text, Stack, Box, Flex} from '@chakra-ui/react';
// Here we have used react-icons package for the icon



const invest = [
    {
        name: ' Web Development',
        // image:
        // 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        content:
            'WebsiteBuilder Goa is a web design and web development company based in India. It offers a wide array of web design and development solutions that are attractive, user-friendly, and user-focused. We have an excellent team of experienced web developers, who are constantly working on cutting-edge technologies, innovative ideas, and frameworks to build B2B and B2C websites, web portals, and web applications for diverse industries across the world.'
    },
    {
        name: 'Mobile App Development ',
        // image:
        // 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        content:
            'Delight your users with expressive and feature-rich mobile apps leveraging our extensive experience working with all major technologies. We undertake turnkey Custom mobile application development and offer end to end solutions for custom healthcare apps development and Custom mobile app development. As a specialised custom application development company We also help your upgrade and migrate your outdated app technology to the latest mobile app technology.'
    },
    {
        name: 'Custom App Development ',
        // image:
        //     'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        content:
            'Avail WebsiteBuilder Goa Custom App Development services with the added advantage of tech integration capabilities. Reduce your turn around time and cost by up to 60%. Get all your needs satisfied from Digital Transformation to wearable apps and much much more.'
    },

    {
        name: 'Managed IT Services',
        // image:
        //     'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        content:
            'WebsiteBuilder Goa is a leading specialised HRMS app and mobile development company in India. Take the leap to empowering your workforce with WBGs advanced human resources tools and app development solutions. Our new age Personalized Cloud Based HRMS with Mobile apps enables HR professionals to manage the employee life cycle seamlessly. Experience the new age and enterprise driven HRMS suite to build better and smarter workplaces. Are you ready to embark on your digital transformative human resource journey?'
    },
   
];

const Invest = () => {
    return (
        <Container display="flex" justifyContent='center' maxW='1000px' mx="auto"  p={{ base: 5, md: 8 }}>

<Box>
            {invest.map((obj, index) => (
                <Fragment key={index}>
                    <Stack
                   
                        direction={{ base: 'column', sm: 'row' }}
                        bgGradient="linear(to-br, #42e14e, blue.300)"
                        spacing={{ base: 0, sm: 10 }}
                        marginBottom="100px"
                        p={{ base: 4, sm: 10 }}
                        rounded="lg"
                        justifyContent="center"
                    >
                       

                        <Stack justifyContent="center" direction="column" spacing={4} textAlign="center" maxW="4xl">
                            <Text fontWeight="bold" fontSize="3xl" display='flex' justifyContent="center">
                                {obj.name}
                            </Text>
                            <Text  justifyContent="space-between" textAlign="justify"fontSize="md" fontWeight="medium">
                                {obj.content}
                            </Text>



                        </Stack>
                    </Stack>

                </Fragment>

            ))}
</Box>
        </Container>
    );

};

export default Invest;
