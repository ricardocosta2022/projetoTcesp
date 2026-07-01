import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function TopbarHeader() {
  const { logout } = useContext(AuthContext);

  return (
    <header className="topbar">
      <span>Painel Administrativo</span>
      <button onClick={logout} className="btn-logout">
        Sair
      </button>
    </header>
  );
}
