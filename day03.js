// 语句的类型：
// 表达式语句、复合语句和空语句、声明语句
// 控制语句（条件 循环 跳转）、其他语句
// 表达式语句：
// 赋值
a=1;
// 递增 递减语句：
a++;
a--;
// delete语句：
delete a.x;
// 函数调用语句：
console.log("hello");
// 复合语句和空语句：
// 符号语句--多条语句用大括号括起来-语句块：
console.log("hello");
// 空语句：
{
    a=1;
    b=2;
    console.log(a+b)
}
for(let i =1;i<12;a[i++]);
// 声明语句：
// 定义变量--var let const
// 定义函数：
// function
// 条件语句：
// if else语句：
const number;
if(number===20){
    return'这个数字是20！';
}else{
    return'这个数字不是20！';
}


const number=20;
if (number < 10) {
    return '这个数字小于 10';
  } else if (number >= 10 && number < 20) {
    return '这个数字大于等于10，但是小于20！';
  } else if (number >= 20 && number < 50) {
    return '这个数字大于等于20，但是小于50！';
  } else {
    return '我放弃了！我所知道的是它不小于50！';
  }

  const age = 20;
  switch(age) {
    case 20:
      return '你20岁！';
      break;
    case 21:
      return '你21岁';
      break;
    default:
      return '你既不是20岁，也不是21岁';
  }

//   循环语句：do...while、while、for、for..in(枚举对象中的非符号键属性）)
// for...of(遍历可迭代对象的元素)
const numbers=[1,2,,]
for(let i=0;i<numbers.length;i++){
    numbers[i]+=1
}
console.log(numbers);

const data={
    a:15,
    b:3,
    c:14
}
for(const item in data){
    data[item]+=1
}
console.log(data);

for(const el of[2,3,4,5]){
    console.log(el);
}




