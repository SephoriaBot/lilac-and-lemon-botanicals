import ProgressRitual from './components/ProgressRitual';
import ProductGrid from './components/ProductGrid';
import FollowForm from './components/FollowForm';

export default function App() {
  return (
    <>
      <nav>
        <div className="wrap">
          <span className="wordmark">Lemon + Lilac Botanicals</span>
          <span className="status-pill">In the making</span>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap">
          <span className="eyebrow">Small-batch skincare · founded by an esthetician</span>
          <h1>Grown before<br />it's <span className="accent">made</span>.</h1>
          <p className="tagline">
            Formulas built on years behind the treatment table — steeped, tested, and (soon) bottled by hand.
          </p>
          <div className="art-frame hero-art">
            {/* Replace this block with your own artwork:
                <img src="/hero-art.png" alt="" /> */}
            <span className="art-frame-label">your art here<br />4:5 · e.g. hero-art.png</span>
          </div>
        </div>
      </header>

      <div className="divider" />

      <section className="story">
        <div className="wrap" style={{ display: 'contents' }}>
          <div>
            <span className="label">The Idea</span>
            <h2>An esthetician's cabinet, bottled.</h2>
            <p>Add a paragraph here in your own voice — how long you've been doing skin, what made you want to formulate instead of just treat, what a client would notice in your hands that they won't find on a shelf.</p>
            <p>This is the part people read to decide if they trust you. It doesn't need to be polished — it needs to sound <span className="story-mark">like you</span>.</p>
          </div>
          <div className="art-frame story-art">
            {/* Replace this block with your own artwork:
                <img src="/story-art.png" alt="" /> */}
            <span className="art-frame-label">your art here<br />4:5 · e.g. story-art.png</span>
          </div>
        </div>
      </section>

      <ProgressRitual />
      <ProductGrid />
      <FollowForm />

      <footer>
        <div className="wrap">© 2026 Lemon + Lilac Botanicals · built one step at a time</div>
      </footer>
    </>
  );
}
