myApp.controller("view1",["$scope","$http",function($scope,$http){
  if(verbose){console.log('in controller1');};

  $(document).on('click','.navbar-collapse.in',function(e) {
      if( $(e.target).is('a') ) {
          $(this).collapse('hide');
        }//end if
    });//end doc on click navbar-collapse

}]);//end view1 controller
