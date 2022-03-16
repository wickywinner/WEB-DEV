// Q Write a JavaScript program to compute the union of two arrays using push pop without using extra space.
// Input arr1= [1, 2, 3]
// arr2= [100, 2, 1,10]
// Output: [1,2,3,100,10]
arr1= [1, 2, 3];
arr2= [100,2,1,10];
res_arr=[];
for(let i=0;i<arr1.length;i++)
{
    for(let j=0;j<arr2.length;j++)
    if(arr1[i]==arr2[j])
    {   let ele= arr1[i];
        res_arr.push(ele);
        arr1.splice(i,1);
        arr2.splice(j,1);
        i-=1;
        break;
    }
}
if(arr1.length>0)
{
    for(let i=0;i<arr1.length;i++)
    {
        let ele= arr1[i];
        res_arr.push(ele);
    }
}
if(arr2.length>0)
{
    for(let i=0;i<arr2.length;i++)
    {
        let ele= arr2[i];
        res_arr.push(ele);
    }
}
console.log(res_arr);

