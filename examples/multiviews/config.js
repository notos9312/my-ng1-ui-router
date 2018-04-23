var multiviewsApp = angular.module('multiviewsApp', ['ui.router']);

multiviewsApp.config(['$stateProvider', function($stateProvider){
    $stateProvider.state('index1', {
        url: '/index1',
        views: {
            'header': {template: '<h2>header1</h2>'},
            'nav': {template: '<h2>nav1</h2>'},
            'body': {template: '<h2>body1</h2>'}
        }
    }).state('index2', {
        url: '/index2',
        views: {
            'header': {template: '<h2>header2</h2>'},
            'nav': {template: '<h2>nav2</h2>'},
            'body': {template: '<h2>body2</h2>'}
        }
    })
}]);