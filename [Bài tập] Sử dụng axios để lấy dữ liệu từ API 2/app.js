const axios = require("axios")


async function getAPI(){
    let data = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data.data
}

getAPI().then((result)=>{
    console.log(result)
})