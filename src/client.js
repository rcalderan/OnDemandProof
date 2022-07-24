const host = 'http://127.0.0.1:3000/';

const database = async () => Array.from({
    length:1000
}, (v,index)=>{ `${index}-data`

});

async function processData(){
    const data =await database();
    const responses =[];

    for(const item of data){
        const info = await (await fetch(host,{method:'GET'})).json();

        responses.push(info);
    }
    return responses;

}

console.table( await processData());