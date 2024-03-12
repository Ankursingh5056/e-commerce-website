import { Box, Button, Flex, SimpleGrid, Text,Image } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import React, { useContext } from "react";
import { myContext } from "../ContextApi";
import Footer from "../Footer/Footer";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import jewellery from "./images/jewellary.jpg"
import Cloth from "./images/Cloth.jpg"
import Electronics from "./images/Electronics.jpg"



function Home() {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(myContext);
  const userName = JSON.parse(localStorage.getItem("user"));

  function handleLogout() {
    localStorage.removeItem("loggedin");
    setIsAuth(false);
    navigate("/login");
  }

  return (
    <Box  w={'100%'} >
      <p>Welcome- </p>

      <Button type="button" onClick={handleLogout} bg={'#4AA09D'}>
        Logout
      </Button>

      <br />
      <br />

      <Carousel>
                <Box w={"100%"} h={"500px"}>
                    <img src={jewellery} />
                    <p className="legend">Jewellery</p>
                </Box>
                <Box w={"100%"} h={"500px"}>
                    <img src={Cloth} />
                    <p className="legend">Men's cloths</p>
                </Box>
                <div>
                    <img src={Electronics} />
                    <p className="legend">Electronics</p>
                </div>
            </Carousel>



      <SimpleGrid columns={[1,2,3]}  w={"100%"}>

        <Link to={"/products"}>
          <Flex  flexDirection={'column'} justifyContent={'center'} w={"300px"} h={"300px"} boxShadow={"xl"} >
            <Image  h={"90%"}
              src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
              alt=""
            />
            
            <Text as={"b"}>category : jewelery</Text>
          </Flex>
        </Link >
        <Link to={"/products"}>
          <Flex flexDirection={'column'} justifyContent={'center'}  w={"300px"} h={"300px"} boxShadow={"xl"} >
            <Image h={"80%"}
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              alt=""
            />
            <Text as={"b"}>category : men's clothing</Text>
          </Flex>
        </Link>
        <Link to={"/products"}>
          <Flex  flexDirection={'column'} justifyContent={'center'} w={"300px"} h={"300px"} boxShadow={"xl"} >
            <Image h={"80%"}
              src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
              alt=""
              
            />
            <Text as={"b"}>category : Electronics</Text>
          </Flex>
        </Link>
       
      </SimpleGrid>

      
      <Footer/>
    </Box>
  );
}

export default Home;
