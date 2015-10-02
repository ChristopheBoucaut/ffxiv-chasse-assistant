(function (angular)  {
    'use strict';

    angular.module('ffxivChasse').controller('mainController', [
        '$scope',
        '$compile',
        '$mdDialog',
        'cbLocalStorage',
        'maps',
        function ($scope, $compile, $mdDialog, cbLocalStorage, maps) {
            var NAMESPACE_FFIXV_CHASSE = 'ffxivChasse';
            var KEY_STORAGE_CURRENT_MOBS = 'currentMobs';
            var basenameFileMap = 'img/maps/';

            var colorsCircles = [
                {background: '255, 0, 0', border: 'red'},
                {background: '0, 0, 255', border: 'blue'},
                {background: '0, 255, 0', border: 'green'},
                {background: '200, 4, 208', border: '#C804D0'},
                {background: '41, 133, 140', border: '#29858C'},
                {background: '218, 90, 15', border: '#DA5A0F'},
                {background: '0, 0, 0', border: 'black'},
                {background: '255, 255, 255', border: 'white'},
                {background: '128, 128, 128', border: 'grey'},
                {background: '255, 246, 0', border: '#FFF600'},
                {background: '255, 69, 152', border: '#FF4598'}
            ];

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

            $scope.openMap = function (map, mob, $event, idsMobsSelected) {
                var pathFile = basenameFileMap+map.fileName;
                var title = map.name;
                if (idsMobsSelected === undefined) {
                    title +=' - '+mob.name;
                }

                $mdDialog.show({
                    template: templateDialog(),
                    parent: angular.element(document.body),
                    controller: [
                        '$scope',
                        '$timeout',
                        function ($scope, $timeout) {
                            $scope.closeDialog = $mdDialog.hide;

                            $scope.pathFile = pathFile;
                            $scope.title = title;

                            $timeout(function () {
                                angular.element('#dialogbox-map').bind("load", setPositions);
                            }, 0);

                            $scope.$on('resize', setPositions);
                        }
                    ],
                    targetEvent: $event,
                    clickOutsideToClose: true,
                    onComplete: function () {
                        // Hack to remove the css added by angular-material to align the dialog box when the user scroll the page.
                        var dialogBox = angular.element('.md-dialog-container');
                        dialogBox
                            .css('top', '0')
                            .css('height', 'inherit');
                        dialogBox.parent().css('top', '0');

                        angular.element('#dialogbox-map').parent().addClass('dialogbox-opened');

                        setPositions();
                    }
                });

                function setPositions() {
                    var imgElement = angular.element('#dialogbox-map');
                    var container = imgElement.parent();
                    container.children('.position').remove();

                    if (idsMobsSelected) {
                        var mobsDisplayed = 0;
                        angular.forEach(map.mobs, function (mob, keyMob) {
                            if (idsMobsSelected.hasOwnProperty(keyMob) && idsMobsSelected[keyMob]) {
                                addCircle(
                                    map,
                                    mob,
                                    colorsCircles.length > mobsDisplayed ? colorsCircles[mobsDisplayed] : colorsCircles[colorsCircles.length-1]
                                );
                                mobsDisplayed++;
                            }
                        });
                    } else {
                        addCircle(map, mob, colorsCircles[0]);
                    }

                    function addCircle(map, mob, colorUsed) {
                        var positionMax = map.positionMax - 1;
                        var imgWidth = imgElement.width();
                        var imgHeight = imgElement.height();

                        angular.forEach(mob.positions, function (position, key) {
                            var ratioWidth = imgElement.width() / positionMax;
                            var ratioHeight = imgElement.height() / positionMax;
                            var posX = position.x * ratioWidth;
                            var posY = position.y * ratioHeight;

                            var positionElement = angular.element('<div>')
                                .addClass('position')
                                .css('width', ratioWidth+'px')
                                .css('height', ratioHeight+'px')
                                .css('background', 'rgba('+colorUsed.background+', 0.5)')
                                .css('border', '1px solid '+colorUsed.border)
                                .css('position', 'absolute')
                                .css('border-radius', (imgElement.width() / positionMax)+'px')
                                .css('left', (imgElement.position().left + posX - (ratioWidth / 2))+"px")
                                .css('top', (imgElement.position().top + posY - (ratioHeight / 2))+"px");
                            positionElement.append(angular.element('<md-tooltip>').attr('md-direction', 'right').text(mob.name));

                            positionElement = $compile(positionElement)($scope);

                            container.append(positionElement);
                        });
                    }   
                }

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
                                    <img id='dialogbox-map' ng-src='{{ pathFile }}' style='max-width: 100%; max-height: 100%;'>\
                                </div>\
                            </md-dialog-content>\
                        </form>\
                    </md-dialog>\
                ";
            }
        }
    ]);
})(window.angular);
