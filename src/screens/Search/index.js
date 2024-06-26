import React, { useState } from "react";
import Api from "../../Api";

import BarberItem from "../../components/BarberItem";

import {
  Container,
  SearchArea,
  SearchInput,
  Scroller,
  LoadingIcon,
  ListArea,
  EmptyWarning,
} from "./styles";

export default () => {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [emptyList, setEmptyList] = useState(false);

  const searchBarbers = async () => {
    setEmptyList(false);
    setLoading(true);
    setList([]);

    if (searchText != "") {
      let res = await Api.search(searchText);
      if (res.error == "") {
        if (res.list.length > 0) {
          setList(res.list);
        } else {
          setEmptyList(true);
        }
      } else {
        alert("Erro:" + res.error);
      }
    }

    setLoading(false);
  };

  return (
    <Container>
      <SearchArea>
        <SearchInput
          placeholder="Digite o nome do barbeiro"
          placeholderTextColor="#FFFFFF"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
          onEndEditing={searchBarbers}
          returnKeyType="search"
          autoFocus={true}
          selectTextOnFocus
        />
      </SearchArea>

      <Scroller>
        {loading && <LoadingIcon size="large" color="#000000" />}

        {emptyList && (
          <EmptyWarning>
            Não encontramos barbeiros com o nome "{searchText}"
          </EmptyWarning>
        )}

        <ListArea>
          {list.map((item, k) => (
            <BarberItem key={k} data={item} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};
