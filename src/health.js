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

const heatlhy = [
    {
        name: 'Healthcare',
        image:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        content:
            'Orion eSolutions is the leading healthcare mobile and web app design solution provider in India. We carefully study your business requirements and medical capacities and we fashion a webpage that streamlines your services. Our mobile app development services boast technical prowess and our web apps offer client-specific solutions. We have taken into account the global shift of the health industry onto the digital platforms. Patients prefer care within the comfort of their homes. With our app integrations and multi-faceted approach to digital healthcare solutions, you can be assured that your patients are completely acknowledged and their needs recognized.'
    },
    {
        name: 'Construction',
        image:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        content:
            'Orion eSolution is one of the leading and most promising construction mobile and web app development companies in India. We will carefully understand your business requirements and your constructional capabilities to provide a holistic technological solution.  From controlling machinery equipment to software and asset management, we offer customized, robust, and top-notch mobile and web applications to accelerate the potential of your machines and crews.'
    },
    {
        name: 'E-learning',
        image:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        content:
            'Orion is a leading E learning Management Solutions provider and offer course creators the platforms to launch and scale their courses online. Our team works round the clock to respect your deadlines and to provide solutions that are second to none. We understand the nuances of each business and we marry it to our understanding of the industry. What you get is a team who are not just technically adept, but empathetic to your business needs. We ensure professionalism and diplomacy in our approach. We undertake projects of any size and nature and deliver consistently across any vertical.'
    },
    {
        name: 'Accounts',
        image:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        content:
            'Orion eSolutions is a leading accounting mobile and web app design solution provider in India. We create a powerful digital presence for your accounting firm. We offer an intuitive interface to handle your accounting business while connecting with your consumers in exciting ways with our skilled team of online and mobile app developers. We understand your business ideology and marry it with the most powerful technological capacities to provide solutions that hold up to the latest industry standards.'
    },
    {
        name: 'E-commerce',
        image:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        content:
            'At Orion eCommerce our ecommerce expertise stems from an in depth understanding of the tech that goes behind every successful venture. We undertake CMS activities through Drupal, WordPress, and Joomla development alternatives. The website and web apps we develop and design for you will be based on Magento, Shopify, Shopware and nop Commerce solutions along with WooCommerce integration. We also specialize in JavaScript development and PHP development. This includes JQuery, AngularJS, and Node.js services along with Yii and Laravel ecommerce solutions. This entire sophisticated tech is married to our industry insights, helping you craft the perfect interface for driving conversions.'
    },
    {
        name: 'Human Resource',
        image:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        content:
            'Orion eSolutions is a leading specialised HRMS app and mobile development company in India. Take the leap to empowering your workforce with Orion’s advanced human resources tools and app development solutions. Our new age Personalized Cloud Based HRMS with Mobile apps enables HR professionals to manage the employee life cycle seamlessly. Experience the new age and enterprise driven HRMS suite to build better and smarter workplaces. Are you ready to embark on your digital transformative human resource journey?'
    },
    {
        name: 'On Demand Apps',
        image:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        content:
            'On-Demand App Development Drift With each year passing, the On-Demand app development segment is ascending to new heights. Orion eSolution is one of the leading On-Demand web and mobile app development companies in India. We will study your business requirements and capacities in respect of present market condition. Then we will develop innovative, cost-effective, and future-proof on-demand web and mobile applications enhancing your business sustainability. Intense technical prowess and deep market analysis are the foundations of our On-Demand app services.From controlling machinery equipment to software and asset management, we offer customized, robust, and top-notch mobile and web applications to accelerate the potential of your machines and crews'
    },


];

const Heatlhy = () => {
    return (
        <Container maxW='full' mt="30px" mb="30px" alignItems={'center'} p={{ base: 5, md: 8 }}>


            {heatlhy.map((obj, index) => (
                <Fragment key={index}>
                    <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        bgGradient="linear(to-br, #42e14e, blue.300)"
                        spacing={{ base: 0, sm: 10 }}
                        marginBottom="100px"
                        p={{ base: 4, sm: 10 }}
                        rounded="lg"
                        justify="center"
                    >
                        <Box width="20rem" pos="relative" d={{ base: 'none', sm: 'block' }}>
                            <Image
                                size="2xl"
                                pos="absolute"
                                rounded="lg"
                                src={obj.image}
                                top="-3.8rem"
                                boxShadow="lg"
                            />
                        </Box>

                        <Stack direction="column" spacing={4} textAlign="left" maxW="4xl">
                            <Text fontWeight="bold" fontSize="lg">
                                {obj.name}
                            </Text>
                            <Text fontSize="md" fontWeight="medium">
                                {obj.content}
                            </Text>

                        </Stack>
                    </Stack>

                </Fragment>

            ))}

        </Container>
    );

};

export default Heatlhy;
