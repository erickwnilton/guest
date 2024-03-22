"use client"

import { useForm } from "react-hook-form";
import {FormControl, FormLabel, Input, Box, Button} from "@chakra-ui/react";

interface LoginComponentProps {
  name: string
  label: string
  button: string
}

export function FormLogin(props: LoginComponentProps) {
  const {register, handleSubmit} = useForm();

  function handleUserData(data: any) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleUserData)}>
      <FormControl>
        <FormLabel>
          {props.name}
        </FormLabel>
        <Input type="email" {...register("email", {required: true})} placeholder="Digite seu email"/>
      </FormControl>
      <FormControl>
        <FormLabel>
          {props.label}
        </FormLabel>
        <Input type="password" {...register("password", {required: true})} placeholder="Digite sua senha"/>
      </FormControl>
      <Box marginTop="20px">
        <Button type="submit" width="420px" bgColor="#0077ff" _hover={{bgColor: "#0077ffdc"}}>
          {props.button}
        </Button>
      </Box>
    </form>
  )
}