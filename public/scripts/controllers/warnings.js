myApp.controller("warnings",["$scope","$http",function($scope,$http){
  if(verbose){console.log('in warnings controller');};

  $scope.report=[];
  $scope.searchZip = function(){
    //get watches and warnings from Weather Underground API
    $http({
      method: 'GET',
      url: 'http://api.wunderground.com/api/API-ID/alerts/q/'+$scope.zipcode+'.json'
    }).then(function(response){
      if(verbose){console.log('returned from server ', response);};
      //add data to $scope.report array
      $scope.report = response.data;
      if(verbose){console.log("API response:",response.data);};
    })//end weatherunderground API return
  };//end searchZip function

}]);//end warnings controller
