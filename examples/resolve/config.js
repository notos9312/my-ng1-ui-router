var resolveApp = angular.module('resolveApp', ['ui.router']);

resolveApp.config(['$stateProvider', function($stateProvider){
    $stateProvider.state('index', {
        url: '/index',
        template: '<h3>test content</h3>',
        resolve: {
            user: function(){
                // setTimeout(function(){
                return {
                    name: 'Notos',
                    email: 'lianggh159@outlook.com'
                }
                // },1000);
            }
        },
        controller: function(user){
            console.log('user --> '+user.name);
        }
    })
}]);