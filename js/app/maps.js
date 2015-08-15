(function (angular)  {
    'use strict';

    angular.module("ffxivChasse").constant(
        'maps',
        [
            {
                name: 'Zone 1',
                pathFileMap: 'zone1.jpg',
                mobs: [
                    {
                        name: 'Mob 1',
                        position: {x: 15.5, y: 16.6}
                    }
                ]
            },
            {
                name: 'Zone 2',
                pathFileMap: 'zone2.jpg',
                mobs: [
                    {
                        name: 'Mob 1',
                        position: {x: 15.5, y: 16.6}
                    },
                    {
                        name: 'Mob 2',
                        position: {x: 15.5, y: 16.6}
                    },
                    {
                        name: 'Mob 3',
                        position: {x: 15.5, y: 16.6}
                    }
                ]
            },
            {
                name: 'Zone 3',
                pathFileMap: 'zone3.jpg',
                mobs: [
                    {
                        name: 'Mob 1',
                        position: {x: 15.5, y: 16.6}
                    }
                ]
            }
        ]
    );
})(window.angular);
