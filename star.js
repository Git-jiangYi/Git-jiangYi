for (let r = 0; r <4; r++) {   
    let k=''       
    for (let j=4; j>r+1; j--) {
        k+=" " 
    }
    for (let j = 0; j<1*r+1; j++) {
        k+=" *" 
    }
    console.log(k)
    k+='\n'
}
for( let r = 1; r<=3; r++){
    let k='' 
    for( let j = 1;j <= r; j++){
        k+=" " 
    }
    for( let j = 1; j <=(4-r+1)-1; j++){
        k+=" *" 
    }
    console.log(k)
    k+='\n'
}
