'use strict';

app.service('formService', function ($http) {
    //for local testing set local url
    var url = 'http://hfyljv.uni.me/task-form/api?callback=JSON_CALLBACK';
    //var url = './data/data.json';

    return {
        form: function() {
            return $http.jsonp(url).success(function(response) {
                if(response.status === 'Success') {
                    response.errorStatus = false;
                    return response;
                }
                else {
                    console.log('Invalid data from server');
                    response.errorStatus = true;
                    return response;
                }
            });
        }
    };
});
