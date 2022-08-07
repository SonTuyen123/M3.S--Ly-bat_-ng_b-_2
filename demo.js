const X = x => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x)
        }, 1000)
    })
}
const Y = y => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(y)
        })
    }, 1000)
}