let arr = ["a","b","c","d"];


console.log(arr);

arr.forEach(function(a,b){

    console.log(a,b);


});

// arr.push("e");
// arr.unshift("k");
// arr.splice(2,1,"ca");

let s = arr.sort(function(a,b){

    if(a > b) return 1;
    if(a <= b) return -1;

})
console.log(s);


let search = "c";
let s1 = arr.filter(function(a,b){
    return a === search;

    return a.toUpperCase();


});

console.log(s1);

console.clear();

let a = [1,2,3];
let b = [4,5,6];
let c = [...a,...b];
console.log(c);







