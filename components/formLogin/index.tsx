"use client"

import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import {FormControl, FormLabel, Input, Box, Button} from "@chakra-ui/react";

interface LoginComponentProps {
  name: string
  label: string
  button: string
}

export function FormLogin(props: LoginComponentProps) {
  const {register} = useForm();
  const [mail, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  
  const router = useRouter();

  async function handleUserData(e: SyntheticEvent ) {
    e.preventDefault()

    const result = await signIn("credentials", {
      mail,
      password,
      redirect: false
    })

    if (result?.error) {
      return console.log(result)
    }
    
    else {
      router.replace("/home")
    }
  }

  return (
    <form onSubmit={handleUserData}>
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
        width="420px" 
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