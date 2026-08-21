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
  const productImages: Record<number, string> = {
  89: '/illustrations/1_lait_de_rose.png',
  90: '/illustrations/2_eclat_serum.png',
  91: '/illustrations/3_creme_douce.png',
  92: '/illustrations/4_lessentiel_cleanser.png',
  93: '/illustrations/5_equilibre_serum.png',
  94: '/illustrations/6_voile_moisturizer.png',
};


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

          <p>Every formula begins with botanicals chosen for a reason — rose and calendula for gentle days, green tea and yarrow for balance, and green tea and nasturtium for fresh, clear-feeling skin. Nothing extra, nothing borrowed — just thoughtful formulas rooted in the garden.</p>
       </div>
        <div className="product-grid">
          {products.map((p) => (
            <div className="product-card" key={p.id}>
              {p.status === 'soon' && <span className="ribbon">soon</span>}
             <div className="product-image">
  <img
    src={productImages[p.id]}
    alt={`${p.name} product illustration`}
  />
</div>
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
