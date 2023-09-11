/*
Remove duplicates from an array using reduce().
Input Format: Given an array as input

Output Format: Return the answer in the form of array after removing duplicates.



Sample Input:

a b c d a b b c d
Sample Output:

a b c d
*/

function remDup(arr) {
    // Use reduce to build a new array without duplicates
    const uniqueArray = arr.reduce((accumulator, current) => {
        if (!accumulator.includes(current)) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);

    return uniqueArray;
}


// Input and output has already been handled for you

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
    ans = remDup(arr);
    ans.sort();
    for(var i=0; i<ans.length; i++)
    {
        process.stdout.write(ans[i]+' ');
    }
    process.exit();
});