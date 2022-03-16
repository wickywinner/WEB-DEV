let clargs = process.argv;
let n= parseInt(clargs[2]);
//console.log("n>>"+n);
for(let i=2;i<=n;i++)
{
    
let isPrime = Isprime(i);
if(isPrime == true)
{
  console.log(i);
}
}

function Isprime(x)
{
    let flag =true;
    for(let div=2;div*div<=x;div++)
    {
        if(x % div == 0)
        {
            flag = false;
            break;
        }
    }
    return flag ;
}