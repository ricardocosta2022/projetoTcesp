import { Link } from "react-router-dom";
import { FaHome, FaTable, FaMoon, FaSun, FaUser, FaBookReader } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaJava } from "react-icons/fa6";

export default function Sidebar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <aside className="sidebar">
      <h2>Painel</h2>

      <nav>
        <Link to="/desabilitar" className="side-link">
          <FaUser /> Desabilitar Protocolo
        </Link>

        <Link to="/cadastrar" className="side-link">
          <FaUser /> Cadastrar Protocolo
        </Link>

        <Link to="/cadastrarProduto" className="side-link">
          <FaBookReader /> Cadastrar Produto
        </Link>

        <button className="side-link" onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </nav>
    </aside>
  );
}
