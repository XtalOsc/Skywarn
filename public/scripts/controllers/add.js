myApp.controller("add",["$scope","$http",function($scope,$http){
  if(verbose){console.log('in add controller');};

  $scope.items = [
    { name: 'Damage' },
    { name: 'Flooding' },
    { name: 'Funnel Cloud' },
    { name: 'Hail' },
    { name: 'Non-Rotating Wall Cloud Observed for 5-10 min' },
    { name: 'Rotating Wall Cloud Observed for 1-3 min' },
    { name: 'Tornado' }
  ];//end scope.items

  $scope.newSkywarnReport = function(){
    if(verbose){console.log('in newSkywarnReport');};

    //add newReport object
    var newReport ={
      skywarn_id: $scope.spotterID,
      callsign: $scope.callsign,
      current_location: $scope.currentLocation,
      weather_condition: $scope.weatherEvent,
      additional_information: $scope.addInfo
    };//end newReport object

    //send spotter report to server
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
    })//end /addReport return
  };//end newSkywarnReport function

}]);//end add controller
