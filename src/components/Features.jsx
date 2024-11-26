const Features = () => {
  const features = [
    { title: 'Clinically Studied', description: 'Lab-tested vitamins.', icon: '/a.item-icon-e (1).png' },
    { title: 'Vegetarian Friendly', description: 'Wide vegetarian options.', icon: '/a.item-icon-e.png' },
    { title: 'Made in India', description: 'Shop local and explore health products made right here in India.', icon: '/a.item-icon-e (2).png' },
    { title: 'Free Shipping', description: 'No shipping costs.', icon: '/a.item-icon-e (3).png' },
    { title: 'No Risk', description: 'We ensure that all products are safe and within their use-by date.', icon: '/a.item-icon-e (4).png' },
    { title: 'GMO-Free', description: 'Natural, no modified products.', icon: '/a.item-icon-e (5).png' },
  ];

  return (
    <section className="features">
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.icon} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
