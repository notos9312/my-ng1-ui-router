var simpleApp = angular.module('simpleApp', ['ui.router']);

simpleApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider.state("home",{
        url: '/',
        template: '<h2>This is a simple usage of ui-router</h2>'
    });
}]);