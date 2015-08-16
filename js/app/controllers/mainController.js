(function (angular)  {
    'use strict';

    angular.module('ffxivChasse').controller('mainController', [
        '$scope',
        '$mdDialog',
        'cbLocalStorage',
        'maps',
        function ($scope, $mdDialog, cbLocalStorage, maps) {
            var NAMESPACE_FFIXV_CHASSE = 'ffxivChasse';
            var KEY_STORAGE_CURRENT_MOBS = 'currentMobs';
            var basenameFileMap = 'img/maps/';

            $scope.currentMobs = cbLocalStorage.getItem(NAMESPACE_FFIXV_CHASSE, KEY_STORAGE_CURRENT_MOBS, {});
            $scope.exportJson = '';
            $scope.importJson = '';

            $scope.$watch(
                'currentMobs',
                function(newValue, oldValue) {
                    cbLocalStorage.setItem(NAMESPACE_FFIXV_CHASSE, KEY_STORAGE_CURRENT_MOBS, newValue);
                },
                true
            );

            $scope.countPropertiesObj = function (obj) {
                var countSelected = 0;
                for (var mobIndex in obj) {
                    if (obj[mobIndex]) {
                        countSelected++;
                    }
                };

                return countSelected;
            };

            $scope.openMap = function (map, mob, $event) {
                var pathFile = basenameFileMap+map.fileName;
                var positions = mob.positions;
                var title = map.name+' - '+mob.name;

                $mdDialog.show({
                    template: templateDialog(),
                    parent: angular.element(document.body),
                    controller: [
                        '$scope',
                        function ($scope) {
                            $scope.closeDialog = $mdDialog.hide;

                            $scope.pathFile = pathFile;
                            $scope.title = title;
                            $scope.positions = positions;
                        }
                    ],
                    targetEvent: $event,
                    clickOutsideToClose: true
                });

                $event.stopPropagation();
            };

            $scope.raz = function () {
                cbLocalStorage.removeItem(NAMESPACE_FFIXV_CHASSE, KEY_STORAGE_CURRENT_MOBS);
                $scope.currentMobs = {};
            };

            $scope.export = function () {
                $scope.openExport = !$scope.openExport;
                $scope.openImport = false;
                $scope.exportJson = JSON.stringify($scope.currentMobs);
            };

            $scope.import = function () {
                if (this.importJson) {
                    try {
                        $scope.currentMobs = JSON.parse(this.importJson);
                        cbLocalStorage.setItem(NAMESPACE_FFIXV_CHASSE, KEY_STORAGE_CURRENT_MOBS, $scope.currentMobs);
                    } catch (e) {
                        if (e instanceof SyntaxError) {
                            alert('Les données utilisées pour l\'import sont invalides.');
                        } else {
                            throw e;
                        }
                    }
                }
            };

            $scope.maps = maps;

            function templateDialog() {
                return "\
                    <md-dialog aria-label='{{ title }}' style='width: 100%; height: 100%; max-width: none; max-height: none;'>\
                        <form style='margin: 0;'>\
                            <md-toolbar>\
                                <div class='md-toolbar-tools'>\
                                    <h2>{{ title }}</h2>\
                                    <span flex></span>\
                                    <md-button ng-click='closeDialog()' class='md-icon-button'>\
                                        x\
                                    </md-button>\
                                </div>\
                            </md-toolbar>\
                            <md-dialog-content style='position: relative; height: 100%;'>\
                                <div style='position: absolute; height: 100%; top: 0; left: 0; right: 0; bottom: 0; text-align: center;'>\
                                    <img ng-src='{{ pathFile }}' style='max-width: 100%; max-height: 100%;'>\
                                </div>\
                            </md-dialog-content>\
                        </form>\
                    </md-dialog>\
                ";
            }
        }
    ]);
})(window.angular);
