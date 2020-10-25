const bill = [124,48,268];
const tipCalculator = bill.map((x) =>{
     if( x < 50){
          tip1 = x*0.2;
          return tip1;
     }else if(50 < x && x < 200){
          tip2 = x*0.15;
          return  tip2;
     }else if( x > 200)
          tip3 = x*0.1;
          return tip3;              
})
console.log('三家饭店小费分别为：',tipCalculator)
const tip = [tip2+124,tip1+48,tip3+268]
console.log('三家饭店最终支付金额分别为：',tip)





















