function request(type) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            type === 'a' ? resolve('resolve') : reject('reject');
        }, 1000);
    })
}

async function getData() {
    //cách 1
    // try{
    //     let ret1 = await request('c')
    // }catch(error){
    //     console.log(`Error: ${error.message}`);
    // }
    // try{
    //     let ret2 = await request('b')
    // }catch(error){
    //     console.log(`Error2: ${error.message}`);
    // }

    //cách 2
    // let ret3 = await request('a').then(response => console.log(response)).catch(err => console.log(`Error: ${err.message}`));

    //cách 3
    let err, result;
    [err, result] = await handlerRequest(request('a'))
    if (err) {
        console.error(`Error: ${err}`);
    }
    [err, result] = await handlerRequest(request('b'))
    if (err) {
        console.error(`Error: ${err}`);
    }
    [err, result] = await handlerRequest(request('c'))
    if (err) {
        console.error(`Error: ${err}`);
    }


}

const handlerRequest = promise => {
    return promise.then(data => ([undefined, data])).catch(err => ([err, undefined]))
}
getData();