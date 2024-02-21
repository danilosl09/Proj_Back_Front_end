const express = require('express');
const routes = require("./routes/routes")
const path = require("path")
require("./config/associations");
const cors = require('cors');
const methodOverride = require('method-override');  

const server = express();
const port = 3000;

//criando um middleware para que substitua requisições POST ou GET por outras quando a URL possui "_method"
server.use(methodOverride("_method",{methods:["POST","GET"]}));

server.use(express.json());
server.use(express.urlencoded({extended:true}))
server.use(routes)
server.use(cors())

// //avisando o express sobre um repositório estático no projeto
// server.use(express.static(path.join(__dirname,"public")))
// //avisando o express do local dos arquivos estáticos
// server.set("public", path.join(__dirname,"public"))

server.listen(port, () => {
    console.log('Servidor Back rodando na porta ' + port + '!')
}); 