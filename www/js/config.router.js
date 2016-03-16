'use strict';

angular.module('app')
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('welcome', {
    url: '/welcome',
    abstract: true,
    template: '<ion-nav-bar class="bar-dark"><ion-nav-back-button></ion-nav-back-button></ion-nav-bar><ion-nav-view></ion-nav-view>'
  })

  .state('welcome.greeting', {
    url: '/greeting',
    templateUrl: 'templates/welcome/greeting.html'
  })

  .state('welcome.signup', {
    url: '/signup',
    templateUrl: 'templates/welcome/signup.html'
  })

  .state('welcome.signin', {
    url: '/login',
    templateUrl: 'templates/welcome/signin.html',
    controller: 'signinController'
  })

  $urlRouterProvider.otherwise('/welcome/greeting');
}]);
