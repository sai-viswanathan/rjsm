var rjsmApp = angular.module('rjsmApp', ['uiRouterStyles']);

//Route Definition
rjsmApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: "/home",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "imageContent": {
                        templateUrl: "views/partial/landing_image.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/landing.html"
                    },
                    "footerContent": {
                        templateUrl: "views/layout/footer.html"
                    }
                },
                data: {
                    css: 'assets/css/main.css'
                }
            })
            .state('real-estate', {
                url: "/real-estate",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "imageContent": {
                        templateUrl: "views/partial/real_estate_image.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/real_estate.html"
                    },
                    "footerContent": {
                        templateUrl: "views/layout/footer.html"
                    }
                },
                data: {
                    css: 'assets/css/real_estate.css'
                }
            })
            .state('interior-design', {
                url: "/interior-design",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "imageContent": {
                        templateUrl: "views/partial/interior_image.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/interior.html"
                    },
                    "footerContent": {
                        templateUrl: "views/layout/footer.html"
                    }
                },
                data: {
                    css: 'assets/css/interior.css'
                }
            })
            .state('facility-management', {
                url: "/facility-management",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "imageContent": {
                        templateUrl: "views/partial/facility_mgmt_image.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/facility_mgmt.html"
                    },
                    "footerContent": {
                        templateUrl: "views/layout/footer.html"
                    }
                },
                data: {
                    css: 'assets/css/facility_mgmt.css'
                }
            })
            .state('event-management', {
                url: "/event-management",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "imageContent": {
                        templateUrl: "views/partial/event_mgmt_image.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/event_mgmt.html"
                    },
                    "footerContent": {
                        templateUrl: "views/layout/footer.html"
                    }
                },
                data: {
                    css: 'assets/css/event_mgmt.css'
                }
            })
            .state('automobiles', {
                url: "/automobiles",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "imageContent": {
                        templateUrl: "views/partial/automobiles_image.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/automobiles.html"
                    },
                    "footerContent": {
                        templateUrl: "views/layout/footer.html"
                    }
                },
                data: {
                    css: 'assets/css/automobiles.css'
                }
            });
        $urlRouterProvider.otherwise("home");
    }

]).run(['$state', '$rootScope',
    function($state, $rootScope) {
        $rootScope.$on('$stateChangeStart', 
            function(event, toState, fromState) {
                $rootScope.fromState = fromState;
                $rootScope.toState = toState;
                $rootScope.curPage = toState.name;
            }
        );
    }
]);

rjsmApp.controller('carouselCtrl', function($scope) {
    $scope.carouselImages = ['assets/images/landing_page/landing_bg.jpg', 'assets/images/real_estate/real_estate_header.jpg', 'assets/images/interior/interior_header.jpg'];
});
