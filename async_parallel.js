var async = require('async');

//array
var stack = [];

var f1 = function(cb){
    cb(null, 'f1 result');
}

var f2 = function(cb){
    cb(null, 'f2 result');
}

var f3 = function(cb){
    cb(null, 'f3 result');
}

stack.push(f1);
stack.push(f2);
stack.push(f3);

async.parallel(stack, function(err,result){
    console.log(result); //[ 'f1 result', 'f2 result', 'f3 result' ]
});

//object
var stack = {};
stack.one = function(cb){
    cb(null,'result 1');
}

stack.two = function(cb){
    cb(null,'result 2');
}


async.parallel(stack, function(err,result){
    console.log(result); //{one:'result 1, two: 'result 2'}
});
