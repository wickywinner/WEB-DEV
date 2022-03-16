//given two array find sum of two arrys
let arr1= [1,2,3];
let arr2= [100,2,1,10];
let res_arr=[];
let i=0;
let j=0;
let k=0
while(i<arr1.length &&j<arr2.length)
{
    res_arr[k]=arr1[i]+arr2[j];
    i+=1;
    j+=1;
    k+=1;
}
while(i<arr1.length)
{
    res_arr[k]=arr1[i];
    i+=1;
    k+=1;
}
while(j<arr2.length)
{
    res_arr[k]=arr2[j];
    j+=1;
    k+=1;
}
console.log(res_arr);
