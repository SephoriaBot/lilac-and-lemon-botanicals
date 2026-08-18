import { useEffect, useState } from 'react';

type Product = {
  id: number;
  sort_order: number;
  name: string;
  ingredient_label: string;
  description: string;
  swatch_color: string;
  status: string;
  size_oz: number;
  price: number;
};

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then((r) => r.json())
      .then((rows: Product[]) => setProducts(rows.sort((a, b) => a.sort_order - b.sort_order)))
      .catch(() => setProducts([]));
  }, []);

  return (
    <section className="products">
      <div className="wrap">
        <div className="products-head">
                   <span className="label">Coming Soon</span>
          <h2>Inspired by our personal garden.</h2>

    <div className="art-frame filled story-art">
          <img src="/illustrations/05_towels.png" alt="Illustrated clean stack of towels" />
        </div>

          <p>Every formula grows out of one of three botanical pairings — rose and lemon balm for gentle days, calendula and oat for tired barriers, green tea and lemon balm for balance. Nothing borrowed, nothing filler.</p>
       </div>
        <div className="product-grid">
          {products.map((p) => (
            <div className="product-card" key={p.id}>
              {p.status === 'soon' && <span className="ribbon">soon</span>}
              <div className="product-swatch" style={{ background: p.swatch_color }} />
              <span className="ingredient">{p.ingredient_label}</span>
             <h3>{p.name}</h3>
<div className="product-meta">
  <span>{p.size_oz} oz</span>
  <span>${p.price}</span>
</div>
<p>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
