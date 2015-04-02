'use strict';

// Declare app level module which depends on views, and components
//angular.module('myApp', [
//  'ngRoute',
//  'myApp.view1',
//  'myApp.view2',
//  'myApp.version'
//])
//    .
//config(['$routeProvider', function($routeProvider) {
//  $routeProvider.otherwise({redirectTo: '/view1'});
//}])
//;

var myApp = angular.module('myApp',[]);
myApp.controller("MainController", function($http){
  var vm = this;
  vm.title = "Welcome to first example";
  vm.searchInput = "";
  vm.shows="";
  $http.get('src/json/shows.json').success(function(response){
    //console.log(response.shows);
    vm.shows =  response.shows;
    //console.log(vm.shows);

  });
  //$('select').material_select();
  $http.get('src/json/sortingKeys.json').success(function(response){
    //console.log(response.shows);
    vm.orders =  response.orders;
    vm.order = vm.orders[0];
    //console.log(vm.orders);
  });

  vm.new = {};
  vm.addShow = function() {
    vm.shows.push(vm.new);
    vm.new = {};
  };

});


