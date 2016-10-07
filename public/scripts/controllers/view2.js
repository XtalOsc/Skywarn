myApp.controller("view2",["$scope","$http",function($scope,$http){
  if(verbose){console.log('in controller2');};

  $(document).on('click','.navbar-collapse.in',function(e) {
      if( $(e.target).is('a') ) {
          $(this).collapse('hide');
        }//end if
    });//end doc on click navbar-collapse

  $scope.report=[];
  $scope.searchZip = function(){
    $http({
      method: 'GET',
      url: 'http://api.wunderground.com/api/API-ID/alerts/q/'+$scope.zipcode+'.json'
    }).then(function(response){
      console.log('returned from server ', response);
      $scope.report = response.data;
      console.log("API response:",response.data);
    })//end return
  };//end function
}]);//end view2 controller
