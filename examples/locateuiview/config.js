var locateApp = angular.module('locateApp', ['ui.router']);

locateApp.config(['$stateProvider', function($stateProvider){
    $stateProvider.state('index', {
        url: '/index',
        views: {
            'index': {template: '<div ui-view="header"></div><div ui-view="nav"></div><div ui-view="body"></div>'},
            'header@index': {template: '<h3>header in index</h3>'},
            'nav@index': {template: '<h3>nav in index</h3>'},
            'body@index': {template: '<h3>body in index</h3>'}
        }
    }).state('index.content1', {
        url: '/content1',
        views: {
            'body@index': {template: '<h3>body in index content1</h3>'}
        }
    }).state('index2.content2', {
        url: '/content2',
        views: {
            'body': {template: '<h3>body in content2</h3>'}
        }
    }).state('index2', {
        url: '/index2',
        views: {
            'index2': {template: '<div ui-view="body"></div>'}
        }
    })
}]);