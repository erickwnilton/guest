import { toast } from "react-hot-toast";

export const notifySuccess = () =>
  toast.success("Usuário cadastrado com sucesso!", {
    duration: 4000,
    position: "top-center",
  });

export const notifyError = () =>
  toast.error("Erro ao cadastrar sua conta!", {
    duration: 4000,
    position: "top-center",
  });
