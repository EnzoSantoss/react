import Search from "../components/Search";
import { useState } from "react";

import { UserProps } from "../types/user";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const res = await fetch(`http://api.github.com/users/${userName}`);

    const data = await res.json();

    console.log(data);
  };

  return (
    <div>
      <Search loadUser={loadUser}></Search>
    </div>
  );
};

export default Home;
