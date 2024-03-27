import { useNavigate, useParams } from "react-router-dom";
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

  const navegate = useNavigate();

  const handlePokeDetail = () => {
    navegate(`/pokedex`);
  };

  return (
    <>

    <div className="navegate" onClick={handlePokeDetail}>
          <i class='bx bx-left-arrow-alt' ></i>
    </div>

      <div className="detail_container">
        <div className={`detail__content-ico `}>
          <header className="detail__header">
            <img
              className="detail__ico"
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </header>
          <div className={`pokemon-info bg-${pokemon?.types[0].type.name}`}>
            <h2 className={`pokemon-name bg-${pokemon?.types[0].type.name}`}>
              {pokemon?.name}
            </h2>

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
              <section className="section-types">
                <h2 className="title__type">Type(s)</h2>

                <ul className="type__list">
                  {pokemon?.types.map((types) => (
                    <li className="type__value" key={types.type.url}>
                      {types.type.name}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="section-skills">
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
              <h2 className="stats__title"> Stats </h2>
              <hr className="separador" />

              <ul className="stats__list">
                {pokemon?.stats.map((stats) => {
                  const percentage = Math.ceil((stats.base_stat / 250) * 100);

                  let barClass = "";
                  if (percentage < 30) {
                    barClass = "low";
                  } else if (percentage < 70) {
                    barClass = "medium";
                  } else {
                    barClass = "high";
                  }

                  return (
                    <li className="stat__item" key={stats.stat.url}>
                      <span className="stat__name">{stats.stat.name}</span>
                      <div
                        className={`${barClass}`}
                        style={{ width: `${percentage}%` }}
                      >
                        {percentage}%
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </div>

        <div
          className={`detail__content-moves bg-${pokemon?.types[0].type.name}`}
        >
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
    </>
  );
};

export default PokeDetailPage;
