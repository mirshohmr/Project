import React from 'react';

function Nd() {
  const products = [
    {
      id: 1,
      name: 'Ноутбук ASUS ROG',
      price: '1260 ₽',
      image: 'https://m.media-amazon.com/images/I/71WH7jtyWpL._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: 2,
      name: 'Ноутбук ASUS ROG',
      price: '1260 ₽',
      image: 'https://m.media-amazon.com/images/I/71WH7jtyWpL._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: 3,
      name: 'Ноутбук ASUS ROG',
      price: '1260 ₽',
      image: 'https://m.media-amazon.com/images/I/71WH7jtyWpL._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: 4,
      name: 'Ноутбук ASUS ROG',
      price: '1260 ₽',
      image: 'https://m.media-amazon.com/images/I/71WH7jtyWpL._AC_UF894,1000_QL80_.jpg'
    }
  ];

  return (
    <div className="container">
      <h1>Магазин</h1>

      <h2>Поиск</h2>
      <div className="search-section">
        <input type="text" placeholder="Введите запрос" />
        <button>Найти</button>
      </div>

      <hr />

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img 
              src={product.image} 
              alt={product.name}
            />
            <h3>{product.name}</h3>
            <p>
              <strong>Цена:</strong>
              <br />
              {product.price}
            </p>
            <button>Купить</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nd;