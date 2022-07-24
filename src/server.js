import { randomUUID } from 'crypto';
import { createServer } from 'http';
import { parse } from 'url'
 
const port = 3000;

async function handler(request, response) {
    
    setTimeout(async ()=>{//simulates a delayed response.
        if(request.method ==='GET'){
            console.log('requested!');
            const {query:{name}} =parse(request.url,true);
            const item = {
                id: randomUUID()
            }
            return response.end(JSON.stringify(item));
        }
        return response.end('OK!');            
    },500);
}

createServer(handler)
    .listen(port)
    .on('listening', () => {
        console.log(`server is running on port ${port}`)
    });