import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box
      margin={"auto"}
      w={"30%"}
      display={"flex"}
      justifyContent={"space-between"}
      mt={"40px"}
    >
      <Link to={"/advancetax"}>
        <Button py={"20px"} colorScheme="teal">
          Advance Tax Calucalator
        </Button>
      </Link>
      <Link to={"/hra"}>
        <Button py={"20px"} colorScheme="teal">
          House Rent Allowance
        </Button>
      </Link>
    </Box>
  );
}

export default Home;
