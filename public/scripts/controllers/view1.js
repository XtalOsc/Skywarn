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

  $scope.newSkywarnReport = function(){
    if(verbose){console.log('in newSkywarnReport'););
    
    //add newReport object
    var newReport ={
      skywarn_id: $scope.spotterID,
      callsign: $scope.callsign,
      current_location: $scope.currentLocation,
      weather_condition: $scope.weatherEvent,
      additional_information: $scope.addInfo,
    };//end newReport object

    $http({
      method: 'POST',
      url: '/addReport',
      data: newReport
    }).then(function(response){
      if(verbose){console.log('returned from server: ', response);};
      //empty input fields
      $scope.spotterID="";
      $scope.callsign="";
      $scope.currentLocation="";
      $scope.weatherEvent="";
      $scope.addInfo="";
    })//end return
  };//end newSkywarnReport

}]);//end view1 controller
