import ProductGrid from './ProductGrid';
import FollowForm from './FollowForm';

export default function App() {
  return (
    <>
      <nav>
        <div className="wrap">
          <span className="wordmark">Rue Botanicals</span>
          <span className="status-pill">In the making</span>
        </div>
      </nav>

      <section className="story">
        <div className="wrap" style={{ display: 'contents' }}>
          <div>
            <span className="label">The Idea</span>
            <h2>An esthetician's cabinet, bottled.</h2>
            <p>Add a paragraph here in your own voice — how long you've been doing skin, what made you want to formulate instead of just treat, what a client would notice in your hands that they won't find on a shelf.</p>
            <p>This is the part people read to decide if they trust you. It doesn't need to be polished — it needs to sound <span className="story-mark">like you</span>.</p>
          </div>
          <div className="art-frame filled story-art">
            <img src="/illustrations/15_window.png" alt="Illustrated flower pitcher" />
          </div>
        </div>
      </section>

      <ProductGrid />
      <FollowForm />

      <footer>
        <div className="wrap">© 2026 Rue Botanicals · built one step at a time</div>
      </footer>
    </>
  );
}
