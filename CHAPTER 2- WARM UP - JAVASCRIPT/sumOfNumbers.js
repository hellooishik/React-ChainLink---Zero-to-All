function sumOfNumbers(...args) {  

    let sum = 0;
    for (let i = 0; i < args.length; i++){
        sum += args[i];
    }
    return sum;
    
}


process.stdin.resume();
process.stdin.setEncoding("utf-8");

let remainder = '';
process.stdin.on('data', function (chunk) {
    var arr = [];
    var a = chunk.toString().split(' '); 
    for(var i=0; i<a.length; i++)
    {
        arr.push(parseInt(a[i]));
    }
    ans = sumOfNumbers(...arr);
    var ans1 = ""+ans;
    process.stdout.write(ans1);
    process.exit();
});