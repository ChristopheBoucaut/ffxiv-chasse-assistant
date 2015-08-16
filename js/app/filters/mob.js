(function (angular)  {
    'use strict';

    angular.module('ffxivChasse').filter('mob', function () {
        return function (input, search) {
            if (!input) return input;
            if (!search) return input;

            var result = {};
            var expected;

            // Filter on map
            var searchOnMap = search.hasOwnProperty('mobs');
            if (searchOnMap) {
                expected = ('' + search.mobs.name).toLowerCase();
            } else {
                expected = ('' + search.name).toLowerCase();
            }

            angular.forEach(input, function (data, key) {
                if (searchOnMap) {
                    angular.forEach(data.mobs, function (mob, keyMobs) {
                        var actual = ('' + mob.name).toLowerCase();
                        if (actual.indexOf(expected) !== -1) {
                            result[key] = data;
                        }
                    });
                } else {
                    var actual = ('' + data.name).toLowerCase();
                    if (actual.indexOf(expected) !== -1) {
                        result[key] = data;
                    }
                }
            });

            return result;
        }
    });
})(window.angular);
