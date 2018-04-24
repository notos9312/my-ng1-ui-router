var simpleApp = angular.module('simpleApp', ['ui.router']);

simpleApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider.state("home", {
        url: '/',
        template: '<h2>going to test page...</h2>',
        controller: 'ctrl'
    }).state("test", {
        url: '/test',
        template: '<h3>been test</h3>'
    })
}]);

simpleApp.controller('ctrl',  function($state){
    console.log('test ctrl');
    setTimeout(function() {
        $state.go('test')
        console.log('been test')
    }, 2000);
});