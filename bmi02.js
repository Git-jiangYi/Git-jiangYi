const markm = 78;   //mark的体重，单位为kg
const markh = 1.81;  //Mark的身高，单位为米
const johnm = 78;    //john的体重，单位为kg
const johnh = 1.8;   //john的身高，单位为米
mark = markm/(markh*markh);     //Mark的BMI
john = johnm/(johnh*johnh);    //JOHN的BMI
// console.log('Mark的BMI:'+mark);
// console.log('John的BMI:'+john);
// let BMI =(mark>john?'Mark的BMI比John的更高':'John的BMI比Mark的更高')
// console.log(BMI);
if (mark>john){
    console.log('Mark的BMI比John的更高')
}else if (mark<john){
    console.log('John的BMI比Mark的更高')
}else if (mark=john){
    console.log('Mark的BMI和John的BMI一样')
}

