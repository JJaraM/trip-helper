'use strict';
app.controller('signinController', function($scope, $stateParams, $ionicLoading, $popup, $strig) {

  $scope.init = function() {
    $scope.user = {email:'', password:''};
  }

  $scope.signIn = function() {
    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
    if ($scope.validateSignIn()) {

    }
    $ionicLoading.hide();
  }
  $scope.validateSignIn = function() {
    var result = true;

    return result;
  }
  $scope.init();
});
