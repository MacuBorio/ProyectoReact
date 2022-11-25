import React from "react";
import Footer from "./components/footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidxs a Casa Machi"}/>
      <Footer />

    </div>
  )
}

export default App;
