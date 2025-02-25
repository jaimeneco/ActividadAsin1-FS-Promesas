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



// import { useEffect, useState } from 'react';

// const Componente1 = () => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         fetch('https://fakestoreapi.com/users') 
//             .then(response => response.json())
//             .then(data => setData(data))
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     if (!data) {
//         return <div>Cargando...</div>;
//     }

//     return (
//         <div className="api-component">
//             <h2>INFO FROM: FAKE STORE APIS</h2>
//             <p>User: {data.username}</p>
//             <p>Mail: {data.email}</p>
//             <p>ID: {data.id}</p>
//         </div>
//     );
// };

// export default Componente1;