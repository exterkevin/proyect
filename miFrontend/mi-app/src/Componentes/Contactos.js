import React, { useEffect, useState } from 'react';

const Contactos = () => {
      
const [contacts, setContacts] = useState([])

      useEffect(() => { 
            
            fetch("http://localhost:3005/usuarios")
                  .then(res => res.json())
                  .then(res=> {
                       console.table(res);
                       setContacts(res);
                  })
                  .catch((error) => {
                        console.log("[ERROR]: ", error)
                  });     
            }, [])  

      return (
            <div>
            {
                  contacts === null
                  ? 
                  <h1>Cargando... </h1>
                  :
                  <table>
                         <tr>
                              <th>Nombre de Usuario</th>
                         </tr>

                        {
                                 contacts.map(unContacto => <tr  key={unContacto.id_usu}>
                                                                   <td>{unContacto.nombre_usu}</td>
                                                            </tr>)     
                        }

                  </table>
            }
            </div>
      )
}

export default Contactos;