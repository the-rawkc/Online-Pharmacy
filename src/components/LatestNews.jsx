import React from 'react';

const LatestNews = () => {
  return (
    <section className="latest-news">
      <h2>Latest News</h2>
      <div className="news-items">
        <div className="news-item">
          <img src="div.item-post-inner (1).png" alt="News Image 1" />
          <h3>New Study on Probiotics</h3>
          <p>A new study highlights the benefits of probiotics for gut health.</p>
        </div>
        <div className="news-item">
          <img src="div.item-post-inner (5).png" alt="News Image 2" />
          <h3>Vitamin D and Immunity</h3>
          <p>Research shows that Vitamin D plays a key role in boosting immunity.</p>
        </div>
        <div className="news-item">
          <img src="div.item-post-inner (1).png" alt="News Image 3" />
          <h3>Top Vitamins for Energy</h3>
          <p>Find out which vitamins can help improve your energy levels.</p>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
