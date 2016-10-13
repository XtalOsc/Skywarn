myApp.controller("warnings",["$scope","$http",function($scope,$http){
  if(verbose){console.log('in warnings controller');};

  $scope.report=[];
  $scope.searchZip = function(){
    //clear report array
    $scope.report = [];
    //show loading image
    $scope.loading=true;
    //hide no severe weather message
    $scope.noevent=false;
    //hide invalid zipcode message
    $scope.invalidzip=false;
    //get watches and warnings from Weather Underground API
    $http({
      method: 'GET',
      url: 'http://api.wunderground.com/api/API-ID/alerts/q/'+$scope.zipcode+'.json'
    }).then(function(response){
      //remove loading image
      $scope.loading=false;
      if(verbose){console.log('returned from server ', response);};
      console.log("typeof",typeof response.data.response.error);
      //check if the zipcode entered is valid
      if (typeof response.data.response.error == 'object') {
        //show invalid zipcode message
        $scope.invalidzip=true;
      }//end if
      //check if there are any alerts
      else if (response.data.alerts.length === 0){
        //show no severe weather message
        $scope.noevent=true;
      }//end else if
      else{
        //add data to $scope.report array
        $scope.report = response.data;
        if(verbose){console.log("API response:",response.data);};
      }//end else
    })//end weatherunderground API return
  };//end searchZip function

}]);//end warnings controller
