import axios from "axios";

export async function realizarLogin(nome, senha) {
  try {

    const response = await axios.post("http://localhost:8080/api/logon/login", {
        login: nome,
        senha: senha
   });

    return response.data;


  } catch (error) {
    console.error("Erro na API:", error);

    return {
      success: false,
      message: "Usuário ou senha inválidos.",
    };
  }


}