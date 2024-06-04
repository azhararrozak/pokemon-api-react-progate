import React from 'react'

const PokeList = ({ pokemonList }) => {
  return (
    <div style={styles.gridContent}>
        {pokemonList.map((pokemon, index) => (
            <div key={index} style={styles.card}>
            {pokemon.name}
            </div>
        ))}
    </div>
  )
}

const styles = {
    gridContent: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 16,
      },
      card: {
        padding: "16px 8px",
        backgroundColor: "aquamarine",
        borderRadius: "8px",
        cursor: "pointer",
      },
}

export default PokeList