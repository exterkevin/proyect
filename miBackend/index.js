//se declara la variable Express
const express = require ('express');
const app = express();
const cors = require('cors');
 
//se declara la variable de MYSQL 
const mysql = require ('mysql');

//configuracion de cors (bloqueo de seguridad)
app.use(cors()) //habilita todas las comunicaciones 

//configuaracion del Server
app.set('port', process.env.PORT || 3005);
 
//conexion MYSQL
const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'prueba',
    user: 'root',
    password: 'root',
    port: '3306'
});
 
//ruta principal de la app es localhost:3000
app.get('/', (req, res)=>{
    res.send('Bienvenido a mi App');
});
 
//ruta localhost:3005/usuarios
//Obtener todos los usuarios
app.get('/usuarios', function(req, res){
        let usuarios = {};
        
        //hace una consulta a la base de datos Usuarios para mostrar todos los datos de la tabla en consola
        conexion.query('select * from usuarios', function(error, rows){
            if (error) throw error; //si hay un error lo muestra en consola de lo contrario muestra la tabla 
 
            usuarios = rows;
            console.table(rows);
 
            res.json(usuarios);//muestra los datos de la tabla usuarios en la página 
        });
    
       
});
/*
//Obtener un usuario específico
app.get('/usuarios/:id',function(req, res){ //'users/:id'
    
    const id = req.query.id;
    
    conexion.query('select * from usuarios where id = ?', id, (error, row) => {
            if (error) throw error;
 
            
            res.send(row);
        });
});
 
// Modificar un usuario existente
app.put('/users/:id', (req, res) => {
    const id = req.query.id;
 
    conexion.query('update usuarios set ? where id = ?', [req.body, id], (err, result) => {
        if (err) throw err;
 
        res.send('User updated successfully.');
    });
});
 
// Crea un nuevo usuario
app.post('/usuarios', (req, res) => {
    conexion.query('insert into usuario set ?', req.body, (error, rows) => {
        if (error) throw error;
        
        res.status(201).send(`Usuario ha sido creado con ID: ${rows.insertId}`); //estado de la respuesta 201, que significa creado.
    });
});
 
// Eliminar un usuario
app.delete('/usuarios/:id', (req, res) => {
    const id = req.query.id;
 
    conexion.query('delete from usuarios where id = ?', [req.params.id], (err, rows) => {
        if (err) throw err;
 
        res.send('Usuario Eliminado.');
    });
});
*/
//corriendo el servidor 
app.listen(app.get('port'), () =>{
    console.log('el servidor está corriendo en el puerto', app.get('port'))
});
