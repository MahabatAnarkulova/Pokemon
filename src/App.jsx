import React, { useEffect, useState } from "react";
import Card from "./components/card/Card";
import axios from "axios";

const api_url = "https://pokeapi.co/api/v2/pokemon/";



const App = () => {

  const [pokemons, setPokemons] = useState([])

  const Pokemonapi = async () => {
    const res = await axios.get(api_url);
    // console.log(res, '---res---');
    getPokemon(res.data.results);
  };


  const getPokemon = async(res)=> {
    res.map(async(item)=>{
      const result = await axios.get(item.url)
      // console.log(result.data,'--url---');
      setPokemons(state=>{
        state=[...state, result.data]
        return state
      })
    })

  }

  useEffect(() => {
    Pokemonapi();
  }, [api_url]);
  return (
    <div>
      <div className="container">
        <Card pokemon = {pokemons} />
      </div>
    </div>
  );
};

export default App;
