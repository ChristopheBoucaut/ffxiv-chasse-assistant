(function (angular)  {
    'use strict';

    angular.module("ffxivChasse").controller('mainController', [
        '$scope',
        'cbLocalStorage',
        'maps',
        function ($scope, cbLocalStorage, maps) {
            $scope.currentMobs = {};

            $scope.countPropertiesObj = function (obj) {
                var countSelected = 0;
                for (var mobIndex in obj) {
                    if (obj[mobIndex]) {
                        countSelected++;
                    }
                };

                return countSelected;
            };

            $scope.openMap = function (position, $event) {
                window.console.log(position);
                $event.stopPropagation();
            };

            $scope.maps = maps;
        }
    ]);
})(window.angular);
