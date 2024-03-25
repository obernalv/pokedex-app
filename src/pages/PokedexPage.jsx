import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import ListPokemons from "../components/PokedexPage/ListPokemons";
import SelectType from "../components/PokedexPage/SelectType";
import Boton from "../components/shared/Boton";
import "./styles/PokedexPage.css";
import Loader from "../components/Loader";

const PokedexPage = () => {
  const [pokeSearch, setPokeSearch] = useState("");
  const [typeSelect, setTypeSelect] = useState("allPokemons");

  const trainer = useSelector((store) => store.trainer);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

  const [pokemons, getPokemons, getPokeByType, isLoading] = useFetch(url);

  const inputSearch = useRef();

  useEffect(() => {
    if (typeSelect === "allPokemons") {
      getPokemons();
    } else {
      getPokeByType(typeSelect);
    }
  }, [typeSelect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokeSearch(inputSearch.current.value.trim().toLowerCase());
  };

  const pokemonFiltered = pokemons?.results.filter((poke) => {
    return poke.name.includes(pokeSearch);
  });

  return (
    
    <div className="content">
      <div className="container-search">
        <p className="title-welcome">
          Welcome <span className="welcome-text">{trainer}</span>, here you can
          find your favorite pokemon{" "}
        </p>

        <div className="search-content">
          <form onSubmit={handleSubmit}>
            <input
              className="input-search"
              ref={inputSearch}
              type="text"
              placeholder="Nombre"
            />
            <Boton texto={"Search"} />
          </form>

          <SelectType setTypeSelected={setTypeSelect} />
        </div>
      </div>

      <ListPokemons pokemons={pokemonFiltered} />

    </div>

  );
};

export default PokedexPage;

//patron custom hook
//Cree que me permite hacer peticiones asincronas a una api, ventana reutilizable en distintos crud, codigo mas limpio con nomre que le nombre que le di
