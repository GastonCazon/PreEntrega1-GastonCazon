import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido"} />
    </>
  );
}

export default App;
