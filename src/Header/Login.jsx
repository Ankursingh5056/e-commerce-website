import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Form, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { myContext } from "../ContextApi";

function Login() {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(myContext);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  function handleLogin(e) {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("loggedin", true);
      setIsAuth(true);
      navigate("/");
    } else {
      alert("wrong email and password");
    }
  }

  return (
    <Box w={"300px"} m={"auto"}>
      <form onSubmit={handleLogin}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            bg={"#F1F4F9"}
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />

          <FormLabel>Enter Password</FormLabel>
          <Input
            type="password"
            bg={"#F1F4F9"}
            name="password"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />

          <br />
          <br />
          <Input type="submit"  value={"Login"}bg={"#F1F4F9"} />
        </FormControl>
      </form>
      <br />
      <Text>
        {" "}
        Register here
        <Link to="/Register">
          <u> Resister</u>
        </Link>
      </Text>
    </Box>
  );
}

export default Login;
