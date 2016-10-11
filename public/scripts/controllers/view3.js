myApp.controller("view3",["$scope","$http",function($scope,$http){
  if(verbose){console.log('in controller3');};

  $scope.collect =[];
  $scope.viewReports = function(){
    if(verbose){console.log('in viewReports');};
    $http({
      method:'GET',
      url: '/viewAll'
    }).then(function(response){
      if(verbose){console.log("response from database:",response.data);};
      $scope.collect=response.data;
    })//end response
  };//end viewReports
  $scope.viewReports();

}]);//end view3 controller
