import { useContext } from 'react';
import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link, Navigate, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import { myContext } from '../ContextApi';

const Navbar = () => {
  const navigate = useNavigate()
  const {isAuth,setIsAuth} = useContext(myContext)
  const { isOpen, onToggle } = useDisclosure();
  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.600', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.900');

  const handleLogout=()=>{
    setIsAuth(false)
    navigate("/")
  }

  const handleLogin = ()=>{
    // <Navigate to={"/login"}/>
    // setIsAuth(false)
    navigate("/")

  }

  return (
    <Box>
      <Flex
        bg={bg}
        color={color}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={borderColor}
        align={'center'}
      >
        <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
          <Text
            textAlign={{ base: 'center', md: 'left' }}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
          >
            <img src="https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png" alt="" width={40}/>
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          
         {
          isAuth?
          <Button
          onClick={handleLogout}
          as={Link}
          to="/login"
          display={{ base: 'none', md: 'inline-flex' }}
          fontSize={'sm'}
          fontWeight={600}
          color={'white'}
          bg={'blue.400'}
          _hover={{
            bg: 'blue.300',
          }}
        >
          Logout
        </Button>
        :
        <Button
          onClick={handleLogin}
        as={Link}
        to="/login"
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={'blue.400'}
        _hover={{
          bg: 'blue.300',
        }}
      >
        Sign In
      </Button>
         }
        </Stack>

        <Flex display={{ base: 'flex', md: 'none' }} ml={-2}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const hoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            to={navItem.href}
            style={{
              padding: '8px',
              fontSize: 'sm',
              fontWeight: 500,
              color: linkColor,
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => (e.target.style.color = hoverColor)}
            onMouseLeave={(e) => (e.target.style.color = linkColor)}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  const {isAuth,setIsAuth} = useContext(myContext)
  const navigate = useNavigate()
  const bg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.200');

  const handleLogout=()=>{
    setIsAuth(false)
    navigate("/login")
  }
  return (
    <Stack bg={bg} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <Flex py={2} key={navItem.label}>
          <Link to={navItem.href} style={{ fontWeight: 600, color: textColor }}>
            {navItem.label}
          </Link>
        </Flex>
      ))}
     {
      isAuth? 
      <Button onClick={handleLogout}>
      Logout
     </Button>
     :
     null
     }
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Shopping',
    href: '/products',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Cart',
    href: '/cart',
  },
];

export default Navbar;
