angular.module('starter.controllers', [])

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('AccountCtrl', function($scope) {
});
