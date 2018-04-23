var nestedApp = angular.module('nestedApp', ['ui.router']);

nestedApp.config(['$stateProvider', function($stateProvider){
    $stateProvider.state('parent', {
        url: '/parent',
        template: '<h2>parent msg</h2><div ui-view><div>'
    })
    .state('parent.child', {
        url: '/child',
        template: '<h2>child msg</h2>'
    })
}]);