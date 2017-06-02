var async = require('async');
var counter = 0;


async.whilst(function testCondition(){ return counter < 6; },
function increaseCounter(cb){
    counter++;
    console.log('counter is ' + counter);

    setTimeout(cb, 1000);
},
function callback(err){
    if(err)
        return;
    console.log('job is completed!');
}
);