/*
You are given an object which has details of a particular class. Complete the function so that it returns the details of the student at i th index in the form of an array.
Input Format: Given the index (i) of the student whose details should be printed.

Output Format: An array containing name and roll no of the student.



Sample Input:

1
Sample Output

Bhavya
2
*/
function studentDetails(i) { 
    var classDetails = {
        classTeacher: 'Anjani',
        students: [{name: "Anjali", roll: "1"}, {name: "Bhavya", roll: "2"}, {name: "Neha", roll: "3"}]
    };
    // write your code here
    // Check if the index i is within bounds
    if (i >= 0 && i < classDetails.students.length) {
        const student = classDetails.students[i];
        return [student.name, student.roll];
    } else {
        return [];
    }
}


// Input and output has already been handled for you

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let remainder = '';
process.stdin.on('data', function (chunk) {
    let t = parseInt(chunk);
    let ans = studentDetails(t);
    for(var i=0; i<ans.length; i++)
    {
        process.stdout.write(ans[i]+'\n');
    }
    process.exit();
});