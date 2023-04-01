const name="AjayTiwari";
const email="tiwariajay033@gmail.com";
const phoneNumber="9399250600";
let ans="";
let sum=0;
for(let i=0;i<phoneNumber.length;i++)
{  sum=sum+Number(phoneNumber[i]);
   
}
for(let i=1;i<=sum;i++)
{  
   

 if(i%3==0 && i%4==0)
     ans=ans+"FizzBuzz";
    else if (i%4==0)
     ans=ans+"Buzz";
    else if(i%3==0) 
     ans=ans+"Fizz";
    else
     ans=ans+i; 
     
     ans=ans+" ";
}
console.log(ans);
