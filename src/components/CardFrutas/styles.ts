import styled from "styled-components";

interface CoresCard {
  [key: string]: string;
}
const coresCard: CoresCard = {
  banana: "yellow",
  uva: "purple",
  laranja: "orange",
  maçã: "red",
  pêra: "green",
  amora: "blue",
};

interface CardDefaultProps {
  fruta: string;
}
export const CardDefault = styled.div<CardDefaultProps>`
  border: 2px solid black;
  background-color: ${(props) => coresCard[props.fruta]};
  color: black;
  border-radius: 20px;
  padding: 15px 20px;
  margin: 5px;
  width: 385px;
  /* height: 250px; */
  font-family: "Dosis", sans-serif;
  h1 {
    background-color: ${(props) => coresCard[props.fruta]};
    text-align: center;
    text-transform: uppercase;
    margin: 0px;
    padding: 10px;
  }
  h3 {
    background-color: ${(props) => coresCard[props.fruta]};
    padding-left: 18px;
    margin: 0;
  }
  p {
    background-color: ${(props) => coresCard[props.fruta]};
    padding: 7px;
    padding-left: 18px;
    margin: 0;
  }
`;
