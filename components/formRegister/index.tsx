"use client"

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {FormControl, FormLabel, Input, Box, Select, Button} from "@chakra-ui/react";

interface RegisterComponentProps {
  name: string
  email: string
  document: string
  password: string
  role: string
  confirmPassword: string
  button: string
}

const schema = yup.object({
  name: 
  yup.string()
  .required(),
  email: 
  yup.string()
  .email()
  .required(),
  document: 
  yup.string()
  .required(),
  role: 
  yup.string()
  .required(),
  password: 
  yup.string()
  .required(),
  confirmPassword: 
  yup.string()
  .required()
  .oneOf([yup.ref("password")])
})

export function FormRegister(props: RegisterComponentProps) {
  const {register, handleSubmit} = useForm({resolver: yupResolver(schema)});

  function handleUserData(data: any) {
    console.log(data)
  }

  return (
    <form className="" onSubmit={handleSubmit(handleUserData)}>
      <div className="space-y-3">
      <FormControl isRequired>
        <FormLabel>
          {props.name}
        </FormLabel>
        <Input type="text" {...register("name", {required: true})} placeholder="Digite seu nome"/>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>
          {props.email}
        </FormLabel>
        <Input type="email" {...register("email", {required: true})} placeholder="Digite seu email"/>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>
          {props.document}
        </FormLabel>
        <Input type="text" {...register("document", {required: true})} placeholder="000.000.000-00"/>
      </FormControl>
      </div>
      <div className="space-y-3 mt-5">
      <FormControl isRequired>
        <FormLabel>
          {props.role}
        </FormLabel>
        <Select 
        width="180px" 
        variant="outline" 
        borderColor="#0077ff" 
        {...register("role", {required: true})}
        >
          <option value="cargo1">Cargo1</option>
          <option value="cargo2">Cargo2</option>
          <option value="cargo3">Cargo3</option>
          <option value="cargo4">Cargo4</option>
        </Select>
      </FormControl>
      </div>
      <div className="flex gap-4 mt-8">
      <FormControl isRequired>
        <FormLabel>
          {props.password}
        </FormLabel>
        <Input type="password" {...register("password", {required: true})} placeholder="Digite sua senha"/>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>
          {props.confirmPassword}
        </FormLabel>
        <Input type="password" {...register("confirmPassword", {required: true})} placeholder="Confirme sua senha"/>
      </FormControl>
      </div>
      <Box marginTop="20px">
        <Button type="submit" width="500px" bgColor="#0077ff" _hover={{bgColor: "#0077ffdc"}}>
          {props.button}
        </Button>
      </Box>
    </form>
  )
}