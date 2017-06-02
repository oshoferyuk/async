var async = require('async');
var _ = require('lodash');

var tasksList = _.times(10, _.uniqueId.bind(null, 'task_'));


var tasksQueue = async.queue(function(task, cb){
    console.log('Performing task: ' + task.name);
    console.log('Waiting to be processed: ' + tasksQueue.length());
    console.log('------------------------');

    setTimeout(()=> cb(),1000);
}, 2);


_.each(tasksList, function(task){
    tasksQueue.push({name:task}, function(err){});
});