var app = angular.module('myApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state("home", {
        url: '/home',
        views: {
            '': {templateUrl: 'pages/home.html'},
            'nav@home': {templateUrl: 'pages/components/nav.html'},
            'main@home': {templateUrl: 'pages/components/main.html'}
        }
    }).state("tabA", {
        url: '/tabA',
        views: {
            '': {templateUrl: 'pages/tabA.html'},
            'nav@tabA': {templateUrl: 'pages/components/nav.html'},
            'left@tabA': {templateUrl: 'pages/components/left.html'},
            'main@tabA': {templateUrl: 'pages/components/main.html'}
        }
    }).state("tabA.itemA", {
        url: '/itemA',
    }).state("tabA.itemB", {
        url: '/itemB',
    }).state("tabA.itemC", {
        url: '/itemC',
    }).state("tabB", {
        url: '/tabB',
        views: {
            '': {templateUrl: 'pages/tabB.html'},
            'nav@tabB': {templateUrl: 'pages/components/nav.html'},
            'main@tabB': {templateUrl: 'pages/components/main.html'}
        }
    })
}]);

app.controller('ctrl', function($rootScope, $location){
    $rootScope.myUrl = $location.absUrl();
});

app.run(['$rootScope', '$location', function($rootScope, $location){
    $rootScope.$on('$locationChangeSuccess', locationChangeSuccess);
    function locationChangeSuccess(event, newUrl, currentUrl){
        $rootScope.myUrl = newUrl;
    }
}]);