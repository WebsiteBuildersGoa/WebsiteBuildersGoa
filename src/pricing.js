import { ReactNode } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button, Flex, Center
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import Index from "./Quset";

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function ThreeTierPricing() {
  return (
    <>
      <Box py={8}>
        <VStack spacing={10} textAlign="center">
          <Heading as="h1"
            color="white"
            fontSize="3xl">
            PREMIUM WEBSITES - AFFORDABLE PRICING

          </Heading>

          <Text fontSize="xl" color={"red"}>
            FREE DOMAIN | FREE HOSTING | FREE PROFESSIONAL EMAILS

          </Text>

          {/* <Text fontSize="xl" color={"skyblue"}>
          
            Start with 14-day free trial. No credit card needed. Cancel at anytime.
          </Text> */}
        </VStack>
        <Stack
          color="white"
          direction={{ base: "column", md: "row" }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 10 }}
          py={12}
        >
          <PriceWrapper>
            <Box py={9} px={8}>
              <Text fontWeight="500" fontSize="2xl">
                Bronze Website Package

              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  Rs.
                </Text>
                <Text color="red" fontSize="5xl" fontWeight="900">
                  24,999
                </Text>
                {/* <Text fontSize="3xl" color="gray.500">
                  /month
                </Text> */}
              </HStack>
            </Box>
            <VStack bg={useColorModeValue("gray.50", "gray.700")} py={6} borderBottomRadius={"xl"}>
              <List color='black' spacing={3} textAlign="start" px={6}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  One Page Website
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Free Domain 1 Year*
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Free Hosting 1 Year
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Contact Form
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Responsive Design
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Professional Email Id 
                </ListItem>
              </List>
              <Box w="0%" pt={6}>
                {/* <Button w="full" colorScheme="red" variant="outline">
                  Start trial
                </Button> */}
              </Box>
            </VStack>
          </PriceWrapper>

          <Box position="relative">
              <Box position="absolute" top="-17px" left="50%" style={{ transform: "translate(-50%)" }}>
                <Text
                  textTransform="uppercase"
                  bg={useColorModeValue("red.300", "red.700")}
                  px={3}
                  py={1}
                  color={useColorModeValue("gray.900", "gray.300")}
                  fontSize="sm"
                  fontWeight="600"
                  rounded="xl"
                >
                  Most Popular
                </Text>
              </Box>
              </Box>
          <PriceWrapper>
            <Box pt="7" px={8}>
              <Text mx="auto" fontWeight="600" fontSize="2xl">
                Silver Website Package
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  Rs.
                </Text>
                <Text color="red" fontSize="5xl" fontWeight="900">
                  49,999
                </Text>
                {/* <Text fontSize="5xl" fontWeight="900">
                  349
                </Text> */}
                {/* <Text fontSize="3xl" color="gray.500">
                  /month
                </Text> */}
              </HStack>
            </Box>
            <VStack bg={useColorModeValue("gray.50", "gray.700")} py={7} borderBottomRadius={"xl"}>
              <List color='black' spacing={2} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  7 Pages Business Website 
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Customized Design 
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Free Hosting 1 Year
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Free Domain 1 Year 
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  SEO Ready Website 
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  SSL Certificate 
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Business E-Mail 
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Control Panel 
                </ListItem>
              </List>
              <Box w="80%" pt={6}>
                {/* <Button w="full" colorScheme="red" variant="outline">
                  Start trial
                </Button> */}
              </Box>
            </VStack>
          </PriceWrapper>

        </Stack>
        <VStack
          color="white"
          direction={{ base: "column", md: "row" }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 10 }}
          py={10}
        >
          <PriceWrapper>
            <Box py={4} px={8}>
              <Text fontWeight="500" fontSize="2xl">
                Gold+ Website Package

              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  Rs.
                </Text>
                <Text color="red" fontSize="5xl" fontWeight="900">
                  99,999
                </Text>
                {/* <Text fontSize="3xl" color="gray.500">
                  /month
                </Text> */}
              </HStack>
            </Box>
            <VStack bg={useColorModeValue("gray.50", "gray.700")} py={4} borderBottomRadius={"xl"}>
              <List color='black' spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  E-Commerce Website 
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Customized Design 
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Customized Design 
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Free Domain 1 Year 
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Free Domain 1 Year 
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  SEO Ready Website 
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  SSL Certificate
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Customized Design 
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Wallet and Referral Integration
                </ListItem>
                
              </List>
              <Box w="80%" pt={7}>
                {/* <Button w="full" colorScheme="red" variant="outline">
                  Start trial
                </Button> */}
              </Box>
            </VStack>
          </PriceWrapper>

          <PriceWrapper>
            <Box mt="10px" position="relative">
              <Box position="absolute" top="-16px" left="50%" style={{ transform: "translate(-50%)" }}>
                <Text
                  textTransform="uppercase"
                  bg={useColorModeValue("red.300", "red.700")}
                  px={3}
                  py={1}
                  color={useColorModeValue("gray.900", "gray.300")}
                  fontSize="sm"
                  fontWeight="600"
                  rounded="xl"
                >
                  Most Popular
                </Text>
              </Box>
              <Box py={8} px={8}>
                <Text fontWeight="500" fontSize="2xl">
                  Diamond Website Package

                </Text>
                <HStack color='white' justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                    Rs.
                  </Text>
                  <Text color='red' fontSize="5xl" fontWeight="900">
                    149,999
                  </Text>
                  {/* <Text fontSize="3xl" color="gray.500">
                    /month
                  </Text> */}
                </HStack>
              </Box>
              <VStack bg={useColorModeValue("gray.50", "gray.700")} py={4} borderBottomRadius={"xl"}>
                <List color='black' spacing={3} textAlign="start" px={4}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    E-Commerce Website
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Wallet and Referral Integration
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Android Hybrid App
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Google Play Publishing
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    iOS Hybrid APP 
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Customized Design
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Abandoned Checkout
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Free Domain 1 Year
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Free Hosting 1 Year
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  {/* <Button w="full" colorScheme="red">
                    Start trial
                  </Button> */}
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>


        </VStack>
        <Center><Index></Index></Center>
      </Box>
    </>
  );
}
