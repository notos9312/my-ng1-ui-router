var passparamsApp = angular.module('passparamsApp', ['ui.router']);

passparamsApp.config(['$stateProvider', function($stateProvider){
    $stateProvider.state('index', {
        url: '/index/:id',
        template: '<h3>index content</h3>',
        controller: function($stateParams){
            console.log($stateParams.id);
        }
    }).state('test', {
        url: '/test/:username',
        template: '<h3>test content</h3>',
        controller: function($stateParams){
            console.log($stateParams.username);
        }
    })
}]);