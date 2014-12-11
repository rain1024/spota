'use strict';

/**
 * @ngdoc function
 * @name spoteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spoteApp
 */
angular.module('spoteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
