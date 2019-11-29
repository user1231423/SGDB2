'use strict';

/**
 * @ngdoc overview
 * @name testeApp
 * @description
 * # testeApp
 *
 * Main module of the application.
 */
  var myApp = angular.module('testeApp', ['ui.router']);

  myApp.config(function($stateProvider){
    var ex1 = {
      name: 'ex1',
      url: '/ex1',
      controller:'ex1',
      templateUrl: '../views/ex1.html'
    }

    var ex2 = {
      name: 'ex2',
      url: '/ex2',
      controller: 'ex2',
      templateUrl: '../views/ex2.html'
    }

    var ex3 = {
      name: 'ex3',
      url: '/ex3',
      controller: 'ex3',
      templateUrl: '../views/ex3.html'
    }

    $stateProvider.state(ex1);
    $stateProvider.state(ex2);
    $stateProvider.state(ex3);
  })


