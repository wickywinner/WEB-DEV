// Q Given a array first=[1,2,3,4,5];
//  Write a JavaScript program that fill second array in reverse order of first
//  ?
// narr=[5,4,3,2,1]
arr =[1,2,3,4,5];
rev_arr=[];
for(let i=arr.length-1;i>=0;i--)
{
    let ele = arr[i];
    rev_arr.push(ele);
}
console.log(rev_arr);