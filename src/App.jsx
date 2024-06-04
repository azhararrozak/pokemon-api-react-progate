import { useState, useEffect } from 'react'
import PokeList from './components/PokeList'

function App() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results))
  }, [])


  return (
    <div style={styles.container}>
      <h2>POKEMON LIST</h2>
      <PokeList pokemonList={pokemonList} />
    </div>
      
  )
}

const styles = {
  container: {
    width: "50%",
    margin: "0 auto",
    padding: "80px",
    textAlign: "center",
  },
}

export default App
