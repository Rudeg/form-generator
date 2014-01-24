'use strict';

app.directive('fieldDirective', function ($http, $compile) {

    var getTemplateUrl = function(field) {
        var type = field.field_type;
        var templateUrl = '';

        switch(type) {
            case 'Text':
                templateUrl = './templates/field/textfield.html';
                break;
            case 'Radio':
                templateUrl = './templates/field/radio.html';
                break;
            case 'Textarea':
                templateUrl = './templates/field/textarea.html';
                break;
            case 'Select':
                templateUrl = './templates/field/select.html';
                break;
        }
        return templateUrl;
    };

    var linker = function(scope, element) {
        var templateUrl = getTemplateUrl(scope.field);
        $http.get(templateUrl).success(function(data) {
            element.html(data);
            $compile(element.contents())(scope);
        });
    };

    return {
        restrict: 'E',
        scope: {
            field:'='
        },
        link: linker
    };
});