import styled from "styled-components";

interface CoresBotao {
  [key: string]: string;
}
const coresBotao: CoresBotao = {
  banana: "#ffffaf",
  uva: "#c593f0;",
  laranja: "#ffd382",
  maçã: "#ff8585",
  pêra: "#88fd88",
  amora: "lightblue",
};

interface BotaoDefaultProps {
  cor: string;
}
export const BotaoDefault = styled.button<BotaoDefaultProps>`
  box-shadow: 1px 1px 5px black;
  border: none;
  background-color: ${(props) => coresBotao[props.cor]};
  color: black;
  font-weight: bolder;
  border-radius: 20px;
  padding: 10px;
  width: 160px;
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: "Dosis", sans-serif;
  font-size: 18px;
  text-transform: capitalize;
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 10px black;
  }
`;
