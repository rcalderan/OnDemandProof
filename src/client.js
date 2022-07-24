const host = 'http://127.0.0.1:3000/';

const numberOfRequests=1000;

//the * is the simbol that makes the functions be an Generator. Its stops to "return", and user behave like an interator using yeld instead
async function * processData(){
    for(let i=1;i<=numberOfRequests; i++){
        console.log(`Request mumber: ${i}`);
        const info = await (await fetch(host,{method:'GET'})).text();
        yield info;
    }
}

for await (const data of processData()){
    console.table( data );
}