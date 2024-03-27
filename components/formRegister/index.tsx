"use client"

import * as yup from "yup";
import { useState } from "react";
import { api } from "@/services/api";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import {FormControl, FormLabel, Input, Box, Select, Button, useToast} from "@chakra-ui/react";

interface RegisterComponentProps {
  name: string
  mail: string
  document: string
  password: string
  role: string
  confirmPassword: string
  button: string
}

const schema = yup.object({
  name: yup.string().required(),
  mail: yup.string().email().required(),
  document: yup.string().required(),
  role: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().required().oneOf([yup.ref("password")])
})

export function FormRegister(props: RegisterComponentProps) {
  const toast = useToast();
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [document, setDocument] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const {register, handleSubmit} = useForm({resolver: yupResolver(schema)});

  function formatDocument(value: any) {
    const document = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
    return value.replace(document, '$1.$2.$3-$4');
  }

  async function handleUserData() {
    try {
      const AddNewUser = await api.post("/user", {
        name,
        mail,
        document,
        role,
        password
      })

      if(AddNewUser) {

        router.replace("/")

        return toast({
          title: "Cadastro realizado",
          description: "Realize seu login com sua conta.",
          status: "success",
          duration: 10000,
          isClosable: true,
          position: "top-right"
        })
      }

      else {
        return toast({
          title: "Cadastro não realizado",
          description: "Verifique os dados inseridos abaixo.",
          status: "error",
          duration: 10000,
          isClosable: true,
          position: "top-right"
        })
      }
    } catch (error) {
      return null
    }
  }

  return (
    <form onSubmit={handleSubmit(handleUserData)}>
      <div className="space-y-3">
      <FormControl isRequired>
        <FormLabel>
          {props.name}
        </FormLabel>
        <Input 
        type="text"
        placeholder="Digite seu nome"
        {...register("name", {required: true})}
        onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>
          {props.mail}
        </FormLabel>
        <Input 
        type="email" 
        placeholder="Digite seu email"
        {...register("mail", {required: true})} 
        onChange={(e) => setMail(e.target.value)}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>
          {props.document}
        </FormLabel>
        <Input 
        type="text" 
        value={document}
        placeholder="000.000.000-00"
        {...register("document", {required: true})} 
        onChange={(e) => setDocument(formatDocument(e.target.value))}
        />
      </FormControl>
      </div>

      <div className="flex space-y-3 mt-5">
      <FormControl isRequired>
        <FormLabel>
          {props.role}
        </FormLabel>
        <Select 
        width="190px" 
        variant="outline" 
        borderColor="#0077ff" 
        placeholder="Selecione seu cargo"
        {...register("role", {required: true})}
        onChange={(e) => setRole(e.target.value)}
        >
          <option value="cargo1">Cargo1</option>
          <option value="cargo2">Cargo2</option>
          <option value="cargo3">Cargo3</option>
          <option value="cargo4">Cargo4</option>
        </Select>
      </FormControl>
      </div>

      <div className="flex max-sm:block max-sm:space-y-2 gap-4 mt-8">
      <FormControl isRequired>
        <FormLabel>
          {props.password}
        </FormLabel>
        <Input 
        type="password" 
        placeholder="Digite sua senha"
        {...register("password", {required: true})} 
        onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>
          {props.confirmPassword}
        </FormLabel>
        <Input 
        type="password" 
        placeholder="Confirme sua senha"
        {...register("confirmPassword", {required: true})} 
        />
      </FormControl>
      </div>

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