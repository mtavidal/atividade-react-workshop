// import { BotaoDefault } from "./styles";
import { useState } from "react";
import Botao from "../Botao";
import { CardDefault } from "./styles";

interface CardFrutasProps {
  qntInicial: number;
  qntMax: number;
  fruta: string;
}

export default function CardFrutas(props: CardFrutasProps) {
  const [cliques, setCliques] = useState(props.qntInicial);
  const [acabouEstoque, setAcabouEstoque] = useState(false);
  const incrementaContador = () => {
    if (cliques >= props.qntMax) {
      alert("O estoque já está cheio!");
    } else {
      setCliques(cliques + 1);
    }
  };
  const decrementaContador = () => {
    if (cliques === 0) {
      setAcabouEstoque(true);
    } else {
      setCliques(cliques - 1);
    }
  };

  const resetar = () => {
    setAcabouEstoque(false);
    setCliques(props.qntInicial);
  };

  return (
    <CardDefault fruta={props.fruta}>
      <h1>{props.fruta}</h1>
      <p>Quantidade atual: {cliques}</p>
      <p>Quantidade máxima: {props.qntMax}</p>
      {acabouEstoque ? <h3> As {props.fruta}s acabaram!</h3> : ""}
      <Botao
        texto={"Resetar estoque"}
        cor={props.fruta}
        acao={resetar}
        exibir={acabouEstoque}
      />
      <Botao
        texto={"Adicionar " + props.fruta}
        cor={props.fruta}
        acao={incrementaContador}
        exibir={!acabouEstoque}
      />
      <Botao
        texto={"Remover " + props.fruta}
        cor={props.fruta}
        acao={decrementaContador}
        exibir={!acabouEstoque}
      />
    </CardDefault>
  );
}
