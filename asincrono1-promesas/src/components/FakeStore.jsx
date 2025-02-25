import { useEffect, useState } from 'react';

export const FakeStore = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=3")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <h2 className="card-title">Fake Store Products</h2>
            {products.map(({ id, title, image, price }) => (
                <div key={id} className="item">
                    <img src={image} alt={title} className="image" />
                    <p className="name">{title}</p>
                    <p className="price">${price}</p>
                </div>
            ))}
        </div>
    );
};