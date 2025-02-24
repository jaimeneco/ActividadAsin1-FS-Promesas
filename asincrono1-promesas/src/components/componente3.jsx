import { useEffect, useState } from 'react';

const Componente3 = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error', error));
    }, []);

    if (!data) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="api-component">
            <h2>INFO FROM: POKEMON API</h2>
            <p>Nombre: {data.name}</p>
            <p>Generación: {data.desc}</p>
            <p>¿Protagonista?: {data.is_main_series}</p>
        </div>
    );
};

export default Componente3;