function slowAdd(a,b){
    return new Promise(function(resolve,reject) {
        setTimeout(()=>resolve(a+b),1000)
    })
}
async function Salay(c,d){
    const newSalary = await slowAdd(c,d);
    console.log(`newSalary: ${newSalary}`);
    return newSalary
}
Salay(1000,100).then(newSalary => console.log(`newSalary:.... ${newSalary}`));
