import { useEffect, useState } from 'react';

type Product = {
  id: number;
  sort_order: number;
  name: string;
  ingredient_label: string;
  description: string;
  swatch_color: string;
  status: string;
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
          <h2>What's in the works.</h2>
          <p>Pulled straight from your database — edit rows in Turso and this list updates without touching code.</p>
        </div>
        <div className="product-grid">
          {products.map((p) => (
            <div className="product-card" key={p.id}>
              {p.status === 'soon' && <span className="ribbon">soon</span>}
              <div className="product-swatch" style={{ background: p.swatch_color }} />
              <span className="ingredient">{p.ingredient_label}</span>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
