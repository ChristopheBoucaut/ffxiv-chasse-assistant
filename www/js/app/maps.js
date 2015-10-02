(function (angular)  {
    'use strict';

    angular.module("ffxivChasse").constant(
        'maps',
        {
            '0': {
                name: 'Azys Lla',
                fileName: 'azyslla.jpg',
                positionMax: 44,
                mobs: {
                    '3ea442c7e3b': {
                        name: 'Paladin mécanique',
                        positions: [{x: 16, y: 12}]
                    },
                    'feaaf2f6d2c': {
                        name: 'Ingénieur mécanique',
                        positions: [{x: 16, y: 12}]
                    },
                    'fca0a6c2830': {
                        name: 'Proto-naga',
                        positions: [{x: 35, y: 7}]
                    },
                    'd9df006a224': {
                        name: 'Faucheux mécanique',
                        positions: [{x: 13, y: 9}]
                    },
                    '5b9f898ae7f': {
                        name: 'Drone-drille',
                        positions: [{x: 11, y: 13}]
                    },
                    '521183af2d5': {
                        name: 'Empousa',
                        positions: [{x: 30, y: 9}]
                    },
                    '2fccdb3a9ee': {
                        name: 'Lamia cybride',
                        positions: [{x: 27, y: 11}]
                    },
                    'dac543ba5f9': {
                        name: 'Hibours',
                        positions: [{x: 13, y: 12}]
                    },
                    '0230df12f65': {
                        name: 'Chimère allagoise',
                        positions: [{x: 31, y: 6}]
                    },
                    '0824e97af4c': {
                        name: 'Droïde d\'exécution',
                        positions: [{x: 18, y: 16}]
                    },
                    '0a299b81eb1': {
                        name: 'Hydre mineure',
                        positions: [{x: 12, y: 33}]
                    },
                    '6f2e03fed54': {
                        name: 'Brobinyak méracydien',
                        positions: [{x: 7, y: 31}]
                    },
                    'a0bcba719f8': {
                        name: 'Reptoïde',
                        positions: [{x: 37, y: 7}]
                    },
                    '2889891e3c5': {
                        name: 'Falak méracydien',
                        positions: [{x: 15, y: 28}]
                    },
                    '2c77331b8fc': {
                        name: 'Vouivre méracydienne',
                        positions: [{x: 14, y: 36}]
                    }
                }
            },
            '1': {
                name: 'Hautes terres du Coerthas occidental',
                fileName: 'hautes_terres_coerthas_occidental.jpg',
                positionMax: 44,
                mobs: {
                    'd9409a9280e': {
                        name: 'Mylodon des plateaux',
                        positions: [{x: 28, y: 20}]
                    },
                    'a1857ae0d99': {
                        name: 'Oculus',
                        positions: [{x: 31, y: 28}]
                    },
                    '3dd001699ff': {
                        name: 'Bergthurs',
                        positions: [{x: 31, y: 24}]
                    },
                    '9b107a36f9a': {
                        name: 'Archéornis',
                        positions: [{x: 13, y: 7}]
                    },
                    '47bcf1990fb': {
                        name: 'Commandant gelé',
                        positions: [{x: 8, y: 14}, {x: 8, y: 11}]
                    },
                    '67c7aee3980': {
                        name: 'Ours polaire',
                        positions: [{x: 20, y: 22}]
                    },
                    '1dcaa407924': {
                        name: 'Yéti solitaire',
                        positions: [{x: 21, y: 30}]
                    },
                    '83d8b1dc8d6': {
                        name: 'Gelato',
                        positions: [{x: 11, y: 18}]
                    },
                    'df733967fcf': {
                        name: 'Grenado du gel',
                        positions: [{x: 31, y: 10}]
                    },
                    'ea95ada05cf': {
                        name: 'Chassie',
                        positions: [{x: 21, y: 27}, {x: 13, y: 19}]
                    },
                    '8221eb9e629': {
                        name: 'Piège-glace',
                        positions: [{x: 27, y: 14}, {x: 26, y: 18}]
                    },
                    '68480f161af': {
                        name: 'Tursus des terres',
                        positions: [{x: 33, y: 9}]
                    },
                    '39d61ff50d9': {
                        name: 'Loup argenté',
                        positions: [{x: 25, y: 24}]
                    },
                    '9f2deb55e3e': {
                        name: 'Yak laineux',
                        positions: [{x: 19, y: 17}]
                    }
                }
            },
            '2': {
                name: 'Avant-pays dravanien',
                fileName: 'avant_pays_dravanien.jpg',
                positionMax: 44,
                mobs: {
                    '84085002de6': {
                        name: 'Ours brun',
                        positions: [{x: 31, y: 11}]
                    },
                    '244434e3606': {
                        name: 'Hippocerf de l\'avant-pays',
                        positions: [{x: 16, y: 27}]
                    },
                    '773943744ff': {
                        name: 'Draguêpe veilleur',
                        positions: [{x: 30, y: 33}]
                    },
                    '27de7da477f': {
                        name: 'Loaghtan',
                        positions: [{x: 28, y: 27}]
                    },
                    '74a9d724f0d': {
                        name: 'Bandersnatch',
                        positions: [{x: 33, y: 15}]
                    },
                    'd584b7479d9': {
                        name: 'Puce à plumes',
                        positions: [{x: 36, y: 24}]
                    },
                    '8b6bd44df26': {
                        name: 'Syricta',
                        positions: [{x: 13, y: 16}]
                    },
                    'f588b601b49': {
                        name: 'Vinaigrier',
                        positions: [{x: 13, y: 18}]
                    },
                    '9dac1de813c': {
                        name: 'Miacis',
                        positions: [{x: 19, y: 29}]
                    },
                    '6718fa30a90': {
                        name: 'Ninki nanka d\'eau douce',
                        positions: [{x: 27, y: 24}]
                    },
                    '51e0f31be43': {
                        name: 'Mélia',
                        positions: [{x: 23, y: 26}, {x: 28, y: 24}]
                    },
                    '22b2d9dd8bf': {
                        name: 'Wyverne dravanienne',
                        positions: [{x: 13, y: 35}]
                    },
                    'deb3e3abe4f': {
                        name: 'Gnathe myrmacier',
                        positions: [{x: 29, y: 36}]
                    },
                    'e3cc52ce179': {
                        name: 'Chocobo sauvage',
                        positions: [{x: 34, y: 28}, {x: 38, y: 25}, {x: 37, y: 24}]
                    },
                    '0fb5d0a89cc': {
                        name: 'Tyrannosaure',
                        positions: [{x: 13, y: 19}]
                    },
                    'a4b7e4b57d9': {
                        name: 'Gallimimus',
                        positions: [{x: 23, y: 11}, {x: 17, y: 16}]
                    },
                    '31761cf4c5e': {
                        name: 'Dragon de foudre',
                        positions: [{x: 29, y: 7}, {x: 31, y: 5}]
                    },
                    '4a171a11156': {
                        name: 'Gnathe myrmifeu',
                        positions: [{x: 28, y: 36}]
                    },
                    '672cd0131c2': {
                        name: 'Eibis dravanien',
                        positions: [{x: 25, y: 33}, {x: 22, y: 16}]
                    }
                }
            },
            '3': {
                name: 'L\'écume des cieux de Dravania',
                fileName: 'ecume_cieux_dravania.jpg',
                positionMax: 44,
                mobs: {
                    '3c0db887cd0': {
                        name: 'Ouadjet',
                        positions: [{x: 23, y: 19}]
                    },
                    'e1f81d4e18a': {
                        name: 'Biast des brumes',
                        positions: [{x: 31, y: 31}]
                    },
                    'fae31a9f6c3': {
                        name: 'Sankchinni',
                        positions: [{x: 27, y: 32}]
                    },
                    '2f769299c1a': {
                        name: 'Dragonnet',
                        positions: [{x: 17, y: 12}]
                    },
                    'af996c5cb16': {
                        name: 'Golem de calcaire',
                        positions: [{x: 7, y: 15}]
                    },
                    '851501a9eda': {
                        name: 'Tulihänd',
                        positions: [{x: 30, y: 18}]
                    },
                    '11da29715fd': {
                        name: 'Vouivre',
                        positions: [{x: 21, y: 19}]
                    },
                    '8215d59938f': {
                        name: 'Vinaigrier à lames',
                        positions: [{x: 13, y: 23}]
                    },
                    'e696991ac89': {
                        name: 'Dragon moussu',
                        positions: [{x: 22, y: 23}]
                    },
                    '3958e91cdee': {
                        name: 'Hropken',
                        positions: [{x: 36, y: 32}]
                    },
                    'e798d00b85f': {
                        name: 'Nubeibis',
                        positions: [{x: 12, y: 36}]
                    },
                    '804ed1f2494': {
                        name: 'Amphiptère',
                        positions: [{x: 16, y: 33}]
                    },
                    '759eb58341e': {
                        name: 'Dragon de sang',
                        positions: [{x: 25, y: 7}]
                    },
                    '46ae94ac274': {
                        name: 'Maître aérien mineur',
                        positions: [{x: 18, y: 29}]
                    },
                    'f8f4bee1a97': {
                        name: 'Allosaure',
                        positions: [{x: 8, y: 19}]
                    },
                    '09774dcde85': {
                        name: 'Syricta antique',
                        positions: [{x: 34, y: 22}]
                    }
                }
            },
            '4': {
                name: 'Arrière-pays dravanien',
                fileName: 'arriere_pays_dravanien.jpg',
                positionMax: 44,
                mobs: {
                    'a985974055b': {
                        name: 'Chenille',
                        positions: [{x: 14, y: 21}]
                    },
                    'cb881af0e39': {
                        name: 'Océanide',
                        positions: [{x: 15, y: 30}]
                    },
                    'c9cd0767a8a': {
                        name: 'Cocatrix',
                        positions: [{x: 18, y: 32}]
                    },
                    'a7f3f757f7b': {
                        name: 'Sangsue solaire',
                        positions: [{x: 12, y: 33}]
                    },
                    '66ee2e4ec0a': {
                        name: 'Poroggo',
                        positions: [{x: 10, y: 34}]
                    },
                    '1ccd406bf75': {
                        name: 'Grand morbol',
                        positions: [{x: 11, y: 23}]
                    },
                    '9eb53d17036': {
                        name: 'Demoiselle',
                        positions: [{x: 24, y: 21}]
                    },
                    '4f731f57875': {
                        name: 'Opken',
                        positions: [{x: 11, y: 33}]
                    },
                    'a6029b07eef': {
                        name: 'Colibri d\'Orn',
                        positions: [{x: 15, y: 25}]
                    },
                    '483d4abca9a': {
                        name: 'Tireur gobelin',
                        positions: [{x: 31, y: 21}]
                    },
                    'acdcc4e37de': {
                        name: 'Biféricéras',
                        positions: [{x: 26, y: 35}]
                    },
                    '7a0a0dcd62e': {
                        name: 'Narbrooi',
                        positions: [{x: 38, y: 24}]
                    },
                    'd51d6d067ce': {
                        name: 'Rétameur gobelin',
                        positions: [{x: 28, y: 23}]
                    },
                    '6810e241e49': {
                        name: 'Ratel',
                        positions: [{x: 31, y: 27}]
                    },
                    'fa53bd53e77': {
                        name: 'Gnou',
                        positions: [{x: 34, y: 19}]
                    },
                    '3658e444f8b': {
                        name: 'Brandisseur gobelin',
                        positions: [{x: 33, y: 22}, {x: 28, y: 23}, {x: 29, y: 20}]
                    }
                }
            },
            '5': {
                name: 'L\'écume des cieux d\'Abalathia',
                fileName: 'ecume_cieux_abalathia.jpg',
                positionMax: 44,
                mobs: {
                    '4ea7b96f872': {
                        name: 'Païssa',
                        positions: [{x: 18, y: 34}, {x: 34, y: 31}]
                    },
                    'd53cc7faaa3': {
                        name: 'Conodonte',
                        positions: [{x: 26, y: 32}]
                    },
                    'f3862700536': {
                        name: 'Ver des nuages',
                        positions: [{x: 27, y: 33}]
                    },
                    '35f229d60d6': {
                        name: 'Nat\'laii des Gundu',
                        positions: [{x: 36, y: 24}]
                    },
                    'd7fbbb46d73': {
                        name: 'Obdella',
                        positions: [{x: 27, y: 32}]
                    },
                    '1d2ced6989d': {
                        name: 'Lan\'laii des Gundu',
                        positions: [{x: 36, y: 24}]
                    },
                    'f7112127519': {
                        name: 'Vuk\'laii des Gundu',
                        positions: [{x: 36, y: 22}]
                    },
                    '4925a643eca': {
                        name: 'Gaélichat',
                        positions: [{x: 12, y: 34}]
                    },
                    'e1ff044201e': {
                        name: 'Toco toco',
                        positions: [{x: 29, y: 6}]
                    },
                    'b66a8647d66': {
                        name: 'Gastornis',
                        positions: [{x: 13, y: 34}]
                    },
                    '99f2bacb51b': {
                        name: 'Dhalmel',
                        positions: [{x: 16, y: 31}, {x: 19, y: 29}]
                    },
                    '3620fdbfab1': {
                        name: 'Wisent',
                        positions: [{x: 11, y: 30}, {x: 14, y: 28}]
                    },
                    '1baa588169e': {
                        name: 'Tsanahale',
                        positions: [{x: 15, y: 7}]
                    },
                    '903b87ddafe': {
                        name: 'Sanuwa',
                        positions: [{x: 36, y: 21}]
                    },
                    '811d429fab5': {
                        name: 'Anzu',
                        positions: [{x: 30, y: 6}]
                    },
                    '674b90e04c4': {
                        name: 'Terragardien',
                        positions: [{x: 22, y: 12}]
                    },
                    'db60cb63873': {
                        name: 'Wamoura de la Fenêtre bleue',
                        positions: [{x: 6, y: 19}]
                    },
                    '5186f5031dd': {
                        name: 'Endymion',
                        positions: [{x: 14, y: 10}]
                    },
                    '6d3f5d1aedc': {
                        name: 'Totem des Vundu',
                        positions: [{x: 17, y: 17}]
                    }
                }
            }
        }
    );
})(window.angular);
