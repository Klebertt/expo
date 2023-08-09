import React from "react";
import { Text } from "react-native";

const Campus = (props) => {
  return (
    <Text>
      O campus {props.nome} foi fundado em {props.anoFundacao}.
    </Text>
  );
};

const InstitutoFederal = (props) => {
  return (
    <Text>
      {props.sigla} - {props.uf}
    </Text>
  );
};

const App = () => {
  return (
    <>
      <InstitutoFederal sigla="IFAL" uf="AL" />
      <Campus nome="Maceió" anoFundacao={1909} />
      <Campus nome="Rio Largo" anoFundacao={2014} />
      <Campus nome="Satuba" anoFundacao={1905} />
      <InstitutoFederal sigla="IFPE" uf="PE" />
      <Campus nome="Garanhuns" anoFundacao={1905} />
    </>
  );
};

export default App;
