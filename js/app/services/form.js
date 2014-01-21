'use strict';

app.service('formService', function FormService($http) {
    //for local testing set local url
    //var url = 'http://hfyljv.uni.me/task-form/api';
    var url = './data/data.json';

    return {
        form: function() {
            return $http.get(url).then(function(response) {
                if(response.data.status === 'Success') {
                    response.data.errorStatus = false;
                    return response.data;
                }
                else {
                    var resp = {'Error':'Invalid data from server', errorStatus:true};
                    console.log('Invalid data from server');
                    return resp;
                }
            });
        }
    };
});