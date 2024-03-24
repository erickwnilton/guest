"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { Box, Button, Text } from "@chakra-ui/react";

interface AuthTemplateProps {
  title: string
  button: string
  buttonContent: string
  children: React.ReactNode
}

export function AuthPage({title, buttonContent, children}: AuthTemplateProps) {
  const router = useRouter();
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  function handleLoginPage() {
    setIsRegistered(false);
    router.push("/")
  }

  function handleRegisterPage() {
    setIsRegistered(true);
    router.push("/register")
  }

  return (
    <section className="flex">
      <Box 
      width={["0vw", "20vw", "45vw", "45vw"]} 
      height="100vh"
      display={["none", "flex", "flex", "flex"]} 
      alignItems="center"
      justifyContent="center"
      bgColor="#faf9f983"
      >
        <Box 
        width="200px" 
        height="200px"
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        >
          <ShoppingCartIcon 
          width="150px" 
          color="#000000" />
        </Box>
      </Box>

      <Box 
      width={["100vw", "100vw", "100vw", "55vw"]} 
      height="100vh" 
      display="flex" 
      position={["fixed", "fixed", "relative", "relative"]} 
      alignItems="center" justifyContent="center" 
      bgColor="#f5f5f5"
      >
        <Box 
        margin="5px"
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        >
          <Box 
          width={["310px", "500px", "500px", "500px"]} 
          height="100%"
          >
            <Box>
              <Text fontSize="40">
                {title}
              </Text>
            </Box>
            <Box marginTop="20px">
              {children}
            </Box>
            <Box>
              <Button variant="link" onClick={isRegistered ? handleLoginPage : handleRegisterPage}>
                {buttonContent}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  )
}