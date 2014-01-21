'use strict';

app.service('FormService', function FormService($http) {
    //for local testing set local url
    var url = 'http://hfyljv.uni.me/task-form/api';
    //var url = './data/data.json';

    return {
        form: function() {
            return $http.get(url).then(function (response) {
                return response.data;
            });
        }
    };
});