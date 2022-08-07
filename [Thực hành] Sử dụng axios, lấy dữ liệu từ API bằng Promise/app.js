axios = require('axios')

function getJSONAPI(){
    return new Promise(function(resolve){
        axios.get('http://jsonplaceholder.typicode.com/posts/2')
            .then(function(json){
                resolve(json.data);
            })
    })
}
getJSONAPI().then(result =>{
    console.log(result);
})