import axios from "axios";

export async function cadastrarProduto(produto) {
  try {
    const response = await axios.post("http://localhost:8080/api/produto/cadastrar", produto);
    return response.data;
  } catch (error) {
    console.error("Erro na API:", error);
    throw error;
  } 
}


