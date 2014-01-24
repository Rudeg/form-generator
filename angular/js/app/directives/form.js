'use strict';

app.directive('formDirective', function () {
    return {
        templateUrl: './templates/form.html',
        restrict: 'E',
        scope: {
            form:'='
        }
    };
});