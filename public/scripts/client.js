var verbose = true;

var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
  when("/view1", {
    templateUrl: "/views/view1.html",
    controller: "view1"
  }).
  when("/view2", {
    templateUrl: "/views/view2.html",
    controller: "view2"
  }).
  when("/view3", {
    templateUrl: "/views/view3.html",
    controller: "view3"
  }).
  when("/home", {
    templateUrl: "/views/home.html",
    controller: "home"
  }).
  otherwise({
    redirectTo: "/home"
  });
}]);
