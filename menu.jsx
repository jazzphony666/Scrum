
import React from "react";
import SidebarMenu from "./SidebarMenu";

function App() {
  return (
    <div className="App">
      <SidebarMenu />
      <div className="content">
        {/* Aquí va el contenido principal de la aplicación */}
        <h1>Bienvenido</h1>
      </div>
    </div>
  );
}

export default App;
