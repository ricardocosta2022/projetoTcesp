import axios from "axios";

export async function CarregarUnidadeProtocoladora() {
  try {

    const response = await axios.get("http://localhost:8080/api/delegacia/listarCodEDescricaoUnidadeProtocoladora");

    return response.data;


  } catch (error) {
    console.error("Erro na API:", error);
    throw error;
  }
}


export async function CarregamentoGridInicial(codDelegacia = null, loginNome = null) {
  try {
    const response = await axios.get("http://localhost:8080/api/delegacia/carregamentoGridInicial", {
      params: {
        codDelegacia,
        loginNome
      }
    });
    return response.data;
  } catch (error) {
    console.error("Erro na API:", error);
    throw error;
  }
}


export async function buscarTodosServidorPorNomeLoginOuCodigo(loginNome, codigo) {
console.log("Parâmetros recebidos - loginNome:", loginNome, "codigo:", codigo);

  try {

    const response = await axios.get("http://localhost:8080/api/delegacia/servidores",
      {
        params: {
          loginNome: loginNome === "" ? null : loginNome,
          codDelegacia: codigo === "" ? null : codigo
        }

      }
    );

    return response.data;

  } catch (error) {
    console.error("Erro na API:", error);
    throw error;
  }
}



