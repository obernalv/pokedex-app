import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import "./styles/PokeDetailPage.css";

const PokeDetailPage = () => {
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const [pokemon, getPokemon] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, [name]);

  console.log(pokemon);

  return (
    <div className="detail_container">
      <div className="detail__content-ico">
        <header className="detail__header">
          <img
            className="detail__ico"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </header>
        <div className="pokemon-info">
          <h2 className="pokemon-name">{pokemon?.name}</h2>
          <hr />
          <section className="pokemon-characteristics">
            <ul className="characteristics__list">
              <li className="characteristics__items">
                <span className="characteristics__label">Height</span>
                <span className="characteristics__value">
                  {pokemon?.height}
                </span>
              </li>
              <li className="characteristics__items">
                <span className="characteristics__label">Weight</span>
                <span className="characteristics__value">
                  {pokemon?.weight}
                </span>
              </li>
            </ul>
          </section>

          <article className="pokemon-description">

            <section >
              <h2 className="title__type">Type(s)</h2>

              <ul className="type__list">
                {pokemon?.types.map((types) => (
                  <li className="type__value" key={types.type.url}>
                    {types.type.name}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="title__skill">Skill(s)</h2>
              <ul className="type__list">
                {pokemon?.abilities.map((abilities) => (
                  <li className="skill__value" key={abilities.ability.url}>
                    {abilities.ability.name}
                  </li>
                ))}
              </ul>
            </section>

          </article>
          
          <section className="pokemon-stats">
              <h2 className="stats__title">Stats <hr className="separador-hr" /></h2>

              <ul className="stats__list">
                {pokemon?.stats.map((stats) => (
                  <li className="stat__value" key={stats.stat.url}>
                    {stats.stat.name}
                    {stats.base_stat}
                  </li>
                ))}
              </ul>
            </section>
        </div>
      </div>

      <div className="detail__content-moves">
        <h2 className="moves__title">Movements</h2>
        <ul className="moves__list">
          {pokemon?.moves.map((moves) => (
            <li className="moves__value" key={moves.move.url}>
              {moves.move.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokeDetailPage;
