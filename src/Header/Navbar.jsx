import { Box, Button, ButtonGroup, Flex, Stack } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";

function Navbar() {
  return (
    
    <Flex
      h={"37"}
      w={"100%"}
      bg={"#4AA09D"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={[5,10,20]}
    >
      <Box fontWeight={"700"} fontSize={["16px","20px","22Px"]} color={"pink.100"} cursor={"Pointer"}>
        Product
      </Box>
      <Flex
        w="60%"
        fontSize={["14px","16Px","20px"]}
        fontFamily={"-moz-initial"}
        justifyContent={"space-between"}
        m={"auto"}
        
        
      >
        <Link to="/">Home</Link>
        <Link to="/products">Shoping</Link>
        {/* <Link to="/about">About</Link> */}
        
        <Button colorScheme="blue"  size="md" variant="ghost" fontSize={["14px","16px","20px"]}>
          <Flex>
        <FaRegUser />
        <Link to="/login">Account</Link>
        </Flex>
        </Button>

        <Button colorScheme="blue"  size="md" variant="ghost" fontSize={["14px","16px","20px"]}>
          <Flex>
          <RiShoppingCart2Line />
          <Link to="/cart">Cart</Link>
          </Flex>
        </Button>
        
      </Flex>
      
    </Flex>

    
  );
}

export default Navbar;
