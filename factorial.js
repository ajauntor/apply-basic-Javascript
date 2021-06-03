function fact (num){
    var fact = 1;
    for( var i =1; i <= num; i++){
        fact = fact * i;
    }
    return fact;
}
var result = fact(5);
console.log(result);
var final = fact(8);
console.log(final);


// var result = fact(5);
// console.log(result);
// var final = fact(9);
// console.log(final);