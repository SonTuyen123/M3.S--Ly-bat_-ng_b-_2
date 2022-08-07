async function getSum(arr) {
    if (arr instanceof Array) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum;
    }
    throw new Error("input data is inscorrect");
}
async function f(){
    try {
        let result = await getSum([3,5]);
        console.log(result);
    }catch (err) {
        console.log(err)
    }
}
f();