import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";

function Register() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    "name": "",
    "email": "",
    "password": "",
  });
  function HandleSubmit(e) {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  }

  return (
    <Box w={"300px"} m={"auto"}>
      <form  onSubmit={HandleSubmit}>
      <FormControl>
        <FormLabel>Enter Your name</FormLabel>
        <Input
          type="text"
          bg={"#F1F4F9"}
          name="name"
          value={input.name}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />

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
        <Button type="submit" bg={"#F1F4F9"}>
          Register
        </Button>
      </FormControl>
      </form>
      <br />
      <Text>
        {" "}
        already have account
        <Link to="/login">
          <u> Login here</u>
        </Link>
      </Text>
    </Box>
  );
}

export default Register;
