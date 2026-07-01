import { useState } from "react";
import "./Login.css";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";
import { realizarLogin } from "../../controller/LoginController";

export default function Login() {

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!nome || !senha) {
      setError("Preencha todos os campos!");
      return;
    }

    // chama API
    const result = await realizarLogin(nome, senha);

    if (result.success) {

      // salva autenticação no contexto
      login();

      // opcional: salvar token
      localStorage.setItem("token", result.token);

      navigate("/dashboard");

    } else {
      setError(result.message);
    }
  };

  return (
    <div className="page-login">
      <div className="login-card">

        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

          <label className="login-label">Nome</label>

          <input
            type="text"
            className="login-input"
            placeholder="Digite seu usuário"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label className="login-label">Senha</label>

          <div className="senha-wrapper">

            <input
              type={mostrarSenha ? "text" : "password"}
              className="login-input"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <span
              className="toggle-senha"
              onClick={() => setMostrarSenha(!mostrarSenha)}
            >
              {mostrarSenha ? "👁️" : "🙈"}
            </span>

          </div>

          <button type="submit" className="login-button">
            Login
          </button>

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

        </form>
      </div>
    </div>
  );
}