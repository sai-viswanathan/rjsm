var rjsmApp = angular.module('rjsmApp', ['uiRouterStyles']);

//Route Definition
rjsmApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('landing', {
                url: "/",
                views: {
                    "mainContent": {
                        templateUrl: "views/partial/signin.html"
                    }
                }
            });
    }

]).run();
