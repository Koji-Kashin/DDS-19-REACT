import { createBrowserRouter } from "react-router-dom";

// Importação das páginas
import App from "./App.jsx";
import PaginaErro from "./pages/PaginaErro.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Contato from "./pages/Contato.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Sobre from "./pages/Sobre.jsx";

const router = createBrowserRouter([
  {
    path: "/", //Caminho da ULR
    element: <App />, //Componente que será renderizado
    errorElement: <PaginaErro />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
      {
        path: "cadastro",
        element: <Cadastro />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
        path: "/PaginaErro",
        element: <PaginaErro />,
      }
    ],
  },
]);

export default router;
