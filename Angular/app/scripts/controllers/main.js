'use strict';

/**
 * @ngdoc function
 * @name testeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testeApp
 */
var app = angular.module('testeApp');

app.controller('ex1', function ($scope) {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
});

app.controller('ex2', function ($scope) {
  $scope.dados = [
    { name: 'Pysics', marks: 70 },
    { name: 'Chemestry', marks: 80 },
    { name: 'Math', marks: 65 },
    { name: 'English', marks: 75 },
    { name: 'Hindi', marks: 67 }
  ];
});

app.controller('ex3', function ($scope, $http) {
  $scope.getItems = function () {
    $http({
      method: "GET",
      url: "./dados.json"
    }).then(function mySuccess(response) {
      var data = response.data.records;
      data.sort(function (a, b) {
        return a.Country.localeCompare(b.Country);
      });
      $scope.clientes = data;
    }, function myError(response) {
      $scope.clientes = response.statusText;
    });
  }

  $scope.apagarItem = function ($index) {
    $scope.clientes.splice($index, 1);
  }

  $scope.hide = function(){
    $scope.clientes = [];
  }
});