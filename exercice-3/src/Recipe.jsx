import Steps from './Steps'  // ← AJOUT

function Recipe() {
  const ingredients = ["Oeufs", "Lait", "Farine", "Beurre"];

  return (
    <article>
      <h2>La recette de la pâte à crèpes</h2>
      <h3>Ingrédients</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Étapes</h3>      {/* ← AJOUT */}
      <Steps />             {/* ← AJOUT : composant imbriqué */}
    </article>
  )
}

export default Recipe