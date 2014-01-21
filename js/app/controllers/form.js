'use strict';

app.controller('formCtrl', function ($scope, formService) {
    $scope.form = {};
    //assign data to scope
    formService.form().then(function(form) {
        $scope.form = form;
    });
});