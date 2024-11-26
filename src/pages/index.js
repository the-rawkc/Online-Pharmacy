import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import BetterIngredients from '../components/BetterIngredients';
import Footer from '../components/Footer';
import LatestNews from '@/components/LatestNews';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <BetterIngredients /> {/* Add this section here */}
      <LatestNews />
      <Footer />
    </div>
  );
}
