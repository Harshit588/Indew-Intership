const arr= [2,2,4,5,6,7,5,6,2,10,4,2,8]
let count = 0;
let element =2

for(let i of arr){
    if(i===element){
        count++;
    }
}
console.log(`${element} present ${count} times`);
