let input = process.argv;
n= parseInt(input[2]);
let c=0;
while(n>=1)
{
    n=n/10;
    c+=1;
}
console.log(c);