angular.module('iwasoft', ['nvd3'])
    .controller('myCtrl', function($scope) {

        /* Chart options */
        $scope.options = { /* JSON data */ };

        /* Chart data */
        $scope.data = { /* JSON data */ }

        $scope.onchange = function() {
            $scope.data = [];
            angular.forEach($scope.data, function(value, index) {
                $scope.data.push(value);
            })
        }

    })