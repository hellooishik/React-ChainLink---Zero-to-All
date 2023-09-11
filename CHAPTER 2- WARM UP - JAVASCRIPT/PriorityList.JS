function newPriorityList(item) {
    var Electronics=['Mobile', 'Watch', 'Kindle'];
    var updateList = [item, ...Electronics];
    return updateList;
}



process.stdin.resume();
process.stdin.setEncoding("utf-8");

let remainder = '';
process.stdin.on('data', function (chunk) {
    var ans=newPriorityList(chunk);
    for(var i=0; i<ans.length; i++)
    {
        process.stdout.write(ans[i]+'\n');
    }
    process.exit();
});