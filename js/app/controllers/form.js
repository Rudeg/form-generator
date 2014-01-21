'use strict';

app.controller('FormCtrl', function ($scope, FormService) {
    $scope.form = {};
    //assign data to scope
    FormService.form().then(function(form) {
        $scope.form = form;
    });
});