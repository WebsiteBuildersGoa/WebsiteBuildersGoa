import {
  Box,
  
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link, Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

export const WithSub = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex

        minH={"30px"}
        background='rgb(17 17 17 / 70%)'
        py={{ base: 0 }}
        px={{ base: 8 }}
        borderBottom={0}
        borderTop={0}
        borderStyle={"solid"}
        borderColor={useColorModeValue('turquoise')}
        align={"center"}
      >
        <Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
          <IconButton
            color={'#00ff7f'}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>

          <Box  >
          <Image
         boxSize={'100px'}
          alt={'Login Image'}
          objectFit={'contain'}
          src={
            'asset/picd/Transparent 1.png'
          }
        />
        </Box>

          <Flex display={{ base: "none", md: "flex" }} ml={14}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify={"center"} direction={"row"} spacing={0}>
          {/* <Button as={"a"} fontSize={"lg"} fontWeight={500} variant={""} href={""}>

          </Button> */}
          <Button
            as={Link}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={700}
            color={"white"}
            bgGradient="linear(to-br,  white, #15aabf)" bgClip="text"
            href={"signup"}
            _hover={{
              textDecoration: "none",
              color: "white",
            }}

          >
            Talk To Us
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkHoverColor = useColorModeValue("#289fc4");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack   margin='auto' direction={"row"} spacing={6}>
      {NAV_ITEMS.map((navItem) => (
        <Box   key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
           
                p={2}
                href={navItem.href ?? ""}
                fontSize={"sm"}
                fontWeight={700}
                bgGradient="linear(to-br,  white, #15aabf)" bgClip="text"
                _hover={{
                  textDecoration: "none",
                  color: 'white',
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent border={0} boxShadow={"xl"} bg={popoverContentBgColor} p={1} rounded={"xl"} minW={"xs"}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, subLabel, href }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={1}

      rounded={"2xl"}
      _hover={{ bg: useColorModeValue("cyan.100", "black") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text transition={"all .3s ease"} _groupHover={{ color: "cyan.900" }} fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={"md"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={0}
        >
          <Icon color={"cyan.900"} w={16} h={6} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue("cyan.50")} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children }, href = "") => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={4}
        as={Link}
        href={href ?? ""}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={'black'}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [

  {
    label: "About Us",
    children: [
      {
        label: "Careers With Us",

        href: "career",
      },
      {
        label: "Reviews",

        href: "testimo",
      },
      {
        label: "Policies",

        href: "policies",
      },
      {
        label: "Terms Of Service",

        href: "terms",
      },
    ],
  },
  {
    label: "Services",
    children: [
      {
        label: "Web App Development",

        href: "served",
      },
      {
        label: "Mobile App Development",

        href: "served",
      },
      {
        label: "Custom App Development",

        href: "served",
      },
      {
        label: "IT Services",

        href: "served",
      },
      // {
      //   label: "Managed IT Services",

      //   href: "served",
      // },
      // {
      //   label: "Devops & Cloud Management",

      //   href: "served",
      // },
      // {
      //   label: "NFT Developments services",

      //   href: "served",
      // },
      // {
      //   label: "Blockhain Development Services",

      //   href: "served",
      // },
      // {
      //   label: "Cloud Consulting Services",

      //   href: "served",
      // },
      // {
      //   label: "IT Staff Augmention",

      //   href: "served",
      // },
      // {
      //   label: "Cloud Migration Services",

      //   href: "served",
      // },
      // {
      //   label: "Security Cyber",
      //   href: "served",
      // },


    ],
  },
  // {
  //   label: "Industries",
  //   children: [
  //     {
  //       label: "Heatlhcare",

  //       href: "indust",
  //     },
  //     {
  //       label: "Construction",
  //       // subLabel: "What our clients speak about us ",
  //       href: "indust",
  //     },
  //     {
  //       label: "Accounts",

  //       href: "indust",
  //     },
  //     {
  //       label: "E-learning",

  //       href: "indust",
  //     },
  //     {
  //       label: "E-commerce",

  //       href: "indust",

  //     },
  //     {
  //       label: "Human Resource",
  //       href: "indust",

  //     },
  //     {
  //       label: "On Demand Apps",

  //       href: "indust",

  //     },
  //   ]

  // },
  // {
  //   label: "Blogs",
  //   children: [
  //     {
  //       label: "Case Studies",

  //       href: "blog",
  //     },
  // {
  //   label: "Mobile App Development",

  //   href: "#",
  // },

  // ]

  // },
  {
    label: "Packages",
    children: [
      {
        label: "Get Free Quote",

        href: "pricing",
      },
      // {
      //   label: "Protfolio",

      //   href: "#",
      // },
      {
        label: "Contact Us",

        href: "signup",
      },
    ],
  },


]