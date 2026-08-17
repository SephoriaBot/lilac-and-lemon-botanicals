import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <header className="hero">
      <div className="wrap">
        <span className="eyebrow">Small-batch skincare · founded by an esthetician</span>
        <h1>Rue <span className="accent">Botanicals</span></h1>
        <p className="tagline">
          Formulas built on years behind the treatment table — steeped, tested, and (soon) bottled by hand.
        </p>
        <div className="hero-links">
          <Link to="/about" className="hero-link">Read the story</Link>
          <Link to="/products" className="hero-link">See what's coming</Link>
        </div>
      </div>
    </header>
  );
}
