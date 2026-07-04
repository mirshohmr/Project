function Nd() {
  const products = [
    {
      id: 1,
      name: 'Ноутбук ASUS ROG',
      price: '1260 ₽',
      image: 'https://via.placeholder.com/200x150?text=Ноутбук+1'
    },
    {
      id: 2,
      name: 'Ноутбук ASUS ROG',
      price: '1260 ₽',
      image: 'https://via.placeholder.com/200x150?text=Ноутбук+2'
    },
    {
      id: 3,
      name: 'Ноутбук ASUS ROG',
      price: '1260 ₽',
      image: 'https://via.placeholder.com/200x150?text=Ноутбук+3'
    },
    {
      id: 4,
      name: 'Ноутбук ASUS ROG',
      price: '1260 ₽',
      image: 'https://via.placeholder.com/200x150?text=Ноутбук+4'
    }
  ];

  return (
    <div>
      <h1>Магазин</h1>

      <h2>Поиск</h2>
      <div>
        <input type="text" placeholder="Введите запрос" size="30" />
        <button>Найти</button>
      </div>

      <hr />

      {products.map((product) => (
        <div key={product.id}>
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
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Nd;