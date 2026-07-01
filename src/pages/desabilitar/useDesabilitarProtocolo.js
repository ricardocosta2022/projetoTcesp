
import { useEffect, useState } from "react";
import {
  CarregarUnidadeProtocoladora,
  CarregamentoGridInicial,
  buscarTodosServidorPorNomeLoginOuCodigo
} from "../../controller/UnidadeProtocoladoraController";

export function useDesabilitarProtocolo() {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [codigoUnidadeSelecionada, setUnidadeSelecionada] = useState("");
  const [gridServidores, setGridServidores] = useState([]);
  const [unidadesProtocoladoras, setUnidadesProtocoladoras] = useState([]);

  // mensagens
  const [message, setMessage] = useState(null);

const showMessage = (type, text, duration = 3500) => {
  setMessage({ type, text });

  const timer = setTimeout(() => {
    setMessage(null);
  }, duration);

  return () => clearTimeout(timer);
};

  // paginação
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 5;

  const indiceInicial = (paginaAtual - 1) * itensPorPagina;
  const indiceFinal = indiceInicial + itensPorPagina;
  const servidoresPaginados = gridServidores.slice(indiceInicial, indiceFinal);

  const totalPaginas = Math.ceil(gridServidores.length / itensPorPagina);

  const mudarPagina = (novaPagina) => {
    if (novaPagina >= 1 && novaPagina <= totalPaginas) {
      setPaginaAtual(novaPagina);
    }
  };


  // carregar dados iniciais
  useEffect(() => {

    async function carregarDadosIniciais() {
      try {
      const dados = await CarregarUnidadeProtocoladora();
      setUnidadesProtocoladoras(dados);

        await carregarGridInicial();
      } catch {
        showMessage("error", "Erro ao carregar unidades protocoladoras  /servidores");
      } 
    }

   carregarDadosIniciais();
  }, []);

/* Função para carregar o grid inicial */
  const carregarGridInicial = async () => {
    try {
      const dados = await CarregamentoGridInicial(); // hhtp://localhost:8080/api/usuarioPoliciaDelegacia/carregamentoGridInicial
      setGridServidores(dados);
      setPaginaAtual(1); // resetar para a primeira página
    } catch {
      showMessage("error", "Erro ao carregar Grid Inicial de servidores.");
    }
  };

/* Função para limpar os filtros */
const limpar = async () => {
  setNomeUsuario("");
  setUnidadeSelecionada("");
  setPaginaAtual(1);

  await carregarGridInicial();
};

/* Função para buscar por nome ou código */
  const buscarPorNomeOuCodigo = async () => {
    try {
      const codigo = codigoUnidadeSelecionada || null;
      // Se o campo de nome estiver vazio, passamos null para a API, 
      // caso contrário, passamos o valor digitado (com trim para remover espaços extras)
      const nome = nomeUsuario.trim() === "" ? null : nomeUsuario.trim();
      // Chamar a função de busca da API com os parâmetros adequados
      const dados = await buscarTodosServidorPorNomeLoginOuCodigo(
        nome,
        codigo
      );

      setGridServidores(dados);
      setPaginaAtual(1);

      if (dados.length === 0) {
        showMessage("info", "Nenhum servidor encontrado.");
      } else {
        showMessage("success", `${dados.length} registro(s) encontrado(s).`);
      }
    } catch {
      showMessage("error", "Não foi possível buscar os servidores.");
    } 
  };



// Retornar os estados e funções para o componente
return {
  nomeUsuario,
  setNomeUsuario,
  codigoUnidadeSelecionada,
  setUnidadeSelecionada,

  servidoresPaginados,
  unidadesProtocoladoras,

  //loading,
  message,

  buscarPorNomeOuCodigo,
  buscarTodosServidorPorNomeLoginOuCodigo,
  limpar,

  paginaAtual,
  totalPaginas,
  mudarPagina,
};
}
