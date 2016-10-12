myApp.controller("add",["$scope","$http",function($scope,$http){
  if(verbose){console.log('in add controller');};

  $scope.items = [
    { id: 1, name: 'Damage' },
    { id: 2, name: 'Flooding' },
    { id: 3, name: 'Funnel Cloud' },
    { id: 4, name: 'Hail' },
    { id: 5, name: 'Non-Rotating Wall Cloud Observed for 5-10 min' },
    { id: 6, name: 'Rotating Wall Cloud Observed for 1-3 min' },
    { id: 7, name: 'Tornado' }
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
