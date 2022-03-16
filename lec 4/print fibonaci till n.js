let input = process.argv;
n= parseInt(input[2]);
let first=0;
let sec=1;
let i=1;
while(i<=n)
{
    console.log(first);
    let temp=first;
    first=sec;
    sec=temp+first;
    i++;
}