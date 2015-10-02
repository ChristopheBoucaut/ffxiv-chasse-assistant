(function (angular)  {
    'use strict';

    var ffxivChasse = angular.module("ffxivChasse", [
        "ngMaterial",
        "cbAngular.utils.storage"
    ]);

    // configure icon service.
    ffxivChasse.config([
        '$mdIconProvider',
        function ($mdIconProvider) {
            var defaultPathIcons = 'img/icons/';
            $mdIconProvider
                .icon('arrow',  defaultPathIcons+'arrow.svg')
                .icon('map',  defaultPathIcons+'map.svg');
        }
    ]);

    ffxivChasse.run([
        '$rootScope',
        function ($rootScope) {
            window.addEventListener('resize', function () {
                $rootScope.$broadcast('resize', {});
            });
        }
    ]);
})(window.angular);
