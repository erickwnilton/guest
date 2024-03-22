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
      <Box display="flex" alignItems="center" justifyContent="center" width="45vw" height="100vh" bgColor="#faf9f983">
        <Box display="flex" alignItems="center" justifyContent="center" width="200px" height="200px">
          <ShoppingCartIcon width="150px" color="#000000" />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" width="55%" height="100vh" bgColor="#f5f5f5">
        <Box display="flex" alignItems="center" justifyContent="center" width="500px" height="500px" margin="5px">
          <Box>
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