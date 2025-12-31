import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [ products, setProducts ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    const arrToUpdateProducts = products.map(product =>
        product.id === productId ? {...product, count: product.count +1} : product
    )
    setProducts(arrToUpdateProducts)

  }
  
  function handleRemoveClick(productId) {
    const arrToUpdateProducts = products.filter(product =>{
        return product.id !== productId;
    })
    setProducts(arrToUpdateProducts)
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
           <button onClick={() =>{
            handleRemoveClick(product.id)
           }}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
