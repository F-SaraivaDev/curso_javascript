const {createServer} = require('http');

let server = createServer((request, respose) => {
    respose.writeHead(200, {'Content-Type': 'text/html'});
    respose.write(`<h1>Hello World</h1>'
    <p>Primeira página com Node.js</p>
`);
    respose.end();
});

server.listen(8000);

console.log('Servidor rodando na porta 8000');
