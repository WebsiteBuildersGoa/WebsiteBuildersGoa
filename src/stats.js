import * as React from 'react';
import { Container, Text, SimpleGrid, Box, chakra, Stack, HStack, Icon } from '@chakra-ui/react';
import { AiFillCheckCircle } from 'react-icons/ai';

// interface StatData {
//   label: string;
//   score: string;
// }

const statData = [
    {
        label: 'Projects Completed',
        score: '50+'
    },
    {
        label: 'Client served',
        score: '50+'
    },
    {
        label: 'Client Reach',
        score: '10k+'
    },
    {
        label: 'Client Reviews',
        score: '4.5*'
    }
];

const planList = [
    'Customer obsessed. We put our customers front & center.',
    'Transparency. Most of our work is public.',
    'Freedom. We work from anywhere in the world.',
    'Autonomy. We want to create a safe, high-trust team.',
    'Excellence. We are aiming high, and we know it.'
];

const BrandStats = () => {
    return (
        <Container my='30px'bg='#000000c9' maxW="6xl" p={{ base: 4, sm: 10 }}>
            <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
                <Stack spacing={10}>
                    {/* <chakra.h1 bgGradient="linear(to-br,  white, #15aabf)" bgClip="text" fontSize="4xl" lineHeight={1.2} fontWeight="bold">
                        Our ultimate goal
                    </chakra.h1>
                    <Text fontSize="md" color="white" maxW="480px">
                        We aim high trying to design the most effective and efficient tool for building UIs, for
                        developers and designers. ChakraUI started back in 2019, to unify React. Since then,
                        we've become a community of over 2M developers from every corner of the world.
                    </Text> */}

                    <Stack spacing={6}>
                        <Text fontSize="3xl" bgGradient="linear(to-br,  white,#26f705)" bgClip="text">
                            Why Choose Us?
                        </Text>
                        {planList.map((data, index) => (
                            <HStack key={index} alignItems="center" spacing={4} fontSize="16px">
                                <Icon as={AiFillCheckCircle} w={4} h={4} color="#15ef29" />
                                <Text justifyContent="space-between" textAlign="justify" color='white' fontSize="">{data}</Text>
                            </HStack>
                        ))}
                    </Stack>
                </Stack>
                <Stack>
                    <SimpleGrid columns={2} spacing={16} pt={8} pl={{ base: 0, md: 10 }} margin="auto 0">
                        {statData.map((data, index) => (
                            <Stack
                                key={index}
                                pl={3}
                                py={1}
                                pr={1}
                                borderLeft="4px solid"
                                borderLeftColor="white"
                                justifyContent="space-between"
                            >
                                <Box fontSize="40px" fontWeight="bold" color="white">
                                    {data.score}
                                </Box>
                                <Text bgGradient="linear(to-br,  white, #26f705)" bgClip="text" fontSize="xl"fontweight='600'>{data.label}</Text>
                            </Stack>
                        ))}
                    </SimpleGrid>
                </Stack>
            </Stack>
        </Container>
    );
};

export default BrandStats;
