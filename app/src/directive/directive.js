(function () {
    'use strict';

    angular.module('myApp')
        .directive('select', materialSelect);
    console.log("coming inside directive");
    materialSelect.$inject = ['$timeout'];

    function materialSelect($timeout) {
        var directive = {
            link: link,
            restrict: 'E',
            require: '?ngModel'
        };

        function link(scope, element, attrs, ngModel) {
            $timeout(create);

            if (ngModel) {
                ngModel.$render = create;
            }

            function create() {
                element.material_select();
            }

            //if using materialize v0.96.0 use this
            element.one('$destroy', function () {
                element.material_select('destroy');
            });
        }

        return directive;
    }

})();
