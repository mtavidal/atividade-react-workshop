import { BotaoDefault } from "./styles";
interface BotaoProps {
  texto: string;
  cor: string;
  acao?: () => void;
  exibir: boolean;
}

export default function Botao(props: BotaoProps) {
  if (props.exibir) {
    return (
      <BotaoDefault cor={props.cor} onClick={props.acao}>
        {props.texto}
      </BotaoDefault>
    );
  }
  return <></>;
}
