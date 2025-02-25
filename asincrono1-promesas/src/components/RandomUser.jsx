import { useEffect, useState } from 'react';

export const RandomUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=3")
        .then((res) => res.json())
        .then((data) => setUsers(data.results));
    }, []);

    return (
        <div className="card">
            <h2 className="card-title">Random Users</h2>
            {users.map(({ login, name, picture, location }) => (
            <div key={login.uuid} className="item">
                <img src={picture.medium} alt={name.first} className="avatar" />
                <p className="name">{name.first} {name.last}</p>
                <p className="location">{location.country}</p>
        </div>
        ))}
    </div>
    );
};





// import { useEffect, useState } from 'react';

// const Componente2 = () => {
//     const [usuario, setUsuarios] = useState(null);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(usuario => setUsuarios(usuario))
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     if (!usuario) {
//         return <div>Cargando...</div>;
//     }

//     return (
//         <div className="api-component">
//             <h2>INFO FROM: RANDOM USER GENERATOR</h2>
//             <ul>
//                 {usuario.map((usuario, idx) =>
//                     <li key={usuario.name}> 
//                         {usuario.name}, 
//                         {usuario.age}
//                     </li>
//                 )}
//             </ul>
            
//         </div>
//     );
// };

// export default Componente2;