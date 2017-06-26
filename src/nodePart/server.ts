import * as http from 'http';

const server: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World Hugo \n");
})

const hostname: string = "127.0.0.1";
const port: number = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
