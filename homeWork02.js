// 一、
function mean1() {
    let sum = 0
    let s =0
    for (let i =0; i<arguments.length;i++){
        sum+=(arguments[i]);
    }
    s =sum/arguments.length
    return s;
}
let a = mean1(1,4,7,3,6,9)
console.log(a)

// 二、
function mean2(num){
    const sum = num.reduce((sum,curVal) =>sum+curVal)/num.length;
    return sum;
}
let b = mean2([1,4,7,2,5,8])
console.log(b);

// 三、
const array1=[1,4,7,4,5,6]
const array2=array1.map((sum)=>{
    if(sum%2==0){
        return sum;
    }
})

const array3 = [];
array2.forEach(item=>{
    if(item){
    array3.push(item)
    }
})

function mean3(num){
    const sum = num.reduce((sum,curVal)=>sum+curVal)/num.length;
    return sum;
}

let c = mean3(array3)
console.log(c)