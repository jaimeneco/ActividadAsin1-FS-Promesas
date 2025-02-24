import { useEffect, useState } from 'react';

const Componente1 = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/users') 
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!data) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="api-component">
            <h2>INFO FROM: FAKE STORE APIS</h2>
            <p>User: {data.username}</p>
            <p>Mail: {data.email}</p>
            <p>ID: {data.id}</p>
        </div>
    );
};

export default Componente1;