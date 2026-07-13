import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import Login from "../pages/login/Login";
import Dashboard from "../pages/Dashboard";
import Desabilitar from "../pages/desabilitar/DesabilitarProtocolo";
import CadastrarUsuarioProtocolo from "../pages/cadastrar/CadastrarProtocolo";
import CadastrarProduto from "../pages/cadastroProduto/CadastrarProduto";
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
          <Route path="desabilitar" element={<Desabilitar />} />
          <Route path="cadastrar" element={<CadastrarUsuarioProtocolo />} />
          <Route path="cadastrarProduto" element={<CadastrarProduto />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}
