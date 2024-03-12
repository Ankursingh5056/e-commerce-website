import React from "react";
import "./footer.css"
import { Box, Flex ,SimpleGrid, Text} from "@chakra-ui/react";


function Footer() {
  return (
    <SimpleGrid  columns={[1,2,4]} gap={"10px"} bg={"black.500"} mt={"30px"} boxShadow={'xl'}>
  
      <Box>
        <Text as={'b'}>CONTACT INFO</Text>
        <p>ph no. : 1800298344</p>
        <p>Email : products@gmail.com</p>
      </Box>
      <Box>
        <Text as={'b'}>QUICK LINKS</Text>
        <p>About us</p>
        <p>Contact Us</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Return and Refund Policy</p>
        <p>Shipping Policy</p>
      </Box>
      <Box>
          <Text  as={"b"}>CUSTOMER INFO</Text >
           <p> My Account</p>
           <p>Track your Order</p>
           <p>Order Returns</p>
           <p>Wishlist</p>
           <p>News & Events</p>
           <p>FAQ</p>
      </Box>
      <Box>
         <Text as={'b'}>CATEGORIES</Text>
          <p>Jewellery</p>
          <p> Cloths</p>
          <p>Electronics</p>
      </Box>
    </SimpleGrid>
  );
}

export default Footer;

