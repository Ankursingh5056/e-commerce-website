
import { Button, Flex ,Text,Box} from '@chakra-ui/react'
import React from 'react'

function Cart() {
  const cartData = JSON.parse(localStorage.getItem("cart"))


  return (
    <div>
      {cartData.map((e)=>(
        <Flex justifyContent={"space-around"} fontSize={["12px","16px",'20px']} minW={'30px'}>
        <Box  wordWrap="break-word" w={"300px"}>
          <Text mixW={'30px'} as={'b'}>{e.title}</Text>
          </Box>

          <Box>
          <Text  mixW={'30px'}  as={'b'}> {e.category}</Text>
          </Box>
          <Box>
          <Text mixW={'30px'}  as={'b'}> ${e.price}</Text>
          <hr />
          </Box>
          {/* <Button onClick={() => handleRemove(index)}>Remove</Button> */}
        </Flex>
      
      ))}
    </div>
  )        
}


export default Cart
