import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import Login from "../pages/login/Login";
import Dashboard from "../pages/Dashboard";
import Tabela from "../pages/Tabela";
import Desabilitar from "../pages/desabilitar/DesabilitarProtocolo";
import CadastrarUsuarioProtocolo from "../pages/cadastrar/CadastrarProtocolo";
import Layout from "../components/Layout";


function PrivateRoute({ children }) {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? children : <Navigate to="/login" />;
}

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="tabela" element={<Tabela />} />
          <Route path="desabilitar" element={<Desabilitar />} />
          <Route path="cadastrar" element={<CadastrarUsuarioProtocolo />} />
          
        </Route>

        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}
