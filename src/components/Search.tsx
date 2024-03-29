import { BsSearch } from "react-icons/bs";
import { useState } from "react";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <h2>Busque por um usuario</h2>
      <p>Conheça seus melhores resposiotrios</p>
      <div>
        <input
          type="text"
          placeholder="Digite o nome do usuario"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch></BsSearch>
        </button>
      </div>
    </div>
  );
};

export default Search;
