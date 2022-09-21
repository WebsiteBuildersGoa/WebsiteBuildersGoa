import React from 'react';
import { Box, Badge, SimpleGrid, Container, Image, Link, Text } from '@chakra-ui/react';

const dataList = [
    {
        id: 1,
        title: 'what it saas?',
        authorName: 'Ali',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
        id: 2,
        title: 'Rails ActiveAdmin',
        authorName: 'Ali',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
        id: 3,
        title: 'Rails ActiveAdmin',
        authorName: 'Ali',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    }
];

const BlogCards = () => {
    return (
        <Container maxWidth="1200px" mx="auto" my="10" p={{ base: 8, md: 4 }}>
            <Box bgGradient="linear(to-br,  white, #15aabf)" bgClip="text" fontSize="4xl" fontWeight="bold" mb={10} textAlign="center">
                Blogs
            </Box>
            <SimpleGrid columns={[1, 2, 3]} spacing="40px">
                {dataList.map((blog) => {
                    return (
                        <Box position="relative" key={blog.id}>
                            <Box fontSize="sm" position="absolute" right="5px" margin="5px" zIndex="1">
                                <Badge rounded="full" p="2px 8px" colorScheme="red" as="button">
                                    New
                                </Badge>
                            </Box>
                            <Link color=" #15ef29"
                             href="blog"
                             _hover={{ bgGradient: 'linear(to-l, #0ea5e9,#2563eb)' }}>
                                <Box
                                    borderWidth=""
                                    shadow="md"
                                    rounded="lg"
                                    overflow="hidden"
                                    position="relative"
                                >
                                    <Image src="https://bit.ly/2Z4KKcF" alt="Blog image" />
                                    <Box p={{ base: 4, lg: 6 }}>
                                        <Box d="flex" alignItems="baseline">
                                            <Box
                                                fontWeight="semibold"
                                                as="h2"
                                                letterSpacing="wide"
                                                textTransform="uppercase"
                                                ml="14"
                                            >
                                                {blog.title}
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Box color="gray.600" fontSize="sm">
                                                {/* <Badge rounded="full" px="2" colorScheme="teal">
                                                    {blog.authorName}
                                                </Badge> */}
                                            </Box>
                                        </Box>
                                        <Text
                                            mt="2"
                                            ml='2'
                                            fontWeight="semibold"
                                            noOfLines={3}
                                            lineHeight="tight"
                                          color='white'
                                            fontSize="sm"
                                        >
                                            {blog.content}
                                        </Text>
                                    </Box>
                                </Box>
                            </Link>
                        </Box>
                    );
                })}
            </SimpleGrid>
        </Container>
    );
};

export default BlogCards;