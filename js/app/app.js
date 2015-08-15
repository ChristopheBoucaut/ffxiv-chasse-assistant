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
})(window.angular);
