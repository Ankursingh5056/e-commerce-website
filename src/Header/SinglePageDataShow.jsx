import React, { useState } from "react";
import "./singlePage.css";
import { Alert, Box, Button, Flex, Text , AlertIcon } from "@chakra-ui/react";

function SinglePageDataShow({ data }) {
  const[alert, setAlert]= useState(false)


function handleClicked(cartData){
const cartValue = JSON.parse(localStorage.getItem("cart")) || [];
cartValue.push(cartData);
    localStorage.setItem("cart",JSON.stringify(cartValue))
    setAlert(true)

  }



  return (
    <Flex m={"auto"}>
      {/* <div className='pageShow'> */}
      <Box w={"500px"} h={"500px"} boxShadow={"xl"} m={"auto"}>
        <img src={data.image} alt="" />
      </Box>

      <Box w={"600px"} h={"600px"} boxShadow={"xl"} m={"auto"}>
        <Text as={'b'} fontSize={"larger"} textColor={'tomato'}  wordWrap="break-word">
          {data.title}
        </Text>
        <br />
        <Text as={'b'}>{data.category}</Text>
        <br />
        <Text as={'b'}  textColor={'green.500'}> Price : ${data.price}</Text>
        <br />
        {/* <Text as={'b'}> Rating : {data.rating.rate}</Text> */}
        <br />
        <Text as={"b"} textColor={"black"}> Description</Text>
        <Text> {data.description}</Text>
        <br />
        <br />
        <Button bg={'tomato'} onClick={()=>handleClicked(data) }>Add to cart</Button>
        {alert && (
          <Alert status="success" mt={4} onClose={() => setAlert(false)}>
            <AlertIcon />
            Item added to cart!
          </Alert>
        )}
        
      </Box>
      {/* </div> */}
    </Flex>
  );
}

export default SinglePageDataShow;
