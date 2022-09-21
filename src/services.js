import { SVGProps } from 'react';
import {
    Container,
    Box,
    chakra,
    Text,
    SimpleGrid,
    Flex,
    Link,
    useColorModeValue
} from '@chakra-ui/react';

// interface  
//   heading: string;
//   content: string;
//   icon: SVGProps<SVGElement>;


const features = [

    {
        heading: 'Web Development',
        content: 'Starting from basic web apps to highly complex business web apps combined with compelling designs and user experience, we provide the best web app development solutions for you.',
        icon: (
            <svg
                width={50}
                height={50}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                ></path>
            </svg>
        )
    },
    {
        heading: 'Mobile App Development',
        content: 'We have the vision and expertise to provide you with both native and cross-platform mobile apps that meets your needs as well as of the mobile-first world.',
        icon: (
            <svg
                width={50}
                height={50}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                ></path>
            </svg>
        )
    },
    {
        heading: 'Custom App Development',
        content: 'We specialize in providing personalized, out-of-the box ideas for designing and building a customized app that meets your business goals and provides a seamless experience to users.',
        icon: (
            <svg
                width={50}
                height={50}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
            </svg>
        )
    },
    {
        heading: 'IT services',
        content: 'Get a complete pack of Managed IT services ranging from security management, IT assistance, data backup and recovery, server visualization to automation of IT tasks and much more with us.',
        icon: (
            <svg
                width={50}
                height={50}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                ></path>
            </svg>
        )
    },
]
//     {
//         heading: 'IT services',
//         content: 'Webhooks are wired up to automatically email customers PDF receipts and invoices.',
//         icon: (
//             <svg
//                 width={50}
//                 height={50}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//             >
//                 <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
//                 ></path>
//             </svg>
//         )
//     },
//     {
//         heading: 'Cloud Consulting',
//         content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
//         icon: (
//             <svg
//                 width={50}
//                 height={50}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//             >
//                 <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                 ></path>
//             </svg>
//         )
//     },
//     {
//         heading: 'Blockchain Services',
//         content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
//         icon: (
//             <svg
//                 width={50}
//                 height={50}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//             >
//                 <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                 ></path>
//             </svg>
//         )
//     },
//     {
//         heading: 'NFT Development Services',
//         content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
//         icon: (
//             <svg
//                 width={50}
//                 height={50}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//             >
//                 <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                 ></path>
//             </svg>
//         )
//     },
//     {
//         heading: 'Cyber Security',
//         content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
//         icon: (
//             <svg
//                 width={50}
//                 height={50}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//             >
//                 <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                 ></path>
//             </svg>
//         )
//     },
//     {
//         heading: 'Cloud Migration',
//         content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
//         icon: (
//             <svg
//                 width={50}
//                 height={50}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//             >
//                 <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                 ></path>
//             </svg>
//         )
//     }
// ];



const Features = () => {
    return (
        <Container background-color=' #010101b8' maxW="7xl" p={{ base: 5, md: 10 }}>
            <chakra.h3 bgGradient="linear(to-br,  white, #15aabf)" bgClip="text"fontSize="4xl" fontWeight="bold" mb={20} textAlign="center">
                Everything you need and more
            </chakra.h3>
            <SimpleGrid columns={{ base: 1, sm: 0, md: 2 }} placeItems="center" spacing={10} mb={4}>
                {features.map((feature, index) => (
                    <Box
                        key={index}

                        p={10}
                        rounded="xl"
                        textAlign="center"
                        pos="relative"
                        boxShadow='2px 2px 4px #e5ede3'
                        marginBottom={'10px'}

                        bg=' rgb(171 229 249 / 75%)'
                    >
                        <Flex
                            p={8}
                            marginBottom="30px"
                            w="max-content"
                            color="black"
                            bgGradient="linear(to-br,#239847, rgb(5 243 5))"
                            rounded="md"
                            marginInline="auto"
                            pos="absolute"
                            left={0}
                            right={0}
                            top="-1.5rem"
                            boxShadow="lg"
                        >
                            {feature.icon}
                        </Flex>
                        <chakra.h3 fontWeight="bold" fontSize="2xl" mt={16}>
                            {feature.heading}
                        </chakra.h3>
                        <Text justifyContent="space-between" textAlign="justify"fontSize="md" mt={4}>
                            {feature.content}
                        </Text >
                        <Link href="served" mt={4} fontSize="xl" fontWeight="semibold" color="rgb(5 243 5)">
                            Learn more →
                        </Link>
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default Features;