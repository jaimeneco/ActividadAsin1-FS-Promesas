import { useEffect, useState } from 'react';

const Componente2 = () => {
    const [usuario, setUsuarios] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(usuario => setUsuarios(usuario))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!usuario) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="api-component">
            <h2>INFO FROM: RANDOM USER GENERATOR</h2>
            <ul>
                {usuario.map((usuario, idx) =>
                    <li key={usuario.name}> 
                        {usuario.name}, 
                        {usuario.age}
                    </li>
                )}
            </ul>
            
        </div>
    );
};

export default Componente2;