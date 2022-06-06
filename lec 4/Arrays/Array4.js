//Array is sorted. Array may have duplicate values.
let arr=[1,2,3,44,44,44,44,96,100,151];
let d=44;
let fi=0;
let li=0;
for(let i=0;i<arr.length;i++)
{
    if(d==arr[i]){
        fi=i;
        break;
    }
}
for(let j=arr.length-1;j>=0;j--)
{
if(arr[j]==d)
    {
        li=j;
        break;
    }
}
console.log(fi,li);

