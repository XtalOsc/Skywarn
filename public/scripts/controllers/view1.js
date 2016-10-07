myApp.controller("view1",["$scope","$http",function($scope,$http){
  if(verbose){console.log('in controller1');};
  $scope.items = [
    { id: 1, name: 'Damage' },
    { id: 2, name: 'Flooding' },
    { id: 3, name: 'Funnel Cloud' },
    { id: 4, name: 'Hail' },
    { id: 5, name: 'Non-rotating Wall Cloud observed for 3-5 min' },
    { id: 6, name: 'Rotating Wall Cloud observed for 1-2 min' },
    { id: 7, name: 'Tornado' }
  ];//end scope.items
}]);//end view1 controller
