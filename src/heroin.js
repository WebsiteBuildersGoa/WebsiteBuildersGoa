import { chakra, Container, Stack, HStack, VStack, Flex, Text, Image, Box } from '@chakra-ui/react';

const overviewList = [
    { 
         label: 'Discussion', 
         subLabel: 'We always give importance to your ideas & requirements,based on that we will prepare the plan of actions.' },
    {
        
        label: 'Designing',
        subLabel: 'Based on the planning ,our designing team will design the best & matching design that feflects your concept.'
    },
    {
        
        label: 'Development',
        subLabel: 'Our Team of expert developers will develop the website/app in such a way that it would be complete on time..'
    },
    {
        
        label: 'Launch',
        subLabel: 'After full fledgeed testing,we host your website/app.And our team will guide you how to manage your website.'
    },
    {
        
        label: 'Marketing',
        subLabel: 'After full launch our team will guide you  to manage your website & SEO.'
    }
];

const OverviewSection = () => {
    return (
        <Container maxW="6xl" py={10}>
            <chakra.h2  
            bgGradient="linear(to-br,  white, #15aabf)" bgClip="text"fontSize="4xl" fontWeight="bold" textAlign="center" mb={16}>
                WE DESIGN WEBSITES THAT GENERATE RESULTS
               
            </chakra.h2>
            {/* <chakra.h3 bgGradient="linear(to-br,  white, #15aabf)" bgClip="text"fontSize="4xl" fontWeight="bold" textAlign="center" mb={2}>
            How it works?
            </chakra.h3> */}
            <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing={{ base: 0, md: 3 }}
                justifyContent="center"
                alignItems="center"
            >
                <VStack spacing={4} alignItems="flex-start" mb={{ base: 5, md: 0 }} maxW="md">
                    {overviewList.map((data) => (
                        <Box  color="#15ef29" key={data.id}>
                            <HStack spacing={6}>
                                <Flex
                                    fontWeight="bold"
                                    boxShadow="md"
                                    color="white"
                                    bgGradient="linear(to-l, #0ea5e9,#2563eb)"
                                    rounded="full"
                                    justifyContent="center"
                                    alignItems="center"
                                    w={2}
                                    h={2}
                                >
                                    {data.id}
                                </Flex>
                                <Text  fontSize="30">{data.label}</Text>
                            </HStack>
                            <Text  justifyContent="space-between" textAlign="justify" fontSize="md" color="white" ml={8}>
                                {data.subLabel}
                            </Text>
                        </Box>
                    ))}
                </VStack>
                <Image
                color='white'
                    boxSize={ 'lg'}
                    objectFit="contain"
                    src="asset/ourpro.jpg"
                    rounded="lg"
                />
            </Stack>
        </Container>
    );
};

export default OverviewSection;