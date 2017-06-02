var async = require('async');
var GitHubApi = require("github");

var github = new GitHubApi({
    version: '3.0.0'
});

//async.series
async.waterfall([
    function getUserAvatar(cb){
        github.search.users({q:'airbnb'}, function(err, res){
            if(err){
                callback(err,null);
            }
            var avatarUrl = res.data.items[0].avatar_url;
            cb(null, avatarUrl);
        });
    },
    function wrapAvatarInHtml(avatarUrl, cb){        
        var avatarHTML = '<h1> ' + avatarUrl + '</h1>';
        cb(null, avatarHTML);
    }
], function(err, result){
    if(err){
        console.log(err);
    }
    console.log(result);
});