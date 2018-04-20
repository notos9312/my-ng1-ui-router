var routerApp=angular.module('routerApp',['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider){
    // $urlRouterProvider.otherwise('/index');
    $stateProvider.state("home", {
        url: '/',  
        template:"<div>homePage</div>"

    })
    .state("index", {
        url: '/index/:id',  
        template:"<div>indexcontent</div>",
        controller:function($stateParams){
            console.log('id--->'+$stateParams.id)
        }
    })  
    .state("test", {
        url: '/test/:username',  
        template:"<div>testContent</div>",
        controller:function($stateParams){
            console.log('username--->'+$stateParams.username)
        }
    })
    
});