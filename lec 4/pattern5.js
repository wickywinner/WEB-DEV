let input = process.argv;
n = parseInt(input[2]);
let space = n / 2;
let star = 1;
for (let i = 1; i <= n; i++)
{
    res = "";
    for (let j = 1; j <= space; j++)
    {
        res += "\t";
    }

    for (let k = 1; k <= star; k++) {
        res += "*\t";
    }
    console.log(res);
    if(i<n / 2)
    {
        star += 2;
        space-=1;
    }
    else
    {
        star -= 2;
        space+=1;
    }

}