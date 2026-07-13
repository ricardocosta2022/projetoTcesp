import "./DesabilitarProtocolo.css";
import { useDesabilitarProtocolo } from "./useDesabilitarProtocolo";  
import React from "react";
import axios from "axios";
import { CarregarUnidadeProtocoladora } from "../../controller/UnidadeProtocoladoraController";

// COMPONENTE PRINCIPAL
export default function Desabilitar() {
  const {
    nomeUsuario,
    setNomeUsuario,
    codigoUnidadeSelecionada,
    setUnidadeSelecionada,
    servidoresPaginados,
    unidadesProtocoladoras,
    message,
    limpar,
    buscarPorNomeOuCodigo,

    // PAGINAÇÃO
    paginaAtual,
    totalPaginas,
    mudarPagina,
  } = useDesabilitarProtocolo();

  const formatarData = (data) => {
    if (!data) return "-";
    return new Date(data).toLocaleDateString("pt-BR");
  };

  return (
    <div className="page-container">
      <div className="form-card">

        {/* MENSAGEM AMIGÁVEL */}
        {message && (
          <MessageBox type={message.type} text={message.text} />
        )}

        <h1 className="titulo">
          Desabilitar Usuário de Protocolo em Unidade Protocoladora
        </h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-grid">

            <div className="form-field">
              <label className="form-label">Usuário</label>
              <input
                className="form-input"
                placeholder="Digite um nome ou login"
                value={nomeUsuario}
                onChange={(e) => setNomeUsuario(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label className="form-label">Unidade Protocoladora</label>
              <select
                className="form-select-custom"
                value={codigoUnidadeSelecionada}
                onChange={(e) => setUnidadeSelecionada(e.target.value)}
              >
                <option value="">Selecione Unidade Protocoladora</option>
                  {unidadesProtocoladoras.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.descricao}
                  </option>
                ))}
              </select>
            </div>

          </div>

          <div className="btn-box">

            <button
              type="button"
              className="btn-primary-custom"
              onClick={buscarPorNomeOuCodigo}>
              Buscar
            </button>

            <button
              type="button"
              className="btn-secondary-custom"
              onClick={limpar}
            >
              Limpar
            </button>
          </div>
        </form>
      </div>

      {/* TABELA */}
      <div className="table-card">
        <table className="table-custom">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Unidade Protocoladora</th>
              <th>Data Habilitação</th>
              <th>Data Desabilitação</th>
            </tr>
          </thead>

          <tbody>
            {servidoresPaginados.map((s) => (
              <tr key={s.idUsuarioPoliciaDelegacia}>
                <td>{s.nome}</td>
                <td>{s.descricao}</td>
                <td>{formatarData(s.dataInicio)}</td>
                <td>{formatarData(s.dataFim)}</td>

              </tr>
            ))}

            {servidoresPaginados.length === 0 && (
              <tr>
                <td colSpan="4" className="sem-registro">
                  Nenhum registro encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* PAGINAÇÃO */}
        {totalPaginas > 1 && (
        <div className="pagination">
          <button
            disabled={paginaAtual === 1}
            onClick={() => mudarPagina(paginaAtual - 1)}
          >
            ⬅ Anterior
          </button>

          {Array.from({ length: totalPaginas }).map((_, index) => {
            const pagina = index + 1;
            return (
              <button
                key={pagina}
                className={pagina === paginaAtual ? "active" : ""}
                onClick={() => mudarPagina(pagina)}
              >
                {pagina}
              </button>
            );
          })}

          <button
            disabled={paginaAtual === totalPaginas}
            onClick={() => mudarPagina(paginaAtual + 1)}
          >
            Próxima ➡
          </button>
        </div>
      )}


      </div>
    </div>
  );
}

function MessageBox({ type = "info", text }) {
  return (
    <div className={`message-box message-${type}`}>
      {text}
    </div>
  );
}
