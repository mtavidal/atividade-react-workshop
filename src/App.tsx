import CardFrutas from "./components/CardFrutas";
import "./global.css";

function App() {
  return (
    <div className="container">
      <div className="container-frutas">
        <CardFrutas qntInicial={5} qntMax={10} fruta="banana" />
        <CardFrutas qntInicial={10} qntMax={20} fruta="laranja" />
        <CardFrutas qntInicial={8} qntMax={15} fruta="uva" />
        <CardFrutas qntInicial={10} qntMax={20} fruta="maçã" />
        <CardFrutas qntInicial={5} qntMax={10} fruta="pêra" />
        <CardFrutas qntInicial={15} qntMax={30} fruta="amora" />
      </div>
      <h1 className="titulo-feira">Feirinha do React</h1>
    </div>
  );
}

export default App;
