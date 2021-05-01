const express = require('express'); 
const PORT = 3000; 
const app = express();

app.get('/', (req, res) => {
    const saludo = "Bienvenido a mi página"; 
    res.json({
        title: saludo
    }); 
}); 


app.listen(PORT, 'localhost', (err)=> {
    if(err) return console.log(err.message); 
    console.log("Connectado al servidor");
}); 


