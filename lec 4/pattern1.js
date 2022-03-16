let input = process.argv;
n = parseInt(input[2]);
for (let i = 1; i <= n; i++)
{
    let res = "";
    for (let j = 1; j <= i; j++)
    {
        res += "*\t";
    }
    console.log(res);
}