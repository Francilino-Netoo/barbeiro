import React from 'react';
import styled from 'styled-components/native';

const TextoDosDados = styled.View`
  width: 100%;
  height: 60px;
  background-color: #83d6e3;
  flex-direction: row;
  border-radius: 30px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;
const TextoDosDadosPerfil = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #268596;
  margin-left: 10px;
`;

export default ({placeholder, value, onChangeText, password}) => {
  return (
    <TextoDosDados>
      <TextoDosDadosPerfil
        placeholder={placeholder}
        placeholderTextColor="#268596"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </TextoDosDados>
  );
};
