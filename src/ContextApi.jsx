// import { Divider } from "@chakra-ui/react";
import { createContext, useState } from "react";


export const myContext = createContext()

function ContextProvider({children}){
const[isAuth,setIsAuth] = useState(true)
  return(
    <myContext.Provider value={{isAuth,setIsAuth}}>
      {children}
    </myContext.Provider>
  )
}
export default ContextProvider