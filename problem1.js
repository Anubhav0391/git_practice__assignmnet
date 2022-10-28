    let num = 7;
    let factor=0;
    for(i=1; i<=num; i++){
        if(num%i!==0){
            factor++;
        }
    }
    if(factor===2){
        console.log("Prime");
    }else{
        console.log("Not prime");
    }