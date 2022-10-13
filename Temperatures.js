/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
var result;
if(n === 0){
    console.log(n);
}
else{
    result = parseInt(inputs[0]);
       if(t > 0){
        result = t;
        }
    }
    for (let i = 1; i < n; i++) {
        const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
        if (Math.abs(result) > Math.abs(t))
        
         {
            result = t;
        }
        else if (Math.abs(result) === Math.abs(t)){
        }
// Write an answer using console.log()
// To debug: console.error('Debug messages...');
console.log(result);
}