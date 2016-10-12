var verbose = true;
if(verbose){console.log('in client.js');};
var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
  when("/add", {
    templateUrl: "/views/add.html",
    controller: "add"
  }).
  when("/warnings", {
    templateUrl: "/views/warnings.html",
    controller: "warnings"
  }).
  when("/view", {
    templateUrl: "/views/view.html",
    controller: "view"
  }).
  when("/home", {
    templateUrl: "/views/home.html",
    controller: "home"
  }).
  otherwise({
    redirectTo: "/home"
  });
}]);
