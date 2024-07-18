import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./paginas/about me";
import Start from "./paginas/start";
import Menu from "./componentes/menu";
import PaginaPadrao from './componentes/PaginaPadrao';
import Footer from './componentes/Footer';
import Post from './paginas/post';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Start />} />    {/* O index indica que o caminho da rota é igual ao da rota pai. */}
          <Route path="/about me" element={<About />} />
          <Route   path='posts/:id' element={<Post/>}  />
        </Route>
        <Route path="*" element={<p>Página não encontrada</p>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
