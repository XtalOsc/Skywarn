myApp.controller("view",["$scope","$http",function($scope,$http){
  if(verbose){console.log('in view controller');};

  $scope.collect =[];
  $scope.viewReports = function(){
    if(verbose){console.log('in viewReports');};

    //get all spotter reports from database
    $http({
      method:'GET',
      url: '/viewAll'
    }).then(function(response){
      if(verbose){console.log("response from server:",response.data);};
      $scope.collect=response.data;
    })//end /viewAll return
  };//end viewReports function
  $scope.viewReports();

}]);//end view controller
