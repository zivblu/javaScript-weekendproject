function fibonacci(num) 
    { 
        if(num==1) 
            return 0; 
        if(num==2) 
            return 1; 
        let num1=0; 
        let num2=1; 
        let sum=0; 
        let i=2; 
        while (i<num)   
        { 
            sum=num1+num2; 
            num1=num2; 
            num2=sum; 
            i+=1; 
        } 
        return num2; 
    }
    console.log(fibonacci(12));
    console.log(fibonacci(15));
    console.log(fibonacci(21));
    