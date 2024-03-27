"use client"

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {FormControl, FormLabel, Input, Box, Button, useToast} from "@chakra-ui/react";

interface LoginComponentProps {
  name: string
  label: string
  button: string
}

export function FormLogin(props: LoginComponentProps) {
  const toast = useToast();
  const {register, handleSubmit} = useForm();
  const [mail, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const router = useRouter();

  async function handleUserData() {
    const result = await signIn("credentials", {
      mail,
      password,
      redirect: false
    })

    if (result?.error) {
      return toast({
        title: "Usuário não encontrado.",
        description: "Insira um e-mail válido.",
        status: "error",
        duration: 10000,
        isClosable: true,
        position: "top-right"
        })
    }
    
    else {
      router.replace("/home")
    }
  }

  return (
    <form onSubmit={handleSubmit(handleUserData)}>
      <FormControl>
        <FormLabel>
          {props.name}
        </FormLabel>
        <Input 
        type="email" 
        placeholder="Digite seu email"
        {...register("mail", {required: true})}
        onChange={(e) => setEmail(e.target.value)}
         />
      </FormControl>

      <FormControl>
        <FormLabel>
          {props.label}
        </FormLabel>
        <Input 
        type="password" 
        placeholder="Digite sua senha" 
        {...register("password", {required: true})} 
        onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <Box marginTop="20px">
        <Button 
        type="submit" 
        width="100%"
        color="#fff" 
        bgColor="#0077ff" 
        _hover={{bgColor: "#0077ffdc"}}
        >
          {props.button}
        </Button>
      </Box>
    </form>
  )
}