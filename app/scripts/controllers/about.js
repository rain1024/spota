'use strict';

/**
 * @ngdoc function
 * @name spoteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spoteApp
 */
angular.module('spoteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
