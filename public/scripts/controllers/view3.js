myApp.controller("view3",["$scope","$http",function($scope,$http){
  if(verbose){console.log('in controller3');};
  $(document).on('click','.navbar-collapse.in',function(e) {
      if( $(e.target).is('a') ) {
          $(this).collapse('hide');
        }//end if
    });//end doc on click navbar-collapse

}]);//end view3 controller
