import { randomUUID } from 'crypto';
import { createServer } from 'http';
import { parse } from 'url'
 
const port = 3000;

let count = 0;

async function handler(request, response) {
    
    setTimeout(async ()=>{//simulates a delayed response.
        if(request.method ==='GET'){
            count++;
            console.log(`Request ${count}`);
            const {query:{name}} =parse(request.url,true);
            const item = {
                id: randomUUID()
            }
            return response.end(JSON.stringify(item));
        }
        return response.end('OK!');            
    },(Math.random()*100));
}

createServer(handler)
    .listen(port)
    .on('listening', () => {
        console.log(`server is running on port ${port}`)
    });