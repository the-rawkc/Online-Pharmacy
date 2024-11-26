const BetterIngredients = () => {
  const ingredients = [
    { title: "Vitamin C", description: "Vitamin C as ascorbic acid", image: "/div.elbzotech-banner-info-wrap (1).png" },
    { title: "Vitamin B3", description: "Niacin for healthy gut and skin", image: "/div.elbzotech-banner-info-wrap (2).png" },
    { title: "Magnesium", description: "Boost energy and support muscle function", image: "/div.elbzotech-banner-info-wrap(5).png" },
    { title: "Hyaluronic Acid", description: "For smooth, supple, and soft skin", image: "/div.elbzotech-banner-info-wrap.png" },
    { title: "Lactobacillus", description: "Invigorate your gut microbiome", image: "/div.elbzotech-banner-info-wrap (4).png" },
  ];

  return (
    <section className="better-ingredients">
      <h2>Better Ingredients</h2>
      <p>
        Only the best when you choose products offered on our platform - high-quality ingredients for high-quality products!
      </p>
      <div className="ingredients-grid">
        {ingredients.map((ingredient, index) => (
          <div className="ingredient-card" key={index}>
            <img src={ingredient.image} alt={ingredient.title} />
            <h3>{ingredient.title}</h3>
            <p>{ingredient.description}</p>
            <button className="see-more">See More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BetterIngredients;
