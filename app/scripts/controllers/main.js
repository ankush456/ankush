'use strict';

/**
 * @ngdoc function
 * @name ankushApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ankushApp
 */
angular.module('ankushApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
