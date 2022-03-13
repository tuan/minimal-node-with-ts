import http from 'http';
import { greet } from './greet';

http
  .createServer((req, res: http.ServerResponse) => {
    res.writeHead(200, { ContentType: 'text/plain' });
    res.write(greet('Tuan'));
    res.end();
  })
  .listen(8080);

console.log('Listening to port 8080');
