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
        url: '/itemB/:name',
    }).state("tabA.itemC", {
        url: '^/itemC',
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
    console.log('ha');
    $rootScope.myUrl = $location.absUrl();
});

app.run(['$rootScope', '$location', '$state', function($rootScope, $location, $state){
    $rootScope.$on('$locationChangeSuccess', locationChangeSuccess);
    function locationChangeSuccess(event, newUrl, currentUrl){
        if($location.url() == "/tabA") {
            $rootScope.myUrl = "turning to /tabA/itemA";
            setTimeout(function(){
                $state.go("tabA.itemA");
            }, 1000);
        } else {
            $rootScope.myUrl = newUrl;
        }
    }
}]);