import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  // --- RECUPERA USER DO LOCALSTORAGE COM SEGURANÇA ---
  const getInitialUser = () => {
    const saved = localStorage.getItem("user");

    // evita quebrar caso tenha sido salvo "undefined"
    if (!saved || saved === "undefined") {
      localStorage.removeItem("user");
      return null;
    }

    try {
      return JSON.parse(saved);
    } catch (e) {
      console.warn("Valor inválido no localStorage.user, removendo...");
      localStorage.removeItem("user");
      return null;
    }
  };

  const [user, setUser] = useState(getInitialUser);
  const isAuth = !!user;

  // --- LOGIN ---
  const login = async (nome, senha) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/usuarios/usuarioPorNomeSenha",
        { params: { nome, senha } }
      );

      const usuarios = response.data;

      if (!usuarios || usuarios.length === 0) {
        return { success: false, message: "Usuário não encontrado" };
      }

      const usuarioEncontrado = usuarios[0];

      // salva com segurança
      localStorage.setItem("user", JSON.stringify(usuarioEncontrado));
      setUser(usuarioEncontrado);

      return { success: true };
    } catch (err) {
      console.error("Erro no login:", err);
      return { success: false, message: "Erro ao conectar com o servidor" };
    }
  };

  // --- LOGOUT ---
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
