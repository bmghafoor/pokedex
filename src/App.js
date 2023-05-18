import Pokecard from "./Pokecard";
import Pokedex from "./Pokedex";
import "./pokedex.css";

function App() {
  return (
    <div className="pokedex">
      <h3>Pokedex</h3>
      <span>
        {Pokedex.map((p) => (
          <Pokecard
            name={p.name}
            id={p.id}
            type={p.type}
            xp={p.base_experience}
          />
        ))}
      </span>
    </div>
  );
}

export default App;
