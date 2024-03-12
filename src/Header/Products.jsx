import { Box,Flex, Image, SimpleGrid} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import "./Products.css"
import { Link } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'
import Footer from '../Footer/Footer'
import {Input,Stack} from "@chakra-ui/react"

function Products() {
const[post,setPost] = useState([])
const[loding,setLoading] = useState(false)
const[error,setError] = useState(null)



async function getdata(){
  setLoading(true)
  try {
    let data = await fetch("https://fakestoreapi.com/products")
    let newdata = await data.json()
    setPost(newdata)
    setLoading(false)
  } catch (er) {
setError(er.message)
setLoading(false)
    
  }
}
useEffect(function(){
  getdata()
},[])
if(loding){
  return(
    // <h1>Loading...</h1>
    <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
  )
}
  return (
    <Box h={"100%"}>
      <Stack spacing={3}  mt={"20px"}>
        <Input variant="outline" placeholder="Search..." bg={'#D5D4DA'} focusBorderColor='pink.400'/>
      </Stack>

    <SimpleGrid  columns={[1,2,4]} gap={"10px"}>
      {post.map((e)=>(
        <Link key={e.id} to={`/singlepage/${e.id}` }>
        <Flex  flexDirection={'column'} justifyContent={'center'} className='child'  h={"400px"} boxShadow={'xl'} >
          <Image src={e.image} h={"300Px"}/>
          <p>{e.title}</p>
          {/* <p>{e.description}</p> */}
          <h4>price   ${e.price}</h4>
        </Flex>
         </Link>
      ))}


    </SimpleGrid>

    <br />
    <br />
    <Footer/>
    </Box>
  )
}

export default Products
