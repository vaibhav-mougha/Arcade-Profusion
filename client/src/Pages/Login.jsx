import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <Grid bg={"#9A9EA9"} templateColumns="repeat(2, 1fr)" h="100vh">
      <Box mt={"15rem"} pl="10rem" border={"1px solid white"}>
        <Heading color={"#001E4C"} fontSize={"4rem"}>
          Arcade Profusion
        </Heading>
        <Text fontSize={"1.7rem"} w="85%" fontWeight={"semibold"}>
          Arcade Profusion provides you a passage for your various pursuits.
        </Text>
      </Box>

      <Box mt={"11rem"}>
        <FormControl
          ml={"7rem"}
          bg={"white"}
          borderRadius="0.7rem"
          p={"1.2rem"}
          w={"55%"}
          boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        >
          <Input
            type="email"
            placeholder="Email or Phone Number"
            mt={"0.7rem"}
            autoComplete="off"
          />
          <Input
            type="password"
            placeholder="Password"
            mt={"0.7rem"}
            autoComplete="off"
          />
          <FormHelperText color={"gray"}>
            We'll never share your email.
          </FormHelperText>
          <Button
            mt={"1rem"}
            w={"100%"}
            bg={"#001E4C"}
            color={"white"}
            _hover={{
              bg: "white",
              color: "#001E4C",
              border: "2px solid #001E4C",
            }}
            fontSize={"1.5rem"}
          >
            Log in
          </Button>
          {/* <Button
          mt={"1rem"}
          w={"100%"}
          bg={"#001E4C"}
          color={"white"}
          _hover={{
            bg: "white",
            color: "#001E4C",
            border: "1px solid #001E4C",
          }}
          fontSize={"1.5rem"}
        >
          Log in
        </Button> */}
          <Box display={"flex"} justifyContent={"space-around"}>
            <Checkbox mt={"1rem"}>Remember me</Checkbox>
            <FormHelperText
              color={"#001E4C"}
              fontWeight={"bold"}
              mt={"1.2rem"}
              textAlign={"center"}
              cursor="pointer"
            >
              Forgotten password?
            </FormHelperText>
          </Box>
          <Divider m={"1.7rem 0rem"} />
          <Button
            mt={"1rem"}
            ml={"4.1rem"}
            w={"70%"}
            bg={"#4FBB23"}
            color={"white"}
            _hover={{
              bg: "white",
              color: "#4FBB23",
              border: "2px solid #4FBB23",
            }}
            fontSize={"1.5rem"}
            // p="1.5rem"
            onClick={onOpen}
          >
            Create new account
          </Button>
        </FormControl>
      </Box>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"2.5rem"} fontWeight={"bold"}>
            Sign Up
          </ModalHeader>
          <Text pl="1.7rem" mt={"-1rem"}>
            It's quick and easy.
          </Text>
          <Divider m={"1rem 0rem"} />
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input ref={initialRef} placeholder="Username" isRequired />
            </FormControl>

            <FormControl mt={4}>
              <Input placeholder="Email Address" />
            </FormControl>

            <FormControl mt={4}>
              <Input placeholder="Mobile Number" />
            </FormControl>
            <Text mt={"1rem"} fontSize={"0.7rem"}>
              By clicking Sign Up, you agree to our Terms, Privacy Policy and
              Cookies Policy. You may receive SMS notifications from us and can
              opt out at any time.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              w={"100%"}
              bg={"#4FBB23"}
              color={"white"}
              _hover={{
                bg: "white",
                color: "#4FBB23",
                border: "1px solid #4FBB23",
              }}
              fontSize={"1.5rem"}
              p="1.5rem"
              onClick={onClose}
              mb={"1rem"}
            >
              Sign Up
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Grid>
  );
};

export default Login;
