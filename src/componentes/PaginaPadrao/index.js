import React from 'react';
import Banner from '../Banner'; 
import { Outlet } from "react-router-dom";

function PaginaPadrao() {
  return (
    <main>
      <Banner />

     
      <Outlet/>
      {/*  A rota que é pai de outras se responsabiliza por dizer onde elas serão renderizadas com o Outlet do react-router-dom.*/}
  
    </main>
  );
}
 
export default PaginaPadrao;
