let input = process.argv;
n = parseInt(input[2]);
function d2b(n)
{
    let sum=0;
    let pow =1
    while(n>=1)
    {
        let rem=n%2;
        sum=sum+(rem*pow);
        pow=pow*10;
        n=Math.floor(n/2);
    }
    return sum;
}
let res=d2b(n);
console.log(res);