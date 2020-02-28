const http = require('http');
const url = require('url');
const petshop = require('./petshop');

let server = http.createServer( (request, response) => {

    let urlCompleta = url.parse(request.url, true);

    switch (urlCompleta.pathname) {
        case "/":
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            response.write("Você está na página inicial");
            response.end();
            break;
        case "/home":
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            response.write("Você está no sistema Petshop!");
            response.end();
            break;
    }

    if (urlCompleta.pathname == "/pet/adicionar") {
        if (petshop.adicionarPets(urlCompleta.query.nome)) {
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            response.end("O pet foi cadastrado com sucesso");
        } else {
            response.writeHead(401, {'Content-Type': 'text/html; charset=utf-8'});
            response.end("Erro ao tentar cadastrar um pet");
        }
    }

            
});

server.listen(3000, 'localhost');

