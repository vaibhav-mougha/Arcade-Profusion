import { Box, Heading, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <>
      <Box bg={"#9A9EA9"} p={"5rem 0"}>
        <Box
        // border={"1px solid white"}
        >
          <Heading color={"#001E4C"} textAlign={"center"} fontSize={"4rem"}>
            Arcade Profusion
          </Heading>

          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={5}
            m={"auto"}
            w={"85%"}
            // h={"60vh"}
            border={"3px solid #001E4C"}
            borderRadius={"2rem"}
            mt={"3rem"}
            p="2rem"
            boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
          >
            <GridItem
              w="22rem"
              h="25rem"
              bg="linear-gradient(to right, #e6b800, #ffd700)"
              borderRadius={"1rem"}
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            >
              <Text>
                Ledger is a platform that simplifies digital bookkeeping for
                small businesses, enabling merchants to easily record
                transactions, track credit, and manage customer accounts,
                enhancing financial transparency and efficiency. write in less
                words
              </Text>
            </GridItem>
            <GridItem w="22rem" h="25rem" bg="blue.500" />
            <GridItem w="22rem" h="25rem" bg="blue.500" />
            <GridItem w="22rem" h="25rem" bg="blue.500" />
            <GridItem w="22rem" h="25rem" bg="blue.500" />
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Home;
